"undefined" == typeof Optanon && (Optanon = {});
(function() {
    function I() {
        var a = [],
            d;
        for (d = 0; d < n.length; d += 1) {
            var e = n[d]; - 1 != e.indexOf(":1", e.length - 2) && Y(n[d].replace(":1", "")) && a.push(n[d].replace(":1", ""))
        }
        a = "," + a.toString().toLowerCase() + ",";
        window.OnetrustActiveGroups = a;
        window.OptanonActiveGroups = a;
        "undefined" != typeof dataLayer ? dataLayer.constructor === Array && (dataLayer.push({
            OnetrustActiveGroups: a
        }), dataLayer.push({
            OptanonActiveGroups: a
        })) : (window.dataLayer = [{
            event: "OptanonLoaded",
            OnetrustActiveGroups: a
        }], window.dataLayer = [{
            event: "OptanonLoaded",
            OptanonActiveGroups: a
        }])
    }

    function C(a) {
        x("OptanonConsent", "landingPath", a)
    }

    function oa(a) {
        var d = document.createElement("script"),
            e;
        null != a && "undefined" != typeof a && (e = !1, d.onload = d.onreadystatechange = function() {
            e || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (e = !0, a())
        });
        d.type = "text/javascript";
        d.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js";
        document.getElementsByTagName("head")[0].appendChild(d)
    }

    function pa() {
        b = jQuery.noConflict(!0);
        b(window).on("load",
            function() {
                J();
                var a, d = p(),
                    e, f, g;
                Z(d);
                b("body").append('\x3cdiv id\x3d"optanon" class\x3d"modern"\x3e\x3c/div\x3e');
                b("#optanon").html('\x3cdiv id\x3d"optanon-popup-bg"\x3e\x3c/div\x3e\x3cdiv id\x3d"optanon-popup-wrapper" role\x3d"dialog" aria-modal\x3d"true" tabindex\x3d"-1"\x3e\x3cdiv id\x3d"optanon-popup-top"\x3e\x3ca href\x3d"#" onClick\x3d"Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Preferences Close Button\');" class\x3d"optanon-close-link optanon-close optanon-close-ui" title\x3d"Close Preference Centre"\x3e\x3cdiv id\x3d"optanon-close" style\x3d"background: url(https://optanon.blob.core.windows.net/skins/default_flat_bottom_two_button_white/v2/images/optanon-pop-up-close.png);width:34px;height:34px;"\x3e\x3c/div\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv id\x3d"optanon-popup-body"\x3e\x3cdiv id\x3d"optanon-popup-body-left"\x3e\x3cdiv id\x3d"optanon-popup-body-left-shading"\x3e\x3c/div\x3e\x3cdiv id\x3d"optanon-branding-top-logo" style\x3d"background-image: url(https://optanon.blob.core.windows.net/logos/5138/5138:biomedcentral.com/bmc-logo.png) !important;"\x3e\x3c/div\x3e\x3cul id\x3d"optanon-menu"\x3e\x3c/ul\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
                d.Language && d.Language.Culture && b("#optanon-popup-wrapper").attr("lang", d.Language.Culture);
                for (g = 0; g < d.Groups.length; g += 1)
                    if (a = d.Groups[g], t(a) == y || a && null == a.Parent && v(a)) {
                        e = t(a) == y;
                        f = -1 != b.inArray(q(a) + ":1", n);
                        e = b('\x3cli class\x3d"menu-item-necessary ' + (e || f ? "menu-item-on" : "menu-item-off") + '" title\x3d"' + t(a) + '"\x3e\x3cp\x3e\x3ca href\x3d"#"\x3e' + t(a) + "\x3c/a\x3e\x3c/p\x3e\x3c/li\x3e");
                        t(a) == y && e.removeClass("menu-item-necessary").addClass("menu-item-about");
                        switch (a.OptanonGroupId) {
                            case 2:
                                e.removeClass("menu-item-necessary").addClass("menu-item-performance");
                                break;
                            case 3:
                                e.removeClass("menu-item-necessary").addClass("menu-item-functional");
                                break;
                            case 4:
                                e.removeClass("menu-item-necessary").addClass("menu-item-advertising");
                                break;
                            case 8:
                                e.removeClass("menu-item-necessary").addClass("menu-item-social")
                        }
                        e.data("group", a);
                        e.data("optanonGroupId", q(a));
                        e.click(qa);
                        b("#optanon #optanon-menu").append(e)
                    } a = b('\x3cli class\x3d"menu-item-moreinfo menu-item-off" title\x3d"' + d.AboutText + '"\x3e\x3cp\x3e\x3ca target\x3d"_blank" href\x3d"' + d.AboutLink + "\" onClick\x3d\"Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Preferences Cookie Policy');\"\x3e" +
                    d.AboutText + "\x3c/a\x3e\x3c/p\x3e\x3c/li\x3e");
                b("#optanon #optanon-menu").append(a);
                b("#optanon #optanon-popup-body").append('\x3cdiv id\x3d"optanon-popup-body-right"\x3e\x3ch2 aria-label\x3d"true"\x3e' + d.MainText + '\x3c/h2\x3e\x3ch3\x3e\x3c/h3\x3e\x3cdiv id\x3d"optanon-popup-more-info-bar"\x3e\x3cdiv class\x3d"optanon-status"\x3e' + ra(d, "chkMain") + ('\x3cdiv class\x3d"optanon-status-always-active optanon-status-on"\x3e\x3cp\x3e' + d.AlwaysActiveText + "\x3c/p\x3e\x3c/div\x3e") + '\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"optanon-main-info-text"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-bottom-spacer"\x3e\x3c/div\x3e');
                b("#optanon #optanon-popup-wrapper").append('\x3cdiv id\x3d"optanon-popup-bottom"\x3e \x3ca href\x3d"https://onetrust.com/poweredbyonetrust" target\x3d"_blank"\x3e\x3cdiv id\x3d"optanon-popup-bottom-logo" style\x3d"background: url(https://optanon.blob.core.windows.net/skins/default_flat_bottom_two_button_white/v2/images/cookie-collective-top-bottom.png);width:155px;height:35px;" title\x3d"powered by OneTrust"\x3e\x3c/div\x3e\x3c/a\x3e\x3cdiv class\x3d"optanon-button-wrapper optanon-save-settings-button optanon-close optanon-close-consent"\x3e\x3cdiv class\x3d"optanon-white-button-left"\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-white-button-middle"\x3e\x3ca href\x3d"#" onClick\x3d"Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Preferences Save Settings\');"\x3e' +
                    d.AllowAllText + '\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-white-button-right"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-button-wrapper optanon-allow-all-button optanon-allow-all"\x3e\x3cdiv class\x3d"optanon-white-button-left"\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-white-button-middle"\x3e\x3ca href\x3d"#" onClick\x3d"Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Preferences Allow All\');"\x3e' + d.ConfirmText + '\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-white-button-right"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
                Q();
                sa();
                d = p();
                a = '\x3cdiv class\x3d"optanon-alert-box-wrapper  " style\x3d"display:none"\x3e\x3cdiv class\x3d"optanon-alert-box-bottom-top"\x3e\x3cdiv class\x3d"optanon-alert-box-corner-close"\x3e\x3ca class\x3d"optanon-alert-box-close" href\x3d"#" title\x3d"Close Banner" onClick\x3d"Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Banner Close Button\');"\x3e\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-alert-box-bg"\x3e\x3cdiv class\x3d"optanon-alert-box-logo"\x3e \x3c/div\x3e\x3cdiv class\x3d"optanon-alert-box-body"\x3e';
                d.BannerTitle && (a = a + '\x3cp class\x3d"optanon-alert-box-title"\x3e' + d.BannerTitle + "\x3c/p\x3e");
                a = a + "\x3cp\x3e" + d.AlertNoticeText + '\x3c/p\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-clearfix"\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-alert-box-button-container"\x3e\x3cdiv class\x3d"optanon-alert-box-button optanon-button-close"\x3e\x3cdiv class\x3d"optanon-alert-box-button-middle"\x3e\x3ca class\x3d"optanon-alert-box-close" href\x3d"#"\x3e' + d.AlertCloseText + '\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-alert-box-button optanon-button-allow"\x3e\x3cdiv class\x3d"optanon-alert-box-button-middle"\x3e\x3ca class\x3d"optanon-allow-all" href\x3d"#" onClick\x3d"Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Banner Accept Cookies\');"\x3e' +
                    d.AlertAllowCookiesText + '\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-alert-box-button optanon-button-more"\x3e\x3cdiv class\x3d"optanon-alert-box-button-middle"\x3e\x3ca class\x3d"optanon-toggle-display" href\x3d"#" onClick\x3d"Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Banner Open Preferences\');"\x3e' + d.AlertMoreInfoText + '\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-clearfix optanon-alert-box-bottom-padding"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e';
                b("body").append(a);
                ta();
                if (0 < b(".optanon-show-settings").length && (b(".optanon-show-settings").attr("href", "#"), b(".optanon-show-settings").wrap('\x3cdiv class\x3d"optanon-show-settings-popup-wrapper"\x3e').wrap('\x3cdiv class\x3d"optanon-show-settings-button"\x3e').wrap('\x3cdiv class\x3d"optanon-show-settings-middle"\x3e'), b(".optanon-show-settings-middle").before('\x3cdiv class\x3d"optanon-show-settings-left"\x3e\x3c/div\x3e'), b(".optanon-show-settings-middle").after('\x3cdiv class\x3d"optanon-show-settings-right"\x3e\x3c/div\x3e'),
                        b(".optanon-show-settings-button").addClass("optanon-toggle-display"), ua(), d = p(), !("ontouchstart" in window || navigator.msMaxTouchPoints || r("OptanonConsent", "dnt") || r("OptanonConsent", "groups"))))
                    for (a = 0; a < d.Groups.length; a += 1)
                        if (g = d.Groups[a], v(g) && (g = "do not track" == u(g).toLowerCase() && R)) {
                            d = b(".optanon-show-settings-button").first();
                            aa(d);
                            b("#optanon-show-settings-popup").fadeIn(800);
                            ba(d);
                            da(d);
                            K = !0;
                            setTimeout(va, 4E3);
                            x("OptanonConsent", "dnt", "true");
                            break
                        } 0 < b("#optanon-cookie-policy").length &&
                    wa();
                L();
                r("OptanonConsent", "groups") || z("OptanonConsent")
            })
    }

    function J() {
        b("script").filter(function() {
            return b(this).attr("type") && "text/plain" == b(this).attr("type").toLowerCase() && b(this).attr("class") && b(this).attr("class").toLowerCase().match(/optanon-category-[0-9]+($|\s)/)
        }).each(function() {
            var a = b(this).attr("class").toLowerCase().split("optanon-category-")[1];
            M(a, !1) && b(this).replaceWith(b(this).attr("type", "text/javascript")[0].outerHTML)
        })
    }

    function ra(a, d) {
        return '\x3cdiv class\x3d"optanon-status-editable"\x3e\x3cform\x3e\x3cfieldset\x3e\x3cp\x3e\x3cinput type\x3d"checkbox" value\x3d"check" id\x3d"' +
            d + '" checked class\x3d"optanon-status-checkbox" /\x3e\x3clabel for\x3d"' + d + '"\x3e' + a.ActiveText + "\x3c/label\x3e\x3c/p\x3e\x3c/fieldset\x3e\x3c/form\x3e\x3c/div\x3e"
    }

    function qa() {
        var a = p(),
            d = b(this).data("group");
        S(d);
        Z(a);
        b("#optanon #optanon-menu li").removeClass("menu-item-selected");
        b(this).addClass("menu-item-selected");
        b("#optanon h3").text(t(d));
        b("#optanon #optanon-main-info-text").html(N(d));
        if (d && !a.HideToolbarCookieList) {
            var e = p(),
                f = b('\x3cdiv class\x3d"optanon-cookie-list"\x3e\x3c/div\x3e'),
                g, h = S(d),
                m, w, A;
            (d.Cookies && 0 < d.Cookies.length || h && 0 < h.length) && f.append('\x3cdiv class\x3d"optanon-cookies-used"\x3e' + e.CookiesUsedText + "\x3c/div\x3e");
            if (d.Cookies && 0 < d.Cookies.length) {
                A = b('\x3cp class\x3d"optanon-group-cookies-list"\x3e\x3c/p\x3e');
                for (e = 0; e < d.Cookies.length; e += 1) m = d.Cookies[e], A.append((m ? m.Name : "") + (e < d.Cookies.length - 1 ? ", " : ""));
                f.append(A)
            }
            if (h && 0 < h.length)
                for (e = 0; e < h.length; e += 1) {
                    m = b('\x3cp class\x3d"optanon-subgroup-cookies-list"\x3e\x3c/p\x3e');
                    g = ea(h[e]);
                    A = N(h[e]);
                    m.append('\x3cspan class\x3d"optanon-subgroup-header"\x3e' +
                        g + ": \x3c/span\x3e");
                    var r = b('\x3cdiv class\x3d"optanon-subgroup-cookies"\x3e\x3c/div\x3e');
                    for (g = 0; g < h[e].Cookies.length; g += 1) w = h[e].Cookies[g], r.append(w.Name + (g < h[e].Cookies.length - 1 ? ", " : ""));
                    m.append(r);
                    A && m.append('\x3cdiv class\x3d"optanon-subgroup-description"\x3e' + A + "\x3c/div\x3e");
                    f.append(m)
                }
            b("#optanon #optanon-main-info-text").append(f)
        }
        "always active" == u(d).toLowerCase() || "always active" == u(d.Parent).toLowerCase() ? (b("#optanon .optanon-status-always-active").show(), b("#optanon .optanon-status-editable").hide()) :
            (b("#optanon .optanon-status-editable").show(), b("#optanon .optanon-status-always-active").hide(), f = -1 != b.inArray(q(d) + ":1", n), h = b(d && null == d.Parent ? "#chkMain" : "#optanon #chk" + q(d)), f ? (h.prop("checked", !0), h.parent().addClass("optanon-status-on"), h.next("label").text(a.ActiveText)) : (h.prop("checked", !1), h.parent().removeClass("optanon-status-on"), a.InactiveText && h.next("label").text(a.InactiveText)));
        t(d) == y ? b("#optanon #optanon-popup-more-info-bar").hide() : b("#optanon #optanon-popup-more-info-bar").show();
        return !1
    }

    function sa() {
        var a = p();
        b(document).on("click", ".optanon-close-consent", function() {
            Optanon.Close();
            fa(!0, !0);
            return !1
        });
        b(document).on("click", ".optanon-close-ui", function() {
            D();
            return !1
        });
        b(document).on("click", ".optanon-toggle-display", function() {
            Optanon.ToggleInfoDisplay();
            return !1
        });
        b(document).on("click", ".optanon-allow-all", function() {
            Optanon.AllowAll();
            fa(!0, !0);
            return !1
        });
        b(document).on("keydown", "#optanon", function(a) {
            27 == a.keyCode && D()
        });
        b("#optanon").on("change", ".optanon-status-checkbox",
            function() {
                var d = b(this).data("group") || b("#optanon #optanon-menu li.menu-item-selected").data("group");
                b(this).is(":checked") ? xa(a, d, this) : ya(a, d, this);
                Q()
            })
    }

    function q(a) {
        return 0 == a.OptanonGroupId ? a.OptanonGroupId + "_" + a.GroupId : a.OptanonGroupId
    }

    function xa(a, d, e) {
        var f = t(d);
        Optanon.TriggerGoogleAnalyticsEvent("OneTrust Cookie Consent", "Preferences Toggle On", f);
        b("#optanon #optanon-menu li.menu-item-selected").removeClass("menu-item-off");
        b("#optanon #optanon-menu li.menu-item-selected").addClass("menu-item-on");
        b(e).parent().addClass("optanon-status-on");
        b("#optanon-show-settings-popup ul li").each(function() {
            b(e).text() == b("#optanon #optanon-menu li.menu-item-selected ").text() && b(e).find(".icon").removeClass("menu-item-off").addClass("menu-item-on")
        });
        f = O(n, q(d) + ":0"); - 1 != f && (n[f] = q(d) + ":1");
        b(e).next("label").text(a.ActiveText)
    }

    function ya(a, d, e) {
        var f = t(d);
        Optanon.TriggerGoogleAnalyticsEvent("OneTrust Cookie Consent", "Preferences Toggle Off", f);
        b("#optanon #optanon-menu li.menu-item-selected ").removeClass("menu-item-on");
        b("#optanon #optanon-menu li.menu-item-selected").addClass("menu-item-off");
        b(e).parent().removeClass("optanon-status-on");
        b("#optanon-show-settings-popup ul li").each(function() {
            b(e).text() == b("#optanon #optanon-menu li.menu-item-selected ").text() && b(e).find(".icon").removeClass("menu-item-on").addClass("menu-item-off")
        });
        f = O(n, q(d) + ":1"); - 1 != f && (n[f] = q(d) + ":0");
        a.InactiveText && b(e).next("label").text(a.InactiveText)
    }

    function aa(a) {
        var d = p(),
            e, f, g;
        a.parent(".optanon-show-settings-popup-wrapper").append('\x3cdiv id\x3d"optanon-show-settings-popup"\x3e\x3cdiv id\x3d"optanon-show-settings-popup-inner"\x3e\x3cdiv class\x3d"top-arrow"\x3e\x3c/div\x3e\x3cul\x3e\x3c/ul\x3e\x3cdiv class\x3d"menu-bottom-even"\x3e\x3c/div\x3e\x3cdiv class\x3d"bottom-arrow-even"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
        for (g = 0; g < d.Groups.length; g += 1) {
            if ((a = d.Groups[g]) && null == a.Parent && v(a)) switch (e = -1 != b.inArray(q(a) + ":1", n), f = !E("OptanonConsent") && "do not track" == u(a).toLowerCase() && R, e = b('\x3cli\x3e\x3cspan class\x3d"icon necessary-icon ' + (e ? "menu-item-on" : "menu-item-off") + '"\x3e\x3c/span\x3e' + t(a) + (f ? '\x3cbr\x3e\x3cspan class\x3d"optanon-dnt"\x3eOff by Do Not Track\x3c/span\x3e' : "") + '\x3cdiv class\x3d"menu-item-border"\x3e\x3c/div\x3e\x3c/li\x3e'), a.OptanonGroupId) {
                case 2:
                    e.find(".icon").removeClass("necessary-icon").addClass("performance-icon");
                    break;
                case 3:
                    e.find(".icon").removeClass("necessary-icon").addClass("functional-icon");
                    break;
                case 4:
                    e.find(".icon").removeClass("necessary-icon").addClass("advertising-icon");
                    break;
                case 8:
                    e.find(".icon").removeClass("necessary-icon").addClass("social-icon")
            }
            b("#optanon-show-settings-popup ul").append(e)
        }
        b("#optanon-show-settings-popup ul").children(":first").addClass("first");
        b("#optanon-show-settings-popup ul").children(":last").addClass("last");
        b("#optanon-show-settings-popup ul").children(":odd").addClass("even");
        b("#optanon-show-settings-popup ul").children(":even").addClass("odd");
        b("#optanon-show-settings-popup ul").children(":last").hasClass("odd") && (b("#optanon-show-settings-popup .bottom-arrow-even").removeClass("bottom-arrow-even").addClass("bottom-arrow-odd"), b("#optanon-show-settings-popup .menu-bottom-even").removeClass("menu-bottom-even").addClass("menu-bottom-odd"));
        b("#optanon-show-settings-popup ul li.last div").remove(".menu-item-border")
    }

    function T() {
        b("#optanon-show-settings-popup").remove()
    }

    function va() {
        ha || b("#optanon-show-settings-popup").fadeOut(800, function() {
            T()
        });
        K = !1
    }

    function ua() {
        b(".optanon-show-settings-button").click(function() {
            Optanon.TriggerGoogleAnalyticsEvent("OneTrust Cookie Consent", "Privacy Settings Click")
        });
        "ontouchstart" in window || navigator.msMaxTouchPoints || b(".optanon-show-settings-button").hover(function() {
            Optanon.TriggerGoogleAnalyticsEvent("OneTrust Cookie Consent", "Privacy Settings Hover");
            ha = !0;
            K || (b("#optanon-show-settings-popup").stop(), T(), aa(b(this)),
                b("#optanon-show-settings-popup").fadeIn(400), ba(b(this)), da(b(this)))
        }, function() {
            b("#optanon-show-settings-popup").fadeOut(400, function() {
                K = !1;
                T()
            })
        })
    }

    function ta() {
        if (!Optanon.IsAlertBoxClosedAndValid()) {
            var a = p();
            b(".optanon-alert-box-wrapper").show().animate({
                bottom: "0px"
            }, 1E3);
            a.ForceConsent && b("#optanon-popup-bg").css({
                "z-index": "7000"
            }).show();
            b(".optanon-alert-box-close").click(function() {
                b(".optanon-alert-box-wrapper").fadeOut(200);
                b("#optanon-popup-bg").hide();
                1 == a.CloseShouldAcceptAllCookies &&
                    Optanon.AllowAll();
                Optanon.SetAlertBoxClosed(!0);
                return !1
            })
        }
    }

    function wa() {
        var a, d, e, f, g, h, m = p(),
            w, n;
        for (e = 0; e < m.Groups.length; e += 1)
            if ((a = m.Groups[e]) && null == a.Parent && v(a)) {
                w = b('\x3cdiv class\x3d"optanon-cookie-policy-group"\x3e\x3c/div\x3e');
                w.append('\x3cp class\x3d"optanon-cookie-policy-group-name"\x3e' + t(a) + "\x3c/p\x3e");
                w.append('\x3cp class\x3d"optanon-cookie-policy-group-description"\x3e' + N(a) + "\x3c/p\x3e");
                if (0 < a.Cookies.length)
                    for (w.append('\x3cp class\x3d"optanon-cookie-policy-cookies-used"\x3e' +
                            m.CookiesUsedText + "\x3c/p\x3e"), w.append('\x3cul class\x3d"optanon-cookie-policy-group-cookies-list"\x3e\x3c/ul\x3e'), f = 0; f < a.Cookies.length; f += 1) d = (d = a.Cookies[f]) ? d.Name : "", w.find(".optanon-cookie-policy-group-cookies-list").append("\x3cli\x3e" + d + "\x3c/li\x3e");
                a = S(a);
                if (0 < a.length) {
                    m.CookiesText || (m.CookiesText = "Cookies");
                    m.CategoriesText || (m.CategoriesText = "Categories");
                    m.LifespanText || (m.LifespanText = "Lifespan");
                    f = b('\x3cdiv class\x3d"optanon-cookie-policy-subgroup-table"\x3e\x3c/div\x3e');
                    f.append('\x3cdiv class\x3d"optanon-cookie-policy-subgroup-table-header clearfix"\x3e\x3c/div\x3e');
                    d = "";
                    m.IsLifespanEnabled && (d = "\x26nbsp;(" + m.LifespanText + ")");
                    f.find(".optanon-cookie-policy-subgroup-table-header").append('\x3cdiv class\x3d"optanon-cookie-policy-right"\x3e\x3cp class\x3d"optanon-cookie-policy-subgroup-table-column-header"\x3e' + m.CookiesText + d + "\x3c/p\x3e\x3c/div\x3e");
                    f.find(".optanon-cookie-policy-subgroup-table-header").append('\x3cdiv class\x3d"optanon-cookie-policy-left"\x3e\x3cp class\x3d"optanon-cookie-policy-subgroup-table-column-header"\x3e' + m.CategoriesText + "\x3c/p\x3e\x3c/div\x3e");
                    for (d = 0; d < a.length; d += 1) {
                        n = b('\x3cdiv class\x3d"optanon-cookie-policy-subgroup"\x3e\x3c/div\x3e');
                        n.append('\x3cdiv class\x3d"optanon-cookie-policy-left"\x3e\x3c/div\x3e');
                        g = ea(a[d]);
                        n.find(".optanon-cookie-policy-left").append('\x3cp class\x3d"optanon-cookie-policy-subgroup-name"\x3e' + g + "\x3c/p\x3e");
                        n.find(".optanon-cookie-policy-left").append('\x3cp class\x3d"optanon-cookie-policy-subgroup-description"\x3e' + N(a[d]) + "\x3c/p\x3e");
                        n.append('\x3cdiv class\x3d"optanon-cookie-policy-right"\x3e\x3c/div\x3e');
                        n.find(".optanon-cookie-policy-right").append('\x3cul class\x3d"optanon-cookie-policy-subgroup-cookies-list"\x3e\x3c/ul\x3e');
                        if (m.IsLifespanEnabled)
                            for (g = 0; g < a[d].Cookies.length; g += 1) {
                                h = a[d].Cookies[g];
                                var q = "",
                                    q = h.IsSession ? "Session" : 0 === h.Length ? "\x3c 1 days" : h.Length + " days";
                                n.find(".optanon-cookie-policy-subgroup-cookies-list").append("\x3cli\x3e" + h.Name + "\x26nbsp;(" + q + ")\x3c/li\x3e")
                            } else
                                for (g = 0; g < a[d].Cookies.length; g += 1) h = a[d].Cookies[g], n.find(".optanon-cookie-policy-subgroup-cookies-list").append("\x3cli\x3e" +
                                    h.Name + "\x3c/li\x3e");
                        f.append(n)
                    }
                    w.append(f)
                }
                b("#optanon-cookie-policy").append(w);
                ia()
            } b(window).resize(function() {
            ia()
        })
    }

    function N(a) {
        return a && a.GroupLanguagePropertiesSets && a.GroupLanguagePropertiesSets[0] && a.GroupLanguagePropertiesSets[0].GroupDescription && a.GroupLanguagePropertiesSets[0].GroupDescription.Text ? a.GroupLanguagePropertiesSets[0].GroupDescription.Text.replace(/\r\n/g, "\x3cbr\x3e") : ""
    }

    function t(a) {
        return a && a.GroupLanguagePropertiesSets && a.GroupLanguagePropertiesSets[0] && a.GroupLanguagePropertiesSets[0].GroupName ?
            a.GroupLanguagePropertiesSets[0].GroupName.Text : ""
    }

    function u(a) {
        return a && a.GroupLanguagePropertiesSets && a.GroupLanguagePropertiesSets[0] && a.GroupLanguagePropertiesSets[0].DefaultStatus ? a.GroupLanguagePropertiesSets[0].DefaultStatus.Text : ""
    }

    function ea(a) {
        return a ? t(a) : ""
    }

    function ia() {
        b("#optanon-cookie-policy .optanon-cookie-policy-subgroup").each(function() {
            b(this).find(".optanon-cookie-policy-left").height("auto");
            b(this).find(".optanon-cookie-policy-right").height("auto");
            b(this).find(".optanon-cookie-policy-left").height() >=
                b(this).find(".optanon-cookie-policy-right").height() ? b(this).find(".optanon-cookie-policy-right").height(b(this).find(".optanon-cookie-policy-left").height()) : b(this).find(".optanon-cookie-policy-left").height(b(this).find(".optanon-cookie-policy-right").height())
        })
    }

    function za() {
        b("#optanon #optanon-menu li").removeClass("menu-item-selected");
        b("#optanon #optanon-menu li").each(function() {
            b(this).text() == y && b(this).click()
        });
        Q();
        var a = b("#optanon-popup-wrapper"),
            d = window.innerWidth || document.documentElement.clientWidth ||
            document.body.clientWidth,
            e = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        a.css("margin-top", "10px");
        720 > d ? a.css("top", "10px") : a.outerHeight() > e ? a.css("top", Math.max(0, (e - a.outerHeight()) / 2 + b(window).scrollTop()) + "px") : a.css("top", Math.max(0, (e - a.outerHeight()) / 2) + "px");
        b("#optanon #optanon-popup-bg, #optanon #optanon-popup-wrapper").hide().fadeIn(400);
        a.focus()
    }

    function D(a) {
        b("#optanon #optanon-popup-bg, #optanon #optanon-popup-wrapper").fadeOut(400, a)
    }

    function ja(a) {
        if (u(a)) {
            var d =
                u(a).toLowerCase();
            a.Parent && (d = u(a.Parent).toLowerCase());
            return "always active" == d || "active" == d || "inactive landingpage" == d || "do not track" == d && !R
        }
        return !0
    }

    function ka() {
        var a, d = p(),
            e;
        if (r("OptanonConsent", "groups")) {
            r("OptanonConsent", "groups") && !U && (U = !0);
            a = !1;
            var d = F(r("OptanonConsent", "groups")),
                b = F(r("OptanonConsent", "groups").replace(/:0/g, "").replace(/:1/g, ""));
            e = p();
            var g, h, m;
            if (r("OptanonConsent", "groups")) {
                for (h = 0; h < e.Groups.length; h += 1) g = e.Groups[h], v(g) && (m = O(b, q(g)), -1 == m && (a = !0, ja(g) ?
                    d.push(q(g) + ":1") : d.push(q(g) + ":0")));
                for (h = d.length - 1; 0 <= h; --h) {
                    m = !1;
                    for (b = 0; b < e.Groups.length; b += 1)
                        if (g = e.Groups[b], v(g) && q(g) == d[h].replace(/:0/g, "").replace(/:1/g, "")) {
                            m = !0;
                            break
                        } m || (a = !0, d.splice(h, 1))
                }
                a && z("OptanonConsent", d)
            }
            n = F(r("OptanonConsent", "groups"))
        } else {
            n = [];
            for (e = 0; e < d.Groups.length; e += 1) a = d.Groups[e], v(a) && (ja(a) ? n.push(q(a) + ":1") : n.push(q(a) + ":0"));
            U = !0
        }
    }

    function z(a, d) {
        d ? x(a, "groups", d.toString().toLowerCase()) : x(a, "groups", n.toString().toLowerCase())
    }

    function x(a, d, e) {
        var b = {},
            g = E(a),
            h, m;
        if (g)
            for (h = g.split("\x26"), g = 0; g < h.length; g += 1) m = h[g].split("\x3d"), b[decodeURIComponent(m[0])] = decodeURIComponent(m[1]).replace(/\+/g, " ");
        b[d] = e;
        b.datestamp = (new Date).toString();
        b.version = "3.6.18";
        d = "";
        for (var n in b) b.hasOwnProperty(n) && ("" != d && (d += "\x26"), d += n + "\x3d" + encodeURIComponent(b[n]).replace(/%20/g, "+"));
        V(a, d, 365)
    }

    function r(a, d) {
        var b = E(a),
            f, g, h;
        if (b) {
            f = {};
            g = b.split("\x26");
            for (b = 0; b < g.length; b += 1) h = g[b].split("\x3d"), f[decodeURIComponent(h[0])] = decodeURIComponent(h[1]).replace(/\+/g,
                " ");
            return d && f[d] ? f[d] : d && !f[d] ? "" : f
        }
        return ""
    }

    function V(a, d, b) {
        var e;
        b ? (e = new Date, e.setTime(e.getTime() + 864E5 * b), b = "; expires\x3d" + e.toGMTString()) : b = "";
        e = ["biomedcentral.com"];
        1 >= e.length && (e[1] = "");
        document.cookie = a + "\x3d" + d + b + "; path\x3d/" + e[1] + "; domain\x3d." + e[0]
    }

    function E(a) {
        a += "\x3d";
        var d = document.cookie.split(";"),
            b, f;
        for (b = 0; b < d.length; b += 1) {
            for (f = d[b];
                " " == f.charAt(0);) f = f.substring(1, f.length);
            if (0 == f.indexOf(a)) return f.substring(a.length, f.length)
        }
        return null
    }

    function M(a, d) {
        var b =
            null != a && "undefined" != typeof a,
            f, g;
        if (!d) {
            ka();
            f = B(n, a + ":1");
            a: {
                g = p();
                var h;
                for (h = 0; h < g.Groups.length; h += 1)
                    if (g.Groups[h].OptanonGroupId == a) {
                        g = !0;
                        break a
                    } g = !1
            }
            g = !g;
            return b && (f && Y(a) || g) ? !0 : !1
        }
        return !0
    }

    function Y(a) {
        var d = p(),
            b, f;
        for (f = 0; f < d.Groups.length; f += 1)
            if (d.Groups[f].OptanonGroupId == a) {
                b = d.Groups[f];
                break
            } return "inactive landingpage" != u(b).toLowerCase() ? !0 : (a = r("OptanonConsent", "landingPath")) && a !== location.href ? !0 : !1
    }

    function F(a) {
        return a ? a.toLowerCase().split(",") : []
    }

    function L() {
        var a;
        if ("function" == typeof OptanonWrapper && "undefined" != OptanonWrapper) {
            OptanonWrapper();
            for (a = 0; a < G.length; a += 1) B(W, G[a]) || W.push(G[a]);
            G = [];
            for (a = 0; a < H.length; a += 1) B(X, H[a]) || X.push(H[a]);
            H = []
        }
    }

    function Z(a) {
        a.Groups.unshift({
            GroupLanguagePropertiesSets: [{
                GroupName: {
                    Text: y
                },
                GroupDescription: {
                    Text: a.MainInfoText
                }
            }]
        })
    }

    function la(a) {
        if (a = document.getElementById(a))
            for (; a.hasChildNodes();) a.removeChild(a.lastChild)
    }

    function P(a) {
        if (a = document.getElementById(a)) a.style.display = "block"
    }

    function ma(a) {
        (a =
            document.getElementById(a)) && a.parentNode.removeChild(a)
    }

    function B(a, d) {
        var b;
        for (b = 0; b < a.length; b += 1)
            if (a[b].toString().toLowerCase() == d.toString().toLowerCase()) return !0;
        return !1
    }

    function O(a, d) {
        var b;
        for (b = 0; b < a.length; b += 1)
            if (a[b] == d) return b;
        return -1
    }

    function Q() {
        var a = 0,
            d, e = p(),
            f;
        for (f = 0; f < e.Groups.length; f += 1)
            if (d = e.Groups[f], v(d) && B(n, q(d) + ":0") && (a += 1, 1 <= a)) return b("#optanon .optanon-allow-all-button").show(), !0;
        b("#optanon .optanon-allow-all-button").hide();
        return !1
    }

    function fa(a, d) {
        b(".optanon-alert-box-wrapper").fadeOut(400);
        a && (na || !na && !Optanon.IsAlertBoxClosedAndValid()) && Optanon.SetAlertBoxClosed(d)
    }

    function ba(a) {
        b("#optanon-show-settings-popup").removeClass("optanon-show-settings-popup-top-button");
        b("#optanon-show-settings-popup ul").removeClass("top-button");
        b("#optanon-show-settings-popup .top-arrow, #optanon-show-settings-popup .bottom-arrow-even, #optanon-show-settings-popup .bottom-arrow-odd").hide();
        b("#optanon-show-settings-popup").css("top", "-" + b("#optanon-show-settings-popup-inner").height() + "px");
        var d =
            b("#optanon-show-settings-popup"),
            e = b(window).scrollTop(),
            d = d.offset().top;
        e >= d - 50 ? (b("#optanon-show-settings-popup").addClass("optanon-show-settings-popup-top-button"), b("#optanon-show-settings-popup ul").addClass("top-button"), b("#optanon-show-settings-popup").css("top", a.find(".optanon-show-settings-left").height() + b("#optanon-show-settings-popup .top-arrow").height() - 3 + "px"), b("#optanon-show-settings-popup .top-arrow").css("top", "-" + (b("#optanon-show-settings-popup .top-arrow").height() - 2) + "px"),
            b("#optanon-show-settings-popup .top-arrow").show()) : b("#optanon-show-settings-popup .bottom-arrow-even, #optanon-show-settings-popup .bottom-arrow-odd").show()
    }

    function da(a) {
        var d = b("#optanon-show-settings-popup-inner");
        a = a.find(".optanon-show-settings-left").width() + a.find(".optanon-show-settings-middle").width() + a.find(".optanon-show-settings-right").width();
        var e = b("#optanon-show-settings-popup ul").width() - 3,
            f = b("#optanon-show-settings-popup .top-arrow").width(),
            g, h, m, n;
        d.css("margin-left",
            "-" + ((e - a) / 2 + a) + "px");
        b("#optanon-show-settings-popup .top-arrow, #optanon-show-settings-popup .bottom-arrow-even, #optanon-show-settings-popup .bottom-arrow-odd").css("margin-left", (e - f) / 2 + "px");
        d.css("left", "0px");
        g = b(window).scrollLeft();
        h = d.offset().left;
        m = g + b(window).width();
        n = h + d.width();
        a < e ? g >= h ? (d.css("margin-left", "-" + a + "px"), b("#optanon-show-settings-popup .top-arrow, #optanon-show-settings-popup .bottom-arrow-even, #optanon-show-settings-popup .bottom-arrow-odd").css("margin-left", (a - f) /
            2 + "px")) : m <= n && (d.css("margin-left", "-" + e + "px"), b("#optanon-show-settings-popup .top-arrow, #optanon-show-settings-popup .bottom-arrow-even, #optanon-show-settings-popup .bottom-arrow-odd").css("margin-left", e - (a + f) / 2 + "px")) : m <= n ? d.css("margin-left", "-" + a + "px") : g >= h && d.css("margin-left", "-" + e + "px")
    }

    function v(a) {
        var d, b = p(),
            f = !1,
            g;
        if (a && null == a.Parent) {
            for (g = 0; g < b.Groups.length; g += 1)
                if (d = b.Groups[g], null != d.Parent && t(a) && t(d.Parent) == t(a) && d.ShowInPopup && null != d.Cookies && 0 < d.Cookies.length) {
                    f = !0;
                    break
                } return a.ShowInPopup && (null != a.Cookies && 0 < a.Cookies.length || f)
        }
        return a.ShowInPopup && null != a.Cookies && 0 < a.Cookies.length
    }

    function S(a) {
        var d, b = p(),
            f = [],
            g;
        for (g = 0; g < b.Groups.length; g += 1) d = b.Groups[g], null != d.Parent && t(d.Parent) == t(a) && d.ShowInPopup && null != d.Cookies && 0 < d.Cookies.length && f.push(d);
        return f
    }

    function p() {
        var a = {
            MainText: "Privacy Preference Centre",
            MainInfoText: "When you visit any web site, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalised web experience.\n\n\x3cbr\x3e\x3cbr\x3e\n\nBecause we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.\n\n\x3cbr\x3e\x3cbr\x3e\n\nIf you change your cookie settings from here and \x3ci\x3esave your changes\x3c/i\x3e, then those changes will only take effect the next time you visit the site, or by refreshing the page.",
            AboutText: "More Information",
            AboutCookiesText: "Your Privacy",
            ConfirmText: "Allow All",
            AllowAllText: "Save Settings",
            CookiesUsedText: "Cookies used",
            ShowAlertNotice: !0,
            AboutLink: "https://www.biomedcentral.com/cookies",
            HideToolbarCookieList: !1,
            ActiveText: "Active",
            AlwaysActiveText: "Always Active",
            AlertNoticeText: "We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners in accordance with our \x3ca href\x3d\"https://www.biomedcentral.com/privacy-statement\"\x3ePrivacy Statement\x3c/a\x3e. You can manage your preferences in 'Manage Cookies'.",
            AlertCloseText: "Close",
            AlertMoreInfoText: "Manage Cookies",
            AlertAllowCookiesText: "OK",
            CloseShouldAcceptAllCookies: !0,
            LastReconsentDate: 1527002815330,
            BannerTitle: "",
            ForceConsent: !1,
            InactiveText: "Inactive",
            CookiesText: "Cookies",
            CategoriesText: "Categories",
            HasScriptArchive: !0,
            IsLifespanEnabled: !1,
            LifespanText: "Lifespan",
            Groups: [{
                ShowInPopup: !0,
                Order: 1,
                OptanonGroupId: 2,
                Parent: null,
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.\n\nAll information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance."
                    },
                    GroupName: {
                        Text: "Performance \x26 Analytics Cookies"
                    }
                }],
                Cookies: [{
                    Name: "_gat_global",
                    Host: ".biomedcentral.com",
                    IsSession: !1,
                    Length: 0
                }, {
                    Name: "_gat_clientGA",
                    Host: "www.biomedcentral.com",
                    IsSession: !1,
                    Length: 0
                }, {
                    Name: "_ga",
                    Host: "www.biomedcentral.com",
                    IsSession: !1,
                    Length: 729
                }, {
                    Name: "_gid",
                    Host: ".biomedcentral.com",
                    IsSession: !1,
                    Length: 0
                }],
                GroupId: 90345
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
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        }
                    }],
                    Cookies: [{
                        Name: "__gads",
                        Host: ".biomedcentral.com",
                        IsSession: !1,
                        Length: 729
                    }],
                    GroupId: 90347
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
                    }
                }],
                Cookies: [{
                    Name: "auth_token",
                    Host: ".twitter.com",
                    IsSession: !1,
                    Length: 5514
                }, {
                    Name: "twll",
                    Host: ".twitter.com",
                    IsSession: !1,
                    Length: 1862
                }, {
                    Name: "secure_session",
                    Host: ".twitter.com",
                    IsSession: !1,
                    Length: 5514
                }, {
                    Name: "guest_id",
                    Host: ".twitter.com",
                    IsSession: !1,
                    Length: 529
                }, {
                    Name: "__utma",
                    Host: ".twitter.com",
                    IsSession: !1,
                    Length: 529
                }, {
                    Name: "remember_checked",
                    Host: ".twitter.com",
                    IsSession: !1,
                    Length: 1862
                }, {
                    Name: "remember_checked_on",
                    Host: ".twitter.com",
                    IsSession: !1,
                    Length: 1862
                }],
                GroupId: 110049
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
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        }
                    }],
                    Cookies: [{
                        Name: "__gads",
                        Host: ".biomedcentral.com",
                        IsSession: !1,
                        Length: 729
                    }],
                    GroupId: 90347
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
                    }
                }],
                Cookies: [{
                    Name: "datr",
                    Host: ".facebook.com",
                    IsSession: !1,
                    Length: 529
                }, {
                    Name: "lu",
                    Host: ".facebook.com",
                    IsSession: !1,
                    Length: 529
                }],
                GroupId: 110048
            }, {
                ShowInPopup: !0,
                Order: 9,
                OptanonGroupId: 0,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        }
                    }],
                    Cookies: [{
                        Name: "__gads",
                        Host: ".biomedcentral.com",
                        IsSession: !1,
                        Length: 729
                    }],
                    GroupId: 90347
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
                    }
                }],
                Cookies: [{
                    Name: "lang",
                    Host: "syndication.twitter.com",
                    IsSession: !0,
                    Length: 0
                }],
                GroupId: 110047
            }, {
                ShowInPopup: !0,
                Order: 1,
                OptanonGroupId: 102,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        }
                    }],
                    Cookies: [{
                        Name: "__gads",
                        Host: ".biomedcentral.com",
                        IsSession: !1,
                        Length: 729
                    }],
                    GroupId: 90347
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
                    }
                }],
                Cookies: [{
                    Name: "u",
                    Host: ".ml314.com",
                    IsSession: !1,
                    Length: 0
                }, {
                    Name: "pi",
                    Host: ".ml314.com",
                    IsSession: !1,
                    Length: 365
                }],
                GroupId: 90351
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
                            Text: "These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.\r\n\r\nIf you do not allow these cookies then some or all of these services may not function properly."
                        },
                        GroupName: {
                            Text: "Functional Cookies"
                        }
                    }],
                    Cookies: [{
                        Name: "TRACK_COOKIE",
                        Host: "substanceabusepolicy.biomedcentral.com",
                        IsSession: !0,
                        Length: 0
                    }],
                    GroupId: 90346
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "springernature.com"
                    }
                }],
                Cookies: [{
                    Name: "nature_impact_pd",
                    Host: ".springernature.com",
                    IsSession: !1,
                    Length: 2915230
                }],
                GroupId: 125054
            }, {
                ShowInPopup: !0,
                Order: 0,
                OptanonGroupId: 101,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        }
                    }],
                    Cookies: [{
                        Name: "__gads",
                        Host: ".biomedcentral.com",
                        IsSession: !1,
                        Length: 729
                    }],
                    GroupId: 90347
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
                    }
                }],
                Cookies: [{
                    Name: "APISID",
                    Host: ".google.com",
                    IsSession: !1,
                    Length: 529
                }, {
                    Name: "SSID",
                    Host: ".google.com",
                    IsSession: !1,
                    Length: 529
                }, {
                    Name: "NID",
                    Host: ".google.com",
                    IsSession: !1,
                    Length: 182
                }, {
                    Name: "PREF",
                    Host: ".google.com",
                    IsSession: !1,
                    Length: 529
                }, {
                    Name: "SID",
                    Host: ".google.com",
                    IsSession: !1,
                    Length: 529
                }, {
                    Name: "SAPISID",
                    Host: ".google.com",
                    IsSession: !1,
                    Length: 529
                }, {
                    Name: "HSID",
                    Host: ".google.com",
                    IsSession: !1,
                    Length: 529
                }],
                GroupId: 90350
            }, {
                ShowInPopup: !0,
                Order: 3,
                OptanonGroupId: 104,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        }
                    }],
                    Cookies: [{
                        Name: "__gads",
                        Host: ".biomedcentral.com",
                        IsSession: !1,
                        Length: 729
                    }],
                    GroupId: 90347
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
                    }
                }],
                Cookies: [{
                    Name: "_kuid_",
                    Host: ".krxd.net",
                    IsSession: !1,
                    Length: 179
                }],
                GroupId: 90353
            }, {
                ShowInPopup: !0,
                Order: 2,
                OptanonGroupId: 103,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        }
                    }],
                    Cookies: [{
                        Name: "__gads",
                        Host: ".biomedcentral.com",
                        IsSession: !1,
                        Length: 729
                    }],
                    GroupId: 90347
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "visualdna.com"
                    }
                }],
                Cookies: [{
                    Name: "vdnaWidgetMC",
                    Host: ".visualdna.com",
                    IsSession: !1,
                    Length: 89
                }],
                GroupId: 90352
            }, {
                ShowInPopup: !0,
                Order: 3,
                OptanonGroupId: 4,
                Parent: null,
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                    },
                    GroupName: {
                        Text: "Targeting Cookies"
                    }
                }],
                Cookies: [{
                    Name: "__gads",
                    Host: ".biomedcentral.com",
                    IsSession: !1,
                    Length: 729
                }],
                GroupId: 90347
            }, {
                ShowInPopup: !0,
                Order: 2,
                OptanonGroupId: 3,
                Parent: null,
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: "These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.\r\n\r\nIf you do not allow these cookies then some or all of these services may not function properly."
                    },
                    GroupName: {
                        Text: "Functional Cookies"
                    }
                }],
                Cookies: [{
                    Name: "TRACK_COOKIE",
                    Host: "substanceabusepolicy.biomedcentral.com",
                    IsSession: !0,
                    Length: 0
                }],
                GroupId: 90346
            }, {
                ShowInPopup: !0,
                Order: 0,
                OptanonGroupId: 1,
                Parent: null,
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Always Active"
                    },
                    GroupDescription: {
                        Text: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.\r\n\r\nYou can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information."
                    },
                    GroupName: {
                        Text: "Strictly Necessary Cookies"
                    }
                }],
                Cookies: [{
                    Name: "OptanonConsent",
                    Host: "biomedcentral.com",
                    IsSession: !1,
                    Length: 365
                }, {
                    Name: "OptanonAlertBoxClosed",
                    Host: "biomedcentral.com",
                    IsSession: !1,
                    Length: 365
                }, {
                    Name: "GoogleAdServingTest",
                    Host: "substanceabusepolicy.biomedcentral.com",
                    IsSession: !0,
                    Length: 0
                }],
                GroupId: 90349
            }, {
                ShowInPopup: !0,
                Order: 7,
                OptanonGroupId: 0,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        }
                    }],
                    Cookies: [{
                        Name: "__gads",
                        Host: ".biomedcentral.com",
                        IsSession: !1,
                        Length: 729
                    }],
                    GroupId: 90347
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "ps.eyeota.net"
                    }
                }],
                Cookies: [{
                    Name: "ONPLFTRH",
                    Host: "ps.eyeota.net",
                    IsSession: !0,
                    Length: 0
                }],
                GroupId: 94131
            }, {
                ShowInPopup: !0,
                Order: 5,
                OptanonGroupId: 106,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        }
                    }],
                    Cookies: [{
                        Name: "__gads",
                        Host: ".biomedcentral.com",
                        IsSession: !1,
                        Length: 729
                    }],
                    GroupId: 90347
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
                    }
                }],
                Cookies: [{
                    Name: "id",
                    Host: ".doubleclick.net",
                    IsSession: !1,
                    Length: 529
                }],
                GroupId: 90355
            }, {
                ShowInPopup: !0,
                Order: 10,
                OptanonGroupId: 0,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        }
                    }],
                    Cookies: [{
                        Name: "__gads",
                        Host: ".biomedcentral.com",
                        IsSession: !1,
                        Length: 729
                    }],
                    GroupId: 90347
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "edge-cdn.net"
                    }
                }],
                Cookies: [{
                    Name: "PHPSESSID",
                    Host: ".edge-cdn.net",
                    IsSession: !0,
                    Length: 0
                }],
                GroupId: 110001
            }, {
                ShowInPopup: !0,
                Order: 4,
                OptanonGroupId: 105,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        }
                    }],
                    Cookies: [{
                        Name: "__gads",
                        Host: ".biomedcentral.com",
                        IsSession: !1,
                        Length: 729
                    }],
                    GroupId: 90347
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
                    }
                }],
                Cookies: [{
                    Name: "mako_uid",
                    Host: ".eyeota.net",
                    IsSession: !1,
                    Length: 364
                }],
                GroupId: 90354
            }, {
                ShowInPopup: !0,
                Order: 8,
                OptanonGroupId: 0,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        }
                    }],
                    Cookies: [{
                        Name: "__gads",
                        Host: ".biomedcentral.com",
                        IsSession: !1,
                        Length: 729
                    }],
                    GroupId: 90347
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "delivery.pbgrd.com"
                    }
                }],
                Cookies: [{
                    Name: "pbgrd",
                    Host: ".delivery.pbgrd.com",
                    IsSession: !1,
                    Length: 730
                }],
                GroupId: 11E4
            }, {
                ShowInPopup: !0,
                Order: 6,
                OptanonGroupId: 107,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        }
                    }],
                    Cookies: [{
                        Name: "__gads",
                        Host: ".biomedcentral.com",
                        IsSession: !1,
                        Length: 729
                    }],
                    GroupId: 90347
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
                    }
                }],
                Cookies: [{
                    Name: "khaos",
                    Host: ".rubiconproject.com",
                    IsSession: !1,
                    Length: 365
                }],
                GroupId: 90356
            }, {
                ShowInPopup: !0,
                Order: 1,
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
                            Text: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.\r\n\r\nYou can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information."
                        },
                        GroupName: {
                            Text: "Strictly Necessary Cookies"
                        }
                    }],
                    Cookies: [{
                        Name: "OptanonConsent",
                        Host: "biomedcentral.com",
                        IsSession: !1,
                        Length: 365
                    }, {
                        Name: "OptanonAlertBoxClosed",
                        Host: "biomedcentral.com",
                        IsSession: !1,
                        Length: 365
                    }, {
                        Name: "GoogleAdServingTest",
                        Host: "substanceabusepolicy.biomedcentral.com",
                        IsSession: !0,
                        Length: 0
                    }],
                    GroupId: 90349
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "Kiss Insights"
                    }
                }],
                Cookies: [{
                    Name: "ki_s",
                    Host: "www.biomedcentral.com",
                    IsSession: !1,
                    Length: 1825
                }, {
                    Name: "ki_t",
                    Host: "www.biomedcentral.com",
                    IsSession: !1,
                    Length: 1825
                }, {
                    Name: "ki_u",
                    Host: ".www.biomedcentral.com",
                    IsSession: !1,
                    Length: 0
                }, {
                    Name: "ki_r",
                    Host: ".www.biomedcentral.com",
                    IsSession: !1,
                    Length: 0
                }],
                GroupId: 125125
            }, {
                ShowInPopup: !0,
                Order: 0,
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
                            Text: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.\r\n\r\nYou can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information."
                        },
                        GroupName: {
                            Text: "Strictly Necessary Cookies"
                        }
                    }],
                    Cookies: [{
                        Name: "OptanonConsent",
                        Host: "biomedcentral.com",
                        IsSession: !1,
                        Length: 365
                    }, {
                        Name: "OptanonAlertBoxClosed",
                        Host: "biomedcentral.com",
                        IsSession: !1,
                        Length: 365
                    }, {
                        Name: "GoogleAdServingTest",
                        Host: "substanceabusepolicy.biomedcentral.com",
                        IsSession: !0,
                        Length: 0
                    }],
                    GroupId: 90349
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "ndownloader.figshare.com"
                    }
                }],
                Cookies: [{
                    Name: "fig_tracker_client",
                    Host: "ndownloader.figshare.com",
                    IsSession: !1,
                    Length: 364
                }],
                GroupId: 112263
            }],
            ConsentModel: {
                Name: "Implied consent"
            },
            Language: {
                Culture: "en-GB"
            }
        };
        a.Groups.sort(function(a, b) {
            return 100 === a.Order && 100 === b.Order ? a.OptanonGroupId - b.OptanonGroupId : a.Order - b.Order
        });
        return a
    }
    var R = "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack,
        K = !1,
        ha = !1,
        na = function() {
            var a = !0,
                d, b = p(),
                f;
            for (f = 0; f < b.Groups.length; f += 1)
                if (d = b.Groups[f], v(d) && (!u(d) || u(d) && ("active" == u(d).toLowerCase() || "inactive landingpage" == u(d).toLowerCase() ||
                        "do not track" == u(d).toLowerCase()))) {
                    a = !1;
                    break
                } return a
        }(),
        Aa = function() {
            var a = !0,
                d, b = p(),
                f;
            for (f = 0; f < b.Groups.length; f += 1)
                if (d = b.Groups[f], v(d) && (d = u(d).toLowerCase(), "inactive landingpage" !== d && "always active" !== d)) {
                    a = !1;
                    break
                } return a
        }(),
        U = !1,
        n, W = [],
        X = [],
        G = [],
        H = [],
        y = p().AboutCookiesText,
        b;
    this.Init = function() {
        ka();
        I();
        oa(pa);
        var a = document.createElement("link");
        a.type = "text/css";
        a.href = "https://optanon.blob.core.windows.net/skins/default_flat_bottom_two_button_white/v2/css/optanon.css";
        a.rel =
            "stylesheet";
        document.getElementsByTagName("head")[0].appendChild(a);
        var a = (a = (a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec("#1B3051")) ? {
                r: parseInt(a[1], 16),
                g: parseInt(a[2], 16),
                b: parseInt(a[3], 16)
            } : null) ? 186 < .299 * a.r + .587 * a.g + .114 * a.b ? "#000000" : "#ffffff" : "",
            d = document.createElement("style");
        d.innerHTML = "#optanon ul#optanon-menu li { background-color: #F8F8F8 !important }#optanon ul#optanon-menu li.menu-item-selected { background-color: #C5F6F9 !important }#optanon #optanon-popup-wrapper .optanon-white-button-middle { background-color: #1B3051 !important }.optanon-alert-box-wrapper .optanon-alert-box-button-middle { background-color: #1B3051 !important; border-color: #1B3051 !important; }#optanon #optanon-popup-wrapper .optanon-white-button-middle a { color: " +
            a + " !important }.optanon-alert-box-wrapper .optanon-alert-box-button-middle a { color: " + a + " !important }#optanon #optanon-popup-bottom { background-color: #FFFFFF !important }#optanon.modern #optanon-popup-top, #optanon.modern #optanon-popup-body-left-shading { background-color: #FFFFFF !important }.optanon-alert-box-wrapper { background-color:#EFF6FC !important }.optanon-alert-box-wrapper .optanon-alert-box-bg p { color:#333333 !important }";
        document.getElementsByTagName("head")[0].appendChild(d);
        if ((a = r("OptanonConsent", "landingPath")) && a !== location.href) {
            var a = "true" === r("OptanonConsent", "AwaitingReconsent"),
                b = p(),
                d = E("OptanonAlertBoxClosed"),
                b = b.LastReconsentDate;
            d && b && new Date(b) > new Date(d) && !a ? (C(location.href), x("OptanonConsent", "AwaitingReconsent", !0)) : (C("NotLandingPage"), x("OptanonConsent", "AwaitingReconsent", !1), Aa && Optanon.SetAlertBoxClosed(!0))
        } else C(location.href)
    };
    this.InsertScript = function(a, d, b, f, g) {
        var e = null != f && "undefined" != typeof f,
            m;
        if (M(g, e && "undefined" != typeof f.ignoreGroupCheck &&
                1 == f.ignoreGroupCheck || !1) && !B(W, g)) {
            G.push(g);
            e && "undefined" != typeof f.deleteSelectorContent && 1 == f.deleteSelectorContent && la(d);
            g = document.createElement("script");
            null != b && "undefined" != typeof b && (m = !1, g.onload = g.onreadystatechange = function() {
                m || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (m = !0, b())
            });
            g.type = "text/javascript";
            g.src = a;
            switch (d) {
                case "head":
                    document.getElementsByTagName("head")[0].appendChild(g);
                    break;
                case "body":
                    document.getElementsByTagName("body")[0].appendChild(g);
                    break;
                default:
                    document.getElementById(d) && (document.getElementById(d).appendChild(g), e && "undefined" != typeof f.makeSelectorVisible && 1 == f.makeSelectorVisible && P(d))
            }
            if (e && "undefined" != typeof f.makeElementsVisible)
                for (a = 0; a < f.makeElementsVisible.length; a += 1) P(f.makeElementsVisible[a]);
            if (e && "undefined" != typeof f.deleteElements)
                for (e = 0; e < f.deleteElements.length; e += 1) ma(f.deleteElements[e])
        }
    };
    this.InsertHtml = function(a, d, b, f, g) {
        var e = null != f && "undefined" != typeof f;
        if (M(g, e && "undefined" != typeof f.ignoreGroupCheck &&
                1 == f.ignoreGroupCheck || !1) && !B(X, g)) {
            H.push(g);
            e && "undefined" != typeof f.deleteSelectorContent && 1 == f.deleteSelectorContent && la(d);
            g = document.getElementById(d);
            var m;
            g && (m = document.createElement("div"), m.innerHTML = a, g.appendChild(m));
            e && "undefined" != typeof f.makeSelectorVisible && 1 == f.makeSelectorVisible && P(d);
            if (e && "undefined" != typeof f.makeElementsVisible)
                for (a = 0; a < f.makeElementsVisible.length; a += 1) P(f.makeElementsVisible[a]);
            if (e && "undefined" != typeof f.deleteElements)
                for (e = 0; e < f.deleteElements.length; e +=
                    1) ma(f.deleteElements[e]);
            null != b && "undefined" != typeof b && b()
        }
    };
    this.Close = function() {
        D();
        C("NotLandingPage");
        z("OptanonConsent");
        J();
        I();
        L()
    };
    this.AllowAll = function() {
        var a, d = p(),
            e;
        n = [];
        for (e = 0; e < d.Groups.length; e += 1) a = d.Groups[e], v(a) && n.push(q(a) + ":1");
        b("#optanon #optanon-menu li").removeClass("menu-item-off");
        b("#optanon #optanon-menu li").addClass("menu-item-on");
        b("#optanon-show-settings-popup ul li").each(function() {
            b(this).find(".icon").removeClass("menu-item-off").addClass("menu-item-on")
        });
        D();
        C("NotLandingPage");
        z("OptanonConsent");
        J();
        I();
        L()
    };
    this.ToggleInfoDisplay = function() {
        b("#optanon #optanon-popup-bg, #optanon #optanon-popup-wrapper").is(":hidden") ? za() : (D(), z("OptanonConsent"), J(), I(), L())
    };
    this.BlockGoogleAnalytics = function(a, b) {
        window["ga-disable-" + a] = !M(b)
    };
    this.TriggerGoogleAnalyticsEvent = function(a, b, e, f) {
        "undefined" != typeof _gaq && _gaq.push(["_trackEvent", a, b, e, f]);
        "undefined" != typeof ga && ga("send", "event", a, b, e, f);
        "undefined" != typeof dataLayer && dataLayer.constructor ===
            Array && dataLayer.push({
                event: "trackOptanonEvent",
                optanonCategory: a,
                optanonAction: b,
                optanonLabel: e,
                optanonValue: f
            })
    };
    this.IsAlertBoxClosed = this.IsAlertBoxClosedAndValid = function() {
        var a = p(),
            b = E("OptanonAlertBoxClosed"),
            a = a.LastReconsentDate;
        if (null === b) return !1;
        if (!a) return !0;
        (b = new Date(a) > new Date(b)) && Optanon.ReconsentGroups();
        return !b
    };
    this.ReconsentGroups = function() {
        var a = !1,
            b = F(r("OptanonConsent", "groups")),
            e = F(r("OptanonConsent", "groups").replace(/:0/g, "").replace(/:1/g, "")),
            f = p();
        if (r("OptanonConsent",
                "groups")) {
            for (var g = 0; g < f.Groups.length; g += 1) {
                var h = f.Groups[g];
                if (v(h)) {
                    var m = O(e, q(h));
                    if (-1 != m) {
                        var n = u(h).toLowerCase(); - 1 < ["inactive", "inactive landingpage", "do not track"].indexOf(n) && (a = !0, n = "inactive landingpage" === n ? ":1" : ":0", b[m] = q(h) + n)
                    }
                }
            }
            a && z("OptanonConsent", b)
        }
    };
    this.SetAlertBoxClosed = function(a) {
        var b = (new Date).toISOString();
        a ? V("OptanonAlertBoxClosed", b, 365) : V("OptanonAlertBoxClosed", b)
    };
    this.GetDomainData = function() {
        return p()
    }
}).call(Optanon);
Optanon.Init();