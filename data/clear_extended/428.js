! function e(t, r, o) {
    function n(a, i) {
        if (!r[a]) {
            if (!t[a]) {
                var l = "function" == typeof require && require;
                if (!i && l) return l(a, !0);
                if (s) return s(a, !0);
                var u = new Error("Cannot find module '" + a + "'");
                throw u.code = "MODULE_NOT_FOUND", u
            }
            var d = r[a] = {
                exports: {}
            };
            t[a][0].call(d.exports, function(e) {
                var r = t[a][1][e];
                return n(r ? r : e)
            }, d, d.exports, e, t, r, o)
        }
        return r[a].exports
    }
    for (var s = "function" == typeof require && require, a = 0; a < o.length; a++) n(o[a]);
    return n
}({
    1: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        r.ShelvedBookOrigin = {
            BROWSE_SPOTLIGHT: "browse_spotlight",
            RECS_WIDGET: "recs_widget"
        }
    }, {}],
    2: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        r.URLTrackingParams = {
            FROM_SEARCH_PARAM: "from_search=true",
            BOOK_SHOW_INTERACTION_PARAM: "ac=1",
            DISCUSSIONS_PANE_ALL_DISCUSSIONS: "nav_bar_discussions_pane_all_discussions",
            DISCUSSIONS_PANE_GROUP: "nav_bar_discussions_pane_group",
            DISCUSSIONS_PANE_GROUP_ALL_UNREAD_POSTS: "nav_bar_discussions_pane_group_all_unread_posts",
            DISCUSSIONS_PANE_DISCUSSION: "nav_bar_discussions_pane_discussion",
            DISCUSSIONS_PANE_SPARSE_READING_CHALLENGES: "nav_bar_discussions_sparse_reading_challenge",
            DISCUSSIONS_PANE_SPARSE_ALL: "nav_bar_discussions_sparse_all",
            DISCUSSIONS_PANE_SPARSE_POPULAR: "nav_bar_discussions_sparse_popular"
        }
    }, {}],
    3: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        r.TRACKED_CLASSES = {
            book_image: {
                dfp: !0,
                pmet: {
                    click_type: "book_image"
                }
            },
            book_title: {
                dfp: !0,
                pmet: {
                    click_type: "book_title"
                }
            },
            author_link: {
                dfp: !0,
                pmet: {
                    click_type: "author_name"
                }
            },
            full_content_link: {
                dfp: !0,
                pmet: {
                    click_type: "body_click"
                }
            },
            user_profile: {
                dfp: !0,
                pmet: {
                    click_type: "social"
                }
            },
            want_to_read_button: {
                dfp: !0,
                pmet: {
                    click_type: "wtr_button"
                }
            },
            sponsored_update_body_image: {
                dfp: !0,
                pmet: {
                    click_type: "image"
                }
            },
            cta_link: {
                dfp: !0,
                pmet: {
                    click_type: "cta_click"
                }
            },
            sponsored_label: {
                dfp: !0,
                pmet: {
                    click_type: "sponsored"
                }
            },
            newsfeed_caret_not_interested: {
                dfp: !1,
                pmet: {
                    click_type: "not_interested"
                }
            },
            newsfeed_caret_help: {
                dfp: !1,
                pmet: {
                    click_type: "why"
                }
            },
            newsfeed_caret: {
                dfp: !1,
                pmet: {
                    click_type: "caret"
                }
            },
            user_rating_star: {
                dfp: !0,
                pmet: {
                    click_type: "rating"
                }
            },
            preview_book: {
                dfp: !0,
                pmet: {
                    click_type: "preview"
                }
            },
            sponsored_update_body_title_link: {
                dfp: !0,
                pmet: {
                    click_type: "sponsored_title"
                }
            }
        }, r.TRACKED_CLASSES_AUDIBLE = {
            AEP_Desktop_Browse_Image: {
                dfp: !0,
                pmet: {
                    pmet_click_tid: "AEP_Desktop_Browse_Image"
                }
            },
            AEP_Desktop_Browse_Title: {
                dfp: !0,
                pmet: {
                    pmet_click_tid: "AEP_Desktop_Browse_Title"
                }
            },
            AEP_Desktop_Browse_ExploreButton: {
                dfp: !0,
                pmet: {
                    pmet_click_tid: "AEP_Desktop_Browse_ExploreButton"
                }
            },
            AEP_Desktop_Browse_SponsoredBy: {
                dfp: !0,
                pmet: {
                    pmet_click_tid: "AEP_Desktop_Browse_SponsoredBy"
                }
            },
            AEP_Desktop_Video_ExternalLink: {
                pmet: {
                    pmet_click_tid: "AEP_Desktop_Video_ExternalLink",
                    no_redirect: !0
                }
            },
            AEP_Desktop_Sponsored_BookImage: {
                pmet: {
                    pmet_click_tid: "AEP_Desktop_Sponsored_BookImage",
                    no_redirect: !0
                }
            },
            AEP_Desktop_Sponsored_BookTitle: {
                pmet: {
                    pmet_click_tid: "AEP_Desktop_Sponsored_BookTitle",
                    no_redirect: !0
                }
            },
            AEP_Desktop_Sponsored_AuthorLink: {
                pmet: {
                    pmet_click_tid: "AEP_Desktop_Sponsored_AuthorLink",
                    no_redirect: !0
                }
            },
            AEP_Desktop_Sponsored_WantToRead: {
                pmet: {
                    pmet_click_tid: "AEP_Desktop_Sponsored_WantToRead",
                    no_redirect: !0
                }
            },
            AEP_Desktop_Sponsored_Stars: {
                pmet: {
                    pmet_click_tid: "AEP_Desktop_Sponsored_Stars",
                    no_redirect: !0
                }
            },
            AEP_Desktop_Sponsored_BookDescription: {
                pmet: {
                    pmet_click_tid: "AEP_Desktop_Sponsored_BookDescription",
                    no_redirect: !0
                }
            },
            AEP_Desktop_Sponsored_BookExternalLink: {
                pmet: {
                    pmet_click_tid: "AEP_Desktop_Sponsored_BookExternalLink",
                    no_redirect: !0
                }
            },
            AEP_Desktop_Carousel_BookImage: {
                pmet: {
                    pmet_click_tid: "AEP_Desktop_Carousel_BookImage",
                    no_redirect: !0
                }
            },
            AEP_Desktop_Carousel_WantToRead: {
                pmet: {
                    pmet_click_tid: "AEP_Desktop_Carousel_WantToRead",
                    no_redirect: !0
                }
            },
            AEP_Mobile_Carousel_BookImage: {
                pmet: {
                    pmet_click_tid: "AEP_Mobile_Carousel_BookImage",
                    no_redirect: !0
                }
            },
            AEP_Mobile_Carousel_WantToRead: {
                pmet: {
                    pmet_click_tid: "AEP_Mobile_Carousel_WantToRead",
                    no_redirect: !0
                }
            },
            AEP_Mobile_Carousel_BookTitle: {
                pmet: {
                    pmet_click_tid: "AEP_Mobile_Carousel_BookTitle",
                    no_redirect: !0
                }
            },
            AEP_Mobile_Carousel_Author: {
                pmet: {
                    pmet_click_tid: "AEP_Mobile_Carousel_Author",
                    no_redirect: !0
                }
            }
        }, r.TRACKED_CLASSES_PREMIUM_CAMPAIGN = {
            fcm_blog_title: {
                dfp: !0,
                pmet: {
                    click_type: "fcm_blog_title"
                }
            },
            fcm_blog_image: {
                dfp: !0,
                pmet: {
                    click_type: "fcm_blog_image"
                }
            },
            fcm_blog_button: {
                dfp: !0,
                pmet: {
                    click_type: "fcm_blog_button"
                }
            },
            fcm_book_author: {
                dfp: !0,
                pmet: {
                    click_type: "fcm_book_author"
                }
            },
            fcm_book_image: {
                dfp: !0,
                pmet: {
                    click_type: "fcm_book_image"
                }
            },
            fcm_book_title: {
                dfp: !0,
                pmet: {
                    click_type: "fcm_book_title"
                }
            },
            fcm_book_button: {
                dfp: !0,
                pmet: {
                    click_type: "fcm_book_button"
                }
            },
            fcm_book_description: {
                dfp: !0,
                pmet: {
                    click_type: "fcm_book_description"
                }
            },
            fcm_giveaway_author: {
                dfp: !0,
                pmet: {
                    click_type: "fcm_giveaway_author"
                }
            },
            fcm_giveaway_button: {
                dfp: !0,
                pmet: {
                    click_type: "fcm_giveaway_button"
                }
            },
            fcm_giveaway_image: {
                dfp: !0,
                pmet: {
                    click_type: "fcm_giveaway_image"
                }
            },
            fcm_giveaway_title: {
                dfp: !0,
                pmet: {
                    click_type: "fcm_giveaway_title"
                }
            },
            fcm_list_button: {
                dfp: !0,
                pmet: {
                    click_type: "fcm_list_button"
                }
            },
            fcm_list_books: {
                dfp: !0,
                pmet: {
                    click_type: "fcm_list_books"
                }
            },
            fcm_list_title: {
                dfp: !0,
                pmet: {
                    click_type: "fcm_list_title"
                }
            },
            fcm_genre_title: {
                dfp: !0,
                pmet: {
                    click_type: "fcm_genre_title"
                }
            },
            fcm_genre_image: {
                dfp: !0,
                pmet: {
                    click_type: "fcm_genre_image"
                }
            },
            fcm_genre_button: {
                dfp: !0,
                pmet: {
                    click_type: "fcm_genre_button"
                }
            }
        }
    }, {}],
    4: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function n(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
            h["default"].requestCreativeForSlot(e, t)
        }

        function s(e, t, r, o) {
            window.googletag && window.googletag.cmd && window.googletag.cmd.push(function() {
                var n = window.googletag,
                    s = i(r);
                if (o) ! function() {
                    var r = n.sizeMapping();
                    _["default"].map(o, function(e) {
                        var t = _["default"].map(e, function(e) {
                            var t = e.split("x");
                            return t[0] ? [parseInt(t[0]), parseInt(t[1])] : []
                        });
                        r = r.addSize(t[0], t[1])
                    }), n.defineSlot(t, s, e).defineSizeMapping(r.build()).setCollapseEmptyDiv(!0).addService(n.pubads())
                }();
                else {
                    var a = n.defineSlot(t, s, e);
                    a.addService(n.pubads())
                }
            })
        }

        function a() {
            window.googletag && window.googletag.cmd && window.googletag.cmd.push(function() {
                var e = window.googletag;
                e.enableServices()
            })
        }

        function i(e) {
            var t = void 0;
            if (Array.isArray(e)) t = _["default"].map(e, function(e) {
                var t = e.split("x");
                return [parseInt(t[0]), parseInt(t[1])]
            });
            else {
                var r = e.split("x");
                t = [parseInt(r[0]), parseInt(r[1])]
            }
            return t
        }

        function l(e, t) {
            var r = Array.isArray(e.dimensions) ? e.dimensions : [e.dimensions],
                o = _["default"].map(r, function(e) {
                    var t = e.split("x");
                    return [parseInt(t[0]), parseInt(t[1])]
                });
            return {
                slotID: t,
                slotName: e.path,
                sizes: o
            }
        }

        function u(e) {
            $j(document).on("lazybeforeunveil", e)
        }

        function d() {
            window.lazySizesConfig = window.lazySizesConfig || {}, window.lazySizesConfig.expand = g
        }

        function c() {
            var e = window.googletag;
            return "function" == typeof e && e.pubads().getSlots().length > 0
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.fetchApstagBids = r.requestCreative = void 0, r.requestCreativeForAdSlot = n, r.defineSlot = s, r.enableServices = a, r.dimensionsExplode = i, r.slotToHash = l, r.lazyLoadOnView = u, r.lazyLoadInit = d, r.adSlotsDefined = c;
        var p = e("../../react_stores/google_ads_store"),
            f = e("../../react_actions/google_ads_actions"),
            h = o(f),
            m = e("lodash"),
            _ = o(m),
            g = 200,
            v = function() {
                return window.googletag.pubads().getSlots()
            },
            y = function(e) {
                return e.getSlotElementId()
            },
            b = function(e) {
                return window.googletag.pubads().refresh(e)
            },
            k = function(e, t) {
                window.googletag.pubads().addEventListener("slotRenderEnded", function(r) {
                    if (r.slot.getSlotId().getDomId() === e)
                        if (r.isEmpty) h["default"].removeAdSlot(e), h["default"].trackImpression(e, p.ImpressionCode.empty);
                        else {
                            var o = $j(t.googleHookSelector).find('iframe[id^="google_ads_iframe_"]'),
                                n = o.contents().find(t.creativeSelector),
                                s = r.slot.getAdUnitPath().split("/", 3)[2];
                            if (t.isNativeAd) {
                                var a = n.data("id"),
                                    i = n.data("url");
                                a && i ? h["default"].attachServedNativeAdAttributesAndTracking(e, r.lineItemId, n, a, p.ImpressionCode.success, n.data("url"), s) : h["default"].trackImpression(e, p.ImpressionCode.empty)
                            } else h["default"].attachServedBannerAdAttributesAndTracking(e, r.lineItemId, n, p.ImpressionCode.success, t.delayImpressionTracking);
                            "160x600" === t.dimensions && $j(".mainContentContainer").addClass("adSkinEnabled")
                        }
                })
            },
            S = (r.requestCreative = function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    r = window.googletag;
                if (k(e, t), h["default"].hasAttachedDfpCallbackForSlot(e), t.lazyLoadedNewsfeedAd) {
                    var o = t.lazyLoadedNewsfeedAd,
                        n = window.googletag.defineSlot("/4215/" + o.name, o.dimensions, e);
                    n.addService(window.googletag.pubads()), r.display(e), b([n])
                } else if (t.isLazyLoaded) {
                    var s = i(t.dimensions);
                    r.defineSlot(t.path, s, e).addService(r.pubads());
                    var a = [{
                        slotID: e,
                        slotName: t.path,
                        sizes: [s]
                    }];
                    S(a)
                } else r.cmd.push(function() {
                    r.display(e)
                })
            }, r.fetchApstagBids = function(e) {
                var t = window.googletag;
                t && t.cmd && t.cmd.push(function() {
                    var r = window.apstag;
                    Array.isArray(e) && e.length && r.fetchBids({
                        slots: e
                    }, function() {
                        t.cmd.push(function() {
                            return P(e)
                        })
                    })
                })
            }),
            P = function(e) {
                var t = window.apstag,
                    r = e.map(function(e) {
                        return e.slotID
                    }),
                    o = v().filter(function(e) {
                        return r.includes(y(e))
                    });
                new Promise(function(e, t) {
                    return h["default"].checkCallbacksAttached(e, t, r)
                }).then(function() {
                    t.setDisplayBids(), b(o)
                })["catch"](function() {
                    return null
                })
            }
    }, {
        "../../react_actions/google_ads_actions": 35,
        "../../react_stores/google_ads_store": 245,
        lodash: "lodash"
    }],
    5: [function(e, t, r) {
        "use strict";

        function o(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
            t = (0, l.merge)({}, t, {
                type: t.method
            }), t = (0, l.omit)(t, "method");
            var r = $j.Deferred(),
                o = $j.ajax(e, t);
            return o.done(r.resolve), o.fail(function(e, t, o) {
                (0, i.redirectOnAuthFailure)(e) || r.reject(e, t, o)
            }), r.promise()
        }

        function n(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
            return o(e, (0, l.merge)({}, t, {
                method: "POST"
            }))
        }

        function s(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
            return o(e, (0, l.merge)({}, t, {
                method: "DELETE"
            }))
        }

        function a(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
            return o(e, (0, l.merge)({}, t, {
                method: "GET"
            }))
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.DEFAULT_ERROR_MESSAGE = void 0, r.httpRequest = o, r.httpPost = n, r.httpDelete = s, r.httpGet = a;
        var i = e("./default_auth_failure_handler"),
            l = e("lodash");
        r.DEFAULT_ERROR_MESSAGE = "Something went wrong with your request. Please\n  try again later."
    }, {
        "./default_auth_failure_handler": 6,
        lodash: "lodash"
    }],
    6: [function(e, t, r) {
        "use strict";

        function o(e) {
            if (e && 403 === e.status) {
                var t = e.responseJSON;
                if (t.redirect) return (0, n.setLocationUrl)(t.redirect), !0
            }
            return !1
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.redirectOnAuthFailure = o;
        var n = e("../env_utils")
    }, {
        "../env_utils": 13
    }],
    7: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        r.BOOK_ORIGINS = {
            CURRENTLY_READING_WIDGET: "currently-reading-widget",
            UPDATE_READING_PROGRESS: "hp_status_editor"
        }
    }, {}],
    8: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("append-query"),
            s = o(n);
        r["default"] = {
            openSocialShareWindow: function(e, t, r) {
                var o = (0, s["default"])(e, t),
                    n = "left=" + r.left + ", top=" + r.top,
                    a = "width=" + r.width + ", height=" + r.height,
                    i = n + ", " + a + ", menubar=no, scrollbar=no";
                window.open(o, "_blank", i)
            }
        }
    }, {
        "append-query": "append-query"
    }],
    9: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        r.VARIANTS = {
            DEFAULT: "default",
            DARK_BG: "darkBg"
        }
    }, {}],
    10: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function n(e) {
            var t = e.target,
                r = e.currentTarget,
                o = !1;
            if (t === r) o = i(t);
            else
                for (; r.contains(t) && !(o = i(t));) t = t.parentNode;
            o && a["default"].trackClickEvent(e, t)
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.handleDataTracking = n;
        var s = e("../../react_actions/data_tracking/data_tracking_actions"),
            a = o(s),
            i = function(e) {
                return "true" === e.getAttribute("data-tracking-enabletracking")
            }
    }, {
        "../../react_actions/data_tracking/data_tracking_actions": 29
    }],
    11: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function n(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? (0, u["default"])() : arguments[1],
                r = arguments.length <= 2 || void 0 === arguments[2] ? null : arguments[2];
            t.locale("en-abbreviated"), e = null !== r ? r : (0, u["default"])(e).locale("en-abbreviated");
            var o = t.diff(e, "days"),
                n = t.diff(e, "months"),
                s = t.diff(e, "days", !0),
                a = 6.5;
            return i["default"].inRange(n, 1, 13) ? t.subtract(o, "days").format("DD MMM") : n > 12 ? t.subtract(o, "days").format("DD MMM YY") : i["default"].inRange(o, 7, 28) ? Math.ceil(o / 7) + "w" : s >= a && 28 >= s ? Math.round(s / a) + "w" : e.fromNow()
        }

        function s(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? "YYYY-MM-DD" : arguments[1];
            if (e) {
                var r = (0, u["default"])(e);
                return r.format(t)
            }
            return ""
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.fromNow = n, r.getFormattedDate = s;
        var a = e("lodash"),
            i = o(a),
            l = e("moment"),
            u = o(l);
        u["default"].relativeTimeThreshold("s", 60), u["default"].relativeTimeThreshold("m", 60), u["default"].relativeTimeThreshold("h", 24), u["default"].relativeTimeThreshold("d", 25), u["default"].relativeTimeThreshold("M", 10), u["default"].locale("en-abbreviated", {
            relativeTime: {
                future: "in %s",
                past: "%s",
                s: "Just now",
                m: "1m",
                mm: "%dm",
                h: "1h",
                hh: "%dh",
                d: "1d",
                dd: "%dd",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            }
        }), u["default"].locale("en")
    }, {
        lodash: "lodash",
        moment: "moment"
    }],
    12: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.checkIconClassnames = r.getExclusiveShelfType = r.SHELF_TYPES = r.DEFAULT_SHELVES = void 0;
        var n = e("classnames"),
            s = o(n),
            a = r.DEFAULT_SHELVES = {
                READ: {
                    name: "read",
                    displayName: "Read"
                },
                CURRENTLY_READING: {
                    name: "currently-reading",
                    displayName: "Currently Reading"
                },
                WANT_TO_READ: {
                    name: "to-read",
                    displayName: "Want to Read"
                }
            },
            i = r.SHELF_TYPES = {
                DEFAULT: "defaultShelves",
                CUSTOM_EXCLUSIVE: "customExclusiveShelves",
                NONEXCLUSIVE: "nonExclusiveShelves"
            },
            l = r.getExclusiveShelfType = function(e) {
                return e === a.READ.name || e === a.CURRENTLY_READING.name || e === a.WANT_TO_READ.name ? i.DEFAULT : i.CUSTOM_EXCLUSIVE
            };
        r.checkIconClassnames = function(e) {
            return (0, s["default"])({
                "wantToReadButton__checkIcon--toRead": e === a.WANT_TO_READ.name,
                "wantToReadButton__checkIcon--currentlyReading": e === a.CURRENTLY_READING.name,
                "wantToReadButton__checkIcon--read": e === a.READ.name,
                "wantToReadButton__checkIcon--other": e && l(e) === i.CUSTOM_EXCLUSIVE
            })
        }
    }, {
        classnames: "classnames"
    }],
    13: [function(e, t, r) {
        "use strict";
        t.exports = {
            PRODUCTION: "production",
            DEVELOPMENT: "development",
            TEST: "test",
            hasDom: function() {
                return !!window.document
            },
            domUnavailable: function() {
                return !this.hasDom()
            },
            isDevelopment: function() {
                return "production" === this.DEVELOPMENT
            },
            getCurrentPath: function() {
                return window && window.location ? window.encodeURIComponent(window.location.pathname + window.location.search) : void 0
            },
            setLocationUrl: function(e) {
                window && (window.location.href = e)
            },
            getLocationUrl: function() {
                return window && window.location ? window.location.href : void 0
            },
            getLocationPathname: function() {
                return window && window.location ? window.location.pathname : void 0
            }
        }
    }, {}],
    14: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var o = r.clearFlashMessage = function() {
            $j("#flashMessages").trigger("clearFlashMessage")
        };
        r.flashSuccessMessage = function(e) {
            o(), $j("#flashMessages").trigger("addFlashMessage", [e, "success"])
        }, r.flashErrorMessage = function(e) {
            $j("#flashMessages").trigger("addFlashMessage", [e, "error"])
        }
    }, {}],
    15: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var o = e("lodash");
        r["default"] = {
            notifyException: function(e, t) {
                e ? window.console && (0, o.isFunction)(window.console.error) && window.console.error(t, e.stack) : window.console && (0, o.isFunction)(window.console.warn) && window.console.warn("Attempted to notifyException without providing error,\n                           message: " + t)
            },
            notifyUser: function(e) {
                window && (0, o.isFunction)(window.alert) && window.alert(e)
            }
        }
    }, {
        lodash: "lodash"
    }],
    16: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var o = {
            enter: 13,
            escape: 27,
            space: 32,
            leftArrow: 37,
            upArrow: 38,
            rightArrow: 39,
            downArrow: 40
        };
        r["default"] = {
            isEnter: function(e) {
                return e === o.enter
            },
            isEscape: function(e) {
                return e === o.escape
            },
            isSpace: function(e) {
                return e === o.space
            },
            isArrowLeft: function(e) {
                return e === o.leftArrow
            },
            isArrowUp: function(e) {
                return e === o.upArrow
            },
            isArrowRight: function(e) {
                return e === o.rightArrow
            },
            isArrowDown: function(e) {
                return e === o.downArrow
            },
            isDropdownOpenerKey: function(e) {
                return this.isEnter(e) || this.isSpace(e) || this.isArrowDown(e)
            },
            isDefaultOpenerKey: function(e) {
                return this.isEnter(e) || this.isSpace(e)
            },
            isDefaultCloserKey: function(e) {
                return this.isEscape(e)
            },
            KEYCODES: o
        }
    }, {}],
    17: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var o = function(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1];
            return t ? e + "Dropdown" : e
        };
        r.getUnfollowModalId = function(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1];
            return o("confirmUnfollow" + e, t)
        }, r.getCancelFriendRequestModalId = function(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1];
            return o("confirmCancelFriendRequest" + e, t)
        }, r.getUnfriendModalId = function(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1];
            return o("confirmUnfriend" + e, t)
        }, r.getBlockUserModalId = function(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1];
            return o("confirmBlockUser" + e, t)
        }, r.getUnblockUserModalId = function(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1];
            return o("confirmUnblockUser" + e, t)
        }
    }, {}],
    18: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        r.BOOK_LOAD_ERROR_MSG = "Sorry, we’re having trouble loading your books right now. Please try again later."
    }, {}],
    19: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        r.ICON_SIZES = {
            SMALL: "small",
            MEDIUM: "medium",
            LARGE: "large"
        }, r.ICON_SHAPES = {
            CIRCLE: "circular",
            ROUND_SQUARE: "roundSquare"
        }
    }, {}],
    20: [function(e, t, r) {
        "use strict";

        function o() {
            return window.GrImageRegistry || {}
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.getImages = o
    }, {}],
    21: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        r.astralLength = function(e) {
            return e.replace(/(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g, "_").length
        }, r.countWords = function(e) {
            return e ? e.split(" ").length : 0
        }
    }, {}],
    22: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("lodash"),
            a = o(s);
        r["default"] = {
            toSentence: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? "and" : arguments[1],
                    r = [],
                    o = e.length;
                switch (o) {
                    case 0:
                        return "";
                    case 1:
                        r.push(e[0]);
                        break;
                    case 2:
                        r.push(e[0]), r.push(" " + t + " "), r.push(e[1]);
                        break;
                    default:
                        a["default"].each(e.slice(0, -1), function(e) {
                            r.push(e), r.push(", ")
                        }), r.push(t + " "), r.push(e[o - 1])
                }
                return n("span", {}, void 0, r)
            },
            sentenceJoin: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? ", " : arguments[1],
                    r = [];
                return a["default"].each(e.slice(0, -1), function(e) {
                    r.push(e), r.push(t)
                }), r.push(e[e.length - 1]), n("span", {}, void 0, r)
            }
        }
    }, {
        lodash: "lodash"
    }],
    23: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        r.FRIEND_STATUS = {
            SELF: "self",
            FRIEND: "friend",
            REQUEST_PENDING_FROM: "request_pending_from",
            REQUEST_PENDING_TO: "request_pending_to",
            NONE: "none"
        }
    }, {}],
    24: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("reflux"),
            s = o(n);
        r["default"] = s["default"].createActions(["follow", "unFollow"])
    }, {
        reflux: "reflux"
    }],
    25: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r["default"] = function() {
            return s["default"].createActions(["selectSpecificResult", "selectNextResult", "selectPreviousResult", "search", "searchResultsFound", "setShowResultsContainer"])
        };
        var n = e("reflux"),
            s = o(n)
    }, {
        reflux: "reflux"
    }],
    26: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.getACopyClickedHandler = r.getACopyClosed = r.getACopyLoadedSuccess = r.GET_A_COPY_ACTIONS = void 0;
        var o = e("../../modules/ajax/ajax_helper"),
            n = r.GET_A_COPY_ACTIONS = {
                LOADED_SUCCESS: "GET_A_COPY_LOADED_SUCCESS",
                INTERSTITIAL_CLOSED: "GET_A_COPY_INTERSTITIAL_CLOSED"
            },
            s = r.getACopyLoadedSuccess = function(e) {
                return {
                    type: n.LOADED_SUCCESS,
                    data: e
                }
            };
        r.getACopyClosed = function() {
            return {
                type: n.INTERSTITIAL_CLOSED
            }
        }, r.getACopyClickedHandler = function(e) {
            return function(t) {
                (0, o.httpGet)(e).done(function(e) {
                    t(s(e))
                })
            }
        }
    }, {
        "../../modules/ajax/ajax_helper": 5
    }],
    27: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("reflux"),
            s = o(n);
        r["default"] = s["default"].createActions({
            addNewComment: {},
            commentEntered: {
                sync: !0
            },
            deleteComment: {},
            showCommentsForPage: {},
            showSeeMoreLoadingSpinner: {},
            textareaFocused: {},
            textareaFocusRequested: {},
            textareaUnfocused: {}
        })
    }, {
        reflux: "reflux"
    }],
    28: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("reflux"),
            s = o(n);
        r["default"] = s["default"].createActions(["updatePreference"])
    }, {
        reflux: "reflux"
    }],
    29: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("reflux"),
            s = o(n);
        r["default"] = s["default"].createActions(["trackClickEvent"])
    }, {
        reflux: "reflux"
    }],
    30: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("reflux"),
            s = o(n);
        r["default"] = s["default"].createActions(["openPane"])
    }, {
        reflux: "reflux"
    }],
    31: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r["default"] = function() {
            return s["default"].createActions(["selectSpecificResult", "selectNextResult", "selectPreviousResult", "search", "searchResultsFound", "setShowResultsContainer"])
        };
        var n = e("reflux"),
            s = o(n)
    }, {
        reflux: "reflux"
    }],
    32: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("reflux"),
            s = o(n);
        r["default"] = s["default"].createActions(["changeFavoriteGenres"])
    }, {
        reflux: "reflux"
    }],
    33: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("reflux"),
            s = o(n);
        r["default"] = s["default"].createActions(["selectFavoriteGenre", "deselectFavoriteGenre", "submitSelectedGenres"])
    }, {
        reflux: "reflux"
    }],
    34: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("reflux"),
            s = o(n);
        r["default"] = s["default"].createActions(["displayError", "requestFeaturedBooks", "trackMenuImpression"])
    }, {
        reflux: "reflux"
    }],
    35: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("reflux"),
            s = o(n);
        r["default"] = s["default"].createActions(["requestCreativeForSlot", "displayCreativeForSlot", "removeAdSlot", "trackImpression", "attachServedNativeAdAttributesAndTracking", "attachServedBannerAdAttributesAndTracking", "hasAttachedDfpCallbackForSlot", "checkCallbacksAttached"])
    }, {
        reflux: "reflux"
    }],
    36: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var o = r.TOGGLE_SEARCH = "TOGGLE_SEARCH";
        r.toggleSearch = function(e) {
            return {
                type: o,
                searchIsActive: e
            }
        }
    }, {}],
    37: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("reflux"),
            s = o(n);
        r["default"] = s["default"].createActions(["like", "unLike"])
    }, {
        reflux: "reflux"
    }],
    38: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("reflux"),
            s = o(n);
        r["default"] = s["default"].createActions(["openModal", "closeModal"])
    }, {
        reflux: "reflux"
    }],
    39: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("reflux"),
            s = o(n);
        r["default"] = s["default"].createActions({
            loadMoreUpdates: {},
            newsfeedItemsLoaded: {
                sync: !0
            },
            updateNativeAdSlot: {},
            userNotInterested: {},
            undoUserNotInterested: {},
            hideStory: {},
            previewBook: {},
            setUpdatesFeedPreferences: {}
        })
    }, {
        reflux: "reflux"
    }],
    40: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("reflux"),
            s = o(n);
        r["default"] = s["default"].createActions(["loadError", "loadNotifications", "requestNotifications"])
    }, {
        reflux: "reflux"
    }],
    41: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("reflux"),
            s = o(n);
        r["default"] = s["default"].createActions(["loadAnnotatedBooks"])
    }, {
        reflux: "reflux"
    }],
    42: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("reflux"),
            s = o(n);
        r["default"] = s["default"].createActions(["updateProgress", "closeUpdateProgressForm", "openUpdateProgressForm", "refreshReadingSessions", "shelveBookSuccess", "loadAllReadingSessions"])
    }, {
        reflux: "reflux"
    }],
    43: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("reflux"),
            s = o(n);
        r["default"] = s["default"].createActions({
            updateSharingTextInputValue: {
                sync: !0
            },
            submitShare: {},
            openShareModal: {}
        })
    }, {
        reflux: "reflux"
    }],
    44: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("reflux"),
            s = o(n);
        r["default"] = s["default"].createActions({
            addShelvings: {},
            bookShelved: {},
            bookUnshelved: {},
            shelveBook: {},
            toggleNonExclusiveShelving: {},
            rateBook: {
                children: ["newBook", "failed"]
            },
            unshelveBook: {}
        })
    }, {
        reflux: "reflux"
    }],
    45: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("reflux"),
            s = o(n);
        r["default"] = s["default"].createActions(["deselectTab", "selectTab"])
    }, {
        reflux: "reflux"
    }],
    46: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("reflux"),
            s = o(n);
        r["default"] = s["default"].createActions(["blockMember"])
    }, {
        reflux: "reflux"
    }],
    47: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("reflux"),
            s = o(n);
        r["default"] = s["default"].createActions(["follow", "unFollow"])
    }, {
        reflux: "reflux"
    }],
    48: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("reflux"),
            s = o(n);
        r["default"] = s["default"].createActions(["userAgentGainsTouch", "userAgentLosesTouch"])
    }, {
        reflux: "reflux"
    }],
    49: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("reflux"),
            s = o(n);
        r["default"] = s["default"].createActions(["userNotInterested", "undoUserNotInterested", "isFlashMessageForBook", "closeFlashMessage", "addBookIDToState"])
    }, {
        reflux: "reflux"
    }],
    50: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("reflux"),
            s = o(n);
        r["default"] = s["default"].createActions(["unfriend", "acceptFriendRequest", "cancelFriendRequest", "follow", "unfollow"])
    }, {
        reflux: "reflux"
    }],
    51: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("reflux"),
            s = o(n);
        r["default"] = s["default"].createActions(["addNonExclusiveShelf", "removeNonExclusiveShelf"])
    }, {
        reflux: "reflux"
    }],
    52: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("reflux"),
            s = o(n);
        r["default"] = s["default"].createActions(["openAddShelfTextbox", "closeAddShelfTextbox", "updateShelfNameFilter", "updateShelves"])
    }, {
        reflux: "reflux"
    }],
    53: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        e("./_polyfills");
        var n = e("./_dom_ready_initializers"),
            s = o(n),
            a = e("./_public_actions"),
            i = o(a);
        window.ReactActions = i["default"], s["default"].initializeModernizrTouchCheck()
    }, {
        "./_dom_ready_initializers": 54,
        "./_polyfills": 55,
        "./_public_actions": 56
    }],
    54: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r["default"] = {
            initializeModernizrTouchCheck: function() {
                document.addEventListener("DOMContentLoaded", function() {
                    Modernizr && Modernizr.touchevents ? window.ReactActions.UserAgentCapabilitiesActions.userAgentGainsTouch() : window.ReactActions.UserAgentCapabilitiesActions.userAgentLosesTouch()
                })
            }
        }
    }, {}],
    55: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = e("object-assign"),
            s = o(n);
        e("../react_isomorphic/shims/Array.prototype.find"), window.Object.assign = s["default"]
    }, {
        "../react_isomorphic/shims/Array.prototype.find": 226,
        "object-assign": "object-assign"
    }],
    56: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("../react_actions/user_agent_capabilities_actions"),
            s = o(n);
        r["default"] = {
            UserAgentCapabilitiesActions: s["default"]
        }
    }, {
        "../react_actions/user_agent_capabilities_actions": 48
    }],
    57: [function(e, t, r) {
        "use strict";
        e("./_common");
        var o = e("../react_isomorphic/global"),
            n = e("../react_isomorphic/site_header"),
            s = e("../react_isomorphic/reading_notes"),
            a = e("../react_isomorphic/friend_follow_module"),
            i = e("../react_isomorphic/experiments"),
            l = e("lodash");
        window.ReactComponents = (0, l.merge)({}, o.GlobalComponents, n.HeaderComponents, i.ExperimentComponents, s.ReadingNotesComponents, a.FriendFollowModuleComponents), window.ReactStores = (0, l.merge)({}, o.GlobalStores, n.HeaderStores, i.ExperimentStores, s.ReadingNotesStores, a.FriendFollowModuleStores)
    }, {
        "../react_isomorphic/experiments": 220,
        "../react_isomorphic/friend_follow_module": 223,
        "../react_isomorphic/global": 224,
        "../react_isomorphic/reading_notes": 225,
        "../react_isomorphic/site_header": 227,
        "./_common": 53,
        lodash: "lodash"
    }],
    58: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function n(e) {
            if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                return r
            }
            return Array.from(e)
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("../gr_component_factory"),
            l = o(i),
            u = e("../../react_stores/google_ads_store"),
            d = o(u),
            c = e("reflux"),
            p = o(c),
            f = e("classnames"),
            h = o(f),
            m = e("../../modules/ads/google_ad_helper"),
            _ = "googleBannerAd";
        r["default"] = l["default"].createClass({
            displayName: "GoogleBannerAd",
            mixins: [p["default"].connectFilter(d["default"], "googleAdsStore", function(e) {
                return e.ads[this.props.adId]
            })],
            propTypes: {
                adId: a["default"].PropTypes.string.isRequired,
                className: a["default"].PropTypes.string,
                delayImpressionTracking: a["default"].PropTypes.bool
            },
            getDefaultProps: function() {
                return {
                    delayImpressionTracking: !1
                }
            },
            getStoreState: function() {
                return this.state.googleAdsStore
            },
            componentDidMount: function() {
                var e = this.props.adId;
                if (this.getStoreState()) {
                    var t = {
                        googleHookSelector: this.refs.googleHook,
                        creativeSelector: this.getStoreState().creativeSelector,
                        dimensions: this.getStoreState().dimensions,
                        isNativeAd: this.getStoreState().isNativeAd,
                        delayImpressionTracking: this.props.delayImpressionTracking,
                        isLazyLoaded: this.getStoreState().isLazyLoaded,
                        path: this.getStoreState().path
                    };
                    this.getStoreState().isLazyLoaded ? (0, m.lazyLoadOnView)(function(e) {
                        e.target.id === this.adId && (0, m.requestCreativeForAdSlot)(this.adId, this.params)
                    }.bind({
                        adId: e,
                        params: t
                    })) : (0, m.requestCreativeForAdSlot)(this.props.adId, t)
                }
            },
            getWidthFromDimensions: function(e) {
                return parseInt(e.split("x")[0])
            },
            getBannerAdSizingStyle: function(e) {
                var t = this,
                    r = void 0;
                if (Array.isArray(e)) {
                    var o;
                    r = (o = Math).max.apply(o, n(e.map(function(e) {
                        return t.getWidthFromDimensions(e)
                    })))
                } else r = this.getWidthFromDimensions(e);
                return {
                    width: r,
                    height: "auto"
                }
            },
            render: function() {
                if (this.getStoreState()) {
                    var e = (0, h["default"])(this.props.className, _, {
                        lazyload: this.getStoreState().isLazyLoaded
                    });
                    return a["default"].createElement("div", {
                        className: e,
                        id: this.props.adId,
                        style: this.getBannerAdSizingStyle(this.getStoreState().dimensions),
                        ref: "googleHook"
                    })
                }
                return null
            }
        })
    }, {
        "../../modules/ads/google_ad_helper": 4,
        "../../react_stores/google_ads_store": 245,
        "../gr_component_factory": 107,
        classnames: "classnames",
        react: "react",
        reflux: "reflux"
    }],
    59: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("../../react_stores/google_ads_store"),
            a = o(s),
            i = e("../gr_component_factory"),
            l = o(i),
            u = e("reflux"),
            d = o(u),
            c = e("../featured_content_module"),
            p = o(c),
            f = e("../../modules/ads/google_ad_helper"),
            h = e("classnames"),
            m = o(h),
            _ = "googleFeaturedContentModule";
        r["default"] = l["default"].createClass({
            displayName: "GoogleFeaturedContentModule",
            mixins: [d["default"].connectFilter(a["default"], "googleAdsStore", function(e) {
                return e.nativeAds[this.props.adId]
            })],
            propTypes: {
                adId: React.PropTypes.string.isRequired,
                trackingOptions: React.PropTypes.shape({
                    enableTracking: React.PropTypes.bool,
                    adId: React.PropTypes.string
                }).isRequired,
                isMobile: React.PropTypes.bool,
                hasBottomBorder: React.PropTypes.bool,
                isInline: React.PropTypes.bool
            },
            defaultProps: {
                isMobile: !1,
                isInline: !1,
                hasBottomBorder: !1
            },
            getStoreState: function() {
                return this.state.googleAdsStore
            },
            componentDidMount: function() {
                if (this.getStoreState() && !this.getStoreState().creative) {
                    var e = {
                        googleHookSelector: this.refs.googleHook,
                        creativeSelector: this.getStoreState().creativeSelector,
                        dimensions: this.getStoreState().dimensions,
                        isNativeAd: this.getStoreState().isNativeAd,
                        path: this.getStoreState().path
                    };
                    (0, f.requestCreativeForAdSlot)(this.props.adId, e)
                }
            },
            renderCreative: function() {
                var e = this.getStoreState().creative;
                return n(p["default"], {
                    type: e.type,
                    resource: e.resource,
                    sponsorName: e.sponsorName,
                    isSponsored: e.isSponsored,
                    isMobile: this.props.isMobile,
                    isInline: this.props.isInline,
                    hasBottomBorder: this.props.hasBottomBorder
                })
            },
            render: function() {
                if (this.getStoreState()) {
                    var e = (0, m["default"])(_, this.getStoreState().className),
                        t = this.getStoreState().creative ? this.renderCreative() : null;
                    return n("div", {}, void 0, t, React.createElement("div", {
                        className: e,
                        id: this.props.adId,
                        ref: "googleHook"
                    }))
                }
                return null
            }
        })
    }, {
        "../../modules/ads/google_ad_helper": 4,
        "../../react_stores/google_ads_store": 245,
        "../featured_content_module": 103,
        "../gr_component_factory": 107,
        classnames: "classnames",
        reflux: "reflux"
    }],
    60: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("../../react_stores/google_ads_store"),
            a = o(s),
            i = e("../gr_component_factory"),
            l = o(i),
            u = e("reflux"),
            d = o(u),
            c = e("../page_skin"),
            p = o(c),
            f = e("../../modules/ads/google_ad_helper");
        r["default"] = l["default"].createClass({
            displayName: "GooglePageSkin",
            mixins: [d["default"].connectFilter(a["default"], "googleAdsStore", function(e) {
                return e.nativeAds[this.props.adId]
            })],
            propTypes: {
                adId: React.PropTypes.string.isRequired,
                image: React.PropTypes.string,
                trackingOptions: React.PropTypes.shape({
                    enableTracking: React.PropTypes.bool,
                    adId: React.PropTypes.string
                }).isRequired
            },
            getStoreState: function() {
                return this.state.googleAdsStore
            },
            componentDidMount: function() {
                if (this.getStoreState() && !this.getStoreState().creative) {
                    var e = {
                        googleHookSelector: this.refs.googleHook,
                        creativeSelector: this.getStoreState().creativeSelector,
                        dimensions: this.getStoreState().dimensions,
                        isNativeAd: this.getStoreState().isNativeAd,
                        path: this.getStoreState().path
                    };
                    (0, f.requestCreativeForAdSlot)(this.props.adId, e)
                }
            },
            renderCreative: function() {
                return n(p["default"], {
                    imageUrl: this.getStoreState().creative.image_url,
                    backgroundColor: this.getStoreState().creative.background_color
                })
            },
            render: function() {
                if (this.getStoreState()) {
                    var e = this.getStoreState().className,
                        t = this.getStoreState().creative ? this.renderCreative() : null;
                    return n("div", {
                        className: "pageskinContainer"
                    }, void 0, t, React.createElement("div", {
                        className: e,
                        id: this.props.adId,
                        ref: "googleHook"
                    }))
                }
                return null
            }
        })
    }, {
        "../../modules/ads/google_ad_helper": 4,
        "../../react_stores/google_ads_store": 245,
        "../gr_component_factory": 107,
        "../page_skin": 147,
        reflux: "reflux"
    }],
    61: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("../../../react_stores/google_ads_store"),
            a = o(s),
            i = e("../../gr_component_factory"),
            l = o(i),
            u = e("reflux"),
            d = o(u),
            c = e("./native_ad_body"),
            p = o(c),
            f = e("../../../modules/ads/google_ad_helper"),
            h = e("classnames"),
            m = o(h);
        r["default"] = l["default"].createClass({
            displayName: "GoogleNativeAd",
            mixins: [d["default"].connectFilter(a["default"], "googleAdsStore", function(e) {
                return e.nativeAds[this.props.adId]
            })],
            propTypes: {
                adId: React.PropTypes.string.isRequired,
                trackingOptions: React.PropTypes.shape({
                    enableTracking: React.PropTypes.bool,
                    adId: React.PropTypes.string
                }).isRequired,
                className: React.PropTypes.string,
                signedIn: React.PropTypes.bool,
                isMobile: React.PropTypes.bool,
                isNewsfeed: React.PropTypes.bool
            },
            getDefaultProps: function() {
                return {
                    isMobile: !1,
                    isNewsfeed: !0,
                    signedIn: !0
                }
            },
            getStoreState: function() {
                return this.state.googleAdsStore
            },
            componentDidMount: function() {
                if (this.getStoreState() && !this.getStoreState().creative) {
                    var e = {
                        googleHookSelector: this.refs.googleHook,
                        creativeSelector: this.getStoreState().creativeSelector,
                        dimensions: this.getStoreState().dimensions,
                        isNativeAd: this.getStoreState().isNativeAd,
                        lazyLoadedNewsfeedAd: this.getStoreState().lazyLoadedNewsfeedAd,
                        path: this.getStoreState().path,
                        isLazyLoaded: this.getStoreState().isLazyLoaded
                    };
                    this.getStoreState().lazyLoadedNewsfeedAd || this.getStoreState().isLazyLoaded ? (0, f.lazyLoadOnView)(function(e) {
                        e.target.id === this.adId && (0, f.requestCreativeForAdSlot)(this.adId, this.params)
                    }.bind({
                        adId: this.props.adId,
                        params: e
                    })) : (0, f.requestCreativeForAdSlot)(this.props.adId, e)
                }
            },
            render: function() {
                if (this.getStoreState()) {
                    var e = (0, m["default"])("googleNativeAd__googleHook", this.getStoreState().className, "lazyload"),
                        t = (0, m["default"])("googleNativeAd", this.props.className),
                        r = this.getStoreState().creative ? n(p["default"], {
                            creative: this.getStoreState().creative,
                            adId: this.props.adId,
                            deviceType: this.getStoreState().deviceType,
                            signedIn: this.props.signedIn,
                            isMobile: this.props.isMobile,
                            isNewsfeed: this.props.isNewsfeed
                        }) : null;
                    return n("div", {
                        className: t
                    }, void 0, r, React.createElement("div", {
                        className: e,
                        id: this.props.adId,
                        ref: "googleHook"
                    }))
                }
                return null
            }
        })
    }, {
        "../../../modules/ads/google_ad_helper": 4,
        "../../../react_stores/google_ads_store": 245,
        "../../gr_component_factory": 107,
        "./native_ad_body": 63,
        classnames: "classnames",
        reflux: "reflux"
    }],
    62: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("react"),
            s = o(n),
            a = e("reflux"),
            i = o(a),
            l = e("../../gr_component_factory"),
            u = o(l),
            d = e("../../../react_stores/google_ads_store"),
            c = o(d),
            p = e("./google_native_ad"),
            f = o(p);
        r["default"] = u["default"].createClass({
            displayName: "NativeAd",
            mixins: [i["default"].connectFilter(c["default"], "googleAdsStore", function(e) {
                return e.nativeAds[this.props.adId]
            })],
            propTypes: {
                adId: s["default"].PropTypes.string.isRequired,
                trackingOptions: s["default"].PropTypes.shape({
                    enableTracking: s["default"].PropTypes.bool,
                    adId: s["default"].PropTypes.string
                }).isRequired,
                className: s["default"].PropTypes.string,
                signedIn: s["default"].PropTypes.bool,
                isMobile: s["default"].PropTypes.bool,
                isNewsfeed: s["default"].PropTypes.bool
            },
            getAdsStoreState: function() {
                return this.state.googleAdsStore
            },
            getDefaultProps: function() {
                return {
                    signedIn: !0,
                    isMobile: !1,
                    isNewsfeed: !0
                }
            },
            render: function() {
                return this.getAdsStoreState() ? s["default"].createElement(f["default"], this.props) : null
            }
        })
    }, {
        "../../../react_stores/google_ads_store": 245,
        "../../gr_component_factory": 107,
        "./google_native_ad": 61,
        react: "react",
        reflux: "reflux"
    }],
    63: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("reflux"),
            a = o(s),
            i = e("../../gr_component_factory"),
            l = o(i),
            u = e("../../../react_stores/user_not_interested_store"),
            d = o(u),
            c = e("../../../react_actions/user_not_interested_actions"),
            p = o(c),
            f = e("./native_book_ad"),
            h = o(f),
            m = e("./native_flex_ad"),
            _ = o(m),
            g = e("./user_not_interested_message"),
            v = o(g);
        r["default"] = l["default"].createClass({
            displayName: "NativeAdBody",
            mixins: [a["default"].connect(d["default"], "userNotInterestedStore")],
            propTypes: {
                adId: React.PropTypes.string,
                creative: React.PropTypes.object.isRequired,
                adDeviceType: React.PropTypes.string,
                signedIn: React.PropTypes.bool,
                isMobile: React.PropTypes.bool,
                isNewsfeed: React.PropTypes.bool
            },
            getDefaultProps: function() {
                return {
                    isNewsfeed: !0,
                    isMobile: !1,
                    signedIn: !0
                }
            },
            getUserNotInterestedStoreState: function() {
                return this.state.userNotInterestedStore
            },
            render: function() {
                if (this.props.creative && this.props.creative.book) {
                    var e = this.props.creative.book.bookId;
                    if (this.getUserNotInterestedStoreState()[e]) {
                        if (this.getUserNotInterestedStoreState()[e].isClosed) return null;
                        if (this.getUserNotInterestedStoreState()[e].isFlashMessage) return n(v["default"], {
                            id: this.props.adId,
                            isNewsfeed: this.props.isNewsfeed,
                            className: this.props.className,
                            creative: this.props.creative
                        })
                    } else p["default"].addBookIDToState(e)
                }
                return this.props.creative && this.props.creative.book ? n(h["default"], {
                    isNewsfeed: this.props.isNewsfeed,
                    isMobile: this.props.isMobile,
                    creative: this.props.creative,
                    adDeviceType: this.props.adDeviceType,
                    signedIn: this.props.signedIn,
                    id: this.props.adId
                }) : n(_["default"], {
                    id: this.props.adId,
                    creative: this.props.creative,
                    signedIn: this.props.signedIn,
                    isNewsfeed: this.props.isNewsfeed,
                    isMobile: this.props.isMobile
                })
            }
        })
    }, {
        "../../../react_actions/user_not_interested_actions": 49,
        "../../../react_stores/user_not_interested_store": 258,
        "../../gr_component_factory": 107,
        "./native_book_ad": 66,
        "./native_flex_ad": 68,
        "./user_not_interested_message": 70,
        reflux: "reflux"
    }],
    64: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var i = function() {
                var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
                return function(t, r, o, n) {
                    var s = t && t.defaultProps,
                        a = arguments.length - 3;
                    if (r || 0 === a || (r = {}), r && s)
                        for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                    else r || (r = s || {});
                    if (1 === a) r.children = n;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                        r.children = l
                    }
                    return {
                        $$typeof: e,
                        type: t,
                        key: void 0 === o ? null : "" + o,
                        ref: null,
                        props: r,
                        _owner: null
                    }
                }
            }(),
            l = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var o = t[r];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, r, o) {
                    return r && e(t.prototype, r), o && e(t, o), t
                }
            }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.NativeAdCaret = void 0;
        var u = e("react"),
            d = e("../../shared/gr_prop_types"),
            c = o(d),
            p = e("../../dropdown"),
            f = o(p),
            h = e("../../click_tracking_wrapper"),
            m = o(h),
            _ = e("../../../react_actions/user_not_interested_actions"),
            g = o(_),
            v = e("../../../modules/ads/click_tracking_helper"),
            y = e("lodash"),
            b = r.NativeAdCaret = function(e) {
                function t(e) {
                    return n(this, t), s(this, Object.getPrototypeOf(t).call(this, e))
                }
                return a(t, e), l(t, [{
                    key: "renderNotInterested",
                    value: function() {
                        var e = this;
                        if (this.props.book && this.props.signedIn) {
                            var t = function() {
                                    return g["default"].userNotInterested(e.props.book.bookId)
                                },
                                r = i("button", {
                                    className: "gr-buttonAsLink nativeAdCaretMenu__button",
                                    onClick: t
                                }, void 0, "I’m not interested in this book");
                            return i(m["default"], {
                                children: r,
                                trackingOptions: v.TRACKED_CLASSES.newsfeed_caret_not_interested
                            })
                        }
                        return null
                    }
                }, {
                    key: "caretList",
                    value: function() {
                        var e = i("a", {
                            className: "nativeAdCaretMenu__link",
                            href: this.props.helpLink
                        }, void 0, "Why am I seeing this?");
                        return i("div", {
                            className: "nativeAdCaretMenu"
                        }, void 0, this.renderNotInterested(), (0, y.map)(this.props.additionalLinks, function(e) {
                            return i("div", {
                                className: "nativeAdCaretMenu__button"
                            }, e, "link")
                        }), i(m["default"], {
                            children: e,
                            trackingOptions: v.TRACKED_CLASSES.newsfeed_caret_help
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        return i("div", {
                            className: "nativeAdCaret"
                        }, void 0, i(f["default"], {
                            trigger: i("div", {
                                className: "nativeAdCaret nativeAdCaret__image",
                                "aria-label": "Sponsored item options"
                            }),
                            triggerEventType: f["default"].TriggerEventTypes.CLICK,
                            bemModifiers: "caret",
                            children: this.caretList()
                        }))
                    }
                }]), t
            }(u.Component);
        b.propTypes = {
            book: c["default"].book(),
            helpLink: u.PropTypes.string,
            updateId: u.PropTypes.string,
            additionalLinks: u.PropTypes.arrayOf(u.PropTypes.elements),
            signedIn: u.PropTypes.bool
        }, b.defaultProps = {
            trackingOptions: v.TRACKED_CLASSES.newsfeed_caret,
            signedIn: !0
        }, r["default"] = b
    }, {
        "../../../modules/ads/click_tracking_helper": 3,
        "../../../react_actions/user_not_interested_actions": 49,
        "../../click_tracking_wrapper": 81,
        "../../dropdown": 90,
        "../../shared/gr_prop_types": 176,
        lodash: "lodash",
        react: "react"
    }],
    65: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var i = function() {
                var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
                return function(t, r, o, n) {
                    var s = t && t.defaultProps,
                        a = arguments.length - 3;
                    if (r || 0 === a || (r = {}), r && s)
                        for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                    else r || (r = s || {});
                    if (1 === a) r.children = n;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                        r.children = l
                    }
                    return {
                        $$typeof: e,
                        type: t,
                        key: void 0 === o ? null : "" + o,
                        ref: null,
                        props: r,
                        _owner: null
                    }
                }
            }(),
            l = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var o = t[r];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, r, o) {
                    return r && e(t.prototype, r), o && e(t, o), t
                }
            }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.NativeAdSponsoredLabel = void 0;
        var u = e("react"),
            d = o(u),
            c = e("../../click_tracking_wrapper"),
            p = o(c),
            f = e("../../../modules/ads/click_tracking_helper"),
            h = r.NativeAdSponsoredLabel = function(e) {
                function t(e) {
                    return n(this, t), s(this, Object.getPrototypeOf(t).call(this, e))
                }
                return a(t, e), l(t, [{
                    key: "render",
                    value: function() {
                        var e = this.props.sponsoredBy ? "Sponsored by " : "Sponsored",
                            t = i("div", {
                                className: "nativeAd__sponsoredLabel"
                            }, void 0, i("span", {
                                className: "googleNativeAd__sponsoredBadgeIcon"
                            }), i("span", {
                                className: "googleNativeAd__sponsoredLabel"
                            }, void 0, e), i("a", {
                                target: "_blank",
                                href: this.props.sponsoredUrl,
                                className: "gr-hyperlink"
                            }, void 0, this.props.sponsoredBy));
                        return i(p["default"], {
                            trackingOptions: f.TRACKED_CLASSES.sponsored_label,
                            children: t
                        })
                    }
                }]), t
            }(u.Component);
        h.propTypes = {
            sponsoredBy: d["default"].PropTypes.string,
            sponsoredUrl: d["default"].PropTypes.string
        }, r["default"] = h
    }, {
        "../../../modules/ads/click_tracking_helper": 3,
        "../../click_tracking_wrapper": 81,
        react: "react"
    }],
    66: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            },
            l = function() {
                var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
                return function(t, r, o, n) {
                    var s = t && t.defaultProps,
                        a = arguments.length - 3;
                    if (r || 0 === a || (r = {}), r && s)
                        for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                    else r || (r = s || {});
                    if (1 === a) r.children = n;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                        r.children = l
                    }
                    return {
                        $$typeof: e,
                        type: t,
                        key: void 0 === o ? null : "" + o,
                        ref: null,
                        props: r,
                        _owner: null
                    }
                }
            }(),
            u = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var o = t[r];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, r, o) {
                    return r && e(t.prototype, r), o && e(t, o), t
                }
            }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.NativeBookAd = void 0;
        var d = e("react"),
            c = e("./native_book_ad_header"),
            p = o(c),
            f = e("../../book"),
            h = o(f),
            m = e("../../book_with_wtr_button"),
            _ = o(m),
            g = e("../../preview_book/preview_book"),
            v = o(g),
            y = e("../../user_content/expandable_html"),
            b = o(y),
            k = e("../../book_description"),
            S = o(k),
            P = e("../../community_rating"),
            T = o(P),
            w = e("../../click_tracking_wrapper"),
            N = o(w),
            R = e("../../../modules/ads/click_tracking_helper"),
            M = e("../../shape_icon"),
            C = o(M),
            x = e("../../user/user_icon"),
            A = o(x),
            I = e("../../../modules/shape_icon_values"),
            L = e("./native_ad_caret"),
            U = o(L),
            E = e("./native_ad_sponsored_label"),
            O = o(E),
            B = e("classnames"),
            j = o(B),
            F = r.NativeBookAd = function(e) {
                function t(e) {
                    return n(this, t), s(this, Object.getPrototypeOf(t).call(this, e))
                }
                return a(t, e), u(t, [{
                    key: "isDesktopNewsfeed",
                    value: function() {
                        return this.props.isNewsfeed && !this.props.isMobile
                    }
                }, {
                    key: "isMobileNewsfeed",
                    value: function() {
                        return this.props.isNewsfeed && this.props.isMobile
                    }
                }, {
                    key: "renderBookDescription",
                    value: function() {
                        var e = this.props.isMobile ? null : l(v["default"], {
                            book: this.props.creative.book
                        });
                        return this.props.creative.customText ? l("div", {
                            className: "gr-book__description u-marginTopXSmall"
                        }, void 0, React.createElement(b["default"], this.props.creative.customText), l("div", {
                            className: "u-paddingTopSmall"
                        }, void 0, e)) : l("div", {}, void 0, l(S["default"], {
                            className: "u-marginTopXSmall",
                            bookDescription: this.props.creative.book.description
                        }), l("div", {
                            className: "u-paddingTopSmall"
                        }, void 0, e))
                    }
                }, {
                    key: "renderLearnMoreButton",
                    value: function() {
                        var e = l("a", {
                            href: this.props.creative.book.bookUrl,
                            rel: "noopener noreferrer",
                            className: "gr-button u-marginTopMedium"
                        }, void 0, "Learn More");
                        return l(N["default"], {
                            trackingOptions: R.TRACKED_CLASSES.cta_link,
                            children: e
                        })
                    }
                }, {
                    key: "renderBook",
                    value: function() {
                        var e = (0, j["default"])({
                                "gr-newsfeedItem__body": this.isDesktopNewsfeed(),
                                bookAdBody: !this.isDesktopNewsfeed()
                            }),
                            t = this.props.creative.book;
                        return this.props.signedIn ? l(_["default"], {
                            body: this.renderBookDescription(),
                            book: t,
                            responsiveWtrButton: this.props.isMobile,
                            bookClassName: e
                        }) : React.createElement(h["default"], i({}, t, {
                            className: e,
                            size: f.VALID_BOOK_SIZES.LARGE
                        }), this.props.isMobile ? l(T["default"], {
                            rating: parseFloat(t.avgRating),
                            displayAvgRatingText: !1,
                            ratingsCount: t.ratingsCount,
                            size: T["default"].ICON_SIZES.MEDIUM
                        }) : null, this.renderBookDescription(), this.renderLearnMoreButton())
                    }
                }, {
                    key: "renderCaret",
                    value: function() {
                        return l("div", {
                            className: "googleNativeAd__caret"
                        }, void 0, l(U["default"], {
                            book: this.props.creative.book,
                            helpLink: this.props.creative.helpLink,
                            updateId: this.props.id,
                            signedIn: this.props.signedIn
                        }))
                    }
                }, {
                    key: "renderIconBody",
                    value: function() {
                        return this.props.creative.firstFriend ? l(A["default"], {
                            user: this.props.creative.firstFriend,
                            size: I.ICON_SIZES.MEDIUM
                        }) : l(C["default"], {
                            imageUrl: this.props.creative.defaultIcon,
                            size: I.ICON_SIZES.MEDIUM,
                            imageAlt: "Sponsored Newsfeed Item Icon",
                            border: !0
                        })
                    }
                }, {
                    key: "renderIcon",
                    value: function() {
                        return l("div", {
                            className: "gr-newsfeedItem__headerIcon gr-mediaBox__media gr-mediaBox__media--marginSmall"
                        }, void 0, this.renderIconBody())
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = l(O["default"], {
                                sponsoredBy: this.props.creative.sponsoredBy,
                                sponsoredUrl: this.props.creative.sponsoredUrl
                            }),
                            t = (0, j["default"])("gr-mediaBox", {
                                "feedItem feedItem--ad": this.isMobileNewsfeed(),
                                "gr-newsfeedItem gr-mediaBox": this.isDesktopNewsfeed(),
                                "googleNativeAd__item ": !this.isDesktopNewsfeed()
                            }),
                            r = (0, j["default"])({
                                nativeAd__newsfeedBody: this.isDesktopNewsfeed()
                            });
                        return React.createElement("div", {
                            className: t,
                            ref: "nativeAd"
                        }, this.isDesktopNewsfeed() && this.renderIcon(), l("div", {
                            className: "u-marginBottomSmall"
                        }, void 0, this.renderCaret(), l("div", {
                            className: "nativeAd__headerText"
                        }, void 0, l(p["default"], {
                            creative: this.props.creative,
                            signedIn: this.props.signedIn
                        })), this.props.creative.isSponsored ? e : null, l("div", {
                            className: r
                        }, void 0, this.renderBook())))
                    }
                }]), t
            }(d.Component);
        F.propTypes = {
            isNewsfeed: d.PropTypes.bool,
            isMobile: d.PropTypes.bool,
            creative: d.PropTypes.shape().isRequired,
            adDeviceType: d.PropTypes.string,
            signedIn: d.PropTypes.bool,
            id: d.PropTypes.string
        }, r["default"] = F
    }, {
        "../../../modules/ads/click_tracking_helper": 3,
        "../../../modules/shape_icon_values": 19,
        "../../book": 73,
        "../../book_description": 74,
        "../../book_with_wtr_button": 75,
        "../../click_tracking_wrapper": 81,
        "../../community_rating": 87,
        "../../preview_book/preview_book": 150,
        "../../shape_icon": 171,
        "../../user/user_icon": 198,
        "../../user_content/expandable_html": 200,
        "./native_ad_caret": 64,
        "./native_ad_sponsored_label": 65,
        "./native_book_ad_header": 67,
        classnames: "classnames",
        react: "react"
    }],
    67: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("../../gr_component_factory"),
            a = o(s),
            i = e("../../user/user_profile_link"),
            l = o(i),
            u = e("../../shared/gr_prop_types"),
            d = o(u),
            c = e("lodash"),
            p = o(c);
        r["default"] = a["default"].createClass({
            displayName: "NativeBookAdHeader",
            propTypes: {
                creative: d["default"].creative().isRequired,
                signedIn: React.PropTypes.bool
            },
            getDefaultProps: function() {
                return {
                    signedIn: !0
                }
            },
            renderLink: function(e, t) {
                return n("a", {
                    className: "gr-hyperlink gr-hyperlink--bold",
                    href: t
                }, void 0, e)
            },
            renderFriendHeader: function() {
                var e = p["default"].head(this.props.creative.topFriends);
                return n("span", {
                    className: "gr-newsfeedItem__headerText"
                }, void 0, n(l["default"], {
                    user: e
                }), this.renderHeaderText(), " ", this.props.creative.friendActionText)
            },
            renderHeaderText: function() {
                return 1 === this.props.creative.numAdditionalFriends ? n("span", {}, void 0, " and ", n(l["default"], {
                    user: this.props.creative.topFriends[1]
                })) : this.props.creative.numAdditionalFriends > 1 ? n("span", {}, void 0, " and ", this.renderLink(this.props.creative.numAdditionalFriends + " other friends", this.props.creative.book.bookUrl + "#friendReviews")) : null
            },
            renderSimilarBook: function() {
                return n("div", {
                    className: "gr-newsfeedItem__headerText gr-newsfeedItem__headerText--truncateWithEllipsis"
                }, void 0, "This is similar to ", this.renderLink(this.props.creative.similarBook.title, this.props.creative.similarBook.bookUrl))
            },
            renderGenres: function() {
                var e = p["default"].head(this.props.creative.genres);
                return n("div", {
                    className: "gr-newsfeedItem__headerText"
                }, void 0, "This book has been shelved by members as ", this.renderLink(e.genre, e.url), this.props.creative.genres.length > 1 ? n("span", {}, void 0, " and ", this.renderLink(this.props.creative.genres[1].genre, this.props.creative.genres[1].url)) : null)
            },
            renderDefault: function() {
                return n("div", {
                    className: "gr-newsfeedItem__headerText"
                }, void 0, "Based on your reading preferences, you might enjoy")
            },
            renderSignedOutText: function() {
                return n("div", {
                    className: "gr-newsfeedItem__headerText"
                }, void 0, "Goodreads Recommends")
            },
            renderContextualHeader: function() {
                return n("div", {
                    className: "gr-newsfeedItem__headerText"
                }, void 0, this.props.creative.headerText)
            },
            render: function() {
                return this.props.creative.headerText ? this.renderContextualHeader() : this.props.signedIn ? this.props.creative.topFriends ? this.renderFriendHeader() : this.props.creative.similarBook ? this.renderSimilarBook() : this.props.creative.genres ? this.renderGenres() : this.renderDefault() : this.renderSignedOutText()
            }
        })
    }, {
        "../../gr_component_factory": 107,
        "../../shared/gr_prop_types": 176,
        "../../user/user_profile_link": 199,
        lodash: "lodash"
    }],
    68: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var i = function() {
                var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
                return function(t, r, o, n) {
                    var s = t && t.defaultProps,
                        a = arguments.length - 3;
                    if (r || 0 === a || (r = {}), r && s)
                        for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                    else r || (r = s || {});
                    if (1 === a) r.children = n;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                        r.children = l
                    }
                    return {
                        $$typeof: e,
                        type: t,
                        key: void 0 === o ? null : "" + o,
                        ref: null,
                        props: r,
                        _owner: null
                    }
                }
            }(),
            l = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var o = t[r];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, r, o) {
                    return r && e(t.prototype, r), o && e(t, o), t
                }
            }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.NativeFlexAd = void 0;
        var u = e("react"),
            d = e("./native_flex_ad_body"),
            c = o(d),
            p = e("../../shape_icon"),
            f = o(p),
            h = e("../../../modules/shape_icon_values"),
            m = e("./native_ad_caret"),
            _ = o(m),
            g = e("classnames"),
            v = o(g),
            y = e("./native_ad_sponsored_label"),
            b = o(y),
            k = r.NativeFlexAd = function(e) {
                function t(e) {
                    return n(this, t), s(this, Object.getPrototypeOf(t).call(this, e))
                }
                return a(t, e), l(t, [{
                    key: "getHeaderText",
                    value: function() {
                        return {
                            __html: this.props.creative.headerText
                        }
                    }
                }, {
                    key: "renderCaret",
                    value: function() {
                        return i("div", {
                            className: "googleNativeAd__caret"
                        }, void 0, i(_["default"], {
                            helpLink: this.props.creative.helpLink,
                            updateId: this.props.id,
                            signedIn: this.props.signedIn
                        }))
                    }
                }, {
                    key: "isDesktopNewsfeed",
                    value: function() {
                        return this.props.isNewsfeed && !this.props.isMobile
                    }
                }, {
                    key: "isMobileNewsfeed",
                    value: function() {
                        return this.props.isNewsfeed && this.props.isMobile
                    }
                }, {
                    key: "renderIcon",
                    value: function() {
                        return i("div", {
                            className: "gr-newsfeedItem__headerIcon gr-mediaBox__media gr-mediaBox__media--marginSmall"
                        }, void 0, i(f["default"], {
                            imageUrl: this.props.creative.defaultIcon,
                            size: h.ICON_SIZES.MEDIUM,
                            imageAlt: "Sponsored Item Icon",
                            border: !0
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = (0, v["default"])({
                                "gr-newsfeedItem__body nativeAd__newsfeedBody": this.isDesktopNewsfeed()
                            }),
                            t = i(b["default"], {
                                sponsoredBy: this.props.creative.sponsoredBy,
                                sponsoredUrl: this.props.creative.sponsoredUrl
                            }),
                            r = (0, v["default"])("gr-mediaBox", {
                                "gr-newsfeedItem gr-mediaBox": this.isDesktopNewsfeed(),
                                "googleNativeAd__item ": !this.isDesktopNewsfeed(),
                                "feedItem feedItem--ad": this.isMobileNewsfeed()
                            });
                        return React.createElement("div", {
                            className: r,
                            ref: "nativeAd"
                        }, this.isDesktopNewsfeed() && this.renderIcon(), i("div", {
                            className: "u-marginBottomSmall"
                        }, void 0, this.renderCaret(), i("div", {
                            className: "nativeAd__headerText"
                        }, void 0, i("div", {
                            className: "gr-newsfeedItem__headerText",
                            dangerouslySetInnerHTML: this.getHeaderText()
                        })), this.props.creative.isSponsored ? t : null, i(c["default"], {
                            creative: this.props.creative,
                            bodyClassNames: e
                        })))
                    }
                }]), t
            }(u.Component);
        k.propTypes = {
            id: u.PropTypes.string,
            creative: u.PropTypes.shape().isRequired,
            signedIn: u.PropTypes.bool,
            isNewsfeed: u.PropTypes.bool,
            isMobile: u.PropTypes.bool
        }, r["default"] = k
    }, {
        "../../../modules/shape_icon_values": 19,
        "../../shape_icon": 171,
        "./native_ad_caret": 64,
        "./native_ad_sponsored_label": 65,
        "./native_flex_ad_body": 69,
        classnames: "classnames",
        react: "react"
    }],
    69: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("../../gr_component_factory"),
            a = o(s),
            i = e("../../shared/gr_prop_types"),
            l = o(i),
            u = e("classnames"),
            d = o(u),
            c = e("../../click_tracking_wrapper"),
            p = o(c),
            f = e("../../user_content/expandable_html"),
            h = o(f),
            m = e("../../../modules/ads/click_tracking_helper"),
            _ = e("react"),
            g = o(_);
        r["default"] = a["default"].createClass({
            displayName: "NativeFlexAdBody",
            propTypes: {
                creative: l["default"].creative().isRequired,
                bodyClassNames: g["default"].PropTypes.string
            },
            renderImage: function() {
                var e = (0, d["default"])("gr-mediaBox__media", this.withBemModifiers("flexAdBody__image")),
                    t = n("a", {
                        target: this.props.creative.externalLink ? "_blank" : "_self",
                        rel: "noopener noreferrer",
                        href: this.props.creative.updateUrl,
                        className: "flexAdBody__imageLink"
                    }, void 0, n("img", {
                        alt: this.props.creative.title,
                        className: e,
                        src: this.props.creative.image
                    }));
                return n(p["default"], {
                    trackingOptions: m.TRACKED_CLASSES.sponsored_update_body_image,
                    children: t
                })
            },
            renderExploreButton: function() {
                var e = n("a", {
                    target: this.props.creative.externalLink ? "_blank" : "_self",
                    rel: "noopener noreferrer",
                    href: this.props.creative.callToActionUrl,
                    className: "gr-button u-marginTopMedium gr-microsite-link"
                }, void 0, this.props.creative.callToActionText);
                return n(p["default"], {
                    trackingOptions: m.TRACKED_CLASSES.cta_link,
                    children: e
                })
            },
            render: function() {
                var e = (0, d["default"])(this.props.bodyClassNames, "gr-mediaBox", "flexAdBody"),
                    t = (0, d["default"])("flexAdBody__titleLink", "gr-hyperlink", "gr-hyperlink--naked"),
                    r = n("a", {
                        target: this.props.creative.externalLink ? "_blank" : "_self",
                        rel: "noopener noreferrer",
                        href: this.props.creative.updateUrl,
                        className: t
                    }, void 0, this.props.creative.title);
                return n("div", {
                    className: e
                }, void 0, this.renderImage(), n("div", {
                    className: "gr-mediaBox__desc"
                }, void 0, n("div", {
                    className: "flexAdBody__title"
                }, void 0, n(p["default"], {
                    trackingOptions: m.TRACKED_CLASSES.sponsored_update_body_title_link,
                    children: r
                })), n("div", {
                    className: "flexAdBody__description"
                }, void 0, g["default"].createElement(h["default"], this.props.creative.description)), this.renderExploreButton()))
            }
        })
    }, {
        "../../../modules/ads/click_tracking_helper": 3,
        "../../click_tracking_wrapper": 81,
        "../../gr_component_factory": 107,
        "../../shared/gr_prop_types": 176,
        "../../user_content/expandable_html": 200,
        classnames: "classnames",
        react: "react"
    }],
    70: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var i = function() {
                var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
                return function(t, r, o, n) {
                    var s = t && t.defaultProps,
                        a = arguments.length - 3;
                    if (r || 0 === a || (r = {}), r && s)
                        for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                    else r || (r = s || {});
                    if (1 === a) r.children = n;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                        r.children = l
                    }
                    return {
                        $$typeof: e,
                        type: t,
                        key: void 0 === o ? null : "" + o,
                        ref: null,
                        props: r,
                        _owner: null
                    }
                }
            }(),
            l = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var o = t[r];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, r, o) {
                    return r && e(t.prototype, r), o && e(t, o), t
                }
            }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.UserNotInterestedMessage = void 0;
        var u = e("react"),
            d = e("../../close_button"),
            c = o(d),
            p = e("../../../react_actions/user_not_interested_actions"),
            f = o(p),
            h = e("classnames"),
            m = o(h),
            _ = r.UserNotInterestedMessage = function(e) {
                function t(e) {
                    return n(this, t), s(this, Object.getPrototypeOf(t).call(this, e))
                }
                return a(t, e), l(t, [{
                    key: "renderUndoButton",
                    value: function(e) {
                        var t = this;
                        return i("button", {
                            className: "gr-buttonAsLink",
                            onClick: function() {
                                f["default"].undoUserNotInterested(e.bookId, t.props.id)
                            }
                        }, void 0, "Undo")
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props.creative.book;
                        if (this.props.isNewsfeed) {
                            var t = i("span", {
                                className: "gr-newsfeedItem__flashMessage--body"
                            }, void 0, "Thanks! We won't recommend", " ", i("a", {
                                href: e.bookUrl
                            }, void 0, e.title), " ", "again!", " ", this.renderUndoButton(e));
                            return i("div", {
                                className: "gr-newsfeedItem gr-newsfeedItem__flashMessage",
                                role: "alert"
                            }, void 0, i("div", {
                                className: "gr-newsfeedItem__close"
                            }, void 0, i(c["default"], {
                                action: function() {
                                    f["default"].closeFlashMessage(e.bookId)
                                }
                            })), t)
                        }
                        var t = i("span", {
                                className: "userNotInterested__message"
                            }, void 0, "Thanks! We won't recommend", " ", i("a", {
                                href: e.bookUrl
                            }, void 0, e.title), " ", "again!", " ", this.renderUndoButton(e)),
                            r = (0, m["default"])(this.props.className, "userNotInterested");
                        return i("div", {
                            className: r,
                            role: "alert"
                        }, void 0, i("div", {
                            className: "userNotInterested__close"
                        }, void 0, i(c["default"], {
                            action: function() {
                                f["default"].closeFlashMessage(e.bookId)
                            }
                        })), t)
                    }
                }]), t
            }(u.Component);
        _.propTypes = {
            id: u.PropTypes.string,
            isNewsfeed: u.PropTypes.bool,
            className: u.PropTypes.string,
            creative: u.PropTypes.shape()
        }, r["default"] = _
    }, {
        "../../../react_actions/user_not_interested_actions": 49,
        "../../close_button": 82,
        classnames: "classnames",
        react: "react"
    }],
    71: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("../gr_component_factory"),
            a = o(s),
            i = e("react"),
            l = e("classnames"),
            u = o(l),
            d = {
                SMALL: "small",
                LARGE: "large"
            };
        r["default"] = a["default"].createClass({
            displayName: "AuthorBadge",
            statics: {
                AUTHOR_BADGE_SIZES: d
            },
            propTypes: {
                size: React.PropTypes.oneOf([d.SMALL, d.LARGE]),
                isGoodreadsAuthor: i.PropTypes.bool.isRequired
            },
            getDefaultProps: function() {
                return {
                    size: d.SMALL
                }
            },
            getClasses: function() {
                return (0, u["default"])("gr-icon", {
                    "gr-icon--authorBadge": this.props.size === d.SMALL,
                    "gr-icon--authorBadgeLarge": this.props.size === d.LARGE
                })
            },
            renderBadge: function() {
                return n("span", {
                    className: this.getClasses(),
                    title: "Goodreads Author"
                })
            },
            render: function() {
                return this.props.isGoodreadsAuthor ? this.renderBadge() : null
            }
        })
    }, {
        "../gr_component_factory": 107,
        classnames: "classnames",
        react: "react"
    }],
    72: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("reflux"),
            l = o(i),
            u = e("../gr_component_factory"),
            d = o(u),
            c = e("../../react_actions/author_follow_actions"),
            p = o(c),
            f = e("../../react_stores/author_follow_store"),
            h = o(f),
            m = e("classnames"),
            _ = o(m);
        r["default"] = d["default"].createClass({
            displayName: "AuthorFollowButton",
            mixins: [l["default"].connectFilter(h["default"], "authorFollowStore", function(e) {
                return e[this.props.authorId]
            })],
            propTypes: {
                authorId: a["default"].PropTypes.number.isRequired,
                className: a["default"].PropTypes.string
            },
            handleButtonClicked: function() {
                this.state.authorFollowStore.isFollowing ? p["default"].unFollow(this.props.authorId) : (p["default"].follow(this.props.authorId), this.setState({
                    isHovering: !1
                }))
            },
            getButtonText: function() {
                return this.state.authorFollowStore.isFollowing ? this.state.isHovering ? "Unfollow" : "Following" : "Follow author"
            },
            render: function() {
                var e = this,
                    t = (0, _["default"])("gr-button", this.props.className);
                return n("button", {
                    className: t,
                    onClick: this.handleButtonClicked,
                    onMouseEnter: function() {
                        e.setState({
                            isHovering: !0
                        })
                    },
                    onMouseLeave: function() {
                        e.setState({
                            isHovering: !1
                        })
                    },
                    disabled: this.state.authorFollowStore.buttonEnabled ? !1 : "disabled"
                }, void 0, this.getButtonText())
            }
        })
    }, {
        "../../react_actions/author_follow_actions": 24,
        "../../react_stores/author_follow_store": 236,
        "../gr_component_factory": 107,
        classnames: "classnames",
        react: "react",
        reflux: "reflux"
    }],
    73: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.VALID_BOOK_SIZES = void 0;
        var s = e("react"),
            a = o(s),
            i = e("lodash"),
            l = o(i),
            u = e("./gr_component_factory"),
            d = o(u),
            c = e("./shared/gr_prop_types"),
            p = o(c),
            f = e("./click_tracking_wrapper"),
            h = o(f),
            m = e("../modules/ads/click_tracking_helper"),
            _ = e("classnames"),
            g = o(_),
            v = e("./author/author_badge"),
            y = o(v),
            b = r.VALID_BOOK_SIZES = {
                SMALL: "small",
                MEDIUM: "medium",
                LARGE: "large"
            };
        r["default"] = d["default"].createClass({
            displayName: "Book",
            propTypes: {
                imageUrl: a["default"].PropTypes.string.isRequired,
                bookUrl: a["default"].PropTypes.string.isRequired,
                bookCoverUrl: a["default"].PropTypes.string,
                title: a["default"].PropTypes.string.isRequired,
                size: a["default"].PropTypes.oneOf(l["default"].values(b)),
                titleSize: a["default"].PropTypes.oneOf(l["default"].values(b)),
                author: p["default"].author(),
                mediaBoxModifier: a["default"].PropTypes.string,
                className: a["default"].PropTypes.string,
                sponsored: a["default"].PropTypes.bool,
                bookImageTrackingData: a["default"].PropTypes.object,
                bookTitleTrackingData: a["default"].PropTypes.object,
                authorLinkTrackingData: a["default"].PropTypes.object,
                label: a["default"].PropTypes.element
            },
            getDefaultProps: function() {
                return {
                    size: b.MEDIUM,
                    bookImageTrackingData: m.TRACKED_CLASSES.book_image,
                    bookTitleTrackingData: m.TRACKED_CLASSES.book_title,
                    authorLinkTrackingData: m.TRACKED_CLASSES.author_link
                }
            },
            render: function() {
                var e = (0, g["default"])("gr-mediaBox", "gr-book--" + this.props.size, this.withBemModifiers("gr-book"), this.props.className),
                    t = (0, g["default"])("gr-mediaBox__media", this.withBemModifiers("gr-book__image"), {
                        "gr-book__image--large": this.props.size === b.LARGE
                    }),
                    r = null == this.props.titleSize ? this.props.size : this.props.titleSize,
                    o = (0, g["default"])(this.withBemModifiers("gr-book__titleLink"), {
                        "gr-book__titleLink--large": r === b.LARGE
                    }, "gr-hyperlink gr-hyperlink--naked"),
                    s = (0, g["default"])(this.withBemModifiers("gr-book__title")),
                    a = this.withBemModifiers("gr-mediaBox__desc", this.props.mediaBoxModifier),
                    i = n("img", {
                        alt: this.props.title,
                        className: t,
                        src: this.props.imageUrl
                    }),
                    l = n("a", {
                        href: this.props.bookUrl,
                        className: o
                    }, void 0, this.props.title);
                return n("div", {
                    className: e
                }, void 0, n("a", {
                    href: this.props.bookCoverUrl || this.props.bookUrl
                }, void 0, n(h["default"], {
                    children: i,
                    trackingOptions: this.props.bookImageTrackingData
                })), n("div", {
                    className: a
                }, void 0, this.props.label, n("div", {
                    className: s
                }, void 0, n(h["default"], {
                    children: l,
                    trackingOptions: this.props.bookTitleTrackingData
                })), this.renderAuthorLink(), n("div", {
                    className: "gr-book__additionalContent"
                }, void 0, this.props.children)))
            },
            renderAuthorLink: function() {
                var e = null == this.props.titleSize ? this.props.size : this.props.titleSize,
                    t = (0, g["default"])(this.withBemModifiers("gr-book__author"), {
                        "gr-book__author--large": e === b.LARGE
                    });
                if (this.props.author) {
                    var r = n("a", {
                        href: this.props.author.profileUrl,
                        className: "gr-book__authorLink gr-hyperlink gr-hyperlink--naked"
                    }, void 0, this.props.author.name);
                    return n("div", {
                        className: t
                    }, void 0, "by ", n(h["default"], {
                        children: r,
                        trackingOptions: this.props.authorLinkTrackingData
                    }), a["default"].createElement(y["default"], this.props.author))
                }
                return n("div", {
                    className: t
                }, void 0, "by deleted author")
            }
        })
    }, {
        "../modules/ads/click_tracking_helper": 3,
        "./author/author_badge": 71,
        "./click_tracking_wrapper": 81,
        "./gr_component_factory": 107,
        "./shared/gr_prop_types": 176,
        classnames: "classnames",
        lodash: "lodash",
        react: "react"
    }],
    74: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            },
            s = function() {
                var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
                return function(t, r, o, n) {
                    var s = t && t.defaultProps,
                        a = arguments.length - 3;
                    if (r || 0 === a || (r = {}), r && s)
                        for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                    else r || (r = s || {});
                    if (1 === a) r.children = n;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                        r.children = l
                    }
                    return {
                        $$typeof: e,
                        type: t,
                        key: void 0 === o ? null : "" + o,
                        ref: null,
                        props: r,
                        _owner: null
                    }
                }
            }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var a = e("./gr_component_factory"),
            i = o(a),
            l = e("./user_content/truncated_html"),
            u = o(l),
            d = e("./shared/gr_prop_types"),
            c = o(d),
            p = e("classnames"),
            f = o(p);
        r["default"] = i["default"].createClass({
            displayName: "BookDescription",
            propTypes: {
                bookDescription: c["default"].bookDescription().isRequired,
                className: React.PropTypes.string,
                bookDescriptionTargetingData: React.PropTypes.object
            },
            getDefaultProps: function() {
                return {
                    bookDescription: {
                        html: "",
                        truncated: !1,
                        fullContentUrl: ""
                    }
                }
            },
            render: function() {
                var e = (0, f["default"])(this.props.className, "gr-book__description"),
                    t = this.props.bookDescription;
                return s("div", {
                    className: e
                }, void 0, t.html ? React.createElement(u["default"], n({}, t, {
                    fullContentText: "Continue reading",
                    bookDescriptionTargetingData: this.props.bookDescriptionTargetingData
                })) : null, this.props.children)
            }
        })
    }, {
        "./gr_component_factory": 107,
        "./shared/gr_prop_types": 176,
        "./user_content/truncated_html": 204,
        classnames: "classnames"
    }],
    75: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            },
            s = function() {
                var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
                return function(t, r, o, n) {
                    var s = t && t.defaultProps,
                        a = arguments.length - 3;
                    if (r || 0 === a || (r = {}), r && s)
                        for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                    else r || (r = s || {});
                    if (1 === a) r.children = n;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                        r.children = l
                    }
                    return {
                        $$typeof: e,
                        type: t,
                        key: void 0 === o ? null : "" + o,
                        ref: null,
                        props: r,
                        _owner: null
                    }
                }
            }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var a = e("./gr_component_factory"),
            i = o(a),
            l = e("./shared/gr_prop_types"),
            u = o(l),
            d = e("./book"),
            c = o(d),
            p = e("./want_to_read/want_to_read_button"),
            f = o(p),
            h = e("lodash"),
            m = e("./community_rating"),
            _ = o(m);
        r["default"] = i["default"].createClass({
            displayName: "BookWithWTRButton",
            propTypes: {
                book: u["default"].book().isRequired,
                body: React.PropTypes.element,
                bookSize: React.PropTypes.oneOf((0, h.values)(d.VALID_BOOK_SIZES)),
                bookClassName: React.PropTypes.string,
                responsiveWtrButton: React.PropTypes.bool
            },
            getDefaultProps: function() {
                return {
                    bookSize: d.VALID_BOOK_SIZES.LARGE,
                    responsiveWtrButton: !1
                }
            },
            renderBookBody: function() {
                return this.props.body ? this.props.body : null
            },
            renderCommunityRating: function() {
                var e = this.props.book;
                return s(_["default"], {
                    rating: parseFloat(e.avgRating),
                    displayAvg: !1,
                    displayAvgRatingText: !1,
                    ratingsCount: e.ratingsCount,
                    size: _["default"].ICON_SIZES.MEDIUM
                })
            },
            renderWtrButton: function() {
                return s(f["default"], {
                    bookTitle: this.props.book.title,
                    uniqueId: (0, h.random)(1e6).toString(),
                    bookId: this.props.book.bookId,
                    withModalShelvingMenu: this.props.responsiveWtrButton,
                    showStars: !0
                })
            },
            render: function() {
                return React.createElement(c["default"], n({
                    className: this.props.bookClassName
                }, this.props.book, {
                    size: this.props.bookSize
                }), this.props.responsiveWtrButton && this.renderCommunityRating(), this.renderWtrButton(), this.renderBookBody())
            }
        })
    }, {
        "./book": 73,
        "./community_rating": 87,
        "./gr_component_factory": 107,
        "./shared/gr_prop_types": 176,
        "./want_to_read/want_to_read_button": 214,
        lodash: "lodash"
    }],
    76: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.GetACopyButton = void 0;
        var s = e("react"),
            a = e("react-redux"),
            i = e("../../react_stores/buy_buttons/get_a_copy_store"),
            l = o(i),
            u = e("../../react_actions/buy_buttons/get_a_copy_actions"),
            d = r.GetACopyButton = function(e) {
                var t = e.getACopyDataUrl,
                    r = e.getACopyClickedHandler;
                return n("div", {}, void 0, n("button", {
                    className: "gr-button gr-button--fullWidth u-paddingTopTiny u-paddingBottomTiny u-defaultType",
                    onClick: function() {
                        return r(t)
                    }
                }, void 0, "Get a copy"))
            };
        d.propTypes = {
            getACopyDataUrl: s.PropTypes.string.isRequired,
            getACopyClickedHandler: s.PropTypes.func.isRequired
        };
        var c = function() {
                return {}
            },
            p = function(e) {
                return {
                    getACopyClickedHandler: function(t) {
                        return e((0, u.getACopyClickedHandler)(t))
                    }
                }
            },
            f = (0, a.connect)(c, p)(d),
            h = function(e) {
                return n(a.Provider, {
                    store: l["default"]
                }, void 0, React.createElement(f, e))
            };
        r["default"] = h
    }, {
        "../../react_actions/buy_buttons/get_a_copy_actions": 26,
        "../../react_stores/buy_buttons/get_a_copy_store": 238,
        react: "react",
        "react-redux": "react-redux"
    }],
    77: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            },
            s = function() {
                var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
                return function(t, r, o, n) {
                    var s = t && t.defaultProps,
                        a = arguments.length - 3;
                    if (r || 0 === a || (r = {}), r && s)
                        for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                    else r || (r = s || {});
                    if (1 === a) r.children = n;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                        r.children = l
                    }
                    return {
                        $$typeof: e,
                        type: t,
                        key: void 0 === o ? null : "" + o,
                        ref: null,
                        props: r,
                        _owner: null
                    }
                }
            }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var a = e("react"),
            i = e("../modal"),
            l = o(i),
            u = e("../book"),
            d = o(u),
            c = e("../community_rating"),
            p = o(c),
            f = e("./glide_button"),
            h = o(f),
            m = e("./get_a_copy_link"),
            _ = o(m),
            g = function(e) {
                var t = e.book,
                    r = e.bookLinks,
                    o = e.glideButton,
                    a = e.onCloseHandler;
                return s(l["default"], {
                    id: "GetACopyInterstitial",
                    onCloseHandler: a,
                    showByDefault: !0,
                    centered: !0,
                    bemModifiers: "small"
                }, void 0, s("h3", {
                    className: "gr-h3 gr-h3--noTopMargin"
                }, void 0, "Get a Copy"), React.createElement(d["default"], n({}, t, {
                    className: "u-paddingBottomSmall u-bottomGrayBorder u-marginBottomSmall",
                    size: "large"
                }), s(p["default"], {
                    rating: parseFloat(t.avgRating),
                    displayAvg: !0,
                    displayAvgRatingText: !1,
                    size: "medium"
                })), s("div", {
                    className: "u-textAlignCenter"
                }, void 0, s("p", {
                    className: "gr-metaText gr-metaText--upper u-fontSizeDefault"
                }, void 0, "Available At:"), o ? React.createElement(h["default"], o) : null, r.map(function(e) {
                    return React.createElement(_["default"], n({
                        key: e.name
                    }, e))
                }), s("p", {
                    className: "u-fontSizeDefault"
                }, void 0, s("a", {
                    href: t.moreStoresUrl
                }, void 0, "More store options"))))
            };
        g.propTypes = {
            book: a.PropTypes.shape(d["default"].propTypes).isRequired,
            bookLinks: a.PropTypes.array.isRequired,
            glideButton: a.PropTypes.object,
            onCloseHandler: a.PropTypes.func
        }, r["default"] = g
    }, {
        "../book": 73,
        "../community_rating": 87,
        "../modal": 145,
        "./get_a_copy_link": 79,
        "./glide_button": 80,
        react: "react"
    }],
    78: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
                var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
                return function(t, r, o, n) {
                    var s = t && t.defaultProps,
                        a = arguments.length - 3;
                    if (r || 0 === a || (r = {}), r && s)
                        for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                    else r || (r = s || {});
                    if (1 === a) r.children = n;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                        r.children = l
                    }
                    return {
                        $$typeof: e,
                        type: t,
                        key: void 0 === o ? null : "" + o,
                        ref: null,
                        props: r,
                        _owner: null
                    }
                }
            }(),
            s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            };
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.ConditionalInterstitial = void 0;
        var a = e("react-redux"),
            i = e("../../react_stores/buy_buttons/get_a_copy_store"),
            l = o(i),
            u = e("../../react_actions/buy_buttons/get_a_copy_actions"),
            d = e("./get_a_copy_interstitial"),
            c = o(d),
            p = e("react"),
            f = r.ConditionalInterstitial = function(e) {
                var t = e.interstitial,
                    r = e.onClose;
                return t ? React.createElement(c["default"], s({}, t, {
                    onCloseHandler: r
                })) : n("noscript", {})
            };
        f.propTypes = {
            interstitial: p.PropTypes.shape({
                book: p.PropTypes.object,
                bookLinks: p.PropTypes.array,
                glideButton: p.PropTypes.object
            }),
            onClose: p.PropTypes.func
        };
        var h = function(e) {
                return {
                    interstitial: e.activeGetACopyInterstitial
                }
            },
            m = function(e) {
                return {
                    onClose: function() {
                        return e((0, u.getACopyClosed)())
                    }
                }
            },
            _ = (0, a.connect)(h, m)(f),
            g = function() {
                return n(a.Provider, {
                    store: l["default"]
                }, void 0, n(_, {}))
            };
        r["default"] = g
    }, {
        "../../react_actions/buy_buttons/get_a_copy_actions": 26,
        "../../react_stores/buy_buttons/get_a_copy_store": 238,
        "./get_a_copy_interstitial": 77,
        react: "react",
        "react-redux": "react-redux"
    }],
    79: [function(e, t, r) {
        "use strict";
        var o = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("react"),
            s = function(e) {
                var t = e.name,
                    r = e.url;
                return o("div", {
                    className: "u-marginBottomTiny"
                }, void 0, o("a", {
                    href: r,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "gr-button gr-button--fullWidth"
                }, void 0, t))
            };
        s.propTypes = {
            name: n.PropTypes.string.isRequired,
            url: n.PropTypes.string.isRequired
        }, r["default"] = s
    }, {
        react: "react"
    }],
    80: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = e("./get_a_copy_link"),
            i = o(a),
            l = function(e) {
                var t = e.price,
                    r = e.url;
                return n(i["default"], {
                    name: "Kindle Store " + t,
                    url: r
                })
            };
        l.propTypes = {
            price: s.PropTypes.string.isRequired,
            url: s.PropTypes.string.isRequired
        }, r["default"] = l
    }, {
        "./get_a_copy_link": 79,
        react: "react"
    }],
    81: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("react"),
            s = o(n),
            a = e("./gr_component_factory"),
            i = o(a);
        r["default"] = i["default"].createClass({
            displayName: "ClickTrackingWrapper",
            propTypes: {
                trackingOptions: s["default"].PropTypes.shape({
                    dfp: s["default"].PropTypes.bool,
                    pmet: s["default"].PropTypes.object.isRequired
                }).isRequired,
                children: s["default"].PropTypes.element.isRequired
            },
            render: function() {
                return this.props.children
            }
        })
    }, {
        "./gr_component_factory": 107,
        react: "react"
    }],
    82: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("./gr_component_factory"),
            l = o(i),
            u = e("../modules/shared/image_registry"),
            d = e("classnames"),
            c = o(d),
            p = e("../modules/close_button_values");
        r["default"] = l["default"].createClass({
            displayName: "CloseButton",
            propTypes: {
                action: a["default"].PropTypes.func.isRequired,
                variant: a["default"].PropTypes.oneOf([p.VARIANTS.DEFAULT, p.VARIANTS.DARK_BG])
            },
            getDefaultProps: function() {
                return {
                    variant: p.VARIANTS.DEFAULT
                }
            },
            render: function() {
                var e = (0, c["default"])("gr-iconButton", this.props.className),
                    t = void 0;
                return t = this.props.variant === p.VARIANTS.DARK_BG ? (0, u.getImages)().closeIcons.darkBackground : (0, u.getImages)().closeIcon, n("button", {
                    type: "button",
                    className: e,
                    onClick: this.props.action
                }, void 0, n("img", {
                    alt: "Dismiss",
                    src: t
                }))
            }
        })
    }, {
        "../modules/close_button_values": 9,
        "../modules/shared/image_registry": 20,
        "./gr_component_factory": 107,
        classnames: "classnames",
        react: "react"
    }],
    83: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            },
            s = function() {
                var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
                return function(t, r, o, n) {
                    var s = t && t.defaultProps,
                        a = arguments.length - 3;
                    if (r || 0 === a || (r = {}), r && s)
                        for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                    else r || (r = s || {});
                    if (1 === a) r.children = n;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                        r.children = l
                    }
                    return {
                        $$typeof: e,
                        type: t,
                        key: void 0 === o ? null : "" + o,
                        ref: null,
                        props: r,
                        _owner: null
                    }
                }
            }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var a = e("react"),
            i = o(a),
            l = e("../gr_component_factory"),
            u = o(l),
            d = e("../user_content/expandable_html"),
            c = o(d),
            p = e("../user_content/hidden_html"),
            f = o(p),
            h = e("../shared/gr_prop_types"),
            m = o(h),
            _ = e("../user/user_profile_link"),
            g = o(_),
            v = e("../user/user_icon"),
            y = o(v),
            b = e("./right_side_information"),
            k = o(b);
        r["default"] = u["default"].createClass({
            displayName: "Comment",
            propTypes: {
                body: i["default"].PropTypes.shape(m["default"].expandableHtml()),
                createdAt: m["default"].date.isRequired,
                authorUser: m["default"].user().isRequired,
                subjectKey: i["default"].PropTypes.string.isRequired,
                subject: m["default"].commentSubject(),
                deletableByCurrentUser: i["default"].PropTypes.bool.isRequired,
                blockedByCurrentUser: i["default"].PropTypes.bool,
                showTimestamp: i["default"].PropTypes.bool,
                uri: i["default"].PropTypes.string.isRequired,
                flagForAbuseUrl: i["default"].PropTypes.string.isRequired
            },
            getDefaultProps: function() {
                return {
                    blockedByCurrentUser: !1
                }
            },
            getInitialState: function() {
                return {
                    showCommentDeletingSpinner: !1
                }
            },
            renderBody: function() {
                if (this.props.blockedByCurrentUser) {
                    var e = "unhide comment";
                    return s(f["default"], {
                        unhideText: e
                    }, void 0, i["default"].createElement(c["default"], this.props.body))
                }
                return i["default"].createElement(c["default"], this.props.body)
            },
            render: function() {
                var e = this;
                return s("div", {
                    className: "gr-comment gr-mediaBox",
                    onMouseEnter: function() {
                        e.setState({
                            isHoveringOnComment: !0
                        })
                    },
                    onMouseLeave: function() {
                        e.setState({
                            isHoveringOnComment: !1
                        })
                    }
                }, void 0, s("div", {
                    className: "gr-mediaBox__media"
                }, void 0, s(y["default"], {
                    user: this.props.authorUser
                })), s("div", {
                    className: "gr-mediaBox__desc\n                              gr-mediaBox__desc--clearfixOverflow"
                }, void 0, i["default"].createElement(k["default"], n({
                    isHoveringOnComment: this.state.isHoveringOnComment
                }, this.props)), s(g["default"], {
                    user: this.props.authorUser
                }), this.props.blockedByCurrentUser ? s("strong", {}, void 0, " (blocked)") : null, s("div", {
                    className: "gr-comment__body"
                }, void 0, this.renderBody())))
            }
        })
    }, {
        "../gr_component_factory": 107,
        "../shared/gr_prop_types": 176,
        "../user/user_icon": 198,
        "../user/user_profile_link": 199,
        "../user_content/expandable_html": 200,
        "../user_content/hidden_html": 201,
        "./right_side_information": 86,
        react: "react"
    }],
    84: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("lodash"),
            l = o(i),
            u = e("../gr_component_factory"),
            d = o(u),
            c = e("../shared/gr_prop_types"),
            p = o(c),
            f = e("../../react_actions/comment_actions"),
            h = o(f),
            m = e("../../react_stores/comments_store"),
            _ = o(m),
            g = e("../user/user_icon"),
            v = o(g),
            y = e("../../react_mixins/gr_reflux"),
            b = e("classnames"),
            k = o(b);
        r["default"] = d["default"].createClass({
            displayName: "CommentForm",
            propTypes: {
                authorUser: p["default"].user().isRequired,
                subjectKey: a["default"].PropTypes.string.isRequired,
                subject: a["default"].PropTypes.shape({
                    type: a["default"].PropTypes.string,
                    id: a["default"].PropTypes.number,
                    uri: a["default"].PropTypes.string
                }),
                placeholder: a["default"].PropTypes.string
            },
            mixins: [(0, y.connectToLazyStore)(_["default"], "subjectKey")],
            getDefaultProps: function() {
                return {
                    placeholder: "Write a comment…"
                }
            },
            addNewComment: function(e) {
                this.isCommentEmpty() || h["default"].addNewComment({
                    subjectKey: this.props.subjectKey,
                    subject: this.props.subject,
                    body: this.state.unsavedComment,
                    authorUser: this.props.authorUser
                }), e.preventDefault()
            },
            isCommentEmpty: function() {
                return l["default"].isEmpty(l["default"].trim(this.state.unsavedComment))
            },
            onTextChange: function(e) {
                h["default"].commentEntered(this.props.subjectKey, e.target.value)
            },
            onFocus: function() {
                h["default"].textareaFocused(this.props.subjectKey)
            },
            onBlur: function() {
                h["default"].textareaUnfocused(this.props.subjectKey)
            },
            componentDidUpdate: function() {
                this.state.textareaFocusRequested === !0 && this.refs.commentBodyTextarea.focus()
            },
            render: function() {
                var e = (0, k["default"])(this.withBemModifiers("gr-commentForm"), "gr-mediaBox");
                return n("div", {
                    className: e
                }, void 0, n("div", {
                    className: "gr-mediaBox__media u-noLineHeight"
                }, void 0, n(v["default"], {
                    user: this.props.authorUser
                })), n("form", {
                    className: "gr-mediaBox__desc",
                    method: "post",
                    action: "/comment"
                }, void 0, n("input", {
                    type: "hidden",
                    name: "id",
                    value: this.props.subject.id
                }), n("input", {
                    type: "hidden",
                    name: "type",
                    value: this.props.subject.type
                }), a["default"].createElement("textarea", {
                    className: "gr-textarea gr-commentForm__textarea",
                    name: "comment[body_usertext]",
                    disabled: this.state.saveInProgress,
                    onChange: this.onTextChange,
                    onFocus: this.onFocus,
                    onBlur: this.onBlur,
                    rows: this.state.textareaRows,
                    value: this.state.unsavedComment,
                    ref: "commentBodyTextarea",
                    placeholder: this.props.placeholder,
                    "aria-label": this.props.placeholder
                }), this.state.showCommentButton ? n("button", {
                    className: "gr-commentForm__submitButton gr-button gr-button--small",
                    disabled: this.state.saveInProgress || this.isCommentEmpty(),
                    onClick: this.addNewComment,
                    type: "submit"
                }, void 0, "Comment") : null))
            }
        })
    }, {
        "../../react_actions/comment_actions": 27,
        "../../react_mixins/gr_reflux": 231,
        "../../react_stores/comments_store": 239,
        "../gr_component_factory": 107,
        "../shared/gr_prop_types": 176,
        "../user/user_icon": 198,
        classnames: "classnames",
        lodash: "lodash",
        react: "react"
    }],
    85: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            },
            s = function() {
                var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
                return function(t, r, o, n) {
                    var s = t && t.defaultProps,
                        a = arguments.length - 3;
                    if (r || 0 === a || (r = {}), r && s)
                        for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                    else r || (r = s || {});
                    if (1 === a) r.children = n;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                        r.children = l
                    }
                    return {
                        $$typeof: e,
                        type: t,
                        key: void 0 === o ? null : "" + o,
                        ref: null,
                        props: r,
                        _owner: null
                    }
                }
            }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var a = e("react"),
            i = o(a),
            l = e("lodash"),
            u = o(l),
            d = e("../gr_component_factory"),
            c = o(d),
            p = e("../shared/gr_prop_types"),
            f = o(p),
            h = e("./comment"),
            m = o(h),
            _ = e("../pagination_links"),
            g = o(_),
            v = e("../../react_stores/comments_store"),
            y = o(v),
            b = e("../../react_actions/comment_actions"),
            k = o(b),
            S = e("../spinner"),
            P = o(S),
            T = e("../../react_mixins/gr_reflux"),
            w = e("classnames"),
            N = o(w),
            R = 3,
            M = 1;
        r["default"] = c["default"].createClass({
            displayName: "Comments",
            propTypes: {
                subjectKey: i["default"].PropTypes.string.isRequired,
                subject: f["default"].commentSubject(),
                subjectUrl: i["default"].PropTypes.string,
                showTimestamp: i["default"].PropTypes.bool
            },
            getDefaultProps: function() {
                return {
                    showTimestamp: !0
                }
            },
            mixins: [(0, T.connectToLazyStore)(y["default"], "subjectKey")],
            seeMoreCommentsText: function() {
                return 1 == this.state.numComments ? "See 1 comment" : "See all " + this.state.numComments + " comments"
            },
            showCommentsForPage: function(e) {
                k["default"].showCommentsForPage({
                    subjectKey: this.props.subjectKey,
                    subject: this.props.subject,
                    page: e
                })
            },
            showMoreClicked: function(e) {
                k["default"].showSeeMoreLoadingSpinner(this.props.subjectKey), this.showCommentsForPage(M), e.preventDefault()
            },
            renderSeeMoreComments: function() {
                var e = this.state.numComments;
                return e > R || e > this.state.comments.length ? s("div", {
                    className: "gr-comments__seeAllLinkBox"
                }, void 0, this.state.showSeeMoreLoadingSpinner ? s("span", {}, void 0, s("span", {
                    className: "gr-hyperlink gr-hyperlink--bold"
                }, void 0, this.seeMoreCommentsText()), s("span", {
                    id: "showMoreSpinner",
                    className: "u-marginLeftTiny"
                }, void 0, s(P["default"], {}))) : s("a", {
                    href: this.props.subjectUrl,
                    className: "gr-hyperlink gr-hyperlink--bold",
                    onClick: this.showMoreClicked
                }, void 0, this.seeMoreCommentsText())) : null
            },
            renderComments: function() {
                var e = this,
                    t = this.state.showPagination ? this.state.comments : u["default"].takeRight(this.state.comments, R);
                return u["default"].map(t, function(t) {
                    return i["default"].createElement(m["default"], n({
                        key: t.uri,
                        subjectKey: e.props.subjectKey,
                        subject: e.props.subject,
                        showTimestamp: e.props.showTimestamp
                    }, t))
                })
            },
            render: function() {
                var e = (0, N["default"])(this.withBemModifiers("gr-comments"), "gr-box", "gr-box--hiddenOverflow", "u-defaultType");
                return this.state.numComments > 0 ? s("div", {
                    className: e
                }, void 0, this.state.showPagination ? null : this.renderSeeMoreComments(), this.renderComments(), this.state.showPagination ? s("div", {
                    className: "u-topGrayBorder"
                }, void 0, s(g["default"], {
                    subjectKey: this.props.subjectKey,
                    totalSize: this.state.numComments,
                    currentPageNumber: this.state.currentPage,
                    perPage: 10,
                    changePageAction: this.showCommentsForPage,
                    className: "gr-paginationLinks__links"
                })) : null) : null
            }
        })
    }, {
        "../../react_actions/comment_actions": 27,
        "../../react_mixins/gr_reflux": 231,
        "../../react_stores/comments_store": 239,
        "../gr_component_factory": 107,
        "../pagination_links": 148,
        "../shared/gr_prop_types": 176,
        "../spinner": 191,
        "./comment": 83,
        classnames: "classnames",
        lodash: "lodash",
        react: "react"
    }],
    86: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("reflux"),
            l = o(i),
            u = e("../gr_component_factory"),
            d = o(u),
            c = e("../shared/gr_prop_types"),
            p = o(c),
            f = e("../spinner"),
            h = o(f),
            m = e("../flagged_resources/flag_for_abuse_link"),
            _ = o(m),
            g = e("../time/relative_time"),
            v = o(g),
            y = e("../dot_separated_elements"),
            b = o(y),
            k = e("../../react_actions/comment_actions"),
            S = o(k),
            P = e("../../react_stores/user_agent_capabilities_store"),
            T = o(P),
            w = e("../../modules/env_utils"),
            N = o(w);
        r["default"] = d["default"].createClass({
            displayName: "CommentRightSideInformation",
            mixins: [l["default"].connect(T["default"], "userAgentCapabilities")],
            propTypes: {
                showTimestamp: a["default"].PropTypes.bool,
                isHoveringOnComment: a["default"].PropTypes.bool,
                deletableByCurrentUser: a["default"].PropTypes.bool.isRequired,
                subject: p["default"].commentSubject().isRequired,
                uri: a["default"].PropTypes.string.isRequired,
                subjectKey: a["default"].PropTypes.string.isRequired,
                createdAt: p["default"].date.isRequired,
                flagForAbuseUrl: a["default"].PropTypes.string.isRequired
            },
            getDefaultProps: function() {
                return {
                    showTimestamp: !0,
                    isHoveringOnComment: !1
                }
            },
            getInitialState: function() {
                return {
                    showCommentDeletingSpinner: !1
                }
            },
            deleteComment: function() {
                var e = {
                    subject: this.props.subject,
                    subjectKey: this.props.subjectKey
                };
                window.confirm("Are you sure you want to delete this comment?") && (this.setState({
                    showCommentDeletingSpinner: !0
                }), S["default"].deleteComment(this.props.subjectKey, this.props.uri, e))
            },
            getDeleteLink: function() {
                return this.props.deletableByCurrentUser ? this.state.showCommentDeletingSpinner ? a["default"].createElement(h["default"], {
                    ref: "spinner"
                }) : a["default"].createElement("a", {
                    className: "gr-comment__deleteLink gr-hyperlink--naked gr-hyperlink",
                    ref: "deleteLink",
                    onClick: this.deleteComment,
                    "aria-label": "Delete comment"
                }, "Delete") : void 0
            },
            getFlag: function() {
                var e = this.props.flagForAbuseUrl + "&return_url=" + encodeURIComponent(N["default"].getLocationUrl());
                return n(_["default"], {
                    flagForAbuseUrl: e
                })
            },
            getTimestamp: function() {
                return this.props.showTimestamp ? n("small", {
                    className: "gr-comment__timestamp"
                }, void 0, n(v["default"], {
                    time: this.props.createdAt
                })) : void 0
            },
            getRightSideElements: function() {
                var e = [];
                return this.state.userAgentCapabilities.touch ? (e.push(this.getDeleteLink()), e.push(this.getFlag()), e.push(this.getTimestamp())) : this.props.isHoveringOnComment ? (e.push(this.getDeleteLink()), e.push(this.getFlag())) : e.push(this.getTimestamp()), e
            },
            render: function() {
                return n("div", {
                    className: "gr-comment__rightSideInformation"
                }, void 0, n(b["default"], {
                    elements: this.getRightSideElements()
                }))
            }
        })
    }, {
        "../../modules/env_utils": 13,
        "../../react_actions/comment_actions": 27,
        "../../react_stores/user_agent_capabilities_store": 257,
        "../dot_separated_elements": 88,
        "../flagged_resources/flag_for_abuse_link": 104,
        "../gr_component_factory": 107,
        "../shared/gr_prop_types": 176,
        "../spinner": 191,
        "../time/relative_time": 196,
        react: "react",
        reflux: "reflux"
    }],
    87: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("./gr_component_factory"),
            l = o(i),
            u = e("classnames"),
            d = o(u),
            c = e("./dot_separated_elements"),
            p = o(c),
            f = {
                SMALL: "small",
                MEDIUM: "medium",
                LARGE: "large"
            },
            h = 5;
        r["default"] = l["default"].createClass({
            displayName: "CommunityRating",
            statics: {
                ICON_SIZES: f
            },
            propTypes: {
                rating: a["default"].PropTypes.number.isRequired,
                size: a["default"].PropTypes.oneOf([f.SMALL, f.MEDIUM, f.LARGE]),
                displayAvg: a["default"].PropTypes.bool,
                displayAvgRatingText: a["default"].PropTypes.bool,
                ratingsCount: a["default"].PropTypes.number,
                textReviewsCount: a["default"].PropTypes.number,
                publication: a["default"].PropTypes.shape({
                    toBePublished: a["default"].PropTypes.bool,
                    date: a["default"].PropTypes.string
                }),
                editions: a["default"].PropTypes.shape({
                    countString: a["default"].PropTypes.string,
                    url: a["default"].PropTypes.string
                }),
                className: a["default"].PropTypes.string
            },
            getDefaultProps: function() {
                return {
                    displayAvg: !1,
                    size: f.SMALL
                }
            },
            wrapperClasses: function() {
                return (0, d["default"])("communityRating__starsWrapper", {
                    "communityRating__starsWrapper--small": this.props.size === f.SMALL,
                    "communityRating__starsWrapper--medium": this.props.size === f.MEDIUM,
                    "communityRating__starsWrapper--large": this.props.size === f.LARGE
                })
            },
            starClasses: function() {
                return (0, d["default"])("communityRating__stars", {
                    "communityRating__stars--small": this.props.size === f.SMALL,
                    "communityRating__stars--medium": this.props.size === f.MEDIUM,
                    "communityRating__stars--large": this.props.size === f.LARGE
                })
            },
            getRoundedRating: function(e) {
                var t = Math.floor(e);
                return e === t ? e : .5 > e - t ? t + .45 : t + .6
            },
            renderRating: function() {
                var e = this.getRoundedRating(this.props.rating),
                    t = {
                        width: e / h * 100 + "%"
                    },
                    r = "Rated " + this.props.rating.toFixed(2) + " of " + h,
                    o = null === this.props.displayAvgRatingText ? this.props.displayAvg : this.props.displayAvgRatingText;
                return n("span", {}, void 0, n("div", {
                    className: this.wrapperClasses()
                }, void 0, n("div", {
                    className: this.starClasses(),
                    style: t,
                    "aria-label": r
                })), this.props.displayAvg ? n("span", {
                    className: "gr-metaText"
                }, void 0, this.props.rating.toFixed(2), o ? " avg. rating" : "") : null)
            },
            renderRatingsCount: function() {
                return n("span", {
                    className: "gr-metaText u-inlineBlock"
                }, void 0, this.props.ratingsCount.toLocaleString(), " Ratings")
            },
            renderTextReviewsCount: function() {
                return n("span", {
                    className: "gr-metaText u-inlineBlock"
                }, void 0, this.props.textReviewsCount.toLocaleString(), " Reviews")
            },
            renderPublicationDate: function() {
                return n("span", {
                    className: "gr-metaText u-inlineBlock"
                }, void 0, (this.props.publication.toBePublished ? "expected publication" : "published") + " " + this.props.publication.date)
            },
            renderEditionsCount: function() {
                return n("span", {
                    className: "gr-metaText"
                }, void 0, n("a", {
                    className: "gr-hyperlink gr-hyperlink--naked u-inlineBlock",
                    href: this.props.editions.url
                }, void 0, this.props.editions.countString))
            },
            render: function() {
                var e = (0, d["default"])("communityRating", this.props.className),
                    t = "Rated " + this.props.rating.toFixed(2) + " of " + h,
                    r = [this.renderRating()];
                return this.props.ratingsCount && r.push(this.renderRatingsCount()), this.props.textReviewsCount && r.push(this.renderTextReviewsCount()), this.props.publication && this.props.publication.date && r.push(this.renderPublicationDate()), this.props.editions && this.props.editions.countString && r.push(this.renderEditionsCount()), n("div", {
                    className: e,
                    "aria-label": t
                }, void 0, n(p["default"], {
                    elements: r
                }))
            }
        })
    }, {
        "./dot_separated_elements": 88,
        "./gr_component_factory": 107,
        classnames: "classnames",
        react: "react"
    }],
    88: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("lodash"),
            l = e("./gr_component_factory"),
            u = o(l);
        r["default"] = u["default"].createClass({
            displayName: "DotSeparatedElements",
            propTypes: {
                elements: a["default"].PropTypes.arrayOf(a["default"].PropTypes.oneOfType([a["default"].PropTypes.element, a["default"].PropTypes.string])).isRequired,
                separator: a["default"].PropTypes.element
            },
            getDefaultProps: function() {
                return {
                    separator: n("span", {}, void 0, " · ")
                }
            },
            joinElementsWithSeparator: function() {
                var e = this,
                    t = (0, i.compact)(this.props.elements);
                return (0, i.transform)(t, function(r, o, n) {
                    r.push(o), n + 1 !== t.length && r.push(e.props.separator)
                })
            },
            render: function() {
                return n("span", {
                    className: this.props.className
                }, void 0, (0, i.map)(this.joinElementsWithSeparator(), function(e, t) {
                    return n("span", {}, t, e)
                }))
            }
        })
    }, {
        "./gr_component_factory": 107,
        lodash: "lodash",
        react: "react"
    }],
    89: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("./gr_component_factory"),
            l = o(i);
        r["default"] = l["default"].createClass({
            displayName: "DropDownList",
            propTypes: {
                showMoreLink: a["default"].PropTypes.bool,
                moreLinkURL: a["default"].PropTypes.string,
                moreLinkText: a["default"].PropTypes.string
            },
            getDefaultProps: function() {
                return {
                    showMoreLink: !1,
                    moreLinkURL: null,
                    moreLinkText: "…More"
                }
            },
            render: function() {
                return n("div", {}, void 0, this.props.children, this.props.showMoreLink && null !== this.props.moreLinkURL ? n("a", {
                    className: "dropDownList__listItem--moreLink",
                    href: this.props.moreLinkURL
                }, void 0, this.props.moreLinkText) : null)
            }
        })
    }, {
        "./gr_component_factory": 107,
        react: "react"
    }],
    90: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("lodash"),
            l = o(i),
            u = e("reflux"),
            d = o(u),
            c = e("./gr_component_factory"),
            p = o(c),
            f = e("../react_mixins/hover_intent"),
            h = o(f),
            m = e("classnames"),
            _ = o(m),
            g = e("react-onclickoutside"),
            v = o(g),
            y = e("../modules/keys"),
            b = o(y),
            k = e("../react_stores/user_agent_capabilities_store"),
            S = o(k),
            P = {
                HOVER: "hover",
                CLICK: "click"
            },
            T = {
                LEFT: "left",
                RIGHT: "right"
            },
            w = 100,
            N = w;
        r["default"] = p["default"].createClass({
            displayName: "Dropdown",
            mixins: [h["default"], v["default"], d["default"].connect(S["default"], "userAgentCapabilities")],
            propTypes: {
                alignment: a["default"].PropTypes.oneOf(l["default"].values(T)),
                fallbackUrl: a["default"].PropTypes.string,
                onShowCallback: a["default"].PropTypes.func,
                tooltipText: a["default"].PropTypes.string,
                trigger: a["default"].PropTypes.oneOfType([a["default"].PropTypes.string, a["default"].PropTypes.element]).isRequired,
                triggerEventType: a["default"].PropTypes.oneOf(l["default"].values(P))
            },
            statics: {
                TriggerEventTypes: P
            },
            getTriggerEventType: function() {
                return this.state.userAgentCapabilities.touch ? P.CLICK : this.props.triggerEventType
            },
            getInitialState: function() {
                return {
                    dropdownOpen: !1
                }
            },
            getDefaultProps: function() {
                return {
                    triggerEventType: P.CLICK,
                    alignment: T.LEFT
                }
            },
            hide: function() {
                this.setState({
                    dropdownOpen: !1
                })
            },
            show: function() {
                this.setState({
                    dropdownOpen: !0
                }), this.props.onShowCallback && this.props.onShowCallback()
            },
            toggle: function(e) {
                this.props.children && e.preventDefault(), this.state.dropdownOpen ? this.hide() : this.show()
            },
            openList: function(e) {
                b["default"].isDropdownOpenerKey(e.keyCode) ? (e.preventDefault(), b["default"].isArrowDown(e.keyCode) ? this.show() : this.toggle(e)) : b["default"].isDefaultCloserKey(e.keyCode) && (e.preventDefault(), this.hide())
            },
            handleClickOutside: function() {
                this.state.userAgentCapabilities.touch || this.hide()
            },
            handleMouseEnter: function() {
                this.onEnterIntent(this.show, w)
            },
            handleMouseLeave: function() {
                this.onLeaveIntent(this.hide, N)
            },
            handleTriggerClick: function(e) {
                return this.state.dropdownOpen && this.props.triggerEventType === P.HOVER && this.state.userAgentCapabilities.touch !== !0 ? void e.preventDefault() : void this.toggle(e)
            },
            triggerClasses: function() {
                return (0, _["default"])(this.withBemModifiers(["dropdown__trigger"]), {
                    "dropdown__trigger--buttonReset": l["default"].isUndefined(this.props.fallbackUrl)
                }, {
                    "dropdown__trigger--triggerEventTypeHover": this.props.triggerEventType === P.HOVER
                }, {
                    "dropdown__trigger--personalNav": "true" === this.props.isInPersonalNav
                }, {
                    "dropdown__trigger--personalNavActive": "true" === this.props.isInPersonalNav && this.state.dropdownOpen
                })
            },
            renderTriggerButton: function() {
                return n("button", {
                    className: this.triggerClasses(),
                    "aria-haspopup": "true",
                    "aria-expanded": this.state.dropdownOpen,
                    onClick: this.handleTriggerClick,
                    onKeyDown: this.openList,
                    title: this.props.tooltipText
                }, void 0, this.props.trigger)
            },
            renderTriggerLink: function() {
                return n("a", {
                    className: this.triggerClasses(),
                    href: this.props.fallbackUrl,
                    onClick: this.handleTriggerClick,
                    onKeyDown: this.openList,
                    role: "button",
                    "aria-haspopup": "true",
                    "aria-expanded": this.state.dropdownOpen,
                    title: this.props.tooltipText
                }, void 0, this.props.trigger)
            },
            render: function() {
                var e = (0, _["default"])(this.withBemModifiers("dropdown")),
                    t = (0, _["default"])(this.withBemModifiers("dropdown__menu"), "gr-box gr-box--withShadowLarge", {
                        "dropdown__menu--show": this.state.dropdownOpen
                    }),
                    r = l["default"].isUndefined(this.props.fallbackUrl) ? this.renderTriggerButton() : this.renderTriggerLink(),
                    o = n("div", {
                        className: t,
                        role: "menu"
                    }, void 0, this.props.children);
                switch (this.getTriggerEventType()) {
                    case P.HOVER:
                        return n("div", {
                            className: e,
                            onMouseEnter: this.handleMouseEnter,
                            onMouseLeave: this.handleMouseLeave
                        }, void 0, r, o);
                    case P.CLICK:
                        return n("div", {
                            className: e
                        }, void 0, r, o)
                }
            }
        })
    }, {
        "../modules/keys": 16,
        "../react_mixins/hover_intent": 232,
        "../react_stores/user_agent_capabilities_store": 257,
        "./gr_component_factory": 107,
        classnames: "classnames",
        lodash: "lodash",
        react: "react",
        "react-onclickoutside": "react-onclickoutside",
        reflux: "reflux"
    }],
    91: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s);
        r["default"] = a["default"].createClass({
            displayName: "error_message.js",
            propTypes: {
                componentName: a["default"].PropTypes.string.isRequired
            },
            render: function() {
                return n("div", {
                    className: "gr-errorMessage"
                }, void 0, "There was an issue rendering ", this.props.componentName)
            }
        })
    }, {
        react: "react"
    }],
    92: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("../../../../gr_component_factory"),
            l = o(i),
            u = e("../../../../shared/gr_prop_types"),
            d = o(u),
            c = e("classnames"),
            p = o(c),
            f = e("../../../../author/author_badge"),
            h = o(f);
        r["default"] = l["default"].createClass({
            displayName: "UniversalSearchResultAuthor",
            propTypes: {
                result: d["default"].searchResults.author().isRequired,
                onChooseResult: a["default"].PropTypes.func.isRequired
            },
            render: function() {
                var e = this,
                    t = (0, p["default"])("gr-mediaBox", "gr-book--navbar", "gr-hyperlink", "gr-hyperlink--naked", "gr-hyperlink--noUnderline", "searchResults__result");
                return n("a", {
                    className: t,
                    href: "#",
                    "aria-label": "Search result",
                    onClick: function() {
                        e.props.onChooseResult(e.props.result)
                    }
                }, void 0, n("img", {
                    className: "gr-mediaBox__media",
                    src: this.props.result.object.profileImage,
                    alt: "Author pic"
                }), n("div", {
                    className: "gr-mediaBox__desc"
                }, void 0, n("div", {
                    className: "gr-universalSearchResult__mainText gr-universalSearchResult__mainText--navbar u-defaultType"
                }, void 0, this.props.result.object.name)), n("div", {
                    className: "gr-universalSearchResult__secondaryText gr-universalSearchResult__secondaryText--navbar"
                }, void 0, "Author", a["default"].createElement(h["default"], this.props.result.object)))
            }
        })
    }, {
        "../../../../author/author_badge": 71,
        "../../../../gr_component_factory": 107,
        "../../../../shared/gr_prop_types": 176,
        classnames: "classnames",
        react: "react"
    }],
    93: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("../../../../gr_component_factory"),
            l = o(i),
            u = e("../../../../shared/gr_prop_types"),
            d = o(u),
            c = e("classnames"),
            p = o(c),
            f = e("../../../../author/author_badge"),
            h = o(f);
        r["default"] = l["default"].createClass({
            displayName: "UniversalSearchResultBook",
            propTypes: {
                result: d["default"].searchResults.book().isRequired,
                onChooseResult: a["default"].PropTypes.func.isRequired
            },
            render: function() {
                var e = this,
                    t = (0, p["default"])("gr-mediaBox", "gr-book--navbar", "gr-hyperlink", "gr-hyperlink--naked", "gr-hyperlink--noUnderline", "gr-universalSearchResults__result");
                return n("a", {
                    className: t,
                    href: "#",
                    "aria-label": "Search result",
                    onClick: function() {
                        e.props.onChooseResult(e.props.result)
                    }
                }, void 0, n("img", {
                    className: "gr-mediaBox__media",
                    src: this.props.result.object.imageUrl,
                    alt: "Cover pic"
                }), n("div", {
                    className: "gr-mediaBox__desc"
                }, void 0, n("div", {
                    className: "gr-universalSearchResult__mainText gr-universalSearchResult__mainText--navbar u-defaultType"
                }, void 0, this.props.result.object.title), n("div", {
                    className: "gr-universalSearchResult__secondaryText gr-universalSearchResult__secondaryText--navbar"
                }, void 0, "by ", this.props.result.object.authorName, a["default"].createElement(h["default"], this.props.result.object))))
            }
        })
    }, {
        "../../../../author/author_badge": 71,
        "../../../../gr_component_factory": 107,
        "../../../../shared/gr_prop_types": 176,
        classnames: "classnames",
        react: "react"
    }],
    94: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("../../../../gr_component_factory"),
            l = o(i),
            u = e("../../../../shared/gr_prop_types"),
            d = o(u),
            c = e("classnames"),
            p = o(c);
        r["default"] = l["default"].createClass({
            displayName: "UniversalSearchResultUser",
            propTypes: {
                result: d["default"].searchResults.user().isRequired,
                onChooseResult: a["default"].PropTypes.func.isRequired
            },
            render: function() {
                var e = this,
                    t = (0, p["default"])("gr-mediaBox", "gr-book--navbar", "gr-hyperlink", "gr-hyperlink--naked", "gr-hyperlink--noUnderline", "searchResults__result");
                return n("a", {
                    className: t,
                    href: "#",
                    "aria-label": "Search result",
                    onClick: function() {
                        e.props.onChooseResult(e.props.result)
                    }
                }, void 0, n("img", {
                    className: "gr-mediaBox__media",
                    src: this.props.result.object.profileImage,
                    alt: "User pic"
                }), n("div", {
                    className: "gr-mediaBox__desc"
                }, void 0, n("div", {
                    className: "gr-universalSearchResult__mainText gr-universalSearchResult__mainText--navbar u-defaultType"
                }, void 0, this.props.result.object.name)), n("div", {
                    className: "gr-universalSearchResult__secondaryText gr-universalSearchResult__secondaryText--navbar"
                }, void 0, "Goodreads User"))
            }
        })
    }, {
        "../../../../gr_component_factory": 107,
        "../../../../shared/gr_prop_types": 176,
        classnames: "classnames",
        react: "react"
    }],
    95: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            },
            s = function() {
                var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
                return function(t, r, o, n) {
                    var s = t && t.defaultProps,
                        a = arguments.length - 3;
                    if (r || 0 === a || (r = {}), r && s)
                        for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                    else r || (r = s || {});
                    if (1 === a) r.children = n;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                        r.children = l
                    }
                    return {
                        $$typeof: e,
                        type: t,
                        key: void 0 === o ? null : "" + o,
                        ref: null,
                        props: r,
                        _owner: null
                    }
                }
            }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var a = e("react"),
            i = o(a),
            l = e("lodash"),
            u = o(l),
            d = e("../../../gr_component_factory"),
            c = o(d),
            p = e("reflux"),
            f = o(p),
            h = e("react-onclickoutside"),
            m = o(h),
            _ = e("classnames"),
            g = o(_),
            v = e("../../../../modules/keys"),
            y = o(v),
            b = e("../../../../react_stores/experimental/search/universal_search_store_factory"),
            k = o(b),
            S = e("./universal_search_results"),
            P = o(S),
            T = e("../../../spinner"),
            w = o(T),
            N = e("../../../../react_mixins/factory_store_mixin"),
            R = o(N);
        r["default"] = c["default"].createClass({
            displayName: "UniversalSearch",
            mixins: [m["default"], f["default"].ListenerMixin, (0, R["default"])(k["default"])],
            propTypes: {
                onChooseResult: i["default"].PropTypes.func.isRequired,
                maxResults: i["default"].PropTypes.number,
                searchPath: i["default"].PropTypes.string.isRequired,
                closeAfterResultChosen: i["default"].PropTypes.bool,
                autocompleteUrl: i["default"].PropTypes.string.isRequired
            },
            getDefaultProps: function() {
                return {
                    maxResults: 7,
                    closeAfterResultChosen: !1
                }
            },
            hide: function() {
                this.actions.setShowResultsContainer(!1)
            },
            handleClickOutside: function() {
                this.hide()
            },
            handleSearch: function(e) {
                this.actions.search(e.target.value, this.props.autocompleteUrl, this.props.maxResults)
            },
            handleClick: function(e) {
                u["default"].isEmpty(this.state.query) || this.handleSearch(e)
            },
            handleChoice: function(e) {
                this.props.onChooseResult(e), this.props.closeAfterResultChosen && this.hide()
            },
            handleKeyPress: function(e) {
                var t = Math.min(this.props.maxResults, this.state.results.length);
                y["default"].isEnter(e.keyCode) && null !== this.state.activeResult ? (this.handleChoice(this.state.activeResult), e.preventDefault()) : y["default"].isArrowDown(e.keyCode) ? this.actions.selectNextResult(t) : y["default"].isArrowUp(e.keyCode) ? this.actions.selectPreviousResult(t) : y["default"].isEscape(e.keyCode) && this.hide()
            },
            renderInputIcon: function() {
                var e = (0, g["default"])("searchBox__icon", {
                    "searchBox__icon--loadingSpinner": this.state.showLoadingSpinner,
                    "searchBox__icon--magnifyingGlass gr-iconButton": !this.state.showLoadingSpinner
                });
                return this.state.showLoadingSpinner ? s("span", {
                    className: e
                }, void 0, s(w["default"], {})) : s("button", {
                    type: "submit",
                    className: e,
                    "aria-label": "Search"
                })
            },
            render: function() {
                var e = (0, g["default"])(this.withBemModifiers("searchBox")),
                    t = (0, g["default"])(this.withBemModifiers("searchBox__input"));
                return s("div", {
                    acceptCharset: "UTF-8",
                    className: e,
                    onKeyDown: this.handleKeyPress
                }, void 0, s("form", {
                    autoComplete: "off",
                    action: this.props.searchPath,
                    className: "searchBox__form",
                    role: "search",
                    "aria-label": "Search for books to add to your shelves"
                }, void 0, s("input", {
                    className: t,
                    autoComplete: "off",
                    name: "q",
                    type: "text",
                    placeholder: "Search books/authors",
                    "aria-label": "Search books",
                    onClick: this.handleClick,
                    onChange: this.handleSearch,
                    "aria-controls": "searchResults"
                }), this.renderInputIcon(), this.state.showResultsContainer ? i["default"].createElement(P["default"], n({}, this.props, this.state, {
                    onChooseResult: this.handleChoice,
                    mouseoverAction: this.actions.selectSpecificResult
                })) : null))
            }
        })
    }, {
        "../../../../modules/keys": 16,
        "../../../../react_mixins/factory_store_mixin": 230,
        "../../../../react_stores/experimental/search/universal_search_store_factory": 241,
        "../../../gr_component_factory": 107,
        "../../../spinner": 191,
        "./universal_search_results": 96,
        classnames: "classnames",
        lodash: "lodash",
        react: "react",
        "react-onclickoutside": "react-onclickoutside",
        reflux: "reflux"
    }],
    96: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("lodash"),
            l = o(i),
            u = e("classnames"),
            d = o(u),
            c = e("../../../drop_down_list"),
            p = o(c),
            f = e("./results/universal_search_result_book"),
            h = o(f),
            m = e("./results/universal_search_result_author"),
            _ = o(m),
            g = e("./results/universal_search_result_user"),
            v = o(g),
            y = e("../../../shared/gr_prop_types"),
            b = o(y),
            k = e("../../../gr_component_factory"),
            S = o(k),
            P = {
                author: _["default"],
                book: h["default"],
                friend: v["default"]
            };
        r["default"] = S["default"].createClass({
            displayName: "UniversalSearchResults",
            propTypes: {
                maxResults: a["default"].PropTypes.number.isRequired,
                query: a["default"].PropTypes.string,
                results: a["default"].PropTypes.array.isRequired,
                shelfName: a["default"].PropTypes.string,
                searchPath: a["default"].PropTypes.string,
                onChooseResult: a["default"].PropTypes.func.isRequired,
                mouseoverAction: a["default"].PropTypes.func.isRequired,
                activeResult: a["default"].PropTypes.oneOfType([b["default"].searchResults.author(), b["default"].searchResults.book(), b["default"].searchResults.user()])
            },
            renderLastSearchResultItem: function(e) {
                var t = (0, d["default"])("gr-buttonAsLink", "searchResults__lastItem", this.withBemElement("gr-universalSearchResults", "lastItem"));
                return n("button", {
                    className: t,
                    type: "submit"
                }, void 0, e)
            },
            renderResult: function(e) {
                var t = this,
                    r = P[e.type];
                return n("div", {
                    className: (0, d["default"])("gr-universalSearchResults__item", {
                        "gr-universalSearchResults__item--active": e === this.props.activeResult
                    }),
                    onMouseOver: function() {
                        t.props.mouseoverAction(e)
                    }
                }, e.object.id, n(r, {
                    result: e,
                    onChooseResult: this.props.onChooseResult
                }))
            },
            render: function() {
                var e = this,
                    t = (0, d["default"])(this.withBemModifiers("gr-universalSearchResults"), "gr-box", "gr-box--withShadow");
                return n("div", {
                    className: t,
                    id: "universalSearchResults" + this.props.query + this.props.results.length,
                    "aria-live": "polite",
                    "aria-label": "Universal search results"
                }, void 0, n(p["default"], {
                    maxListItems: this.props.maxResults
                }, void 0, this.props.results.length > 0 ? l["default"].map(l["default"].slice(this.props.results, 0, this.props.maxResults), function(t) {
                    return e.renderResult(t)
                }) : this.renderLastSearchResultItem('Search for "' + this.props.query + '"…'), this.props.results.length > 0 ? this.renderLastSearchResultItem('See all results for "' + this.props.query + '"') : null))
            }
        })
    }, {
        "../../../drop_down_list": 89,
        "../../../gr_component_factory": 107,
        "../../../shared/gr_prop_types": 176,
        "./results/universal_search_result_author": 92,
        "./results/universal_search_result_book": 93,
        "./results/universal_search_result_user": 94,
        classnames: "classnames",
        lodash: "lodash",
        react: "react"
    }],
    97: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("lodash"),
            l = o(i),
            u = e("./gr_component_factory"),
            d = o(u),
            c = e("reflux"),
            p = o(c),
            f = e("./genre_checkbox"),
            h = o(f),
            m = e("./../react_actions/modal_actions"),
            _ = o(m),
            g = e("../react_actions/favorite_genres_form_actions"),
            v = o(g),
            y = e("../react_stores/favorite_genres_form_store"),
            b = o(y);
        r["default"] = d["default"].createClass({
            displayName: "FavoriteGenresForm",
            mixins: [p["default"].connect(b["default"], "favoriteGenresFormStore")],
            propTypes: {
                favoriteGenres: a["default"].PropTypes.array,
                genres: a["default"].PropTypes.array.isRequired
            },
            getDefaultProps: function() {
                return {
                    favoriteGenres: []
                }
            },
            onSubmit: function(e) {
                v["default"].submitSelectedGenres(), _["default"].closeModal(), e.preventDefault()
            },
            renderGenreCheckboxes: function() {
                var e = this;
                return n("div", {
                    className: "gr-genresForm__checkBoxes"
                }, void 0, l["default"].map(this.props.genres, function(t) {
                    return n(h["default"], {
                        genre: t.name,
                        isFavorited: l["default"].includes(e.state.favoriteGenresFormStore.selectedGenres, t.name)
                    }, t.name)
                }))
            },
            render: function() {
                return n("div", {
                    className: "gr-genresForm"
                }, void 0, n("div", {
                    className: "gr-genresForm__title"
                }, void 0, "Follow Your Favorite Genres"), n("div", {
                    className: "gr-genresForm__description"
                }, void 0, "We use your favorite genres to make better book recommendations and tailor what you see in your Updates feed."), n("form", {
                    action: "/user/edit_fav_genres",
                    "data-remote": "true",
                    method: "post"
                }, void 0, this.renderGenreCheckboxes(), n("button", {
                    type: "submit",
                    onClick: this.onSubmit,
                    className: "gr-button gr-button--large"
                }, void 0, "Save")))
            }
        })
    }, {
        "../react_actions/favorite_genres_form_actions": 33,
        "../react_stores/favorite_genres_form_store": 242,
        "./../react_actions/modal_actions": 38,
        "./genre_checkbox": 106,
        "./gr_component_factory": 107,
        lodash: "lodash",
        react: "react",
        reflux: "reflux"
    }],
    98: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("./gr_component_factory"),
            a = o(s),
            i = e("./dot_separated_elements"),
            l = o(i),
            u = e("react"),
            d = o(u),
            c = e("classnames"),
            p = o(c),
            f = e("./click_tracking_wrapper"),
            h = o(f),
            m = e("../modules/ads/click_tracking_helper"),
            _ = "Read More";
        r["default"] = a["default"].createClass({
            displayName: "FeaturedContentBlog",
            propTypes: {
                blog: d["default"].PropTypes.shape({
                    likeCount: d["default"].PropTypes.number.isRequired,
                    commentCount: d["default"].PropTypes.number.isRequired,
                    imageUrl: d["default"].PropTypes.string.isRequired,
                    blogUrl: d["default"].PropTypes.string.isRequired,
                    title: d["default"].PropTypes.string.isRequired
                }).isRequired,
                isMobile: d["default"].PropTypes.bool,
                isInline: d["default"].PropTypes.bool
            },
            defaultProps: {
                isMobile: !1,
                isInline: !1
            },
            renderImage: function() {
                var e = (0, p["default"])("featuredContentImageBody__imageLink", {
                        "featuredContentImageBody__imageLink--inline": this.props.isInline
                    }),
                    t = (0, p["default"])("featuredContentImageBody__image", {
                        featuredContentImageBody__imageMobile: this.props.isMobile
                    });
                if (this.props.blog.imageUrl) {
                    var r = n("a", {
                        className: e,
                        href: this.props.blog.blogUrl
                    }, void 0, n("img", {
                        className: t,
                        src: this.props.blog.imageUrl,
                        alt: "" + this.props.blog.title
                    }));
                    return n(h["default"], {
                        trackingOptions: m.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_blog_image,
                        children: r
                    })
                }
                return null
            },
            renderTitle: function() {
                var e = (0, p["default"])("featuredContentImageBody__title", {
                        "featuredContentImageBody__title--mobile": this.props.isMobile,
                        "featuredContentImageBody__title--inline": this.props.isInline
                    }),
                    t = n("a", {
                        href: this.props.blog.blogUrl,
                        className: e
                    }, void 0, this.props.blog.title);
                return n(h["default"], {
                    trackingOptions: m.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_blog_title,
                    children: t
                })
            },
            renderLikesText: function(e) {
                return n("span", {
                    className: "gr-metaText featuredContentImageBody__likes"
                }, void 0, e, " likes")
            },
            renderCommentsText: function(e) {
                return n("span", {
                    className: "gr-metaText featuredContentImageBody__comments"
                }, void 0, e, " comments")
            },
            renderReadMore: function() {
                var e = (0, p["default"])("gr-button", "featuredContentImageBody__button", {
                        "featuredContentImageBody__button--mobile": this.props.isMobile,
                        "featuredContentImageBody__button--inline": this.props.isInline
                    }),
                    t = n("a", {
                        href: this.props.blog.blogUrl,
                        className: e
                    }, void 0, _);
                return n(h["default"], {
                    trackingOptions: m.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_blog_button,
                    children: t
                })
            },
            renderLikesAndComments: function() {
                return n("div", {
                    className: "featuredContentImageBody__likesAndComments"
                }, void 0, this.renderLikesAndCommentsText())
            },
            renderLikesAndCommentsText: function() {
                var e = this.props.blog,
                    t = this.renderLikesText(e.likeCount),
                    r = this.renderCommentsText(e.commentCount);
                return e.likeCount && e.commentCount ? n(l["default"], {
                    elements: [t, r]
                }) : e.likeCount ? t : e.commentCount ? r : null
            },
            render: function() {
                return this.props.isInline ? n("div", {
                    className: "featuredContentImageBody--inline genreFeatureContainer"
                }, void 0, this.renderImage(), n("div", {}, void 0, this.renderTitle(), this.renderLikesAndComments(), this.renderReadMore())) : n("div", {
                    className: "featuredContentImageBody genreFeatureContainer"
                }, void 0, this.renderTitle(), this.renderImage(), this.renderLikesAndComments(), this.renderReadMore())
            }
        })
    }, {
        "../modules/ads/click_tracking_helper": 3,
        "./click_tracking_wrapper": 81,
        "./dot_separated_elements": 88,
        "./gr_component_factory": 107,
        classnames: "classnames",
        react: "react"
    }],
    99: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            },
            s = function() {
                var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
                return function(t, r, o, n) {
                    var s = t && t.defaultProps,
                        a = arguments.length - 3;
                    if (r || 0 === a || (r = {}), r && s)
                        for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                    else r || (r = s || {});
                    if (1 === a) r.children = n;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                        r.children = l
                    }
                    return {
                        $$typeof: e,
                        type: t,
                        key: void 0 === o ? null : "" + o,
                        ref: null,
                        props: r,
                        _owner: null
                    }
                }
            }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var a = e("./gr_component_factory"),
            i = o(a),
            l = e("./book"),
            u = o(l),
            d = e("./book_description"),
            c = o(d),
            p = e("react"),
            f = o(p),
            h = e("./click_tracking_wrapper"),
            m = o(h),
            _ = e("classnames"),
            g = o(_),
            v = e("../modules/ads/click_tracking_helper");
        r["default"] = i["default"].createClass({
            displayName: "FeaturedContentBook",
            propTypes: {
                book: f["default"].PropTypes.object.isRequired,
                isMobile: f["default"].PropTypes.bool,
                isInline: f["default"].PropTypes.bool
            },
            defaultProps: {
                isMobile: !1,
                isInline: !1
            },
            renderImage: function() {
                var e = s("img", {
                        alt: this.props.book.title,
                        src: this.props.book.imageUrl,
                        className: (0, g["default"])("featuredContentBook__imageMobile")
                    }),
                    t = s("a", {
                        href: this.props.book.bookCoverUrl || this.props.book.bookUrl,
                        className: (0, g["default"])("featuredContentBook__imageLinkMobile")
                    }, void 0, e);
                return s(m["default"], {
                    trackingOptions: v.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_book_image,
                    children: t
                })
            },
            renderDescription: function() {
                return this.props.book.description ? s(c["default"], {
                    bookDescription: this.props.book.description,
                    className: (0, g["default"])("featuredContentBook__description"),
                    bookDescriptionTargetingData: v.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_book_description
                }) : null
            },
            renderLearnMore: function() {
                var e = (0, g["default"])("gr-button", "featuredContentBook__button", {
                        "featuredContentBook__button--mobile": this.props.isMobile,
                        "featuredContentBook__button--inline": this.props.isInline
                    }),
                    t = s("a", {
                        href: this.props.book.bookUrl,
                        className: e
                    }, void 0, "Learn more");
                return s(m["default"], {
                    trackingOptions: v.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_book_button,
                    children: t
                })
            },
            render: function() {
                return this.props.isMobile ? s("div", {
                    className: (0, g["default"])("featuredContentBook", "featuredContentBook--mobile")
                }, void 0, this.renderImage(), this.renderDescription(), this.renderLearnMore()) : s("div", {
                    className: "featuredContentBook"
                }, void 0, f["default"].createElement(u["default"], n({}, this.props.book, {
                    bookImageTrackingData: v.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_book_image,
                    bookTitleTrackingData: v.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_book_title,
                    authorLinkTrackingData: v.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_book_author
                }), this.renderDescription(), this.renderLearnMore()))
            }
        })
    }, {
        "../modules/ads/click_tracking_helper": 3,
        "./book": 73,
        "./book_description": 74,
        "./click_tracking_wrapper": 81,
        "./gr_component_factory": 107,
        classnames: "classnames",
        react: "react"
    }],
    100: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("./gr_component_factory"),
            a = o(s),
            i = e("react"),
            l = o(i),
            u = e("classnames"),
            d = o(u),
            c = e("./click_tracking_wrapper"),
            p = o(c),
            f = e("../modules/ads/click_tracking_helper"),
            h = "Learn More";
        r["default"] = a["default"].createClass({
            displayName: "FeaturedContentGenre",
            propTypes: {
                genre: l["default"].PropTypes.shape({
                    imageUrl: l["default"].PropTypes.string.isRequired,
                    genreUrl: l["default"].PropTypes.string.isRequired,
                    tagline: l["default"].PropTypes.string.isRequired
                }).isRequired,
                isMobile: l["default"].PropTypes.bool,
                isInline: l["default"].PropTypes.bool
            },
            defaultProps: {
                isMobile: !1,
                isInline: !1
            },
            renderImage: function() {
                var e = (0, d["default"])("featuredContentImageBody__image", {
                        featuredContentImageBody__imageMobile: this.props.isMobile
                    }),
                    t = (0, d["default"])("featuredContentImageBody__imageLink", {
                        "featuredContentImageBody__imageLink--inline": this.props.isInline
                    });
                if (this.props.genre.imageUrl) {
                    var r = n("a", {
                        className: t,
                        href: this.props.genre.genreUrl
                    }, void 0, n("img", {
                        className: e,
                        src: this.props.genre.imageUrl,
                        alt: "" + this.props.genre.tagline
                    }));
                    return n(p["default"], {
                        trackingOptions: f.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_genre_image,
                        children: r
                    })
                }
                return null
            },
            renderTitle: function() {
                var e = this.props.isMobile ? (0, d["default"])("featuredContentImageBody__title", "featuredContentImageBody__title--mobile") : "featuredContentImageBody__title",
                    t = n("a", {
                        href: this.props.genre.genreUrl,
                        className: e
                    }, void 0, this.props.genre.tagline);
                return n(p["default"], {
                    trackingOptions: f.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_genre_title,
                    children: t
                })
            },
            renderCTAButton: function() {
                var e = (0, d["default"])("gr-button gr-microsite-link", {
                        featuredContentImageBody__button: this.props.isMobile,
                        "u-marginTopMedium": !this.props.isInline
                    }),
                    t = n("a", {
                        href: this.props.genre.genreUrl,
                        className: e
                    }, void 0, h);
                return n(p["default"], {
                    trackingOptions: f.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_genre_button,
                    children: t
                })
            },
            render: function() {
                return this.props.isInline ? n("div", {
                    className: "featuredContentImageBody--inline genreFeatureContainer"
                }, void 0, this.renderImage(), n("div", {}, void 0, this.renderTitle(), this.renderCTAButton())) : n("div", {
                    className: "featuredContentImageBody genreFeatureContainer"
                }, void 0, this.renderTitle(), this.renderImage(), this.props.isMobile ? this.renderCTAButton() : null)
            }
        })
    }, {
        "../modules/ads/click_tracking_helper": 3,
        "./click_tracking_wrapper": 81,
        "./gr_component_factory": 107,
        classnames: "classnames",
        react: "react"
    }],
    101: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            },
            s = function() {
                var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
                return function(t, r, o, n) {
                    var s = t && t.defaultProps,
                        a = arguments.length - 3;
                    if (r || 0 === a || (r = {}), r && s)
                        for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                    else r || (r = s || {});
                    if (1 === a) r.children = n;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                        r.children = l
                    }
                    return {
                        $$typeof: e,
                        type: t,
                        key: void 0 === o ? null : "" + o,
                        ref: null,
                        props: r,
                        _owner: null
                    }
                }
            }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var a = e("./gr_component_factory"),
            i = o(a),
            l = e("./book"),
            u = o(l),
            d = e("react"),
            c = o(d),
            p = e("./time/relative_time"),
            f = o(p),
            h = e("./user_content/expandable_html"),
            m = o(h),
            _ = e("./shared/gr_prop_types"),
            g = o(_),
            v = e("./click_tracking_wrapper"),
            y = o(v),
            b = e("../modules/ads/click_tracking_helper");
        r["default"] = i["default"].createClass({
            displayName: "FeaturedContentGiveaway",
            propTypes: {
                giveaway: c["default"].PropTypes.shape({
                    book: c["default"].PropTypes.object.isRequired,
                    description: g["default"].expandableHtml().isRequired,
                    endAt: c["default"].PropTypes.string.isRequired,
                    giveawayUrl: c["default"].PropTypes.string.isRequired
                }).isRequired,
                isMobile: c["default"].PropTypes.bool
            },
            defaultProps: {
                isMobile: !1
            },
            render: function() {
                var e = this.props.giveaway;
                return s("div", {
                    className: "featuredContentGiveaway"
                }, void 0, c["default"].createElement(u["default"], n({}, e.book, {
                    bookImageTrackingData: b.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_giveaway_image,
                    bookTitleTrackingData: b.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_giveaway_title,
                    authorLinkTrackingData: b.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_giveaway_author,
                    bemModifiers: this.props.isMobile ? "mobile" : ""
                }), c["default"].createElement(m["default"], n({}, e.description, {
                    className: "featuredContentGiveaway__description"
                })), s("div", {
                    className: "featuredContentGiveaway__expiration gr-metaText"
                }, void 0, "Ends ", s(f["default"], {
                    time: e.endAt,
                    longFormat: !0
                })), s(y["default"], {
                    trackingOptions: b.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_giveaway_button
                }, void 0, s("a", {
                    href: e.giveawayUrl,
                    className: "gr-button"
                }, void 0, "Learn more"))))
            }
        })
    }, {
        "../modules/ads/click_tracking_helper": 3,
        "./book": 73,
        "./click_tracking_wrapper": 81,
        "./gr_component_factory": 107,
        "./shared/gr_prop_types": 176,
        "./time/relative_time": 196,
        "./user_content/expandable_html": 200,
        react: "react"
    }],
    102: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("./gr_component_factory"),
            a = o(s),
            i = e("react"),
            l = o(i),
            u = e("lodash"),
            d = e("./click_tracking_wrapper"),
            c = o(d),
            p = e("../modules/ads/click_tracking_helper"),
            f = e("classnames"),
            h = o(f);
        r["default"] = a["default"].createClass({
            displayName: "FeaturedContentList",
            propTypes: {
                list: l["default"].PropTypes.shape({
                    listUrl: l["default"].PropTypes.string.isRequired,
                    title: l["default"].PropTypes.string.isRequired,
                    topBooksCovers: l["default"].PropTypes.array.isRequired
                }).isRequired,
                isMobile: l["default"].PropTypes.bool,
                isInline: l["default"].PropTypes.bool
            },
            defaultProps: {
                isMobile: !1,
                isInline: !1
            },
            renderBookCovers: function() {
                var e = this,
                    t = this.props.isMobile ? "featuredContentList__bookCoverImage--allowOverlap" : "featuredContentList__bookCoverImage--noOverlap",
                    r = (0, h["default"])("featuredContentList__bookCovers", {
                        "featuredContentList__bookCovers--inline": this.props.isInline
                    });
                return n("div", {
                    className: r
                }, void 0, n(c["default"], {
                    trackingOptions: p.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_list_books
                }, void 0, n("a", {
                    href: this.props.list.listUrl
                }, void 0, (0, u.map)(this.props.list.topBooksCovers, function(r) {
                    return n("div", {
                        className: "featuredContentList__bookCoverContainer"
                    }, r, n("img", {
                        src: r,
                        alt: e.props.list.title,
                        className: t
                    }))
                }))))
            },
            renderCTA: function() {
                return this.props.isMobile ? n(c["default"], {
                    trackingOptions: p.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_list_button
                }, void 0, n("a", {
                    className: "gr-button gr-button--fullWidth u-marginBottomSmall u-marginTopSmall",
                    href: this.props.list.listUrl
                }, void 0, "View list")) : null
            },
            render: function() {
                var e = this.props.list,
                    t = (0, h["default"])("featuredContentList", {
                        "featuredContentList--inline": this.props.isInline
                    }),
                    r = (0, h["default"])("u-bold featuredContentList__title", {
                        "featuredContentList__title--inline": this.props.isInline
                    }),
                    o = (0, h["default"])("u-bold featuredContentList__listDetailsContainer", {
                        "featuredContentList__listDetailsContainer--inline": this.props.isInline
                    }),
                    s = (0, h["default"])("u-bold featuredContentList__listDetails", {
                        "featuredContentList__listDetails--inline": this.props.isInline
                    });
                return n("div", {
                    className: t
                }, void 0, this.renderBookCovers(), n(c["default"], {
                    trackingOptions: p.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_list_title
                }, void 0, n("a", {
                    href: e.listUrl,
                    className: r
                }, void 0, e.title)), n("div", {
                    className: o
                }, void 0, n("div", {
                    className: s
                }, void 0, e.numBooks.toLocaleString(), " books · ", e.numVoters.toLocaleString(), " voters")), this.renderCTA())
            }
        })
    }, {
        "../modules/ads/click_tracking_helper": 3,
        "./click_tracking_wrapper": 81,
        "./gr_component_factory": 107,
        classnames: "classnames",
        lodash: "lodash",
        react: "react"
    }],
    103: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("./gr_component_factory"),
            a = o(s),
            i = e("react"),
            l = o(i),
            u = e("./featured_content_blog"),
            d = o(u),
            c = e("./featured_content_book"),
            p = o(c),
            f = e("./featured_content_list"),
            h = o(f),
            m = e("./featured_content_genre"),
            _ = o(m),
            g = e("./featured_content_giveaway"),
            v = o(g),
            y = e("./sponsored_footer"),
            b = o(y),
            k = e("classnames"),
            S = o(k);
        r["default"] = a["default"].createClass({
            displayName: "FeaturedContentModule",
            propTypes: {
                type: l["default"].PropTypes.string.isRequired,
                resource: l["default"].PropTypes.object.isRequired,
                sponsorName: l["default"].PropTypes.string,
                isSponsored: l["default"].PropTypes.bool,
                isMobile: l["default"].PropTypes.bool,
                hasBottomBorder: l["default"].PropTypes.bool,
                isInline: l["default"].PropTypes.bool
            },
            defaultProps: {
                isMobile: !1,
                isInline: !1,
                hasBottomBorder: !1
            },
            headerText: function() {
                switch (this.props.type) {
                    case "Blog":
                        return "Featured Blog Post";
                    case "Book":
                        return "Featured Book";
                    case "Giveaway":
                        return "Featured Giveaway";
                    case "List":
                        return "Featured List";
                    case "Genre":
                        return "Featured Genre";
                    default:
                        return "Featured Content"
                }
            },
            renderContent: function() {
                switch (this.props.type) {
                    case "Blog":
                        return this.renderBlog();
                    case "Book":
                        return this.renderBook();
                    case "Giveaway":
                        return this.renderGiveaway();
                    case "List":
                        return this.renderList();
                    case "Genre":
                        return this.renderGenre();
                    default:
                        return null
                }
            },
            renderHeader: function() {
                if (this.props.isMobile) return n("h3", {
                    className: "gr-h3"
                }, void 0, this.headerText());
                var e = (0, S["default"])("featuredContentModule__header", {
                    "featuredContentModule__header--inline": this.props.isInline
                });
                return n("div", {
                    className: e
                }, void 0, this.headerText())
            },
            renderFooter: function() {
                return this.props.isSponsored ? n(b["default"], {
                    isSponsored: !0,
                    sponsoredName: this.props.sponsorName
                }) : null
            },
            renderBlog: function() {
                return n(d["default"], {
                    blog: this.props.resource,
                    isMobile: this.props.isMobile,
                    isInline: this.props.isInline
                })
            },
            renderBook: function() {
                return n(p["default"], {
                    book: this.props.resource,
                    isMobile: this.props.isMobile,
                    isInline: this.props.isInline
                })
            },
            renderGiveaway: function() {
                return n(v["default"], {
                    giveaway: this.props.resource,
                    isMobile: this.props.isMobile
                })
            },
            renderList: function() {
                return n(h["default"], {
                    list: this.props.resource,
                    isMobile: this.props.isMobile,
                    isInline: this.props.isInline
                })
            },
            renderGenre: function() {
                return n(_["default"], {
                    genre: this.props.resource,
                    isMobile: this.props.isMobile,
                    isInline: this.props.isInline
                })
            },
            render: function() {
                var e = (0, S["default"])("featuredContentModule", {
                        "featuredContentModule--mobile": this.props.isMobile,
                        "featuredContentModule--inline": this.props.isInline
                    }),
                    t = "";
                return this.props.isMobile && (t = this.props.hasBottomBorder ? "featuredContentBorder__underline" : "featuredContentBorder__overline"), n("div", {
                    className: t
                }, void 0, n("section", {
                    className: e
                }, void 0, this.renderHeader(), this.renderContent(), this.renderFooter()))
            }
        })
    }, {
        "./featured_content_blog": 98,
        "./featured_content_book": 99,
        "./featured_content_genre": 100,
        "./featured_content_giveaway": 101,
        "./featured_content_list": 102,
        "./gr_component_factory": 107,
        "./sponsored_footer": 192,
        classnames: "classnames",
        react: "react"
    }],
    104: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("../gr_component_factory"),
            l = o(i),
            u = e("classnames"),
            d = o(u);
        r["default"] = l["default"].createClass({
            displayName: "FlagForAbuseLink",
            propTypes: {
                flagForAbuseUrl: a["default"].PropTypes.string.isRequired
            },
            render: function() {
                var e = (0, d["default"])("gr-metaText", "gr-hyperlink--naked", "gr-hyperlink", "gr-flag");
                return n("a", {
                    href: this.props.flagForAbuseUrl,
                    className: e
                }, void 0, "Flag")
            }
        })
    }, {
        "../gr_component_factory": 107,
        classnames: "classnames",
        react: "react"
    }],
    105: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("lodash"),
            l = e("classnames"),
            u = o(l),
            d = e("./close_button"),
            c = o(d),
            p = {
                ERROR: "error",
                INFO: "info",
                NOTICE_DEPRECATED: "notice",
                SUCCESS: "success",
                WARNING: "warning"
            };
        r["default"] = a["default"].createClass({
            displayName: "FlashMessage",
            propTypes: {
                category: a["default"].PropTypes.oneOf((0, i.values)(p)),
                message: a["default"].PropTypes.string.isRequired
            },
            getInitialState: function() {
                return {
                    isVisible: !0
                }
            },
            hideMessage: function() {
                this.setState({
                    isVisible: !1
                })
            },
            flashMessageMarkup: function() {
                return {
                    __html: this.props.message
                }
            },
            render: function() {
                if ((0, i.isEmpty)(this.props.message)) return null;
                var e = (0, u["default"])("gr-flashMessage", {
                    "gr-flashMessage--dismissed": !this.state.isVisible,
                    "gr-flashMessage--error": this.props.category === p.ERROR,
                    "gr-flashMessage--info": this.props.category === p.INFO,
                    "gr-flashMessage--warning": this.props.category === p.WARNING,
                    "gr-flashMessage--success": this.props.category === p.SUCCESS
                });
                return n("div", {
                    className: e,
                    role: "alert"
                }, void 0, n(c["default"], {
                    action: this.hideMessage,
                    className: "gr-flashMessage__dismissButton"
                }), n("span", {
                    dangerouslySetInnerHTML: this.flashMessageMarkup()
                }))
            }
        })
    }, {
        "./close_button": 82,
        classnames: "classnames",
        lodash: "lodash",
        react: "react"
    }],
    106: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("./gr_component_factory"),
            l = o(i),
            u = e("classnames"),
            d = o(u),
            c = e("../react_actions/favorite_genres_form_actions"),
            p = o(c);
        r["default"] = l["default"].createClass({
            displayName: "GenreCheckbox",
            propTypes: {
                genre: a["default"].PropTypes.string,
                isFavorited: a["default"].PropTypes.bool.isRequired
            },
            onCheckboxChange: function() {
                this.props.isFavorited ? p["default"].deselectFavoriteGenre(this.props.genre) : p["default"].selectFavoriteGenre(this.props.genre)
            },
            render: function() {
                var e = (0, d["default"])("gr-genresForm__genreLabel", {
                    "gr-genresForm__genreLabel--selected": this.props.isFavorited
                });
                return n("label", {
                    className: e
                }, void 0, n("input", {
                    name: "favorites[" + this.props.genre + "]",
                    type: "hidden",
                    value: "false"
                }), a["default"].createElement("input", {
                    name: "favorites[" + this.props.genre + "]",
                    type: "checkbox",
                    value: "true",
                    "data-genre": this.props.genre,
                    ref: "checkbox",
                    defaultChecked: this.props.isFavorited,
                    onChange: this.onCheckboxChange
                }), n("span", {
                    className: "u-verticalAlignMiddle u-marginLeftTiny"
                }, void 0, this.props.genre))
            }
        })
    }, {
        "../react_actions/favorite_genres_form_actions": 33,
        "./gr_component_factory": 107,
        classnames: "classnames",
        react: "react"
    }],
    107: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("lodash"),
            a = e("react"),
            i = o(a),
            l = e("../react_mixins/bem_modifiers"),
            u = o(l),
            d = e("../react_mixins/deploy_service"),
            c = o(d),
            p = e("react-addons-pure-render-mixin"),
            f = o(p),
            h = e("../react_mixins/tracking_data_attributes_mixin"),
            m = o(h),
            _ = e("./error_message"),
            g = o(_),
            v = e("../modules/env_utils"),
            y = o(v),
            b = e("../modules/gr_error_reporting"),
            k = o(b),
            S = [f["default"], u["default"], c["default"], m["default"]],
            P = {
                showErrorMessage: "production" === y["default"].DEVELOPMENT
            },
            T = function(e, t) {
                var r = e.render;
                t = (0, s.merge)({}, P, t), e.render = function() {
                    try {
                        return r.apply(this, arguments)
                    } catch (o) {
                        return k["default"].notifyException(o, "Failed to render " + e.displayName), t.showErrorMessage ? n(g["default"], {
                            componentName: e.displayName
                        }) : null
                    }
                }
            },
            w = function(e) {
                if ((0, s.isEmpty)(e)) throw new Error("GrError: Missing component name. Please make sure `displayName` attribute is defined while creating a React class using GrComponentFactory.createClass.")
            },
            N = function(e) {
                var t = e.mixins || [];
                e.mixins = t.concat(S)
            },
            R = function(e, t) {
                return N(e), "production" !== y["default"].TEST && T(e, t), e
            };
        r["default"] = {
            createClass: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                return w(e.displayName), i["default"].createClass(R(e, t))
            }
        }
    }, {
        "../modules/env_utils": 13,
        "../modules/gr_error_reporting": 15,
        "../react_mixins/bem_modifiers": 228,
        "../react_mixins/deploy_service": 229,
        "../react_mixins/tracking_data_attributes_mixin": 233,
        "./error_message": 91,
        lodash: "lodash",
        react: "react",
        "react-addons-pure-render-mixin": "react-addons-pure-render-mixin"
    }],
    108: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("../gr_component_factory"),
            l = o(i),
            u = e("../shape_icon"),
            d = o(u),
            c = e("../../modules/shape_icon_values");
        r["default"] = l["default"].createClass({
            displayName: "GroupIcon",
            propTypes: {
                group: a["default"].PropTypes.shape({
                    name: a["default"].PropTypes.string.isRequired,
                    iconUrl: a["default"].PropTypes.string.isRequired,
                    url: a["default"].PropTypes.string.isRequired
                }).isRequired,
                includeLink: a["default"].PropTypes.bool,
                size: a["default"].PropTypes.oneOf([c.ICON_SIZES.SMALL, c.ICON_SIZES.MEDIUM, c.ICON_SIZES.LARGE])
            },
            getDefaultProps: function() {
                return {
                    includeLink: !1,
                    size: c.ICON_SIZES.SMALL
                }
            },
            render: function() {
                var e = this.props.group;
                return n(d["default"], {
                    imageUrl: e.iconUrl,
                    imageAlt: e.name,
                    linkUrl: e.url,
                    shape: c.ICON_SHAPES.ROUND_SQUARE,
                    size: this.props.size,
                    includeLink: this.props.includeLink
                })
            }
        })
    }, {
        "../../modules/shape_icon_values": 19,
        "../gr_component_factory": 107,
        "../shape_icon": 171,
        react: "react"
    }],
    109: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("../gr_component_factory"),
            l = o(i),
            u = e("../modal_trigger"),
            d = o(u),
            c = e("../modal"),
            p = o(c),
            f = e("../spinner"),
            h = o(f),
            m = e("../../modules/ajax/ajax_helper");
        r["default"] = l["default"].createClass({
            displayName: "PreviewBroadcast",
            propTypes: {
                previewBroadcastURL: a["default"].PropTypes.string.isRequired
            },
            getInitialState: function() {
                return {
                    fetching: !1
                }
            },
            requestPreview: function(e, t) {
                var r = this;
                (0, m.httpRequest)(this.props.previewBroadcastURL, {
                    method: "GET",
                    data: {
                        message: {
                            subject: e,
                            body: t
                        }
                    }
                }).done(function(e) {
                    r.setState({
                        modalHTML: {
                            __html: e
                        },
                        fetching: !1
                    })
                }).fail(function() {
                    r.setState({
                        modalHTML: {
                            __html: "<div>There was an error processing your request.</div>"
                        },
                        fetching: !1
                    })
                })
            },
            handlePreview: function() {
                var e = this,
                    t = document.getElementById("message_body").value,
                    r = document.getElementById("message_subject").value;
                this.setState({
                    fetching: !0
                }, function() {
                    return e.requestPreview(r, t)
                })
            },
            renderModal: function() {
                return this.state.fetching ? null : n(p["default"], {
                    id: "previewBroadcast",
                    centered: !0,
                    bemModifiers: "previewBroadcast"
                }, void 0, n("div", {
                    className: "modalMessageBox"
                }, void 0, n("h3", {
                    className: "modalMessageBox__headerText"
                }, void 0, "Message Preview"), n("div", {
                    dangerouslySetInnerHTML: this.state.modalHTML
                })))
            },
            renderModalTrigger: function() {
                return this.state.fetching ? n(h["default"], {
                    isSmall: !0
                }) : n(d["default"], {
                    id: "previewBroadcast"
                }, void 0, n("button", {
                    className: "gr-buttonAsLink previewBroadcast__linkText",
                    onClick: this.handlePreview
                }, void 0, "(preview)"))
            },
            render: function() {
                var e = this.renderModal(),
                    t = this.renderModalTrigger();
                return n("div", {
                    className: "previewBroadcast"
                }, void 0, n("div", {
                    className: "previewBroadcast__openPreviewContainer"
                }, void 0, t, e))
            }
        })
    }, {
        "../../modules/ajax/ajax_helper": 5,
        "../gr_component_factory": 107,
        "../modal": 145,
        "../modal_trigger": 146,
        "../spinner": 191,
        react: "react"
    }],
    110: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.BrowseMenu = void 0;
        var s = e("react"),
            a = e("lodash"),
            i = e("./favorite_genres_pane"),
            l = o(i),
            u = e("./featured_genres"),
            d = o(u),
            c = e("./genre_list"),
            p = o(c),
            f = e("../menu_link"),
            h = o(f),
            m = e("./primary_nav_menu"),
            _ = o(m),
            g = e("../../react_actions/featured_genres_actions"),
            v = o(g),
            y = function(e) {
                var t = e.signedIn,
                    r = e.favoriteGenres,
                    o = e.genres,
                    s = function(e) {
                        return "siteHeader__spotlight siteHeader__spotlight--" + e
                    };
                return t ? (0, a.isEmpty)(r) ? n("div", {
                    className: s("withoutSubMenu")
                }, void 0, n(l["default"], {
                    genres: o
                })) : n("div", {
                    className: s("browseMenu")
                }, void 0, n(d["default"], {
                    favoriteGenres: r
                })) : n("div", {
                    className: s("withoutSubMenu")
                }, void 0, n(p["default"], {
                    genres: o
                }))
            };
        y.propTypes = {
            signedIn: s.PropTypes.bool,
            favoriteGenres: s.PropTypes.array,
            genres: s.PropTypes.array.isRequired
        };
        var b = r.BrowseMenu = function(e) {
            return n(_["default"], {
                tabName: "siteHeaderBrowseMenu",
                trigger: n("span", {}, void 0, "Browse ▾"),
                fallbackUrl: e.browseUrl,
                bemModifiers: ["siteHeaderBrowseMenu"],
                onShowCallback: function() {
                    v["default"].trackMenuImpression(), v["default"].requestFeaturedBooks()
                }
            }, void 0, n("div", {
                className: "siteHeader__browseMenuDropdown"
            }, void 0, n("ul", {
                className: "siteHeader__subNav"
            }, void 0, n(h["default"], {
                href: e.recommendationsUrl,
                linkText: "Recommendations",
                linkClass: "siteHeader__subNavLink"
            }), n(h["default"], {
                href: e.choiceAwardsUrl,
                linkText: "Choice Awards",
                linkClass: "siteHeader__subNavLink"
            }), n(h["default"], {
                href: e.genresIndexUrl,
                linkText: "Genres",
                linkClass: "siteHeader__subNavLink siteHeader__subNavLink--genresIndex"
            }), n(h["default"], {
                href: e.giveawayUrl,
                linkText: "Giveaways",
                linkClass: "siteHeader__subNavLink"
            }), n(h["default"], {
                href: e.newReleasesUrl,
                linkText: "New Releases",
                linkClass: "siteHeader__subNavLink"
            }), n(h["default"], {
                href: e.listUrl,
                linkText: "Lists",
                linkClass: "siteHeader__subNavLink"
            }), n(h["default"], {
                href: e.browseUrl,
                linkText: "Explore",
                linkClass: "siteHeader__subNavLink"
            }), n(h["default"], {
                href: e.newsUrl,
                linkText: "News & Interviews",
                linkClass: "siteHeader__subNavLink"
            }), n("div", {
                className: "siteHeader__sponsoredFillSpace"
            }), n(h["default"], {
                href: "https://www.goodreads.com/track/daily_click?pmet_click_tid=AEP_Header_BrowseMenu_TrafficDriver_Click&tid=AEP_Desktop_Header_BrowseEntrypoint&url=https://www.goodreads.com/audible",
                linkText: n("div", {}, void 0, n("div", {
                    className: "siteHeader__navDivider"
                }), n("span", {}, void 0, "Listen with Audible")),
                linkClass: "siteHeader__sponsoredNavLink"
            }), n("div", {
                className: "siteHeader__sponsoredLabel"
            }, void 0, n("span", {
                className: "siteHeader__sponsoredIcon googleNativeAd__sponsoredBadgeIcon featuredGenres__sponsoredIcon"
            }), n("span", {
                className: "featuredGenres__sponsoredLabel siteHeader__sponsoredText"
            }, void 0, "Sponsored"))), React.createElement(y, e)))
        };
        b.propTypes = {
            adId: s.PropTypes.string,
            browseUrl: s.PropTypes.string.isRequired,
            choiceAwardsUrl: s.PropTypes.string.isRequired,
            genresIndexUrl: s.PropTypes.string.isRequired,
            giveawayUrl: s.PropTypes.string.isRequired,
            listUrl: s.PropTypes.string.isRequired,
            newReleasesUrl: s.PropTypes.string.isRequired,
            recommendationsUrl: s.PropTypes.string.isRequired,
            newsUrl: s.PropTypes.string.isRequired
        }, r["default"] = b
    }, {
        "../../react_actions/featured_genres_actions": 34,
        "../menu_link": 144,
        "./favorite_genres_pane": 115,
        "./featured_genres": 116,
        "./genre_list": 119,
        "./primary_nav_menu": 129,
        lodash: "lodash",
        react: "react"
    }],
    111: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("reflux"),
            l = (o(i), e("../gr_component_factory")),
            u = o(l),
            d = e("../menu_link"),
            c = o(d),
            p = e("./primary_nav_menu"),
            f = o(p);
        r["default"] = u["default"].createClass({
            displayName: "CommunityMenu",
            propTypes: {
                communityUrl: a["default"].PropTypes.string.isRequired,
                featuredAskAuthorUrl: a["default"].PropTypes.string.isRequired,
                groupsUrl: a["default"].PropTypes.string.isRequired,
                discussionsUrl: a["default"].PropTypes.string.isRequired,
                quotesUrl: a["default"].PropTypes.string.isRequired,
                eventUrl: a["default"].PropTypes.string,
                peopleUrl: a["default"].PropTypes.string,
                quizzesUrl: a["default"].PropTypes.string,
                storiesUrl: a["default"].PropTypes.string,
                triviaUrl: a["default"].PropTypes.string
            },
            renderMenuLink: function(e, t) {
                return e ? n(c["default"], {
                    href: e,
                    linkText: t,
                    linkClass: "siteHeader__subNavLink"
                }) : null
            },
            render: function() {
                var e = n("span", {}, void 0, "Community ▾");
                return n(f["default"], {
                    tabName: "siteHeaderCommunityMenu",
                    trigger: e,
                    fallbackUrl: this.props.communityUrl
                }, void 0, n("ul", {
                    className: "siteHeader__subNav"
                }, void 0, this.renderMenuLink(this.props.groupsUrl, "Groups"), this.renderMenuLink(this.props.discussionsUrl, "Discussions"), this.renderMenuLink(this.props.quotesUrl, "Quotes"), this.renderMenuLink(this.props.featuredAskAuthorUrl, "Ask the Author"), this.renderMenuLink(this.props.triviaUrl, "Trivia"), this.renderMenuLink(this.props.quizzesUrl, "Quizzes"), this.renderMenuLink(this.props.storiesUrl, "Creative Writing"), this.renderMenuLink(this.props.peopleUrl, "People"), this.renderMenuLink(this.props.eventUrl, "Events")))
            }
        })
    }, {
        "../gr_component_factory": 107,
        "../menu_link": 144,
        "./primary_nav_menu": 129,
        react: "react",
        reflux: "reflux"
    }],
    112: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("../../gr_component_factory"),
            a = o(s),
            i = e("../../shared/gr_prop_types"),
            l = o(i),
            u = e("append-query"),
            d = o(u),
            c = e("../../../modules/shape_icon_values"),
            p = e("../../time/relative_time"),
            f = o(p),
            h = e("../../group/group_icon"),
            m = o(h),
            _ = e("../../../analytics/url_tracking_params");
        r["default"] = a["default"].createClass({
            displayName: "DiscussionsGroupBanner",
            propTypes: {
                group: l["default"].group()
            },
            render: function() {
                var e = this.props.group;
                return n("a", {
                    href: (0, d["default"])(e.url, {
                        ref: _.URLTrackingParams.DISCUSSIONS_PANE_GROUP
                    }),
                    "aria-label": "Visit your group " + this.props.group.name,
                    className: "gr-hyperlink\n                          gr-hyperlink--naked\n                          gr-hyperlink--noUnderline"
                }, void 0, n("div", {
                    className: "gr-mediaFlexbox\n                              gr-mediaFlexbox--alignItemsCenter\n                              gr-headerDiscussions__groupBanner"
                }, void 0, n("div", {
                    className: "gr-mediaFlexbox__media"
                }, void 0, n(m["default"], {
                    group: e,
                    size: c.ICON_SIZES.SMALL
                })), n("div", {
                    className: "gr-mediaFlexbox__desc"
                }, void 0, n("div", {
                    className: "gr-headerDiscussions__groupTitle"
                }, void 0, e.name), n("small", {}, void 0, "Active ", n(f["default"], {
                    time: e.lastActiveAt,
                    longFormat: !0
                })))))
            }
        })
    }, {
        "../../../analytics/url_tracking_params": 2,
        "../../../modules/shape_icon_values": 19,
        "../../gr_component_factory": 107,
        "../../group/group_icon": 108,
        "../../shared/gr_prop_types": 176,
        "../../time/relative_time": 196,
        "append-query": "append-query"
    }],
    113: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("../../gr_component_factory"),
            a = o(s),
            i = e("../../shared/gr_prop_types"),
            l = o(i),
            u = e("append-query"),
            d = o(u),
            c = e("moment"),
            p = o(c),
            f = e("../../time/relative_time"),
            h = o(f),
            m = e("../../dot_separated_elements"),
            _ = o(m),
            g = e("../../../analytics/url_tracking_params");
        r["default"] = a["default"].createClass({
            displayName: "DiscussionsTopic",
            propTypes: {
                topic: l["default"].topic()
            },
            getTitleAriaLabel: function() {
                var e = void 0;
                return e = this.props.topic.newPosts ? "New comments in topic " + this.props.topic.title : "Topic " + this.props.topic.title, e += this.props.topic.folder ? " in folder " + this.props.topic.folder.name + "." : ".", e += " " + (0, p["default"])(this.props.topic.updatedAt).fromNow() + ".", this.props.topic.newPosts && (e += " " + this.props.topic.newPosts + "."), e
            },
            getTopicUrl: function() {
                var e = this.props.topic.newCommentsUrl ? this.props.topic.newCommentsUrl : this.props.topic.url;
                return (0, d["default"])(e, {
                    ref: g.URLTrackingParams.DISCUSSIONS_PANE_DISCUSSION
                })
            },
            renderFolder: function() {
                return this.props.topic.folder ? n("span", {
                    className: "gr-headerDiscussions__topicFolderTitle"
                }, void 0, "in ", this.props.topic.folder.name) : null
            },
            renderPosts: function() {
                return this.props.topic.newPosts ? n("div", {
                    className: "gr-smallAlert"
                }, void 0, this.props.topic.newPosts) : n("small", {}, void 0, this.props.topic.totalPosts)
            },
            render: function() {
                var e = this.props.topic,
                    t = [this.renderPosts(), n("small", {}, void 0, n(h["default"], {
                        time: e.updatedAt,
                        longFormat: !0
                    }))];
                return n("a", {
                    className: "gr-headerDiscussions__topic\n                         gr-hyperlink\n                         gr-hyperlink--noUnderline",
                    href: this.getTopicUrl(),
                    "aria-label": this.getTitleAriaLabel()
                }, void 0, n("span", {
                    className: "gr-headerDiscussions__topicTitle"
                }, void 0, e.title), " ", this.renderFolder(), n("div", {
                    className: "gr-headerDiscussions__posts"
                }, void 0, n(_["default"], {
                    elements: t,
                    separator: n("small", {
                        className: "u-marginLeftTiny u-marginRightTiny"
                    }, void 0, "·")
                })))
            }
        })
    }, {
        "../../../analytics/url_tracking_params": 2,
        "../../dot_separated_elements": 88,
        "../../gr_component_factory": 107,
        "../../shared/gr_prop_types": 176,
        "../../time/relative_time": 196,
        "append-query": "append-query",
        moment: "moment"
    }],
    114: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = e("reflux"),
            i = o(a),
            l = e("lodash"),
            u = e("append-query"),
            d = o(u),
            c = e("../gr_component_factory"),
            p = o(c),
            f = e("../dropdown"),
            h = o(f),
            m = e("../../react_actions/discussions_pane_actions"),
            _ = o(m),
            g = e("../../react_stores/group_store"),
            v = o(g),
            y = e("./discussions/group_banner"),
            b = o(y),
            k = e("./discussions/topic"),
            S = o(k),
            P = e("../spinner"),
            T = o(P),
            w = e("../shape_icon"),
            N = o(w),
            R = e("../../analytics/url_tracking_params");
        r["default"] = p["default"].createClass({
            mixins: [i["default"].connect(v["default"], "groupStore")],
            displayName: "DiscussionsPane",
            propTypes: {
                discussionsUrl: s.PropTypes.string.isRequired,
                groupsUrl: s.PropTypes.string.isRequired
            },
            getGroupState: function() {
                return this.state.groupStore
            },
            renderAllUnreadPostsLink: function(e) {
                var t = "All unread posts in group " + e.name;
                return n("a", {
                    className: "gr-headerDiscussions__moreDiscussionsLink gr-hyperlink u-textAlignCenter",
                    "aria-label": t,
                    href: (0, d["default"])(e.allUnreadPostsUrl, {
                        ref: R.URLTrackingParams.DISCUSSIONS_PANE_GROUP_ALL_UNREAD_POSTS
                    })
                }, void 0, "All unread posts")
            },
            renderDiscussionsList: function() {
                var e = this;
                return (0, l.map)(this.getGroupState().groups, function(t) {
                    return n("div", {}, "discussionsGroup" + t.group.id, n(b["default"], {
                        group: t.group
                    }), (0, l.map)(t.topics, function(e) {
                        return n(S["default"], {
                            topic: e
                        }, "discussionsTopic" + e.id)
                    }), e.renderAllUnreadPostsLink(t.group))
                })
            },
            renderSparseState: function() {
                var e = this.getGroupState().sparse;
                return n("div", {
                    className: "gr-headerDiscussions u-defaultType"
                }, void 0, n("h3", {
                    className: "siteHeader__heading siteHeader__dropdownHeading"
                }, void 0, "Group Discussions"), n("div", {}, void 0, n("div", {
                    className: "gr-headerDiscussions__sparseBody"
                }, void 0, n("div", {
                    className: "gr-headerDiscussions__groupsExplanation"
                }, void 0, "Want to connect with readers who love the same books as you? Goodreads has a group for almost any interest."), n("div", {
                    className: "gr-mediaFlexbox gr-headerDiscussions__testimonial"
                }, void 0, n("div", {
                    className: "gr-mediaFlexbox__media"
                }, void 0, n(N["default"], {
                    imageUrl: e.groupModeratorImageUrl,
                    imageAlt: "Moderator of a book group"
                })), n("div", {
                    className: "gr-mediaFlexbox__desc"
                }, void 0, n("div", {
                    className: "gr-headerDiscussions__testimonialQuote"
                }, void 0, '"I\'ve been reading more since I became involved with groups. I especially love reading challenges…"'), n("div", {
                    className: "gr-headerDiscussions__testimonialQuoteAttribution"
                }, void 0, "—Moderator of a book group"), n("a", {
                    className: "gr-hyperlink",
                    href: (0, d["default"])(e.groupsWithReadingChallengesUrl, {
                        ref: R.URLTrackingParams.DISCUSSIONS_PANE_SPARSE_READING_CHALLENGES
                    })
                }, void 0, "See groups with reading challenges"))), n("div", {
                    className: "gr-mediaFlexbox gr-headerDiscussions__testimonial"
                }, void 0, n(N["default"], {
                    className: "gr-mediaFlexbox__media",
                    imageUrl: e.groupMemberImageUrl,
                    imageAlt: "Member of a group"
                }), n("div", {
                    className: "gr-mediaFlexbox__desc"
                }, void 0, n("div", {
                    className: "gr-headerDiscussions__testimonialQuote"
                }, void 0, '"When I first joined a group, I finally felt like I had friends interested in the same books as me."'), n("div", {
                    className: "gr-headerDiscussions__testimonialQuoteAttribution"
                }, void 0, "—Member of a group"), n("a", {
                    className: "gr-hyperlink",
                    href: (0, d["default"])(e.popularGroupsUrl, {
                        ref: R.URLTrackingParams.DISCUSSIONS_PANE_SPARSE_POPULAR
                    })
                }, void 0, "See popular groups"))))), n("div", {
                    className: "u-topGrayBorder gr-headerDiscussions__moreDiscussionsLink u-textAlignCenter u-marginTopSmall"
                }, void 0, n("a", {
                    className: "gr-hyperlink",
                    href: (0, d["default"])(e.allGroupsUrl, {
                        ref: R.URLTrackingParams.DISCUSSIONS_PANE_SPARSE_ALL
                    })
                }, void 0, "View all groups")))
            },
            renderPaneContents: function() {
                var e = this.getGroupState();
                return e.errorMessage ? n("div", {
                    className: "dropdown__container\n                             gr-headerDiscussions\n                             u-paddingTopBottomXSmall\n                             u-textAlignCenter"
                }, void 0, e.errorMessage) : e.sparse ? this.renderSparseState() : (0, l.isEmpty)(e.groups) ? n("div", {
                    className: "dropdown__container\n                             gr-headerDiscussions\n                             u-paddingTopBottomXSmall\n                             u-textAlignCenter"
                }, void 0, n(T["default"], {})) : n("section", {
                    className: "dropdown__container"
                }, void 0, n("div", {
                    className: "siteHeader__dropdownHeading"
                }, void 0, n("h3", {
                    className: "siteHeader__heading siteHeader__dropdownHeader"
                }, void 0, "Group Discussions"), n("a", {
                    className: "u-displayBlock gr-hyperlink",
                    href: (0, d["default"])(this.props.discussionsUrl, {
                        discussion_filter: "groups",
                        ref: R.URLTrackingParams.DISCUSSIONS_PANE_ALL_DISCUSSIONS
                    })
                }, void 0, "View all group discussions")), n("div", {
                    className: "gr-headerDiscussions gr-box gr-box--forceScrollBar"
                }, void 0, this.renderDiscussionsList()))
            },
            render: function() {
                var e = n("span", {
                    className: "headerPersonalNav__icon\n                       headerPersonalNav__icon--discussions",
                    "aria-label": "My group discussions"
                });
                return n(h["default"], {
                    trigger: e,
                    triggerEventType: h["default"].TriggerEventTypes.CLICK,
                    fallbackUrl: this.getGroupState().sparse ? this.props.groupsUrl : (0, d["default"])(this.props.discussionsUrl, {
                        discussion_filter: "groups"
                    }),
                    tooltipText: "My group discussions",
                    bemModifiers: "discussions",
                    isInPersonalNav: "true",
                    onShowCallback: _["default"].openPane
                }, void 0, this.renderPaneContents())
            }
        })
    }, {
        "../../analytics/url_tracking_params": 2,
        "../../react_actions/discussions_pane_actions": 30,
        "../../react_stores/group_store": 246,
        "../dropdown": 90,
        "../gr_component_factory": 107,
        "../shape_icon": 171,
        "../spinner": 191,
        "./discussions/group_banner": 112,
        "./discussions/topic": 113,
        "append-query": "append-query",
        lodash: "lodash",
        react: "react",
        reflux: "reflux"
    }],
    115: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("../gr_component_factory"),
            l = o(i),
            u = e("../modal_trigger"),
            d = o(u);
        r["default"] = l["default"].createClass({
            displayName: "FavoriteGenresPane",
            propTypes: {
                favoriteGenres: a["default"].PropTypes.array,
                genres: a["default"].PropTypes.array.isRequired
            },
            render: function() {
                return n("div", {
                    className: "favoriteGenresPane"
                }, void 0, n("div", {
                    className: "favoriteGenresPane__title"
                }, void 0, "What do you like to read?"), n("div", {
                    className: "favoriteGenresPane__description"
                }, void 0, "Choose your favorite genres to get personalized book recommendations."), n("div", {
                    className: "favoriteGenresPane__buttonContainer"
                }, void 0, n(d["default"], {
                    id: "favGenres"
                }, void 0, n("button", {
                    className: "gr-button gr-button--dark"
                }, void 0, "Choose Favorite Genres"))), n("a", {
                    href: "/genres",
                    className: "favoriteGenresPane__browseGenres"
                }, void 0, "Browse Genres"))
            }
        })
    }, {
        "../gr_component_factory": 107,
        "../modal_trigger": 146,
        react: "react"
    }],
    116: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("lodash"),
            a = o(s),
            i = e("reflux"),
            l = o(i),
            u = e("../gr_component_factory"),
            d = o(u),
            c = e("./featured_genres_book"),
            p = o(c),
            f = e("./featured_genres_list"),
            h = o(f),
            m = e("../spinner"),
            _ = o(m),
            g = e("../../react_stores/featured_genres_store"),
            v = o(g),
            y = e("../../react_stores/user_agent_capabilities_store"),
            b = o(y),
            k = e("./../tab_content");
        o(k);
        r["default"] = d["default"].createClass({
            displayName: "FeaturedGenres",
            mixins: [l["default"].connect(v["default"], "featuredGenres"), l["default"].connect(b["default"], "userAgentCapabilities")],
            renderBooks: function() {
                if (this.state.userAgentCapabilities.touch === !0) {
                    var e = this.state.featuredGenres.featuredGenreBookInfo[0];
                    return n("div", {
                        className: "featuredGenres__genreSpotlight"
                    }, e.genre.name, n(p["default"], {
                        book: e.book,
                        genre: e.genre,
                        alwaysShown: !0
                    }))
                }
                return a["default"].map(this.state.featuredGenres.featuredGenreBookInfo, function(e) {
                    return n("div", {
                        className: "featuredGenres__genreSpotlight"
                    }, e.genre.name, n(p["default"], {
                        book: e.book,
                        genre: e.genre
                    }))
                })
            },
            render: function() {
                window.innerWidth;
                return this.state.featuredGenres.featuredGenreBookInfo ? n("div", {
                    className: "featuredGenres"
                }, void 0, n("span", {
                    className: "featuredGenres__genreList"
                }, void 0, n(h["default"], {
                    genres: a["default"].pluck(this.state.featuredGenres.featuredGenreBookInfo, "genre")
                })), this.renderBooks()) : this.state.featuredGenres.errorMessage ? n("span", {}, void 0, this.state.featuredGenres.errorMessage) : n("div", {
                    className: "featuredGenres featuredGenres--sparse"
                }, void 0, n(_["default"], {}))
            }
        })
    }, {
        "../../react_stores/featured_genres_store": 244,
        "../../react_stores/user_agent_capabilities_store": 257,
        "../gr_component_factory": 107,
        "../spinner": 191,
        "./../tab_content": 195,
        "./featured_genres_book": 117,
        "./featured_genres_list": 118,
        lodash: "lodash",
        reflux: "reflux"
    }],
    117: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            },
            s = function() {
                var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
                return function(t, r, o, n) {
                    var s = t && t.defaultProps,
                        a = arguments.length - 3;
                    if (r || 0 === a || (r = {}), r && s)
                        for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                    else r || (r = s || {});
                    if (1 === a) r.children = n;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                        r.children = l
                    }
                    return {
                        $$typeof: e,
                        type: t,
                        key: void 0 === o ? null : "" + o,
                        ref: null,
                        props: r,
                        _owner: null
                    }
                }
            }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var a = e("react"),
            i = o(a),
            l = e("../gr_component_factory"),
            u = o(l),
            d = e("../shared/gr_prop_types"),
            c = o(d),
            p = e("./../book"),
            f = o(p),
            h = e("./../community_rating"),
            m = o(h),
            _ = e("./../tab_content"),
            g = o(_),
            v = e("./../user_content/truncated_html"),
            y = o(v),
            b = e("../want_to_read/want_to_read_button"),
            k = o(b),
            S = e("lodash"),
            P = e("../../analytics/origins");
        r["default"] = u["default"].createClass({
            displayName: "FeaturedGenresBook",
            propTypes: {
                alwaysShown: i["default"].PropTypes.bool,
                genre: i["default"].PropTypes.shape({
                    name: i["default"].PropTypes.string.isRequired,
                    url: i["default"].PropTypes.string.isRequired
                }).isRequired,
                book: c["default"].book().isRequired
            },
            renderBookDescription: function() {
                return (0, S.isUndefined)(this.props.book.description) ? null : s("div", {
                    className: "featuredGenres__bookDescription"
                }, void 0, i["default"].createElement(y["default"], this.props.book.description))
            },
            renderBook: function() {
                var e = this.props.genre;
                return s("div", {
                    className: "featuredGenres__book"
                }, void 0, s("div", {
                    className: "siteHeader__heading siteHeader__title siteHeader__title--secondary"
                }, void 0, "Among Most Read This Week in " + e.name), s("div", {
                    className: "u-marginTopSmall"
                }, void 0, i["default"].createElement(f["default"], n({}, this.props.book, {
                    key: this.props.book.bookId,
                    size: p.VALID_BOOK_SIZES.LARGE
                }), s(m["default"], {
                    rating: parseFloat(this.props.book.avgRating),
                    displayAvg: !0
                }), s("div", {
                    className: "featuredGenres__bookWantToReadButton"
                }, void 0, s(k["default"], {
                    bookTitle: this.props.book.title,
                    uniqueId: (0, S.random)(1e6).toString(),
                    bookId: this.props.book.bookId,
                    origin: P.ShelvedBookOrigin.BROWSE_SPOTLIGHT,
                    showMenu: !1
                })), this.renderBookDescription())), s("a", {
                    href: e.url,
                    className: "u-defaultType gr-hyperlink"
                }, void 0, "More in " + e.name))
            },
            render: function() {
                return this.props.alwaysShown === !0 ? this.renderBook() : s(g["default"], {
                    group: "featuredGenres",
                    name: "featuredGenre-" + this.props.genre.name
                }, void 0, this.renderBook())
            }
        })
    }, {
        "../../analytics/origins": 1,
        "../gr_component_factory": 107,
        "../shared/gr_prop_types": 176,
        "../want_to_read/want_to_read_button": 214,
        "./../book": 73,
        "./../community_rating": 87,
        "./../tab_content": 195,
        "./../user_content/truncated_html": 204,
        lodash: "lodash",
        react: "react"
    }],
    118: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("classnames"),
            a = o(s),
            i = e("reflux"),
            l = o(i),
            u = e("react"),
            d = o(u),
            c = e("lodash"),
            p = e("../dropdown"),
            f = o(p),
            h = e("../gr_component_factory"),
            m = o(h),
            _ = e("./../tab"),
            g = o(_),
            v = e("../../react_stores/user_agent_capabilities_store"),
            y = o(v),
            b = 8;
        r["default"] = m["default"].createClass({
            displayName: "FeaturedGenresList",
            mixins: [l["default"].connect(y["default"], "userAgentCapabilities")],
            propTypes: {
                adId: d["default"].PropTypes.string,
                genres: d["default"].PropTypes.array.isRequired
            },
            onClick: function(e) {
                e.preventDefault()
            },
            allGenresLink: function() {
                return n("li", {
                    role: "menuitem",
                    className: "genreList__genre"
                }, "allGenres", n("a", {
                    href: "/genres",
                    className: "siteHeader__subNavLink"
                }, void 0, "All Genres"))
            },
            renderGenreLink: function(e, t) {
                var r = (0, a["default"])(["genreList__genreLink", "gr-hyperlink", "gr-hyperlink--naked"]),
                    o = n("a", {
                        href: e.url,
                        className: r
                    }, void 0, e.name);
                return this.state.userAgentCapabilities.touch === !0 ? o : n(g["default"], {
                    group: "featuredGenres",
                    name: "featuredGenre-" + e.name,
                    triggerEventType: f["default"].TriggerEventTypes.HOVER,
                    initiallySelected: t
                }, void 0, o)
            },
            renderFavoritesList: function() {
                var e = this,
                    t = (0, c.random)(0, this.props.genres.length - 1),
                    r = b;
                return n("div", {
                    className: "featuredGenres__list genreList genreList--sidebar"
                }, void 0, n("div", {
                    className: "siteHeader__title siteHeader__heading"
                }, void 0, n("span", {
                    className: "featuredGenres__listTitle"
                }, void 0, "Favorite Genres")), n("ul", {}, void 0, (0, c.map)((0, c.take)(this.props.genres, r), function(r, o) {
                    return n("li", {
                        role: "menuitem",
                        className: "genreList__genre"
                    }, r.name, e.renderGenreLink(r, e.props.showSponsoredGenres ? !1 : o === t))
                }), this.allGenresLink()))
            },
            render: function() {
                return n("div", {}, void 0, this.renderFavoritesList())
            }
        })
    }, {
        "../../react_stores/user_agent_capabilities_store": 257,
        "../dropdown": 90,
        "../gr_component_factory": 107,
        "./../tab": 194,
        classnames: "classnames",
        lodash: "lodash",
        react: "react",
        reflux: "reflux"
    }],
    119: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("lodash"),
            a = o(s),
            i = e("../gr_component_factory"),
            l = o(i);
        r["default"] = l["default"].createClass({
            displayName: "GenreList",
            renderMoreGenresLink: function() {
                return n("li", {
                    role: "menuitem",
                    className: "genreList__genre"
                }, void 0, n("a", {
                    href: "/genres",
                    className: "genreList__genreLink gr-hyperlink gr-hyperlink--naked"
                }, void 0, "More Genres"))
            },
            render: function() {
                for (var e = this, t = 10, r = [], o = this.props.genres.slice(0); r.length * t < this.props.genres.length;) r.push(o.splice(0, t));
                var s = r.length;
                return n("div", {
                    className: "genreListContainer"
                }, void 0, n("div", {
                    className: "siteHeader__heading siteHeader__title"
                }, void 0, "Genres"), a["default"].map(r, function(t, r) {
                    return n("ul", {
                        className: "genreList"
                    }, "genreList" + r, a["default"].map(t, function(e) {
                        return n("li", {
                            role: "menuitem",
                            className: "genreList__genre"
                        }, e.name, n("a", {
                            href: e.url,
                            className: "genreList__genreLink gr-hyperlink gr-hyperlink--naked"
                        }, void 0, e.name))
                    }), s === r + 1 ? e.renderMoreGenresLink() : null)
                }))
            }
        })
    }, {
        "../gr_component_factory": 107,
        lodash: "lodash"
    }],
    120: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            },
            s = function() {
                var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
                return function(t, r, o, n) {
                    var s = t && t.defaultProps,
                        a = arguments.length - 3;
                    if (r || 0 === a || (r = {}), r && s)
                        for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                    else r || (r = s || {});
                    if (1 === a) r.children = n;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                        r.children = l
                    }
                    return {
                        $$typeof: e,
                        type: t,
                        key: void 0 === o ? null : "" + o,
                        ref: null,
                        props: r,
                        _owner: null
                    }
                }
            }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var a = e("../shared/cookies"),
            i = o(a),
            l = e("react"),
            u = o(l),
            d = e("../gr_component_factory"),
            c = o(d),
            p = e("classnames"),
            f = o(p),
            h = e("redux"),
            m = e("react-redux"),
            _ = e("redux-logger"),
            g = o(_),
            v = e("../favorite_genres_form"),
            y = o(v),
            b = e("../modal"),
            k = o(b),
            S = e("../modal_trigger"),
            P = o(S),
            T = e("./personal_nav"),
            w = o(T),
            N = e("./personal_nav_drawer"),
            R = o(N),
            M = e("./primary_nav_menus"),
            C = o(M),
            x = e("./profile_menu_jewel"),
            A = o(x),
            I = e("./home_icon"),
            L = o(I),
            U = e("./header_logo"),
            E = o(U),
            O = e("../search/search_toggle"),
            B = o(O),
            j = e("./nav_search"),
            F = o(j),
            D = e("./primary_nav_separate_line"),
            q = o(D),
            H = e("../../react_reducers/header/header_reducer"),
            G = o(H),
            $ = e("../../modules/env_utils"),
            z = o($),
            W = [];
        z["default"].isDevelopment() && z["default"].hasDom() && W.push((0, g["default"])());
        var K = (0, h.createStore)(G["default"], {}, h.applyMiddleware.apply(void 0, W));
        r["default"] = c["default"].createClass({
            displayName: "Header",
            getInitialState: function() {
                return {
                    scrolling: !1,
                    userLikelyHasAccount: !1
                }
            },
            propTypes: {
                adId: u["default"].PropTypes.string,
                autocomleteUrl: u["default"].PropTypes.string,
                browseUrl: u["default"].PropTypes.string,
                choiceAwardsUrl: u["default"].PropTypes.string,
                communityUrl: u["default"].PropTypes.string,
                editorsPicksUrl: u["default"].PropTypes.string,
                eventUrl: u["default"].PropTypes.string,
                discussionsUrl: u["default"].PropTypes.string,
                favoriteGenres: u["default"].PropTypes.array,
                friendIconUrl: u["default"].PropTypes.string,
                genres: u["default"].PropTypes.array.isRequired,
                genresIndexUrl: u["default"].PropTypes.string,
                giveawayUrl: u["default"].PropTypes.string,
                groupsUrl: u["default"].PropTypes.string,
                featuredAskAuthorUrl: u["default"].PropTypes.string,
                helpUrl: u["default"].PropTypes.string,
                homeUrl: u["default"].PropTypes.string,
                listUrl: u["default"].PropTypes.string,
                messageIconUrl: u["default"].PropTypes.string,
                myBooksUrl: u["default"].PropTypes.string,
                myFriendsUrl: u["default"].PropTypes.string,
                myGroupsUrl: u["default"].PropTypes.string,
                myQuotesUrl: u["default"].PropTypes.string,
                myReadingChallengeUrl: u["default"].PropTypes.string,
                myRecsUrl: u["default"].PropTypes.string,
                name: u["default"].PropTypes.string,
                newReleasesUrl: u["default"].PropTypes.string,
                notificationIconUrl: u["default"].PropTypes.string,
                peopleUrl: u["default"].PropTypes.string,
                preferences: u["default"].PropTypes.object,
                profileImage: u["default"].PropTypes.string,
                profileUrl: u["default"].PropTypes.string,
                quizzesUrl: u["default"].PropTypes.string,
                quotesUrl: u["default"].PropTypes.string,
                recommendationsUrl: u["default"].PropTypes.string,
                signedIn: u["default"].PropTypes.bool,
                searchPath: u["default"].PropTypes.string,
                signInUrl: u["default"].PropTypes.string,
                signInWithReturnUrl: u["default"].PropTypes.bool,
                signUpUrl: u["default"].PropTypes.string,
                storiesUrl: u["default"].PropTypes.string,
                tempFriendRequestCount: u["default"].PropTypes.number,
                tempUnreadMessageCount: u["default"].PropTypes.number,
                topFullImage: u["default"].PropTypes.shape({
                    topFullImageUrl: u["default"].PropTypes.string.isRequired,
                    xs: u["default"].PropTypes.object,
                    md: u["default"].PropTypes.object
                }),
                triviaUrl: u["default"].PropTypes.string,
                logoUrl: u["default"].PropTypes.string
            },
            componentDidMount: function() {
                (i["default"].get("p") || i["default"].get("u")) && this.setState({
                    userLikelyHasAccount: !0
                })
            },
            handleScrollBegin: function() {
                this.setState({
                    scrolling: !0
                })
            },
            handleScrollEnd: function() {
                this.setState({
                    scrolling: !1
                })
            },
            render: function() {
                return s(m.Provider, {
                    store: K
                }, void 0, s("header", {}, void 0, this.renderTopFullImage(), s("div", {
                    className: "siteHeader__topLine gr-box gr-box--withShadow"
                }, void 0, s("div", {
                    className: "siteHeader__contents"
                }, void 0, s("div", {
                    className: "siteHeader__topLevelItem siteHeader__topLevelItem--searchIcon"
                }, void 0, s(B["default"], {
                    toggleType: O.SEARCH_TOGGLE_TYPES.ICON
                })), this.renderHomeIcon(), u["default"].createElement(E["default"], this.props), s("nav", {
                    className: "siteHeader__primaryNavInline"
                }, void 0, u["default"].createElement(C["default"], this.props)), u["default"].createElement(F["default"], this.props), this.props.signedIn ? this.renderPersonalNav() : this.renderLoginLinks(), this.renderProfileDrawerTrigger(), this.renderModals(), this.renderPersonalNavDrawer())), u["default"].createElement(q["default"], this.props)))
            },
            renderHomeIcon: function() {
                return this.isFeatureEnabled("logo_doodle") ? u["default"].createElement(L["default"], this.props) : void 0
            },
            renderPersonalNav: function() {
                return s("div", {
                    className: "siteHeader__personal"
                }, void 0, u["default"].createElement(w["default"], this.props))
            },
            renderPersonalNavDrawer: function() {
                return u["default"].createElement(R["default"], this.props)
            },
            renderProfileDrawerTrigger: function() {
                if (this.props.signedIn) {
                    var e = {
                        viewableName: this.props.name,
                        profileImage: this.props.profileImage,
                        profileUrl: this.props.profileUrl
                    };
                    return s("div", {
                        className: "siteHeader__topLevelItem siteHeader__topLevelItem--profileIcon"
                    }, void 0, s("span", {
                        className: "headerPersonalNav"
                    }, void 0, s(P["default"], {
                        id: N.personalNavDrawerModalId
                    }, void 0, u["default"].createElement(A["default"], n({}, this.props, {
                        user: e
                    })))))
                }
                var t = (0, f["default"])("gr-button", "gr-button--dark");
                return this.state.userLikelyHasAccount ? s("div", {
                    className: "siteHeader__topLevelItem siteHeader__topLevelItem--signUp"
                }, void 0, s("a", {
                    href: this.getSignInUrl(),
                    className: t,
                    rel: "nofollow"
                }, void 0, "Sign in")) : s("div", {
                    className: "siteHeader__topLevelItem siteHeader__topLevelItem--signUp"
                }, void 0, s("a", {
                    href: this.props.signUpUrl,
                    className: t,
                    rel: "nofollow"
                }, void 0, "Sign up"))
            },
            getSignInUrl: function() {
                var e = z["default"].getCurrentPath();
                return this.props.signInWithReturnUrl ? this.props.signInUrl + "?returnurl=" + e : this.props.signInUrl
            },
            renderLoginLinks: function() {
                return s("ul", {
                    className: "siteHeader__personal"
                }, void 0, s("li", {
                    className: "siteHeader__topLevelItem siteHeader__topLevelItem--signedOut"
                }, void 0, s("a", {
                    href: this.getSignInUrl(),
                    rel: "nofollow",
                    className: "siteHeader__topLevelLink"
                }, void 0, "Sign In")), s("li", {
                    className: "siteHeader__topLevelItem siteHeader__topLevelItem--signedOut"
                }, void 0, s("a", {
                    href: this.props.signUpUrl,
                    rel: "nofollow",
                    className: "siteHeader__topLevelLink"
                }, void 0, "Join")))
            },
            renderModals: function() {
                return this.props.signedIn ? s(k["default"], {
                    id: "favGenres"
                }, void 0, s(y["default"], {
                    favoriteGenres: this.props.favoriteGenres,
                    genres: this.props.genres
                })) : null
            },
            renderTopFullImage: function() {
                return this.isFeatureEnabled("site_header_top_full_image") ? s("div", {
                    className: "siteHeader__topFullImageContainer"
                }, void 0, s("a", {
                    className: "siteHeader__topFullImageLink",
                    href: this.props.topFullImage.topFullImageUrl
                }, void 0, s("picture", {}, void 0, s("source", {
                    media: "(min-width: 768px)",
                    srcSet: this.props.topFullImage.md["1x"] + " 1x, " + this.props.topFullImage.md["2x"] + " 2x"
                }), s("img", {
                    alt: this.props.topFullImage.topFullImageAlt,
                    className: "siteHeader__topFullImage",
                    src: this.props.topFullImage.xs["1x"],
                    srcSet: this.props.topFullImage.xs["2x"] + " 2x"
                })))) : null
            }
        })
    }, {
        "../../modules/env_utils": 13,
        "../../react_reducers/header/header_reducer": 235,
        "../favorite_genres_form": 97,
        "../gr_component_factory": 107,
        "../modal": 145,
        "../modal_trigger": 146,
        "../search/search_toggle": 170,
        "../shared/cookies": 175,
        "./header_logo": 121,
        "./home_icon": 123,
        "./nav_search": 124,
        "./personal_nav": 127,
        "./personal_nav_drawer": 128,
        "./primary_nav_menus": 130,
        "./primary_nav_separate_line": 131,
        "./profile_menu_jewel": 133,
        classnames: "classnames",
        react: "react",
        "react-redux": "react-redux",
        redux: "redux",
        "redux-logger": "redux-logger"
    }],
    121: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("../gr_component_factory"),
            a = o(s);
        r["default"] = a["default"].createClass({
            displayName: "HeaderLogo",
            render: function() {
                return n("a", {
                    href: this.props.logoActionUrl,
                    className: this.isFeatureEnabled("logo_doodle") ? "siteHeader__logo siteHeader__logo--doodle" : "siteHeader__logo",
                    "aria-label": this.props.logoAltText,
                    title: this.props.logoAltText
                })
            }
        })
    }, {
        "../gr_component_factory": 107
    }],
    122: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("lodash"),
            s = o(n),
            a = e("../gr_component_factory"),
            i = o(a),
            l = e("reflux"),
            u = o(l),
            d = e("./header"),
            c = o(d),
            p = e("../../react_stores/current_user_store"),
            f = o(p),
            h = e("../../react_stores/favorite_genres_store"),
            m = o(h);
        r["default"] = i["default"].createClass({
            displayName: "HeaderStoreConnector",
            mixins: [u["default"].connect(f["default"], "currentUser"), u["default"].connect(m["default"], "favoriteGenres")],
            render: function() {
                var e = this.state.currentUser.currentUser,
                    t = !s["default"].isNull(e),
                    r = {
                        adId: this.state.favoriteGenres.adId,
                        signedIn: t,
                        genres: this.state.favoriteGenres.allGenres,
                        favoriteGenres: this.state.favoriteGenres.favoriteGenres
                    };
                return t && s["default"].merge(r, e), s["default"].merge(r, this.props), React.createElement(c["default"], r)
            }
        })
    }, {
        "../../react_stores/current_user_store": 240,
        "../../react_stores/favorite_genres_store": 243,
        "../gr_component_factory": 107,
        "./header": 120,
        lodash: "lodash",
        reflux: "reflux"
    }],
    123: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("../gr_component_factory"),
            a = o(s);
        r["default"] = a["default"].createClass({
            displayName: "HomeIcon",
            render: function() {
                return n("div", {
                    className: "siteHeader__homeIconContainer"
                }, void 0, n("a", {
                    href: this.props.defaultLogoActionUrl,
                    className: "siteHeader__homeIcon",
                    "aria-label": this.props.defaultLogoAltText,
                    title: this.props.defaultLogoAltText
                }))
            }
        })
    }, {
        "../gr_component_factory": 107
    }],
    124: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("../gr_component_factory"),
            l = o(i),
            u = e("../../analytics/url_tracking_params"),
            d = e("../../modules/env_utils"),
            c = o(d),
            p = e("../search/book_search"),
            f = o(p),
            h = e("../experimental/search/universal/universal_search"),
            m = o(h);
        r["default"] = l["default"].createClass({
            displayName: "NavSearch",
            propTypes: {
                autocompleteUrl: a["default"].PropTypes.string,
                autoFocus: a["default"].PropTypes.bool,
                searchPath: a["default"].PropTypes.string,
                bemModifiers: a["default"].PropTypes.string
            },
            getDefaultProps: function() {
                return {
                    autoFocus: !1,
                    bemModifiers: "navbar"
                }
            },
            onSearchSelection: function(e) {
                var t = null;
                t = this.isFeatureEnabled("universal_search") ? e.destination + "?" + u.URLTrackingParams.BOOK_SHOW_INTERACTION_PARAM + "&" + u.URLTrackingParams.FROM_SEARCH_PARAM : e.bookUrl + "?" + u.URLTrackingParams.BOOK_SHOW_INTERACTION_PARAM + "&" + u.URLTrackingParams.FROM_SEARCH_PARAM, c["default"].setLocationUrl(t)
            },
            render: function() {
                return this.isFeatureEnabled("universal_search") ? n(m["default"], {
                    bemModifiers: this.props.bemModifiers,
                    searchPath: this.props.searchPath,
                    autocompleteUrl: this.props.autocompleteUrl,
                    onChooseResult: this.onSearchSelection
                }) : n(f["default"], {
                    autoFocus: this.props.autoFocus,
                    bemModifiers: this.props.bemModifiers,
                    searchPath: this.props.searchPath,
                    autocompleteUrl: this.props.autocompleteUrl,
                    onChooseResult: this.onSearchSelection
                })
            }
        })
    }, {
        "../../analytics/url_tracking_params": 2,
        "../../modules/env_utils": 13,
        "../experimental/search/universal/universal_search": 95,
        "../gr_component_factory": 107,
        "../search/book_search": 166,
        react: "react"
    }],
    125: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("../gr_component_factory"),
            a = o(s),
            i = e("lodash"),
            l = e("../../modules/shared/image_registry"),
            u = e("../../modules/to_sentence"),
            d = o(u),
            c = e("../user/user_icon"),
            p = o(c),
            f = e("../time/relative_time"),
            h = o(f),
            m = e("../shape_icon"),
            _ = o(m);
        r["default"] = a["default"].createClass({
            displayName: "Notification",
            mixins: [d["default"]],
            propTypes: {
                notification: React.PropTypes.object.isRequired
            },
            userLink: function(e) {
                return n("a", {
                    href: e.profileUrl,
                    className: "u-defaultType"
                }, e.profileUrl, n("b", {}, void 0, e.viewableName))
            },
            userLinks: function g(e) {
                var t = this,
                    g = (0, i.map)(e.actors, function(e) {
                        return t.userLink(e)
                    });
                return e.moreActors ? this.sentenceJoin(g) : this.toSentence(g)
            },
            renderActorIcon: function(e) {
                return e.actor ? n(p["default"], {
                    user: e.actor
                }) : n(_["default"], {
                    imageUrl: (0, l.getImages)().notificationFromGRIcon || "",
                    imageAlt: "Goodreads Notification"
                })
            },
            renderNewNotificationFlag: function(e) {
                return e.viewed ? void 0 : n("small", {
                    className: "gr-smallAlert u-marginRightTiny"
                }, void 0, "New")
            },
            renderHistoryMessage: function(e) {
                return e.historyMessage ? n("small", {
                    className: "gr-notification__historyMessage"
                }, void 0, e.historyMessage) : void 0
            },
            render: function() {
                var e = this.props.notification;
                return e.error ? null : n("div", {
                    className: "gr-mediaBox gr-notification"
                }, void 0, n("div", {
                    className: "gr-mediaBox__media u-marginRightMedium"
                }, void 0, this.renderActorIcon(e)), n("div", {
                    className: "gr-mediaBox__desc u-defaultType"
                }, void 0, this.userLinks(e), !e.actor || e.moreActors ? "" : e.directlyAddressed ? ", " : " ", e.body + " ", e.resource ? n("a", {
                    className: "gr-hyperlink",
                    href: e.resource.url
                }, void 0, e.resource.text) : null, n("div", {}, void 0, this.renderNewNotificationFlag(e), n("small", {}, void 0, n(h["default"], {
                    time: e.createdAt,
                    longFormat: !0
                }))), n("div", {}, void 0, this.renderHistoryMessage(e))))
            }
        })
    }, {
        "../../modules/shared/image_registry": 20,
        "../../modules/to_sentence": 22,
        "../gr_component_factory": 107,
        "../shape_icon": 171,
        "../time/relative_time": 196,
        "../user/user_icon": 198,
        lodash: "lodash"
    }],
    126: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("lodash"),
            l = o(i),
            u = e("../gr_component_factory"),
            d = o(u),
            c = e("reflux"),
            p = o(c),
            f = e("../spinner"),
            h = o(f),
            m = e("../dropdown"),
            _ = o(m),
            g = e("../../react_stores/notifications_store"),
            v = o(g),
            y = e("../../react_actions/notifications_actions"),
            b = o(y),
            k = e("./notification"),
            S = o(k);
        r["default"] = d["default"].createClass({
            displayName: "Notifications",
            mixins: [p["default"].connect(v["default"], "notificationsStore")],
            propTypes: {
                notificationIconUrl: a["default"].PropTypes.string.isRequired,
                withDropdowns: a["default"].PropTypes.bool
            },
            getDefaultProps: function() {
                return {
                    withDropdowns: !0
                }
            },
            getStoreState: function() {
                return this.state.notificationsStore
            },
            generateKey: function(e) {
                return e.actor ? "" + e.actor.profileUrl + e.createdAt : e.resource ? "" + e.resource.url + e.createdAt : "" + e.body + e.createdAt
            },
            notificationsCountString: function() {
                var e = this.getStoreState();
                return e.unreadCount + (e.unreadCountMore ? "+" : "")
            },
            renderNotificationList: function() {
                var e = this,
                    t = this.getStoreState(),
                    r = t.notifications;
                return t.errorOccurred ? n("div", {
                    className: "dropdown__container\n                        gr-notifications\n                        gr-notifications--sparse"
                }, void 0, n("span", {}, void 0, "An error occurred loading your notifications")) : l["default"].isUndefined(r) ? n("div", {
                    className: "dropdown__container\n                        gr-notifications\n                        gr-notifications--sparse"
                }, void 0, n(h["default"], {})) : l["default"].isEmpty(r) ? n("div", {
                    className: "dropdown__container\n                        gr-notifications\n                        gr-notifications--sparse"
                }, void 0, n("span", {}, void 0, "No notifications")) : n("section", {
                    className: "dropdown__container"
                }, void 0, n("a", {
                    className: "u-displayBlock gr-hyperlink gr-hyperlink--noUnderline",
                    href: "/notifications"
                }, void 0, n("div", {
                    className: "siteHeader__dropdownHeading"
                }, void 0, n("h3", {
                    className: "siteHeader__heading siteHeader__dropdownHeader"
                }, void 0, "Notifications"), n("span", {}, void 0, "View all notifications"))), n("div", {
                    className: "gr-notifications gr-box gr-box--forceScrollBar"
                }, void 0, l["default"].map(r, function(t) {
                    return n(S["default"], {
                        notification: t
                    }, e.generateKey(t))
                })))
            },
            render: function() {
                var e = this.getStoreState(),
                    t = n("span", {
                        className: "headerPersonalNav__icon\n                       headerPersonalNav__icon--notifications",
                        "aria-label": "Notifications"
                    }, void 0, e.unreadCount > 0 ? n("span", {
                        className: "headerPersonalNav__flag"
                    }, void 0, this.notificationsCountString()) : null);
                return this.props.withDropdowns ? n("div", {}, void 0, n(_["default"], {
                    trigger: t,
                    triggerEventType: _["default"].TriggerEventTypes.CLICK,
                    fallbackUrl: this.props.notificationIconUrl,
                    tooltipText: "Notifications",
                    onShowCallback: b["default"].requestNotifications,
                    bemModifiers: "notifications",
                    isInPersonalNav: "true"
                }, void 0, this.renderNotificationList())) : n("a", {
                    href: this.props.notificationIconUrl,
                    className: "headerPersonalNav"
                }, void 0, t)
            }
        })
    }, {
        "../../react_actions/notifications_actions": 40,
        "../../react_stores/notifications_store": 249,
        "../dropdown": 90,
        "../gr_component_factory": 107,
        "../spinner": 191,
        "./notification": 125,
        lodash: "lodash",
        react: "react",
        reflux: "reflux"
    }],
    127: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            },
            s = function() {
                var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
                return function(t, r, o, n) {
                    var s = t && t.defaultProps,
                        a = arguments.length - 3;
                    if (r || 0 === a || (r = {}), r && s)
                        for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                    else r || (r = s || {});
                    if (1 === a) r.children = n;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                        r.children = l
                    }
                    return {
                        $$typeof: e,
                        type: t,
                        key: void 0 === o ? null : "" + o,
                        ref: null,
                        props: r,
                        _owner: null
                    }
                }
            }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var a = e("react"),
            i = o(a),
            l = e("lodash"),
            u = o(l),
            d = e("../gr_component_factory"),
            c = o(d),
            p = e("../dropdown"),
            f = o(p),
            h = e("./notifications"),
            m = o(h),
            _ = e("./profile_menu"),
            g = o(_),
            v = e("./profile_menu_jewel"),
            y = o(v),
            b = e("./discussions_pane"),
            k = o(b);
        r["default"] = c["default"].createClass({
            displayName: "PersonalNav",
            propTypes: {
                author: i["default"].PropTypes.shape({
                    id: i["default"].PropTypes.number,
                    editProfileUrl: i["default"].PropTypes.string,
                    profileUrl: i["default"].PropTypes.string,
                    dashboardUrl: i["default"].PropTypes.string
                }),
                commentsUrl: i["default"].PropTypes.string,
                discussionsUrl: i["default"].PropTypes.string,
                editFavGenresUrl: i["default"].PropTypes.string,
                includeProfileMenu: i["default"].PropTypes.bool,
                groupInvitesCount: i["default"].PropTypes.number,
                groupsUrl: i["default"].PropTypes.string,
                messageIconUrl: i["default"].PropTypes.string,
                myFriendsUrl: i["default"].PropTypes.string,
                myQuotesUrl: i["default"].PropTypes.string,
                myReadingChallengeUrl: i["default"].PropTypes.string,
                name: i["default"].PropTypes.string,
                pendingRecsCount: i["default"].PropTypes.number,
                preferences: i["default"].PropTypes.object,
                profileEditUrl: i["default"].PropTypes.string,
                profileImage: i["default"].PropTypes.string,
                profileUrl: i["default"].PropTypes.string,
                signOutUrl: i["default"].PropTypes.string,
                tempFriendRequestCount: i["default"].PropTypes.number,
                tempUnreadMessageCount: i["default"].PropTypes.number,
                withDropdowns: i["default"].PropTypes.bool
            },
            getDefaultProps: function() {
                return {
                    includeProfileMenu: !0,
                    withDropdowns: !0
                }
            },
            render: function() {
                var e = s("span", {
                        className: "headerPersonalNav__icon headerPersonalNav__icon--inbox",
                        "aria-label": "Inbox"
                    }, void 0, this.props.tempUnreadMessageCount > 0 ? s("span", {
                        className: "headerPersonalNav__flag"
                    }, void 0, this.props.tempUnreadMessageCount) : null),
                    t = s("span", {
                        className: "headerPersonalNav__icon headerPersonalNav__icon--friendRequests",
                        "aria-label": "Friend Requests"
                    }, void 0, this.props.tempFriendRequestCount > 0 ? s("span", {
                        className: "headerPersonalNav__flag"
                    }, void 0, this.props.tempFriendRequestCount) : null);
                return s("ul", {
                    className: "personalNav"
                }, void 0, s("li", {
                    className: "personalNav__listItem"
                }, void 0, this.renderNotifications()), this.isFeatureEnabled("nav_bar_discussions_pane") ? s("li", {
                    className: "personalNav__listItem"
                }, void 0, this.renderDiscussionsPane()) : null, s("li", {
                    className: "personalNav__listItem"
                }, void 0, s("a", {
                    href: this.props.messageIconUrl,
                    title: "Messages",
                    className: "headerPersonalNav"
                }, void 0, e)), s("li", {
                    className: "personalNav__listItem"
                }, void 0, s("a", {
                    href: this.props.friendIconUrl,
                    title: "Friends",
                    className: "headerPersonalNav"
                }, void 0, t)), this.renderProfileMenu())
            },
            renderDiscussionsPane: function() {
                return this.props.withDropdowns === !0 ? s(k["default"], {
                    groupsUrl: this.props.groupsUrl,
                    discussionsUrl: this.props.discussionsUrl
                }) : s("a", {
                    href: this.props.discussionsUrl,
                    className: "headerPersonalNav"
                }, void 0, s("span", {
                    className: "headerPersonalNav__icon headerPersonalNav__icon--discussions",
                    "aria-label": "My group discussions"
                }))
            },
            renderNotifications: function() {
                return s(m["default"], {
                    notificationIconUrl: this.props.notificationIconUrl,
                    preferences: this.props.preferences,
                    withDropdowns: this.props.withDropdowns
                })
            },
            renderProfileName: function() {
                var e = this.props.name;
                return e.length > 23 && (e = e.substring(0, 22) + "…"), s("span", {
                    className: "siteHeader__subNavLink gr-h3 gr-h3--noMargin"
                }, void 0, " ", e, " ")
            },
            renderProfileMenu: function() {
                if (this.props.includeProfileMenu === !0) {
                    var e = {
                            viewableName: this.props.name,
                            profileImage: this.props.profileImage,
                            profileUrl: this.props.profileUrl
                        },
                        t = i["default"].createElement(y["default"], n({}, this.props, {
                            user: e,
                            showNotificationsFlag: !1
                        })),
                        r = 0 === u["default"].size(this.props.author) ? this.props.profileUrl : this.props.author.profileUrl;
                    return s("li", {
                        className: "personalNav__listItem"
                    }, void 0, s(f["default"], {
                        trigger: t,
                        fallbackUrl: r,
                        bemModifiers: "profileMenu",
                        isInPersonalNav: "true"
                    }, void 0, s("div", {
                        className: "siteHeader__subNav siteHeader__subNav--profile gr-box gr-box--withShadowLarge"
                    }, void 0, this.renderProfileName(), i["default"].createElement(g["default"], n({}, this.props, {
                        profileUrl: r
                    })))))
                }
                return null
            }
        })
    }, {
        "../dropdown": 90,
        "../gr_component_factory": 107,
        "./discussions_pane": 114,
        "./notifications": 126,
        "./profile_menu": 132,
        "./profile_menu_jewel": 133,
        lodash: "lodash",
        react: "react"
    }],
    128: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            },
            s = function() {
                var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
                return function(t, r, o, n) {
                    var s = t && t.defaultProps,
                        a = arguments.length - 3;
                    if (r || 0 === a || (r = {}), r && s)
                        for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                    else r || (r = s || {});
                    if (1 === a) r.children = n;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                        r.children = l
                    }
                    return {
                        $$typeof: e,
                        type: t,
                        key: void 0 === o ? null : "" + o,
                        ref: null,
                        props: r,
                        _owner: null
                    }
                }
            }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.personalNavDrawerModalId = void 0;
        var a = e("../modal"),
            i = o(a),
            l = e("../gr_component_factory"),
            u = o(l),
            d = e("./personal_nav"),
            c = o(d),
            p = e("./profile_menu"),
            f = o(p),
            h = e("../user/user_icon"),
            m = o(h),
            _ = e("../../modules/shape_icon_values"),
            g = r.personalNavDrawerModalId = "personalNavDrawerModal";
        r["default"] = u["default"].createClass({
            displayName: "PersonalNavDrawer",
            render: function() {
                var e = {
                    viewableName: this.props.name,
                    profileImage: this.props.profileImage,
                    profileUrl: this.props.profileUrl
                };
                return s(i["default"], {
                    asDrawer: !0,
                    id: g
                }, void 0, s("div", {
                    className: "personalNavDrawer"
                }, void 0, s("div", {
                    className: "personalNavDrawer__personalNavContainer"
                }, void 0, React.createElement(c["default"], n({}, this.props, {
                    includeProfileMenu: !1,
                    withDropdowns: !1
                }))), s("div", {
                    className: "personalNavDrawer__profileAndLinksContainer"
                }, void 0, s("div", {
                    className: "personalNavDrawer__profileContainer gr-mediaFlexbox gr-mediaFlexbox--alignItemsCenter"
                }, void 0, s("div", {
                    className: "gr-mediaFlexbox__media"
                }, void 0, s(m["default"], {
                    user: e,
                    size: _.ICON_SIZES.LARGE
                })), s("div", {
                    className: "gr-mediaFlexbox__desc"
                }, void 0, s("a", {
                    href: this.props.profileUrl,
                    className: "gr-hyperlink gr-hyperlink--bold"
                }, void 0, this.props.name), s("div", {
                    className: "u-displayBlock"
                }, void 0, s("a", {
                    href: this.props.profileUrl,
                    className: "gr-hyperlink gr-hyperlink--naked"
                }, void 0, "View profile")))), s("div", {
                    className: "personalNavDrawer__profileMenuContainer"
                }, void 0, React.createElement(f["default"], this.props)))))
            }
        })
    }, {
        "../../modules/shape_icon_values": 19,
        "../gr_component_factory": 107,
        "../modal": 145,
        "../user/user_icon": 198,
        "./personal_nav": 127,
        "./profile_menu": 132
    }],
    129: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.PRIMARY_NAV_MENU_TAB_GROUP = void 0;
        var s = e("react"),
            a = o(s),
            i = e("lodash"),
            l = o(i),
            u = e("reflux"),
            d = o(u),
            c = e("../gr_component_factory"),
            p = o(c),
            f = e("classnames"),
            h = o(f),
            m = e("react-onclickoutside"),
            _ = o(m),
            g = e("../../modules/keys"),
            v = o(g),
            y = e("../../react_actions/tab_actions"),
            b = o(y),
            k = e("../../react_stores/tabs_store"),
            S = o(k),
            P = e("../../react_stores/user_agent_capabilities_store"),
            T = o(P),
            w = r.PRIMARY_NAV_MENU_TAB_GROUP = "siteHeaderPrimaryNav";
        r["default"] = p["default"].createClass({
            displayName: "Dropdown",
            mixins: [_["default"], d["default"].connect(S["default"], "tabsStore"), d["default"].connect(T["default"], "userAgentCapabilities")],
            propTypes: {
                fallbackUrl: a["default"].PropTypes.string,
                onShowCallback: a["default"].PropTypes.func,
                tabName: a["default"].PropTypes.string.isRequired,
                tooltipText: a["default"].PropTypes.string,
                trigger: a["default"].PropTypes.oneOfType([a["default"].PropTypes.string, a["default"].PropTypes.element]).isRequired
            },
            hide: function() {
                b["default"].deselectTab(this.props.tabName, w)
            },
            isMenuActive: function() {
                return this.props.tabName === this.state.tabsStore[w]
            },
            show: function() {
                b["default"].selectTab(this.props.tabName, w), this.props.onShowCallback && this.props.onShowCallback()
            },
            toggle: function(e) {
                this.props.children && e.preventDefault(), this.isMenuActive() ? this.hide() : this.show()
            },
            openList: function(e) {
                v["default"].isDropdownOpenerKey(e.keyCode) ? (e.preventDefault(), v["default"].isArrowDown(e.keyCode) ? this.show() : this.toggle(e)) : v["default"].isDefaultCloserKey(e.keyCode) && (e.preventDefault(), this.hide())
            },
            handleClickOutside: function() {
                this.state.userAgentCapabilities.touch || this.hide()
            },
            triggerClasses: function() {
                return (0, h["default"])(this.withBemModifiers(["primaryNavMenu__trigger"]), {
                    "primaryNavMenu__trigger--buttonReset": l["default"].isUndefined(this.props.fallbackUrl)
                }, {
                    "primaryNavMenu__trigger--active": this.isMenuActive()
                })
            },
            renderTriggerButton: function() {
                return n("button", {
                    className: this.triggerClasses(),
                    "aria-haspopup": "true",
                    "aria-expanded": this.isMenuActive(),
                    onClick: this.toggle,
                    onKeyDown: this.openList,
                    title: this.props.tooltipText
                }, void 0, this.props.trigger)
            },
            renderTriggerLink: function() {
                return n("a", {
                    className: this.triggerClasses(),
                    href: this.props.fallbackUrl,
                    onClick: this.toggle,
                    onKeyDown: this.openList,
                    role: "button",
                    "aria-haspopup": "true",
                    "aria-expanded": this.isMenuActive(),
                    title: this.props.tooltipText
                }, void 0, this.props.trigger)
            },
            render: function() {
                var e = (0, h["default"])(this.withBemModifiers("primaryNavMenu"), "ignore-react-onclickoutside"),
                    t = (0, h["default"])("primaryNavMenu__menu", {
                        "primaryNavMenu__menu--show": this.isMenuActive()
                    }, "gr-box gr-box--withShadowLarge"),
                    r = l["default"].isUndefined(this.props.fallbackUrl) ? this.renderTriggerButton() : this.renderTriggerLink(),
                    o = n("div", {
                        className: t,
                        role: "menu"
                    }, void 0, this.props.children);
                return n("div", {
                    className: e
                }, void 0, r, o)
            }
        })
    }, {
        "../../modules/keys": 16,
        "../../react_actions/tab_actions": 45,
        "../../react_stores/tabs_store": 254,
        "../../react_stores/user_agent_capabilities_store": 257,
        "../gr_component_factory": 107,
        classnames: "classnames",
        lodash: "lodash",
        react: "react",
        "react-onclickoutside": "react-onclickoutside",
        reflux: "reflux"
    }],
    130: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("../gr_component_factory"),
            l = o(i),
            u = e("./community_menu"),
            d = o(u),
            c = e("./browse_menu"),
            p = o(c);
        r["default"] = l["default"].createClass({
            displayName: "PrimaryNavMenus",
            propTypes: {
                adId: a["default"].PropTypes.string,
                browseUrl: a["default"].PropTypes.string,
                choiceAwardsUrl: a["default"].PropTypes.string,
                communityUrl: a["default"].PropTypes.string,
                discussionsUrl: a["default"].PropTypes.string,
                eventUrl: a["default"].PropTypes.string,
                favoriteGenres: a["default"].PropTypes.array,
                featuredAskAuthorUrl: a["default"].PropTypes.string,
                genres: a["default"].PropTypes.array.isRequired,
                giveawayUrl: a["default"].PropTypes.string,
                groupsUrl: a["default"].PropTypes.string,
                homeUrl: a["default"].PropTypes.string,
                listUrl: a["default"].PropTypes.string,
                myBooksUrl: a["default"].PropTypes.string,
                newReleasesUrl: a["default"].PropTypes.string,
                peopleUrl: a["default"].PropTypes.string,
                quizzesUrl: a["default"].PropTypes.string,
                quotesUrl: a["default"].PropTypes.string,
                recommendationsUrl: a["default"].PropTypes.string,
                signedIn: a["default"].PropTypes.bool,
                storiesUrl: a["default"].PropTypes.string,
                triviaUrl: a["default"].PropTypes.string
            },
            render: function() {
                return n("ul", {
                    role: "menu",
                    className: "siteHeader__menuList"
                }, void 0, n("li", {
                    className: "siteHeader__topLevelItem siteHeader__topLevelItem--home"
                }, void 0, n("a", {
                    href: this.props.homeUrl,
                    className: "siteHeader__topLevelLink"
                }, void 0, "Home")), n("li", {
                    className: "siteHeader__topLevelItem"
                }, void 0, n("a", {
                    href: this.props.myBooksUrl,
                    className: "siteHeader__topLevelLink"
                }, void 0, "My Books")), n("li", {
                    className: "siteHeader__topLevelItem"
                }, void 0, a["default"].createElement(p["default"], this.props)), n("li", {
                    className: "siteHeader__topLevelItem siteHeader__topLevelItem--community"
                }, void 0, a["default"].createElement(d["default"], this.props)))
            }
        })
    }, {
        "../gr_component_factory": 107,
        "./browse_menu": 110,
        "./community_menu": 111,
        react: "react"
    }],
    131: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.mapStateToProps = r.component = void 0;
        var s = e("lodash"),
            a = o(s),
            i = e("react"),
            l = o(i),
            u = e("../gr_component_factory"),
            d = o(u),
            c = e("./primary_nav_menus"),
            p = o(c),
            f = e("react-headroom"),
            h = o(f),
            m = e("reflux"),
            _ = o(m),
            g = e("../search/search_mobile_nav"),
            v = o(g),
            y = e("../../react_stores/tabs_store"),
            b = o(y),
            k = e("react-redux"),
            S = e("./primary_nav_menu"),
            P = r.component = d["default"].createClass({
                displayName: "PrimaryNavSeparateLine",
                mixins: [_["default"].connect(b["default"], "tabs")],
                propTypes: {
                    autocompleteUrl: l["default"].PropTypes.string.isRequired,
                    searchPath: l["default"].PropTypes.string.isRequired,
                    signedIn: l["default"].PropTypes.bool.isRequired,
                    mobviousDeviceType: l["default"].PropTypes.string,
                    searchIsActive: l["default"].PropTypes.bool,
                    adId: l["default"].PropTypes.string,
                    browseUrl: l["default"].PropTypes.string,
                    choiceAwardsUrl: l["default"].PropTypes.string,
                    communityUrl: l["default"].PropTypes.string,
                    discussionsUrl: l["default"].PropTypes.string,
                    editorsPicksUrl: l["default"].PropTypes.string,
                    eventUrl: l["default"].PropTypes.string,
                    favoriteGenres: l["default"].PropTypes.array,
                    featuredAskAuthorUrl: l["default"].PropTypes.string,
                    genres: l["default"].PropTypes.array.isRequired,
                    giveawayUrl: l["default"].PropTypes.string,
                    groupsUrl: l["default"].PropTypes.string,
                    homeUrl: l["default"].PropTypes.string,
                    listUrl: l["default"].PropTypes.string,
                    myBooksUrl: l["default"].PropTypes.string,
                    newReleasesUrl: l["default"].PropTypes.string,
                    peopleUrl: l["default"].PropTypes.string,
                    quizzesUrl: l["default"].PropTypes.string,
                    quotesUrl: l["default"].PropTypes.string,
                    recommendationsUrl: l["default"].PropTypes.string,
                    storiesUrl: l["default"].PropTypes.string,
                    triviaUrl: l["default"].PropTypes.string
                },
                getDefaultProps: function() {
                    return {
                        searchIsActive: !1
                    }
                },
                isNavPinned: function() {
                    return this.props.searchIsActive || !a["default"].isEmpty(this.state.tabs[S.PRIMARY_NAV_MENU_TAB_GROUP])
                },
                renderDefaultSeparateLine: function() {
                    return n("nav", {
                        className: "siteHeader__primaryNavSeparateLine gr-box gr-box--withShadow"
                    }, void 0, l["default"].createElement(p["default"], this.props))
                },
                renderSearch: function() {
                    return l["default"].createElement(v["default"], this.props)
                },
                render: function() {
                    return n(h["default"], {
                        disable: this.isNavPinned()
                    }, void 0, this.props.searchIsActive ? this.renderSearch() : this.renderDefaultSeparateLine())
                }
            }),
            T = r.mapStateToProps = function(e, t) {
                return Object.assign({}, t, e)
            };
        r["default"] = (0, k.connect)(T)(P)
    }, {
        "../../react_stores/tabs_store": 254,
        "../gr_component_factory": 107,
        "../search/search_mobile_nav": 169,
        "./primary_nav_menu": 129,
        "./primary_nav_menus": 130,
        lodash: "lodash",
        react: "react",
        "react-headroom": "react-headroom",
        "react-redux": "react-redux",
        reflux: "reflux"
    }],
    132: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("lodash"),
            l = o(i),
            u = e("../gr_component_factory"),
            d = o(u),
            c = e("../menu_link"),
            p = o(c);
        r["default"] = d["default"].createClass({
            displayName: "ProfileMenu",
            propTypes: {
                author: a["default"].PropTypes.shape({
                    id: a["default"].PropTypes.number,
                    editProfileUrl: a["default"].PropTypes.string,
                    profileUrl: a["default"].PropTypes.string,
                    dashboardUrl: a["default"].PropTypes.string
                }),
                commentsUrl: a["default"].PropTypes.string,
                discussionsUrl: a["default"].PropTypes.string,
                editFavGenresUrl: a["default"].PropTypes.string,
                groupInvitesCount: a["default"].PropTypes.number,
                helpUrl: a["default"].PropTypes.string,
                myFriendsUrl: a["default"].PropTypes.string,
                myGroupsUrl: a["default"].PropTypes.string,
                myQuotesUrl: a["default"].PropTypes.string,
                myReadingChallengeUrl: a["default"].PropTypes.string,
                myRecsUrl: a["default"].PropTypes.string,
                name: a["default"].PropTypes.string,
                pendingRecsCount: a["default"].PropTypes.number,
                profileEditUrl: a["default"].PropTypes.string,
                profileUrl: a["default"].PropTypes.string,
                readingNotesUrl: a["default"].PropTypes.string,
                signOutUrl: a["default"].PropTypes.string
            },
            isAuthor: function() {
                return !l["default"].isUndefined(this.props.author)
            },
            groupInvitesMessage: function() {
                var e = this.props.groupInvitesCount;
                return 0 === e ? "No invitations" : 1 === e ? "1 invitation" : e + " invitations";
            },
            renderGroupInvites: function() {
                return this.props.groupInvitesCount > 0 ? n("span", {
                    className: "gr-smallAlert u-marginLeftXSmall"
                }, void 0, this.groupInvitesMessage()) : void 0
            },
            renderPendingRecs: function() {
                return this.props.pendingRecsCount > 0 ? n("span", {
                    className: "gr-smallAlert u-marginLeftXSmall"
                }, void 0, this.props.pendingRecsCount + " new") : void 0
            },
            renderAuthorDashboardLink: function() {
                return this.isAuthor() ? n(p["default"], {
                    href: this.props.author.dashboardUrl,
                    linkText: "Author Dashboard",
                    linkClass: "siteHeader__subNavLink"
                }) : void 0
            },
            render: function() {
                var e = this.isAuthor() ? this.props.author.editProfileUrl : this.props.profileEditUrl;
                return n("ul", {}, void 0, n(p["default"], {}, void 0, n("a", {
                    href: this.props.profileUrl,
                    className: "siteHeader__subNavLink"
                }, void 0, "Profile")), this.renderAuthorDashboardLink(), n(p["default"], {
                    href: this.props.myFriendsUrl,
                    linkText: "Friends",
                    linkClass: "siteHeader__subNavLink"
                }), n(p["default"], {}, void 0, n("a", {
                    href: this.props.myGroupsUrl,
                    className: "siteHeader__subNavLink"
                }, void 0, "Groups", this.renderGroupInvites())), n(p["default"], {
                    href: this.props.discussionsUrl,
                    linkText: "Discussions",
                    linkClass: "siteHeader__subNavLink"
                }), n(p["default"], {
                    href: this.props.commentsUrl,
                    linkText: "Comments",
                    linkClass: "siteHeader__subNavLink"
                }), n(p["default"], {
                    href: this.props.myReadingChallengeUrl,
                    linkText: "Reading Challenge",
                    linkClass: "siteHeader__subNavLink"
                }), n(p["default"], {
                    href: this.props.readingNotesUrl,
                    linkText: "Kindle Notes & Highlights",
                    linkClass: "siteHeader__subNavLink"
                }), n(p["default"], {
                    href: this.props.myQuotesUrl,
                    linkText: "Quotes",
                    linkClass: "siteHeader__subNavLink"
                }), n(p["default"], {
                    href: this.props.editFavGenresUrl,
                    linkText: "Favorite genres",
                    linkClass: "siteHeader__subNavLink"
                }), n(p["default"], {}, void 0, n("a", {
                    href: this.props.myRecsUrl,
                    className: "siteHeader__subNavLink"
                }, void 0, "Friends’ recommendations", this.renderPendingRecs())), n(p["default"], {
                    href: e,
                    linkText: "Account settings",
                    linkClass: "siteHeader__subNavLink u-topGrayBorder"
                }), n(p["default"], {
                    href: this.props.helpUrl,
                    linkText: "Help",
                    linkClass: "siteHeader__subNavLink"
                }), n(p["default"], {
                    href: this.props.signOutUrl,
                    linkText: "Sign out",
                    linkClass: "siteHeader__subNavLink",
                    method: "POST"
                }))
            }
        })
    }, {
        "../gr_component_factory": 107,
        "../menu_link": 144,
        lodash: "lodash",
        react: "react"
    }],
    133: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("../gr_component_factory"),
            a = o(s),
            i = e("../../react_stores/notifications_store"),
            l = o(i),
            u = e("react"),
            d = o(u),
            c = e("reflux"),
            p = o(c),
            f = e("../user/user_icon"),
            h = o(f);
        r["default"] = a["default"].createClass({
            displayName: "ProfileMenuJewel",
            mixins: [p["default"].connect(l["default"], "notificationsStore")],
            propTypes: {
                notificationIconUrl: d["default"].PropTypes.string,
                showNotificationsFlag: d["default"].PropTypes.bool,
                tempFriendRequestCount: d["default"].PropTypes.number,
                tempUnreadMessageCount: d["default"].PropTypes.number,
                user: d["default"].PropTypes.shape({
                    viewableName: d["default"].PropTypes.string.isRequired,
                    profileImage: d["default"].PropTypes.string.isRequired,
                    profileUrl: d["default"].PropTypes.string
                }).isRequired
            },
            getDefaultProps: function() {
                return {
                    showNotificationsFlag: !0,
                    tempFriendRequestCount: 0,
                    tempUnreadMessageCount: 0
                }
            },
            notificationsCountString: function() {
                var e = this.state.notificationsStore;
                return e.unreadCount + this.props.tempFriendRequestCount + this.props.tempUnreadMessageCount + (e.unreadCountMore ? "+" : "")
            },
            render: function() {
                return n("span", {
                    className: "headerPersonalNav__icon"
                }, void 0, this.renderNotificationsCountFlag(), n(h["default"], {
                    user: this.props.user,
                    includeLink: !1
                }))
            },
            renderNotificationsCountFlag: function() {
                return this.props.showNotificationsFlag === !0 && (this.state.notificationsStore.unreadCount > 0 || this.props.tempFriendRequestCount > 0 || this.props.tempUnreadMessageCount > 0) ? n("span", {
                    className: "headerPersonalNav__flag"
                }, void 0, this.notificationsCountString()) : null
            }
        })
    }, {
        "../../react_stores/notifications_store": 249,
        "../gr_component_factory": 107,
        "../user/user_icon": 198,
        react: "react",
        reflux: "reflux"
    }],
    134: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            },
            s = function() {
                var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
                return function(t, r, o, n) {
                    var s = t && t.defaultProps,
                        a = arguments.length - 3;
                    if (r || 0 === a || (r = {}), r && s)
                        for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                    else r || (r = s || {});
                    if (1 === a) r.children = n;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                        r.children = l
                    }
                    return {
                        $$typeof: e,
                        type: t,
                        key: void 0 === o ? null : "" + o,
                        ref: null,
                        props: r,
                        _owner: null
                    }
                }
            }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.JobsListComponent = void 0;
        var a = e("./gr_component_factory"),
            i = o(a),
            l = e("react"),
            u = e("../modules/env_utils"),
            d = o(u),
            c = e("lodash"),
            p = e("react-router/lib/Router"),
            f = o(p),
            h = e("react-router/lib/RouterContext"),
            m = o(h),
            _ = e("react-router/lib/Route"),
            g = o(_),
            v = e("react-router/lib/Link"),
            y = o(v),
            b = e("react-router/lib/browserHistory"),
            k = o(b),
            S = e("react-router/lib/match"),
            P = o(S),
            T = e("classnames"),
            w = o(T),
            N = "/jobs",
            R = "Find your next job",
            M = "Want to be part of creating innovative experiences for the largest community of readers? We’re hiring!",
            C = "Sorry, we do not have any open positions at this time. Please check again soon!",
            x = "Location City",
            A = "Check on a submitted application",
            I = "https://account.amazon.jobs",
            L = [" - Goodreads", ", Goodreads"],
            U = "Back to all jobs",
            E = "Basic Qualifications:",
            O = "Preferred Qualifications:",
            B = "Qualified applicants with criminal histories will be considered in a manner consistent with all applicable local, state and federal laws, including the San Francisco Fair Chance Ordinance.",
            j = "Apply now",
            F = "apply",
            D = "jobsListBody",
            q = r.JobsListComponent = i["default"].createClass({
                displayName: "JobsList",
                getJobs: function() {
                    return this.props.route.jobs
                },
                getSelectedJobData: function() {
                    return this.getJobs() ? this.getJobs()[this.props.location.query.id] : null
                },
                displayableJobTitle: function(e) {
                    var t = e;
                    return L.forEach(function(e) {
                        t = t.replace(e, "")
                    }), t
                },
                renderBackToAllJobsButton: function() {
                    return s(y["default"], {
                        to: N
                    }, void 0, s("span", {
                        className: "gr-hyperlink"
                    }, void 0, U))
                },
                renderHeading: function() {
                    var e = (0, w["default"])(this.withBemModifiers("jobsListHeading__subtitle"), {
                        "jobsListHeading__subtitle--jobSelected": this.getSelectedJobData()
                    });
                    return s("div", {
                        className: "gr-row gr-justify-content-center"
                    }, void 0, s("div", {
                        className: "gr-col gr-col-md-7 gr-col-lg-8"
                    }, void 0, s("h2", {
                        className: "gr-marketingPageH2 jobsListHeading__title"
                    }, void 0, R), s("p", {
                        className: e
                    }, void 0, this.getJobs() ? M : C)))
                },
                renderLocation: function(e) {
                    var t = (0, w["default"])(this.withBemModifiers("jobsListItem__location"), {
                        "jobsListItem__location--jobSelected": this.getSelectedJobData()
                    });
                    return s("div", {
                        className: t
                    }, void 0, e.replace(", USA", ""))
                },
                renderJobItem: function(e) {
                    var t = this.getJobs()[e];
                    return t ? s("div", {
                        id: e,
                        className: "gr-row jobsListItem"
                    }, e, s("div", {
                        className: "gr-col gr-col-md-6 gr-col-lg-7 gr-col-md-offset-1"
                    }, void 0, s(y["default"], {
                        to: N + "?id=" + e
                    }, void 0, s("span", {
                        className: "gr-hyperlink gr-d-block jobsListItem__link"
                    }, void 0, this.displayableJobTitle(t.title))), s("div", {
                        className: "gr-d-block gr-d-md-none"
                    }, void 0, this.renderLocation(t.normalized_location))), s("div", {
                        className: "gr-col gr-col-md-4 gr-col-lg-3 gr-d-none gr-d-md-flex"
                    }, void 0, this.renderLocation(t.normalized_location))) : null
                },
                renderLocationHeading: function() {
                    return s("div", {
                        className: "gr-col gr-col-md-4 gr-col-lg-3 gr-d-none gr-d-md-flex"
                    }, void 0, s("h3", {
                        className: "gr-h3"
                    }, void 0, x))
                },
                renderCategoryHeading: function(e) {
                    var t = Object.keys(this.props.route.categories),
                        r = e === t[0];
                    return s("div", {
                        className: "gr-row"
                    }, void 0, s("div", {
                        className: "gr-col gr-col-md-6 gr-col-lg-7 gr-col-md-offset-1"
                    }, void 0, s("h3", {
                        className: "gr-h3"
                    }, void 0, e)), r && this.renderLocationHeading())
                },
                getJobMarkup: function(e) {
                    return {
                        __html: e
                    }
                },
                renderSelectedJob: function() {
                    var e = this.getSelectedJobData(),
                        t = this.displayableJobTitle(e.title);
                    return s("div", {
                        className: "jobsListSelectedJob"
                    }, void 0, s("h4", {
                        className: "gr-marketingPageH4"
                    }, void 0, t), this.renderLocation(e.normalized_location), s("p", {
                        dangerouslySetInnerHTML: this.getJobMarkup(e.description),
                        className: "jobsListSelectedJob__description"
                    }), s("h5", {
                        className: "gr-marketingPageH5"
                    }, void 0, E), s("div", {
                        dangerouslySetInnerHTML: this.getJobMarkup(e.basic_qualifications),
                        className: "jobsListSelectedJob__basicQuals"
                    }), s("h5", {
                        className: "gr-marketingPageH5"
                    }, void 0, O), s("div", {
                        dangerouslySetInnerHTML: this.getJobMarkup(e.preferred_qualifications),
                        className: "jobsListSelectedJob__preferredQuals"
                    }))
                },
                renderCheckJobApp: function() {
                    var e = (0, w["default"])({
                        "gr-hyperlink": this.getSelectedJobData()
                    }, {
                        "gr-button gr-button--large gr-button--fullWidth gr-button--teal": !this.getSelectedJobData()
                    });
                    return s("a", {
                        href: I,
                        className: e
                    }, void 0, A)
                },
                renderApplicationButtons: function() {
                    var e = this.getSelectedJobData();
                    return s("div", {
                        className: "jobsListSelectedJob__applicationButtons"
                    }, void 0, s("div", {
                        className: "jobsListApplyButton gr-d-md-inline"
                    }, void 0, s("a", {
                        href: "" + I + N + "/" + e.id_icims + "/" + F,
                        className: "gr-button gr-button--large gr-button--teal"
                    }, void 0, j)), s("div", {
                        className: "jobsListCheckJobAppContainer gr-d-md-inline"
                    }, void 0, this.renderCheckJobApp()))
                },
                render: function() {
                    var e = this;
                    if (this.getSelectedJobData()) return s("div", {
                        className: D
                    }, void 0, this.renderHeading(), s("div", {
                        className: "gr-row gr-justify-content-center"
                    }, void 0, s("div", {
                        className: "gr-col gr-col-md-10 gr-col-lg-8"
                    }, void 0, s("div", {
                        className: "jobsListBackToAllJobsContainer--top"
                    }, void 0, this.renderBackToAllJobsButton()), this.renderSelectedJob(), s("div", {
                        className: "jobsListLegalText"
                    }, void 0, B), this.renderApplicationButtons(), s("div", {
                        className: "jobsListBackToAllJobsContainer--bottom"
                    }, void 0, this.renderBackToAllJobsButton()))));
                    var t = (0, w["default"])("gr-row gr-justify-content-center jobsListCheckJobAppContainer--jobList", {
                        "jobsListCheckJobAppContainer--noJobs": !this.getJobs()
                    });
                    return s("div", {
                        className: D
                    }, void 0, this.renderHeading(), (0, c.map)(this.props.route.categories, function(t, r) {
                        return s("div", {
                            className: "jobsListCategory"
                        }, r, e.renderCategoryHeading(r), (0, c.map)(t, function(t) {
                            return e.renderJobItem(t)
                        }))
                    }), s("div", {
                        className: t
                    }, void 0, s("div", {
                        className: "gr-col gr-col-10 gr-col-md-6 gr-col-lg-4"
                    }, void 0, this.renderCheckJobApp())))
                }
            }),
            H = function(e) {
                var t = React.createElement(g["default"], n({
                    path: N + "(?id=*)",
                    component: q,
                    onChange: function() {
                        var e = document.getElementsByClassName(D)[0].parentElement;
                        null !== e && e.scrollIntoView(!0)
                    }
                }, e));
                if (d["default"].domUnavailable()) {
                    var r = void 0,
                        o = N;
                    return e.selectedId && (o += "?id=" + e.selectedId), (0, P["default"])({
                        routes: t,
                        location: o
                    }, function(e, t, o) {
                        r = o
                    }), React.createElement(m["default"], r)
                }
                return s(f["default"], {
                    history: k["default"]
                }, void 0, t)
            };
        H.propTypes = {
            selectedId: l.PropTypes.string,
            categories: l.PropTypes.object,
            jobs: l.PropTypes.object
        }, r["default"] = H
    }, {
        "../modules/env_utils": 13,
        "./gr_component_factory": 107,
        classnames: "classnames",
        lodash: "lodash",
        react: "react",
        "react-router/lib/Link": 267,
        "react-router/lib/Route": 271,
        "react-router/lib/Router": 273,
        "react-router/lib/RouterContext": 274,
        "react-router/lib/browserHistory": 277,
        "react-router/lib/match": 285
    }],
    135: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("../gr_component_factory"),
            l = o(i),
            u = e("../../react_mixins/gr_reflux"),
            d = e("../../react_actions/like_actions"),
            c = o(d),
            p = e("../../react_stores/like_store"),
            f = o(p),
            h = e("../spinner"),
            m = o(h),
            _ = e("classnames"),
            g = o(_);
        r["default"] = l["default"].createClass({
            displayName: "LikeButton",
            mixins: [(0, u.connectToLazyStore)(f["default"], "resourceKey")],
            propTypes: {
                resourceKey: a["default"].PropTypes.string.isRequired,
                resourceLabel: a["default"].PropTypes.string.isRequired,
                showAsLink: a["default"].PropTypes.bool
            },
            getDefaultProps: function() {
                return {
                    showAsLink: !0
                }
            },
            componentDidUpdate: function() {
                this.likeFocused && !this.state.showLoadingSpinner && (this.refs.likeButton.focus(), this.likeFocused = !1)
            },
            buttonClicked: function() {
                this.state.isLiked ? c["default"].unLike(this.props.resourceKey) : c["default"].like(this.props.resourceKey)
            },
            render: function() {
                var e = this,
                    t = this.state.isLiked ? "Unlike" : "Like",
                    r = (0, g["default"])({
                        "gr-buttonAsLink": this.props.showAsLink
                    }, {
                        "gr-button gr-button--small": !this.props.showAsLink
                    });
                return n("span", {
                    "aria-live": "polite"
                }, void 0, this.state.showLoadingSpinner ? n(m["default"], {}) : a["default"].createElement("button", {
                    "aria-label": t + " " + this.props.resourceLabel,
                    ref: "likeButton",
                    className: r,
                    onClick: this.buttonClicked,
                    onFocus: function() {
                        e.likeFocused = !0
                    }
                }, t))
            }
        })
    }, {
        "../../react_actions/like_actions": 37,
        "../../react_mixins/gr_reflux": 231,
        "../../react_stores/like_store": 247,
        "../gr_component_factory": 107,
        "../spinner": 191,
        classnames: "classnames",
        react: "react"
    }],
    136: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("../gr_component_factory"),
            l = o(i),
            u = e("../../react_stores/like_store"),
            d = o(u),
            c = e("../../react_mixins/gr_reflux");
        r["default"] = l["default"].createClass({
            displayName: "LikeCount",
            mixins: [(0, c.connectToLazyStore)(d["default"], "resourceKey")],
            propTypes: {
                resourceKey: a["default"].PropTypes.string.isRequired
            },
            getPluralLike: function(e) {
                return 1 === e ? "like" : "likes"
            },
            render: function() {
                return this.state.likeCount > 0 ? n("span", {}, void 0, n("a", {
                    className: "gr-hyperlink--quiet",
                    href: this.state.likersListUrl
                }, void 0, this.state.likeCount, " ", this.getPluralLike(this.state.likeCount)), " · ") : null
            }
        })
    }, {
        "../../react_mixins/gr_reflux": 231,
        "../../react_stores/like_store": 247,
        "../gr_component_factory": 107,
        react: "react"
    }],
    137: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("lodash"),
            l = o(i),
            u = e("../gr_component_factory"),
            d = o(u),
            c = e("reflux"),
            p = o(c),
            f = e("../../react_stores/like_store"),
            h = o(f);
        r["default"] = d["default"].createClass({
            displayName: "LikeInformation",
            mixins: [p["default"].connectFilter(h["default"], "likeStore", function(e) {
                return e[this.props.resourceKey]
            })],
            propTypes: {
                resourceKey: a["default"].PropTypes.string.isRequired
            },
            getNameLink: function() {
                var e = this.state.likeStore.likedBy,
                    t = l["default"].isUndefined(e.friends) ? e.others[0] : e.friends[0];
                return n("a", {
                    href: t.profile_url,
                    className: "gr-hyperlink gr-hyperlink--bold likeInformation__name"
                }, void 0, t.name)
            },
            getPluralPerson: function(e) {
                return e > 1 ? "people" : "person"
            },
            getYouLikeMessage: function() {
                return n("span", {
                    className: "likeInformation__name"
                }, void 0, "You")
            },
            getYouAndAnotherPersonLikeMessage: function() {
                return n("span", {}, void 0, this.getYouLikeMessage(), " and ", this.getNameLink())
            },
            getYouAndManyPeopleLikeMessage: function() {
                var e = this.state.likeStore,
                    t = e.likeCount - 2;
                return n("span", {}, void 0, this.getYouLikeMessage(), ", ", this.getNameLink(), ",", " and ", n("a", {
                    className: "gr-hyperlink gr-hyperlink--bold",
                    href: e.likersListUrl
                }, void 0, t, " other ", this.getPluralPerson(t)))
            },
            getSomeoneLikeMessage: function() {
                return n("span", {}, void 0, this.getNameLink())
            },
            getManyPeopleLikeMessage: function() {
                var e = this.state.likeStore,
                    t = e.likeCount - 1;
                return n("span", {}, void 0, this.getNameLink(), " and ", n("a", {
                    className: "gr-hyperlink gr-hyperlink--bold",
                    href: e.likersListUrl
                }, void 0, t, " other ", this.getPluralPerson(t)))
            },
            getLikeMessage: function() {
                var e = this.state.likeStore;
                if (e.isLiked) switch (e.likeCount) {
                    case 1:
                        return this.getYouLikeMessage();
                    case 2:
                        return this.getYouAndAnotherPersonLikeMessage();
                    default:
                        return this.getYouAndManyPeopleLikeMessage()
                } else switch (e.likeCount) {
                    case 1:
                        return this.getSomeoneLikeMessage();
                    default:
                        return this.getManyPeopleLikeMessage()
                }
            },
            render: function() {
                var e = this.state.likeStore;
                return !e.isLiked && l["default"].isEmpty(e.likedBy) ? null : n("div", {
                    className: "likeInformation u-defaultType"
                }, void 0, this.getLikeMessage(), " liked this")
            }
        })
    }, {
        "../../react_stores/like_store": 247,
        "../gr_component_factory": 107,
        lodash: "lodash",
        react: "react",
        reflux: "reflux"
    }],
    138: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("../gr_component_factory"),
            l = o(i),
            u = e("./like_count"),
            d = o(u),
            c = e("./like_button"),
            p = o(c);
        r["default"] = l["default"].createClass({
            displayName: "LikeSimpleFooter",
            propTypes: {
                resourceKey: a["default"].PropTypes.string.isRequired,
                resourceLabel: a["default"].PropTypes.string.isRequired,
                isLikeable: a["default"].PropTypes.bool.isRequired,
                showAsLink: a["default"].PropTypes.bool
            },
            render: function() {
                return n("span", {}, void 0, n(d["default"], {
                    resourceKey: this.props.resourceKey
                }), this.props.isLikeable ? n(p["default"], {
                    resourceKey: this.props.resourceKey,
                    resourceLabel: this.props.resourceLabel,
                    showAsLink: this.props.showAsLink
                }) : null)
            }
        })
    }, {
        "../gr_component_factory": 107,
        "./like_button": 135,
        "./like_count": 136,
        react: "react"
    }],
    139: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("../gr_component_factory"),
            a = o(s),
            i = e("react"),
            l = o(i),
            u = 768;
        r["default"] = a["default"].createClass({
            displayName: "AmazonLoginButton",
            getInitialState: function() {
                return {
                    popup: !1
                }
            },
            propTypes: {
                amazonSignInUrl: l["default"].PropTypes.string.isRequired,
                enabled: l["default"].PropTypes.bool,
                fullWidth: l["default"].PropTypes.bool
            },
            getDefaultProps: function() {
                return {
                    enabled: !1,
                    fullWidth: !1
                }
            },
            componentDidMount: function() {
                this.setState({
                    popup: window.innerWidth > u
                })
            },
            handleButtonPress: function() {
                this.state.popup ? window.open(this.props.amazonSignInUrl, "", "width=900,height=540") : window.location.assign(this.props.amazonSignInUrl)
            },
            render: function() {
                return this.props.enabled ? n("button", {
                    className: "gr-button gr-button--amazon gr-button--auth " + (this.props.fullWidth ? "gr-button--fullWidth" : ""),
                    onClick: this.handleButtonPress
                }, void 0, n("div", {
                    className: "gr-mediaFlexbox gr-mediaFlexbox--alignItemsCenter gr-mediaFlexbox--justifyHorizontalContentCenter"
                }, void 0, n("div", {
                    className: "gr-mediaFlexbox__media gr-button--amazon__icon"
                }), n("div", {
                    className: "gr-mediaFlexbox__desc"
                }, void 0, "Continue with Amazon"))) : null
            }
        })
    }, {
        "../gr_component_factory": 107,
        react: "react"
    }],
    140: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("../gr_component_factory"),
            a = o(s),
            i = e("react"),
            l = o(i),
            u = 768;
        r["default"] = a["default"].createClass({
            displayName: "FacebookLoginButton",
            getInitialState: function() {
                return {
                    popup: !1
                }
            },
            propTypes: {
                enabled: l["default"].PropTypes.bool,
                facebookRedirectUrl: l["default"].PropTypes.string.isRequired,
                facebookSignInUrl: l["default"].PropTypes.string.isRequired,
                fullWidth: l["default"].PropTypes.bool
            },
            getDefaultProps: function() {
                return {
                    enabled: !1,
                    fullWidth: !1
                }
            },
            componentDidMount: function() {
                this.setState({
                    popup: window.innerWidth > u
                })
            },
            handleButtonPress: function() {
                this.state.popup && "undefined" != typeof $grfb ? $grfb.login({
                    redirect: this.props.facebookRedirectUrl
                }) : window.location.assign(this.props.facebookSignInUrl)
            },
            render: function() {
                return this.props.enabled && "undefined" != typeof $grfb ? n("button", {
                    className: "gr-button gr-button--facebook gr-button--auth " + (this.props.fullWidth ? "gr-button--fullWidth" : ""),
                    onClick: this.handleButtonPress
                }, void 0, n("div", {
                    className: "gr-mediaFlexbox gr-mediaFlexbox--alignItemsCenter gr-mediaFlexbox--justifyHorizontalContentCenter"
                }, void 0, n("div", {
                    className: "gr-mediaFlexbox__media gr-button--facebook__icon"
                }), n("div", {
                    className: "gr-mediaFlexbox__desc"
                }, void 0, "Continue with Facebook"))) : null
            }
        })
    }, {
        "../gr_component_factory": 107,
        react: "react"
    }],
    141: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("../../login/amazon_login_button"),
            a = o(s),
            i = e("classnames"),
            l = o(i),
            u = e("../../login/facebook_login_button"),
            d = o(u),
            c = e("../../gr_component_factory"),
            p = o(c),
            f = e("../../modal"),
            h = o(f),
            m = e("../../login/register_button"),
            _ = o(m),
            g = e("../../login/service_terms_and_privacy"),
            v = o(g),
            y = e("../../../modules/ajax/ajax_helper");
        r["default"] = p["default"].createClass({
            displayName: "LoginInterstitial",
            propTypes: {
                allowAmazonSignIn: React.PropTypes.bool,
                allowFacebookSignIn: React.PropTypes.bool,
                path: React.PropTypes.shape({
                    signInUrl: React.PropTypes.string.isRequired,
                    signUpUrl: React.PropTypes.string.isRequired,
                    termsUrl: React.PropTypes.string.isRequired,
                    thirdPartyRedirectUrl: React.PropTypes.string.isRequired,
                    privacyUrl: React.PropTypes.string.isRequired
                }).isRequired
            },
            componentDidMount: function() {
                var e = this;
                (0, y.httpGet)("/sign_in_prompt").done(function(t, r) {
                    "success" === r ? e.setState({
                        amazonSignInUrl: t.amazonSignInUrl,
                        deviceType: t.deviceType,
                        facebookSignInUrl: t.facebookSignInUrl,
                        isShown: t.showPrompt === !0
                    }) : "nocontent" === r && e.setState({
                        isShown: !1
                    })
                }).fail(function() {
                    e.setState({
                        isShown: !1
                    })
                })
            },
            getDefaultProps: function() {
                return {
                    allowAmazonSignIn: !1,
                    allowFacebookSignIn: !1
                }
            },
            getInitialState: function() {
                return {
                    isShown: !1
                }
            },
            isResponsive: function() {
                return "mobile" === this.state.deviceType
            },
            onCloseHandler: function() {
                (0, y.httpPost)("/track/track_click", {
                    data: {
                        feature: "LoginInterstitial:dismiss"
                    }
                }), this.state.deviceType && (0, y.httpPost)("/track/track_click", {
                    data: {
                        feature: "LoginInterstitial:" + this.state.deviceType + "::dismiss"
                    }
                })
            },
            showPopUpBook: function() {
                return "desktop" === this.state.deviceType
            },
            renderAmazonLoginButton: function() {
                return this.state.amazonSignInUrl ? n("div", {
                    className: "loginModal__button"
                }, void 0, n(a["default"], {
                    enabled: this.props.allowAmazonSignIn,
                    amazonSignInUrl: this.state.amazonSignInUrl,
                    fullWidth: !0
                })) : void 0
            },
            renderFacebookLoginButton: function() {
                return this.state.facebookSignInUrl ? n("div", {
                    className: "loginModal__button"
                }, void 0, n(d["default"], {
                    enabled: this.props.allowFacebookSignIn,
                    facebookRedirectUrl: this.props.path.thirdPartyRedirectUrl,
                    facebookSignInUrl: this.state.facebookSignInUrl,
                    fullWidth: !0
                })) : void 0
            },
            renderContent: function() {
                var e = (0, l["default"])("loginModal", {
                        "loginModal--responsive": this.isResponsive()
                    }),
                    t = n("div", {
                        className: e
                    }, void 0, this.showPopUpBook() ? "" : n("div", {
                        className: "loginModal__icon",
                        alt: "Goodreads"
                    }), n("div", {
                        className: "loginModal__header"
                    }, void 0, n("h3", {
                        className: "gr-h3 gr-h3--serif gr-h3--noMargin"
                    }, void 0, "Discover & read more")), this.showPopUpBook() ? n("div", {
                        className: "loginModal__popUpBook"
                    }) : "", n("div", {
                        className: "loginModal__body"
                    }, void 0, n("span", {
                        className: "u-defaultType"
                    }, void 0, "Log in to get better recommendations with a free account."), n("div", {
                        className: "loginModal__cta"
                    }, void 0, this.renderFacebookLoginButton(), this.renderAmazonLoginButton(), n("div", {
                        className: "loginModal__button"
                    }, void 0, n(_["default"], {
                        fullWidth: !0,
                        signUpUrl: this.props.path.signUpUrl
                    })), n("span", {
                        className: "u-defaultType"
                    }, void 0, "Already a member?  ", n("a", {
                        href: this.props.path.signInUrl,
                        rel: "nofollow"
                    }, void 0, "Sign in"))), n(v["default"], {
                        termsUrl: this.props.path.termsUrl,
                        privacyUrl: this.props.path.privacyUrl
                    })));
                return t
            },
            render: function() {
                if (this.state.isShown) {
                    var e = n(h["default"], {
                        id: "LoginInterstitial",
                        centered: !0,
                        onCloseHandler: this.onCloseHandler,
                        responsive: this.isResponsive(),
                        showByDefault: !0
                    }, void 0, this.renderContent());
                    return e
                }
                return null
            }
        })
    }, {
        "../../../modules/ajax/ajax_helper": 5,
        "../../gr_component_factory": 107,
        "../../login/amazon_login_button": 139,
        "../../login/facebook_login_button": 140,
        "../../login/register_button": 142,
        "../../login/service_terms_and_privacy": 143,
        "../../modal": 145,
        classnames: "classnames"
    }],
    142: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("../gr_component_factory"),
            a = o(s),
            i = e("react"),
            l = o(i);
        r["default"] = a["default"].createClass({
            displayName: "RegisterButton",
            propTypes: {
                fullWidth: l["default"].PropTypes.bool,
                signUpUrl: l["default"].PropTypes.string.isRequired
            },
            getDefaultProps: function() {
                return {
                    fullWidth: !1
                }
            },
            render: function() {
                var e = n("a", {
                    className: "gr-button gr-button--large " + (this.props.fullWidth ? "gr-button--fullWidth" : ""),
                    href: this.props.signUpUrl
                }, void 0, "Sign up with email");
                return e
            }
        })
    }, {
        "../gr_component_factory": 107,
        react: "react"
    }],
    143: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("../gr_component_factory"),
            a = o(s),
            i = e("react"),
            l = o(i);
        r["default"] = a["default"].createClass({
            displayName: "ServiceTermsAndPrivacy",
            propTypes: {
                privacyUrl: l["default"].PropTypes.string.isRequired,
                termsUrl: l["default"].PropTypes.string.isRequired
            },
            render: function() {
                var e = n("small", {}, void 0, "By clicking “Sign up” I agree to the Goodreads ", n("a", {
                    href: this.props.termsUrl,
                    rel: "nofollow",
                    target: "_blank"
                }, void 0, "Terms of Service"), " and confirm that I am at least 13 years old.  Read our ", n("a", {
                    href: this.props.privacyUrl,
                    rel: "nofollow",
                    target: "_blank"
                }, void 0, "Privacy Policy"));
                return e
            }
        })
    }, {
        "../gr_component_factory": 107,
        react: "react"
    }],
    144: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("./gr_component_factory"),
            l = o(i);
        r["default"] = l["default"].createClass({
            displayName: "MenuLink",
            propTypes: {
                href: a["default"].PropTypes.string,
                linkText: a["default"].PropTypes.any,
                linkClass: a["default"].PropTypes.string,
                method: a["default"].PropTypes.oneOf(["POST", "PUT", "DELETE"])
            },
            render: function() {
                return n("li", {
                    role: "menuitem",
                    className: "menuLink"
                }, void 0, this.props.children ? n("span", {}, void 0, this.props.children) : n("a", {
                    href: this.props.href,
                    className: this.props.linkClass,
                    "data-method": this.props.method
                }, void 0, this.props.linkText))
            }
        })
    }, {
        "./gr_component_factory": 107,
        react: "react"
    }],
    145: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("./gr_component_factory"),
            l = o(i),
            u = e("reflux"),
            d = o(u),
            c = e("classnames"),
            p = o(c),
            f = e("../react_stores/modal_store"),
            h = o(f),
            m = e("../react_actions/modal_actions"),
            _ = o(m),
            g = e("./close_button"),
            v = o(g),
            y = e("../modules/keys"),
            b = o(y),
            k = e("lodash"),
            S = e("../modules/close_button_values");
        r["default"] = l["default"].createClass({
            displayName: "Modal",
            mixins: [d["default"].connect(h["default"], "modalStore")],
            propTypes: {
                asDrawer: a["default"].PropTypes.bool,
                id: a["default"].PropTypes.string.isRequired,
                centered: a["default"].PropTypes.bool,
                showByDefault: a["default"].PropTypes.bool,
                onCloseHandler: a["default"].PropTypes.func,
                onConfirmHandler: a["default"].PropTypes.func,
                lockBodyScroll: a["default"].PropTypes.bool,
                responsive: a["default"].PropTypes.bool
            },
            getCloseButtonVariant: function() {
                return this.props.asDrawer ? S.VARIANTS.DARK_BG : S.VARIANTS.DEFAULT
            },
            getDefaultProps: function() {
                return {
                    asDrawer: !1,
                    centered: !1,
                    showByDefault: !1,
                    lockBodyScroll: !0,
                    responsive: !1
                }
            },
            componentDidMount: function() {
                this.props.showByDefault && _["default"].openModal(this.props.id)
            },
            componentDidUpdate: function() {
                this.updateBodyScrollability()
            },
            updateBodyScrollability: function() {
                this.props.lockBodyScroll && this.isActive() ? document.body.classList.add("modalOpened") : this.state.modalStore.currentActiveModal || document.body.classList.remove("modalOpened")
            },
            hide: function() {
                _["default"].closeModal(), this.props.onCloseHandler && (0, k.isFunction)(this.props.onCloseHandler) && this.props.onCloseHandler()
            },
            isActive: function() {
                return this.state.modalStore.currentActiveModal === this.props.id
            },
            hideOnOverlayClick: function(e) {
                e.target.className.indexOf("modal--overlay") > -1 && this.hide()
            },
            hideOnEscape: function(e) {
                b["default"].isDefaultCloserKey(e.keyCode) && this.hide()
            },
            handleConfirm: function() {
                this.props.onConfirmHandler && this.props.onConfirmHandler(), this.hide()
            },
            renderConfirmButtons: function() {
                return n("div", {
                    className: "modal__confirmButtonsContainer"
                }, void 0, n("button", {
                    className: "gr-button gr-button--large gr-button--dark u-marginRightMedium",
                    "data-testid": "confirm",
                    onClick: this.handleConfirm,
                    type: "button"
                }, void 0, "Confirm"), n("button", {
                    className: "gr-button gr-button--large",
                    "data-testid": "cancel",
                    onClick: this.hide,
                    type: "button"
                }, void 0, "Cancel"))
            },
            render: function() {
                var e = (0, p["default"])("modal", "modal--overlay", {
                    "modal--show": this.isActive() && !this.props.centered,
                    "modal--centered": this.isActive() && this.props.centered,
                    "modal--drawer": this.props.asDrawer && !this.props.responsive,
                    "modal--responsive": this.props.responsive
                });
                return a["default"].createElement("div", {
                    className: e,
                    ref: "modalContent",
                    tabIndex: "0",
                    onClick: this.hideOnOverlayClick,
                    onKeyDown: this.hideOnEscape
                }, this.renderContents())
            },
            renderContents: function() {
                return this.props.asDrawer ? n("div", {}, void 0, n("div", {
                    className: "modal__close"
                }, void 0, n(v["default"], {
                    action: this.hide,
                    variant: this.getCloseButtonVariant()
                })), n("div", {
                    className: this.withBemModifiers("modal__content")
                }, void 0, this.props.children)) : n("div", {
                    className: this.withBemModifiers("modal__content")
                }, void 0, n("div", {
                    className: "modal__close"
                }, void 0, n(v["default"], {
                    action: this.hide,
                    variant: this.getCloseButtonVariant()
                })), this.props.children, this.props.onConfirmHandler && this.renderConfirmButtons())
            }
        })
    }, {
        "../modules/close_button_values": 9,
        "../modules/keys": 16,
        "../react_actions/modal_actions": 38,
        "../react_stores/modal_store": 248,
        "./close_button": 82,
        "./gr_component_factory": 107,
        classnames: "classnames",
        lodash: "lodash",
        react: "react",
        reflux: "reflux"
    }],
    146: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("./gr_component_factory"),
            a = o(s),
            i = e("../react_actions/modal_actions"),
            l = o(i),
            u = e("../react_stores/modal_store"),
            d = o(u),
            c = e("react"),
            p = o(c),
            f = e("reflux"),
            h = o(f);
        r["default"] = a["default"].createClass({
            displayName: "ModalTrigger",
            mixins: [h["default"].connect(d["default"], "modalStore")],
            propTypes: {
                id: p["default"].PropTypes.string.isRequired,
                clickHandler: p["default"].PropTypes.func
            },
            isActive: function() {
                return this.state.modalStore.currentActiveModal === this.props.id
            },
            openModal: function() {
                this.props.clickHandler && this.props.clickHandler(), l["default"].openModal(this.props.id)
            },
            render: function() {
                return n("a", {
                    className: this.withBemModifiers("modalTrigger"),
                    onClick: this.openModal,
                    role: "button",
                    "aria-expanded": this.isActive(),
                    "aria-haspopup": !0
                }, void 0, this.props.children)
            }
        })
    }, {
        "../react_actions/modal_actions": 38,
        "../react_stores/modal_store": 248,
        "./gr_component_factory": 107,
        react: "react",
        reflux: "reflux"
    }],
    147: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("./gr_component_factory"),
            a = o(s),
            i = e("react"),
            l = o(i);
        r["default"] = a["default"].createClass({
            displayName: "PageSkin",
            propTypes: {
                imageUrl: l["default"].PropTypes.string,
                backgroundColor: l["default"].PropTypes.string
            },
            render: function() {
                var e = {};
                return this.props.imageUrl && (e.backgroundImage = "url(" + this.props.imageUrl + ")", e.backgroundRepeat = "no-repeat", e.backgroundPosition = "center top"), this.props.backgroundColor && (e.backgroundColor = this.props.backgroundColor), n("div", {
                    className: "pageskin",
                    style: e
                })
            }
        })
    }, {
        "./gr_component_factory": 107,
        react: "react"
    }],
    148: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("lodash"),
            l = o(i),
            u = e("classnames"),
            d = o(u),
            c = e("./gr_component_factory"),
            p = o(c),
            f = e("./pagination_single_page_link"),
            h = o(f),
            m = e("./shared/gr_prop_types"),
            _ = o(m);
        r["default"] = p["default"].createClass({
            displayName: "PaginationLinks",
            propTypes: {
                asButtons: a["default"].PropTypes.bool,
                totalSize: _["default"].naturalNumber.isRequired,
                currentPageNumber: a["default"].PropTypes.number.isRequired,
                className: a["default"].PropTypes.string,
                perPage: _["default"].naturalNumber.isRequired,
                changePageAction: a["default"].PropTypes.func.isRequired
            },
            getDefaultProps: function() {
                return {
                    asButtons: !1
                }
            },
            maxPageNumber: function() {
                return Math.ceil(this.props.totalSize / this.props.perPage)
            },
            renderLinkToPage: function(e) {
                return n(h["default"], {
                    pageNumber: e,
                    currentPageNumber: this.props.currentPageNumber,
                    changePageAction: this.props.changePageAction
                }, e)
            },
            renderPageLinks: function() {
                var e = this,
                    t = this.maxPageNumber();
                return 1 !== t ? 6 >= t ? n("span", {
                    className: "gr-paginationLinks__pageLinksWrapper"
                }, void 0, l["default"].times(t, function(t) {
                    return e.renderLinkToPage(t + 1)
                })) : this.props.currentPageNumber <= 3 ? n("span", {
                    className: "gr-paginationLinks__pageLinksWrapper"
                }, void 0, l["default"].times(4, function(t) {
                    return e.renderLinkToPage(t + 1)
                }), "…", this.renderLinkToPage(this.maxPageNumber())) : this.props.currentPageNumber >= this.maxPageNumber() - 3 ? n("span", {
                    className: "gr-paginationLinks__pageLinksWrapper"
                }, void 0, this.renderLinkToPage(1), "…", this.renderLinkToPage(this.maxPageNumber() - 3), this.renderLinkToPage(this.maxPageNumber() - 2), this.renderLinkToPage(this.maxPageNumber() - 1), this.renderLinkToPage(this.maxPageNumber())) : n("span", {
                    className: "gr-paginationLinks__pageLinksWrapper"
                }, void 0, this.renderLinkToPage(1), "…", this.renderLinkToPage(this.props.currentPageNumber), this.renderLinkToPage(this.props.currentPageNumber + 1), this.renderLinkToPage(this.props.currentPageNumber + 2), "…", this.renderLinkToPage(this.maxPageNumber())) : void 0
            },
            renderPrevLink: function() {
                if (1 === this.maxPageNumber()) return null;
                var e = (0, d["default"])({
                    "gr-paginationLinks__previousLink": !this.props.asButtons,
                    "gr-paginationLinks__previousButton": this.props.asButtons,
                    "gr-button": this.props.asButtons,
                    "gr-button--large": this.props.asButtons
                });
                return n("button", {
                    "aria-label": "Previous page",
                    className: e,
                    onClick: this.moveToPrevPage,
                    disabled: 1 === this.props.currentPageNumber
                }, void 0, "← Previous")
            },
            renderNextLink: function() {
                if (1 === this.maxPageNumber()) return null;
                var e = (0, d["default"])({
                    "gr-paginationLinks__nextLink": !this.props.asButtons,
                    "gr-paginationLinks__nextButton": this.props.asButtons,
                    "gr-button": this.props.asButtons,
                    "gr-button--large": this.props.asButtons
                });
                return n("button", {
                    "aria-label": "Next page",
                    className: e,
                    onClick: this.moveToNextPage,
                    disabled: this.props.currentPageNumber === this.maxPageNumber()
                }, void 0, "Next →")
            },
            moveToNextPage: function(e) {
                e.preventDefault(), this.props.changePageAction(this.props.currentPageNumber + 1)
            },
            moveToPrevPage: function(e) {
                e.preventDefault(), this.props.changePageAction(this.props.currentPageNumber - 1)
            },
            render: function() {
                var e = (0, d["default"])("gr-paginationLinks", {
                    "gr-paginationLinks--asButtons": this.props.asButtons
                }, this.props.className);
                return n("div", {
                    className: e
                }, void 0, n("span", {
                    className: "gr-paginationLinks__previousLinkWrapper"
                }, void 0, this.renderPrevLink()), this.renderPageLinks(), n("span", {
                    className: "gr-paginationLinks__nextLinkWrapper"
                }, void 0, this.renderNextLink()))
            }
        })
    }, {
        "./gr_component_factory": 107,
        "./pagination_single_page_link": 149,
        "./shared/gr_prop_types": 176,
        classnames: "classnames",
        lodash: "lodash",
        react: "react"
    }],
    149: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("./gr_component_factory"),
            l = o(i);
        r["default"] = l["default"].createClass({
            displayName: "PaginationSinglePageLink",
            propTypes: {
                pageNumber: a["default"].PropTypes.number,
                currentPageNumber: a["default"].PropTypes.number,
                changePageAction: a["default"].PropTypes.func.isRequired
            },
            render: function() {
                return this.props.pageNumber === this.props.currentPageNumber ? n("span", {
                    "aria-label": this.props.pageNumber + " current page",
                    className: "gr-paginationLinks__pageNumLink\n                         gr-paginationLinks__pageNumLink--selected"
                }, void 0, this.props.pageNumber) : n("button", {
                    className: "gr-paginationLinks__pageNumLink",
                    onClick: this.jumpToPage
                }, void 0, this.props.pageNumber)
            },
            jumpToPage: function(e) {
                e.preventDefault(), this.props.changePageAction(this.props.pageNumber)
            }
        })
    }, {
        "./gr_component_factory": 107,
        react: "react"
    }],
    150: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.shouldDisplayPreviewBookButton = void 0;
        var s = e("reflux"),
            a = o(s),
            i = e("../gr_component_factory"),
            l = o(i),
            u = e("../shared/gr_prop_types"),
            d = o(u),
            c = e("../modal"),
            p = o(c),
            f = e("../modal_trigger"),
            h = o(f),
            m = e("../../react_stores/modal_store"),
            _ = o(m),
            g = e("../../react_actions/newsfeed_actions"),
            v = o(g),
            y = e("./report_wrong_book_button"),
            b = o(y),
            k = e("./report_wrong_book_form"),
            S = o(k),
            P = e("./wrong_book_report_acknowledgment"),
            T = o(P),
            w = e("../../react_stores/user_agent_capabilities_store"),
            N = o(w),
            R = e("../../modules/ads/click_tracking_helper"),
            M = r.shouldDisplayPreviewBookButton = function(e, t) {
                return t && t.touch === !0 ? !1 : !!e.kcrPreviewUrl
            };
        r["default"] = l["default"].createClass({
            displayName: "PreviewBook",
            mixins: [a["default"].connect(_["default"], "modalStore"), a["default"].connect(N["default"], "userAgentCapabilities")],
            propTypes: {
                book: d["default"].book().isRequired
            },
            getDefaultProps: function() {
                return {
                    trackingOptions: R.TRACKED_CLASSES.preview_book
                }
            },
            getInitialState: function() {
                return {
                    previewViewed: !1,
                    uniqueId: Math.random(1e6)
                }
            },
            getReportWrongBookModalId: function() {
                return "report-" + this.props.book.kcrPreviewUrl + this.state.uniqueId
            },
            getPreviewModalId: function() {
                return this.props.book.kcrPreviewUrl + this.state.uniqueId
            },
            getAcknowledgmentModalId: function() {
                return "acknowledge-" + this.props.book.kcrPreviewUrl + this.state.uniqueId
            },
            openBookPreview: function() {
                v["default"].previewBook(), this.setState({
                    previewViewed: !0
                })
            },
            render: function() {
                var e = null,
                    t = null,
                    r = null,
                    o = this.getPreviewModalId(),
                    s = this.getReportWrongBookModalId(),
                    a = this.getAcknowledgmentModalId();
                return this.state.modalStore.currentActiveModal === o && (e = n("div", {
                    className: "previewBook__container"
                }, void 0, n("div", {
                    className: "previewBook__topBanner"
                }, void 0, n("div", {
                    className: "previewBook__headerText"
                }, void 0, "Preview - ", n("cite", {}, void 0, this.props.book.title)), n(b["default"], {
                    book: this.props.book,
                    modalId: s
                })), n("iframe", {
                    className: "previewBook__kcrPreview",
                    src: this.props.book.kcrPreviewUrl
                }))), this.state.previewViewed && (t = n(S["default"], {
                    book: this.props.book,
                    modalId: s,
                    acknowledgmentModalId: a
                }), r = n(T["default"], {
                    modalId: a
                })), M(this.props.book, this.state.userAgentCapabilities) ? n("span", {
                    className: "previewBook"
                }, void 0, n(h["default"], {
                    id: o
                }, void 0, n("button", {
                    "aria-label": "Preview " + this.props.book.title,
                    className: "gr-buttonAsLink\n                             previewBook__openPreview",
                    onClick: this.openBookPreview
                }, void 0, "Preview Book")), t, r, n(p["default"], {
                    id: o,
                    bemModifiers: "preview"
                }, void 0, e)) : null
            }
        })
    }, {
        "../../modules/ads/click_tracking_helper": 3,
        "../../react_actions/newsfeed_actions": 39,
        "../../react_stores/modal_store": 248,
        "../../react_stores/user_agent_capabilities_store": 257,
        "../gr_component_factory": 107,
        "../modal": 145,
        "../modal_trigger": 146,
        "../shared/gr_prop_types": 176,
        "./report_wrong_book_button": 151,
        "./report_wrong_book_form": 152,
        "./wrong_book_report_acknowledgment": 153,
        reflux: "reflux"
    }],
    151: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("../gr_component_factory"),
            l = o(i),
            u = e("../shared/gr_prop_types"),
            d = o(u),
            c = e("../modal_trigger"),
            p = o(c);
        r["default"] = l["default"].createClass({
            displayName: "ReportWrongBookButton",
            propTypes: {
                book: d["default"].book().isRequired,
                modalId: a["default"].PropTypes.string.isRequired
            },
            render: function() {
                return n("div", {
                    className: "previewBook__reportWrongBookButtonContainer"
                }, void 0, n(p["default"], {
                    id: this.props.modalId
                }, void 0, n("button", {
                    "aria-label": "This is not the right book.",
                    className: "gr-buttonAsLink\n                               previewBook__reportWrongBookButton"
                }, void 0, "Not the book you’re looking for?")))
            }
        })
    }, {
        "../gr_component_factory": 107,
        "../modal_trigger": 146,
        "../shared/gr_prop_types": 176,
        react: "react"
    }],
    152: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("../gr_component_factory"),
            l = o(i),
            u = e("../shared/gr_prop_types"),
            d = o(u),
            c = e("../modal"),
            p = o(c),
            f = e("../../react_actions/modal_actions"),
            h = o(f),
            m = e("lodash"),
            _ = o(m),
            g = {
                wrongBook: "It’s the wrong book",
                wrongEdition: "It’s the wrong edition",
                other: "Other"
            };
        r["default"] = l["default"].createClass({
            displayName: "ReportWrongBookForm",
            propTypes: {
                book: d["default"].book().isRequired,
                modalId: a["default"].PropTypes.string.isRequired,
                acknowledgmentModalId: a["default"].PropTypes.string.isRequired
            },
            getAuthorString: function() {
                return "by " + this.props.book.authorName
            },
            showReportAcknowledgement: function() {
                h["default"].openModal(this.props.acknowledgmentModalId)
            },
            closeModal: function(e) {
                e.preventDefault(), h["default"].closeModal()
            },
            renderWrongBookForm: function() {
                var e = [];
                return _["default"].forEach(g, function(t, r) {
                    e.push(n("option", {
                        value: r
                    }, r, t))
                }), n("form", {
                    className: "previewBook__reportWrongBookForm",
                    action: "/kindle_book_mapping_flags",
                    "data-remote": "true",
                    method: "post"
                }, void 0, "We’d love your help. Let us know what’s wrong with this preview of ", n("cite", {}, void 0, this.props.book.title), this.props.book.authorName ? this.getAuthorString() : "", ".", n("br", {}), n("input", {
                    type: "hidden",
                    name: "kindle_book_mapping_flag[book_id]",
                    value: this.props.book.bookId
                }), n("div", {
                    className: "gr-formInputContainer"
                }, void 0, n("label", {
                    className: "gr-label",
                    htmlFor: "kindle_book_mapping_flag_reason"
                }, void 0, "Problem"), n("select", {
                    name: "kindle_book_mapping_flag[reason]",
                    id: "kindle_book_mapping_flag_reason"
                }, void 0, e)), n("div", {
                    className: "gr-formInputContainer"
                }, void 0, n("label", {
                    className: "gr-label",
                    htmlFor: "kindle_book_mapping_flag_other_reason"
                }, void 0, "Details (if other)"), n("input", {
                    name: "kindle_book_mapping_flag[other_reason]",
                    id: "kindle_book_mapping_flag_other_reason"
                })), n("button", {
                    className: "gr-button gr-button--modalPrimaryLeft",
                    type: "submit",
                    onClick: this.showReportAcknowledgement
                }, void 0, "Report Problem"), n("button", {
                    className: "gr-buttonAsLink",
                    onClick: this.closeModal,
                    type: "button"
                }, void 0, "Cancel"))
            },
            render: function() {
                return n(p["default"], {
                    id: this.props.modalId
                }, void 0, n("h2", {}, void 0, "See a Problem?"), this.renderWrongBookForm())
            }
        })
    }, {
        "../../react_actions/modal_actions": 38,
        "../gr_component_factory": 107,
        "../modal": 145,
        "../shared/gr_prop_types": 176,
        lodash: "lodash",
        react: "react"
    }],
    153: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("../gr_component_factory"),
            l = o(i),
            u = e("../modal"),
            d = o(u),
            c = e("../../react_actions/modal_actions"),
            p = o(c);
        r["default"] = l["default"].createClass({
            displayName: "WrongBookReportAcknowledgment",
            propTypes: {
                modalId: a["default"].PropTypes.string.isRequired
            },
            render: function() {
                return n("div", {
                    className: "previewBook__wrongBookReportAcknowledgment"
                }, void 0, n(d["default"], {
                    id: this.props.modalId
                }, void 0, "Thanks for telling us about the problem.", n("div", {}, void 0, n("button", {
                    className: "gr-button",
                    onClick: p["default"].closeModal
                }, void 0, "Close"))))
            }
        })
    }, {
        "../../react_actions/modal_actions": 38,
        "../gr_component_factory": 107,
        "../modal": 145,
        react: "react"
    }],
    154: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function n(e) {
            if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                return r
            }
            return Array.from(e)
        }

        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var l = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, r, o) {
                return r && e(t.prototype, r), o && e(t, o), t
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var u = e("react"),
            d = e("./qualtrics_survey_modal"),
            c = o(d),
            p = function(e) {
                function t(e) {
                    s(this, t);
                    var r = a(this, Object.getPrototypeOf(t).call(this, e));
                    return r.state = {
                        renderModal: !1
                    }, r.handleWTR = r.handleWTR.bind(r), r
                }
                return i(t, e), l(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this,
                            t = document.getElementById(this.props.buttonId);
                        if (!t) return null;
                        var r = t.querySelectorAll("button.wtrExclusiveShelf[value='to-read'], button.wtrToRead[type='submit']");
                        [].concat(n(r)).forEach(function(t) {
                            return t.addEventListener("click", e.handleWTR)
                        })
                    }
                }, {
                    key: "handleWTR",
                    value: function() {
                        var e = this;
                        this.state.renderModal || setTimeout(function() {
                            return e.setState({
                                renderModal: !0
                            })
                        }, 2500)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.state.renderModal ? React.createElement(c["default"], this.props) : null
                    }
                }]), t
            }(u.Component);
        r["default"] = p, p.propTypes = {
            buttonId: u.PropTypes.string.isRequired
        }
    }, {
        "./qualtrics_survey_modal": 156,
        react: "react"
    }],
    155: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("react"),
            s = e("./book_show_survey_modal"),
            a = o(s),
            i = e("./qualtrics_survey_modal"),
            l = o(i),
            u = {
                signed_in_book_show: a["default"]
            },
            d = function(e) {
                var t = u[e.type] || l["default"];
                return React.createElement(t, e)
            };
        d.propTypes = {
            type: n.PropTypes.oneOf(Object.keys(u))
        }, r["default"] = d
    }, {
        "./book_show_survey_modal": 154,
        "./qualtrics_survey_modal": 156,
        react: "react"
    }],
    156: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var i = function() {
                var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
                return function(t, r, o, n) {
                    var s = t && t.defaultProps,
                        a = arguments.length - 3;
                    if (r || 0 === a || (r = {}), r && s)
                        for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                    else r || (r = s || {});
                    if (1 === a) r.children = n;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                        r.children = l
                    }
                    return {
                        $$typeof: e,
                        type: t,
                        key: void 0 === o ? null : "" + o,
                        ref: null,
                        props: r,
                        _owner: null
                    }
                }
            }(),
            l = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var o = t[r];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, r, o) {
                    return r && e(t.prototype, r), o && e(t, o), t
                }
            }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.QUALTRICS_COOKIE = void 0;
        var u = e("react"),
            d = e("../modal"),
            c = o(d),
            p = e("../shared/cookies"),
            f = o(p),
            h = e("../../modules/ajax/ajax_helper"),
            m = r.QUALTRICS_COOKIE = "hide_qualtrics_survey",
            _ = function(e) {
                function t(e) {
                    n(this, t);
                    var r = s(this, Object.getPrototypeOf(t).call(this, e));
                    return r.state = {
                        isShown: !1
                    }, r
                }
                return a(t, e), l(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this.shouldShow();
                        e && ((0, h.httpPost)("/track/track", {
                            data: {
                                tid: "QualtricsSurveyModal:" + (this.props.type || "default")
                            }
                        }), this.setState({
                            isShown: e
                        }))
                    }
                }, {
                    key: "shouldShow",
                    value: function() {
                        return f["default"].get(m) ? !1 : this.props.signedOut ? !!f["default"].get("never_show_interstitial") : !0
                    }
                }, {
                    key: "onCloseHandler",
                    value: function() {
                        f["default"].set(m, !0, 90)
                    }
                }, {
                    key: "renderSurvey",
                    value: function() {
                        return i("div", {
                            className: "qualtricsSurvey"
                        }, void 0, i("iframe", {
                            className: "qualtricsSurvey__iframe",
                            src: this.props.qualtricsUrl
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.state.isShown ? i(c["default"], {
                            id: "QualtricsSurveyModal",
                            showByDefault: !0,
                            onCloseHandler: this.onCloseHandler
                        }, void 0, this.renderSurvey()) : null
                    }
                }]), t
            }(u.Component);
        _.propTypes = {
            signedOut: u.PropTypes.bool.isRequired,
            qualtricsUrl: u.PropTypes.string.isRequired,
            type: u.PropTypes.string
        }, r["default"] = _
    }, {
        "../../modules/ajax/ajax_helper": 5,
        "../modal": 145,
        "../shared/cookies": 175,
        react: "react"
    }],
    157: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("../shared/gr_prop_types"),
            a = o(s),
            i = function(e) {
                return e.noSharedAnnotations ? n("div", {}, void 0, n("div", {
                    className: "annotatedBookItem__bookInfo__knhCta annotatedBookItem__bookInfo__knhCta--noneVisible"
                }, void 0, e.knhCta)) : n("div", {}, void 0, n("div", {
                    className: "annotatedBookItem__bookInfo__knhCta"
                }, void 0, e.knhCta))
            },
            l = function(e) {
                return n("div", {
                    className: "annotatedBookItem"
                }, void 0, n("a", {
                    className: "annotatedBookItem__knhLink",
                    href: e.annotatedBookData.readingNotesUrl
                }, void 0, n("div", {
                    className: "annotatedBookItem__box gr-row"
                }, void 0, n("div", {
                    className: "annotatedBookItem__imageColumn gr-col-12 gr-col-lg-auto"
                }, void 0, n("img", {
                    src: e.annotatedBookData.imageUrl
                })), n("div", {
                    className: "annotatedBookItem__mainColumn gr-col-12 gr-col-lg-auto"
                }, void 0, n("div", {
                    className: "annotatedBookItem__bookInfo"
                }, void 0, n("div", {
                    className: "annotatedBookItem__bookInfo__bookTitle"
                }, void 0, e.annotatedBookData.title), n("div", {
                    className: "annotatedBookItem__bookInfo__bookAuthor"
                }, void 0, "By ", e.annotatedBookData.authorName), i(e.annotatedBookData))))))
            };
        l.propTypes = {
            annotatedBookData: a["default"].readingNotesAnnotatedBookItem().isRequired
        }, r["default"] = l
    }, {
        "../shared/gr_prop_types": 176
    }],
    158: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("../gr_component_factory"),
            a = o(s),
            i = e("react"),
            l = e("../shared/gr_prop_types"),
            u = o(l),
            d = e("./reading_notes_header"),
            c = o(d),
            p = e("./annotated_books_page"),
            f = o(p);
        r["default"] = a["default"].createClass({
            displayName: "AnnotatedBooksLandingPage",
            propTypes: {
                user: u["default"].user().isRequired,
                viewerIsOwner: i.PropTypes.bool.isRequired,
                canViewProfile: i.PropTypes.bool.isRequired,
                ownerHasLinkedAmazonAccount: i.PropTypes.bool.isRequired,
                headline: i.PropTypes.string.isRequired,
                createLinking: i.PropTypes.string,
                updateLinking: i.PropTypes.string,
                learnMore: i.PropTypes.string,
                contactUs: i.PropTypes.string,
                isSignedIn: React.PropTypes.bool.isRequired,
                signInRedirectUrl: React.PropTypes.string.isRequired
            },
            renderView: function() {
                return n("div", {}, void 0, n(c["default"], {
                    user: this.props.user,
                    headline: this.props.headline,
                    isSignedIn: this.props.isSignedIn,
                    signInRedirectUrl: this.props.signInRedirectUrl,
                    viewerIsOwner: this.props.viewerIsOwner
                }), n(f["default"], {
                    user: this.props.user,
                    viewerIsOwner: this.props.viewerIsOwner,
                    canViewProfile: this.props.canViewProfile,
                    ownerHasLinkedAmazonAccount: this.props.ownerHasLinkedAmazonAccount,
                    createLinking: this.props.createLinking,
                    updateLinking: this.props.updateLinking,
                    learnMore: this.props.learnMore,
                    contactUs: this.props.contactUs
                }))
            },
            render: function() {
                return n("div", {
                    className: "gr-annotatedBooksPage"
                }, void 0, this.renderView())
            }
        })
    }, {
        "../gr_component_factory": 107,
        "../shared/gr_prop_types": 176,
        "./annotated_books_page": 160,
        "./reading_notes_header": 162,
        react: "react"
    }],
    159: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("../gr_component_factory"),
            a = o(s),
            i = e("react"),
            l = e("lodash"),
            u = e("./annotated_book_item"),
            d = o(u);
        r["default"] = a["default"].createClass({
            displayName: "AnnotatedBooksList",
            propTypes: {
                annotatedBooksCollection: i.PropTypes.array.isRequired
            },
            render: function() {
                return n("div", {
                    className: "annotatedBooksList"
                }, void 0, (0, l.map)(this.props.annotatedBooksCollection, function(e) {
                    return n(d["default"], {
                        annotatedBookData: e
                    }, e.asin)
                }))
            }
        })
    }, {
        "../gr_component_factory": 107,
        "./annotated_book_item": 157,
        lodash: "lodash",
        react: "react"
    }],
    160: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("../gr_component_factory"),
            a = o(s),
            i = e("react"),
            l = e("../shared/gr_prop_types"),
            u = o(l),
            d = e("reflux"),
            c = o(d),
            p = e("lodash"),
            f = e("../../modules/reading_notes/reading_notes_helper"),
            h = e("./annotated_books_list"),
            m = o(h),
            _ = e("../flash_message"),
            g = o(_),
            v = e("../../react_actions/reading_notes/annotated_books_actions"),
            y = o(v),
            b = e("../../react_stores/reading_notes/annotated_books_store"),
            k = o(b),
            S = e("../spinner"),
            P = o(S);
        r["default"] = a["default"].createClass({
            displayName: "AnnotatedBooksPage",
            mixins: [c["default"].connect(k["default"], "annotatedBooksStore")],
            propTypes: {
                user: u["default"].user().isRequired,
                viewerIsOwner: i.PropTypes.bool.isRequired,
                canViewProfile: i.PropTypes.bool.isRequired,
                ownerHasLinkedAmazonAccount: i.PropTypes.bool.isRequired,
                createLinking: i.PropTypes.string,
                updateLinking: i.PropTypes.string,
                learnMore: i.PropTypes.string,
                contactUs: i.PropTypes.string
            },
            createLinkHandler: function() {
                window.open(this.props.createLinking, "", "width=900, height=540")
            },
            loadAnnotatedBooksHandler: function() {
                y["default"].loadAnnotatedBooks(this.props.user.id)
            },
            componentWillMount: function() {
                this.props.ownerHasLinkedAmazonAccount && y["default"].loadAnnotatedBooks(this.props.user.id)
            },
            render: function() {
                var e = this.state.annotatedBooksStore,
                    t = void 0;
                return t = this.props.viewerIsOwner ? this.props.ownerHasLinkedAmazonAccount ? (0, p.isEmpty)(e.annotatedBooksCollection) ? e.showSpinner ? this.renderLoadingView() : this.renderEmptyOwnerView() : this.renderOwnerCollection() : this.renderUnlinkedView() : this.props.canViewProfile && this.props.ownerHasLinkedAmazonAccount ? (0, p.isEmpty)(e.annotatedBooksCollection) ? e.showSpinner ? this.renderLoadingView() : this.renderEmptyVisitorView() : this.renderVisitorCollection() : this.renderEmptyVisitorView(),
                    n("div", {
                        className: "annotatedBooksPage"
                    }, void 0, e.showError ? n(g["default"], {
                        category: "error",
                        message: f.BOOK_LOAD_ERROR_MSG
                    }) : null, t)
            },
            renderLoadingView: function() {
                return n("div", {
                    className: "annotatedBooksPage__loading"
                }, void 0, n(P["default"], {}))
            },
            renderUnlinkedView: function() {
                return n("div", {
                    className: "annotatedBooksPage__unlinked"
                }, void 0, n("div", {
                    className: "annotatedBooksPage__unlinked__gkLogo"
                }), n("p", {
                    className: "annotatedBooksPage__unlinked__description"
                }, void 0, "Link your Goodreads and Amazon accounts to access your Kindle notes and highlights on Goodreads."), n("p", {
                    className: "annotatedBooksPage__unlinked__learnMore"
                }, void 0, n("a", {
                    href: this.props.learnMore
                }, void 0, "Learn More about Kindle Notes & Highlights")), n("div", {
                    className: "annotatedBooksPage__unlinked__linkBtn"
                }, void 0, n("button", {
                    className: "gr-button gr-button--dark gr-button--fullWidth",
                    onClick: this.createLinkHandler
                }, void 0, "Connect your accounts")))
            },
            renderEmptyOwnerView: function() {
                return n("div", {
                    className: "annotatedBooksPage__empty"
                }, void 0, n("div", {
                    className: "annotatedBooksPage__empty__description"
                }, void 0, "It looks like you don’t have any Kindle ebooks with notes or highlights.", n("a", {
                    className: "annotatedBooksPage__empty__description__link",
                    href: this.props.learnMore
                }, void 0, "Learn More"), "about Kindle Notes & Highlights and", n("a", {
                    className: "annotatedBooksPage__empty__description__link",
                    href: this.props.contactUs
                }, void 0, "contact us"), "if you have any questions."), n("div", {
                    className: "annotatedBooksPage__empty__content"
                }, void 0, n("div", {
                    className: "annotatedBooksPage__empty__gkLogo"
                }), n("p", {
                    className: "annotatedBooksPage__emptyOwner__status"
                }, void 0, "Your Goodreads account is connected to your Amazon account."), n("div", {
                    className: "annotatedBooksPage__empty__updateLink"
                }, void 0, n("a", {
                    href: this.props.updateLinking
                }, void 0, "Update account linking"))))
            },
            renderEmptyVisitorView: function() {
                return n("div", {
                    className: "annotatedBooksPage__empty"
                }, void 0, n("div", {
                    className: "annotatedBooksPage__empty__description"
                }, void 0, this.props.user.firstName, " has not posted any Kindle Notes & Highlights yet.", n("a", {
                    className: "annotatedBooksPage__empty__description__link",
                    href: this.props.learnMore
                }, void 0, "Learn More about Kindle Notes & Highlights")))
            },
            renderOwnerCollection: function() {
                var e = this.state.annotatedBooksStore;
                return n("div", {
                    className: "annotatedBooksPage__collection"
                }, void 0, n("div", {
                    className: "annotatedBooksPage__collection__descriptionContainer"
                }, void 0, n("div", {
                    className: "annotatedBooksPage__collection__description"
                }, void 0, "It’s easy to review, edit, and share the notes and highlights you make in Kindle books."), n("div", {
                    className: "annotatedBooksPage__collection__description"
                }, void 0, "Below are all of the books in your Kindle Library with highlights, starting with the most recently updated.")), n(m["default"], {
                    annotatedBooksCollection: e.annotatedBooksCollection
                }), this.renderLoadMore())
            },
            renderVisitorCollection: function() {
                var e = this.state.annotatedBooksStore;
                return n("div", {
                    className: "annotatedBooksPage__collection"
                }, void 0, n("div", {
                    className: "annotatedBooksPage__collection__descriptionContainer"
                }, void 0, "Join in the conversation. View, like, and comment on ", this.props.user.firstName, "’s notes and highlights."), n(m["default"], {
                    annotatedBooksCollection: e.annotatedBooksCollection
                }))
            },
            renderLoadMore: function() {
                var e = this.state.annotatedBooksStore;
                return n("div", {
                    className: "annotatedBooksPage__collection__loadMoreContainer"
                }, void 0, e.showSpinner ? n(P["default"], {}) : e.nextToken ? n("button", {
                    className: "annotatedBooksPage__collection__loadMoreButton gr-button gr-button--dark",
                    onClick: this.loadAnnotatedBooksHandler
                }, void 0, "Load More") : null)
            }
        })
    }, {
        "../../modules/reading_notes/reading_notes_helper": 18,
        "../../react_actions/reading_notes/annotated_books_actions": 41,
        "../../react_stores/reading_notes/annotated_books_store": 250,
        "../flash_message": 105,
        "../gr_component_factory": 107,
        "../shared/gr_prop_types": 176,
        "../spinner": 191,
        "./annotated_books_list": 159,
        lodash: "lodash",
        react: "react",
        reflux: "reflux"
    }],
    161: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("../gr_component_factory"),
            a = o(s),
            i = e("../shared/gr_prop_types"),
            l = o(i),
            u = e("react"),
            d = e("../author/author_follow_button"),
            c = o(d),
            p = e("../../modules/shape_icon_values"),
            f = e("../user/user_follow_widget"),
            h = o(f),
            m = e("../user/user_icon"),
            _ = o(m),
            g = e("../user/user_profile_link"),
            v = o(g);
        r["default"] = a["default"].createClass({
            displayName: "ReadingNotesAnnotator",
            propTypes: {
                displayUser: l["default"].user().isRequired,
                isSignedIn: React.PropTypes.bool.isRequired,
                showFollowWidget: u.PropTypes.bool,
                signInRedirectUrl: React.PropTypes.string.isRequired
            },
            defaultProps: {
                showFollowWidget: !1
            },
            renderFollowComponentIfNeeded: function() {
                return this.props.showFollowWidget ? this.props.isSignedIn ? this.props.displayUser.authorId ? n(c["default"], {
                    authorId: this.props.displayUser.authorId,
                    className: "gr-button--small u-displayBlock"
                }) : n(h["default"], {
                    displayUser: this.props.displayUser
                }) : n("a", {
                    href: this.props.signInRedirectUrl,
                    className: "gr-button gr-button--small gr-box gr-box--inline gr-box--marginRightSmall",
                    rel: "nofollow"
                }, void 0, "Follow") : void 0
            },
            render: function() {
                return n("div", {
                    className: "readingNotesAnnotator gr-mediaFlexbox gr-mediaFlexbox--alignItemsCenter"
                }, void 0, n("div", {
                    className: "readingNotesAnnotator__userIcon gr-mediaFlexbox__media"
                }, void 0, n(_["default"], {
                    user: this.props.displayUser,
                    size: p.ICON_SIZES.MEDIUM
                })), n("div", {
                    className: "gr-mediaFlexbox__desc"
                }, void 0, n("div", {
                    className: "readingNotesAnnotator__name"
                }, void 0, "by ", n(v["default"], {
                    user: this.props.displayUser,
                    className: "u-defaultType"
                })), this.renderFollowComponentIfNeeded()))
            }
        })
    }, {
        "../../modules/shape_icon_values": 19,
        "../author/author_follow_button": 72,
        "../gr_component_factory": 107,
        "../shared/gr_prop_types": 176,
        "../user/user_follow_widget": 197,
        "../user/user_icon": 198,
        "../user/user_profile_link": 199,
        react: "react"
    }],
    162: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("../gr_component_factory"),
            a = o(s),
            i = e("react"),
            l = e("../shared/gr_prop_types"),
            u = o(l),
            d = e("./reading_notes_annotator"),
            c = o(d);
        r["default"] = a["default"].createClass({
            displayName: "ReadingNotesHeader",
            propTypes: {
                user: u["default"].user().isRequired,
                headline: i.PropTypes.string.isRequired,
                isSignedIn: React.PropTypes.bool.isRequired,
                signInRedirectUrl: React.PropTypes.string.isRequired,
                viewerIsOwner: i.PropTypes.bool.isRequired
            },
            renderAnnotator: function() {
                return this.props.viewerIsOwner ? void 0 : n(c["default"], {
                    displayUser: this.props.user,
                    isSignedIn: this.props.isSignedIn,
                    showFollowWidget: !this.props.viewerIsOwner,
                    signInRedirectUrl: this.props.signInRedirectUrl
                })
            },
            render: function() {
                return n("div", {
                    className: "readingNotesHeader"
                }, void 0, n("div", {
                    className: "gr-h3 gr-h3--serif readingNotesHeader__headline"
                }, void 0, this.props.headline), this.renderAnnotator())
            }
        })
    }, {
        "../gr_component_factory": 107,
        "../shared/gr_prop_types": 176,
        "./reading_notes_annotator": 161,
        react: "react"
    }],
    163: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.MESSAGE = void 0;
        var s = e("react"),
            a = o(s),
            i = e("../gr_component_factory"),
            l = o(i),
            u = e("../modal"),
            d = o(u),
            c = e("../../react_components/want_to_read/want_to_read_button"),
            p = o(c),
            f = r.MESSAGE = "To make your notes and highlights visible, first add this book to one of your shelves.";
        r["default"] = l["default"].createClass({
            displayName: "ReadingNotesShelvingModal",
            propTypes: {
                book: a["default"].PropTypes.shape({
                    id: a["default"].PropTypes.string.isRequired,
                    title: a["default"].PropTypes.string.isRequired,
                    imageUrl: a["default"].PropTypes.string.isRequired
                }).isRequired
            },
            renderModalContent: function() {
                return n("div", {
                    className: "gr-mediaFlexbox"
                }, void 0, n("img", {
                    className: "gr-mediaFlexbox__media u-marginRightMedium",
                    src: this.props.book.imageUrl,
                    alt: this.props.book.title
                }), n("div", {
                    className: "gr-mediaFlexbox__desc"
                }, void 0, n("h3", {
                    className: "gr-h3 gr-h3--noTopMargin gr-h3--serif"
                }, void 0, "Add your book"), n("div", {
                    className: "readingNotesShelvingModal__text"
                }, void 0, f), n(p["default"], {
                    bookId: this.props.book.id,
                    bookTitle: this.props.book.title,
                    uniqueId: "readingNotesShelvingModalWTR"
                })))
            },
            render: function() {
                return n(d["default"], {
                    id: "readingNotesShelvingModal",
                    bemModifiers: "readingNotesShelving"
                }, void 0, this.renderModalContent())
            }
        })
    }, {
        "../../react_components/want_to_read/want_to_read_button": 214,
        "../gr_component_factory": 107,
        "../modal": 145,
        react: "react"
    }],
    164: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("../gr_component_factory"),
            l = o(i),
            u = e("../modal_trigger"),
            d = o(u),
            c = e("../../react_stores/shelvings_store"),
            p = o(c),
            f = e("../../react_mixins/gr_reflux");
        r["default"] = l["default"].createClass({
            displayName: "ReadingNotesShelvingModalTrigger",
            propTypes: {
                bookId: a["default"].PropTypes.string.isRequired,
                innerHtml: a["default"].PropTypes.string.isRequired
            },
            mixins: [(0, f.connectToLazyStore)(p["default"], "bookId", {
                stateKey: "shelvings"
            })],
            renderInnerHtml: function() {
                return n("span", {
                    dangerouslySetInnerHTML: {
                        __html: this.props.innerHtml
                    }
                })
            },
            render: function() {
                return null === this.state.shelvings.exclusiveShelfName ? n(d["default"], {
                    id: "readingNotesShelvingModal",
                    bemModifiers: "readingNotesShelving"
                }, void 0, n("div", {
                    className: "readingNotesShelvingModalTrigger__unclickableInnerHtml"
                }, void 0, this.renderInnerHtml())) : this.renderInnerHtml()
            }
        })
    }, {
        "../../react_mixins/gr_reflux": 231,
        "../../react_stores/shelvings_store": 253,
        "../gr_component_factory": 107,
        "../modal_trigger": 146,
        react: "react"
    }],
    165: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("./gr_component_factory"),
            l = o(i),
            u = e("../modules/ads/google_ad_helper");
        r["default"] = l["default"].createClass({
            displayName: "ScrollTracker",
            propTypes: {
                experiments: a["default"].PropTypes.arrayOf(a["default"].PropTypes.string),
                trackedEventId: a["default"].PropTypes.string.isRequired,
                viewportExpansion: a["default"].PropTypes.number
            },
            getDefaultProps: function() {
                return {
                    experiments: [],
                    viewportExpansion: 0
                }
            },
            componentDidMount: function() {
                var e = this;
                (0, u.lazyLoadOnView)(function(t) {
                    t.target.id === e.props.trackedEventId && (e.props.experiments.length ? $j.post("/track_conversion_action", {
                        event: e.props.trackedEventId,
                        options: {
                            experiments: e.props.experiments,
                            multiple: !0
                        }
                    }) : $j.post("/track/track", {
                        tid: e.props.trackedEventId
                    }))
                })
            },
            render: function() {
                return n("div", {
                    id: this.props.trackedEventId,
                    className: "lazyload",
                    "data-expand": "" + this.props.viewportExpansion
                })
            }
        })
    }, {
        "../modules/ads/google_ad_helper": 4,
        "./gr_component_factory": 107,
        react: "react"
    }],
    166: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            },
            s = function() {
                var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
                return function(t, r, o, n) {
                    var s = t && t.defaultProps,
                        a = arguments.length - 3;
                    if (r || 0 === a || (r = {}), r && s)
                        for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                    else r || (r = s || {});
                    if (1 === a) r.children = n;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                        r.children = l
                    }
                    return {
                        $$typeof: e,
                        type: t,
                        key: void 0 === o ? null : "" + o,
                        ref: null,
                        props: r,
                        _owner: null
                    }
                }
            }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var a = e("react"),
            i = o(a),
            l = e("lodash"),
            u = o(l),
            d = e("../gr_component_factory"),
            c = o(d),
            p = e("reflux"),
            f = o(p),
            h = e("react-onclickoutside"),
            m = o(h),
            _ = e("classnames"),
            g = o(_),
            v = e("../../modules/keys"),
            y = o(v),
            b = e("../../react_stores/book_search_store_factory"),
            k = o(b),
            S = e("./book_search_results"),
            P = o(S),
            T = e("../spinner"),
            w = o(T),
            N = e("../../react_mixins/factory_store_mixin"),
            R = o(N),
            M = 300;
        r["default"] = c["default"].createClass({
            displayName: "BookSearch",
            mixins: [m["default"], f["default"].ListenerMixin, (0, R["default"])(k["default"])],
            propTypes: {
                autoFocus: i["default"].PropTypes.bool,
                onChooseResult: i["default"].PropTypes.func.isRequired,
                maxResults: i["default"].PropTypes.number,
                shelfName: i["default"].PropTypes.string,
                searchPath: i["default"].PropTypes.string.isRequired,
                closeAfterResultChosen: i["default"].PropTypes.bool,
                autocompleteUrl: i["default"].PropTypes.string.isRequired
            },
            getDefaultProps: function() {
                return {
                    autoFocus: !1,
                    maxResults: 5,
                    closeAfterResultChosen: !1
                }
            },
            componentDidMount: function() {
                var e = this;
                this.delayedSearch = u["default"].debounce(function(t) {
                    e.actions.search(t.target.value, e.props.autocompleteUrl)
                }, M)
            },
            hide: function() {
                this.actions.setShowResultsContainer(!1)
            },
            handleClickOutside: function() {
                this.hide()
            },
            handleSearch: function(e) {
                u["default"].isEmpty(e.target.value) ? this.hide() : (e.persist(), this.delayedSearch(e))
            },
            handleClick: function(e) {
                u["default"].isEmpty(this.state.query) || this.handleSearch(e)
            },
            handleChoice: function(e) {
                this.props.onChooseResult(e), this.props.closeAfterResultChosen && this.hide()
            },
            handleKeyPress: function(e) {
                var t = Math.min(this.props.maxResults, this.state.results.length);
                y["default"].isEnter(e.keyCode) && null !== this.state.activeResult ? (this.handleChoice(this.state.activeResult), e.preventDefault()) : y["default"].isArrowDown(e.keyCode) ? this.actions.selectNextResult(t) : y["default"].isArrowUp(e.keyCode) ? this.actions.selectPreviousResult(t) : y["default"].isEscape(e.keyCode) && this.hide()
            },
            renderInputIcon: function() {
                var e = this.withBemModifiers("searchBox__icon", "loadingSpinner"),
                    t = (0, g["default"])("searchBox__icon--magnifyingGlass gr-iconButton", this.withBemModifiers("searchBox__icon"));
                return this.state.showLoadingSpinner ? s("span", {
                    className: e
                }, void 0, s(w["default"], {})) : s("button", {
                    type: "submit",
                    className: t,
                    "aria-label": "Search"
                })
            },
            render: function() {
                var e = (0, g["default"])(this.withBemModifiers("searchBox")),
                    t = (0, g["default"])(this.withBemModifiers("searchBox__input"));
                return s("div", {
                    acceptCharset: "UTF-8",
                    className: e,
                    onKeyDown: this.handleKeyPress
                }, void 0, s("form", {
                    autoComplete: "off",
                    action: this.props.searchPath,
                    className: "searchBox__form",
                    role: "search",
                    "aria-label": "Search for books to add to your shelves"
                }, void 0, s("input", {
                    className: t,
                    autoComplete: "off",
                    autoFocus: this.props.autoFocus,
                    name: "q",
                    type: "text",
                    placeholder: "Search books",
                    "aria-label": "Search books",
                    onClick: this.handleClick,
                    onChange: this.handleSearch,
                    "aria-controls": "searchResults"
                }), this.renderInputIcon(), this.state.showResultsContainer ? i["default"].createElement(P["default"], n({}, this.props, this.state, {
                    onChooseResult: this.handleChoice,
                    mouseoverAction: this.actions.selectSpecificResult
                })) : null))
            }
        })
    }, {
        "../../modules/keys": 16,
        "../../react_mixins/factory_store_mixin": 230,
        "../../react_stores/book_search_store_factory": 237,
        "../gr_component_factory": 107,
        "../spinner": 191,
        "./book_search_results": 168,
        classnames: "classnames",
        lodash: "lodash",
        react: "react",
        "react-onclickoutside": "react-onclickoutside",
        reflux: "reflux"
    }],
    167: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("../gr_component_factory"),
            l = o(i),
            u = e("../shared/gr_prop_types"),
            d = o(u),
            c = e("classnames"),
            p = o(c),
            f = e("../author/author_badge"),
            h = o(f);
        r["default"] = l["default"].createClass({
            displayName: "BookSearchResult",
            propTypes: {
                book: d["default"].book().isRequired,
                onChooseResult: a["default"].PropTypes.func.isRequired
            },
            render: function() {
                var e = this,
                    t = (0, p["default"])("gr-mediaFlexbox", "gr-book--navbar", "gr-hyperlink", "gr-hyperlink--naked", "gr-hyperlink--noUnderline", "gr-bookSearchResults__result");
                return n("a", {
                    className: t,
                    href: "#",
                    "aria-label": "Search result",
                    onClick: function() {
                        e.props.onChooseResult(e.props.book)
                    }
                }, void 0, n("img", {
                    className: "gr-mediaFlexbox__media",
                    src: this.props.book.imageUrl,
                    alt: ""
                }), n("div", {
                    className: "gr-mediaFlexbox__desc"
                }, void 0, n("div", {
                    className: "gr-book__title gr-book__title--navbar u-defaultType"
                }, void 0, this.props.book.title), n("div", {
                    className: "gr-book__author gr-book__author--navbar"
                }, void 0, "by ", this.props.book.author.name, a["default"].createElement(h["default"], this.props.book.author))))
            }
        })
    }, {
        "../author/author_badge": 71,
        "../gr_component_factory": 107,
        "../shared/gr_prop_types": 176,
        classnames: "classnames",
        react: "react"
    }],
    168: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("lodash"),
            l = o(i),
            u = e("classnames"),
            d = o(u),
            c = e("../drop_down_list"),
            p = o(c),
            f = e("./book_search_result"),
            h = o(f),
            m = e("../gr_component_factory"),
            _ = o(m);
        r["default"] = _["default"].createClass({
            displayName: "BookSearchResults",
            propTypes: {
                maxResults: a["default"].PropTypes.number.isRequired,
                query: a["default"].PropTypes.string,
                results: a["default"].PropTypes.array.isRequired,
                shelfName: a["default"].PropTypes.string,
                searchPath: a["default"].PropTypes.string,
                onChooseResult: a["default"].PropTypes.func.isRequired,
                mouseoverAction: a["default"].PropTypes.func.isRequired,
                activeResult: a["default"].PropTypes.shape({
                    title: a["default"].PropTypes.string.isRequired,
                    bookId: a["default"].PropTypes.string.isRequired
                })
            },
            renderLastSearchResultItem: function(e) {
                var t = (0, d["default"])("gr-buttonAsLink", "gr-bookSearchResults__lastItem", this.withBemElement("gr-bookSearchResults", "lastItem"));
                return n("button", {
                    className: t,
                    type: "submit"
                }, void 0, e)
            },
            render: function() {
                var e = this,
                    t = (0, d["default"])(this.withBemModifiers("gr-bookSearchResults"), "gr-box", "gr-box--withShadow");
                return n("div", {
                    className: t,
                    id: "bookSearchResults" + this.props.query + this.props.results.length,
                    "aria-live": "polite",
                    "aria-label": "Book search results"
                }, void 0, n(p["default"], {
                    maxListItems: this.props.maxResults
                }, void 0, this.props.results.length > 0 ? l["default"].map(l["default"].slice(this.props.results, 0, this.props.maxResults), function(t) {
                    return n("div", {
                        className: (0, d["default"])("gr-bookSearchResults__item", {
                            "gr-bookSearchResults__item--active": t === e.props.activeResult
                        }),
                        onMouseOver: function() {
                            e.props.mouseoverAction(t.bookId)
                        }
                    }, t.bookId, n(h["default"], {
                        book: t,
                        onChooseResult: e.props.onChooseResult
                    }))
                }) : this.renderLastSearchResultItem('Search for "' + this.props.query + '"…'), this.props.results.length > 0 ? this.renderLastSearchResultItem('See all results for "' + this.props.query + '"') : null))
            }
        })
    }, {
        "../drop_down_list": 89,
        "../gr_component_factory": 107,
        "./book_search_result": 167,
        classnames: "classnames",
        lodash: "lodash",
        react: "react"
    }],
    169: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            },
            s = function() {
                var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
                return function(t, r, o, n) {
                    var s = t && t.defaultProps,
                        a = arguments.length - 3;
                    if (r || 0 === a || (r = {}), r && s)
                        for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                    else r || (r = s || {});
                    if (1 === a) r.children = n;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                        r.children = l
                    }
                    return {
                        $$typeof: e,
                        type: t,
                        key: void 0 === o ? null : "" + o,
                        ref: null,
                        props: r,
                        _owner: null
                    }
                }
            }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var a = e("react"),
            i = o(a),
            l = e("../gr_component_factory"),
            u = o(l),
            d = e("../header/nav_search"),
            c = o(d),
            p = e("../search/search_toggle"),
            f = o(p);
        r["default"] = u["default"].createClass({
            displayName: "SearchMobileNav",
            propTypes: {
                autocompleteUrl: i["default"].PropTypes.string.isRequired,
                searchPath: i["default"].PropTypes.string.isRequired
            },
            render: function() {
                return s("div", {
                    className: "siteHeader__primaryNavSeparateLine siteHeader__primaryNavSeparateLine--search"
                }, void 0, i["default"].createElement(c["default"], n({}, this.props, {
                    autoFocus: !0,
                    bemModifiers: "primaryNavSeparateLine"
                })), s(f["default"], {
                    toggleType: p.SEARCH_TOGGLE_TYPES.CANCEL
                }))
            }
        })
    }, {
        "../gr_component_factory": 107,
        "../header/nav_search": 124,
        "../search/search_toggle": 170,
        react: "react"
    }],
    170: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.mapDispatchToProps = r.mapStateToProps = r.component = r.SEARCH_TOGGLE_TYPES = void 0;
        var s = e("react"),
            a = o(s),
            i = e("react-redux"),
            l = e("../gr_component_factory"),
            u = o(l),
            d = e("lodash"),
            c = e("../../react_actions/header/search_actions"),
            p = r.SEARCH_TOGGLE_TYPES = {
                ICON: "icon",
                CANCEL: "Cancel"
            },
            f = r.component = u["default"].createClass({
                displayName: "SearchToggle",
                propTypes: {
                    searchIsActive: a["default"].PropTypes.bool.isRequired,
                    toggleType: a["default"].PropTypes.oneOf((0, d.values)(p)),
                    onToggleSearch: a["default"].PropTypes.func.isRequired
                },
                getDefaultProps: function() {
                    return {
                        searchIsActive: !1
                    }
                },
                toggleSearch: function() {
                    return this.props.onToggleSearch(!this.props.searchIsActive)
                },
                hideSearch: function() {
                    return this.props.onToggleSearch(!1)
                },
                render: function() {
                    switch (this.props.toggleType) {
                        case p.ICON:
                            return n("button", {
                                className: "siteHeader__searchIcon gr-iconButton",
                                onClick: this.toggleSearch,
                                "aria-label": "Toggle search",
                                type: "button"
                            });
                        case p.CANCEL:
                            return n("button", {
                                className: "gr-buttonAsLink",
                                onClick: this.hideSearch,
                                "aria-label": "Hide search",
                                type: "button"
                            }, void 0, p.CANCEL);
                        default:
                            return null
                    }
                }
            }),
            h = r.mapStateToProps = function(e, t) {
                return Object.assign({}, t, e)
            },
            m = r.mapDispatchToProps = function(e) {
                return {
                    onToggleSearch: function(t) {
                        return e((0, c.toggleSearch)(t))
                    }
                }
            };
        r["default"] = (0, i.connect)(h, m)(f)
    }, {
        "../../react_actions/header/search_actions": 36,
        "../gr_component_factory": 107,
        lodash: "lodash",
        react: "react",
        "react-redux": "react-redux"
    }],
    171: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function n(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }
        var s = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var a = e("react"),
            i = o(a),
            l = e("./gr_component_factory"),
            u = o(l),
            d = e("classnames"),
            c = o(d),
            p = e("../modules/shape_icon_values"),
            f = e("lodash");
        r["default"] = u["default"].createClass({
            displayName: "ShapeIcon",
            propTypes: {
                imageUrl: i["default"].PropTypes.string.isRequired,
                imageAlt: i["default"].PropTypes.string.isRequired,
                includeLink: i["default"].PropTypes.bool,
                linkUrl: i["default"].PropTypes.string,
                size: i["default"].PropTypes.oneOf((0, f.values)(p.ICON_SIZES)),
                shape: i["default"].PropTypes.oneOf((0, f.values)(p.ICON_SHAPES)),
                border: i["default"].PropTypes.bool
            },
            getShapeClass: function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0],
                    t = this.props.shape + "Icon";
                return e && (t += "--" + e), t
            },
            getDefaultProps: function() {
                return {
                    includeLink: !1,
                    size: p.ICON_SIZES.SMALL,
                    shape: p.ICON_SHAPES.CIRCLE,
                    border: !1
                }
            },
            render: function() {
                var e, t = (0, c["default"])(this.props.className, (e = {}, n(e, "" + this.getShapeClass(), !0), n(e, "" + this.getShapeClass("medium"), this.props.size === p.ICON_SIZES.MEDIUM), n(e, "" + this.getShapeClass("large"), this.props.size === p.ICON_SIZES.LARGE), n(e, "" + this.getShapeClass("border"), this.props.border), e));
                return this.props.includeLink && this.props.linkUrl ? s("a", {
                    href: this.props.linkUrl
                }, void 0, s("img", {
                    className: t,
                    src: this.props.imageUrl,
                    alt: this.props.imageAlt
                })) : s("img", {
                    className: t,
                    src: this.props.imageUrl,
                    alt: this.props.imageAlt
                })
            }
        })
    }, {
        "../modules/shape_icon_values": 19,
        "./gr_component_factory": 107,
        classnames: "classnames",
        lodash: "lodash",
        react: "react"
    }],
    172: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("./gr_component_factory"),
            l = o(i);
        r["default"] = l["default"].createClass({
            displayName: "ShareButton",
            propTypes: {
                textLabel: a["default"].PropTypes.string
            },
            getDefaultProps: function() {
                return {
                    textLabel: "Share"
                }
            },
            render: function() {
                return n("button", {
                    className: "gr-shareButton",
                    type: "button"
                }, void 0, n("span", {
                    className: "gr-shareButton__innerWrapper"
                }, void 0, n("span", {
                    className: "gr-shareButton__icon"
                }), n("span", {
                    className: "gr-shareButton__textLabel"
                }, void 0, this.props.textLabel)))
            }
        })
    }, {
        "./gr_component_factory": 107,
        react: "react"
    }],
    173: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            },
            s = function() {
                var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
                return function(t, r, o, n) {
                    var s = t && t.defaultProps,
                        a = arguments.length - 3;
                    if (r || 0 === a || (r = {}), r && s)
                        for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                    else r || (r = s || {});
                    if (1 === a) r.children = n;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                        r.children = l
                    }
                    return {
                        $$typeof: e,
                        type: t,
                        key: void 0 === o ? null : "" + o,
                        ref: null,
                        props: r,
                        _owner: null
                    }
                }
            }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var a = e("./gr_component_factory"),
            i = o(a),
            l = e("./shared/gr_prop_types"),
            u = o(l),
            d = e("reflux"),
            c = o(d),
            p = e("./modal_trigger"),
            f = o(p),
            h = e("./share_button"),
            m = o(h),
            _ = e("./modal"),
            g = o(_),
            v = e("./share_social"),
            y = o(v),
            b = e("./user_content/string_counter"),
            k = o(b),
            S = e("../react_stores/share_dialog_store"),
            P = o(S),
            T = e("../react_actions/share_dialog_actions"),
            w = o(T),
            N = e("classnames"),
            R = o(N),
            M = e("../modules/env_utils"),
            C = o(M),
            x = e("./flash_message"),
            A = o(x),
            I = e("./sharing/previews/share_dialog_book_preview"),
            L = o(I),
            U = e("./sharing/previews/share_dialog_topic_preview"),
            E = o(U),
            O = e("./sharing/previews/share_dialog_blog_preview"),
            B = o(O),
            j = e("./sharing/previews/share_dialog_interview_preview"),
            F = o(j);
        r["default"] = i["default"].createClass({
            displayName: "ShareDialog",
            mixins: [c["default"].connect(P["default"], "sharingDialog")],
            propTypes: u["default"].shareDialog(),
            getDefaultProps: function() {
                return {
                    includePreview: !1
                }
            },
            getInitialState: function() {
                return {
                    uniqueId: Math.random(1e6)
                }
            },
            getResourceTypeIdentifier: function() {
                return this.props.sharingData.resourceTypeFriendlyText.replace(/\s/g, "").toLowerCase()
            },
            getShareModalId: function() {
                return "share-" + this.getResourceTypeIdentifier() + "-modal" + this.state.uniqueId
            },
            socialExists: function(e) {
                return this.props.social[e].facebook || this.props.social[e].twitter || this.props.social[e].pinterest || this.props.social[e].copyLink
            },
            renderPreview: function() {
                if (!this.props.includePreview) return null;
                var e = void 0,
                    t = this.props.sharingData.resourceTypeFriendlyText;
                switch (t) {
                    case "book":
                        e = React.createElement(L["default"], this.props.previewData);
                        break;
                    case "discussion":
                        e = React.createElement(E["default"], this.props.previewData);
                        break;
                    case "blog":
                        e = React.createElement(B["default"], this.props.previewData);
                        break;
                    case "interview":
                        e = React.createElement(F["default"], this.props.previewData)
                }
                return e ? e : void 0
            },
            renderSocialInModal: function(e) {
                if (this.socialExists("inModal")) {
                    var t = e + " share on:";
                    return s("div", {
                        className: "shareModal__socialContainer"
                    }, void 0, s("div", {
                        className: "shareModal__socialPrompt"
                    }, void 0, t), React.createElement(y["default"], n({}, this.props.social.inModal, {
                        bemModifiers: "modal",
                        fbOptions: this.props.social.fbOptions,
                        twitterOptions: this.props.social.twitterOptions,
                        pinterestOptions: this.props.social.pinterestOptions,
                        metricName: this.getResourceTypeIdentifier() + "_sharingModal"
                    })))
                }
                return null
            },
            renderCharacterCounter: function() {
                var e = this.state.sharingDialog.sharingTextInputValue || "";
                return s(k["default"], {
                    counterType: "character",
                    maxLength: S.MAXIMUM_SHARING_TEXT_LENGTH,
                    warnLength: S.WARNING_SHARING_TEXT_LENGTH,
                    text: e
                })
            },
            handleShare: function() {
                var e = this.props.sharingData,
                    t = this.state.sharingDialog.sharingTextInputValue;
                w["default"].submitShare(e, t)
            },
            renderSharePrompt: function() {
                var e = (0, R["default"])("shareModal__bottomContainer", {
                    "shareModal__bottomContainer--noSocial": !this.socialExists("inModal"),
                    "shareModal__bottomContainer--social": this.socialExists("inModal")
                });
                return s("span", {
                    className: "shareModal"
                }, void 0, s("h2", {
                    className: "gr-h3 gr-h3--serif shareModal__heading"
                }, void 0, "Share this ", this.props.sharingData.resourceTypeFriendlyText, " on Goodreads"), this.renderShareError(), s("textarea", {
                    "aria-label": "Share text",
                    placeholder: "Say something about this " + this.props.sharingData.resourceTypeFriendlyText + "...",
                    value: this.state.sharingDialog.sharingTextInputValue,
                    onChange: function(e) {
                        w["default"].updateSharingTextInputValue(e.target.value)
                    },
                    className: "gr-textInput shareModal__textInput"
                }), this.renderCharacterCounter(), this.renderPreview(), s("button", {
                    className: "gr-button gr-button--Large shareModal__button",
                    onClick: this.handleShare,
                    type: "button",
                    disabled: this.state.sharingDialog.shareModalButtonDisabled
                }, void 0, "Share"), s("div", {
                    className: e
                }, void 0, this.renderSocialInModal("Or")))
            },
            renderShareSuccess: function() {
                return s("span", {
                    className: "shareModal"
                }, void 0, s("h2", {
                    className: "gr-h3 gr-h3--serif shareModal__heading"
                }, void 0, "Shared!"), s("h3", {
                    className: "gr-hyperlink shareModal__link"
                }, void 0, s("a", {
                    href: this.state.sharingDialog.sharingUrl,
                    "aria-label": "Link to " + this.state.sharingDialog.sharingDisplayName
                }, void 0, "View post")), s("div", {
                    className: "shareModal__bottomContainer shareModal__bottomContainer--shared"
                }, void 0, this.renderSocialInModal("Also")))
            },
            renderShareError: function() {
                if (this.state.sharingDialog.error) {
                    var e = this.props.sharingData.resourceTypeFriendlyText,
                        t = this.state.sharingDialog.errorText || "Something went wrong, and your " + e + " wasn't shared. Please try again later.";
                    return s(A["default"], {
                        category: "error",
                        message: t
                    })
                }
                return null
            },
            renderModalContent: function() {
                return this.state.sharingDialog.shared ? this.renderShareSuccess() : this.renderSharePrompt()
            },
            renderSocialOutsideModal: function() {
                return this.socialExists("outsideModal") ? React.createElement(y["default"], n({}, this.props.social.outsideModal, {
                    fbOptions: this.props.social.fbOptions,
                    twitterOptions: this.props.social.twitterOptions,
                    pinterestOptions: this.props.social.pinterestOptions,
                    metricName: this.getResourceTypeIdentifier() + "_shareModuleBar",
                    bemModifiers: "shareBar"
                })) : null
            },
            shouldRedirect: function() {
                return this.props.signInUrl && !this.props.signedIn
            },
            handleClick: function() {
                this.shouldRedirect() ? this.redirectToSignIn() : w["default"].openShareModal(this.getResourceTypeIdentifier())
            },
            getSignInUrl: function() {
                var e = C["default"].getCurrentPath();
                return this.props.signInUrl + "?returnurl=" + e
            },
            redirectToSignIn: function() {
                C["default"].setLocationUrl(this.getSignInUrl())
            },
            renderModal: function() {
                return this.shouldRedirect() ? null : s(g["default"], {
                    id: this.getShareModalId(),
                    bemModifiers: "share"
                }, void 0, this.renderModalContent())
            },
            render: function() {
                return s("div", {}, void 0, this.renderModal(), s("div", {
                    className: "shareModuleBar"
                }, void 0, s(f["default"], {
                    id: this.getShareModalId(),
                    clickHandler: this.handleClick,
                    bemModifiers: "shareModule"
                }, void 0, s(m["default"], {})), this.renderSocialOutsideModal()))
            }
        })
    }, {
        "../modules/env_utils": 13,
        "../react_actions/share_dialog_actions": 43,
        "../react_stores/share_dialog_store": 251,
        "./flash_message": 105,
        "./gr_component_factory": 107,
        "./modal": 145,
        "./modal_trigger": 146,
        "./share_button": 172,
        "./share_social": 174,
        "./shared/gr_prop_types": 176,
        "./sharing/previews/share_dialog_blog_preview": 181,
        "./sharing/previews/share_dialog_book_preview": 182,
        "./sharing/previews/share_dialog_interview_preview": 183,
        "./sharing/previews/share_dialog_topic_preview": 185,
        "./user_content/string_counter": 203,
        classnames: "classnames",
        reflux: "reflux"
    }],
    174: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("./gr_component_factory"),
            l = o(i),
            u = e("./sharing/facebook_share"),
            d = o(u),
            c = e("./sharing/twitter_share"),
            p = o(c),
            f = e("./sharing/pinterest_share"),
            h = o(f),
            m = e("classnames"),
            _ = o(m);
        r["default"] = l["default"].createClass({
            displayName: "ShareSocial",
            propTypes: {
                facebook: a["default"].PropTypes.bool,
                twitter: a["default"].PropTypes.bool,
                pinterest: a["default"].PropTypes.bool,
                copyLink: a["default"].PropTypes.bool,
                fbOptions: a["default"].PropTypes.object,
                twitterOptions: a["default"].PropTypes.object,
                pinterestOptions: a["default"].PropTypes.object,
                metricName: a["default"].PropTypes.string
            },
            getDefaultProps: function() {
                return {
                    facebook: !1,
                    twitter: !1,
                    pinterest: !1,
                    copyLink: !1,
                    metricName: ""
                }
            },
            renderSocialPlatform: function(e) {
                if (!this.props[e]) return null;
                var t = "SocialSharing_" + this.props.metricName + "_" + e;
                switch (e) {
                    case "facebook":
                        return n(d["default"], {
                            options: this.props.fbOptions,
                            metricName: t,
                            bemModifiers: this.props.bemModifiers
                        });
                    case "twitter":
                        return n(p["default"], {
                            options: this.props.twitterOptions,
                            metricName: t,
                            bemModifiers: this.props.bemModifiers
                        });
                    case "pinterest":
                        return n(h["default"], {
                            options: this.props.pinterestOptions,
                            metricName: t,
                            bemModifiers: this.props.bemModifiers
                        })
                }
            },
            render: function() {
                var e = (0, _["default"])(this.withBemModifiers("shareSocialButtons"), this.props.className);
                return n("div", {
                    className: e
                }, void 0, this.renderSocialPlatform("facebook"), this.renderSocialPlatform("twitter"), this.renderSocialPlatform("pinterest"))
            }
        })
    }, {
        "./gr_component_factory": 107,
        "./sharing/facebook_share": 179,
        "./sharing/pinterest_share": 180,
        "./sharing/twitter_share": 186,
        classnames: "classnames",
        react: "react"
    }],
    175: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r["default"] = {
            get: function(e) {
                var t = null,
                    r = window.$j;
                return r && r.each(document.cookie.split("; "), function(r, o) {
                    var n = o.split("=");
                    n[0] === e && (t = n[1])
                }), t
            },
            set: function(e, t, r) {
                r = r || 365;
                var o = new Date;
                o.setTime(o.getTime() + 24 * r * 60 * 60 * 1e3);
                var n = "; expires=" + o.toGMTString();
                document.cookie = e + "=" + encodeURIComponent(t) + n + "; path=/"
            }
        }
    }, {}],
    176: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function n(e) {
            function t(t, r, o, n) {
                return n || (n = "<<anonymous>>"), l["default"].isNull(r[o]) || l["default"].isUndefined(r[o]) ? t ? new Error("Required property `" + o + "` was not specified in " + ("`" + n + "`.")) : null : e(r, o, n)
            }
            var r = t.bind(null, !1);
            return r.isRequired = t.bind(null, !0), r
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("lodash"),
            l = o(i),
            u = function(e, t, r) {
                var o = e[t],
                    n = l["default"].isString(o) ? new Date(o) : o;
                return !l["default"].isDate(n) || l["default"].isNaN(n.getTime()) ? new Error("Property '" + t + "' must be a Date. " + r + " was supplied: '" + o + "'.") : void 0
            },
            d = function(e, t, r) {
                var o = e[t];
                return 0 >= o ? new Error("Property '" + t + "' must be > 0. " + r + " was supplied: '" + o + "'.") : void 0
            },
            c = function(e, t) {
                return l["default"].merge({}, e, t)
            },
            p = function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    t = {
                        viewableName: a["default"].PropTypes.string.isRequired,
                        profileImage: a["default"].PropTypes.string.isRequired,
                        profileUrl: a["default"].PropTypes.string,
                        informalName: a["default"].PropTypes.string
                    };
                return a["default"].PropTypes.shape(c(t, e))
            },
            f = function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    t = {
                        bookId: a["default"].PropTypes.string,
                        workId: a["default"].PropTypes.string,
                        bookUrl: a["default"].PropTypes.string,
                        authorName: a["default"].PropTypes.string,
                        title: a["default"].PropTypes.string,
                        imageUrl: a["default"].PropTypes.string,
                        numPages: a["default"].PropTypes.number
                    };
                return a["default"].PropTypes.shape(c(t, e))
            },
            h = function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    t = g();
                return a["default"].PropTypes.shape(c(t, e))
            },
            m = function() {
                return a["default"].PropTypes.shape({
                    id: a["default"].PropTypes.number.isRequired,
                    name: a["default"].PropTypes.string.isRequired,
                    isGoodreadsAuthor: a["default"].PropTypes.bool,
                    profileImage: a["default"].PropTypes.string,
                    profileUrl: a["default"].PropTypes.string.isRequired
                })
            },
            _ = function() {
                return {
                    html: a["default"].PropTypes.string.isRequired,
                    truncatedHtml: a["default"].PropTypes.string
                }
            },
            g = function() {
                return {
                    html: a["default"].PropTypes.string,
                    fullContentUrl: a["default"].PropTypes.string,
                    fullContentText: a["default"].PropTypes.string,
                    truncated: a["default"].PropTypes.bool.isRequired,
                    className: a["default"].PropTypes.string,
                    bookDescriptionTargetingData: a["default"].PropTypes.object
                }
            },
            v = function() {
                return a["default"].PropTypes.shape({
                    user: p().isRequired,
                    friendUser: p().isRequired,
                    isMyFriend: a["default"].PropTypes.bool.isRequired,
                    addFriendUrl: a["default"].PropTypes.string,
                    compareBooksUrl: a["default"].PropTypes.string,
                    ratingDetailsText: a["default"].PropTypes.string,
                    currentlyReadingBook: f()
                })
            },
            y = function() {
                return a["default"].PropTypes.shape({
                    user: p().isRequired,
                    followingUser: p().isRequired,
                    ratingDetailsText: a["default"].PropTypes.string,
                    currentlyReadingBook: f()
                })
            },
            b = function() {
                return a["default"].PropTypes.shape({
                    type: a["default"].PropTypes.string,
                    id: a["default"].PropTypes.number,
                    uri: a["default"].PropTypes.string
                })
            },
            k = function() {
                return a["default"].PropTypes.shape({
                    canComment: a["default"].PropTypes.bool.isRequired,
                    commentable: a["default"].PropTypes.bool.isRequired,
                    subjectKey: a["default"].PropTypes.string.isRequired,
                    subject: b(),
                    subjectUrl: a["default"].PropTypes.string
                })
            },
            S = function() {
                return a["default"].PropTypes.shape({
                    key: a["default"].PropTypes.string.isRequired,
                    label: a["default"].PropTypes.string.isRequired,
                    isLikeable: a["default"].PropTypes.bool.isRequired
                })
            },
            P = function() {
                return a["default"].PropTypes.shape({
                    author: m().isRequred,
                    title: a["default"].PropTypes.string,
                    url: a["default"].PropTypes.string
                })
            },
            T = function() {
                return a["default"].PropTypes.shape({
                    title: a["default"].PropTypes.string,
                    body: a["default"].PropTypes.object.isRequired,
                    url: a["default"].PropTypes.string,
                    imageUrl: a["default"].PropTypes.string,
                    typeDisplayName: a["default"].PropTypes.string
                })
            },
            w = function() {
                return a["default"].PropTypes.shape({
                    title: a["default"].PropTypes.string,
                    body: a["default"].PropTypes.object,
                    url: a["default"].PropTypes.string,
                    imageUrl: a["default"].PropTypes.string,
                    authorImageUrl: a["default"].PropTypes.string,
                    author: a["default"].PropTypes.string,
                    bookImageUrl: a["default"].PropTypes.string,
                    bookTitle: a["default"].PropTypes.string,
                    typeDisplayName: a["default"].PropTypes.string
                })
            },
            N = function() {
                return a["default"].PropTypes.shape({
                    user: p().isRequired,
                    author: m().isRequred,
                    userAuthorFollowingsUrl: a["default"].PropTypes.string
                })
            },
            R = function() {
                return a["default"].PropTypes.shape({
                    author: m().isRequired,
                    message: a["default"].PropTypes.string,
                    url: a["default"].PropTypes.string.isRequired
                })
            },
            M = function() {
                return a["default"].PropTypes.shape({
                    author: m().isRequired,
                    body: a["default"].PropTypes.object.isRequired,
                    url: a["default"].PropTypes.string.isRequired,
                    quotesAuthorUrl: a["default"].PropTypes.string.isRequired
                })
            },
            C = function() {
                return a["default"].PropTypes.shape({
                    name: a["default"].PropTypes.string.isRequired,
                    url: a["default"].PropTypes.string.isRequired,
                    iconUrl: a["default"].PropTypes.string.isRequired,
                    id: a["default"].PropTypes.number.isRequired,
                    lastActiveAt: n(u)
                })
            },
            x = function() {
                return a["default"].PropTypes.shape({
                    id: a["default"].PropTypes.number.isRequired,
                    title: a["default"].PropTypes.string.isRequired,
                    url: a["default"].PropTypes.string.isRequired,
                    totalPosts: a["default"].PropTypes.string.isRequired,
                    newPosts: a["default"].PropTypes.string,
                    newCommentsUrl: a["default"].PropTypes.string,
                    updatedAt: n(u),
                    folder: a["default"].PropTypes.shape({
                        name: a["default"].PropTypes.string,
                        url: a["default"].PropTypes.string
                    })
                })
            },
            A = {
                user: p().isRequired,
                pollName: a["default"].PropTypes.string.isRequired,
                answer: a["default"].PropTypes.object.isRequired,
                url: a["default"].PropTypes.string.isRequired,
                imageUrl: a["default"].PropTypes.string.isRequired,
                isGroupPoll: a["default"].PropTypes.bool.isRequired,
                isChoicePoll: a["default"].PropTypes.bool.isRequired,
                groupName: a["default"].PropTypes.string,
                groupUrl: a["default"].PropTypes.string
            },
            I = function() {
                return a["default"].PropTypes.shape(A)
            },
            L = function() {
                return a["default"].PropTypes.shape(c(A, {
                    choiceYear: a["default"].PropTypes.number.isRequired,
                    choiceUrl: a["default"].PropTypes.string.isRequired,
                    badgeUrl: a["default"].PropTypes.string.isRequired,
                    votedBook: f().isRequired
                }))
            },
            U = function() {
                return {
                    category: a["default"].PropTypes.number.isRequired,
                    questionText: a["default"].PropTypes.string.isRequired,
                    isSpoiler: a["default"].PropTypes.bool.isRequired,
                    questionUrl: a["default"].PropTypes.string.isRequired,
                    user: p().isRequired,
                    authorQuestionsUrl: a["default"].PropTypes.string,
                    book: f()
                }
            },
            E = function() {
                return {
                    user: p().isRequired,
                    answerText: a["default"].PropTypes.shape(g()),
                    isSpoiler: a["default"].PropTypes.bool.isRequired,
                    communityQuestion: a["default"].PropTypes.shape(U()).isRequired
                }
            },
            O = function() {
                return a["default"].PropTypes.shape({
                    book: f(),
                    customText: a["default"].PropTypes.object,
                    helpLink: a["default"].PropTypes.string,
                    defaultIcon: a["default"].PropTypes.string,
                    numAdditionalFriends: a["default"].PropTypes.number,
                    friendActionText: a["default"].PropTypes.string,
                    firstFriend: p(),
                    customTextReview: a["default"].PropTypes.object,
                    similarBook: f(),
                    similarBookShelf: a["default"].PropTypes.string,
                    similarBookShelfUrl: a["default"].PropTypes.string,
                    genres: a["default"].PropTypes.array
                })
            },
            B = function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    t = {
                        actor: a["default"].PropTypes.shape({
                            viewableName: a["default"].PropTypes.string,
                            profileImage: a["default"].PropTypes.string,
                            profileUrl: a["default"].PropTypes.string
                        }),
                        actors: a["default"].PropTypes.array,
                        createdAt: a["default"].PropTypes.string,
                        body: a["default"].PropTypes.string,
                        resource: a["default"].PropTypes.shape({
                            text: a["default"].PropTypes.string,
                            url: a["default"].PropTypes.string
                        }),
                        viewed: a["default"].PropTypes["boolean"],
                        moreActors: a["default"].PropTypes["boolean"]
                    };
                return a["default"].PropTypes.shape(c(t, e))
            },
            j = function() {
                return a["default"].PropTypes.shape({
                    viewableName: a["default"].PropTypes.string.isRequired,
                    profileImage: a["default"].PropTypes.string.isRequired,
                    profilePath: a["default"].PropTypes.string.isRequired,
                    books: a["default"].PropTypes.arrayOf(a["default"].PropTypes.shape({
                        imageUrl: a["default"].PropTypes.string.isRequired,
                        title: a["default"].PropTypes.string.isRequired
                    })).isRequired,
                    subtitle: a["default"].PropTypes.string.isRequired
                }).isRequired
            },
            F = function(e) {
                return a["default"].PropTypes.shape({
                    destination: a["default"].PropTypes.string.isRequired,
                    type: a["default"].PropTypes.string.isRequired,
                    object: e
                })
            },
            D = function() {
                return F(a["default"].PropTypes.shape({
                    id: a["default"].PropTypes.string.isRequired,
                    name: a["default"].PropTypes.string.isRequired,
                    isGoodreadsAuthor: a["default"].PropTypes.bool,
                    profileImage: a["default"].PropTypes.string
                }))
            },
            q = function() {
                return F(a["default"].PropTypes.shape({
                    id: a["default"].PropTypes.string.isRequired,
                    authorName: a["default"].PropTypes.string.isRequired,
                    isGoodreadsAuthor: a["default"].PropTypes.bool,
                    title: a["default"].PropTypes.string.isRequired,
                    imageUrl: a["default"].PropTypes.string
                }))
            },
            H = function() {
                return F(a["default"].PropTypes.shape({
                    id: a["default"].PropTypes.string.isRequired,
                    name: a["default"].PropTypes.string.isRequired,
                    profileImage: a["default"].PropTypes.string
                }))
            },
            G = function() {
                return a["default"].PropTypes.shape({
                    asin: a["default"].PropTypes.string.isRequired,
                    imageUrl: a["default"].PropTypes.string.isRequired,
                    title: a["default"].PropTypes.string.isRequired,
                    authorName: a["default"].PropTypes.string.isRequired,
                    sharedCount: a["default"].PropTypes.number.isRequired,
                    highlightCount: a["default"].PropTypes.number,
                    noteCount: a["default"].PropTypes.number,
                    readingNotesUrl: a["default"].PropTypes.string.isRequired,
                    knhCta: a["default"].PropTypes.string.isRequired,
                    noSharedAnnotations: a["default"].PropTypes.bool.isRequired
                })
            },
            $ = function() {
                return a["default"].PropTypes.shape({
                    title: a["default"].PropTypes.string.isRequired,
                    url: a["default"].PropTypes.string.isRequired,
                    id: a["default"].PropTypes.number.isRequired,
                    year: a["default"].PropTypes.number.isRequired,
                    type: a["default"].PropTypes.string.isRequired,
                    maxGoal: a["default"].PropTypes.number.isRequired,
                    isFinished: a["default"].PropTypes.bool,
                    primaryColor: a["default"].PropTypes.string.isRequired,
                    secondaryColor: a["default"].PropTypes.string.isRequired,
                    images: a["default"].PropTypes.shape({
                        badge: a["default"].PropTypes.string.isRequired,
                        completed: a["default"].PropTypes.string.isRequired
                    })
                })
            },
            z = function() {
                return {
                    signedIn: a["default"].PropTypes.bool,
                    signInUrl: a["default"].PropTypes.string,
                    social: a["default"].PropTypes.shape({
                        inModal: a["default"].PropTypes.shape({
                            facebook: a["default"].PropTypes.bool.isRequired,
                            twitter: a["default"].PropTypes.bool.isRequired,
                            pinterest: a["default"].PropTypes.bool.isRequired,
                            copyLink: a["default"].PropTypes.bool.isRequired
                        }).isRequired,
                        outsideModal: a["default"].PropTypes.shape({
                            facebook: a["default"].PropTypes.bool.isRequired,
                            twitter: a["default"].PropTypes.bool.isRequired,
                            pinterest: a["default"].PropTypes.bool.isRequired,
                            copyLink: a["default"].PropTypes.bool.isRequired
                        }).isRequired,
                        fbOptions: a["default"].PropTypes.object,
                        twitterOptions: a["default"].PropTypes.object,
                        pinterestOptions: a["default"].PropTypes.object
                    }).isRequired,
                    sharingData: a["default"].PropTypes.shape({
                        resourceTypeFriendlyText: a["default"].PropTypes.string.isRequired,
                        resourceId: a["default"].PropTypes.number.isRequired,
                        sharerUserId: a["default"].PropTypes.number
                    }).isRequired,
                    includePreview: a["default"].PropTypes.bool,
                    previewData: a["default"].PropTypes.object
                }
            };
        r["default"] = {
            user: p,
            author: m,
            blogNewsfeedResource: T,
            interviewNewsfeedResource: w,
            book: f,
            bookDescription: h,
            quote: M,
            commentSubject: b,
            comment: k,
            like: S,
            group: C,
            topic: x,
            authorBlogPostNewsfeedResource: P,
            authorFollowNewsfeedResource: N,
            authorQaSettingNewsfeedResource: R,
            communityQuestion: U,
            communityAnswer: E,
            friendNewsfeedResource: v,
            userFollowingNewsfeedResource: y,
            pollVoteNewsfeedResource: I,
            expandableHtml: _,
            truncatedHtml: g,
            choicePollVoteNewsfeedResource: L,
            date: n(u),
            naturalNumber: n(d),
            creative: O,
            notification: B,
            searchResults: {
                book: q,
                author: D,
                user: H
            },
            readingNotesAnnotatedBookItem: G,
            readingChallenge: $,
            shareDialog: z,
            recommendedUser: j
        }
    }, {
        lodash: "lodash",
        react: "react"
    }],
    177: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("react"),
            s = o(n),
            a = e("react-dom"),
            i = o(a),
            l = e("lodash"),
            u = o(l),
            d = e("../user_content/spoiler"),
            c = o(d);
        r["default"] = {
            replaceSpoilerHTMLWithReactComponents: function(e, t) {
                var r = t || window.$j,
                    o = r(".jsShowSpoiler", e);
                u["default"].each(o, function(e) {
                    var t = r(e),
                        o = t.next(".spoilerContainer");
                    if (o) {
                        var n = o.text().replace("(hide spoiler)", ""),
                            a = s["default"].createElement(c["default"], {
                                html: n
                            }),
                            l = r("<span></span>");
                        t.replaceWith(l), i["default"].render(a, r(l)[0])
                    }
                })
            }
        }
    }, {
        "../user_content/spoiler": 202,
        lodash: "lodash",
        react: "react",
        "react-dom": "react-dom"
    }],
    178: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = e("../gr_component_factory"),
            i = o(a),
            l = e("../modal_trigger"),
            u = o(l),
            d = e("../modal"),
            c = o(d),
            p = e("../spinner"),
            f = o(p),
            h = e("../../modules/ajax/ajax_helper"),
            m = e("../flash_message"),
            _ = o(m);
        r["default"] = i["default"].createClass({
            displayName: "ShareableLinkbutton",
            propTypes: {
                getShareableLinkURL: s.PropTypes.string.isRequired,
                resourceType: s.PropTypes.string.isRequired
            },
            getShareableLinkModalId: function() {
                return "shareableLinkModal"
            },
            getInitialState: function() {
                return {
                    error: !1,
                    fetching: !1,
                    copiedToClipboard: !1,
                    shareableLink: null,
                    ttl: null
                }
            },
            requestLink: function() {
                var e = this;
                (0, h.httpRequest)(this.props.getShareableLinkURL, {
                    method: "GET"
                }).done(function(t) {
                    var r = t.link,
                        o = t.ttl;
                    e.setState({
                        shareableLink: r,
                        ttl: o
                    })
                }).fail(function() {
                    e.setState({
                        error: !0
                    })
                }).always(function() {
                    e.setState({
                        fetching: !1
                    })
                })
            },
            handleClick: function() {
                return this.state.shareableLink ? null : this.setState({
                    fetching: !0,
                    error: !1
                }, this.requestLink)
            },
            copyLinkToClipboard: function() {
                return this.selectShareableLinkInput(), document.execCommand("copy"), this.setState({
                    copiedToClipboard: !0
                })
            },
            selectShareableLinkInput: function() {
                return this.shareableLinkInput.select()
            },
            renderError: function() {
                if (this.state.error) {
                    var e = "Oops, something went wrong. Please try again.";
                    return n(_["default"], {
                        category: "error",
                        message: e
                    })
                }
                return null
            },
            renderModal: function() {
                var e = this;
                if (this.state.shareableLink) {
                    var t = parseInt(this.state.ttl / 86400);
                    return n(c["default"], {
                        id: this.getShareableLinkModalId(),
                        centered: !0,
                        bemModifiers: "share"
                    }, void 0, n("div", {
                        className: "shareableLinkModalContainer"
                    }, void 0, n("div", {
                        className: "u-paddingBottomMedium"
                    }, void 0, n("h2", {
                        className: "gr-h2"
                    }, void 0, "Share this ", this.props.resourceType, " link with others")), n("div", {
                        className: "u-fullWidth u-paddingBottomTiny"
                    }, void 0, n("label", {
                        htmlFor: "inviteUrl"
                    }, void 0, "Invite Link:"), React.createElement("input", {
                        className: "shareableLinkInput",
                        ref: function(t) {
                            e.shareableLinkInput = t
                        },
                        readOnly: !0,
                        id: "inviteUrl",
                        type: "text",
                        value: this.state.shareableLink,
                        onClick: this.selectShareableLinkInput
                    })), n("div", {
                        className: "u-paddingBottomMedium"
                    }, void 0, this.state.ttl && "This link will expire after " + t + " days. ", this.state.copiedToClipboard && "Link copied to clipboard!"), n("div", {}, void 0, n("button", {
                        type: "button",
                        className: "gr-button",
                        onClick: this.copyLinkToClipboard
                    }, void 0, "Copy link to clipboard"))))
                }
                return null
            },
            renderModalTrigger: function() {
                return this.state.fetching ? n(f["default"], {
                    isSmall: !0
                }) : n(u["default"], {
                    id: "shareableLinkModal"
                }, void 0, n("button", {
                    type: "button",
                    className: "gr-button",
                    onClick: this.handleClick
                }, void 0, "Get link"))
            },
            render: function() {
                return n("div", {
                    className: "u-paddingTopBottomTiny"
                }, void 0, n("div", {}, void 0, this.renderModalTrigger(), this.renderModal(), this.renderError()))
            }
        })
    }, {
        "../../modules/ajax/ajax_helper": 5,
        "../flash_message": 105,
        "../gr_component_factory": 107,
        "../modal": 145,
        "../modal_trigger": 146,
        "../spinner": 191,
        react: "react"
    }],
    179: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("./../gr_component_factory"),
            l = o(i),
            u = e("../../modules/ajax/ajax_helper");
        r["default"] = l["default"].createClass({
            displayName: "FacebookShare",
            propTypes: {
                options: a["default"].PropTypes.shape({
                    name: a["default"].PropTypes.string,
                    link: a["default"].PropTypes.string,
                    description: a["default"].PropTypes.string,
                    caption: a["default"].PropTypes.string,
                    picture: a["default"].PropTypes.string,
                    properties: a["default"].PropTypes.object,
                    action_link_text: a["default"].PropTypes.string,
                    resource_type: a["default"].PropTypes.string
                }).isRequired,
                metricName: a["default"].PropTypes.string
            },
            onFacebookButtonClick: function() {
                this.props.metricName && (0, u.httpPost)("/track/track_click", {
                    data: {
                        feature: this.props.metricName
                    }
                }), $grfb.feedDialog(this.props.options)
            },
            render: function() {
                var e = this;
                return n("button", {
                    className: this.withBemModifiers("shareSocialButtons__button") + " shareSocialButtons__button--facebook",
                    "aria-label": "Share to Facebook",
                    type: "button",
                    onClick: function() {
                        return e.onFacebookButtonClick()
                    }
                })
            }
        })
    }, {
        "../../modules/ajax/ajax_helper": 5,
        "./../gr_component_factory": 107,
        react: "react"
    }],
    180: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("./../gr_component_factory"),
            l = o(i),
            u = e("../../modules/ajax/ajax_helper"),
            d = e("../../modules/child_window_helper"),
            c = o(d);
        r["default"] = l["default"].createClass({
            displayName: "PinterestShare",
            propTypes: {
                options: a["default"].PropTypes.shape({
                    desription: a["default"].PropTypes.string,
                    url: a["default"].PropTypes.string,
                    media: a["default"].PropTypes.string
                }).isRequired,
                metricName: a["default"].PropTypes.string,
                windowSpecs: a["default"].PropTypes.object
            },
            getDefaultProps: function() {
                return {
                    windowSpecs: {
                        left: 400,
                        top: 200,
                        width: 700,
                        height: 800
                    }
                }
            },
            onPinterestButtonClick: function() {
                this.props.metricName && (0, u.httpPost)("/track/track_click", {
                    data: {
                        feature: this.props.metricName
                    }
                }), c["default"].openSocialShareWindow("https://pinterest.com/pin/create/link/", this.props.options, this.props.windowSpecs)
            },
            render: function() {
                var e = this;
                return n("button", {
                    className: this.withBemModifiers("shareSocialButtons__button") + " shareSocialButtons__button--pinterest",
                    "aria-label": "Share to Pinterest",
                    type: "button",
                    onClick: function() {
                        return e.onPinterestButtonClick()
                    }
                })
            }
        })
    }, {
        "../../modules/ajax/ajax_helper": 5,
        "../../modules/child_window_helper": 8,
        "./../gr_component_factory": 107,
        react: "react"
    }],
    181: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = e("../../gr_component_factory"),
            i = o(a),
            l = e("../../user_content/truncated_html"),
            u = o(l);
        r["default"] = i["default"].createClass({
            displayName: "ShareDialogBlogPreview",
            propTypes: {
                title: s.PropTypes.string.isRequired,
                imageUrl: s.PropTypes.string,
                description: s.PropTypes.string.isRequired
            },
            render: function() {
                return n("div", {
                    className: "gr-mediaFlexbox shareModal__previewContainer shareModal__previewContainer--blog"
                }, void 0, n("div", {
                    className: "gr-mediaFlexbox__media sharePreview__image sharePreview__image--blog"
                }, void 0, n("img", {
                    className: "gr-mediaFlexbox__media sharePreview__imageFullWidth",
                    src: this.props.imageUrl,
                    alt: this.props.title
                })), n("div", {
                    className: "gr-mediaFlexbox__desc"
                }, void 0, n("div", {
                    className: "gr-h3 gr-h3--serif gr-h3--noMargin"
                }, void 0, this.props.title), n("div", {
                    className: "u-marginTopXSmall"
                }, void 0, n("div", {
                    className: "sharePreview__description"
                }, void 0, n(u["default"], {
                    html: this.props.description,
                    truncated: !1
                })))))
            }
        })
    }, {
        "../../gr_component_factory": 107,
        "../../user_content/truncated_html": 204,
        react: "react"
    }],
    182: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = e("../../gr_component_factory"),
            i = o(a),
            l = e("./share_dialog_preview"),
            u = o(l),
            d = e("../../community_rating"),
            c = o(d),
            p = e("../../author/author_badge"),
            f = o(p);
        r["default"] = i["default"].createClass({
            displayName: "ShareDialogBookPreview",
            propTypes: {
                author: s.PropTypes.shape({
                    name: s.PropTypes.string.isRequired,
                    isGoodreadsAuthor: s.PropTypes.bool.isRequired
                }).isRequired,
                rating: s.PropTypes.string.isRequired,
                title: s.PropTypes.string.isRequired,
                imageUrl: s.PropTypes.string.isRequired,
                ratingsCount: s.PropTypes.number.isRequired,
                textReviewsCount: s.PropTypes.number.isRequired
            },
            renderAuthorText: function() {
                return n("div", {}, void 0, "by ", this.props.author.name, n(f["default"], {
                    isGoodreadsAuthor: this.props.author.isGoodreadsAuthor
                }))
            },
            render: function() {
                return n(u["default"], {
                    primaryText: this.props.title,
                    secondaryText: this.renderAuthorText(),
                    imageUrl: this.props.imageUrl
                }, void 0, n("div", {
                    className: "u-marginTopXSmall"
                }, void 0, n(c["default"], {
                    rating: parseFloat(this.props.rating),
                    displayAvg: !0,
                    displayAvgRatingText: !1,
                    ratingsCount: this.props.ratingsCount,
                    size: c["default"].ICON_SIZES.MEDIUM,
                    textReviewsCount: this.props.textReviewsCount
                })))
            }
        })
    }, {
        "../../author/author_badge": 71,
        "../../community_rating": 87,
        "../../gr_component_factory": 107,
        "./share_dialog_preview": 184,
        react: "react"
    }],
    183: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = e("../../gr_component_factory"),
            i = o(a),
            l = e("../../user_content/truncated_html"),
            u = o(l);
        r["default"] = i["default"].createClass({
            displayName: "ShareDialogInterviewPreview",
            propTypes: {
                title: s.PropTypes.string.isRequired,
                description: s.PropTypes.string.isRequired,
                author: s.PropTypes.string.isRequired,
                authorImageUrl: s.PropTypes.string,
                bookImageUrl: s.PropTypes.string,
                bookTitle: s.PropTypes.string,
                imageUrl: s.PropTypes.string
            },
            renderImage: function() {
                return this.props.imageUrl ? n("img", {
                    className: "gr-mediaFlexbox__media sharePreview__imageFullWidth",
                    src: this.props.imageUrl,
                    alt: this.props.title
                }) : this.props.authorImageUrl && this.props.bookImageUrl ? n("div", {
                    className: "gr-mediaFlexbox__media sharePreview__image",
                    style: {
                        display: "contents"
                    }
                }, void 0, n("div", {
                    className: "editorialCard__image--interview\n                          editorialCard__image--interviewAuthor",
                    style: {
                        backgroundImage: "url(" + this.props.authorImageUrl + ")"
                    }
                }, void 0, n("span", {
                    className: "u-visuallyHidden"
                }, void 0, this.props.author)), n("div", {
                    className: "editorialCard__image--interview\n                          editorialCard__image--interviewBook",
                    style: {
                        backgroundImage: "url(" + this.props.bookImageUrl + ")"
                    }
                }, void 0, n("span", {
                    className: "u-visuallyHidden"
                }, void 0, this.props.bookTitle))) : null
            },
            render: function() {
                return n("div", {}, void 0, n("div", {
                    className: "gr-mediaFlexbox shareModal__previewContainer",
                    style: {
                        display: "block"
                    }
                }, void 0, this.renderImage(), n("div", {
                    className: "gr-mediaFlexbox__desc"
                }, void 0, n("div", {
                    className: "gr-h3 gr-h3--serif gr-h3--noMargin"
                }, void 0, this.props.title), n("div", {
                    className: "u-marginTopXSmall"
                }, void 0, n("div", {
                    className: "sharePreview__description"
                }, void 0, n(u["default"], {
                    html: this.props.description,
                    truncated: !1
                }))))))
            }
        })
    }, {
        "../../gr_component_factory": 107,
        "../../user_content/truncated_html": 204,
        react: "react"
    }],
    184: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = e("../../gr_component_factory"),
            i = o(a);
        r["default"] = i["default"].createClass({
            displayName: "ShareDialogPreview",
            propTypes: {
                imageUrl: s.PropTypes.string.isRequired,
                primaryText: s.PropTypes.string.isRequired,
                secondaryText: s.PropTypes.oneOfType([s.PropTypes.element, s.PropTypes.string])
            },
            renderSecondaryText: function() {
                return this.props.secondaryText ? n("div", {
                    className: "sharePreview__secondaryText"
                }, void 0, this.props.secondaryText) : null
            },
            render: function() {
                return n("div", {
                    className: "gr-mediaFlexbox shareModal__previewContainer"
                }, void 0, n("img", {
                    className: "gr-mediaFlexbox__media sharePreview__image",
                    src: this.props.imageUrl,
                    alt: this.props.primaryText
                }), n("div", {
                    className: "gr-mediaFlexbox__desc"
                }, void 0, n("div", {
                    className: "gr-h3 gr-h3--serif gr-h3--noMargin"
                }, void 0, this.props.primaryText), this.renderSecondaryText(), n("div", {
                    className: "u-marginTopXSmall"
                }, void 0, this.props.children)))
            }
        })
    }, {
        "../../gr_component_factory": 107,
        react: "react"
    }],
    185: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("./share_dialog_preview"),
            a = o(s),
            i = e("react"),
            l = e("../../gr_component_factory"),
            u = o(l),
            d = e("../../user_content/truncated_html"),
            c = o(d);
        r["default"] = u["default"].createClass({
            displayName: "ShareDialogTopicPreview",
            propTypes: {
                topicTitle: i.PropTypes.string.isRequired,
                groupTitle: i.PropTypes.string.isRequired,
                imageUrl: i.PropTypes.string.isRequired,
                description: i.PropTypes.string
            },
            render: function() {
                var e = this.props.groupTitle + " - Discussion";
                return n(a["default"], {
                    primaryText: this.props.topicTitle,
                    secondaryText: e,
                    imageUrl: this.props.imageUrl
                }, void 0, n("div", {
                    className: "sharePreview__description"
                }, void 0, n(c["default"], {
                    html: this.props.description,
                    truncated: !1
                })))
            }
        })
    }, {
        "../../gr_component_factory": 107,
        "../../user_content/truncated_html": 204,
        "./share_dialog_preview": 184,
        react: "react"
    }],
    186: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("./../gr_component_factory"),
            l = o(i),
            u = e("../../modules/ajax/ajax_helper"),
            d = e("../../modules/child_window_helper"),
            c = o(d);
        r["default"] = l["default"].createClass({
            displayName: "TwitterShare",
            propTypes: {
                options: a["default"].PropTypes.shape({
                    text: a["default"].PropTypes.string,
                    url: a["default"].PropTypes.string,
                    via: a["default"].PropTypes.string
                }).isRequired,
                metricName: a["default"].PropTypes.string,
                windowSpecs: a["default"].PropTypes.object
            },
            getDefaultProps: function() {
                return {
                    windowSpecs: {
                        left: 400,
                        top: 200,
                        width: 600,
                        height: 500
                    }
                }
            },
            onTwitterButtonClick: function() {
                this.props.metricName && (0, u.httpPost)("/track/track_click", {
                    data: {
                        feature: this.props.metricName
                    }
                }), c["default"].openSocialShareWindow("https://twitter.com/intent/tweet/", this.props.options, this.props.windowSpecs)
            },
            render: function() {
                var e = this;
                return n("button", {
                    className: this.withBemModifiers("shareSocialButtons__button") + " shareSocialButtons__button--twitter",
                    "aria-label": "Share to Twitter",
                    type: "button",
                    onClick: function() {
                        return e.onTwitterButtonClick()
                    }
                })
            }
        })
    }, {
        "../../modules/ajax/ajax_helper": 5,
        "../../modules/child_window_helper": 8,
        "./../gr_component_factory": 107,
        react: "react"
    }],
    187: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("../gr_component_factory"),
            a = o(s),
            i = e("lodash"),
            l = o(i),
            u = e("classnames"),
            d = o(u);
        r["default"] = a["default"].createClass({
            displayName: "ChoiceSiteAnnouncement",
            propTypes: {
                imageUrl: React.PropTypes.string.isRequired,
                announcementText: React.PropTypes.string.isRequired,
                description: React.PropTypes.string.isRequired,
                targetUrl: React.PropTypes.string,
                totalVotes: React.PropTypes.number.isRequired
            },
            getAriaLabel: function() {
                return "Read more " + this.props.announcementText
            },
            hasTargetUrl: function() {
                return !l["default"].isEmpty(this.props.targetUrl)
            },
            renderAnnouncementTitle: function() {
                var e = this.hasTargetUrl(),
                    t = "siteAnnouncement__title";
                return e ? n("a", {
                    className: (0, d["default"])(t, "gr-hyperlink"),
                    "aria-label": this.getAriaLabel(),
                    href: this.props.targetUrl
                }, void 0, this.props.announcementText) : n("span", {
                    className: t
                }, void 0, this.props.announcementText)
            },
            render: function() {
                return n("div", {
                    className: "siteAnnouncement gr-mediaFlexbox gr-mediaFlexbox--columnDirection"
                }, void 0, n("a", {
                    className: "gr-mediaFlexbox__media siteAnnouncement__masthead",
                    href: this.props.targetUrl
                }, void 0, n("img", {
                    src: this.props.imageUrl,
                    alt: this.props.imageAlt
                })), n("div", {
                    className: "gr-mediaFlexbox__desc siteAnnouncement__body"
                }, void 0, this.renderAnnouncementTitle(), n("div", {
                    className: "siteAnnouncement__description"
                }, void 0, this.props.description), n("div", {
                    className: "siteAnnouncement__choiceVoteCount"
                }, void 0, this.props.totalVotes.toLocaleString(), " votes")))
            }
        })
    }, {
        "../gr_component_factory": 107,
        classnames: "classnames",
        lodash: "lodash"
    }],
    188: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("../gr_component_factory"),
            a = o(s),
            i = e("../shape_icon"),
            l = o(i),
            u = e("../../modules/shape_icon_values"),
            d = e("lodash"),
            c = o(d),
            p = e("classnames"),
            f = o(p);
        r["default"] = a["default"].createClass({
            displayName: "SimpleSiteAnnouncement",
            propTypes: {
                imageUrl: React.PropTypes.string.isRequired,
                announcementText: React.PropTypes.string.isRequired,
                targetUrl: React.PropTypes.string
            },
            getAriaLabel: function() {
                return "Read more " + this.props.announcementText
            },
            hasTargetUrl: function() {
                return !c["default"].isEmpty(this.props.targetUrl)
            },
            renderIcon: function() {
                return n(l["default"], {
                    imageUrl: this.props.imageUrl,
                    size: u.ICON_SIZES.MEDIUM,
                    imageAlt: "Site Announcement",
                    border: !0
                })
            },
            renderAnnouncementText: function() {
                var e = this.hasTargetUrl(),
                    t = "siteAnnouncement__simpleText";
                return e ? n("a", {
                    className: (0, f["default"])(t, "gr-hyperlink"),
                    "aria-label": this.getAriaLabel(),
                    href: this.props.targetUrl
                }, void 0, this.props.announcementText) : n("span", {
                    className: t
                }, void 0, this.props.announcementText)
            },
            renderSecondaryLinkSection: function() {
                return this.hasTargetUrl() ? n("span", {
                    className: "siteAnnouncement__simpleSecondaryLinkSection"
                }, void 0, n("a", {
                    className: "gr-button gr-button--quiet",
                    "aria-label": this.getAriaLabel(),
                    href: this.props.targetUrl
                }, void 0, "Read more")) : null
            },
            render: function() {
                return n("div", {
                    className: "siteAnnouncement\n                      siteAnnouncement--simple\n                      gr-mediaFlexbox\n                      gr-mediaFlexbox--alignItemsCenter"
                }, void 0, n("div", {
                    className: "gr-mediaFlexbox__media"
                }, void 0, this.renderIcon()), n("div", {
                    className: "gr-mediaFlexbox__desc siteAnnouncement__simpleBody"
                }, void 0, n("h5", {
                    className: "gr-h5 gr-h5--noMargin siteAnnouncement__simpleHeader"
                }, void 0, "Goodreads news"), this.renderAnnouncementText()), this.renderSecondaryLinkSection())
            }
        })
    }, {
        "../../modules/shape_icon_values": 19,
        "../gr_component_factory": 107,
        "../shape_icon": 171,
        classnames: "classnames",
        lodash: "lodash"
    }],
    189: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = e("../gr_component_factory"),
            i = o(a),
            l = e("./simple_site_announcement"),
            u = o(l);
        r["default"] = i["default"].createClass({
            displayName: "SiteAnnouncement",
            propTypes: {
                title: s.PropTypes.string.isRequired,
                targetUrl: s.PropTypes.string,
                displayData: s.PropTypes.shape({
                    description: s.PropTypes.string,
                    mastheadUrl: s.PropTypes.string,
                    imageUrl: s.PropTypes.string
                }).isRequired
            },
            shouldRenderLargeAnnouncement: function() {
                var e = this.props.displayData;
                return e && e.description && e.mastheadUrl
            },
            renderLargeAnnouncement: function() {
                return n("div", {
                    className: "siteAnnouncement gr-mediaFlexbox gr-mediaFlexbox--columnDirection"
                }, void 0, n("a", {
                    className: "gr-mediaFlexbox__media siteAnnouncement__masthead",
                    href: this.props.targetUrl,
                    "aria-label": this.props.title
                }, void 0, n("img", {
                    src: this.props.displayData.mastheadUrl,
                    alt: this.props.title
                })), n("div", {
                    className: "gr-mediaFlexbox__desc siteAnnouncement__body"
                }, void 0, n("a", {
                    className: "siteAnnouncement__title gr-hyperlink",
                    href: this.props.targetUrl
                }, void 0, this.props.title), n("div", {
                    className: "siteAnnouncement__description"
                }, void 0, this.props.displayData.description)))
            },
            render: function() {
                return this.shouldRenderLargeAnnouncement() ? this.renderLargeAnnouncement() : n(u["default"], {
                    imageUrl: this.props.displayData.imageUrl,
                    announcementText: this.props.title,
                    targetUrl: this.props.targetUrl
                })
            }
        })
    }, {
        "../gr_component_factory": 107,
        "./simple_site_announcement": 188,
        react: "react"
    }],
    190: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("../gr_component_factory"),
            a = o(s),
            i = e("../shape_icon"),
            l = o(i),
            u = e("../../modules/shape_icon_values");
        r["default"] = a["default"].createClass({
            displayName: "WelcomeAnnouncement",
            propTypes: {
                imageUrl: React.PropTypes.string.isRequired
            },
            renderIcon: function() {
                return n(l["default"], {
                    imageUrl: this.props.imageUrl,
                    size: u.ICON_SIZES.MEDIUM,
                    imageAlt: "Welcome to Goodreads",
                    border: !0
                })
            },
            render: function() {
                return n("div", {
                    className: "siteAnnouncement siteAnnouncement--welcome"
                }, void 0, n("div", {
                    className: "siteAnnouncement__welcomeIcon"
                }, void 0, this.renderIcon()), n("div", {
                    className: "siteAnnouncement__welcomeBody"
                }, void 0, n("h5", {
                    className: "siteAnnouncement__announcementText"
                }, void 0, "Welcome to Goodreads"), n("span", {}, void 0, "Meet your favorite book, find your reading community, and manage your reading life.")))
            }
        })
    }, {
        "../../modules/shape_icon_values": 19,
        "../gr_component_factory": 107,
        "../shape_icon": 171
    }],
    191: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("./gr_component_factory"),
            a = o(s),
            i = e("classnames"),
            l = o(i);
        r["default"] = a["default"].createClass({
            displayName: "Spinner",
            propTypes: {
                isSmall: React.PropTypes.bool
            },
            getDefaultProps: function() {
                return {
                    isSmall: !1
                }
            },
            render: function() {
                var e = (0, l["default"])("spinnerContainer", this.props.className),
                    t = this.props.isSmall ? "small" : null;
                return n("div", {
                    className: e
                }, void 0, n("div", {
                    className: this.withBemModifiers("spinner", t)
                }, void 0, n("div", {
                    className: this.withBemModifiers("spinner__mask", t)
                }, void 0, n("div", {
                    className: this.withBemModifiers("spinner__maskedCircle", t)
                }))), n("div", {
                    className: "spinnerFallbackText"
                }, void 0, "Loading…"))
            }
        })
    }, {
        "./gr_component_factory": 107,
        classnames: "classnames"
    }],
    192: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("./gr_component_factory"),
            l = o(i);
        r["default"] = l["default"].createClass({
            displayName: "SponsoredFooter",
            propTypes: {
                sponsoredName: a["default"].PropTypes.string
            },
            renderSponsoredName: function() {
                return this.props.sponsoredName ? n("span", {
                    className: "featuredContentModule__sponsoredName"
                }, void 0, this.props.sponsoredName) : void 0
            },
            render: function() {
                var e = "featuredContentModule__sponsoredFooter",
                    t = this.props.sponsoredName ? "Sponsored by " : "Sponsored";
                return n("div", {
                    className: e
                }, void 0, n("span", {
                    className: "featuredContentModule__sponsoredBadgeIcon"
                }), n("span", {
                    className: "featuredContentModule__sponsoredLabel"
                }, void 0, t), this.renderSponsoredName())
            }
        })
    }, {
        "./gr_component_factory": 107,
        react: "react"
    }],
    193: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./gr_component_factory"),
            s = o(n);
        r["default"] = s["default"].createClass({
            displayName: "StoresInitializer",
            render: function() {
                return null
            }
        })
    }, {
        "./gr_component_factory": 107
    }],
    194: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("react"),
            s = o(n),
            a = e("./gr_component_factory"),
            i = o(a),
            l = e("../react_actions/tab_actions"),
            u = o(l),
            d = {
                CLICK: "click",
                HOVER: "hover"
            };
        r["default"] = i["default"].createClass({
            displayName: "Tab",
            propTypes: {
                group: s["default"].PropTypes.string.isRequired,
                name: s["default"].PropTypes.string.isRequired,
                initiallySelected: s["default"].PropTypes.bool,
                triggerEventType: s["default"].PropTypes.string
            },
            getDefaultProps: function() {
                return {
                    initiallySelected: !1,
                    triggerEventType: d.CLICK
                }
            },
            componentDidMount: function() {
                this.props.initiallySelected && this.selectTab()
            },
            selectTab: function() {
                u["default"].selectTab(this.props.name, this.props.group)
            },
            render: function() {
                var e = {};
                switch (this.props.triggerEventType) {
                    case d.CLICK:
                        e.onClick = this.selectTab;
                        break;
                    case d.HOVER:
                        e.onMouseOver = this.selectTab
                }
                return s["default"].createElement("span", e, this.props.children)
            }
        })
    }, {
        "../react_actions/tab_actions": 45,
        "./gr_component_factory": 107,
        react: "react"
    }],
    195: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("./gr_component_factory"),
            l = o(i),
            u = e("reflux"),
            d = o(u),
            c = e("../react_stores/tabs_store"),
            p = o(c);
        r["default"] = l["default"].createClass({
            displayName: "TabContent",
            mixins: [d["default"].connect(p["default"], "tabsStore")],
            propTypes: {
                group: a["default"].PropTypes.string.isRequired,
                name: a["default"].PropTypes.string.isRequired
            },
            isActive: function() {
                return this.props.name === this.state.tabsStore[this.props.group]
            },
            render: function() {
                return n("div", {}, void 0, this.isActive() ? this.props.children : null)
            }
        })
    }, {
        "../react_stores/tabs_store": 254,
        "./gr_component_factory": 107,
        react: "react",
        reflux: "reflux"
    }],
    196: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("../gr_component_factory"),
            l = o(i),
            u = e("../shared/gr_prop_types"),
            d = o(u),
            c = e("moment"),
            p = o(c),
            f = e("../../modules/date_utils");
        r["default"] = l["default"].createClass({
            displayName: "RelativeTime",
            propTypes: {
                time: d["default"].date.isRequired,
                longFormat: a["default"].PropTypes.bool
            },
            getDefaultProps: function() {
                return {
                    longFormat: !1
                }
            },
            getRelativeTime: function() {
                return this.props.longFormat ? (0, p["default"])(new Date(this.props.time)).fromNow() : (0, f.fromNow)(this.props.time)
            },
            render: function() {
                return n("time", {
                    dateTime: this.props.time,
                    "aria-label": (0, p["default"])(new Date(this.props.time)).fromNow()
                }, void 0, this.getRelativeTime())
            }
        })
    }, {
        "../../modules/date_utils": 11,
        "../gr_component_factory": 107,
        "../shared/gr_prop_types": 176,
        moment: "moment",
        react: "react"
    }],
    197: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("reflux"),
            a = o(s),
            i = e("../gr_component_factory"),
            l = o(i),
            u = e("../shared/gr_prop_types"),
            d = o(u),
            c = e("../../modules/user/friend_status_values"),
            p = e("../../react_actions/user/user_follow_actions"),
            f = o(p),
            h = e("../../react_stores/user/user_follow_store"),
            m = o(h);
        r["default"] = l["default"].createClass({
            displayName: "UserFollowWidget",
            mixins: [a["default"].connectFilter(m["default"], "userFollowStore", function(e) {
                return e[this.props.displayUser.id]
            })],
            propTypes: {
                displayUser: d["default"].user().isRequired
            },
            renderFollowStatus: function() {
                var e = this,
                    t = this.state.userFollowStore;
                if (t.isFollowing) {
                    var r = this.props.displayUser.firstName || this.props.displayUser.viewableName;
                    return n("div", {
                        className: "gr-box gr-box--inline gr-box--marginRightSmall"
                    }, void 0, "You are following ", r, ".")
                }
                return n("button", {
                    className: "gr-button gr-button--small gr-box gr-box--inline gr-box--marginRightSmall",
                    onClick: function() {
                        return f["default"].follow(e.props.displayUser.id)
                    },
                    disabled: t.buttonEnabled ? !1 : "disabled"
                }, void 0, "Follow")
            },
            renderUnfollowButtonIfNeeded: function() {
                var e = this,
                    t = this.state.userFollowStore;
                return t.isFollowing && t.friendshipStatus !== c.FRIEND_STATUS.REQUEST_PENDING_TO ? n("button", {
                    className: "gr-button gr-buttonAsLink gr-buttonAsLink--quiet",
                    onClick: function() {
                        return f["default"].unFollow(e.props.displayUser.id)
                    },
                    disabled: t.buttonEnabled ? !1 : "disabled"
                }, void 0, n("span", {
                    className: "gr-metaText"
                }, void 0, "Unfollow")) : void 0
            },
            shouldHideFollowButtons: function() {
                var e = this.state.userFollowStore;
                return e.friendshipStatus == c.FRIEND_STATUS.FRIEND || e.friendshipStatus == c.FRIEND_STATUS.SELF || e.isBlocked || !e.allowsFollow
            },
            render: function() {
                return this.shouldHideFollowButtons() ? null : n("div", {
                    className: "userFollowWidget"
                }, void 0, this.renderFollowStatus(), this.renderUnfollowButtonIfNeeded())
            }
        })
    }, {
        "../../modules/user/friend_status_values": 23,
        "../../react_actions/user/user_follow_actions": 47,
        "../../react_stores/user/user_follow_store": 256,
        "../gr_component_factory": 107,
        "../shared/gr_prop_types": 176,
        reflux: "reflux"
    }],
    198: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
            }
            return e
        };
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("../gr_component_factory"),
            l = o(i),
            u = e("../shape_icon"),
            d = o(u),
            c = e("../../modules/shape_icon_values");
        r["default"] = l["default"].createClass({
            displayName: "UserIcon",
            propTypes: {
                user: a["default"].PropTypes.shape({
                    viewableName: a["default"].PropTypes.string.isRequired,
                    profileImage: a["default"].PropTypes.string.isRequired,
                    profileUrl: a["default"].PropTypes.string
                }).isRequired,
                includeLink: a["default"].PropTypes.bool,
                size: a["default"].PropTypes.oneOf([c.ICON_SIZES.SMALL, c.ICON_SIZES.MEDIUM, c.ICON_SIZES.LARGE])
            },
            getDefaultProps: function() {
                return {
                    includeLink: !0,
                    size: c.ICON_SIZES.SMALL
                }
            },
            render: function() {
                var e = this.props.user;
                return a["default"].createElement(d["default"], n({
                    imageUrl: e.profileImage,
                    imageAlt: e.viewableName,
                    linkUrl: e.profileUrl,
                    border: !0
                }, this.props))
            }
        })
    }, {
        "../../modules/shape_icon_values": 19,
        "../gr_component_factory": 107,
        "../shape_icon": 171,
        react: "react"
    }],
    199: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("classnames"),
            l = o(i),
            u = e("../gr_component_factory"),
            d = o(u),
            c = e("../shared/gr_prop_types"),
            p = o(c),
            f = e("../click_tracking_wrapper"),
            h = o(f),
            m = e("../../modules/ads/click_tracking_helper");
        r["default"] = d["default"].createClass({
            displayName: "UserProfileLink",
            propTypes: {
                user: p["default"].user().isRequired,
                className: a["default"].PropTypes.string
            },
            userName: function() {
                return {
                    __html: this.props.user.viewableName
                }
            },
            render: function() {
                var e = (0, l["default"])("gr-hyperlink", "gr-hyperlink--bold", "gr-user__profileLink", this.props.className),
                    t = n("a", {
                        className: e,
                        href: this.props.user.profileUrl,
                        dangerouslySetInnerHTML: this.userName()
                    });
                return this.props.user.profileUrl ? n(h["default"], {
                    children: t,
                    trackingOptions: m.TRACKED_CLASSES.user_profile
                }) : n("b", {}, void 0, this.props.user.viewableName)
            }
        })
    }, {
        "../../modules/ads/click_tracking_helper": 3,
        "../click_tracking_wrapper": 81,
        "../gr_component_factory": 107,
        "../shared/gr_prop_types": 176,
        classnames: "classnames",
        react: "react"
    }],
    200: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("lodash"),
            a = o(s),
            i = e("../gr_component_factory"),
            l = o(i),
            u = e("../shared/gr_prop_types"),
            d = o(u),
            c = e("../shared/gr_spoiler_handler"),
            p = o(c),
            f = e("classnames"),
            h = o(f);
        r["default"] = l["default"].createClass({
            displayName: "ExpandableHtml",
            propTypes: d["default"].expandableHtml(),
            getInitialState: function() {
                return {
                    expanded: !1
                }
            },
            collapse: function() {
                this.setState({
                    expanded: !1
                })
            },
            expand: function() {
                this.setState({
                    expanded: !0
                })
            },
            expandable: function() {
                return !a["default"].isEmpty(this.props.truncatedHtml)
            },
            visibleHtml: function() {
                return this.expandable() && this.state.expanded !== !0 ? this.props.truncatedHtml : this.props.html
            },
            renderToggleButton: function() {
                if (!this.expandable()) return null;
                var e = this.state.expanded ? this.collapse : this.expand,
                    t = this.state.expanded ? "Less" : "More",
                    r = (0, h["default"])("gr-buttonAsLink", "u-marginLeftTiny");
                return n("button", {
                    className: r,
                    onClick: e
                }, void 0, t)
            },
            componentDidMount: function() {
                this.refs.rootNode && p["default"].replaceSpoilerHTMLWithReactComponents(this.refs.rootNode)
            },
            componentDidUpdate: function() {
                this.refs.rootNode && p["default"].replaceSpoilerHTMLWithReactComponents(this.refs.rootNode)
            },
            render: function() {
                if (a["default"].isEmpty(this.props.html)) return null;
                var e = (0, h["default"])("expandableHtml", this.props.className);
                return React.createElement("div", {
                    className: e,
                    ref: "rootNode"
                }, n("span", {
                    dangerouslySetInnerHTML: {
                        __html: this.visibleHtml()
                    }
                }), this.renderToggleButton())
            }
        })
    }, {
        "../gr_component_factory": 107,
        "../shared/gr_prop_types": 176,
        "../shared/gr_spoiler_handler": 177,
        classnames: "classnames",
        lodash: "lodash"
    }],
    201: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("../gr_component_factory"),
            a = o(s);
        r["default"] = a["default"].createClass({
            displayName: "HiddenHtml",
            propTypes: {
                unhideText: React.PropTypes.string
            },
            getDefaultProps: function() {
                return {
                    unhideText: "unhide"
                }
            },
            getInitialState: function() {
                return {
                    expanded: !1
                }
            },
            expand: function() {
                this.setState({
                    expanded: !0
                })
            },
            renderUnhideButton: function() {
                return n("button", {
                    className: "gr-buttonAsLink",
                    onClick: this.expand
                }, void 0, this.props.unhideText)
            },
            renderContent: function() {
                return this.state.expanded ? this.props.children : n("span", {}, void 0, this.renderUnhideButton())
            },
            render: function() {
                return n("div", {}, void 0, this.renderContent())
            }
        })
    }, {
        "../gr_component_factory": 107
    }],
    202: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("../gr_component_factory"),
            l = o(i);
        r["default"] = l["default"].createClass({
            displayName: "Spoiler",
            propTypes: {
                html: a["default"].PropTypes.string,
                spoilerWarning: a["default"].PropTypes.oneOfType([a["default"].PropTypes.string, a["default"].PropTypes.element])
            },
            componentWillMount: function() {
                if (null === this.props.html && null === this.props.children) throw new Error("props.children and props.html cannot both be null")
            },
            getDefaultProps: function() {
                return {
                    html: null,
                    spoilerWarning: null
                }
            },
            getInitialState: function() {
                return {
                    showSpoiler: !1
                }
            },
            onClickShowSpoiler: function() {
                this.setState({
                    showSpoiler: !0
                })
            },
            onClickHideSpoiler: function() {
                this.setState({
                    showSpoiler: !1
                })
            },
            getSpoilerHtml: function() {
                return {
                    __html: this.props.html
                }
            },
            renderSpoiler: function() {
                return this.props.html ? n("span", {
                    className: "spoiler__text u-marginRightTiny",
                    dangerouslySetInnerHTML: this.getSpoilerHtml()
                }) : this.props.children
            },
            render: function() {
                return n("span", {}, void 0, this.state.showSpoiler ? n("span", {
                    className: "spoiler__textContainer"
                }, void 0, this.renderSpoiler(), n("button", {
                    className: "gr-buttonAsLink",
                    onClick: this.onClickHideSpoiler
                }, void 0, "(hide spoiler)")) : n("span", {}, void 0, this.props.spoilerWarning, n("button", {
                    className: "gr-buttonAsLink",
                    onClick: this.onClickShowSpoiler
                }, void 0, "(view spoiler)")))
            }
        })
    }, {
        "../gr_component_factory": 107,
        react: "react"
    }],
    203: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = e("../gr_component_factory"),
            i = o(a),
            l = e("../../modules/string_helper"),
            u = e("pluralize"),
            d = o(u);
        r["default"] = i["default"].createClass({
            displayName: "StringCounter",
            propTypes: {
                counterType: s.PropTypes.oneOf(["character", "word"]).isRequired,
                maxLength: s.PropTypes.number.isRequired,
                text: s.PropTypes.string.isRequired,
                warnLength: s.PropTypes.number
            },
            renderWarning: function(e) {
                var t = void 0;
                return 0 > e && (t = "gr-smallAlert"), n("span", {
                    className: t,
                    role: "alert"
                }, void 0, e, " ", (0, d["default"])(this.props.counterType, e), " left")
            },
            countType: function() {
                return "character" === this.props.counterType ? (0, l.astralLength)(this.props.text) : "word" === this.props.counterType ? (0, l.countWords)(this.props.text) : null
            },
            render: function() {
                var e = this.countType(this.props.text),
                    t = this.props.maxLength - e,
                    r = this.props.warnLength ? t <= this.props.warnLength : !0;
                return r ? n("div", {}, void 0, this.renderWarning(t)) : null
            }
        })
    }, {
        "../../modules/string_helper": 21,
        "../gr_component_factory": 107,
        pluralize: "pluralize",
        react: "react"
    }],
    204: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("../gr_component_factory"),
            a = o(s),
            i = e("../shared/gr_prop_types"),
            l = o(i),
            u = e("../shared/gr_spoiler_handler"),
            d = o(u),
            c = e("../click_tracking_wrapper"),
            p = o(c),
            f = e("../../modules/ads/click_tracking_helper");
        r["default"] = a["default"].createClass({
            displayName: "TruncatedHtml",
            propTypes: l["default"].truncatedHtml(),
            getDefaultProps: function() {
                return {
                    fullContentText: "More",
                    bookDescriptionTargetingData: f.TRACKED_CLASSES.full_content_link
                }
            },
            componentDidMount: function() {
                d["default"].replaceSpoilerHTMLWithReactComponents(this.refs.rootNode);
            },
            render: function() {
                var e = n("a", {
                    className: "u-marginLeftTiny fullContentLink",
                    href: this.props.fullContentUrl
                }, void 0, this.props.fullContentText);
                return React.createElement("div", {
                    ref: "rootNode",
                    className: this.props.className
                }, n("span", {
                    dangerouslySetInnerHTML: {
                        __html: this.props.html
                    }
                }), this.props.truncated ? n(p["default"], {
                    children: e,
                    trackingOptions: this.props.bookDescriptionTargetingData
                }) : null)
            }
        })
    }, {
        "../../modules/ads/click_tracking_helper": 3,
        "../click_tracking_wrapper": 81,
        "../gr_component_factory": 107,
        "../shared/gr_prop_types": 176,
        "../shared/gr_spoiler_handler": 177
    }],
    205: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("lodash"),
            l = o(i),
            u = e("./gr_component_factory"),
            d = o(u),
            c = e("classnames"),
            p = o(c),
            f = e("../react_actions/shelvings_actions"),
            h = o(f),
            m = e("../react_stores/shelvings_store"),
            _ = o(m),
            g = e("./click_tracking_wrapper"),
            v = o(g),
            y = e("../react_mixins/gr_reflux"),
            b = e("../modules/ads/click_tracking_helper");
        r["default"] = d["default"].createClass({
            displayName: "UserRating",
            mixins: [(0, y.connectToLazyStore)(_["default"], "bookId")],
            propTypes: {
                bookId: a["default"].PropTypes.string.isRequired,
                bookTitle: a["default"].PropTypes.string,
                starsTrackingOptions: a["default"].PropTypes.object,
                showLargeStars: a["default"].PropTypes.bool
            },
            getDefaultProps: function() {
                return {
                    starsTrackingOptions: b.TRACKED_CLASSES.user_rating_star,
                    showLargeStars: !1
                }
            },
            setHoverRating: function(e) {
                this.setState({
                    hoverRating: e
                })
            },
            removeHoverRating: function() {
                this.setState({
                    hoverRating: null
                })
            },
            isShelved: function() {
                return null !== this.state.exclusiveShelfName
            },
            updateRating: function(e, t) {
                t.preventDefault(), this.isShelved() ? h["default"].rateBook(this.state.book.bookId, e, this.state.book.title) : h["default"].rateBook(this.props.bookId, e, this.props.bookTitle), this.refs.ratingContainer.focus()
            },
            starLabel: function k(e) {
                var k = void 0;
                return k = null !== this.state.exclusiveShelfName && this.state.rating > 0 ? "Change rating from " + this.state.rating + " to " + e + " " : "Rate " + e + " ", k += 1 === e ? "star" : "stars"
            },
            renderStar: function(e) {
                var t = e + 1,
                    r = null !== this.state.exclusiveShelfName ? this.state.rating : 0,
                    o = this.state.hoverRating ? this.state.hoverRating : r,
                    s = (0, p["default"])("userRating__star", {
                        "userRating__star--selected": o >= t,
                        "userRating__star--largeStars": this.props.showLargeStars
                    }),
                    a = n("button", {
                        className: s,
                        title: this.starLabel(t),
                        onClick: this.updateRating.bind(this, t),
                        onMouseEnter: this.setHoverRating.bind(this, t)
                    });
                return n(v["default"], {
                    children: a,
                    trackingOptions: this.props.starsTrackingOptions
                }, t)
            },
            renderTextLabel: function() {
                var e = (0, p["default"])("userRating__label", "gr-metaText", {
                    "userRating__label--largeStars": this.props.showLargeStars
                });
                return n("div", {
                    className: e
                }, void 0, null !== this.state.exclusiveShelfName && this.state.rating > 0 ? "Your rating:" : "Rate it:")
            },
            render: function() {
                var e = (0, p["default"])("userRating", {
                    "userRating--largeStars": this.props.showLargeStars
                });
                return n("div", {
                    className: e
                }, void 0, this.renderTextLabel(), a["default"].createElement("div", {
                    className: "userRating__starsWrapper",
                    tabIndex: "0",
                    ref: "ratingContainer",
                    role: "group",
                    onMouseLeave: this.removeHoverRating
                }, l["default"].times(5, function(e) {
                    return this.renderStar(e)
                }, this)))
            }
        })
    }, {
        "../modules/ads/click_tracking_helper": 3,
        "../react_actions/shelvings_actions": 44,
        "../react_mixins/gr_reflux": 231,
        "../react_stores/shelvings_store": 253,
        "./click_tracking_wrapper": 81,
        "./gr_component_factory": 107,
        classnames: "classnames",
        lodash: "lodash",
        react: "react"
    }],
    206: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = e("../../gr_component_factory"),
            i = o(a),
            l = e("../../modal"),
            u = o(l),
            d = e("../../../react_actions/user/show/block_user_actions"),
            c = o(d),
            p = e("../../../modules/modal_id_helper");
        r["default"] = i["default"].createClass({
            displayName: "BlockUserConfirmationModal",
            propTypes: {
                displayUser: s.PropTypes.shape({
                    firstName: React.PropTypes.string.isRequired,
                    viewableName: React.PropTypes.string.isRequired,
                    userId: React.PropTypes.number.isRequired
                }).isRequired,
                fromDropdown: s.PropTypes.bool,
                isBlocked: s.PropTypes.bool.isRequired
            },
            getDefaultProps: function() {
                return {
                    fromDropdown: !1
                }
            },
            handleConfirmBlockUser: function() {
                c["default"].blockMember(this.props.displayUser.userId)
            },
            render: function() {
                return this.props.isBlocked ? n(u["default"], {
                    id: (0, p.getUnblockUserModalId)(this.props.displayUser.userId, this.props.fromDropdown),
                    bemModifiers: "friendFollowModule",
                    onConfirmHandler: this.handleConfirmBlockUser
                }, void 0, n("div", {
                    className: "friendFollowConfirmModal"
                }, void 0, n("h2", {
                    className: "gr-h2 gr-h2--serif"
                }, void 0, "Unblock ", this.props.displayUser.viewableName, "?"), n("div", {
                    className: "friendFollowConfirmModal__body"
                }, void 0, "Your profile will appear to ", this.props.displayUser.firstName, " as it would to any other Goodreads member. Their comments on discussion boards will be displayed normally. Are you sure?"))) : n(u["default"], {
                    id: (0, p.getBlockUserModalId)(this.props.displayUser.userId, this.props.fromDropdown),
                    bemModifiers: "friendFollowModule",
                    onConfirmHandler: this.handleConfirmBlockUser
                }, void 0, n("div", {
                    className: "friendFollowConfirmModal"
                }, void 0, n("h2", {
                    className: "gr-h2 gr-h2--serif"
                }, void 0, "Block ", this.props.displayUser.viewableName, "?"), n("div", {
                    className: "friendFollowConfirmModal__body"
                }, void 0, "This will prevent ", this.props.displayUser.firstName, " from sending you messages, friend request or from viewing your profile. They will not be notified. Comments on discussion boards from them will be hidden by default.")))
            }
        })
    }, {
        "../../../modules/modal_id_helper": 17,
        "../../../react_actions/user/show/block_user_actions": 46,
        "../../gr_component_factory": 107,
        "../../modal": 145,
        react: "react"
    }],
    207: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = e("../../gr_component_factory"),
            i = o(a),
            l = e("../../modal"),
            u = o(l),
            d = e("../../../react_actions/user_relationships/friend_follow_actions"),
            c = o(d),
            p = e("../../../modules/modal_id_helper");
        r["default"] = i["default"].createClass({
            displayName: "CancelFriendRequestConfirmationModal",
            propTypes: {
                displayUser: s.PropTypes.shape({
                    firstName: React.PropTypes.string.isRequired,
                    viewableName: React.PropTypes.string.isRequired,
                    userId: React.PropTypes.number.isRequired
                }).isRequired,
                fromDropdown: s.PropTypes.bool,
                friendRequestToId: s.PropTypes.number.isRequired
            },
            getDefaultProps: function() {
                return {
                    fromDropdown: !1
                }
            },
            handleConfirmCancelFriendRequest: function() {
                c["default"].cancelFriendRequest(this.props.displayUser.userId, this.props.friendRequestToId)
            },
            render: function() {
                return n(u["default"], {
                    id: (0, p.getCancelFriendRequestModalId)(this.props.displayUser.userId, this.props.fromDropdown),
                    bemModifiers: "friendFollowModule",
                    onConfirmHandler: this.handleConfirmCancelFriendRequest
                }, void 0, n("div", {
                    className: "friendFollowConfirmModal"
                }, void 0, n("h2", {
                    className: "gr-h2 gr-h2--serif"
                }, void 0, "Cancel Friend Request to ", this.props.displayUser.viewableName, "?"), n("div", {
                    className: "friendFollowConfirmModal__body"
                }, void 0, "This will cancel your friend request and also unfollow ", this.props.displayUser.firstName, ", removing their activity from your updates feed.")))
            }
        })
    }, {
        "../../../modules/modal_id_helper": 17,
        "../../../react_actions/user_relationships/friend_follow_actions": 50,
        "../../gr_component_factory": 107,
        "../../modal": 145,
        react: "react"
    }],
    208: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = e("../../gr_component_factory"),
            i = o(a),
            l = e("../../modal"),
            u = o(l),
            d = e("../../../react_actions/user_relationships/friend_follow_actions"),
            c = o(d),
            p = e("../../../modules/modal_id_helper");
        r["default"] = i["default"].createClass({
            displayName: "UnfollowConfirmationModal",
            propTypes: {
                displayUser: s.PropTypes.shape({
                    firstName: React.PropTypes.string.isRequired,
                    viewableName: React.PropTypes.string.isRequired,
                    userId: React.PropTypes.number.isRequired
                }).isRequired,
                fromDropdown: s.PropTypes.bool
            },
            getDefaultProps: function() {
                return {
                    fromDropdown: !1
                }
            },
            handleConfirmUnfollow: function() {
                c["default"].unfollow(this.props.displayUser.userId)
            },
            render: function() {
                return n(u["default"], {
                    id: (0, p.getUnfollowModalId)(this.props.displayUser.userId, this.props.fromDropdown),
                    bemModifiers: "friendFollowModule",
                    onConfirmHandler: this.handleConfirmUnfollow
                }, void 0, n("div", {
                    className: "friendFollowConfirmModal"
                }, void 0, n("h2", {
                    className: "gr-h2 gr-h2--serif"
                }, void 0, "Unfollow ", this.props.displayUser.viewableName, "?"), n("div", {
                    className: "friendFollowConfirmModal__body"
                }, void 0, "This will remove ", this.props.displayUser.firstName, "'s activity from your updates feed.")))
            }
        })
    }, {
        "../../../modules/modal_id_helper": 17,
        "../../../react_actions/user_relationships/friend_follow_actions": 50,
        "../../gr_component_factory": 107,
        "../../modal": 145,
        react: "react"
    }],
    209: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = e("../../gr_component_factory"),
            i = o(a),
            l = e("../../modal"),
            u = o(l),
            d = e("../../../react_actions/user_relationships/friend_follow_actions"),
            c = o(d),
            p = e("../../../modules/modal_id_helper");
        r["default"] = i["default"].createClass({
            displayName: "UnfriendConfirmationModal",
            propTypes: {
                displayUser: s.PropTypes.shape({
                    firstName: React.PropTypes.string.isRequired,
                    viewableName: React.PropTypes.string.isRequired,
                    userId: React.PropTypes.number.isRequired
                }).isRequired,
                fromDropdown: s.PropTypes.bool
            },
            getDefaultProps: function() {
                return {
                    fromDropdown: !1
                }
            },
            handleConfirmUnfriend: function() {
                c["default"].unfriend(this.props.displayUser.userId)
            },
            render: function() {
                return n(u["default"], {
                    id: (0, p.getUnfriendModalId)(this.props.displayUser.userId, this.props.fromDropdown),
                    bemModifiers: "friendFollowModule",
                    onConfirmHandler: this.handleConfirmUnfriend
                }, void 0, n("div", {
                    className: "friendFollowConfirmModal"
                }, void 0, n("h2", {
                    className: "gr-h2 gr-h2--serif"
                }, void 0, "Unfriend ", this.props.displayUser.viewableName, "?"), n("div", {
                    className: "friendFollowConfirmModal__body"
                }, void 0, "This will remove ", this.props.displayUser.firstName, "'s activity from your updates feed, and your own activity will stop appearing in their updates feed. ", this.props.displayUser.firstName, " will not be notified.")))
            }
        })
    }, {
        "../../../modules/modal_id_helper": 17,
        "../../../react_actions/user_relationships/friend_follow_actions": 50,
        "../../gr_component_factory": 107,
        "../../modal": 145,
        react: "react"
    }],
    210: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("classnames"),
            l = o(i),
            u = e("../gr_component_factory"),
            d = o(u),
            c = e("../../react_actions/user_relationships/friend_follow_actions"),
            p = o(c),
            f = e("./confirmation_modals/unfollow_confirmation_modal"),
            h = o(f),
            m = e("./confirmation_modals/cancel_friend_request_confirmation_modal"),
            _ = o(m),
            g = e("../../modules/modal_id_helper"),
            v = e("../modal_trigger"),
            y = o(v),
            b = e("../spinner"),
            k = o(b);
        r["default"] = d["default"].createClass({
            displayName: "FollowButton",
            propTypes: {
                displayUser: a["default"].PropTypes.shape({
                    firstName: a["default"].PropTypes.string.isRequired,
                    viewableName: a["default"].PropTypes.string.isRequired,
                    userId: a["default"].PropTypes.number.isRequired
                }).isRequired,
                isFollowing: a["default"].PropTypes.bool.isRequired,
                isPendingFriendRequestTo: a["default"].PropTypes.bool.isRequired,
                friendRequestToId: a["default"].PropTypes.number,
                fromUserShowPage: a["default"].PropTypes.bool,
                inProgress: a["default"].PropTypes.bool
            },
            getInitialState: function() {
                return {
                    isHovering: !1
                }
            },
            getDefaultProps: function() {
                return {
                    fromUserShowPage: !1,
                    inProgress: !1
                }
            },
            handleMouseEnter: function() {
                this.setState({
                    isHovering: !0
                })
            },
            handleMouseLeave: function() {
                this.setState({
                    isHovering: !1
                })
            },
            handleFollow: function() {
                p["default"].follow(this.props.displayUser.userId, {
                    from_user_show_page: this.props.fromUserShowPage
                })
            },
            renderFollowButton: function() {
                var e = (0, l["default"])(this.withBemModifiers("friendFollowButton"), "friendFollowButton--dark");
                return n("button", {
                    className: e,
                    onClick: this.handleFollow,
                    type: "button"
                }, void 0, "Follow")
            },
            renderInProgressButton: function() {
                return n("button", {
                    className: this.withBemModifiers("friendFollowButton"),
                    onClick: this.handleFollow,
                    type: "button"
                }, void 0, n(k["default"], {}))
            },
            renderUnfollowButton: function() {
                var e = (0, l["default"])(this.withBemModifiers("friendFollowCheckmark"), "u-inlineBlock"),
                    t = this.state.isHovering ? "Unfollow" : n("span", {}, void 0, n("div", {
                        className: e
                    }), "Following"),
                    r = void 0,
                    o = void 0;
                return this.props.isPendingFriendRequestTo && this.props.friendRequestToId ? (r = n(_["default"], {
                    displayUser: this.props.displayUser,
                    friendRequestToId: this.props.friendRequestToId
                }), o = (0, g.getCancelFriendRequestModalId)(this.props.displayUser.userId)) : (r = n(h["default"], {
                    displayUser: this.props.displayUser
                }), o = (0, g.getUnfollowModalId)(this.props.displayUser.userId)), n("div", {
                    className: "u-inlineBlock"
                }, void 0, n(y["default"], {
                    id: o
                }, void 0, n("button", {
                    className: this.withBemModifiers("friendFollowButton"),
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    type: "button"
                }, void 0, t)), r)
            },
            render: function() {
                return this.props.inProgress ? this.renderInProgressButton() : this.props.isFollowing ? this.renderUnfollowButton() : this.renderFollowButton()
            }
        })
    }, {
        "../../modules/modal_id_helper": 17,
        "../../react_actions/user_relationships/friend_follow_actions": 50,
        "../gr_component_factory": 107,
        "../modal_trigger": 146,
        "../spinner": 191,
        "./confirmation_modals/cancel_friend_request_confirmation_modal": 207,
        "./confirmation_modals/unfollow_confirmation_modal": 208,
        classnames: "classnames",
        react: "react"
    }],
    211: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("../gr_component_factory"),
            l = o(i),
            u = e("../modal_trigger"),
            d = o(u),
            c = e("./confirmation_modals/unfriend_confirmation_modal"),
            p = o(c),
            f = e("../../react_actions/user_relationships/friend_follow_actions"),
            h = o(f),
            m = e("../../modules/modal_id_helper");
        r["default"] = l["default"].createClass({
            displayName: "FriendButton",
            propTypes: {
                displayUser: a["default"].PropTypes.shape({
                    firstName: a["default"].PropTypes.string.isRequired,
                    viewableName: a["default"].PropTypes.string.isRequired,
                    userId: a["default"].PropTypes.number.isRequired
                }).isRequired,
                addFriendUrl: a["default"].PropTypes.string.isRequired,
                isFriend: a["default"].PropTypes.bool.isRequired,
                isPendingFriendRequestFrom: a["default"].PropTypes.bool.isRequired,
                isPendingFriendRequestTo: a["default"].PropTypes.bool.isRequired,
                friendRequestFromId: a["default"].PropTypes.number
            },
            getInitialState: function() {
                return {
                    isHovering: !1
                }
            },
            handleMouseEnter: function() {
                this.setState({
                    isHovering: !0
                })
            },
            handleMouseLeave: function() {
                this.setState({
                    isHovering: !1
                })
            },
            handleAcceptFriendRequest: function() {
                h["default"].acceptFriendRequest(this.props.displayUser.userId, this.props.friendRequestFromId)
            },
            renderFriendButton: function() {
                return this.props.isPendingFriendRequestFrom && this.props.friendRequestFromId ? n("button", {
                    className: "friendFollowButton",
                    onClick: this.handleAcceptFriendRequest,
                    type: "button"
                }, void 0, "Accept request") : this.props.isPendingFriendRequestTo ? n("button", {
                    className: "friendFollowButton",
                    type: "button",
                    disabled: !0
                }, void 0, "Pending") : n("a", {
                    className: "friendFollowButton",
                    href: this.props.addFriendUrl
                }, void 0, "Add friend")
            },
            renderUnfriendButton: function() {
                var e = this.state.isHovering ? "Unfriend" : n("span", {}, void 0, n("div", {
                    className: "u-inlineBlock friendFollowCheckmark"
                }), "Friends");
                return n("div", {
                    className: "u-inlineBlock"
                }, void 0, n(d["default"], {
                    id: (0, m.getUnfriendModalId)(this.props.displayUser.userId)
                }, void 0, n("button", {
                    className: "friendFollowButton",
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    type: "button"
                }, void 0, e)), n(p["default"], {
                    displayUser: this.props.displayUser
                }))
            },
            render: function() {
                return this.props.isFriend ? this.renderUnfriendButton() : this.renderFriendButton()
            }
        })
    }, {
        "../../modules/modal_id_helper": 17,
        "../../react_actions/user_relationships/friend_follow_actions": 50,
        "../gr_component_factory": 107,
        "../modal_trigger": 146,
        "./confirmation_modals/unfriend_confirmation_modal": 209,
        react: "react"
    }],
    212: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("reflux"),
            a = o(s),
            i = e("../gr_component_factory"),
            l = o(i),
            u = e("../../react_stores/user_relationships/friend_follow_module_store"),
            d = o(u),
            c = e("../../react_stores/user/show/block_user_store"),
            p = o(c),
            f = e("../dropdown"),
            h = o(f),
            m = e("../modal_trigger"),
            _ = o(m),
            g = e("./confirmation_modals/cancel_friend_request_confirmation_modal"),
            v = o(g),
            y = e("./confirmation_modals/unfriend_confirmation_modal"),
            b = o(y),
            k = e("./confirmation_modals/unfollow_confirmation_modal"),
            S = o(k),
            P = e("./confirmation_modals/block_user_confirmation_modal"),
            T = o(P),
            w = e("../../modules/modal_id_helper");
        r["default"] = l["default"].createClass({
            displayName: "FriendFollowDropdown",
            mixins: [a["default"].connect(d["default"], "ffStore"), a["default"].connect(p["default"], "buStore")],
            propTypes: {
                displayUser: React.PropTypes.shape({
                    firstName: React.PropTypes.string.isRequired,
                    viewableName: React.PropTypes.string.isRequired,
                    userId: React.PropTypes.number.isRequired
                }).isRequired,
                sendMessageUrl: React.PropTypes.string.isRequired,
                recommendBooksUrl: React.PropTypes.string.isRequired,
                compareBooksUrl: React.PropTypes.string.isRequired,
                suggestFriendsUrl: React.PropTypes.string.isRequired,
                addFriendUrl: React.PropTypes.string.isRequired,
                renderFriendButton: React.PropTypes.bool.isRequired,
                friendButtonInDropdown: React.PropTypes.bool.isRequired,
                friendRequestToId: React.PropTypes.number
            },
            renderRecommendBooksLink: function() {
                return this.state.ffStore.isFriend ? n("a", {
                    className: "friendFollowModuleDropdownMenu__dropdownLink",
                    href: this.props.recommendBooksUrl,
                    rel: "nofollow",
                    "data-testid": "recommendBooks"
                }, void 0, "Recommend books") : void 0
            },
            shouldRenderCancelFriendRequestModal: function() {
                return this.state.ffStore.isFollowing && this.state.ffStore.isPendingFriendRequestTo && this.props.friendRequestToId
            },
            shouldRenderUnfollowModal: function() {
                return this.state.ffStore.isFollowing && !this.state.ffStore.isPendingFriendRequestTo
            },
            renderFollowingLinks: function() {
                return this.shouldRenderCancelFriendRequestModal() ? n("div", {
                    className: "friendFollowModuleDropdownMenu__dropdownLink"
                }, void 0, n(_["default"], {
                    id: (0, w.getCancelFriendRequestModalId)(this.props.displayUser.userId, !0)
                }, void 0, n("button", {
                    className: "gr-buttonAsLink gr-buttonAsLink--black",
                    type: "button",
                    "data-testid": "cancelFriendRequest"
                }, void 0, "Cancel friend request"))) : this.shouldRenderUnfollowModal() ? n("div", {
                    className: "friendFollowModuleDropdownMenu__dropdownLink"
                }, void 0, n(_["default"], {
                    id: (0, w.getUnfollowModalId)(this.props.displayUser.userId, !0)
                }, void 0, n("button", {
                    className: "gr-buttonAsLink gr-buttonAsLink--black",
                    type: "button",
                    "data-testid": "unfollow"
                }, void 0, "Unfollow"))) : void 0
            },
            shouldRenderUnfriendModal: function() {
                return this.state.ffStore.isFriend
            },
            renderFriendLinks: function() {
                return this.state.ffStore.isFriend ? n("div", {}, void 0, n("a", {
                    className: "friendFollowModuleDropdownMenu__dropdownLink",
                    href: this.props.suggestFriendsUrl,
                    "data-testid": "suggestFriends"
                }, void 0, "Suggest friends"), n("div", {
                    className: "friendFollowModuleDropdownMenu__dropdownLink"
                }, void 0, n(_["default"], {
                    id: (0, w.getUnfriendModalId)(this.props.displayUser.userId, !0)
                }, void 0, n("button", {
                    className: "gr-buttonAsLink gr-buttonAsLink--black",
                    type: "button",
                    "data-testid": "unfriend"
                }, void 0, "Unfriend ", this.props.displayUser.firstName)))) : this.props.friendButtonInDropdown && this.props.renderFriendButton && !this.state.ffStore.isPendingFriendRequestTo ? n("a", {
                    className: "friendFollowModuleDropdownMenu__dropdownLink",
                    href: this.props.addFriendUrl,
                    rel: "nofollow",
                    "data-testid": "addFriend"
                }, void 0, "Add friend") : void 0
            },
            renderBlockUserLink: function() {
                var e = void 0;
                e = this.state.buStore.isBlocked ? "Unblock" : "Block this user";
                var t = this.state.buStore.isBlocked ? (0, w.getUnblockUserModalId)(this.props.displayUser.userId, !0) : (0, w.getBlockUserModalId)(this.props.displayUser.userId, !0);
                return n("div", {
                    className: "friendFollowModuleDropdownMenu__dropdownLink"
                }, void 0, n(_["default"], {
                    id: t
                }, void 0, n("button", {
                    className: "gr-buttonAsLink friendFollowModule__blockedUserText friendFollowModule__blockedUserText--red",
                    type: "button",
                    "data-testid": "blockUser"
                }, void 0, e)))
            },
            renderDropdownList: function() {
                return n("div", {
                    className: "friendFollowModuleDropdownMenu"
                }, void 0, n("a", {
                    className: "friendFollowModuleDropdownMenu__dropdownLink",
                    href: this.props.sendMessageUrl,
                    rel: "nofollow",
                    "data-testid": "message"
                }, void 0, "Message"), this.renderRecommendBooksLink(), n("a", {
                    className: "friendFollowModuleDropdownMenu__dropdownLink",
                    href: this.props.compareBooksUrl,
                    rel: "nofollow",
                    "data-testid": "compareBooks"
                }, void 0, "Compare books"), this.renderFollowingLinks(), this.renderFriendLinks(), this.renderBlockUserLink())
            },
            renderDropdownTrigger: function() {
                return n("div", {}, void 0, n("span", {
                    className: "friendFollowModuleCaret__text"
                }, void 0, "More"), n("div", {
                    className: "friendFollowModuleCaret__image"
                }))
            },
            render: function() {
                return n("div", {
                    className: "friendFollowModuleCaret"
                }, void 0, n(h["default"], {
                    trigger: this.renderDropdownTrigger(),
                    triggerEventType: h["default"].TriggerEventTypes.CLICK,
                    tooltipText: "More",
                    bemModifiers: "friendFollowModule",
                    children: this.renderDropdownList()
                }), this.shouldRenderCancelFriendRequestModal() && n(v["default"], {
                    displayUser: this.props.displayUser,
                    isPendingFriendRequestTo: this.state.ffStore.isPendingFriendRequestTo,
                    friendRequestToId: this.props.friendRequestToId,
                    fromDropdown: !0
                }), this.shouldRenderUnfollowModal() && n(S["default"], {
                    displayUser: this.props.displayUser,
                    fromDropdown: !0
                }), this.shouldRenderUnfriendModal() && n(b["default"], {
                    displayUser: this.props.displayUser,
                    fromDropdown: !0
                }), n(T["default"], {
                    displayUser: this.props.displayUser,
                    isBlocked: this.state.buStore.isBlocked,
                    fromDropdown: !0
                }))
            }
        })
    }, {
        "../../modules/modal_id_helper": 17,
        "../../react_stores/user/show/block_user_store": 255,
        "../../react_stores/user_relationships/friend_follow_module_store": 259,
        "../dropdown": 90,
        "../gr_component_factory": 107,
        "../modal_trigger": 146,
        "./confirmation_modals/block_user_confirmation_modal": 206,
        "./confirmation_modals/cancel_friend_request_confirmation_modal": 207,
        "./confirmation_modals/unfollow_confirmation_modal": 208,
        "./confirmation_modals/unfriend_confirmation_modal": 209,
        reflux: "reflux"
    }],
    213: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("reflux"),
            l = o(i),
            u = e("classnames"),
            d = o(u),
            c = e("../gr_component_factory"),
            p = o(c),
            f = e("./follow_button"),
            h = o(f),
            m = e("./friend_button"),
            _ = o(m),
            g = e("./friend_follow_dropdown"),
            v = o(g),
            y = e("../spinner"),
            b = o(y),
            k = e("../modal_trigger"),
            S = o(k),
            P = e("./confirmation_modals/block_user_confirmation_modal"),
            T = o(P),
            w = e("../../modules/modal_id_helper"),
            N = e("../../react_stores/user_relationships/friend_follow_module_store"),
            R = o(N),
            M = e("../../react_stores/user/show/block_user_store"),
            C = o(M);
        r["default"] = p["default"].createClass({
            displayName: "FriendFollowModule",
            mixins: [l["default"].connectFilter(R["default"], "ffStore", function(e) {
                return e[this.props.displayUser.userId]
            }), l["default"].connect(C["default"], "buStore")],
            propTypes: {
                displayUser: a["default"].PropTypes.shape({
                    firstName: a["default"].PropTypes.string.isRequired,
                    viewableName: a["default"].PropTypes.string.isRequired,
                    userId: a["default"].PropTypes.number.isRequired
                }).isRequired,
                hideDropdown: a["default"].PropTypes.bool.isRequired,
                sendMessageUrl: a["default"].PropTypes.string.isRequired,
                recommendBooksUrl: a["default"].PropTypes.string.isRequired,
                compareBooksUrl: a["default"].PropTypes.string.isRequired,
                suggestFriendsUrl: a["default"].PropTypes.string.isRequired,
                addFriendUrl: a["default"].PropTypes.string.isRequired,
                friendRequestToId: a["default"].PropTypes.number,
                friendRequestFromId: a["default"].PropTypes.number,
                renderFollowButton: a["default"].PropTypes.bool.isRequired,
                renderFriendButton: a["default"].PropTypes.bool.isRequired,
                friendButtonInDropdown: a["default"].PropTypes.bool.isRequired,
                fromUserShowPage: a["default"].PropTypes.bool
            },
            getDefaultProps: function() {
                return {
                    fromUserShowPage: !1
                }
            },
            shouldRenderFriendButton: function() {
                return this.props.renderFriendButton && !this.props.friendButtonInDropdown
            },
            shouldRenderFollowButton: function() {
                return this.props.renderFollowButton && !this.state.ffStore.isFriend
            },
            render: function() {
                if (this.state.ffStore.inProgress || this.state.buStore.blockInProgress) return n("div", {
                    className: "u-clearBoth"
                }, void 0, n(b["default"], {}));
                var e = (0, d["default"])("u-inlineBlock", {
                    "u-marginRightMedium": this.shouldRenderFriendButton()
                });
                return n("div", {
                    className: "friendFollowModule"
                }, void 0, this.state.buStore.isBlocked && n("div", {
                    className: "friendFollowModule__blockedUserText",
                    "data-testid": "blockText"
                }, void 0, "You've blocked ", this.props.displayUser.firstName, ".", n("div", {
                    className: "friendFollowModule__blockedUserTextTrigger"
                }, void 0, n(S["default"], {
                    id: (0, w.getUnblockUserModalId)(this.props.displayUser.userId)
                }, void 0, n("button", {
                    className: "gr-buttonAsLink friendFollowModule__blockedUserText friendFollowModule__blockedUserText--red",
                    type: "button"
                }, void 0, "Unblock")), n(T["default"], {
                    isBlocked: this.state.buStore.isBlocked,
                    displayUser: this.props.displayUser,
                    isPendingFriendRequestTo: this.state.ffStore.isPendingFriendRequestTo
                }))), n("div", {
                    className: "u-marginAuto"
                }, void 0, this.shouldRenderFollowButton() && n("div", {
                    className: e
                }, void 0, n(h["default"], {
                    displayUser: this.props.displayUser,
                    isFollowing: this.state.ffStore.isFollowing,
                    isPendingFriendRequestTo: this.state.ffStore.isPendingFriendRequestTo,
                    friendRequestToId: this.props.friendRequestToId,
                    fromUserShowPage: this.props.fromUserShowPage
                })), this.shouldRenderFriendButton() && n(_["default"], {
                    displayUser: this.props.displayUser,
                    addFriendUrl: this.props.addFriendUrl,
                    isFriend: this.state.ffStore.isFriend,
                    isPendingFriendRequestFrom: this.state.ffStore.isPendingFriendRequestFrom,
                    isPendingFriendRequestTo: this.state.ffStore.isPendingFriendRequestTo,
                    friendRequestFromId: this.props.friendRequestFromId
                }), !this.props.hideDropdown && a["default"].createElement(v["default"], this.props)))
            }
        })
    }, {
        "../../modules/modal_id_helper": 17,
        "../../react_stores/user/show/block_user_store": 255,
        "../../react_stores/user_relationships/friend_follow_module_store": 259,
        "../gr_component_factory": 107,
        "../modal_trigger": 146,
        "../spinner": 191,
        "./confirmation_modals/block_user_confirmation_modal": 206,
        "./follow_button": 210,
        "./friend_button": 211,
        "./friend_follow_dropdown": 212,
        classnames: "classnames",
        react: "react",
        reflux: "reflux"
    }],
    214: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.ALWAYS_DISPLAY_STARS_PROP = void 0;
        var s = e("react"),
            a = o(s),
            i = e("../gr_component_factory"),
            l = o(i),
            u = e("reflux"),
            d = o(u),
            c = e("../../react_mixins/gr_reflux"),
            p = e("../../modules/ads/click_tracking_helper"),
            f = e("../../modules/default_shelves"),
            h = e("classnames"),
            m = o(h),
            _ = e("../../react_stores/shelvings_store"),
            g = o(_),
            v = e("../../react_stores/user_shelves_store"),
            y = o(v),
            b = e("../../react_stores/want_to_read_menu_store"),
            k = o(b),
            S = e("../../react_actions/want_to_read_menu_actions"),
            P = o(S),
            T = e("../../react_stores/user_agent_capabilities_store"),
            w = o(T),
            N = e("../../react_actions/shelvings_actions"),
            R = o(N),
            M = e("../dropdown"),
            C = o(M),
            x = e("../modal"),
            A = o(x),
            I = e("../modal_trigger"),
            L = o(I),
            U = e("../../react_actions/modal_actions"),
            E = o(U),
            O = e("../../react_stores/modal_store"),
            B = o(O),
            j = e("../want_to_read/want_to_read_menu"),
            F = o(j),
            D = e("../user_rating"),
            q = o(D),
            H = "Saving…",
            G = "This book has also been marked as Read",
            $ = r.ALWAYS_DISPLAY_STARS_PROP = "ALWAYS_DISPLAY_STARS_PROP";
        r["default"] = l["default"].createClass({
            displayName: "WantToReadButton",
            propTypes: {
                bookId: a["default"].PropTypes.string.isRequired,
                bookTitle: a["default"].PropTypes.string.isRequired,
                uniqueId: a["default"].PropTypes.string.isRequired,
                showStars: a["default"].PropTypes.oneOfType([a["default"].PropTypes.bool, a["default"].PropTypes.string]),
                showMenu: a["default"].PropTypes.bool,
                origin: a["default"].PropTypes.string,
                trackingOptions: a["default"].PropTypes.object,
                starsTrackingOptions: a["default"].PropTypes.object,
                withModalShelvingMenu: a["default"].PropTypes.bool
            },
            mixins: [(0, c.connectToLazyStore)(g["default"], "bookId", {
                stateKey: "shelvings"
            }), (0, c.connectToLazyStore)(k["default"], "uniqueId", {
                stateKey: "wantToReadMenu"
            }), d["default"].connect(y["default"], "userShelves"), d["default"].connect(w["default"], "userAgentCapabilities"), d["default"].connect(B["default"], "modalStore")],
            getDefaultProps: function() {
                return {
                    showStars: !1,
                    showMenu: !0,
                    trackingOptions: p.TRACKED_CLASSES.want_to_read_button,
                    withModalShelvingMenu: !1
                }
            },
            shelveBook: function() {
                R["default"].shelveBook(this.props.bookId, y["default"].defaultShelves().WANT_TO_READ, this.props.origin)
            },
            unshelveBook: function() {
                window.confirm("Removing a book deletes your rating, review, etc. Remove this book from all your shelves?") && R["default"].unshelveBook(this.state.shelvings.book.bookId)
            },
            focusButton: function(e) {
                e && this.restoreFocusOnUpdate && !this.state.isShelvingInProgress && (this.forgetFocus(), e.focus())
            },
            rememberFocus: function() {
                this.restoreFocusOnUpdate = !0
            },
            forgetFocus: function() {
                this.restoreFocusOnUpdate = !1
            },
            checkmarkClass: function() {
                return (0, f.checkIconClassnames)(this.state.shelvings.exclusiveShelfName)
            },
            unshelved: function() {
                return null === this.state.shelvings.exclusiveShelfName
            },
            getBookId: function() {
                return this.unshelved() ? this.props.bookId : this.state.shelvings.book.bookId
            },
            getBookTitle: function() {
                return this.unshelved() ? this.props.bookTitle : this.state.shelvings.book.title
            },
            renderWantToReadLeftUnshelved: function() {
                var e = this.state.shelvings.isShelvingInProgress ? H : "Want to Read",
                    t = (0, m["default"])("wantToReadButton__leftUnshelvedButton", {
                        "wantToReadButton__leftUnshelvedButton--noOutline": this.state.shelvings.isShelvingInProgress
                    }),
                    r = "Add " + this.props.bookTitle + " to your want to read shelf";
                return a["default"].createElement("button", {
                    "aria-label": r,
                    ref: this.focusButton,
                    className: t,
                    onClick: this.shelveBook,
                    onFocus: this.rememberFocus,
                    onBlur: this.forgetFocus
                }, e)
            },
            renderWantToReadLeftShelved: function() {
                var e = (0, m["default"])("wantToReadButton__leftShelvedButton"),
                    t = (0, m["default"])({
                        wantToReadButton__checkIcon: !this.state.shelvings.isShelvingInProgress
                    }, this.checkmarkClass()),
                    r = "Remove " + this.state.shelvings.book.title + " from my shelves",
                    o = this.state.shelvings.isShelvingInProgress ? H : this.state.shelvings.exclusiveShelfDisplayName;
                return this.state.userAgentCapabilities.touch ? a["default"].createElement("button", {
                    "aria-label": r,
                    onClick: this.unshelveBook,
                    onFocus: this.rememberFocus,
                    onBlur: this.forgetFocus,
                    ref: this.focusButton,
                    className: e
                }, n("span", {
                    className: t + " u-inlineBlock"
                }), n("div", {
                    className: "wantToReadButton__shelvedButtonText"
                }, void 0, o)) : n("span", {}, void 0, a["default"].createElement("button", {
                    "aria-label": r,
                    ref: this.focusButton,
                    onClick: this.unshelveBook,
                    onFocus: this.rememberFocus,
                    onBlur: this.forgetFocus,
                    className: e + " " + t
                }), n("div", {
                    className: "wantToReadButton__shelvedButtonText"
                }, void 0, o))
            },
            renderWantToReadRight: function() {
                var e = this.getBookId(),
                    t = this.getBookTitle(),
                    r = ["wantToReadMenu"];
                return this.props.withModalShelvingMenu && r.push("wtrMenuToggleDropdown"), this.props.showMenu && !this.isWTRModalOpen() ? n(C["default"], {
                    trigger: this.renderWantToReadRightButtonContents(),
                    triggerEventType: C["default"].TriggerEventTypes.HOVER,
                    bemModifiers: r
                }, void 0, n(F["default"], {
                    uniqueId: this.props.uniqueId,
                    bookId: e,
                    bookTitle: t,
                    userShelves: this.state.userShelves,
                    shelvings: this.state.shelvings
                })) : null
            },
            getModalId: function() {
                return "wtrModal" + this.getBookId()
            },
            isWTRModalOpen: function() {
                return this.state.modalStore.currentActiveModal && this.state.modalStore.currentActiveModal === this.getModalId()
            },
            hideBookAlsoMarkedAsReadMessage: function() {
                this.state.showBookAlsoMarkedAsReadMessage && this.setState({
                    showBookAlsoMarkedAsReadMessage: !1
                })
            },
            handleWTRMenuNonExclusiveShelvingWithoutExclusive: function() {
                this.setState({
                    showBookAlsoMarkedAsReadMessage: !0
                })
            },
            handleModalClose: function() {
                P["default"].closeAddShelfTextbox(this.props.uniqueId), this.hideBookAlsoMarkedAsReadMessage()
            },
            handleDoneClick: function() {
                E["default"].closeModal(), this.hideBookAlsoMarkedAsReadMessage()
            },
            renderModal: function() {
                var e = this.getBookId(),
                    t = this.getBookTitle();
                if (this.props.showMenu && this.props.withModalShelvingMenu) {
                    var r = (0, m["default"])("wtrModalContainer", {
                        wtrMenuToggleModal: !this.isWTRModalOpen()
                    });
                    return n("div", {
                        className: r
                    }, void 0, n(L["default"], {
                        id: this.getModalId()
                    }, void 0, n("button", {
                        type: "button",
                        className: "wtrModalContainer__trigger"
                    }, void 0, this.renderWantToReadRightButtonContents())), n(A["default"], {
                        id: this.getModalId(),
                        centered: !0,
                        onCloseHandler: this.handleModalClose
                    }, void 0, n("div", {
                        className: "wtrModal"
                    }, void 0, n("h3", {
                        className: "gr-h3 gr-h3--serif gr-h3--noMargin u-paddingBottomXSmall"
                    }, void 0, "Shelve ", this.props.bookTitle), n(F["default"], {
                        uniqueId: this.props.uniqueId,
                        bookId: e,
                        bookTitle: t,
                        userShelves: this.state.userShelves,
                        shelvings: this.state.shelvings,
                        useModalView: !0,
                        bemModifiers: "modalView",
                        onNonExclusiveShelvingWithoutExclusive: this.handleWTRMenuNonExclusiveShelvingWithoutExclusive,
                        onExclusiveShelvingChange: this.hideBookAlsoMarkedAsReadMessage
                    })), !this.state.wantToReadMenu.showAddShelfTextbox && n("button", {
                        type: "button",
                        className: "gr-button wtrModal__closeButton",
                        "aria-label": "Close want to read menu",
                        onClick: this.handleDoneClick
                    }, void 0, "Done"), this.state.showBookAlsoMarkedAsReadMessage && n("div", {
                        className: "wtrModal__alsoMarkedAsReadMessage"
                    }, void 0, G)))
                }
                return null
            },
            renderWantToReadRightButtonContents: function() {
                return n("div", {
                    className: "wantToReadButton__right"
                }, void 0, n("span", {
                    className: "u-visuallyHidden"
                }, void 0, "Shelving menu"))
            },
            render: function() {
                var e = "",
                    t = (0, m["default"])("wantToReadButton__left", {
                        "wantToReadButton__left--standalone": !this.props.showMenu
                    }, {
                        wantToReadButton__leftUnshelved: this.unshelved()
                    }, {
                        wantToReadButton__leftShelved: !this.unshelved()
                    });
                e = this.unshelved() ? this.renderWantToReadLeftUnshelved() : this.renderWantToReadLeftShelved();
                var r = (0, m["default"])("wtrStarsContainer", {
                    "wtrStarsContainer--alwaysDisplay": this.props.showStars === $
                });
                return n("div", {}, void 0, n("div", {
                    className: "wantToReadButton"
                }, void 0, n("div", {
                    className: t
                }, void 0, e), this.renderModal(), this.renderWantToReadRight()), this.props.showStars ? n("div", {
                    className: r
                }, void 0, n(q["default"], {
                    bookId: this.props.bookId,
                    starsTrackingOptions: this.props.starsTrackingOptions
                })) : null)
            }
        })
    }, {
        "../../modules/ads/click_tracking_helper": 3,
        "../../modules/default_shelves": 12,
        "../../react_actions/modal_actions": 38,
        "../../react_actions/shelvings_actions": 44,
        "../../react_actions/want_to_read_menu_actions": 52,
        "../../react_mixins/gr_reflux": 231,
        "../../react_stores/modal_store": 248,
        "../../react_stores/shelvings_store": 253,
        "../../react_stores/user_agent_capabilities_store": 257,
        "../../react_stores/user_shelves_store": 260,
        "../../react_stores/want_to_read_menu_store": 261,
        "../dropdown": 90,
        "../gr_component_factory": 107,
        "../modal": 145,
        "../modal_trigger": 146,
        "../user_rating": 205,
        "../want_to_read/want_to_read_menu": 215,
        classnames: "classnames",
        react: "react",
        reflux: "reflux"
    }],
    215: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            },
            s = function() {
                var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
                return function(t, r, o, n) {
                    var s = t && t.defaultProps,
                        a = arguments.length - 3;
                    if (r || 0 === a || (r = {}), r && s)
                        for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                    else r || (r = s || {});
                    if (1 === a) r.children = n;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                        r.children = l
                    }
                    return {
                        $$typeof: e,
                        type: t,
                        key: void 0 === o ? null : "" + o,
                        ref: null,
                        props: r,
                        _owner: null
                    }
                }
            }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var a = e("lodash"),
            i = o(a),
            l = e("../gr_component_factory"),
            u = o(l),
            d = e("../../react_mixins/gr_reflux"),
            c = e("../../modules/default_shelves"),
            p = e("../../react_stores/want_to_read_menu_store"),
            f = o(p),
            h = e("./want_to_read_menu_filter"),
            m = o(h),
            _ = e("../../react_actions/shelvings_actions"),
            g = o(_),
            v = e("./want_to_read_menu_shelf_creator"),
            y = o(v),
            b = e("../spinner"),
            k = o(b),
            S = e("classnames"),
            P = o(S),
            T = 7;
        r["default"] = u["default"].createClass({
            displayName: "WantToReadMenu",
            mixins: [(0, d.connectToLazyStore)(f["default"], "uniqueId")],
            propTypes: {
                bookId: React.PropTypes.string.isRequired,
                bookTitle: React.PropTypes.string.isRequired,
                uniqueId: React.PropTypes.string.isRequired,
                userShelves: React.PropTypes.object.isRequired,
                shelvings: React.PropTypes.object.isRequired,
                useModalView: React.PropTypes.bool,
                onNonExclusiveShelvingWithoutExclusive: React.PropTypes.func,
                onExclusiveShelvingChange: React.PropTypes.func
            },
            defaultPropTypes: function() {
                return {
                    useModalView: !1
                }
            },
            shelveBook: function(e) {
                g["default"].shelveBook(this.props.bookId, e)
            },
            unshelveBook: function() {
                window.confirm("Removing a book deletes your rating, review, etc. Remove this book from all your shelves?") && g["default"].unshelveBook(this.props.bookId)
            },
            modifyExclusiveShelving: function(e, t) {
                this.props.onExclusiveShelvingChange && i["default"].isFunction(this.props.onExclusiveShelvingChange) && this.props.onExclusiveShelvingChange(), e ? this.unshelveBook() : this.shelveBook(t)
            },
            toggleNonExclusiveShelving: function(e) {
                null === this.props.shelvings.exclusiveShelfName && this.props.onNonExclusiveShelvingWithoutExclusive && i["default"].isFunction(this.props.onNonExclusiveShelvingWithoutExclusive) && this.props.onNonExclusiveShelvingWithoutExclusive(), g["default"].toggleNonExclusiveShelving(this.props.bookId, e, !1, this.props.bookTitle)
            },
            renderFilter: function() {
                var e = this.props.userShelves.customExclusiveShelves.concat(this.props.userShelves.nonExclusiveShelves),
                    t = e.length >= T;
                return t ? s(m["default"], {
                    bookId: this.props.bookId,
                    uniqueId: this.props.uniqueId,
                    shelvings: this.props.shelvings,
                    wantToReadMenu: this.state,
                    bemModifiers: this.props.bemModifiers
                }) : void 0
            },
            renderEmptyMessage: function() {
                var e = this.state.displayableExclusiveShelves,
                    t = this.state.displayableNonExclusiveShelves,
                    r = t.concat(e).length;
                return 0 === r ? s("li", {
                    className: "wantToReadMenu__genericItem"
                }, void 0, "No Matching Shelves") : void 0
            },
            renderExclusiveShelves: function() {
                var e = this,
                    t = this.state.displayableExclusiveShelves;
                return i["default"].map(t, function(t) {
                    var r = t.name === e.props.shelvings.exclusiveShelfName,
                        o = t.displayName,
                        n = r ? "Unshelve  " + e.props.bookTitle : "Shelve " + e.props.bookTitle + " as " + o,
                        a = (0, P["default"])(e.withBemModifiers("wantToReadMenu__exclusiveShelf"), {
                            "wantToReadMenu__exclusiveShelf--shelved": r
                        }),
                        i = e.props.useModalView ? e.renderExclusiveShelfStatusIcon(t) : null;
                    return s("li", {
                        className: "wantToReadMenu__shelfItem"
                    }, o, s("button", {
                        className: a,
                        "aria-label": n,
                        onClick: function() {
                            e.modifyExclusiveShelving(r, t)
                        }
                    }, void 0, i && s("div", {
                        className: "wantToReadMenu__shelfStatusContainer"
                    }, void 0, i), o))
                })
            },
            renderExclusiveShelfStatusIcon: function(e) {
                var t = null,
                    r = e.name === this.props.shelvings.exclusiveShelfName;
                if (r && !this.props.shelvings.isShelvingInProgress) {
                    var o = (0, P["default"])("wantToReadButton__checkIcon", "wantToReadButton__checkIcon--modalView", (0, c.checkIconClassnames)(this.props.shelvings.exclusiveShelfName));
                    t = s("span", {
                        className: o
                    })
                } else this.props.shelvings.isShelvingInProgress && (!this.props.shelvings.targetExclusiveShelfName && r || this.props.shelvings.targetExclusiveShelfName === e.name) && (t = s(k["default"], {
                    isSmall: !0
                }));
                return t
            },
            renderNonExclusiveShelves: function() {
                var e = this,
                    t = this.state.displayableNonExclusiveShelves;
                return i["default"].map(t, function(t) {
                    var r = !1;
                    null !== e.props.shelvings.exclusiveShelfName && i["default"].includes(e.props.shelvings.nonExclusiveShelfNames, t.name) && (r = !0);
                    var o = t.displayName,
                        n = "Shelve " + e.props.bookTitle + " as " + o,
                        a = e.withBemModifiers("wantToReadMenu__nonExclusiveShelf");
                    return s("li", {
                        className: "wantToReadMenu__shelfItem"
                    }, o, s("label", {
                        className: a
                    }, void 0, s("input", {
                        className: "wantToReadMenu__shelfCheckbox",
                        checked: r,
                        type: "checkbox",
                        name: "shelf[" + t.name + "]",
                        "aria-label": n,
                        onChange: function() {
                            e.toggleNonExclusiveShelving(t)
                        }
                    }), o))
                })
            },
            renderAddNewShelfButton: function() {
                var e = this.props.userShelves.customExclusiveShelves.concat(this.props.userShelves.nonExclusiveShelves).concat(this.props.userShelves.defaultShelves),
                    t = i["default"].map(e, function(e) {
                        return e.name
                    }),
                    r = !i["default"].includes(t, this.state.shelfNameFilter),
                    o = this.withBemModifiers("wantToReadMenu__newShelfButtonContainer");
                return s("li", {
                    className: o
                }, void 0, React.createElement(y["default"], n({
                    shelfNameFilter: this.state.shelfNameFilter,
                    userCanAddShelf: r,
                    uniqueId: this.props.uniqueId,
                    bookId: this.props.bookId,
                    bemModifiers: this.props.bemModifiers,
                    useModalView: this.props.useModalView,
                    bookTitle: this.props.bookTitle
                }, this.state)))
            },
            render: function() {
                return s("div", {
                    className: "wantToReadMenu"
                }, void 0, this.props.useModalView && s("div", {
                    className: "wantToReadMenu__headerContainer"
                }, void 0, this.renderFilter()), s("div", {
                    className: "wantToReadMenu__scrollableContainer"
                }, void 0, !this.props.useModalView && this.renderFilter(), this.renderEmptyMessage(), this.renderExclusiveShelves(), this.renderNonExclusiveShelves()), this.renderAddNewShelfButton())
            }
        })
    }, {
        "../../modules/default_shelves": 12,
        "../../react_actions/shelvings_actions": 44,
        "../../react_mixins/gr_reflux": 231,
        "../../react_stores/want_to_read_menu_store": 261,
        "../gr_component_factory": 107,
        "../spinner": 191,
        "./want_to_read_menu_filter": 216,
        "./want_to_read_menu_shelf_creator": 217,
        classnames: "classnames",
        lodash: "lodash"
    }],
    216: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("../gr_component_factory"),
            l = o(i),
            u = e("../../react_actions/want_to_read_menu_actions"),
            d = o(u);
        r["default"] = l["default"].createClass({
            displayName: "WantToReadMenuFilter",
            propTypes: {
                bookId: a["default"].PropTypes.string.isRequired,
                uniqueId: a["default"].PropTypes.string.isRequired,
                shelvings: a["default"].PropTypes.object.isRequired,
                wantToReadMenu: a["default"].PropTypes.object.isRequired
            },
            handleKeyPress: function(e) {
                var t = null;
                null !== this.props.shelvings.exclusiveShelfName && (t = this.props.shelvings.exclusiveShelfName), d["default"].updateShelfNameFilter(e.target.value, this.props.uniqueId, t)
            },
            render: function() {
                var e = this.withBemModifiers("wantToReadMenuFilter");
                return n("form", {
                    className: e,
                    onSubmit: function(e) {
                        return e.preventDefault()
                    }
                }, void 0, n("input", {
                    className: "gr-textInput\n                               gr-textInput--small\n                               wantToReadMenuFilter--textInput",
                    type: "text",
                    placeholder: "Filter Shelves",
                    "aria-label": "Filter Shelf Names",
                    value: this.props.wantToReadMenu.shelfNameFilter,
                    onChange: this.handleKeyPress
                }))
            }
        })
    }, {
        "../../react_actions/want_to_read_menu_actions": 52,
        "../gr_component_factory": 107,
        react: "react"
    }],
    217: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("../gr_component_factory"),
            l = o(i),
            u = e("../../react_actions/want_to_read_menu_actions"),
            d = o(u),
            c = e("../../react_actions/shelvings_actions"),
            p = o(c),
            f = e("classnames"),
            h = o(f),
            m = e("lodash"),
            _ = o(m);
        r["default"] = l["default"].createClass({
            displayName: "WantToReadMenuShelfCreator",
            propTypes: {
                userCanAddShelf: a["default"].PropTypes.bool.isRequired,
                shelfNameFilter: a["default"].PropTypes.string,
                uniqueId: a["default"].PropTypes.string.isRequired,
                bookId: a["default"].PropTypes.string.isRequired,
                bookTitle: a["default"].PropTypes.string.isRequired,
                useModalView: a["default"].PropTypes.bool
            },
            getDefaultProps: function() {
                return {
                    useModalView: !1
                }
            },
            getInitialState: function() {
                return {
                    unsavedShelfName: ""
                }
            },
            openAddShelfTextbox: function() {
                d["default"].openAddShelfTextbox(this.props.uniqueId)
            },
            closeAddShelfTextbox: function() {
                d["default"].closeAddShelfTextbox(this.props.uniqueId)
            },
            checkIfCommentIsEmpty: function(e) {
                this.setState({
                    unsavedShelfName: e.target.value
                })
            },
            shelveAsNewShelfName: function(e, t) {
                t.preventDefault(), d["default"].updateShelfNameFilter("", this.props.uniqueId), p["default"].toggleNonExclusiveShelving(this.props.bookId, {
                    name: e
                }, !0, this.props.bookTitle)
            },
            render: function() {
                var e = this;
                if ("" !== this.props.shelfNameFilter && this.props.userCanAddShelf) {
                    var t = this.withBemModifiers("wantToReadShelfCreator__addNamedShelfButton");
                    return n("span", {
                        className: "wantToReadShelfCreator"
                    }, void 0, n("button", {
                        className: t,
                        "aria-label": "Add new " + this.props.shelfNameFilter + " shelf",
                        onClick: function(t) {
                            e.shelveAsNewShelfName(e.props.shelfNameFilter, t)
                        }
                    }, void 0, "Add new “", n("span", {
                        className: "wantToReadShelfCreator__addShelfButtonShelfName"
                    }, void 0, this.props.shelfNameFilter), "” shelf"))
                }
                if (this.props.showAddShelfTextbox) {
                    var r = (0, h["default"])(this.withBemModifiers("wantToReadShelfCreator"), "wantToReadShelfCreator--wrap"),
                        o = (0, h["default"])("gr-textInput", this.withBemModifiers("wantToReadShelfCreator__textInput"), {
                            "gr-textInput--small": !this.props.useModalView
                        }),
                        s = (0, h["default"])(this.withBemModifiers("wantToReadShelfCreator__addShelfButton"), "gr-button", {
                            "gr-button--small": !this.props.useModalView,
                            "gr-button--dark gr-button--fullWidth": this.props.useModalView
                        });
                    return n("form", {
                        className: r,
                        onSubmit: function(t) {
                            e.shelveAsNewShelfName(e.state.unsavedShelfName, t)
                        }
                    }, void 0, n("input", {
                        className: o,
                        type: "text",
                        placeholder: "New Shelf Name",
                        "aria-label": "Add new shelf name",
                        autoFocus: !0,
                        onChange: this.checkIfCommentIsEmpty
                    }), n("div", {
                        className: "wantToReadShelfCreator__buttonContainer"
                    }, void 0, n("input", {
                        type: "submit",
                        className: s,
                        disabled: _["default"].isEmpty(_["default"].trim(this.state.unsavedShelfName)),
                        value: "Add"
                    }), this.props.useModalView && n("button", {
                        type: "button",
                        className: "gr-button gr-button--fullWidth wantToReadShelfCreator__cancelButton",
                        onClick: this.closeAddShelfTextbox,
                        "aria-label": "Close add new shelf form"
                    }, void 0, "Cancel")))
                }
                if (this.props.userCanAddShelf) {
                    var t = this.withBemModifiers("wantToReadShelfCreator__showAddShelfTextboxButton");
                    return n("span", {
                        className: "wantToReadShelfCreator"
                    }, void 0, n("button", {
                        className: t,
                        "aria-label": "Add new shelf",
                        onClick: this.openAddShelfTextbox
                    }, void 0, "Add New Shelf"))
                }
                return null
            }
        })
    }, {
        "../../react_actions/shelvings_actions": 44,
        "../../react_actions/want_to_read_menu_actions": 52,
        "../gr_component_factory": 107,
        classnames: "classnames",
        lodash: "lodash",
        react: "react"
    }],
    218: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = function() {
            var e = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(t, r, o, n) {
                var s = t && t.defaultProps,
                    a = arguments.length - 3;
                if (r || 0 === a || (r = {}), r && s)
                    for (var i in s) void 0 === r[i] && (r[i] = s[i]);
                else r || (r = s || {});
                if (1 === a) r.children = n;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; a > u; u++) l[u] = arguments[u + 3];
                    r.children = l
                }
                return {
                    $$typeof: e,
                    type: t,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: r,
                    _owner: null
                }
            }
        }();
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("react"),
            a = o(s),
            i = e("../gr_component_factory"),
            l = o(i),
            u = e("./want_to_read_button"),
            d = o(u),
            c = e("../user_rating"),
            p = o(c),
            f = e("lodash");
        r["default"] = l["default"].createClass({
            displayName: "WantToReadWithStars",
            propTypes: {
                bookId: a["default"].PropTypes.string.isRequired,
                uniqueId: a["default"].PropTypes.string.isRequired,
                bookTitle: a["default"].PropTypes.string.isRequired
            },
            render: function() {
                return n("div", {}, void 0, n(d["default"], {
                    bookId: this.props.bookId,
                    uniqueId: (0, f.random)(1e6).toString(),
                    bookTitle: this.props.bookTitle
                }), n(p["default"], {
                    bookId: this.props.bookId,
                    bookTitle: this.props.bookTitle
                }))
            }
        })
    }, {
        "../gr_component_factory": 107,
        "../user_rating": 205,
        "./want_to_read_button": 214,
        lodash: "lodash",
        react: "react"
    }],
    219: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.ConversationsStores = r.ConversationsComponents = void 0;
        var n = e("../../react_stores/like_store"),
            s = o(n),
            a = e("../../react_stores/comments_store"),
            i = o(a),
            l = e("../../react_components/comment/comment_form"),
            u = o(l),
            d = e("../../react_components/comment/comments"),
            c = o(d),
            p = e("../../react_components/like/like_button"),
            f = o(p),
            h = e("../../react_components/like/like_information"),
            m = o(h);
        r.ConversationsComponents = {
            CommentForm: u["default"],
            Comments: c["default"],
            LikeButton: f["default"],
            LikeInformation: m["default"]
        }, r.ConversationsStores = {
            CommentsStore: i["default"],
            LikeStore: s["default"]
        }
    }, {
        "../../react_components/comment/comment_form": 84,
        "../../react_components/comment/comments": 85,
        "../../react_components/like/like_button": 135,
        "../../react_components/like/like_information": 137,
        "../../react_stores/comments_store": 239,
        "../../react_stores/like_store": 247
    }],
    220: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.ExperimentStores = r.ExperimentComponents = void 0;
        var o = e("./conversations"),
            n = e("./old_homepage"),
            s = e("./review_show"),
            a = e("lodash");
        r.ExperimentComponents = (0, a.merge)({}, o.ConversationsComponents, n.OldHomepageComponents, s.ReviewShowComponents), r.ExperimentStores = (0, a.merge)({}, o.ConversationsStores, n.OldHomepageStores, s.ReviewShowStores)
    }, {
        "./conversations": 219,
        "./old_homepage": 221,
        "./review_show": 222,
        lodash: "lodash"
    }],
    221: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.OldHomepageStores = r.OldHomepageComponents = void 0;
        var n = e("../../react_stores/like_store"),
            s = o(n),
            a = e("../../react_stores/comments_store"),
            i = o(a),
            l = e("../../react_components/comment/comment_form"),
            u = o(l),
            d = e("../../react_components/comment/comments"),
            c = o(d),
            p = e("../../react_components/like/like_button"),
            f = o(p),
            h = e("../../react_components/like/like_information"),
            m = o(h),
            _ = e("../../react_components/like/like_simple_footer"),
            g = o(_);
        r.OldHomepageComponents = {
            CommentForm: u["default"],
            Comments: c["default"],
            LikeButton: f["default"],
            LikeInformation: m["default"],
            LikeSimpleFooter: g["default"]
        }, r.OldHomepageStores = {
            CommentsStore: i["default"],
            LikeStore: s["default"]
        }
    }, {
        "../../react_components/comment/comment_form": 84,
        "../../react_components/comment/comments": 85,
        "../../react_components/like/like_button": 135,
        "../../react_components/like/like_information": 137,
        "../../react_components/like/like_simple_footer": 138,
        "../../react_stores/comments_store": 239,
        "../../react_stores/like_store": 247
    }],
    222: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.ReviewShowStores = r.ReviewShowComponents = void 0;
        var n = e("../../react_stores/like_store"),
            s = o(n),
            a = e("../../react_components/like/like_simple_footer"),
            i = o(a);
        r.ReviewShowComponents = {
            LikeSimpleFooter: i["default"]
        }, r.ReviewShowStores = {
            LikeStore: s["default"]
        }
    }, {
        "../../react_components/like/like_simple_footer": 138,
        "../../react_stores/like_store": 247
    }],
    223: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.FriendFollowModuleStores = r.FriendFollowModuleComponents = void 0;
        var n = e("../react_components/user_relationships/friend_follow_module"),
            s = o(n),
            a = e("../react_stores/user_relationships/friend_follow_module_store"),
            i = o(a),
            l = e("../react_stores/user/show/block_user_store"),
            u = o(l);
        r.FriendFollowModuleComponents = {
            FriendFollowModule: s["default"]
        }, r.FriendFollowModuleStores = {
            FriendFollowModuleStore: i["default"],
            BlockUserStore: u["default"]
        }
    }, {
        "../react_components/user_relationships/friend_follow_module": 213,
        "../react_stores/user/show/block_user_store": 255,
        "../react_stores/user_relationships/friend_follow_module_store": 259
    }],
    224: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.GlobalComponents = r.GlobalStores = void 0;
        var n = e("../react_stores/google_ads_store"),
            s = o(n),
            a = e("../react_components/login/interstitial/login_interstitial"),
            i = o(a),
            l = e("../react_components/stores_initializer"),
            u = o(l),
            d = e("../react_components/buy_buttons/get_a_copy_button"),
            c = o(d),
            p = e("../react_components/buy_buttons/get_a_copy_interstitial"),
            f = o(p),
            h = e("../react_components/buy_buttons/get_a_copy_interstitial_wrapper"),
            m = o(h),
            _ = e("../react_components/user/user_icon"),
            g = o(_),
            v = e("../react_stores/user_not_interested_store"),
            y = o(v),
            b = e("../react_stores/user_shelves_store"),
            k = o(b),
            S = e("../react_components/qualtrics/qualtrics_survey"),
            P = o(S);
        r.GlobalStores = {
            GoogleAdsStore: s["default"],
            UserNotInterestedStore: y["default"],
            UserShelvesStore: k["default"]
        }, r.GlobalComponents = {
            LoginInterstitial: i["default"],
            StoresInitializer: u["default"],
            GetACopyButton: c["default"],
            GetACopyInterstitial: f["default"],
            GetACopyInterstitialWrapper: m["default"],
            QualtricsSurvey: P["default"],
            UserIcon: g["default"]
        }
    }, {
        "../react_components/buy_buttons/get_a_copy_button": 76,
        "../react_components/buy_buttons/get_a_copy_interstitial": 77,
        "../react_components/buy_buttons/get_a_copy_interstitial_wrapper": 78,
        "../react_components/login/interstitial/login_interstitial": 141,
        "../react_components/qualtrics/qualtrics_survey": 155,
        "../react_components/stores_initializer": 193,
        "../react_components/user/user_icon": 198,
        "../react_stores/google_ads_store": 245,
        "../react_stores/user_not_interested_store": 258,
        "../react_stores/user_shelves_store": 260
    }],
    225: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.ReadingNotesStores = r.ReadingNotesComponents = void 0;
        var n = e("../react_components/reading_notes/annotated_books_landing_page"),
            s = o(n),
            a = e("../react_components/author/author_follow_button"),
            i = o(a),
            l = e("../react_components/comment/comment_form"),
            u = o(l),
            d = e("../react_components/comment/comments"),
            c = o(d),
            p = e("../react_components/like/like_button"),
            f = o(p),
            h = e("../react_components/like/like_information"),
            m = o(h),
            _ = e("../react_components/reading_notes/reading_notes_annotator"),
            g = o(_),
            v = e("../react_components/reading_notes/reading_notes_header"),
            y = o(v),
            b = e("../react_components/reading_notes/reading_notes_shelving_modal"),
            k = o(b),
            S = e("../react_components/reading_notes/reading_notes_shelving_modal_trigger"),
            P = o(S),
            T = e("../react_components/user/user_follow_widget"),
            w = o(T),
            N = e("../react_components/user/user_icon"),
            R = o(N),
            M = e("../react_components/want_to_read/want_to_read_button"),
            C = o(M),
            x = e("../react_components/want_to_read/want_to_read_with_stars"),
            A = o(x),
            I = e("../react_stores/reading_notes/annotated_books_store"),
            L = o(I),
            U = e("../react_stores/author_follow_store"),
            E = o(U),
            O = e("../react_stores/comments_store"),
            B = o(O),
            j = e("../react_stores/like_store"),
            F = o(j),
            D = e("../react_stores/shelvings_store"),
            q = o(D),
            H = e("../react_stores/user/user_follow_store"),
            G = o(H),
            $ = e("../react_stores/user_shelves_store"),
            z = o($),
            W = e("../react_stores/user_agent_capabilities_store"),
            K = o(W);
        r.ReadingNotesComponents = {
            AnnotatedBooksLandingPage: s["default"],
            AuthorFollowButton: i["default"],
            CommentForm: u["default"],
            Comments: c["default"],
            LikeButton: f["default"],
            LikeInformation: m["default"],
            ReadingNotesAnnotator: g["default"],
            ReadingNotesHeader: y["default"],
            ReadingNotesShelvingModal: k["default"],
            ReadingNotesShelvingModalTrigger: P["default"],
            UserFollowWidget: w["default"],
            UserIcon: R["default"],
            WantToReadButton: C["default"],
            WantToReadWithStars: A["default"]
        }, r.ReadingNotesStores = {
            AnnotatedBooksStore: L["default"],
            AuthorFollowStore: E["default"],
            CommentsStore: B["default"],
            LikeStore: F["default"],
            ShelvingsStore: q["default"],
            UserFollowStore: G["default"],
            UserShelvesStore: z["default"],
            UserAgentCapabilitiesStore: K["default"]
        }
    }, {
        "../react_components/author/author_follow_button": 72,
        "../react_components/comment/comment_form": 84,
        "../react_components/comment/comments": 85,
        "../react_components/like/like_button": 135,
        "../react_components/like/like_information": 137,
        "../react_components/reading_notes/annotated_books_landing_page": 158,
        "../react_components/reading_notes/reading_notes_annotator": 161,
        "../react_components/reading_notes/reading_notes_header": 162,
        "../react_components/reading_notes/reading_notes_shelving_modal": 163,
        "../react_components/reading_notes/reading_notes_shelving_modal_trigger": 164,
        "../react_components/user/user_follow_widget": 197,
        "../react_components/user/user_icon": 198,
        "../react_components/want_to_read/want_to_read_button": 214,
        "../react_components/want_to_read/want_to_read_with_stars": 218,
        "../react_stores/author_follow_store": 236,
        "../react_stores/comments_store": 239,
        "../react_stores/like_store": 247,
        "../react_stores/reading_notes/annotated_books_store": 250,
        "../react_stores/shelvings_store": 253,
        "../react_stores/user/user_follow_store": 256,
        "../react_stores/user_agent_capabilities_store": 257,
        "../react_stores/user_shelves_store": 260
    }],
    226: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = e("array.prototype.find"),
            s = o(n);
        s["default"].shim()
    }, {
        "array.prototype.find": "array.prototype.find"
    }],
    227: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.HeaderComponents = r.HeaderStores = void 0;
        var n = e("../react_stores/current_user_store"),
            s = o(n),
            a = e("../react_stores/favorite_genres_store"),
            i = o(a),
            l = e("../react_stores/notifications_store"),
            u = o(l),
            d = e("../react_stores/shelvings_store"),
            c = o(d),
            p = e("../react_stores/tabs_store"),
            f = o(p),
            h = e("../react_components/flash_message"),
            m = o(h),
            _ = e("../react_components/featured_content_module"),
            g = o(_),
            v = e("../react_components/page_skin"),
            y = o(v),
            b = e("../react_components/ads/google_banner_ad"),
            k = o(b),
            S = e("../react_components/ads/native_ads/native_ad"),
            P = o(S),
            T = e("../react_components/ads/google_page_skin"),
            w = o(T),
            N = e("../react_components/ads/google_featured_content_module"),
            R = o(N),
            M = e("../react_components/scroll_tracker"),
            C = o(M),
            x = e("../react_components/header/header_store_connector"),
            A = o(x),
            I = e("../react_components/site_announcement/site_announcement"),
            L = o(I),
            U = e("../react_components/site_announcement/choice_site_announcement"),
            E = o(U),
            O = e("../react_components/site_announcement/welcome_announcement"),
            B = o(O),
            j = e("../react_components/group/preview_broadcast"),
            F = o(j),
            D = e("../react_components/jobs_list"),
            q = o(D),
            H = e("../react_components/shared/shareable_link_button"),
            G = o(H),
            $ = e("../react_components/share_dialog"),
            z = o($),
            W = e("../react_stores/share_dialog_store"),
            K = o(W);
        r.HeaderStores = {
            CurrentUserStore: s["default"],
            FavoriteGenresStore: i["default"],
            NotificationsStore: u["default"],
            ShareDialogStore: K["default"],
            ShelvingsStore: c["default"],
            TabsStore: f["default"]
        }, r.HeaderComponents = {
            FlashMessage: m["default"],
            HeaderStoreConnector: A["default"],
            PageSkin: y["default"],
            FeaturedContentModule: g["default"],
            GoogleBannerAd: k["default"],
            GooglePageSkin: w["default"],
            GoogleFeaturedContentModule: R["default"],
            ScrollTracker: C["default"],
            SiteAnnouncement: L["default"],
            ChoiceSiteAnnouncement: E["default"],
            WelcomeAnnouncement: B["default"],
            ShareDialog: z["default"],
            PreviewBroadcast: F["default"],
            NativeAd: P["default"],
            JobsList: q["default"],
            ShareableLinkButton: G["default"]
        }
    }, {
        "../react_components/ads/google_banner_ad": 58,
        "../react_components/ads/google_featured_content_module": 59,
        "../react_components/ads/google_page_skin": 60,
        "../react_components/ads/native_ads/native_ad": 62,
        "../react_components/featured_content_module": 103,
        "../react_components/flash_message": 105,
        "../react_components/group/preview_broadcast": 109,
        "../react_components/header/header_store_connector": 122,
        "../react_components/jobs_list": 134,
        "../react_components/page_skin": 147,
        "../react_components/scroll_tracker": 165,
        "../react_components/share_dialog": 173,
        "../react_components/shared/shareable_link_button": 178,
        "../react_components/site_announcement/choice_site_announcement": 187,
        "../react_components/site_announcement/site_announcement": 189,
        "../react_components/site_announcement/welcome_announcement": 190,
        "../react_stores/current_user_store": 240,
        "../react_stores/favorite_genres_store": 243,
        "../react_stores/notifications_store": 249,
        "../react_stores/share_dialog_store": 251,
        "../react_stores/shelvings_store": 253,
        "../react_stores/tabs_store": 254
    }],
    228: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("react"),
            s = o(n),
            a = e("lodash"),
            i = o(a),
            l = e("classnames"),
            u = o(l);
        r["default"] = {
            propTypes: {
                bemModifiers: s["default"].PropTypes.oneOfType([s["default"].PropTypes.string, s["default"].PropTypes.arrayOf(s["default"].PropTypes.string)])
            },
            withBemModifiers: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                if (null === t && (t = this.props.bemModifiers), !t) return e;
                if (i["default"].isString(t)) return e + " " + e + "--" + t;
                if (i["default"].isArray(t)) {
                    var r = (0, u["default"])(e, i["default"].map(t, function(t) {
                        return e + "--" + t
                    }));
                    return r
                }
            },
            withBemElement: function(e, t) {
                return this.props.bemModifiers ? i["default"].isString(this.props.bemModifiers) ? e + "--" + this.props.bemModifiers + "__" + t : i["default"].isArray(this.props.bemModifiers) ? (0, u["default"])(i["default"].map(this.props.bemModifiers, function(r) {
                    return e + "--" + r + "__" + t
                })) : void 0 : e + "__" + t
            }
        }
    }, {
        classnames: "classnames",
        lodash: "lodash",
        react: "react"
    }],
    229: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("react"),
            s = o(n),
            a = e("lodash"),
            i = o(a);
        r["default"] = {
            propTypes: {
                deployServices: s["default"].PropTypes.arrayOf(s["default"].PropTypes.string)
            },
            isFeatureEnabled: function(e) {
                return i["default"].indexOf(this.deployServices(), e) >= 0
            },
            deployServices: function() {
                if (void 0 === this.props.deployServices) throw "trying to access Deploy Services from component, but component does not contain deployServices prop (" + this.constructor.displayName + ")";
                return this.props.deployServices
            }
        }
    }, {
        lodash: "lodash",
        react: "react"
    }],
    230: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r["default"] = function(e) {
            return {
                getInitialState: function() {
                    return this.store = e(), this.store.getInitialState()
                },
                componentWillMount: function() {
                    this.actions = this.store.actions, this.unsubscribe = this.store.listen(this.onStoreChange)
                },
                componentWillUnmount: function() {
                    this.unsubscribe()
                },
                onStoreChange: function(e) {
                    this.setState(e)
                }
            }
        }
    }, {}],
    231: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function n(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function s(e, t) {
            var r = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                o = r.stateKey,
                s = void 0 === o ? null : o,
                a = r.filterValue,
                l = void 0 === a ? null : a;
            return {
                getInitialState: function() {
                    var r = e.getInitialState(i["default"].get(this.props, t));
                    return l && (r = r[l]), i["default"].isNull(s) || (r = n({}, s, r)), r
                },
                componentDidMount: function() {
                    var r = this;
                    u["default"].utils.extend(this, u["default"].ListenerMethods), this.listenTo(e, function(e) {
                        var o = e[i["default"].get(r.props, t)];
                        l && (o = o[l]), i["default"].isNull(s) || (o = n({}, s, o)), r.setState(o)
                    })
                },
                componentWillUnmount: u["default"].ListenerMixin.componentWillUnmount
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.connectToLazyStore = s;
        var a = e("lodash"),
            i = o(a),
            l = e("reflux"),
            u = o(l)
    }, {
        lodash: "lodash",
        reflux: "reflux"
    }],
    232: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("lodash"),
            s = o(n),
            a = 250;
        r["default"] = {
            onEnterIntent: function(e, t) {
                t || (t = a);
                try {
                    clearTimeout(this.leaveTimeout)
                } catch (r) {}
                this.hoverTimeout = s["default"].delay(e, t)
            },
            onLeaveIntent: function(e, t) {
                t || (t = a);
                try {
                    clearTimeout(this.hoverTimeout)
                } catch (r) {}
                this.leaveTimeout = s["default"].delay(e, t)
            }
        }
    }, {
        lodash: "lodash"
    }],
    233: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("react-dom"),
            s = o(n),
            a = e("lodash"),
            i = e("../modules/data_tracking/data_tracking_helper");
        r["default"] = {
            componentDidMount: function() {
                var e = this,
                    t = this.props.trackingOptions;
                t && ! function() {
                    var r = s["default"].findDOMNode(e);
                    r && ((0, a.each)((0, a.keys)(t), function(e) {
                        var o = t[e];
                        (0, a.isUndefined)(o) || r.setAttribute("data-tracking-" + e, JSON.stringify(o))
                    }), t.enableTracking === !0 && r.addEventListener("click", i.handleDataTracking))
                }()
            }
        }
    }, {
        "../modules/data_tracking/data_tracking_helper": 10,
        lodash: "lodash",
        "react-dom": "react-dom"
    }],
    234: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var o = e("../../react_actions/buy_buttons/get_a_copy_actions"),
            n = function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    t = arguments[1];
                switch (t.type) {
                    case o.GET_A_COPY_ACTIONS.LOADED_SUCCESS:
                        return Object.assign({}, e, {
                            activeGetACopyInterstitial: t.data
                        });
                    case o.GET_A_COPY_ACTIONS.INTERSTITIAL_CLOSED:
                        return Object.assign({}, e, {
                            activeGetACopyInterstitial: null
                        });
                    default:
                        return e
                }
            };
        r["default"] = n
    }, {
        "../../react_actions/buy_buttons/get_a_copy_actions": 26
    }],
    235: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var o = e("../../react_actions/header/search_actions");
        r["default"] = function() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case o.TOGGLE_SEARCH:
                    return Object.assign({}, e, {
                        searchIsActive: t.searchIsActive
                    });
                default:
                    return e
            }
        }
    }, {
        "../../react_actions/header/search_actions": 36
    }],
    236: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("reflux"),
            s = o(n),
            a = e("freezer-js"),
            i = o(a),
            l = e("lodash"),
            u = o(l),
            d = e("../react_actions/author_follow_actions"),
            c = o(d),
            p = e("./shared/newsfeed_updates_mixin"),
            f = o(p),
            h = new i["default"]({}),
            m = function() {
                return h.get()
            },
            _ = function(e, t) {
                return m()[e].set(t)
            },
            g = function(e, t) {
                return m()[e][t]
            },
            v = function(e) {
                var t = g(e, "followingCount"),
                    r = g(e, "isFollowing"),
                    o = {
                        isFollowing: !r,
                        followingCount: r ? t - 1 : t + 1
                    };
                _(e, o)
            },
            y = function(e) {
                var t = g(e, "buttonEnabled");
                _(e, {
                    buttonEnabled: !t
                })
            },
            b = s["default"].createStore({
                listenables: c["default"],
                mixins: [(0, f["default"])(p.NEWSFEED_DEPENDENT_STORE_KEYS.AUTHOR_FOLLOWS)],
                getInitialState: m,
                getState: m,
                initializeWith: function(e) {
                    var t = u["default"].transform(e, function(e, t, r) {
                        e[r] = {
                            isFollowing: t.isFollowing || !1,
                            followingCount: t.followingCount || 0,
                            authorFollowingId: t.authorFollowingId || null,
                            source: t.source || !1,
                            buttonEnabled: !0
                        }
                    });
                    m().set(t)
                },
                updateWith: function(e) {
                    this.initializeWith(e)
                },
                reset: function() {
                    m().reset({})
                },
                onFollow: function(e) {
                    var t = this,
                        r = g(e, "source"),
                        o = "AnnotatedBooksPage" === r,
                        n = "ReadingNotesListPage" === r;
                    y(e), this.trigger(this.getState()), $j.post("/author_followings", {
                        format: "json",
                        id: e,
                        from_annotated_books_page: o,
                        from_reading_notes_list_page: n
                    }).done(function(r) {
                        var o = {
                            authorFollowingId: parseInt(u["default"].words(r.url, /[0-9]+/)[0], 10)
                        };
                        _(e, o), v(e), y(e), t.trigger(t.getState())
                    }).fail(function(e) {
                        e && 403 === e.status && e.responseJSON && (location.href = e.responseJSON.redirect)
                    })
                },
                onUnFollow: function(e) {
                    var t = this;
                    y(e), this.trigger(this.getState()), $j.ajax({
                        type: "DELETE",
                        url: "/author_followings/" + g(e, "authorFollowingId"),
                        data: {
                            format: "json"
                        }
                    }).done(function() {
                        var r = {
                            authorFollowingId: null
                        };
                        _(e, r), v(e), y(e), t.trigger(t.getState())
                    })
                }
            });
        r["default"] = b
    }, {
        "../react_actions/author_follow_actions": 24,
        "./shared/newsfeed_updates_mixin": 252,
        "freezer-js": "freezer-js",
        lodash: "lodash",
        reflux: "reflux"
    }],
    237: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("lodash"),
            s = o(n),
            a = e("reflux"),
            i = o(a),
            l = e("freezer-js"),
            u = o(l),
            d = e("../react_actions/book_search_actions_factory"),
            c = o(d),
            p = function() {
                var e = new u["default"]({
                        showLoadingSpinner: !1,
                        showResultsContainer: !1,
                        results: [],
                        query: "",
                        activeResult: null
                    }),
                    t = (0, c["default"])(),
                    r = function(t) {
                        var r = e.get();
                        r.results.reset(t)
                    },
                    o = i["default"].createStore({
                        listenables: t,
                        getInitialState: e.get,
                        getState: e.get,
                        actions: t,
                        initializeWith: function(t) {
                            e.get().set("showLoadingSpinner", t.showLoadingSpinner).set("showResultsContainer", t.showResultsContainer).set("query", t.query).set("activeResult", t.activeResult).results.reset(t.results)
                        },
                        reset: function() {
                            e.get().reset({})
                        },
                        setValue: function(t, r) {
                            var o = e.get();
                            o.set(t, r)
                        },
                        onSelectSpecificResult: function(e) {
                            var t = s["default"].find(this.getState().results, function(t) {
                                return t.bookId === e
                            });
                            this.setValue("activeResult", t), this.trigger(this.getState())
                        },
                        onSetShowResultsContainer: function(e) {
                            this.setValue("showResultsContainer", e), this.trigger(this.getState())
                        },
                        onSelectNextResult: function(e) {
                            var t = this.getState().results,
                                r = s["default"].indexOf(t, this.getState().activeResult);
                            this.setValue("activeResult", t[(r + 1) % e]), this.trigger(this.getState())
                        },
                        onSelectPreviousResult: function(e) {
                            var t = this.getState().results,
                                r = this.getState().activeResult,
                                o = s["default"].indexOf(t, r);
                            0 === o || null === r ? this.setValue("activeResult", t[e - 1]) : this.setValue("activeResult", t[(o - 1) % e]), this.trigger(this.getState())
                        },
                        onSearchResultsFound: function(e, t) {
                            r(t), this.setValue("query", e), this.setValue("showLoadingSpinner", !1), this.setValue("activeResult", null), this.setValue("showResultsContainer", !0), this.trigger(this.getState())
                        },
                        onSearch: function(e, r) {
                            this.setValue("showLoadingSpinner", !0), this.trigger(this.getState()), $j.ajax({
                                url: r,
                                data: {
                                    format: "json",
                                    q: e
                                },
                                success: function(r) {
                                    t.searchResultsFound(e, r)
                                }
                            })
                        }
                    });
                return o
            };
        r["default"] = p
    }, {
        "../react_actions/book_search_actions_factory": 25,
        "freezer-js": "freezer-js",
        lodash: "lodash",
        reflux: "reflux"
    }],
    238: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("redux"),
            s = e("redux-logger"),
            a = o(s),
            i = e("../../modules/env_utils"),
            l = o(i),
            u = e("redux-thunk"),
            d = o(u),
            c = e("../../react_reducers/buy_buttons/get_a_copy_reducer"),
            p = o(c),
            f = [d["default"]];
        l["default"].isDevelopment() && l["default"].hasDom() && f.push((0, a["default"])());
        var h = (0, n.createStore)(p["default"], {}, n.applyMiddleware.apply(void 0, f));
        r["default"] = h
    }, {
        "../../modules/env_utils": 13,
        "../../react_reducers/buy_buttons/get_a_copy_reducer": 234,
        redux: "redux",
        "redux-logger": "redux-logger",
        "redux-thunk": "redux-thunk"
    }],
    239: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("lodash"),
            s = o(n),
            a = e("reflux"),
            i = o(a),
            l = e("freezer-js"),
            u = o(l),
            d = e("../modules/gr_error_reporting"),
            c = o(d),
            p = e("../react_actions/comment_actions"),
            f = o(p),
            h = e("./shared/newsfeed_updates_mixin"),
            m = o(h),
            _ = {},
            g = new u["default"](_),
            v = 2,
            y = 10,
            b = function() {
                return g.get()
            },
            k = function(e) {
                b().reset(s["default"].merge({}, _, e))
            },
            S = function(e) {
                return s["default"].has(b(), e) || b().set(e, {
                    numComments: 0,
                    unsavedComment: "",
                    comments: [],
                    saveInProgress: !1,
                    showCommentButton: !1,
                    textareaRows: 1,
                    showPagination: !1,
                    currentPage: 1,
                    showSeeMoreLoadingSpinner: !1
                }), b()[e]
            },
            P = function(e, t) {
                S(e).set(t)
            };
        r["default"] = i["default"].createStore({
            listenables: f["default"],
            mixins: [(0, m["default"])(h.NEWSFEED_DEPENDENT_STORE_KEYS.COMMENTS)],
            initializeWith: function(e) {
                k(e)
            },
            updateWith: function(e) {
                var t = s["default"].transform(e, function(e, t, r) {
                    e[r] = {
                        numComments: t.numComments || 0,
                        unsavedComment: t.unsavedComment || "",
                        comments: t.comments || [],
                        showCommentButton: !1,
                        saveInProgress: !1,
                        textareaRows: 1,
                        deletableByCurrentUser: t.deletableByCurrentUser,
                        blockedByCurrentUser: t.blockedByCurrentUser || !1
                    }
                });
                b().set(t)
            },
            onTextareaFocusRequested: function(e) {
                P(e, {
                    textareaFocusRequested: !0
                }), this.notifyListeners()
            },
            onTextareaFocused: function(e) {
                P(e, {
                    textareaRows: v,
                    textareaFocusRequested: !1,
                    showCommentButton: !0
                }), this.notifyListeners()
            },
            onTextareaUnfocused: function(e) {
                var t = S(e).unsavedComment;
                s["default"].isEmpty(s["default"].trim(t)) && P(e, {
                    textareaRows: 1
                }), this.notifyListeners()
            },
            onShowSeeMoreLoadingSpinner: function(e) {
                P(e, {
                    showSeeMoreLoadingSpinner: !0
                }), this.notifyListeners()
            },
            onDeleteComment: function(e, t, r) {
                var o = this,
                    n = S(e),
                    a = n.numComments - 1,
                    i = s["default"].findIndex(n.comments, function(e) {
                        return e.uri === t
                    });
                i >= 0 && (n.set("numComments", a), n.comments.splice(i, 1), n.showPagination || this.notifyListeners(), $j.post("/comment/destroy?comment_uri=" + t).done(function() {
                    n.showPagination && (0 === S(e).comments.length && n.currentPage > 1 ? (r.page = n.currentPage - 1, f["default"].showCommentsForPage(r)) : n.currentPage < Math.ceil(a / y) ? (r.page = n.currentPage, f["default"].showCommentsForPage(r)) : o.notifyListeners())
                }))
            },
            onAddNewComment: function(e) {
                var t = this,
                    r = {
                        body: S(e.subjectKey).unsavedComment,
                        authorUser: e.authorUser,
                        updatedAtMessage: "Just now"
                    };
                P(e.subjectKey, {
                    saveInProgress: !0
                }), this.notifyListeners(), $j.post("/comment.json", {
                    type: e.subject.type,
                    id: e.subject.id,
                    resource_uri: e.subject.uri,
                    comment: {
                        body_usertext: r.body
                    },
                    digest_default: !0,
                    respect_update_feed_preference: !0,
                    react_framework: !0
                }).done(function(r) {
                    var o = S(e.subjectKey),
                        n = o.numComments + 1;
                    if (o.set({
                            unsavedComment: "",
                            saveInProgress: !1,
                            numComments: n,
                            showCommentButton: !1
                        }), o.comments.length < y) {
                        var s = r;
                        o.comments.push({
                            createdAt: new Date,
                            body: s.body,
                            deletableByCurrentUser: s.deletableByCurrentUser,
                            blockedByCurrentUser: s.blockedByCurrentUser,
                            authorUser: e.authorUser,
                            updatedAtMessage: "Just now",
                            uri: s.uri,
                            flagForAbuseUrl: s.flagForAbuseUrl
                        })
                    } else e.page = Math.ceil(n / y), f["default"].showCommentsForPage(e);
                    t.onTextareaUnfocused(e.subjectKey)
                }).fail(function(t) {
                    var r = null;
                    422 === t.status ? r = "Sorry, your comment cannot be posted because it is too long (must be under 12000 characters). Please try again." : 404 === t.status ? r = "Sorry, this post has been deleted." : (r = "Sorry, your comment cannot be posted. ", t.responseJSON && t.responseJSON.errors && (r += t.responseJSON.errors.join(", "))), r && c["default"].notifyUser(r), P(e.subjectKey, {
                        saveInProgress: !1,
                        showCommentButton: !1
                    }), f["default"].textareaUnfocused(e.subjectKey)
                })
            },
            onShowCommentsForPage: function(e) {
                var t = this,
                    r = e.page > 0 ? e.page : 1;
                $j.get("/comment/index.json", {
                    type: e.subject.type,
                    id: e.subject.id,
                    resource_uri: e.subject.uri,
                    page: r,
                    per_page: y,
                    reverse: !0,
                    react_framework: !0
                }).done(function(o) {
                    P(e.subjectKey, {
                        comments: o.comments,
                        showPagination: !0,
                        currentPage: r,
                        showSeeMoreLoadingSpinner: !1
                    }), t.notifyListeners()
                })
            },
            onCommentEntered: function(e, t) {
                P(e, {
                    unsavedComment: t
                }), this.notifyListeners()
            },
            getState: b,
            getInitialState: function(e) {
                return s["default"].isUndefined(e) ? b() : S(e)
            },
            getInitialStateForKey: S,
            reset: function() {
                k({})
            },
            notifyListeners: function() {
                this.trigger(b())
            }
        })
    }, {
        "../modules/gr_error_reporting": 15,
        "../react_actions/comment_actions": 27,
        "./shared/newsfeed_updates_mixin": 252,
        "freezer-js": "freezer-js",
        lodash: "lodash",
        reflux: "reflux"
    }],
    240: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function n(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = e("lodash"),
            a = o(s),
            i = e("reflux"),
            l = o(i),
            u = e("freezer-js"),
            d = o(u),
            c = e("../react_actions/current_user_actions"),
            p = o(c),
            f = {
                currentUser: {}
            },
            h = new d["default"](f),
            m = function() {
                return h.get()
            },
            _ = function(e) {
                m().reset(a["default"].merge({}, f, e))
            };
        r["default"] = l["default"].createStore({
            listenables: [p["default"]],
            initializeWith: function(e) {
                a["default"].each(a["default"].keys(e), function(e) {
                    if (!a["default"].has(f, e)) throw new Error("Unexpected key passed to initializeWith. Received " + e + " Expected one of " + a["default"].keys(f))
                }), _(e)
            },
            getState: m,
            getInitialState: m,
            onUpdatePreference: function(e, t) {
                $j.post("/user/update_preferences", {
                    user: n({}, e, t)
                })
            },
            reset: function() {
                _({})
            }
        })
    }, {
        "../react_actions/current_user_actions": 28,
        "freezer-js": "freezer-js",
        lodash: "lodash",
        reflux: "reflux"
    }],
    241: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("lodash"),
            s = o(n),
            a = e("reflux"),
            i = o(a),
            l = e("freezer-js"),
            u = o(l),
            d = e("../../../modules/ajax/ajax_helper"),
            c = e("../../../react_actions/experimental/universal_search_actions_factory"),
            p = o(c),
            f = function() {
                var e = new u["default"]({
                        showLoadingSpinner: !1,
                        showResultsContainer: !1,
                        results: [],
                        query: "",
                        activeResult: null,
                        currentInput: null
                    }),
                    t = (0, p["default"])(),
                    r = function(t) {
                        var r = e.get();
                        r.results.reset(t)
                    },
                    o = 300,
                    n = i["default"].createStore({
                        listenables: t,
                        getInitialState: e.get,
                        getState: e.get,
                        actions: t,
                        initializeWith: function(t) {
                            e.get().set({
                                showLoadingSpinner: t.showLoadingSpinner,
                                showResultsContainer: t.showResultsContainer,
                                query: t.query,
                                activeResult: t.activeResult
                            }).results.reset(t.results)
                        },
                        reset: function() {
                            e.get().reset({})
                        },
                        hide: function() {
                            e.get().set({
                                showLoadingSpinner: !1,
                                activeResult: null,
                                showResultsContaine: !1
                            }), this.trigger(e.get())
                        },
                        search: function(r, o, n) {
                            r == e.get().currentInput ? (e.get().set("showLoadingSpinner", !0), this.trigger(e.get()), (0, d.httpGet)(o, {
                                data: {
                                    format: "json",
                                    query: r,
                                    limit: n
                                },
                                success: function(e) {
                                    t.searchResultsFound(r, e)
                                }
                            })) : this.hide()
                        },
                        delayedSearch: s["default"].debounce(function(e, t, r, o) {
                            e.search(t, r, o)
                        }, o),
                        onSelectSpecificResult: function(t) {
                            e.get().set("activeResult", t), this.trigger(e.get())
                        },
                        onSetShowResultsContainer: function(t) {
                            e.get().set("showResultsContainer", t), this.trigger(e.get())
                        },
                        onSelectNextResult: function(t) {
                            var r = e.get().results,
                                o = s["default"].indexOf(r, e.get().activeResult);
                            e.get().set("activeResult", r[(o + 1) % t]), this.trigger(e.get())
                        },
                        onSelectPreviousResult: function(t) {
                            var r = e.get().results,
                                o = e.get().activeResult,
                                n = s["default"].indexOf(r, o);
                            0 === n || null === o ? e.get().set("activeResult", r[t - 1]) : e.get().set("activeResult", r[(n - 1) % t]), this.trigger(e.get())
                        },
                        onSearchResultsFound: function(t, o) {
                            t == e.get().currentInput && (r(o), e.get().set({
                                query: t,
                                showLoadingSpinner: !1,
                                activeResult: null,
                                showResultsContainer: !0
                            }), this.trigger(e.get()))
                        },
                        onSearch: function(t, r, o) {
                            t = t.trim(), e.get().set("currentInput", t), s["default"].isEmpty(t) ? this.hide() : this.delayedSearch(this, t, r, o)
                        }
                    });
                return n
            };
        r["default"] = f
    }, {
        "../../../modules/ajax/ajax_helper": 5,
        "../../../react_actions/experimental/universal_search_actions_factory": 31,
        "freezer-js": "freezer-js",
        lodash: "lodash",
        reflux: "reflux"
    }],
    242: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("lodash"),
            s = o(n),
            a = e("reflux"),
            i = o(a),
            l = e("freezer-js"),
            u = o(l),
            d = e("../react_actions/favorite_genres_actions"),
            c = o(d),
            p = e("../react_actions/favorite_genres_form_actions"),
            f = o(p),
            h = new u["default"]({
                selectedGenres: []
            }),
            m = function() {
                return h.get()
            },
            _ = function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0];
                m().selectedGenres.reset(e)
            },
            g = i["default"].createStore({
                listenables: f["default"],
                getInitialState: m,
                getState: m,
                initializeWith: function() {
                    for (var e = arguments.length, t = Array(e), r = 0; e > r; r++) t[r] = arguments[r];
                    _(t)
                },
                onSubmitSelectedGenres: function() {
                    c["default"].changeFavoriteGenres(m().selectedGenres)
                },
                onSelectFavoriteGenre: function(e) {
                    s["default"].includes(m().selectedGenres, e) || (m().selectedGenres.push(e), this.notifyListeners())
                },
                onDeselectFavoriteGenre: function(e) {
                    m().selectedGenres.shift(e), this.notifyListeners()
                },
                notifyListeners: function() {
                    this.trigger(m())
                },
                reset: function() {
                    _()
                }
            });
        r["default"] = g
    }, {
        "../react_actions/favorite_genres_actions": 32,
        "../react_actions/favorite_genres_form_actions": 33,
        "freezer-js": "freezer-js",
        lodash: "lodash",
        reflux: "reflux"
    }],
    243: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("lodash"),
            s = o(n),
            a = e("reflux"),
            i = o(a),
            l = e("freezer-js"),
            u = o(l),
            d = e("../react_actions/favorite_genres_actions"),
            c = o(d),
            p = {
                allGenres: [],
                favoriteGenres: []
            },
            f = new u["default"](p),
            h = function() {
                return f.get()
            },
            m = function(e) {
                h().reset(s["default"].merge({}, p, e))
            },
            _ = function(e) {
                return s["default"].inject(h().allGenres, function(t, r) {
                    var o = r.name;
                    return t.favorites[o] = s["default"].includes(e, o), t
                }, {
                    favorites: {}
                })
            };
        r["default"] = i["default"].createStore({
            listenables: [c["default"]],
            initializeWith: function(e) {
                s["default"].each(s["default"].keys(e), function(e) {
                    if (!s["default"].has(p, e)) throw new Error("Unexpected key passed to initializeWith. Received " + e + ". Expected one of " + s["default"].keys(p))
                }), m(e)
            },
            updateWith: function(e) {
                h().set(e)
            },
            getState: h,
            getInitialState: h,
            reset: function() {
                m()
            },
            notifyListeners: function() {
                this.trigger(h())
            },
            onChangeFavoriteGenres: function(e) {
                var t = this,
                    r = function() {
                        h().favoriteGenres.reset(e), t.notifyListeners()
                    };
                $j.post("/user/edit_fav_genres", s["default"].merge(_(e), {
                    format: "json"
                }), r)
            }
        })
    }, {
        "../react_actions/favorite_genres_actions": 32,
        "freezer-js": "freezer-js",
        lodash: "lodash",
        reflux: "reflux"
    }],
    244: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("lodash"),
            s = o(n),
            a = e("reflux"),
            i = o(a),
            l = e("freezer-js"),
            u = o(l),
            d = e("../react_actions/featured_genres_actions"),
            c = o(d),
            p = e("../react_actions/shelvings_actions"),
            f = o(p),
            h = e("../react_stores/favorite_genres_store"),
            m = o(h),
            _ = new u["default"]({}),
            g = function() {
                return _.get()
            },
            v = i["default"].createStore({
                listenables: c["default"],
                init: function() {
                    m["default"].listen(function() {
                        c["default"].requestFeaturedBooks()
                    })
                },
                initializeWith: function(e) {
                    _.get().reset({
                        featuredGenreBookInfo: e
                    })
                },
                getInitialState: g,
                getState: g,
                onRequestFeaturedBooks: function() {
                    var e = this;
                    return s["default"].isEmpty(m["default"].getState().favoriteGenres) ? void this.saveNewFeaturedBooks([]) : void(g().requestedFeaturedBooksBefore || ($j.get("/genres/featured_books").done(function(t) {
                        e.saveNewFeaturedBooks(t.genres), f["default"].addShelvings(t.shelvings)
                    }).fail(function(e) {
                        c["default"].displayError(e)
                    }), g().set("requestedFeaturedBooksBefore", !0)))
                },
                onTrackMenuImpression: function() {
                    $j.get("/dfp/browse_menu_impression")
                },
                saveNewFeaturedBooks: function(e) {
                    g().set("featuredGenreBookInfo", e), this.notifyListeners()
                },
                onDisplayError: function() {
                    g().set("errorMessage", "Error loading featured books in genre."), this.notifyListeners()
                },
                notifyListeners: function() {
                    this.trigger(g())
                },
                reset: function() {
                    g().reset({})
                }
            });
        r["default"] = v
    }, {
        "../react_actions/featured_genres_actions": 34,
        "../react_actions/shelvings_actions": 44,
        "../react_stores/favorite_genres_store": 243,
        "freezer-js": "freezer-js",
        lodash: "lodash",
        reflux: "reflux"
    }],
    245: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function n(e) {
            if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                return r
            }
            return Array.from(e)
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.ImpressionCode = void 0;
        var s = e("lodash"),
            a = o(s),
            i = e("reflux"),
            l = o(i),
            u = e("freezer-js"),
            d = o(u),
            c = e("../react_actions/data_tracking/data_tracking_actions"),
            p = o(c),
            f = e("../react_actions/google_ads_actions"),
            h = o(f),
            m = e("../react_actions/newsfeed_actions"),
            _ = o(m),
            g = e("../modules/ads/google_ad_helper"),
            v = e("../modules/env_utils"),
            y = o(v),
            b = {
                targeting: {},
                ads: {},
                nativeAds: {},
                device_type: null
            },
            k = new d["default"](b),
            S = r.ImpressionCode = {
                success: "0",
                dfpError: "1",
                monolithError: "2",
                empty: "3"
            },
            P = function() {
                return k.get()
            },
            T = function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                P().reset(a["default"].merge({}, b, e))
            },
            w = function(e) {
                if (!a["default"].has(P().ads, e)) {
                    if (!a["default"].has(P().nativeAds, e)) throw new ReferenceError("No such product existing for key " + e);
                    return P().nativeAds[e]
                }
                return P().ads[e]
            },
            N = function(e, t) {
                w(e).set(t)
            },
            R = function(e) {
                return e.path.split("/", 3)[2]
            },
            M = function(e) {
                return {
                    ad_unit: R(e),
                    line_item_id: e.lineItemId,
                    ad_device_type: e.adDeviceType
                }
            },
            C = function(e, t, r) {
                var o = a["default"].merge(M(t), r);
                $j.ajax({
                    url: e,
                    type: "GET",
                    data: o
                })
            },
            x = function(e) {
                N(e, {
                    impressionLogged: !0
                })
            },
            A = function(e, t) {
                var r = w(e);
                r && !r.impressionLogged && (C(r.pmetImpressionTrackUrl, r, {
                    impression_output: t
                }), x(e))
            },
            I = function(e) {
                C(e.pmetClickTrackUrl, e, {
                    click_type: "click"
                })
            },
            L = function(e) {
                switch (e) {
                    case "NewsfeedAd":
                        return "/dfp/ajax_native_ad";
                    case "PageSkin":
                        return "/dfp/ajax_premium_campaign_page_skin";
                    case "FeaturedContent":
                        return "/dfp/ajax_premium_campaign_featured_content"
                }
            };
        r["default"] = l["default"].createStore({
            listenables: [h["default"], {
                trackClickEvent: p["default"].trackClickEvent
            }],
            initializeWith: function(e) {
                (0, g.lazyLoadInit)(), e = a["default"].merge({}, {
                    callbacksAttached: []
                }, e), T(e);
                var t = [];
                if (y["default"].hasDom() && !(0, g.adSlotsDefined)()) {
                    var r = a["default"].merge({}, this.getState().ads, this.getState().nativeAds);
                    a["default"].map(r, function(e, r) {
                        e.isLazyLoaded || ((0, g.defineSlot)(r, e.path, e.dimensions, e.adSizeMapping), t.push((0, g.slotToHash)(e, r)))
                    }), (0, g.enableServices)(), (0, g.fetchApstagBids)(t)
                }
            },
            resetTo: function(e) {
                T(e)
            },
            updateWith: function(e) {
                P().set(a["default"].merge({}, P(), e))
            },
            onTrackClickEvent: function(e, t) {
                var r = e.target,
                    o = void 0,
                    n = void 0,
                    s = void 0,
                    i = void 0,
                    l = /news/,
                    u = JSON.parse(t.getAttribute("data-tracking-adId"));
                if (u = u ? u : a["default"].findKey(P().nativeAds, function(e) {
                        return e.path.match(l)
                    }))
                    for (; r !== t;) r.getAttribute("data-tracking-dfp") && !o && (o = r.getAttribute("data-tracking-dfp"), s = JSON.parse(o), s && this.trackDfpClick(u)), r.getAttribute("data-tracking-pmet") && !n && (n = r.getAttribute("data-tracking-pmet"), i = JSON.parse(n), this.trackPmetClick(u, i)), r = r.parentNode
            },
            mergeWith: function(e) {
                P().set(a["default"].merge({}, P(), e))
            },
            onHasAttachedDfpCallbackForSlot: function(e) {
                this.getState().set("callbacksAttached", [].concat(n(this.getState().callbacksAttached), [e]))
            },
            onCheckCallbacksAttached: function(e, t, r) {
                var o = a["default"].reduce(["ads", "nativeAds"], function(e, t) {
                    var o = a["default"].reduce(a["default"].keys(P()[t]), function(e, t) {
                        var o = void 0;
                        return o = a["default"].includes(r, t) ? w(t).isLazyLoaded || a["default"].includes(P().callbacksAttached, t) : !0, e && o
                    }, !0);
                    return e && o
                }, !0);
                o ? e(!0) : setTimeout(function() {
                    return e(!1)
                }, 500)
            },
            onRequestCreativeForSlot: function(e, t) {
                window.googletag && window.googletag.cmd && window.googletag.cmd.push(function() {
                    (0, g.requestCreative)(e, t)
                })
            },
            onRemoveAdSlot: function(e) {
                N(e, {
                    empty: !0
                }), this.notifyListeners()
            },
            onTrackImpression: function(e, t) {
                A(e, t)
            },
            onAttachServedBannerAdAttributesAndTracking: function(e, t, r, o, n) {
                N(e, {
                    lineItemId: t,
                    creative: r,
                    impressionCode: o
                });
                var s = w(e);
                return r ? (n || A(e, o), void s.creative.on("click", "a", function() {
                    I(s)
                })) : void A(e, S.dfpError)
            },
            onAttachServedNativeAdAttributesAndTracking: function(e, t, r, o, n, s, a) {
                N(e, {
                    lineItemId: t,
                    url: s
                });
                var i = w(e),
                    l = i.resourceType,
                    u = L(l);
                return r ? void("NewsfeedAd" === i.resourceType ? this.ajaxNewsfeedAd(e, t, o, n, s, a, u) : this.ajaxPremiumCampaign(e, t, o, n, s, a, u)) : void A(e, S.dfpError)
            },
            ajaxNewsfeedAd: function(e, t, r, o, n, s, a) {
                var i = this;
                $j.ajax({
                    type: "GET",
                    url: a,
                    data: {
                        format: "json",
                        id: r,
                        line_item_id: t,
                        ad_unit: s,
                        ad_device_type: "desktop",
                        react: !0
                    }
                }).done(function(t) {
                    t.ok ? (N(e, t), _["default"].updateNativeAdSlot(w(e).id, w(e)), i.notifyListeners(), A(e, o)) : A(e, S.monolithError)
                })
            },
            ajaxPremiumCampaign: function(e, t, r, o, n, s, a) {
                var i = this;
                $j.ajax({
                    type: "GET",
                    url: a,
                    data: {
                        format: "json",
                        id: r,
                        line_item_id: t,
                        ad_unit: s,
                        ad_device_type: "desktop"
                    }
                }).done(function(t) {
                    t.ok ? (N(e, t), i.notifyListeners(P()), A(e, o)) : A(e, S.monolithError)
                })
            },
            trackDfpClick: function(e) {
                var t = w(e),
                    r = t.url,
                    o = a["default"].merge(M(t), {
                        click_type: "click"
                    }),
                    n = encodeURIComponent("?" + $j.param(o));
                $j.ajax({
                    type: "GET",
                    url: r + t.pmetClickTrackUrl + n
                })
            },
            trackPmetClick: function(e, t) {
                var r = w(e),
                    o = a["default"].merge(M(r), t);
                $j.ajax({
                    type: "GET",
                    url: r.pmetClickTrackUrl,
                    data: o
                })
            },
            notifyListeners: function() {
                this.trigger(P())
            },
            getInitialState: function(e) {
                return a["default"].isUndefined(e) ? P() : w(e)
            },
            getInitialStateForKey: w,
            getState: P,
            reset: T
        })
    }, {
        "../modules/ads/google_ad_helper": 4,
        "../modules/env_utils": 13,
        "../react_actions/data_tracking/data_tracking_actions": 29,
        "../react_actions/google_ads_actions": 35,
        "../react_actions/newsfeed_actions": 39,
        "freezer-js": "freezer-js",
        lodash: "lodash",
        reflux: "reflux"
    }],
    246: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("lodash"),
            s = e("reflux"),
            a = o(s),
            i = e("freezer-js"),
            l = o(i),
            u = e("../react_actions/discussions_pane_actions"),
            d = o(u),
            c = {
                groups: []
            },
            p = new l["default"](c),
            f = function() {
                return p.get()
            },
            h = function(e) {
                f().reset((0, n.merge)({}, c, e))
            };
        r["default"] = a["default"].createStore({
            listenables: [d["default"]],
            getState: f,
            getInitialState: f,
            onOpenPane: function() {
                var e = this;
                $j.post("/track/track_click", {
                    feature: "NavBarDiscussionsPaneOpenedGem"
                }), (0, n.isEmpty)(f().groups) && (this.trigger(f()), $j.get("/group/navbar_discussions", {
                    format: "json"
                }).done(function(t) {
                    e.updateWith(t)
                }).fail(function() {
                    f().set("errorMessage", "There was an error loading your groups."), e.trigger(f())
                }))
            },
            updateWith: function(e) {
                e.sparse ? f().set("sparse", e.sparse) : (0, n.each)(e.groups, function(e) {
                    var t = e.group;
                    f().groups.push({
                        group: {
                            name: t.name,
                            iconUrl: t.iconUrl,
                            url: t.url,
                            lastActiveAt: t.lastActiveAt,
                            id: t.id,
                            allUnreadPostsUrl: t.allUnreadPostsUrl
                        },
                        topics: e.topics
                    })
                }), this.trigger(f())
            },
            reset: function() {
                h({})
            }
        })
    }, {
        "../react_actions/discussions_pane_actions": 30,
        "freezer-js": "freezer-js",
        lodash: "lodash",
        reflux: "reflux"
    }],
    247: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("lodash"),
            s = o(n),
            a = e("reflux"),
            i = o(a),
            l = e("freezer-js"),
            u = o(l),
            d = e("../react_actions/like_actions"),
            c = o(d),
            p = e("./shared/newsfeed_updates_mixin"),
            f = o(p),
            h = e("../modules/gr_error_reporting"),
            m = o(h),
            _ = e("../modules/ajax/ajax_helper"),
            g = new u["default"]({}),
            v = function() {
                return g.get()
            },
            y = function(e) {
                return s["default"].has(v(), e) || v().set(e, {
                    likeCount: 0,
                    isLiked: !1,
                    showLoadingSpinner: !1
                }), v()[e]
            },
            b = function(e, t, r) {
                v()[e].set(t, r)
            },
            k = function(e, t) {
                return v()[e][t]
            },
            S = function(e) {
                var t = k(e, "likeCount"),
                    r = k(e, "isLiked");
                b(e, "isLiked", !r), b(e, "likeCount", k(e, "isLiked") ? t + 1 : t - 1)
            },
            P = i["default"].createStore({
                listenables: c["default"],
                mixins: [(0, f["default"])(p.NEWSFEED_DEPENDENT_STORE_KEYS.LIKES)],
                getState: v,
                getInitialState: function(e) {
                    return s["default"].isUndefined(e) ? v() : y(e)
                },
                getInitialStateForKey: y,
                reset: function() {
                    g.get().reset({})
                },
                initializeWith: function(e) {
                    s["default"].each(s["default"].keys(e), function(t) {
                        var r = e[t];
                        r.likedBy = r.likedBy || !1, r.likeCount = r.likeCount || 0, r.showLoadingSpinner = !1, v().set(t, r)
                    })
                },
                updateWith: function(e) {
                    this.initializeWith(e)
                },
                triggerLoadingSpinner: function(e) {
                    var t = k(e, "showLoadingSpinner");
                    b(e, "showLoadingSpinner", !t)
                },
                onLike: function(e) {
                    var t = this;
                    this.triggerLoadingSpinner(e), this.trigger(this.getState()), (0, _.httpPost)("/rating", {
                        format: "json",
                        data: {
                            rating: {
                                resource_type: k(e, "resourceType"),
                                resource_id: k(e, "resourceId"),
                                resource_uri: k(e, "resourceUri"),
                                rating: 1
                            }
                        }
                    }).done(function(r) {
                        S(e), b(e, "ratingId", r.rating_id), t.trigger(v())
                    }).fail(function(e) {
                        var t = e.responseText;
                        t && m["default"].notifyUser(t)
                    }).always(function() {
                        t.triggerLoadingSpinner(e), t.trigger(v())
                    })
                },
                onUnLike: function(e) {
                    var t = this;
                    this.triggerLoadingSpinner(e), this.trigger(this.getState());
                    var r = k(e, "ratingId"),
                        o = "",
                        n = {};
                    r ? (o = "/rating/" + r, n = {
                        format: "json"
                    }) : (o = "/rating/", n = {
                        format: "json",
                        resource_uri: k(e, "resourceUri")
                    }), (0, _.httpDelete)(o, {
                        data: n
                    }).done(function() {
                        S(e), t.trigger(v())
                    }).fail(function(e) {
                        var t = "Unable to unlike.";
                        404 == e.status ? t += " You may have already unliked." : e.responseText && (t += e.responseText), t += " Please refresh the page and try again.", m["default"].notifyUser(t)
                    }).always(function() {
                        t.triggerLoadingSpinner(e), t.trigger(v())
                    })
                }
            });
        r["default"] = P
    }, {
        "../modules/ajax/ajax_helper": 5,
        "../modules/gr_error_reporting": 15,
        "../react_actions/like_actions": 37,
        "./shared/newsfeed_updates_mixin": 252,
        "freezer-js": "freezer-js",
        lodash: "lodash",
        reflux: "reflux"
    }],
    248: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("reflux"),
            s = o(n),
            a = e("freezer-js"),
            i = o(a),
            l = e("../react_actions/modal_actions"),
            u = o(l),
            d = new i["default"]({}),
            c = function() {
                return d.get()
            },
            p = s["default"].createStore({
                listenables: u["default"],
                getInitialState: c,
                getState: c,
                initializeWith: function(e) {
                    d.get().reset(e)
                },
                onOpenModal: function(e) {
                    d.get().set("currentActiveModal", e), this.notifyListeners()
                },
                onCloseModal: function() {
                    d.get().set("currentActiveModal", null), this.notifyListeners()
                },
                notifyListeners: function() {
                    this.trigger(c())
                },
                reset: function() {
                    d.get().reset({})
                }
            });
        r["default"] = p
    }, {
        "../react_actions/modal_actions": 38,
        "freezer-js": "freezer-js",
        reflux: "reflux"
    }],
    249: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("reflux"),
            s = o(n),
            a = e("freezer-js"),
            i = o(a),
            l = e("../react_actions/notifications_actions"),
            u = o(l),
            d = new i["default"]({}),
            c = function() {
                return d.get()
            },
            p = s["default"].createStore({
                listenables: u["default"],
                getInitialState: c,
                getState: c,
                initializeWith: function(e) {
                    d.get().reset(e)
                },
                updateWith: function(e) {
                    this.initializeWith(e)
                },
                onLoadNotifications: function(e) {
                    d.get().set("notifications", e), d.get().set("unreadCount", 0), d.get().set("unreadCountMore", !1), this.notifyListeners()
                },
                onLoadError: function() {
                    d.get().set("errorOccurred", !0), this.notifyListeners()
                },
                onRequestNotifications: function() {
                    d.get().hasRequestedBefore || $j.ajax({
                        url: "/notifications/",
                        type: "GET",
                        success: function(e) {
                            u["default"].loadNotifications(e)
                        },
                        error: function() {
                            u["default"].loadError()
                        }
                    }), d.get().set("hasRequestedBefore", !0)
                },
                notifyListeners: function() {
                    this.trigger(c())
                },
                reset: function() {
                    d.get().reset({})
                }
            });
        r["default"] = p
    }, {
        "../react_actions/notifications_actions": 40,
        "freezer-js": "freezer-js",
        reflux: "reflux"
    }],
    250: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("lodash"),
            s = o(n),
            a = e("reflux"),
            i = o(a),
            l = e("freezer-js"),
            u = o(l),
            d = e("../../react_actions/reading_notes/annotated_books_actions"),
            c = o(d),
            p = new u["default"]({
                annotatedBooksCollection: [],
                nextToken: null,
                showSpinner: !0,
                showError: !1
            }),
            f = function() {
                return p.get()
            },
            h = i["default"].createStore({
                listenables: [c["default"]],
                getInitialState: f,
                getState: f,
                updateWith: function(e, t) {
                    var r = s["default"].union(p.get().annotatedBooksCollection, e);
                    r = s["default"].uniq(r, function(e) {
                        return e.asin
                    }), f().set({
                        annotatedBooksCollection: r,
                        nextToken: t,
                        showError: !1
                    }), this.notifyListeners()
                },
                showSpinner: function(e) {
                    f().set("showSpinner", e), this.notifyListeners()
                },
                showError: function() {
                    f().set("showError", !0), this.notifyListeners()
                },
                notifyListeners: function() {
                    this.trigger(f())
                },
                reset: function() {
                    f().reset({})
                },
                onLoadAnnotatedBooks: function(e) {
                    var t = this,
                        r = "/notes/" + e + "/load_more";
                    this.showSpinner(!0);
                    var o = {};
                    return p.get().nextToken && (o.start_token = p.get().nextToken), $j.get(r, o).done(function(e) {
                        t.updateWith(e.annotated_books_collection, e.next_token)
                    }).fail(function() {
                        t.showError()
                    }).always(function() {
                        t.showSpinner(!1)
                    })
                }
            });
        r["default"] = h
    }, {
        "../../react_actions/reading_notes/annotated_books_actions": 41,
        "freezer-js": "freezer-js",
        lodash: "lodash",
        reflux: "reflux"
    }],
    251: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.WARNING_SHARING_TEXT_LENGTH = r.MAXIMUM_SHARING_TEXT_LENGTH = void 0;
        var n = e("reflux"),
            s = o(n),
            a = e("freezer-js"),
            i = o(a),
            l = e("../react_actions/share_dialog_actions"),
            u = o(l),
            d = e("../modules/ajax/ajax_helper"),
            c = e("../modules/string_helper"),
            p = e("lodash"),
            f = new i["default"]({}),
            h = function() {
                return f.get()
            },
            m = r.MAXIMUM_SHARING_TEXT_LENGTH = 420;
        r.WARNING_SHARING_TEXT_LENGTH = 100;
        r["default"] = s["default"].createStore({
            listenables: [u["default"]],
            getState: h,
            getInitialState: function() {
                return h()
            },
            initializeWith: function(e) {
                h().reset(e)
            },
            onUpdateSharingTextInputValue: function(e) {
                var t = (0, c.astralLength)(e) > m,
                    r = t;
                h().set({
                    sharingTextInputValue: e,
                    shareModalButtonDisabled: r,
                    textTooLong: t
                }), this.trigger(h())
            },
            onSubmitShare: function(e, t) {
                var r = this;
                h().set({
                    shareModalButtonDisabled: !0,
                    error: !1
                }), this.trigger(h());
                var o = {
                    resource_id: e.resourceId,
                    resource_type: e.resourceTypeFriendlyText,
                    sharing_text: t
                };
                e.sharerUserId && (o.sharer_user_id = e.sharerUserId), (0, d.httpPost)("/sharings", {
                    format: "json",
                    data: {
                        sharing: o
                    }
                }).done(function(e) {
                    h().set({
                        shared: !0,
                        sharingTextInputValue: "",
                        sharingUrl: e.sharingUrl,
                        sharingDisplayName: e.sharingDisplayName
                    })
                }).fail(function(e) {
                    var t = (0, p.get)(e, ["responseJSON", "message"]);
                    h().set({
                        error: !0,
                        errorText: t
                    })
                }).always(function() {
                    h().set({
                        shareModalButtonDisabled: !1
                    }), r.trigger(h())
                })
            },
            onOpenShareModal: function(e) {
                h().set({
                    shared: !1,
                    error: !1
                }), this.trigger(h());
                var t = "OpenSharingModal_" + e;
                (0, d.httpPost)("/track/track_click", {
                    data: {
                        feature: t
                    }
                })
            },
            reset: function() {
                h().reset({})
            }
        })
    }, {
        "../modules/ajax/ajax_helper": 5,
        "../modules/string_helper": 21,
        "../react_actions/share_dialog_actions": 43,
        "freezer-js": "freezer-js",
        lodash: "lodash",
        reflux: "reflux"
    }],
    252: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.NEWSFEED_DEPENDENT_STORE_KEYS = void 0;
        var n = e("../../react_actions/newsfeed_actions"),
            s = o(n),
            a = e("lodash"),
            i = function(e) {
                var t = {
                    init: function() {
                        (0, a.includes)((0, a.values)(l), e) && this.listenTo(s["default"].newsfeedItemsLoaded, this.onNewsfeedItemsLoaded)
                    },
                    onNewsfeedItemsLoaded: function(t) {
                        e && t[e] && (this.updateWith(t[e]), this.trigger(this.getState()))
                    }
                };
                return t
            };
        r["default"] = i;
        var l = r.NEWSFEED_DEPENDENT_STORE_KEYS = {
            COMMENTS: "comments",
            LIKES: "likes",
            SHELVINGS: "shelvings",
            AUTHOR_FOLLOWS: "authorFollows"
        }
    }, {
        "../../react_actions/newsfeed_actions": 39,
        lodash: "lodash"
    }],
    253: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("lodash"),
            s = o(n),
            a = e("reflux"),
            i = o(a),
            l = e("freezer-js"),
            u = o(l),
            d = e("../react_actions/shelvings_actions"),
            c = o(d),
            p = e("../react_actions/reading_session_actions"),
            f = o(p),
            h = e("../react_actions/user_shelves_actions"),
            m = o(h),
            _ = e("./shared/newsfeed_updates_mixin"),
            g = o(_),
            v = e("../modules/default_shelves"),
            y = e("../modules/book_origins"),
            b = e("../modules/ajax/ajax_helper"),
            k = new u["default"]({}),
            S = function() {
                return k.get()
            },
            P = function(e) {
                return s["default"].has(S(), e) || S().set(e, {
                    exclusiveShelfName: null,
                    nonExclusiveShelfNames: null,
                    exclusiveShelfDisplayName: null,
                    isShelvingInProgress: !1,
                    targetExclusiveShelfName: null
                }), S()[e]
            },
            T = function(e, t) {
                P(e).set(t), s["default"].each(S(), function(r, o) {
                    r.book && r.book.bookId === e && P(o).set(t)
                })
            },
            w = function(e, t, r) {
                T(e, {
                    exclusiveShelfName: t.name,
                    exclusiveShelfDisplayName: t.displayName
                }), "undefined" != typeof r && T(e, {
                    book: r.book,
                    updatedAt: Date.parse(r.updatedAt)
                }), t.name === v.DEFAULT_SHELVES.CURRENTLY_READING.name && f["default"].refreshReadingSessions()
            },
            N = function(e, t, r) {
                T(e, {
                    exclusiveShelfName: null,
                    exclusiveShelfDisplayName: null,
                    rating: 0,
                    nonExclusiveShelfNames: null
                }), r && m["default"].removeNonExclusiveShelf(t.name)
            },
            R = function(e) {
                T(e, {
                    rating: 0
                })
            },
            M = function(e, t) {
                var r = arguments.length <= 2 || void 0 === arguments[2] ? null : arguments[2];
                A(e, r), T(e, {
                    rating: t
                })
            },
            C = function(e, t) {
                var r = arguments.length <= 2 || void 0 === arguments[2] ? null : arguments[2],
                    o = P(e),
                    n = s["default"].clone(o.nonExclusiveShelfNames) || [];
                n.push(t.name), T(e, {
                    nonExclusiveShelfNames: n
                }), A(e, r), m["default"].addNonExclusiveShelf(t.name)
            },
            x = function(e, t, r) {
                var o = P(e),
                    n = s["default"].clone(o.nonExclusiveShelfNames);
                n = s["default"].without(n, t.name), r && m["default"].removeNonExclusiveShelf(t.name), T(e, {
                    nonExclusiveShelfNames: n
                })
            },
            A = function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1],
                    r = P(e);
                null === r.exclusiveShelfName && w(e, v.DEFAULT_SHELVES.READ, t)
            },
            I = function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1],
                    r = arguments.length <= 2 || void 0 === arguments[2] ? null : arguments[2],
                    o = e;
                return t && (o = s["default"].merge({}, e, {
                    book_origin: t
                })), r && (o = s["default"].merge({}, o, {
                    progress_update_text: r
                })), o = s["default"].merge({}, o, {
                    v: 2
                }), (0, b.httpPost)("/shelf/add_to_shelf.json", {
                    data: o
                })
            };
        r["default"] = i["default"].createStore({
            listenables: c["default"],
            mixins: [(0, g["default"])(_.NEWSFEED_DEPENDENT_STORE_KEYS.SHELVINGS)],
            getState: S,
            getInitialState: function(e) {
                return s["default"].isUndefined(e) ? S() : P(e)
            },
            initializeWith: function(e) {
                k.get().reset(e), this.notifyListeners()
            },
            reset: function() {
                k.get().reset({})
            },
            notifyListeners: function() {
                this.trigger(S())
            },
            updateWith: function(e) {
                var t = s["default"].transform(e, function(e, t, r) {
                    return e[r].isShelvingInProgress = !1, e[r].updatedAt = Date.parse(t.updatedAt), e
                }, e);
                this.getState().set(t), this.notifyListeners()
            },
            onShelveBook: function(e, t) {
                var r = this,
                    o = arguments.length <= 2 || void 0 === arguments[2] ? null : arguments[2],
                    n = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
                    s = P(e).exclusiveShelfName;
                T(e, {
                    isShelvingInProgress: !0,
                    targetExclusiveShelfName: t.name
                });
                var a = {
                    book_id: e,
                    name: t.name
                };
                this.notifyListeners(), I(a, o, n).done(function(r) {
                    if (w(e, t, r), r = r || {}, r.shelves = {}, r.shelves[(0, v.getExclusiveShelfType)(t.name)] = [t.name], c["default"].bookShelved(r), s) {
                        var n = {};
                        n[(0, v.getExclusiveShelfType)(s)] = [s], c["default"].bookUnshelved({
                            shelves: n
                        })
                    }
                    o === y.BOOK_ORIGINS.CURRENTLY_READING_WIDGET && f["default"].shelveBookSuccess()
                }).fail(function() {
                    window.alert("There was an error adding the book to your shelf, please try again.")
                }).always(function() {
                    T(e, {
                        isShelvingInProgress: !1,
                        targetExclusiveShelfName: null
                    }), r.notifyListeners()
                })
            },
            onUnshelveBook: function(e) {
                var t = this;
                T(e, {
                    isShelvingInProgress: !0
                }), this.notifyListeners(), (0, b.httpPost)("/review/destroy", {
                    data: {
                        id: e
                    }
                }).done(function() {
                    var t = {};
                    t[(0, v.getExclusiveShelfType)(P(e).exclusiveShelfName)] = [P(e).exclusiveShelfName], t[v.SHELF_TYPES.NONEXCLUSIVE] = P(e).nonExclusiveShelfNames || [], c["default"].bookUnshelved({
                        shelves: t
                    }), N(e)
                }).fail(function() {
                    window.alert("There was an error removing the book from your shelves, please try again.")
                }).always(function() {
                    T(e, {
                        isShelvingInProgress: !1
                    }), t.notifyListeners()
                })
            },
            onToggleNonExclusiveShelving: function(e, t, r, o) {
                var n = this,
                    a = P(e).exclusiveShelfName,
                    i = P(e).nonExclusiveShelfNames,
                    l = !s["default"].includes(i, t.name),
                    u = S()[e] && null !== P(e).exclusiveShelfName,
                    d = {
                        book: {
                            bookId: e,
                            title: o
                        }
                    };
                l ? (A(e, d), C(e, t, d)) : x(e, t, !1), this.notifyListeners();
                var p = {
                    book_id: e,
                    name: t.name,
                    a: l ? "" : "remove"
                };
                I(p).done(function() {
                    var e = {};
                    l ? (e[v.SHELF_TYPES.DEFAULT] = a ? [] : [v.DEFAULT_SHELVES.READ.name], e[v.SHELF_TYPES.NONEXCLUSIVE] = [t.name], c["default"].bookShelved({
                        shelves: e
                    })) : (e[v.SHELF_TYPES.NONEXCLUSIVE] = [t.name], c["default"].bookUnshelved({
                        shelves: e
                    }))
                }).fail(function() {
                    window.alert("There was an error adding the book to your shelf, please try again."), u ? l ? x(e, t, r) : C(e, t, d) : N(e, t, r), n.notifyListeners()
                })
            },
            onRateBook: function(e, t, r) {
                var o = this,
                    n = 0,
                    s = !1,
                    a = {
                        book: {
                            bookId: e,
                            title: r
                        }
                    };
                S()[e] && (n = P(e).rating, s = null !== P(e).exclusiveShelfName, 0 === n && c["default"].rateBook.newBook()), M(e, t, a), this.notifyListeners(), (0, b.httpPost)("/review/rate", {
                    data: {
                        format: "json",
                        stars_click: !0,
                        id: e,
                        rating: t
                    }
                }).fail(function() {
                    window.alert("There was an error saving your rating, please try again."), n > 0 ? M(e, n, a) : s ? (R(e), c["default"].rateBook.failed()) : (N(e, null, !1), c["default"].rateBook.failed()), o.notifyListeners()
                })
            },
            onAddShelvings: function(e) {
                this.updateWith(e), this.notifyListeners()
            }
        })
    }, {
        "../modules/ajax/ajax_helper": 5,
        "../modules/book_origins": 7,
        "../modules/default_shelves": 12,
        "../react_actions/reading_session_actions": 42,
        "../react_actions/shelvings_actions": 44,
        "../react_actions/user_shelves_actions": 51,
        "./shared/newsfeed_updates_mixin": 252,
        "freezer-js": "freezer-js",
        lodash: "lodash",
        reflux: "reflux"
    }],
    254: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("reflux"),
            s = o(n),
            a = e("freezer-js"),
            i = o(a),
            l = e("../react_actions/tab_actions"),
            u = o(l),
            d = new i["default"]({}),
            c = function() {
                return d.get()
            },
            p = s["default"].createStore({
                listenables: u["default"],
                getInitialState: c,
                getState: c,
                initializeWith: function(e) {
                    d.get().reset(e)
                },
                updateWith: function(e) {
                    c().set(e)
                },
                onDeselectTab: function(e, t) {
                    d.get()[t] === e && (d.get().set(t, null), this.notifyListeners())
                },
                onSelectTab: function(e, t) {
                    d.get().set(t, e), this.notifyListeners()
                },
                notifyListeners: function() {
                    this.trigger(c())
                },
                reset: function() {
                    d.get().reset({})
                }
            });
        r["default"] = p
    }, {
        "../react_actions/tab_actions": 45,
        "freezer-js": "freezer-js",
        reflux: "reflux"
    }],
    255: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.DEFAULT_ERROR_MESSAGE = void 0;
        var n = e("reflux"),
            s = o(n),
            a = e("freezer-js"),
            i = o(a),
            l = e("../../../react_actions/user/show/block_user_actions"),
            u = o(l),
            d = e("../../user_relationships/friend_follow_module_store"),
            c = o(d),
            p = e("../../../modules/flash_message_helper"),
            f = e("../../../modules/ajax/ajax_helper"),
            h = e("lodash"),
            m = {
                blockInProgress: !1
            },
            _ = new i["default"](m),
            g = function() {
                return _.get()
            },
            v = r.DEFAULT_ERROR_MESSAGE = "Something went wrong with your request. Please\n  try again later.";
        r["default"] = s["default"].createStore({
            listenables: [u["default"]],
            getState: g,
            getInitialState: function() {
                return g()
            },
            initializeWith: function(e) {
                var t = Object.assign({}, m, e);
                g().set(t), this.trigger(g())
            },
            onBlockMember: function(e) {
                var t = this;
                g().set({
                    blockInProgress: !0
                }), this.trigger(g());
                var r = void 0;
                return (0, f.httpPost)("/user/" + e + "/block_member", {
                    data: {
                        format: "json"
                    }
                }).done(function(r) {
                    (0, p.flashSuccessMessage)(r.message), g().set({
                        isBlocked: r.isBlocked
                    }), c["default"].receiveUnfriend(e), t.trigger(g())
                }).fail(function(e) {
                    r = (0, h.get)(e, "message"), r || (r = v), (0, p.flashErrorMessage)(r)
                }).always(function() {
                    g().set({
                        blockInProgress: !1
                    }), t.trigger(g())
                })
            },
            reset: function() {
                g().reset(m)
            }
        })
    }, {
        "../../../modules/ajax/ajax_helper": 5,
        "../../../modules/flash_message_helper": 14,
        "../../../react_actions/user/show/block_user_actions": 46,
        "../../user_relationships/friend_follow_module_store": 259,
        "freezer-js": "freezer-js",
        lodash: "lodash",
        reflux: "reflux"
    }],
    256: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("reflux"),
            s = o(n),
            a = e("freezer-js"),
            i = o(a),
            l = e("lodash"),
            u = o(l),
            d = e("../../react_actions/user/user_follow_actions"),
            c = o(d),
            p = new i["default"]({}),
            f = function() {
                return p.get()
            },
            h = function(e, t) {
                return f()[e][t]
            },
            m = function(e, t) {
                return f()[e].set(t)
            },
            _ = function(e, t) {
                return f()[e][t]
            },
            g = function(e) {
                m(e, {
                    error: null
                })
            },
            v = function(e) {
                var t = _(e, "isFollowing"),
                    r = {
                        isFollowing: !t
                    };
                m(e, r)
            },
            y = function(e) {
                m(e, {
                    buttonEnabled: !0
                })
            },
            b = function(e) {
                m(e, {
                    buttonEnabled: !1
                })
            },
            k = s["default"].createStore({
                listenables: c["default"],
                getState: f,
                getInitialState: f,
                initializeWith: function(e) {
                    var t = u["default"].transform(e, function(e, t, r) {
                        e[r] = {
                            error: null,
                            buttonEnabled: !0,
                            isBlocked: t.isBlocked,
                            allowsFollow: t.allowsFollow,
                            source: t.source || !1,
                            isFollowing: t.isFollowing,
                            friendshipStatus: t.friendshipStatus
                        }
                    });
                    f().set(t)
                },
                updateWith: function(e) {
                    this.initializeWith(e)
                },
                reset: function() {
                    f().reset({})
                },
                onFollow: function(e) {
                    var t = this,
                        r = h(e, "source"),
                        o = "AnnotatedBooksPage" === r,
                        n = "ReadingNotesListPage" === r;
                    b(e), g(e), this.trigger(this.getState()), $j.post("/user/" + e + "/followers", {
                        format: "json",
                        from_annotated_books_page: o,
                        from_reading_notes_list_page: n
                    }).done(function(t) {
                        if ("success" === t.status) v(e);
                        else {
                            var r = {
                                error: t.message
                            };
                            m(e, r)
                        }
                    }).always(function() {
                        y(e), t.trigger(t.getState())
                    })
                },
                onUnFollow: function(e) {
                    var t = this;
                    b(e), g(e), this.trigger(this.getState()), $j.ajax({
                        type: "DELETE",
                        url: "/user/" + e + "/followers/stop_following",
                        data: {
                            format: "json"
                        }
                    }).done(function() {
                        v(e)
                    }).fail(function() {}).always(function() {
                        y(e), t.trigger(t.getState())
                    })
                }
            });
        r["default"] = k
    }, {
        "../../react_actions/user/user_follow_actions": 47,
        "freezer-js": "freezer-js",
        lodash: "lodash",
        reflux: "reflux"
    }],
    257: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("reflux"),
            s = o(n),
            a = e("freezer-js"),
            i = o(a),
            l = e("../react_actions/user_agent_capabilities_actions"),
            u = o(l),
            d = {
                touch: !1
            },
            c = new i["default"](d);
        r["default"] = s["default"].createStore({
            listenables: [u["default"]],
            initializeWith: function(e) {
                c.get().reset(e)
            },
            reset: function() {
                c.get().reset(d)
            },
            getInitialState: function() {
                return c.get()
            },
            onUserAgentGainsTouch: function() {
                c.get().set("touch", !0), this.trigger(c.get())
            },
            onUserAgentLosesTouch: function() {
                c.get().set("touch", !1), this.trigger(c.get())
            }
        })
    }, {
        "../react_actions/user_agent_capabilities_actions": 48,
        "freezer-js": "freezer-js",
        reflux: "reflux"
    }],
    258: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("lodash"),
            s = e("reflux"),
            a = o(s),
            i = e("freezer-js"),
            l = o(i),
            u = e("../modules/ajax/ajax_helper"),
            d = e("../react_actions/user_not_interested_actions"),
            c = o(d),
            p = {
                "default": {
                    isFlashMessage: !1,
                    isClosed: !1
                }
            },
            f = new l["default"](p),
            h = function() {
                return f.get()
            },
            m = function(e) {
                h().reset((0, n.merge)({}, p, e))
            };
        r["default"] = a["default"].createStore({
            listenables: [c["default"]],
            getState: h,
            getInitialState: h,
            reset: function() {
                m({})
            },
            setDataForKey: function(e, t) {
                var r = {};
                r[e] = t, h().set((0, n.merge)({}, h(), r))
            },
            onAddBookIDToState: function(e) {
                this.setDataForKey(e, h()["default"]), this.trigger(h())
            },
            onIsFlashMessageForBook: function(e) {
                h()[e].isFlashMessage
            },
            onCloseFlashMessage: function(e) {
                this.setDataForKey(e, {
                    isClosed: !0
                }), this.trigger(h())
            },
            userNotInterestedHttpPost: function(e) {
                return (0, u.httpPost)("/user_not_interested_works", {
                    data: {
                        user_not_interested_work: {
                            book_id: e,
                            source: "react"
                        }
                    }
                })
            },
            onUserNotInterested: function(e) {
                var t = this;
                this.userNotInterestedHttpPost(e).done(function() {
                    t.setDataForKey(e, {
                        isFlashMessage: !0
                    }), t.trigger(h())
                }).fail(function() {
                    window.alert("There was an error marking this book as not interested, please try again.")
                })
            },
            undoUserNotInterestedHttpDelete: function(e) {
                return (0, u.httpDelete)("/user_not_interested_works/undo", {
                    data: {
                        user_not_interested_work: {
                            book_id: e
                        }
                    }
                })
            },
            onUndoUserNotInterested: function(e) {
                var t = this;
                this.undoUserNotInterestedHttpDelete(e).done(function() {
                    t.setDataForKey(e, {
                        isFlashMessage: !1
                    }), t.trigger(h())
                }).fail(function() {
                    window.alert("There was an error undoing this action, please try again.")
                })
            }
        })
    }, {
        "../modules/ajax/ajax_helper": 5,
        "../react_actions/user_not_interested_actions": 49,
        "freezer-js": "freezer-js",
        lodash: "lodash",
        reflux: "reflux"
    }],
    259: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("reflux"),
            s = o(n),
            a = e("freezer-js"),
            i = o(a),
            l = e("../../react_actions/user_relationships/friend_follow_actions"),
            u = o(l),
            d = e("../../modules/ajax/ajax_helper"),
            c = e("lodash"),
            p = e("../../modules/flash_message_helper"),
            f = new i["default"]({}),
            h = function() {
                return f.get()
            };
        r["default"] = s["default"].createStore({
            listenables: [u["default"]],
            getState: h,
            getInitialState: function() {
                return h()
            },
            initializeWith: function(e) {
                h().reset(e)
            },
            startAjaxRequest: function(e) {
                h()[e].set({
                    inProgress: !0
                }), this.trigger(h())
            },
            finishAjaxRequest: function(e) {
                h()[e].set({
                    inProgress: !1
                }), this.trigger(h())
            },
            receiveUnfriend: function(e) {
                h()[e].set({
                    isFriend: !1,
                    isFollowing: !1,
                    isPendingFriendRequestTo: !1
                }), this.trigger(h())
            },
            onUnfriend: function(e) {
                var t = this;
                this.startAjaxRequest(e), (0, d.httpPost)("/friend/destroy/" + e + ".json").done(function() {
                    t.receiveUnfriend(e)
                }).fail(function(e) {
                    (0, p.flashErrorMessage)((0, c.get)(e, "message", d.DEFAULT_ERROR_MESSAGE))
                }).always(function() {
                    return t.finishAjaxRequest(e)
                })
            },
            onCancelFriendRequest: function(e, t) {
                var r = this;
                this.startAjaxRequest(e), (0, d.httpPost)("/friend/cancel_request/" + t + ".json").done(function() {
                    h()[e].set({
                        isFollowing: !1,
                        isPendingFriendRequestTo: !1
                    })
                }).fail(function(e) {
                    (0, p.flashErrorMessage)((0, c.get)(e, "message", d.DEFAULT_ERROR_MESSAGE))
                }).always(function() {
                    return r.finishAjaxRequest(e)
                })
            },
            onFollow: function(e) {
                var t = this,
                    r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                this.startAjaxRequest(e), (0, d.httpPost)("/user/" + e + "/followers.json", {
                    data: r
                }).done(function() {
                    h()[e].set({
                        isFollowing: !0
                    })
                }).fail(function(e) {
                    (0, p.flashErrorMessage)((0, c.get)(e, "message", d.DEFAULT_ERROR_MESSAGE))
                }).always(function() {
                    return t.finishAjaxRequest(e)
                })
            },
            onUnfollow: function(e) {
                var t = this;
                this.startAjaxRequest(e), (0, d.httpDelete)("/user/" + e + "/followers/stop_following.json").done(function() {
                    h()[e].set({
                        isFollowing: !1,
                        isPendingFriendRequestTo: !1
                    })
                }).fail(function(e) {
                    (0, p.flashErrorMessage)((0, c.get)(e, "message", d.DEFAULT_ERROR_MESSAGE))
                }).always(function() {
                    return t.finishAjaxRequest(e)
                })
            },
            onAcceptFriendRequest: function(e, t) {
                var r = this;
                this.startAjaxRequest(e), (0, d.httpPost)("/friend/confirm_request.json", {
                    data: {
                        id: t
                    }
                }).done(function() {
                    h()[e].set({
                        isFriend: !0,
                        isPendingFriendRequestFrom: !1
                    })
                }).fail(function(e) {
                    (0, p.flashErrorMessage)((0, c.get)(e, "message", d.DEFAULT_ERROR_MESSAGE))
                }).always(function() {
                    return r.finishAjaxRequest(e)
                })
            },
            reset: function() {
                h().reset({})
            }
        })
    }, {
        "../../modules/ajax/ajax_helper": 5,
        "../../modules/flash_message_helper": 14,
        "../../react_actions/user_relationships/friend_follow_actions": 50,
        "freezer-js": "freezer-js",
        lodash: "lodash",
        reflux: "reflux"
    }],
    260: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("lodash"),
            s = o(n),
            a = e("reflux"),
            i = o(a),
            l = e("freezer-js"),
            u = o(l),
            d = e("../react_actions/shelvings_actions"),
            c = o(d),
            p = e("../react_actions/user_shelves_actions"),
            f = o(p),
            h = e("../react_actions/want_to_read_menu_actions"),
            m = o(h),
            _ = e("../modules/default_shelves"),
            g = {
                defaultShelves: [],
                customExclusiveShelves: [],
                nonExclusiveShelves: []
            },
            v = new u["default"](g),
            y = function() {
                return v.get()
            },
            b = function(e, t, r) {
                var o = s["default"].find(y()[t], {
                    name: e
                });
                o && o.set("bookCount", o.bookCount + r)
            };
        r["default"] = i["default"].createStore({
            listenables: [f["default"], {
                bookShelved: c["default"].bookShelved,
                bookUnshelved: c["default"].bookUnshelved
            }],
            getInitialState: v.get,
            getState: y,
            defaultShelves: function() {
                var e = y().defaultShelves;
                return 0 === e.length ? _.DEFAULT_SHELVES : {
                    READ: s["default"].find(e, "name", "read"),
                    CURRENTLY_READING: s["default"].find(e, "name", "currently-reading"),
                    WANT_TO_READ: s["default"].find(e, "name", "to-read")
                }
            },
            initializeWith: function(e) {
                v.get().reset(e)
            },
            reset: function() {
                v.get().reset(g)
            },
            updateWith: function(e) {
                v.get().reset(e)
            },
            onAddNonExclusiveShelf: function(e) {
                var t = s["default"].clone(v.get().nonExclusiveShelves) || [],
                    r = s["default"].map(t, function(e) {
                        return e.name
                    });
                s["default"].includes(r, e) || (t.unshift({
                    name: e,
                    url: "",
                    displayName: e,
                    bookCount: 0
                }), v.get().set("nonExclusiveShelves", t), m["default"].updateShelves(), this.trigger(y()))
            },
            onRemoveNonExclusiveShelf: function(e) {
                var t = s["default"].clone(v.get().nonExclusiveShelves) || [],
                    r = s["default"].map(t, function(e) {
                        return e.name
                    });
                s["default"].includes(r, e) && (s["default"].remove(t, function(t) {
                    return t.name === e
                }), v.get().set("nonExclusiveShelves", t), m["default"].updateShelves(), this.trigger(y()))
            },
            onBookShelved: function(e) {
                var t = e.shelves || {};
                s["default"].each(t, function(e, t) {
                    s["default"].each(e, function(e) {
                        b(e, t, 1)
                    })
                }), this.trigger(y())
            },
            onBookUnshelved: function(e) {
                var t = e.shelves || {};
                s["default"].each(t, function(e, t) {
                    s["default"].each(e, function(e) {
                        b(e, t, -1)
                    })
                }), this.trigger(y())
            }
        })
    }, {
        "../modules/default_shelves": 12,
        "../react_actions/shelvings_actions": 44,
        "../react_actions/user_shelves_actions": 51,
        "../react_actions/want_to_read_menu_actions": 52,
        "freezer-js": "freezer-js",
        lodash: "lodash",
        reflux: "reflux"
    }],
    261: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("lodash"),
            s = o(n),
            a = e("reflux"),
            i = o(a),
            l = e("freezer-js"),
            u = o(l),
            d = e("../react_actions/want_to_read_menu_actions"),
            c = o(d),
            p = e("./user_shelves_store"),
            f = o(p),
            h = "showAddShelfTextbox",
            m = {},
            _ = new u["default"](m),
            g = function() {
                return _.get()
            },
            v = function(e, t) {
                var r = [],
                    o = t.defaultShelves.concat(t.customExclusiveShelves || []);
                return r = s["default"].isEmpty(e) ? o : s["default"].filter(o, function(t) {
                    return t.name.match(new RegExp(e, "i"))
                })
            },
            y = function(e, t) {
                var r = [];
                return r = s["default"].isEmpty(e) ? t.nonExclusiveShelves : s["default"].filter(t.nonExclusiveShelves, function(t) {
                    return t.name.match(new RegExp(e, "i"))
                })
            },
            b = function(e) {
                var t = f["default"].getState(),
                    r = v(e, t),
                    o = y(e, t);
                return {
                    displayableExclusiveShelves: r,
                    displayableNonExclusiveShelves: o,
                    shelfNameFilter: e
                }
            },
            k = function(e, t) {
                g().set(t, b(e))
            },
            S = function(e) {
                var t = g()[e].shelfNameFilter;
                g().set(e, b(t))
            },
            P = function(e) {
                return s["default"].has(g(), e) || k("", e), g()[e]
            },
            T = function(e) {
                g().reset(s["default"].merge({}, m, e))
            };
        r["default"] = i["default"].createStore({
            listenables: [c["default"]],
            getInitialState: function(e) {
                return s["default"].isUndefined(e) ? g() : P(e)
            },
            getState: g,
            initializeWith: function(e) {
                T(e)
            },
            reset: function() {
                T(m)
            },
            updateWith: function(e) {
                s["default"].each(s["default"].keys(e), function(t) {
                    g().set(t, e[t])
                }), this.notifyListeners()
            },
            notifyListeners: function() {
                this.trigger(g())
            },
            onUpdateShelfNameFilter: function(e, t) {
                k(e, t), P(t).set(h, !1), this.notifyListeners()
            },
            onOpenAddShelfTextbox: function(e) {
                P(e).set(h, !0), this.notifyListeners()
            },
            onCloseAddShelfTextbox: function(e) {
                P(e).set(h, !1), this.notifyListeners()
            },
            onUpdateShelves: function() {
                s["default"].each(s["default"].keys(g()), function(e) {
                    S(e)
                }), this.notifyListeners()
            }
        })
    }, {
        "../react_actions/want_to_read_menu_actions": 52,
        "./user_shelves_store": 260,
        "freezer-js": "freezer-js",
        lodash: "lodash",
        reflux: "reflux"
    }],
    262: [function(e, t, r) {
        /**
         * Copyright 2013-2015, Facebook, Inc.
         * All rights reserved.
         *
         * This source code is licensed under the BSD-style license found in the
         * LICENSE file in the root directory of this source tree. An additional grant
         * of patent rights can be found in the PATENTS file in the same directory.
         */
        "use strict";
        var o = function(e, t, r, o, n, s, a, i) {
            if (!e) {
                var l;
                if (void 0 === t) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var u = [r, o, n, s, a, i],
                        d = 0;
                    l = new Error(t.replace(/%s/g, function() {
                        return u[d++]
                    })), l.name = "Invariant Violation"
                }
                throw l.framesToPop = 1, l
            }
        };
        t.exports = o
    }, {}],
    263: [function(e, t, r) {
        "use strict";

        function o(e, t) {
            return t.encode ? t.strict ? n(e) : encodeURIComponent(e) : e
        }
        var n = e("strict-uri-encode"),
            s = e("object-assign");
        r.extract = function(e) {
            return e.split("?")[1] || ""
        }, r.parse = function(e) {
            var t = Object.create(null);
            return "string" != typeof e ? t : (e = e.trim().replace(/^(\?|#|&)/, "")) ? (e.split("&").forEach(function(e) {
                var r = e.replace(/\+/g, " ").split("="),
                    o = r.shift(),
                    n = r.length > 0 ? r.join("=") : void 0;
                o = decodeURIComponent(o), n = void 0 === n ? null : decodeURIComponent(n), void 0 === t[o] ? t[o] = n : Array.isArray(t[o]) ? t[o].push(n) : t[o] = [t[o], n]
            }), t) : t
        }, r.stringify = function(e, t) {
            var r = {
                encode: !0,
                strict: !0
            };
            return t = s(r, t), e ? Object.keys(e).sort().map(function(r) {
                var n = e[r];
                if (void 0 === n) return "";
                if (null === n) return o(r, t);
                if (Array.isArray(n)) {
                    var s = [];
                    return n.slice().forEach(function(e) {
                        void 0 !== e && (null === e ? s.push(o(r, t)) : s.push(o(r, t) + "=" + o(e, t)))
                    }), s.join("&")
                }
                return o(r, t) + "=" + o(n, t)
            }).filter(function(e) {
                return e.length > 0
            }).join("&") : ""
        }
    }, {
        "object-assign": "object-assign",
        "strict-uri-encode": 304
    }],
    264: [function(e, t, r) {
        "use strict";

        function o(e, t, r) {
            function o() {
                return a = !0, i ? void(u = [].concat(Array.prototype.slice.call(arguments))) : void r.apply(this, arguments)
            }

            function n() {
                if (!a && (l = !0, !i)) {
                    for (i = !0; !a && e > s && l;) l = !1, t.call(this, s++, n, o);
                    return i = !1, a ? void r.apply(this, u) : void(s >= e && l && (a = !0, r()))
                }
            }
            var s = 0,
                a = !1,
                i = !1,
                l = !1,
                u = void 0;
            n()
        }

        function n(e, t, r) {
            function o(e, t, o) {
                a || (t ? (a = !0, r(t)) : (s[e] = o, a = ++i === n, a && r(null, s)))
            }
            var n = e.length,
                s = [];
            if (0 === n) return r(null, s);
            var a = !1,
                i = 0;
            e.forEach(function(e, r) {
                t(e, r, function(e, t) {
                    o(r, e, t)
                })
            })
        }
        r.__esModule = !0, r.loopAsync = o, r.mapAsync = n
    }, {}],
    265: [function(e, t, r) {
        "use strict";

        function o(e) {
            return "@@contextSubscriber/" + e
        }

        function n(e) {
            var t, r, n = o(e),
                s = n + "/listeners",
                a = n + "/eventIndex",
                l = n + "/subscribe";
            return r = {
                childContextTypes: (t = {}, t[n] = i.isRequired, t),
                getChildContext: function() {
                    var e;
                    return e = {}, e[n] = {
                        eventIndex: this[a],
                        subscribe: this[l]
                    }, e
                },
                componentWillMount: function() {
                    this[s] = [], this[a] = 0
                },
                componentWillReceiveProps: function() {
                    this[a]++
                },
                componentDidUpdate: function() {
                    var e = this;
                    this[s].forEach(function(t) {
                        return t(e[a])
                    })
                }
            }, r[l] = function(e) {
                var t = this;
                return this[s].push(e),
                    function() {
                        t[s] = t[s].filter(function(t) {
                            return t !== e
                        })
                    }
            }, r
        }

        function s(e) {
            var t, r, n = o(e),
                s = n + "/lastRenderedEventIndex",
                a = n + "/handleContextUpdate",
                l = n + "/unsubscribe";
            return r = {
                contextTypes: (t = {}, t[n] = i, t),
                getInitialState: function() {
                    var e;
                    return this.context[n] ? (e = {}, e[s] = this.context[n].eventIndex, e) : {}
                },
                componentDidMount: function() {
                    this.context[n] && (this[l] = this.context[n].subscribe(this[a]))
                },
                componentWillReceiveProps: function() {
                    var e;
                    this.context[n] && this.setState((e = {}, e[s] = this.context[n].eventIndex, e))
                },
                componentWillUnmount: function() {
                    this[l] && (this[l](), this[l] = null)
                }
            }, r[a] = function(e) {
                if (e !== this.state[s]) {
                    var t;
                    this.setState((t = {}, t[s] = e, t))
                }
            }, r
        }
        r.__esModule = !0, r.ContextProvider = n, r.ContextSubscriber = s;
        var a = e("react"),
            i = a.PropTypes.shape({
                subscribe: a.PropTypes.func.isRequired,
                eventIndex: a.PropTypes.number.isRequired
            })
    }, {
        react: "react"
    }],
    266: [function(e, t, r) {
        "use strict";

        function o(e, t, r) {
            return e[t] ? new Error("<" + r + '> should not have a "' + t + '" prop') : void 0
        }
        r.__esModule = !0, r.routes = r.route = r.components = r.component = r.history = void 0, r.falsy = o;
        var n = e("react"),
            s = n.PropTypes.func,
            a = n.PropTypes.object,
            i = n.PropTypes.arrayOf,
            l = n.PropTypes.oneOfType,
            u = n.PropTypes.element,
            d = n.PropTypes.shape,
            c = n.PropTypes.string,
            p = (r.history = d({
                listen: s.isRequired,
                push: s.isRequired,
                replace: s.isRequired,
                go: s.isRequired,
                goBack: s.isRequired,
                goForward: s.isRequired
            }), r.component = l([s, c])),
            f = (r.components = l([p, a]), r.route = l([a, u]));
        r.routes = l([f, i(f)])
    }, {
        react: "react"
    }],
    267: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function n(e, t) {
            var r = {};
            for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
            return r
        }

        function s(e) {
            return 0 === e.button
        }

        function a(e) {
            return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
        }

        function i(e) {
            for (var t in e)
                if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
            return !0
        }

        function l(e, t) {
            return "function" == typeof e ? e(t.location) : e
        }
        r.__esModule = !0;
        var u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            },
            d = e("react"),
            c = o(d),
            p = e("invariant"),
            f = o(p),
            h = e("./PropTypes"),
            m = e("./ContextUtils"),
            _ = c["default"].PropTypes,
            g = _.bool,
            v = _.object,
            y = _.string,
            b = _.func,
            k = _.oneOfType,
            S = c["default"].createClass({
                displayName: "Link",
                mixins: [(0, m.ContextSubscriber)("router")],
                contextTypes: {
                    router: h.routerShape
                },
                propTypes: {
                    to: k([y, v, b]),
                    query: v,
                    hash: y,
                    state: v,
                    activeStyle: v,
                    activeClassName: y,
                    onlyActiveOnIndex: g.isRequired,
                    onClick: b,
                    target: y
                },
                getDefaultProps: function() {
                    return {
                        onlyActiveOnIndex: !1,
                        style: {}
                    }
                },
                handleClick: function(e) {
                    if (this.props.onClick && this.props.onClick(e), !e.defaultPrevented) {
                        var t = this.context.router;
                        t ? void 0 : (0, f["default"])(!1), !a(e) && s(e) && (this.props.target || (e.preventDefault(), t.push(l(this.props.to, t))))
                    }
                },
                render: function() {
                    var e = this.props,
                        t = e.to,
                        r = e.activeClassName,
                        o = e.activeStyle,
                        s = e.onlyActiveOnIndex,
                        a = n(e, ["to", "activeClassName", "activeStyle", "onlyActiveOnIndex"]),
                        d = this.context.router;
                    if (d) {
                        if (null == t) return c["default"].createElement("a", a);
                        var p = l(t, d);
                        a.href = d.createHref(p), (r || null != o && !i(o)) && d.isActive(p, s) && (r && (a.className ? a.className += " " + r : a.className = r), o && (a.style = u({}, a.style, o)))
                    }
                    return c["default"].createElement("a", u({}, a, {
                        onClick: this.handleClick
                    }))
                }
            });
        r["default"] = S, t.exports = r["default"]
    }, {
        "./ContextUtils": 265,
        "./PropTypes": 270,
        invariant: 262,
        react: "react"
    }],
    268: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function n(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        }

        function s(e) {
            for (var t = "", r = [], o = [], s = void 0, a = 0, i = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g; s = i.exec(e);) s.index !== a && (o.push(e.slice(a, s.index)), t += n(e.slice(a, s.index))), s[1] ? (t += "([^/]+)", r.push(s[1])) : "**" === s[0] ? (t += "(.*)", r.push("splat")) : "*" === s[0] ? (t += "(.*?)", r.push("splat")) : "(" === s[0] ? t += "(?:" : ")" === s[0] && (t += ")?"), o.push(s[0]), a = i.lastIndex;
            return a !== e.length && (o.push(e.slice(a, e.length)), t += n(e.slice(a, e.length))), {
                pattern: e,
                regexpSource: t,
                paramNames: r,
                tokens: o
            }
        }

        function a(e) {
            return f[e] || (f[e] = s(e)), f[e]
        }

        function i(e, t) {
            "/" !== e.charAt(0) && (e = "/" + e);
            var r = a(e),
                o = r.regexpSource,
                n = r.paramNames,
                s = r.tokens;
            "/" !== e.charAt(e.length - 1) && (o += "/?"), "*" === s[s.length - 1] && (o += "$");
            var i = t.match(new RegExp("^" + o, "i"));
            if (null == i) return null;
            var l = i[0],
                u = t.substr(l.length);
            if (u) {
                if ("/" !== l.charAt(l.length - 1)) return null;
                u = "/" + u
            }
            return {
                remainingPathname: u,
                paramNames: n,
                paramValues: i.slice(1).map(function(e) {
                    return e && decodeURIComponent(e)
                })
            }
        }

        function l(e) {
            return a(e).paramNames
        }

        function u(e, t) {
            var r = i(e, t);
            if (!r) return null;
            var o = r.paramNames,
                n = r.paramValues,
                s = {};
            return o.forEach(function(e, t) {
                s[e] = n[t]
            }), s
        }

        function d(e, t) {
            t = t || {};
            for (var r = a(e), o = r.tokens, n = 0, s = "", i = 0, l = [], u = void 0, d = void 0, c = void 0, f = 0, h = o.length; h > f; ++f)
                if (u = o[f], "*" === u || "**" === u) c = Array.isArray(t.splat) ? t.splat[i++] : t.splat, null != c || n > 0 ? void 0 : (0, p["default"])(!1), null != c && (s += encodeURI(c));
                else if ("(" === u) l[n] = "", n += 1;
            else if (")" === u) {
                var m = l.pop();
                n -= 1, n ? l[n - 1] += m : s += m
            } else if (":" === u.charAt(0))
                if (d = u.substring(1), c = t[d], null != c || n > 0 ? void 0 : (0, p["default"])(!1), null == c) {
                    if (n) {
                        l[n - 1] = "";
                        for (var _ = o.indexOf(u), g = o.slice(_, o.length), v = -1, y = 0; y < g.length; y++)
                            if (")" == g[y]) {
                                v = y;
                                break
                            } v > 0 ? void 0 : (0, p["default"])(!1), f = _ + v - 1
                    }
                } else n ? l[n - 1] += encodeURIComponent(c) : s += encodeURIComponent(c);
            else n ? l[n - 1] += u : s += u;
            return 0 >= n ? void 0 : (0, p["default"])(!1), s.replace(/\/+/g, "/")
        }
        r.__esModule = !0, r.compilePattern = a, r.matchPattern = i, r.getParamNames = l, r.getParams = u, r.formatPattern = d;
        var c = e("invariant"),
            p = o(c),
            f = Object.create(null)
    }, {
        invariant: 262
    }],
    269: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && "function" == typeof e.then
        }
        r.__esModule = !0, r.isPromise = o
    }, {}],
    270: [function(e, t, r) {
        "use strict";
        r.__esModule = !0, r.locationShape = r.routerShape = void 0;
        var o = e("react"),
            n = o.PropTypes.func,
            s = o.PropTypes.object,
            a = o.PropTypes.shape,
            i = o.PropTypes.string;
        r.routerShape = a({
            push: n.isRequired,
            replace: n.isRequired,
            go: n.isRequired,
            goBack: n.isRequired,
            goForward: n.isRequired,
            setRouteLeaveHook: n.isRequired,
            isActive: n.isRequired
        }), r.locationShape = a({
            pathname: i.isRequired,
            search: i.isRequired,
            state: s,
            action: i.isRequired,
            key: i
        })
    }, {
        react: "react"
    }],
    271: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        r.__esModule = !0;
        var n = e("react"),
            s = o(n),
            a = e("invariant"),
            i = o(a),
            l = e("./RouteUtils"),
            u = e("./InternalPropTypes"),
            d = s["default"].PropTypes,
            c = d.string,
            p = d.func,
            f = s["default"].createClass({
                displayName: "Route",
                statics: {
                    createRouteFromReactElement: l.createRouteFromReactElement
                },
                propTypes: {
                    path: c,
                    component: u.component,
                    components: u.components,
                    getComponent: p,
                    getComponents: p
                },
                render: function() {
                    (0, i["default"])(!1)
                }
            });
        r["default"] = f, t.exports = r["default"]
    }, {
        "./InternalPropTypes": 266,
        "./RouteUtils": 272,
        invariant: 262,
        react: "react"
    }],
    272: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function n(e) {
            return null == e || p["default"].isValidElement(e)
        }

        function s(e) {
            return n(e) || Array.isArray(e) && e.every(n)
        }

        function a(e, t) {
            return d({}, e, t)
        }

        function i(e) {
            var t = e.type,
                r = a(t.defaultProps, e.props);
            if (r.children) {
                var o = l(r.children, r);
                o.length && (r.childRoutes = o), delete r.children
            }
            return r
        }

        function l(e, t) {
            var r = [];
            return p["default"].Children.forEach(e, function(e) {
                if (p["default"].isValidElement(e))
                    if (e.type.createRouteFromReactElement) {
                        var o = e.type.createRouteFromReactElement(e, t);
                        o && r.push(o)
                    } else r.push(i(e))
            }), r
        }

        function u(e) {
            return s(e) ? e = l(e) : e && !Array.isArray(e) && (e = [e]), e
        }
        r.__esModule = !0;
        var d = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
            }
            return e
        };
        r.isReactChildren = s, r.createRouteFromReactElement = i, r.createRoutesFromReactChildren = l, r.createRoutes = u;
        var c = e("react"),
            p = o(c)
    }, {
        react: "react"
    }],
    273: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function n(e, t) {
            var r = {};
            for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
            return r
        }
        r.__esModule = !0;
        var s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            },
            a = e("invariant"),
            i = o(a),
            l = e("react"),
            u = o(l),
            d = e("./createTransitionManager"),
            c = o(d),
            p = e("./InternalPropTypes"),
            f = e("./RouterContext"),
            h = o(f),
            m = e("./RouteUtils"),
            _ = e("./RouterUtils"),
            g = e("./routerWarning"),
            v = (o(g), u["default"].PropTypes),
            y = v.func,
            b = v.object,
            k = u["default"].createClass({
                displayName: "Router",
                propTypes: {
                    history: b,
                    children: p.routes,
                    routes: p.routes,
                    render: y,
                    createElement: y,
                    onError: y,
                    onUpdate: y,
                    matchContext: b
                },
                getDefaultProps: function() {
                    return {
                        render: function(e) {
                            return u["default"].createElement(h["default"], e)
                        }
                    }
                },
                getInitialState: function() {
                    return {
                        location: null,
                        routes: null,
                        params: null,
                        components: null
                    }
                },
                handleError: function(e) {
                    if (!this.props.onError) throw e;
                    this.props.onError.call(this, e)
                },
                createRouterObject: function(e) {
                    var t = this.props.matchContext;
                    if (t) return t.router;
                    var r = this.props.history;
                    return (0, _.createRouterObject)(r, this.transitionManager, e)
                },
                createTransitionManager: function() {
                    var e = this.props.matchContext;
                    if (e) return e.transitionManager;
                    var t = this.props.history,
                        r = this.props,
                        o = r.routes,
                        n = r.children;
                    return t.getCurrentLocation ? void 0 : (0, i["default"])(!1), (0, c["default"])(t, (0, m.createRoutes)(o || n))
                },
                componentWillMount: function() {
                    var e = this;
                    this.transitionManager = this.createTransitionManager(), this.router = this.createRouterObject(this.state), this._unlisten = this.transitionManager.listen(function(t, r) {
                        t ? e.handleError(t) : ((0, _.assignRouterState)(e.router, r), e.setState(r, e.props.onUpdate))
                    })
                },
                componentWillReceiveProps: function(e) {},
                componentWillUnmount: function() {
                    this._unlisten && this._unlisten()
                },
                render: function S() {
                    var e = this.state,
                        t = e.location,
                        r = e.routes,
                        o = e.params,
                        a = e.components,
                        i = this.props,
                        l = i.createElement,
                        S = i.render,
                        u = n(i, ["createElement", "render"]);
                    return null == t ? null : (Object.keys(k.propTypes).forEach(function(e) {
                        return delete u[e]
                    }), S(s({}, u, {
                        router: this.router,
                        location: t,
                        routes: r,
                        params: o,
                        components: a,
                        createElement: l
                    })))
                }
            });
        r["default"] = k, t.exports = r["default"]
    }, {
        "./InternalPropTypes": 266,
        "./RouteUtils": 272,
        "./RouterContext": 274,
        "./RouterUtils": 275,
        "./createTransitionManager": 281,
        "./routerWarning": 287,
        invariant: 262,
        react: "react"
    }],
    274: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        r.__esModule = !0;
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            },
            s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            a = e("invariant"),
            i = o(a),
            l = e("react"),
            u = o(l),
            d = e("./getRouteParams"),
            c = o(d),
            p = e("./ContextUtils"),
            f = e("./RouteUtils"),
            h = u["default"].PropTypes,
            m = h.array,
            _ = h.func,
            g = h.object,
            v = u["default"].createClass({
                displayName: "RouterContext",
                mixins: [(0, p.ContextProvider)("router")],
                propTypes: {
                    router: g.isRequired,
                    location: g.isRequired,
                    routes: m.isRequired,
                    params: g.isRequired,
                    components: m.isRequired,
                    createElement: _.isRequired
                },
                getDefaultProps: function() {
                    return {
                        createElement: u["default"].createElement
                    }
                },
                childContextTypes: {
                    router: g.isRequired
                },
                getChildContext: function() {
                    return {
                        router: this.props.router
                    }
                },
                createElement: function(e, t) {
                    return null == e ? null : this.props.createElement(e, t)
                },
                render: function() {
                    var e = this,
                        t = this.props,
                        r = t.location,
                        o = t.routes,
                        a = t.params,
                        l = t.components,
                        d = t.router,
                        p = null;
                    return l && (p = l.reduceRight(function(t, i, l) {
                        if (null == i) return t;
                        var u = o[l],
                            p = (0, c["default"])(u, a),
                            h = {
                                location: r,
                                params: a,
                                route: u,
                                router: d,
                                routeParams: p,
                                routes: o
                            };
                        if ((0, f.isReactChildren)(t)) h.children = t;
                        else if (t)
                            for (var m in t) Object.prototype.hasOwnProperty.call(t, m) && (h[m] = t[m]);
                        if ("object" === ("undefined" == typeof i ? "undefined" : s(i))) {
                            var _ = {};
                            for (var g in i) Object.prototype.hasOwnProperty.call(i, g) && (_[g] = e.createElement(i[g], n({
                                key: g
                            }, h)));
                            return _
                        }
                        return e.createElement(i, h)
                    }, p)), null === p || p === !1 || u["default"].isValidElement(p) ? void 0 : (0, i["default"])(!1), p
                }
            });
        r["default"] = v, t.exports = r["default"]
    }, {
        "./ContextUtils": 265,
        "./RouteUtils": 272,
        "./getRouteParams": 283,
        invariant: 262,
        react: "react"
    }],
    275: [function(e, t, r) {
        "use strict";

        function o(e, t, r) {
            var o = s({}, e, {
                setRouteLeaveHook: t.listenBeforeLeavingRoute,
                isActive: t.isActive
            });
            return n(o, r)
        }

        function n(e, t) {
            var r = t.location,
                o = t.params,
                n = t.routes;
            return e.location = r, e.params = o, e.routes = n, e
        }
        r.__esModule = !0;
        var s = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
            }
            return e
        };
        r.createRouterObject = o, r.assignRouterState = n
    }, {}],
    276: [function(e, t, r) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function n(e, t, r, o) {
            var n = e.length < r,
                s = function() {
                    for (var r = arguments.length, o = Array(r), s = 0; r > s; s++) o[s] = arguments[s];
                    if (e.apply(t, o), n) {
                        var a = o[o.length - 1];
                        a()
                    }
                };
            return o.add(s), s
        }

        function s(e) {
            return e.reduce(function(e, t) {
                return t.onEnter && e.push(n(t.onEnter, t, 3, f)), e
            }, [])
        }

        function a(e) {
            return e.reduce(function(e, t) {
                return t.onChange && e.push(n(t.onChange, t, 4, h)), e
            }, [])
        }

        function i(e, t, r) {
            function o(e) {
                n = e
            }
            if (!e) return void r();
            var n = void 0;
            (0, c.loopAsync)(e, function(e, r, s) {
                t(e, o, function(e) {
                    e || n ? s(e, n) : r()
                })
            }, r)
        }

        function l(e, t, r) {
            f.clear();
            var o = s(e);
            return i(o.length, function(e, r, n) {
                var s = function() {
                    f.has(o[e]) && (n(), f.remove(o[e]))
                };
                o[e](t, r, s)
            }, r)
        }

        function u(e, t, r, o) {
            h.clear();
            var n = a(e);
            return i(n.length, function(e, o, s) {
                var a = function() {
                    h.has(n[e]) && (s(), h.remove(n[e]))
                };
                n[e](t, r, o, a)
            }, o)
        }

        function d(e, t) {
            for (var r = 0, o = e.length; o > r; ++r) e[r].onLeave && e[r].onLeave.call(e[r], t)
        }
        r.__esModule = !0, r.runEnterHooks = l, r.runChangeHooks = u, r.runLeaveHooks = d;
        var c = e("./AsyncUtils"),
            p = function m() {
                var e = this;
                o(this, m), this.hooks = [], this.add = function(t) {
                    return e.hooks.push(t)
                }, this.remove = function(t) {
                    return e.hooks = e.hooks.filter(function(e) {
                        return e !== t
                    })
                }, this.has = function(t) {
                    return -1 !== e.hooks.indexOf(t)
                }, this.clear = function() {
                    return e.hooks = []
                }
            },
            f = new p,
            h = new p
    }, {
        "./AsyncUtils": 264
    }],
    277: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        r.__esModule = !0;
        var n = e("history/lib/createBrowserHistory"),
            s = o(n),
            a = e("./createRouterHistory"),
            i = o(a);
        r["default"] = (0, i["default"])(s["default"]), t.exports = r["default"]
    }, {
        "./createRouterHistory": 280,
        "history/lib/createBrowserHistory": 298
    }],
    278: [function(e, t, r) {
        "use strict";

        function o(e, t, r) {
            if (!e.path) return !1;
            var o = (0, s.getParamNames)(e.path);
            return o.some(function(e) {
                return t.params[e] !== r.params[e]
            })
        }

        function n(e, t) {
            var r = e && e.routes,
                n = t.routes,
                s = void 0,
                a = void 0,
                i = void 0;
            return r ? ! function() {
                var l = !1;
                s = r.filter(function(r) {
                    if (l) return !0;
                    var s = -1 === n.indexOf(r) || o(r, e, t);
                    return s && (l = !0), s
                }), s.reverse(), i = [], a = [], n.forEach(function(e) {
                    var t = -1 === r.indexOf(e),
                        o = -1 !== s.indexOf(e);
                    t || o ? i.push(e) : a.push(e)
                })
            }() : (s = [], a = [], i = n), {
                leaveRoutes: s,
                changeRoutes: a,
                enterRoutes: i
            }
        }
        r.__esModule = !0;
        var s = e("./PatternUtils");
        r["default"] = n, t.exports = r["default"]
    }, {
        "./PatternUtils": 268
    }],
    279: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function n(e) {
            var t = (0, d["default"])(e),
                r = function() {
                    return t
                },
                o = (0, a["default"])((0, l["default"])(r))(e);
            return o
        }
        r.__esModule = !0, r["default"] = n;
        var s = e("history/lib/useQueries"),
            a = o(s),
            i = e("history/lib/useBasename"),
            l = o(i),
            u = e("history/lib/createMemoryHistory"),
            d = o(u);
        t.exports = r["default"]
    }, {
        "history/lib/createMemoryHistory": 300,
        "history/lib/useBasename": 302,
        "history/lib/useQueries": 303
    }],
    280: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        r.__esModule = !0, r["default"] = function(e) {
            var t = void 0;
            return a && (t = (0, s["default"])(e)()), t
        };
        var n = e("./useRouterHistory"),
            s = o(n),
            a = !("undefined" == typeof window || !window.document || !window.document.createElement);
        t.exports = r["default"]
    }, {
        "./useRouterHistory": 288
    }],
    281: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function n(e) {
            for (var t in e)
                if (Object.prototype.hasOwnProperty.call(e, t)) return !0;
            return !1
        }

        function s(e, t) {
            function r(t, r) {
                return t = e.createLocation(t), (0, p["default"])(t, r, y.location, y.routes, y.params)
            }

            function o(e, r) {
                b && b.location === e ? s(b, r) : (0, _["default"])(t, e, function(t, o) {
                    t ? r(t) : o ? s(a({}, o, {
                        location: e
                    }), r) : r()
                })
            }

            function s(e, t) {
                function r(r, n) {
                    return r || n ? o(r, n) : void(0, h["default"])(e, function(r, o) {
                        r ? t(r) : t(null, null, y = a({}, e, {
                            components: o
                        }))
                    })
                }

                function o(e, r) {
                    e ? t(e) : t(null, r)
                }
                var n = (0, u["default"])(y, e),
                    s = n.leaveRoutes,
                    i = n.changeRoutes,
                    l = n.enterRoutes;
                (0, d.runLeaveHooks)(s, y), s.filter(function(e) {
                    return -1 === l.indexOf(e)
                }).forEach(m), (0, d.runChangeHooks)(i, y, e, function(t, n) {
                    return t || n ? o(t, n) : void(0, d.runEnterHooks)(l, e, r)
                })
            }

            function i(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1;
                return e.__id__ || t && (e.__id__ = k++)
            }

            function l(e) {
                return e.map(function(e) {
                    return S[i(e)]
                }).filter(function(e) {
                    return e
                })
            }

            function c(e, r) {
                (0, _["default"])(t, e, function(t, o) {
                    if (null == o) return void r();
                    b = a({}, o, {
                        location: e
                    });
                    for (var n = l((0, u["default"])(y, b).leaveRoutes), s = void 0, i = 0, d = n.length; null == s && d > i; ++i) s = n[i](e);
                    r(s)
                })
            }

            function f() {
                if (y.routes) {
                    for (var e = l(y.routes), t = void 0, r = 0, o = e.length;
                        "string" != typeof t && o > r; ++r) t = e[r]();
                    return t
                }
            }

            function m(e) {
                var t = i(e);
                t && (delete S[t], n(S) || (P && (P(), P = null), T && (T(), T = null)))
            }

            function g(t, r) {
                var o = !n(S),
                    s = i(t, !0);
                return S[s] = r, o && (P = e.listenBefore(c), e.listenBeforeUnload && (T = e.listenBeforeUnload(f))),
                    function() {
                        m(t)
                    }
            }

            function v(t) {
                function r(r) {
                    y.location === r ? t(null, y) : o(r, function(r, o, n) {
                        r ? t(r) : o ? e.replace(o) : n && t(null, n)
                    })
                }
                var n = e.listen(r);
                return y.location ? t(null, y) : r(e.getCurrentLocation()), n
            }
            var y = {},
                b = void 0,
                k = 1,
                S = Object.create(null),
                P = void 0,
                T = void 0;
            return {
                isActive: r,
                match: o,
                listenBeforeLeavingRoute: g,
                listen: v
            }
        }
        r.__esModule = !0;
        var a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
            }
            return e
        };
        r["default"] = s;
        var i = e("./routerWarning"),
            l = (o(i), e("./computeChangedRoutes")),
            u = o(l),
            d = e("./TransitionUtils"),
            c = e("./isActive"),
            p = o(c),
            f = e("./getComponents"),
            h = o(f),
            m = e("./matchRoutes"),
            _ = o(m);
        t.exports = r["default"]
    }, {
        "./TransitionUtils": 276,
        "./computeChangedRoutes": 278,
        "./getComponents": 282,
        "./isActive": 284,
        "./matchRoutes": 286,
        "./routerWarning": 287
    }],
    282: [function(e, t, r) {
        "use strict";

        function o(e, t, r) {
            if (t.component || t.components) return void r(null, t.component || t.components);
            var o = t.getComponent || t.getComponents;
            if (o) {
                var n = o.call(t, e, r);
                (0, a.isPromise)(n) && n.then(function(e) {
                    return r(null, e)
                }, r)
            } else r()
        }

        function n(e, t) {
            (0, s.mapAsync)(e.routes, function(t, r, n) {
                o(e, t, n)
            }, t)
        }
        r.__esModule = !0;
        var s = e("./AsyncUtils"),
            a = e("./PromiseUtils");
        r["default"] = n, t.exports = r["default"]
    }, {
        "./AsyncUtils": 264,
        "./PromiseUtils": 269
    }],
    283: [function(e, t, r) {
        "use strict";

        function o(e, t) {
            var r = {};
            return e.path ? ((0, n.getParamNames)(e.path).forEach(function(e) {
                Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e])
            }), r) : r
        }
        r.__esModule = !0;
        var n = e("./PatternUtils");
        r["default"] = o, t.exports = r["default"]
    }, {
        "./PatternUtils": 268
    }],
    284: [function(e, t, r) {
        "use strict";

        function o(e, t) {
            if (e == t) return !0;
            if (null == e || null == t) return !1;
            if (Array.isArray(e)) return Array.isArray(t) && e.length === t.length && e.every(function(e, r) {
                return o(e, t[r])
            });
            if ("object" === ("undefined" == typeof e ? "undefined" : l(e))) {
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r))
                        if (void 0 === e[r]) {
                            if (void 0 !== t[r]) return !1
                        } else {
                            if (!Object.prototype.hasOwnProperty.call(t, r)) return !1;
                            if (!o(e[r], t[r])) return !1
                        } return !0
            }
            return String(e) === String(t)
        }

        function n(e, t) {
            return "/" !== t.charAt(0) && (t = "/" + t), "/" !== e.charAt(e.length - 1) && (e += "/"), "/" !== t.charAt(t.length - 1) && (t += "/"), t === e
        }

        function s(e, t, r) {
            for (var o = e, n = [], s = [], a = 0, i = t.length; i > a; ++a) {
                var l = t[a],
                    d = l.path || "";
                if ("/" === d.charAt(0) && (o = e, n = [], s = []), null !== o && d) {
                    var c = (0, u.matchPattern)(d, o);
                    if (c ? (o = c.remainingPathname, n = [].concat(n, c.paramNames), s = [].concat(s, c.paramValues)) : o = null, "" === o) return n.every(function(e, t) {
                        return String(s[t]) === String(r[e])
                    })
                }
            }
            return !1
        }

        function a(e, t) {
            return null == t ? null == e : null == e ? !0 : o(e, t)
        }

        function i(e, t, r, o, i) {
            var l = e.pathname,
                u = e.query;
            return null == r ? !1 : ("/" !== l.charAt(0) && (l = "/" + l), n(l, r.pathname) || !t && s(l, o, i) ? a(u, r.query) : !1)
        }
        r.__esModule = !0;
        var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        r["default"] = i;
        var u = e("./PatternUtils");
        t.exports = r["default"]
    }, {
        "./PatternUtils": 268
    }],
    285: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function n(e, t) {
            var r = {};
            for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
            return r
        }

        function s(e, t) {
            var r = e.history,
                o = e.routes,
                s = e.location,
                l = n(e, ["history", "routes", "location"]);
            r || s ? void 0 : (0, u["default"])(!1), r = r ? r : (0, c["default"])(l);
            var d = (0, f["default"])(r, (0, h.createRoutes)(o));
            s = s ? r.createLocation(s) : r.getCurrentLocation(), d.match(s, function(e, o, n) {
                var s = void 0;
                if (n) {
                    var l = (0, m.createRouterObject)(r, d, n);
                    s = a({}, n, {
                        router: l,
                        matchContext: {
                            transitionManager: d,
                            router: l
                        }
                    })
                }
                t(e, o && r.createLocation(o, i.REPLACE), s)
            })
        }
        r.__esModule = !0;
        var a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            },
            i = e("history/lib/Actions"),
            l = e("invariant"),
            u = o(l),
            d = e("./createMemoryHistory"),
            c = o(d),
            p = e("./createTransitionManager"),
            f = o(p),
            h = e("./RouteUtils"),
            m = e("./RouterUtils");
        r["default"] = s, t.exports = r["default"]
    }, {
        "./RouteUtils": 272,
        "./RouterUtils": 275,
        "./createMemoryHistory": 279,
        "./createTransitionManager": 281,
        "history/lib/Actions": 289,
        invariant: 262
    }],
    286: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function n(e, t, r, o, n) {
            if (e.childRoutes) return [null, e.childRoutes];
            if (!e.getChildRoutes) return [];
            var s = !0,
                a = void 0,
                l = {
                    location: t,
                    params: i(r, o)
                },
                u = e.getChildRoutes(l, function(e, t) {
                    return t = !e && (0, _.createRoutes)(t), s ? void(a = [e, t]) : void n(e, t)
                });
            return (0, f.isPromise)(u) && u.then(function(e) {
                return n(null, (0, _.createRoutes)(e))
            }, n), s = !1, a
        }

        function s(e, t, r, o, n) {
            if (e.indexRoute) n(null, e.indexRoute);
            else if (e.getIndexRoute) {
                var a = {
                        location: t,
                        params: i(r, o)
                    },
                    l = e.getIndexRoute(a, function(e, t) {
                        n(e, !e && (0, _.createRoutes)(t)[0])
                    });
                (0, f.isPromise)(l) && l.then(function(e) {
                    return n(null, (0, _.createRoutes)(e)[0])
                }, n)
            } else e.childRoutes ? ! function() {
                var a = e.childRoutes.filter(function(e) {
                    return !e.path
                });
                (0, p.loopAsync)(a.length, function(e, n, i) {
                    s(a[e], t, r, o, function(t, r) {
                        if (t || r) {
                            var o = [a[e]].concat(Array.isArray(r) ? r : [r]);
                            i(t, o)
                        } else n()
                    })
                }, function(e, t) {
                    n(null, t)
                })
            }() : n()
        }

        function a(e, t, r) {
            return t.reduce(function(e, t, o) {
                var n = r && r[o];
                return Array.isArray(e[t]) ? e[t].push(n) : t in e ? e[t] = [e[t], n] : e[t] = n, e
            }, e)
        }

        function i(e, t) {
            return a({}, e, t)
        }

        function l(e, t, r, o, a, l) {
            var d = e.path || "";
            if ("/" === d.charAt(0) && (r = t.pathname, o = [], a = []), null !== r && d) {
                try {
                    var p = (0, h.matchPattern)(d, r);
                    p ? (r = p.remainingPathname, o = [].concat(o, p.paramNames), a = [].concat(a, p.paramValues)) : r = null
                } catch (f) {
                    l(f)
                }
                if ("" === r) {
                    var m = function() {
                        var r = {
                            routes: [e],
                            params: i(o, a)
                        };
                        return s(e, t, o, a, function(e, t) {
                            if (e) l(e);
                            else {
                                if (Array.isArray(t)) {
                                    var o;
                                    (o = r.routes).push.apply(o, t)
                                } else t && r.routes.push(t);
                                l(null, r)
                            }
                        }), {
                            v: void 0
                        }
                    }();
                    if ("object" === ("undefined" == typeof m ? "undefined" : c(m))) return m.v
                }
            }
            if (null != r || e.childRoutes) {
                var _ = function(n, s) {
                        n ? l(n) : s ? u(s, t, function(t, r) {
                            t ? l(t) : r ? (r.routes.unshift(e), l(null, r)) : l()
                        }, r, o, a) : l()
                    },
                    g = n(e, t, o, a, _);
                g && _.apply(void 0, g)
            } else l()
        }

        function u(e, t, r, o) {
            var n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
                s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : [];
            void 0 === o && ("/" !== t.pathname.charAt(0) && (t = d({}, t, {
                pathname: "/" + t.pathname
            })), o = t.pathname), (0, p.loopAsync)(e.length, function(r, a, i) {
                l(e[r], t, o, n, s, function(e, t) {
                    e || t ? i(e, t) : a()
                })
            }, r)
        }
        r.__esModule = !0;
        var d = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            },
            c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
        r["default"] = u;
        var p = e("./AsyncUtils"),
            f = e("./PromiseUtils"),
            h = e("./PatternUtils"),
            m = e("./routerWarning"),
            _ = (o(m), e("./RouteUtils"));
        t.exports = r["default"]
    }, {
        "./AsyncUtils": 264,
        "./PatternUtils": 268,
        "./PromiseUtils": 269,
        "./RouteUtils": 272,
        "./routerWarning": 287
    }],
    287: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function n(e, t) {
            if (-1 !== t.indexOf("deprecated")) {
                if (l[t]) return;
                l[t] = !0
            }
            t = "[react-router] " + t;
            for (var r = arguments.length, o = Array(r > 2 ? r - 2 : 0), n = 2; r > n; n++) o[n - 2] = arguments[n];
            i["default"].apply(void 0, [e, t].concat(o))
        }

        function s() {
            l = {}
        }
        r.__esModule = !0, r["default"] = n, r._resetWarned = s;
        var a = e("warning"),
            i = o(a),
            l = {}
    }, {
        warning: 305
    }],
    288: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function n(e) {
            return function(t) {
                var r = (0, a["default"])((0, l["default"])(e))(t);
                return r
            }
        }
        r.__esModule = !0, r["default"] = n;
        var s = e("history/lib/useQueries"),
            a = o(s),
            i = e("history/lib/useBasename"),
            l = o(i);
        t.exports = r["default"]
    }, {
        "history/lib/useBasename": 302,
        "history/lib/useQueries": 303
    }],
    289: [function(e, t, r) {
        "use strict";
        r.__esModule = !0;
        r.PUSH = "PUSH", r.REPLACE = "REPLACE", r.POP = "POP"
    }, {}],
    290: [function(e, t, r) {
        "use strict";
        r.__esModule = !0;
        r.loopAsync = function(e, t, r) {
            var o = 0,
                n = !1,
                s = !1,
                a = !1,
                i = void 0,
                l = function() {
                    for (var e = arguments.length, t = Array(e), o = 0; e > o; o++) t[o] = arguments[o];
                    return n = !0, s ? void(i = t) : void r.apply(void 0, t)
                },
                u = function d() {
                    if (!n && (a = !0, !s)) {
                        for (s = !0; !n && e > o && a;) a = !1, t(o++, d, l);
                        return s = !1, n ? void r.apply(void 0, i) : void(o >= e && a && (n = !0, r()))
                    }
                };
            u()
        }
    }, {}],
    291: [function(e, t, r) {
        "use strict";
        r.__esModule = !0, r.go = r.replaceLocation = r.pushLocation = r.startListener = r.getUserConfirmation = r.getCurrentLocation = void 0;
        var o = e("./LocationUtils"),
            n = e("./DOMUtils"),
            s = e("./DOMStateStorage"),
            a = e("./PathUtils"),
            i = e("./ExecutionEnvironment"),
            l = "popstate",
            u = "hashchange",
            d = i.canUseDOM && !(0, n.supportsPopstateOnHashchange)(),
            c = function(e) {
                var t = e && e.key;
                return (0, o.createLocation)({
                    pathname: window.location.pathname,
                    search: window.location.search,
                    hash: window.location.hash,
                    state: t ? (0, s.readState)(t) : void 0
                }, void 0, t)
            },
            p = r.getCurrentLocation = function() {
                var e = void 0;
                try {
                    e = window.history.state || {}
                } catch (t) {
                    e = {}
                }
                return c(e)
            },
            f = (r.getUserConfirmation = function(e, t) {
                return t(window.confirm(e))
            }, r.startListener = function(e) {
                var t = function(t) {
                    void 0 !== t.state && e(c(t.state))
                };
                (0, n.addEventListener)(window, l, t);
                var r = function() {
                    return e(p())
                };
                return d && (0, n.addEventListener)(window, u, r),
                    function() {
                        (0, n.removeEventListener)(window, l, t), d && (0, n.removeEventListener)(window, u, r)
                    }
            }, function(e, t) {
                var r = e.state,
                    o = e.key;
                void 0 !== r && (0, s.saveState)(o, r), t({
                    key: o
                }, (0, a.createPath)(e))
            });
        r.pushLocation = function(e) {
            return f(e, function(e, t) {
                return window.history.pushState(e, null, t)
            })
        }, r.replaceLocation = function(e) {
            return f(e, function(e, t) {
                return window.history.replaceState(e, null, t)
            })
        }, r.go = function(e) {
            e && window.history.go(e)
        }
    }, {
        "./DOMStateStorage": 292,
        "./DOMUtils": 293,
        "./ExecutionEnvironment": 294,
        "./LocationUtils": 295,
        "./PathUtils": 296
    }],
    292: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        r.__esModule = !0, r.readState = r.saveState = void 0;
        var n = e("warning"),
            s = (o(n), {
                QuotaExceededError: !0,
                QUOTA_EXCEEDED_ERR: !0
            }),
            a = {
                SecurityError: !0
            },
            i = "@@History/",
            l = function(e) {
                return i + e
            };
        r.saveState = function(e, t) {
            if (window.sessionStorage) try {
                null == t ? window.sessionStorage.removeItem(l(e)) : window.sessionStorage.setItem(l(e), JSON.stringify(t))
            } catch (r) {
                if (a[r.name]) return;
                if (s[r.name] && 0 === window.sessionStorage.length) return;
                throw r
            }
        }, r.readState = function(e) {
            var t = void 0;
            try {
                t = window.sessionStorage.getItem(l(e))
            } catch (r) {
                if (a[r.name]) return
            }
            if (t) try {
                return JSON.parse(t)
            } catch (r) {}
        }
    }, {
        warning: 305
    }],
    293: [function(e, t, r) {
        "use strict";
        r.__esModule = !0;
        r.addEventListener = function(e, t, r) {
            return e.addEventListener ? e.addEventListener(t, r, !1) : e.attachEvent("on" + t, r)
        }, r.removeEventListener = function(e, t, r) {
            return e.removeEventListener ? e.removeEventListener(t, r, !1) : e.detachEvent("on" + t, r)
        }, r.supportsHistory = function() {
            var e = window.navigator.userAgent;
            return -1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone") ? window.history && "pushState" in window.history : !1
        }, r.supportsGoWithoutReloadUsingHash = function() {
            return -1 === window.navigator.userAgent.indexOf("Firefox")
        }, r.supportsPopstateOnHashchange = function() {
            return -1 === window.navigator.userAgent.indexOf("Trident")
        }
    }, {}],
    294: [function(e, t, r) {
        "use strict";
        r.__esModule = !0;
        r.canUseDOM = !("undefined" == typeof window || !window.document || !window.document.createElement)
    }, {}],
    295: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        r.__esModule = !0, r.locationsAreEqual = r.statesAreEqual = r.createLocation = r.createQuery = void 0;
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            },
            s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e;
            },
            a = e("invariant"),
            i = o(a),
            l = e("warning"),
            u = (o(l), e("./PathUtils")),
            d = e("./Actions"),
            c = (r.createQuery = function(e) {
                return s(Object.create(null), e)
            }, r.createLocation = function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? "/" : arguments[0],
                    t = arguments.length <= 1 || void 0 === arguments[1] ? d.POP : arguments[1],
                    r = arguments.length <= 2 || void 0 === arguments[2] ? null : arguments[2],
                    o = "string" == typeof e ? (0, u.parsePath)(e) : e,
                    n = o.pathname || "/",
                    s = o.search || "",
                    a = o.hash || "",
                    i = o.state;
                return {
                    pathname: n,
                    search: s,
                    hash: a,
                    state: i,
                    action: t,
                    key: r
                }
            }, function(e) {
                return "[object Date]" === Object.prototype.toString.call(e)
            }),
            p = r.statesAreEqual = function f(e, t) {
                if (e === t) return !0;
                var r = "undefined" == typeof e ? "undefined" : n(e),
                    o = "undefined" == typeof t ? "undefined" : n(t);
                if (r !== o) return !1;
                if ("function" === r ? (0, i["default"])(!1) : void 0, "object" === r) {
                    if (c(e) && c(t) ? (0, i["default"])(!1) : void 0, !Array.isArray(e)) {
                        var s = Object.keys(e),
                            a = Object.keys(t);
                        return s.length === a.length && s.every(function(r) {
                            return f(e[r], t[r])
                        })
                    }
                    return Array.isArray(t) && e.length === t.length && e.every(function(e, r) {
                        return f(e, t[r])
                    })
                }
                return !1
            };
        r.locationsAreEqual = function(e, t) {
            return e.key === t.key && e.pathname === t.pathname && e.search === t.search && e.hash === t.hash && p(e.state, t.state)
        }
    }, {
        "./Actions": 289,
        "./PathUtils": 296,
        invariant: 262,
        warning: 305
    }],
    296: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        r.__esModule = !0, r.createPath = r.parsePath = r.getQueryStringValueFromPath = r.stripQueryStringValueFromPath = r.addQueryStringValueToPath = void 0;
        var n = e("warning"),
            s = (o(n), r.addQueryStringValueToPath = function(e, t, r) {
                var o = a(e),
                    n = o.pathname,
                    s = o.search,
                    l = o.hash;
                return i({
                    pathname: n,
                    search: s + (-1 === s.indexOf("?") ? "?" : "&") + t + "=" + r,
                    hash: l
                })
            }, r.stripQueryStringValueFromPath = function(e, t) {
                var r = a(e),
                    o = r.pathname,
                    n = r.search,
                    s = r.hash;
                return i({
                    pathname: o,
                    search: n.replace(new RegExp("([?&])" + t + "=[a-zA-Z0-9]+(&?)"), function(e, t, r) {
                        return "?" === t ? t : r
                    }),
                    hash: s
                })
            }, r.getQueryStringValueFromPath = function(e, t) {
                var r = a(e),
                    o = r.search,
                    n = o.match(new RegExp("[?&]" + t + "=([a-zA-Z0-9]+)"));
                return n && n[1]
            }, function(e) {
                var t = e.match(/^(https?:)?\/\/[^\/]*/);
                return null == t ? e : e.substring(t[0].length)
            }),
            a = r.parsePath = function(e) {
                var t = s(e),
                    r = "",
                    o = "",
                    n = t.indexOf("#"); - 1 !== n && (o = t.substring(n), t = t.substring(0, n));
                var a = t.indexOf("?");
                return -1 !== a && (r = t.substring(a), t = t.substring(0, a)), "" === t && (t = "/"), {
                    pathname: t,
                    search: r,
                    hash: o
                }
            },
            i = r.createPath = function(e) {
                if (null == e || "string" == typeof e) return e;
                var t = e.basename,
                    r = e.pathname,
                    o = e.search,
                    n = e.hash,
                    s = (t || "") + r;
                return o && "?" !== o && (s += o), n && (s += n), s
            }
    }, {
        warning: 305
    }],
    297: [function(e, t, r) {
        "use strict";
        r.__esModule = !0, r.replaceLocation = r.pushLocation = r.getCurrentLocation = r.go = r.getUserConfirmation = void 0;
        var o = e("./BrowserProtocol");
        Object.defineProperty(r, "getUserConfirmation", {
            enumerable: !0,
            get: function() {
                return o.getUserConfirmation
            }
        }), Object.defineProperty(r, "go", {
            enumerable: !0,
            get: function() {
                return o.go
            }
        });
        var n = e("./LocationUtils"),
            s = e("./PathUtils");
        r.getCurrentLocation = function() {
            return (0, n.createLocation)(window.location)
        }, r.pushLocation = function(e) {
            return window.location.href = (0, s.createPath)(e), !1
        }, r.replaceLocation = function(e) {
            return window.location.replace((0, s.createPath)(e)), !1
        }
    }, {
        "./BrowserProtocol": 291,
        "./LocationUtils": 295,
        "./PathUtils": 296
    }],
    298: [function(e, t, r) {
        "use strict";

        function o(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t["default"] = e, t
        }

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        r.__esModule = !0;
        var s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            },
            a = e("invariant"),
            i = n(a),
            l = e("./ExecutionEnvironment"),
            u = e("./BrowserProtocol"),
            d = o(u),
            c = e("./RefreshProtocol"),
            p = o(c),
            f = e("./DOMUtils"),
            h = e("./createHistory"),
            m = n(h),
            _ = function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                l.canUseDOM ? void 0 : (0, i["default"])(!1);
                var t = e.forceRefresh || !(0, f.supportsHistory)(),
                    r = t ? p : d,
                    o = r.getUserConfirmation,
                    n = r.getCurrentLocation,
                    a = r.pushLocation,
                    u = r.replaceLocation,
                    c = r.go,
                    h = (0, m["default"])(s({
                        getUserConfirmation: o
                    }, e, {
                        getCurrentLocation: n,
                        pushLocation: a,
                        replaceLocation: u,
                        go: c
                    })),
                    _ = 0,
                    g = void 0,
                    v = function(e, t) {
                        1 === ++_ && (g = d.startListener(h.transitionTo));
                        var r = t ? h.listenBefore(e) : h.listen(e);
                        return function() {
                            r(), 0 === --_ && g()
                        }
                    },
                    y = function(e) {
                        return v(e, !0)
                    },
                    b = function(e) {
                        return v(e, !1)
                    };
                return s({}, h, {
                    listenBefore: y,
                    listen: b
                })
            };
        r["default"] = _
    }, {
        "./BrowserProtocol": 291,
        "./DOMUtils": 293,
        "./ExecutionEnvironment": 294,
        "./RefreshProtocol": 297,
        "./createHistory": 299,
        invariant: 262
    }],
    299: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        r.__esModule = !0;
        var n = e("./AsyncUtils"),
            s = e("./PathUtils"),
            a = e("./runTransitionHook"),
            i = o(a),
            l = e("./Actions"),
            u = e("./LocationUtils"),
            d = function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    t = e.getCurrentLocation,
                    r = e.getUserConfirmation,
                    o = e.pushLocation,
                    a = e.replaceLocation,
                    d = e.go,
                    c = e.keyLength,
                    p = void 0,
                    f = void 0,
                    h = [],
                    m = [],
                    _ = [],
                    g = function() {
                        return f && f.action === l.POP ? _.indexOf(f.key) : p ? _.indexOf(p.key) : -1
                    },
                    v = function(e) {
                        var t = g();
                        p = e, p.action === l.PUSH ? _ = [].concat(_.slice(0, t + 1), [p.key]) : p.action === l.REPLACE && (_[t] = p.key), m.forEach(function(e) {
                            return e(p)
                        })
                    },
                    y = function(e) {
                        return h.push(e),
                            function() {
                                return h = h.filter(function(t) {
                                    return t !== e
                                })
                            }
                    },
                    b = function(e) {
                        return m.push(e),
                            function() {
                                return m = m.filter(function(t) {
                                    return t !== e
                                })
                            }
                    },
                    k = function(e, t) {
                        (0, n.loopAsync)(h.length, function(t, r, o) {
                            (0, i["default"])(h[t], e, function(e) {
                                return null != e ? o(e) : r()
                            })
                        }, function(e) {
                            r && "string" == typeof e ? r(e, function(e) {
                                return t(e !== !1)
                            }) : t(e !== !1)
                        })
                    },
                    S = function(e) {
                        p && (0, u.locationsAreEqual)(p, e) || f && (0, u.locationsAreEqual)(f, e) || (f = e, k(e, function(t) {
                            if (f === e)
                                if (f = null, t) {
                                    if (e.action === l.PUSH) {
                                        var r = (0, s.createPath)(p),
                                            n = (0, s.createPath)(e);
                                        n === r && (0, u.statesAreEqual)(p.state, e.state) && (e.action = l.REPLACE)
                                    }
                                    e.action === l.POP ? v(e) : e.action === l.PUSH ? o(e) !== !1 && v(e) : e.action === l.REPLACE && a(e) !== !1 && v(e)
                                } else if (p && e.action === l.POP) {
                                var i = _.indexOf(p.key),
                                    c = _.indexOf(e.key); - 1 !== i && -1 !== c && d(i - c)
                            }
                        }))
                    },
                    P = function(e) {
                        return S(C(e, l.PUSH))
                    },
                    T = function(e) {
                        return S(C(e, l.REPLACE))
                    },
                    w = function() {
                        return d(-1)
                    },
                    N = function() {
                        return d(1)
                    },
                    R = function() {
                        return Math.random().toString(36).substr(2, c || 6)
                    },
                    M = function(e) {
                        return (0, s.createPath)(e)
                    },
                    C = function(e, t) {
                        var r = arguments.length <= 2 || void 0 === arguments[2] ? R() : arguments[2];
                        return (0, u.createLocation)(e, t, r)
                    };
                return {
                    getCurrentLocation: t,
                    listenBefore: y,
                    listen: b,
                    transitionTo: S,
                    push: P,
                    replace: T,
                    go: d,
                    goBack: w,
                    goForward: N,
                    createKey: R,
                    createPath: s.createPath,
                    createHref: M,
                    createLocation: C
                }
            };
        r["default"] = d
    }, {
        "./Actions": 289,
        "./AsyncUtils": 290,
        "./LocationUtils": 295,
        "./PathUtils": 296,
        "./runTransitionHook": 301
    }],
    300: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        r.__esModule = !0;
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            },
            s = e("warning"),
            a = (o(s), e("invariant")),
            i = o(a),
            l = e("./LocationUtils"),
            u = e("./PathUtils"),
            d = e("./createHistory"),
            c = o(d),
            p = e("./Actions"),
            f = function(e) {
                return e.filter(function(e) {
                    return e.state
                }).reduce(function(e, t) {
                    return e[t.key] = t.state, e
                }, {})
            },
            h = function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                Array.isArray(e) ? e = {
                    entries: e
                } : "string" == typeof e && (e = {
                    entries: [e]
                });
                var t = function() {
                        var e = m[_],
                            t = (0, u.createPath)(e),
                            r = void 0,
                            o = void 0;
                        e.key && (r = e.key, o = y(r));
                        var s = (0, u.parsePath)(t);
                        return (0, l.createLocation)(n({}, s, {
                            state: o
                        }), void 0, r)
                    },
                    r = function(e) {
                        var t = _ + e;
                        return t >= 0 && t < m.length
                    },
                    o = function(e) {
                        if (e && r(e)) {
                            _ += e;
                            var o = t();
                            d.transitionTo(n({}, o, {
                                action: p.POP
                            }))
                        }
                    },
                    s = function(e) {
                        _ += 1, _ < m.length && m.splice(_), m.push(e), v(e.key, e.state)
                    },
                    a = function(e) {
                        m[_] = e, v(e.key, e.state)
                    },
                    d = (0, c["default"])(n({}, e, {
                        getCurrentLocation: t,
                        pushLocation: s,
                        replaceLocation: a,
                        go: o
                    })),
                    h = e,
                    m = h.entries,
                    _ = h.current;
                "string" == typeof m ? m = [m] : Array.isArray(m) || (m = ["/"]), m = m.map(function(e) {
                    return (0, l.createLocation)(e)
                }), null == _ ? _ = m.length - 1 : _ >= 0 && _ < m.length ? void 0 : (0, i["default"])(!1);
                var g = f(m),
                    v = function(e, t) {
                        return g[e] = t
                    },
                    y = function(e) {
                        return g[e]
                    };
                return n({}, d, {
                    canGo: r
                })
            };
        r["default"] = h
    }, {
        "./Actions": 289,
        "./LocationUtils": 295,
        "./PathUtils": 296,
        "./createHistory": 299,
        invariant: 262,
        warning: 305
    }],
    301: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        r.__esModule = !0;
        var n = e("warning"),
            s = (o(n), function(e, t, r) {
                var o = e(t, r);
                e.length < 2 && r(o)
            });
        r["default"] = s
    }, {
        warning: 305
    }],
    302: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        r.__esModule = !0;
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            },
            s = e("./runTransitionHook"),
            a = o(s),
            i = e("./PathUtils"),
            l = function(e) {
                return function() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                        r = e(t),
                        o = t.basename,
                        s = function(e) {
                            return e ? (o && null == e.basename && (0 === e.pathname.indexOf(o) ? (e.pathname = e.pathname.substring(o.length), e.basename = o, "" === e.pathname && (e.pathname = "/")) : e.basename = ""), e) : e
                        },
                        l = function(e) {
                            if (!o) return e;
                            var t = "string" == typeof e ? (0, i.parsePath)(e) : e,
                                r = t.pathname,
                                s = "/" === o.slice(-1) ? o : o + "/",
                                a = "/" === r.charAt(0) ? r.slice(1) : r,
                                l = s + a;
                            return n({}, t, {
                                pathname: l
                            })
                        },
                        u = function() {
                            return s(r.getCurrentLocation())
                        },
                        d = function(e) {
                            return r.listenBefore(function(t, r) {
                                return (0, a["default"])(e, s(t), r)
                            })
                        },
                        c = function(e) {
                            return r.listen(function(t) {
                                return e(s(t))
                            })
                        },
                        p = function(e) {
                            return r.push(l(e))
                        },
                        f = function(e) {
                            return r.replace(l(e))
                        },
                        h = function(e) {
                            return r.createPath(l(e))
                        },
                        m = function(e) {
                            return r.createHref(l(e))
                        },
                        _ = function(e) {
                            for (var t = arguments.length, o = Array(t > 1 ? t - 1 : 0), n = 1; t > n; n++) o[n - 1] = arguments[n];
                            return s(r.createLocation.apply(r, [l(e)].concat(o)))
                        };
                    return n({}, r, {
                        getCurrentLocation: u,
                        listenBefore: d,
                        listen: c,
                        push: p,
                        replace: f,
                        createPath: h,
                        createHref: m,
                        createLocation: _
                    })
                }
            };
        r["default"] = l
    }, {
        "./PathUtils": 296,
        "./runTransitionHook": 301
    }],
    303: [function(e, t, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        r.__esModule = !0;
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            },
            s = e("query-string"),
            a = e("./runTransitionHook"),
            i = o(a),
            l = e("./LocationUtils"),
            u = e("./PathUtils"),
            d = function(e) {
                return (0, s.stringify)(e).replace(/%20/g, "+")
            },
            c = s.parse,
            p = function(e) {
                return function() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                        r = e(t),
                        o = t.stringifyQuery,
                        s = t.parseQueryString;
                    "function" != typeof o && (o = d), "function" != typeof s && (s = c);
                    var a = function(e) {
                            return e ? (null == e.query && (e.query = s(e.search.substring(1))), e) : e
                        },
                        p = function(e, t) {
                            if (null == t) return e;
                            var r = "string" == typeof e ? (0, u.parsePath)(e) : e,
                                s = o(t),
                                a = s ? "?" + s : "";
                            return n({}, r, {
                                search: a
                            })
                        },
                        f = function() {
                            return a(r.getCurrentLocation())
                        },
                        h = function(e) {
                            return r.listenBefore(function(t, r) {
                                return (0, i["default"])(e, a(t), r)
                            })
                        },
                        m = function(e) {
                            return r.listen(function(t) {
                                return e(a(t))
                            })
                        },
                        _ = function(e) {
                            return r.push(p(e, e.query))
                        },
                        g = function(e) {
                            return r.replace(p(e, e.query))
                        },
                        v = function(e) {
                            return r.createPath(p(e, e.query))
                        },
                        y = function(e) {
                            return r.createHref(p(e, e.query))
                        },
                        b = function(e) {
                            for (var t = arguments.length, o = Array(t > 1 ? t - 1 : 0), n = 1; t > n; n++) o[n - 1] = arguments[n];
                            var s = r.createLocation.apply(r, [p(e, e.query)].concat(o));
                            return e.query && (s.query = (0, l.createQuery)(e.query)), a(s)
                        };
                    return n({}, r, {
                        getCurrentLocation: f,
                        listenBefore: h,
                        listen: m,
                        push: _,
                        replace: g,
                        createPath: v,
                        createHref: y,
                        createLocation: b
                    })
                }
            };
        r["default"] = p
    }, {
        "./LocationUtils": 295,
        "./PathUtils": 296,
        "./runTransitionHook": 301,
        "query-string": 263
    }],
    304: [function(e, t, r) {
        "use strict";
        t.exports = function(e) {
            return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
                return "%" + e.charCodeAt(0).toString(16).toUpperCase()
            })
        }
    }, {}],
    305: [function(e, t, r) {
        /**
         * Copyright 2014-2015, Facebook, Inc.
         * All rights reserved.
         *
         * This source code is licensed under the BSD-style license found in the
         * LICENSE file in the root directory of this source tree. An additional grant
         * of patent rights can be found in the PATENTS file in the same directory.
         */
        "use strict";
        var o = function() {};
        t.exports = o
    }, {}]
}, {}, [57]);
//# sourceMappingURL=../react_client_side/site_header-ea868d0949.js.map