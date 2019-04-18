YUI.add("mega-header-constants", function(E, _) {
    E.namespace("TD").MegaHeaderConstants = {
        CLASS_PANEL_OPEN: "panel-open",
        CLASS_MENU_OPEN: "menu-open",
        CLASS_MUTED: "notif-muted",
        CLASS_PUSH_PROMOTE: "display-push-promos",
        FOLLOWABLE_STORE: "followable",
        DEFAULT_SUBSCRIPTION_NAME: "gondor_homerun_news",
        IE_LB_SHOW_EVENT: "ieInstallerLightbox:show",
        MAIL_COUNT_EVENT: "mail:count",
        MENU_OPEN_EVENT: "menu:open",
        MENU_CLOSE_EVENT: "menu:close",
        MODULE_NAVIGATION: "nav",
        MODULE_PROFILE: "uh-profile",
        MODULE_SEARCH_ASSIST: "sa",
        MODULE_SEARCH_BOX: "sb",
        MODULE_TRENDING: "tn,ct:all,pg:1,stl:crsl,b:270",
        NOTIFICATION_PARENT: "uh-notifications",
        ORIGIN_HISTORY: "search-history",
        ORIGIN_SEARCH_ASSIST: "search-assist",
        ORIGIN_SEARCH_BOX: "search-box",
        ORIGIN_SEARCH_BUTTON: "search-button",
        ORIGIN_SEARCH_RESULTS: "search-results",
        ORIGIN_TRENDING: "trending-now",
        SELECTOR_AC_LIST: ".yui3-aclist",
        SELECTOR_AC_ACTIVE_ITEM: ".yui3-aclist-item-active span",
        SELECTOR_ACCOUNT_SWITCH_LIST: "#uh-as-acct-list",
        SELECTOR_ACCOUNT_SWITCH_LOADING: "#uh-as-loading",
        SELECTOR_ACCOUNT_SWITCH_WELCOME: "#uh-as-welcome",
        SELECTOR_ACCOUNT_SWITCH_WELCOME_BUTTON: "#uh-as-welcome button",
        SELECTOR_AVATAR: "#uh-avatar",
        SELECTOR_BANNER: "#mega-banner",
        SELECTOR_BANNER_ADD: "#mega-banner-add",
        SELECTOR_BANNER_CLOSE: "#mega-banner-close",
        SELECTOR_BOTTOMBAR_COUNT: "#bottombar-mail-count",
        SELECTOR_BOTTOMBAR_COUNT_NUM: "#bottombar-mail-count-num",
        SELECTOR_BOTTOMBAR_DOT: "#bottombar-mail-dot",
        SELECTOR_CLEAR_QUERY_BUTTON: ".clear-query",
        SELECTOR_DIALPAD: "#uh-dialpad",
        SELECTOR_DIALPAD_PANEL: "#uh-dialpad-panel",
        SELECTOR_DIALPAD_MENU_BTN: "#uh-dialpad .uh-menu-btn",
        SELECTOR_EXTENSION_PROMO: "#mega-top-ext-promo",
        SELECTOR_GHOST_INPUT: "#uh-ghost-box",
        SELECTOR_HOME: ".uh-home-link",
        SELECTOR_HELPMENU: "#uh-help",
        SELECTOR_HELPMENU_PANEL: "#uh-help-panel",
        SELECTOR_HELPMENU_BTN: "#uh-help .uh-menu-btn",
        SELECTOR_IE_INSTALLER_LB: "#ieInstallerLightbox",
        SELECTOR_LOGO: "#uh-logo",
        SELECTOR_MAIL: "#uh-mail",
        SELECTOR_MAIL_LINK: "#uh-mail-link",
        SELECTOR_MAIL_COUNT: ".uh-mail-count",
        SELECTOR_MAIL_PREVIEW: ".uh-mail-preview",
        SELECTOR_MAIL_PREVIEW_MENU: ".uh-mailpreview-menu",
        SELECTOR_MENU: ".uh-menu",
        SELECTOR_MENU_PANEL: ".uh-menu-panel",
        SELECTOR_MENU_BTN: ".uh-menu-btn",
        SELECTOR_NAV_MENU: ".navigation-menu",
        SELECTOR_NAV_MENU_TITLE: ".navigation-menu-title",
        SELECTOR_NOTIFICATIONS: "#uh-notifications",
        SELECTOR_NOTIFICATION_CLIENT_ITEM: "a.yns-link",
        SELECTOR_NOTIFICATION_CLIENT_NAV: "a.yns-navigate-center",
        SELECTOR_NOTIFICATIONS_MENU_BTN: "#uh-notifications .uh-menu-btn",
        SELECTOR_NOTIFICATION_ITEM: ".uh-notification",
        SELECTOR_NOTIFICATION_COUNT: ".uh-notification-count",
        SELECTOR_NOTIFICATION_CTRL: "#uh-notification-ctrl",
        SELECTOR_NOTIFICATION_CTRL_BTN: "#uh-notification-ctrl-btn",
        SELECTOR_NOTIFICATION_PANEL: ".uh-notification-panel",
        SELECTOR_PUSH_SUBSCRIBE: ".js-push-subscribe",
        SELECTOR_PROMOTED_NOTIFICATION_BTN: "#uh-promoted-notification-btn",
        SELECTOR_PROFILE: "#uh-profile",
        SELECTOR_SIGNOUT: "#uh-signout",
        SELECTOR_SEARCH_APPLET: "#uh-search",
        SELECTOR_SEARCH_BUTTON: "#uh-search-button",
        SELECTOR_SEARCH_FORM: "#uh-search form",
        SELECTOR_SEARCH_INPUT: "#uh-search-box",
        SELECTOR_SEARCH_INPUT_TD: ".td-uh-searchbox",
        SELECTOR_SEARCH_PROMO: "#uh-search-promo",
        SELECTOR_SEARCH_PROMO_CLOSE: "#uh-search-promo-close",
        SELECTOR_SCROLL_PROMO_ADD: "#uh-scroll-promo-add",
        SELECTOR_SCROLL_PROMO_CLOSE: "#uh-scroll-promo-close",
        SELECTOR_SCROLL_PROMO: "#uh-scroll-promo",
        SELECTOR_TOPBAR: "#mega-topbar",
        SELECTOR_TRENDING_APPLET: ".trending",
        SELECTOR_TRENDING_TERMS: ".trending-item a",
        SELECTOR_TRENDING_SRP_TERMS: ".trendingnowcarouselv2 a",
        SELECTOR_UH: "#mega-uh",
        SELECTOR_UH_RIGHT_PANEL: ".uh-right-panel",
        SELECTOR_UNDERBELL_PROMO: "#uh-underbell-promo",
        SELECTOR_UNDERBELL_PROMO_CLOSE: "#uh-underbell-promo-close",
        SELECTOR_UNFOLLOW_BTN: ".uh-unfollow-btn",
        SELECTOR_VIDEO: ".uh-video-link",
        TRIGGER_CLICK: "click",
        TRIGGER_ENTER: "enter",
        TRIGGER_NAVIGATION: "navigation",
        TRIGGER_PAUSE: "pause"
    }
}, "@VERSION@");
YUI.add("mega-header-extension-helper", function(e) {
    var n = e.Cookie,
        i = e.TD.MegaHeaderConstants;

    function s(e) {
        var n = this;
        n.appletConfig = e.appletConfig || {}, n.config = n.appletConfig.extensionHelper || {}, n.userAgent = n.appletConfig.userAgent || {}, n._handles = [], n.init()
    }
    s.prototype = {
        init: function() {
            var n = this;
            n.enableIEInstallerLightbox = !1, n.checkIsPrivateSession(), n._handles.push(e.Af.Event.on("extension:install", n.handleInstall, n)), n._handles.push(e.Af.Event.on("extension:verify", n.handleVerification, n))
        },
        handleInstall: function(e) {
            var n = this,
                i = n.config.extensions || {},
                s = n.userAgent.browserName,
                o = n.userAgent.browserVersion,
                t = e.name,
                r = i[t] && i[t][s] || {},
                a = r.url || "",
                c = n.config.hashTag,
                l = {
                    chrome: n.installChromeExtension,
                    firefox: n.installFirefoxExtension,
                    explorer: n.installExplorerRegistryKey
                };
            "firefox" === s && o >= 57 && (a = r.xpi), a && l[s] && (c && document && document.location && (document.location.hash = c), l[s].call(n, a, e.callback))
        },
        handleVerification: function(e) {
            var n, i = this,
                s = e.name,
                o = i.config.extensions || {},
                t = o[s],
                r = e.callback,
                a = i.userAgent.browserName,
                c = {
                    chrome: [i.checkIsPrivateSession, i.checkIsExcludedVersion, i.checkHasMarkupFlag, i.checkIsPartnerTraffic],
                    firefox: [i.checkIsExcludedVersion, i.checkHasMarkupFlag, i.checkIsPartnerTraffic],
                    explorer: [i.checkIsExcludedVersion, i.checkDependenciesFail, i.checkIsPartnerTraffic]
                },
                l = !1;
            if (t && c[a] && c[a].length)
                for (n = 0; n < c[a].length && (l = !c[a][n].call(i, s)); n += 1);
            return r && r(l), l
        },
        shouldEnableIEInstallerLightbox: function() {
            return this.enableIEInstallerLightbox
        },
        checkIsPrivateSession: function() {
            var e, n = this,
                i = n.userAgent.browserName || "",
                s = function() {
                    n.isPrivateSession = !0
                },
                o = function() {
                    n.isPrivateSession = !1
                };
            if ("undefined" == typeof n.isPrivateSession) try {
                "chrome" === i.toLowerCase() && (e = window.RequestFileSystem || window.webkitRequestFileSystem) && e(window.TEMPORARY, 100, o, s)
            } catch (t) {
                o()
            }
            return n.isPrivateSession
        },
        checkIsExcludedVersion: function(e) {
            var n = this,
                i = n.userAgent.browserName,
                s = n.userAgent.browserVersion,
                o = n.userAgent.os,
                t = n.config.extensions || {},
                r = t[e] && t[e][i],
                a = !0;
            return r && (!r.minVersion || s >= r.minVersion) && (!r.maxVersion || s <= r.maxVersion) && (!r.os || r.os.indexOf(o) >= 0) && (a = !1), a
        },
        checkHasMarkupFlag: function(n) {
            var i, s = this,
                o = s.config.extensions || {},
                t = o[n] || {},
                r = t.markupFlagSelector,
                a = t.markupFlagClassName,
                c = !1;
            return a && r && (i = e.one(r)) && i.hasClass(a) && (c = !0), c
        },
        checkIsPartnerTraffic: function() {
            var e = this,
                n = !1,
                i = e.config.extensions || {},
                s = i.partnerDisable;
            return !s || -1 === window.location.href.search("[?&]fr=") && -1 === window.location.href.search("[?&]yhs=") || (n = !0), n
        },
        checkDependenciesFail: function(e) {
            var n = this,
                i = !1;
            return "homepage" === e && ((i = n.checkIsHomepageSet() || n.checkHasNoIEInstallerLightbox()) || (n.enableIEInstallerLightbox = !0)), i
        },
        checkIsHomepageSet: function() {
            var n = e.Object.getValue(e.config.win, ["history", "length"]);
            return this.checkHasHpCookie() || 1 === n
        },
        checkHasHpCookie: function() {
            return "1" === n.get("HP")
        },
        checkHasNoIEInstallerLightbox: function() {
            return !e.one(i.SELECTOR_IE_INSTALLER_LB)
        },
        installChromeExtension: function(e, n) {
            e && (window.open(e, "_blank"), n && n(!0))
        },
        installFirefoxExtension: function(e, n) {
            if (e) {
                var i = ".xpi" === e.substr(-4) ? "_self" : "_blank";
                window.open(e, i), n && n(!0)
            }
        },
        installExplorerRegistryKey: function(e, n) {
            e && (e.indexOf("hpset") > 0 && this.setHPCookie(), window.open(e, "_self"), n && n(!0))
        },
        setHPCookie: function() {
            n.set("HP", "1", {
                path: "/",
                domain: ".yahoo.com"
            })
        },
        cleanup: function() {
            e.Array.each(this._handles, function(e) {
                e.detach()
            }), this._handles = []
        }
    }, e.namespace("TD").megaHeaderExtensionHelper = s
}, "@VERSION@", {
    requires: ["node", "af-event"]
});
YUI.add("mega-header-menu-mixin", function(e) {
    var n = e.TD.MegaHeaderConstants,
        t = e.Af.rapid,
        i = t.getRapidTracker(),
        a = "blur",
        s = "click",
        u = "focus",
        o = "hover",
        l = "mouseenter",
        r = /^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i;
    e.namespace("TD").MegaHeaderMenuMixin = {
        initializeMenu: function(n, t, i, r) {
            var d = this;
            d.containerNode = !(!n || !n.one) && n, d.menu = !(!d.containerNode || !t) && d.containerNode.one(t), d.menuBtn = !(!d.containerNode || !i) && d.containerNode.one(i), d.menuPanel = !(!d.containerNode || !r) && d.containerNode.one(r), d.containerNode && d.menu && d.menuBtn && d.menuPanel && (d._handles || (d._handles = []), d._handles.push(d.containerNode.delegate(u, e.bind(this.handleMenuBtnFocus, this), i)), d._handles.push(d.containerNode.delegate(l, e.bind(this.handleMenuBtnHover, this), i)), d._handles.push(d.containerNode.delegate(s, e.bind(this.handleMenuBtnClick, this), i)), d._handles.push(d.containerNode.delegate(o, e.bind(this.handleMenuHover, this), t)), d._handles.push(d.containerNode.delegate(a, e.bind(this.handleMenuBlur, this), t)), d._handles.push(d.menuPanel.delegate(s, e.bind(this.handleLinkClick, this), "a")), d._handles.push(d.menuPanel.delegate(s, e.bind(this.handleButtonClick, this), "button")))
        },
        handleMenuBtnFocus: function(e) {
            var n = this;
            n.isMenuPanelVisible() || (n.trackMenuOpenEvent(u), n.openMenu())
        },
        handleMenuBtnHover: function(e) {
            var n = this;
            n.isMenuPanelVisible() || (n.trackMenuOpenEvent(o), n.openMenu())
        },
        handleMenuBtnClick: function(e) {
            var n = this;
            n.isMenuPanelVisible() ? n.closeMenu() : (n.trackMenuOpenEvent(s), n.openMenu())
        },
        handleMenuHover: function(e) {
            this.closeMenu()
        },
        handleMenuBlur: function(t) {
            e.later("50", this, function() {
                var i = t.target.ancestor(n.SELECTOR_MENU),
                    a = i && i.get("id"),
                    s = e.one(document.activeElement).ancestor(n.SELECTOR_MENU);
                s && a && s.get("id") === a || i && i.removeClass(n.CLASS_PANEL_OPEN)
            })
        },
        handleLinkClick: function(e) {
            var n, i, a, s, u, o, l = e.currentTarget,
                d = l && !l.hasClass("rapidnofollow"),
                c = {
                    tar: (s = l, u = s && s.getAttribute && s.getAttribute("href") || "", o = u && u.match(r), o && o[1] || ""),
                    tar_uri: (n = l, i = n && n.getDOMNode && n.getDOMNode(), a = i && i.pathname, a ? a.substring(0, 300) : "")
                };
            l && d && t.triggerBeaconClickEvent(l, c)
        },
        handleButtonClick: function(e) {
            var n = e.currentTarget;
            n && t.triggerBeaconClickEvent(n)
        },
        isMenuPanelVisible: function() {
            return "hidden" !== this.menuPanel.getStyle("visibility")
        },
        openMenu: function() {
            this.menu.addClass(n.CLASS_PANEL_OPEN), this.menu.fire(n.MENU_OPEN_EVENT)
        },
        closeMenu: function() {
            this.menu.removeClass(n.CLASS_PANEL_OPEN), this.menu.fire(n.MENU_CLOSE_EVENT)
        },
        flashMenu: function(n) {
            var t = this;
            n = n || 4e3, t.openMenu(), t.beaconPanelLinkViews(), e.later(n, t, function() {
                t.closeMenu()
            })
        },
        trackMenuOpenEvent: function(n) {
            var i, a;
            t && (i = this, a = 2, n === s && (a = i.menuBtn.getAttribute("href") ? 0 : 1), e.later(500, i, function() {
                i.isMenuPanelVisible() && (t.triggerBeaconClickEvent(i.menuBtn, {
                    itc: a
                }), i.beaconPanelLinkViews())
            }))
        },
        beaconPanelLinkViews: function() {
            var e, n;
            i && (n = {
                sec: "hd",
                t1: "a1",
                t2: "hd",
                _links: []
            }, (e = this).menuPanel.all("a,button").each(function(i) {
                var a = t.parseYLK(i),
                    s = e._isVisible(i.getDOMNode());
                a && a.slk && s && n._links.push(a)
            }), i.beaconLinkViews([n]))
        },
        _isVisible: function(e) {
            if (e) {
                var n = window.getComputedStyle(e, null);
                return n && "none" !== n.display && "hidden" !== n.visibility && null !== e.offsetParent
            }
        }
    }
}, "@VERSION@", {
    requires: ["node", "event", "af-event", "mega-header-constants"]
});
YUI.add("mega-header-plugin-account-switch", function(e) {
    var t, i, n, s, o, r, a, c, u;

    function l(t) {
        var i = this;
        i.appletConfig = t.appletConfig || {}, i.config = i.appletConfig.accountSwitchData || {}, i.model = t.appletModel || {}, i.appletView = t.appletView, i.intl = i.model.get("intl"), i.panel = e.one(o), i.ycookie = c(), window.processDeviceUsers = function(e) {
            i.fsDataReady(e)
        }, i.init()
    }
    window.processDeviceUsers || (t = e.TD.MegaHeaderConstants, i = e.TD.MegaHeaderMenuMixin, n = t.SELECTOR_UH, s = [t.SELECTOR_PROFILE, t.SELECTOR_MENU_BTN].join(" "), o = [t.SELECTOR_PROFILE, t.SELECTOR_MENU_PANEL].join(" "), r = "D(n)", a = e.Escape.regexp, c = function() {
        return e.Cookie.getSub("Y", "l")
    }, u = function(t) {
        e.Cookie.setSub("ucs", "fs", t, {
            expires: new Date("January 12, 2025"),
            domain: "yahoo.com",
            path: "/"
        })
    }, l.prototype = {
        init: function() {
            var i = this;
            i.initializeMenu(i.appletConfig.container, t.SELECTOR_PROFILE, s, o), i.blurHandler = e.one(window).on("blur", i.handleWindowBlur, i), i.focusHandler = e.one(window).on("focus", i.handleWindowFocus, i), i.panel.delegate("click", i.preventDoubleClick(), "a"), "visible" !== i.panel.getStyle("visibility") ? i.addRequestHandlers() : i.sendJsonpRequest()
        },
        removeWindowEventHandlers: function() {
            this.blurHandler.detach(), this.focusHandler.detach()
        },
        render: function() {
            var e = this;
            e.intl && e.intl.messages && e.intl.messages.SIGNOUT && e.config && dust.render("td-applet-mega-header-templates-accountSwitchPanel", {
                intl: e.intl,
                accountSwitchData: e.config
            }, function(t, i) {
                t || (e.panel && e.panel.set("innerHTML", i), e.config.userIntentMgmt && e.panel && window && window.wafer && window.wafer.base.sync(e.panel.getDOMNode()))
            })
        },
        fsDataReady: function(t) {
            this.jsonpRequestPending = !1, "string" == typeof t && (t = e.JSON.parse(t));
            var i = t && t.result && parseInt(t.result, 10) || 0;
            this.config.renderComplete = !0, !t || i > 0 ? this.handleError() : (this.initWelcomeEvent(), t = this.updateAvatars(t), this.setContent(t))
        },
        updateAvatars: function(t) {
            var i, n, s, o = t.users,
                r = this.config.alphatar,
                a = this.config.useAvatar;
            for (n = 0, s = o.length; n < s; n++) i = o[n], a && e.Lang.isString(i.imageUrl) ? i.imageUrl && /(profile_|39361574426_98028a_)/.test(i.imageUrl) && (i.fn && r.enabled && /^[a-zA-Z]/.test(i.fn) ? i.imageUrl = r.urlPath + i.fn[0].toUpperCase() + r.imgType : i.imageUrl = null) : i.imageUrl = null;
            return t
        },
        handleError: function() {
            this.isYCookieValid() && (this.config.users = null, this.config.crumbError = !0), this.removeWindowEventHandlers(), this.render()
        },
        sendJsonpRequest: function() {
            this.removeRequestHandlers(), this.jsonpRequestPending || this.config.cookieError || (this.jsonpRequestPending = !0, e.Get.js(this.config.jsonpUrl), this.initTimeoutError())
        },
        initTimeoutError: function() {
            var t = this.config.errorTimeout;
            this.clearTimeoutError(), this.errTimeout = e.later(t, this, this.handleTimeoutError)
        },
        clearTimeoutError: function() {
            this.errTimeout && this.errTimeout.cancel()
        },
        handleTimeoutError: function() {
            this.jsonpTimedout || (this.jsonpTimedout = !0), this.setContent({}), this.addRequestHandlers()
        },
        addRequestHandlers: function() {
            this.mouseMoveRequest = e.one(n).once("mousemove", this.sendJsonpRequest, this), this.clickSendRequest = e.one(s).once("click", this.sendJsonpRequest, this), this.focusSendRequest = e.one(s).once("focus", this.sendJsonpRequest, this)
        },
        removeRequestHandlers: function() {
            this.mouseMoveRequest && this.mouseMoveRequest.detach(), this.clickSendRequest && this.clickSendRequest.detach(), this.focusSendRequest && this.focusSendRequest.detach()
        },
        handleWindowBlur: function() {
            this.clearTimeoutError(), e.one(t.SELECTOR_PROFILE).once("mousemove", this.handleWindowFocus, this)
        },
        handleWindowFocus: function() {
            this.isYCookieValid() || (this.removeWindowEventHandlers(), this.render())
        },
        isYCookieValid: function() {
            var e = c();
            return !(!e || this.ycookie !== e) || (this.config.cookieError = !0, this.config.main_user = null, this.config.users = null, !1)
        },
        initWelcomeEvent: function() {
            this.config.showWelcome && (this.welcomeTriggerEvt = e.one(s).once(["mousemove", "mouseenter", "click", "focus"], this.handleTriggerMove, this))
        },
        handleTriggerMove: function(t) {
            this.welcomeTimeout && this.welcomeTimeout.cancel(), this.welcomeTimeout = e.later(this.config.welcomeMsgTimeout, this, this.handleWelcomeTimeout)
        },
        handleWelcomeTimeout: function() {
            "0" !== this.panel.getStyle("opacity") ? (u(1), this.showMessage(), this.config.showMessage = !1, this.removeWelcomeEvent()) : this.initWelcomeEvent()
        },
        removeWelcomeEvent: function() {
            this.welcomeTriggerEvt && this.welcomeTriggerEvt.detach()
        },
        setContent: function(t) {
            var i, n, s, o;
            if (this.clearTimeoutError(), t.users) {
                for (s = 0, o = t.users.length; s < o; s++)
                    if (n = parseInt(t.users[s].state, 10), e.Array.indexOf([0, 3], n) >= 0) {
                        i = t.users.splice(s, 1)[0];
                        break
                    } if (i && (this.config.main_user = i), t.users.length > 0) {
                    for (s = 0, o = t.users.length; s < o; s++) t.users[s].switchUrl = this.config.switchUrl.replace("{alias}", t.users[s].alias), t.users[s].acctPos = s + 1;
                    this.config.users = t.users
                }
            }
            this.render(), this.rendered = !0
        },
        showMessage: function() {
            var i, n, s, o, c = e.one(t.SELECTOR_ACCOUNT_SWITCH_WELCOME),
                u = (s = (i = c).get("className"), o = i.getStyle("top"), i.setStyle("top", -300), i.replaceClass(a(r), "Pos(a)"), n = i.get("offsetHeight"), i.set("className", s), i.setStyle("top", o), n),
                l = this.anim = new e.Anim({
                    node: c,
                    from: {
                        height: 0
                    },
                    to: {
                        height: u
                    },
                    duration: .4
                });
            l.on("start", function() {
                var e = a(r);
                c.hasClass(e) && (c.setStyle("height", 0), c.removeClass(e))
            }, this), l.on("end", function() {
                e.one(t.SELECTOR_ACCOUNT_SWITCH_WELCOME_BUTTON).on("click", this.hideMessage, this)
            }, this), l.run()
        },
        hideMessage: function() {
            this.anim.set("reverse", !0), this.anim.run()
        },
        preventDoubleClick: function(e) {
            var t, i;
            return e = e || 5e3, i = !1,
                function(n) {
                    i ? n.halt() : (i = !0, t = setTimeout(function() {
                        i = !1, clearTimeout(t), t = null
                    }, e))
                }
        },
        cleanup: function() {
            this.removeWindowEventHandlers(), this.removeRequestHandlers(), this.clearTimeoutError(), this.removeWelcomeEvent()
        }
    }, e.mix(l.prototype, i), e.namespace("TD").megaHeaderAccountSwitch = l)
}, "@VERSION@", {
    requires: ["node", "event-custom", "event-move", "event-mouseenter", "mega-header-constants", "mega-header-menu-mixin", "get", "anim", "json-parse", "escape"]
});
YUI.add("mega-header-plugin-autocomplete", function(t, e) {
    var n = ["output=sd1", "callback={callback}", "command={query}"],
        a = "Reader-open",
        r = "-m",
        o = "value",
        s = /\S/,
        i = 13,
        u = 39,
        c = t.TD.MegaHeaderConstants,
        p = !1,
        h = !1;

    function l(e) {
        var n = this;
        return n.container = e.container, n.docEl = t.one("html"), n.appletConfig = e.appletConfig, n.bucket = n.appletConfig.bucket, n.autocompleteConfig = n.appletConfig.search && n.appletConfig.search.autocomplete || null, n.searchForm = n.container.one(c.SELECTOR_SEARCH_FORM), n.searchTextInput = n.container.one(c.SELECTOR_SEARCH_INPUT), n.searchBtn = n.container.one(c.SELECTOR_SEARCH_BUTTON), n.clearQueryBtn = n.container.one(c.SELECTOR_CLEAR_QUERY_BUTTON), n.ghostTextInput = n.container.one(c.SELECTOR_GHOST_INPUT), n.ghostEnabled = n.ghostTextInput && n.clearQueryBtn && n.autocompleteConfig && n.autocompleteConfig.ghostEnabled, n.frInput = n.searchForm.one('input[name="fr"]'), n.typeInput = n.searchForm.one('input[name="type"]'), n._handles = [], n.frInput && n.frInput.set(o, n.frInput.getAttribute("data-fr")), n.typeInput && n.typeInput.set(o, n.typeInput.getAttribute("data-type")), n.autocompleteConfig && n.searchForm && n.searchTextInput && (n.prepareParams(), n.plugAutoComplete()), n.searchTextInput.ac.cleanup = function() {
            t.Array.each(n._handles, function(t) {
                t.detach(), t = null
            }), n._handles = []
        }, n.searchTextInput.ac
    }
    l.prototype = {
        prepareParams: function() {
            var t, e = this,
                a = n,
                r = e.appletConfig.search.autocomplete.additionalParams;
            if (r)
                for (t in r) r.hasOwnProperty(t) && a.push(t + "=" + r[t]);
            e.acParams = a
        },
        plugAutoComplete: function() {
            var e, n, a, r, l, g = this,
                d = g.autocompleteConfig.plugin,
                f = 1,
                m = g.appletConfig.search && g.appletConfig.search.i13nSuggestionString || "";
            m = m.replace("cposV", "{position}").replace("t9Val", "{totalresults}"), a = '<span id="uh-assist-link-{position}" data-position="{position}" data-ylk="' + m + '">{highlighted}</span>', r = t.Af.rapid, l = r.getRapidTracker(), g._handles.push(g.searchTextInput.on("keypress", function(n) {
                e = g.searchTextInput.get(o), n.keyCode === i && e && (n.preventDefault(), p = !0, g.addViewerSearchAttribution(), r.triggerBeaconClickEvent(g.searchBtn, {
                    elm: "kb-ent"
                }, t.bind(g.submitForm, g))), 1 === f && n.keyCode !== i && (l.beaconEvent("keybrd", r.parseYLK(g.searchTextInput)), f += 1)
            })), g.ghostEnabled && (g._handles.push(g.clearQueryBtn.on("click", function(t) {
                r.triggerBeaconClickEvent(g.clearQueryBtn)
            })), g._handles.push(g.searchTextInput.on("keydown", function(t) {
                t.keyCode === u && g.ghostTextInput.get(o) && g.setSearchQuery({
                    query: g.ghostTextInput.get(o)
                })
            })), g._handles.push(g.searchTextInput.on("valuechange", function(t) {
                g.searchTextInput.get(o).length && g.clearQueryBtn.removeClass("Hidden"), g.updateGhostInput()
            }))), d.on = {
                select: function(e) {
                    n = g.container.one(c.SELECTOR_AC_ACTIVE_ITEM), g.frInput && g.frInput.set(o, g.frInput.getAttribute("data-fr") + "-s"), g.addViewerSearchAttribution(), g.searchForm.getAttribute("data-assist-action") && g.searchForm.setAttribute("action", g.searchForm.getAttribute("data-assist-action")), r.triggerBeaconClickEvent(n, !1, t.bind(g.submitForm, g))
                },
                activeItemChange: function(t) {
                    var e = t.newVal && t.newVal.getData("text");
                    e && (h = !0, g.searchTextInput.set(o, e))
                },
                query: function(t) {
                    h && (t.preventDefault(), h = !1), this._lastInputKey === i && (t.halt(), this.hide())
                }
            }, d.source = g.autocompleteConfig.host + "?" + g.acParams.join("&"), d.resultListLocator = function(t) {
                return t && t.r || []
            }, d.resultTextLocator = function(t) {
                return t.k
            }, d.resultFormatter = function(e, n) {
                var r = 0,
                    o = n.length,
                    s = n[0];
                return g.ghostEnabled && g.updateGhostInput(s.text), t.Array.map(n, function(e) {
                    return r += 1, t.Lang.sub(a, {
                        highlighted: e.highlighted,
                        position: r,
                        totalresults: o
                    })
                })
            }, d.tabSelect = !1, d.queryDelay = 100, d.resultHighlighter = "startsWith", g.searchTextInput.plug(t.Plugin.AutoComplete, d), (e = g.searchTextInput.get(o)) && e.length >= g.searchTextInput.ac.get("minQueryLength") && (g.searchTextInput.ac.sendRequest(e), l.beaconEvent("keybrd", r.parseYLK(g.searchTextInput))), g._handles.push(g.searchBtn.on("click", function(e) {
                e.preventDefault(), s.test(g.searchTextInput.get(o)) && !p && (g.addViewerSearchAttribution(), r.triggerBeaconClickEvent(g.searchBtn, !1, t.bind(g.submitForm, g)))
            })), g.sendPerfBeacon()
        },
        addViewerSearchAttribution: function() {
            var t, e, n, s, i = this;
            i.docEl.hasClass(a) && (i.frInput && (t = i.frInput.getAttribute("data-fr") || "", (e = i.frInput.get(o) || "").indexOf(r, t.length) < 0 && i.frInput.set(o, e + r)), i.typeInput && (n = i.typeInput.getAttribute("data-type") || "", (s = i.typeInput.get(o) || "").indexOf(r, n.length) < 0 && i.typeInput.set(o, s + r)))
        },
        submitForm: function() {
            var t = this.searchTextInput.get(o);
            s.test(t) && (this.ghostEnabled && this.ghostTextInput.set(o, t), this.searchForm.submit())
        },
        setSearchQuery: function(t) {
            var e = t ? t.query : "";
            this.searchTextInput.set(o, e), this.ghostTextInput.set(o, e), this.clearQueryBtn.toggleClass("Hidden", !e)
        },
        updateGhostInput: function(t) {
            var e = this.searchTextInput.get(o) || "",
                n = this.ghostTextInput.get(o) || "",
                a = s.test(e),
                r = t ? t.toLowerCase() : n.toLowerCase(),
                i = 0 === r.indexOf(e.toLowerCase()),
                u = -1 !== r.indexOf(e.toLowerCase().trim());
            a && i ? (r = e + r.substring(e.length, r.length), this.ghostTextInput.set(o, r)) : u || this.ghostTextInput.set(o, "")
        },
        sendPerfBeacon: function() {
            var e, n, a = this,
                r = "saready",
                o = Date.now(),
                s = t.Object.getValue(window, ["performance", "timing", "navigationStart"]),
                i = t.Object.getValue(window, ["performance", "timing", "domLoading"]);
            s && i && (n = "/p.gif?beaconType=" + r + "&timeFromNavigationStart=" + (o - s) + "&timeFromDomLoading=" + (o - i) + "&bucket=" + a.bucket, (e = new Image).height = 0, e.width = 0, e.src = n)
        }
    }, t.namespace("TD").megaHeaderAutoComplete = l
}, "@VERSION@", {
    requires: ["node", "autocomplete", "autocomplete-highlighters", "autocomplete-list", "mega-header-constants"]
});
YUI.add("mega-header-plugin-avatar-cp", function(a) {
    var t = "default-avatar",
        e = "IconProfile",
        r = a.TD.MegaHeaderConstants;

    function n(a) {
        var t, e;
        this.syncContext = a.appletModel.syncContext, t = this, e = a.container, t.config = a.appletConfig || {}, t.alphatar = t.config.alphatar || {}, t.avatarIcon = e.one(r.SELECTOR_AVATAR), t.profileNode = e.one(r.SELECTOR_PROFILE), t.getAvatar()
    }
    n.prototype = {
        getAvatar: function() {
            var t = this;
            t.avatarIcon && a.Af.Transport.read("mega-header-avatar-cp", {}, this.syncContext, function(a, e) {
                !a && e && t.processAvatar(e.imgUrl || null, e.firstName || null)
            })
        },
        processAvatar: function(a, t) {
            var e = this,
                r = e.config.useAvatar;
            r ? a ? (e.setAvatarImage(a), e.setFirstName(t || null)) : t && e.hasAlphatar(t) && e.alphatar.urlPath && e.alphatar.imgType && e.setAvatarImage(e.alphatar.urlPath + t[0].toUpperCase() + e.alphatar.imgType) : e.useDefaultAvatar()
        },
        hasAlphatar: function(a) {
            return this.alphatar.enabled && /^[a-zA-Z]/.test(a)
        },
        setAvatarImage: function(a) {
            var r = this;
            r.avatarIcon.setStyle("background", "url(" + a + ") 0 0 / 34px 34px no-repeat"), r.avatarIcon.removeClass(e), r.profileNode.removeClass(t)
        },
        setFirstName: function(t) {
            var e;
            t && (e = a.one(".uh-menu-btn span")) && e.setHTML(t)
        },
        useDefaultAvatar: function() {
            this.avatarIcon.addClass(e), this.profileNode.addClass(t)
        }
    }, a.namespace("TD").megaHeaderAvatarCP = n
}, "@VERSION@", {
    requires: ["mega-header-constants"]
});
YUI.add("mega-header-plugin-avatar", function(a) {
    var e = "callback={callback}",
        t = /(profile_|39361574426_98028a_)/,
        r = "default-avatar",
        s = "IconProfile",
        i = a.TD.MegaHeaderConstants;

    function n(t) {
        var r = this,
            s = t.container;
        r.config = t.appletConfig || {}, r.alphatar = r.config.alphatar || {}, r.avatarIcon = s.one(i.SELECTOR_AVATAR), r.avatarUri = r.config.avatar.ucs.url + "&" + e, r.firstName = r.config.firstName || "", r.isFallback = r.config.isFallback, !r.isFallback && r.config.avatar.serverCall || (r.guid = a.Af.Config.get("context.guid"), r.ucsCrumb = a.Af.Config.get("context.ucsCrumb"), r.avatarUri = r.avatarUri.replace(/_GUID_/, encodeURIComponent(r.guid)), r.avatarUri = r.avatarUri.replace(/_UCSCRUMB_/, encodeURIComponent(r.ucsCrumb))), r.profileNode = s.one(i.SELECTOR_PROFILE), r.getAvatar()
    }
    n.prototype = {
        getAvatar: function() {
            var e = this;
            e.avatarUri && e.avatarIcon && a.jsonp(e.avatarUri, {
                on: {
                    success: a.bind(e.processAvatar, e)
                },
                timeout: 3e3
            })
        },
        processAvatar: function(a) {
            var e = this,
                t = e.config.useAvatar;
            t ? e.hasAvatar(a) ? e.setAvatarImage(a.query.results.image.imageUrl) : e.hasAlphatar() && e.alphatar.urlPath && e.alphatar.imgType ? e.setAvatarImage(e.alphatar.urlPath + e.firstName[0].toUpperCase() + e.alphatar.imgType) : e.useDefaultAvatar() : e.useDefaultAvatar()
        },
        hasAvatar: function(a) {
            return a.query && a.query.results && a.query.results.image && !t.test(a.query.results.image.imageUrl)
        },
        hasAlphatar: function() {
            return this.alphatar.enabled && /^[a-zA-Z]/.test(this.firstName)
        },
        setAvatarImage: function(a) {
            var e = this;
            e.avatarIcon.setStyle("background", "url(" + a + ") 0 0 / 34px 34px no-repeat"), e.avatarIcon.removeClass(s), e.profileNode.removeClass(r)
        },
        useDefaultAvatar: function() {
            this.avatarIcon.addClass(s), this.profileNode.addClass(r)
        }
    }, a.namespace("TD").megaHeaderAvatar = n
}, "@VERSION@", {
    requires: ["jsonp", "mega-header-constants"]
});
YUI.add("mega-header-plugin-dialpad", function(a) {
    var e = a.TD.MegaHeaderMenuMixin,
        n = a.TD.MegaHeaderConstants,
        i = "featureCue";

    function d(a) {
        var e = this;
        a && a.container && a.appletConfig && (e.config = a.appletConfig || {}, e.dialPadNode = e.config.container.one(n.SELECTOR_DIALPAD), e.dialPadPanel = e.config.container.one(n.SELECTOR_DIALPAD_PANEL), e._handles = [], e.init())
    }
    d.prototype = {
        init: function() {
            var a = this;
            a.dialPadNode && a.dialPadPanel && (a.initializeMenu(a.config.container, n.SELECTOR_DIALPAD, n.SELECTOR_DIALPAD_MENU_BTN, n.SELECTOR_DIALPAD_PANEL), a.dialPadNode.hasClass(i) || (a.dialPadNode.addClass(i), a.cueHandler = a.dialPadNode.on(n.MENU_OPEN_EVENT, a.hideDialPadMsg, a), a._handles.push(a.cueHandler), setTimeout(function() {
                a.dialPadNode.removeClass(i)
            }, 5e3)))
        },
        hideDialPadMsg: function(a) {
            this.dialPadNode.removeClass(i), this.cueHandler.detach()
        },
        cleanup: function() {
            a.Array.each(this._handles, function(a) {
                a.detach()
            }), this._handles = []
        }
    }, a.mix(d.prototype, e), a.namespace("TD").megaHeaderDialpad = d
}, "@VERSION@", {
    requires: ["mega-header-constants", "mega-header-menu-mixin"]
});
YUI.add("mega-header-plugin-helpmenu", function(e) {
    var n = e.TD.MegaHeaderMenuMixin,
        i = e.TD.MegaHeaderConstants;

    function a(e) {
        var n = this;
        e && e.container && e.appletConfig && (n.config = e.appletConfig || {}, n.helpMenuNode = n.config.container.one(i.SELECTOR_HELPMENU), n.helpMenuPanel = n.config.container.one(i.SELECTOR_HELPMENU_PANEL), n.init())
    }
    a.prototype = {
        init: function() {
            var e = this;
            e.helpMenuNode && e.helpMenuPanel && e.initializeMenu(e.config.container, i.SELECTOR_HELPMENU, i.SELECTOR_HELPMENU_BTN, i.SELECTOR_HELPMENU_PANEL)
        }
    }, e.mix(a.prototype, n), e.namespace("TD").megaHeaderHelpMenu = a
}, "@VERSION@", {
    requires: ["mega-header-constants", "mega-header-menu-mixin"]
});
YUI.add("mega-header-plugin-mail", function(e) {
    var t = "display-count",
        i = ".display-earny",
        r = ".earny-btn",
        a = "erny",
        n = "mp_api",
        s = "mc_api",
        o = "td-applet-mega-header-templates-mailpreview",
        l = e.TD.MegaHeaderConstants,
        u = e.TD.MegaHeaderMenuMixin,
        c = e.Af && e.Af.rapid,
        d = c && c.getRapidTracker(),
        m = e.Af && e.Af.Beacon;

    function p(e) {
        var t = this;
        e && e.appletConfig && e.appletModel && e.container && (t.model = e.appletModel, t.intl = t.model.get("intl"), t.config = e.appletConfig.mail || {}, t.countConfig = t.config.count || {}, t.previewConfig = t.config.preview || {}, t.countInterval = t.countConfig.refreshInterval || 120, t.maxCountDisplay = t.countConfig.maxCountDisplay || 99, t.prefetch = t.previewConfig.prefetch, t.container = e.container, t.mailNode = t.container.one(l.SELECTOR_MAIL), t.mailLinkNode = t.container.one(l.SELECTOR_MAIL_LINK), t.mailCountBadge = t.container.one(l.SELECTOR_MAIL_COUNT), t.mailPreviewPanel = t.container.one(l.SELECTOR_MAIL_PREVIEW), t._handles = [], t.countStartTime = null, t.countTimer = null, t.hasPreview = !1, t.isExpiredSession = !1, t.previewStartTime = null, t.wssid = null, t.init())
    }
    p.prototype = {
        init: function() {
            var t = this,
                i = t.previewConfig.earnyUpsellPosition && !t.getMailEarnySubcookie();
            t.initializeMenu(t.container, l.SELECTOR_MAIL, l.SELECTOR_MAIL_LINK, l.SELECTOR_MAIL_PREVIEW), !t.prefetch && t.mailLinkNode && t._handles.push(t.mailNode.on(l.MENU_OPEN_EVENT, t.handlePanelOpen, t)), i && t.mailNode && (t.previewConfig.showEarnyUpsell = !0, t._handles.push(t.mailNode.delegate("click", e.bind(this.setMailEarnySubCookie, this), r))), t.getMailCount(0, !1), t.countInterval && t.getMailCount(1e3 * t.countInterval, !0), t.prefetch || "visible" !== t.mailPreviewPanel.getStyle("visibility") || t.getMailPreview()
        },
        handlePanelOpen: function(e) {
            this.getMailPreview()
        },
        generateYmreqid: function() {
            var e = (new Date).getTime(),
                t = null,
                i = "xxxxxxxx-xxxx-xxxx-09xx-xxxxxxxxxx00".replace(/x/g, function(i) {
                    return t = (e + 16 * Math.random()) % 16 | 0, e = Math.floor(e / 16), t.toString(16)
                });
            return i
        },
        createMailApiRequest: function(t, i, r, a, n, s) {
            var o, l = this,
                u = i + (l.wssid ? "&wssid=" + l.wssid : ""),
                c = "EC-4003",
                d = "EC-4008",
                m = "POST",
                p = ["error", "code"],
                g = ["result", "responses", 0, "response", "result"],
                f = ["error", "details", "wssid"],
                v = l.config.useCors,
                h = l.generateYmreqid();
            return "XMLHttpRequest" in window ? (o = new XMLHttpRequest, !v || "withCredentials" in o ? (o.open(m, u, !0), o.withCredentials = !0, o.setRequestHeader("X-Oath-YmReqId", h), o.setRequestHeader("content-type", "application/json"), o.setRequestHeader("accept", "application/json"), o.onload = function() {
                var o, u, m;
                try {
                    if ((o = JSON.parse(this.responseText)) && !o.error) u = e.Object.getValue(o, g), n.call(l, u, h);
                    else if (e.Object.getValue(o, p) === c)
                        if (m = e.Object.getValue(o, f))
                            if (m === l.wssid) a.call(l, {
                                code: "invalidWssid",
                                message: "API provided same invalid WSSID"
                            }, h);
                            else {
                                if (l.wssid = m, void 0 === s || s > 0) return s -= 1, void l.createMailApiRequest.call(l, t, i, r, a, n, 0);
                                a.call(l, {
                                    code: "invalidWssid",
                                    message: "max retries reached"
                                }, h)
                            }
                    else a.call(l, {
                        code: "invalidWssid",
                        message: "valid WSSID missing from API Response"
                    }, h);
                    else e.Object.getValue(o, p) === d ? (l.countTimer.cancel(), l.isExpiredSession = !0, a.call(l, o.error, h)) : a.call(l, o.error, h)
                } catch (v) {
                    a.call(l, {
                        code: v.name,
                        message: v.message
                    }, h)
                }
                l.requestInProgress = !1, l.dequeueRequest.call(l)
            }, o.onerror = function() {
                a.call(l, {
                    code: "xhrFail",
                    status: this.status,
                    statusText: this.statusText || "request error"
                }, h), l.requestInProgress = !1, l.dequeueRequest.call(l)
            }, l.requestInProgress = t, o.send(r), o) : (a({
                err: "CORS not supported"
            }), null)) : (a({
                err: "XHR not supported"
            }), null)
        },
        enqueueRequest: function(e, t, i) {
            var r = this;
            return !!r.requestInProgress && (r.requestInProgress !== e && (r.requestQueue = {
                requestType: e,
                method: t,
                args: i
            }), !0)
        },
        dequeueRequest: function() {
            var e = this;
            e.requestQueue && e.requestQueue.method && e.requestQueue.args && (e.requestQueue.method.apply(e, e.requestQueue.args), e.requestQueue = null)
        },
        getMailCount: function(t, i) {
            var r = this,
                a = r.countConfig.api,
                n = "count";
            a.url && a.requestQuery && r.mailCountBadge ? r.countTimer = e.later(t, r, function() {
                if (r.isExpiredSession) return r.processCountFailure({
                    code: "expiredSession",
                    message: "count request prevented"
                }), void r.countTimer.cancel();
                r.enqueueRequest(n, r.getMailCount, [0, !1]) || (r.countStartTime = (new Date).getTime(), r.createMailApiRequest(n, a.url, a.requestQuery, r.processCountFailure, r.processCount))
            }, null, i) : r.processPreviewFailure({
                message: "count is misconfigured"
            })
        },
        getMailPreview: function() {
            var e = this,
                t = e.previewConfig.api,
                i = "preview";
            t.url && t.requestQuery ? e.isExpiredSession ? e.processPreviewFailure({
                code: "expiredSession",
                message: "preview request prevented"
            }) : e.enqueueRequest(i, e.getMailPreview, []) || (e.previewStartTime = (new Date).getTime(), e.createMailApiRequest(i, t.url, t.requestQuery, e.processPreviewFailure, e.processMailPreview)) : e.processPreviewFailure({
                message: "preview is misconfigured"
            })
        },
        processCountFailure: function(t, i) {
            var r = this,
                a = (new Date).getTime() - r.countStartTime;
            m && (r.countStartTime = null, e.Af.Beacon.error(s, t, {
                code: t.code || "mcFail",
                message: t.message || "error with mail count",
                outcome: "fail",
                time: a,
                ymreqid: i
            }))
        },
        processPreviewFailure: function(t, i) {
            var r = this,
                a = (new Date).getTime() - r.previewStartTime;
            m && (r.previewStartTime = null, e.Af.Beacon.error(n, t, {
                code: t.code || "mpFail",
                message: t.message || "error with mail preview",
                outcome: "fail",
                time: a,
                ymreqid: i
            })), dust.render(o, {
                data: {
                    error: t
                },
                intl: r.intl,
                isExpiredSession: r.isExpiredSession,
                mail: r.config
            }, function(e, t) {
                r.mailPreviewPanel.setHTML(t)
            })
        },
        processCount: function(i, r) {
            var a, n, o, u, c, p = this,
                g = 0,
                f = ["counts", 0, "unseen"],
                v = "FTI";
            m && p.countStartTime && (a = (new Date).getTime() - p.countStartTime, p.countStartTime = null, e.Af.Beacon.perf(s, {
                code: "mcPass",
                time: a
            })), o = i && i.decos, e.Lang.isArray(o) && (n = e.Array.find(o, function(e) {
                return e && e.id === v
            }), g = parseInt(e.Object.getValue(n, f) || 0, 10)), c = {
                sec: "hd",
                _links: [u = {
                    elm: "btn",
                    slk: "notification",
                    subsec: "mail-badge"
                }]
            }, g !== p.currentCount && (p.prefetch && p.getMailPreview(), e.Af.Event.fire(l.MAIL_COUNT_EVENT, {
                count: g
            })), p.currentCount = g, g > 0 ? (g = g > p.maxCountDisplay ? p.maxCountDisplay + "+" : g, p.mailCountBadge.set("innerHTML", g),
                g.length > 2 ? p.mailCountBadge.addClass("Px(3px)") : p.mailCountBadge.removeClass("Px\\(3px\\)"), p.mailNode.addClass(t), !p.badgeBeaconSent && d && (u.cat = g, d.beaconLinkViews([c]), p.badgeBeaconSent = !0)) : (p.mailNode.removeClass(t), p.badgeBeaconSent = !1)
        },
        processMailPreview: function(t, i) {
            var r, a, s, l, u = this,
                c = [],
                d = {},
                p = t && t.messages;
            if (m && u.previewStartTime && (r = (new Date).getTime() - u.previewStartTime, u.previewStartTime = null, e.Af.Beacon.perf(n, {
                    code: "mpPass",
                    time: r
                })), e.Lang.isArray(p))
                for (a = 0; a < p.length; a += 1)(d = u.buildParsedMessage(p[a])).mid ? c.push(d) : s || (s = "processingErr", l = "malformed message item");
            else s = "processingErr", l = "no preview data";
            s && u.processPreviewFailure({
                code: s,
                message: l
            }, i), dust.render(o, {
                data: {
                    count: c.length,
                    error: s,
                    messages: c,
                    newCount: u.currentCount
                },
                intl: u.intl,
                isExpiredSession: u.isExpiredSession,
                mail: u.config
            }, function(e, t) {
                u.mailPreviewPanel.setHTML(t)
            })
        },
        buildParsedMessage: function(e) {
            var t = {},
                i = e && e.headers;
            return i && i.from && i.from[0] && i.date && (t = {
                from: i.from[0].name || i.from[0].email,
                isRead: parseInt(e.flags && e.flags.read ? "1" : "0", 10),
                mid: e.id,
                subject: i.subject || "",
                timestamp: this.fromNow(i.date)
            }), t
        },
        fromNow: function(e) {
            var t, i, r, a, n, s = this,
                o = (new Date).getTime() / 1e3 - e,
                l = o,
                u = l / 60;
            return l = Math.floor(l % 60), u < 1 ? s.intl.messages.REL_SECS.replace("{0}", l) : (t = u / 60, u = Math.floor(u % 60), t < 1 ? s.intl.messages.REL_MINS.replace("{0}", u) : (i = t / 24, t = Math.floor(t % 24), i < 1 ? s.intl.messages.REL_HOURS.replace("{0}", t) : (r = i / 7, i = Math.floor(i % 7), r < 1 ? s.intl.messages.REL_DAYS.replace("{0}", i) : (a = r / 4.35, r = Math.floor(r % 4.35), a < 1 ? s.intl.messages.REL_WEEKS.replace("{0}", r) : (n = a / 12, a = Math.floor(a % 12), n < 1 ? s.intl.messages.REL_MONTHS.replace("{0}", a) : (n = Math.floor(n), s.intl.messages.REL_YEARS.replace("{0}", n)))))))
        },
        setMailEarnySubCookie: function() {
            var t, r = this,
                n = Math.floor((new Date).getTime() / 1e3),
                s = (new Date).setFullYear((new Date).getFullYear() + 1);
            e.Cookie.setSub("ucs", a, n, {
                expires: new Date(s),
                path: "/",
                domain: "yahoo.com"
            }), r.mailNode && (t = r.mailNode.one(i), c && c.triggerBeaconClickEvent(r.earnyUpsellNode), t && t.hide())
        },
        getMailEarnySubcookie: function() {
            return e.Cookie.getSub("ucs", a)
        },
        cleanup: function() {
            e.Array.each(this._handles, function(e) {
                e.detach()
            }), this._handles = []
        }
    }, e.mix(p.prototype, u), e.namespace("TD").megaHeaderMail = p
}, "@VERSION@", {
    requires: ["af-event", "mega-header-constants", "mega-header-menu-mixin"]
});
YUI.add("mega-header-plugin-notifications", function(e) {
    var i = "lnct",
        n = e.Af && e.Af.Config.get("context"),
        t = e.TD.MegaHeaderConstants,
        o = e.TD.MegaHeaderMenuMixin,
        a = e.Af.rapid,
        l = a.getRapidTracker();

    function c(i) {
        var n = this;
        n.config = i.appletConfig || {}, n.model = i.appletModel || {}, n.appletView = i.appletView, n.notificationsNode = n.config.container.one(t.SELECTOR_NOTIFICATIONS), n.countBadge = n.config.container.one(t.SELECTOR_NOTIFICATION_COUNT), n.notificationsPanel = n.config.container.one(t.SELECTOR_NOTIFICATION_PANEL), n.intl = n.model.get("intl"), n.bodyEl = e.one("body"), n._handles = [], n.init()
    }
    c.prototype = {
        init: function() {
            var i, n, o, a = this;
            a.notificationsNode && a.notificationsPanel && a.countBadge && (a.initializeMenu(a.config.container, t.SELECTOR_NOTIFICATIONS, t.SELECTOR_NOTIFICATIONS_MENU_BTN, t.SELECTOR_NOTIFICATION_PANEL), a.initializeSubcookie(), i = a.config.notifications.notificationClient, window.NotificationClient && ((n = i).badge && (n.badge.selector = t.SELECTOR_NOTIFICATION_COUNT), n.service || (n.service = {}), window.location.origin || (window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")), n.service.url = window.location.origin + (n.historyServicePath || ""), n.panel && (n.panel.parentSelector = t.SELECTOR_NOTIFICATION_PANEL, n.panel.headerMsg = a.intl.messages.NOTIFICATIONS || "", n.panel.notificationCenterNavMsg = a.intl.messages.NOTIFICATION_CENTER_NAV_MSG || "", n.panel.errorMsg = a.intl.messages.PLEASE_CHECK_BACK_LATER || "", n.panel.emptyPanelMsg = a.intl.messages.NO_NEW_NOTIFICATIONS || "", a.config.hasNotificationCenterLink || (n.panel.notificationCenterPath = null)), a.notificationClient = new window.NotificationClient(n), a.notificationClient.helpers && (a.handleRefreshPanel(!0), a.config.notifications.polling && (o = 1e3 * a.config.notifications.pollingInterval || 3e5, setInterval(a.handleRefreshPanel.bind(a), o, !0)), a._handles.push(a.notificationsNode.on(t.MENU_OPEN_EVENT, a.handleRefreshPanel, a)), a.bellNode = a.config.container.one(t.SELECTOR_NOTIFICATIONS_MENU_BTN))), a.notificationClient && a.notificationClient.helpers || e.Af && e.Af.Beacon && e.Af.Beacon.error("bell_notif", {}, {
                code: "initializeFail",
                message: a.notificationClient ? "Validation Failure" : "Instantiation Failure"
            }))
        },
        handleRefreshPanel: function(i) {
            var t, o = this;
            o.notificationClient && (t = {
                lastUpdate: o.getTimestampSubcookie()
            }, n && n.region && n.lang && (t.lang = n.lang, t.region = n.region), o.notificationClient.helpers.refreshPanelNode({
                matrixParams: t
            }, function(n, t) {
                var a;
                n && e.Af && e.Af.Beacon && e.Af.Beacon.error("bell_notif", n, {
                    code: "refreshFail",
                    message: n.message
                }), i ? o.countBadge.hasClass("D\\(n\\)") || (a = {
                    sec: "hd",
                    _links: [{
                        elm: "btn",
                        slk: "notification",
                        subsec: "notification-badge",
                        cat: o.countBadge.getContent()
                    }]
                }, l && l.beaconLinkViews([a])) : (o.setPanelAccessibility(), o.setTimestampSubCookie(), o.notificationClient.helpers.resetBadge())
            }))
        },
        setPanelAccessibility: function() {
            var e, i, n, o = this,
                a = "tabindex",
                l = o.notificationClient && o.notificationClient.config && o.notificationClient.config.panel && o.notificationClient.config.panel.maxCount || 0;
            if (l && o.bellNode) {
                if (!(e = o.bellNode.getAttribute(a))) return;
                o.bodyEl.hasClass(t.CLASS_PUSH_PROMOTE) && (o.notificationsNode.one(t.SELECTOR_PUSH_SUBSCRIBE).setAttribute(a, e), l--), (i = o.notificationsNode.one(t.SELECTOR_NOTIFICATION_CLIENT_NAV)) && i.setAttribute(a, e), (n = o.notificationsNode.all(t.SELECTOR_NOTIFICATION_CLIENT_ITEM)) && n.each(function(i) {
                    l <= 0 || (i.setAttribute(a, e), l--)
                })
            }
        },
        initializeSubcookie: function() {
            var n = this,
                t = Math.floor((new Date).getTime() / 1e3),
                o = e.Cookie.getSub("ucs", i);
            (!o || o > t) && n.setTimestampSubCookie()
        },
        setTimestampSubCookie: function() {
            var n = Math.floor((new Date).getTime() / 1e3),
                t = (new Date).setFullYear((new Date).getFullYear() + 1);
            e.Cookie.setSub("ucs", i, n, {
                expires: new Date(t),
                path: "/",
                domain: "yahoo.com"
            })
        },
        getTimestampSubcookie: function() {
            var n = Math.floor((new Date).getTime() / 1e3),
                t = e.Cookie.getSub("ucs", i) || n;
            return t
        },
        cleanup: function() {
            e.Array.each(this._handles, function(e) {
                e.detach()
            }), this._handles = []
        }
    }, e.mix(c.prototype, o), e.namespace("TD").megaHeaderNotifications = c
}, "@VERSION@", {
    requires: ["af-event", "af-cache", "mega-header-constants", "mega-header-menu-mixin"]
});
YUI.add("mega-header-plugin-username", function(e) {
    var n = "callback={callback}";

    function r(r) {
        var s = this;
        s.config = r.appletConfig || {}, s.model = r.appletModel || {}, s.intl = s.model.get("intl"), s.guid = e.Af.Config.getContext("guid"), s.ucsCrumb = e.Af.Config.getContext("ucsCrumb"), s.usernameUri = s.config.username.ucs.url + "&" + n, s.usernameUri = s.usernameUri.replace(/_GUID_/, encodeURIComponent(s.guid)), s.usernameUri = s.usernameUri.replace(/_UCSCRUMB_/, encodeURIComponent(s.ucsCrumb)), s.usernameContainer = e.one(".uh-greeting"), s.getUsername()
    }
    r.prototype = {
        getUsername: function() {
            var n = this;
            n.usernameUri && e.jsonp(n.usernameUri, {
                on: {
                    success: e.bind(n.processUsername, n)
                },
                timeout: 3e3
            })
        },
        processUsername: function(e) {
            var n = this,
                r = n.intl.messages.WELCOME_BACK;
            e.query && e.query.results && "0" !== e.query.results && e.query.results.profile && (r = e.query.results.profile.givenName), n.usernameContainer && n.usernameContainer.setHTML(r)
        }
    }, e.namespace("TD").megaHeaderUsername = r
}, "@VERSION@", {
    requires: ["jsonp"]
});
YUI.add("td-applet-mega-header-mainview", function(e, o) {
    var n = /\S/,
        t = /tablet/gi,
        i = 8,
        a = 9,
        l = 13,
        s = 16,
        r = 27,
        c = 32,
        d = 40,
        u = 46,
        h = /smartphone/gi,
        p = "has-scrolled",
        m = "mini-header",
        g = "Reader-open",
        E = "Reader-postopen",
        f = e.TD.MegaHeaderConstants,
        C = e.Af.rapid,
        b = C.getRapidTracker(),
        S = !1,
        v = "D\\(n\\)",
        T = "D(n)",
        _ = "gondor_homerun_news",
        P = "bnct";
    e.namespace("TD.Applet").MegaHeaderMainView = e.Base.create("TDAppletMegaHeaderMainView", e.Af.AppletView, [], {
        initializer: function(o) {
            var i, a, l, s, r = this,
                c = e.one(f.SELECTOR_UH);
            r.addLowgradeBrowserShim(), r._handles = [], r._components = [], r.isSignedInUser = e.Af.Config.isUserSignedIn(), r.guid = o.guid, r.module = this.get("container"), r.docEl = e.one("html"), r.bodyEl = e.one("body"), r.searchInputEl = r.module.one(f.SELECTOR_SEARCH_INPUT), r.config = e.Af.Bootstrap.getViewMeta(r.guid, "main").config || {}, r.isCpEnabled = r.config.avatar && "cp" === r.config.avatar.version, r.device = e.Af.Config.getContext("device") || "desktop", r.scrollPromoEl = r.module.one(f.SELECTOR_SCROLL_PROMO), r.scrollPromoHandler = null, r.appletContext = e.Af && e.Af.Config.get("context") || {}, r.module.one(f.SELECTOR_CLEAR_QUERY_BUTTON), i = r.module.one(f.SELECTOR_SEARCH_BUTTON), a = r.module.one(f.SELECTOR_LOGO), r.module.one(f.SELECTOR_MAIL_NOTIFICATION), r.sanitizeUcsCookie(), r.config.searchAssistJS || (r.autoComplete = new e.TD.megaHeaderAutoComplete({
                container: r.module,
                appletConfig: r.config
            }), r._components.push(r.autoComplete)), t.test(r.device) || h.test(r.device) || !r.searchInputEl || r._handles.push(r.docEl.on("keydown", e.bind(r.checkFocus, r))), r._handles.push(i.on("tap", function(e) {
                n.test(r.searchInputEl.get("value")) || (e.preventDefault(), r.searchInputEl.focus())
            })), r.config.searchFormGlow && r.animateSearchBtn(), a && ((l = a.getData("animated-image-url")) && ((s = new Image).src = l, s.onload = function() {
                a.setStyle("backgroundImage", 'url("' + l + '")')
            }), a.on("click", r.handleLogoClick, r)), r.config.topBar && (r._handles.push(r.module.delegate("click", e.bind(this.handleNavMenuClick, this), f.SELECTOR_NAV_MENU_TITLE)), r.navEventListeners = []), r.config.isFallback && r.config.hasProfile && (r.setupProfile(), r.isSignedInUser && (r.isCpEnabled || r.setupUsername(o), r.setupAvatar(o))), r.isSignedInUser && (r.config.avatar.serverCall || r.config.isFallback || !r.config.hasProfile || r.setupAvatar(o), r.config.hasMailPreview && r.config.hasMail && !r.config.isRecognizedUser && r.setupMailPreview(o), r.config.accountSwitchData.enabled && r.setupAccountSwitch(o)), r.config.extensionHelper && r.config.extensionHelper.enabled && r.setUpExtensionHelper(o), r.config.notifications && r.config.notifications.subscriptionHelper && r.config.notifications.subscriptionHelper.enabled && r.setupSubscriptionHelper(), r.config.hasNotifications && r.setupNotifications(o), r.config.hasDialpad && r.setupDialpad(o), r.config.hasHelpMenu && r.setupHelpMenu(o), r.config.miniheader && (r.miniHeight = parseInt(r.config.miniheaderHeight, 10) || parseFloat(c.getStyle("height")), r.lastScrollTop = 0, r._handles.push(e.on("scroll", e.bind(this.handleScroll, this)))), r.config.bottomBar && r.setupBottomBar(), r.config.hasIeInstallerLightbox && r.setupIeInstallerLightbox(), r.config.banner && (r.bannerEl = r.module.one(f.SELECTOR_BANNER), r.setupBannerPromo()), r.config.scrollPromo && setTimeout(e.bind(r.setupScrollPromo, r), 500), r.config.hasExtensionPromo && setTimeout(e.bind(r.setupExtensionPromo, r), 500)
        },
        sanitizeUcsCookie: function() {
            var o, n, t, i, a, l, s = e.Cookie.get("ucs", {
                    raw: !0
                }),
                r = s && -1 !== s.indexOf("%3D"),
                c = [],
                d = {};
            if (r) {
                for (t = (new Date).setFullYear((new Date).getFullYear() + 1), i = {
                        expires: new Date(t),
                        path: "/",
                        domain: "yahoo.com",
                        raw: !0
                    }, o = e.Cookie.get("ucs").split("&"), a = 0; a < o.length; a++)(n = o[a].split("="))[0] && (d[n[0]] = n[1]);
                for (l in d) d[l] && c.push(l + "=" + d[l]);
                c.length > 0 && e.Cookie.set("ucs", c.join("&"), i)
            }
        },
        setupProfile: function() {
            var e = this,
                o = e.module.one(f.SELECTOR_UH_RIGHT_PANEL),
                n = "td-applet-mega-header-templates-profile";
            dust.render(n, {
                intl: e.get("model").get("intl"),
                isFallback: e.config.isFallback,
                isSignedInUser: e.isSignedInUser,
                loginUrl: e.config.loginUrl,
                profileUrl: e.config.profileUrl
            }, function(e, n) {
                o && o.insert(n, "after")
            })
        },
        setupAccountSwitch: function(o) {
            var n, t = this;
            e.TD.megaHeaderAccountSwitch && (n = new e.TD.megaHeaderAccountSwitch({
                appletConfig: o,
                appletModel: t.get("model"),
                appletView: t
            }), t._components.push(n))
        },
        setupUsername: function(o) {
            var n = this;
            e.TD.megaHeaderUsername && new e.TD.megaHeaderUsername({
                appletConfig: o,
                appletModel: n.get("model")
            })
        },
        setupAvatar: function(o) {
            var n = this;
            n.isCpEnabled ? o && o.avatar && !o.avatar.serverCall && e.TD.megaHeaderAvatarCP && new e.TD.megaHeaderAvatarCP({
                appletConfig: {
                    alphatar: o.alphatar || {},
                    useAvatar: o.useAvatar || !1
                },
                appletModel: n.get("model"),
                avatarSelector: f.SELECTOR_AVATAR,
                container: n.module
            }) : e.TD.megaHeaderAvatar && new e.TD.megaHeaderAvatar({
                appletConfig: o,
                avatarSelector: f.SELECTOR_AVATAR,
                container: n.module
            })
        },
        setupMailPreview: function(o) {
            var n, t = this;
            e.TD.megaHeaderMail && (n = new e.TD.megaHeaderMail({
                appletConfig: o,
                appletModel: t.get("model"),
                container: t.module
            }), t._components.push(n))
        },
        setupDialpad: function(o) {
            var n, t = this;
            e.TD.megaHeaderDialpad && (n = new e.TD.megaHeaderDialpad({
                appletConfig: o,
                appletModel: t.get("model"),
                appletView: t,
                container: t.module
            }), t._components.push(n))
        },
        setupHelpMenu: function(o) {
            var n, t = this;
            e.TD.megaHeaderHelpMenu && (n = new e.TD.megaHeaderHelpMenu({
                appletConfig: o,
                appletModel: t.get("model"),
                appletView: t,
                container: t.module
            }), t._components.push(n))
        },
        setupNotifications: function(o) {
            var n, t = this;
            e.TD.megaHeaderNotifications && (n = new e.TD.megaHeaderNotifications({
                appletConfig: o,
                appletModel: t.get("model"),
                appletView: t,
                container: t.module
            }), t._components.push(n))
        },
        setUpExtensionHelper: function(o) {
            e.TD.megaHeaderExtensionHelper && (this.extensionHelper = new e.TD.megaHeaderExtensionHelper({
                appletConfig: o
            }), this._components.push(this.extensionHelper))
        },
        setupSubscriptionHelper: function() {
            var o, n = this,
                t = n.config.notifications,
                i = t.subscriptionHelper || {},
                a = e.Af && e.Af.Beacon;
            i.userAgent = n.config.userAgent, i.bucket = n.config.bucket, i.subscriptionService = i.subscriptionService || {}, i.subscriptionService.context = n.appletContext,
                window.SubscriptionHelper && a && b && (o = new window.SubscriptionHelper(i, a, b)), o && (window.subscriptionHelperInstance = o, e.later(500, o, function() {
                    o.addPromoButtonDelegator(), o.showPushSubscriptionPromos(), (n.config.notifications.subscriptionHelper.enableChurnCheck || n.config.notifications.subscriptionHelper.enableSubsResyncIfError) && n.checkPushNotificationChurn()
                }))
        },
        checkPushNotificationChurn: function() {
            var e = this,
                o = window.subscriptionHelperInstance,
                n = e.config.notifications.subscriptionHelper;
            o && o.checkIsSupportedBrowser() && window.Notification && "granted" === window.Notification.permission && (e.initializeSubCookie(P), o.checkSubscriptionChurn(function(e, t) {
                var i, a = t.isOnboardError,
                    l = t.pushManagerChurn;
                !e && (a || l) && n.resubscribeOnChurn && (i = "subChurn", a && n.enableSubsResyncIfError && (i = "subResync"), o.pushNotificationSubscribe({
                    topic: _,
                    trackingParams: {
                        sec: i
                    }
                }))
            }))
        },
        handleLogoClick: function(e) {
            var o = window.location;
            this.docEl.hasClass(g) && e.currentTarget.setAttribute("href", o.protocol + "//" + o.host)
        },
        handleScroll: function(e) {
            var o, n = this;
            if (!n.docEl.hasClass(g)) {
                if ((o = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop) > n.lastScrollTop) {
                    if (n.docEl.hasClass(m)) return n.lastScrollTop = o, void n.docEl.addClass("HideBottomBar");
                    o > n.miniHeight && (n.docEl.addClass(m), n.docEl.addClass("HideBottomBar"))
                } else o < n.miniHeight && n.docEl.removeClass(m), n.docEl.removeClass("HideBottomBar");
                o <= 0 && n.docEl.removeClass(m), n.lastScrollTop = o
            }
        },
        handleNavMenuClick: function(o) {
            var n, t;
            o.halt(), n = this, (t = o.currentTarget.ancestor(f.SELECTOR_NAV_MENU)).hasClass(f.CLASS_MENU_OPEN) ? n.closeNavMenu(t) : (t.addClass(f.CLASS_MENU_OPEN), C && C.triggerBeaconClickEvent(o.currentTarget), n.navEventListeners.push(e.on("scroll", e.bind(n.closeNavMenu, n, t))), n.navEventListeners.push(e.on("click", e.bind(n.closeNavMenu, n, t))))
        },
        closeNavMenu: function(o) {
            o.removeClass(f.CLASS_MENU_OPEN), e.Array.each(this.navEventListeners, function(e) {
                e.detach()
            }), this.navEventListeners = []
        },
        checkFocus: function(e) {
            var o, n, t, h, p, m, g = this;
            try {
                if (o = e.keyCode, m = (t = e.target ? e.target : e.srcElement) && t.get("tagName"), n = g.searchInputEl.get("value").length, p = g.searchInputEl.getDOMNode(), t && t.hasClass("NoSearchFocus")) return;
                t === g.searchInputEl && 0 === n && o >= c && o <= d ? g.searchInputEl.blur() : "EMBED" === m || "OBJECT" === m || "INPUT" === m || "TEXTAREA" === m || e.altKey || e.metaKey || e.ctrlKey || !(o < c || o > d) || o === a || o === l || o === s || o === i || o === u || o === r || document.activeElement === p || (n && (p.setSelectionRange ? p.setSelectionRange(n, n) : p.createTextRange && ((h = p.createTextRange()).moveStart("character", n), h.select())), g.searchInputEl.focus())
            } catch (e) {}
        },
        animateSearchBtn: function() {
            var o = this,
                n = o.module.one(f.SELECTOR_SEARCH_FORM),
                t = "glow",
                i = "glowing",
                a = "1000";
            n.removeClass(t), e.later(a, o, function() {
                n.addClass(t), e.later(a, o, function() {
                    n.removeClass(t), e.later(a, o, function() {
                        n.removeClass(i), o.config.formHoverState && n.addClass("enableHover")
                    })
                })
            })
        },
        setupScrollPromo: function() {
            var o = this,
                n = "subscriptionPromo" === o.config.scrollPromo.type,
                t = o.module.one(f.SELECTOR_SCROLL_PROMO_ADD),
                i = o.module.one(f.SELECTOR_SCROLL_PROMO_CLOSE);
            o.checkScrollPromoEligibility(function(a) {
                a && o.scrollPromoEl && t && !n ? (o.scrollPromoHandler = e.on("scroll", e.bind(o.showScrollPromo, o)), o._handles.push(o.scrollPromoEl.on("mouseleave", e.bind(o.startScrollPromoInterval, o))), o._handles.push(o.scrollPromoEl.on("mouseenter", e.bind(o.stopScrollPromoInterval, o))), o._handles.push(o.docEl.on("keypress", e.bind(o.hideScrollPromoOnEsc, o))), o._handles.push(e.Af.Event.on("modal:show", e.bind(o.hideScrollPromo, o))), o._handles.push(t.on("click", o.handleExtensionPromoClick, o)), i && o._handles.push(i.on("click", o.hideScrollPromo, o))) : n && e.Global.once("modal:show", function() {
                    a ? (b.beaconEvent("promo-eligible", {
                        eligible: !0
                    }), o.modalScrollPromoHandler = e.on("scroll", e.bind(o.modalShowPromo, o))) : b.beaconEvent("promo-not-eligible", {
                        eligible: !1
                    })
                }, o)
            })
        },
        modalShowPromo: function(o) {
            var n = this,
                t = window.subscriptionHelperInstance;
            n.modalScrollPromoHandler && n.docEl.hasClass(p) && n.docEl.hasClass(E) && (n.initializeSubCookie("bnpt"), n.modalScrollPromoHandler.detach(), n.modalScrollPromoHandler = null, t.pushNotificationSubscribe({
                topic: _,
                trackingParams: {
                    sec: "hd-scroll",
                    subsec: "browser-prompt",
                    elm: "btn",
                    itc: 1
                }
            }, e.bind(t.displayWelcomeNotification, t)))
        },
        setupIeInstallerLightbox: function() {
            var o, n = this,
                t = n.bodyEl;
            n.extensionHelper && n.extensionHelper.handleVerification && n.extensionHelper.shouldEnableIEInstallerLightbox && (n.extensionHelper.handleVerification({
                name: "homepage"
            }), o = n.module.one(f.SELECTOR_IE_INSTALLER_LB), n.enableIeInstallerLightbox = n.extensionHelper.shouldEnableIEInstallerLightbox(), n.enableIeInstallerLightbox && o && t && (t.appendChild(o), n.ieLbNode = t.one(f.SELECTOR_IE_INSTALLER_LB), n._handles.push(e.Af.Event.on(f.IE_LB_SHOW_EVENT, n.handleIeInstallerLightboxShowEvent, n)), n._handles.push(n.ieLbNode.on("click", e.bind(n.hideIeInstallerLightbox, n))), n._handles.push(e.one("document").on("keydown", n.hideIeInstallerLightbox.bind(n)))))
        },
        handleIeInstallerLightboxShowEvent: function() {
            this.ieLbNode && this.ieLbNode.removeClass(v)
        },
        hideIeInstallerLightbox: function() {
            this.ieLbNode && this.ieLbNode.addClass(T)
        },
        checkScrollPromoEligibility: function(e) {
            var o, n = this,
                t = "extensionPromo" === n.config.scrollPromo.type,
                i = n.extensionHelper;
            t ? (o = i && i.handleVerification && i.handleVerification({
                name: "homepage"
            }), e(o)) : window.subscriptionHelperInstance && window.subscriptionHelperInstance.shouldPromotePushNotificationsForTopic(_, function(o, n) {
                e(!o && n)
            })
        },
        showScrollPromo: function(e) {
            var o = this,
                n = [{
                    sec: "hd",
                    t1: "a1",
                    t2: "hd",
                    _links: [{
                        itc: "1",
                        slk: "hpsetpromo",
                        subsec: "hpsetscrl"
                    }, {
                        itc: "1",
                        slk: "close",
                        subsec: "hpsetscrl"
                    }]
                }];
            o.docEl.hasClass(p) && o.checkScrollPromoEligibility(function(e) {
                e && (o.scrollPromoEl.removeClass(v), o.startScrollPromoInterval(), S || (b && !o.scrollPromoEl.hasClass(v) && b.beaconLinkViews(n), S = !0), o.scrollPromoHandler.detach())
            })
        },
        hideBanner: function(e) {
            var o = this,
                n = o.module.one(f.SELECTOR_TOPBAR);
            o.bannerEl && (o.bannerEl.addClass(T), o.initializeSubCookie("lbit"),
                e && "click" === e.type && b && b.beaconClick("hd", "close", "1", {
                    subsec: "hpset-banner",
                    t1: "a1",
                    t2: "hd"
                })), n && n.removeClass(v), o.bodyEl && o.bodyEl.removeClass("uh-banner-narrow").removeClass("uh-banner-wide")
        },
        hideScrollPromo: function(e) {
            var o = this,
                n = o.module.one(f.SELECTOR_SCROLL_PROMO),
                t = "extensionPromo" === o.config.scrollPromo.type,
                i = t ? "spt" : "bnpt";
            n.hasClass(v) || (n.addClass(T), o.stopScrollPromoInterval(), o.initializeSubCookie(i), e && "click" === e.type && b && (t ? b.beaconClick("hd", "close", "1", {
                subsec: "hpsetscrl",
                t1: "a1",
                t2: "hd"
            }) : b.beaconClick("hd-scroll", "close", "1", {
                subsec: "notification-promo",
                t1: "a1",
                t2: "hd"
            })))
        },
        initializeSubCookie: function(o) {
            var n = this,
                t = Math.floor((new Date).getTime() / 1e3),
                i = e.Cookie.getSub("ucs", o);
            (!i || i < t) && n.setSubCookie(o, t)
        },
        setSubCookie: function(o, n) {
            var t = (new Date).setFullYear((new Date).getFullYear() + 1);
            e.Cookie.setSub("ucs", o, n, {
                expires: new Date(t),
                path: "/",
                domain: "yahoo.com"
            })
        },
        startScrollPromoInterval: function() {
            var o = this,
                n = o.config.scrollPromo.interval || 1e4;
            o.scrollPromoTimerEvent = e.later(n, o, o.hideScrollPromo)
        },
        stopScrollPromoInterval: function() {
            this.scrollPromoTimerEvent && this.scrollPromoTimerEvent.cancel(), this.scrollPromoTimerEvent = null
        },
        hideScrollPromoOnEsc: function(e) {
            e.keyCode !== r || this.scrollPromoEl.hasClass(v) || this.hideScrollPromo()
        },
        hideBannerOnEsc: function(e) {
            e.keyCode !== r || this.bannerEl.hasClass(v) || this.hideBanner()
        },
        setupBannerPromo: function() {
            var o = this,
                n = o.module.one(f.SELECTOR_BANNER_ADD),
                t = o.module.one(f.SELECTOR_BANNER_CLOSE);
            n && t && (o._handles.push(n.on("click", o.handleExtensionPromoClick, o)), o._handles.push(t.on("click", o.hideBanner, o)), o._handles.push(o.docEl.on("keydown", e.bind(o.hideBannerOnEsc, o))))
        },
        setupExtensionPromo: function() {
            var e = this,
                o = e.module.one(f.SELECTOR_EXTENSION_PROMO),
                n = e.extensionHelper && e.extensionHelper.handleVerification && e.extensionHelper.handleVerification({
                    name: "homepage"
                });
            n && o && (o.removeClass(v + "!"), e._handles.push(o.on("click", e.handleExtensionPromoClick, e)))
        },
        handleExtensionPromoClick: function(o) {
            var n = this,
                t = n.module.one(f.SELECTOR_EXTENSION_PROMO);
            C && C.triggerBeaconClickEvent(o.currentTarget, {
                slk: "hpsetpromo"
            }), n.extensionHelper && n.extensionHelper.handleInstall({
                name: "homepage"
            }), n.enableIeInstallerLightbox && e.Af.Event.fire(f.IE_LB_SHOW_EVENT), n.bannerEl && n.hideBanner(), t && t.addClass(T + "!"), n.scrollPromoEl && n.hideScrollPromo()
        },
        setupBottomBar: function() {
            this._handles.push(e.Af.Event.on(f.MAIL_COUNT_EVENT, this.handleMailCountChange, this))
        },
        handleMailCountChange: function(e) {
            var o, n = this,
                t = n.module.one(f.SELECTOR_BOTTOMBAR_COUNT),
                i = n.module.one(f.SELECTOR_BOTTOMBAR_COUNT_NUM),
                a = n.module.one(f.SELECTOR_BOTTOMBAR_DOT);
            e && "undefined" != typeof e.count && t && i && a && ((o = parseInt(e.count, 10) > 99 ? "99+" : e.count) ? (i.set("text", o), t.removeClass(v + "!"), a.removeClass(v + "!")) : (t.set("text", ""), t.addClass(T + "!"), a.addClass(T + "!")))
        },
        addLowgradeBrowserShim: function() {
            Date.now || (Date.now = function() {
                return (new Date).valueOf()
            })
        },
        destructor: function() {
            e.Array.each(this._handles, function(e) {
                e.detach()
            }), this._handles = [], e.Array.each(this._components, function(e) {
                e && (e.cleanup && e.cleanup(), e.destroy && e.destroy())
            }), this._components = []
        }
    })
}, "@VERSION@", {
    requires: ["af-applet-view", "cookie", "node", "mega-header-constants", "mega-header-extension-helper", "mega-header-menu-mixin", "mega-header-plugin-autocomplete", "mega-header-plugin-avatar", "mega-header-plugin-username", "mega-header-plugin-notifications", "mega-header-plugin-account-switch"]
});
YUI.add("td-applet-mega-header-templates-accountSwitchPanel", function(t, n) {
    dust.cache = dust.cache || {}, dust.cache[n] = function(t) {
        function n(t, n) {
            return t.s(n.get(["accountSwitchData"], !1), n, {
                block: e
            }, {}).w("\n")
        }

        function e(t, n) {
            return t.w("\n").nx(n.get(["cookieError"], !1), n, {
                "else": s,
                block: a
            }, {}).w("\n")
        }

        function s(t, n) {
            return t.w('\n<div class="Whs(n) Bgc(#fcf8e3) Ov(h) Pos(r)">\n        <div class="P(16px)">').h("intlMessage", n, {}, {
                _key: "ACCOUNT_SWITCH_COOKIE_ERR"
            }).w("</div>\n    </div>\n")
        }

        function a(t, n) {
            return t.w("\n").x(n.get(["showWelcome"], !1), n, {
                block: d
            }, {}).w("\n").s(n.get(["main_user"], !1), n, {
                block: i
            }, {}).w("\n\n        ").x(n.get(["users"], !1), n, {
                "else": w,
                block: p
            }, {}).w("\n").nx(n.get(["crumbError"], !1), n, {
                block: T
            }, {}).w('\n<div class="Bdtc($menuFooterBdr) Bdts(s) Bdtw(1px) Py(14px) Ta(c)">\n        <a id="uh-signout" class="C(#000) C($menuLink):h Td(n)" href="').f(n.get(["signoutUrl"], !1), n, "h").w('" ').h("rapid_data_attr", n, {}, {
                sec: "uh",
                subsec: "profile",
                slk: "signout",
                elm: "btn"
            }).w(' aria-label="').h("intlMessage", n, {}, {
                _key: "SIGNOUT"
            }).w('" tabindex="4">').h("intlMessage", n, {}, {
                _key: "SIGNOUT"
            }).w("</a>\n    </div>\n")
        }

        function d(t, n) {
            return t.w('\n<div id="uh-as-welcome" class="D(n) Whs(n) Bgc(#fcf8e3) Ov(h) Pos(r)">\n            <button class="Pos(a) End(0) T(0) P(0) Ta(c) Fz(18px) Bg(n) Bd(0) W(30px) H(38px)" tabindex="4">×</button>\n            <div class="Py(16px) Pstart(16px) Pend(30px)">').h("intlMessage", n, {}, {
                _key: "ACCOUNT_SWITCH_WELCOME_1"
            }).w(' <a href="').f(n.get(["manageUrl"], !1), n, "h").w('" tabindex="4">').h("intlMessage", n, {}, {
                _key: "ACCOUNT_SWITCH_ACCOUNT_MANAGER"
            }).w("</a>.<br>").h("intlMessage", n, {}, {
                _key: "ACCOUNT_SWITCH_WELCOME_2"
            }).w("</div>\n        </div>\n        ")
        }

        function i(t, n) {
            return t.w('\n<div id="uh-as-main" class="Pos(r) Py(16px) Cf">\n                ').nx(n.get(["renderComplete"], !1), n, {
                block: c
            }, {}).w('\n<div class="Zoom Va(t) Ta(c) Fl(start) W($asIconWidth)">\n                   <i class="Bdrs(45%) Bgz(cv) C($signInBtn) D(ib) Fz(40px) H(40px) W(40px)').nx(n.get(["imageUrl"], !1), n, {
                block: l
            }, {}).w('" ').s(n.get(["imageUrl"], !1), n, {
                block: r
            }, {}).w('></i>\n                </div>\n                <div class="Lh(1.3) W(2/3) D(ib) Zoom Lts(n) Tren(a) Va(t) Ov(v) Fl(start)">\n                    <div class="Fz(15px) Ell" id="uh-as-name">').f(n.get(["fn"], !1), n, "h").w(" ").f(n.get(["ln"], !1), n, "h").w('</div>\n                    <div class="Fz(13px) Ell C($mailTstamp) Pt(2px)" id="uh-as-email">').x(n.get(["em"], !1), n, {
                "else": u,
                block: o
            }, {}).w('</div>\n                    <div class="Py(10px)">\n                        <a id="uh-settings" href="').f(n.get(["profileUrl"], !1), n, "h").w('" target="_top"\n                            ').h("rapid_data_attr", n, {}, {
                sec: "uh",
                subsec: "profile",
                slk: "acct-info",
                elm: "btn"
            }).w('\nclass="Td(n) C(#000) C($menuLink):h Fz(13px)"\n                            tabindex="4" aria-label="').h("intlMessage", n, {}, {
                _key: "ACCOUNT_INFO"
            }).w(" ").h("intlMessage", n, {}, {
                _key: "FOR"
            }).w(": ").x(n.get(["em"], !1), n, {
                "else": g,
                block: _
            }, {}).w('"\n                            >').h("intlMessage", n, {}, {
                _key: "ACCOUNT_INFO"
            }).w("</a>\n                    </div>\n                    \n                    ").x(n.get(["userIntentMgmt"], !1), n, {
                block: h
            }, {}).w("\n</div>\n            </div>\n        ")
        }

        function c(t, n) {
            return t.w('\n<div id="uh-as-loading" class="Pos(a) End(16px) T(16px) W(22px) H(22px) Bgz(22px) Bgi($animatedSpinner) ua-ie8_D(n)"></div>\n                ')
        }

        function l(t, n) {
            return t.w(" Lh(1) IconProfile Icon-Fp2")
        }

        function r(t, n) {
            return t.w('style="background-image:url(').f(n.get(["imageUrl"], !1), n, "h").w(');"')
        }

        function u(t, n) {
            return t.f(n.get(["alias"], !1), n, "h")
        }

        function o(t, n) {
            return t.f(n.get(["em"], !1), n, "h")
        }

        function g(t, n) {
            return t.f(n.get(["alias"], !1), n, "h")
        }

        function _(t, n) {
            return t.f(n.get(["em"], !1), n, "h")
        }

        function h(t, n) {
            return t.w('\n<div class="Bdtc($c-fuji-grey-c) Bdts(s) Bdtw(1px) Cl(b) List(n)" id="profile-userintentmgmt">\n                            <button class="wafer-toggle wafer-fetch Bgc(t) Bdw(0) C($c-fuji-grey-l) D(b) Ell Fz(13px) P(0) O(n) W(100%) has-click" data-ylk="elm:btn;itc:1" data-wf-trigger="eachClick" data-wf-target=".userintentmgmt" data-wf-toggle-class="click:toggle:userintentmgmt-show" data-wf-toggle-target=".userintentmgmt" data-wf-url="/tdv2_fp/remote?ctrl=UserIntentMgmt&m_id=tdv2-applet-cards&m_mode=json&config.xhrPathPrefix=/tdv2_fp/remote&config.alwaysUseFullView=1">\n                                <span class="Fl(start) My(10px)">').h("intlMessage", n, {}, {
                _key: "USER_INTENT_MANAGE_PUBLISHERS"
            }).w("</span>\n                            </button>\n                        </div>\n                    ")
        }

        function w(t, n) {
            return t.w("\n").x(n.get(["crumbError"], !1), n, {
                block: f
            }, {}).w("\n")
        }

        function f(t, n) {
            return t.w('\n<div class="Whs(n) Bgc(#fcf8e3) Ov(h) Pos(r)">\n                    <div class="P(16px)">').h("intlMessage", n, {}, {
                _key: "ACCOUNT_SWITCH_CRUMB_ERR"
            }).w("</div>\n                </div>\n            ")
        }

        function p(t, n) {
            return t.w('\n<ul class="Pos(r) My(0)! P(0)! C(#000)" id="uh-as-acct-list">\n            ').s(n.get(["users"], !1), n, {
                block: m
            }, {}).w("\n</ul>\n        ")
        }

        function m(t, n) {
            return t.w("\n").h("lt", n, {
                block: x
            }, {
                key: n.get(["$idx"], !1),
                value: n.get(["accountLimit"], !1)
            }).w("\n")
        }

        function x(t, n) {
            return t.w('\n<li class="Bdw(0) Bds(s) Bdc(#fff) Bgc($menuItmHvr):h Bdtc($menuFooterBdr) Bdts(s) Bdtw(1px)">\n                    \n\n                    <a class="Td(n) Td(n):h Py(16px) D(b) Cf C(#000)"\n                        ').h("rapid_data_attr", n, {}, {
                sec: "uh",
                subsec: "profile",
                slk: "acct-switch",
                elm: "btn",
                cpos: n.get(["acctPos"], !1)
            }).w('\nhref="').f(n.get(["switchUrl"], !1), n, "h").w('" tabindex="4" aria-label="').h("intlMessage", n, {}, {
                _key: "SWITCH_TO"
            }).w(": ").x(n.get(["em"], !1), n, {
                "else": B,
                block: b
            }, {}).w('" >\n\n                        <div class="Zoom Va(t) Ta(c) Fl(start) W($asIconWidth)">\n                           <i class="Bdrs(45%) Bgz(cv) C($avatar) Cur(p) D(ib) Fz(40px) H(40px) W(40px)').nx(n.get(["imageUrl"], !1), n, {
                block: y
            }, {}).w('" ').s(n.get(["imageUrl"], !1), n, {
                block: v
            }, {}).w('></i>\n                        </div>\n\n                        <div class="W(2/3) D(ib) Zoom Lts(n) Tren(a) Va(t) Fl(start)">\n                            <div class="Fz(15px) Ell C(#000)">').f(n.get(["fn"], !1), n, "h").w(" ").f(n.get(["ln"], !1), n, "h").w('</div>\n                            <div class="Ell C($mailTstamp) Fz(13px) Pt(2px)">\n                                \n                                ').x(n.get(["em"], !1), n, {
                "else": C,
                block: k
            }, {}).w("\n</div>\n                        </div>\n                    </a>\n                </li>\n                ")
        }

        function B(t, n) {
            return t.f(n.get(["alias"], !1), n, "h")
        }

        function b(t, n) {
            return t.f(n.get(["em"], !1), n, "h")
        }

        function y(t, n) {
            return t.w(" Lh(1) IconProfile Icon-Fp2")
        }

        function v(t, n) {
            return t.w('style="background-image:url(').f(n.get(["imageUrl"], !1), n, "h").w(');"')
        }

        function C(t, n) {
            return t.w("\n").f(n.get(["alias"], !1), n, "h").w("\n")
        }

        function k(t, n) {
            return t.w("\n").f(n.get(["em"], !1), n, "h").w("\n")
        }

        function T(t, n) {
            return t.w('\n<a class="Bgc($menuItmHvr):h D(b) C(#000)! Cf Bdtc($menuFooterBdr) Bdts(s) Bdtw(1px) H(50px) Whs(nw) Pend(10px) Fz(15px) Whs(nw) Td(n):h Pend(10px)" href="').f(n.get(["manageUrl"], !1), n, "h").w('"\n            ').h("rapid_data_attr", n, {}, {
                sec: "uh",
                subsec: "profile",
                slk: "add-acct",
                elm: "btn"
            }).w(' tabindex="4">\n            <i class="W($asIconWidth) D(ib) Va(m) Ta(c) Fz(30px) Fw(200) Lh(1.5)" aria-hidden="true" role="presentation">+</i>\n            <span class="D(ib) Va(m) Ta(c) Fz(15px) Pt(6px)">').nx(n.get(["users"], !1), n, {
                "else": P,
                block: U
            }, {}).w("</span>\n        </a>\n        ")
        }

        function P(t, n) {
            return t.h("intlMessage", n, {}, {
                _key: "ADD_MANAGE_ACCOUNT"
            })
        }

        function U(t, n) {
            return t.h("intlMessage", n, {}, {
                _key: "ADD_ACCOUNT"
            })
        }
        return dust.register("td-applet-mega-header-templates-accountSwitchPanel", n), n.__dustBody = !0, e.__dustBody = !0, s.__dustBody = !0, a.__dustBody = !0, d.__dustBody = !0, i.__dustBody = !0, c.__dustBody = !0, l.__dustBody = !0, r.__dustBody = !0, u.__dustBody = !0, o.__dustBody = !0, g.__dustBody = !0, _.__dustBody = !0, h.__dustBody = !0, w.__dustBody = !0, f.__dustBody = !0, p.__dustBody = !0, m.__dustBody = !0, x.__dustBody = !0, B.__dustBody = !0, b.__dustBody = !0, y.__dustBody = !0, v.__dustBody = !0, C.__dustBody = !0, k.__dustBody = !0, T.__dustBody = !0, P.__dustBody = !0, U.__dustBody = !0, n
    }(), dust.cache["td-applet-mega-header:accountSwitchPanel.dust"] = dust.cache["td-applet-mega-header:accountSwitchPanel"] = dust.cache[n], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-mega-header/templates/accountSwitchPanel"] = function(t, e) {
        t = t || {}, dust.render(n, t, e)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-mega-header-templates-banner", function(e, a) {
    dust.cache = dust.cache || {}, dust.cache[a] = function(e) {
        function a(e, a) {
            return e.w('<div id="mega-banner" class="Pos(r) Miw(1000px) H(72px) Bg($bannerGradient) C(#fff) ').f(a.getPath(!1, ["theme", "banner"]), a, "h").w('">\n    <div class="D(ib) Mstart(64px)">\n        <div class="Fz(18px) Fw(b) Mt(13px) Mb(4px)">').f(a.getPath(!1, ["intl", "messages", "BANNER_PROMO_TITLE"]), a, "h").w('</div>\n        <div id="mega-banner-desc" class="Fz(13px)">').f(a.getPath(!1, ["intl", "messages", "BANNER_PROMO_DESC"]), a, "h").w('</div>\n    </div>\n    <ul class="D(ib) Pos(a) End(88px) Mt(21px)">\n        <li class="D(ib)">\n            <button type="button" id="mega-banner-add" class="Fz(13px) W(110px) H(29px) Bdrs(2px) Bgc($bannerBtn)" aria-label="Install Browser Extension" aria-describedby="mega-banner-desc">').f(a.getPath(!1, ["intl", "messages", "BANNER_PROMO_ADD"]), a, "h").w('</button>\n        </li>\n        <li class="D(ib) Mend(10px)">\n            <button type="button" id="mega-banner-close" class="Fz(13px)" aria-label="Close Browser Extension Promo" aria-describedby="mega-banner-desc">').f(a.getPath(!1, ["intl", "messages", "BANNER_PROMO_CLOSE"]), a, "h").w("</button>\n        </li>\n    </ul>\n</div>\n")
        }
        return dust.register("td-applet-mega-header-templates-banner", a), a.__dustBody = !0, a
    }(), dust.cache["td-applet-mega-header:banner.dust"] = dust.cache["td-applet-mega-header:banner"] = dust.cache[a], e.Template._cache = e.Template._cache || {}, e.Template._cache["td-applet-mega-header/templates/banner"] = function(e, t) {
        e = e || {}, dust.render(a, e, t)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-mega-header-templates-bottombar", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('<div id="mega-bottombar" class="Pos(r) H(22px) Pstart(22px) Pb(10px) ').f(e.getPath(!1, ["theme", "bottomBarWrapper"]), e, "h").w('">\n    <ul class="Miw(1000px) Mx(a) HideBottomBar_Op(0) Reader-open_Op(0) ').f(e.getPath(!1, ["theme", "bottomBarInnerWrapper"]), e, "h").w('" role="navigation">\n        ').s(e.getPath(!1, ["navigation", "bottom", "links"]), e, {
                block: a
            }, {}).w("\n</ul>\n</div>\n")
        }

        function a(t, e) {
            return t.w("\n").h("eq", e, {
                "else": n,
                block: _
            }, {
                key: e.get(["type"], !1),
                value: "menu"
            }).w("\n")
        }

        function n(t, e) {
            return t.w("\n").h("eq", e, {
                "else": o,
                block: l
            }, {
                key: e.get(["property"], !1),
                value: "mail"
            }).w("\n")
        }

        function o(t, e) {
            return t.w('\n<li class="D(ib) Mstart(21px) ').f(e.getPath(!1, ["theme", "bottomBarList"]), e, "h").w('">\n                    <a href="').f(e.get(["url"], !1), e, "h").w('" class="Fz(14px) Fw(b) ').f(e.getPath(!1, ["theme", "bottomBarText"]), e, "h").x(e.get(["viewer"], !1), e, {
                block: r
            }, {}).w('" ').h("rapid_data_attr", e, {}, {
                sec: "nav",
                g: s,
                slk: i,
                rspns: "nav",
                t1: "a1",
                t2: "hd",
                t3: "tb",
                t5: p,
                itc: "0",
                elm: "itm",
                elmt: "pty",
                cpos: d
            }).w(" ").x(e.get(["viewer"], !1), e, {
                block: u
            }, {}).w('><i class="Pos(a) Fz(15px) Start(10px) T(-2px) ').f(e.get(["iconClasses"], !1), e, "h").w(" ").f(e.getPath(!1, ["theme", "bottomBarIcon"]), e, "h").w('"></i>').f(e.get(["title"], !1), e, "h").w("</a>\n                </li>\n            ")
        }

        function r(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function s(t, e) {
            return t.f(e.get(["uuid"], !1), e, "h")
        }

        function i(t, e) {
            return t.f(e.get(["property"], !1), e, "h")
        }

        function p(t, e) {
            return t.f(e.get(["property"], !1), e, "h")
        }

        function d(t, e) {
            return t.f(e.get(["position"], !1), e, "h")
        }

        function u(t, e) {
            return t.w(' data-uuid="').f(e.get(["uuid"], !1), e, "h").w('" data-uuid-list="').f(e.get(["property"], !1), e, "h").w('" ').x(e.get(["viewerConf"], !1), e, {
                block: c
            }, {})
        }

        function c(t, e) {
            return t.w("data-viewer-conf='").f(e.get(["viewerConf"], !1), e, "h", ["js"]).w("'")
        }

        function l(t, e) {
            return t.w('\n<li class="D(ib) Mstart(21px) ').f(e.getPath(!1, ["theme", "bottomBarList"]), e, "h").w(' Pos(r)">\n                    <a id="mega-bottombar-mail" href="').f(e.get(["mailUrl"], !1), e, "h").w('" class="C(#4d00ae) Fz(14px) Fw(b) Pstart(6px) ').f(e.getPath(!1, ["theme", "bottomBarText"]), e, "h").w('" ').h("rapid_data_attr", e, {}, {
                sec: "nav",
                slk: h,
                rspns: "nav",
                t1: "a1",
                t2: "hd",
                t3: "tb",
                t5: f,
                itc: "0",
                elm: "itm",
                elmt: "pty",
                cpos: m
            }).w('><i class="Pos(a) Fz(28px) Fw(100) Start(-23px) T(-9px) ').f(e.get(["iconClasses"], !1), e, "h").w(" ").f(e.getPath(!1, ["theme", "bottomBarIcon"]), e, "h").w('"></i><b id="bottombar-mail-dot" class="Pos(a) Bdrs(11px) W(8px) H(8px) T(-7px) Start(-4px) Bd($mailDotBdr) D(n)! ').f(e.getPath(!1, ["theme", "bottomBarMailDot"]), e, "h").w('"></b><span class="Mstart(2px)">').f(e.get(["title"], !1), e, "h").w('</span><div id="bottombar-mail-count" class="D(ib) Fz(13px) Fw(n) Mstart(3px) D(n)!">(<span id="bottombar-mail-count-num" class="Mx(2px) Fz(14px)"></span>)</div></a>\n                </li>\n            ')
        }

        function h(t, e) {
            return t.f(e.get(["property"], !1), e, "h")
        }

        function f(t, e) {
            return t.f(e.get(["property"], !1), e, "h")
        }

        function m(t, e) {
            return t.f(e.get(["position"], !1), e, "h")
        }

        function _(t, e) {
            return t.w('\n<li class="D(ib) Mstart(10px) navigation-menu">\n                <a href="').f(e.get(["url"], !1), e, "h").w('" class="navigation-menu-title Pos(r) C(#4d00ae) Pstart(12px) Pend(24px) Py(4px) Fz(13px) menu-open_Bgc(#fff) menu-open_Z(8) rapidnofollow" ').h("rapid_data_attr", e, {}, {
                sec: "nav",
                slk: b,
                rspns: "op",
                t1: "a1",
                t2: "hd",
                t3: "tb",
                t5: g,
                itc: "1",
                elmt: "mu",
                cpos: w
            }).w(' tabindex="1">').f(e.get(["title"], !1), e, "h").w('<i class="Pos(a) Pt(2px) Pstart(6px) Fw(b) Icon-Fp2 IconDownCaret"></i></a>\n                <div class="Pos(a) Bgc(#fff) Bxsh($topbarMenuShadow) Z(7) V(h) Op(0) menu-open_V(v) menu-open_Op(1)">\n                    <ul class="Px(12px) Py(5px)">\n                    ').s(e.get(["links"], !1), e, {
                block: x
            }, {}).w("\n</ul>\n                </div>\n            </li>\n        ")
        }

        function b(t, e) {
            return t.f(e.get(["property"], !1), e, "h")
        }

        function g(t, e) {
            return t.f(e.get(["property"], !1), e, "h")
        }

        function w(t, e) {
            return t.f(e.get(["position"], !1), e, "h")
        }

        function x(t, e) {
            return t.w('\n<li class="D(b)">\n                            <a href="').f(e.get(["url"], !1), e, "h").w('" class="D(b) Fz(13px) Py(3px) Td(n) Td(u):h" ').h("rapid_data_attr", e, {}, {
                sec: "nav",
                slk: y,
                rspns: "nav",
                t1: "a1",
                t2: "hd",
                t3: "tb",
                t5: B,
                itc: "0",
                elm: "itm",
                elmt: "pty",
                cpos: P
            }).w(' tabindex="1">').f(e.get(["title"], !1), e, "h").w("</a>\n                        </li>\n                    ")
        }

        function y(t, e) {
            return t.f(e.get(["property"], !1), e, "h")
        }

        function B(t, e) {
            return t.f(e.get(["property"], !1), e, "h")
        }

        function P(t, e) {
            return t.f(e.get(["position"], !1), e, "h")
        }
        return dust.register("td-applet-mega-header-templates-bottombar", e), e.__dustBody = !0, a.__dustBody = !0, n.__dustBody = !0, o.__dustBody = !0, r.__dustBody = !0, s.__dustBody = !0, i.__dustBody = !0, p.__dustBody = !0, d.__dustBody = !0, u.__dustBody = !0, c.__dustBody = !0, l.__dustBody = !0, h.__dustBody = !0, f.__dustBody = !0, m.__dustBody = !0, _.__dustBody = !0, b.__dustBody = !0, g.__dustBody = !0, w.__dustBody = !0, x.__dustBody = !0, y.__dustBody = !0, B.__dustBody = !0, P.__dustBody = !0, e
    }(), dust.cache["td-applet-mega-header:bottombar.dust"] = dust.cache["td-applet-mega-header:bottombar"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-mega-header/templates/bottombar"] = function(t, a) {
        t = t || {}, dust.render(e, t, a)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-mega-header-templates-coBrandedPartnerLogo", function(e, t) {
    dust.cache = dust.cache || {}, dust.cache[t] = function(e) {
        function t(e, t) {
            return e.w('<div class="Fz(0) Pos(a) ').f(t.getPath(!1, ["theme", "partnerLogoImageAnchor"]), t, "h").w(' Mstart(0px)!--sm1170">\n    <a id="uh-logo-left-link" class="').f(t.getPath(!1, ["theme", "coBrandedLogoLeft"]), t, "h").w('" href=').f(t.getPath(!1, ["logo", "leftLink"]), t, "h").w('>\n        <b class="Hidden Tt(c)">').f(t.getPath(!1, ["logo", "partnerName"]), t, "h").w('</b>\n    </a>\n    <a id="uh-logo-right-link" class="').f(t.getPath(!1, ["theme", "coBrandedLogoRight"]), t, "h").w('" href=').f(t.getPath(!1, ["logo", "rightLink"]), t, "h").w('>\n        <b class="Hidden Tt(c)">My Yahoo</b>\n    </a>\n</div>')
        }
        return dust.register("td-applet-mega-header-templates-coBrandedPartnerLogo", t), t.__dustBody = !0, t
    }(), dust.cache["td-applet-mega-header:coBrandedPartnerLogo.dust"] = dust.cache["td-applet-mega-header:coBrandedPartnerLogo"] = dust.cache[t], e.Template._cache = e.Template._cache || {}, e.Template._cache["td-applet-mega-header/templates/coBrandedPartnerLogo"] = function(e, a) {
        e = e || {}, dust.render(t, e, a)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-mega-header-templates-dialpad", function(a, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(a) {
        function e(a, e) {
            return a.x(e.getPath(!1, ["ui", "dialpad"]), e, {
                block: t
            }, {}).w("\n")
        }

        function t(a, e) {
            return a.w('\n<li id="uh-dialpad" class="uh-menu uh-dialpad Fl(start) Mend(18px) Pos(r)" role="menuitem">\n        <button class="uh-menu-btn Bd(0) Px(4px)" aria-label="').f(e.getPath(!1, ["intl", "messages", "NAVIGATION"]), e, "h").w('" aria-haspopup="true" aria-expanded="true" tabindex="5" title="').f(e.getPath(!1, ["intl", "messages", "NAVIGATION"]), e, "h").w('" data-ylk="slk:navigation;elm:btn;itc:1;">\n            <i class="uh-dialpad-icon Icon-Fp2 IconMoreOnYahoo Fz(26px) Lh(34px) C(#6001d2)"></i>\n        </button>\n        <div id="uh-dialpad-featurecue" class="D(n) featureCue_D(b) Mah(45px) Pos(a) Start(-50px) T(50px)">\n            <div class="B(100%) Bd($dialPadFeatureCueBg) Bdbc($signInBtn) Cnt($space) Mstart(-15px) Pe(n) Pos(a) Start(50%) H(0) W(0)"></div>\n            <div class="Bgc($signInBtn) Bdrs(5px) C($headerBdr) Fz(12px) P(10px) Ta(c) W(110px)">').h("intlMessage", e, {}, {
                _key: "DIALPAD_FEATURE_CUE_MSG"
            }).w('</div>\n        </div>\n        <div id="uh-dialpad-panel" class="uh-dialpad-panel uh-menu-panel Pos(a) Start(-125px) End(0) T(45px) W(280px) V(h) Op(0) Bgc($menuBgc) Bd Bdc($menuBdr) Bdrs(4px) Bxsh($menuShadow) Ov(h) Trs($menuTransition) Cur(d) uh-dialpad:h_V(v) uh-dialpad:h_Op(1) panel-open_V(v) panel-open_Op(1)"\n            aria-label="').f(e.getPath(!1, ["intl", "messages", "NAVIGATION"]), e, "h").w('" role="menu">\n            <ul class="Py(15px)">\n                ').s(e.getPath(!1, ["navigation", "dialpad", "links"]), e, {
                block: n
            }, {}).w('\n</ul>\n            <a href="').f(e.getPath(!1, ["navigation", "dialpad", "footer", "url"]), e, "h").w('" class="Bgc(#f1f1f5) C(#020e65) C(#006eff):h D(b) rapid-noclick-resp Ta(c) Td(n) Py(15px) Px(0) footer Ov(h) Lts(1px) Fz(12px)"\n                data-ylk="').f(e.getPath(!1, ["navigation", "dialpad", "footer", "i13n"]), e, "h").w('" tabindex="5" target="_blank" rel="noopener">').f(e.getPath(!1, ["navigation", "dialpad", "footer", "title"]), e, "h").w("</a>\n        </div>\n    </li>\n")
        }

        function n(a, e) {
            return a.w('\n<li class="D(ib) List(n) Ta(c)">\n                        <a href="').f(e.get(["url"], !1), e, "h").w('" class="D(tbc) Ta(c) Td(n) Va(m) Fz(12px) C(#020e65) C(#006eff):h rapid-noclick-resp W(90px) H(90px)" data-ylk="').f(e.get(["i13n"], !1), e, "h").w('" tabindex="5" target="_blank" rel="noopener">\n                            <span class="').f(e.get(["iconClasses"], !1), e, "h").w(' Bgr(nr) D(ib) Bgz(50px) W(50px) H(35px)"></span>\n                            <span class="D(ib) Ov(h) Tov(e) W(75px) Whs(nw)">').f(e.get(["title"], !1), e, "h").w("</span>\n                        </a>\n                    </li>\n                ")
        }
        return dust.register("td-applet-mega-header-templates-dialpad", e), e.__dustBody = !0, t.__dustBody = !0, n.__dustBody = !0, e
    }(), dust.cache["td-applet-mega-header:dialpad.dust"] = dust.cache["td-applet-mega-header:dialpad"] = dust.cache[e], a.Template._cache = a.Template._cache || {}, a.Template._cache["td-applet-mega-header/templates/dialpad"] = function(a, t) {
        a = a || {}, dust.render(e, a, t)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-mega-header-templates-helpPanel", function(e, a) {
    dust.cache = dust.cache || {}, dust.cache[a] = function(e) {
        function a(e, a) {
            return e.w('<li id="uh-help" class="uh-menu uh-help Fl(end) Mstart(26px) Pos(r)" role="menuitem">\n    <button class="uh-menu-btn Bd(0) Bgc(t) Px(4px) " aria-label="').f(a.getPath(!1, ["intl", "messages", "HELP"]), a, "h").w('" aria-haspopup="true" aria-expanded="true" tabindex="6" title="').f(a.getPath(!1, ["intl", "messages", "HELP"]), a, "h").w('" data-ylk="slk:help;elm:btn;itc:1;">\n        <i class="uh-help-icon Icon-Fp2 IconGearLine Fz(22px) Lh(34px) C(#6001d2) DarkTheme_C(#fff)"></i>\n    </button>\n    <div id="uh-help-panel" class="uh-help-panel uh-menu-panel Pos(a) End(0) T(45px) W(100px) V(h) Op(0) Bgc($menuBgc) Bd Bdc($menuBdr) Bdrs(4px) Bxsh($menuShadow) Ov(h) Trs($menuTransition) Cur(d) uh-help:h_V(v) uh-help:h_Op(1) panel-open_V(v) panel-open_Op(1)"\n        aria-label="').f(a.getPath(!1, ["intl", "messages", "HELP"]), a, "h").w('" role="menu">\n        <ul>\n            ').s(a.getPath(!1, ["helpPanel", "links"]), a, {
                block: n
            }, {}).w("\n</ul>\n    </div>\n</li>")
        }

        function n(e, a) {
            return e.w('\n<li class="').f(a.get(["style"], !1), a, "h").w('">\n                    <a href="').f(a.get(["url"], !1), a, "h").w('" class="D(b) Td(n) Va(m) rapid-noclick-resp" data-ylk="').f(a.get(["i13n"], !1), a, "h").w('" tabindex="6" target="_blank" rel="noopener">\n                        <span class="D(ib) C(#000) C($menuLink):h Ov(h) Tov(e) W(80px) Whs(nw)">').f(a.get(["title"], !1), a, "h").w("</span>\n                    </a>\n                </li>\n            ")
        }
        return dust.register("td-applet-mega-header-templates-helpPanel", a), a.__dustBody = !0, n.__dustBody = !0, a
    }(), dust.cache["td-applet-mega-header:helpPanel.dust"] = dust.cache["td-applet-mega-header:helpPanel"] = dust.cache[a], e.Template._cache = e.Template._cache || {}, e.Template._cache["td-applet-mega-header/templates/helpPanel"] = function(e, n) {
        e = e || {}, dust.render(a, e, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-mega-header-templates-ieInstallerLightbox", function(e, t) {
    dust.cache = dust.cache || {}, dust.cache[t] = function(e) {
        function t(e, t) {
            return e.w('<div id="ieInstallerLightbox" class="D(n) Pos(f) Bgc($lightboxBgc) T(0) Start(0) W(100%) H(100%) Z(100) Ta(c)">\n    <div id="ieInstallerDialog" class="D(ib) Pos(r) W(550px) H(450px) P(40px) Bxz(bb) Bdrs(3px) C(#5f5f5f) Fw(200) Bgc(#fff) Va(m)" aria-describedby="set-homepage">\n        <h1 class="Fw(b) Fz(26px) Mb(15px) C(#000)">').f(t.getPath(!1, ["intl", "messages", "IEINSTALLER_SET_YAHOO_AS_HP"]), t, "h").w('</h1>\n        <div class="Fz(15px)">').h("intlMessage", t, {}, {
                _key: "IEINSTALLER_MODAL_TEXT"
            }).w('</div>\n        <img src="').f(t.getPath(!1, ["ieInstallerLightbox", "imgUrl"]), t, "h").w('" />\n        <div class="Fz(13px) Pos(a) B(30px)">').h("intlMessage", t, {}, {
                _key: "IEINSTALLER_PRIVACY_TERMS",
                termsUrl: t.getPath(!1, ["ieInstallerLightbox", "termsUrl"]),
                privacyUrl: t.getPath(!1, ["ieInstallerLightbox", "privacyUrl"])
            }).w('</div>\n    </div>\n    <b id="ieShim" class="D(ib) H(100%) Va(m)"></b>\n</div>\n')
        }
        return dust.register("td-applet-mega-header-templates-ieInstallerLightbox", t), t.__dustBody = !0, t
    }(), dust.cache["td-applet-mega-header:ieInstallerLightbox.dust"] = dust.cache["td-applet-mega-header:ieInstallerLightbox"] = dust.cache[t], e.Template._cache = e.Template._cache || {}, e.Template._cache["td-applet-mega-header/templates/ieInstallerLightbox"] = function(e, a) {
        e = e || {}, dust.render(t, e, a)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-mega-header-templates-logo", function(e, t) {
    dust.cache = dust.cache || {}, dust.cache[t] = function(e) {
        function t(e, t) {
            return e.w('<h1 class="').f(t.getPath(!1, ["theme", "logoWrapper"]), t, "h").w('">\n    <a id="uh-logo" href="').f(t.get(["logoUrl"], !1), t, "h").w('" class="D(ib) Bgr(nr) ').f(t.getPath(!1, ["theme", "logoImageAnchor"]), t, "h").w('"').x(t.getPath(!1, ["ui", "logoImageUrl"]), t, {
                block: a
            }, {}).x(t.getPath(!1, ["ui", "logoAnimatedImageUrl"]), t, {
                block: o
            }, {}).w(" ").h("rapid_data_attr", t, {}, {
                rspns: "nav",
                t1: "a1",
                t2: "hd",
                sec: "hd",
                itc: "0",
                slk: "logo",
                elm: "img",
                elmt: "logo"
            }).w(' tabindex="1">\n        <b class="Hidden">Yahoo</b>\n    </a>\n</h1>\n')
        }

        function a(e, t) {
            return e.w(' style="background-image:url(').f(t.getPath(!1, ["ui", "logoImageUrl"]), t, "h").w(')"')
        }

        function o(e, t) {
            return e.w(' data-animated-image-url="').f(t.getPath(!1, ["ui", "logoAnimatedImageUrl"]), t, "h").w('"')
        }
        return dust.register("td-applet-mega-header-templates-logo", t), t.__dustBody = !0, a.__dustBody = !0, o.__dustBody = !0, t
    }(), dust.cache["td-applet-mega-header:logo.dust"] = dust.cache["td-applet-mega-header:logo"] = dust.cache[t], e.Template._cache = e.Template._cache || {}, e.Template._cache["td-applet-mega-header/templates/logo"] = function(e, a) {
        e = e || {}, dust.render(t, e, a)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-mega-header-templates-mail", function(e, a) {
    dust.cache = dust.cache || {}, dust.cache[a] = function(e) {
        function a(e, a) {
            return e.x(a.getPath(!1, ["ui", "mail"]), a, {
                block: n
            }, {}).w("\n")
        }

        function n(e, a) {
            return e.w('\n<li id="uh-mail" class="uh-menu uh-mail D(ib) Mstart(14px) ua-ie8_Pb(10px) ua-ie9_Pb(10px)" role="menuitem">\n        <a id="uh-mail-link" href="').f(a.get(["mailUrl"], !1), a, "h").w('" class="Pos(r) D(ib) Ta(s) Td(n):h uh-menu-btn ').f(a.getPath(!1, ["theme", "menuBtn"]), a, "h").w('" aria-label="').f(a.getPath(!1, ["intl", "messages", "MAIL"]), a, "h").w('" aria-haspopup="true" role="button" aria-expanded="true" tabindex="6" data-ylk="sec:hd;slk:Mail;t1:a1;t2:hd;elm:btn;itc:0;"><i class="uh-mail-icon Lh($userNavIconLh) W(28px) ').f(a.getPath(!1, ["theme", "mailBtnIcon"]), a, "h").w(' Fz(30px) Grid-U Icon-Fp2 IconMail"></i><span class=" D(ib) Fz(14px) Fw(b) Va(t) ').f(a.getPath(!1, ["theme", "mailBtnText"]), a, "h").w('">').x(a.get(["isCorpAccount"], !1), a, {
                "else": t,
                block: s
            }, {}).w('</span>\n            <span class="uh-mail-count D(n) display-count_D(b) Pos(a) T(-7px) Start(16px) Fw(b) Ta(c) ').f(a.getPath(!1, ["theme", "mailBtnCount"]), a, "h").w('"></span>\n        </a>\n        ').x(a.getPath(!1, ["ui", "mailpreview"]), a, {
                block: l
            }, {}).w("\n</li>\n")
        }

        function t(e, a) {
            return e.h("intlMessage", a, {}, {
                _key: "MAIL"
            })
        }

        function s(e, a) {
            return e.h("intlMessage", a, {}, {
                _key: "CORPMAIL"
            })
        }

        function l(e, a) {
            return e.w('\n<div class="uh-mail-preview uh-menu-panel Pos(a) End(0) T(45px) W(380px) Bgc($menuBgc) Bd Bdc($menuBdr) Bdrs(4px) Bxsh($menuShadow) Trs($menuTransition) V(h) Op(0) Mah(0) uh-mail:h_V(v) uh-mail:h_Op(1) ').x(a.get(["mailEarnyUpsell"], !1), a, {
                "else": i,
                block: u
            }, {}).w(" panel-open_V(v) panel-open_Op(1) ").x(a.get(["mailEarnyUpsell"], !1), a, {
                "else": d,
                block: h
            }, {}).nx(a.get(["isSignedInUser"], !1), a, {
                block: r
            }, {}).w('" role="menu" aria-label="').f(a.getPath(!1, ["intl", "messages", "MAIL"]), a, "h").w('">\n\n            ').x(a.get(["isRecognizedUser"], !1), a, {
                "else": c,
                block: m
            }, {}).w("\n</div>\n        ")
        }

        function i(e, a) {
            return e.w("uh-mail:h_Mah($panelMah)")
        }

        function u(e, a) {
            return e.w("uh-mail:h_Mah($panelEarnyMah)")
        }

        function d(e, a) {
            return e.w("panel-open_Mah($panelMah)")
        }

        function h(e, a) {
            return e.w("panel-open_Mah($panelEarnyMah)")
        }

        function r(e, a) {
            return e.w(" uh-underbell-promo_D(n)")
        }

        function c(e, a) {
            return e.w("\n").x(a.get(["isSignedInUser"], !1), a, {
                "else": p,
                block: o
            }, {}).w("\n")
        }

        function p(e, a) {
            return e.w('\n<div class="Px(24px) Py(20px) Ta(c)">\n                        <a class="C($menuLink) Fw(b) Td(n)" href="').f(a.get(["loginUrl"], !1), a, "h").w('" ').h("rapid_data_attr", a, {}, {
                t3: "usr",
                elm: "btn",
                elmt: "lgn",
                outcome: "lgn"
            }).w(">").f(a.getPath(!1, ["intl", "messages", "SIGNIN"]), a, "h").w("</a> ").f(a.getPath(!1, ["intl", "messages", "TO_VIEW_MAIL"]), a, "h").w("\n</div>\n                ")
        }

        function o(e, a) {
            return e.w('\n<div class="uh-mail-loading Py(16px) Px(24px) Ta(c)">\n                        <div class="W(30px) H(30px) Mx(a) My(12px) Bgz(30px) Bgi($animatedSpinner) ua-ie8_D(n)"></div>\n                        <span class="C($mailTstamp) D(n) ua-ie8_D(b)">').f(a.getPath(!1, ["intl", "messages", "LOADING_MAIL"]), a, "h").w("</span>\n                    </div>\n                ")
        }

        function m(e, a) {
            return e.w('\n<div class="Px(24px) Py(20px) Ta(c)">\n                    <a class="C($menuLink) Fw(b) Td(n)" href="').f(a.get(["loginUrl"], !1), a, "h").w('" ').h("rapid_data_attr", a, {}, {
                t3: "usr",
                elm: "btn",
                elmt: "lgn",
                outcome: "lgn"
            }).w(">").f(a.getPath(!1, ["intl", "messages", "SIGNIN"]), a, "h").w("</a> ").f(a.getPath(!1, ["intl", "messages", "TO_VIEW_MAIL"]), a, "h").w("\n</div>\n            ")
        }
        return dust.register("td-applet-mega-header-templates-mail", a), a.__dustBody = !0, n.__dustBody = !0, t.__dustBody = !0, s.__dustBody = !0, l.__dustBody = !0, i.__dustBody = !0, u.__dustBody = !0, d.__dustBody = !0, h.__dustBody = !0, r.__dustBody = !0, c.__dustBody = !0, p.__dustBody = !0, o.__dustBody = !0, m.__dustBody = !0, a
    }(), dust.cache["td-applet-mega-header:mail.dust"] = dust.cache["td-applet-mega-header:mail"] = dust.cache[a], e.Template._cache = e.Template._cache || {}, e.Template._cache["td-applet-mega-header/templates/mail"] = function(e, n) {
        e = e || {}, dust.render(a, e, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-mega-header-templates-mailPreviewEarnyUpsell", function(e, a) {
    dust.cache = dust.cache || {}, dust.cache[a] = function(e) {
        function a(e, a) {
            return e.w('<img src="').f(a.getPath(!1, ["mail", "preview", "earnyUpsellImg"]), a, "h").w('" class="Mt(13px) Mstart(24px) Fl(start)" width="60px" height="53px" alt="').f(a.getPath(!1, ["intl", "messages", "EARNY_UPSELL_IMG_ALT"]), a, "h").w('" />\n<div class="Mstart(105px) Pb(20px)">\n    <h3 class="Fz(13px) C(#26282a) Fw(b)">').f(a.getPath(!1, ["intl", "messages", "EARNY_UPSELL_HEADING"]), a, "h").w('</h3>\n    <p class="Fz(13px) C(#b2b2b2) Pt(4px) Mb(25px)">').f(a.getPath(!1, ["intl", "messages", "EARNY_UPSELL_DESC"]), a, "h").w('</p>\n    <a href="').f(a.getPath(!1, ["mail", "preview", "urls", "earnyOauth"]), a, "h").w('" target="_blank" class="Mt(18px) Px(20px) Py(7px) Bgc(#188fff) C(#fff) Fz(13px) Fw(b) Bdrs(2px) Td(n) earny-btn" data-ylk="sec:hd;subsec:mail-preview;t1:a1;t2:hd;t3:ma;t4:mu;slk:mail-earny">').f(a.getPath(!1, ["intl", "messages", "EARNY_UPSELL_BUTTON_TITLE"]), a, "h").w("</a>\n</div>\n")
        }
        return dust.register("td-applet-mega-header-templates-mailPreviewEarnyUpsell", a), a.__dustBody = !0, a
    }(), dust.cache["td-applet-mega-header:mailPreviewEarnyUpsell.dust"] = dust.cache["td-applet-mega-header:mailPreviewEarnyUpsell"] = dust.cache[a], e.Template._cache = e.Template._cache || {}, e.Template._cache["td-applet-mega-header/templates/mailPreviewEarnyUpsell"] = function(e, t) {
        e = e || {}, dust.render(a, e, t)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-mega-header-templates-mailpreview", function(e, t) {
    dust.cache = dust.cache || {}, dust.cache[t] = function(e) {
        function t(e, t) {
            return e.w('<ul class="My(0) Pos(r) Td(n) W(100%)">\n    ').x(t.get(["isExpiredSession"], !1), t, {
                "else": a,
                block: b
            }, {}).w("\n</ul>\n")
        }

        function a(e, t) {
            return e.w("\n").nx(t.getPath(!1, ["data", "error"]), t, {
                "else": n,
                block: s
            }, {}).w('\n<li class="Bgc($menuFooterBgc) Bdtc($menuFooterBdr) Bdts(s) Bdtw(1px) Px(24px) Py(20px)">\n            <a class="C(#000) C($menuLink):h Fl(end) Fz(13px) Td(n)" href="').f(t.getPath(!1, ["mail", "compose", "url"]), t, "h").w('" data-ylk="sec:hd;subsec:mail-preview;t1:a1;t2:hd;t3:ma;t4:mu;slk:mail-compose;elmt=mail;cat:').f(t.getPath(!1, ["data", "newCount"]), t, "h").w(';" tabindex="6">\n                <i class="Icon-Fp2 IconNavCompose Mend(4px) Lh(.8) Fz(24px)"></i>\n                <b class="Va(t)">').f(t.getPath(!1, ["intl", "messages", "COMPOSE"]), t, "h").w('</b>\n            </a>\n            <a class="C(#000) C($menuLink):h Fz(13px) Ta(start) Td(n)" href="').f(t.getPath(!1, ["mail", "url"]), t, "h").w('" data-ylk="sec:hd;subsec:mail-preview;t1:a1;t2:hd;t3:ma;t4:mu;slk:mail-pty;elmt=prvw;cat:').f(t.getPath(!1, ["data", "newCount"]), t, "h").w(';" tabindex="6">').f(t.getPath(!1, ["intl", "messages", "GO_TO_MAIL"]), t, "h").w("</a>\n        </li>\n    ")
        }

        function n(e, t) {
            return e.w('\n<li class="Ta-c">\n                <div class="Fz(13px) Hy(n) P(10px)">').f(t.getPath(!1, ["intl", "messages", "UNABLE_TO_PREVIEW_MAIL"]), t, "h").w("</div>\n            </li>\n        ")
        }

        function s(e, t) {
            return e.w("\n\n            ").x(t.getPath(!1, ["mail", "preview", "showEarnyUpsell"]), t, {
                block: l
            }, {}).w("\n").h("eq", t, {
                "else": r,
                block: g
            }, {
                key: f,
                value: "0"
            }).w("\n\n            ").x(t.getPath(!1, ["mail", "preview", "showEarnyUpsell"]), t, {
                block: _
            }, {}).w("\n")
        }

        function l(e, t) {
            return e.w("\n").h("eq", t, {
                block: d
            }, {
                key: i,
                value: "top"
            }).w("\n")
        }

        function d(e, t) {
            return e.w('\n<li class="Pos(r) Pt(16px) Bdbc(#e0e4e9) Bdbw(8px) Bdbs(s) display-earny">\n                        ').p("td-applet-mega-header:mailPreviewEarnyUpsell", t, {}).w("\n</li>\n                ")
        }

        function i(e, t) {
            return e.f(t.getPath(!1, ["mail", "preview", "earnyUpsellPosition"]), t, "h")
        }

        function r(e, t) {
            return e.w("\n").s(t.getPath(!1, ["data", "messages"]), t, {
                block: u
            }, {}).w("\n")
        }

        function u(e, t) {
            return e.w('\n<li class="Pos(r) Bgc($menuItmHvr):h D(b) Ta(start) ').h("eq", t, {
                block: c
            }, {
                key: h,
                value: "1"
            }).w('">\n                        <a class="Bfc C(#000) D(b) Px(24px) Py(16px) Td(n) Td(n):h" href="').f(t.getPath(!1, ["mail", "preview", "urls", "message"]), t, "h").f(t.get(["mid"], !1), t, "h").w('" data-ylk="sec:hd;subsec:mail-preview;t1:a1;t2:hd;t3:ma;t4:mu;slk:message').h("eq", t, {
                block: o
            }, {
                key: p,
                value: "0"
            }).w(";elmt:prvw;cpos:").f(t.get(["$idx"], !1), t, "h").w(";cat:").f(t.getPath(!1, ["data", "newCount"]), t, "h").w(';" aria-label="').h("eq", t, {
                block: m
            }, {
                key: w,
                value: "0"
            }).f(t.getPath(!1, ["intl", "messages", "MAIL"]), t, "h").w(" ").f(t.getPath(!1, ["intl", "messages", "FROM"]), t, "h").w(": ").f(t.get(["from"], !1), t, "h").w(", ").f(t.getPath(!1, ["intl", "messages", "SUBJECT"]), t, "h").w(": ").f(t.get(["subject"], !1), t, "h").w('" tabindex="6">\n                            <b class="Pos(a) D(b) T(21px) Start(9px) W(6px) H(6px) Bdrs(10px) Bgc($newMsgBadge) uh-mail-read_D(n)"></b>\n                            <div>\n                                <b class="C($mailTstamp) Fl(end) Fz(12px)">').f(t.get(["timestamp"], !1), t, "h").w('</b>\n                                <b class="D(b) Ell Fw(b) uh-mail-read_Fw(n) Fz(13px)">').f(t.get(["from"], !1), t, "h").w('</b>\n                            </div>\n                            <b class="Cl(b) D(b) Ell Fz(13px) Pt(4px)">').f(t.get(["subject"], !1), t, "h").w("</b>\n                        </a>\n                    </li>\n                ")
        }

        function c(e, t) {
            return e.w("uh-mail-read")
        }

        function h(e, t) {
            return e.f(t.get(["isRead"], !1), t, "h")
        }

        function o(e, t) {
            return e.w("-new")
        }

        function p(e, t) {
            return e.f(t.get(["isRead"], !1), t, "h")
        }

        function m(e, t) {
            return e.f(t.getPath(!1, ["intl", "messages", "NEW"]), t, "h").w(" ")
        }

        function w(e, t) {
            return e.f(t.get(["isRead"], !1), t, "h")
        }

        function g(e, t) {
            return e.w('\n<li class="Ta(c)">\n                     <div class="Fz(13px) Hy(n) P(10px)">').f(t.getPath(!1, ["intl", "messages", "HAVE_NO_NEW_MESSAGES"]), t, "h").w("</div>\n                 </li>\n            ")
        }

        function f(e, t) {
            return e.f(t.getPath(!1, ["data", "count"]), t, "h")
        }

        function _(e, t) {
            return e.w("\n").h("eq", t, {
                block: y
            }, {
                key: P,
                value: "bottom"
            }).w("\n")
        }

        function y(e, t) {
            return e.w('\n<li class="Pos(r) Pt(16px) Bdtc(#e0e4e9) Bdtw(8px) Bdts(s) display-earny">\n                        ').p("td-applet-mega-header:mailPreviewEarnyUpsell", t, {}).w("\n</li>\n                ")
        }

        function P(e, t) {
            return e.f(t.getPath(!1, ["mail", "preview", "earnyUpsellPosition"]), t, "h")
        }

        function b(e, t) {
            return e.w('\n<li class="Px(24px) Py(20px) Ta(c)">\n            <a class="C($menuLink) Fw(b) Td(n)" href="').f(t.get(["loginUrl"], !1), t, "h").w('" ').h("rapid_data_attr", t, {}, {
                t3: "usr",
                elm: "btn",
                elmt: "lgn",
                outcome: "lgn"
            }).w(">").f(t.getPath(!1, ["intl", "messages", "SIGNIN"]), t, "h").w("</a> ").f(t.getPath(!1, ["intl", "messages", "TO_VIEW_MAIL"]), t, "h").w("\n</li>\n    ")
        }
        return dust.register("td-applet-mega-header-templates-mailpreview", t), t.__dustBody = !0, a.__dustBody = !0, n.__dustBody = !0, s.__dustBody = !0, l.__dustBody = !0, d.__dustBody = !0, i.__dustBody = !0, r.__dustBody = !0, u.__dustBody = !0, c.__dustBody = !0, h.__dustBody = !0, o.__dustBody = !0, p.__dustBody = !0, m.__dustBody = !0, w.__dustBody = !0, g.__dustBody = !0, f.__dustBody = !0, _.__dustBody = !0, y.__dustBody = !0, P.__dustBody = !0, b.__dustBody = !0, t
    }(), dust.cache["td-applet-mega-header:mailpreview.dust"] = dust.cache["td-applet-mega-header:mailpreview"] = dust.cache[t], e.Template._cache = e.Template._cache || {}, e.Template._cache["td-applet-mega-header/templates/mailpreview"] = function(e, a) {
        e = e || {}, dust.render(t, e, a)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-mega-header-templates-mailPreviewEarnyUpsell"]
});
YUI.add("td-applet-mega-header-templates-main", function(e, t) {
    dust.cache = dust.cache || {}, dust.cache[t] = function(e) {
        function t(e, t) {
            return e.x(t.getPath(!1, ["ui", "ieInstallerLightbox"]), t, {
                block: a
            }, {}).w('\n<div id="mega-uh-wrapper"').x(t.getPath(!1, ["ui", "stickyHeader"]), t, {
                block: n
            }, {}).w(' class="Bds(n) Bdc($headerBdr) Bdbw(1px) T(0) Start(0) End(0) Z(3) Zoom').nx(t.getPath(!1, ["ui", "stickyHeader"]), t, {
                block: r
            }, {}).x(t.getPath(!1, ["ui", "scrollShadow"]), t, {
                "else": l,
                block: p
            }, {}).x(t.getPath(!1, ["ui", "eyebrow"]), t, {
                block: s
            }, {}).w(" ua-ie7_Bdbs(s)! ua-ie8_Bdbs(s)!").nx(t.get(["partner"], !1), t, {
                "else": u,
                block: i
            }, {}).w(" ").f(t.getPath(!1, ["theme", "mainOuterWrapper"]), t, "h").w('">\n    ').x(t.getPath(!1, ["ui", "topbar"]), t, {
                block: c
            }, {}).w("\n").x(t.getPath(!1, ["ui", "banner"]), t, {
                block: h
            }, {}).w('\n<div class="').f(t.getPath(!1, ["theme", "mainInnerWrapper"]), t, "h").w(' Pos(r) Z(6)">\n        <div id="mega-uh" class="M(a) Miw(1000px) Pos(r) ').f(t.getPath(!1, ["theme", "mainContainer"]), t, "h").w('">\n        ').x(t.get(["partner"], !1), t, {
                "else": m,
                block: g
            }, {}).w('\n<ul class="Pos(a) List(n)  ').f(t.getPath(!1, ["theme", "mainMenuBarWrapper"]), t, "h").w('" role="menubar">').p("profile", t, {}).p("dialpad", t, {}).p("notifications", t, {}).p("mail", t, {}).w("\n").x(t.getPath(!1, ["ui", "helpMenu"]), t, {
                block: B
            }, {}).w("\n</ul>\n            ").p("search", t, {}).w("\n</div>\n    </div>\n\n    ").x(t.getPath(!1, ["ui", "bottombar"]), t, {
                block: f
            }, {}).w("\n").h("eq", t, {
                block: b
            }, {
                key: t.getPath(!1, ["ui", "scrollPromo"]),
                value: "subscriptionPromo"
            }).w("\n</div>")
        }

        function a(e, t) {
            return e.w("\n").p("ieInstallerLightbox", t, {}).w("\n")
        }

        function n(e, t) {
            return e.w(' data-plugin="sticker" data-sticker-forceposition="top"')
        }

        function r(e, t) {
            return e.x(t.getPath(!1, ["ui", "fixedHeader"]), t, {
                "else": d,
                block: o
            }, {})
        }

        function d(e, t) {
            return e.w(" Pos(a)!")
        }

        function o(e, t) {
            return e.w(" Pos(f)!")
        }

        function l(e, t) {
            return e.w(" Bxsh(n)!")
        }

        function p(e, t) {
            return e.w(" Scrolling_Bxsh($headerShadow) Scrolling_Bdc($headerBdrScroll) has-scrolled_Bxsh($headerShadow) has-scrolled_Bdc($headerBdrScroll)")
        }

        function s(e, t) {
            return e.w(" Bdt($headerBdt)!")
        }

        function u(e, t) {
            return e.w(" Bgc($").f(t.getPath(!1, ["theme", "light"]), t, "h").w(")")
        }

        function i(e, t) {
            return e.w(" Bgc(#fff)")
        }

        function c(e, t) {
            return e.w("\n").p("topbar", t, {}).w("\n")
        }

        function h(e, t) {
            return e.w("\n").p("banner", t, {}).w("\n")
        }

        function m(e, t) {
            return e.w("\n").p("logo", t, {}).w("\n")
        }

        function g(e, t) {
            return e.w("\n").x(t.getPath(!1, ["logo", "coBrandedLogo"]), t, {
                "else": w,
                block: _
            }, {}).w("\n")
        }

        function w(e, t) {
            return e.w("\n").p("partnerLogo", t, {}).w("\n")
        }

        function _(e, t) {
            return e.w("\n").p("coBrandedPartnerLogo", t, {}).w("\n")
        }

        function B(e, t) {
            return e.w("\n").p("helpPanel", t, {}).w("\n")
        }

        function f(e, t) {
            return e.w("\n").p("bottombar", t, {}).w("\n")
        }

        function b(e, t) {
            return e.p("scrollPromo", t, {})
        }
        return dust.register("td-applet-mega-header-templates-main", t), t.__dustBody = !0, a.__dustBody = !0, n.__dustBody = !0, r.__dustBody = !0, d.__dustBody = !0, o.__dustBody = !0, l.__dustBody = !0, p.__dustBody = !0, s.__dustBody = !0, u.__dustBody = !0, i.__dustBody = !0, c.__dustBody = !0, h.__dustBody = !0, m.__dustBody = !0, g.__dustBody = !0, w.__dustBody = !0, _.__dustBody = !0, B.__dustBody = !0, f.__dustBody = !0, b.__dustBody = !0, t
    }(), dust.cache["td-applet-mega-header:main.dust"] = dust.cache["td-applet-mega-header:main"] = dust.cache[t], e.Template._cache = e.Template._cache || {}, e.Template._cache["td-applet-mega-header/templates/main"] = function(e, a) {
        e = e || {}, dust.render(t, e, a)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-mega-header-templates-ieInstallerLightbox", "td-applet-mega-header-templates-topbar", "td-applet-mega-header-templates-banner", "td-applet-mega-header-templates-coBrandedPartnerLogo", "td-applet-mega-header-templates-partnerLogo", "td-applet-mega-header-templates-logo", "td-applet-mega-header-templates-profile", "td-applet-mega-header-templates-dialpad", "td-applet-mega-header-templates-notifications", "td-applet-mega-header-templates-mail", "td-applet-mega-header-templates-helpPanel", "td-applet-mega-header-templates-search", "td-applet-mega-header-templates-bottombar", "td-applet-mega-header-templates-scrollPromo"]
});
YUI.add("td-applet-mega-header-templates-notifications", function(t, a) {
    dust.cache = dust.cache || {}, dust.cache[a] = function(t) {
        function a(t, a) {
            return t.x(a.getPath(!1, ["ui", "notifications"]), a, {
                block: n
            }, {}).w("\n")
        }

        function n(t, a) {
            return t.w('\n<li id="uh-notifications" class="uh-menu uh-notifications Fl(start) D(ib) Cur(p) ua-ie7_D(n) ua-ie9_Pb(10px) ').f(a.getPath(!1, ["theme", "notificationsBtnWrapper"]), a, "h").w('" role="menuitem" data-ylk="sec:hd;t1:a1;t2:hd;">\n        <button class="uh-menu-btn Pos(r) Bd(0) Px(8px) Pt(1px) Lh(1.3)" aria-label="').f(a.getPath(!1, ["intl", "messages", "NOTIFICATIONS"]), a, "h").w('" aria-haspopup="true" aria-expanded="true" tabindex="5" title="').f(a.getPath(!1, ["intl", "messages", "NOTIFICATIONS"]), a, "h").w('" data-ylk="slk:notifications;elm:btn;itc:1;">\n            <i class="uh-notifications-icon Grid-U Icon-Fp2 IconBell ').f(a.getPath(!1, ["theme", "notificationsBtnIcon"]), a, "h").w('"></i>\n            <span class="uh-notification-count  D(n) Fw(b) Pos(a) Ta(c) T(-7px) ').f(a.getPath(!1, ["theme", "notificationsBtnCount"]), a, "h").w('"></span>\n        </button>\n        <div class="Pos(a) End(0) T(45px)">\n            <div id="uh-notification-panel" class="uh-notification-panel uh-menu-panel Pos(r) W(380px) Bgc($menuBgc) Bd Bdc($menuBdr) Bdrs(4px) Bxsh($menuShadow) Ov(h) Trs($menuTransition) Cur(d) V(h) Op(0) Mah(0) Pb(5px) uh-notifications:h_V(v) uh-notifications:h_Op(1) panel-open_V(v) panel-open_Op(1) ').x(a.getPath(!1, ["ui", "notificationCenterLink"]), a, {
                "else": e,
                block: i
            }, {}).w('aria-label="').f(a.getPath(!1, ["intl", "messages", "NOTIFICATIONS"]), a, "h").w('" role="menu">\n                <div class="uh-notifications-loading Py(16px) Px(24px) Ta(c)" data-ylk="sec:hd;t1:a1;t2:hd;">\n                   <div class="W(30px) H(30px) Mx(a) My(12px) Bgz(30px) Bgi($animatedSpinner)"></div>\n                   <span class="C($mailTstamp) D(n)">').f(a.getPath(!1, ["intl", "messages", "LOADING_UPDATES"]), a, "h").w("</span>\n                </div>\n            </div>\n        </div>\n    </li>\n")
        }

        function e(t, a) {
            return t.w('uh-notifications:h_Mah($userNotifNoNavPanelMah) panel-open_Mah($userNotifNoNavPanelMah)" ')
        }

        function i(t, a) {
            return t.w('uh-notifications:h_Mah($userNotifPanelMah) panel-open_Mah($userNotifPanelMah)" ')
        }
        return dust.register("td-applet-mega-header-templates-notifications", a), a.__dustBody = !0, n.__dustBody = !0, e.__dustBody = !0, i.__dustBody = !0, a
    }(), dust.cache["td-applet-mega-header:notifications.dust"] = dust.cache["td-applet-mega-header:notifications"] = dust.cache[a], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-mega-header/templates/notifications"] = function(t, n) {
        t = t || {}, dust.render(a, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-mega-header-templates-partnerLogo", function(e, t) {
    dust.cache = dust.cache || {}, dust.cache[t] = function(e) {
        function t(e, t) {
            return e.w('<h1 class="Fz(0) Pos(a) ').f(t.getPath(!1, ["theme", "partnerLogoHeader"]), t, "h").w(' Mstart(0px)!--sm1170">\n    <a id="uh-logo" href="').f(t.get(["logoUrl"], !1), t, "h").w('" title="').f(t.getPath(!1, ["logo", "name"]), t, "h").w(' Yahoo" class="').f(t.getPath(!1, ["theme", "partnerLogoImageAnchor"]), t, "h").w('" ').h("rapid_data_attr", t, {}, {
                rspns: "nav",
                t1: "a1",
                t2: "hd",
                sec: "hd",
                itc: "0",
                slk: "logo",
                t4: "partner",
                elm: "img",
                elmt: "logo"
            }).w(' tabindex="1">\n        <b class="Hidden Tt(c)">').f(t.get(["partner"], !1), t, "h").w(" Yahoo</b>\n    </a>\n</h1>\n")
        }
        return dust.register("td-applet-mega-header-templates-partnerLogo", t), t.__dustBody = !0, t
    }(), dust.cache["td-applet-mega-header:partnerLogo.dust"] = dust.cache["td-applet-mega-header:partnerLogo"] = dust.cache[t], e.Template._cache = e.Template._cache || {}, e.Template._cache["td-applet-mega-header/templates/partnerLogo"] = function(e, a) {
        e = e || {}, dust.render(t, e, a)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-mega-header-templates-partnerSubLogo", function(e, t) {
    dust.cache = dust.cache || {}, dust.cache[t] = function(e) {
        function t(e, t) {
            return e.w('<a href="').f(t.get(["logoUrl"], !1), t, "h").w('" title="Powered by Yahoo" class="Mstart(10px) D(ib) ').f(t.getPath(!1, ["theme", "partnerSubLogoAnchor"]), t, "h").w('" ').h("rapid_data_attr", t, {}, {
                rspns: "nav",
                t1: "a1",
                t2: "hd",
                sec: "hd",
                itc: "0",
                slk: "logo",
                t4: "powered",
                elm: "img",
                elmt: "logo"
            }).w(' tabindex="1">\n    <b class="Hidden">Powered by Yahoo</b>\n</a>')
        }
        return dust.register("td-applet-mega-header-templates-partnerSubLogo", t), t.__dustBody = !0, t
    }(), dust.cache["td-applet-mega-header:partnerSubLogo.dust"] = dust.cache["td-applet-mega-header:partnerSubLogo"] = dust.cache[t], e.Template._cache = e.Template._cache || {}, e.Template._cache["td-applet-mega-header/templates/partnerSubLogo"] = function(e, a) {
        e = e || {}, dust.render(t, e, a)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-mega-header-templates-profile", function(e, t) {
    dust.cache = dust.cache || {}, dust.cache[t] = function(e) {
        function t(e, t) {
            return e.x(t.get(["isSignedInUser"], !1), t, {
                "else": a,
                block: i
            }, {}).w("\n")
        }

        function a(e, t) {
            return e.w('\n<li class="Pos(r) Fl(start) ').x(t.getPath(!1, ["ui", "signUpBtn"]), t, {
                "else": n,
                block: s
            }, {}).w('">\n        <a id="uh-signin" class="Bdrs(3px) Bds(s) Bdw(2px) D(ib) Ell Fz(13px) Fw(b) Py(2px) Px(6px) Mt(5px) Ta(c) Td(n):h Miw(66px) H(19px) Lh(19px) ').f(t.getPath(!1, ["theme", "signInBtn"]), t, "h").w('" href="').f(t.get(["loginUrl"], !1), t, "h").w('" ').h("rapid_data_attr", t, {}, {
                t3: "usr",
                elm: "btn",
                elmt: "lgn",
                outcome: "lgn"
            }).w(' tabindex="4">').h("intlMessage", t, {}, {
                _key: "SIGNIN"
            }).w("</a>\n    </li>\n    ").x(t.getPath(!1, ["ui", "signUpBtn"]), t, {
                block: l
            }, {}).w("\n")
        }

        function n(e, t) {
            return e.w("Mend(26px)")
        }

        function s(e, t) {
            return e.w("Mend(8px)")
        }

        function l(e, t) {
            return e.w('\n<li class="Pos(r) Fl(start) Mend(26px)">\n            <a id="uh-signup" class="Bdrs(3px) Bds(s) Bdw(2px) D(ib) Ell Fz(13px) Fw(b) Py(2px) Px(6px) Mt(5px) Ta(c) Td(n):h Miw(66px) H(19px) Lh(19px) ').f(t.getPath(!1, ["theme", "signUpBtn"]), t, "h").w('" href="').f(t.get(["signUpUrl"], !1), t, "h").w('" ').h("rapid_data_attr", t, {}, {
                t3: "usr",
                elm: "btn",
                elmt: "sgnup",
                outcome: "sgnup"
            }).w(' tabindex="4">').h("intlMessage", t, {}, {
                _key: "SIGNUP"
            }).w("</a>\n        </li>\n    ")
        }

        function i(e, t) {
            return e.w('\n<li id="uh-profile" class="uh-menu uh-profile Fl(start) Mend(26px) Cur(p)').nx(t.get(["avatarImg"], !1), t, {
                block: p
            }, {}).w(' ua-ie8_Pb(10px) ua-ie9_Pb(10px)" role="menuitem" data-i13n-subsec="profile">\n        <button class="uh-menu-btn P(0) Bd(0) Pos(r) ').f(t.getPath(!1, ["theme", "menuBtn"]), t, "h").w('" aria-haspopup="true" aria-expanded="true" aria-label="').f(t.getPath(!1, ["intl", "messages", "PROFILE"]), t, "h").w('" tabindex="4" title="').f(t.getPath(!1, ["intl", "messages", "PROFILE"]), t, "h").w('" data-ylk="sec:hd;slk:profile;t1:a1;t2:hd;elm:btn;itc:1;"><i id="uh-avatar" class="Lh($userNavTextLh) Bdrs(45%) Bgz(cv) Cur(p) D(ib) Fz(34px) H(34px) W(34px)').nx(t.get(["avatarImg"], !1), t, {
                block: r
            }, {}).w(" ua-ie7_D(n) ").f(t.getPath(!1, ["theme", "profileBtnIcon"]), t, "h").w('" ').s(t.get(["avatarImg"], !1), t, {
                block: d
            }, {}).w("></i>").nx(t.get(["isFallback"], !1), t, {
                block: u
            }, {}).w('\n</button>\n        <div class="uh-menu-panel Pos(a) End(0) T(45px) Miw(380px) Bgc($menuBgc) Bd Bdc($menuBdr) Bdrs(4px) Bxsh($menuShadow) Ta(start) Cur(d) Trs($menuTransition) V(h) Op(0) Mah(0) uh-profile:h_V(v) uh-profile:h_Op(1) uh-profile:h_Mah($panelMah) panel-open_V(v) panel-open_Op(1) panel-open_Mah($panelMah)" aria-label="').h("intlMessage", t, {}, {
                _key: "PROFILE"
            }).w('" role="menu" aria-hidden="false">\n        ').x(t.getPath(!1, ["accountSwitchData", "enabled"]), t, {
                "else": o,
                block: c
            }, {}).w('\n</div>\n    </li>\n    <li class="Pos(r) Fl(start) Mend(26px) D(n) ua-ie7_D(i)">\n        <a id="uh-signin" class="Bdc($signInBtn) Bdrs(5px) Bds(s) Bdw(2px) Bgc($signInBtn):h C($signInBtn) C(#fff):h D(ib) Ell Fz(14px) Fw(b) Py(2px) Px(6px) Mt(5px) Ta(c) Td(n):h Miw(66px) H(18px)" href="').f(t.get(["logoutUrl"], !1), t, "h").w('" ').h("rapid_data_attr", t, {}, {
                t3: "usr",
                elmt: "lgo",
                outcome: "lgo"
            }).w(' tabindex="4"><div class="Miw(66px) Ta(c) Pos(a) T(0) Lh($userNavTextLh)">').h("intlMessage", t, {}, {
                _key: "SIGNOUT"
            }).w("</div></a>\n    </li>\n")
        }

        function p(e, t) {
            return e.w(" default-avatar")
        }

        function r(e, t) {
            return e.w(" IconProfile Icon-Fp2")
        }

        function d(e, t) {
            return e.w('style="background-image:url(').f(t.get(["avatarImg"], !1), t, "h").w(');"')
        }

        function u(e, t) {
            return e.x(t.get(["profileText"], !1), t, {
                block: h
            }, {})
        }

        function h(e, t) {
            return e.w('<span class="D(ib) Maw(100px) Ov(h) Whs(nw) Tov(e) Lh($userNavTextLh) Pstart(8px) Fz(14px) Fw(b) Va(t) ua-ie7_D(n) ').f(t.getPath(!1, ["theme", "profileBtnText"]), t, "h").w('">').f(t.get(["profileText"], !1), t, "h").w("</span>")
        }

        function o(e, t) {
            return e.w("\n").p("profilePanel", t, {}).w("\n")
        }

        function c(e, t) {
            return e.w("\n").p("accountSwitchPanel", t, {}).w("\n")
        }
        return dust.register("td-applet-mega-header-templates-profile", t), t.__dustBody = !0, a.__dustBody = !0, n.__dustBody = !0, s.__dustBody = !0, l.__dustBody = !0, i.__dustBody = !0, p.__dustBody = !0, r.__dustBody = !0, d.__dustBody = !0, u.__dustBody = !0, h.__dustBody = !0, o.__dustBody = !0, c.__dustBody = !0, t
    }(), dust.cache["td-applet-mega-header:profile.dust"] = dust.cache["td-applet-mega-header:profile"] = dust.cache[t], e.Template._cache = e.Template._cache || {}, e.Template._cache["td-applet-mega-header/templates/profile"] = function(e, a) {
        e = e || {}, dust.render(t, e, a)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-mega-header-templates-accountSwitchPanel", "td-applet-mega-header-templates-profilePanel"]
});
YUI.add("td-applet-mega-header-templates-profilePanel", function(e, t) {
    dust.cache = dust.cache || {}, dust.cache[t] = function(e) {
        function t(e, t) {
            return e.w('<div class="Py(16px) Px(24px)">\n    <div id="uh-greeting" class="Ell Fw(b) Maw(160px)">\n        ').nx(t.get(["isFallback"], !1), t, {
                block: n
            }, {}).w("\n</div>\n    ").nx(t.get(["isFallback"], !1), t, {
                block: r
            }, {}).w('\n<a id="uh-settings" class="C(#000) C($menuLink):h D(ib) Mt(10px) Td(n)" href="').f(t.get(["profileUrl"], !1), t, "h").w('" ').h("rapid_data_attr", t, {}, {
                slk: "prfl",
                t3: "usr",
                elmt: "prfl"
            }).w(' tabindex="4">').h("intlMessage", t, {}, {
                _key: "ACCOUNT_INFO"
            }).w('</a>\n</div>\n<div class="Bgc($menuFooterBgc) Bdtc($menuFooterBdr) Bdts(s) Bdtw(1px) Px(24px) Py(20px)">\n    <a id="uh-signout" class="C(#000) C($menuLink):h Td(n)" href="').f(t.get(["logoutUrl"], !1), t, "h").w('" ').h("rapid_data_attr", t, {}, {
                t3: "usr",
                elmt: "lgo",
                outcome: "lgo"
            }).w(' tabindex="4">').h("intlMessage", t, {}, {
                _key: "SIGNOUT"
            }).w("</a>\n</div>\n")
        }

        function n(e, t) {
            return e.w("\n").x(t.get(["firstName"], !1), t, {
                "else": a,
                block: s
            }, {}).w("\n")
        }

        function a(e, t) {
            return e.w("\n").x(t.get(["alias"], !1), t, {
                "else": d,
                block: l
            }, {}).w("\n")
        }

        function d(e, t) {
            return e.w("\n").h("intlMessage", t, {}, {
                _key: "WELCOME_BACK"
            }).w("\n")
        }

        function l(e, t) {
            return e.w("\n").f(t.get(["alias"], !1), t, "h").w("\n")
        }

        function s(e, t) {
            return e.w("\n").f(t.get(["firstName"], !1), t, "h").w("\n")
        }

        function r(e, t) {
            return e.w("\n").x(t.get(["alias"], !1), t, {
                block: u
            }, {}).w("\n")
        }

        function u(e, t) {
            return e.w("\n").x(t.get(["firstName"], !1), t, {
                block: i
            }, {}).w("\n")
        }

        function i(e, t) {
            return e.w('\n<div class="Ell Maw(160px) Mt(10px)">').f(t.get(["alias"], !1), t, "h").w("</div>\n           ")
        }
        return dust.register("td-applet-mega-header-templates-profilePanel", t), t.__dustBody = !0, n.__dustBody = !0, a.__dustBody = !0, d.__dustBody = !0, l.__dustBody = !0, s.__dustBody = !0, r.__dustBody = !0, u.__dustBody = !0, i.__dustBody = !0, t
    }(), dust.cache["td-applet-mega-header:profilePanel.dust"] = dust.cache["td-applet-mega-header:profilePanel"] = dust.cache[t], e.Template._cache = e.Template._cache || {}, e.Template._cache["td-applet-mega-header/templates/profilePanel"] = function(e, n) {
        e = e || {}, dust.render(t, e, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-mega-header-templates-scrollPromo", function(t, s) {
    dust.cache = dust.cache || {}, dust.cache[s] = function(t) {
        function s(t, s) {
            return t.h("eq", s, {
                "else": o,
                block: a
            }, {
                key: s.getPath(!1, ["ui", "scrollPromo"]),
                value: "extensionPromo"
            }).w("\n")
        }

        function o(t, s) {
            return t.h("eq", s, {
                block: e
            }, {
                key: s.getPath(!1, ["ui", "scrollPromo"]),
                value: "subscriptionPromo"
            })
        }

        function e(t, s) {
            return t.w('<div id="uh-scroll-promo" class="Pos(f) B(20px) Start(20px) Py(27px) W(342px) Bxsh($scrollPromoShadow) Bgi($scrollPromoGradient) Bdrs(4px) D(n)"><button id="uh-scroll-promo-close" class="Cur(p) Pos(a) T(0) End(2px)" tabindex="3" title="').f(s.getPath(!1, ["intl", "messages", "CLOSE"]), s, "h").w('" aria-label="').f(s.getPath(!1, ["intl", "messages", "CLOSE"]), s, "h").w('"><i class="Icon-Fp2 IconActionCross Fz(18px) C(#fff)"></i></button><i class="Icon-Fp2 IconBell C(#fff) Fz(24px) Fl(start) Pstart(30px)"></i><div class="Mstart(70px)"><div class="Fz(18px) Mb(8px) C(#fff) Fw(500)">Stay in the loop!</div><div class="Fz(15px) Fw(300) Pb(15px) C(#fff)">Get breaking news notifications on<br> your desktop</div><button type="button" id="uh-scroll-promo-add" class="Miw(181px) H(32px) Lh(1.23) Px(18px) Py(6px) C(#fff) Fz(13px) Bdrs(2px) Bgc(#188fff)">Notify me</button></div></div>')
        }

        function a(t, s) {
            return t.w('<div id="uh-scroll-promo" class="H(146px) W(337px) End(-132px) T(50px) D(n) Bd Bxsh($scrollPromoShadow) Bdc($scrollPromoBdr) Bgc(#fff) Bdrs(4px) Pos(a)"><button id="uh-scroll-promo-close" class="Cur(p) Pos(a) End(0px) T(-2px)" tabindex="3" title="').f(s.getPath(!1, ["intl", "messages", "CLOSE"]), s, "h").w('" aria-label="').f(s.getPath(!1, ["intl", "messages", "CLOSE"]), s, "h").w('"><i class="Icon-Fp2 IconActionCross Fz(13px) C(#ababab)"></i></button><div class="Fl(start) W(98px) Pos(r) Start(16px) T(40px)"><div class="Bgi($scrollPromoBgr) Bgc(#40009c) H(66px) W(66px) Bdrs(50%)"></div><i class="Icon-Fp2 IconY16 Pos(a) T(15px) Start(22px) C(#fff) Fz(32px)"></i></div><div class="Mstart(98px) Py(14px)"><h3 class="Fz(14px) Fw(n) Pb(7px)">').f(s.getPath(!1, ["intl", "messages", "SCROLL_PROMO_TITLE"]), s, "h").w('</h3><div class="W(210px) Pb(11px) C(#707070)">').f(s.getPath(!1, ["intl", "messages", "SCROLL_PROMO_DESC"]), s, "h").w('</div><button type="button" id="uh-scroll-promo-add" class="Miw(88px) H(32px) Lh(1.23) Px(5px) Py(6px) C(#fff) Fz(13px) Fw(b) Bdrs(2px) Bgc($searchBtn)" tabindex="3">').f(s.getPath(!1, ["intl", "messages", "SCROLL_PROMO_ADD"]), s, "h").w("</button></div></div>")
        }
        return dust.register("td-applet-mega-header-templates-scrollPromo", s), s.__dustBody = !0, o.__dustBody = !0, e.__dustBody = !0, a.__dustBody = !0, s
    }(), dust.cache["td-applet-mega-header:scrollPromo.dust"] = dust.cache["td-applet-mega-header:scrollPromo"] = dust.cache[s], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-mega-header/templates/scrollPromo"] = function(t, o) {
        t = t || {}, dust.render(s, t, o)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-mega-header-templates-search", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('<div id="uh-search" class="Pos(r) Va(t) ').f(e.getPath(!1, ["theme", "searchWrapper"]), e, "h").w('">\n    <form name="input" id="uh-search-form" class=" ').x(e.getPath(!1, ["ui", "searchFormGlow"]), e, {
                block: a
            }, {}).w(" ").f(e.getPath(!1, ["theme", "searchForm"]), e, "h").w('" action="').f(e.getPath(!1, ["search", "action"]), e, "h").x(e.getPath(!1, ["ui", "ylc"]), e, {
                block: s
            }, {}).w('" method="get" ').x(e.getPath(!1, ["ui", "ylc"]), e, {
                block: n
            }, {}).w(' target="_top">\n        <table class="Bdcl(s) ').f(e.getPath(!1, ["theme", "searchForm"]), e, "h").w('" role="presentation">\n            <tbody>\n                <tr>\n                    <td class="Pos(r) P(0) W(100%) D(tb) Tbl(f) ua-safari_D(tbc) ').f(e.getPath(!1, ["theme", "searchInputWrapper"]), e, "h").w('">\n                        <input id="uh-search-box" type="text" name="').f(e.getPath(!1, ["search", "searchTermQueryKey"]), e, "h").w('" class="Pos(a) T(0) Start(0) Bd Bdc($searchBdr) Bxsh(n) Fz(18px) M(0) O(0) Px(10px) W(100%) H(inh) Z(2) Bxz(bb)').nx(e.getPath(!1, ["ui", "searchBtnIcon"]), e, {
                "else": r,
                block: c
            }, {}).x(e.getPath(!1, ["ui", "formHoverState"]), e, {
                block: o
            }, {}).x(e.getPath(!1, ["ui", "searchBoxShadow"]), e, {
                "else": h,
                block: u
            }, {}).w(" ").f(e.getPath(!1, ["theme", "searchInput"]), e, "h").w('" autofocus autocomplete="off" autocapitalize="off" aria-label="').h("intlMessage", e, {}, {
                _key: "SEARCH"
            }).w('" tabindex="2">\n                        ').x(e.getPath(!1, ["search", "autocomplete", "ghostEnabled"]), e, {
                block: i
            }, {}).w("\n").s(e.getPath(!1, ["search", "queries"]), e, {
                block: d
            }, {}).w("\n</td>\n                    ").nx(e.getPath(!1, ["ui", "searchBtnIcon"]), e, {
                block: l
            }, {}).w('\n<td class="ua-ie9_Va(t) P(0)">\n                        <button id="uh-search-button" type="submit" class="rapid-noclick-resp C(#fff) Fz(16px) Px(26px) Py(0) Whs(nw) Bdw(0) Lh(1)').x(e.getPath(!1, ["ui", "formHoverState"]), e, {
                block: p
            }, {}).w(" ").nx(e.getPath(!1, ["ui", "searchBtnIcon"]), e, {
                "else": f,
                block: _
            }, {}).w(" ").f(e.getPath(!1, ["theme", "searchButton"]), e, "h").w('" data-ylk="').f(e.getPath(!1, ["search", "i13nModelString"]), e, "h").w('"  ').x(e.getPath(!1, ["ui", "searchBtnIcon"]), e, {
                block: g
            }, {}).w(' tabindex="3">').x(e.getPath(!1, ["ui", "searchBtnIcon"]), e, {
                "else": B,
                block: x
            }, {}).w("\n</button>\n                    </td>\n                    ").x(e.get(["partner"], !1), e, {
                block: b
            }, {}).w("\n</tr>\n            </tbody>\n        </table>\n    </form>\n    ").h("eq", e, {
                block: m
            }, {
                key: e.getPath(!1, ["ui", "scrollPromo"]),
                value: "extensionPromo"
            }).w("\n").x(e.getPath(!1, ["ui", "skiplinks"]), e, {
                block: P
            }, {}).w("\n</div>\n").x(e.get(["searchAssistJS"], !1), e, {
                block: k
            }, {}).w("\n").x(e.getPath(!1, ["ui", "inlineAutoFocus"]), e, {
                block: S
            }, {}).w("\n")
        }

        function a(t, e) {
            return t.w("glowing glow")
        }

        function s(t, e) {
            return t.f(e.getPath(!1, ["search", "ylc"]), e, "h")
        }

        function n(t, e) {
            return t.w('data-assist-action="').f(e.getPath(!1, ["search", "action"]), e, "h").f(e.getPath(!1, ["search", "assistYlc"]), e, "h").w('"')
        }

        function r(t, e) {
            return t.w(" Bdrs(0) Bdendw(0) ua-ie7_W(94%) ua-ie7_Bdendw(1px)")
        }

        function c(t, e) {
            return t.w(" Bdrs(2px) ua-ie7_W(92%)")
        }

        function o(t, e) {
            return t.w(" Bdc($searchBdrHov):h")
        }

        function h(t, e) {
            return t.w(" Bxsh(n)")
        }

        function u(t, e) {
            return t.w(" ").f(e.getPath(!1, ["theme", "searchBoxShadow"]), e, "h").w(" ")
        }

        function i(t, e) {
            return t.w('\n<input id="uh-ghost-box" class="Pos(a) T(0) Start(0) Ta(start) Bxsh(n) W(100%) H(inh) M(0) Bdrs(0) Fz(18px) Px(10px) Bdc(t) Bgc(#fff) C($searchHint) Z(1) ua-ie7_H(36px) ua-ie7_Lh(36px) ua-ie8_Lh(36px) ua-ie7_W(92%)" autocomplete="off" tabindex="-1">\n                            <b class="clear-query Pos(a) T(0) H(inh) End(0) Cur(p) Px(16px) Z(3) Hidden" ').h("rapid_data_attr", e, {}, {
                t1: "a1",
                t2: "srch",
                sec: "srch",
                slk: "srch-clear",
                elm: "itm",
                elmt: "clear",
                itc: "1"
            }).w('>\n                                <i class="Pos(r) T(50%) Mt(-100%) C($searchHint) Fz(18px) D(b) Op(33%) Icon-Fp2 IconActionCross"></i>\n                                <b class="Hidden">').h("intlMessage", e, {}, {
                _key: "CLEAR_SEARCH"
            }).w("</b>\n                            </b>\n                        ")
        }

        function d(t, e) {
            return t.w('\n<input type="hidden" data-').f(e.get(["name"], !1), e, "h").w('="').f(e.get(["value"], !1), e, "h").w('" name="').f(e.get(["name"], !1), e, "h").w('" value="').f(e.get(["value"], !1), e, "h").w('" />\n                        ')
        }

        function l(t, e) {
            return t.w('<td class="Miw(5px)"></td>')
        }

        function p(t, e) {
            return t.w(" ").f(e.getPath(!1, ["theme", "hoverColor"]), e, "h")
        }

        function f(t, e) {
            return t.w(" W(80px) Bdrststart(0) Bdrsbstart(0) Bxsh(n)")
        }

        function _(t, e) {
            return t.w(" W(140px)! ").x(e.getPath(!1, ["ui", "formHoverState"]), e, {
                block: w
            }, {}).w(" Bxsh($searchBtnShadow) glow_Bxsh($searchBtnShadowGlow)")
        }

        function w(t, e) {
            return t.w(" enableHover_Bxsh($searchBtnHovShadow):h")
        }

        function g(t, e) {
            return t.w(' aria-label="').h("intlMessage", e, {}, {
                _key: "SEARCH_WEB"
            }).w('" title="').h("intlMessage", e, {}, {
                _key: "SEARCH_WEB"
            }).w('"')
        }

        function B(t, e) {
            return t.w('<span class="search-default-label Fw(500)">').h("intlMessage", e, {}, {
                _key: "SEARCH_WEB"
            }).w("</span>")
        }

        function x(t, e) {
            return t.w('<i class="Fz(26px) Mstart(2px) Icon-Fp2 IconNavSearch Icon-Fp2"></i>')
        }

        function b(t, e) {
            return t.w('\n<td class="ua-ie9_Va(t)">').p("partnerSubLogo", e, {}).w("</td>\n                    ")
        }

        function m(t, e) {
            return t.p("scrollPromo", e, {})
        }

        function P(t, e) {
            return t.w('\n<ul id="Skip-links" class="Pos(a)">\n        ').x(e.getPath(!1, ["ui", "bottombar"]), e, {
                block: y
            }, {}).w('\n<li><a href="#Main" class="W(0) O(h) D(ib) Whs(nw) Pos(a) Bg(#0078ff) C(#fff) Op(0) W(a):f Op(1):f P(5px):f Ov(h) Ov(v):f" tabindex="3">').h("intlMessage", e, {}, {
                _key: "SKIP_MAIN"
            }).w('</a></li>\n        <li><a href="#Aside" class="W(0) O(h) D(ib) Whs(nw) Pos(a) Bg(#0078ff) C(#fff) Op(0) W(a):f Op(1):f P(5px):f Ov(h) Ov(v):f" tabindex="3">').h("intlMessage", e, {}, {
                _key: "SKIP_ASIDE"
            }).w("</a></li>\n    </ul>\n    ")
        }

        function y(t, e) {
            return t.w('\n<li><a href="#mega-bottombar-mail" class="W(0) O(h) D(ib) Whs(nw) Pos(a) Bg(#0078ff) C(#fff) Op(0) W(a):f Op(1):f P(5px):f Ov(h) Ov(v):f" tabindex="3">').h("intlMessage", e, {}, {
                _key: "SKIP_NAV"
            }).w("</a></li>\n        ")
        }

        function k(t, e) {
            return t.w("\n<script>").p("searchAssistWrapper_script", e, {}).w("<\/script>\n")
        }

        function S(t, e) {
            return t.w("\n<script>").p("searchAutofocus_script", e, {}).w("<\/script>\n")
        }
        return dust.register("td-applet-mega-header-templates-search", e), e.__dustBody = !0, a.__dustBody = !0, s.__dustBody = !0, n.__dustBody = !0, r.__dustBody = !0, c.__dustBody = !0, o.__dustBody = !0, h.__dustBody = !0, u.__dustBody = !0, i.__dustBody = !0, d.__dustBody = !0, l.__dustBody = !0, p.__dustBody = !0, f.__dustBody = !0, _.__dustBody = !0, w.__dustBody = !0, g.__dustBody = !0, B.__dustBody = !0, x.__dustBody = !0, b.__dustBody = !0, m.__dustBody = !0, P.__dustBody = !0, y.__dustBody = !0, k.__dustBody = !0, S.__dustBody = !0, e
    }(), dust.cache["td-applet-mega-header:search.dust"] = dust.cache["td-applet-mega-header:search"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-mega-header/templates/search"] = function(t, a) {
        t = t || {}, dust.render(e, t, a)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-mega-header-templates-partnerSubLogo", "td-applet-mega-header-templates-scrollPromo", "td-applet-mega-header-templates-searchAssistWrapper_script", "td-applet-mega-header-templates-searchAutofocus_script"]
});
YUI.add("td-applet-mega-header-templates-searchAssistConfig_script", function(e, t) {
    dust.cache = dust.cache || {}, dust.cache[t] = function(e) {
        function t(e, t) {
            return e.w('init({boldTag:"<b>\\{s\\}</b>",cssClass:{container:"assistjs-tray yui3-aclist ua-ie9_Pos(r)",trayContainer:"",tray:"yui3-aclist-content",ul:"yui3-aclist-list",li:"yui3-aclist-item",liHighlight:"yui3-aclist-item-hover"},enableTabRender:!1,gossipParam:{appid:"fp"},customEvent:!0,searchBoxId:"uh-search-box",highlight:{pattern:"^",exact:!0},saBase:"').f(t.get(["searchAssistJSGossipURL"], !1), t, "h").w('",subAssist:!1,minQueryLength:1,formatResult:!0,fr2:"').f(t.getPath(!1, ["search", "fr2Code"]), t, "h").w('",ylcVal:"').f(t.getPath(!1, ["search", "i13nSuggestionString"]), t, "h").w('"});')
        }
        return dust.register("td-applet-mega-header-templates-searchAssistConfig_script", t), t.__dustBody = !0, t
    }(), dust.cache["td-applet-mega-header:searchAssistConfig_script.dust"] = dust.cache["td-applet-mega-header:searchAssistConfig_script"] = dust.cache[t], e.Template._cache = e.Template._cache || {}, e.Template._cache["td-applet-mega-header/templates/searchAssistConfig_script"] = function(e, s) {
        e = e || {}, dust.render(t, e, s)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-mega-header-templates-searchAssistMetrics_script", function(e, t) {
    dust.cache = dust.cache || {}, dust.cache[t] = function(e) {
        function t(e, t) {
            return e.w('!function(){var a=function(a){var b,c,d,e,f,g,h,i,j,k=document,l=window,m=13,n=38,o=40,p=!1,q=!1,r="-m",s="assistjs-tray",t="-s",u=/\\S/,v="saready",w=l.performance,x=w&&w.now?w.now():void 0,y=a||"/_td_api/beacon/error?",z=0,A=!1,B=function(a,i){return k=a||k,l=i||l,b=k.getElementById("uh-search-form"),d=k.documentElement,!!b&&(e=b.querySelector(\'input[name="type"]\'),f=b.querySelector(\'input[name="fr"]\'),g=k.getElementById("uh-search-button"),h=k.getElementById("uh-search-box"),c=k.getElementsByClassName(s)[0],f?f.value=f.getAttribute("data-fr"):Z("FR INPUT not available in Search form"),e&&(e.value=e.getAttribute("data-type")),X(b,"submit",W,!1),X(h,"assistSelection",E,!1),X(h,"keyup",I,!1),X(h,"keypress",K,!1),X(g,"click",H,!1),C(w,x),void 0)},C=function(a,b){var c=a,d=b;if(c&&c.timing)try{var e=parseInt(c.timing.navigationStart,10),f=parseInt(c.timing.domLoading,10);if(d||c.timing.navigationStart&&(d=Date.now()-e),e>0&&f>0&&d){d=Math.round(d);var g=d,h=e+d-f;return j="/p.gif?beaconType="+v+"&timeFromNavigationStart="+g+"&timeFromDomLoading="+h+"&ns="+e+"&dl="+f+"&bucket=').f(t.get(["bucket"], !1), t, "h").w('",i=new Image,i.height=0,i.width=0,i.src=j,!0}Z("Perf API unavailable")}catch(k){return Z("Error in timestamp calculation"),!1}return!1},D=function(a,b){return a.className.split(" ").indexOf(b)>-1},E=function(a,b){a.preventDefault(),F(a,b,M,T,f)},F=function(a,b,c,d,e){if(e&&(e.value+=t),a&&a.detail&&a.detail.data&&"number"==typeof a.detail.data.idx){var f=c(a.detail.data.idx+1);if(f)return d(f,W),!0}return!1},G=function(a,b){for(var c=a.target;a.currentTarget!==c&&(c=c.parentNode,!D(c,b)););return c},H=function(a){if(a.preventDefault(),u.test(h.value)&&!p)return U(g,!1,W)||Z("onBtn click beacon not fired"),!0},I=function(a){return a.keyCode===n||a.keyCode===o?(z++,1):a.keyCode!==m?(z=0,0):-1},J=function(a){var b;return!(z<=0)&&(!(!c||!(b=c.querySelector(\'li[data="\'+a.searchValue+\'"]\')))&&(a.pos=b.getAttribute("data-position"),"number"==typeof a.pos&&a.pos++,!0))},K=function(a){var b,c=a.target.value,d=l.rapidInstance,e={elm:"kb-ent"},i={};return a.keyCode===m&&c&&(a.preventDefault(),p=!0,i.searchValue=c,J(i)&&(f&&(f.value+=t),e.elm="itm",e.slk="srchast",e.t3="tray",b=L(),b&&(e.t9=b.n_sugg),e.cpos=parseInt(i.pos,10)+1),U(g,e,W)||Z("Enter key Beacon not fired")),!q&&a.keyCode!==m&&d&&d.beaconEvent&&(d.beaconEvent("keybrd",P(h)),q=!0),!0},L=function(a){var b,c=a||YAHOO;return c&&c.SA&&c.SA.config&&c.SA.config.ylcParam&&(b=c.SA.config.ylcParam),b},M=function(a,b){var c,d,e=b||YAHOO;if(e&&e.SA&&e.SA.config&&e.SA.config.ylcVal){var f=e.SA.config.ylcVal;c=f.replace("cposV",a)}return d=L(e),d&&(c=c.replace("t9Val",d.n_sugg)),c},N=function(a,b,c){var d={};return a?(b=b||";",c=c||":",a.split(b).forEach(function(a){if(a.length>0){var b=a.indexOf(c),e=a.substring(0,b).trim(),f=a.substring(b+1).trim();e&&(d[e]=f)}}),d):d},O=function(a,b){return a?N(a.getAttribute(b)):{}},P=function(a,b,c){var d=b?N(b):O(a,"data-ylk");d||(d={}),c&&(d=Q(d,c));var e=document.querySelector(\'[data-applet-type="td-applet-mega-header"][data-ylk]\');return e?Q(O(e,"data-ylk"),d):d},Q=function(){for(var a={},b=0,c=arguments.length;b<c;){for(var d in arguments[b])arguments[b].hasOwnProperty(d)&&(a[d]=arguments[b][d]);b++}return a},R=function(a,b,c){return a&&a.sec?"object"==typeof b&&(b.section=a.sec,delete a.sec,b.linkName=a.slk||"",delete a.slk,b.position=parseInt(a.pos,10),"number"==typeof b.position&&isFinite(b.position)?b.position++:b.position=1,!0):(c&&c(\'rapid data has no "sec" data\'),!1)},S=function(a,b,c,d){var e,f={},g={},h=l.rapidInstance;return f=P(a,b,d),R(f,g,Z)?(e="",h&&h.beaconClick?(h.beaconClick(g.section,g.linkName,g.position,f,e,c),!0):(Z("Rapid not available"),c&&c(),!1)):(c&&c(),!1)},T=function(a,b){return S(null,a,b)},U=function(a,b,c){return a?S(a,null,c,b):(Z(\'"node" not passed to triggerBeaconClickEvent\'),c&&c(),!1)},V=function(){D(d,"Reader-open")&&!A&&(f&&(f.value+=r),e&&(e.value+=r),A=!0)},W=function(){var a=h.value;u.test(a)&&(A||V(),b.submit())},X=function(a,b,c,d){if(d||(d=!1),a.addEventListener)a.addEventListener(b,c,d);else{if(!a.attachEvent)return!1;a.attachEvent("on"+b,c)}},Y=function(){var a;if(l.XMLHttpRequest)try{a=new XMLHttpRequest}catch(b){a=!1}else if(l.ActiveXObject)try{a=new ActiveXObject("Msxml2.XMLHTTP")}catch(b){try{a=new ActiveXObject("Microsoft.XMLHTTP")}catch(b){a=!1}}return a},Z=function(a){var b={code:"error",src:"assistJsBeacon",name:"searchAssistBeacon",message:a},c=Y(),d="";if(c){for(var e in b)b.hasOwnProperty(e)&&(d+=e+"="+b[e]+"&");d=d.substring(0,d.length-1);var f=y+d;return c.open("GET",f,!0),c.send(null),!0}return!1};return{stringParseKV:N,hasClass:D,parseDataAttr:O,parseYLK:P,merge:Q,triggerBeaconClickEvent:U,triggerCustomEventBeaconClickEvent:T,eventHandler:X,init:B,btnClick:H,typeSearchInput:K,sendBeacon:Z,getTargetElement:G,triggerAssistSelection:F,getYLKFromSAConfig:M,getYLCFromSAModel:L,perfBeacon:C,validateAndFixupRapidData:R,arrowTracker:I}};"undefined"!=typeof module&&module.exports?module.exports=a:(new a).init()}();')
        }
        return dust.register("td-applet-mega-header-templates-searchAssistMetrics_script", t), t.__dustBody = !0, t
    }(), dust.cache["td-applet-mega-header:searchAssistMetrics_script.dust"] = dust.cache["td-applet-mega-header:searchAssistMetrics_script"] = dust.cache[t], e.Template._cache = e.Template._cache || {}, e.Template._cache["td-applet-mega-header/templates/searchAssistMetrics_script"] = function(e, a) {
        e = e || {}, dust.render(t, e, a)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-mega-header-templates-searchAssistWrapper_script", function(e, s) {
    dust.cache = dust.cache || {}, dust.cache[s] = function(e) {
        function s(e, s) {
            return e.w("(function(){").p("searchAssist_script", s, {}).w(" ").p("searchAssistConfig_script", s, {}).w(" })();\n").p("searchAssistMetrics_script", s, {}).w("\n")
        }
        return dust.register("td-applet-mega-header-templates-searchAssistWrapper_script", s), s.__dustBody = !0, s
    }(), dust.cache["td-applet-mega-header:searchAssistWrapper_script.dust"] = dust.cache["td-applet-mega-header:searchAssistWrapper_script"] = dust.cache[s], e.Template._cache = e.Template._cache || {}, e.Template._cache["td-applet-mega-header/templates/searchAssistWrapper_script"] = function(e, t) {
        e = e || {}, dust.render(s, e, t)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-mega-header-templates-searchAssist_script", "td-applet-mega-header-templates-searchAssistConfig_script", "td-applet-mega-header-templates-searchAssistMetrics_script"]
});
YUI.add("td-applet-mega-header-templates-searchAssist_script", function(e, t) {
    dust.cache = dust.cache || {}, dust.cache[t] = function(e) {
        function t(e, t) {
            return e.w('Array.prototype.forEach||(Array.prototype.forEach=function(e,t){var s,i;if(null==this)throw new TypeError(" this is null or not defined");var a=Object(this),n=a.length>>>0;if("function"!=typeof e)throw new TypeError(e+" is not a function");for(arguments.length>1&&(s=t),i=0;n>i;){var o;i in a&&(o=a[i],e.call(s,o,i,a)),i++}}),Array.prototype.filter||(Array.prototype.filter=function(e){"use strict";if(void 0===this||null===this)throw new TypeError;var t=Object(this),s=t.length>>>0;if("function"!=typeof e)throw new TypeError;for(var i=[],a=arguments.length>=2?arguments[1]:void 0,n=0;s>n;n++)if(n in t){var o=t[n];e.call(a,o,n,t)&&i.push(o)}return i}),Array.prototype.map||(Array.prototype.map=function(e,t){var s,i,a;if(null==this)throw new TypeError(" this is null or not defined");var n=Object(this),o=n.length>>>0;if("function"!=typeof e)throw new TypeError(e+" is not a function");for(arguments.length>1&&(s=t),i=new Array(o),a=0;o>a;){var r,c;a in n&&(r=n[a],c=e.call(s,r,a,n),i[a]=c),a++}return i}),String.prototype.includes||(String.prototype.includes=function(e,t){"use strict";return"number"!=typeof t&&(t=0),t+e.length>this.length?!1:-1!==this.indexOf(e,t)});var assistJS=function(e,t){function s(e){function t(){}return t.prototype=e,new t}function i(e,t){e.prototype=Object.create?Object.create(t.prototype):s(t.prototype),e.prototype.constructor=e}function a(e,t){for(var s in t)"object"==typeof t[s]&&"object"==typeof e[s]?a(e[s],t[s]):e[s]=t[s]}function n(e,t){var s=[];for(var i in t)t.hasOwnProperty(i)&&s.push(encodeURIComponent(i)+"="+encodeURIComponent(t[i]));return s.length>0&&(e=e+(-1===e.indexOf("?")?"?":"&")+s.join("&")),e}function o(e){c(e),l(e)}function r(e){return"function"==typeof e.trim?e.trim():e.replace(/^\\s+|\\s+$/gm,"")}function c(e){if(T&&9>T&&"undefined"!=typeof e.createTextRange){var t=e.createTextRange();t.collapse(!1),t.select()}else"number"==typeof e.selectionStart&&(e.selectionStart=e.selectionEnd=e.value.length)}function l(e){"focus"in e&&e.focus()}function h(e,t,s){if(T&&9>T&&"undefined"!=typeof e.createTextRange){var i=e.createTextRange();i.moveStart("character",t),i.moveEnd("character",s),i.select()}else e.selectionStart=t,e.selectionEnd=s,l(e)}function u(e){return e.replace(/[\\u00A0-\\u9999<>\\&]/gim,function(e){return"&#"+e.charCodeAt(0)+";"})}function g(e,t,s,i){if(i||(i=!1),e.addEventListener)e.addEventListener(t,s,i);else{if(!e.attachEvent)return!1;e.attachEvent("on"+t,s)}}function d(e,t,s){if(e.removeEventListener)e.removeEventListener(t,s);else{if(!e.detachEvent)return!1;e.detachEvent("on"+t,s)}}function p(s,i,a){var n;"function"==typeof e.CustomEvent?(n=new e.CustomEvent(i,{detail:a}),s.dispatchEvent(n)):"function"==typeof t.createEvent?(n=t.createEvent("CustomEvent"),n.initCustomEvent(i,!1,!1,a),s.dispatchEvent(n)):document.documentElement[i]=a}function f(e){e.returnValue=!1,e.cancelBubble=!0,e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation()}function m(){return Math.round((new Date).getTime()/1e3)}function y(e){return e.replace(/[\\-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\\\\^\\$\\|]/g,"\\\\\\\\$&")}function b(e){return function(t,s,i){return s&&!/\\s/.test(i)?t:e.replace(/\\{s\\}/g,i)}}function w(e,t,s,i){var a,n=i.pattern?i.pattern:"",o=n+"(&[^;\\\\s]*)?(%needles)";return a=i.exact?[y(s)]:s.split(/[\\s|,]+/).filter(function(e){return""!==e}).sort(function(e,t){return t.length-e.length}).map(function(e){return y(e)}),a.length?(o=o.replace("%needles",a.join("|")),t=t.replace(new RegExp(o,"gi"),b(e))):t}function v(){this.config={}}function x(){this.itemList=[],this.selectedItem=!1}function V(e){this.saView=e,this.currentStatus=!1,this.callBackIdx=0,this.cbTable={},this.triggered=!1}function C(e,t){this.saModel=e,this.saView=t}function E(){this.config={searchBoxId:"yschsp",clearButtonId:"sbq-clear",fr2:"sa-gp-search",saBase:"//search.yahoo.com/sugg/gossip/gossip-us-ura/",ylcParam:{_r:2,gprid:"",n_rslt:0,n_sugg:0,pos:0,pqstr:"",pqstrl:0},gossipParam:{l:1,bm:3,output:"sd1",appid:"search.yahoo.com",nresults:10},max:255,clrLog:{},boldTag:"<b>').f(t.get(["s"], !1), t, "h").w('</b>",annotation:{},cssClass:{container:"sa-sbx-container",trayContainer:"sa lowlight",tray:"sa-tray",traySub:"sa-tray sub-assist no-wrap",ul:"sa-tray-list-container",liHighlight:"list-item-hover",li:"",span:"",text:"",aria:"sa-aria-live-region",actionContainer:"sa-fd-actn-cont",relatedSearches:"related-title",trendingNow:"trending-title"},text:{relatedSearches:"Related Searches",trendingNow:"Trending Now",ariaShown:"new suggestions shown",ariaClosed:"Suggestion box closed"},customEvent:!1,suppressEmptyQuery:!1,enableAnnotation:!1,enableIpos:!0,subAssist:!0,subTrayDelta:5,trayPadding:12,debug:!1,objectName:"SA",anykey:!1,clearBeaconing:!1,enableYlc:!0,autofocus:!1,highlight:{pattern:"",exact:!1},minQueryLength:0,enableTabRender:!0}}var T=function(){if("Microsoft Internet Explorer"===e.navigator.appName){var t=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(e.navigator.userAgent);return t&&t[1]&&parseFloat(t[1])}return!1}();return e.YAHOO=e.YAHOO||{},v.prototype={set:function(e,t,s){e.setAttribute(t,s)},get:function(e,t){return e.getAttribute(t)},merge:a,extend:i,buildUrl:n,stopPropagation:f,setFocus:o,cursorEnd:c,select:h,htmlEncode:u,ae:g,de:d,ts:m,bold:w,debug:function(t){this.config.debug&&e.console&&e.console.log&&e.console.log(t)}},i(x,v),x.prototype.init=function(s,i){var a=this;if(this.saModel=i,this.config=s,this.clearButton=this.clearButton||t.getElementById(this.config.clearButtonId),this.searchbox=this.searchbox||t.getElementById(this.config.searchBoxId),!this.searchbox)return!1;this.config.gossipParam.pq=this.searchbox.value;for(var n=this.searchbox;n&&!this.formTag;)n.tagName&&"form"===n.tagName.toLowerCase()&&(this.formTag=n),n=n.parentNode;return this.formTag?(this.container=t.createElement("div"),this.container.className=this.config.cssClass.container,this.trayContainer=t.createElement("div"),this.trayContainer.className=this.config.cssClass.trayContainer,this.container.appendChild(this.trayContainer),this.searchbox.parentNode.insertBefore(this.container,this.searchbox.nextSibling),this.searchbox.setAttribute("role","combobox"),this.searchbox.setAttribute("aria-autocomplete","both"),this.ae(e,"load",function(){a.aria=t.createElement("div"),a.aria.className=a.config.cssClass.aria,a.set(a.aria,"aria-live","polite"),a.aria.style.position="absolute",a.aria.style.left="-9999px",t.body.appendChild(a.aria)}),!0):!1},x.prototype.getWidth=function(e,s){var i,a={p:e,t:this.config.boldTag.replace("').f(t.get(["s"], !1), t, "h").w('",this.htmlEncode(e)),idx:0},n=t.createElement("div");n.className=this.config.cssClass.container;var o=t.createElement("div");o.className=this.config.cssClass.trayContainer,n.appendChild(o);var r=t.createElement("div");r.className=this.config.cssClass.traySub,r.style.left="-9999px",o.appendChild(r);var c=t.createElement("ul");c.className=this.config.cssClass.ul,r.appendChild(c);var l=this.createItem(a);s&&(i=t.createElement("span"),i.innerHTML=s,l.suggestionSpan.appendChild(i)),c.appendChild(l.li),this.searchbox.parentNode.insertBefore(n,this.searchbox.nextSibling);var h=l.suggestionSpan.clientWidth+this.config.subTrayDelta;return n.outerHTML="",h},x.prototype.display=function(e){var s=e.data,i=e.sqpos,a=e.hiddenNeedle,n=this,o={};this.hide(),this.selectedItem=!1,this.tray=t.createElement("div"),this.set(this.tray,"type","normal"),this.tray.className=this.config.cssClass.tray,i&&this.config.subAssist&&(this.tray.className=this.config.cssClass.traySub,this.tray.style.left=this.getWidth(a)+"px"),this.ul=t.createElement("ul"),this.ul.className=this.config.cssClass.ul,this.set(this.ul,"role","listbox"),this.tray.appendChild(this.ul),this.itemList=[],this.config.ylcParam.n_sugg=n.saModel.ylc.n_sugg,s.forEach(function(e){var s;if(e.idx=n.itemList.length,4===e.m&&n.config.text.trendingNow&&!o.trending){var a=t.createElement("span");a.className=n.config.cssClass.trendingNow,a.innerHTML=n.config.text.trendingNow,n.ul.appendChild(a),o.trending=!0}var r=n.createItem(e);!i&&n.config.enableAnnotation&&e.m&&n.config.annotation[e.m]&&e.fd&&(s=n.getItemAnnotation(e,r.suggestionSpan),s&&r.suggestionSpan.appendChild(s)),n.ul.appendChild(r.li),n.itemList.push(r.li),n.ae(r.li,"mouseenter",function(t){n.resetHighlight(),r.li.className=n.config.cssClass.li+" "+n.config.cssClass.liHighlight,n.selectedItem=e.idx}),n.ae(r.li,"mouseleave",function(e){r.li.className=n.config.cssClass.li}),n.ae(r.li,"click",function(t){var s=n.searchbox.value,i=t.target||t.srcElement;n.saModel.ylc.pos=e.idx+1,n.saModel.ylc.pqstr=s,n.saModel.ylc.pqstrl=s.length,n.saModel.ylc.use_case="",n.formTag.fr2&&(n.formTag.fr2.value=n.config.fr2),n.searchbox.value=e.p,i.tagName&&"a"===i.tagName.toLowerCase()&&(n.searchbox.value=n.get(i,"data"),n.saModel.ylc.use_case=i.innerHTML),n.hide(),n.saModel.addYlc(n.saModel.clickTarget),n.config.customEvent?(n.saModel.addYlk(i),p(n.searchbox,"assistSelection",{data:e})):n.suggestionClick(t,e)})}),this.aria&&(this.set(this.aria,"aria-expanded","true"),this.aria.innerHTML="<p>"+n.itemList.length+" "+this.config.text.ariaShown+"</p>"),this.show()},x.prototype.suggestionClick=function(e,t){this.formTag.submit()},x.prototype.show=function(){this.shown=!0,this.resetHighlight(),this.trayContainer.appendChild(this.tray)},x.prototype.hide=function(){this.aria&&(this.set(this.aria,"aria-expanded","false"),this.aria.innerHTML="<p>"+this.config.text.ariaClosed+"</p>"),this.shown=!1,this.resetHighlight(),this.trayContainer.innerHTML=""},x.prototype.resetHighlight=function(){this.selectedItem!==!1&&this.itemList.length&&(this.itemList[this.selectedItem].className=this.config.cssClass.li)},x.prototype.resetHightlight=x.prototype.resetHighlight,x.prototype.tab=function(){if(!this.shown||!this.itemList.length)return!1;if(this.selectedItem!==!1)this.searchbox.value=this.get(this.itemList[this.selectedItem],"data"),this.saModel.fetch();else{if(this.searchbox.value===this.get(this.itemList[0],"data"))return this.saModel.unset(),!1;this.searchbox.value=this.get(this.itemList[0],"data"),this.saModel.fetch()}return!0},x.prototype.moveUpDown=function(e){return this.shown&&this.itemList.length?(this.resetHighlight(),e?this.selectedItem===!1||this.selectedItem<=0?this.selectedItem=this.itemList.length-1:this.selectedItem--:this.selectedItem===!1||this.selectedItem>=this.itemList.length-1?this.selectedItem=0:this.selectedItem++,this.itemList[this.selectedItem].className=this.config.cssClass.li+" "+this.config.cssClass.liHighlight,this.searchbox.value=this.get(this.itemList[this.selectedItem],"data"),!0):!1},x.prototype.createItem=function(e){var s=t.createElement("li"),i=this;if(s.className=this.config.cssClass.li,this.set(s,"pos",e.idx),this.set(s,"role","option"),this.config.formatResult){var a=this.config.ylcVal;a&&(a=a.replace("cposV",e.idx),i.config.ylcParam&&(a=a.replace("t9Val",i.config.ylcParam.n_sugg)),this.set(s,"data-ylk",a)),this.set(s,"data-position",e.idx)}i.set(s,"data",e.p);var n=t.createElement("span");n.className=i.config.cssClass.span,n.style.display="block",s.appendChild(n);var o=t.createElement("span");return o.className=i.config.cssClass.text,o.innerHTML=e.t,n.appendChild(o),{li:s,suggestionSpan:n}},x.prototype.getItemAnnotation=function(e){var s,i,a,n=this.config.annotation[e.m]||{},o=this.config.cssClass,r=e.fd,c="",l="",h=this.searchbox.clientWidth-2*this.config.trayPadding,u=0;if(n.subtitle&&r.subtitle){if(l=n.subtitle.replace("').f(t.get(["subtitle"], !1), t, "h").w('",this.htmlEncode(r.subtitle)),u=this.getWidth(e.p,l),!(h>u))return s;c+=l}if(n.actions&&r.actions&&r.actions.length){for(l="",a=0;a<r.actions.length;a++)if(i=r.actions[a],l&&n.actionsSeparator&&(l+=n.actionsSeparator),l+=n.actions.replace("').f(t.get(["text"], !1), t, "h").w('",this.htmlEncode(i.text)).replace("').f(t.get(["res"], !1), t, "h").w('",this.htmlEncode(i.res)),u=this.getWidth(e.p,c+\'<span class="\'+o.actionContainer+\'">\'+l+"</span>"),u>h){l="";break}l&&(c+=\'<span class="\'+o.actionContainer+\'">\'+l+"</span>")}return c&&(s=t.createElement("span"),s.innerHTML=c),s},i(V,v),V.prototype.unset=function(){this.triggered=!1,this.saView.hide()},V.prototype.jsonp=function(e,s){var i={command:this.saView.searchbox.value,t_stmp:this.ts(),callback:"YAHOO."+this.config.objectName+".cb."+e};this.merge(i,this.config.gossipParam),s&&this.merge(i,s);var a=this.buildUrl(this.config.saBase,i),n=t.getElementsByTagName("head")[0],o=t.createElement("script");this.set(o,"type","text/javascript"),this.set(o,"src",a),n.appendChild(o),this.ae(o,"load",function(){n.removeChild(o)})},V.prototype.read=function(e){var t,s=this,i=[],a=e.sqpos,n=e.q=e.q||"",o="";e&&"object"==typeof e.r&&e.r.length>0?(s.config.subAssist&&a&&(n=e.q.substr(a),o=e.q.substr(0,a),e.r.forEach(function(t){var i=s.saView.getWidth(t.k);i>s.saView.searchbox.clientWidth&&(a=0,n=e.q,o="")})),e.r.forEach(function(e){t=s.config.subAssist&&a?e.k.substr(a):e.k,i.push({p:e.k,t:s.bold(s.config.boldTag,s.htmlEncode(t),s.htmlEncode(n),s.config.highlight),fd:e.fd,m:e.m})}),this.ylc.n_sugg=e.r.length,this.ylc.pos=0,this.saView.display({data:i,sqpos:a,hiddenNeedle:o})):(this.ylc.n_sugg=0,this.ylc.pos=0,this.saView.hide()),e&&e.l&&(this.ylc.gprid=e.l.gprid)},V.prototype.fetch=function(){var e,t=this.saView.searchbox,s=this,i=null,a=s.lastValue===s.saView.searchbox.value;if(s.config.suppressEmptyQuery&&""==r(t.value))return s.unset(),!0;if(s.saView.shown&&a)return!0;if(this.config.enableIpos&&!a&&"undefined"!=typeof s.lastValue&&(e=this.getCursorPosition(),e===t.value.length&&(e=null),null!==e&&(i={ipos:e})),s.lastValue=s.saView.searchbox.value,this.config.minQueryLength&&this.saView.searchbox.value.length<this.config.minQueryLength)return this.unset(),!1;if(this.config.max&&this.saView.searchbox.value.length>this.config.max)return this.unset(),!0;this.triggered=!0,this.callBackIdx++;var n="sacb"+this.callBackIdx;for(var o in s.cbTable)s.cbTable.hasOwnProperty(o)&&(s.cbTable[o]=function(){});this.cbTable[n]=function(e){s.read(e||{}),s.cbTable[n]=function(){}},this.jsonp(n,i)},V.prototype.getCursorPosition=function(){var e,s=this.saView.searchbox,i=null;return"number"==typeof s.selectionStart?i=s.selectionStart:t.selection&&(s.focus(),e=t.selection.createRange(),e.moveStart("character",-t.activeElement.value.length),i=e.text.length),i},V.prototype.addYlc=function(e){var t=encodeURIComponent(this.saView.searchbox.value);return this.ylc.query=t,this.ylc.qstrl=t.length,this.ylc.t_stmp=this.ts(),this.config.enableYlc&&this.ULT?void(this.saView.formTag.action=this.ULT.y64_token("ylc",e,this.ylc)):void this.debug("YLC logging is disabled")},V.prototype.addYlk=function(e){var t=this,s=["gprid","query","pqstr"],i=[];if(s.forEach(function(e){t.ylc[e]&&i.push(e+":"+t.ylc[e])}),t.config.ylcVal=t.config.ylcVal+";"+i.join(";"),e){var a=t.get(e,"data-ylk")+";"+i.join(";");t.set(e,"data-ylk",a)}},V.prototype.init=function(t){return this.config=t,this.ULT=e.YAHOO.ULT,this.ULT||(this.debug("ULT library is missing. Disabling ylc logging"),this.config.enableYlc=!1),this.ylc={},this.merge(this.ylc,this.config.ylcParam),this.clickTarget=this.config.clkLink?this.config.clkLink:this.saView.formTag.action,this.submitTarget=this.saView.formTag.action,!0},i(C,v),C.prototype.init=function(s){var i=this;i.lastValue=null,this.config=s,this.config.autofocus&&this.setFocus(this.saView.searchbox),!T||T>=9?this.ae(this.saView.searchbox,"input",function(e){i.saModel.fetch()}):8===T&&this.ae(this.saView.searchbox,"propertychange",function(e){"value"===e.propertyName&&i.saView.selectedItem===!1&&i.saModel.fetch()}),i.config.anykey&&this.ae(t,"keydown",function(e){var s=t.activeElement;if(!s.tagName||"input"!==s.tagName.toLowerCase()&&"textarea"!==s.tagName.toLowerCase())return 27===e.keyCode&&!i.saView.shown&&i.saView.searchbox.value.length?(i.select(i.saView.searchbox,0,i.saView.searchbox.value.length),void i.stopPropagation(e)):void(e.keyCode<=40||e.ctrlKey||e.metaKey||(i.saView.searchbox.value=r(i.saView.searchbox.value),""!==i.saView.searchbox.value&&(i.saView.searchbox.value+=" "),i.saModel.triggered=!0,i.setFocus(i.saView.searchbox)))}),this.ae(this.saView.searchbox,"keydown",function(e){switch(e.keyCode){case 40:i.saView.moveUpDown(!1),i.stopPropagation(e);break;case 38:i.saView.moveUpDown(!0),i.stopPropagation(e);break;case 27:if(!i.saView.shown)return;return i.cursorEnd(i.saView.searchbox),i.saView.searchbox.blur(),i.saModel.unset(),i.saView.resetHighlight(),i.saView.selectedItem=!1,i.stopPropagation(e),!1;case 9:if(i.saView.searchbox.selectionEnd==i.saView.searchbox.value.length&&i.saView.searchbox.selectionStart==i.saView.searchbox.value.length){if(!i.config.enableTabRender)return i.saModel.unset(),!1;if(i.saView.tab())return i.stopPropagation(e),!1}else i.saView.searchbox.selectionEnd=i.saView.searchbox.selectionStart=i.saView.searchbox.value.length,i.stopPropagation(e);break;case 39:i.saView.searchbox.selectionEnd==i.saView.searchbox.value.length&&i.saView.searchbox.selectionStart==i.saView.searchbox.value.length&&i.saView.tab();break;default:i.saView.resetHighlight(),i.saView.selectedItem=!1}});var a=function(e){if(T&&8>=T&&t.selection){var s,a,n=i.saView.searchbox,o=n.value.replace(/\\r\\n/g,"\\n"),r=t.selection.createRange(),c=n.value.length,l=n.createTextRange();l.moveToBookmark(r.getBookmark());var h=n.createTextRange();h.collapse(!1),l.compareEndPoints("StartToEnd",h)>-1?s=a=c:(s=-l.moveStart("character",-c),s+=o.slice(0,s).split("\\n").length-1,l.compareEndPoints("EndToEnd",h)>-1?a=c:(a=-l.moveEnd("character",-c),a+=o.slice(0,a).split("\\n").length-1)),n.selectionStart=s,n.selectionEnd=a}i.lastValue!==i.saView.searchbox.value&&i.saView.selectedItem===!1&&i.saModel.fetch()};this.ae(this.saView.searchbox,"focus",function(e){!i.saModel.triggered&&i.saModel.fetch(),T&&9===T&&!i.ie9_attached&&(i.ae(t,"selectionchange",a),i.ie9_attached=!0)}),this.ae(this.saView.searchbox,"blur",function(e){T&&9===T&&i.ie9_attached&&(i.de(t,"selectionchange",a),i.ie9_attached=!1)}),this.ae(this.saView.searchbox,"click",function(e){!i.saModel.triggered&&i.saModel.fetch()});var n=function(e){if(i.saView.shown){for(var t=e.target?e.target:e.srcElement;t;){if(t===i.saView.formTag)return;t=t.parentNode}i.config.touchOriented&&i.stopPropagation(e),i.saModel.unset()}};return"ontouchstart"in e?(this.config.touchOriented=!0,this.ae(t.body,"touchstart",n,!0)):this.ae(t,"click",n),this.ae(this.saView.formTag,"submit",function(e){i.saModel.addYlc(i.saModel.submitTarget)}),this.saView.clearButton&&this.ae(this.saView.clearButton,"click",function(e){if(i.saView.searchbox.value="",i.saModel.triggered=!1,i.setFocus(i.saView.searchbox),i.config.enableYlc&&i.config.clearBeaconing&&i.saModel.ULT){var t={_r:2,actn:"clk",pos:1,sec:"clearsearch",slk:"clear",t1:"hdr",t2:"searchbox",t3:"clear"};i.merge(t,i.config.clrLog),i.saModel.ULT.beacon_click(t)}}),!0},i(E,v),E.prototype.saModelClass=V,E.prototype.saViewClass=x,E.prototype.saControlClass=C,E.prototype.init=function(s){return T&&8>T?!1:("object"==typeof s&&this.merge(this.config,s),this.saView=new this.saViewClass,this.saModel=new this.saModelClass(this.saView),this.saControl=new this.saControlClass(this.saModel,this.saView),this.cb=this.saModel.cbTable,this.config.customEvent&&8===T&&(t.documentElement.assistSelection=null),this.ready=this.saView.init(this.config,this.saModel)&&this.saModel.init(this.config)&&this.saControl.init(this.config),this.ready?(e.YAHOO[this.config.objectName]=this,void(e.performance&&"function"==typeof e.performance.now&&(this.latency=e.performance.now()))):!1)},E};"undefined"!=typeof module&&(module.exports={assistJS:assistJS}),"undefined"!=typeof window&&(window.YAHOO=window.YAHOO||{},window.YAHOO.SAClass=assistJS(window,document));var init=function(e){window.YAHOO&&window.YAHOO.SAClass&&(window.YAHOO.SA=new window.YAHOO.SAClass,window.YAHOO.SA.init(e))};')
        }
        return dust.register("td-applet-mega-header-templates-searchAssist_script", t), t.__dustBody = !0, t
    }(), dust.cache["td-applet-mega-header:searchAssist_script.dust"] = dust.cache["td-applet-mega-header:searchAssist_script"] = dust.cache[t], e.Template._cache = e.Template._cache || {}, e.Template._cache["td-applet-mega-header/templates/searchAssist_script"] = function(e, i) {
        e = e || {}, dust.render(t, e, i)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-mega-header-templates-searchAutofocus_script", function(e, t) {
    dust.cache = dust.cache || {}, dust.cache[t] = function(e) {
        function t(e, t) {
            return e.w('!function(){var a,b,c,d,e=window,f=document,g=f.getElementById("uh-search-box"),h=function(e){try{c=e.keyCode,d=e.target?e.target:e.srcElement,a=g.value.length,d===g&&0===a&&c>=32&&c<=40?g.blur():"EMBED"===d.tagName||"OBJECT"===d.tagName||"INPUT"===d.tagName||"TEXTAREA"===d.tagName||e.altKey||e.metaKey||e.ctrlKey||!(c<32||c>40)||9===c||13===c||16===c||27===c||(a&&(g.setSelectionRange?g.setSelectionRange(a,a):g.createTextRange&&(b=g.createTextRange(),b.moveStart("character",a),b.select())),g.focus())}catch(e){}};g&&(e.addEventListener?e.addEventListener("keydown",h,!1):e.attachEvent&&f.attachEvent("onkeydown",h),g.focus())}();')
        }
        return dust.register("td-applet-mega-header-templates-searchAutofocus_script", t), t.__dustBody = !0, t
    }(), dust.cache["td-applet-mega-header:searchAutofocus_script.dust"] = dust.cache["td-applet-mega-header:searchAutofocus_script"] = dust.cache[t], e.Template._cache = e.Template._cache || {}, e.Template._cache["td-applet-mega-header/templates/searchAutofocus_script"] = function(e, a) {
        e = e || {}, dust.render(t, e, a)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-mega-header-templates-topbar", function(t, n) {
    dust.cache = dust.cache || {}, dust.cache[n] = function(t) {
        function n(t, n) {
            return t.w('<div id="mega-topbar" class="').x(n.getPath(!1, ["ui", "banner"]), n, {
                block: e
            }, {}).w(" Pos(r) H(22px)  ").f(n.getPath(!1, ["theme", "topbarDiv"]), n, "h").w(" Z(7) ").x(n.get(["partner"], !1), n, {
                "else": o,
                block: a
            }, {}).w('" ').h("rapid_data_attr", n, {}, {
                rspns: "nav",
                t1: "a1",
                t2: "hd",
                t3: "tb",
                sec: "hd",
                itc: "0",
                elm: "itm",
                elmt: "pty"
            }).w('>\n    <ul class="Pos(r) Miw(1000px) Pstart(9px) Lh(1.7) Reader-open_Op(0) mini-header_Op(0) ').f(n.getPath(!1, ["theme", "topbarList"]), n, "h").w('" role="navigation">\n    ').s(n.getPath(!1, ["navigation", "top", "links"]), n, {
                block: r
            }, {}).w("\n").h("eq", n, {
                "else": q,
                block: Z
            }, {
                key: n.getPath(!1, ["navigation", "selectedPromo"]),
                value: "linkPromo"
            }).w("\n").x(n.getPath(!1, ["navigation", "intlSelector", "enabled"]), n, {
                block: K
            }, {}).w("\n").x(n.getPath(!1, ["navigation", "intlSite", "enabled"]), n, {
                block: nt
            }, {}).w("\n</ul>\n</div>\n")
        }

        function e(t, n) {
            return t.w("D(n)")
        }

        function o(t, n) {
            return t.w("Bg($topbarBgc)")
        }

        function a(t, n) {
            return t.w("Bgc($").f(n.getPath(!1, ["theme", "dark"]), n, "h").w(")")
        }

        function r(t, n) {
            return t.w("\n").h("eq", n, {
                "else": i,
                block: T
            }, {
                key: n.get(["type"], !1),
                value: "menu"
            }).w("\n")
        }

        function i(t, n) {
            return t.w("\n").h("eq", n, {
                "else": s,
                block: c
            }, {
                key: n.get(["property"], !1),
                value: "home"
            }).w("\n")
        }

        function s(t, n) {
            return t.w('\n<li class="D(ib) Mstart(22px) Mend(8px)">\n                <a href="').h("eq", n, {
                "else": l,
                block: u
            }, {
                key: n.get(["property"], !1),
                value: "mail"
            }).w('" class="').f(n.getPath(!1, ["theme", "topbarText"]), n, "h").w(' Fz(13px)" ').h("rapid_data_attr", n, {}, {
                slk: d,
                t5: p,
                cpos: h
            }).w(' tabindex="1"><i class="Pos(a) Fz(15px) Start(10px) T(-2px) ').f(n.get(["iconClasses"], !1), n, "h").w('"></i>').f(n.get(["title"], !1), n, "h").w("</a>\n            </li>\n        ")
        }

        function l(t, n) {
            return t.f(n.get(["url"], !1), n, "h")
        }

        function u(t, n) {
            return t.f(n.get(["mailUrl"], !1), n, "h")
        }

        function d(t, n) {
            return t.f(n.get(["property"], !1), n, "h")
        }

        function p(t, n) {
            return t.f(n.get(["property"], !1), n, "h")
        }

        function h(t, n) {
            return t.f(n.get(["position"], !1), n, "h")
        }

        function c(t, n) {
            return t.w("\n").x(n.get(["partner"], !1), n, {
                "else": g,
                block: P
            }, {}).w("\n")
        }

        function g(t, n) {
            return t.w('\n<li class="D(ib) Mstart(22px) Mend(8px)">\n                    <a href="').f(n.get(["url"], !1), n, "h").w('" class="').f(n.getPath(!1, ["theme", "topbarText"]), n, "h").w(' Fz(13px)" ').h("rapid_data_attr", n, {}, {
                slk: f,
                t5: _,
                cpos: m
            }).w(' tabindex="1"><i class="Pos(a) Fz(15px) Start(10px) T(-2px) ').f(n.get(["iconClasses"], !1), n, "h").w('"></i>').f(n.get(["title"], !1), n, "h").w("</a>\n                </li>\n            ")
        }

        function f(t, n) {
            return t.f(n.get(["property"], !1), n, "h")
        }

        function _(t, n) {
            return t.f(n.get(["property"], !1), n, "h")
        }

        function m(t, n) {
            return t.f(n.get(["position"], !1), n, "h")
        }

        function P(t, n) {
            return t.w("\n").s(n.get(["homeLinks"], !1), n, {
                block: w
            }, {}).w("\n")
        }

        function w(t, n) {
            return t.w('\n<li class="D(ib) Mstart(10px) navigation-menu">\n                        <a href="').f(n.get(["url"], !1), n, "h").w('" class="navigation-menu-title Pos(r) ').f(n.getPath(!1, ["theme", "topbarText"]), n, "h").w(" Pstart(12px) Pend(24px) Py(4px) Fz(13px) ").f(n.getPath(!1, ["theme", "menuOpenAnchor"]), n, "h").w(' menu-open_Bgc(#fff) menu-open_Z(8) rapidnofollow" ').h("rapid_data_attr", n, {}, {
                rspns: "op",
                t5: b,
                slk: y,
                itc: "1",
                elmt: "mu",
                cpos: x
            }).w(' tabindex="1"><i class="Pos(a) Fz(15px) Start(10px) T(-1px) ').f(n.get(["iconClasses"], !1), n, "h").w(" Td(n):h menu-open_C($").f(n.getPath(!1, ["theme", "dark"]), n, "h").w(')"></i><div class="D(ib) Mstart(20px) Td(u):h">').f(n.get(["title"], !1), n, "h").w('</div><i class="Pos(a) Pt(1px) Pstart(6px) Fw(b) Icon-Fp2 IconDownCaret"></i></a>\n                        <div class="Pos(a) Bgc(#fff) Bxsh($topbarMenuShadow) Z(7) V(h) Op(0) menu-open_V(v) menu-open_Op(1)">\n                            <ul class="Px(12px) Py(5px)">\n                            ').s(n.get(["links"], !1), n, {
                block: B
            }, {}).w("\n</ul>\n                        </div>\n                    </li>\n                ")
        }

        function b(t, n) {
            return t.f(n.get(["property"], !1), n, "h")
        }

        function y(t, n) {
            return t.f(n.get(["property"], !1), n, "h")
        }

        function x(t, n) {
            return t.f(n.get(["position"], !1), n, "h")
        }

        function B(t, n) {
            return t.w('\n<li class="D(b)">\n                                    <a href="').f(n.get(["url"], !1), n, "h").w('" class="D(b) Fz(13px) ').f(n.getPath(!1, ["theme", "topbarDropDownLink"]), n, "h").w(' Py(3px) Td(n) Td(u):h" ').h("rapid_data_attr", n, {}, {
                slk: k,
                t5: v,
                cpos: D
            }).w(' tabindex="1">').f(n.get(["title"], !1), n, "h").w("</a>\n                                </li>\n                            ")
        }

        function k(t, n) {
            return t.f(n.get(["property"], !1), n, "h")
        }

        function v(t, n) {
            return t.f(n.get(["property"], !1), n, "h")
        }

        function D(t, n) {
            return t.w("hdd-").f(n.get(["property"], !1), n, "h")
        }

        function T(t, n) {
            return t.w('\n<li class="D(ib) Mstart(10px) navigation-menu">\n            <a href="').f(n.get(["url"], !1), n, "h").w('" class="navigation-menu-title Pos(r) ').f(n.getPath(!1, ["theme", "topbarText"]), n, "h").w(" Pstart(12px) Pend(24px) Py(4px) Fz(13px) ").f(n.getPath(!1, ["theme", "menuOpenAnchor"]), n, "h").w(' menu-open_Bgc(#fff) menu-open_Z(8) rapidnofollow" ').h("rapid_data_attr", n, {}, {
                rspns: "op",
                t5: S,
                slk: F,
                itc: "1",
                elmt: "mu",
                cpos: z
            }).w(' tabindex="1">').f(n.get(["title"], !1), n, "h").w('<i class="Pos(a) Pt(2px) Pstart(6px) Fw(b) Icon-Fp2 IconDownCaret"></i></a>\n            <div class="Pos(a) Bgc(#fff) Bxsh($topbarMenuShadow) Z(7) V(h) Op(0) menu-open_V(v) menu-open_Op(1)">\n                <ul class="Px(12px) Py(5px)">\n                ').s(n.get(["links"], !1), n, {
                block: M
            }, {}).w("\n</ul>\n            </div>\n        </li>\n    ")
        }

        function S(t, n) {
            return t.f(n.get(["property"], !1), n, "h")
        }

        function F(t, n) {
            return t.f(n.get(["property"], !1), n, "h")
        }

        function z(t, n) {
            return t.f(n.get(["position"], !1), n, "h")
        }

        function M(t, n) {
            return t.w('\n<li class="D(b)">\n                        <a href="').f(n.get(["url"], !1), n, "h").w('" class="D(b) Fz(13px) ').f(n.getPath(!1, ["theme", "topbarDropDownLink"]), n, "h").w(' Py(3px) Td(n) Td(u):h" ').h("rapid_data_attr", n, {}, {
                slk: C,
                t5: O,
                cpos: $
            }).w(' tabindex="1">').f(n.get(["title"], !1), n, "h").w("</a>\n                    </li>\n                ")
        }

        function C(t, n) {
            return t.f(n.get(["property"], !1), n, "h")
        }

        function O(t, n) {
            return t.f(n.get(["property"], !1), n, "h")
        }

        function $(t, n) {
            return t.f(n.get(["position"], !1), n, "h")
        }

        function q(t, n) {
            return t.w("\n").h("eq", n, {
                "else": V,
                block: U
            }, {
                key: n.getPath(!1, ["navigation", "selectedPromo"]),
                value: "extensionPromo"
            }).w("\n")
        }

        function V(t, n) {
            return t.w("\n").h("eq", n, {
                block: L
            }, {
                key: n.getPath(!1, ["navigation", "selectedPromo"]),
                value: "subscriptionPromo"
            }).w("\n")
        }

        function L(t, n) {
            return t.w('\n<li id="mega-top-promo" class="Pos(r) Fl(end) D(ib) Ta(end) Mend(18px) Pstart(14px)">\n                    <button class="js-push-subscribe manualtrackpromo D(n) display-push-promos_D(ib) ').f(n.getPath(!1, ["theme", "topbarText"]), n, "h").w(' Pstart(4px) Bd(0) P(0) Fz(13px) Td(u):h" tabindex="1" data-ylk="sec:eyebrow;subsec:notification-promo;slk:').f(n.getPath(!1, ["navigation", "promos", "subscriptionPromo", "label"]), n, "h").w(';elm:btn;itc:1;t1:a1;t2:hd" data-subscription-topic="gondor_homerun_news" data-subscription-ylk="sec:eyebrow;subsec:browser-prompt;slk:notification permission request;elm:btn;itc:1;t1:a1;t2:hd"/>').x(n.getPath(!1, ["navigation", "promos", "subscriptionPromo", "icon"]), n, {
                block: I
            }, {}).f(n.getPath(!1, ["navigation", "promos", "subscriptionPromo", "label"]), n, "h").w("</button>\n                </li>\n            ")
        }

        function I(t, n) {
            return t.w('<img class="Pend(6px) Va(t) ua-ie7_D(n)" src="').f(n.getPath(!1, ["navigation", "promos", "subscriptionPromo", "icon"]), n, "h").w('" width="15" height="15">')
        }

        function U(t, n) {
            return t.w('\n<li id="mega-top-ext-promo" class="Pos(a) End(0) D(ib) Mend(18px) Pstart(14px) D(n)!" ').h("rapid_data_attr", n, {}, {
                t5: "ext-promo",
                slk: "ext-promo",
                t4: "pty-mu"
            }).w('>\n                <a class="C(#fff)" href="#">').f(n.getPath(!1, ["navigation", "promos", "extensionPromo", "label"]), n, "h").w("<span>&nbsp;»</span></a>\n            </li>\n        ")
        }

        function Z(t, n) {
            return t.w('\n<li id="mega-top-promo" class="Pos(r) Fl(end) D(ib) Ta(end)').x(n.getPath(!1, ["theme", "eyeBrowPromoClasses"]), n, {
                "else": E,
                block: H
            }, {}).x(n.getPath(!1, ["navigation", "promos", "linkPromo", "eyeBrowPromoBgUrl"]), n, {
                block: R
            }, {}).w('"').x(n.getPath(!1, ["navigation", "promos", "linkPromo", "eyeBrowPromoBgUrl"]), n, {
                block: A
            }, {}).w('>\n            <a class="').f(n.getPath(!1, ["theme", "topbarText"]), n, "h").w(' Pstart(4px) Td(n)! Td(u)!:h Fz(13px)"').x(n.getPath(!1, ["navigation", "promos", "linkPromo", "linkStyles"]), n, {
                block: N
            }, {}).w(' href="').f(n.getPath(!1, ["navigation", "promos", "linkPromo", "link"]), n, "h").w('" target="_blank" tabindex="1" ').h("rapid_data_attr", n, {}, {
                sec: "eyebrow",
                elm: "nav",
                itc: "0"
            }).w(">").x(n.getPath(!1, ["navigation", "promos", "linkPromo", "icon"]), n, {
                block: W
            }, {}).x(n.getPath(!1, ["navigation", "promos", "linkPromo", "localizedLabel"]), n, {
                "else": Y,
                block: G
            }, {}).w("\n").x(n.getPath(!1, ["navigation", "promos", "linkPromo", "showChevron"]), n, {
                block: J
            }, {}).w("\n</a>\n        </li>\n    ")
        }

        function E(t, n) {
            return t.w(" Mend(18px) Pstart(14px)")
        }

        function H(t, n) {
            return t.w(" ").f(n.getPath(!1, ["theme", "eyeBrowPromoClasses"]), n, "h", ["s"])
        }

        function R(t, n) {
            return t.w(" Bgz(100%) Bgr(nr) Bgpy(c)")
        }

        function A(t, n) {
            return t.w(" style=\"background-image: url('").f(n.getPath(!1, ["navigation", "promos", "linkPromo", "eyeBrowPromoBgUrl"]), n, "h").w("');").x(n.getPath(!1, ["navigation", "promos", "linkPromo", "bgStyles"]), n, {
                block: j
            }, {}).w('"')
        }

        function j(t, n) {
            return t.f(n.getPath(!1, ["navigation", "promos", "linkPromo", "bgStyles"]), n, "h")
        }

        function N(t, n) {
            return t.w(' style="').f(n.getPath(!1, ["navigation", "promos", "linkPromo", "linkStyles"]), n, "h").w('"')
        }

        function W(t, n) {
            return t.w('<img class="Pend(6px) Va(t) Mt(3px) ua-ie7_D(n)" src="').f(n.getPath(!1, ["navigation", "promos", "linkPromo", "icon"]), n, "h").w('" width="15" height="15">')
        }

        function Y(t, n) {
            return t.f(n.getPath(!1, ["navigation", "promos", "linkPromo", "label"]), n, "h")
        }

        function G(t, n) {
            return t.h("intlMessage", n, {}, {
                _key: n.getPath(!1, ["navigation", "promos", "linkPromo", "localizedLabel"])
            })
        }

        function J(t, n) {
            return t.w("<span>&nbsp;»</span>")
        }

        function K(t, n) {
            return t.w('\n<li class="Pos(r) Fl(end) D(ib) Mend(18px) Pstart(14px)">\n            <a class="').f(n.getPath(!1, ["theme", "topbarText"]), n, "h").w(' Pstart(4px) Td(n)! Td(u)!:h Fz(13px)" href="').f(n.getPath(!1, ["navigation", "intlSelector", "link"]), n, "h").w('" tabindex="1" ').h("rapid_data_attr", n, {}, {
                slk: Q,
                elm: X,
                tar: tt,
                itc: "0"
            }).w('>\n                 <i class="Va(m) D(ib) Bgi($flagSprite) Bgi($flagRetinaSprite)--retina Bgz($flagBgz) H(13px) W(20px) Bgp($flag').f(n.getPath(!1, ["navigation", "intlSelector", "intl"]), n, "h").w(')"></i>\n                 <b class="Hidden D(ib)">').f(n.getPath(!1, ["navigation", "intlSelector", "intl"]), n, "h").w("</b>\n            </a>\n        </li>\n    ")
        }

        function Q(t, n) {
            return t.f(n.getPath(!1, ["navigation", "intlSelector", "slk"]), n, "h")
        }

        function X(t, n) {
            return t.f(n.getPath(!1, ["navigation", "intlSelector", "elm"]), n, "h")
        }

        function tt(t, n) {
            return t.f(n.getPath(!1, ["navigation", "intlSelector", "link"]), n, "h")
        }

        function nt(t, n) {
            return t.w('\n<li id="mega-top-intlsite" class="Pos(a) End(0) D(ib) Mend(18px) Pstart(14px)">\n            <a class="').f(n.getPath(!1, ["theme", "topbarText"]), n, "h").w(' Pstart(4px) Td(n)! Td(u)!:h Fz(13px)" href="').f(n.getPath(!1, ["navigation", "intlSite", "link"]), n, "h").w('" tabindex="1" ').h("rapid_data_attr", n, {}, {
                slk: et,
                cpos: ot,
                t5: at
            }).w(">\n                ").f(n.getPath(!1, ["navigation", "intlSite", "label"]), n, "h").w("\n</a>\n        </li>\n    ")
        }

        function et(t, n) {
            return t.f(n.getPath(!1, ["navigation", "intlSite", "slk"]), n, "h")
        }

        function ot(t, n) {
            return t.f(n.getPath(!1, ["navigation", "intlSite", "cpos"]), n, "h")
        }

        function at(t, n) {
            return t.f(n.getPath(!1, ["navigation", "intlSite", "t5"]), n, "h")
        }
        return dust.register("td-applet-mega-header-templates-topbar", n), n.__dustBody = !0, e.__dustBody = !0, o.__dustBody = !0, a.__dustBody = !0, r.__dustBody = !0, i.__dustBody = !0, s.__dustBody = !0, l.__dustBody = !0, u.__dustBody = !0, d.__dustBody = !0, p.__dustBody = !0, h.__dustBody = !0, c.__dustBody = !0, g.__dustBody = !0, f.__dustBody = !0, _.__dustBody = !0, m.__dustBody = !0, P.__dustBody = !0, w.__dustBody = !0, b.__dustBody = !0, y.__dustBody = !0, x.__dustBody = !0, B.__dustBody = !0, k.__dustBody = !0, v.__dustBody = !0, D.__dustBody = !0, T.__dustBody = !0, S.__dustBody = !0, F.__dustBody = !0, z.__dustBody = !0, M.__dustBody = !0, C.__dustBody = !0, O.__dustBody = !0, $.__dustBody = !0, q.__dustBody = !0, V.__dustBody = !0, L.__dustBody = !0, I.__dustBody = !0, U.__dustBody = !0, Z.__dustBody = !0, E.__dustBody = !0, H.__dustBody = !0, R.__dustBody = !0, A.__dustBody = !0, j.__dustBody = !0, N.__dustBody = !0, W.__dustBody = !0, Y.__dustBody = !0, G.__dustBody = !0, J.__dustBody = !0, K.__dustBody = !0, Q.__dustBody = !0, X.__dustBody = !0, tt.__dustBody = !0, nt.__dustBody = !0, et.__dustBody = !0, ot.__dustBody = !0, at.__dustBody = !0, n
    }(), dust.cache["td-applet-mega-header:topbar.dust"] = dust.cache["td-applet-mega-header:topbar"] = dust.cache[n], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-mega-header/templates/topbar"] = function(t, e) {
        t = t || {}, dust.render(n, t, e)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-mega-header-model", function(e, a) {
    "use strict";
    e.namespace("TD.MegaHeader").Model = e.Base.create("TDMegaHeaderModel", e.Model, [e.Af.Sync], {
        resource: "mega-header",
        readonly: !0,
        idAttribute: "season",
        initializer: function(e) {}
    }, {
        ATTRS: {
            season: {}
        }
    })
}, "@VERSION@", {
    requires: ["model", "af-sync"]
});