/* >>> file start: js/configs/postCards.js */
LJ.define("LJ.Config.PostCards"),
    function() {
        var O = {
            COLLECTION: "collection",
            COMMON_BIG: "common-big",
            COMMON_SMALL: "common-small",
            COMMON_VERTICAL_IMAGE: "common-vertical-image",
            COMMON_VERTICAL_TEXT: "common-vertical-text",
            COMMON_HORIZONTAL_IMAGE: "common-horizontal-image",
            COMMON_HORIZONTAL_TEXT: "common-horizontal-text",
            COMMON_VERTICAL_TEXT_VIDEO: "common-vertical-text-video",
            COMMON_VERTICAL_TEXT_PHOTO: "common-vertical-text-photo",
            COMMON_BIG_WIDE_IMAGE: "common-big-wide-image",
            VIDEO_PLAYER: "video-player",
            IMG_PREVIEW_VIDEO: "img-preview-video",
            PHOTO: "photo"
        };
        LJ.Config.PostCards.CARD_TYPES = O, LJ.Config.PostCards.COMMON_CARD_TYPE_NAMES = [O.COMMON_BIG, O.COMMON_SMALL, O.COMMON_VERTICAL_IMAGE, O.COMMON_VERTICAL_TEXT, O.COMMON_HORIZONTAL_IMAGE, O.COMMON_HORIZONTAL_TEXT, O.COMMON_VERTICAL_TEXT_VIDEO, O.COMMON_VERTICAL_TEXT_PHOTO, O.COMMON_BIG_WIDE_IMAGE]
    }();
/* <<< file end: js/configs/postCards.js */

//# map link was there [postCards.js.map]
/* >>> file start: js/mainPage2018/config.js */
//= require js/configs/postCards.js
LJ.define("LJ.Config.MainPage"),
    function() {
        var e = LJ.Config.PostCards.CARD_TYPES;
        LJ.Config.MainPage.MAIN_BLOCK_LAYOUT = {
            slots: {
                "first-left": {
                    cardTypes: [e.COMMON_BIG],
                    requirements: {
                        isTopNewsPost: !0
                    }
                },
                "first-right": {
                    cardTypes: [e.COMMON_SMALL]
                },
                "second-left": {
                    cardTypes: [e.COMMON_SMALL]
                },
                "second-center": {
                    cardTypes: [e.COMMON_SMALL]
                }
            }
        }, LJ.Config.MainPage.CATEGORY_BLOCK_LAYOUT = {
            slots: {
                "first-left": {
                    cardType: "common",
                    serverCardType: e.COMMON_HORIZONTAL_IMAGE,
                    categoryTopNews: !0
                },
                "first-right": {
                    tryToUseCollectionCard: !0,
                    cardType: "common",
                    serverCardType: e.COMMON_SMALL
                },
                "second-center": {
                    cardType: "common",
                    serverCardType: e.COMMON_VERTICAL_IMAGE
                },
                "second-right": {
                    cardType: "common",
                    serverCardType: e.COMMON_VERTICAL_IMAGE
                }
            }
        }, Object.keys(LJ.Config.MainPage.CATEGORY_BLOCK_LAYOUT.slots).forEach(function(e) {
            LJ.Config.MainPage.CATEGORY_BLOCK_LAYOUT.slots[e].slotName = e
        })
    }();
/* <<< file end: js/mainPage2018/config.js */

//# map link was there [config.js.map]
/* >>> file start: js/mainPage2018/adaptivity.js */
! function(t) {
    return t
}(),
function() {
    "use strict";

    function t() {
        var t = {};
        return t.getLayoutSingleCardProps = function() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                i = t.section,
                o = t.window,
                r = t.index,
                a = t.slot,
                n = {};
            return ["yourPicks", "category"].indexOf(i) > -1 && (o.innerWidth <= e.MAX_WIDTH ? (n.hasLead = !0, n.hasImage = !0, n.size = "medium", n.orientation = "horizontal") : "first-left" === a ? (n.size = "medium", n.orientation = "horizontal", n.hasImage = !0) : "first-right" === a ? n.size = "small" : (n.size = "medium", n.orientation = "vertical", n.hasLead = !0, n.hasImage = !0)), "topRating" === i && (a || 0 !== r || (a = "first-left"), 0 === r && (n.orientation = "horizontal"), 1 === r ? n.size = "small" : (n.size = "medium", n.hasImage = !0), r > 1 && (n.orientation = "vertical", n.hasLead = !0)), n
        }, t.updateLayoutSingleCardProps = function() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                i = e.cardPropsObj,
                o = e.section,
                r = e.index,
                a = e.window,
                n = e.slot;
            if (!i) return null;
            if (-1 === ["yourPicks", "topRating", "category"].indexOf(o)) return i;
            delete i.orientation, delete i.hasLead, delete i.size, delete i.hasImage;
            var s = t.getLayoutSingleCardProps({
                section: o,
                index: r,
                window: a,
                slot: n
            });
            return angular.extend(i, s), i
        }, t.updateLayoutCardProps = function() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                i = e.cardProps,
                o = e.window;
            if (i.yourPicks) {
                var r = i.yourPicks.yourChoice || [];
                r.length && r.forEach(function(e) {
                    t.updateLayoutSingleCardProps({
                        cardPropsObj: e,
                        section: "yourPicks",
                        slot: e.slot,
                        window: o
                    })
                });
                var a = i.yourPicks.yourFriends || [];
                a.length && a.forEach(function(e) {
                    t.updateLayoutSingleCardProps({
                        cardPropsObj: e,
                        section: "yourPicks",
                        slot: e.slot,
                        window: o
                    })
                })
            }
            i.topRating && i.topRating.length && i.topRating.forEach(function(e, i) {
                t.updateLayoutSingleCardProps({
                    cardPropsObj: e,
                    section: "topRating",
                    index: i,
                    window: o
                })
            });
            var n = Object.values(i.categories || {}).reduce(function(t, e) {
                return e && 0 !== Object.keys(e).length ? t.concat(e["first-left"]) : t
            }, []);
            return n.forEach(function(e) {
                t.updateLayoutSingleCardProps({
                    cardPropsObj: e,
                    section: "category",
                    slot: "first-left",
                    window: o
                })
            }), {
                cardProps: i
            }
        }, t
    }
    angular.module("MainPage2018.Adaptivity", []).factory("mainPageAdaptivityService", t);
    var e = {
        MAX_WIDTH: 969
    }
}();
/* <<< file end: js/mainPage2018/adaptivity.js */

//# map link was there [adaptivity.js.map]
/* >>> file start: js/medius/utils.js */
var _extends = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
    }
    return e
};
//= require js/configs/postCards.js
! function(e) {
    return e
}(),
function() {
    "use strict";

    function e(e, t, a, i) {
        var n = {};
        return n.mediusPostDataToCardPropsTypeA = function(e) {
            var t = e.serverData,
                a = {};
            if (angular.isDefined(t.size) && (a.size = t.size), angular.isDefined(t.orientation) && (a.orientation = t.orientation), angular.isDefined(t.codeName) && (a.codeName = t.codeName), a.username = t.author_name, t.author_journal && (a.journalUrl = t.author_journal), t.author_profile && (a.profileUrl = t.author_profile), t.author_userpic && (a.userpicUrl = t.author_userpic), a.hasImage = !!t.show_pic, a.imageUrl = t.image, a.postUrl = t.link, a.postTitle = t.title, a.hasLead = !!t.show_text, a.lead = t.text, a.postID = t.like_ditem_id || t.ditem_id, a.journalID = t.like_journal_id || t.journal_id, a.replyCount = t.replycount, a.repostCount = t.extra_reposts, a.readingTime = +t.reading_time, a.likeToken = t.likes_signature, a.date = t.date, t.likeCount && (a.likeCount = t.likeCount), t.sticker && (a.stickerCatName = t.sticker, a.stickerCatURL = t.sticker_url), angular.isDefined(t.is_video_card) && (a.isVideoCard = t.is_video_card), angular.isDefined(t.video) && (a.videoURL = t.video), angular.isDefined(t.is_photo_card) && (a.isPhotoCard = t.is_photo_card), t.authors_count && +t.authors_count > 1 && t.author) {
                a.multipleAuthors = !0;
                var i = r.createElement("span");
                i.innerHTML = t.author, a.multiauthorCaption = i.textContent
            }
            return a
        }, n.getUserProps = function(e) {
            var r = e.username;
            if (!r) return t.resolve({});
            var a = function(e) {
                    var r = {
                        displayUsername: e.display_username,
                        journalUrl: e.journal_url,
                        profileUrl: e.profile_url
                    };
                    return e.userpic && (r.userpicUrl = e.userpic), r
                },
                n = i.Cache.get(r);
            return n ? t.resolve(a(n)) : i.fetchUser(r, {
                display_username: 1,
                journal_url: 1,
                profile_url: 1,
                userpic: 1
            }).then(a)
        }, n.mediusPostDataToCardPropsTypeB = function() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                r = e.getFullUserData,
                a = e.postData || {},
                i = e.desiredCardTypes || [];
            if (!a.cards || !a.cards.length) return t.reject();
            var o = t.resolve({});
            return r && (o = n.getUserProps({
                username: a.username || a.author_name
            })), o.then(function(e) {
                var r = i.map(function(e) {
                        return a.cards.filter(function(r) {
                            return e === r.type
                        })
                    }),
                    t = Array.prototype.concat.apply([], r),
                    o = i.length && !t.length,
                    s = t[0] || a.cards[0],
                    u = {};
                o && (u = LJ.Util.PostCards.getLayoutProps({
                    serverCardType: i[0]
                }) || {});
                var l = _extends({}, a, s),
                    d = {},
                    p = LJ.Config.PostCards.COMMON_CARD_TYPE_NAMES.indexOf(s.type) > -1,
                    c = Object.values(LJ.Config.PostCards.CARD_TYPES).indexOf(s.type) > -1;
                p ? d.type = "common" : c ? d.type = s.type : d.type = "common";
                var _ = _extends({}, u, n.mediusPostDataToCardPropsTypeA({
                    serverData: l
                }), e, d);
                return _
            })
        }, n.responseToItemArrA = function() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            return (e.items || []).map(function(r) {
                return _extends({}, r, {
                    likes_signature: e.likes_signature
                })
            })
        }, n
    }
    e.$inject = ["Api", "$q", "$log", "Users"], angular.module("Medius.Utils", []).factory("mediusUtils", e);
    var r = LJ.Util.getDocument()
}();
/* <<< file end: js/medius/utils.js */

//# map link was there [utils.js.map]
/* >>> file start: js/mainPage2018/blocks/category.js */
//= require js/medius/utils.js
! function(t) {
    return t
}(),
function() {
    function t(t, o, n, a, i) {
        var s = {},
            c = {};
        return s.initProps = function() {
            var n = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                s = {},
                l = n.jQCategorySections,
                d = {};
            d.normalPosts = Object.values(r).filter(function(t) {
                return "common" === t.cardType && !t.categoryTopNews
            });
            var u = {},
                f = l.toArray().map(function(t) {
                    return {
                        node: t,
                        id: t.getAttribute("data-cat-id"),
                        keyword: t.getAttribute("data-cat-keyword")
                    }
                }),
                p = f.map(function(t) {
                    return t.id
                });
            if (!p.length) return t.reject("No category IDs provided");
            var v = o.call("medius.get_public_items_categories", {
                cat_ids: p,
                exclude_main: 1,
                limit: 5
            }).then(function() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    o = function() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                            r = t.catID,
                            o = t.categoryProps,
                            n = [];
                        t.slotsToFill.forEach(function(t) {
                            var i = void 0,
                                s = u[r].basicItems.filter(function(t) {
                                    return n.every(function(r) {
                                        return r.id !== t.id
                                    })
                                }).find(function(r) {
                                    return i = r.cards.find(function(r) {
                                        return r.type === t.serverCardType
                                    }), i ? !0 : void 0
                                });
                            s && (n.push(s), a.mediusPostDataToCardPropsTypeB({
                                postData: s,
                                desiredCardTypes: [t.serverCardType]
                            }).then(function(r) {
                                e([r]), r.allowLikeServerCalls = !1, o[t.slotName] = r
                            }))
                        })
                    };
                f.forEach(function(n) {
                    var c = t[n.id],
                        l = n.id + "";
                    if (c) {
                        var f = {};
                        s[l] = f;
                        var p = c.top_news;
                        p && a.mediusPostDataToCardPropsTypeB({
                            postData: p,
                            desiredCardTypes: [r["first-left"].serverCardType]
                        }).then(function(t) {
                            e([t]), t.allowLikeServerCalls = !1, f["first-left"] = t
                        }), u[l] = {
                            basicItems: c.items || []
                        }, i.propReadyPromise.then(function() {
                            var t = i.getCardProps({
                                cardType: "collection",
                                catID: l
                            });
                            t ? (f.collectionCard = t, o({
                                catID: l,
                                categoryProps: f,
                                slotsToFill: d.normalPosts.filter(function(t) {
                                    return !t.tryToUseCollectionCard
                                })
                            })) : o({
                                catID: l,
                                categoryProps: f,
                                slotsToFill: d.normalPosts
                            })
                        })
                    }
                })
            });
            return v.then(function() {
                return c = s, s
            })
        }, s.getCardProps = function() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            if ("category" === t.section) {
                var e = (c || {})[t.catID];
                return e ? r[t.slot].tryToUseCollectionCard && e.collectionCard ? e.collectionCard : e[t.slot] : null
            }
        }, s
    }
    t.$inject = ["$q", "Api", "$timeout", "mediusUtils", "mainPageCollectionPropsService"], angular.module("MainPage2018.Blocks.Category", ["Medius.Utils"]).factory("mainPageCategoryBlockService", t);
    var r = LJ.Config.MainPage.CATEGORY_BLOCK_LAYOUT.slots,
        e = function() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0];
            t.forEach(function(t) {
                if (t && t.postUrl) {
                    var r = LJ.Util.Link.addQueryParams({
                        sourceURL: t.postUrl,
                        queryParams: {
                            utm_source: "recommended"
                        }
                    });
                    t.postUrl = r
                }
            })
        }
}();
/* <<< file end: js/mainPage2018/blocks/category.js */

//# map link was there [category.js.map]
/* >>> file start: js/node_modules/simplebar/dist/simplebar.js */
var _extends = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    },
    _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
! function(t, e) {
    "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) ? module.exports = e(): "function" == typeof define && define.amd ? define([], e) : "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? exports.SimpleBar = e() : t.SimpleBar = e()
}(this, function() {
    return function(t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.d = function(t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t["default"]
            } : function() {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 27)
    }([function(t, e, n) {
        var r = n(23)("wks"),
            i = n(12),
            o = n(1).Symbol,
            s = "function" == typeof o;
        (t.exports = function(t) {
            return r[t] || (r[t] = s && o[t] || (s ? o : i)("Symbol." + t))
        }).store = r
    }, function(t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function(t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function(t, e) {
            return n.call(t, e)
        }
    }, function(t, e) {
        var n = t.exports = {
            version: "2.5.1"
        };
        "number" == typeof __e && (__e = n)
    }, function(t, e, n) {
        var r = n(5),
            i = n(11);
        t.exports = n(7) ? function(t, e, n) {
            return r.f(t, e, i(1, n))
        } : function(t, e, n) {
            return t[e] = n, t
        }
    }, function(t, e, n) {
        var r = n(6),
            i = n(33),
            o = n(34),
            s = Object.defineProperty;
        e.f = n(7) ? Object.defineProperty : function(t, e, n) {
            if (r(t), e = o(e, !0), r(n), i) try {
                return s(t, e, n)
            } catch (t) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t
        }
    }, function(t, e, n) {
        var r = n(10);
        t.exports = function(t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function(t, e, n) {
        t.exports = !n(16)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(t, e) {
        var n = Math.ceil,
            r = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
        }
    }, function(t, e) {
        t.exports = function(t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function(t, e) {
        t.exports = function(t) {
            return "object" == ("undefined" == typeof t ? "undefined" : _typeof(t)) ? null !== t : "function" == typeof t
        }
    }, function(t, e) {
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    }, function(t, e) {
        var n = 0,
            r = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
        }
    }, function(t, e) {
        t.exports = {}
    }, function(t, e, n) {
        var r = n(23)("keys"),
            i = n(12);
        t.exports = function(t) {
            return r[t] || (r[t] = i(t))
        }
    }, function(t, e, n) {
        var r = n(1),
            i = n(3),
            o = n(4),
            s = n(18),
            c = n(19),
            a = function u(t, e, n) {
                var a, l, f, h, d = t & u.F,
                    p = t & u.G,
                    v = t & u.S,
                    b = t & u.P,
                    y = t & u.B,
                    m = p ? r : v ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
                    g = p ? i : i[e] || (i[e] = {}),
                    _ = g.prototype || (g.prototype = {});
                p && (n = e);
                for (a in n) l = !d && m && void 0 !== m[a], f = (l ? m : n)[a], h = y && l ? c(f, r) : b && "function" == typeof f ? c(Function.call, f) : f, m && s(m, a, f, t & u.U), g[a] != f && o(g, a, h), b && _[a] != f && (_[a] = f)
            };
        r.core = i, a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, t.exports = a
    }, function(t, e) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function(t, e, n) {
        var r = n(10),
            i = n(1).document,
            o = r(i) && r(i.createElement);
        t.exports = function(t) {
            return o ? i.createElement(t) : {}
        }
    }, function(t, e, n) {
        var r = n(1),
            i = n(4),
            o = n(2),
            s = n(12)("src"),
            c = Function.toString,
            a = ("" + c).split("toString");
        n(3).inspectSource = function(t) {
            return c.call(t)
        }, (t.exports = function(t, e, n, c) {
            var u = "function" == typeof n;
            u && (o(n, "name") || i(n, "name", e)), t[e] !== n && (u && (o(n, s) || i(n, s, t[e] ? "" + t[e] : a.join(String(e)))), t === r ? t[e] = n : c ? t[e] ? t[e] = n : i(t, e, n) : (delete t[e], i(t, e, n)))
        })(Function.prototype, "toString", function() {
            return "function" == typeof this && this[s] || c.call(this)
        })
    }, function(t, e, n) {
        var r = n(35);
        t.exports = function(t, e, n) {
            if (r(t), void 0 === e) return t;
            switch (n) {
                case 1:
                    return function(n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function(n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function(n, r, i) {
                        return t.call(e, n, r, i)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }
    }, function(t, e, n) {
        var r = n(41),
            i = n(9);
        t.exports = function(t) {
            return r(i(t))
        }
    }, function(t, e) {
        var n = {}.toString;
        t.exports = function(t) {
            return n.call(t).slice(8, -1)
        }
    }, function(t, e, n) {
        var r = n(8),
            i = Math.min;
        t.exports = function(t) {
            return t > 0 ? i(r(t), 9007199254740991) : 0
        }
    }, function(t, e, n) {
        var r = n(1),
            i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
        t.exports = function(t) {
            return i[t] || (i[t] = {})
        }
    }, function(t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function(t, e, n) {
        var r = n(5).f,
            i = n(2),
            o = n(0)("toStringTag");
        t.exports = function(t, e, n) {
            t && !i(t = n ? t : t.prototype, o) && r(t, o, {
                configurable: !0,
                value: e
            })
        }
    }, function(t, e, n) {
        var r = n(9);
        t.exports = function(t) {
            return Object(r(t))
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function s(t, e, n) {
            return e && o(t.prototype, e), n && o(t, n), t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e["default"] = void 0, n(28);
        var c = r(n(53)),
            a = r(n(54)),
            u = r(n(56));
        n(57), Object.assign = n(58);
        var l = function() {
            function t(e, n) {
                i(this, t), this.el = e, this.flashTimeout, this.contentEl, this.scrollContentEl, this.dragOffset = {
                    x: 0,
                    y: 0
                }, this.isVisible = {
                    x: !0,
                    y: !0
                }, this.scrollOffsetAttr = {
                    x: "scrollLeft",
                    y: "scrollTop"
                }, this.sizeAttr = {
                    x: "offsetWidth",
                    y: "offsetHeight"
                }, this.scrollSizeAttr = {
                    x: "scrollWidth",
                    y: "scrollHeight"
                }, this.offsetAttr = {
                    x: "left",
                    y: "top"
                }, this.globalObserver, this.mutationObserver, this.resizeObserver, this.currentAxis, this.isRtl, this.options = _extends({}, t.defaultOptions, n), this.classNames = this.options.classNames, this.scrollbarWidth = (0, c["default"])(), this.offsetSize = 20, this.flashScrollbar = this.flashScrollbar.bind(this), this.onDragY = this.onDragY.bind(this), this.onDragX = this.onDragX.bind(this), this.onScrollY = this.onScrollY.bind(this), this.onScrollX = this.onScrollX.bind(this), this.drag = this.drag.bind(this), this.onEndDrag = this.onEndDrag.bind(this), this.onMouseEnter = this.onMouseEnter.bind(this), this.recalculate = (0, a["default"])(this.recalculate, 100, {
                    leading: !0
                }), this.init()
            }
            return s(t, [{
                key: "init",
                value: function() {
                    this.el.SimpleBar = this, this.initDOM(), this.scrollbarX = this.trackX.querySelector(".".concat(this.classNames.scrollbar)), this.scrollbarY = this.trackY.querySelector(".".concat(this.classNames.scrollbar)), this.isRtl = "rtl" === getComputedStyle(this.contentEl).direction, this.scrollContentEl.style[this.isRtl ? "paddingLeft" : "paddingRight"] = "".concat(this.scrollbarWidth || this.offsetSize, "px"), this.scrollContentEl.style.marginBottom = "-".concat(2 * this.scrollbarWidth || this.offsetSize, "px"), this.contentEl.style.paddingBottom = "".concat(this.scrollbarWidth || this.offsetSize, "px"), 0 !== this.scrollbarWidth && (this.contentEl.style[this.isRtl ? "marginLeft" : "marginRight"] = "-".concat(this.scrollbarWidth, "px")), this.recalculate(), this.initListeners()
                }
            }, {
                key: "initDOM",
                value: function() {
                    var t = this;
                    if (Array.from(this.el.children).filter(function(e) {
                            return e.classList.contains(t.classNames.scrollContent)
                        }).length) this.trackX = this.el.querySelector(".".concat(this.classNames.track, ".horizontal")), this.trackY = this.el.querySelector(".".concat(this.classNames.track, ".vertical")), this.scrollContentEl = this.el.querySelector(".".concat(this.classNames.scrollContent)), this.contentEl = this.el.querySelector(".".concat(this.classNames.content));
                    else {
                        for (this.scrollContentEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.scrollContentEl.classList.add(this.classNames.scrollContent), this.contentEl.classList.add(this.classNames.content); this.el.firstChild;) this.contentEl.appendChild(this.el.firstChild);
                        this.scrollContentEl.appendChild(this.contentEl), this.el.appendChild(this.scrollContentEl)
                    }
                    if (!this.trackX || !this.trackY) {
                        var e = document.createElement("div"),
                            n = document.createElement("div");
                        e.classList.add(this.classNames.track), n.classList.add(this.classNames.scrollbar), e.appendChild(n), this.trackX = e.cloneNode(!0), this.trackX.classList.add("horizontal"), this.trackY = e.cloneNode(!0), this.trackY.classList.add("vertical"), this.el.insertBefore(this.trackX, this.el.firstChild), this.el.insertBefore(this.trackY, this.el.firstChild)
                    }
                    this.el.setAttribute("data-simplebar", "init")
                }
            }, {
                key: "initListeners",
                value: function() {
                    var t = this;
                    this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter), this.scrollbarY.addEventListener("mousedown", this.onDragY), this.scrollbarX.addEventListener("mousedown", this.onDragX), this.scrollContentEl.addEventListener("scroll", this.onScrollY), this.contentEl.addEventListener("scroll", this.onScrollX), "undefined" != typeof MutationObserver && (this.mutationObserver = new MutationObserver(function(e) {
                        e.forEach(function(e) {
                            (t.isChildNode(e.target) || e.addedNodes.length) && t.recalculate()
                        })
                    }), this.mutationObserver.observe(this.el, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    })), this.resizeObserver = new u["default"](this.recalculate.bind(this)), this.resizeObserver.observe(this.el)
                }
            }, {
                key: "removeListeners",
                value: function() {
                    this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter), this.scrollbarX.removeEventListener("mousedown", this.onDragX), this.scrollbarY.removeEventListener("mousedown", this.onDragY), this.scrollContentEl.removeEventListener("scroll", this.onScrollY), this.contentEl.removeEventListener("scroll", this.onScrollX), this.mutationObserver.disconnect(), this.resizeObserver.disconnect()
                }
            }, {
                key: "onDragX",
                value: function(t) {
                    this.onDrag(t, "x")
                }
            }, {
                key: "onDragY",
                value: function(t) {
                    this.onDrag(t, "y")
                }
            }, {
                key: "onDrag",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "y";
                    t.preventDefault();
                    var n = "y" === e ? this.scrollbarY : this.scrollbarX,
                        r = "y" === e ? t.pageY : t.pageX;
                    this.dragOffset[e] = r - n.getBoundingClientRect()[this.offsetAttr[e]], this.currentAxis = e, document.addEventListener("mousemove", this.drag), document.addEventListener("mouseup", this.onEndDrag)
                }
            }, {
                key: "drag",
                value: function(t) {
                    var e, n, r;
                    t.preventDefault(), "y" === this.currentAxis ? (e = t.pageY, n = this.trackY, r = this.scrollContentEl) : (e = t.pageX, n = this.trackX, r = this.contentEl);
                    var i = e - n.getBoundingClientRect()[this.offsetAttr[this.currentAxis]] - this.dragOffset[this.currentAxis],
                        o = i / n[this.sizeAttr[this.currentAxis]],
                        s = o * this.contentEl[this.scrollSizeAttr[this.currentAxis]];
                    r[this.scrollOffsetAttr[this.currentAxis]] = s
                }
            }, {
                key: "onEndDrag",
                value: function() {
                    document.removeEventListener("mousemove", this.drag), document.removeEventListener("mouseup", this.onEndDrag)
                }
            }, {
                key: "resizeScrollbar",
                value: function() {
                    var t, e, n, r, i, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y";
                    "x" === o ? (t = this.trackX, e = this.scrollbarX, n = this.contentEl[this.scrollOffsetAttr[o]], r = this.contentSizeX, i = this.scrollbarXSize) : (t = this.trackY, e = this.scrollbarY, n = this.scrollContentEl[this.scrollOffsetAttr[o]], r = this.contentSizeY, i = this.scrollbarYSize);
                    var s = i / r,
                        c = n / (r - i),
                        a = Math.max(~~(s * i), this.options.scrollbarMinSize),
                        u = ~~((i - a) * c);
                    this.isVisible[o] = r > i, this.isVisible[o] || this.options.forceVisible ? (t.style.visibility = "visible", this.options.forceVisible ? e.style.visibility = "hidden" : e.style.visibility = "visible", "x" === o ? (e.style.left = "".concat(u, "px"), e.style.width = "".concat(a, "px")) : (e.style.top = "".concat(u, "px"), e.style.height = "".concat(a, "px"))) : t.style.visibility = "hidden"
                }
            }, {
                key: "onScrollX",
                value: function() {
                    this.flashScrollbar("x")
                }
            }, {
                key: "onScrollY",
                value: function() {
                    this.flashScrollbar("y")
                }
            }, {
                key: "onMouseEnter",
                value: function() {
                    this.flashScrollbar("x"), this.flashScrollbar("y")
                }
            }, {
                key: "flashScrollbar",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y";
                    this.resizeScrollbar(t), this.showScrollbar(t)
                }
            }, {
                key: "showScrollbar",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y";
                    this.isVisible[t] && ("x" === t ? this.scrollbarX.classList.add("visible") : this.scrollbarY.classList.add("visible"), this.options.autoHide && ("number" == typeof this.flashTimeout && window.clearTimeout(this.flashTimeout), this.flashTimeout = window.setTimeout(this.hideScrollbar.bind(this), 1e3)))
                }
            }, {
                key: "hideScrollbar",
                value: function() {
                    this.scrollbarX.classList.remove("visible"), this.scrollbarY.classList.remove("visible"), "number" == typeof this.flashTimeout && window.clearTimeout(this.flashTimeout)
                }
            }, {
                key: "recalculate",
                value: function() {
                    this.contentSizeX = this.contentEl[this.scrollSizeAttr.x], this.contentSizeY = this.contentEl[this.scrollSizeAttr.y] - (this.scrollbarWidth || this.offsetSize), this.scrollbarXSize = this.trackX[this.sizeAttr.x], this.scrollbarYSize = this.trackY[this.sizeAttr.y], this.resizeScrollbar("x"), this.resizeScrollbar("y"), this.options.autoHide || (this.showScrollbar("x"), this.showScrollbar("y"))
                }
            }, {
                key: "getScrollElement",
                value: function() {
                    return "y" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y") ? this.scrollContentEl : this.contentEl
                }
            }, {
                key: "getContentElement",
                value: function() {
                    return this.contentEl
                }
            }, {
                key: "unMount",
                value: function() {
                    this.removeListeners(), this.el.SimpleBar = null
                }
            }, {
                key: "isChildNode",
                value: function(t) {
                    return null !== t && (t === this.el || this.isChildNode(t.parentNode))
                }
            }], [{
                key: "initHtmlApi",
                value: function() {
                    this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(function(e) {
                        e.forEach(function(e) {
                            Array.from(e.addedNodes).forEach(function(e) {
                                1 === e.nodeType && (e.hasAttribute("data-simplebar") ? !e.SimpleBar && new t(e, t.getElOptions(e)) : Array.from(e.querySelectorAll("[data-simplebar]")).forEach(function(e) {
                                    !e.SimpleBar && new t(e, t.getElOptions(e))
                                }))
                            }), Array.from(e.removedNodes).forEach(function(t) {
                                1 === t.nodeType && (t.hasAttribute("data-simplebar") ? t.SimpleBar && t.SimpleBar.unMount() : Array.from(t.querySelectorAll("[data-simplebar]")).forEach(function(t) {
                                    t.SimpleBar && t.SimpleBar.unMount()
                                }))
                            })
                        })
                    }), this.globalObserver.observe(document, {
                        childList: !0,
                        subtree: !0
                    })), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements.bind(this)) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements))
                }
            }, {
                key: "getElOptions",
                value: function(e) {
                    return Object.keys(t.htmlAttributes).reduce(function(n, r) {
                        var i = t.htmlAttributes[r];
                        return e.hasAttribute(i) && (n[r] = JSON.parse(e.getAttribute(i) || !0)), n
                    }, {})
                }
            }, {
                key: "removeObserver",
                value: function() {
                    this.globalObserver.disconnect()
                }
            }, {
                key: "initDOMLoadedElements",
                value: function() {
                    document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.removeEventListener("load", this.initDOMLoadedElements), Array.from(document.querySelectorAll("[data-simplebar]")).forEach(function(e) {
                        e.SimpleBar || new t(e, t.getElOptions(e))
                    })
                }
            }, {
                key: "defaultOptions",
                get: function() {
                    return {
                        autoHide: !0,
                        forceVisible: !1,
                        classNames: {
                            content: "simplebar-content",
                            scrollContent: "simplebar-scroll-content",
                            scrollbar: "simplebar-scrollbar",
                            track: "simplebar-track"
                        },
                        scrollbarMinSize: 25
                    }
                }
            }, {
                key: "htmlAttributes",
                get: function() {
                    return {
                        autoHide: "data-simplebar-auto-hide",
                        forceVisible: "data-simplebar-force-visible",
                        scrollbarMinSize: "data-simplebar-scrollbar-min-size"
                    }
                }
            }]), t
        }();
        e["default"] = l, l.initHtmlApi()
    }, function(t, e, n) {
        n(29), n(46), t.exports = n(3).Array.from
    }, function(t, e, n) {
        "use strict";
        var r = n(30)(!0);
        n(31)(String, "String", function(t) {
            this._t = String(t), this._i = 0
        }, function() {
            var t, e = this._t,
                n = this._i;
            return n >= e.length ? {
                value: void 0,
                done: !0
            } : (t = r(e, n), this._i += t.length, {
                value: t,
                done: !1
            })
        })
    }, function(t, e, n) {
        var r = n(8),
            i = n(9);
        t.exports = function(t) {
            return function(e, n) {
                var o, s, c = String(i(e)),
                    a = r(n),
                    u = c.length;
                return 0 > a || a >= u ? t ? "" : void 0 : (o = c.charCodeAt(a), 55296 > o || o > 56319 || a + 1 === u || (s = c.charCodeAt(a + 1)) < 56320 || s > 57343 ? t ? c.charAt(a) : o : t ? c.slice(a, a + 2) : s - 56320 + (o - 55296 << 10) + 65536)
            }
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(32),
            i = n(15),
            o = n(18),
            s = n(4),
            c = n(2),
            a = n(13),
            u = n(36),
            l = n(25),
            f = n(45),
            h = n(0)("iterator"),
            d = !([].keys && "next" in [].keys()),
            p = function() {
                return this
            };
        t.exports = function(t, e, n, v, b, y, m) {
            u(n, e, v);
            var g, _, O, E = function(t) {
                    if (!d && t in A) return A[t];
                    switch (t) {
                        case "keys":
                        case "values":
                            return function() {
                                return new n(this, t)
                            }
                    }
                    return function() {
                        return new n(this, t)
                    }
                },
                x = e + " Iterator",
                w = "values" == b,
                S = !1,
                A = t.prototype,
                k = A[h] || A["@@iterator"] || b && A[b],
                j = k || E(b),
                M = b ? w ? E("entries") : j : void 0,
                L = "Array" == e ? A.entries || k : k;
            if (L && (O = f(L.call(new t))) !== Object.prototype && O.next && (l(O, x, !0), r || c(O, h) || s(O, h, p)), w && k && "values" !== k.name && (S = !0, j = function() {
                    return k.call(this)
                }), r && !m || !d && !S && A[h] || s(A, h, j), a[e] = j, a[x] = p, b)
                if (g = {
                        values: w ? j : E("values"),
                        keys: y ? j : E("keys"),
                        entries: M
                    }, m)
                    for (_ in g) _ in A || o(A, _, g[_]);
                else i(i.P + i.F * (d || S), e, g);
            return g
        }
    }, function(t, e) {
        t.exports = !1
    }, function(t, e, n) {
        t.exports = !n(7) && !n(16)(function() {
            return 7 != Object.defineProperty(n(17)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(t, e, n) {
        var r = n(10);
        t.exports = function(t, e) {
            if (!r(t)) return t;
            var n, i;
            if (e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
            if ("function" == typeof(n = t.valueOf) && !r(i = n.call(t))) return i;
            if (!e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function(t, e) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(37),
            i = n(11),
            o = n(25),
            s = {};
        n(4)(s, n(0)("iterator"), function() {
            return this
        }), t.exports = function(t, e, n) {
            t.prototype = r(s, {
                next: i(1, n)
            }), o(t, e + " Iterator")
        }
    }, function(t, e, n) {
        var r = n(6),
            i = n(38),
            o = n(24),
            s = n(14)("IE_PROTO"),
            c = function() {},
            a = function() {
                var t, e = n(17)("iframe"),
                    r = o.length;
                for (e.style.display = "none", n(44).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object</script>"), t.close(), a = t.F; r--;) delete a.prototype[o[r]];
                return a()
            };
        t.exports = Object.create || function(t, e) {
            var n;
            return null !== t ? (c.prototype = r(t), n = new c, c.prototype = null, n[s] = t) : n = a(), void 0 === e ? n : i(n, e)
        }
    }, function(t, e, n) {
        var r = n(5),
            i = n(6),
            o = n(39);
        t.exports = n(7) ? Object.defineProperties : function(t, e) {
            i(t);
            for (var n, s = o(e), c = s.length, a = 0; c > a;) r.f(t, n = s[a++], e[n]);
            return t
        }
    }, function(t, e, n) {
        var r = n(40),
            i = n(24);
        t.exports = Object.keys || function(t) {
            return r(t, i)
        }
    }, function(t, e, n) {
        var r = n(2),
            i = n(20),
            o = n(42)(!1),
            s = n(14)("IE_PROTO");
        t.exports = function(t, e) {
            var n, c = i(t),
                a = 0,
                u = [];
            for (n in c) n != s && r(c, n) && u.push(n);
            for (; e.length > a;) r(c, n = e[a++]) && (~o(u, n) || u.push(n));
            return u
        }
    }, function(t, e, n) {
        var r = n(21);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    }, function(t, e, n) {
        var r = n(20),
            i = n(22),
            o = n(43);
        t.exports = function(t) {
            return function(e, n, s) {
                var c, a = r(e),
                    u = i(a.length),
                    l = o(s, u);
                if (t && n != n) {
                    for (; u > l;)
                        if ((c = a[l++]) != c) return !0
                } else
                    for (; u > l; l++)
                        if ((t || l in a) && a[l] === n) return t || l || 0;
                return !t && -1
            }
        }
    }, function(t, e, n) {
        var r = n(8),
            i = Math.max,
            o = Math.min;
        t.exports = function(t, e) {
            return t = r(t), 0 > t ? i(t + e, 0) : o(t, e)
        }
    }, function(t, e, n) {
        var r = n(1).document;
        t.exports = r && r.documentElement
    }, function(t, e, n) {
        var r = n(2),
            i = n(26),
            o = n(14)("IE_PROTO"),
            s = Object.prototype;
        t.exports = Object.getPrototypeOf || function(t) {
            return t = i(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(19),
            i = n(15),
            o = n(26),
            s = n(47),
            c = n(48),
            a = n(22),
            u = n(49),
            l = n(50);
        i(i.S + i.F * !n(52)(function(t) {
            Array.from(t)
        }), "Array", {
            from: function(t) {
                var e, n, i, f, h = o(t),
                    d = "function" == typeof this ? this : Array,
                    p = arguments.length,
                    v = p > 1 ? arguments[1] : void 0,
                    b = void 0 !== v,
                    y = 0,
                    m = l(h);
                if (b && (v = r(v, p > 2 ? arguments[2] : void 0, 2)), void 0 == m || d == Array && c(m))
                    for (e = a(h.length), n = new d(e); e > y; y++) u(n, y, b ? v(h[y], y) : h[y]);
                else
                    for (f = m.call(h), n = new d; !(i = f.next()).done; y++) u(n, y, b ? s(f, v, [i.value, y], !0) : i.value);
                return n.length = y, n
            }
        })
    }, function(t, e, n) {
        var r = n(6);
        t.exports = function(t, e, n, i) {
            try {
                return i ? e(r(n)[0], n[1]) : e(n)
            } catch (e) {
                var o = t["return"];
                throw void 0 !== o && r(o.call(t)), e
            }
        }
    }, function(t, e, n) {
        var r = n(13),
            i = n(0)("iterator"),
            o = Array.prototype;
        t.exports = function(t) {
            return void 0 !== t && (r.Array === t || o[i] === t)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(5),
            i = n(11);
        t.exports = function(t, e, n) {
            e in t ? r.f(t, e, i(0, n)) : t[e] = n
        }
    }, function(t, e, n) {
        var r = n(51),
            i = n(0)("iterator"),
            o = n(13);
        t.exports = n(3).getIteratorMethod = function(t) {
            return void 0 != t ? t[i] || t["@@iterator"] || o[r(t)] : void 0
        }
    }, function(t, e, n) {
        var r = n(21),
            i = n(0)("toStringTag"),
            o = "Arguments" == r(function() {
                return arguments
            }()),
            s = function(t, e) {
                try {
                    return t[e]
                } catch (t) {}
            };
        t.exports = function(t) {
            var e, n, c;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = s(e = Object(t), i)) ? n : o ? r(e) : "Object" == (c = r(e)) && "function" == typeof e.callee ? "Arguments" : c
        }
    }, function(t, e, n) {
        var r = n(0)("iterator"),
            i = !1;
        try {
            var o = [7][r]();
            o["return"] = function() {
                i = !0
            }, Array.from(o, function() {
                throw 2
            })
        } catch (t) {}
        t.exports = function(t, e) {
            if (!e && !i) return !1;
            var n = !1;
            try {
                var o = [7],
                    s = o[r]();
                s.next = function() {
                    return {
                        done: n = !0
                    }
                }, o[r] = function() {
                    return s
                }, t(o)
            } catch (t) {}
            return n
        }
    }, function(t, e, n) {
        var r, i, o;
        ! function(n, s) {
            i = [], r = s, void 0 !== (o = "function" == typeof r ? r.apply(e, i) : r) && (t.exports = o)
        }(0, function() {
            "use strict";

            function t() {
                if ("undefined" == typeof document) return 0;
                var t, e = document.body,
                    n = document.createElement("div"),
                    r = n.style;
                return r.position = "absolute", r.top = r.left = "-9999px", r.width = r.height = "100px", r.overflow = "scroll", e.appendChild(n), t = n.offsetWidth - n.clientWidth, e.removeChild(n), t
            }
            return t
        })
    }, function(t, e, n) {
        (function(e) {
            function n(t, e, n) {
                function i(e) {
                    var n = v,
                        r = b;
                    return v = b = void 0, w = e, m = t.apply(r, n)
                }

                function o(t) {
                    return w = t, g = setTimeout(l, e), S ? i(t) : m
                }

                function a(t) {
                    var n = t - x,
                        r = t - w,
                        i = e - n;
                    return A ? O(i, y - r) : i
                }

                function u(t) {
                    var n = t - x,
                        r = t - w;
                    return void 0 === x || n >= e || 0 > n || A && r >= y
                }

                function l() {
                    var t = E();
                    return u(t) ? f(t) : void(g = setTimeout(l, a(t)))
                }

                function f(t) {
                    return g = void 0, k && v ? i(t) : (v = b = void 0, m)
                }

                function h() {
                    void 0 !== g && clearTimeout(g), w = 0, v = x = b = g = void 0
                }

                function d() {
                    return void 0 === g ? m : f(E())
                }

                function p() {
                    var t = E(),
                        n = u(t);
                    if (v = arguments, b = this, x = t, n) {
                        if (void 0 === g) return o(x);
                        if (A) return g = setTimeout(l, e), i(x)
                    }
                    return void 0 === g && (g = setTimeout(l, e)), m
                }
                var v, b, y, m, g, x, w = 0,
                    S = !1,
                    A = !1,
                    k = !0;
                if ("function" != typeof t) throw new TypeError(c);
                return e = s(e) || 0, r(n) && (S = !!n.leading, A = "maxWait" in n, y = A ? _(s(n.maxWait) || 0, e) : y, k = "trailing" in n ? !!n.trailing : k), p.cancel = h, p.flush = d, p
            }

            function r(t) {
                var e = "undefined" == typeof t ? "undefined" : _typeof(t);
                return !!t && ("object" == e || "function" == e)
            }

            function i(t) {
                return !!t && "object" == ("undefined" == typeof t ? "undefined" : _typeof(t))
            }

            function o(t) {
                return "symbol" == ("undefined" == typeof t ? "undefined" : _typeof(t)) || i(t) && g.call(t) == u
            }

            function s(t) {
                if ("number" == typeof t) return t;
                if (o(t)) return a;
                if (r(t)) {
                    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = r(e) ? e + "" : e
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = t.replace(l, "");
                var n = h.test(t);
                return n || d.test(t) ? p(t.slice(2), n ? 2 : 8) : f.test(t) ? a : +t
            }
            var c = "Expected a function",
                a = NaN,
                u = "[object Symbol]",
                l = /^\s+|\s+$/g,
                f = /^[-+]0x[0-9a-f]+$/i,
                h = /^0b[01]+$/i,
                d = /^0o[0-7]+$/i,
                p = parseInt,
                v = "object" == ("undefined" == typeof e ? "undefined" : _typeof(e)) && e && e.Object === Object && e,
                b = "object" == ("undefined" == typeof self ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
                y = v || b || Function("return this")(),
                m = Object.prototype,
                g = m.toString,
                _ = Math.max,
                O = Math.min,
                E = function() {
                    return y.Date.now()
                };
            t.exports = n
        }).call(e, n(55))
    }, function(t, e) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (t) {
            "object" == ("undefined" == typeof window ? "undefined" : _typeof(window)) && (n = window)
        }
        t.exports = n
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return parseFloat(t) || 0
        }

        function i(t) {
            return Array.prototype.slice.call(arguments, 1).reduce(function(e, n) {
                return e + r(t["border-" + n + "-width"])
            }, 0)
        }

        function o(t) {
            for (var e = ["top", "right", "bottom", "left"], n = {}, i = 0, o = e; i < o.length; i += 1) {
                var s = o[i],
                    c = t["padding-" + s];
                n[s] = r(c)
            }
            return n
        }

        function s(t) {
            var e = t.getBBox();
            return f(0, 0, e.width, e.height)
        }

        function c(t) {
            var e = t.clientWidth,
                n = t.clientHeight;
            if (!e && !n) return E;
            var s = getComputedStyle(t),
                c = o(s),
                u = c.left + c.right,
                l = c.top + c.bottom,
                h = r(s.width),
                d = r(s.height);
            if ("border-box" === s.boxSizing && (Math.round(h + u) !== e && (h -= i(s, "left", "right") + u), Math.round(d + l) !== n && (d -= i(s, "top", "bottom") + l)), !a(t)) {
                var p = Math.round(h + u) - e,
                    v = Math.round(d + l) - n;
                1 !== Math.abs(p) && (h -= p), 1 !== Math.abs(v) && (d -= v)
            }
            return f(c.left, c.top, h, d)
        }

        function a(t) {
            return t === document.documentElement
        }

        function u(t) {
            return d ? x(t) ? s(t) : c(t) : E
        }

        function l(t) {
            var e = t.x,
                n = t.y,
                r = t.width,
                i = t.height,
                o = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
                s = Object.create(o.prototype);
            return O(s, {
                x: e,
                y: n,
                width: r,
                height: i,
                top: n,
                right: e + r,
                bottom: i + n,
                left: e
            }), s
        }

        function f(t, e, n, r) {
            return {
                x: t,
                y: e,
                width: n,
                height: r
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var h = function() {
                function t(t, e) {
                    var n = -1;
                    return t.some(function(t, r) {
                        return t[0] === e && (n = r, !0)
                    }), n
                }
                return "undefined" != typeof Map ? Map : function() {
                    function e() {
                        this.__entries__ = []
                    }
                    var n = {
                        size: {}
                    };
                    return n.size.get = function() {
                        return this.__entries__.length
                    }, e.prototype.get = function(e) {
                        var n = t(this.__entries__, e),
                            r = this.__entries__[n];
                        return r && r[1]
                    }, e.prototype.set = function(e, n) {
                        var r = t(this.__entries__, e);
                        ~r ? this.__entries__[r][1] = n : this.__entries__.push([e, n])
                    }, e.prototype["delete"] = function(e) {
                        var n = this.__entries__,
                            r = t(n, e);
                        ~r && n.splice(r, 1)
                    }, e.prototype.has = function(e) {
                        return !!~t(this.__entries__, e)
                    }, e.prototype.clear = function() {
                        this.__entries__.splice(0)
                    }, e.prototype.forEach = function(t, e) {
                        void 0 === e && (e = null);
                        for (var n = 0, r = this.__entries__; n < r.length; n += 1) {
                            var i = r[n];
                            t.call(e, i[1], i[0])
                        }
                    }, Object.defineProperties(e.prototype, n), e
                }()
            }(),
            d = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
            p = function() {
                return "function" == typeof requestAnimationFrame ? requestAnimationFrame : function(t) {
                    return setTimeout(function() {
                        return t(Date.now())
                    }, 1e3 / 60)
                }
            }(),
            v = 2,
            b = function(t, e) {
                function n() {
                    o && (o = !1, t()), s && i()
                }

                function r() {
                    p(n)
                }

                function i() {
                    var t = Date.now();
                    if (o) {
                        if (v > t - c) return;
                        s = !0
                    } else o = !0, s = !1, setTimeout(r, e);
                    c = t
                }
                var o = !1,
                    s = !1,
                    c = 0;
                return i
            },
            y = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
            m = "undefined" != typeof navigator && /Trident\/.*rv:11/.test(navigator.userAgent),
            g = "undefined" != typeof MutationObserver && !m,
            _ = function() {
                this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = b(this.refresh.bind(this), 20)
            };
        _.prototype.addObserver = function(t) {
            ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
        }, _.prototype.removeObserver = function(t) {
            var e = this.observers_,
                n = e.indexOf(t);
            ~n && e.splice(n, 1), !e.length && this.connected_ && this.disconnect_()
        }, _.prototype.refresh = function() {
            this.updateObservers_() && this.refresh()
        }, _.prototype.updateObservers_ = function() {
            var t = this.observers_.filter(function(t) {
                return t.gatherActive(), t.hasActive()
            });
            return t.forEach(function(t) {
                return t.broadcastActive()
            }), t.length > 0
        }, _.prototype.connect_ = function() {
            d && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), g ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, _.prototype.disconnect_ = function() {
            d && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, _.prototype.onTransitionEnd_ = function(t) {
            var e = t.propertyName;
            y.some(function(t) {
                return !!~e.indexOf(t)
            }) && this.refresh()
        }, _.getInstance = function() {
            return this.instance_ || (this.instance_ = new _), this.instance_
        }, _.instance_ = null;
        var O = function(t, e) {
                for (var n = 0, r = Object.keys(e); n < r.length; n += 1) {
                    var i = r[n];
                    Object.defineProperty(t, i, {
                        value: e[i],
                        enumerable: !1,
                        writable: !1,
                        configurable: !0
                    })
                }
                return t
            },
            E = f(0, 0, 0, 0),
            x = function() {
                return "undefined" != typeof SVGGraphicsElement ? function(t) {
                    return t instanceof SVGGraphicsElement
                } : function(t) {
                    return t instanceof SVGElement && "function" == typeof t.getBBox
                }
            }(),
            w = function(t) {
                this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = f(0, 0, 0, 0), this.target = t
            };
        w.prototype.isActive = function() {
            var t = u(this.target);
            return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
        }, w.prototype.broadcastRect = function() {
            var t = this.contentRect_;
            return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
        };
        var S = function(t, e) {
                var n = l(e);
                O(this, {
                    target: t,
                    contentRect: n
                })
            },
            A = function(t, e, n) {
                if ("function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
                this.activeObservations_ = [], this.observations_ = new h, this.callback_ = t, this.controller_ = e, this.callbackCtx_ = n
            };
        A.prototype.observe = function(t) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(t instanceof Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var e = this.observations_;
                e.has(t) || (e.set(t, new w(t)), this.controller_.addObserver(this), this.controller_.refresh())
            }
        }, A.prototype.unobserve = function(t) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(t instanceof Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var e = this.observations_;
                e.has(t) && (e["delete"](t), e.size || this.controller_.removeObserver(this))
            }
        }, A.prototype.disconnect = function() {
            this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, A.prototype.gatherActive = function() {
            var t = this;
            this.clearActive(), this.observations_.forEach(function(e) {
                e.isActive() && t.activeObservations_.push(e)
            })
        }, A.prototype.broadcastActive = function() {
            if (this.hasActive()) {
                var t = this.callbackCtx_,
                    e = this.activeObservations_.map(function(t) {
                        return new S(t.target, t.broadcastRect())
                    });
                this.callback_.call(t, e, t), this.clearActive()
            }
        }, A.prototype.clearActive = function() {
            this.activeObservations_.splice(0)
        }, A.prototype.hasActive = function() {
            return this.activeObservations_.length > 0
        };
        var k = "undefined" != typeof WeakMap ? new WeakMap : new h,
            j = function L(t) {
                if (!(this instanceof L)) throw new TypeError("Cannot call a class as a function");
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                var e = _.getInstance(),
                    n = new A(t, e, this);
                k.set(this, n)
            };
        ["observe", "unobserve", "disconnect"].forEach(function(t) {
            j.prototype[t] = function() {
                return (e = k.get(this))[t].apply(e, arguments);
                var e
            }
        });
        var M = function() {
            return "undefined" != typeof ResizeObserver ? ResizeObserver : j
        }();
        e["default"] = M
    }, function(t, e) {}, function(t, e, n) {
        "use strict";

        function r(t) {
            if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(t)
        }
        var i = Object.getOwnPropertySymbols,
            o = Object.prototype.hasOwnProperty,
            s = Object.prototype.propertyIsEnumerable;
        t.exports = function() {
            try {
                if (!Object.assign) return !1;
                var t = new String("abc");
                if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                for (var e = {}, n = 0; 10 > n; n++) e["_" + String.fromCharCode(n)] = n;
                if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                        return e[t]
                    }).join("")) return !1;
                var r = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                    r[t] = t
                }), "abcdefghijklmnopqrst" === Object.keys(_extends({}, r)).join("")
            } catch (t) {
                return !1
            }
        }() ? Object.assign : function(t, e) {
            for (var n, c, a = r(t), u = 1; u < arguments.length; u++) {
                n = Object(arguments[u]);
                for (var l in n) o.call(n, l) && (a[l] = n[l]);
                if (i) {
                    c = i(n);
                    for (var f = 0; f < c.length; f++) s.call(n, c[f]) && (a[c[f]] = n[c[f]])
                }
            }
            return a
        }
    }])["default"]
});
/* <<< file end: js/node_modules/simplebar/dist/simplebar.js */

//# map link was there [simplebar.js.map]
/* >>> file start: js/mainPage2018/customScroll.js */
//= require js/node_modules/simplebar/dist/simplebar.js
LJ.injectStyle('/* >>> file start: stc/mainpage2018/simplebar.css */\n[data-simplebar]{position:relative;z-index:0;overflow:hidden!important;max-height:inherit;-webkit-overflow-scrolling:touch}[data-simplebar=init]{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.simplebar-scroll-content{overflow-x:hidden!important;overflow-y:scroll;min-width:100%!important;max-height:inherit!important;box-sizing:content-box!important}.simplebar-content{overflow-y:hidden!important;overflow-x:scroll;box-sizing:border-box!important;min-height:100%!important;padding-bottom:0}.simplebar-track{z-index:1;position:absolute;right:0;bottom:0;width:11px}.simplebar-scrollbar{position:absolute;right:2px;width:7px;min-height:10px}.simplebar-scrollbar:before{position:absolute;content:\"\";background:#fff;border-radius:7px;left:0;right:0;opacity:0;-webkit-transition:opacity .2s linear;transition:opacity .2s linear}.simplebar-track .simplebar-scrollbar.visible:before,.simplebar-track:hover .simplebar-scrollbar:before{opacity:.5;-webkit-transition:opacity 0 linear;transition:opacity 0 linear}.simplebar-track.vertical{display:none;top:0}.simplebar-track.vertical .simplebar-scrollbar:before{top:2px;bottom:2px}.simplebar-track.horizontal{left:0;width:auto;height:8px;border-radius:7px;background:rgba(255,255,255,.2)}.simplebar-track.horizontal .simplebar-scrollbar{top:1px!important;height:6px!important}.simplebar-track.horizontal .simplebar-scrollbar:before{height:100%;left:2px;right:2px;background:rgba(255,255,255,.2);opacity:1}.horizontal.simplebar-track .simplebar-scrollbar{right:auto;top:2px;height:8px;min-height:0;min-width:10px;width:auto}\n/* <<< file end: stc/mainpage2018/simplebar.css */\n\n/*# sourceMappingURL=simplebar.css.map */\n');
! function(t) {
    return t
}(),
function() {
    "use strict";

    function t(t, n, o) {
        var i = {};
        return i.buildScrollbarTypeA = function() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                i = {
                    hasRoomForScroll: {}
                },
                e = t.jQBlockContainer,
                r = (new SimpleBar(e.find(".js--simplebarHost")[0], {
                    autoHide: LJ.Support.isMobile()
                }), e.find(".simplebar-content").addClass("js--navRestrictor")),
                l = e.find(".js--navContainerList"),
                a = !1,
                c = function() {
                    a = l.width() > r.width(), e.find(".simplebar-track.horizontal").toggle(a)
                },
                s = function() {
                    var t = {
                        onLeft: !1,
                        onRight: !1
                    };
                    if (a) {
                        var n = e[0].getBoundingClientRect();
                        if (n.top > window.innerHeight || n.top + n.height < 0) return;
                        var o = l[0].getBoundingClientRect(),
                            c = r[0].getBoundingClientRect(),
                            s = r[0].scrollLeft;
                        s > 0 && (t.onLeft = !0), s < o.width - c.width && (t.onRight = !0)
                    }
                    i.hasRoomForScroll.onLeft = t.onLeft, i.hasRoomForScroll.onRight = t.onRight
                };
            return o.addEventListener("resize", LJ.Function.debounce(c, 300)), n(s, 300), {
                scrollbarState: i,
                remeasure: c
            }
        }, i
    }
    t.$inject = ["$timeout", "$interval", "$window"], angular.module("MainPage2018.CustomScroll", ["Medius.Utils"]).factory("customScrollService", t)
}();
/* <<< file end: js/mainPage2018/customScroll.js */

//# map link was there [customScroll.js.map]
/* >>> file start: js/mainPage2018/photoBlock.js */
var _extends = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = arguments[n];
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
    }
    return e
};
//= require js/medius/utils.js
//= require js/mainPage2018/customScroll.js
! function(e) {
    return e
}(),
function() {
    "use strict";

    function e(e, n, r, i, o, a) {
        var l = {};
        return l.initCardProps = function() {
            var i = n.call("medius.get_public_items", {
                category: "photo"
            }).then(function(n) {
                var i = n.items || [];
                if (0 !== i.length) {
                    var o = i.map(function(n) {
                        var i = [t.COMMON_VERTICAL_TEXT_PHOTO, t.PHOTO],
                            o = n.cards || [];
                        if (!o.length) return e.resolve(null);
                        var a = [];
                        i.forEach(function(e, n) {
                            var t = o.find(function(n) {
                                return n.type === e
                            });
                            a[n] = t
                        });
                        var l = a.filter(function(e) {
                            return e
                        });
                        if (l.length < i.length) return e.resolve(null);
                        var c = i.map(function(e) {
                            return r.mediusPostDataToCardPropsTypeB({
                                postData: n,
                                desiredCardTypes: [e]
                            }).then(function(e) {
                                var n = _extends({}, e, {
                                    mode: "placeholder"
                                });
                                return n
                            })["catch"](function() {
                                return null
                            })
                        });
                        return e.all(c).then(function(e) {
                            var n = {};
                            return i.forEach(function(t, r) {
                                n[t] = e[r]
                            }), n
                        })["catch"](function() {
                            return null
                        })
                    });
                    return e.all(o).then(function(e) {
                        var n = e.filter(function(e) {
                            return e
                        });
                        return n
                    })
                }
            });
            return i
        }, l
    }

    function n(e, n, r, i, o, a) {
        var l = this;
        l.mainLineItems = [], l.mainLine = {}, l.mainLine.scrollableContainerStyle = {
            left: 0
        }, l.chosenItemIndex = 0, l.handlers = {
            navItem: {},
            navArrow: {}
        };
        var c = void 0;
        o.initCardProps().then(function(e) {
            e && (c = e, c.length && r.show(), l.mainLineItems = c.map(function(e) {
                return {
                    cardProps: {
                        photo: e[t.PHOTO],
                        text: e[t.COMMON_VERTICAL_TEXT_PHOTO]
                    }
                }
            }), l.navPreviewItems = c.map(function(e) {
                return {
                    imageURL: e[t.PHOTO].imageUrl
                }
            }))
        }), l.ensureCurrentNavItemInView = function() {
            var e = r.find(".js--navRestrictor"),
                n = e[0].getBoundingClientRect(),
                t = r.find(".js--navItem"),
                i = t[l.chosenItemIndex],
                o = i.getBoundingClientRect(),
                a = {
                    left: o.left - n.left,
                    right: o.right - n.right
                };
            a.left < 0 ? e[0].scrollLeft += a.left : a.right > 0 && (e[0].scrollLeft += a.right)
        }, l.navItemIsHighlighted = function(e) {
            var n = l.navPreviewItems || [],
                t = n.indexOf(e);
            return -1 === t ? !1 : l.chosenItemIndex === t
        }, l.render = function() {
            var e = r.find(".js--mainLineItem");
            if (e.length) {
                var n = e[0].getBoundingClientRect().width;
                l.mainLine.scrollableContainerStyle.left = -1 * n * l.chosenItemIndex
            }
        }, l.selectItem = function(e) {
            l.chosenItemIndex = e
        }, l.handlers.navItem.click = function(e, n) {
            e.preventDefault();
            var t = l.navPreviewItems || [],
                r = t.indexOf(n);
            return -1 === r ? !1 : (l.selectItem(r), void l.render())
        }, l.handlers.navArrow.click = function(e, n) {
            e.preventDefault();
            var t = l.chosenItemIndex + 1 * ("left" === n ? -1 : 1);
            return 0 > t || t >= l.navPreviewItems.length ? void l.ensureCurrentNavItemInView() : (l.selectItem(t), l.ensureCurrentNavItemInView(), void l.render())
        };
        var u = {},
            s = LJ.Function.debounce(function() {
                u.transitionProperty = null
            }, 300),
            f = function() {
                var e = r.find(".js--slidingTrain");
                u = (e[0] || {}).style || {}, u.transitionProperty = "none", l.render(), s()
            };
        angular.element(e).on("resize", f), i(function() {
            var e = a.buildScrollbarTypeA({
                    jQBlockContainer: r
                }),
                t = e.scrollbarState;
            l.hasRoomForScroll = t.hasRoomForScroll, n.$watch(function() {
                return l.navPreviewItems
            }, function() {
                i(function() {
                    e.remeasure()
                })
            })
        })
    }
    n.$inject = ["$window", "$scope", "$element", "$timeout", "mainPagePhotoBlockService", "customScrollService"], e.$inject = ["$q", "Api", "mediusUtils", "$timeout", "$sce", "$window"], angular.module("MainPage2018.Blocks.Photo", ["Medius.Utils", "MainPage2018.CustomScroll"]).controller("PhotoBlockCtrl", n).factory("mainPagePhotoBlockService", e);
    var t = LJ.Config.PostCards.CARD_TYPES
}();
/* <<< file end: js/mainPage2018/photoBlock.js */

//# map link was there [photoBlock.js.map]
/* >>> file start: js/ratings/utils.js */
var _extends = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
    }
    return t
};
! function(t) {
    return t
}(),
function() {
    "use strict";

    function t(t, e, n) {
        var r = {};
        return r.getRatingEntriesTypeA = function(r) {
            var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                o = (LJ.get("rating_blacklist") || LJ.get("rating") || []).map(function(t) {
                    return "" + t
                }),
                a = LJ.get("rating_readlist") || [],
                u = LJ.Util.getRatingRegion("cyr"),
                g = function(t) {
                    var e = o.some(function(e) {
                            return "" + t.journal_id == "" + e || "" + t.poster_id == "" + e
                        }),
                        n = a.some(function(e) {
                            return "" + t.journal_id == "" + e[0] && "" + t.ditem_id == "" + e[1]
                        });
                    return !e && !n
                },
                l = e.defer(),
                s = i.offset || 0,
                c = [],
                f = 60,
                d = Math.floor(s / f),
                v = d,
                p = 9,
                _ = i.maxRetries || p,
                h = function y() {
                    if (v - d > _) return n.warn("Could not query-get enough rating items"), l.resolve(c);
                    var e = {
                        country: u,
                        pagesize: f,
                        page: v,
                        body_length: 150
                    };
                    return i.categoryID && (e.category_id = i.categoryID), t.call("homepage.get_rating", e).then(function() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                            e = t.rating || [];
                        if (0 === e.length) return n.warn("Could not query-get enough rating items"), l.resolve(c);
                        var i = e.map(function(e) {
                            return _extends({}, e, {
                                likes_signature: t.likes_signature
                            })
                        });
                        return i = i.filter(function(t) {
                            return t.position > s
                        }).filter(g), c = c.concat(i), c.length < r ? (v++, y()) : l.resolve(c)
                    })
                };
            return h(), l.promise
        }, r
    }
    t.$inject = ["Api", "$q", "$log"], angular.module("LJ.Rating.Utils", []).factory("ratingUtils", t)
}();
/* <<< file end: js/ratings/utils.js */

//# map link was there [utils.js.map]
/* >>> file start: js/core/angular/activity.js */
! function() {
    "use strict";

    function t(t, n) {
        function c() {
            return u
        }

        function e(t) {
            u = t
        }

        function i() {
            n.cancel(o), e(!0), o = n(e.bind(this, !1), 9e5)
        }
        var u, o;
        return i(), t.on("click touchstart touchend keydown mousemove mousewheel", LJ.Function.debounce(i, 100, !0)), {
            isActive: c
        }
    }
    angular.module("LJ.Activity", []), angular.module("LJ.Activity").factory("Activity", t), t.$inject = ["$document", "$timeout"]
}();
/* <<< file end: js/core/angular/activity.js */

//# map link was there [activity.js.map]
/* >>> file start: js/core/angular/api.js */
//!= require js/core/angular/messages.js
//= require js/core/angular/activity.js
! function() {
    "use strict";

    function e(e, n, t, r, a, c) {
        function i(e, n) {
            return "undefined" == typeof n ? e : e + angular.toJson(s(n))
        }

        function s(e) {
            var n;
            return angular.isObject(e) ? (n = {}, Object.keys(e).sort().forEach(function(t) {
                n[t] = s(e[t])
            }), n) : e
        }

        function o(e, n) {
            f.remove(i(e, n))
        }

        function u(n, s, o, u) {
            var g, l, p = r.defer(),
                d = {
                    cache: !1,
                    silent: !1,
                    meta: !1
                },
                m = !1;
            return c.isActive() ? (angular.isObject(s) && null !== s || (s = {}), angular.isObject(o) && (u = o, o = null), u = angular.extend(d, u || {}), l = i(n, s), u.cache && (g = f.get(l), g && (m = !0)), m || (g = p.promise, LJ.Api.call(n, s, function(n) {
                e(function() {
                    n.error ? p.reject(n.error) : p.resolve(n), t.$apply()
                }, 0)
            }), u.cache && f.put(l, g)), LJ.Event.trigger("api:request:change", n, !0), g.then(function() {
                LJ.Event.trigger("api:request:change", n, !1)
            }), u.silent || g.then(function(e) {
                var n = {};
                "undefined" != typeof e.message && (angular.isString(e.message) ? (n.body = e.message, n.type = "success") : (n.body = e.message.content, n.type = "success"), a.add(n))
            }, function(e) {
                "undefined" != typeof e.message && 1 !== e.code && a.error({
                    body: e.message
                })
            }), u.meta && (g = g.then(function(e) {
                return {
                    response: e,
                    fromCache: m
                }
            })), angular.isFunction(o) && g.then(o), g) : (p.reject(), p.promise)
        }
        var g = {
                call: u,
                invalidate: o
            },
            f = n("LJApiPromises");
        return g
    }
    angular.module("LJ.Api", ["LJ.Messages", "LJ.Activity"]).factory("Api", e), e.$inject = ["$timeout", "$cacheFactory", "$rootScope", "$q", "Messages", "Activity"]
}();
/* <<< file end: js/core/angular/api.js */

//# map link was there [api.js.map]
/* >>> file start: js/feed/promoControl.js */
//= require js/core/angular/api.js
Site.page.template['angular/widgets/feedPromo/promoControl.ng.tmpl'] = '<span\n    class=\"feedpromo-control\"\n    >\n    <span\n        class=\"feedpromo-control__title\"\n        lj-ml=\"feedpromo.complaint.title\"\n        >\n        </span>\n    <span\n        class=\"feedpromo-control__items\"\n        >\n        <span\n            class=\"\n                feedpromo-control__item\n                feedpromo-control__item--why\n                \"\n            lj-ml=\"feedpromo.complaint.help\"\n            ></span>\n        <span\n            ng-if=\"promoControl.profileInfo\"\n            class=\"\n                feedpromo-control__item\n                feedpromo-control__item--hide\n                \"\n            lj-ml=\"feedpromo.complaint.hide\"\n            ng-click=\"promoControl.showComplaintForm()\"\n            ></span>\n        <span\n            class=\"\n                feedpromo-control__item\n                feedpromo-control__item--buy\n                \"\n            lj-ml=\"feedpromo.complaint.buy\"\n            ></span>\n    </span>\n</span>\n';
Site.page.template['angular/widgets/feedPromo/complaintForm.ng.tmpl'] = '<div\n    class=\"\n        feedpromo-complaint\n        feedpromo-complaint--hidden\n        \"\n    ng-class=\"{\'feedpromo-complaint--hidden\': !complaintForm.shown()}\"\n    >\n    <form class=\"feedpromo-complaint__form\">\n        <span\n            class=\"feedpromo-complaint__close\"\n            ng-click=\"complaintForm.hide()\"\n            ><svg class=\"svgicon\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"30px\" height=\"30px\" viewBox=\"0 0 30 30\"><polygon points=\"30,2.728 27.272,0 15,12.273 2.727,0 0,2.728 12.272,15 0,27.273 2.727,30 15,17.728 27.272,30 30,27.273 17.727,15\"></polygon></svg></span>\n        <h3\n            class=\"feedpromo-complaint__title\"\n            lj-ml=\"feedpromo.complaint.popup.title\"\n            ></h3>\n        <fieldset class=\"form__field\">\n            <label class=\"form__label\">\n                <input\n                    class=\"\n                        radio\n                        custom--label-input\n                        \"\n                    id=\"reason-1\"\n                    type=\"radio\"\n                    name=\"complaint\"\n                    value=\"1\"\n                    ng-model=\"complaintForm.reason\"\n                    >\n                <span\n                    class=\"\n                        custom--label\n                        custom--label-huge\n                        custom--label-blue\n                        custom--label-bold\n                        \"\n                    for=\"reason-1\"\n                    lj-ml=\"feedpromo.complaint.reason.1\"\n                    ></span>\n            </label>\n        </fieldset>\n        <fieldset class=\"form__field\">\n            <label class=\"form__label\">\n                <input\n                    class=\"\n                        radio\n                        custom--label-input\n                        \"\n                    id=\"reason-2\"\n                    type=\"radio\"\n                    name=\"complaint\"\n                    value=\"2\"\n                    ng-model=\"complaintForm.reason\"\n                    >\n                <span\n                    class=\"\n                        custom--label\n                        custom--label-huge\n                        custom--label-blue\n                        custom--label-bold\n                        \"\n                    for=\"reason-2\"\n                    lj-ml=\"feedpromo.complaint.reason.2\"\n                    ></span>\n            </label>\n        </fieldset>\n        <fieldset class=\"form__field\">\n            <label class=\"form__label\">\n                <input\n                    class=\"\n                        radio\n                        custom--label-input\n                        \"\n                    id=\"reason-3\"\n                    type=\"radio\"\n                    name=\"complaint\"\n                    value=\"3\"\n                    ng-model=\"complaintForm.reason\"\n                    >\n                <span\n                    class=\"\n                        custom--label\n                        custom--label-huge\n                        custom--label-blue\n                        custom--label-bold\n                        \"\n                    for=\"reason-3\"\n                    lj-ml=\"feedpromo.complaint.reason.3\"\n                    ></span>\n            </label>\n        </fieldset>\n        <button\n            class=\"\n                flatbutton\n                flatbutton--max\n                flatbutton--bold\n                flatbutton--large\n                flatbutton--neutral-blue\n                \"\n            ng-click=\"complaintForm.complain()\"\n            lj-ml=\"feedpromo.complaint.delete\"\n            ></button>\n    </form>\n</div>\n';
Site.page.template['angular/widgets/feedPromo/closedPromo.ng.tmpl'] = '<div\n    class=\"feedpromo-closed\"\n    lj-ml=\"feedpromo.complaint.hidden\"\n    ></div>\n';
//= require_ml feedpromo.complaint.title
//= require_ml feedpromo.complaint.buy
//= require_ml feedpromo.complaint.help
//= require_ml feedpromo.complaint.hide
//= require_ml feedpromo.complaint.popup.title
//= require_ml feedpromo.complaint.delete
//= require_ml feedpromo.complaint.reason.1
//= require_ml feedpromo.complaint.reason.2
//= require_ml feedpromo.complaint.reason.3
//= require_ml feedpromo.complaint.hidden
! function(o) {
    return o
}(),
function() {
    "use strict";

    function o(o) {
        function n(n, e) {
            function t(t, l) {
                if (this.promoId && this.journalId) {
                    var a = this.journalId + "-" + this.promoId;
                    r.hasOwnProperty(a) || (t && l.preventDefault(), r[a] = !0, LJ.Api.call(i.ADD_STAT, {
                        journal: this.journalId,
                        promoid: this.promoId,
                        type: "click",
                        "class": n["class"] || "feedpromo"
                    }).done(function() {
                        t && (o.location.href = e.attr("href"))
                    }))
                }
            }
            e.on("click", function(o) {
                n.noRedirects || o.metaKey || o.ctrlKey ? t.call(n) : t.call(n, !0, o)
            }).on("mousedown", function(o) {
                1 !== o.which && t.call(n)
            }).on("keydown", function(o) {
                13 === o.keyCode && t.call(n, !0, o)
            })
        }
        var r = {};
        return {
            link: n,
            scope: {
                promoId: "=feedPromoClickPromoId",
                journalId: "=feedPromoClickJournalId",
                "class": "@feedPromoClickClass",
                noRedirects: "=feedPromoClickNoRedirects"
            }
        }
    }

    function n(o) {
        function n(n, r, e, t) {
            t.setParams({
                promoId: n.promoId,
                itemId: n.itemId,
                journalId: n.journalId,
                "class": n["class"] || "feedpromo"
            });
            var l = !0;
            angular.isDefined(n.sendStatsOnLink) && (l = n.sendStatsOnLink), l && t.sendViewStat(), o.addElement(n.promoId, r.closest(n.entrySelector))
        }
        return {
            link: n,
            scope: {
                promoId: "=feedPromoControlPromoId",
                itemId: "=feedPromoControlItemId",
                journalId: "=feedPromoControlJournalId",
                "class": "@feedPromoControlClass",
                entrySelector: "@feedPromoControlEntrySelector",
                sendStatsOnLink: "=controlSendStatsOnLink"
            },
            templateUrl: "promoControl.ng.tmpl",
            controller: r,
            controllerAs: "promoControl"
        }
    }

    function r(o, n) {
        var r = this;
        r.profileInfo = Site.remote, r.showComplaintForm = function() {
            return o.showForm(r.params)
        }, r.setParams = function(o) {
            r.params = o
        }, r.sendViewStat = function() {
            r.params.journalId && r.params.promoId && n.call(i.ADD_STAT, {
                journal: r.params.journalId,
                promoid: r.params.promoId,
                "class": r.params["class"],
                type: "view"
            }, {
                silent: !0
            })
        }
    }

    function e() {
        return {
            templateUrl: "complaintForm.ng.tmpl",
            controller: t,
            controllerAs: "complaintForm"
        }
    }

    function t(o) {
        var n = this;
        n.reason = 1, n.shown = o.formShown, n.complain = function() {
            return o.complain(n.reason)
        }, n.hide = o.hideForm
    }

    function l(o, n, r) {
        function e(o, n) {
            u[o] = n
        }

        function t(o) {
            c = o.promoId, m = o.itemId, d = o.journalId, s = !0
        }

        function l() {
            s = !1
        }

        function i(o) {
            l(), a(), Promise.all([r.call("friendsfeed.complain_promo", {
                reason: o,
                promoid: c
            }), r.call("friendsfeed.hide_promo", {
                journal: d,
                itemid: m,
                promoid: c
            })])
        }

        function a() {
            var o = u[c];
            o.replaceWith(p)
        }
        var c = void 0,
            m = void 0,
            d = void 0,
            s = !1,
            p = o(n.get("closedPromo.ng.tmpl"))({}),
            u = {};
        return {
            formShown: function() {
                return s
            },
            showForm: t,
            hideForm: l,
            complain: i,
            addElement: e
        }
    }
    l.$inject = ["$compile", "$templateCache", "Api"], r.$inject = ["complaintService", "Api"], t.$inject = ["complaintService"], n.$inject = ["complaintService"], o.$inject = ["$window"], angular.module("Feedpromo.Control", ["LJ.Api", "LJ.Templates"]), angular.module("Feedpromo.Control").run(function() {
        angular.element("[ng-app]").append("<div promo-complaint-form></div>")
    }).factory("complaintService", l).controller("promoControlCtrl", r).controller("complaintFormCtrl", t).directive("feedPromoControl", n).directive("feedPromoClick", o).directive("promoComplaintForm", e);
    var i = {
        ADD_STAT: "promo.add_stat"
    };
    ! function(o) {
        return o
    }()
}();
/* <<< file end: js/feed/promoControl.js */

//# map link was there [promoControl.js.map]
/* >>> file start: js/widgets/angular/promo.js */
var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
};
//= require js/core/angular/api.js
//= require js/feed/promoControl.js
LJ.UI.registerTemplate('templates-Widgets-entryunit-v3-entryunit', " <article class=\" entryunit js--entryunit {{if $data.selfpromo}} entryunit--promo entryunit--selfpromo {{/if}} {{if $data.commpromo}} entryunit--promo entryunit--commpromo {{/if}} {{if $data.mustread}} entryunit--mustread {{/if}} {{if $data.discoverypost}} entryunit--discovery {{/if}} {{if $data.delta}} {{if $data.delta < 0}} entryunit--state-down {{else}} entryunit--state-up {{/if}} {{/if}} {{if ($data.position == 1) || ($data.position == 2) || ($data.position == 3)}} js--state-topthree {{/if}} \" {{if $data.is_new_ratings}} ng-controller=\"ArticleCtrl as article\" {{/if}} lj-screenable=\"social:widgets:parse\"> <div class=\"entryunit__meta meta-entryunit\"> <ul class=\"meta-entryunit__items\">{{if $data.position}}<li class=\" meta-entryunit__item meta-entryunit__item--position \" title=\" {{if $data.delta}} {{html LJ.mltext(\'entryunit.updown\', \'delta_abs\', $data.delta_abs)}} {{else}} {{html LJ.mltext(\'entryunit.static.position\')}} {{/if}} \" ><span class=\"entryunit__position position-entryunit\"> {{if $data.delta}} {{if $data.delta < 0}} <span lj-svg-icon=\"flaticon--arrow-rounded-down\"></span> {{else}} <span lj-svg-icon=\"flaticon--arrow-rounded-up\"></span> {{/if}} {{/if}} <span class=\" position-entryunit__number js--position-number \">{{html $data.position}} </span></span></li>{{/if}}{{if $data.label}}<li class=\" meta-entryunit__item meta-entryunit__item--labels \" ><span class=\"b-entryunit-label\">{{html $data.label}}</span></li>{{else}}<li class=\" meta-entryunit__item meta-entryunit__item--labels \" ><ul class=\"entryunit__labels labels-entryunit\"> {{if $data.selfpromo}} <li class=\" labels-entryunit__item labels-entryunit__item--selfpromo \"><a class=\"rating-label\" href=\"{{html $data.siteroot}}/shop/selfpromo.bml?country={{html $data.country}}\" target=\"_blank\" >{{html LJ.mltext(\'main.promo.head\')}}</a></li> {{else $data.commpromo}} <li class=\" labels-entryunit__item labels-entryunit__item--commpromo \"><a class=\"rating-label\" href=\"{{html $data.siteroot}}/shop/commpromo.bml?country={{html $data.country}}\" target=\"_blank\" >{{html LJ.mltext(\'main.promo.head\')}}</a></li> {{/if}} <li class=\" labels-entryunit__item labels-entryunit__item--mustread \"><span class=\"rating-label\">{{html LJ.mltext(\'main.mustread.head\')}}</span></li> <li class=\" labels-entryunit__item labels-entryunit__item--discovery \"><span class=\"rating-label\">{{html LJ.mltext(\'main.discovery.head\')}}</span></li> </ul> </li>{{/if}}{{if $data.ljuser}}<li class=\" meta-entryunit__item meta-entryunit__item--author \" ><span class=\"entryunit__author author-entryunit\">{{each ($value.ljuser || $data.ljuser)}}{{if ($value.amp || $data.amp)}}<span class=\"ljuser {{if !(($value.inline_css || $data.inline_css))}} i-ljuser {{if ($value.striked || $data.striked)}} i-ljuser-deleted {{/if}} i-ljuser-type-{{html ($value.journaltype || $data.journaltype)}} {{/if}} {{if ($value.noctxpopup || $data.noctxpopup)}} noctxpopup i-ljuser-nopopup {{/if}} {{if ($value.alias || $data.alias)}} with-alias i-ljuser-withalias {{/if}} {{if ($value.side_alias || $data.side_alias)}} with-alias-value i-ljuser-showalias {{/if}} \">{{if ($value.show_userhead || $data.show_userhead)}}<a href=\"{{html ($value.profile_url || $data.profile_url)}}\" class=\"i-ljuser-profile\" ><amp-img class=\"i-ljuser-userhead\" src=\"{{html ($value.userhead_url || $data.userhead_url)}}\" width=\"16\" height=\"16\" ></amp-img></a>{{/if}}<a href=\"{{html ($value.journal_url || $data.journal_url)}}\" class=\"i-ljuser-username\" ><b>{{html ($value.journal || $data.journal)}}</b></a></span>{{else}}<span {{if ($value.inline_css || $data.inline_css)}} style=\" white-space:nowrap; {{if ($value.striked || $data.striked)}} text-decoration:line-through; {{/if}} \" {{/if}} class=\"ljuser {{if !(($value.inline_css || $data.inline_css))}} i-ljuser {{if ($value.striked || $data.striked)}} i-ljuser-deleted {{/if}} i-ljuser-type-{{html ($value.journaltype || $data.journaltype)}} {{/if}} {{if ($value.noctxpopup || $data.noctxpopup)}} noctxpopup i-ljuser-nopopup {{/if}} {{if ($value.alias || $data.alias)}} with-alias i-ljuser-withalias {{/if}} {{if ($value.side_alias || $data.side_alias)}} with-alias-value i-ljuser-showalias {{/if}} \" {{html ($value.attrs || $data.attrs)}} data-ljuser=\"{{html ($value.username || $data.username)}}\" lj:user=\"{{html ($value.username || $data.username)}}\" >{{if ($value.show_userhead || $data.show_userhead)}}<a href=\"{{html ($value.profile_url || $data.profile_url)}}\" {{if ($value.target || $data.target)}} target=\"{{html ($value.target || $data.target)}}\" {{/if}} class=\"i-ljuser-profile\" ><img {{if ($value.inline_css || $data.inline_css)}} width=\"16\" height=\"16\" style=\"vertical-align:text-bottom;border:0;padding-right:1px;\" {{else}} class=\"i-ljuser-userhead\" {{/if}} src=\"{{html ($value.userhead_url || $data.userhead_url)}}\" /></a>{{/if}}<a href=\"{{html ($value.journal_url || $data.journal_url)}}\" class=\"i-ljuser-username\" {{if ($value.color || $data.color)}} style=\"color:{{html ($value.color || $data.color)}};\" {{/if}} {{if ($value.target || $data.target)}} target=\"{{html ($value.target || $data.target)}}\" {{/if}} {{if ($value.alias || $data.alias)}} title=\"{{html ($value.user_alias || $data.user_alias)}}\" {{/if}} >{{if ($value.inline_css || $data.inline_css)}}{{if ($value.bold || $data.bold)}}<b>{{/if}}{{html ($value.journal || $data.journal)}}{{if ($value.alias || $data.alias)}}<span class=\"useralias-value\">*</span>{{/if}}{{if ($value.bold || $data.bold)}}</b>{{/if}}{{else}}{{if ($value.bold || $data.bold)}}<b>{{/if}}{{html ($value.journal || $data.journal)}}{{if ($value.bold || $data.bold)}}</b>{{/if}}{{/if}}</a>{{if ($value.alias || $data.alias) && ($value.side_alias || $data.side_alias)}}<span class=\"alias-value i-ljuser-alias\">{{html ($value.user_alias || $data.user_alias)}}</span>{{/if}}</span>{{/if}} {{/each}}</span></li>{{/if}}{{if $data.time}}<li class=\" meta-entryunit__item meta-entryunit__item--date \" ><time datetime=\"{{html $data.pub_date}}\" pubdate class=\"entryunit__date\" >{{html $data.time}}</time></li>{{/if}}{{if $data.comments_allowed}}<li class=\" meta-entryunit__item meta-entryunit__item--comments \" ><span class=\"entryunit__comments comments-entryunit\"><a {{if $data.reply_count == \'0\'}} href=\"{{html $data.post_url}}?mode=reply#add_comment\" {{else}} href=\"{{html $data.post_url}}#comments\" {{/if}} target=\"_blank\" class=\"comments-entryunit__link\" ><span lj-svg-icon=\"flaticon--comments-bold\"></span><span class=\"comments-entryunit__text\"> {{if $data.reply_count == \'0\'}} {{html LJ.mltext(\'entryunit.comments.none\')}} {{else}} {{html LJ.mltext(\'entryunit.comments.numbersonly\', \'reply_count\', $data.reply_count)}} {{/if}} </span></a></span></li>{{/if}}{{if $data.comments_allowed}}<li class=\" meta-entryunit__item meta-entryunit__item--likes \" lj-likus lj-likus-no-actions=\"{{html $data.post_url}}\" lj-likus-journal=\"{{html $data.journal_id}}\" lj-likus-item=\"{{html $data.ditem_id}}\" lj-likus-token=\"{{html $data.likes_signature}}\" ></li>{{/if}}</ul> </div> <header class=\"entryunit__head\"> <h3 class=\" entryunit__title js--entryunit-title \"><a class=\"entryunit__link\" href=\"{{html $data.post_url}}\" target=\"_blank\" title=\"{{html $data.full_subject}}\" >{{html $data.subject}}</a></h3> </header> <div class=\"entryunit__body\"> {{if $data.media}} <div class=\"entryunit__video video-entryunit\"> {{html $data.media}} </div> {{/if}} {{if $data.image_size}} {{if ($data.image_size == 2)}} <figure class=\"entryunit__photo photo-entryunit\"> <a href=\"{{html $data.post_url}}\" target=\"_blank\" ><img src=\"{{html $data.image_url}}\" alt=\"\" class=\"photo-entryunit__pic\"></a> </figure> {{/if}} {{if ($data.image_size == 3)}} <figure class=\"entryunit__panorama panorama-entryunit\"> <a href=\"{{html $data.post_url}}\" target=\"_blank\" style=\"background-image: url({{html $data.image_url}});\" class=\"panorama-entryunit__pic\" ><img src=\"{{html $data.image_url}}\" alt=\"\" class=\"panorama-entryunit__pic--print\"></a> </figure> {{/if}} {{/if}} <div class=\"entryunit__text\">{{html $data.body}}</div> <div class=\"entryunit__stat entryunit-stat\"> <ul class=\"stat-entryunit__list entryunit-stat-list\"> {{if $data.comments_allowed}} <li class=\" entryunit-stat-list__item entryunit-stat-list-item entryunit-stat-list-item--likes \" lj-likus lj-likus-medius=\"true\" lj-likus-no-actions=\"{{html $data.post_url}}\" lj-likus-journal=\"{{html $data.journal_id}}\" lj-likus-item=\"{{html $data.ditem_id}}\" lj-likus-token=\"{{html $data.likes_signature}}\" > </li> {{/if}} <li class=\" entryunit-stat-list__item entryunit-stat-list-item entryunit-stat-list-item--comments \"> <a class=\" entryunit-stat-list-item__link entryunit-stat-list-item-link \" href=\" {{if $data.reply_count == \'0\'}} {{html $data.post_url}}?mode=reply#add_comment {{else}} {{html $data.post_url}}#comments {{/if}} \" target=\"_blank\" > <span class=\" entryunit-stat-list-item__icon entryunit-stat-list-item-icon \"> <span lj-svg-icon=\"flaticon--medius-comments\"></span> </span> <span class=\" entryunit-stat-list-item__value entryunit-stat-list-item-value \"> {{if $data.reply_count == \'0\'}} {{html LJ.mltext(\'entryunit.comments.none\')}} {{else}} {{html LJ.mltext(\'entryunit.comments.numbersonly\', \'reply_count\', $data.reply_count)}} {{/if}} </span> </a> </li> </ul> </div> </div> {{if !($data.hide_actions)}} <footer class=\"entryunit__footer\"> <div class=\"entryunit__controls controls-entryunit\"> <ul class=\"controls-entryunit__items\"> <li class=\" controls-entryunit__item controls-entryunit__item--read \"> <a href=\"javascript:void(0)\" class=\"controls-entryunit__link\" ><span class=\"controls-entryunit__icon\"><span lj-svg-icon=\"flaticon--check\"></span></span><span class=\" controls-entryunit__tooltip tooltip-entryunit tooltip-entryunit--read-read \">{{html LJ.mltext(\'entryunit.read\')}}</span><span class=\" controls-entryunit__tooltip tooltip-entryunit tooltip-entryunit--read-unread \">{{html LJ.mltext(\'entryunit.unread\')}}</span></a> </li> <li class=\" controls-entryunit__item controls-entryunit__item--hide \"> <a href=\"javascript:void(0)\" class=\"controls-entryunit__link\" ><span class=\"controls-entryunit__icon\"><span lj-svg-icon=\"flaticon--hide\"></span></span><span class=\" controls-entryunit__tooltip tooltip-entryunit tooltip-entryunit--hide-hide \">{{if $data.is_community}}{{html LJ.mltext(\'entryunit.hide.community\')}}{{else}}{{html LJ.mltext(\'entryunit.hide\')}}{{/if}}</span><span class=\" controls-entryunit__tooltip tooltip-entryunit tooltip-entryunit--hide-show \">{{if $data.is_community}}{{html LJ.mltext(\'entryunit.show.community\')}}{{else}}{{html LJ.mltext(\'entryunit.show\')}}{{/if}}</span></a> </li> </ul> </div> </footer> {{/if}} {{if !($data.mustread)}} <div class=\" entryunit__mark-control entryunit-mark-control \" ng-click=\"article.toggleControl($event)\" > <span lj-svg-icon=\"flaticon--arrow-dropdown\"></span> </div> <div class=\" b-popup entryunit-mark-popup \" ng-class=\"{\'entryunit-mark-popup--visible\': article.controlsVisible}\" > <div class=\"b-popup-outer\"> <div class=\"b-popup-inner\"> <i class=\"i-popup-arr i-popup-arrtr\"> <i class=\"i-popup-arr-brdr-outer\"> <i class=\"i-popup-arr-brdr-inner\"> <i class=\"i-popup-arr-bg\"></i> </i> </i> </i> <ul class=\" entryunit__mark entryunit-mark \" > <li class=\" controls-entryunit__item--read entryunit-mark__item entryunit-mark-item entryunit-mark-item--read \"> <span lj-svg-icon=\"flaticon--check\"></span> <span class=\" entryunit-mark-item__title entryunit-mark-item-title entryunit-mark-item-title--on \"> {{html LJ.mltext(\'entryunit.read\')}} </span> <span class=\" entryunit-mark-item__title entryunit-mark-item-title entryunit-mark-item-title--off \"> {{html LJ.mltext(\'entryunit.unread\')}} </span> </li> <li class=\" controls-entryunit__item--hide entryunit-mark__item entryunit-mark-item entryunit-mark-item--hide \"> <span lj-svg-icon=\"flaticon--hide\"></span> <span class=\" entryunit-mark-item__title entryunit-mark-item-title entryunit-mark-item-title--on \"> {{if $data.is_community}} {{html LJ.mltext(\'entryunit.hide.community\')}} {{else}} {{html LJ.mltext(\'entryunit.hide\')}} {{/if}} </span> <span class=\" entryunit-mark-item__title entryunit-mark-item-title entryunit-mark-item-title--off \"> {{if $data.is_community}} {{html LJ.mltext(\'entryunit.show.community\')}} {{else}} {{html LJ.mltext(\'entryunit.show\')}} {{/if}} </span> </li> </ul> </div> </div> </div> {{/if}} </article> ", 'JQuery.stat');
Site.page.template['angular/widgets/promo/selfpromo.ng.tmpl'] = '<!-- promoblock (selfpromo) -->\n<div\n    class=\"\n        b-ljpromo\n        b-ljpromo--{{type}}\n        \"\n    ng-class=\"{\n        \'b-ljpromo-empty\':      !promo.state.preloading && promo.state.isFree(),\n        \'b-ljpromo-preloading\': promo.state.preloading,\n        \'b-ljpromo-scroll\':     promo.items.length > 1,\n        \'b-ljpromo-loading\':    promo.state.loading,\n\n        \'b-ljpromo-start\': promo.state.start,\n        \'b-ljpromo-end\':   !promo.state.preloading && promo.state.end,\n        \'b-ljpromo--homepage-v2\': !Site.flags.homepage_v3\n    }\"\n    ng-show=\"(promo.state.isFree() || promo.state.isBought()) && (promo.isCyr || (type === \'selfpromo\' && promo.isNoncyrSelfpromoEnabled) || (type === \'commpromo\' && promo.isNoncyrCommpromoEnabled))\"\n    >\n    <!-- container -->\n    <div class=\"b-ljpromo-container\">\n        <!-- wrapper for carousel -->\n        <div class=\"b-ljpromo-wrapper\">\n\n            <!-- items -->\n            <ul\n                class=\"b-ljpromo-items\"\n                ng-style=\"{ marginTop: -promo.index * promo.height }\"\n                >\n                <li\n                    class=\"b-ljpromo-item\"\n                    data-current=\"{{promo.index}}\"\n                    ng-repeat=\"item in promo.items\"\n                    lj-entry=\"promo.ljEntryParams(item, $index)\"\n                ></li>\n            </ul><!-- /items -->\n\n            <!-- link for more items -->\n            <p class=\"b-ljpromo-more\"><!--\n                --><span class=\"b-ljpromo-more-inner\"><!--\n                    --><span ng-if=\"type === \'selfpromo\'\" class=\"b-ljpromo-more-inner-inner\" lj-ml=\"main.promo.more.selfpromo\"></span><!--\n                    --><span ng-if=\"type === \'commpromo\'\" class=\"b-ljpromo-more-inner-inner\" lj-ml=\"main.promo.more.calendarpromo\"></span><!--\n                --></span><!--\n            --></p>\n\n            <!-- dummy loader -->\n            <div class=\"b-ljpromo-dummy\" ng-if=\"Site.flags.homepage_v3\">\n                <div class=\"b-ljpromo-dummy-meta\">\n                    <a\n                        class=\"b-ljpromo-dummy-promo\"\n                        ng-href=\"{{promo.siteroot}}/shop/{{type}}.bml\"\n                        target=\"_blank\"\n                        lj-ml=\"main.promo.head\"\n                        ></a>\n                    <span class=\"b-ljpromo-dummy-block\"></span>\n                </div>\n                <div class=\"b-ljpromo-dummy-head\">\n                    <span class=\"b-ljpromo-dummy-block\"></span>\n                </div>\n                <div class=\"b-ljpromo-dummy-body\">\n                    <span class=\"b-ljpromo-dummy-block\"></span>\n                    <span class=\"b-ljpromo-dummy-block\"></span>\n                </div>\n            </div>\n\n\n        </div><!-- /wraper -->\n\n        <!-- promoblock navigation -->\n        <a\n            href=\"javascript:void(0);\"\n            lj-ml=\"main.promo.nav.prev\"\n            lj-ml-attr=\"title\"\n            class=\"b-ljpromo-nav b-ljpromo-nav-prev\"\n            ng-click=\"promo.prev()\"\n            ng-if=\"promo.showListNavigation()\"\n            >\n            <span\n                class=\"b-ljpromo-icon-prev\"\n                lj-svg-icon=\"flaticon--arrow-down\"><!-- prev entry --></span>\n        </a>\n        <a\n            href=\"javascript:void(0);\"\n            lj-ml=\"main.promo.nav.next\"\n            lj-ml-attr=\"title\"\n            class=\"b-ljpromo-nav b-ljpromo-nav-next\"\n            ng-click=\"promo.next()\"\n            ng-if=\"promo.showListNavigation()\"\n            >\n            <span\n                class=\"b-ljpromo-icon-next\"\n                lj-svg-icon=\"flaticon--arrow-up\"><!-- next entry --></span>\n        </a>\n\n        <!-- empty message -->\n        <div class=\"b-ljpromo-emptiness\">\n            <!-- entryunit -->\n            <article class=\"\n                        entryunit\n                        entryunit--promo\n                        entryunit--{{type}}\n                        entryunit--emptypromo\n                        \">\n                <!-- meta -->\n                <div class=\"entryunit__meta meta-entryunit\">\n                    <!-- meta-items -->\n                    <ul class=\"meta-entryunit__items\">\n                        <li class=\"meta-entryunit__item\">\n                            <ul class=\"entryunit__labels labels-entryunit\">\n                                <li\n                                    class=\"\n                                        labels-entryunit__item\n                                        labels-entryunit__item--selfpromo\"\n                                    >\n                                        <span\n                                            class=\"rating-label\"\n                                            lj-ml=\"main.promo.head\"\n                                        ></span>\n                                    </li>\n                                <li\n                                    class=\"\n                                        labels-entryunit__item\n                                        labels-entryunit__item--commpromo\"\n                                    >\n                                    <span\n                                        class=\"rating-label\"\n                                        lj-ml=\"main.promo.head\"\n                                     ></span>\n                                </li>\n                            </ul>\n                        </li>\n                    </ul><!-- /meta-items -->\n                </div> <!-- /meta -->\n\n                <!-- head -->\n                <header class=\"entryunit__head\">\n                    <!-- title -->\n                    <h3\n                        class=\"\n                            entryunit__title\n                            js--entryunit-title\n                            \"\n                            lj-ml=\"main.promo.empty.selfpromo.head\"\n                            ></h3>\n                </header><!-- /head -->\n\n                <!-- body -->\n                <div class=\"entryunit__body\">\n                    <!-- entry text -->\n                    <div\n                        class=\"entryunit__text\"\n                        lj-ml=\"{\n                            \'main.promo.empty.selfpromo\':     type === \'selfpromo\',\n                            \'main.promo.empty.calendarpromo\': type === \'commpromo\',\n                        }\"\n                        ></div>\n                </div><!-- /body -->\n            </article><!-- /entryunit -->\n        </div><!-- /empty message -->\n    </div><!-- /container -->\n\n    <!-- promoblock footer (if promo only) -->\n    <p\n            class=\"b-ljpromo-stat\"\n            ng-if=\"type === \'selfpromo\' && promo.items[0]\"\n            ><!--\n        --><span\n            lj-ml=\"main.promo.footer.selfpromo\"\n            lj-ml-resolve=\"{\n                timeleft_hours: promo.items[0].timeleft_hours,\n                timeleft_minutes: promo.items[0].timeleft_minutes,\n                overbet: promo.items[0].buyout,\n                country: region\n            }\"\n            lj-ml-compile\n            ng-if=\"promo.items[0].timeleft_hours > 0\"\n            ></span><!--\n        --><span\n            lj-ml=\"main.promo.footer.selfpromo.short\"\n            lj-ml-resolve=\"{\n                timeleft_minutes: promo.items[0].timeleft_minutes,\n                overbet: promo.items[0].buyout,\n                country: region\n            }\"\n            lj-ml-compile\n            ng-if=\"promo.items[0].timeleft_hours == 0\"\n            ></span><!--\n    --></p>\n\n</div>\n';
Site.page.template['angular/ljPromoEntryA.ng.tmpl'] = '<!-- NG version of templates/Widgets/entryunit/v3/entryunit.tmpl -->\n<article\n  class=\"\n    entryunit\n    js--entryunit\n    entryunit--promo\n    entryunit--feedpromo\n  \"\n  lj-screenable=\"social:widgets:parse\"\n  ng-if=\"!entryCtrl.isOldDesign\"\n>\n  <div class=\"entryunit__meta meta-entryunit\">\n    <ul class=\"meta-entryunit__items\">\n      <li\n        class=\"\n          meta-entryunit__item\n          meta-entryunit__item--author\n        \"\n      >\n        <span class=\"entryunit__author author-entryunit\"\n        >\n          <span\n            class=\"ljuser i-ljuser  i-ljuser-type-P\"\n          ><!--\n         --><a\n              ng-href=\"{{ entryData.ljuser[0].profile_url }}\"\n              target=\"_blank\"\n              class=\"i-ljuser-profile\"\n            ><!--\n           --><img\n                class=\"i-ljuser-userhead ContextualPopup ContextualPopup ContextualPopup ContextualPopup\"\n                ng-src=\"{{ entryData.ljuser[0].userhead_url }}\"\n              ><!--\n         --></a><!--\n         --><a\n              ng-href=\"{{ entryData.ljuser[0].journal_url }}\"\n              class=\"i-ljuser-username\"\n              target=\"_blank\"\n            ><!--\n           --><b>{{ entryData.ljuser[0].journal }}</b><!--\n         --></a>\n          </span>\n        </span>\n      </li>\n      <li class=\" meta-entryunit__item meta-entryunit__item--date \">\n          <time\n            datetime=\"{{ entryData.pub_date }}\"\n            pubdate=\"\"\n            class=\"entryunit__date\"\n          >{{ entryData.time }}</time>\n      </li>\n      <li\n        class=\"\n          meta-entryunit__item\n          meta-entryunit__item--labels\n          meta-entryunit__item--feedpromo\n        \"\n      >\n        <span\n          feed-promo-control\n          feed-promo-control-promo-id=\"entryData.promo_id\"\n          feed-promo-control-item-id=\"entryData.ditem_id\"\n          feed-promo-control-journal-id=\"entryData.journal_id\"\n          feed-promo-control-class=\"{{ entryData.feed_promo_class }}\"\n          feed-promo-control-entry-selector=\".entryunit\"\n          control-send-stats-on-link=\"promoControlParams.sendStatsOnLink\"\n        ></span>\n      </li>\n    </ul>\n  </div>\n  <header class=\"entryunit__head\">\n    <h3\n      class=\"\n        entryunit__title\n        js--entryunit-title\n      \"\n    >\n      <a\n        ng-href=\"{{ entryData.post_url }}\"\n        class=\"entryunit__link ng-isolate-scope\"\n        ng-title=\"{{ entryData.full_subject }}\"\n        target=\"_blank\"\n        feed-promo-click=\"\"\n        feed-promo-click-promo-id=\"entryData.promo_id\"\n        feed-promo-click-journal-id=\"entryData.journal_id\"\n        feed-promo-click-class=\"{{ entryData.feed_promo_class }}\"\n      >{{ entryData.subject }}</a>\n    </h3>\n  </header>\n\n  <div class=\"entryunit__body\">\n    <div class=\"entryunit__text\">{{ entryData.body }}</div>\n    <div class=\"entryunit__stat entryunit-stat\">\n      <ul class=\"stat-entryunit__list entryunit-stat-list\">\n        <li\n          class=\"\n            entryunit-stat-list__item\n            entryunit-stat-list-item\n            entryunit-stat-list-item--likes\n          \"\n          lj-likus=\"\"\n          lj-likus-medius=\"true\"\n          lj-likus-no-actions=\"{{ entryData.post_url }}\"\n          lj-likus-journal=\"{{ entryData.journal_id }}\"\n          lj-likus-item=\"{{ entryData.ditem_id }}\"\n          lj-likus-token=\"{{ entryData.likes_signature }}\"\n        ></li>\n        <li\n          class=\"\n            entryunit-stat-list__item\n            entryunit-stat-list-item\n            entryunit-stat-list-item--comments\n          \"\n        >\n          <a\n            class=\"\n              entryunit-stat-list-item__link\n              entryunit-stat-list-item-link\n            \"\n\n            feed-promo-click\n            feed-promo-click-promo-id=\"entryData.promo_id\"\n            feed-promo-click-journal-id=\"entryData.journal_id\"\n            feed-promo-click-class=\"{{ entryData.feed_promo_class }}\"\n            target=\"_blank\"\n            ng-href=\"{{ entryCtrl.getReplyHref() }}\"\n          >\n            <span\n              class=\"\n                entryunit-stat-list-item__icon\n                entryunit-stat-list-item-icon\n              \"\n            ><span lj-svg-icon=\"flaticon--medius-comments\"></span> </span>\n\n            <span\n              class=\"\n                entryunit-stat-list-item__value\n                entryunit-stat-list-item-value\n              \"\n            >{{ entryCtrl.getReplyStatCaption() }}</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</article>\n\n<!-- For old design -->\n<article\n  class=\"\n    b-entryunit\n    js--entryunit\n    entryunit--promo\n    entryunit--feedpromo\n  \"\n  lj-screenable=\"social:widgets:parse\"\n  ng-if=\"entryCtrl.isOldDesign\"\n>\n\n  <!-- head -->\n  <header class=\"b-entryunit-head\">\n    <h3\n      class=\"\n        b-entryunit-title\n        js--entryunit-title\n        \">\n      <a\n        ng-href=\"{{ entryData.post_url }}\"\n        class=\"ng-isolate-scope\"\n        ng-title=\"{{ entryData.full_subject }}\"\n        target=\"_blank\"\n        feed-promo-click=\"\"\n        feed-promo-click-promo-id=\"entryData.promo_id\"\n        feed-promo-click-journal-id=\"entryData.journal_id\"\n        feed-promo-click-class=\"{{ entryData.feed_promo_class }}\"\n        >\n        {{ entryData.subject }}\n      </a>\n    </h3>\n    <span class=\"b-entryunit-author\">\n      <span\n        class=\"ljuser i-ljuser i-ljuser-type-P noctxpopup i-ljuser-nopopup\"\n      ><a\n        ng-href=\"{{ entryData.ljuser[0].profile_url }}\"\n        target=\"_blank\"\n        class=\"i-ljuser-profile\"\n        >\n        <img\n          class=\"i-ljuser-userhead\"\n          ng-src=\"{{ entryData.ljuser[0].userhead_url }}\"\n          width=\"16\"\n          height=\"16\"\n          />\n      </a>\n      <a\n        ng-href=\"{{ entryData.ljuser[0].journal_url }}\"\n        class=\"i-ljuser-username\"\n        target=\"_blank\"\n      ><b>{{ entryData.ljuser[0].journal }}</b></a>\n      </span>\n    </span>\n    <time\n      datetime=\"{{ entryData.pub_date }}\"\n      pubdate\n      class=\"b-entryunit-date\"\n      >\n    {{ entryData.time }}</time>\n    &nbsp;\n    <span\n      class=\"\n        meta-entryunit__item\n        meta-entryunit__item--labels\n        meta-entryunit__item--feedpromo\n      \"\n    >\n      <span\n        feed-promo-control\n        feed-promo-control-promo-id=\"entryData.promo_id\"\n        feed-promo-control-item-id=\"entryData.ditem_id\"\n        feed-promo-control-journal-id=\"entryData.journal_id\"\n        feed-promo-control-class=\"{{ entryData.feed_promo_class }}\"\n        feed-promo-control-entry-selector=\".entryunit\"\n        control-send-stats-on-link=\"promoControlParams.sendStatsOnLink\"\n      ></span>\n    </span>\n  </header>\n  <!-- /head -->\n\n  <!-- body -->\n  <div class=\"b-entryunit-body\">\n    <!-- etnry text -->\n    <div class=\"b-entryunit-article\">\n      {{ entryData.body }}\n    </div>\n  </div>\n  <!-- /body -->\n\n<!-- meta -->\n  <div class=\"b-entryunit-meta\">\n    <ul class=\"b-entryunit-menu\">\n      <!-- comments -->\n      <li class=\"b-entryunit-menu-item b-entryunit-menu-comments\">\n        <a\n          feed-promo-click\n          feed-promo-click-promo-id=\"entryData.promo_id\"\n          feed-promo-click-journal-id=\"entryData.journal_id\"\n          feed-promo-click-class=\"{{ entryData.feed_promo_class }}\"\n          target=\"_blank\"\n          ng-href=\"{{ entryCtrl.getReplyHref() }}\"\n        >\n        <span class=\"b-entryunit-icon b-entryunit-icon-comments\"></span>\n        {{ entryCtrl.getReplyStatCaption() }}\n        </a>\n      </li>\n    </ul>\n  </div>\n  <!-- /meta -->\n</article>';
//= require_ml main.promo.head
//= require_ml main.promo.more.selfpromo
//= require_ml main.promo.more.calendarpromo
//= require_ml main.promo.nav.prev
//= require_ml main.promo.nav.next
//= require_ml main.promo.empty.selfpromo.head
//= require_ml main.promo.empty.selfpromo
//= require_ml main.promo.empty.calendarpromo
//= require_ml main.promo.empty.calendarpromo.head
//= require_ml main.promo.footer.selfpromo
//= require_ml main.promo.footer.selfpromo.short
//= require_ml entryunit.comments.none
//= require_ml entryunit.comments.numbersonly
! function(e) {
    return e
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, n) {
            return "ratingFeedPromo" === t ? e.call("promo.get_list", _extends({
                "class": "ratings"
            }, n)) : e.call(t + ".get_list", n)
        }
        var n = {};
        return n.request = t, n
    }

    function t(e) {
        var t = this;
        t.isOldDesign = LJ.Flags.isDisabled("homepage_v3"), t.getReplyHref = function() {
            var t = e.entryData;
            return t ? t.reply_count ? t.post_url + "#comments" : t.post_url + "?mode=reply#add_comment" : null
        }, t.getReplyStatCaption = function() {
            var t = e.entryData;
            return t ? t.reply_count ? LJ.ml("entryunit.comments.numbersonly", {
                reply_count: t.reply_count
            }) : LJ.ml("entryunit.comments.none") : null
        }
    }

    function n(e, t) {
        function n(n, r, o) {
            function i() {
                return o.current
            }

            function a(e, t) {
                e !== t && Number(e) === s.itemIndex && LJ.Track.event(n.type, "show", s.subject, {
                    nonInteraction: 1
                }), LJ.Event.trigger("social:widgets:parse", r[0])
            }

            function l(e) {
                angular.element(e.target).parent().is(".js--entryunit-title") && LJ.Track.event(n.type, "click", s.subject)
            }
            var s = n.$eval(o.ljEntry);
            n.entryData = s, n.promoControlParams = {}, "ratings" === s.feed_promo_class && (n.promoControlParams.sendStatsOnLink = !1);
            var c = void 0;
            c = s.useNgTmpl ? e(t.get("ljPromoEntryA.ng.tmpl"))(n) : e(LJ.UI.template("templates-Widgets-entryunit-v3-entryunit", s))(n), r.append(c), n.$watch(i, a), r.on("click", l), a(0, null)
        }
        return {
            scope: !0,
            controller: "ljEntryCtrl",
            controllerAs: "entryCtrl",
            link: n
        }
    }

    function r(e, t, n, r, o, i) {
        function a(e, n) {
            var r = e.object && e.object[0] || {},
                o = {
                    country: t.region,
                    itemIndex: n,
                    promo_id: r.promo_id || r.promoID
                };
            b && (o.is_feed_promo = !0, o.feed_promo_class = "ratings", o.useNgTmpl = !0);
            var i = angular.extend({}, r, o);
            return i
        }

        function l() {
            function e() {
                return j.items.length && j.items[0].object
            }

            function t() {
                return j.items.length && "free" === j.items[0].state
            }
            return j.state = {
                preloading: !0,
                loading: !1,
                end: !1,
                start: !0,
                isFree: t,
                isBought: e
            }, j.items = [], P = !1, j.index = 0, y({
                limit: -1,
                offset: 0
            }).then(function(e) {
                return u(), j.state.preloading = !1, e
            })
        }

        function s() {
            return j.index === j.items.length && P ? void 0 : j.index !== j.items.length - 1 || P ? void j.animate("prev") : y({
                limit: -x,
                offset: -j.items.length + 1
            }).then(function(e) {
                e.length < x && (P = !0), n(function() {
                    j.animate("prev")
                })
            })
        }

        function c() {
            j.index && (j.state.end && (j.state.end = !1), j.animate("next"))
        }

        function m(e, t) {
            e !== t && u()
        }

        function u() {
            j.state.end = j.index > j.items.length - 1, j.state.start = 0 === j.index
        }

        function p(e) {
            e >= L && (P = !0)
        }

        function g(e) {
            j._list = e.find(".b-ljpromo-items"), j._wrapper = e.find(".b-ljpromo-wrapper"), j.height = j._wrapper.height()
        }

        function d() {
            j.height = j._wrapper && j._wrapper.height()
        }

        function f(e, t) {
            e !== t && j.reset()
        }

        function y(n) {
            return n = angular.extend({
                region: t.region,
                type: "entry"
            }, n), j.isCyr = "noncyr" !== t.region, j.isNoncyrSelfpromoEnabled = LJ.Flags.isEnabled("selfpromo_noc"), j.isNoncyrCommpromoEnabled = LJ.Flags.isEnabled("commercial_promo_noc"), j.state.loading = !0, e.request(t.type, n).then(function(e) {
                return Array.prototype.push.apply(j.items, e.slots), angular.isArray(e.slots) && e.slots.forEach(function(t) {
                    angular.isArray(t.object) && t.object.forEach(function(n) {
                        n.likes_signature = e.likes_signature, n.ditem_id = n.post_id, n.promoID = t.promo_id
                    })
                }), j.state.loading = !1, e.slots
            })
        }

        function h(e) {
            var n = j.index,
                r = "prev" === e ? n + 1 : n - 1;
            j._list.animate({
                marginTop: -j.height * r
            }, "normal", function() {
                j.index = r, t.$apply()
            })
        }
        var v, _, j = this,
            P = !1,
            x = 5,
            L = 25;
        j.siteroot = LJ.get("siteroot"), j.ljEntryParams = a, j.reset = l, j.prev = s, j.next = c, j.timeleft = "", j.element = g, j.animate = h, j._list = _, j._wrapper = v, j.showListNavigation = function() {
            return "ratingFeedPromo" !== t.type
        }, t.$watch(function() {
            return j.index
        }, m), t.$watch(function() {
            return j.items.length
        }, p), t.$watch("region", f), angular.element(window).on("resize", d);
        var b = "ratingFeedPromo" === t.type;
        j.reset().then(function() {
            j.items && j.items.length && b && (LJ.Event.trigger("ratingFeedPromo::promoItemsUpdated", {
                promoItems: j.items
            }), LJ.Event.trigger("ratingFeedPromo::activePromoChanged", {
                index: j.index
            }))
        })
    }

    function o() {
        function e(e, t, n, r) {
            r.element(t)
        }
        return {
            controller: "ljWidgetPromoCtrl",
            controllerAs: "promo",
            templateUrl: "selfpromo.ng.tmpl",
            scope: {
                region: "=ljWidgetPromoRegion",
                type: "@ljWidgetPromo"
            },
            link: e
        }
    }
    e.$inject = ["Api"], r.$inject = ["ljPromoService", "$scope", "$timeout", "Api", "$compile", "$rootScope"], t.$inject = ["$scope"], n.$inject = ["$compile", "$templateCache"], angular.module("LJ.Widget.Promo", ["LJ.Api", "LJ.Directives", "LJ.Templates", "Feedpromo.Control"]), angular.module("LJ.Widget.Promo").factory("ljPromoService", e).controller("ljWidgetPromoCtrl", r).controller("ljEntryCtrl", t).directive("ljEntry", n).directive("ljWidgetPromo", o)
}();
/* <<< file end: js/widgets/angular/promo.js */

//# map link was there [promo.js.map]
/* >>> file start: js/mainPage2018/promoBlock.js */
var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var o = arguments[t];
        for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
    }
    return e
};
//= require js/medius/utils.js
//= require js/widgets/angular/promo.js
//= require_ml medius2018.promo
//= require_ml medius2018.promo.buy_promo
//= require_ml medius2018.promo.left_hh_mm
//= require_ml medius2018.promo.comm.banner.title
//= require_ml medius2018.promo.comm.banner.action_link
//= require_ml medius2018.promo.comm.banner.extra_caption
//= require_ml medius2018.promo.self.banner.title
//= require_ml medius2018.promo.self.banner.action_link
//= require_ml medius2018.promo.self.banner.extra_caption
! function(e) {
    return e
}(),
function() {
    "use strict";

    function e(e, t, o, r) {
        var n = {};
        return n.initProps = function() {
            var t = (arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], {}),
                o = LJ.Util.getRatingRegion("cyr"),
                n = ["selfpromo", "commpromo"],
                i = n.map(function(e) {
                    return r.request(e, {
                        region: o,
                        type: "entry",
                        limit: -1,
                        offset: 0
                    })["catch"](function() {}).then(function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                        return e.slots && e.slots.length ? _extends({}, e.slots[0], {
                            likes_signature: e.likes_signature
                        }) : null
                    })
                });
            return e.all(i).then(function(e) {
                return e.forEach(function(e, o) {
                    var r = n[o],
                        i = {
                            type: "promo",
                            promoType: r
                        };
                    if (i.buyPromoHref = "selfpromo" === r ? "/shop/selfpromo.bml" : "/shop/commpromo.bml", !e || !e.object || !e.object.length) return i.slotIsEmpty = !0, void(t[r] = i);
                    var l = e.object[0];
                    i = _extends({}, i, {
                        userpicUrl: l.userpic,
                        profileUrl: l.profile,
                        username: l.username,
                        journalUrl: l.journal,
                        postTitle: l.subject,
                        postUrl: l.post_url,
                        postID: l.post_id,
                        journalID: l.journal_id,
                        replyCount: l.reply_count,
                        readingTime: +l.reading_time,
                        postTimestamp: l.timestamp,
                        likeToken: e.likes_signature,
                        ml: {}
                    }), e.timeleft_hours && e.timeleft_minutes && (i.ml.timeLeft = LJ.ml("medius2018.promo.left_hh_mm", {
                        timeleft_hours: +e.timeleft_hours,
                        timeleft_minutes: e.timeleft_minutes
                    })), t[r] = i
                }), t
            })
        }, n
    }
    e.$inject = ["$q", "Api", "mediusUtils", "ljPromoService"], angular.module("MainPage2018.Blocks.Promo", ["Medius.Utils", "LJ.Widget.Promo"]).factory("mainPagePromoBlockService", e)
}();
/* <<< file end: js/mainPage2018/promoBlock.js */

//# map link was there [promoBlock.js.map]
/* >>> file start: js/mainPage2018/videoBlock.js */
var _extends = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
    }
    return e
};
//= require js/medius/utils.js
//= require js/mainPage2018/customScroll.js
! function(e) {
    return e
}(),
function() {
    "use strict";

    function e(e, r, o, a, i, l) {
        var c = {},
            d = {
                controller: {}
            };
        return d.initProps = function() {
            var d = (arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], {}),
                u = {
                    playerCard: {
                        wrap: {},
                        iframe: {}
                    }
                };
            u.playerCard.wrap.click = function(e) {
                var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    t = r.cardProps;
                t && (e.preventDefault(), e.stopPropagation(), t.iframeLoaded && t.iframeNode && "player" !== t.mode && (t.iframeNode.contentWindow.postMessage({
                    method: "play"
                }, "*"), a(function() {
                    t.mode = "player"
                })))
            }, u.playerCard.iframe.load = function(r) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    n = t.cardProps;
                if (n) {
                    n.iframeLoaded = !0, n.iframeNode = r.target;
                    var o = r.target.contentWindow,
                        i = e(function(e) {
                            var r = function t(r) {
                                r.data && "eagleplayer" === r.data.origin && "ready" === r.data.event && (l.removeEventListener("message", t), e())
                            };
                            l.addEventListener("message", r)
                        });
                    i.then(function() {
                        o.postMessage({
                            method: "getData",
                            params: ["duration"]
                        }, "*");
                        var e = function r(e) {
                            if (e.data.method && "getData" === e.data.method && e.data.result) {
                                var t = e.data.result,
                                    o = Math.floor(t / 60),
                                    i = t % 60;
                                a(function() {
                                    n.videoDuration = o + ":" + i
                                }), l.removeEventListener("message", r)
                            }
                        };
                        l.addEventListener("message", e)
                    })
                }
            };
            var s = r.call("medius.get_public_items", {
                category: "video"
            }).then(function(r) {
                var a = r.items || [];
                if (0 !== a.length) {
                    var l = a.map(function(r) {
                        var n = [t.COMMON_VERTICAL_TEXT_VIDEO, t.VIDEO_PLAYER, t.IMG_PREVIEW_VIDEO],
                            a = r.cards || [];
                        if (!a.length) return e.resolve(null);
                        var l = [];
                        n.forEach(function(e, r) {
                            var t = a.find(function(r) {
                                return r.type === e
                            });
                            l[r] = t
                        });
                        var c = l.filter(function(e) {
                            return e
                        });
                        if (c.length < n.length) return e.resolve(null);
                        var d = n.map(function(e) {
                            return o.mediusPostDataToCardPropsTypeB({
                                postData: r,
                                desiredCardTypes: [e]
                            }).then(function(r) {
                                var n = _extends({}, r, {
                                    mode: "placeholder"
                                });
                                return e === t.VIDEO_PLAYER && (n.handleWrapLinkClick = function(e) {
                                    return u.playerCard.wrap.click(e, {
                                        cardProps: n
                                    })
                                }, n.ngTrustedVideoURL = i.trustAsResourceUrl(n.videoURL), n.handleIframeLoad = function(e) {
                                    return u.playerCard.iframe.load(e, {
                                        cardProps: n
                                    })
                                }), n
                            })["catch"](function() {
                                return null
                            })
                        });
                        return e.all(d).then(function(e) {
                            var r = {};
                            return n.forEach(function(t, n) {
                                r[t] = e[n]
                            }), r
                        })["catch"](function() {
                            return null
                        })
                    });
                    return e.all(l).then(function(e) {
                        return d.videoElements = e.filter(function(e) {
                            return e
                        }).slice(0, n).map(function(e) {
                            return {
                                propsPerCardType: e
                            }
                        }), d.activeElementIndex = 0, c = d, d
                    })
                }
            });
            return s
        }, d.controller.getListItems = function() {
            return c.videoElements
        }, d.controller.getPreviewProps = function(e) {
            return e.propsPerCardType[t.IMG_PREVIEW_VIDEO]
        }, d.controller.itemIsHighlighted = function(e) {
            var r = c.videoElements.indexOf(e);
            return r === c.activeElementIndex
        }, d.controller.selectItem = function(e, r) {
            e.preventDefault(), e.stopPropagation();
            var n = c.videoElements.indexOf(r);
            c.activeElementIndex !== n && a(function() {
                r.propsPerCardType[t.VIDEO_PLAYER].mode = "placeholder", c.activeElementIndex = n
            })
        }, d.getCardProps = function() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            if ("video" === e.section) {
                if (!c || !c.videoElements) return null;
                var r = c.videoElements;
                if (e.isActive) {
                    var n = r[c.activeElementIndex];
                    if (!n) return null;
                    if ("player" === e.type) return n.propsPerCardType[t.VIDEO_PLAYER];
                    if ("text" === e.type) return n.propsPerCardType[t.COMMON_VERTICAL_TEXT_VIDEO]
                }
                if ("preview" === e.type && angular.isDefined(e.index)) {
                    var n = r[e.index];
                    return n ? n.propsPerCardType[t.IMG_PREVIEW_VIDEO] : null
                }
            }
        }, d
    }

    function r(e, r, t, n, o, a, i) {
        var l = this;
        l.hasRoomForScroll = {}, t(function() {
            var n = i.buildScrollbarTypeA({
                    jQBlockContainer: r
                }),
                o = n.scrollbarState;
            l.hasRoomForScroll = o.hasRoomForScroll, e.$watch(function() {
                return a.controller.getListItems()
            }, function() {
                t(function() {
                    n.remeasure()
                })
            })
        })
    }
    r.$inject = ["$scope", "$element", "$timeout", "$interval", "$window", "mainPageVideoBlockService", "customScrollService"], e.$inject = ["$q", "Api", "mediusUtils", "$timeout", "$sce", "$window"], angular.module("MainPage2018.Blocks.Video", ["Medius.Utils", "MainPage2018.CustomScroll"]).controller("VideoBlockCtrl", r).factory("mainPageVideoBlockService", e);
    var t = LJ.Config.PostCards.CARD_TYPES,
        n = 3
}();
/* <<< file end: js/mainPage2018/videoBlock.js */

//# map link was there [videoBlock.js.map]
/* >>> file start: js/mainPage2018/props/index.js */
function _toConsumableArray(r) {
    if (Array.isArray(r)) {
        for (var e = 0, t = Array(r.length); e < r.length; e++) t[e] = r[e];
        return t
    }
    return Array.from(r)
}
var _extends = Object.assign || function(r) {
    for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o])
    }
    return r
};
//= require js/medius/utils.js
//= require js/ratings/utils.js
//= require js/mainPage2018/adaptivity.js
//= require js/mainPage2018/promoBlock.js
//= require js/mainPage2018/videoBlock.js
! function(r) {
    return r
}(),
function() {
    "use strict";

    function r(r, o, a, n, i, s, c, l, u, p, g, v, m) {
        var d = {};
        return d.props = {}, d.initProps = function(o) {
            var i = o.window,
                g = {
                    mainBlock: {},
                    topUser: {
                        noCat: []
                    },
                    topRating: []
                };
            d.props = g;
            var f = {},
                P = {};
            ! function() {
                var r = LJ.get("main_data");
                if (r) {
                    var t = Object.keys(e.slots);
                    t.forEach(function(e) {
                        var t = r[e];
                        if (t) {
                            var o = t.cards;
                            if (o && o.length) {
                                var a = o[0];
                                s.getUserProps({
                                    username: a.author_name
                                }).then(function(r) {
                                    var t = _extends({}, r, s.mediusPostDataToCardPropsTypeA({
                                        serverData: a
                                    }), {
                                        type: "common"
                                    });
                                    g.mainBlock[e] = t
                                })
                            }
                        }
                    })
                }
            }();
            var h = function() {
                    var r = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0],
                        e = [].concat(_toConsumableArray(r)),
                        t = [];
                    return r.map(function(r) {
                        var o = Math.floor(Math.random() * e.length);
                        t.push.apply(t, _toConsumableArray(e.splice(o, 1)))
                    }), t
                },
                y = function() {
                    var r = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                        e = {};
                    r.catID && (e.cat_id = r.catID), r.count && (e.count = r.count);
                    var t = void 0;
                    return t = "medius.top_user_cards_choice", a.call(t, e).then(function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                            t = h(e.users || []);
                        return r.limit && (t = t.slice(0, r.limit)), t.map(function(r) {
                            var e = {
                                type: "topUser",
                                journalTitle: r.journaltitle,
                                ratingWhat: r.mlwhat,
                                ratingWhere: r.mlwhere,
                                username: r.username,
                                userpicUrl: r.userpic,
                                journalUrl: r.journal_url
                            };
                            return r.profile_url && (e.profileURL = r.profile_url), +r.num && (e.ratingNum = +r.num), e
                        })
                    })
                };
            c.getRatingEntriesTypeA(50, {
                maxRetries: 6
            }).then(function(r) {
                n(function() {
                    g.topRating = r.map(function(r, e) {
                        var o = LJ.Util.PostCards.serverNamesToProps(r, {
                            RPCSource: "homepage.get_rating"
                        });
                        delete o.likeToken;
                        var a = _extends({
                            type: "common"
                        }, o);
                        return a.allowLikeServerCalls = !1, t([a], "popular"), p.updateLayoutSingleCardProps({
                            cardPropsObj: a,
                            section: "topRating",
                            index: e,
                            window: i
                        }), a
                    })
                })
            });
            var _ = angular.element("[data-block-type=category]"),
                U = _.map(function(r, e) {
                    return e.getAttribute("data-cat-id")
                }).toArray();
            f.topUser = {}, LJ.Flags.isDisabled("top_user_cards") ? (f.topUser.noCat = r.resolve(), f.topUser.perCat = r.resolve()) : ! function() {
                var e = 4,
                    t = 3,
                    o = e + _.length + t,
                    a = y({
                        count: o
                    }).then(function() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0];
                        if (0 === t.length) return r.reject();
                        for (var a = t, n = 0; a.length < o && 10 > n;) a = a.concat(t), n++;
                        g.topUser.noCat = a.slice(0, e), U.forEach(function(r, t) {
                            g.topUser[r] = [a[e + t]]
                        })
                    });
                f.topUser.noCat = a, f.topUser.perCat = a
            }();
            var C = v.initProps({
                categorySectionIDs: U
            });
            f.collection = C.propReadyPromise, g.collection = C.props;
            var k = {};
            return LJ.Flags.isDisabled("your_choice_block") && (k.disableYourChoice = !0), LJ.Flags.isDisabled("your_friends_block") && (k.disableYourFriends = !0), g.yourPicks = m.initProps(k).props, f.categories = l.initProps({
                jQCategorySections: _
            }).then(function(r) {
                g.categories = r
            }), f.promo = u.initProps().then(function(r) {
                g.promo = r
            }), {
                props: g,
                propReadyPromises: f,
                propInitState: P
            }
        }, d.getCardProps = function(r) {
            var e = {};
            r && (e = r);
            var t = m.getCardProps(e);
            return t ? t : void 0
        }, d
    }
    r.$inject = ["$q", "$http", "Api", "$timeout", "$compile", "mediusUtils", "ratingUtils", "mainPageCategoryBlockService", "mainPagePromoBlockService", "mainPageAdaptivityService", "mainPageVideoBlockService", "mainPageCollectionPropsService", "mainPageYourPicksPropsService"], angular.module("MainPage2018.Props", ["Medius.Utils", "LJ.Rating.Utils", "MainPage2018.Adaptivity", "MainPage2018.Blocks.Category", "MainPage2018.Blocks.Promo", "MainPage2018.Blocks.Video"]).factory("mainPagePropsService", r);
    var e = LJ.Config.MainPage.MAIN_BLOCK_LAYOUT,
        t = (!!LJ.get("remote"), function() {
            var r = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0];
            arguments[1];
            r.forEach(function(r) {
                if (r && r.postUrl) {
                    var e = LJ.Util.Link.addQueryParams({
                        sourceURL: r.postUrl,
                        queryParams: {
                            utm_source: "popular"
                        }
                    });
                    r.postUrl = e
                }
            })
        })
}();
/* <<< file end: js/mainPage2018/props/index.js */

//# map link was there [index.js.map]
/* >>> file start: js/mainPage2018/props/collection.js */
var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var o = arguments[t];
        for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
    }
    return e
};
//= require js/medius/utils.js
! function(e) {
    return e
}(),
function() {
    "use strict";

    function e(e, t, o, n, r) {
        var i = {},
            c = !1,
            a = void 0,
            s = function() {};
        return i.getPropsAreInited = function() {
            return c
        }, i.propReadyPromise = e(function(e) {
            s = e
        }), i.initProps = function(e) {
            var t = e.categorySectionIDs,
                r = {},
                i = {
                    categories: t,
                    nonCategories: ["main", "yourChoice"]
                },
                u = Math.ceil(10 * Math.random()),
                l = o.call("medius.collection_items", {
                    slots: i.categories.concat(i.nonCategories),
                    rand: u
                }).then(function(e) {
                    var t = e.items || [];
                    return n(function() {
                        return r.categories = {}, r.nonCategories = {}, Object.keys(t).forEach(function(t) {
                            var o = e.items[t],
                                n = i.nonCategories,
                                c = -1 === n.indexOf(t),
                                a = void 0,
                                s = {
                                    postUrl: o.url,
                                    postTitle: o.subject,
                                    imageUrl: o.image
                                },
                                u = _extends({
                                    type: "collection"
                                }, s);
                            c ? (a = r.categories, u.catID = t) : (a = r.nonCategories, u.section = t), a[t] = u
                        }), c = !0, a = r, s(r), r
                    })
                });
            return {
                props: r,
                propReadyPromise: l
            }
        }, i.getCardProps = function() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            if ("collection" === e.cardType) {
                var t = {};
                return a ? (e.catID ? t = a.categories : e.section && (t = a.nonCategories), t[e.catID || e.section]) : null
            }
        }, i
    }
    e.$inject = ["$q", "$http", "Api", "$timeout", "$compile"], angular.module("MainPage2018.Props.Collection", ["Medius.Utils"]).factory("mainPageCollectionPropsService", e)
}();
/* <<< file end: js/mainPage2018/props/collection.js */

//# map link was there [collection.js.map]
/* >>> file start: js/core/util/postCards.js */
var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l])
    }
    return e
};
//= require js/configs/postCards.js
LJ.define("LJ.Util.PostCards"),
    function() {
        var e = LJ.Config.PostCards.CARD_TYPES;
        LJ.Util.PostCards.getLayoutProps = function() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                r = t.serverCardType,
                l = {};
            return r === e.COMMON_BIG || r === e.COMMON_BIG_WIDE_IMAGE ? l.size = "big" : r === e.COMMON_SMALL ? l.size = "small" : l.size = "medium", r === e.COMMON_VERTICAL_IMAGE || r === e.COMMON_VERTICAL_TEXT || r === e.COMMON_VERTICAL_TEXT_VIDEO || r === e.COMMON_VERTICAL_TEXT_PHOTO ? l.orientation = "vertical" : r !== e.COMMON_HORIZONTAL_IMAGE && r !== e.COMMON_HORIZONTAL_TEXT && r !== e.COMMON_BIG_WIDE_IMAGE || (l.orientation = "horizontal"), r === e.COMMON_BIG_WIDE_IMAGE && (l.codeName = "bigWide"), l
        }, LJ.Util.PostCards.stripLayoutProps = function() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                t = _extends({}, e),
                r = ["size", "orientation", "codeName"];
            return r.forEach(function(e) {
                delete t[e]
            }), t
        }, LJ.Util.PostCards.serverNamesToProps = function(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                r = t.RPCSource,
                l = _extends({}, e);
            return "homepage.your_choice" !== r && "homepage.cool_pool" !== r || (e.reply_count = parseInt(e.reply_count), l = _extends({}, l, {
                lead: e.body,
                postTitle: e.subject,
                imageUrl: e.image_url,
                username: e.username,
                userpicUrl: e.userpic,
                likeCount: e.likes,
                likeToken: e.likes_signature,
                postID: e.ditem_id,
                journalID: e.journal_id,
                readingTime: e.reading_time,
                replyCount: e.reply_count,
                postUrl: e.post_url,
                journalUrl: e.journal,
                profileUrl: e.journal + "/profile",
                likeCount: e.likes || e.likeCount,
                likeToken: e.likes_signature
            }), delete l.body, delete l.subject, delete l.image_url, delete l.userpic, delete l.reading_time, delete l.reply_count, delete l.post_url, delete l.journal_url, delete l.likes_signature, delete l.likes, delete l.ditem_id, delete l.journal_id), "homepage.get_rating" === r && (l = _extends({}, l, {
                postUrl: e.post_url,
                postTitle: e.subject,
                lead: e.body,
                username: e.username,
                journalUrl: e.journal,
                profileUrl: e.profile,
                userpicUrl: e.img || e.userpic,
                likeCount: e.likes || e.likeCount,
                likeToken: e.likes_signature,
                postID: e.post_id,
                journalID: e.journal_id,
                replyCount: +e.reply_count,
                repostCount: e.extra_reposts,
                readingTime: +e.reading_time,
                ratingPosition: e.position
            }), e.image_url && (l.imageUrl = e.image_url, delete l.image_url), delete l.post_url, delete l.subject, delete l.body, delete l.journal, delete l.profile, delete l.img, delete l.userpic, delete l.likes_signature, delete l.likes, delete l.post_id, delete l.journal_id, delete l.reply_count, delete l.extra_reposts, delete l.reading_time, delete l.position), l
        }
    }();
/* <<< file end: js/core/util/postCards.js */

//# map link was there [postCards.js.map]
/* >>> file start: js/core/angular/ref.js */
! function(e) {
    return e
}(),
function() {
    "use strict";
    angular.module("LJ.Ref", []).factory("Ref", function() {
        function e(e, n) {
            return f[e] ? void console.error("Ref element with id `%s` has been registered before.", e) : void(f[e] = n)
        }

        function n(e) {
            f[e] && delete f[e]
        }

        function o(e) {
            var n = f[e];
            return n || console.error("Ref `%s` not found.", e), n
        }

        function r(e, n) {
            "undefined" == typeof n && (n = {});
            var r = o(e),
                f = angular.element("html, body");
            if (!r) return void console.error("Could not scroll to the ref `%s` that has not been already defined.", e);
            var l = r.offset().top;
            n.onlyUp && angular.element(window).scrollTop() <= l || n.onlyOutOfScreen && !t(r) || (n.toParent && (f = r.parent(), l = 0), f.animate({
                scrollTop: l
            }))
        }

        function t(e) {
            var n = angular.element(window),
                o = n.scrollTop(),
                r = o + n.height(),
                t = e.offset().top;
            return t > r - 100 || o > t
        }
        var f = {};
        return {
            add: e,
            remove: n,
            get: o,
            scrollTo: r
        }
    }).directive("ljRef", ["Ref", function(e) {
        return {
            restrict: "A",
            scope: !0,
            link: function(n, o, r) {
                var t = r.ljRef;
                e.add(t, o), n.$on("$destroy", function() {
                    e.remove(t)
                })
            }
        }
    }])
}();
/* <<< file end: js/core/angular/ref.js */

//# map link was there [ref.js.map]
/* >>> file start: js/core/angular/bubble.js */
//= require js/core/angular/ref.js
Site.page.template['Widgets/ljBubble.tmpl'] = '<div\n    class=\"\n        b-popup\n        bubble-node\n        b-popup-withclosecontrol\n        b-bubble-{{bubble.name}}\n        \"\n    ng-show=\"show\"\n    lj-switch-off=\"show\"\n    lj-switch-off-action=\"bubble.close()\"\n    lj-switch-off-ignore-sticky=true\n    ng-style=\"{ left: position.x, top: position.y, visibility: visibility }\"\n    ng-class=\"{\n        \'b-popup-noclosecontrol\': !bubble.options.closeControl\n    }\"\n    lj-switch-off-skip>\n    <div class=\"b-popup-outer\">\n        <div class=\"b-popup-inner\">\n            <i\n                class=\"i-popup-arr\"\n                ng-class=\"arrowClass()\"\n                ng-show=\"getShouldShowArrow()\"\n            >\n                <i class=\"i-popup-arr-brdr-outer\">\n                    <i class=\"i-popup-arr-brdr-inner\">\n                        <i class=\"i-popup-arr-bg\"></i>\n                    </i>\n                </i>\n            </i>\n            <div ng-include src=\"template\"></div>\n            <i\n                class=\"i-popup-close\"\n                ng-click=\"bubble.close()\"\n                ng-show=\"getShowCloseBtn()\"\n            ></i>\n        </div>\n    </div>\n</div>\n';
Site.page.template['angular/confirm.bubble.ng.tmpl'] = '<div class=\"b-popup-content b-popup-options-centered\">\n  <div class=\"b-popup-content-header\">\n    <span>{{ bubble.options.header }}</span>\n  </div>\n  <div class=\"b-popup-content-confirm\" ng-bind-html=\"bubble.options.text\"></div>\n  <div class=\"b-popup-submit-options\">\n    <button class=\"b-popup-btn b-flatbutton b-flatbutton-simple\" ng-click=\"bubble.options.confirm()\">{{ bubble.options.yes }}</button>\n    <button class=\"b-popup-cancel b-flatbutton b-flatbutton-simple b-flatbutton-neutral\" ng-click=\"bubble.close()\">{{ bubble.options.no }}</button>\n  </div>\n</div>\n';
//= require_ml confirm.bubble.yes
//= require_ml confirm.bubble.no
! function() {
    "use strict";

    function e(e, o, t, n, r) {
        return {
            scope: !0,
            link: function(i, l, a) {
                function u() {
                    var e = i.arrow.vertical,
                        o = i.arrow.horizontal,
                        t = W.aside,
                        r = H.innerWidth <= 650;
                    i.visibility = "hidden", W.keepInitialWidth && !W.widthSaved && (W.widthSaved = !0, L.width(L.width())), b(), p() && !r && (i.arrow.vertical = "b" === e ? f("alwaysTop") ? "b" : "t" : f("alwaysBottom") ? "t" : "b", b(), h() && !f("alwaysTop") && (i.arrow.vertical = "t", b())), w() && !r && (i.arrow.horizontal = "l" === o ? f("alwaysRight") || v() ? "l" : "r" : f("alwaysLeft") || g() ? "r" : "l"), !r && w() && i.arrow.horizontal === o && c() && (W.aside = !0), r || i.arrow.horizontal === o && i.arrow.vertical === e && W.aside === t ? i.visibility = "visible" : n(s)
                }

                function s() {
                    return b(), w() && c() ? (W.aside = !0, i.$apply(), void s()) : w() && !f("aside") && i.arrow.horizontal ? (i.arrow.horizontal = "", void s()) : void(i.visibility = "visible")
                }

                function c() {
                    return !f("aside") && f("tryAsideIfNoHorizSpace")
                }

                function f(e) {
                    return i.bubble.options[e] || W[e]
                }

                function b() {
                    var o = e.node || l,
                        t = o.offset().left + Math.floor(o.outerWidth() / 2),
                        n = i.bubble.options.forceX || 0,
                        r = i.bubble.options.forceY || 0;
                    if (f("aside")) i.position.x = "r" === i.arrow.horizontal ? o.offset().left - L.outerWidth() - x.outerWidth() + n : o.offset().left + o.outerWidth() + x.outerWidth() + n, i.position.y = o.offset().top - x.position().top + (o.outerHeight() - x.outerHeight()) / 2 + r;
                    else {
                        if ("center" === i.arrow.horizontal) {
                            var a = void 0;
                            a = x.is(":visible") ? x.position().left : L.outerWidth() / 2, i.position.x = t - a + n
                        } else i.position.x = i.arrow.horizontal ? t - x.position().left - Math.floor(x.outerWidth() / 2) - 2 + n : t - L.outerWidth() / 2 - Math.floor(x.outerWidth() / 4) - 2 + n;
                        i.position.y = "t" === i.arrow.vertical ? o.offset().top + o.outerHeight() + x.outerHeight() + r : o.offset().top - x.outerHeight() - L.outerHeight() + r
                    }
                }

                function d() {
                    i.position.x = -9999
                }

                function p() {
                    return h() ? !0 : i.position.y + L.outerHeight() > H.scrollTop() + H.outerHeight()
                }

                function h() {
                    return i.position.y < H.scrollTop()
                }

                function w() {
                    return v() || g()
                }

                function v() {
                    return i.position.x < H.scrollLeft()
                }

                function g() {
                    return i.position.x + L.outerWidth() > H.scrollLeft() + H.outerWidth()
                }

                function m(o) {
                    o.preventDefault(), e.current !== W.name && n(function() {
                        e.open(W.name)
                    })
                }

                function y() {
                    $(), J && (B = n(e.close, J))
                }

                function $() {
                    n.cancel(B)
                }

                function z() {
                    var o = W.name,
                        t = e.current;
                    o === t && ($(), e.close(), i.$apply())
                }

                function C() {
                    i.show && n(j)
                }
                var B, W = o(a.ljBubble)(i),
                    S = W.name,
                    L = t(r.get("ljBubble.tmpl"))(i),
                    j = LJ.Function.throttle(u, 50),
                    x = L.find(".i-popup-arr"),
                    H = angular.element(window),
                    O = W.eventType || "click",
                    J = Number(W.autoClose || 0);
                i.show = !1, e._register(S, W), i.template = W.template || S + ".html", i.bubble = {
                    name: S,
                    close: e.close,
                    options: e.options(S)
                }, i.clear = function() {
                    i.arrow = {
                        vertical: W.arrowInitialVertical || "t",
                        horizontal: W.arrowInitialHorizontal || "l"
                    }
                }, i.position = {
                    x: -9999,
                    y: -9999
                }, i.visibility = "hidden", i.arrowClass = function() {
                    var e = i.bubble.options,
                        o = i.arrow.vertical,
                        t = void 0;
                    return t = "center" === i.arrow.horizontal ? "" : i.arrow.horizontal, e.aside || W.aside ? "i-popup-arr" + t + o : "i-popup-arr" + o + t
                }, i.getShouldShowArrow = function() {
                    return angular.isDefined(i.bubble.options.showArrow) ? i.bubble.options.showArrow : angular.isDefined(W.showArrow) ? W.showArrow : !0
                }, i.getShowCloseBtn = function() {
                    return angular.isDefined(i.bubble.options.showCloseBtn) ? i.bubble.options.showCloseBtn : angular.isDefined(W.showCloseBtn) ? W.showCloseBtn : !0
                }, i.$on("bubble:reposition:" + S, function() {
                    n(j)
                }), i.$watch(function() {
                    return e.current
                }, function(e) {
                    d(), n(function() {
                        i.show = e === S, e && i.show && (i.clear(), n(j))
                    })
                }, !0), W.disableClick || l.on(O, m), W.disableResizeListener || H.on("resize", C), W.recalculateOnOrientationChange && H.on("orientationchange", function() {
                    C(), H.on("resize", C), n(function() {
                        H.off("resize", C)
                    }, 1e3)
                }), W.recalculateOnScroll && H.on("scroll", C), W.closeOnScroll && H.on("scroll", z), angular.element("body").append(L), l.on("mouseleave", y), L.on("mouseenter", $), L.on("mouseleave", y), i.clear(), i.$on("$destroy", function() {
                    l.off(O, m), H.off("resize", C), H.off("scroll", C), H.off("scroll", e.close), l.off("mouseleave", y), L.off("mouseenter", $), L.off("mouseleave", y), e._unregister(S), L.remove()
                })
            }
        }
    }

    function o(e, o, n, r, i, l) {
        var a = {},
            u = {};
        return a.current = null, a.node = null, a.register = function() {
            function t(t, i) {
                var a, u, s;
                return t && t.name && t.template ? (a = t.name, t.disableClick = !0, r[a] ? (r[a].count += 1, n.bind(null, a)) : (u = angular.element("<div />").attr("lj-bubble", angular.toJson(t)), s = "undefined" == typeof i, s && (i = e.$new(!0)), u.appendTo("body"), o(u)(i), r[a] = {
                    count: 1,
                    node: u,
                    scope: i,
                    isScopeCreated: s
                }, n.bind(null, a))) : void l.error("Incorrect bubble options. You should provide name and template.", t)
            }

            function n(e) {
                var o = r[e];
                o && (o.count -= 1, 0 === o.count && (o.isScopeCreated || o.scope.$destroy(), o.node.remove(), delete r[e]))
            }
            var r = {};
            return t
        }(), a.exists = function(e) {
            return u.hasOwnProperty(e)
        }, a._register = function(e, o) {
            var t;
            if (u.hasOwnProperty(e)) throw "Warning: bubble with name " + e + " has been registered before!";
            t = angular.isDefined(o) ? angular.copy(o) : {}, t = angular.extend({
                closeControl: !0
            }, t), u[e] = Object.create(t)
        }, a._unregister = function(e) {
            delete u[e], a.current === e && (a.current = null)
        }, a.confirm = function(e) {
            function o() {
                i.scrollBy(0, 1), i.scrollBy(0, -1)
            }
            var t = LJ.ml("confirm.bubble.yes"),
                n = LJ.ml("confirm.bubble.no"),
                l = {
                    closeControl: !1,
                    confirm: e.confirm,
                    header: e.header,
                    text: e.text,
                    yes: e.yes || t,
                    no: e.no || n
                };
            a.open(e.id, l), r(o), r(o, 100), r(o, 200), r(o, 300)
        }, a.open = function(o, r, i) {
            return u.hasOwnProperty(o) ? (r instanceof jQuery && (i = r, r = {}), angular.isString(r) && (i = n.get(r), r = {}), angular.isObject(r) && a.options(o, r), i instanceof jQuery && (a.node instanceof jQuery && !a.node.is(i) && e.$broadcast("bubble:reposition:" + o), a.node = i), angular.isString(i) && (a.node = n.get(i)), a.current = o, e.$broadcast("bubble:open", o, r, i), e.$broadcast("bubble:open:" + o, o, r, i), void angular.element("body").addClass(t)) : void l.error("Bubble `" + o + "` can't be opened, it has not been registered yet.")
        }, a.close = function() {
            var o, n = a.current,
                r = u[n];
            e.$broadcast("bubble:close", n, r, a.node), e.$broadcast("bubble:close:" + n, n, r, a.node);
            for (o in r) r.hasOwnProperty(o) && delete r[o];
            a.current = null, a.node = null, angular.element("body").removeClass(t)
        }, a.options = function(e, o) {
            return "undefined" == typeof o || o === u[e] ? u[e] : void angular.copy(o, u[e])
        }, a
    }
    angular.module("LJ.Bubble", ["LJ.Templates", "LJ.Directives", "LJ.Ref"]), angular.module("LJ.Bubble").factory("Bubble", o).directive("ljBubble", e);
    var t = "p-openpopup";
    e.$inject = ["Bubble", "$parse", "$compile", "$timeout", "$templateCache"], o.$inject = ["$rootScope", "$compile", "Ref", "$timeout", "$window", "$log"]
}();
/* <<< file end: js/core/angular/bubble.js */

//# map link was there [bubble.js.map]
/* >>> file start: js/node_modules/moment/min/moment.min.js */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
};
! function(t, e) {
    "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e()
}(this, function() {
    "use strict";

    function t() {
        return Pn.apply(null, arguments)
    }

    function e(t) {
        Pn = t
    }

    function n(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }

    function i(t) {
        return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
    }

    function r(t, e) {
        var n, i = [];
        for (n = 0; n < t.length; ++n) i.push(e(t[n], n));
        return i
    }

    function s(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }

    function o(t, e) {
        for (var n in e) s(e, n) && (t[n] = e[n]);
        return s(e, "toString") && (t.toString = e.toString), s(e, "valueOf") && (t.valueOf = e.valueOf), t
    }

    function a(t, e, n, i) {
        return Ot(t, e, n, i, !0).utc()
    }

    function u() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }

    function d(t) {
        return null == t._pf && (t._pf = u()), t._pf
    }

    function l(t) {
        if (null == t._isValid) {
            var e = d(t);
            t._isValid = !(isNaN(t._d.getTime()) || !(e.overflow < 0) || e.empty || e.invalidMonth || e.invalidWeekday || e.nullInput || e.invalidFormat || e.userInvalidated), t._strict && (t._isValid = t._isValid && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour)
        }
        return t._isValid
    }

    function c(t) {
        var e = a(NaN);
        return null != t ? o(d(e), t) : d(e).userInvalidated = !0, e
    }

    function f(t, e) {
        var n, i, r;
        if ("undefined" != typeof e._isAMomentObject && (t._isAMomentObject = e._isAMomentObject), "undefined" != typeof e._i && (t._i = e._i), "undefined" != typeof e._f && (t._f = e._f), "undefined" != typeof e._l && (t._l = e._l), "undefined" != typeof e._strict && (t._strict = e._strict), "undefined" != typeof e._tzm && (t._tzm = e._tzm), "undefined" != typeof e._isUTC && (t._isUTC = e._isUTC), "undefined" != typeof e._offset && (t._offset = e._offset), "undefined" != typeof e._pf && (t._pf = d(e)), "undefined" != typeof e._locale && (t._locale = e._locale), Hn.length > 0)
            for (n in Hn) i = Hn[n], r = e[i], "undefined" != typeof r && (t[i] = r);
        return t
    }

    function h(e) {
        f(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), Ln === !1 && (Ln = !0, t.updateOffset(this), Ln = !1)
    }

    function m(t) {
        return t instanceof h || null != t && null != t._isAMomentObject
    }

    function _(t) {
        return 0 > t ? Math.ceil(t) : Math.floor(t)
    }

    function y(t) {
        var e = +t,
            n = 0;
        return 0 !== e && isFinite(e) && (n = _(e)), n
    }

    function p(t, e, n) {
        var i, r = Math.min(t.length, e.length),
            s = Math.abs(t.length - e.length),
            o = 0;
        for (i = 0; r > i; i++)(n && t[i] !== e[i] || !n && y(t[i]) !== y(e[i])) && o++;
        return o + s
    }

    function g() {}

    function v(t) {
        return t ? t.toLowerCase().replace("_", "-") : t
    }

    function D(t) {
        for (var e, n, i, r, s = 0; s < t.length;) {
            for (r = v(t[s]).split("-"), e = r.length, n = v(t[s + 1]), n = n ? n.split("-") : null; e > 0;) {
                if (i = M(r.slice(0, e).join("-"))) return i;
                if (n && n.length >= e && p(r, n, !0) >= e - 1) break;
                e--
            }
            s++
        }
        return null
    }

    function M(t) {
        var e = null;
        if (!In[t] && "undefined" != typeof module && module && module.exports) try {
            e = xn._abbr, require("./locale/" + t), Y(e)
        } catch (n) {}
        return In[t]
    }

    function Y(t, e) {
        var n;
        return t && (n = "undefined" == typeof e ? S(t) : w(t, e), n && (xn = n)), xn._abbr
    }

    function w(t, e) {
        return null !== e ? (e.abbr = t, In[t] = In[t] || new g, In[t].set(e), Y(t), In[t]) : (delete In[t], null)
    }

    function S(t) {
        var e;
        if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return xn;
        if (!n(t)) {
            if (e = M(t)) return e;
            t = [t]
        }
        return D(t)
    }

    function k(t, e) {
        var n = t.toLowerCase();
        An[n] = An[n + "s"] = An[e] = t
    }

    function T(t) {
        return "string" == typeof t ? An[t] || An[t.toLowerCase()] : void 0
    }

    function b(t) {
        var e, n, i = {};
        for (n in t) s(t, n) && (e = T(n), e && (i[e] = t[n]));
        return i
    }

    function O(e, n) {
        return function(i) {
            return null != i ? (W(this, e, i), t.updateOffset(this, n), this) : U(this, e)
        }
    }

    function U(t, e) {
        return t._d["get" + (t._isUTC ? "UTC" : "") + e]()
    }

    function W(t, e, n) {
        return t._d["set" + (t._isUTC ? "UTC" : "") + e](n)
    }

    function C(t, e) {
        var n;
        if ("object" == ("undefined" == typeof t ? "undefined" : _typeof(t)))
            for (n in t) this.set(n, t[n]);
        else if (t = T(t), "function" == typeof this[t]) return this[t](e);
        return this
    }

    function G(t, e, n) {
        var i = "" + Math.abs(t),
            r = e - i.length,
            s = t >= 0;
        return (s ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i
    }

    function F(t, e, n, i) {
        var r = i;
        "string" == typeof i && (r = function() {
            return this[i]()
        }), t && (jn[t] = r), e && (jn[e[0]] = function() {
            return G(r.apply(this, arguments), e[1], e[2])
        }), n && (jn[n] = function() {
            return this.localeData().ordinal(r.apply(this, arguments), t)
        })
    }

    function P(t) {
        return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
    }

    function x(t) {
        var e, n, i = t.match(zn);
        for (e = 0, n = i.length; n > e; e++) jn[i[e]] ? i[e] = jn[i[e]] : i[e] = P(i[e]);
        return function(r) {
            var s = "";
            for (e = 0; n > e; e++) s += i[e] instanceof Function ? i[e].call(r, t) : i[e];
            return s
        }
    }

    function H(t, e) {
        return t.isValid() ? (e = L(e, t.localeData()), Zn[e] = Zn[e] || x(e), Zn[e](t)) : t.localeData().invalidDate()
    }

    function L(t, e) {
        function n(t) {
            return e.longDateFormat(t) || t
        }
        var i = 5;
        for (Nn.lastIndex = 0; i >= 0 && Nn.test(t);) t = t.replace(Nn, n), Nn.lastIndex = 0, i -= 1;
        return t
    }

    function I(t) {
        return "function" == typeof t && "[object Function]" === Object.prototype.toString.call(t)
    }

    function A(t, e, n) {
        ri[t] = I(e) ? e : function(t) {
            return t && n ? n : e
        }
    }

    function z(t, e) {
        return s(ri, t) ? ri[t](e._strict, e._locale) : new RegExp(N(t))
    }

    function N(t) {
        return t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, i, r) {
            return e || n || i || r
        }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function Z(t, e) {
        var n, i = e;
        for ("string" == typeof t && (t = [t]), "number" == typeof e && (i = function(t, n) {
                n[e] = y(t)
            }), n = 0; n < t.length; n++) si[t[n]] = i
    }

    function j(t, e) {
        Z(t, function(t, n, i, r) {
            i._w = i._w || {}, e(t, i._w, i, r)
        })
    }

    function E(t, e, n) {
        null != e && s(si, t) && si[t](e, n._a, n, t)
    }

    function V(t, e) {
        return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
    }

    function q(t) {
        return this._months[t.month()]
    }

    function J(t) {
        return this._monthsShort[t.month()]
    }

    function $(t, e, n) {
        var i, r, s;
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; 12 > i; i++) {
            if (r = a([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (s = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(s.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[i].test(t)) return i;
            if (n && "MMM" === e && this._shortMonthsParse[i].test(t)) return i;
            if (!n && this._monthsParse[i].test(t)) return i
        }
    }

    function R(t, e) {
        var n;
        return "string" == typeof e && (e = t.localeData().monthsParse(e), "number" != typeof e) ? t : (n = Math.min(t.date(), V(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t)
    }

    function B(e) {
        return null != e ? (R(this, e), t.updateOffset(this, !0), this) : U(this, "Month")
    }

    function Q() {
        return V(this.year(), this.month())
    }

    function X(t) {
        var e, n = t._a;
        return n && -2 === d(t).overflow && (e = n[ai] < 0 || n[ai] > 11 ? ai : n[ui] < 1 || n[ui] > V(n[oi], n[ai]) ? ui : n[di] < 0 || n[di] > 24 || 24 === n[di] && (0 !== n[li] || 0 !== n[ci] || 0 !== n[fi]) ? di : n[li] < 0 || n[li] > 59 ? li : n[ci] < 0 || n[ci] > 59 ? ci : n[fi] < 0 || n[fi] > 999 ? fi : -1, d(t)._overflowDayOfYear && (oi > e || e > ui) && (e = ui), d(t).overflow = e), t
    }

    function K(e) {
        t.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }

    function tt(t, e) {
        var n = !0;
        return o(function() {
            return n && (K(t + "\n" + (new Error).stack), n = !1), e.apply(this, arguments)
        }, e)
    }

    function et(t, e) {
        _i[t] || (K(e), _i[t] = !0)
    }

    function nt(t) {
        var e, n, i = t._i,
            r = yi.exec(i);
        if (r) {
            for (d(t).iso = !0, e = 0, n = pi.length; n > e; e++)
                if (pi[e][1].exec(i)) {
                    t._f = pi[e][0];
                    break
                } for (e = 0, n = gi.length; n > e; e++)
                if (gi[e][1].exec(i)) {
                    t._f += (r[6] || " ") + gi[e][0];
                    break
                } i.match(ei) && (t._f += "Z"), Mt(t)
        } else t._isValid = !1
    }

    function it(e) {
        var n = vi.exec(e._i);
        return null !== n ? void(e._d = new Date(+n[1])) : (nt(e), void(e._isValid === !1 && (delete e._isValid, t.createFromInputFallback(e))))
    }

    function rt(t, e, n, i, r, s, o) {
        var a = new Date(t, e, n, i, r, s, o);
        return 1970 > t && a.setFullYear(t), a
    }

    function st(t) {
        var e = new Date(Date.UTC.apply(null, arguments));
        return 1970 > t && e.setUTCFullYear(t), e
    }

    function ot(t) {
        return at(t) ? 366 : 365
    }

    function at(t) {
        return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
    }

    function ut() {
        return at(this.year())
    }

    function dt(t, e, n) {
        var i, r = n - e,
            s = n - t.day();
        return s > r && (s -= 7), r - 7 > s && (s += 7), i = Ut(t).add(s, "d"), {
            week: Math.ceil(i.dayOfYear() / 7),
            year: i.year()
        }
    }

    function lt(t) {
        return dt(t, this._week.dow, this._week.doy).week
    }

    function ct() {
        return this._week.dow
    }

    function ft() {
        return this._week.doy
    }

    function ht(t) {
        var e = this.localeData().week(this);
        return null == t ? e : this.add(7 * (t - e), "d")
    }

    function mt(t) {
        var e = dt(this, 1, 4).week;
        return null == t ? e : this.add(7 * (t - e), "d")
    }

    function _t(t, e, n, i, r) {
        var s, o = 6 + r - i,
            a = st(t, 0, 1 + o),
            u = a.getUTCDay();
        return r > u && (u += 7), n = null != n ? 1 * n : r, s = 1 + o + 7 * (e - 1) - u + n, {
            year: s > 0 ? t : t - 1,
            dayOfYear: s > 0 ? s : ot(t - 1) + s
        }
    }

    function yt(t) {
        var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == t ? e : this.add(t - e, "d")
    }

    function pt(t, e, n) {
        return null != t ? t : null != e ? e : n
    }

    function gt(t) {
        var e = new Date;
        return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
    }

    function vt(t) {
        var e, n, i, r, s = [];
        if (!t._d) {
            for (i = gt(t), t._w && null == t._a[ui] && null == t._a[ai] && Dt(t), t._dayOfYear && (r = pt(t._a[oi], i[oi]), t._dayOfYear > ot(r) && (d(t)._overflowDayOfYear = !0), n = st(r, 0, t._dayOfYear), t._a[ai] = n.getUTCMonth(), t._a[ui] = n.getUTCDate()), e = 0; 3 > e && null == t._a[e]; ++e) t._a[e] = s[e] = i[e];
            for (; 7 > e; e++) t._a[e] = s[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
            24 === t._a[di] && 0 === t._a[li] && 0 === t._a[ci] && 0 === t._a[fi] && (t._nextDay = !0, t._a[di] = 0), t._d = (t._useUTC ? st : rt).apply(null, s), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[di] = 24)
        }
    }

    function Dt(t) {
        var e, n, i, r, s, o, a;
        e = t._w, null != e.GG || null != e.W || null != e.E ? (s = 1, o = 4, n = pt(e.GG, t._a[oi], dt(Ut(), 1, 4).year), i = pt(e.W, 1), r = pt(e.E, 1)) : (s = t._locale._week.dow, o = t._locale._week.doy, n = pt(e.gg, t._a[oi], dt(Ut(), s, o).year), i = pt(e.w, 1), null != e.d ? (r = e.d, s > r && ++i) : r = null != e.e ? e.e + s : s), a = _t(n, i, r, o, s), t._a[oi] = a.year, t._dayOfYear = a.dayOfYear
    }

    function Mt(e) {
        if (e._f === t.ISO_8601) return void nt(e);
        e._a = [], d(e).empty = !0;
        var n, i, r, s, o, a = "" + e._i,
            u = a.length,
            l = 0;
        for (r = L(e._f, e._locale).match(zn) || [], n = 0; n < r.length; n++) s = r[n], i = (a.match(z(s, e)) || [])[0], i && (o = a.substr(0, a.indexOf(i)), o.length > 0 && d(e).unusedInput.push(o), a = a.slice(a.indexOf(i) + i.length), l += i.length), jn[s] ? (i ? d(e).empty = !1 : d(e).unusedTokens.push(s), E(s, i, e)) : e._strict && !i && d(e).unusedTokens.push(s);
        d(e).charsLeftOver = u - l, a.length > 0 && d(e).unusedInput.push(a), d(e).bigHour === !0 && e._a[di] <= 12 && e._a[di] > 0 && (d(e).bigHour = void 0), e._a[di] = Yt(e._locale, e._a[di], e._meridiem), vt(e), X(e)
    }

    function Yt(t, e, n) {
        var i;
        return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? (i = t.isPM(n), i && 12 > e && (e += 12), i || 12 !== e || (e = 0), e) : e
    }

    function wt(t) {
        var e, n, i, r, s;
        if (0 === t._f.length) return d(t).invalidFormat = !0, void(t._d = new Date(NaN));
        for (r = 0; r < t._f.length; r++) s = 0, e = f({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[r], Mt(e), l(e) && (s += d(e).charsLeftOver, s += 10 * d(e).unusedTokens.length, d(e).score = s, (null == i || i > s) && (i = s, n = e));
        o(t, n || e)
    }

    function St(t) {
        if (!t._d) {
            var e = b(t._i);
            t._a = [e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], vt(t)
        }
    }

    function kt(t) {
        var e = new h(X(Tt(t)));
        return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e
    }

    function Tt(t) {
        var e = t._i,
            r = t._f;
        return t._locale = t._locale || S(t._l), null === e || void 0 === r && "" === e ? c({
            nullInput: !0
        }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), m(e) ? new h(X(e)) : (n(r) ? wt(t) : r ? Mt(t) : i(e) ? t._d = e : bt(t), t))
    }

    function bt(e) {
        var s = e._i;
        void 0 === s ? e._d = new Date : i(s) ? e._d = new Date(+s) : "string" == typeof s ? it(e) : n(s) ? (e._a = r(s.slice(0), function(t) {
            return parseInt(t, 10)
        }), vt(e)) : "object" == ("undefined" == typeof s ? "undefined" : _typeof(s)) ? St(e) : "number" == typeof s ? e._d = new Date(s) : t.createFromInputFallback(e)
    }

    function Ot(t, e, n, i, r) {
        var s = {};
        return "boolean" == typeof n && (i = n, n = void 0), s._isAMomentObject = !0, s._useUTC = s._isUTC = r, s._l = n, s._i = t, s._f = e, s._strict = i, kt(s)
    }

    function Ut(t, e, n, i) {
        return Ot(t, e, n, i, !1)
    }

    function Wt(t, e) {
        var i, r;
        if (1 === e.length && n(e[0]) && (e = e[0]), !e.length) return Ut();
        for (i = e[0], r = 1; r < e.length; ++r)(!e[r].isValid() || e[r][t](i)) && (i = e[r]);
        return i
    }

    function Ct() {
        var t = [].slice.call(arguments, 0);
        return Wt("isBefore", t)
    }

    function Gt() {
        var t = [].slice.call(arguments, 0);
        return Wt("isAfter", t)
    }

    function Ft(t) {
        var e = b(t),
            n = e.year || 0,
            i = e.quarter || 0,
            r = e.month || 0,
            s = e.week || 0,
            o = e.day || 0,
            a = e.hour || 0,
            u = e.minute || 0,
            d = e.second || 0,
            l = e.millisecond || 0;
        this._milliseconds = +l + 1e3 * d + 6e4 * u + 36e5 * a, this._days = +o + 7 * s, this._months = +r + 3 * i + 12 * n, this._data = {}, this._locale = S(), this._bubble()
    }

    function Pt(t) {
        return t instanceof Ft
    }

    function xt(t, e) {
        F(t, 0, 0, function() {
            var t = this.utcOffset(),
                n = "+";
            return 0 > t && (t = -t, n = "-"), n + G(~~(t / 60), 2) + e + G(~~t % 60, 2)
        })
    }

    function Ht(t) {
        var e = (t || "").match(ei) || [],
            n = e[e.length - 1] || [],
            i = (n + "").match(Si) || ["-", 0, 0],
            r = +(60 * i[1]) + y(i[2]);
        return "+" === i[0] ? r : -r
    }

    function Lt(e, n) {
        var r, s;
        return n._isUTC ? (r = n.clone(), s = (m(e) || i(e) ? +e : +Ut(e)) - +r, r._d.setTime(+r._d + s), t.updateOffset(r, !1), r) : Ut(e).local()
    }

    function It(t) {
        return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
    }

    function At(e, n) {
        var i, r = this._offset || 0;
        return null != e ? ("string" == typeof e && (e = Ht(e)), Math.abs(e) < 16 && (e = 60 * e), !this._isUTC && n && (i = It(this)), this._offset = e, this._isUTC = !0, null != i && this.add(i, "m"), r !== e && (!n || this._changeInProgress ? ee(this, Bt(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? r : It(this)
    }

    function zt(t, e) {
        return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
    }

    function Nt(t) {
        return this.utcOffset(0, t)
    }

    function Zt(t) {
        return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(It(this), "m")), this
    }

    function jt() {
        return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Ht(this._i)), this
    }

    function Et(t) {
        return t = t ? Ut(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0
    }

    function Vt() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function qt() {
        if ("undefined" != typeof this._isDSTShifted) return this._isDSTShifted;
        var t = {};
        if (f(t, this), t = Tt(t), t._a) {
            var e = t._isUTC ? a(t._a) : Ut(t._a);
            this._isDSTShifted = this.isValid() && p(t._a, e.toArray()) > 0
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    }

    function Jt() {
        return !this._isUTC
    }

    function $t() {
        return this._isUTC
    }

    function Rt() {
        return this._isUTC && 0 === this._offset
    }

    function Bt(t, e) {
        var n, i, r, o = t,
            a = null;
        return Pt(t) ? o = {
            ms: t._milliseconds,
            d: t._days,
            M: t._months
        } : "number" == typeof t ? (o = {}, e ? o[e] = t : o.milliseconds = t) : (a = ki.exec(t)) ? (n = "-" === a[1] ? -1 : 1, o = {
            y: 0,
            d: y(a[ui]) * n,
            h: y(a[di]) * n,
            m: y(a[li]) * n,
            s: y(a[ci]) * n,
            ms: y(a[fi]) * n
        }) : (a = Ti.exec(t)) ? (n = "-" === a[1] ? -1 : 1, o = {
            y: Qt(a[2], n),
            M: Qt(a[3], n),
            d: Qt(a[4], n),
            h: Qt(a[5], n),
            m: Qt(a[6], n),
            s: Qt(a[7], n),
            w: Qt(a[8], n)
        }) : null == o ? o = {} : "object" == ("undefined" == typeof o ? "undefined" : _typeof(o)) && ("from" in o || "to" in o) && (r = Kt(Ut(o.from), Ut(o.to)), o = {}, o.ms = r.milliseconds, o.M = r.months), i = new Ft(o), Pt(t) && s(t, "_locale") && (i._locale = t._locale), i
    }

    function Qt(t, e) {
        var n = t && parseFloat(t.replace(",", "."));
        return (isNaN(n) ? 0 : n) * e
    }

    function Xt(t, e) {
        var n = {
            milliseconds: 0,
            months: 0
        };
        return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
    }

    function Kt(t, e) {
        var n;
        return e = Lt(e, t), t.isBefore(e) ? n = Xt(t, e) : (n = Xt(e, t), n.milliseconds = -n.milliseconds, n.months = -n.months), n
    }

    function te(t, e) {
        return function(n, i) {
            var r, s;
            return null === i || isNaN(+i) || (et(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period)."), s = n, n = i, i = s), n = "string" == typeof n ? +n : n, r = Bt(n, i), ee(this, r, t), this
        }
    }

    function ee(e, n, i, r) {
        var s = n._milliseconds,
            o = n._days,
            a = n._months;
        r = null == r ? !0 : r, s && e._d.setTime(+e._d + s * i), o && W(e, "Date", U(e, "Date") + o * i), a && R(e, U(e, "Month") + a * i), r && t.updateOffset(e, o || a)
    }

    function ne(t, e) {
        var n = t || Ut(),
            i = Lt(n, this).startOf("day"),
            r = this.diff(i, "days", !0),
            s = -6 > r ? "sameElse" : -1 > r ? "lastWeek" : 0 > r ? "lastDay" : 1 > r ? "sameDay" : 2 > r ? "nextDay" : 7 > r ? "nextWeek" : "sameElse";
        return this.format(e && e[s] || this.localeData().calendar(s, this, Ut(n)))
    }

    function ie() {
        return new h(this)
    }

    function re(t, e) {
        var n;
        return e = T("undefined" != typeof e ? e : "millisecond"), "millisecond" === e ? (t = m(t) ? t : Ut(t), +this > +t) : (n = m(t) ? +t : +Ut(t), n < +this.clone().startOf(e))
    }

    function se(t, e) {
        var n;
        return e = T("undefined" != typeof e ? e : "millisecond"), "millisecond" === e ? (t = m(t) ? t : Ut(t), +t > +this) : (n = m(t) ? +t : +Ut(t), +this.clone().endOf(e) < n)
    }

    function oe(t, e, n) {
        return this.isAfter(t, n) && this.isBefore(e, n)
    }

    function ae(t, e) {
        var n;
        return e = T(e || "millisecond"), "millisecond" === e ? (t = m(t) ? t : Ut(t), +this === +t) : (n = +Ut(t), +this.clone().startOf(e) <= n && n <= +this.clone().endOf(e))
    }

    function ue(t, e, n) {
        var i, r, s = Lt(t, this),
            o = 6e4 * (s.utcOffset() - this.utcOffset());
        return e = T(e), "year" === e || "month" === e || "quarter" === e ? (r = de(this, s), "quarter" === e ? r /= 3 : "year" === e && (r /= 12)) : (i = this - s, r = "second" === e ? i / 1e3 : "minute" === e ? i / 6e4 : "hour" === e ? i / 36e5 : "day" === e ? (i - o) / 864e5 : "week" === e ? (i - o) / 6048e5 : i), n ? r : _(r)
    }

    function de(t, e) {
        var n, i, r = 12 * (e.year() - t.year()) + (e.month() - t.month()),
            s = t.clone().add(r, "months");
        return 0 > e - s ? (n = t.clone().add(r - 1, "months"), i = (e - s) / (s - n)) : (n = t.clone().add(r + 1, "months"), i = (e - s) / (n - s)), -(r + i)
    }

    function le() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function ce() {
        var t = this.clone().utc();
        return 0 < t.year() && t.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : H(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : H(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }

    function fe(e) {
        var n = H(this, e || t.defaultFormat);
        return this.localeData().postformat(n)
    }

    function he(t, e) {
        return this.isValid() ? Bt({
            to: this,
            from: t
        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }

    function me(t) {
        return this.from(Ut(), t)
    }

    function _e(t, e) {
        return this.isValid() ? Bt({
            from: this,
            to: t
        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }

    function ye(t) {
        return this.to(Ut(), t)
    }

    function pe(t) {
        var e;
        return void 0 === t ? this._locale._abbr : (e = S(t), null != e && (this._locale = e), this)
    }

    function ge() {
        return this._locale
    }

    function ve(t) {
        switch (t = T(t)) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
        }
        return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
    }

    function De(t) {
        return t = T(t), void 0 === t || "millisecond" === t ? this : this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms")
    }

    function Me() {
        return +this._d - 6e4 * (this._offset || 0)
    }

    function Ye() {
        return Math.floor(+this / 1e3)
    }

    function we() {
        return this._offset ? new Date(+this) : this._d
    }

    function Se() {
        var t = this;
        return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
    }

    function ke() {
        var t = this;
        return {
            years: t.year(),
            months: t.month(),
            date: t.date(),
            hours: t.hours(),
            minutes: t.minutes(),
            seconds: t.seconds(),
            milliseconds: t.milliseconds()
        }
    }

    function Te() {
        return l(this)
    }

    function be() {
        return o({}, d(this))
    }

    function Oe() {
        return d(this).overflow
    }

    function Ue(t, e) {
        F(0, [t, t.length], 0, e)
    }

    function We(t, e, n) {
        return dt(Ut([t, 11, 31 + e - n]), e, n).week
    }

    function Ce(t) {
        var e = dt(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
        return null == t ? e : this.add(t - e, "y")
    }

    function Ge(t) {
        var e = dt(this, 1, 4).year;
        return null == t ? e : this.add(t - e, "y")
    }

    function Fe() {
        return We(this.year(), 1, 4)
    }

    function Pe() {
        var t = this.localeData()._week;
        return We(this.year(), t.dow, t.doy)
    }

    function xe(t) {
        return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
    }

    function He(t, e) {
        return "string" != typeof t ? t : isNaN(t) ? (t = e.weekdaysParse(t), "number" == typeof t ? t : null) : parseInt(t, 10)
    }

    function Le(t) {
        return this._weekdays[t.day()]
    }

    function Ie(t) {
        return this._weekdaysShort[t.day()]
    }

    function Ae(t) {
        return this._weekdaysMin[t.day()]
    }

    function ze(t) {
        var e, n, i;
        for (this._weekdaysParse = this._weekdaysParse || [], e = 0; 7 > e; e++)
            if (this._weekdaysParse[e] || (n = Ut([2e3, 1]).day(e), i = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[e] = new RegExp(i.replace(".", ""), "i")), this._weekdaysParse[e].test(t)) return e
    }

    function Ne(t) {
        var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != t ? (t = He(t, this.localeData()), this.add(t - e, "d")) : e
    }

    function Ze(t) {
        var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == t ? e : this.add(t - e, "d")
    }

    function je(t) {
        return null == t ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7)
    }

    function Ee(t, e) {
        F(t, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), e)
        })
    }

    function Ve(t, e) {
        return e._meridiemParse
    }

    function qe(t) {
        return "p" === (t + "").toLowerCase().charAt(0)
    }

    function Je(t, e, n) {
        return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
    }

    function $e(t, e) {
        e[fi] = y(1e3 * ("0." + t))
    }

    function Re() {
        return this._isUTC ? "UTC" : ""
    }

    function Be() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }

    function Qe(t) {
        return Ut(1e3 * t)
    }

    function Xe() {
        return Ut.apply(null, arguments).parseZone()
    }

    function Ke(t, e, n) {
        var i = this._calendar[t];
        return "function" == typeof i ? i.call(e, n) : i
    }

    function tn(t) {
        var e = this._longDateFormat[t],
            n = this._longDateFormat[t.toUpperCase()];
        return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function(t) {
            return t.slice(1)
        }), this._longDateFormat[t])
    }

    function en() {
        return this._invalidDate
    }

    function nn(t) {
        return this._ordinal.replace("%d", t)
    }

    function rn(t) {
        return t
    }

    function sn(t, e, n, i) {
        var r = this._relativeTime[n];
        return "function" == typeof r ? r(t, e, n, i) : r.replace(/%d/i, t)
    }

    function on(t, e) {
        var n = this._relativeTime[t > 0 ? "future" : "past"];
        return "function" == typeof n ? n(e) : n.replace(/%s/i, e)
    }

    function an(t) {
        var e, n;
        for (n in t) e = t[n], "function" == typeof e ? this[n] = e : this["_" + n] = e;
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }

    function un(t, e, n, i) {
        var r = S(),
            s = a().set(i, e);
        return r[n](s, t)
    }

    function dn(t, e, n, i, r) {
        if ("number" == typeof t && (e = t, t = void 0), t = t || "", null != e) return un(t, e, n, r);
        var s, o = [];
        for (s = 0; i > s; s++) o[s] = un(t, s, n, r);
        return o
    }

    function ln(t, e) {
        return dn(t, e, "months", 12, "month")
    }

    function cn(t, e) {
        return dn(t, e, "monthsShort", 12, "month")
    }

    function fn(t, e) {
        return dn(t, e, "weekdays", 7, "day")
    }

    function hn(t, e) {
        return dn(t, e, "weekdaysShort", 7, "day")
    }

    function mn(t, e) {
        return dn(t, e, "weekdaysMin", 7, "day")
    }

    function _n() {
        var t = this._data;
        return this._milliseconds = Ri(this._milliseconds), this._days = Ri(this._days), this._months = Ri(this._months), t.milliseconds = Ri(t.milliseconds), t.seconds = Ri(t.seconds), t.minutes = Ri(t.minutes), t.hours = Ri(t.hours), t.months = Ri(t.months), t.years = Ri(t.years), this
    }

    function yn(t, e, n, i) {
        var r = Bt(e, n);
        return t._milliseconds += i * r._milliseconds, t._days += i * r._days, t._months += i * r._months, t._bubble()
    }

    function pn(t, e) {
        return yn(this, t, e, 1)
    }

    function gn(t, e) {
        return yn(this, t, e, -1)
    }

    function vn(t) {
        return 0 > t ? Math.floor(t) : Math.ceil(t)
    }

    function Dn() {
        var t, e, n, i, r, s = this._milliseconds,
            o = this._days,
            a = this._months,
            u = this._data;
        return s >= 0 && o >= 0 && a >= 0 || 0 >= s && 0 >= o && 0 >= a || (s += 864e5 * vn(Yn(a) + o), o = 0, a = 0), u.milliseconds = s % 1e3, t = _(s / 1e3), u.seconds = t % 60, e = _(t / 60), u.minutes = e % 60, n = _(e / 60), u.hours = n % 24, o += _(n / 24), r = _(Mn(o)), a += r, o -= vn(Yn(r)), i = _(a / 12), a %= 12, u.days = o, u.months = a, u.years = i, this
    }

    function Mn(t) {
        return 4800 * t / 146097
    }

    function Yn(t) {
        return 146097 * t / 4800
    }

    function wn(t) {
        var e, n, i = this._milliseconds;
        if (t = T(t), "month" === t || "year" === t) return e = this._days + i / 864e5, n = this._months + Mn(e), "month" === t ? n : n / 12;
        switch (e = this._days + Math.round(Yn(this._months)), t) {
            case "week":
                return e / 7 + i / 6048e5;
            case "day":
                return e + i / 864e5;
            case "hour":
                return 24 * e + i / 36e5;
            case "minute":
                return 1440 * e + i / 6e4;
            case "second":
                return 86400 * e + i / 1e3;
            case "millisecond":
                return Math.floor(864e5 * e) + i;
            default:
                throw new Error("Unknown unit " + t)
        }
    }

    function Sn() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * y(this._months / 12)
    }

    function kn(t) {
        return function() {
            return this.as(t)
        }
    }

    function Tn(t) {
        return t = T(t), this[t + "s"]()
    }

    function bn(t) {
        return function() {
            return this._data[t]
        }
    }

    function On() {
        return _(this.days() / 7)
    }

    function Un(t, e, n, i, r) {
        return r.relativeTime(e || 1, !!n, t, i)
    }

    function Wn(t, e, n) {
        var i = Bt(t).abs(),
            r = cr(i.as("s")),
            s = cr(i.as("m")),
            o = cr(i.as("h")),
            a = cr(i.as("d")),
            u = cr(i.as("M")),
            d = cr(i.as("y")),
            l = r < fr.s && ["s", r] || 1 === s && ["m"] || s < fr.m && ["mm", s] || 1 === o && ["h"] || o < fr.h && ["hh", o] || 1 === a && ["d"] || a < fr.d && ["dd", a] || 1 === u && ["M"] || u < fr.M && ["MM", u] || 1 === d && ["y"] || ["yy", d];
        return l[2] = e, l[3] = +t > 0, l[4] = n, Un.apply(null, l)
    }

    function Cn(t, e) {
        return void 0 === fr[t] ? !1 : void 0 === e ? fr[t] : (fr[t] = e, !0)
    }

    function Gn(t) {
        var e = this.localeData(),
            n = Wn(this, !t, e);
        return t && (n = e.pastFuture(+this, n)), e.postformat(n)
    }

    function Fn() {
        var t, e, n, i = hr(this._milliseconds) / 1e3,
            r = hr(this._days),
            s = hr(this._months);
        t = _(i / 60), e = _(t / 60), i %= 60, t %= 60, n = _(s / 12), s %= 12;
        var o = n,
            a = s,
            u = r,
            d = e,
            l = t,
            c = i,
            f = this.asSeconds();
        return f ? (0 > f ? "-" : "") + "P" + (o ? o + "Y" : "") + (a ? a + "M" : "") + (u ? u + "D" : "") + (d || l || c ? "T" : "") + (d ? d + "H" : "") + (l ? l + "M" : "") + (c ? c + "S" : "") : "P0D"
    }
    var Pn, xn, Hn = t.momentProperties = [],
        Ln = !1,
        In = {},
        An = {},
        zn = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        Nn = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        Zn = {},
        jn = {},
        En = /\d/,
        Vn = /\d\d/,
        qn = /\d{3}/,
        Jn = /\d{4}/,
        $n = /[+-]?\d{6}/,
        Rn = /\d\d?/,
        Bn = /\d{1,3}/,
        Qn = /\d{1,4}/,
        Xn = /[+-]?\d{1,6}/,
        Kn = /\d+/,
        ti = /[+-]?\d+/,
        ei = /Z|[+-]\d\d:?\d\d/gi,
        ni = /[+-]?\d+(\.\d{1,3})?/,
        ii = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        ri = {},
        si = {},
        oi = 0,
        ai = 1,
        ui = 2,
        di = 3,
        li = 4,
        ci = 5,
        fi = 6;
    F("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }), F("MMM", 0, 0, function(t) {
        return this.localeData().monthsShort(this, t)
    }), F("MMMM", 0, 0, function(t) {
        return this.localeData().months(this, t)
    }), k("month", "M"), A("M", Rn), A("MM", Rn, Vn), A("MMM", ii), A("MMMM", ii), Z(["M", "MM"], function(t, e) {
        e[ai] = y(t) - 1
    }), Z(["MMM", "MMMM"], function(t, e, n, i) {
        var r = n._locale.monthsParse(t, i, n._strict);
        null != r ? e[ai] = r : d(n).invalidMonth = t
    });
    var hi = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        mi = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        _i = {};
    t.suppressDeprecationWarnings = !1;
    var yi = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        pi = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
            ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
            ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d{2}/],
            ["YYYY-DDD", /\d{4}-\d{3}/]
        ],
        gi = [
            ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
            ["HH:mm", /(T| )\d\d:\d\d/],
            ["HH", /(T| )\d\d/]
        ],
        vi = /^\/?Date\((\-?\d+)/i;
    t.createFromInputFallback = tt("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(t) {
        t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
    }), F(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }), F(0, ["YYYY", 4], 0, "year"), F(0, ["YYYYY", 5], 0, "year"), F(0, ["YYYYYY", 6, !0], 0, "year"), k("year", "y"), A("Y", ti), A("YY", Rn, Vn), A("YYYY", Qn, Jn), A("YYYYY", Xn, $n), A("YYYYYY", Xn, $n), Z(["YYYYY", "YYYYYY"], oi), Z("YYYY", function(e, n) {
        n[oi] = 2 === e.length ? t.parseTwoDigitYear(e) : y(e)
    }), Z("YY", function(e, n) {
        n[oi] = t.parseTwoDigitYear(e)
    }), t.parseTwoDigitYear = function(t) {
        return y(t) + (y(t) > 68 ? 1900 : 2e3)
    };
    var Di = O("FullYear", !1);
    F("w", ["ww", 2], "wo", "week"), F("W", ["WW", 2], "Wo", "isoWeek"), k("week", "w"), k("isoWeek", "W"), A("w", Rn), A("ww", Rn, Vn), A("W", Rn), A("WW", Rn, Vn), j(["w", "ww", "W", "WW"], function(t, e, n, i) {
        e[i.substr(0, 1)] = y(t)
    });
    var Mi = {
        dow: 0,
        doy: 6
    };
    F("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), k("dayOfYear", "DDD"), A("DDD", Bn), A("DDDD", qn), Z(["DDD", "DDDD"], function(t, e, n) {
        n._dayOfYear = y(t)
    }), t.ISO_8601 = function() {};
    var Yi = tt("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
            var t = Ut.apply(null, arguments);
            return this > t ? this : t
        }),
        wi = tt("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
            var t = Ut.apply(null, arguments);
            return t > this ? this : t
        });
    xt("Z", ":"), xt("ZZ", ""), A("Z", ei), A("ZZ", ei), Z(["Z", "ZZ"], function(t, e, n) {
        n._useUTC = !0, n._tzm = Ht(t)
    });
    var Si = /([\+\-]|\d\d)/gi;
    t.updateOffset = function() {};
    var ki = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
        Ti = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
    Bt.fn = Ft.prototype;
    var bi = te(1, "add"),
        Oi = te(-1, "subtract");
    t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    var Ui = tt("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
        return void 0 === t ? this.localeData() : this.locale(t)
    });
    F(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }), F(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    }), Ue("gggg", "weekYear"), Ue("ggggg", "weekYear"), Ue("GGGG", "isoWeekYear"), Ue("GGGGG", "isoWeekYear"), k("weekYear", "gg"), k("isoWeekYear", "GG"), A("G", ti), A("g", ti), A("GG", Rn, Vn), A("gg", Rn, Vn), A("GGGG", Qn, Jn), A("gggg", Qn, Jn), A("GGGGG", Xn, $n), A("ggggg", Xn, $n), j(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, n, i) {
        e[i.substr(0, 2)] = y(t)
    }), j(["gg", "GG"], function(e, n, i, r) {
        n[r] = t.parseTwoDigitYear(e)
    }), F("Q", 0, 0, "quarter"), k("quarter", "Q"), A("Q", En), Z("Q", function(t, e) {
        e[ai] = 3 * (y(t) - 1)
    }), F("D", ["DD", 2], "Do", "date"), k("date", "D"), A("D", Rn), A("DD", Rn, Vn), A("Do", function(t, e) {
        return t ? e._ordinalParse : e._ordinalParseLenient
    }), Z(["D", "DD"], ui), Z("Do", function(t, e) {
        e[ui] = y(t.match(Rn)[0], 10)
    });
    var Wi = O("Date", !0);
    F("d", 0, "do", "day"), F("dd", 0, 0, function(t) {
        return this.localeData().weekdaysMin(this, t)
    }), F("ddd", 0, 0, function(t) {
        return this.localeData().weekdaysShort(this, t)
    }), F("dddd", 0, 0, function(t) {
        return this.localeData().weekdays(this, t)
    }), F("e", 0, 0, "weekday"), F("E", 0, 0, "isoWeekday"), k("day", "d"), k("weekday", "e"), k("isoWeekday", "E"), A("d", Rn), A("e", Rn), A("E", Rn), A("dd", ii), A("ddd", ii), A("dddd", ii), j(["dd", "ddd", "dddd"], function(t, e, n) {
        var i = n._locale.weekdaysParse(t);
        null != i ? e.d = i : d(n).invalidWeekday = t
    }), j(["d", "e", "E"], function(t, e, n, i) {
        e[i] = y(t)
    });
    var Ci = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        Gi = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        Fi = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    F("H", ["HH", 2], 0, "hour"), F("h", ["hh", 2], 0, function() {
        return this.hours() % 12 || 12
    }), Ee("a", !0), Ee("A", !1), k("hour", "h"), A("a", Ve), A("A", Ve), A("H", Rn), A("h", Rn), A("HH", Rn, Vn), A("hh", Rn, Vn), Z(["H", "HH"], di), Z(["a", "A"], function(t, e, n) {
        n._isPm = n._locale.isPM(t), n._meridiem = t
    }), Z(["h", "hh"], function(t, e, n) {
        e[di] = y(t), d(n).bigHour = !0
    });
    var Pi = /[ap]\.?m?\.?/i,
        xi = O("Hours", !0);
    F("m", ["mm", 2], 0, "minute"), k("minute", "m"), A("m", Rn), A("mm", Rn, Vn), Z(["m", "mm"], li);
    var Hi = O("Minutes", !1);
    F("s", ["ss", 2], 0, "second"), k("second", "s"), A("s", Rn), A("ss", Rn, Vn), Z(["s", "ss"], ci);
    var Li = O("Seconds", !1);
    F("S", 0, 0, function() {
        return ~~(this.millisecond() / 100)
    }), F(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10)
    }), F(0, ["SSS", 3], 0, "millisecond"), F(0, ["SSSS", 4], 0, function() {
        return 10 * this.millisecond()
    }), F(0, ["SSSSS", 5], 0, function() {
        return 100 * this.millisecond()
    }), F(0, ["SSSSSS", 6], 0, function() {
        return 1e3 * this.millisecond()
    }), F(0, ["SSSSSSS", 7], 0, function() {
        return 1e4 * this.millisecond()
    }), F(0, ["SSSSSSSS", 8], 0, function() {
        return 1e5 * this.millisecond()
    }), F(0, ["SSSSSSSSS", 9], 0, function() {
        return 1e6 * this.millisecond()
    }), k("millisecond", "ms"), A("S", Bn, En), A("SS", Bn, Vn), A("SSS", Bn, qn);
    var Ii;
    for (Ii = "SSSS"; Ii.length <= 9; Ii += "S") A(Ii, Kn);
    for (Ii = "S"; Ii.length <= 9; Ii += "S") Z(Ii, $e);
    var Ai = O("Milliseconds", !1);
    F("z", 0, 0, "zoneAbbr"), F("zz", 0, 0, "zoneName");
    var zi = h.prototype;
    zi.add = bi, zi.calendar = ne, zi.clone = ie, zi.diff = ue, zi.endOf = De, zi.format = fe, zi.from = he, zi.fromNow = me, zi.to = _e, zi.toNow = ye, zi.get = C, zi.invalidAt = Oe, zi.isAfter = re, zi.isBefore = se, zi.isBetween = oe, zi.isSame = ae, zi.isValid = Te, zi.lang = Ui, zi.locale = pe, zi.localeData = ge, zi.max = wi, zi.min = Yi, zi.parsingFlags = be, zi.set = C, zi.startOf = ve, zi.subtract = Oi, zi.toArray = Se, zi.toObject = ke, zi.toDate = we, zi.toISOString = ce, zi.toJSON = ce, zi.toString = le,
        zi.unix = Ye, zi.valueOf = Me, zi.year = Di, zi.isLeapYear = ut, zi.weekYear = Ce, zi.isoWeekYear = Ge, zi.quarter = zi.quarters = xe, zi.month = B, zi.daysInMonth = Q, zi.week = zi.weeks = ht, zi.isoWeek = zi.isoWeeks = mt, zi.weeksInYear = Pe, zi.isoWeeksInYear = Fe, zi.date = Wi, zi.day = zi.days = Ne, zi.weekday = Ze, zi.isoWeekday = je, zi.dayOfYear = yt, zi.hour = zi.hours = xi, zi.minute = zi.minutes = Hi, zi.second = zi.seconds = Li, zi.millisecond = zi.milliseconds = Ai, zi.utcOffset = At, zi.utc = Nt, zi.local = Zt, zi.parseZone = jt, zi.hasAlignedHourOffset = Et, zi.isDST = Vt, zi.isDSTShifted = qt, zi.isLocal = Jt, zi.isUtcOffset = $t, zi.isUtc = Rt, zi.isUTC = Rt, zi.zoneAbbr = Re, zi.zoneName = Be, zi.dates = tt("dates accessor is deprecated. Use date instead.", Wi), zi.months = tt("months accessor is deprecated. Use month instead", B), zi.years = tt("years accessor is deprecated. Use year instead", Di), zi.zone = tt("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", zt);
    var Ni = zi,
        Zi = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        ji = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        Ei = "Invalid date",
        Vi = "%d",
        qi = /\d{1,2}/,
        Ji = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        $i = g.prototype;
    $i._calendar = Zi, $i.calendar = Ke, $i._longDateFormat = ji, $i.longDateFormat = tn, $i._invalidDate = Ei, $i.invalidDate = en, $i._ordinal = Vi, $i.ordinal = nn, $i._ordinalParse = qi, $i.preparse = rn, $i.postformat = rn, $i._relativeTime = Ji, $i.relativeTime = sn, $i.pastFuture = on, $i.set = an, $i.months = q, $i._months = hi, $i.monthsShort = J, $i._monthsShort = mi, $i.monthsParse = $, $i.week = lt, $i._week = Mi, $i.firstDayOfYear = ft, $i.firstDayOfWeek = ct, $i.weekdays = Le, $i._weekdays = Ci, $i.weekdaysMin = Ae, $i._weekdaysMin = Fi, $i.weekdaysShort = Ie, $i._weekdaysShort = Gi, $i.weekdaysParse = ze, $i.isPM = qe, $i._meridiemParse = Pi, $i.meridiem = Je, Y("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(t) {
            var e = t % 10,
                n = 1 === y(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
            return t + n
        }
    }), t.lang = tt("moment.lang is deprecated. Use moment.locale instead.", Y), t.langData = tt("moment.langData is deprecated. Use moment.localeData instead.", S);
    var Ri = Math.abs,
        Bi = kn("ms"),
        Qi = kn("s"),
        Xi = kn("m"),
        Ki = kn("h"),
        tr = kn("d"),
        er = kn("w"),
        nr = kn("M"),
        ir = kn("y"),
        rr = bn("milliseconds"),
        sr = bn("seconds"),
        or = bn("minutes"),
        ar = bn("hours"),
        ur = bn("days"),
        dr = bn("months"),
        lr = bn("years"),
        cr = Math.round,
        fr = {
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        },
        hr = Math.abs,
        mr = Ft.prototype;
    mr.abs = _n, mr.add = pn, mr.subtract = gn, mr.as = wn, mr.asMilliseconds = Bi, mr.asSeconds = Qi, mr.asMinutes = Xi, mr.asHours = Ki, mr.asDays = tr, mr.asWeeks = er, mr.asMonths = nr, mr.asYears = ir, mr.valueOf = Sn, mr._bubble = Dn, mr.get = Tn, mr.milliseconds = rr, mr.seconds = sr, mr.minutes = or, mr.hours = ar, mr.days = ur, mr.weeks = On, mr.months = dr, mr.years = lr, mr.humanize = Gn, mr.toISOString = Fn, mr.toString = Fn, mr.toJSON = Fn, mr.locale = pe, mr.localeData = ge, mr.toIsoString = tt("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Fn), mr.lang = Ui, F("X", 0, 0, "unix"), F("x", 0, 0, "valueOf"), A("x", ti), A("X", ni), Z("X", function(t, e, n) {
        n._d = new Date(1e3 * parseFloat(t, 10))
    }), Z("x", function(t, e, n) {
        n._d = new Date(y(t))
    }), t.version = "2.10.6", e(Ut), t.fn = Ni, t.min = Ct, t.max = Gt, t.utc = a, t.unix = Qe, t.months = ln, t.isDate = i, t.locale = Y, t.invalid = c, t.duration = Bt, t.isMoment = m, t.weekdays = fn, t.parseZone = Xe, t.localeData = S, t.isDuration = Pt, t.monthsShort = cn, t.weekdaysMin = mn, t.defineLocale = w, t.weekdaysShort = hn, t.normalizeUnits = T, t.relativeTimeThreshold = Cn;
    var _r = t;
    return _r
});
/* <<< file end: js/node_modules/moment/min/moment.min.js */

//# map link was there [moment.min.js.map]
/* >>> file start: js/node_modules/moment/locale/ru.js */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
! function(e, t) {
    "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(require("../moment")) : "function" == typeof define && define.amd ? define(["moment"], t) : t(e.moment)
}(this, function(e) {
    "use strict";

    function t(e, t) {
        var n = e.split("_");
        return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? n[1] : n[2]
    }

    function n(e, n, _) {
        var i = {
            mm: n ? "минута_минуты_минут" : "минуту_минуты_минут",
            hh: "час_часа_часов",
            dd: "день_дня_дней",
            MM: "месяц_месяца_месяцев",
            yy: "год_года_лет"
        };
        return "m" === _ ? n ? "минута" : "минуту" : e + " " + t(i[_], +e)
    }

    function _(e, t) {
        var n = {
                nominative: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
                accusative: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_")
            },
            _ = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
        return n[_][e.month()]
    }

    function i(e, t) {
        var n = {
                nominative: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
                accusative: "янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек".split("_")
            },
            _ = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
        return n[_][e.month()]
    }

    function d(e, t) {
        var n = {
                nominative: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                accusative: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_")
            },
            _ = /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/.test(t) ? "accusative" : "nominative";
        return n[_][e.day()]
    }
    var r = e.defineLocale("ru", {
        months: _,
        monthsShort: i,
        weekdays: d,
        weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
        weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
        monthsParse: [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i],
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY г.",
            LLL: "D MMMM YYYY г., HH:mm",
            LLLL: "dddd, D MMMM YYYY г., HH:mm"
        },
        calendar: {
            sameDay: "[Сегодня в] LT",
            nextDay: "[Завтра в] LT",
            lastDay: "[Вчера в] LT",
            nextWeek: function() {
                return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT"
            },
            lastWeek: function(e) {
                if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                switch (this.day()) {
                    case 0:
                        return "[В прошлое] dddd [в] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[В прошлый] dddd [в] LT";
                    case 3:
                    case 5:
                    case 6:
                        return "[В прошлую] dddd [в] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "через %s",
            past: "%s назад",
            s: "несколько секунд",
            m: n,
            mm: n,
            h: "час",
            hh: n,
            d: "день",
            dd: n,
            M: "месяц",
            MM: n,
            y: "год",
            yy: n
        },
        meridiemParse: /ночи|утра|дня|вечера/i,
        isPM: function(e) {
            return /^(дня|вечера)$/.test(e)
        },
        meridiem: function(e, t, n) {
            return 4 > e ? "ночи" : 12 > e ? "утра" : 17 > e ? "дня" : "вечера"
        },
        ordinalParse: /\d{1,2}-(й|го|я)/,
        ordinal: function(e, t) {
            switch (t) {
                case "M":
                case "d":
                case "DDD":
                    return e + "-й";
                case "D":
                    return e + "-го";
                case "w":
                case "W":
                    return e + "-я";
                default:
                    return e
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    return r
});
/* <<< file end: js/node_modules/moment/locale/ru.js */

//# map link was there [ru.js.map]
/* >>> file start: js/mainPage2018/misc/repostInfoBubble.js */
//= require js/core/angular/bubble.js
//= require js/node_modules/moment/min/moment.min.js
//= require js/node_modules/moment/locale/ru.js
Site.page.template['angular/pages/main/friendRepostInfo.ng.tmpl'] = '<div\n  ng-controller=\"FriendRepostInfoCtrl as infoCtrl\"\n  ng-mouseleave=\'bubble.options.onMouseLeave($event)\'\n  ng-mouseenter=\'bubble.options.onMouseEnter($event)\'\n>\n  <div>\n    <span\n      lj-ml=\"panel.repost_info.before_lj_user\">\n    </span>\n    <span class=\"ljuser i-ljuser\">\n      <a\n        ng-href=\"{{ bubble.options.reposter.profileURL }}\"\n        class=\"i-ljuser-profile\"\n      ><!--\n     --><img\n          class=\"i-ljuser-userhead\"\n          ng-src=\"{{ bubble.options.reposter.userheadURL }}\"><!--\n   --></a><!--\n   --><a ng-href=\"{{ bubble.options.reposter.journalURL }}\" class=\"i-ljuser-username\"><!--\n     --><b ng-bind=\"bubble.options.reposter.displayUsername\"></b><!--\n   --></a>\n    </span>\n  </div>\n  <span\n    ng-bind=\"bubble.options.repostDateString\"\n  ></span>\n</div>\n';
//= require_ml panel.repost_info.before_lj_user
! function(e) {
    return e
}(),
function() {
    "use strict";

    function e(e, n) {
        var o = {};
        o.initBubble = function() {
            moment.locale("ru"), n.register({
                name: "friendRepostInfo",
                template: "friendRepostInfo.ng.tmpl",
                closeOnScroll: !0,
                arrowInitialVertical: "b",
                arrowInitialHorizontal: "center",
                showArrow: !1,
                showCloseBtn: !1
            })
        }, o.open = function() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                t = e.targetNode,
                r = e.reposter,
                l = e.repostDate;
            o.cancelClose({
                targetNode: t
            }), n.open("friendRepostInfo", {
                onMouseLeave: function() {
                    return o.queueClose({
                        targetNode: t
                    })
                },
                onMouseEnter: function() {
                    return o.cancelClose({
                        targetNode: t
                    })
                },
                reposter: r,
                repostDateString: moment.unix(l).format("D MMMM YYYY, H:mm")
            }, angular.element(t))
        }, o.close = function() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                o = e.targetNode;
            o && !angular.element(n.node).is(o) || n.close("friendRepostInfo")
        };
        var t = void 0;
        return o.queueClose = function(r) {
            var l = r.targetNode;
            l && !angular.element(n.node).is(l) || (e.cancel(t), t = e(function() {
                o.close({
                    targetNode: l
                })
            }, 1500))
        }, o.cancelClose = function(o) {
            var r = o.targetNode;
            r && !angular.element(n.node).is(r) || e.cancel(t)
        }, o
    }

    function n() {}
    e.$inject = ["$timeout", "Bubble"], angular.module("LJ.Misc.RepostInfoBubble", ["LJ.Bubble"]).factory("repostBubbleService", e).controller("FriendRepostInfoCtrl", n)
}();
/* <<< file end: js/mainPage2018/misc/repostInfoBubble.js */

//# map link was there [repostInfoBubble.js.map]
/* >>> file start: js/mainPage2018/props/yourPicks.js */
var _extends = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
    }
    return e
};
//= require js/configs/postCards.js
//= require js/core/util/postCards.js
//= require js/mainPage2018/misc/repostInfoBubble.js
//= require_ml talk.post.nosubject
! function(e) {
    return e
}(),
function() {
    "use strict";

    function e(e, a, u, c, d, l, p, v) {
        var f = void 0,
            h = {
                readyPromises: {
                    cardProps: {
                        yourFriends: new e(function(e) {
                            f = e
                        })
                    }
                }
            },
            g = void 0,
            m = function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    r = e.cardProps,
                    t = e.serverItemData;
                r.isRepost = !0, r.onRepostMrkMouseEnter = function(e) {
                    var r = {
                        targetNode: e.currentTarget,
                        repostDate: t.repostDate || Date.now() / 1e3
                    };
                    t.reposter ? r.reposter = t.reposter : r.reposter = {
                        displayUsername: "inna1903gr",
                        journalURL: "https://inna1903gr.livejournal.com/",
                        userheadURL: "https://files.livejournal.com/userhead/503?v=1321864323",
                        profileURL: "https://inna1903gr.livejournal.com/profile"
                    }, v.open(r)
                }, r.onRepostMrkMouseLeave = function(e) {
                    v.queueClose({
                        targetNode: e.currentTarget
                    })
                }
            };
        h.initProps = function() {
            var o = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                n = {};
            g = n;
            var c = o.disableYourChoice,
                d = o.disableYourFriends,
                l = 5;
            v.initBubble();
            var h = function() {
                    var t = LJ.Cookie.get("ljprof"),
                        o = e.reject();
                    r ? o = a({
                        method: "GET",
                        url: LJ.get("siteroot") + "/ljDev/interest_posts?ljprof=" + t
                    }).then(function(e) {
                        return e.data || []
                    }) : t && (o = a({
                        method: "GET",
                        url: "https://xc3.services.livejournal.com/user/interest_posts?ljprof=" + t
                    }).then(function(e) {
                        return e.data || []
                    }));
                    var n = o.then(function(r) {
                        return r.length < l ? e.reject() : u.call("homepage.your_choice", {
                            items: r.map(function(e) {
                                return {
                                    journalid: e.jid,
                                    ditemid: e.did
                                }
                            })
                        }).then(function() {
                            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                            return e.items || []
                        })
                    });
                    return n
                }(),
                y = e.reject();
            t && (y = u.call("friendsfeed.get_items", {
                itemshow: l,
                mode: "friends",
                skip: 0,
                user: LJ.get("remote.username"),
                main: 1
            }).then(function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                return e.items || []
            }));
            var P = function(r) {
                var t = r.dataGetter,
                    o = r.propsSectionName;
                return t ? t.then(function(r) {
                    return "yourChoice" === o && 0 === r.length ? e.reject() : "yourFriends" === o && r.length < l ? e.reject() : void(n[o] = r.map(function(e, r) {
                        var t = LJ.Util.PostCards.serverNamesToProps(e, {
                                RPCSource: "homepage.your_choice"
                            }),
                            n = _extends({}, t);
                        n.readingTime || (n.readingTime = Math.ceil(10 * Math.random()));
                        var a = i[o][r],
                            u = _extends({
                                type: "common",
                                slot: a
                            }, n);
                        return u.postTitle || (u.postTitle = LJ.ml("talk.post.nosubject")), "yourFriends" === o && e.reposter && m({
                            cardProps: u,
                            serverItemData: e
                        }), "yourChoice" === o && s([u]), u.allowLikeServerCalls = !1, p.updateLayoutSingleCardProps({
                            cardPropsObj: u,
                            section: "yourPicks",
                            slot: a,
                            index: r,
                            window: window
                        }), u
                    }))
                }) : e.reject()
            };
            return c || P({
                dataGetter: h,
                propsSectionName: "yourChoice"
            }), d || P({
                dataGetter: y,
                propsSectionName: "yourFriends"
            }).then(function() {
                f()
            }), {
                props: n
            }
        };
        var y = [],
            P = function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    r = y.find(function(r) {
                        var t = r.params,
                            o = Object.keys(e).every(function(r) {
                                return e[r] === t[r]
                            });
                        return o
                    });
                if (r) return r.props;
                var t = void 0;
                if (e.hasBannerSibling) {
                    var n = h.getCardProps(_extends({}, e, {
                        hasBannerSibling: !1
                    }));
                    if (!n) return null;
                    var i = LJ.Util.PostCards.stripLayoutProps(n),
                        s = LJ.Util.PostCards.getLayoutProps({
                            serverCardType: o.COMMON_SMALL
                        });
                    t = _extends({}, i, s), y.push({
                        props: t,
                        params: e
                    })
                }
                return t
            };
        return h.getCardProps = function() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            if ("yourChoice" === e.section || "yourFriends" === e.section) {
                if (!g) return null;
                if (e.hasBannerSibling) return P(e);
                var r = g[e.section] || {};
                if (e.slot) {
                    var t = n[e.section][e.slot];
                    return r[t]
                }
                return r[e.index]
            }
        }, h
    }
    e.$inject = ["$q", "$http", "Api", "$timeout", "$compile", "mediusUtils", "mainPageAdaptivityService", "repostBubbleService"], angular.module("MainPage2018.Props.YourPicks", ["MainPage2018.Adaptivity", "Medius.Utils", "LJ.Misc.RepostInfoBubble"]).factory("mainPageYourPicksPropsService", e);
    var r = LJ.get("is_dev_server"),
        t = !!LJ.get("remote"),
        o = LJ.Config.PostCards.CARD_TYPES,
        n = {
            yourChoice: {
                "first-left": 0,
                "first-right": 1,
                "second-left": 2,
                "second-right": 3
            },
            yourFriends: {
                "first-left": 0,
                "first-right": 1,
                "second-left": 2,
                "second-center": 3,
                "second-right": 4
            }
        },
        i = {
            yourChoice: {},
            yourFriends: {}
        };
    Object.keys(n.yourChoice).forEach(function(e, r) {
        return i.yourChoice[r] = e
    }), Object.keys(n.yourFriends).forEach(function(e, r) {
        return i.yourFriends[r] = e
    });
    var s = function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0];
        e.forEach(function(e) {
            if (e && e.postUrl) {
                var r = LJ.Util.Link.addQueryParams({
                    sourceURL: e.postUrl,
                    queryParams: {
                        utm_source: "recent"
                    }
                });
                e.postUrl = r
            }
        })
    }
}();
/* <<< file end: js/mainPage2018/props/yourPicks.js */

//# map link was there [yourPicks.js.map]
/* >>> file start: js/misc/asideBannerStickA.js */
function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}! function(e) {
    return e
}(),
function() {
    LJ.define("LJ.Util.asideBannerStickA"), LJ.Util.asideBannerStickA.setup = function(e) {
        function t(t, o) {
            var r = e.recalc(t.target),
                a = r._asideBanner,
                s = r._asideBannerLowerSide,
                p = r._asideBannerParentLowerSide,
                c = r.FIXED_TOP_OFFSET,
                d = r.helperTop,
                l = a[0].getBoundingClientRect();
            i.scrollTop() + c >= a.parent().offset().top ? (!n || o && n && l.top >= c) && a.css({
                position: "fixed",
                top: c + "px",
                width: a.width() + "px"
            }) : a.css({
                position: "static"
            });
            var f = e.recalc(t.target);
            a = f._asideBanner, s = f._asideBannerLowerSide, p = f._asideBannerParentLowerSide, c = f.FIXED_TOP_OFFSET, d = f.helperTop, !n && s >= p && a.css({
                position: "relative",
                top: d + "px"
            }), !o && n && a.css({
                position: "relative",
                top: a.offset().top - a.parent().offset().top + "px"
            }), !n && window.Begun.Autocontext.Callbacks.register({
                inView: _defineProperty({}, t.data.place, function(e) {
                    var i = e.sessionInViewTime;
                    i > 3 && (n = !0, a.css({
                        position: "relative",
                        top: a.offset().top - a.parent().offset().top + "px"
                    }), window.Begun.Autocontext.Callbacks.unregister("inView", t.data.place))
                })
            })
        }
        var n = !1,
            i = jQuery(document);
        document.addEventListener("ljsale-load", function(n) {
            var o = 0;
            e.prefix === n.data.slot && i.on("scroll", function(e) {
                var r = i.scrollTop(),
                    a = o > r;
                t(n, a), o = r
            })
        })
    }
}();
/* <<< file end: js/misc/asideBannerStickA.js */

//# map link was there [asideBannerStickA.js.map]
/* >>> file start: js/core/angular/components/colMen2018.js */
var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
    }
    return e
};
! function(e) {
    return e
}(),
function() {
    function e(e, t, n, o) {
        function r(r, l) {
            function a() {
                L = m.outerWidth(!0), b = [], C = 0;
                var e = void 0;
                for (e = 0; e < p.length; e++) b[e] = p.eq(e).outerWidth(!0), C += b[e]
            }

            function s() {
                if (B === y) return l.removeClass(v), void p.show();
                a();
                var e = p.toArray().find(function(e) {
                        return e.dataset.keepInPopup
                    }),
                    t = void 0;
                t = e ? p.toArray().indexOf(e) : p.length;
                var n = void 0;
                n = x[0] ? x[0].getBoundingClientRect() : {
                    width: 0,
                    left: 0
                };
                var i = void 0;
                i = O ? 0 : j + n.width;
                var o = l[0].getBoundingClientRect(),
                    r = f(),
                    s = void 0;
                if (O) {
                    var u = 4;
                    s = r - u
                } else s = Math.min(o.width, k);
                var g = s - i,
                    h = !!e || C > g;
                l.toggleClass(v, h), h && (g -= L);
                var m = function() {
                    for (var e = -1, n = 0, i = b[0]; g >= i && t >= e + 2;) e++, n = i, i = n + b[e + 1];
                    return e
                }();
                c(p, m), d(w, m)
            }

            function c(e, t) {
                return -1 === t ? void e.hide() : void e.show().filter(":gt(" + t + ")").hide()
            }

            function d(e, t) {
                return -1 === t ? void e.show() : void e.hide().filter(":gt(" + t + ")").show()
            }

            function u() {
                var e, n = !1;
                !LJ.Support.isMobile() && LJ.Support.touch ? m.click(function(e) {
                    n = !n, m.toggleClass(g, n), e.stopImmediatePropagation()
                }) : m.on("mouseenter", function() {
                    n || (m.addClass(g), n = !0, E()), t.cancel(e)
                }).on("mouseleave", function() {
                    n && (e = t(function() {
                        m.removeClass(g), n = !1
                    }, 500))
                }), angular.element("body").click(function() {
                    n = !1, m.removeClass(g)
                }), angular.element(window).on("keydown", function(e) {
                    e.key && "tab" === e.key.toLowerCase() && angular.element(":focus")[0] === m.find("a")[0] && (m.addClass(g), n = !0)
                })
            }

            function f() {
                return n[0].body.clientWidth
            }
            var v = "categories__wrap-outer--expandable",
                g = "categories__item--more-open",
                h = angular.element(e),
                p = l.find(".js--item"),
                m = l.find(".js--more-item"),
                w = p.clone(!0).appendTo(m.find("ul")),
                C = 0,
                L = 0,
                b = [],
                k = void 0,
                j = 40,
                _ = "morePopupButton",
                y = "sideArrows",
                M = 16,
                B = LJ.Support.isMobile() ? y : _,
                R = {
                    itemLinkClickHandler: function() {}
                },
                A = _extends({}, R, r.directiveOptions);
            p.find("a").add(w.find("a")).on("click", function(e) {
                A.itemLinkClickHandler(e)
            });
            var I = l.find(".js--list-with-ballast"),
                S = l.find(".js--limited-list"),
                x = l.find(".js--sideblock.js--right"),
                J = l.find(".js--arrow-button"),
                W = (n.find(".mainpage__category .js--content-container"), !!x[0]),
                O = !W,
                T = i({
                    jQButtons: J,
                    scrollableNode: S[0]
                }),
                D = LJ.Function.debounce(T.doScrollChangeTracking, 150);
            S.on("touchmove", D);
            var E = function() {
                    var e = m[0].getBoundingClientRect(),
                        t = f(),
                        n = t - e.right,
                        i = l.find(".js--dropdown-popup"),
                        o = i.find(".js--arrow"),
                        r = i[0].getBoundingClientRect(),
                        a = r.width,
                        s = -(a / 2 + 3),
                        c = 25,
                        d = a / 2 + c - n;
                    d > 0 ? i.css({
                        right: s + d
                    }) : i.css({
                        right: s
                    });
                    var u = {
                        pos: {
                            popupCenterAligned: {
                                left: a / 2 - 20
                            }
                        }
                    };
                    if (d > 0) {
                        var v = 15,
                            g = a / 2 - v;
                        d > g ? o.css({
                            display: "none"
                        }) : o.css({
                            display: "",
                            left: u.pos.popupCenterAligned.left + d
                        })
                    } else o.css({
                        display: "",
                        left: u.pos.popupCenterAligned.left
                    })
                },
                N = function() {
                    var e = 16,
                        t = 1400,
                        n = f();
                    return Math.min(t, n - 2 * e)
                },
                P = function() {
                    k = N(), s();
                    var e = S[0].scrollLeft;
                    S.css({
                        left: "",
                        width: ""
                    });
                    var t = void 0,
                        n = void 0,
                        i = void 0,
                        o = void 0;
                    W ? (i = x[0].getBoundingClientRect(), o = i.width + j) : (i = {
                        width: 0,
                        left: 0
                    }, o = 0);
                    var r = l[0].getBoundingClientRect(),
                        a = Math.min(r.width, k),
                        c = f(),
                        d = Math.max((r.width - k) / 2, 0),
                        u = S[0].getBoundingClientRect(),
                        v = Math.max(c - u.width, 0),
                        g = I[0].getBoundingClientRect(),
                        h = Math.max(c - g.width, 0);
                    if (B === y) {
                        J.show();
                        var m = J.toArray().map(function(e) {
                                return angular.element(e).width()
                            }).reduce(function(e, t) {
                                return e + t
                            }, 0),
                            w = 0 >= a - o - C;
                        w || !W ? (W && (p.last().after(x), x.css({
                            position: "relative",
                            right: ""
                        })), t = Math.min(r.width, k), n = t - m + 2 * M, O ? I.css({
                            left: h / 2
                        }) : I.css({
                            left: d - M
                        })) : (J.hide(), I.after(x), x.css({
                            position: "",
                            right: d
                        }), n = "", I.css({
                            left: d
                        })), S.css({
                            width: n,
                            overflow: "auto"
                        }), S[0].scrollLeft = e
                    } else O ? I.css({
                        left: v / 2
                    }) : (I.css({
                        left: d
                    }), x.css({
                        right: d
                    })), J.hide()
                },
                $ = function() {
                    if (B === y) {
                        var e = S[0].querySelector(".categories__link--active");
                        if (e) {
                            var t = e.closest(".js--item");
                            o.scrollAlign({
                                targetItemNode: t
                            })
                        }
                    }
                };
            t(function() {
                a(), P(), u(), $(), T.updateLook(), I.css({
                    opacity: ""
                }), l.css("visibility", "");
                var e = h[0].innerWidth;
                h.on("resize", function() {
                    var t = h[0].innerWidth;
                    e !== t && (P(), T.updateLook(), e = t)
                })
            }), r.redraw = s, r.remeasure = a
        }
        return {
            link: r,
            scope: {
                directiveOptions: "=colMen2018"
            }
        }
    }

    function t() {
        var e = {};
        return e.highlightItem = function(e) {
            var t = angular.element(e);
            t.closest(".js--limited-list").find(".categories__link").removeClass("categories__link--active"), t.find("a").addClass("categories__link--active")
        }, e.scrollAlign = function() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                t = e.targetItemNode;
            if (t) {
                var n = t.getBoundingClientRect(),
                    i = t.closest(".js--limited-list"),
                    o = i.getBoundingClientRect(),
                    r = i.querySelector(".js--item"),
                    l = r.getBoundingClientRect(),
                    a = n.left - l.left,
                    s = o.width / 2,
                    c = n.width / 2,
                    d = a - s + c;
                i.scrollLeft = d
            }
        }, e
    }
    e.$inject = ["$window", "$timeout", "$document", "collapsibleMenuService"], angular.module("LJ.Components.CollapsibleMenu2018", []), angular.module("LJ.Components.CollapsibleMenu2018").directive("colMen2018", e).factory("collapsibleMenuService", t);
    var n = LJ.Util.getWindow(),
        i = function(e) {
            var t = e.jQButtons,
                i = e.scrollableNode,
                o = 10,
                r = .5,
                l = 16,
                a = void 0,
                s = void 0,
                c = void 0,
                d = void 0,
                u = t.filter(".js--left"),
                f = t.filter(".js--right"),
                v = function() {
                    var e = i.scrollLeft;
                    u[0].classList.toggle("categories__nav-btn--lim", 0 === e);
                    var t = i.getBoundingClientRect(),
                        n = i.scrollWidth - t.width - e;
                    f[0].classList.toggle("categories__nav-btn--lim", Math.abs(n) < 1.5)
                };
            v();
            var g = function() {
                    if (!d) {
                        var e = i.scrollLeft,
                            t = function() {
                                var t = i.scrollLeft;
                                t === e && (v(), clearInterval(d), d = null), e = i.scrollLeft
                            };
                        d = setInterval(t, 100)
                    }
                },
                h = void 0;
            return t.on("mousedown touchstart", function(e) {
                e.preventDefault();
                var t = this.classList.contains("js--right");
                a = (t ? 1 : -1) * o;
                var d = 160,
                    u = 200,
                    f = Date.now(),
                    v = void 0;
                setTimeout(function() {
                    v = !0
                }, u), clearTimeout(h);
                var p = function w() {
                    if (v) a = 0;
                    else {
                        var e = Date.now() - f;
                        h = setTimeout(function() {
                            a = 0
                        }, d - e)
                    }
                    n.removeEventListener("mouseup", w), n.removeEventListener("touchend", w)
                };
                if (n.addEventListener("mouseup", p), n.addEventListener("touchend", p), !c) {
                    s = 0;
                    var m = function() {
                        s = s * r + a, i.scrollLeft += s, Math.abs(s) < .5 && (clearInterval(c), c = null)
                    };
                    c = setInterval(m, l), g()
                }
            }), t.on("mouseup mousemove touchend touchmove click", function(e) {
                e.preventDefault()
            }), {
                doScrollChangeTracking: g,
                updateLook: v
            }
        }
}();
/* <<< file end: js/core/angular/components/colMen2018.js */

//# map link was there [colMen2018.js.map]
/* >>> file start: js/core/object.js */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
! function(e) {
    return e
}(),
function() {
    "use strict";

    function e(e, t) {
        var o = t.split("."),
            n = o.shift(),
            r = e;
        if ("object" !== ("undefined" == typeof e ? "undefined" : _typeof(e))) throw new TypeError("You should provide object as a root.");
        for (;
            "undefined" != typeof n;) {
            if ("object" !== ("undefined" == typeof r ? "undefined" : _typeof(r)) || null === r) return;
            if (!r.hasOwnProperty(n)) return;
            r = r[n], n = o.shift()
        }
        return r
    }
    LJ.define("LJ.Object"), LJ.Object.pick = function(e) {
        var t = {},
            o = Array.prototype.concat.apply([], Array.prototype.slice.call(arguments, 1));
        return o.forEach(function(o) {
            o in e && (t[o] = e[o])
        }), t
    }, LJ.Object.invert = function(e) {
        return Object.keys(e).reduce(function(t, o) {
            return t[e[o]] = o, t
        }, {})
    }, LJ.get = function(t) {
        var o = e(Site.page, t);
        return "undefined" == typeof o ? e(Site, t) : o
    }, LJ.pageVar = LJ.get, LJ.Object.resolve = e
}();
/* <<< file end: js/core/object.js */

//# map link was there [object.js.map]
/* >>> file start: js/core/support.js */
! function(o) {
    return o
}(),
function() {
    "use strict";
    LJ.define("LJ.Support"), LJ.Support.browser = function() {
        var o, e, t = function(o) {
            o = o.toLowerCase();
            var e = /(chrome)[ \/]([\w.]+)/.exec(o) || /(webkit)[ \/]([\w.]+)/.exec(o) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(o) || /(msie) ([\w.]+)/.exec(o) || o.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(o) || [];
            return {
                browser: e[1] || "",
                version: e[2] || "0"
            }
        };
        return o = t(navigator.userAgent), e = {}, o.browser && (e[o.browser] = !0, e.version = o.version), e.chrome ? e.webkit = !0 : e.webkit && (e.safari = !0), e
    }();
    try {
        LJ.Support.localStorage = !!window.localStorage
    } catch (o) {
        LJ.Support.localStorage = !1
    }
    LJ.Support.cors = window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest, LJ.Support.geoLocation = "geolocation" in navigator, LJ.Support.touch = Boolean("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch), LJ.Support.history = !!window.history.pushState, LJ.Support.isMac = -1 !== navigator.userAgent.indexOf("Mac"), LJ.Support.isMobile = function() {
        var o = navigator.userAgent || navigator.vendor || window.opera,
            e = /android.+(mobile|transformer)|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|opera m(ob|in)i|opera tablet|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,
            t = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i,
            i = e.test(o) || t.test(o.substr(0, 4));
        return function() {
            return i
        }
    }()
}();
/* <<< file end: js/core/support.js */

//# map link was there [support.js.map]
/* >>> file start: js/core/string.js */
var _extends = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
    }
    return t
};
! function(t) {
    return t
}(),
function() {
    "use strict";
    LJ.define("LJ.String"), LJ.String.pad = function(t, e, n) {
        if (t = t.toString(), "undefined" == typeof e) throw new Error("You should provide padding string length");
        if ("undefined" == typeof n) throw new Error("You should provide padding symbol");
        if (t.length >= e) return t;
        for (; t.length < e;) t = n + t;
        return t.length === e ? t : t.slice(-e)
    }, LJ.String.capitalize = function(t) {
        var e;
        if ("string" != typeof t) throw new Error("You should provide string as argument");
        return e = t.length, 0 === e ? t : 1 === e ? t.toUpperCase() : t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()
    }, LJ.String.linkify = function(t) {
        var e = new RegExp("^(?:([a-zA-Z]+):)?//"),
            n = /^[a-zA-Z]+:/,
            r = /^:\/\//,
            i = n.test(t) ? "" : "https://";
        return e.test(t) ? t : i + (r.test(t) ? t.replace("://", "") : t)
    }, LJ.String.smartSplit = function(t, e) {
        return "undefined" == typeof e && (e = ","), t.split(e).map(function(t) {
            return t.trim()
        }).filter(Boolean)
    }, LJ.String.encodeHTML = function(t) {
        var e = {
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&apos;"
        };
        return t.replace(/([<>&\"\'])/g, function(t, n) {
            return e[n] ? e[n] : n
        })
    }, LJ.String.limit = function() {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
            e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
            n = e.maxLength || 150;
        return t.split(" ").reduce(function(t, e) {
            if (t.limitReached) return t;
            var r = (t.limitedString + " " + e).trim();
            return r.length > n ? _extends({}, t, {
                limitReached: !0
            }) : _extends({}, t, {
                limitedString: r
            })
        }, {
            limitedString: "",
            limitReached: !1
        }).limitedString
    }
}();
/* <<< file end: js/core/string.js */

//# map link was there [string.js.map]
/* >>> file start: js/core/angular/common.js */
function ljTemplateRun(t) {
    function e(t, e) {
        return t.filter(function(t) {
            return t.match(e) && t
        })
    }

    function n(t, e) {
        for (var n = 0, o = 0; o < t.length; o++) - 1 !== e.indexOf(t.substr(0, o + 1)) && (n = o + 1);
        return t.slice(0, n)
    }
    var o = angular.copy(LJ.get("template")),
        i = [];
    angular.forEach(o, function(t, e) {
        i.push(e.split("").reverse().join(""))
    }), i.forEach(function(t) {
        var r, l, c, a, s, u = t.match(/([\-\w\.]*)/);
        if (u && u[1]) {
            if (l = new RegExp(u[1].replace(/\./g, "\\.") + "/"), c = e(i, l), a = t.length - 1, c.forEach(function(e) {
                    var o = n(t, e),
                        i = o.length;
                    a = a > i ? i : a
                }), 1 === c.length) return r = t.split("").reverse().join(""), o[r.split("/").pop()] = o[r], void delete o[r];
            c.push(t), s = new RegExp("\\/?(\\w*.{" + a + "})$"), c.forEach(function(t) {
                var e;
                t = t.split("").reverse().join(""), e = s.exec(t), o.hasOwnProperty(t) && e && e[1] && (o[e[1]] = o[t], e[1] !== t && delete o[t])
            })
        }
    }), angular.forEach(o, function(e, n) {
        -1 !== n.indexOf("/") && console.warn("Template `%s` has been registered with path", n), t.put(n, e)
    })
}

function getCurrentUrl() {
    var t = location,
        e = t.protocol,
        n = t.host,
        o = t.pathname,
        i = t.search,
        r = e + "//" + n + o + LJ.String.encodeHTML(i);
    return r
}

function fixIeRedirect() {
    LJ.Support.history || 0 !== angular.element("base").length || angular.element("<base />").attr("href", getCurrentUrl()).appendTo("head")
}

function ljHtml(t) {
    return {
        compile: function(e, n) {
            var o = t(n.ljHtml);
            return function(t, e) {
                e.html(o(t) || "")
            }
        }
    }
}

function ljHtmlLive(t) {
    return {
        scope: !0,
        restrict: "A",
        compile: function(e, n) {
            var o = t(n.ljHtmlLive);
            return function(t, e) {
                t.$watch(function() {
                    return o(t)
                }, function(t) {
                    e.html(t || "")
                })
            }
        }
    }
}

function includeReplace() {
    return {
        require: "ngInclude",
        link: function(t, e) {
            e.replaceWith(e.contents())
        }
    }
}

function ljMl(t, e) {
    return {
        link: function(n, o, i) {
            function r(e) {
                var o;
                if (!i.mlParsed) return i.ljMlResolve ? (o = t(i.ljMlResolve)(n), o.promise ? void o.promise.then(function(t) {
                    l(e, t)
                }) : void l(e, o)) : void l(e)
            }

            function l(t, r) {
                var l = LJ.ml(c(t), r);
                i.ljMlAttr ? o.attr(i.ljMlAttr, l) : (o.html(l), o.find("a").each(function() {
                    this.target || (this.target = "_self")
                })), i.hasOwnProperty("ljMlCompile") && (o.attr("ml-parsed", !0), e(o)(n))
            }

            function c(t) {
                if (-1 === t.indexOf("{")) return t;
                var e, o = n.$eval(t);
                if (o && angular.isObject(o))
                    for (e in o)
                        if (o.hasOwnProperty(e) && o[e]) return e;
                return t
            }
            i.hasOwnProperty("ljMlDynamic") ? n.$watch(function() {
                return n.$eval(i.ljMlDynamic)
            }, function() {
                r(i.ljMl)
            }) : r(i.ljMl)
        }
    }
}

function ljSwitchOff(t, e) {
    return {
        restrict: "A",
        link: function(n, o, i) {
            function r() {
                i.ljSwitchOffAction && n.$eval(i.ljSwitchOffAction), u.assign(n, !1)
            }

            function l() {
                f = !0
            }

            function c(t) {
                var e = angular.element(t.target);
                return !!(i.ljSwitchOffIgnoreSticky && e.closest(".b-msgsystem-wrapper").length > 0 || e.is(".b-msgsystem-close-ctrl"))
            }

            function a(t) {
                2 !== t.button && (f || !u(n, {
                    $event: t
                }) || c(t) || n.$apply(r), f = !1)
            }

            function s(t) {
                27 === t.which && u(n, {
                    $event: t
                }) && n.$apply(r)
            }
            var u = e(i.ljSwitchOff),
                f = !1;
            o.on("click", function() {
                f = !0
            }), t.on("keydown", s).on("click", "[lj-switch-off-skip]", l).on("click", a), n.$on("$destroy", function() {
                t.off("keydown", s).off("click", "[lj-switch-off-skip]", l).off("click", a)
            })
        }
    }
}

function ljDisabled() {
    return function(t, e, n) {
        t.$watch(n.ljDisabled, function(t) {
            e.prop("disabled", t), e.parent().toggleClass("b-ljbutton-disabled", t)
        })
    }
}

function focusAndSelect(t) {
    return {
        restrict: "A",
        link: function(e, n, o) {
            var i = o.focusAndSelect,
                r = 50;
            e.$watch(i, function(e, o) {
                e ? t(function() {
                    n[0].focus(), n[0].select()
                }, r) : o && n[0].blur()
            })
        }
    }
}

function ljDebounce(t) {
    return {
        link: function(e, n, o) {
            var i, r, l, c = t(o.ljDebounce),
                a = c.assign,
                s = o.ljDebounceDelay ? e.$eval(o.ljDebounceDelay) : 300,
                u = "change paste keyup search";
            r = e.$watch(function() {
                return l = c(e)
            }, function(t) {
                n.val(t)
            }), i = LJ.Function.debounce(function() {
                var t = n.val();
                t !== l && e.$apply(function() {
                    a(e, t)
                })
            }, s), n.on(u, i), e.$on("$destroy", function() {
                n.off(u, i), r()
            })
        }
    }
}

function ljScroll(t) {
    return {
        restrict: "A",
        compile: function(e, n) {
            var o = angular.element(window),
                i = angular.element("html, body"),
                r = t(n.ljScroll),
                l = n.hasOwnProperty("ljScrollUp"),
                c = angular.element(n.ljScrollTarget);
            return function(t, e) {
                t.$watch(function() {
                    return r(t)
                }, function(n) {
                    var a;
                    n && (a = c.length > 0 ? c.offset().top : e.offset().top, (!l || l && o.scrollTop() > a) && i.animate({
                        scrollTop: a
                    }), r.assign(t, !1))
                })
            }
        }
    }
}

function ljScreenable() {
    var t = angular.element(document);
    return {
        link: function(e, n, o) {
            function i() {
                n.is(":screenable") && (e.$evalAsync(function() {
                    LJ.Event.trigger(r, n.get(0))
                }), t.off("scroll", i))
            }
            var r = o.ljScreenable;
            t.on("scroll", i), e.$on("$destroy", function() {
                t.off("scroll", i)
            }), i()
        }
    }
}

function ljSvgIconRefresh(t) {
    t.$on("$locationChangeSuccess", function() {
        angular.element("svg").attr("xml:base", getCurrentUrl())
    })
}

function ljSvgIcon() {
    return {
        link: function(t, e, n) {
            n.$observe("ljSvgIcon", function(t) {
                if (t) {
                    var o = t.split("--"),
                        i = getCurrentUrl(),
                        r = o.length > 1 ? [o[0], t].join(" ") : t,
                        l = n.ljSvgClass;
                    l && (r += " " + l), e.html('\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            xml:base="' + i + '"\n            class="svgicon ' + r + '"\n            width="16"\n            height="16"\n          >\n            <use xlink:href="#' + t + '"></use>\n          </svg>\n        ')
                }
            })
        }
    }
}

function ljFlatbutton(t, e, n) {
    var o = {
        a: ['<a class="{{classes}}">', "{{title}}", "</a>"].join(""),
        button: ['<button class="{{classes}}">', "{{title}}", "</button>"].join("")
    };
    return {
        restrict: "E",
        replace: !0,
        scope: !0,
        template: function(t, n) {
            var i = e(n.ljFlatbutton)()[0];
            return "a" === i ? o.a : o.button
        },
        link: function(t, o) {
            for (var i, r = e(o.attr("lj-flatbutton"))(), l = r[0], c = 3, a = o[0]; c + 1 < r.length;) a.setAttribute(r[c], r[c + 1]), c += 2;
            a.removeAttribute("lj-flatbutton"), r.length > 2 && (i = r[2].split(/[,\s]\s*/), i = i.map(function(t) {
                    var e;
                    switch (t) {
                        case "basic":
                            e = "b-flatbutton";
                            break;
                        case "tiny":
                            e = "b-flatbutton b-flatbutton-simple";
                            break;
                        case "red":
                            e = "b-flatbutton b-flatbutton-red";
                            break;
                        case "green":
                            e = "b-flatbutton b-flatbutton-green";
                            break;
                        case "shine":
                            e = "b-flatbutton b-flatbutton-shine";
                            break;
                        case "shining":
                            e = "b-flatbutton b-flatbutton-shining";
                            break;
                        case "neutral":
                            e = "b-flatbutton-neutral";
                            break;
                        default:
                            e = t
                    }
                    return e
                }), t.classes = i.join(" ")), t.title = LJ.ml(r[1]), "a" !== l && (a.type = l),
                function(t) {
                    return t
                }(), n(o)(t)
        }
    }
}

function ljCut() {
    return {
        link: function(t, e) {
            var n = e.data("widget-options");
            e.ljcut(n)
        }
    }
}

function ljSticky(t, e, n) {
    return {
        link: function(t, o, i) {
            function r() {
                i.ljSaleHeight || o.height(o.find(".ljsale__inner").outerHeight()), i.ljSaleWidth || o.find(".ljsale__inner").width(o.width()), o.hasClass("mdspost-meta__social") || (u = o.outerHeight(b.moveable.measure.includeMargins)), a = $ ? c.offset().top : o.offset().top, h.length && (d = h.offset().top + h.outerHeight()), s = Math.min(c.offset().top + c.outerHeight(), p.height() - m.height() - v), l()
            }

            function l() {
                var t = void 0;
                if (o.hasClass("mdspost-meta__social") ? (!f && d && (f = (o.hasClass("js-sticky") ? o.children() : o).outerHeight()), t = p.scrollTop() + f >= d) : t = p.scrollTop() + b.bottomOffset + u >= s, S) {
                    O();
                    var e = o[0].getBoundingClientRect(),
                        n = -e.top - S;
                    if (n > 0) {
                        var i = Number.parseInt(k.css("top")),
                            r = -i > e.height,
                            l = n > e.height;
                        if (l && r) return;
                        k.css("top", -n)
                    } else k.css("top", "")
                }
                o.toggleClass(y || "js-sticky", p.scrollTop() >= a - g), o.toggleClass(w || "js-sticky-bottom", t)
            }
            var c, a, s, u, f, d, p = angular.element(document),
                h = angular.element(".js-sticky-container .mdspost-text-container"),
                m = angular.element(".mdsfooter"),
                v = 20,
                g = 0;
            isNaN(parseInt(i.stickyTopOffset)) || (g = parseInt(i.stickyTopOffset));
            var j = "js-sticky-container",
                b = {
                    moveable: {
                        measure: {
                            includeMargins: !0
                        }
                    },
                    fullUpdateOnScroll: !1,
                    bottomOffset: 0
                };
            i.stickyBottomOffset && (b.bottomOffset = e(i.stickyBottomOffset)(t)), i.moveableIncludeMargins && (b.moveable.measure.includeMargins = e(i.moveableIncludeMargins)(t)), i.fullUpdateOnScroll && (b.fullUpdateOnScroll = e(i.fullUpdateOnScroll)(t));
            var y = i.stickToScreenTopClass,
                w = i.stickyBottomStopClass,
                S = +i.stickyMaxBottomOffset,
                $ = i.stickyNoSubcontainer,
                k = void 0,
                O = function(t) {
                    k && !t || (k = o.children())
                };
            O(!0), ["html", ".j-l-container", ".l-flatslide", ".page-wrapper", "." + j].forEach(function(t) {
                var e = o.closest(t);
                0 !== e.length && (c = e)
            }), p.on("scroll", function() {
                b.fullUpdateOnScroll ? r() : l()
            }), t.$on("$destroy", function() {
                p.off("scroll", l)
            }), n(r, 1e3, !1)
        }
    }
}

function stickyWithStops(t, e) {
    return {
        link: function(n, o, i) {
            var r = i.stickyWithStops,
                l = +i.stickyStopFor || 1200,
                c = +i.stickyStopsMinWidth,
                a = +i.minStickyStopHeight || 0;
            if (r) {
                var s = void 0,
                    u = void 0,
                    f = void 0,
                    d = void 0,
                    p = function() {
                        o.css({
                            position: "",
                            top: ""
                        })
                    },
                    h = function() {
                        if (!(t.innerWidth < c)) {
                            f = e.scrollTop();
                            var n = u.reduce(function(t, e) {
                                return f > e.effectiveOffset && (t.lastStop = e, f < e.effectiveOffset + e.stopDuration && (t.insideStopZone = !0)), t
                            }, {
                                lastStop: null,
                                insideStopZone: !1
                            });
                            if (n.insideStopZone) {
                                var i = n.lastStop;
                                o.css({
                                    position: "fixed",
                                    top: -i.documentOffsetInElement
                                })
                            } else if (n.lastStop) {
                                var i = n.lastStop,
                                    r = i.prevStopsAccumulated + i.stopDuration;
                                o.css({
                                    position: "relative",
                                    top: r
                                })
                            } else p()
                        }
                    },
                    m = function() {
                        p(), t.innerWidth < c || (f = e.scrollTop(), d = o[0].getBoundingClientRect().top + f, u && (u.forEach(function(t, e) {
                            t.documentOffset = t.$el[0].getBoundingClientRect().top + f, t.documentOffsetInElement = t.documentOffset - d, t.prevStopsAccumulated = 0 === e ? 0 : u[e - 1].prevStopsAccumulated + u[e - 1].stopDuration, t.effectiveOffset = t.documentOffset + t.prevStopsAccumulated
                        }), h(), o[0].dispatchEvent(new Event("stickyWithStops:afterRemeasure"))))
                    },
                    v = function() {
                        s = o.find(r).filter(function(t, e) {
                            return angular.element(e).height() >= a
                        }), u = s.map(function(t, e) {
                            return {
                                index: t,
                                $el: angular.element(e),
                                stopDuration: angular.isArray(l) ? l[t] || l[0] : l
                            }
                        }).toArray(), m()
                    },
                    g = function(t) {
                        t && t.target && v()
                    },
                    j = LJ.Function.debounce(g, 200);
                v(), e.on("scroll", h), t.addEventListener("load", m), t.addEventListener("resize", m), e.on("ljsale-load", j)
            }
        }
    }
}

function ljEmbedResizer(t) {
    return {
        scope: !0,
        link: function(e, n) {
            function o() {
                return n.find("iframe.lj_embedcontent").toArray().map(function(t) {
                    var e = t.getAttribute("src") || "",
                        n = LiveJournal.parseGetArgs(e) || {},
                        o = decodeURIComponent(n.src || ""),
                        i = "facebook" === n.source,
                        r = i && o.indexOf("plugins/video.php") > -1,
                        l = i && !r;
                    if (l) return null;
                    var c = angular.element(t),
                        a = c.parent(),
                        s = {
                            element: c,
                            scale: c.attr("height") / c.attr("width")
                        };
                    return s.parent = {
                        node: a[0]
                    }, a.data("imgHeight") && a.data("imgWidth") && (s.insta = {
                        scale: a.data("imgHeight") / a.data("imgWidth"),
                        space: 12,
                        headerHeight: 64,
                        footerHeight: 94
                    }), s
                }).filter(function(t) {
                    return t
                })
            }

            function i(e) {
                e.forEach(function(e) {
                    var n = e.element[0];
                    if (e.parent.node && e.parent.node.classList.contains(r.BIG_EMBED_WRAP)) {
                        n.style.width = null;
                        var o = e.parent.node.getBoundingClientRect();
                        o.width > t.innerWidth && (n.style.width = t.innerWidth + "px")
                    }
                    var i = e.element.width(),
                        l = 0,
                        c = i * (e.scale + l);
                    if (e.insta) {
                        var a = i;
                        c = a * e.insta.scale, c += e.insta.headerHeight, c += i > 470 ? e.insta.footerHeight : e.insta.space
                    }
                    e.element.height(c)
                })
            }
            var r = {};
            r.BIG_EMBED_WRAP = "aentry-post__embed--big";
            var l = o();
            angular.element(t).on("resize", LJ.Function.debounce(function() {
                i(l)
            }, 150)), i(l), LJ.Event.on("ljcut:appendContent", function(t) {
                var e = t.$content,
                    r = e.closest(n).length;
                if (r) {
                    l = o();
                    var c = LJ.Function.debounce(function() {
                        return i(l)
                    }, 500);
                    e.find("iframe").on("load", c)
                }
            })
        }
    }
}

function onRender(t) {
    return {
        link: function(e, n, o) {
            e.$last && t(function() {
                e.$emit("onRender", n, o)
            })
        }
    }
}

function ljInitial(t) {
    return {
        restrict: "A",
        compile: function(e, n) {
            var o = n.value || e.val();
            return {
                pre: function(e, n, i) {
                    t(i.ngModel).assign(e, o)
                }
            }
        }
    }
}

function convertToNumber() {
    return {
        require: "ngModel",
        link: function(t, e, n, o) {
            o.$parsers.push(function(t) {
                return parseInt(t, 10)
            }), o.$formatters.push(function(t) {
                return "" + t
            })
        }
    }
}

function trustAsResourceUrl(t) {
    return function(e) {
        return t.trustAsResourceUrl(e)
    }
}

function windowCheck(t) {
    return {
        link: function(e, n, o) {
            var i = +o.windowWidthMin,
                r = +o.windowWidthMax,
                l = "emptyContents" === o.windowCheckOnFail,
                c = t.innerWidth || t.document.documentElement.clientWidth;
            (i > c || c > r) && l && n.empty()
        }
    }
}

function ljNgOnload() {
    return {
        scope: {
            callback: "&ljNgOnload"
        },
        link: function(t, e) {
            e.on("load", function(e) {
                t.callback({
                    event: e.originalEvent
                })
            })
        }
    }
}
ljTemplateRun.$inject = ["$templateCache"], ljHtml.$inject = ["$parse"], ljHtmlLive.$inject = ["$parse"], ljMl.$inject = ["$parse", "$compile"], ljSwitchOff.$inject = ["$document", "$parse"], focusAndSelect.$inject = ["$timeout"], ljDebounce.$inject = ["$parse"], ljScroll.$inject = ["$parse"], ljSvgIconRefresh.$inject = ["$rootScope"], ljFlatbutton.$inject = ["$timeout", "$parse", "$compile"], ljSticky.$inject = ["$timeout", "$parse", "$interval"], stickyWithStops.$inject = ["$window", "$document"], ljEmbedResizer.$inject = ["$window"], onRender.$inject = ["$timeout"], ljInitial.$inject = ["$parse"], windowCheck.$inject = ["$window"], trustAsResourceUrl.$inject = ["$sce"];
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
};
//= require js/core/object.js
//= require js/core/support.js
//= require js/core/string.js
angular.module("LJ.Templates", []).run(ljTemplateRun), angular.module("LJ.Directives", []).run(fixIeRedirect).directive("ljHtml", ljHtml).directive("ljHtmlLive", ljHtmlLive).directive("includeReplace", includeReplace).directive("ljMl", ljMl).directive("ljSwitchOff", ljSwitchOff).directive("ljDisabled", ljDisabled).directive("focusAndSelect", focusAndSelect).directive("ljDebounce", ljDebounce).directive("ljScroll", ljScroll).directive("ljScreenable", ljScreenable).run(ljSvgIconRefresh).directive("ljSvgIcon", ljSvgIcon).directive("ljFlatbutton", ljFlatbutton).directive("ljCut", ljCut).directive("ljSticky", ljSticky).directive("stickyWithStops", stickyWithStops).directive("ljEmbedResizer", ljEmbedResizer).directive("onRender", onRender).directive("ljInitial", ljInitial).directive("convertToNumber", convertToNumber).directive("windowCheck", windowCheck).directive("ljNgOnload", ljNgOnload).filter("trustAsResourceUrl", trustAsResourceUrl),
    function() {
        function t() {
            for (var t = Math.pow(2, 24), e = void 0; void 0 === e || o.hasOwnProperty(e) || !isNaN(+e);) e = Math.floor(Math.random() * t).toString(32);
            return o[e] = !0, e
        }
        var e = LJ.get("siteroot").split(/https?:\/\/www\./)[1].replace(/\./g, "\\."),
            n = new RegExp("^(?:(?:https?:)?//)?([-\\w]{1,15})?\\." + e + "/(media/)?\\d+.html.*?[&?]embed\\b"),
            o = {},
            i = {},
            r = function() {
                var o = Array.from(document.querySelectorAll('iframe[src*="' + e + '"]')).filter(function(t) {
                        return t.src.match(n)
                    }),
                    r = o.filter(function(t) {
                        var e = Object.values(i).some(function(e) {
                            return e.node === t
                        });
                        return !e
                    }),
                    l = {};
                r.forEach(function(e) {
                    var n = t(),
                        o = {
                            key: n,
                            node: e
                        };
                    l[n] = o, i[n] = l[n]
                });
                var c = Object.keys(l);
                c.length > 0 && setTimeout(function() {
                    c.forEach(function(t) {
                        var e = 100,
                            n = 0,
                            o = setInterval(function() {
                                var r = i[t],
                                    l = r.node;
                                n > e && (console.warn("Failed to measure&beautify LJ embed — it's iframe doesn't respond for too long", l), clearInterval(o)), n += 1, r.processed && clearInterval(o);
                                try {
                                    "complete" === l.contentWindow.document.readyState && l.contentWindow.postMessage({
                                        key: t
                                    }, "*")
                                } catch (c) {
                                    try {
                                        l.contentWindow.postMessage({
                                            key: t
                                        }, "*")
                                    } catch (c) {}
                                }
                            }, 500)
                    })
                }, 10)
            };
        document.addEventListener("DOMContentLoaded", function() {
            r()
        }), window.addEventListener("message", function(t) {
            if (t.data.ljEmbed) {
                if (t.data.key) {
                    var e = function() {
                        var e = t.data,
                            n = e.key,
                            o = e.height;
                        return n && i[n] && setTimeout(function() {
                            var t = i[n];
                            t.processed = !0, t.heightFromIframe = o, t.node.setAttribute("height", o)
                        }, 10), {
                            v: void 0
                        }
                    }();
                    if ("object" === ("undefined" == typeof e ? "undefined" : _typeof(e))) return e.v
                }
                r()
            }
        })
    }();
/* <<< file end: js/core/angular/common.js */

//# map link was there [common.js.map]
/* >>> file start: js/core/angular/options.js */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
};
angular.module("LJ.Options", []).factory("Options", [function() {
    return {
        create: function(t) {
            function n(n, o) {
                "undefined" == typeof o ? angular.extend(t, n) : t[n] = o
            }

            function o(n) {
                return t[n]
            }

            function e() {
                return t
            }
            if ("undefined" == typeof t && (t = {}), "object" !== ("undefined" == typeof t ? "undefined" : _typeof(t))) throw new TypeError("Options should be an object.");
            return {
                set: n,
                get: o,
                raw: e
            }
        }
    }
}]);
/* <<< file end: js/core/angular/options.js */

//# map link was there [options.js.map]
/* >>> file start: js/core/angular/users.js */
//= require js/core/angular/api.js
//= require js/core/angular/options.js
! function(e) {
    return e
}(),
function() {
    "use strict";
    angular.module("Users", ["LJ.Api", "LJ.Options"]).factory("Relations", ["$q", "$timeout", "UsersCache", function(e, n, r) {
        function t(t, i, u) {
            var a = e.defer(),
                s = {
                    addFriend: {
                        is_invite_sent: !0
                    },
                    removeFriend: {
                        is_friend: !1
                    },
                    subscribe: {
                        is_subscribedon: !0
                    },
                    unsubscribe: {
                        is_subscribedon: !1
                    },
                    join: {
                        is_invite_sent: !0
                    },
                    leave: {
                        is_member: !1
                    },
                    setBan: {
                        is_banned: !0
                    },
                    setUnban: {
                        is_banned: !1
                    }
                },
                o = {
                    addFriend: {
                        is_invite_sent: !1
                    },
                    removeFriend: {
                        is_friend: !0
                    },
                    subscribe: {
                        is_subscribedon: !1
                    },
                    unsubscribe: {
                        is_subscribedon: !0
                    },
                    join: {
                        is_invite_sent: !1
                    },
                    leave: {
                        is_member: !0
                    },
                    setBan: {
                        is_banned: !1
                    },
                    setUnban: {
                        is_banned: !0
                    }
                },
                c = angular.copy(r.get(t) || {});
            return angular.isUndefined(u) && (u = {}), u.wait || r.update(t, s[i] || {}), LJ.Event.trigger("relations.change", {
                username: t,
                action: i,
                callback: function(e) {
                    n(function() {
                        if (e.error) return u.wait || r.update(t, angular.extend(o[i], c)), void a.reject(e.error.message);
                        var n = LJ.Object.pick(e, "is_banned", "is_friend", "is_member", "is_subscriber", "is_subscribedon", "is_friend_of", "is_invite_sent");
                        r.update(t, n), a.resolve(e)
                    })
                }
            }), a.promise
        }

        function i(e, n, i) {
            var u = t(e, n ? "subscribe" : "unsubscribe", i);
            return n || u.then(function() {
                r.update(e, {
                    filtermask: 0
                })
            }), u
        }

        function u(e, n, r) {
            return t(e, n ? "addFriend" : "removeFriend", r)
        }

        function a(e, n, r) {
            return t(e, n ? "join" : "leave", r)
        }

        function s(e, n, r) {
            return t(e, n ? "setBan" : "setUnban", r)
        }

        function o(e, n, r) {
            return t(e, n ? "banEverywhere" : "unbanEverywhere", r)
        }
        return {
            toggleFriend: u,
            toggleSubscription: i,
            toggleMember: a,
            toggleBan: s,
            toggleBanEverywhere: o
        }
    }]).factory("Mask", function() {
        function e(e) {
            return e >>> 0
        }
        var n = {};
        return n.change = function(n, r) {
            var t = r.add,
                i = r.remove;
            return angular.isDefined(t) && (angular.isArray(t) || (t = [t]), n = t.reduce(function(n, r) {
                return e(n | Math.pow(2, r))
            }, n)), angular.isDefined(i) && (angular.isArray(i) || (i = [i]), n = i.reduce(function(n, r) {
                var t = Math.pow(2, 32) - 1 - Math.pow(2, r);
                return e(n & t)
            }, n)), n
        }, n.check = function(e, n) {
            var r = Math.pow(2, n);
            return Boolean(e & r)
        }, n
    }).factory("UsersCache", ["$q", "$cacheFactory", "Options", function(e, n, r) {
        function t(e) {
            if (!angular.isUndefined(e)) {
                var n = l.get(f.get("journal")) || {},
                    r = e;
                return angular.isArray(e) || (e = [e]), e.forEach(function(e) {
                    if (e && angular.isObject(e) && !angular.isUndefined(e.username)) {
                        var r = e.display_username || e.username,
                            t = n[r];
                        n[r] = t ? angular.extend(t, e) : e
                    }
                }), l.put(f.get("journal"), n), r
            }
        }

        function i(e) {
            var n = l.get(f.get("journal"));
            return Boolean(n[e])
        }

        function u(e) {
            var n;
            if (angular.isString(e)) return n = l.get(f.get("journal")), n && n[e] ? n[e] : null;
            if (angular.isFunction(e)) return s(e);
            if (angular.isUndefined(e)) return s();
            throw new TypeError("Incorrect argument passed.")
        }

        function a(e) {
            var n = l.get(f.get("journal"));
            return n || angular.isObject(n) ? Object.keys(n).reduce(function(r, t) {
                return String(n[t].id) === String(e) ? n[t] : r
            }, null) : null
        }

        function s(e) {
            var n, r = l.get(f.get("journal")),
                t = [];
            for (n in r)
                if (r.hasOwnProperty(n)) {
                    if (e && !e(r[n])) continue;
                    t.push(r[n])
                } return t
        }

        function o(e, n) {
            var r = u(e) || {
                username: e
            };
            return angular.extend(r, n), t(r), r
        }
        var c, l = n("users"),
            f = r.create({
                journal: LJ.get("remoteUser")
            });
        return c = {
            add: t,
            update: o,
            set: f.set,
            get: u,
            getById: a,
            exists: i
        }
    }]).factory("Users", ["$q", "$timeout", "Api", "Mask", "UsersCache", "Options", function(e, n, r, t, i, u) {
        function a(e) {
            return k[C.get("type")][e]
        }

        function s(e) {
            return "subscriptions" === C.get("type") ? Boolean(e.is_subscribedon) : !0
        }

        function o(e, n) {
            return angular.isUndefined(n) ? e[c()] || 1 : void(e[c()] = n)
        }

        function c() {
            return "subscriptions" === C.get("type") ? "filtermask" : "groupmask"
        }

        function l(e, n, t) {
            return r.call("user.get", {
                target: e,
                fields: n
            }, t).then(function(e) {
                var n = e.user;
                return i.add(n), n
            })
        }

        function f(e, n, t) {
            return r.call("user.get", {
                targetid: e,
                fields: n
            }, t).then(function(e) {
                var n = e.user;
                return i.add(n), n
            })
        }

        function d(e, n) {
            return r.call("relations.list_friends", {
                journal: C.get("journal"),
                fields: e
            }, n).then(_("is_friend"))
        }

        function g(e) {
            return r.call("groups.list_users", {
                journal: C.get("journal"),
                fields: e
            }).then(function(e) {
                return i.add(e.users), e
            })
        }

        function p(e) {
            return r.call("relations.list_subscriptions", {
                journal: C.get("journal"),
                fields: e
            }).then(_("is_subscribedon"))
        }

        function b(e) {
            return r.call("relations.list_banned", {
                journal: C.get("journal"),
                fields: e
            }).then(_("is_banned"))
        }

        function _(e) {
            return function(n) {
                var r = n.users;
                return r.forEach(LJ.Function.set(e, !0)), i.add(r), r
            }
        }

        function v(e) {
            return r.call("relations." + e + "_count").then(function(e) {
                return e.count
            })
        }

        function h(n) {
            return angular.isArray(n) || (n = [n]), 0 === n.length ? e.reject("You should provide users to sync.") : r.call(a("update"), {
                users: n,
                journal: C.get("journal")
            }).then(function(e) {
                return i.add(e.users), e
            })
        }

        function m(e, n) {
            var r = i.get(e);
            return r ? t.check(o(r), n) : !1
        }

        function j(e) {
            return e.filter(i.exists).map(i.get).filter(s)
        }

        function y(e) {
            var n = (e.filter || "").toLowerCase(),
                r = i.get(function(r) {
                    return s(r) && t.check(o(r), e.id) ? !n || -1 !== r.display_username.toLowerCase().indexOf(n) : !1
                });
            return e.limit && (r = r.slice(0, e.limit)), r
        }

        function U(e) {
            var n = (e.filter || "").toLowerCase(),
                r = i.get(function(r) {
                    return s(r) ? t.check(o(r), e.id) ? !1 : !n || -1 !== r.display_username.toLowerCase().indexOf(n) : !1
                });
            return e.limit && (r = r.slice(0, e.limit)), r
        }

        function w(e, n) {
            angular.isArray(n) || (n = [n]);
            var r;
            return r = "subscriptions" === C.get("type") ? j(n) : n.map(function(e) {
                return i.get(e) || {
                    username: e
                }
            }), r.forEach(function(n) {
                o(n, t.change(o(n), {
                    add: e
                }))
            }), h(r)
        }

        function L(e, n, r) {
            angular.isArray(n) || (n = [n]);
            var i = j(n);
            return i.forEach(function(n) {
                o(n, t.change(o(n), {
                    remove: e
                }))
            }), r && r.silent ? void 0 : h(i)
        }

        function E(e, n) {
            return i.update(e, {
                alias: n
            }), r.call("user.alias_set", {
                target: e,
                alias: n
            })
        }

        function F(e) {
            return function(n, r) {
                return n[e].toLowerCase().localeCompare(r[e].toLowerCase())
            }
        }

        function O() {
            var e, n = C.get("journal");
            C.set.apply(null, arguments), e = C.get("journal"), e !== n && i.set("journal", e)
        }
        var k = {
                friends: {
                    read: "relations.list_friends",
                    readOne: "relations.get_friend",
                    update: "groups.update_users"
                },
                subscriptions: {
                    read: "relations.list_subscriptions",
                    readOne: "relations.get_subscription",
                    update: "filters.update_users"
                }
            },
            C = u.create({
                type: "friends",
                journal: LJ.get("remoteUser")
            });
        return {
            USERHEAD_FIELDS: {
                alias: 1,
                journal_url: 1,
                profile_url: 1,
                userhead_url: 1,
                is_invisible: 1,
                journaltype: 1
            },
            set: O,
            get: C.get,
            Cache: i,
            fetchUser: l,
            fetchUserById: f,
            fetchBanned: b,
            fetchFriends: d,
            fetchGroupUsers: g,
            fetchSubscriptions: p,
            fetchCount: v,
            sync: h,
            alias: E,
            isUserInGroup: m,
            getExisting: j,
            fromGroup: y,
            outOfGroup: U,
            addToGroup: w,
            removeFromGroup: L,
            comparator: F
        }
    }])
}();
/* <<< file end: js/core/angular/users.js */

//# map link was there [users.js.map]
/* >>> file start: js/core/angular/ljUser.js */
//= require js/core/angular/api.js
//= require js/core/angular/users.js
Site.page.template['angular/ljUser.ng.tmpl'] = '<span\n    class=\"\n        ljuser\n        i-ljuser\n        i-ljuser-type-{{user.journaltype}}\n        \"\n    ng-class=\"{\n        \'i-ljuser-deleted\': user.is_invisible,\n        \'i-ljuser-nopopup noctxpopup\': user.noctxpopup,\n        \'i-ljuser-withalias\': user.alias,\n        \'i-ljuser-showalias\': user.showalias\n    }\"\n    data-ljuser=\"{{user.username}}\"\n    lj:user=\"{{user.username}}\"\n    ><!--\n\n    Userhead\n    --><a\n        class=\"i-ljuser-profile\"\n        ng-href=\"{{user.profile_url}}\"\n        ng-attr-target=\"{{user.target ? user.target : \'_self\'}}\"\n        ><!--\n        --><img\n            class=\"i-ljuser-userhead\"\n            ng-src=\"{{user.userhead_url}}\"\n            ><!--\n    --></a><!--\n\n    Username\n    --><a\n        class=\"i-ljuser-username\"\n        ng-href=\"{{user.journal_url}}\"\n        ng-attr-title=\"{{user.display_username || user.alias}}\"\n        ng-attr-target=\"{{user.target ? user.target : \'_self\'}}\"\n        ><b ng-bind=\"user.display_name || user.display_username\"></b></a><!--\n\n    Alias\n    --><span\n        class=\"i-ljuser-alias\"\n        ng-bind=\"user.alias\"\n        ></span><!--\n\n--></span>\n';
! function() {
    "use strict";

    function e(e, r, n, t, a, u, s) {
        function i(e) {
            var r = n.defer(),
                t = s.Cache.get(e);
            return t && t.userhead_url ? (r.resolve(t), r.promise) : s.fetchUser(e, s.USERHEAD_FIELDS, {
                cache: !0,
                silent: !0
            })
        }

        function l(e) {
            var r = n.defer(),
                t = s.Cache.getById(e);
            return t && t.userhead_url ? (r.resolve(t), r.promise) : s.fetchUserById(e, s.USERHEAD_FIELDS, {
                cache: !0,
                silent: !0
            })
        }

        function c(r, t) {
            var l = n.defer(),
                c = e.$new();
            return i(r).then(function() {
                var e;
                c.user = angular.extend({}, s.Cache.get(r), t || {}), e = a(d)(c), u(function() {
                    l.resolve(p.empty().append(e).html()), c.$destroy()
                })
            }), l.promise
        }

        function o(r, t) {
            var i = n.defer(),
                c = e.$new();
            return l(r).then(function() {
                var e;
                c.user = angular.extend({}, s.Cache.getById(r), t || {}), e = a(d)(c), u(function() {
                    i.resolve(p.empty().append(e).html()), c.$destroy()
                })
            }), i.promise
        }
        var p = angular.element("<div />"),
            d = t.get("ljUser.ng.tmpl");
        return {
            prepare: i,
            prepareById: l,
            getById: o,
            get: c
        }
    }

    function r(e, r, n) {
        return {
            templateUrl: "ljUser.ng.tmpl",
            replace: !0,
            scope: !0,
            compile: function(t, a) {
                var u = e(a.ljUserDynamic),
                    s = e(a.ljUserDynamicOptions);
                return function(e) {
                    var t = s(e);
                    e.$watch(function() {
                        return u(e)
                    }, function(a) {
                        var u = a;
                        e.user = angular.extend({
                            username: u,
                            display_username: u
                        }, t || {}), n.prepare(u).then(function() {
                            e.$watch(function() {
                                return r.Cache.get(u)
                            }, function(r) {
                                angular.extend(e.user, r)
                            }, !0)
                        })
                    })
                }
            }
        }
    }

    function n(e, r, n) {
        return {
            template: '<img class="{{user.class}}" src="https://l-userpic.livejournal.net/default/{{user.id}}" alt="" />',
            scope: !0,
            compile: function(t, a) {
                return function(t) {
                    var u = e(a.ljUserAvatarImg)(t),
                        s = e(a.ljUserAvatarImgOptions)(t),
                        i = +u;
                    return NaN !== i && u.toString().length === i.toString().length ? void(t.user = angular.extend({
                        id: u
                    }, s || {})) : (function(e) {
                        return e
                    }(), t.user = angular.extend({
                        username: u
                    }, s || {}), void n.prepare(u).then(function(e) {
                        t.$watch(function() {
                            return r.Cache.get(u)
                        }, function(e) {
                            angular.extend(t.user, e)
                        }, !0)
                    }))
                }
            }
        }
    }

    function t(e, r, n) {
        return {
            templateUrl: "ljUser.ng.tmpl",
            replace: !0,
            scope: !0,
            compile: function(t, a) {
                return function(t) {
                    var u = e(a.ljUserById)(t),
                        s = e(a.ljUserByIdOptions)(t);
                    t.user = angular.extend({
                        username: "user-" + u,
                        display_username: "user-" + u
                    }, s || {}), n.prepareById(u).then(function() {
                        t.$watch(function() {
                            return r.Cache.getById(u)
                        }, function(e) {
                            angular.extend(t.user, e)
                        }, !0)
                    })
                }
            }
        }
    }

    function a(e) {
        var r = "https:",
            n = function(e, n) {
                return e.journal_url ? e.journal_url : n.indexOf(".") > -1 ? r + "//" + n : r + "//" + n + ".livejournal.com/"
            };
        return {
            templateUrl: "ljUser.ng.tmpl",
            replace: !0,
            scope: !0,
            compile: function(t, a) {
                var u = e(a.ljUserStatic),
                    s = e(a.ljUserStaticId),
                    i = e(a.ljUserStaticOptions);
                return function(e) {
                    var t = u(e),
                        a = s(e),
                        l = i(e) || {},
                        c = n(l, t),
                        o = c + "/profile";
                    "zyalt" === t && (o = c + "profile", t = "varlamov.ru"), e.user = {
                        alias: "",
                        display_name: l.display_name || t,
                        display_username: l.display_username || t,
                        id: a,
                        is_invisible: !1,
                        journal_url: c,
                        journaltype: "P",
                        profile_url: o,
                        userhead_url: r + "//l-files.livejournal.net/userhead/default/" + a,
                        username: t,
                        noctxpopup: l.noctxpopup
                    }
                }
            }
        }
    }

    function u(e, r) {
        var n = "https:";
        return {
            template: '\n        <img\n          class="{{user.class}}"\n          ng-src="' + n + '//l-userpic.livejournal.net/default/{{user.id}}"\n          alt=""\n        />',
            scope: !0,
            compile: function(r, n) {
                var t = e(n.ljUserAvatarStaticId),
                    a = e(n.ljUserAvatarStaticOptions);
                return function(e) {
                    var r = t(e),
                        n = a(e);
                    e.user = {
                        id: r,
                        "class": n["class"] || ""
                    }
                }
            }
        }
    }
    a.$inject = ["$parse"], u.$inject = ["$parse", "$location"], angular.module("LJ.User", ["LJ.Api", "LJ.Templates", "Users"]), angular.module("LJ.User").factory("ljUser", e).directive("ljUserById", t).directive("ljUserDynamic", r).directive("ljUserAvatarImg", n).directive("ljUserStatic", a).directive("ljUserAvatarStatic", u), e.$inject = ["$rootScope", "Api", "$q", "$templateCache", "$compile", "$timeout", "Users"], r.$inject = ["$parse", "Users", "ljUser"], n.$inject = ["$parse", "Users", "ljUser"], t.$inject = ["$parse", "Users", "ljUser"]
}();
/* <<< file end: js/core/angular/ljUser.js */

//# map link was there [ljUser.js.map]
/* >>> file start: js/widgets/likus.js */
function _defineProperty(e, n, t) {
    return n in e ? Object.defineProperty(e, n, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = t, e
}
var _extends = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = arguments[n];
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
    }
    return e
};
//= require js/core/angular/ljUser.js
//= require js/core/angular/api.js
//= require js/core/angular/bubble.js
Site.page.template['angular/widgets/likus/likusMain.ng.tmpl'] = '<a\n    class=\"ljlikus-button ljlikus--like\"\n    ng-class=\"{\'ljlikus--like-active\': likus.liked}\"\n    ng-href=\"#\"\n    ng-click=\"likus.vote($event)\"\n    ng-if=\"likus.show && !likus.link\"\n    ><span class=\"ljlikus-icon\" lj-svg-icon=\"flaticon--like\"></span></a>\n<a\n    class=\"ljlikus-action\"\n    ng-href=\"#\"\n    ng-if=\"likus.show && likus.count && !likus.link\"\n    ng-click=\"likus.countClick($event)\"\n    ng-mouseover=\"likus.countHover($event)\"\n    ><span class=\"ljlikus-counter\">{{likus.formattedCount || likus.count}}</span></a>\n\n<!-- no actions, link -->\n<a\n    class=\"ljlikus--like ljlikus-no-action\"\n    ng-href=\"{{likus.link}}\"\n    ng-if=\"likus.show && likus.noActions && likus.link\"\n    target=\"{{ likus.linkTarget }}\"\n    >\n    <span class=\"ljlikus-icon\" lj-svg-icon=\"flaticon--like\"></span>\n    <span\n        class=\"ljlikus-counter\"\n        ng-if=\"likus.show && likus.link && likus.count\"\n        >{{likus.formattedCount || likus.count}}</span>\n</a>\n';
Site.page.template['angular/widgets/likus/likusUsers.ng.tmpl'] = '<ul class=\"ljlikus-list\">\n    <li class=\"ljlikus__item\" ng-repeat=\"user in users.slice(0, 5)\">\n        <span lj-user-by-id=\"user\" lj-user-by-id-options=\"{ noctxpopup: true }\" />\n    </li>\n    <li\n        ng-if=\"count > 5\"\n        class=\"ljlikus__item ljlikus--more\"\n        >\n        <a href=\"#\" class=\"ljlikus__item--more\" ng-click=\"more($event)\">\n            <span lj-ml=\"likus.users.add_more\" lj-ml-resolve=\"{count: count - 5}\" />\n        </a>\n    </li>\n</ul>\n';
Site.page.template['angular/widgets/likus/likusBubble.ng.tmpl'] = '<!-- Bubble -->\n<div class=\"ljlikus-bubble\">\n\n    <!-- header -->\n    <header class=\"ljlikus-bubble__header\">\n        <span class=\"ljlikus-bubble__title\" lj-ml=\"likus.users.title\"></span>\n        <span class=\"ljlikus-counter\">{{likusBubble.count}}</span>\n        <span\n            class=\"ljlikus-bubble__close\"\n            lj-svg-icon=\"flaticon--cross\"\n            ng-click=\"likusBubble.close($event)\"\n        ></span>\n    </header> <!-- /header -->\n\n    <!-- body -->\n    <div class=\"ljlikus-bubble__body\">\n\n        <!-- list -->\n        <ul class=\"ljlikus-list ljlikus-list--full\">\n            <li ng-repeat=\"user in likusBubble.users\" class=\"ljlikus__item\">\n                <span class=\"ljlikus__item-userpic\">\n                    <img ng-src=\"{{likusBubble.getUserImage(user)}}\" alt=\"\" >\n                </span>\n                <div class=\"ljlikus__item-meta\">\n                    <span lj-html=\"user.entry_title\" />\n                    <p class=\"ljlikus__item-usertitle\">{{user.title}}</p>\n                </div>\n                <div class=\"ljlikus__friends-wrap\">\n                    <button class=\"ljlikus__friends\n                                    ljlikus__friends--add\n                                    flatbutton\n                                    flatbutton--small\n                                    flatbutton--neutral\"\n                          ng-class=\"{ \'ljlikus__friends--hide\': user.is_friend }\"\n                          ng-disabled=\"user.updating\"\n                          ng-click=\"likusBubble.toggleFriend(user, true)\"\n                          lj-ml=\"likus.users.add.friends\"\n                    ></button>\n                    <button class=\"ljlikus__friends\n                                    ljlikus__friends--list\n                                    flatbutton\n                                    flatbutton--small\n                                    flatbutton--neutral\"\n                          ng-class=\"{ \'ljlikus__friends--hide\': !user.is_friend }\"\n                          ng-disabled=\"user.updating\"\n                          ng-click=\"likusBubble.toggleFriend(user, false)\">\n                        <span class=\"ljlikus__friends--list-span\"\n                              lj-ml=\"likus.users.friend.list\"\n                        ></span>\n                        <span lj-ml=\"likus.users.friend.remove\"\n                              class=\"ljlikus__friends--remove\"\n                        ></span>\n                    </button>\n                </div>\n            </li>\n            <li\n                class=\"ljlikus__item ljlikus__item--more\"\n                ng-if=\"likusBubble.hasMore\"\n                >\n                <a\n                    class=\"b-flatbutton b-flatbutton-simple\"\n                    href=\"#\"\n                    ng-click=\"likusBubble.loadMore($event)\"\n                    lj-ml=\"likus.users.show.more\"\n                ></a><!--\n            --></li>\n            <li\n                class=\"ljlikus__item ljlikus__item--loading\"\n                ng-if=\"likusBubble.loading\"\n                >\n                <span class=\"svgpreloader-16 svgpreloader-tag\"></span>\n            </li>\n        </ul> <!-- /list -->\n\n    </div> <!-- /body -->\n</div> <!-- /bubble -->\n';
//= require_ml likus.users.add_more
//= require_ml likus.users.sc
//= require_ml likus.users.add.friends
//= require_ml likus.users.friend.list
//= require_ml likus.users.friend.remove
//= require_ml likus.users.title
! function() {
    "use strict";

    function e() {
        return {
            scope: {
                noActions: "@ljLikusNoActions",
                count: "@ljLikusCount",
                medius: "@ljLikusMedius",
                journal: "@ljLikusJournal",
                item: "@ljLikusItem",
                token: "@ljLikusToken",
                uri: "@ljLikusUri",
                href: "@ljLikusHref",
                linkTarget: "@ljLikusLinkTarget"
            },
            templateUrl: "likusMain.ng.tmpl",
            controllerAs: "likus",
            controller: n
        }
    }

    function n(e, n, t, r, i, o, u, s) {
        function l(e) {
            e.preventDefault(), u.close("likus-users"), angular.isFunction(f) && f(), o.showUsers(_extends({}, d), {
                likes_signature: y
            })
        }

        function a(e) {
            d = {
                journal: e.journal,
                item: e.item,
                uniq: e.journal + "-" + e.item
            }, v.count = parseInt(e.count) || 0, v.liked = Boolean(e.liked), v.formattedCount = e.short_count, p || Promise.all(e.users.map(function(e) {
                return s.prepareById(e)
            })).then(function(n) {
                c = [].concat(e.users)
            })
        }
        var c, d, f, g, v = this,
            p = e.noActions || !1,
            m = parseInt(e.count) || 0,
            k = e.medius,
            h = e.journal,
            b = e.item,
            j = e.uri || r.LJ.get("currentEntry"),
            y = e.token || r.LJ.get("likes_signature"),
            L = r.LJ.Flags.isEnabled("likes"),
            w = r.LJ.Flags.isEnabled("medius"),
            J = r.LJ.Flags.isEnabled("likes_display"),
            _ = r.LJ.Flags.isDisabled("homepage_v3"),
            $ = r.LJ.get("remote");
        angular.element("body");
        if (e.noActions && e.href && (p = e.href), !L) return void n.remove();
        if (_) return void n.remove();
        if (k && !w && "/" == location.pathname) return void n.remove();
        h && b && (d = {
            journal: h,
            item: b,
            uniq: "" + h + "-" + b
        }), !d && j && (d = {
            uri: j,
            uniq: j
        });
        var A = void 0;
        A = angular.isDefined(m) ? !0 : !(!d || !y), A && (J && n.removeClass("lj-likus--hidden"), v.show = J, v.count = m, v.liked = !1, v.link = p, v.noActions = e.noActions, v.linkTarget = e.linkTarget, d && y && o.getVote(d, {
            token: y,
            type: p ? "short" : "full",
            count: m && p ? m : !1
        }, a).then(a), v.vote = function(e) {
            return e.preventDefault(), $ ? g ? void i.log("You don't want to vote so quickly!") : (g = !0, void o.setVote(_extends({}, d), {
                mark: +v.liked
            }).then(a).then(function() {
                g = !1
            }, function() {
                g = !1
            })) : void LJ.Util.Action.login(e)
        }, v.users = function(n) {
            var r = t.$new();
            r.users = c, r.count = this.count, r.more = l, f = u.register({
                name: "likus-users",
                template: "likusUsers.ng.tmpl",
                closeControl: !1,
                closeOnScroll: !0,
                autoClose: 200,
                tryAsideIfNoHorizSpace: !0
            }, r), u.open("likus-users", angular.element(n.currentTarget)), e.$on("bubble:close:likus-users", f)
        }, v.countHover = function(e) {
            return r.innerWidth <= 650 ? void e.preventDefault() : void v.users(e)
        }, v.countClick = function(e) {
            e.preventDefault(), r.innerWidth > 650 || v.users(e)
        })
    }

    function t() {
        return {
            scope: !0,
            templateUrl: "likusBubble.ng.tmpl",
            controllerAs: "likusBubble",
            controller: r
        }
    }

    function r(e, n, t, r) {
        function i() {
            return t.showUsers()
        }

        function o(e) {
            return e ? (f.addClass(c), s.count = t.getCached(e), void u(e)) : (f.removeClass(c), s.users = [], s.count = 0, void(a = null))
        }

        function u(e) {
            s.loading = !0, s.hasMore = !1, t.getUsers(e, {
                limit: l,
                lastid: a
            }).then(function(e) {
                var n = e.res,
                    t = e.count;
                s.count = t, s.loading = !1, a = (n[l - 1] || {}).id, s.hasMore = !1, s.users = s.users.concat(s.lastid ? n.slice(1) : n)
            })
        }
        var s = this,
            l = 100,
            a = null,
            c = "ljlikus-bubble--full",
            d = n.LJ.Flags.isEnabled("likes"),
            f = angular.element("body");
        d && (s.loading = !1, s.hasMore = !1, s.users = [], s.count = 0, s.fader = angular.element(".b-fader"), s.fader.on("click", function(n) {
            s.close(n), e.$apply()
        }), s.getUserImage = function(e) {
            return e.userpic || LJ.get("siteroot") + "/img/userpics/userpic-user.png"
        }, s.close = function(e) {
            e && e.preventDefault(), t.showUsers(!1)
        }, s.loadMore = function(e) {
            e.preventDefault(), u(t.showUsers())
        }, s.toggleFriend = function(e, n) {
            e.updating = !0, r.call(n ? "relations.addfriend" : "relations.removefriend", {
                target: e.username
            }, {
                silent: !0
            }).then(function() {
                e.updating = !1, e.is_friend = n
            })
        }, e.$watch(i, o))
    }

    function i(e) {
        function n(n) {
            return i[n] = i[n] || new Promise(function(t) {
                var r = e.document.createElement("iframe");
                r.style = "display: none; width: 0; height: 0; border: 0;", r.frameBorder = 0, r.src = LJ.get("statprefix") + "/??plain/storage.html?key=" + n + "&v=" + LJ.get("v"), e.document.body.appendChild(r), r.onload = function() {
                    t(r)
                }
            }), i[n]
        }

        function t(e, t) {
            n(e).then(function(e) {
                e.contentWindow.postMessage(angular.toJson(t), "*")
            })
        }

        function r(n, t) {
            e.addEventListener("message", function(e) {
                if (e.origin === LJ.get("statprefix")) {
                    var n = void 0;
                    try {
                        n = angular.fromJson(e.data || "{}") || {}
                    } catch (r) {
                        n = {}
                    }
                    t(n)
                }
            })
        }
        var i = {};
        return {
            push: t,
            listen: r
        }
    }

    function o(e, n, t, r, i, o) {
        function u(t, r, i) {
            var o = n.defer(),
                u = r.token + "#" + r.type;
            if (r.count) {
                var s = _extends({}, t, {
                    count: r.count,
                    liked: !1,
                    users: []
                });
                return k[t.uniq] = r.count, f(s), g(t.uniq, i), o.resolve(s), o.promise
            }
            return m.hasOwnProperty(u) || (m[u] = {}, e(l.bind(null, u), 50)), m[u][t.uniq] ? m[u][t.uniq].listeners.push(i) : m[u][t.uniq] = {
                entity: t,
                params: r,
                listeners: [i],
                resolve: o.resolve,
                reject: o.reject
            }, o.promise
        }

        function s(e, n) {
            var t = _extends({}, e, n);
            return i.call("likes.vote", t).then(function(e) {
                return e.result ? (k[t.uniq] = e.result.count, f([e.result]), e.result) : (LJ.Messages.error("An error has occurred."), {})
            })
        }

        function l(e) {
            var n = void 0,
                r = void 0,
                o = void 0,
                u = e.split("#")[0],
                s = e.split("#")[1];
            return m.hasOwnProperty(e) ? (n = m[e], delete m[e], r = Object.keys(n).map(function(e) {
                return n[e].entity
            }), o = {
                entities: r,
                mode: "feed",
                type: s,
                likes_signature: u
            }, void i.call("likes.get_votes", o, {
                silent: !0
            }).then(function(e) {
                var r = e.result;
                return angular.isArray(r) ? (f(r), void r.map(function(e) {
                    var t = n[e.uniq];
                    k[e.uniq] = e.count, t && g(e.journal + "-" + e.item, t.listeners), t && t.resolve(e)
                })) : void t.log("Unexpected response [getVotes / ljkus]")
            })) : void t.log("Unhandled error [getVotes / ljkus]")
        }

        function a(e) {
            return k[e.uniq] || 0
        }

        function c(e, n) {
            var t = _extends({}, e, n);
            return i.call("likes.get_users", t).then(function(n) {
                return f([{
                    count: n.count,
                    item: e.item,
                    journal: e.journal
                }]), {
                    res: n.result,
                    count: n.count
                }
            })
        }

        function d(e, n) {
            return angular.isDefined(e) && !e && (h = !1), angular.isObject(e) && (h = _extends({}, e, n)), h
        }

        function f(e) {
            if (!angular.isArray(e)) return [];
            var n = Object.values(j).filter(function(e) {
                    return e && e.expire > (new Date).getTime()
                }),
                t = n.concat(e).reduce(function(e, n) {
                    var t = n.journal + "-" + n.item;
                    return _extends({}, e, _defineProperty({}, t, _extends({}, e[t], n, {
                        users: n.users && n.users.length ? n.users : e[t] && e[t].users || [],
                        expire: new Date((new Date).getTime() + 864e5).getTime()
                    })))
                }, {});
            return o.push(p, t), t
        }

        function g(e, n) {
            Array.isArray(n) || (n = [n]);
            var t = n.filter(function(e) {
                return angular.isFunction(e)
            });
            t.length && b.push({
                uniq: e,
                callbackFunctions: t
            })
        }

        function v(e) {
            j = _extends({}, e), b.forEach(function(n) {
                e.hasOwnProperty(n.uniq) && n.callbackFunctions.forEach(function(t) {
                    return t(e[n.uniq])
                })
            })
        }
        var p = "lj-likus",
            m = {},
            k = {},
            h = !1,
            b = [],
            j = {};
        return o.listen(p, v), {
            getVote: u,
            setVote: s,
            getCached: a,
            getUsers: c,
            showUsers: d
        }
    }
    i.$inject = ["$window"], o.$inject = ["$timeout", "$q", "$log", "$window", "Api", "SyncService"], angular.module("LJ.Likus", ["LJ.Directives", "LJ.User", "LJ.Bubble", "LJ.Api"]).run(function() {
        LJ.Flags.isEnabled("likes_display") && (angular.element("body").addClass("j-p-likus"), angular.element("[ng-app]").append("<div lj-likus-bubble></div>"))
    }).factory("SyncService", i).factory("LikusService", o).directive("ljLikus", e).directive("ljLikusBubble", t), n.$inject = ["$scope", "$element", "$rootScope", "$window", "$log", "LikusService", "Bubble", "ljUser"], r.$inject = ["$scope", "$window", "LikusService", "Api"]
}();
/* <<< file end: js/widgets/likus.js */

//# map link was there [likus.js.map]
/* >>> file start: js/widgets/angular/mediusTimeAgo.js */
//= require js/node_modules/moment/min/moment.min.js
//= require js/node_modules/moment/locale/ru.js
! function() {
    function e() {
        function e(e, i) {
            var t = LJ.get("server_time") - moment().unix(),
                m = moment.unix(e.timeAgo - t).locale("ru");
            moment.locale("ru", {
                relativeTime: {
                    future: "через %s",
                    past: "%s назад",
                    s: "%d с.",
                    m: "%d мин.",
                    mm: "%d мин.",
                    h: "%d ч.",
                    hh: "%d ч.",
                    d: "%d д.",
                    dd: "%d д.",
                    M: "%d м.",
                    MM: "%d м.",
                    y: "%d г.",
                    yy: "%d г."
                }
            }), m.isValid() && (e.timeAgoText = m.fromNow(!0), i.attr("title", m.calendar()))
        }
        return {
            template: "{{timeAgoText}}",
            scope: {
                timeAgo: "<mediusTimeAgo"
            },
            link: e,
            restrict: "AE"
        }
    }
    angular.module("Medius.TimeAgo", []), angular.module("Medius.TimeAgo").directive("mediusTimeAgo", e)
}();
/* <<< file end: js/widgets/angular/mediusTimeAgo.js */

//# map link was there [mediusTimeAgo.js.map]
/* >>> file start: js/core/angular/components/postCard.js */
//= require js/core/angular/common.js
//= require js/widgets/likus.js
//= require js/widgets/angular/mediusTimeAgo.js
//= require js/configs/postCards.js
//= require_ml medius.card.topUser.subscribe
//= require_ml medius.card.topUser.read
//= require_ml main2018.card.minutes_to_read
Site.page.template['angular/components/NGLJPostCard.ng.tmpl'] = '<!-- User Card -->\n<div class=\"user-card\" ng-if=\"postCard.isTopUserCard()\">\n\n  <figure class=\"user-card__pic\">\n    <a class=\"user-card__img-wrap\" ng-href=\"{{cardProps.profileURL}}\" style=\"background-image:url({{cardProps.userpicUrl || \'\'}});\">\n      <img ng-src=\"{{cardProps.userpicUrl}}\" alt=\"{{cardProps.journalTitle}}\">\n    </a>\n    <figcaption class=\"user-card__name\">\n      <a class=\"lj-link\" ng-href=\"{{cardProps.journalUrl}}\">{{cardProps.username}}</a>\n    </figcaption>\n  </figure>\n\n  <h3 class=\"user-card__title\" ng-bind-html=\"cardProps.journalTitle\"></h3>\n  <p class=\"user-card__wrap\" ng-if=\"cardProps.ratingNum\">\n    <span class=\"user-card__position\">{{cardProps.ratingNum}}</span>\n    <sub class=\"user-card__sub-text\">{{cardProps.ratingWhat}}</sub>\n  </p>\n  <p\n    class=\"user-card__caption\"\n    ng-if=\"cardProps.ratingNum\"\n  >{{cardProps.ratingWhere}}</p>\n  <a\n    class=\"user-card__action lj-btn-night\"\n    ng-href=\"{{cardProps.journalUrl}}\"\n    lj-ml=\"medius.card.topUser.read\"\n  ></a>\n</div>\n\n<!-- Common Post Card -->\n<article\n  class=\"\n    post-card\n    post-card--{{cardProps.orientation}}\n    post-card--{{cardProps.size}}\n    \"\n  ng-class=\"{\n    \'post-card--image\': cardProps.hasImage && cardProps.imageUrl,\n    \'post-card--no-image\': !cardProps.imageUrl,\n    \'post-card--lead\': !cardProps.imageUrl && cardProps.lead,\n    \'post-card--wide\': cardProps.codeName === \'bigWide\',\n    \'post-card--video-card\': cardProps.isVideoCard,\n    \'post-card--photo-card\': cardProps.isPhotoCard,\n    \'post-card--repost\': cardProps.isRepost,\n    }\"\n  ng-if=\"postCard.isCommonCard()\"\n  >\n  <a class=\"post-card__link\" ng-href=\"{{cardProps.postUrl}}\" target=\"_self\"></a>\n  <div\n    class=\"post-card__image post-card__image--horizontal\"\n    style=\'background-image:url({{cardProps.imageUrl || \"\"}});\'\n    ng-if=\"cardProps.imageUrl\"\n  >\n    <a\n      class=\"post-card__wrap-link\"\n      ng-href=\"{{cardProps.postUrl}}\"\n      tabindex=\"-1\"\n      lj-likus-href-target=\"{{ cardProps.postLinkTarget }}\"\n    >\n      <img ng-src=\"{{cardProps.imageUrl}}\"/>\n    </a>\n  </div>\n  <div class=\"post-card__wrap\">\n    <header class=\"post-card__userpanel\">\n      <a\n        ng-if=\"!cardProps.multipleAuthors\"\n        class=\"post-card__userpic\"\n        ng-href=\"{{cardProps.profileUrl}}\"\n        style=\"background-image:url({{\n          cardProps.userpicUrl || postCard.statprefix + \'/img/userpics/userpic-user.png?v=15821\'\n          }});\"\n        target=\"_self\"\n        lj:user=\"{{cardProps.username}}\"\n      >\n        <img\n          ng-src=\"{{cardProps.userpicUrl || postCard.statprefix + \'/img/userpics/userpic-user.png?v=15821\'}}\"\n          alt=\"{{cardProps.username}}\"\n        />\n      </a>\n      <div class=\"post-card__userinfo\">\n        <a\n          ng-if=\"!cardProps.multipleAuthors\"\n          class=\"post-card__username lj-link\"\n          ng-href=\"{{cardProps.journalUrl}}\"\n          target=\"_self\"\n        >\n          {{cardProps.displayUsername || cardProps.username}}\n        </a>\n        <span\n          ng-if=\"cardProps.multipleAuthors\"\n        >\n          {{cardProps.multiauthorCaption}}\n        </span>\n\n        <span\n          class=\"post-card__repost-icon\"\n          lj-svg-icon=\"flaticon--medius-repost\"\n          ng-if=\"cardProps.isRepost\"\n          ng-mouseenter=\"cardProps.onRepostMrkMouseEnter($event)\"\n          ng-mouseleave=\"cardProps.onRepostMrkMouseLeave($event)\"\n        ></span>\n\n        <span\n          class=\"post-card__reading-time\"\n          ng-if=\"cardProps.readingTime\"\n          lj-ml=\"main2018.card.minutes_to_read\"\n          lj-ml-resolve=\"{ minuteCount: cardProps.readingTime }\"\n        ></span>\n      </div>\n    </header>\n\n    <section\n      class=\"post-card__content\"\n      ng-class=\"[\n        postCard.getCustomClassList({\n          targetByClasses: \'post-card__content\',\n        })\n      ]\"\n    >\n      <a\n        class=\"post-card__wrap-link\"\n        ng-href=\"{{cardProps.postUrl}}\"\n        target=\"{{ cardProps.postLinkTarget }}\"\n      >\n        <div\n          ng-if=\"cardProps.imageUrl && cardProps.hasImage\"\n          class=\"post-card__image post-card__image--vertical\"\n          style=\"background-image:url({{cardProps.imageUrl || \'\'}})\"\n        >\n          <img ng-src=\"{{cardProps.imageUrl}}\"/>\n        </div>\n        <h3\n          class=\"post-card__title\"\n          ng-bind-html=\"\n            cardProps.imageUrl && cardProps.orientation === \'vertical\'\n            ? postCard.trustedCutEllipsize(cardProps.postTitle, 60)\n            : postCard.trustedCutEllipsize(cardProps.postTitle, 90)\n          \"\n        >\n        </h3>\n        <p\n          class=\"post-card__lead post-card__lead--vertical\"\n          ng-bind-html=\"\n            cardProps.imageUrl\n            ? postCard.trustedCutEllipsize(cardProps.lead, 100)\n            : postCard.trustedCutEllipsize(cardProps.lead, 200)\n          \">\n        </p>\n        <p\n          class=\"post-card__lead post-card__lead--horizontal\"\n          ng-if=\"!cardProps.imageUrl\"\n          ng-bind-html=\"postCard.trustedCutEllipsize(cardProps.lead, 184)\"\n        >\n        </p>\n        <p\n          class=\"post-card__lead post-card__lead--big\"\n          ng-bind-html=\"\n            cardProps.imageUrl\n            ? postCard.trustedCutEllipsize(cardProps.lead, 250)\n            : postCard.trustedCutEllipsize(cardProps.lead, 400)\n          \"\n        ></p>\n      </a>\n    </section>\n\n    <footer class=\"post-card__footer\">\n      <ul class=\"card-actions\">\n        <li\n          class=\"card-actions__item card-actions__item--like\"\n          lj-likus\n          lj-likus-no-actions=\"true\"\n          lj-likus-medius=\"true\"\n          lj-likus-journal=\"{{ postCard.getLikusJournalID() }}\"\n          lj-likus-item=\"{{ postCard.getLikusPostID() }}\"\n          lj-likus-token=\"{{cardProps.likeToken}}\"\n          lj-likus-count=\"{{cardProps.likeCount}}\"\n          lj-likus-href=\"{{cardProps.postUrl}}\"\n          lj-likus-link-target=\"{{ cardProps.postLinkTarget }}\"\n          >\n        </li>\n        <li class=\"card-actions__item card-actions__item--reply\">\n          <a\n            class=\"card-actions__link\"\n            href=\"{{cardProps.postUrl}}\"\n            target=\"{{ cardProps.postLinkTarget }}\"\n          >\n            <span class=\"card-actions__icon\" lj-svg-icon=\"flaticon--medius-comments\"></span>\n            <span class=\"card-actions__count\" ng-if=\"cardProps.replyCount && cardProps.replyCount !== \'0\'\">{{cardProps.replyCount}}</span>\n          </a>\n        </li>\n        <li class=\"card-actions__item card-actions__item--repost\">\n          <a\n            class=\"card-actions__link\"\n            href=\"{{cardProps.postUrl}}\"\n            target=\"{{ cardProps.postLinkTarget }}\"\n          >\n            <span class=\"card-actions__icon\" lj-svg-icon=\"flaticon--medius-reposts\"></span>\n            <span class=\"card-actions__count\" ng-if=\"cardProps.repostCount && cardProps.repostCount !== \'0\'\">{{cardProps.repostCount}}</span>\n          </a>\n        </li>\n        <li class=\"card-actions__item card-actions__item--rating\" ng-if=\"cardProps.ratingPosition\">\n          <span class=\"card-actions__icon\" lj-svg-icon=\"flaticon--crown\"></span>\n          <span class=\"card-actions__count\">{{cardProps.ratingPosition}}</span>\n        </li>\n      </ul>\n      <a\n        class=\"card-sticker\"\n        ng-if=\"!!cardProps.stickerCatName\"\n        ng-href=\"{{cardProps.stickerCatURL}}\"\n        target=\"_self\"\n      >\n        <span class=\"card-sticker__name\">{{ cardProps.stickerCatName }}</span>\n        <span class=\"card-sticker__label\" lj-svg-icon=\"flaticon--tag\"></span>\n      </a>\n    </footer>\n  </div>\n</article>\n\n<!-- Collection Card -->\n<article\n  ng-if=\"cardProps.type === \'collection\'\"\n  class=\"\n    post-card\n    post-card--{{cardProps.type}}\n    \"\n  >\n  <div class=\"post-card__wrap\">\n    <section class=\"post-card__content\">\n      <a class=\"post-card__wrap-link\" ng-href=\"{{cardProps.postUrl}}\">\n        <div class=\"post-card__image\" style=\'background-image:url({{cardProps.imageUrl || \"\"}});\'>\n          <img ng-src=\"{{cardProps.imageUrl}}\"/>\n        </div>\n        <h3 class=\"post-card__title\">{{postCard.trustedCutEllipsize(cardProps.postTitle, 60)}}</h3>\n      </a>\n    </section>\n  </div>\n</article>\n\n<!-- Promo Card -->\n<div class=\"in-banner\" ng-if=\"cardProps.slotIsEmpty && cardProps.promoType === \'commpromo\'\">\n    <div class=\"in-banner__figure\" lj-svg-icon=\"flaticon--lj-2\"></div>\n    <p class=\"in-banner__caption\" lj-ml=\"medius2018.promo.comm.banner.title\"></p>\n    <a class=\"in-banner__link lj-link\" ng-href=\"{{cardProps.buyPromoHref}}\" lj-ml=\"medius2018.promo.comm.banner.action_link\"></a>\n    <span class=\"in-banner__extra\" lj-ml=\"medius2018.promo.comm.banner.extra_caption\"></span>\n</div>\n\n<div class=\"in-banner\" ng-if=\"cardProps.slotIsEmpty && cardProps.promoType === \'selfpromo\'\">\n  <div class=\"in-banner__figure\" lj-svg-icon=\"flaticon--lj-2\"></div>\n  <p class=\"in-banner__caption\" lj-ml=\"medius2018.promo.self.banner.title\"></p>\n  <a class=\"in-banner__link lj-link\" ng-href=\"{{cardProps.buyPromoHref}}\" lj-ml=\"medius2018.promo.self.banner.action_link\"></a>\n  <span class=\"in-banner__extra\" lj-ml=\"medius2018.promo.self.banner.extra_caption\"></span>\n</div>\n\n<article\n  ng-if=\"cardProps.type === \'promo\' && !cardProps.slotIsEmpty\"\n  class=\"\n    post-card\n    post-card--{{cardProps.promoType}}\n    \"\n  >\n  <a class=\"post-card__link\" ng-href=\"{{cardProps.postUrl}}\" target=\"_self\"></a>\n  <div\n    class=\"post-card__wrap\"\n  >\n    <header class=\"post-card__userpanel\">\n      <a\n        class=\"post-card__userpic\"\n        ng-href=\"{{cardProps.profileUrl}}\"\n        style=\"background-image:url({{\n          cardProps.userpicUrl || postCard.statprefix + \'/img/userpics/userpic-user.png?v=15821\'\n          }});\"\n        lj:user=\"{{cardProps.username}}\"\n        >\n        <img\n          ng-src=\"{{cardProps.userpicUrl || postCard.statprefix + \'/img/userpics/userpic-user.png?v=15821\'}}\"\n          alt=\"{{cardProps.username}}\"\n        />\n      </a>\n      <div class=\"post-card__userinfo\">\n        <a class=\"post-card__username lj-link\" ng-href=\"{{cardProps.journalUrl}}\">\n          {{cardProps.username}}\n        </a>\n        <span\n          class=\"post-card__time-left\"\n          ng-if=\"cardProps.promoType === \'selfpromo\'\"\n        >{{ cardProps.ml.timeLeft }}</span>\n        <span\n          class=\"post-card__reading-time\"\n          ng-if=\"cardProps.promoType === \'commpromo\'\"\n          lj-ml=\"main2018.card.minutes_to_read\"\n          lj-ml-resolve=\"{ minuteCount: cardProps.readingTime }\"\n        ></span>\n      </div>\n    </header>\n    <section class=\"post-card__content\">\n      <a\n        class=\"post-card__wrap-link\"\n        ng-href=\"{{cardProps.postUrl}}\"\n      >\n        <h3 class=\"post-card__title\" ng-bind-html=\"postCard.trustedCutEllipsize(cardProps.postTitle, 60)\"></h3>\n      </a>\n    </section>\n    <footer class=\"post-card__footer\">\n      <ul class=\"card-actions\">\n        <li\n          class=\"card-actions__item card-actions__item--like\"\n          lj-likus\n          lj-likus-no-actions=\"true\"\n          lj-likus-medius=\"true\"\n          lj-likus-journal=\"{{ postCard.getLikusJournalID() }}\"\n          lj-likus-item=\"{{ postCard.getLikusPostID() }}\"\n          lj-likus-token=\"{{cardProps.likeToken}}\"\n          lj-likus-count=\"{{cardProps.likeCount}}\"\n          lj-likus-href=\"{{cardProps.postUrl}}\"\n          >\n        </li>\n        <li class=\"card-actions__item card-actions__item--reply\">\n          <a class=\"card-actions__link\" href=\"{{cardProps.postUrl}}\">\n            <span class=\"card-actions__icon\" lj-svg-icon=\"flaticon--medius-comments\"></span>\n            <span class=\"card-actions__count\" ng-if=\"cardProps.replyCount && cardProps.replyCount !== \'0\'\">{{cardProps.replyCount}}</span>\n          </a>\n        </li>\n        <li class=\"card-actions__item card-actions__item--repost\" ng-if=\"cardProps.repostCount && cardProps.repostCount !== \'0\'\">\n          <a class=\"card-actions__link\" href=\"{{cardProps.postUrl}}\">\n            <span class=\"card-actions__icon\" lj-svg-icon=\"flaticon--medius-reposts\"></span>\n            <span class=\"card-actions__count\">{{cardProps.repostCount}}</span>\n          </a>\n        </li>\n        <li class=\"card-actions__item card-actions__item--rating\" ng-if=\"cardProps.ratingPosition\">\n          <a class=\"card-actions__link\" href=\"{{cardProps.postUrl}}\">\n            <span class=\"card-actions__icon\" lj-svg-icon=\"flaticon--crown\"></span>\n            <span class=\"card-actions__count\">{{cardProps.ratingPosition}}</span>\n          </a>\n        </li>\n        <li class=\"card-actions__item card-actions__item--float\">\n          <a\n            class=\"card-actions__label card-actions__label--{{cardProps.promoType}}\"\n            ng-href=\'{{cardProps.buyPromoHref}}\'\n            lj-ml=\"medius2018.promo\"\n          ></a>\n        </li>\n        <li class=\"card-actions__item card-actions__item--link\">\n          <a\n            class=\"card-extra__link lj-link\"\n            ng-href=\'{{cardProps.buyPromoHref}}\'\n            lj-ml=\"medius2018.promo.buy_promo\"\n          ></a>\n        </li>\n      </ul>\n    </footer>\n  </div>\n</article>\n\n<!-- Image Preview (for video) Card -->\n<article\n  ng-if=\"cardProps.type === \'img-preview-video\'\"\n  class=\"post-card post-card--{{cardProps.type}}\"\n  >\n  <div class=\"post-card__wrap\">\n    <section class=\"post-card__content\">\n      <div class=\"post-card__image\" style=\"background-image:url({{cardProps.imageUrl || \'\'}});\">\n        <img ng-src=\"{{cardProps.imageUrl}}\"/>\n      </div>\n      <div class=\"post-card__wrap\">\n        <a class=\"post-card__wrap-link\"  ng-href=\"{{cardProps.postUrl}}\">\n          <span class=\"post-card__icon\" lj-svg-icon=\"flaticon--arrow-right-solid\"></span>\n          <h3 class=\"post-card__title\">{{cardProps.postTitle}}</h3>\n        </a>\n      </div>\n    </section>\n  </div>\n</article>\n\n<!-- Video Player Card -->\n<div\n  class=\"post-card post-card--{{cardProps.type}}\"\n  ng-if=\"cardProps.type === \'video-player\'\"\n  ng-click=\"cardProps.handleWrapLinkClick($event)\"\n  >\n  <div class=\"post-card__content\" ng-if=\"cardProps.mode === \'placeholder\'\">\n    <div class=\"post-card__image\" style=\'background-image:url({{cardProps.imageUrl || \"\"}});\'>\n      <img ng-src=\"{{cardProps.imageUrl}}\"/>\n    </div>\n    <div class=\"post-card__wrap\">\n      <a class=\"post-card__wrap-link\"  ng-href=\"{{cardProps.postUrl}}\">\n        <span class=\"post-card__icon\" lj-svg-icon=\"flaticon--arrow-right-solid\"></span>\n        <h3 class=\"post-card__title\">{{cardProps.postTitle}}</h3>\n      </a>\n      <span class=\"post-card__duration\">{{ cardProps.videoDuration }}</span>\n    </div>\n  </div>\n  <iframe\n    class=\"post-card__player\"\n    ng-show=\"cardProps.mode === \'player\'\"\n    ng-src=\"{{ cardProps.ngTrustedVideoURL }}\"\n    lj-ng-onload=\"cardProps.handleIframeLoad(event)\"\n  />\n</div>\n\n<!-- Photo Card (for a Photo Post) -->\n<div\n  class=\"post-card post-card--{{cardProps.type}}\"\n  ng-if=\"cardProps.type === \'photo\'\"\n  ng-click=\"cardProps.handleWrapLinkClick($event)\"\n  >\n  <div class=\"post-card__wrap\">\n    <section class=\"post-card__content\">\n      <a class=\"post-card__wrap-link\" ng-href=\"{{cardProps.postUrl}}\" tabindex=\"-1\">\n        <div class=\"post-card__image\" style=\"background-image:url({{cardProps.imageUrl || \'\'}});\">\n          <img ng-src=\"{{cardProps.imageUrl}}\"/>\n        </div>\n      </a>\n    </section>\n  </div>\n</div>\n\n';
! function(t) {
    return t
}(),
function() {
    "use strict";

    function t(t, r) {
        var e = this;
        e.statprefix = LJ.get("statprefix"), e.isCommonCard = function() {
            return t.cardProps && (!t.cardProps.type || "common" === t.cardProps.type)
        }, e.isTopUserCard = function() {
            return t.cardProps && "topUser" === t.cardProps.type
        }, e.getSubscribeHref = function() {
            var r = t.cardProps && t.cardProps.username;
            return "/subscribers/add?instant_relation=1&user=" + r
        }, e.cutEllipsize = function(t, r) {
            if (!t) return null;
            if (t.length < r) return t;
            var e = t.replace(/(…|\.\.\.)$/, "").slice(0, r);
            return " " !== t[r - 1] && " " !== t[r] && (e = e.split(" ").slice(0, -1).join(" ")), e = e.replace(/\.+$/, ""), e + "..."
        }, e.asSCETrustedHTML = function(t) {
            return r.trustAsHtml(t)
        }, e.trustedCutEllipsize = function(t, r) {
            return e.asSCETrustedHTML(e.cutEllipsize(t, r))
        }, e.getCustomClassList = function() {
            var r = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                e = [],
                n = t.cardProps;
            return "post-card__content" === r.targetByClasses && ((!n.imageUrl && "vertical" === n.orientation && n.postTitle.length < 35 || !n.imageUrl && "horizontal" === n.orientation && n.postTitle.length < 35) && e.push("post-card__content--size-l"), (!n.imageUrl && "vertical" === n.orientation && n.postTitle.length > 35 && n.postTitle.length < 70 || !n.imageUrl && "horizontal" === n.orientation && n.postTitle.length > 35 && n.postTitle.length < 70) && e.push("post-card__content--size-m"), (!n.imageUrl && "vertical" === n.orientation && n.postTitle.length > 70 && n.postTitle.length < 100 || !n.imageUrl && "horizontal" === n.orientation && n.postTitle.length > 70 && n.postTitle.length < 100) && e.push("post-card__content--size-s")), e.join(" ")
        }, e.getLikusPostID = function() {
            var r = t.cardProps;
            return e.allowLikeServerCalls() ? r.postID : null
        }, e.getLikusJournalID = function() {
            var r = t.cardProps;
            return e.allowLikeServerCalls() ? r.journalID : null
        }, e.allowLikeServerCalls = function() {
            var r = t.cardProps;
            return angular.isUndefined(r.allowLikeServerCalls) ? !0 : !!r.allowLikeServerCalls
        }
    }

    function r() {
        return {
            scope: {
                cardProps: "<ngljPostCard"
            },
            controllerAs: "postCard",
            controller: t,
            templateUrl: "NGLJPostCard.ng.tmpl"
        }
    }
    t.$inject = ["$scope", "$sce"];
    var e = ["LJ.Likus", "LJ.Directives", "Medius.TimeAgo"];
    angular.module("LJ.Components.PostCard", e).directive("ngljPostCard", r).controller("postCardCtrl", t)
}();
/* <<< file end: js/core/angular/components/postCard.js */

//# map link was there [postCard.js.map]
/* >>> file start: js/widgets/angular/mediusFooter.js */
! function() {
    function t() {
        function t() {
            u.list = angular.element(s), a = u.list.children().length
        }

        function e() {
            r() || (c++, i(-1 * u.columnWidth))
        }

        function n() {
            o() || (c--, i(u.columnWidth))
        }

        function i(t) {
            var e = u.list.css("marginLeft");
            e = Number(e.toString().match(/(-?\d+)/)[1]), u.list.animate({
                marginLeft: e + t
            }, 300)
        }

        function r() {
            return c === a - 2
        }

        function o() {
            return !c
        }
        var u = this,
            l = ".stories__categories-column",
            a = 0,
            c = 0,
            s = ".stories__categories-list";
        u.next = e, u.prev = n, u.disableNext = r, u.disablePrev = o, Object.defineProperty(u, "columnWidth", {
            get: function() {
                return angular.element(l).width()
            }
        }), t()
    }
    angular.module("Medius.Footer", []), angular.module("Medius.Footer").controller("MediusFooterCategoriesCtrl", t)
}();
/* <<< file end: js/widgets/angular/mediusFooter.js */

//# map link was there [mediusFooter.js.map]
/* >>> file start: js/widgets/angular/mediusMaybeInteresting.js */
! function() {
    function t() {
        function t() {
            u.list = angular.element(s), u.list.fullHeight = u.list.height()
        }

        function n() {
            l() || r("next")
        }

        function e() {
            i() || r()
        }

        function r() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? "prev" : arguments[0];
            "next" === t ? u.current++ : u.current--, u.list.css({
                marginLeft: -300 * u.current
            })
        }

        function i() {
            return u.current <= 0
        }

        function l() {
            return u.current >= u.list.children().length
        }
        var u = this,
            s = ".stories__interesting-list";
        u.disablePrev = i, u.disableNext = l, u.next = n, u.prev = e, u.list = null, u.current = 0, u.itemWidth = 300, t()
    }
    angular.module("Medius.maybeInteresting", []), angular.module("Medius.maybeInteresting").controller("maybeInterestingCtrl", t)
}();
/* <<< file end: js/widgets/angular/mediusMaybeInteresting.js */

//# map link was there [mediusMaybeInteresting.js.map]
/* >>> file start: js/widgets/angular/mediusCardPager.js */
! function() {
    "use strict";

    function e() {
        function e(e, r, n, t) {
            var i = "[medius-card-pager-next]",
                l = "[medius-card-pager-list]",
                a = "medius-card-pager-disable-arrow-class",
                s = "[medius-card-pager-prev]";
            t.list = r.find(l), t.nextEl = r.find(i), t.prevEl = r.find(s), t.nextEl.on("click", t.next), t.prevEl.on("click", t.prev), t.arrowDisableClass = t.nextEl.attr(a) || t.prevEl.attr(a), t.init()
        }
        return {
            scope: !0,
            restrict: "AE",
            controller: "mediusCardPagerCtrl",
            controllerAs: "pager",
            link: e
        }
    }

    function r(e, r, n) {
        function t(e, r) {
            e && e.toggleClass(C.arrowDisableClass, !!r)
        }

        function i() {
            c = C.list.children().outerWidth(), v = C.list.width(), p = C.list.children().length, g = c * p, e.$watch(u, t.bind(null, C.nextEl)), e.$watch(d, t.bind(null, C.prevEl))
        }

        function l() {
            if (f || u()) return void t(C.nextEl, u());
            if (!(v >= g)) {
                var e = g - v + h;
                if (e > v) {
                    var r = 2 * c;
                    E.push(r), h -= r
                } else E.push(e), h -= e;
                o(h)
            }
        }

        function a() {
            f = !1, t(C.nextEl, u()), t(C.prevEl, d())
        }

        function s() {
            if (f || d()) return void t(C.prevEl, d());
            var e = E.pop();
            h += e, o(h)
        }

        function u() {
            var e = void 0,
                n = C.list.children();
            return w >= n.length ? !0 : (e = n.last(), e.length ? e.offset().left + c <= r.innerWidth : !0)
        }

        function d() {
            return !E.length
        }

        function o(e) {
            f = !0, C.list.css({
                marginLeft: e
            }), n(a, m), n(a, 2 * m)
        }
        var c = 0,
            f = !1,
            p = 0,
            g = 0,
            v = 0,
            h = 0,
            E = [],
            m = 800,
            w = 0,
            C = this;
        C.init = i, C.next = l, C.prev = s, jQuery(window).resize(LJ.Function.debounce(function() {
            v = C.list.parent().width(), a()
        }, 400))
    }
    r.$inject = ["$scope", "$window", "$timeout"], angular.module("Medius.CardPager", []), angular.module("Medius.CardPager").controller("mediusCardPagerCtrl", r).directive("mediusCardPager", e)
}();
/* <<< file end: js/widgets/angular/mediusCardPager.js */

//# map link was there [mediusCardPager.js.map]
/* >>> file start: js/widgets/angular/mediusSubscribe.js */
//!= require js/core/angular/messages.js
//= require_ml medius.subscribe.banner.title
//= require_ml medius.subscribe.banner.text
//= require_ml medius.subscribe.button.text
//= require_ml medius.subscribe.subscribed
//= require_ml medius.footer.newsletter
//= require_ml medius.main.subscription.text
//= require_ml medius.main.subscription.success
//= require_ml medius.main.subscription
//= require_ml schemius.medius.subscribe
//= require_ml schemius.medius.subscribetonews
//= require_ml schemius.medius.dailynewsletter
//= require_ml schemius.medius.youremail
//= require_ml schemius.medius.subscribed
//= require_ml schemius.medius.unsubscribe
Site.page.template['Widgets/Medius/subscribe.tmpl'] = '<!-- if subscribed -->\n\n<div class=\"subscription\">\n    <h4 class=\"mdsfooter-section__title\" lj-ml=\"medius.footer.newsletter\"></h4>\n    <header class=\"subscription__header\">\n        <h2 lj-ml=\"medius.subscribe.banner.title\" class=\"subscription__title\"></h2>\n        <p lj-ml=\"medius.subscribe.banner.text\" class=\"subscription__title subscription--subtitle\"></p>\n    </header>\n    <form class=\"subscription__aside\">\n        <button ng-click=\"subscribe.do($event)\" lj-ml=\"medius.subscribe.button.text\" class=\"flatbutton flatbutton--small\"></button>\n    </form>\n</div>\n';
Site.page.template['Widgets/Medius/subscribe137.tmpl'] = '<!-- if subscribed -->\n\n<div \n    class=\"stories__subscription-main story story--size-10by05\"\n    ng-class=\"{\n      \'stories__subscription-main--subscribed\': subscribe.subscribed,\n      \'stories__subscription-main--hide\': subscribe.hide\n    }\"\n    >\n    <div class=\"stories__subscription-main-inner\">\n        <span\n            class=\"stories__subscription-main-text\"\n            lj-ml=\"medius.main.subscription.text\"\n            >\n        </span>\n        <span\n            class=\"stories__subscription-main-success\"\n            lj-ml=\"medius.main.subscription.success\"\n            >\n        </span>\n        <button\n            class=\"flatbutton\"\n            lj-ml=\"medius.main.subscription\"\n            ng-click=\"subscribe.do($event)\" \n            >\n        </button>\n    </div>\n</div>\n';
Site.page.template['Widgets/Medius/schemius_header_subscribe.tmpl'] = '<header\n    class=\"\n        s-header-menu-head\n        s-header-menu-subscription__head\n        \"\n    >\n    <span\n        class=\"s-header-menu-head__title\"\n        ><!--\n        --><span\n            class=\"s-header-menu-head__title--long\"\n            lj-ml=\"schemius.medius.subscribetonews\"\n            ></span><!--\n        --><span\n            class=\"s-header-menu-head__title--short\"\n            lj-ml=\"schemius.medius.dailynewsletter\"\n            ></span><!--\n    --></span>\n</header>\n\n<div\n    class=\"s-header-menu-subscription__body\"\n    >\n\n    <div\n        class=\"\n            s-header-menu-subscription__unsubscribed\n            s-header-menu-subscription-unsubscribed\n            \"\n        >\n        <button\n            type=\"submit\"\n            class=\"s-header-menu-subscription-unsubscribed__button\"\n            ng-click=\"subscribe.do($event)\"\n            lj-ml=\"schemius.medius.subscribe\"\n            ></button>\n    </div>\n\n    <div\n        class=\"\n            s-header-menu-subscription__subscribed\n            s-header-menu-subscription-subscribed\n            \"\n        >\n        <span\n            class=\"s-header-menu-subscription-subscribed__icon\"\n            lj-svg-icon=\"flaticon--check\"\n            ></span>\n        <h3\n            class=\"s-header-menu-subscription-subscribed__title\"\n            lj-ml=\"schemius.medius.subscribed\"\n            ></h3>\n    </div>\n</div>\n';
! function() {
    "use strict";

    function e(e, i) {
        function s(i) {
            return LJ.get("is_subscribed") ? void 0 : LJ.get("remote") ? e.call("discovery.subscribe", null, {
                silent: !0
            }).then(r.hideWidget)["catch"](t) : LJ.Util.Action.login(i)
        }

        function t(e) {
            var s = e.message;
            "Access Denied" === s ? LJ.Util.Action.login() : i.add({
                type: "error",
                body: s
            })
        }
        var r = this;
        r["do"] = s
    }

    function i() {
        function e(e, i, s, t) {
            var r = LJ.get("is_subscribed");
            return t.widget = i, t.hideWidget = function(e) {
                var i = e.status;
                "OK" === i && t.widget.addClass("stories__subscription--hidden")
            }, r || angular.isUndefined(r) ? t.hideWidget({
                status: "OK"
            }) : void 0
        }
        return {
            restrict: "AE",
            templateUrl: "subscribe.tmpl",
            controller: "mediusSubscribeCtrl",
            controllerAs: "subscribe",
            link: e
        }
    }

    function s(e) {
        function i(i, s, t, r) {
            var u = LJ.get("is_subscribed");
            return r.widget = s, r.hideWidget = function(i) {
                var s = i.status;
                "OK" === s && (r.subscribed = !0, e(function() {
                    r.hide = !0
                }, 3e3))
            }, u || angular.isUndefined(u) ? r.hideWidget({
                status: "OK"
            }) : void 0
        }
        return {
            restrict: "AE",
            templateUrl: "subscribe137.tmpl",
            controller: "mediusSubscribeCtrl",
            controllerAs: "subscribe",
            link: i
        }
    }

    function t(e) {
        function i(e, i, s, t) {
            t.widget = i, t.subscribed = LJ.get("is_subscribed"), t.hideWidget = function(e) {
                var i = e.status;
                "OK" === i && (t.subscribed = !0)
            }
        }
        return {
            restrict: "AE",
            templateUrl: "schemius_header_subscribe.tmpl",
            controller: "mediusSubscribeCtrl",
            controllerAs: "subscribe",
            link: i
        }
    }
    e.$inject = ["Api", "Messages"], s.$inject = ["$timeout"], t.$inject = ["$timeout"], angular.module("Medius.Subscribe", ["LJ.Messages", "LJ.Api"]), angular.module("Medius.Subscribe").controller("mediusSubscribeCtrl", e).directive("mediusSubscribe", i).directive("mediusSubscribe137", s).directive("mediusSchemiusHeaderSubscribe", t), LJ.Flags.isEnabled("medius_schemius") && angular.element(window.document).ready(function() {
        angular.bootstrap(".s-header-menu-subscription", ["Medius.Subscribe"])
    })
}();
/* <<< file end: js/widgets/angular/mediusSubscribe.js */

//# map link was there [mediusSubscribe.js.map]
/* >>> file start: js/medius/recommended.js */
//= require js/core/angular/bubble.js
//= require js/core/angular/api.js
Site.page.template['angular/ljTimesRecommendedBubble.ng.tmpl'] = '<div\n  class=\'b-popup b-popup-recomended js--recommendBubble\'\n  ng-show=\'recommendBubble.shown\'\n>\n  <i class=\"i-popup-close\" ng-click=\'recommendBubble.shown = false\'></i>\n  <div class=\'b-discoverytimes-popup__wrapper\'>\n    <div class=\'b-discoverytimes-popup__content\'></div>\n  </div>\n  <i class=\"i-popup-arr i-popup-arrbr\">\n    <i class=\"i-popup-arr-brdr-outer\">\n      <i class=\"i-popup-arr-brdr-inner\">\n        <i class=\"i-popup-arr-bg\"></i>\n      </i>\n    </i>\n  </i>\n</div>';
Site.page.template['angular/mediusRecommended.ng.tmpl'] = '<div\n    class=\"sendnews\"\n    ng-controller=\"RecommendedCtrl as recommended\"\n    ng-class=\"{\'sendnews--loading svgpreloader-pseudo svgpreloader-16\': recommended.currentState === recommended.states.loading}\"\n    >\n    <div\n        ng-if=\"recommended.currentState !== recommended.states.success\"\n        >\n        <div\n            class=\"message-unit message-unit--error message-unit--small\"\n            ng-if=\"recommended.currentState === recommended.states.error\"\n            >\n            <div\n                class=\"message-unit__text\"\n                >\n                <div lj-ml=\"medius.recommended.has.errors\"></div>\n                <span ng-repeat=\"error in recommended.errors\">{{error}}</span>\n            </div>\n        </div>\n        <div class=\"form__field sendnews--field\">\n            <label\n                class=\"sendnews__label form__label\"\n                lj-ml=\"medius.recommended.label.category\"\n                ></label>\n            <div class=\"sendnews__input-wrapper\">\n                <select\n                    ng-options=\"category as category.name for category in recommended.categories track by category.id\"\n                    ng-model=\"recommended.selectedCategory\"\n                    class=\"sendnews__select sharp-select\"\n                    ></select>\n            </div>\n        </div>\n        <div class=\"form__field sendnews--field\">\n            <label\n                class=\"sendnews__label form__label\"\n                lj-ml=\"medius.recommended.label.link\"\n                ></label>\n            <div class=\"sendnews__input-wrapper\">\n                <input\n                    class=\"inputus inputus--small inputus--max\"\n                    ng-class=\"{\'inputus--error\': recommended.fieldErrors.link}\"\n                    type=\"text\"\n                    name=\"link\"\n                    ng-model=\"recommended.link\"\n                    >\n            </div>\n        </div>\n\n        <div class=\"form__field\">\n            <div\n                class=\"sendnews__label form__label\"\n                lj-ml=\"medius.recommended.label.message\"\n                lj-ml-resolve=\"{ left: recommended.messageLength - recommended.message.length }\"\n                lj-ml-dynamic=\"recommended.messageLength - recommended.message.length\"\n                ></div>\n            <textarea\n                class=\"sendnews__textarea inputus inputus--small inputus--max\"\n                ng-class=\"{\'inputus--error\': recommended.fieldErrors.message}\"\n                maxlength=\"200\"\n                name=\"message\"\n                ng-model=\"recommended.message\"\n                ></textarea>\n        </div>\n        <div class=\"form__field\">\n            <button\n                class=\"flatbutton flatbutton--small flatbutton--max\"\n                type=\"submit\"\n                ng-click=\"recommended.send()\"\n                ng-disabled=\"!recommended.canSend()\"\n                lj-ml=\"medius.recommended.button.send\"\n                ></button>\n        </div>\n    </div>\n    <div\n        class=\"sendnews__succes message-unit message-unit--success\"\n        ng-if=\"recommended.currentState === recommended.states.success\"\n        >\n        <div class=\"message-unit__text\" lj-ml=\"medius.recommended.success\"></div>\n    </div>\n\n</div>\n';
//= require_ml medius.recommended.has.errors
//= require_ml medius.recommended.success
//= require_ml medius.recommended.label.category
//= require_ml medius.recommended.label.link
//= require_ml medius.recommended.label.message
//= require_ml medius.recommended.button.send
! function(e) {
    return e
}(),
function() {
    "use strict";

    function e(e, n, t, o) {
        function r() {
            l.currentState = l.states.success, a = n(function() {
                t.close("recommended"), i();
                var n = e.afterRecommendSendCb;
                angular.isFunction(n) && n({
                    success: !0
                })
            }, u)
        }

        function s(e) {
            l.currentState = l.states.error, e.data.forEach(function(e) {
                switch (l.errors.push(e.message), e.field) {
                    case "cat_post_id":
                        l.fieldErrors.category = !0;
                        break;
                    case "entry_url":
                        l.fieldErrors.link = !0;
                        break;
                    case "message":
                        l.fieldErrors.message = !0
                }
            })
        }

        function c() {
            l.fieldErrors = {
                category: !1,
                link: !1,
                message: !1
            }
        }

        function i() {
            l.message = "", l.link = "", l.selectedCategory = l.categories[0], l.currentState = l.states.edit, l.errors = [], c()
        }
        var a, l = this,
            u = 3e3,
            d = {
                success: "ok",
                error: "check_error"
            };
        l.categories = (LJ.get("categories") || []).filter(function(e) {
            return !e.skip_send_news
        }), l.messageLength = 200, l.states = {
            edit: "edit",
            success: "success",
            error: "error",
            loading: "loading"
        }, i(), l.canSend = function() {
            return "" !== l.message || "" !== l.link
        }, l.send = function() {
            l.errors = [], c(), l.currentState = l.states.loading, o.call("medius.recommend", {
                cat_post_id: l.selectedCategory.id,
                entry_url: l.link,
                message: l.message
            }, {
                silent: !0
            }).then(function(e) {
                e.status === d.success ? r() : e.status === d.error && s(e)
            }, function(e) {
                l.errors.push(e.message), l.currentState = l.states.error
            })
        }, e.$on("bubble:close:recommended", function() {
            a && (n.cancel(a), a = null), i()
        })
    }

    function n(e, n, t, o, r) {
        function s(s, c, i) {
            if (LJ.get("remote")) {
                if (i.ljTimesMode) {
                    s.recommendBubble = {
                        shown: !1
                    }, s.afterRecommendSendCb = function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                        e.success && (s.recommendBubble.shown = !1)
                    };
                    var a = angular.element(t.get("ljTimesRecommendedBubble.ng.tmpl")),
                        l = angular.element(t.get("mediusRecommended.ng.tmpl"));
                    return a.append(l), c.before(a), n(a)(s), c.click(function(e) {
                        e.preventDefault(), e.stopPropagation(), r(function() {
                            s.recommendBubble.shown = !s.recommendBubble.shown
                        })
                    }), void o.on("click", function(e) {
                        e.target.closest(".js--recommendBubble") || r(function() {
                            s.recommendBubble.shown = !1
                        })
                    })
                }
                var u, d = LJ.Support.isMobile() || !!~navigator.userAgent.toLowerCase().indexOf("android"),
                    m = "recommended",
                    f = angular.element(window),
                    g = c.closest("ul"),
                    b = function() {
                        g.scrollLeft(1280)
                    };
                e.register({
                    name: m,
                    template: "mediusRecommended.ng.tmpl",
                    recalculateOnScroll: !d,
                    alwaysBottom: !0,
                    alwaysLeft: !0,
                    disableResizeListener: d,
                    recalculateOnOrientationChange: d
                }), c.click(function(n) {
                    if (n.preventDefault(), b(), e.open(m, {
                            alwaysLeft: !0
                        }, c), f.on("orientationchange", b), d) {
                        u = f.scrollTop();
                        var t = s.$on("bubble:close:" + m, function() {
                            f.scrollTop(u), f.off("orientationchange", b), t()
                        })
                    }
                    s.$apply()
                })
            } else c.click(function(e) {
                LJ.Util.Action.login(e)
            })
        }
        return {
            link: s
        }
    }
    n.$inject = ["Bubble", "$compile", "$templateCache", "$document", "$timeout"], angular.module("Medius.Recommended", ["LJ.Templates", "LJ.Bubble", "LJ.Api"]), LJ.Flags.isEnabled("medius_schemius") && angular.element(window.document).ready(function() {
        angular.bootstrap(".s-header-menu-head-title__additional--link--sendnews", ["Medius.Recommended"])
    }), angular.module("Medius.Recommended").controller("RecommendedCtrl", e).directive("mediusRecommended", n), e.$inject = ["$scope", "$timeout", "Bubble", "Api"]
}();
/* <<< file end: js/medius/recommended.js */

//# map link was there [recommended.js.map]
/* >>> file start: js/node_modules/angular-sanitize/angular-sanitize.js */
! function(e, t) {
    "use strict";

    function n() {
        function n(e, t) {
            var n, r = {},
                i = e.split(",");
            for (n = 0; n < i.length; n++) r[t ? l(i[n]) : i[n]] = !0;
            return r
        }

        function r(t, n) {
            null === t || void 0 === t ? t = "" : "string" != typeof t && (t = "" + t), v.innerHTML = t;
            var r = 5;
            do {
                if (0 === r) throw h("uinput", "Failed to sanitize html because the input is unstable");
                r--, e.document.documentMode && g(v), t = v.innerHTML, v.innerHTML = t
            } while (t !== v.innerHTML);
            for (var i = v.firstChild; i;) {
                switch (i.nodeType) {
                    case 1:
                        n.start(i.nodeName.toLowerCase(), p(i.attributes));
                        break;
                    case 3:
                        n.chars(i.textContent)
                }
                var a;
                if (!(a = i.firstChild) && (1 == i.nodeType && n.end(i.nodeName.toLowerCase()), a = i.nextSibling, !a))
                    for (; null == a && (i = i.parentNode, i !== v);) a = i.nextSibling, 1 == i.nodeType && n.end(i.nodeName.toLowerCase());
                i = a
            }
            for (; i = v.firstChild;) v.removeChild(i)
        }

        function p(e) {
            for (var t = {}, n = 0, r = e.length; r > n; n++) {
                var i = e[n];
                t[i.name] = i.value
            }
            return t
        }

        function f(e) {
            return e.replace(/&/g, "&amp;").replace(y, function(e) {
                var t = e.charCodeAt(0),
                    n = e.charCodeAt(1);
                return "&#" + (1024 * (t - 55296) + (n - 56320) + 65536) + ";"
            }).replace(k, function(e) {
                return "&#" + e.charCodeAt(0) + ";"
            }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function m(e, t) {
            var n = !1,
                r = i(e, e.push);
            return {
                start: function(e, i) {
                    e = l(e), !n && D[e] && (n = e), n || $[e] !== !0 || (r("<"), r(e), o(i, function(n, i) {
                        var a = l(i),
                            o = "img" === e && "src" === a || "background" === a;
                        M[a] !== !0 || N[a] === !0 && !t(n, o) || (r(" "), r(i), r('="'), r(f(n)), r('"'))
                    }), r(">"))
                },
                end: function(e) {
                    e = l(e), n || $[e] !== !0 || x[e] === !0 || (r("</"), r(e), r(">")), e == n && (n = !1)
                },
                chars: function(e) {
                    n || r(f(e))
                }
            }
        }

        function g(t) {
            if (t.nodeType === e.Node.ELEMENT_NODE)
                for (var n = t.attributes, r = 0, i = n.length; i > r; r++) {
                    var a = n[r],
                        o = a.name.toLowerCase();
                    "xmlns:ns1" !== o && 0 !== o.lastIndexOf("ns1:", 0) || (t.removeAttributeNode(a), r--, i--)
                }
            var s = t.firstChild;
            s && g(s), s = t.nextSibling, s && g(s)
        }
        var b = !1;
        this.$get = ["$$sanitizeUri", function(e) {
            return b && a($, T),
                function(t) {
                    var n = [];
                    return u(t, d(n, function(t, n) {
                        return !/^unsafe:/.test(e(t, n))
                    })), n.join("")
                }
        }], this.enableSvg = function(e) {
            return s(e) ? (b = e, this) : b
        }, i = t.bind, a = t.extend, o = t.forEach, s = t.isDefined, l = t.lowercase, c = t.noop, u = r, d = m;
        var v, y = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            k = /([^\#-~ |!])/g,
            x = n("area,br,col,hr,img,wbr"),
            w = n("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
            C = n("rp,rt"),
            E = a({}, C, w),
            z = a({}, w, n("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),
            L = a({}, C, n("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
            T = n("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),
            D = n("script,style"),
            $ = a({}, x, z, L, E),
            N = n("background,cite,href,longdesc,src,xlink:href"),
            S = n("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),
            F = n("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan", !0),
            M = a({}, N, F, S);
        ! function(e) {
            var t;
            if (!e.document || !e.document.implementation) throw h("noinert", "Can't create an inert html document");
            t = e.document.implementation.createHTMLDocument("inert");
            var n = t.documentElement || t.getDocumentElement(),
                r = n.getElementsByTagName("body");
            if (1 === r.length) v = r[0];
            else {
                var i = t.createElement("html");
                v = t.createElement("body"), i.appendChild(v), t.appendChild(i)
            }
        }(e)
    }

    function r(e) {
        var t = [],
            n = d(t, c);
        return n.chars(e), t.join("")
    }
    var i, a, o, s, l, c, u, d, h = t.$$minErr("$sanitize");
    t.module("ngSanitize", []).provider("$sanitize", n), t.module("ngSanitize").filter("linky", ["$sanitize", function(e) {
        var n = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
            i = /^mailto:/i,
            a = t.$$minErr("linky"),
            o = t.isDefined,
            s = t.isFunction,
            l = t.isObject,
            c = t.isString;
        return function(t, u, d) {
            function h(e) {
                e && y.push(r(e))
            }

            function p(e, t) {
                var n, r = b(e);
                y.push("<a ");
                for (n in r) y.push(n + '="' + r[n] + '" ');
                !o(u) || "target" in r || y.push('target="', u, '" '), y.push('href="', e.replace(/"/g, "&quot;"), '">'), h(t), y.push("</a>")
            }
            if (null == t || "" === t) return t;
            if (!c(t)) throw a("notstring", "Expected string but received: {0}", t);
            for (var f, m, g, b = s(d) ? d : l(d) ? function() {
                    return d
                } : function() {
                    return {}
                }, v = t, y = []; f = v.match(n);) m = f[0], f[2] || f[4] || (m = (f[3] ? "http://" : "mailto:") + m), g = f.index, h(v.substr(0, g)), p(m, f[0].replace(i, "")), v = v.substring(g + f[0].length);
            return h(v), e(y.join(""))
        }
    }])
}(window, window.angular);
/* <<< file end: js/node_modules/angular-sanitize/angular-sanitize.js */

//# map link was there [angular-sanitize.js.map]
/* >>> file start: js/mainPage2018/index.js */
//= require js/mainPage2018/config.js
//= require js/mainPage2018/adaptivity.js
//= require js/mainPage2018/blocks/category.js
//= require js/mainPage2018/photoBlock.js
//= require js/mainPage2018/props/index.js
//= require js/mainPage2018/props/collection.js
//= require js/mainPage2018/props/yourPicks.js
//= require js/misc/asideBannerStickA.js
//= require js/medius/utils.js
//= require js/core/util/postCards.js
//= require js/core/angular/components/colMen2018.js
//= require js/core/angular/components/postCard.js
//= require js/core/angular/common.js
//= require js/widgets/likus.js
//= require js/widgets/angular/mediusTimeAgo.js
//= require js/widgets/angular/mediusFooter.js
//= require js/widgets/angular/mediusMaybeInteresting.js
//= require js/widgets/angular/mediusCardPager.js
//= require js/widgets/angular/mediusSubscribe.js
//= require js/medius/recommended.js
//= require js/node_modules/angular-sanitize/angular-sanitize.js
//= require_ml medius.card.topUser.subscribe
//= require_ml main2018.card.minutes_to_read
//= require_ml main2018.yourFriends
//= require_ml main2018.yourChoice
//= require_ml main2018.inbanner.login.caption
//= require_ml main2018.inbanner.post.caption
//= require_ml main2018.inbanner.profaccount.caption
//= require_ml main2018.inbanner.promo.caption
//= require_ml main2018.inbanner.login.link
//= require_ml main2018.inbanner.post.link
//= require_ml main2018.inbanner.profaccount.link
//= require_ml main2018.inbanner.promo.link
Site.page.template['angular/widgets/medius/internalBanner.ng.tmpl'] = '<div\n  class=\"in-banner\"\n  ng-class=\"{\'in-banner--night\' : typeOfInternalBanner === 1}\"\n  ng-switch on=\"typeOfInternalBanner\"\n  ng-cloak\n  >\n  <div\n    class=\"in-banner__figure\"\n    lj-svg-icon=\"flaticon--lj-2\">\n  </div>\n  <p\n    class=\"in-banner__caption\"\n    ng-switch-when=\"1\"\n    lj-ml=\"main2018.inbanner.login.caption\"\n  ></p>\n  <p\n    class=\"in-banner__caption\"\n    ng-switch-when=\"2\"\n    lj-ml=\"main2018.inbanner.post.caption\"\n  ></p>\n  <p\n    class=\"in-banner__caption\"\n    ng-switch-when=\"3\"\n    lj-ml=\"main2018.inbanner.profaccount.caption\"\n  ></p>\n  <p\n    class=\"in-banner__caption\"\n    ng-switch-when=\"4\"\n    lj-ml=\"main2018.inbanner.promo.caption\"\n  ></p>\n  <a\n    class=\"in-banner__link lj-link s-nav-item-login\"\n    ng-switch-when=\"1\"\n    href=\"/login.bml\"\n    lj-ml=\"main2018.inbanner.login.link\"></a>\n  <a\n    class=\"in-banner__link lj-link\"\n    ng-switch-when=\"2\"\n    href=\"/post\"\n    lj-ml=\"main2018.inbanner.post.link\"></a>\n  <a\n    class=\"in-banner__link lj-link\"\n    ng-switch-when=\"3\"\n    href=\"/shop/profaccount.bml\"\n    lj-ml=\"main2018.inbanner.profaccount.link\"></a>\n  <a\n    class=\"in-banner__link lj-link\"\n    ng-switch-when=\"4\"\n    href=\"/shop/feedpromo/\"\n    lj-ml=\"main2018.inbanner.promo.link\"></a>\n</div>\n';
! function(e) {
    return e
}(),
function() {
    "use strict";

    function e(e, r, n, t, o, a, s, c, u, d, l, p, f, g, v) {
        var m = this;
        m.isLoggedIn = i;
        var P = {
            prefix: "adfox_vertical_first",
            recalc: function(e) {
                var r = 30,
                    n = angular.element(e),
                    t = n.offset().top + n.outerHeight() + r,
                    o = jQuery('[lj-sale-init*="adfox_100x70_1"]').offset().top,
                    i = jQuery('[lj-sale-init*="adfox_100x70_1"]').offset().top - n.height() - n.parent().offset().top - r;
                return {
                    _asideBanner: n,
                    _asideBannerLowerSide: t,
                    _asideBannerParentLowerSide: o,
                    FIXED_TOP_OFFSET: r,
                    helperTop: i
                }
            }
        };
        LJ.Util.asideBannerStickA.setup(P);
        var h = d.initProps({
                $controllerScope: e,
                window: c
            }),
            y = h.props;
        m.video = p.controller, m.blockIsShown = function(e) {
            return "yourFriends" === e ? LJ.Flags.isDisabled("your_friends_block") ? !1 : C : "yourChoice" === e ? !LJ.Flags.isDisabled("your_choice_block") : !1
        }, m.getCardProps = function(e) {
            var r = {};
            e && (r = e);
            var n = r.cardType,
                t = r.index || 0;
            if ("topUser" === n) {
                var o = y.topUser.noCat;
                return r.catID && (o = y.topUser[r.catID]), o ? o[t % o.length] : null
            }
            if ("topRating" === r.section) return (y.topRating || [])[r.index];
            var i = d.getCardProps(r);
            if (i) return i;
            var a = g.getCardProps(r);
            if (a) return a;
            if ("main" === r.section && r.slot) return y.mainBlock[r.slot];
            var s = f.getCardProps(r);
            if (s) return s;
            if ("promo" === r.type) return (y.promo || {})[r.promoType];
            var c = p.getCardProps(r);
            return c ? c : void 0
        };
        var _ = function() {
            h.propReadyPromises.topUser.noCat.then(function() {
                var r = ["main", "your-choice", "your-friends"];
                r.forEach(function(r, n) {
                    var t = angular.element('[data-block-type="' + r + '"]')[0];
                    if (t) {
                        var a = t.querySelector(".js--top-user-card-host");
                        if (a) {
                            var s = !!a.querySelector(".lj-card");
                            if (!s) {
                                var c = void 0;
                                y.topUser.noCat && y.topUser.noCat.length ? c = o('\n              <div\n                class="lj-card"\n                nglj-post-card="medius.getCardProps({cardType: \'topUser\', index: ' + n + '})"\n              ></div>\n            ')(e) : (i || LJ.Flags.isDisabled("top_user_cards")) && (c = o('\n              <div\n                class="lj-card"\n                main-internal-banner\n              ></div>\n            ')(e)), angular.element(a).empty().append(c)
                            }
                        }
                    }
                })
            });
            var r = angular.element("[data-block-type=category]"),
                n = r.map(function(e, r) {
                    return r.getAttribute("data-cat-id")
                }).toArray();
            h.propReadyPromises.topUser.perCat.then(function() {
                r.each(function(r, t) {
                    var a = n[r],
                        s = t.querySelector(".js--top-user-card-host");
                    if (s) {
                        var c = void 0,
                            u = !!s.querySelector(".lj-card");
                        u || (y.topUser[a] && y.topUser[a].length ? c = o('\n              <div\n                class="lj-card"\n                nglj-post-card="medius.getCardProps({cardType: \'topUser\', catID: ' + a + '})"\n              ></div>\n            ')(e) : (i || LJ.Flags.isDisabled("top_user_cards")) && (c = o('\n              <div\n                class="lj-card"\n                main-internal-banner\n              ></div>\n            ')(e)), angular.element(s).empty().append(c))
                    }
                })
            })
        };
        _();
        var C = !1;
        v.readyPromises.cardProps.yourFriends.then(function() {
            C = !0, s(function() {
                _()
            })
        }), n.all(Object.values(h.propReadyPromises).filter(function(e) {
            return !!e.then
        }).map(function(e) {
            return e["catch"](function() {
                return 0
            })
        })).then(function() {
            s(function() {
                l.updateLayoutCardProps({
                    cardProps: y,
                    window: c
                })
            })
        });
        var b = function() {
                s(function() {
                    l.updateLayoutCardProps({
                        cardProps: y,
                        window: c
                    })
                })
            },
            S = LJ.Function.debounce(b, 300);
        c.addEventListener("resize", S)
    }

    function r() {
        function e(e, r) {
            var n = r.find(".stories__button button"),
                t = r.find(".stories__button--all"),
                o = "stories__hide",
                i = r.find("." + o),
                a = "stories__button--hide",
                s = 0;
            n.on("click", function() {
                s < i.length && i.eq(s++).removeClass(o), s >= i.length && (n.parent().addClass(a), t.removeClass(a))
            })
        }
        return {
            link: e
        }
    }

    function n() {
        function e(e) {
            var r = Site.remote,
                n = [];
            r ? (Site.remote.number_of_posts && Site.remote.show_post_2017 || n.push(2), Site.remote.is_paid || n.push(3), Site.remote.number_of_posts && n.push(4), e.typeOfInternalBanner = n[Math.floor(Math.random() * n.length)]) : e.typeOfInternalBanner = 1
        }
        return {
            link: e,
            templateUrl: "internalBanner.ng.tmpl"
        }
    }

    function t(e) {
        function r(r) {
            var n = LJ.get("search_hints");
            n && (n.sort(function() {
                return Math.random() - .5
            }), e(function() {
                r.searchHints = n.map(function(e) {
                    return e.hint
                })
            }))
        }
        return {
            link: r
        }
    }
    e.$inject = ["$scope", "$http", "$q", "Api", "$compile", "$location", "$timeout", "$window", "$log", "mainPagePropsService", "mainPageAdaptivityService", "mainPageVideoBlockService", "mainPageCategoryBlockService", "mainPageCollectionPropsService", "mainPageYourPicksPropsService"], t.$inject = ["$timeout"];
    var o = ["LJ.Components.PostCard", "MainPage2018.Props", "MainPage2018.Props.Collection", "MainPage2018.Props.YourPicks", "MainPage2018.Adaptivity", "MainPage2018.Blocks.Photo", "LJ.Components.CollapsibleMenu2018", "Medius.Utils", "LJ.Likus", "LJ.Directives", "Medius.TimeAgo", "LJ.Sale", "Medius.maybeInteresting", "Medius.Subscribe", "Medius.CardPager", "Medius.Footer", "Medius.Recommended", "ngSanitize"];
    angular.module("LJ.MainPage2018", o).controller("MainPageCtrl", e).directive("threeCategories", r).directive("mainInternalBanner", n).directive("searchWidget", t);
    var i = !!LJ.get("remote")
}();
/* <<< file end: js/mainPage2018/index.js */

//# map link was there [index.js.map]
/* >>> file start: js/lib/jquery.selectric.min.js */
! function(e) {
    "use strict";
    var t = "selectric",
        s = "Input Items Open Disabled TempShow HideSelect Wrapper Hover Responsive Above Scroll",
        o = ".sl",
        i = {
            onChange: function(t) {
                e(t).change()
            },
            maxHeight: 300,
            keySearchTimeout: 500,
            arrowButtonMarkup: '<b class="button">&#x25be;</b>',
            disableOnMobile: !0,
            openOnHover: !1,
            expandToItemText: !1,
            responsive: !1,
            preventWindowScroll: !0,
            inheritOriginalWidth: !1,
            customClass: {
                prefix: t,
                postfixes: s,
                camelCase: !0,
                overwrite: !0
            },
            optionsItemBuilder: "{text}"
        },
        n = {
            add: function(e, t, s) {
                this[e] || (this[e] = {}), this[e][t] = s
            },
            remove: function(e, t) {
                delete this[e][t]
            }
        },
        a = {
            replaceDiacritics: function(e) {
                for (var t = "40-46 50-53 54-57 62-70 71-74 61 47 77".replace(/\d+/g, "\\3$&").split(" "), s = t.length; s--;) e = e.toLowerCase().replace(RegExp("[" + t[s] + "]", "g"), "aeiouncy".charAt(s));
                return e
            },
            format: function(e) {
                var t = arguments;
                return ("" + e).replace(/{(\d+|(\w+))}/g, function(e, s, o) {
                    return o && t[1] ? t[1][o] : t[s]
                })
            },
            nextEnabledItem: function(e, t) {
                for (; e[t = (t + 1) % e.length].disabled;);
                return t
            },
            previousEnabledItem: function(e, t) {
                for (; e[t = (t > 0 ? t : e.length) - 1].disabled;);
                return t
            },
            toDash: function(e) {
                return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
            },
            triggerCallback: function(s, o) {
                var i = o.element,
                    l = o.options["on" + s];
                e.isFunction(l) && l.call(i, i, o), n[s] && e.each(n[s], function() {
                    this.call(i, i, o)
                }), e(i).trigger(t + "-" + a.toDash(s), o)
            }
        },
        l = e(document),
        r = e(window),
        c = function(n, c) {
            function d(t) {
                if ($.options = e.extend(!0, {}, i, $.options, t), $.classes = {}, $.element = n, a.triggerCallback("BeforeInit", $), $.options.disableOnMobile && L) return void($.disableOnMobile = !0);
                C(!0);
                var o = $.options.customClass,
                    l = o.postfixes.split(" "),
                    r = R.width();
                e.each(s.split(" "), function(e, t) {
                    var s = o.prefix + l[e];
                    $.classes[t.toLowerCase()] = o.camelCase ? s : a.toDash(s)
                }), x = e("<input/>", {
                    "class": $.classes.input,
                    readonly: L
                }), k = e("<div/>", {
                    "class": $.classes.items,
                    tabindex: -1
                }), T = e("<div/>", {
                    "class": $.classes.scroll
                }), D = e("<div/>", {
                    "class": o.prefix,
                    html: $.options.arrowButtonMarkup
                }), y = e('<p class="label"/>'), I = R.wrap("<div>").parent().append(D.prepend(y), k, x), A = {
                    open: v,
                    close: g,
                    destroy: C,
                    refresh: u,
                    init: d
                }, R.on(A).wrap('<div class="' + $.classes.hideselect + '">'), e.extend($, A), $.options.inheritOriginalWidth && r > 0 && I.width(r), p()
            }

            function p() {
                $.items = [];
                var t = R.children(),
                    s = "<ul>",
                    i = t.filter(":selected").index();
                H = S = ~i ? i : 0, (E = t.length) && (t.each(function(t) {
                    var o = e(this),
                        i = o.html(),
                        n = o.prop("disabled"),
                        l = $.options.optionsItemBuilder;
                    $.items[t] = {
                        value: o.val(),
                        text: i,
                        slug: a.replaceDiacritics(i),
                        disabled: n
                    }, s += a.format('<li class="{1}">{2}</li>', e.trim([t == H ? "selected" : "", t == E - 1 ? "last" : "", n ? "disabled" : ""].join(" ")), e.isFunction(l) ? l($.items[t], o, t) : a.format(l, $.items[t]))
                }), k.append(T.html(s + "</ul>")), y.html($.items[H].text)), D.add(R).add(I).add(x).off(o), I.prop("class", [$.classes.wrapper, $.options.customClass.overwrite ? R.prop("class").replace(/\S+/g, $.options.customClass.prefix + "-$&") : R.prop("class"), $.options.responsive ? $.classes.responsive : ""].join(" ")), R.prop("disabled") ? (I.addClass($.classes.disabled), x.prop("disabled", !0)) : (j = !0, I.removeClass($.classes.disabled).on("mouseenter" + o + " mouseleave" + o, function(t) {
                    e(this).toggleClass($.classes.hover), $.options.openOnHover && (clearTimeout($.closeTimer), "mouseleave" == t.type ? $.closeTimer = setTimeout(g, 500) : v())
                }), D.on("click" + o, function(e) {
                    Y ? g() : v(e)
                }), x.prop({
                    tabindex: q,
                    disabled: !1
                }).on("keypress" + o, h).on("keydown" + o, function(e) {
                    h(e), clearTimeout($.resetStr), $.resetStr = setTimeout(function() {
                        x.val("")
                    }, $.options.keySearchTimeout);
                    var t = e.keyCode || e.which;
                    t > 36 && 41 > t && b(a[(39 > t ? "previous" : "next") + "EnabledItem"]($.items, S))
                }).on("focusin" + o, function(e) {
                    x.one("blur", function() {
                        x.blur()
                    }), Y || v(e)
                }).on("oninput" in x[0] ? "input" : "keyup", function() {
                    x.val().length && e.each($.items, function(e, t) {
                        return RegExp("^" + x.val(), "i").test(t.slug) && !t.disabled ? (b(e), !1) : void 0
                    })
                }), R.prop("tabindex", !1), O = e("li", k.removeAttr("style")).click(function() {
                    return b(e(this).index(), !0), !1
                })), a.triggerCallback("Init", $)
            }

            function u() {
                a.triggerCallback("Refresh", $), p()
            }

            function h(e) {
                var t = e.keyCode || e.which;
                13 == t && e.preventDefault(), /^(9|13|27)$/.test(t) && (e.stopPropagation(), b(S, !0))
            }

            function f() {
                var e = k.closest(":visible").children(":hidden"),
                    t = $.options.maxHeight;
                e.addClass($.classes.tempshow);
                var s = k.outerWidth(),
                    o = D.outerWidth() - (s - k.width());
                !$.options.expandToItemText || o > s ? W = o : (k.css("overflow", "scroll"), I.width(9e4), W = k.width(), k.css("overflow", ""), I.width("")), k.width(W).height() > t && k.height(t), e.removeClass($.classes.tempshow)
            }

            function v(s) {
                a.triggerCallback("BeforeOpen", $), s && (s.preventDefault(), s.stopPropagation()), j && (f(), e("." + $.classes.hideselect, "." + $.classes.open).children()[t]("close"), Y = !0, B = k.outerHeight(), M = k.height(), x.val("").is(":focus") || x.focus(), l.on("click" + o, g).on("scroll" + o, m), m(), $.options.preventWindowScroll && l.on("mousewheel" + o + " DOMMouseScroll" + o, "." + $.classes.scroll, function(t) {
                    var s = t.originalEvent,
                        o = e(this).scrollTop(),
                        i = 0;
                    "detail" in s && (i = -1 * s.detail), "wheelDelta" in s && (i = s.wheelDelta), "wheelDeltaY" in s && (i = s.wheelDeltaY), "deltaY" in s && (i = -1 * s.deltaY), (o == this.scrollHeight - M && 0 > i || 0 == o && i > 0) && t.preventDefault()
                }), I.addClass($.classes.open), w(S), a.triggerCallback("Open", $))
            }

            function m() {
                f(), I.toggleClass($.classes.above, I.offset().top + I.outerHeight() + B > r.scrollTop() + r.height())
            }

            function g() {
                if (a.triggerCallback("BeforeClose", $), H != S) {
                    a.triggerCallback("BeforeChange", $);
                    var e = $.items[S].text;
                    R.prop("selectedIndex", H = S).data("value", e), y.html(e), a.triggerCallback("Change", $)
                }
                l.off(o), I.removeClass($.classes.open), Y = !1, a.triggerCallback("Close", $)
            }

            function b(e, t) {
                $.items[e].disabled || (O.removeClass("selected").eq(S = e).addClass("selected"), w(e), t && g())
            }

            function w(e) {
                var t = O.eq(e).outerHeight(),
                    s = O[e].offsetTop,
                    o = T.scrollTop(),
                    i = s + 2 * t;
                T.scrollTop(i > o + B ? i - B : o > s - t ? s - t : o)
            }

            function C(e) {
                j && (k.add(D).add(x).remove(), !e && R.removeData(t).removeData("value"), R.prop("tabindex", q).off(o).off(A).unwrap().unwrap(), j = !1)
            }
            var x, k, T, D, y, I, O, S, H, B, M, W, E, A, $ = this,
                R = e(n),
                Y = !1,
                j = !1,
                L = /android|ip(hone|od|ad)/i.test(navigator.userAgent),
                q = R.prop("tabindex");
            d(c)
        };
    e.fn[t] = function(s) {
        return this.each(function() {
            var o = e.data(this, t);
            o && !o.disableOnMobile ? "" + s === s && o[s] ? o[s]() : o.init(s) : e.data(this, t, new c(this, s))
        })
    }, e.fn[t].hooks = n
}(jQuery);
/* <<< file end: js/lib/jquery.selectric.min.js */

//# map link was there [jquery.selectric.min.js.map]
/* >>> file start: js/captcha.js */
! function(e) {
    return e
}(),
function(e) {
    function t() {
        return "undefined" != typeof d
    }

    function n() {
        var t = e.Deferred();
        return s ? t.resolve(s) : LJ.Api.call("captcha.get_public_key", {}, function(e) {
            s = e.captcha_public, t.resolve(s)
        }), t.promise()
    }

    function r() {
        return location.protocol + "//www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit"
    }

    function a(r, a) {
        var o = e.Deferred();
        return a = e.extend(C, a || {}), LJ.Captcha.current ? e.when(n(), L()).then(function() {
            return t() ? (a.sitekey = s, f(), d.render(r, a)) : void console.error("Something went wrong. Captcha object is not defined.")
        }) : (o.resolve(), o.promise())
    }

    function o() {}

    function c() {
        return t() ? (f(), d.reset.apply(null, arguments)) : void 0
    }

    function i() {
        return null
    }

    function l(e) {
        return t() ? d.getResponse(e) : void 0
    }

    function p() {
        return h(), (d || grecaptcha).execute.apply(null, arguments)
    }

    function u(e) {
        var t = e.attributes.title,
            n = e.attributes.src;
        if (t) {
            var r = t.value;
            if (/испытание|challenge/.test(r) && /recaptcha/.test(r)) return !0
        }
        if (n) {
            var a = n.value;
            if (/google\.com.*recaptcha.*bframe/.test(a)) return !0
        }
        return !1
    }
    LJ.define("LJ.Captcha"), LJ.Captcha = {
        create: a,
        reload: c,
        destroy: o,
        getChallenge: i,
        getResponse: l,
        isDefined: t,
        execute: p,
        current: ["recaptcha"].filter(LJ.Flags.isEnabled).shift()
    }, LJ.Captcha.available = !!LJ.Captcha.current;
    var s, d, f = void 0,
        v = void 0,
        h = void 0,
        C = {
            lang: "ru"
        },
        g = e.Deferred();
    window.onRecaptchaLoad = function() {
        g.resolve()
    };
    var L = LJ.Function.once(function() {
        var t = e.Deferred();
        return LJ.injectScript(r()), g.then(function() {
            d = grecaptcha, t.resolve()
        }), t.promise()
    });
    LJ.Captcha.getCaptchaApiObject = function() {
            return d || grecaptcha
        }, LJ.Captcha.setOnSimpleForm = function(e, t) {
            f(), window.onCaptchaPass = function() {
                var t = Object.getPrototypeOf(e).submit;
                t.call(e)
            }, t.addEventListener("click", function(e) {
                e.preventDefault(), p()
            })
        }, LJ.Event.on("reCAPTCHA::popup::created", function(e) {
            var t = e.firstChild,
                n = e.lastChild,
                r = n.firstChild;
            e.classList.add("recaptcha-tiles"), t && t.classList.add("recaptcha-tiles__fader"), n && n.classList.add("recaptcha-tiles__iframe-wrapper"), r && r.classList.add("recaptcha-tiles__iframe")
        }), LJ.Event.on("reCAPTCHA::popup::shown", function() {
            document.body.classList.add("body--recaptcha-opened")
        }), LJ.Event.on("reCAPTCHA::popup::hidden", function() {
            document.body.classList.remove("body--recaptcha-opened")
        }),
        function() {
            var e = void 0,
                t = void 0;
            f = function() {
                var n = document.body.lastChild;
                e = setInterval(function() {
                    var r = document.body.lastChild;
                    if (r !== n) {
                        n = r;
                        var a = n.querySelector("iframe");
                        a && u(a) && (t = n, console.log("reCAPTCHA popup created"), LJ.Event.trigger("reCAPTCHA::popup::created", t), clearInterval(e), e = null)
                    }
                }, 100)
            };
            var n = void 0,
                r = void 0;
            v = function() {
                n = new Date, r || (r = setInterval(function() {
                    t && 0 === +t.style.opacity && (console.log("reCAPTCHA popup hidden"), LJ.Event.trigger("reCAPTCHA::popup::hidden"), clearInterval(r), r = null)
                }, 100))
            };
            var a = 1e4;
            h = function() {
                n = new Date, r || (r = setInterval(function() {
                    t && 1 === +t.style.opacity ? (console.log("reCAPTCHA popup shown"), LJ.Event.trigger("reCAPTCHA::popup::shown"), clearInterval(r), r = null, v()) : new Date > n + a && (console.log("reCAPTCHA popup taking too long to appear, aborting wait"), clearInterval(r), r = null)
                }, 100))
            }
        }()
}(jQuery);
/* <<< file end: js/captcha.js */

//# map link was there [captcha.js.map]
/* >>> file start: js/scheme/schemius/feedback.js */
! function(e) {
    "use strict";
    e(function() {
        function t() {
            s.addClass("p-feedback"), o = !0, u.val(r), LJ.get("remote") || LJ.Captcha.create("b-captcha", {
                tabindex: 50
            }), n.bubble("hide")
        }
        var a = this,
            s = e("body"),
            o = !1,
            r = e(".js-feedback").attr("data-spcatid"),
            n = e(".s-welcometo"),
            c = e(".s-do-item-feedback"),
            l = e(".s-feedback"),
            i = l.find(".s-feedback-error"),
            d = l.find(".b-bubble-success-inner"),
            u = l.find('.s-feedback-body .s-feedback-form input[name="spcatid"]'),
            f = {
                inprogress: "s-feedback-creating",
                done: "s-feedback-successfully",
                error: "s-feedback-erroneously"
            };
        e(".js-feedback").on("click", function(e) {
            e.preventDefault(), t()
        }), this.setState = function(e) {
            l.toggleClass(f.inprogress, "inprogress" === e), l.toggleClass(f.done, "done" === e), l.toggleClass(f.error, "error" === e)
        }, l.on("click", ".s-feedback-submit", function(t) {
            var s = {};
            t.preventDefault(), a.setState("inprogress"), l.find("input, textarea, select").each(function() {
                s[this.name] = e(this).val()
            }), LJ.Api.call("support.create_request", s, function(t) {
                return t.error ? (i.html(t.error.message), a.setState("error")) : (d.html(e("<a>").attr("href", t.request.url).html(t.request.url)), void a.setState("done"))
            })
        }).on("click", ".s-feedback-another", function(t) {
            t.preventDefault(), l.find("input, textarea").each(function() {
                e(this).val("")
            }), LJ.Captcha.reload(), a.setState(null)
        }), n.bubble({
            target: c,
            showOn: "click",
            alwaysShowUnderTarget: !0,
            arrowWidth: "auto"
        }).on("click", ".s-welcometo-action .b-flatbutton", function(e) {
            e.preventDefault(), t()
        }).on("click", ".s-welcometo-switcher", function(e) {
            return e.preventDefault(), LJ.get("remote") ? void LJ.Api.call("settings.set_old_design", {
                value: 1
            }, function() {
                location.reload()
            }) : (LJ.Cookie.setGlobal("ljold", 1, {
                expires: 7
            }), void location.reload())
        }), s.on("click", function(t) {
            var r = e(t.target);
            o && (r.hasClass("b-fader") || r.hasClass("s-feedback-close")) && (s.removeClass("p-feedback"), u.val(""), o = !1, a.setState(null), LJ.get("remote") || LJ.Captcha.destroy())
        })
    })
}(jQuery);
/* <<< file end: js/scheme/schemius/feedback.js */

//# map link was there [feedback.js.map]
/* >>> file start: js/core/angular/simple-scrollbar.js */
! function(t, e) {
    "use strict";

    function s(t, s) {
        function i(t) {
            var e = t.pageY - n;
            n = t.pageY, r(function() {
                s.el.scrollTop += e / s.scrollRatio
            })
        }

        function a() {
            t.classList.remove("ss-grabbed"), e.body.classList.remove("ss-grabbed"), e.removeEventListener("mousemove", i), e.removeEventListener("mouseup", a)
        }
        var n;
        t.addEventListener("mousedown", function(s) {
            return n = s.pageY, t.classList.add("ss-grabbed"), e.body.classList.add("ss-grabbed"), e.addEventListener("mousemove", i), e.addEventListener("mouseup", a), !1
        })
    }

    function i(i) {
        for (this.target = i, this.bar = '<div class="ss-scroll">', this.wrapper = e.createElement("div"), this.wrapper.setAttribute("class", "ss-wrapper"), this.el = e.createElement("div"), this.el.setAttribute("class", "ss-content"), this.wrapper.appendChild(this.el); this.target.firstChild;) this.el.appendChild(this.target.firstChild);
        this.target.appendChild(this.wrapper), this.target.insertAdjacentHTML("beforeend", this.bar), this.bar = this.target.lastChild, s(this.bar, this), this.moveBar(), this.el.addEventListener("scroll", this.moveBar.bind(this)), this.el.addEventListener("mouseenter", this.moveBar.bind(this)), this.target.classList.add("ss-container");
        var r = t.getComputedStyle(i);
        "0px" === r.height && "0px" !== r["max-height"] && (i.style.height = r["max-height"])
    }
    angular.module("Scrollbar", []), angular.module("Scrollbar").constant("SimpleScrollbar", i);
    var r = t.requestAnimationFrame || t.setImmediate || function(t) {
        return setTimeout(t, 0)
    };
    i.prototype = {
        moveBar: function() {
            var t = this.el.scrollHeight,
                e = this.el.clientHeight,
                s = this;
            this.scrollRatio = e / t, r(function() {
                1 === s.scrollRatio ? s.bar.classList.add("ss-hidden") : (s.bar.classList.remove("ss-hidden"), s.bar.style.cssText = "height:" + 100 * s.scrollRatio + "%; top:" + s.el.scrollTop / t * 100 + "%;right:-" + (s.target.clientWidth - s.bar.clientWidth) + "px;")
            })
        },
        setElementHeight: function(t) {
            this.el.style.height = t, this.moveBar()
        }
    }
}(window, document);
/* <<< file end: js/core/angular/simple-scrollbar.js */

//# map link was there [simple-scrollbar.js.map]
/* >>> file start: js/notifications/main.js */
Site.page.template['angular/widgets/notifications/notifications.ng.tmpl'] = '<div class=\"popupus popupus--notices\" ng-class=\"{\'svgpreloader-30 svgpreloader-pseudo svgpreloader\': notifications.loading}\" ng-controller=\"NotificationCtrl as notifications\">\n    <div class=\"popupus__inner\">\n        <div\n            class=\"notices\"\n            ng-class=\"{\'notices__has-notifications\': notifications.counter > 0}\"\n            >\n            <header class=\"notices__header\">\n                <h3\n                    class=\"notices__title\"\n                    lj-ml=\"notification.centre.title\"\n                    lj-ml-resolve=\"{ count: notifications.counter }\"\n                    lj-ml-dynamic=\"notifications.counter\"\n                    >\n                    </h3>\n                <a \n                    href=\"#\"\n                    ng-click=\"notifications.readAll()\"\n                    ng-show=\"notifications.entries.length > 0\"\n                    class=\"notices__read\"\n                    lj-ml=\"notification.centre.read.all\"\n                    >\n                    </a>\n                <span><TMPL_VAR statprefix></span>\n            </header>\n            <div\n                class=\"notices__body\"\n                notifications-content\n                ng-show=\"notifications.entries.length > 0\"\n                >\n                <div class=\"notices__body-wrapper\">\n                <ul class=\"notices__list\">\n                    <li\n                        ng-repeat=\"entry in notifications.entries\"\n                        class=\"notices__item\"\n                        ng-class=\"{\n                            \'notices--{{entry.action}}\': true,\n                            \'notices--unread\': entry.unread\n                            }\"\n                        ng-mouseover=\"notifications.read(entry)\"\n                        >\n                        <a class=\"notices__item__link\" href=\"#\">\n                            <img ng-src=\"{{entry.main_user.img_url || notifications.defaultPic}}\" ng-alt=\"{{entry.main_user.name}}\" class=\"notices__userpic\">\n                            <h5 class=\"notices__item__title\">{{entry.notification_text}}</h5>\n                            <time class=\"notices__date\">{{entry.date}}</time>\n                            <p class=\"notices__publication-content\">{{entry.title}}</p>\n                            <ul class=\"notices__consilient-users-list\">\n                                <li class=\"notices__consilient-user\" ng-repeat=\"user in entry.other_users\">\n                                    <img ng-src=\"{{user.img_url || notifications.defaultPic}}\" ng-alt=\"{{user.name}}\" class=\"notices__consilient-userpic\">\n                                </li>\n                            </ul>\n                        </a>\n                    </li>\n                </ul>\n                </div>\n            </div>\n            <div\n                class=\"notices__body-empty\"\n                ng-show=\"notifications.entries.length === 0\"\n                >\n                You don\'t have any notifications\n            </div>\n\n            <div class=\"notices__footer\" ng-if=\"notifications.shouldShowMore()\">\n                <div class=\"notices__more\">\n                    <button\n                        ng-click=\"notifications.nextPage()\"\n                        class=\"\n                            flatbutton\n                            flatbutton--small\n                            flatbutton--neutral\n                            flatbutton--max\n                            \"\n                        lj-ml=\"notification.centre.previous\"\n                        >\n                        </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>';
Site.page.template['angular/widgets/notifications/notificationsIcon.ng.tmpl'] = '<div\n    class=\"\n        s-header-control\n        s-header-notifications\n        \"\n    >\n    <a\n        class=\"\n            s-header-control__icon\n            s-header-control__icon--circle\n            s-header-notifications__icon\n            \"\n        href=\"javascript: void(0)\"\n        notifications-panel\n        ng-if=\"enabled\"\n        lj-svg-icon=\"flaticon--notifications\"\n        ></a>\n    <span\n        class=\"s-header-notifications__counter\"\n        ng-class=\"{\'counter--shown\': count.count > 0}\"\n        ng-if=\"enabled\"\n        ng-controller=\"NotificationsCountCtrl as count\"\n        >{{count.count}}</span>\n</div>\n';
//= require js/core/angular/bubble.js
//= require js/core/angular/api.js
//= require js/core/angular/simple-scrollbar.js
//= require_ml notification.centre.title
//= require_ml notification.centre.read.all
//= require_ml notification.centre.previous
! function(n) {
    return n
}(),
function() {
    "use strict";

    function n(n, t, i, o, e) {
        function c() {
            var t = void 0;
            return d.length > 0 ? void(t = n.$on("notifications:readPushed", function() {
                a(), t()
            })) : void a()
        }

        function a() {
            r().then(function(t) {
                g !== t.notifications && (g = t.notifications, n.$broadcast("notifications:counterUpdated"))
            })
        }

        function r() {
            return i.call("notifications.getn", {
                silent: !0
            })
        }

        function u(n) {
            return i.call("notifications.get", {
                page: n,
                silent: !0
            })
        }

        function f() {
            i.call("notifications.release", {
                id: d,
                silent: !0
            }), d = [], n.$broadcast("notifications:readPushed")
        }

        function s(t) {
            d.push(t.id), t.unread = !1, g--, n.$broadcast("notifications:counterUpdated"), $()
        }

        function l() {
            i.call("notifications.release_all", {
                silent: !0
            }).then(function(t) {
                "ok" === t && (g = 0, n.$broadcast("notifications:counterUpdated"))
            })
        }
        var d = [],
            p = [],
            g = 0;
        c(), t(c, e);
        var $ = LJ.Function.debounce(f, o);
        return {
            pushRead: s,
            entries: function() {
                return p
            },
            counter: function() {
                return g
            },
            getNotifications: u,
            readAll: l
        }
    }

    function t(n, t, i, o) {
        function e() {
            (LJ.Support.isMobile() || LJ.Support.touch) && t(c.readPage, 1e3)
        }
        var c = this,
            a = 0,
            r = 0;
        c.entries = [], c.counter = o.counter(), c.loading = !1, c.defaultPic = LJ.get("statprefix") + "/img/userpics/userpic-user.png?v=15821", c.getPage = function(t) {
            c.loading = !0, o.getNotifications(a).then(function(i) {
                c.entries = i.notifications, r = i.pages, c.loading = !1, n.$broadcast("notifications:pageLoad:" + t)
            })
        }, c.read = function(n) {
            n.unread && o.pushRead(n)
        }, c.readPage = function() {
            c.part.forEach(c.read)
        }, c.readAll = o.readAll, c.shouldShowMore = function() {
            return c.entries && r - 1 > a
        }, c.nextPage = function() {
            a++, c.getPage("next"), e(), n.$emit("notifications:nextPage")
        }, n.$on("notifications:counterUpdated", function() {
            c.counter = o.counter()
        }), n.$on("bubble:open:notifications", function() {
            c.getPage("open"), e()
        }), n.$on("bubble:close:notifications", function() {
            a = 0, c.entries = []
        })
    }

    function i(n) {
        function t(n, t) {
            var i = LJ.Flags.isEnabled("notification_center_display");
            n.enabled = i, i && t.removeClass("notices--hidden")
        }
        return {
            templateUrl: "notificationsIcon.ng.tmpl",
            link: t
        }
    }

    function o(n, t, i) {
        var o = this;
        n.$on("notifications:counterUpdated", function() {
            t(function() {
                o.count = i.counter()
            })
        })
    }

    function e(n) {
        function t(t, i) {
            n.register({
                name: "notifications",
                template: "notifications.ng.tmpl"
            }), i.click(function() {
                t.$apply(function() {
                    n.open("notifications", {
                        alwaysBottom: !0,
                        closeControl: !1
                    }, i)
                })
            })
        }
        return {
            link: t
        }
    }

    function c(n, t) {
        function i(i, c) {
            var a = c.find(".notices__body-wrapper")[0],
                r = new t(a);
            i.$on("notifications:pageLoad:open", function() {
                n(function() {
                    return o(r, c)
                })
            }), i.$on("bubble:close:notifications", function() {
                n(function() {
                    return e(r)
                })
            }), i.$on("notifications:pageLoad:next", function() {
                n(function() {
                    e(r), o(r, c)
                })
            })
        }

        function o(n, t) {
            n.setElementHeight(t.height() + "px")
        }

        function e(n) {
            n.setElementHeight("100%")
        }
        return {
            link: i
        }
    }
    angular.module("Notifications", ["LJ.Bubble", "LJ.Api", "Scrollbar"]), angular.module("Notifications").constant("READ_PUSH_DELAY", 3e3).constant("CHECK_NEW_DELAY", 1e4).factory("notificationService", n).directive("ljNotificationsIcon", i).directive("notificationsPanel", e).directive("notificationsContent", c).controller("NotificationCtrl", t).controller("NotificationsCountCtrl", o), n.$inject = ["$rootScope", "$interval", "Api", "READ_PUSH_DELAY", "CHECK_NEW_DELAY"], t.$inject = ["$scope", "$timeout", "$interval", "notificationService"], i.$inject = ["notificationService"], o.$inject = ["$scope", "$timeout", "notificationService"], e.$inject = ["Bubble"], c.$inject = ["$timeout", "SimpleScrollbar"]
}();
/* <<< file end: js/notifications/main.js */

//# map link was there [main.js.map]
/* >>> file start: js/facebookMigration/migration.js */
//= require js/core/angular/api.js
//= require js/node_modules/moment/min/moment.min.js
Site.page.template['Widgets/facebook_migration.tmpl'] = '<div\n    class=\"modal-wrapper\"\n    ng-if=\"!migration.hidden\"\n    >\n    <div\n        class=\"\n            modal\n            fbmerge\n            fbmerge--step{{migration.step}}\n            fbmerge--hide-sharing\n        \"\n        ng-class=\"{\n            \'fbmerge--need-action\': migration.step >= 2 && migration.step <= 4,\n            \'fbmerge--loading\': migration.loading,\n            }\"\n        >\n\n        <!-- header -->\n        <header class=\"fbmerge__descr\">\n            <!-- steps: 1 -->\n            <div class=\"fbmerge__elem\n                        fbmerge__elem--step1\">\n                <h1 class=\"fbmerge__title\" lj-ml=\"fbmerging.step1.description.title\"></h1>\n\n                <div class=\"fbmerge__choice-buttons\">\n                    <button\n                        type=\"button\"\n                        class=\"\n                            fbmerge__flatbutton\n                            fbmerge__flatbutton--inverse\n                            fbmerge__choice-button\n                            fbmerge__choice-button--import\n                            flatbutton\n                            flatbutton--small\n                            \"\n                        ng-click=\"migration.importStep()\"\n                        lj-ml=\"fbmerging.step1.description.agreement\"\n                        ></button>\n                    <button\n                        type=\"button\"\n                        class=\"\n                            fbmerge__choice-button\n                            fbmerge__choice-button--no-border\n                            \"\n                        ng-click=\"migration.hide()\"\n                        lj-ml=\"fbmerging.step1.description.refusing\"\n                        ></button>\n                </div>\n            </div>\n\n            <!-- steps: 2 -->\n            <div class=\"fbmerge__elem\n                        fbmerge__elem--step2\">\n                <h1 class=\"fbmerge__title\" lj-ml=\"fbmerging.step2.description.title\"></h1>\n            </div>\n\n            <!-- steps: 3 -->\n            <div class=\"fbmerge__elem\n                        fbmerge__elem--step3\">\n                <h1\n                    class=\"fbmerge__title\"\n                    lj-ml=\"fbmerging.step3.description.title\"\n                    ng-if=\"migration.addr\"></h1>\n                <h1\n                    class=\"fbmerge__title\"\n                    lj-ml=\"fbmerging.step3.description.title2\"\n                    ng-if=\"!migration.addr\"></h1>\n            </div>\n\n            <!-- steps: 4 -->\n            <div class=\"fbmerge__elem\n                        fbmerge__elem--step4\">\n                <h1 class=\"fbmerge__title\" lj-ml=\"fbmerging.step4.description.title\"></h1>\n            </div>\n\n            <!-- steps: 5 -->\n            <div class=\"fbmerge__elem\n                        fbmerge__elem--step5\">\n                <h1\n                    class=\"fbmerge__title\"\n                    lj-ml=\"fbmerging.step5.description.title\"\n                    ></h1>\n                <p\n                    class=\"fbmerge__text fbmerge__text--step5\"\n                    lj-ml=\"fbmerging.step5.description.text\"\n                    ></p>\n                <p\n                    class=\"fbmerge__text fbmerge__text--step5\"\n                    ng-if=\"migration.needEmailConfirm\"\n                    >\n                    Confirm your email <a href=\"/register.bml\" target=\"_blank\">here</a>\n                    </p>\n\n            </div>\n            \n            <!-- steps: 6 -->\n            <div class=\"fbmerge__elem\n                        fbmerge__elem--step6\">\n                <h1 class=\"fbmerge__title\" lj-ml=\"fbmerging.step6.description.title\"></h1>\n            </div>\n            \n            <!-- steps: 7 -->\n            <div class=\"fbmerge__elem\n                        fbmerge__elem--step7\">\n                <h1 class=\"fbmerge__title\" lj-ml=\"fbmerging.step7.description.title\"></h1>\n                <form\n                    class=\"fbmerge__choice-buttons\"\n                    action=\"{{migration.sendMailAction}}\"\n                    method=\"post\"\n                    >\n                    <button\n                        class=\"\n                            fbmerge__flatbutton\n                            fbmerge__flatbutton--inverse\n                            fbmerge__choice-button\n                            fbmerge__choice-button--sendmail\n                            flatbutton \n                            flatbutton--small\n                            \"\n                        name=\"action:send\"\n                        value=\"1\"\n                        type=\"submit\"\n                        lj-ml=\"fbmerging.step7.description.sendmail\"\n                        ></button>\n                    <input type=\"hidden\" name=\"authas\" value=\"{{migration.authAs}}\">\n                    <a\n                        class=\"\n                            fbmerge__choice-button\n                            fbmerge__choice-button--no-border\n                            \"\n                        ng-href=\"{{migration.siteRoot}}/manage/settings/?cat=account\"\n                        lj-ml=\"fbmerging.step7.description.options\"\n                        ></a>\n                </form>\n            </div>\n        </header>\n        <!-- /header -->\n\n        <!-- sharing -->\n        <ul class=\"fbmerge__sharing\">\n            <li class=\"fbmerge__sharing-item\">\n                <span class=\"fbmerge__sharing-text\" lj-ml=\"fbmerging.sharing.title\"></span>\n            </li>\n            <li class=\"fbmerge__sharing-item\">\n                <a href=\"#\" class=\"fbmerge__sharing-link\" ng-click=\"migration.share(\'livejournal\')\">\n                    <svg class=\"fbmerge__sharing-img\" width=\"21px\" height=\"21px\" viewBox=\"0 0 21 21\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                        <path d=\"M12.79894,15.85731 C13.36944,14.53641 14.42504,13.47381 15.74244,12.89701 L16.51314,16.62521 L12.79894,15.85731 Z M11.10284,1.43661 C9.72244,1.43661 8.41064,1.72501 7.21994,2.23881 L5.07164,0.09331 L5.06674,0.09331 C2.79874,1.08661 0.98084,2.91361 0.00014,5.19001 L2.15124,7.33831 C3.13124,5.06191 4.94844,3.23631 7.21784,2.24231 L7.22134,2.24301 L15.17404,10.18451 L15.17264,10.18451 C12.90534,11.17781 11.08604,13.00551 10.10604,15.28051 L2.15054,7.34041 L2.15054,7.34111 C1.63114,8.53461 1.32174,9.83381 1.32174,11.21841 C1.32174,16.62171 5.70024,21.00021 11.10284,21.00021 C16.50334,21.00021 20.88324,16.62031 20.88324,11.21841 C20.88324,5.81651 16.50404,1.43661 11.10284,1.43661 L11.10284,1.43661 Z\" fill=\"#FFFFFF\"></path>\n                    </svg>\n                </a>\n            </li>\n            <li class=\"fbmerge__sharing-item\">\n                <a href=\"#\" class=\"fbmerge__sharing-link\" ng-click=\"migration.share(\'facebook\')\">\n                    <svg class=\"fbmerge__sharing-img\" width=\"11px\" height=\"21px\" viewBox=\"0 0 11 21\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                        <path d=\"M13.3242729,19.6465026 L13.3242729,16.0030329 L16.4703384,16.0030329 L16.4703384,13.3161097 C16.4703384,10.1979039 18.3747478,8.5 21.1563758,8.5 C22.4887569,8.5 23.6339895,8.59922756 23.9677631,8.64354981 L23.9677631,11.90223 L22.038479,11.9031345 C20.5257336,11.9031345 20.2327545,12.621969 20.2327545,13.6768385 L20.2327545,16.0030329 L23.8406759,16.0030329 L23.3708601,19.6465026 L20.2327545,19.6465026 L20.2327545,28.5930839 L16.4703384,28.5930839 L16.4703384,19.6465026 L13.3242729,19.6465026 Z\" fill=\"#FFFFFF\" transform=\"translate(-13.000000, -8.000000)\"></path>\n                    </svg>\n                </a>\n            </li>\n            <li class=\"fbmerge__sharing-item\">\n                <a href=\"#\" class=\"fbmerge__sharing-link\" ng-click=\"migration.share(\'twitter\')\">\n                    <svg class=\"fbmerge__sharing-img\" width=\"18px\" height=\"14px\" viewBox=\"0 0 18 14\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                        <path d=\"M17.9599007,1.70276413 C17.2990905,1.98282691 16.5890102,2.1721722 15.8435869,2.25723946 C16.6043825,1.82148161 17.1886599,1.13133812 17.4637182,0.309104933 C16.7517985,0.712656502 15.9632803,1.00565202 15.1239153,1.16360717 C14.4518058,0.479239462 13.4941927,0.0515802691 12.4344263,0.0515802691 C10.3993752,0.0515802691 8.74961606,1.62824395 8.74961606,3.5728 C8.74961606,3.84884484 8.7822,4.11754439 8.84500292,4.3752574 C5.78270365,4.22841435 3.06765985,2.82653094 1.25031679,0.696145291 C0.933148905,1.21621704 0.751440876,1.82110493 0.751440876,2.46642332 C0.751440876,3.68806457 1.40193723,4.76587623 2.39062336,5.39738296 C1.78663796,5.3791139 1.21845547,5.2206565 0.721681752,4.95691659 C0.721418978,4.97160717 0.721353285,4.98636054 0.721353285,5.00117668 C0.721353285,6.70729327 1.99147007,8.13052197 3.67709781,8.4540287 C3.36787883,8.53445022 3.04236788,8.57745471 2.70634599,8.57745471 C2.46886423,8.57745471 2.23808321,8.55541883 2.01308321,8.51429776 C2.48200292,9.91329327 3.84277664,10.9313381 5.4551562,10.9598404 C4.19403942,11.9042439 2.60530949,12.4671318 0.878951825,12.4671318 C0.581557664,12.4671318 0.288236496,12.4504951 -2.6277372e-05,12.4179749 C1.63068175,13.4170601 3.56745547,13.9999749 5.64829489,13.9999749 C12.4258204,13.9999749 16.131981,8.63439641 16.131981,3.98112287 C16.131981,3.82844126 16.1283679,3.67657578 16.1213387,3.52558924 C16.8412073,3.02912287 17.4658861,2.40891659 17.9599007,1.70276413\"  fill=\"#FFFFFF\"></path>\n                    </svg>\n                </a>\n            </li>\n            <li>\n                <input\n                    type=\"hidden\"\n                    name=\"returnto\"\n                    value=\"{{migration.returnTo}}\"\n                    >\n            </li>\n        </ul>\n        <!-- /sharing -->\n\n        <!-- statuses -->\n        <div class=\"fbmerge__statuses\">\n            <div class=\"fbmerge__status fbmerge__status--fb\">\n                <svg \n                    class=\"fbmerge__status-img fbmerge__status-img--fb\" \n                    width=\"41px\" height=\"77px\" \n                    viewBox=\"0 0 41 77\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                    <path d=\"M501.307329,250.375956 L501.307329,236.589854 L513.189472,236.589854 L513.189472,226.423118 C513.189472,214.624501 520.382096,208.2 530.887822,208.2 C535.919994,208.2 540.245339,208.575456 541.505944,208.743161 L541.505944,221.073303 L534.219373,221.076725 C528.505996,221.076725 527.399465,223.79664 527.399465,227.788038 L527.399465,236.589854 L541.025958,236.589854 L539.251545,250.375956 L527.399465,250.375956 L527.399465,284.227885 L513.189472,284.227885 L513.189472,250.375956 L501.307329,250.375956 Z\" fill=\"#ffffff\" transform=\"translate(-501.000000, -208.000000)\"></path>\n                </svg>\n            </div>\n            <div class=\"fbmerge__status fbmerge__status--lj\">\n                <svg \n                    class=\"fbmerge__status-img fbmerge__status-img--lj\" \n                    width=\"82px\" height=\"84px\" \n                    viewBox=\"0 0 82 84\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                    <ellipse fill=\"#00B2ED\" cx=\"40.8747045\" cy=\"41.65\" rx=\"36.6824271\" ry=\"36.75\"></ellipse>\n                    <path d=\"M47.640062,58.94042 L61.6681208,61.84612 L58.7572829,47.73902 C53.7817484,49.92162 49.7948926,53.94242 47.640062,58.94042\" fill=\"#981658\"></path>\n                    <path d=\"M47.640062,58.94042 C49.7948926,53.94242 53.7817484,49.92162 58.7572829,47.73902 L61.6681208,61.84612 L47.640062,58.94042 Z\" fill=\"#00344B\"></path>\n                    <path d=\"M27.2679695,8.1179 L19.1545154,0 L19.1356501,0 C10.5701287,3.7583 3.70387707,10.6715 0,19.2843 L8.12463357,27.4134 C11.8257158,18.7999 18.6891726,11.8923 27.2602837,8.1312 L27.2735592,8.134 L27.2679695,8.1179 Z\" fill=\"#00B2ED\"></path>\n                    <path d=\"M7.68584187,26.9927 L7.68584187,26.9899 L37.7325926,57.0339 C41.4336748,48.4253 48.3048174,41.51 56.8682427,37.7517 L56.8731337,37.7517 L26.8375624,7.7028 L26.8242868,7.7 C18.2531757,11.4611 11.3897189,18.3687 7.68863672,26.9822 L7.68584187,26.9927 Z\" fill=\"#00344B\"></path>\n                    <path d=\"M58.9700287,47.5838092 C57.8019856,42.0097299 56.7485289,36.9790123 56.7485289,36.9790123 L56.7374399,36.9827087 C47.8810114,40.8675611 40.7729513,48.0014956 36.9398476,56.8985838 L47.4670214,59.1496543 C49.6996103,54.0043503 53.8358137,49.8311834 58.9700287,47.5838092\" fill=\"#FFFFFF\"></path>\n                </svg>\n            </div>\n        </div>\n        <!-- /statuses -->\n\n        <!-- steps: 2 -->\n        <form\n            class=\"fbmerge__container\n                fbmerge__elem\n                fbmerge__elem--step2\"\n            action=\"{{migration.loginLink}}\"\n            method=\"post\"\n            >\n            <ul class=\"fbmerge__inputs-list\">\n                <li class=\"fbmerge__inputs-item\">\n                    <label\n                        class=\"fbmerge__text-label\"\n                        for=\"fbmerge__login-username\"\n                        lj-ml=\"fbmerging.step2.form.login\"></label>\n                    <div class=\"fbmerge__input-wrapper\">\n                        <input\n                            class=\"fbmerge__text-input\"\n                            id=\"fbmerge__login-username\"\n                            name=\"user\"\n                            type=\"text\"\n                            ng-model=\"migration.step2.login\"\n                            >\n                        <span\n                            class=\"fbmerge__input-tooltip\"\n                            lj_ml=\"createaccount.error.username.inuse\"\n                            ></span>\n                    </div>\n                </li>\n                <li class=\"fbmerge__inputs-item\">\n                    <label\n                        class=\"fbmerge__text-label\"\n                        for=\"fbmerge__login-pass\"\n                        lj-ml=\"fbmerging.step2.form.password\"></label>\n                    <div class=\"fbmerge__input-wrapper\">\n                        <input\n                            class=\"fbmerge__text-input\"\n                            id=\"fbmerge__login-pass\"\n                            name=\"password\"\n                            type=\"password\"\n                            ng-model=\"migration.step2.password\"\n                            >\n                        <span\n                            class=\"fbmerge__input-tooltip\"\n                            lj_ml=\"createaccount.error.password.digits_only\"\n                            ></span>\n                    </div>\n                </li>\n            </ul>\n            \n            <div class=\"fbmerge__flatbutton-wrapper\">\n                <button\n                    class=\"\n                        fbmerge__flatbutton\n                        flatbutton\n                        flatbutton--small\n                        \"\n                    ng-class=\"{\'flatbutton--active\': migration.step2.login && migration.step2.password}\"\n                    lj-ml=\"fbmerging.step2.form.entry\"\n                    ng-disabled=\"!migration.step2.login && !migration.step2.password\"\n                    ></button>\n            </div>\n\n            <small\n                class=\"fbmerge__notice fbmerge__notice--step2\"\n                lj-ml=\"fbmerging.step2.form.notice\"\n                ></small>\n\n            <a\n                class=\"\n                    fbmerge__flatbutton\n                    fbmerge__flatbutton--fb\n                    flatbutton\n                    flatbutton--small\n                    \"\n                ng-attr-title=\"{{migration.fbLoginTitle}}\"\n                ng-href=\"{{migration.facebookLink}}\"\n                >\n                <span\n                    class=\"\n                        fbmerge__flatbutton-icon\n                        fbmerge__flatbutton-icon--fb\n                        \"\n                    lj-svg-icon=\"flaticon--facebook\"></span>\n                <span\n                    class=\"\n                        fbmerge__flatbutton-text\n                        fbmerge__flatbutton-text--fb\">\n                    Facebook\n                </span>\n                </a>\n        </form>\n        <!-- /steps: 2 -->\n\n        <!-- steps: 3 -->\n        <div class=\"fbmerge__container\n                    fbmerge__elem\n                    fbmerge__elem--step3\">\n\n            <div ng-if=\"migration.addr\">\n                <p\n                    class=\"fbmerge__text fbmerge__text--step3\"\n                    lj-ml=\"fbmerging.step3.form.text\"\n                    ></p>\n                <a\n                    class=\"\n                        fbmerge__flatbutton\n                        flatbutton\n                        flatbutton--small\n                        \"\n                    ng-href=\"{{migration.addr}}\"\n                    lj-ml=\"fbmerging.step3.form.allow\"\n                    ></a>\n            </div>\n            <div ng-if=\"!migration.addr\">\n                <ul class=\"fbmerge__inputs-list\">\n                    <li class=\"fbmerge__inputs-item\">\n                        <label\n                            class=\"fbmerge__text-label\"\n                            for=\"fbmerge__create-username\"\n                            lj-ml=\"fbmerging.step2.form.login\"\n                            ></label>\n                        <div class=\"fbmerge__input-wrapper\">\n                            <input\n                                class=\"fbmerge__text-input\"\n                                id=\"fbmerge__create-username\"\n                                name=\"user\"\n                                type=\"text\"\n                                ng-model=\"migration.username\"\n                                ng-class=\"{\'fbmerge__text-input--error\': migration.step3Errors.username.unchecked}\"\n                                >\n                            <span\n                                class=\"fbmerge__input-tooltip\"\n                                ng-style=\"{\'display\': migration.step3Errors.username.text ? \'block\' : \'none\'}\"\n                                ng-bind-html=\"migration.step3Errors.username.text\"\n                                ></span>\n                        </div>\n                        <small\n                            class=\"fbmerge__notice fbmerge__notice--step3\"\n                            lj-ml=\"createaccount.tip.username\"\n                            ></small>\n                    </li>\n                    <li class=\"fbmerge__inputs-item\">\n                        <label\n                            class=\"fbmerge__text-label\"\n                            for=\"fbmerge__create-email\"\n                            lj-ml=\"fbmerging.step3.form.mail\"\n                            ></label>\n                        <div class=\"fbmerge__input-wrapper\">\n                            <input\n                                class=\"fbmerge__text-input\"\n                                id=\"fbmerge__create-email\"\n                                name=\"email\"\n                                type=\"text\"\n                                ng-model=\"migration.email\"\n                                ng-class=\"{\'fbmerge__text-input--error\': migration.step3Errors.email.unchecked}\"\n                                >\n                            <span\n                                class=\"fbmerge__input-tooltip\"\n                                ng-style=\"{\'display\': migration.step3Errors.email.text ? \'block\' : \'none\'}\"\n                                ng-bind-html=\"migration.step3Errors.email.text\"\n                                ></span>\n                            <small\n                                class=\"fbmerge__notice fbmerge__notice--step3\"\n                                lj-ml=\"createaccount.tip.email\"\n                                ></small>\n                        </div>\n                    </li>\n                    <li class=\"fbmerge__inputs-item\">\n                        <label\n                            class=\"fbmerge__text-label\"\n                            for=\"fbmerge__create-pass\"\n                            lj-ml=\"fbmerging.step2.form.password\"\n                            ></label>\n                        <div class=\"fbmerge__input-wrapper\">\n                            <input\n                                class=\"fbmerge__text-input\"\n                                id=\"fbmerge__create-pass\"\n                                name=\"password\"\n                                type=\"password\"\n                                ng-model=\"migration.password\"\n                                ng-class=\"{\'fbmerge__text-input--error\': migration.step3Errors.password.unchecked}\"\n                                >\n                            <span\n                                class=\"fbmerge__input-tooltip\"\n                                ng-style=\"{\'display\': migration.step3Errors.password.text ? \'block\' : \'none\'}\"\n                                ng-bind-html=\"migration.step3Errors.password.text\"\n                                ></span>\n                        </div>\n                        <small\n                            class=\"fbmerge__notice fbmerge__notice--step3\"\n                            lj-ml=\"fbmerging.step3.form.user_password\"\n                            ></small>\n                    </li>\n                </ul>\n\n                <input\n                    name=\"gender\"\n                    type=\"hidden\"\n                    ng-model=\"migration.gender\"\n                    >\n\n                <div class=\"fbmerge__flatbutton-wrapper\">\n                    <a\n                    href=\"/identity/convert.bml\"\n                    target=\"_blank\"\n                    class=\"\n                        fbmerge__flatbutton\n                        flatbutton\n                        flatbutton--small\n                        \"\n                    ng-class=\"{\'flatbutton--active\': migration.convertationEnabled()}\"\n                    ng-click=\"migration.convertIdentity($event)\"\n                    lj-ml=\"fbmerging.step3.form.convert_but\"\n                    ng-disabled=\"!migration.convertationEnabled()\"\n                    ></a>\n                </div>\n                <small\n                    class=\"fbmerge__notice fbmerge__notice--step3\"\n                    lj-ml=\"fbmerging.step2.form.notice\"\n                    ></small>\n            </div>\n        </div>\n        <!-- /steps: 3 -->\n\n        <!-- steps: 4 -->\n        <form class=\"fbmerge__container\n                    fbmerge__elem\n                    fbmerge__elem--step4\">\n            <h3\n                class=\"fbmerge__subtitle\"\n                lj-ml=\"fbmerging.step4.form.title\"></h3>\n            <ul class=\"fbmerge__options\">\n                <li class=\"fbmerge__option\">\n                    <label class=\"fbmerge__option-label\">\n                        <input\n                            class=\"fbmerge__option-input\"\n                            type=\"radio\"\n                            name=\"period\"\n                            ng-model=\"migration.period\"\n                            ng-value=\"migration.week\"\n                            >\n                        <span\n                            class=\"fbmerge__option-text\"\n                            lj-ml=\"fbmerging.step4.form.week\"></span>\n                    </label>\n                </li>\n                <li class=\"fbmerge__option\">\n                    <label class=\"fbmerge__option-label\">\n                        <input\n                            class=\"fbmerge__option-input\"\n                            type=\"radio\"\n                            name=\"period\"\n                            ng-model=\"migration.period\"\n                            ng-value=\"migration.month\"\n                            checked\n                            >\n                        <span\n                            class=\"fbmerge__option-text\"\n                            lj-ml=\"fbmerging.step4.form.mounth\"></span>\n                    </label>\n                </li>\n                <li class=\"fbmerge__option\">\n                    <label class=\"fbmerge__option-label\">\n                        <input\n                            class=\"fbmerge__option-input\"\n                            type=\"radio\"\n                            name=\"period\"\n                            ng-model=\"migration.period\"\n                            ng-value=\"migration.halfYear\"\n                            >\n                        <span\n                            class=\"fbmerge__option-text\"\n                            lj-ml=\"fbmerging.step4.form.halfyear\"></span>\n                    </label>\n                </li>\n                <li class=\"fbmerge__option\">\n                    <label class=\"fbmerge__option-label\">\n                        <input\n                            class=\"fbmerge__option-input\"\n                            type=\"radio\"\n                            name=\"period\"\n                            ng-model=\"migration.period\"\n                            ng-value=\"0\"\n                            >\n                        <span\n                            class=\"fbmerge__option-text\"\n                            lj-ml=\"fbmerging.step4.form.all\"></span>\n                    </label>\n                </li>\n                <li class=\"fbmerge__option\">\n                    <label class=\"fbmerge__option-label\">\n                        <input\n                            class=\"fbmerge__option-input\"\n                            type=\"radio\"\n                            name=\"period\"\n                            ng-model=\"migration.period\"\n                            ng-value=\"1\"\n                            >\n                        <span\n                            class=\"fbmerge__option-text\"\n                            lj-ml=\"fbmerging.step4.form.nothing\"></span>\n                    </label>\n                </li>\n                <li class=\"fbmerge__option fbmerge__option--autoimport\">\n                    <label class=\"fbmerge__option-label\">\n                        <input\n                            class=\"fbmerge__option-input\"\n                            type=\"checkbox\"\n                            ng-model=\"migration.autoImport\"\n                            >\n                        <span\n                            class=\"fbmerge__option-text\"\n                            lj-ml=\"fbmerging.step4.form.autoimport\"></span>\n                    </label>\n                </li>\n            </ul>\n            <div class=\"fbmerge__flatbutton-wrapper\">\n                <button\n                    ng-click=\"migration.setPeriod()\"\n                    class=\"\n                        fbmerge__flatbutton\n                        flatbutton\n                        flatbutton--small\n                        \"\n                    lj-ml=\"fbmerging.step4.form.save\"\n                    ></button>\n            </div>\n        </form>\n        <!-- /steps: 4 -->\n\n        <!-- close button -->\n        <span\n            ng-click=\"migration.hide()\"\n            class=\"fbmerge__close modal__close\">\n            <span\n                class=\"fbmerge__close-icon\"\n                lj-svg-icon=\"flaticon--cross\"></span>\n        </span>\n        <!-- /close button -->\n    </div>\n</div>\n\n';
LJ.injectStyle('/* >>> file start: stc/widgets/facebookmigration.css */\n.fbmerge{width:820px;min-height:410px;text-align:left;font:400 15px/1.4 ProximaNova,Helvetica,sans-serif!important;letter-spacing:.01em;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fbmerge__elem--step1,.fbmerge__elem--step2,.fbmerge__elem--step3,.fbmerge__elem--step4,.fbmerge__elem--step5,.fbmerge__elem--step6,.fbmerge__elem--step7{display:none}.fbmerge__title{margin:73px 0 0!important;width:300px;font-size:28px;line-height:31px;font-weight:700;-webkit-font-feature-settings:\"kern\" off;font-feature-settings:\"kern\" off;font-variant:none;letter-spacing:inherit;word-spacing:normal;color:#FFF!important}.fbmerge__descr{position:absolute;box-sizing:border-box;top:0;left:0;padding-left:40px;width:50%;min-height:410px;-webkit-transition:opacity ease 1s;transition:opacity ease 1s;color:#FFF!important;z-index:2}.fbmerge__descr::after,.fbmerge__descr::before{content:\'\';display:table;clear:both}.fbmerge__container{position:relative;box-sizing:border-box;margin:0 0 0 auto;padding:0 50px 0 40px;width:50%;color:#4c4c4c!important}.fbmerge--step2 .fbmerge__container,.fbmerge--step3 .fbmerge__container,.fbmerge--step4 .fbmerge__container{padding-top:40px;padding-bottom:20px}.fbmerge__text{padding:0}.fbmerge__choice-buttons{min-width:174px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.fbmerge__choice-button{margin-bottom:10px}.fbmerge__choice-button:last-child{margin-bottom:0}.fbmerge__choice-button:hover{-webkit-transform:translateY(-2px);-ms-transform:translateY(-2px);transform:translateY(-2px)}.fbmerge__choice-button--no-border{padding:8px 20px;background-color:transparent;border:0;outline:0;text-align:center;text-transform:uppercase;font-size:11px;line-height:12px;color:#fff!important;cursor:pointer}.fbmerge__choice-button--no-border:hover,.fbmerge__choice-button--no-border:visited{color:#fff!important}.fbmerge__statuses{position:absolute;top:0;bottom:0;left:0;width:100%;border-radius:5px;background-color:#1EB2EA;-webkit-transition:width ease .7s;transition:width ease .7s;z-index:1}.fbmerge__status--fb,.fbmerge__status--lj{box-sizing:border-box;position:absolute;border:3px solid #FFF;width:162px;height:162px;bottom:84px;border-radius:50%;overflow:hidden}.fbmerge__status--lj{left:564px;background-color:#FFF;box-shadow:0 0 0 7px #00B1ED inset;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);-webkit-transition:ease 1s;transition:ease 1s;-webkit-transition-property:border,bottom,left;transition-property:border,bottom,left}.fbmerge__status-img--lj{position:absolute;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%) rotate(-45deg);-ms-transform:translateX(-50%) translateY(-50%) rotate(-45deg);transform:translateX(-50%) translateY(-50%) rotate(-45deg);-webkit-transition:all ease .7s;transition:all ease .7s}.fbmerge__status--fb{left:441px;-webkit-transition:all ease .7s;transition:all ease .7s}.fbmerge__status-img--fb{position:absolute;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);width:40px;height:76px;-webkit-transition:all ease .7s;transition:all ease .7s}.fbmerge--need-action .fbmerge__statuses{width:50%;border-radius:5px 0 0 5px}.fbmerge--need-action .fbmerge__status--lj{left:40px;bottom:48px}.fbmerge--need-action .fbmerge__status--fb{width:0;height:0;border-width:0}.fbmerge--need-action .fbmerge__status-img--fb{width:0;height:0}.fbmerge--need-action.fbmerge--loading .fbmerge__statuses{width:100%;border-radius:5px;-webkit-transition-duration:.5s;transition-duration:.5s}.fbmerge__sharing{position:absolute;left:40px;bottom:56px;margin:0;padding:0;line-height:0;list-style:none;font-size:0;opacity:0;-webkit-transition:opacity ease 1s;transition:opacity ease 1s;z-index:2}.fbmerge__sharing-item{display:inline-block;vertical-align:middle}.fbmerge__sharing-item+.fbmerge__sharing-item{margin-left:22px}.fbmerge__sharing-text{display:inline-block;width:90px;font-size:16px;line-height:18px;color:#FFF!important}.fbmerge__sharing-link{position:relative;display:inline-block;width:35px;height:35px;border:1px solid #FFF;border-radius:50%}.fbmerge__sharing-link:hover{-webkit-transform:translateY(-2px);-ms-transform:translateY(-2px);transform:translateY(-2px)}.fbmerge__sharing-img{position:absolute;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.fbmerge--step5 .fbmerge__sharing,.fbmerge--step6 .fbmerge__sharing{opacity:1}.fbmerge--hide-sharing .fbmerge__sharing{display:none}.fbmerge__notice{display:block;margin-top:15px;font-size:11px;line-height:12px}.fbmerge__flatbutton-wrapper{margin:25px 0}.fbmerge__flatbutton{min-width:140px;box-sizing:border-box;padding-left:20px;padding-right:20px;border-width:2px;border-color:currentColor}.fbmerge__flatbutton[disabled]{background-color:transparent;color:#AAB7BB!important}.fbmerge__flatbutton:active,.fbmerge__flatbutton:focus,.fbmerge__flatbutton:hover{background-color:transparent;color:#00A2D9!important}.fbmerge__flatbutton--inverse{background-color:transparent;border-color:currentColor;color:#FFF!important}.fbmerge__flatbutton--inverse:active,.fbmerge__flatbutton--inverse:focus,.fbmerge__flatbutton--inverse:hover{color:#FFF!important}.fbmerge__flatbutton--fb{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:37px 0 0;padding:0;font-size:16px}.fbmerge__flatbutton--fb,.fbmerge__flatbutton--fb:hover,.fbmerge__flatbutton--fb:link,.fbmerge__flatbutton--fb:visited{background:0 0;border:0;color:#4c4c4c!important}.fbmerge__flatbutton--fb:focus,.fbmerge__flatbutton--fb:hover{-webkit-transform:translateY(-2px);-ms-transform:translateY(-2px);transform:translateY(-2px)}.fbmerge__flatbutton--fb:focus::before{content:none}.fbmerge__flatbutton-icon--fb{width:30px;height:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;vertical-align:middle;margin-right:5px;margin-top:-2px;border:2px solid #00A2D9;border-radius:50%;line-height:32px;box-sizing:border-box}.fbmerge__flatbutton-icon--fb .svgicon{height:16px;fill:#00A2D9}.fbmerge__inputs-list{margin:0;padding:0;list-style:none}.fbmerge__inputs-item{margin-bottom:23px}.fbmerge__inputs-item:last-child{margin-bottom:0}.fbmerge__input-wrapper{position:relative;margin:6px 0}.fbmerge__text-input{display:block;width:100%;box-sizing:border-box;border-width:0;border-bottom:1px solid #979797;outline:0;font-size:14px;line-height:1.4;font-weight:700;background:0 0;color:#00A2D9!important}.fbmerge__text-input--error{color:#d20922!important}.fbmerge__text-input+.fbmerge__text-label{margin-top:25px}.fbmerge__text-label+.fbmerge__text-input{margin-top:5px}.fbmerge__input-tooltip{display:none;margin-top:5px;font-size:11px;line-height:1.2;color:#d0021b!important}.fbmerge__container input:-webkit-autofill,.fbmerge__container input:-webkit-autofill:focus,.fbmerge__container input:-webkit-autofill:hover{-webkit-box-shadow:0 0 0 1000px #fff inset}.fbmerge__subtitle,.fbmerge__text-label{display:block;margin:0;text-transform:uppercase;font-size:16px;line-height:18px;font-weight:600;color:inherit!important}.fbmerge__options{margin:18px 0 0;padding:0;list-style:none}.fbmerge__option{margin-bottom:15px}.fbmerge__option:last-child{margin-bottom:0}.fbmerge__option-input{display:none}.fbmerge__option-text{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:14px;line-height:1.2;cursor:pointer}.fbmerge__option-text::before{content:\'\';display:inline-block;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:27px;height:27px;margin-right:15px;border:2px solid #C3D3D9;border-radius:50%}.fbmerge--step1:not(.fbmerge--loading) .fbmerge__elem--step1,.fbmerge--step2:not(.fbmerge--loading) .fbmerge__elem--step2,.fbmerge--step3:not(.fbmerge--loading) .fbmerge__elem--step3,.fbmerge--step4:not(.fbmerge--loading) .fbmerge__elem--step4,.fbmerge--step5:not(.fbmerge--loading) .fbmerge__elem--step5,.fbmerge--step6:not(.fbmerge--loading) .fbmerge__elem--step6{display:block}.fbmerge--step2 .fbmerge__status--lj,.fbmerge--step3 .fbmerge__status--lj{border-bottom-color:#008CC1;border-left-color:#008CC1}.fbmerge__option-input:checked+.fbmerge__option-text::before{border-color:#00A2D9;background-image:url(\'data:image/svg+xml;charset=UTF-8, %3Csvg%20width%3D%2214px%22%20height%3D%2210px%22%20viewBox%3D%220%200%2014%2010%22%20version%3D%221.1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%3E%3Cg%20id%3D%22Group-2%22%20transform%3D%22translate%28-469.000000%2C%20-152.000000%29%22%20fill%3D%22none%22%20stroke-width%3D%222%22%3E%3Cpolyline%20points%3D%22471%20156.648053%20474.882762%20160%20480.961931%20154%22%20stroke%3D%22%2300B2ED%22%3E%3C/polyline%3E%3C/g%3E%3C/svg%3E\');background-position:50% 50%;background-repeat:no-repeat}.fbmerge__option-input[disabled]+.fbmerge__option-text{pointer-events:none;cursor:default}.fbmerge__option-input[disabled]:checked+.fbmerge__option-text::before{border-color:#C3D3D9!important;background-image:url(\'data:image/svg+xml;charset=UTF-8, %3Csvg%20width%3D%2214px%22%20height%3D%2210px%22%20viewBox%3D%220%200%2014%2010%22%20version%3D%221.1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%3E%3Cg%20id%3D%22Group-2%22%20transform%3D%22translate%28-469.000000%2C%20-152.000000%29%22%20fill%3D%22none%22%20stroke-width%3D%222%22%3E%3Cpolyline%20points%3D%22471%20156.648053%20474.882762%20160%20480.961931%20154%22%20stroke%3D%22%23C3D3D9%22%3E%3C/polyline%3E%3C/g%3E%3C/svg%3E\');background-position:50% 50%;background-repeat:no-repeat}.fbmerge__option--autoimport{margin-top:30px}.fbmerge__close::after,.fbmerge__close::before{content:none}.fbmerge .flaticon--cross{width:20px;height:20px;fill:#FFF!important}.fbmerge--need-action .flaticon--cross{fill:#00A2D9!important}.fbmerge--step1 .fbmerge__title{margin-bottom:60px!important}.fbmerge--loading.fbmerge--step1 .fbmerge__status--fb,.fbmerge--loading.fbmerge--step1 .fbmerge__status--lj{width:0;height:0;border-width:0}.fbmerge--step1 .fbmerge__status--lj{-webkit-transition:ease .7s;transition:ease .7s;-webkit-transition-property:border,bottom,left,width,height;transition-property:border,bottom,left,width,height}.fbmerge--step1 .fbmerge__status--fb{-webkit-transition-delay:.3s;transition-delay:.3s}.fbmerge--step2 .fbmerge__status--lj{border-right-color:#008CC1}.fbmerge--step2 .fbmerge__flatbutton{min-width:140px}.fbmerge__text--step3{margin:0 0 30px;font-size:14px;line-height:17px;font-weight:700}.fbmerge--step3 .fbmerge__input-wrapper{margin-bottom:0}.fbmerge--step4 .fbmerge__status--lj{border-left-color:#008CC1}.fbmerge--step5 .fbmerge__status--fb{background-color:#FFF;box-shadow:0 0 0 7px #00B1ED inset}.modal.fbmerge--step5 .fbmerge__status-img--fb path{fill:#00B1ED!important}.fbmerge__text--step5{margin:13px 0 0;font-size:16px;line-height:18px}.fbmerge--step6 .fbmerge__status--fb{display:none}.fbmerge--step6 .fbmerge__status--lj{left:465px;bottom:60px;width:224px;height:224px;box-shadow:0 0 0 8px #00B1ED inset,0 0 0 11px #fff inset,0 0 0 21px #00B1ED inset;-webkit-transition:ease .5s;transition:ease .5s;-webkit-transition-property:left,bottom,width,height;transition-property:left,bottom,width,height}.fbmerge--step6 .fbmerge__status-img--lj{width:100px;height:100px;-webkit-transition:ease .5s;transition:ease .5s;-webkit-transition-property:width,height,top,left;transition-property:width,height,top,left}.fbmerge--step7:not(.fbmerge--loading) .fbmerge__elem--step7{display:block}.fbmerge--step7 .fbmerge__title{margin-bottom:60px!important}@media (max-width:850px){.fbmerge{width:660px}.fbmerge__status--fb{left:320px}.fbmerge__status--lj{left:441px}.fbmerge__title{margin:36px 0 0!important;width:270px}.fbmerge__sharing-item{margin-right:15px}.fbmerge__sharing-item:last-child{margin-right:0}.fbmerge__sharing-item+.fbmerge__sharing-item{margin-left:0}.fbmerge--step6 .fbmerge__status--lj{left:400px}}@media (max-width:680px){.body--fbmerge-opened{overflow:hidden;max-height:100%}.fbmerge{width:90%;height:auto;min-height:0;max-height:95%;overflow:auto}.fbmerge__statuses{display:none}.fbmerge__descr{position:relative;width:100%;min-height:0;padding:0 35px 0 20px;background-color:#00b1ed}.fbmerge__title{width:auto;margin-top:30px!important;margin-bottom:30px!important;padding:15px 0;font-size:25px;line-height:28px;text-align:left}.fbmerge--need-action .fbmerge__title{margin:0!important;font-size:18px;line-height:22px}.fbmerge--need-action .fbmerge__container,.fbmerge__container{width:100%;padding:25px}.fbmerge__notice{margin-top:10px}.fbmerge__close{z-index:100;top:15px;right:10px}.fbmerge--need-action .flaticon--cross{fill:#FFF!important}.fbmerge__choice-buttons{display:block;width:100%;padding-bottom:30px}.fbmerge__choice-button{display:inline-block;width:auto}.fbmerge__inputs-item{margin-bottom:20px}.fbmerge__text-label{margin-bottom:5px;font-size:14px;line-height:1}.fbmerge__input-wrapper{margin:0}.fbmerge__flatbutton-wrapper{margin:20px 0;text-align:center}.fbmerge__flatbutton--fb,.fbmerge__option--autoimport{margin-top:20px}.fbmerge__flatbutton-wrapper:last-child{margin-bottom:0}.fbmerge__option{margin-bottom:8px}.fbmerge__sharing{display:none;position:relative;left:auto;bottom:auto;padding:0 20px}.fbmerge__sharing-text{width:auto}.fbmerge--step6 .fbmerge__sharing{display:block}.fbmerge--hide-sharing .fbmerge__sharing{display:none}.fbmerge__elem--step1{text-align:center}.fbmerge--step5{padding-bottom:30px;background:#00b1ed}.fbmerge__text--step5{margin-bottom:20px}.fbmerge--step6{padding-bottom:50px;background:#00b1ed}}\n/* <<< file end: stc/widgets/facebookmigration.css */\n\n/*# sourceMappingURL=facebookmigration.css.map */\n');
//= require_ml fbmerging.step1.description.title
//= require_ml fbmerging.step1.description.agreement
//= require_ml fbmerging.step1.description.refusing
//= require_ml fbmerging.step2.description.title
//= require_ml fbmerging.step3.description.title
//= require_ml fbmerging.step3.description.title2
//= require_ml fbmerging.step4.description.title
//= require_ml fbmerging.step5.description.title
//= require_ml fbmerging.step5.description.text
//= require_ml fbmerging.step6.description.title
//= require_ml fbmerging.sharing.title
//= require_ml fbmerging.step2.form.login
//= require_ml fbmerging.step2.form.password
//= require_ml fbmerging.step2.form.entry
//= require_ml /login.bml.connect.facebook
//= require_ml fbmerging.step2.form.notice
//= require_ml fbmerging.step3.form.text
//= require_ml fbmerging.step3.form.allow
//= require_ml fbmerging.step2.form.login
//= require_ml fbmerging.step3.form.mail
//= require_ml fbmerging.step3.form.convert_but
//= require_ml fbmerging.step3.form.user_password
//= require_ml fbmerging.step4.form.title
//= require_ml fbmerging.step4.form.week
//= require_ml fbmerging.step4.form.mounth
//= require_ml fbmerging.step4.form.halfyear
//= require_ml fbmerging.step4.form.all
//= require_ml fbmerging.step4.form.nothing
//= require_ml fbmerging.step4.form.autoimport
//= require_ml fbmerging.step4.form.save
//= require_ml fbmerging.step5.sharing.title
//= require_ml fbmerging.step5.sharing.text
//= require_ml createaccount.tip.username
//= require_ml createaccount.tip.email
//= require_ml createaccount.error.username.inuse
//= require_ml createaccount.error.password.digits_only
//= require_ml fbmerging.step7.description.title
//= require_ml fbmerging.step7.description.sendmail
//= require_ml fbmerging.step7.description.options
! function(e) {
    return e
}(),
function() {
    "use strict";

    function e(e, o, t) {
        function r(e, o) {
            var t = {
                facebook: "fbsharing",
                twitter: "twsharing"
            };
            return t[o] ? e + "?utm_source=" + t[o] + "&utm_medium=social" : e
        }

        function n(o) {
            var t = LJ.ml("fbmerging.step5.sharing.title"),
                n = LJ.ml("fbmerging.step5.sharing.text", {
                    journal_url: Site.remote.journal_url
                }),
                s = Site.remote.journal_url;
            if ("livejournal" === o) return void e.open("/update.bml?event=" + l(n) + "&subject=" + l(t));
            var u = a[o]({
                title: t,
                text: n,
                link: r(s, o)
            });
            i(u)
        }

        function i(o) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                r = t.allowScrollbars || !1,
                n = r ? 1 : 0;
            e.open(o, "", "left=" + (u.width - 630) / 2 + ",top=" + (u.height - 440) / 2 + ",toolbar=0,status=0,scrollbars=" + n + ",menubar=0,location=0,width=630,height=440")
        }
        var a, s = {};
        moment().format("ZZ");
        s.share = n;
        var l = e.encodeURIComponent.bind(e),
            u = e.screen || {
                width: 1e3,
                height: 1e3
            };
        return a = {
            facebook: function(e) {
                var o = e.text,
                    t = e.title,
                    r = e.link;
                return "https://www.facebook.com/sharer.php?u=" + l(r) + "&description=" + l(o) + "&title=" + l(t)
            },
            livejournal: function(e) {
                var o = e.text,
                    t = e.title,
                    r = e.link;
                return "https://livejournal.com/update.bml?subject=" + l(t) + "&event=" + l('<a href="' + r + '">' + t + "</a> " + o)
            },
            twitter: function(e) {
                var o = e.link,
                    t = e.title;
                return "https://twitter.com/share?text=" + l(t) + "&via=livejournalru&url=" + l(o)
            }
        }, s
    }

    function o(e) {
        return "" !== e && angular.isDefined(e)
    }

    function t() {
        var e = LJ.Cookie.get(a);
        try {
            return angular.fromJson(e)
        } catch (o) {
            return null
        }
    }

    function r(e) {
        LJ.Cookie.setGlobal(a, angular.toJson(e), {
            expires: s
        })
    }

    function n(e, n, i, a, s, l) {
        function u(o) {
            e.$watch(function() {
                return c[o]
            }, function(e, t) {
                e !== t && c.step3Errors[o] && (c.step3Errors[o].unchecked = !1)
            })
        }
        var c = this,
            d = !1,
            m = !1,
            f = !1;
        c.hidden = !0;
        var g = t() || {};
        c.step = g.agreed || e.step > 4 ? e.step : 1, e.needEmailConfirm && 6 === c.step && (c.step = 7), c.stepAfterSignIn = e.step, c.addr = e.addr, c.username = e.user, c.password, c.email = e.mail, c.gender = e.gender, c.needEmailConfirm = e.needEmailConfirm, c.loginLink = i.trustAsResourceUrl(e.loginLink), c.facebookLink = e.facebookLink, c.step2 = {}, c.share = l.share, c.step3Errors = {
            username: "",
            email: "",
            password: ""
        }, c.returnTo = e.returnTo, c.siteRoot = LJ.get("siteroot"), c.sendMailAction = i.trustAsResourceUrl(c.siteRoot + "/register.bml"), c.fbLoginTitle = LJ.ml("/login.bml.connect.facebook"), c.autoImport = !0, c.week = 604800, c.month = 2592e3, c.halfYear = 15552e3, c.period = c.month, c.authAs = LJ.get("remoteUser"), u("username"), u("email"), u("password"), c.show = function(t) {
            t && (c.step = t, m = !0, c.autoImport = !o(e.noMigration)), angular.element("body").addClass("p-fader").addClass("body--fbmerge-opened"), c.hidden = !1
        }, c.hide = function() {
            var e = t() || {};
            e.closed = !0, r(e), f && a.location.reload(), c.hidden = !0, angular.element("body").removeClass("p-fader").removeClass("body--fbmerge-opened")
        }, c.importStep = function() {
            c.loading = !0, n(function() {
                r({
                    agreed: !0,
                    closed: !1
                }), Site.remote ? c.step = c.stepAfterSignIn : c.step = 2, c.loading = !1
            }, 700)
        }, c.setPeriod = function() {
            c.loading = !0, s.call("settings.set_fb_digest_status", {
                period: c.period,
                disable_auto_migration: !c.autoImport,
                silent: !0
            }).then(function(o) {
                "ok" === o.status && (m && (f = !0), e.needEmailConfirm || d ? (c.username && (c.authAs = c.username), c.step = 7) : c.step++, c.loading = !1)
            })
        }, c.convertIdentity = function(e) {
            e.preventDefault(), c.loading = !0, s.call("signup.convert_identity_lite", {
                create: 1,
                username: c.username,
                password: c.password,
                passwordconfirm: c.password,
                email: c.email,
                gender: "U",
                silent: !0
            }).then(function(e) {
                "ok" === e.status && (d = !0, c.step++, c.loading = !1), "error" === e.status && (Object.keys(c.step3Errors).forEach(function(o) {
                    return e[o] ? void(c.step3Errors[o] = {
                        text: i.trustAsHtml(e[o]),
                        unchecked: !0
                    }) : void(c.step3Errors[o] = "")
                }), c.loading = !1)
            })
        }, c.convertationEnabled = function() {
            return c.username && c.email && c.password
        }
    }

    function i(e, r, i) {
        function a(n, a, s, l) {
            var u = o(n.showLater),
                c = t() || {},
                d = LiveJournal.parseGetArgs().fbmn,
                m = i[0].referrer,
                f = m && m.match(/^https?:\/\/([^\/]+\.)?facebook\.com(\/|$)/i),
                g = d || f && !c.closed && !u;
            return g || u ? (a.html(e(r.get("facebook_migration.tmpl"))(n)), u && angular.element(".js-popup-shower").click(function() {
                l.show(4), n.$apply()
            }), void(g && l.show())) : void a.remove()
        }
        return {
            scope: {
                step: "=facebookMigrationStep",
                addr: "@facebookMigrationAddr",
                user: "@facebookMigrationUser",
                mail: "@facebookMigrationMail",
                gender: "@facebookMigrationGender",
                needEmailConfirm: "=facebookMigrationNeedEmailConfirm",
                loginLink: "@facebookMigrationLoginLink",
                facebookLink: "@facebookMigrationFacebookLink",
                returnTo: "@facebookMigrationReturnTo",
                showLater: "@facebookMigrationShowLater",
                noMigration: "@facebookMigrationDisableAutoMigration"
            },
            controllerAs: "migration",
            controller: n,
            link: a
        }
    }
    e.$inject = ["$window", "$location", "Api"], i.$inject = ["$compile", "$templateCache", "$document"], n.$inject = ["$scope", "$timeout", "$sce", "$window", "Api", "shareService"], angular.module("Migration.Facebook", ["LJ.Api"]), angular.module("Migration.Facebook").config(["$locationProvider", function(e) {
        e.html5Mode({
            enabled: !0,
            requireBase: !1
        })
    }]).factory("shareService", e).directive("facebookMigration", i).controller("migrationController", n);
    var a = "facebookMigrationStatus",
        s = 14;
    angular.element(document).ready(function() {
        var e = angular.element("[facebook-migration]");
        if (e.length) {
            var o = e.eq(0).scope();
            o || angular.bootstrap("[facebook-migration]", ["Migration.Facebook"])
        }
    })
}();
/* <<< file end: js/facebookMigration/migration.js */

//# map link was there [migration.js.map]
/* >>> file start: js/ljwidget.js */
LJWidget = new Class(Object, {
    updateContent: function(t) {
        t || (t = {}), this._show_frame = t.showFrame, t.method && (method = t.method), t._widget_update = 1, this.doAjaxRequest(t) && this.hilightFrame()
    },
    getWidget: function() {
        return $(this.widgetId)
    },
    doPost: function(t) {
        t || (t = {}), this._show_frame = t.showFrame;
        var e = {},
            i = this.widgetClass;
        i = "Widget[" + i.replace(/::/g, "_") + "]_";
        for (var a in t) {
            var r = a;
            a.match(/^Widget\[/) || "lj_form_auth" == a || a.match(/^_widget/) || (r = i + a), e[r] = t[a]
        }
        e._widget_post = 1, this.doAjaxRequest(e)
    },
    doPostAndUpdateContent: function(t) {
        t || (t = {}), t._widget_update = 1, this.doPost(t)
    },
    postForm: function(t) {
        if (!t) return !1;
        for (var e = {}, i = 0; i < t.elements.length; i++) {
            var a = t.elements[i],
                r = a.name,
                o = a.value;
            e[r] = o
        }
        this.doPost(e)
    },
    init: function(t, e, i) {
        LJWidget.superClass.init.apply(this, arguments), this.widgetId = t, this.widgetClass = e, this.authToken = i
    },
    hilightFrame: function() {
        if (1 == this._show_frame && !this._frame) {
            var t = this.getWidget();
            if (t) {
                var e = t.parentNode;
                if (e) {
                    var i = document.createElement("fieldset");
                    i.style.borderColor = "red";
                    var a = document.createElement("legend");
                    a.innerHTML = "Updating...", i.appendChild(a), e.appendChild(i), i.appendChild(t), this._frame = i
                }
            }
        }
    },
    removeHilightFrame: function() {
        if (1 == this._show_frame) {
            var t = this.getWidget();
            if (t && this._frame) {
                var e = this._frame.parentNode;
                e && (e.appendChild(t), e.removeChild(this._frame), this._frame = null)
            }
        }
    },
    method: "POST",
    endpoint: "widget",
    requestParams: {},
    doAjaxRequest: function(t) {
        if (t || (t = {}), this._ajax_updating) return !1;
        this._ajax_updating = !0, t._widget_id = this.widgetId, t._widget_class = this.widgetClass, t.auth_token = this.authToken, $("_widget_authas") && (t.authas = $("_widget_authas").value);
        var e = {
            method: this.method,
            data: HTTPReq.formEncoded(t),
            url: LiveJournal.getAjaxUrl(this.endpoint),
            onData: this.ajaxDone.bind(this),
            onError: this.ajaxError.bind(this)
        };
        for (var i in t) e[i] = t[i];
        return HTTPReq.getJSON(e), !0
    },
    ajaxDone: function(t) {
        if (this._ajax_updating = !1, this.removeHilightFrame(), t._widget_body && t._widget_body.match(/ajax:.[^"]+/) && (this.authToken = t._widget_body.match(/ajax:.[^"]+/)[0]), t.auth_token && (this.authToken = t.auth_token), t.errors && "" != t.errors) return this.ajaxError(t.errors);
        if (t.error) return this.ajaxError(t.error);
        if (this.onData && this.onData(t), t._widget_body) {
            var e = this.getWidget();
            if (!e) return;
            e.innerHTML = t._widget_body, this.onRefresh && this.onRefresh()
        }
    },
    ajaxError: function(t) {
        this._ajax_updating = !1, this.skipError || (this.onError ? this.onError(t) : LiveJournal.ajaxError(t))
    }
}), LJWidget.widgets = [];
/* <<< file end: js/ljwidget.js */

//# map link was there [ljwidget.js.map]
/* >>> file start: js/deprecated/dom.js */
function _textSpan() {
    return _textElements("span", arguments)
}

function _textDiv() {
    return _textElements("div", arguments)
}

function _textElements(t, e) {
    for (var n = [], r = 0; r < e.length; r++) {
        var u = document.createElement(t);
        u.innerHTML = e[r], n.push(u)
    }
    return 1 == n.length ? n[0] : n
}
/* <<< file end: js/deprecated/dom.js */

//# map link was there [dom.js.map]
/* >>> file start: js/ippu.js */
function changeOpac(e, t) {
    var i = $(e);
    if (i && i.style) {
        var s = i.style;
        s && (IPPU.isSafari() && t >= 100 && (t = 99.99), s.filters && (s.filters.alpha.opacity = 100 * t), s.opacity = t)
    }
}
IPPU = new Class(Object, {
    setFixedPosition: function(e) {
        IPPU.isIE() || (this.fixedPosition = e, this.updateContent())
    },
    clickHandler: function(e) {
        if (this.clickToClose && this.visible()) {
            e = Event.prep(e);
            var t = e.target;
            DOM.getAncestorsByClassName(t, "ippu", !0).length > 0 || this.cancel()
        }
    },
    setCancelledCallback: function(e) {
        this.cancelledCallback = e
    },
    cancel: function() {
        this.cancelledCallback && this.cancelledCallback(), this.hide()
    },
    setHiddenCallback: function(e) {
        this.hiddenCallback = e
    },
    setupClickCapture: function() {
        if (this.visible() && !this.clickHandlerSetup && (this.clickToClose || this.modal)) {
            if (this.clickHandlerFunc = this.clickHandler.bindEventListener(this), this.modal) {
                if (this.overlay) return;
                this.overlay = document.createElement("div"), this.overlay.style.left = "0px", this.overlay.style.top = "0px", this.overlay.style.margin = "0px", this.overlay.style.padding = "0px", this.overlay.style.backgroundColor = "#000000", this.overlay.style.zIndex = "900", IPPU.isIE() ? (this.overlay.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=50)", this.overlay.style.position = "absolute", this.overlay.style.width = document.body.scrollWidth, this.overlay.style.height = document.body.scrollHeight) : this.overlay.style.position = "fixed", this.ele.parentNode.insertBefore(this.overlay, this.ele), this.updateOverlay(), DOM.addEventListener(this.overlay, "click", this.clickHandlerFunc)
            } else DOM.addEventListener(document, "click", this.clickHandlerFunc);
            this.clickHandlerSetup = !0
        }
    },
    updateOverlay: function() {
        if (this.overlay) {
            var e = DOM.getClientDimensions();
            this.overlay.style.width = e.x - 1 + "px", IPPU.isIE() || (this.overlay.style.height = e.y - 1 + "px"), this.visibleOverlay ? (this.overlay.backgroundColor = "#000000", changeOpac(this.overlay, .5)) : (this.overlay.backgroundColor = "#FFFFFF", changeOpac(this.overlay, 0))
        }
    },
    resizeHandler: function(e) {
        this.updateContent()
    },
    removeClickHandlers: function() {
        if (this.clickHandlerSetup) {
            DOM.removeEventListener(document, "click", this.clickHandlerFunc, !1), this.overlay && (DOM.removeEventListener(this.overlay, "click", this.clickHandlerFunc, !0), this.overlay.parentNode.removeChild(this.overlay), this.overlay = void 0), this.clickHandlerFunc = void 0, this.clickHandlerSetup = !1
        }
    },
    setClickToClose: function(e) {
        if (this.clickToClose = e, !this.clickHandlerSetup && e && this.visible()) {
            var t = this.setupClickCapture.bind(this);
            window.setTimeout(t, 100)
        } else !e && this.clickHandlerSetup && this.removeClickHandlers();
        this.updateContent()
    },
    setModal: function(e) {
        var t = this.modal == e;
        e && this.setClickToClose(!1), this.modal = e, t && (this.removeClickHandlers(), this.updateContent())
    },
    setOverlayVisible: function(e) {
        this.visibleOverlay = e, this.updateContent()
    },
    updateContent: function() {
        this.autoCenter(), this.updateTitlebar(), this.updateOverlay(), this.titlebar && this.setTitlebarClass(this.titlebar.className);
        var e = this.setupClickCapture.bind(this);
        window.setTimeout(e, 100), this.fixedPosition && "fixed" != this.ele.style.position ? this.ele.style.position = "fixed" : this.fixedPosition || "fixed" != this.ele.style.position || (this.ele.style.position = "absolute")
    },
    getTitlebarElement: function() {
        return this.titlebar
    },
    setTitlebarClass: function(e) {
        this.titlebar && (this.titlebar.className = e)
    },
    setOverflow: function(e) {
        this.ele && (this.ele.style.overflow = e)
    },
    visible: function() {
        return this.shown
    },
    setTitlebar: function(e) {
        if (this.showTitlebar = e, e) {
            if (!this.titlebar) {
                var t = document.createElement("div");
                if (!t) return;
                t.style.width = "100%", this.title && (t.innerHTML = this.title), this.ele.insertBefore(t, this.content), this.titlebar = t
            }
        } else this.titlebar && (this.ele.removeChild(this.titlebar), this.titlebar = !1)
    },
    setTitle: function(e) {
        this.title = e, this.updateTitlebar()
    },
    updateTitlebar: function() {
        this.showTitlebar && this.titlebar && this.title != this.titlebar.innerHTML && (this.titlebar.innerHTML = this.title)
    },
    addClass: function(e) {
        DOM.addClassName(this.ele, e)
    },
    removeClass: function(e) {
        DOM.removeClassName(this.ele, e)
    },
    setAutoCenterCallback: function(e) {
        this.autoCenterCallback = e
    },
    autoCenter: function() {
        if (this.visible && this.visible()) {
            if (this.autoCenterCallback) return void this.autoCenterCallback(this);
            this.autoCenterX && this.centerX(), this.autoCenterY && this.centerY()
        }
    },
    center: function() {
        this.centerX(), this.centerY()
    },
    centerOnWidget: function(e, t, i) {
        t = t || 0, i = i || 0, this.setAutoCenter(!1, !1), this.setAutoCenterCallback(null);
        var s = DOM.getAbsoluteDimensions(e),
            n = DOM.getAbsoluteDimensions(this.ele),
            l = s.absoluteRight - s.offsetWidth / 2 - n.offsetWidth / 2 + i,
            o = s.absoluteBottom - s.offsetHeight / 2 - n.offsetHeight / 2 + t;
        l = 0 > l ? 0 : l, o = 0 > o ? 0 : o, DOM.setLeft(this.ele, l), DOM.setTop(this.ele, o)
    },
    centerX: function() {
        if (this.visible && this.visible()) {
            var e = DOM.getClientDimensions(),
                t = e.x / 2 - this.ele.offsetWidth / 2;
            if (!this.fixedPosition) {
                var i = DOM.getWindowScroll();
                t += i.left
            }
            DOM.setLeft(this.ele, t)
        }
    },
    centerY: function() {
        if (this.visible && this.visible()) {
            var e = DOM.getClientDimensions(),
                t = e.y / 2 - this.ele.offsetHeight / 2;
            if (!this.fixedPosition) {
                var i = DOM.getWindowScroll();
                t += i.top
            }
            DOM.setTop(this.ele, t)
        }
    },
    setAutoCenter: function(e, t) {
        return this.autoCenterX = e || !1, this.autoCenterY = t || !1, e || t ? void this.autoCenter() : void this.setAutoCenterCallback(null)
    },
    setDimensions: function(e, t) {
        e += "", t += "", e.match(/^\d+$/) && (e += "px"), t.match(/^\d+$/) && (t += "px"), this.ele.style.width = e, this.ele.style.height = t
    },
    moveForward: function(e) {
        e || (e = 1), this.ele && (this.ele.style.zIndex += e)
    },
    moveBackward: function(e) {
        e || (e = 1), this.ele && (this.ele.style.zIndex -= e)
    },
    setLocation: function(e, t) {
        this.setLeft(e), this.setTop(t)
    },
    setTop: function(e) {
        "string" != typeof e && (e += "px"), this.ele.style.top = e
    },
    setLeft: function(e) {
        "string" != typeof e && (e += "px"), this.ele.style.left = e
    },
    getElement: function() {
        return this.ele
    },
    setContent: function(e) {
        this.content.innerHTML = e
    },
    setContentElement: function(e) {
        for (; this.content.firstChild;) this.content.removeChild(this.content.firstChild);
        ! function(e) {
            return e
        }(), this.content.appendChild(e)
    },
    setFadeIn: function(e) {
        this.fadeIn = e
    },
    setFadeOut: function(e) {
        this.fadeOut = e
    },
    setFadeSpeed: function(e) {
        this.fadeSpeed = e
    },
    show: function() {
        if (this.shown = !0, this.fadeIn) {
            var e = .01;
            changeOpac(this.ele, e)
        }
        document.body.appendChild(this.ele), this.ele.style.position = "absolute", (this.autoCenterX || this.autoCenterY) && this.center(), this.updateContent(), this.resizeHandlerFunc || (this.resizeHandlerFunc = this.resizeHandler.bindEventListener(this), DOM.addEventListener(window, "resize", this.resizeHandlerFunc, !1)), this.fadeIn && this.fade("in"), this.hideSelects()
    },
    fade: function e(t, i) {
        var s, n, l = 10;
        if ("in" == t) n = 1 / l, s = .1;
        else {
            if (this.ele.style.opacity) {
                var o = parseFloat(this.ele.style.opacity);
                s = isFinite(o) ? o : 0
            } else s = .99;
            n = -1 / l
        }
        var a = this.fadeSpeed;
        a || (a = 1);
        var h = l / a * 5;
        this.fadeMode = t;
        var r = this,
            e = function c() {
                return s += n, r.fadeMode && r.fadeMode != t ? void(i && i.call(r, [])) : .1 >= s ? (i && i.call(r, []), void(r.fadeMode = null)) : s >= 1 ? (i && i.call(r, []), void(r.fadeMode = null)) : (changeOpac(r.ele, s), void window.setTimeout(c, h))
            };
        e()
    },
    hide: function() {
        this.visible() && (this.fadeOut && this.ele ? this.fade("out", this._hide.bind(this)) : this._hide())
    },
    _hide: function() {
        this.hiddenCallback && this.hiddenCallback(), this.shown = !1, this.removeClickHandlers(), this.ele && document.body.removeChild(this.ele), this.resizeHandlerFunc && DOM.removeEventListener(window, "resize", this.resizeHandlerFunc), this.showSelects()
    },
    setAutoHideSelects: function(e) {
        this.autoHideSelects = e, this.updateContent()
    },
    hideSelects: function() {
        if (this.autoHideSelects && IPPU.isIE())
            for (var e, t = document.getElementsByTagName("select"), i = 0; i < t.length; i++) e = t[i], e && (DOM.getAncestorsByClassName(e, "ippu", !0).length > 0 || "hidden" != e.style.visibility && (e.style.visibility = "hidden", this.hiddenSelects.push(e)))
    },
    showSelects: function() {
        if (this.autoHideSelects)
            for (var e; e = this.hiddenSelects.pop();) e.style.visibility = ""
    },
    init: function(e) {
        var t = document.createElement("div");
        this.ele = t, this.shown = !1, this.autoCenterX = !1, this.autoCenterY = !1, this.titlebar = null, this.title = "", this.showTitlebar = !1, this.clickToClose = !1, this.modal = !1, this.clickHandlerSetup = !1, this.docOverlay = !1, this.visibleOverlay = !1, this.clickHandlerFunc = !1, this.resizeHandlerFunc = !1, this.fixedPosition = !1, this.autoCenterCallback = null, this.cancelledCallback = null, this.autoHideSelects = !1, this.hiddenCallback = null, this.fadeOut = !1, this.fadeIn = !1, this.hiddenSelects = [], this.fadeMode = null, t.style.position = "absolute", t.style.top = 0, t.style.zIndex = "1000", DOM.addClassName(t, "ippu"), this.content = document.createElement("div"), this.content.innerHTML = e, this.ele.appendChild(this.content)
    }
}), IPPU.center = function(e) {
    e.centerX(), e.centerY()
}, IPPU.centerX = function(e) {
    e.centerX()
}, IPPU.centerY = function(e) {
    e.centerY()
}, IPPU.isIE = function() {
    var e = navigator.userAgent.toLowerCase();
    return -1 != e.indexOf("msie")
}, IPPU.isSafari = function() {
    var e = navigator.userAgent.toLowerCase();
    return -1 != e.indexOf("safari")
};
/* <<< file end: js/ippu.js */

//# map link was there [ippu.js.map]
/* >>> file start: js/lj_ippu.js */
//= require js/deprecated/dom.js
//= require js/ippu.js
LJ_IPPU = new Class(IPPU, {
    init: function(e) {
        e || (e = ""), LJ_IPPU.superClass.init.apply(this, []), this.uniqId = this.generateUniqId(), this.cancelThisFunc = this.cancel.bind(this), this.setTitle(e), this.setTitlebar(!0), this.setTitlebarClass("lj_ippu_titlebar"), this.addClass("lj_ippu"), this.setAutoCenterCallback(IPPU.center), this.setDimensions(514, "auto"), this.setFixedPosition(!0), this.setClickToClose(!0), this.setAutoHideSelects(!0)
    },
    setTitle: function(e) {
        var t = "      <div style='float:right; padding-right: 8px'><img src='" + Site.imgprefix + "/CloseButton.gif?v=7618' width='15' height='15' id='" + this.uniqId + "_cancel' /></div>" + e;
        LJ_IPPU.superClass.setTitle.apply(this, [t])
    },
    generateUniqId: function() {
        var e = new Date;
        return "lj_ippu_" + e.getHours() + e.getMinutes() + e.getMilliseconds()
    },
    show: function() {
        LJ_IPPU.superClass.show.apply(this);
        var e = this.setup_lj_ippu.bind(this);
        this.timerSetup = window.setTimeout(e, 300)
    },
    setup_lj_ippu: function(e) {
        var t = this.cancelThisFunc;
        $(this.uniqId + "_cancel").onclick = function() {
            t()
        }
    },
    hide: function() {
        clearInterval(this.timerSetup), LJ_IPPU.superClass.hide.apply(this)
    }
}), LJ_IPPU.showNote = function(e, t, i, s) {
    var n = document.createElement("div");
    return n.innerHTML = e, LJ_IPPU.showNoteElement(n, t, i, s)
}, LJ_IPPU.showErrorNote = function(e, t, i) {
    return LJ_IPPU.showNote(e, t, i, "ErrorNote")
}, LJ_IPPU.showNoteElement = function(e, t, i, s) {
    var n = new IPPU;
    n.init();
    var o = document.createElement("div");
    DOM.addClassName(o, "Inner"), o.appendChild(e), n.setContentElement(o), n.setTitlebar(!1), n.setFadeIn(!0), n.setFadeOut(!0), n.setFadeSpeed(4), n.setDimensions("auto", "auto"), s || (s = "Note"), n.addClass(s);
    var a;
    if (!t || (a = DOM.getAbsoluteDimensions(t))) {
        var l = DOM.getClientDimensions();
        if (l) {
            if (a) {
                n.setAutoCenter(!1, !1), n.setLocation(a.absoluteLeft, a.absoluteBottom + 4), n.show();
                var u = DOM.getAbsoluteDimensions(n.getElement());
                u.absoluteRight > l.x && n.setLocation(l.x - u.offsetWidth - 30, a.absoluteBottom + 4)
            } else n.setAutoCenter(!0, !0), n.show();
            return n.setClickToClose(!0), n.moveForward(), void 0 === i && (i = 5e3), i && window.setTimeout(function() {
                n && n.hide()
            }, i), n
        }
    }
}, LJ_IPPU.textPrompt = function(e, t, i, s) {
    s = s || {}, e += "";
    var n = new LJ_IPPU(e),
        o = document.createElement("div");
    DOM.addClassName(o, "ljippu_textprompt"), t && o.appendChild(_textDiv(t));
    var a = document.createElement("textarea");
    DOM.addClassName(a, "htmlfield"), a.cols = 40, a.rows = 5, o.appendChild(a);
    var l = document.createElement("div");
    DOM.addClassName(l, "submitbtncontainer");
    var u = document.createElement("input");
    DOM.addClassName(u, "submitbtn"), u.type = "button", u.value = "Insert", l.appendChild(u), o.appendChild(l), n.setContentElement(o), n.setAutoCenter(!0, !0), n.setDimensions(s.width || "60%", "auto"), n.show(), a.focus(), DOM.addEventListener(u, "click", function(e) {
        n.hide(), i && i.apply(null, [a.value])
    })
};
/* <<< file end: js/lj_ippu.js */

//# map link was there [lj_ippu.js.map]
/* >>> file start: js/ljwidget_ippu.js */
//= require js/ljwidget.js
//= require js/lj_ippu.js
LJWidgetIPPU = new Class(LJWidget, {
    init: function(t, e) {
        var i = t.title,
            n = t.widgetClass,
            s = t.authToken,
            a = t.nearElement,
            l = t.not_view_close;
        e || (e = {}), this.reqParams = e;
        var o = new LJ_IPPU(i, a);
        this.ippu = o;
        var d = document.createElement("div");
        d.id = "LJWidgetIPPU_" + Unique.id(), o.setContentElement(d), t.width && t.height && o.setDimensions(t.width, t.height), t.overlay && (IPPU.isIE() ? (this.ippu.setModal(!0), this.ippu.setOverlayVisible(!0), this.ippu.setClickToClose(!1)) : (this.ippu.setModal(!0), this.ippu.setOverlayVisible(!0))), t.center && o.center(), o.show(), l && (o.titlebar.getElementsByTagName("img")[0].style.display = "none");
        var h = document.createElement("div");
        h.style.fontSize = "1.5em", h.style.fontWeight = "bold", h.style.margin = "5px", h.style.textAlign = "center", h.innerHTML = "Loading...", this.loadingText = h, d.appendChild(h);
        var u = [d.id, n, s];
        LJWidgetIPPU.superClass.init.apply(this, u);
        var r = this;
        return o.setCancelledCallback(function() {
            r.cancel && r.cancel()
        }), n ? (this.widgetClass = n, this.authToken = s, this.title = i, this.nearEle = a, window.setInterval(this.animateLoading.bind(this), 20), this.loaded = !1, this.loadContent(), this) : null
    },
    animateCount: 0,
    animateLoading: function(t) {
        var e = this.loadingText;
        if (this.loaded || !e) return void window.clearInterval(t);
        this.animateCount += .05;
        var i = (Math.sin(this.animateCount) + 1) / 2 * 255,
            n = Math.round(i).toString(16);
        1 == n.length && (n = "0" + n), n += n + n, e.style.color = "#" + n, this.ippu.center()
    },
    doAjaxRequest: function(t) {
        t || (t = {}), t._widget_ippu = 1, document.getElementById("LJ__Setting__InvisibilityGuests_invisibleguests_self") && (t["Widget[IPPU_SettingProd]_LJ__Setting__InvisibilityGuests_invisibleguests"] = 1 == document.getElementById("LJ__Setting__InvisibilityGuests_invisibleguests_self").checked ? 1 : 1 == document.getElementById("LJ__Setting__InvisibilityGuests_invisibleguests_anon").checked ? 2 : 0), LJWidgetIPPU.superClass.doAjaxRequest.apply(this, [t])
    },
    close: function() {
        this.ippu.hide()
    },
    loadContent: function() {
        var t = this.reqParams;
        this.updateContent(t)
    },
    method: "POST",
    onData: function(t) {
        this.loaded = !0
    },
    render: function(t) {}
});
/* <<< file end: js/ljwidget_ippu.js */

//# map link was there [ljwidget_ippu.js.map]
/* >>> file start: js/jquery/jquery.center.js */
! function(t) {
    return t
}(),
function(t) {
    t.fn.center = function() {
        var i = t(window),
            h = ({
                width: i.width(),
                height: i.height()
            }, this.first()),
            e = {
                width: h.outerWidth(),
                height: h.outerHeight()
            };
        return h.css({
            position: "fixed",
            left: "50%",
            top: "50%",
            marginTop: -(e.height / 2),
            marginLeft: -(e.width / 2)
        }), this
    }
}(jQuery);
/* <<< file end: js/jquery/jquery.center.js */

//# map link was there [jquery.center.js.map]
/* >>> file start: js/jquery/dialogs.js */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
};
//= require js/jquery/jquery.center.js
LJ.UI.registerTemplate('templates-Widgets-dialogs', "<div class=\"b-popup\"> <div class=\"b-popup-outer\"> <div class=\"b-popup-inner\"> <div class=\"b-dialog\"> {{if $data.title}} <div class=\"b-dialog-header\"> {{html $data.title}} </div> {{/if}} {{if ($data.type == \'prompt\' || $data.text)}} <div class=\"b-dialog-body\"> {{if $data.text}} {{html $data.text}} {{/if}} {{if ($data.type == \'prompt\')}} <div class=\"b-dialog-prompt-wrap\"> <input type=\"text\" name=\"dialog-prompt\" class=\"b-dialog-prompt\" value=\"\" {{if $data.placeholder}}placeholder=\"{{html $data.placeholder}}\"{{/if}} /> </div> {{/if}} </div> {{/if}} <div class=\"b-dialog-footer\"> {{if $data.is_mac}} {{if $data.type != \'alert\'}} <button type=\"button\" name=\"dialog-cancel\" class=\" b-dialog-btn b-dialog-cancel b-flatbutton b-flatbutton-neutral \" > {{html $data.no.text}} </button> {{/if}} <button type=\"button\" name=\"dialog-ok\" class=\" b-dialog-btn b-dialog-ok b-flatbutton \" > {{html $data.yes.text}} </button> {{else}} <button type=\"button\" name=\"dialog-ok\" class=\" b-dialog-btn b-dialog-ok b-flatbutton \" > {{html $data.yes.text}} </button> {{if $data.type != \'alert\'}} <button type=\"button\" name=\"dialog-cancel\" class=\" b-dialog-btn b-dialog-cancel b-flatbutton b-flatbutton-neutral \" > {{html $data.no.text}} </button> {{/if}} {{/if}} </div> </div> <i class=\"i-popup-close\"></i> </div> </div> </div> ", 'JQuery.stat');
! function(t) {
    return t
}(),
function(t) {
    "use strict";
    LJ.dialogs = {
        defaults: {
            alert: {
                title: "",
                fade: !0,
                show: t.noop,
                hide: t.noop,
                defaultButton: "yes",
                yes: {
                    text: LJ.ml("dialogs.yes"),
                    action: t.noop
                }
            },
            confirm: {
                title: "",
                fade: !0,
                show: t.noop,
                hide: t.noop,
                defaultButton: "yes",
                yes: {
                    text: LJ.ml("dialogs.yes"),
                    action: t.noop
                },
                no: {
                    text: LJ.ml("dialogs.no"),
                    action: t.noop
                }
            },
            prompt: {
                title: "",
                fade: !0,
                show: t.noop,
                hide: t.noop,
                defaultButton: "input",
                value: "",
                yes: {
                    text: LJ.ml("dialogs.yes"),
                    action: t.noop
                },
                no: {
                    text: LJ.ml("dialogs.no"),
                    action: t.noop
                }
            }
        }
    };
    var o = function(t) {
        function o(o) {
            var n, e = y.type,
                i = null;
            m || (m = [], m.push(d.find(g.yesButton)), "prompt" === e && m.push(d.find(g.promptInput)), "prompt" !== e && "confirm" !== e || m.push(d.find(g.noButton)), n = d.find(g.body).find("a,select,input,button").not(g.yesButton).not(g.noButton).not(g.promptInput), n.length && (m = m.concat(n.toArray().map(t)))), m.some(function(t, o) {
                var n = t.is(":focus");
                return n && (i = o), n
            }), null === i ? i = 0 : (i += o, i > m.length - 1 ? i = 0 : 0 > i && (i = m.length - 1)), m[i].focus()
        }

        function n() {
            s = t("<div />", {
                "class": "b-fader"
            }).prependTo(document.body)
        }

        function e(o) {
            var e = "object" === _typeof(o.text),
                l = null,
                u = null;
            y = o, e && (l = t('<div class="b-dialog-body" />').append(o.text), o.text = ""), d = LJ.UI.template("templates-Widgets-dialogs", o), e && (u = d.find(g.header), u.length ? u.after(l) : d.find(g.dialog).prepend(l)), d.prependTo(document.body).center(), o.fade && (s = t(".b-fader"), s.length ? s.show() : n()), d.on("click", g.closeButton, i), "no" === o.defaultButton && "alert" !== o.type ? d.find(g.noButton).focus() : "prompt" === o.type && "yes" !== o.defaultButton ? d.find(g.promptInput).focus() : d.find(g.yesButton).focus(), o.show.call(d, o)
        }

        function i() {
            s && s.hide(), m = null, y.hide.call(d, y), d.remove(), d = null
        }

        function l(t, o) {
            if (!("string" == typeof t && 0 !== t.length || "object" === ("undefined" == typeof t ? "undefined" : _typeof(t)) && t.jquery)) throw new Error("You should provide text or node as `text` param for the dialog");
            if (o && "object" !== ("undefined" == typeof o ? "undefined" : _typeof(o))) throw new Error("Dialog options should be an object");
            if (d) throw new Error("You are not able to create multiple dialogs at the time");
            o && o.yes && ("function" == typeof o.yes ? o.yes = {
                action: o.yes
            } : "string" == typeof o.yes && (o.yes = {
                text: o.yes
            })), o && o.no && ("function" == typeof o.no ? o.no = {
                action: o.no
            } : "string" == typeof o.no && (o.no = {
                text: o.no
            }))
        }

        function u() {
            d.find(g.yesButton).trigger("click")
        }

        function c() {
            d.find(g.noButton).trigger("click")
        }

        function a(t) {
            return function() {
                try {
                    return t.apply(this, arguments), {
                        yes: u,
                        no: c
                    }
                } catch (o) {
                    console.error(o.message)
                }
            }
        }
        var p, r, f, d = null,
            s = null,
            y = null,
            m = null,
            g = {
                yesButton: ".b-dialog-ok",
                noButton: ".b-dialog-cancel",
                closeButton: ".i-popup-close",
                promptInput: ".b-dialog-prompt",
                header: ".b-dialog-header",
                dialog: ".b-dialog",
                body: ".b-dialog-body"
            };
        return LJ.Support.isMobile() || t(document).on("keydown", function(t) {
            if (d) switch (t.which) {
                case 27:
                    d.find(g.closeButton).trigger("click");
                    break;
                case 9:
                    o(t.shiftKey ? -1 : 1), t.preventDefault()
            }
        }), p = function(o, n) {
            l(o, n), n = t.extend(!0, {}, LJ.dialogs.defaults.alert, {
                type: "alert",
                text: o
            }, n || {}), e(n), d.on("click", g.yesButton, function() {
                void 0 === n.yes.action.call(d, i) && i()
            })
        }, r = function(o, n) {
            l(o, n), n = t.extend(!0, {}, LJ.dialogs.defaults.confirm, {
                type: "confirm",
                text: o
            }, n || {}), e(n), d.on("click", g.yesButton, function() {
                void 0 === n.yes.action.call(d, !0, i) && i()
            }), d.on("click", g.noButton, function() {
                n.no.action.call(d, !1), i()
            })
        }, f = function(o, n) {
            l(o, n), n = t.extend(!0, {}, LJ.dialogs.defaults.prompt, {
                type: "prompt",
                text: o
            }, n || {}), e(n), n.value && d.find(g.promptInput).val(n.value), d.on("click", g.yesButton, function() {
                void 0 === n.yes.action.call(d, d.find(g.promptInput).val()) && i()
            }), d.find(g.noButton).on("click", function() {
                n.no.action.call(d), i()
            }), LJ.Support.isMobile() || d.find(g.promptInput).on("keyup", function(t) {
                13 === t.which && d.find(g.yesButton).trigger("click")
            })
        }, {
            alert: a(p),
            confirm: a(r),
            prompt: a(f)
        }
    }(t);
    t.extend(!0, LJ.dialogs, o)
}(jQuery);
/* <<< file end: js/jquery/dialogs.js */

//# map link was there [dialogs.js.map]
/* >>> file start: js/scheme/schemius/controlstrip.js */
//= require js/ljwidget_ippu.js
//= require js/jquery/dialogs.js
! function(e) {
    return e
}(),
function() {
    LJ.define("LJ.Schemius.controlstrip"), LJ.Schemius.controlstrip.init = function(e) {
        var i = e.jQuery,
            n = i(".js--controlstrip");
        if (n.length) {
            var r = n.find(".js--user_status"),
                s = n.find(".js--user_status_dash"),
                t = n.find(".js--item-friending.js--add"),
                o = n.find(".js--item-friending.js--modify"),
                a = n.find(".js--item-subscribe.js--add"),
                d = n.find(".js--item-subscribe.js--modify"),
                u = n.find(".js--item-subscribe.js--disabled"),
                l = LJ.get("current_journal.username"),
                c = LJ.Support.isMobile(),
                f = {
                    subscriptions: {
                        remote: {},
                        journal: {}
                    },
                    friendLists: {
                        remote: {},
                        journal: {}
                    },
                    friendingStatus: r.html(),
                    friendingBlocker: null,
                    subscriptionBlocker: null
                };
            f.friendingStatus && (f.friendingStatus = f.friendingStatus.trim());
            var m = function() {
                    f.friendLists.remote.journal ? (t.hide(), o.show()) : (t.show(), f.friendingBlocker && !c ? t.find("a").addClass("js--disabled") : t.find("a").removeClass("js--disabled"), o.hide())
                },
                g = function() {
                    return f.friendLists.remote.journal ? (a.hide(), d.hide(), void u.show()) : (u.hide(), void(f.subscriptions.remote.journal ? (a.hide(), d.show()) : (a.show(), f.subscriptionBlocker && !c ? a.find("a").addClass("js--disabled") : a.find("a").removeClass("js--disabled"), d.hide())))
                },
                b = function() {
                    m(), g(), r.html(f.friendingStatus), r.attr("title", f.friendingStatus), f.friendingStatus ? (r.show(), s.show()) : (r.hide(), s.hide())
                },
                j = function(e) {
                    if (e) {
                        var i = e.data;
                        i && (f.friendLists.remote.journal = i.is_friend, f.subscriptions.remote.journal = i.is_subscriber, f.friendingStatus = i.controlstrip_status, b(i))
                    }
                },
                h = function(e, i) {
                    i && LJ_IPPU.showNote(i, e)
                },
                p = function(e) {
                    e && LJ.dialogs.alert(e, {
                        yes: {
                            text: "OK"
                        }
                    })
                },
                L = function() {
                    return LJ.get("remote") ? Promise.all([LJ.Api.call("relations.can_add_friends", {
                        target: l
                    }), LJ.Api.call("relations.can_add_subscribers", {
                        target: l
                    })]).then(function(e) {
                        e[0] && e[1] && (e[0].can_add_friends ? f.friendingBlocker = null : f.friendingBlocker = {
                            message: e[0].add_friends_error
                        }, e[1].can_add_subscribers ? f.subscriptionBlocker = null : f.subscriptionBlocker = {
                            message: e[1].add_subscribers_error
                        })
                    }) : Promise.resolve()
                };
            LJ.Event.on("relations.changed", function(e) {
                j(e), L().then(b)
            }), t.on("click", function(e) {
                if (!f.friendLists.remote.journal) {
                    e.preventDefault();
                    var i = f.friendingBlocker;
                    return i ? void(c ? p(i.message) : h(t[0], i.message)) : void LJ.Api.call("relations.addfriend", {
                        target: l
                    }).then(function(e) {
                        return LJ.Event.trigger("relations.changed", {
                            action: "addFriend",
                            username: l,
                            data: e
                        })
                    })
                }
            }), a.on("click", function(e) {
                if (!f.subscriptions.remote.journal) {
                    e.preventDefault();
                    var i = f.subscriptionBlocker;
                    return i ? void(c ? p(i.message) : h(a[0], i.message)) : void LJ.Api.call("relations.addfriend", {
                        target: l,
                        is_subscriber: 1
                    }).then(function(e) {
                        return LJ.Event.trigger("relations.changed", {
                            action: "addFriend",
                            username: l,
                            data: e
                        })
                    })
                }
            }), n.attr("data-remote-friends-journal") && (f.friendLists.remote.journal = !0), n.attr("data-remote-subscribed-to-journal") && (f.subscriptions.remote.journal = !0), L().then(b)
        }
    }
}();
/* <<< file end: js/scheme/schemius/controlstrip.js */

//# map link was there [controlstrip.js.map]
/* >>> file start: js/scheme/schemius.js */
//= require js/core/angular/api.js
//= require js/lib/jquery.selectric.min.js
//= require js/captcha.js
//= require js/scheme/schemius/feedback.js
//= require js/notifications/main.js
//= require js/facebookMigration/migration.js
//= require js/scheme/schemius/controlstrip.js
! function(e) {
    return e
}(),
function(e) {
    function o() {
        function o(e) {
            return !!(e.ctrlKey || e.metaKey && LJ.Support.isMac)
        }

        function s(e) {
            e && (e.stopPropagation(), e.preventDefault()), x.removeClass(I), x.removeClass(v), d.removeClass(I), d.removeClass(v)
        }

        function n(o) {
            o && (o.preventDefault(), o.stopPropagation()), u(), LJ.Event.trigger("Messages:closeByMenus"), d.addClass(v), x.addClass(I), setTimeout(function() {
                e("#user").focus()
            }, 300)
        }

        function t() {
            d.hasClass(v) ? s() : n()
        }

        function a(e) {
            e && LJ.Api.call("lang.set", {
                lang: e
            }, function() {
                location.reload()
            })
        }

        function i(o) {
            g.toggleClass(y, o), o ? e(".b-loginform-click-trap").removeClass("b-loginform-click-trap--show") : (e(".b-loginform-click-trap").addClass("b-loginform-click-trap--show"), e(".b-loginform").removeClass("openid-auth-state"))
        }
        var l, r, c, u, d, p, m, h, g, f, v, b, C, k, w, j, L, y, J = LJ.Flags.isEnabled("medius_schemius"),
            x = e(document.body),
            A = e(".s-header"),
            S = e(J ? ".js-header-search-input" : ".s-inline-search-input"),
            T = e(J ? ".js-header-search-button" : ".s-do-item-search-btn"),
            _ = "p-show-search",
            D = !1,
            I = "p-loginform",
            M = e(J ? ".js-header-nav-lang" : ".s-nav-item-lang"),
            P = "s-nav-item-lang-open",
            E = function(e) {
                o(e) || (A.hasClass(_) && S.val() && T.prop("type", "submit"), A.toggleClass(_), A.hasClass(_) && (D = !0, setTimeout(function() {
                    S.focus()
                }, 500)))
            },
            O = e(".s-header-search__form");
        navigator.userAgent.match(/(iPod|iPhone|iPad)/i) && O.each(function() {
            e(this).removeAttr("target")
        }), O.on("submit", function() {
            var e = S.val(),
                o = e.split(" ").filter(function(e) {
                    return e
                }),
                s = o.every(function(e) {
                    return e.length > 1 && 0 === e.indexOf("#")
                });
            S.attr("name", s ? "tags" : "q")
        }), LJ && LJ.Util && LJ.Util.Action && (LJ.Util.Action.login = n), T.on("click", E), T.on("blur", function() {
            "submit" === T.prop("type") && (T.prop("type", "button"), S.val(""))
        }), S.on("click", function() {
            D = !0
        }), x.on("click", function() {
            D || (A.removeClass(_), M.removeClass(P)), D = !1
        }), x.on("gesturestart", function(o) {
            (e("html").hasClass("p-nav-common-menu-open") || e("html").hasClass("p-nav-user-menu-open")) && o.preventDefault()
        }), navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv[ :]11/) && e("html").addClass("html-ie11"), navigator.appVersion.match(/MSIE\s10/) && e("html").addClass("html-ie10"), d = e("html"), d.addClass(LJ.Support.isMobile() ? "html-mobile" : "html-desktop"), ~navigator.userAgent.toLowerCase().indexOf("android") ? d.addClass("html-android") : ~navigator.userAgent.toLowerCase().indexOf("iphone") || ~navigator.userAgent.toLowerCase().indexOf("ipad") ? d.addClass("html-ios") : ~navigator.userAgent.toLowerCase().indexOf("windows phone") && d.addClass("html-wphone"), e("[data-lang]").on("click", function() {
            a(e(this).data("lang"))
        }), M.on("click", function(e) {
            o(e) || (e.preventDefault(), M.toggleClass(P), D = M.hasClass(P))
        }), e(".s-lang-select").selectric({
            customClass: {
                prefix: "b-selectus",
                postfixes: "Input Items Open Disabled TempShow HideSelect Wrapper Hover Responsive Above Scroll",
                camelCase: !1,
                overwrite: !1
            }
        }).on("change", function() {
            a(e(this).val())
        }), e(".selectricus").selectric({
            customClass: {
                prefix: "b-selectus",
                postfixes: "Input Items Open Disabled TempShow HideSelect Wrapper Hover Responsive Above Scroll",
                camelCase: !1,
                overwrite: !1
            },
            expandToItemText: !0,
            disableOnMobile: !1
        }), e(".b-message-mobile-close").one("click", function() {
            e(".b-message-mobile").hide()
        }), k = e(J ? ".js-header-nav-drop-master" : ".s-drop-master"), w = J ? "s-header-nav-drop--open" : "s-drop-open", j = LJ.Support.isMobile(), L = !1, j || (C = e(":lj-bubble"), k.on("mouseenter", function() {
            var o = e(this),
                s = 300;
            L && (clearTimeout(b), s = 0), b = setTimeout(function() {
                k.removeClass(w), o.addClass(w), L = !0, C.bubble("hide")
            }, s)
        }).on("mouseleave", function() {
            var o = e(this);
            return L ? void(b = setTimeout(function() {
                o.removeClass(w), L = !1
            }, 500)) : (clearTimeout(b), void o.removeClass(w))
        })), j && (k.on("click", function(o) {
            var s = e(this),
                n = 0 !== s.find("li").length,
                t = e(o.target).closest("span").is(".s-header-extra-menu-item-link-icon");
            "input" !== o.target.tagName.toLowerCase() && (s.hasClass(w) || !n || t || o.preventDefault(), s.hasClass(w) || t || (L = !0, k.removeClass(w), o.stopPropagation(), e(":lj-bubble").bubble("hide")), s.toggleClass(w))
        }), x.on("click", function(o) {
            var s = 0 === e(o.target).closest(k).length,
                n = e(o.target).is(".b-popup");
            n && (o.stopPropagation(), e(":lj-bubble").bubble("hide")), L && s && (L = !1, k.removeClass(w), o.preventDefault())
        }), LJ.Support.isMobile && LJ.Support.browser.safari && x.addClass("iphone"), e(".l-flatslide-menu-active, .l-flatslide-menu-expander").click(function(o) {
            o.preventDefault(), e(this).closest(".l-flatslide-menu").toggleClass("l-flatslide-menu-expanded")
        }), e(".s-header-search, .s-header-item-search__form").removeAttr("target")), d = e("html"), p = e(".s-body"), m = e(J ? ".js-header-menu-button" : ".s-nav-control-common"), h = e(J ? ".js-header-login" : ".s-nav-control-user, .s-nav-control-login"), f = "p-nav-common-menu-open", v = "p-nav-user-menu-open", m.on("click", function() {
            LJ.Event.trigger("Messages:closeByMenus"), d.toggleClass(f), s()
        }), h.on("click", t), u = function() {
            d.removeClass(f), d.removeClass(v)
        }, p.on("click", function() {
            u(), s()
        }), e(".s-header-menu-head__drop").click(function() {
            var o = e(this).closest(".s-header-menu-drop"),
                s = o.find(".s-header-menu-list-sub"),
                n = "s-header-menu-drop--open";
            if (o.is("." + n)) s.css("max-height", "");
            else {
                var t = s.children().toArray().reduce(function(o, s) {
                    return o + e(s).height()
                }, 0);
                s.css("max-height", t)
            }
            o.toggleClass(n)
        }), e(J ? ".js-header-login" : ".s-nav-item-login").on("click", n), e(".js-loginform-close").on("click", s), e(document).on("keyup", function(e) {
            "Escape" !== e.key && 27 !== e.keyCode || s(e)
        }), e(".b-fader").on("click", s), g = e(".b-loginform-body > .b-loginform-field"), y = "active", J ? e(".lj-openid-auth-button").on("click", function(o) {
            o.preventDefault(), i(!1), e(".b-loginform").addClass("openid-auth-state")
        }) : e(".lj-openid-auth-button").on("click", function(o) {
            o.preventDefault(), e(".b-loginform").toggleClass("openid-auth-state"), e(".b-loginform").hasClass("openid-auth-state") ? e("#openid").focus() : e("#user").focus()
        }), J && (e(".js-login-close").on("click", function(e) {
            i(!1), s(e)
        }), e(".b-loginform-click-trap").on("click", function() {
            return i(!0)
        }), e(".b-loginform-toggle-link").on("click", function() {
            return i(!1)
        }), LJ.Flags.isEnabled("notification_center") && angular.bootstrap(J ? ".js-header-notifications" : ".mds-do", ["Notifications"])), LJ.Event.on("userpic.changed", function(o) {
            e(".s-userpic").css("backgroundImage", "url(" + o + ")")
        }), !LJ.Flags.isEnabled("ljwelcomevideo") || j || LJ.get("remote") || LJ.Cookie.get("welcome_ljvideo") || 0 !== LJ.get("remote_is_sup") || e(".appwidget-login").length || LJ.injectScript("https://www.youtube.com/player_api").then(function() {
            function o(e) {
                0 !== e.data && 2 !== e.data || n.addClass("s-ljvideo-end"), 1 === e.data && n.removeClass("s-ljvideo-end")
            }
            var s, n = e(".s-ljvideo");
            x.addClass("p-ljvideo"), window.onYouTubePlayerAPIReady = function() {
                s = new window.YT.Player("s-ljvideo-player", {
                    width: "640",
                    height: "360",
                    videoId: "wq0YmQ4xIeU",
                    playerVars: {
                        rel: 0
                    },
                    events: {
                        onStateChange: o
                    }
                })
            }, e(".b-fader, .s-ljvideo-close").on("click", function() {
                x.hasClass("p-ljvideo") && (x.removeClass("p-ljvideo"), s.destroy(), LJ.Cookie.setGlobal("welcome_ljvideo", 1, {
                    expires: 14
                }))
            })
        }), c = e(".s-header .i-supus-new, .s-header-messages-count"), LJ.Event.on("message:count:change", function(e) {
            e > 0 ? (c.html(e), c.removeClass("s-header-messages-count-empty")) : c.addClass("s-header-messages-count-empty")
        }), r = e(".flatquestion-nojs-friendsgroups"), l = e(".flatquestion-popup-field-showanswer"), e(".flatquestion-popup-select").on("change", function() {
            "custom" === e(this).val() ? r.show() : r.hide(), "public" === e(this).val() ? l.show() : l.hide()
        }), LJ.Schemius.controlstrip.init({
            jQuery: e
        })
    }
    e(function() {
        0 === e(".s-header").length ? e("html").on("controlstrip-initialized", o) : o()
    })
}(jQuery);
/* <<< file end: js/scheme/schemius.js */

//# map link was there [schemius.js.map]
/* >>> file start: js/widgets/angular/login.js */
//= require js/core/angular/api.js
//= require_ml loginform.error.enterpassword
//= require_ml loginform.error.purgeduser
//= require_ml loginform.error.enteruser
//= require_ml loginform.error.ipbanned
//= require_ml loginform.error.ipbanned.sysban
//= require_ml loginform.error.ipbanned.distribution
//= require_ml loginform.error.openid
//= require_ml loginform.error.password
//= require_ml loginform.error.usercreate
//= require_ml error.nocommlogin
//= require_ml error.login.limit.exceeded
//= require_ml error.expiredchal
//= require_ml error.account_locked.text
//= require_ml error.user_is_child.text
! function(r) {
    return r
}(),
function() {
    function r(r) {
        r.html5Mode({
            enabled: !0,
            requireBase: !1
        })
    }

    function e() {
        return {
            controllerAs: "loginForm",
            controller: n,
            link: function(r, e) {
                e.find("a:not([target])").attr("target", "_self")
            }
        }
    }

    function o(r) {
        var e = r.type,
            o = r.url,
            n = r.$window,
            t = s("instant_relation_source", o),
            a = function(r) {
                switch (r) {
                    case "instantRelationTry":
                        return "try";
                    case "instantRelationSuccess":
                        return "ok";
                    default:
                        return null
                }
            }(e),
            i = function(r) {
                switch (r) {
                    case "before_post":
                        return "username";
                    case "after_post":
                        return "post";
                    case "ctx_popup":
                        return "ctxpopup";
                    default:
                        return null
                }
            }(t);
        return a && i && n.yaCounter27737346 ? n.yaCounter27737346.reachGoal("subscribe-" + i + "__login-" + a) : null
    }

    function n(r, e, n, s, t, a) {
        var i = this,
            l = angular.element(".b-fader");
        i.hasError = !1, i.siteroot = LJ.get("siteroot"), i.isMobile = LJ.Support.isMobile() || !!~navigator.userAgent.toLowerCase().indexOf("android"), i.close = function(r) {
            r.target === r.currentTarget && (r && r.preventDefault(), n(function() {
                l.triggerHandler("click")
            }))
        };
        var u = void 0;
        i.loginUser = function(e) {
            u = decodeURIComponent(a.absUrl()), o({
                type: "instantRelationTry",
                url: u,
                $window: r
            }), e.preventDefault(), i.model.username && i.model.password ? t.call("user.login", {
                user: i.model.username,
                password: i.model.password,
                expire: i.model.expire ? "never" : "remeber me"
            }, {
                silent: !0
            }).then(i.sucsessLogin)["catch"](i.onError) : i.model.username ? i.model.password || i.onError({
                message: "invalid_password"
            }) : i.onError({
                message: "invalid_user"
            })
        }, i.loginOpenID = function(r) {
            i.model.openid || (r.preventDefault(), i.onError({
                message: "invalid_id"
            }))
        }, i.sucsessLogin = function() {
            o({
                type: "instantRelationSuccess",
                url: u,
                $window: r
            });
            var e = window.location.pathname;
            ~e.indexOf("logout") ? window.location.replace("/login.bml") : window.location.reload()
        }, i.onError = function(r) {
            switch (i.resetError(), i.hasError = !0, r.message) {
                case "unknown_user":
                    i.errorUsername = !0, i.errorMessage = s.trustAsHtml(LJ.ml("loginform.error.usercreate", {
                        domain: i.siteroot,
                        username: i.model.username
                    }));
                    break;
                case "purged_user":
                    i.errorUsername = !0, i.errorMessage = s.trustAsHtml(LJ.ml("loginform.error.purgeduser"));
                    break;
                case "community_disabled_login":
                    i.errorUsername = !0, i.errorMessage = s.trustAsHtml(LJ.ml("error.nocommlogin"));
                    break;
                case "invalid_user":
                    i.errorUsername = !0, i.errorMessage = s.trustAsHtml(LJ.ml("loginform.error.enteruser"));
                    break;
                case "bad_password":
                    i.errorPassword = !0, i.errorMessage = s.trustAsHtml(LJ.ml("loginform.error.password"));
                    break;
                case "invalid_password":
                    i.errorPassword = !0, i.errorMessage = s.trustAsHtml(LJ.ml("loginform.error.enterpassword"));
                    break;
                case "banned_ip":
                    i.errorUsername = !0, i.errorMessage = s.trustAsHtml(LJ.ml("loginform.error.ipbanned"));
                    break;
                case "banned_ip_sysban":
                    i.errorUsername = !0, i.errorMessage = s.trustAsHtml(LJ.ml("loginform.error.ipbanned.sysban"));
                    break;
                case "banned_ip_distrib":
                    i.errorUsername = !0, i.errorMessage = s.trustAsHtml(LJ.ml("loginform.error.ipbanned.distribution"));
                    break;
                case "invalid_id":
                    i.errorId = !0, i.errorMessage = s.trustAsHtml(LJ.ml("loginform.error.openid"));
                    break;
                case "ratelimit_exceeded":
                    i.errorUsername = !0, i.errorMessage = s.trustAsHtml(LJ.ml("loginform.error.openid"));
                    break;
                case "expired_challenge":
                    i.errorUsername = !0, i.errorMessage = s.trustAsHtml(LJ.ml("error.expiredchal"));
                    break;
                case "account_locked":
                    i.errorUsername = !0, i.errorMessage = s.trustAsHtml(LJ.ml("error.account_locked.text"));
                    break;
                case "is_child":
                    i.errorUsername = !0, i.errorMessage = s.trustAsHtml(LJ.ml("error.user_is_child.text"));
                    break;
                default:
                    i.errorUsername = !0, i.errorMessage = "UnknownError"
            }
        }, n(function() {
            document.querySelectorAll("input:-webkit-autofill").length && angular.element(".b-loginform-btn--auth").removeClass("b-loginform-btn--disabled"),
                function(r) {
                    return r
                }()
        }, 100), i.resetError = function() {
            i.errorError = i.errorUsername = i.errorPassword = i.errorIp = i.errorId = !1
        }, e.$watch(function() {
            return i.model
        }, function() {
            i.hasError && i.resetError()
        }, !0)
    }
    r.$inject = ["$locationProvider"], n.$inject = ["$window", "$scope", "$timeout", "$sce", "Api", "$location"], angular.module("Login", ["LJ.Api", "LJ.Directives"]).config(r).controller("LoginCtrl", n).directive("ljLogin", e),
        function(r) {
            return r
        }(), angular.element(window.document).ready(function() {
            if (!angular.element("body[ng-app]").length > 0) try {
                angular.bootstrap(".b-loginform", ["Login"])
            } catch (r) {
                console.info(r.message, r.stack)
            }
        });
    var s = function(r, e) {
        r = r.replace(/[\[\]]/g, "\\$&");
        var o = new RegExp("[?&]" + r + "(=([^&#]*)|&|#|$)"),
            n = o.exec(e);
        return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
    }
}();
/* <<< file end: js/widgets/angular/login.js */

//# map link was there [login.js.map]
/* >>> file start: js/scheme/medius.js */
//= require js/widgets/angular/mediusSubscribe.js
//= require js/core/angular/api.js
! function() {
    "use strict";
    angular.element(document).ready(function() {
        if (0 !== angular.element(".mdsfooter").length) {
            var e = angular.element(".mdsfooter").find("[medius-subscribe]");
            angular.bootstrap(e, ["Medius.Subscribe"])
        }
    })
}();
/* <<< file end: js/scheme/medius.js */

//# map link was there [medius.js.map]
/* >>> file start: js/core/angular/radioGroup.js */
! function(t) {
    return t
}(),
function() {
    "use strict";

    function t() {
        function t() {
            this._models = {}
        }

        function o(o) {
            return e[o] ? e[o] : (e[o] = new t, e[o])
        }
        var e = {};
        return t.prototype.models = function() {
            return this._models
        }, t.prototype.reset = function() {
            var t, o = this._models;
            for (t in o) o.hasOwnProperty(t) && o[t] && (this._models[t] = !1);
            return this
        }, t.prototype.set = function(t, o) {
            return o ? this.reset()._models[t] = !0 : this._models[t] = !1, this
        }, t.prototype.on = function(t) {
            return this.set(t, !0)
        }, t.prototype.off = function(t) {
            return "undefined" == typeof t ? this.reset() : this.set(t, !1), this
        }, t.prototype.toggle = function(t) {
            this._models[t] ? this.off(t) : this.on(t)
        }, o
    }
    angular.module("LJ.RadioGroup", []), angular.module("LJ.RadioGroup").factory("radioGroup", t)
}();
/* <<< file end: js/core/angular/radioGroup.js */

//# map link was there [radioGroup.js.map]
/* >>> file start: js/widgets/discoverytimes.js */
//= require js/core/angular/radioGroup.js
//= require js/node_modules/angular-sanitize/angular-sanitize.js
//= require js/core/angular/api.js
//= require js/core/angular/users.js
//= require js/core/angular/ljUser.js
//= require js/medius/recommended.js
! function() {
    "use strict";

    function e() {
        var e = angular.element(".b-discoverytimes-wrapper[lj-discovery-times]");
        e.injector() || angular.bootstrap(e, ["LJ.DiscoveryTimes"])
    }

    function i() {
        function e(e, i) {
            i.removeAttr("lj-discovery-times")
        }
        return {
            scope: !0,
            link: e,
            controller: n,
            controllerAs: "times"
        }
    }

    function n(e, i, n, t, o, m) {
        function r() {
            v += 1, v >= d.items.length && (v = 0), l.on(d.items[v].itemid)
        }

        function s() {
            0 !== d.items.length && (r(), c = i(r, a), e.$on("$destroy", i.cancel.bind(i, c)))
        }
        var c, d = this,
            u = LJ.Flags.isEnabled("medius_ui") ? m : o,
            l = n("active"),
            a = 5e3,
            v = -1;
        d.items = [], d.active = l.reset().models(), d.isRecommend = !1, d.showRecommend = !1, d.showRandom = !1, d.close = function() {}, d.recommend = function() {
            u.setRecommend().then(function() {
                d.isRecommend = u.isRecommend
            })
        }, u.getRecommend().then(function() {
            d.showRecommend = u.showRecommend, d.showRandom = !d.showRecommend, d.isRecommend = u.isRecommend
        }), u.getFeed().then(function(e) {
            d.items = e.items.filter(Boolean), t.Cache.add(d.items.map(LJ.Function.get("user")))
        }).then(s)
    }

    function t(e) {
        function i() {
            return m.limit = m.itemshow, m.is_published = !0, e.call("medius.get_public_items", m).then(n)
        }

        function n(e) {
            return e.items = e.items.filter(function(e) {
                return e.author
            }).map(function(e) {
                var i = (e.cards || [{}])[0];
                return e.itemid = e.jitem_id, e.url = e.link, e.subject = i.title || e.title, e
            }), e
        }

        function t() {
            return s.showRecommend ? e.call("discovery.is_recommend", r).then(function(e) {
                "ok" === e.status && (s.isRecommend = e.is_recommend)
            }) : Promise.resolve()
        }

        function o() {
            return s.showRecommend ? e.call("discovery.recommend", r).then(function(e) {
                "ok" === e.status && (s.isRecommend = !0)
            }) : Promise.resolve()
        }
        var m = {
                itemshow: 10
            },
            r = {
                entry: Boolean(LJ.get("entry")),
                remoteid: LJ.get("remote.id"),
                journalid: LJ.get("journal.id"),
                publicEntry: LJ.get("entry.is_public"),
                ditemid: LJ.get("entry.ditemid")
            },
            s = {
                getFeed: i,
                isRecomend: !1,
                getRecommend: t,
                setRecommend: o,
                showRecommend: !1
            };
        return s
    }

    function o(e) {
        function i() {
            return e.call("discovery.get_feed", o)
        }

        function n() {
            return r.showRecommend ? e.call("discovery.is_recommend", m).then(function(e) {
                "ok" === e.status && (r.isRecommend = e.is_recommend)
            }) : Promise.resolve()
        }

        function t() {
            return r.showRecommend ? e.call("discovery.recommend", m).then(function(e) {
                "ok" === e.status && (r.isRecommend = !0)
            }) : Promise.resolve()
        }
        var o = {
                itemshow: 10
            },
            m = {
                entry: Boolean(LJ.get("entry")),
                remoteid: LJ.get("remote.id"),
                journalid: LJ.get("journal.id"),
                publicEntry: LJ.get("entry.is_public"),
                ditemid: LJ.get("entry.ditemid")
            },
            r = {
                getFeed: i,
                isRecomend: !1,
                getRecommend: n,
                setRecommend: t,
                showRecommend: m.entry && m.journalid && m.remoteid && m.publicEntry && m.journalid !== m.remoteid
            };
        return r
    }
    t.$inject = ["Api"], o.$inject = ["Api"], n.$inject = ["$scope", "$interval", "radioGroup", "Users", "DiscoveryTimesService", "MediusTimesService"], angular.element("body").ready(e), angular.module("LJ.DiscoveryTimes", ["ngSanitize", "LJ.Directives", "LJ.RadioGroup", "LJ.Api", "LJ.User", "Users", "Medius.Recommended"]), angular.module("LJ.DiscoveryTimes").directive("ljDiscoveryTimes", i).factory("MediusTimesService", t).factory("DiscoveryTimesService", o)
}();
/* <<< file end: js/widgets/discoverytimes.js */

//# map link was there [discoverytimes.js.map]