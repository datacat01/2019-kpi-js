"undefined" == typeof ars && (ars = {}), ars.ads = {}, ars.ads.page = !1, ars.ads.suppressed = !1, ars.ads.slug = ars.AD.slug, ars.ads.channel = ars.AD.channel, ars.ads.tags = ars.AD.tags, ars.ads.server = ars.AD.server, ars.ads.template_type = ars.AD.template_type, ars.ads.environment = function() {
        return $(window).width() <= 1e3 ? "tablet" : "desktop"
    }, ars.ads.init = function() {
        ars.COMMENTS || cns.async("ads", function(e) {
            !1 === ars.ads.page && (e.environment({
                device: ars.ads.environment(),
                server: ars.ads.server
            }), ars.ads.page = e.pages.create({
                slug: ars.ads.slug,
                channel: ars.ads.channel,
                template_type: ars.ads.template_type,
                targeting: {
                    tags: ars.ads.tags
                },
                onSlotRender: ars.ads.sizing
            }), document.dispatchEvent(new CustomEvent("ars-ad-pages-created", {
                bubbles: !0,
                detail: ars.ads.page
            })))
        })
    }, ars.ads.sizing = function(e) {
        var a = e.getContainerEl().parentElement || void 0,
            t = a.parentElement || void 0,
            s = void 0 !== t ? t.offsetHeight : 0;
        return !a.classList.contains("cns-ads-slot-state-empty") && !e.isHidden() && (!(void 0 === t || !t.classList.contains("ad")) && (!t.hasAttribute("data-ad-height") && void setTimeout(function() {
            var e = a.offsetHeight + parseInt(window.getComputedStyle(a).getPropertyValue("margin-top")) + parseInt(window.getComputedStyle(a).getPropertyValue("margin-bottom")) + parseInt(window.getComputedStyle(t).getPropertyValue("padding-top")) + parseInt(window.getComputedStyle(t).getPropertyValue("padding-bottom")) + parseInt(window.getComputedStyle(t).getPropertyValue("border-top-width")) + parseInt(window.getComputedStyle(t).getPropertyValue("border-bottom-width"));
            if (e <= 0) return !1;
            t.setAttribute("data-ad-height", e <= s ? s : e), t.style.minHeight = (e <= s ? s : e) + "px"
        }, 350)))
    }, ars.ads.supress = function() {
        cns.async("ads", function(e) {
            ars.ads.page && "function" == typeof ars.ads.page.destroy && !ars.ads.suppressed && (ars.ads.page.destroy(), ars.ads.suppressed = !0)
        })
    }, ars.ads.IABConsent = function() {
        function e() {
            var e = arguments;
            if (__cmp.a = __cmp.a || [], !e.length) return __cmp.a;
            "ping" === e[0] ? e[2]({
                gdprAppliesGlobally: !1,
                cmpLoaded: !1
            }, !0) : __cmp.a.push([].slice.apply(e))
        }

        function a(s) {
            var r = "string" == typeof s.data,
                e = s.data;
            if ("object" != typeof e) try {
                e = JSON.parse(e)
            } catch (e) {
                return
            }
            if (e.__cmpCall) {
                var n = e.__cmpCall;
                window.__cmp(n.command, n.parameter, function(e, a) {
                    var t = {
                        cmpReturn: {
                            returnValue: e,
                            success: a,
                            callId: n.callId
                        }
                    };
                    s.source.postMessage(r ? JSON.stringify(t) : t, "*")
                })
            }
        }
        return {
            init: function() {
                ! function() {
                    if (void 0 !== window.frames.__cmpLocator) return window.frames.__cmpLocator;
                    var e = document.createElement("iframe");
                    e.name = "__cmpLocator", e.style.cssText = "display: none", document.body.appendChild(e)
                }(), "function" != typeof __cmp && (window.__cmp = e, __cmp.msgHandler = a, window.addEventListener ? window.addEventListener("message", a, !1) : window.attachEvent("onmessage", a))
            }
        }
    }(), ars.ads.init(), ars.ads.IABConsent.init(), document.arrive(".ad", function() {
        var e = $(this),
            a = Date.now();
        e.addClass("ad_" + a), e.hasClass("ad_fullwidth") ? ars.ads.page.slots.add({
            type: "inline_index",
            overwrites: {
                render: {
                    slot: {
                        top: ".ad_fullwidth.ad_" + a
                    }
                }
            }
        }) : e.hasClass("ad_xrail") && ars.ads.page.slots.add({
            type: "siderail",
            overwrites: {
                render: {
                    slot: {
                        top: ".ad_xrail.ad_" + a
                    }
                }
            }
        })
    }),
    function() {
        var e = document.createElement("a"),
            a = ars.cookies.read("_parsely_visitor");
        e.href = document.referrer, ars.SHOW_ADS && !ars.LOGGED && 0 < $("body.single").length && (0 <= $.inArray(e.hostname, ["t.co", "www.facebook.com", "plus.url.google.com", "www.google.com", "www.reddit.com", "twitter.com", "ars.dev"]) && null === a || 0 <= window.location.href.search("teads=1")) && $(".article-content>p").each(function(e) {
            var a = $(this);
            if ("P" === a.prev().prop("tagName") && 2 < e) return a.before('<div id="teads-container"></div>'), !1
        })
    }();