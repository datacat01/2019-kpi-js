! function(h) {
    var t = "ibmOverlay",
        v = "ibm-snorky-plugin-" + t,
        w = "pushState" in history;
    h.fn[t] = function(e) {
        return this.each(function() {
            var t = h(this);
            t.data(v) || t.data(v, function(t, e) {
                var n, a = {
                        size: "full",
                        events: {},
                        selectors: {
                            modal: ".js-ibm_overlay__modal",
                            closeButton: ".js-ibm_overlay__close-button"
                        },
                        closeOnEscape: !0
                    },
                    o = {},
                    i = {},
                    s = t.data(),
                    r = Date.now();

                function d(t) {
                    o.focusables[h(t.target).data(v + "-focustrap")].trigger("focus")
                }

                function l(t) {
                    "Escape" !== t.key && 27 !== t.keyCode || (t.preventDefault(), m())
                }

                function f() {
                    c(), p()
                }

                function c() {
                    i.window = {
                        width: o.window.width(),
                        height: o.window.height()
                    }, i.modal = {
                        width: o.modal.outerWidth(),
                        height: o.modal.outerHeight()
                    }
                }

                function u(t) {
                    var e;
                    t && t.preventDefault && t.preventDefault(), "true" !== o.main.attr("aria-hidden") && (o.main.prop("hidden", !0).attr("aria-hidden", "true"), e = "data-" + v + "-sibling", o.main.siblings().filter("[" + e + '="' + r + '"]').removeAttr(e).removeAttr("aria-hidden"), o.modal.removeAttr("tabindex"), o.lastActiveElement && o.lastActiveElement.trigger("focus"), o.body.find(".overlay").filter(":visible").length || o.body.removeClass("has-ibm_overlay"), a.events && a.events.onOverlayClose && a.events.onOverlayClose())
                }

                function m() {
                    w ? history.back() : u()
                }

                function p() {
                    var t = 0;
                    539 < i.window.width && (t = (i.window.height - i.modal.height) / 2), t < 0 && (t = 20), o.main.css({
                        "padding-top": t
                    })
                }
                return h.extend(a, e, s), o.window = h(window), o.body = h("body"), o.main = t, o.modal = o.main.find(a.selectors.modal), o.closeButton = o.main.find(a.selectors.closeButton), n = o.main.find(':input, [href], [tabindex]:not([tabindex="-1"])'), o.focusables = {
                    first: n.first(),
                    last: n.last()
                }, o.focusTraps = h([document.createElement("span"), document.createElement("span")]).attr("tabindex", "0"), o.focusTraps.first().data(v + "-focustrap", "last"), o.focusTraps.last().data(v + "-focustrap", "first"), o.main.prepend(o.focusTraps.first()), o.main.append(o.focusTraps.last()), w && o.window.on("popstate", u), o.window.on("resize", f), o.closeButton.on("click", m), a.closeOnEscape && o.main.on("keyup", l), o.focusTraps.on("focus", d), {
                    open: function() {
                        var t;
                        o.body.hasClass("has-ibm_overlay") || o.body.addClass("has-ibm_overlay"), o.main.removeAttr("hidden").removeAttr("aria-hidden"), t = "data-" + v + "-sibling", o.lastActiveElement = h(document.activeElement), o.main.siblings().filter(":not([" + t + "]):not([aria-hidden])").attr(t, r).attr("aria-hidden", "true"), o.modal.attr("tabindex", 0).trigger("focus"), w && history.pushState({
                            IBMSnorkyModalWindow: r
                        }, ""), c(), p()
                    },
                    close: u,
                    destroy: function() {
                        o.focusTraps.remove(), w && o.window.off("popstate", u), o.window.off("resize", f), o.closeButton.off("click", m), o.main.off("keyup", l), o.focusTraps.off("focus", d), o = {}
                    }
                }
            }(t, e))
        }).data(v)
    }, "function" == typeof define && define("ibm-snorky/plugins/overlay", [], function() {
        return h.fn[t]
    })
}(window.jQuery);
define("apps/Base", ["klass", "lodash", "events", "datasources/AjaxDataSource", "classes/LanguageSelector", "classes/CampaignTracking/Controller", "classes/Header/NewHeaderController", "classes/Facebook", "classes/KeepAlive", "exposedVars", "classes/Footer", "classes/PrettyDateUpdater"], function(e, s, a, t, i, n, c, o, l, r, u, p) {
    return e({
        initialize: function() {
            require(["classes/Authentication/Factory"], function(e) {
                e.createAuthentication()
            }), new i, new n, a.capture("LOGINSUCCESS", s.bind(this.keepAlive, this)), this.facebook = new o, new c
        },
        keepAlive: function() {
            l.keepAlive(r.get("keepAliveUrl"), r.get("sessionTimeOut"))
        }
    })
});
define("classes/Home/View", ["abstracts/View", "ustream-embedapi", "lodash"], function(e, i, r) {
    return e.extend({
        container: ".js-view-home",
        domEvents: {
            "click .js-open-video-popup": "onVideoOpenerClick"
        },
        initialize: function() {
            this.parent();
            var e = i || window.UstreamEmbed;
            this.viewer || (this.viewer = e("IBMViewer")), this.videoOverlay = $(".js-video-overlay"), this.videoOverlay.ibmOverlay({
                events: {
                    onOverlayClose: r.bind(this.onVideoOverlayClose, this)
                }
            })
        },
        insertHeroVideo: function(e) {
            var o = $('<video muted loop autoplay preload playsinline class="home__video js-home_video" />');
            r.forEach(e, function(e, i) {
                o.append('<source src="' + e + '" type="video/' + i + '">')
            }), this.container.find(".js-home__hero").prepend(o)
        },
        insertHeroImage: function(e, i) {
            $(".js-home__video").length && $(".js-home__video").remove();
            var o = $('<img src="' + e + '" alt="' + i + '" class="home__image">');
            this.container.find(".js-home__hero").prepend(o)
        },
        onVideoOpenerClick: function(e) {
            var i, o = e.currentTarget.href;
            if (-1 < o.indexOf("/recorded/")) {
                e.preventDefault();
                var r = o.split("/").pop().replace(/\?.+/gi, "");
                this.videoOverlay && (i = this.videoOverlay.attr("data-video-id")), r === i || (this.videoOverlay.attr("data-video-id", r), this.viewer.callMethod("load", "video", r)), this.viewer.callMethod("play"), this.videoOverlay.ibmOverlay().open()
            }
        },
        onVideoOverlayClose: function() {
            this.viewer.callMethod("pause")
        }
    })
});
define("classes/Home/Controller", ["abstracts/Controller", "classes/Home/View", "ustream-env", "exposedVars"], function(e, t, r, i) {
    return e.extend({
        initialize: function() {
            this.view = new t, this.parent(), r.desktop ? this.view.insertHeroVideo(i.get("heroSources")) : this.view.insertHeroImage(i.get("heroImage"), i.get("heroTitle").replace(/<br?.+>/, ""))
        }
    })
});
define("App", ["apps/Base", "classes/Home/Controller"], function(e, n) {
    return e.extend({
        initialize: function() {
            this.parent(), new n
        }
    })
});