Etsy.onEnter = function() {
        var e = 13,
            n = {
                stopPropagation: !0,
                preventDefault: !0
            };
        return function(t, i) {
            var o = $.extend({}, n, i || {});
            return function(n) {
                return n.which === e ? (o.stopPropagation && n.stopPropagation(), o.preventDefault && n.preventDefault(), t.apply(this, arguments)) : void 0
            }
        }
    }(), "function" == typeof define && define.amd && define("base.onEnter", [], function() {
        return window.Etsy.onEnter
    }), $.fn.vals = function(e) {
        e = e || ",";
        var n = ($(this).val() || "").split(e);
        for (var t in n) n[t] = $.trim(n[t]);
        return n
    }, define("base.vals", [], function() {}),
    function(e, n) {
        function t(e, n, t) {
            if (e.setSelectionRange) e.focus(), e.setSelectionRange(n, t);
            else if (e.createTextRange) {
                var i = e.createTextRange();
                i.collapse(!0), i.moveEnd("character", t), i.moveStart("character", n), i.select()
            }
        }

        function i() {
            return null !== n.getSignedInUserId()
        }

        function o() {
            if ("undefined" != typeof m) return m;
            var n = e("html").data("user-id");
            return n || (n = e("#header").data("user-id")), m = n ? parseInt(n) : null
        }

        function a() {
            return "undefined" == typeof y && (y = e("html").data("user-login-name")), y
        }

        function r() {
            var e = navigator.cookieEnabled;
            return "undefined" == typeof e && (document.cookie = "testcookie", e = -1 !== document.cookie.indexOf("testcookie")), e ? !0 : !1
        }

        function c(e) {
            var n = h();
            return n.hasOwnProperty(e) ? n[e] : null
        }

        function u(e, n) {
            var t = h();
            t[e] = n, v(t)
        }

        function s(e) {
            var n = h();
            n.hasOwnProperty(e) && (delete n[e], v(n))
        }

        function d(e, n, t, i) {
            i = "undefined" == typeof i ? null : i;
            var o = "";
            if (t) {
                var a = new Date;
                a.setTime(a.getTime() + 24 * t * 60 * 60 * 1e3), o = "; expires=" + a.toGMTString()
            }
            var r = "; path=/";
            i && (r = "; domain=" + i + r), document.cookie = e + "=" + n + o + r
        }

        function l() {
            return document.body && document.body.className ? -1 !== document.body.className.indexOf("is-touch") : !1
        }

        function f(e, t) {
            n.setCookie(e, "", -1, t)
        }

        function g(e) {
            for (var n = e + "=", t = document.cookie.split(";"), i = 0; i < t.length; i++) {
                for (var o = t[i];
                    " " === o.charAt(0);) o = o.substring(1, o.length);
                if (0 === o.indexOf(n)) return unescape(o.substring(n.length, o.length))
            }
            return null
        }

        function h() {
            var e = g(p);
            return null !== e ? JSON.parse(e) : {}
        }

        function v(e) {
            var n = escape(JSON.stringify(e)),
                t = new Date;
            t.setTime(t.getTime() + 6e5);
            var i = "; expires=" + t.toGMTString(),
                o = "; domain=." + document.location.hostname;
            document.cookie = p + "=" + n + i + "; path=/" + o
        }
        var m, y;
        n.Util = {
            empty: function(e) {
                var n = typeof e;
                return "undefined" === n || null === e || "string" === n && 0 === e.length || "object" === n && "length" in e && 0 === e.length
            },
            getOrDefault: function(e, t) {
                return n.Util.empty(e) ? t : e
            },
            getCookieByName: g,
            setCookie: d,
            setSelectionRange: t,
            isSignedIn: i,
            getSignedInUserId: o,
            getSignedInLoginName: a,
            cookiesEnabled: r,
            readTransientValue: c,
            setTransientValue: u,
            eraseTransientValue: s,
            isTouch: l,
            deleteCookieByName: f
        }, n.Util.selectTabFromOverlay = function(n, t) {
            var i = e(n);
            i.find(".tabs li").removeClass("active"), i.find(".tabs li a").attr("aria-selected", "false"), i.find(".overlay-body > div").hide(), e("#" + t).parent().addClass("active"), e("#" + t).attr("aria-selected", "true"), e(n).find("[data-inline-overlay-tab-content]").attr("aria-hidden", "true");
            var o = e("#" + t + "-content").show();
            return o.attr("aria-hidden", "false"), o
        }, n.Util.hasNeverSignedIn = function() {
            return null === g("LD")
        }, n.Util.keyCodeInRange = function(e) {
            var n = Array.prototype.slice.call(arguments, 1),
                t = 0,
                i = n.length;
            if (2 > i || i % 2 !== 0) return !1;
            for (t = 0; i > t; t += 2)
                if (e >= n[t].charCodeAt(0) && e <= n[t + 1].charCodeAt(0)) return !0;
            return !1
        }, n.setSelectionRange = t, n.isSignedIn = i, n.getSignedInUserId = o, n.getSignedInLoginName = a, n.Util._resetSignedInUser = function() {
            m = void 0
        }, n.cookiesEnabled = r;
        var p = "tsd";
        n.readTransientValue = c, n.setTransientValue = u, n.eraseTransientValue = s, n.getCookieByName = function(e) {
            return g(e)
        }, n.setCookie = d, n.isTouch = l, n.deleteCookieByName = f, n.preload = function(e) {
            for (var n, t = e.length, i = window.document, o = i.body, a = ("fileSize" in i); t--;) a ? (new Image).src = e[t] : (n = i.createElement("object"), n.data = e[t], n.width = n.height = 0, o.appendChild(n))
        }, e(document).on("click", ".jquery-toggle", function(n) {
            n.preventDefault(), e("#" + e(this).data("toggle-id")).toggle()
        }), e(document).on("keydown", "a[role=button]", function(n) {
            (32 === n.keyCode || 32 === n.which) && (n.preventDefault(), e(n.target).click())
        }), window.addEventListener ? window.addEventListener("hashchange", function() {
            var e = document.getElementById(location.hash.substring(1));
            e && (/^(?:a|select|input|button|textarea)$/i.test(e.tagName) || (e.tabIndex = -1), e.focus())
        }, !1) : window.attachEvent && window.attachEvent("hashchange", function() {
            var e = document.getElementById(location.hash.substring(1));
            e && (/^(?:a|select|input|button|textarea)$/i.test(e.tagName) || (e.tabIndex = -1), e.focus())
        }), "function" == typeof define && define.amd && (function() {
            require.config({
                paths: {
                    "base.onEnter": "base.onEnter.20180122183942",
                    "base.vals": "base.vals.20180122183942"
                }
            });
            define("etsy.util", ["base.onEnter", "base.vals"], function() {
                return window.Etsy.Util
            })
        })()
    }(window.jQuery, window.Etsy), define("common/a11y/keycode", [], function() {
        return {
            TAB: 9,
            ENTER: 13,
            ESC: 27,
            SPACE: 32,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            PAGEUP: 33,
            PAGEDOWN: 34,
            END: 35,
            HOME: 36
        }
    }), (function() {
        require.config({
            paths: {
                "common/a11y/keycode": "common/a11y/keycode.20180118211911"
            }
        });
        define("collections/accessibility", ["jquery", "common/a11y/keycode"], function(e, n) {
            var t = function() {
                this.init()
            };
            return t.prototype = {
                init: function() {
                    var n = this;
                    e("[data-accessible-btn-fave]").each(function() {
                        e(this).unbind("keypress", n.clickFaveButtonOnEnter), e(this).bind("keypress", n.clickFaveButtonOnEnter)
                    })
                },
                clickFaveButtonOnEnter: function(t) {
                    (t.which === n.ENTER || t.which === n.SPACE) && e(this).find("[data-btn-fave]").click()
                }
            }, t
        })
    })(), require({
        paths: {
            "etsy.util": "etsy.util.20180620212309",
            "collections/accessibility": "collections/accessibility.20181001163040"
        }
    }, ["jquery", "etsy.util", "collections/accessibility"], function(e, n, t) {
        n.isSignedIn() || e("body").on("focusin", ".listing-card", function() {
            e(this).addClass("col-focus")
        }).on("focusout", ".listing-card", function() {
            e(this).removeClass("col-focus")
        }), new t
    });