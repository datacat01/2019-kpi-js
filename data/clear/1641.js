var a, c;
"undefined" == typeof Optanon && (Optanon = OneTrust = {});
(function() {
    function S() {
        var b = t();
        return b.ConsentModel && b.ConsentModel.Name.toLowerCase() === T.IMPLIEDCONSENT
    }

    function U(b) {
        var e = [];
        for (b = 0; b < u.length; b++) Ya(u[b], ":1") && va(u[b].replace(":1", "")) && e.push(u[b].replace(":1", ""));
        b = "," + e.toString().toLowerCase() + ",";
        window.OnetrustActiveGroups = b;
        window.OptanonActiveGroups = b;
        "undefined" != typeof dataLayer ? dataLayer.constructor === Array && (dataLayer.push({
            OnetrustActiveGroups: b
        }), dataLayer.push({
            OptanonActiveGroups: b
        })) : window.dataLayer = [{
            event: "OneTrustLoaded",
            OnetrustActiveGroups: b
        }, {
            event: "OptanonLoaded",
            OptanonActiveGroups: b
        }];
        setTimeout(function() {
            var b = new CustomEvent("consent.onetrust", {
                detail: e
            });
            window.dispatchEvent(b)
        })
    }

    function Za() {
        var b = V("https://optanon.blob.core.windows.net/skins/4.6.0/default_flat_bottom_two_button_black/v2/css/optanon.css"),
            e = document.createElement("link");
        e.type = "text/css";
        e.href = b;
        e.rel = "stylesheet";
        document.getElementsByTagName("head")[0].appendChild(e);
        b = document.querySelectorAll("link");
        for (e = 0; e < b.length; e++) b[e].href.includes("onetrust-rtl.css") &&
            (B = !0), b[e].href.includes("default_responsive") && (ja = !0);
        b = (b = (b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec("#FFAB00")) ? {
            r: parseInt(b[1], 16),
            g: parseInt(b[2], 16),
            b: parseInt(b[3], 16)
        } : null) ? 186 < .299 * b.r + .587 * b.g + .114 * b.b ? "#000000" : "#ffffff" : "";
        e = document.createElement("style");
        e.innerHTML = "#optanon ul#optanon-menu li { background-color:  !important }#optanon ul#optanon-menu li.menu-item-selected { background-color:  !important }#optanon #optanon-popup-wrapper .optanon-white-button-middle { background-color: #FFAB00 !important }.optanon-alert-box-wrapper .optanon-alert-box-button-middle { background-color: #FFAB00 !important; border-color: #FFAB00 !important; }#optanon #optanon-popup-wrapper .optanon-white-button-middle button { color: " +
            b + " !important }.optanon-alert-box-wrapper .optanon-alert-box-button-middle button { color: " + b + " !important }#optanon #optanon-popup-bottom { background-color: #172B4D !important }#optanon.modern #optanon-popup-top, #optanon.modern #optanon-popup-body-left-shading { background-color: #172B4D !important }.optanon-alert-box-wrapper { background-color:#172B4D !important }.optanon-alert-box-wrapper .optanon-alert-box-bg p { color:#FFFFFF !important }#optanon, #optanon *, #optanon div, #optanon span, #optanon ul, #optanon li, #optanon a, #optanon p, .optanon-alert-box-wrapper * {\nfont-family: LLCircularWeb,\"Helvetica Neue\",Helvetica,sans-serif;\n}\n\n\n#optanon #optanon-popup-body h2 {\n    position: absolute;\n    top: -55px;\n    font-size: 16px;\n    font-weight: bold;\n    color: rgb(255, 255, 255);\n    margin: 5px 0px 0px 5px;\n}\n#optanon #optanon-popup-body .legacy-preference-banner-title {\n    margin: 5px 0px 0px 5px;\n    padding: 0px;\n    color: #ffffff;\n}\n#optanon #optanon-popup-wrapper .optanon-white-button-middle a {\n    color: #000000 !important; \n}\n.optanon-alert-box-wrapper .optanon-alert-box-button-middle a {\n    color: #000000 !important;\n}\n.optanon-alert-box-wrapper a {\n    color: #ffffff !important; \n    text-indent: 1;\n   font-weight: bold; \n  \n}\n\n.optanon-alert-box-button-middle, #optanon #optanon-popup-wrapper .optanon-white-button-middle {\n   border-radius: 4px;\n}\n.optanon-alert-box-wrapper {\n    margin: 4px;\n    border-radius: 4px;\n    width: 99.5%;\n}\n\n#optanon.modern #optanon-popup-top, #optanon.modern #optanon-popup-body-left-shading\n{\n    border-top-right-radius: 4px;\n    border-top-left-radius: 4px;\n}\n\n#optanon #optanon-popup-bottom {\n    border-bottom-left-radius: 4px;\n    border-bottom-right-radius: 4px;\n}\n#optanon #optanon-popup-bottom-logo:after {\n    content: 'OneTrust';\n    color: #ffffff;\n}\n#optanon #optanon-popup-bottom-logo:before {\n    content: 'Powered by';\n    color: #ffffff;\n}\n.optanon-alert-box-wrapper .optanon-button-more .optanon-alert-box-button-middle a:before {\n    content: '';\n}\n.optanon-alert-box-wrapper .optanon-button-allow .optanon-alert-box-button-middle a:before {\n    content: '';\n}\n#optanon #optanon-popup-top .optanon-close, .optanon-alert-box-wrapper .optanon-alert-box-corner-close a {\n    right: 10px;\n}\n @media only screen and (max-width: 47em) {\n .optanon-alert-box-wrapper.hide-cookie-setting-button .optanon-alert-box-body {\n    margin-right: auto;\n    padding-right: 5px;\n}\n}";
        document.getElementsByTagName("head")[0].appendChild(e)
    }

    function $a() {
        if (ka()) L(location.href);
        else {
            var b = "true" === z("OptanonConsent", "AwaitingReconsent"),
                e = t(),
                g = E("OptanonAlertBoxClosed"),
                e = e.LastReconsentDate;
            g && e && new Date(e) > new Date(g) && !b ? (L(location.href), F("OptanonConsent", "AwaitingReconsent", !0)) : (L("NotLandingPage"), F("OptanonConsent", "AwaitingReconsent", !1), ab && Optanon.SetAlertBoxClosed(!0))
        }
    }

    function L(b) {
        F("OptanonConsent", "landingPath", b)
    }

    function bb() {
        var b = t();
        f = jQuery.noConflict(!0);
        f(window).on("load", Optanon.LoadBanner);
        window.jsonFeed = function(e) {
            z("OptanonConsent", "EU") || F("OptanonConsent", "EU", e.displayPopup);
            1 == e.displayPopup || "true" == e.displayPopup || "true" == M || 1 == M ? Optanon.loadDefaultBannerGroup(e) : b.euOnly ? (z("OptanonConsent", "EU") && wa("OptanonConsent", "EU", M), xa(), W = !0, f(window).one("otloadbanner", function() {
                N();
                var b = !1;
                0 < f(".optanon-show-settings").length && f(".optanon-show-settings").attr("data-ignore-geolocation") && "true" === f(".optanon-show-settings").attr("data-ignore-geolocation").toLowerCase() &&
                    (b = !0);
                b ? (ya(), za(), Aa(), cb(), Ba || Optanon.AllowAll(!0)) : (f(".optanon-show-settings").remove(), f(".optanon-close-consent").remove(), f(".optanon-close-ui").remove(), f(".optanon-toggle-display").remove(), f(".optanon-allow-all").remove(), Optanon.AllowAll(!0));
                0 < f("#optanon-cookie-policy").length && Ca();
                Da()
            })) : Optanon.loadDefaultBannerGroup()
        }
    }

    function xa() {
        S() && !ka() && "true" === z("OptanonConsent", "AwaitingReconsent") && (t(), f(".optanon-alert-box-wrapper").fadeOut(200), f("#optanon-popup-bg").hide(), Optanon.Close(!0),
            E("OptanonAlertBoxClosed") || Optanon.SetAlertBoxClosed(!0))
    }

    function Da() {
        0 < f(".banner-policy-link").length ? f(".banner-policy-link").focus() : Ea();
        var b = void 0,
            e = void 0,
            g = void 0,
            h = f(".banner-policy-link"),
            m = f('.banner-close-button, .optanon-alert-box-button-container button:not([class\x3d"optanon-alert-box-close"]'),
            g = f('.optanon-alert-box-wrapper [href], .optanon-alert-box-wrapper input, .optanon-alert-box-wrapper select, .optanon-alert-box-wrapper textarea, .optanon-alert-box-wrapper button:not([class\x3d"optanon-alert-box-close"]'),
            n = 0 < h.length,
            b = n ? f(h) : f(g[g.length - 1]),
            e = f(g[0]);
        if (b) b.on("keydown", function(b) {
            var g = e;
            n ? (9 !== b.keyCode || b.shiftKey || (b.preventDefault(), Ea()), 9 === b.keyCode && b.shiftKey && (b.preventDefault(), g.focus())) : 9 === b.keyCode && b.shiftKey && (b.preventDefault(), Fa())
        });
        if (e) e.on("keydown", function(e) {
            var g = b;
            9 !== e.keyCode || e.shiftKey || (e.preventDefault(), g.focus())
        });
        if (0 < m.length) f(m[m.length - 1]).on("keydown", db)
    }

    function db(b) {
        9 === b.keyCode && b.shiftKey && (b.preventDefault(), Fa())
    }

    function Ea() {
        var b = f(".optanon-alert-box-button-container .cookie-settings-button"),
            e = f(".optanon-alert-box-button-container .accept-cookies-button"),
            g = f(".banner-close-button");
        f(".banner-policy-link");
        0 < b.length ? b.focus() : 0 < e.length ? e.focus() : 0 < g.length && g.focus()
    }

    function Fa() {
        var b = f(".optanon-alert-box-button-container .cookie-settings-button"),
            e = f(".optanon-alert-box-button-container .accept-cookies-button"),
            g = f(".banner-close-button"),
            h = f(".banner-policy-link");
        0 < h.length ? h.focus() : 0 < g.length ? g.focus() : 0 < e.length ? e.focus() : 0 < b.length && b.focus()
    }

    function N() {
        f("script").filter(function() {
            return f(this).attr("type") &&
                "text/plain" == f(this).attr("type").toLowerCase() && f(this).attr("class") && f(this).attr("class").toLowerCase().match(/optanon-category(-[a-zA-Z0-9]+)+($|\s)/)
        }).each(function() {
            var b = f(this).attr("class").toLowerCase().split("optanon-category-")[1].split("-"),
                e = !0;
            if (b && 0 < b.length) {
                for (var g = 0; g < b.length; g++)
                    if (!X(b[g], W)) {
                        e = !1;
                        break
                    } e && f(this).replaceWith(f(this).attr("type", "text/javascript")[0].outerHTML)
            }
        })
    }

    function ya() {
        var b, e = t(),
            g, h, m;
        Ga(e);
        f("body").prepend('\x3cdiv id\x3d"optanon" class\x3d"modern"\x3e\x3c/div\x3e');
        b = '\x3cdiv id\x3d"optanon-popup-bg"\x3e\x3c/div\x3e\x3cdiv id\x3d"optanon-popup-wrapper" role\x3d"dialog" aria-modal\x3d"true" tabindex\x3d"-1"\x3e\x3cdiv id\x3d"optanon-popup-top"\x3e';
        e.ShowPreferenceCenterCloseButton && (e.CloseText || (e.CloseText = "Close"), b = b + "\x3cbutton onClick\x3d\"Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Preferences Close Button');\" aria-label\x3d\"" + e.CloseText + '" class\x3d"optanon-close-link optanon-close optanon-close-ui" title\x3d"' + e.CloseText + '"\x3e\x3cdiv id\x3d"optanon-close" style\x3d"background: url(' +
            V("https://optanon.blob.core.windows.net/skins/4.6.0/default_flat_bottom_two_button_black/v2/images/optanon-pop-up-close.png") + ');width:34px;height:34px;"\x3e\x3c/div\x3e\x3c/button\x3e');
        m = "'" + V("https://optanon.blob.core.windows.net/logos/5878/5878:bitbucket.org/Atlassian%20white%20logo.png") + "'";
        b = b + '\x3c/div\x3e\x3cdiv id\x3d"optanon-popup-body"\x3e\x3cdiv id\x3d"optanon-popup-body-left"\x3e\x3cdiv id\x3d"optanon-popup-body-left-shading"\x3e\x3c/div\x3e\x3cdiv id\x3d"optanon-branding-top-logo" style\x3d"background-image: url(' +
            m + ') !important;"\x3e\x3c/div\x3e\x3cul id\x3d"optanon-menu" aria-label\x3d"Navigation Menu" role\x3d"tablist"\x3e\x3c/ul\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e';
        f("#optanon").html(b);
        e.Language && e.Language.Culture && f("#optanon-popup-wrapper").attr("lang", e.Language.Culture);
        for (m = 0; m < e.Groups.length; m += 1)
            if (b = e.Groups[m], x(b) == G || b && null == b.Parent && D(b)) {
                g = x(b) == G;
                h = -1 != f.inArray(w(b) + ":1", u);
                g = f('\x3cli class\x3d"menu-item-necessary ' + (g || h ? "menu-item-on" : "menu-item-off") + '" title\x3d"' +
                    x(b) + '"\x3e\x3cp class\x3d"preference-menu-item"\x3e\x3cbutton role\x3d"tab" aria-selected\x3d"' + (0 === m ? "true" : "false") + '" aria-controls\x3d"tab-' + m + '" id\x3d"' + x(b).split(" ")[0] + "-" + x(b).split(" ")[1] + '"\x3e' + x(b) + "\x3c/button\x3e\x3c/p\x3e\x3c/li\x3e");
                x(b) == G && g.removeClass("menu-item-necessary").addClass("menu-item-about");
                switch (b.OptanonGroupId) {
                    case 2:
                        g.removeClass("menu-item-necessary").addClass("menu-item-performance");
                        break;
                    case 3:
                        g.removeClass("menu-item-necessary").addClass("menu-item-functional");
                        break;
                    case 4:
                        g.removeClass("menu-item-necessary").addClass("menu-item-advertising");
                        break;
                    case 8:
                        g.removeClass("menu-item-necessary").addClass("menu-item-social")
                }
                g.data("group", b);
                g.data("optanonGroupId", w(b));
                g.click(eb);
                f("#optanon #optanon-menu").append(g)
            } b = f('\x3cli class\x3d"menu-item-moreinfo menu-item-off" title\x3d"' + e.AboutText + '"\x3e\x3cp class\x3d"preference-menu-item"\x3e\x3ca target\x3d"_blank" aria-label\x3d"' + e.AboutText + '" href\x3d"' + e.AboutLink + "\" onClick\x3d\"Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Preferences Cookie Policy');\"\x3e" +
            e.AboutText + "\x3c/a\x3e\x3c/p\x3e\x3c/li\x3e");
        f("#optanon #optanon-menu").append(b);
        f("#optanon #optanon-popup-body").append('\x3cdiv id\x3d"optanon-popup-body-right"\x3e\x3cp role\x3d"heading" aria-level\x3d"2" class\x3d"legacy-preference-banner-title h2" aria-label\x3d"' + e.MainText + '"\x3e' + e.MainText + '\x3c/p\x3e\x3cdiv class\x3d"vendor-header-container"\x3e\x3cp class\x3d"header-3" role\x3d"heading" aria-level\x3d"3"\x3e\x3c/p\x3e\x3cdiv id\x3d"optanon-popup-more-info-bar"\x3e\x3cdiv class\x3d"optanon-status"\x3e' +
            fb(e, "chkMain") + ('\x3cdiv class\x3d"optanon-status-always-active optanon-status-on"\x3e' + (ja && !e.ShowPreferenceCenterCloseButton ? '\x3cp class\x3d"no-closeBtn"\x3e' : "\x3cp\x3e") + e.AlwaysActiveText + "\x3c/p\x3e\x3c/div\x3e") + '\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-main-info-text" role\x3d"tabpanel"\x3e\x3c/div\x3e' + (e.IsIABEnabled && e.VendorLevelOptOut ? '\x3cdiv id\x3d"optanon-vendor-consent-text"\x3e\x3cbutton class\x3d"vendor-consent-link" aria-label\x3d"View Vendor Consent"\x3eView Vendor Consent\x3c/button\x3e\x3c/div\x3e' :
                "") + '\x3c/div\x3e\x3cdiv class\x3d"optanon-bottom-spacer"\x3e\x3c/div\x3e');
        f("#optanon #optanon-popup-wrapper").append('\x3cdiv id\x3d"optanon-popup-bottom"\x3e \x3ca href\x3d"https://onetrust.com/poweredbyonetrust" target\x3d"_blank"\x3e\x3cdiv id\x3d"optanon-popup-bottom-logo" style\x3d"background: url(' + V("https://optanon.blob.core.windows.net/skins/4.6.0/default_flat_bottom_two_button_black/v2/images/cookie-collective-top-bottom.png") + ');width:155px;height:35px;" title\x3d"powered by OneTrust"\x3e\x3c/div\x3e\x3c/a\x3e\x3cdiv class\x3d"optanon-button-wrapper optanon-save-settings-button optanon-close optanon-close-consent"\x3e\x3cdiv class\x3d"optanon-white-button-left"\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-white-button-middle"\x3e\x3cbutton title\x3d"' +
            e.AllowAllText + '" aria-label\x3d"' + e.AllowAllText + "\" onClick\x3d\"Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Preferences Save Settings');\"\x3e" + e.AllowAllText + '\x3c/button\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-white-button-right"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-button-wrapper optanon-allow-all-button optanon-allow-all"\x3e\x3cdiv class\x3d"optanon-white-button-left"\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-white-button-middle"\x3e\x3cbutton title\x3d"' +
            e.ConfirmText + '" aria-label\x3d"' + e.ConfirmText + "\" onClick\x3d\"Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Preferences Allow All');\"\x3e" + e.ConfirmText + '\x3c/button\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-white-button-right"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
        la()
    }

    function fb(b, e) {
        return '\x3cdiv class\x3d"optanon-status-editable"\x3e\x3cform\x3e\x3cspan class\x3d"fieldset"\x3e' + (B ? '\x3cp class\x3d"togglerChk mainToggle"\x3e' : ja && !b.ShowPreferenceCenterCloseButton ? '\x3cp class\x3d"no-closeBtn"\x3e' :
            "\x3cp\x3e") + (B ? '\x3cspan class\x3d"toggleChk"\x3e\x3c/span\x3e' : "") + '\x3cinput type\x3d"checkbox" value\x3d"check" id\x3d"' + e + '" checked class\x3d"legacy-group-status optanon-status-checkbox" /\x3e\x3clabel for\x3d"' + e + '"\x3e' + (B ? "" : b.ActiveText) + "\x3c/label\x3e\x3c/p\x3e\x3c/span\x3e\x3c/form\x3e\x3c/div\x3e"
    }

    function eb() {
        var b = t(),
            e = f(this).data("group"),
            g = ma(e),
            h;
        h = this.childNodes[0].children[0].id;
        var m = h.split("-")[0] + "-description";
        Ga(b);
        var n = x(e);
        f("#optanon #optanon-menu li").removeClass("menu-item-selected");
        f(this).addClass("menu-item-selected");
        f("#optanon p.header-3").text(n);
        document.querySelector("#optanon-popup-body-right").children[2].setAttribute("id", m);
        document.querySelector("#optanon-popup-body-right").children[2].setAttribute("aria-labelledby", h);
        document.querySelector("#optanon #" + m).innerHTML = Y(e);
        h = document.querySelectorAll(".preference-menu-item button");
        for (m = 0; m < h.length; m++) "true" === h[m].attributes[1].value && h[m].setAttribute("aria-selected", !1), h[m].parentElement.parentElement.classList.contains("menu-item-selected") &&
            h[m].setAttribute("aria-selected", !0);
        e && !b.HideToolbarCookieList && (h = gb(e), f("#optanon .optanon-main-info-text").append(h));
        Ha(e, b);
        if (g && 0 < g.length)
            for (e = 0; e < g.length; e += 1) Ha(g[e], b);
        var e = document.querySelector("#optanon .optanon-status-checkbox"),
            q = document.querySelectorAll("#optanon .optanon-subgroup-checkbox");
        h = document.createElement("span");
        h.classList.add("sr-only");
        h.innerText = n;
        e.nextSibling.insertBefore(h, e.firstChild);
        0 < q.length && g.forEach(function(b, e) {
            var g = document.createElement("span");
            g.classList.add("sr-only");
            g.innerText = x(b);
            q[e].nextSibling.insertBefore(g, q.firstChild)
        });
        n == G ? f("#optanon #optanon-popup-more-info-bar").hide() : f("#optanon #optanon-popup-more-info-bar").show();
        b.IsIABEnabled && b.VendorLevelOptOut && getVendorText();
        return !1
    }

    function Ha(b, e) {
        if ("always active" == A(b).toLowerCase() || "always active" == A(b.Parent).toLowerCase()) f("#optanon .optanon-status-always-active").show(), f("#optanon .optanon-status-editable").hide();
        else {
            f("#optanon .optanon-status-editable").show();
            f("#optanon .optanon-status-always-active").hide();
            f("#optanon .optanon-status-editable .optanon-status-checkbox").prop("id", "chk" + b.GroupId);
            f("#optanon .optanon-status-editable label").attr("for", "chk" + b.GroupId);
            var g = -1 != f.inArray(w(b) + ":1", u),
                h = f(b && null == b.Parent ? "#chk" + b.GroupId : "#optanon #chk" + w(b)),
                m = B ? h.prev(".toggleChk") : h.next("label");
            g ? (h.prop("checked", !0), h.parent().addClass("optanon-status-on"), m.text(e.ActiveText)) : (h.prop("checked", !1), h.parent().removeClass("optanon-status-on"),
                e.InactiveText && m.text(e.InactiveText))
        }
    }

    function za() {
        var b = t();
        f(document).on("click", ".optanon-close-consent", function() {
            Optanon.Close();
            Ia(!0, !0);
            return !1
        });
        f(document).on("click", ".optanon-close-ui", function() {
            H(T.KEEPCENTERTILEBANNEROPEN);
            return !1
        });
        f(document).on("click", ".optanon-toggle-display", function() {
            Optanon.ToggleInfoDisplay();
            return !1
        });
        f(document).on("click", ".optanon-allow-all", function() {
            Optanon.AllowAll();
            Ia(!0, !0);
            return !1
        });
        f(document).on("keydown", "#optanon", function(b) {
            27 ==
                b.keyCode && H(T.KEEPCENTERTILEBANNEROPEN)
        });
        f("#optanon").on("change", ".optanon-status-checkbox", function() {
            var e = f(this).data("group") || f("#optanon #optanon-menu li.menu-item-selected").data("group");
            if (f(this).is(":checked")) {
                var g = x(e);
                Optanon.TriggerGoogleAnalyticsEvent("OneTrust Cookie Consent", "Preferences Toggle On", g);
                f("#optanon #optanon-menu li.menu-item-selected").removeClass("menu-item-off");
                f("#optanon #optanon-menu li.menu-item-selected").addClass("menu-item-on");
                f(this).parent().addClass("optanon-status-on");
                g = Z(u, w(e) + ":0"); - 1 != g && (u[g] = w(e) + ":1");
                (B ? f(this).prev(".toggleChk") : f(this).next("label")).text(b.ActiveText)
            } else g = x(e), Optanon.TriggerGoogleAnalyticsEvent("OneTrust Cookie Consent", "Preferences Toggle Off", g), f("#optanon #optanon-menu li.menu-item-selected ").removeClass("menu-item-on"), f("#optanon #optanon-menu li.menu-item-selected").addClass("menu-item-off"), f(this).parent().removeClass("optanon-status-on"), g = Z(u, w(e) + ":1"), -1 != g && (u[g] = w(e) + ":0"), e = B ? f(this).prev(".toggleChk") : f(this).next("label"),
                b.InactiveText && e.text(b.InactiveText);
            la()
        })
    }

    function w(b) {
        return b.CustomGroupId ? b.CustomGroupId : 0 == b.OptanonGroupId ? "0_" + b.GroupId : b.OptanonGroupId
    }

    function Aa() {
        f(".optanon-show-settings").wrap('\x3cdiv class\x3d"optanon-show-settings-popup-wrapper"\x3e').wrap('\x3cdiv class\x3d"optanon-show-settings-button"\x3e').wrap('\x3cdiv class\x3d"optanon-show-settings-middle"\x3e');
        f(".optanon-show-settings-middle").before('\x3cdiv class\x3d"optanon-show-settings-left"\x3e\x3c/div\x3e');
        f(".optanon-show-settings-middle").after('\x3cdiv class\x3d"optanon-show-settings-right"\x3e\x3c/div\x3e');
        f(".optanon-show-settings-button").addClass("optanon-toggle-display")
    }

    function cb() {
        f(".optanon-show-settings-button").click(function() {
            Optanon.TriggerGoogleAnalyticsEvent("OneTrust Cookie Consent", "Privacy Settings Click")
        })
    }

    function hb() {
        if (!Optanon.IsAlertBoxClosedAndValid()) {
            var b = t();
            f(".optanon-alert-box-wrapper").show().animate({
                bottom: "0px"
            }, 1E3);
            b.ForceConsent && (na(b.AlertNoticeText) || f("#optanon-popup-bg").css({
                "z-index": "7000"
            }).show());
            f(".optanon-alert-box-close").click(function() {
                var b =
                    t();
                f(".optanon-alert-box-wrapper").fadeOut(200);
                f("#optanon-popup-bg").hide();
                1 == b.CloseShouldAcceptAllCookies ? Optanon.AllowAll() : Optanon.Close(!1);
                Optanon.SetAlertBoxClosed(!0)
            });
            if (b.OnClickAcceptAllCookies) {
                for (var e = document.querySelector("body").children, g = 0; g < e.length; g++) e[g].classList.contains("optanon-alert-box-wrapper") || e[g].classList.contains("optanon-show-settings") || "optanon" === e[g].id || e[g].addEventListener("click", oa);
                document.querySelector(".optanon-alert-box-close").addEventListener("click",
                    aa);
                document.querySelector(".optanon-allow-all-button").addEventListener("click", aa);
                document.querySelector(".optanon-save-settings-button").addEventListener("click", aa);
                document.querySelector(".optanon-button-allow").addEventListener("click", aa)
            }
            b.ScrollAcceptsAllCookiesAndClosesBanner && (window.addEventListener("scroll", Ja), document.querySelector(".optanon-alert-box-close").addEventListener("click", I), document.querySelector(".optanon-allow-all-button").addEventListener("click", I), document.querySelector(".optanon-save-settings-button").addEventListener("click",
                I), document.querySelector(".optanon-button-allow").addEventListener("click", I))
        }
    }

    function oa(b) {
        var e = document.querySelector("body").children;
        Optanon.TriggerGoogleAnalyticsEvent("OneTrust Cookie Consent", "Banner Auto Close");
        Optanon.AllowAll();
        Ka(".optanon-alert-box-wrapper", 40);
        Optanon.SetAlertBoxClosed(!0);
        for (var g = 0; g < e.length; g++) e[g].removeEventListener("click", oa);
        b.stopPropagation()
    }

    function Ja() {
        var b = this.pageYOffset,
            e = document.getElementById("optanon-popup-wrapper"),
            e = !(!e.offsetWidth ||
                !e.offsetHeight);
        200 < b && !e && (Optanon.TriggerGoogleAnalyticsEvent("OneTrust Cookie Consent", "Banner Auto Close"), Optanon.AllowAll(), Ka(".optanon-alert-box-wrapper", 40), Optanon.SetAlertBoxClosed(!0), I())
    }

    function I() {
        window.removeEventListener("scroll", Ja)
    }

    function aa() {
        for (var b = document.querySelector("body").children, e = 0; e < b.length; e++) b[e].removeEventListener("click", oa);
        I()
    }

    function Ca() {
        var b, e, g, h, m, n, q = t(),
            C, v;
        for (g = 0; g < q.Groups.length; g += 1)
            if ((b = q.Groups[g]) && null == b.Parent && D(b)) {
                C = f('\x3cdiv class\x3d"optanon-cookie-policy-group"\x3e\x3c/div\x3e');
                C.append('\x3ch2 class\x3d"optanon-cookie-policy-group-name"\x3e' + x(b) + "\x3c/h2\x3e");
                C.append('\x3cp class\x3d"optanon-cookie-policy-group-description"\x3e' + Y(b) + "\x3c/p\x3e");
                if (0 < b.Cookies.length)
                    for (C.append('\x3cp class\x3d"optanon-cookie-policy-cookies-used"\x3e' + q.CookiesUsedText + "\x3c/p\x3e"), C.append('\x3cul class\x3d"optanon-cookie-policy-group-cookies-list"\x3e\x3c/ul\x3e'), h = 0; h < b.Cookies.length; h += 1) e = b.Cookies[h], e = La(e), C.find(".optanon-cookie-policy-group-cookies-list").append("\x3cli\x3e" +
                        (B ? '\x3cdiv class\x3d"keep-ltr"\x3e' : "\x3cdiv\x3e") + e + "\x3c/div\x3e\x3c/li\x3e");
                b = ma(b);
                if (0 < b.length) {
                    q.CookiesText || (q.CookiesText = "Cookies");
                    q.CategoriesText || (q.CategoriesText = "Categories");
                    q.LifespanText || (q.LifespanText = "Lifespan");
                    q.LifespanTypeText || (q.LifespanTypeText = "Session");
                    q.LifespanDurationText || (q.LifespanDurationText = "days");
                    h = f('\x3ctable class\x3d"optanon-cookie-policy-subgroup-table"\x3e\x3c/table\x3e');
                    h.append("\x3ctr\x3e\x3c/tr\x3e");
                    e = "";
                    q.IsLifespanEnabled && (e = "\x26nbsp;(" +
                        q.LifespanText + ")");
                    h.find("tr").append('\x3cth class\x3d"optanon-cookie-policy-left"\x3e\x3cp class\x3d"optanon-cookie-policy-subgroup-table-column-header"\x3e' + q.CategoriesText + "\x3c/p\x3e\x3c/th\x3e");
                    h.find("tr").append('\x3cth class\x3d"optanon-cookie-policy-right"\x3e\x3cp class\x3d"optanon-cookie-policy-subgroup-table-column-header"\x3e' + q.CookiesText + e + "\x3c/p\x3e\x3c/th\x3e");
                    for (e = 0; e < b.length; e += 1) {
                        v = f('\x3ctr class\x3d"optanon-cookie-policy-subgroup"\x3e\x3c/tr\x3e');
                        v.append('\x3ctd class\x3d"optanon-cookie-policy-left"\x3e\x3c/td\x3e');
                        m = Ma(b[e]);
                        v.find(".optanon-cookie-policy-left").append('\x3cp class\x3d"optanon-cookie-policy-subgroup-name"\x3e' + m + "\x3c/p\x3e");
                        v.find(".optanon-cookie-policy-left").append('\x3cp class\x3d"optanon-cookie-policy-subgroup-description"\x3e' + Y(b[e]) + "\x3c/p\x3e");
                        v.append('\x3ctd class\x3d"optanon-cookie-policy-right"\x3e\x3c/td\x3e');
                        v.find(".optanon-cookie-policy-right").append('\x3cul class\x3d"optanon-cookie-policy-subgroup-cookies-list"\x3e\x3c/ul\x3e');
                        if (q.IsLifespanEnabled)
                            for (m = 0; m < b[e].Cookies.length; m +=
                                1) {
                                n = b[e].Cookies[m];
                                var u = "",
                                    u = n.IsSession ? q.LifespanTypeText : 0 === n.Length ? "\x3c 1 " + q.LifespanDurationText : n.Length + " " + q.LifespanDurationText;
                                v.find(".optanon-cookie-policy-subgroup-cookies-list").append((B ? '\x3cli class\x3d"keep-ltr"\x3e' : "\x3cli\x3e") + n.Name + "\x26nbsp;(" + u + ")\x3c/li\x3e")
                            } else
                                for (m = 0; m < b[e].Cookies.length; m += 1) n = b[e].Cookies[m], v.find(".optanon-cookie-policy-subgroup-cookies-list").append((B ? '\x3cli class\x3d"keep-ltr"\x3e' : "\x3cli\x3e") + n.Name + "\x3c/li\x3e");
                        h.append(v)
                    }
                    C.append(h)
                }
                f("#optanon-cookie-policy").append(C);
                Na()
            } f(window).resize(function() {
            Na()
        })
    }

    function gb(b) {
        var e = t(),
            g = f('\x3cdiv class\x3d"optanon-cookie-list"\x3e\x3c/div\x3e'),
            h = ma(b),
            m, n;
        (b.Cookies && 0 < b.Cookies.length || h && 0 < h.length) && g.append('\x3ch4 class\x3d"optanon-cookies-used"\x3e' + e.CookiesUsedText + "\x3c/h4\x3e");
        if (b.Cookies && 0 < b.Cookies.length) {
            n = f('\x3cp class\x3d"optanon-group-cookies-list"\x3e\x3c/p\x3e');
            for (e = 0; e < b.Cookies.length; e += 1) m = b.Cookies[e], m = La(m), n.append(m + (e < b.Cookies.length - 1 ? ", " : ""));
            g.append(n)
        }
        if (h && 0 < h.length)
            for (b =
                0; b < h.length; b += 1) e = f('\x3cp class\x3d"optanon-subgroup-cookies-list subgroup-cookies-list"\x3e\x3c/p\x3e'), n = Ma(h[b]), Y(h[b]), e.append('\x3cspan class\x3d"optanon-subgroup-header"\x3e' + n + " \x3c/span\x3e"), n = f('\x3cdiv class\x3d"optanon-subgroup-cookies"\x3e\x3c/div\x3e'), e.append(n), g.append(e);
        return g
    }

    function Y(b) {
        return b && b.GroupLanguagePropertiesSets && b.GroupLanguagePropertiesSets[0] && b.GroupLanguagePropertiesSets[0].GroupDescription && b.GroupLanguagePropertiesSets[0].GroupDescription.Text ?
            b.GroupLanguagePropertiesSets[0].GroupDescription.Text.replace(/\r\n/g, "\x3cbr\x3e") : ""
    }

    function x(b) {
        return b && b.GroupLanguagePropertiesSets && b.GroupLanguagePropertiesSets[0] && b.GroupLanguagePropertiesSets[0].GroupName ? b.GroupLanguagePropertiesSets[0].GroupName.Text : ""
    }

    function A(b) {
        var e = t();
        return b && b.GroupLanguagePropertiesSets && b.GroupLanguagePropertiesSets[0] && b.GroupLanguagePropertiesSets[0].DefaultStatus ? Oa && e.IsDntEnabled && b.GroupLanguagePropertiesSets[0].IsDntEnabled ? "do not track" : b.GroupLanguagePropertiesSets[0].DefaultStatus.Text :
            ""
    }

    function Ma(b) {
        if (!b) return "";
        var e = x(b);
        b = b.Cookies[0];
        return b ? e = '\x3ca href\x3d"http://cookiepedia.co.uk/host/' + b.Host + '" target\x3d"_blank" style\x3d"text-decoration: underline;"\x3e' + e + "\x3c/a\x3e" : e
    }

    function La(b) {
        return b ? '\x3ca href\x3d"http://cookiepedia.co.uk/cookies/' + b.Name + '" target\x3d"_blank" style\x3d"text-decoration: underline;"\x3e' + b.Name + "\x3c/a\x3e" : ""
    }

    function Na() {
        f("#optanon-cookie-policy .optanon-cookie-policy-subgroup").each(function() {
            f(this).find(".optanon-cookie-policy-left").height("auto");
            f(this).find(".optanon-cookie-policy-right").height("auto");
            f(this).find(".optanon-cookie-policy-left").height() >= f(this).find(".optanon-cookie-policy-right").height() ? f(this).find(".optanon-cookie-policy-right").height(f(this).find(".optanon-cookie-policy-left").height()) : f(this).find(".optanon-cookie-policy-left").height(f(this).find(".optanon-cookie-policy-right").height())
        })
    }

    function ib() {
        f("#optanon #optanon-menu li").removeClass("menu-item-selected");
        f("#optanon #optanon-menu li").each(function() {
            f(this).text() ==
                G && f(this).click()
        });
        la();
        var b = f("#optanon-popup-wrapper"),
            e = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            g = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        b.css("margin-top", "10px");
        720 > e ? b.css("top", "10px") : b.outerHeight() > g ? b.css("top", Math.max(0, (g - b.outerHeight()) / 2 + f(window).scrollTop()) + "px") : b.css("top", Math.max(0, (g - b.outerHeight()) / 2) + "px");
        e = document.querySelector("#optanon #optanon-popup-bg");
        g = document.querySelector("#optanon #optanon-popup-wrapper");
        e.classList.add("fade-in");
        g.classList.add("fade-in");
        e.style.display = "block";
        g.style.display = "block";
        b.focus()
    }

    function H(b) {
        var e = t();
        e.ForceConsent ? na(e.AlertNoticeText) || b !== T.KEEPCENTERTILEBANNEROPEN ? f("#optanon #optanon-popup-bg, #optanon #optanon-popup-wrapper").fadeOut(400) : (f("#optanon-popup-bg").css({
            "z-index": "7000"
        }), f("#optanon #optanon-popup-wrapper").fadeOut(400)) : f("#optanon #optanon-popup-bg, #optanon #optanon-popup-wrapper").fadeOut(400)
    }

    function Pa(b) {
        if (A(b)) {
            var e = A(b).toLowerCase();
            b.Parent && (e = A(b.Parent).toLowerCase());
            return "always active" == e || "inactive landingpage" == e || "active" == e || "do not track" == e && !Oa
        }
        return !0
    }

    function Qa() {
        var b, e = t(),
            g;
        if (z("OptanonConsent", "groups")) {
            Ba = !1;
            z("OptanonConsent", "groups") && !pa && (pa = !0);
            b = !1;
            var e = P(z("OptanonConsent", "groups")),
                h = P(z("OptanonConsent", "groups").replace(/:0/g, "").replace(/:1/g, ""));
            g = t();
            var f, n, q;
            if (z("OptanonConsent", "groups")) {
                for (n = 0; n < g.Groups.length; n += 1) f = g.Groups[n], D(f) && (q = Z(h, w(f)), -1 == q && (b = !0, Pa(f) ? e.push(w(f) +
                    ":1") : e.push(w(f) + ":0")));
                for (n = e.length - 1; 0 <= n; --n) {
                    q = !1;
                    for (h = 0; h < g.Groups.length; h += 1)
                        if (f = g.Groups[h], D(f) && w(f) == e[n].replace(/:0/g, "").replace(/:1/g, "")) {
                            q = !0;
                            break
                        } q || (b = !0, e.splice(n, 1))
                }
                b && J("OptanonConsent", e)
            }
            u = P(z("OptanonConsent", "groups"))
        } else {
            u = [];
            for (g = 0; g < e.Groups.length; g += 1) b = e.Groups[g], D(b) && (Pa(b) ? u.push(w(b) + ":1") : u.push(w(b) + ":0"));
            pa = !0
        }
    }

    function J(b, e) {
        e ? F(b, "groups", e.toString().toLowerCase()) : F(b, "groups", u.toString().toLowerCase())
    }

    function wa(b, e, g) {
        var h = {},
            f = E(b),
            n, q, t, v, u = !1;
        f.split("\x26").forEach(function(b) {
            b.includes(e) && b.split("\x3d")[1] !== g.toString() && (u = !0, v = f.replace(b, e + "\x3d" + g))
        });
        if (u) {
            t = v.split("\x26");
            if (v)
                for (n = 0; n < t.length; n += 1) q = t[n].split("\x3d"), h[decodeURIComponent(q[0])] = decodeURIComponent(q[1]).replace(/\+/g, " ");
            h.datestamp = (new Date).toString();
            h.version = "4.6.0";
            h = Ra(h);
            ba(b, h, 365)
        }
    }

    function F(b, e, g) {
        var h = {},
            f = E(b),
            n, q;
        t();
        if (f)
            for (n = f.split("\x26"), f = 0; f < n.length; f += 1) q = n[f].split("\x3d"), h[decodeURIComponent(q[0])] = decodeURIComponent(q[1]).replace(/\+/g,
                " ");
        h[e] = g;
        h.datestamp = (new Date).toString();
        h.version = "4.6.0";
        e = Ra(h);
        ba(b, e, 365)
    }

    function z(b, e) {
        var g = E(b),
            h, f, n;
        if (g) {
            h = {};
            f = g.split("\x26");
            for (g = 0; g < f.length; g += 1) n = f[g].split("\x3d"), h[decodeURIComponent(n[0])] = decodeURIComponent(n[1]).replace(/\+/g, " ");
            return e && h[e] ? h[e] : e && !h[e] ? "" : h
        }
        return ""
    }

    function ba(b, e, g) {
        var h;
        g ? (h = new Date, h.setTime(h.getTime() + 864E5 * g), g = "; expires\x3d" + h.toGMTString()) : g = "";
        h = ["bitbucket.org"];
        1 >= h.length && (h[1] = "");
        document.cookie = b + "\x3d" + e + g + "; path\x3d/" +
            h[1] + "; domain\x3d." + h[0]
    }

    function E(b) {
        b += "\x3d";
        var e = document.cookie.split(";"),
            g, h;
        for (g = 0; g < e.length; g += 1) {
            for (h = e[g];
                " " == h.charAt(0);) h = h.substring(1, h.length);
            if (0 == h.indexOf(b)) return h.substring(b.length, h.length)
        }
        return null
    }

    function X(b, e) {
        var g = null != b && "undefined" != typeof b,
            h, f;
        if (!e) {
            Qa();
            h = K(u, b + ":1");
            a: {
                f = t();
                var n;
                for (n = 0; n < f.Groups.length; n += 1)
                    if (f.Groups[n].CustomGroupId) {
                        if (f.Groups[n].CustomGroupId == b) {
                            f = !0;
                            break a
                        }
                    } else if (f.Groups[n].OptanonGroupId == b) {
                    f = !0;
                    break a
                }
                f = !1
            }
            f = !f;
            return g && (h && va(b) || f) ? !0 : !1
        }
        return !0
    }

    function va(b) {
        a: {
            var e = t(),
                g;
            for (g = 0; g < e.Groups.length; g += 1)
                if (w(e.Groups[g]) == b) {
                    b = e.Groups[g];
                    break a
                } b = void 0
        }
        return "inactive landingpage" != A(b && null == b.Parent ? b : b.Parent).toLowerCase() ? !0 : ka() ? !1 : !0
    }

    function ka() {
        var b = z("OptanonConsent", "landingPath");
        return b && b !== location.href ? !1 : !0
    }

    function P(b) {
        return b ? b.toLowerCase().split(",") : []
    }

    function da() {
        var b;
        b = t();
        b.CustomJs && (new Function(b.CustomJs))();
        if ("function" == typeof OptanonWrapper && "undefined" !=
            OptanonWrapper) {
            OptanonWrapper();
            for (b = 0; b < Q.length; b += 1) K(qa, Q[b]) || qa.push(Q[b]);
            Q = [];
            for (b = 0; b < R.length; b += 1) K(ra, R[b]) || ra.push(R[b]);
            R = []
        }
    }

    function Ga(b) {
        b.Groups.unshift({
            GroupLanguagePropertiesSets: [{
                GroupName: {
                    Text: G
                },
                GroupDescription: {
                    Text: b.MainInfoText
                }
            }]
        })
    }

    function Sa(b) {
        if (b = document.getElementById(b))
            for (; b.hasChildNodes();) b.removeChild(b.lastChild)
    }

    function ea(b) {
        if (b = document.getElementById(b)) b.style.display = "block"
    }

    function Ta(b) {
        (b = document.getElementById(b)) && b.parentNode.removeChild(b)
    }

    function K(b, e) {
        var g;
        for (g = 0; g < b.length; g += 1)
            if (b[g].toString().toLowerCase() == e.toString().toLowerCase()) return !0;
        return !1
    }

    function Z(b, e) {
        var g;
        for (g = 0; g < b.length; g += 1)
            if (b[g] == e) return g;
        return -1
    }

    function Ya(b, e) {
        return -1 != b.indexOf(e, b.length - e.length)
    }

    function Ra(b) {
        var e = "",
            g;
        for (g in b) b.hasOwnProperty(g) && ("" != e && (e += "\x26"), e += g + "\x3d" + encodeURIComponent(b[g]).replace(/%20/g, "+"));
        return e
    }

    function la() {
        var b = 0,
            e, g = t(),
            h;
        for (h = 0; h < g.Groups.length; h += 1)
            if (e = g.Groups[h], D(e) && K(u, w(e) + ":0") &&
                (b += 1, 1 <= b)) return f("#optanon .optanon-allow-all-button").show(), !0;
        f("#optanon .optanon-allow-all-button").hide();
        return !1
    }

    function Ia(b, e) {
        f(".optanon-alert-box-wrapper").fadeOut(400);
        b && (Ua || !Ua && !Optanon.IsAlertBoxClosedAndValid()) && Optanon.SetAlertBoxClosed(e)
    }

    function D(b) {
        var e, g = t(),
            h = !1,
            f, n, q = null != b.Cookies && 0 < b.Cookies.length;
        if (b && null == b.Parent) {
            f = b.Purposes && 0 < b.Purposes.length && g.IsIABEnabled;
            for (n = 0; n < g.Groups.length; n += 1) {
                e = g.Groups[n];
                var C = null != e.Cookies && 0 < e.Cookies.length;
                if (null !=
                    e.Parent && x(b) && x(e.Parent) == x(b) && e.ShowInPopup && C) {
                    h = !0;
                    break
                }
            }
            return b.ShowInPopup && (q || h || f)
        }
        return b.ShowInPopup && q
    }

    function ma(b) {
        var e, g = t(),
            h = [],
            f;
        for (f = 0; f < g.Groups.length; f += 1) {
            e = g.Groups[f];
            var n = null != e.Cookies && 0 < e.Cookies.length;
            null != e.Parent && x(e.Parent) == x(b) && e.ShowInPopup && n && h.push(e)
        }
        return h
    }

    function t() {
        sa || (sa = {
            cctId: "ecf1dcec-418c-4be5-9466-f9cdc3bb91d1",
            euOnly: !0,
            MainText: "Privacy Preference Centre",
            MainInfoText: "When you visit any web site, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalised web experience.\n\nBecause we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.",
            AboutText: "Atlassian Cookies and Tracking Notice",
            AboutCookiesText: "Your Privacy",
            ConfirmText: "Allow All",
            AllowAllText: "Save Settings",
            CookiesUsedText: "Cookies used",
            ShowAlertNotice: !0,
            AboutLink: "https://www.atlassian.com/legal/cookies",
            HideToolbarCookieList: !1,
            ActiveText: "Active",
            AlwaysActiveText: "Always Active",
            AlertNoticeText: "This site uses cookies to improve your browsing experience, perform analytics and research, and conduct advertising. To change your preferences, click Cookie Settings. Otherwise, clicking on the the website, closing the banner, or clicking Accept all Cookies indicates you agree to our use of cookies on your device.    \x3ca href\x3d'https://www.atlassian.com/legal/cookies'\x3eAtlassian Cookies and Tracking Notice\x3c/a\x3e",
            AlertCloseText: "Close",
            AlertMoreInfoText: "Cookie Settings",
            AlertAllowCookiesText: "Accept All Cookies",
            CloseShouldAcceptAllCookies: !0,
            LastReconsentDate: null,
            BannerTitle: "",
            ForceConsent: !1,
            InactiveText: "Inactive",
            CookiesText: "Cookies",
            CategoriesText: "Categories",
            HasScriptArchive: !0,
            IsLifespanEnabled: !1,
            LifespanText: "Lifespan",
            IsIABEnabled: !1,
            VendorLevelOptOut: !1,
            Groups: [{
                    ShowInPopup: !0,
                    Order: 0,
                    OptanonGroupId: 1,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Always Active"
                        },
                        GroupDescription: {
                            Text: "These cookies and other technologies are essential in order to enable the Atlassian Services to provide the feature you have requested, such as remembering you have logged in.  You are not able to opt-out of any cookies or other technologies that are \u201cstrictly necessary\u201d for the service."
                        },
                        GroupName: {
                            Text: "Strictly Necessary Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "bb_session",
                        Host: "bitbucket.org",
                        IsSession: !1,
                        Length: 13
                    }, {
                        Name: "OptanonConsent",
                        Host: "bitbucket.org",
                        IsSession: !1,
                        Length: 365
                    }, {
                        Name: "OptanonAlertBoxClosed",
                        Host: "bitbucket.org",
                        IsSession: !1,
                        Length: 365
                    }, {
                        Name: "csrftoken",
                        Host: "bitbucket.org",
                        IsSession: !1,
                        Length: 363
                    }, {
                        Name: "JSESSIONID",
                        Host: "bitbucket.org",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "OptanonConsent ",
                        Host: "atlassian.com",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "atlassian.aid.avatar.version",
                        Host: "atlassian.com",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "atlassian.account.xsrf.token",
                        Host: "id.atlassian.com",
                        IsSession: !0,
                        Length: 0
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 94335
                }, {
                    ShowInPopup: !0,
                    Order: 1,
                    OptanonGroupId: 2,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies and similar technologies collect information on how visitors use the Services and enable us to improve how the Services operates."
                        },
                        GroupName: {
                            Text: "Performance Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "__atl_path",
                        Host: ".bitbucket.org",
                        IsSession: !1,
                        Length: 3649
                    }, {
                        Name: "ctm ",
                        Host: "atlassian.com",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "__insp_slim ",
                        Host: "atlassian.com",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "__insp_wid ",
                        Host: "atlassian.com",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "__insp_nv ",
                        Host: "atlassian.com",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "seg_xid_ts ",
                        Host: "atlassian.com",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "__insp_targlpu ",
                        Host: "atlassian.com",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "_CT_RS_ ",
                        Host: "atlassian.com",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "seg_xid_fd ",
                        Host: "atlassian.com",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "__insp_targlpt ",
                        Host: "atlassian.com",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "WRUIDAWS ",
                        Host: "atlassian.com",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "__CT_Data ",
                        Host: "atlassian.com",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "__insp_norec_sess ",
                        Host: "atlassian.com",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "_sio",
                        Host: "atlassian.com",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "__tld__",
                        Host: "atl-paas.net",
                        IsSession: !0,
                        Length: 0
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 94331
                },
                {
                    ShowInPopup: !0,
                    Order: 2,
                    OptanonGroupId: 3,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies and similar technologies remember choices you make such as language or search parameters. We use these cookies to provide you with an experience more appropriate with your selections and to make your use of the Services more tailored. If you do not accept these cookies, some portions of the site may not function properly."
                        },
                        GroupName: {
                            Text: "Functional Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "__distillery",
                        Host: "bitbucket.org",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "ajs_user_id ",
                        Host: "atlassian.com",
                        IsSession: !1,
                        Length: 365
                    }, {
                        Name: "ajs%3Atest",
                        Host: "atl-paas.net",
                        IsSession: !1,
                        Length: 365
                    }, {
                        Name: "ajs%3Acookies",
                        Host: "atl-paas.net",
                        IsSession: !1,
                        Length: 365
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 94332
                }, {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Inactive"
                        },
                        GroupDescription: {
                            Text: "These cookies collect information about your browsing habits in order to make advertising relevant to you and your interests. They remember the websites you have visited and that information is shared with other parties such as advertising technology service providers and advertisers. Social Media cookies are used when you share information using a social media sharing button or \u201clike\u201d button on our Sites or you link your account or engage with our content on or through a social media site. The social network will record that you have done this. This information may be linked to targeting/advertising activities."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "_ga",
                        Host: "atlassian.com",
                        IsSession: !1,
                        Length: 730
                    }, {
                        Name: "_evga_86b0\u00a0 ",
                        Host: "atlassian.com",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "optimizelyEndUserId ",
                        Host: "atlassian.com",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "_gid\u00a0",
                        Host: "atlassian.com",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "_gat ",
                        Host: "atlassian.com",
                        IsSession: !1,
                        Length: 1
                    }, {
                        Name: "_gid",
                        Host: "aerobaticapp.com",
                        IsSession: !1,
                        Length: 1
                    }, {
                        Name: "_gat",
                        Host: "aerobaticapp.com",
                        IsSession: !1,
                        Length: 1
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 94333
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 0,
                        OptanonGroupId: 1,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "These cookies and other technologies are essential in order to enable the Atlassian Services to provide the feature you have requested, such as remembering you have logged in.  You are not able to opt-out of any cookies or other technologies that are \u201cstrictly necessary\u201d for the service."
                            },
                            GroupName: {
                                Text: "Strictly Necessary Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "bb_session",
                            Host: "bitbucket.org",
                            IsSession: !1,
                            Length: 13
                        }, {
                            Name: "OptanonConsent",
                            Host: "bitbucket.org",
                            IsSession: !1,
                            Length: 365
                        }, {
                            Name: "OptanonAlertBoxClosed",
                            Host: "bitbucket.org",
                            IsSession: !1,
                            Length: 365
                        }, {
                            Name: "csrftoken",
                            Host: "bitbucket.org",
                            IsSession: !1,
                            Length: 363
                        }, {
                            Name: "JSESSIONID",
                            Host: "bitbucket.org",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "OptanonConsent ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "atlassian.aid.avatar.version",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "atlassian.account.xsrf.token",
                            Host: "id.atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 94335
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "geolocation.onetrust.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "ARRAffinity",
                        Host: ".geolocation.onetrust.com",
                        IsSession: !0,
                        Length: 0
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 147330
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive"
                            },
                            GroupDescription: {
                                Text: "These cookies collect information about your browsing habits in order to make advertising relevant to you and your interests. They remember the websites you have visited and that information is shared with other parties such as advertising technology service providers and advertisers. Social Media cookies are used when you share information using a social media sharing button or \u201clike\u201d button on our Sites or you link your account or engage with our content on or through a social media site. The social network will record that you have done this. This information may be linked to targeting/advertising activities."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "_ga",
                            Host: "atlassian.com",
                            IsSession: !1,
                            Length: 730
                        }, {
                            Name: "_evga_86b0\u00a0 ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "optimizelyEndUserId ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_gid\u00a0",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_gat ",
                            Host: "atlassian.com",
                            IsSession: !1,
                            Length: 1
                        }, {
                            Name: "_gid",
                            Host: "aerobaticapp.com",
                            IsSession: !1,
                            Length: 1
                        }, {
                            Name: "_gat",
                            Host: "aerobaticapp.com",
                            IsSession: !1,
                            Length: 1
                        }],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 94333
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "prfct.co"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "pa_openx_ts",
                        Host: ".prfct.co",
                        IsSession: !1,
                        Length: 729
                    }, {
                        Name: "pa_twitter_ts",
                        Host: ".prfct.co",
                        IsSession: !1,
                        Length: 729
                    }, {
                        Name: "pa_google_ts",
                        Host: ".prfct.co",
                        IsSession: !1,
                        Length: 729
                    }, {
                        Name: "pa_yahoo_ts",
                        Host: ".prfct.co",
                        IsSession: !1,
                        Length: 729
                    }, {
                        Name: "pa_mrin_ts",
                        Host: ".prfct.co",
                        IsSession: !1,
                        Length: 729
                    }, {
                        Name: "pa_rubicon_ts",
                        Host: ".prfct.co",
                        IsSession: !1,
                        Length: 729
                    }, {
                        Name: "pa_uid",
                        Host: ".prfct.co",
                        IsSession: !1,
                        Length: 729
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 155512
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 2,
                        OptanonGroupId: 3,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Active"
                            },
                            GroupDescription: {
                                Text: "These cookies and similar technologies remember choices you make such as language or search parameters. We use these cookies to provide you with an experience more appropriate with your selections and to make your use of the Services more tailored. If you do not accept these cookies, some portions of the site may not function properly."
                            },
                            GroupName: {
                                Text: "Functional Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "__distillery",
                            Host: "bitbucket.org",
                            IsSession: !1,
                            Length: 364
                        }, {
                            Name: "ajs_user_id ",
                            Host: "atlassian.com",
                            IsSession: !1,
                            Length: 365
                        }, {
                            Name: "ajs%3Atest",
                            Host: "atl-paas.net",
                            IsSession: !1,
                            Length: 365
                        }, {
                            Name: "ajs%3Acookies",
                            Host: "atl-paas.net",
                            IsSession: !1,
                            Length: 365
                        }],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 94332
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "mathjax.org"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "__cfduid",
                        Host: ".mathjax.org",
                        IsSession: !1,
                        Length: 364
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 173487
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 0,
                        OptanonGroupId: 1,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "These cookies and other technologies are essential in order to enable the Atlassian Services to provide the feature you have requested, such as remembering you have logged in.  You are not able to opt-out of any cookies or other technologies that are \u201cstrictly necessary\u201d for the service."
                            },
                            GroupName: {
                                Text: "Strictly Necessary Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "bb_session",
                            Host: "bitbucket.org",
                            IsSession: !1,
                            Length: 13
                        }, {
                            Name: "OptanonConsent",
                            Host: "bitbucket.org",
                            IsSession: !1,
                            Length: 365
                        }, {
                            Name: "OptanonAlertBoxClosed",
                            Host: "bitbucket.org",
                            IsSession: !1,
                            Length: 365
                        }, {
                            Name: "csrftoken",
                            Host: "bitbucket.org",
                            IsSession: !1,
                            Length: 363
                        }, {
                            Name: "JSESSIONID",
                            Host: "bitbucket.org",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "OptanonConsent ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "atlassian.aid.avatar.version",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "atlassian.account.xsrf.token",
                            Host: "id.atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 94335
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "id.atlassian.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "atlassian.account.xsrf.token",
                        Host: "id.atlassian.com",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "atlassian.account.ffs.id",
                        Host: "id.atlassian.com",
                        IsSession: !0,
                        Length: 0
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 173483
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 1,
                        OptanonGroupId: 2,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Active"
                            },
                            GroupDescription: {
                                Text: "These cookies and similar technologies collect information on how visitors use the Services and enable us to improve how the Services operates."
                            },
                            GroupName: {
                                Text: "Performance Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                                Name: "__atl_path",
                                Host: ".bitbucket.org",
                                IsSession: !1,
                                Length: 3649
                            },
                            {
                                Name: "ctm ",
                                Host: "atlassian.com",
                                IsSession: !0,
                                Length: 0
                            }, {
                                Name: "__insp_slim ",
                                Host: "atlassian.com",
                                IsSession: !0,
                                Length: 0
                            }, {
                                Name: "__insp_wid ",
                                Host: "atlassian.com",
                                IsSession: !0,
                                Length: 0
                            }, {
                                Name: "__insp_nv ",
                                Host: "atlassian.com",
                                IsSession: !0,
                                Length: 0
                            }, {
                                Name: "seg_xid_ts ",
                                Host: "atlassian.com",
                                IsSession: !0,
                                Length: 0
                            }, {
                                Name: "__insp_targlpu ",
                                Host: "atlassian.com",
                                IsSession: !0,
                                Length: 0
                            }, {
                                Name: "_CT_RS_ ",
                                Host: "atlassian.com",
                                IsSession: !0,
                                Length: 0
                            }, {
                                Name: "seg_xid_fd ",
                                Host: "atlassian.com",
                                IsSession: !0,
                                Length: 0
                            },
                            {
                                Name: "__insp_targlpt ",
                                Host: "atlassian.com",
                                IsSession: !0,
                                Length: 0
                            }, {
                                Name: "WRUIDAWS ",
                                Host: "atlassian.com",
                                IsSession: !0,
                                Length: 0
                            }, {
                                Name: "__CT_Data ",
                                Host: "atlassian.com",
                                IsSession: !0,
                                Length: 0
                            }, {
                                Name: "__insp_norec_sess ",
                                Host: "atlassian.com",
                                IsSession: !0,
                                Length: 0
                            }, {
                                Name: "_sio",
                                Host: "atlassian.com",
                                IsSession: !0,
                                Length: 0
                            }, {
                                Name: "__tld__",
                                Host: "atl-paas.net",
                                IsSession: !0,
                                Length: 0
                            }
                        ],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 94331
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "clicktale"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "WRUIDAWS",
                        Host: ".bitbucket.org",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "ctm",
                        Host: ".bitbucket.org",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "_CT_RS_",
                        Host: ".bitbucket.org",
                        IsSession: !1,
                        Length: 29
                    }, {
                        Name: "__CT_Data",
                        Host: ".bitbucket.org",
                        IsSession: !1,
                        Length: 364
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 145889
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 0,
                        OptanonGroupId: 1,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "These cookies and other technologies are essential in order to enable the Atlassian Services to provide the feature you have requested, such as remembering you have logged in.  You are not able to opt-out of any cookies or other technologies that are \u201cstrictly necessary\u201d for the service."
                            },
                            GroupName: {
                                Text: "Strictly Necessary Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "bb_session",
                            Host: "bitbucket.org",
                            IsSession: !1,
                            Length: 13
                        }, {
                            Name: "OptanonConsent",
                            Host: "bitbucket.org",
                            IsSession: !1,
                            Length: 365
                        }, {
                            Name: "OptanonAlertBoxClosed",
                            Host: "bitbucket.org",
                            IsSession: !1,
                            Length: 365
                        }, {
                            Name: "csrftoken",
                            Host: "bitbucket.org",
                            IsSession: !1,
                            Length: 363
                        }, {
                            Name: "JSESSIONID",
                            Host: "bitbucket.org",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "OptanonConsent ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "atlassian.aid.avatar.version",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "atlassian.account.xsrf.token",
                            Host: "id.atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 94335
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "bitbucketfeedback.atlassian.net"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "atlassian.xsrf.token",
                        Host: "bitbucketfeedback.atlassian.net",
                        IsSession: !0,
                        Length: 0
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 173485
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive"
                            },
                            GroupDescription: {
                                Text: "These cookies collect information about your browsing habits in order to make advertising relevant to you and your interests. They remember the websites you have visited and that information is shared with other parties such as advertising technology service providers and advertisers. Social Media cookies are used when you share information using a social media sharing button or \u201clike\u201d button on our Sites or you link your account or engage with our content on or through a social media site. The social network will record that you have done this. This information may be linked to targeting/advertising activities."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "_ga",
                            Host: "atlassian.com",
                            IsSession: !1,
                            Length: 730
                        }, {
                            Name: "_evga_86b0\u00a0 ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "optimizelyEndUserId ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_gid\u00a0",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_gat ",
                            Host: "atlassian.com",
                            IsSession: !1,
                            Length: 1
                        }, {
                            Name: "_gid",
                            Host: "aerobaticapp.com",
                            IsSession: !1,
                            Length: 1
                        }, {
                            Name: "_gat",
                            Host: "aerobaticapp.com",
                            IsSession: !1,
                            Length: 1
                        }],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 94333
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "optimizely"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "optimizelyDomainTestCookie",
                        Host: ".bitbucket.org",
                        IsSession: !1,
                        Length: 179
                    }, {
                        Name: "optimizelyEndUserId",
                        Host: ".bitbucket.org",
                        IsSession: !1,
                        Length: 179
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 146517
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 1,
                        OptanonGroupId: 2,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Active"
                            },
                            GroupDescription: {
                                Text: "These cookies and similar technologies collect information on how visitors use the Services and enable us to improve how the Services operates."
                            },
                            GroupName: {
                                Text: "Performance Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "__atl_path",
                            Host: ".bitbucket.org",
                            IsSession: !1,
                            Length: 3649
                        }, {
                            Name: "ctm ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__insp_slim ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__insp_wid ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__insp_nv ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "seg_xid_ts ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__insp_targlpu ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_CT_RS_ ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "seg_xid_fd ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__insp_targlpt ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "WRUIDAWS ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__CT_Data ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__insp_norec_sess ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_sio",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__tld__",
                            Host: "atl-paas.net",
                            IsSession: !0,
                            Length: 0
                        }],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 94331
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "segment"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "__tld__",
                        Host: ".bitbucket.org",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "ajs_user_id",
                        Host: ".bitbucket.org",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "seg_xid",
                        Host: ".bitbucket.org",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "ajs%3Atest",
                        Host: ".bitbucket.org",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "_sio",
                        Host: ".bitbucket.org",
                        IsSession: !1,
                        Length: 3649
                    }, {
                        Name: "ajs_anonymous_id",
                        Host: ".bitbucket.org",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "ajs%3Acookies",
                        Host: ".bitbucket.org",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "seg_xid_fd",
                        Host: ".bitbucket.org",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "seg_xid_ts",
                        Host: ".bitbucket.org",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "ajs_group_id",
                        Host: ".bitbucket.org",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "ajs_group_id ",
                        Host: "atlassian.com",
                        IsSession: !1,
                        Length: 365
                    }, {
                        Name: "ajs_anonymous_id ",
                        Host: "atlassian.com",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "seg_xid ",
                        Host: "atlassian.com",
                        IsSession: !0,
                        Length: 0
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 144595
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive"
                            },
                            GroupDescription: {
                                Text: "These cookies collect information about your browsing habits in order to make advertising relevant to you and your interests. They remember the websites you have visited and that information is shared with other parties such as advertising technology service providers and advertisers. Social Media cookies are used when you share information using a social media sharing button or \u201clike\u201d button on our Sites or you link your account or engage with our content on or through a social media site. The social network will record that you have done this. This information may be linked to targeting/advertising activities."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "_ga",
                            Host: "atlassian.com",
                            IsSession: !1,
                            Length: 730
                        }, {
                            Name: "_evga_86b0\u00a0 ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "optimizelyEndUserId ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_gid\u00a0",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_gat ",
                            Host: "atlassian.com",
                            IsSession: !1,
                            Length: 1
                        }, {
                            Name: "_gid",
                            Host: "aerobaticapp.com",
                            IsSession: !1,
                            Length: 1
                        }, {
                            Name: "_gat",
                            Host: "aerobaticapp.com",
                            IsSession: !1,
                            Length: 1
                        }],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 94333
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "cdn.syndication.twimg.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "lang",
                        Host: "cdn.syndication.twimg.com",
                        IsSession: !0,
                        Length: 0
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 155516
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive"
                            },
                            GroupDescription: {
                                Text: "These cookies collect information about your browsing habits in order to make advertising relevant to you and your interests. They remember the websites you have visited and that information is shared with other parties such as advertising technology service providers and advertisers. Social Media cookies are used when you share information using a social media sharing button or \u201clike\u201d button on our Sites or you link your account or engage with our content on or through a social media site. The social network will record that you have done this. This information may be linked to targeting/advertising activities."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "_ga",
                            Host: "atlassian.com",
                            IsSession: !1,
                            Length: 730
                        }, {
                            Name: "_evga_86b0\u00a0 ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "optimizelyEndUserId ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_gid\u00a0",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_gat ",
                            Host: "atlassian.com",
                            IsSession: !1,
                            Length: 1
                        }, {
                            Name: "_gid",
                            Host: "aerobaticapp.com",
                            IsSession: !1,
                            Length: 1
                        }, {
                            Name: "_gat",
                            Host: "aerobaticapp.com",
                            IsSession: !1,
                            Length: 1
                        }],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 94333
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "adnxs.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "anj",
                        Host: ".adnxs.com",
                        IsSession: !1,
                        Length: 89
                    }, {
                        Name: "uuid2",
                        Host: ".adnxs.com",
                        IsSession: !1,
                        Length: 89
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 155514
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive"
                            },
                            GroupDescription: {
                                Text: "These cookies collect information about your browsing habits in order to make advertising relevant to you and your interests. They remember the websites you have visited and that information is shared with other parties such as advertising technology service providers and advertisers. Social Media cookies are used when you share information using a social media sharing button or \u201clike\u201d button on our Sites or you link your account or engage with our content on or through a social media site. The social network will record that you have done this. This information may be linked to targeting/advertising activities."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "_ga",
                            Host: "atlassian.com",
                            IsSession: !1,
                            Length: 730
                        }, {
                            Name: "_evga_86b0\u00a0 ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "optimizelyEndUserId ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_gid\u00a0",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_gat ",
                            Host: "atlassian.com",
                            IsSession: !1,
                            Length: 1
                        }, {
                            Name: "_gid",
                            Host: "aerobaticapp.com",
                            IsSession: !1,
                            Length: 1
                        }, {
                            Name: "_gat",
                            Host: "aerobaticapp.com",
                            IsSession: !1,
                            Length: 1
                        }],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 94333
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "rum.optimizely.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "AWSELB",
                        Host: "rum.optimizely.com",
                        IsSession: !1,
                        Length: 0
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 172277
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive"
                            },
                            GroupDescription: {
                                Text: "These cookies collect information about your browsing habits in order to make advertising relevant to you and your interests. They remember the websites you have visited and that information is shared with other parties such as advertising technology service providers and advertisers. Social Media cookies are used when you share information using a social media sharing button or \u201clike\u201d button on our Sites or you link your account or engage with our content on or through a social media site. The social network will record that you have done this. This information may be linked to targeting/advertising activities."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "_ga",
                            Host: "atlassian.com",
                            IsSession: !1,
                            Length: 730
                        }, {
                            Name: "_evga_86b0\u00a0 ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "optimizelyEndUserId ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_gid\u00a0",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_gat ",
                            Host: "atlassian.com",
                            IsSession: !1,
                            Length: 1
                        }, {
                            Name: "_gid",
                            Host: "aerobaticapp.com",
                            IsSession: !1,
                            Length: 1
                        }, {
                            Name: "_gat",
                            Host: "aerobaticapp.com",
                            IsSession: !1,
                            Length: 1
                        }],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 94333
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "openx.net"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "i",
                        Host: ".openx.net",
                        IsSession: !1,
                        Length: 364
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 155513
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 1,
                        OptanonGroupId: 2,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Active"
                            },
                            GroupDescription: {
                                Text: "These cookies and similar technologies collect information on how visitors use the Services and enable us to improve how the Services operates."
                            },
                            GroupName: {
                                Text: "Performance Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "__atl_path",
                            Host: ".bitbucket.org",
                            IsSession: !1,
                            Length: 3649
                        }, {
                            Name: "ctm ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__insp_slim ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__insp_wid ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__insp_nv ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "seg_xid_ts ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__insp_targlpu ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_CT_RS_ ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "seg_xid_fd ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__insp_targlpt ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "WRUIDAWS ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__CT_Data ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__insp_norec_sess ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_sio",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__tld__",
                            Host: "atl-paas.net",
                            IsSession: !0,
                            Length: 0
                        }],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 94331
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "atl-paas.net"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "ajs%3Atest",
                        Host: ".atl-paas.net",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "__tld__",
                        Host: ".atl-paas.net",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "ajs%3Acookies",
                        Host: ".atl-paas.net",
                        IsSession: !1,
                        Length: 364
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 173486
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 1,
                        OptanonGroupId: 2,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Active"
                            },
                            GroupDescription: {
                                Text: "These cookies and similar technologies collect information on how visitors use the Services and enable us to improve how the Services operates."
                            },
                            GroupName: {
                                Text: "Performance Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "__atl_path",
                            Host: ".bitbucket.org",
                            IsSession: !1,
                            Length: 3649
                        }, {
                            Name: "ctm ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__insp_slim ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__insp_wid ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__insp_nv ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "seg_xid_ts ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__insp_targlpu ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_CT_RS_ ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "seg_xid_fd ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__insp_targlpt ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "WRUIDAWS ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__CT_Data ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__insp_norec_sess ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_sio",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__tld__",
                            Host: "atl-paas.net",
                            IsSession: !0,
                            Length: 0
                        }],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 94331
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "fast.wistia.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "wistia-http2-push-disabled",
                        Host: ".fast.wistia.com",
                        IsSession: !1,
                        Length: 0
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 162898
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive"
                            },
                            GroupDescription: {
                                Text: "These cookies collect information about your browsing habits in order to make advertising relevant to you and your interests. They remember the websites you have visited and that information is shared with other parties such as advertising technology service providers and advertisers. Social Media cookies are used when you share information using a social media sharing button or \u201clike\u201d button on our Sites or you link your account or engage with our content on or through a social media site. The social network will record that you have done this. This information may be linked to targeting/advertising activities."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "_ga",
                            Host: "atlassian.com",
                            IsSession: !1,
                            Length: 730
                        }, {
                            Name: "_evga_86b0\u00a0 ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "optimizelyEndUserId ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_gid\u00a0",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_gat ",
                            Host: "atlassian.com",
                            IsSession: !1,
                            Length: 1
                        }, {
                            Name: "_gid",
                            Host: "aerobaticapp.com",
                            IsSession: !1,
                            Length: 1
                        }, {
                            Name: "_gat",
                            Host: "aerobaticapp.com",
                            IsSession: !1,
                            Length: 1
                        }],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 94333
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "evergage"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "_evga_3efd",
                        Host: ".bitbucket.org",
                        IsSession: !1,
                        Length: 729
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 145888
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive"
                            },
                            GroupDescription: {
                                Text: "These cookies collect information about your browsing habits in order to make advertising relevant to you and your interests. They remember the websites you have visited and that information is shared with other parties such as advertising technology service providers and advertisers. Social Media cookies are used when you share information using a social media sharing button or \u201clike\u201d button on our Sites or you link your account or engage with our content on or through a social media site. The social network will record that you have done this. This information may be linked to targeting/advertising activities."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "_ga",
                            Host: "atlassian.com",
                            IsSession: !1,
                            Length: 730
                        }, {
                            Name: "_evga_86b0\u00a0 ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "optimizelyEndUserId ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_gid\u00a0",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_gat ",
                            Host: "atlassian.com",
                            IsSession: !1,
                            Length: 1
                        }, {
                            Name: "_gid",
                            Host: "aerobaticapp.com",
                            IsSession: !1,
                            Length: 1
                        }, {
                            Name: "_gat",
                            Host: "aerobaticapp.com",
                            IsSession: !1,
                            Length: 1
                        }],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 94333
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "aerobaticapp.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "_gid",
                        Host: ".aerobaticapp.com",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "_ga",
                        Host: ".aerobaticapp.com",
                        IsSession: !1,
                        Length: 729
                    }, {
                        Name: "_gat",
                        Host: ".aerobaticapp.com",
                        IsSession: !1,
                        Length: 0
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 173482
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 0,
                        OptanonGroupId: 1,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "These cookies and other technologies are essential in order to enable the Atlassian Services to provide the feature you have requested, such as remembering you have logged in.  You are not able to opt-out of any cookies or other technologies that are \u201cstrictly necessary\u201d for the service."
                            },
                            GroupName: {
                                Text: "Strictly Necessary Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "bb_session",
                            Host: "bitbucket.org",
                            IsSession: !1,
                            Length: 13
                        }, {
                            Name: "OptanonConsent",
                            Host: "bitbucket.org",
                            IsSession: !1,
                            Length: 365
                        }, {
                            Name: "OptanonAlertBoxClosed",
                            Host: "bitbucket.org",
                            IsSession: !1,
                            Length: 365
                        }, {
                            Name: "csrftoken",
                            Host: "bitbucket.org",
                            IsSession: !1,
                            Length: 363
                        }, {
                            Name: "JSESSIONID",
                            Host: "bitbucket.org",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "OptanonConsent ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "atlassian.aid.avatar.version",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "atlassian.account.xsrf.token",
                            Host: "id.atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 94335
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "my.atlassian.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "gsession-0",
                        Host: "my.atlassian.com",
                        IsSession: !1,
                        Length: 0
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 173484
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 2,
                        OptanonGroupId: 3,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Active"
                            },
                            GroupDescription: {
                                Text: "These cookies and similar technologies remember choices you make such as language or search parameters. We use these cookies to provide you with an experience more appropriate with your selections and to make your use of the Services more tailored. If you do not accept these cookies, some portions of the site may not function properly."
                            },
                            GroupName: {
                                Text: "Functional Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "__distillery",
                            Host: "bitbucket.org",
                            IsSession: !1,
                            Length: 364
                        }, {
                            Name: "ajs_user_id ",
                            Host: "atlassian.com",
                            IsSession: !1,
                            Length: 365
                        }, {
                            Name: "ajs%3Atest",
                            Host: "atl-paas.net",
                            IsSession: !1,
                            Length: 365
                        }, {
                            Name: "ajs%3Acookies",
                            Host: "atl-paas.net",
                            IsSession: !1,
                            Length: 365
                        }],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 94332
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "magnolia"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "VISITOR",
                        Host: "bitbucket.org",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "NEW_VISITOR",
                        Host: "bitbucket.org",
                        IsSession: !1,
                        Length: 0
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 144594
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive"
                            },
                            GroupDescription: {
                                Text: "These cookies collect information about your browsing habits in order to make advertising relevant to you and your interests. They remember the websites you have visited and that information is shared with other parties such as advertising technology service providers and advertisers. Social Media cookies are used when you share information using a social media sharing button or \u201clike\u201d button on our Sites or you link your account or engage with our content on or through a social media site. The social network will record that you have done this. This information may be linked to targeting/advertising activities."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "_ga",
                            Host: "atlassian.com",
                            IsSession: !1,
                            Length: 730
                        }, {
                            Name: "_evga_86b0\u00a0 ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "optimizelyEndUserId ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_gid\u00a0",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_gat ",
                            Host: "atlassian.com",
                            IsSession: !1,
                            Length: 1
                        }, {
                            Name: "_gid",
                            Host: "aerobaticapp.com",
                            IsSession: !1,
                            Length: 1
                        }, {
                            Name: "_gat",
                            Host: "aerobaticapp.com",
                            IsSession: !1,
                            Length: 1
                        }],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 94333
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "api.autopilothq.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "2f4c1d42d2a84522ac151d8736f8fbef3576a517edc74dc28bd142489cf5ba04",
                        Host: "api.autopilothq.com",
                        IsSession: !1,
                        Length: 364
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 150453
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 0,
                        OptanonGroupId: 1,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "These cookies and other technologies are essential in order to enable the Atlassian Services to provide the feature you have requested, such as remembering you have logged in.  You are not able to opt-out of any cookies or other technologies that are \u201cstrictly necessary\u201d for the service."
                            },
                            GroupName: {
                                Text: "Strictly Necessary Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "bb_session",
                            Host: "bitbucket.org",
                            IsSession: !1,
                            Length: 13
                        }, {
                            Name: "OptanonConsent",
                            Host: "bitbucket.org",
                            IsSession: !1,
                            Length: 365
                        }, {
                            Name: "OptanonAlertBoxClosed",
                            Host: "bitbucket.org",
                            IsSession: !1,
                            Length: 365
                        }, {
                            Name: "csrftoken",
                            Host: "bitbucket.org",
                            IsSession: !1,
                            Length: 363
                        }, {
                            Name: "JSESSIONID",
                            Host: "bitbucket.org",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "OptanonConsent ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "atlassian.aid.avatar.version",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "atlassian.account.xsrf.token",
                            Host: "id.atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 94335
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "rollbar.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "logged_in",
                        Host: "rollbar.com",
                        IsSession: !0,
                        Length: 0
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 173480
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive"
                            },
                            GroupDescription: {
                                Text: "These cookies collect information about your browsing habits in order to make advertising relevant to you and your interests. They remember the websites you have visited and that information is shared with other parties such as advertising technology service providers and advertisers. Social Media cookies are used when you share information using a social media sharing button or \u201clike\u201d button on our Sites or you link your account or engage with our content on or through a social media site. The social network will record that you have done this. This information may be linked to targeting/advertising activities."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "_ga",
                            Host: "atlassian.com",
                            IsSession: !1,
                            Length: 730
                        }, {
                            Name: "_evga_86b0\u00a0 ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "optimizelyEndUserId ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_gid\u00a0",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_gat ",
                            Host: "atlassian.com",
                            IsSession: !1,
                            Length: 1
                        }, {
                            Name: "_gid",
                            Host: "aerobaticapp.com",
                            IsSession: !1,
                            Length: 1
                        }, {
                            Name: "_gat",
                            Host: "aerobaticapp.com",
                            IsSession: !1,
                            Length: 1
                        }],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 94333
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "youtube.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                            Name: "SID",
                            Host: ".youtube.com",
                            IsSession: !1,
                            Length: 282
                        }, {
                            Name: "HSID",
                            Host: ".youtube.com",
                            IsSession: !1,
                            Length: 282
                        }, {
                            Name: "demographics",
                            Host: ".youtube.com",
                            IsSession: !1,
                            Length: 92
                        }, {
                            Name: "VISITOR_INFO1_LIVE",
                            Host: ".youtube.com",
                            IsSession: !1,
                            Length: 179
                        }, {
                            Name: "PREF",
                            Host: ".youtube.com",
                            IsSession: !1,
                            Length: 1612
                        },
                        {
                            Name: "APISID",
                            Host: ".youtube.com",
                            IsSession: !1,
                            Length: 282
                        }, {
                            Name: "GPS",
                            Host: ".youtube.com",
                            IsSession: !1,
                            Length: 0
                        }, {
                            Name: "SSID",
                            Host: ".youtube.com",
                            IsSession: !1,
                            Length: 282
                        }, {
                            Name: "LOGIN_INFO",
                            Host: ".youtube.com",
                            IsSession: !1,
                            Length: 729
                        }, {
                            Name: "YSC",
                            Host: ".youtube.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "SAPISID",
                            Host: ".youtube.com",
                            IsSession: !1,
                            Length: 282
                        }
                    ],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 155515
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 101,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive"
                            },
                            GroupDescription: {
                                Text: "These cookies collect information about your browsing habits in order to make advertising relevant to you and your interests. They remember the websites you have visited and that information is shared with other parties such as advertising technology service providers and advertisers. Social Media cookies are used when you share information using a social media sharing button or \u201clike\u201d button on our Sites or you link your account or engage with our content on or through a social media site. The social network will record that you have done this. This information may be linked to targeting/advertising activities."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "_ga",
                            Host: "atlassian.com",
                            IsSession: !1,
                            Length: 730
                        }, {
                            Name: "_evga_86b0\u00a0 ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "optimizelyEndUserId ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_gid\u00a0",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_gat ",
                            Host: "atlassian.com",
                            IsSession: !1,
                            Length: 1
                        }, {
                            Name: "_gid",
                            Host: "aerobaticapp.com",
                            IsSession: !1,
                            Length: 1
                        }, {
                            Name: "_gat",
                            Host: "aerobaticapp.com",
                            IsSession: !1,
                            Length: 1
                        }],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 94333
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "facebook.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "datr",
                        Host: ".facebook.com",
                        IsSession: !1,
                        Length: 282
                    }, {
                        Name: "fr",
                        Host: ".facebook.com",
                        IsSession: !1,
                        Length: 89
                    }, {
                        Name: "lu",
                        Host: ".facebook.com",
                        IsSession: !1,
                        Length: 282
                    }, {
                        Name: "_fbp",
                        Host: ".bitbucket.org",
                        IsSession: !1,
                        Length: 0
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 94336
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 117,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive"
                            },
                            GroupDescription: {
                                Text: "These cookies collect information about your browsing habits in order to make advertising relevant to you and your interests. They remember the websites you have visited and that information is shared with other parties such as advertising technology service providers and advertisers. Social Media cookies are used when you share information using a social media sharing button or \u201clike\u201d button on our Sites or you link your account or engage with our content on or through a social media site. The social network will record that you have done this. This information may be linked to targeting/advertising activities."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "_ga",
                            Host: "atlassian.com",
                            IsSession: !1,
                            Length: 730
                        }, {
                            Name: "_evga_86b0\u00a0 ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "optimizelyEndUserId ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_gid\u00a0",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_gat ",
                            Host: "atlassian.com",
                            IsSession: !1,
                            Length: 1
                        }, {
                            Name: "_gid",
                            Host: "aerobaticapp.com",
                            IsSession: !1,
                            Length: 1
                        }, {
                            Name: "_gat",
                            Host: "aerobaticapp.com",
                            IsSession: !1,
                            Length: 1
                        }],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 94333
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "twitter.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                            Name: "auth_token",
                            Host: ".twitter.com",
                            IsSession: !1,
                            Length: 5267
                        }, {
                            Name: "twll",
                            Host: ".twitter.com",
                            IsSession: !1,
                            Length: 1614
                        }, {
                            Name: "secure_session",
                            Host: ".twitter.com",
                            IsSession: !1,
                            Length: 5267
                        }, {
                            Name: "guest_id",
                            Host: ".twitter.com",
                            IsSession: !1,
                            Length: 282
                        }, {
                            Name: "__utma",
                            Host: ".twitter.com",
                            IsSession: !1,
                            Length: 282
                        },
                        {
                            Name: "personalization_id",
                            Host: ".twitter.com",
                            IsSession: !1,
                            Length: 729
                        }, {
                            Name: "remember_checked",
                            Host: ".twitter.com",
                            IsSession: !1,
                            Length: 1614
                        }, {
                            Name: "remember_checked_on",
                            Host: ".twitter.com",
                            IsSession: !1,
                            Length: 1614
                        }, {
                            Name: "lang",
                            Host: "analytics.twitter.com",
                            IsSession: !0,
                            Length: 0
                        }
                    ],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 94352
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 120,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive"
                            },
                            GroupDescription: {
                                Text: "These cookies collect information about your browsing habits in order to make advertising relevant to you and your interests. They remember the websites you have visited and that information is shared with other parties such as advertising technology service providers and advertisers. Social Media cookies are used when you share information using a social media sharing button or \u201clike\u201d button on our Sites or you link your account or engage with our content on or through a social media site. The social network will record that you have done this. This information may be linked to targeting/advertising activities."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "_ga",
                            Host: "atlassian.com",
                            IsSession: !1,
                            Length: 730
                        }, {
                            Name: "_evga_86b0\u00a0 ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "optimizelyEndUserId ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_gid\u00a0",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_gat ",
                            Host: "atlassian.com",
                            IsSession: !1,
                            Length: 1
                        }, {
                            Name: "_gid",
                            Host: "aerobaticapp.com",
                            IsSession: !1,
                            Length: 1
                        }, {
                            Name: "_gat",
                            Host: "aerobaticapp.com",
                            IsSession: !1,
                            Length: 1
                        }],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 94333
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "google.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "_gat_atl",
                        Host: ".bitbucket.org",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "_gid",
                        Host: ".bitbucket.org",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "_gat",
                        Host: ".bitbucket.org",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "_ga",
                        Host: ".bitbucket.org",
                        IsSession: !1,
                        Length: 729
                    }, {
                        Name: "APISID",
                        Host: ".google.com",
                        IsSession: !1,
                        Length: 282
                    }, {
                        Name: "SSID",
                        Host: ".google.com",
                        IsSession: !1,
                        Length: 282
                    }, {
                        Name: "PREF",
                        Host: ".google.com",
                        IsSession: !1,
                        Length: 282
                    }, {
                        Name: "SID",
                        Host: ".google.com",
                        IsSession: !1,
                        Length: 282
                    }, {
                        Name: "SAPISID",
                        Host: ".google.com",
                        IsSession: !1,
                        Length: 282
                    }, {
                        Name: "HSID",
                        Host: ".google.com",
                        IsSession: !1,
                        Length: 282
                    }, {
                        Name: "_gcl_au",
                        Host: ".bitbucket.org",
                        IsSession: !1,
                        Length: 89
                    }, {
                        Name: "NID",
                        Host: ".google.com",
                        IsSession: !1,
                        Length: 182
                    }, {
                        Name: "_gat_repo",
                        Host: ".bitbucket.org",
                        IsSession: !1,
                        Length: 0
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 94355
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 144,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 1,
                        OptanonGroupId: 2,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Active"
                            },
                            GroupDescription: {
                                Text: "These cookies and similar technologies collect information on how visitors use the Services and enable us to improve how the Services operates."
                            },
                            GroupName: {
                                Text: "Performance Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "__atl_path",
                            Host: ".bitbucket.org",
                            IsSession: !1,
                            Length: 3649
                        }, {
                            Name: "ctm ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__insp_slim ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__insp_wid ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__insp_nv ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "seg_xid_ts ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__insp_targlpu ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_CT_RS_ ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "seg_xid_fd ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__insp_targlpt ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "WRUIDAWS ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__CT_Data ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__insp_norec_sess ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_sio",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__tld__",
                            Host: "atl-paas.net",
                            IsSession: !0,
                            Length: 0
                        }],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 94331
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "nr-data.net"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "JSESSIONID",
                        Host: ".nr-data.net",
                        IsSession: !0,
                        Length: 0
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 94379
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 160,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive"
                            },
                            GroupDescription: {
                                Text: "These cookies collect information about your browsing habits in order to make advertising relevant to you and your interests. They remember the websites you have visited and that information is shared with other parties such as advertising technology service providers and advertisers. Social Media cookies are used when you share information using a social media sharing button or \u201clike\u201d button on our Sites or you link your account or engage with our content on or through a social media site. The social network will record that you have done this. This information may be linked to targeting/advertising activities."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "_ga",
                            Host: "atlassian.com",
                            IsSession: !1,
                            Length: 730
                        }, {
                            Name: "_evga_86b0\u00a0 ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "optimizelyEndUserId ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_gid\u00a0",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_gat ",
                            Host: "atlassian.com",
                            IsSession: !1,
                            Length: 1
                        }, {
                            Name: "_gid",
                            Host: "aerobaticapp.com",
                            IsSession: !1,
                            Length: 1
                        }, {
                            Name: "_gat",
                            Host: "aerobaticapp.com",
                            IsSession: !1,
                            Length: 1
                        }],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 94333
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "bing.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "MUID",
                        Host: ".bing.com",
                        IsSession: !1,
                        Length: 389
                    }, {
                        Name: "MUIDB",
                        Host: "bat.bing.com",
                        IsSession: !1,
                        Length: 389
                    }, {
                        Name: "MR",
                        Host: ".bat.bing.com",
                        IsSession: !1,
                        Length: 175
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 94395
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 180,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive"
                            },
                            GroupDescription: {
                                Text: "These cookies collect information about your browsing habits in order to make advertising relevant to you and your interests. They remember the websites you have visited and that information is shared with other parties such as advertising technology service providers and advertisers. Social Media cookies are used when you share information using a social media sharing button or \u201clike\u201d button on our Sites or you link your account or engage with our content on or through a social media site. The social network will record that you have done this. This information may be linked to targeting/advertising activities."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "_ga",
                            Host: "atlassian.com",
                            IsSession: !1,
                            Length: 730
                        }, {
                            Name: "_evga_86b0\u00a0 ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "optimizelyEndUserId ",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_gid\u00a0",
                            Host: "atlassian.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_gat ",
                            Host: "atlassian.com",
                            IsSession: !1,
                            Length: 1
                        }, {
                            Name: "_gid",
                            Host: "aerobaticapp.com",
                            IsSession: !1,
                            Length: 1
                        }, {
                            Name: "_gat",
                            Host: "aerobaticapp.com",
                            IsSession: !1,
                            Length: 1
                        }],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 94333
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "doubleclick.net"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "id",
                        Host: ".doubleclick.net",
                        IsSession: !1,
                        Length: 282
                    }, {
                        Name: "IDE",
                        Host: ".doubleclick.net",
                        IsSession: !1,
                        Length: 2915086
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 94415
                }
            ],
            ConsentModel: {
                Name: "Owner Defined"
            },
            Language: {
                Culture: "en-GB"
            },
            showBannerCloseButton: !0,
            ShowPreferenceCenterCloseButton: !0,
            FooterDescriptionText: "",
            IsDntEnabled: !1,
            CustomJs: null,
            LifespanTypeText: null,
            LifespanDurationText: null,
            IsConsentLoggingEnabled: !1,
            IsIabThirdPartyCookieEnabled: !0,
            CloseText: "Close",
            BannerCloseButtonText: "Close",
            OnClickAcceptAllCookies: !0,
            ScrollAcceptsAllCookiesAndClosesBanner: !1
        });
        return sa
    }

    function jb() {
        for (var b = t(), e = document.getElementsByTagName("script"), g = 0; g < e.length; ++g) {
            var h;
            h = e[g];
            var f = b.cctId;
            h = h.getAttribute("src") ? -1 !== h.getAttribute("src").indexOf(f) : !1;
            if (h) {
                fa = Va(e[g].src);
                break
            }
        }
    }

    function V(b) {
        var e = Va(b);
        fa && e && fa.hostname !== e.hostname && (b = b.replace(e.hostname, fa.hostname));
        return b
    }

    function Va(b) {
        var e = document.createElement("a");
        e.href = b;
        return e
    }

    function ta(b) {
        var e = document.querySelector("#optanon-popup-wrapper");
        13 === b.keyCode && e.focus()
    }

    function kb(b) {
        var e = document.querySelector(".optanon-toggle-display.cookie-settings-button");
        27 === b.keyCode && (e.focus(), ua(b))
    }

    function ua(b) {
        var e = document.querySelector(".optanon-close-ui"),
            g = document.querySelector("#optanon-popup-top").children[0],
            f = document.querySelector("#optanon-popup-bottom").children,
            m = document.querySelector("#optanon-menu").children,
            n = document.querySelector("#optanon-vendor-consent-text"),
            q = document.querySelector("#optanon");
        if (13 === b.keyCode || 27 === b.keyCode) H(), document.querySelector(".optanon-toggle-display.cookie-settings-button").focus(), g ? g.removeEventListener("keydown", ha) : m[0].removeEventListener("keydown", ha), 0 < f.length && ("block" === document.querySelector(".optanon-button-wrapper.optanon-allow-all-button.optanon-allow-all").style.display ? f[f.length - 1].removeEventListener("keydown",
            ia) : f[f.length - 2].removeEventListener("keydown", ia)), m[m.length - 1].removeEventListener("keydown", Wa), q.removeEventListener("keyup", ta), n && n.removeEventListener("keyup", ta), e && e.removeEventListener("keydown", ua)
    }

    function Wa(b) {
        9 !== b.keyCode || b.shiftKey || (document.querySelector(".optanon-white-button-middle \x3e button").removeAttribute("tabindex"), document.querySelector(".optanon-allow-all \x3e .optanon-white-button-middle \x3e button").removeAttribute("tabindex"))
    }

    function ia(b) {
        var e = document.querySelector("#optanon-popup-wrapper"),
            g = g = document.querySelector(".optanon-allow-all \x3e .optanon-white-button-middle \x3e button");
        9 === b.keyCode && e.focus();
        9 !== b.keyCode || b.shiftKey || (document.querySelector(".optanon-white-button-middle \x3e button").removeAttribute("tabindex"), g.removeAttribute("tabindex"));
        9 === b.keyCode && b.shiftKey && document.querySelector("#optanon-popup-bottom \x3e a").focus()
    }

    function ha(b) {
        var e = document.querySelector(".optanon-allow-all \x3e .optanon-white-button-middle \x3e button"),
            g = document.querySelector(".optanon-white-button-middle \x3e button");
        9 === b.keyCode && b.shiftKey && (g.setAttribute("tabindex", 5), e.setAttribute("tabindex", 4));
        9 !== b.keyCode || b.shiftKey || (g.removeAttribute("tabindex"), e.removeAttribute("tabindex"))
    }

    function na(b) {
        var e = !1,
            g = Xa(window.location.href),
            h = f("\x3cdiv\x3e\x3c/div\x3e");
        h.html(b);
        b = f("a", h);
        for (h = 0; h < b.length; h++)
            if (Xa(b[h].href) == g) {
                e = !0;
                break
            } return e
    }

    function Xa(b) {
        return b.toLowerCase().replace(/(^\w+:|^)\/\//, "").replace("www.", "")
    }

    function lb() {
        "function" != typeof Object.assign && Object.defineProperty(Object,
            "assign", {
                value: function(b, e) {
                    if (null == b) throw new TypeError("Cannot convert undefined or null to object");
                    for (var g = Object(b), f = 1; f < arguments.length; f++) {
                        var m = arguments[f];
                        if (null != m)
                            for (var n in m) Object.prototype.hasOwnProperty.call(m, n) && (g[n] = m[n])
                    }
                    return g
                },
                writable: !0,
                configurable: !0
            })
    }

    function mb() {
        Array.prototype.fill || Object.defineProperty(Array.prototype, "fill", {
            value: function(b, e, g) {
                if (null == this) throw new TypeError("this is null or not defined");
                var f = Object(this),
                    m = f.length >>> 0;
                e >>=
                    0;
                e = 0 > e ? Math.max(m + e, 0) : Math.min(e, m);
                g = void 0 === g ? m : g >> 0;
                for (m = 0 > g ? Math.max(m + g, 0) : Math.min(g, m); e < m;) f[e] = b, e++;
                return f
            }
        })
    }

    function nb() {
        var b = 0;
        f(".banner-content a").length && f(".banner-content a").each(function(e, g) {
            f(g).addClass("banner-policy-link");
            f(g).attr("tabindex", ++b);
            f(g).attr("aria-label", f(g).text())
        });
        f(".cookie-settings-button").length && f(".cookie-settings-button").attr("tabindex", ++b);
        f(".accept-cookies-button").length && f(".accept-cookies-button").attr("tabindex", ++b);
        f(".banner-close-button").length &&
            f(".banner-close-button").attr("tabindex", ++b)
    }

    function Ka(b, e) {
        var g = document.querySelector(b),
            f = setInterval(function() {
                g.style.opacity || (g.style.opacity = 1);
                0 < g.style.opacity ? g.style.opacity -= .1 : (g.style.display = "none", clearInterval(f))
            }, e)
    }

    function ob() {
        $.ajax({
            type: "GET",
            crossDomain: !0,
            dataType: "json",
            url: "https://geolocation.onetrust.com/cookieconsentpub/v1/geo/countries/EU?callback\x3d?"
        }).fail(function(b) {
            200 !== b.status && window.jsonFeed({
                displayPopup: !0
            })
        })
    }

    function pb() {
        var b = document.createElement("script"),
            e = document.createElement("script");
        b.type = "text/javascript";
        b.src = "https://code.jquery.com/jquery-3.3.1.min.js";
        b.integrity = "sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8\x3d";
        b.crossOrigin = "anonymous";
        e.type = "text/javascript";
        e.src = "https://code.jquery.com/jquery-1.11.2.min.js";
        e.integrity = "sha256-Ls0pXSlb7AYs7evhd+VLnWsZ/AqEHcXBeMZUycz/CcA\x3d";
        e.crossOrigin = "anonymous";
        document.getElementsByTagName("head")[0].appendChild(b);
        b.onload = b.onreadystatechange = function() {
            this.readyState && "loaded" !=
                this.readyState && "complete" != this.readyState || (ob(), bb())
        }
    }
    String.prototype.includes || (String.prototype.includes = function(b, e) {
        "number" !== typeof e && (e = 0);
        return e + b.length > this.length ? !1 : -1 !== this.indexOf(b, e)
    });
    var W = !1,
        Oa = "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack,
        Ua = function() {
            var b = !0,
                e, g = t(),
                f;
            for (f = 0; f < g.Groups.length; f += 1)
                if (e = g.Groups[f], D(e) && (!A(e) || A(e) && ("active" == A(e).toLowerCase() || "inactive landingpage" == A(e).toLowerCase() || "do not track" == A(e).toLowerCase()))) {
                    b = !1;
                    break
                } return b
        }(),
        ab = function() {
            var b = !0,
                e, g = t(),
                f;
            for (f = 0; f < g.Groups.length; f += 1)
                if (e = g.Groups[f], D(e) && (e = A(e).toLowerCase(), "inactive landingpage" !== e && "always active" !== e)) {
                    b = !1;
                    break
                } return b
        }(),
        pa = !1,
        u, qa = [],
        ra = [],
        Q = [],
        R = [],
        G = t().AboutCookiesText,
        fa = null,
        B = !1,
        ja = !1,
        Ba = !0,
        sa, M = !1,
        T = {
            KEEPCENTERTILEBANNEROPEN: "keepBannerOpen",
            IMPLIEDCONSENT: "implied consent",
            FIRSTPAGEVIEW: "firstPageView"
        },
        f;
    this.loadDefaultBannerGroup = function(b) {
        t();
        z("OptanonConsent", "EU") && wa("OptanonConsent", "EU", b && b.displayPopup ?
            b.displayPopup : M);
        xa();
        f(window).one("otloadbanner", function() {
            N();
            ya();
            za();
            var b = t(),
                g = '\x3cdiv class\x3d"optanon-alert-box-wrapper  " role\x3d"alertdialog" aria-labelledby\x3d"alert-box-title" aria-describedby\x3d"alert-box-message" style\x3d"display:none"\x3e\x3cdiv class\x3d"optanon-alert-box-bottom-top"\x3e';
            b.showBannerCloseButton && (b.BannerCloseButtonText || (b.BannerCloseButtonText = "Close"), g = g + '\x3cdiv class\x3d"optanon-alert-box-corner-close"\x3e\x3cbutton class\x3d"optanon-alert-box-close banner-close-button" aria-label\x3d"' +
                b.BannerCloseButtonText + '" title\x3d"' + b.BannerCloseButtonText + "\" onClick\x3d\"Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Banner Close Button');\"\x3e\x3c/button\x3e\x3c/div\x3e");
            g = g + '\x3c/div\x3e\x3cdiv class\x3d"optanon-alert-box-bg"\x3e\x3cdiv class\x3d"optanon-alert-box-logo"\x3e \x3c/div\x3e\x3cdiv class\x3d"optanon-alert-box-body"\x3e\x3cp class\x3d"optanon-alert-box-title legacy-banner-title' + (b.BannerTitle ? "" : " sr-only") + '" id\x3d"alert-box-title" role\x3d"heading" aria-level\x3d"2"\x3e' +
                (b.BannerTitle ? b.BannerTitle : "Cookie Notice") + "\x3c/p\x3e";
            g = g + '\x3cp class\x3d"banner-content" id\x3d"alert-box-message"\x3e' + b.AlertNoticeText + '\x3c/p\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-clearfix"\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-alert-box-button-container"\x3e\x3cdiv class\x3d"optanon-alert-box-button optanon-button-close"\x3e\x3cdiv class\x3d"optanon-alert-box-button-middle"\x3e\x3cbutton class\x3d"optanon-alert-box-close" aria-label\x3d"' + b.AlertCloseText + '"\x3e' + b.AlertCloseText +
                "\x3c/button\x3e\x3c/div\x3e\x3c/div\x3e";
            0 >= g.indexOf("hide-accept-button") && (g = g + '\x3cdiv class\x3d"optanon-alert-box-button optanon-button-allow"\x3e\x3cdiv class\x3d"optanon-alert-box-button-middle accept-cookie-container"\x3e\x3cbutton class\x3d"optanon-allow-all accept-cookies-button" title\x3d"' + b.AlertAllowCookiesText + '" aria-label\x3d"' + b.AlertAllowCookiesText + "\" onClick\x3d\"Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Banner Accept Cookies');\"\x3e" + b.AlertAllowCookiesText +
                "\x3c/button\x3e\x3c/div\x3e\x3c/div\x3e");
            0 >= g.indexOf("hide-cookie-setting-button") && (g = g + '\x3cdiv class\x3d"optanon-alert-box-button optanon-button-more"\x3e\x3cdiv class\x3d"optanon-alert-box-button-middle"\x3e\x3cbutton class\x3d"optanon-toggle-display cookie-settings-button" title\x3d"' + b.AlertMoreInfoText + '" aria-label\x3d"' + b.AlertMoreInfoText + "\" onClick\x3d\"Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Banner Open Preferences');\"\x3e" + b.AlertMoreInfoText + "\x3c/button\x3e\x3c/div\x3e\x3c/div\x3e");
            g += '\x3c/div\x3e\x3cdiv class\x3d"optanon-clearfix optanon-alert-box-bottom-padding"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e';
            f("#optanon").before(g);
            nb();
            hb();
            0 < f(".optanon-show-settings").length && Aa();
            0 < f("#optanon-cookie-policy").length && Ca();
            da();
            z("OptanonConsent", "groups") || J("OptanonConsent");
            Da()
        })
    };
    this.useGeoLocationService = !0;
    this.LoadBanner = function() {
        f(window).trigger("otloadbanner")
    };
    this.Init = function() {
        lb();
        mb();
        jb();
        Qa();
        (function() {
            function b(b, g) {
                g = g || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var e = document.createEvent("CustomEvent");
                e.initCustomEvent(b, g.bubbles, g.cancelable, g.detail);
                return e
            }
            if ("function" === typeof window.CustomEvent) return !1;
            b.prototype = window.Event.prototype;
            window.CustomEvent = b
        })();
        U(!1);
        Za();
        $a();
        pb()
    };
    this.InsertScript = function(b, e, g, f, m, n) {
        var h = null != f && "undefined" != typeof f,
            t;
        if (X(m, h && "undefined" != typeof f.ignoreGroupCheck && 1 == f.ignoreGroupCheck || W) && !K(qa, m)) {
            Q.push(m);
            h && "undefined" != typeof f.deleteSelectorContent && 1 == f.deleteSelectorContent &&
                Sa(e);
            m = document.createElement("script");
            null != g && "undefined" != typeof g && (t = !1, m.onload = m.onreadystatechange = function() {
                t || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (t = !0, g())
            });
            m.type = "text/javascript";
            m.src = b;
            n && (m.async = n);
            switch (e) {
                case "head":
                    document.getElementsByTagName("head")[0].appendChild(m);
                    break;
                case "body":
                    document.getElementsByTagName("body")[0].appendChild(m);
                    break;
                default:
                    document.getElementById(e) && (document.getElementById(e).appendChild(m), h && "undefined" !=
                        typeof f.makeSelectorVisible && 1 == f.makeSelectorVisible && ea(e))
            }
            if (h && "undefined" != typeof f.makeElementsVisible)
                for (b = 0; b < f.makeElementsVisible.length; b += 1) ea(f.makeElementsVisible[b]);
            if (h && "undefined" != typeof f.deleteElements)
                for (h = 0; h < f.deleteElements.length; h += 1) Ta(f.deleteElements[h])
        }
    };
    this.InsertHtml = function(b, e, g, f, m) {
        var h = null != f && "undefined" != typeof f;
        if (X(m, h && "undefined" != typeof f.ignoreGroupCheck && 1 == f.ignoreGroupCheck || W) && !K(ra, m)) {
            R.push(m);
            h && "undefined" != typeof f.deleteSelectorContent &&
                1 == f.deleteSelectorContent && Sa(e);
            m = document.getElementById(e);
            var q;
            m && (q = document.createElement("div"), q.innerHTML = b, m.appendChild(q));
            h && "undefined" != typeof f.makeSelectorVisible && 1 == f.makeSelectorVisible && ea(e);
            if (h && "undefined" != typeof f.makeElementsVisible)
                for (b = 0; b < f.makeElementsVisible.length; b += 1) ea(f.makeElementsVisible[b]);
            if (h && "undefined" != typeof f.deleteElements)
                for (h = 0; h < f.deleteElements.length; h += 1) Ta(f.deleteElements[h]);
            null != g && "undefined" != typeof g && g()
        }
    };
    this.Close = function(b) {
        t();
        !b && S();
        H();
        L("NotLandingPage");
        J("OptanonConsent");
        N();
        U(!1);
        da()
    };
    this.AllowAll = function(b) {
        var e = t(),
            g;
        L("NotLandingPage");
        u = [];
        for (g = 0; g < e.Groups.length; g += 1) b = e.Groups[g], D(b) && u.push(w(b) + ":1");
        f("#optanon #optanon-menu li").removeClass("menu-item-off");
        f("#optanon #optanon-menu li").addClass("menu-item-on");
        H();
        J("OptanonConsent");
        N();
        U(!0);
        da()
    };
    this.ToggleInfoDisplay = function() {
        var b = t();
        b.ForceConsent && (na(b.AlertNoticeText) || f("#optanon-popup-bg").css({
            "z-index": "2147483645"
        }));
        if (f("#optanon #optanon-popup-bg, #optanon #optanon-popup-wrapper").is(":hidden")) {
            ib();
            for (var b = document.querySelector("#optanon-vendor-consent-text"), e = document.querySelector("#optanon-popup-top").children, g = document.querySelector("#optanon-popup-bottom").children, h = document.querySelector("#optanon-menu").children, m = document.querySelector(".optanon-close-ui"), n = document.querySelector("#optanon"), q = [], u = [], v = 0; v < e.length; v++) "none" !== e[v].style.display && q.push(e[v]);
            for (v = 0; v < g.length; v++) "none" !== g[v].style.display && u.push(g[v]);
            0 < q.length ? e[0].addEventListener("keydown", ha) : h[0].addEventListener("keydown",
                ha);
            0 < u.length && ("block" === document.querySelector(".optanon-button-wrapper.optanon-allow-all-button.optanon-allow-all").style.display ? u[u.length - 1].addEventListener("keydown", ia) : u[u.length - 2].addEventListener("keydown", ia));
            h[h.length - 1].addEventListener("keydown", Wa);
            n.addEventListener("keyup", kb);
            b && b.addEventListener("keyup", ta);
            m && m.addEventListener("keydown", ua)
        } else H(), J("OptanonConsent"), N(), U(!1), da()
    };
    this.BlockGoogleAnalytics = function(b, e) {
        window["ga-disable-" + b] = !X(e)
    };
    this.TriggerGoogleAnalyticsEvent =
        function(b, e, f, h) {
            "undefined" != typeof _gaq && _gaq.push(["_trackEvent", b, e, f, h]);
            "undefined" != typeof ga && ga("send", "event", b, e, f, h);
            "undefined" != typeof dataLayer && dataLayer.constructor === Array && dataLayer.push({
                event: "trackOptanonEvent",
                optanonCategory: b,
                optanonAction: e,
                optanonLabel: f,
                optanonValue: h
            })
        };
    this.IsAlertBoxClosed = this.IsAlertBoxClosedAndValid = function() {
        var b = t(),
            e = E("OptanonAlertBoxClosed"),
            b = b.LastReconsentDate;
        if (null === e) return !1;
        if (!b) return !0;
        (e = new Date(b) > new Date(e)) && Optanon.ReconsentGroups();
        return !e
    };
    this.ReconsentGroups = function() {
        var b = !1,
            e = P(z("OptanonConsent", "groups")),
            f = P(z("OptanonConsent", "groups").replace(/:0/g, "").replace(/:1/g, "")),
            h = t();
        if (z("OptanonConsent", "groups")) {
            for (var m = 0; m < h.Groups.length; m += 1) {
                var n = h.Groups[m];
                if (D(n)) {
                    var q = Z(f, w(n));
                    if (-1 != q) {
                        var u = A(n).toLowerCase(); - 1 < ["inactive", "inactive landingpage", "do not track"].indexOf(u) && (b = !0, u = "inactive landingpage" === u ? ":1" : ":0", e[q] = w(n) + u)
                    }
                }
            }
            b && J("OptanonConsent", e)
        }
    };
    this.SetAlertBoxClosed = function(b) {
        var e =
            (new Date).toISOString();
        b ? ba("OptanonAlertBoxClosed", e, 365) : ba("OptanonAlertBoxClosed", e)
    };
    this.GetDomainData = function() {
        return t()
    };
    this.OnConsentChanged = function(b) {
        window.addEventListener("consent.onetrust", b)
    };
    this.setGeoLocation = function(b) {
        M = b
    }
}).call(Optanon);
if ("function" !== typeof window.jsonFeed) var jsonFeed = function(S) {
    Optanon.setGeoLocation(S.displayPopup)
};
Optanon.Init();