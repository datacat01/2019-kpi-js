webpackJsonp([3], {
    21: function(e, t, o) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(t) {
                var o = void 0,
                    n = void 0,
                    i = void 0,
                    a = void 0,
                    s = void 0,
                    l = void 0,
                    r = void 0,
                    c = !1,
                    d = 0,
                    u = 0,
                    p = !1,
                    h = void 0,
                    m = void 0,
                    f = void 0,
                    g = void 0,
                    v = void 0,
                    b = void 0,
                    w = {
                        floatSensitive: !0,
                        dockedSensitive: !0,
                        toggleDisabled: !1
                    };
                return {
                    init: function() {
                        var e = this;
                        console.log("megaphone init"), s = t.getGlobal("jQuery"), o = s(t.getElement()), r = t.getConfig();
                        var i = t.getGlobalConfig("debug");
                        n = t.getGlobalConfig("req");
                        var c = {
                            token: n.user.token,
                            referer: location.host,
                            debug: i,
                            signIn: function(e) {
                                window.location = s("#megaphone-auth").attr("href")
                            }
                        };
                        this.onTouchStart = this.onTouchStart.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this), this.update = this.update.bind(this), this.initRooms(), l = s.extend({}, c, r), window.location.pathname.match(/\/games/) && (this.showChat(), o.find(".megaphone__input").focus(), w.toggleDisabled = !0), a = s(".js-megaphone-show"), a.on("click", function(t) {
                            e.showChat(), o.find(".megaphone__input").focus()
                        }), l.theme && o.addClass("theme-" + l.theme), this.checkAutoOpen()
                    },
                    checkAutoOpen: function() {
                        if (this._checkSessionStorage && "1" === sessionStorage.getItem("megaphoneBetaOpen")) {
                            this.showChat();
                            var t = r.mnid || "megaphone";
                            e.poll(function(e) {
                                return window.bN
                            }, 8e3, 1e3).then(function(e) {
                                bN.ping("megaphone_auto_open", [
                                    ["mnid", t, 1],
                                    ["lnid", "megaphone_auto_open", 1]
                                ])
                            })
                        }
                    },
                    initHtml: function() {
                        h = s('<button class="megaphone__icon megaphone__icon--collapse" data-beacon=\'{"p":{"lnid":"megaphone_collapse"}}\'></button>'), m = s('<button class="megaphone__icon megaphone__icon--expand" data-beacon=\'{"p":{"lnid":"megaphone_expand"}}\'></button>'), f = s('<button class="megaphone__hide megaphone__icon megaphone__icon--x" data-beacon=\'{"p":{"lnid":"megaphone_close"}}\'></button>'), g = s(".megaphone__minimizex"), v = s(".megaphone__underlay"), i.find(".megaphone__header").prepend(h).prepend(m), i.append(f)
                    },
                    addEventListeners: function() {
                        var t = this;
                        f.on("click", this.hideChat.bind(this)), m.on("click", function(e) {
                            t.expandChat()
                        }), h.on("click", function(e) {
                            t.collapseChat()
                        }), g.on("click", function(e) {
                            t.collapseChat()
                        }), v.on("click", function(e) {
                            t.collapseChat()
                        }), o.on("touchstart", this.onTouchStart), o.on("touchmove", this.onTouchMove), o.on("touchend", this.onTouchEnd), n.user.token ? o.megaphone("authenticate", n.user.token) : s(document).on("auth:login", function(e) {
                            o.megaphone("authenticate", e.obj.token)
                        }).on("auth:logout", function(e) {}), s(document).on("navbar:resize", function(e) {}), s(window).on("resize", function() {
                            t.resizeChat()
                        });
                        var i = this;
                        s(window).on("scroll", e.debounce(function() {
                            setTimeout(function() {
                                i.toggleVideoState()
                            }, 1e3)
                        }.bind(i), 100))
                    },
                    onTouchStart: function(e) {
                        o.hasClass("megaphone__elem--visible") && (d = e.originalEvent.touches[0].pageX, u = d, p = !0, requestAnimationFrame(this.update))
                    },
                    onTouchMove: function(e) {
                        if (p) {
                            u = e.originalEvent.touches[0].pageX;
                            Math.max(0, u - d) > 100 && e.preventDefault()
                        }
                    },
                    onTouchEnd: function(e) {
                        if (p) {
                            p = !1;
                            var t = Math.max(0, u - d);
                            i[0].style.transform = "", t > 100 && this.hideChat()
                        }
                    },
                    update: function() {
                        if (p) {
                            requestAnimationFrame(this.update);
                            var e = Math.max(0, u - d);
                            i[0].style.transform = "translateX(" + e + "px)"
                        }
                    },
                    collapseChat: function() {
                        var e = this,
                            t = i[0].getBoundingClientRect();
                        o.removeClass("megaphone__elem--popout");
                        var n = i[0].getBoundingClientRect(),
                            a = t.right - n.right;
                        i[0].style.transform = "translateX(" + a + "px)", requestAnimationFrame(function() {
                            o.addClass("megaphone__elem--animatable"), i[0].style.transform = ""
                        }), i.on("transitionend", function(t) {
                            e.onTransitionEnd(), o.removeClass("megaphone_expanded"), e.resizeChat()
                        })
                    },
                    expandChat: function() {
                        var e = this,
                            t = i[0].getBoundingClientRect();
                        o.addClass("megaphone__elem--popout");
                        var n = i[0].getBoundingClientRect(),
                            a = t.right - n.right;
                        i[0].style.transform = "translateX(" + a + "px)", requestAnimationFrame(function() {
                            o.addClass("megaphone__elem--animatable"), i[0].style.transform = ""
                        }), i.on("transitionend", function(t) {
                            e.onTransitionEnd(), o.addClass("megaphone_expanded"), e.resizeChat()
                        }), o.css("z-index", 9999999)
                    },
                    blockClicks: function(e) {},
                    onTransitionEnd: function(e) {
                        o.removeClass("megaphone__elem--animatable"), o.off("transitionend", this.onTransitionEnd), i.off("transitionend", this.onTransitionEnd)
                    },
                    showChat: function() {
                        c || (b = l.room, o.megaphone(l), i = o.find(".megaphone__wrapper"), this.initHtml(), this.addEventListeners(), c = !0), o.addClass("megaphone__elem--animatable"), o.addClass("megaphone__elem--visible"), o.on("transitionend", this.onTransitionEnd), this._checkSessionStorage && sessionStorage.setItem("megaphoneBetaOpen", 1), this.resizeChat(), this.toggleVideoState()
                    },
                    hideChat: function() {
                        o.addClass("megaphone__elem--animatable"), o.removeClass("megaphone__elem--visible"), o.removeClass("megaphone__elem--popout"), o.on("transitionend", this.onTransitionEnd), this._checkSessionStorage && sessionStorage.setItem("megaphoneBetaOpen", 0), t.broadcast("video:restart", !1)
                    },
                    toggleVideoState: function() {
                        w.toggleDisabled || (o.hasClass("megaphone__elem--visible") && t.broadcast("video:pause", w.floatSensitive), t.broadcast("video:restart", w.floatSensitive))
                    },
                    resizeChat: function() {
                        var e = o.megaphone("checkScroll"),
                            t = s(".l-navbar").height(),
                            n = 0;
                        if (i.css("height", "calc(100% - " + t + "px)"), e) {
                            var a = setInterval(function() {
                                o.megaphone("scrollBottom"), n > 50 && window.clearInterval(a), n++
                            }, 1);
                            this.toggleVideoState()
                        }
                        var l = s(window).width(),
                            r = s(window).height(),
                            c = r - t,
                            d = c - 0,
                            u = s(".mlid-topad .m-ad__banner"),
                            p = u.height(),
                            h = 300;
                        if (h = l > 1265 ? s(".page-article").length ? Math.ceil((l - s(".l-wrapper").outerWidth()) / 2) + 217 + 50 : Math.ceil((l - s(".l-wrapper").outerWidth()) / 2) + 217 + 50 + 66 : l < 480 ? 300 : l < 900 && s(".page-article").length ? 350 : 360, p > 0) {
                            var m = p + u.offset().top - t - 20;
                            s(window).scrollTop() < m && (c -= m - s(window).scrollTop() + 10, d -= m - s(window).scrollTop() + 10), d += 0, s("#megaphone_ad").remove()
                        }
                        o.hasClass("megaphone_expanded") && (h = l < 900 ? l : 500), i.css({
                            "max-width": h
                        })
                    },
                    _checkSessionStorage: function() {
                        return window.sessionStorage
                    },
                    _chatOpen: function() {
                        return o.hasClass("megaphone__elem--visible")
                    },
                    _chatPopped: function() {
                        return o.hasClass("megaphone__elem--popout")
                    },
                    onmessage: {
                        "auth:login": function(e) {},
                        "auth:logout": function() {},
                        "navbar:stuck": function(e) {
                            var t = this;
                            this._chatOpen() && !this._chatPopped() && setTimeout(function(e) {
                                t.resizeChat()
                            }, 250)
                        },
                        "navbar:unstuck": function(e) {
                            var t = this;
                            this._chatOpen() && !this._chatPopped() && setTimeout(function(e) {
                                t.resizeChat()
                            }, 250)
                        }
                    },
                    destroy: function() {
                        o = null, i = null, a = null, d = null, u = null, p = null, h = null, m = null, f = null
                    },
                    initRooms: function() {
                        var e = this;
                        o.on("megaphone.initialized", function() {
                            if (s(".megaphone-room__wrapper").length) {
                                var t = s(".megaphone-room__wrapper").detach().removeClass("hidden");
                                o.find(".megaphone__header").html(t), e.applyRoomsBindings(), setInterval(function() {
                                    e.refreshRoomCounts()
                                }, 5e3)
                            }
                        })
                    },
                    applyRoomsBindings: function() {
                        s(".megaphone-room__select").off("change").on("change", function() {
                            var e = s(this).find(":selected");
                            o.trigger("megaphone.changeChannel", {
                                source: b,
                                destination: e.data("id")
                            }), b = e.data("id"), e.text(e.text().replace(/(?:\([0-9]+\))/g, ""))
                        })
                    },
                    refreshRoomCounts: function() {
                        var e = GAMES && GAMES.gameInfo && GAMES.gameInfo.id ? GAMES.gameInfo.id + "-" : "";
                        s.ajax({
                            url: "/api/modules/megaphone-rooms.json?prefix=" + e,
                            json: !0,
                            method: "POST",
                            success: function(t) {
                                s.each(t, function(t, o) {
                                    var n = s(".megaphone-room__select").find('option[data-id="' + e + o.id + '"]:not(:selected)');
                                    n.text() != o.displayName + "(" + o.activeUsers + ")" && n.text(o.displayName + "(" + o.activeUsers + ")")
                                })
                            }
                        })
                    }
                }
            }
        }).call(t, o(3))
    },
    23: function(e, t, o) {
        "use strict";
        (function(n, i) {
            var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                s = o(2);
            t = e.exports = function(e, t, o) {
                return {
                    config: {
                        container: n(".m-prestitial"),
                        isOverlay: n(".m-prestitial").hasClass("isOverlay"),
                        dl_elements: ".dl__wrapper .slick-prev,.dl__wrapper .slick-next,.dl__wrapper .dl__slide a,.dl__wrapper .dl__caption-copy,.dl__wrapperr .dl__caption-title a,.dl__wrapper .dl__linkline",
                        isArticle: n(".article-content").length,
                        articleAnchors: [],
                        overlayShown: !1,
                        testAppStoreUrl: "https://go.onelink.me/eG2g?pid=Acquisition&c=US_Internal_YMktg_AOLAppInterstitial_AOLdotcom_US&af_wl=ym&af_sub1=Internal&af_sub2=US_YMktg&af_sub3=AppMonthly",
                        controlAppStoreUrl: "https://go.onelink.me/eG2g?pid=Acquisition&c=US_Internal_YMktg_AOLAppInterstitial_AOLdotcom_US&af_wl=ym&af_sub1=Internal&af_sub2=US_YMktg&af_sub3=Appgeneric",
                        openAppUrl: {
                            isAndroidMobile: "intent:#Intent;action=com.aol.mobile.aolapp.launchfrombrowser;category=android.intent.category.DEFAULT;category=android.intent.category.BROWSABLE;package=com.aol.mobile.aolapp;end;",
                            isIosMobile: "com.aol.mobile.aolclient://app/",
                            isAndroidTablet: "intent:#Intent;action=com.aol.mobile.aolapp.launchfrombrowser;category=android.intent.category.DEFAULT;category=android.intent.category.BROWSABLE;package=com.aol.mobile.aolapp;end;",
                            isIosTablet: "com.aol.mobile.aolclient://app/"
                        },
                        installBtn: n(".m-prestitial .install-btn")[0],
                        closeBtn: n(".m-prestitial .m-close")[0]
                    },
                    init: function(e) {
                        e && "object" == (void 0 === e ? "undefined" : a(e)) && n.extend(this.config, e), this.config.container.length && this.applyBindings(), this.initialized = !0
                    },
                    applyBindings: function() {
                        var t = this;
                        e.mediator.on("prestitial:show", function() {
                            t.addListeners()
                        }), t.config.isOverlay ? t.initOverlay() : e.mediator.emit("prestitial:show")
                    },
                    loadPage: function() {
                        window.location.href = "https://www.aol.com/"
                    },
                    addListeners: function() {
                        var e = this;
                        e.config.closeBtn && n(e.config.closeBtn.length) && e.config.closeBtn.addEventListener("click", function() {
                            e.setCookies(), e.config.isOverlay || e.loadPage()
                        }, !1), e.config.installBtn && n(e.config.installBtn.length) && e.config.installBtn.addEventListener("click", function() {
                            e.visitAppStore(), new YAHOO.i13n.Rapid(e.cloneRapidConfig()).beaconClick("campaign_interstitial", "Get The Aol App", 0, {
                                st_sec: "us.aolcomother",
                                ver: "interstitial",
                                expn: "interstitial",
                                navtype: "client",
                                slk: "Get The Aol App",
                                elm: "btn",
                                itc: 0,
                                tar: "www.aol.com",
                                tar_uri: "https://www.aol.com"
                            }, "camp_click")
                        }, !1)
                    },
                    hasClass: function(e, t) {
                        return (" " + e.className + " ").indexOf(" " + t + " ") > -1
                    },
                    visitAppStore: function() {
                        var e = this,
                            t = Site.appPromoIsActive ? e.config.testAppStoreUrl : e.config.controlAppStoreUrl;
                        window.location = t
                    },
                    openApp: function() {
                        var e = this,
                            t = document.getElementsByClassName("m-prestitial")[0];
                        for (var o in e.config.openAppUrl)
                            if (e.config.openAppUrl.hasOwnProperty(o) && e.hasClass(t, o)) {
                                window.location = e.config.openAppUrl[o];
                                break
                            }
                    },
                    setCookies: function() {
                        var e = this;
                        "" != s.get("app_promo") && "suppressed" != s.get("app_promo_views") && (void 0 == s.get("app_promo_views") ? s.set("app_promo_views", e.getUTCExpiry(30) + "|1", {
                            expires: 30,
                            domain: ".aol.com"
                        }) : parseInt(s.get("app_promo_views").split("|")[1]) < 3 ? s.set("app_promo_views", s.get("app_promo_views").split("|")[0] + "|" + (parseInt(s.get("app_promo_views").split("|")[1]) + 1), {
                            domain: ".aol.com"
                        }) : "suppressed" != s.get("app_promo_views") && 3 == parseInt(s.get("app_promo_views").split("|")[1]) && s.set("app_promo_views", "suppressed", {
                            expires: 30,
                            domain: ".aol.com"
                        }))
                    },
                    getUTCExpiry: function(e) {
                        var t = new Date;
                        return t.setTime(t.getTime() + 24 * e * 60 * 60 * 1e3), t.toUTCString()
                    },
                    getImageOffsetForPositioning: function() {
                        var e = this;
                        return window.innerWidth > window.innerHeight || null != e.config.container.attr("class").match(/isIosTablet|isAndroidTablet/) ? 10 : null != e.config.container.attr("class").match(/isAndroidMobile/) ? 70 : 40
                    },
                    initOverlay: function() {
                        var t = this;
                        !t.config.container.data("ismobile") && !t.config.container.data("istablet") || t.isSuppressed() || (t.config.isArticle ? (t.applyArticleBindings(), e.mediator.on("ymal:rendered", function() {
                            t.applyArticleBindings()
                        })) : t.applyHomepageBindings())
                    },
                    applyHomepageBindings: function() {
                        var e = this;
                        n(window).on("scroll", i.debounce(function() {
                            n(window).scrollTop() >= 50 && e.showOverlay()
                        })), e.dlBinding()
                    },
                    dlBinding: function() {
                        var e = this;
                        n(".dl__slides").on("dl:init", function() {
                            n(e.config.dl_elements).on("click.dl-prestitial", function(t) {
                                e.dlEventHandler(t, this)
                            })
                        })
                    },
                    dlEventHandler: function(e, t) {
                        var o = this;
                        e.preventDefault(), e.stopPropagation(), o.config.clickedAnchorElem = t, o.showOverlay()
                    },
                    applyArticleBindings: function() {
                        var e = this,
                            t = ["a:not([class^=aol-share-])", "a:not(.article-show-more)", "a:not(.m-navbar__menu-toggle)", "a:not(.navigation-right-hamburger)", "a:not(.aol-app-deeplink .aolapp_open)", "a:not(.m-navbar__toggle)", "a:not(.m-prestitial a)"];
                        e.config.articleAnchors = n("a"), n.each(t, function(t, o) {
                            e.config.articleAnchors = e.config.articleAnchors.filter(o)
                        }), n(e.config.articleAnchors).one("click.art-prestitial", function(t) {
                            t.preventDefault(), t.stopPropagation(), e.config.clickedAnchorElem = this, e.showOverlay()
                        })
                    },
                    cloneRapidConfig: function() {
                        var e = Object.assign({}, rapidConfig);
                        return e.spaceid = 1197803425, e.pageview_on_init = !1, e.dwell_on = !1, e.nol = 1, e
                    },
                    showOverlay: function() {
                        var t = this;
                        if (!t.config.overlayShown && !t.isSuppressed()) {
                            e.mediator.emit("prestitial:show");
                            try {
                                if ("undefined" != typeof bN) {
                                    var o = t.config.container.data("beacon").p.mnid ? t.config.container.data("beacon").p.mnid : "bapp_prestitial",
                                        i = [
                                            ["plids", "0|" + o, 1]
                                        ];
                                    bN.ping(o, i), bN.set("plids", ""), bN.set("mnid", "")
                                }
                            } catch (e) {}
                            t.togglePageScroll(1), t.config.container.addClass("open"), t.config.overlayShown = !0, s.set("app_promo", 1, {
                                expires: 1,
                                domain: ".aol.com"
                            }), t.config.container.find(".m-close").click(function(e) {
                                t.togglePageScroll(), e.preventDefault(), t.config.container.removeClass("open"), t.continueToClickedAnchorHref(), n(t.config.dl_elements).off("click.dl-prestitial"), n(t.config.articleAnchors).off("click.art-prestitial"), new YAHOO.i13n.Rapid(t.cloneRapidConfig()).beaconClick("campaign_interstitial", "close", 0, {
                                    st_sec: "us.aolcomother",
                                    ver: "interstitial",
                                    expn: "interstitial",
                                    navtype: "client",
                                    outcm: "camp_close",
                                    slk: "close",
                                    elm: "btn",
                                    itc: 0,
                                    tar: "www.aol.com",
                                    tar_uri: "https://www.aol.com"
                                }, "camp_close")
                            }), "undefined" != typeof rapidConfig && new YAHOO.i13n.Rapid(t.cloneRapidConfig()).beaconEvent("simple", {
                                st_sec: "us.aolcomother",
                                ver: "interstitial",
                                expn: "interstitial",
                                navtype: "client"
                            }, "interstitial")
                        }
                    },
                    continueToClickedAnchorHref: function() {
                        var e = this;
                        if (e.config.clickedAnchorElem) {
                            var t = n(e.config.clickedAnchorElem).attr("href"),
                                o = n(e.config.clickedAnchorElem).attr("target") || "";
                            t && t.length > 1 && window.open(t, o)
                        }
                    },
                    togglePageScroll: function(e) {
                        e ? (n("html,body").css("overflow", "hidden"), n("html,body").css("height", "100%"), n("html,body").css("position", "relative")) : (n("html,body").css("overflow", ""), n("html,body").css("height", ""), n("html,body").css("position", ""))
                    },
                    isSuppressed: function() {
                        var e = new URLSearchParams(window.location.search).get("showAppPromo");
                        return !(null != e && e.length > 0) && ("1" == s.get("app_promo") || "suppressed" == s.get("app_promo_views"))
                    }
                }
            }
        }).call(t, o(0), o(3))
    },
    287: function(e, t, o) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var n = o(37),
                i = t(n),
                a = o(21),
                s = t(a),
                l = o(38),
                r = t(l),
                c = o(288),
                d = t(c),
                u = o(39),
                p = t(u),
                h = o(289),
                m = t(h),
                f = o(5);
            e.extend(f.modules, {
                Share: o(22),
                Prestitial: o(23),
                YahooStockQuotes: o(40),
                YahooFinanceMarkets: o(41),
                YahooTopGainersLosers: o(290),
                ZillowFMR: o(291),
                StyleForecast: o(292),
                ShieldPromo: o(293),
                Mtmhp: o(294),
                HoroscopeNewsletterPopup: o(42),
                NewsletterPopup: o(43)
            }), Tea.Application.addService("idleTimeout", i.default), Tea.Application.addModule("dynamic-lede", r.default), Tea.Application.addModule("homepage-test-nav", d.default), Tea.Application.addModule("megaphone", s.default), Tea.Application.addModule("idleTimeout", p.default), Tea.Application.addModule("horoscope-daily", m.default)
        }).call(t, o(0))
    },
    288: function(e, t, o) {
        "use strict";
        (function(e) {
            function o(t) {
                var o = void 0,
                    n = void 0,
                    i = void 0,
                    a = 0,
                    s = void 0,
                    l = void 0,
                    r = void 0,
                    c = void 0;
                return {
                    init: function() {
                        o = t.getElement(), n = t.getConfig(), s = e(o), l = s.find(n.hamburgerEl), r = s.find(n.fullMenuEl), this.fullMenuListeners(), this.leaderboardScrollBg(), this.hamburgerFocus()
                    },
                    setNavScrollBreak: function() {
                        s.hasClass("sticky") ? (s.removeClass("sticky"), a = s.offset().top) : a = s.offset().top
                    },
                    leaderboardScrollBg: function() {
                        e(window).on("scroll", function() {
                            i = e(window).scrollTop(), i >= a && s.addClass("sticky"), i > a && s.addClass("m-homepagetest-navigation--blur"), i < a && s.removeClass("sticky"), i <= a && s.removeClass("m-homepagetest-navigation--blur")
                        })
                    },
                    fullMenuListeners: function() {
                        var t = this;
                        l.on("click", function(e) {
                            e.preventDefault(), t.fullMenuToggle(e)
                        }), e(document).on("keyup", function(e) {
                            27 === e.keyCode && l.hasClass("hamburger--close") && t.fullMenuClose(e)
                        })
                    },
                    fullMenuToggle: function(e) {
                        l.hasClass("hamburger--close") ? this.fullMenuClose(e) : this.fullMenuOpen(e)
                    },
                    fullMenuOpen: function(t) {
                        if (e("body").addClass("noscroll"), s.addClass("m-homepagetest-navigation--menu_open"), r.removeClass("navigation_full-fullmenu--hidden"), l.addClass("hamburger--close").attr("aria-expanded", "true"), c = [], "undefined" != typeof bN && bN.click(t), t.stopPropagation(), l.attr("data-beacon", '{"p": {"mnid": "burger-menu-close", "plid": 0}}'), Tea.Application.broadcast("fullmenu::open"), "undefined" != typeof vidible_players)
                            for (var o = 0; o < vidible_players.length; o += 1) {
                                var n = vidible_players[o];
                                "playing" === n.getPlayerInfo().playerStatus && (c.push(n), n.pause())
                            }
                    },
                    fullMenuClose: function(t) {
                        if (e("body").removeClass("noscroll"), s.removeClass("m-homepagetest-navigation--menu_open"), r.addClass("navigation_full-fullmenu--hidden"), l.removeClass("hamburger--close").attr("aria-expanded", "false"), "undefined" != typeof bN && bN.click(t), t.stopPropagation(), l.attr("data-beacon", '{"p": {"mnid": "burger-menu", "plid": 0}}'), "undefined" != typeof vidible_players && c.length > 0)
                            for (var o = 0; o < c.length; o += 1) {
                                var n = c[o];
                                n.play()
                            }
                    },
                    hamburgerFocus: function() {
                        l.on("click", function() {
                            l.addClass("mousefocus")
                        }), l.on("focus", function() {
                            l.removeClass("mousefocus")
                        })
                    },
                    onmessage: {
                        adready: function(t) {
                            "fi_ad_leaderboard" === t.placement && e("html").hasClass("has-leaderboard") && (t.isBlank || this.setNavScrollBreak())
                        },
                        "mail:success": function(t) {
                            if (t.count > 0) {
                                var o = t.count > 999 ? (t.count / 1e3).toFixed(1) + "k" : t.count;
                                e(".navigation_full-user-mail-badge").text(o).removeClass("hidden")
                            }
                        },
                        "video:play:begin": function(t) {
                            e(".m-homepagetest-video").length > 0 && e(".module-aol-on-video.homepage .article-copy").addClass("autohide")
                        }
                    },
                    destroy: function() {
                        o = null
                    }
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = o
        }).call(t, o(0))
    },
    289: function(e, t, o) {
        "use strict";
        (function(e) {
            function o(t) {
                var o = void 0,
                    n = void 0,
                    i = void 0;
                return {
                    init: function() {
                        o = t.getElement(), n = t.getConfig(), i = t.getService("utils"), this.addEventListeners(), this.initialized = !0
                    },
                    addEventListeners: function() {
                        e(o).find(".m-horoscopes-daily__widget__signs .link").click(function(t) {
                            t.preventDefault(), e(o).find(".m-horoscopes-daily__widget__signs").addClass("hidden"), e(o).find(".m-horoscopes-daily__widget__more-info").removeClass("hidden"), e(o).find('.m-horoscopes-daily__widget__more-info .more-info[data-sign="' + e(this).attr("data-sign") + '"]').removeClass("hidden")
                        }), e(o).find(".m-horoscopes-daily__widget__more-info .select-star select").on("change", function() {
                            e(o).find(".m-horoscopes-daily__widget__more-info .more-info ").addClass("hidden"), e(o).find('.m-horoscopes-daily__widget__more-info .more-info[data-sign="' + e(this).val() + '"]').removeClass("hidden")
                        })
                    },
                    onmessage: {},
                    destroy: function() {
                        o = null, n = null, i = null
                    }
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = o
        }).call(t, o(0))
    },
    290: function(e, t, o) {
        "use strict";
        (function(o) {
            t = e.exports = function(e, t, n) {
                return {
                    config: {
                        module: ".yahoo-finance-top-gainers-losers"
                    },
                    init: function(e) {
                        var t = this;
                        if (o(t.config.module).length) {
                            o(t.config.module).find(".stocks").data("slide-position", 1);
                            var n = o(t.config.module).find(".tab-navigation .navicon-left"),
                                i = o(t.config.module).find(".tab-navigation .navicon-right");
                            n.on("click", function(e) {
                                o(this).hasClass("disabled") || t.slideStocks("left", this)
                            }), i.on("click", function(e) {
                                o(this).hasClass("disabled") || t.slideStocks("right", this)
                            })
                        }
                    },
                    slideStocks: function(e, t) {
                        var n = o(t).closest("div.tab").find("div.stocks"),
                            i = n.width(),
                            a = o(t).parent().find(".navicon-right"),
                            s = o(t).parent().find(".navicon-left"),
                            l = n.data("slide-position");
                        "right" == e ? (n.animate({
                            right: "+=" + i + "px"
                        }), l += 1, s.removeClass("disabled"), i * l >= n[0].scrollWidth && a.addClass("disabled")) : (n.animate({
                            right: "-=" + i + "px"
                        }), a.removeClass("disabled"), l -= 1), l <= 1 && s.addClass("disabled"), n.data("slide-position", l)
                    }
                }
            }
        }).call(t, o(0))
    },
    291: function(e, t, o) {
        "use strict";
        (function(o) {
            /*!
             * _QuotesSessionBuilder
             * @author: Weili Yang [weili.yang@teamaol.com]
             */
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            t = e.exports = function(e, t, i) {
                return {
                    config: {
                        moduleFindAHome: ".module-zillow-find-a-home .find-a-home-wrap .action-form"
                    },
                    init: function(e) {
                        var i = this;
                        if (o(i.config.moduleFindAHome).length) {
                            e && "object" == (void 0 === e ? "undefined" : n(e)) && o.extend(this.config, e);
                            t.logger;
                            o(i.config.moduleFindAHome).length && i.loadZillowFMR()
                        }
                    },
                    loadZillowFMR: function() {
                        var e = this;
                        o.get("/api/modules/zillow-fmr.html?path=" + window.location.pathname.replace(/\//g, ""), function(t) {
                            o(t).appendTo(o(e.config.moduleFindAHome))
                        })
                    }
                }
            }
        }).call(t, o(0))
    },
    292: function(e, t, o) {
        "use strict";
        (function(n) {
            /*!
             * Style Forecast
             * @author: Weili Yang [weili.yang@teamaol.com]
             */
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                a = o(2);
            t = e.exports = function(e, t, o) {
                return {
                    config: {
                        zipInput: ".m-forecast .control .inputs .zip",
                        goButton: ".m-forecast .control .inputs .btn-go",
                        zipForm: ".m-forecast .control .zip-input-form",
                        moduleForecast: ".m-style-forecast .m-forecast",
                        moduleWhatToWear: ".m-style-forecast-what-to-wear",
                        moduleWhatToWearItems: ".m-style-forecast-what-to-wear .items",
                        moduleHeader: ".m-style-forecast .m-header-branding",
                        cookieName: "weathergeo"
                    },
                    init: function(e) {
                        if (n(".m-style-forecast-what-to-wear").length && n(".m-style-forecast").length) {
                            var o = this;
                            e && "object" == (void 0 === e ? "undefined" : i(e)) && n.extend(this.config, e);
                            t.logger;
                            o.applyBindings()
                        }
                    },
                    applyBindings: function() {
                        var e = this;
                        n(document).on("submit", e.config.zipForm, function(t) {
                            t.preventDefault();
                            var o = n(e.config.zipInput).val();
                            o.match(/^\d+$/g) && n.getJSON("/api/v1/weather", {
                                lookup: o
                            }, function(t) {
                                var o = t.latitude,
                                    i = t.longitude,
                                    s = t.cityName,
                                    l = t.stateCode,
                                    r = t.cntryCode,
                                    c = t.zipcode;
                                if (null != o && null != i && null != s && null != l && null != r && s.length > 0 && l.length > 0 && r.length > 0) {
                                    var d = Math.round(100 * o) / 100 + "|" + Math.round(100 * i) / 100 + "|" + s + "|" + l + "|" + r + (null != c && c.length > 0 ? "|" + c : "");
                                    a.set(e.config.cookieName, d, {
                                        expires: 365,
                                        domain: ".aol.com"
                                    }), n.get("/api/modules/style-forecast.html", function(t) {
                                        var o = n(t),
                                            i = o.find(".m-forecast");
                                        n(e.config.moduleForecast).remove(), i.insertAfter(n(e.config.moduleHeader))
                                    }), n.get("/api/modules/style-forecast-what-to-wear.html", function(t) {
                                        var o = n(t),
                                            i = o.find(e.config.moduleWhatToWear);
                                        n(e.config.moduleWhatToWear).remove(), n(i).appendTo(n("#bon-cw"))
                                    });
                                    var u = new n.Event("window.local.changeLocation");
                                    u.local = {
                                        changeLocation: c
                                    }, n(document).trigger(u)
                                }
                            })
                        }), n(document).on("click", ".what-to-wear-show-more", function(t) {
                            t.preventDefault();
                            var o = n(".m-style-forecast-what-to-wear").data("count");
                            n.get("/api/modules/style-forecast-what-to-wear.html", {
                                count: o + 18
                            }, function(t) {
                                var o = n(t),
                                    i = o.find(".m-style-forecast-what-to-wear");
                                n(e.config.moduleWhatToWear).remove(), n(i).appendTo(n("#bon-cw"))
                            })
                        }), n(document).on("window.local.refresh", function(t) {
                            n.get("/api/modules/style-forecast.html", function(t) {
                                var o = n(t),
                                    i = o.find(".m-forecast");
                                n(e.config.moduleForecast).remove(), i.insertAfter(n(e.config.moduleHeader))
                            }), n.get("/api/modules/style-forecast-what-to-wear.html", function(t) {
                                var o = n(t),
                                    i = o.find(e.config.moduleWhatToWear);
                                n(e.config.moduleWhatToWear).remove(), n(i).appendTo(n("#bon-cw"))
                            })
                        })
                    }
                }
            }
        }).call(t, o(0))
    },
    293: function(e, t, o) {
        "use strict";
        (function(o) {
            /*!
             * Shield Promo
             * @author: John Crouch [john.crouch@teamaol.com]
             * @description: Show/Hide functionality for AOL Shield full screen homepage promo.
             */
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            t = e.exports = function(e, t, i) {
                return {
                    config: {
                        container: o(".m-shield-promo")
                    },
                    init: function(e) {
                        0 != this.config.container.length && (e && "object" == (void 0 === e ? "undefined" : n(e)) && o.extend(this.config, e), this.applyBindings(), this.showPromo(), this.initialized = !0)
                    },
                    showPromo: function() {
                        this.config.container.hide().removeClass("is-hidden").fadeIn(300), o.readCookie("shield_promo") || o.createCookie("shield_promo", "seen", 86400)
                    },
                    hidePromo: function() {
                        this.config.container.hide(200)
                    },
                    applyBindings: function() {
                        var e = this;
                        e.config.container.add(e.config.container.find(".close")).on("click.shieldPromo", function(t) {
                            e.hidePromo()
                        }), o(document).on("keyup.shieldPromo", function(t) {
                            t.preventDefault(), t.stopPropagation(), 27 === t.which && e.hidePromo()
                        }), e.config.container.find(".link-out").on("click.shieldPromo", function() {
                            e.hidePromo(), o.createCookie("shield_promo", "downloaded", 315569260)
                        })
                    }
                }
            }
        }).call(t, o(0))
    },
    294: function(e, t, o) {
        "use strict";
        (function(n, i) {
            var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                s = o(2);
            t = e.exports = function() {
                return {
                    config: {
                        mtmhp: {
                            wrapper: n(".m-mtmhp"),
                            popupClose: n(".m-mtmhp__wrap__close"),
                            setToolbarInstalls: n(".set-toolbar-install"),
                            cookieToolbarInstall: "TOOLBAR_INSTALL"
                        }
                    },
                    init: function(e) {
                        e && "object" == (void 0 === e ? "undefined" : a(e)) && n.extend(this.config, e), this.applyBindings();
                        var t = this;
                        this.config.mtmhp.wrapper.length > 0 && (this.config.mtmhp.popupClose.click(function() {
                            t.config.mtmhp.wrapper.removeClass("slidedown")
                        }), 1 == this.config.mtmhp.wrapper.data("popup") && this.config.mtmhp.wrapper.addClass("slidedown"))
                    },
                    applyBindings: function() {
                        var e = this;
                        if (this.config.mtmhp.wrapper.length > 0) {
                            var t = i.getUrlParamByName("ncid"),
                                o = i.getUrlParamByName("icid"),
                                a = {
                                    tbid: "aol",
                                    homepage: "",
                                    search: "",
                                    tab: ""
                                };
                            t && (a.ncid = t), o && (a.icid = o), n.each(e.config.mtmhp.setToolbarInstalls, function(i, l) {
                                n(l).on("click", function(i) {
                                    var l = n(".set-homepagenewtab").prop("checked") ? "1" : "0",
                                        r = n(".set-defaultsearch").prop("checked") ? "1" : "0";
                                    a.homepage = l, a.search = r, a.tab = l, e.config.mtmhp.wrapper.data("ie") ? a = n.map(a, function(e, t) {
                                        return t + "=" + e
                                    }).join(";") : "chrome" === e.config.mtmhp.wrapper.data("browser-name") ? (a = {
                                        tbid: "aoloneclick",
                                        icid: o,
                                        ncid: t
                                    }, a = JSON.stringify(a)) : a = JSON.stringify(a);
                                    var c = new Date;
                                    c.setTime(c.getTime() + 36e5), s.set(e.config.mtmhp.cookieToolbarInstall, a, {
                                        expires: c,
                                        domain: ".aol.com"
                                    })
                                })
                            }), n(".chrome.set-toolbar-install").on("click", function() {
                                "undefined" != typeof myRapidInstance && myRapidInstance.beaconClick("mtmhp", "Add AOL to Chrome", "1", params), window.open("https://chrome.google.com/webstore/detail/aol-oneclick/clikkblliffbbkffahjehcdeknmedelg", "_blank")
                            })
                        }
                    },
                    slideup: function(e) {
                        n(".m-overlay").removeClass("slidedown")
                    }
                }
            }
        }).call(t, o(0), o(3))
    },
    37: function(e, t, o) {
        "use strict";

        function n(e) {
            var t = !1;
            return {
                isIdle: function() {
                    return t
                },
                setIdle: function(e) {
                    return t = e
                }
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = n
    },
    38: function(e, t, o) {
        "use strict";
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function a(t) {
                function o(e) {
                    if ("ad" !== e.data("type")) return !1;
                    var t = e.find(".m-ad");
                    if (1 == e.data("taboola")) {
                        var o = t.data("placement");
                        return t.data("placement", !1), t.addClass("is-ready"), o
                    }
                    return t.attr("data-module", "ads"), Tea.Application.start(t[0]), !1
                }

                function n() {
                    w.dlTrack && S.beaconPageview({
                        _R: window.location.href,
                        expn: "dynamic-lead",
                        navtype: "client"
                    })
                }

                function a() {
                    if (w.dlTrack) {
                        var e = (window.location.protocol, window.location.hostname, x.slideCount);
                        x.currentSlide;
                        w.newsletterSlide && w.newsletterSlide.location && (e -= 1), E.length && E.data("index") && parseInt(E.data("index")) - 1;
                        var t = document.getElementById("dl-track");
                        null === t && (t = document.createElement("iframe"), document.body.appendChild(t)), t.display = "none", t.style.display = "none", t.height = t.width = 0, t.src = "/dl_track/"
                    }
                }

                function s(t) {
                    var o = [];
                    e(b).find(".slick-active [data-ylk]").not("[data-lv-fired]").each(function(t, n) {
                        var i = e(n).data("ylk").split(";"),
                            a = i.reduce(function(e, t) {
                                var o = t.split(":");
                                return o[1] && (e[o[0]] = o[1]), e
                            }, {});
                        o.push(a), e(n).attr("data-lv-fired", !0)
                    }), o.length > 0 && S.beaconLinkViews([{
                        sec: "dl",
                        itc: 0,
                        _links: o
                    }], 2, {})
                }

                function r(e) {
                    var t = e.sec;
                    delete e.sec;
                    var o = e.slk;
                    delete e.slk, S.beaconClick(t, o, 0, e)
                }

                function d() {
                    return k.inViewport(b, {
                        threshold: .3
                    })
                }

                function u(t) {
                    var o = "",
                        n = {};
                    0 === R && (R = Date.now());
                    var i = "aol-homepagecarousel",
                        a = "https://www.aol.com";
                    return w.taboolaPubId && (i = w.taboolaPubId), location.hostname.indexOf("aol.co.uk") > -1 && (a = "https://www.aol.co.uk"), "de-de" == Site.locale && (a = "https://www.aol.de"), o = "//api.taboola.com/1.2/json/" + i + "/recommendations.get", n = {
                        "app.type": "desktop",
                        "app.apikey": w.taboolaApiKey,
                        "placement.rec-count": 1,
                        "placement.thumbnail.width": 640,
                        "placement.thumbnail.height": 420,
                        "placement.visible": !0,
                        "user.session": A,
                        "source.type": "home",
                        "source.id": "/",
                        "source.url": a,
                        "placement.name": w.adSlotPrefix + "slide" + (t + 1),
                        "view.id": R
                    }, e.ajax({
                        url: o,
                        data: n,
                        xhrFields: {
                            withCredentials: !0
                        }
                    })
                }

                function p() {
                    if (!w.adRefresh || O.size < 900 || L >= z || 10 !== T && 25 !== T && 40 !== T || 0 == U) return void(U = !1);
                    h()
                }

                function h() {
                    U = !1, L++;
                    var t = e("#fi_1374016173"),
                        o = e("#fi_ad_leaderboard");
                    t.length && (window.adsReloadAd(t[0]), "en-us" == y.req.locale && adsRotateMult("fi_1374016173")), o.length && (window.adsReloadAd(o[0]), "en-us" == y.req.locale && adsRotateMult("fi_ad_leaderboard"))
                }

                function m() {
                    if (!w.adRefresh || O.size >= 754 || L >= z || N % 10 != 0 || 0 == F) return void(F = !1);
                    F = !1;
                    var t = e("#fi_42069311");
                    t.length && window.adsReloadAd(t[0])
                }

                function f(t) {
                    [(t - 2) % x.slideCount, (t - 1) % x.slideCount, (t + 1) % x.slideCount, (t + 2) % x.slideCount].forEach(function(t, o) {
                        var n = e(b).find('.slick-slide[data-index="' + (t + 1) + '"] img[data-lazy]');
                        n.attr("src", n.attr("data-lazy")), n.removeAttr("data-lazy")
                    })
                }

                function g(t) {
                    x.slickPause(), !t || "click" !== t.type && "swipe" !== t.type || (M = !0), w.slidesOptions.enablePause && (e(w.slidesElem).find(".slick-pause").addClass("navicon-dlplay"), e(w.slidesElem).find(".slick-pause").attr("title", "Play"))
                }

                function v(t, o) {
                    M && !o || (x.slickPlay(), !t || "click" !== t.type && "swipe" !== t.type || (M = !1), w.slidesOptions.enablePause && (e(w.slidesElem).find(".slick-pause").removeClass("navicon-dlplay"), e(w.slidesElem).find(".slick-pause").attr("title", "Pause")))
                }
                var b = void 0,
                    w = void 0,
                    y = void 0,
                    k = void 0,
                    _ = void 0,
                    S = void 0,
                    C = void 0,
                    x = void 0,
                    T = void 0,
                    E = void 0,
                    I = {},
                    A = "init",
                    R = 0,
                    O = void 0,
                    B = !1,
                    P = !1,
                    M = !1,
                    N = 1,
                    U = !1,
                    F = !1,
                    L = 0,
                    z = 3,
                    D = [],
                    j = !1,
                    Y = [];
                return {
                    init: function() {
                        b = t.getElement(), w = t.getConfig(), y = t.getGlobalConfig(), k = t.getService("utils"), _ = t.getService("idleTimeout"), S = t.getGlobal("myRapidInstance");
                        var e = t.getService("respond");
                        O = e.getLayout(), this.injectNewsletterSlide(), this.addEventListeners(), this.initCaptions(), this.initSlides(), this.viewportCheck(), this.initNewsletterSignup()
                    },
                    injectNewsletterSlide: function() {
                        var e = document.querySelector("div.dl__slides"),
                            t = document.querySelector("div.dl__captions"),
                            o = document.getElementById("dl-newsletter-signup-container"),
                            n = o ? o.dataset.location : null;
                        if (e && t && n) {
                            var i = parseInt(n),
                                a = e.getElementsByClassName("dl__slide"),
                                s = t.getElementsByClassName("dl__caption"),
                                l = document.querySelector("#dl-newsletter-signup-container .dl__slide"),
                                r = document.querySelector("#dl-newsletter-signup-container .dl__caption");
                            a.length > i && (e.insertBefore(l, a[i]), t.insertBefore(r, s[i]))
                        }
                    },
                    addEventListeners: function() {
                        var t = this;
                        e(b).on("click", ".slick-slide a", function(t) {
                            var o = new URL(e(this).attr("href")),
                                n = e(this).closest(".slick-slide").data("slick-index");
                            if (-1 !== Y.indexOf(n)) {
                                var i = e(this).data("ylk").split(";"),
                                    a = i.reduce(function(e, t) {
                                        var o = t.split(":");
                                        return o[1] && (e[o[0]] = o[1]), e
                                    }, {});
                                myRapidInstance.beaconClick("dl", decodeURIComponent(a.slk), a.pos, Object.assign({
                                    pkgt: "dlad",
                                    ad: 1,
                                    tar: o.hostname,
                                    tar_uri: o.pathname + o.search
                                }, a))
                            }
                        }), e(b).find(".dl__slide-overlay").on("click", function(t) {
                            var o = e(this).attr("data-ylk"),
                                n = e(this).parent(".dl__slide").data("index"),
                                i = e(".dl__slide.slick-active").data("index"),
                                a = n > i ? "next" : n < i ? "prev" : "",
                                s = {};
                            o.split(";").forEach(function(e) {
                                var t = e.split(":");
                                2 == t.length && ("ll1" == t[0] || null !== t[1] && "" !== t[1] && (s[t[0]] = t[1]))
                            }), s.slk = a;
                            var l = "";
                            Object.keys(s).forEach(function(e) {
                                var t = s[e];
                                l = l + e + ":" + t + ";"
                            }), e(this).attr("data-ylk", l)
                        }), e(b).find(w.captionsElem).on("init", function(o, n) {
                            C = n, E = e(n.$slides[C.currentSlide]), E.hasClass("dl__newsletterform-test4") && e(b).find(w.captionsElem).addClass("newsletterform"), e(t).on("mouseenter", g).on("mouseleave", v)
                        }).on("beforeChange", function(t, o, n, i) {
                            var a = e(o.$slides[i]);
                            a.hasClass("dl__newsletterform-test4") ? (e(b).find(w.captionsElem).addClass("newsletterform"), e(b).find(w.captionsElem).removeClass("newsletterform-test1")) : a.hasClass("dl__newsletterform-test1") ? (e(b).find(w.captionsElem).addClass("newsletterform-test1"), e(b).find(w.captionsElem).removeClass("newsletterform")) : (e(b).find(w.captionsElem).removeClass("newsletterform"), e(b).find(w.captionsElem).removeClass("newsletterform-test1"))
                        }), e(b).find(w.slidesElem).on("init", function(n, i) {
                            x = i, T = w.isOn, E = e(i.$slides[w.isOn - 1]), s(e(i.$slides[w.isOn - 1])), w.slidesOptions.enablePause && e(w.slidesElem).append('<button class="slick-pause navicon-dlpause slick-arrow" data-beacon=\'{"p": {"lnid": "dl_pause"}}\' data-ylk="elm:arrow;slk:pause;" type="button"></button>'), D.push(T), e(b).find(".slick-active").each(function(n, i) {
                                var a = o(e(i));
                                if (0 != a) {
                                    var s = e("#" + a);
                                    t.triggerTaboola(s)
                                }
                            }), e(b).find(w.slidesElem).on("swipe", function(e, t, o) {
                                g(e), B = !0, U = !0, F = !0
                            }).on("click", ".slick-active", function(e) {
                                v(e, !0)
                            }).on("click", ".slick-arrow.slick-prev, .slick-arrow.slick-next, .slick-slide", function(t) {
                                if (1 == j && t.preventDefault(), g(t), B = !P, U = !0, F = !0, e(t.target).hasClass("slick-arrow")) {
                                    var o = e(t.target).hasClass("slick-next") ? "next" : "prev",
                                        n = {
                                            sec: "dl",
                                            slk: o
                                        },
                                        a = T - 1,
                                        s = ("next" === o ? a + 1 : a - 1) % i.$slides.length,
                                        l = Object.assign(e(i.$slides[s]).data("ylk-click"), n);
                                    delete l.ll1, r(l)
                                }
                            }).on("click", ".navicon-dlpause", g).on("click", ".navicon-dlplay", function(e) {
                                v(e, !0)
                            })
                        }).on("beforeChange", function(n, i, a, s) {
                            P = a == s, a != s && (j = !0);
                            var l = e(i.$slides[s]),
                                r = l;
                            r.push(e(i.$slides[s]).nextAll().slice(0, i.options.slidesToShow - 1)), r.each(function(n, i) {
                                var a = o(e(i));
                                if (0 != a) {
                                    var s = e("#" + a);
                                    t.triggerTaboola(s)
                                }
                            })
                        }).on("afterChange", function(t, o, i) {
                            if (j = !1, f(i), D.length >= Math.floor(x.slideCount / x.options.slidesToShow) - 1 && _.isIdle() && g(), w.countElem) {
                                var r = (i || 0) + 1;
                                e(w.countElem).text(Math.ceil(r / o.options.slidesToShow) + "/" + Math.ceil(o.slideCount / o.options.slidesToShow))
                            }
                            T = i + 1, E = e(o.$slides[i]);
                            var c = E;
                            c.push(e(o.$slides[i]).nextAll().slice(0, o.options.slidesToShow - 1)), E.data("donottrack") ? window.bN && E.data("newsletter") && !E.data("tracked") && (bN.set("mnid", E.data("mnid"), 1), bN.ping("newsletter-dl"), E.data("tracked", !0)) : (l.default.set("dlIsOn", "" + T, {
                                path: "/"
                            }), p(), m(), -1 === e.inArray(T, D) && D.push(T), w.pingCache ? -1 !== e.inArray(T, D) && -1 === e.inArray(T, w.adSlots) || c.each(function(e, t) {}) : c.each(function(e, t) {}), B && window.location.hostname.indexOf(".aol.com") > -1 && n(), B && a(), s(e(o.$slides[w.isOn - 1]))), B = !1, N++
                        }), e(b).on("click", "a", function(t) {
                            var o = e(this);
                            o.data("gemini-beacon") && e.ajax(o.data("gemini-beacon"))
                        })
                    },
                    initCaptions: function() {
                        w.captionsElem && e(w.captionsElem).slick({
                            waitForAnimate: !1,
                            arrows: !1,
                            asNavFor: w.slidesElem,
                            draggable: !1,
                            fade: !0,
                            initialSlide: w.isOn ? w.isOn - 1 : 0,
                            slidesToScroll: 1,
                            slidesToShow: 1,
                            speed: 0
                        })
                    },
                    initSlides: function() {
                        if (w.slidesElem) {
                            w.slidesOptions.enablePause && e(w.slidesElem).addClass("dl__slides--pausable");
                            var t = e.extend({
                                waitForAnimate: !1,
                                speed: 50,
                                autoplay: !0,
                                autoplaySpeed: 8e3,
                                asNavFor: w.captionsElem,
                                centerMode: !0,
                                centerPadding: "0px",
                                focusOnSelect: !0,
                                infinite: !0,
                                initialSlide: w.isOn ? w.isOn - 1 : 0,
                                lazyLoad: "ondemand",
                                prevArrow: '<button role="button" aria-label="prev arrow" class="slick-prev navicon-dlprev" data-beacon=\'{"p": {"lnid": "dl_prev"}}\' data-ylk="elm:arrow;slk:prev;" type="button"></button>',
                                nextArrow: '<button role="button" aria-label="next arrow" class="slick-next navicon-dlnext" data-beacon=\'{"p": {"lnid": "dl_next"}}\' data-ylk="elm:arrow;slk:next;" type="button"></button>',
                                slidesToScroll: 1,
                                slidesToShow: 1,
                                responsive: [{
                                    breakpoint: 1128,
                                    settings: {
                                        centerMode: !0
                                    }
                                }, {
                                    breakpoint: 1127,
                                    settings: {
                                        centerMode: !1
                                    }
                                }, {
                                    breakpoint: 901,
                                    settings: {
                                        centerMode: !1
                                    }
                                }, {
                                    breakpoint: 900,
                                    settings: {
                                        centerMode: !0
                                    }
                                }, {
                                    breakpoint: 754,
                                    settings: {
                                        centerMode: !0
                                    }
                                }, {
                                    breakpoint: 753,
                                    settings: {
                                        centerMode: !1
                                    }
                                }]
                            }, w.slidesOptions);
                            e(w.slidesElem).on("init", function() {
                                e(this).trigger("dl:init")
                            }), e(w.slidesElem).slick(t)
                        }
                    },
                    viewportCheck: function(e) {
                        (d() ? v : g)()
                    },
                    triggerTaboola: function(e) {
                        var t = this,
                            o = e.closest(".slick-slide").data("slick-index");
                        u(o).then(function(e) {
                            e && (e[w.adSlotPrefix + "slide" + w.adSlots[0]] || e[w.adSlotPrefix + "slide" + w.adSlots[1]] ? I = e : I[w.adSlotPrefix + "slide" + (o + 1)] = e)
                        }).then(function(n) {
                            var i = I[w.adSlotPrefix + "slide" + (o + 1)].list[0];
                            i && (i.type = "Sponsored", "init" === A && (A = I[w.adSlotPrefix + "slide" + (o + 1)].session), i.related_links = {
                                title: "de-de" == Site.locale ? "Schau Genau Hin" : "Take a closer look",
                                url: i.url || ""
                            }, t.buildAdUnit(e, i, o))
                        })
                    },
                    hijackAdInject: function(t) {
                        var o = this,
                            n = t.closest(".slick-slide").data("slick-index"),
                            i = "",
                            a = [];
                        try {
                            i = e.parseJSON(t.find(".ad-code").text()), a = i.views || []
                        } catch (e) {
                            return void o.triggerTaboola(t)
                        }
                        if (void 0 !== i.adType && "gemini" == i.adType) {
                            var s = i.apiKey,
                                l = i.adUnitCode;
                            e.getJSON("https://ads.yap.yahoo.com/nosdk/wj/v1/getAds.do?cb=?", {
                                local: "en_us",
                                agentVersion: "205",
                                adTrackingEnabled: !0,
                                totalAds: 10,
                                publisherUrl: window.location.href,
                                apiKey: s,
                                adUnitCode: l
                            }, function(e) {
                                if (void 0 !== e.ads && e.ads.length > 0) {
                                    var i = Math.floor(10 * Math.random()),
                                        s = e.ads[0];
                                    void 0 !== e.ads[i] && (s = e.ads[i]);
                                    var l = s.tag.imprTrackingUrl || [];
                                    l = l.concat(s.beacon), a = a.concat(l);
                                    var r = {
                                        type: "Advertisement",
                                        name: s.tag.headline || "",
                                        description: s.tag.summary || "",
                                        url: s.tag.clickUrl || "",
                                        clickBeacon: s.tag.clickTrackingUrl[0] || !1,
                                        thumbnail: [{
                                            url: s.tag.secHqImage || "",
                                            backgroundImage: !0
                                        }],
                                        related_links: {
                                            title: "Take a closer look",
                                            url: s.tag.clickUrl || ""
                                        },
                                        branding: s.tag.source,
                                        hideLogo: !0,
                                        views: a || []
                                    };
                                    o.buildAdUnit(t, r, n)
                                }
                            })
                        } else {
                            var r = {
                                type: "Advertisement",
                                name: i.headline || "",
                                description: i.summary || "",
                                url: i.newsLink || "",
                                clickBeacon: !1,
                                thumbnail: [{
                                    url: i.imgLarge || "",
                                    backgroundImage: !1
                                }],
                                related_links: {
                                    title: i.readmore || "",
                                    url: i.newsLink || ""
                                },
                                branding: '<img src="' + i.imgLogo + '" alt="' + i.headline + '">',
                                views: a || []
                            };
                            this.buildAdUnit(t, r, n)
                        }
                    },
                    buildAdUnit: function(t, o, n) {
                        Y.indexOf(n) < 0 && Y.push(n);
                        var a = e('<div class="m-ad__dl-views"></div>');
                        if (o.views)
                            for (i = 0; i < o.views.length; i++)
                                if (o.views[i]) {
                                    var s = o.views[i];
                                    a.append(e('<img class="m-ad__dl-view" src="' + s + '" width="0" height="0" alt="">'))
                                } if (void 0 !== w.captionsElem) {
                            var l = 40 == n ? "90% 50%" : "50% 50%",
                                r = e('<div class="m-ad__dl-container">\n          <a data-beacon=\'{"p": {"lnid": "dl-image"}}\' data-ylk="aid:aol_com_127=bsd:0;cpos:' + T + ";slk:" + encodeURIComponent(o.name) + ';mpos:;mvt:;pos:1;elm:img;" href="' + o.url + '" ' + (o.clickBeacon ? ' data-gemini-beacon="' + o.clickBeacon + '"' : "") + 'target="_blank">\n            ' + (o.thumbnail[0].backgroundImage ? '\n              <div class="m-ad__dl-bg-img" style="background: url(' + o.thumbnail[0].url + ") no-repeat " + l + '; background-size: cover;"></div>\n            ' : '\n              <img alt="' + o.name + '" height="420" src="' + o.thumbnail[0].url + '" width="640">\n            ') + '\n          </a>\n          <span class="dl__credit">' + o.type + "</span>\n        </div>"),
                                c = e("\n          " + (o.branding ? '\n            <div class="dl__sponsor' + ("Advertisement" === o.type && !0 !== o.hideLogo ? " dl__sponsor--logo" : "") + '">\n              <span class="dl__sponsor-title">Sponsored by</span>\n              <a class="dl__sponsor-name" href="' + o.url + '" ' + (o.clickBeacon ? ' data-gemini-beacon="' + o.clickBeacon + '"' : "") + 'target="_blank">' + o.branding + "</a>\n            </div>\n          " : "") + '\n          <h2 class="dl__caption-title">\n            <a data-beacon=\'{"p": {"lnid": "dl-headline"}}\' data-ylk="aid:aol_com_127=bsd:0;cpos:' + T + ";slk:" + encodeURIComponent(o.name) + ';mpos:;mvt:;pos:2;elm:hdln;" href="' + o.url + '" ' + (o.clickBeacon ? ' data-gemini-beacon="' + o.clickBeacon + '"' : "") + 'target="_blank">' + o.name + '</a>\n          </h2>\n          <p class="dl__caption-copy">\n            <a data-beacon=\'{"p": {"lnid": "dl-copy"}}\' data-ylk="aid:aol_com_127=bsd:0;cpos:' + T + ";slk:" + encodeURIComponent(o.name) + ';mpos:;mvt:;pos:3;elm:copy;" href="' + o.url + '" ' + (o.clickBeacon ? ' data-gemini-beacon="' + o.clickBeacon + '"' : "") + 'target="_blank">' + (o.description ? o.description : "") + "</a>\n          </p>\n          " + (o.related_links ? '\n            <ul class="dl__caption-related">\n                <li><a href="' + o.related_links.url + '" data-ylk="aid:aol_com_127=bsd:0;cpos:' + T + ";slk:" + encodeURIComponent(o.name) + ';mpos:;mvt:;pos:3;elm:rhdln;" target="_blank">' + o.related_links.title + "</a></li>\n            </ul>\n          " : "") + "\n        ");
                            t.html(r), e(C.$slides[n]).prepend(c)
                        } else {
                            var d = e('<a class="m-homepagetest-dl__carousel-link" data-ylk="aid:aol_com_127=bsd:0;cpos:' + T + ";slk:" + encodeURIComponent(o.name) + ';mpos:;mvt:;pos:1;elm:img;" ' + (o.clickBeacon ? ' data-gemini-beacon="' + o.clickBeacon + '"' : "") + 'href="' + o.url + '" target="_blank">\n            <img alt="' + o.name + '" class="m-homepagetest-dl__carousel-image bN" data-beacon=\'{"p": {"lnid": "dl-image"}}\' height="120" width="120" src="' + o.thumbnail[0].url + '">\n          </a>\n          <div class="m-homepagetest-dl__carousel-body">\n            <a class="m-homepagetest-dl__carousel-link" data-ylk="aid:aol_com_127=bsd:0;cpos:' + T + ";slk:" + encodeURIComponent(o.name) + ';mpos:;mvt:;pos:2;elm:hdln;" ' + (o.clickBeacon ? ' data-gemini-beacon="' + o.clickBeacon + '"' : "") + 'href="' + o.url + '" target="_blank">\n              <h3 class="m-homepagetest-dl__carousel-title bN" data-beacon=\'{"p": {"lnid": "dl-headline"}}\' ' + (o.clickBeacon ? ' data-gemini-beacon="' + o.clickBeacon + '"' : "") + ">\n                " + o.name + '\n              </h3>\n            </a>\n            <p class="m-homepagetest-dl__carousel-copy">' + (o.description ? o.description : "") + "</p>\n            " + (o.branding ? '\n              <div class="dl__sponsor' + ("Advertisement" === o.type ? " dl__sponsor--logo" : "") + '">\n                <span class="dl__sponsor-title">Sponsored by</span>\n                <a class="dl__sponsor-name" href="' + o.url + '" ' + (o.clickBeacon ? ' data-gemini-beacon="' + o.clickBeacon + '"' : "") + 'target="_blank">' + o.branding + "</a>\n              </div>\n            " : "") + '\n            <span class="m-homepagetest-dl__credit">' + o.type + "</span>\n          </div>\n        ");
                            t.html(d)
                        }
                        t.append(a)
                    },
                    initNewsletterSignup: function() {
                        var o = new c.default,
                            n = e(b).find(".newsletter-signup"),
                            i = t.getGlobalConfig();
                        i.user && i.user.email.length > 0 && n.find("input.email").val(i.user.email);
                        var a = function(e, t) {
                            var n = e.find("input.email").val(),
                                i = e.find("input.emailList").val();
                            if (!o.isValidEmailAddress(n)) return void e.find("input.email").addClass("error");
                            e.find("input.email").removeClass("error"), o.subscribeToNewsletter(n, i, function(t) {
                                t.errormsg ? e.find("input.signup").css("background-color", "red") : (e.find("input.email").attr("disabled", "true"), e.find("input.signup").attr("value", "Success").css("background-color", "green"), o.sendWelcomeEmail("welcome-breaking-news", n))
                            })
                        };
                        n.find("input.signup").click(function(e) {
                            e.preventDefault(), a(n)
                        })
                    },
                    onmessage: {
                        respond: function(e) {
                            O = e
                        },
                        scrollDebounced: function(e) {
                            this.viewportCheck(e)
                        },
                        adready: function(t) {
                            if (w.taboolaApiKey && t.placement.indexOf("ad_dl") > -1) {
                                var o = e("#" + t.placement);
                                e(b).html().indexOf("trigger_taboola_dl") > -1 ? this.triggerTaboola(o) : this.hijackAdInject(o)
                            }
                        },
                        "idle.idleTimeout": function(e) {
                            D.length >= Math.floor(x.slideCount / x.options.slidesToShow) - 1 && g()
                        },
                        "active.idleTimeout": function(e) {
                            D.length >= Math.floor(x.slideCount / x.options.slidesToShow) - 1 && v()
                        }
                    },
                    destroy: function() {
                        b = null, w = null, k = null, C = null, x = null, E = null
                    }
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = a;
            var s = o(2),
                l = n(s);
            o(14);
            var r = o(12),
                c = n(r)
        }).call(t, o(0))
    },
    39: function(e, t, o) {
        "use strict";
        (function(e) {
            function o(t) {
                function o() {
                    if (void 0 !== l) return !!l && {
                        passive: !0
                    };
                    var e = !1;
                    try {
                        document.addEventListener("test", null, {
                            get passive() {
                                e = !0
                            }
                        })
                    } catch (e) {}
                    return l = e, o()
                }
                var n = void 0,
                    i = void 0,
                    a = void 0,
                    s = void 0,
                    l = void 0,
                    r = {
                        timeout: 45e3,
                        events: "mousemove keydown wheel DOMMouseScroll mousewheel mousedown touchstart"
                    };
                return {
                    init: function() {
                        n = t.getElement(), i = t.getConfig(), i = e.extend({}, r, i), a = t.getService("idleTimeout"), this.handleEvent = this.handleEvent.bind(this), s = a.isIdle(), this.olddate = +new Date, this.pageX = null, this.pageY = null, s || (this.timeout = setTimeout(e.proxy(this.toggleIdleState, this), i.timeout)), l = void 0, this.addEventListeners()
                    },
                    addEventListeners: function() {
                        for (var e = i.events.split(" "), t = 0, n = e.length; t < n; t++) document.addEventListener(e[t], this.handleEvent, o())
                    },
                    removeEventListeners: function() {
                        for (var e = i.events.split(" "), t = 0, o = e.length; t < o; t++) document.removeEventListener(e[t], this.handleEvent)
                    },
                    handleEvent: function(t) {
                        if ("mousemove" === t.type) {
                            if (t.pageX === this.pageX && t.pageY === this.pageY) return;
                            if (void 0 === t.pageX && void 0 === t.pageY) return;
                            if (+new Date - this.olddate < 200) return
                        }
                        clearTimeout(this.timeout), s && this.toggleIdleState(t), this.pageX = t.pageX, this.pageY = t.pageY, this.timeout = setTimeout(e.proxy(this.toggleIdleState, this), i.timeout)
                    },
                    toggleIdleState: function(e) {
                        s = a.setIdle(!s), this.olddate = +new Date, t.broadcast((s ? "idle" : "active") + ".idleTimeout", {
                            config: i,
                            evt: e
                        })
                    },
                    destroy: function() {
                        n = null, clearTimeout(this.timeout), this.removeEventListeners()
                    }
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = o
        }).call(t, o(0))
    },
    40: function(e, t, o) {
        "use strict";
        (function(n, i) {
            function a() {
                this.init = function() {}
            }
            var s = o(15),
                l = (t = e.exports = function() {
                    return new a
                }, function() {
                    return {
                        tickerInput: void 0,
                        exchangeInput: void 0,
                        seoNameInput: void 0,
                        container: void 0,
                        horizontalAlignment: void 0,
                        smartboxTable: void 0,
                        lastServerQuery: void 0,
                        lastRawQuery: void 0,
                        highlightedSmartboxRow: void 0,
                        initialize: function(e, t) {
                            this.tickerInput = n(e), this.exchangeInput = n(t.exchangeInput), this.seoNameInput = n(t.seoNameInput), this.container = t.resultsContainer, this.horizontalAlignment = t.horizontalAlignment, this.resultsTable = t.resultsTable, this.form = n(this.tickerInput).closest("form")[0], null != t.smartboxTableColumns && void 0 != t.smartboxTableColumns && (this.smartboxTableColumns = t.smartboxTableColumns);
                            this.themeName = t.themeName || "undefined" != typeof themeName && themeName || this.themeNames.DailyFinance;
                            var o = {
                                submitOnSelection: !1,
                                submitButtonID: "",
                                smartBoxID: "",
                                moreText: "View all results for",
                                moreLink: null
                            };
                            this.options = n.extend(o, t), this.options.submitButtonID && this.options.smartboxID && (this.submitButtonID = this.options.submitButtonID, this.smartboxID = this.options.smartboxID), n(this.tickerInput).keydown(s.bind(this.onInputKeydown, this)), n(this.tickerInput).keyup(s.bind(this.onInputKeyup, this)), this.stoppedKeys = [this.keycodes.KEYALT, this.keycodes.KEYTAB], this.ajaxSequence = 0, n(document).on("click", "*:not(#ticker-smartbox)", this.hideSmartboxTable.bind(this)), n(this.form).submit(s.bind(this.validateForm, this)), n(this.tickerInput).click(s.bind(this.clearInputField, this)), t.noAutoFocus || this.tickerInput.select()
                        },
                        buildSmartboxTable: function(e, t) {
                            this.smartboxTable && this.smartboxTable.remove(), this.highlightedSmartboxRow = void 0;
                            var o = e.toUpperCase();
                            this.resultsTable ? this.smartboxTable = n("<table></table>").attr(this.resultsTable) : this.smartboxTable = n("<table></table>").attr({
                                id: "finance-smartbox-results"
                            });
                            var i = this.getLookupUrl(o),
                                a = s.template('<thead><tr><td style="padding-left: 485px;" colspan="3"></td></tr></thead><tfoot><tr><td class="predictive-search-results-link" colspan="3"><a href="<%= lookupUrl %>" id="view-all" target="_blank"><%= lookupText %> "<%= query %>"</a></td></tr></tfoot><tbody><%= tablerows %></tbody>'),
                                l = a({
                                    query: o,
                                    lookupText: this.options.moreText,
                                    lookupUrl: i,
                                    tablerows: ""
                                });
                            this.smartboxTable.append(l), s.each(t, function(e) {
                                this.createSmartboxTableRow(o, e)
                            }, this), n(this.smartboxTable).css({
                                position: "absolute",
                                top: this.tickerInput.offset().top + this.tickerInput.innerHeight()
                            });
                            var r = void 0 === this.horizontalAlignment ? {
                                left: this.tickerInput.offset().left
                            } : {
                                right: n(window).width() - (this.tickerInput.offset().left + this.tickerInput.outerWidth())
                            };
                            n(this.smartboxTable).css(r), n(this.smartboxTable).css(r), n(this.smartboxTable).css({
                                width: this.tickerInput.outerWidth()
                            }), n(document.body).append(void 0 === this.container ? this.smartboxTable : this.container.append(this.smartboxTable))
                        },
                        getLookupUrl: function(e) {
                            return this.options.moreLink ? this.options.moreLink.replace("TERM", e) : "https://finance.yahoo.com/1/lookup/?s=" + encodeURIComponent(e)
                        },
                        createSmartboxTableRow: function(e, t) {
                            var o = t.symbol,
                                i = t.company_name,
                                a = t.exchange,
                                l = t.country,
                                r = (t.seoname, o.replace(e, '<strong class="match">' + e + "</strong>"));
                            i = i.toUpperCase(), i.length > 100 && (i = i.substring(0, 99) + "…"), i = i.replace(e, '<strong class="match">' + e + "</strong>");
                            var c = s.template('<td class="predictive-search-results-result-symbol sym"><%= ticker %></td><td class="predictive-search-results-result-company-name comp"><%= companyname %></td><td class="predictive-search-results-result-exchange exch"><span style="white-space: nowrap"><%= exchange %></span></td>'),
                                d = c({
                                    ticker: r,
                                    companyname: i,
                                    exchange: "Index" == t.asset_class ? "" : a,
                                    query: e
                                }),
                                u = n('<tr class="predictive-search-results-result"></tr>').attr({
                                    "data-ticker": o,
                                    "data-exchange-code": a,
                                    "data-country-code": l
                                });
                            return this.smartboxTable.children("tbody").append(u), u.append(d), u.on("click", s.bind(this.onSmartboxRowClick, this)), u.on("mouseenter", s.bind(this.onSmartboxRowMouseover, this)), u.on("mouseleave", s.bind(this.onSmartboxRowMouseout, this)), u
                        },
                        resultShouldBeHidden: function(e) {
                            if (-1 === this.lastRawQuery.indexOf(":")) return !1;
                            var t = e.cc;
                            return t && "USA" === t
                        },
                        loadAutoCompleteResults: function(e) {
                            var t = this,
                                o = ++t.ajaxSequence;
                            n.ajax({
                                type: "GET",
                                url: "/amp-proxy/api/quotes/lookup/",
                                data: {
                                    keyword: e,
                                    domain: t.themeName
                                },
                                dataType: "jsonp",
                                jsonp: "callback",
                                crossDomain: !0,
                                cache: !0
                            }).done(function(n) {
                                o >= t.ajaxSequence && (t.lastRawQuery = e, t.lastServerQuery = t.normalizeQuery(e), t.processAutoCompleteResultsFromSolr(n))
                            })
                        },
                        processAutoCompleteResultsFromSolr: function(e) {
                            var e = e.response;
                            e.numFound > 0 ? (this.searchResults = e.quotes, this.buildSmartboxTable(this.lastServerQuery, this.searchResults)) : this.hideSmartboxTable()
                        },
                        enableSubmit: function() {
                            n(this.submitButtonID).enable()
                        },
                        hideSmartboxTable: function() {
                            this.smartboxTable && (this.highlightedSmartboxRow = void 0, this.smartboxTable.remove(), this.smartboxTable = void 0, this.lastRawQuery = void 0, this.lastServerQuery = void 0)
                        },
                        smartboxIsPresent: function() {
                            return this.smartboxTable && this.smartboxTable.is(":visible")
                        },
                        onInputKeydown: function(e) {
                            var t = e.keyCode;
                            if (t === this.keycodes.KEYENTER) this.enterSelectedSmartboxRow(this.highlightedSmartboxRow) || (e.preventDefault(), e.stopPropagation());
                            else if (t === this.keycodes.KEYDOWN) e.stopPropagation(), this.highlightNextSmartboxRow();
                            else if (t === this.keycodes.KEYUP) e.stopPropagation(), this.highlightPreviousSmartboxRow();
                            else if (t === this.keycodes.KEYESC) return e.stopPropagation(), this.hideSmartboxTable(), !1
                        },
                        onInputKeyup: function(e) {
                            return e.keyCode === this.keycodes.KEYESC ? (e.stopPropagation(), !1) : e.keyCode !== this.keycodes.KEYENTER && void this.smartboxQueryChanged()
                        },
                        onSmartboxRowClick: function(e) {
                            var t = this.getTableRowForEvent(e);
                            this.enterSelectedSmartboxRow(t)
                        },
                        submitForm: function(e) {
                            this.form.submit()
                        },
                        onSmartboxRowMouseover: function(e) {
                            var t = this.getTableRowForEvent(e);
                            this.highlightSmartboxRow(t)
                        },
                        onSmartboxRowMouseout: function(e) {
                            var t = this.getTableRowForEvent(e);
                            t.removeClass("select").removeClass("selected"), this.highlightedSmartboxRow === t && (this.highlightedSmartboxRow = void 0)
                        },
                        unhighlightSmartboxRows: function() {
                            var e = this.smartboxTable.children("tbody").children("tr.select");
                            n.each(e, function(e, t) {
                                n(t).removeClass("select").removeClass("selected")
                            })
                        },
                        highlightSmartboxRow: function(e) {
                            this.unhighlightSmartboxRows(), e.addClass("select").addClass("selected"), this.highlightedSmartboxRow = e
                        },
                        highlightNextSmartboxRow: function() {
                            if (this.smartboxIsPresent()) {
                                var e = this.getFirstSmartboxRow();
                                this.highlightedSmartboxRow && this.highlightedSmartboxRow.next().length && (e = this.highlightedSmartboxRow.next()), this.highlightSmartboxRow(e)
                            }
                        },
                        highlightPreviousSmartboxRow: function() {
                            if (this.smartboxIsPresent()) {
                                var e = this.getLastSmartboxRow();
                                this.highlightedSmartboxRow && this.highlightedSmartboxRow.prev().length && (e = this.highlightedSmartboxRow.prev()), this.highlightSmartboxRow(e)
                            }
                        },
                        getFirstSmartboxRow: function() {
                            return this.smartboxTable.children("tbody").children("tr:first")
                        },
                        getLastSmartboxRow: function() {
                            return this.smartboxTable.children("tbody").children("tr:last")
                        },
                        smartboxQueryChanged: function() {
                            var e = this.tickerInput.val(),
                                t = this.normalizeQuery(e);
                            if (this.lastServerQuery != t) return t ? void this.loadAutoCompleteResults(e) : void this.hideSmartboxTable()
                        },
                        normalizeQuery: function(e) {
                            if (!e) return "";
                            var t = e.toUpperCase().replace(/ /g, ""),
                                o = t.indexOf(":");
                            return -1 !== o && (t = e.substring(0, o)), t
                        },
                        extractTickerFromQuery: function(e) {
                            if (!e) return "";
                            var t = e.toUpperCase().replace(/ /g, ""),
                                o = e.length,
                                n = t.indexOf(":");
                            return -1 !== n && (t = t.substring(n + 1, o)), t
                        },
                        getTableRowForEvent: function(e) {
                            var t = n(e.target);
                            return "TR" === t.prop("tagName").toUpperCase() ? t : t.closest("tr")
                        },
                        validateForm: function(e) {
                            if (!this.tickerInput) return void e.stop();
                            e.preventDefault(), e.stopPropagation();
                            var t = self.tickerInput.val(),
                                o = "https://finance.yahoo.com/quote/" + t + "?p=" + t;
                            window.open(o, "_blank")
                        },
                        clearInputField: function(e) {
                            this.tickerInput._cleared || (this.tickerInput.val(""), this.tickerInput._cleared = !0, this.tickerInput.focus())
                        },
                        enterSelectedSmartboxRow: function(e) {
                            if (!e || 0 == n("#finance-smartbox-results").length) {
                                if (this.tickerInput) {
                                    var t = n(".get-quote-wrapper input").val(),
                                        o = "http://finance.yahoo.com/quote/" + t + "?p=" + t;
                                    return window.open(o), !1
                                }
                                return !1
                            }
                            var i = e.data();
                            this.tickerInput.val(i.ticker), this.exchangeInput.val(i.exchangeCode), this.seoNameInput.val(i.seoName), n("#country-code").val(i.countryCode), this.tickerInput.focus(), this.hideSmartboxTable();
                            var o = "https://finance.yahoo.com/quote/" + i.ticker + "?p=" + i.ticker;
                            window.open(o, "_blank")
                        },
                        smartboxTableColumns: 3,
                        keycodes: {
                            KEYLEFT: 37,
                            KEYUP: 38,
                            KEYRIGHT: 39,
                            KEYDOWN: 40,
                            KEYENTER: 13,
                            KEYBACKSPACE: 8,
                            KEYDELETE: 46,
                            KEYTAB: 9,
                            KEYALT: 18,
                            KEYESC: 27
                        },
                        themeNames: {
                            DailyFinance: "aol.com"
                        },
                        securityTypes: ["", "", "", "Preferred Stock", "Warrant", "Premium", "Trust", "Right", "Warrant Right", "Index", "Future", "Future Spread", "Option", "Equity Option", "Index Option", "Future Option", "Fixed Income", "Bond", "Convertible Bond", "Mortgage Backed", "Government Bond", "Corporate Bond", "US Agency Bond", "US Treasury Bill", "US Treasury Coupon", "Money Market", "CD", "Mutual Fund", "Mutual Fund", "Money Market Fund", "Unit Inv. Trust Ph. 1", "Unit Inv. Trust Ph. 2", "Currency", "Forex FRA", "Forex Deposit", "Forex Forward", "Market Indicator", "Fund", "ETF", "Loan", "", "Statistic"]
                    }
                });
            n.fn.TickerSearch = function(e) {
                return this.each(function() {
                    (new l).initialize(this, e)
                })
            }, n(".get-quote-wrapper input").each(function(e, t) {
                n(t).TickerSearch({
                    resultsContainer: i('<div class="search_suggest_quote_rr" />').attr({
                        id: "search_suggest_quote_rr_" + e
                    }),
                    noAutoFocus: !0,
                    submitOnSelection: !0,
                    moreText: "Search for",
                    moreLink: "https://finance.yahoo.com/lookup/?s=TERM",
                    smartboxTableColumns: 2
                })
            })
        }).call(t, o(0), o(0))
    },
    41: function(e, t, o) {
        "use strict";
        (function(o) {
            t = e.exports = function(e, t, n) {
                function i() {
                    o("#yahoo-finance-indices .tab-wrap .tab").each(function(e, t) {
                        o(this).slick({
                            cssEase: "cubic-bezier(0.230, 1.000, 0.320, 1.000)",
                            infinite: !0,
                            nextArrow: '<button type="button" class="slick-next"><span class="icon navicon-right"></span></button>',
                            prevArrow: '<button type="button" class="slick-prev"><span class="icon navicon-left"></span></button>',
                            slidesToScroll: 1,
                            slidesToShow: 2,
                            useTransform: !0,
                            variableWidth: !0
                        })
                    })
                }
                return {
                    init: function(e) {
                        var t = this;
                        o(".yahoo-finance-markets").length && (o(".yahoo-finance-markets .tab-nav li").on("click", function() {
                            var e = o(this).data("href"),
                                t = o(this).parents(".yahoo-finance-markets");
                            t.find(".tab-nav li, .tab").removeClass("active"), t.find(".tab." + e).addClass("active"), o(this).addClass("active")
                        }), o(".yahoo-finance-markets form .search-wrapper").on("click", function(e) {
                            var t = o(".yahoo-finance-markets form input").val();
                            t && window.open("https://finance.yahoo.com/quote/" + t + "?p=" + t, "_blank")
                        }), o(".yahoo-finance-markets form a").on("click", function(e) {
                            e.preventDefault();
                            o(".yahoo-finance-markets form").submit()
                        }), o(window).on("resize", t.resizeAndInitializeCarousel), t.resizeAndInitializeCarousel(), t.mobileSearchOpenClose())
                    },
                    resizeAndInitializeCarousel: function() {
                        o(window).width() < 970 ? (o("#yahoo-finance-indices .tab-wrap .tab.slick-initialized") && o("#yahoo-finance-indices .tab-wrap .tab.slick-initialized").slick("unslick"), i()) : o("#yahoo-finance-indices .tab-wrap .tab.slick-initialized").slick("unslick")
                    },
                    mobileSearchOpenClose: function() {
                        o(".yahoo-finance-markets").on("click", ".search-opener", function() {
                            o(".yahoo-finance-markets .get-quote-wrapper").removeClass("hide")
                        }), o(".yahoo-finance-markets").on("click", ".close-wrapper", function(e) {
                            e.preventDefault(), o(".yahoo-finance-markets .get-quote-wrapper").addClass("hide")
                        })
                    }
                }
            }
        }).call(t, o(0))
    },
    42: function(e, t, o) {
        "use strict";
        (function(n) {
            /*!
             * Newsletter Popup
             * @author: Eoin Thomas O'Hehir [tom.ohehir@teamaol.com]
             * @description: General logic for pop-ups related to newsletter signup.
             */
            var i = o(12),
                a = void 0;
            t = e.exports = function(e, t, o) {
                return {
                    config: {
                        email: n(".module-horoscope-newsletter-popup-embedded").find('input[name="email"]'),
                        signupResult: n(".module-horoscope-newsletter-popup-embedded").find(".horoscope-newsletter-popup-validation"),
                        errorReplacement: "Error: Can't complete the request ",
                        locale: {
                            messages: {
                                typeValidEmail: "Please enter a valid email address.",
                                thankYou: "Thank you for subscribing!",
                                noNewsletters: "You have not selected a newsletter to subscribe to.",
                                optOut: " has opted out of delivery from all AOL.com newsletters. ",
                                optIn: "You are opted back in and can sign up for newsletters again!"
                            }
                        }
                    },
                    init: function(e) {
                        var t = this;
                        a = new i, t.closePopup(), t.horoscopeCheck(), t.horoscopeSignup()
                    },
                    closePopup: function() {
                        n(".horoscope-newsletter-popup .navicon-close, .newsletter-modal-background").on("click", function() {
                            n(".horoscope-newsletter-popup, .newsletter-modal-background").hide(), n(".module-horoscopes .choose-your-sign, .module-horoscopes .choose-your-sign-select").off("click")
                        })
                    },
                    horoscopeCheck: function() {
                        var e = this;
                        n("html").hasClass("bon-article") && n(".horoscope-report-popup").length > 0 ? e.showHoroscopePopup() : n(".horoscope-report-popup").length > 0 && n(".module-horoscopes .choose-your-sign, .module-horoscopes .choose-your-sign-select").on("click", function(t) {
                            e.showHoroscopePopup()
                        })
                    },
                    showHoroscopePopup: function() {
                        if (!a.userIsSubscribedInCookie("horoscope-", !0)) return window.setTimeout(function() {
                            n(".horoscope-newsletter-popup, .newsletter-modal-background").show()
                        }, 1e4)
                    },
                    horoscopeSignup: function() {
                        var e = this,
                            t = n("<li></li>");
                        n("form.horoscope-newsletter-popup-signup").on("submit", function() {
                            if (event.preventDefault(), n(".horoscope-report-popup").length > 0) {
                                n(e.config.signupResult).html("<ul></ul>");
                                var o = n('form.horoscope-newsletter-popup-signup input[name="email"]').val(),
                                    i = n("form.horoscope-newsletter-popup-signup select.signup-option-select option:selected").val();
                                if (void 0 != i && "Sign" != i) {
                                    var s = "horoscope-" + i,
                                        l = "welcome-horoscopes-" + i;
                                    a.subscribeToNewsletter(o, s, function(t) {
                                        a.addNewsletterToUserSubscriptionCookie(s), e.signUpCallback(t, l, o)
                                    })
                                } else e.emptySignupResults(), t.html("Please select a horoscope sign."), n(e.config.signupResult).show().find("ul").append(t)
                            }
                        })
                    },
                    emptySignupResults: function() {
                        n(this.config.signupResult).find("ul").empty(), n(this.config.signupResult).find(".success").empty(), n(this.config.signupResult).hide(), n(this.config.signupResult).find(".success").hide()
                    },
                    signUpCallback: function(e, t, o) {
                        var i = this;
                        if (e.errormsg) {
                            var s = n("<li></li>");
                            "11" == e.error ? s.html(this.config.locale.messages.typeValidEmail) : "32" == e.error || "33" == e.error || "37" == e.error ? i.showOptin(s, e) : s.html(this.config.errorReplacement), n(this.config.signupResult).show().find(".success").hide(), n(this.config.signupResult).show().find("ul").html(s)
                        } else n(this.config.signupResult).show().html('<div class="success">' + this.config.locale.messages.thankYou + "</div>"), a.sendWelcomeEmail(t, o)
                    },
                    showOptin: function(e, t) {
                        var o = this,
                            i = n(o.config.email).val(),
                            s = n('<a href="#" class="ns-optin"> Click here to opt back in.</a>');
                        e.html(i + o.config.locale.messages.optOut), e.append(s), s.click(function(t) {
                            t.preventDefault(), a.newsletterOptBackIn(i, function(e) {
                                n(o.config.signupResult).show().find("ul").empty(), n(o.config.signupResult).show().find(".success").show().html(o.config.locale.messages.optIn)
                            }, function(t) {
                                e.html("There was a problem opting back in at this time. Please try again later.")
                            })
                        })
                    }
                }
            }
        }).call(t, o(0))
    },
    43: function(e, t, o) {
        "use strict";
        (function(n) {
            /*!
             * newsletter popup
             * @author: Roseanne Curtin [Roseanne.Curtin@teamaol.com]
             * @description: Newsletter popup is shown on article page for a number of channels/subchannels when user has read 3 articles in that category/subcategory or is signed into portfolios
             */
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                a = o(12),
                s = void 0;
            t = e.exports = function(e, t, o) {
                return {
                    config: {
                        popup: n(".newsletter-popup"),
                        popupBg: n(".newsletter-modal-background"),
                        close: n(".newsletter-popup .header .close"),
                        noNewsletterLink: n(".newsletter-popup .noNewsletter"),
                        daysToHidePopup: 30,
                        daysToSuppressPopups: 1,
                        module: n(".module-newsletter-popup"),
                        email: n(".module-newsletter-popup").find('input[name="email"]'),
                        sailthru_template: n(".module-newsletter-popup").find('input[name="template"]'),
                        sailthru_list: n(".module-newsletter-popup").find('input[name="list"]').val(),
                        newsletter_list: n(".module-newsletter-popup").find(".newsletter-signup").data("list"),
                        signupResult: n(".module-newsletter-popup").find(".validation"),
                        signupButton: n(".module-newsletter-popup").find(".signup"),
                        errorReplacement: "Error: Can't complete the request ",
                        popupHeight: "310px",
                        locale: {
                            messages: {
                                typeValidEmail: "Please enter a valid email address.",
                                thankYou: "Thank you for subscribing!",
                                noNewsletters: "You have not selected a newsletter to subscribe to.",
                                optOut: " has opted out of delivery from all AOL.com newsletters. ",
                                optIn: "You are opted back in and can sign up for newsletters again!"
                            },
                            errors: {
                                invalidEmail: "Invalid Email.",
                                alreadyExists: "Already Exists"
                            }
                        }
                    },
                    init: function(e) {
                        if (!(n(this.config.popup).length < 1)) {
                            e && "object" == (void 0 === e ? "undefined" : i(e)) && n.extend(this.config, e), s = new a(this.config);
                            var t = this;
                            if (this.applyBindings(), this.initialized = !0, !s.userIsSubscribedInCookie(this.config.newsletter_list) && (s.isEligibleForPopup(this.config.newsletter_list, 3) && s.updateNewsletterVisitsCookie(this.config.newsletter_list), s.shouldShowNewsletter(this.config.newsletter_list, 3))) {
                                if (!Site.email) return t.showPopup();
                                s.getUserSailthruSubscribtions(Site.email, function(e) {
                                    if (!e || !e.lists || !e.lists[t.config.newsletter_list]) return t.showPopup()
                                })
                            }
                        }
                    },
                    applyBindings: function() {
                        var e = this;
                        n(".newsletter-popup .header .close, .newsletter-modal-background").on("click", function(t) {
                            e.closePopup(), t.preventDefault()
                        }), this.config.noNewsletterLink.on("click", function(t) {
                            e.closePopup(), t.preventDefault()
                        });
                        var t = n(e.config.module).find("form");
                        n(t).submit(function(t) {
                            t.preventDefault(), e.signup(e, t)
                        });
                        n(e.config.email).click(function() {
                            "" == n(this).val() && (n(this).val(""), n(this).attr("value", ""), n(this).removeClass("initial"))
                        }), n(e.config.signupButton).click(function(t) {
                            t.preventDefault(), e.signup(e, t)
                        }), n(e.config.email).blur(function() {
                            "" == n(this).val() && n(this).addClass("initial")
                        })
                    },
                    showPopup: function() {
                        this.config.popup.show(), this.config.popup.parent().show(), this.config.popupBg.show(), s.setUserSawPopupCookie(), s.updateNewsletterVisitsCookie(this.config.newsletter_list, -1)
                    },
                    closePopup: function() {
                        this.config.popup.hide(), this.config.popup.parent().hide(), this.config.popupBg.hide()
                    },
                    signup: function(e, t) {
                        var e = this,
                            o = n("<li></li>"),
                            i = n(e.config.email).val(),
                            a = n(e.config.sailthru_template).val(),
                            l = e.config.sailthru_list;
                        return n(n(e.config.module).find(".initial")).length > 0 ? (e.emptySignupResults(), o.html(e.config.locale.messages.typeValidEmail), n(e.config.signupResult).show().addClass("error").find("ul").append(o), void e.config.popup.css("height", e.config.popupHeight)) : s.isValidEmailAddress(i) ? (e.emptySignupResults(), void s.subscribeToNewsletter(i, l, function(t) {
                            s.addNewsletterToUserSubscriptionCookie(e.config.newsletter_list), e.signUpCallback(t, a, i), s.updateNewsletterVisitsCookie(e.config.newsletter_list, -1)
                        })) : (e.emptySignupResults(), o.html(e.config.locale.messages.typeValidEmail), n(e.config.signupResult).show().addClass("error").find("ul").append(o), void e.config.popup.css("height", e.config.popupHeight))
                    },
                    emptySignupResults: function() {
                        n(this.config.signupResult).removeClass("error success").find("ul").empty()
                    },
                    signUpCallback: function(e, t, o) {
                        var i = this;
                        if (e.errormsg) {
                            var a = n("<li></li>");
                            "11" == e.error ? a.html(this.config.locale.messages.typeValidEmail) : "32" == e.error || "33" == e.error || "37" == e.error ? i.showOptin(a, e) : a.html(this.config.errorReplacement), n(this.config.signupResult).show().addClass("error").find("ul").html(a)
                        } else n(this.config.signupResult).show().addClass("success").html('<div class="">' + this.config.locale.messages.thankYou + "</div>"), i.config.popupHeight = "320px", s.sendWelcomeEmail(t, o);
                        i.config.popup.css("height", i.config.popupHeight)
                    },
                    showOptin: function(e, t) {
                        var o = this,
                            i = n(o.config.email).val(),
                            a = n('<a href="#" class="ns-optin"> Click here to opt back in.</a>');
                        e.html(i + o.config.locale.messages.optOut), e.append(a), o.config.popup.css("height", o.config.popupHeight), a.click(function(t) {
                            t.preventDefault(), s.newsletterOptBackIn(i, function(e) {
                                n(o.config.signupResult).show().find("ul").empty(), n(o.config.signupResult).show().find(".success").show().html(o.config.locale.messages.optIn), o.config.popup.css("height", o.config.popupHeight)
                            }, function(t) {
                                e.html("There was a problem opting back in at this time. Please try again later."), o.config.popup.css("height", o.config.popupHeight)
                            })
                        })
                    }
                }
            }
        }).call(t, o(0))
    }
}, [287]);