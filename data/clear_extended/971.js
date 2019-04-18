require(["ta/rollupAmdShim"], function(a) {
    a.install(["ta/Core/TA.FireEvent", "utils/urlDecoder", "ta/Core/TA.Event", "ta/Browser", "ta/Core/TA.Record", "ta/util/SessionStorage", "vanillajs", "lib/jquery-amd", "ta/util/Error", "facebook/authutils", "ta/util/ActionRecord", "ta/util/Cookie", "ta/popups/CookieSettingsPanel", "ta/util/Currency", "utils/ajax", "common/Radio", "ta/registration/RegEvents", "utils/throttle", "widget/components", "utils/asdf-encoder", "ta/util/CommonMessagingUtil", "api-mod", "ta/Core/TA.LocalStorage", "ta/Core/TA.Store", "overlays/Overlay", "overlays/styles/flyout", "overlays/position", "overlays/options/matchWidth", "overlays/options/closeOnDocClick", "overlays/options/autoReposition", "overlays/options/fade", "overlays/options/closeOnScroll", "overlays/options/centerArrowOnSrcElement", "overlays/options/repositionOnTaEvent", "overlays/uiOverlay", "ta/common/behavior/Ads-pagemoniker", "servlets/standardTemplateSupport", "facebook/authutils", "google/authutils"], ["ta", "page-model", "page-model", "page-model", "page-model", "page-model", "page-model"])
});
if (window.requirejs && requirejs.taConfig) {
    requirejs.taConfig({
        deferred: {},
        name: "short_lived_global",
        files: {
            js3_secure: {
                ssl: {
                    ta: {
                        common: {
                            behavior: {
                                "Ads-pagemoniker": 1
                            }
                        },
                        Core: {
                            "TA.Record": 1
                        }
                    }
                }
            },
            "js-amd": {
                src: {
                    utils: {
                        throttle: 1,
                        urlDecoder: 1,
                        "asdf-encoder": 1,
                        ajax: 1
                    },
                    "api-mod": 1,
                    facebook: {
                        authutils: 1
                    },
                    overlays: {
                        uiOverlay: 1,
                        options: {
                            fade: 1,
                            matchWidth: 1,
                            autoReposition: 1,
                            centerArrowOnSrcElement: 1,
                            repositionOnTaEvent: 1,
                            closeOnDocClick: 1,
                            closeOnScroll: 1
                        },
                        styles: {
                            flyout: 1
                        },
                        position: 1
                    },
                    servlets: {
                        standardTemplateSupport: 1
                    },
                    google: {
                        authutils: 1
                    },
                    vanillajs: 1
                }
            },
            js3: {
                lib: {
                    "jquery-amd": 1
                },
                build: {
                    es6: {
                        src: {
                            widget: {
                                components: 1
                            },
                            common: {
                                Radio: 1
                            },
                            overlays: {
                                Overlay: 1
                            }
                        }
                    }
                },
                src: {
                    ta: {
                        util: {
                            Cookie: 1,
                            CommonMessagingUtil: 1,
                            ActionRecord: 1,
                            Currency: 1,
                            Error: 1,
                            SessionStorage: 1
                        },
                        popups: {
                            CookieSettingsPanel: 1
                        },
                        registration: {
                            RegEvents: 1
                        },
                        Browser: 1,
                        Core: {
                            "TA.FireEvent": 1,
                            "TA.Event": 1,
                            "TA.LocalStorage": 1,
                            "TA.Store": 1
                        }
                    }
                }
            }
        },
        _: {
            baseUrl: "/"
        }
    })
};
require(["ta/p13n/placements"], function(e) {
    var n = e.define.bind(e, "trip_planner_breadcrumbs", "handlers", ["handlers"]);
    n(["placement", "ta/Core/TA.FireEvent", "utils/urlDecoder"], function(e, n, i) {
        "use strict";

        function r(n) {
            var i = document.getElementById(e.id);
            i && (i.innerHTML = n.innerHTML)
        }

        function t(e, n) {
            i.goToLink(e, n)
        }

        function o(e, n) {
            return require.defined("ta/util/Cookie") && require("ta/util/Cookie").setOneTimeCookie(e, n)
        }
        return n.on("update-" + e.name, r), {
            goToLink: t,
            onClick: o
        }
    })
});
define("ta/util/SessionStorage", ["vanillajs", "ns-exporter"], function(e, t) {
    var n = {};
    return n.canUseSessionStore = function() {
        try {
            if (window.sessionStorage) {
                var e = "taLsTest";
                sessionStorage.setItem(e, "1");
                var t = sessionStorage.getItem(e);
                return "1" == t
            }
        } catch (e) {
            return !1
        }
    }, n.canUseSessionStore() ? (n.setObject = function(e, t) {
        sessionStorage.setItem(e, JSON.stringify(t))
    }, n.getObject = function(e) {
        var t = sessionStorage.getItem(e);
        return t ? JSON.parse(t) : null
    }, n.remove = function(e) {
        sessionStorage.removeItem(e)
    }) : (n.setObject = function() {}, n.getObject = function() {
        return null
    }, n.remove = function() {}), t.exportTo(n, "ta.util.sessionStorage"), n
});
require(["ta/p13n/placements"], function(e) {
    var n = e.define.bind(e, "browser_mode_tracking", "handlers", ["handlers"]);
    n(["placement", "ta/Core/TA.Event", "ta/Browser", "ta/Core/TA.Record", "ta/util/SessionStorage"], function(e, n, o, r, t) {
        function s(e) {
            r.trackEventOnPage("BROWSER_TRACKING", a, e, null, !0)
        }
        var a, i = e.id + "_browser_mode_tracked";
        n.queueForLoad(function() {
            t.canUseSessionStore() && sessionStorage.getItem(i) || o.isChrome() && (a = "Chrome", o.isChromeIncognito(s), t.canUseSessionStore() && sessionStorage.setItem(i, "1"))
        })
    })
});
require(["ta/p13n/placements"], function(e) {
    var c = e.define.bind(e, "comscore", "handlers", ["handlers"]);
    c(["placement", "ta/Core/TA.Event", "vanillajs"], function(e, c) {
        "use strict";
        c.queueForLoad(function() {
            var c = document.getElementById(e.id),
                o = c.querySelector(".dataHolder"),
                t = o.getAttribute("data-id"),
                n = {
                    c1: "2",
                    c2: t,
                    c3: "",
                    c4: ""
                };
            if ("undefined" != typeof COMSCORE) COMSCORE.beacon(n);
            else {
                window._comscore = window._comscore || [], window._comscore.push(n);
                var r = document.createElement("script");
                r.async = !0, r.src = ("https:" == document.location.protocol ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js", c.appendChild(r)
            }
        }, 5, "comscore")
    })
});
define("Logging", [], function() {
    var e = "undefined" != typeof IS_DEBUG && IS_DEBUG ? 4 : 1;
    "boolean" == typeof __SERVER__ && __SERVER__ && (e = 4);
    for (var n = {}, o = ["error", "warn", "dir", "info", "debug"], r = 0; r < o.length; r++) {
        var l = o[r];
        n[l] = function(n, o) {
            return function() {
                e < o || "undefined" != typeof console && console[n] && console[n].apply && console[n].apply(console, Array.prototype.slice.call(arguments))
            }
        }(l, r)
    }
    return n.setLevel = function(n) {
        e = n
    }, n
});
define("facebook/authutils", ["api-mod", "lib/jquery-amd", "Logging", "ta/Core/TA.Store", "ta/util/Deferred", "ta/util/SessionStorage", "ta/util/Cookie", "ta/util/Error", "ta/registration/RegEvents", "ta/Core/TA.Event"], function(e, t, n, o, i, s, a, r, u, c) {
    "use strict";
    var d = 6e5,
        f = "fbAutoLoginTime",
        g = new i,
        p = function(e, t) {
            var n = t || "v1.0";
            return FB.init({
                appId: e,
                version: n,
                status: !0,
                cookie: !0
            }), g.resolve()
        },
        l = function(e) {
            g.promise().success(e)
        },
        v = function() {
            a.setOneTimeCookieOnFQDN("FacebookAuthCode2", "ConflictedFBAccount"), window.location.reload()
        },
        h = function(e) {
            window.__REDUX_STORE__ && e && __REDUX_STORE__.dispatch({
                type: "SET_AUTH_STATE",
                loggedInUserId: e
            })
        },
        m = function() {
            var e = new i;
            return T() ? (FB.getLoginStatus(function(n) {
                if ("connected" === n.status && n.authResponse) {
                    if (o.has("cached.facebookuid")) return void R(o.retrieve("cached.facebookuid"), n.authResponse.userID);
                    var i = new XMLHttpRequest;
                    i.open("POST", "/FacebookConnectAjax", !0), i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), i.send("a=autologin&signedRequest=" + encodeURIComponent(n.authResponse.signedRequest)), i.onreadystatechange = function() {
                        if (4 == i.readyState) {
                            if (200 != i.status) return e.reject();
                            if (e.resolve(), i.responseText) {
                                var n = t("<div>" + i.responseText + "</div>").find("#fbcajax_data");
                                if (n.length) {
                                    var o = n.data("fbAutologinTaUserId");
                                    o && h(o)
                                }
                            }
                            c.fireEvent("fbAutoLoginSuccess"), u.emit("success")
                        }
                    }
                }
            }), e.promise()) : e.reject()
        },
        R = function(e, t) {
            e !== "" + t && (r.record(null, "Mismatched Facebook uid between cached value and authResponse. cached: " + e + ", response: " + t), v())
        },
        S = function() {
            T() && FB.getLoginStatus(function(e) {
                if ("connected" === e.status && e.authResponse) {
                    if (o.has("cached.facebookuid")) return void R(o.retrieve("cached.facebookuid"), e.authResponse.userID);
                    var t = new XMLHttpRequest;
                    t.open("POST", "/FacebookConnectAjax", !0), t.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), t.send("a=refresh&signedRequest=" + encodeURIComponent(e.authResponse.signedRequest))
                }
            })
        },
        b = function(e, n, o) {
            var i = t("form#" + e),
                s = i.find("." + n).val();
            return s && s.match(/.+\@.+\..+/) ? void i.submit() : void i.find("." + o).removeClass("hidden")
        },
        T = function() {
            if (s.canUseSessionStore()) try {
                var e = (new Date).getTime(),
                    t = sessionStorage.getItem(f);
                return null == t ? (sessionStorage.setItem(f, e), !0) : (t = parseInt(t), e - t < d ? (n.info("Skipping FB autologin, tried too recently"), !1) : (sessionStorage.setItem(f, e), !0))
            } catch (e) {
                r.record(null, "Error storing FB autologin attempt: " + e)
            }
            return !0
        };
    return {
        init: p,
        autoLogin: m,
        queueForInit: l,
        refreshToken: S,
        submitEmailRegistration: b
    }
});
require(["ta/p13n/placements"], function(e) {
    var o = e.define.bind(e, "facebook_autologin", "handlers", ["handlers"]);
    o(["placement", "lib/jquery-amd", "ta/Core/TA.Event", "ta/util/Error", "facebook/authutils"], function(e, o, t, n, a) {
        "use strict";
        t.queueForAfterLoad(function() {
            var e = o("#fb_autologin_data");
            if (!e.length) return void n.record(null, "Could not find Facebook autologin data");
            var t = e.data("loadFbJs"),
                r = e.data("facebookJsUrl"),
                i = e.data("facebookConnectAppId"),
                c = e.data("facebookApiVersion"),
                u = e.data("fbAutoLogin"),
                d = e.data("fbFetchAccessToken");
            try {
                window.fbAsyncInit = function() {
                    a.init(i, c)
                }, t && ! function(e, o, t) {
                    var n, a = e.getElementsByTagName(o)[0];
                    e.getElementById(t) || (n = e.createElement(o), n.id = t, n.src = r, a.parentNode.insertBefore(n, a))
                }(document, "script", "facebook-jssdk"), u && a.queueForInit(function() {
                    a.autoLogin()
                }), d && a.queueForInit(function() {
                    a.refreshToken()
                })
            } catch (e) {
                n.record(e, "Error setting up Facebook autologin JS")
            }
        }, "placement: facebook_autologin")
    })
});
require(["ta/prwidgets"], function(e) {
    var t = e.define.bind(e, "homepage_footer_pickers", "handlers", ["handlers"]);
    t(["widget", "lib/jquery-amd", "ta/Core/TA.Record"], function(e, t, o) {
        "use strict";

        function a(t, o, a, r) {
            t && t.stopPropagation(), o.onclick = null, e.require(["trjs!styleguide/overlays/Flyout", "trjs!overlays/support/widgets", "trjs!overlays/support/remoteWidget", "trcss!src/build/styleguide/ui_overlays/flyouts"], function(n, s, i) {
                n(t, o, s(e), i(a, {}, r))
            })
        }
        return {
            showPos: function(r, n) {
                var s = t(e.element).find(".point_of_sale_data");
                a(r, n, "POS_PICKER", {
                    pageFeature: s.data("page-feature") || window.pageFeature || "",
                    localeCodes: s.data("locale-codes") || window.localeCodes || "",
                    relativeUrl: document.location.pathname + (document.location.search || "") + (document.location.hash || "")
                });
                var i = s.data("currentLocale");
                o.trackEventOnPage("POS_PICKER", "Open", i)
            },
            showCurrency: function(e, t) {
                a(e, t, "CURRENCY_PICKER")
            }
        }
    })
});
define("ta/util/ActionRecord", ["vanillajs", "ta/util/Deferred", "utils/ajax", "ns-exporter", "ta/Core/TA.Record"], function(r, t, e, o, n) {
    function a(r, o, a, i) {
        var c = new t;
        a || (a = {});
        var u = {
            url: a.url || r,
            method: a.method || "get",
            data: {
                action: o
            },
            success: function(r) {
                a.onSuccess && a.onSuccess(r), c.resolve(r)
            },
            error: function(r) {
                a.onFailure && a.onFailure(r), c.reject(r)
            }
        };
        for (var d in a)
            if (a.hasOwnProperty(d) && !u.hasOwnProperty(d)) u[d] = a[d];
            else if ("data" == d)
            for (d in a.data) a.data.hasOwnProperty(d) && (u.data[d] = a.data[d]);
        if (i) {
            var s = n._toEvtParams(i);
            for (d in s) s.hasOwnProperty(d) && (u.data[d] = s[d])
        }
        return e(u), i && n._trackEventAfterAjax(i), c.promise()
    }
    var i = {
        record: function(r, t, e) {
            return a("/ActionRecord", r, t, e)
        },
        recordPlus: function(r, t, e) {
            return a("/ActionRecordPlus", r, t, e)
        },
        recordPid: function(r) {
            new e("/ActionRecord?pid=" + r)
        }
    };
    return o.exportTo(i, "ta.util.action"), i
});
require(["ta/prwidgets"], function(e) {
    var n = e.define.bind(e, "homepage_partner_footer_links", "handlers", ["handlers"]);
    n(["widget", "lib/jquery-amd", "ta/util/ActionRecord"], function(e, n, t) {
        "use strict";
        n(e.element).on("click", ".inlineLink", function() {
            var e = n(this).parent(".footerLink").data("trackAction");
            e && t.record("Footer" + e)
        })
    })
});
require(["ta/prwidgets"], function(e) {
    var t = e.define.bind(e, "homepage_social_footer_links", "handlers", ["handlers"]);
    t(["widget", "lib/jquery-amd", "ta/util/ActionRecord"], function(e, t, i) {
        "use strict";
        t(e.element).on("click", ".footerLink", function() {
            var e = t(this).data("trackAction");
            e && i.record("Footer_" + e)
        })
    })
});
require(["ta/prwidgets"], function(t) {
    var e = t.define.bind(t, "homepage_tripadvisor_footer_links", "handlers", ["handlers"]);
    e(["widget", "lib/jquery-amd", "ta/util/Cookie", "ta/util/ActionRecord", "page-model"], function(t, e, r, i, a) {
        "use strict";

        function n(t) {
            var e = t ? t.srcElement || t.target : null;
            e && e.getAttribute("data-pid") && r.setPIDCookie(e.getAttribute("data-pid"))
        }
        return e(t.element).on("click", '.js_click[data-id="help_center"]', function() {
            var r = this,
                i = e(r).data("url");
            t.require(["trjs!brand/HelpCenterOverlay", "trcss!src/build/required/help_center_overlay"], function(t) {
                t.open(r, i)
            })
        }), e(t.element).on("click", '.js_click[data-id="rs_footer_link"]', function() {
            var t = e(this);
            require(["ta/Core/TA.Record"], function(e) {
                e.trackEventOnPage(a.session.pageServlet, t.data("trackAction"))
            }), t.data("url") && (window.location = t.data("url"))
        }), e(t.element).on("click", ".footerLink", function(t) {
            var r = "Footer_",
                a = e(this),
                n = a.data("trackAction");
            if (n) {
                var o = "_blank" == a.attr("target");
                a.is("a") && !o ? (t.preventDefault(), i.record(r + n).always(function() {
                    window.location = a.attr("href")
                })) : i.record(r + n)
            }
        }), {
            checkForPid: n
        }
    })
});
define("ta/util/openNewTab", ["utils/browserutils", "ta/Browser", "ta/util/Cookie"], function(e, o, t) {
    return function(n) {
        var i;
        return o.isIE10Metro() || (i = e.ie && !o.isIE9orHigher() ? window.open(n, "_blank", "location=yes,resizable=yes,menubar=yes,scrollbars=yes,toolbar=yes,width=" + document.documentElement.clientWidth + ",height=" + document.documentElement.clientHeight) : window.open(n, "_blank")), !i || i.closed || "undefined" == typeof i.closed ? (t.setPIDCookie(38821), window.location = n, !1) : i
    }
});
define("ta/popups/CookieSettingsPanel", ["ta/util/openNewTab", "page-model"], function(e, n) {
    return function(s) {
        s && s.stop();
        var o = {
                en: 451,
                en_UK: 834,
                en_IE: 835,
                en_ZA: 2635,
                sv: 720,
                no: 721,
                da: 1199,
                fr: 1197,
                fr_BE: 6409,
                fr_CH: 6410,
                de: 1201,
                de_AT: 2719,
                de_CH: 6431,
                el: 1198,
                it: 1202,
                it_CH: 6432,
                es: 1200,
                pl: 1208,
                nl: 1209,
                nl_BE: 6411,
                fi: 2968,
                hu: 3049,
                cs: 3128,
                sk: 3233,
                pt_PT: 13938,
                "default": 451
            },
            i = {
                en: 8328,
                en_UK: 8328,
                en_IE: 8316,
                en_ZA: 8324,
                sv: 8322,
                no: 8323,
                da: 8310,
                fr: 8312,
                fr_BE: 8307,
                fr_CH: 8326,
                de: 8313,
                de_AT: 8306,
                de_CH: 8325,
                el: 8314,
                it: 8317,
                it_CH: 8327,
                es: 8321,
                pl: 8319,
                nl: 8318,
                nl_BE: 8309,
                fi: 8311,
                hu: 8315,
                cs: 8308,
                sk: 8320,
                pt_PT: 13939,
                "default": 8328
            },
            t = n.isMobile ? i : o,
            _ = n.session && n.session.posLocale && t[n.session.posLocale] ? t[n.session.posLocale] : t["default"],
            l = "http://info.evidon.com/pub_info/" + _ + "?v=1&nt=0";
        e(l)
    }
});
require(["ta/prwidgets"], function(e) {
    var t = e.define.bind(e, "homepage_tripadvisor_horizontal_footer_links", "handlers", ["handlers"]);
    t(["widget", "lib/jquery-amd", "ta/popups/CookieSettingsPanel", "ta/util/ActionRecord"], function(e, t, i, o) {
        "use strict";
        t(e.element).on("click", '.js_click[data-id="cookie-consent"]', function() {
            i()
        }), t(e.element).on("click", ".footer_link", function(e) {
            var i = t(this),
                n = "Footer_",
                r = i.data("trackAction");
            r && (i.is("a") && (e.preventDefault(), o.record(n + r).always(function() {
                window.location = i[0].href
            })), o.record(n + r))
        })
    })
});
require(["ta/prwidgets"], function(e) {
    var n = e.define.bind(e, "homepage_pos_picker", "handlers", ["handlers"]);
    n(["widget", "lib/jquery-amd", "ta/util/Cookie", "ta/util/ActionRecord"], function(e, n, i, t) {
        "use strict";

        function o(i) {
            var o = n(i).data("id"),
                r = n(e.element).find(".picker_dropdown").data("currentLocale");
            t.record("POS_PICKER_SELECT_POS_" + o + "_FROM_" + r).always(function() {
                window.location = i.href
            })
        }

        function r() {
            i.remove("TAPD", "/", window.domain)
        }
        var a = n(".fixed_header", n(e.element));
        n(e.element).before(a);
        var d = n(e.element).find(".pos_item.selected")[0];
        d && d.scrollIntoView(), n(e.element).on("click", ".pos_link", function(e) {
            e.preventDefault(), r(), o(this)
        })
    })
});
define("ta/util/Currency", ["vanillajs", "ta/util/Cookie", "common/trackingStreams", "ns-exporter"], function(r, n, t, e) {
    var o = {},
        a = "‏",
        i = "؜",
        u = " ",
        c = "‎";
    return o.formatCurrency = function(r, n, t, e) {
        var a = n ? n : "USD",
            i = window.currencySymbol[a],
            f = r;
        e || (f = o.formatThousands(Math.round(r)));
        var s = i[0],
            l = i[1],
            y = document.body.classList;
        return y.contains("lang_ar") ? o.isCurrencyAbbreviation(s) ? f + u + s + c : s + c + u + f : t ? l ? f + u + s : s + u + f : l ? f + s : s + f
    }, o.formatCurrencyRange = function(r, n, t, e) {
        var c, f = document.body.classList;
        return c = f.contains("lang_ar") ? u + "-" + i + u : ta.util.i18n.isRtl() ? u + "-" + a + u : u + "-" + u, e ? (r = o.formatCurrency(r, t, !0), n = o.formatCurrency(n, t, !0), r + c + n) : (r = o.formatCurrency(r, t), n = o.formatCurrency(n, t), r + c + n)
    }, o.isCurrencyAbbreviation = function(r) {
        return /^[a-zA-Z]+[^a-zA-Z0-9]?$/i.test(r)
    }, o.formatThousands = function(r) {
        if ("undefined" == typeof groupingSize || "undefined" == typeof groupingSeparator || groupingSize < 1) return r;
        for (var n = "", t = "" + r, e = 1; e <= t.length; e++) n = t.charAt(t.length - e) + n, e % groupingSize == 0 && e < t.length && (n = groupingSeparator + n);
        return n
    }, o.setCurrencyAndReload = function(r, e) {
        var o = "SetCurrency";
        n.write(o, r, 15e3), e = e ? e + "|" : "", t.trackEvent("CurrencyPicker", "Select", e + r), location.reload(!0)
    }, e.exportTo(o, "ta.util.currency"), o
});
require(["ta/prwidgets"], function(e) {
    var r = e.define.bind(e, "homepage_currency_picker", "handlers", ["handlers"]);
    r(["widget", "lib/jquery-amd", "ta/util/Currency"], function(e, r, n) {
        "use strict";

        function t(t) {
            var d = r(e.element).find(".picker_dropdown").data("currentCurrency");
            n.setCurrencyAndReload(t, d)
        }
        var d = r(".fixed_header", r(e.element));
        return r(e.element).before(d), {
            setCurrencyAndReload: t
        }
    })
});
require(["ta/p13n/placements"], function(e) {
    var n = e.define.bind(e, "global_footer", "handlers", ["handlers"]);
    n(["placement", "vanillajs", "utils/ajax"], function(e, n, t) {
        function i() {
            var n = window.location.pathname,
                t = n.indexOf("-"),
                i = n.length <= 1 ? "Home" : t > 0 ? n.substring(1, t) : n.substring(1);
            require(["trjs!ta/util/Element"], function(n) {
                ta.util.element.trackWhenScrolledIntoView("#" + e.id, [i, "in_view", "global_footer"])
            })
        }

        function a() {
            require(["trjs!common/PageDwell"], function(e) {
                e.init(window.pageServlet)
            })
        }
        return i(), e.params.dwell_tracking && a(), {
            getFullDisclaimerText: function(e) {
                t({
                    url: "/TAMGFooterAjax",
                    success: function(n) {
                        e.parentElement && (e.parentElement.innerHTML = n)
                    },
                    data: {
                        "a": "SHOW_FULL_DISCLAIMER"
                    },
                    evalScripts: !0,
                    method: "get"
                })
            }
        }
    })
});
define("common/Radio", ["babel/babel-helpers"], function(e) {
    var t = {},
        n = /\s+/,
        r = function() {
            function t(n) {
                e.classCallCheck(this, t), this.channel = n, this.events = {}, this.replies = {}
            }
            return e.createClass(t, [{
                key: "reply",
                value: function(e, t, r) {
                    var i = this;
                    return e.split(n).forEach(function(e) {
                        i.replies[e] || (i.replies[e] = []), i.replies[e].push({
                            callback: t,
                            context: r || i
                        })
                    }, this), this
                }
            }, {
                key: "request",
                value: function(e) {
                    if (!this.replies[e]) return null;
                    var t = this.replies[e];
                    t = t[t.length - 1];
                    for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                    return t.callback.apply(t.context, r)
                }
            }, {
                key: "requestMany",
                value: function(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    return this.replies[e] ? this.replies[e].map(function(e) {
                        return e.callback.apply(e.context, n)
                    }) : null
                }
            }, {
                key: "requestAll",
                value: function(t, n) {
                    for (var r = arguments.length, i = Array(r > 2 ? r - 2 : 0), u = 2; u < r; u++) i[u - 2] = arguments[u];
                    if (!this.replies[t]) return !0;
                    i = [n].concat(e.toConsumableArray(i));
                    var s = "function" == typeof n ? n : function(e) {
                        return e === n
                    };
                    return this.replies[t].reduce(function(e, t) {
                        return e && s(t.callback.apply(t.context, i))
                    }, !0)
                }
            }, {
                key: "requestAny",
                value: function(t, n) {
                    for (var r = arguments.length, i = Array(r > 2 ? r - 2 : 0), u = 2; u < r; u++) i[u - 2] = arguments[u];
                    if (!this.replies[t]) return !1;
                    i = [n].concat(e.toConsumableArray(i));
                    var s = "function" == typeof n ? n : function(e) {
                        return e === n
                    };
                    return this.replies[t].reduce(function(e, t) {
                        return e || s(t.callback.apply(t.context, i))
                    }, !1)
                }
            }, {
                key: "on",
                value: function(e, t, r) {
                    var i = this;
                    return e.split(n).forEach(function(e) {
                        i.events[e] || (i.events[e] = []), i.events[e].push({
                            callback: t,
                            context: r || i
                        })
                    }), this
                }
            }, {
                key: "once",
                value: function(e, t, r) {
                    var i = this;
                    return e.split(n).forEach(function(e) {
                        i.events[e] || (i.events[e] = []), i.events[e].push({
                            callback: t,
                            context: r || i,
                            single: !0
                        })
                    }), this
                }
            }, {
                key: "off",
                value: function(e, t) {
                    var r = this;
                    return e.split(n).forEach(function(e) {
                        r.events[e] && (r.events[e] = r.events[e].filter(function(e) {
                            return t && e.callback !== t
                        }))
                    }), this
                }
            }, {
                key: "trigger",
                value: function(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    if (this.events[e]) return this.events[e] = this.events[e].filter(function(e) {
                        return e.callback.apply(e.callback, n), !e.single
                    }), this
                }
            }, {
                key: "clear",
                value: function() {
                    return this.events = {}, this.replies = {}, this
                }
            }, {
                key: "requestEvery",
                get: function() {
                    return this.requestAll
                }
            }, {
                key: "requestSome",
                get: function() {
                    return this.requestAny
                }
            }, {
                key: "one",
                get: function() {
                    return this.once
                }
            }, {
                key: "emit",
                get: function() {
                    return this.trigger
                }
            }]), t
        }();
    return function(e) {
        return t[e] || (t[e] = new r(e))
    }
});
define("utils/throttle", [], function() {
    return function(t, n) {
        var e, r;
        return function() {
            r && (clearTimeout(r), r = 0);
            var i = e ? n - (Date.now() - e) : null;
            if (null !== i && i > 0) return void(r = setTimeout(t.apply.bind(t, this, arguments), i));
            var u = t.apply(this, arguments);
            return e = Date.now(), u
        }
    }
});
require(["ta/p13n/placements"], function(e) {
    var o = e.define.bind(e, "global_nav", "handlers", ["deferred/lateHandlers", "handlers"]);
    o(["placement", "lib/jquery-amd", "common/Radio", "ta/registration/RegEvents", "utils/throttle", "widget/components", "utils/asdf-encoder"], function(e, o, n, t, a, i, r) {
        "use strict";

        function s() {
            var e = o(window).scrollTop();
            if (b.length && w.is(":visible")) {
                var n = v.height() - e;
                e <= 0 && b.css({
                    "position": "absolute",
                    "top": 0
                }), n > 0 && (e > 0 && e <= 50 ? b.css({
                    "position": "absolute",
                    "top": e,
                    "bottom": "auto"
                }) : n <= 50 && b.css({
                    "position": "absolute",
                    "top": "auto",
                    "bottom": 0
                }))
            }
        }

        function l() {
            var e = o(".second-view", v),
                n = o(window).scrollTop();
            b.length && (y.css({
                "display": "block"
            }), e.length && w.is(":visible") && (n = p.height() - y.height(), window.scroll(0, n), b.css({
                "position": "absolute",
                "top": "auto",
                "bottom": 0
            })))
        }

        function c() {
            var e = o(".global-nav-persistent", v);
            e.length && e.toggleClass("fixed", o(window).scrollTop() > v.offset().top)
        }

        function d(e, o) {
            e.preventDefault();
            var n = o.getAttribute("data-ahref") ? r.asdf(o.getAttribute("data-ahref")).replace(/&amp;/g, "&") : "/";
            window.open(n, "_self")
        }
        var u = "TopNav",
            v = o("#" + e.id),
            f = n("global-nav"),
            g = null,
            h = null,
            p = o(".persistent-icons", v),
            b = o(".global-nav-icons", p),
            y = o(".global-nav-logo", p),
            m = o(".global-nav-logo-2018", v),
            w = o('[data-placement-name="global_nav_geopill"]', v),
            j = n("candy-bar-quick-links"),
            C = o(".global-nav-bottom", v),
            k = n("tripsearch-scroll-geo-pill");
        f.on("run-my-trips-test-3", function() {
            T(!1, !0)
        }), k.on("hide-on-header", function(e) {
            m && m.toggleClass("is-hidden-mobile", !e)
        });
        var _ = function(e) {
                window.userLoggedIn = !0;
                var t = 0 == v.find("[data-non-components]").length;
                if (t) {
                    var a = v.find(".components-nav-legacy-actions"),
                        r = o("<div>").html(e).find(".components-nav-legacy-actions").html();
                    a.html(r)
                } else {
                    var s = o("<div>").append(v.find(".global-nav-no-refresh"));
                    v.html(e), v.find(".global-nav-no-refresh").each(function(e, n) {
                        o(n).replaceWith(s.find("#" + n.getAttribute("id"))[0])
                    }), g && g.hide("replace-el")
                }
                v[0] && i.initComponentWidgets(v[0], "@ta/trips.trip-link"), n("inbox").trigger("setup_handler")
            }.bind(v),
            O = function() {
                return {
                    skipLocation: e.location_id <= 0,
                    returnTo: document.location.pathname + (document.location.search || "") + (document.location.hash || "")
                }
            };
        t.on("success", function() {
            e.requestAJAXPlacement(_, null, O())
        }), v.on("mouseenter", ".global-nav-links-container [data-element]", function(e) {
            var n = o(this),
                t = n.find("a").first();
            g && g.hide("new-overlay");
            var a = v.find(n.data("element")).clone();
            if (a.length) {
                var i = ["trjs!overlays/Overlay", "trjs!overlays/styles/flyout", "trjs!overlays/options/closeOnMouseAway", "trjs!overlays/position", "trjs!overlays/options/destroyOnHide"];
                require(i, function(i, r, s, l, c) {
                    var d = new i(n[0], new r(a[0], "global-nav-flyout global-nav-menu"), s, l.bottomRight([0, 1]), c);
                    d.domParent = v.find(".global-nav-overlays-container")[0], d.show(), t.attr("data-active-menu-trigger", !0), o(e.currentTarget).find(".ui_tab").addClass("hovering"), d.on("hide", function() {
                        t.removeAttr("data-active-menu-trigger"), o(e.currentTarget).find(".ui_tab").removeClass("hovering")
                    }), g = d
                })
            }
        }), v.on("mouseenter", ".subItem", function(e) {
            o(this).siblings(".expandSubItem").removeClass("active")
        }), v.on("mouseenter", ".expandSubItem", function(e) {
            var n = o(this);
            if (!n.hasClass("active")) {
                n.addClass("active"), n.siblings(".expandSubItem").removeClass("active");
                var t = n.find(".secondSubNav").clone(),
                    a = n.parents(".ui_overlay"),
                    i = ["trjs!overlays/Overlay", "trjs!overlays/styles/flyout", "trjs!overlays/options/closeOnMouseOut", "trjs!overlays/options/destroyOnHide"];
                require(i, function(e, o, i, r) {
                    var s = new e(n[0], new o(t[0]), i, r);
                    s.domParent = a[0], t.css("display", "block"), s.show()
                })
            }
        }), v.on("mouseenter", ".global-nav-links-ellipsis", function(e) {
            var n = o(this);
            g && g.hide("new-overlay");
            var t = v.find(".global-nav-links-container li"),
                a = t.filter(":hidden"),
                i = t.filter(function(e, n) {
                    return o(n).offset().top > t.offset().top
                }),
                r = o().add(a).add(i).clone(),
                s = v.find(".global-nav-links-menu-more").clone();
            s.prepend(r);
            var l = ["trjs!overlays/Overlay", "trjs!overlays/styles/flyout", "trjs!overlays/options/closeOnMouseAway", "trjs!overlays/position", "trjs!overlays/options/destroyOnHide"];
            require(l, function(e, o, t, a, i) {
                var r = new e(n[0], new o(s[0], "global-nav-flyout global-nav-menu"), t, a.bottomRight([0, 1]), i);
                r.domParent = v.find(".global-nav-overlays-container")[0], r.show(), n.find(".ui_tab").addClass("hovering"), r.on("hide", function() {
                    n.find(".ui_tab").removeClass("hovering")
                }), g = r
            })
        }), v.on("click", "#global-nav-HelpDesk", function(e) {
            e.preventDefault();
            var o = this,
                n = ["trjs!overlays/Overlay", "trjs!overlays/styles/modal", "trjs!overlays/options/closeOnEscape", "trjs!overlays/position", "trjs!overlays/options/closeOnDocClick", "trjs!overlays/options/ajax", "trcss!src/build/required/help_center_overlay"];
            require(n, function(e, n, t, a, i, r, s) {
                var l = new e(o, [n(null, "", "help_center"), t, a.cssCentered(), i, r("/uvpages/helpCenterOverlay.html")]);
                l.show(), f.emit("overlay-show")
            })
        }), v.on("click", ".masthead-saves", function(e) {
            h ? (g && g.hide("new-overlay"), h && h.destroy() && (h = null), require(["trjs!ta/Core/TA.Record"], function(e) {
                e.trackEventOnPage("TopNav", "mytrips_dropdown_cancel")
            })) : (T(!1, !1, e.currentTarget), o(e.currentTarget).find(".ui_icon").addClass("hovering"))
        });
        var T = function(e, n, t) {
            g && g.hide("new-overlay");
            var a = ["trjs!overlays/Overlay", "trjs!overlays/styles/flyout", "trjs!overlays/options/closeOnDocClick", "trjs!overlays/position", "trjs!overlays/options/destroyOnHide", "trjs!overlays/options/autoReposition", "trjs!ta/Core/TA.Record"];
            require(a, function(a, i, r, s, l, c, d) {
                var u = o(".masthead-saves"),
                    f = new a(u[0], new i("", "global-nav-flyout global-nav-utility trips-flyout-container"), r.withoutTouchEvents, u.data("nav-2018-enabled") ? s.bottomLeft([u.width() / 2 - 34, 9]) : s.bottomLeft([-20, -3]), l, c);
                f.domParent = v.find(".global-nav-overlays-container")[0], f.show(), v.find(".trips-flyout-container").addClass("hide-arrow"), g = f, require(["trdust!masthead-saves-dust", "trdust!styleguide-dust", "trjs!masthead-saves", "trcss!masthead-saves"], function(a, i, r) {
                    setTimeout(function() {
                        h = new window.MastheadSavesApp, h.start({
                            inCreateTripFlow: e,
                            runTest3: n
                        }), f.on("hide", function(e) {
                            h && h.destroy() && (h = null), d.trackEventOnPage("TopNav", "mytrips_dropdown_cancel"), t && o(t).find(".ui_icon").removeClass("hovering")
                        }), v.find(".trips-flyout-container").removeClass("hide-arrow")
                    }, 0)
                })
            })
        }.bind(v);
        v.on("click", ".global-nav-utility-activator", function(e) {
            var n = o(this),
                t = v.find(n.data("element")).clone();
            if (t.length) {
                if (g) {
                    if (g.sourceElement == this) return void(g.isOpen() ? g.hide("close") : g.show());
                    g.hide("new-overlay")
                }
                t = t.clone();
                var a = ["trjs!overlays/Overlay", "trjs!overlays/styles/flyout", "trjs!overlays/options/closeOnDocClick", "trjs!overlays/position", "trjs!overlays/options/autoReposition"];
                require(a, function(a, i, r, s, l) {
                    var c = new a(n[0], new i(t[0], "global-nav-flyout global-nav-utility"), r, n.data("nav-2018-enabled") ? s.bottomLeft([n.outerWidth() / 2 - 34, 12]) : s.bottomLeft([-20, -3]), l);
                    c.domParent = v.find(".global-nav-overlays-container")[0], c.show(), n.addClass("menu-open"), o(e.currentTarget).find(".ui_icon").addClass("hovering"), c.on("hide", function() {
                        n.removeClass("menu-open"), o(e.currentTarget).find(".ui_icon").removeClass("hovering")
                    }), g = c
                })
            }
        }), v.on("click", ".global-nav-logo", function() {
            require(["trjs!ta/Core/TA.Record"], function(e) {
                e.setEvtCookie("TopNav_" + window.pageServlet, "click", "TAlogo", 0, "/Home")
            })
        }), n("inbox").on("has_unread_conversations", function(e) {
            v.find(".global-nav-hamburger .ui_jewel.unread").removeClass("hidden"), v.find(".nav-sub-link.inbox .icon-and-jewel").removeClass("hidden")
        }), n("inbox").on("no_unread_conversations", function(e) {
            v.find(".global-nav-hamburger .ui_jewel.unread").addClass("hidden"), v.find(".nav-sub-link.inbox .icon-and-jewel").addClass("hidden")
        }), v.on("click", "a.login-button.mobile", function(e) {
            var n = "CORE_COMBINED",
                t = 40422,
                a = "login";
            o(this).hasClass("join-button") && (a = "join");
            var i = {
                    flow: n,
                    pid: t,
                    userRequestedForce: "true",
                    locationId: require("page-model").GEO_ID,
                    onSuccess: function(e) {
                        if (require("@ta/social.onboarding-state")) {
                            var o = e && (e.hasCreatedMember || !e.hasAcceptedTermsOfUse),
                                n = require("@ta/social.onboarding-state").ACTIONS.setShouldFire;
                            require("redux-init").dispatch(n(o, "MASTHEAD"))
                        }
                    }
                },
                r = {
                    extraQueryParams: {
                        flowOrigin: a
                    }
                };
            i = o.extend(i, r), require("ta/registration/RegOverlay").showForMobile(e, e.target, i), e.preventDefault()
        }), l();
        var q = a(c, 100);
        return o(window).scroll(function() {
            s(), q()
        }), j.on("border-top", function(e) {
            C.toggleClass("home_ui_tabs", e)
        }), v.on("click", "a.global-nav-link[data-tracking-label]", function(e) {
            var n = o(e.target).data("trackingLabel");
            require(["trjs!ta/Core/TA.Record"], function(o) {
                "HelpDesk" === n || "_blank" == e.target.target ? o.trackEventOnPage(u, "click", n) : o.setEvtCookie(u, "click", n, 0, e.target.href)
            })
        }), {
            checkForPersistentIcons: s,
            checkForPersistentGlobalNav: c,
            clickLogoLink: d
        }
    })
});
require(["ta/p13n/placements"], function(a) {
    var n = a.define.bind(a, "global_nav_action_cart", "handlers", ["handlers"]);
    n(["placement", "lib/jquery-amd"], function(a, n) {
        "use strict";
        var e = n("#" + a.id);
        e.on("click", "a.shopping-cart-link", function() {
            var a = n(this).data("tracking-label");
            require(["trjs!ta/Core/TA.Record"], function(n) {
                n.trackEventOnPage("TopNav_" + window.pageServlet, "click", a)
            })
        })
    })
});
define("ta/Core/TA.LocalStorage", ["vanillajs", "common/trackingStreams", "ns-exporter"], function(e, t, n) {
    "use strict";
    var r = !1,
        o = "taLsTest",
        i = "1",
        a = "TALocalStorageCurrentSessionId",
        u = !1,
        s = "session-",
        l = !1,
        c = [],
        f = [],
        v = [],
        g = function() {
            return !(!u && !l)
        },
        m = function(e) {
            return !!g() || (t.error(null, "Accessing localStorage session cookie before session logic intialized: " + e), !1)
        },
        S = function(e) {
            return d(e, "value")
        },
        y = function(e) {
            return d(e, "now")
        },
        d = function(e, t) {
            if (!t) return null;
            try {
                var n, o = JSON.parse(r.getItem(e) || "0");
                return o ? o.ttl && o.ttl + o.now < (new Date).getTime() ? (r.removeItem(e), null) : o.hasOwnProperty(t) ? (r.setItem("512", o[t]), n = r.getItem("512"), r.removeItem("512"), n) : null : null
            } catch (e) {}
            return null
        },
        h = function(e, t) {
            try {
                var n = JSON.parse(e || "0");
                return n && n.hasOwnProperty(t) ? n[t] : null
            } catch (e) {
                return null
            }
        },
        w = function(e) {
            try {
                var t = JSON.parse(r.getItem(e) || "0");
                return t ? t.ttl && t.ttl + t.now < (new Date).getTime() ? (r.removeItem(e), null) : t.value : null
            } catch (e) {}
            return null
        },
        I = function(e) {
            try {
                r.removeItem(e)
            } catch (e) {}
        },
        p = function(e, t) {
            var n = y(e);
            if (t && n && n < (new Date).getTime() - t) try {
                r.removeItem(e)
            } catch (e) {}
        },
        O = function(e) {
            try {
                var t = r.getItem(e);
                if (null !== t && void 0 !== t) return !0
            } catch (e) {}
            return !1
        },
        T = function(e, t, n) {
            try {
                r.setItem(e, JSON.stringify({
                    ttl: n || 0,
                    now: (new Date).getTime(),
                    value: t
                }))
            } catch (e) {}
        },
        k = function(e) {
            if (l = !0, !e) return t.error(null, "Attempting to initialize localStorage with invalid sesion key: " + e), !1;
            if (!V()) return !1;
            if (u = S(a), !u || u != e) {
                u = e, T(a, u);
                var n = S("latestPageServlet");
                n && T("sessionEntryServlet", n), E(), O(a) && require.defined("ta/Core/TA.Store") && require("ta/Core/TA.Store").store("isFirstSessionPageView", !0)
            }
            for (var r = 0; r < v.length; r++) v[r]();
            v = []
        },
        E = function() {
            try {
                var e = s + u,
                    t = new RegExp("^" + s);
                if (r.length)
                    for (var n = 0; n < r.length; n++) {
                        var o = r.key(n);
                        try {
                            t.test(o) && o != e && I(o)
                        } catch (e) {}
                    }
            } catch (e) {}
        },
        V = function() {
            try {
                if (r && r.setItem) {
                    r.setItem(o, i);
                    var e = r.getItem(o) != i;
                    return r.removeItem(o), e && (r = !1), !!r
                }
            } catch (e) {}
            return !1
        },
        N = function(e) {
            try {
                r.setItem("session-" + u, JSON.stringify(e))
            } catch (e) {}
        },
        b = function() {
            try {
                var e = r.getItem("session-" + u);
                if (e) return JSON.parse(e)
            } catch (e) {}
            return {}
        },
        A = function(e) {
            c.push(e)
        },
        C = function(e, t) {
            f[e] || (f[e] = []), f[e].push(t)
        },
        J = function(e) {
            "function" == typeof e && (g() ? e() : v.push(e))
        },
        L = {
            enabled: V(),
            get: S,
            getObject: w,
            set: T,
            remove: I,
            removeIfElapsed: p,
            has: O,
            getTimeStamp: y,
            updateSessionId: k,
            onSessionStorageChange: A,
            onValueChange: C,
            canUseSession: g,
            onLocalStorageSessionInit: J,
            getSessionKey: function(e) {
                if (!m(e)) return null;
                var t = b();
                return t ? t[e] : null
            },
            setSessionKey: function(e, t) {
                if (m(e)) {
                    var n = b();
                    n || (n = {}), n[e] = t, N(n)
                }
            },
            removeSessionKey: function(e) {
                if (m(e)) {
                    var t = b();
                    t && (delete t[e], N(t))
                }
            },
            hasSessionKey: function(e) {
                if (!m(e)) return !1;
                var t = b();
                if (t) {
                    var n = t[e];
                    if (null !== n && void 0 !== n) return !0
                }
                return !1
            },
            setStorage: function(e) {
                r = e, L.enabled = V()
            }
        };
    if ("undefined" != typeof window) {
        var j = !1;
        try {
            j = window.localStorage
        } catch (e) {}
        L.setStorage(j),
            function() {
                function e(e) {
                    if (e = e || window.event, !u || e.key && e.key !== "session-" + u) e.key && f[e.key] && (e.oldValueObj = e.oldValue && h(e.oldValue, "value"), e.newValueObj = e.newValue && h(e.newValue, "value"), f[e.key].forEach(function(t) {
                        t(e)
                    }));
                    else
                        for (var t = 0, n = c.length; t < n; t++) c[t](e)
                }
                window.addEventListener ? window.addEventListener("storage", e, !1) : window.attachEvent && window.attachEvent("onstorage", e)
            }()
    }
    return n.createNs(L, "ta", "localStorage"), L
});
define("ta/support/Qualtrics", ["vanillajs", "ns-exporter", "page-model", "ta/Core/TA.LocalStorage"], function(e, t, n, s) {
    "use strict";
    var i = {},
        r = function(e, t, n, s) {
            this.get = function(e) {
                for (var e = e + "=", t = document.cookie.split(";"), n = 0, s = t.length; n < s; n++) {
                    for (var i = t[n];
                        " " == i.charAt(0);) i = i.substring(1, i.length);
                    if (0 == i.indexOf(e)) return i.substring(e.length, i.length)
                }
                return null
            }, this.set = function(e, t) {
                var n = "",
                    n = new Date;
                n.setTime(n.getTime() + 6048e5), n = "; expires=" + n.toGMTString(), document.cookie = e + "=" + t + n + "; path=/; "
            }, this.check = function() {
                var s = this.get(n);
                if (s) s = s.split(":");
                else {
                    if (100 == e) return !0;
                    "v" == t && (e = Math.random() >= e / 100 ? 0 : 100), s = [t, e, 0], this.set(n, s.join(":"))
                }
                var i = s[1];
                if (100 == i) return !0;
                switch (s[0]) {
                    case "v":
                        return !1;
                    case "r":
                        return i = s[2] % Math.floor(100 / i), s[2]++, this.set(n, s.join(":")), !i
                }
                return !0
            }, this.go = function() {
                if (this.check()) {
                    var e = document.createElement("script");
                    e.type = "text/javascript", e.src = s + "&t=" + (new Date).getTime(), document.body && document.body.appendChild(e)
                }
            }, this.start = function() {
                var e = this;
                e.go()
            }
        };
    i.displaySurvey = function(e) {
        var t = n.session.uid,
            s = "QSI_S_" + e,
            i = "//znbkpczkrl5wwqzj3-tripadvisor.siteintercept.qualtrics.com/WRSiteInterceptEngine/?Q_SIID=" + e + "&UID=" + t + "&Q_LOC=" + encodeURIComponent(window.location.href);
        try {
            new r(100, "r", s, i).start()
        } catch (e) {}
        j(!0)
    };
    var a = 2592e6,
        u = 6048e5,
        o = !1,
        c = !1,
        l = 4,
        g = 3,
        p = 2,
        f = Math.round(10 * Math.random()) % 2,
        d = !1,
        v = function() {
            return s.get("qualtrics-debug")
        },
        h = function() {
            return Number(s.get("qualtrics-session-count") || 0)
        },
        q = function() {
            return !!s.getSessionKey("qualtrics-session-count-incremented")
        },
        S = function() {
            var e = h(),
                t = s.getSessionKey("qualtrics-session-count-incremented");
            t || (s.set("qualtrics-session-count", e + 1, u), s.setSessionKey("qualtrics-session-count-incremented", !0))
        },
        m = function(e) {
            s.setSessionKey("qualtrics-ignored", e)
        },
        y = function() {
            return !!s.getSessionKey("qualtrics-ignored")
        },
        w = function(e) {
            s.set("qualtrics-responded", e, a)
        },
        I = function() {
            return !!s.get("qualtrics-responded")
        },
        b = function() {
            return Number(s.getSessionKey("qualtrics-page-views") || 0)
        },
        D = function() {
            return Number(s.getSessionKey("qualtrics-intercept-views") || 0)
        },
        K = function() {
            var e = D();
            s.setSessionKey("qualtrics-intercept-views", ++e), 4 === e && m(!0)
        },
        T = function() {
            return Number(s.getSessionKey("qualtrics-intercept-reqs") || 0)
        },
        N = function() {
            var e = T();
            s.setSessionKey("qualtrics-intercept-reqs", e + 1)
        },
        k = function() {
            return d
        },
        C = function(e) {
            d = e
        },
        R = function() {
            var e = !1,
                t = k();
            if (t) {
                var n = I() || y(),
                    s = h(),
                    i = q(),
                    r = b(),
                    a = D();
                !n && (s < g || s == g && i) && a < l && (r === p || r > p && 0 === f) && (e = !0)
            }
            return e
        };
    i.isDebug = v, i.setResponded = w, i.hasResponded = I, i.getPageViews = b, i.getSmartSurvey = k, i.setSmartSurvey = C, i.updateInterceptViews = K, i.canDisplaySmart = R, i.getSessionCount = h, i.updateSessionCount = S, i.getInterceptViews = D, i.updateInterceptReqs = N, i.getInterceptReqs = T;
    var j = function(e) {
            e ? (s.set("qualtrics-last-seen", Date.now()), o = !0) : s.remove("qualtrics-last-seen")
        },
        x = function() {
            var e = parseFloat(s.get("qualtrics-last-seen")),
                t = isNaN(e) ? 0 : e,
                n = t < 0 ? 0 : t + a;
            return Date.now() < n
        },
        L = function() {
            return o
        },
        M = function() {
            var e = Number(s.get("qualtrics-page-views"));
            return 2 === e && !i.hasShownInLastThirtyDays() || 1 === e && !c && !i.hasShownInLastThirtyDays()
        },
        V = function() {
            if (k() && (h() < g || h() == g && q()) && !I() && !y()) {
                var e = b();
                s.setSessionKey("qualtrics-page-views", e + 1)
            }
            var t = s.get("qualtrics-session-id"),
                i = n.session.sessionId;
            if (t && t === i) {
                var e = Number(s.get("qualtrics-page-views")) + 1;
                s.set("qualtrics-page-views", e)
            } else s.set("qualtrics-session-id", i), s.set("qualtrics-page-views", 1);
            c = !0
        };
    return i.hasShownInLastThirtyDays = x, i.seenThisPageView = L, i.canDisplay = M, i.updatePageViews = V, t.exportTo(i, "ta.support.qualtrics"), i
});
define("ta/util/CommonMessagingUtil", ["lib/jquery-amd", "ta/Core/TA.LocalStorage", "ta/support/Qualtrics", "ta/util/SessionStorage", "ta/Core/TA.Event"], function(e, t, n, a, i) {
    "use strict";

    function r(e) {
        if (t.enabled) {
            var n = t.get(e + D);
            return n ? parseInt(n) : 0
        }
        return null
    }

    function s(e) {
        if (t.enabled && e) {
            var n = e + D;
            t.set(n, r(e) + 1)
        }
    }

    function o(e) {
        if (t.enabled) {
            var n = t.get(e + y);
            return n ? parseInt(n) : 0
        }
        return 0
    }

    function u(e) {
        if (t.enabled && e) {
            var n = e + y;
            t.set(n, o(e) + 1)
        }
    }

    function l(e) {
        if (t.enabled) {
            var n = t.get(e + p);
            return !!n
        }
        return !1
    }

    function c(e) {
        t.enabled && e && t.set(e + p, "true")
    }

    function d(e) {
        var n = (new Date).getDate();
        if (t.enabled && e) {
            var a = e + S;
            t.set(a, n.toString())
        }
    }

    function f(e) {
        var n = (new Date).getDate();
        if (t.enabled && e) {
            var a = e + S,
                i = t.get(a);
            return !!i && i === n.toString()
        }
        return !1
    }

    function m(e) {
        var n = (new Date).getDate();
        t.enabled && t.set(e, n.toString())
    }

    function g(e) {
        var n = (new Date).getDate();
        if (t.enabled) {
            var a = t.get(e);
            return !!a && a === n.toString()
        }
    }

    function b(e, t, r) {
        e && "function" == typeof e && e() && (n.seenThisPageView() || n.canDisplaySmart() || n.canDisplay()) || t && "function" == typeof t && t() || r && "function" == typeof r && (document.getElementById("FIXED_AD") ? a.canUseSessionStore() && a.getObject("ads.fixed.close") ? r() : i.on("ad_div_collapsed", function() {
            r()
        }) : r())
    }

    function v(e) {
        return e.toLowerCase().replace("mobile", "")
    }
    var D = "_view_count",
        p = "_is_disabled",
        y = "_times_dismissed",
        S = "_disabled_for_day";
    return {
        getCurrentPageViews: r,
        incrementPageViews: s,
        getNumberOfTimesDismissed: o,
        incrementNumberOfTimesDismissed: u,
        isPlacementDisabled: l,
        disablePlacement: c,
        setPlacementDisabledForToday: d,
        isPlacementDisabledForToday: f,
        setPlacementGroupKey: m,
        checkPlacementGroupKey: g,
        parseServletName: v,
        displayPlacementIfNoSurveyNorAdIsPresent: b
    }
});
require(["ta/p13n/placements"], function(e) {
    var n = e.define.bind(e, "global_nav_action_inbox", "handlers", ["handlers"]);
    n(["placement", "vanillajs", "lib/jquery-amd", "common/Radio", "ta/Core/TA.Record", "ta/util/CommonMessagingUtil"], function(e, n, o, i, t, a) {
        function s(e) {
            if (e.receivedCallback && e.receivedCallback(), o(".inbox-flyout-container").length && g) g.destroy();
            else {
                var n = e.el,
                    i = e.bottomLeftOffset;
                l(void 0, n, i)
            }
        }

        function r(e) {
            l(e, o(".masthead-inbox-icon")[0])
        }

        function l(n, i, a) {
            var s = o("#" + e.id),
                r = ["trjs!overlays/Overlay", "trjs!overlays/styles/flyout", "trjs!overlays/options/closeOnDocClick", "trjs!overlays/position", "trjs!overlays/options/destroyOnHide", "trjs!overlays/options/autoReposition", "ta/registration/RegOverlay", "trjs!unifiedinbox/inbox-lander", "trcss!unified_inbox_lander"];
            require(r, function(e, r, l, c, d, v, _, b, f) {
                var w = o(".inbox-nav-contents", s).clone()[0];
                if (w.classList.remove("hidden"), o(".login-cta", w).length) {
                    var p = o(".login-cta span", w);
                    p.click(function() {
                        n && m && (h = !0, t.trackEventOnPage("reg_trigger", "mgp_click_login", "Inbox Jewel Notification Log In Click | Nav | mgp_drs_mem", u)), g.destroy(), _.show({
                            type: "dummy"
                        }, null, {
                            flow: "CORE_COMBINED",
                            pid: 40472,
                            userRequestedForce: !0,
                            onSuccess: function() {
                                o(".login-cta", s).remove(), o(".inbox-nav-dropdown", s).removeClass("with-login-cta")
                            }.bind(this)
                        })
                    })
                } else
                    for (var x, j = o(".js-inbox-lander-thread-list-item.loading", w), y = o(".inbox-masthead-wrapper", w), C = 0; C < 10; ++C) x = j.clone(), x.removeClass("hidden"), y.append(x);
                var k = a;
                k || (k = o(i).data("nav-2018-enabled") ? [o(i).width() / 2 - 34, 7] : [-20, -3]), g = new e(i, new r(w, "inbox-flyout-container"), l.withoutTouchEvents, c.bottomLeft(k), d, v), g.show(), n && !n.hasClass("hidden") && g.on("hide", function() {
                    h || t.trackEventOnPage("reg_trigger", "mgp_close", "Inbox Jewel Notification | Nav | mgp_drs_mem", u), h = !1, m = !1
                }), o(".login-cta", s).length || b.loadMastheadDropdown()
            })
        }

        function c(e, n) {
            if (n)
                if (n.hasClass("is-control")) t.trackEventOnPage("reg_trigger", "mgp_view_control", "Inbox Jewel Notification Control| Nav | mgp_drs_mem");
                else {
                    var i = a.getCurrentPageViews(_);
                    i >= b && a.disablePlacement(_), a.isPlacementDisabledForToday(_) || a.isPlacementDisabled(_) || !n.hasClass("valid-for-test") || (o(".inbox-jewel-test", e).removeClass("hidden"), t.trackEventOnPage("reg_trigger", "mgp_view", "Inbox Jewel Notification | Nav | mgp_drs_mem", u))
                }
        }

        function d() {
            var n = o("#" + e.id),
                s = o(".inbox-jewel-test", n);
            c(n, s), o(".masthead-inbox-icon, .ui_jewel", n).click(function(e) {
                e.stopPropagation(), s && !s.hasClass("hidden") ? (t.trackEventOnPage("reg_trigger", "mgp_click", "Inbox Jewel Notification | Nav | mgp_drs_mem", u), a.setPlacementDisabledForToday(_), a.incrementPageViews(_), m = !0, t.trackEventOnPage("Inbox|Dropdown", "icon_jewel_click", "no_unread", v)) : o(".ui_jewel", n).length && o(".ui_jewel", n).hasClass("hidden") ? t.trackEventOnPage("Inbox|Dropdown", "icon_jewel_click", "no_unread", v) : o(".ui_jewel", n).length && t.trackEventOnPage("Inbox|Dropdown", "icon_jewel_click", "has_unread", v), o(".masthead-inbox-icon", n).attr("data-on-inbox") ? window.location = "/Inbox" : o(".inbox-flyout-container").length && g ? g.destroy() : r(s)
            }), i("inbox").on("thread_clicked", function(e) {
                g && g.destroy()
            }), i("inbox").on("has_unread_conversations", function(e) {
                var i = o(".ui_jewel", n);
                "undefined" !== i && i.length > 0 && i.each(function(e, n) {
                    o(n).hasClass("inbox-jewel-test") || o(n).removeClass("hidden")
                })
            }), i("inbox").on("no_unread_conversations", function(e) {
                var i = o(".ui_jewel", n);
                "undefined" !== i && i.length > 0 && i.each(function(e, n) {
                    o(n).hasClass("inbox-jewel-test") || o(n).addClass("hidden")
                })
            }), i("inbox").on("setup_handler", function() {
                d()
            })
        }
        var g, v = 40186,
            u = 40405,
            _ = "Membership_Inbox_Jewel_Test",
            b = 3,
            m = !1,
            h = !1;
        return i("global-nav-inbox").on("open", function(e, n) {
            s(e, n)
        }), d(), {}
    })
});
require(["ta/p13n/placements"], function(e) {
    var t = e.define.bind(e, "global_nav_action_profile", "handlers", ["handlers"]);
    t(["placement", "lib/jquery-amd", "page-model"], function(e, t, a) {
        "use strict";

        function r() {
            var e = t(".button_container").data("pageProperty1"),
                a = t(".button_container").data("pageProperty2"),
                r = t(".button_container").data("pageProperty3"),
                n = t(".button_container").data("pageProperty4");
            (e && "" !== e || a && "" !== a || r && "" !== r || n && "" !== n) && require("ta/Core/TA.Record").trackEventOnPage(e, a, r, n)
        }

        function n(e) {
            if (c.hasClass("core-login-button")) {
                var t = c.data("isControl"),
                    a = c.data("trackingPid"),
                    r = c.data("joinAttr"),
                    n = "reg_trigger",
                    o = "mgp_";
                t && r && "view" === e && (o = "mgp_view_control", require("ta/Core/TA.Record").trackEventOnPage(n, o, r)), !t && r && a && require("ta/Core/TA.Record").trackEventOnPage(n, o + e, r, a)
            }
        }
        var o = t("#" + e.id),
            i = null,
            c = t(".join-copy-tracking");
        n("view"), o.on("click", "a.login-button", function(e) {
            i && i.hide("replace-el");
            var a = t(".core-login-button").data("flowName"),
                o = t(".core-login-button").data("pid"),
                c = "login";
            t(this).hasClass("core-login-button") && (c = "join", t(this).hasClass("join-copy-tracking") && n("click"));
            var l = {
                    flow: a,
                    pid: o,
                    userRequestedForce: "true",
                    locationId: require("page-model").GEO_ID,
                    onSuccess: function(e) {
                        if (require("@ta/social.onboarding-state")) {
                            var t = e && (e.hasCreatedMember || !e.hasAcceptedTermsOfUse),
                                a = require("@ta/social.onboarding-state").ACTIONS.setShouldFire;
                            require("redux-init").dispatch(a(t, "MASTHEAD"))
                        }
                    }
                },
                d = {
                    extraQueryParams: {
                        flowOrigin: c
                    }
                };
            l = t.extend(l, d), require("ta/registration/RegOverlay").show(e, e.target, l), e.preventDefault(), r()
        });
        var l = function(e, a) {
            var r = t(e).data("trackingLabel");
            require(["trjs!ta/Core/TA.Record"], function(t) {
                /\/#\s*$/.test(e.href) || "_blank" == e.target ? t.trackEventOnPage(a, "click", r) : t.setEvtCookie(a, "click", r, 0, e.href)
            })
        };
        o.on("click", ".global-nav-profile-menu a.subLink[data-tracking-label], .sidebar-nav-profile a.subLink[data-tracking-label]", function() {
            l(this, "UtilityNav")
        }), o.on("click", "[data-track-profile-dropdown-open]", function() {
            var e = require("page-model").session.loggedIn ? "Signed_in_profile_dropdown" : "Signed_out_profile_dropdown";
            require(["trjs!ta/Core/TA.Record"], function(t) {
                t.trackEventOnPage("UtilityNav", "open", e)
            })
        })
    })
});
require(["ta/p13n/placements"], function(e) {
    var t = e.define.bind(e, "global_nav_action_trips", "handlers", ["handlers"]);
    t(["placement", "lib/jquery-amd", "api-mod", "page-model", "common/Radio", "ta/Core/TA.Record", "ta/Core/TA.LocalStorage"], function(e, t, n, o, a, i, l) {
        "use strict";
        var r = t('[data-placement-name="global_nav_menus"]'),
            s = a("global-nav"),
            d = null,
            u = {},
            c = t("#" + e.id),
            y = (c.find(".my-trips-dropdown-test"), c.find(".my-trips-dropdown-control"), c.find(".quick-save-test")),
            f = "my-trips-dropdown-test-overlay",
            p = "my_trips_educational_flyout",
            v = require("page-model").JS_SECURITY_TOKEN,
            m = require("page-model").session.pageServlet,
            g = function(e) {
                t.ajax({
                    type: "GET",
                    url: "/data/1.0/trips/item",
                    data: {
                        limit: 2
                    },
                    beforeSend: function(e) {
                        e.setRequestHeader("X-Requested-By", v)
                    },
                    success: e
                })
            },
            h = function(e) {
                return (new Date).getTime() - e < 2592e6
            },
            _ = function(n) {
                var o = ["overlays/position", "overlays/styles/flyout", "overlays/options/destroyOnHide", "overlays/options/autoReposition", "overlays/options/fade"],
                    a = function(e, t, o, a, i) {
                        return [new t(n[0], "global-nav-flyout global-nav-utility my-trips-dropdown-test-flyout"), e.bottomLeft([-20, -3]), o, a, i(i.SHORT, !0, !0)]
                    };
                n.on("click", ".ui_close_x", function() {
                    s.trigger("hide-overlays", f)
                }), s.trigger("show-overlay", f, t("#" + e.id).find(".masthead-saves")[0], o, null, a)
            },
            w = function() {
                return t.find(".ui_notification_container").length || t.find(".ui_overlay").length || t.find("#qual_ol").length
            },
            b = function() {
                setTimeout(function() {
                    !w() && y.length > 0 && l.has(p) && !l.getObject(p) && 0 == n.scrollTop() && (_(y), l.set(p, !0), i.trackEventOnPage(p, "flyout_shown", m, 0, !1))
                }, 1e3)
            };
        s.on("hide-overlays", function(e) {
            e ? u[e] && u[e].hide("hide-overlay") && (u[e] = null) : d && d.hide("replace-el")
        }), s.on("show-overlay", function(e, t, n, o, a) {
            d && d.hide("new-overlay");
            var i = ["trjs!overlays/Overlay"].concat(n);
            require(i, function(n) {
                var i = a.apply(null, [].slice.apply(arguments, 1)),
                    l = new n(t, i);
                l.domParent = r.find(".global-nav-overlays-container")[0], l.show(), o && o(l), d = l, e && (u[e] = l)
            })
        }), s.on("run-quick-save-test", function() {
            l.has(p) || g(function(e) {
                e.data && (e.data.length <= 1 || !h(e.data[1].date)) && (l.set(p, !1), b())
            })
        }), l.enabled && ("complete" === document.readyState ? b() : t(window).ready(b))
    })
});
require(["ta/p13n/placements"], function(e) {
    var n = e.define.bind(e, "global_nav_geopill", "handlers", ["deferred/GeoSearch", "handlers"]);
    n([], function() {})
});
require(["ta/p13n/placements"], function(e) {
    var n = e.define.bind(e, "global_nav_links", "handlers", ["handlers"]);
    n(["utils/asdf-encoder"], function(e) {
        function n(n, a) {
            window.open(e.asdf(a.getAttribute("data-ahref")).replace(/&amp;/g, "&"), "_self")
        }
        return {
            clickAboutGeoLink: n
        }
    })
});
require(["ta/p13n/placements"], function(e) {
    var r = e.define.bind(e, "masthead_search", "handlers", ["deferred/lateHandlers", "handlers"]);
    r(["placement", "ta/Core/TA.Store", "common/Radio"], function(e, r, a) {
        function n() {
            if (e.params && "typeahead_to_store" in e.params) {
                var a = e.params.typeahead_to_store;
                if (a)
                    for (var n in a) a.hasOwnProperty(n) && r.store(n, a[n])
            }
        }
        n();
        var t = r.retrieve("typeahead_dual_search_options");
        return e.require(["trjs!deferred/lateHandlers"], function(e) {
            a("masthead_search").on("open", function() {
                e.showSearchOverlay()
            })
        }), {
            getOptions: function() {
                return t
            }
        }
    })
});
define("overlays/styles/flyout", ["vanillajs", "api-mod"], function(t, e) {
    "use strict";

    function n(t) {
        this.container = e.createElement("div", {
            "class": "ui_overlay ui_flyout" + (t ? " " + t : "")
        }), this.contentElement = this.container
    }
    var i = function(t, e) {
        return function() {
            n.call(this, e || this.sourceElement.getAttribute("data-flyout") || ""), this.updateContent(t)
        }
    };
    return i
});
define("overlays/options/matchWidth", ["vanillajs", "api-mod"], function(t, i) {
    "use strict";
    var n = function(t) {
        function n() {
            this.container && t && (i.setStyle(this.container, "width", i.getSize(t).x + "px"), this.emit("positionDirty"))
        }
        return function() {
            this.on("show", i.bind(n, this))
        }
    };
    return n
});
define("overlays/options/repositionOnEvent", ["vanillajs", "api-mod"], function(n, i) {
    "use strict";

    function t() {
        this.emit("positionDirty")
    }
    return function(n, o) {
        return function() {
            var e = o.splice ? o : [o],
                c = i.bind(t, this);
            this.on("show", function() {
                e.forEach(function(t) {
                    i.addEvent(n, t, c)
                })
            }).on("hide", function() {
                e.forEach(function(t) {
                    i.removeEvent(n, t, c)
                })
            })
        }
    }
});
define("overlays/options/autoReposition", ["vanillajs", "overlays/options/repositionOnEvent"], function(o, n) {
    return n(window, ["resize", "scroll"])
});
define("overlays/options/fade", ["lib/jquery-amd"], function(t) {
    "use strict";

    function i(i) {
        t(this.container).addClass(i), t(this.shade).addClass(i)
    }

    function n(i) {
        t(this.container).removeClass(i), t(this.shade).removeClass(i)
    }
    var l = function() {},
        s = "fade_in",
        a = "fade_out",
        o = [function(t) {
            i.call(this, t.cl)
        }, function(t) {
            i.call(this, s)
        }, l, function(t) {
            n.call(this, s)
        }, l],
        c = [l, function(t) {
            i.call(this, t.cl), i.call(this, s)
        }, function(t) {
            n.call(this, t.cl), n.call(this, s)
        }, l, l],
        e = [l, l, l, function(t) {
            i.call(this, t.out), i.call(this, a)
        }, function(t) {
            n.call(this, t.out), n.call(this, a)
        }],
        h = function(t, i, n) {
            return function() {
                if (t) {
                    i = i !== !1, n = n !== !1;
                    var l = this.show,
                        s = this.hide,
                        a = i && n ? o : i ? c : e;
                    a[0].call(this, t), i && (this.show = function() {
                        var i = arguments;
                        l && l.apply(this, i), a[1].call(this, t), setTimeout(function() {
                            a[2].call(this, t)
                        }.bind(this), t.len)
                    }.bind(this)), n && (this.hide = function() {
                        var i = arguments;
                        a[3].call(this, t), setTimeout(function() {
                            a[4].call(this, t), s && s.apply(this, i)
                        }.bind(this), t.len)
                    }.bind(this))
                }
            }
        };
    return h.NONE = {
        cl: "fade_none",
        out: "fade_out_none",
        len: 0
    }, h.SHORT = {
        cl: "fade_short",
        out: "fade_out_short",
        len: 250
    }, h.NORMAL = {
        cl: "fade_normal",
        out: "fade_out_normal",
        len: 500
    }, h.LONG = {
        cl: "fade_long",
        out: "fade_out_long",
        len: 1e3
    }, h
});
define("overlays/options/closeOnScroll", ["vanillajs", "api-mod"], function(n, o) {
    "use strict";
    var i = function() {
        this.on("show", function() {
            o.addEvent(window, "scroll", this.hide)
        }).on("hide", function() {
            o.removeEvent(window, "scroll", this.hide)
        })
    };
    return i
});
define("overlays/options/centerArrowOnSrcElement", ["vanillajs", "api-mod"], function(t, i) {
    "use strict";
    var o = function(t) {
        function o() {
            if (t = t || this.sourceElement, this.container && t && this.arrow) {
                var o = i.getCoords(this.container),
                    r = i.getCoords(t),
                    n = i.hasClass(this.container, "arrow_top") || i.hasClass(this.container, "arrow_bottom");
                if (n) {
                    var s = r.left + r.width / 2,
                        e = i.getSize(this.arrow).x / 2,
                        a = Math.max(e, Math.min(o.width - e, s - o.left));
                    i.setStyle(this.arrow, {
                        "left": a + "px",
                        "right": "auto",
                        "margin": "0 0 0 -" + e + "px"
                    })
                } else {
                    var s = r.top + r.height / 2,
                        e = i.getSize(this.arrow).y / 2,
                        h = Math.max(e, Math.min(o.height - e, s - o.top));
                    i.setStyle(this.arrow, {
                        "top": h + "px",
                        "bottom": "auto",
                        "margin": "-" + e + "px 0 0 0"
                    })
                }
            }
        }
        return function() {
            this.on("show", i.bind(o, this)), this.on("positionDirty", i.bind(o, this)), this.on("repositionArrow", i.bind(o, this))
        }
    };
    return o
});
define("overlays/options/repositionOnTaEvent", ["vanillajs", "ta/Core/TA.Event"], function(n, i) {
    "use strict";
    return function(n) {
        return function() {
            var t = this.emit.bind(this, "positionDirty");
            this.on("show", function() {
                i.on(n, t)
            }).on("hide", function() {
                i.off(n, t)
            })
        }
    }
});
require(["ta/p13n/placements"], function(e) {
    var o = e.define.bind(e, "brand_login_callout", "handlers", ["handlers"]);
    o(["placement", "lib/jquery-amd", "ta/Core/TA.Record", "ta/Core/TA.Event", "ta/Core/TA.LocalStorage", "overlays/Overlay", "overlays/styles/flyout", "overlays/position", "overlays/options/matchWidth", "overlays/options/closeOnDocClick", "overlays/options/autoReposition", "overlays/options/fade", "overlays/options/closeOnScroll", "overlays/options/centerArrowOnSrcElement", "page-model", "overlays/options/repositionOnTaEvent"], function(e, o, n, t, a, r, i, l, s, c, d, u, v, p, g, f) {
        "use strict";
        var y, _ = o(".core-login-button", ".global-nav-profile"),
            m = o(".brand-login-test"),
            b = o(".brand-text", m),
            h = o("#brandLoginContainer"),
            w = g.session.pageServlet,
            O = g.GEO_ID,
            C = function() {
                return o(".ui_notification_container").length || o(".ui_overlay").length
            },
            k = function() {
                m.on("click", ".ui_close_x", function() {
                    y && y.destroy() && (y = null)
                }), y = new r(_.parent()[0], new i(m[0], "brand-callout ui_popover"), l.bottomLeft([-10, 1]), d, p(_), c, s, v, f("showingCookieConsentBanner"), u(u.LONG, !1, !0)), y.show(), o("#brandLoginPopover").removeClass("hidden")
            },
            E = function(e, o) {
                if (!require("page-model").session.loggedIn) return e && k(), a.set(o, !0), void n.trackEventOnPage(o, "view", "servletname_" + w)
            },
            S = function() {
                if (!C()) {
                    var e = h.attr("data-tracking-property") || "",
                        o = m.length > 0;
                    a.has(e) || E(o, e)
                }
            },
            A = function(e) {
                y && y.destroy() && (y = null), n.trackEventOnPage("pcb_campaign_callout_login", "click", "servletname_" + w, 0, window.location.href), require("ta/registration/RegOverlay").show(e, e.target, {
                    flow: "BRAND_SIGNUP_CORE_COMBINED",
                    pid: 40197,
                    locationId: O
                }), e.preventDefault()
            };
        o(document).on("regUpdateMember", function() {
            h.length > 0 && n.setEvtCookie("pcb_campaign_callout_Success", "view", "servletname_" + w, 0, window.location.href)
        }), b.on("click", function(e) {
            A(e)
        }), a.enabled && ("complete" === document.readyState ? S() : o(window).ready(S()))
    })
});
require(["ta/rollupAmdShim"], function(a) {
    a.install(["amdloaders", "remoteModule"], [])
});
if (window.requirejs && requirejs.taConfig) {
    requirejs.taConfig({
        deferred: {},
        name: "core-amd",
        files: {
            "js-amd": {
                src: {
                    amdloaders: 1,
                    remoteModule: 1
                }
            }
        },
        _: {
            baseUrl: "/"
        }
    })
};
define("remoteModule", ["vanillajs"], function() {
    "use strict";

    function t(t, e) {
        return null == t ? null : t.getAttribute("data-" + e)
    }

    function e(t, e) {
        for (; t && t !== document.body;) {
            if (t.getAttribute(e)) return t;
            t = t.parentNode
        }
        return null
    }

    function r(e, r, n, i, u) {
        var a = t(e, r);
        return a ? a.replace(/\$plc:/g, "$prp/" + n + "/").replace(/\$prw:/g, "$prw/" + i + "/").split(",").filter(function(t) {
            return !!t.length
        }).reduce(function(t, e) {
            return t.concat(u.map(function(t) {
                var r = "trdust!" === t && e.indexOf("/") < 0;
                return t + e + (r ? "-dust" : "")
            }))
        }, []) : []
    }
    var n = {};
    return function(i, u) {
        var a = [].slice.call(arguments),
            l = (t(u, "load-init") || t(u, "load-js")).split("."),
            s = l.shift(),
            d = l.shift();
        if (!(n[s] && n[s].indexOf(u) >= 0)) {
            if (require.defined(s)) {
                var c = require(s);
                return void(d ? c[d] : c).apply(c, a)
            }(n[s] || (n[s] = [])).push(u);
            var f = e(u, "data-placement-name"),
                p = e(u, "data-prwidget-name"),
                o = t(f, "placement-name"),
                h = t(p, "prwidget-name"),
                m = [].concat(r(u, "load-all", o, h, ["trjs!", "trcss!", "trdust!"]), r(u, "load-js", o, h, ["trjs!"]), r(u, "load-css", o, h, ["trcss!"]), r(u, "load-dust", o, h, ["trdust!"]));
            /^\$plc:/.test(s) ? (a.unshift(m), a.unshift(s.substr(5) + "." + d), a.unshift(f.getAttribute("id")), a.unshift("evCall"), a.unshift("ta/p13n/placements"), requireCallLast.apply(window, a)) : /^\$prw:/.test(s) ? (a.unshift(s.substr(5) + "." + d), a.unshift("call"), a.unshift("ta/prwidgets"), requireCallLast.apply(window, a)) : require(m, function() {
                n[s] = n[s].filter(function(t) {
                    return t != u
                });
                var t = require(s);
                (d ? t[d] : t).apply(t, a)
            })
        }
    }
});
if ("undefined" == typeof ta) var ta = {};
var api = function() {
    null == window.IS_DEBUG && (window.IS_DEBUG = !1), null == window.VERSION_MAP && (window.VERSION_MAP = {}), null == window.CDNHOST && (window.CDNHOST = "");
    var t = {
        overlays: window.ta.overlays || {},
        maps: window.ta.maps || {},
        bmaps: window.ta.bmaps || {},
        common: window.ta.common || {},
        phac: window.ta.phac || {},
        servlet: window.ta.servlet || {},
        support: window.ta.support || {},
        util: window.ta.util || {},
        widgets: window.ta.widgets || {},
        commerce: window.ta.commerce || {},
        mobfull: window.ta.mobfull || {},
        photos: window.ta.photos || {},
        media: window.ta.media || {},
        hac: {
            filters: {}
        },
        t4b: window.ta.t4b || {},
        api: {
            maps: {}
        },
        p13n: window.ta.p13n || {},
        registration: window.ta.registration || {},
        meta: window.ta.meta || {}
    };
    t.id = function(n) {
        try {
            return document.id(n)
        } catch (n) {
            t.util.error && t.util.error.record(n, "ta.id failed")
        }
    }, t.select = function() {
        var t = (Array.convert || Array.from)(arguments),
            n = t.length > 1 && ("string" == typeof t[0] ? t.pop() : t.shift()) || document,
            e = t.shift();
        return Slick.search(n, e, new Elements)
    };
    var n = t;
    return n.extend = function() {
        var t, n, e, r, o, i, a = arguments[0] || {},
            u = 1,
            l = arguments.length,
            s = !1;
        for ("boolean" == typeof a && (s = a, a = arguments[u] || {}, u++), "object" == typeof a || isFunction(a) || (a = {}); u < l; u++)
            if (null != (t = arguments[u]))
                for (n in t) e = a[n], r = t[n], a !== r && (s && r && (isPlainObject(r) || (o = isArray(r))) ? (o ? (o = !1, i = e && isArray(e) ? e : []) : i = e && isPlainObject(e) ? e : {}, a[n] = extend(s, i, r)) : void 0 !== r && (a[n] = r));
        return a
    }, n.fireEvent = function(t, n, e) {
        return t && $(t).fireEvent(n, e)
    }, n.addEvent = function(t, n, e) {
        return t && $(t).addEvent(n, e)
    }, n.removeEvent = function(t, n, e) {
        return t && $(t).removeEvent(n, e)
    }, n.removeEvents = function(t, n) {
        return t && $(t).removeEvents(n)
    }, n.createElement = function(t, n) {
        return new Element(t, n)
    }, n.getSize = function(t) {
        return t && $(t).getSize()
    }, n.getPosition = function(t, n) {
        return t && $(t).getPosition(n)
    }, n.addClass = function(t, n) {
        return t && $(t).addClass(n)
    }, n.removeClass = function(t, n) {
        return t && $(t).removeClass(n)
    }, n.toggleClass = function(t, n, e) {
        return t && $(t).toggleClass(n, e)
    }, n.hasClass = function(t, n) {
        return t && $(t).hasClass(n)
    }, n.find = function(t, n) {
        return $(n || document).getElement(t)
    }, n.findAll = n.select, n.parent = function(t, n) {
        return t && $(t).getParent(n)
    }, n.setStyle = function(t, n, e) {
        return t && $(t).setStyle(n, e)
    }, n.mixin = function(t) {
        return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
            for (var n in t) this[n] = t[n]
        }, t), t
    }, n.merge = function(t) {
        for (var n = Array.prototype.slice.call(arguments, 1), e = 0, r = n.length; e < r; e++)
            for (var o in n[e]) n[e].hasOwnProperty(o) && (t[o] = n[e][o]);
        return t
    }, n.isArray = function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }, n.stopEvent = function(t) {
        return t && (t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, t.preventDefault ? t.preventDefault() : t.returnValue = !1), !1
    }, window.define && define("ta", [], function() {
        return t
    }), n
}();
api.merge(ta, api);
var ifdefNN = function(t) {
    return "undefined" != typeof t && null !== t
};
require(["ta/rollupAmdShim"], function(a) {
    a.install([], [])
});
require(["ta/rollupAmdShim"], function(a) {
    a.install(["ta/Core/TA.Store", "utils/store", "ta/Core/TA.Load", "ta/Core/TA.FireEvent", "ta/Core/TA.Event", "ta/Core/TA.Record", "ta/util/Error", "ta/util/Selenium", "ta/util/roybatty", "ta/Core/TA.LocalStorage", "ta/Core/TA.Prerender", "ta/projects", "ta/Browser", "ta/util/ScreenSizeRecord", "utils/BatchRequest", "utils/ceUtils"], ["ta", "ta"])
});
if (window.requirejs && requirejs.taConfig) {
    requirejs.taConfig({
        deferred: {},
        name: "core-without-dust-or-mootools",
        files: {
            js3_secure: {
                ssl: {
                    ta: {
                        Core: {
                            "TA.Record": 1,
                            "TA.Prerender": 1
                        }
                    }
                }
            },
            "js-amd": {
                src: {
                    utils: {
                        BatchRequest: 1,
                        ceUtils: 1,
                        store: 1
                    }
                }
            },
            js3: {
                src: {
                    ta: {
                        projects: 1,
                        util: {
                            ScreenSizeRecord: 1,
                            roybatty: 1,
                            Error: 1,
                            Selenium: 1
                        },
                        Browser: 1,
                        Core: {
                            "TA.FireEvent": 1,
                            "TA.Event": 1,
                            "TA.Load": 1,
                            "TA.LocalStorage": 1,
                            "TA.Store": 1
                        }
                    }
                }
            }
        },
        _: {
            baseUrl: "/"
        }
    })
};
define("utils/store", ["vanillajs", "ta/Core/TA.Store"], function(e, r) {
    return {
        add: r.store,
        get: r.retrieve,
        has: r.has,
        getOrAdd: r.retrieveOrStore,
        remove: r.remove
    }
});
define("ta/Core/TA.Load", ["vanillajs", "ns-exporter", "ta/Core/TA.Store", "utils/resourceLoader"], function(e, r, o, a) {
    function t(e) {
        if ("string" == typeof e && VERSION_MAP) {
            var r = !1;
            if (VERSION_MAP[e]) r = e;
            else if (VERSION_MAP[e + ".js"]) r = e + ".js";
            else
                for (var o = e.split("."), a = 0; o && o.length > 1 && a < 10;) {
                    o = o.slice(0, -1);
                    var t = o.join("-") + ".js";
                    if (t && VERSION_MAP[t]) {
                        r = t;
                        break
                    }
                    a++
                }
            return r
        }
    }
    var n = {};
    return n.load = function(e, r, n) {
        var i = !1,
            s = t(e);
        s && (i = VERSION_MAP[s]);
        var l = function() {
            var e = o.remove(f);
            e && e.forEach(function(e) {
                e && e()
            })
        };
        if (i) {
            var f = s + "_callback";
            if (o.has(f)) {
                var c = o.retrieve(f);
                c.push(r), o.store(f, c)
            } else o.store(f, [function() {
                delete VERSION_MAP[s], r && r()
            }]), "object" == typeof i ? a.load(i, {
                serial: !0,
                forceType: "js"
            }, l) : a.load(i, {
                forceType: "js"
            }, l)
        } else n && a.loaded(i) && (l(), r && r());
        return i
    }, n.loadInOrder = function(e, r) {
        a.load(e, {
            serial: !0
        }, r)
    }, r.exportTo(n, "ta"), n
});
define("ta/util/Selenium", ["vanillajs", "ns-exporter", "mixins/Events", "ta/Core/TA.LocalStorage", "ta/util/Error"], function(r, t, e, n, o) {
    var a = {},
        i = " :: ",
        l = "lastError";
    return a.lastErrorOnPage = function() {
        return n.getObject(l)
    }, o.on("error", function(r, t, e, o) {
        "ERROR" === e && n.set(l, e + i + t + i + r + i + "Stack -> " + o)
    }), t.exportTo(a, "ta.util.selenium"), a
});
define("ta/util/roybatty", ["vanillajs", "utils/ajax", "ta/Core/TA.Event", "ta/util/Error", "ta/util/Cookie"], function(e, t, r, o, a) {
    var i = !1;
    return r.queueForLoad(function() {
        if (window.taSecureToken) try {
            if (!window.taEarlyRoyBattyStatus) {
                var e = a.readRaw("roybatty");
                if (e) {
                    var r = e.split(",");
                    if (2 == r.length) {
                        var n = parseInt(r[1], 10);
                        a.write("roybatty", taSecureToken + "," + n, null, "/", cookieDomain)
                    } else 1 == r.length ? a.write("roybatty", taSecureToken) : o.record(null, "royBatty -- Bad value in cookie: " + e)
                } else a.write("roybatty", taSecureToken + ",1", null, "/", cookieDomain), t(require.defined("ta/Browser") && require("ta/Browser").isIEMetro() ? "/CookiePingback?metroBrowser=true" : "/CookiePingback")
            }
            i = !0
        } catch (e) {
            o.record(e, "javascript exection bot detection error")
        }
    }, "RoyBatty"), {
        isDone: function() {
            return i
        }
    }
});
window.ta || (window.ta = {}), define("ta/util/RecordInterruption", ["vanillajs", "ta/Core/TA.Record", "ta/util/Error"], function(t, r, n) {
    "use strict";
    var e = "interruption_record",
        o = ["popup", "popunder", "gate", "other"],
        i = function(t, r) {
            n.record(r, t, null, null)
        },
        u = function(t) {
            for (var r = 0; r < o.length; r++)
                if (t === o[r]) return !0;
            return !1
        };
    return {
        record: function(t, n) {
            try {
                u(t) ? n ? r.trackEventOnPage(e, t, n.replace(",", ""), 0, !0) : i("ta/util/RecordInterruption: Name cannot be null or blank") : i("ta/util/RecordInterruption: Invalid type")
            } catch (t) {
                i("ta/util/RecordInterruption: exception tracking event", t)
            }
        }
    }
});
define("ta/Core/TA.Prerender", ["vanillajs", "api-mod", "ta/Core/TA.Record", "ta/util/Error"], function(t, e, i, r, n) {
    "use strict";
    var a = {
            states: {
                PREFETCH_SENT: "prefetchSent",
                CLEAR: "clear"
            }
        },
        s = function(t, e, i, n, a) {
            if (r._validatedTrackEventArray && r._GARecordRequest) {
                var s = r._validatedTrackEventArray(t, e, i, n, a);
                return r._GARecordRequest(s).get(), !0
            }
            return !1
        },
        d = function() {
            if ("visibilityState" in document) return a._visibilityState = "visibilityState", void(a._visibilitystatechanged = "visibilitychange");
            for (var t = ["webkit", "moz", "ms", "o"], e = 0; e < t.length; e++) t[e] + "VisibilityState" in document && (a._visibilityState = t[e] + "VisibilityState", a._visibilitystatechanged = t[e] + "visibilitychange")
        },
        c = function() {
            try {
                a._state === a.states.PREFETCH_SENT && "prerender" !== document[a._visibilityState] && (s("Prerender", "shown", "", 0, !0), a._state = a.states.CLEAR)
            } catch (t) {
                n.record(t)
            }
        };
    return a._init = function(t) {
        try {
            if (a._enabled = t, a._state = a.states.CLEAR, d(), !a.isSupported() || !a.isEnabled()) return;
            "prerender" === document[a._visibilityState] && s("Prerender", "prefetch", "", 0, !0) && (a._state = a.states.PREFETCH_SENT, document.addEventListener(a._visibilitystatechanged, c, !1))
        } catch (t) {
            n.record(t)
        }
    }, a.isEnabled = function() {
        return a._enabled
    }, a.isSupported = function() {
        return void 0 !== a._visibilityState
    }, a
});
define("ta/projects", ["vanillajs", "ns-exporter", "ta/Core/TA.Store"], function(t, e, n) {
    function s(t, e) {
        return !!(t && e && t.className.match(new RegExp("\\b" + e + "\\b")))
    }

    function r(t, e, n) {
        return i.has(t) || i.setIfClass(t, e, n), i.get(t)
    }
    var i = {
            vals: {},
            set: function(t, e) {
                i.vals[t] = e
            },
            setIfClass: function(t, e, n) {
                "string" == typeof e && (e = document.getElementById(e)), i.vals[t] = s(e, n)
            },
            get: function(t) {
                return i.vals[t]
            },
            has: function(t) {
                return t in i.vals
            }
        },
        a = {};
    return a.isHotelsRedesign2011 = function() {
        var t = "isHotelsRedesign2011";
        return i.has(t) || i.setIfClass(t, "HAC_SMRY", "hotels_re_2011"), i.get(t)
    }, a.isSmartDealsFilters = function() {
        return r("smartDealsFilters", "DEALS", "sdfilters")
    }, a.isAttractionsRedesign2012 = function() {
        return r("isAttractionsRedesign2012", "ATTRACTIONS_2012", "gridA")
    }, a.isMetaHomepageIntegration2013 = function() {
        return r("isMetaHomepageIntegration2013", "PPT", "ppt_container")
    }, a.isMetaHotels2013 = function() {
        return r("isMetaHotels2013", "PAGE", "meta_hotels")
    }, a.isMetaHotelsRequest = function() {
        return n.has("isMetaHotelsRequest")
    }, a.isSmartDealsHSXSortEnabled = function() {
        return n.has("isSmartDealsHSXSortEnabled")
    }, a.isHRTabs2014 = function() {
        return n.has("hr_tabs_2014")
    }, a.isTabletAlbumViewer = function() {
        return n.retrieve("tabletAlbumPhotoLightbox.enabled")
    }, a.isAirport = function() {
        return "Airport" == window.pageServlet
    }, e.exportTo(a, "ta"), a
});
define("ta/util/ScreenSizeRecord", ["vanillajs", "ta/Core/TA.LocalStorage", "ta/Core/TA.Record", "ta/Core/TA.Event"], function(e, n, t, i) {
    function o() {
        var e = document.documentElement,
            n = document.body,
            t = window.innerWidth || e.clientWidth || n.clientWidth,
            i = window.innerHeight || e.clientHeight || n.clientHeight,
            o = screen.width,
            r = screen.height;
        return "s" + o + "x" + r + "b" + t + "x" + i
    }

    function r(e) {
        var i = o(),
            r = n.getSessionKey(d);
        i !== r && (n.setSessionKey(d, i), t.trackEventOnPage("screenSizeRecord", e, i))
    }

    function c() {
        function e() {
            t && clearTimeout(t), t = setTimeout(function() {
                r("resize")
            }, 250)
        }
        if (ta.retrieve("screenSizeRecord") && n.enabled) {
            r("load");
            var t;
            window.addEventListener ? window.addEventListener("resize", e, !1) : window.attachEvent && window.attachEvent("onresize", e)
        }
    }
    var d = "screenSizeRecord";
    i.queueForLoad(c, "ScreenSizeRecord.onLoad")
});
define("utils/BatchRequest", ["ajax-request"], function(e) {
    "use strict";

    function n(e, n) {
        r[e] = r[e] || [], r[e].push(n), i && clearTimeout(i), i = setTimeout(t, a)
    }

    function t(n) {
        for (var t in r)
            if (r.hasOwnProperty(t)) {
                for (var a = {
                        batched: !0
                    }, i = r[t], u = 0; u < i.length; u++)
                    for (var o in i[u]) i[u].hasOwnProperty(o) && (a["data[" + u + "][" + o + "]"] = i[u][o]);
                e({
                    method: "POST",
                    url: t,
                    data: a,
                    synchronous: n
                })
            } r = {}
    }
    var a = 1500,
        r = {},
        i = null;
    return window.addEventListener("onpagehide" in window ? "pagehide" : "unload", t.bind(null, !0)), {
        queue: n
    }
});
define("utils/responsive", ["vanillajs"], function() {
    "use strict";

    function t() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    }

    function n() {
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }

    function e(n) {
        return function() {
            return t() >= n
        }
    }

    function r(n) {
        return function() {
            return t() <= n
        }
    }

    function i(t, n) {
        return function() {
            return e(t)() && r(n)()
        }
    }
    var o = {
            largeMonitor: 1600,
            widescreen: 1280,
            desktop: 1024,
            tablet: 768,
            mobile: 767
        },
        u = Object.keys(o).sort(function(t, n) {
            return o[n] - o[t]
        }),
        c = {
            breakpoints: u,
            widths: o,
            atLeast: e,
            atMost: r,
            between: i,
            largeMonitor: e(o.largeMonitor),
            widescreen: e(o.widescreen),
            desktop: e(o.desktop),
            tablet: e(o.tablet),
            mobile: r(o.mobile),
            desktopOnly: i(o.desktop, o.widescreen - 1),
            tabletOnly: i(o.tablet, o.desktop - 1),
            landscape: function() {
                return t() > n()
            },
            portrait: function() {
                return n() > t()
            },
            currentBreakpoints: function() {
                return u.filter(function(t) {
                    return "function" == typeof c[t] && c[t]()
                })
            },
            is: function(t, n, e) {
                var r = "function" != typeof t && c[t] ? c[t] : t;
                return function(t, i) {
                    return r() ? "undefined" != typeof t ? t : n : "undefined" != typeof i ? i : e
                }
            }
        };
    return c
});
define("overlays/uiOverlay", ["vanillajs", "api-mod", "utils/responsive"], function(t, e, a) {
    "use strict";

    function o(t) {
        var e = a[t.getAttribute("data-breakpoint")];
        return !("function" == typeof e && !e())
    }
    var r = {
            "tooltip": {
                defaultPosition: "above",
                defaultFade: "fade_short"
            },
            "popover": {
                defaultPosition: "below",
                defaultFade: "fade_short"
            },
            "modal": {
                defaultPosition: "center",
                defaultFixed: !0,
                defaultFade: "fade_short"
            },
            "dropdown": {
                defaultPosition: "below"
            },
            "notification": {}
        },
        i = {},
        s = function(t, a) {
            if (t = t || window.event, a = a || t.target || t.srcElement, o(a)) {
                var s = t && t.type;
                s && e.removePropertyEvent(a, s, "uiOverlay"), t && e.stopEvent(t);
                var n, l = (a.getAttribute("data-position") || "").split(" ").filter(function(t) {
                        return !!t.length
                    }),
                    u = l.shift(),
                    d = ["overlays/Overlay", "overlays/position"];
                for (var v in r)
                    if (a.hasAttribute("data-" + v)) {
                        u = u || r[v].defaultPosition, d.push("overlays/styles/" + v), n = !0;
                        break
                    } var c = a.getAttribute("data-options") || "";
                if (!n && require.defined("ta/util/Error")) {
                    var p = "uiOverlay: no style. class=" + a.className + ", id=" + a.id;
                    return [].forEach.call(a.attributes, function(t) {
                        /^data-/.test(t.name) && (p += ", " + t.name + "=" + t.value)
                    }), void require("ta/util/Error").record(null, p)
                }
                d.push(a.hasAttribute("data-windowshade") ? "overlays/styles/windowshade" : null);
                var h = !1;
                a.hasAttribute("data-defer") && (h = parseInt(a.getAttribute("data-defer"))), d.push(h ? "overlays/options/hoverDelay" : null), d.push(a.hasAttribute("data-fade") ? "overlays/options/fadeInOut" : null), d.push(a.getAttribute("data-url") ? "overlays/options/ajax" : null), d.push(a.hasAttribute("data-close-event") ? "overlays/options/closeOnEvent" : null), d.push(a.hasAttribute("data-close-ta-event") ? "overlays/options/closeOnTaEvent" : null), d.push(a.hasAttribute("data-maxWidth") ? "overlays/options/maxWidth" : null), d.push(a.hasAttribute("data-close-child") ? "overlays/options/closeOnTargetChildClick" : null);
                var f = a.hasAttribute("data-move-padding") || a.hasAttribute("data-move-source");
                d.push(f ? "overlays/options/moveIntoView" : null), d.push(a.hasAttribute("data-keep-in-dom") ? "overlays/options/keepInDom" : null), d.push("overlays/options/storeOverlayOnElement"), c && (d = d.concat(c.split(" ").map(function(t) {
                    return "overlays/options/" + t
                }))), a.hasAttribute("data-tooltip") ? "click" === s ? d.push("overlays/options/closeOnDocClick") : "mouseover" === s && c.indexOf("closeOnMouseAway") < 0 && d.push("overlays/options/closeOnMouseOut") : a.hasAttribute("data-dropdown") && ("click" === s ? (d.push("overlays/options/closeOnDocClick"), d.push("overlays/options/closeOnSourceClick")) : "mouseover" === s && d.push("overlays/options/closeOnMouseAway")), d.push(a.hasAttribute("data-zIndex") ? "overlays/options/zIndex" : null);
                var y;
                if (!(a.hasAttribute("data-unique") && (y = a.getAttribute("data-unique"), y && y in i))) {
                    var b;
                    return a.hasAttribute("data-group") && (b = a.getAttribute("data-group")), require(d, function(t, n, d, c, p, f, A, g, m, w, O, E) {
                        var k = [d(a, u), u && n[u](l, r[v].defaultFixed), c && c(a.getAttribute("data-windowshade")), p && p(h, !0), f && f(r[v].defaultFade), A && A(), g && g(a.getAttribute("data-close-event")), m && m(a.getAttribute("data-close-ta-event")), w && w(a.getAttribute("data-maxWidth")), O && O(a.getAttribute("data-close-child")), E && E(a.getAttribute("data-move-source"), parseInt(a.getAttribute("data-move-padding"), 10))],
                            x = Array.prototype.slice.call(arguments, 11),
                            I = new t(a, k.concat(x)),
                            q = function() {
                                e.select(".ui_tooltip").forEach(function(t) {
                                    t.overlay && t.overlay != I && t.overlay.hide()
                                }), b && (i[b] || []).forEach(function(t) {
                                    t != I && t.hide()
                                }), I.show()
                            };
                        if (b) {
                            var C = i[b] || [];
                            C.push(I), i[b] = C
                        }
                        if (s && !h) {
                            var F = function(t) {
                                o(a) && (q(), e.stopEvent(t))
                            };
                            e.addEvent(a, s, F), I.on("destroy", function() {
                                e.removeEvent(a, s, F)
                            })
                        }
                        if (y && (i[y] = I, I.on("destroy", function() {
                                delete i[y]
                            })), !h && q(), a.hasAttribute("data-callback")) {
                            var P = e.fn(a.getAttribute("data-callback"));
                            P && P(I)
                        }
                    }), !1
                }
                var A = i[y];
                if (A.sourceElement = a, A.updateContent(), !h && A.show(), a.hasAttribute("data-callback")) {
                    var g = e.fn(a.getAttribute("data-callback"));
                    g && g(A)
                }
            }
        };
    return s
}), window.uiOverlay = function() {
    var t = arguments;
    require(["overlays/uiOverlay"], function(e) {
        e.apply(null, t)
    })
};
define("mixins/page-dates/DateEvents", ["mixins/Events", "vanillajs"], function(e) {
    "use strict";
    return new e("dateSelected", "calendarOpened")
});
define("common/pixels-loader", ["vanillajs", "mixins/page-dates/DateEvents", "ta/Core/TA.FireEvent"], function(n, o, e) {
    "use strict";
    var i, t = 2e3,
        a = function() {
            require(["trjs!ta/common/behavior/Ads-pagemoniker"], function(n) {
                n.loadMonikers(), o.on("dateSelected", function(o, e) {
                    "STAYDATES" == e && window.setTimeout(n.loadMonikerForEnterDates, 2e3)
                })
            }), i && i.shouldInitFlightsEvents && r(), a = function() {}
        },
        r = function() {
            var n = new Promise(require.bind(null, ["trjs!ta/common/behavior/Ads-pagemoniker"]));
            e.on("lcbPop", function() {
                n.then(function(n) {
                    n.loadMonikerForLCBPop()
                })
            }), e.on("packageClick", function() {
                n.then(function(n) {
                    n.loadVacationPackageMetaMonikers()
                })
            }), e.on("metaLinkClickPixelLoad", function(o) {
                n.then(function(n) {
                    n.loadFlightsMetaMonikers(o)
                })
            }), e.on("metaLightboxLoad", function(o) {
                n.then(function(n) {
                    n.loadLightboxMonikers(o)
                })
            }), e.on("flightSearchPixelLoad", function() {
                n.then(function(n) {
                    n.loadMonikerForFlightSearch()
                })
            })
        };
    return {
        init: function(n) {
            i = n, n && n.pixelsEnabled && setTimeout(a, t)
        },
        remarketingOptions: function() {
            return i
        }
    }
});
/*
 * hoverIntent v1.8.1 // 2014.08.11 // jQuery v1.9.1+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */
