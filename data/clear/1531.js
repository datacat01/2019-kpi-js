var a, c;
"undefined" == typeof Optanon && (Optanon = OneTrust = {});
(function() {
    function K() {
        var b = [],
            e;
        for (e = 0; e < t.length; e += 1) xa(t[e], ":1") && fa(t[e].replace(":1", "")) && b.push(t[e].replace(":1", ""));
        e = "," + b.toString().toLowerCase() + ",";
        window.OnetrustActiveGroups = e;
        window.OptanonActiveGroups = e;
        "undefined" != typeof dataLayer ? dataLayer.constructor === Array && (dataLayer.push({
            OnetrustActiveGroups: e
        }), dataLayer.push({
            OptanonActiveGroups: e
        })) : (window.dataLayer = [{
            event: "OptanonLoaded",
            OnetrustActiveGroups: e
        }], window.dataLayer = [{
            event: "OptanonLoaded",
            OptanonActiveGroups: e
        }]);
        setTimeout(function() {
            var e = new CustomEvent("consent.onetrust", {
                detail: b
            });
            window.dispatchEvent(e)
        })
    }

    function ya() {
        var b = L("https://optanon.blob.core.windows.net/skins/3.6.25/default_flat_bottom_two_button_black/v2/css/optanon.css"),
            e = document.createElement("link");
        e.type = "text/css";
        e.href = b;
        e.rel = "stylesheet";
        document.getElementsByTagName("head")[0].appendChild(e);
        b = (b = (b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec("#13294B")) ? {
                r: parseInt(b[1], 16),
                g: parseInt(b[2], 16),
                b: parseInt(b[3], 16)
            } : null) ?
            186 < .299 * b.r + .587 * b.g + .114 * b.b ? "#000000" : "#ffffff" : "";
        e = document.createElement("style");
        e.innerHTML = "#optanon ul#optanon-menu li { background-color:  !important }#optanon ul#optanon-menu li.menu-item-selected { background-color: #E8E8E8 !important }#optanon #optanon-popup-wrapper .optanon-white-button-middle { background-color: #13294B !important }.optanon-alert-box-wrapper .optanon-alert-box-button-middle { background-color: #13294B !important; border-color: #13294B !important; }#optanon #optanon-popup-wrapper .optanon-white-button-middle a { color: " +
            b + " !important }.optanon-alert-box-wrapper .optanon-alert-box-button-middle a { color: " + b + " !important }#optanon #optanon-popup-bottom { background-color: #A5A8AA !important }#optanon.modern #optanon-popup-top, #optanon.modern #optanon-popup-body-left-shading { background-color: #A5A8AA !important }.optanon-alert-box-wrapper { background-color:#484848 !important }.optanon-alert-box-wrapper .optanon-alert-box-bg p { color:#FFFFFF !important }.optanon-alert-box-wrapper {\n    background-color: rgba(0,0,0,0.8) !important;\n}\n.optanon-alert-box-wrapper .optanon-button-more .optanon-alert-box-button-middle a:before {\n    content: none;\n}\n.optanon-alert-box-wrapper .optanon-button-allow .optanon-alert-box-button-middle a:before {\n    content: none;\n}\n.optanon-alert-box-wrapper .optanon-alert-box-button-middle {\n    background-color: #57802D !important;\n}\n.optanon-alert-box-body a {\n    color: #FFF !important;\n    text-decoration: underline !important;\n    padding-left: 5px; \n}\n@media only screen and (max-width: 752px) {\n    .optanon-alert-box-wrapper .optanon-alert-box-bg p {\n        font-size: 9pt;\n        line-height: 12pt;\n    }\n    .optanon-alert-box-bg .optanon-alert-box-button-container {\n        text-align: right; \n        margin-left: 1em;\n    }\n}";
        document.getElementsByTagName("head")[0].appendChild(e)
    }

    function za() {
        var b = x("OptanonConsent", "landingPath");
        if (b && b !== location.href) {
            var b = "true" === x("OptanonConsent", "AwaitingReconsent"),
                e = u(),
                f = E("OptanonAlertBoxClosed"),
                e = e.LastReconsentDate;
            f && e && new Date(e) > new Date(f) && !b ? (F(location.href), A("OptanonConsent", "AwaitingReconsent", !0)) : (F("NotLandingPage"), A("OptanonConsent", "AwaitingReconsent", !1), Aa && Optanon.SetAlertBoxClosed(!0))
        } else F(location.href)
    }

    function F(b) {
        A("OptanonConsent", "landingPath",
            b)
    }

    function Ba(b) {
        var e = document.createElement("script"),
            f;
        null != b && "undefined" != typeof b && (f = !1, e.onload = e.onreadystatechange = function() {
            f || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (f = !0, b())
        });
        e.type = "text/javascript";
        e.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js";
        document.getElementsByTagName("head")[0].appendChild(e)
    }

    function Ca() {
        u();
        f = jQuery.noConflict(!0);
        f(window).on("load", Optanon.LoadBanner);
        f(window).one("otloadbanner", function() {
            M();
            var b, e = u(),
                h, g, m;
            ha(e);
            f("body").prepend('\x3cdiv id\x3d"optanon" class\x3d"modern"\x3e\x3c/div\x3e');
            b = '\x3cdiv id\x3d"optanon-popup-bg"\x3e\x3c/div\x3e\x3cdiv id\x3d"optanon-popup-wrapper" role\x3d"dialog" aria-modal\x3d"true" tabindex\x3d"-1"\x3e\x3cdiv id\x3d"optanon-popup-top"\x3e';
            e.ShowPreferenceCenterCloseButton && (e.CloseText || (e.CloseText = "Close"), b = b + '\x3ca href\x3d"javascript:void(0);" onClick\x3d"Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Preferences Close Button\');" aria-label\x3d"' +
                e.CloseText + '" class\x3d"optanon-close-link optanon-close optanon-close-ui" title\x3d"' + e.CloseText + '"\x3e\x3cdiv id\x3d"optanon-close" style\x3d"background: url(' + L("https://optanon.blob.core.windows.net/skins/3.6.25/default_flat_bottom_two_button_black/v2/images/optanon-pop-up-close.png") + ');width:34px;height:34px;"\x3e\x3c/div\x3e\x3c/a\x3e');
            b = b + '\x3c/div\x3e\x3cdiv id\x3d"optanon-popup-body"\x3e\x3cdiv id\x3d"optanon-popup-body-left"\x3e\x3cdiv id\x3d"optanon-popup-body-left-shading"\x3e\x3c/div\x3e\x3cdiv id\x3d"optanon-branding-top-logo" style\x3d"background-image: url(' +
                L("https://optanon.blob.core.windows.net/logos/4427/4427:illinois.edu/apple-icon-72x72.png") + ') !important;"\x3e\x3c/div\x3e\x3cul id\x3d"optanon-menu" aria-label\x3d"Navigation Menu"\x3e\x3c/ul\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e';
            f("#optanon").html(b);
            e.Language && e.Language.Culture && f("#optanon-popup-wrapper").attr("lang", e.Language.Culture);
            for (m = 0; m < e.Groups.length; m += 1)
                if (b = e.Groups[m], w(b) == B || b && null == b.Parent && z(b)) {
                    h = w(b) == B;
                    g = -1 != f.inArray(v(b) + ":1", t);
                    h = f('\x3cli class\x3d"menu-item-necessary ' +
                        (h || g ? "menu-item-on" : "menu-item-off") + '" title\x3d"' + w(b) + '"\x3e\x3ch2 class\x3d"preference-menu-item"\x3e\x3ca href\x3d"javascript:void(0);"\x3e' + w(b) + "\x3c/a\x3e\x3c/h2\x3e\x3c/li\x3e");
                    w(b) == B && h.removeClass("menu-item-necessary").addClass("menu-item-about");
                    switch (b.OptanonGroupId) {
                        case 2:
                            h.removeClass("menu-item-necessary").addClass("menu-item-performance");
                            break;
                        case 3:
                            h.removeClass("menu-item-necessary").addClass("menu-item-functional");
                            break;
                        case 4:
                            h.removeClass("menu-item-necessary").addClass("menu-item-advertising");
                            break;
                        case 8:
                            h.removeClass("menu-item-necessary").addClass("menu-item-social")
                    }
                    h.data("group", b);
                    h.data("optanonGroupId", v(b));
                    h.click(Da);
                    f("#optanon #optanon-menu").append(h)
                } b = f('\x3cli class\x3d"menu-item-moreinfo menu-item-off" title\x3d"' + e.AboutText + '"\x3e\x3ch2 class\x3d"preference-menu-item"\x3e\x3ca target\x3d"_blank" href\x3d"' + e.AboutLink + "\" onClick\x3d\"Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Preferences Cookie Policy');\"\x3e" + e.AboutText + "\x3c/a\x3e\x3c/h2\x3e\x3c/li\x3e");
            f("#optanon #optanon-menu").append(b);
            f("#optanon #optanon-popup-body").append('\x3cdiv id\x3d"optanon-popup-body-right"\x3e\x3ch1 class\x3d"legacy-preference-banner-title" aria-label\x3d"' + e.MainText + '"\x3e' + e.MainText + '\x3c/h1\x3e\x3cdiv class\x3d"vendor-header-container"\x3e\x3ch3\x3e\x3c/h3\x3e\x3cdiv id\x3d"optanon-popup-more-info-bar"\x3e\x3cdiv class\x3d"optanon-status"\x3e' + Ea(e, "chkMain") + ('\x3cdiv class\x3d"optanon-status-always-active optanon-status-on"\x3e\x3cp\x3e' + e.AlwaysActiveText +
                "\x3c/p\x3e\x3c/div\x3e") + '\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"optanon-main-info-text"\x3e\x3c/div\x3e' + (e.IsIABEnabled && e.VendorLevelOptOut ? '\x3cdiv id\x3d"optanon-vendor-consent-text"\x3e\x3ca class\x3d"vendor-consent-link" aria-label\x3d"View Vendor Consent"\x3eView Vendor Consent\x3c/a\x3e\x3c/div\x3e' : "") + '\x3c/div\x3e\x3cdiv class\x3d"optanon-bottom-spacer"\x3e\x3c/div\x3e');
            f("#optanon #optanon-popup-wrapper").append('\x3cdiv id\x3d"optanon-popup-bottom"\x3e \x3ca href\x3d"https://onetrust.com/poweredbyonetrust" target\x3d"_blank"\x3e\x3cdiv id\x3d"optanon-popup-bottom-logo" style\x3d"background: url(' +
                L("https://optanon.blob.core.windows.net/skins/3.6.25/default_flat_bottom_two_button_black/v2/images/cookie-collective-top-bottom.png") + ');width:155px;height:35px;" title\x3d"powered by OneTrust"\x3e\x3c/div\x3e\x3c/a\x3e\x3cdiv class\x3d"optanon-button-wrapper optanon-save-settings-button optanon-close optanon-close-consent"\x3e\x3cdiv class\x3d"optanon-white-button-left"\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-white-button-middle"\x3e\x3ca href\x3d"javascript:void(0);" title\x3d"' + e.AllowAllText +
                '" aria-label\x3d"' + e.AllowAllText + "\" onClick\x3d\"Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Preferences Save Settings');\"\x3e" + e.AllowAllText + '\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-white-button-right"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-button-wrapper optanon-allow-all-button optanon-allow-all"\x3e\x3cdiv class\x3d"optanon-white-button-left"\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-white-button-middle"\x3e\x3ca href\x3d"javascript:void(0);" title\x3d"' +
                e.ConfirmText + '" aria-label\x3d"' + e.ConfirmText + "\" onClick\x3d\"Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Preferences Allow All');\"\x3e" + e.ConfirmText + '\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-white-button-right"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
            W();
            Fa();
            e = u();
            b = '\x3cdiv class\x3d"optanon-alert-box-wrapper  " role\x3d"alertdialog"  aria-labelledby\x3d"alert-box-title" aria-describedby\x3d"alert-box-message" style\x3d"display:none"\x3e\x3cdiv class\x3d"optanon-alert-box-bottom-top"\x3e';
            e.showBannerCloseButton && (e.BannerCloseButtonText || (e.BannerCloseButtonText = "Close"), b = b + '\x3cdiv class\x3d"optanon-alert-box-corner-close"\x3e\x3ca class\x3d"optanon-alert-box-close banner-close-button" aria-label\x3d"' + e.BannerCloseButtonText + '" href\x3d"javascript:void(0);" title\x3d"' + e.BannerCloseButtonText + '" role\x3d"button" onClick\x3d"Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Banner Close Button\');"\x3e\x3c/a\x3e\x3c/div\x3e');
            b += '\x3c/div\x3e\x3cdiv class\x3d"optanon-alert-box-bg"\x3e\x3cdiv class\x3d"optanon-alert-box-logo"\x3e \x3c/div\x3e\x3cdiv class\x3d"optanon-alert-box-body"\x3e';
            e.BannerTitle && (b = b + '\x3ch1 class\x3d"optanon-alert-box-title legacy-banner-title" id\x3d"alert-box-title"\x3e' + e.BannerTitle + "\x3c/h1\x3e");
            b = b + '\x3cp class\x3d"banner-content" id\x3d"alert-box-message"\x3e' + e.AlertNoticeText + '\x3c/p\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-clearfix"\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-alert-box-button-container"\x3e\x3cdiv class\x3d"optanon-alert-box-button optanon-button-close"\x3e\x3cdiv class\x3d"optanon-alert-box-button-middle"\x3e\x3ca class\x3d"optanon-alert-box-close" aria-label\x3d"' +
                e.AlertCloseText + '" href\x3d"javascript:void(0);"\x3e' + e.AlertCloseText + "\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e";
            0 >= b.indexOf("hide-accept-button") && (b = b + '\x3cdiv class\x3d"optanon-alert-box-button optanon-button-allow"\x3e\x3cdiv class\x3d"optanon-alert-box-button-middle accept-cookie-container"\x3e\x3ca class\x3d"optanon-allow-all accept-cookies-button" title\x3d"' + e.AlertAllowCookiesText + '" aria-label\x3d"' + e.AlertAllowCookiesText + '" role\x3d"button" href\x3d"javascript:void(0);" onClick\x3d"Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Banner Accept Cookies\');"\x3e' +
                e.AlertAllowCookiesText + "\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e");
            0 >= b.indexOf("hide-cookie-setting-button") && (b = b + '\x3cdiv class\x3d"optanon-alert-box-button optanon-button-more"\x3e\x3cdiv class\x3d"optanon-alert-box-button-middle"\x3e\x3ca class\x3d"optanon-toggle-display cookie-settings-button" title\x3d"' + e.AlertMoreInfoText + '" aria-label\x3d"' + e.AlertMoreInfoText + '" href\x3d"javascript:void(0);" onClick\x3d"Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Banner Open Preferences\');"\x3e' +
                e.AlertMoreInfoText + "\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e");
            b += '\x3c/div\x3e\x3cdiv class\x3d"optanon-clearfix optanon-alert-box-bottom-padding"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e';
            f("#optanon").before(b);
            Ga();
            Ha();
            if (0 < f(".optanon-show-settings").length && (f(".optanon-show-settings").attr("href", "javascript:void(0);"), f(".optanon-show-settings").wrap('\x3cdiv class\x3d"optanon-show-settings-popup-wrapper"\x3e').wrap('\x3cdiv class\x3d"optanon-show-settings-button"\x3e').wrap('\x3cdiv class\x3d"optanon-show-settings-middle"\x3e'),
                    f(".optanon-show-settings-middle").before('\x3cdiv class\x3d"optanon-show-settings-left"\x3e\x3c/div\x3e'), f(".optanon-show-settings-middle").after('\x3cdiv class\x3d"optanon-show-settings-right"\x3e\x3c/div\x3e'), f(".optanon-show-settings-button").addClass("optanon-toggle-display"), Ia(), e = u(), !("ontouchstart" in window || navigator.msMaxTouchPoints || x("OptanonConsent", "dnt") || x("OptanonConsent", "groups"))))
                for (b = 0; b < e.Groups.length; b += 1)
                    if (m = e.Groups[b], z(m) && (m = "do not track" == y(m).toLowerCase() &&
                            N)) {
                        e = f(".optanon-show-settings-button").first();
                        ia(e);
                        f("#optanon-show-settings-popup").fadeIn(800);
                        ja(e);
                        ka(e);
                        P = !0;
                        setTimeout(Ja, 4E3);
                        A("OptanonConsent", "dnt", "true");
                        break
                    } 0 < f("#optanon-cookie-policy").length && Ka();
            Q();
            x("OptanonConsent", "groups") || C("OptanonConsent");
            f(".accept-cookie-container a").focus()
        });
        la && Optanon.LoadBanner()
    }

    function M() {
        f("script").filter(function() {
            return f(this).attr("type") && "text/plain" == f(this).attr("type").toLowerCase() && f(this).attr("class") && f(this).attr("class").toLowerCase().match(/optanon-category(-[0-9]+)+($|\s)/)
        }).each(function() {
            var b =
                f(this).attr("class").toLowerCase().split("optanon-category-")[1].split("-"),
                e = !0;
            if (b && 0 < b.length) {
                for (var h = 0; h < b.length; h++)
                    if (!R(b[h], !1)) {
                        e = !1;
                        break
                    } e && f(this).replaceWith(f(this).attr("type", "text/javascript")[0].outerHTML)
            }
        })
    }

    function Ea(b, e) {
        return '\x3cdiv class\x3d"optanon-status-editable"\x3e\x3cform\x3e\x3cfieldset\x3e\x3cp\x3e\x3cinput type\x3d"checkbox" aria-checked\x3d"false" value\x3d"check" id\x3d"' + e + '" checked class\x3d"legacy-group-status optanon-status-checkbox" /\x3e\x3clabel for\x3d"' +
            e + '"\x3e' + b.ActiveText + "\x3c/label\x3e\x3c/p\x3e\x3c/fieldset\x3e\x3c/form\x3e\x3c/div\x3e"
    }

    function Da() {
        var b = u(),
            e = f(this).data("group");
        X(e);
        ha(b);
        var h = w(e);
        f("#optanon #optanon-menu li").removeClass("menu-item-selected");
        f(this).addClass("menu-item-selected");
        f("#optanon h3").text(h);
        f("#optanon .optanon-status-checkbox").attr("aria-labelledby", h);
        f("#optanon #optanon-main-info-text").html(S(e));
        if (e && !b.HideToolbarCookieList) {
            var g = u(),
                m = f('\x3cdiv class\x3d"optanon-cookie-list"\x3e\x3c/div\x3e'),
                n = X(e),
                p, q;
            (e.Cookies && 0 < e.Cookies.length || n && 0 < n.length) && m.append('\x3ch4 class\x3d"optanon-cookies-used"\x3e' + g.CookiesUsedText + "\x3c/h4\x3e");
            if (e.Cookies && 0 < e.Cookies.length) {
                q = f('\x3cp class\x3d"optanon-group-cookies-list"\x3e\x3c/p\x3e');
                for (g = 0; g < e.Cookies.length; g += 1) p = e.Cookies[g], q.append((p ? p.Name : "") + (g < e.Cookies.length - 1 ? ", " : ""));
                m.append(q)
            }
            if (n && 0 < n.length)
                for (g = 0; g < n.length; g += 1) p = f('\x3cp class\x3d"optanon-subgroup-cookies-list"\x3e\x3c/p\x3e'), q = ma(n[g]), S(n[g]), p.append('\x3cspan class\x3d"optanon-subgroup-header"\x3e' +
                    q + " \x3c/span\x3e"), q = f('\x3cdiv class\x3d"optanon-subgroup-cookies"\x3e\x3c/div\x3e'), p.append(q), m.append(p);
            f("#optanon #optanon-main-info-text").append(m)
        }
        "always active" == y(e).toLowerCase() || "always active" == y(e.Parent).toLowerCase() ? (f("#optanon .optanon-status-always-active").show(), f("#optanon .optanon-status-editable").hide()) : (f("#optanon .optanon-status-editable").show(), f("#optanon .optanon-status-always-active").hide(), f("#optanon .optanon-status-editable .optanon-status-checkbox").prop("id",
            "chk" + e.GroupId), f("#optanon .optanon-status-editable label").attr("for", "chk" + e.GroupId), m = -1 != f.inArray(v(e) + ":1", t), e = f(e && null == e.Parent ? "#chk" + e.GroupId : "#optanon #chk" + v(e)), m ? (e.prop("checked", !0), e.attr("aria-checked", !0), e.parent().addClass("optanon-status-on"), e.next("label").text(b.ActiveText)) : (e.prop("checked", !1), e.attr("aria-checked", !1), e.parent().removeClass("optanon-status-on"), b.InactiveText && e.next("label").text(b.InactiveText)));
        h == B ? f("#optanon #optanon-popup-more-info-bar").hide() :
            f("#optanon #optanon-popup-more-info-bar").show();
        return !1
    }

    function Fa() {
        var b = u();
        f(document).on("click", ".optanon-close-consent", function() {
            Optanon.Close();
            na(!0, !0);
            return !1
        });
        f(document).on("click", ".optanon-close-ui", function() {
            G();
            return !1
        });
        f(document).on("click", ".optanon-toggle-display", function() {
            Optanon.ToggleInfoDisplay();
            return !1
        });
        f(document).on("click", ".optanon-allow-all", function() {
            Optanon.AllowAll();
            na(!0, !0);
            return !1
        });
        f(document).on("keydown", "#optanon", function(b) {
            27 == b.keyCode &&
                G()
        });
        f("#optanon").on("change", ".optanon-status-checkbox", function() {
            var e = f(this).data("group") || f("#optanon #optanon-menu li.menu-item-selected").data("group");
            f(this).is(":checked") ? La(b, e, this) : Ma(b, e, this);
            W()
        })
    }

    function v(b) {
        return 0 == b.OptanonGroupId ? "0_" + b.GroupId : b.OptanonGroupId
    }

    function La(b, e, h) {
        var g = w(e);
        Optanon.TriggerGoogleAnalyticsEvent("OneTrust Cookie Consent", "Preferences Toggle On", g);
        f("#optanon #optanon-menu li.menu-item-selected").removeClass("menu-item-off");
        f("#optanon #optanon-menu li.menu-item-selected").addClass("menu-item-on");
        f(h).attr("aria-checked", !0);
        f(h).parent().addClass("optanon-status-on");
        f("#optanon-show-settings-popup ul li").each(function() {
            f(h).text() == f("#optanon #optanon-menu li.menu-item-selected ").text() && f(h).find(".icon").removeClass("menu-item-off").addClass("menu-item-on")
        });
        g = T(t, v(e) + ":0"); - 1 != g && (t[g] = v(e) + ":1");
        f(h).next("label").text(b.ActiveText)
    }

    function Ma(b, e, h) {
        var g = w(e);
        Optanon.TriggerGoogleAnalyticsEvent("OneTrust Cookie Consent", "Preferences Toggle Off", g);
        f("#optanon #optanon-menu li.menu-item-selected ").removeClass("menu-item-on");
        f("#optanon #optanon-menu li.menu-item-selected").addClass("menu-item-off");
        f(h).attr("aria-checked", !1);
        f(h).parent().removeClass("optanon-status-on");
        f("#optanon-show-settings-popup ul li").each(function() {
            f(h).text() == f("#optanon #optanon-menu li.menu-item-selected ").text() && f(h).find(".icon").removeClass("menu-item-on").addClass("menu-item-off")
        });
        g = T(t, v(e) + ":1"); - 1 != g && (t[g] = v(e) + ":0");
        b.InactiveText && f(h).next("label").text(b.InactiveText)
    }

    function ia(b) {
        var e = u(),
            h, g, m;
        b.parent(".optanon-show-settings-popup-wrapper").append('\x3cdiv id\x3d"optanon-show-settings-popup"\x3e\x3cdiv id\x3d"optanon-show-settings-popup-inner"\x3e\x3cdiv class\x3d"top-arrow"\x3e\x3c/div\x3e\x3cul\x3e\x3c/ul\x3e\x3cdiv class\x3d"menu-bottom-even"\x3e\x3c/div\x3e\x3cdiv class\x3d"bottom-arrow-even"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
        for (m = 0; m < e.Groups.length; m += 1) {
            if ((b = e.Groups[m]) && null == b.Parent && z(b)) switch (h = -1 != f.inArray(v(b) + ":1", t), g = !E("OptanonConsent") && "do not track" == y(b).toLowerCase() && N, h = f('\x3cli\x3e\x3cspan class\x3d"icon necessary-icon ' + (h ? "menu-item-on" : "menu-item-off") + '"\x3e\x3c/span\x3e' + w(b) + (g ? '\x3cbr\x3e\x3cspan class\x3d"optanon-dnt"\x3eOff by Do Not Track\x3c/span\x3e' : "") + '\x3cdiv class\x3d"menu-item-border"\x3e\x3c/div\x3e\x3c/li\x3e'), b.OptanonGroupId) {
                case 2:
                    h.find(".icon").removeClass("necessary-icon").addClass("performance-icon");
                    break;
                case 3:
                    h.find(".icon").removeClass("necessary-icon").addClass("functional-icon");
                    break;
                case 4:
                    h.find(".icon").removeClass("necessary-icon").addClass("advertising-icon");
                    break;
                case 8:
                    h.find(".icon").removeClass("necessary-icon").addClass("social-icon")
            }
            f("#optanon-show-settings-popup ul").append(h)
        }
        f("#optanon-show-settings-popup ul").children(":first").addClass("first");
        f("#optanon-show-settings-popup ul").children(":last").addClass("last");
        f("#optanon-show-settings-popup ul").children(":odd").addClass("even");
        f("#optanon-show-settings-popup ul").children(":even").addClass("odd");
        f("#optanon-show-settings-popup ul").children(":last").hasClass("odd") && (f("#optanon-show-settings-popup .bottom-arrow-even").removeClass("bottom-arrow-even").addClass("bottom-arrow-odd"), f("#optanon-show-settings-popup .menu-bottom-even").removeClass("menu-bottom-even").addClass("menu-bottom-odd"));
        f("#optanon-show-settings-popup ul li.last div").remove(".menu-item-border")
    }

    function Y() {
        f("#optanon-show-settings-popup").remove()
    }

    function Ja() {
        oa || f("#optanon-show-settings-popup").fadeOut(800, function() {
            Y()
        });
        P = !1
    }

    function Ia() {
        f(".optanon-show-settings-button").click(function() {
            Optanon.TriggerGoogleAnalyticsEvent("OneTrust Cookie Consent", "Privacy Settings Click")
        });
        "ontouchstart" in window || navigator.msMaxTouchPoints || f(".optanon-show-settings-button").hover(function() {
            Optanon.TriggerGoogleAnalyticsEvent("OneTrust Cookie Consent", "Privacy Settings Hover");
            oa = !0;
            P || (f("#optanon-show-settings-popup").stop(), Y(), ia(f(this)),
                f("#optanon-show-settings-popup").fadeIn(400), ja(f(this)), ka(f(this)))
        }, function() {
            f("#optanon-show-settings-popup").fadeOut(400, function() {
                P = !1;
                Y()
            })
        })
    }

    function Ha() {
        if (!Optanon.IsAlertBoxClosedAndValid()) {
            var b = u();
            f(".optanon-alert-box-wrapper").show().animate({
                bottom: "0px"
            }, 1E3);
            b.ForceConsent && (Na(b.AlertNoticeText) || f("#optanon-popup-bg").css({
                "z-index": "7000"
            }).show());
            f(".optanon-alert-box-close").click(function() {
                var b = u();
                f(".optanon-alert-box-wrapper").fadeOut(200);
                f("#optanon-popup-bg").hide();
                1 == b.CloseShouldAcceptAllCookies && Optanon.AllowAll();
                Optanon.SetAlertBoxClosed(!0)
            })
        }
    }

    function Ka() {
        var b, e, h, g, m, n, p = u(),
            q, t;
        for (h = 0; h < p.Groups.length; h += 1)
            if ((b = p.Groups[h]) && null == b.Parent && z(b)) {
                q = f('\x3cdiv class\x3d"optanon-cookie-policy-group"\x3e\x3c/div\x3e');
                q.append('\x3cp class\x3d"optanon-cookie-policy-group-name"\x3e' + w(b) + "\x3c/p\x3e");
                q.append('\x3cp class\x3d"optanon-cookie-policy-group-description"\x3e' + S(b) + "\x3c/p\x3e");
                if (0 < b.Cookies.length)
                    for (q.append('\x3cp class\x3d"optanon-cookie-policy-cookies-used"\x3e' +
                            p.CookiesUsedText + "\x3c/p\x3e"), q.append('\x3cul class\x3d"optanon-cookie-policy-group-cookies-list"\x3e\x3c/ul\x3e'), g = 0; g < b.Cookies.length; g += 1) e = (e = b.Cookies[g]) ? e.Name : "", q.find(".optanon-cookie-policy-group-cookies-list").append("\x3cli\x3e" + e + "\x3c/li\x3e");
                b = X(b);
                if (0 < b.length) {
                    p.CookiesText || (p.CookiesText = "Cookies");
                    p.CategoriesText || (p.CategoriesText = "Categories");
                    p.LifespanText || (p.LifespanText = "Lifespan");
                    p.LifespanTypeText || (p.LifespanTypeText = "Session");
                    p.LifespanDurationText || (p.LifespanDurationText =
                        "days");
                    g = f('\x3ctable class\x3d"optanon-cookie-policy-subgroup-table"\x3e\x3c/table\x3e');
                    g.append("\x3ctr\x3e\x3c/tr\x3e");
                    e = "";
                    p.IsLifespanEnabled && (e = "\x26nbsp;(" + p.LifespanText + ")");
                    g.find("tr").append('\x3cth class\x3d"optanon-cookie-policy-left"\x3e\x3cp class\x3d"optanon-cookie-policy-subgroup-table-column-header"\x3e' + p.CategoriesText + "\x3c/p\x3e\x3c/th\x3e");
                    g.find("tr").append('\x3cth class\x3d"optanon-cookie-policy-right"\x3e\x3cp class\x3d"optanon-cookie-policy-subgroup-table-column-header"\x3e' +
                        p.CookiesText + e + "\x3c/p\x3e\x3c/th\x3e");
                    for (e = 0; e < b.length; e += 1) {
                        t = f('\x3ctr class\x3d"optanon-cookie-policy-subgroup"\x3e\x3c/tr\x3e');
                        t.append('\x3ctd class\x3d"optanon-cookie-policy-left"\x3e\x3c/td\x3e');
                        m = ma(b[e]);
                        t.find(".optanon-cookie-policy-left").append('\x3cp class\x3d"optanon-cookie-policy-subgroup-name"\x3e' + m + "\x3c/p\x3e");
                        t.find(".optanon-cookie-policy-left").append('\x3cp class\x3d"optanon-cookie-policy-subgroup-description"\x3e' + S(b[e]) + "\x3c/p\x3e");
                        t.append('\x3ctd class\x3d"optanon-cookie-policy-right"\x3e\x3c/td\x3e');
                        t.find(".optanon-cookie-policy-right").append('\x3cul class\x3d"optanon-cookie-policy-subgroup-cookies-list"\x3e\x3c/ul\x3e');
                        if (p.IsLifespanEnabled)
                            for (m = 0; m < b[e].Cookies.length; m += 1) {
                                n = b[e].Cookies[m];
                                var v = "",
                                    v = n.IsSession ? p.LifespanTypeText : 0 === n.Length ? "\x3c 1 " + p.LifespanDurationText : n.Length + " " + p.LifespanDurationText;
                                t.find(".optanon-cookie-policy-subgroup-cookies-list").append("\x3cli\x3e" + n.Name + "\x26nbsp;(" + v + ")\x3c/li\x3e")
                            } else
                                for (m = 0; m < b[e].Cookies.length; m += 1) n = b[e].Cookies[m], t.find(".optanon-cookie-policy-subgroup-cookies-list").append("\x3cli\x3e" +
                                    n.Name + "\x3c/li\x3e");
                        g.append(t)
                    }
                    q.append(g)
                }
                f("#optanon-cookie-policy").append(q);
                pa()
            } f(window).resize(function() {
            pa()
        })
    }

    function S(b) {
        return b && b.GroupLanguagePropertiesSets && b.GroupLanguagePropertiesSets[0] && b.GroupLanguagePropertiesSets[0].GroupDescription && b.GroupLanguagePropertiesSets[0].GroupDescription.Text ? b.GroupLanguagePropertiesSets[0].GroupDescription.Text.replace(/\r\n/g, "\x3cbr\x3e") : ""
    }

    function w(b) {
        return b && b.GroupLanguagePropertiesSets && b.GroupLanguagePropertiesSets[0] && b.GroupLanguagePropertiesSets[0].GroupName ?
            b.GroupLanguagePropertiesSets[0].GroupName.Text : ""
    }

    function y(b) {
        var e = u();
        return b && b.GroupLanguagePropertiesSets && b.GroupLanguagePropertiesSets[0] && b.GroupLanguagePropertiesSets[0].DefaultStatus ? N && e.IsDntEnabled && b.GroupLanguagePropertiesSets[0].IsDntEnabled ? "do not track" : b.GroupLanguagePropertiesSets[0].DefaultStatus.Text : ""
    }

    function ma(b) {
        return b ? w(b) : ""
    }

    function pa() {
        f("#optanon-cookie-policy .optanon-cookie-policy-subgroup").each(function() {
            f(this).find(".optanon-cookie-policy-left").height("auto");
            f(this).find(".optanon-cookie-policy-right").height("auto");
            f(this).find(".optanon-cookie-policy-left").height() >= f(this).find(".optanon-cookie-policy-right").height() ? f(this).find(".optanon-cookie-policy-right").height(f(this).find(".optanon-cookie-policy-left").height()) : f(this).find(".optanon-cookie-policy-left").height(f(this).find(".optanon-cookie-policy-right").height())
        })
    }

    function Oa() {
        f("#optanon #optanon-menu li").removeClass("menu-item-selected");
        f("#optanon #optanon-menu li").each(function() {
            f(this).text() ==
                B && f(this).click()
        });
        W();
        var b = f("#optanon-popup-wrapper"),
            e = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        b.css("margin-top", "10px");
        720 > e ? b.css("top", "10px") : b.outerHeight() > h ? b.css("top", Math.max(0, (h - b.outerHeight()) / 2 + f(window).scrollTop()) + "px") : b.css("top", Math.max(0, (h - b.outerHeight()) / 2) + "px");
        f("#optanon #optanon-popup-bg, #optanon #optanon-popup-wrapper").hide().fadeIn(400);
        b.focus()
    }

    function G(b) {
        f("#optanon #optanon-popup-bg, #optanon #optanon-popup-wrapper").fadeOut(400, b)
    }

    function qa(b) {
        if (y(b)) {
            var e = y(b).toLowerCase();
            b.Parent && (e = y(b.Parent).toLowerCase());
            return "always active" == e || "active" == e || "inactive landingpage" == e || "do not track" == e && !N
        }
        return !0
    }

    function ra() {
        var b, e = u(),
            f;
        if (x("OptanonConsent", "groups")) {
            x("OptanonConsent", "groups") && !Z && (Z = !0);
            b = !1;
            var e = H(x("OptanonConsent", "groups")),
                g = H(x("OptanonConsent", "groups").replace(/:0/g, "").replace(/:1/g, ""));
            f = u();
            var m, n, p;
            if (x("OptanonConsent", "groups")) {
                for (n = 0; n < f.Groups.length; n += 1) m = f.Groups[n], z(m) && (p = T(g, v(m)), -1 == p && (b = !0, qa(m) ? e.push(v(m) + ":1") : e.push(v(m) + ":0")));
                for (n = e.length - 1; 0 <= n; --n) {
                    p = !1;
                    for (g = 0; g < f.Groups.length; g += 1)
                        if (m = f.Groups[g], z(m) && v(m) == e[n].replace(/:0/g, "").replace(/:1/g, "")) {
                            p = !0;
                            break
                        } p || (b = !0, e.splice(n, 1))
                }
                b && C("OptanonConsent", e)
            }
            t = H(x("OptanonConsent", "groups"))
        } else {
            t = [];
            for (f = 0; f < e.Groups.length; f += 1) b = e.Groups[f], z(b) && (qa(b) ? t.push(v(b) + ":1") : t.push(v(b) + ":0"));
            Z = !0
        }
    }

    function C(b, e) {
        e ? A(b, "groups", e.toString().toLowerCase()) : A(b, "groups", t.toString().toLowerCase())
    }

    function A(b, e, f) {
        var g = {},
            h = E(b),
            n, p;
        u();
        if (h)
            for (n = h.split("\x26"), h = 0; h < n.length; h += 1) p = n[h].split("\x3d"), g[decodeURIComponent(p[0])] = decodeURIComponent(p[1]).replace(/\+/g, " ");
        g[e] = f;
        g.datestamp = (new Date).toString();
        g.version = "3.6.25";
        e = "";
        for (var q in g) g.hasOwnProperty(q) && ("" != e && (e += "\x26"), e += q + "\x3d" + encodeURIComponent(g[q]).replace(/%20/g, "+"));
        aa(b, e, 365)
    }

    function x(b, e) {
        var f =
            E(b),
            g, m, n;
        if (f) {
            g = {};
            m = f.split("\x26");
            for (f = 0; f < m.length; f += 1) n = m[f].split("\x3d"), g[decodeURIComponent(n[0])] = decodeURIComponent(n[1]).replace(/\+/g, " ");
            return e && g[e] ? g[e] : e && !g[e] ? "" : g
        }
        return ""
    }

    function aa(b, e, f) {
        var g;
        f ? (g = new Date, g.setTime(g.getTime() + 864E5 * f), f = "; expires\x3d" + g.toGMTString()) : f = "";
        g = ["illinois.edu"];
        1 >= g.length && (g[1] = "");
        document.cookie = b + "\x3d" + e + f + "; path\x3d/" + g[1] + "; domain\x3d." + g[0]
    }

    function E(b) {
        b += "\x3d";
        var e = document.cookie.split(";"),
            f, g;
        for (f = 0; f < e.length; f +=
            1) {
            for (g = e[f];
                " " == g.charAt(0);) g = g.substring(1, g.length);
            if (0 == g.indexOf(b)) return g.substring(b.length, g.length)
        }
        return null
    }

    function R(b, e) {
        var f = null != b && "undefined" != typeof b,
            g, m;
        if (!e) {
            ra();
            g = D(t, b + ":1");
            a: {
                m = u();
                var n;
                for (n = 0; n < m.Groups.length; n += 1)
                    if (m.Groups[n].OptanonGroupId == b) {
                        m = !0;
                        break a
                    } m = !1
            }
            m = !m;
            return f && (g && fa(b) || m) ? !0 : !1
        }
        return !0
    }

    function fa(b) {
        var e = u(),
            f, g;
        for (g = 0; g < e.Groups.length; g += 1)
            if (e.Groups[g].OptanonGroupId == b) {
                f = e.Groups[g];
                break
            } return "inactive landingpage" != y(f).toLowerCase() ?
            !0 : (b = x("OptanonConsent", "landingPath")) && b !== location.href ? !0 : !1
    }

    function H(b) {
        return b ? b.toLowerCase().split(",") : []
    }

    function Q() {
        var b;
        b = u();
        b.CustomJs && (new Function(b.CustomJs))();
        if ("function" == typeof OptanonWrapper && "undefined" != OptanonWrapper) {
            OptanonWrapper();
            for (b = 0; b < I.length; b += 1) D(ba, I[b]) || ba.push(I[b]);
            I = [];
            for (b = 0; b < J.length; b += 1) D(da, J[b]) || da.push(J[b]);
            J = []
        }
    }

    function ha(b) {
        b.Groups.unshift({
            GroupLanguagePropertiesSets: [{
                GroupName: {
                    Text: B
                },
                GroupDescription: {
                    Text: b.MainInfoText
                }
            }]
        })
    }

    function sa(b) {
        if (b = document.getElementById(b))
            for (; b.hasChildNodes();) b.removeChild(b.lastChild)
    }

    function U(b) {
        if (b = document.getElementById(b)) b.style.display = "block"
    }

    function ta(b) {
        (b = document.getElementById(b)) && b.parentNode.removeChild(b)
    }

    function D(b, e) {
        var f;
        for (f = 0; f < b.length; f += 1)
            if (b[f].toString().toLowerCase() == e.toString().toLowerCase()) return !0;
        return !1
    }

    function T(b, e) {
        var f;
        for (f = 0; f < b.length; f += 1)
            if (b[f] == e) return f;
        return -1
    }

    function xa(b, e) {
        return -1 != b.indexOf(e, b.length - e.length)
    }

    function W() {
        var b = 0,
            e, h = u(),
            g;
        for (g = 0; g < h.Groups.length; g += 1)
            if (e = h.Groups[g], z(e) && D(t, v(e) + ":0") && (b += 1, 1 <= b)) return f("#optanon .optanon-allow-all-button").show(), !0;
        f("#optanon .optanon-allow-all-button").hide();
        return !1
    }

    function na(b, e) {
        f(".optanon-alert-box-wrapper").fadeOut(400);
        b && (ua || !ua && !Optanon.IsAlertBoxClosedAndValid()) && Optanon.SetAlertBoxClosed(e)
    }

    function ja(b) {
        f("#optanon-show-settings-popup").removeClass("optanon-show-settings-popup-top-button");
        f("#optanon-show-settings-popup ul").removeClass("top-button");
        f("#optanon-show-settings-popup .top-arrow, #optanon-show-settings-popup .bottom-arrow-even, #optanon-show-settings-popup .bottom-arrow-odd").hide();
        f("#optanon-show-settings-popup").css("top", "-" + f("#optanon-show-settings-popup-inner").height() + "px");
        var e = f("#optanon-show-settings-popup"),
            h = f(window).scrollTop(),
            e = e.offset().top;
        h >= e - 50 ? (f("#optanon-show-settings-popup").addClass("optanon-show-settings-popup-top-button"), f("#optanon-show-settings-popup ul").addClass("top-button"), f("#optanon-show-settings-popup").css("top",
            b.find(".optanon-show-settings-left").height() + f("#optanon-show-settings-popup .top-arrow").height() - 3 + "px"), f("#optanon-show-settings-popup .top-arrow").css("top", "-" + (f("#optanon-show-settings-popup .top-arrow").height() - 2) + "px"), f("#optanon-show-settings-popup .top-arrow").show()) : f("#optanon-show-settings-popup .bottom-arrow-even, #optanon-show-settings-popup .bottom-arrow-odd").show()
    }

    function ka(b) {
        var e = f("#optanon-show-settings-popup-inner");
        b = b.find(".optanon-show-settings-left").width() +
            b.find(".optanon-show-settings-middle").width() + b.find(".optanon-show-settings-right").width();
        var h = f("#optanon-show-settings-popup ul").width() - 3,
            g = f("#optanon-show-settings-popup .top-arrow").width(),
            m, n, p, q;
        e.css("margin-left", "-" + ((h - b) / 2 + b) + "px");
        f("#optanon-show-settings-popup .top-arrow, #optanon-show-settings-popup .bottom-arrow-even, #optanon-show-settings-popup .bottom-arrow-odd").css("margin-left", (h - g) / 2 + "px");
        e.css("left", "0px");
        m = f(window).scrollLeft();
        n = e.offset().left;
        p = m + f(window).width();
        q = n + e.width();
        b < h ? m >= n ? (e.css("margin-left", "-" + b + "px"), f("#optanon-show-settings-popup .top-arrow, #optanon-show-settings-popup .bottom-arrow-even, #optanon-show-settings-popup .bottom-arrow-odd").css("margin-left", (b - g) / 2 + "px")) : p <= q && (e.css("margin-left", "-" + h + "px"), f("#optanon-show-settings-popup .top-arrow, #optanon-show-settings-popup .bottom-arrow-even, #optanon-show-settings-popup .bottom-arrow-odd").css("margin-left", h - (b + g) / 2 + "px")) : p <= q ? e.css("margin-left", "-" + b + "px") : m >= n && e.css("margin-left",
            "-" + h + "px")
    }

    function z(b) {
        var e, f = u(),
            g = !1,
            m, n, p = null != b.Cookies && 0 < b.Cookies.length;
        if (b && null == b.Parent) {
            m = b.Purposes && 0 < b.Purposes.length && f.IsIABEnabled;
            for (n = 0; n < f.Groups.length; n += 1) {
                e = f.Groups[n];
                var q = null != e.Cookies && 0 < e.Cookies.length;
                if (null != e.Parent && w(b) && w(e.Parent) == w(b) && e.ShowInPopup && q) {
                    g = !0;
                    break
                }
            }
            return b.ShowInPopup && (p || g || m)
        }
        return b.ShowInPopup && p
    }

    function X(b) {
        var e, f = u(),
            g = [],
            m;
        for (m = 0; m < f.Groups.length; m += 1) {
            e = f.Groups[m];
            var n = null != e.Cookies && 0 < e.Cookies.length;
            null !=
                e.Parent && w(e.Parent) == w(b) && e.ShowInPopup && n && g.push(e)
        }
        return g
    }

    function u() {
        ea || (ea = {
            cctId: "fd31c61a-15d6-4769-9802-5eafcc1098ba",
            euOnly: !1,
            MainText: "About Cookies",
            MainInfoText: "Cookies and related technologies (herein \u201cCookies\u201d) are small text files that a website saves on your computer when you visit the site. Cookies the University sets are called first-party Cookies. The data collected might be about you, your device, your preferences, or your login information. This data is mostly used to make the website work as expected so, for example, you don\u2019t have to keep re-entering your credentials whenever you come back to the site. Cookies set by third parties are called third-party Cookies. We use third-party Cookies for analyzing website traffic and our advertising and marketing efforts. We have divided the Cookies we use into the following categories: Strictly Necessary, Performance, Functional, and Targeting. Under each category heading on the left you will find a general description of the Cookies in each category. You can change your browser settings to block, delete, or alert you to Cookies. The Help menu on the menu bar of most browsers will tell you how to do that. However if you do, you may have to manually adjust preferences every time you visit a site and some features may not work as intended.",
            AboutText: "More Information",
            AboutCookiesText: "What are Cookies?",
            ConfirmText: "Allow All",
            AllowAllText: "I Agree",
            CookiesUsedText: "Cookies used",
            ShowAlertNotice: !0,
            AboutLink: "https://www.vpaa.uillinois.edu/resources/cookies",
            HideToolbarCookieList: !0,
            ActiveText: "Active",
            AlwaysActiveText: "Always Active",
            AlertNoticeText: "We use Cookies on this site to enhance your experience and improve our marketing efforts. Click on \u201cAbout Cookies\u201d to learn more. By continuing to browse without changing your browser settings to block or delete Cookies, you agree to the storing of Cookies and related technologies on your device.\x3ca href\x3d'https://www.vpaa.uillinois.edu/resources/web_privacy'\x3eUniversity of Illinois Web Privacy Notice\x3c/a\x3e",
            AlertCloseText: "Close",
            AlertMoreInfoText: "About Cookies",
            AlertAllowCookiesText: "I Agree",
            CloseShouldAcceptAllCookies: !1,
            LastReconsentDate: 1537543190543,
            BannerTitle: "Cookie Notice",
            ForceConsent: !1,
            InactiveText: "Inactive",
            CookiesText: "Cookies",
            CategoriesText: "Categories",
            HasScriptArchive: !0,
            IsLifespanEnabled: !1,
            LifespanText: "Lifespan",
            IsIABEnabled: !1,
            VendorLevelOptOut: !0,
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
                            Text: "Strictly Necessary Cookies are first-party Cookies that are necessary for the website to function. They can be either permanent or temporary and are usually only set in response to actions made directly by you that amount to a request for services, such as logging in or filling in forms. For example, we use Strictly Necessary Cookies to handle user registration and login. Some sites require the use of Strictly Necessary Cookies to access the site, such as University websites requiring University credentialed authentication. If you set your browser to block or delete Cookies, you may not be able to access the site or some parts of the site will not work."
                        },
                        GroupName: {
                            Text: "Strictly Necessary Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                            Name: "OptanonConsent",
                            Host: "illinois.edu",
                            IsSession: !1,
                            Length: 365
                        }, {
                            Name: "OptanonAlertBoxClosed",
                            Host: "illinois.edu",
                            IsSession: !1,
                            Length: 365
                        }, {
                            Name: "JSESSIONID",
                            Host: "compass2g.illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "ASP.NET_SessionId",
                            Host: "union.illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__RequestVerificationToken",
                            Host: "registrar.illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_dc_gtm_UA-83426085-2",
                            Host: ".4h.extension.illinois.edu",
                            IsSession: !1,
                            Length: 0
                        }, {
                            Name: "PHPSESSID",
                            Host: "engage.illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "ASPSESSIONIDQSDBBADC",
                            Host: "odos.illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "ASPSESSIONIDQSBCTDAS",
                            Host: "senate.illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "NSC_100453_wjq_69.196.228.151*443",
                            Host: "compass2g.illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "ASPSESSIONIDSECQQATD",
                            Host: "engineering.illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "ASPSESSIONIDQQBBDASR",
                            Host: "engineering.illinois.edu",
                            IsSession: !0,
                            Length: 0
                        },
                        {
                            Name: "ASPSESSIONIDQCQRCDTC",
                            Host: "odos.illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "ASPSESSIONIDSASRDABD",
                            Host: "senate.illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "ASPSESSIONIDAACARAAB",
                            Host: "engagement.illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "ASPSESSIONIDQCCRTCQC",
                            Host: "engineering.illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "ASPSESSIONIDSCCTCCBD",
                            Host: "odos.illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "ASPSESSIONIDSSRSCCCC",
                            Host: "senate.illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "ASPSESSIONIDSWCCCART",
                            Host: "engineering.illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "ASPSESSIONIDSATQCCBC",
                            Host: "engagement.illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }
                    ],
                    Purposes: [],
                    GroupId: 73582
                }, {
                    ShowInPopup: !0,
                    Order: 1,
                    OptanonGroupId: 2,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Always Active"
                        },
                        GroupDescription: {
                            Text: "Performance Cookies allow us to count visits and traffic sources so we can measure and improve the performance and effectiveness of University websites. These Cookies also help the University understand which webpages are the most and least popular, see how visitors move around the site, and determine whether webpage content is relevant to user interests.  Performance Cookies may be permanent or temporary, and do not personally identify individual visitors. Some Performance Cookies are \u201canalytics\u201d Cookies, using third-party software tools, which help us understand more about how our website is used and where visitors come from by collecting and aggregating anonymous information on the pages visited and any advertisements viewed. If you set your browser to block or delete Cookies, some site services and functionalities may not work."
                        },
                        GroupName: {
                            Text: "Performance Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "__utmb",
                        Host: ".las.illinois.edu",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "_pk_id*",
                        Host: "compass2g.illinois.edu",
                        IsSession: !1,
                        Length: 392
                    }, {
                        Name: "__utma",
                        Host: ".allerton.illinois.edu",
                        IsSession: !1,
                        Length: 729
                    }, {
                        Name: "_ga",
                        Host: ".illinois.edu",
                        IsSession: !1,
                        Length: 729
                    }, {
                        Name: "__utmz",
                        Host: ".admissions.illinois.edu",
                        IsSession: !1,
                        Length: 182
                    }, {
                        Name: "__utmt",
                        Host: ".illinois.edu",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "_gat",
                        Host: ".illinois.edu",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "_gid",
                        Host: ".4h.extension.illinois.edu",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "__utmc",
                        Host: ".researchpark.illinois.edu",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "s_cc",
                        Host: ".illinois.edu",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "s_pers",
                        Host: ".illinois.edu",
                        IsSession: !1,
                        Length: 1094
                    }, {
                        Name: "s_sess",
                        Host: ".illinois.edu",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "_gat_UA-68647004-1",
                        Host: ".illinois.edu",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "_pk_ses*",
                        Host: "compass2g.illinois.edu",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "_gat_UA-45085621-1",
                        Host: ".illinois.edu",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "ai_session",
                        Host: "online.illinois.edu",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "ai_user",
                        Host: "online.illinois.edu",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "_gat_UA-107741378-1",
                        Host: ".illinois.edu",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "_gat_UA-45723406-20",
                        Host: ".media.illinois.edu",
                        IsSession: !1,
                        Length: 0
                    }],
                    Purposes: [],
                    GroupId: 73578
                }, {
                    ShowInPopup: !0,
                    Order: 2,
                    OptanonGroupId: 3,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Always Active"
                        },
                        GroupDescription: {
                            Text: "Functional Cookies enhance the performance and functionality of our websites but are non-essential to their use. These permanent Cookies allow our website to remember information from your previous visit, such as details you submitted before or your previously stated preferences. These Cookies may also be used to provide services you request, such as newsletters or publications. They may be first- or third-party Cookies that enable services we have added to our webpages. If you set your browser to block or delete Cookies, some or all of these services may not function properly."
                        },
                        GroupName: {
                            Text: "Functional Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "has_js",
                        Host: "www.grad.illinois.edu",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "__atuvs",
                        Host: "idnc.library.illinois.edu",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "__atuvc",
                        Host: "mastercalendar.union.illinois.edu",
                        IsSession: !1,
                        Length: 394
                    }, {
                        Name: "__unam",
                        Host: ".illinois.edu",
                        IsSession: !1,
                        Length: 272
                    }],
                    Purposes: [],
                    GroupId: 73579
                }, {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Always Active"
                        },
                        GroupDescription: {
                            Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "AMCVS_xxxxxAdobeOrg",
                        Host: ".illinois.edu",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                        Host: ".illinois.edu",
                        IsSession: !1,
                        Length: 730
                    }],
                    Purposes: [],
                    GroupId: 73580
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
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "w55c.net"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "matchliveramp",
                        Host: ".w55c.net",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "wfivefivec",
                        Host: ".w55c.net",
                        IsSession: !1,
                        Length: 359
                    }],
                    Purposes: [],
                    GroupId: 136016
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
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "tapad.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "TapAd_DID",
                        Host: ".tapad.com",
                        IsSession: !1,
                        Length: 59
                    }, {
                        Name: "TapAd_TTD_SYNC",
                        Host: ".tapad.com",
                        IsSession: !1,
                        Length: 23
                    }, {
                        Name: "TapAd_TS",
                        Host: ".tapad.com",
                        IsSession: !1,
                        Length: 59
                    }],
                    Purposes: [],
                    GroupId: 136012
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
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "adsymptotic.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "U",
                        Host: ".adsymptotic.com",
                        IsSession: !1,
                        Length: 53
                    }],
                    Purposes: [],
                    GroupId: 136025
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
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "match.rundsp.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "RUN_INDEX",
                        Host: "match.rundsp.com",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "RUN_ID",
                        Host: "match.rundsp.com",
                        IsSession: !1,
                        Length: 53
                    }],
                    Purposes: [],
                    GroupId: 136021
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
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "ml314.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                            Name: "u",
                            Host: ".ml314.com",
                            IsSession: !1,
                            Length: 0
                        }, {
                            Name: "tp",
                            Host: ".ml314.com",
                            IsSession: !1,
                            Length: 13
                        },
                        {
                            Name: "pi",
                            Host: ".ml314.com",
                            IsSession: !1,
                            Length: 364
                        }
                    ],
                    Purposes: [],
                    GroupId: 136017
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
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "simpli.fi"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "uid",
                        Host: ".simpli.fi",
                        IsSession: !1,
                        Length: 365
                    }, {
                        Name: "uid_syncd",
                        Host: ".simpli.fi",
                        IsSession: !1,
                        Length: 2
                    }],
                    Purposes: [],
                    GroupId: 136013
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
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "adsrvr.org"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "TDID",
                        Host: ".adsrvr.org",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "TDCPM",
                        Host: ".adsrvr.org",
                        IsSession: !1,
                        Length: 364
                    }],
                    Purposes: [],
                    GroupId: 136009
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
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "eyeota.net"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "mako_uid",
                        Host: ".eyeota.net",
                        IsSession: !1,
                        Length: 364
                    }],
                    Purposes: [],
                    GroupId: 136026
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
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
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
                        Name: "sess",
                        Host: ".adnxs.com",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "uuid2",
                        Host: ".adnxs.com",
                        IsSession: !1,
                        Length: 89
                    }],
                    Purposes: [],
                    GroupId: 136022
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
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "yahoo.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "B",
                        Host: ".yahoo.com",
                        IsSession: !1,
                        Length: 328
                    }],
                    Purposes: [],
                    GroupId: 136018
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
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "pro-market.net"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "anProfile",
                        Host: ".pro-market.net",
                        IsSession: !1,
                        Length: 179
                    }],
                    Purposes: [],
                    GroupId: 136014
                },
                {
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
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "lijit.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "ljt_reader",
                        Host: ".lijit.com",
                        IsSession: !1,
                        Length: 364
                    }],
                    Purposes: [],
                    GroupId: 136010
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
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "afy11.net"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "a",
                        Host: ".afy11.net",
                        IsSession: !1,
                        Length: 693
                    }],
                    Purposes: [],
                    GroupId: 136023
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
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "pippio.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "pxrc",
                        Host: ".pippio.com",
                        IsSession: !1,
                        Length: 59
                    }, {
                        Name: "didts",
                        Host: ".pippio.com",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "nnls",
                        Host: ".pippio.com",
                        IsSession: !1,
                        Length: 59
                    }, {
                        Name: "did",
                        Host: ".pippio.com",
                        IsSession: !1,
                        Length: 364
                    }],
                    Purposes: [],
                    GroupId: 136019
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
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "addtoany.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "__cfduid",
                        Host: ".addtoany.com",
                        IsSession: !1,
                        Length: 364
                    }],
                    Purposes: [],
                    GroupId: 136015
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
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "go.affec.tv"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "pt",
                        Host: ".go.affec.tv",
                        IsSession: !1,
                        Length: 1790
                    }, {
                        Name: "ck",
                        Host: ".go.affec.tv",
                        IsSession: !1,
                        Length: 1790
                    }, {
                        Name: "oo",
                        Host: ".go.affec.tv",
                        IsSession: !1,
                        Length: 1790
                    }],
                    Purposes: [],
                    GroupId: 136011
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
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "mathtag.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "uuidc",
                        Host: ".mathtag.com",
                        IsSession: !1,
                        Length: 392
                    }, {
                        Name: "uuid",
                        Host: ".mathtag.com",
                        IsSession: !1,
                        Length: 392
                    }],
                    Purposes: [],
                    GroupId: 136024
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
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "krxd.net"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "_kuid_",
                        Host: ".krxd.net",
                        IsSession: !1,
                        Length: 143
                    }],
                    Purposes: [],
                    GroupId: 136020
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
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
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
                        Length: 500
                    }, {
                        Name: "fr",
                        Host: ".facebook.com",
                        IsSession: !1,
                        Length: 89
                    }, {
                        Name: "lu",
                        Host: ".facebook.com",
                        IsSession: !1,
                        Length: 500
                    }],
                    Purposes: [],
                    GroupId: 73583
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 102,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
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
                            Length: 500
                        }, {
                            Name: "HSID",
                            Host: ".youtube.com",
                            IsSession: !1,
                            Length: 500
                        }, {
                            Name: "demographics",
                            Host: ".youtube.com",
                            IsSession: !1,
                            Length: 310
                        }, {
                            Name: "VISITOR_INFO1_LIVE",
                            Host: ".youtube.com",
                            IsSession: !1,
                            Length: 14
                        }, {
                            Name: "PREF",
                            Host: ".youtube.com",
                            IsSession: !1,
                            Length: 1830
                        }, {
                            Name: "APISID",
                            Host: ".youtube.com",
                            IsSession: !1,
                            Length: 500
                        }, {
                            Name: "SSID",
                            Host: ".youtube.com",
                            IsSession: !1,
                            Length: 500
                        }, {
                            Name: "LOGIN_INFO",
                            Host: ".youtube.com",
                            IsSession: !1,
                            Length: 500
                        }, {
                            Name: "YSC",
                            Host: ".youtube.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "SAPISID",
                            Host: ".youtube.com",
                            IsSession: !1,
                            Length: 500
                        },
                        {
                            Name: "GPS",
                            Host: ".youtube.com",
                            IsSession: !1,
                            Length: 0
                        }
                    ],
                    Purposes: [],
                    GroupId: 73584
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 103,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "dotomi.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "rt_15900",
                        Host: ".dotomi.com",
                        IsSession: !1,
                        Length: 6
                    }, {
                        Name: "rt_26832",
                        Host: ".dotomi.com",
                        IsSession: !1,
                        Length: 6
                    }, {
                        Name: "rt_1103",
                        Host: ".dotomi.com",
                        IsSession: !1,
                        Length: 6
                    }, {
                        Name: "rt_80426",
                        Host: ".dotomi.com",
                        IsSession: !1,
                        Length: 6
                    }, {
                        Name: "rt_1982",
                        Host: ".dotomi.com",
                        IsSession: !1,
                        Length: 6
                    }, {
                        Name: "rt_68402",
                        Host: ".dotomi.com",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "rt_60",
                        Host: ".dotomi.com",
                        IsSession: !1,
                        Length: 6
                    }, {
                        Name: "rt_17100",
                        Host: ".dotomi.com",
                        IsSession: !1,
                        Length: 6
                    }, {
                        Name: "rt_1988",
                        Host: ".dotomi.com",
                        IsSession: !1,
                        Length: 6
                    }, {
                        Name: "rt_3387",
                        Host: ".dotomi.com",
                        IsSession: !1,
                        Length: 6
                    }, {
                        Name: "rt_14200",
                        Host: ".dotomi.com",
                        IsSession: !1,
                        Length: 6
                    }, {
                        Name: "rt_93086",
                        Host: ".dotomi.com",
                        IsSession: !1,
                        Length: 6
                    }, {
                        Name: "DotomiTest",
                        Host: ".dotomi.com",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "rt_11459",
                        Host: ".dotomi.com",
                        IsSession: !1,
                        Length: 6
                    }, {
                        Name: "rt_57734",
                        Host: ".dotomi.com",
                        IsSession: !1,
                        Length: 6
                    }, {
                        Name: "rt_44410",
                        Host: ".dotomi.com",
                        IsSession: !1,
                        Length: 6
                    }, {
                        Name: "rt_5010",
                        Host: ".dotomi.com",
                        IsSession: !1,
                        Length: 6
                    }, {
                        Name: "rt_19998",
                        Host: ".dotomi.com",
                        IsSession: !1,
                        Length: 6
                    }, {
                        Name: "rt_14000",
                        Host: ".dotomi.com",
                        IsSession: !1,
                        Length: 6
                    }, {
                        Name: "DotomiSession_2698",
                        Host: ".dotomi.com",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "rt_12783",
                        Host: ".dotomi.com",
                        IsSession: !1,
                        Length: 6
                    }, {
                        Name: "DotomiUser",
                        Host: ".dotomi.com",
                        IsSession: !1,
                        Length: 392
                    }, {
                        Name: "rt_14100",
                        Host: ".dotomi.com",
                        IsSession: !1,
                        Length: 0
                    }],
                    Purposes: [],
                    GroupId: 73585
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 104,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "advertising.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "APID",
                        Host: ".advertising.com",
                        IsSession: !1,
                        Length: 329
                    }, {
                        Name: "IDSYNC",
                        Host: ".advertising.com",
                        IsSession: !1,
                        Length: 329
                    }],
                    Purposes: [],
                    GroupId: 73586
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 105,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "tag.crsspxl.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "AWSELB",
                        Host: "tag.crsspxl.com",
                        IsSession: !1,
                        Length: 0
                    }],
                    Purposes: [],
                    GroupId: 73587
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 106,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "pinterest.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "__utmz",
                        Host: ".pinterest.com",
                        IsSession: !1,
                        Length: 78
                    }, {
                        Name: "__utma",
                        Host: ".pinterest.com",
                        IsSession: !1,
                        Length: 500
                    }, {
                        Name: "_pinterest_sess",
                        Host: ".pinterest.com",
                        IsSession: !1,
                        Length: 14117
                    }, {
                        Name: "__utmv",
                        Host: ".pinterest.com",
                        IsSession: !1,
                        Length: 500
                    }],
                    Purposes: [],
                    GroupId: 73588
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 107,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "crwdcntrl.net"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "_cc_cc",
                        Host: ".crwdcntrl.net",
                        IsSession: !1,
                        Length: 269
                    }, {
                        Name: "_cc_id",
                        Host: ".crwdcntrl.net",
                        IsSession: !1,
                        Length: 269
                    }, {
                        Name: "_cc_aud",
                        Host: ".crwdcntrl.net",
                        IsSession: !1,
                        Length: 269
                    }, {
                        Name: "_cc_dc",
                        Host: ".crwdcntrl.net",
                        IsSession: !1,
                        Length: 269
                    }],
                    Purposes: [],
                    GroupId: 73589
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 108,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "btrll.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "BR_APS",
                        Host: ".btrll.com",
                        IsSession: !1,
                        Length: 364
                    }],
                    Purposes: [],
                    GroupId: 73590
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 109,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "casalemedia.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "CMPRO",
                        Host: ".casalemedia.com",
                        IsSession: !1,
                        Length: 89
                    }, {
                        Name: "CMID",
                        Host: ".casalemedia.com",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "CMDD",
                        Host: ".casalemedia.com",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "CMSUM",
                        Host: ".casalemedia.com",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "CMST",
                        Host: ".casalemedia.com",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "CMRUM3",
                        Host: ".casalemedia.com",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "CMPS",
                        Host: ".casalemedia.com",
                        IsSession: !1,
                        Length: 89
                    }, {
                        Name: "CMSC",
                        Host: ".casalemedia.com",
                        IsSession: !0,
                        Length: 0
                    }],
                    Purposes: [],
                    GroupId: 73591
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 110,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "addthis.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "loc",
                        Host: ".addthis.com",
                        IsSession: !1,
                        Length: 394
                    }, {
                        Name: "xtc",
                        Host: ".addthis.com",
                        IsSession: !1,
                        Length: 394
                    }, {
                        Name: "na_tc",
                        Host: ".addthis.com",
                        IsSession: !1,
                        Length: 395
                    }, {
                        Name: "na_id",
                        Host: ".addthis.com",
                        IsSession: !1,
                        Length: 395
                    }, {
                        Name: "mus",
                        Host: ".addthis.com",
                        IsSession: !1,
                        Length: 389
                    }, {
                        Name: "uid",
                        Host: ".addthis.com",
                        IsSession: !1,
                        Length: 389
                    }, {
                        Name: "uvc",
                        Host: ".addthis.com",
                        IsSession: !1,
                        Length: 394
                    }, {
                        Name: "di2",
                        Host: ".addthis.com",
                        IsSession: !1,
                        Length: 389
                    }, {
                        Name: "vc",
                        Host: ".addthis.com",
                        IsSession: !1,
                        Length: 389
                    }, {
                        Name: "ouid",
                        Host: ".addthis.com",
                        IsSession: !1,
                        Length: 389
                    }, {
                        Name: "bt2",
                        Host: ".addthis.com",
                        IsSession: !1,
                        Length: 255
                    }, {
                        Name: "bku",
                        Host: ".addthis.com",
                        IsSession: !1,
                        Length: 389
                    }],
                    Purposes: [],
                    GroupId: 73592
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 111,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "media.net"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "visitor-id",
                        Host: ".media.net",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "data-co",
                        Host: ".media.net",
                        IsSession: !1,
                        Length: 327
                    }],
                    Purposes: [],
                    GroupId: 73593
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 112,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
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
                        Length: 5485
                    }, {
                        Name: "twll",
                        Host: ".twitter.com",
                        IsSession: !1,
                        Length: 1833
                    }, {
                        Name: "__utmz",
                        Host: ".twitter.com",
                        IsSession: !1,
                        Length: 78
                    }, {
                        Name: "secure_session",
                        Host: ".twitter.com",
                        IsSession: !1,
                        Length: 5485
                    }, {
                        Name: "guest_id",
                        Host: ".twitter.com",
                        IsSession: !1,
                        Length: 500
                    }, {
                        Name: "__utma",
                        Host: ".twitter.com",
                        IsSession: !1,
                        Length: 500
                    }, {
                        Name: "remember_checked",
                        Host: ".twitter.com",
                        IsSession: !1,
                        Length: 1833
                    }, {
                        Name: "remember_checked_on",
                        Host: ".twitter.com",
                        IsSession: !1,
                        Length: 1833
                    }],
                    Purposes: [],
                    GroupId: 73594
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 113,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "rfihub.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "smd",
                        Host: ".rfihub.com",
                        IsSession: !1,
                        Length: 389
                    }, {
                        Name: "rud",
                        Host: ".rfihub.com",
                        IsSession: !1,
                        Length: 389
                    }, {
                        Name: "eud",
                        Host: ".rfihub.com",
                        IsSession: !1,
                        Length: 389
                    }, {
                        Name: "euds",
                        Host: ".rfihub.com",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "ruds",
                        Host: ".rfihub.com",
                        IsSession: !0,
                        Length: 0
                    }],
                    Purposes: [],
                    GroupId: 73595
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 114,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
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
                        Name: "APISID",
                        Host: ".google.com",
                        IsSession: !1,
                        Length: 500
                    }, {
                        Name: "SSID",
                        Host: ".google.com",
                        IsSession: !1,
                        Length: 500
                    }, {
                        Name: "NID",
                        Host: ".google.com",
                        IsSession: !1,
                        Length: 182
                    }, {
                        Name: "PREF",
                        Host: ".google.com",
                        IsSession: !1,
                        Length: 500
                    }, {
                        Name: "SID",
                        Host: ".google.com",
                        IsSession: !1,
                        Length: 500
                    }, {
                        Name: "SAPISID",
                        Host: ".google.com",
                        IsSession: !1,
                        Length: 500
                    }, {
                        Name: "HSID",
                        Host: ".google.com",
                        IsSession: !1,
                        Length: 500
                    }, {
                        Name: "1P_JAR",
                        Host: ".google.com",
                        IsSession: !1,
                        Length: 29
                    }],
                    Purposes: [],
                    GroupId: 73596
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 115,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "google.co.uk"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "SAPISID",
                        Host: ".google.co.uk",
                        IsSession: !1,
                        Length: 625
                    }, {
                        Name: "HSID",
                        Host: ".google.co.uk",
                        IsSession: !1,
                        Length: 625
                    }, {
                        Name: "SID",
                        Host: ".google.co.uk",
                        IsSession: !1,
                        Length: 625
                    }, {
                        Name: "PREF",
                        Host: ".google.co.uk",
                        IsSession: !1,
                        Length: 625
                    }, {
                        Name: "NID",
                        Host: ".google.co.uk",
                        IsSession: !1,
                        Length: 78
                    }, {
                        Name: "SSID",
                        Host: ".google.co.uk",
                        IsSession: !1,
                        Length: 625
                    }, {
                        Name: "APISID",
                        Host: ".google.co.uk",
                        IsSession: !1,
                        Length: 625
                    }],
                    Purposes: [],
                    GroupId: 73597
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 116,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "disqus.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "__jid",
                        Host: "disqus.com",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "G_ENABLED_IDPS",
                        Host: ".disqus.com",
                        IsSession: !1,
                        Length: 2915325
                    }, {
                        Name: "disqus_unique",
                        Host: ".disqus.com",
                        IsSession: !1,
                        Length: 364
                    }],
                    Purposes: [],
                    GroupId: 73598
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
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "bluekai.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "bku",
                        Host: ".bluekai.com",
                        IsSession: !1,
                        Length: 179
                    }, {
                        Name: "bkdc",
                        Host: ".bluekai.com",
                        IsSession: !1,
                        Length: 179
                    }],
                    Purposes: [],
                    GroupId: 73599
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 118,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "eventbrite.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "SP",
                        Host: ".eventbrite.com",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "SS",
                        Host: ".eventbrite.com",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "_ga",
                        Host: ".eventbrite.com",
                        IsSession: !1,
                        Length: 729
                    }, {
                        Name: "G",
                        Host: ".eventbrite.com",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "SERVERID",
                        Host: "www.eventbrite.com",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "_gat",
                        Host: ".eventbrite.com",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "AS",
                        Host: ".eventbrite.com",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "mgrefby",
                        Host: ".eventbrite.com",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "eblang",
                        Host: ".eventbrite.com",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "AN",
                        Host: ".eventbrite.com",
                        IsSession: !1,
                        Length: 29
                    }, {
                        Name: "AMP_TOKEN",
                        Host: ".eventbrite.com",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "_gid",
                        Host: ".eventbrite.com",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "ebEventToTrack",
                        Host: ".eventbrite.com",
                        IsSession: !1,
                        Length: 29
                    }, {
                        Name: "mgref",
                        Host: ".eventbrite.com",
                        IsSession: !1,
                        Length: 364
                    }],
                    Purposes: [],
                    GroupId: 73600
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 119,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 2,
                        OptanonGroupId: 3,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Functional Cookies enhance the performance and functionality of our websites but are non-essential to their use. These permanent Cookies allow our website to remember information from your previous visit, such as details you submitted before or your previously stated preferences. These Cookies may also be used to provide services you request, such as newsletters or publications. They may be first- or third-party Cookies that enable services we have added to our webpages. If you set your browser to block or delete Cookies, some or all of these services may not function properly."
                            },
                            GroupName: {
                                Text: "Functional Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "has_js",
                            Host: "www.grad.illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__atuvs",
                            Host: "idnc.library.illinois.edu",
                            IsSession: !1,
                            Length: 0
                        }, {
                            Name: "__atuvc",
                            Host: "mastercalendar.union.illinois.edu",
                            IsSession: !1,
                            Length: 394
                        }, {
                            Name: "__unam",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 272
                        }],
                        Purposes: [],
                        GroupId: 73579
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "accounts.google.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "__utma",
                        Host: ".accounts.google.com",
                        IsSession: !1,
                        Length: 625
                    }, {
                        Name: "GAPS",
                        Host: "accounts.google.com",
                        IsSession: !1,
                        Length: 625
                    }, {
                        Name: "LSID",
                        Host: "accounts.google.com",
                        IsSession: !1,
                        Length: 625
                    }, {
                        Name: "__utmz",
                        Host: ".accounts.google.com",
                        IsSession: !1,
                        Length: 78
                    }],
                    Purposes: [],
                    GroupId: 73601
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 120,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 2,
                        OptanonGroupId: 3,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Functional Cookies enhance the performance and functionality of our websites but are non-essential to their use. These permanent Cookies allow our website to remember information from your previous visit, such as details you submitted before or your previously stated preferences. These Cookies may also be used to provide services you request, such as newsletters or publications. They may be first- or third-party Cookies that enable services we have added to our webpages. If you set your browser to block or delete Cookies, some or all of these services may not function properly."
                            },
                            GroupName: {
                                Text: "Functional Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "has_js",
                            Host: "www.grad.illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__atuvs",
                            Host: "idnc.library.illinois.edu",
                            IsSession: !1,
                            Length: 0
                        }, {
                            Name: "__atuvc",
                            Host: "mastercalendar.union.illinois.edu",
                            IsSession: !1,
                            Length: 394
                        }, {
                            Name: "__unam",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 272
                        }],
                        Purposes: [],
                        GroupId: 73579
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "flickr.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "BX",
                        Host: ".flickr.com",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "xb",
                        Host: ".flickr.com",
                        IsSession: !1,
                        Length: 364
                    }],
                    Purposes: [],
                    GroupId: 73602
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 121,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
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
                    GroupId: 73603
                },
                {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 122,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "ctnsnet.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "cid_aa78acf4b2be4664951b94a16c5edd51",
                        Host: ".ctnsnet.com",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "opt",
                        Host: ".ctnsnet.com",
                        IsSession: !1,
                        Length: 328
                    }, {
                        Name: "cid_aef1e02002244aa797d5d4357fef5277",
                        Host: ".ctnsnet.com",
                        IsSession: !1,
                        Length: 328
                    }],
                    Purposes: [],
                    GroupId: 73604
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 123,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "demdex.net"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "demdex",
                        Host: ".demdex.net",
                        IsSession: !1,
                        Length: 179
                    }],
                    Purposes: [],
                    GroupId: 73605
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 124,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "mediaplex.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "rts",
                        Host: ".mediaplex.com",
                        IsSession: !1,
                        Length: 394
                    }, {
                        Name: "svid",
                        Host: ".mediaplex.com",
                        IsSession: !1,
                        Length: 394
                    }],
                    Purposes: [],
                    GroupId: 73606
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 125,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 2,
                        OptanonGroupId: 3,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Functional Cookies enhance the performance and functionality of our websites but are non-essential to their use. These permanent Cookies allow our website to remember information from your previous visit, such as details you submitted before or your previously stated preferences. These Cookies may also be used to provide services you request, such as newsletters or publications. They may be first- or third-party Cookies that enable services we have added to our webpages. If you set your browser to block or delete Cookies, some or all of these services may not function properly."
                            },
                            GroupName: {
                                Text: "Functional Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "has_js",
                            Host: "www.grad.illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "__atuvs",
                            Host: "idnc.library.illinois.edu",
                            IsSession: !1,
                            Length: 0
                        }, {
                            Name: "__atuvc",
                            Host: "mastercalendar.union.illinois.edu",
                            IsSession: !1,
                            Length: 394
                        }, {
                            Name: "__unam",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 272
                        }],
                        Purposes: [],
                        GroupId: 73579
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "api.instagram.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "rur",
                        Host: "api.instagram.com",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "urlgen",
                        Host: "api.instagram.com",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "csrftoken",
                        Host: "api.instagram.com",
                        IsSession: !1,
                        Length: 327
                    }],
                    Purposes: [],
                    GroupId: 73607
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 126,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "dpm.demdex.net"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "dpm",
                        Host: ".dpm.demdex.net",
                        IsSession: !1,
                        Length: 179
                    }],
                    Purposes: [],
                    GroupId: 73608
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 127,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "pubmatic.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "PUBMDCID",
                        Host: ".pubmatic.com",
                        IsSession: !1,
                        Length: 89
                    }, {
                        Name: "PugT",
                        Host: ".pubmatic.com",
                        IsSession: !1,
                        Length: 29
                    }, {
                        Name: "KRTBCOOKIE_32",
                        Host: ".pubmatic.com",
                        IsSession: !1,
                        Length: 89
                    }, {
                        Name: "KRTBCOOKIE_148",
                        Host: ".pubmatic.com",
                        IsSession: !1,
                        Length: 29
                    }],
                    Purposes: [],
                    GroupId: 73609
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 128,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 1,
                        OptanonGroupId: 2,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Performance Cookies allow us to count visits and traffic sources so we can measure and improve the performance and effectiveness of University websites. These Cookies also help the University understand which webpages are the most and least popular, see how visitors move around the site, and determine whether webpage content is relevant to user interests.  Performance Cookies may be permanent or temporary, and do not personally identify individual visitors. Some Performance Cookies are \u201canalytics\u201d Cookies, using third-party software tools, which help us understand more about how our website is used and where visitors come from by collecting and aggregating anonymous information on the pages visited and any advertisements viewed. If you set your browser to block or delete Cookies, some site services and functionalities may not work."
                            },
                            GroupName: {
                                Text: "Performance Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "__utmb",
                            Host: ".las.illinois.edu",
                            IsSession: !1,
                            Length: 0
                        }, {
                            Name: "_pk_id*",
                            Host: "compass2g.illinois.edu",
                            IsSession: !1,
                            Length: 392
                        }, {
                            Name: "__utma",
                            Host: ".allerton.illinois.edu",
                            IsSession: !1,
                            Length: 729
                        }, {
                            Name: "_ga",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 729
                        }, {
                            Name: "__utmz",
                            Host: ".admissions.illinois.edu",
                            IsSession: !1,
                            Length: 182
                        }, {
                            Name: "__utmt",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 0
                        }, {
                            Name: "_gat",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 0
                        }, {
                            Name: "_gid",
                            Host: ".4h.extension.illinois.edu",
                            IsSession: !1,
                            Length: 0
                        }, {
                            Name: "__utmc",
                            Host: ".researchpark.illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "s_cc",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "s_pers",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 1094
                        }, {
                            Name: "s_sess",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "_gat_UA-68647004-1",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 0
                        }, {
                            Name: "_pk_ses*",
                            Host: "compass2g.illinois.edu",
                            IsSession: !1,
                            Length: 0
                        }, {
                            Name: "_gat_UA-45085621-1",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 0
                        }, {
                            Name: "ai_session",
                            Host: "online.illinois.edu",
                            IsSession: !1,
                            Length: 0
                        }, {
                            Name: "ai_user",
                            Host: "online.illinois.edu",
                            IsSession: !1,
                            Length: 364
                        }, {
                            Name: "_gat_UA-107741378-1",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 0
                        }, {
                            Name: "_gat_UA-45723406-20",
                            Host: ".media.illinois.edu",
                            IsSession: !1,
                            Length: 0
                        }],
                        Purposes: [],
                        GroupId: 73578
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
                    GroupId: 73610
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 129,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "rubiconproject.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "put_2046",
                        Host: ".rubiconproject.com",
                        IsSession: !1,
                        Length: 53
                    }, {
                        Name: "rpb",
                        Host: ".rubiconproject.com",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "khaos",
                        Host: ".rubiconproject.com",
                        IsSession: !1,
                        Length: 328
                    }, {
                        Name: "put_2132",
                        Host: ".rubiconproject.com",
                        IsSession: !1,
                        Length: 328
                    }],
                    Purposes: [],
                    GroupId: 73611
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 130,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "syndication.twitter.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "lang",
                        Host: "syndication.twitter.com",
                        IsSession: !0,
                        Length: 0
                    }],
                    Purposes: [],
                    GroupId: 73612
                },
                {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 131,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "crsspxl.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "uid",
                        Host: ".crsspxl.com",
                        IsSession: !1,
                        Length: 23
                    }, {
                        Name: "uuid",
                        Host: ".crsspxl.com",
                        IsSession: !1,
                        Length: 23
                    }],
                    Purposes: [],
                    GroupId: 73613
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 132,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "rlcdn.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "rtn1-z",
                        Host: ".rlcdn.com",
                        IsSession: !1,
                        Length: 143
                    }, {
                        Name: "ck1",
                        Host: ".rlcdn.com",
                        IsSession: !1,
                        Length: 143
                    }, {
                        Name: "rlas3",
                        Host: ".rlcdn.com",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "drtn312457252",
                        Host: ".rlcdn.com",
                        IsSession: !1,
                        Length: 143
                    }, {
                        Name: "drtn303111438",
                        Host: ".rlcdn.com",
                        IsSession: !1,
                        Length: 143
                    }, {
                        Name: "pxrc",
                        Host: ".rlcdn.com",
                        IsSession: !1,
                        Length: 59
                    }, {
                        Name: "drtn849995640",
                        Host: ".rlcdn.com",
                        IsSession: !1,
                        Length: 143
                    }, {
                        Name: "drtn59243740",
                        Host: ".rlcdn.com",
                        IsSession: !1,
                        Length: 143
                    }],
                    Purposes: [],
                    GroupId: 73614
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 133,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "contextweb.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "V",
                        Host: ".contextweb.com",
                        IsSession: !1,
                        Length: 323
                    }, {
                        Name: "sto-id-20480-bh",
                        Host: ".contextweb.com",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "pb_rtb_ev",
                        Host: ".contextweb.com",
                        IsSession: !1,
                        Length: 328
                    }],
                    Purposes: [],
                    GroupId: 73615
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 134,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "optimatic.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "opt_cc",
                        Host: ".optimatic.com",
                        IsSession: !1,
                        Length: 2915201
                    }],
                    Purposes: [],
                    GroupId: 73616
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 135,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "semasio.net"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "SEUNCY",
                        Host: ".semasio.net",
                        IsSession: !1,
                        Length: 179
                    }],
                    Purposes: [],
                    GroupId: 73617
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 136,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
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
                    GroupId: 73618
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 137,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "pixel.rubiconproject.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "c",
                        Host: "pixel.rubiconproject.com",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "rpx",
                        Host: ".pixel.rubiconproject.com",
                        IsSession: !1,
                        Length: 0
                    }],
                    Purposes: [],
                    GroupId: 73619
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 138,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "sharethrough.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "stx_user_id",
                        Host: ".sharethrough.com",
                        IsSession: !1,
                        Length: 364
                    }],
                    Purposes: [],
                    GroupId: 73620
                },
                {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 139,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "geo-um.btrll.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "jncMQNGG",
                        Host: ".geo-um.btrll.com",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "jncTSB6N",
                        Host: ".geo-um.btrll.com",
                        IsSession: !1,
                        Length: 6
                    }],
                    Purposes: [],
                    GroupId: 73621
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 140,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "adaptv.advertising.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "rtbData0",
                        Host: ".adaptv.advertising.com",
                        IsSession: !1,
                        Length: 693
                    }],
                    Purposes: [],
                    GroupId: 73622
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 141,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "tremorhub.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "tvid",
                        Host: ".tremorhub.com",
                        IsSession: !1,
                        Length: 328
                    }],
                    Purposes: [],
                    GroupId: 73623
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 142,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "adtechus.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "CfP",
                        Host: ".adtechus.com",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "JEB2",
                        Host: ".adtechus.com",
                        IsSession: !1,
                        Length: 729
                    }],
                    Purposes: [],
                    GroupId: 73624
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 143,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
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
                        Length: 500
                    }],
                    Purposes: [],
                    GroupId: 73625
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 144,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "t.sharethis.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "pxcelPage_c010",
                        Host: ".t.sharethis.com",
                        IsSession: !1,
                        Length: 6
                    }, {
                        Name: "pxcelBcnLcy",
                        Host: ".t.sharethis.com",
                        IsSession: !0,
                        Length: 0
                    }],
                    Purposes: [],
                    GroupId: 73626
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 145,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "everesttech.net"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "everest_g_v2",
                        Host: ".everesttech.net",
                        IsSession: !1,
                        Length: 729
                    }, {
                        Name: "everest_session_v2",
                        Host: ".everesttech.net",
                        IsSession: !0,
                        Length: 0
                    }],
                    Purposes: [],
                    GroupId: 73627
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 146,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "spotxchange.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "user-0",
                        Host: ".spotxchange.com",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "audience",
                        Host: ".spotxchange.com",
                        IsSession: !1,
                        Length: 364
                    }],
                    Purposes: [],
                    GroupId: 73628
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 147,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "agkn.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "ab",
                        Host: ".agkn.com",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "u",
                        Host: ".agkn.com",
                        IsSession: !1,
                        Length: 364
                    }],
                    Purposes: [],
                    GroupId: 73629
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 148,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Always Active"
                            },
                            GroupDescription: {
                                Text: "Targeting Cookies are used to deliver content tailored to your interests and may be temporary or permanent. They may be first- or third-party Cookies. Targeting Cookies are based on uniquely identifying your browser and device; they do not store information such as your name. The University may use targeting Cookies prepared by the University, its third-party contractors, or advertising partners to provide you with personalized University display advertising and promotional material about the University and its programs. The University may also allow third parties to place Cookies on your device that collect and use anonymous information about your visits to, and interactions with, our website to personalize advertisements and promotional materials for University goods and services. Targeting Cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. We may share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. If you set your browser to block or delete Cookies, you will still see advertisements, but they will be less targeted to your interests."
                            },
                            GroupName: {
                                Text: "Targeting Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [{
                            Name: "AMCVS_xxxxxAdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg",
                            Host: ".illinois.edu",
                            IsSession: !1,
                            Length: 730
                        }],
                        Purposes: [],
                        GroupId: 73580
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "sharethis.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "__stid",
                        Host: ".sharethis.com",
                        IsSession: !1,
                        Length: 364
                    }],
                    Purposes: [],
                    GroupId: 73630
                }
            ],
            ConsentModel: {
                Name: "Notice only"
            },
            Language: {
                Culture: "en-GB"
            },
            showBannerCloseButton: !0,
            ShowPreferenceCenterCloseButton: !0,
            FooterDescriptionText: "   \x3ca href\x3d'https://www.vpaa.uillinois.edu/resources/web_privacy'\x3eUniversity of Illinois Web Privacy Notice\x3c/a\x3e",
            IsDntEnabled: !1,
            CustomJs: null,
            LifespanTypeText: null,
            LifespanDurationText: null,
            IsConsentLoggingEnabled: !1,
            IsIabThirdPartyCookieEnabled: !0,
            CloseText: "Close",
            BannerCloseButtonText: "Close"
        });
        return ea
    }

    function Pa() {
        for (var b = u(), e = document.getElementsByTagName("script"),
                f = 0; f < e.length; ++f) {
            var g;
            g = e[f];
            var m = b.cctId;
            g = g.getAttribute("src") ? -1 !== g.getAttribute("src").indexOf(m) : !1;
            if (g) {
                V = va(e[f].src);
                break
            }
        }
    }

    function L(b) {
        var e = va(b);
        V && e && V.hostname !== e.hostname && (b = b.replace(e.hostname, V.hostname));
        return b
    }

    function va(b) {
        var e = document.createElement("a");
        e.href = b;
        return e
    }

    function Na(b) {
        var e = !1,
            h = wa(window.location.href),
            g = f("\x3cdiv\x3e\x3c/div\x3e");
        g.html(b);
        b = f("a", g);
        for (g = 0; g < b.length; g++)
            if (wa(b[g].href) == h) {
                e = !0;
                break
            } return e
    }

    function wa(b) {
        return b.toLowerCase().replace(/(^\w+:|^)\/\//,
            "").replace("www.", "")
    }

    function Qa() {
        "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
            value: function(b, e) {
                if (null == b) throw new TypeError("Cannot convert undefined or null to object");
                for (var f = Object(b), g = 1; g < arguments.length; g++) {
                    var m = arguments[g];
                    if (null != m)
                        for (var n in m) Object.prototype.hasOwnProperty.call(m, n) && (f[n] = m[n])
                }
                return f
            },
            writable: !0,
            configurable: !0
        })
    }

    function Ra() {
        Array.prototype.fill || Object.defineProperty(Array.prototype, "fill", {
            value: function(b, e, f) {
                if (null ==
                    this) throw new TypeError("this is null or not defined");
                var g = Object(this),
                    h = g.length >>> 0;
                e >>= 0;
                e = 0 > e ? Math.max(h + e, 0) : Math.min(e, h);
                f = void 0 === f ? h : f >> 0;
                for (h = 0 > f ? Math.max(h + f, 0) : Math.min(f, h); e < h;) g[e] = b, e++;
                return g
            }
        })
    }

    function Ga() {
        var b = 0;
        f(".banner-content a").length && f(".banner-content a").each(function(e, h) {
            f(h).addClass("banner-policy-link");
            f(h).attr("tabindex", ++b);
            f(h).attr("aria-label", f(h).text())
        });
        f(".cookie-settings-button").length && f(".cookie-settings-button").attr("tabindex", ++b);
        f(".accept-cookies-button").length && f(".accept-cookies-button").attr("tabindex", ++b);
        f(".banner-close-button").length && f(".banner-close-button").attr("tabindex", ++b)
    }
    var N = "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack,
        P = !1,
        oa = !1,
        ua = function() {
            var b = !0,
                e, f = u(),
                g;
            for (g = 0; g < f.Groups.length; g += 1)
                if (e = f.Groups[g], z(e) && (!y(e) || y(e) && ("active" == y(e).toLowerCase() || "inactive landingpage" == y(e).toLowerCase() || "do not track" == y(e).toLowerCase()))) {
                    b = !1;
                    break
                } return b
        }(),
        Aa = function() {
            var b = !0,
                e, f = u(),
                g;
            for (g = 0; g < f.Groups.length; g += 1)
                if (e = f.Groups[g], z(e) && (e = y(e).toLowerCase(), "inactive landingpage" !== e && "always active" !== e)) {
                    b = !1;
                    break
                } return b
        }(),
        Z = !1,
        t, ba = [],
        da = [],
        I = [],
        J = [],
        B = u().AboutCookiesText,
        V = null,
        la = !1,
        ea, f;
    this.LoadBanner = function() {
        f ? f(window).trigger("otloadbanner") : la = !0
    };
    this.Init = function() {
        Qa();
        Ra();
        Pa();
        ra();
        (function() {
            function b(b, f) {
                f = f || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var e = document.createEvent("CustomEvent");
                e.initCustomEvent(b, f.bubbles,
                    f.cancelable, f.detail);
                return e
            }
            if ("function" === typeof window.CustomEvent) return !1;
            b.prototype = window.Event.prototype;
            window.CustomEvent = b
        })();
        K();
        Ba(Ca);
        ya();
        za()
    };
    this.InsertScript = function(b, e, f, g, m) {
        var h = null != g && "undefined" != typeof g,
            p;
        if (R(m, h && "undefined" != typeof g.ignoreGroupCheck && 1 == g.ignoreGroupCheck || !1) && !D(ba, m)) {
            I.push(m);
            h && "undefined" != typeof g.deleteSelectorContent && 1 == g.deleteSelectorContent && sa(e);
            m = document.createElement("script");
            null != f && "undefined" != typeof f && (p = !1, m.onload =
                m.onreadystatechange = function() {
                    p || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (p = !0, f())
                });
            m.type = "text/javascript";
            m.src = b;
            switch (e) {
                case "head":
                    document.getElementsByTagName("head")[0].appendChild(m);
                    break;
                case "body":
                    document.getElementsByTagName("body")[0].appendChild(m);
                    break;
                default:
                    document.getElementById(e) && (document.getElementById(e).appendChild(m), h && "undefined" != typeof g.makeSelectorVisible && 1 == g.makeSelectorVisible && U(e))
            }
            if (h && "undefined" != typeof g.makeElementsVisible)
                for (b =
                    0; b < g.makeElementsVisible.length; b += 1) U(g.makeElementsVisible[b]);
            if (h && "undefined" != typeof g.deleteElements)
                for (h = 0; h < g.deleteElements.length; h += 1) ta(g.deleteElements[h])
        }
    };
    this.InsertHtml = function(b, e, f, g, m) {
        var h = null != g && "undefined" != typeof g;
        if (R(m, h && "undefined" != typeof g.ignoreGroupCheck && 1 == g.ignoreGroupCheck || !1) && !D(da, m)) {
            J.push(m);
            h && "undefined" != typeof g.deleteSelectorContent && 1 == g.deleteSelectorContent && sa(e);
            m = document.getElementById(e);
            var p;
            m && (p = document.createElement("div"), p.innerHTML =
                b, m.appendChild(p));
            h && "undefined" != typeof g.makeSelectorVisible && 1 == g.makeSelectorVisible && U(e);
            if (h && "undefined" != typeof g.makeElementsVisible)
                for (b = 0; b < g.makeElementsVisible.length; b += 1) U(g.makeElementsVisible[b]);
            if (h && "undefined" != typeof g.deleteElements)
                for (h = 0; h < g.deleteElements.length; h += 1) ta(g.deleteElements[h]);
            null != f && "undefined" != typeof f && f()
        }
    };
    this.Close = function() {
        G();
        F("NotLandingPage");
        C("OptanonConsent");
        M();
        K();
        Q()
    };
    this.AllowAll = function(b) {
        var e = u(),
            h;
        t = [];
        for (h = 0; h < e.Groups.length; h +=
            1) b = e.Groups[h], z(b) && t.push(v(b) + ":1");
        f("#optanon #optanon-menu li").removeClass("menu-item-off");
        f("#optanon #optanon-menu li").addClass("menu-item-on");
        f("#optanon-show-settings-popup ul li").each(function() {
            f(this).find(".icon").removeClass("menu-item-off").addClass("menu-item-on")
        });
        G();
        F("NotLandingPage");
        C("OptanonConsent");
        M();
        K();
        Q()
    };
    this.ToggleInfoDisplay = function() {
        f("#optanon #optanon-popup-bg, #optanon #optanon-popup-wrapper").is(":hidden") ? Oa() : (G(), C("OptanonConsent"), M(), K(), Q())
    };
    this.BlockGoogleAnalytics = function(b, e) {
        window["ga-disable-" + b] = !R(e)
    };
    this.TriggerGoogleAnalyticsEvent = function(b, e, f, g) {
        "undefined" != typeof _gaq && _gaq.push(["_trackEvent", b, e, f, g]);
        "undefined" != typeof ga && ga("send", "event", b, e, f, g);
        "undefined" != typeof dataLayer && dataLayer.constructor === Array && dataLayer.push({
            event: "trackOptanonEvent",
            optanonCategory: b,
            optanonAction: e,
            optanonLabel: f,
            optanonValue: g
        })
    };
    this.IsAlertBoxClosed = this.IsAlertBoxClosedAndValid = function() {
        var b = u(),
            e = E("OptanonAlertBoxClosed"),
            b = b.LastReconsentDate;
        if (null === e) return !1;
        if (!b) return !0;
        (e = new Date(b) > new Date(e)) && Optanon.ReconsentGroups();
        return !e
    };
    this.ReconsentGroups = function() {
        var b = !1,
            e = H(x("OptanonConsent", "groups")),
            f = H(x("OptanonConsent", "groups").replace(/:0/g, "").replace(/:1/g, "")),
            g = u();
        if (x("OptanonConsent", "groups")) {
            for (var m = 0; m < g.Groups.length; m += 1) {
                var n = g.Groups[m];
                if (z(n)) {
                    var p = T(f, v(n));
                    if (-1 != p) {
                        var q = y(n).toLowerCase(); - 1 < ["inactive", "inactive landingpage", "do not track"].indexOf(q) && (b = !0, q = "inactive landingpage" ===
                            q ? ":1" : ":0", e[p] = v(n) + q)
                    }
                }
            }
            b && C("OptanonConsent", e)
        }
    };
    this.SetAlertBoxClosed = function(b) {
        var e = (new Date).toISOString();
        b ? aa("OptanonAlertBoxClosed", e, 365) : aa("OptanonAlertBoxClosed", e)
    };
    this.GetDomainData = function() {
        return u()
    };
    this.OnConsentChanged = function(b) {
        window.addEventListener("consent.onetrust", b)
    }
}).call(Optanon);
Optanon.Init();