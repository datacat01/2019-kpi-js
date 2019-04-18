var g_ppsWindowLoaded = !1,
    g_ppsIsPageCached = !1,
    g_ppsIsPageCachedChecked = !1,
    g_ppsShowCallbacks = {},
    g_ppsClks = {};

function _ppsAddPopUpClick(p, e) {
    g_ppsClks[p] = e
}

function _ppsGetPopUpClick(p) {
    return g_ppsClks[p]
}

function _ppsCheckPopupOnFollowClk(p) {
    var e = p.href,
        s = p.hash,
        o = window.location.href,
        i = window.location.hash;
    s && (s && "" != s && (e = str_replace(e, s, "")), i && "" != i && (o = str_replace(o, i, "")), !1 !== strpos(e, "/", e.length - 1) && (e = e.substr(0, e.length - 1)), !1 !== strpos(o, "/", o.length - 1) && (o = o.substr(0, o.length - 1)), o == e && setTimeout(function() {
        toeReload()
    }, 100))
}

function _ppsBindOnElementClickPopups() {
    var p = jQuery('[href*="#ppsShowPopUp_"]:not(.ppsClickBinded)');
    p && p.length && p.each(function() {
        jQuery(this).click(function() {
            var p = jQuery(this).attr("href");
            if (p && "" != p) {
                if (!(p = (p = p.split("_"))[1] ? parseInt(p[1]) : 0)) return _ppsCheckPopupOnFollowClk(this), !0;
                var e = ppsGetPopupById(p);
                if (e && "link_follow" == e.params.main.show_on) return _ppsCheckPopupOnFollowClk(this), !0;
                _ppsAddPopUpClick(p, this), _ppsPopupBindDelay(p, "show_on_click_on_el_delay", "show_on_click_on_el_enb_delay") || ppsShowPopup(p)
            }
            return !1
        })
    }).addClass("ppsClickBinded");
    var e = jQuery('[title*="#ppsShowPopUp_"]:not(.ppsClickBinded)');
    e && e.length && e.each(function() {
        var p = jQuery(this).attr("title"),
            e = p.match(/#ppsShowPopUp_(\d+)/);
        if (e && 2 == e.length) {
            var s = parseInt(e[1]);
            s && jQuery(this).data("popup-id", s).attr("title", str_replace(p, e[0], "")).click(function() {
                var p = jQuery(this).data("popup-id");
                return _ppsAddPopUpClick(p, this), _ppsPopupBindDelay(p, "show_on_click_on_el_delay", "show_on_click_on_el_enb_delay") || ppsShowPopup(p), !1
            })
        }
    }).addClass("ppsClickBinded")
}

function ppsMovePopupStyles(p) {
    var e = jQuery('<style type="text/css" />'),
        s = jQuery("#ppsPopupStylesHidden_" + p.view_id);
    e.appendTo("body").html(s.html()), s.remove()
}

function ppsBindPopupLove(p) {
    parseInt(toeOptionPps("add_love_link")) && ppsGetPopupShell(p).append(toeOptionPps("love_link_html"))
}

function ppsBindPopupLoad(p) {
    var e = jQuery(".ppsPopupPreloadImg_" + p.view_id);
    (p._imgsCount = e.length, p._imgsCount) ? (p._imgsLoaded = !1, p._imgsLoadedCount = 0, e.bind("load error", function() {
        (p._imgsLoadedCount++, p._imgsLoadedCount >= p._imgsCount) && (p._imgsLoaded = !0, ppsGetPopupShell(p).trigger("ppsShowPopupAfterAllImgs", p))
    })) : toeInArrayPps(p.type, ["iframe", "pdf"]) ? (p._imgsLoaded = !1, (s = ppsGetPopupShell(p)).find(".ppsMainFrame").bind("load error", function() {
        var e = p._imgsLoaded;
        p._imgsLoaded = !0, e || setTimeout(function() {
            s.trigger("ppsShowPopupAfterAllImgs", p)
        }, 1e3)
    })) : p._imgsLoaded = !0;
    var s, o = (s = ppsGetPopupShell(p)).find("img"),
        i = o ? o.length : 0;
    if (i) {
        if (p._imgsCount) {
            var t = !1;
            e.each(function() {
                var p = jQuery(this).attr("src");
                o.each(function() {
                    if (jQuery(this).attr("src") == p) return o = o.filter(this), t = !0, !1
                })
            }), t && (i = o.length)
        }
        i && o.bind("load error", function() {
            --i <= 0 && p.is_visible && _ppsPositionPopup({
                shell: s,
                popup: p,
                recalc: !0
            })
        })
    }
}

function ppsBindPopupShow(p) {
    switch (_ppsCheckBindVideo({
        popup: p
    }), p.params.main.show_on) {
        case "page_load":
            _ppsPopupBindDelay(p, "show_on_page_load_delay", "show_on_page_load_enb_delay") || ("fb_like" == p.type ? p.render_with_fb_load = !0 : ppsCheckShowPopup(p));
            break;
        case "click_on_page":
            jQuery(document).click(function() {
                p.click_on_page_displayed || (ppsCheckShowPopup(p), p.click_on_page_displayed = !0)
            });
            break;
        case "click_on_element":
            break;
        case "scroll_window":
            jQuery(window).scroll(function() {
                if (parseInt(p.params.main.show_on_scroll_window_enb_perc_scroll)) {
                    var e = parseInt(p.params.main.show_on_scroll_window_perc_scroll);
                    if (e) {
                        var s = jQuery(document).height(),
                            o = jQuery(window).height(),
                            i = jQuery(window).scrollTop(),
                            t = s - o;
                        if (t > 0 && 100 * i / t < e) return
                    }
                }
                if (!p.scroll_window_displayed) {
                    var a = 0;
                    p.params.main.show_on_scroll_window_enb_delay && parseInt(p.params.main.show_on_scroll_window_enb_delay) && (p.params.main.show_on_scroll_window_delay = parseInt(p.params.main.show_on_scroll_window_delay), p.params.main.show_on_scroll_window_delay && (a = 1e3 * p.params.main.show_on_scroll_window_delay)), a ? setTimeout(function() {
                        ppsCheckShowPopup(p)
                    }, a) : ppsCheckShowPopup(p), p.scroll_window_displayed = !0
                }
            })
    }
}

function ppsBindPopupClose(p) {
    ppsGetPopupShell(p).find(".ppsPopupClose").click(function() {
        return ppsClosePopup(p), !1
    })
}

function ppsBindPopupSubscribers(p) {
    if (p.params.tpl.enb_subscribe) {
        var e = ppsGetPopupShell(p),
            s = e.find(".ppsSubscribeForm"),
            o = s.find(".ppsPopupClose");
        switch (p.params.tpl.sub_dest) {
            case "aweber":
                break;
            case "wordpress":
            case "mailchimp":
            case "mailpoet":
            default:
                s.submit(function() {
                    var s = jQuery(this).find("input[type=submit]"),
                        o = this,
                        i = jQuery(this).find(".ppsSubMsg");
                    return s.attr("disabled", "disabled"), jQuery(this).sendFormPps({
                        msgElID: i,
                        onSuccess: function(s) {
                            if (jQuery(o).find("input[type=submit]").removeAttr("disabled"), s.error) _ppsPopupAddStat(p, "subscribe_error"), s.data && s.data.emailExistsRedirect && (ppsPopupSubscribeSuccess(p, {
                                ignoreSendStat: !0
                            }), 0 !== s.data.emailExistsRedirect.indexOf("http") && (s.data.emailExistsRedirect = window.location.href + s.data.emailExistsRedirect), toeRedirect(s.data.emailExistsRedirect));
                            else {
                                var t = jQuery(o).parents(".ppsSubscribeShell"),
                                    a = jQuery(o).find(".ppsPopupClose");
                                a && a.length && a.appendTo(t), i.appendTo(t), jQuery(o).animateRemovePps(300, function() {
                                    _ppsPositionPopup({
                                        shell: e,
                                        popup: p,
                                        recalc: !0
                                    })
                                });
                                var n = e.find(".ppsHideAfterSubscribe");
                                n && n.length && n.animateRemovePps(300), ppsPopupSubscribeSuccess(p);
                                var r = !!p.params.sub_redirect_to_btn_url_href && p.params.sub_redirect_to_btn_url_href;
                                !r && s.data && s.data.redirect && (r = s.data.redirect), r && toeRedirect(r, parseInt(p.params.tpl.sub_redirect_new_wnd))
                            }
                        }
                    }), !1
                })
        }
        if (o && o.length && o.keydown(function(p) {
                if (13 == p.keyCode) return s.submit(), !1
            }), navigator.userAgent.indexOf("Safari") > -1 && !(navigator.userAgent.indexOf("Chrome") > -1)) {
            var i = e.get(0).getElementsByTagName("form");
            if (i && i.length)
                for (var t = 0; t < i.length; t++) i[t].noValidate = !0, i[t].addEventListener("submit", function(p) {
                    p.target.checkValidity() || (p.preventDefault(), jQuery(this).find(".ppsSubMsg").addClass("ppsErrorMsg").html("Please fill-in all fields"))
                }, !1)
        }
    }
}

function ppsCheckShowPopup(p, e) {
    isNumericPps(p) && (p = ppsGetPopupById(p));
    var s = "pps_show_" + p.id,
        o = getCookiePps(s),
        i = "count_times" == p.params.main.show_to,
        t = "pps_times_showed_" + p.id,
        a = parseInt(getCookiePps(t));
    if ("first_time_visit" != p.params.main.show_to || !o) {
        if (i && o && "1" != o) {
            var n = new Date(o).getTime(),
                r = (new Date).getTime();
            if (n) {
                var l = (r - n) / 1e3,
                    u = parseInt(p.params.main.count_times_num);
                if (a && u && a >= u) {
                    if ("hour" == p.params.main.count_times_mes && l < 3600 || "day" == p.params.main.count_times_mes && l < 86400 || "week" == p.params.main.count_times_mes && l < 604800 || "month" == p.params.main.count_times_mes && l < 2592e3) return;
                    a >= u && (a = 0)
                }
            }
        }
        if (!o || i) {
            var c = parseInt(p.params.main.show_to_first_time_visit_days);
            (c = isNaN(c) || i ? 30 : c) || (c = null);
            var d = i ? (new Date).toString() : "1";
            setCookiePps("pps_show_" + p.id, d, c), i && setCookiePps(t, a ? a + 1 : 1, 30)
        }
        var _ = _ppsPopupGetActionDone(p);
        if (!("until_make_action" == p.params.main.show_to && _ || _ppsCheckDisplayTime(p) || "until_email_confirm" == p.params.main.show_to && "function" == typeof ppsCheckEmailConfirmed && ppsCheckEmailConfirmed(p))) return (e = e || {}).isUnique = o ? 0 : 1, ppsShowPopup(p, e), !1
    }
}

function _ppsCheckDisplayTime(p) {
    if (isNumericPps(p) && (p = ppsGetPopupById(p)), p.params.main.enb_show_time && p.params.main.show_time_from && p.params.main.show_time_to && p.params.main.show_time_from != p.params.main.show_time_to) {
        var e = function(p) {
                var e = !1 !== strpos(p, "pm") ? 12 : 0,
                    s = parseFloat(str_replace(str_replace(str_replace(p, "am", ""), "pm", ""), ":", "."));
                return -1 === toeInArray(s, [12, 12.3]) ? s += e : e || (s -= 12), s
            },
            s = e(p.params.main.show_time_from),
            o = e(p.params.main.show_time_to),
            i = new Date,
            t = i.getHours() + i.getMinutes() / 100;
        if (t < s || t > o) return !0
    }
    return !1
}

function _ppsPopupGetActionDone(p) {
    isNumericPps(p) && (p = ppsGetPopupById(p));
    var e = "pps_actions_" + p.id,
        s = getCookiePps(e);
    if (s) {
        if ("age_verify" == p.type && s.age_verify && p.params.opts_attrs.btns_number) {
            for (var o = !1, i = 0; i < p.params.opts_attrs.btns_number; i++)
                if (p.params.tpl["is_btn_primary_" + i]) {
                    if (i == s.age_verify) return !0;
                    o = !0
                } if (o) return !1
        }
        return !0
    }
    return !1
}

function _ppsPopupSetActionDone(p, e, s, o) {
    o = o || {}, isNumericPps(p) && (p = ppsGetPopupById(p)), s = null !== s ? s : "";
    var i = "pps_actions_" + p.id,
        t = getCookiePps(i);
    t || (t = {}), t[e] = "age_verify" == e ? s : 1;
    var a = parseInt(p.params.main.show_to_until_make_action_days);
    (a = isNaN(a) ? 30 : a) || (a = null), setCookiePps(i, t, a), o.ignoreSendStat || _ppsPopupAddStat(p, e, s), jQuery(document).trigger("ppsAfterPopupsActionDone", {
        popup: p,
        action: e,
        smType: s
    })
}

function _ppsPopupAddStat(p, e, s, o) {
    p && p.params && p.params.tpl.dsbl_stats || (jQuery.sendFormPps({
        msgElID: "noMessages",
        data: {
            mod: "statistics",
            action: "add",
            id: p.id,
            type: e,
            sm_type: s,
            is_unique: o,
            connect_hash: p.connect_hash
        }
    }), jQuery(document).trigger("ppsAfterPopupsStatAdded", {
        popup: p,
        action: e,
        smType: s,
        is_unique: o
    }))
}

function ppsShowPopUpOnClick(p, e) {
    isNumericPps(p) && (p = ppsGetPopupById(p)), _ppsSaveClickHref(p, jQuery(e)), ppsShowPopup(p)
}

function __ppsDisplayShell(p) {
    p.shell.show(), _ppsTriggerIframeScrollByHash(p), setTimeout(function() {
        navigator.userAgent.indexOf("Safari") > -1 && -1 == navigator.userAgent.indexOf("Chrome") && p.shell.find(".ppsMainFrame").length && (p.shell.css({
            "overflow-y": "auto",
            "-webkit-overflow-scrolling": "touch",
            border: p.shell.find(".ppsMainFrame").css("border"),
            "border-radius": p.shell.find(".ppsMainFrame").css("border-radius")
        }), p.shell.find(".ppsMainFrame").css({
            width: p.shell.width() + "px",
            "max-width": p.shell.width() + "px",
            height: p.shell.height(),
            border: "none",
            "border-radius": "0"
        }), _ppsCloseBtnPositionSafari(p))
    }, 10), p.shell.find(".fb-page iframe:first").length > 0 && setTimeout(function() {
        _ppsPositionPopup(p)
    }, 500)
}

function __ppsHideShell(p) {
    p.shell.hide()
}

function _ppsTriggerIframeScrollByHash(p) {
    var e = p.shell.find(".ppsMainFrame");
    e.length && e.each(function() {
        var p = jQuery(this).attr("src"),
            s = p.split("#");
        s.length && s[1] && setTimeout(function() {
            e.get(0).contentWindow.location.href = p
        }, 200)
    })
}

function _ppsCloseBtnListenersSafari(p) {
    p.shell = ppsGetPopupShell(p.popup), navigator.userAgent.indexOf("Safari") > -1 && -1 == navigator.userAgent.indexOf("Chrome") && p.shell.find(".ppsMainFrame").length && (jQuery(window).on("resize", function() {
        _ppsCloseBtnPositionSafari(p)
    }), jQuery(window).on("orientationchange", function() {
        _ppsCloseBtnPositionSafari(p)
    }), jQuery("#ppsPopupBgOverlay").click(function() {
        if (ppsPopups && ppsPopups.length)
            for (var p = 0; p < ppsPopups.length; p++) ppsPopups[p] && ppsPopups[p].params && ppsPopups[p].params.main && ppsPopups[p].params.main.close_on && "user_close" == ppsPopups[p].params.main.close_on && ppsPopups[p].view_id == popup.view_id && ppsClosePopup(ppsPopups[p])
    }))
}

function _ppsCloseBtnPositionSafari(p) {
    var e = jQuery("#ppsPopupShell_" + p.popup.view_id);
    e.find(".ppsPopupClose").css({
        position: "fixed",
        top: parseInt(e.css("top") + 20) + "px",
        left: parseInt(e.css("left")) + e.width() - e.find(".ppsPopupClose").width() - 10 + "px"
    })
}

function ppsShowPopup(p, e) {
    if (ppsCorrectJqueryUsed()) {
        e = e || {}, isNumericPps(p) && (p = ppsGetPopupById(p));
        var s = ppsGetPopupShell(p);
        if (p._imgsLoaded) {
            if (s.data("view-id", p.view_id), _ppsCheckIsPageCached() && _ppsUpdatePopupNonces(p), _ppsPopupAddStat(p, "show", 0, e.isUnique), e.ignoreBgOverlay || ppsShowBgOverlay(p), g_ppsWindowLoaded && !e.ignorePosition && _ppsPositionPopup({
                    shell: s,
                    popup: p
                }), p.params.tpl.anim && !p.resized_for_wnd ? _ppsHandlePopupAnimationShow(p, s) : __ppsDisplayShell({
                    shell: s,
                    popup: p
                }), toeInArrayPps(p.type, ["iframe"])) {
                var o = s.find(".ppsMainFrame");
                o && o.length && (o.css("width", "auto"), o.css("width", "100%"))
            }
            _ppsCheckPlayVideo({
                popup: p,
                shell: s
            }), _ppsIframesForReload({
                popup: p,
                shell: s
            }), _ppsCheckInnerScripts({
                popup: p,
                shell: s
            }), setTimeout(function() {
                _ppsCheckMap({
                    popup: p,
                    shell: s
                }), _ppsSocialIcons({
                    popup: p,
                    shell: s
                }), _ppsCheckContactForm({
                    popup: p,
                    shell: s
                }), _ppsCheckVideos({
                    popup: p,
                    shell: s
                })
            }, 100), _ppsCheckPublication({
                popup: p,
                shell: s
            }), p.params.tpl.dsbl_wnd_scroll && (disableScrollPps("html"), disableScrollPps("body")), p.is_visible = !0, p.is_rendered = !0, jQuery(document).trigger("ppsAfterPopupsActionShow", p), runShowClb(p, s), toeInArrayPps(p.type, ["iframe"]) && p.params.tpl.iframe_display_only && "" != p.params.tpl.iframe_display_only && "function" == typeof _ppsIFrameDisplayOnly && !p.params.tpl._iframeDisplayOnlyBinded && _ppsIFrameDisplayOnly(p)
        } else s.bind("ppsShowPopupAfterAllImgs", function() {
            ppsShowPopup(p, e)
        })
    } else ppsReloadCoreJs(ppsShowPopup, [p, e])
}

function _ppsCheckVideos(p) {
    if ("video" == p.popup.type && "youtube" == p.popup.params.tpl.video_type && p.popup.params.tpl.video_autoplay) {
        var e = p.shell.find("iframe:first");
        e.attr("src", e.attr("src") + "&autoplay=1")
    }
}

function _ppsHandlePopupAnimationShow(p, e) {
    var s = p.params.tpl.anim.old ? "magictime" : "animated";
    e.animationDuration(p.params.tpl.anim_duration, !0);
    var o = p.params.tpl.anim_close ? p.params.tpl.anim_close.hide_class : p.params.tpl.anim.hide_class;
    e.removeClass(o), e.addClass(s + " " + p.params.tpl.anim.show_class), __ppsDisplayShell({
        shell: e,
        popup: p
    }), setTimeout(function() {
        e.removeClass(s + " " + p.params.tpl.anim.show_class)
    }, parseInt(p.params.tpl.anim_duration))
}

function _ppsHandlePopupAnimationHide(p, e) {
    var s = p.params.tpl.anim.old ? "magictime" : "animated",
        o = p.params.tpl.anim_close ? p.params.tpl.anim_close.hide_class : p.params.tpl.anim.hide_class,
        i = p.params.tpl.anim_close_duration;
    i && i > 0 ? e.animationDuration(i, !0) : i = p.params.tpl.anim_duration, e.removeClass(p.params.tpl.anim.show_class).addClass(o), setTimeout(function() {
        e.removeClass(s), __ppsHideShell({
            shell: e,
            popup: p
        }), ppsHideBgOverlay(p)
    }, i)
}

function _ppsIframesForReload(p) {
    var e = p.popup,
        s = p.shell ? p.shell : ppsGetPopupShell(e);
    s.find("iframe") && s.find("iframe").each(function() {
        var p = jQuery(this).attr("src");
        p && -1 !== p.indexOf("www.google.com/maps/embed") && (this.src = this.src)
    })
}

function _ppsIsIframeForHide(p) {
    if ("video" == (p = p || {}).popup.type) return !0;
    var e = p.shell ? p.shell : ppsGetPopupShell(p.popup),
        s = !!e && e.find("iframe"),
        o = !1;
    if (s && s.length) {
        var i = ["youtube", "vimeo", "dtbaker"];
        s.each(function() {
            var p = jQuery(this).data("original-src"),
                e = jQuery(this).attr("src");
            if (e || p)
                for (var s = 0; s < i.length; s++)
                    if (e && -1 !== e.indexOf(i[s]) || p && -1 !== p.indexOf(i[s])) return o = !0, !1
        })
    }
    return o
}

function _ppsCheckBindVideo(p) {
    if (_ppsIsIframeForHide(p = p || {})) {
        var e = p.shell ? p.shell : ppsGetPopupShell(p.popup),
            s = !!e && e.find("iframe,video");
        s && s.length && s.each(function() {
            jQuery(this).data("original-src", jQuery(this).attr("src")), jQuery(this).attr("src", "")
        })
    }
}

function _ppsCheckPlayVideo(p) {
    if (_ppsIsIframeForHide(p = p || {})) {
        var e = p.shell ? p.shell : ppsGetPopupShell(p.popup),
            s = !!e && e.find("iframe,video");
        s && s.length && s.each(function() {
            var p = jQuery(this).data("original-src"),
                e = jQuery(this).attr("src");
            !p || "" == p || e && "" != e || jQuery(this).attr("src", p)
        })
    }
}

function _ppsCheckStopVideo(p) {
    if (_ppsIsIframeForHide(p = p || {})) {
        var e = p.shell ? p.shell : ppsGetPopupShell(p.popup),
            s = !!e && e.find("iframe,video");
        if (p.popup.params.tpl.video_extra_full_screen) return;
        s && s.length && s.each(function() {
            jQuery(this).attr("src", "")
        })
    }
}

function _ppsCheckInnerScripts(p) {
    var e = ((p = p || {}).shell ? p.shell : ppsGetPopupShell(p.popup)).find("script");
    e && e.length && e.each(function() {
        var p = jQuery(this).attr("src");
        p && "" != p && jQuery.getScript(p)
    })
}

function _ppsCheckMap(p) {
    var e = ((p = p || {}).shell ? p.shell : ppsGetPopupShell(p.popup)).find(".gmp_map_opts");
    if (e && e.length) {
        if ("undefined" == typeof gmpGetMapByViewId) return void setTimeout(function() {
            _ppsCheckMap(p)
        }, 1e3);
        e.each(function() {
            var p = jQuery(this).data("view-id"),
                e = gmpGetMapByViewId(p);
            if (e) e.fullRefresh ? e.fullRefresh() : e.refresh();
            else {
                var s = gmpGetMapInfoByViewId(p);
                gmpInitMapOnPage(s)
            }
        })
    }
}

function _ppsCheckContactForm(p) {
    var e = (p = p || {}).shell ? p.shell : ppsGetPopupShell(p.popup),
        s = e.find(".cfsFormShell");
    if (s && s.length) {
        if ("undefined" == typeof g_cfsForms) return void setTimeout(function() {
            _ppsCheckContactForm(p)
        }, 1e3);
        "undefined" != typeof cfsCheckInitForms && cfsCheckInitForms(e), s.each(function() {
            var p = jQuery(this).attr("id"),
                e = g_cfsForms.getByViewHtmlId(p);
            e ? e.refresh() : g_cfsForms.add(g_cfsForms.getFormDataByViewHtmlId(p))
        })
    }
}

function _ppsSocialIcons(p) {
    var e = ((p = p || {}).shell ? p.shell : ppsGetPopupShell(p.popup)).find(".supsystic-social-sharing:not(.supsystic-social-sharing-loaded)");
    e && e.length && void 0 !== window.initSupsysticSocialSharing && e.each(function() {
        window.initSupsysticSocialSharing(this)
    })
}

function _ppsCheckPublication(p) {
    var e = ((p = p || {}).shell ? p.shell : ppsGetPopupShell(p.popup)).find(".dpsBookStageShell");
    e && e.length && e.each(function() {
        "undefined" == typeof dpsBookMng && (dpsBookMng = new dpsBookManager);
        var p = jQuery(this).find(".dpsBook").data("bookid"),
            e = dpsBookMng.getById(p);
        e ? (e.getHtml().turn("destroy"), e.getStage().parent().html(e._baseHtml), e._init(!0)) : (dpsInitBookOnPage(dpsBookInfoByTermId(p)), dpsBindBookActions(p))
    })
}

function _ppsPositionPopup(p) {
    (p = p || {}).popup = p.popup && "object" != typeof p.popup ? ppsGetPopupById(p.popup) : p.popup;
    var e = p.shell ? p.shell : ppsGetPopupShell(p.popup);
    if (e) {
        var s, o, i = 10;
        "absolute" == (o = e.find(".ppsPopupClose")).css("position") && (i = +i - parseFloat(o.css("right"))), s = i / 2;
        var t = p.wndWidth ? p.wndWidth : jQuery(window).width(),
            a = p.wndHeight ? p.wndHeight : jQuery(window).height(),
            n = e.outerWidth(!0),
            r = e.outerHeight(),
            l = !1,
            u = !1,
            c = !1,
            d = t - i,
            _ = a - 10,
            h = 1,
            m = e.hasClass("ppsResponsiveInside"),
            f = !1;
        if (r >= _ && !m && (!p.popup || !p.popup._notResizeHeight)) {
            var g = !p.recalc && parseInt(e.data("init-height"));
            g || (g = r, e.data("init-height", g)), h = _ / g, l = c = !0
        }
        if (n >= d && !m) {
            (b = !p.recalc && parseInt(e.data("init-width"))) || (b = n, e.data("init-width", b));
            var P = d / b;
            P < h && (h = P), l = u = !0
        }
        if (l) {
            if ("width_only" == p.popup.params.tpl.responsive_mode) {
                if (u) {
                    var y = n - e.width();
                    f = n >= t, e.css({
                        width: "calc(100% - " + (y + 20) + "px)"
                    })
                } else {
                    (b = parseInt(e.data("init-width"))) && b < d && e.css({
                        width: b
                    })
                }
                c ? e.css({
                    position: "absolute"
                }) : e.css({
                    position: "fixed"
                })
            } else {
                var w = {
                    left: "center",
                    top: "center"
                };
                e.ppsZoom(h, w.left + " " + w.top)
            }
            e.data("resized", 1), n = e.outerWidth(), r = e.outerHeight()
        } else if (e.data("resized")) {
            var b;
            if ("width_only" == p.popup.params.tpl.responsive_mode)(b = parseInt(e.data("init-width"))) && b < d && e.css({
                width: b
            }), e.css({
                position: "fixed"
            })
        }
        if (p.popup.resized_for_wnd = l, jQuery(document).trigger("ppsResize", {
                popup: p.popup,
                shell: e,
                wndWidth: t,
                wndHeight: a,
                isResponsedByWidthOnly: f
            }), !e.positioned_outside) {
            var v = (t - n) / 2,
                k = (a - r) / 2;
            v = v < 0 ? 0 : v, k = k < 0 ? 0 : k, u && (v -= (b - b * P) / 2 - s), c && "width_only" != p.popup.params.tpl.responsive_mode && (k -= (g - g * h) / 2), e.css({
                left: v,
                top: k
            }), f && (e.css({
                transform: "translate(-50%, 0)",
                left: "0"
            }), setTimeout(function() {
                e.css({
                    left: "50%"
                })
            }, p.popup.params.tpl.anim_duration - 20))
        }
    } else console.log("CAN NOT FIND POPUP SHELL TO RESIZE!")
}

function ppsClosePopup(p) {
    isNumericPps(p) && (p = ppsGetPopupById(p));
    var e = ppsGetPopupShell(p);
    p.params.tpl.anim ? _ppsHandlePopupAnimationHide(p, e) : (__ppsHideShell({
        shell: e,
        popup: p
    }), ppsHideBgOverlay(p)), _ppsCheckStopVideo({
        shell: e,
        popup: p
    }), p.params.tpl.dsbl_wnd_scroll && (enableScrollPps("html"), enableScrollPps("body")), parseInt(p.params.tpl.close_redirect_to_btn_url) && p.params.close_redirect_to_btn_url_href ? toeRedirect(p.params.close_redirect_to_btn_url_href, parseInt(p.params.tpl.reidrect_on_close_new_wnd)) : p.params.tpl.reidrect_on_close && "" != p.params.tpl.reidrect_on_close && toeRedirect(p.params.tpl.reidrect_on_close, parseInt(p.params.tpl.reidrect_on_close_new_wnd)), _ppsPopupAddStat(p, "close"), p.is_visible = !1
}

function ppsGetPopupShell(p) {
    return isNumericPps(p) && (p = ppsGetPopupById(p)), jQuery("#ppsPopupShell_" + p.view_id)
}

function ppsGetPopupById(p) {
    for (var e = 0; e < ppsPopups.length; e++)
        if (ppsPopups[e].id == p) return ppsPopups[e];
    return !1
}

function ppsGetPopupByViewId(p) {
    for (var e = 0; e < ppsPopups.length; e++)
        if (ppsPopups[e].view_id == p) return ppsPopups[e];
    return !1
}

function ppsInitBgOverlay() {
    jQuery("body").append('<div id="ppsPopupBgOverlay" />'), jQuery("#ppsPopupBgOverlay").click(function() {
        if (ppsPopups && ppsPopups.length)
            for (var p = 0; p < ppsPopups.length; p++) ppsPopups[p] && ppsPopups[p].params && ppsPopups[p].params.main && ppsPopups[p].params.main.close_on && "overlay_click" == ppsPopups[p].params.main.close_on && ppsClosePopup(ppsPopups[p])
    })
}

function ppsShowBgOverlay(p) {
    if (p && isNumericPps(p) && (p = ppsGetPopupById(p)), !p.ignore_background) {
        var e = jQuery("#ppsPopupBgOverlay");
        if (e.css({
                "background-position": "",
                "background-repeat": "",
                "background-attachment": "",
                "-webkit-background-size": "",
                "-moz-background-size": "",
                "-o-background-size": "",
                "background-size": "",
                "background-color": "",
                "background-url": ""
            }).removeClass("ppsSnow"), p && p.params) {
            if (void 0 !== p.params.tpl.bg_overlay_opacity) {
                p.params.tpl.bg_overlay_opacity && "" != p.params.tpl.bg_overlay_opacity || (p.params.tpl.bg_overlay_opacity = 0);
                var s = parseFloat(p.params.tpl.bg_overlay_opacity);
                isNaN(s) || e.css({
                    opacity: s
                })
            }
            if (void 0 !== p.params.tpl.bg_overlay_type) switch (p.params.tpl.bg_overlay_type) {
                case "color":
                    e.css({
                        "background-color": p.params.tpl.bg_overlay_color
                    });
                    break;
                case "img":
                    if (p.params.tpl.bg_overlay_img) {
                        switch (p.params.tpl.bg_overlay_img_pos) {
                            case "stretch":
                                e.css({
                                    "background-position": "center center",
                                    "background-repeat": "no-repeat",
                                    "background-attachment": "fixed",
                                    "-webkit-background-size": "cover",
                                    "-moz-background-size": "cover",
                                    "-o-background-size": "cover",
                                    "background-size": "cover"
                                });
                                break;
                            case "center":
                                e.css({
                                    "background-position": "center center",
                                    "background-repeat": "no-repeat",
                                    "background-attachment": "scroll",
                                    "-webkit-background-size": "auto",
                                    "-moz-background-size": "auto",
                                    "-o-background-size": "auto",
                                    "background-size": "auto"
                                });
                                break;
                            case "tile":
                                e.css({
                                    "background-position": "left top",
                                    "background-repeat": "repeat",
                                    "background-attachment": "scroll",
                                    "-webkit-background-size": "auto",
                                    "-moz-background-size": "auto",
                                    "-o-background-size": "auto",
                                    "background-size": "auto"
                                })
                        }
                        e.css({
                            "background-image": 'url("' + p.params.tpl.bg_overlay_img + '")'
                        })
                    }
                    break;
                case "snow":
                    e.addClass("ppsSnow")
            }
        }
        e.show()
    }
}

function ppsHideBgOverlay(p) {
    p && isNumericPps(p) && (p = ppsGetPopupById(p)), p.ignore_background || jQuery("#ppsPopupBgOverlay").hide()
}

function ppsBindPopupActions(p) {
    var e = ppsGetPopupShell(p);
    if (e.find(".ppsSubscribeForm_aweber").length && e.find(".ppsSubscribeForm_aweber").submit(function() {
            jQuery(this).find("input[name=email]").val() && ppsPopupSubscribeSuccess(p)
        }), e.find(".ppsSmLink").length && e.find(".ppsSmLink").click(function() {
            _ppsPopupSetActionDone(p, "share", jQuery(this).data("type"))
        }), e.find(".supsystic-social-sharing").length && e.find(".supsystic-social-sharing a").click(function() {
            var e = this.hostname,
                s = "";
            if (e && "" != e) {
                switch (e) {
                    case "www.facebook.com":
                        s = "facebook";
                        break;
                    case "plus.google.com":
                        s = "googleplus";
                        break;
                    case "twitter.com":
                        s = "twitter";
                        break;
                    default:
                        s = e
                }
                _ppsPopupSetActionDone(p, "share", s)
            }
        }), e.find(".fb_iframe_widget").length && _ppsBindFbLikeBtnAction(p), "age_verify" == p.type) {
        var s = e.find(".ppsBtn");
        s && s.length && s.click(function() {
            var e = jQuery(this).attr("class").split(" "),
                s = 0;
            if (e && e.length)
                for (var o = 0; o < e.length; o++)
                    if (0 === e[o].indexOf("ppsBtn_")) {
                        s = parseInt(e[o].split("_")[1]);
                        break
                    } _ppsPopupSetActionDone(p, "age_verify", s)
        })
    }
}

function _ppsBindFbLikeBtnAction(p) {
    "undefined" != typeof FB ? (FB.Event.subscribe("edge.create", function(e) {
        _ppsPopupSetActionDone(p, "fb_like")
    }), FB.Event.subscribe("xfbml.render", function(e) {
        setTimeout(function() {
            setTimeout(function() {
                _ppsPositionPopup({
                    popup: p
                })
            }, 1e3), p.render_with_fb_load ? (ppsCheckShowPopup(p), _ppsPositionPopup({
                popup: p
            })) : _ppsPositionPopup({
                popup: p
            })
        }, 1e3)
    })) : setTimeout(function() {
        _ppsBindFbLikeBtnAction(p)
    }, 500)
}

function ppsPopupSubscribeSuccess(p, e) {
    p && isNumericPps(p) && (p = ppsGetPopupById(p)), _ppsPopupSetActionDone(p, "subscribe", !1, e)
}

function _ppsPopupBindDelay(p, e, s) {
    p && isNumericPps(p) && (p = ppsGetPopupById(p));
    var o = p.params.main[s] && parseInt(p.params.main[s]) && parseInt(p.params.main[e]) ? 1e3 * parseInt(p.params.main[e]) : 0;
    if (o) {
        if ("show_on_page_load_delay" == e && parseInt(p.params.main.enb_page_load_global_delay)) {
            p.start_time = (new Date).getTime(), _ppsPopupBindUnloadDelay(e, p);
            var i = parseInt(getCookiePps("pps_un_" + e + "_" + p.id));
            i && i > 0 && (o -= i) < 0 && (o = 0)
        }
        return setTimeout(function() {
            ppsCheckShowPopup(p)
        }, o), !0
    }
    return !1
}

function _ppsPopupBindUnloadDelay(p, e) {
    jQuery(window).unload(function() {
        var s = e.is_rendered ? 0 : (new Date).getTime() - e.start_time;
        setCookiePps("pps_un_" + p + "_" + e.id, s)
    })
}

function ppsBindPopupForceShow(p) {
    if ("link_follow" != p.params.main.show_on) {
        var e = toeGetHashParams();
        e && e.length && -1 !== toeInArray("ppsShowPopUp_" + p.id, e) && ppsCheckShowPopup(p)
    }
}

function ppsCheckPopupGetNotices(p) {
    var e = {
        errors: getDataLcs("ppsErrors"),
        messages: getDataLcs("ppsMsgs")
    };
    if (e.errors && (e.error = !0), e.errors || e.messages) {
        var s = ppsGetPopupShell(p);
        toeProcessAjaxResponsePps(e, s.find(".ppsSubMsg"))
    }
}

function _ppsCheckIsPageCached() {
    return g_ppsIsPageCachedChecked ? g_ppsIsPageCached : (jQuery("*:not(iframe,video,object)").contents().filter(function() {
        return 8 == this.nodeType
    }).each(function(p, e) {
        if (e.nodeValue && (-1 !== e.nodeValue.indexOf("Performance optimized by W3 Total Cache") || -1 !== e.nodeValue.indexOf("Cached page generated by WP-Super-Cache"))) return g_ppsIsPageCached = !0, !1
    }), g_ppsIsPageCachedChecked = !0, g_ppsIsPageCached)
}

function _ppsUpdatePopupNonces(p) {
    if (!p._nonces_updated) {
        var e = ppsGetPopupShell(p).find("form"),
            s = [],
            o = ["ppsSubscribeForm", "ppsLoginForm", "ppsRegForm"];
        e && e.length && e.each(function() {
            for (var p = 0; p < o.length; p++) jQuery(this).hasClass(o[p]) && s.push(o[p])
        }), s && s.length && jQuery.sendFormPps({
            msgElID: "noMessages",
            data: {
                mod: "popup",
                action: "updateNonce",
                id: p.id,
                get_for: s
            },
            onSuccess: function(e) {
                if (!e.error && e.data.update_for) {
                    var s = ppsGetPopupShell(p);
                    for (var o in e.data.update_for) s.find("." + o).find('input[name="_wpnonce"]').val(e.data.update_for[o])
                }
            }
        }), p._nonces_updated = !0
    }
}

function _ppsBindClickHrefSaving() {
    for (var p = 0; p < ppsPopups.length; p++)
        if (ppsPopups[p].params && ppsPopups[p].params.tpl && (parseInt(ppsPopups[p].params.tpl.sub_redirect_to_btn_url) || parseInt(ppsPopups[p].params.tpl.close_redirect_to_btn_url))) {
            var e = jQuery('[onclick*="ppsShowPopup(' + ppsPopups[p].id + ')"]');
            ppsPopups[p] = _ppsSaveClickHref(ppsPopups[p], e)
        }
}

function _ppsSaveClickHref(p, e) {
    if (p.params && p.params.tpl && e && e.length) {
        var s = e.attr("href");
        parseInt(p.params.tpl.sub_redirect_to_btn_url) && (p.params.sub_redirect_to_btn_url_href = s), parseInt(p.params.tpl.close_redirect_to_btn_url) && (p.params.close_redirect_to_btn_url_href = s)
    }
    return p
}

function ppsAddShowClb(p, e) {
    g_ppsShowCallbacks[p] || (g_ppsShowCallbacks[p] = []), g_ppsShowCallbacks[p].push(e)
}

function runShowClb(p, e) {
    if (p && isNumericPps(p) && (p = ppsGetPopupById(p)), g_ppsShowCallbacks[p.id] && g_ppsShowCallbacks[p.id].length)
        for (var s = 0; s < g_ppsShowCallbacks[p.id].length; s++) "function" == typeof g_ppsShowCallbacks[p.id][s] && g_ppsShowCallbacks[p.id][s](p, e)
}
jQuery(document).ready(function() {
    if ("undefined" != typeof ppsPopupsFromFooter && ppsPopupsFromFooter && ppsPopupsFromFooter.length && (ppsPopups = "undefined" == typeof ppsPopups ? [] : ppsPopups, ppsPopups = ppsPopups.concat(ppsPopupsFromFooter)), jQuery(document).trigger("ppsBeforePopupsStartInit", ppsPopups), "undefined" != typeof ppsPopups && ppsPopups && ppsPopups.length) {
        ppsInitBgOverlay(), jQuery(document).trigger("ppsBeforePopupsInit", ppsPopups);
        for (var p = 0; p < ppsPopups.length; p++) jQuery("body").append(ppsPopups[p].rendered_html), ppsMovePopupStyles(ppsPopups[p]), ppsBindPopupLove(ppsPopups[p]), ppsBindPopupLoad(ppsPopups[p]), ppsBindPopupShow(ppsPopups[p]), ppsBindPopupActions(ppsPopups[p]), ppsBindPopupClose(ppsPopups[p]), ppsBindPopupSubscribers(ppsPopups[p]), ppsBindPopupForceShow(ppsPopups[p]), ppsCheckPopupGetNotices(ppsPopups[p]);
        _ppsBindOnElementClickPopups(), _ppsBindClickHrefSaving(), setTimeout(_ppsBindOnElementClickPopups, 300), jQuery(document).trigger("ppsAfterPopupsInit", ppsPopups), jQuery(window).resize(function() {
            for (var p = 0; p < ppsPopups.length; p++) ppsPopups[p].is_visible && (_ppsPositionPopup({
                popup: ppsPopups[p]
            }), _ppsCloseBtnListenersSafari({
                popup: ppsPopups[p]
            }))
        }), setTimeout(function() {
            g_ppsWindowLoaded = !0
        }, 5e3)
    }
}), jQuery(window).load(function() {
    g_ppsWindowLoaded = !0;
    for (var p = 0; p < ppsPopups.length; p++) ppsPopups[p].is_visible && _ppsPositionPopup({
        popup: ppsPopups[p]
    })
});