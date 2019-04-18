var ABC = ABC || {};
ABC.Version = "DEVELOPMENT_VERSION";
var ABC = ABC || {};
ABC.PageOptions = function(a) {
    "use strict";

    function b(a) {
        return "undefined" != typeof d[a] ? d[a] : void 0
    }

    function c() {
        "undefined" != typeof ABCPagePrefs && (d = a.extend({}, d, ABCPagePrefs))
    }
    var d = {
        allowMultipleJQuery: !0,
        autoInitNav: !0
    };
    return c(), {
        getPref: b,
        version: "1.0.0"
    }
}(window.jQuery);
var ABC = ABC || {};
ABC.Platforms = function(a, b, c) {
    "use strict";

    function d(a) {
        switch (a) {
            case A.NOTSPECIFIED:
            case A.STANDARD:
            case A.MOBILE:
            case A.TABLET:
                return a
        }
        return null
    }

    function e(b) {
        for (var c in A)
            if (A.hasOwnProperty(c) && A[c].accept && a.inArray(b, A[c].accept) > -1) return A[c];
        return A.NOTSPECIFIED
    }

    function f() {
        return e(ABC.Storage.Cookies.get(v))
    }

    function g() {
        return e(ABC.Storage.Cookies.get(u))
    }

    function h(a) {
        if (a = d(a), a && a.value) return ABC.Storage.Cookies.set(u, a.value, t), a;
        throw new Error("Form factor invalid or not specified; cookie not set")
    }

    function i() {
        return ABC.Storage.Cookies.remove(u, t)
    }

    function j() {
        var a, c, d = b.location.search.match(new RegExp("(?:\\?|&)" + w + "=" + x + "(?:&|$)"));
        return d && (a = e(d[1]), c = e(d[2]), a.value && c.value) ? [a, c] : null
    }

    function k(e) {
        if (e = d(e), e && e.id) return o = o || a(c.body), o.hasClass(y + e.id) ? !0 : e === A.MOBILE ? (q = q || b.location.hostname, ".abc.net.au" === q.substr(-11) && "mobile." === q.substr(0, 7)) : !1;
        throw new Error("Form factor invalid or not specified")
    }

    function l() {
        if (!r) {
            r = [], o = o || a(c.body);
            for (var b in A) A.hasOwnProperty(b) && A[b].id && o.hasClass(y + A[b].id) && r.push(A[b])
        }
        return r
    }

    function m(b, c) {
        if (b = d(b), !b || !b.id) throw new Error("Form factor invalid or not specified");
        var e = a("head link[" + z + "='" + b.id + "']");
        return 1 === e.length ? e.attr("href") : c !== !1 ? (s || (s = {}, p = p || a("head link[" + z + "]"), p.each(function() {
            var b = a(this);
            a.each(b.attr(z).split(","), function(c, d) {
                s[a.trim(d)] = b.attr("href")
            })
        })), s[b.id]) : void 0
    }

    function n(b, c) {
        var e = m(b, l().length < 2);
        if (e) {
            c = d(c) || (b === A.MOBILE ? A.STANDARD : A.MOBILE);
            var f = a("<a/>", {
                "class": y + b.id + " switch",
                href: e
            }).text("Change to " + b.name.toLowerCase() + " view");
            return f[0].search && (f[0].search += "&"), f[0].search += w + "=" + c.value + b.value, f.click(function() {
                h(b)
            }), f
        }
    }
    var o, p, q, r, s, t = {
            expires: 3,
            domain: ".abc.net.au",
            path: "/"
        },
        u = "ABC_PP",
        v = "ABC_FF",
        w = "pfm",
        x = "(\\w)(\\w)",
        y = "platform-",
        z = "data-abc-platform",
        A = {
            NOTSPECIFIED: {
                value: null,
                name: "Not specified"
            },
            STANDARD: {
                value: "s",
                name: "Standard",
                id: "standard",
                accept: ["s", "desktop"]
            },
            MOBILE: {
                value: "m",
                name: "Mobile",
                id: "mobile",
                accept: ["m", "mobile"]
            },
            TABLET: {
                value: null,
                name: "Tablet",
                accept: ["tablet"]
            }
        };
    return {
        FORMFACTOR: A,
        getDetected: f,
        getPref: g,
        setPref: h,
        removePref: i,
        getFlow: j,
        isPage: k,
        getPageSupport: l,
        getPageAlternate: m,
        getPageSwitch: n,
        version: "1.1.0"
    }
}(window.jQuery, window, document);
var ABC = ABC || {};
ABC.ID = function(a) {
    "use strict";

    function b(a) {
        var b = RegExp("[?&]" + a + "=([^&]*)").exec(c().search);
        return b && decodeURIComponent(b[1].replace(/\+/g, " "))
    }

    function c() {
        return k || window.location
    }

    function d(b) {
        return this.siteEnabled = !0, "object" != typeof b || null === b ? (this.uri = a.extend({}, p), void(j = void 0)) : (b.user && !a.isEmptyObject(b.user) && (j = b.user, l = "cas-client", a(ABC.ID).trigger("changedUserDetails")), void(b.uri && !a.isEmptyObject(b.uri) && (this.uri = a.extend({}, p, b.uri))))
    }

    function e() {
        if (j) switch (l) {
            case "cas-client":
                return "probably";
            default:
                return "maybe"
        }
        return ""
    }

    function f() {
        return j
    }

    function g() {
        var a = b("verified");
        return null !== a && "false" == a ? !0 : !1
    }

    function h() {
        var a = b("verified");
        return null !== a && "true" == a ? !0 : !1
    }

    function i(a) {
        k = a
    }
    var j, k, l, m, n = "myabcid-secure.abc.net.au",
        o = encodeURIComponent(window.location.href),
        p = {
            rootDomain: n,
            signIn: "https://" + n + "/cas/login?service=" + o,
            signOut: "https://" + n + "/cas/logout?service=" + o,
            register: "https://" + n + "/userservice/registration/registration.htm?client=" + o,
            manageAccount: "https://" + n + "/usermanagement/editUserDetails.htm?client=" + o
        },
        q = a.extend({}, p);
    return {
        setup: d,
        isSignedIn: e,
        getUser: f,
        hasJustRegisteredButNotConfirmed: g,
        hasJustConfirmed: h,
        siteEnabled: m,
        uri: q,
        setCurrentLocation: i
    }
}(jQuery);
var ABC = ABC || {};
ABC.Storage = ABC.Storage || {}, ABC.Storage.Cookies = function(a, b) {
    /*! end jQuery Cookie Plugin */
    function c(a) {
        return a && 0 === a.indexOf("ABC.") ? a.replace(/\./g, "_") : a
    }

    function d(b, d, e, f) {
        var g = !!a.cookie.raw,
            h = !!a.cookie.json;
        a.cookie.raw = !1, a.cookie.json = f === !0;
        var i = a.cookie(c(b), d, e);
        return a.cookie.raw = g, a.cookie.json = h, i
    }

    function e(a, b, c) {
        return d(a, b, c, !0)
    }

    function f(b, d) {
        return a.removeCookie(c(b), d)
    }
    var g = a;
    /*!
     * jQuery Cookie Plugin v1.3.1
     * https://github.com/carhartl/jquery-cookie
     *
     * Copyright 2013 Klaus Hartl
     * Released under the MIT license
     */
    return function(a, b, c) {
        function d(a) {
            return a
        }

        function e(a) {
            return f(decodeURIComponent(a.replace(h, " ")))
        }

        function f(a) {
            return 0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), a
        }

        function g(a) {
            return i.json ? JSON.parse(a) : a
        }
        var h = /\+/g,
            i = a.cookie = function(f, h, j) {
                if (h !== c) {
                    if (j = a.extend({}, i.defaults, j), null === h && (j.expires = -1), "number" == typeof j.expires) {
                        var k = j.expires,
                            l = j.expires = new Date;
                        l.setDate(l.getDate() + k)
                    }
                    return h = i.json ? JSON.stringify(h) : String(h), b.cookie = [encodeURIComponent(f), "=", i.raw ? h : encodeURIComponent(h), j.expires ? "; expires=" + j.expires.toUTCString() : "", j.path ? "; path=" + j.path : "", j.domain ? "; domain=" + j.domain : "", j.secure ? "; secure" : ""].join("")
                }
                for (var m = i.raw ? d : e, n = b.cookie.split("; "), o = f ? null : {}, p = 0, q = n.length; q > p; p++) {
                    var r = n[p].split("="),
                        s = m(r.shift()),
                        t = m(r.join("="));
                    if (f && f === s) {
                        o = g(t);
                        break
                    }
                    f || (o[s] = g(t))
                }
                return o
            };
        i.defaults = {}, a.removeCookie = function(b, c) {
            return null !== a.cookie(b) ? (a.cookie(b, null, c), !0) : !1
        }
    }(g, b), {
        get: d,
        set: d,
        getJson: e,
        setJson: e,
        remove: f
    }
}(jQuery, document);
var ABC = ABC || {};
ABC.Location = function(a) {
    "use strict";

    function b(a) {
        if ("string" == typeof a)
            for (var b in k)
                if (k.hasOwnProperty(b) && a.toLowerCase() === k[b].abbr.toLowerCase()) return k[b];
        return !1
    }

    function c() {
        var c = ABC.Storage.Cookies.get(i);
        if (c === j) return a.extend(!0, {}, l, {
            optout: !0
        });
        if (c) {
            var d = b(c);
            if (d) return a.extend(!0, {}, l, {
                geo: {
                    stateAbbr: d.abbr,
                    stateTitle: d.title,
                    countryCode: "AU",
                    countryTitle: "Australia"
                }
            })
        }
        return null
    }

    function d(a) {
        if (a = b(a)) return ABC.Storage.Cookies.set(i, a.abbr.toLowerCase(), g), a.abbr;
        throw new Error("State/territory invalid or not specified; cookie not set")
    }

    function e() {
        ABC.Storage.Cookies.set(i, j, g)
    }

    function f() {
        var c, d = ABC.Storage.Cookies.get(h);
        if (d) {
            if ("int" === d) c = {
                countryCode: "ZZ",
                countryTitle: null
            };
            else {
                var e = b(d);
                e && (c = {
                    stateAbbr: e.abbr,
                    stateTitle: e.title,
                    countryCode: "AU",
                    countryTitle: "Australia"
                })
            }
            if (c) return c.source = "A", a.extend(!0, {}, l, {
                geo: c
            })
        }
        return null
    }
    var g = {
            expires: 365,
            domain: ".abc.net.au",
            path: "/"
        },
        h = "ABC_LD",
        i = "ABC_LP",
        j = "na",
        k = {
            ACT: {
                abbr: "ACT",
                title: "Australian Capital Territory"
            },
            NSW: {
                abbr: "NSW",
                title: "New South Wales"
            },
            NT: {
                abbr: "NT",
                title: "Northern Territory"
            },
            QLD: {
                abbr: "Qld",
                title: "Queensland"
            },
            SA: {
                abbr: "SA",
                title: "South Australia"
            },
            TAS: {
                abbr: "Tas",
                title: "Tasmania"
            },
            VIC: {
                abbr: "Vic",
                title: "Victoria"
            },
            WA: {
                abbr: "WA",
                title: "Western Australia"
            }
        },
        l = {
            geo: {}
        };
    return {
        AU_STATE: k,
        getDetected: f,
        getPref: c,
        setPrefState: d,
        removePref: e,
        version: "1.0.0"
    }
}(window.jQuery);
var ABC = ABC || {};
ABC.Nav = function(a, b, c) {
    "use strict";

    function d(a, c) {
        return c = b.extend({
            contents: null,
            expandText: "Expand",
            collapseText: "Collapse",
            collapseTextBottom: null,
            controlOthers: !1,
            duration: 300
        }, c), b(a).each(function() {
            function a() {
                h.stop(!0), f.removeClass("collapsed").addClass("expanding"), i.children("span.text").html(c.collapseText), c.controlOthers && f.siblings(".expanded, .expanding").trigger("collapse.ABC"), h.slideDown(k), i.addClass("active"), i.children("img.icon").attr("src", o + i.children("img.icon").attr("data-hover")), g = !1
            }

            function d() {
                h.stop(!0), f.removeClass("expanded").addClass("collapsing"), i.children("span.text").html(c.expandText), h.attr("aria-expanded", "false").slideUp(l), g ? i.children("img.icon").attr("src", o + i.children("img.icon").attr("data-hover")) : (i.removeClass("active"), i.children("img.icon").attr("src", o + i.children("img.icon").attr("data-src"))), g = !1
            }

            function e() {
                f.hasClass("expanded") || f.hasClass("expanding") ? f.trigger("collapse") : f.trigger("expand")
            }
            var f = b(this),
                g = !1,
                h = f.find(c.contents);
            if (1 === h.length) {
                var i = b(this).find("a.controller"),
                    j = b("<a/>", {
                        "class": "controller",
                        href: "javascript:;"
                    }),
                    k = {
                        duration: c.duration,
                        always: function() {
                            f.removeClass("expanding").addClass("expanded"), h.removeAttr("style").attr("aria-expanded", "true")
                        }
                    },
                    l = {
                        duration: c.duration,
                        always: function() {
                            f.removeClass("collapsing").addClass("collapsed"), h.removeAttr("style")
                        }
                    };
                h[0].id && i.add(j).attr("aria-controls", h[0].id), i.children("span.text").html(c.expandText);
                var m = "click";
                i.on(m, function(a) {
                    a.preventDefault(), g = !0, f.trigger("toggle")
                }), j.html(c.collapseTextBottom || c.collapseText).attr("role", "menuitem").on("click", function(a) {
                    a.preventDefault(), f.focus(), f.trigger("collapse")
                }), f.addClass("collapsed").on({
                    "expand.ABC": a,
                    "collapse.ABC": d,
                    "toggle.ABC": e
                }), h.before(i).append(j).attr("aria-expanded", "false")
            }
        })
    }

    function e(c, d, e) {
        var f = d.name + " view not yet available\nView " + e.name.toLowerCase() + " page?";
        return b(c).each(function() {
            b(this).click(function() {
                return a.confirm(f) ? void 0 : !1
            })
        })
    }

    function f() {
        n.fallback = ABC.Platforms.FORMFACTOR.STANDARD, ABC.Platforms.isPage(ABC.Platforms.FORMFACTOR.MOBILE) ? ABC.Platforms.getPageSupport().length > 1 ? (ABC.Platforms.getDetected() === ABC.Platforms.FORMFACTOR.MOBILE ? n.current = ABC.Platforms.FORMFACTOR.MOBILE : n.current = ABC.Platforms.FORMFACTOR.STANDARD, n.alternate = ABC.Platforms.FORMFACTOR.MOBILE) : (n.current = ABC.Platforms.FORMFACTOR.MOBILE, n.alternate = ABC.Platforms.FORMFACTOR.STANDARD) : (n.current = ABC.Platforms.FORMFACTOR.STANDARD, n.alternate = ABC.Platforms.FORMFACTOR.MOBILE)
    }

    function g() {}

    function h() {
        b("#abcHeader .sites .controller").show();
        var a = m.children("div.sites"),
            c = a.children("div.menu");
        c.append(ABC.Platforms.getPageSwitch(n.alternate, n.current)), d(a, {
            contents: c,
            expandText: "<span>Open</span> Sites <span>menu - use enter key to open and tab key to navigate</span>",
            collapseText: "<span>Close</span> Sites <span>menu - use enter key to close or tab to navigate</span>",
            collapseTextBottom: "Close menu",
            controlOthers: !0
        });
        var e = new Image;
        e.src = s, b("#abcHeader .sites a.controller").hover(function() {
            b(this).addClass("active"), b(this).children("img.icon").attr("src", s)
        }, function() {
            b(this).parent().hasClass("expanded") || b(this).parent().hasClass("expanding") || (b(this).removeClass("active"), b(this).children("img.icon").attr("src", r))
        }), b("#abcHeader .sites a.controller").focus(function() {
            b(this).addClass("active"), b(this).children("img.icon").attr("src", s)
        }), b("#abcHeader .sites a.controller").blur(function() {
            b(this).parent().hasClass("expanded") || b(this).parent().hasClass("expanding") || (b(this).removeClass("active"), b(this).children("img.icon").attr("src", r))
        })
    }

    function i() {
        var a = new Image;
        a.src = u, b("#abcHeader a.search").hover(function() {
            b(this).addClass("active"), b(this).children("img.icon").attr("src", u)
        }, function() {
            b(this).removeClass("active"), b(this).children("img.icon").attr("src", t)
        }), b("#abcHeader a.search").focus(function() {
            b(this).addClass("active"), b(this).children("img.icon").attr("src", u)
        }), b("#abcHeader a.search").blur(function() {
            b(this).removeClass("active"), b(this).children("img.icon").attr("src", t)
        })
    }

    function j() {
        0 !== b("#abcHeader div.accounts .controller").length && (b("#abcHeader div.accounts").first().remove(), b("#abcHeader").append('<div class="accounts"><span data-src="images/icon-user-grey@1x.png" data-hover="images/icon-user-blue@1x.png"></span></div>'));
        var a = b("#abcHeader div.accounts").first();
        if (ABC.ID.isSignedIn()) {
            b('<a class="controller" href="javascript:;" aria-controls="abcNavAccounts"><span class="text"></span><img src="' + p + '" data-src="' + b("#abcHeader .accounts span").attr("data-src") + '" data-hover="' + b("#abcHeader .accounts span").attr("data-hover") + '" class="icon" alt=""/></a>').appendTo(a);
            var c = ABC.ID.getUser().username,
                e = b("<div/>", {
                    id: "abcNavAccounts",
                    "class": "menu",
                    role: "menu",
                    "aria-expanded": "false"
                }).append(b("<a/>", {
                    href: ABC.ID.uri.signOut,
                    role: "menuitem"
                }).text("Log out"), b("<a/>", {
                    href: ABC.ID.uri.manageAccount,
                    role: "menuitem"
                }).text("Manage my profile")).appendTo(a);
            d(a, {
                contents: e,
                expandText: "<span>Open</span> " + c + " <span>menu - use enter key to open and tab key to navigate</span>",
                collapseText: "<span>Close</span> " + c + " <span>menu - use enter key to close or tab key to navigate</span>",
                collapseTextBottom: "Close menu",
                controlOthers: !0
            })
        } else a.append(b("<a/>", {
            "class": "controller",
            href: ABC.ID.uri.signIn
        }).html("<span class='text'>Log In</span><img src='" + p + "' class='icon' alt=''/>")), a.insertBefore(m.find(".search").first());
        m.addClass("enabled-accounts");
        var f = new Image;
        f.src = q, b("#abcHeader .accounts a.controller").hover(function() {
            b(this).addClass("active"), b(this).children("img.icon").attr("src", q)
        }, function() {
            b(this).parent().hasClass("expanded") || b(this).parent().hasClass("expanding") || (b(this).removeClass("active"), b(this).children("img.icon").attr("src", p))
        })
    }

    function k() {
        n.current !== n.fallback && b("#abcHeader a, #abcFooter a").each(function() {
            var a = b(this),
                c = b(this).attr("data-mobile");
            "" != c ? a.attr("href", c) : e(a, n.current, n.fallback)
        })
    }

    function l() {
        f(), g(), h(), i(), k(), ABC.ID && ABC.ID.siteEnabled === !0 && j()
    }
    var m = b("#abcHeader"),
        n = (b("#abcFooter"), {}),
        o = b("#abcHeader").attr("data-resourcebase"),
        p = o + b("#abcHeader .accounts span").attr("data-src"),
        q = o + b("#abcHeader .accounts span").attr("data-hover"),
        r = b("#abcHeader .sites img").attr("src"),
        s = o + b("#abcHeader .sites img").attr("data-hover"),
        t = b("#abcHeader a.search img").attr("src"),
        u = o + b("#abcHeader .search img").attr("data-hover");
    return {
        expandCollapse: d,
        initAccount: j,
        init: l
    }
}(window, window.jQuery), $("#abcHeader").length && ABC.PageOptions.getPref("autoInitNav") === !0 && ABC.Nav.init(), ABC.PageOptions.getPref("allowMultipleJQuery") === !0 && "undefined" != typeof ABCAllowMultipleJQuery && ABCAllowMultipleJQuery === !0 && $.noConflict(!0);