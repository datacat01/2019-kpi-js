/*
 *  (c) 2000-2017 deviantART, Inc. All rights reserved.
 */
DWait.ready(["jms/lib/jquery/jquery.current.js", "jms/lib/popup2.js"], function() {
    window.More7 = {
        popup: function(o, e) {
            popup = new Popup2("More7", "body", {
                classes: "clear",
                content: $(e.gmi_node),
                destroy: !0,
                hidden: function() {
                    $(o).removeClass("active")
                },
                shown: function() {
                    $(o).addClass("active")
                }
            }), popup.show(popup.position($(o)))
        }
    }, window.DWait && DWait.run("jms/chrome/more7.js")
});
DWait.ready(["jms/lib/events.js", "jms/legacy/modals.js", "jms/lib/ruler.js", "jms/lib/surfer.js", "jms/lib/ddd.js", "jms/lib/difi.js", "jms/lib/station.js", "jms/chrome/more7.js", "jms/lib/popup2.js", "jms/lib/bind.js", "jms/lib/gmi.js"], function() {
    More7Custom2 = GMIBase.extend({
        gmiConstructor: function() {
            this.syncBack = this.syncBack.bind(this), this.syncBack2 = this.syncBack2.bind(this), this.main_menu_node = document.getElementById("more7-main"), this.hidden_menu_node = document.getElementById("more7-hidden"), this.gmi_args.clone && (this.gmi_node.innerHTML = '<div id="oh-mainmenu-cloned" class="oh-menu iconset-more"></div>', this.main_menu_node = (this.original_main_menu_node = this.main_menu_node).cloneNode(!0), this.hidden_menu_node = (this.original_hidden_menu_node = this.hidden_menu_node).cloneNode(!0), this.gmi_node.firstChild.appendChild(this.main_menu_node), this.gmi_node.firstChild.appendChild(this.hidden_menu_node))
        },
        gmiDestructor: function() {
            this.currently_open && this.close()
        },
        open: function(e, t) {
            t = t || {}, this.gmi_node.className += " oh-ex ", this.gmi_args.loggedin && (this.dragger = new MoreMenuDragger72(this), this.dragger.on()), this.currently_open = 1, t.additional_buttons && this.openAdditionalButtons()
        },
        close: function() {
            this.currently_open = !1, this.gmi_node.className = this.gmi_node.className.replace(/\s\boh.ex\b/g, ""), this.dragger && this.dragger.off(1), this.additional_buttons && this.closeAdditionalButtons(), this.gmi_args.clone && Popup2.hideAll()
        },
        syncBack: function() {
            setTimeout(this.syncBack2, 1)
        },
        syncBack2: function() {
            this.gmi_args.clone && (this.original_main_menu_node.innerHTML = this.main_menu_node.innerHTML, this.original_hidden_menu_node.innerHTML = this.hidden_menu_node.innerHTML)
        },
        reset: function(e) {
            this.dragger.resetButton(e.firstChild && 1 == e.firstChild.nodeType ? e.firstChild : e)
        },
        openAdditionalButtons: function() {
            var e;
            this.additional_buttons || (e = this.additional_buttons = document.createElement("div"), e.innerHTML = '<div class=oh-hr></div><div style="padding:4px;text-align:center;clear:both">' + (this.gmi_args.loggedin ? '<div style="padding-bottom:6px;font-size:8.25pt">Hint: You can drag & drop items to customize<br>the left side of this menu! Or <a href="" style="text-decoration:underline;color:#99B1A3" onclick="if (confirm(\'Reset your main menu customizations?\')) GMI.up(this).reset(this);return GMI.evCancel()">Reset</a></div>' : "") + '<a href="" class="smbutton smbutton-blue" onclick="GMI.up(this).close();return GMI.evCancel()"><span>Done</span></a>' + (this.gmi_args.loggedin ? ' &nbsp;&nbsp; <a class="smbutton smbutton-black" href="https://www.deviantart.com/settings/browsing#stick-menu"><span>Unstick in Browse Settings</span></a>' : "") + "</div>", this.main_menu_node.parentNode.appendChild(e), this.gmi_args.clone || (document.getElementById("oh-mlast").style.display = "none"))
        },
        closeAdditionalButtons: function() {
            var e;
            e = this.additional_buttons, this.additional_buttons = null, e && e.parentNode && e.parentNode.removeChild(e), this.gmi_args.clone || (document.getElementById("oh-mlast").style.display = "block")
        }
    }), More7Custom2.menu = function(e, t, n) {
        var i, o;
        return 0 > document.body.className.indexOf("no-apps") && !t ? (i = document.createElement("div"), o = 1) : i = document.getElementById("oh-mainmenu").parentNode, i = i.getAttribute("gmindex") ? GMI.getOne(i) : GMI.apply(i, "More7Custom2", {
            clone: o,
            loggedin: 0 !== n
        }), i.currently_open ? i.close() : i.open(e, {
            additional_buttons: 1
        }), o ? More7.popup(e, i) : void 0
    }, window.MoreMenuDragger72 = function(e) {
        this.owner = e
    }, MoreMenuDragger72.prototype = {
        on: function() {
            this.owner.gmi_node.onmousedown = this.mouseDown.bind(this), this.owner.main_menu_node.onclick = this.clickProtect.bind(this), this.owner.hidden_menu_node.onclick = this.clickProtect.bind(this), this.sortApps(this.owner.hidden_menu_node)
        },
        off: function(e) {
            e || (this.swapBack(this.owner.main_menu_node), this.swapBack(this.owner.hidden_menu_node)), this.owner.gmi_node.onmousedown = null, this.owner.main_menu_node.onclick = null, this.owner.hidden_menu_node.onclick = null
        },
        resetButton: function(e) {
            this.resetting || (e.style.cursor = "wait", Station.apply(e, "opacity", .5), e.innerHTML = "Reset", DiFi.pushPost("Apps", "reset", [], this.resetDone.bind(this, e)), DiFi.timer(1))
        },
        resetDone: function(e, t, n) {
            var i, o, s, d;
            if (this.resetting = !1, e.style.cursor = "pointer", Station.apply(e, "opacity", 1), t) {
                for (s = n.response.content.ids, d = this.owner.gmi_node.getElementsByTagName("a"), i = [], o = 0; o != d.length; o++) i.push(d[o]);
                for (o = 0; o != i.length; o++) i[o].getAttribute("appid") && (s[i[o].getAttribute("appid")] ? this.owner.main_menu_node.appendChild(i[o]) : this.owner.hidden_menu_node.appendChild(i[o]));
                this.sortApps(this.owner.hidden_menu_node), this.owner.syncBack()
            } else e.innerHTML = "Try Again"
        },
        mouseDown: function(e) {
            var t;
            for (e = e || window.event, t = e.target || e.srcElement; t && "A" != t.tagName;) t = t.parentNode;
            if (t && t.getAttribute("appid")) {
                if (this.resetting) return !1;
                if (DDD.mouseDown.call(t, e, this)) return document.body.scrollTop = document.documentElement.scrollTop = 0, !1
            }
        },
        clickProtect: function() {
            return this.click_protected ? ((window.event || {}).cancelBubble = 1, !1) : void 0
        },
        clickProtectOver: function() {
            this.click_protected = 0
        },
        ddd: {
            snap: function(e) {
                var t, n, i, o, s, d, s;
                for (i = this.ddd.node, o = i.parentNode, DDD.p_down.y += o.scrollTop, this.ddd.surfer = Surfer.create(e, this.ddd.node, .01, 1, !0), this.ddd.surfer.node.className += " oh-m-surfer", t = this.owner.gmi_node.getElementsByTagName("a"), s = [], d = 0; t[d]; d++) t[d].getAttribute("appid") && s.push(t[d]);
                for (s.reverse(), this.ddd.button_links = s, this.ddd.button_rects = [], n = Ruler.document.node(this.owner.gmi_node).x2, d = 0; d != s.length; d++) t = Ruler.document.node(s[d], !0), t.y -= 3, t.y2 += 3, s.length - 1 > d && (t.x2 += 50), this.ddd.button_rects.push(t);
                this.ddd.active_hover = null, this.ddd.original_spot = [this.ddd.node.parentNode, this.ddd.node.nextSibling]
            },
            drag: function(e) {
                var t, n, i;
                Surfer.update(this.ddd.surfer, e), i = Ruler.document.pointer(e), t = null, n = Ruler.hitTest(i, this.ddd.button_rects), null != n && (t = this.ddd.button_links[n]), this.active_hover != t && (this.active_hover = t, this.hovering_new_territory = 1, this.active_hover && this.active_hover.parentNode ? this.active_hover.parentNode == this.owner.hidden_menu_node ? (this.active_hover.parentNode.appendChild(this.ddd.node), this.sortApps(this.owner.hidden_menu_node)) : this.active_hover.parentNode.insertBefore(this.ddd.node, this.active_hover) : (this.hovering_new_territory = 0, this.ddd.original_spot[1] ? this.ddd.original_spot[0].insertBefore(this.ddd.node, this.ddd.original_spot[1]) : this.ddd.original_spot[0].appendChild(this.ddd.node)))
            },
            drop: function(e) {
                this.click_protected = 1, setTimeout(this.clickProtectOver.bind(this), 150), Surfer.flyHome(this.ddd.surfer, e, this.owner.syncBack, Ruler.document.node(this.ddd.node, !0)), this.hovering_new_territory && this.save()
            }
        },
        sortApps: function(e) {
            var t, n, i;
            for (t = e.getElementsByTagName("a"), n = [], i = 0; i != t.length; i++) n.push(t[i]);
            for (n.sort(this.appSorter), i = 0; i != n.length; i++) n[i].parentNode.appendChild(n[i])
        },
        appSorter: function(e, t) {
            function n(e) {
                var t, n = {
                    98: 501,
                    33: 502,
                    18: 503,
                    19: 504,
                    23: 900,
                    24: 900,
                    45: 900,
                    10: 1e3,
                    9: 2e3,
                    31: 2e3,
                    36: 2e3
                };
                return t = Number(e.getAttribute("appid")), t + (n[t] || 0)
            }
            return n(e) - n(t)
        },
        getAppIDs: function(e) {
            var t, n, i;
            for (i = [], t = e.getElementsByTagName("a"), n = 0; n != t.length; n++) i.push(Number(t[n].getAttribute("appid")));
            return i
        },
        save: function() {
            var e, t;
            for (DiFi.send(), t = this.getAppIDs(this.owner.main_menu_node), e = 0; e != t.length; e++) DiFi.pushPost("Apps", "setApps", [t[e]], this.difi.bind(this));
            DiFi.send()
        },
        swapBack: function(e) {
            var t, n, i;
            t = e.getAttribute("id"), (n = e.parentNode).removeChild(e), i = document.getElementById(t), i.parentNode.replaceChild(e.cloneNode(!0), i), n.appendChild(e)
        },
        difi: function(e, t) {
            e || (new Date).valueOf() > Number(this.error_shown || 0) && (this.error_shown = Number.MAX_VALUE, DiFi.stdErr("Unable to save toolbar customization. Please try again shortly.", t.response.content), this.error_shown = (new Date).valueOf() + 3e3)
        }
    }, window.MoreMenuDragger72 = MoreMenuDragger72, More7Custom2.utils = {
        difiSetting: function(e, t, n, i) {
            n.style.cursor = "busy", "setHeaderMenuInline" == e && PubSub.publish("DaGa.track_event", {
                category: "BetterBrowse",
                action: t ? "stick_menu" : "unstick_menu"
            }), "setMessageCountSplit" == e && PubSub.publish("DaGa.track_event", {
                category: "BetterBrowse",
                action: t ? "splinter_menu" : "unsplinter_menu"
            }), DiFi.pushPost("Settings", e, [t], this.difiSettingDone.bind(this, n, i)), DiFi.timer(1)
        },
        difiSettingDone: function(e, t, n, i) {
            DiFi.stdErrCallback(n, i), n && t && window.location.reload(), e.style.cursor = "pointer"
        }
    }, window.DWait && DWait.run("jms/chrome/more7.custom2.js")
});
DWait.ready(["jms/lib/jquery/jquery.current.js", "jms/lib/popup2.js", "jms/chrome/more7.custom2.js"], function() {
    (function() {
        DWait.init("LoginBar.init_more", function(t) {
            var n = $(t);
            n.on("click", function(t) {
                Popup2.hideAll(), More7Custom2.menu(this, null, n.data("user-loggedin")), t.preventDefault()
            })
        }), DWait.init("LoginBar.init_stick", function(t) {
            var n = $(t);
            n.on("click", function(t) {
                More7Custom2.utils.difiSetting("setHeaderMenuInline", n.data("user-inlinemenu"), this, 1), t.preventDefault()
            })
        }), DWait.init("LoginBar.init_touch", function(t) {
            var n = "touchstart",
                i = "touchend",
                o = !1;
            window.PointerEvent ? (n = "pointerdown", i = "pointerup", o = "touch") : window.MSPointerEvent && (n = "MSPointerDown", i = "MSPointerUp", o = window.MSPointerEvent.MSPOINTER_TYPE_TOUCH), ddt.log("touchdebug", "init", n, i, o), $("a.oh-touch", t).on(n, function(n) {
                if (Glbl("Site.is_mobile")) return !0;
                if (o && n.originalEvent.pointerType != o) return ddt.log("touchdebug", "touchstart - wrong pointer", n.pointerType), !0;
                event.preventDefault(), event.stopPropagation(), ddt.log("touchdebug", "touchstart");
                var i = $(this);
                i.removeAttr("href"), i.hasClass("touch-open") ? setTimeout(function() {
                    i.closest("td").removeClass("mmhover")
                }, 1) : ($(t).find("td.mmhover").removeClass("mmhover"), i.closest("td").addClass("mmhover"))
            }).on(i, function(t) {
                return o && t.originalEvent.pointerType != o ? (ddt.log("touchdebug", "touchend - wrong pointer", t.pointerType), !0) : (ddt.log("touchdebug", "touchend"), $(this).toggleClass("touch-open"), void 0)
            })
        }), DWait.init("LoginBar.init_button", function() {
            PubSub.subscribe([{
                eventname: "OHM.hit",
                subscriber: {},
                empty_queue_if_first_subscriber: !0,
                callback: function(t, n) {
                    n.on && "oh-loginbutton" == n.id && $("#login-username").focus()
                }
            }])
        }), DWait.init("LoginBar.init_groups_button", function(t) {
            var n = $(t);
            n.on("click", function() {
                return n.parent().css("display", "none").siblings(".hidden-group").removeClass("hidden-group"), !1
            })
        })
    })(), window.DWait && DWait.run("jms/chrome/loginbar.js")
});
DWait.ready([".domready", "jms/lib/jquery/jquery.current.js"], function() {
    (function(n) {
        function i() {
            var n = t.find(".navbar-menu-inner-scroll"),
                i = t.find(".navbar-menu-item.active").first();
            if (i.length) {
                var r = n[0].clientWidth,
                    l = n[0].scrollWidth,
                    a = i.offset().left + i.width() / 2;
                scroll = Math.max(a - r / 2, 0), scroll = Math.min(scroll, l - r), n[0].scrollLeft = scroll
            }
        }

        function r() {
            var n = 40,
                i = l[0].scrollLeft,
                r = l[0].scrollWidth - l[0].clientWidth - i;
            a.toggle(i > 0).css("opacity", Math.min(i, n) / n), o.toggle(r > 0).css("opacity", Math.min(r, n) / n)
        }
        var t = n("#navbar-menu");
        if (t.length) {
            var l = t.find(".navbar-menu-inner-scroll"),
                a = t.find(".navbar-scroll-hint-left"),
                o = t.find(".navbar-scroll-hint-right");
            i(), r(), l.on("scroll", r), n("window").on("orientationchange", r)
        }
    })(jQuery), window.DWait && DWait.run("jms/chrome/navbar.js")
});
if (window.DWait) {
    DWait.count()
}