! function(e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t(require("@mol-fe/mol-fe-sync-bundle").molFeClientLogger, require("@mol-fe/mol-fe-sync-bundle").molFePageMetadata, require("@mol-fe/mol-fe-sync-bundle").molFeAsync, require("@mol-fe/mol-fe-sync-bundle").molFeTracking, require("@mol-fe/mol-fe-sync-bundle").molFeMobileutils, require("@mol-fe/mol-fe-sync-bundle").molFeDomHelpers, require("@mol-fe/mol-fe-sync-bundle").molFeMiniLodash, require("@mol-fe/mol-fe-sync-bundle").molFeComponents, require("@mol-fe/mol-fe-sync-bundle").molFeCookieReinforcer, require("@mol-fe/mol-fe-sync-bundle").molFeLazyLoadImages);
    else if ("function" == typeof define && define.amd) define([, , , , , , , , , ], t);
    else {
        var n = "object" == typeof exports ? t(require("@mol-fe/mol-fe-sync-bundle").molFeClientLogger, require("@mol-fe/mol-fe-sync-bundle").molFePageMetadata, require("@mol-fe/mol-fe-sync-bundle").molFeAsync, require("@mol-fe/mol-fe-sync-bundle").molFeTracking, require("@mol-fe/mol-fe-sync-bundle").molFeMobileutils, require("@mol-fe/mol-fe-sync-bundle").molFeDomHelpers, require("@mol-fe/mol-fe-sync-bundle").molFeMiniLodash, require("@mol-fe/mol-fe-sync-bundle").molFeComponents, require("@mol-fe/mol-fe-sync-bundle").molFeCookieReinforcer, require("@mol-fe/mol-fe-sync-bundle").molFeLazyLoadImages) : t(e.DM.molFeClientLogger, e.DM.molFePageMetadata, e.DM.molFeAsync, e.DM.molFeTracking, e.DM.molFeMobileutils, e.DM.molFeDomHelpers, e.DM.molFeMiniLodash, e.DM.molFeComponents, e.DM.molFeCookieReinforcer, e.DM.molFeLazyLoadImages);
        for (var r in n)("object" == typeof exports ? exports : e)[r] = n[r]
    }
}("undefined" != typeof self ? self : this, function(e, t, n, r, i, o, a, l, s, c) {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 185)
    }([function(t, n) {
        t.exports = e
    }, function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return l
        }), n.d(t, "b", function() {
            return s
        }), n.d(t, "e", function() {
            return c
        }), n.d(t, "f", function() {
            return u
        }), n.d(t, "g", function() {
            return d
        }), n.d(t, "d", function() {
            return f
        }), n.d(t, "a", function() {
            return p
        });
        var r = n(6),
            i = n.n(r),
            o = n(4),
            a = (n.n(o), n(2)),
            l = (n.n(a), function() {
                try {
                    try {
                        var e = document.querySelector('link[rel="canonical"]');
                        if (e && e.href) {
                            return new URL(e.href).origin
                        }
                    } catch (e) {}
                    return location.protocol + "//" + location.host.replace("dailymail.com", "dailymail.co.uk")
                } catch (e) {
                    return "https://www.dailymail.co.uk"
                }
            }()),
            s = function(e, t) {
                var n = Object.keys(e).filter(function(t) {
                    return e[t]
                }).map(function(t) {
                    return t + "=" + encodeURIComponent(e[t])
                }).join("&");
                return "" + (t || "") + n
            },
            c = function(e, t) {
                return ["resizable=1", "scrollbars=1", "status=1", "width=" + e, "height=" + t, "top=" + (window.outerHeight - t) / 2, "left=" + (window.outerWidth - e) / 2].join(",")
            },
            u = function(e, t, n) {
                o.pageEvents.publish(o.pageEvents.SOCIAL_SHARE_CLICKED, Object.assign({}, n, {
                    pageMetadata: Object(a.getPageMetadata)(),
                    placement: t,
                    site: e
                }))
            },
            d = function(e, t) {
                var n = c(1050, 650);
                window.open(s(t, e), "", n)
            },
            f = function(e) {
                if (e.hasAttribute("data-preferred-shared-network-enabled")) {
                    if ("twitter" === i.a.get("social-share-platform")) return "twitter_preferred-";
                    if ("facebook" === i.a.get("social-share-platform")) return "facebook_preferred-"
                }
                return ""
            },
            p = function(e, t) {
                var n = t.origin,
                    r = t.position;
                return n ? e + "_share_" + n + "-" + r : e + "_share-" + r
            }
    }, function(e, n) {
        e.exports = t
    }, function(e, t) {
        e.exports = n
    }, function(e, t) {
        e.exports = r
    }, function(e, t) {
        e.exports = i
    }, function(e, t, n) {
        var r, i;
        ! function(o) {
            var a = !1;
            if (r = o, void 0 !== (i = "function" == typeof r ? r.call(t, n, t, e) : r) && (e.exports = i), a = !0, e.exports = o(), a = !0, !a) {
                var l = window.Cookies,
                    s = window.Cookies = o();
                s.noConflict = function() {
                    return window.Cookies = l, s
                }
            }
        }(function() {
            function e() {
                for (var e = 0, t = {}; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) t[r] = n[r]
                }
                return t
            }

            function t(n) {
                function r(t, i, o) {
                    var a;
                    if ("undefined" != typeof document) {
                        if (arguments.length > 1) {
                            if (o = e({
                                    path: "/"
                                }, r.defaults, o), "number" == typeof o.expires) {
                                var l = new Date;
                                l.setMilliseconds(l.getMilliseconds() + 864e5 * o.expires), o.expires = l
                            }
                            o.expires = o.expires ? o.expires.toUTCString() : "";
                            try {
                                a = JSON.stringify(i), /^[\{\[]/.test(a) && (i = a)
                            } catch (e) {}
                            i = n.write ? n.write(i, t) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)), t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(/[\(\)]/g, escape);
                            var s = "";
                            for (var c in o) o[c] && (s += "; " + c, !0 !== o[c] && (s += "=" + o[c]));
                            return document.cookie = t + "=" + i + s
                        }
                        t || (a = {});
                        for (var u = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, f = 0; f < u.length; f++) {
                            var p = u[f].split("="),
                                h = p.slice(1).join("=");
                            this.json || '"' !== h.charAt(0) || (h = h.slice(1, -1));
                            try {
                                var m = p[0].replace(d, decodeURIComponent);
                                if (h = n.read ? n.read(h, m) : n(h, m) || h.replace(d, decodeURIComponent), this.json) try {
                                    h = JSON.parse(h)
                                } catch (e) {}
                                if (t === m) {
                                    a = h;
                                    break
                                }
                                t || (a[m] = h)
                            } catch (e) {}
                        }
                        return a
                    }
                }
                return r.set = r, r.get = function(e) {
                    return r.call(r, e)
                }, r.getJSON = function() {
                    return r.apply({
                        json: !0
                    }, [].slice.call(arguments))
                }, r.defaults = {}, r.remove = function(t, n) {
                    r(t, "", e(n, {
                        expires: -1
                    }))
                }, r.withConverter = t, r
            }
            return t(function() {})
        })
    }, function(e, t) {
        e.exports = o
    }, , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "truncateText", function() {
            return d
        }), n.d(t, "truncateTextAndEscape", function() {
            return f
        }), n.d(t, "postToTWTTR", function() {
            return y
        }), n.d(t, "bindClickToFollowButton", function() {
            return g
        }), n.d(t, "postPollToTwitter", function() {
            return b
        });
        var r = n(6),
            i = n.n(r),
            o = n(4),
            a = (n.n(o), n(2)),
            l = (n.n(a), n(1)),
            s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            c = {
                text: '"'
            },
            u = /([a-zA-Z0-9]+:\/\/)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?([\/|a-zA-Z0-9|_|-|.|?|&|#])+/g,
            d = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = Object.assign({}, t),
                    r = c[t.type] || "",
                    i = e.url,
                    o = e.via,
                    a = e.text,
                    l = o && !1 !== n.via,
                    s = a.match(u) || [],
                    d = a.length,
                    f = 140 - (l ? " via @" + o : "").length - (i ? 24 : 0) - 2 * r.length,
                    p = !0,
                    h = !1,
                    m = void 0;
                try {
                    for (var v, y = s[Symbol.iterator](); !(p = (v = y.next()).done); p = !0) {
                        d += 23 - v.value.length
                    }
                } catch (e) {
                    h = !0, m = e
                } finally {
                    try {
                        !p && y.return && y.return()
                    } finally {
                        if (h) throw m
                    }
                }
                if (f < d) {
                    f -= " ...".length;
                    var g = f,
                        b = !0,
                        w = !1,
                        E = void 0;
                    try {
                        for (var k, _ = s[Symbol.iterator](); !(b = (k = _.next()).done); b = !0) {
                            g += k.value.length - 23
                        }
                    } catch (e) {
                        w = !0, E = e
                    } finally {
                        try {
                            !b && _.return && _.return()
                        } finally {
                            if (w) throw E
                        }
                    }
                    g = a.substring(0, g).lastIndexOf(" "), a = a.substring(0, g) + " ..."
                }
                return a + (i ? " " + i : "") + (l ? " via @" + o : "")
            },
            f = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return encodeURIComponent(d(e, t))
            },
            p = function(e) {
                var t = "object" === (void 0 === e ? "undefined" : s(e)) && null !== e ? e : JSON.parse(e);
                return Object(l.b)({
                    hashtags: t.hashtags,
                    related: t.related,
                    text: d({
                        text: t.text,
                        url: t.url,
                        via: t.via
                    }, {
                        type: t.type
                    })
                }, "https://twitter.com/intent/tweet?")
            },
            h = document.querySelector('meta[property="twitter:title"]'),
            m = function(e) {
                var t = document.querySelector('meta[property="og:url"]'),
                    n = e && e.forcedUrl || window.articleShortUrl || t && t.getAttribute("content") || window.location.href;
                return Object(l.b)({
                    related: window.twitterVia + ",MailOnline",
                    text: d({
                        text: h && h.getAttribute("content") || "",
                        url: n,
                        via: window.twitterVia || "MailOnline"
                    })
                }, "https://twitter.com/intent/tweet?")
            },
            v = function(e) {
                return e && !e.forcedUrl && p(e) || m(e)
            },
            y = function(e, t, n) {
                i.a.get("social-share-platform") || i.a.set("social-share-platform", "twitter", {
                    path: "/"
                }), Object(l.f)("twitter", e, Object.assign({}, n)), window.open(v(t), "", Object(l.e)(575, 400))
            },
            g = function(e) {
                Array.from(document.querySelectorAll(".twitter-follow-author")).forEach(function(t) {
                    t.addEventListener("click", function(n) {
                        var r = window.top.outerHeight / 2 + window.top.screenY - 285,
                            i = window.top.outerWidth / 2 + window.top.screenX - 275;
                        n.preventDefault(), window.twttr && n.stopPropagation(), window.open(t.href, "_blank", "top=" + r + ",left=" + i + ",width=550,height=570"), o.pageEvents.publish(o.pageEvents.SOCIAL_SHARE_CLICKED, {
                            channel: e,
                            link: t.baseURI,
                            pageMetadata: Object(a.getPageMetadata)(),
                            placement: "author",
                            site: "twitter-follow",
                            type: "twitter-follow"
                        })
                    })
                })
            },
            b = function(e, t, n, r, i, o) {
                var a = JSON.stringify({
                    text: (t.length > 105 ? t.substring(0, 101) + "...?" : t) + i,
                    url: decodeURIComponent(r) + "#" + e,
                    via: n
                });
                y(o, a)
            }
    }, function(e, t) {
        e.exports = a
    }, , function(e, t, n) {
        "use strict";

        function r(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(i, o) {
                        try {
                            var a = t[i](o),
                                l = a.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!a.done) return Promise.resolve(l).then(function(e) {
                            r("next", e)
                        }, function(e) {
                            r("throw", e)
                        });
                        e(l)
                    }
                    return r("next")
                })
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "postToPinterest", function() {
            return O
        }), n.d(t, "loadAsyncScript", function() {
            return x
        }), n.d(t, "bindNavigationClick", function() {
            return P
        }), n.d(t, "postPollToPinterest", function() {
            return T
        });
        var i = n(3),
            o = (n.n(i), n(4)),
            a = (n.n(o), n(2)),
            l = (n.n(a), n(5)),
            s = (n.n(l), n(1)),
            c = this,
            u = function(e) {
                return e && e.type || "article"
            },
            d = function(e) {
                var t = document.querySelector('meta[property="' + e + '"]');
                return t ? t.getAttribute("content") : null
            },
            f = function(e) {
                return d("og:url") || e && e.url || window.url || window.location.href
            },
            p = function(e) {
                return e.url
            },
            h = {
                article: f,
                comment: function(e) {
                    return e.commentData.shortUrl.trim() || f()
                },
                email: f,
                factbox: p,
                fff: p,
                image: f,
                poll: p,
                text: f
            },
            m = function(e) {
                return "url=" + encodeURIComponent(e && e.forcedUrl || h[u(e)](e))
            },
            v = function() {
                return d("og:image") || document.querySelector(".image-wrap img").getAttribute("src")
            },
            y = function(e) {
                return e.media || ""
            },
            g = {
                article: v,
                comment: function(e) {
                    return "https://i.dailymail.co.uk/i/furniture/comments/articles/" + (f(e).includes("/money/") ? "tim" : "m") + "_logo.png"
                },
                email: y,
                factbox: y,
                fff: y,
                image: y,
                poll: y,
                text: v
            },
            b = function(e) {
                return "media=" + encodeURIComponent(g[u(e)](e))
            },
            w = function(e) {
                return e.description
            },
            E = function(e) {
                return e.caption + " " + e.description
            },
            k = {
                article: function() {
                    return d("og:title")
                },
                comment: function(e) {
                    var t = e.commentData.commentBody ? e.commentData.commentBody.trim() : "",
                        n = e.commentData.commenterName.trim() || "";
                    return t + (n ? " by " + ("," === name.substring(n.length - 1, n.length) ? n.substring(0, n.length - 1) : n) : "")
                },
                email: w,
                factbox: E,
                fff: w,
                image: w,
                poll: w,
                text: E
            },
            _ = function(e) {
                return "description=" + encodeURIComponent(e && e.forcedDescription || k[u(e)](e))
            },
            S = function(e) {
                window.open("//www.pinterest.com/pin/create/button/?" + m(e) + "&" + _(e) + "&" + b(e), "", Object(s.e)(800, 320))
            },
            A = {
                article: S,
                comment: function(e) {
                    e.commentData.pinterestWindow.location = "//www.pinterest.com/pin/create/button/?" + m(e) + "&" + _(e) + "&" + b(e)
                },
                email: S,
                factbox: S,
                fff: S,
                image: S,
                poll: S,
                text: S
            },
            O = function(e, t, n) {
                A[u(t)](t), "fff" !== u(t) && Object(s.f)("pinterest", e, Object.assign({}, n))
            },
            x = function() {
                var e = r(regeneratorRuntime.mark(function e() {
                    var t, n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (Object(l.isMobile)()) {
                                    e.next = 9;
                                    break
                                }
                                return e.next = 3, Object(i.later)("DOM_READY");
                            case 3:
                                t = document.querySelector("script"), n = document.createElement("script"), n.type = "text/javascript", n.async = !0, n.src = "//assets.pinterest.com/js/pinit.js", t.parentNode.insertBefore(n, t);
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }, e, c)
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }(),
            C = function() {
                o.pageEvents.publish(o.pageEvents.SOCIAL_SHARE_CLICKED, {
                    pageMetadata: Object(a.getPageMetadata)(),
                    placement: "header",
                    site: "pinterest"
                })
            },
            P = function() {
                document.documentElement.addEventListener("click", function(e) {
                    e.target.closest(".pinterest-follow-button a") && C()
                })
            },
            T = function(e, t, n, r) {
                var i = {
                    description: n,
                    media: t,
                    type: "poll",
                    url: "" + s.c + location.pathname + "#" + e
                };
                O(r, i)
            }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return d[e]
        }

        function i(e) {
            for (var t = 1; t < arguments.length; t++)
                for (var n in arguments[t]) Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
            return e
        }

        function o(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t) return n;
            return -1
        }

        function a(e) {
            if ("string" != typeof e) {
                if (e && e.toHTML) return e.toHTML();
                if (null == e) return "";
                if (!e) return e + "";
                e = "" + e
            }
            return p.test(e) ? e.replace(f, r) : e
        }

        function l(e) {
            return !e && 0 !== e || !(!v(e) || 0 !== e.length)
        }

        function s(e) {
            var t = i({}, e);
            return t._parent = e, t
        }

        function c(e, t) {
            return e.path = t, e
        }

        function u(e, t) {
            return (e ? e + "." : "") + t
        }
        t.__esModule = !0, t.extend = i, t.indexOf = o, t.escapeExpression = a, t.isEmpty = l, t.createFrame = s, t.blockParams = c, t.appendContextPath = u;
        var d = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;",
                "=": "&#x3D;"
            },
            f = /[&<>"'`=]/g,
            p = /[&<>"'`=]/,
            h = Object.prototype.toString;
        t.toString = h;
        var m = function(e) {
            return "function" == typeof e
        };
        m(/x/) && (t.isFunction = m = function(e) {
            return "function" == typeof e && "[object Function]" === h.call(e)
        }), t.isFunction = m;
        var v = Array.isArray || function(e) {
            return !(!e || "object" != typeof e) && "[object Array]" === h.call(e)
        };
        t.isArray = v
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "postToFB", function() {
            return u
        }), n.d(t, "postPollToFb", function() {
            return d
        });
        var r = n(6),
            i = n.n(r),
            o = n(0),
            a = (n.n(o), n(1)),
            l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            s = function() {
                var e = document.querySelector('meta[property="fb:app_id"]');
                return {
                    app_id: e && e.getAttribute("content"),
                    caption: a.c,
                    link: window.url,
                    picture: "https://i.dailymail.co.uk/i/furniture/comments/articles/m_logo.png",
                    redirect_uri: "https://i.dailymail.co.uk/i/pix/facebook/close.html"
                }
            },
            c = function(e) {
                var t = document.querySelector('meta[property="og:url"]');
                if (!e || e.forcedUrl) {
                    var n = e && e.forcedUrl || t && t.getAttribute("content") || window.url || window.location.href;
                    return "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(n)
                }
                try {
                    var r = Object.assign({}, s(), "object" === (void 0 === e ? "undefined" : l(e)) && null !== e ? e : JSON.parse(e));
                    return Object(a.b)(r, "https://www.facebook.com/dialog/feed?")
                } catch (e) {
                    throw o.logger.error("Facebook share: unable to parse JSON", e), e
                }
            },
            u = function(e, t, n) {
                i.a.set("social-share-platform", "facebook", {
                    path: "/"
                }), Object(a.f)("facebook", e, Object.assign({}, n)), window.open(c(t), "", Object(a.e)(1050, 650))
            },
            d = function(e, t, n, r, i, o) {
                var l = document.querySelector('meta[property="og:url"]'),
                    s = l && l.getAttribute("content") || window.url || location.href,
                    c = ["https://www.facebook.com/dialog/feed?app_id=" + encodeURIComponent(t), "link=" + encodeURIComponent("" + a.c + location.pathname + "#" + e), "redirect_uri=" + encodeURIComponent("https://i.dailymail.co.uk/i/pix/facebook/close.html"), "name=" + encodeURIComponent(n), "description=" + encodeURIComponent(i), "picture=" + encodeURIComponent(r), "u=" + s].join("&");
                Object(a.f)("facebook", o), window.open(c, "", Object(a.e)(1e3, 500))
            }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "showEmailButtons", function() {
            return u
        }), n.d(t, "listenForEmailButtonClicks", function() {
            return d
        }), n.d(t, "emailArticle", function() {
            return f
        });
        var r = n(5),
            i = (n.n(r), n(1)),
            o = function() {
                var e = document.querySelector('link[rel="canonical"]'),
                    t = document.querySelector('meta[property="mol:headline"]'),
                    n = document.querySelector('meta[name="description"]'),
                    r = document.querySelector("title");
                return {
                    headline: t && t.content || r.innerText,
                    previewText: n && n.content,
                    url: e && e.href || window.location.href
                }
            },
            a = function(e, t) {
                var n = e.closest(".article-preview");
                if (!n) return null;
                var r = n.querySelector("h2,.headline"),
                    i = n.querySelector(".article-preview-description > p"),
                    o = n.querySelector("a"),
                    a = r && r.innerText && r.innerText.trim(),
                    l = i && i.innerText && i.innerText.trim(),
                    s = t || o && o.href;
                return s.match(/^https?:\/\//) || (s = "https://" + window.location.host + s), {
                    headline: a,
                    previewText: l,
                    url: s
                }
            },
            l = function(e, t) {
                return "article" === window.PageCriteria.pageType ? o() : a(e, t)
            },
            s = function() {
                return window.mostReadForEmailShare
            },
            c = function(e, t, n, r) {
                var i = l(t, r);
                if (!i) return null;
                var o = "email_share_article-" + n,
                    a = o + "_most-read-articles",
                    c = i.headline,
                    u = i.previewText,
                    d = i.url,
                    f = s(),
                    p = d + "?ito=" + o,
                    h = "Read this: " + c,
                    m = p;
                return "email-plain-text" === e ? (m = c + "\n\n" + u + "\n\n" + p, f && f.length && (m += "\n\n\nMost Read Articles:\n\n" + f.map(function(e) {
                    return e.headline + "\n" + e.url + "?ito=" + a
                }).join("\n\n"))) : "email-html" === e && (m = "<b>" + c + "</b>\n\n" + u + "\n\n<a href='" + p + "'>Read full story</a>", f && f.length && (m += "\n\n\nMost Read Articles:\n\n" + f.map(function(e) {
                    return "<a href='" + e.url + "?ito=" + a + "'>" + e.headline + "</a>"
                }).join("\n\n"))), "mailto:?subject=" + encodeURIComponent(h) + "&body=" + encodeURIComponent(m)
            },
            u = function(e) {
                var t = e.querySelectorAll('.email[data-target^="email-"]'),
                    n = function(e) {
                        Array.from(t).forEach(function(t) {
                            var n = t.getAttribute("data-target");
                            t.style.display = n === e ? "" : "none"
                        })
                    };
                n(Object(r.isWindows)() ? "email-default" : Object(r.isIPhone)() ? "email-html" : "email-plain-text")
            },
            d = function() {
                document.addEventListener("click", function(e) {
                    var t = e.target && e.target.closest('.email[data-target^="email-"]'),
                        n = e.target && e.target.closest(".social[data-location]");
                    if (t) {
                        e.preventDefault();
                        var r = t.getAttribute("data-target"),
                            i = n && n.getAttribute("data-location"),
                            o = n && n.getAttribute("data-url"),
                            a = c(r, t, i, o);
                        a && window.location.replace(a)
                    }
                })
            },
            f = function(e) {
                Object(i.f)("email", e)
            }
    }, function(e, t, n) {
        e.exports = n(84).default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "truncateText", function() {
            return c
        }), n.d(t, "truncateTextSelector", function() {
            return u
        }), n.d(t, "addResizeTruncateListener", function() {
            return d
        });
        var r = {
                DATA_ID: "data-id",
                IS_TEXT_TRUNCATED: "data-is-text-truncated",
                ORIGINAL_HTML: "data-original-html"
            },
            i = function(e) {
                var t = document.createElement("canvas").getContext("2d");
                return t.font = e, t
            },
            o = function(e) {
                var t = e.height,
                    n = e.paddingBottom,
                    r = e.paddingTop;
                return parseFloat(t) - (parseFloat(r) || 0) - (parseFloat(n) || 0)
            },
            a = function(e) {
                var t = e.paddingLeft,
                    n = e.paddingRight,
                    r = e.width;
                return parseFloat(r) - (parseFloat(t) || 0) - (parseFloat(n) || 0)
            },
            l = function(e) {
                var t = e.fontFamily,
                    n = e.fontSize;
                return e.fontStyle + " " + e.fontVariant + " " + e.fontWeight + " " + n + "/" + e.lineHeight + " " + t
            },
            s = function(e) {
                return parseFloat(e.lineHeight)
            },
            c = function(e) {
                if (e.getAttribute(r.IS_TEXT_TRUNCATED) ? e.innerHTML = e.getAttribute(r.ORIGINAL_HTML) : (e.setAttribute(r.IS_TEXT_TRUNCATED, "true"), e.setAttribute(r.ORIGINAL_HTML, e.innerHTML)), e.scrollHeight > e.offsetHeight) {
                    for (var t = getComputedStyle(e), n = i(l(t)), c = a(t), u = [], d = Math.floor(o(t) / s(t)), f = (e.getAttribute(r.ORIGINAL_HTML) || "").split(" "); f.length && u.length < d;) {
                        for (var p = u.length === d - 1 ? "…" : "", h = 0, m = f.length; h !== m - 1;) {
                            var v = Math.floor((h + m) / 2);
                            ! function(e, t) {
                                return n.measureText("" + e.join(" ") + t).width < c
                            }(f.slice(0, v), p) ? m = v: h = v
                        }
                        0 === h && (h = 1), u.push(f.splice(0, h))
                    }
                    e.innerHTML = [].concat.apply([], u.slice(0, d - 1)).join(" ") + "&hellip;"
                }
            },
            u = function(e, t) {
                Array.from(e.querySelectorAll(t)).forEach(c)
            },
            d = function(e, t) {
                var n = function() {
                        u(e, t)
                    },
                    r = void 0;
                window.addEventListener("resize", function() {
                    r && cancelAnimationFrame(r), r = requestAnimationFrame(n)
                }), window.addEventListener("orientationchange", n)
            }
    }, , function(e, t, n) {
        var r;
        /*! Hammer.JS - v1.0.11 - 2014-05-20
         * http://eightmedia.github.io/hammer.js
         *
         * Copyright (c) 2014 Jorik Tangelder <j.tangelder@gmail.com>;
         * Licensed under the MIT license */
        ! function(i, o) {
            "use strict";

            function a() {
                l.READY || (k.determineEventTypes(), g.each(l.gestures, function(e) {
                    S.register(e)
                }), k.onTouch(l.DOCUMENT, v, S.detect), k.onTouch(l.DOCUMENT, y, S.detect), l.READY = !0)
            }
            var l = function(e, t) {
                return new l.Instance(e, t || {})
            };
            l.VERSION = "1.0.11", l.defaults = {
                stop_browser_behavior: {
                    userSelect: "none",
                    touchAction: "pan-y",
                    touchCallout: "none",
                    contentZooming: "none",
                    userDrag: "none",
                    tapHighlightColor: "rgba(0,0,0,0)"
                }
            }, l.HAS_POINTEREVENTS = i.navigator.pointerEnabled || i.navigator.msPointerEnabled, l.HAS_TOUCHEVENTS = "ontouchstart" in i, l.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android|silk/i, l.NO_MOUSEEVENTS = l.HAS_TOUCHEVENTS && i.navigator.userAgent.match(l.MOBILE_REGEX), l.EVENT_TYPES = {}, l.UPDATE_VELOCITY_INTERVAL = 16, l.DOCUMENT = i.document;
            var s = l.DIRECTION_DOWN = "down",
                c = l.DIRECTION_LEFT = "left",
                u = l.DIRECTION_UP = "up",
                d = l.DIRECTION_RIGHT = "right",
                f = l.POINTER_MOUSE = "mouse",
                p = l.POINTER_TOUCH = "touch",
                h = l.POINTER_PEN = "pen",
                m = l.EVENT_START = "start",
                v = l.EVENT_MOVE = "move",
                y = l.EVENT_END = "end";
            l.plugins = l.plugins || {}, l.gestures = l.gestures || {}, l.READY = !1;
            var g = l.utils = {
                extend: function(e, t, n) {
                    for (var r in t) void 0 !== e[r] && n || (e[r] = t[r]);
                    return e
                },
                each: function(e, t, n) {
                    var r, i;
                    if ("forEach" in e) e.forEach(t, n);
                    else if (void 0 !== e.length) {
                        for (r = -1; i = e[++r];)
                            if (!1 === t.call(n, i, r, e)) return
                    } else
                        for (r in e)
                            if (e.hasOwnProperty(r) && !1 === t.call(n, e[r], r, e)) return
                },
                inStr: function(e, t) {
                    return e.indexOf(t) > -1
                },
                hasParent: function(e, t) {
                    for (; e;) {
                        if (e == t) return !0;
                        e = e.parentNode
                    }
                    return !1
                },
                getCenter: function(e) {
                    var t = [],
                        n = [],
                        r = [],
                        i = [],
                        o = Math.min,
                        a = Math.max;
                    return 1 === e.length ? {
                        pageX: e[0].pageX,
                        pageY: e[0].pageY,
                        clientX: e[0].clientX,
                        clientY: e[0].clientY
                    } : (g.each(e, function(e) {
                        t.push(e.pageX), n.push(e.pageY), r.push(e.clientX), i.push(e.clientY)
                    }), {
                        pageX: (o.apply(Math, t) + a.apply(Math, t)) / 2,
                        pageY: (o.apply(Math, n) + a.apply(Math, n)) / 2,
                        clientX: (o.apply(Math, r) + a.apply(Math, r)) / 2,
                        clientY: (o.apply(Math, i) + a.apply(Math, i)) / 2
                    })
                },
                getVelocity: function(e, t, n) {
                    return {
                        x: Math.abs(t / e) || 0,
                        y: Math.abs(n / e) || 0
                    }
                },
                getAngle: function(e, t) {
                    var n = t.clientX - e.clientX,
                        r = t.clientY - e.clientY;
                    return 180 * Math.atan2(r, n) / Math.PI
                },
                getDirection: function(e, t) {
                    return Math.abs(e.clientX - t.clientX) >= Math.abs(e.clientY - t.clientY) ? e.clientX - t.clientX > 0 ? c : d : e.clientY - t.clientY > 0 ? u : s
                },
                getDistance: function(e, t) {
                    var n = t.clientX - e.clientX,
                        r = t.clientY - e.clientY;
                    return Math.sqrt(n * n + r * r)
                },
                getScale: function(e, t) {
                    return e.length >= 2 && t.length >= 2 ? this.getDistance(t[0], t[1]) / this.getDistance(e[0], e[1]) : 1
                },
                getRotation: function(e, t) {
                    return e.length >= 2 && t.length >= 2 ? this.getAngle(t[1], t[0]) - this.getAngle(e[1], e[0]) : 0
                },
                isVertical: function(e) {
                    return e == u || e == s
                },
                toggleDefaultBehavior: function(e, t, n) {
                    if (t && e && e.style) {
                        g.each(["webkit", "moz", "Moz", "ms", "o", ""], function(r) {
                            g.each(t, function(t, i) {
                                r && (i = r + i.substring(0, 1).toUpperCase() + i.substring(1)), i in e.style && (e.style[i] = !n && t)
                            })
                        });
                        var r = function() {
                            return !1
                        };
                        "none" == t.userSelect && (e.onselectstart = !n && r), "none" == t.userDrag && (e.ondragstart = !n && r)
                    }
                }
            };
            l.Instance = function(e, t) {
                var n = this;
                return a(), this.element = e, this.enabled = !0, this.options = g.extend(g.extend({}, l.defaults), t || {}), this.options.stop_browser_behavior && g.toggleDefaultBehavior(this.element, this.options.stop_browser_behavior, !1), this.eventStartHandler = k.onTouch(e, m, function(e) {
                    n.enabled && S.startDetect(n, e)
                }), this.eventHandlers = [], this
            }, l.Instance.prototype = {
                on: function(e, t) {
                    var n = e.split(" ");
                    return g.each(n, function(e) {
                        this.element.addEventListener(e, t, !1), this.eventHandlers.push({
                            gesture: e,
                            handler: t
                        })
                    }, this), this
                },
                off: function(e, t) {
                    var n, r, i = e.split(" ");
                    return g.each(i, function(e) {
                        for (this.element.removeEventListener(e, t, !1), n = -1; r = this.eventHandlers[++n];) r.gesture === e && r.handler === t && this.eventHandlers.splice(n, 1)
                    }, this), this
                },
                trigger: function(e, t) {
                    t || (t = {});
                    var n = l.DOCUMENT.createEvent("Event");
                    n.initEvent(e, !0, !0), n.gesture = t;
                    var r = this.element;
                    return g.hasParent(t.target, r) && (r = t.target), r.dispatchEvent(n), this
                },
                enable: function(e) {
                    return this.enabled = e, this
                },
                dispose: function() {
                    var e, t;
                    for (this.options.stop_browser_behavior && g.toggleDefaultBehavior(this.element, this.options.stop_browser_behavior, !0), e = -1; t = this.eventHandlers[++e];) this.element.removeEventListener(t.gesture, t.handler, !1);
                    return this.eventHandlers = [], k.unbindDom(this.element, l.EVENT_TYPES[m], this.eventStartHandler), null
                }
            };
            var b = null,
                w = !1,
                E = !1,
                k = l.event = {
                    bindDom: function(e, t, n) {
                        var r = t.split(" ");
                        g.each(r, function(t) {
                            e.addEventListener(t, n, !1)
                        })
                    },
                    unbindDom: function(e, t, n) {
                        var r = t.split(" ");
                        g.each(r, function(t) {
                            e.removeEventListener(t, n, !1)
                        })
                    },
                    onTouch: function(e, t, n) {
                        var r = this,
                            i = function(i) {
                                var o = i.type.toLowerCase();
                                if (!g.inStr(o, "mouse") || !E) {
                                    g.inStr(o, "touch") || g.inStr(o, "pointerdown") || g.inStr(o, "mouse") && 1 === i.which ? w = !0 : g.inStr(o, "mouse") && !i.which && (w = !1), (g.inStr(o, "touch") || g.inStr(o, "pointer")) && (E = !0);
                                    var a = 0;
                                    w && (l.HAS_POINTEREVENTS && t != y ? a = _.updatePointer(t, i) : g.inStr(o, "touch") ? a = i.touches.length : E || (a = g.inStr(o, "up") ? 0 : 1), a > 0 && t == y ? t = v : a || (t = y), (a || null === b) && (b = i), n.call(S, r.collectEventData(e, t, r.getTouchList(b, t), i)), l.HAS_POINTEREVENTS && t == y && (a = _.updatePointer(t, i))), a || (b = null, w = !1, E = !1, _.reset())
                                }
                            };
                        return this.bindDom(e, l.EVENT_TYPES[t], i), i
                    },
                    determineEventTypes: function() {
                        var e;
                        e = l.HAS_POINTEREVENTS ? _.getEvents() : l.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], l.EVENT_TYPES[m] = e[0], l.EVENT_TYPES[v] = e[1], l.EVENT_TYPES[y] = e[2]
                    },
                    getTouchList: function(e) {
                        return l.HAS_POINTEREVENTS ? _.getTouchList() : e.touches ? e.touches : (e.identifier = 1, [e])
                    },
                    collectEventData: function(e, t, n, r) {
                        var i = p;
                        return (g.inStr(r.type, "mouse") || _.matchType(f, r)) && (i = f), {
                            center: g.getCenter(n),
                            timeStamp: Date.now(),
                            target: r.target,
                            touches: n,
                            eventType: t,
                            pointerType: i,
                            srcEvent: r,
                            preventDefault: function() {
                                var e = this.srcEvent;
                                e.preventManipulation && e.preventManipulation(), e.preventDefault && e.preventDefault()
                            },
                            stopPropagation: function() {
                                this.srcEvent.stopPropagation()
                            },
                            stopDetect: function() {
                                return S.stopDetect()
                            }
                        }
                    }
                },
                _ = l.PointerEvent = {
                    pointers: {},
                    getTouchList: function() {
                        var e = [];
                        return g.each(this.pointers, function(t) {
                            e.push(t)
                        }), e
                    },
                    updatePointer: function(e, t) {
                        return e == y ? delete this.pointers[t.pointerId] : (t.identifier = t.pointerId, this.pointers[t.pointerId] = t), Object.keys(this.pointers).length
                    },
                    matchType: function(e, t) {
                        if (!t.pointerType) return !1;
                        var n = t.pointerType,
                            r = {};
                        return r[f] = n === f, r[p] = n === p, r[h] = n === h, r[e]
                    },
                    getEvents: function() {
                        return ["pointerdown MSPointerDown", "pointermove MSPointerMove", "pointerup pointercancel MSPointerUp MSPointerCancel"]
                    },
                    reset: function() {
                        this.pointers = {}
                    }
                },
                S = l.detection = {
                    gestures: [],
                    current: null,
                    previous: null,
                    stopped: !1,
                    startDetect: function(e, t) {
                        this.current || (this.stopped = !1, this.current = {
                            inst: e,
                            startEvent: g.extend({}, t),
                            lastEvent: !1,
                            lastVelocityEvent: !1,
                            velocity: !1,
                            name: ""
                        }, this.detect(t))
                    },
                    detect: function(e) {
                        if (this.current && !this.stopped) {
                            e = this.extendEventData(e);
                            var t = this.current.inst,
                                n = t.options;
                            return g.each(this.gestures, function(r) {
                                if (!this.stopped && !1 !== n[r.name] && !1 !== t.enabled && !1 === r.handler.call(r, e, t)) return this.stopDetect(), !1
                            }, this), this.current && (this.current.lastEvent = e), e.eventType == y && !e.touches.length - 1 && this.stopDetect(), e
                        }
                    },
                    stopDetect: function() {
                        this.previous = g.extend({}, this.current), this.current = null, this.stopped = !0
                    },
                    getVelocityData: function(e, t, n, r) {
                        var i = this.current,
                            o = i.lastVelocityEvent,
                            a = i.velocity;
                        o && e.timeStamp - o.timeStamp > l.UPDATE_VELOCITY_INTERVAL ? (a = g.getVelocity(e.timeStamp - o.timeStamp, e.center.clientX - o.center.clientX, e.center.clientY - o.center.clientY), i.lastVelocityEvent = e) : i.velocity || (a = g.getVelocity(t, n, r), i.lastVelocityEvent = e), i.velocity = a, e.velocityX = a.x, e.velocityY = a.y
                    },
                    getInterimData: function(e) {
                        var t, n, r = this.current.lastEvent;
                        e.eventType == y ? (t = r && r.interimAngle, n = r && r.interimDirection) : (t = r && g.getAngle(r.center, e.center), n = r && g.getDirection(r.center, e.center)), e.interimAngle = t, e.interimDirection = n
                    },
                    extendEventData: function(e) {
                        var t = this.current,
                            n = t.startEvent;
                        e.touches.length == n.touches.length && e.touches !== n.touches || (n.touches = [], g.each(e.touches, function(e) {
                            n.touches.push(g.extend({}, e))
                        }));
                        var r = e.timeStamp - n.timeStamp,
                            i = e.center.clientX - n.center.clientX,
                            o = e.center.clientY - n.center.clientY;
                        return this.getVelocityData(e, r, i, o), this.getInterimData(e), g.extend(e, {
                            startEvent: n,
                            deltaTime: r,
                            deltaX: i,
                            deltaY: o,
                            distance: g.getDistance(n.center, e.center),
                            angle: g.getAngle(n.center, e.center),
                            direction: g.getDirection(n.center, e.center),
                            scale: g.getScale(n.touches, e.touches),
                            rotation: g.getRotation(n.touches, e.touches)
                        }), e
                    },
                    register: function(e) {
                        var t = e.defaults || {};
                        /*! Hammer.JS - v1.0.11 - 2014-05-20
                         * http://eightmedia.github.io/hammer.js
                         *
                         * Copyright (c) 2014 Jorik Tangelder <j.tangelder@gmail.com>;
                         * Licensed under the MIT license */
                        return void 0 === t[e.name] && (t[e.name] = !0), g.extend(l.defaults, t, !0), e.index = e.index || 1e3, this.gestures.push(e), this.gestures.sort(function(e, t) {
                            return e.index < t.index ? -1 : e.index > t.index ? 1 : 0
                        }), this.gestures
                    }
                };
            l.gestures.Drag = {
                name: "drag",
                index: 50,
                defaults: {
                    drag_min_distance: 10,
                    correct_for_drag_min_distance: !0,
                    drag_max_touches: 1,
                    drag_block_horizontal: !1,
                    drag_block_vertical: !1,
                    drag_lock_to_axis: !1,
                    drag_lock_min_distance: 25
                },
                triggered: !1,
                handler: function(e, t) {
                    var n = S.current;
                    if (n.name != this.name && this.triggered) return t.trigger(this.name + "end", e), void(this.triggered = !1);
                    if (!(t.options.drag_max_touches > 0 && e.touches.length > t.options.drag_max_touches)) switch (e.eventType) {
                        case m:
                            this.triggered = !1;
                            break;
                        case v:
                            if (e.distance < t.options.drag_min_distance && n.name != this.name) return;
                            var r = n.startEvent.center;
                            if (n.name != this.name && (n.name = this.name, t.options.correct_for_drag_min_distance && e.distance > 0)) {
                                var i = Math.abs(t.options.drag_min_distance / e.distance);
                                r.pageX += e.deltaX * i, r.pageY += e.deltaY * i, r.clientX += e.deltaX * i, r.clientY += e.deltaY * i, e = S.extendEventData(e)
                            }(n.lastEvent.drag_locked_to_axis || t.options.drag_lock_to_axis && t.options.drag_lock_min_distance <= e.distance) && (e.drag_locked_to_axis = !0);
                            var o = n.lastEvent.direction;
                            e.drag_locked_to_axis && o !== e.direction && (g.isVertical(o) ? e.direction = e.deltaY < 0 ? u : s : e.direction = e.deltaX < 0 ? c : d), this.triggered || (t.trigger(this.name + "start", e), this.triggered = !0), t.trigger(this.name, e), t.trigger(this.name + e.direction, e);
                            var a = g.isVertical(e.direction);
                            (t.options.drag_block_vertical && a || t.options.drag_block_horizontal && !a) && e.preventDefault();
                            break;
                        case y:
                            this.triggered && t.trigger(this.name + "end", e), this.triggered = !1
                    }
                }
            }, l.gestures.Hold = {
                name: "hold",
                index: 10,
                defaults: {
                    hold_timeout: 500,
                    hold_threshold: 2
                },
                timer: null,
                handler: function(e, t) {
                    switch (e.eventType) {
                        case m:
                            clearTimeout(this.timer), S.current.name = this.name, this.timer = setTimeout(function() {
                                "hold" == S.current.name && t.trigger("hold", e)
                            }, t.options.hold_timeout);
                            break;
                        case v:
                            e.distance > t.options.hold_threshold && clearTimeout(this.timer);
                            break;
                        case y:
                            clearTimeout(this.timer)
                    }
                }
            }, l.gestures.Release = {
                name: "release",
                index: 1 / 0,
                handler: function(e, t) {
                    e.eventType == y && t.trigger(this.name, e)
                }
            }, l.gestures.Swipe = {
                name: "swipe",
                index: 40,
                defaults: {
                    swipe_min_touches: 1,
                    swipe_max_touches: 1,
                    swipe_velocity: .7
                },
                handler: function(e, t) {
                    if (e.eventType == y) {
                        if (e.touches.length < t.options.swipe_min_touches || e.touches.length > t.options.swipe_max_touches) return;
                        (e.velocityX > t.options.swipe_velocity || e.velocityY > t.options.swipe_velocity) && (t.trigger(this.name, e), t.trigger(this.name + e.direction, e))
                    }
                }
            }, l.gestures.Tap = {
                name: "tap",
                index: 100,
                defaults: {
                    tap_max_touchtime: 250,
                    tap_max_distance: 10,
                    tap_always: !0,
                    doubletap_distance: 20,
                    doubletap_interval: 300
                },
                has_moved: !1,
                handler: function(e, t) {
                    var n, r, i;
                    e.eventType == m ? this.has_moved = !1 : e.eventType != v || this.moved ? e.eventType == y && "touchcancel" != e.srcEvent.type && e.deltaTime < t.options.tap_max_touchtime && !this.has_moved && (n = S.previous, r = n && n.lastEvent && e.timeStamp - n.lastEvent.timeStamp, i = !1, n && "tap" == n.name && r && r < t.options.doubletap_interval && e.distance < t.options.doubletap_distance && (t.trigger("doubletap", e), i = !0), i && !t.options.tap_always || (S.current.name = "tap", t.trigger(S.current.name, e))) : this.has_moved = e.distance > t.options.tap_max_distance
                }
            }, l.gestures.Touch = {
                name: "touch",
                index: -1 / 0,
                defaults: {
                    prevent_default: !1,
                    prevent_mouseevents: !1
                },
                handler: function(e, t) {
                    if (t.options.prevent_mouseevents && e.pointerType == f) return void e.stopDetect();
                    t.options.prevent_default && e.preventDefault(), e.eventType == m && t.trigger(this.name, e)
                }
            }, l.gestures.Transform = {
                name: "transform",
                index: 45,
                defaults: {
                    transform_min_scale: .01,
                    transform_min_rotation: 1,
                    transform_always_block: !1,
                    transform_within_instance: !1
                },
                triggered: !1,
                handler: function(e, t) {
                    if (S.current.name != this.name && this.triggered) return t.trigger(this.name + "end", e), void(this.triggered = !1);
                    if (!(e.touches.length < 2)) {
                        if (t.options.transform_always_block && e.preventDefault(), t.options.transform_within_instance)
                            for (var n = -1; e.touches[++n];)
                                if (!g.hasParent(e.touches[n].target, t.element)) return;
                        switch (e.eventType) {
                            case m:
                                this.triggered = !1;
                                break;
                            case v:
                                var r = Math.abs(1 - e.scale),
                                    i = Math.abs(e.rotation);
                                if (r < t.options.transform_min_scale && i < t.options.transform_min_rotation) return;
                                S.current.name = this.name, this.triggered || (t.trigger(this.name + "start", e), this.triggered = !0), t.trigger(this.name, e), i > t.options.transform_min_rotation && t.trigger("rotate", e), r > t.options.transform_min_scale && (t.trigger("pinch", e), t.trigger("pinch" + (e.scale < 1 ? "in" : "out"), e));
                                break;
                            case y:
                                this.triggered && t.trigger(this.name + "end", e), this.triggered = !1
                        }
                    }
                }
            }, void 0 !== (r = function() {
                return l
            }.call(t, n, t, e)) && (e.exports = r)
        }(window)
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            var n = t && t.loc,
                o = void 0,
                a = void 0;
            n && (o = n.start.line, a = n.start.column, e += " - " + o + ":" + a);
            for (var l = Error.prototype.constructor.call(this, e), s = 0; s < i.length; s++) this[i[s]] = l[i[s]];
            Error.captureStackTrace && Error.captureStackTrace(this, r);
            try {
                n && (this.lineNumber = o, Object.defineProperty ? Object.defineProperty(this, "column", {
                    value: a,
                    enumerable: !0
                }) : this.column = a)
            } catch (e) {}
        }
        t.__esModule = !0;
        var i = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
        r.prototype = new Error, t.default = r, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "bindButtons", function() {
            return u
        }), n.d(t, "init", function() {
            return d
        });
        var r = n(14),
            i = n(9),
            o = n(12),
            a = n(15),
            l = n(27),
            s = n(28),
            c = n(1),
            u = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    d = e.querySelector("[class^='share-facebook'], .fb .share, .fb .big-share"),
                    f = e.querySelector("[class^='share-twitter'], .tw .share, .tw .big-share"),
                    p = e.querySelector(".share-pinterest"),
                    h = e.querySelector('.share-email a[href^="mailto:"]'),
                    m = e.querySelector(".share-flipboard"),
                    v = e.querySelector(".share-fbmessenger"),
                    y = Object(c.d)(e),
                    g = n ? {
                        forcedDescription: u,
                        forcedUrl: n
                    } : void 0;
                d && d.addEventListener("click", function() {
                    Object(r.postToFB)(y + t, g)
                }), f && f.addEventListener("click", function() {
                    Object(i.postToTWTTR)(y + t, g)
                }), p && p.addEventListener("click", function() {
                    Object(o.postToPinterest)(t, g)
                }), h && h.addEventListener("click", function() {
                    Object(a.emailArticle)(t)
                }), m && m.addEventListener("click", function() {
                    Object(l.b)({
                        placement: {
                            origin: "article",
                            position: t
                        },
                        shareObject: g
                    })
                }), v && v.addEventListener("click", function() {
                    Object(s.b)({
                        placement: {
                            origin: "article",
                            position: t
                        },
                        shareObject: g
                    })
                })
            },
            d = function(e) {
                var t = void 0,
                    n = e,
                    r = null,
                    i = null;
                if ("top" === n && (t = document.querySelector("#articleIconLinksContainer")), "bottom" === n && (t = document.querySelector("#socialLinks")), /p-\d/.test(n) && (t = document.querySelector("#" + n), n = "related"), "video-lead" === n) {
                    t = document.querySelector("#video-lead-desktop-social");
                    if (!document.querySelector('meta[property="og:video"]')) try {
                        var o = t.closest(".video-lead-info").querySelector(".video-headline a"),
                            a = o.getAttribute("href");
                        r = window.location.protocol + "//" + window.location.hostname + a, i = o.innerText.trim().replace("Video: ", "") + " | Daily Mail Online"
                    } catch (e) {}
                }
                return t ? u(t, n, r, i) : null
            }
    }, function(e, t) {
        e.exports = {
            frameHoldersWrapper: "frameHoldersWrapper-2Fwzj",
            frameHolder: "frameHolder-3bsJ2",
            currentHolder: "currentHolder-10qsX frameHolder-3bsJ2",
            nextHolder: "nextHolder-3FTSB frameHolder-3bsJ2"
        }
    }, function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }, function(e, t) {
        e.exports = l
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = t.truncateString = function(e, t) {
            if (!e || e.length <= t) return e;
            var n = e.indexOf(" ", t - 1);
            return -1 === n ? e : e.substr(0, n) + "..."
        };
        t.transformItem = function(e) {
            var t = e.articleId,
                n = e.articleImage,
                i = e.articleURL,
                o = e.followButton,
                a = e.headline,
                l = e.imageLinkListPuff,
                s = e.largePreviewText,
                c = e.mobileGalleryCount,
                u = e.previewText,
                d = e.readerComments,
                f = e.readerCommentsCount,
                p = e.shareCount,
                h = e.shortURL,
                m = e.socialHeadline,
                v = e.sponsoredArticle,
                y = e.sponsoredByShortLabel,
                g = e.sponsoredText,
                b = e.videoCount;
            return {
                articleId: t,
                articleImage: n.hostUrl,
                articleUrl: i,
                followButton: o,
                headline: r(a, 160),
                imageLinkListPuff: l.hostUrl,
                largePreviewText: s,
                mobileGalleryCount: c,
                previewText: r(u, 145),
                readerComments: d,
                readerCommentsCount: f,
                shareCount: p,
                shortUrl: h,
                socialHeadline: m,
                sponsoredArticle: v,
                sponsoredByShortLabel: y,
                sponsoredText: g,
                videoCount: b
            }
        }, t.className = function(e) {
            return "mol-fe-latest-headlines--" + e
        }, t.isMobile = function() {
            return "mobile" === window.DM.getPageMetadata().renderPlatform
        }
    }, function(e, t, n) {
        "use strict";
        var r = function(e) {
                switch (Object.prototype.toString.call(e)) {
                    case "[object Object]":
                        return Object.keys(e).map(function(t) {
                            return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
                        }).join("&");
                    case "[object String]":
                        return e
                }
                return ""
            },
            i = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = new XMLHttpRequest;
                if (!e) throw new Error("URL required to make request");
                var i = t.method,
                    o = void 0 === i ? "GET" : i,
                    a = t.headers,
                    l = t.body,
                    s = t.cb,
                    c = !1;
                if ("function" == typeof t && (s = t), "GET" === o && l) {
                    var u = r(l);
                    u && (e += (-1 === e.indexOf("?") ? "?" : "&") + u)
                }
                n.open(o, e), a && Object.keys(a).forEach(function(e) {
                    n.setRequestHeader(e, a[e])
                }), n.onreadystatechange = function() {
                    n.readyState > 3 && (n.status >= 200 && n.status < 300 ? s(null, n.responseText) : c || (c = !0, s(new Error("Error in server response, status: " + n.status))))
                }, n.onerror = function() {
                    c || (c = !0, s(new Error("Error making request, status: " + n.status)))
                }, n.send(l || null)
            };
        t.a = i
    }, function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return d
        }), n.d(t, "b", function() {
            return f
        });
        var r = n(1),
            i = "https://share.flipboard.com/bookmarklet/popout",
            o = r.a.bind(null, "flipboard"),
            a = function() {
                var e = document.querySelector('meta[property="og:url"]');
                return e && e.getAttribute("content")
            },
            l = function() {
                var e = document.querySelector('meta[property="og:title"]');
                return e && e.getAttribute("content")
            },
            s = function(e) {
                return e.find(function(e) {
                    return Boolean(e)
                })
            },
            c = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.forcedUrl;
                return s([t, a(), window.location.href])
            },
            u = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.forcedTitle;
                return s([t, l(), document.title])
            },
            d = function(e) {
                var t = e.url,
                    n = e.title,
                    r = e.placement,
                    a = encodeURIComponent("?ito=" + o(r));
                return i + "?v=2&url=" + t + a + "&title=" + n
            },
            f = function(e) {
                var t = e.placement,
                    n = e.shareObject,
                    a = c(n) + "?ito=" + o(t),
                    l = u(n);
                Object(r.g)(i + "?", {
                    title: l,
                    url: a,
                    v: 2
                }), Object(r.f)("flipboard", t.position)
            }
    }, function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return f
        }), n.d(t, "b", function() {
            return p
        });
        var r = n(1),
            i = r.a.bind(null, "fbmessenger"),
            o = function() {
                return MobileUtils.isMobile() ? "fb-messenger://share/?" : "https://www.facebook.com/dialog/send?display=popup&"
            },
            a = function() {
                return !MobileUtils.isMobile()
            },
            l = function() {
                var e = document.querySelector('meta[property="fb:app_id"]');
                return e && e.getAttribute("content")
            },
            s = function() {
                var e = document.querySelector('meta[property="og:url"]');
                return e && e.getAttribute("content")
            },
            c = function(e) {
                return e.find(function(e) {
                    return Boolean(e)
                })
            },
            u = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.forcedUrl;
                return c([t, s(), window.location.href])
            },
            d = "https://scripts.dailymail.co.uk/static/mol-fe/static/misc/window-closer.html",
            f = function(e) {
                var t = e.url,
                    n = e.placement,
                    r = encodeURIComponent("?ito=" + i(n)),
                    s = "" + t + r,
                    c = o(),
                    u = a() ? "&redirect_uri=" + d : "";
                return c + "app_id=" + l() + "&link=" + s + u
            },
            p = function(e) {
                var t = e.placement,
                    n = e.shareObject,
                    s = u(n) + "?ito=" + i(t),
                    c = {
                        app_id: l(),
                        link: s
                    };
                a() && (c.redirect_uri = d), Object(r.g)("" + o(), c), Object(r.f)("fbmessenger", t.position)
            }
    }, function(e, t) {
        e.exports = {
            "fa-social": "fa-social-jlswu"
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "postToDiggit", function() {
            return i
        });
        var r = n(1),
            i = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.url,
                    i = t.title,
                    o = arguments[2];
                n && i && Object(r.g)("//digg.com/submit?phase=2&", {
                    title: i,
                    url: n
                }), Object(r.f)("diggit", e, o)
            }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "postToFark", function() {
            return i
        });
        var r = n(1),
            i = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.h,
                    i = t.u,
                    o = arguments[2];
                i && n && Object(r.g)("https://cgi.fark.com/cgi/fark/farkit.pl?", {
                    h: n,
                    u: i
                }), Object(r.f)("fark", e, o)
            }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "postToLinkedIn", function() {
            return i
        });
        var r = n(1),
            i = function(e, t, n) {
                var i = t && t.url,
                    o = t && t.title;
                i && o && Object(r.g)("//www.linkedin.com/shareArticle?mini=true&", {
                    title: o,
                    url: i
                }), Object(r.f)("linkedin", e, n)
            }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "postToReddit", function() {
            return i
        });
        var r = n(1),
            i = function(e, t, n) {
                var i = t && t.url,
                    o = t && t.title;
                i && o && Object(r.g)("//reddit.com/submit?", {
                    title: o,
                    url: i
                }), Object(r.f)("reddit", e, n)
            }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "getShareDescription", function() {
            return d
        }), n.d(t, "init", function() {
            return p
        });
        var r = n(1),
            i = n(14),
            o = n(12),
            a = n(9),
            l = function(e, t) {
                var n = document.querySelector("#poll-" + e);
                if (!n) return "";
                var r = n.querySelector('[for="answer-' + e + "-" + t + '"]');
                return r ? r.textContent.trim() : ""
            },
            s = function(e, t, n) {
                var r = document.querySelector("." + e);
                if (!r) return "";
                var i = r.querySelector("li.results-" + t + "-" + n + " span.results-score span.results-pct");
                return i ? i.textContent.trim() : ""
            },
            c = function(e) {
                var t = document.querySelector("#poll-" + e);
                if (!t) return "";
                var n = Array.from(t.querySelectorAll("input[type=radio][name=answer]")).find(function(e) {
                    return e.checked
                });
                return n ? n.value : ""
            },
            u = function(e, t) {
                return " I said " + e + ". " + t + " of others agreed with me. What do you think?"
            },
            d = function(e, t) {
                var n = c(t),
                    r = l(t, n),
                    i = s(e, t, n);
                return u(r, i)
            },
            f = function(e, t) {
                var n = document.querySelector("." + e + " .poll-" + t.pollId + ".poll-results .dms-poll ul"),
                    l = "POLL: " + t.question,
                    s = "sponsored-poll" === t.pollStyle ? "sponsored-poll" : "post_poll",
                    c = n.querySelector("li.facebook"),
                    u = n.querySelector("li.twitter"),
                    f = n.querySelector("li.pinterest");
                c && c.addEventListener("click", function() {
                    Object(i.postPollToFb)("poll-share-" + t.pollId, t.fbAppId, l, t.pollImage || t.articleImage || t.defaultImage, d(e, t.pollId), s)
                }), u && u.addEventListener("click", function() {
                    Object(a.postPollToTwitter)("poll-share-" + t.pollId, t.question, t.twitterVia, window.articleShortUrl || r.c + location.pathname, "", s)
                }), f && f.addEventListener("click", function() {
                    Object(o.postPollToPinterest)("poll-share-" + t.pollId, t.pollImage || t.articleImage || t.defaultImage, "" + l + d(e, t.pollId), s)
                })
            },
            p = function(e, t) {
                f(e, t)
            }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(9),
            i = function(e, t) {
                if (e) return {
                    height: 169,
                    width: 338
                };
                var n = 288;
                return t && (n -= 50), {
                    height: 91,
                    width: n
                }
            },
            o = function(e) {
                return e.replace(/^https?:\/\/[^\/]+/, window.location.protocol + "//" + window.location.host) + "?printingPage=true"
            },
            a = function(e) {
                var t = document.querySelector('meta[property="og:url"]');
                if (!t) return e;
                var n = t.getAttribute("content"),
                    r = n.match(/^https?:\/\/[^\/]+/);
                return e.replace(/^https?:\/\/[^\/]+/, r)
            },
            l = function(e) {
                return !e || e.startsWith("http://") || e.startsWith("https://") ? e : "https://i.dailymail.co.uk" + e
            },
            s = function(e) {
                for (var t = e.offsetTop, n = e.offsetLeft, r = e.offsetParent; r;) Number.isNaN(r.offsetTop) || Number.isNaN(r.offsetLeft) || (t += r.offsetTop, n += r.offsetLeft), r = r.offsetParent;
                return {
                    left: n,
                    top: t
                }
            },
            c = n(4),
            u = n(2),
            d = function(e, t, n, r, i) {
                Array.from(e.querySelectorAll("li")).forEach(function(e) {
                    e.addEventListener("click", function() {
                        var o = e.getAttribute("class");
                        "print" !== o && c.pageEvents.publish(c.pageEvents.SOCIAL_SHARE_CLICKED, {
                            pageMetadata: {
                                articleId: t,
                                articleTitle: n,
                                contentType: "social-share",
                                pageName: Object(u.getPageMetadata)().pageName,
                                videoId: r,
                                videoTitle: i
                            },
                            placement: r ? "video-page-drawer" : "drawer",
                            site: o,
                            videoId: r,
                            videoTitle: i
                        })
                    })
                })
            },
            f = d,
            p = n(27),
            h = n(28),
            m = function(e) {
                var t = e.mailtoSubject,
                    n = e.mailtoBody,
                    r = e.eTitle,
                    i = e.mobileEmailBody,
                    o = e.newEmailUrl,
                    a = e.eId,
                    l = e.isChannel,
                    s = e.placement,
                    c = e.emailShareStyle,
                    u = e.eUrl,
                    d = e.articleChannelFollowButton,
                    f = e.twitterVia,
                    m = e.eTwitterStatus,
                    v = e.eArticleImage,
                    y = e.printUrl,
                    g = e.showFacebookMessenger,
                    b = e.showFlipboard,
                    w = e.hideEmail,
                    E = '\n    <li class="email">\n      <a href="mailto:?subject=' + t + "&body=" + n + '"\n        data-on-mobile="mailto:?subject=' + r + "&body=" + i + '" title="Email to a friend">\n        <span>Email</span>\n      </a>\n    </li>\n  ',
                    k = '\n    <li class="email">\n      <a href="' + o + '" data-target="/email-article.html?id=' + a + '" data-modal-id="email-modal-overlay"\n        data-modal-type="email-overlay" data-ajax-refresh-everytime="true" data-toggle="modal" ' + (l ? "" : 'data-placement="' + s + '"') + '\n        data-on-mobile="mailto:?subject={eTitle}&body={mobileEmailBody}" title="Email to a friend">\n        <span>Email</span>\n      </a>\n    </li>\n  ',
                    _ = c ? E : k,
                    S = '\n    <li class="facebook">\n      <a target="_new" title="Share this story on Facebook" href="https://www.facebook.com/sharer.php?u=' + u + '" class="js-tl">\n        <span>Facebook</span>\n      </a>\n    </li>\n  ',
                    A = '\n    <li class="twitter">\n      <a target="_new" title="Share this story on Twitter"\n        href="https://twitter.com/intent/tweet?related=' + d + "," + f + "&text=" + m + '" class="js-tl">\n        <span>Twitter</span>\n      </a>\n    </li>\n  ',
                    O = '\n    <li class="pinterest">\n      <a target="_new" title="Share this story on Pinterest"\n        href="https://www.pinterest.com/pin/create/button/?url=' + u + "&description=" + r + "%20%23DailyMail&media=" + v + '" class="js-tl">\n        <span>Pinterest</span>\n      </a>\n    </li>\n  ',
                    x = '\n    <li class="reddit">\n      <a target="_new" title="Share this story on Reddit" href="https://reddit.com/submit?url=' + u + "&title=" + r + '"\n        ' + (l ? "" : "onclick=\"postToReddit('" + s + "');\"") + ' class="js-tl">\n        <span>Reddit</span>\n      </a>\n    </li>\n  ',
                    C = '\n    <li class="digg">\n      <a target="_new" title="Share this story on Digg" href="https://digg.com/submit?phase=2&url=' + u + "&title=" + r + '"\n        ' + (l ? "" : "onclick=\"postToDiggit('" + s + "');\"") + ' class="js-tl">\n        <span>Digg it</span>\n      </a>\n    </li>\n  ',
                    P = '\n    <li class="linkedin">\n      <a target="_new" title="Share this story on LinkedIn" href="https://www.linkedin.com/shareArticle?mini=true&url=' + u + "&title=" + r + '"\n        ' + (l ? "" : "onclick=\"postToLinkedIn('" + s + "');\"") + ' class="js-tl">\n        <span>LinkedIn</span>\n      </a>\n    </li>\n  ',
                    T = '\n    <li class="print">\n      <a href="' + y + '" title="Print this article" onclick="DM.popup(\'' + y + "', 600, 600); return false;\">\n        <span>Print</span>\n      </a>\n    </li>\n  ",
                    L = '\n    <li class="flipboard">\n      <a target="_new" title="Share this story on Flipboard"\n        href="' + Object(p.a)({
                        placement: {
                            position: s
                        },
                        title: r,
                        url: u
                    }) + '" class="js-tl">\n        <span>Flipboard</span>\n      </a>\n    </li>\n  ',
                    I = '\n    <li class="fbmessenger">\n      <a target="_new" title="Share this story on Facebook Messenger"\n        href="' + Object(h.a)({
                        placement: {
                            position: s
                        },
                        url: u
                    }) + '" class="js-tl">\n        <span>Messenger</span>\n      </a>\n    </li>\n  ',
                    j = S + A + O;
                return '\n    <div class="wrapper">\n      <ul>\n        ' + (l ? j : "") + "\n        " + (b ? L : "") + "\n        " + (g ? I : "") + "\n        " + x + "\n        " + C + "\n        " + P + "\n        " + (y ? T : "") + "\n        " + (w ? "" : _) + '\n      </ul>\n    </div>\n    <div class="close">&nbsp;</div>\n  '
            },
            v = m,
            y = function e(t) {
                if (!t.target.closest("#dms-drawer") || t.target.classList.contains("close")) {
                    var n = document.getElementById("dms-drawer"),
                        r = document.getElementById("dms-drawer-arrow"),
                        i = n.querySelector(".close");
                    document.body.removeEventListener("click", e), window.removeEventListener("resize", e), i.removeEventListener("click", e), r && (r.style.display = "none"), n.innerHTML = "", n.style.display = "none"
                }
            },
            g = y,
            b = "dms-drawer-arrow",
            w = function(e) {
                var t = null;
                return e.className.includes("|") && (t = e.className.split("|")[0]), t
            },
            E = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = s(e),
                    c = t.isChannel || !1,
                    u = t.showFlipboard || e.getAttribute("data-show-flipboard") || !1,
                    d = t.showFbMessenger || e.getAttribute("data-show-fbmessenger") || !1,
                    p = t.hideEmail || !1,
                    h = t.emailShareStyle || e.getAttribute("data-email-share-style"),
                    m = t.headline || e.getAttribute("data-headline"),
                    y = void 0,
                    E = void 0,
                    k = void 0,
                    _ = void 0,
                    S = void 0,
                    A = void 0,
                    O = void 0,
                    x = void 0,
                    C = "",
                    P = "";
                if (t.title) y = t.url, S = t.articleChannelFollowButton, E = t.id, k = t.videoId, _ = t.title, A = t.eTwitterStatus;
                else if (e.getAttribute("data-social-drawer")) y = e.getAttribute("data-url"), y.startsWith("http://") || y.startsWith("https://") || (y = window.location.protocol + "//" + window.location.host + y), S = window.twitterVia || "MailOnline", E = e.getAttribute("data-article-id") || null, k = e.getAttribute("data-video-id") || null, _ = e.getAttribute("data-headline"), A = Object(r.truncateTextAndEscape)({
                    text: _,
                    url: w(e) || y,
                    via: S
                }), E || h || (p = !0);
                else {
                    var T = e.closest(".article"),
                        L = T && (T.querySelector("h2 a") || T.querySelector(".title"));
                    if (T && (P = T.getAttribute("data-original-title")), !T || !L) return;
                    var I = e.getAttribute("data-article-image"),
                        j = T.querySelector(".social-headline");
                    C = I && l(I) || "https://i.dailymail.co.uk/i/furniture/comments/articles/m_logo.png", y = L.href.replace(/\?.*$/, ""), y = a(y), E = /(fb|article)-(\d+)/.exec(y)[2], _ = j ? j.textContent : L.textContent, S = T.querySelector(".article-icon-links-container").getAttribute("data-followbutton"), S || (S = T.getAttribute("data-followbutton") || "MailOnline"), A = Object(r.truncateTextAndEscape)({
                        text: _,
                        url: w(e) || y,
                        via: S
                    })
                }
                var M = window.twitterVia || "MailOnline";
                O = document.getElementById("dms-drawer"), x = document.getElementById(b), O ? O.classList.remove("open") : (document.body.insertAdjacentHTML("beforeend", '<div id="dms-drawer"></div>'), document.body.insertAdjacentHTML("beforeend", '<div id="' + b + '">&nbsp</div>'), O = document.getElementById("dms-drawer"), x = document.getElementById(b));
                var D = 0,
                    R = 0,
                    N = 0;
                t.inside ? (D = -340, R = -112, N = -30, x.style.backgroundPosition = "-600px 48px") : (D = c ? -90 : 0, x.style.backgroundPosition = "-600px 0px");
                var q = i(c, p);
                O.style.display = "block", O.style.left = n.left - 15 + D + "px", O.style.top = n.top + 30 + R + "px", O.style.width = 0, O.style.height = 0, x.style.display = "block", x.style.position = "absolute", x.style.left = n.left + "px", x.style.top = n.top + 20 + N + "px", O.innerHTML = v({
                    articleChannelFollowButton: encodeURIComponent(S),
                    eArticleImage: encodeURIComponent(C),
                    eId: E,
                    emailShareStyle: h,
                    eTitle: encodeURIComponent(_),
                    eTwitterStatus: A,
                    eUrl: encodeURIComponent(y),
                    hideEmail: p,
                    isChannel: c,
                    mailtoBody: encodeURIComponent(y + "?ito=" + h),
                    mailtoSubject: encodeURIComponent((k ? "Watch" : "Read") + " this: " + m),
                    mobileEmailBody: y + "%0D%0A%0D%0AGet the MailOnline App: %0D%0A" + /^https?:\/\/([^\/?#]+)(?:[\/?#]|$)/i.exec(y)[0] + "mobile",
                    newEmailUrl: y + "#email",
                    placement: t.placement || "drawer",
                    printUrl: E && o(y),
                    showFacebookMessenger: d,
                    showFlipboard: u,
                    twitterVia: M
                }), c && (O.classList.add("dms-drawer--channel"), f(O, E, P || _, k, k ? _ : null)), O.getAttribute("data-ready") || O.setAttribute("data-ready", !0), x = document.getElementById(b), t.inside || x && (x.style.display = "block"), t.zIndex && (x.style.zIndex = t.zIndex, O.style.zIndex = t.zIndex);
                var B = document.getElementById("dms-drawer"),
                    H = B.querySelector(".close");
                document.body.addEventListener("click", g), H.addEventListener("click", g), window.addEventListener("resize", g), setTimeout(function() {
                    O.style.width = q.width + "px", O.style.height = q.height + "px"
                }, 0);
                var U = O.querySelector(".wrapper");
                U.style.display = "block", U.style.opacity = 0, setTimeout(function() {
                    U.style.opacity = 1
                }, 500)
            },
            k = E;
        n.d(t, "init", function() {
            return _
        });
        var _ = function(e) {
            var t = e.id,
                n = e.params,
                r = document.getElementById(t);
            r && r.addEventListener("click", function(e) {
                var t = e.target.closest("a.js-sl,[data-social-drawer]");
                t && (e.preventDefault(), e.stopPropagation(), k(t, n))
            })
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(7);
        try {
            ! function() {
                var e = window.location.hash;
                if (e) {
                    var t = e.replace(/^#/, "");
                    if ("video" !== t && "comments" !== t) {
                        var n = document.querySelector("#" + t + ',[name="' + t + '"]');
                        n && r.scrollUtils.scrollToElement(n)
                    }
                }
            }()
        } catch (e) {}
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(i, o) {
                        try {
                            var a = t[i](o),
                                l = a.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!a.done) return Promise.resolve(l).then(function(e) {
                            r("next", e)
                        }, function(e) {
                            r("throw", e)
                        });
                        e(l)
                    }
                    return r("next")
                })
            }
        }

        function i(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function o(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(i, o) {
                        try {
                            var a = t[i](o),
                                l = a.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!a.done) return Promise.resolve(l).then(function(e) {
                            r("next", e)
                        }, function(e) {
                            r("throw", e)
                        });
                        e(l)
                    }
                    return r("next")
                })
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(0),
            l = n(7),
            s = this,
            c = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                window.PushlySDK.push(t)
            },
            u = !1,
            d = !1,
            f = function() {
                return c("show_prompt")
            },
            p = function() {
                return u
            },
            h = function() {
                return d
            },
            m = function() {
                var e = r(regeneratorRuntime.mark(function e() {
                    var t, n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (window.PUSHLY_DOMAIN_KEY) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                if (!window.PushlySDK || !window.PushlySDK.loaded) {
                                    e.next = 4;
                                    break
                                }
                                throw new Error("pushly already loaded");
                            case 4:
                                return window.PushlySDK = window.PushlySDK || [], c("load", {
                                    domainKey: window.PUSHLY_DOMAIN_KEY
                                }), c("on_web_push_supported", function() {
                                    u = !0
                                }), t = new Promise(function(e) {
                                    c("on_ready", function() {
                                        e(!0)
                                    })
                                }), n = new Promise(function(e) {
                                    c("on_prompt_eligible", function() {
                                        e(!0)
                                    }), c("on_prompt_ineligible", function() {
                                        e(!1)
                                    })
                                }), e.next = 11, Object(l.loadScript)("https://cdn.p-n.io/pushly-sdk.min.js");
                            case 11:
                                return e.next = 13, t;
                            case 13:
                                return e.next = 15, n;
                            case 15:
                                d = e.sent;
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }, e, s)
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }(),
            v = n(10),
            y = n(2),
            g = function(e) {
                for (var t = e.offsetTop, n = e.offsetParent; n;) Number.isNaN(n.offsetTop) || Number.isNaN(n.offsetLeft) || (t += n.offsetTop), n = n.offsetParent;
                return t
            },
            b = function(e, t) {
                var n = function() {
                    var n = t ? t.scrollTop : window.pageYOffset,
                        r = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
                        i = n + r,
                        o = !0,
                        a = !1,
                        l = void 0;
                    try {
                        for (var s, c = e[Symbol.iterator](); !(o = (s = c.next()).done); o = !0) {
                            var u = s.value;
                            i > g(u) && f()
                        }
                    } catch (e) {
                        a = !0, l = e
                    } finally {
                        try {
                            !o && c.return && c.return()
                        } finally {
                            if (a) throw l
                        }
                    }
                };
                return Object(v.debounce)(n, 200)
            },
            w = function(e, t) {
                var n = !0,
                    r = !1,
                    i = void 0;
                try {
                    for (var o, a = e[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                        if (o.value.isIntersecting) return f(), void t.disconnect()
                    }
                } catch (e) {
                    r = !0, i = e
                } finally {
                    try {
                        !n && a.return && a.return()
                    } finally {
                        if (r) throw i
                    }
                }
            },
            E = function(e, t) {
                var n = {
                        root: t || null
                    },
                    r = new IntersectionObserver(w, n),
                    i = !0,
                    o = !1,
                    a = void 0;
                try {
                    for (var l, s = e[Symbol.iterator](); !(i = (l = s.next()).done); i = !0) {
                        var c = l.value;
                        r.observe(c)
                    }
                } catch (e) {
                    o = !0, a = e
                } finally {
                    try {
                        !i && s.return && s.return()
                    } finally {
                        if (o) throw a
                    }
                }
            },
            k = function(e) {
                var t = e.scrollableElement,
                    n = e.triggerElements;
                "IntersectionObserver" in window ? E(n, t) : (t || window).addEventListener("scroll", b(n, t))
            },
            _ = function() {
                var e = "feature" === Object(y.getPageCriteria)().articleType,
                    t = [].concat(i(document.querySelectorAll(".article-text .mol-img img"))),
                    n = null;
                e && (t = [].concat(i(document.querySelectorAll(".article-text .fa-page"))), n = document.querySelector("#page-container")), !t.length || t.length < 2 || k({
                    scrollableElement: n,
                    triggerElement: t[1]
                })
            },
            S = function() {
                var e = [].concat(i(document.querySelectorAll(".scrollable-content > article figure img"))).slice(1),
                    t = [].concat(i(document.querySelectorAll(".scrollable-content > article p.mol-para-with-font"))),
                    n = document.querySelector(".scrollable-content"),
                    r = [];
                e.length && e.length >= 2 && r.push(e[1]), t.length && t.length >= 5 && r.push(t[4]), r.length && k({
                    scrollableElement: n,
                    triggerElements: r
                })
            },
            A = function() {
                var e = Object(y.getPageCriteria)(),
                    t = Object(y.getPageMetadata)();
                e.isMobile && "article" === e.pageType && ("desktop" === t.renderPlatform ? _() : S())
            };
        n.d(t, "loaded", function() {
            return C
        }), n.d(t, "showPrompt", function() {
            return f
        });
        var O = this,
            x = function() {
                var e = o(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, m();
                            case 3:
                                if (p() && h()) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return", !1);
                            case 5:
                                return A(), e.abrupt("return", !0);
                            case 9:
                                return e.prev = 9, e.t0 = e.catch(0), a.logger.error("Error loading pushly: " + e.t0), e.abrupt("return", !1);
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }, e, O, [
                        [0, 9]
                    ])
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }(),
            C = x()
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(39),
            i = n.n(r),
            o = n(40),
            a = n.n(o),
            l = function(e) {
                var t = e.text,
                    n = e.type;
                return '\n  <div class="' + a.a.floater + '">\n    <div class="' + a.a.container + '">\n      <div class="' + a.a.mainBox + " " + (n ? a.a[n] : "") + '">\n        <p class="' + a.a.text + '">' + t + '</p>\n      </div>\n      <button data-generic-modal-close class="' + a.a.closeButton + '">\n        <img class="' + a.a.closeIcon + '" src="' + i.a + '" alt="close" />\n      </button>\n    </div>\n  </div>\n'
            },
            s = l,
            c = function(e) {
                var t = e.container,
                    n = e.onClose;
                t && t.parentNode && (t.parentNode.removeChild(t), n && n())
            },
            u = function(e) {
                var t = e.text,
                    n = e.type,
                    r = void 0 === n ? null : n,
                    i = e.timeout,
                    o = void 0 === i ? null : i,
                    a = e.onClose,
                    l = void 0 === a ? function() {} : a,
                    u = document.createElement("div"),
                    d = s({
                        text: t,
                        type: r
                    });
                u.innerHTML = d;
                var f = u.querySelector("[data-generic-modal-close]"),
                    p = null;
                o && (p = setTimeout(function() {
                    return c({
                        container: u,
                        onClose: l
                    })
                }, o)), f.addEventListener("click", function() {
                    p && clearTimeout(p), c({
                        container: u,
                        onClose: l
                    })
                }), document.body.appendChild(u)
            },
            d = u,
            f = function() {
                window.location.search && window.location.search.match(/ito=newsletter_confirmation/i) && d({
                    text: "Your newsletter sign-up was successful",
                    timeout: 5e3,
                    type: "success"
                })
            },
            p = f,
            h = function() {
                p()
            },
            m = h;
        n.d(t, "create", function() {
            return d
        }), m()
    }, function(e, t) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGNpcmNsZSBmaWxsPSIjMDAwIiByPSIxNCIgY3k9IjE0IiBjeD0iMTQiLz4KICA8Zz4KICAgPHBhdGggZD0ibTE2LjQ3NSwxNGwzLjIxOSwtMy4yMTljMC40MDcsLTAuNDA3IDAuNDA3LC0xLjA2OCAwLC0xLjQ3NGwtMSwtMWMtMC40MDcsLTAuNDA3IC0xLjA2OCwtMC40MDggLTEuNDc1LC0wLjAwMWwtMy4yMTksMy4yMTlsLTMuMjE5LC0zLjIxOGMtMC40MDYsLTAuNDA3IC0xLjA2NywtMC40MDcgLTEuNDc0LC0wLjAwMWwtMSwxYy0wLjQwNywwLjQwNiAtMC40MDcsMS4wNjcgMCwxLjQ3NGwzLjIxOSwzLjIxOWwtMy4yMTksMy4yMTljLTAuNDA3LDAuNDA2IC0wLjQwNywxLjA2NyAwLDEuNDc0bDEsMWMwLjQwNywwLjQwNyAxLjA2OCwwLjQwNyAxLjQ3NCwwbDMuMjE5LC0zLjIxOWwzLjIxOSwzLjIxOWMwLjQwNywwLjQwNyAxLjA2OCwwLjQwNyAxLjQ3NSwwbDEsLTFjMC40MDcsLTAuNDA3IDAuNDA3LC0xLjA2NyAwLC0xLjQ3NGwtMy4yMTksLTMuMjE5IiBmaWxsPSIjZmZmIi8+CiAgPC9nPgo8L3N2Zz4K"
    }, function(e, t) {
        e.exports = {
            floater: "floater-x7hQe",
            container: "container-1spe5",
            mainBox: "mainBox-1SKln",
            text: "text-2TY96",
            closeButton: "closeButton-1OqX7",
            closeIcon: "closeIcon-1rgkn",
            success: "success-3RJJ8",
            alert: "alert-3kfzC"
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0),
            i = n(17),
            o = {
                DATA_ID: "data-id",
                IS_TEXT_TRUNCATED: "data-is-text-truncated",
                ORIGINAL_HTML: "data-original-html"
            },
            a = {
                JUST: "just",
                LOADED: "loaded",
                SHOW: "show"
            },
            l = {
                HAS_DATA_ID: "[" + o.DATA_ID + "]",
                SCROLLABLE_CONTENT: ".scrollable-content"
            },
            s = function() {
                var e = document.createElement("div");
                return e.classList.add(a.JUST, a.LOADED), e
            },
            c = function() {
                return document.querySelector(l.SCROLLABLE_CONTENT) || window
            },
            u = {
                addLoadMoreIntersectionObserver: function() {
                    "IntersectionObserver" in window ? (r.logger.info("[InfiniteList] Using IntersectionObserver to detect when new page should be requested."), this.loadMoreIntersectionObserver = new IntersectionObserver(this.onLoadMoreIntersectionObserve), this.loadMoreIntersectionObserver.observe(this.loadMore)) : (r.logger.info("[InfiniteList] Using scroll event to detect when new page should be requested."), this.scrollableContent.addEventListener("scroll", this.onScroll))
                },
                init: function(e) {
                    this.el = document.getElementById(e.id), this.el && (this.onLoadMoreIntersectionObserve = this.onLoadMoreIntersectionObserve.bind(this), this.onScroll = this.onScroll.bind(this), this.scrollableContent = c(), this.params = e.params || {}, this.page = void 0 === this.params.from ? 1 : this.params.from, this.loadMore = this.el.querySelector("a[class=more]"), this.doDots = Boolean(this.params.truncate) && PageCriteria && PageCriteria.isMobile, this.onAfterAppend = this.params.onAfterAppend, this.addLoadMoreIntersectionObserver(), this.ids = Array.from(this.el.querySelectorAll(l.HAS_DATA_ID)).map(function(e) {
                        return e.getAttribute(o.DATA_ID)
                    }), this.doDots && (Array.from(this.el.querySelectorAll(this.params.truncate)).forEach(i.truncateText), Object(i.addResizeTruncateListener)(this.el, this.params.truncate)))
                },
                insertNewContent: function(e) {
                    if (this.loadMore.parentNode.insertBefore(e, this.loadMore), "function" == typeof this.onAfterAppend) try {
                        this.onAfterAppend(e)
                    } catch (e) {
                        r.logger.error("onAfterAppend failed for infinite list")
                    }
                },
                isLastPage: function() {
                    return this.page >= this.params.total
                },
                load: function() {
                    var e = this;
                    r.logger.info("[InfiniteList] Loading page " + this.page + " of content."), this.setIsLoading(!0), fetch(this.params.url + "&page=" + this.page).then(function(e) {
                        return e.text()
                    }).then(function(t) {
                        var n = s();
                        n.innerHTML = t, e.removeDuplicates(n), e.updateDisplayedIds(n), e.insertNewContent(n), e.doDots && Array.from(n.querySelectorAll(e.params.truncate)).forEach(i.truncateText), setTimeout(function() {
                            return n.classList.remove(a.JUST)
                        }, 100), e.page += 1, e.isLastPage() && e.removeLoadMoreIntersectionObserver()
                    }).catch(function(e) {
                        r.logger.error(e)
                    }).then(function() {
                        e.setIsLoading(!1)
                    }).catch(function(e) {
                        r.logger.error(e)
                    })
                },
                onLoadMoreIntersectionObserve: function(e) {
                    if (!this.isLoading) {
                        var t = e[0],
                            n = void 0;
                        if (t.hasOwnProperty("isIntersecting")) n = t.isIntersecting;
                        else if (t.intersectionRect) {
                            var r = t.intersectionRect;
                            n = Boolean(r.bottom || r.height || r.left || r.right || r.top || r.width)
                        }
                        n && this.load()
                    }
                },
                onScroll: function() {
                    !this.isLoading && this.loadMore.getBoundingClientRect().top < window.innerHeight && this.load()
                },
                removeDuplicates: function(e) {
                    var t = this;
                    Array.from(e.querySelectorAll("[" + o.DATA_ID + "]")).filter(function(e) {
                        return t.ids.includes(e.getAttribute(o.DATA_ID))
                    }).forEach(function(e) {
                        return e.remove()
                    })
                },
                removeLoadMoreIntersectionObserver: function() {
                    r.logger.info("[InfiniteList] Stop checking when new page should be requested."), "IntersectionObserver" in window ? (this.loadMoreIntersectionObserver.unobserve(this.loadMore), this.loadMoreIntersectionObserver.disconnect()) : this.scrollableContent.removeEventListener("scroll", this.onScroll)
                },
                setIsLoading: function(e) {
                    this.loadMore.classList.toggle(a.SHOW, e), this.isLoading = e
                },
                updateDisplayedIds: function(e) {
                    var t = this,
                        n = Array.from(e.querySelectorAll("[" + o.DATA_ID + "]"));
                    Array.prototype.push.apply(this.ids, n.filter(function(e) {
                        return !t.ids.includes(e.getAttribute(o.DATA_ID))
                    }).map(function(e) {
                        return e.getAttribute(o.DATA_ID)
                    }))
                }
            };
        n.d(t, "InfiniteList", function() {
            return u
        })
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(i, o) {
                        try {
                            var a = t[i](o),
                                l = a.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!a.done) return Promise.resolve(l).then(function(e) {
                            r("next", e)
                        }, function(e) {
                            r("throw", e)
                        });
                        e(l)
                    }
                    return r("next")
                })
            }
        }

        function i(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function o(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(i, o) {
                        try {
                            var a = t[i](o),
                                l = a.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!a.done) return Promise.resolve(l).then(function(e) {
                            r("next", e)
                        }, function(e) {
                            r("throw", e)
                        });
                        e(l)
                    }
                    return r("next")
                })
            }
        }

        function a(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(i, o) {
                        try {
                            var a = t[i](o),
                                l = a.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!a.done) return Promise.resolve(l).then(function(e) {
                            r("next", e)
                        }, function(e) {
                            r("throw", e)
                        });
                        e(l)
                    }
                    return r("next")
                })
            }
        }

        function l(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(i, o) {
                        try {
                            var a = t[i](o),
                                l = a.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!a.done) return Promise.resolve(l).then(function(e) {
                            r("next", e)
                        }, function(e) {
                            r("throw", e)
                        });
                        e(l)
                    }
                    return r("next")
                })
            }
        }

        function s(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(i, o) {
                        try {
                            var a = t[i](o),
                                l = a.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!a.done) return Promise.resolve(l).then(function(e) {
                            r("next", e)
                        }, function(e) {
                            r("throw", e)
                        });
                        e(l)
                    }
                    return r("next")
                })
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = n(0),
            u = n(3),
            d = n(10),
            f = n(7),
            p = this,
            h = function(e) {
                var t = e.global,
                    n = e.args,
                    r = void 0 === n ? [] : n,
                    o = e.isConstructor,
                    a = void 0 !== o && o;
                if (t) try {
                    var l = t.split("."),
                        s = window,
                        u = !0,
                        d = !1,
                        f = void 0;
                    try {
                        for (var p, h = l[Symbol.iterator](); !(u = (p = h.next()).done); u = !0) {
                            s = s[p.value]
                        }
                    } catch (e) {
                        d = !0, f = e
                    } finally {
                        try {
                            !u && h.return && h.return()
                        } finally {
                            if (d) throw f
                        }
                    }
                    if (!s || "window" === s) throw new Error("Global method not found: " + t);
                    a ? new(Function.prototype.bind.apply(s, [null].concat(i(r)))) : s.apply(void 0, i(r))
                } catch (e) {
                    c.logger.error("Error while calling lazy content onLoad", e)
                }
            },
            m = function() {
                var e = r(regeneratorRuntime.mark(function e(t, n) {
                    var r, i, o, a, l, s, c, u, d, m, v, y, g, b = n.body,
                        w = n.onLoad,
                        E = n.scripts,
                        k = n.styles;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (b && (t.innerHTML = b), !E || !E.length || E.every(function(e) {
                                        return e.match(/^https:\/\/(scripts|i).dailymail.co.uk\//)
                                    })) {
                                    e.next = 3;
                                    break
                                }
                                throw new Error("Tried to lazy-load content script not from i/scripts.dailymail.co.uk");
                            case 3:
                                if (r = [], !E || !E.length) {
                                    e.next = 24;
                                    break
                                }
                                for (i = !0, o = !1, a = void 0, e.prev = 8, l = E[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) c = s.value, document.querySelector('script[src="' + c + '"]') || r.push(Object(f.loadScript)(c));
                                e.next = 16;
                                break;
                            case 12:
                                e.prev = 12, e.t0 = e.catch(8), o = !0, a = e.t0;
                            case 16:
                                e.prev = 16, e.prev = 17, !i && l.return && l.return();
                            case 19:
                                if (e.prev = 19, !o) {
                                    e.next = 22;
                                    break
                                }
                                throw a;
                            case 22:
                                return e.finish(19);
                            case 23:
                                return e.finish(16);
                            case 24:
                                if (!k || !k.length) {
                                    e.next = 44;
                                    break
                                }
                                for (u = !0, d = !1, m = void 0, e.prev = 28, v = k[Symbol.iterator](); !(u = (y = v.next()).done); u = !0) g = y.value, document.querySelector('link[href="' + g + '"]') || r.push(Object(f.loadStyle)(g));
                                e.next = 36;
                                break;
                            case 32:
                                e.prev = 32, e.t1 = e.catch(28), d = !0, m = e.t1;
                            case 36:
                                e.prev = 36, e.prev = 37, !u && v.return && v.return();
                            case 39:
                                if (e.prev = 39, !d) {
                                    e.next = 42;
                                    break
                                }
                                throw m;
                            case 42:
                                return e.finish(39);
                            case 43:
                                return e.finish(36);
                            case 44:
                                return e.next = 46, Promise.all(r);
                            case 46:
                                w && h(w);
                            case 47:
                            case "end":
                                return e.stop()
                        }
                    }, e, p, [
                        [8, 12, 16, 24],
                        [17, , 19, 23],
                        [28, 32, 36, 44],
                        [37, , 39, 43]
                    ])
                }));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }(),
            v = this,
            y = function() {
                var e = o(regeneratorRuntime.mark(function e(t, n) {
                    var r, i, o, a, l, s = n.lazyBodyUrl,
                        c = n.lazyScripts,
                        u = n.lazyStyles,
                        d = n.lazyOnloadGlobal,
                        f = n.lazyOnloadArgs,
                        p = n.lazyOnloadIsConstructor;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r = "", !s) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 4, fetch(s);
                            case 4:
                                return i = e.sent, e.next = 7, i.text();
                            case 7:
                                r = e.sent;
                            case 8:
                                o = c && c.split(","), a = u && u.split(","), l = null, d && (l = {
                                    args: f && JSON.parse(f),
                                    global: d,
                                    isConstructor: "" === p || Boolean(p) && "false" !== p
                                }), m(t, {
                                    body: r,
                                    onLoad: l,
                                    scripts: o,
                                    styles: a
                                });
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }, e, v)
                }));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }(),
            g = this,
            b = function() {
                var e = a(regeneratorRuntime.mark(function e(t, n) {
                    var r, i, o, a, l, s;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, fetch(n);
                            case 2:
                                return r = e.sent, e.next = 5, r.json();
                            case 5:
                                i = e.sent, o = i.body, a = i.onLoad, l = i.scripts, s = i.styles, m(t, {
                                    body: o,
                                    onLoad: a,
                                    scripts: l,
                                    styles: s
                                });
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }, e, g)
                }));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }(),
            w = this,
            E = function() {
                var e = l(regeneratorRuntime.mark(function e(t) {
                    var n, r, i, o, a, l, s, u;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (e.prev = 0, t.dataset.lazyLoaded = !0, n = t.dataset, r = n.lazyManifestUrl, i = n.lazyBodyUrl, o = n.lazyScripts, a = n.lazyStyles, l = n.lazyOnloadGlobal, s = n.lazyOnloadArgs, u = n.lazyOnloadIsConstructor, !r) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 6, b(t, r);
                            case 6:
                                e.next = 10;
                                break;
                            case 8:
                                return e.next = 10, y(t, {
                                    lazyBodyUrl: i,
                                    lazyOnloadArgs: s,
                                    lazyOnloadGlobal: l,
                                    lazyOnloadIsConstructor: u,
                                    lazyScripts: o,
                                    lazyStyles: a
                                });
                            case 10:
                                e.next = 15;
                                break;
                            case 12:
                                e.prev = 12, e.t0 = e.catch(0), c.logger.error("Error loading lazy content", e.t0);
                            case 15:
                            case "end":
                                return e.stop()
                        }
                    }, e, w, [
                        [0, 12]
                    ])
                }));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(),
            k = function(e) {
                for (var t = e.offsetTop, n = e.offsetParent; n;) Number.isNaN(n.offsetTop) || Number.isNaN(n.offsetLeft) || (t += n.offsetTop), n = n.offsetParent;
                return t
            },
            _ = function(e, t) {
                var n = function() {
                    var n = e.filter(function(e) {
                        return e && !e.dataset.lazyLoaded
                    });
                    if (n.length) {
                        var r = t ? t.scrollTop : window.pageYOffset,
                            i = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
                            o = r + i + 300,
                            a = !0,
                            l = !1,
                            s = void 0;
                        try {
                            for (var c, u = n[Symbol.iterator](); !(a = (c = u.next()).done); a = !0) {
                                var d = c.value;
                                o > k(d) && E(d)
                            }
                        } catch (e) {
                            l = !0, s = e
                        } finally {
                            try {
                                !a && u.return && u.return()
                            } finally {
                                if (l) throw s
                            }
                        }
                    }
                };
                return Object(d.debounce)(n, 200)
            },
            S = function(e, t) {
                var n = !0,
                    r = !1,
                    i = void 0;
                try {
                    for (var o, a = e[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                        var l = o.value;
                        if (l.isIntersecting) return E(l.target), void t.unobserve(l.target)
                    }
                } catch (e) {
                    r = !0, i = e
                } finally {
                    try {
                        !n && a.return && a.return()
                    } finally {
                        if (r) throw i
                    }
                }
            },
            A = function(e, t) {
                var n = {
                        root: t || null,
                        rootMargin: "300px"
                    },
                    r = new IntersectionObserver(S, n),
                    i = !0,
                    o = !1,
                    a = void 0;
                try {
                    for (var l, s = e[Symbol.iterator](); !(i = (l = s.next()).done); i = !0) {
                        var c = l.value;
                        r.observe(c)
                    }
                } catch (e) {
                    o = !0, a = e
                } finally {
                    try {
                        !i && s.return && s.return()
                    } finally {
                        if (o) throw a
                    }
                }
            },
            O = function(e, t) {
                e && e.length && ("IntersectionObserver" in window ? A(e, t) : (t || window).addEventListener("scroll", _(e, t)))
            };
        n.d(t, "init", function() {
            return C
        }), n.d(t, "loaded", function() {
            return P
        }), n.d(t, "loadElement", function() {
            return E
        });
        var x = this,
            C = function() {
                var e = s(regeneratorRuntime.mark(function e() {
                    var t, n, r;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, Object(u.later)("DOM_READY");
                            case 3:
                                if (t = "feature" === window.PageCriteria.articleType, n = document.querySelector(".scrollable-content") || t && document.querySelector("#page-container"), r = Array.from(document.querySelectorAll("[data-lazy-content]:not([data-lazy-loaded])")), r.length) {
                                    e.next = 8;
                                    break
                                }
                                return e.abrupt("return");
                            case 8:
                                O(r, n), e.next = 14;
                                break;
                            case 11:
                                e.prev = 11, e.t0 = e.catch(0), c.logger.error("Error during mol-fe-lazy-load-content initialisation: ", e.t0);
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }, e, x, [
                        [0, 11]
                    ])
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }(),
            P = C()
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(i, o) {
                        try {
                            var a = t[i](o),
                                l = a.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!a.done) return Promise.resolve(l).then(function(e) {
                            r("next", e)
                        }, function(e) {
                            r("throw", e)
                        });
                        e(l)
                    }
                    return r("next")
                })
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(0),
            o = n(2),
            a = function() {
                var e = new RegExp(/(\?|&)msgRefresh=(\d+)/i),
                    t = window.location.search;
                return parseInt(e.exec(t) && e.exec(t)[2], 10)
            },
            l = function(e) {
                var t = new Date(1e3 * e);
                return t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds()
            },
            s = function(e, t) {
                return e - Math.floor(Date.now() / 1e3) + t
            },
            c = n(6),
            u = n.n(c),
            d = n(26),
            f = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            p = function(e, t) {
                return new Promise(function(n, r) {
                    var i = function(e, t) {
                        return e ? r(e) : n(t)
                    };
                    Object(d.a)(e, f({}, t, {
                        cb: i
                    }))
                })
            },
            h = p,
            m = function() {
                var e = document.getElementById("msgRefresh");
                return e || (e = document.createElement("div"), e.style.background = "#fff", e.style.border = "1px solid red", e.style.color = "red", e.style.left = 0, e.style.padding = "5px", e.style.position = "fixed", e.style.top = "200px", e.style.width = "100px", document.body.appendChild(e)), e
            },
            v = function(e) {
                new RegExp(/(\?|&)msgRefresh(=|&|$)/i).test(window.location.search) && (m().innerHTML = e)
            },
            y = v,
            g = this,
            b = !1,
            w = function() {
                return b
            },
            E = function() {
                var e = r(regeneratorRuntime.mark(function e(t) {
                    var n = t.pageType,
                        r = t.redirect,
                        i = void 0 !== r && r;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, h(window.location.href, {
                                    headers: {
                                        "Cache-Control": "no-cache",
                                        Expires: new Date(0),
                                        Pragma: "no-cache"
                                    }
                                });
                            case 2:
                                u.a.set("autorefresh", n, {
                                    path: "/"
                                }), u.a.set("cs_autorefresh", n, {
                                    path: "/"
                                }), window.location.replace(i ? "/" : window.location.href);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }, e, g)
                }));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(),
            k = function() {
                var e = r(regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return b = !0, e.prev = 1, e.next = 4, E({
                                    pageType: t,
                                    redirect: "article" === t
                                });
                            case 4:
                                e.next = 11;
                                break;
                            case 6:
                                e.prev = 6, e.t0 = e.catch(1), y("reloading failed"), i.logger.info("refresh", "Page Refresh > reloading failed"), b = !1;
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }, e, g, [
                        [1, 6]
                    ])
                }));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(),
            _ = function(e) {
                var t = e.isSmartphone,
                    n = e.pageType,
                    r = e.refresh,
                    i = e.refreshTablet,
                    o = e.timestamp,
                    c = a() || (t ? r : i),
                    u = navigator.userAgent.match(/crios/i),
                    d = void 0,
                    f = void 0,
                    p = "hidden",
                    h = "visibilitychange";
                void 0 !== document.hidden ? (p = "hidden", h = "visibilitychange") : void 0 !== document.mozHidden ? (p = "mozHidden", h = "mozvisibilitychange") : void 0 !== document.msHidden ? (p = "msHidden", h = "msvisibilitychange") : void 0 !== document.webkitHidden && (p = "webkitHidden", h = "webkitvisibilitychange");
                var m = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.type;
                    f = s(c, o), y(t + "<br/> loaded > " + l(o) + "<br/> reload in > " + f), !w() && !document[p] && f <= 0 && (y("reloading on > " + t), k(n))
                };
                f = s(c, o), f <= 0 && setTimeout(m, 200, {
                    type: "timer"
                }), document.addEventListener(h, m), window.addEventListener("pageshow", m), u && (d = Date.now(), setInterval(function() {
                    var e = Date.now();
                    e - d > 1e4 && m({
                        type: "heartbeat"
                    }), d = e
                }, 500))
            },
            S = _,
            A = function(e) {
                var t = e.pageType,
                    n = e.refreshDesktop,
                    r = a() || n;
                setTimeout(function() {
                    return k(t)
                }, 1e3 * r)
            },
            O = A,
            x = function() {
                var e = Object(o.getPageCriteria)(),
                    t = e.isMobile,
                    n = e.isTablet,
                    r = e.pageType,
                    i = e.refresh,
                    a = e.refreshDesktop,
                    l = e.refreshTablet,
                    s = e.timestamp;
                if (!("channel" !== r && "article" !== r || "number" != typeof s && "boolean" != typeof t && "boolean" != typeof n)) {
                    var c = t && !n,
                        u = !t;
                    c && "number" == typeof i && i > 0 || n && "number" == typeof l && l > 0 ? S({
                        isSmartphone: c,
                        pageType: r,
                        refresh: i,
                        refreshTablet: l,
                        timestamp: s
                    }) : u && "number" == typeof a && a > 0 && O({
                        pageType: r,
                        refreshDesktop: a,
                        timestamp: s
                    })
                }
            },
            C = x;
        n.d(t, "loaded", function() {
            return T
        });
        var P = this,
            T = function(e) {
                return function() {
                    var t = e.apply(this, arguments);
                    return new Promise(function(e, n) {
                        function r(i, o) {
                            try {
                                var a = t[i](o),
                                    l = a.value
                            } catch (e) {
                                return void n(e)
                            }
                            if (!a.done) return Promise.resolve(l).then(function(e) {
                                r("next", e)
                            }, function(e) {
                                r("throw", e)
                            });
                            e(l)
                        }
                        return r("next")
                    })
                }
            }(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, C();
                        case 3:
                            e.next = 8;
                            break;
                        case 5:
                            e.prev = 5, e.t0 = e.catch(0), i.logger.error("Error during mol-fe-menu initialisation: ", e.t0);
                        case 8:
                        case "end":
                            return e.stop()
                    }
                }, e, P, [
                    [0, 5]
                ])
            }))()
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
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

        function l(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function c(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function u(e, t) {
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

        function d(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function f(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function p(e, t) {
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

        function h(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var m = n(0),
            v = n(3),
            y = n(2),
            g = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
                    n = void 0;
                return function() {
                    for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                    n || (n = setTimeout(function() {
                        n = null, e.apply(void 0, i)
                    }, t))
                }
            },
            b = g,
            w = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.maxTimeout,
                    r = void 0 === n ? 1e3 : n,
                    i = t.checkInterval,
                    o = void 0 === i ? 100 : i,
                    a = t.noChangeCountToEnd,
                    l = void 0 === a ? 3 : a;
                if ("function" != typeof e) throw new TypeError("Provided callback is not a fucntion");
                var s = void 0,
                    c = void 0,
                    u = void 0,
                    d = void 0,
                    f = void 0,
                    p = function() {
                        clearInterval(s), clearTimeout(c)
                    },
                    h = function(t) {
                        return p(), s = null, c = null, e(t)
                    };
                return function(e) {
                    p(), s = setInterval(function() {
                        window.innerWidth === u && window.innerHeight === d ? ++f === l && h(e) : (u = window.innerWidth, d = window.innerHeight, f = 0)
                    }, o), c = setTimeout(function() {
                        h(e)
                    }, r)
                }
            },
            E = w,
            k = function(e) {
                var t = window.innerHeight,
                    n = window.innerWidth,
                    r = Math.max(e.clientHeight, e.clientHeight - t) >> 1,
                    i = Math.max(e.clientWidth, e.clientWidth - n) >> 1,
                    o = e.getBoundingClientRect(),
                    a = o.left > -i && o.right < n + i || o.left < 0 && o.right > n,
                    l = o.top > -r && o.bottom < t + r || o.top < 0 && o.bottom > t;
                return a && l
            },
            _ = k,
            S = function(e) {
                var t = e.getAttribute("data-src");
                return !t || e.src === t
            },
            A = function(e) {
                return new Promise(function(t, n) {
                    e.src ? e.complete && S(e) ? t() : (e.addEventListener("load", function() {
                        S(e) && t()
                    }), e.addEventListener("error", n)) : n(new Error("No image source found"))
                })
            },
            O = function(e) {
                return new Promise(function(t) {
                    switch (e.tagName.toLowerCase()) {
                        case "img":
                            t(A(e));
                            break;
                        case "video":
                            t();
                            break;
                        default:
                            t()
                    }
                })
            },
            x = O,
            C = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = e.getBoundingClientRect(),
                    r = window.getComputedStyle(e, ""),
                    i = {
                        bottom: "0px" === r.top ? "" : r.bottom,
                        float: r.float,
                        height: n.height + "px",
                        left: "0px" === r.right ? "" : r.left,
                        margin: r.margin,
                        position: "static" === r.position ? "" : r.position,
                        right: "0px" === r.left ? "" : r.right,
                        top: "0px" === r.bottom ? "" : r.top,
                        width: n.width + "px"
                    };
                return r.display && "inline" !== r.display ? i.display = r.display : i.display = "inline-block", t && (i.height = n.width / t + "px"), i
            },
            P = function(e, t) {
                var n = e.getBoundingClientRect(),
                    r = n.width,
                    i = n.width / t,
                    o = r / i,
                    a = 0,
                    l = 0;
                return o > t ? a = r - i * t >> 1 : l = i - r / t >> 1, {
                    padding: l + "px " + a + "px"
                }
            },
            T = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            L = function(e) {
                e && e.style && "" !== e.style.display && (e.style.display = "")
            },
            I = function(e) {
                e && e.style && "none" !== e.style.display && (e.style.display = "none")
            },
            j = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = n.showOriginalOnPause,
                        o = void 0 !== i && i;
                    r(this, e), this.element = t, this.originalElement = t, this.activeElement = t, this.initPromise = null, this.updatePromise = null, this.updateIsAllowed = !0, this.resized = !0, this.showOriginalOnPause = o
                }
                return T(e, [{
                    key: "isInViewport",
                    value: function() {
                        return _(this.activeElement)
                    }
                }, {
                    key: "setActive",
                    value: function(e) {
                        this.activeElement !== e && (I(this.activeElement), L(e), this.activeElement = e)
                    }
                }, {
                    key: "update",
                    value: function() {
                        var e = this;
                        return this.initPromise || (this.initPromise = x(this.element).then(function() {
                            return e.init()
                        })), this.updatePromise || (this.updatePromise = this.initPromise.then(function() {
                            return e.resized && e.setActive(e.originalElement), e.isInViewport() ? (e.resized && e.fixElementStyles(e.element), e.play()) : e.pause()
                        }).then(function() {
                            return e.updatePromise = null
                        })), this.updatePromise
                    }
                }, {
                    key: "onResize",
                    value: function() {
                        return this.resized = !0, this.update()
                    }
                }, {
                    key: "onScroll",
                    value: function() {
                        return this.update()
                    }
                }, {
                    key: "fixElementStyles",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        e !== this.originalElement && (Object.assign(e.style, C(this.originalElement, t)), this.resized = !1)
                    }
                }, {
                    key: "loadElement",
                    value: function(e) {
                        e && e instanceof HTMLElement && (this.setActive(this.originalElement), this.unloadElement(this.element), I(e), this.element = e, this.originalElement.after(e))
                    }
                }, {
                    key: "unloadElement",
                    value: function() {
                        this.element !== this.originalElement && (this.setActive(this.originalElement), this.element.remove(), this.element = this.originalElement)
                    }
                }, {
                    key: "init",
                    value: function() {
                        return Promise.resolve()
                    }
                }, {
                    key: "play",
                    value: function() {
                        this.setActive(this.element)
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.showOriginalOnPause && this.setActive(this.originalElement)
                    }
                }]), e
            }(),
            M = j,
            D = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            R = function e(t, n, r) {
                null === t && (t = Function.prototype);
                var i = Object.getOwnPropertyDescriptor(t, n);
                if (void 0 === i) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, n, r)
                }
                if ("value" in i) return i.value;
                var a = i.get;
                if (void 0 !== a) return a.call(r)
            },
            N = function(e) {
                var t = e.videoSrc,
                    n = e.poster,
                    r = e.styles,
                    i = void 0 === r ? {} : r,
                    o = document.createElement("video");
                return n && (o.poster = n), o.loop = !0, o.muted = !0, o.innerHTML = '<source src="' + t + '" type="video/mp4"/>', Object.assign(o.style, i), o
            },
            q = function(e) {
                function t() {
                    return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return a(t, e), D(t, [{
                    key: "init",
                    value: function() {
                        var e = this;
                        if ("video" === this.element.tagName.toLowerCase()) {
                            this.element.loop = !0;
                            Array.from(this.element.getElementsByTagName("source")).forEach(function(t) {
                                var n = t.getAttribute("data-src");
                                if (n) {
                                    var r = document.createElement("source");
                                    r.src = n, r.type = t.type, e.element.replaceChild(r, t)
                                }
                            })
                        } else {
                            var t = this.element.getAttribute("data-video");
                            if (t) {
                                var n = this.element.getAttribute("data-poster") || this.element.src,
                                    r = {
                                        height: this.element.clientHeight + "px",
                                        width: this.element.clientWidth + "px"
                                    },
                                    i = N({
                                        posterImg: n,
                                        styles: r,
                                        videoSrc: t
                                    });
                                this.loadElement(i)
                            }
                        }
                        return Promise.resolve()
                    }
                }, {
                    key: "play",
                    value: function() {
                        R(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "play", this).call(this), this.element && this.element.play && this.element.play()
                    }
                }, {
                    key: "pause",
                    value: function() {
                        R(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "pause", this).call(this), this.element && this.element.pause && this.element.pause()
                    }
                }]), t
            }(M),
            B = q,
            H = n(22),
            U = n.n(H),
            F = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            z = 1,
            V = function() {
                function e(t) {
                    var n = this,
                        r = t.container,
                        i = t.filmSrc,
                        o = t.fps,
                        a = t.frameCount,
                        s = t.filmHeight,
                        c = t.filmWidth,
                        u = t.frameHeight,
                        d = t.frameWidth;
                    l(this, e), this.container = r, this.frameHolders = [], this.frameHoldersCount = 1, this.filmSrc = i, this.frameCount = a, this.frameInterval = parseInt(1e3 / (o * z), 10), this.framesPerRow = Math.floor(c / d), this.framesRows = Math.floor(s / u), this.isPlaying = !1, this.currentFrame = 0, this.lastFrameTimestamp = null, this.lastAnimationFrameRequest = null, this.container.setAttribute("data-playback", Object.getPrototypeOf(this).constructor.name), window.addEventListener("beforeunload", function() {
                        n.pause(), n.lastAnimationFrameRequest && window.cancelAnimationFrame(n.lastAnimationFrameRequest)
                    })
                }
                return F(e, [{
                    key: "render",
                    value: function() {
                        var e = this;
                        this.frameHoldersWrapper ? Array.from(this.frameHoldersWrapper.children).forEach(function(e) {
                            return e.remove()
                        }) : (this.frameHoldersWrapper = document.createElement("div"), this.frameHoldersWrapper.className = U.a.frameHoldersWrapper, this.container.appendChild(this.frameHoldersWrapper)), this.frameHolders = new Array(this.frameHoldersCount).fill().map(function() {
                            var t = e.createFrameHolder();
                            return e.frameHoldersWrapper.appendChild(t), t
                        })
                    }
                }, {
                    key: "createFrameHolder",
                    value: function() {
                        var e = document.createElement("div");
                        return e.className = U.a.currentHolder, e.style["background-image"] = 'url("' + this.filmSrc + '")', e.style["background-size"] = 100 * this.framesPerRow + "% " + 100 * this.framesRows + "%", e
                    }
                }, {
                    key: "getCurrentFrameBackgroundPosition",
                    value: function() {
                        return "-" + this.currentFrame % this.framesPerRow * 100 + "% -" + 100 * Math.floor(this.currentFrame / this.framesPerRow) + "%"
                    }
                }, {
                    key: "nextFrame",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.currentFrame + 1;
                        this.currentFrame = e % this.frameCount, this.setFrameHolderNext(this.frameHolders[0])
                    }
                }, {
                    key: "setFrameHolderNext",
                    value: function(e) {
                        e.className = U.a.nextHolder, e.style["background-position"] = this.getCurrentFrameBackgroundPosition()
                    }
                }, {
                    key: "play",
                    value: function() {
                        this.isPlaying || (this.isPlaying = !0, this.lastFrameTimestamp = 0, this.animationStep())
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.isPlaying = !1
                    }
                }, {
                    key: "animationStep",
                    value: function() {
                        var e = this;
                        this.lastAnimationFrameRequest = window.requestAnimationFrame(function(t) {
                            e.isPlaying && (t - e.lastFrameTimestamp > e.frameInterval && (e.lastFrameTimestamp = t, e.nextFrame()), e.animationStep())
                        })
                    }
                }]), e
            }(),
            W = V,
            G = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            Y = function e(t, n, r) {
                null === t && (t = Function.prototype);
                var i = Object.getOwnPropertyDescriptor(t, n);
                if (void 0 === i) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, n, r)
                }
                if ("value" in i) return i.value;
                var a = i.get;
                if (void 0 !== a) return a.call(r)
            },
            X = function(e) {
                function t(e) {
                    s(this, t);
                    var n = c(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.fadeDuration = e.fadeDuration || n.frameInterval / 1e3, n.fadeTiming = e.fadeTiming || "ease-in-out", n.frameHoldersCount = 3, n
                }
                return u(t, e), G(t, [{
                    key: "createFrameHolder",
                    value: function() {
                        var e = Y(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "createFrameHolder", this).call(this);
                        return Object.assign(e.style, {
                            "transition-duration": this.fadeDuration + "s",
                            "transition-timing-function": this.fadeTiming
                        }), e
                    }
                }, {
                    key: "nextFrame",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.currentFrame + 1;
                        this.currentFrame = e % this.frameCount, this.frameHolders.push(this.frameHolders.shift()), this.frameHolders[0].className = U.a.frameHolder, this.frameHolders[1].className = U.a.currentHolder, this.setFrameHolderNext(this.frameHolders[2])
                    }
                }]), t
            }(W),
            K = X,
            J = n(45),
            Q = n.n(J),
            Z = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            $ = function e(t, n, r) {
                null === t && (t = Function.prototype);
                var i = Object.getOwnPropertyDescriptor(t, n);
                if (void 0 === i) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, n, r)
                }
                if ("value" in i) return i.value;
                var a = i.get;
                if (void 0 !== a) return a.call(r)
            },
            ee = {
                filmSrc: "film",
                fps: "fps",
                frameCount: "frame-count",
                frameHeight: "frame-height",
                frameWidth: "frame-width"
            },
            te = function() {
                var e = document.createElement("div");
                return e.className = Q.a.container, e
            },
            ne = function(e) {
                function t(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    d(this, t);
                    var r = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                    r.dataQualityPrefix = n.quality ? "data-" + n.quality : "data", r.filmSrc = r.element.getAttribute(r.dataQualityPrefix + "-film"), r.fps = parseFloat(r.originalElement.getAttribute(r.dataQualityPrefix + "-fps")), r.frameCount = parseInt(r.originalElement.getAttribute(r.dataQualityPrefix + "-frame-count"), 10), r.frameWidth = parseInt(r.originalElement.getAttribute(r.dataQualityPrefix + "-frame-width"), 10), r.frameHeight = parseInt(r.originalElement.getAttribute(r.dataQualityPrefix + "-frame-height"), 10), r.frameRatio = r.frameWidth / r.frameHeight, r.hasPlayed = !1;
                    var i = Object.keys(ee).find(function(e) {
                        return !r[e]
                    });
                    if (i) throw new Error("Missing or invalid data attribute " + r.dataQualityPrefix + "-" + ee[i]);
                    return r
                }
                return p(t, e), Z(t, [{
                    key: "fixElementStyles",
                    value: function(e) {
                        return $(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "fixElementStyles", this).call(this, e, this.frameRatio), Object.assign(e.style, P(this.originalElement, this.frameRatio)), this
                    }
                }, {
                    key: "preloadFilm",
                    value: function() {
                        var e = this;
                        return this.preloadFilmPromise || (this.preloadFilmPromise = new Promise(function(t, n) {
                            var r = new Image;
                            return r.onload = function() {
                                return t(r)
                            }, r.onerror = function() {
                                return n(new Error("Error loading film element"))
                            }, r.src = e.filmSrc, r
                        }).then(function(t) {
                            return e.filmElement = t, t
                        })), this.preloadFilmPromise
                    }
                }, {
                    key: "getPlaybackFadeOptions",
                    value: function() {
                        return {
                            fadeDuration: parseFloat(this.originalElement.getAttribute(this.dataQualityPrefix + "-fade")),
                            fadeTiming: parseFloat(this.originalElement.getAttribute(this.dataQualityPrefix + "-fade-timing"))
                        }
                    }
                }, {
                    key: "initFilm",
                    value: function() {
                        var e = this;
                        return this.preloadFilm().then(function() {
                            var t = te();
                            e.loadElement(t);
                            var n = {
                                container: t,
                                filmHeight: e.filmElement.naturalHeight,
                                filmSrc: e.filmSrc,
                                filmWidth: e.filmElement.naturalWidth,
                                fps: e.fps,
                                frameCount: e.frameCount,
                                frameHeight: e.frameHeight,
                                frameWidth: e.frameWidth
                            };
                            return e.originalElement.hasAttribute("data-fade") ? (Object.assign(n, e.getPlaybackFadeOptions()), e.playbackManager = new K(n)) : e.playbackManager = new W(n), e.resized && e.setActive(e.originalElement), e.playbackManager.render()
                        })
                    }
                }, {
                    key: "update",
                    value: function() {
                        var e = this;
                        return this.updatePromise ? this.updatePromise : (this.isInViewport() && (this.updatePromise = this.play().then(function(t) {
                            return e.updatePromise = null, t
                        })), this.pause())
                    }
                }, {
                    key: "play",
                    value: function() {
                        var e = this;
                        return this.initPromise || (this.initPromise = x(this.element).then(function() {
                            return e.initFilm()
                        })), this.initPromise.then(function() {
                            return e.resized && (e.setActive(e.originalElement), e.fixElementStyles(e.element)), $(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "play", e).call(e), e.hasPlayed = !0, e.playbackManager && e.playbackManager.play()
                        })
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.hasPlayed && ($(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "pause", this).call(this), this.playbackManager.pause())
                    }
                }]), t
            }(M),
            re = ne,
            ie = Object(y.getPageCriteria)(),
            oe = ie.isTablet,
            ae = ie.isMobile && !ie.isTablet,
            le = [],
            se = b(function() {
                le.forEach(function(e) {
                    return e.onScroll()
                })
            }, 100),
            ce = void 0,
            ue = function() {
                cancelAnimationFrame(ce), ce = requestAnimationFrame(function() {
                    le.forEach(function(e) {
                        return e.onResize()
                    })
                })
            },
            de = E(function() {
                le.forEach(function(e) {
                    return e.onResize()
                })
            }),
            fe = function() {
                if (window.addEventListener("orientationchange", de), window.addEventListener("resize", ue), window.addEventListener("scroll", se), ae) {
                    var e = document.querySelector(".scrollable-content");
                    e && e.addEventListener("scroll", se)
                }
            },
            pe = function(e) {
                if (oe) {
                    if (e.getAttribute("data-hd-film")) return new re(e, {
                        quality: "hd"
                    })
                } else if (ae) {
                    if (e.getAttribute("data-film")) return new re(e, {
                        showOriginalOnPause: !0
                    })
                } else {
                    if (e.getAttribute("data-video") || "video" === e.tagName.toLowerCase()) return new B(e);
                    if (e.getAttribute("data-hd-film")) return new re(e, {
                        quality: "hd"
                    });
                    if (e.getAttribute("data-film")) return new re(e)
                }
                return null
            },
            he = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = [].concat(e).filter(function(e) {
                        return e && !e.molFeVideoPreview
                    }).map(function(e) {
                        try {
                            var t = pe(e);
                            if (t) return e.molFeVideoPreview = t, t.update(), t
                        } catch (e) {
                            m.logger.error(e)
                        }
                        return null
                    }).filter(function(e) {
                        return null !== e
                    });
                return le.push.apply(le, h(t)), t
            },
            me = function(e) {
                return he([e])[0]
            };
        n.d(t, "loaded", function() {
            return ve
        }), n.d(t, "renderSingleVideoPreview", function() {
            return me
        }), n.d(t, "renderVideoPreviews", function() {
            return he
        });
        var ve = Object(v.later)("DOM_READY").then(function() {
            if (window.location.search && window.location.search.match(/disableVideoPreview=1/i)) return null;
            var e = Array.from(document.querySelectorAll("[data-mol-fe-video-preview]"));
            return he(e), fe(), e
        }).catch(function(e) {
            m.logger.error("Error during mol-fe-video-preview initialisation: ", e)
        })
    }, function(e, t) {
        e.exports = {
            container: "container-_7BCD"
        }
    }, , , , , , , , function(e, t, n) {
        "use strict";

        function r(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(i, o) {
                        try {
                            var a = t[i](o),
                                l = a.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!a.done) return Promise.resolve(l).then(function(e) {
                            r("next", e)
                        }, function(e) {
                            r("throw", e)
                        });
                        e(l)
                    }
                    return r("next")
                })
            }
        }
        var i = n(54),
            o = (n.n(i), function() {
                var e = this,
                    t = function(e, t) {
                        return t > 0 && Math.round(e / t * 100) || 0
                    },
                    n = function(e, t, n) {
                        var r = document.querySelector(".poll-" + e + ".poll-results"),
                            i = document.querySelector("#poll-" + e),
                            o = Math.round(.55 * parseInt(getComputedStyle(r).width, 10)),
                            a = Math.round(.55 * parseInt(getComputedStyle(i).width, 10)),
                            l = o > a ? o : a;
                        return n > 0 ? Math.round(t * l / n) : 0
                    },
                    i = function(e) {
                        for (var t = 0, n = 0; n < e.length; n++) {
                            var r = e[n],
                                i = r.querySelector('input[name*="votes"]');
                            t += parseInt(i.value, 10)
                        }
                        return t
                    },
                    o = function(e) {
                        var t = e.toString().split(".");
                        return t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","), t.join(".")
                    },
                    a = function(e, t, n) {
                        for (var r = 0, i = 0; i < e.length; i++) {
                            var o = e[i],
                                a = o.querySelector('input[name*="votes"]'),
                                l = o.querySelector('input[name*="answer"]'),
                                s = parseInt(a.value, 10);
                            s = n || parseInt(l.value, 10) !== t ? s : s + 1, r = s > r ? s : r
                        }
                        return r
                    },
                    l = function(e) {
                        var t = localStorage.poll;
                        if (t)
                            for (var n = t.split("_"), r = 0; r < n.length; r++)
                                if (-1 !== n[r].indexOf(e)) return n[r].split("-")[1]
                    },
                    s = function(e, t) {
                        localStorage.poll ? l(e) || (localStorage.poll = "poll=" + e + "-" + t) : localStorage.poll = "poll=" + e + "-" + t
                    },
                    c = function(e, r, l, s, c) {
                        for (var u = a(l, r, c), d = i(l), f = [], p = 0; p < l.length; p++) {
                            var h = l[p],
                                m = {},
                                v = h.querySelector('input[name*="votes"]'),
                                y = h.querySelector('input[name*="answer"]'),
                                g = parseInt(v.value, 10);
                            parseInt(y.value, 10) !== r || c ? m.votes = g : (m.votes = g + 1, d++), m.percentage = t(m.votes, d) + "%", m.barLength = n(e, m.votes, u), f.push(m)
                        }
                        for (var b = 0; b < s.length; b++) {
                            var w = s[b],
                                E = w.querySelector("span.results-score span:first-of-type"),
                                k = w.querySelector("span.vote-results-bar");
                            if (E.innerText = f[b].percentage, k.style.width = f[b].barLength + "px", 1 === f[b].votes) {
                                w.querySelector("span.results-votes").innerText = Math.floor(f[b].votes) + " vote"
                            } else {
                                w.querySelector("span.results-votes").innerText = o(Math.floor(f[b].votes)) + " votes"
                            }
                        }
                    },
                    u = function(e, t, n) {
                        var r = document.querySelector("#poll-" + e.params.pollId),
                            i = r.querySelectorAll("div.poll-answer"),
                            o = document.querySelectorAll("." + e.id + " .poll-results .poll-answers li");
                        c(e.params.pollId, t, i, o, n), r.style.display = "none", document.querySelector("." + e.id + " div.poll-results").style.display = "block"
                    },
                    d = function(e, n, r) {
                        var o = Array.from(document.querySelectorAll(".poll")),
                            a = Array.from(document.querySelectorAll(".poll-mini-" + e + " ul li .poll-question .answer"));
                        if (o.length > 0 && 0 === a.length) {
                            var l = document.querySelector('label[for="answer-' + e + "-" + n + '"]'),
                                s = document.querySelectorAll("#poll-" + e + " div.poll-answer"),
                                c = i(s),
                                u = document.querySelector("input#answer-" + e + "-" + n + "-votes").value,
                                d = t(r ? parseInt(u, 10) : parseInt(u, 10) + 1, c + 1),
                                f = document.querySelector("ul.poll-mini-" + e + " li .poll-question"),
                                p = document.createDocumentFragment(),
                                h = document.createElement("div");
                            for (h.innerHTML = '\n        <br/>\n        <span class="answer">You said <b>' + l.textContent + '</b>.\n        <span class="ccox"><b>' + d + "%</b></span> of others agreed with you.</span>\n      "; h.childNodes[0];) p.appendChild(h.childNodes[0]);
                            f.appendChild(p);
                            var m = document.querySelector("ul.poll-mini-" + e),
                                v = document.querySelector("ul.poll-mini-" + e + " li.question");
                            m.style.height = v.offsetHeight + "px"
                        }
                    },
                    f = function() {
                        var t = r(regeneratorRuntime.mark(function t(n, r, i) {
                            var o, a, l, c;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (o = i.params.pollId, a = i.params.questionId, l = document.querySelector("#poll-" + o + " #" + r.getAttribute("for")), l.setAttribute("checked", !0), !(c = parseInt(document.querySelector("#poll-" + o + ' input[name="answer"]:checked').value, 10))) {
                                            e.next = 11;
                                            break
                                        }
                                        return e.next = 8, fetch("/polls/answer", {
                                            body: JSON.stringify({
                                                "answer-id": String(c),
                                                "poll-id": o,
                                                "question-id": a
                                            }),
                                            headers: {
                                                "Content-Type": "application/json"
                                            },
                                            method: "POST"
                                        });
                                    case 8:
                                        s(i.params.pollId, c), u(i, c, !1), i.params.isMobile && d(i.params.pollId, c, !1);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }, t, e)
                        }));
                        return function(e, n, r) {
                            return t.apply(this, arguments)
                        }
                    }(),
                    p = function(e) {
                        var t = l(e.params.pollId);
                        if (t) {
                            document.querySelector("#poll-" + e.params.pollId + " #answer-" + e.params.pollId + "-" + t).checked = !0, u(e, t, !0), e.params.isMobile && d(e.params.pollId, t, !0)
                        }
                    },
                    h = function(e) {
                        var t = document.querySelector(".poll .poll-mini-" + e.params.pollId + " li.question"),
                            n = Math.round(parseInt(getComputedStyle(document.querySelector(".poll ul")).width, 10) - 135);
                        if (t.style.width = n + "px", document.querySelector(".poll .poll-mini-" + e.params.pollId).addEventListener("click", function() {
                                var t = document.querySelector("#mobile-poll-" + e.params.pollId);
                                t.classList.add("show");
                                var n = document.querySelector("#mobile-poll-" + e.params.pollId),
                                    r = document.querySelector("#poll-content");
                                r.innerHTML = n.innerHTML, r.classList.add("active"), t.innerHTML = "";
                                for (var i = document.querySelectorAll("#poll-" + e.params.pollId + " .answer-label"), o = 0; o < i.length; o++) ! function(t) {
                                    i[t].addEventListener("click", function(n) {
                                        f(n, i[t], e)
                                    }, !1)
                                }(o);
                                DMS.PollShare.init(e.id, e.params.mobilePollShare);
                                var a = document.querySelector("#poll-content .poll-single .close"),
                                    l = function e() {
                                        t.innerHTML = r.innerHTML, t.classList.remove("show"), r.innerHTML = "", r.classList.remove("active"), a.removeEventListener("click", e, !1)
                                    };
                                a.addEventListener("click", l, !1)
                            }, !1), document.getElementById("sponsored-poll-mobile")) {
                            var r = document.querySelector("#sponsored-poll-mobile video").clone();
                            document.querySelector("#sponsored-poll-mobile").remove();
                            var i = document.createElement("div");
                            i.className = "vjs-video-container vjs-responsive news";
                            var o = document.createElement("video");
                            o.className = "video-js vjs-default-skin", o.setAttribute("id", o.getAttribute("id")), o.setAttribute("controls", ""), o.setAttribute("width", "640"), o.setAttribute("height", "264"), o.setAttribute("preload", "none"), o.setAttribute("data-opts", r.getAttribute("data-opts"));
                            var a = JSON.parse(r.getAttribute("data-opts")),
                                l = document.createElement("source");
                            l.setAttribute("type", r.children().attr("type")), l.setAttribute("src", a.src);
                            var s = document.createElement("div"),
                                c = document.createElement("p");
                            s.className = "video-fake-title", c.innerText = a.title, setTimeout(function() {
                                i.appendChild(o), o.appendChild(l), s.appendChild(c), document.querySelector("#poll-content .poll-single .poll-sponsored-mobile").appendChild(s), document.querySelector("#poll-content .poll-single .poll-sponsored-mobile").appendChild(i), DM.setupMolVideoJsPlayers(o)
                            }, 1)
                        }
                    },
                    m = function(e) {
                        e.params.isMobile && h(e);
                        for (var t = document.querySelectorAll("#poll-" + e.params.pollId + " .answer-label"), n = 0; n < t.length; n++) {
                            t[n].addEventListener("click", function(t) {
                                return f(t, t.target, e)
                            }, !1)
                        }
                        setTimeout(function() {
                            return p(e)
                        }, 100)
                    };
                return {
                    init: function(e) {
                        m(e)
                    }
                }
            }());
        t.a = o
    }, function(e, t) {}, function(e, t) {
        e.exports = s
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t, n) {
            this.helpers = e || {}, this.partials = t || {}, this.decorators = n || {}, s.registerDefaultHelpers(this), c.registerDefaultDecorators(this)
        }
        t.__esModule = !0, t.HandlebarsEnvironment = i;
        var o = n(13),
            a = n(20),
            l = r(a),
            s = n(85),
            c = n(93),
            u = n(95),
            d = r(u);
        t.VERSION = "4.0.12";
        t.COMPILER_REVISION = 7;
        var f = {
            1: "<= 1.0.rc.2",
            2: "== 1.0.0-rc.3",
            3: "== 1.0.0-rc.4",
            4: "== 1.x.x",
            5: "== 2.0.0-alpha.x",
            6: ">= 2.0.0-beta.1",
            7: ">= 4.0.0"
        };
        t.REVISION_CHANGES = f;
        i.prototype = {
            constructor: i,
            logger: d.default,
            log: d.default.log,
            registerHelper: function(e, t) {
                if ("[object Object]" === o.toString.call(e)) {
                    if (t) throw new l.default("Arg not supported with multiple helpers");
                    o.extend(this.helpers, e)
                } else this.helpers[e] = t
            },
            unregisterHelper: function(e) {
                delete this.helpers[e]
            },
            registerPartial: function(e, t) {
                if ("[object Object]" === o.toString.call(e)) o.extend(this.partials, e);
                else {
                    if (void 0 === t) throw new l.default('Attempting to register a partial called "' + e + '" as undefined');
                    this.partials[e] = t
                }
            },
            unregisterPartial: function(e) {
                delete this.partials[e]
            },
            registerDecorator: function(e, t) {
                if ("[object Object]" === o.toString.call(e)) {
                    if (t) throw new l.default("Arg not supported with multiple decorators");
                    o.extend(this.decorators, e)
                } else this.decorators[e] = t
            },
            unregisterDecorator: function(e) {
                delete this.decorators[e]
            }
        };
        var p = d.default.log;
        t.log = p, t.createFrame = o.createFrame, t.logger = d.default
    }, function(e, t) {
        e.exports = {
            container: "container-1YSGx",
            disableNext: "disableNext-1mHKf",
            disablePrev: "disablePrev-ky_sG"
        }
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            o = function() {
                function e(t) {
                    r(this, e), this.element = t || document.createElement("div"), this.element.id || (this.element.id = "control-" + Math.random().toString(36).substr(2, 10)), this.element.controlInstance = this, this._init()
                }
                return i(e, [{
                    key: "_init",
                    value: function() {
                        this._initElements(), this._initEvents()
                    }
                }, {
                    key: "_initElements",
                    value: function() {}
                }, {
                    key: "_initEvents",
                    value: function() {}
                }, {
                    key: "_emit",
                    value: function(e, t) {
                        this.element.dispatchEvent(new CustomEvent(e, {
                            detail: t
                        }))
                    }
                }, {
                    key: "off",
                    value: function(e, t) {
                        this.element.removeEventListener(e, t)
                    }
                }, {
                    key: "on",
                    value: function(e, t) {
                        this.element.addEventListener(e, t)
                    }
                }, {
                    key: "once",
                    value: function(e, t) {
                        var n = this,
                            r = function r(i) {
                                t(i), n.element.removeEventListener(e, r)
                            };
                        this.element.addEventListener(e, r)
                    }
                }]), e
            }();
        t.default = o
    }, , , , , , , , , , , , , , , , , , , , function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var i = {
                DATA_PAGE: "data-page",
                DATA_SRC: "data-src"
            },
            o = {
                PAGE_NEXT: "next",
                PAGE_PREVIOUS: "prev"
            },
            a = {
                ACTIVE: "link-wocc",
                DISABLED: "disabled",
                PAGES: "rotator-pages",
                PANELS: "rotator-panels"
            },
            l = {
                ACTIVE_PAGE: 1,
                IS_LOOPING_ENABLED: !0,
                ITEMS_PER_PAGE_COUNT: 3,
                PAGE_COUNT: 4,
                SCROLL_DIRECTION: "horizontal"
            },
            s = {
                LAZY_LOADED_IMAGES: "[" + i.DATA_SRC + "]",
                PAGE: "div, li",
                PAGES: "." + a.PAGES,
                PAGING_CONTROL: "a",
                PANELS: "." + a.PANELS
            },
            c = {
                ATTRIBUTE_KEYS: i,
                ATTRIBUTE_VALUES: o,
                CSS_CLASSES: a,
                DEFAULTS: l,
                SELECTORS: s
            },
            u = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            d = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    r(this, e), this.activePage = void 0, this.configuration = n, this.containerElementId = t, this.imagesRequested = !1, this.setActivePage(this.getActivePage()), this.bindEvents()
                }
                return u(e, [{
                    key: "bindEvents",
                    value: function() {
                        var e = this,
                            t = this.getPagesContainerElement();
                        t && t.addEventListener("click", function(t) {
                            t.target.closest("a") && t.preventDefault();
                            var n = t.target.closest(c.SELECTORS.PAGING_CONTROL);
                            if (n) {
                                var r = n.getAttribute(c.ATTRIBUTE_KEYS.DATA_PAGE);
                                if (r === c.ATTRIBUTE_VALUES.PAGE_NEXT) e.next();
                                else if (r === c.ATTRIBUTE_VALUES.PAGE_PREVIOUS) e.previous();
                                else {
                                    var i = Number(r);
                                    Number.isNaN(i) || e.scrollTo(i)
                                }
                            }
                        })
                    }
                }, {
                    key: "getActiveCssClass",
                    value: function() {
                        return this.configuration.activeClass || c.CSS_CLASSES.ACTIVE
                    }
                }, {
                    key: "getActivePage",
                    value: function() {
                        return void 0 === this.activePage ? c.DEFAULTS.ACTIVE_PAGE : this.activePage
                    }
                }, {
                    key: "getContainerElement",
                    value: function() {
                        var e = document.getElementById(this.containerElementId);
                        return this.getContainerElement = function() {
                            return e
                        }, e
                    }
                }, {
                    key: "getItemsLastPageCount",
                    value: function() {
                        var e = this.getPanelsContainerElement(),
                            t = this.getItemsPerPageCount();
                        if (e) {
                            var n = e.querySelectorAll("li"),
                                r = n.length && n.length % this.getItemsPerPageCount();
                            r && (t = r)
                        }
                        return t
                    }
                }, {
                    key: "getItemsPerPageCount",
                    value: function() {
                        return void 0 === this.configuration.pageSize ? c.DEFAULTS.ITEMS_PER_PAGE_COUNT : this.configuration.pageSize
                    }
                }, {
                    key: "getItemScrollOffset",
                    value: function() {
                        var e = void 0,
                            t = this.getPanelsContainerElement();
                        if (t) {
                            var n = Array.from(t.children).find(function(e) {
                                return e.matches("li")
                            });
                            if (n) {
                                var r = getComputedStyle(n);
                                e = this.isVertical() ? (parseFloat(r.marginBottom) || 0) + (parseFloat(r.height) || 0) : (parseFloat(r.marginRight) || 0) + (parseFloat(r.width) || 0)
                            }
                        }
                        return e
                    }
                }, {
                    key: "getPageCount",
                    value: function() {
                        return void 0 === this.configuration.pageCount ? c.DEFAULTS.PAGE_COUNT : this.configuration.pageCount
                    }
                }, {
                    key: "getPagesContainerElement",
                    value: function() {
                        var e = this.getContainerElement();
                        return e && e.querySelector(this.configuration.video ? this.configuration.video.pages : c.SELECTORS.PAGES)
                    }
                }, {
                    key: "getPanelsContainerElement",
                    value: function() {
                        var e = this.getContainerElement();
                        return e && e.querySelector(this.configuration.video ? this.configuration.video.panels : c.SELECTORS.PANELS)
                    }
                }, {
                    key: "getScrollDirection",
                    value: function() {
                        return void 0 === this.configuration.scrollDirection ? c.DEFAULTS.SCROLL_DIRECTION : this.configuration.scrollDirection
                    }
                }, {
                    key: "isLoopingEnabled",
                    value: function() {
                        return void 0 === this.configuration.rotate ? c.DEFAULTS.IS_LOOPING_ENABLED : this.configuration.rotate
                    }
                }, {
                    key: "isVertical",
                    value: function() {
                        return "vertical" === this.getScrollDirection()
                    }
                }, {
                    key: "getScrollOffset",
                    value: function(e) {
                        return 1 === e ? 0 : e !== this.getPageCount() || this.isLoopingEnabled() ? (e - 1) * this.getItemScrollOffset() * this.getItemsPerPageCount() * -1 : -1 * ((e - 2) * this.getItemScrollOffset() * this.getItemsPerPageCount() + this.getItemScrollOffset() * this.getItemsLastPageCount())
                    }
                }, {
                    key: "next",
                    value: function() {
                        var e = this.getActivePage(),
                            t = this.getPageCount();
                        e >= t ? e = this.isLoopingEnabled() ? 1 : t : e += 1, this.scrollTo(e)
                    }
                }, {
                    key: "previous",
                    value: function() {
                        var e = this.getActivePage(),
                            t = this.getPageCount();
                        e <= 1 ? e = this.isLoopingEnabled() ? t : 1 : e -= 1, this.scrollTo(e)
                    }
                }, {
                    key: "requestImages",
                    value: function() {
                        if (!this.imagesRequested) {
                            var e = this.getPanelsContainerElement();
                            e && Array.from(e.querySelectorAll(c.SELECTORS.LAZY_LOADED_IMAGES)).forEach(function(e) {
                                return window.DM.LazyLoad(e)
                            }), this.imagesRequested = !0
                        }
                        return this
                    }
                }, {
                    key: "scrollTo",
                    value: function(e) {
                        var t = this.getPanelsContainerElement();
                        if (this.requestImages(), this.setActivePage(e), t) {
                            var n = this.getScrollOffset(e);
                            "vertical" === this.getScrollDirection() ? t.style.transform = "translateY(" + n + "px)" : t.style.transform = "translateX(" + n + "px)"
                        }
                    }
                }, {
                    key: "setActivePage",
                    value: function(e) {
                        var t = this,
                            n = this.getPagesContainerElement();
                        if (n) {
                            var r = e <= 1,
                                i = e >= this.getPageCount(),
                                o = 1 === this.getPageCount();
                            Array.from(n.querySelectorAll(c.SELECTORS.PAGE)).forEach(function(n) {
                                var a = n.querySelector(c.SELECTORS.PAGING_CONTROL).getAttribute(c.ATTRIBUTE_KEYS.DATA_PAGE),
                                    l = a === c.ATTRIBUTE_VALUES.PAGE_NEXT,
                                    s = a === c.ATTRIBUTE_VALUES.PAGE_PREVIOUS,
                                    u = s && r || l && i,
                                    d = e && a === e.toString(),
                                    f = o || !t.isLoopingEnabled() && u;
                                n.classList[d ? "add" : "remove"](t.getActiveCssClass()), n.classList[f ? "add" : "remove"](c.CSS_CLASSES.DISABLED)
                            })
                        }
                        return this.activePage = e, this
                    }
                }], [{
                    key: "initMiniCarousel",
                    value: function() {
                        new e("mini-carousel-wrapper", {
                            pageCount: 4,
                            pageSize: 6,
                            rotate: !1
                        })
                    }
                }, {
                    key: "initMiniCarouselExt",
                    value: function(t, n, r) {
                        new e(t, {
                            pageCount: r,
                            pageSize: n,
                            rotate: !1
                        })
                    }
                }]), e
            }();
        t.a = d
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(i, o) {
                        try {
                            var a = t[i](o),
                                l = a.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!a.done) return Promise.resolve(l).then(function(e) {
                            r("next", e)
                        }, function(e) {
                            r("throw", e)
                        });
                        e(l)
                    }
                    return r("next")
                })
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
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
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            s = n(58),
            c = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(s),
            u = function(e) {
                function t(e, n) {
                    var r = n.interval;
                    i(this, t);
                    var a = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return a.interval = r, a.intervalId = null, a.enabled = !1, a.isRunning = !1, a
                }
                return a(t, e), l(t, [{
                    key: "start",
                    value: function() {
                        var e = this;
                        return this.intervalId = setInterval(function() {
                            return e.run()
                        }, this.interval), this.enable()
                    }
                }, {
                    key: "stop",
                    value: function() {
                        return clearInterval(this.intervalId), this.intervalId = null, this.disable()
                    }
                }, {
                    key: "enable",
                    value: function() {
                        return this.intervalId ? this.enabled = !0 : this.start(), this
                    }
                }, {
                    key: "disable",
                    value: function() {
                        return this.enabled = !1, this
                    }
                }, {
                    key: "run",
                    value: function() {
                        function e() {
                            return t.apply(this, arguments)
                        }
                        var t = r(regeneratorRuntime.mark(function e() {
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.enabled || this.isRunning) {
                                            e.next = 5;
                                            break
                                        }
                                        return this.isRunning = !0, e.next = 4, this._run();
                                    case 4:
                                        this.isRunning = !1;
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));
                        return e
                    }()
                }, {
                    key: "_run",
                    value: function() {
                        function e() {
                            return t.apply(this, arguments)
                        }
                        var t = r(regeneratorRuntime.mark(function e() {
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));
                        return e
                    }()
                }]), t
            }(c.default);
        t.default = u
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(i, o) {
                        try {
                            var a = t[i](o),
                                l = a.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!a.done) return Promise.resolve(l).then(function(e) {
                            r("next", e)
                        }, function(e) {
                            r("throw", e)
                        });
                        e(l)
                    }
                    return r("next")
                })
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(0),
            o = n(25);
        t.default = {
            getByChannel: function() {
                var e = r(regeneratorRuntime.mark(function e(t) {
                    var n, r, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        l = a.page,
                        s = void 0 === l ? 0 : l;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = void 0, e.prev = 1, e.next = 4, fetch("/api/latest_headlines/" + t + "/" + 30 * s + ".json");
                            case 4:
                                return r = e.sent, e.next = 7, r.json();
                            case 7:
                                n = e.sent, e.next = 14;
                                break;
                            case 10:
                                e.prev = 10, e.t0 = e.catch(1), i.logger.error("Error fetching for channel: " + t, e.t0), n = [];
                            case 14:
                                return e.abrupt("return", n.filter(function(e) {
                                    return Boolean(e && e.imageLinkListPuff)
                                }).map(o.transformItem));
                            case 15:
                            case "end":
                                return e.stop()
                        }
                    }, e, void 0, [
                        [1, 10]
                    ])
                }));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
        }
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
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

        function l(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function c(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function u(e, t) {
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

        function d(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(i, o) {
                        try {
                            var a = t[i](o),
                                l = a.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!a.done) return Promise.resolve(l).then(function(e) {
                            r("next", e)
                        }, function(e) {
                            r("throw", e)
                        });
                        e(l)
                    }
                    return r("next")
                })
            }
        }

        function f(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function p(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function h(e, t) {
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

        function m(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function v(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function y(e, t) {
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

        function g(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(i, o) {
                        try {
                            var a = t[i](o),
                                l = a.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!a.done) return Promise.resolve(l).then(function(e) {
                            r("next", e)
                        }, function(e) {
                            r("throw", e)
                        });
                        e(l)
                    }
                    return r("next")
                })
            }
        }

        function b(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function w(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function E(e, t) {
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

        function k(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function _(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function S(e, t) {
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

        function A(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(i, o) {
                        try {
                            var a = t[i](o),
                                l = a.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!a.done) return Promise.resolve(l).then(function(e) {
                            r("next", e)
                        }, function(e) {
                            r("throw", e)
                        });
                        e(l)
                    }
                    return r("next")
                })
            }
        }
        var O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            x = function(e) {
                var t = e.cb,
                    n = e.throwError,
                    r = void 0 !== n && n,
                    i = void 0 === t ? "undefined" : O(t);
                if ("function" !== i) {
                    if (r) throw new Error('onDocumentLoad: expected function, but received "' + i + '"');
                    return !1
                }
                return !0
            },
            C = x,
            P = function(e) {
                return C({
                    cb: e,
                    throwError: !0
                }), {
                    isRemoved: !1,
                    remove: function() {
                        this.isRemoved = !0, e()
                    }
                }
            },
            T = P,
            L = function(e) {
                C({
                    cb: e,
                    throwError: !0
                });
                var t = function() {
                        i.isRemoved || (i.remove(), e())
                    },
                    n = ["DOMContentLoaded", t],
                    r = ["load", t],
                    i = T(function() {
                        var e, t;
                        (e = document).removeEventListener.apply(e, n), (t = window).removeEventListener.apply(t, r)
                    });
                if (document.attachEvent ? "complete" === document.readyState : "loading" !== document.readyState) t();
                else {
                    var o, a;
                    (o = document).addEventListener.apply(o, n), (a = window).addEventListener.apply(a, r)
                }
                return i
            },
            I = L,
            j = function(e) {
                var t, n;
                C({
                    cb: e,
                    throwError: !0
                });
                var r = void 0,
                    i = void 0,
                    o = void 0,
                    a = void 0,
                    l = void 0,
                    s = function(t) {
                        clearInterval(r), clearTimeout(i), t && (r = null, i = null, e(t))
                    },
                    c = function(e) {
                        s(), r = setInterval(function() {
                            window.innerWidth === o && window.innerHeight === a ? 3 === ++l && s(e) : (o = window.innerWidth, a = window.innerHeight, l = 0)
                        }, 100), i = setTimeout(function() {
                            s(e)
                        }, 1e3)
                    },
                    u = ["resize", c],
                    d = ["orientationchange", c];
                return (t = window).addEventListener.apply(t, u), (n = window).addEventListener.apply(n, d), T(function() {
                    var e, t;
                    (e = window).removeEventListener.apply(e, u), (t = window).removeEventListener.apply(t, d)
                })
            },
            M = j,
            D = n(35),
            R = window.DM || {},
            N = void 0,
            q = function() {
                if (!N) {
                    var e = window.scrollY;
                    N = function() {
                        window.scrollY !== e && window.scrollTo(window.scrollX, e)
                    }, window.addEventListener("scroll", N)
                }
            },
            B = function() {
                N && (window.removeEventListener("scroll", N), N = null)
            },
            H = function(e) {
                var t = e.length;
                return t > 8 ? e.slice(0, t - t % 2) : e
            },
            U = function(e) {
                e && e.plugins && (e.plugins.playlist && e.plugins.playlist.videos && (e.plugins.playlist.videos = H(e.plugins.playlist.videos)), delete e.plugins.flyout)
            },
            F = U,
            z = n(26),
            V = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return new Promise(function(n, r) {
                    Object(z.a)(e, Object.assign({}, t, {
                        cb: function(e, t) {
                            e ? r(e) : n(t)
                        }
                    }))
                })
            },
            W = V,
            G = function(e) {
                var t = e.event,
                    n = void 0 === t ? {} : t,
                    r = e.key,
                    i = void 0 === r ? "" : r,
                    o = e.keyCode,
                    a = void 0 === o ? 0 : o;
                return (n.key || "").toLowerCase() === i.toLowerCase() || n.keyCode === a
            },
            Y = G,
            X = function(e) {
                return e && e.plugins && e.plugins.playlist && e.plugins.playlist.videos ? e.plugins.playlist.videos : []
            },
            K = X,
            J = [],
            Q = function(e) {
                return Y({
                    event: e,
                    key: "Escape",
                    keyCode: 27
                }) && J.forEach(function(e) {
                    return setTimeout(function() {
                        return e()
                    })
                })
            },
            Z = void 0,
            $ = function() {
                Z = !1, window.removeEventListener("keyup", Q)
            },
            ee = function() {
                Z || (Z = !0, window.addEventListener("keyup", Q))
            },
            te = function(e) {
                ee(), J.push(e)
            },
            ne = function(e) {
                var t = J.indexOf(e); - 1 !== t && J.splice(t, 1), J.length || $()
            },
            re = {
                addHandler: te,
                removeHandler: ne
            },
            ie = function(e) {
                var t = document.createElement("div");
                return t.innerHTML = e, t.children[0]
            },
            oe = ie,
            ae = window.Element.prototype,
            le = ["matches", "webkitMatchesSelector", "msMatchesSelector", "mozMatchesSelector"].filter(function(e) {
                return ae.hasOwnProperty(e)
            })[0],
            se = function(e) {
                var t = e.breakOnElement,
                    n = e.breakOnCount,
                    r = void 0 === n ? 100 : n,
                    i = e.childElement,
                    o = e.matches;
                if (!o) return !1;
                var a = void 0,
                    l = void 0;
                for (a = 0, l = i; l && l !== t && a < r;) {
                    if (++a, l[le](o)) return l;
                    l = l.parentNode
                }
                return !1
            },
            ce = se,
            ue = function(e) {
                var t = document.createElement("div");
                return e instanceof Element && t.appendChild(e), t.innerHTML
            },
            de = ue,
            fe = function(e) {
                var t = document.createElement("div");
                t.innerHTML = e;
                var n = t.querySelector("h2 a") || t.querySelector("h2") || t.querySelector("h1 a") || t.querySelector("h1"),
                    r = t.querySelector(".articletext") || t.querySelector("p"),
                    i = t.querySelector(".article-icon-links-container");
                return {
                    previewText: r && r.innerText || "",
                    socialShare: i && de(i) || "",
                    title: n && n.innerText || "",
                    url: n && n.getAttribute("href") || ""
                }
            },
            pe = function(e) {
                var t = (e || "").match(/data-opts='(.*?)'/),
                    n = void 0;
                try {
                    n = JSON.parse(t ? t[1] : "{}")
                } catch (e) {
                    n = {}
                }
                return n
            },
            he = {
                articleDataParser: fe,
                videoDataParser: pe
            },
            me = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            ve = void 0,
            ye = function(e, t) {
                var n = t || {
                    bubbles: !1,
                    cancelable: !1
                };
                t.bubbles = t.bubbles || !1, t.cancelable = t.cancelable || !1;
                var r = document.createEvent("CustomEvent");
                return r.initCustomEvent(e, n.bubbles, n.cancelable, n.detail), r
            };
        ye.prototype = window.Event.prototype;
        var ge = function() {
                ve = "function" == typeof window.CustomEvent && "[object CustomEvent]" === window.CustomEvent.prototype.toString() ? window.CustomEvent : ye
            },
            be = function() {
                function e() {
                    r(this, e), this.uid = "" + Math.random(), this.registeredEvents = []
                }
                return me(e, [{
                    key: "init",
                    value: function(e) {
                        var t = e.state,
                            n = void 0 === t ? {} : t,
                            r = e.styles,
                            i = void 0 === r ? {} : r,
                            o = e.template;
                        this.template = o, this.state = n, this.styles = i, this.element = oe(this.render())
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.template({
                            state: this.state,
                            styles: this.styles
                        })
                    }
                }, {
                    key: "trigger",
                    value: function(e, t) {
                        this.element && (ge(), this.element.dispatchEvent(new ve(e, {
                            detail: t
                        })))
                    }
                }, {
                    key: "on",
                    value: function(e, t) {
                        this.element && (this.element.addEventListener(e, t), this.registeredEvents.push({
                            eventName: e,
                            handler: t
                        }))
                    }
                }, {
                    key: "_removeAllEvents",
                    value: function() {
                        for (var e = void 0; e = this.registeredEvents.pop();) this.element.removeEventListener(e.eventName, e.handler)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.element && (this.element.parentNode && this.element.parentNode.removeChild(this.element), this._removeAllEvents(), this.element = null)
                    }
                }]), e
            }(),
            we = be,
            Ee = n(82),
            ke = n.n(Ee),
            _e = n(83),
            Se = n.n(_e),
            Ae = {
                CLOSED: "CLOSED"
            },
            Oe = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            xe = function e(t, n, r) {
                null === t && (t = Function.prototype);
                var i = Object.getOwnPropertyDescriptor(t, n);
                if (void 0 === i) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, n, r)
                }
                if ("value" in i) return i.value;
                var a = i.get;
                if (void 0 !== a) return a.call(r)
            },
            Ce = function(e) {
                return e.stopPropagation()
            },
            Pe = function() {
                return Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
            },
            Te = function(e) {
                function t() {
                    i(this, t);
                    var e = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return e.data = {}, e.init({
                        state: e.data,
                        styles: ke.a,
                        template: Se.a
                    }), e.bodyElement = e.element.querySelector("." + ke.a.body), e.closeButtonElement = e.element.querySelector("." + ke.a.closeButton), e.backDropElement = oe('<div class="' + ke.a.backDrop + '"></div>'), e._initCloseAction(), e._initEscAction(), e.hide(), document.body.appendChild(e.backDropElement), document.body.appendChild(e.element), e
                }
                return a(t, e), Oe(t, [{
                    key: "setBody",
                    value: function(e) {
                        var t = this;
                        return Array.from(this.bodyElement.children).forEach(function(e) {
                            e !== t.closeButtonElement && t.bodyElement.removeChild(e)
                        }), this.bodyElement.appendChild(e), this
                    }
                }, {
                    key: "hide",
                    value: function() {
                        "none" !== this.element.style.display && (this.element.style.display = "none", this.hideBackdrop(), this.trigger(Ae.CLOSED))
                    }
                }, {
                    key: "show",
                    value: function() {
                        "table" !== this.element.style.display && (this.element.style.display = "block", this.showBackdrop(), this._adjustBodyElementPosition())
                    }
                }, {
                    key: "showBackdrop",
                    value: function() {
                        this.backDropElement.style.display = "block"
                    }
                }, {
                    key: "hideBackdrop",
                    value: function() {
                        this.backDropElement.style.display = "none"
                    }
                }, {
                    key: "_adjustBodyElementPosition",
                    value: function() {
                        var e = window.pageYOffset + (Pe() - this.bodyElement.offsetHeight) / 2;
                        this.bodyElement.style.top = e + "px"
                    }
                }, {
                    key: "useOriginalColours",
                    value: function() {
                        return this.element.classList.remove(ke.a.inverse), this
                    }
                }, {
                    key: "useInverseColours",
                    value: function() {
                        return this.element.classList.add(ke.a.inverse), this
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        re.removeHandler(this.escHandler), this.bodyElement.removeEventListener("click", Ce), this.closeButtonElement.removeEventListener("click", this.hideHandler), xe(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
                    }
                }, {
                    key: "_initEscAction",
                    value: function() {
                        var e = this;
                        this.escHandler = function() {
                            return e.hide()
                        }, re.addHandler(this.escHandler)
                    }
                }, {
                    key: "_initCloseAction",
                    value: function() {
                        var e = this;
                        this.hideHandler = function(t) {
                            t.stopPropagation(), e.hide()
                        }, this.bodyElement.addEventListener("click", Ce), this.on("click", this.hideHandler), this.backDropElement.addEventListener("click", this.hideHandler), this.closeButtonElement.addEventListener("click", this.hideHandler)
                    }
                }]), t
            }(we);
        Te.events = Ae;
        var Le = Te,
            Ie = function(e) {
                var t = void 0;
                return e && !(t = e.referenceId) && e.video && (e.video.referenceId ? t = e.video.referenceId : e.video.options && (t = e.video.options.referenceId)), t
            },
            je = Ie,
            Me = n(57),
            De = n.n(Me),
            Re = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            Ne = function() {
                function e(t) {
                    l(this, e), this.videoComponent = t, this.activeButtons = {}, this.isEnabled = !0
                }
                return Re(e, [{
                    key: "init",
                    value: function() {
                        return this.prevButtonToBeActive = this.createButtonToBeActiveHandler({
                            className: De.a.disablePrev,
                            eventName: "mol.play.previous.video",
                            handler: this.playPrev.bind(this)
                        }), this.nextButtonToBeActive = this.createButtonToBeActiveHandler({
                            className: De.a.disableNext,
                            eventName: "mol.play.next.video",
                            handler: this.playNext.bind(this)
                        }), this
                    }
                }, {
                    key: "handleByVideoIndex",
                    value: function(e) {
                        if (!e && 0 !== e) return this.prevButtonToBeActive(!0), void this.nextButtonToBeActive(!0);
                        e < 1 ? this.prevButtonToBeActive(!1) : this.prevButtonToBeActive(!0), e >= this.videoComponent.data.videos.length - 1 ? this.nextButtonToBeActive(!1) : this.nextButtonToBeActive(!0)
                    }
                }, {
                    key: "createButtonToBeActiveHandler",
                    value: function(e) {
                        var t = this,
                            n = e.className,
                            r = e.eventName,
                            i = e.handler,
                            o = n + "-" + r;
                        return function(e) {
                            e ? t.activeButtons[o] || (t.activeButtons[o] = !0, t.videoComponent.player.on(r, i), t.videoComponent.element.classList.remove(n)) : (t.activeButtons[o] = !1, t.videoComponent.player.off(r, i), t.videoComponent.element.classList.add(n))
                        }
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.videoComponent && this.videoComponent.player && this.videoComponent.player.trigger && this.videoComponent.player.trigger("request-dispose")
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.videoComponent.pauseRequested = !0, this.videoComponent.player.pause()
                    }
                }, {
                    key: "playNext",
                    value: function() {
                        this.videoComponent.pauseRequested = !1, this.isEnabled && !this.isAdPlaying() && this.videoComponent.player.next()
                    }
                }, {
                    key: "playPrev",
                    value: function() {
                        this.videoComponent.pauseRequested = !1, this.isEnabled && !this.isAdPlaying() && this.videoComponent.player.previous()
                    }
                }, {
                    key: "isAdPlaying",
                    value: function() {
                        var e = this.videoComponent.player;
                        return e._states && e._states.state && ["adPlaying", "adPauseStandby"].includes(e._states.state.get())
                    }
                }, {
                    key: "playByIndex",
                    value: function(e) {
                        this.videoComponent.pauseRequested = !1, this.videoComponent.player.gotoVideo && this.videoComponent.player.gotoVideo(parseInt(e, 10))
                    }
                }, {
                    key: "enable",
                    value: function() {
                        this.isEnabled = !0
                    }
                }, {
                    key: "disable",
                    value: function() {
                        this.isEnabled = !1
                    }
                }]), e
            }(),
            qe = Ne,
            Be = n(100),
            He = n.n(Be),
            Ue = {
                PLAYER_ERROR: "PLAYER_ERROR",
                PLAYER_RESET: "PLAYER_RESET"
            },
            Fe = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            ze = function e(t, n, r) {
                null === t && (t = Function.prototype);
                var i = Object.getOwnPropertyDescriptor(t, n);
                if (void 0 === i) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, n, r)
                }
                if ("value" in i) return i.value;
                var a = i.get;
                if (void 0 !== a) return a.call(r)
            },
            Ve = function(e) {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.channel,
                        r = e.config,
                        i = void 0 === r ? {} : r,
                        o = e.recommendationModel;
                    s(this, t);
                    var a = c(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)),
                        l = K(i);
                    l.forEach(function(e) {
                        e.poster = ""
                    }), a.data = {
                        channel: n,
                        config: i,
                        configString: JSON.stringify(i),
                        recommendationModel: o,
                        videos: l
                    }, a.init({
                        state: a.data,
                        styles: De.a,
                        template: He.a
                    });
                    try {
                        a.initPromise = R.molFeVideoplayer.init(a.element).then(function() {
                            return a._initPlayer()
                        })
                    } catch (e) {
                        console.error("There was a problem with player init", e), a.initPromise = Promise.reject(e)
                    }
                    return a
                }
                return u(t, e), Fe(t, [{
                    key: "whenReady",
                    value: function() {
                        return this.initPromise
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.element && this.controls && this.controls.destroy(this.element), ze(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
                    }
                }, {
                    key: "enableResponsive",
                    value: function() {
                        this.videoContainerElement.classList.add("vjs-responsive"), this.videoContainerElement.classList.remove("vjs-span-two-col")
                    }
                }, {
                    key: "disableResponsive",
                    value: function() {
                        this.videoContainerElement.classList.add("vjs-span-two-col"), this.videoContainerElement.classList.remove("vjs-responsive")
                    }
                }, {
                    key: "_initPlayer",
                    value: function() {
                        var e = this;
                        return this.videoContainerElement = this.element.querySelector(".vjs-video-container"), this.videoElement = this.element.querySelector(".video-js"), this.player = this.videoElement.player, this.referenceIdToIndex = {}, this.data.videos.forEach(function(t, n) {
                            e.referenceIdToIndex[t.referenceId] = n
                        }), this.player && this.player.disableControlsListeners && this.player.disableControlsListeners(), this._initControls(), this._initEvents(), this
                    }
                }, {
                    key: "_initControls",
                    value: function() {
                        this.controls = new qe(this).init()
                    }
                }, {
                    key: "_pauseIfRequested",
                    value: function() {
                        this.pauseRequested && this.player.pause(), this.pauseRequested = !1
                    }
                }, {
                    key: "_initEvents",
                    value: function() {
                        var e = this;
                        this.player.on("request-reset", function(t) {
                            e.controls.disable(), e.controls.handleByVideoIndex(e.referenceIdToIndex[je(t)]), e.trigger(Ue.PLAYER_RESET, {
                                videoOptions: t.video.options || t.video || {}
                            })
                        }), this.player.on("loadeddata", function() {
                            e._pauseIfRequested(), e.controls.enable()
                        }), this.player.on("error", function(t) {
                            e._pauseIfRequested(), e.controls.enable(), e.trigger(Ue.PLAYER_ERROR, t)
                        })
                    }
                }]), t
            }(we);
        Ve.events = Ue;
        var We = Ve,
            Ge = n(101),
            Ye = n.n(Ge),
            Xe = n(102),
            Ke = n.n(Xe),
            Je = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            Qe = function(e) {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.previewText,
                        r = e.title,
                        i = e.url;
                    f(this, t);
                    var o = p(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return o.init({
                        state: {
                            previewText: n,
                            title: r,
                            url: i
                        },
                        styles: Ye.a,
                        template: Ke.a
                    }), o.element.id = "mol-fe-light-box-articleText-" + Date.now(), o.requestId = 0, o
                }
                return h(t, e), Je(t, [{
                    key: "fetchByReferenceId",
                    value: function() {
                        function e(e) {
                            return t.apply(this, arguments)
                        }
                        var t = d(regeneratorRuntime.mark(function e(t) {
                            var n, r;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = ++this.requestId, e.next = 3, W("/api/video-carousel-article.html?video-id=" + t);
                                    case 3:
                                        if (r = e.sent, n === this.requestId && this.element) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.abrupt("return", null);
                                    case 6:
                                        return e.abrupt("return", he.articleDataParser(r));
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));
                        return e
                    }()
                }, {
                    key: "update",
                    value: function() {
                        function e(e) {
                            return t.apply(this, arguments)
                        }
                        var t = d(regeneratorRuntime.mark(function e(t) {
                            var n;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.next = 4, this.fetchByReferenceId(t);
                                    case 4:
                                        n = e.sent, this.element && n && (this.state = {
                                            previewText: n.previewText,
                                            socialShare: n.socialShare,
                                            title: n.title,
                                            url: n.url
                                        }, this.element.innerHTML = oe(this.render()).innerHTML);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));
                        return e
                    }()
                }]), t
            }(we),
            Ze = Qe,
            $e = {
                VIDEO_LINK_CLICKED: "VIDEO_LINK_CLICKED"
            },
            et = n(103),
            tt = n.n(et),
            nt = n(104),
            rt = n.n(nt),
            it = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            ot = function(e) {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.items,
                        r = void 0 === n ? [] : n;
                    m(this, t);
                    var i = v(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return i.activeItem = null, i.data = {
                        items: r
                    }, i.init({
                        state: i.data,
                        styles: tt.a,
                        template: rt.a
                    }), i.on("click", function(e) {
                        var t = ce({
                            breakOnElement: i.element,
                            childElement: e.target,
                            matches: "." + tt.a.videoLink
                        });
                        t && (e.preventDefault(), i.setActiveVideo(t) && i.trigger($e.VIDEO_LINK_CLICKED, {
                            videoLinkElement: t
                        }))
                    }), i.element.addEventListener("mouseenter", function() {
                        return q()
                    }), i.element.addEventListener("mouseleave", function() {
                        return B()
                    }), i
                }
                return y(t, e), it(t, [{
                    key: "setActiveVideoById",
                    value: function(e) {
                        var t = isFinite(e) && this.element.querySelector('[data-video-id="' + e + '"]');
                        this.setActiveVideo(t)
                    }
                }, {
                    key: "setActiveVideo",
                    value: function(e) {
                        if (e) {
                            if (this.activeItem && e === this.activeItem) return !1;
                            e.classList.add(tt.a.active)
                        }
                        return this.activeItem && this.activeItem !== e && this.activeItem.classList.remove(tt.a.active), this.activeItem = e, !0
                    }
                }]), t
            }(we);
        ot.events = $e;
        var at = ot,
            lt = {
                ERROR: "ERROR",
                UPDATE: "UPDATE"
            },
            st = n(105),
            ct = n.n(st),
            ut = n(106),
            dt = n.n(ut),
            ft = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            pt = function e(t, n, r) {
                null === t && (t = Function.prototype);
                var i = Object.getOwnPropertyDescriptor(t, n);
                if (void 0 === i) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, n, r)
                }
                if ("value" in i) return i.value;
                var a = i.get;
                if (void 0 !== a) return a.call(r)
            },
            ht = function(e) {
                e && e.destroy && e.destroy()
            },
            mt = function(e) {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.channel,
                        r = e.recommendationModel,
                        i = e.target,
                        o = e.title,
                        a = void 0 === o ? "" : o;
                    b(this, t);
                    var l = w(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return l.data = {
                        channel: n,
                        recommendationModel: r,
                        target: i,
                        title: a || "Top videos"
                    }, l.articleTextComponent = null, l.recommendationsComponent = null, l.videoComponent = null, l
                }
                return E(t, e), ft(t, [{
                    key: "initElement",
                    value: function() {
                        function e() {
                            return t.apply(this, arguments)
                        }
                        var t = g(regeneratorRuntime.mark(function e() {
                            var t, n;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.element) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", this.element);
                                    case 2:
                                        return this.init({
                                            state: {
                                                channel: this.data.channel,
                                                title: this.data.title
                                            },
                                            styles: ct.a,
                                            template: dt.a
                                        }), e.next = 5, W(this.data.target);
                                    case 5:
                                        return t = e.sent, this.element && (n = he.videoDataParser(t), this._createComponentsSet(n), this._initEvents(), this.element.querySelector("." + ct.a.articleText).appendChild(this.articleTextComponent.element), this.element.querySelector("." + ct.a.recommendations).appendChild(this.recommendationsComponent.element), this.element.querySelector("." + ct.a.video).appendChild(this.videoComponent.element)), e.abrupt("return", this.element);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));
                        return e
                    }()
                }, {
                    key: "pause",
                    value: function() {
                        this.videoComponent && this.videoComponent.controls.pause()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        ht(this.recommendationsComponent), ht(this.articleTextComponent), ht(this.videoComponent), pt(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
                    }
                }, {
                    key: "_createComponentsSet",
                    value: function(e) {
                        F(e), this.videoComponent = new We({
                            channel: this.data.channel,
                            config: e,
                            recommendationModel: this.data.recommendationModel
                        }), this.recommendationsComponent = new at({
                            items: K(e)
                        }), this.articleTextComponent = new Ze
                    }
                }, {
                    key: "_initEvents",
                    value: function() {
                        var e = this;
                        this.recommendationsComponent.on(at.events.VIDEO_LINK_CLICKED, function(t) {
                            var n = t.detail.videoLinkElement,
                                r = parseInt(n.getAttribute("data-index"), 10);
                            e.videoComponent.controls.playByIndex(r)
                        }), this.videoComponent.on(We.events.PLAYER_RESET, function() {
                            var t = g(regeneratorRuntime.mark(function t(n) {
                                var r;
                                return regeneratorRuntime.wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return r = n.detail.videoOptions || {}, t.prev = 1, e.recommendationsComponent.setActiveVideoById(r.videoId), t.next = 5, e.articleTextComponent.update(r.referenceId);
                                        case 5:
                                            e.trigger(lt.UPDATE), t.next = 11;
                                            break;
                                        case 8:
                                            t.prev = 8, t.t0 = t.catch(1), console.error("There was an error with LightBox._initEvents", t.t0);
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }, t, e, [
                                    [1, 8]
                                ])
                            }));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()), this.videoComponent.on(We.events.PLAYER_ERROR, function(t) {
                            return e.trigger(lt.ERROR, t)
                        })
                    }
                }]), t
            }(we);
        mt.events = lt;
        var vt = mt,
            yt = n(107),
            gt = n.n(yt),
            bt = n(108),
            wt = n.n(bt),
            Et = function(e) {
                function t(e) {
                    var n = e.message;
                    k(this, t);
                    var r = _(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return r.init({
                        state: {
                            message: n
                        },
                        styles: wt.a,
                        template: gt.a
                    }), r
                }
                return S(t, e), t
            }(we),
            kt = Et,
            _t = {
                dataAttribute: "data-mol-fe-lightbox",
                trackingType: "am_most_watched_videos_062016"
            },
            St = _t.dataAttribute,
            At = void 0,
            Ot = void 0,
            xt = void 0,
            Ct = function(e) {
                console.error("LightBox Error: ", e)
            },
            Pt = function() {
                return At || (At = new Le, At.on(Le.events.CLOSED, function() {
                    B(), Ot && Ot.destroy && (Ot.destroy(), Ot = null)
                })), At
            },
            Tt = function(e) {
                Ct(e), Pt().hideBackdrop(), Ot instanceof kt || (Ot && Ot.destroy(), Ot = new kt({
                    message: "Sorry, an error occurred.<br/>Please try again in a few moments."
                })), Pt().useInverseColours().setBody(Ot.element).show()
            },
            Lt = function() {
                Pt()._adjustBodyElementPosition(), Ot && Ot.videoComponent && (window.innerHeight < 756 ? Ot.videoComponent.enableResponsive() : Ot.videoComponent.disableResponsive())
            },
            It = function() {
                Pt().useOriginalColours().setBody(Ot.element).show(), Object(D.init)({
                    id: Ot.articleTextComponent.element.id,
                    params: {
                        isChannel: !0,
                        zIndex: 1e7
                    }
                })
            },
            jt = function() {
                var e = A(regeneratorRuntime.mark(function e(t) {
                    var n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, Pt().showBackdrop(), n = t.getAttribute("data-target") || "", Ot = new vt({
                                    channel: t.getAttribute("data-channel"),
                                    recommendationModel: t.getAttribute("data-recommendation-model"),
                                    target: n.split(" ")[0],
                                    title: t.getAttribute("data-title")
                                }), t.setAttribute(St, Ot.uid), e.next = 7, Ot.initElement();
                            case 7:
                                Ot.on(vt.events.ERROR, Ct), Ot.on(vt.events.UPDATE, function() {
                                    return At._adjustBodyElementPosition()
                                }), It(), Ot.videoComponent.whenReady().then(function(e) {
                                    return e.controls.playByIndex(0), Lt(), e
                                }).catch(Tt), e.next = 16;
                                break;
                            case 13:
                                e.prev = 13, e.t0 = e.catch(0), Tt(e.t0);
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }, e, this, [
                        [0, 13]
                    ])
                }));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
        I(function() {
            M(function() {
                return Lt()
            }), R.later("videoplayer-ready", function() {
                xt = !0
            }), document.body.addEventListener("click", function(e) {
                var t = ce({
                    breakOnCount: 5,
                    breakOnElement: document.body,
                    childElement: e.target,
                    matches: "[" + St + "]"
                });
                t && (e.preventDefault(), xt ? jt(t) : Ct("video player is not ready"))
            })
        })
    }, function(e, t) {
        e.exports = {
            backDrop: "backDrop-BBosx",
            container: "container-GFfgy",
            body: "body-1WXAp",
            closeButton: "closeButton-1oUGt"
        }
    }, function(e, t, n) {
        var r = n(16);
        e.exports = (r.default || r).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, r, i, o) {
                var a, l = e.lambda,
                    s = e.escapeExpression;
                return '<div class="' + s(l(null != (a = null != t ? t.styles : t) ? a.container : a, t)) + '">\n  <div class="' + s(l(null != (a = null != t ? t.styles : t) ? a.body : a, t)) + '">\n    <div class="' + s(l(null != (a = null != t ? t.styles : t) ? a.closeButton : a, t)) + '">' + (null != (a = e.invokePartial(n(99), t, {
                    name: "assets/close-icon.svg",
                    data: o,
                    helpers: r,
                    partials: i,
                    decorators: e.decorators
                })) ? a : "") + "</div>\n  </div>\n</div>"
            },
            usePartial: !0,
            useData: !0
        })
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }

        function o() {
            var e = new l.HandlebarsEnvironment;
            return p.extend(e, l), e.SafeString = c.default, e.Exception = d.default, e.Utils = p, e.escapeExpression = p.escapeExpression, e.VM = m, e.template = function(t) {
                return m.template(t, e)
            }, e
        }
        t.__esModule = !0;
        var a = n(56),
            l = i(a),
            s = n(96),
            c = r(s),
            u = n(20),
            d = r(u),
            f = n(13),
            p = i(f),
            h = n(97),
            m = i(h),
            v = n(98),
            y = r(v),
            g = o();
        g.create = o, y.default(g), g.default = g, t.default = g, e.exports = t.default
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            a.default(e), s.default(e), u.default(e), f.default(e), h.default(e), v.default(e), g.default(e)
        }
        t.__esModule = !0, t.registerDefaultHelpers = i;
        var o = n(86),
            a = r(o),
            l = n(87),
            s = r(l),
            c = n(88),
            u = r(c),
            d = n(89),
            f = r(d),
            p = n(90),
            h = r(p),
            m = n(91),
            v = r(m),
            y = n(92),
            g = r(y)
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(13);
        t.default = function(e) {
            e.registerHelper("blockHelperMissing", function(t, n) {
                var i = n.inverse,
                    o = n.fn;
                if (!0 === t) return o(this);
                if (!1 === t || null == t) return i(this);
                if (r.isArray(t)) return t.length > 0 ? (n.ids && (n.ids = [n.name]), e.helpers.each(t, n)) : i(this);
                if (n.data && n.ids) {
                    var a = r.createFrame(n.data);
                    a.contextPath = r.appendContextPath(n.data.contextPath, n.name), n = {
                        data: a
                    }
                }
                return o(t, n)
            })
        }, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(13),
            i = n(20),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i);
        t.default = function(e) {
            e.registerHelper("each", function(e, t) {
                function n(t, n, o) {
                    c && (c.key = t, c.index = n, c.first = 0 === n, c.last = !!o, u && (c.contextPath = u + t)), s += i(e[t], {
                        data: c,
                        blockParams: r.blockParams([e[t], t], [u + t, null])
                    })
                }
                if (!t) throw new o.default("Must pass iterator to #each");
                var i = t.fn,
                    a = t.inverse,
                    l = 0,
                    s = "",
                    c = void 0,
                    u = void 0;
                if (t.data && t.ids && (u = r.appendContextPath(t.data.contextPath, t.ids[0]) + "."), r.isFunction(e) && (e = e.call(this)), t.data && (c = r.createFrame(t.data)), e && "object" == typeof e)
                    if (r.isArray(e))
                        for (var d = e.length; l < d; l++) l in e && n(l, l, l === e.length - 1);
                    else {
                        var f = void 0;
                        for (var p in e) e.hasOwnProperty(p) && (void 0 !== f && n(f, l - 1), f = p, l++);
                        void 0 !== f && n(f, l - 1, !0)
                    } return 0 === l && (s = a(this)), s
            })
        }, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(20),
            i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r);
        t.default = function(e) {
            e.registerHelper("helperMissing", function() {
                if (1 !== arguments.length) throw new i.default('Missing helper: "' + arguments[arguments.length - 1].name + '"')
            })
        }, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(13);
        t.default = function(e) {
            e.registerHelper("if", function(e, t) {
                return r.isFunction(e) && (e = e.call(this)), !t.hash.includeZero && !e || r.isEmpty(e) ? t.inverse(this) : t.fn(this)
            }), e.registerHelper("unless", function(t, n) {
                return e.helpers.if.call(this, t, {
                    fn: n.inverse,
                    inverse: n.fn,
                    hash: n.hash
                })
            })
        }, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0, t.default = function(e) {
            e.registerHelper("log", function() {
                for (var t = [void 0], n = arguments[arguments.length - 1], r = 0; r < arguments.length - 1; r++) t.push(arguments[r]);
                var i = 1;
                null != n.hash.level ? i = n.hash.level : n.data && null != n.data.level && (i = n.data.level), t[0] = i, e.log.apply(e, t)
            })
        }, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0, t.default = function(e) {
            e.registerHelper("lookup", function(e, t) {
                return e && e[t]
            })
        }, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(13);
        t.default = function(e) {
            e.registerHelper("with", function(e, t) {
                r.isFunction(e) && (e = e.call(this));
                var n = t.fn;
                if (r.isEmpty(e)) return t.inverse(this);
                var i = t.data;
                return t.data && t.ids && (i = r.createFrame(t.data), i.contextPath = r.appendContextPath(t.data.contextPath, t.ids[0])), n(e, {
                    data: i,
                    blockParams: r.blockParams([e], [i && i.contextPath])
                })
            })
        }, e.exports = t.default
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            o.default(e)
        }
        t.__esModule = !0, t.registerDefaultDecorators = r;
        var i = n(94),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i)
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(13);
        t.default = function(e) {
            e.registerDecorator("inline", function(e, t, n, i) {
                var o = e;
                return t.partials || (t.partials = {}, o = function(i, o) {
                    var a = n.partials;
                    n.partials = r.extend({}, a, t.partials);
                    var l = e(i, o);
                    return n.partials = a, l
                }), t.partials[i.args[0]] = i.fn, o
            })
        }, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(13),
            i = {
                methodMap: ["debug", "info", "warn", "error"],
                level: "info",
                lookupLevel: function(e) {
                    if ("string" == typeof e) {
                        var t = r.indexOf(i.methodMap, e.toLowerCase());
                        e = t >= 0 ? t : parseInt(e, 10)
                    }
                    return e
                },
                log: function(e) {
                    if (e = i.lookupLevel(e), "undefined" != typeof console && i.lookupLevel(i.level) <= e) {
                        var t = i.methodMap[e];
                        console[t] || (t = "log");
                        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                        console[t].apply(console, r)
                    }
                }
            };
        t.default = i, e.exports = t.default
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            this.string = e
        }
        t.__esModule = !0, r.prototype.toString = r.prototype.toHTML = function() {
            return "" + this.string
        }, t.default = r, e.exports = t.default
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            var t = e && e[0] || 1,
                n = m.COMPILER_REVISION;
            if (t !== n) {
                if (t < n) {
                    var r = m.REVISION_CHANGES[n],
                        i = m.REVISION_CHANGES[t];
                    throw new h.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + r + ") or downgrade your runtime to an older version (" + i + ").")
                }
                throw new h.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").")
            }
        }

        function i(e, t) {
            function n(n, r, i) {
                i.hash && (r = f.extend({}, r, i.hash), i.ids && (i.ids[0] = !0)), n = t.VM.resolvePartial.call(this, n, r, i);
                var o = t.VM.invokePartial.call(this, n, r, i);
                if (null == o && t.compile && (i.partials[i.name] = t.compile(n, e.compilerOptions, t), o = i.partials[i.name](r, i)), null != o) {
                    if (i.indent) {
                        for (var a = o.split("\n"), l = 0, s = a.length; l < s && (a[l] || l + 1 !== s); l++) a[l] = i.indent + a[l];
                        o = a.join("\n")
                    }
                    return o
                }
                throw new h.default("The partial " + i.name + " could not be compiled when running in runtime-only mode")
            }

            function r(t) {
                function n(t) {
                    return "" + e.main(i, t, i.helpers, i.partials, a, s, l)
                }
                var o = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    a = o.data;
                r._setup(o), !o.partial && e.useData && (a = c(t, a));
                var l = void 0,
                    s = e.useBlockParams ? [] : void 0;
                return e.useDepths && (l = o.depths ? t != o.depths[0] ? [t].concat(o.depths) : o.depths : [t]), (n = u(e.main, n, i, o.depths || [], a, s))(t, o)
            }
            if (!t) throw new h.default("No environment passed to template");
            if (!e || !e.main) throw new h.default("Unknown template object: " + typeof e);
            e.main.decorator = e.main_d, t.VM.checkRevision(e.compiler);
            var i = {
                strict: function(e, t) {
                    if (!(t in e)) throw new h.default('"' + t + '" not defined in ' + e);
                    return e[t]
                },
                lookup: function(e, t) {
                    for (var n = e.length, r = 0; r < n; r++)
                        if (e[r] && null != e[r][t]) return e[r][t]
                },
                lambda: function(e, t) {
                    return "function" == typeof e ? e.call(t) : e
                },
                escapeExpression: f.escapeExpression,
                invokePartial: n,
                fn: function(t) {
                    var n = e[t];
                    return n.decorator = e[t + "_d"], n
                },
                programs: [],
                program: function(e, t, n, r, i) {
                    var a = this.programs[e],
                        l = this.fn(e);
                    return t || i || r || n ? a = o(this, e, l, t, n, r, i) : a || (a = this.programs[e] = o(this, e, l)), a
                },
                data: function(e, t) {
                    for (; e && t--;) e = e._parent;
                    return e
                },
                merge: function(e, t) {
                    var n = e || t;
                    return e && t && e !== t && (n = f.extend({}, t, e)), n
                },
                nullContext: Object.seal({}),
                noop: t.VM.noop,
                compilerInfo: e.compiler
            };
            return r.isTop = !0, r._setup = function(n) {
                n.partial ? (i.helpers = n.helpers, i.partials = n.partials, i.decorators = n.decorators) : (i.helpers = i.merge(n.helpers, t.helpers), e.usePartial && (i.partials = i.merge(n.partials, t.partials)), (e.usePartial || e.useDecorators) && (i.decorators = i.merge(n.decorators, t.decorators)))
            }, r._child = function(t, n, r, a) {
                if (e.useBlockParams && !r) throw new h.default("must pass block params");
                if (e.useDepths && !a) throw new h.default("must pass parent depths");
                return o(i, t, e[t], n, 0, r, a)
            }, r
        }

        function o(e, t, n, r, i, o, a) {
            function l(t) {
                var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    l = a;
                return !a || t == a[0] || t === e.nullContext && null === a[0] || (l = [t].concat(a)), n(e, t, e.helpers, e.partials, i.data || r, o && [i.blockParams].concat(o), l)
            }
            return l = u(n, l, e, a, r, o), l.program = t, l.depth = a ? a.length : 0, l.blockParams = i || 0, l
        }

        function a(e, t, n) {
            return e ? e.call || n.name || (n.name = e, e = n.partials[e]) : e = "@partial-block" === n.name ? n.data["partial-block"] : n.partials[n.name], e
        }

        function l(e, t, n) {
            var r = n.data && n.data["partial-block"];
            n.partial = !0, n.ids && (n.data.contextPath = n.ids[0] || n.data.contextPath);
            var i = void 0;
            if (n.fn && n.fn !== s && function() {
                    n.data = m.createFrame(n.data);
                    var e = n.fn;
                    i = n.data["partial-block"] = function(t) {
                        var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                        return n.data = m.createFrame(n.data), n.data["partial-block"] = r, e(t, n)
                    }, e.partials && (n.partials = f.extend({}, n.partials, e.partials))
                }(), void 0 === e && i && (e = i), void 0 === e) throw new h.default("The partial " + n.name + " could not be found");
            if (e instanceof Function) return e(t, n)
        }

        function s() {
            return ""
        }

        function c(e, t) {
            return t && "root" in t || (t = t ? m.createFrame(t) : {}, t.root = e), t
        }

        function u(e, t, n, r, i, o) {
            if (e.decorator) {
                var a = {};
                t = e.decorator(t, a, n, r && r[0], i, o, r), f.extend(t, a)
            }
            return t
        }
        t.__esModule = !0, t.checkRevision = r, t.template = i, t.wrapProgram = o, t.resolvePartial = a, t.invokePartial = l, t.noop = s;
        var d = n(13),
            f = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(d),
            p = n(20),
            h = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(p),
            m = n(56)
    }, function(e, t, n) {
        "use strict";
        (function(n) {
            t.__esModule = !0, t.default = function(e) {
                var t = void 0 !== n ? n : window,
                    r = t.Handlebars;
                e.noConflict = function() {
                    return t.Handlebars === e && (t.Handlebars = r), e
                }
            }, e.exports = t.default
        }).call(t, n(23))
    }, function(e, t, n) {
        var r = n(16);
        e.exports = (r.default || r).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, r, i) {
                return '<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="m8.475 6l3.219-3.219c.407-.407.407-1.068 0-1.474l-1-1c-.407-.407-1.068-.408-1.475-.001l-3.219 3.219-3.219-3.218c-.406-.407-1.067-.407-1.474-.001l-1 1c-.407.406-.407 1.067 0 1.474l3.219 3.219-3.219 3.219c-.407.406-.407 1.067 0 1.474l1 1c.407.407 1.068.407 1.474 0l3.219-3.219 3.219 3.219c.407.407 1.068.407 1.475 0l1-1c.407-.407.407-1.067 0-1.474l-3.219-3.219"/></g></svg>'
            },
            useData: !0
        })
    }, function(e, t, n) {
        var r = n(16);
        e.exports = (r.default || r).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, r, i) {
                var o, a = e.lambda,
                    l = e.escapeExpression;
                return '<div class="' + l(a(null != (o = null != t ? t.styles : t) ? o.container : o, t)) + '">\n  <div class="vjs-video-container vjs-span-two-col ' + l(a(null != (o = null != t ? t.state : t) ? o.channel : o, t)) + '" id="v-' + l(a(null != (o = null != (o = null != t ? t.state : t) ? o.config : o) ? o.videoId : o, t)) + '">\n    <video class="video-js vjs-default-skin" controls\n           data-opts=\'' + l(a(null != (o = null != t ? t.state : t) ? o.configString : o, t)) + "' data-recommendation-model=\"" + l(a(null != (o = null != t ? t.state : t) ? o.recommendationModel : o, t)) + '"\n           data-is-lightbox-video>\n      <source src="' + l(a(null != (o = null != (o = null != t ? t.state : t) ? o.config : o) ? o.src : o, t)) + "\" type='video/mp4'/>\n    </video>\n  </div>\n</div>\n"
            },
            useData: !0
        })
    }, function(e, t) {
        e.exports = {
            container: "container-1oGot",
            headline: "headline-h7sTT",
            previewText: "previewText-QWqaa",
            socialShare: "socialShare-QzDgs"
        }
    }, function(e, t, n) {
        var r = n(16);
        e.exports = (r.default || r).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, r, i) {
                var o, a = e.lambda,
                    l = e.escapeExpression;
                return '<div class="' + l(a(null != (o = null != t ? t.styles : t) ? o.container : o, t)) + ' article">\n  <div class="' + l(a(null != (o = null != t ? t.styles : t) ? o.headline : o, t)) + '">\n    <a href="' + l(a(null != (o = null != t ? t.state : t) ? o.url : o, t)) + '" class="title">' + l(a(null != (o = null != t ? t.state : t) ? o.title : o, t)) + '</a>\n  </div>\n  <div class="' + l(a(null != (o = null != t ? t.styles : t) ? o.previewText : o, t)) + '">' + l(a(null != (o = null != t ? t.state : t) ? o.previewText : o, t)) + '</div>\n  <div class="' + l(a(null != (o = null != t ? t.styles : t) ? o.socialShare : o, t)) + '">' + (null != (o = a(null != (o = null != t ? t.state : t) ? o.socialShare : o, t)) ? o : "") + "</div>\n</div>"
            },
            useData: !0
        })
    }, function(e, t) {
        e.exports = {
            container: "container-YrQEE",
            playButton: "playButton-xXr1h",
            item: "item-2Ys7m",
            active: "active-1vtjE",
            nowPlayingCover: "nowPlayingCover-tAI-h",
            bannerText: "bannerText-2WFWE",
            watchVideo: "watchVideo-2A31O",
            nowPlaying: "nowPlaying-22Ssp",
            thumbnail: "thumbnail-BcDq1",
            description: "description-3nl9S",
            descriptionContent: "descriptionContent-23gTn",
            videoLink: "videoLink-3LMpc"
        }
    }, function(e, t, n) {
        var r = n(16);
        e.exports = (r.default || r).template({
            1: function(e, t, n, r, i, o) {
                var a, l = e.lambda,
                    s = e.escapeExpression;
                return '    <li class="' + s(l((a = (a = i && i.root) && a.styles) && a.item, t)) + '">\n      <a class="' + s(l((a = (a = i && i.root) && a.styles) && a.videoLink, t)) + '" href="' + s(l(null != (a = o[0][0]) ? a.linkBaseURL : a, t)) + '"\n         data-index="' + s(l(o[0][1], t)) + '"\n         data-videoid="' + s(l(null != (a = o[0][0]) ? a.videoId : a, t)) + '" \n         data-video-id="' + s(l(null != (a = o[0][0]) ? a.videoId : a, t)) + '"\n         data-channel="' + s(l((a = (a = i && i.root) && a.state) && a.channel, t)) + '"\n         data-source="' + s(l(null != (a = o[0][0]) ? a.source : a, t)) + '"\n         data-modal-type="video-lightbox">\n        <span class="' + s(l((a = (a = i && i.root) && a.styles) && a.watchVideo, t)) + '"><span class="' + s(l(null != (a = null != t ? t.styles : t) ? a.playButton : a, t)) + '"></span></span>\n        <div class="' + s(l((a = (a = i && i.root) && a.styles) && a.thumbnail, t)) + '" style="background-image: url(' + s(l(null != (a = o[0][0]) ? a.thumbnail : a, t)) + ')"></div>\n        <div class="' + s(l((a = (a = i && i.root) && a.styles) && a.description, t)) + '">\n          <div class="' + s(l((a = (a = i && i.root) && a.styles) && a.descriptionContent, t)) + '">\n            ' + (null != (a = l(null != (a = o[0][0]) ? a.title : a, t)) ? a : "") + '\n          </div>\n        </div>\n        <span class="' + s(l((a = (a = i && i.root) && a.styles) && a.nowPlayingCover, t)) + '"></span>\n        <span class="' + s(l((a = (a = i && i.root) && a.styles) && a.bannerText, t)) + '">\n                    <span class="' + s(l((a = (a = i && i.root) && a.styles) && a.playButton, t)) + '"></span>\n                    <span class="' + s(l((a = (a = i && i.root) && a.styles) && a.watchVideo, t)) + '">Watch Video</span>\n                    <span class="' + s(l((a = (a = i && i.root) && a.styles) && a.nowPlaying, t)) + '">Now playing</span>\n                </span>\n      </a>\n    </li>\n'
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, r, i, o) {
                var a, l = e.lambda,
                    s = e.escapeExpression;
                return '<ul class="' + s(l(null != (a = null != t ? t.styles : t) ? a.container : a, t)) + '"\n    data-track-module="popup--"\n    data-track-selector=".' + s(l(null != (a = null != t ? t.styles : t) ? a.videoLink : a, t)) + '"\n    data-track-type="cl">\n' + (null != (a = n.each.call(null != t ? t : e.nullContext || {}, null != (a = null != t ? t.state : t) ? a.items : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, i, 2, o),
                    inverse: e.noop,
                    data: i,
                    blockParams: o
                })) ? a : "") + "</ul>"
            },
            useData: !0,
            useBlockParams: !0
        })
    }, function(e, t) {
        e.exports = {
            container: "container-2QJ6l",
            panelLeft: "panelLeft-1GMLi",
            panelRight: "panelRight-1OI7_",
            panelRightHead: "panelRightHead-2gJ7Z",
            panelRightFoot: "panelRightFoot-2-Xtj",
            video: "video-FSM8f",
            recommendations: "recommendations-13KFl",
            articleText: "articleText-1Jnd5"
        }
    }, function(e, t, n) {
        var r = n(16);
        e.exports = (r.default || r).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, r, i) {
                var o, a = e.lambda,
                    l = e.escapeExpression;
                return '<div class="' + l(a(null != (o = null != t ? t.styles : t) ? o.container : o, t)) + " " + l(a(null != (o = null != t ? t.state : t) ? o.channel : o, t)) + '">\n  <div class="' + l(a(null != (o = null != t ? t.styles : t) ? o.panelRight : o, t)) + '">\n    <div class="' + l(a(null != (o = null != t ? t.styles : t) ? o.panelRightHead : o, t)) + '">' + l(a(null != (o = null != t ? t.state : t) ? o.title : o, t)) + '</div>\n    <div class="' + l(a(null != (o = null != t ? t.styles : t) ? o.recommendations : o, t)) + '"></div>\n    <div class="' + l(a(null != (o = null != t ? t.styles : t) ? o.panelRightFoot : o, t)) + '">\n      <a href="/video/index.html?ico=video_player_click">Watch more videos &gt;</a>\n    </div>\n  </div>\n  <div class="' + l(a(null != (o = null != t ? t.styles : t) ? o.panelLeft : o, t)) + '">\n    <div class="' + l(a(null != (o = null != t ? t.styles : t) ? o.video : o, t)) + '"></div>\n    <div class="' + l(a(null != (o = null != t ? t.styles : t) ? o.articleText : o, t)) + '"></div>\n  </div>\n</div>'
            },
            useData: !0
        })
    }, function(e, t, n) {
        var r = n(16);
        e.exports = (r.default || r).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, r, i) {
                var o, a = e.lambda,
                    l = e.escapeExpression;
                return '<div class="' + l(a(null != (o = null != t ? t.styles : t) ? o.container : o, t)) + '">\n  <div class="' + l(a(null != (o = null != t ? t.styles : t) ? o.message : o, t)) + '">' + (null != (o = a(null != (o = null != t ? t.state : t) ? o.message : o, t)) ? o : "") + "</div>\n</div>"
            },
            useData: !0
        })
    }, function(e, t) {
        e.exports = {
            container: "container-VwG8R",
            message: "message-2exI4"
        }
    }, function(e, t) {}, function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = (n(111), function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }()),
            o = function() {
                function e(t, n) {
                    r(this, e), Object.assign(this, {
                        market: "en-gb"
                    }, n), this.init({
                        id: t
                    })
                }
                return i(e, [{
                    key: "init",
                    value: function(e) {
                        var t = this,
                            n = document.querySelector("#" + e.id);
                        if (n) {
                            var r = window.location.pathname;
                            if (r && r.startsWith("/video") && !n.querySelector('[name="type"]')) {
                                var i = document.createElement("input");
                                i.setAttribute("type", "hidden"), i.setAttribute("name", "type"), i.setAttribute("value", "video"), n.appendChild(i)
                            }
                            var o = function(e) {
                                var r = n.querySelector('input[name="searchPhrase"]').value;
                                if (e.preventDefault(), r) {
                                    var i = n.querySelector('input[name="sel"]:checked');
                                    i && "web" === i.value ? window.open("https://www.bing.com/search?q=" + r + "&mkt=" + t.market + "&cp=1252&FORM=MOL635", "_blank") : n.submit()
                                }
                            };
                            Array.from(n.querySelectorAll(".bing-logo")).forEach(function(e) {
                                e.addEventListener("click", o)
                            }), n.addEventListener("submit", o)
                        }
                    }
                }]), e
            }(),
            a = o;
        n.d(t, "BingSearchBox", function() {
            return a
        })
    }, function(e, t) {}, function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
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

        function l(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function c(e, t) {
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

        function u(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function d(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function f(e, t) {
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

        function p(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function h(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function m(e, t) {
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

        function v(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function y(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function g(e, t) {
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

        function b(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function w(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function E(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function k(e, t) {
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

        function _(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var S = n(0),
            A = (n(113), n(114), n(115), function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }()),
            O = function() {
                function e(t, n) {
                    return r(this, e), this.el = document.querySelector(t), this.el ? (this.stepSize = 138, this.direction = n && n.direction || "horizontal", this.cssProp = "vertical" === this.direction ? "top" : "left", this.movement = {
                        direction: null,
                        duration: "0.3s",
                        isEndless: !0,
                        isMoving: !1,
                        type: "ease-out"
                    }, this.clonedNode = null, this.additionalItemsAtTheBegining = 1, this.additionalItemsAtTheEnd = 1, this.slider = this.el.querySelector(".js-itemList"), this.slider ? (this.slider.style[this.cssProp] = "0px", this.slider.style.transition = this.movement.duration + " " + this.movement.type + " " + this.cssProp, this.nextBtn = this.el.querySelector(".js-move-next"), this.nextBtn ? (this.prevBtn = this.el.querySelector(".js-move-prev"), this.prevBtn ? (this.handleNextClick = this.handleNextClick.bind(this), this.handlePrevClick = this.handlePrevClick.bind(this), this.clickHandler = this.clickHandler.bind(this), this.mouseOverHandler = this.mouseOverHandler.bind(this), this.onTransitionEnded = this.onTransitionEnded.bind(this), this.onCarouselMoved = this.onCarouselMoved.bind(this), this.onCarouselStartedMoving = this.onCarouselStartedMoving.bind(this), this.resetSliderTransition = this.resetSliderTransition.bind(this), this.nextBtn.addEventListener("click", this.handleNextClick), this.prevBtn.addEventListener("click", this.handlePrevClick), this.slider.addEventListener("click", this.clickHandler, this), this.slider.addEventListener("mouseover", this.mouseOverHandler), void this.slider.addEventListener("transitionend", this.onTransitionEnded, !1)) : (S.logger.error("Prev button not found in " + t + " carousel"), null)) : (S.logger.error("Next button not found in " + t + " carousel"), null)) : (S.logger.error("Slider not found in " + t + " carousel"), null)) : (S.logger.error("Carousel with selector " + t + " not found"), null)
                }
                return A(e, [{
                    key: "onTransitionEnded",
                    value: function(e) {
                        if (!e.target.classList.contains("js-itemList") || !e.propertyName) return null;
                        switch (e.propertyName) {
                            case "left":
                            case "top":
                                return this.onCarouselMoved(), !0;
                            default:
                                return null
                        }
                    }
                }, {
                    key: "onCarouselStartedMoving",
                    value: function() {
                        this.movement.isMoving = !0
                    }
                }, {
                    key: "onCarouselMoved",
                    value: function() {
                        this.movement.isEndless ? ("next" === this.movement.direction ? (this.slider.removeChild(this.slider.firstElementChild), this.clonedNode = this.slider.children[this.additionalItemsAtTheBegining].cloneNode(!0), this.slider.appendChild(this.clonedNode)) : "prev" === this.movement.direction && (this.slider.removeChild(this.slider.lastElementChild), this.clonedNode = this.slider.children[this.slider.children.length - this.additionalItemsAtTheEnd - 1].cloneNode(!0), this.slider.insertBefore(this.clonedNode, this.slider.firstChild)), this.slider.style.transition = "0s " + this.movement.type + " " + this.cssProp, this.slider.style[this.cssProp] = 0, setTimeout(this.resetSliderTransition, 0)) : this.clonedNode = null, this.movement.isMoving = !1
                    }
                }, {
                    key: "handleNextClick",
                    value: function(e) {
                        return e.preventDefault(), !this.movement.isMoving && (this.slider.style[this.cssProp] = this.movement.isEndless ? -this.stepSize + "px" : parseFloat(this.slider.style[this.cssProp]) - this.stepSize + "px", this.onCarouselStartedMoving(), this.movement.direction = "next", !0)
                    }
                }, {
                    key: "handlePrevClick",
                    value: function(e) {
                        return e.preventDefault(), !this.movement.isMoving && (this.slider.style[this.cssProp] = this.movement.isEndless ? this.stepSize + "px" : parseFloat(this.slider.style[this.cssProp]) + this.stepSize + "px", this.onCarouselStartedMoving(), this.movement.direction = "prev", !0)
                    }
                }, {
                    key: "resetSliderTransition",
                    value: function() {
                        this.slider.style.transition = this.movement.duration + " " + this.movement.type + " " + this.cssProp
                    }
                }, {
                    key: "mouseOverHandler",
                    value: function(e) {}
                }, {
                    key: "clickHandler",
                    value: function(e) {}
                }]), e
            }(),
            x = O,
            C = (n(116), function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }()),
            P = function e(t, n, r) {
                null === t && (t = Function.prototype);
                var i = Object.getOwnPropertyDescriptor(t, n);
                if (void 0 === i) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, n, r)
                }
                if ("value" in i) return i.value;
                var a = i.get;
                if (void 0 !== a) return a.call(r)
            },
            T = function(e) {
                function t(e) {
                    i(this, t);
                    var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    if (!n.el) {
                        var r;
                        return S.logger.error("PopUpCarousel with selector " + e + " not found"), r = null, o(n, r)
                    }
                    return n.stepSize = 149, n.popUpDisplayed = !1, n.popUpWin = n.el.querySelector(".popup-window"), n.popUp = n.el.querySelector(".popup-container"), n.popUp.style.transition = "width 0.4s ease-out, height 0.4s ease-out, opacity .3s ease-in-out", n.clickHandler = n.clickHandler.bind(n), n.fadeIn = n.fadeIn.bind(n), n.clickHandlerPopUp = n.clickHandlerPopUp.bind(n), n.populatePopUp = n.populatePopUp.bind(n), n.popUpWin.addEventListener("click", n.clickHandlerPopUp), n
                }
                return a(t, e), C(t, [{
                    key: "resetPopUp",
                    value: function() {
                        this.popUp.style.opacity = 0, this.popUp.style.width = 0, this.popUp.style.height = "auto"
                    }
                }, {
                    key: "clickHandler",
                    value: function(e) {
                        e.preventDefault();
                        var t = e.target && e.target.closest("li");
                        if (!t) return S.logger.error('No "li" element found on click'), null;
                        this.popUpDisplayed && this.popUpDisplayed.classList.remove("selected"), this.popUpDisplayed = t, this.popUpDisplayed.classList.add("selected"), this.populatePopUp(t.id), this.resetPopUp();
                        var n = this.popUp.clientHeight;
                        return this.popUp.style.height = 0, this.popUpWin.style.visibility = "visible", this.popUp.style.height = n + "px", this.popUp.style.width = "202px", this.fadeIn(), !0
                    }
                }, {
                    key: "onCarouselMoved",
                    value: function() {
                        P(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "onCarouselMoved", this).call(this), this.popUpDisplayed && ("next" === this.movement.direction ? this.popUpDisplayed = this.popUpDisplayed.nextElementSibling || this.slider.firstElementChild : "prev" === this.movement.direction && (this.popUpDisplayed = this.popUpDisplayed.previousElementSibling || this.slider.children[this.slider.children.length - 2]), this.popUp.style.opacity = 0, this.popUp.style.height = "auto", this.populatePopUp(this.popUpDisplayed.id), this.fadeIn())
                    }
                }, {
                    key: "populatePopUp",
                    value: function(e) {
                        this.popUp.innerHTML = this.el.querySelector("#" + e + "_container").innerHTML;
                        var t = this.popUp.querySelector("img");
                        t.src = t.className.split("|")[0]
                    }
                }, {
                    key: "fadeIn",
                    value: function() {
                        this.popUp.style.opacity = 1
                    }
                }, {
                    key: "clickHandlerPopUp",
                    value: function(e) {
                        e.target.classList.contains("x-closebutton") && (this.popUpWin.style.visibility = "hidden", this.popUpDisplayed = !1, this.popUp.style.opacity = 0)
                    }
                }]), t
            }(x),
            L = T,
            I = (n(117), function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }()),
            j = function e(t, n, r) {
                null === t && (t = Function.prototype);
                var i = Object.getOwnPropertyDescriptor(t, n);
                if (void 0 === i) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, n, r)
                }
                if ("value" in i) return i.value;
                var a = i.get;
                if (void 0 !== a) return a.call(r)
            },
            M = function(e) {
                function t(e) {
                    l(this, t);
                    var n = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    if (!n.el) {
                        var r;
                        return S.logger.error("ImageSwapCarousel with selector " + e + " not found"), r = null, s(n, r)
                    }
                    return n.stepSize = 90, n.bigLink = n.el.querySelector(".js-link"), n.bigImg = n.el.querySelector(".js-placeholder"), n.caption = n.el.querySelector(".js-caption"), n.buyLink = n.el.querySelector(".js-buy-link"), n.changeBigPic = n.changeBigPic.bind(n), n
                }
                return c(t, e), I(t, [{
                    key: "mouseOverHandler",
                    value: function(e) {
                        var t = e.target.closest("a");
                        return t ? (this.changeBigPic(t), t) : null
                    }
                }, {
                    key: "onCarouselMoved",
                    value: function() {
                        j(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "onCarouselMoved", this).call(this);
                        var e = this.slider.children[1].querySelector("a");
                        return this.changeBigPic(e), e
                    }
                }, {
                    key: "changeBigPic",
                    value: function(e) {
                        if (this.bigImg) {
                            this.bigLink.href = e.href, this.bigImg.src = e.rel.split("|")[0];
                            var t = e.getElementsByTagName("IMG")[0].alt;
                            this.caption.innerHTML = t;
                            var n = e.parentNode,
                                r = n.querySelector(".js-buy-link");
                            this.buyLink && (this.buyLink.href = null === r ? "#" : r.href), this.bigLink.addEventListener("click", this.clickHandler)
                        }
                    }
                }]), t
            }(x),
            D = M,
            R = (n(118), function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }()),
            N = function e(t, n, r) {
                null === t && (t = Function.prototype);
                var i = Object.getOwnPropertyDescriptor(t, n);
                if (void 0 === i) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, n, r)
                }
                if ("value" in i) return i.value;
                var a = i.get;
                if (void 0 !== a) return a.call(r)
            },
            q = function(e) {
                function t(e) {
                    u(this, t);
                    var n = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    if (!n.el) {
                        var r;
                        return S.logger.error("LightBoxCarousel with selector " + e + " not found"), r = null, d(n, r)
                    }
                    return n.stepSize = 104, n.numCols = n.el.querySelectorAll("li.js-column").length, n.inPolePosition = 2, n.nextBtn.style.visibility = "hidden", n.prevBtn.style.visibility = "hidden", 3 === n.numCols && (n.inPolePosition = 1, n.slider.style.left = "104px"), n.handleController(), n.universe = n.el.closest(".lightbox-gallery"), n.overlay = null, n.handleController = n.handleController.bind(n), n
                }
                return f(t, e), R(t, [{
                    key: "handleController",
                    value: function() {
                        if (this.numCols <= 3) return this.prevBtn.style.visibility = "hidden", void(this.nextBtn.style.visibility = "hidden");
                        1 === this.inPolePosition ? (this.prevBtn.style.visibility = "hidden", this.nextBtn.style.visibility = "visible") : this.inPolePosition === this.numCols - 2 ? (this.prevBtn.style.visibility = "visible", this.nextBtn.style.visibility = "hidden") : (this.prevBtn.style.visibility = "visible", this.nextBtn.style.visibility = "visible")
                    }
                }, {
                    key: "handlePrevClick",
                    value: function(e) {
                        e.preventDefault(), N(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "handlePrevClick", this).call(this, e), this.inPolePosition--
                    }
                }, {
                    key: "handleNextClick",
                    value: function(e) {
                        e.preventDefault(), N(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "handleNextClick", this).call(this, e), this.inPolePosition++
                    }
                }, {
                    key: "onCarouselMoved",
                    value: function() {
                        N(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "onCarouselMoved", this).call(this), this.handleController()
                    }
                }]), t
            }(D),
            B = q,
            H = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            U = function e(t, n, r) {
                null === t && (t = Function.prototype);
                var i = Object.getOwnPropertyDescriptor(t, n);
                if (void 0 === i) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, n, r)
                }
                if ("value" in i) return i.value;
                var a = i.get;
                if (void 0 !== a) return a.call(r)
            },
            F = function(e) {
                if (e.click) e.click();
                else {
                    if (!e.onclick) return S.logger.error("triggerHandleNextClick error. Prev button does not have the propper event click handler"), null;
                    e.onclick()
                }
                return !0
            },
            z = function(e) {
                function t(e) {
                    p(this, t);
                    var n = h(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    if (!n.el) {
                        var r;
                        return S.logger.error("LightBoxCarouselMain with selector " + e + " not found"), r = null, h(n, r)
                    }
                    return n.movement.isEndless = !1, n.changeBigPic(n.el.querySelector("li.js-column a")), n.subCarousel = null, n.clickHandler = n.clickHandler.bind(n), n.setSubCarousel = n.setSubCarousel.bind(n), n.triggerHandlePrevClick = n.triggerHandlePrevClick.bind(n), n.triggerHandleNextClick = n.triggerHandleNextClick.bind(n), n
                }
                return m(t, e), H(t, [{
                    key: "onCarouselMoved",
                    value: function() {
                        U(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "onCarouselMoved", this).call(this);
                        var e = this.slider.querySelectorAll("li.js-column")[this.inPolePosition - 1],
                            n = e.querySelector("li"),
                            r = n.querySelector("a");
                        return this.changeBigPic(r), r
                    }
                }, {
                    key: "clickHandler",
                    value: function(e) {
                        e.preventDefault();
                        var t = e.target.closest("a"),
                            n = t.parentNode.querySelector(".js-buy-link"),
                            r = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) + "px";
                        null === this.overlay && (this.overlay = document.getElementById("overlay")), this.overlay.style.display = "block", this.overlay.style.height = r, this.subCarousel.showUp(t.href, e.target.alt, this.inPolePosition, null === n ? "#" : n.href, t.rel)
                    }
                }, {
                    key: "setSubCarousel",
                    value: function(e) {
                        this.subCarousel = e
                    }
                }, {
                    key: "handlePrevClick",
                    value: function(e) {
                        e.preventDefault(), U(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "handlePrevClick", this).call(this, e)
                    }
                }, {
                    key: "handleNextClick",
                    value: function(e) {
                        e.preventDefault(), U(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "handleNextClick", this).call(this, e)
                    }
                }, {
                    key: "triggerHandlePrevClick",
                    value: function() {
                        return F(this.prevBtn)
                    }
                }, {
                    key: "triggerHandleNextClick",
                    value: function() {
                        return F(this.nextBtn)
                    }
                }]), t
            }(B),
            V = z,
            W = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            G = function e(t, n, r) {
                null === t && (t = Function.prototype);
                var i = Object.getOwnPropertyDescriptor(t, n);
                if (void 0 === i) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, n, r)
                }
                if ("value" in i) return i.value;
                var a = i.get;
                if (void 0 !== a) return a.call(r)
            },
            Y = function(e) {
                function t(e, n) {
                    v(this, t);
                    var r = document.getElementById("lightbox-target");
                    if (document.querySelector(e)) {
                        var i = document.querySelector(e).closest("div.js-movable");
                        r.insertBefore(i, r.firstChild)
                    }
                    var o = y(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    if (!o.el) {
                        var a;
                        return S.logger.error("LightBoxCarouselSub with selector " + e + " not found"), a = null, y(o, a)
                    }
                    o.mainCarousel = n.mainCarousel, o.movement.isEndless = !1, o.animTimeInSeconds = .4, o.animTimeInMilisecs = 1e3 * o.animTimeInSeconds, o.target = r, o.gallery = o.universe.querySelector(".wrap_" + e.substring(1)), o.bigPicHolder = o.gallery.querySelector(".main-image-holder"), o.bigPicHolder.style.transition = "opacity " + o.animTimeInSeconds + "s ease-out", o.bigPic = o.gallery.querySelector(".main-overlayimage"), o.bigPic.style.transition = "width " + o.animTimeInSeconds + "s ease-out, height " + o.animTimeInSeconds + "s ease-out", o.picDescContainer = o.gallery.querySelector(".messages"), o.picDesc = o.gallery.querySelector(".mainText"), o.buyLink = o.gallery.querySelector(".buy-link"), o.closeBtn = o.gallery.querySelector(".x-closebutton"), o.increment = o.increment.bind(o), o.resetStage = o.resetStage.bind(o), o.animBigPic = o.animBigPic.bind(o), o.fadeInBigPic = o.fadeInBigPic.bind(o), o.showUp = o.showUp.bind(o), o.closeHandler = o.closeHandler.bind(o), o.closeBtn.addEventListener("click", o.closeHandler), o.mainCarousel.setSubCarousel(o);
                    var l = document.getElementById("overlay");
                    return l && l.addEventListener("click", o.closeHandler), o
                }
                return g(t, e), W(t, [{
                    key: "increment",
                    value: function(e) {
                        return (e - 2) * -this.stepSize
                    }
                }, {
                    key: "showUp",
                    value: function(e, t, n, r, i) {
                        var o = function() {
                            var e = document.getElementById("top").clientWidth;
                            return (document.body.clientWidth - e) / 2 + e
                        }();
                        this.target.style.display = "block";
                        var a = (window.pageYOffset || document.documentElement.scrollTop) + 68 + "px";
                        this.target.style.top = a, this.target.style.left = o + "px", this.gallery.querySelector(".more-link").style.display = "none", this.gallery.style.display = "block", this.animBigPic(e, t, r, i), this.inPolePosition = n, this.slider.style.left = this.increment(n) + "px", this.handleController()
                    }
                }, {
                    key: "clickHandler",
                    value: function(e) {
                        e.preventDefault();
                        var t = e.target,
                            n = t.closest("a");
                        if (n) {
                            var r = n.parentNode.querySelector(".js-buy-link"),
                                i = null === r ? "#" : r.href;
                            return this.animBigPic(n.href, t.alt, i, n.rel), n
                        }
                        return null
                    }
                }, {
                    key: "mouseOverHandler",
                    value: function(e) {}
                }, {
                    key: "closeHandler",
                    value: function(e) {
                        e.preventDefault(), null === this.overlay && (this.overlay = document.getElementById("overlay")), this.overlay.style.display = "none", this.overlay.style.height = "0px", this.gallery.style.display = "none", this.resetStage()
                    }
                }, {
                    key: "resetStage",
                    value: function() {
                        var e = this;
                        this.bigPic.style.width = "0px", this.bigPic.style.height = "0px", this.picDescContainer.style.width = "0px", this.picDesc.innerHTML = "", this.bigPicHolder.style.transition = "opacity 0s ease-out", this.bigPicHolder.style.opacity = "0", setTimeout(function() {
                            e.bigPicHolder.style.transition = "opacity " + e.animTimeInSeconds + "s ease-out"
                        }, 0)
                    }
                }, {
                    key: "fadeInBigPic",
                    value: function(e, t) {
                        var n = this;
                        setTimeout(function() {
                            n.picDescContainer.style.width = e ? e[0] + "px" : "600px", n.picDesc.innerHTML = t, n.bigPicHolder.style.opacity = 1
                        }, this.animTimeInMilisecs)
                    }
                }, {
                    key: "animBigPic",
                    value: function(e, t, n, r) {
                        var i = function(e) {
                            try {
                                var t = new RegExp("([0-9]+)x([0-9]+).(jpg|png)", "gi").exec(e);
                                return [t[1], t[2]]
                            } catch (e) {
                                return null
                            }
                        }(e);
                        this.resetStage(), this.bigPic.src = i ? e : r && r.replace(/\|.*/, ""), "" === n || -1 !== n.indexOf("#") ? (this.buyLink.href = "", this.buyLink.style.display = "none") : (this.buyLink.href = n, this.buyLink.style.display = "block"), this.bigPic.style.width = i ? i[0] + "px" : "600px", this.bigPic.style.height = i ? i[1] + "px" : "auto", this.bigPic.style.margin = "", i || (this.bigPic.style.margin = "auto"), this.fadeInBigPic(i, t)
                    }
                }, {
                    key: "handlePrevClick",
                    value: function(e) {
                        e.preventDefault(), G(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "handlePrevClick", this).call(this, e), this.mainCarousel.triggerHandlePrevClick()
                    }
                }, {
                    key: "handleNextClick",
                    value: function(e) {
                        e.preventDefault(), G(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "handleNextClick", this).call(this, e), this.mainCarousel.triggerHandleNextClick()
                    }
                }, {
                    key: "onCarouselMoved",
                    value: function() {
                        G(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "onCarouselMoved", this).call(this)
                    }
                }]), t
            }(B),
            X = Y,
            K = function e(t, n) {
                b(this, e), this.mainCarousel = new V(t), this.subCarousel = new X(n.idSubCarousel, {
                    mainCarousel: this.mainCarousel
                })
            },
            J = K,
            Q = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            Z = function e(t, n, r) {
                null === t && (t = Function.prototype);
                var i = Object.getOwnPropertyDescriptor(t, n);
                if (void 0 === i) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, n, r)
                }
                if ("value" in i) return i.value;
                var a = i.get;
                if (void 0 !== a) return a.call(r)
            },
            $ = function(e) {
                function t(e) {
                    w(this, t);
                    var n = E(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    if (!n.el) {
                        var r;
                        return S.logger.error("RolloverCarousel with selector " + e + " not found"), r = null, E(n, r)
                    }
                    return n.stepSize = 176, n.el.querySelectorAll("li").forEach(function(e) {
                        n.attachListenersToListItem(e)
                    }), n.attachListenersToListItem = n.attachListenersToListItem.bind(n), n.onCarouselMoved = n.onCarouselMoved.bind(n), n
                }
                return k(t, e), Q(t, [{
                    key: "attachListenersToListItem",
                    value: function(e) {
                        e.panel = e.getElementsByTagName("SPAN")[0], e.panel.style.transition = "top 0.45s ease-out", e.addEventListener("mouseover", function() {
                            e.panel.style.top = "0px"
                        }), e.addEventListener("mouseout", function() {
                            e.panel.style.top = "110px"
                        })
                    }
                }, {
                    key: "onCarouselMoved",
                    value: function() {
                        Z(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "onCarouselMoved", this).call(this), this.attachListenersToListItem(this.clonedNode)
                    }
                }]), t
            }(x),
            ee = $,
            te = (n(119), n(120), n(121), n(3)),
            ne = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            re = function(e) {
                var t = void 0;
                return e && getComputedStyle && (t = getComputedStyle(e).marginRight), t
            },
            ie = function(e) {
                var t = e.offsetWidth;
                if (!t && (t = e.clientWidth, getComputedStyle)) {
                    var n = getComputedStyle(e);
                    t += parseFloat(n.borderLeftWidth) + parseFloat(n.borderRightWidth)
                }
                return Math.round(t)
            },
            oe = function() {
                function e(t, n) {
                    return _(this, e), this.el = document.querySelector(t), this.el ? (this.panelsContainer = this.el && this.el.querySelector(".rotator-panels"), this.el && this.panelsContainer && this.panelsContainer.querySelector("li") ? (this.itemWidth = null, this.activePage = 1, n && Object.assign(this, n), this.params = {
                        params: n,
                        selector: t
                    }, this.pagesRotator = this.el.querySelector(".rotator-pages"), this.setActivePageClass(this.activePage), this.bindPageSelectorClickEvent = this.bindPageSelectorClickEvent.bind(this), this.move = this.move.bind(this), this.onDomReady = this.onDomReady.bind(this), this.scrollTo = this.scrollTo.bind(this), Object(te.later)("DOM_READY").then(this.onDomReady.bind(this)).catch(function(e) {
                        S.logger.error("Error on ChannelCarousel constructor domready: ", e)
                    }), void this.initEvents()) : null) : (S.logger.error("ChannelCarousel with selector " + t + " not found"), null)
                }
                return ne(e, [{
                    key: "bindNextPrevButtonClickEvent",
                    value: function(e) {
                        var t = this;
                        e && e.addEventListener("click", function(e) {
                            e.preventDefault(), t.move(e)
                        })
                    }
                }, {
                    key: "bindPageSelectorClickEvent",
                    value: function() {
                        var e = this;
                        this.pagesRotator && this.pagesRotator.addEventListener("click", function(t) {
                            t.preventDefault(), e.scrollTo(parseInt(t.target.getAttribute("data-page"), 10))
                        })
                    }
                }, {
                    key: "initEvents",
                    value: function() {
                        this.bindNextPrevButtonClickEvent(this.el.querySelector(".js-move-next")), this.bindNextPrevButtonClickEvent(this.el.querySelector(".js-move-prev")), this.bindPageSelectorClickEvent(this.pagesRotator)
                    }
                }, {
                    key: "move",
                    value: function(e) {
                        var t = void 0,
                            n = parseInt(this.params.params.pageCount, 10);
                        return t = e.target.closest(".js-move-next") ? this.activePage >= n ? 1 : this.activePage + 1 : this.activePage <= 1 ? n : this.activePage - 1, this.scrollTo(t), t
                    }
                }, {
                    key: "onDomReady",
                    value: function() {
                        this.el.matches(".x-wide") && (this.params.params.updateStyleOnHover = !1)
                    }
                }, {
                    key: "scrollTo",
                    value: function(e) {
                        if (!this.itemWidth) {
                            var t = this.panelsContainer.querySelector("li");
                            this.itemWidth = ie(t) + (Math.round(parseFloat(re(t))) || 0)
                        }
                        var n = this.itemWidth * this.params.params.pageSize * (e - 1) * -1;
                        this.activePage = e, this.setActivePageClass(e), this.panelsContainer.style.transform = "translateX(" + n + "px)"
                    }
                }, {
                    key: "setActivePageClass",
                    value: function(e) {
                        if (this.pagesRotator) {
                            var t = this.params.params.activeClass || "selected";
                            Array.from(this.pagesRotator.querySelectorAll("li")).forEach(function(n) {
                                var r = n.querySelector("a");
                                r.classList.toggle(t, parseInt(r.getAttribute("data-page"), 10) === e)
                            })
                        }
                    }
                }]), e
            }(),
            ae = oe,
            le = function(e, t, n) {
                switch (t) {
                    case "carousel":
                        return new x(e, n);
                    case "popUpCarousel":
                        return new L(e);
                    case "imageSwapCarousel":
                        return new D(e);
                    case "lightBoxCarouselWrapper":
                        return new J(e, n);
                    case "rolloverCarousel":
                        return new ee(e, n);
                    case "channelCarousel":
                        return new ae(e, n);
                    default:
                        return S.logger.error("Unknown carousel type: " + t), null
                }
            };
        t.default = {
            init: le
        }
    }, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = (n(123), n(0)),
            i = {
                AU: "auhome",
                GB: "home",
                US: "ushome"
            },
            o = ["home", "ushome", "auhome", "ukhome", "indiahome"],
            a = ["billBoard-oop", "sky-article-wide", "textAd", "h-sky-a", "h-sky-b"],
            l = !1,
            s = function() {
                return l
            },
            c = function(e) {
                l = e
            },
            u = function(e) {
                return new RegExp("(^|,)" + e + "(,|$)").test(a.join(","))
            },
            d = function() {
                try {
                    return window.adverts
                } catch (e) {
                    return null
                }
            },
            f = function(e) {
                var t = d();
                if (s() || t && Boolean(t.getRendered().length)) {
                    var n = document.getElementById("content").getBoundingClientRect().width,
                        r = e.getBoundingClientRect().width,
                        i = n - r;
                    e.classList.remove("floating-no-ads"), e.style.transform = "translate(" + i + "px, 0)"
                } else e.classList.add("floating-no-ads"), e.removeAttribute("style")
            },
            p = function(e) {
                window.adsRenderer && window.adsRenderer.addLoadListener(function(e) {
                    var t = !e.isEmpty && e.slot && e.slot.molAd && e.slot.molAd.parentId;
                    c(s() || t && u(t))
                }), window.adsTrackers && window.adsTrackers.getRequestedAds().forEach(function(e) {
                    var t = e.lid && e.cid && e.id;
                    c(s() || t && u(t))
                });
                var t = d();
                t && t.on("rendered", function() {
                    f(e)
                })
            },
            h = function(e) {
                var t = document.getElementById("next-story");
                return !t || !t.classList.contains("show") || window.innerHeight > t.offsetHeight + e.clientHeight
            },
            m = function(e) {
                return "channel" === window.PageCriteria.pageType || "article" === window.PageCriteria.pageType && h(e)
            },
            v = null,
            y = function(e) {
                v && (clearTimeout(v), v = null), v = setTimeout(function() {
                    var t = document.querySelector(".gamma") ? 1270 : 975,
                        n = window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop;
                    s() && document.body.classList.add("floating-buttons-oop-ads"), m(e) && n > window.innerHeight / 2 && window.innerWidth > t ? document.body.classList.add("floating-buttons-show") : document.body.classList.remove("floating-buttons-show")
                }, 250)
            },
            g = n(6),
            b = n.n(g),
            w = function(e) {
                var t = e.querySelector(".new-article-count");
                if (t) {
                    var n = !t.classList.contains("hidden"),
                        r = e.querySelector(".new-articles"),
                        i = e.querySelector(".back-to-home:not(.new-articles)");
                    n && (t.classList.add("hidden"), i.classList.remove("hidden"), r.classList.add("hidden"))
                }
            },
            E = function(e, t) {
                var n = t.querySelector(".new-article-count");
                if (n) {
                    var r = !n.classList.contains("hidden"),
                        i = t.querySelector(".new-articles"),
                        o = t.querySelector(".back-to-home:not(.new-articles)"),
                        a = e >= 99 ? "+99" : String(e);
                    n.innerHTML !== a && (n.innerHTML = a), r || (n.classList.remove("hidden"), o.classList.add("hidden"), i.classList.remove("hidden"))
                }
            },
            k = function(e, t) {
                if (e) {
                    var n = parseInt(b.a.get("baseline-article-count"), 10) || 0,
                        r = parseInt(b.a.get("latest-article-count"), 10) || n;
                    r - n > 0 && !document.body.classList.contains("floating-buttons-back-to-top-only") ? E(r - n, t) : w(t)
                } else w(t)
            },
            _ = function() {
                var e = window.PageCriteria.geo;
                return i[e] || "home"
            },
            S = function(e) {
                var t = window.PageCriteria,
                    n = _() === t.channel;
                n && o.includes(t.subchannel) && (document.body.classList.add("no-article-count"), document.body.classList.add("floating-buttons-back-to-top-only")), n && "article" !== t.pageType && e ? b.a.set("baseline-article-count", e) : e && b.a.set("latest-article-count", e)
            },
            A = n(4),
            O = n(7),
            x = function(e) {
                return Math.sin(e * (Math.PI / 2))
            },
            C = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
                    n = window.scrollY || document.documentElement.scrollTop,
                    r = e - n,
                    i = Date.now(),
                    o = i + t;
                ! function i() {
                    var a = o - Date.now(),
                        l = a / t;
                    if (l > 0 && l <= 1) {
                        var s = 1 - x(l);
                        window.requestAnimationFrame(i), O.scrollUtils.setScrollTop(document.body, n + r * s)
                    } else O.scrollUtils.setScrollTop(document.body, e)
                }()
            },
            P = C,
            T = function(e) {
                var t = e.querySelector(".back-to-top"),
                    n = e.querySelector(".back-to-home"),
                    r = e.querySelector(".button-share-facebook"),
                    i = e.querySelector(".button-share-twitter");
                t && t.addEventListener("click", function(e) {
                    e.preventDefault(), A.pageEvents.publish(A.pageEvents.FLOATING_BUTTONS_BACK_TO_TOP, {
                        value: "top"
                    }), P(0)
                }), n && n.addEventListener("click", function() {
                    A.pageEvents.publish(A.pageEvents.FLOATING_BUTTONS_BACK_TO_TOP, {
                        value: "home"
                    })
                });
                var o = r && r.hasAttribute("data-preferred-shared-network-enabled"),
                    a = "";
                o && ("twitter" === b.a.get("social-share-platform") ? a = "twitter_preferred-" : "facebook" === b.a.get("social-share-platform") && (a = "facebook_preferred-")), r && r.addEventListener("click", function() {
                    window.DMS.Facebook.postToFB(a + "floating_navigation")
                }), i && i.addEventListener("click", function() {
                    window.DMS.Twitter.postToTWTTR(a + "floating_navigation")
                })
            },
            L = T;
        n.d(t, "init", function() {
            return I
        });
        var I = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.newArticleCount,
                n = e.showArticleCount,
                i = e.featureEnabled,
                o = e.newArticleRefresh,
                a = document.querySelector(".floating-buttons"),
                l = window.PageCriteria,
                s = "true" === i || !0 === i,
                c = "true" === n || !0 === n;
            return a ? (S(t), s && setInterval(function() {
                return k(c, a)
            }, parseInt(o, 10) || 1e3), a && "other" === l.device && m(a) && (window.addEventListener("resize", function() {
                return y(a)
            }), window.addEventListener("scroll", function() {
                return y(a)
            }), L(a), y(a), p(a), f(a)), a) : (r.logger.error("Floating Buttons container not found on page"), null)
        }
    }, function(e, t) {}, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(10),
            i = n(0),
            o = function(e, t, n, r) {
                for (var i = n.children, o = i.length, a = [], l = Math.max(0, Math.max(0, r) + t.getBoundingClientRect().height - e.getBoundingClientRect().height), s = 0, c = o; c && s < l;) {
                    var u = i[c];
                    u && u.classList && !u.classList.contains("puff-ad") && !u.classList.contains("native-ad") && (a.push(u), s += u.getBoundingClientRect().height + 5, c === o - 1 && Array.from(u.children).forEach(function(e) {
                        e && e.classList && e.classList.remove("bottom")
                    })), c--
                }
                return a
            },
            a = o,
            l = function(e) {
                return e && Array.from(e.parentNode.children).find(function(e) {
                    return e && e.classList.contains("alpha")
                })
            },
            s = function() {
                var e = document.querySelectorAll(".beta .femail .puff ul, .beta .tvshowbiz .puff ul");
                if (!e.length) return void i.logger.info("No puffs found on the page");
                var t = e[0],
                    n = e[1],
                    r = t && t.closest(".beta"),
                    o = n && n.closest(".beta"),
                    s = l(r),
                    c = l(o);
                if (!t || !r || !s) return void i.logger.info("No single/double/puff pairing found on the page");
                var u = a(s, r, t, 0);
                if (c && o && n) {
                    u.forEach(function(e) {
                        n.insertBefore(e, n.firstChild)
                    });
                    a(c, o, n, r.getBoundingClientRect().height - s.getBoundingClientRect().height).forEach(function(e) {
                        e.parentNode && e.parentNode.removeChild(e)
                    })
                } else u.forEach(function(e) {
                    e.parentNode && e.parentNode.removeChild(e)
                })
            },
            c = s;
        n.d(t, "init", function() {
            return u
        });
        var u = function() {
            var e = Object(r.debounce)(function() {
                    return c()
                }, 500),
                t = window.adsRenderer;
            t && t.addLoadListener && t.addLoadListener(function(t) {
                var n = t && !t.isEmpty && t.slot && t.slot.molAd && t.slot.molAd.parentId;
                if (n) {
                    var r = document.getElementById(n);
                    r && r.closest(".beta") && e()
                }
            }), e()
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(78),
            i = n(126),
            o = (n.n(i), n(127)),
            a = (n.n(o), n(128)),
            l = (n.n(a), n(129)),
            s = (n.n(l), n(130));
        n.n(s);
        n.d(t, "Rotator", function() {
            return r.a
        })
    }, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = {};
        n.d(r, "init", function() {
            return g
        });
        var i = {};
        n.d(i, "init", function() {
            return D
        });
        var o = {};
        n.d(o, "SOCIAL_ELEMENTS_HTML", function() {
            return R
        }), n.d(o, "SHARE_ELEMENTS_HTML", function() {
            return N
        }), n.d(o, "fShareComment", function() {
            return U
        }), n.d(o, "tShareComment", function() {
            return F
        }), n.d(o, "pShareComment", function() {
            return z
        }), n.d(o, "shareComment", function() {
            return W
        }), n.d(o, "updateHoverElements", function() {
            return X
        });
        var a = (n(29), n(3)),
            l = n(0),
            s = n(1),
            c = n(14),
            u = n(30),
            d = n(15),
            f = n(31),
            p = n(32),
            h = n(12),
            m = n(33),
            v = n(9),
            y = n(34),
            g = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                Object(h.loadAsyncScript)(), Object(h.bindNavigationClick)(), Object(v.bindClickToFollowButton)(e.channel)
            },
            b = n(21),
            w = n(4),
            E = n(2),
            k = n(10),
            _ = ["facebook", "flipboard", "twitter", "pinterest", "instagram", "snapchat"],
            S = {
                facebook: {
                    height: 600,
                    width: 1100
                },
                flipboard: {
                    height: 600,
                    width: 1100
                },
                instagram: {
                    height: 600,
                    width: 1100
                },
                pinterest: {
                    height: 600,
                    width: 1100
                },
                snapchat: {
                    height: 600,
                    width: 1100
                },
                twitter: {
                    height: 500,
                    width: 760
                }
            },
            A = {
                facebook: {
                    dailymailtv: {
                        link: "https://www.facebook.com/DailyMailTV",
                        text: "Daily Mail TV"
                    },
                    extratime: {
                        bold: "Share",
                        link: ["https://www.facebook.com/dialog/feed?app_id=146202712090395", "&name=", encodeURIComponent("Enjoy all the latest and exclusive celebrity sports news from MailOnline"), "&caption= ", "&link=", encodeURIComponent("http://www.dailymail.co.uk/sport/extratime/index.html"), "&redirect_uri=", encodeURIComponent("http://www.dailymail.co.uk/sport/extratime/index.html"), "&description=", encodeURIComponent("Find out what celebrity sports stars get up to away from the action with the latest news, photos and videos in MailOnline’s dedicated sports showbiz page."), "&picture=", encodeURIComponent("https://i.dailymail.co.uk/i/sport/154x154_extra_time.png")].join(""),
                        text: "Extra Time"
                    },
                    home: {
                        account: "DailyMail",
                        text: "Daily Mail"
                    },
                    money: {
                        link: "https://www.facebook.com/pages/This-is-Money/310555847252",
                        text: "This is Money"
                    },
                    sport: {
                        account: "DailyMailSport",
                        text: "Daily Mail Sport"
                    },
                    transfernews: {
                        bold: "Share",
                        link: ["https://www.facebook.com/dialog/feed?app_id=146202712090395", "&name=", encodeURIComponent("Read all the latest and exclusive transfer news from MailOnline"), "&caption= ", "&link=", encodeURIComponent("http://www.dailymail.co.uk/sport/transfernews/index.html"), "&redirect_uri=", encodeURIComponent("http://www.dailymail.co.uk/sport/extratime/index.html"), "&description=", encodeURIComponent("Be the first to find out who’s moving where and for how much with MailOnline’s dedicated transfer news page."), "&picture=", encodeURIComponent("https://i.dailymail.co.uk/i/sport/154x154_transfer_news.png")].join(""),
                        text: "Transfer News"
                    },
                    tvshowbiz: {
                        account: "DailyMailCeleb",
                        text: "Daily Mail Celeb"
                    }
                },
                flipboard: {
                    auhome: {
                        link: "https://flipboard.com/@DailyMailAU",
                        text: "Daily Mail"
                    },
                    home: {
                        link: "https://flipboard.com/@DailyMail",
                        text: "Daily Mail"
                    },
                    sport: {
                        link: "https://flipboard.com/@dailymail/daily-mail-sports-o2cd7gl4z",
                        text: "Daily Mail Sport"
                    },
                    tvshowbiz: {
                        link: "https://flipboard.com/@dailymail/daily-mail-showbiz-mb56uebbz",
                        text: "Daily Mail Celeb"
                    },
                    ushome: {
                        link: "https://flipboard.com/@DailyMailUS",
                        text: "Daily Mail"
                    },
                    usshowbiz: {
                        link: "https://flipboard.com/@dailymailus/daily-mail-showbiz-eki2llkgz",
                        text: "Daily Mail Celeb"
                    }
                },
                instagram: {
                    home: {
                        account: "dailymail",
                        text: "@DailyMail"
                    },
                    sport: {
                        account: "mailsport",
                        text: "@mailsport"
                    }
                },
                pinterest: {
                    home: {
                        account: "DailyMail",
                        text: "Daily Mail"
                    },
                    tvshowbiz: {
                        account: "dailymailceleb",
                        text: "Daily Mail Celeb"
                    }
                },
                twitter: {
                    dailymailtv: {
                        account: "DailyMailTV",
                        text: "@DailyMailTV"
                    },
                    extratime: {
                        bold: "Share",
                        link: ["https://twitter.com/intent/tweet?related=MailSport,MailOnline&text=", encodeURIComponent("Find out what celebrity sports stars get up to away from the action with MailOnline’s dedicated sports showbiz page. http://dailym.ai/1krSwk2")].join(""),
                        text: "Extra Time"
                    },
                    femail: {
                        account: "Femail",
                        text: "@Femail"
                    },
                    home: {
                        account: "MailOnline",
                        text: "@MailOnline"
                    },
                    money: {
                        account: "thisismoney",
                        text: "@thisismoney"
                    },
                    news: {
                        account: "dailymailuk",
                        text: "@dailymailuk"
                    },
                    newspictures: {
                        account: "dailymailpics",
                        text: "@dailymailpics"
                    },
                    newsUS: {
                        account: "dailymailus",
                        text: "@dailymailus"
                    },
                    sciencetech: {
                        account: "dailymailtech",
                        text: "@dailymailtech"
                    },
                    sport: {
                        account: "MailSport",
                        text: "@MailSport"
                    },
                    transfernews: {
                        bold: "Share",
                        link: ["https://twitter.com/intent/tweet?related=MailSport,MailOnline&text=", encodeURIComponent("Be the first to find out which players are on the move with MailOnline’s dedicated transfer news page. http://dailym.ai/1krSwk2")].join(""),
                        text: "Transfer News"
                    },
                    travel: {
                        account: "travelmail",
                        text: "@travelmail"
                    },
                    tvshowbiz: {
                        account: "DailyMailCeleb",
                        text: "@DailyMailCeleb"
                    }
                }
            },
            O = function(e) {
                w.pageEvents.publish(w.pageEvents.SOCIAL_SHARE_CLICKED, {
                    pageMetadata: Object(E.getPageMetadata)({
                        articleId: "non-article"
                    }),
                    placement: "non-native",
                    site: e
                })
            },
            x = function(e, t, n, r) {
                return r[e] && r[e][t] && r[e][t][n]
            },
            C = function(e, t, n) {
                var r = window.PageCriteria.channel || "home",
                    i = window.PageCriteria.subchannel || "home",
                    o = window.PageCriteria.geo && "GB" !== window.PageCriteria.geo ? window.PageCriteria : "",
                    a = r + o;
                return x(e, i + o, t, n) || x(e, i, t, n) || x(e, a, t, n) || x(e, r, t, n) || x(e, "home", t, n)
            },
            P = function(e, t) {
                return C(e, "account", t)
            },
            T = function(e, t) {
                return C(e, "text", t)
            },
            L = function(e, t) {
                return C(e, "bold", t)
            },
            I = function(e, t) {
                var n = C(e, "link", t);
                if (n) return n;
                var r = P(e, t);
                return {
                    facebook: "https://www.facebook.com/" + r,
                    instagram: "https://www.instagram.com/" + r,
                    pinterest: "https://pinterest.com/" + r,
                    snapchat: "https://www.snapchat.com/discover/Daily-Mail/8392137033",
                    twitter: "https://twitter.com/intent/user?screen_name=" + r + "&related=" + (window.twitterVia || "MailOnline")
                } [e]
            },
            j = function(e, t) {
                _.forEach(function(n) {
                    var r = e.querySelector("." + n),
                        i = S[n],
                        o = i.width,
                        a = i.height;
                    r && r.addEventListener("click", function(e) {
                        e.preventDefault(), O(n), window.open(I(n, t), "", Object(s.e)(o, a))
                    })
                })
            },
            M = function(e, t) {
                _.forEach(function(n) {
                    var r = e.querySelector("." + n + " span"),
                        i = e.querySelector("." + n + " b"),
                        o = T(n, t),
                        a = L(n, t);
                    r && o && (r.innerText = o), i && a && (i.innerText = a)
                })
            },
            D = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = document.querySelector("ul.dms-puff"),
                    n = Object(k.merge)({}, A, e);
                j(t, n), M(t, n)
            },
            R = '\n  <a class="fShareComment"></a>\n  <a class="tShareComment"></a>\n  <span class="pShareComment"></span>\n',
            N = '\n  <div class="shareComment">\n    ' + R + '\n    <span class="copyCommentLink"></span>\n    <span class="shareExpansionAnchor"></span>\n  </div>\n',
            q = function(e, t) {
                return e + (e.includes("?") ? "&" : "?") + t
            },
            B = function(e) {
                return e.length > 116
            },
            H = function(e) {
                var t = Math.max(e.lastIndexOf(" ", 112), e.lastIndexOf("\n", 112));
                return e.substring(0, t) + "..."
            },
            U = function(e, t, n) {
                var r = document.querySelector('meta[property="og:image"]'),
                    i = r && r.getAttribute("content"),
                    o = document.querySelector('meta[property="og:title"]'),
                    a = Object(s.b)({
                        app_id: 0x84f878b8271b,
                        caption: "Comment by " + t + ": " + n,
                        description: s.c,
                        link: q(e, "ito=facebook_share_comment_text"),
                        name: o && o.getAttribute("content"),
                        picture: i || "https://i.dailymail.co.uk/i/furniture/comments/articles/m_logo.png",
                        redirect_uri: "https://i.dailymail.co.uk/i/pix/facebook/close.html"
                    }, "https://www.facebook.com/dialog/feed?");
                window.open(a, "", Object(s.e)(1e3, 500))
            },
            F = function(e, t, n) {
                var r = q(t, "ito=twitter_share_comment_text"),
                    i = n;
                B(n) && (i = H(n));
                var o = encodeURIComponent(i + "\n" + r);
                e.location = "https://twitter.com/intent/tweet?text=" + o
            },
            z = function(e, t, n) {
                var r = n.commentBody;
                B(r) && (n.commentBody = H(r)), n.pinterestWindow = e, Object(h.postToPinterest)("comment", {
                    commentData: n,
                    type: "comment"
                })
            },
            V = function(e, t, n) {
                var r = n && n.commentId ? n : window.DM.RC.getCommentData(t);
                if (e.target.classList.contains("fShareComment")) Object(s.f)("facebook", "comment"), w.ted.tedEvent("social-event", {
                    "social-event": "facebook-share-comment"
                }), U(r.commentLink, r.commenterName, r.commentBody);
                else if (e.target.classList.contains("tShareComment")) {
                    Object(s.f)("twitter", "comment"), w.ted.tedEvent("social-event", {
                        "social-event": "twitter-tweet-comment"
                    });
                    var i = window.open("about:blank", "", Object(s.e)(575, 400));
                    F(i, r.commentLink, r.commentBody)
                } else if (e.target.classList.contains("pShareComment")) {
                    var o = window.open("about:blank", "", Object(s.e)(800, 320, !0));
                    w.ted.tedEvent("social-event", {
                        "social-event": "pinterest-share-comment"
                    }), r.shortUrl = r.commentLink, z(o, r.commentLink, r)
                }
            },
            W = V,
            G = function(e) {
                e && (e.querySelector(".shareComment").style.visibility = "visible", e.querySelector(".reportAbuseLink").style.visibility = "visible")
            },
            Y = function() {
                var e = document.querySelector("#js-comments .reply.hovered");
                if (e) return void G(e);
                var t = document.querySelector("#js-comments .comment.hovered");
                t && G(t)
            },
            X = Object(k.debounce)(Y, 10),
            K = {
                Article: b,
                buildUrlParameters: s.b,
                Diggit: u,
                domain: s.c,
                Email: d,
                Facebook: c,
                Fark: f,
                getWindowDimensions: s.e,
                LinkedIn: p,
                Navigation: r,
                Pinterest: h,
                PollShare: y,
                postToURL: s.g,
                Puff: i,
                RC: o,
                Reddit: m,
                socialClick: s.f,
                Twitter: v
            },
            J = function() {
                window.DMS = Object.assign(window.DMS || {}, K), Object.assign(window, {
                    emailArticle: window.emailArticle || K.Email.emailArticle,
                    postToDiggit: window.postToDiggit || K.Diggit.postToDiggit,
                    postToFark: window.postToFark || K.Fark.postToFark,
                    postToFB: window.postToFB || K.Facebook.postToFB,
                    postToLinkedIn: window.postToLinkedIn || K.LinkedIn.postToLinkedIn,
                    postToPinterest: window.postToPinterest || K.Pinterest.postToPinterest,
                    postToReddit: window.postToReddit || K.Reddit.postToReddit,
                    postToTWTTR: window.postToTWTTR || K.Twitter.postToTWTTR
                })
            },
            Q = function() {
                Array.from(document.querySelectorAll("[data-dm-social-article-auto-init]")).forEach(function(e) {
                    Object(b.init)(e.getAttribute("id"))
                })
            },
            Z = Q,
            $ = function() {
                Object(a.later)("DOM_READY", function() {
                    Array.from(document.querySelectorAll(".facebook-like-static")).forEach(function(e) {
                        e.addEventListener("click", function(t) {
                            var n = e.getAttribute("data-href");
                            n && (t.preventDefault(), window.open(n, "", Object(s.e)(1100, 600)))
                        })
                    })
                })
            },
            ee = $,
            te = n(35),
            ne = [{
                attributeName: "data-email-share-style",
                propertyName: "emailShareStyle"
            }, {
                attributeName: "data-hide-email",
                parseAsJson: !0,
                propertyName: "hideEmail"
            }, {
                attributeName: "data-headline",
                propertyName: "headline"
            }, {
                attributeName: "data-is-channel",
                parseAsJson: !0,
                propertyName: "isChannel"
            }],
            re = function(e) {
                var t = document.querySelector("#" + e);
                if (t) {
                    var n = {
                        anchor: t.getAttribute("data-anchor"),
                        articleChannelFollowButton: t.getAttribute("data-article-channel-follow-button"),
                        eTwitterStatus: t.getAttribute("data-twitter-status"),
                        id: t.getAttribute("data-article-id"),
                        placement: t.getAttribute("data-placement"),
                        title: t.getAttribute("data-formatted-headline"),
                        url: t.getAttribute("data-url")
                    };
                    ne.forEach(function(e) {
                        var r = e.attributeName,
                            i = e.parseAsJson,
                            o = e.propertyName;
                        if (t.hasAttribute(r))
                            if (i) try {
                                n[o] = JSON.parse(t.getAttribute(r))
                            } catch (e) {
                                l.logger.error("Failed to parse value as JSON in initSocialButtons (attribute: " + r + ", value: " + t.getAttribute(r) + ")")
                            } else n[o] = t.getAttribute(r)
                    }), Object(te.init)({
                        id: e,
                        params: n
                    })
                }
            },
            ie = function() {
                var e = document.querySelector("#socialLinks");
                e && window.DM && window.DM.SCExternalLinks && window.DM.SCExternalLinks({
                    value: e.getAttribute("data-external-link-tracking-value")
                })
            },
            oe = function() {
                Object(b.init)("top"), re("shareLinkTop"), Object(b.init)("bottom"), re("shareLinkBottom"), ie()
            },
            ae = oe,
            le = n(5),
            se = ["p", "ul", "h1", "h2", ".mol-article-quote"],
            ce = [".share-pictures-links", "#most-read-news-wrapper", "a", "input", '[data-social-scope="link"]'],
            ue = function(e) {
                return e.closest(se.join(",")) && !e.closest(ce.join(","))
            },
            de = function() {
                return window.getSelection ? window.getSelection().toString() : document.getSelection ? document.getSelection() : document.selection ? document.selection.createRange().text : ""
            },
            fe = function(e) {
                return e.length > 1e3 ? e.substring(0, 996) + '..."' : e
            },
            pe = function(e) {
                var t = document.querySelector("meta[property=twitter\\:title]"),
                    n = document.querySelector("meta[property=og\\:image]"),
                    r = document.querySelector('meta[property="og:url"]'),
                    i = t && t.getAttribute("content"),
                    o = document.querySelector(".article-text h1"),
                    a = window.twitterVia && "MailOnline" !== window.twitterVia ? window.twitterVia : window.currentChannelTwitterFollow;
                return {
                    caption: fe(e),
                    description: "www.dailymail.co.uk",
                    headline: o && o.innerText || i,
                    link: r && r.getAttribute("content") || window.location.href || "",
                    message: " ",
                    name: i,
                    picture: n && n.getAttribute("content"),
                    redirect_uri: "https://i.dailymail.co.uk/i/pix/facebook/close.html",
                    text: e,
                    title: " ",
                    type: "text",
                    url: window.articleShortUrl || r && r.getAttribute("content") || window.location.href || "",
                    via: a || "MailOnline"
                }
            },
            he = function() {
                if ("article" === window.PageCriteria.pageType && !Object(le.isMobile)() && !Object(E.getPageMetadata)().textBased) {
                    var e = document.querySelector(".article-text"),
                        t = document.createElement("div"),
                        n = "",
                        r = !1,
                        i = void 0,
                        o = void 0;
                    t.id = "dms-txt", t.innerHTML = '\n    <ul>\n      <li class="share">SHARE SELECTION</li>\n      <li class="facebook"></li>\n      <li class="twitter"></li>\n      <li class="mail"></li>\n    </ul>\n  ', document.body.insertBefore(t, document.body.firstChild), e.addEventListener("mouseup", Object(k.debounce)(function(e) {
                        if (n = de(), n = n && n.trim(), r = r && ue(e.target), n && r) {
                            var a = e.pageY > i ? e.pageY : i,
                                l = e.pageY > i ? e.pageX : o;
                            t.style.top = a + "px", t.style.left = l + "px", t.style.display = "inline"
                        }
                    }, 500)), e.addEventListener("mousedown", function(e) {
                        i = e.pageY, o = e.pageX, r = ue(e.target), t.style.display = "none"
                    }), t.addEventListener("mousedown", function(e) {
                        e.stopPropagation()
                    }), t.querySelector("li.facebook").addEventListener("click", function() {
                        Object(c.postToFB)("text", pe(n)), t.style.display = "none"
                    }), t.querySelector("li.twitter").addEventListener("click", function() {
                        Object(v.postToTWTTR)("text", pe(n)), t.style.display = "none"
                    }), t.querySelector("li.mail").addEventListener("click", function() {
                        var e = pe(n);
                        if (window.PageCriteria.mailtoEmailLinks) {
                            var r = encodeURIComponent(e.headline),
                                i = encodeURIComponent(n + "\n" + e.link + "?ito=email_share_article-text");
                            window.location.href = "mailto:?subject=Read this: " + r + "&body=" + i
                        } else {
                            var o = encodeURIComponent(n + " " + e.link);
                            window.location.href = "mailto:?subject=DailyMail%20article&body=" + o
                        }
                        Object(d.emailArticle)("text", pe(n)), t.style.display = "none"
                    })
                }
            },
            me = he;
        n.d(t, "loaded", function() {
            return ye
        });
        var ve = this,
            ye = function(e) {
                return function() {
                    var t = e.apply(this, arguments);
                    return new Promise(function(e, n) {
                        function r(i, o) {
                            try {
                                var a = t[i](o),
                                    l = a.value
                            } catch (e) {
                                return void n(e)
                            }
                            if (!a.done) return Promise.resolve(l).then(function(e) {
                                r("next", e)
                            }, function(e) {
                                r("throw", e)
                            });
                            e(l)
                        }
                        return r("next")
                    })
                }
            }(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            try {
                                J(), ee(), me()
                            } catch (e) {
                                l.logger.error("Failed to initialize mol-fe-social: " + e, e)
                            }
                            return e.prev = 1, e.next = 4, Object(a.later)("bundle");
                        case 4:
                            return e.next = 6, Object(a.later)("DOM_READY");
                        case 6:
                            ae(), e.next = 12;
                            break;
                        case 9:
                            e.prev = 9, e.t0 = e.catch(1), l.logger.error("Failed to initialize mol-fe-social: " + e.t0, e.t0);
                        case 12:
                            return e.prev = 12, e.next = 15, Object(a.later)("bundle");
                        case 15:
                            return e.next = 17, Object(a.later)("DOM_READY");
                        case 17:
                            Z(), e.next = 23;
                            break;
                        case 20:
                            e.prev = 20, e.t1 = e.catch(12), l.logger.error("Failed to initialize mol-fe-social: " + e.t1, e.t1);
                        case 23:
                        case "end":
                            return e.stop()
                    }
                }, e, ve, [
                    [1, 9],
                    [12, 20]
                ])
            }))()
    }, , function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
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
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = (n(134), n(135), Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }),
            s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            c = {
                _onLoadCallBack: null,
                activeHk: ".js-active",
                linkHk: ".js-links",
                paneOffClass: "dm-tab-pane-hidden",
                panesQuery: ".dm-tab-pane",
                tabIdPrefix: "t-",
                tabOffClass: null,
                tabOnClass: null,
                tabsQuery: ".dm-tab"
            },
            u = function(e, t) {
                Array.isArray(t) ? t.forEach(function(t) {
                    return e.classList.add(t)
                }) : e.classList.add(t)
            },
            d = function(e, t) {
                Array.isArray(t) ? t.forEach(function(t) {
                    return e.classList.remove(t)
                }) : e.classList.remove(t)
            },
            f = function() {
                function e(t) {
                    var n = this,
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    r(this, e);
                    var o = l({}, c, i);
                    Object.keys(o).forEach(function(e) {
                        e in n || (n[e] = o[e])
                    }), this.el = document.querySelector("#" + t), this.el && (this.tabCnt = this.el.querySelector(this.linkHk)), this.tabCnt && (this.tabCnt.addEventListener("click", function(e) {
                        return n._clickHandler(e)
                    }), this._tabs = this.el.querySelectorAll(this.tabsQuery), this._panes = this.el.querySelectorAll(this.panesQuery), "function" == typeof this._onLoadCallBack && this._onLoadCallBack(), this.currentTab = this.el.querySelector(this.activeHk))
                }
                return s(e, [{
                    key: "_clickHandler",
                    value: function(e) {
                        var t = e.target.closest(this.tabsQuery);
                        if (t && (e.preventDefault(), !t.classList.contains(this.activeHk))) {
                            var n = t.getAttribute("id").replace(new RegExp("^" + this.tabIdPrefix), "");
                            this._selectTab(n)
                        }
                    }
                }, {
                    key: "_selectTab",
                    value: function(e) {
                        this.reset(), this.tab(e)
                    }
                }, {
                    key: "reset",
                    value: function() {
                        var e = this;
                        this._panes && Array.from(this._panes).forEach(function(t) {
                            return t.classList.add(e.paneOffClass)
                        }), this._tabs && Array.from(this._tabs).forEach(function(t) {
                            u(t, e.tabOffClass), d(t, e.tabOnClass)
                        })
                    }
                }, {
                    key: "tab",
                    value: function(e) {
                        this.currentTab = document.querySelector("#" + this.tabIdPrefix + e), this.currentTab && (d(this.currentTab, this.tabOffClass), u(this.currentTab, this.tabOnClass)), document.querySelector("#" + e) && document.querySelector("#" + e).classList.remove(this.paneOffClass)
                    }
                }]), e
            }(),
            p = f,
            h = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            m = function(e) {
                function t(e) {
                    return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, {
                        tabOffClass: ["ow-igr2-bx", "link-ccogr2", "js-unactive"],
                        tabOnClass: ["link-wocc", "js-active"]
                    }))
                }
                return a(t, e), h(t, [{
                    key: "_onLoadCallBack",
                    value: function() {
                        var e = this._panes[0].clientHeight,
                            t = this._panes[1],
                            n = t.querySelectorAll("li").length > 1 ? 0 : 10;
                        t.style.height = e + n + "px"
                    }
                }]), t
            }(p),
            v = m;
        n.d(t, "Headlines", function() {
            return v
        }), n.d(t, "Tabs", function() {
            return p
        })
    }, function(e, t) {}, function(e, t) {}, function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
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

        function l(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function c(e, t) {
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

        function u(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function d(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function f(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function p(e, t) {
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
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var h = function() {
                function e(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !r && l.return && l.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }
                return function(t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            m = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            v = {
                integer: /^-?[\d,]*$/,
                mandatory: /^.+$/,
                number: /^-?[\d,]*(\.\d*)?$/,
                pInteger: /^[\d,]*$/,
                pNumber: /^[\d,]*(\.\d*)?$/,
                pNumNoFormat: /^[\d,]*(\.\d*)?$/
            },
            y = ".calc-inputs input[name], .calc-inputs select[name]",
            g = function() {
                function e(t, n) {
                    r(this, e), this.formEl = document.getElementById(t), this.formEl && (Object.assign(this, n), this.inputs = {}, this.inputEls = Array.from(this.formEl.querySelectorAll(y)), this.runCalc = this.runCalc.bind(this), this.bindEvents())
                }
                return m(e, [{
                    key: "bindEvents",
                    value: function() {
                        var e = this;
                        this.inputEls.forEach(function(t) {
                            var n = void 0;
                            "text" === t.type ? n = "keyup" : ["checkbox", "radio"].includes(t.type) ? n = "click" : "select-one" === t.type && (n = "change"), n && t.addEventListener(n, e.runCalc)
                        }), Array.from(this.formEl.querySelectorAll("ul.mortgage-tabs > li")).forEach(function(t) {
                            return t.addEventListener("click", e.changeTab)
                        }), this.formEl.addEventListener("submit", function(t) {
                            t.preventDefault(), e.runCalc(t)
                        }), Array.from(this.formEl.querySelectorAll("button[name=calculate]")).forEach(function(t) {
                            return t.addEventListener("click", e.runCalc)
                        })
                    }
                }, {
                    key: "clearMsg",
                    value: function() {
                        Array.from(this.formEl.querySelectorAll(".calc-msg")).forEach(function(e) {
                            return e.remove()
                        })
                    }
                }, {
                    key: "formatNum",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ",",
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ".",
                            i = void 0;
                        return Number.isFinite(e) && (i = (t ? e.toFixed(t) : String(Math.round(e))).split("."), i[0].length > 3 && (i[0] = i[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, n)), t && (i[1] = i[1] || "", i[1].length < t && (i[1] += new Array(t - i[1].length + 1).join("0")))), i && i.join(r)
                    }
                }, {
                    key: "changeTab",
                    value: function() {
                        var e = this.getAttribute("data-tab");
                        Array.from(document.querySelectorAll("ul.mortgage-tabs > li,.mortgage-forms form")).forEach(function(e) {
                            e.classList.remove("select")
                        }), Array.from(document.querySelectorAll('*[data-tab="' + e + '"]')).forEach(function(e) {
                            e.classList.add("select")
                        })
                    }
                }, {
                    key: "getResultsContainerElement",
                    value: function() {
                        return this.formEl.querySelector(".calc-results")
                    }
                }, {
                    key: "printMsg",
                    value: function(e, t) {
                        var n = this;
                        if (e) {
                            var r = document.createElement("p");
                            r.classList.add("calc-msg"), t && r.classList.add(t), r.innerHTML = e;
                            var i = this.getResultsContainerElement();
                            i && (i.childElementCount ? i.insertBefore(r, i.firstElementChild) : i.appendChild(r), this.onBeforeRun = function() {
                                n.clearMsg(), delete n.onBeforeRun
                            })
                        }
                    }
                }, {
                    key: "readInput",
                    value: function(e) {
                        var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (!e) return !1;
                        var r = e.name;
                        ["select-one", "text"].includes(e.type) || ["checkbox", "radio"].includes(e.type) && e.checked ? this.inputs[r] = e.value : this.inputs[r] = !1;
                        var i = void 0,
                            o = !1;
                        if (void 0 !== this.rq[r] || void 0 !== this.rq["*"]) {
                            i = (this.rq[r] || this.rq["*"]).every(function(i) {
                                var a = void 0,
                                    l = void 0;
                                return i instanceof RegExp ? l = i : (a = i, void 0 !== v[a] && (l = v[a], /^p?number|p?integer$/i.test(a) && (o = !0))), !(l && !l.test(t.inputs[r])) || (n && e.classList.add("failed"), !1)
                            })
                        }
                        return i && (e.classList.remove("failed"), o && (this.inputs[r] = Number(this.inputs[r].replace(/[,\s]/g, "")))), i
                    }
                }, {
                    key: "runCalc",
                    value: function(e) {
                        var t = this,
                            n = this.fx,
                            r = !0,
                            i = {};
                        if ((!e || "keyup" !== e.type || "Tab" !== e.key) && n && 0 !== Object.keys(n).length) {
                            "function" == typeof this.onBeforeRun && this.onBeforeRun(), Array.from(this.formEl.querySelectorAll(".calc-results input[name]")).forEach(function(e) {
                                e.value = ""
                            });
                            var o = e && "click" === e.type;
                            this.inputEls.forEach(function(e) {
                                var n = t.readInput(e, o);
                                r = r && n
                            }), r && Object.entries(n).forEach(function(e) {
                                var n = h(e, 2),
                                    r = n[0],
                                    o = n[1];
                                "function" == typeof o && (i[r] = o.call(t, t.inputs, i), (Number.isFinite(i[r]) || "string" == typeof i[r] && i[r].length > 0) && Array.from(t.formEl.querySelectorAll(".calc-results input[name=" + r + "]")).forEach(function(e) {
                                    e.value = "number" == typeof i[r] ? "£ " + t.formatNum(i[r], 2) : i[r]
                                }))
                            })
                        }
                    }
                }]), e
            }(),
            b = g,
            w = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            E = new Map,
            k = function(e) {
                function t(e, n) {
                    i(this, t);
                    var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                    if (r.dataSource && r.dataSource.url) {
                        var a = function e() {
                            r.appendScript(r.dataSource.url), r.inputEls.forEach(function(t) {
                                return t.removeEventListener("focus", e)
                            })
                        };
                        r.inputEls.forEach(function(e) {
                            return e.addEventListener("focus", a)
                        })
                    }
                    return r
                }
                return a(t, e), w(t, [{
                    key: "appendScript",
                    value: function(e) {
                        if (e && !E.get(encodeURI(e))) {
                            var t = document.createElement("script"),
                                n = function() {
                                    t.parentNode.removeChild(t)
                                };
                            t.onload = function() {
                                t.onloadDone = !0, n()
                            }, t.onreadystatechange = function() {
                                ["complete", "loaded"].includes(t.readyState) && !t.onloadDone && n()
                            }, t.src = e, document.querySelector("head").appendChild(t), E.set(encodeURI(e), !0)
                        }
                    }
                }]), t
            }(b),
            _ = k,
            S = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            A = function(e) {
                function t() {
                    return l(this, t), s(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return c(t, e), S(t, [{
                    key: "getPrice",
                    value: function(e, n, r) {
                        var i = t.getDataSet((this.dataSource || {}).key);
                        if ((((i || {})[e] || {})[n] || {})[r]) {
                            var o = i[e][n][r];
                            if (Array.isArray(o)) {
                                var a = o.reduce(function(e, t) {
                                    return e + t
                                }, 0);
                                if (Number.isFinite(a)) return a / o.length
                            }
                            if (Number.isFinite(o)) return o
                        }
                        return null
                    }
                }], [{
                    key: "getDataSet",
                    value: function(e) {
                        return (DM.HousePriceCalculator.dataSets || {})[e]
                    }
                }]), t
            }(_);
        A.dataSets = {};
        var O = A,
            x = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            C = function(e) {
                function t() {
                    return d(this, t), f(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return p(t, e), x(t, [{
                    key: "getInflationRate",
                    value: function(e) {
                        var n = t.getDataSet((this.dataSource || {}).key);
                        return n && Number.isFinite(n[e]) ? n[e] : null
                    }
                }, {
                    key: "getCompoundedRate",
                    value: function(e, n) {
                        var r = t.getDataSet((this.dataSource || {}).key),
                            i = n || (new Date).getFullYear() - 1;
                        if (r[i] || i--, e === i) return 1;
                        if (!r || !Number.isFinite(r[e])) return null;
                        for (var o = u({}, i + 1, 1), a = i; a >= 1900; a -= 1) {
                            if (!Number.isFinite(r[a]) || !Number.isFinite(o[a + 1])) return null;
                            if (o[a] = o[a + 1] * (r[a] + 100) / 100, o[a] = Math.round(1e6 * o[a]) / 1e6, a === e + 1) return o[a]
                        }
                        return null
                    }
                }], [{
                    key: "getDataSet",
                    value: function(e) {
                        return (DM.InflationCalculator.dataSets || {})[e]
                    }
                }]), t
            }(_);
        C.dataSets = {};
        var P = C;
        n.d(t, "HousePriceCalculator", function() {
            return O
        }), n.d(t, "InflationCalculator", function() {
            return P
        }), n.d(t, "TimCalculator", function() {
            return b
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(138),
            i = (n.n(r), function(e, t) {
                var n = t.closest("h4"),
                    r = n.parentElement,
                    i = n.closest(".col"),
                    o = e.querySelector(".extend"),
                    a = e.querySelector(".open");
                o && o.classList.remove("extend"), a && a.classList.remove("open"), i.classList.add("extend"), r.classList.add("open")
            }),
            o = function(e) {
                Array.from(e.querySelectorAll(".open")).forEach(function(e) {
                    return e.classList.remove("open")
                }), e.querySelector(".start").classList.add("extend"), e.querySelector(".start").classList.remove("start"), e.querySelector(".first .up").classList.add("open")
            },
            a = function(e, t) {
                return Array.from(e.querySelectorAll("h4")).forEach(function(n) {
                    return n.parentElement.addEventListener("click", function(n) {
                        return t(e, n.target)
                    })
                })
            },
            l = function(e) {
                Array.from(e.querySelectorAll('input[type="radio"]')).forEach(function(e) {
                    return e.closest("form").addEventListener("submit", function(e) {
                        return e.preventDefault(), window.location = e.target.getAttribute("action"), !1
                    }, !0)
                }), Array.from(e.querySelectorAll('input[type="radio"]')).forEach(function(e) {
                    return e.addEventListener("click", function(e) {
                        var t = e.target.closest("form", 5);
                        t && e.target.value && (t.action = e.target.value)
                    }, !0)
                })
            },
            s = function(e) {
                var t = e.querySelectorAll("h4");
                setInterval(function() {
                    i(e, t[parseInt(Math.random() * t.length, 10)])
                }, 3e4)
            },
            c = function(e) {
                var t = document.getElementById(e);
                o(t), a(t, i), l(t), s(t)
            };
        t.a = c
    }, function(e, t) {}, , , , , , , , , , , , function(e, t, n) {
        var r, i;
        /*!
          Copyright (c) 2017 Jed Watson.
          Licensed under the MIT License (MIT), see
          http://jedwatson.github.io/classnames
        */
        ! function() {
            "use strict";

            function n() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var r = arguments[t];
                    if (r) {
                        var i = typeof r;
                        if ("string" === i || "number" === i) e.push(r);
                        else if (Array.isArray(r) && r.length) {
                            var a = n.apply(null, r);
                            a && e.push(a)
                        } else if ("object" === i)
                            for (var l in r) o.call(r, l) && r[l] && e.push(l)
                    }
                }
                return e.join(" ")
            }
            var o = {}.hasOwnProperty;
            void 0 !== e && e.exports ? (n.default = n, e.exports = n) : (r = [], void 0 !== (i = function() {
                return n
            }.apply(t, r)) && (e.exports = i))
        }()
    }, , , , , , , , , , , , , function(e, t, n) {
        "use strict";

        function r(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(i, o) {
                        try {
                            var a = t[i](o),
                                l = a.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!a.done) return Promise.resolve(l).then(function(e) {
                            r("next", e)
                        }, function(e) {
                            r("throw", e)
                        });
                        e(l)
                    }
                    return r("next")
                })
            }
        }

        function i(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(i, o) {
                        try {
                            var a = t[i](o),
                                l = a.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!a.done) return Promise.resolve(l).then(function(e) {
                            r("next", e)
                        }, function(e) {
                            r("throw", e)
                        });
                        e(l)
                    }
                    return r("next")
                })
            }
        }

        function o(e, t) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }

        function a(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(i, o) {
                        try {
                            var a = t[i](o),
                                l = a.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!a.done) return Promise.resolve(l).then(function(e) {
                            r("next", e)
                        }, function(e) {
                            r("throw", e)
                        });
                        e(l)
                    }
                    return r("next")
                })
            }
        }
        var l = {};
        n.d(l, "COOKIE_NAME", function() {
            return f
        }), n.d(l, "GEO_COOKIE_NAME", function() {
            return p
        }), n.d(l, "COOKIE_EXPIRES_DAYS", function() {
            return h
        }), n.d(l, "IMAGE_BASE_URL", function() {
            return m
        }), n.d(l, "DIALOG_DELAY", function() {
            return v
        }), n.d(l, "SHOW_WHOLE_HOME_PAGE_BUTTON", function() {
            return y
        });
        var s = {};
        n.d(s, "left", function() {
            return R
        }), n.d(s, "right", function() {
            return N
        }), n.d(s, "resume", function() {
            return q
        }), n.d(s, "reload", function() {
            return B
        }), n.d(s, "swipeleft", function() {
            return H
        }), n.d(s, "swiperight", function() {
            return U
        });
        var c = (n(164), n(3)),
            u = n(0),
            d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            f = "mol-home",
            p = "mol-home-default-channel",
            h = 30,
            m = "//i.dailymail.co.uk/i/furniture/mobilepreview/",
            v = 1e3,
            y = function() {
                return !!("undefined" != typeof DM && DM.platformConfig && DM.platformConfig.features && "object" === d(DM.platformConfig.features) && "showWholeHomePageButton" in DM.platformConfig.features) && DM.platformConfig.features.showWholeHomePageButton
            },
            g = n(19),
            b = n.n(g),
            w = n(7),
            E = n(4),
            k = n(165),
            _ = n(2),
            S = n(6),
            A = n.n(S),
            O = n(55),
            x = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                return new Date(e.getTime() + 864e5 * h)
            },
            C = function() {
                return A.a.get(f)
            },
            P = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Date,
                    n = x(t);
                Object(O.setCookieAndReinforce)(f, e, n), A.a.remove("mol-home-cleared-redirect")
            },
            T = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Date,
                    n = x(t);
                Object(O.setCookieAndReinforce)(p, e, n), A.a.remove("mol-home-cleared-redirect")
            },
            L = function() {
                var e = Object(_.getPageCriteria)(),
                    t = e.geo;
                switch (t) {
                    case "US":
                    case "CA":
                    case "AU":
                        t = t.toLowerCase();
                        break;
                    default:
                        t = "uk"
                }
                return t
            },
            I = function() {
                var e = L();
                return e = "ca" === e ? "us" : e, "" + m + e + location.pathname.split("/index.html")[0] + ".jpg"
            },
            j = function(e) {
                var t = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var i, o = e.querySelectorAll("[data-hp-tooltip-button]")[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                        var a = i.value;
                        ! function(t) {
                            var n = t.getAttribute("data-hp-tooltip-button"),
                                r = e.querySelector('[data-hp-tooltip="' + n + '"]');
                            t.addEventListener("click", function() {
                                e.setAttribute("data-showing-gdpr-tooltip", n)
                            }), r.querySelector("[data-close]").addEventListener("click", function() {
                                e.removeAttribute("data-showing-gdpr-tooltip")
                            })
                        }(a)
                    }
                } catch (e) {
                    n = !0, r = e
                } finally {
                    try {
                        !t && o.return && o.return()
                    } finally {
                        if (n) throw r
                    }
                }
            },
            M = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v,
                    n = arguments[2],
                    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    i = L(),
                    o = "ca" === i && n,
                    a = '\n    <div class="hp-shadow">\n      <div class="hp-dialog ' + (o ? " tall" : "") + " " + (r ? " gdpr-controls" : "") + '">\n        ' + (r ? '\n    <div class="hp-gdpr-explain">\n      <p class="hp-gdpr-heading">\n        DMG Media and its partners use cookies and other technologies to collect\n        user data <i class="hp-gdpr-tooltip-button" data-hp-tooltip-button="collection"><i></i></i><br />from your device, so that:\n      </p>\n      <ul>\n        <li>We can deliver content and advertising that\'s relevant to you <i class="hp-gdpr-tooltip-button" data-hp-tooltip-button="usage"><i></i></i></li>\n        <li>We give you the best experience</li>\n      </ul>\n      <p class="hp-gdpr-choose-option">Choose an option to agree:</p>\n      <div class="hp-gdpr-tooltip-content" data-hp-tooltip="collection">\n        <p>Types of data being accessed</p>\n        <ul>\n          <li><i>1</i> Unique identifiers for the device using the site</li>\n          <li><i>2</i> Browser information</li>\n          <li><i>3</i> IP address</li>\n          <li><i>4</i> Activities such as pages visited</li>\n          <li><i>5</i> Location of where the site is used</li>\n        </ul>\n        <button class="close" data-close></button>\n      </div>\n      <div class="hp-gdpr-tooltip-content" data-hp-tooltip="usage">\n        <p>Ways in which we use your data for advertising purposes</p>\n        <ul>\n          <li><i>1</i> Information storage and access</li>\n          <li><i>2</i> Personalisation</li>\n          <li><i>3</i> Ad selection, delivery, reporting</li>\n          <li><i>4</i> Content selection, delivery, reporting</li>\n          <li><i>5</i> Measurement</li>\n        </ul>\n        <button class="close" data-close></button>\n      </div>\n    </div>\n  ' : "") + '\n        <a href="#" class="hp-btn home cc" data-hp-action="left">MOBILE FRIENDLY<br>NEWS</a>\n        <a href="#" class="hp-btn tvshowbiz cc" data-hp-action="right">MOBILE FRIENDLY<br>SHOWBIZ</a>\n        ' + (o ? '\n    <a href="/home/index" class="hp-btn uk" data-hp-action="resume" data-hp-geo="uk">CLASSIC U.K. HOMEPAGE</a>\n    <a href="#" class="hp-btn us" data-hp-action="reload" data-hp-geo="us">CLASSIC U.S. HOMEPAGE</a>\n  ' : '<a href="#" class="hp-btn" data-hp-action="reload">CLASSIC HOMEPAGE</a>') + "\n        " + (r ? '\n    <a href="#" class="hp-gdpr-settings" data-hp-action="gdprSettings">Control how cookies are used, and see more info in our <u>Privacy Settings and Policy</u></a>\n  ' : "") + "\n      </div>\n    </div>\n  ";
                setTimeout(function() {
                    e.innerHTML += a, r && j(e)
                }, t), e.classList.add("hp-cover"), e.style.backgroundImage = "url(" + I() + ")", e.setAttribute("data-track-module", "hp-overlay^hp-overlay"), e.setAttribute("data-track-pos", "static"), e.setAttribute("data-cmp-no-consent", !0), E.pageEvents.publish(E.pageEvents.MOBILE_HOME_PAGE_OVERLAY, Object(_.getPageMetadata)()), r && E.pageEvents.publish(E.pageEvents.GDPR_MOBILE_HOME_DISPLAYED)
            },
            D = function() {
                document.querySelector(".hp-cover").remove()
            },
            R = function() {
                P("news"), D(), ue(), E.pageEvents.publish(E.pageEvents.MOBILE_HOME_PAGE_VIEW, Object(_.getPageMetadata)())
            },
            N = function() {
                P("showbiz"), D(), de(), E.pageEvents.publish(E.pageEvents.MOBILE_HOME_PAGE_VIEW, Object(_.getPageMetadata)())
            },
            q = function(e) {
                var t = document.querySelector(".hp-dialog") || document.body,
                    n = document.querySelector("meta[name=viewport]");
                P("desktop"), e && T(e), t.style.display = "none", n && n.setAttribute("content", "")
            },
            B = function(e) {
                q(e), location.reload(!0)
            },
            H = function() {
                de(), E.pageEvents.publish(E.pageEvents.MOBILE_HOME_PAGE_VIEW, Object(_.getPageMetadata)({
                    swipe: "showbiz"
                }))
            },
            U = function() {
                ue(), E.pageEvents.publish(E.pageEvents.MOBILE_HOME_PAGE_VIEW, Object(_.getPageMetadata)({
                    swipe: "news"
                }))
            },
            F = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v;
                setTimeout(function() {
                    document.body.innerHTML += '\n    <div class="hp-cover">\n      <div class="hp-shadow">\n        <div\n          data-track-module="hp-overlay^hp-overlay"\n          data-track-pos="static"\n          class="hp-dialog desktop">\n          <div class="close" data-hp-action="reload" data-hp-geo="us"></div>\n          <h3> Welcome to our U.S. Homepage</h3>\n          <a\n            class="hp-btn-desktop uk"\n            href="/home/index"\n            data-hp-action="resume"\n            data-hp-geo="uk">Go to U.K. homepage instead</a>\n          <a\n            href="#"\n            class="hp-btn-desktop us"\n            data-hp-action="reload"\n            data-hp-geo="us">Continue to U.S. homepage</a>\n      </div>\n    </div>\n  '
                }, e), E.pageEvents.publish(E.pageEvents.DESKTOP_HOME_PAGE_OVERLAY, Object(_.getPageMetadata)())
            },
            z = function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                var i = e.slice(),
                    o = document.createDocumentFragment(),
                    a = document.createElement("div");
                for (a.innerHTML = n.reduce(function(e, t) {
                        return e + t + i.shift()
                    }, i.shift()); a.childNodes[0];) o.appendChild(a.childNodes[0]);
                return o
            },
            V = z,
            W = n(24),
            G = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return new Promise(function(n) {
                    setTimeout(function() {
                        return n(e)
                    }, t)
                })
            },
            Y = this,
            X = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            K = function(e, t) {
                window.__cmp.a.push([e, null, t])
            },
            J = function(e) {
                return new Promise(function(t) {
                    K(e, t)
                })
            },
            Q = function() {
                return J("consentToAll")
            },
            Z = function() {
                return J("ready")
            },
            $ = function() {
                return J("openSettings")
            },
            ee = function() {
                return J("giveThanks")
            },
            te = function() {
                return J("hasChoiceBeenMade")
            },
            ne = function(e) {
                return K("onConsent", e)
            },
            re = function(e) {
                return K("onDissent", e)
            },
            ie = function() {
                return window.__cmp
            },
            oe = function() {
                var e = r(regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!ie()) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 3, Promise.race([Object(W.getConfig)("molFeHomeChannel/showGDPRControls"), G(null, 500)]);
                            case 3:
                                return t = e.sent, t = "object" === (void 0 === t ? "undefined" : X(t)) ? t : {
                                    enabled: !0
                                }, e.abrupt("return", Boolean(t.enabled));
                            case 8:
                                return e.abrupt("return", Promise.resolve(!1));
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }, e, Y)
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }(),
            ae = this,
            le = o(['\n    <div\n      class="hp-back"\n      data-track-module="hp-back^hp-back"\n      data-track-pos="static">\n      <a href="#" data-hp-action="reload">', " homepage</a>\n    </div>\n  "], ['\n    <div\n      class="hp-back"\n      data-track-module="hp-back^hp-back"\n      data-track-pos="static">\n      <a href="#" data-hp-action="reload">', " homepage</a>\n    </div>\n  "]),
            se = o(['<a href="#" class="hp-swipe"></a>'], ['<a href="#" class="hp-swipe"></a>']),
            ce = function() {
                var e = 0;
                return function(t, n, r) {
                    var i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        o = document.querySelector(".hp-swipe"),
                        a = document.querySelector(".scrollable-content"),
                        l = e;
                    l = w.scrollUtils.getScrollTop(a), t.classList.remove("hp-hidden"), n.classList.add("hp-hidden"), i && (w.scrollUtils.setScrollTop(a, e), e = l), o.setAttribute("data-hp-action", r), Object(k.revalidate)()
                }
            }(),
            ue = function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    t = document.querySelectorAll(".hp-panel");
                ce(t[0], t[1], "swipeleft", e)
            },
            de = function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    t = document.querySelectorAll(".hp-panel");
                ce(t[1], t[0], "swiperight", e)
            },
            fe = function() {
                var e = L(),
                    t = "us" === e ? "Classic" : "Whole",
                    n = V(le, t);
                document.querySelector("header").appendChild(n)
            },
            pe = function(e) {
                e.querySelector(".hp-gdpr-explain").remove(), e.querySelector(".hp-gdpr-settings").remove(), e.querySelector(".hp-dialog").classList.remove("gdpr-controls"), e.classList.remove("gdpr-settings-open")
            },
            he = function(e, t) {
                var n = !1;
                document.addEventListener("click", function() {
                    var r = i(regeneratorRuntime.mark(function r(i) {
                        var o, a, l, c, u;
                        return regeneratorRuntime.wrap(function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    if (o = i.target.hasAttribute("data-hp-action") ? i.target : i.target.closest("[data-hp-action]")) {
                                        r.next = 3;
                                        break
                                    }
                                    return r.abrupt("return");
                                case 3:
                                    if (a = o.getAttribute("data-hp-action"), l = o.getAttribute("data-hp-geo"), c = ["resume", "reload", "left", "right"], i.preventDefault(), "gdprSettings" !== a) {
                                        r.next = 17;
                                        break
                                    }
                                    return u = function() {
                                        n = !0, pe(t), ee()
                                    }, ne(u), re(u), E.pageEvents.publish(E.pageEvents.GDPR_MOBILE_HOME_SETTINGS), r.next = 14, $();
                                case 14:
                                    t.classList.add("gdpr-settings-open"), r.next = 22;
                                    break;
                                case 17:
                                    if (!e.showGDPRControls || n || !c.includes(a)) {
                                        r.next = 22;
                                        break
                                    }
                                    return E.pageEvents.publish(E.pageEvents.GDPR_MOBILE_HOME_ACCEPTED), r.next = 21, Q();
                                case 21:
                                    ee();
                                case 22:
                                    "gdprSettings" !== a && s[a] && s[a](l), "resume" === a && (window.location.href = o.getAttribute("href"));
                                case 24:
                                case "end":
                                    return r.stop()
                            }
                        }, r, ae)
                    }));
                    return function(e) {
                        return r.apply(this, arguments)
                    }
                }(), !1);
                var r = new b.a(document, {
                    stop_browser_behavior: !1,
                    swipe_velocity: .1
                });
                r.on("swipeleft", function(e) {
                    e.preventDefault(), H()
                }), r.on("swiperight", function(e) {
                    e.preventDefault(), U()
                })
            },
            me = function() {
                var e = V(se);
                document.body.appendChild(e)
            },
            ve = function(e) {
                var t = e.enableGeoChoice,
                    n = C();
                "ca" === L() && "desktop" !== n && t && (F(), he(e))
            },
            ye = function() {
                return /(\?|&)ito=taboola/.test(window.location.search)
            },
            ge = function(e, t) {
                if (navigator.cookieEnabled) {
                    var n = C();
                    "news" === n || "showbiz" === n ? document.body.classList.add("hp-start-" + n) : ye() ? document.body.classList.add("hp-start-showbiz") : M(t, e.DIALOG_DELAY, e.enableGeoChoice, e.showGDPRControls), e.SHOW_WHOLE_HOME_PAGE_BUTTON() && document.body.classList.add("hp-page")
                }
            },
            be = function(e, t) {
                var n = document.querySelector(".scrollable-content"),
                    r = document.querySelectorAll(".hp-panel");
                if (n && 2 === r.length) {
                    if (he(e, t), me(), navigator.cookieEnabled) {
                        var i = C();
                        switch (i) {
                            case "news":
                                ue(!1);
                                break;
                            case "showbiz":
                                de(!1)
                        }!i && ye() && de(!1), e.SHOW_WHOLE_HOME_PAGE_BUTTON() && fe()
                    } else ye() ? de(!1) : ue(!1);
                    document.body.classList.remove("hp-start-showbiz", "hp-start-news")
                }
            },
            we = function() {
                return fetch("/", {
                    credentials: "include",
                    headers: {
                        "Cache-Control": "no-cache",
                        Expires: new Date(0),
                        Pragma: "no-cache"
                    },
                    method: "GET",
                    redirect: "manual"
                })
            },
            Ee = we;
        n.d(t, "b", function() {
            return _e
        }), n.d(t, "a", function() {
            return Se
        });
        var ke = this,
            _e = {
                clearDomainRedirect: Ee
            },
            Se = {
                clearDomainRedirect: Ee
            };
        _e.init = function(e) {
            return function() {
                var e = a(regeneratorRuntime.mark(function e(t) {
                    var n, r, i;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n = Object.assign({}, l, t), r = n && n.id && document.querySelector("#" + n.id)) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return");
                            case 4:
                                return n.showGDPRControls = !1, e.next = 7, oe();
                            case 7:
                                if (!e.sent) {
                                    e.next = 14;
                                    break
                                }
                                return e.next = 10, Z();
                            case 10:
                                return e.next = 12, te();
                            case 12:
                                i = e.sent, i || (n.showGDPRControls = !0);
                            case 14:
                                return ge(n, r), e.next = 17, Object(c.later)("DOM_READY");
                            case 17:
                                be(n, r);
                            case 18:
                            case "end":
                                return e.stop()
                        }
                    }, e, ke)
                }));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()(e).catch(function(e) {
                u.logger.error("Error during mol-fe-home-channel Mobile initialisation: ", e)
            })
        }, Se.init = function(e) {
            return function() {
                var e = a(regeneratorRuntime.mark(function e(t) {
                    var n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = Object.assign({}, l, t), e.next = 3, Object(c.later)("DOM_READY");
                            case 3:
                                ve(n);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }, e, ke)
                }));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()(e).catch(function(e) {
                u.logger.error("Error during mol-fe-home-channel Desktop initialisation: ", e)
            })
        }
    }, function(e, t) {}, function(e, t) {
        e.exports = c
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.init = void 0, n(167);
        var r = n(168),
            i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r);
        t.init = i.default
    }, function(e, t) {}, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(i, o) {
                        try {
                            var a = t[i](o),
                                l = a.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!a.done) return Promise.resolve(l).then(function(e) {
                            r("next", e)
                        }, function(e) {
                            r("throw", e)
                        });
                        e(l)
                    }
                    return r("next")
                })
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(0),
            a = n(169),
            l = r(a),
            s = n(170),
            c = r(s),
            u = n(180),
            d = r(u),
            f = n(181),
            p = r(f),
            h = n(80),
            m = r(h),
            v = n(182),
            y = r(v),
            g = n(25),
            b = function(e) {
                var t = e.id,
                    n = document.getElementById(t);
                if (!n) return o.logger.error("No element found with id: " + t), null;
                n.style.display = "block";
                var r = window.location.hash && window.location.hash.slice(1) || "home",
                    a = new l.default(n.querySelector("." + (0, g.className)("nav"))),
                    s = new c.default(n.querySelector("." + (0, g.className)("content"))),
                    u = new d.default(s.ulElement, {
                        interval: 500
                    }),
                    f = new p.default(null, {
                        interval: 1800
                    });
                return a.on("channel-change", function() {
                    var e = i(regeneratorRuntime.mark(function e(t) {
                        var n, r;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.detail.channel, y.default.page = 0, u.disable(), f.disable(), s.enableLoadingBanner(), s.disableNewItemsBanner(), s.removeAllItems(), y.default.articles.reset(), e.next = 10, m.default.getByChannel(n, {
                                        page: y.default.page
                                    });
                                case 10:
                                    r = e.sent, s.addItems(y.default.articles.add(r)), s.disableLoadingBanner(), f.setChannel(n).setArticleId(r[0] && r[0].articleId).enable(), r.length >= 30 ? u.enable() : u.stop();
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()), u.on("scroll", i(regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return u.disable(), s.enableLoadingBanner(), e.next = 4, m.default.getByChannel(a.channel, {
                                    page: ++y.default.page
                                });
                            case 4:
                                t = e.sent, t.length >= 30 ? (s.addItems(y.default.articles.add(t)), u.enable()) : u.stop(), s.disableLoadingBanner();
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }, e, void 0)
                }))), f.on("found-new-items", function(e) {
                    var t = e.detail,
                        n = t.channel,
                        r = t.newItems;
                    y.default.newItems = [], a.activeChannel === n && (f.setArticleId(r[0] && r[0].articleId), y.default.newItems = r, s.enableNewItemsBanner({
                        channel: n,
                        count: r.length
                    }))
                }), s.on("new-items-banner-click", function() {
                    s.disableNewItemsBanner(), s.addItems(y.default.newItems, !0), y.default.page += Math.floor(y.default.newItems.length / 30), y.default.newItems = []
                }), a.setChannel(r), n
            };
        t.default = b
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
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
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            s = n(25),
            c = n(58),
            u = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(c),
            d = "data-" + (0, s.className)("active"),
            f = function(e) {
                if (!e) return null;
                var t = e.querySelector("a");
                return t && (t.getAttribute("href") || "").replace("#", "")
            },
            p = function(e) {
                function t() {
                    return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return a(t, e), l(t, [{
                    key: "_initElements",
                    value: function() {
                        var e = this;
                        this.tabsContainer = this.element.querySelector("ul"), this.navMoreElement = this.element.querySelector("." + (0, s.className)("nav-more")), this.navMoreButtonElement = this.navMoreElement && this.navMoreElement.querySelector("div"), this.navMoreTabsContainer = this.navMoreElement && this.navMoreElement.querySelector("ul"), (0, s.isMobile)() && (this.mobileDDElement = document.createElement("ul"), this.mobileDDElement.className = this.tabsContainer.className, this.mobileDDElement.appendChild(this.tabElements[0].cloneNode(!0)), this.element.replaceChild(this.mobileDDElement, this.tabsContainer), this.tabsContainer.setAttribute("data-extended", ""), this.navMoreTabElements.forEach(function(t) {
                            return e.tabsContainer.appendChild(t)
                        }), this.element.appendChild(this.tabsContainer))
                    }
                }, {
                    key: "_initEvents",
                    value: function() {
                        var e = this;
                        this.mobileDDElement && (this.mobileDDElement.addEventListener("click", function() {
                            e.mobileDDElement.hasAttribute("data-expanded") ? e.mobileDDElement.removeAttribute("data-expanded") : e.mobileDDElement.setAttribute("data-expanded", "")
                        }), this.on("channel-change", function(t) {
                            var n = t.detail.tabElement;
                            for (e.mobileDDElement.removeAttribute("data-expanded"); e.mobileDDElement.firstChild;) e.mobileDDElement.removeChild(e.mobileDDElement.firstChild);
                            e.mobileDDElement.appendChild(n.cloneNode(!0))
                        }));
                        for (var t = [].concat(r(this.tabElements), r(this.navMoreTabElements)), n = 0; n < t.length; n++) ! function() {
                            var r = t[n];
                            r.addEventListener("click", function() {
                                e.setChannelByTabElement(r)
                            })
                        }();
                        this.navMoreButtonElement && (this.navMoreButtonElement.addEventListener("click", function(t) {
                            var n = "block" === e.navMoreTabsContainer.style.display ? "none" : "block";
                            e.navMoreTabsContainer.style.display = n, t.stopPropagation()
                        }), document.body.addEventListener("click", function() {
                            e.navMoreTabsContainer.style.display = "none"
                        }))
                    }
                }, {
                    key: "setChannelByTabElement",
                    value: function(e) {
                        var t = f(e);
                        if (t && this.activeChannel !== t) {
                            this.channel = t;
                            var n = this.tabElements,
                                i = this.navMoreTabElements;
                            if ([].concat(r(n), r(i)).forEach(function(t) {
                                    var n = t.querySelector("span");
                                    t === e ? (t.setAttribute(d, ""), n.classList.remove("link-gr6ox"), n.classList.remove("linkro-ccox"), n.classList.add("link-wocc"), n.classList.add("linkro-wocc")) : (t.removeAttribute(d), n.classList.remove("link-wocc"), n.classList.remove("linkro-wocc"), n.classList.add("link-gr6ox"), n.classList.add("linkro-ccox"))
                                }), i.includes(e)) {
                                var o = n[n.length - 1];
                                this.tabsContainer.replaceChild(e, o), this.navMoreTabsContainer.appendChild(o)
                            }
                            this.activeChannel = t, this._emit("channel-change", {
                                channel: t,
                                tabElement: e
                            })
                        }
                    }
                }, {
                    key: "setChannel",
                    value: function(e) {
                        var t = [].concat(r(this.tabElements), r(this.navMoreTabElements)).find(function(t) {
                            return f(t) === e
                        });
                        t && this.setChannelByTabElement(t)
                    }
                }, {
                    key: "tabElements",
                    get: function() {
                        return [].concat(r(this.mobileDDElement ? this.tabsContainer.querySelectorAll("li") : this.element.parentElement.querySelectorAll("#" + this.element.id + " > ul > li"))).filter(function(e) {
                            return !/nav-more/.test(e.className)
                        })
                    }
                }, {
                    key: "navMoreTabElements",
                    get: function() {
                        return this.navMoreTabsContainer ? [].concat(r(this.navMoreTabsContainer.querySelectorAll("li"))) : []
                    }
                }]), t
            }(u.default);
        t.default = p
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function l(e, t) {
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
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            c = n(171),
            u = r(c),
            d = n(25),
            f = n(172),
            p = r(f),
            h = n(58),
            m = r(h),
            v = function(e) {
                return u.default.createElementFromTemplate(p.default[(0, d.isMobile)() ? "itemMobile" : "item"](e))
            },
            y = function(e) {
                return u.default.createElementFromTemplate(p.default.banner(e))
            },
            g = function(e) {
                function t() {
                    return o(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return l(t, e), s(t, [{
                    key: "_ulId",
                    value: function() {
                        return this.element.id + "-ul"
                    }
                }, {
                    key: "_initElements",
                    value: function() {
                        this.ulElement = document.createElement("ul"), this.ulElement.id = this._ulId(), this.loadingElement = y("Loading more articles..."), this.moreItemsElement = y(""), this.ulElement.appendChild(this.moreItemsElement), this.ulElement.appendChild(this.loadingElement), this.element.appendChild(this.ulElement)
                    }
                }, {
                    key: "_initEvents",
                    value: function() {
                        var e = this;
                        this.moreItemsElement.addEventListener("click", function() {
                            return e._emit("new-items-banner-click")
                        })
                    }
                }, {
                    key: "enableLoadingBanner",
                    value: function() {
                        this.loadingElement.style.display = "block"
                    }
                }, {
                    key: "disableLoadingBanner",
                    value: function() {
                        this.loadingElement.style.display = "none"
                    }
                }, {
                    key: "enableNewItemsBanner",
                    value: function(e) {
                        var t = e.count,
                            n = e.channel;
                        this.moreItemsElement.style.display = "block", this.moreItemsElement.innerHTML = p.default.newItemsMessage({
                            channel: n,
                            count: t
                        })
                    }
                }, {
                    key: "disableNewItemsBanner",
                    value: function() {
                        this.moreItemsElement.style.display = "none", this.moreItemsElement.innerHTML = ""
                    }
                }, {
                    key: "removeAllItems",
                    value: function() {
                        var e = this;
                        this.itemElements.forEach(function(t) {
                            e.ulElement.removeChild(t)
                        })
                    }
                }, {
                    key: "addItems",
                    value: function(e) {
                        var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        e.forEach(function(e) {
                            t.ulElement.insertBefore(v(e), n ? t.moreItemsElement.nextSibling : t.loadingElement)
                        })
                    }
                }, {
                    key: "itemElements",
                    get: function() {
                        return [].concat(i(this.element.querySelectorAll("#" + this._ulId() + " > [data-articleId]")))
                    }
                }]), t
            }(m.default);
        t.default = g
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            createElementFromTemplate: function(e) {
                var t = document.createElement("div");
                return t.innerHTML = e, t.children[0]
            }
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(173),
            o = r(i),
            a = n(174),
            l = r(a),
            s = n(178),
            c = r(s),
            u = n(179),
            d = r(u);
        t.default = {
            banner: o.default,
            item: l.default,
            itemMobile: c.default,
            newItemsMessage: d.default
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(25);
        t.default = function(e) {
            return '\n<li class="' + (0, r.className)("banner") + '">\n  <div>' + e + "</div>\n</li>\n"
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getSponsoredText = t.shouldShowComments = t.shouldShowVideo = t.COMMENTS_READONLY = t.COMMENTS_OPEN = void 0;
        var i = n(150),
            o = r(i),
            a = n(25),
            l = n(175),
            s = r(l),
            c = n(176),
            u = r(c),
            d = n(177),
            f = r(d),
            p = t.COMMENTS_OPEN = "W",
            h = t.COMMENTS_READONLY = "R",
            m = t.shouldShowVideo = function(e) {
                return e.videoCount > 0
            },
            v = t.shouldShowComments = function(e) {
                return e.readerComments === p || e.readerComments === h
            },
            y = t.getSponsoredText = function(e) {
                return e.sponsoredArticle && e.sponsoredByShortLabel && '<span class="sponsoredText">' + e.sponsoredByShortLabel + "</span> " || " "
            };
        t.default = function(e) {
            var t = v(e),
                n = m(e),
                r = y(e);
            return '\n<li class="' + (0, o.default)({
                sponsored: Boolean(r.trim())
            }) + '" data-articleId="' + e.articleId + '">\n  <div class="article ' + (0, a.className)("article") + '" data-followbutton="' + (e.followButton || "") + ' ">\n    <span class="social-headline" style="display:none">' + (e.socialHeadline || "") + '}</span>\n    <a href="' + e.articleUrl + '">\n      <img src="' + e.imageLinkListPuff + '" width="154" height="115">\n      <span class="social-headline">' + (e.socialHeadline || "") + '</span>\n    </a>\n    <div class="' + (0, a.className)("article-content") + '">\n      <h3 class="linkro-darkred">\n        <a class="title" href="' + e.articleUrl + '">' + (e.headline || "") + "</a>\n      </h3>\n      <p>" + r + (e.previewText || "") + '</p>\n    </div>\n    <div class="comments">\n      <div class="article-icon-links-container">\n        <ul class="article-icon-links refresh cleared">\n          ' + (t && '<li class="first">' + (0, s.default)(e) + "</li>" || "") + "\n          " + (n && '<li class="' + (0, o.default)({
                first: !t
            }) + '">' + (0, f.default)(e) + "</li>" || "") + '\n          <li class="gr3ox ' + (0, o.default)({
                first: !t && !n
            }) + '">' + (0, u.default)(e) + "</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</li>\n"
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            var t = e.articleId,
                n = e.articleUrl,
                r = e.readerCommentsCount;
            return '\n<a class="comments-link" href="' + n + '#comments" rel="nofollow">\n  <span class="icon"></span><span class="linktext">\n  <span class="readerCommentNo bold" rel="' + t + '">\n    ' + r + "</span> comment" + (1 === r ? "" : "s") + "\n  </span>\n</a>\n"
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return '\n<a class="' + e.shortUrl + '| js-sl share-link" data-article-image="' + e.articleImage + '" href="#">\n  <span class="icon"></span> <span class="linktext">\n  <span class="bold">' + e.shareCount + "</span> share" + (1 === e.shareCount ? "" : "s") + " </span>\n</a>\n"
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            var t = e.articleUrl,
                n = e.videoCount;
            return '\n<a class="videos-link" href="' + t + '#video" rel="nofollow">\n  <span class="icon"></span><span class="linktext">\n  <span class="bold">' + n + "</span> video" + (1 === n ? "" : "s") + "\n  </span>\n</a>\n"
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            var t = location.protocol + "//" + location.hostname + e.articleUrl;
            return '\n<li itemscope itemtype="//schema.org/ListItem" itemprop="itemListElement" class="article-preview article-preview-split" data-articleId="' + e.articleId + '">\n  <a itemprop="url" href="' + e.articleUrl + '">\n    <h2 class="headline">' + e.socialHeadline + '</h2>\n    <div class="article-preview-image">\n' + (e.articleImage ? '<img src="' + e.articleImage + '" alt="" width="154" height="115" class="b-loaded"/>' : '<img src="https://i.dailymail.co.uk/i/pix/m_logo_154x115px.png" alt="MailOnline logo" width="154" height="115" class="b-loaded"/>') + '\n      <div class="overlay-icon mobile-gallery">\n        <div class="mobile-gallery-icon"></div>\n        <span>+' + (e.mobileGalleryCount || 0) + '</span>\n      </div>\n    </div>\n    <div class="article-preview-description">\n      <h2 class="headline" style="display:none">' + e.socialHeadline + "</h2>\n      <p>" + e.largePreviewText + '</p>\n    </div>\n  </a>\n  <div class="social home-preview" data-location="home-preview">\n    <ul>\n      <li class="facebook">\n          <a data-preferred-shared-network-enabled href="//m.facebook.com/sharer.php?u=' + encodeURIComponent(t) + "&t=" + encodeURIComponent(e.socialHeadline) + '" rel="nofollow" target="_blank" class="facebook-dark">\n              <span class="wai">Facebook</span>\n          </a>\n      </li>\n      <li class="twitter">\n          <a data-preferred-shared-network-enabled href="https://twitter.com/intent/tweet?text=' + encodeURIComponent(e.socialHeadline) + "%20" + encodeURIComponent(e.shortUrl) + '%20via%20@MailOnline&related=MailOnline" rel="nofollow" target="_blank" class="twitter-dark">\n              <span class="wai">Twitter</span>\n          </a>\n      </li>\n      <li class="email" data-target="email-plain-text" style="display: none;">\n        <a rel="nofollow" href="">\n          <span class="wai">e-mail</span>\n        </a>\n      </li>\n      <li class="email" data-target="email-html" style="display: none;">\n        <a rel="nofollow" href="">\n          <span class="wai">e-mail</span>\n        </a>\n      </li>\n      <li class="email" data-target="email-default">\n        <a rel="nofollow" href="">\n          <span class="wai">e-mail</span>\n        </a>\n      </li>\n      <li class="whatsapp" data-text="' + encodeURIComponent(e.socialHeadline) + " " + t + '?ito=whatsapp_share_article-home-preview">\n        <a class="js-tl" rel="nofollow">\n          <span class="wai">WhatsApp</span>\n        </a>\n      </li>\n      <li class="flipboard">\n        <a href="https://share.flipboard.com/bookmarklet/popout?v=2&title=' + encodeURIComponent(e.socialHeadline) + "&url=" + encodeURIComponent(t) + '%3Fito%3Dflipboard_share_article-home-preview"\n           rel="nofollow" target="_blank">\n          <span class="wai">flipboard</span>\n        </a>\n      </li>\n      <li class="fbmessenger">\n        <a href="fb-messenger://share?app_id=146202712090395&link=' + encodeURIComponent(t) + "%3Fito%3Dfbmessenger_share_article-home-preview&redirect_uri=" + encodeURIComponent(t) + '%3Fito%3Dfbmessenger_share_article-home-preview"\n           rel="noopener" target="_blank" tabindex="-1">\n          <span class="wai">fbmessenger</span>\n        </a>\n      </li>\n      <li class="share-count">\n          <b>' + e.shareCount + '</b>\n          <span>shares</span>\n      </li>\n    </ul>\n    <div class="comments-count">\n      <a href="' + e.articleUrl + "#comments-" + e.articleId + '">\n        <em>' + e.readerCommentsCount + "</em>\n        comments\n      </a>\n    </div>\n  </div>\n</li>\n"
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            var t = e.count,
                n = e.channel;
            return "\n<div>\n  THERE " + (1 === t ? "IS" : "ARE") + (t < 30 ? " " + t : "") + " NEWER ARTICLE" + (1 === t ? "" : "S") + '\n  AVAILABLE - <a href="#' + n + '">Load</a>\n</div>\n'
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function i(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(i, o) {
                        try {
                            var a = t[i](o),
                                l = a.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!a.done) return Promise.resolve(l).then(function(e) {
                            r("next", e)
                        }, function(e) {
                            r("throw", e)
                        });
                        e(l)
                    }
                    return r("next")
                })
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function l(e, t) {
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
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            c = n(79),
            u = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(c),
            d = function(e) {
                function t(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = n.interval,
                        i = void 0 === r ? 500 : r;
                    return o(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, {
                        interval: i
                    }))
                }
                return l(t, e), s(t, [{
                    key: "_run",
                    value: function() {
                        function e() {
                            return t.apply(this, arguments)
                        }
                        var t = i(regeneratorRuntime.mark(function e() {
                            var t, n, i, o;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        for (t = [].concat(r(this.element.children)), n = t.pop(); n && !n.offsetHeight && t.length;) n = t.pop();
                                        if (n && n.offsetHeight) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 5:
                                        i = window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop, o = n.getBoundingClientRect().top, i > o - 1500 && this._emit("scroll");
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));
                        return e
                    }()
                }]), t
            }(u.default);
        t.default = d
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(i, o) {
                        try {
                            var a = t[i](o),
                                l = a.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!a.done) return Promise.resolve(l).then(function(e) {
                            r("next", e)
                        }, function(e) {
                            r("throw", e)
                        });
                        e(l)
                    }
                    return r("next")
                })
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function l(e, t) {
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
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            c = n(0),
            u = n(80),
            d = r(u),
            f = n(79),
            p = r(f),
            h = function(e) {
                function t(e, n) {
                    var r = n.interval,
                        i = void 0 === r ? 18e4 : r;
                    return o(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, {
                        interval: i
                    }))
                }
                return l(t, e), s(t, [{
                    key: "setChannel",
                    value: function(e) {
                        return this.channel = e, this
                    }
                }, {
                    key: "setArticleId",
                    value: function(e) {
                        return this.articleId = e, this
                    }
                }, {
                    key: "_run",
                    value: function() {
                        function e() {
                            return t.apply(this, arguments)
                        }
                        var t = i(regeneratorRuntime.mark(function e() {
                            var t, n, r, i, o, a, l, s;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.channel && this.articleId) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.prev = 2, e.next = 5, d.default.getByChannel(this.channel, {
                                            page: 0
                                        });
                                    case 5:
                                        t = e.sent, n = [], r = !0, i = !1, o = void 0, e.prev = 10, a = t[Symbol.iterator]();
                                    case 12:
                                        if (r = (l = a.next()).done) {
                                            e.next = 20;
                                            break
                                        }
                                        if (s = l.value, s.articleId !== this.articleId) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.abrupt("break", 20);
                                    case 16:
                                        n.push(s);
                                    case 17:
                                        r = !0, e.next = 12;
                                        break;
                                    case 20:
                                        e.next = 26;
                                        break;
                                    case 22:
                                        e.prev = 22, e.t0 = e.catch(10), i = !0, o = e.t0;
                                    case 26:
                                        e.prev = 26, e.prev = 27, !r && a.return && a.return();
                                    case 29:
                                        if (e.prev = 29, !i) {
                                            e.next = 32;
                                            break
                                        }
                                        throw o;
                                    case 32:
                                        return e.finish(29);
                                    case 33:
                                        return e.finish(26);
                                    case 34:
                                        n.length > 0 && this._emit("found-new-items", {
                                            channel: this.channel,
                                            newItems: n
                                        }), e.next = 40;
                                        break;
                                    case 37:
                                        e.prev = 37, e.t1 = e.catch(2), c.logger.error("Error checking for new headlines", e.t1);
                                    case 40:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this, [
                                [2, 37],
                                [10, 22, 26, 34],
                                [27, , 29, 33]
                            ])
                        }));
                        return e
                    }()
                }]), t
            }(p.default);
        t.default = h
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = new Set;
        t.default = {
            articles: {
                add: function(e) {
                    var t = [],
                        n = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, l = e[Symbol.iterator](); !(n = (a = l.next()).done); n = !0) {
                            var s = a.value,
                                c = s.articleId;
                            r.has(c) || (t.push(s), r.add(c))
                        }
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !n && l.return && l.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return t
                },
                reset: function() {
                    return r.clear()
                }
            },
            newItems: [],
            page: 0
        }
    }, , , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = {};
        n.d(r, "collapse", function() {
            return u
        }), n.d(r, "expand", function() {
            return d
        }), n.d(r, "getHeaders", function() {
            return s
        }), n.d(r, "getHeaderLink", function() {
            return c
        }), n.d(r, "init", function() {
            return h
        }), n.d(r, "isExpanded", function() {
            return p
        }), n.d(r, "destroy", function() {
            return m
        });
        var i = {};
        n.d(i, "functionDelayInMillisecs", function() {
            return g
        }), n.d(i, "getScrollingDuration", function() {
            return w
        }), n.d(i, "init", function() {
            return E
        }), n.d(i, "market", function() {
            return y
        }), n.d(i, "transitionsDurationInsecs", function() {
            return b
        });
        var o = {};
        n.d(o, "updateFavicon", function() {
            return V
        });
        var a = {};
        n.d(a, "init", function() {
            return oe
        });
        var l = (n(81), n(109), n(36), n(186), n(0)),
            s = function(e) {
                return e.querySelectorAll("[data-accordion-header]")
            },
            c = function(e) {
                return e.querySelector("[data-accordion-header-link]")
            },
            u = function(e) {
                return e.removeAttribute("data-accordion-expanded")
            },
            d = function(e) {
                return e.setAttribute("data-accordion-expanded", !0)
            },
            f = function(e) {
                return e.forEach(function(e) {
                    return u(e)
                })
            },
            p = function(e) {
                return e.hasAttribute("data-accordion-expanded")
            },
            h = function(e) {
                var t = document.querySelector(e);
                if (!t) return l.logger.error("No element found with selector " + e), !1;
                var n = s(t),
                    r = function(e) {
                        var t = e.header;
                        return function(e) {
                            e.preventDefault();
                            var r = p(t);
                            f(n), r ? u(t) : d(t)
                        }
                    };
                return n.forEach(function(e) {
                    e.onselectstart = function() {
                        return !1
                    };
                    var t = c(e),
                        n = r({
                            header: e
                        });
                    t.addEventListener("click", n), t.removeAllListeners = function() {
                        return t.removeEventListener("click", n)
                    }
                }), !0
            },
            m = function(e) {
                var t = document.querySelector(e);
                return t ? (s(t).forEach(function(e) {
                    var t = c(e);
                    t && t.removeAllListeners && t.removeAllListeners()
                }), !0) : (l.logger.error("Could not find " + e + " to destroy"), !1)
            },
            v = n(110),
            y = (n(187), "en-gb"),
            g = 6e3,
            b = 500,
            w = function(e, t) {
                return (e.offsetWidth - t.offsetWidth) / 60 * 1e3
            },
            E = function(e) {
                var t = document.querySelector(e);
                if (!t) return l.logger.error("No BreakingBanner found with selector " + e), !1;
                var n = t.querySelector("[data-breaking-banner-headlines]");
                if (!n) return l.logger.error("No headlines found for breaking banner with selector " + e), !1;
                var r = n.querySelector(".first"),
                    i = r.firstElementChild,
                    o = function(e) {
                        var t = e.propertyName,
                            n = e.currentTarget;
                        "opacity" === t && ("0" === n.style.opacity ? u() : f())
                    },
                    a = function(e) {
                        "left" === e.propertyName && c()
                    },
                    s = function() {
                        r.removeEventListener("transitionend", o, !1), r.addEventListener("transitionend", o, !1), r.style.opacity = 0, r.style.transition = "opacity " + b + "ms linear", setTimeout(function() {
                            r.style.opacity = 1
                        }, 0)
                    },
                    c = function() {
                        r.removeEventListener("transitionend", o, !1), r.addEventListener("transitionend", o, !1), r.style.transition = "opacity " + b + "ms linear", setTimeout(function() {
                            r.style.opacity = 0
                        }, 0)
                    },
                    u = function() {
                        r.classList.remove("first");
                        var e = r.nextElementSibling;
                        r = e || n.querySelector("div.b-item"), r.classList.add("first"), i = r.firstElementChild, i.removeEventListener("transitionend", a, !1), i.style.transition = "left 0s linear", setTimeout(function() {
                            i.style.left = "0px"
                        }, 0), s()
                    },
                    d = function() {
                        var e = w(i, n),
                            t = n.offsetWidth - i.offsetWidth;
                        i.removeEventListener("transitionend", a, !1), i.addEventListener("transitionend", a, !1), i.style.transition = "left " + e + "ms linear", setTimeout(function() {
                            i.style.left = t + "px"
                        }, 0)
                    },
                    f = function() {
                        n.offsetWidth - i.offsetWidth < 0 ? setTimeout(d, g / 4) : setTimeout(c, g)
                    };
                return f(), {
                    fadeInCurrent: s,
                    selectNextItem: u
                }
            },
            k = n(37),
            _ = n(112),
            S = n(17),
            A = n(3),
            O = n(2),
            x = n(188),
            C = n.n(x),
            P = n(189),
            T = n.n(P),
            L = n(190),
            I = n.n(L),
            j = n(191),
            M = n.n(j),
            D = /\/article-([0-9]+)\//,
            R = "mol-fe-favicon-new-content-indicator/articleIds",
            N = "thisismoney" === Object(O.getPageMetadata)().domain,
            q = function(e) {
                Array.from(document.head.querySelectorAll('link[rel="icon"]')).forEach(function(e) {
                    return e.remove()
                });
                var t = document.createElement("link");
                t.setAttribute("rel", "icon"), t.setAttribute("href", e), document.head.appendChild(t)
            },
            B = function() {
                return Array.from(document.querySelectorAll('.article h2 a[href*="/article-"]')).reduce(function(e, t) {
                    var n = t.href.match(D) || [],
                        r = n[1];
                    return r && (e[r] = !0), e
                }, {})
            },
            H = function() {
                return (window.sessionStorage.getItem(R) || "").split(",").reduce(function(e, t) {
                    return t && (e[t] = !0), e
                }, {})
            },
            U = function() {
                var e = B(),
                    t = H();
                return Object.keys(e).filter(function(e) {
                    return !t[e]
                })
            },
            F = function(e) {
                var t = H(),
                    n = Object.keys(t);
                e.forEach(function(e) {
                    t[e] || n.push(e)
                });
                var r = n.slice(-1e3).join(",");
                window.sessionStorage.setItem(R, r)
            },
            z = function() {
                var e = U();
                "visible" === document.visibilityState ? (q(N ? I.a : C.a), F(e)) : q(N ? e.length ? M.a : I.a : e.length ? T.a : C.a)
            },
            V = z;
        !Object(O.getPageCriteria)().isMobile && document.visibilityState && Object(A.later)("DOM_READY", function() {
            document.addEventListener("visibilitychange", function() {
                return V()
            }), V()
        });
        var W = n(122),
            G = n(38),
            Y = n(163),
            X = n(41),
            K = n(166),
            J = n(42),
            Q = n(53),
            Z = n(43),
            $ = n(124),
            ee = n(125),
            te = n(131),
            ne = n(35),
            re = function() {
                var e = document.querySelector(".dms-profile-confirm");
                e && e.remove()
            },
            ie = function(e, t, n) {
                var r = document.createElement("div");
                r.innerHTML = n;
                var i = r.children && r.children[0],
                    o = t.className.split("|")[0],
                    a = document.getElementById(o);
                i && a && a.submit && (i.style.display = "block", t.after(i), i.querySelector(".dms-profile-cancel").addEventListener("click", function(e) {
                    e.preventDefault(), re()
                }), i.querySelector(".dms-profile-remove").addEventListener("click", function(e) {
                    e.preventDefault(), a.submit()
                }))
            },
            oe = function(e) {
                var t = e.id,
                    n = e.params,
                    r = document.getElementById(t),
                    i = n.bubbleTpl || "{content}",
                    o = n.content || "Are you sure you want to remove this social account?",
                    a = i.replace(/{content}/g, o);
                r && r.addEventListener("click", function(e) {
                    e.preventDefault();
                    var t = e.target.closest(".dms-profile-delete");
                    t && ie(0, t, a)
                })
            },
            ae = n(133),
            le = n(136),
            se = n(44),
            ce = n(137),
            ue = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            de = ue({}, v, X, ee, ae, le, {
                EditSocial: a,
                HomePage: Y.a,
                molFeAccordion: r,
                molFeBreakingBanner: i,
                molFeBrowserNotifications: k,
                molFeCarousel: _.default,
                molFeDotDotDot: S,
                molFeFaviconNewContentIndicator: o,
                molFeFloatingButtons: W,
                molFeGenericModal: G,
                molFeLatestHeadlines: K,
                molFeLazyLoadContent: J,
                molFePageRefresh: Z,
                molFePolls: Q.a,
                molFeRemovePuffWhitespace: $,
                molFeSocial: te,
                molFeVideoPreview: se,
                ShareLinks: ne,
                timAccordion: ce.a
            });
        window.DMChannelDefer = Object.assign(window.DMChannelDefer || {}, de), window.DMDefer = Object.assign(window.DMDefer || {}, de), window.DM = Object.assign(window.DM || {}, de), Object.keys(de).forEach(function(e) {
            return A.later.go(e + "_LOADED")
        }), A.later.go("CHANNEL_DEFER_BUNDLE_LOADED")
    }, function(e, t) {}, function(e, t) {}, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAhFBMVEUATbP///9wm9RgkNDx9vuQst7Q3/H9/v7n7vjr8fne6PWeu+JRhswGUbX1+Py5z+uZuOGIrNxrl9NZi84gY70UXLkPWLgLVbfi6/e/0uylwOR5otd0ntZkk9Fej89Ng8pKgclCe8c5dcQubcEaX7vU4fPJ2e+uxuerxOZllNE4dMQjZb1cfj1gAAAAx0lEQVQ4y+2RWQ6CMBRFXwGZSpllHgXn/e/PDiYtmka/jfeDE949adMWfip7/i27jrAfXAXbuogdTBWzQsjPIPMQQvWi9KNLJ1ZiIx5XwOml0IgRjjks48K5A5nMYhMDDh4TTBhfBbgKAWwhwJtgfimsPkWYBLNOqJFIqhHSZx/ptghFb606Ic+PrB8+nSLQCeZWiFXBUG7SORMuuIXSO4ilx4J2bnNIgaTsCb0BlogybMlETf8GSsrWTfiS8ym6U0x+U8I/Mg8YVgkHlIAo3wAAAABJRU5ErkJggg=="
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA/1BMVEUAAAD/ADf/ADb/ADX/ADX/ADX/ADX/ADf/ADj/ADj/AE3/ADb/ADb/ADb/ADX/ADb/ADb/ADX/ADn/ADkKULD/ADX////8/P6MrdoTVrPp7/imwONjj81gjcxPgcby9vrl7PfM2u5di8tYiMlXh8n3+fyfu+B7oNQ2b74ybL39ADfz9vvx9frr8fnY4/K5zemUstyJq9lqlc8/dsEsaLsVWLRiM4SEKHP+JlT/DD//+/zh6fXR3vCxx+X/1+CVs9yEp9d1nNL5s8NEecI8dMAlY7ggX7f/mK4sVKsdSaf/h6CaYZo1QZpKOo/QRnj/UXaXIWmqG1/EE1PuGk70Azr1z2zLAAAAFHRSTlMATN3683rlWzspCtXCrqeXZ0MtKD9YghEAAAEkSURBVDjLvZLZUsIwFEBbKOK+3qS2pQWrdAGUXcF933f9/2+Rm3SGJqk6vHBe7qQ5c7dGgz/QkGkJfWBYFg+xJNwGptMD6AYNO7TAurDpSZwWwjKl1HT2KGKfVSg73owF74ginU4VQ6N1TJHNVAnLwS8liGxM4YFnSgLscAG2RmHXAyhPLGyj4EKM/VWD0K9nZnD7OAcq0S8ZHH5/+PQxGA4Hry+K0G5jicsvkvD5LJbwWZOPZMy3LmRgwh1Jk59NhBIfs1c5rRGBmXkm+CZbv3tefyMSBZ7hqjkSmtdwX5OFHApI1OoCwD5RmBNe1IEq6ILwrgrFiTL838NDxhQiS+oeRDbyyiYlVuV/oVBI3Ru6loGeIwmL61o2xeWcYSysrPHTD9agTvV5M4PWAAAAAElFTkSuQmCC"
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABQ1JREFUaAXtGG1MW1X0tGWhn9BhIc7A2MwYcyFGjEKmi4uQuMEEXKaJ/piaRcfcEheN/lEzjf5zxi82qUucmdHExIQM+ahziIQ42UZwgUgEAxlrVCbQ8fnKd/Gd2976+u69rw9b05H0/Og775xzzz1f99zzanjcun8F1jAY17DtxPSkA4nOYDIDyQzEGIFkCcUYwJiXJzMQcwhjVJASbb3Zbga70y4UW1lZAd+fPiE/GsN5uxNSUsRmLMwvwNTolFCNeGVoycMHSuDgeweFCpDxVtmb0NveqynDY7qyXXCy9xSYUkw8NqH1tPbAOxVvC/lRz0D/pT7wuD0w6h0VKnns5X1Cnhaj7Ei50PjBXwag7kQdtJy5oKUCDHqnUYvDArX9brCl27gKX93xCgz1DHF5PCKWpvv3T7n6pn3T8Pydz8Hy0jJvaQQtagao9Oz0LHh7vfSVeVa9VMXQtAilz5Ryjcc1N4dv6jIeZXU7QIRNYvEd+x+AzI2ZKBYVjEYjlB/dS+TQWDVgtvWC2CKOBmtIcfvX7QzXZDJBxbFKhs4jFFUWQVZuFszOzELzqSZGRFSmjKBMWJ0DzmD9dzZcgYGuAUZfydMl4LjNwdDVhEdfrCCk1rOtMHKdbQ6WNAsYDAb1Mu776hxIsxIl0qQE9e+fYxSmWlOh7HA5Q1cSttyXB/nF+RAIBKD5kyaQJmaUbIJjiaETekC3A0SpPahUmvDD5frLMDw4zOyxp3oPoCMiqDwWjH5nYyeMDI3IDkhcUa3LU7lAtwPW9GD0cbF/SgK8gRs+alDqIjiWUOmzpQwdCa4cFxRVFRNeY00jeYocsK3nt2uySPHz3xyY9BMVbV/+CJMjkwp1QRRr3MjpWHvlzoOHHS+pvp9/I8JYjjzQe5BX4cC/EaFRW5xfhOZatotk5mTCg0/sjLALW2OJ3PsRaPQRp7oQV4It1DCUNB6u2wFbqITm/fMRl8z50+dhTppjdKsvNjTeKjcB318+6KjrCMsHlgOAl6Qa4u4Abo6gTjlGsOXzFvX+kFuQC4W7CwkdGwCWD4Kn1hMRAKSpdSLNpjEBI5+C/gyEUspLeZN8IHlzCx3yiuWDi7c0Zoo3nEnjbCu1x7uEaAb8U8EDTCOAz7E/xuDiNz8pSQTfvnM75N2fB/TiavuqjVvzUqgpKBVY4+0ArUm/oG/Xf/itcv8wfsR9FLYWbSVtt+lksHWGmSGEd5n9bxng1Sva4f31Olz9/qraNsjelk1oXZ4uuDF4g+EjgVeWcT8D1tB3AC/d1Kr6D9jxgvIaa9hLj/JmOFmlGacyoqfuQ0yHtLkZtmVS5fhZyRvyrnVf0/zk5OmMuwPOrHRiJ6/bUAfwyRvyRLVP1y0tLFI0/ExzpYVxLURXBnA42yj3dYScu4I1LVKqHvLGh8flDnVRJE7oGXdkMHxHhgM2bNnA0NWEqA5g6Rz6+BCkWoITZuHue8mlJJo41UPed6c9sLS4pN43/F6wqwAeempX+F2JVNdUw6a7N2l+Gwg/6vGvjs+8Z4TfrTjP93f0wfFHjiv3JPi61HVQ2+cGs8MML+QfBvxIV8LmezbD6+feALPNrDl60zVYtieefBewk6lB+L8QRpK3QKlgTPBXCw55X7x2Fuzr7YzxuN4vX1zdP3QrVUXFJ/6e4MoIM8CVvgWJUc/ALWhzhElJByLCkYCXZAYSEPSILZMZiAhHAl6SGUhA0CO2XPMZ+Aeg8pPZe+vGbQAAAABJRU5ErkJggg=="
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABddJREFUaAXtWXtMU1cY/90+gNIKgg8cYXOb0ygJCczFiJIYNL5WVOSxJVvUbCwuE2d007j4z7ItmuEWUBMXsv+WTWUKncwg+4cBDhfneGRsQedg6hhMHgKTFpG23J1zb2/p7b1tb+ltFxO+BM453/lev3O+87plCmLzWTwGVDlWxciFqZFjPk68GQD/92zNzMDMDIQ4AjMpFOIAhqyu82ehqLQIm97cLCsyOTmJA8v3o/dWr2y/L+bR+mNYsmKJr268/tRrGL0/6rPfu8NvCjV81YBzH5zF8D/D3nrQaDTIO5Qv4ftjpGalygb/YPABKj6qwKmiU3j44KE/E5I+vwC6WrtgOW5B+dvlEkXKyHo5C0nPJMn2yTFz390ux0b9l/Wo+rgSP1RcgcPukJXxxfQLQFAauSedAdqn1Wqx/WCeIOa3XJi2EBkbMkBTz5scE8EF7amvCEB0bDSn03OrRzJCa15dg7kpcz1tytZz38nl+A1ktL3JEGfwZiluKwJgnG3iDP712100nmkUGdfpdcg9KJ8aguD8p+cjM38VtzirT1QLbHdpmm1014OtKATAO7CN2PDNpxY4nU6Rn7U71yJhQYKI59nYun8bl2615bUY6hny7OLqpoRZEp5ShjIA8bGcPSsB0He7D1fPN4ns66P12Hpgm4gnNOLmxSF7RzYejT1CbflljNvGJWloTAj7DPApNPavjYvL8okFLCt+B60vWg8arDeZ95gRFROFui/qYB2yct22Yd6OIGtK4O0L7WBKZTPgylGry3HP7z24dvGayE+0IRpb9m0V8WJMMdi4exOcDicunfzW3Wcd4YEIDJNrjQntYEq/J7FgyOhKIWEGKN9yvAqZ2zMFEa7cuHsjqssuukd6wxsbYCTgr5xrxGD3ICdjYp3QnrkM3LwFdHUDvf2IGxzG53ZgSKNDH6NHq9aEFq0RVkYrsi/XUAbANcWeI3en/Q5aLjdj+YsvuO0aTAaYi3PwNTlV6e5k3pvD9VWXVWPBpB2v2AewwjkK7Yen3Dq0Qh+7dAtImHRgEcaxisjQbeK6dhbO6ufhnkZPWvKkLIXiXbuQV+5WllRJrG5+azNi42JBz4fEJxLRdulnZLc1o2z8NjJp8BINeQaVo/JUb9dEP1gURslJKgTA70I21yIWDHU2/4H279uFJlcaCVjzXjPo1omBYSTuPIQcxzB0JITpENWj+sCNOhYZ87xtKAPgSiF6DnhTVUmlNwv57xUgebYBE+mFWDhyX9I/TUYW4LjmDUIZACGFZAB0NHXgxtUOUUxaJxntvP2I6u0T8UNvsM8CdotnOgUEQBejYRYZzfEJbjuUC0KyFg6XAk2tcqJq8MhM3CwRDAUEED8/npN12sXXB8EALdvrfkFnSyfP6iRb4+kKz+5w1ItZPP8cNRwQQFp2GhcAnYXkxck+g6H3eY6OnCSzTDb1sBJL9lX7MeqC8fVtdHXBaqQsTUHOvi2IMcZw4dCXWc1nNfj7RjdaalskIZZ+9z6ezN4BctuT9KnPYIgTQ5JPABds0t1FCKL/bj+KU/cITXdZlJ6ETT9ecbfDX9Hs8nkSFxoLgvYf91Nb0DqhKbDmgGsgGAdJbLhzXxLNIlUBJJK7TGSJTVYVgAmRBoA5qgKwkhtPhOm+qgDofT6yxPSqCoA+RiJMXaoCoC+pyBJToyoA+gyMxBnMDxI9iWNqZH+6DGUUWaSdB9jCUGwo02UuMPj1JVVngHesP0KuWGE+0ah96kfBbVTZaExJMWil9+rTU5yw1E67/AS+Tk/P/dLDRK9peroBtYhdzj4nqPoaENzzb1cH+fpFn4FqEfMnoFvJoG1AsBiGNcCb5p3oVpKWWjNB7IiDp57CBoAa50EsW0dqJ6a/sOmCpfrL1nmOPLVPKWwpxJuf+s8ifTF5qh0lHPKTDqvg+xbd52Ghu42wYKesTdUiBkBwyWLFHGDcTECQP/IlESx9aBMeyAckhv7k2UXKGv6Quh7wo9J/JCC2u4cPYRAAAAAASUVORK5CYII="
    }])
});
//# sourceMappingURL=channelDefer.js.map