(function() {
    function g(a, b, c, d) {
        return a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent ? (a["e" + b + c] = c, a[b + c] = function() {
            a["e" + b + c](a.event)
        }, a.attachEvent("on" + b, a[b + c])) : (a["on" + b] = c, !0)
    }

    function h(a, b, c) {
        return a.removeEventListener ? a.removeEventListener(b, c) : a.detachEvent ? a.detachEvent("on" + b, c) : (a["on" + b] = function() {}, !0)
    }

    function j(a, b, c) {
        var d = new Date;
        d.setMonth(d.getMonth() + 6), document.cookie = a + "=" + encodeURIComponent(b) + ";expires=" + d.toGMTString() + ";path=/;domain=" + c
    }

    function k(a) {
        var b = document.cookie.split(";"),
            c = b.length,
            d;
        a = a + "=";
        while (--c >= 0) {
            d = p(b[c]);
            if (d.indexOf(a) === 0) return decodeURIComponent(d.substring(a.length, d.length))
        }
        return ""
    }

    function l(a, b, c) {
        var d = [],
            e;
        for (var f in b) b.hasOwnProperty(f) && d.push(encodeURIComponent(f) + "=" + encodeURIComponent(b[f]));
        e = d.join("&"), j(a, e, c)
    }

    function m(a) {
        var b = k(a),
            c, d, e, f = {};
        if (!b) return null;
        c = b.split("&");
        for (e = 0; e < c.length; ++e) d = c[e].split("=", 2), f[decodeURIComponent(d[0])] = decodeURIComponent(d[1]);
        return typeof f.s == "undefined" || typeof f.m_ga == "undefined" || typeof f.c_ga == "undefined" || typeof f.m_osp == "undefined" || typeof f.c_osp == "undefined" ? null : f
    }

    function n(a, b) {
        return typeof a.hasAttribute != "undefined" ? a.hasAttribute(b) : typeof a[b] != "undefined"
    }

    function o(a, b) {
        return typeof a.getAttribute != "undefined" ? a.getAttribute(b) : typeof a[b] != "undefined" ? a[b] : null
    }

    function p(a) {
        return typeof a.trim != "undefined" ? a.trim() : a.replace(/^\s+|\s+$/g, "")
    }

    function q() {
        var d = window.location.host,
            e = r(d),
            f = t(window.location.search),
            g, h, i, j;
        i = f.getStr("utm_referrer"), i ? h = i : h = document.referrer, h == "about:blank" && (h = ""), f.hasUTMTriplet() ? g = y(f) : f.get("gclid") ? g = x(f) : h ? (j = s(h), j.domain && j.domain != d && (j.domainFamily != e || !k(a)) && (u(j) ? g = z(j) : v(j) ? g = A(j) : g = B(j))) : g = C(), g && (g.r = h, g.site = b, g.sub = c, l(a, g, "." + e))
    }

    function r(a) {
        return a.replace(/(?:.*\.)?([^\.]+\.[^\.]+)$/, "$1")
    }

    function s(a) {
        var b = /.*?(?:\:\/\/)([^\/\:]+)(?:[^\/]*)?(\/+[^\?]*)?(\?[^#]*)?.*/,
            c = a.match(b),
            d = c && c[1].toLowerCase() || "";
        return {
            domain: d,
            domainFamily: r(d),
            path: c && c[2] || "",
            query: c && c[3] || "",
            key: ""
        }
    }

    function t(a) {
        var b, c, d, e, f = {
            get: function(a) {
                return typeof this[a] != "undefined" ? this[a] : null
            },
            getStr: function(a) {
                return this.get(a) || ""
            },
            hasUTMTriplet: function() {
                return !!(this.utm_source && this.utm_medium && this.utm_campaign)
            }
        };
        if (a.length <= 1) return f;
        a.charAt(0) == "?" && (a = a.substr(1)), b = a.split("&");
        for (e = 0; e < b.length; ++e) c = b[e].split("=", 2), c.length == 2 ? d = decodeURIComponent(c[1]) : d = "", f[c[0]] = d;
        return f
    }

    function u(a) {
        for (partialDomain in e)
            if (e.hasOwnProperty(partialDomain) && a.domain.indexOf(partialDomain) > -1) return a.key = e[partialDomain], !0;
        return !1
    }

    function v(a) {
        for (partialDomain in d)
            if (d.hasOwnProperty(partialDomain) && a.domain.indexOf(partialDomain) > -1) return a.key = partialDomain, !0;
        return !1
    }

    function w(a) {
        var b = a.query,
            c, e, f, g, h;
        if (!b) return !1;
        c = d[a.key];
        if (!c) return !1;
        typeof c == "string" && (c = [c]);
        for (g = 0; g < c.length; ++g) {
            e = c[g];
            if ((h = b.indexOf("?" + e + "=")) > -1) f = b.substr(h + e.length + 2);
            else if ((h = b.indexOf("&" + e + "=")) > -1) f = b.substr(h + e.length + 2);
            else break;
            return (h = f.indexOf("&")) > -1 && (f = f.substr(0, h)), f.toLowerCase()
        }
        return !1
    }

    function x(a) {
        var b = a.get("utm_campaign") || "adwords",
            c = /branded/i.test(b) ? "ba_ose" : "pa";
        return {
            s: "google_ads",
            m_ga: "cpc",
            c_ga: b,
            m_osp: c,
            c_osp: b,
            o: "google cpc",
            id: "gclid_" + a.get("gclid")
        }
    }

    function y(a) {
        var b = a.utm_medium,
            c = a.getStr("utm_id");
        return a.utm_medium === "pa" && (a.utm_source === "bing" && /brand/i.test(a.utm_campaign) || a.utm_source === "yandex" && /_brand_/i.test(a.utm_campaign)) && (b = "ba_ose"), a.get("msclkid") && (c = "msclkid_" + a.get("msclkid")), {
            s: a.utm_source,
            m_ga: a.utm_medium,
            c_ga: a.utm_campaign,
            m_osp: b,
            c_osp: a.utm_campaign,
            o: a.getStr("utm_content"),
            t: a.getStr("utm_term"),
            id: c,
            test: a.getStr("utm_test")
        }
    }

    function z(a) {
        return {
            s: a.key,
            m_ga: "social",
            c_ga: "(social)",
            m_osp: "sm",
            c_osp: a.key + "_sm",
            o: a.path
        }
    }

    function A(a) {
        return {
            s: a.key,
            m_ga: "organic",
            c_ga: "(organic)",
            m_osp: "ose",
            c_osp: a.key + "_ose",
            t: w(a) || ""
        }
    }

    function B(a) {
        return {
            s: a.domain.replace(/^www\./, ""),
            m_ga: "referral",
            c_ga: "(referral)",
            m_osp: "roc",
            c_osp: "(referral)",
            o: a.path
        }
    }

    function C() {
        return {
            s: "(direct)",
            m_ga: "(none)",
            c_ga: "(direct)",
            m_osp: "doc",
            c_osp: "(direct)"
        }
    }

    function D(a) {
        var b, c;
        if (a == "opera_com") {
            b = window.location.pathname;
            if (/\/campaign\//.test(b)) {
                c = b.match(/^(?:\/\w{2}(?:-\w{2,3})?)?\/campaign\/([^\/]+)/);
                if (c) return c[1]
            }
        }
        return ""
    }

    function E(a) {
        return a ? a.replace(/[^\w \(\)\[\]\-\.\+@\/:%]/g, "_") : ""
    }

    function F(a) {
        return o(a, "data-event-action") || o(a, "data-action-id") || o(a, "id") || "unknown"
    }

    function G(a) {
        return a && a.site ? E(a.site) + (a.sub ? "_" + E(a.sub) : "") : b + (c ? "_" + E(c) : "")
    }

    function H() {
        var b = m(a),
            c = "_via_" + G(b);
        return b ? "utm_source=" + E(b.s) + c + "&utm_medium=" + E(b.m_osp) + "&utm_campaign=" + E(b.c_osp) + c + (b.o ? "&utm_content=" + E(b.o) : "") + (b.t ? "&utm_term=" + E(b.t) : "") + (b.id ? "&utm_id=" + E(b.id) : "") + (b.test ? "&utm_test=" + E(b.test) : "") : "utm_source=(nocookie)" + c + "&utm_medium=doc&utm_campaign=(nocookie)" + c
    }

    function I(a, b) {
        return "utm_source=" + a.source + "&utm_medium=" + a.medium + "_via_" + F(b) + "&utm_campaign=" + a.campaign + (a.content ? "&utm_content=" + a.content : "") + (a.term ? "&utm_term=" + a.term : "")
    }

    function J() {
        var b = m(a),
            c = "_via_" + G(b),
            d = window.location.search,
            e = "";
        return b ? e += "http_referrer=" + (b.r ? E(b.r) : "missing" + c) + "&utm_source=" + E(b.s) + c + "&utm_medium=" + E(b.m_osp) + "&utm_campaign=" + E(b.c_osp) + c + (b.o ? "&utm_content=" + E(b.o) : "") + (b.t ? "&utm_term=" + E(b.t) : "") + (b.id ? "&utm_id=" + E(b.id) : "") + (b.test ? "&utm_test=" + E(b.test) : "") : e += "http_referrer=missing" + c + "&utm_source=(nocookie)" + c + "&utm_medium=doc&utm_campaign=(nocookie)" + c, d && (e += "" + (d.match(/utm_fsce=true/) && !!d.match(/utm_fsce=true/).length ? "&utm_fsce=true" : d.match(/utm_fsce=false/) && !!d.match(/utm_fsce=false/).length ? "&utm_fsce=false" : "") + (d.match(/utm_defbr=true/) && !!d.match(/utm_defbr=true/).length ? "&utm_defbr=true" : d.match(/utm_defbr=false/) && !!d.match(/utm_defbr=false/).length ? "&utm_defbr=false" : "") + (b && b.test ? "" : d.match(/utm_test=ni2017/) ? "&utm_test=ni2017" : "")), e
    }

    function K() {
        var a = document.getElementsByTagName("a"),
            b = a.length,
            c = H();
        if (c)
            while (--b >= 0) M(a[b], c)
    }

    function L(a) {
        return a = a.replace(/[\(\)]/g, "").replace(/[\.-]/g, "_"), a
    }

    function M(b, c) {
        c || (c = H());
        if (/(play\.google\.com|^market:\/\/)/.test(b.href) && !n(b, "data-utm-override")) {
            /bar-promo-mini/.test(document.referrer) && (c = c.replace(/utm_source=[^&]+/, "utm_source=operauser_bannerbutton"));
            var d = "utm_content=" + E(window.location.pathname) + "_via_" + F(b);
            /utm_content=/.test(c) ? c.replace(/utm_content=[^&]+/, d) : c = c + "&" + d, b.href = b.href.replace(/referrer=[^&]+/, "referrer=" + encodeURIComponent(c))
        } else if (/itunes\.apple\.com/.test(b.href)) {
            var e = m(a),
                f = "_via_" + G(e).replace(/-/g, "_");
            /bar-promo-mini/.test(document.referrer) && (f = "_via_promobar");
            var g = "ct=" + E(e.m_osp) + "_" + E(L(e.s)) + f + "_" + L(F(b));
            b.href = b.href.replace(/ct(?:%3D|=)[^&]+/, g)
        }
    }

    function N() {
        var a = document.getElementsByTagName("a"),
            b, c, d, e, g, h = a.length,
            i, j = H(),
            l = new RegExp("^[^/]*//(?!" + window.location.host.replace(/\./g, ".") + ")(/.*)?");
        while (--h >= 0) {
            b = a[h];
            if (!b.href) continue;
            c = d = e = g = null, j && M(b, j);
            for (i = 0; i < f.length; ++i)
                if (f[i].url.test(b.href)) {
                    g = f[i].view || "";
                    break
                } if (g) {
                O(b, c, d, e, g);
                continue
            }
            l.test(b.href) && (c = "Outbound Links", e = ""), n(b, "data-event-category") && (c = o(b, "data-event-category"));
            if (!l.test(b.href) && /(computer\/thanks|download\/get).*(o(psy)?s=(windows|mac|linux))+/i.test(b.href)) {
                var m = "unknown";
                c = "Internal Links", k("opref_external") && k("opref_external").length > 0 ? m = k("opref_external") : document.referrer && document.referrer.length > 0 && (m = document.referrer), e = b.href + " [ref: " + m + "]"
            }
            c && (d = F(b), n(b, "data-event-label") && (e = o(b, "data-event-label")), e || (e = "[href]"), O(b, c, d, e, g))
        }
    }

    function O(a, b, c, d, e) {
        g(a, "click", function(f) {
            if (typeof a.className == "string" && a.className.indexOf("skip-linkfeedback") != -1) return;
            if (e) {
                if (!Q(e)) return
            } else {
                d === "[href]" && (d = a.href);
                if (!P(b, c, d)) return
            }
            f = f || window.event;
            if (f.ctrlKey || f.shiftKey || f.altKey || f.metaKey || f.button != 0 || o(a, "target") === "_blank") return;
            f.preventDefault ? f.preventDefault() : f.returnValue = !1, setTimeout(function() {
                window.location.href = a.href
            }, 100)
        }, !1)
    }

    function P(a, b, c, d) {
        return typeof ga != "undefined" ? (ga("send", "event", a, b, c, {
            nonInteraction: !!d
        }), !0) : typeof _gaq != "undefined" ? (_gaq.push(["_trackEvent", a, b, c, null, !!d]), !0) : !1
    }

    function Q(a) {
        return typeof ga != "undefined" ? (ga("send", "pageview", a), !0) : typeof _gaq != "undefined" ? (_gaq.push(["_trackPageview", a]), !0) : !1
    }
    var a = "opref",
        b = window.location.host.replace(/^www\./, "").replace(/\./g, "_"),
        c, d = {
            "360.cn": "q",
            aol: ["q", "query", "encquery"],
            ask: ["q", "yoursearch"],
            auone: "q",
            avg: "q",
            babylon: "q",
            baidu: "wd",
            baisvik: "q",
            biglobe: "s",
            bing: "q",
            comcast: "q",
            conduit: "q",
            daum: "q",
            duckduckgo: null,
            globo: "q",
            "go.mail.ru": "q",
            "images.google": "q",
            google: "q",
            incredimail: "q",
            kvasir: "q",
            lycos: "q",
            mail: "q",
            myway: "searchfor",
            naver: "query",
            onet: "qt",
            rakuten: null,
            rambler: "query",
            safehomepage: "q",
            "search-results": "q",
            "search.smt.docomo": "search_box",
            seznam: "q",
            smartshopping: "keywords",
            snapdo: "q",
            "so.com": "q",
            sogou: "query",
            startsiden: "q",
            "tut.by": "query",
            ukr: "q",
            uninstallmaster: "q",
            virgilio: "qs",
            "vi-view.com": "q",
            yahoo: "p",
            yandex: "text",
            yoursearch: "q",
            webcrawler: "q",
            webssearches: "q",
            wow: "o_q",
            zum: "query",
            live: "q"
        },
        e = {
            "blogspot.com": "blogspot",
            "cloob.com": "cloob",
            "deviantart.com": "deviantart",
            "disqus.com": "disqus",
            "facebook.com": "facebook",
            "my.opera.com": "myopera",
            "odnoklassniki.ru": "odnoklassniki",
            "plus.google.com": "google_plus",
            "plus.url.google.com": "google_plus",
            "twitter.com": "twitter",
            "vk.com": "vk",
            "vkontakte.ru": "vkontakte",
            "youtube.com": "youtube"
        },
        f = [{
            url: /(play\.google\.com|market:).+id=com\.opera\.browser\.beta/,
            view: "/v/mobile/android/beta/lead"
        }, {
            url: /(play\.google\.com|market:).+id=com\.opera\.browser\.classic/,
            view: "/v/mobile/android/classic/lead"
        }, {
            url: /(play\.google\.com|market:).+id=com\.opera\.browser/,
            view: "/v/mobile/ofa/lead"
        }, {
            url: /(play\.google\.com|market:).+id=com\.opera\.mini\.android/,
            view: "/v/mobile/android/mini/lead"
        }, {
            url: /(play\.google\.com|market:).+id=com\.opera\.mini\.native/,
            view: "/v/mobile/android/native/lead"
        }, {
            url: /(play\.google\.com|market:).+id=com\.opera\.vpn/,
            view: "/v/mobile/android/vpn/lead"
        }, {
            url: /(play\.google\.com|market:).+id=com\.opera\.android\.news/,
            view: "/v/mobile/android/feednews/lead"
        }, {
            url: /(play\.google\.com|market:).+id=com\.opera\.max\.global/,
            view: "/v/mobile/max/lead"
        }, {
            url: /itunes\.apple\.com.+\/id363729560\b/,
            view: "/v/mobile/ios/mini/lead"
        }, {
            url: /itunes\.apple\.com.+\/id674024845\b/,
            view: "/v/mobile/ios/coast/lead"
        }, {
            url: /itunes\.apple\.com.+\/id1080756781\b/,
            view: "/v/mobile/ios/vpn/lead"
        }, {
            url: /itunes\.apple\.com.+\/id1128377569\b/,
            view: "/v/mobile/ios/feednews/lead"
        }, {
            url: /windowsphone\.com\/.+\/opera-mini-beta/,
            view: "/v/mobile/windowsphone/mini/lead"
        }, {
            url: /m\.opera\.com/,
            view: "/v/mobile/featurephone/lead"
        }],
        i = function() {
            function c() {
                h(document, "DOMContentLoaded", c), h(window, "load", c);
                if (!b) {
                    b = !0;
                    for (var d = 0; d < a.length; ++d) a[d]()
                }
            }

            function d(c) {
                b ? c() : a.push(c)
            }
            var a = [],
                b = !1;
            return g(document, "DOMContentLoaded", c, !1), g(window, "load", c, !1), d
        }();
    c = D(b), getOSPReferrers = J, replaceUTMReferrer = M, googleAnalyticsDone = function() {
        K()
    }, q(), i(N)
})()