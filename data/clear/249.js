define("@ta/tracking.interactions", ["@ta/common.localstorage", "@ta/common.global"], function(e, n) {
    return function(e) {
        var n = {};

        function t(o) {
            if (n[o]) return n[o].exports;
            var r = n[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports
        }
        return t.m = e, t.c = n, t.d = function(e, n, o) {
            t.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: o
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
            var o = Object.create(null);
            if (t.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & n && "string" != typeof e)
                for (var r in e) t.d(o, r, function(n) {
                    return e[n]
                }.bind(null, r));
            return o
        }, t.n = function(e) {
            var n = e && e.__esModule ? function n() {
                return e.default
            } : function n() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        }, t.p = "", t(t.s = "./packages/tracking/interactions/interactions.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, n, t) {
            "use strict";

            function o(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }
            t.d(n, "a", function() {
                return o
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/objectSpread.js": function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return r
            });
            var o = t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

            function r(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.forEach(function(n) {
                        Object(o.a)(e, n, t[n])
                    })
                }
                return e
            }
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
        "./packages/common/decode/decode.jsx": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/decode/decode.jsx")
        },
        "./packages/common/logging/logging.jsx": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/logging/logging.jsx")
        },
        "./packages/tracking/interactions/interactions.jsx": function(e, n, t) {
            "use strict";
            t.r(n);
            var o = t("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                r = t("./node_modules/react/index.js"),
                a = t("./node_modules/react-redux/es/index.js"),
                i = t("./node_modules/react-apollo/react-apollo.browser.umd.js"),
                c = t("./packages/common/decode/decode.jsx"),
                l = t.n(c),
                u = t("@ta/common.localstorage"),
                s = t.n(u),
                d = t("./packages/common/logging/logging.jsx"),
                m = t.n(d),
                f = r.createContext(null),
                p = r.createContext({
                    itemId: ""
                }),
                g = r.createContext(null),
                b = r.createContext(null),
                k = r.createContext(null),
                v = r.createContext(null),
                x = r.createContext(null),
                C = r.createContext(null),
                j = r.createContext(null),
                y = r.createContext(null),
                h = r.createContext(null),
                w = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "LogInteractions"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "interactions"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "ListType",
                                    type: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "InteractionWithTimestampInput"
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
                                    value: "clientRequestTimestamp"
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
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "logInteractions"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "interactions"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "interactions"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "clientRequestTimestamp"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "clientRequestTimestamp"
                                        }
                                    }
                                }],
                                directives: []
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 211
                    }
                };
            w.loc.source = {
                body: "2f6863dd8a7e"
            };
            var T = w,
                O = function e(n) {
                    var t = s.a.get("interactionData");
                    t && (n({
                        variables: {
                            interactions: t,
                            clientRequestTimestamp: (new Date).getTime()
                        }
                    }), s.a.remove("interactionData"))
                },
                I = function e(n, t, o) {
                    ! function e(n) {
                        var t = s.a.get("interactionData");
                        t || (t = []);
                        var o = {
                            eventTimestampMsClient: (new Date).getTime(),
                            interaction: n
                        };
                        t.push(o), s.a.set("interactionData", t)
                    }(t),
                    function e(n) {
                        if (!n) return !1;
                        var t = n.target,
                            o = n.currentTarget;
                        if (t && o && t instanceof HTMLElement) {
                            var r = t,
                                a = !1;
                            do {
                                if (r instanceof HTMLElement && r.dataset.encodedUrl) {
                                    var i = l()(r.dataset.encodedUrl),
                                        c = document.createElement("a");
                                    c.href = i, r.parentElement instanceof HTMLElement && (c.style.display = "none", r.parentElement.appendChild(c)), r = c
                                }
                                if (r instanceof HTMLAnchorElement) {
                                    var u = r;
                                    if (window && window.location && window.location.hostname && window.location.hostname === u.hostname) return !0
                                }
                                a = r === o || a, r = r.parentElement
                            } while (r && !a)
                        }
                        return !1
                    }(n) || O(o)
                },
                N = function e(n) {
                    return n.isReadonlyMode ? n.children(function() {}) : r.createElement(r.Fragment, null, r.createElement(i.Mutation, {
                        mutation: T
                    }, function(e) {
                        return O(e),
                            function e(n, t) {
                                return r.createElement(g.Consumer, null, function(e) {
                                    return e && "mixer" === e.namespace ? function e(n, t) {
                                        var o = t.children;
                                        return r.createElement(f.Consumer, null, function(e) {
                                            return r.createElement(p.Consumer, null, function(t) {
                                                return o(function o(r, a, i) {
                                                    var c = i || {},
                                                        l = {};
                                                    switch (a) {
                                                        case "delete":
                                                        case "linkedPoiScroll":
                                                        case "overflowMenuClick":
                                                        case "report":
                                                        case "seeAll":
                                                        case "shelfScroll":
                                                        case "untag":
                                                        case "untagConfirm":
                                                        case "untagCancel":
                                                            l[a] = {
                                                                feedSectionId: e
                                                            };
                                                            break;
                                                        case "linkedPhotoClick":
                                                            l[a] = {
                                                                feedSectionId: e
                                                            }, Object.assign(l[a], c);
                                                            break;
                                                        case "linkedPoiClick":
                                                            l[a] = {
                                                                feedSectionId: e,
                                                                placement: "HEADER"
                                                            }, Object.assign(l[a], c);
                                                            break;
                                                        case "feedClick":
                                                        case "helpful":
                                                        case "repost":
                                                        case "share":
                                                        case "unhelpful":
                                                        case "follow":
                                                        case "unfollow":
                                                        case "userClick":
                                                        case "save":
                                                        case "dismiss":
                                                        case "userReferenceClick":
                                                        case "linkedSnippetClick":
                                                            l[a] = {
                                                                feedSectionId: e,
                                                                itemId: t.itemId
                                                            }, Object.assign(l[a], c);
                                                            break;
                                                        case "showMore":
                                                            l[a] = c;
                                                            break;
                                                        default:
                                                            var u = a || "undefined";
                                                            m.a.error("Unknown mixer interaction type: ".concat(u))
                                                    }
                                                    I(r, {
                                                        mixer: l
                                                    }, n)
                                                })
                                            })
                                        })
                                    }(n, t) : e && "home" === e.namespace ? function e(n, t) {
                                        var a = t.children;
                                        return r.createElement(b.Consumer, null, function(e) {
                                            return r.createElement(C.Consumer, null, function(t) {
                                                return a(function r(a, i, c) {
                                                    var l = c || {},
                                                        u = {};
                                                    u["unfollow" === i ? "unFollow" : i] = Object(o.a)({}, e, l, t), I(a, {
                                                        home: u
                                                    }, n)
                                                })
                                            })
                                        })
                                    }(n, t) : e && "profile" === e.namespace ? function e(n, t) {
                                        var a = t.children;
                                        return r.createElement(k.Consumer, null, function(e) {
                                            return r.createElement(C.Consumer, null, function(t) {
                                                return a(function r(a, i, c) {
                                                    var l = c || {},
                                                        u = {};
                                                    u["unfollow" === i ? "unFollow" : i] = Object(o.a)({}, e, l, t), I(a, {
                                                        profile: u
                                                    }, n)
                                                })
                                            })
                                        })
                                    }(n, t) : e && "onboarding" === e.namespace ? function e(n, t) {
                                        var a = t.children;
                                        return r.createElement(j.Consumer, null, function(e) {
                                            return a(function t(r, a, i) {
                                                var c = i || {},
                                                    l = {};
                                                l[a] = Object(o.a)({}, c, e), I(r, {
                                                    onboarding: l
                                                }, n)
                                            })
                                        })
                                    }(n, t) : e && "inbox" === e.namespace ? function e(n, t) {
                                        var o = t.children;
                                        return r.createElement(h.Consumer, null, function(e) {
                                            return o(function t(o, r, a) {
                                                var i = a || {},
                                                    c = {};
                                                switch (r) {
                                                    case "follow":
                                                    case "unfollow":
                                                        c[r] = {}, Object.assign(c[r], i), Object.assign(c[r], e);
                                                        break;
                                                    default:
                                                        var l = r || "undefined";
                                                        m.a.error("Unknown or not set up inbox interactionType: ".concat(l))
                                                }
                                                I(o, {
                                                    inbox: c
                                                }, n)
                                            })
                                        })
                                    }(n, t) : e && "search" === e.namespace ? function e(n, t) {
                                        var o = t.children;
                                        return r.createElement(v.Consumer, null, function(e) {
                                            return o(function t(o, r, a) {
                                                var i = a || {},
                                                    c = {};
                                                switch (r) {
                                                    case "follow":
                                                    case "unfollow":
                                                        c[r] = {}, Object.assign(c[r], i), Object.assign(c[r], e);
                                                        break;
                                                    default:
                                                        var l = r || "undefined";
                                                        m.a.error("Unknown or not set up search interactionType: ".concat(l))
                                                }
                                                I(o, {
                                                    search: c
                                                }, n)
                                            })
                                        })
                                    }(n, t) : e && "ugcDetail" === e.namespace ? function e(n, t) {
                                        var a = t.children,
                                            i = t.loggedInUserId;
                                        return r.createElement(x.Consumer, null, function(e) {
                                            return a(function t(r, a, c) {
                                                var l = c || {},
                                                    u = i ? {
                                                        actorUserId: i
                                                    } : {},
                                                    s = {};
                                                s["feedClick" === a ? "ugcClick" : a] = Object(o.a)({}, e, l, u), I(r, {
                                                    ugcDetail: s
                                                }, n)
                                            })
                                        })
                                    }(n, t) : e && "hotelReviewServlet" === e.namespace ? function e(n, t, a) {
                                        var i = t.children;
                                        return r.createElement(y.Consumer, null, function(e) {
                                            return i(function t(r, i, c) {
                                                var l = c || {},
                                                    u = {};
                                                u[i] = Object(o.a)({}, l, e);
                                                var s = {};
                                                s[a] = u, I(r, s, n)
                                            })
                                        })
                                    }(n, t, e.namespace) : t.children(function() {})
                                })
                            }(e, n)
                    }))
                };
            N.defaultProps = {
                loggedInUserId: null
            };
            var S = Object(a.connect)(function(e, n) {
                    return Object(o.a)({
                        loggedInUserId: e.auth.loggedInUserId,
                        isReadonlyMode: e.meta.readonlyMode
                    }, n)
                })(N),
                E = r.createContext(null),
                D = r.createContext(null),
                _ = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "LogInteractionV4"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "interaction"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "InteractionV4Input"
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
                                    value: "logInteractionV4"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "interaction"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "interaction"
                                        }
                                    }
                                }],
                                directives: []
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 111
                    }
                };
            _.loc.source = {
                body: "15da4aa6d267"
            };
            var P = _;
            t.d(n, "InteractionLogger", function() {
                return S
            }), t.d(n, "TrackingNamespaceContext", function() {
                return g
            }), t.d(n, "ItemIdContext", function() {
                return p
            }), t.d(n, "FeedSectionIdContext", function() {
                return f
            }), t.d(n, "HomeTrackingContext", function() {
                return b
            }), t.d(n, "ProfileTrackingContext", function() {
                return k
            }), t.d(n, "InboxTrackingContext", function() {
                return h
            }), t.d(n, "SearchTrackingContext", function() {
                return v
            }), t.d(n, "OnboardingTrackingContext", function() {
                return j
            }), t.d(n, "UgcDetailTrackingContext", function() {
                return x
            }), t.d(n, "FollowPlacementContext", function() {
                return E
            }), t.d(n, "SocialHotelsTrackingContext", function() {
                return y
            }), t.d(n, "RecommendedFolloweesImpressionIdContext", function() {
                return C
            }), t.d(n, "FollowTabTypeContext", function() {
                return D
            }), t.d(n, "LogInteractionV4", function() {
                return P
            })
        },
        "@ta/common.localstorage": function(n, t) {
            n.exports = e
        },
        "dll-reference @ta/common.global": function(e, t) {
            e.exports = n
        }
    })
});
//# sourceMappingURL=tracking.interactions.5190cb00d8.js.map