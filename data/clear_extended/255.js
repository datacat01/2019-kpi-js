define("@ta/social.skeletons", ["@ta/common.global"], function(e) {
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
        }, n.p = "", n(n.s = "./packages/social/skeletons/index.jsx")
    }({
        "./node_modules/react/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/classnames/classnames.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/classnames/classnames.jsx")
        },
        "./packages/social/skeletons/index.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("./node_modules/react/index.js"),
                a = n("./packages/styleguide/skeleton/Skeleton.jsx"),
                l = function e(t) {
                    for (var n = [], l = 0; l < t.numSections; l++) n.push(o.createElement("div", {
                        className: "ui_card section ".concat("social-skeletons-FeedLoadingSkeleton__container--17zFO"),
                        key: l
                    }, o.createElement("div", {
                        className: "social-skeletons-FeedLoadingSkeleton__avatar_cutout--2AfBN"
                    }), o.createElement("div", {
                        className: "social-skeletons-FeedLoadingSkeleton__avatar_vertical_bar--2szQ_"
                    }), o.createElement("div", {
                        className: "social-skeletons-FeedLoadingSkeleton__avatar_horizontal_bar--rOwDB"
                    }), o.createElement("div", {
                        className: "social-skeletons-FeedLoadingSkeleton__line_one_cutout--2YPzi"
                    }), o.createElement("div", {
                        className: "social-skeletons-FeedLoadingSkeleton__line_two_cutout--1KNLd"
                    }), o.createElement("div", {
                        className: "social-skeletons-FeedLoadingSkeleton__line_three_cutout--P9zfk"
                    }), o.createElement("div", {
                        className: "social-skeletons-FeedLoadingSkeleton__line_four_cutout--2-Dd4"
                    }), o.createElement("div", {
                        className: "social-skeletons-FeedLoadingSkeleton__line_five_cutout--2uHcm"
                    }), o.createElement("div", {
                        className: "social-skeletons-FeedLoadingSkeleton__line_six_cutout--1U78K"
                    }), o.createElement("div", {
                        className: "social-skeletons-FeedLoadingSkeleton__line_seven_cutout--1qyb4"
                    }), o.createElement("div", {
                        className: "social-skeletons-FeedLoadingSkeleton__background--7jpBD"
                    }, o.createElement(a.a, {
                        height: "100%"
                    }))));
                    return n
                },
                s = function e() {
                    return o.createElement("div", {
                        className: "ui_card section ".concat("social-skeletons-SuggestedFolloweesLoadingSkeleton__container--2AsEs")
                    }, Array.from(new Array(3), function(e, t) {
                        return o.createElement("div", {
                            className: "social-skeletons-SuggestedFolloweesLoadingSkeleton__inner_container--s_0ek",
                            key: t
                        }, o.createElement("div", {
                            className: "social-skeletons-SuggestedFolloweesLoadingSkeleton__avatar_cutout--3r2g4"
                        }), o.createElement("div", {
                            className: "social-skeletons-SuggestedFolloweesLoadingSkeleton__avatar_vertical_bar--1eLqu"
                        }), o.createElement("div", {
                            className: "social-skeletons-SuggestedFolloweesLoadingSkeleton__line_one_cutout--3M1sO"
                        }), o.createElement("div", {
                            className: "social-skeletons-SuggestedFolloweesLoadingSkeleton__line_two_cutout--IaX5O"
                        }), o.createElement("div", {
                            className: "social-skeletons-SuggestedFolloweesLoadingSkeleton__background--l_y95"
                        }, o.createElement(a.a, {
                            height: "100%"
                        })))
                    }))
                },
                c = function e() {
                    return o.createElement("div", {
                        className: "ui_card section ".concat("social-skeletons-IntroBlockLoadingSkeleton__container--1KPuM")
                    }, o.createElement("div", {
                        className: "social-skeletons-IntroBlockLoadingSkeleton__avatar_cutout--2m5xC"
                    }), o.createElement("div", {
                        className: "social-skeletons-IntroBlockLoadingSkeleton__avatar_vertical_bar--2cpIy"
                    }), o.createElement("div", {
                        className: "social-skeletons-IntroBlockLoadingSkeleton__avatar_horizontal_bar--2KULG"
                    }), o.createElement("div", {
                        className: "social-skeletons-IntroBlockLoadingSkeleton__line_one_cutout--2Exu-"
                    }), o.createElement("div", {
                        className: "social-skeletons-IntroBlockLoadingSkeleton__line_two_cutout--3TdyU"
                    }), o.createElement("div", {
                        className: "social-skeletons-IntroBlockLoadingSkeleton__line_three_cutout--2PkTH"
                    }), o.createElement("div", {
                        className: "social-skeletons-IntroBlockLoadingSkeleton__line_four_cutout--2fBWa"
                    }), o.createElement("div", {
                        className: "social-skeletons-IntroBlockLoadingSkeleton__line_five_cutout--H-bzY"
                    }), o.createElement("div", {
                        className: "social-skeletons-IntroBlockLoadingSkeleton__background--6Iy_J"
                    }, o.createElement(a.a, {
                        height: "100%"
                    })))
                },
                i = function e() {
                    return o.createElement("div", {
                        className: "".concat("social-skeletons-ProfileCardLoadingSkeleton__loading_container--xm0Kq", " ui_columns")
                    }, o.createElement("div", {
                        className: "".concat("social-skeletons-ProfileCardLoadingSkeleton__circle_container--3WP_5", " ui_skeleton ui_column")
                    }, o.createElement("div", {
                        className: "social-skeletons-ProfileCardLoadingSkeleton__circle--1RrnW"
                    })), o.createElement("div", {
                        className: "".concat("social-skeletons-ProfileCardLoadingSkeleton__skeleton_container--h-biV", " ui_column")
                    }, o.createElement(a.a, {
                        height: "18px",
                        marginBottom: "4px"
                    }), o.createElement(a.a, {
                        height: "14px"
                    })))
                };
            n.d(t, "FeedLoadingSkeleton", function() {
                return l
            }), n.d(t, "SuggestedFolloweesLoadingSkeleton", function() {
                return s
            }), n.d(t, "IntroBlockLoadingSkeleton", function() {
                return c
            }), n.d(t, "ProfileCardLoadingSkeleton", function() {
                return i
            })
        },
        "./packages/styleguide/skeleton/Skeleton.jsx": function(e, t, n) {
            "use strict";
            var o = n("./node_modules/react/index.js"),
                a = n("./packages/common/classnames/classnames.jsx"),
                l = n.n(a),
                s = function e(t) {
                    var n = t.height,
                        a = t.width,
                        s = t.marginTop,
                        c = t.marginBottom,
                        i = t.children,
                        r = t.fillParent;
                    return o.createElement("div", {
                        className: l()("styleguide-skeleton-Skeleton__skeleton--bgzMb", r ? "styleguide-skeleton-Skeleton__fill--V0sip" : null),
                        style: {
                            height: n,
                            width: a,
                            marginTop: s,
                            marginBottom: c
                        }
                    }, i)
                };
            s.defaultProps = {
                height: void 0,
                width: void 0,
                marginTop: void 0,
                marginBottom: void 0,
                children: void 0,
                fillParent: !1
            }, t.a = s
        },
        "dll-reference @ta/common.global": function(t, n) {
            t.exports = e
        }
    })
});
//# sourceMappingURL=social.skeletons.fe3ac06f64.js.map