define("lib/jquery/jquery.hoverIntent", ["lib/jquery-amd"], function(d) {
    var h = {
        interval: 100,
        sensitivity: 6,
        timeout: 0
    };
    var i = 0;
    var g, f;
    var b = function(j) {
        g = j.pageX;
        f = j.pageY
    };
    var a = function(m, k, l, j) {
        if (Math.sqrt((l.pX - g) * (l.pX - g) + (l.pY - f) * (l.pY - f)) < j.sensitivity) {
            k.off(l.event, b);
            delete l.timeoutId;
            l.isActive = true;
            m.pageX = g;
            m.pageY = f;
            delete l.pX;
            delete l.pY;
            return j.over.apply(k[0], [m])
        } else {
            l.pX = g;
            l.pY = f;
            l.timeoutId = setTimeout(function() {
                a(m, k, l, j)
            }, j.interval)
        }
    };
    var e = function(m, k, l, j) {
        delete k.data("hoverIntent")[l.id];
        return j.apply(k[0], [m])
    };
    return function c(n, o, j) {
        var m = i++;
        var l = d.extend({}, h);
        if (d.isPlainObject(n)) {
            l = d.extend(l, n);
            if (!d.isFunction(l.out)) {
                l.out = l.over
            }
        } else {
            if (d.isFunction(o)) {
                l = d.extend(l, {
                    over: n,
                    out: o,
                    selector: j
                })
            } else {
                l = d.extend(l, {
                    over: n,
                    out: n,
                    selector: o
                })
            }
        }
        var k = function(u) {
            var s = d.extend({}, u);
            var q = d(this);
            var p = q.data("hoverIntent");
            if (!p) {
                q.data("hoverIntent", (p = {}))
            }
            var t = p[m];
            if (!t) {
                p[m] = t = {
                    id: m
                }
            }
            if (t.timeoutId) {
                t.timeoutId = clearTimeout(t.timeoutId)
            }
            var r = t.event = "mousemove.hoverIntent.hoverIntent" + m;
            if (u.type === "mouseenter") {
                if (t.isActive) {
                    return
                }
                t.pX = s.pageX;
                t.pY = s.pageY;
                q.off(r, b).on(r, b);
                t.timeoutId = setTimeout(function() {
                    a(s, q, t, l)
                }, l.interval)
            } else {
                if (!t.isActive) {
                    return
                }
                q.off(r, b);
                t.timeoutId = setTimeout(function() {
                    e(s, q, t, l.out)
                }, l.timeout)
            }
        };
        return this.on({
            "mouseenter.hoverIntent": k,
            "mouseleave.hoverIntent": k
        }, l.selector)
    }
});
define("ta/util/Element", ["lib/jquery-amd", "utils/ajax", "ta/Core/TA.Record", "ns-exporter", "ta/Core/TA.Event", "lib/jquery/jquery.hoverIntent", "utils/throttle"], function(t, e, i, n, o, r, a) {
    function l(e, i) {
        var n = e.style.fontSize || t(e).css("font-size"),
            o = n.replace(/[\d\.]/g, ""),
            r = c(o, parseFloat(n) * i);
        e.style.fontSize = r + o
    }

    function s() {
        function e(e, i) {
            var r = n[e],
                a = t(r.e);
            if (a.length > 0) {
                var l = r.inView;
                r.inView = !1, a.each(function() {
                    return !r.inView && void(r.inView = o.inViewport(this, i, r.persistentElmt, r.offset))
                }), !l && r.inView && (r.cb && r.cb(r.e), r.multiple || n.splice(e, 1))
            }
        }

        function i() {
            var e = t(window),
                i = {};
            return i.top = e.scrollTop(), i.left = e.scrollLeft(), i.bottom = i.top + e.height(), i.right = i.left + e.width(), i
        }
        var n = [],
            o = this;
        this.add = function(i) {
            n.push(i), e(n.length - 1), n.length > 0 && t(window).on("resize scroll", r)
        }, this.inViewport = function(e, n, o, r) {
            if (e = t(e), !e.is(":visible")) return !1;
            if (r = t.extend({
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                }, r), o) {
                var a = o.offsetHeight;
                a && (0 == o.offsetTop ? r.bottom -= a : r.top += a)
            }
            var l = e.offset();
            return n || (n = i()), n.bottom >= Math.max(l.top + r.top, 0) && n.right >= Math.max(l.left + r.left, 0) && n.top <= Math.max(l.top + e.height() + r.bottom, 0) && n.left <= Math.max(l.left + e.width() + r.right, 0)
        };
        var r = a(function() {
            if (n.length) {
                for (var o = i(), a = n.length - 1; a >= 0; a--) e(a, o);
                0 == n.length && t(window).off("resize scroll", r)
            }
        }, 300);
        t(window).on("load", r)
    }
    var f = {};
    f.replaceContent = function(i, n, o, r) {
        if (n = t(n), !n.find(".progresstab")) {
            var a = o + (o.indexOf("?") == -1 ? "?" : "&") + "xhr=true";
            n.append('<div class="progresstab"></div>'), e({
                url: a,
                success: function(t) {
                    n.html(t), window.behavior && window.behavior.apply(n), r && r(n.get(0))
                },
                evalScripts: !0
            }).get()
        }
    }, f.spinner = function(e, i) {
        t(i).parents(".spinnerReplaceable").children().each(function(t, e) {
            e.toggle(e.hasClass("spinner"))
        })
    }, f.limitLength = function(t, e, i) {
        return !(e.value.length >= i) || (e.value = e.value.substr(0, i), !1)
    }, f.updateValue = function(e, i) {
        if (e = t(e), e.length > 0 && e.val() != i) {
            e.val(i);
            var n = document.createEvent("HTMLEvents");
            n.initEvent("change", !1, !1), e[0].dispatchEvent(n)
        }
    }, f.keepInWindow = function(e, i) {
        function n(t, e) {
            var i = parseInt(t.get(0).style[e]);
            return i || 0 === i
        }
        if (e) {
            e = t(e), i || (i = {
                top: !0,
                right: !0,
                bottom: !0,
                left: !0
            });
            var o = 2,
                r = e.offset();
            r.right = r.left + e.width(), r.bottom = r.top + e.height();
            var a = t(window),
                l = a.width(),
                s = a.height(),
                f = a.scrollTop(),
                c = a.scrollLeft();
            i.right && n(e, "right") ? r.left < c + o ? e.css("right", l + c - e.width() - o) : r.right > l - c - o && e.css("right", o) : i.left && n(e, "left") && (r.left < c + o ? e.css("left", o) : r.right > l - c - o && e.setStyle("left", l + c - r.width - o)), i.bottom && n(e, "bottom") ? r.top < f + o ? e.setStyle("bottom", s + f - r.height - o) : r.bottom > s - f - o && e.setStyle("bottom", o) : i.top && n(e, "top") && (r.top < f + o ? e.setStyle("top", o) : r.bottom > s - f - o && e.setStyle("top", s + f - r.height - o))
        }
    };
    var c = function(t, e) {
        var i = e;
        return "px" == t ? i = 8 : "em" == t ? i = .5 : "pt" == t ? i = 6 : "%" == t && (i = 50), Math.max(e, i)
    };
    f.makeTextFit = function(e, i, n, r, a) {
            a = a || 1, r = r || 8;
            var l = !1;
            if (t(e).each(function(e, o) {
                    o = t(o);
                    var a = o.find(i);
                    if (a) {
                        var s;
                        if ("number" == typeof n) s = n;
                        else if (s = o.find(n).outerHeight(), void 0 === s) return;
                        var f = a.height();
                        if (s < f) {
                            var c = a.css("font-size");
                            if (c) {
                                var u = function(t, e) {
                                        return "px" == e && t >= r || "em" == e && t >= .5 || "pt" == e && t > 6 || "%" == e && t >= 50
                                    },
                                    h = c.replace(/[\d\.]/g, ""),
                                    d = parseFloat(c) * Math.sqrt(s / f);
                                "px" == h && (d = Math.max(parseInt(d), r)), u(d, h) && (a.css("font-size", d + h), l = !0)
                            }
                        }
                    }
                }), l > 0 && a < 4) {
                o.fireEvent("makeTextFitResizedText");
                var s = this;
                setTimeout(function() {
                    s.makeTextFit(e, i, n, r, a + 1)
                }, 1)
            }
        },
        function() {
            function e(t) {
                var e = !1;
                if (!t || t.clientWidth && t.clientWidth <= 0) return !1;
                for (var i = t.clientWidth, n = (parseFloat(t.style.paddingLeft) || 0) + (parseFloat(t.style.paddingRight) || 0), o = 0; o < a && t.scrollWidth > i; o++) {
                    var r = (i - n) / (t.scrollWidth - n);
                    l(t, r), e = !0
                }
                return t.scrollWidth > i && (l(t, s), e = !0), e
            }

            function i(t, e) {
                var i = t.getAttribute("data-sizegroup"),
                    n = parseFloat(t.style.fontSize);
                i && (e[i] = Math.min(e[i] || Number.MAX_VALUE, n))
            }

            function n(t) {
                for (var i in t)
                    if (t.hasOwnProperty(i)) {
                        var n = t[i],
                            o = [];
                        n.forEach(function(t) {
                            o.push([t.scrollWidth, t])
                        }), o.sort(function(t, e) {
                            return e[0] - t[0]
                        });
                        for (var r = 0; r < o.length && e(o[r][1]); r++);
                    }
            }

            function r(t) {
                var i;
                for (var n in t) t.hasOwnProperty(n) && (i = {}, t[n].forEach(function(t) {
                    var n = t.innerHTML,
                        o = i[n];
                    void 0 !== o ? 0 != o && (t.style.fontSize = o) : e(t) ? i[n] = t.style.fontSize || 0 : i[n] = 0
                }))
            }
            var a = 4,
                s = .9;
            f.makeTextFitOneLine = function(i, n) {
                var o = t(i);
                if (o.each(function(t, i) {
                        e(i)
                    }), n) {
                    var r;
                    o.each(function(e, i) {
                        var n = t(i).css("font-size");
                        (!r || parseFloat(n) < parseFloat(r)) && (r = n)
                    }), r && o.css("font-size", r)
                }
            }, f.autoResizeTextInNode = function(o) {
                o = t(o);
                var a = t(".autoResize", o),
                    l = {},
                    s = {
                        width: {},
                        text: {}
                    };
                a.filter(":visible").removeClass("autoResize").each(function(t, n) {
                    var o, r, a = n.getAttribute("data-resizeWidthGroup"),
                        f = n.getAttribute("data-resizeTextGroup");
                    a ? (o = s.width, r = a) : f && (o = s.text, r = f), o ? (o[r] || (o[r] = []), o[r].push(n)) : (e(n), i(n, l))
                }), n(s.width), r(s.text), a.each(function(t, e) {
                    var i = e.getAttribute("data-sizegroup");
                    i && (e.style.fontSize = l[i] + "px")
                })
            }, o.queueForLoad(function() {
                require.defined("ta/Core/TA.Store") && require("ta/Core/TA.Store").retrieve("no-old-resize") || (o.on("refreshedDOMContent", function(t) {
                    f.autoResizeTextInNode(t)
                }), document.body && f.autoResizeTextInNode(document.body))
            }, "autoResize all targets on load")
        }(), f.makeSameWidth = function(e) {
            var i = 0;
            t(e).each(function(t, e) {
                var n = Math.round(parseFloat(e.style.width));
                n && n > i && (i = n)
            }).css("width", i)
        }, f.fitToContentsHorizontally = function(e, i, n, o) {
            if (o = o || 1, !(o <= 0 || i > n)) {
                var r = function(t) {
                    return t.scrollWidth > t.clientWidth || t.scrollHeight > t.clientHeight
                };
                t(e).each(function(t, e) {
                    e.style.width = i;
                    for (var a = i; a < n && r(e); a += o) e.style.width = a;
                    r(e) && (e.style.width = n)
                })
            }
        }, f.scrollIntoView = function(e, i, n, o) {
            if (e) {
                e = t(e);
                var r = e.offset().top + (i || 0);
                if (n) {
                    for (var a = t("html, body"), l = e.parent(), s = function(t) {
                            return ("auto" === t.css("overflow-y") || "scroll" === t.css("overflow-y")) && t[0].scrollHeight > t[0].clientHeight
                        }; l.length && !l.is(a) && !s(l);) l = l.parent();
                    l.length && !l.is(a) && s(l) ? r = l.offset().top + l.scrollTop() + (i || 0) : l = a, l.animate({
                        scrollTop: r
                    }, {
                        duration: 300,
                        complete: function() {
                            o && o()
                        }
                    })
                } else window.scrollTo(0, r), o && o()
            }
        };
    var u = f.scrollTrackers = new s;
    return f.isScrolledIntoView = function(t, e, i) {
        return u.inViewport(t, null, e, i)
    }, f.doIfElementIsVisible = function(t, e, i, n) {
        t && u.add({
            e: t,
            cb: function() {
                return e.apply(null, i), !0
            },
            offset: n
        })
    }, f.trackWhenScrolledIntoView = function(t, e, n) {
        if (t && e) {
            var o = function() {
                i.trackEventOnPage.apply(i, e)
            };
            u.add({
                e: t,
                cb: o,
                multiple: n
            })
        }
    }, f.getTotalWidth = function(e) {
        return t(e).outerWidth(!0) || 0
    }, f.getTotalHeight = function(e) {
        return t(e).outerHeight(!0) || 0
    }, f.hoverIntent = function(e, i) {
        r.bind(t(e), i)()
    }, n.exportTo(f, "ta.util.element"), f
});
define("ta/common/behavior/Ads-pagemoniker", ["vanillajs", "ns-exporter", "common/trackingStreams", "ta/Core/TA.Store", "common/pixels-loader", "ta/util/Element", "ta/Core/TA.FireEvent"], function(e, t, r, o, n, i, l) {
    var a = {};
    a.remarketingOptions = n.remarketingOptions() || {};
    var s = function(e) {
            return void 0 === a.remarketingOptions.pixelsEnabled && (a.remarketingOptions = n.remarketingOptions() || {}), a.remarketingOptions[e]
        },
        u = {
            OFFER_VIEW: "Monikers_OV",
            HAC_PRICES_LOADED: "Monikers_HPL",
            RESTAURANTS_PRODUCT_CONVERSION: "Monikers_RPC",
            MEMBER_REGISTRATION_FORM: "Monikers_MRF",
            MEMBER_CREATE: "Monikers_MC"
        },
        c = "dates.enter.moniker.fired",
        d = "hotel.prices.moniker.fired",
        p = !1,
        M = !1,
        k = 5,
        x = "loc1",
        _ = "@@@loc1@@@",
        C = "locId",
        f = "[data-vendorname='Hotels.com']",
        m = 10,
        T = 1e3,
        E = function() {
            function e() {
                var r = "",
                    o = "[data-pernight][data-locationid='" + n[l] + "']",
                    s = document.body.querySelector(o);
                a < m && !s ? (a++, window.setTimeout(e, T)) : (a < m && (r = s.getAttribute("data-pernight") || ""), i.push(r), t = !0)
            }
            var t = !1;
            if (s("hotelPricesEnabled")) {
                var r = s("pixelContext"),
                    o = r.servlet;
                if (r) {
                    var n, i = [];
                    "HotelHighlight" === o || "Hotel_Review" === o || "MobileHotel_Review" === o ? n = [r.curLocId.toString()] || "" : (n = r.locIds || "", n = n.split(",").slice(0, k));
                    for (var l = 0; l < n.length; l++)
                        if (n[l]) {
                            var a = 0;
                            e()
                        } r.locPrices = i.join(",")
                }
            } else t = !0;
            return t
        },
        h = function() {
            return !!E() && (y(), !0)
        };
    a.loadMonikerForHotelPrices = function() {
        if (s("hotelPricesEnabled")) {
            var e = 3,
                t = function() {
                    !h() && e-- && setTimeout(t, 1e3)
                };
            t()
        }
    }, a.loadMonikers = function(e) {
        try {
            if (!s("pixelsEnabled")) return null;
            e = e || {}, e.pixelType = "PAGEVIEW", !s("pixelContext") || "HotelBookingRoomSelectionHtml" != s("pixelContext").servlet && "MobileHotelBookingRoomSelection" != s("pixelContext").servlet || (e.pixelType = "IB_CLICK", a._addIBPageViewContext(e)), s("pixelContext") && "ShoppingCart" == s("pixelContext").servlet && (e.attractionShoppingCartTotalPriceUSD = ta.retrieve("shoppingCartEstimatedTotalPriceUSD"));
            var t = a._loadMonikers(e);
            return s("offerViewPixelsEnabled") && b(), s("cacheMobileClickoutResponse") && (e.pixelType = "CLICKOUT", a._cacheClickoutMonikers(e)), t
        } catch (t) {
            r.error(t, "ads.loadMonikers", null, {
                context: e
            })
        }
        return null
    }, a.loadMonikerForEnterDates = function(e) {
        try {
            if (!s("pixelsEnabled")) return null;
            o.retrieve(c) || (o.store(c, !0), E(), e = e || {}, e.pixelType = "ENTER_DATES", setTimeout(a._loadMonikers.bind(null, e), 2e3))
        } catch (e) {}
    };
    var y = function(e) {
            try {
                if (!s("hotelPricesEnabled")) return null;
                o.retrieve(d) || (o.store(d, !0), a._loadMonikersForPixelType(e, "HAC_PRICES_LOADED"))
            } catch (e) {}
        },
        P = null,
        g = function(e) {
            try {
                M || (M = !0, a._loadMonikersForPixelType(e, "OFFER_VIEW"), P && l.off("page-changes-pending", P))
            } catch (e) {}
        },
        b = function(e) {
            if (!M) {
                P || (P = function(t, r) {
                    b(e)
                }, l.on("page-changes-pending", P));
                var t = document.body.querySelectorAll(f);
                t && i.doIfElementIsVisible(t, g, [e], 0)
            }
        };
    return a.loadClickoutMonikers = function(e) {
        try {
            return s("pixelsEnabled") && s("clickoutPixelsEnabled") ? a._cachedClickoutMonikerTextArr ? a._appendMonikersIFrameText(a._cachedClickoutMonikerTextArr, e[C] || "") : (e = e || {}, e.pixelType = "CLICKOUT", a._loadMonikers(e)) : null
        } catch (t) {
            r.error(t, "ads.loadClickoutMonikers", null, {
                context: e
            })
        }
        return null
    }, a.loadLightboxMonikers = function(e, t) {
        try {
            if (!s("pixelsEnabled")) return null;
            e = e || {}, e.pixelType = "LIGHTBOX_CLICK";
            var o = a._mergeContexts(e, t),
                n = a._loadMonikers(o);
            return n
        } catch (t) {
            r.error(t, "ads.loadLightboxMonikers", null, {
                context: e
            })
        }
        return null
    }, a.loadLightboxClickoutMonikers = function(e) {
        try {
            return s("pixelsEnabled") && s("clickoutPixelsEnabled") ? (e = e || {}, e.pixelType = "LIGHTBOX_CLICKOUT", a._loadMonikers(e)) : null
        } catch (t) {
            r.error(t, "ads.loadLightboxClickoutMonikers", null, {
                context: e
            })
        }
        return null
    }, a.loadIBClickMonikers = function(e) {
        if (p) return null;
        var t = a._loadMonikersForPixelType(e, "IB_CLICK");
        return p = !0, t
    }, a.loadIBRoomSelectMonikers = function(e) {
        return a._loadMonikersForPixelType(e, "IB_ROOM_SELECT")
    }, a.loadIBConfirmMonikers = function(e) {
        return a._loadMonikersForPixelType(e, "IB_CONFIRM")
    }, a.loadVRConfirmMonikers = function(e) {
        return a._loadMonikersForPixelType(e, "VR_CONFIRM")
    }, a.loadFlightsMetaMonikers = function(e) {
        return null != a._loadMonikersForPixelType(e, "FLIGHTS_META") ? a._loadMonikersForPixelType(e, "LIGHTBOX_CLICKOUT") : null
    }, a.loadVacationPackageMetaMonikers = function(e) {
        return a._loadMonikersForPixelType(e, "PACKAGE_META")
    }, a.loadMonikerForLCBPop = function(e) {
        return a._loadMonikersForPixelType(e, "LCB_POP")
    }, a.loadMonikerForFlightsMetaLightbox = function(e) {
        return a._loadMonikersForPixelType(e, "LIGHTBOX_CLICK")
    }, a.loadMonikerForFlightSearch = function(e) {
        return a._loadMonikersForPixelType(e, "SEARCH")
    }, a.loadMonikerForCruiseMeta = function(e) {
        return a._loadMonikersForPixelType(e, "CRUISE_META")
    }, a.loadMonikerForRestaurantsProductConversion = function(e) {
        return a._loadMonikersForPixelType(e, "RESTAURANTS_PRODUCT_CONVERSION")
    }, a.loadMonikerForMemberRegistrationForm = function(e) {
        return a._loadMonikersForPixelType(e, "MEMBER_REGISTRATION_FORM")
    }, a.loadMonikerForCreateMemberSuccessful = function(e) {
        return a._loadMonikersForPixelType(e, "MEMBER_CREATE")
    }, a._loadMonikersForPixelType = function(e, t) {
        try {
            return s("pixelsEnabled") && s("ibPixelsEnabled") ? (e = e || {}, e.pixelType = t, a._loadMonikers(e)) : null
        } catch (t) {
            r.error(t, "loadMonikers for pixelType, ", null, {
                context: e
            })
        }
        return null
    }, a._cacheClickoutMonikers = function(e) {
        var t = s("pixelContext"),
            r = a._mergeContexts(t, e),
            o = a._buildPixelUrl(r);
        if (o) {
            o += "&reportOnly=true&jsReplace=" + x;
            var n = new XMLHttpRequest;
            n.open("GET", o, !0), n.onreadystatechange = function() {
                4 == this.readyState && (a._cachedClickoutMonikerTextArr = this.response.split(_))
            }, n.send()
        }
    }, a._addIBPageViewContext = function(e) {
        document.getElementById("roomList") && (e.lowestPrice = document.getElementById("roomList").dataset.lowestPrice), document.getElementById("roomInfoContainer") && (e.lowestPrice = document.getElementById("roomInfoContainer").dataset.lowestPrice)
    }, a._buildPixelUrl = function(e) {
        if (!s("pixelServlet")) return r.error(null, "ads._buildPixelUrl: remarketing.pixelServlet not set"), null;
        var t = s("pixelList");
        if (!t) return null;
        var o = "/" + s("pixelServlet") + "?pixelList=" + t;
        for (var n in e) e.hasOwnProperty(n) && (o += "&" + n + "=" + e[n]);
        return ta.uid && (o += "&puid=" + ta.uid), o
    }, a._appendMonikersIFrame = function(e, t) {
        var r = document.createElement("iframe");
        return r.setAttribute("id", t || "Monikers"), r.setAttribute("style", "border:none; position:absolute; bottom:0; right:0"), r.setAttribute("width", "1"), r.setAttribute("height", "1"), r.setAttribute("src", e), document.body.appendChild(r), r
    }, a._appendMonikersIFrameText = function(e, t) {
        var r = document.createElement("iframe");
        r.setAttribute("id", "Monikers"), r.setAttribute("style", "border:none; position:absolute; bottom:0; right:0"), r.setAttribute("width", "1"), r.setAttribute("height", "1"), document.body.appendChild(r);
        var o = r.contentDocument || r.contentWindow.document;
        o.open().write(e[0]);
        for (var n = 1; n < e.length; n++) o.write(t), o.write(e[n]);
        return o.close(), r
    }, a._mergeContexts = function(e, t) {
        if (!e) return t;
        if (!t) return e;
        var r, o = {};
        for (r in e) e.hasOwnProperty(r) && (o[r] = e[r]);
        for (r in t) t.hasOwnProperty(r) && (o[r] = t[r]);
        return o
    }, a._loadMonikers = function(e) {
        var t, o;
        try {
            t = s("pixelContext"), o = a._mergeContexts(t, e);
            var n = a._buildPixelUrl(o);
            return n ? a._appendMonikersIFrame(n, u[o.pixelType]) : null
        } catch (o) {
            r.error(o, "ads._loadMonikers", null, {
                pixelContext: t,
                extraContext: e
            })
        }
        return null
    }, t.exportTo(a, "ta.common.ads"), a
});
define("mobile/lite/image-loader", ["utils/throttle", "vanillajs"], function(t) {
    "use strict";

    function e(e, n) {
        n = n || document, c = e || 0;
        var i = Array.prototype.filter.call(n.querySelectorAll("[" + u + "]"), r());
        if (0 != i.length) {
            var o = t(function(t) {
                i = i.filter(r()), 0 == i.length && (window.removeEventListener("scroll", o), window.removeEventListener("resize", o))
            }, 200);
            window.addEventListener("scroll", o), window.addEventListener("resize", o)
        }
    }

    function r() {
        return function(t) {
            if (!document.body.contains(t)) return !1;
            try {
                if (!i(t)) return !0
            } catch (t) {
                return !1
            }
            var e = t.getAttribute(u);
            if (e) return "IMG" === t.tagName ? t.src = e : t.style.backgroundImage = "url(" + e + ")", t.removeAttribute(u), !1;
            var r = t.getAttribute(l);
            return r && "IMG" === t.tagName && (t.srcset = r, t.removeAttribute(l)), !0
        }
    }

    function n(t) {
        t = t || document;
        var e = t.querySelectorAll("[" + u + "]");
        Array.prototype.filter.call(e, r())
    }

    function i(t) {
        var e = t.getBoundingClientRect();
        return e.width > 0 && e.height > 0 && e.top + c >= 0 && e.top - c <= window.innerHeight
    }

    function o() {
        return function(t) {
            var e = t.getAttribute(u);
            return !e || ("IMG" === t.tagName ? t.src = e : t.style.backgroundImage = "url(" + e + ")", t.removeAttribute(u), !1)
        }
    }

    function a(t) {
        t = t || document;
        var e = t.querySelectorAll("[" + u + "]");
        Array.prototype.filter.call(e, o())
    }
    var u = "data-lazyurl",
        l = "data-lazyset",
        c = 0;
    return {
        init: e,
        demandLoadImages: n,
        forceLoadImages: a
    }
});
define("ta/util/LocalStorage", ["vanillajs", "ns-exporter", "ta/Core/TA.LocalStorage", "ta/util/SessionStorage"], function(e, t, o, a) {
    "use strict";
    var n = {
        canUseLocalStore: function() {
            return o.enabled
        },
        canUseSessionStore: function() {
            return a.canUseSessionStore()
        }
    };
    return t.exportTo(n, "ta.util.localstorage"), n
});
define("post_rollup_globals_shim", ["page-model", "ns-exporter", "common/trackingStreams", "ta/registration/RegEvents"], function(e, r, t, i) {
    var n = e.session;
    i.on("success", function() {
        e.session.loggedIn = !0
    });
    var o = {
        uid: n.uid,
        userLoggedIn: n.loggedIn,
        userSecurelyLoggedIn: n.securelyLoggedIn
    };
    r.exportTo(o, "ta");
    try {
        var s = XMLHttpRequest.prototype,
            u = s.send;
        s.send = function(e) {
            try {
                var r = new RegExp("^(/[^/]|(http(s)?:)?//" + window.location.hostname + ")");
                if (this._url && r.test(this._url)) {
                    var t = n.uid;
                    if (require.defined("redux-init")) {
                        var i = require("redux-init");
                        i && i.tracking && i.tracking.uid && (t = i.tracking.uid)
                    }
                    this.setRequestHeader("X-Puid", t)
                }
            } catch (e) {}
            u.call(this, e)
        };
        var a = s.open;
        s.open = function(e, r) {
            return this._url = r, a.apply(this, arguments)
        }
    } catch (e) {
        t.error(e, "Error intercepting AJAX for tracking")
    }
});
define("ta/Core/TA.PageVisibility", ["vanillajs"], function(e) {
    "use strict";

    function n() {
        a = !1;
        for (var e in s) s.hasOwnProperty(e) && s[e]()
    }

    function t() {
        a = !0;
        for (var e in f) f.hasOwnProperty(e) && f[e]()
    }

    function d() {
        var e = document[c] ? f : s;
        for (var n in e) e.hasOwnProperty(n) && e[n]()
    }

    function i() {
        "undefined" == typeof document[c] ? document.addEventListener ? (document.addEventListener("focus", n, !1), document.addEventListener("blur", t, !1)) : (document.attachEvent("onfocus", n), document.attachEvent("onblur", t)) : document.addEventListener(r, d), m = !0
    }

    function o() {
        "undefined" == typeof document[c] ? document.removeEventListener ? (document.removeEventListener("focus", n, !1), document.removeEventListener("blur", t, !1)) : (document.detachEvent("onfocus", n), document.detachEvent("onblur", t)) : document.removeEventListener(r, d), a = !1, m = !1
    }

    function u(e, n) {
        var t = e.indexOf(n);
        return t >= 0 ? e.splice(t, 1) : null
    }
    var c, r, f = [],
        s = [],
        m = !1,
        a = !1;
    return "undefined" != typeof document.hidden ? (c = "hidden", r = "visibilitychange") : "undefined" != typeof document.mozHidden ? (c = "mozHidden", r = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (c = "msHidden", r = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (c = "webkitHidden", r = "webkitvisibilitychange"), {
        addFocusListener: function(e) {
            s.push(e), m || i()
        },
        addBlurListener: function(e) {
            f.push(e), m || i()
        },
        removeFocusListener: function(e) {
            e ? u(s, e) : s.length = 0, 0 === s.length && 0 === f.length && o()
        },
        removeBlurListener: function(e) {
            e ? u(f, e) : f.length = 0, 0 === s.length && 0 === f.length && o()
        },
        hidden: function() {
            return "undefined" != typeof document.hidden ? document.hidden : a
        }
    }
});
define("utils/bounceRateUtils", ["ta/Core/TA.PageVisibility", "common/trackingStreams", "ta/Core/TA.LocalStorage", "ta/util/SessionStorage", "page-model"], function(e, t, n, r, a) {
    "use strict";

    function o(t) {
        if (t && t.length && n.canUseSession() && r.canUseSessionStore()) {
            w = t;
            var o = c(t),
                f = a.session.hasReferral,
                b = f && a.session.isExternalReferral,
                j = !window.performance || !performance.navigation || 0 === performance.navigation.type,
                v = !f && j;
            if (v || b || !o) i(t), s(t, 0);
            else if (!O(w)) {
                var d = r.getObject(S);
                null !== d && 0 !== d || (d = Date.now() - r.getObject(m)), r.setObject(m, Date.now()), s(t, d)
            }
            O(w) || (e.addFocusListener(l), e.addBlurListener(g), n.onSessionStorageChange(u))
        }
    }

    function i(e) {
        r.setObject(d, v()), r.setObject(m, Date.now()), r.setObject(S, 0);
        for (var t = 0; t < e.length; t++) r.setObject(j(e[t]), !1)
    }

    function c(e) {
        for (var t = 0; t < e.length; t++)
            if (null === r.getObject(j(e[t]))) return !1;
        return null !== r.getObject(d) && null !== r.getObject(m) && null !== r.getObject(S)
    }

    function s(t, n) {
        if (!e.hidden())
            for (var a = 0; a < t.length; a++) {
                var o = t[a],
                    i = r.getObject(j(o));
                i || b(o, n)
            }
    }

    function u(e) {
        if (e && e.newValue && !O(w)) {
            try {
                var n = JSON.parse(e.newValue)
            } catch (e) {
                t.error(e, "bounceRateUtils._receiveLandingInfo: error parsing json from local session storage")
            }
            var a = n && n[h],
                o = a && a[d],
                i = r.getObject(d);
            if (o && i && o === i)
                for (var c in a) c !== d && a.hasOwnProperty(c) && r.setObject(c, a[c])
        }
    }

    function f(e, t) {
        var a = {};
        a[d] = r.getObject(d), a[e] = t, n.setSessionKey(h, a), n.removeSessionKey(h)
    }

    function l() {
        O(w) || (r.setObject(m, Date.now()), s(w, r.getObject(S)))
    }

    function g() {
        if (!O(w)) {
            for (var e = 0; e < p.length; e++) clearTimeout(p[e]);
            p = [];
            var t = r.getObject(m),
                n = r.getObject(S);
            if (null !== t && null !== n) {
                var a = n + (Date.now() - t);
                r.setObject(S, a), f(S, a)
            }
        }
    }

    function b(n, a) {
        var o = setTimeout(function() {
            if (!e.hidden()) {
                var o = j(n),
                    i = r.getObject(o),
                    c = r.getObject(m),
                    s = (a + (Date.now() - c)) / 1e3;
                i || (t.trackEvent("landingBounceRate", n + "s", "actualTime : " + s + "s"), r.setObject(o, !0), f(o, !0))
            }
        }, 1e3 * n - a);
        p.push(o)
    }

    function O(e) {
        for (var t = 0; t < e.length; t++)
            if (!r.getObject(j(e[t]))) return !1;
        return !0
    }

    function j(e) {
        var t = "brHasSentTimeRecord";
        return t + e
    }

    function v() {
        return Date.now() + Math.floor(1e3 * Math.random()).toString()
    }
    var d = "brLandingId",
        m = "brStartTimeStamp",
        S = "brTimeElapsed",
        h = "brLandingInfo",
        w = [],
        p = [];
    return {
        init: o
    }
});
define("siteops/distil", [], function() {
    function t(t) {
        var e = document.createElement("script"),
            n = "https://cdn.distiltag.com/api/v1/defense/script/SMXQIXqAfX8m29tJb8E1tB2BHsWt3C6qnvqiQb4K?AYAH_P1=" + t;
        e.type = "text/javascript", e.src = n, e.async = !0, document.getElementsByTagName("head")[0].appendChild(e)
    }
    return t
});
define("servlets/standardTemplateSupport", ["page-model", "mobile/lite/image-loader", "ta/Core/TA.Event", "ta/Core/TA.LocalStorage", "ta/util/LocalStorage", "ta/util/Currency", "ta/util/SessionStorage", "post_rollup_globals_shim", "utils/bounceRateUtils", "siteops/distil"], function(s, e, i, o, t, a, n, l, u, r) {
    function d() {
        i.queueForLoad(function() {
            e.init(200)
        }, "lazy load images"), s && s.session && s.session.sessionId && o.updateSessionId(s.session.sessionId), u.init([15, 30]), s && s.session && s.session.distilTag && r(s.session.ta_uuid)
    }
    return {
        footerInit: d
    }
});
define("google/authutils", ["api-mod", "lib/jquery-amd", "Logging", "ta/Core/TA.Store", "ta/util/Deferred", "ta/util/SessionStorage", "ta/util/Error", "page-model"], function(e, o, t, r, n, i, a, s) {
    "use strict";
    var c = 6e5,
        l = 40185,
        u = "googleOneTapTime",
        g = "hideGoogleOneTap",
        d = new n,
        p = s.session.pageServlet.toLowerCase().replace("mobile", ""),
        _ = function() {
            return d.resolve()
        },
        f = function(e) {
            d.promise().success(e)
        },
        m = function(e, o, t, r) {
            var i = new n;
            if (!v()) return i.reject();
            if (r) return require(["trjs!ta/Core/TA.Record"], function(e) {
                e.trackEventOnPage("google_onetap", "google_onetap_control", "control_" + p)
            }), i.reject();
            var s = e.hint({
                supportedAuthMethods: [o],
                supportedIdTokenProviders: [{
                    uri: o,
                    clientId: t
                }],
                context: "signIn"
            });
            return require(["trjs!ta/Core/TA.Record"], function(e) {
                e.trackEventOnPage("google_onetap", "google_onetap_requested", "requested_" + p, l)
            }), null == s ? i.reject() : (s.then(function(e) {
                require(["trjs!ta/Core/TA.Record"], function(e) {
                    e.trackEventOnPage("google_onetap", "google_onetap_selected", "selected_" + p, l)
                });
                var o = window.location.pathname,
                    t = "/RegistrationController?flow=GOOGLE_ONETAP&pid=" + l + "&requireSecure=true&forceDesktop=false&fullscreen=true&returnTo=" + o;
                e.idToken && (t = t + "&google_id_token=" + e.idToken), window.location = t, i.resolve()
            })["catch"](function(e) {
                switch (e.type) {
                    case "userCanceled":
                        return document.cookie = g + "=1;domain=" + cookieDomain, void require(["trjs!ta/Core/TA.Record"], function(e) {
                            e.trackEventOnPage("google_onetap", "google_onetap_closed", "closed_" + p, l)
                        });
                    case "noCredentialsAvailable":
                        return;
                    case "requestFailed":
                    case "operationCanceled":
                    case "illegalConcurrentRequest":
                    case "initializationError":
                    case "configurationError":
                    default:
                        return require(["trjs!ta/Core/TA.Record"], function(e) {
                            e.trackEventOnPage("google_onetap", "google_onetap_unknown_error", "unknown_error_" + p, l)
                        }), void a.record(null, "Unknown error processing Google onetap hint request - type, message: " + e.type + ", " + e.message, null, {}, "WARN")
                }
            }), i.promise())
        },
        v = function() {
            if (i.canUseSessionStore()) try {
                var e = (new Date).getTime(),
                    o = sessionStorage.getItem(u);
                return null == o ? (sessionStorage.setItem(u, e), !0) : (o = parseInt(o), e - o < c ? (t.info("Skipping Google onetap, tried too recently"), !1) : (sessionStorage.setItem(u, e), !0))
            } catch (e) {
                a.record(null, "Error storing Google onetap attempt: " + e)
            }
            return !0
        };
    return {
        init: _,
        sendHintRequest: m,
        queueForInit: f
    }
});