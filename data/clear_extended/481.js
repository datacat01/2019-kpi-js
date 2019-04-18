/*
 *  (c) 2000-2019 deviantART, Inc. All rights reserved.
 */
DWait.ready(["jms/lib/station.js", "jms/lib/jquery/jquery.current.js"], function() {
    window.FilmBox = {
        hover: function(t) {
            var i = $(t),
                o = i.width(),
                n = i.find("b.film");
            Station.stopAnimation(n[0]);
            for (var r = parseInt(Station.read(n[0], "left")) || 0, a = [n[0], "left", {
                    from: r,
                    to: r,
                    time: 500
                }]; r > -(5 * o);) a = a.concat([{
                from: r,
                to: r = r - o - r % o,
                time: 300,
                f: Interpolators.pulse
            }, {
                from: r,
                to: r,
                time: 700
            }]);
            Station.run.apply(Station, a)
        },
        out: function(t) {
            $filmstrip = $(t).find("b.film"), Station.stopAnimation($filmstrip[0]), Station.run($filmstrip[0], "display", {
                to: "block",
                time: 25
            }, "left", {
                from: parseInt(Station.read($filmstrip[0], "left") || 0),
                to: 0,
                f: Interpolators.pulse,
                time: 600
            })
        }
    }, window.DWait && DWait.run("jms/lib/filmbox.js")
});
DWait.ready([".domready", "jms/pages/quicktip.js", "jms/lib/jquery/jquery.current.js", "jms/legacy/modals.js", "jms/lib/difi.js"], function() {
    (function(o) {
        o(document).on("mouseover", "span.user-symbol", function() {
            if (o(this).data("show-tooltip")) {
                var s = !0;
                o(this).on("mouseleave", function() {
                    s = !1
                });
                var i = this;
                setTimeout(function() {
                    s && QuickTip.show(i, "symbol")
                }, 500)
            }
        }).on("click", "span.user-symbol:not(.nolink)", function(s) {
            if (o(this).data("show-tooltip")) {
                s.preventDefault();
                var i = o(this);
                i.closest(".symbols-modal").length || (i.data("clickthrough") ? window.location.href = i.data("clickthrough") : (DiFi.pushPublicGet("User", "getSymbolsModal", [], function(s, i) {
                    if (s) {
                        var t = o('<div class="symbols-modal">');
                        t.html(i.response.content.html);
                        var a = Modals.factory(t);
                        Modals.push(a), PubSub.publish("DaGaUa.track_event", "UsernameSymbolModal", "received_new_icon_modal")
                    }
                }), DiFi.send()))
            }
        })
    })(jQuery), window.DWait && DWait.run("jms/lib/deviantsymbols.js")
});
DWait.init("Friends", function(n) {
    var i = $.throttle(500, function(n) {
        Friends.open(n)
    });
    $(n).on("click.friends-menu", function(n) {
        n.preventDefault(), i(this)
    })
}), window.DWait && DWait.run("jms/pages/friendsmenu.js");
DWait.ready(["jms/lib/analytics.js", "jms/lib/jquery/jquery.current.js", "jms/lib/jquery/plugins/jquery.throttle-debounce.js", "jms/lib/gmi.js", "jms/lib/ddt.js", "jms/lib/popup2.js", "jms/lib/gwebpage.js", "jms/lib/cbc.js", "jms/lib/glbl.js", "jms/lib/pubsub.js"], function() {
    (function(e) {
        var i = {
            _has_next: !1,
            _has_prev: !1,
            _has_mobile_ad: !0,
            _textad_suppressed: !1,
            _current_item_id: null,
            _reload_anchor: null,
            _had_mobile_class: !1,
            _$paddles_node: null,
            _pre_takeover_ga_dimensions: null,
            _print_tabs_def: null,
            constructor: function() {
                PubSub.subscribe([{
                    eventname: "MinibrowseView.take_over_page",
                    subscriber: this,
                    callback: this.da__handlers.take_over_page
                }, {
                    eventname: "MinibrowseView.restore_page",
                    subscriber: this,
                    callback: this.da__handlers.restore_page
                }, {
                    eventname: "MinibrowseView.populate_main",
                    subscriber: this,
                    callback: this.da__handlers.populate_main
                }, {
                    eventname: "MinibrowseView.populate_extra",
                    subscriber: this,
                    callback: this.da__handlers.populate_extra
                }, {
                    eventname: "MinibrowseView.preload_main",
                    subscriber: this,
                    callback: this.da__handlers.preload_main
                }, {
                    eventname: "MinibrowseView.preload_extra",
                    subscriber: this,
                    callback: this.da__handlers.preload_extra
                }, {
                    eventname: "MinibrowseView.populate_failed",
                    subscriber: this,
                    callback: this.da__handlers.populate_failed
                }, {
                    eventname: "MinibrowseView.init_extras",
                    subscriber: this,
                    callback: this.da__handlers.init_extras
                }, {
                    eventname: "Duperbrowse.has_next",
                    subscriber: this,
                    callback: this.da__handlers.has_next
                }, {
                    eventname: "Duperbrowse.has_prev",
                    subscriber: this,
                    callback: this.da__handlers.has_prev
                }, {
                    eventname: "Duperbrowse.opened",
                    subscriber: this,
                    callback: this.da__handlers.opened
                }, {
                    eventname: "Duperbrowse.pageload_failed",
                    subscriber: this,
                    callback: this.da__handlers.pageload_failed
                }, {
                    eventname: "Duperbrowse.disable_paddle",
                    subscriber: this,
                    callback: this.da__handlers.disable_paddle
                }, {
                    eventname: "ProductTabsLoader.loaded",
                    subscriber: this,
                    callback: this.da__handlers.print_tabs_loaded
                }])
            },
            da__handlers: {
                populate_main: function() {
                    var e = ["Dynamic.Deviation"];
                    try {
                        var i = (deviantART.pageData.catpath || "").split("/").slice(0, 2).map(function(e) {
                            return e.charAt(0).toUpperCase() + e.toLowerCase().slice(1)
                        });
                        i.length && (i.unshift("Categories"), e.push(i.join(".")))
                    } catch (t) {
                        this.debugging && console.log("[QUANTCAST CATEGORIES ERROR]", t)
                    }
                    PubSub.publish("PageViewTracker.pageview", {
                        page: "/vpv" + Glbl("Location.path"),
                        tag: e
                    }), deviantART.adblock === !0 && PubSub.publish("DaPx.send_event", {
                        event: "adblock_enabled",
                        loggedin: deviantART.deviant.loggedIn
                    }), window.DDD && (DDD.subject = null);
                    var a = this._get_container();
                    a.find("iframe.madefire-player").length && a.addClass("madefire"), a.find(":gmi(DeviationPageView)").removeClass("duper-loading")
                },
                populate_extra: function(i, t) {
                    var a, s = this._get_container(),
                        n = this._get_about(),
                        o = this._get_meta(),
                        r = [];
                    if (t.edit === !0) DWait.ready(["jms/pages/ile/ile.js"], e.proxy(function() {
                        n.html(t.content.html_col1), o.html(t.content.html_col2), s.prepend(n.find("#ile-container")), PubSub.publish("InlineEditor.open"), s.show(), this._init_deviation_extras(t, n, o)
                    }, this));
                    else {
                        var d = e.Deferred();
                        r.push(d), a = new CBC(function() {
                            d.resolve()
                        }), r.length && (n.hide(), o.hide(), e.when.apply(e, r).done(function() {
                            n.show(), o.show(), PubSub.publish("DeviationExtras.shown")
                        })), n.html(t.content.html_col1), o.html(t.content.html_col2), this._init_deviation_extras(t, n, o)
                    }
                    if (t.content) {
                        var l = this._get_deviation();
                        if (0 == l.find(".dev-challenge-box").length && t.content.challenge_data_html) {
                            var _ = l.find('img[class*="dev-content-"]');
                            _.addClass("has-challenge"), _.last().after(t.content.challenge_data_html), l.find(".dev-challenge-box").css({
                                width: _.filter(":visible").css("width"),
                                visibility: "visible"
                            })
                        }
                        gWebPage.update(t.content, a), a && a.start()
                    }
                    t.content.ga && t.content.pageData.artist_analytics_id && PubSub.publish("DaGa.track_third_party_pageview", {
                        analytics_id: t.content.pageData.artist_analytics_id,
                        url: t.content.pageData.deviation_urlpath
                    })
                },
                take_over_page: function() {
                    if (e("body").addClass("minibrowse-active"), this._get_container().css("min-height", e(window).height()), this._pre_takeover_ga_dimensions = this._get_pagedata_key("ga_hit"), Glbl("Site.is_mobile") && !this.initial_takeover_done) {
                        var i = e("body");
                        i.hasClass("mobile-devpage") ? this._had_mobile_class = !0 : i.addClass("mobile-devpage mobile-devpage-uplift"), this.initial_takeover_done = !0
                    }
                    e("#depths").appendTo("body"), e("#depths").show(), PubSub.publish("DeviationAds.minibrowse_init"), Popup2.hideAll(), this._take_over_overhead_box(), this._add_loading_text()
                },
                restore_page: function() {
                    e("body").removeClass("minibrowse-active"), this._set_pagedata_key("ga_hit", this._pre_takeover_ga_dimensions), this._restore_overhead_box(), Glbl("Site.is_mobile") && (this._had_mobile_class || e("body").removeClass("mobile-devpage mobile-devpage-uplift"), this.initial_takeover_done = !1), this._current_item_id = null, e("#ile-container").empty(), Glbl("InlineEditor.loaded", !1)
                },
                has_next: function(e, i) {
                    this._has_next = Boolean(i)
                },
                has_prev: function(e, i) {
                    this._has_prev = Boolean(i)
                },
                opened: function(e, i) {
                    this.debugging && console.log("[MinibrowseView] Duperbrowse has been opened"), this._current_item_id = i.id
                },
                preload_main: function(i, t) {
                    var a = t.content;
                    if (e.isPlainObject(a)) switch (a.pageData.deviation_preload_type) {
                        case "image":
                            var s = e(":gmi(ResViewSizer_img)", a.html).first();
                            this._preload_image(s.attr("src"));
                            break;
                        case "embed":
                            this._preload_image(a.pageData.deviation_preload_file);
                            break;
                        case "html":
                            this._preload_html(a.html);
                            break;
                        case "none":
                            break;
                        default:
                            this.debugging && console.log("[MinibrowseView] unknown preload type:", a.pageData.deviation_preload_type)
                    }
                },
                preload_extra: function(i, t) {
                    var a = t.content,
                        s = e("img.avatar", a.html_col1).first();
                    this._preload_image(s.attr("src"))
                },
                populate_failed: function(i, t) {
                    ddt.trace("minibrowse", "populate failed", t);
                    var a = '<div><h1 style="color:#607066;text-align:center;padding-top:4em;">An error occurred while displaying this deviation</h1><p style="text-align:center;">Please visit <a href="' + Glbl("Location.path") + '">the deviation page</a> to try again.</p>' + "</div>";
                    e(".dev-page-container.minibrowse-container").html(a)
                },
                pageload_failed: function() {
                    var i = '<div><h1 style="color:#607066;text-align:center;padding-top:4em;">An error occurred while loading the next set of deviations</h1><p style="text-align:center;">Please try again.</p></div>';
                    e(".dev-page-container.minibrowse-container").html(i)
                },
                disable_paddle: function(i, t) {
                    var a = t === !0 ? ".minibrowse_prev" : ".minibrowse_next";
                    e(a, this._$paddles_node).addClass("disabled")
                },
                init_extras: function(e, i) {
                    this._init_deviation_extras(i, this._get_about(), this._get_meta())
                },
                print_tabs_loaded: function() {
                    this._print_tabs_def && this._print_tabs_def.resolve()
                }
            },
            _preload_html: function(i) {
                if (i) {
                    this.debugging && console.log("[MinibrowseView] preloading HTML");
                    var t = this._make_preloader(e("<iframe><html><body></body></html></iframe>")).find("body").html(i).each(function() {
                        e(this).find("embed, object").remove()
                    }).end().appendTo("body");
                    return t
                }
            },
            _preload_image: function(i) {
                if (i) {
                    this.debugging && console.log("[MinibrowseView] preloading image", i);
                    var t = this._make_preloader(e("<img>")).attr("src", i).appendTo("body");
                    return t
                }
            },
            _make_preloader: function(i) {
                return i.css({
                    position: "absolute",
                    top: -100,
                    left: -100,
                    width: 1,
                    height: 1,
                    overflow: "hidden",
                    visibility: "hidden"
                }).load(function() {
                    e(this).remove()
                })
            },
            _take_over_overhead_box: function() {
                Glbl("Site.is_mobile") ? this._create_mobile_paddles() : vms_feature("header_uplift") ? this._create_uplifted_paddles() : this._create_paddles(), this._$paddles_node.data("minibrowse_paddles_bound") || this._$paddles_node.data("minibrowse_paddles_bound", !0).on("click.minibrowse", ".minibrowse_prev", function() {
                    return e(this).hasClass("disabled") || PubSub.publish("Minibrowse.prev_click", {
                        event_type: "click"
                    }), !1
                }).on("click.minibrowse", ".minibrowse_next", function() {
                    return e(this).hasClass("disabled") || PubSub.publish("Minibrowse.next_click", {
                        event_type: "click"
                    }), !1
                }).on("click.minibrowse", ".minibrowse_close", function() {
                    return PubSub.publish("Minibrowse.close_click", {
                        event_type: "click"
                    }), !1
                });
                var i = e(document.body);
                if (!i.data("minibrowse_keys_bound")) {
                    var t = this;
                    i.data("minibrowse_keys_bound", !0).on("keydown.minibrowse", function(e) {
                        t._get_eventname_from_keypress(e) && e.preventDefault()
                    }).on("keyup.minibrowse", function(e) {
                        var i = t._get_eventname_from_keypress(e);
                        i && (Popup2.hideAll(), PubSub.publish(i, {
                            event_type: "keypress"
                        }))
                    })
                }
                Glbl("Site.is_mobile") && (i.data("minibrowse_swipes_bound") || this.swipes._initSwipes(this), this.swipes._reset_preview())
            },
            _create_uplifted_paddles: function() {
                var i = "",
                    t = this._has_prev ? "" : " button-disabled",
                    a = this._has_next ? "" : " button-disabled";
                i += '<div class="button minibrowse_prev ' + t + '"><i class="icon-arrow-down"></i>PREV</div>', i += '<div class="button minibrowse_close">ALL</div>', i += '<div class="button minibrowse_next ' + a + '">NEXT<i class="icon-arrow-down"></i></div>';
                var s = e("#head-container .duperbrowse");
                s.html(i), this._$paddles_node = s
            },
            _create_paddles: function() {
                var e = "",
                    i = this._has_prev ? "" : " disabled",
                    t = this._has_next ? "" : " disabled";
                e += '<td class=f><a href="javascript:void(0)" class="gmbutton2 gmhuge gmbutton2top ntfirst minibrowse_prev' + i + '"><img src="//st.deviantart.net/minish/main/superbrowse/3dleft.png" alt="Left" width=8 height=9> Prev</a></td>', e += '<td class=f><a href="javascript:void(0)" class="gmbutton2 gmhuge gmbutton2top ntmid minibrowse_close">&nbsp;<img src="//st.deviantart.net/minish/main/superbrowse/3dback.png" alt="All" width=9 height=9> All&nbsp;</a></td>', e += '<td class=f><a href="javascript:void(0)" class="gmbutton2 gmhuge gmbutton2top ntlast minibrowse_next' + t + '">Next <img src="//st.deviantart.net/minish/main/superbrowse/3dright.png" alt="Right" width=8 height=9></a></td>', window.da_overhead_box.setHTML(e), this._$paddles_node = window.da_overhead_box.$node
            },
            _create_mobile_paddles: function() {
                var i = this._has_prev ? "" : " disabled",
                    t = this._has_next ? "" : " disabled",
                    a = e(".minibrowse-mobile-paddles-container"),
                    s = e('<div style="display:none" class="minibrowse-remove-message" data-sigil="minibrowse-remove-message" name="gmi-ResourceViewMessageButton" id="gmi-ResourceViewMessageButton" data-gmiclass="ResourceViewMessageButton"></div>');
                a.length || (a = e('<div class="minibrowse-mobile-paddles-container"></div>').insertAfter(window.da_overhead_box.$node)), a.empty(), this._$paddles_node = e('<div class="minibrowse-mobile-paddles"></div>').appendTo(a), this._$paddles_node.append('<a href="javascript:void(0)" class="minibrowse-paddle minibrowse_prev' + i + '"><span class="icon-arrow-down"></span> Prev</a>'), this._$paddles_node.append('<a href="javascript:void(0)" class="minibrowse-paddle minibrowse_close">All</a>'), this._$paddles_node.append('<a href="javascript:void(0)" class="minibrowse-paddle minibrowse_next' + t + '">Next <span class="icon-arrow-down"></span></a>'), a.append(s)
            },
            _get_eventname_from_keypress: function(i) {
                var t = {
                    39: "Minibrowse.next_click",
                    37: "Minibrowse.prev_click",
                    27: "Minibrowse.close_click"
                };
                if (t[i.which] && !(i.metaKey || i.altKey || i.shiftKey || i.ctrlKey)) {
                    var a = e(i.target);
                    if (!(i.target.isContentEditable || a.attr("contenteditable") || a.is(":input")) || !a.is(":visible")) return t[i.which]
                }
            },
            _restore_overhead_box: function() {
                e(document.body).off(".minibrowse").removeData("minibrowse_keys_bound"), window.da_overhead_box.$node.off(".minibrowse"), this._$paddles_node && (this._$paddles_node.off(".minibrowse"), this._$paddles_node.removeData("minibrowse_paddles_bound")), Glbl("Site.is_mobile") ? e(".minibrowse-mobile-paddles-container").remove() : window.da_overhead_box.setHTML(null), this.swipes._destroy()
            },
            _add_loading_text: function() {
                var i = e('<h1 class="loading_text" style="color:#607066;text-align:center;padding:4em 0">Loading...</h1>'),
                    t = function() {
                        i.animate({
                            opacity: .3
                        }, 700, a)
                    },
                    a = function() {
                        i.animate({
                            opacity: .99
                        }, 700, t)
                    };
                this._get_container().find(":gmi(DeviationPageView)").addClass("duper-loading").find(".dev-view-deviation").append(i), t()
            },
            _init_deviation_extras: function(i, t, a) {
                var s;
                if (this._$paddles_node)
                    if (Glbl("ResView.message_button") === !0) {
                        Glbl.del("ResView.message_button");
                        var n;
                        if (Glbl("Site.is_mobile") ? (n = this._$paddles_node.closest(".minibrowse-mobile-paddles-container"), n.addClass("messagebutton")) : n = a.add(t), Glbl("ResView.nc_mode")) n.find('[data-sigil="minibrowse-remove-message"]').html('<a class="minibrowse-remove-message-button" href="#"><span class="icon-nav-close"></span> Remove from Notifications</a>').show();
                        else {
                            s = n.find(":gmi(ResourceViewMessageButton)").gmi();
                            for (var o = 0, r = s.length; r > o; o++) s[o].render()
                        }
                    } else this._$paddles_node.closest(".minibrowse-mobile-paddles-container").removeClass("messagebutton");
                else ddt.warn("duperbrowse", "Paddles are not yet created!");
                s = GMI.query(t.find(".talk-tower .pagination")[0], "GPageButton");
                for (var o = 0, r = s.length; r > o; o++) e(s[o].gmi_node).on("click.comments_pager", this._comments_pager_click.bind(this)), s[o].gmi_node.eventonclickclaimed = 1;
                if (PubSub.publish("DeviationAds.minibrowse_populate", i), deviantART && deviantART.pageData.is_not_favouritable && e("#zoomed-in").addClass("no-lub"), i.content.pageData && 1 == i.content.pageData.deviation_has_printtabs) {
                    var d = {
                        category: "Deviation",
                        action: "printtabs_pageview"
                    };
                    PubSub.publish("DaGa.track_event", d)
                } else this._set_pagedata_key("deviation_has_print", 0), this._set_pagedata_key("deviation_has_printtabs", 0), this._set_pagedata_key("ga_hit", this._pre_takeover_ga_dimensions);
                e(":gmi(ResourceViewFavouriteButton)", a).gmi(), e(":gmi(ResourceViewWatchButton)", a).gmi(), e(":gmi(ResourcePageBtfDockAd)", a).gmi(), e(":gmi(ResourceViewShare)", a).gmi(), e(":gmi(ResourceStream)", a).gmi();
                var n = this._get_container();
                if (DWait.ready(["jms/pages/ccommentthread.js"], function() {
                        e(":gmi(CCommentThread)", n).gmi()
                    }), this._reload_anchor) {
                    var l = e("a[id=" + this._reload_anchor + "]").first().offset().top,
                        _ = e(window).scrollTop();
                    l > _ && _ + e(window).height() > l || e(window).scrollTop(l), this._reload_anchor = null
                }
                var h = {};
                i.content.pageData.deviationuuid && (h.deviationuuid = i.content.pageData.deviationuuid), PubSub.publish("DeviationExtras.loaded", h)
            },
            _comments_pager_click: function(i) {
                var t = 0,
                    a = !1,
                    s = e(i.currentTarget),
                    n = {},
                    o = s.data("pager_ga_label") || "unknown";
                if (s.attr("gmi-offset") && (t = s.attr("gmi-offset"), a = !0, n.offset = t), window.PaginationGoto) {
                    window.PaginationGoto.clearSuperbrowsableData();
                    var r = GMI.query(i.target, "GPageButton");
                    if (r.length > 0 && r[0].gmi_args.gotoboxinputid) {
                        var d = e("#" + r[0].gmi_args.gotoboxinputid),
                            l = window.PaginationGoto.calculateOffsetFromPageNumber(d.val(), r[0].gmi_args.currentpage, r[0].gmi_args.lastpage, r[0].gmi_args.interval);
                        l === !1 ? window.PaginationGoto.errorAlert() : (t = l, n.offset = t, a = !0, o = "goto_custom_page")
                    }
                }
                return a && (this._reload_anchor = "comments", PubSub.publish("DaGa.track_event", {
                    category: "Deviation",
                    action: "comment_pagination",
                    label: o
                }), PubSub.publish("Minibrowse.reload_extras", {
                    itemid: this._current_item_id,
                    extras_parameters: n
                })), !1
            },
            _get_pagedata_key: function(e) {
                return window.deviantART && window.deviantART.pageData ? window.deviantART.pageData[e] : void 0
            },
            _set_pagedata_key: function(e, i) {
                window.deviantART && window.deviantART.pageData && (window.deviantART.pageData[e] = i)
            },
            swipes: {
                _initSwipes: function(i) {
                    PubSub.subscribe([{
                        eventname: "MinibrowseView.preload_preview",
                        subscriber: this,
                        callback: this.preload_preview
                    }]), PubSub.publish("Duperbrowse.eager_preload", !0), this.delta = 10, this.flickThreshold = .6, this.x = null, this.y = null, this.swiping = !1, this.start = 0, this.previews = {}, this.view = i, this.$container = e('<div class="minibrowse-swipe-previews">').insertBefore(this.view._get_container()), this.previews.prev = e('<div class="minibrowse-swipe-preview dev-page-view prev">').appendTo(this.$container), this.previews.next = e('<div class="minibrowse-swipe-preview dev-page-view next">').appendTo(this.$container), e(document.body).data("minibrowse_swipes_bound", !0).off("touchstart.minibrowse").off("touchmove.minibrowse").off("touchend.minibrowse").off("touchcancel.minibrowse").on("touchstart.minibrowse", this._touchstart.bind(this)).on("touchmove.minibrowse", this._touchmove.bind(this)).on("touchend.minibrowse", this._touchend.bind(this)).on("touchcancel.minibrowse", this._reset.bind(this))
                },
                _destroy: function() {
                    this.$container && (this.$container.remove(), e(document.body).removeData("minibrowse_swipes_bound"))
                },
                _reset_preview: function() {
                    var e = '<h1 class="loading">Loading...</h1>';
                    this.previews.prev.html(e), this.previews.next.html(e)
                },
                preload_preview: function(i, t) {
                    if (ddt.log("duperbrowse", "Loading preview", t), t.direction && t.response.content && e.isPlainObject(t.response.content)) {
                        e('<div class="dev-view-deviation">').html(t.response.content.html).appendTo(this.previews[t.direction].empty());
                        var a = e.extend({}, t.response.content);
                        delete a.pageData, delete a.title, gWebPage.update(a)
                    }
                },
                _touchstart: function(e) {
                    e = e.originalEvent || e, e.touches.length > 1 || (this.start = Date.now(), this.x = e.touches[0].clientX, this.y = e.touches[0].clientY, this.swiping = !1, this.view._get_container().find(".dev-content-full.zoomed").length > 0 && (ddt.log("Duperbrowse", "Ignoring swipe due to zoomed in deviation"), this.ignoreSwiping = !0))
                },
                _touchmove: function(e) {
                    if (e = e.originalEvent || e, !this.x || !this.y || e.touches.length > 1 || this.ignoreSwiping) return !0;
                    var i = this._calculateSwipePos(e);
                    if (!this.swiping)
                        if (i.absX > this.delta && i.absX > i.absY) this.swiping = !0, this.$container.addClass("active"), this._position_previews();
                        else if (i.absY > this.delta && i.absY >= i.absX) return this.ignoreSwiping = !0, !0;
                    this.swiping && (this._previewSwipe(i.deltaX), e.preventDefault())
                },
                _touchend: function(e) {
                    if (e = e.originalEvent || e, this.swiping) {
                        var i = this._calculateSwipePos(e),
                            t = i.velocity > this.flickThreshold,
                            a = i.absX > this.$container.width() / 2,
                            s = i.deltaX > 0 ? "next" : "prev",
                            n = "0px",
                            o = !1;
                        i.absX > i.absY && (t || a) && (i.deltaX > 0 && this.view._has_next ? (n = "-100vw", o = "Minibrowse.next_click") : 0 > i.deltaX && this.view._has_prev && (n = "100vw", o = "Minibrowse.prev_click")), this._swipeEndAnimation(s, n, o)
                    } else this._reset()
                },
                _reset: function() {
                    this.x = null, this.y = null, this.swiping = !1, this.ignoreSwiping = !1, this.start = 0, this.previews.next.removeAttr("style"), this.previews.prev.removeAttr("style"), this.$container.removeClass("active scrolled"), this.view._get_container().css({
                        transform: "",
                        transition: "0s"
                    })
                },
                _position_previews: function() {
                    var i = function(e) {
                        var i = e.height();
                        if (i && 200 > i) {
                            var t = 100 - Math.floor(i / 2);
                            e.closest(".dev-view-deviation").css("padding-top", t + "px")
                        }
                    };
                    this.$container.find(".minibrowse-swipe-preview img.dev-content-full").each(function() {
                        void 0 !== this.naturalWidth ? i(e(this)) : e(this).on("load", i.bind(this, e(this)))
                    }), window.scrollY > 100 && this.$container.addClass("scrolled")
                },
                _previewSwipe: e.throttle(100, !0, function(e) {
                    if (!(Math.abs(e) > this.$container.width())) {
                        this.view._get_container();
                        var i, t;
                        if (e > 0 && this.view._has_next) i = this.previews.next, t = this.previews.prev;
                        else {
                            if (!(0 > e && this.view._has_prev)) return;
                            i = this.previews.prev, t = this.previews.next
                        }
                        this.$container.hasClass("scrolled") || this.view._get_container().css("transform", "translate3d(" + -e + "px,0,0)"), i.css("transform", "translate3d(" + -e + "px,0,0)"), t.removeAttr("style")
                    }
                }),
                _swipeEndAnimation: function(i, t, a) {
                    var s = {
                        transform: "translate3d(" + t + ", 0, 0)",
                        transition: "all 0.3s"
                    };
                    this.previews[i].css(s), this.view._get_container().css(s), this.previews[i].on("transitionend", function(i) {
                        e(i.target).off("transitionend"), a && PubSub.publish(a, {
                            event_type: "swipe"
                        }), this._reset()
                    }.bind(this))
                },
                _calculateSwipePos: function(e) {
                    var i = e.changedTouches[0].clientX,
                        t = e.changedTouches[0].clientY,
                        a = this.x - i,
                        s = this.y - t,
                        n = Math.abs(a),
                        o = Math.abs(s),
                        r = Date.now() - this.start,
                        d = Math.sqrt(n * n + o * o) / r;
                    return {
                        deltaX: a,
                        deltaY: s,
                        absX: n,
                        absY: o,
                        velocity: d
                    }
                }
            }
        };
        Glbl("Site.is_deviantart") && PubSub.publish("MinibrowseView.js_factory", i)
    })(jQuery), window.DWait && DWait.run("jms/lib/minibrowse.view.da.js")
});
DWait.ready(["jms/lib/jquery/plugins/jquery.throttle-debounce.js", "jms/lib/minibrowse.js", "jms/lib/location.js", "jms/pages/duperbrowse/duperbrowse.helpers.js", "jms/lib/browser.js", "jms/lib/Base.js", "jms/lib/jquery/jquery.current.js", "jms/lib/pubsub.js", "jms/lib/ddt.js", "jms/lib/glbl.js", "jms/lib/difi.js"], function() {
    (function() {
        var e, t, s = "prev",
            i = "next",
            r = /^\/?(?:art|journal)\/.+-([0-9]+)(?!.*[?&]hf=1)/,
            o = !1;
        if (window.location.hash && !r.test(window.location.pathname) && r.test(Glbl("Location.path")) && !document.referrer.match("deviantart")) return ddt.log("Duperbrowse", "redirecting to canonical URL from hash"), PubSub.publish("Location.redirect_to_canonical_url"), void 0;
        if (r.test(Glbl("Location.path")) && !Glbl("Location.pushstate_enabled") && (o = !0, e = r), window.Duperbrowse = {
                open: function(e, s) {
                    return Glbl("Duperbrowse.disabled") ? ddt.log("Duperbrowse", "disabled") : (t.waiting_for_item && (s = t.get_current_stream()), s = $.extend({
                        current_id: e.itemid,
                        current_offset: e.stream_offset,
                        scroll_position: $(window).scrollTop()
                    }, s), t.waiting_for_stream || t.push_stream(s), ddt.log("Duperbrowse", "global open", e, s), t.open(e, !0), void 0)
                },
                close: function(e) {
                    Glbl("Duperbrowse.disabled") || (ddt.log("Duperbrowse", "global close", e), t.close(e))
                }
            }, !Glbl("Duperbrowse.disabled")) {
            var a = Base.extend({
                    pending_hijackers: [],
                    pending_action: null,
                    constructor: function() {
                        PubSub.subscribe([{
                            eventname: "DuperbrowseAdsInterceptor.display_on_next_action",
                            subscriber: this,
                            callback: this.handlers.hijack_next_action
                        }, {
                            eventname: "DuperbrowseAdsInterceptor.continue_after_ad",
                            subscriber: this,
                            callback: this.handlers.continue_after_ad
                        }])
                    },
                    handlers: {
                        hijack_next_action: function(e, t) {
                            ddt.log("Duperbrowse", "Will noop for advert on next action"), this.pending_hijackers.push(t.handler)
                        },
                        continue_after_ad: function() {
                            this.pending_action ? (ddt.log("Duperbrowse", "Continuing after advert"), t[this.pending_action.method].apply(t, this.pending_action.args), this.pending_action = null) : ddt.log("Duperbrowse", "Invalid pending_action")
                        }
                    },
                    should_play_advert: function() {
                        return this.pending_hijackers.length
                    },
                    invoke_ad: function(e) {
                        if (this.pending_hijackers.length) {
                            this.pending_action = e;
                            var s = this.pending_hijackers.shift();
                            PubSub.publish("DuperbrowseAdsInterceptor.invoke_waiting_ad", {
                                handler: s
                            })
                        } else t[e.method].apply(t, e.args)
                    }
                }),
                n = Base.extend({
                    is_open: !1,
                    opened_from: null,
                    streams: [],
                    stream_stack: [],
                    current_stream: null,
                    deviation_urls: {},
                    last_scroll_position: 0,
                    active_promise: null,
                    last_url_was_faked: !1,
                    last_open_was_faked: !1,
                    waiting_for_next_item: !1,
                    waiting_for_prev_item: !1,
                    subscribed: !1,
                    ads_helper: new a,
                    constructor: function() {
                        ddt.log("Duperbrowse", "instance created from:", window.location.href), PubSub.subscribe([{
                            eventname: "Duperbrowse.map_url",
                            subscriber: this,
                            callback: this.handlers.map_url
                        }, {
                            eventname: "Location.changed",
                            subscriber: this,
                            callback: this.handlers.location_changed
                        }, {
                            eventname: "Location.anchor_changed",
                            subscriber: this,
                            callback: this.handlers.location_changed
                        }, {
                            eventname: "Location.changed_without_push",
                            subscriber: this,
                            callback: this.handlers.bad_location_state
                        }]), $(window).on("popstate.duperbrowse", this.handlers.popstate.bind(this))
                    },
                    subscribe: function() {
                        this.subscribed || (this.subscribed = !0, PubSub.subscribe([{
                            eventname: "Minibrowse.next_click",
                            subscriber: this,
                            callback: this.handlers.next_click
                        }, {
                            eventname: "Minibrowse.close_click",
                            subscriber: this,
                            callback: this.handlers.close_click
                        }, {
                            eventname: "Minibrowse.prev_click",
                            subscriber: this,
                            callback: this.handlers.prev_click
                        }, {
                            eventname: "DeviationExtras.loaded",
                            subscriber: this,
                            callback: this.handlers.extras_loaded
                        }, {
                            eventname: "Duperbrowse.eager_preload",
                            subscriber: this,
                            callback: this.handlers.eager_preload
                        }]))
                    },
                    handlers: {
                        popstate: function(e) {
                            if (ddt.log("Duperbrowse", "Raw popstate", e, Glbl("Location.path")), Glbl("Location.path")) {
                                if (r.test(window.location.hash.substr(1))) return ddt.log("Duperbrowse", "Redirect to canonical bad popstate", e, Glbl("Location.path")), PubSub.publish("Location.redirect_to_canonical_url"), void 0;
                                if (!this.is_open || e.originalEvent.state || r.test(Glbl("Location.path")))
                                    if (this.is_open || e.originalEvent.state || !r.test(Glbl("Location.path")) || r.test(window.location.pathname)) {
                                        if (0 === this.streams.length && e.originalEvent.state && e.originalEvent.state.duper_state) {
                                            ddt.log("Duperbrowse", "Got bad raw popstate reloading page");
                                            var t = Glbl("Location.path").match(r);
                                            t && t[1] != e.originalEvent.state.item.itemid && window.location.reload()
                                        }
                                    } else window.location.reload();
                                else this.close_silently(), "" !== window.location.search && window.location.reload()
                            }
                        },
                        next_click: function(e, t) {
                            void 0 !== t && Glbl("Duperbrowse.navigation_source", t.event_type), this.next()
                        },
                        prev_click: function(e, t) {
                            void 0 !== t && Glbl("Duperbrowse.navigation_source", t.event_type), this.prev()
                        },
                        close_click: function(e, t) {
                            PubSub.publish("DaGa.track_event", {
                                category: "Duperbrowse",
                                action: "navigate_close"
                            }), void 0 !== t && Glbl("Duperbrowse.navigation_source", t.event_type), this.close()
                        },
                        extras_loaded: function() {
                            if (this._ready_to_preload() && !this.eager_preload) {
                                var e;
                                if (this.current_stream.direction === i ? this.current_stream.has_next_callback() && (e = this.current_stream.next_item_callback()) : this.current_stream.has_prev_callback() && (e = this.current_stream.prev_item_callback()), !e) return ddt.log("Duperbrowse", "ready to preload, but could not get item");
                                var t = this;
                                e.done(function(e) {
                                    ddt.log("Duperbrowse", "preloading", t.current_stream.direction, e), PubSub.publish("Minibrowse.preload", e.itemid)
                                })
                            }
                        },
                        location_changed: function(t, s) {
                            ddt.log("Duperbrowse", "location changed", s);
                            var i;
                            if (o && (o = !1, i = Glbl("Location.path").match(e), i && i[1] && (this.last_open_was_faked = !0, DWait.ready(".domready", function() {
                                    this._open_fake(i[1])
                                }.bind(this))), ddt.log("Duperbrowse", "Opened duper instead of redirect")), this.is_open && this.last_open_was_faked && "hashchange" === s.origin && Glbl("Location.pushstate_enabled") && (ddt.log("Duperbrowse", "silently closed, blocking redirect loop"), this.close_silently(), this.last_open_was_faked = !1), "popstate" === s.origin || "hashchange" === s.origin || "anchorchange" === s.origin) {
                                var a = window.location.pathname + window.location.search,
                                    n = "hashchange" !== s.origin && Glbl("Location.pushstate_enabled");
                                if (s.state && s.state.duper_state) {
                                    if (this.is_open && !Glbl("Location.pushstate_enabled") && !r.test(Glbl("Location.path"))) return ddt.log("Duperbrowse", "silently closed, this is not an art url", Glbl("Location.path")), this.close_silently(), void 0;
                                    if (this.unfreeze_state(s.state), s.state.item.globals)
                                        for (var l in s.state.item.globals) $.each(s.state.item.globals[l], function(e, t) {
                                            ddt.log("Duperbrowse", "restoring globals", {
                                                key: t
                                            }), Glbl(e, t)
                                        });
                                    var _ = this._get_browse_options(s.state.item);
                                    if (!_) return ddt.log("Duperbrowse", "open failed");
                                    PubSub.publish("DaPx.update_pageview_data", {
                                        view: "art"
                                    }), PubSub.publish("Minibrowse.open", _)
                                } else if (this.is_open && a !== s.path && n) ddt.log("Duperbrowse", "silently closed, state is not from duper", Glbl("Location.path")), this.close_silently();
                                else if (this.is_open && a === s.path && this.current_stream) PubSub.publish("Location.push", {
                                    url: window.location.pathname + window.location.search + window.location.hash,
                                    state: this.freeze_state({
                                        itemid: this.current_stream.current_id,
                                        stream_offset: this.current_stream.current_offset
                                    }),
                                    replace: !0
                                });
                                else if (n) this.clear_state();
                                else if (!Glbl("Location.pushstate_enabled") && "hashchange" === s.origin) {
                                    if (0 === this.streams.length && "hashchange" === s.origin && (i = Glbl("Location.path").match(r), i && (ddt.log("Duperbrowse", "Got bad hashstate", s, this.streams, i[1]), i[1]))) {
                                        var c = null;
                                        return this.opened_from || (c = {
                                            url: s.path,
                                            title: window.document.title
                                        }), this._open_fake(i[1], c), void 0
                                    }
                                    ddt.log("Duperbrowse", "silently closed, last resort failed", Glbl("Location.path")), this.close_silently()
                                }
                            }
                        },
                        bad_location_state: function(e, t) {
                            if (0 === this.streams.length && "popstate" === t.origin && t.state && t.state.duper_state && !r.test(Glbl("Location.path"))) {
                                ddt.log("Duperbrowse", "Got bad popstate", t, this.streams);
                                var s = null;
                                this.opened_from || (s = t.state.opened_from), this._open_fake(t.state.item.itemid, s)
                            }
                        },
                        map_url: function(e, t) {
                            $.isPlainObject(t) && t.itemid && t.url && (this.deviation_urls[t.itemid] || (this.deviation_urls[t.itemid] = {}), this.deviation_urls[t.itemid][this._get_context(t.context)] = t.url, this.current_stream && this.current_stream.current_id == t.itemid && this.last_url_was_faked && (ddt.log("Duperbrowse", "resetting location from map_url"), this.last_url_was_faked = !1, PubSub.publish("Location.push", {
                                url: this._get_url(t.itemid, this._get_context(t.context)),
                                state: this.freeze_state({
                                    itemid: this.current_stream.current_id,
                                    stream_offset: this.current_stream.current_offset
                                }),
                                replace: !0
                            })))
                        },
                        eager_preload: function(e, t) {
                            this.eager_preload = t
                        }
                    },
                    push_stream: function(e) {
                        Glbl("Duperbrowse.preload_active", 0), this.streams.push(e), this.stream_stack.push(this.streams.length - 1)
                    },
                    get_stream: function(e) {
                        return this.streams[e]
                    },
                    get_current_stream: function() {
                        return this.streams[this.streams.length - 1]
                    },
                    freeze_state: function(e) {
                        return {
                            duper_state: !0,
                            is_open: this.is_open,
                            opened_from: this.opened_from,
                            stream_stack: this.stream_stack,
                            last_scroll_position: this.last_scroll_position,
                            last_url_was_faked: this.last_url_was_faked,
                            item: e,
                            eager_preload: this.eager_preload
                        }
                    },
                    unfreeze_state: function(e) {
                        this.is_open = e.is_open, this.opened_from = e.opened_from, this.stream_stack = e.stream_stack, this.last_scroll_position = e.last_scroll_position, this.current_stream = this.get_stream(e.stream_stack[e.stream_stack.length - 1]), this.last_url_was_faked = e.last_url_was_faked, this.eager_preload = e.eager_preload
                    },
                    clear_state: function() {
                        this.opened_from = null, this.stream_stack = [], this.last_scroll_position = null, this.current_stream = null, this.last_url_was_faked = !1, this.eager_preload = !1
                    },
                    close_silently: function() {
                        if (this.is_open = !1, this.current_stream) {
                            var e = this.current_stream.scroll_position;
                            setTimeout(function() {
                                $(window).scrollTop(e)
                            }, 1)
                        }
                        this.clear_state(), PubSub.publish("Minibrowse.close"), PubSub.publish("Duperbrowse.closed")
                    },
                    open: function(e, t) {
                        ddt.log("Duperbrowse", "open", e, t);
                        var s = this.get_stream(this.stream_stack[this.stream_stack.length - 1]);
                        if (!s) return this.close(!0);
                        if (this.ads_helper.should_play_advert()) return ddt.log("Duperbrowse", "Nooping open action to display advert", e), this.ads_helper.invoke_ad({
                            method: "open",
                            args: arguments
                        }), void 0;
                        e ? e.itemid : s.current_id, this.is_open || (this.is_open = !0, this.opened_from = {
                            url: window.location.pathname + window.location.search + window.location.hash,
                            title: window.document.title
                        }, this.subscribe()), s !== this.current_stream && (ddt.log("Duperbrowse", "moving into a new stream", s, this.current_stream, this), this.current_stream = s, s.direction = i, s.direction_confirmed = !1), e ? (s.current_id = e.itemid, s.current_offset = e.stream_offset) : s.current_id && (e = {
                            itemid: s.current_id,
                            stream_offset: s.current_offset
                        });
                        var r = this._get_browse_options(e);
                        if (!r) return ddt.log("Duperbrowse", "open failed");
                        s.on_stream_item_opened && s.on_stream_item_opened(e), s.has_next_callback && (r.show_next = Boolean(s.has_next_callback()), PubSub.publish("Duperbrowse.has_next", r.show_next)), s.has_prev_callback && (r.show_prev = Boolean(s.has_prev_callback()), PubSub.publish("Duperbrowse.has_prev", r.show_prev));
                        var o = this._get_url(r.id, r.context),
                            a = {
                                devid: r.id
                            };
                        e.content_source !== void 0 ? (a.content_source = e.content_source, DiFi.setAnalogPayload("content_source", e.content_source)) : DiFi.unsetAnalogPayload("content_source"), PubSub.publish("Location.push", {
                            url: o,
                            state: this.freeze_state(e),
                            pageview: {
                                view: "art"
                            },
                            log_data: a
                        }), PubSub.publish("Minibrowse.open", r), this.eager_preload && (r.show_next && this.current_stream.next_item_callback().done(function(e) {
                            ddt.log("Duperbrowse", "eager preview preloading (next)", e), PubSub.publish("Minibrowse.preload", {
                                direction: "next",
                                id: e.itemid
                            })
                        }), r.show_prev && this.current_stream.prev_item_callback().done(function(e) {
                            ddt.log("Duperbrowse", "eager preview preloading (prev)", e), PubSub.publish("Minibrowse.preload", {
                                direction: "prev",
                                id: e.itemid
                            })
                        })), PubSub.publish("Duperbrowse.opened", {
                            id: r.id,
                            url: o,
                            fresh: Boolean(t)
                        })
                    },
                    close: function(e) {
                        return this.is_open ? this.ads_helper.should_play_advert() ? (ddt.log("Duperbrowse", "Nooping close action to display advert"), this.ads_helper.invoke_ad({
                            method: "close",
                            args: arguments
                        }), void 0) : (this.current_stream && (this.last_scroll_position = this.current_stream.scroll_position), ddt.log("Duperbrowse", "close", e), e ? (this.is_open = !1, $(document).off(".duperbrowse"), PubSub.publish("Minibrowse.close"), this.opened_from && this.opened_from.url && (Glbl("Location.pushstate_enabled") || (this.opened_from.url = this.opened_from.url.replace(/^.*#/, "")), PubSub.publish("Location.set", {
                            url: this.opened_from.url,
                            log_data: "init"
                        }), PubSub.publish("DuperBrowse.set_closing_location", this.opened_from.url)), this.opened_from && this.opened_from.title && (window.document.title = this.opened_from.title), this.opened_from = null, this.current_stream && $(window).scrollTop(this.last_scroll_position), this.current_stream.on_stream_item_closed && this.current_stream.on_stream_item_closed(this.current_stream), this.current_stream = null, this.stream_stack = [], PubSub.publish("Duperbrowse.closed", e), PubSub.publish("DaGa.track_pageview_on_duper_close", {
                            page: Glbl("Location.path")
                        })) : (this.stream_stack.pop(), this.open()), void 0) : !1
                    },
                    next: function() {
                        if (this.current_stream && !this.waiting_for_next_item && this.current_stream.has_next_callback()) {
                            PubSub.publish("Duperbrowse.next"), PubSub.publish("DaGa.track_event", {
                                category: "Duperbrowse",
                                action: "navigate_next"
                            }), this._cancel_promise();
                            var e = this;
                            this.active_promise = this.current_stream.next_item_callback().done(function(t) {
                                e._ready_to_preload(i), e.open(t)
                            }).fail(function(e) {
                                e !== DuperbrowseHelpers.PROMISE_STATE_END_OF_STREAM && e !== DuperbrowseHelpers.PROMISE_STATE_CANCELLED && e !== DuperbrowseHelpers.PROMISE_STATE_OVERPAGED && PubSub.publish("Duperbrowse.pageload_failed", e)
                            }).always(function() {
                                e.waiting_for_next_item = !1
                            }), this.waiting_for_next_item = "pending" === this.active_promise.state() ? !0 : !1
                        }
                    },
                    prev: function() {
                        if (this.current_stream && !this.waiting_for_prev_item && this.current_stream.has_prev_callback()) {
                            PubSub.publish("Duperbrowse.prev"), PubSub.publish("DaGa.track_event", {
                                category: "Duperbrowse",
                                action: "navigate_prev"
                            }), this._cancel_promise();
                            var e = this;
                            this.active_promise = this.current_stream.prev_item_callback().done(function(t) {
                                e._ready_to_preload(s), e.open(t)
                            }).fail(function(e) {
                                e !== DuperbrowseHelpers.PROMISE_STATE_END_OF_STREAM && e !== DuperbrowseHelpers.PROMISE_STATE_CANCELLED && e !== DuperbrowseHelpers.PROMISE_STATE_OVERPAGED && PubSub.publish("Duperbrowse.pageload_failed", e)
                            }).always(function() {
                                e.waiting_for_prev_item = !1
                            }), this.waiting_for_prev_item = "pending" === this.active_promise.state() ? !0 : !1
                        }
                    },
                    _ready_to_preload: function(e) {
                        return this.current_stream ? ((e === s || e === i) && (this.current_stream.direction !== e ? (Glbl("Duperbrowse.preload_active", 0), this.current_stream.direction = e, this.current_stream.direction_confirmed = !1, ddt.log("Duperbrowse", "user started moving", e)) : this.current_stream.direction_confirmed || (this.current_stream.direction_confirmed = !0, ddt.log("Duperbrowse", "user confirmed moving", e)), this.current_stream.direction_confirmed && Glbl.plus("Duperbrowse.preload_active")), this.current_stream.direction_confirmed) : void 0
                    },
                    _get_url: function(e, t) {
                        var s = (this.deviation_urls[e] || {})[this._get_context(t)];
                        if (s) s = s.replace(/^(https?:)?\/\/[^\/]+/, ""), t || (s = s.replace(/\?.*$/, ""));
                        else {
                            if (!e) return !1;
                            s = "d" + parseInt(e, 10).toString(36), this.last_url_was_faked = !0
                        }
                        return ddt.log("Duperbrowse", "got url for item", e, t, s), s
                    },
                    _get_context: function(e) {
                        return e || "default"
                    },
                    _get_browse_options: function(e) {
                        return e && e.itemid ? {
                            id: e.itemid,
                            type: e.type,
                            context: e.context,
                            show_next: !1,
                            show_prev: !1
                        } : !1
                    },
                    _cancel_promise: function() {
                        this.active_promise && "pending" === this.active_promise.state() && this.active_promise.cancel && (this.active_promise.cancel(), ddt.log("Duperbrowse", "Cancelled pending promise", this.active_promise))
                    },
                    _open_fake: function(e, t) {
                        this.current_stream = {
                            scroll_position: 0
                        }, this.subscribe(), this.is_open = !0, this.opened_from = t || null, this.stream_was_faked = !0, this.deviation_urls[e] && Glbl("Location.path", this._get_url(e, null)), PubSub.publish("Minibrowse.open", {
                            id: e,
                            type: 1,
                            show_next: !1,
                            show_prev: !1
                        })
                    }
                });
            t = new n
        }
    })(), window.DWait && DWait.run("jms/pages/duperbrowse/duperbrowse.master.js")
});
DWait.ready(["jms/lib/spinpreset.js", "jms/thirdparty/lib/spin.js", "jms/lib/pubsub.js", "jms/lib/jquery/jquery.current.js", "jms/lib/glbl.js", "jms/lib/jquery/plugins/jquery.somedata.js"], function() {
    (function() {
        var e = {
            PROMISE_STATE_END_OF_STREAM: 1,
            PROMISE_STATE_CANCELLED: 2,
            PROMISE_STATE_OVERPAGED: 3,
            click_handler: function(e) {
                var r = {
                    open_duperbrowse: !0,
                    click_return: !1,
                    wait_for_load: !1,
                    disabled: !1
                };
                (e.metaKey || e.altKey || e.shiftKey || e.ctrlKey) && (r.open_duperbrowse = !1, r.click_return = !0), e.which > 1 && (r.open_duperbrowse = !1, r.click_return = !0), (Glbl("Duperbrowse.pause") || Glbl("Duperbrowse.disabled")) && (r.disabled = Glbl("Duperbrowse.disabled"), r.open_duperbrowse = !1, r.click_return = !0);
                var i = $(e.currentTarget);
                return window.deviantART.deviant.loggedIn || !i.hasClass("antisocial") && !i.hasClass("ismature") || (r.open_duperbrowse = !1, r.click_return = !0), r
            },
            map_url: function(e, r, i) {
                r && PubSub.publish("Duperbrowse.map_url", {
                    itemid: e,
                    url: r,
                    context: i
                })
            },
            get_element_super_dimensions: function(e) {
                var r = {};
                if (e.data("super-img")) {
                    var i = {
                        "super-img": "src",
                        "super-width": "width",
                        "super-height": "height",
                        "super-full-img": "full_src",
                        "super-full-width": "full_width",
                        "super-full-height": "full_height",
                        "super-transparent": "transparent",
                        "super-alt": "alt"
                    };
                    $.each(i, function(i, t) {
                        var s = e.data(i);
                        s && (r[t] = s)
                    })
                }
                return r
            },
            cache_dimensions_for_item: function(e, r) {
                var i = this.get_element_super_dimensions(e);
                $.isEmptyObject(i) || (i.id = r, PubSub.publish("Minibrowse.cache_main_html_dimensions", i))
            },
            cache_options_for_item: function(e, r) {
                var i = ["view_mode"],
                    t = e.someData(i);
                if (!$.isEmptyObject(t)) {
                    var s = t;
                    s.id = r, PubSub.publish("Minibrowse.cache_item_options", s)
                }
            },
            cache_dimensions_for_legacy_item: function(e, r) {
                var i = {},
                    t = {
                        super_img: "src",
                        super_w: "width",
                        super_h: "height",
                        super_fullimg: "full_src",
                        super_fullw: "full_width",
                        super_fullh: "full_height",
                        super_transparent: "transparent",
                        alt: "alt"
                    };
                $.each(t, function(r, t) {
                    var s = e.attr(r);
                    s && (i[t] = s)
                }), $.isEmptyObject(i) || (i.id = r, PubSub.publish("Minibrowse.cache_main_html_dimensions", i))
            },
            init_thumb_data: function(e, r, i) {
                r.find(i).each(function() {
                    var i = $(this);
                    0 !== i.length && 0 !== r.length && (DuperbrowseHelpers.cache_dimensions_for_item(i, e.itemid), DuperbrowseHelpers.cache_options_for_item(i, e.itemid), DuperbrowseHelpers.map_url(e.itemid, i.attr("href"), i.data("duper-context")))
                }), r.data(e)
            },
            init_thumb_data_torpedo: function(e, r) {
                var i = $(r);
                DuperbrowseHelpers.cache_dimensions_for_item(i, e.itemid), DuperbrowseHelpers.cache_options_for_item(i, e.itemid), DuperbrowseHelpers.map_url(e.itemid, i.attr("href"), i.data("duper-context")), i.data(e)
            },
            scroll_to_thumb: function(e) {
                var r = $(window),
                    i = e.offset().top,
                    t = r.scrollTop();
                i > t && t + r.height() > i || r.scrollTop(i)
            }
        };
        window.DuperbrowseHelpers = e
    })(), window.DWait && DWait.run("jms/pages/duperbrowse/duperbrowse.helpers.js")
});
DWait.ready(["jms/lib/jquery/plugins/jquery.gmi.js", "jms/lib/jquery/jquery.current.js", "jms/lib/pubsub.js", "jms/lib/Base.js", "jms/lib/ddt.js"], function() {
    (function(e) {
        var a = Base.extend({
            constructor: function() {
                PubSub.subscribe([{
                    eventname: "DuperbrowseStreamLoader.load",
                    subscriber: this,
                    callback: this.handlers.load
                }])
            },
            dot_to_camel: function(e) {
                return (e + "").replace(/\b[a-z]/g, this.make_uppercase).replace(".", "")
            },
            make_uppercase: function(e) {
                return e.toUpperCase()
            },
            handlers: {
                load: function(a, t) {
                    if (t && t.stream && /^[a-z]+\.[a-z]+$/.test(t.stream)) {
                        var r;
                        r = t.gmi && /^[a-zA-Z]+$/.test(t.gmi) ? t.gmi : "Duperbrowse" + this.dot_to_camel(t.stream) + "Stream";
                        var s;
                        if (t.node) s = e(t.node);
                        else var s = e(":gmi(" + r + ")");
                        if (!s.length) return ddt.log("DuperbrowseStream", "loader aborted, GMI node not found", r), void 0;
                        if (window[r] && !t.delay_gmi) s.gmi();
                        else if (!s.hasClass("dwait_stream")) {
                            var i = t.selector || "a.thumb, a.embedded-deviation, a[data-deviationid]",
                                d = {
                                    stream_file: "jms/pages/duperbrowse/stream/" + t.stream + ".stream.js",
                                    stream_gmi: r
                                };
                            ddt.log("DuperbrowseStream", "loader requested", d), s.addClass("dwait_stream").on("click.dwait_stream", i, d, this.events.click)
                        }
                    }
                }
            },
            events: {
                click: function(a) {
                    if (!(a.metaKey || a.altKey || a.shiftKey || a.ctrlKey || a.which > 1) && a.data && a.data.stream_file && a.data.stream_gmi) {
                        var t = e(a.target).addClass("dwaiting");
                        return DWait.ready(a.data.stream_file, function() {
                            ddt.log("DuperbrowseStream", "loader finished", a.data.stream_file, a.data.stream_gmi), t.closest(":gmi(" + a.data.stream_gmi + ")").off(".dwait_stream").gmi(), t.removeClass("dwaiting").trigger("click")
                        }), !1
                    }
                }
            }
        });
        new a
    })(jQuery), window.DWait && DWait.run("jms/pages/duperbrowse/loader/stream.loader.js")
});
DWait.ready(["jms/lib/jquery/plugins/jquery.somedata.js", "jms/lib/gmi.js", "jms/lib/jquery/jquery.current.js", "jms/lib/pubsub.js", "jms/pages/duperbrowse/duperbrowse.master.js", "jms/pages/duperbrowse/duperbrowse.helpers.js", "jms/lib/Base.js", "jms/lib/gstream/resource_stream.js", "jms/lib/ddt.js"], function() {
    (function(e, t) {
        var s = {
                dataFetchComplete: function(t, s, r, _, i, a) {
                    ResourceStream.prototype.dataFetchComplete.call(this, t, s, r, _, i, a);
                    var n = s,
                        o = {
                            status: i,
                            rids: [],
                            total: a.response.content.total,
                            offset: s,
                            count: r,
                            more: a.response.content.more
                        };
                    i && e.each(a.response.content.resources, function(t, s) {
                        return e(s[2]).data("deviation-inactive") ? (n++, void 0) : (o.rids.push({
                            itemid: s[1],
                            stream_offset: n
                        }), n++, void 0)
                    }), this.$.trigger("dataFetchComplete", o)
                }
            },
            r = 0,
            _ = Base.extend({
                id: 0,
                range_start: 0,
                range_end: 0,
                has_more: !1,
                has_less: !1,
                constructor: function(e, t, s, _) {
                    this.id = r, r++, this.range_start = e, this.range_end = t - 1, this.has_more = s, this.has_less = _
                },
                offset_in_range: function(e) {
                    return e >= this.range_start && this.range_end >= e
                }
            });
        t.DuperbrowseStandardResourceStream = Base.extend({
            _resource_stream: null,
            _current_page: null,
            _current_item: null,
            _current_offset: null,
            _pages: {},
            _missing_offsets: {},
            _previous_offset: 0,
            paging_disabled: !1,
            fake_paging: !1,
            factory: function(e, s) {
                var r = "Duperbrowse" + (e.duperbrowse_class || "Standard") + "ResourceStream";
                return t[r] ? (ddt.log("DuperbrowseStream", "creating resource stream", r), new t[r](s)) : (ddt.log("DuperbrowseStream", "could not locate class for stream", e), void 0)
            },
            constructor: function(e) {
                this._pages = {}, this._missing_offsets = {}, this._resource_stream = e, this._init_stream()
            },
            _init_stream: function() {
                if (this._bind_clicks(), this._patch_resource_stream(), this.fake_paging === !0 && this._resource_stream.contents.length > this._resource_stream.gs_count_per_page) this._create_pages_from_overflow();
                else {
                    var e = new _(this._resource_stream.gs_offset, this._resource_stream.gs_offset + this._resource_stream.gs_count_per_page, 1 === parseInt(this._resource_stream.gs_more_to_load, 10), this._resource_stream.gs_offset > 0);
                    this._current_page = e, this._pages[e.id] = e, this._find_missing_offsets(e)
                }
            },
            _patch_resource_stream: function() {
                this._resource_stream.extend(s), this._resource_stream.$.on("dataFetchComplete", this._handle_contents_change.bind(this))
            },
            _handle_contents_change: function() {
                this._bind_clicks()
            },
            _bind_clicks: function() {
                var t = this;
                e.each(this._resource_stream.contents, function(s, r) {
                    if (r) {
                        var _ = e(r[2]);
                        _.length && (t._init_thumb_data(s, r, _, "a.thumb, a.tt-fh-purchasable"), e("a.thumb, span a.t", _).off("click.duperbrowse").on("click.duperbrowse", t._open_duperbrowse.bind(t)))
                    }
                })
            },
            _init_thumb_data: function(e, t, s, r) {
                var _ = {
                    type: t[0],
                    itemid: t[1],
                    stream_offset: e
                };
                DuperbrowseHelpers.init_thumb_data(_, s, r)
            },
            _open_duperbrowse: function(t) {
                if ((t.metaKey || t.altKey || t.shiftKey || t.ctrlKey) && this._resource_stream.edit_mode === !0) return t.preventDefault(), !0;
                var s = DuperbrowseHelpers.click_handler(t),
                    r = ["itemid", "stream_offset", "type"];
                if (s.open_duperbrowse) {
                    var _ = e(t.currentTarget),
                        i = _.closest(".tt-a, .tt-aa").someData(r);
                    if (!e.isEmptyObject(i)) {
                        this._ga_callback(t.currentTarget);
                        var a = {
                            next_item_callback: this._next_item_callback.bind(this),
                            prev_item_callback: this._prev_item_callback.bind(this),
                            has_next_callback: this._has_next_callback.bind(this),
                            has_prev_callback: this._has_prev_callback.bind(this),
                            on_stream_item_opened: this._on_stream_item_opened.bind(this),
                            on_stream_item_closed: this._on_stream_item_closed.bind(this)
                        };
                        return i.wait_for_load = s.wait_for_load, i.context = _.data("duper-context"), Duperbrowse.open(i, a), !1
                    }
                    return !0
                }
                return s.click_return
            },
            _get_item: function(s) {
                var r = this._resource_stream.contents[s];
                if (this._missing_offsets[s] === !0) return !1;
                if (void 0 === r) return r;
                var _ = e(r[2]);
                if (0 === _.length || _.data("deviation-inactive")) return !1;
                if (_.length && !t.deviantART.deviant.loggedIn) {
                    var i = _.find("a.thumb");
                    if (i.hasClass("antisocial") || i.hasClass("ismature")) return !1
                }
                return {
                    itemid: r[1],
                    stream_offset: s
                }
            },
            _move_stream: function(t, s) {
                this._resource_stream.gs_offset = t, this._resource_stream.domClearAll();
                var r = this._resource_stream.gs_count_per_page;
                e.each(this._missing_offsets, function(e) {
                    s && s.offset_in_range(e) && r--
                }), this._resource_stream.domDrawRange(t, r), this._update_pager(t)
            },
            _update_pager: function(t) {
                this._resource_stream.gmi_args.pager_id && DWait.ready("jms/lib/da.misc.widgets.pager.js", function() {
                    var s = e("#" + this._resource_stream.gmi_args.pager_id).gmi1();
                    s && s.update_to_offset(t)
                }.bind(this))
            },
            _find_next: function(t) {
                for (var s = 1 == t ? this._current_offset + 1 : this._current_offset - 1, r = null, _ = 0; null === r;) {
                    var i = this._get_item(s);
                    void 0 !== i && e.isEmptyObject(i) ? s = 1 == t ? s + 1 : s - 1 : r = i, _++, _ > this._resource_stream.gs_count_per_page && (r = void 0)
                }
                return r
            },
            _find_missing_offsets: function(e) {
                for (var t = e.range_start, s = e.range_end + 1; s > t; t++) void 0 === this._resource_stream.contents[t] && (this._missing_offsets[t] = !0)
            },
            _create_pages_from_overflow: function() {
                var e, t, s = Math.ceil(this._resource_stream.contents.length / this._resource_stream.gs_count_per_page),
                    r = 0;
                for (e = 0; s > e; e++) t = new _(r, r + this._resource_stream.gs_count_per_page, s - 1 > e, e > 0), this._pages[t.id] = t, 0 === r && (this._current_page = t), this._find_missing_offsets(t), r += this._resource_stream.gs_count_per_page
            },
            _next_item_callback: function() {
                var t = this._find_next(!0);
                return void 0 !== t ? e.Deferred().resolve(t).promise() : void 0 === t && this._current_page.has_more && !this.paging_disabled ? this._create_next_item_promise(!1) : e.Deferred().reject(DuperbrowseHelpers.PROMISE_STATE_END_OF_STREAM).promise()
            },
            _prev_item_callback: function() {
                var t = this._find_next(!1);
                return void 0 !== t ? e.Deferred().resolve(t).promise() : void 0 === t && this._current_page.has_less && !this.paging_disabled ? this._create_next_item_promise(!0) : e.Deferred().reject(DuperbrowseHelpers.PROMISE_STATE_END_OF_STREAM).promise()
            },
            _has_next_callback: function() {
                var e = this._find_next(!0);
                return void 0 !== e ? !0 : this._current_page.has_more === !0 ? !0 : !1
            },
            _has_prev_callback: function() {
                var e = this._current_offset - 1;
                if (0 > e) return !1;
                var t = this._find_next(!1);
                return void 0 !== t ? !0 : void 0 === t && this._current_page.has_less ? !0 : !1
            },
            _on_stream_item_opened: function(t) {
                var s, r = !1,
                    _ = this;
                void 0 !== this._get_item(t.stream_offset) ? (s = this._get_item(t.stream_offset), this._current_item = s, this._current_offset = s.stream_offset, e.each(this._pages, function(e, s) {
                    _._current_page && s.id != _._current_page.id && s.offset_in_range(t.stream_offset) && (r = s)
                }), r && (this._move_stream(r.range_start, r), this._current_page = r)) : (this._current_item = null, this._current_offset = null)
            },
            _on_stream_item_closed: function(t) {
                var s = this._resource_stream.contents[t.current_offset];
                if (void 0 !== s) {
                    var r = e(s[2]);
                    0 !== r.length && DuperbrowseHelpers.scroll_to_thumb(r)
                }
            },
            _handle_page_promise: function(e) {
                var t = !1;
                e.total && e.total > this._resource_stream.contents.length && (t = !0), 0 === e.total && e.more === !0 && e.rids.length > 0 && (t = !0);
                var s = new _(e.offset, e.offset + e.count, t, e.offset > 0);
                this._current_page = s, this._pages[s.id] = s, this._find_missing_offsets(s), this._bind_clicks()
            },
            _handle_page_promise_failure: function(e, t) {
                this._move_stream(this._previous_offset, this._current_page), e === DuperbrowseHelpers.PROMISE_STATE_OVERPAGED && (t ? this._current_page.has_less = !1 : this._current_page.has_more = !1, PubSub.publish("Duperbrowse.disable_paddle", t))
            },
            _create_next_item_promise: function(t) {
                var s, r, _ = e.Deferred(),
                    i = !1,
                    a = this,
                    n = this._resource_stream.gs_offset + this._resource_stream.gs_count_per_page;
                return this._previous_offset = this._resource_stream.gs_offset, t && (n = this._resource_stream.gs_offset - this._resource_stream.gs_count_per_page, 0 > n && (n = 0)), this._move_stream(n), this._resource_stream.$.on("dataFetchComplete", function(e, s) {
                    s.status ? 0 === s.rids.length ? _.reject(DuperbrowseHelpers.PROMISE_STATE_OVERPAGED, t) : _.resolve(s) : _.reject("failed to load thumbs")
                }), _.done(a._handle_page_promise.bind(a)).fail(a._handle_page_promise_failure.bind(a)), r = function(t) {
                    return i ? e.Deferred().reject(DuperbrowseHelpers.PROMISE_STATE_CANCELLED).promise() : t.rids[0]
                }, prev_pipe = function(t) {
                    return i ? e.Deferred().reject(DuperbrowseHelpers.PROMISE_STATE_CANCELLED).promise() : t.rids[t.rids.length - 1]
                }, s = e.when(_.promise()).then(t === !0 ? prev_pipe : r), s.cancel = function() {
                    i = !0
                }, s
            },
            _ga_callback: function(t) {
                var s = e(t);
                s.is("a[data-ga_click_event]") || (s = e(t).find("a[data-ga_click_event]"), s.length || (s = e(t).closest("a[data-ga_click_event]")));
                var r = s.data("ga_click_event");
                r && PubSub.publish("DaGa.track_event_no_debounce", r)
            }
        })
    })(jQuery, window), window.DWait && DWait.run("jms/pages/duperbrowse/stream/standard.resource.stream.js")
});
DWait.ready(["jms/lib/gmi.js", "jms/lib/Base.js", "jms/lib/jquery/jquery.current.js", "jms/lib/jquery/plugins/jquery.somedata.js", "jms/pages/duperbrowse/duperbrowse.master.js", "jms/pages/duperbrowse/duperbrowse.helpers.js", "jms/pages/duperbrowse/stream/standard.resource.stream.js"], function() {
    (function(e, r) {
        r.DuperbrowseCropthumbResourceStream = DuperbrowseStandardResourceStream.extend({
            _items: [],
            _current_item: null,
            _current_offset: null,
            constructor: function(e) {
                this._resource_stream = e, this._items = [], this.init_stream()
            },
            init_stream: function() {
                var t = this;
                this._resource_stream.$.find(".tt-crop").each(function(s) {
                    var i = e(this),
                        _ = parseInt(i.attr("collect_rid").split(":")[1], 10),
                        a = {
                            itemid: _,
                            stream_offset: s
                        };
                    (r.deviantART.deviant.loggedIn || !i.hasClass("antisocial") && !i.hasClass("ismature")) && (t._items.push(a), i.on("click.cropthumb", t._open_duperbrowse.bind(t)), i.data(a), DuperbrowseHelpers.cache_dimensions_for_item(i, _), DuperbrowseHelpers.map_url(_, i.find("a").attr("href")))
                })
            },
            _open_duperbrowse: function(t) {
                var s = r.DuperbrowseHelpers.click_handler(t),
                    i = ["itemid", "stream_offset"];
                if (s.open_duperbrowse) {
                    var _ = e(t.currentTarget).someData(i);
                    if (!e.isEmptyObject(_)) {
                        this._ga_callback(t.currentTarget);
                        var a = {
                            next_item_callback: this._next_item_callback.bind(this),
                            prev_item_callback: this._prev_item_callback.bind(this),
                            has_next_callback: this._has_next_callback.bind(this),
                            has_prev_callback: this._has_prev_callback.bind(this),
                            on_stream_item_opened: this._on_stream_item_opened.bind(this)
                        };
                        return _.wait_for_load = s.wait_for_load, Duperbrowse.open(_, a), !1
                    }
                    return !0
                }
                return s.click_return
            },
            _next_item_callback: function() {
                var r = this._current_offset + 1,
                    t = this._items[r];
                return void 0 !== t ? e.Deferred().resolve(t).promise() : e.Deferred().reject(DuperbrowseHelpers.PROMISE_STATE_END_OF_STREAM).promise()
            },
            _prev_item_callback: function() {
                var r = this._current_offset - 1,
                    t = this._items[r];
                return void 0 !== t ? e.Deferred().resolve(t).promise() : e.Deferred().reject(DuperbrowseHelpers.PROMISE_STATE_END_OF_STREAM).promise()
            },
            _has_next_callback: function() {
                var e = this._current_offset + 1;
                return void 0 !== this._items[e] ? !0 : !1
            },
            _has_prev_callback: function() {
                var e = this._current_offset - 1;
                return 0 > e ? !1 : void 0 !== this._items[e] ? !0 : !1
            },
            _on_stream_item_opened: function(e) {
                void 0 !== this._items[e.stream_offset] ? (this._current_item = e, this._current_offset = e.stream_offset) : (this._current_item = null, this._current_offset = null)
            }
        })
    })(jQuery, window), window.DWait && DWait.run("jms/pages/duperbrowse/stream/cropthumb.resource.stream.js")
});
DWait.ready(["jms/lib/jquery/jquery.current.js", "jms/pages/duperbrowse/duperbrowse.helpers.js", "jms/pages/duperbrowse/stream/standard.resource.stream.js"], function() {
    window.DuperbrowseFeedthumbResourceStream = DuperbrowseStandardResourceStream.extend({
        _bind_clicks: function() {
            var e = this;
            this._resource_stream.$.find(".torpedo-thumb").each(function(r) {
                var s = $(this),
                    t = s.attr("collect_rid").split(":");
                s.off("click.duperbrowse").on("click.duperbrowse", e._open_duperbrowse.bind(e)), s.data({
                    itemid: t[1],
                    stream_offset: r,
                    type: t[0]
                }), DuperbrowseHelpers.cache_dimensions_for_item(s, t[1]), DuperbrowseHelpers.map_url(t[1], s.attr("href"))
            })
        }
    }), window.DWait && DWait.run("jms/pages/duperbrowse/stream/feedthumb.resource.stream.js")
});
DWait.ready(["jms/lib/jquery/plugins/jquery.gmi.js", "jms/lib/jquery/jquery.current.js", "jms/chrome/overhead_mouse.js", "jms/lib/pubsub.js", "jms/lib/Base.js"], function() {
    (function(e) {
        var s = Base.extend({
            $menus: null,
            constructor: function() {
                this.$menus = e(".oh-hasmenu"), e(".textbanner-ad").length && this.disable_hover(), PubSub.subscribe([{
                    eventname: "Duperbrowse.opened",
                    subscriber: this,
                    callback: this.disable_hover
                }, {
                    eventname: "Duperbrowse.closed",
                    subscriber: this,
                    callback: this.enable_hover
                }])
            },
            enable_hover: function() {
                OHM.disabled && !e(".textbanner-ad").length && (OHM.disabled = !1, this.$menus.removeClass("oh-nohover"))
            },
            disable_hover: function() {
                OHM.disabled || (OHM.disabled = !0, this.$menus.addClass("oh-nohover"))
            }
        });
        window.deviantART && window.deviantART.deviant && window.deviantART.deviant.loggedIn || new s
    })(jQuery), window.DWait && DWait.run("jms/pages/deviation/dev-page-hover.js")
});
DWait.ready(["jms/lib/jquery/jquery.current.js"], function() {
    (function() {
        var a = function(a) {
            if (DWait) {
                var t = ((a || {}).data || "") + "",
                    e = (a || {}).source;
                DWait.ready("jms/lib/jquery/jquery.current.js", function() {
                    if ("da-dfpib::" == (t + "").substr(0, 10)) try {
                        var a = t.replace("da-dfpib::", "").replace(/;/g, "%3B"),
                            n = (((window.deviantART || {}).pageData || {}).ads || {})._acb,
                            i = (((window.deviantART || {}).pageData || {}).ads || {})._ccb;
                        window.location.hostname.match(/lan$/) && (n = i = $.now()), $("iframe").each(function() {
                            return this.contentWindow == e ? ($(this).attr("src", "http://www.da-ads.com/da_custom.html?cb=" + n + "#;0;dfpib;;" + i + ";0;;;" + escape(a)), !1) : void 0
                        })
                    } catch (d) {}
                })
            }
        };
        try {
            window.postMessage && (window.addEventListener ? window.addEventListener("message", a, !1) : window.attachEvent("onmessage", a))
        } catch (t) {}
    })(), window.DWait && DWait.run("jms/lib/ad_hack_for_dfp.js")
});
DWait.ready(["jms/lib/jquery/jquery.current.js"], function() {
    (function(t) {
        t(function() {
            var e;
            t("body").hasClass("maturehide") && (e = t("#browse2 .tt-ismature, #browse-results .tt-ismature").length) && t("#browse2 .tt-a, #browse-results .tt-a").length == e && t("#maturehider_explanation").show()
        })
    })(jQuery), window.DWait && DWait.run("jms/pages/browsesearch.js")
});
DWait.ready(["jms/lib/jquery/jquery.current.js"], function() {
    (function(e) {
        DWait.init("Browse.sidebar_state", function(s) {
            var i = e(s),
                t = i.closest(".browse-container"),
                a = function(e) {
                    e = !!e, DiFi.pushPost("User", "setBrowseSidebarState", [e], function() {}), DiFi.send()
                },
                o = function() {
                    t.addClass("sidemenu-closed"), i.attr("title", "Click to show the search panel"), a(!0), PubSub.publish("Browse.sidebar_toggle", !1)
                },
                n = function() {
                    t.removeClass("sidemenu-closed"), i.attr("title", ""), a(!1), PubSub.publish("Browse.sidebar_toggle", !0)
                };
            t.find(".state-modifier").on("click", function(e) {
                e.preventDefault(), e.stopPropagation(), t.hasClass("sidemenu-closed") ? (n(), PubSub.publish("DaGa.track_event", {
                    category: "Browse",
                    action: "click_sidebar_open"
                })) : (o(), PubSub.publish("DaGa.track_event", {
                    category: "Browse",
                    action: "click_sidebar_close"
                }))
            }), i.on("click", function() {
                t.hasClass("sidemenu-closed") && n()
            })
        })
    })(jQuery), window.DWait && DWait.run("jms/pages/browse_sidebar.js")
});
DWait.ready(["jms/pages/writeranywhere/types/comment.js", "jms/lib/analytics.js", "jms/pages/ccommentthread.js", "jms/lib/quantcast.js", "jms/lib/jquery/jquery.current.js", "jms/lib/difi.js", "jms/lib/php.js", "jms/lib/dtlocal.js", "jms/pages/lub.js", "jms/legacy/modals.js", "jms/lib/pubsub.js", "jms/lib/browser.js", "jms/lib/glbl.js", "jms/pages/writeranywhere/factory.js", "jms/lib/jquery/jquery.current.js", "jms/lib/bind.js", "jms/lib/ddt.js"], function() {
    DWait.ready("jms/lib/gmi.js", function() {
            window.TalkPostWrapper = GMIBase.extend({
                gmiConstructor: function() {
                    ddt.log("comments", "TalkPost GMI constructor");
                    var e;
                    this.talkpost = new TalkPost(this), this.talkpost.node = this.gmi_node, this.talkpost.comment = this.gmi_args, this.reset = this.talkpost.reset.bind(this.talkpost), this.talkpost.hookDrawingUI(), this.$.data("TalkPost", this.talkpost), this.textarea = this.gmi_node.getElementsByTagName("textarea")[0], e = this.getCacheName(), TalkPostWrapper.textCache[e] && (this.textarea.value = TalkPostWrapper.textCache[e].shift() || ""), this.stdPostHook(), this.refreshTextareaState(), this.setupWriter()
                },
                gmiDestructor: function() {
                    var e;
                    $(document.documentElement).unbind("keydown", this.keypress), this.textarea && (e = this.getCacheName(), TalkPostWrapper.textCache[e] || (TalkPostWrapper.textCache[e] = []), TalkPostWrapper.textCache[e].push(this.textarea.value || "")), this.talkpost.localDestroy()
                },
                setupWriter: function() {
                    this.talkpost.commentwriter || (this.talkpost.commentwriter = window.WriterAnywhereFactory && WriterAnywhereFactory.get(Glbl("Site.is_stash") ? "stashcomment" : this.$.closest(".mczone").length ? "mccomment" : "comment", this.$.find("textarea"), !1), this.talkpost.commentwriter ? (this.$.addClass("ccexpanded"), this.$.find("textarea").addClass("writeranywhere")) : (this.textarea.onfocus = this.textareaFocus.bind(this), this.textarea.onblur = this.textareaBlur.bind(this), $(document.documentElement).bind("keydown", this.keypress = this.keypress.bind(this)), this.talkpost.closeEmptyReplies()))
                },
                previewClick: function() {
                    this.talkpost.confirmPreview()
                },
                sendClick: function() {
                    return window.event && (event.cancelBubble = !0), this.talkpost.confirmPost(), !1
                },
                getCacheName: function() {
                    return [this.gmi_args.typeid || "", this.gmi_args.itemid || "", this.gmi_args.parentid || "", this.gmi_args.time_index || ""].join(":")
                },
                keypress: function(e) {
                    return this.tab_pressed = 9 == e.keyCode, this.textarea_focused && (13 == e.keyCode || 10 == e.keyCode) && (Browser.isMac && e.metaKey && !Browser.isOpera || e.ctrlKey) ? (e.target.blur(), this.sendClick()) : void 0
                },
                setCallback: function(e) {
                    this.talkpost.callback = e
                },
                hookSend: function() {
                    $("input.post[type=submit]", this.talkpost.node).click(function() {
                        return !1
                    })
                },
                stdPostHook: function() {
                    this.setCallback(this.stdPostHookDone.bind(this)), this.hookSend()
                },
                stdPostHookDone: function(e, t) {
                    var i;
                    TalkPostWrapper.one_comment_posted = 1, "posted" == e && (i = (GMI.up(this.gmi_node) || this).gmiQuery("CCommentThread")[0] || GMI.query("CCommentThread")[0], this.reset(!1), this.$.find(".inputs").hide(), i && i.renderNewComment(t, {
                        fast: !0,
                        scroll_to: !0
                    }), PubSub.publish("DaGa.track_event", {
                        category: "Comments",
                        action: "comment_posted",
                        label: "type-" + t.ga_type + "_post-" + t.ga_posttype
                    }), PubSub.publish("Minibrowse.uncache", t.itemid), GMI._delete(this, !0))
                },
                refreshTextareaState: function() {
                    var e;
                    this.textarea_focused || this.writer_focused || this.sidebar_hovered || this.textarea.value || this.talkpost.drawplz_hovered || this.talkpost.commentDrawin || this.talkpost.collection_hovered ? (this.logged_expand || (this.logged_expand = !0), $(".show_collections").unbind("mouseover").mouseover(this.collectionHover.bind(this)), $(".show_collections").unbind("mouseout").mouseout(this.collectionOut.bind(this)), this.$.find(".drawPlz").show(), this.$.find(".inputs").show(), this.$.addClass("ccexpanded"), document.body.scrollTop || document.documentElement.scrollTop || (window.scrollTo ? window.scrollTo(0, 1) : document.body.scrollTop = 1, e = this.$.height() + this.$.offset().top + 10 - $(window).height(), e > 0 && (window.scrollTo ? window.scrollTo(0, e) : document.body.scrollTop = e))) : this.$ && (this.$.removeClass("ccexpanded"), this.$.find(".inputs").hide(), this.$.find(".drawPlz").hide())
                },
                textareaFocus: function() {
                    this.textarea_focused || (this.textarea_focused = 1, $(this.textarea).trigger("focus.writeranywhere")), this.refreshTextareaState()
                },
                textareaBlur: function() {
                    if (!(this.writer_focused || this.sidebar_hovered || this.collection_hovered) && (this.textarea_focused = 0, this.refreshTextareaState(), this.tab_pressed && -1 == document.activeElement.className.indexOf("comment-submit"))) {
                        var e = this.textarea;
                        setTimeout(function() {
                            $(e).closest("form").find(".comment-submit:visible").focus()
                        }, 100)
                    }
                },
                collectionHover: function() {
                    this.collection_hovered = 1
                },
                collectionOut: function() {
                    this.collection_hovered = 0
                }
            }), TalkPostWrapper.textCache = {}
        }), window.show_emoticons_modal = function() {
            var e = $("<div style='width:100%;' />");
            $("<h2>Emoticons</h2>").appendTo(e), $("<iframe style='width:100%; height:450px; border: none; border-bottom: 1px solid #AAB5AB; -webkit-box-shadow: rgba(255,255,255, 0.75) 0px 1px 0px;' frameBorder='0' src='https://comments.deviantart.com/emoticons/' />").appendTo(e);
            var t = Modals.factory(e, {
                cssShadows: !0,
                showCloseButton: !0,
                showButtonsSeparator: !1,
                ignoreinvincible: !0
            });
            return t.addButton("Close", "smbutton-lightgreen", function() {
                return Modals.pop("closed"), !1
            }), Modals.push(t), !1
        }, $(document).on("click", ".show_emoticons_modal", window.show_emoticons_modal), $(document).on("click", ".show_collections", function() {
            return Lub.go(), da_minish_lub.buttonClicked(), !1
        }), window.TalkPost = function(e, t, i, s) {
            var o;
            if (DTLocal.infect(this), "function" != typeof e && (this.owner = e, this.current_mode = "normal", !(window.TalkPostWrapper && e instanceof TalkPostWrapper))) {
                s = s || {}, this.node = !s.use_default_template && $("div.mczone").first().parents("div#output").is(":visible") ? $(this.template_message_center)[0] : $(this.template)[0], $(this.node).find("textarea").addClass("writeranywhere"), this.comment = t, this.callback = i;
                for (o in s || {}) this[o] = s[o];
                this.on()
            }
        }, TalkPost.prototype = {
            debug_label: "TalkPost",
            on: function() {
                ddt.log("comments", "Talkpost On"), $(this.node).data("TalkPost", this), Number(this.comment.parentid) && $(this.node).addClass("talk-post-reply ccexpanded"), this.disable_cancel ? $(".cx", this.node).remove() : this.localEventHook($(".cx", this.node)[0], "click", this.confirmExit.bind(this)), this.no_remove_checkbox && $(".remove_message_box", this.node).remove(), this.localEventHook($(".cancel", this.node)[0], "click", this.confirmCancel.bind(this));
                var e = $(".post", this.node);
                this.localEventHook(e[0], "click", this.confirmPost.bind(this)), this.localEventHook($(e).parent()[0], "keypress", this.confirmPost.bind(this)), this.localEventHook($(".preview", this.node)[0], "click", this.confirmPreview.bind(this)), this.textarea = $("textarea", this.node)[0], this.localEventHook(this.textarea, "keydown", this.textareaKeydown.bind(this)), this.localEventHook(this.textarea, "blur", this.textareaBlur.bind(this)), this.hookDrawingUI(), $(".name", this.node).html(deviantART.deviant && deviantART.deviant.username ? PHP.userlink(deviantART.deviant.username, deviantART.deviant.symbol) + ' - <span class="cclabel">Add a Comment:</span>' : "Your Comment"), $(".avatar", this.node).html(deviantART.deviant && deviantART.deviant.username ? PHP.usericon(deviantART.deviant.username, deviantART.deviant.usericon) : ""), this.edit_mode && $(".name span.cclabel", this.node).text("Edit Comment:"), this.current_mode = "normal", $(".text", this.node).val(this.constructor.localCache[this.getCacheName()] || (this.edit_mode ? this.comment.original : "")), deviantART.deviant && deviantART.deviant.username || (this.node.style.display = "none"), $(this.node).find("textarea").addClass("ccwriter-raisin"), setTimeout(function() {
                    var e = this.auto_activate_writer !== void 0 ? this.auto_activate_writer : !0;
                    this.commentwriter = window.WriterAnywhereFactory && WriterAnywhereFactory.get(Glbl("Site.is_stash") ? "stashcomment" : $(this.node).closest(".mczone").length ? "mccomment" : "comment", $(this.node).find(".writeranywhere"), e, this.force_writer), $(this.node).find(".inputs").show(), this.commentwriter ? $(this.node).find("textarea").addClass("writeranywhere") : (this.closeEmptyReplies(), $(this.node).find("textarea").removeClass("ccwriter-raisin"))
                }.bind(this), 10)
            },
            off: function() {
                var e = !0;
                this.drawPlz_hide(e), $(".cancel", this.node).hide(), this.owner.local && this.owner.localClean(TalkPost)
            },
            closeEmptyReplies: function() {
                var e = this.node;
                $(".talk-post-reply").filter(function() {
                    return !(this == e || $(this).find("textarea").val().length)
                }).each(function(e, t) {
                    $(t).data("TalkPost").off()
                })
            },
            localRecv: function(e) {
                "destroy" == e && (this.constructor.localCache[this.getCacheName()] = $(".text", this.node)[0].value, this.owner.local && (this.local_tie && this.owner.localClean(this.local_tie), this.node.parentNode && this.node.parentNode.removeChild(this.node)))
            },
            getCacheName: function() {
                return [this.edit_mode ? "edit" : "text", Number(this.comment.parentid) || "t", this.comment.time_index || 0, this.comment.typeid || 0, this.comment.itemid || 0].join(":")
            },
            template: '<div class="talk-post" keeper="TalkPost"><a href="#" class="cx">Cancel</a><div class="name"></div><div class="avatar"></div><div class="h"><div class="previewbox" style="display:none"></div><table class="f"><tr><td class="f"><i class="l"></i><textarea class="text" tabindex="4"></textarea></td></tr></table></div><div class="inputs" style="position:relative; text-align: right"><div class="scripted"><a class="smbutton smbutton-pale smbutton-big preview" tabindex="6" href="javascript:void(0)"><span>Preview</span></a><span style="display: inline-block; width: 10px">&nbsp;</span><a class="smbutton smbutton-green comment-submit smbutton-big post" tabindex="5" href="javascript:void(0)"><span class="post">Submit Comment</span></a></div><div class="unscripted"><input class="post" type="submit" value="Send" tabindex="1"></div><div style="position:absolute;left:0;top:0;font-size:8.25pt"></div></div></div>',
            template_message_center: '<div class="talk-post" keeper="TalkPost"><a href="#" class="cx">Cancel</a><div class="name"></div><div class="avatar"></div><div class="h"><div class="previewbox" style="display:none"></div><table class="f"><tr><td class="f"><i class="l"></i><textarea class="text" tabindex="4"></textarea></td></tr></table></div><div class="inputs" style="position:relative; text-align: right"><div class="scripted"><a class="smbutton smbutton-pale smbutton-big preview" tabindex="6" href="javascript:void(0)"><span>Preview</span></a><span style="display: inline-block; width: 10px">&nbsp;</span><a class="smbutton smbutton-green smbutton-big" tabindex="5" href="javascript:void(0)"><span class="post">Submit Comment</span></a></div><div class="unscripted"><input class="post" type="submit" value="Send" tabindex="1"></div><div class="remove_message_box"><br><input type="checkbox" id="remove_message_after_reply" value="1" checked><label for="remove_message_after_reply">Remove this message after I reply</label></div></div></div>',
            nodeMap: {
                files: {
                    get: function() {
                        return $("div.talk-files", this.node)[0]
                    }
                }
            },
            getText: function() {
                return $("textarea.text", this.node).val()
            },
            getTextToSave: function() {
                var e = this.getText();
                if (!$("textarea.text", this.node).attr("writer")) return e;
                var t = document.createElement("div");
                if (t.innerHTML = e, e.length > t.innerHTML.length) return e;
                var i = [".embedded-deviation", ".shadow-holder", ".writer-embed", "da\\:deviation", "da\\:thumb", "da\\:drawing"];
                return $(t).find($.map(i, function(e) {
                    return "span>" + e
                }).join(",")).not(function() {
                    return $(this).siblings().length || $(this).parent("[align]").length
                }).unwrap(), $(t).find($.map(i, function(e) {
                    return "div>" + e
                }).join(",")).not(function() {
                    return $(this).siblings(":not(br)").length || $(this).parent("[align]").length
                }).unwrap(), t.innerHTML.replace(/&amp;([^\s;]+?);/gi, "&$1;")
            },
            setPreviewText: function(e) {
                $(".previewbox", this.node).html(['<i class="l"></i>', '<a class="previewclose">Close Preview</a>', '<div class="previewbox-content">', e, "</div>"].join("")), $(".previewbox .previewclose", this.node).on("click", function() {
                    this.goMode("normal", !0)
                }.bind(this));
                var t = $(".previewbox .previewbox-content", this.node),
                    i = 0;
                t.height($(".previewbox", this.node).height() - 16), t.children().each(function() {
                    i += $(this).height()
                }), i > t.height() && $(".previewbox", this.node).addClass("in-scroll")
            },
            focus: function() {
                "normal" == this.current_mode && $(".text", this.node)[0].focus()
            },
            textareaKeydown: function(e) {
                this.tab_pressed = 9 == e.keyCode
            },
            textareaBlur: function() {
                if (this.tab_pressed && -1 == document.activeElement.className.indexOf("post")) {
                    var e = this.textarea;
                    setTimeout(function() {
                        $(e).closest(".talk-post").find(".post:visible").parent().focus()
                    }, 100)
                }
            },
            current_mode: null,
            goMode: function(e, t) {
                if (e != this.current_mode) {
                    var i = $(this.node);
                    switch (this.current_mode = e, e) {
                        case "busy":
                        case "muro_saving":
                            i.find(".text, .preview, .post").attr("disabled", "disabled"), i.find(".preview, .post").addClass("disabledbutton"), i.find(".inputblocker").css({
                                visibility: "hidden",
                                display: "block"
                            });
                            var s = this.commentwriter ? i.find(".cctextarea") : i.find(".text");
                            i.find(".inputblocker").css({
                                height: s.outerHeight(),
                                width: s.outerWidth()
                            }), i.find(".inputblocker").css("visibility", "visible");
                            break;
                        case "normal":
                            i.find(".text, .preview, .post").removeAttr("disabled"), i.find(".preview span, span.preview").val("Preview").html("Preview"), i.find(".preview, .post").removeClass("disabledbutton"), i.removeClass("ccwriter-preview").find(".previewbox").hide(), i.find(".text").css("visibility", "visible"), t !== !1 && i.find(".text").trigger("focus.talkpost"), this.commentwriter && ($(".commentwriter-toolbar .commentwriter-preview em").text("Preview"), i.find(".drawPlz").show(), t !== !1 && (this.commentwriter.active ? this.commentwriter.ccwriter.writer.$node.trigger("focus.talkpost") : this.commentwriter.attach(i.find("textarea"), !0))), i.find(".inputblocker").hide();
                            break;
                        case "preview":
                            i.find(".preview, .post").removeAttr("disabled").removeClass("disabledbutton"), i.find(".previewbox").css({
                                visibility: "hidden",
                                display: "block"
                            }), this.commentwriter ? ($(".commentwriter-toolbar .commentwriter-preview em").text("Edit"), i.find(".preview span, span.preview").val("Edit").html("Edit").removeAttr("disabled"), i.addClass("ccwriter-preview").find(".previewbox").css({
                                height: i.find(".cctextarea").outerHeight()
                            })) : (i.find(".preview span, span.preview").val("Preview Off").html("Preview Off").removeAttr("disabled"), i.find(".previewbox").css({
                                height: i.find(".text").outerHeight(),
                                width: i.find(".text").outerWidth()
                            })), i.find(".text").css("visibility", "hidden"), i.find(".previewbox").css("visibility", "visible");
                            break;
                        case "fail":
                            DiFi.stdErr(null, this.last_fail_reason), this.goMode("normal")
                    }
                }
            },
            showCancel: function() {
                $(".cancel", this.node).show()
            },
            confirmCancel: function() {
                return $(".cancel", this.node).hide(), PubSub.publish("WriterAnywhere.collapse"), !1
            },
            confirmExit: function() {
                return this.callback && this.callback("closed"), this.commentwriter && this.commentwriter.active ? this.commentwriter.detach(!0).done(function() {
                    this.commentwriter = null, this.off()
                }.bind(this)) : this.off(), !1
            },
            confirmPost: function(e) {
                if (window.event && (event.cancelBubble = !0), "busy" != this.current_mode && (void 0 === e || "keypress" !== e.type || 13 === e.keyCode)) {
                    var t, i, s, o;
                    if (-1 == this.getText().search(/[^\s]/g)) return this.focus(), !1;
                    if (this.drawplz_saving > 0) {
                        if ("muro_saving" == this.current_mode) return;
                        this.goMode("muro_saving");
                        var n = setInterval(function() {
                            this.drawplz_saving > 0 || (this.confirmPost(), clearInterval(n))
                        }.bind(this), 100)
                    } else {
                        if (this.goMode("busy"), t = 0, i = 0, this.exo_files ? (this.exo_files[0] && this.exo_files[0].file && (t = this.exo_files[0].file.deckId), this.exo_files[1] && this.exo_files[1].file && (i = this.exo_files[1].file.deckId)) : $(".talk-files", this.node)[0] && (s = $(".talk-files a", this.node), t = Number(s[0].getAttribute("attachdeckid") || 0), i = Number(s[1].getAttribute("attachdeckid") || 0)), this.edit_mode) DiFi.pushPost("Comments", "edit", [this.getTextToSave(), this.comment.itemid, this.comment.parentid, this.comment.typeid], this.posted, this);
                        else if (this.comment.time_index || t || i) DiFi.pushPost("Comments", "filmPost", [this.getTextToSave(), this.comment.itemid, this.comment.parentid || 0, this.comment.typeid, this.comment.ownerid || 0, this.comment.time_index || 0], this.posted, this);
                        else if (o = GMI.up(this.node, "CCommentThread"), o && o.rcpStallQueue && o.rcpStallQueue(!0), deviantART.pageData.messages) {
                            var a = [this.getTextToSave(), this.comment.itemid, this.comment.parentid || 0, this.comment.typeid, this.comment.ownerid || 0, $("#remove_message_after_reply").prop("checked") ? 1 : 0];
                            DiFi.pushPost("Comments", "post_from_messagecenter", a, this.posted, this)
                        } else 61 == this.comment.typeid && Glbl("Site.is_stash") && PubSub.publish("Minibrowse.uncache", deviantART.pageData.privateid), DiFi.pushPost("Comments", "post", [this.getTextToSave(), this.comment.itemid, this.comment.parentid || 0, this.comment.typeid, this.comment.ownerid || 0], this.posted, this);
                        DiFi.send()
                    }
                }
            },
            confirmPreview: function() {
                return window.event && (event.cancelBubble = !0), $(this.node).find(".commentwriter-toolbar .commentwriter-preview").toggleClass("active"), "preview" == this.current_mode ? (this.goMode("normal", !0), void 0) : (this.setPreviewText("Loading preview"), previewHasThumbs = 1, this.commentwriter ? DiFi.pushPost("Comments", "preview_v2", [this.getTextToSave(), previewHasThumbs, this.comment.typeid, this.comment.itemid], this.preview, this) : DiFi.pushPost("Comments", "preview", [this.getTextToSave(), previewHasThumbs], this.preview, this), DiFi.send(), this.goMode("preview"), void 0)
            },
            preview: function(e, t) {
                return e ? (this.setPreviewText(t.response.content), void 0) : ("preview" == this.current_mode && (this.goMode("normal"), this.setPreviewText("")), void 0)
            },
            posted: function(e, t, i) {
                var s, o;
                if (threadGMI = $(this.node).parents(":gmi(CCommentThread)"), threadGMI.length && (thread = threadGMI.gmi1(), thread && thread.rcpStallQueue && (e && (thread.recently_rendered[t.response.content.commentid] = 1), thread.rcpStallQueue(!1))), !e) return this.last_fail_reason = "string" == typeof(t.response.content || {}).error ? t.response.content.error : "There was an error while posting the comment.\n\nPlease try again soon.", this.goMode(i ? "normal" : "fail"), void 0;
                s = t.response.content, o = {
                    commentid: s.id,
                    parentid: this.comment.parentid,
                    typeid: this.comment.typeid,
                    ga_type: t.response.content.ga_type,
                    ga_posttype: t.response.content.ga_posttype,
                    itemid: this.comment.itemid,
                    ownerid: this.comment.ownerid,
                    username: deviantART.deviant.username,
                    symbol: deviantART.deviant.symbol,
                    usericon: deviantART.deviant.usericon,
                    ts: Math.floor((new Date).valueOf() / 1e3),
                    attributes: t.request.args[5] << 16 | t.request.args[4] << 3,
                    depth: void 0,
                    text: s.body,
                    signature: null,
                    files: s.files,
                    html: s.html
                };
                try {
                    HALT()
                } catch (n) {}
                this.constructor.localCache[this.getCacheName()] = null, $(".text", this.node)[0].value = "", this.callback && this.callback("posted", o), this.commentwriter && this.commentwriter.active ? (this.commentwriter.ccwriter.writer.syncer.sync(!0), this.commentwriter.detach(!0).done(function() {
                    this.commentwriter = null, this.owner ? this.off() : $(".inputs", this.node).hide()
                }.bind(this))) : this.owner && this.off(), PubSub.publish("Comments.posted", {
                    comment: o
                })
            },
            reset: function(e) {
                var t;
                if (this.goMode("normal", e), $("textarea", this.node).val(""), this.owner && (this.owner.textarea_focused = 0, this.owner.refreshTextareaState()), this.exo_files)
                    for (t = 0; t != this.exo_files.length; t++) this.exo_files[t] && this.exo_files[t].file && this.exo_files[t].deckNuke()
            },
            browserSupportsCommentDrawings: function() {
                return !Browser.isIE8
            },
            hookDrawingUI: function() {
                var e = this.comment.allowdrawings && this.browserSupportsCommentDrawings();
                if (e) {
                    if (!$(".showDrawPlz", this.node).length)
                        if ($(".drawPlz", this.node).length) $(".drawPlz .topbar", this.node).append('<a href="#showDrawPlz" class="showDrawPlz">Add a Drawing</a>');
                        else {
                            var t = '<div class="drawPlz"><div class="topbar hh"><a href="#showDrawPlz" class="showDrawPlz">Add a Drawing</a></div></div>',
                                i = jQuery("textarea", this.node),
                                s = -1 != (" " + this.node.className + " ").indexOf(" talk-post-reply ");
                            s ? (t = '<tr><td colspan="2">' + t + "</td></tr>", i.closest("tr").after(jQuery(t))) : jQuery(".cctextarea", this.node).append(jQuery(t))
                        } $(this.node).on("click", ".hideDrawPlz, .hideDrawing", this.drawPlz_hide.bind(this)), this.drawplz_saving = this.drawplz_saving || 0;
                    var o = $(".showDrawPlz", this.node)[0];
                    this.localEventHook(o, "mouseover", this.drawPlz_mouseover.bind(this)), this.localEventHook(o, "mouseout", this.drawPlz_mouseout.bind(this))
                }
            },
            drawPlz_hide: function() {
                this.drawplz_hovered = 0
            },
            drawPlz_mouseover: function() {
                this.drawplz_hovered = 1
            },
            drawPlz_mouseout: function() {
                this.drawplz_hovered = 0
            }
        },
        function(e) {
            Browser.isMobile || Glbl("Site.is_mobile") || e(document).one("mouseover.ccwriter", ".talk-tower", function() {
                DWait.ready(["cssms/lib/writer.css", "cssms/lib/writer-subtoolbar.css", "jms/lib/writer/factory.js", "jms/lib/sidebar.js"], function() {
                    ddt.log("writer", "CommentWriter preloaded")
                })
            }).one("focus.ccwriter", ".talk-tower textarea", function(t) {
                this.nodeName && t.type && "focusin" == t.type && e(this).closest(":gmi(TalkPostWrapper)").gmiWake()
            })
        }(jQuery), window.DWait && DWait.run("jms/pages/talkpost.js")
});
DWait.ready([".domready", "jms/lib/bind.js", "jms/lib/jquery/jquery.current.js", "jms/lib/browser.js", "jms/lib/gwebpage.js", "jms/lib/difi.js", "jms/lib/popup2.js", "jms/lib/pubsub.js"], function() {
    (function(i) {
        window.GiveMenu = {
            show: function(e, n, s) {
                popup = new Popup2("GiveMenu", "body", {
                    classes: "givemenu",
                    content: '<div class="pager2"><div class="blockmenu"><div class="loading">Loading</div></div></div>',
                    destroy: !0
                }), popup.show(popup.position(i(e), {
                    align: "right",
                    bump: {
                        left: 15
                    }
                })), this.receiver = n, DiFi.pushPublicGet("User", "getGiveMenu", [n], this.difiCallback.bind(this, e, popup, s)), DiFi.send()
            },
            difiCallback: function(e, n, s, t, o, l) {
                if (!t || !o.response.content.html) return l ? null : DiFi.stdErr("Failed to load give menu", o.response.content);
                gWebPage.update(o.response.content), s = s || {};
                var a = i(o.response.content.html),
                    u = this,
                    c = function(i) {
                        return s.clickCallback ? s.clickCallback.bind(this, i) : i
                    };
                a.on("click.givemenu", "a.morelink", function() {
                    a.find(i(this).attr("rel")).show(), i(this).remove(), u.heightCalc(n)
                }).on("click.givemenu", "a.givecore", c(this.onMenuLinkClick)).on("click.givemenu", "a.givepoints", c(this.onPointsClick)).on("click.givemenu", "a.givellama", c(this.onLlamaClick.bind(this))).on("click.givemenu", "a.givecake", c(this.onCakeClick.bind(this))).on("click.givemenu", "a.wishlist", c(this.onMenuLinkClick)), s.displayCallback && s.displayCallback(a), setTimeout(this.actualDisplay.bind(this, a, e, n), 50)
            },
            actualDisplay: function(i, e, n) {
                n.$node.html(i.show()), this.heightCalc(n)
            },
            heightCalc: function(i) {
                i.$node.height(i.$node.find("div.blockmenu").height() + (Browser.isIE ? 4 : 0))
            },
            onMenuLinkClick: function(i) {
                Popup2.hideAll(), i.stopPropagation()
            },
            onPointsClick: function(e) {
                return Points.buildModal(i(e.currentTarget).closest(".givemenu").data("username")), Popup2.hideAll(), !1
            },
            onLlamaClick: function(e) {
                return Badges.buildModal("llama", i(e.currentTarget).closest(".givemenu").data("userid"), 0, this.receiver), Popup2.hideAll(), !1
            },
            onCakeClick: function(e) {
                return Badges.buildModal("cake", i(e.currentTarget).closest(".givemenu").data("userid"), 0, this.receiver), Popup2.hideAll(), !1
            }
        }, PubSub.subscribe({
            eventname: "GiveMenu.show",
            subscriber: GiveMenu,
            callback: function(i, e) {
                GiveMenu.show(e.node, e.username, e.options)
            }
        })
    })(jQuery), window.DWait && DWait.run("jms/pages/givemenu.js")
});
DWait.ready(["jms/lib/gmi.js", "jms/lib/pubsub.js", "jms/lib/image_lazy_load.js"], function() {
    window.CCommentThread = CCommentThread = GMIBase.extend({
        gmiConstructor: function() {
            PubSub.publish("ImageLazyLoad.activate"), this.scrollHandler = function() {
                PubSub.publish("ImageLazyLoad.delayedUpdate")
            }, $("#output, .bubbleview").on("scroll", this.scrollHandler)
        },
        gmiDestructor: function() {
            $("#output, .bubbleview").off("scroll", this.scrollHandler)
        },
        DR_SEL: "span.drawplz.closed",
        HT_SEL: "span.thumb-attachment.closed",
        B_SEL: "div.drawplz-attachment-ctrl",
        recently_rendered: {},
        toggleAttachmentButton: function() {
            (this.$.parent().find(this.DR_SEL).length || this.$.parent().find(this.HT_SEL).length) && this.$.parent().find(this.B_SEL).show().find(".gmbutton2").click(this.clickAttachmentButton.bind(this))
        },
        clickAttachmentButton: function() {
            return this.$.parent().find(this.B_SEL).hide(), this.$.parent().find(this.DR_SEL).removeClass("closed").unbind("click").removeClass("dwait"), this.$.parent().find(this.HT_SEL).each(function() {
                $(this).removeClass("closed").unbind("click").removeClass("dwait").next(".shadow-holder, .embedded-deviation").show(), $(this).next("a.thumb-attachment-content").replaceWith(function() {
                    return $(this).data("html")
                })
            }), PubSub.publish("ImageLazyLoad.delayedUpdate"), !1
        },
        renderNewComment: function(t, e) {
            var i, n, o;
            ddt.log("comments", "renderNewComment", t, e), this.recently_rendered[t.commentid] = 1, this.gmi_node.firstChild && (this.gmi_node.firstChild.className || "").indexOf("expendable") >= 0 && (this.gmi_node.innerHTML = ""), o = Number(t.parentid);
            var a = [];
            if (o && o != this.gmi_args.rootid ? $.each(this.gmiQuery("CComment", {
                    match: {
                        commentid: t.parentid
                    }
                }), function(t, e) {
                    i = e.gmi_node, i && (i = $(i.nextSibling).hasClass("nest") ? i.nextSibling : $('<div class="nest"></div>').insertAfter(i)[0]), a.push(i)
                }) : $.each(GMI.query("CCommentThread"), function(e, n) {
                    t.itemid == n.gmi_args.itemid && t.typeid == n.gmi_args.typeid && (i = n.gmi_node, a.push(i))
                }), a.length) {
                var s = this;
                $.each(a, function(e, i) {
                    n = $($.trim(t.html)).hide()[2 == Number(s.gmi_args.order) ? "prependTo" : "appendTo"](i).fadeIn(400).gmiWake()[0]
                })
            } else ddt.log("comments", "Skipped comment rendering; parent is out of view");
            return n && e.scroll_to && setTimeout(function() {
                var t = $(n).offset().top,
                    e = t + $(n).height(),
                    i = $(document).scrollTop(),
                    o = i + $(window).height();
                ddt.log("comments", t, e, i, o, i > t, e > o), (i > t || e > o) && (window.scrollTo ? window.scrollTo(0, t - 30) : document.body.scrollTop = t - 30)
            }, 100), n
        }
    }), window.CCommentMaster = CCommentMaster = GMIBase.extend({
        gmiConstructor: function() {}
    }), DWait.init("ccommentthread_wake_and_click", function(t) {
        $(t).gmiWake().gmiEach(function() {
            this.clickAttachmentButton()
        })
    }), DWait.init("ccommentthread_wake_and_toggle", function(t) {
        $(t).gmiWake().gmiEach(function() {
            this.toggleAttachmentButton()
        })
    }), window.DWait && DWait.run("jms/pages/ccommentthread.js")
});
DWait.ready(["jms/lib/gmi.js", "jms/lib/dtlocal.js", "jms/lib/popup2.js", "jms/pages/ccommentthread.js", "jms/lib/analytics.js", "jms/lib/jquery/plugins/jquery.imagesloaded.js", "jms/lib/pubsub.js", "jms/lib/image_lazy_load.js"], function() {
    window.CComment = CComment = GMIBase.extend({
        gmiConstructor: function() {
            DTLocal.infect(this), this.permahidden = this.gmi_args.permahidden, this.$.find("span.drawplz.closed").click(this.specialAttachmentClick), this.$.find("span.thumb-attachment.closed").each(function() {
                $(this).show().next(".shadow-holder, .embedded-deviation").hide(), $(this).hasClass("show-image-thumbs") && this.addEventListener && this.addEventListener("click", function(t) {
                    var e = $(this);
                    return e.hasClass("no-after") || (e.addClass("no-after"), e.children("img").each(function(e, i) {
                        var a = i,
                            s = {
                                top: 0,
                                left: 0
                            },
                            n = {
                                width: i.offsetWidth,
                                height: i.offsetHeight
                            };
                        do s.top += a.offsetTop, s.left += a.offsetLeft; while (a = a.offsetParent);
                        t.pageX >= s.left && s.left + n.width >= t.pageX && t.pageY >= s.top && s.top + n.height >= t.pageY && (t.stopImmediatePropagation(), $(i).trigger(new $.Event("click")))
                    })), !1
                }, !0)
            }), this.$.find("span.thumb-attachment.closed").on("click", this.thumbAttachmentClick), this.groupAttachmentButtons(), this.featured = this.$.hasClass("ccomment-featured"), PubSub.publish("ImageLazyLoad.activate"), PubSub.publish("ImageLazyLoad.delayedUpdate")
        },
        gmiDestructor: function() {
            this.localDestroy()
        },
        groupAttachmentButtons: function() {
            $(".thumb-attachment.closed.show-image-thumbs", this.$).each(function() {
                for (var t = $(this), e = this, i = []; e = e.previousSibling;)
                    if (3 == e.nodeType && (e.textContent || e.nodeValue).match(/^\s+$/) || "BR" == e.nodeName) i.unshift(e);
                    else if (!$(e).is(".thumb-attachment-content")) {
                    if ($(e).is(".thumb-attachment")) break;
                    return
                }
                if (e) {
                    var a = $(e);
                    if ("none" == a.css("display") || $("img", e).length >= 5) t.css("display", "none"), $("img", e).length >= 5 && !a.hasClass("contains-more-thumbs") && a.addClass("contains-more-thumbs");
                    else {
                        for (var s = "", n = 0; i.length > n; n++) s += 3 == i[n].nodeType ? i[n].textContent || i[n].nodeValue : i[n].outerHTML, this.parentNode.removeChild(i[n]);
                        a.append($("img", t)), a.next("a.thumb-attachment-content").data({
                            html: a.next("a.thumb-attachment-content").data("html") + s + t.next("a.thumb-attachment-content").data("html")
                        }), t.next("a.thumb-attachment-content").add(t).remove()
                    }
                }
            }), Glbl("Site.is_stash") && this.$.find("span.thumb-attachment.closed").filter(function() {
                return !$(this).closest("a").length
            }).click()
        },
        replyClick: function() {
            return window.event && (event.cancelBubble = !0), this.local.talkpost ? (this.local.talkpost.focus(), !1) : (this.createEditor(this.replyCallback.bind(this), !0, {}, {
                use_default_template: !0
            }), !1)
        },
        createEditor: function(t, e, i, a) {
            var s, n, o, l;
            s = $('<div><div class="ccomment ccomment-post ch"><i class="tl c"><i></i><b></b></i><i class="tr c"><i></i><b></b></i><i class="bl c"><i></i><b></b></i><i class="br c"><i></i><b></b></i><div class="ch-ctrl"></div></div></div>'), s.toggleClass("nest", e), o = {
                typeid: this.gmi_args.typeid || -1,
                itemid: this.gmi_args.itemid || -1,
                parentid: this.gmi_args.commentid,
                allowdrawings: this.gmi_args.allowdrawings
            }, $.extend(o, i), l = {
                pager_theme: "light",
                show_icon: !0
            }, $.extend(l, a), this.local.talkpostnode = s[0], this.local.talkpost = n = new TalkPost(this, o, t, l), n.local_tie = "talkpostnode", s.find(".ch-ctrl").first().append(n.node), s.insertAfter(this.$), n.focus(), this.logged_expand || (this.logged_expand = !0)
        },
        replyCallback: function(t, e) {
            if (this.local.talkpost) switch (t) {
                case "posted":
                    this.callback_post && this.callback_post(e), this.local.talkpost.local_tie = null, this.localClean(TalkPost), this.local.talkpostnode.parentNode.removeChild(this.local.talkpostnode);
                    var i = this.gmiUp("CCommentThread");
                    i || (i = GMI.query("CCommentThread")[0]), i && !i.renderNewComment(e, {
                        fast: !0,
                        scroll_to: !0
                    }), this.local.talkpostnode = null, PubSub.publish("DaGa.track_event", {
                        category: "Comments",
                        action: "comment_posted",
                        label: "type-" + e.ga_type + "_post-" + e.ga_posttype
                    });
                case "closed":
                    this.gmi_node.className = this.gmi_node.className.replace(/\bactivereply\b/g, "")
            }
        },
        editClick: function() {
            return this.loading ? !1 : (this.local.talkpost && (this.local.talkpost.local_tie = null, this.localClean(TalkPost), this.local.talkpostnode.parentNode.removeChild(this.local.talkpostnode), this.local.talkpostnode = null), this.loading = !0, this.$.addClass("ccomment-loading"), DiFi.pushPost("Comments", "getEditBody", [this.gmi_args.itemid, this.gmi_args.commentid, this.gmi_args.typeid], this.editLoaded.bind(this)), DiFi.timer(1), !1)
        },
        editLoaded: function(t, e) {
            return this.loading = !1, this.$.removeClass("ccomment-loading"), t ? (this.createEditor(this.editCallback.bind(this), !1, {
                original: e.response.content
            }, {
                edit_mode: !0,
                use_default_template: !0
            }), this.$.hide(), void 0) : (alert("There was an error while loading the comment editor.\n\nPlease try again soon."), void 0)
        },
        editCallback: function(t, e) {
            if (this.local.talkpost) {
                if ("posted" === t) {
                    this.callback_post && this.callback_post(e);
                    var i = this.$.find("h4");
                    this.$.html($(e.html).html()), this.$.find(".text").prepend(i), this.local.talkpost.local_tie = null, this.localClean(TalkPost), this.local.talkpostnode.parentNode.removeChild(this.local.talkpostnode), this.local.talkpostnode = null, PubSub.publish("DaGa.track_event", {
                        category: "Comments",
                        action: "comment_edited",
                        label: "type-" + e.ga_type
                    })
                }
                this.$.show()
            }
        },
        unhideClick: function() {
            return this.permahidden ? this.setHideState(!1) : this.difi("unhide", "displaying this comment"), window.event && (event.cancelBubble = !0), !1
        },
        hideClick: function() {
            this.permahidden ? this.setHideState(!0) : this.difi("hide", "hiding this comment")
        },
        reportClick: function() {
            this.permahidden ? alert("This comment has already been reported.") : !this.loading && confirm("Report this comment as spam?") && this.difi("reportSpam", "reporting this comment as spam")
        },
        featureClick: function() {
            this.featured ? alert("This comment has already been featured.") : this.loading || this.difi("feature", "featuring this comment")
        },
        unfeatureClick: function() {
            this.featured ? this.loading || this.difi("unfeature", "unfeaturing this comment") : alert("This comment is not featured.")
        },
        doPopup: function(t, e, i) {
            var a, s, n = $('<div style="position:relative">'),
                o = function(t, e) {
                    n.append('<a class="f" href="#" onclick="GMI.up(this).' + t + '();Popup2.hideAll(); return GMI.evCancel();">' + e + "</a>")
                };
            return this.gmi_args.allowfeature && (this.featured ? o("unfeatureClick", "Unfeature Comment") : o("featureClick", "Feature Comment")), t && this.gmi_args.editable && o("editClick", "Edit Comment"), (t || e) && o("hideClick", "Hide Comment"), e && t === !1 && o("blockClick", "Block User"), i && !t && o("reportClick", "Report Spam"), a = $('<div class="blockmenu">').append(n), s = $(this.gmi_node).find(".gm-chaos"), CComment.popup = new Popup2("GroupListManage", "body", {
                classes: "ccomment-manage",
                content: a.get(0),
                destroy: !0,
                created: function(t) {
                    t.$node.attr("gmi-redirect", this.gmi_node.getAttribute("gmindex"))
                }.bind(this),
                hidden: function() {
                    s.find(".gmbutton2").removeClass("active")
                },
                shown: function() {
                    s.find(".gmbutton2").addClass("active")
                }
            }), CComment.popup.show(CComment.popup.position(s, {
                align: "right"
            })), !1
        },
        blockClick: function() {
            a = $("a.u", this.gmi_node)[0], author = a.firstChild.nodeValue, confirm("Add " + author + " to your blocked users list?") && (DiFi.pushPost("User", "block", [author], function(t, e) {
                t ? alert(author + " has been added to your list of blocked users.") : e.response.content.error ? alert(e.response.content.error) : alert("DeviantArt was unable to add " + author + " to your blocked users list.")
            }), DiFi.send())
        },
        specialAttachmentClick: function() {
            $(this).removeClass("closed").unbind("click").removeClass("dwait"), PubSub.publish("ImageLazyLoad.update")
        },
        thumbAttachmentClick: function(t) {
            var e = null,
                i = $(t.target),
                a = $.Deferred();
            i.is("img") && (e = i.data("deviationid")), $(this).closest(".ccomment").find(".thumb-attachment.closed").each(function() {
                $(this).removeClass("closed").unbind("click").removeClass("dwait").next(".shadow-holder, .embedded-deviation").show(), $(this).next("a.thumb-attachment-content").replaceWith(function() {
                    return $(this).data("html")
                })
            }).end().imagesLoaded().done(function() {
                a.resolve()
            }), PubSub.publish("ImageLazyLoad.delayedUpdate"), setTimeout(function() {
                "resolved" != a.state() && a.reject()
            }, 1e3), a.done(function() {
                if (e) {
                    var t = $("[data-embed-id=" + e + "]", this.$).not("img");
                    if (t.length) {
                        var i = $(window).scrollTop(),
                            a = $(window).height(),
                            s = t.offset().top,
                            n = t.height();
                        (i > s + n || s > i + a) && $("html, body").animate({
                            scrollTop: s - 25
                        }, 200)
                    }
                }
            }.bind(this))
        },
        difi: function(t, e) {
            this.loading || (this.loading = !0, this.gmi_node.className += " ccomment-loading", DiFi.pushPost("CommentAttributes", t, [this.gmi_args.commentid, this.gmi_args.itemid, this.gmi_args.typeid], this.difiDone.bind(this, e)), DiFi.timer(1))
        },
        difiDone: function(t, e, i) {
            if (this.gmi_node.className = this.gmi_node.className.replace(/\bccomment.loading\b/g, ""), this.loading = !1, !e) return alert("There was an error while " + t + ".\n\nPlease try again soon."), void 0;
            switch (i.request.method) {
                case "reportSpam":
                    if (this.permahidden = !0, !CComment.SPAM_REPORT_DONE) {
                        var a, s;
                        CComment.SPAM_REPORT_DONE = !0, a = $("a.u", this.gmi_node)[0], s = a.firstChild.nodeValue, i.response.content.can_report_all && s && confirm("Would you also like to scan for comments by " + s + " on your user page, deviations, journals, etc.?") ? (DiFi.pushPost("CommentAttributes", "removeSpamOnUser", [s], function(t) {
                            t ? alert("The process of removing spam from your user page, deviations, journals, etc., has started.\nYou will be notified with a note once this is complete.") : alert("DeviantArt was unable to start the process of removing all spam by this user.\nWe appreciate your effort, and ask you to please try again shortly.")
                        }), DiFi.timer(1)) : alert("Thank you for your report.")
                    }
                case "hide":
                    this.makeUnhideLink(), this.setHideState(!0), PubSub.publish("DaGa.track_event", {
                        category: "Comments",
                        action: "comment_hidden",
                        label: "type-" + i.response.content.ga_type + "_hiddenby-" + i.response.content.ga_role
                    });
                    break;
                case "unhide":
                    this.setHideState(!1), PubSub.publish("DaGa.track_event", {
                        category: "Comments",
                        action: "comment_unhidden",
                        label: "type-" + i.response.content.ga_type + "_unhiddenby-" + i.response.content.ga_role
                    });
                    break;
                case "feature":
                    this.setFeaturedState(!0), PubSub.publish("DaGa.track_event", {
                        category: "Comments",
                        action: "comment_featured",
                        label: "type-" + i.response.content.ga_type + "_featuredby-" + i.response.content.ga_role
                    });
                    break;
                case "unfeature":
                    this.setFeaturedState(!1), PubSub.publish("DaGa.track_event", {
                        category: "Comments",
                        action: "comment_unfeatured",
                        label: "type-" + i.response.content.ga_type + "_unfeaturedby-" + i.response.content.ga_role
                    })
            }
        },
        makeUnhideLink: function() {
            var t, e;
            t = (this.gmi_node.getElementsByTagName("a") || [])[0], t && "creason" == t.className || (t = document.createElement("a"), t.onclick = this.unhideClick.bind(this), t.href = "#", t.className = "creason", e = this.gmi_node.getElementsByTagName("div")[0], e.insertBefore(t, e.firstChild)), t.innerHTML = "<span>" + (this.permahidden ? "Flagged as Spam" : "Hidden by " + this.gmi_args.hidetext) + "</span><em>" + (this.permahidden ? "Peek" : "Undo Hide") + "</em>"
        },
        setHideState: function(t) {
            t ? this.gmi_node.className += " ccomment-hidden" : this.gmi_node.className = this.gmi_node.className.replace(/\bccomment.hidden\b/g, ""), PubSub.publish("ImageLazyLoad.update")
        },
        setFeaturedState: function(t) {
            this.featured = t, this.$.toggleClass("ccomment-featured", t)
        }
    }), window.DWait && DWait.run("jms/pages/ccomment.js")
});
DWait.ready(["jms/lib/jquery/jquery.current.js", "jms/lib/gstream/resource_stream.js"], function() {
    window.TabledResourceStream = ResourceStream.extend({
        domFindVisible: function() {
            var e, t, r, i;
            t = {}, i = 0;
            var o = $(this.gmi_node).find(".tt-a, .rs-customicon-cont, .gl-text");
            for (e = 0; r = o[e]; e++) r.getAttribute("rs_ignore") || (t[i++ + this.gs_offset] = r);
            return t
        },
        dataFetch: function() {},
        gmiConstructor: function() {
            this.preview_override_selection_type = TabledResourceStreamSimpleSelection, this.base()
        },
        get_stream_node_from_clicked_node: function(e) {
            return $(e).closest(".tt-a").get(0)
        }
    }), window.TabledResourceStreamSimpleSelection = window.ResourceStreamSimpleSelection.extend({
        getAllSelectable: function() {
            return $(".tt-a", this.root).toArray()
        },
        isSelectable: function(e) {
            return $(e).hasClass("tt-a")
        }
    }), window.DWait && DWait.run("jms/lib/gstream/tabled_resource_stream.js")
});
DWait.ready(["cssms/modals/signup-modal.css", "jms/lib/pubsub.js", "jms/lib/ddt.js", "jms/lib/difi.js", "jms/lib/gwebpage.js", "jms/legacy/modals.js", "jms/lib/jquery/jquery.current.js", "jms/lib/Base.js", "jms/lib/glbl.js"], function() {
    SignupBase = Base.extend({
        constructor: function() {
            $(window).bind("message", function(e) {
                e.originalEvent && "https://verify.deviantart.com" === e.originalEvent.origin && e.originalEvent.data.match(/"command":"close"/) && Modals.pop("finished")
            }), vms_feature("sisu") || $("#header-login-link").on("click", function(e) {
                e.preventDefault(), window.location = this.href + "?ref=" + ("" + window.location)
            }), PubSub.subscribe({
                eventname: "Modals.closeViaX",
                subscriber: this,
                callback: function(e, i) {
                    i.identifier == this.modal_identifier && PubSub.publish("BILogger.logEvent", {
                        eventname: "signup_login_modal_x",
                        modal_version: 1
                    })
                }.bind(this)
            })
        },
        modalUp: !1,
        canReplay: !0,
        modal_identifier: "SIGNUP-MODAL",
        subdomain: void 0,
        dificalls: [],
        callbacks: [],
        modal: function(e, i, a, s) {
            if (!Glbl("Site.is_mobile")) {
                var o, n, t = !1,
                    d = "520",
                    r = (window.deviantART || {}).deviant || {};
                if (a ? n = a : (this.subdomain = location.hostname.split(".")[0], window.location.hostname.match(/sta.sh$/) ? (n = "https://sta.sh/login/oauth/modal", d = "550") : !r.id || r.verified || r.deactivated ? (n = "https://www.deviantart.com/join/?joinview=Modal" + (i ? "&joinpoint=" + encodeURIComponent(i.request["class"]) : "") + (s ? "&section=login" : ""), "&subdomain=" + this.subdomain, Browser.isSmallMobile && (d = "650")) : (t = !0, n = "https://verify.deviantart.com/?from=Modal&subdomain=" + this.subdomain + "&referrer=" + encodeURIComponent(location.href))), o = $('<div class="secure"><div class="join-modal-title"><h3>' + (t ? "Verify Your Email" : "Sign Up<span> or Log In</span>") + "</h3></div>" + '<div class="join-modal-contents" style="height:' + d + 'px;">' + '<div id="loading_iframe">' + '<img src="//st.deviantart.net/emoticons/e/eager.gif" />Loading&hellip;' + "</div>" + '<iframe scrolling="no" allowtransparency="true"  src="' + n + '" frameBorder="0" ' + "onload=\"$(this).show().closest('.secure').addClass('loaded').parent().width($(this).closest('.secure').width()).height($(this).closest('.secure').height()); $('#loading_iframe').hide();\">" + "</iframe>" + "</div>" + "</div>")[0], e instanceof Function ? this.callbacks.push(e) : e && this.dificalls.push([e, i]), window.addEventListener("message", this.handleMessage.bind(this), !1), !this.modalUp) {
                    var l = Modals.factory(o, {
                        identifier: this.modal_identifier
                    });
                    Modals.push(l, this.done.bind(this), "join-modal")
                }
                this.modalUp = !0
            }
        },
        done: function(e) {
            e && gWebPage.update(e), this.modalUp = !1;
            var i = "finished" === (e || {}).result;
            if (i && !(e || {}).headerUpdated && this.headerRefresh(!0), i && "verify" == (e || {}).ref) return Glbl("Signup.no_redirect") || $("body").hasClass("minibrowse-active") ? PubSub.publish("VerifyModal.show", {
                updateBar: !0
            }) : window.location = -1 !== deviantART.deviant.features.indexOf("launch_eclipse_new_users") ? "https://www.deviantart.com" : "https://www.deviantart.com/watch/?verify=1", void 0;
            if (this.canReplay) {
                for (var a, s, o, n = !1; a = this.dificalls.pop();) s = a[0], o = a[1], i && o ? (n = !0, DiFi.pushPost(o.request["class"], o.request.method, o.request.args, s[0][0], s[1][0])) : s[0][0].call(s[1][0], i, o, !0);
                for (; s = this.callbacks.pop();) s(i);
                n && DiFi.send()
            }
            "cancel" === e && (DiFi.pushPost("User", "joinModalCanceled", [], $.noop), DiFi.send())
        },
        headerRefresh: function(e) {
            var i = ($("#overhead").data("header-refresh") || "DAWebpageHeader;getHeaderHTML").split(";");
            DiFi.pushPrivateGet(i[0], i[1], [], function(e, i) {
                return e ? ($("#overhead-sc, #overhead tr").fadeOut(function() {
                    var e = $(this);
                    gWebPage.update(i.response.content), e.html(i.response.content.html), $("#navbar-menu").replaceWith(i.response.content.navbar), e.add("#navbar-menu"), PubSub.publish("Signup.headerRefresh"), e.fadeIn(), $("body").removeClass("loggedout")
                }), void 0) : ddt.error("Modal", "Failed to refresh header", i.response)
            }), e && DiFi.send()
        },
        handleMessage: function(e) {
            if (e.origin && (e.origin.match("https?://(?:verify|www|" + this.subdomain + ").deviantart.(?:com|lan)$") || window.location.hostname.match(/sta.sh$/))) {
                var i;
                try {
                    i = JSON.parse(e.data)
                } catch (a) {
                    return
                }
                if (i._source && "signup" === i._source)
                    if (this.headerRefresh(!0), i.headerUpdated = !0, "finished" === i.result) Modals.pop(i);
                    else if ("verify" === i.command) $(".join-modal-title h3").text("Verify Your Email");
                else if ("disableReplay" === i.command) this.canReplay = !1;
                else if ("clearHeader" === i.command) {
                    $(".modal-wrapper .join-modal .join-modal-contents").css({
                        height: "540px"
                    }), $(".join-modal-title h3").text("");
                    var s = top.document.querySelector(".join-modal .x"),
                        o = s.cloneNode(!0);
                    $(o).click(function(e) {
                        return e.preventDefault(), PubSub.publish("BILogger.logEvent", {
                            eventname: "what_dyw_click_skip",
                            modal_version: 1,
                            version: 1
                        }), window.location.href = window.location.href + "?verify=1", !1
                    }), o.href = "#", s.parentNode.replaceChild(o, s)
                }
            }
        }
    }), window.Signup = new SignupBase, window.DWait && DWait.run("jms/pages/signup.js")
});
DWait.ready(["jms/pages/signup.js", "jms/lib/difi.js", "jms/lib/pubsub.js"], function() {
    DiFi.errorHooks.push(function(s, i, e) {
        if (!s && i.response.content && i.response.content.error && "ERR_DIFI_ACCESS_DENIED" == i.response.content.error.code && i.response.content.details.privs && (((i.response.content.details.privs[0] || [])[2] || [])[0] == PRIV_LOGGEDIN || ((i.response.content.details.privs[0] || [])[2] || [])[0] == PRIV_VERIFIED) && window.Signup) {
            if (window.deviantART.deviant.loggedIn) vms_feature("sisu") ? PubSub.publish("SisuVerifyModal.show") : PubSub.publish("VerifyModal.show", {
                updateBar: !0
            });
            else if (vms_feature("sisu")) {
                var n = "https://www.deviantart.com/signinup-0fb0463eb8f2860934b8139607dd93eb/";
                window.isVM && vms_feature("sisu_vm") && (n = "https://sisu.deviantart.lan:4000/"), window.top.location.assign(n)
            } else Signup.modal(e, i), PubSub.publish("Signup.show");
            return !0
        }
    }), window.DWait && DWait.run("jms/pages/difi_errorhook_signup.js")
});
DWait.ready(["jms/lib/ddt.js", "jms/lib/difi.js", "jms/lib/jquery/jquery.current.js", "jms/lib/Base.js", "jms/lib/glbl.js", "jms/lib/jquery/plugins/jquery.throttle-debounce.js", "jms/legacy/modals.js", "jms/pages/signup.js", "jms/lib/pubsub.js", "jms/lib/location.js", "jms/lib/php.js"], function() {
    DWait.init("VerifyModal.init", function() {
        var e = Base.extend({
            referrer: void 0,
            constructor: function() {
                this.busy = !1, this.referrer = $("#verify").attr("referrer"), $("#resend a").on("click", this.resend.bind(this)), this.sendMessage({
                    command: "verify"
                }, this.referrer), $(window).on("focus", this.focused.bind(this))
            },
            resend: function() {
                this.sendMessage({
                    command: "disableReplay"
                }), $("#resend").submit()
            },
            focused: function() {
                this.busy || (this.busy = !0, DiFi.pushPrivateGet("User", "verifyMe", [], this.difi.bind(this)), DiFi.send())
            },
            difi: function(e, i) {
                if (e) {
                    if (Number(i.response.content)) {
                        var s = {
                            command: "close",
                            history_length: history.length
                        };
                        this.sendMessage(s)
                    }
                } else ddt.log("verify", "Unexpected error while checking verification status");
                this.busy = !1
            },
            sendMessage: function(e) {
                e._source = "signup", ddt.log("verify", "Messaging parent", e), parent.postMessage(JSON.stringify(e), decodeURIComponent(this.referrer))
            }
        });
        new e
    });
    var e = Base.extend({
        _modal_identifier: "VERIFY-MODAL",
        constructor: function() {
            if (window.location.search.indexOf("verify=1") > 0) {
                if (Glbl("Signup.requires_verify")) this.show();
                else {
                    var e = window.location.search.match(/url=([^\&]+)/);
                    if (e) {
                        e = e.pop();
                        var i = document.createElement("a");
                        i.href = decodeURIComponent(e);
                        for (var s in PHP.$GLOBALS.safedomains)
                            if (-1 !== i.hostname.indexOf(PHP.$GLOBALS.safedomains[s])) return window.location = decodeURIComponent(e), void 0
                    }
                }
                PubSub.publish("Location.replace", {
                    url: window.location.href.replace(/&?verify=1/, "")
                })
            }
            $("body").on("click", ".verify-link", this.handleLink.bind(this)), PubSub.subscribe({
                eventname: "VerifyModal.show",
                subscriber: this,
                callback: this.show
            }), PubSub.subscribe({
                eventname: "Modals.closeViaX",
                subscriber: this,
                callback: function(e, i) {
                    i.identifier == this._modal_identifier && PubSub.publish("BILogger.logEvent", {
                        eventname: "almost_done_click_x",
                        modal_version: 1,
                        version: 1
                    })
                }
            })
        },
        handleLink: function() {
            return Glbl("Signup.requires_verify") ? (this.show(), !1) : !0
        },
        show: function(e, i) {
            return window.deviantART.deviant.loggedIn ? (DiFi.pushPost("User", "getVerifyModal", [], function(e, s) {
                if (e && s.response.content) {
                    var n = $(s.response.content.html),
                        o = Modals.factory(n, {
                            identifier: this._modal_identifier
                        });
                    if (PubSub.publish("BILogger.logEvent", {
                            eventname: "almost_done_screen_show",
                            modal_version: 1,
                            version: 1
                        }), n.on("click", ".ok", function() {
                            return Modals.pop("cancel"), !1
                        }), $(document).on("mousedown.verify", function(e) {
                            $(e.target).closest(".verify-modal").length > 0 || Modals.pop("cancel")
                        }), Modals.push(o, this.hide.bind(this, n), "verify-modal", !1, "slim-modal", "darkfade"), n.closest(".verify-modal").addClass("active"), (i || {}).updateBar && s.response.content.bar) {
                        var t = $(".verifybar");
                        t.length > 0 ? t.replaceWith(s.response.content.bar) : $("body").append(s.response.content.bar).addClass("pushbar")
                    }
                    gWebPage.update(s.response.content)
                }
            }.bind(this)), DiFi.send(), void 0) : (Signup.modal(), void 0)
        },
        hide: function(e) {
            e.closest(".verify-modal").removeClass("active"), $(document).off("mousedown.verify")
        }
    });
    new e, DWait.init("VerifySuccessBar.init", function(e) {
        var i, s = vms_feature("header_uplift") && !Glbl("Site.is_mobile") ? "#head-container" : "#overhead-collect";
        dismiss = function() {
            clearTimeout(i), $("body").removeClass("pushbar"), setTimeout(function() {
                $(e).remove()
            }, 1500)
        }, Glbl("Site.is_mobile") ? $(e).detach().insertAfter(s).show() : $(e).detach().insertBefore(s).show(), $(".close").on("click", dismiss), i = setTimeout(dismiss, 15e3), window.location.search.indexOf("verify_success=1") > 0 && PubSub.publish("Location.replace", {
            url: window.location.href.replace(/&?verify_success=1/, "")
        })
    }), DWait.init("Verify.resend", function(e) {
        $(e).on("click", $.debounce(1e3, !0, function() {
            PubSub.publish("BILogger.logEvent", {
                eventname: "almost_done_click_resend_email",
                modal_version: 1,
                version: 1
            }), DiFi.pushPost("Settings", "resendVerification", [], function() {
                $(e).closest(".verifybar,.resendblock").text("Email resent! Please check your email client to verify your account!")
            }), DiFi.send()
        }))
    }), window.DWait && DWait.run("jms/pages/verify.js")
});
DWait.ready(["jms/lib/jquery/jquery.current.js"], function() {
    (function(n) {
        n(".gmbutton2searchcancel").each(function() {
            var a = n(this),
                c = a.parent().find("input.gmbutton2");
            a.click(function() {
                c.val(""), c.change(), a.parents("form").submit()
            });
            var e = function() {
                c.val() ? a.addClass("show") : a.removeClass("show")
            };
            c.change(e), c.keyup(e), c.change()
        })
    })(jQuery), window.DWait && DWait.run("jms/chrome/searchcancel.js")
});
DWait.ready(["jms/lib/jquery/jquery.current.js", ".domready"], function() {
    var i = window.location.href.substring(window.location.href.indexOf("?") + 1);
    $("a.expand").each(function() {
        var n = $(this).attr("href");
        if ("#_expand_" == n.substring(0, 9)) {
            var t = n.substring(9),
                a = $("div[skinscript=expandable_" + t + "]");
            a.length && (a.hide(), $(this).click(function() {
                return a.toggle(), !1
            }), (i == $(this).attr("href").substring(1) || i.match("_expand_all")) && $(this).click())
        }
    }), window.DWait && DWait.run("jms/pages/catskin-expander.js")
});
DWait.ready(["jms/lib/glbl.js", "jms/lib/jquery/jquery.current.js"], function() {
    if (window.BrowserSupport = {
            getBrowser: function(e) {
                for (var t = 0; e.length > t; t++) {
                    var r = e[t].string,
                        i = e[t].prop;
                    if (this.versionSearchString = e[t].versionSearch || e[t].identity, r) {
                        if (-1 != r.indexOf(e[t].subString)) return e[t]
                    } else if (i) {
                        if (!navigator.userAgent) return e[t];
                        if (-1 != navigator.userAgent.indexOf(e[t].identity)) return e[t]
                    }
                }
                return null
            },
            getVersion: function(e) {
                var t = RegExp(this.versionSearchString + "/? ?:?([0-9]+(\\.?[0-9]+)*)"),
                    r = e.match(t);
                return r ? r[1].split(".") : null
            },
            dataBrowser: [{
                string: navigator.userAgent,
                subString: "OPR",
                identity: "Opera",
                versionSearch: "OPR",
                min: [40, 0],
                link: "http://www.opera.com/"
            }, {
                string: navigator.userAgent,
                subString: "Edge",
                identity: "Edge",
                min: [14, 0],
                link: "https://www.microsoft.com/windows/microsoft-edge"
            }, {
                string: navigator.userAgent,
                subString: "Chrome",
                identity: "Chrome",
                min: [54, 0],
                link: "http://www.google.com/chrome"
            }, {
                string: navigator.vendor,
                subString: "Apple",
                identity: "Safari",
                versionSearch: "Version",
                min: [9, 0],
                link: "http://www.apple.com/safari/"
            }, {
                prop: window.opera,
                identity: "Opera",
                versionSearch: "Version",
                min: [15, 0],
                link: "http://www.opera.com/"
            }, {
                string: navigator.userAgent,
                subString: "Firefox",
                identity: "Firefox",
                min: [45, 8],
                link: "http://getfirefox.com"
            }, {
                string: navigator.userAgent,
                subString: "MSIE",
                identity: "Explorer",
                versionSearch: "MSIE",
                min: [10, 0],
                link: "http://microsoft.com/ie"
            }, {
                string: navigator.userAgent,
                subString: "Trident",
                identity: "Explorer",
                versionSearch: "rv",
                min: [11, 0],
                link: "http://microsoft.com/ie"
            }],
            getSupported: function() {
                var e = this.getBrowser(this.dataBrowser),
                    t = this.getVersion(navigator.userAgent);
                if (e && t) {
                    var r;
                    return $.each(e.min, function(e, i) {
                        void 0 === r && t[e] && (i > t[e] && (r = !1), t[e] > i && (r = !0))
                    }), void 0 === r && (r = t.length >= e.min.length), {
                        browser: e.identity,
                        version: t.join("."),
                        supported: r,
                        link: e.link
                    }
                }
            }
        }, !Glbl("Site.is_mobile") && Glbl("BrowserSupport.enforce") !== !1) {
        var e = BrowserSupport.getSupported();
        $.isPlainObject(e) && !e.supported && window.setTimeout(function() {
            $("#overhead-collect").before('<div id="update-browser-banner" style="background:url(https://st.deviantart.net/misc/updatebrowser_ylw_bg.png) repeat-x;width:100%;height:10px;line-height:10px;text-align:center;position:absolute;top:-1px;z-index:1000;font-family:verdana,sans-serif;font-size:10px;color:#3c3838;padding:10px 0px;text-shadow:#fff 1px 1px;">Please <a href="' + e.link + '" style="color:#1965B6;">upgrade your browser</a> to access DeviantArt<a href="#" style="position: fixed; top: 0px; right: 10px; font-size: 18px; line-height: normal; text-decoration: none; " onclick="$(this).parent().remove(); return false;">&times;</a>')
        }, 1)
    }
    window.DWait && DWait.run("jms/pages/browser_support.js")
});
DWait.ready(["jms/lib/jquery/jquery.current.js", "jms/lib/jquery/plugins/jquery.throttle-debounce.js", "jms/lib/glbl.js", "jms/lib/pubsub.js", "jms/lib/ddt.js", "jms/lib/Base.js"], function() {
    (function(e) {
        var i = ddt.createLogger("ads.blt"),
            t = Base.extend({
                _resize_throttle: 100,
                _debounce_fill_ad: 800,
                _page_debounce_times: {},
                _minimum_boundary: 100,
                _init: !1,
                _resize_mode: !1,
                _duperbrowse_mode: !1,
                _stashed_ad_html: [],
                _waiting_ad_units: [],
                _ads: {},
                _pool: [],
                _win_w: 0,
                _$win: null,
                constructor: function() {
                    this._$win = e(window), this._win_w = this._$win.width()
                },
                fill_ad_slot: function(t, s) {
                    if (!this._resize_mode) {
                        if (!s.is(":visible")) return i.log("[" + t + "] invalid ad request with invisible node", s), void 0;
                        t += "";
                        var n = e.now();
                        if (!(this._page_debounce_times[t] && this._page_debounce_times[t] > n)) {
                            if (this._page_debounce_times[t] = n + this._debounce_fill_ad, s = e(s), i.log("[" + t + "] ad request", s, s.offset()), !this.is_valid_ad_request(t, s)) return i.log("[" + t + "] request denied! ", s, e.extend(!0, {}, this._ads)), void 0;
                            if (this._ads[t]) return i.log("[" + t + "] ad repositioned"), this.position_ad(t, s), void 0;
                            this.show_container(), this.get_an_offscreen_ad(t), this.position_ad(t, s), i.log("[" + t + "] request fulfilled with ad ", e.extend(!0, {}, {
                                ad: this.get_ad_by_page_id(t),
                                ads: this._ads,
                                pool: this._pool
                            })), this._init || (this._init = !0, this.bind_window_resize(), PubSub.subscribe([{
                                eventname: "Duperbrowse.opened",
                                subscriber: this,
                                callback: this.duperbrowse_opened
                            }, {
                                eventname: "Duperbrowse.closed",
                                subscriber: this,
                                callback: this.duperbrowse_closed
                            }, {
                                eventname: "InfiniteTorpedo.added_thumbs",
                                subscriber: this,
                                callback: this.infinite_torpedo_is_done_inserting
                            }]))
                        }
                    }
                },
                stash_ad_html: function(i) {
                    return this._waiting_ad_units.length ? (e(this._waiting_ad_units.shift()).html(i), void 0) : (5 >= this._stashed_ad_html.length && this._stashed_ad_html.push(i), void 0)
                },
                infinite_torpedo_is_done_inserting: function() {
                    i.log("Torpedo finished inserting content, reposition ads"), this.show_container();
                    for (var e = 0, t = this._pool.length; t > e; ++e) this.position_ad(this._pool[e])
                },
                scroll_manager_is_done_resizing: function() {
                    if (this._resize_mode && !this._duperbrowse_mode) {
                        i.log("User stopped resizing, reposition ads; final window width: ", this._$win.width()), this._win_w = this._$win.width(), this.show_container();
                        for (var e = 0, t = this._pool.length; t > e; ++e) this.position_ad(this._pool[e]);
                        this.enter_normal_mode()
                    }
                },
                enter_normal_mode: function() {
                    i.log("Ads acting in normal mode"), this._resize_mode = !1, this.show_container(), this.bind_window_resize()
                },
                enter_resize_mode: function() {
                    i.log("Ads acting in resize mode"), this._resize_mode = !0, this.unbind_window_resize(), this.hide_container()
                },
                unbind_window_resize: function() {
                    i.log("Unbinding window.resize"), this._$win.off("resize.browselikethis_ad_pool")
                },
                bind_window_resize: function() {
                    i.log("Binding window.resize"), this._$win.on("resize.browselikethis_ad_pool", e.throttle(this._resize_throttle, this.window_resize.bind(this)))
                },
                window_resize: function() {
                    var e = this._$win.width();
                    e != this._win_w && (this._win_w = e, i.log("Horizontal window resize; new window width: ", e), this.enter_resize_mode())
                },
                duperbrowse_opened: function() {
                    i.log("duperbrowse opened, enter resize mode"), this._duperbrowse_mode = !0, this.enter_resize_mode()
                },
                duperbrowse_closed: function() {
                    i.log("duperbrowse closed, enter normal mode"), this._duperbrowse_mode = !1, this.enter_normal_mode()
                },
                position_ad: function(i, t) {
                    var s = this.get_ad_by_page_id(i);
                    if (s) {
                        t = e(t), t.length && (s.$node = t), s.offset = s.$node.offset(), this._minimum_boundary > s.offset ? s.offset = {
                            top: -9999,
                            left: -9999
                        } : Glbl("Site.is_mobile") && t.hasClass("mobile-ad") && t.css({
                            height: s.$el.outerHeight()
                        }), s.$el.css(s.offset);
                        var n = s.$node.siblings("[data-ad-id]").attr("data-ad-id");
                        s.$el.find("[data-ad-id]").attr("data-ad-id", n)
                    }
                },
                is_valid_ad_request: function(t, s) {
                    if (!s.length) return i.log(t + " -------> invalid ad request: invalid $node"), !1;
                    var n = this.get_ad_by_page_id(t);
                    if (!n) return i.log(t + " -------> valid ad request: this page does not have an ad"), !0;
                    if (!n.$node.is(s)) return i.log(t + " -------> valid ad request: this page changed its $node"), !0;
                    var o = s.offset();
                    return Math.floor(o.top) != Math.floor(n.offset.top) || Math.floor(o.left) != Math.floor(n.offset.left) ? (i.log(t + " -------> valid ad request: the $node has repositioned. offsets:", e.extend(!0, {}, {
                        node_offset: o,
                        ad_offset: n.offset
                    })), !0) : (i.log(t + " -------> invalid ad request: duplicate."), !1)
                },
                get_ad_by_page_id: function(e) {
                    return this._ads[e]
                },
                get_an_offscreen_ad: function(t) {
                    var s = this._pool.length,
                        n = this._$win.scrollTop(),
                        o = n + this._$win.height();
                    i.log("ad_count: ", s, " screen_top: ", n, " screen_btm: ", o);
                    for (var d = 0; s > d; ++d) {
                        var _ = this._pool[d],
                            a = this.get_ad_by_page_id(_);
                        if (a) {
                            var r = a.offset.top,
                                h = r + this.ad_height,
                                l = r >= n && o >= r || n >= r && h >= n;
                            if (i.log("ad_index: ", d, " ad_top: ", r, " ad_btm: ", h, " onscreen: ", l), !l) return i.log("ad_index ", d, " is not on screen, using it", e.extend(!0, {}, a)), this._pool.splice(d, 1), this._pool.push(t), this._ads[_] = null, this._ads[t] = a, a
                        }
                    }
                    var u = {
                        $el: this.create_ad_element(),
                        $node: e()
                    };
                    return u.offset = u.$el.offset(), this._pool.push(t), this._ads[t] = u, i.log("no ads available, creating new ad at index ", s, " :: ", e.extend(!0, {}, u)), this.ad_height || (this.ad_height = u.$el.height()), u
                },
                get_container: function() {
                    return this.$container || (this.$container = e("<div>").addClass("blt-ad-container").prependTo(document.body)), this.$container
                },
                hide_container: function() {
                    i.log("Container hidden"), this._container_hidden = !0, this.get_container().addClass("hidden")
                },
                show_container: function() {
                    i.log("Container shown"), this._container_hidden = !1, this.get_container().removeClass("hidden")
                },
                create_ad_element: function() {
                    var i = this._stashed_ad_html.shift(),
                        t = e("<div>").addClass("blt-ad").appendTo(this.get_container());
                    return i ? t.html(i) : this._waiting_ad_units.push(t), t
                }
            }),
            s = new t;
        PubSub.publish("BrowseLikeThisAdPool.instance_loaded", s)
    })(jQuery), window.DWait && DWait.run("jms/pages/browselikethis/browselikethis.ads.js")
});
DWait.ready(["jms/lib/jquery/jquery.current.js"], function() {
    (function(o) {
        function e(o) {
            for (var e, a = o.split("&"), n = {}, t = 0; a.length > t; t++) a[t].length && (e = a[t].split("=", 2), n[e[0]] = e[1]);
            return n
        }
        if (window.location.hash.indexOf("offset") > -1) {
            var a, n, t, i = e(window.location.hash.split("?", 2)[1] || ""),
                s = e(window.location.search.replace(/^\?/, "")),
                r = parseInt(i.offset || 0, 10);
            if (void 0 == i.offset) return;
            o("#browse-results-page-1").html('<span class="browse-loading">Loading from result ' + (r + 1) + "...</span>"), delete i.offset, n = o.param(i), a = window.location.hash.replace(/\?.*$/, n.length ? "?" + n : ""), ("#" === a || "#/" === a) && (a = ""), s.offset = r, t = "?" + o.param(s), window.location = window.location.pathname + t + a
        }
    })(jQuery), window.DWait && DWait.run("jms/pages/browselikethis/browselikethis.onload_url_hash_handler.js")
});
DWait.ready([".domready", "jms/lib/jquery/jquery.current.js", "jms/lib/difi.js", "jms/lib/pubsub.js", "jms/lib/Base.js"], function() {
    (function(e) {
        var i = Base.extend({
                handlers: {
                    load_comments_clicked: function(i) {
                        i.preventDefault();
                        var s = e(this),
                            n = s.data("CommentsLoader");
                        if (!n) {
                            var o = s.data("itemid"),
                                d = s.closest(".deviation-full-minipage");
                            n = new t(o, d), s.data("CommentsLoader", n).closest(".deviation-full-minipage").find("#gmi-CCommentThread").remove()
                        }
                        n.load_more()
                    },
                    show_description_clicked: function() {
                        e(this).siblings(".minipage-description").css({
                            height: "auto",
                            overflow: "auto"
                        }).find(".description-fader").remove(), e(this).remove()
                    }
                },
                constructor: function() {
                    var i = e("#browse-results");
                    i.on && i.on("click", ".comments-count:not(.disabled)", this.handlers.load_comments_clicked).on("click", ".minipage-show-description", this.handlers.show_description_clicked), this.adjust_description_height(), PubSub.subscribe([{
                        eventname: "BrowseLikeThisStreamView.pages_visible",
                        subscriber: this,
                        callback: this.adjust_description_height
                    }])
                },
                adjust_description_height: function() {
                    var i = 43;
                    e(".minipage-description .text-ctrl").not(".height-adjusted").each(function() {
                        var t = e(this);
                        i >= t.height() && (t.siblings(".description-fader").remove(), t.parent().height(t.height()).siblings(".minipage-show-description").remove()), t.addClass("height-adjusted")
                    })
                }
            }),
            t = Base.extend({
                COMMENT_DEVIATION: 1,
                $comments: null,
                $comments_loaded: null,
                $comments_count: null,
                itemid: null,
                offset: 0,
                limit: 25,
                templates: {
                    loading: "<div class='comments-loading browse-loading'>Loading...</div>",
                    end: "<div class='browse-done'>End of Comments</div>"
                },
                constructor: function(e, i) {
                    this.itemid = e, this.$comments = i.find(".minipage-comments-container"), this.$comments_loaded = i.find(".comments-loaded"), this.$comments_count = i.find(".comments-count")
                },
                load_more: function() {
                    this.show_loading(), DiFi.pushPublicGet("Comments", "getLimitedComments", [this.COMMENT_DEVIATION, this.itemid, 0, this.offset, this.limit + 1], this.load_more_done.bind(this)), DiFi.send()
                },
                load_more_done: function(i, t) {
                    if (this.remove_loading(), t.response.content.error) return this.disable_more(), void 0;
                    var s = e(t.response.content.html),
                        n = s.find(".ccomment"),
                        o = n.length;
                    this.limit + 1 > o ? this.disable_more() : (o--, n.last().remove()), this.$comments.append(s), this.offset += o, this.update_comments_loaded()
                },
                show_loading: function() {
                    this.$comments.append(this.templates.loading)
                },
                remove_loading: function() {
                    this.$comments.find(".comments-loading").remove()
                },
                disable_more: function() {
                    this.$comments_count.parent().prepend(this.templates.end), this.$comments_count.remove()
                },
                update_comments_loaded: function() {
                    this.$comments_loaded.text(this.offset), this.$comments_loaded.parent().show()
                }
            });
        new i
    })(jQuery), window.DWait && DWait.run("jms/pages/browselikethis/browselikethis.minipage.js")
});
DWait.ready(["jms/lib/glbl.js", "jms/pages/duperbrowse/duperbrowse.helpers.js", "jms/lib/jquery/jquery.current.js", "jms/pages/duperbrowse/duperbrowse.master.js", "jms/lib/pubsub.js", "jms/pages/browselikethis/browselikethis.stream.fetcher.js", "jms/lib/Base.js"], function() {
    (function() {
        var e = Base.extend({
            _fetcher: null,
            _stream_stack: null,
            _max_page_id: 0,
            _loaded_pages: [],
            _loading_queue: [],
            _pages: {},
            _first_visible_page: null,
            _current_item_page: null,
            _current_item: null,
            _current_offset: null,
            _items: {},
            _page_skeleton: {
                id: null,
                number: null,
                portal_api: null,
                query_params: {},
                results_dom: null,
                results_rids: null,
                paging_mode: "infinite",
                is_initial_page: !1,
                advert_dom: null,
                state: "unloaded",
                has_more: !1,
                has_less: !1,
                error_state: 0,
                max_offset: null,
                result_type: null,
                result_limit: null
            },
            handlers: {
                init: function(e, t) {
                    var s = this._create_page(t);
                    s.state = "loaded", s.is_initial_page = !0, this._add_loaded_page(s), this._add_loaded_items(t.results_rids, s.id), this.handlers.set_first_visible_page.bind(this)(null, s.id), this._set_current_item_page(s), this._fetcher = new BLTStreamFetcher({
                        cache_size: 20
                    }), PubSub.unsubscribe({
                        eventname: "BrowseLikeThisStream.init",
                        subscriber: this
                    }), PubSub.subscribe([{
                        eventname: "BrowseLikeThisStream.load_next",
                        subscriber: this,
                        callback: this.handlers.load_next
                    }, {
                        eventname: "BrowseLikeThisStream.set_first_visible_page",
                        subscriber: this,
                        callback: this.handlers.set_first_visible_page
                    }, {
                        eventname: "BrowseLikeThisStream.open_duperbrowse",
                        subscriber: this,
                        callback: this.handlers.open_duperbrowse.bind(this)
                    }])
                },
                load_next: function(e, t) {
                    if (!this._loading_queue[0]) {
                        var s = this._init_new_page(t);
                        s && this._load_new_page(s)
                    }
                },
                set_first_visible_page: function(e, t) {
                    if (this._pages.hasOwnProperty(t)) {
                        var s = !this._current_page;
                        if ((s || this._current_page.id !== t) && (this._current_page = this._pages[t], PubSub.publish("BrowseLikeThisStream.current_page_changed", this._current_page), !s)) {
                            var i = BrowseLikeThisStream.get_blt_url_for_offset(this._current_page.query_params.offset);
                            PubSub.publish("Location.replace", i)
                        }
                    }
                },
                open_duperbrowse: function(e, t) {
                    var s = {
                        next_item_callback: this._next_item_callback.bind(this),
                        prev_item_callback: this._prev_item_callback.bind(this),
                        has_next_callback: this._has_next_callback.bind(this),
                        has_prev_callback: this._has_prev_callback.bind(this),
                        on_stream_item_opened: this._on_stream_item_opened.bind(this),
                        on_stream_item_closed: this._on_stream_item_closed.bind(this)
                    };
                    Duperbrowse.open(t, s)
                }
            },
            constructor: function() {
                this._loading_queue = [], this._loaded_pages = [], this._pages = {}, this._items = {}, PubSub.subscribe({
                    eventname: "BrowseLikeThisStream.init",
                    subscriber: this,
                    callback: this.handlers.init
                })
            },
            _create_page: function(e) {
                var t = $.extend(!0, {}, this._page_skeleton, e);
                return t.id = this._next_page_id(), this._pages[t.id] = t, t
            },
            _load_new_page: function(e) {
                var t = this._fetcher.fetch(e.portal_api, e.query_params, e.result_limit);
                1 > this._loading_queue.length && PubSub.publish("BrowseLikeThisStream.next_page_loading", e), this._loading_queue.push(e), this._handle_promise(t, e).always(this._process_queue.bind(this))
            },
            _set_current_item_page: function(e) {
                this._current_item_page = e
            },
            _process_queue: function() {
                for (var e, t = 0; this._loading_queue[0] && "pending" !== this._loading_queue[0].state;) e = this._loading_queue.shift(), ("loaded" == e.state || "error" == e.state) && this._add_loaded_page(e), t++;
                1 > this._loading_queue.length ? PubSub.publish("BrowseLikeThisStream.next_page_loading", !1) : PubSub.publish("BrowseLikeThisStream.next_page_loading", e)
            },
            _handle_promise: function(e, t) {
                var s = this;
                return e.done(function(e) {
                    t.advert_dom = e.advert_dom, t.results_dom = e.results_dom, t.results_rids = e.results_rids, t.has_more = e.has_more, t.metadata = e.metadata, t.has_less = Boolean(e.query_params.offset > 0), t.error_state = e.error_state, t.state = "loaded", s._add_loaded_items(e.results_rids, t.id)
                }).fail(function(e) {
                    t.state = "error", t.error = e
                })
            },
            _add_loaded_page: function(e) {
                this._loaded_pages.push(e), e.is_initial_page || "paged" == e.paging_mode || PubSub.publish("BrowseLikeThisStream.new_page_added", e), e.metadata && PubSub.publish("BrowseLikeThisStream.set_metadata", e.metadata)
            },
            _add_loaded_items: function(e, t) {
                if (e) {
                    var s = this;
                    $.each(e, function(e, i) {
                        s._items[i.stream_offset] = {
                            itemid: parseInt(i.itemid, 10),
                            stream_offset: parseInt(i.stream_offset, 10),
                            pageid: parseInt(t, 10)
                        }
                    })
                }
            },
            _next_page_id: function() {
                return ++this._max_page_id
            },
            _init_new_page: function(e, t) {
                var s, i, _ = 0;
                return i = t ? this._loaded_pages[0] : this._loaded_pages[this._loaded_pages.length - 1], !i.has_more && !t || !i.has_less && t || (s = this._create_page(i), t ? (_ = parseInt(s.query_params.offset, 10) - parseInt(s.query_params.length, 10), s.number--) : (_ = parseInt(s.query_params.offset, 10) + parseInt(s.query_params.length, 10), s.number++), 0 > _ && (_ = 0, s.result_limit = s.query_params.offset), s.query_params.offset = _, s.display_method = e ? "auto" : "button", s.state = "pending", s.is_initial_page = !1, "full" == s.query_params.view_mode && (s.query_params.results_shown = (parseInt(s.query_params.results_shown, 10) || 0) + (parseInt(s.query_params.length, 10) || 0), s.query_params.length = 5, "paged" === s.paging_mode && (s.query_params.results_shown = 0)), Number(s.max_offset) && s.query_params.offset >= Number(s.max_offset)) ? void 0 : s
            },
            _next_item_callback: function() {
                var e = this._current_offset + 1,
                    t = this._items[e];
                return void 0 !== t ? $.Deferred().resolve(t).promise() : void 0 === t && this._current_item_page.has_more ? this._create_next_item_promise(!1) : $.Deferred().reject(DuperbrowseHelpers.PROMISE_STATE_END_OF_STREAM).promise()
            },
            _prev_item_callback: function() {
                var e = this._current_offset - 1,
                    t = this._items[e];
                return void 0 !== t ? $.Deferred().resolve(t).promise() : void 0 === t && this._current_item_page.has_less ? this._create_next_item_promise(!0) : $.Deferred().reject(DuperbrowseHelpers.PROMISE_STATE_END_OF_STREAM).promise()
            },
            _has_next_callback: function() {
                var e = this._current_offset + 1;
                return void 0 !== this._items[e] ? !0 : this._current_item_page.has_more === !0 && parseInt(this._current_item_page.max_offset, 10) > e ? !0 : !1
            },
            _has_prev_callback: function() {
                var e = this._current_offset - 1;
                return 0 > e ? !1 : void 0 !== this._items[e] ? !0 : void 0 === this._items[e] && "infinite" != this._current_item_page.paging_mode ? !0 : !1
            },
            _on_stream_item_opened: function(e) {
                var t, s;
                void 0 !== this._items[e.stream_offset] ? (t = this._items[e.stream_offset], s = this._current_item, s && s.pageid != t.pageid && this._pages.hasOwnProperty(t.pageid) && (this._current_item_page = this._pages[t.pageid], PubSub.publish("BrowseLikeThisStream.current_item_page_changed", {
                    new_page: this._current_item_page,
                    old_page: this._pages[s.pageid]
                })), this._current_item = t, this._current_offset = t.stream_offset) : (this._current_item = null, this._current_offset = null)
            },
            _on_stream_item_closed: function(e) {
                void 0 !== this._items[e.current_offset] && PubSub.publish("BrowseLikeThisStream.duperbrowse_stream_item_closed", this._items[e.current_offset])
            },
            _create_next_item_promise: function(e) {
                var t, s, i, _, r, a = !1;
                return r = function(e) {
                    return a ? $.Deferred().reject(DuperbrowseHelpers.PROMISE_STATE_CANCELLED).promise() : e.results_rids[0]
                }, _ = function(e) {
                    return a ? $.Deferred().reject(DuperbrowseHelpers.PROMISE_STATE_CANCELLED).promise() : e.results_rids[e.results_rids.length - 1]
                }, (t = this._init_new_page(!0, e)) ? (s = this._fetcher.fetch(t.portal_api, t.query_params, t.result_limit), 1 > this._loading_queue.length && PubSub.publish("BrowseLikeThisStream.next_page_loading", t), this._loading_queue.push(t), this._handle_promise(s, t).always(this._process_queue.bind(this)), i = $.when(s).then(e === !0 ? _ : r), i.cancel = function() {
                    a = !0
                }, i) : $.Deferred().reject("no page").promise()
            }
        });
        new e, window.BrowseLikeThisStream = {
            get_blt_url_for_offset: function(e) {
                var t = Glbl("Location.get_params"),
                    s = "";
                return e = e || 0, e ? t.offset = e : void 0 !== t.offset && delete t.offset, $.isEmptyObject(t) || (s = "?" + $.param(t)), Glbl("Location.pushstate_enabled") && (s += window.location.hash), window.location.pathname + s
            }
        }
    })(), window.DWait && DWait.run("jms/pages/browselikethis/browselikethis.stream.js")
});
DWait.ready(["jms/lib/jquery/jquery.current.js", "jms/lib/difi.js", "jms/lib/Base.js"], function() {
    (function(e) {
        window.BLTStreamFetcher = Base.extend({
            _options: {},
            _defaults: {},
            constructor: function(s) {
                this._options = e.extend({}, this._defaults, s)
            },
            fetch: function(s, t, r) {
                var o = e.Deferred();
                return o.request = {
                    portal_api: s,
                    query_params: t,
                    advert_dom: "",
                    results_dom: [],
                    results_rids: [],
                    has_more: !1,
                    error_state: 0,
                    result_limit: r
                }, DiFi.pushPublicGet("PortalCore", "get_result_thumbs", [o.request.portal_api, o.request.query_params], this._difi_callback.bind(this, o)), DiFi.send(), o.promise()
            },
            _difi_callback: function(e, s, t) {
                if (s && t.response.content.resources) {
                    var r, o = t.response.content.resources,
                        n = [],
                        i = parseInt(e.request.query_params.offset, 10),
                        a = parseInt(e.request.result_limit, 10);
                    for (a > 0 && (o = o.slice(0, a)), r = 0; o.length > r; r++) e.request.results_rids.push({
                        type: o[r][0],
                        itemid: o[r][1],
                        stream_offset: i
                    }), n.push(o[r][2]), i++;
                    e.request.advert_dom = t.response.content.ad, e.request.results_dom = n, e.request.has_more = Boolean(t.response.content.has_more), e.request.error_state = parseInt(t.response.content.error_state, 10), e.request.metadata = t.response.content.metadata, e.resolve(e.request)
                } else e.reject(t.response.content.error || "Unknown DiFi Error")
            }
        })
    })(jQuery), window.DWait && DWait.run("jms/pages/browselikethis/browselikethis.stream.fetcher.js")
});
DWait.ready(["jms/lib/jquery/plugins/jquery.somedata.js", "jms/lib/gstream/portal_core_resource_stream.js", "jms/lib/gstream/resource_stream.js", ".domready", "jms/lib/gmi.js", "jms/lib/Base.js", "jms/lib/jquery/jquery.current.js", "jms/lib/jquery/plugins/jquery.throttle-debounce.js", "jms/lib/surfer.js", "jms/pages/superbrowse/preview_stream.js", "jms/pages/browselikethis/browselikethis.stream.js", "jms/pages/duperbrowse/duperbrowse.helpers.js", "jms/pages/browselikethis/browselikethis.stream.scroll_manager.js", "jms/lib/browser.js", "jms/lib/popup2.js", "jms/lib/pubsub.js", "jms/lib/glbl.js"], function() {
    (function(e, t) {
        var s = "infinite",
            i = "paged";
        t.BrowseLikeThisStreamView = t.PortalCoreResourceStream.extend({
            _infinite_scroll_enable: !1,
            _reached_end: !1,
            _$paging_container: null,
            _$load_more_button: null,
            _$gear_menu_button: null,
            _$first_paging_results: null,
            _$loading_indicator: null,
            _$loading_message: null,
            _scroll_manager: null,
            _results_since_last_ad: 0,
            preview_override_selection_type: t.BrowseLikeThisPreviewSelection,
            _allow_show_more: !1,
            _removed_pages: {},
            _current_page_offset: 0,
            _initial_location: {
                path: Glbl("Location.path"),
                query: Glbl("Location.get_params")
            },
            _$ad_container: null,
            _ad_html: null,
            templates: {
                errors: {
                    generic: '<span class="browse-error">There was an error loading this page.</error>',
                    states: {
                        1: '<div class="browse-no-results">There was an error performing your request. Please try again later.</div>',
                        2: '<div class="browse-no-results">Sorry, DeviantArt does not serve more than @_MAX_OFFSET_@ results for this query.</div>',
                        3: '<div class="browse-no-results">Sorry, we found no relevant results.</div>',
                        4: '<div class="browse-no-results">Sorry, we don\'t have that many results.</div>',
                        5: '<div class="browse-no-results">All of the results on this page have been hidden due to your Mature Content Settings.</div>',
                        6: '<div class="browse-no-results">All of the results on this page have been hidden due to the owner putting them into storage. There may be more visible results on later pages.</div>',
                        7: '<div class="browse-no-results">All of the results on this page have been hidden due to the owner deleting them. There may be more visible results on later pages.</div>'
                    }
                }
            },
            handlers: {
                next_page_loading: function(t, s) {
                    if (s) {
                        var i = "#browse-results-page-" + s.id;
                        if (1 > e(i).length) {
                            s.results_dom = [];
                            var r = this._make_page(s);
                            this._$paging_container.before(r)
                        }
                        this._hide_reached_end(), this._$load_more_button.hide(), this._$gear_menu_button.hide(), this._$first_paging_results.hide(), this._$loading_indicator.show()
                    } else this._infinite_scroll_enable || this._reached_end || (this._$load_more_button.show(), this._$gear_menu_button.show(), this._$first_paging_results.show()), this._$loading_indicator.hide()
                },
                cancel_pending: function(t, s) {
                    for (var i = 0; s.length > i; i++) e("#browse-results-page-" + s[i].id).remove()
                },
                new_page_added: function(t, i) {
                    setTimeout(function() {
                        this._infinite_scroll_enable ? this._$paging_container.css("padding-bottom", "300px") : this._reached_end || (this._$load_more_button.show(), this._$gear_menu_button.show(), this._$first_paging_results.show());
                        var t = e("#browse-results-page-" + i.id);
                        1 > t.length ? t = this._make_page(i) : t.detach().find(".page-results").html(this._make_contents_html(i)), this._scroll_manager && i.paging_mode === s ? this._scroll_manager.add_page(i, t, i.query_params.offset) : this.add_non_scroll_page(i, t), i.has_more && i.max_offset > Number(i.query_params.offset) + Number(i.query_params.length) ? (this._reached_end = !1, this._hide_reached_end()) : (this._$load_more_button.hide(), this._$gear_menu_button.hide(), this._$first_paging_results.hide(), this._reached_end = !0, this._show_reached_end()), this._make_legacy_js_happy(t), this._init_new_thumbs(i.results_rids, e("#browse-results-page-" + i.id + " .page-results")), this._infinite_scroll_enable && this._$paging_container.css("padding-bottom", "300px"), PubSub.publish("BrowseLikeThisStreamView.page_added_to_dom", i.id);
                        var r = this._scroll_manager.measure_viewport();
                        e("#browse-results:visible").length && r > e("#browse-results").height() && PubSub.publish("BrowseLikeThisStream.load_next", null)
                    }.bind(this), 1)
                },
                infinite_scroll_enabled: function() {
                    this._infinite_scroll_enable = !0, this._$load_more_button.hide(), this._$gear_menu_button.hide(), this._$first_paging_results.hide()
                },
                infinite_scroll_disabled: function() {
                    this._infinite_scroll_enable = !1, this._$load_more_button.show(), this._$gear_menu_button.show(), this._$first_paging_results.show()
                },
                current_item_page_changed: function(e, t) {
                    this.gmi_args.paging_mode === i && (void 0 !== this._removed_pages[t.old_page.id] && (t.new_page.ad_settings.disabled = !0), this.handlers.new_page_added.bind(this)(e, t.new_page), this._removed_pages[t.old_page.id] = !0, this._current_page_offset = t.new_page.query_params.offset)
                },
                duperbrowse_stream_item_closed: function(s, r) {
                    var a = ["#browse-results-page-" + r.pageid + " .page-results > .tt-a", "#browse-results-page-" + r.pageid + " .page-results > .deviation-full-container > .deviation-full-data", "#browse-results-page-" + r.pageid + " .page-results > .tt-a > .journal-wrapper.tt-a"],
                        n = e(a.join(",")).filter(function() {
                            return e.data(this, "itemid") == r.itemid
                        });
                    if (0 !== n.length) {
                        var o = n.offset().top,
                            l = e(t).scrollTop();
                        o > l && l + e(t).height() > o || e(t).scrollTop(o), this.gmi_args.paging_mode === i && this._$ad_container && this._ad_html && this._$ad_container.html(this._ad_html)
                    }
                },
                duperbrowse_set_closing_location: function(e, t) {
                    if (this.gmi_args.paging_mode === i) {
                        var s = Glbl("Location.get_params"),
                            r = Number(this._current_page_offset);
                        t = this._replace_url_offset(t, s, r), PubSub.publish("Location.replace", t)
                    }
                },
                popup_trigger_click: function() {
                    e(".pane-switch").css("z-index", 10);
                    var t = e(this),
                        s = t.data("name");
                    Popup2.getPopup(s) || new Popup2(s, "body", {
                        classes: s,
                        content: e("#" + s).clone(!0).show(),
                        hidden: function() {
                            t.removeClass("popupactive"), t.data("type") && this.$node.removeClass(t.data("type"))
                        },
                        shown: function() {
                            t.addClass("popupactive"), this.$node.addClass(t.data("type"))
                        }
                    });
                    var i = Popup2.getPopup(s);
                    if (i.active) i.hide();
                    else {
                        var r = {
                            keepOnScreen: !1
                        };
                        "browse-paging-popup" == s && (r.valign = "center", r.bump = {
                            top: 7,
                            left: -9
                        }), i.show(i.position(t, r)), e(".paging-results-go-input:visible").focus()
                    }
                    return !1
                },
                popup_active_check: function() {
                    return Popup2.getPopup(e(this).data("name")).active ? !1 : void 0
                },
                ignore_journal_preview_click: function(t) {
                    var s = t.which || t.button;
                    if (!(t.altKey || t.ctrlKey || t.metaKey || t.shiftKey || 1 != s)) {
                        var i = e(t.target);
                        if (i.closest(".journalcontrol,.blogcontrol")[0]) {
                            t.preventDefault(), t.stopPropagation();
                            var r = i.closest(".journal-browse").find(".journal-footer:last > a:first");
                            if (e("#browse2, #browse-results").length) r.click();
                            else {
                                var a = i.closest(".journal-browse").find(".journalcontrol .metadata a:first");
                                document.location = i.is("[href]") ? i.attr("href") : a.length ? a.attr("href") : r.attr("href")
                            }
                        }
                    }
                },
                top_button_click: function() {
                    return t.scrollTo(0, 0), !1
                },
                ie8_hover_fix: function() {
                    e(this).find(".mlt-link").css("background-color", "#196BA7").find(".mlt-text").css("display", "block")
                },
                points_download_button_click: function(t) {
                    t.preventDefault(), PubSub.publish("PointsDownload.download_click", e(t.currentTarget))
                }
            },
            gmiConstructor: function() {
                this.$.removeClass("dwait"), this.$.find(".browse-no-results a").click(function() {
                    return t.location = this.href, !1
                }), this._init_stream(), this._$paging_container = e(".browse-paging", this.gmi_node);
                var i = e(".load_more", this._$paging_container);
                i.hasClass("disabled") || (this._$load_more_button = i.click(this._load_more_click.bind(this)).closest(".pagination")), this._allow_show_more = !i.hasClass("disabled"), this._$gear_menu_button = e(".paging-dropdown-trigger", this._$paging_container), this._$first_paging_results = e(".paging-results-first-page", this._$paging_container), this._$loading_indicator = e('<span class="browse-loading-spinner"></span>').hide().appendTo(this._$paging_container), e("body").on("keydown", ".paging-results-go-input", this._keydown_go_input.bind(this)).on("click", ".paging-results-go", this._set_offset.bind(this)).on("click", ".paging-style-link", this._change_paging_style);
                var r = e("#browse-results");
                r.on("click", ".popup-trigger", this.handlers.popup_trigger_click).on("mousedown", ".popup-trigger", this.handlers.popup_active_check).on("mousedown", ".journal-browse", this.handlers.ignore_journal_preview_click).on("click", "a.browse-top-link", this.handlers.top_button_click), Browser.isIE8 && r.on("mouseenter", ".tt-a, .deviation-full-data", this.handlers.ie8_hover_fix), this.base();
                var a = e("<div></div>");
                this._$paging_container.before(a), this.gmi_args.paging_mode === s && (this._scroll_manager = new BrowseLikeThisScrollManager(a), e(this._scroll_manager).bind("top_page_changed", this._top_page_changed.bind(this)), e(this._scroll_manager).bind("needs_more", this._needs_more.bind(this)), e(this._scroll_manager).bind("pages_became_visible", this._pages_became_visible.bind(this))), PubSub.subscribe([{
                    eventname: "BrowseLikeThisStream.next_page_loading",
                    subscriber: this,
                    callback: this.handlers.next_page_loading
                }, {
                    eventname: "BrowseLikeThisStream.cancel_pending_pages",
                    subscriber: this,
                    callback: this.handlers.cancel_pending
                }, {
                    eventname: "BrowseLikeThisStream.new_page_added",
                    subscriber: this,
                    callback: this.handlers.new_page_added
                }, {
                    eventname: "BrowseLikeThisStream.infinite_scroll_enabled",
                    subscriber: this,
                    callback: this.handlers.infinite_scroll_enabled
                }, {
                    eventname: "BrowseLikeThisStream.infinite_scroll_disabled",
                    subscriber: this,
                    callback: this.handlers.infinite_scroll_disabled
                }, {
                    eventname: "BrowseLikeThisStream.current_item_page_changed",
                    subscriber: this,
                    callback: this.handlers.current_item_page_changed
                }, {
                    eventname: "BrowseLikeThisStream.duperbrowse_stream_item_closed",
                    subscriber: this,
                    callback: this.handlers.duperbrowse_stream_item_closed
                }, {
                    eventname: "DuperBrowse.set_closing_location",
                    subscriber: this,
                    callback: this.handlers.duperbrowse_set_closing_location
                }])
            },
            _init_stream: function() {
                var t = {
                        number: Math.floor(this.gmi_args.query_params.offset / this.gmi_args.count_per_page) + 1,
                        portal_api: this.gmi_args.portal,
                        query_params: this.gmi_args.query_params,
                        results_dom: e("#browse-results-page-1 .page-results", this.gmi_node).html(),
                        has_more: Boolean(this.gmi_args.more_to_load),
                        has_less: Boolean(this.gmi_args.query_params.offset > 0),
                        max_offset: this.gmi_args.max_offset,
                        result_type: this.gmi_args.paging_result_type,
                        ad_settings: this.gmi_args.ad_settings,
                        paging_mode: this.gmi_args.paging_mode
                    },
                    s = this._find_dom_nodes_in_container(e("#browse-results-page-1 .page-results")),
                    i = [],
                    r = this,
                    a = t.query_params.offset;
                e.each(s, function(t, s) {
                    var n = e(s),
                        o = n.attr("collect_rid"),
                        l = {
                            stream_offset: a
                        };
                    if (o && (o = o.split(":"), o[0] && o[1] && (l.type = o[0], l.itemid = o[1])), l.itemid && n.hasClass("tt-fh") && (DuperbrowseHelpers.init_thumb_data(l, n, "a.thumb, a.tt-fh-purchasable"), i.push(l), e("a.thumb, span.details a.t", n).on("click.duperbrowse", r._open_duperbrowse)), l.itemid && n.hasClass("deviation-full-data") && (DuperbrowseHelpers.init_thumb_data(l, n, "a.full-view-link"), i.push(l), $anchor = n.parent().next().find(".minipage-title a"), $anchor.on("click.duperbrowse", r._open_duperbrowse), 0 === n.find("> div.journal-wrapper.tt-a").length && n.on("click.duperbrowse", r._open_duperbrowse)), !l.itemid && n.length > 0) {
                        var _ = n.find("div.journal-footer a.more"),
                            d = n.find("div.journal-wrapper.tt-a");
                        l.type = 1, l.itemid = _.data("deviationid"), DuperbrowseHelpers.init_thumb_data(l, d, "div.journal-footer a.more"), i.push(l), d.on("click.duperbrowse", r._open_duperbrowse)
                    }
                    l.itemid || 0 !== n.length || console.log("[BrowseStreamView] Init found invalid stream item"), a++
                }), t.results_rids = i, PubSub.publish("BrowseLikeThisStream.init", t), this._init_ads()
            },
            _init_ads: function() {
                var e = Number(this.gmi_args.ad_settings.results_before_first || 0),
                    t = Number(this.gmi_args.count_per_page);
                t > e && (this._results_since_last_ad = t - e)
            },
            _init_new_thumbs: function(t, s) {
                var i = this;
                e.each(t, function(t, r) {
                    var a = s.find('> .tt-a[collect_rid="' + r.type + ":" + r.itemid + '"]');
                    if (0 !== a.length) return DuperbrowseHelpers.init_thumb_data(r, a, "a.thumb, a.tt-fh-purchasable"), e("a.thumb, span.details a.t", a).on("click.duperbrowse", i._open_duperbrowse), void 0;
                    if (a = s.find('> .deviation-full-container .deviation-full-data[collect_rid="' + r.type + ":" + r.itemid + '"]'), 0 !== a.length) return DuperbrowseHelpers.init_thumb_data(r, a, "a.full-view-link"), 0 === a.find("> div.journal-wrapper.tt-a").length && a.on("click.duperbrowse", i._open_duperbrowse), $anchor.on("click.duperbrowse", i._open_duperbrowse), void 0;
                    if (0 === a.length) {
                        var n = s.find('> .tt-a .journal-footer a.more[data-deviationid="' + r.itemid + '"]');
                        if (0 === n.length) return console.log("[BrowseStreamView] RID Item not found in stream DOM", r), void 0;
                        var o = n.closest("div.journal-wrapper.tt-a");
                        DuperbrowseHelpers.init_thumb_data(r, o, "div.journal-footer a.more"), o.on("click.duperbrowse", i._open_duperbrowse)
                    }
                })
            },
            _open_duperbrowse: function(s) {
                var i = t.DuperbrowseHelpers.click_handler(s),
                    r = ["itemid", "stream_offset", "type"];
                if (i.open_duperbrowse) {
                    var a = e(this),
                        n = a.closest(".tt-a").someData(r);
                    return a.hasClass("deviation-full-data") && (n = a.someData(r)), e.isEmptyObject(n) && a.parent().hasClass("minipage-title") && (n = a.closest(".deviation-full-minipage").prev().find(".deviation-full-data").someData(r)), e.isEmptyObject(n) ? !0 : (n.wait_for_load = i.wait_for_load, n.context = a.data("duper-context"), PubSub.publish("BrowseLikeThisStream.open_duperbrowse", n), !1)
                }
                if (i.disabled) {
                    if (i.click_return) return;
                    var o = e(this).closest(".tt-a").find("div.journal-footer a.more");
                    return t.location = o.attr("href"), !1
                }
                return i.click_return
            },
            _load_more_click: function() {
                return PubSub.publish("BrowseLikeThisStream.load_next", !1), PubSub.publish("BrowseLikeThisStream.infinite_scroll_enabled"), PubSub.publish("InfiniteScroll.start"), !1
            },
            _keydown_go_input: function(e) {
                13 == e.keyCode && this._set_offset()
            },
            _set_offset: function() {
                var s = Math.max(parseInt(e(".paging-results-go-input:visible").val(), 10) - 1, 0);
                t.location = BrowseLikeThisStream.get_blt_url_for_offset(s)
            },
            _change_paging_style: function() {
                var s = e(".thumb-limit-picker").data("offset");
                return s ? (t.location = e(this).attr("href") + "&offset=" + s, !1) : void 0
            },
            _show_reached_end: function() {
                e('<div class="browse-end">End of Results</div>').appendTo(this._$paging_container)
            },
            _hide_reached_end: function() {
                e(".browse-end").remove()
            },
            _needs_more: function() {
                this._infinite_scroll_enable && PubSub.publish("BrowseLikeThisStream.load_next", !0)
            },
            _top_page_changed: function(e, t) {
                t || (t = 1), PubSub.publish("BrowseLikeThisStream.set_first_visible_page", t)
            },
            _pages_became_visible: function(e, t) {
                PubSub.publish("BrowseLikeThisStreamView.pages_visible", t)
            },
            _find_dom_nodes_in_container: function(e) {
                return e.find("> .tt-a, > .deviation-full-container > .deviation-full-data").get()
            },
            domFindVisible: function() {
                var t = {};
                if (!this.contents || !this.contents.length) {
                    t = this._find_dom_nodes_in_container(e(".page-results"));
                    var s = e(".mlt-seed-container .tt-a");
                    return s.length && t.unshift(s.get(0)), t
                }
                for (var i in this.contents) this.contents.hasOwnProperty(i) && this.contents[i][2] && document.body.contains(this.contents[i][2]) && (t[i] = this.contents[i][2]);
                return t
            },
            _make_page: function(t) {
                var s = "results-page-" + t.query_params.view_mode;
                "grid" == t.query_params.thumb_mode && (s += " stream-fh-grid"), t.query_params.challengeid || (s += " torpedo-container");
                var r;
                if (t.paging_mode === i) return r = '<div class="browse-results-page" id="browse-results-page-' + t.id + '">', r += '<div class="page-results ' + s + '">' + this._make_contents_html(t) + "</div>", r += "</div>", e(r);
                var a;
                return a = "loaded" != t.state || t.has_more ? t.query_params.length : t.results_rids.length, r = '<div class="browse-results-page" id="browse-results-page-' + t.id + '">' + '<hr class="browse-divider browse-page-divider">' + '<div class="browse-page-header">' + '<div class="paging-results browse-link-button popup-trigger" data-name="paging-results-popup">' + t.result_type + ' <div class="paging-results-count">' + (parseInt(t.query_params.offset, 10) + 1) + " - " + (parseInt(t.query_params.offset, 10) + parseInt(a, 10)) + "</div>" + "</div>" + '<a href="javascript:void(0)" class="browse-top-link browse-proper-button"><span>&uarr;</span> Top</a>', 2 == t.id && e(".thumb-limit-picker").length && (r += '<div data-name="browse-paging-popup" data-type="paging-gear" data-offset="' + t.query_params.offset + '" class="thumb-limit-picker paging-dropdown-trigger popup-trigger"><span></span></div>'), r += '</div><div class="page-results ' + s + '">' + this._make_contents_html(t) + "</div>" + "</div>", e(r)
            },
            _make_contents_html: function(t) {
                if ("error" == t.state) return this.templates.errors.generic;
                if (t.error_state > 0) {
                    var s = this.templates.errors.states[t.error_state];
                    return s.replace("@_MAX_OFFSET_@", this.gmi_args.max_offset)
                }
                if (!t.ad_settings.disabled && t.results_dom.length) {
                    var i;
                    "browse-results-page-" + t.id, i = 0 == Number(t.ad_settings.results_between) ? 0 : null == this._results_since_last_ad ? Number(t.ad_settings.results_before_first) - Number(this.gmi_args.count_per_page) : Number(t.ad_settings.results_between) - this._results_since_last_ad, t.results_dom.length > i ? (t.advert_dom && t.results_dom.splice(i, 0, t.advert_dom), this._results_since_last_ad = t.results_dom.length - i - 1) : this._results_since_last_ad = (this._results_since_last_ad || 0) + t.results_dom.length
                }
                return e.isArray(t.results_dom) ? t.results_dom.join("") : t.results_dom
            },
            add_non_scroll_page: function(t, s) {
                var i, r = parseInt(t.query_params.offset, 10) + 1,
                    a = parseInt(t.query_params.offset, 10) + parseInt(t.query_params.length, 10),
                    n = e(".browse-results-page"),
                    o = e(".next a", "div.browse-paging div.pagination"),
                    l = e(".prev a", "div.browse-paging div.pagination"),
                    _ = ["th", "st", "nd", "rd"],
                    d = s.find('iframe[data-da-ad="1"]');
                if (d.length > 0 && (this._$ad_container = d.parent(), this._ad_html = d.appendTo("<div>").parent().html(), d.remove()), n.replaceWith(s), e(".paging-results-count").text(r + " - " + a), r > 1) {
                    i = r - parseInt(t.query_params.length, 10) - 1, l.removeClass("disabled").attr("href", this._replace_url_offset(this._initial_location.path, this._initial_location.query, i));
                    var u = _[r % 10 > 3 ? 0 : r % 10];
                    r % 100 >= 11 && 13 >= r % 100 && (u = "th");
                    var h = '<span class="showing-page">Starting from ' + r + "<sup>" + u + "</sup> result</span>" + '<span class="first-result-spacer"></span>' + '<a class="browse-back-to-first-result" href="https://www.deviantart.com/"> Go to first result </a>';
                    e("div.page-results").before(h)
                } else l.addClass("disabled").attr("href", "");
                t.has_more ? o.removeClass("disabled").attr("href", this._replace_url_offset(this._initial_location.path, this._initial_location.query, a)) : o.addClass("disabled").attr("href", "")
            },
            _replace_url_offset: function(t, s, i) {
                var r = "",
                    a = Number(i);
                return a ? s.offset = a : void 0 !== s.offset && delete s.offset, e.isEmptyObject(s) ? t.replace(/\?[^?#]*/, "") : (r = "?" + e.param(s), t = t.replace(/\?.*/, ""), t + r)
            },
            get_all_selectable_result_nodes: function() {
                return e.map(this.contents, function(e) {
                    return e[2]
                })
            },
            get_stream_node_from_clicked_node: function(t) {
                return e(t).closest(".tt-a, .deviation-full-data").get(0)
            },
            _override_loader_item_read: function(t) {
                var s = e(t),
                    i = s.hasClass("journal-wrapper") ? s : s.find(".journal-wrapper:first");
                return i.length && !i.find('[id="news-special"]').length ? e(i.html()).find(".journal-footer").remove().end() : OUTLINE_PreviewStream.loaderItemRead.apply(this, arguments)
            },
            _make_legacy_js_happy: function(t) {
                for (var s = this._find_dom_nodes_in_container(t.find(".page-results")), i = 0; s.length > i; i++) {
                    var r = s[i],
                        a = e(r);
                    r && r.getAttribute && (r.getAttribute("collect_rid") || a.hasClass("journal-browse")) ? this.contents.push(this.domReadOne(r)) : (r = a.find("[collect_rid]").get(0), r && r.getAttribute && r.getAttribute("collect_rid") && this.contents.push(this.domReadOne(r)))
                }
            },
            commsMakeCustomSurfer: function(t, s, i) {
                var r = e(i);
                if (1 == s[0] && r.hasClass("deviation-full-data") && r.find(".journal-wrapper").length) {
                    var a = r.find("h2:first").get(0),
                        n = Surfer.create(t, a, void 0, void 0, !0, !0),
                        o = e(n.node);
                    return o.addClass("browse-title-surfer"), 1 > o.find("img").length && o.addClass("lit-title-surfer"), n.mod_down = {
                        x: -(o.width() / 2),
                        y: -(o.height() / 2)
                    }, n
                }
                return !1
            }
        })
    })(jQuery, window), window.DWait && DWait.run("jms/pages/browselikethis/browselikethis.stream.view.js")
});
DWait.ready([".domready", "jms/pages/browselikethis/browselikethis.ads.js", "jms/lib/jquery/plugins/jquery.throttle-debounce.js", "jms/lib/jquery/jquery.current.js", "jms/lib/Base.js", "jms/lib/pubsub.js"], function() {
    (function(e) {
        var t = null;
        PubSub.subscribe({
            eventname: "BrowseLikeThisAdPool.instance_loaded",
            subscriber: {},
            callback: function(e, s) {
                t = s
            }
        });
        var s = Base.extend({
                $node: null,
                has_ad: !1,
                $ad_container: null,
                ad_height: 0,
                ad_offset: null,
                page_id: null,
                height: 0,
                offset: 0,
                is_on_screen: !1,
                last_measured_at: null,
                constructor: function(s, i, _) {
                    this.page_id = s, this.tracking_offset = parseInt(_, 10) || -1, this.$node = i;
                    var h = this.$node.find('iframe[data-da-ad="1"]');
                    if (h.length) {
                        this.has_ad = !0, this.$ad_container = h.parent(), this.ad_height = h.height();
                        var a = e("<div>"),
                            r = h.next("div[data-ad-id]");
                        r.length && r.appendTo(a), h.appendTo(a), t && t.stash_ad_html(a.html())
                    }
                },
                measure: function() {
                    if (!this.is_on_screen) throw Error("Cannot measure page that is not visible");
                    this.height = this.$node.outerHeight(), this.last_measured_at = (new Date).getTime(), this.has_ad && (this.ad_offset = this.offset + this.$ad_container.offset().top - this.$node.offset().top)
                },
                render_ad: function() {
                    t && t.fill_ad_slot(this.page_id, this.$ad_container)
                },
                stash: function() {
                    this.is_on_screen && (this.$node.detach(), this.is_on_screen = !1)
                }
            }),
            i = !1;
        window.pause_scroll = function() {
            i = !0
        }, window.resume_scroll = function() {
            i = !1
        }, window.BrowseLikeThisScrollManager = Base.extend({
            _$node: null,
            _$top_buffer: null,
            _$bottom_buffer: null,
            _$w: null,
            _pages: [],
            _scroll_throttle: 300,
            _resize_debounce: 500,
            _advert_throttle: 500,
            _remeasure_throttle: 2e3,
            _viewport_height: null,
            _last_scroll_top: -1,
            _last_update_needed_more: !1,
            _first_visible_index: -1,
            _last_visible_index: -1,
            _current_top_page_idx: -1,
            _visible_pixels_threshold: 700,
            _load_more_threshold: 1500,
            _last_tracked_index: -1,
            constructor: function(t) {
                this._$node = t, this._pages = [], this._$w = e(window), this._$top_buffer = e("<div></div>"), this._$bottom_buffer = e("<div></div>"), this._$node.prepend(this._$top_buffer), this._$node.append(this._$bottom_buffer), this._$w.on("scroll", e.throttle(this._scroll_throttle, this._on_scroll.bind(this))), this._throttled_render_ads_and_track_pages = e.throttle(this._advert_throttle, this._render_ads_and_track_pages.bind(this)), this._$w.on("scroll", this._throttled_render_ads_and_track_pages), this._$w.on("resize", e.debounce(this._resize_debounce, this._on_resize.bind(this))), this._measure_viewport(), PubSub.subscribe([{
                    eventname: "BrowseLikeThisStreamView.make_all_pages_visible",
                    subscriber: this,
                    callback: this.make_all_pages_visible
                }])
            },
            add_page: function(t, i, _) {
                var h = new s(t.id, i, _),
                    a = this._pages[this._pages.length - 1];
                this._pages.push(h), i.insertBefore(this._$bottom_buffer), h.is_on_screen = !0, a && (h.offset = a.offset + a.height), h.measure(), 1 == this._pages.length && (this._first_visible_index = 0, this._last_visible_index = 0), a && !a.is_on_screen ? h.stash() : (this._last_visible_index = this._pages.length - 1, e(this).trigger("pages_became_visible", [h.$node]), DWait.init_domready(i), this._throttled_render_ads_and_track_pages())
            },
            _on_scroll: function(t) {
                if (this._pages.length && !i && this._$node.is(":visible")) {
                    var s, _, h, a = this._$node.offset().top,
                        r = this._$w.scrollTop() - a;
                    if (t || r != this._last_scroll_top) {
                        if (s = this._find_at_offset(r - this._visible_pixels_threshold, this._first_visible_index), _ = this._find_at_offset(r + this._viewport_height + this._visible_pixels_threshold, this._last_visible_index), 0 > s && (s = 0), 0 > _ && (_ = this._pages.length - 1), s !== this._first_visible_index || _ !== this._last_visible_index) {
                            for (this._$top_buffer.height(this._pages[s].offset), h = this._first_visible_index; this._last_visible_index >= h; h++)(s > h || h > _) && this._pages[h].stash();
                            var n = !0,
                                o = [];
                            for (h = s; _ >= h; h++) this._pages[h].is_on_screen ? n = !1 : (n ? this._$top_buffer.after(this._pages[h].$node) : this._$bottom_buffer.before(this._pages[h].$node), this._pages[h].is_on_screen = !0, o.push(this._pages[h].$node));
                            o.length && e(this).trigger("pages_became_visible", o);
                            var l, d = this._pages[this._pages.length - 1],
                                f = d.offset + d.height,
                                g = this._pages[_],
                                p = g.offset + g.height;
                            if (this._remeasure_pages(s, _ + 1), g.offset + g.height !== p)
                                for (p = l = g.offset + g.height, h = _ + 1; this._pages.length > h; h++) this._pages[h].offset = l, l += this._pages[h].height;
                            this._$bottom_buffer.height(f - p)
                        }
                        var u = this._find_at_offset(r, this._current_top_page_idx);
                        u !== this._current_top_page_idx && (e(this).trigger("top_page_changed", 0 > u ? null : this._pages[u].page_id), this._current_top_page_idx = u), this._last_scroll_top = r, this._first_visible_index = s, this._last_visible_index = _, this._load_more_if_necessary(r)
                    }
                }
            },
            remeasure_last_page: function() {
                var e = this._pages[this._pages.length - 1];
                e.measure()
            },
            _load_more_if_necessary: function(t) {
                var s = this._pages[this._pages.length - 1],
                    i = t + this._viewport_height;
                i + this._load_more_threshold > s.offset + s.height && e(this).trigger("needs_more")
            },
            _render_ads_and_track_pages: function() {
                this._pages.length && !i && this._$node.is(":visible") && (this._render_ads(), this._track_pages())
            },
            _render_ads: function() {
                for (var e = this._$w.scrollTop() - this._$node.offset().top, t = e + this._viewport_height, s = 0; this._pages.length > s; ++s)
                    if (this._pages[s].has_ad && this._pages[s].is_on_screen) {
                        var i = this._pages[s].ad_offset - 50,
                            _ = i + this._pages[s].ad_height + 100;
                        (i >= e && t >= i || e >= i && _ >= e) && this._pages[s].render_ad()
                    }
            },
            _track_pages: function() {
                var e = this._last_tracked_index + 1,
                    t = this._pages[e];
                if (t) {
                    var s = 0;
                    if (t.$node.length && (s = t.$node.get(0).getBoundingClientRect().top), 0 != s && window.innerHeight > s) {
                        this._last_tracked_index = e;
                        var i = "/vpv/" + window.location.host.split(".")[0] + window.location.pathname + "?offset=" + t.tracking_offset;
                        PubSub.publish("PageViewTracker.pageview", {
                            page: i,
                            tag: "Dynamic.BrowseResultsPage"
                        })
                    }
                }
            },
            _on_resize: function() {
                this._measure_viewport();
                var e, s = 3;
                for (e = 0; this._pages.length > e; e += s) this._remeasure_pages(e, Math.min(e + s, this._pages.length));
                this._on_scroll(!0), t && t.scroll_manager_is_done_resizing(), this._throttled_render_ads_and_track_pages()
            },
            _remeasure_pages: function(e, t) {
                var s, i, _ = [],
                    h = this._pages[e - 1] || null,
                    a = h ? h.offset + h.height : 0,
                    r = (new Date).getTime();
                for (s = e; t > s; s++) i = this._pages[s], i.is_on_screen || (_.push(i), i.$node.insertBefore(this._$bottom_buffer), i.is_on_screen = !0);
                for (s = e; t > s; s++) i = this._pages[s], r > i.last_measured_at + this._remeasure_throttle && i.measure(), i.offset = a, a += i.height;
                for (s = 0; _.length > s; s++) _[s].stash()
            },
            _measure_viewport: function() {
                this._viewport_height = window.innerHeight ? window.innerHeight : this._$w.height()
            },
            measure_viewport: function() {
                return this._measure_viewport(), this._viewport_height
            },
            make_all_pages_visible: function() {
                if (this._pages.length) {
                    var t = this,
                        s = !0;
                    e.each(this._pages, function(e, i) {
                        return i.is_on_screen ? (s = !1, void 0) : (s ? t._$top_buffer.after(i.$node) : t._$bottom_buffer.before(i.$node), void 0)
                    }), t._$top_buffer.height(0), t._$bottom_buffer.height(0)
                }
            },
            _find_at_offset: function(e, t) {
                var s = Math.max(t, 0),
                    i = this._pages[s];
                if (i.offset > e) {
                    do s--, i = this._pages[s]; while (s >= 0 && i && i.offset > e);
                    return s
                }
                if (e > i.offset + i.height) {
                    do s++, i = this._pages[s]; while (this._pages.length > s && i && e > i.offset + i.height);
                    return this._pages.length > s ? s : -1
                }
                return s
            }
        })
    })(jQuery), window.DWait && DWait.run("jms/pages/browselikethis/browselikethis.stream.scroll_manager.js")
});
DWait.ready([".domready", "jms/lib/jquery/jquery.current.js"], function() {
    (function(e) {
        function t(e) {
            var t = e.data("toggle_text");
            e.data("toggle_text", e.text()).text(t)
        }
        var i = e(".browse-facet-toggle-hidden");
        i.on && i.on("click", function() {
            var i = e(this),
                n = i.data("toggle_text"),
                o = i.data("more_increment") || 9999,
                a = i.closest(".browse-facet").find(".facet-link-hidden"),
                r = 0 == a.not(":visible").length;
            r ? (a.hide(), t(i)) : (a.not(":visible").slice(0, o).show(), 0 == a.not(":visible").length && (n && n.length ? t(i) : i.remove()))
        })
    })(jQuery), window.DWait && DWait.run("jms/pages/browselikethis/browselikethis.left_bar.js")
});
DWait.ready([".domready", "jms/lib/jquery/jquery.current.js", "jms/lib/agegate_modal.js", "jms/lib/browser.js", "jms/lib/gmi.js", "jms/lib/popup2.js", "jms/lib/difi.js"], function() {
    (function(i) {
        DWait.init("BrowseLikeThis.mature_filter", function() {
            var t = i(".browse-top-bar-mc-filter");
            t.on && i(".browse-top-bar-mc-filter").on("click", function(t) {
                t.preventDefault();
                var e = i(this),
                    s = Number(e.data("value")) ? 1 : 0;
                return deviantART.deviant.loggedIn ? (PubSub.publish("DaGa.track_event", {
                    category: "BetterBrowse",
                    action: s ? "update_mature_filter_on" : "update_mature_filter_off"
                }), DiFi.pushPost("Settings", "updateMatureFilter", [s], function(i) {
                    i ? window.location.reload() : (e.removeClass("working disabled"), alert("Sorry there was an error while changing your settings.\n\nYou must be 18 or over to turn off mature filter.\n\nIf you are, please try again in a minute."))
                }), e.addClass("working").addClass("disabled"), DiFi.send(), void 0) : (PubSub.publish("AgeGate.changeState", s), !1)
            });
            var e = !1,
                s = i(".browse-top-bar-mc-filter-trigger");
            s.on && (s.on("mousedown", function() {
                return e && e.visible() ? !1 : void 0
            }), s.on("click", function() {
                var t = i(this);
                return e || (e = new Popup2("BrowseMaturePopup", "body", {
                    classes: "browse-mature-popup",
                    content: i(".mature-filter-popup-container").clone(!0).show(),
                    hidden: function() {
                        t.removeClass("popupactive")
                    },
                    shown: function() {
                        t.addClass("popupactive")
                    }
                })), e.visible() ? e.hide() : e.show(e.position(t.parent(), {
                    align: "center"
                })), !1
            }))
        })
    })(jQuery),
    function(i) {
        window.BrowseLikeThisSearchBox = GMIBase.extend({
            _$input: null,
            _$term: null,
            _$button: null,
            _initial_val: "",
            _initially_disabled: !1,
            gmiConstructor: function() {
                this.$.removeClass("dwait"), this._init_terms(), this._init_input(), this.$.on("click.browselikethis", ".browse-search-container", this._search_container_click.bind(this)), this.$.on("click.browselikethis", ".search-clear", this._clear_search_box.bind(this)), this.$.on("blur.browselikethis", ".browse-search-input", this._input_blur.bind(this))
            },
            _init_terms: function() {
                this._$term = this.$.find(".search-term-container")
            },
            _init_input: function() {
                this._$input = this.$.find(".browse-search-input"), this._$button = this.$.find(".browse-search-button"), this._initial_val = this._$input.val(), this._initially_disabled = this.$.hasClass("disabled"), this._$input.on("keydown", this._input_keydown.bind(this)), this._$input.on("keyup", this._input_keyup.bind(this));
                var t = i(document.activeElement);
                window.location.hash || this._initially_disabled || Browser.isTouch || t.is(this._$input) || t.is(":input") ? this._input_blur() : this._make_editable(!0)
            },
            _clear_search_box: function() {
                return this._make_editable(!1), !1
            },
            _search_container_click: function() {
                return this._$input.is(":focus") || this._make_editable(!0), !1
            },
            _make_editable: function(i) {
                this._$term.hide(), this.$.removeClass("disabled"), this._$button.attr("disabled", !1), this._$input.attr("disabled", !1).removeClass("disabled").show(), 1 == this._$input.data("autofocus") && (Browser.isFirefox ? this._$input.css("position", "fixed").focus().css("position", "static") : this._$input.focus()), this._$input.select(), i || this._$input.val(""), "" == this._$input.val() && this.$.find(".search-box-clear").hide()
            },
            _input_blur: function() {
                var i = this._$input.val();
                i == this._initial_val && (this._$input.hide(), this._$term.show(), this._$input.val(this._initial_val), this._initially_disabled ? (this.$.addClass("disabled"), this._$input.attr("disabled", !0), this._$button.attr("disabled", !0), this.$.find(".search-box-clear").hide()) : this.$.find(".search-box-clear").show())
            },
            _input_keydown: function(i) {
                i.keyCode in {
                    40: 0,
                    32: 0,
                    34: 0,
                    35: 0
                } && "" == this._$input.val() && this._$input.blur()
            },
            _input_keyup: function() {
                this.$.find(".search-box-clear").toggle("" !== this._$input.val())
            }
        }), i(function() {
            i(":gmi(BrowseLikeThisSearchBox)").length && i(":gmi(BrowseLikeThisSearchBox)").gmi()
        })
    }(jQuery), window.DWait && DWait.run("jms/pages/browselikethis/browselikethis.top_bar.js")
});
DWait.ready(["jms/lib/jquery/jquery.current.js", "jms/lib/jquery/plugins/jquery.somedata.js", "jms/pages/duperbrowse/duperbrowse.helpers.js", "jms/pages/duperbrowse/stream/base.custom.stream.js"], function() {
    (function(e) {
        var s = window.DuperbrowseBaseCustomStream.extend({
            init_stream: function() {
                var s = e(".pcp-side-bar .pcp-thumb"),
                    t = this;
                s.each(function(s, r) {
                    var a = e(r),
                        i = a.find(".tt-aa").attr("collect_rid").split(":")[1],
                        o = {
                            itemid: i,
                            stream_offset: s
                        };
                    DuperbrowseHelpers.init_thumb_data(o, a, "a.thumb, a.tt-fh-purchasable"), t._items[s] = o, a.find("a").on("click", t._open_duperbrowse.bind(t))
                })
            },
            _get_item_data_from_clicked_element: function(e) {
                var s = e.closest(".pcp-thumb").someData("itemid", "stream_offset");
                return console.log("Item data is: ", s), s
            }
        });
        DWait.ready([".domready", "jms/pages/duperbrowse/stream/base.custom.stream.js"], function() {
            new s
        })
    })(jQuery), window.DWait && DWait.run("jms/pages/browselikethis/browselikethis.pcpstream.js")
});
DWait.ready(["jms/lib/difi.js", "jms/lib/gwebpage.js", "jms/pages/signup.js"], function() {
    var e = function() {
            var e = "smbutton smbutton-green smbutton-size-default";
            return Glbl("Site.is_mobile") && (e = "agegate-button cancelbutton"), $('<div class="agegate blocked">').append('<div class="nogo icon-blocked"></div>').append('<h1>Mature Content</h1><p class="reason">You need to be at least 18 years old to view mature content.</p>').append($('<div class="closebutton"><hr></div>').append($('<a href="javascript:void(0)">Close</a>').addClass(e).on("click", function() {
                if (window.Modals && $(".agegate-modal").length > 0) return Modals.pop("cancel"), !1;
                var e = $(this).closest(".agegate-page").data("ref");
                e && (window.location = e)
            })))
        },
        a = function(e) {
            DiFi.pushPost("Settings", "updateMatureFilter", [!1], function(a) {
                a ? e ? window.location = e : window.location.search.indexOf("update_agegate=1") > 0 ? window.location = window.location.href.replace(/&?update_agegate=1/, "") : window.location.reload() : alert("There was an error while changing your settings.")
            }), DiFi.send()
        };
    PubSub.subscribe({
        eventname: "Signup.headerRefresh",
        subscriber: this,
        callback: function() {
            var e = window.deviantART.deviant;
            $("body").toggleClass("maturefilter", !e.browseadult).toggleClass("maturehide", !e.browseadult || 18 > e.age), $(".browse-top-bar-mc-filter-container").toggle(e.age >= 18)
        }
    }), DWait.init("AgeGate.disable_filter", function() {
        a()
    }), DWait.init("AgeGate.loggedout", function(t) {
        var n = $(t).closest(".agegate-page").data("ref"),
            o = function(e, a) {
                e.toggleClass("error", a), $(".error.date", t).toggle($("input.error", t).length > 0), g()
            },
            i = function() {
                var e = parseInt($("#month", t).val(), 10);
                o($("#month", t), !e || 1 > e || e > 12)
            },
            r = function() {
                var e = parseInt($("#day", t).val(), 10),
                    a = !e || 1 > e,
                    n = parseInt($("#month").val(), 10),
                    i = parseInt($("#year").val(), 10),
                    r = 0;
                switch (n) {
                    case 2:
                        r = !i || 0 == i % 4 && i % 100 || 0 == i % 400 ? 29 : 28;
                        break;
                    case 4:
                    case 6:
                    case 9:
                    case 11:
                        r = 30;
                        break;
                    default:
                        r = 31
                }
                a = a || e > r, o($("#day", t), a)
            },
            s = function() {
                var e = parseInt($("#year", t).val(), 10);
                o($("#year", t), !e || 1900 > e || e > (new Date).getFullYear())
            },
            d = function() {
                if (r(), i(), s(), !($("input.error", t).length > 0)) {
                    var e = new Date(parseInt($("#year", t).val(), 10), parseInt($("#month", t).val(), 10), parseInt($("#day", t).val(), 10));
                    e.getTime() > Date.now() && o($("#day,#month,#year", t), !0)
                }
            },
            l = function() {
                $(".error.agree", t).toggle(!$("#agree_tos", t).is(":checked")), g()
            },
            g = function() {
                $(".submitbutton", t).toggleClass("disabledbutton", $("input.error", t).length > 0 || !$("#agree_tos", t).is(":checked"))
            },
            c = function() {
                $div = e(), $(t).replaceWith($div)
            };
        $("#month", t).on("change", i), $("#day", t).on("change", r), $("#year", t).on("change", s), $("#agree_tos", t).on("change", l), $(".submitbutton", t).on("click", function() {
            if (d(), l(), $(this).hasClass("disabledbutton")) return !1;
            var e = $(t).closest(".devpage_gate").data("context") || 0;
            DiFi.pushPost("User", "openAgeGate2", [$("#year", t).val(), $("#month", t).val(), $("#day", t).val(), e], function(e, a) {
                e ? a.response.content > 0 ? n ? window.location = n : window.location.reload() : c() : alert("There was an error while validating your age.")
            }), DiFi.send()
        }), $(".loginbutton", t).on("click", function() {
            if (Glbl("Site.is_mobile")) {
                var e = $(".login-form input[name=ref], .overhead-user-menu-loginform input[name=ref]");
                if (e.length > 0) {
                    var t = n || e.val(),
                        o = 0 > t.indexOf("?") ? "?" : "&";
                    t && e.val(t + o + "update_agegate=1")
                }
                return $("#overhead .overhead-user").trigger("click"), !1
            }
            window.Signup && Signup.modal(function(e) {
                return window.deviantART.deviant.loggedIn && 18 > window.deviantART.deviant.age ? (c(), void 0) : (e && window.deviantART.deviant.loggedIn && (n || Modals.pop(), a(n)), void 0)
            })
        })
    }), DWait.ready(".domready", function() {
        if (window.location.search.indexOf("update_agegate=1") > 0 && window.deviantART.deviant.loggedIn)
            if (18 > window.deviantART.deviant.age) {
                var t = Modals.factory(e());
                Modals.push(t, $.noop, "agegate-modal")
            } else a()
    }), window.DWait && DWait.run("jms/pages/agegate.js")
});
DWait.ready(["jms/lib/Base.js", "jms/lib/pubsub.js", "jms/lib/browser.js", "jms/lib/difi.js", "jms/legacy/modals.js"], function() {
    (function() {
        var e = Base.extend({
            constructor: function() {
                PubSub.subscribe([{
                    eventname: "AgeGate.changeState",
                    subscriber: this,
                    callback: this.changeState
                }])
            },
            changeState: function(e, t) {
                if (t) DiFi.pushPost("User", "closeAgeGate", [], function(e) {
                    e ? window.location.reload() : alert("Sorry there was an error while changing your settings.")
                }.bind(this));
                else {
                    if (Glbl("Site.is_mobile")) return window.location = document.location.protocol + "//www.deviantart.com/agegate/?ref=" + encodeURIComponent(window.location.href), void 0;
                    DiFi.pushPost("User", "getAgeGateModal", [], function(e, t) {
                        e && t.response.content && this.show(t.response.content)
                    }.bind(this))
                }
                DiFi.send()
            },
            show: function(e) {
                var t = Modals.factory(e.html);
                Modals.push(t, this.done.bind(this), "agegate-modal"), gWebPage.update(e)
            },
            done: function(e) {
                "cancel" != e && window.location.reload()
            }
        });
        new e
    })(), window.DWait && DWait.run("jms/lib/agegate_modal.js")
});
DWait.ready(["jms/lib/jquery/jquery.current.js", "jms/lib/Base.js", "jms/lib/ddt.js", "jms/lib/pubsub.js", "jms/lib/pubsubcrossframe.js"], function() {
    (function() {
        var e = [],
            t = {},
            a = {},
            i = ddt.createLogger("ads.safeframe.gpt");
        if (vms_feature("ads_debugger")) {
            var n = i.log;
            i.log = function(e, t) {
                if (t && t.slot && t.slot.getSlotElementId) {
                    var a = t.slot.getSlotElementId();
                    a.indexOf("-safe") >= 0 && (a = a.replace("-safe", ""), PubSub.publish("AdsDebugger.log", {
                        message: e,
                        data: t,
                        label: "gpt",
                        _fromWindow: a
                    }))
                }
                n(e, t)
            }
        }
        NON_MONETIZED_LINEITEMS = {
            29595600: !0,
            29595480: !0,
            24495720: !0,
            19391640: !0,
            17385000: !0,
            17385120: !0,
            17384880: !0,
            17216160: !0,
            16363560: !0,
            13603920: !0
        }, NON_MONETIZED_ADVERTISERS = {
            4509852640: !0,
            4524913088: !0
        }, ADX_LINEITEMS = {
            4574624817: !0,
            4574659664: !0,
            4635480373: !0,
            4635960207: !0,
            4574400670: !0,
            4734159531: !0
        }, ADSENSE_LINEITEMS = {
            4733540303: !0
        };
        var d = Base.extend({
            constructor: function() {
                i.log("DaAds Init"), PubSubCrossFrame.subscribe([{
                    eventname: "DaAds.safeframeStartDfp",
                    subscriber: this.handlers,
                    callback: this.handlers.complete_auction_in_dfp
                }, {
                    eventname: "DaAds.quantcastData",
                    subscriber: this.handlers,
                    callback: this.handlers.set_quantcast_targeting
                }]), PubSub.subscribe([{
                    eventname: "DaAds.safeframeStartDfp",
                    subscriber: this.handlers,
                    callback: this.handlers.complete_auction_in_dfp
                }, {
                    eventname: "DaAds.defineSlot",
                    subscriber: this.handlers,
                    callback: this.handlers.define_slot
                }]), $(window).on("message", function(e) {
                    try {
                        e.originalEvent.data.match && e.originalEvent.data.match(/^.*_display_ad/) && this.handlers.display_bidder_ad(e.originalEvent), e.originalEvent.data.hasOwnProperty("da_ad_chrome_update") && this.handlers.handle_ad_chrome_update_event(e.originalEvent.data)
                    } catch (t) {}
                }.bind(this));
                var e = this;
                googletag = window.googletag || {}, googletag.cmd = googletag.cmd || [], googletag.cmd.push(function() {
                    googletag.pubads().addEventListener("slotRenderEnded", function(t) {
                        e.handlers.handle_gpt_render(t)
                    }), googletag.pubads().addEventListener("impressionViewable", function(t) {
                        e.handlers.handle_gpt_viewability(t)
                    }), googletag.pubads().addEventListener("slotVisibilityChanged", function(t) {
                        e.handlers.handle_gpt_visibility_changed(t)
                    })
                })
            },
            handlers: {
                complete_auction_in_dfp: function(a, n) {
                    i.log("DaAds Complete Auction", n), this.auction_init = (new Date).getTime(), googletag = window.googletag || {}, googletag.cmd = googletag.cmd || [];
                    var d = this;
                    googletag.cmd.push(function() {
                        var a, r, o = n.ident + "-safe";
                        if ($.each(e, function(t, i) {
                                return i.target == o ? (a = i.slot, r = i.path, e[t].tracking = n, !1) : void 0
                            }), !a) return t[n.ident] = n, i.warn("DaAds failed to find slot for auction completion", n, e), void 0;
                        if (n.bid !== !1) {
                            var s = d.parse_bid(n.bid);
                            a.setTargeting(s[0], s[1]), i.log("DaAds Set bid targeting on slot", s, n.ident)
                        } else n.had_bidders && (i.log("DaAds Set bid targeting on slot", "invalid", n.ident), a.setTargeting("bid", "invalid"));
                        if (a.setTargeting("header_auction", n.had_bidders + ""), n.targeting)
                            for (var l in n.targeting) n.targeting.hasOwnProperty(l) && (("adtag" == l || "hashtags" == l || "content" == l) && (n.targeting[l] = (n.targeting[l] + "").split(",")), a.setTargeting(l, n.targeting[l]));
                        a.setTargeting("da_iframe_path", r), googletag.pubads().refresh([a])
                    })
                },
                parse_bid: function(e) {
                    var t = e.split("::");
                    return t
                },
                define_slot: function(a, i) {
                    e.push(i), t[i.ident] && (this.complete_auction_in_dfp("DaAds.safeframeStartDfp", i), delete t[i.ident])
                },
                get_auction_iframe: function(e) {
                    var t = $(e).parent().parent().attr("id"),
                        a = t.replace(/(-safe)/, "");
                    return $('iframe[data-ad-id="' + a + '"], #' + a + "_safeframe")
                },
                display_bidder_ad: function(t) {
                    var a = document.getElementsByTagName("IFRAME") || [];
                    i.log("DaAds Handle bidder display ad event", t);
                    for (var n = 0; a.length > n; n++) try {
                        if (a[n].contentWindow && a[n].contentWindow === t.source) {
                            if (0 !== (($(a[n]).attr("id") || "") + "").indexOf("google_ads")) return i.warn("Non google iframe sent a postMessage containing '.*_display_ad'!", t), void 0;
                            var d = $(a[n]).parent().parent().attr("id");
                            $("#" + d).hide();
                            var r = this.get_auction_iframe(a[n]);
                            if (r.length) {
                                var o, s;
                                if ($.each(e, function(e, t) {
                                        return t.target == d ? (o = t.slot, s = t.tracking, !1) : void 0
                                    }), o) {
                                    if ("invalid" == o.getTargeting("bid")) {
                                        var l = 1e-4;
                                        l > Math.random() && i.alert("DFP served an auction creative even though there were no valid bids!", {
                                            path: o.getAdUnitPath(),
                                            contentUrl: o.getContentUrl()
                                        }, ["ads", "dfp"])
                                    }
                                } else i.warn("Could not find DFP slot object for the auction iframe", $iframe);
                                r.show().css("visibility", "visible"), r.parent().show(), r[0].contentWindow.postMessage(t.data, "*"), i.log("DaAds Displaying bidder ad", d);
                                break
                            }
                        }
                    } catch (g) {
                        i.log("DaAds Bidder ad handler got error", g)
                    }
                },
                set_quantcast_targeting: function(e, t) {
                    i.log("DaAds Setting Quant Data", t.qcdata), !this.quantcast_done && t.qcdata && (i.log("DaAds Setting Quant Data", t.qcdata), googletag = window.googletag || {}, googletag.cmd = googletag.cmd || [], window.googletag.cmd.push(function() {
                        window.googletag.pubads().setTargeting("qcsegs", t.qcdata)
                    }), this.quantcast_done = !0)
                },
                interpret_monetization: function(e) {
                    var t = "downstream";
                    return t = e.isEmpty || this.is_non_monetized(e) ? "none" : e.lineItemId ? "other" : e.sourceAgnosticLineItemId + "" in ADSENSE_LINEITEMS ? "adsense" : e.sourceAgnosticLineItemId + "" in ADX_LINEITEMS ? "adx" : "yieldgroup"
                },
                is_non_monetized: function(e) {
                    return e.advertiserId + "" in NON_MONETIZED_ADVERTISERS || e.lineItemId + "" in NON_MONETIZED_LINEITEMS
                },
                handle_gpt_render: function(t) {
                    var a = this,
                        n = t.slot && t.slot.getSlotElementId();
                    return n ? ($.each(e, function(e, d) {
                        if (d.slot == t.slot) {
                            var r = "google_ads_iframe_" + d.path;
                            return $("#" + n + " iframe").each(function() {
                                var e = $(this),
                                    o = e[0];
                                if (e.attr("id").match(RegExp("^" + r)) && !e.attr("id").match(RegExp("_hidden_"))) {
                                    try {
                                        doc = o.contentDocument || o.contentWindow.document
                                    } catch (s) {
                                        return !0
                                    }
                                    if (doc.body.innerHTML.match(/postMessage\([^\)]*_display_ad/)) return i.log("ads", "DaAds Found postMessage should display bidder ad", t), !0;
                                    if (e.attr("name").match(/postMessage\([^\)]*_display_ad/)) return i.log("ads", "DaAds Found postMessage should display bidder ad", t), !0;
                                    i.log("DaAds DFP rendered ad (no postMessage)", t), a.track_ad(o, "dfp", d.tracking, t.slot, t);
                                    var l = a.interpret_monetization(t);
                                    return PubSub.publish("DaAds.gpt_ad_rendered", {
                                        gpt_event: t,
                                        ident: n,
                                        slot: t.slot,
                                        path: t.slot.getAdUnitPath(),
                                        monetized_by: l
                                    }), e.attr("allowfullscreen", !0), i.log("DaAds hiding bidder frame DFP took it"), e.parent().parent().parent().find('iframe[data-da-ad="1"]').hide(), !0
                                }
                            }), !1
                        }
                    }), void 0) : (i.log("DaAds failed to handle slotRenderEnded event", t), void 0)
                },
                handle_gpt_viewability: function(t) {
                    var n = t.slot,
                        d = n && n.getSlotElementId();
                    return n && d ? ($.each(e, function(e, n) {
                        n.target == d && $("#" + d + " iframe").each(function() {
                            var e = a[d];
                            if (!e) return i.warn("Triggering viewability without a render event, or there are multiple iframes for the same slotId!", d), void 0;
                            delete a[d];
                            var n = $(this).parent().parent()[0];
                            return n ? (e.node = n, e.event_payload.event = "ad_viewed_google", PubSub.publish("DaPx.send_ad_event_from_node", e), PubSub.publish("DaAds.impression_viewable", {
                                adid: $(this).parents("[data-ad-id]").attr("data-ad-id"),
                                gpt_event: t
                            }), void 0) : (i.warn("Could not find the iframe container!"), void 0)
                        })
                    }), void 0) : (i.log("DaAds failed to handle impressionViewable event", t), void 0)
                },
                handle_gpt_visibility_changed: function(e) {
                    var t = e.slot,
                        a = t && t.getSlotElementId();
                    return t && a ? (document.getElementById(a).parentNode.parentNode.parentNode.querySelector("iframe[data-da-ad]").contentWindow.postMessage(JSON.stringify({
                        iv: e.inViewPercentage
                    }), "*"), void 0) : (i.log("DaAds failed to handle slotVisiblityChanged event", e), void 0)
                },
                track_ad: function(e, t, i, n, d) {
                    var r = $(e).parent().parent()[0],
                        o = n.getAdUnitPath ? n.getAdUnitPath().split("/")[2] : i.ident,
                        s = null,
                        l = d.size,
                        g = d.isEmpty;
                    if (i.bid && !d.lineItemId) {
                        var _ = i.bid.match(/bid::.+_([0-9.]+)-([0-9.]*)$/);
                        if (null != _)
                            if ("" != _[2]) {
                                var c = Number(_[1]),
                                    h = Number(_[2]);
                                s = c + (h + .01 - c) / 2
                            } else s = 49.5
                    }
                    var u = {};
                    for (var m in i.targeting) i.targeting.hasOwnProperty(m) && (m.match(/^(?:all|top)_header_bids?$/) || (u[m.toLowerCase()] = i.targeting[m]));
                    g && ddt.log("ads.empty", "Empty ad " + o, arguments);
                    var f = this.interpret_monetization(d),
                        p = {
                            node: r,
                            event_payload: {
                                event: "ad_rendered",
                                adfw: "dfpsf",
                                adts: (new Date).getTime() - this.auction_init,
                                slot: o,
                                details: {
                                    meta_safety: !1,
                                    meta_adunit: o,
                                    meta_adunit_served_size: l && l.join("x"),
                                    meta_monetized_by: f,
                                    meta_renderer: t,
                                    meta_acc: $(r).data("ad-campaignid") ? $(r).data("ad-campaignid") : !1,
                                    meta_bidder: i.had_bidders,
                                    meta_isempty: g,
                                    meta_line_item_id: d.sourceAgnosticLineItemId,
                                    meta_creative_id: d.sourceAgnosticCreativeId,
                                    meta_advertiser_id: d.advertiserId,
                                    targeting: u
                                }
                            }
                        };
                    if (i.ai)
                        for (var v in i.ai) p.event_payload.details[v] = i.ai[v];
                    g || this.is_non_monetized(d) ? p.event_payload.details.meta_estimate = 0 : null === s || d.lineItemId || (p.event_payload.details.meta_estimate = s), i.bid && (p.event_payload.details.meta_bucket = this.parse_bid(i.bid)[1] || "invalid"), "isBackfill" in d && (p.event_payload.details.meta_isbackfill = d.isBackfill), PubSub.publish("DaPx.send_ad_event_from_node", p), a[d.slot.getSlotElementId()] = $.extend(!0, {}, p)
                },
                handle_ad_chrome_update_event: function(t) {
                    var a;
                    $.each(e, function(e, i) {
                        return i.path == t.da_iframe_path ? (a = i.slot, !1) : void 0
                    });
                    var n = a && a.getSlotElementId && a.getSlotElementId();
                    if (!n) return i.log("DaAds failed to handle ad_chrome_update_event", t), void 0;
                    var d, r, o = "google_ads_iframe_" + t.da_iframe_path;
                    return $("#" + n + " iframe").each(function() {
                        var e = $(this);
                        e.attr("id").match(RegExp("^" + o)) && !e.attr("id").match(RegExp("_hidden_")) && (d = e, r = e.parent())
                    }), d && r ? (this.chrome_handlers.hasOwnProperty(t.type) ? this.chrome_handlers[t.type].call(this, d, r) : i.log("DaAds failed to handle ad_chrome_update_event unknown chrome handler", t), void 0) : (i.log("DaAds failed to handle ad_chrome_update_event could not find iframe or container", t), void 0)
                },
                chrome_handlers: {
                    fill_viewport: function(e, t) {
                        t[0].style.width = "100%", t[0].style.removeProperty("height"), e.addClass("fill-viewport"), Glbl("Site.is_mobile") && e.addClass("mobile")
                    },
                    fill_width: function(e, t) {
                        t[0].style.width = "100%", e[0].style.width = "100%", e[0].style.height = "300px", t[0].style.removeProperty("height")
                    }
                }
            }
        });
        new d
    })(), window.DWait && DWait.run("jms/lib/da_ads.js")
});
if (window.DWait) {
    DWait.count()
}