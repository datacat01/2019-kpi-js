! function(v) {
    var t = "header";

    function u(n, e) {
        var u, t = n.data(),
            a = v.extend(!0, {}, {
                selectors: {
                    searchInMenu: ".js-menu-search",
                    submenuParents: ".js-submenu-parent",
                    submenus: ".submenu"
                },
                isTouch: !1
            }, e, t),
            s = {
                mainElem: n
            },
            r = {
                func: null,
                time: a.isTouch ? 0 : 250
            };

        function i() {
            s.searchInMenu.removeClass("activated")
        }

        function c(n) {
            n.preventDefault(), n.stopPropagation(), s.searchInMenu.addClass("activated"), s.searchInMenu.find("input").focus()
        }

        function o() {
            s.submenuParents.removeClass("active").find("> a").attr("aria-expanded", !1), s.submenus.attr("aria-hidden", !0), u = void 0
        }

        function l(n) {
            var e = u;
            if (r.func && clearTimeout(r.func), (u !== n || a.isTouch) && (u && o(), n !== e)) {
                var t = s.submenuParents.filter('[data-id="' + n + '"]');
                t.addClass("active").find(" > a").attr("aria-expanded", !0), t.find(".submenu").attr("aria-hidden", !1), u = n
            }
        }

        function d(n) {
            var e = n.currentTarget.parentNode.getAttribute("data-id");
            a.isTouch && (n.preventDefault(), l(e))
        }

        function m(n) {
            var e = n.currentTarget.getAttribute("data-id");
            a.isTouch || l(e)
        }

        function f() {
            a.isTouch || (r.func = setTimeout(o, r.time))
        }

        function h(n) {
            s.searchInMenu.length && !v(n.target).closest(s.searchInMenu.find("input")).length && i(), a.selectors.submenuParents && !v(n.target).closest(s.submenuParents).length && o()
        }

        function b() {
            v.each(a.selectors, function(n, e) {
                s[n] = s.mainElem.find(e)
            })
        }
        return b(), s.searchInMenu.length && (s.searchInMenu.find("a").on("click", c), s.searchInMenu.find("input").on("blur", i)), a.selectors.submenuParents && (s.mainElem.on("mouseover", a.selectors.submenuParents, m), s.mainElem.on("mouseout", a.selectors.submenuParents, f), s.mainElem.on("focus", a.selectors.submenuParents, m), s.mainElem.on("focusout", a.selectors.submenuParents, f), s.mainElem.on("click", a.selectors.submenuParents + " > a", d)), v(document.body).on("click", h), {
            collectElements: b
        }
    }
    v.fn[t] = function(e) {
        return this.each(function() {
            var n = v(this);
            n.data("snorky-plugin-" + t) || n.data("snorky-plugin-" + t, u(n, e))
        }).data("snorky-plugin-" + t)
    }, "function" == typeof define && define("snorky/plugins/header", [], function() {
        return v.fn[t]
    })
}(window.jQuery);
define("classes/Header/NewHeaderView", ["abstracts/View"], function(n) {
    return n.extend({
        container: ".site-header",
        domEvents: {
            "click .js-logout": "onLogoutClick"
        },
        initialize: function() {
            this.parent()
        },
        alreadySet: function() {
            return this.container.hasClass("js-header-inited")
        },
        setInitedState: function() {
            this.container.addClass("js-header-inited")
        },
        onLoginClick: function(n) {
            !$(n.target).hasClass("standalone") && $("body").hasClass("login-data-checked") && (n.preventDefault(), this.emit("startLogin"))
        },
        loggingOut: !1,
        startLogout: function() {
            this.container.find(".js-logout").click()
        },
        onLogoutClick: function(n) {
            var t = $(n.currentTarget).attr("href");
            n.preventDefault(), this.loggingOut || (this.emit("startLogout", {
                url: t
            }), this.loggingOut = !0)
        },
        onLogoutSuccess: function() {
            $("body").hasClass("dashboard") ? window.location.href = "/" : window.location.reload()
        },
        showLoggedInParts: function(n) {
            n.userMenu && (this.container.removeClass("not-logged-in").addClass("logged-in"), this.container.find(".usersection").find("ul").html(n.userMenu))
        },
        changeUserPicture: function(n) {
            this.container.find(".menu-profile img").attr("src", n)
        },
        changeUserMenuChannelLink: function(n) {
            var t = this.container.find(".js-channel-settings").find("a")[0],
                e = t.href.split("?")[1];
            t.href = n + "?" + e
        }
    })
});
define("classes/Header/NewHeaderController", ["abstracts/Controller", "classes/Header/NewHeaderView", "datasources/AjaxDataSource", "classes/Authentication/LoggedInDataSyncer", "classes/BroadcastOpener", "stringUtils", "events", "exposedVars"], function(e, t, a, s, n, o, i, r) {
    return e.extend({
        viewEvents: {
            startLogin: "onStartLogin",
            startLogout: "onStartLogout"
        },
        startBroadcastSelector: ".start-broadcast",
        initialize: function() {
            this.view = new t, this.view.alreadySet() || (this.view.setInitedState(), this.parent(), new n($(this.startBroadcastSelector)), r.get("ibmBranding") || (i.capture("LOGINSUCCESS", $.proxy(this.onLogin, this)), i.capture("REQUIRELOGOUT", $.proxy(this.view.startLogout, this.view)), i.capture("FACEBOOKCONNECTED", $.proxy(this.onFacebookConnected, this))), this.snorkyHeader = this.view.container.header({
                isTouch: ustream.browser.touch
            }))
        },
        onStartLogin: function() {
            i.dispatch("REQUIRELOGIN", {
                allowRedirect: !0,
                gaTriggerLabel: "Header Link"
            })
        },
        onStartLogout: function(e) {
            var t = e.url;
            s.clear(), i.dispatch("DISABLEFACEBOOKAUTOLOGIN"), i.dispatch("LOGOUT"), a.getInstance().request({
                url: t,
                xhrFields: {
                    withCredentials: !0
                },
                success: $.proxy(this.onLogoutResponse, this),
                error: $.proxy(this.onLogoutResponse, this)
            })
        },
        onLogoutResponse: function() {
            this.view.onLogoutSuccess()
        },
        onFacebookConnected: function(e) {
            if ((r.get("lockType") || window.location.search.indexOf("debug") < 0 && r.get("socialStreamTabs") && r.get("socialStreamTabs").socialStream.isEnabled) && window.location.reload(), r.get("loggedIn") && e.eventData && e.eventData.exposedVariables) {
                var t = e.eventData.exposedVariables.userPicture;
                this.view.changeUserPicture(t)
            }
        },
        onLogin: function(e) {
            if (e && e.eventData && e.eventData.userMenu && (this.view.showLoggedInParts(e.eventData), this.snorkyHeader.collectElements()), r.get("channelData") && r.get("channelData").owner.id === e.eventData.loggedInUserId) {
                var t = o.urlSubst(r.get("urls").header.channelSettings, {
                    cid: r.get("cId")
                });
                this.view.changeUserMenuChannelLink(t)
            }
        }
    })
});