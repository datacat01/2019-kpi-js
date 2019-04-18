define("@ta/social.section-overflow", ["@ta/overlays.managers", "@ta/public.iap-reporting", "@ta/social.common-popover", "@ta/social.follow", "@ta/social.login-gate", "@ta/social.overflow-ui", "@ta/tracking.interactions", "@ta/common.global"], function(e, t, n, o, r, i, a, c) {
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
        }, n.p = "", n(n.s = "./packages/social/section-overflow/section-overflow.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js": function(e, t, n) {
            "use strict";

            function o(e) {
                if (Array.isArray(e)) return e
            }
            n.d(t, "a", function() {
                return o
            })
        },
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
        "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js": function(e, t, n) {
            "use strict";

            function o() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
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
                var n, o, r = function i(e, t) {
                    if (null == e) return {};
                    var n, o, r = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
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
                return i
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function i(e, t) {
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
        "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js": function(e, t, n) {
            "use strict";
            var o = n("./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");

            function i(e, t) {
                return Object(o.a)(e) || function n(e, t) {
                    var n = [],
                        o = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var a, c = e[Symbol.iterator](); !(o = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); o = !0);
                    } catch (e) {
                        r = !0, i = e
                    } finally {
                        try {
                            o || null == c.return || c.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return n
                }(e, t) || Object(r.a)()
            }
            n.d(t, "a", function() {
                return i
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
        "./node_modules/react-redux/es/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react-redux/es/index.js")
        },
        "./node_modules/react/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react/index.js")
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
        "./packages/failover/readonly/HideOnReadonly.jsx": function(e, t, n) {
            "use strict";
            n("./node_modules/react/index.js");
            var o = n("./node_modules/react-redux/es/index.js");
            t.a = Object(o.connect)(function(e) {
                return {
                    isReadonlyMode: e.meta.readonlyMode
                }
            })(function e(t) {
                var n = t.isReadonlyMode,
                    o = t.replaceWith,
                    r = t.children;
                return n ? void 0 !== o ? o : null : r
            })
        },
        "./packages/social/actions/UntagConfirmation.jsx": function(e, t, n) {
            "use strict";
            var o = n("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
                i = n("./node_modules/react/index.js"),
                a = n("./packages/common/i18n/i18n.jsx"),
                c = n("@ta/social.common-popover"),
                l = n("@ta/tracking.interactions"),
                s = function e(t) {
                    var n = t.untagObject,
                        s = Object(r.a)(t, ["untagObject"]),
                        u = Object(a.localize)("social_untag_confirmation_message"),
                        f = Object(a.localize)("social_untag_yourself"),
                        d = function e() {
                            return Object(a.localize)("aao_delete_cancel_btn_fffff375")
                        },
                        p = function e() {
                            return Object(a.localize)("social_remove_tag")
                        };
                    return i.createElement(l.InteractionLogger, null, function(e) {
                        return i.createElement(c.ConfirmationPopover, Object(o.a)({}, s, {
                            header: f,
                            description: u,
                            cancel: d,
                            confirm: p,
                            onConfirm: function t(o) {
                                e(o, "untagConfirm"), n && n()
                            },
                            onCancel: function t(n) {
                                e(n, "untagCancel")
                            }
                        }))
                    })
                };
            s.defaultProps = {
                above: void 0,
                below: void 0,
                rightOf: void 0,
                leftOf: void 0,
                alignEdge: void 0,
                shiftX: 0,
                shiftY: 0,
                shiftArrow: 0,
                fixed: !1,
                untagObject: null
            }, t.a = s
        },
        "./packages/social/section-overflow/section-overflow.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                u = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                f = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                d = n("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                p = n("./node_modules/react/index.js"),
                m = n("./packages/common/logging/logging.jsx"),
                b = n.n(m),
                _ = n("./packages/common/features/features.jsx"),
                j = n("./packages/common/i18n/i18n.jsx"),
                O = n("@ta/overlays.managers"),
                g = n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
                y = n("@ta/social.common-popover"),
                v = {
                    Review: function e() {
                        return Object(j.localize)("delete_confirmation_description_review_0")
                    },
                    Photo: function e() {
                        return Object(j.localize)("delete_confirmation_description_photo_0")
                    },
                    Video: function e() {
                        return Object(j.localize)("delete_confirmation_description_video_0")
                    },
                    ForumPost: function e() {
                        return Object(j.localize)("delete_confirmation_description_forum_post_0")
                    },
                    LinkPost: function e() {
                        return Object(j.localize)("delete_confirmation_description_link_post_0")
                    },
                    Trip: function e() {
                        return Object(j.localize)("trips_delete_trip_confirmation_text_v2")
                    },
                    Repost: function e() {
                        return Object(j.localize)("delete_confirmation_description_repost_0")
                    },
                    ApiLocationTopic: function e() {
                        return Object(j.localize)("aao_delete_question_msg_fffff375")
                    },
                    ApiTopicPosting: function e() {
                        return Object(j.localize)("aao_delete_answer_msg_fffff375")
                    },
                    MediaBatch: function e() {
                        return Object(j.localize)("delete_confirmation_description_post_0")
                    }
                },
                h = {
                    Review: function e() {
                        return Object(j.localize)("delete_confirmation_header_review_0")
                    },
                    Photo: function e() {
                        return Object(j.localize)("delete_confirmation_header_photo_0")
                    },
                    Video: function e() {
                        return Object(j.localize)("delete_confirmation_header_video_0")
                    },
                    ForumPost: function e() {
                        return Object(j.localize)("delete_confirmation_header_forum_post_0")
                    },
                    LinkPost: function e() {
                        return Object(j.localize)("delete_confirmation_header_link_post_0")
                    },
                    Repost: function e() {
                        return Object(j.localize)("delete_confirmation_header_repost_1")
                    },
                    Trip: function e() {
                        return Object(j.localize)("trips_delete_trip_confirmation_header")
                    },
                    MediaBatch: function e() {
                        return Object(j.localize)("delete_confirmation_header_post_0")
                    }
                },
                E = function e() {
                    return Object(j.localize)("aao_delete_cancel_btn_fffff375")
                },
                w = function e() {
                    return Object(j.localize)("inbox_swipe_delete")
                },
                P = function e(t) {
                    var n = t.objectType,
                        o = t.deleteObject,
                        i = Object(g.a)(t, ["objectType", "deleteObject"]);
                    return p.createElement(y.ConfirmationPopover, Object(r.a)({}, i, {
                        header: h[n],
                        description: v[n],
                        cancel: E,
                        confirm: w,
                        onConfirm: o,
                        onCancel: null
                    }))
                };
            P.defaultProps = {
                above: void 0,
                below: void 0,
                rightOf: void 0,
                leftOf: void 0,
                alignEdge: void 0,
                shiftX: 0,
                shiftY: 0,
                shiftArrow: 0,
                fixed: !1,
                deleteObject: null
            };
            var T = P,
                x = n("./packages/social/actions/UntagConfirmation.jsx"),
                k = n("@ta/social.follow"),
                R = n.n(k),
                I = n("@ta/social.overflow-ui"),
                L = n("@ta/tracking.interactions"),
                z = n("@ta/social.login-gate"),
                S = n("@ta/public.iap-reporting"),
                C = n("./packages/failover/readonly/HideOnReadonly.jsx"),
                M = ["Video", "Photo", "LinkPost"],
                A = ["Review", "Photo", "Video", "LinkPost", "ForumPost", "Trip", "RoomTip", "ApiLocationTopic", "ApiTopicPosting"],
                F = function(e) {
                    function t() {
                        var e, n;
                        Object(i.a)(this, t);
                        for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++) a[s] = arguments[s];
                        return n = Object(c.a)(this, (e = Object(l.a)(t)).call.apply(e, [this].concat(a))), Object(f.a)(Object(u.a)(Object(u.a)(n)), "renderReportModal", function(e) {
                            var t = n.props.reportModalName,
                                o = Object(S.reportPropsFromObject)(e);
                            switch (e.__typename) {
                                case "RoomTip":
                                case "Review":
                                    return p.createElement(S.ReportReviewModal, Object(r.a)({}, o, {
                                        modalName: t,
                                        key: "report"
                                    }));
                                case "Photo":
                                    return p.createElement(S.ReportPhotoModal, Object(r.a)({}, o, {
                                        modalName: t,
                                        key: "report"
                                    }));
                                case "Video":
                                    return p.createElement(S.ReportVideoModal, Object(r.a)({}, o, {
                                        modalName: t,
                                        key: "report"
                                    }));
                                case "LinkPost":
                                    return p.createElement(S.ReportLinkModal, Object(r.a)({}, o, {
                                        modalName: t,
                                        key: "report"
                                    }));
                                case "ForumPost":
                                    return p.createElement(S.ReportForumModal, Object(r.a)({}, o, {
                                        modalName: t,
                                        key: "report"
                                    }));
                                case "Trip":
                                    return p.createElement(S.ReportTripModal, Object(r.a)({}, o, {
                                        modalName: t,
                                        key: "report"
                                    }));
                                case "Repost":
                                    return p.createElement(S.ReportRepostModal, Object(r.a)({}, o, {
                                        modalName: t,
                                        key: "report"
                                    }));
                                case "ApiLocationTopic":
                                    return p.createElement(S.ReportLocationTopicModal, Object(r.a)({}, o, {
                                        modalName: t,
                                        key: "report"
                                    }));
                                case "ApiTopicPosting":
                                    return p.createElement(S.ReportLocationTopicPostModal, Object(r.a)({}, o, {
                                        modalName: t,
                                        key: "report"
                                    }));
                                default:
                                    return b.a.error("Tried to report unsupported report type ".concat(e.__typename, ":").concat(o.contentId)), null
                            }
                        }), Object(f.a)(Object(u.a)(Object(u.a)(n)), "renderList", function(e) {
                            var t = e.reportEnabled,
                                o = e.editEnabled,
                                r = e.deleteEnabled,
                                i = e.untagEnabled,
                                a = e.followEnabled,
                                c = e.onDelete,
                                l = e.onUntag,
                                s = e.mergedSectionObjectForType,
                                u = n.props,
                                f = u.onEdit,
                                d = u.onReport,
                                m = u.loginGate,
                                b = u.logInteraction,
                                _ = u.sectionActor,
                                g = [];
                            return t && g.push(p.createElement(I.OverflowUIListItem, {
                                key: "report",
                                onClick: function e(t) {
                                    var n = t.event,
                                        o = t.close;
                                    b(n, "report");
                                    var r = function e() {
                                        d(), n.stopPropagation(), o()
                                    };
                                    m ? m().then(function() {
                                        r()
                                    }) : r()
                                }
                            }, Object(j.localize)("social_report_1"))), o && g.push(p.createElement(I.OverflowUIListItem, {
                                key: "edit",
                                onClick: function e(t) {
                                    var n = t.event,
                                        o = t.close;
                                    "function" == typeof f && f(), n.stopPropagation(), o()
                                }
                            }, p.createElement("span", null, Object(j.localize)("trips_edit_CTA"), " "))), r && c && g.push(p.createElement(I.OverflowUIListItem, {
                                key: "delete",
                                onClick: function e(t) {
                                    var n = t.event,
                                        o = t.close;
                                    b(n, "delete"), "function" == typeof c && c(), n.stopPropagation(), o()
                                }
                            }, p.createElement("span", null, Object(j.localize)("inbox_swipe_delete"), " "))), a && g.push(p.createElement(I.OverflowUIListItem, {
                                key: "follow",
                                onClick: function e(t) {
                                    t.event.stopPropagation()
                                }
                            }, p.createElement(O.Closer, null, function(e) {
                                return p.createElement(R.a, {
                                    profile: _,
                                    displayType: "plain",
                                    onActionComplete: e
                                })
                            }))), i && l && g.push(p.createElement(I.OverflowUIListItem, {
                                key: "untag",
                                onClick: function e(t) {
                                    var n = t.event,
                                        o = t.close;
                                    b(n, "untag"), "function" == typeof l && l(), n.stopPropagation(), o()
                                }
                            }, p.createElement("span", null, Object(j.localize)("social_untag_me"), " "))), p.createElement(p.Fragment, null, t ? n.renderReportModal(s.REPORT) : null, p.createElement(I.OverflowUI, {
                                onClick: function e(t) {
                                    return b(t, "overflowMenuClick")
                                }
                            }, p.createElement(I.OverflowUIList, null, g)))
                        }), n
                    }
                    return Object(s.a)(t, e), Object(a.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t, n = this,
                                r = this.props,
                                i = r.deleteObject,
                                a = r.onEdit,
                                c = r.untagObject,
                                l = r.sectionActor,
                                s = r.sectionObject,
                                u = r.sectionObjectForType,
                                f = r.overrideItems,
                                m = void 0 === f ? {} : f;
                            if (!s && !u) return null;
                            var b = s ? function e(t) {
                                    var n = {};
                                    return t.forEach(function(e) {
                                        var t = Object(d.a)(e, 2),
                                            o = t[0],
                                            r = t[1];
                                        n[o] = r
                                    }), n
                                }(["REPORT", "DELETE", "EDIT", "FOLLOW", "UNTAG"].map(function(e) {
                                    return [e, s]
                                })) : {},
                                j = Object(o.a)({}, b, u),
                                O = l && l.isMe,
                                g = Object(_.featureIsEnabled)("social_report_iap_enabled") && (Object(_.featureIsEnabled)("social_report_repost_iap_enabled") || "Repost" !== j.REPORT.__typename) && ("Repost" === j.REPORT.__typename && A.includes(null === (t = j.REPORT.repostedObject) || void 0 === t ? void 0 : t.__typename) || A.includes(j.REPORT.__typename)) && !1 !== m.REPORT && (m.REPORT || !O),
                                y = Object(_.featureIsEnabled)("social_edit_enabled") && M.includes(j.EDIT.__typename) && a && !(!1 === m.EDIT) && (!0 === m.EDIT || O),
                                v = Object(_.featureIsEnabled)("social_delete_enabled") && i && j.DELETE && !1 !== m.DELETE && (m.DELETE || O),
                                h = Object(_.featureIsEnabled)("social_follow_enabled") && !1 !== m.FOLLOW && l && (m.FOLLOW || !O),
                                E = Object(_.featureIsEnabled)("social_at_referencing_profile_links") && c && j.UNTAG && !1 !== m.UNTAG;
                            return g || y || v || h || E ? v ? p.createElement(T, {
                                objectType: j.DELETE.__typename,
                                deleteObject: i,
                                shiftY: -5,
                                below: !0,
                                alignEdge: "right"
                            }, function(e, t) {
                                return p.createElement(p.Fragment, null, p.createElement(x.a, {
                                    untagObject: c,
                                    shiftY: -5,
                                    below: !0,
                                    alignEdge: "right"
                                }, function(e, o) {
                                    return p.createElement(p.Fragment, null, n.renderList({
                                        reportEnabled: g,
                                        editEnabled: y,
                                        deleteEnabled: v,
                                        untagEnabled: E,
                                        followEnabled: h,
                                        mergedSectionObjectForType: j,
                                        onDelete: t,
                                        onUntag: o
                                    }), p.createElement("span", {
                                        className: "social-section-overflow-SectionOverflowMenu__float--3mJ5J",
                                        ref: e
                                    }))
                                }), p.createElement("span", {
                                    className: "social-section-overflow-SectionOverflowMenu__float--3mJ5J",
                                    ref: e
                                }))
                            }) : p.createElement(x.a, {
                                untagObject: c,
                                shiftY: -5,
                                below: !0,
                                alignEdge: "right"
                            }, function(e, t) {
                                return p.createElement(p.Fragment, null, n.renderList({
                                    reportEnabled: g,
                                    editEnabled: y,
                                    deleteEnabled: v,
                                    untagEnabled: E,
                                    followEnabled: h,
                                    mergedSectionObjectForType: j,
                                    onDelete: null,
                                    onUntag: t
                                }), p.createElement("span", {
                                    className: "social-section-overflow-SectionOverflowMenu__float--3mJ5J",
                                    ref: e
                                }))
                            }) : null
                        }
                    }]), t
                }(p.Component);
            Object(f.a)(F, "defaultProps", {
                onReport: void 0,
                onEdit: void 0,
                untagObject: void 0,
                deleteObject: void 0,
                loginGate: void 0,
                sectionObjectForType: void 0
            });
            var N = function e(t) {
                var n = t.sectionActor,
                    o = t.deleteObject,
                    r = t.onEdit,
                    i = t.untagObject,
                    a = t.sectionObject,
                    c = t.sectionObjectForType,
                    l = t.overrideItems,
                    s = p.useRef("ReportIAP:".concat(Math.random())).current;
                return p.createElement(C.a, null, p.createElement(z.SocialLoginGate, {
                    pid: 40474
                }, function(e) {
                    return p.createElement(O.Opener, {
                        name: s
                    }, function(t) {
                        return p.createElement(L.InteractionLogger, null, function(u) {
                            return p.createElement(F, {
                                sectionActor: n,
                                reportModalName: s,
                                onReport: t,
                                logInteraction: u,
                                loginGate: e,
                                deleteObject: o,
                                sectionObjectForType: c,
                                onEdit: r,
                                untagObject: i,
                                sectionObject: a,
                                overrideItems: l
                            })
                        })
                    })
                }))
            };
            n.d(t, "SectionOverflowMenu", function() {
                return N
            })
        },
        "@ta/overlays.managers": function(t, n) {
            t.exports = e
        },
        "@ta/public.iap-reporting": function(e, n) {
            e.exports = t
        },
        "@ta/social.common-popover": function(e, t) {
            e.exports = n
        },
        "@ta/social.follow": function(e, t) {
            e.exports = o
        },
        "@ta/social.login-gate": function(e, t) {
            e.exports = r
        },
        "@ta/social.overflow-ui": function(e, t) {
            e.exports = i
        },
        "@ta/tracking.interactions": function(e, t) {
            e.exports = a
        },
        "dll-reference @ta/common.global": function(e, t) {
            e.exports = c
        }
    })
});
//# sourceMappingURL=social.section-overflow.e8ad366b19.js.map