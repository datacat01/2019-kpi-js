/*
 *  (c) 2000-2018 deviantART, Inc. All rights reserved.
 */
DWait.ready(["jms/lib/gmi.js", "jms/lib/Base.js", "jms/lib/ruler.js", "jms/lib/browser.js", "jms/lib/refunction.js", "jms/lib/jquery/jquery.current.js"], function() {
    HTMLPager_prototype = {
        template: '<div class="alink nav"></div>',
        template_alt: '<div class="alink nav2" ondblclick="return false" onselectstart="return false"></div>',
        debug_label: "HTMLPager",
        prev_label: "Previous Page",
        next_label: "Next Page",
        constructor: function(t, e, s, i) {
            var n;
            if (i = i || this.gmi_args, this.offset_param = {
                    name: "offset"
                }, this.alt = !0, this.alt && (this.template = this.template_alt), "function" == typeof t) return this.auto_scroll = !0, void 0;
            this.owner = t, this.node = this.gmi_node ? this.gmi_node : $(this.template)[0], this.callback = s;
            for (n in e || {}) this[n] = e[n];
            for (n in i || {}) this[n] = i[n];
            this.on()
        },
        makeLink: function(t) {
            return this.offset_param ? "?" + (this.backup_query_string || "") + this.offset_param.name + "=" + Number(t) * Number(this.offset_param.count || this.count_per_page || 24) : "#"
        },
        on: function() {
            var t, e, s, i, n;
            if (this.gmi_node && !this.backup_query_string && (n = (this.gmi_node.getElementsByTagName("a") || [])[0]) && (this.backup_query_string = (n.href || "").split("?")[1] + "&amp;"), t = [], t.push('<span class="shadow"><span>'), this.page > 0 ? t.push('<a class="l page prevlink" href="' + this.makeLink(this.page - 1) + '" htmlpage="' + (this.page - 1) + '">' + this.prev_label + "</a>") : t.push('<del class="l">' + this.prev_label + "</del>"), this.alt || t.push("&nbsp;&nbsp;&nbsp;&nbsp;"), "boolean" == typeof this.pages) t.push("&nbsp;&nbsp;&nbsp;&nbsp;"), t.push("&nbsp;&nbsp;&nbsp;&nbsp;");
            else if (this.pages--, e = Math.max(0, this.page - 1), s = Math.min(e + 4, this.pages), e = Math.max(0, Math.min(e, s - 4)), e != s)
                for (i = e; s >= i; ++i) i == this.page ? t.push("<strong>" + (i + 1) + "</strong>") : (t.push('<a class="pagelink" href="' + this.makeLink(i) + '" htmlpage="' + i + '">'), i == e && i > 0 ? (t.push("..."), t.push(i + 1)) : i == s && this.pages > i ? (t.push(i + 1), t.push("...")) : t.push(i + 1), t.push("</a>"));
            this.alt || t.push("&nbsp;&nbsp;&nbsp;&nbsp;"), this.pages === !0 || this.pages > this.page ? t.push('<a class="r page nextlink" href="' + this.makeLink(this.page + 1) + '" htmlpage="' + (this.page + 1) + '">' + this.next_label + "</a>") : t.push('<del class="r">' + this.next_label + "</del>"), t.push("</span></span>"), this.node.innerHTML = t.join("");
            var a = this;
            this.instrument && $(this.node).find(".prevlink").attr(this.instrument.prevLinkAttr).end().find(".nextlink").attr(this.instrument.nextLinkAttr).end().find(".pagelink").attr(this.instrument.pageLinkAttr).each(function() {
                $(this).data(a.instrument.pageLinkPageDataName, {
                    page: this.getAttribute("htmlpage")
                })
            }), $("a", this.node).each(function() {
                var t = Refunction(a, a.clicked, Number(this.getAttribute("htmlpage")));
                a.instrument && a.instrument.callback && (t = a.instrument.callback.bind(a, t)), $(this).click(t)
            })
        },
        off: function() {},
        clicked: function(t) {
            if (this.callback) this.callback(t);
            else {
                if (!this.owner) return !0;
                this.owner.setProp("page", t)
            }
            return this.auto_scroll && (Browser.isGecko || Browser.isIE ? document.documentElement.scrollTop = Ruler.document.node(this.owner.node).y : document.body.scrollTop = Ruler.document.node(this.owner.node).y), window.event && (window.event.cancelBubble = !0), !1
        },
        update: function(t) {
            var e;
            for (e in t) this[e] = t[e];
            void 0 != t.offset && this.count_per_page && (this.page = Math.floor(t.offset / this.count_per_page)), this.on()
        }
    }, window.HTMLPager = Base.extend(HTMLPager_prototype), HTMLPager_prototype.gmiConstructor = HTMLPager_prototype.constructor, HTMLPager_prototype.constructor = null, delete HTMLPager_prototype.constructor, window.GPager = GMIBase.extend(HTMLPager_prototype), window.DWait && DWait.run("jms/pages/htmlpager.js")
});
DWait.ready(["jms/lib/bind.js", "jms/lib/jquery/jquery.current.js", "jms/lib/station.js", "jms/lib/ddd.js", "jms/lib/ruler.js"], function() {
    Surfer = {
        create: function(o, t, e, n, d, i, a) {
            var r, p, s, l = $(o.target).closest("div[collect_rid]");
            if (r = t.cloneNode(d || !1), r.className += " surfer", !deviantART.deviant.browseadult && l.length && l.hasClass("tt-ismature") && (r = document.createElement("div"), r.className += " thumb_agegate surfer", r.innerHTML = '<div class="agegate"><div class="nogo icon-blocked"></div><h1>Mature Content</h1></div>'), a) {
                var u = document.createElement("div");
                u.classList.add(a), u.appendChild(r), document.body.appendChild(u)
            } else document.body.appendChild(r);
            return s = i ? null : Ruler.clickMod(Ruler.document.jq_node(t), DDD.p_down || Ruler.document.pointer(o)), p = Ruler.document.pointer(o, s), Station.apply(r, "left", p.x), Station.apply(r, "top", p.y), n && 1 != n && Station.apply(r, "opacity", n), r.style.display = "block", 1 != e && Station.apply(t, "opacity", e || .3), {
                node: r,
                ddd_node: t,
                ddd_node_opacity: e || .3,
                node_opacity: n || 1,
                mod_down: s
            }
        },
        update: function(o, t, e) {
            var n;
            n = Ruler.document.pointer(t, o.mod_down), e && (n = Ruler.scrollCompensate(o.ddd_node, n)), Station.apply(o.node, "left", n.x), Station.apply(o.node, "top", n.y)
        },
        flyHome: function(o, t, e, n) {
            var d, n, i;
            d = Ruler.document.pointer(t, o.mod_down), rect2 = Ruler.document.jq_node(o.ddd_node), p2 = Ruler.scrollCompensate(o.ddd_node, d), n || (n = rect2), Station.push(o.node, "left", {
                from: p2.x,
                to: rect2.x,
                time: 300,
                f: Interpolators.pulse
            }), i = [o.node, "top"], i.push({
                from: d.y,
                to: rect2.y,
                time: 300,
                f: Interpolators.pulse
            }), i.push(function(t) {
                t && t(), 1 != o.ddd_node_opacity && Station.apply(o.ddd_node, "opacity", 1), setTimeout(function() {
                    o.node.parentNode && o.node.parentNode.removeChild(o.node)
                }, 1)
            }.bind(this, e)), Station.push.apply(Station, i)
        },
        sinkInto: function(o, t, e, n, d) {
            var i, a;
            i = Ruler.document.pointer(t, o.mod_down), Station.push(o.node, "left", {
                from: i.x,
                to: e.x,
                time: 300,
                f: Interpolators.pulse
            }), Station.push(o.node, "width", {
                from: o.node.offsetWidth,
                to: e.w ? e.w : e.x2 - e.x,
                time: 300,
                f: Interpolators.pulse
            }), Station.push(o.node, "height", {
                from: o.node.offsetHeight,
                to: e.h ? e.h : e.y2 - e.y,
                time: 300,
                f: Interpolators.pulse
            }), a = [o.node, "top"], a.push({
                from: i.y,
                to: e.y,
                time: 300,
                f: Interpolators.pulse
            }), a.push(function(t) {
                t && t(), 1 != o.ddd_node_opacity && setTimeout(Station.push.bind(Station, o.ddd_node, "opacity", {
                    from: o.ddd_node_opacity,
                    to: 1,
                    time: 500,
                    f: Interpolators.sineCurve
                }), d || 1), setTimeout(function() {
                    o.node.parentNode && o.node.parentNode.removeChild(o.node)
                }, 1)
            }.bind(this, n)), Station.push.apply(Station, a)
        },
        dissolve: function(o, t, e, n) {
            Station.push(o.node, "opacity", {
                from: Station.read(o.node, "opacity") || o.node_opacity,
                to: 0,
                time: 300,
                f: Interpolators.sineCurve
            }, {
                from: 0,
                to: 0,
                time: n || 25
            }, function() {
                1 != o.ddd_node_opacity && Station.push(o.ddd_node, "opacity", {
                    from: o.ddd_node_opacity,
                    to: 1,
                    time: 500,
                    f: Interpolators.sineCurve
                }), setTimeout(function() {
                    o.node.parentNode && o.node.parentNode.removeChild(o.node)
                }, 1)
            }, e || void 0)
        }
    }, window.DWait && DWait.run("jms/lib/surfer.js")
});
DWait.ready(["jms/lib/formatting.js"], function() {
    function s(s, t, h) {
        return (s ? s : "no") + " " + t + (1 == s ? "" : h || "s")
    }
    window.htmlspecialchars = function(s) {
        return s.replace(/\&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    }, window.thumbHTML = function(t) {
        var h, i, u, e, a, p;
        return a = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"], h = [], h.push('<div class="tt-a" hakkadeviationid=' + t.id + ">"), h.push('<span class="tt-w"><span class="'), t.is_transparent ? h.push("mild shadow") : h.push("shadow"), h.push('">'), t.is_mature && !deviantART.deviant.browseadult ? h.push('<a class="thumb ismature" style="width: ' + t["thumb" + t.size].width + "px; height: " + t["thumb" + t.size].height + 'px;">' + '<div class="thumb_agegate">' + '<div class="agegate">' + '<div class="nogo icon-blocked"></div>' + "<h1>Mature Content</h1>" + "</div>" + "</div>" + "</a>") : t.is_film && "150" == t.size && t.url ? (h.push("<a"), t.option_link && h.push(' target="_blank"'), h.push(' style="_margin-top:'), h.push(Math.floor((165 - t.thumbfilm.height) / 2)), h.push(";width:"), h.push(t.thumbfilm.width), h.push("px;height:"), h.push(t.thumbfilm.height), h.push('px" href="'), h.push(htmlspecialchars(t.url)), h.push('" class="film"><i></i><div style="display: inline-block; background: #8B928B; width: '), h.push(t.thumbfilm.width), h.push("px; height:"), h.push(t.thumbfilm.height), h.push("px;"), h.push('"></div><b class="film"><img'), t.option_link || h.push(' onclick="if (this.attachEvent && navigator.cpuClass)this.parentNode.parentNode.click()"'), h.push(' alt="" src="'), h.push(t.thumbfilm.src), h.push('"/></b></a>')) : t.excerpt && Number(t.size) >= 150 ? (h.push("<a"), t.option_link && h.push(' style="cursor:default" target="_blank"'), h.push(' href="'), h.push(htmlspecialchars(t.url)), h.push('" class="lit" onmouseover="LitBox.hover(this)" onmouseout="LitBox.out(this)"><i></i>'), h.push('<img style="display:inline-block; background-color: #ABB2AB; width: '), h.push(t.thumb150.width), h.push("px; height:"), h.push(t.thumb150.height), h.push("px;"), h.push('"></div><img class="lit" src="'), h.push(t.excerpt_icon), h.push('"/><q><strong>'), h.push(t.title), h.push("</strong>"), h.push(t.excerpt), h.push("</q></a>")) : (t.url && (h.push("<a"), t.option_link && h.push(' style="cursor:default" target="_blank"'), h.push(' href="'), h.push(htmlspecialchars(t.url)), h.push('" title="'), h.push(htmlspecialchars(t.tooltip)), h.push('">')), h.push('<i></i><img width="'), h.push(t["thumb" + t.size].width), h.push('" height="'), h.push(t["thumb" + t.size].height), h.push('" src="'), h.push(t["thumb" + t.size].src), h.push('"'), t.is_transparent && h.push(' class="transparent"'), h.push("/>"), t.url && h.push("</a>")), h.push("</span>"), t.checkbox_mode && (h.push('<input type="checkbox" class="checkbox" name="deviationids[]" value="'), h.push(t.id), h.push('"/>')), e = "", t.film_time && (u = t.film_time, e += '<b class="filmtime" title="Film: ', e += s(Math.floor(u / 60), "minute"), u % 60 && (e += ", " + s(u % 60, "second")), e += '">', e += u / 60 > 99 ? "Long" : Math.floor(u / 60) + ":" + (u % 60 > 10 ? u % 60 : "0" + u % 60), e += "</b>"), t.option_link ? h.push('<a href="" class="thumbmenu"><img src="//st.deviantart.net/minish/gallery/menu-button-b.gif" alt="[menu]"/></a>') : (t.title && (h.push(' <a href="' + t.url + '" title="' + htmlspecialchars(t.tooltip) + '">' + t.title), h.push(e), e = "", h.push("</a><br/><small>")), t.artist && (h.push(" by "), h.push('<a href="' + document.location.protocol + "//" + t.artist + '.deviantart.com/">' + t.artist + "</a>")), t.category && (h.push(" in "), t.category_url && (p = t.category_url, p = p.replace(/^h[t]tps?:\/\/browse\.deviantart\.com[\/]/, "#_browse/"), h.push('<a title="'), h.push(htmlspecialchars(t.tooltip)), h.push('" href="'), h.push(htmlspecialchars(p)), h.push('">')), h.push(htmlspecialchars(t.category)), h.push("</a>")), t.ts && (i = new Date, i.setTime(1e3 * Number(t.ts)), h.push(", " + a[i.getMonth()]), h.push(" '" + (i.getFullYear() + "").substr(Math.max((i.getFullYear() + "").length - 2, 0)))), t.search_score && h.push(" at " + t.search_score), h.push(e), e = "", t.title && h.push("</small>")), h.push("</span></div>"), h.join("")
    }, window.DWait && DWait.run("jms/lib/thumbhtml.js")
});
window.App || (window.App = App = {}), App.cacheResourceView = function(e, p, r, c, s) {
    var i, o, u;
    if ("string" == typeof c) u = c;
    else {
        u = [];
        for (o in c) u.push(o + ":" + Number(c[o]));
        u.sort(), u = u.join(",")
    }
    return i = e + ":" + p + ":" + r + ":" + u, App.resources_by_rid_cache || (App.resources_by_rid_cache = {}), void 0 === s ? App.resources_by_rid_cache[i] : (App.resources_by_rid_cache[i] = s, void 0)
}, App.stuff || (App.stuff = {}), window.DWait && DWait.run("jms/lib/app.js.resource_cache.js");
DWait.ready([".domready", "cssms/lib/thumbnails-stack.css", "cssms/lib/thumbnails.css", "cssms/minish/lub.css", "cssms/lib/survival.css", "jms/lib/app.js.resource_cache.js", "jms/pages/lub/lubble.js", "jms/pages/lub/lub_attention_notice.js", "jms/lib/thumbhtml.js", "jms/pages/chat07/dAmnChat.js", "jms/lib/surfer.js", "jms/lib/ddd.js", "jms/lib/ruler.js", "jms/lib/jquery/jquery.current.js", "jms/lib/popup2.js", "jms/pages/lub/lub_scroll_manager.js", "jms/lib/gmi.js", "jms/pages/lub/lub_collection.js", "jms/pages/lub/lub_constants.js", "jms/lib/difi.js", "jms/lib/station.js", "jms/lib/events.js", "jms/lib/liquidswitch.js", "jms/lib/glbl.js", "jms/lib/bind.js", "jms/lib/browser.js", "jms/lib/dtlocal.js", "jms/lib/jquery/jquery.current.js", "jms/lib/pubsub.js", "jms/lib/php.js"], function() {
    window.Lub = function() {
        var t, e, i;
        return this.groups_on = $("#oh-menu-deviant a.mi i.i16").length > 0, DTLocal.infect(this), t = document.getElementById("top-deviant") || document.getElementById("top-collect") || document.getElementById("overhead-collect") || document.getElementById("head-container"), Lub.newschool = document.getElementById("logindock") || document.getElementById("overhead-collect") || document.getElementById("head-container"), this.node = t, i = $(".verifybar"), i.length > 0 && (this.verifybar = i[0]), document.getElementById("favourites-preload") ? (Lub.shutdown(), null) : (this.ready = !0, this.deviant = deviantART.deviant, this.deviant && this.deviant.username ? (0 != (window.location.href + "").indexOf("https:") && $("<div>", {
            "class": "preload"
        }).append($("<span>").css("background", "background:url(https://st.deviantart.net/minish/widgets/favup.gif)")).appendTo(this.node), this.collect_link_node = document.getElementById("collectlink"), Browser.isTouch || this.localEventHook(document.documentElement, "mousedown", this.mouseDown.bind(this)), e = $("div.bubbleview")[0] || document.getElementById("output"), e && !Glbl("Site.is_mobile") && (f = this.mouseJiggle.bind(this), this.localEventHook(e, Browser.isGecko ? "mousemove" : "mouseover", f), this.localEventHook(e, "mouseout", f)), this.localEventHook(document.documentElement, "click", this.masterClick.bind(this)), this.localEventHook(window, "focus", this.masterFocus.bind(this)), void 0) : (Lub.shutdown(), null))
    }, Lub.RESVIEW_OPTIONS = {
        title: !1,
        artist: !1
    }, Lub.shutdown = function() {
        window.da_minish_lub && (da_minish_lub.localDestroy(), delete da_minish_lub)
    }, Lub.reboot = function() {
        Lub.shutdown(), setTimeout(function() {
            da_minish_lub = new Lub, window.da_minish_lub = da_minish_lub
        }, 800)
    }, Lub.prototype = {
        init: function() {
            var t, e;
            if (!this.init_already) {
                this.init_already = !0, this.art_listeners = [], this.active_saves = 0, this.noun = "Collection", this.first_drop = !0, this.save_notice = new LiquidSwitch(this.saveSwitcher.bind(this), "off"), this.local[this.localUID()] = this.save_notice, this.save_notice.node = $("<div>", {
                    id: "lub-saving",
                    text: "?"
                })[0], Browser.isMac && $(this.save_notice.node).addClass("mac"), this.node.parentNode.insertBefore(this.save_notice.node, this.node.nextSibling);
                var i = '<strong class="h1">Favourites</strong> <span class="collect-tagline">Drag and drop your favourite art here</span>';
                e = $("<div>", {
                    id: "lub"
                }).append($("<div>", {
                    "class": "collection-head"
                }).html(i)).append($("<div>", {
                    "class": "collections"
                }).append($("<div>", {
                    "class": "collectionzone"
                }))).appendTo(this.node)[0], this.local[this.localUID()] = e, this.node.appendChild(e), this.lub_node = e, this.head_node = this.lub_node.firstChild, this.collect_node = this.lub_node.firstChild.nextSibling.firstChild, t = this.lubClickOrMouseHover.bind(this), Events.hook(this.lub_node, "mousedown", t), Events.hook(this.lub_node, "click", t), this.local[this.localUID()] = [Events.unhook, this.lub_node, "mousedown", t], this.local[this.localUID()] = [Events.unhook, this.lub_node, "click", t], t = this.otherMenuClick.bind(this), document.getElementById("menulink") && this.localEventHook(document.getElementById("menulink"), "click", t), document.getElementById("friendslink") && !Lub.newschool && this.localEventHook(document.getElementById("friendslink"), "click", t), document.getElementById("top-friends") && this.localEventHook(document.getElementById("top-friends"), "click", t), document.getElementById("menuDropArrow") && this.localEventHook(document.getElementById("menuDropArrow"), "click", t), this.paused = !1
            }
        },
        pause: function() {
            this.paused = !0
        },
        unpause: function() {
            this.paused = !1
        },
        guid: function() {
            return this.guid_counter || (this.guid_counter = 100), this.guid_counter++
        },
        localRecv: function(t) {
            var e, i;
            if ("destroy" == t)
                for (this.hidden(), e = 0; i = [this.lub_node, (this.save_notice || {}).node][e]; e++) i && i.parentNode && i.parentNode.removeChild(i)
        },
        saveSwitcher: function(t, e) {
            return "off" == e && (Lub.scrollHack(1), Station.apply(this.save_notice.node, "opacity", 1)), "off" == t ? (this.save_notice.timer && clearInterval(this.save_notice.timer), Station.push(this.save_notice.node, "opacity", {
                from: 1,
                to: 0,
                time: 600,
                f: Interpolators.sineCurve
            }, function() {
                Lub.scrollHack(0), this.save_notice.node.style.display = "none"
            }.bind(this)), !0) : (t.charAt(0) == t.charAt(0).toUpperCase() && (this.save_notice.node.style.backgroundColor = "InfoBackground", this.save_notice.node.style.color = "InfoText", this.save_notice.timer = setInterval(function() {
                this.save_notice.node.style.color = "infobackground" == (this.save_notice.node.style.color + "").toLowerCase() ? "InfoText" : "InfoBackground"
            }.bind(this), 600), this.save_notice.node.innerHTML = t + "..."), this.save_notice.node.style.display = "block", void 0)
        },
        otherMenuClick: function() {
            return !this.local.scrollmanager || this.local.scrollmanager.top_floating && 0 != (document.body.scrollTop || document.documentElement.scrollTop) || (this.locks = 0, this.hide(!1)), !0
        },
        lubClickOrMouseHover: function(t) {
            var e = t.target || t.srcElement;
            return this.locks || this.slide(0, 0), "click" == t.type && this.local.activelubble && !$(e).closest("div.lubble")[0] ? (this.localClean(/activelubble.*/), !1) : void 0
        },
        buttonClicked: function() {
            return this.ready ? (this.locks || this.out ? this.local.activelubble ? this.localClean(/activelubble.*/) : (this.locks = 0, this.hide(!1), Browser.isKHTML && !document.getElementById("overhead") && this.local.scrollmanager && this.local.scrollmanager.top_floating && (this.lub_node.style.display = "none", setTimeout(function() {
                this.lub_node.style.display = "block"
            }.bind(this), 1))) : (this.moveSmallDeviations = !0, this.clickedOpen = !0, this.slide(0, 0)), PubSub.publish("DaGa.track_event", {
                category: "BetterBrowse",
                action: "favourites_click_open"
            }), !1) : void 0
        },
        reload: function() {
            if (!this.initial_call_active) {
                if (this.localClean(/activelubble.*/), this.initial_call_active = !0, this.initial_call_history ? (this.art_query_cache = {}, f = DiFi.pushPost) : f = DiFi.pushPrivateGet, this.collections_data)
                    for (i = 0; this.collections_data[i]; i++) {
                        try {
                            this.collections_data[i].localDestroy()
                        } catch (t) {}
                        this.collect_node.removeChild(this.collections_data[i].node), delete this.collections_data[i]
                    }
                this.collect_node.innerHTML = '<span class="lubload">loading</span>', this.collections_data = [], this.subfolder_counts = [], f.call(DiFi, "Gallections", "get_collections_for_lub", [this.deviant.id], function(t, e) {
                    var i, s;
                    if (this.modCookie(!0), $(".lubload", this.collect_node).remove(), !t) return Lub.reboot(), void 0;
                    for (this.initial_call_active = !1, this.initial_call_history = !0, i = 0; e.response.content[i]; i++) "Featured" == e.response.content[i].title && (this.noun = 1 & e.response.content[i].attributes ? "devPack" : "Collection", "devPack" == this.noun && (this.lub_node.getElementsByTagName("strong")[0].innerHTML = this.noun + "s")), Number(e.response.content[i].parentid) ? this.subfolder_counts[e.response.content[i].parentid] = (this.subfolder_counts[e.response.content[i].parentid] || 0) + 1 : this.introducing(this.formatRawCollection(e.response.content[i]), !1, !1);
                    $(".new-button", this.node)[0] || (s = $("<div>", {
                        "class": "new-button",
                        title: "New" + this.noun
                    }).appendTo(this.collect_node)[0], this.localEventHook(s, "click", function(t) {
                        var e, i, s, o = t.target || t.srcElement;
                        if (this.localClean("refresh_new_timer"), $(o).hasClass("pew-button")) {
                            for (s = $("div.stackzone", this.collect_node).last().get(0), i = Number(s.getAttribute("collect_rid").split(":")[1]), e = 0; this.collections_data[e]; e++)
                                if (Number(this.collections_data[e].collection.galleryid) == i) {
                                    if (this.collections_data[e].collection.rids.length > 0) return this.refreshButton(), void 0;
                                    (this.collections_data[e].collection.galleryid > 0 || this.collections_data[e].processing) && (this.difiSave("delete", [deviantART.deviant.id, RESOURCE_FAVCOLLECTIONS, i]), DiFi.timer(10), PubSub.publish("DaGa.track_event", {
                                        category: "Collections",
                                        action: "delete_collection",
                                        label: "source-drag_collectionowner-user"
                                    })), this.collections_data.splice(e, 1), Station.push(s, "marginLeft", {
                                        from: 0,
                                        to: -140,
                                        time: 250,
                                        f: Station.f.inversion(Interpolators.pulse)
                                    }, function() {
                                        this.refreshCollectTargets(), this.refreshButton(), s.parentNode.removeChild(s)
                                    }.bind(this));
                                    break
                                }
                        } else this.introducing(null, !1, !0), this.collections_data[this.collections_data.length - 1].askName(), this.refreshButton()
                    }.bind(this))), this.refreshCollectTargets(), this.refreshButton()
                }.bind(this)), this.groups_on && DiFi.pushPrivateGet("Grusers", "fetchGroupListForLub", [], function(t, e) {
                    var i, s, o, a, r, l;
                    if (t && !(e.response.content instanceof Array)) {
                        this.stored_groups = e.response.content, r = [];
                        for (s in e.response.content) n = e.response.content[s], n.groupid = s, r.push(n);
                        if (a = r.length, a > 1 && (l = document.getElementById("loginbar-group")))
                            for (this.primary_group_name = $(l).find("a").text().trim(), l = ">" + this.primary_group_name + "<", i = 0; r.length > i; i++)
                                if (r[i].link.indexOf(l) > 0) {
                                    r.splice(0, 0, r[i]), r.splice(i + 1, 1);
                                    break
                                } for (a > 2 && (o = {
                                imperative: "",
                                read_only: !0,
                                title: "<br>Other Groups",
                                is_group: !0,
                                group_id: -1,
                                owner_id: -1
                            }, this.introducing(o, !0, !1)), i = a > 2 ? 0 : 1; i >= 0; i--) {
                            var n = r[i];
                            o = {
                                imperative: "Send to<br>",
                                read_only: !0,
                                title: n.link,
                                is_group: !0,
                                group_id: n.groupid,
                                owner_id: n.groupid,
                                target_aggregations: n.target_aggregations
                            }, this.introducing(o, !0, !1)
                        }
                        a && this.refreshCollectTargets()
                    }
                }.bind(this)), DiFi.send()
            }
        },
        introducing: function(t, e, i) {
            var s, o = this.collections_data.length && this.collect_node.firstChild.offsetWidth ? this.collect_node.firstChild.offsetWidth : 140;
            o += 13, o *= 1 + this.collections_data.length, o += 40, this.collect_node.style.width = o + "px", void this.collect_node.offsetWidth, s = new LubCollection(this, t), i && (Station.apply(s.node, "marginLeft", -140), Station.push(s.node, "marginLeft", {
                from: -140,
                to: 0,
                time: 700,
                f: Interpolators.pulse
            }, this.refreshCollectTargets.bind(this)), Station.push(this.collect_node.parentNode, "scrollLeft", {
                from: this.collect_node.parentNode.scrollLeft,
                to: this.collect_node.parentNode.scrollLeft + 200,
                time: 700,
                f: Interpolators.pulse
            })), e ? (this.collections_data.unshift(s), this.collect_node.firstChild ? this.collect_node.insertBefore(s.node, this.collect_node.firstChild) : this.collect_node.appendChild(s.node)) : (this.collections_data.push(s), this.collect_node.appendChild(s.node))
        },
        refreshButton: function() {
            var t, e;
            t = this.collectionFromRID([RESOURCE_FAVCOLLECTIONS, $("div.stackzone", this.collect_node).last().get(0).getAttribute("collect_rid").split(":")[1]]), e = $(".new-button", this.collect_node)[0], e.style.visibility = this.collections_data && this.collections_data.length > 1 || this.collections_data[0].collection.rids.length > 0 ? "visible" : "hidden", this.collect_node.appendChild(e), t && "Featured" != t.collection.title && !t.collection.is_group && 1 > t.collection.rids.length ? ($(e).addClass("pew-button"), e.setAttribute("title", "Remove New " + this.noun)) : ($(e).removeClass("pew-button"), e.setAttribute("title", "New " + this.noun))
        },
        refreshNewCollections: function() {
            var t;
            for (this.localClean("refresh_new_timer"), t = 0; this.collections_data[t]; t++) 0 > this.collections_data[t].collection.galleryid && !this.collections_data[t].processing && this.collections_data[t].create()
        },
        stayFresh: function() {
            var t;
            for (t = 0; this.collections_data[t]; t++)
                if (!this.collections_data[t].ready) return;
            this.introducing(null, !0, !0)
        },
        difiSave: function(t, e, i) {
            var s = "Gallections";
            "add_favourite_to_folder" == t && (s = "Deviation"), this.active_saves++, this.save_notice.change("Saving", 1e3, 800), DiFi.pushPost(s, t, e, this.saver.bind(i || this))
        },
        saver: function(t, e) {
            if (!t && !e.request) return da_minish_lub.bluescreen(), void 0;
            if (--da_minish_lub.active_saves || da_minish_lub.save_notice.change("off", 0, 500), t) {
                switch (da_minish_lub.modCookie(!1), e.request.method) {
                    case "add_favourite_to_folder":
                        PubSub.publish("Lub.deviation_favourited", {
                            deviationid: this.drag_data.rid[1]
                        }), $.each(GMI.query("ResourceViewFavouriteButton", {
                            match: {
                                id: e.request.args[5]
                            }
                        }), function() {
                            this.got(!0, !1, !0, !0)
                        });
                        break;
                    case "create":
                        this.callback(e.response.content)
                }
                return this.clickedOpen || window.setTimeout(function() {
                    this.hide()
                }.bind(this), 300), void 0
            }
            if (e.request && e.request.method in {
                    save: 1,
                    submitFaveFromLub: 1
                }) return DiFi.stdErr("Unable to send favourite.", e.response.content), void 0;
            if ("add_favourite_to_folder" == e.request.method) return DiFi.stdErr("Unable to +favourite", e.response.content), this.reload(), void 0;
            switch (e.request.method) {
                case "create":
                    setTimeout(this.lub.reboot.bind(this.lub), 200);
                    break;
                default:
                    setTimeout(Lub.reboot, 200)
            }
        },
        bluescreen: function() {
            this.lub_node.style.background = "#212A2A url(https://e.deviantart.net/emoticons/c/confused.gif) no-repeat center", this.collect_node.parentNode.style.height = "140px", this.collect_node.parentNode.firstChild.style.display = "none", setTimeout(Lub.reboot, 2300)
        },
        checkCookie: function() {
            var t;
            this.collections_data && (t = ((document.cookie + ";").match(/\blubfavexp=(.*?);/) || [])[1], (t || 1) > (this.last_cookie_check || 0) && (this.last_cookie_check = Math.max(t || 0, Math.floor((new Date).valueOf() / 1e3)), this.art_query_cache = {}, this.reload()))
        },
        modCookie: function(t, e) {
            var i = Math.floor((new Date).valueOf() / 1e3);
            e || (this.last_cookie_check = i), t || (document.cookie = "lubfavexp=" + i + "; path=/; domain=.deviantart.com")
        },
        slide: function(t, e) {
            var i, s, o;
            $("#adminbar").is(":visible") || (this.init(), this.out || (this.collections_data ? this.locks || this.checkCookie() : this.reload(), e || (this.locks || (this.locks = 0), this.locks++), !Browser.isIE || document.documentMode >= 7 || $("iframe", this.lub_node)[0] || !$("iframe")[0] || $("<iframe>").appendTo(this.lub_node), Browser.isGecko && (i = $("iframe")[0], i && !$(i).closest("div.bubbleview")[0] && (i.style.visibility = "hidden")), this.slide_timer || ((o = document.getElementById("deviant-commands")) && (o.style.zIndex = 24), (o = document.body.className.indexOf("with-apps") >= 0 && document.getElementById("oh-mainmenu")) && (o.style.display = "none"), this.slide_timer = setTimeout(function() {
                var t;
                delete this.slide_timer, this.local.scrollmanager || window.dAmnChats && window.dAmnChatTab_active || (this.local.scrollmanager = new LubScrollManager(this)), this.collect_link_node && ($(this.collect_link_node).addClass(document.getElementById("overhead") ? "active" : "lub-active"), this.collect_link_node.blur()), t = document.getElementById("menulink"), t && $(t).addClass("menulink-lub-active"), this.lub_node.style.visibility = "visible", this.lub_node.style.display = "block", s = document.getElementById("overhead") ? -62 : -72, vms_feature("header_uplift") && (s = -42), Station.push(this.lub_node, "top", {
                    from: (parseInt(Station.read(this.lub_node, "top")) || 0) + s,
                    to: 72 + s,
                    time: 100,
                    f: Interpolators.pulse
                }, this.slidden.bind(this))
            }.bind(this), t)), "anticipation" == this.save_notice.state && (this.save_notice.node.style.display = "none", this.save_notice.change("off", 0, 1e3)), Popup2.hideOverlayElements($(this.lub_node))))
        },
        hide: function(t) {
            var e;
            $("#lub-deviation-clone").remove(), this.clickedOpen = !1, t && this.locks || this.locks && (this.locks--, this.locks) || (this.slide_timer && (clearTimeout(this.slide_timer), delete this.slide_timer), this.localClean(/activelubble.*/), Browser.isGecko && this.collect_node && (this.collect_node.parentNode.style.overflow = "hidden"), e = document.getElementById("overhead") ? -52 : -72, this.lub_node && Station.push(this.lub_node, "top", {
                from: (parseInt(Station.read(this.lub_node, "top")) || 0) + e,
                to: -122 + e,
                time: 100,
                f: Interpolators.pulse
            }, this.hidden.bind(this)), Popup2.showOverlayElements())
        },
        slidden: function() {
            if (Browser.isGecko && this.collect_node && (this.collect_node.parentNode.style.overflow = "auto"), this.refreshCollectTargets(), this.out || this.dragNotices(), this.moveSmallDeviations) {
                var t = jQuery("#zoomed-in img");
                if (1 == t.length) {
                    var e = jQuery("#lub"),
                        i = t.offset().top + t.height(),
                        s = e.offset().top + e.height();
                    if (visiblePixelsReq = 20, s + visiblePixelsReq > i) {
                        var o = $('<div id="lub-deviation-clone"></div>').append(t.clone().css("margin", "0"));
                        o.css({
                            top: s + 10 + "px",
                            left: t.offset().left - 10 + "px"
                        }), $("body").append(o)
                    }
                }
                this.moveSmallDeviations = !1
            }
            this.out = !0
        },
        hidden: function() {
            var t;
            node = document.getElementById("menulink"), node && $(node).removeClass("menulink-lub-active"), node = document.body.className.indexOf("with-apps") >= 0 && document.getElementById("oh-mainmenu"), node && (node.style.display = "block"), this.lub_node && (this.lub_node.style.visibility = "hidden", this.lub_node.style.display = "none"), this.collect_link_node && ($(this.collect_link_node).removeClass(document.getElementById("overhead") ? "active" : "lub-active"), this.collect_link_node.blur()), this.localClean("scrollmanager"), document.getElementById("deviant-commands") && (document.getElementById("deviant-commands").style.zIndex = 100), DiFi.timer(40), this.noDragNotices(), this.out = !1, Browser.isGecko && (t = $("iframe")[0], t && !$(t).closest("div.bubbleview")[0] && (t.style.visibility = "visible"))
        },
        showLubble: function(t, e) {
            var i;
            i = t.scrollLeft, t.style.overflow = "hidden", t.scrollLeft = i, $(t).addClass("tucked-away"), Station.apply(e, "height", 1), this.lub_node.appendChild(e), Station.push(e, "height", {
                from: 1,
                to: 200,
                f: Interpolators.pulse,
                time: 150
            }), Station.push(this.head_node.parentNode, "marginTop", {
                from: 0,
                to: -30,
                f: Interpolators.pulse,
                time: 150
            }), Station.push(t, "marginTop", {
                from: 0,
                to: -112,
                f: Interpolators.pulse,
                time: 150
            })
        },
        hideLubble: function(t, e) {
            var i;
            i = t.scrollLeft, Browser.isGecko && Browser.isWin || (t.style.overflow = "auto", t.scrollLeft = i), $(t).removeClass("tucked-away"), Station.push(e, "height", {
                from: 200,
                to: 1,
                f: Interpolators.pulse,
                time: 150
            }), Station.push(this.head_node.parentNode, "marginTop", {
                from: -30,
                to: 0,
                f: Interpolators.pulse,
                time: 150
            }), Station.push(t, "marginTop", {
                from: -112,
                to: 0,
                f: Interpolators.pulse,
                time: 150
            }, function(e) {
                Browser.isGecko && Browser.isWin && (t.style.overflow = "auto", t.scrollLeft = i), this.refreshCollectTargets(), e.parentNode && e.parentNode.removeChild(e)
            }.bind(this, e))
        },
        formatRawCollection: function(t, e) {
            var i, s, o;
            if (t.top_resources = t.top_resources || [], Browser.isGecko)
                for (i = [], s = 0; s != Math.max(t.approx_total, t.top_resources.length); s++) t.top_resources[s] ? (i.push([t.top_resources[s][0], t.top_resources[s][1]]), App.cacheResourceView(t.top_resources[s][0], t.top_resources[s][1], "stacktile", {}, t.top_resources[s][2])) : i.push(null);
            else {
                for (i = Array(Number(t.approx_total)), o = 0, s = 0; s != t.top_resources.length; s++) i[o++] = [t.top_resources[s][0], t.top_resources[s][1]], App.cacheResourceView(t.top_resources[s][0], t.top_resources[s][1], "stacktile", {}, t.top_resources[s][2]);
                delete t.top_resources
            }
            return t.rids = i, e && (t.group_id = e.group_id, t.group_featuredid = e.group_featuredid, t.owner_id = e.owner_id, t.target_aggid = e.target_aggid), t.owner_id || (t.owner_id = deviantART.deviant.id), t
        },
        requestArt: function(t) {
            var e;
            if (e = App.cacheResourceView(t[0], t[1], "thumb", {}), void 0 !== e) return 0 != e && this.artBroadcast(t, e), void 0;
            t[0] == RESOURCE_DEVIATION || t[2] || (t[2] = 0), App.cacheResourceView(t[0], t[1], "thumb", {}, 0);
            var i = [1, 17, 20];
            DiFi.pushPublicGet("Resources", "get_thumb", [t[0], t[1], t[2] || 0, "thumb", i], this.artDiFi.bind(this)), DiFi.timer(10)
        },
        requestArtSlice: function(t, e, i) {
            var s = {
                    favby: this.deviant.username + "/" + t,
                    offset: e,
                    length: i,
                    view_mode: "lub_thumb",
                    mature_filter: !1,
                    decoded_order: "newest"
                },
                o = [s.favby, s.offset, s.length].join(",");
            return this.art_query_cache || (this.art_query_cache = {}), void 0 !== this.art_query_cache[o] ? (0 != this.art_query_cache[o] && this.artBroadcast(this._getQueryMarker(s), this.art_query_cache[o]), void 0) : (this.art_query_cache[o] = 0, DiFi.pushPrivateGet("PortalCore", "get_result_thumbs", ["browse", s], this.artDiFi.bind(this)), DiFi.timer(10), void 0)
        },
        artDiFi: function(t, e) {
            var i, s, o;
            if (this.art_query_cache || (this.art_query_cache = {}), !t && !e.request) return this.bluescreen(), void 0;
            if ("get_thumb" == e.request.method) {
                var a = [e.request.args[0], e.request.args[1], "thumb", {}, e.response.content.html];
                t ? App.cacheResourceView.apply(App, a) : 0 == App.cacheResourceView.apply(App, a) && (a[4] = void 0, App.cacheResourceView.apply(App, a)), this.artBroadcast([e.request.args[0], e.request.args[1]], t ? e.response.content.html : null)
            } else {
                var r = e.request.args[1],
                    l = [r.favby, r.offset, r.length].join(",");
                if (t) {
                    for (o = [], i = 0; s = e.response.content.resources[i]; i++) App.cacheResourceView(s[0], s[1], "thumb", {}, s[2]), this.artBroadcast([s[0], s[1]], s[2]), o.push([s[0], s[1]]);
                    this.art_query_cache[l] = o
                } else 0 == this.art_query_cache[l] && delete this.art_query_cache[l];
                this.artBroadcast(this._getQueryMarker(r), t ? o : null)
            }
        },
        artBroadcast: function(t, e) {
            var i;
            for (i = 0; i != this.art_listeners.length; i++) this.art_listeners[i] && this.art_listeners[i](t, e)
        },
        _getQueryMarker: function(t) {
            var e = t.favby.split("/")[1];
            return [e, t.offset, t.length].join(",")
        },
        mouseJiggle: function(t) {
            for (var e, i, s, o, a, r = t.target || t.srcElement, l = $("body").hasClass("maturefilter"); r && r != document.documentElement;) {
                if ("A" == r.tagName && r.getAttribute("href")) {
                    if (l && $(r).hasClass("ismature")) break;
                    if ($(r).closest(".no-lub").length > 0) break;
                    if ($(r).closest(".no-collect-notice").length > 0) break;
                    if (e = r.getAttribute("href").match(REG_DEVIATION_2) || r.getAttribute("href").match(REG_OLD_DEVIATION_2) || r.getAttribute("href").match(REG_DEVIATION_3)) {
                        if (i = $("img", r), i = i.hasClass("lit") ? i.parent()[0] : i.hasClass("avatar") ? i.closest(".thumb")[0] : i[0], !i || Number(i.height) > 200) break
                    } else e = r.getAttribute("href").match(REG_COLLECTION_2), e || (e = r.getAttribute("href").match(REG_COLLECTION));
                    if (e && (e[1] || "").toLowerCase() != (this.deviant.username || "!").toLowerCase()) {
                        for (a = [RESOURCE_DEVIATION, e[3]], s = (i || r).parentNode; s && s != document.documentElement;) {
                            if ("DIV" == s.tagName && s.getAttribute("collect_rid")) {
                                a = s.getAttribute("collect_rid").split(":"), a[0] = Number(a[0]);
                                break
                            }
                            s = s.parentNode
                        }
                        o = a[0] == RESOURCE_DEVIATION ? i : $("div.tv150", s)[0] || s
                    }
                    break
                }
                r = r.parentNode
            }
            return !0
        },
        mouseDown: function(t) {
            if (this.paused) return !0;
            var e, i, s, o, a, r, l = t.target || t.srcElement;
            if (t.ctrlKey || t.metaKey || t.altKey || t.shiftKey || (t.which || t.button) > 1) return !0;
            if (e = $(l).closest("a"), $("body").hasClass("maturefilter") && e.hasClass("ismature")) return !0;
            if ($(l).closest(".no-lub").length > 0) return !0;
            if ("img" == (l.tagName + "").toLowerCase() && 0 == (l.getAttribute("collect_rid") || "").indexOf("1:")) {
                if (this.dragged_deviant_hint = null, this.dragged_rid = this.parseRid(l.getAttribute("collect_rid")), DDD.mouseDown.call(l, t, this, 16)) return t.preventDefault(), void 0
            } else if ("img" == (l.tagName + "").toLowerCase() && l.getAttribute("collect_fullview") && (this.dragged_deviant_hint = deviantART && deviantART.pageData && deviantART.pageData.deviation_artist_username || "", this.dragged_rid = [RESOURCE_DEVIATION, parseInt(l.getAttribute("collect_fullview"), 10)], DDD.mouseDown.call($(l).closest("a")[0] || l.parentNode, t, this, 16))) return !1;
            if (!e.length) return !0;
            if (s = e.attr("href"), o = e.closest("div[collect_rid]").get(0), o ? (r = this.parseRid(o.getAttribute("collect_rid")), this.dragged_deviant_hint = o.getAttribute("collect_dv")) : (o = e.closest("div").get(0), r = [], this.dragged_deviant_hint = null), 2 > r.length || Number(r[0]) == RESOURCE_DEVIATION) {
                if (!s) return !0;
                if (a = s.match(REG_DEVIATION_3), a || (a = s.match(REG_DEVIATION_2)), a || (a = s.match(REG_OLD_DEVIATION_2)), i = e.find("img").get(0), !i) return !0;
                if (2 > r.length) {
                    if (!a) return !0;
                    r = [RESOURCE_DEVIATION, parseInt(a[3], 10)]
                }
            }
            switch (Number(r[0])) {
                case RESOURCE_DEVIATION:
                    break;
                case RESOURCE_GALLERIES:
                case RESOURCE_FAVCOLLECTIONS:
                    if (e = $("div.stackctrl", o)[0] || $("div.tv150", o)[0] || $("a.rs-customicon-link img", o)[0], !e) return !0;
                    e = $(e);
                    break;
                default:
                    return !0
            }
            if ($(o).closest("div.modal")[0]) return !0;
            switch (Number(r[0])) {
                case RESOURCE_DEVIATION:
                    a && a[1] ? this.dragged_deviant_hint = a[1] : (a = (e.attr("title") || "").match(/^.+ by .([a-zA-Z0-9_\-]+).*$/), a ? this.dragged_deviant_hint = a[1] : (a = (i.getAttribute("src") || "").match(/^.+_by_([a-zA-Z0-9_\-]+)\.[^\.]+$/), a && (this.dragged_deviant_hint = a[1])))
            }
            return this.dragged_rid = r, Number(r[0]) != RESOURCE_DEVIATION && (this.dragged_deviant_hint || "").toLowerCase() == this.deviant.username.toLowerCase() || !DDD.mouseDown.call(e.get(0), t, this) ? !0 : !1
        },
        parseRid: function(t) {
            for (var e = [], i = (t + "").split(":"), s = 0; Math.min(3, i.length) > s; s++) e.push(parseInt(i[s], 10));
            return e
        },
        masterClick: function(t) {
            var e = t.target || t.srcElement;
            if ((this.locks || this.out) && ($target = $(e), $target.closest("div.bubbleview")[0] || $target.closest("div.output-primary")[0] || $target.closest("div.stash-container")[0] || $target.closest("div.browse-container")[0] || $target.closest("div.feed-container-outer")[0] || $target.closest("div.watch-prototype-container")[0])) {
                if ("collect-button" == e.id || $(e).closest("#collect-button")[0]) return !0;
                this.hide(!1), Browser.isKHTML && this.lub_node && (this.lub_node.style.display = "none", setTimeout(function() {
                    this.lub_node.style.display = "block"
                }.bind(this), 1))
            }
            return this.locks && this.checkCookie(), !0
        },
        masterFocus: function() {
            this.locks && this.checkCookie()
        },
        getDragExtras: function() {
            var t, e = [],
                i = [];
            for (window.GResourceStream && (e = e.concat(GMI.query("GResourceStream"))), window.GResourceTV && (e = e.concat(GMI.query("GResourceTV"))), window.GResourceStack && (e = e.concat(GMI.query("GResourceStack"))), t = 0; t != e.length; t++) i = i.concat(e[t].commsAskForTargets());
            return i
        },
        ddd: {
            snap: function(t, e, i, s) {
                var o, a, r, l, n, d, c;
                if (document.body.scrollLeft = document.documentElement.scrollLeft = 0, this.slide(100 + Math.max(0, Math.min(300, Ruler.screen.pointer(t).y / 2) - 300), !0), this.drag_data = {
                        surfer: s || null,
                        rid: e ? i : this.dragged_rid
                    }, this.drag_snap_time = (new Date).valueOf(), this.drag_source_collection = null, this.drag_source_lubble = null, this.local.activelubble && $(this.ddd.node).closest("div.lubble")[0] ? (this.drag_source_lubble = this.local.activelubble, DDD.p_down.x += this.local.activelubble.node.firstChild.scrollLeft, (!Browser.isIE || document.documentMode >= 7) && (DDD.p_down.y -= window.pageYOffset || document.documentElement.scrollTop, DDD.p_down.y2 -= window.pageYOffset || document.documentElement.scrollTop)) : (this.local.activelubble && !this.local.activelubble.collection.is_group && this.localClean(/activelubble.*/), this.drag_data.rid[0] == RESOURCE_FAVCOLLECTIONS && $(this.ddd.node).closest("div.collectionzone")[0] && (this.drag_source_collection = $(this.ddd.node).closest("div.stackzone")[0], DDD.p_down.x += this.collect_node.parentNode.scrollLeft, (!Browser.isIE || document.documentMode >= 7) && (DDD.p_down.y -= window.pageYOffset || document.documentElement.scrollTop, DDD.p_down.y2 -= window.pageYOffset || document.documentElement.scrollTop))), !e) switch (this.drag_data.rid[0]) {
                    case RESOURCE_DEVIATION:
                        if (l = $("img", this.ddd.node)[0] || this.ddd.node, $(l).hasClass("lit")) {
                            this.ddd.node = this.ddd.node.parentNode.parentNode;
                            var h = $(this.ddd.node).find(".details, .t, small").hide(),
                                u = $(this.ddd.node).find(".shadow"),
                                _ = u.css("background-image");
                            u.css("background-image", ""), this.drag_data.surfer = Surfer.create(t, this.ddd.node, 1, void 0, !0), u.css("background-image", _), h.show();
                            break
                        }
                        if (l.classList.contains("avatar") || $(l).parents(".freeform").length) {
                            this.ddd.node = $(l).closest(".freeform")[0], this.drag_data.surfer = Surfer.create(t, this.ddd.node, .5, .8, !0, !1, "torpedo-container");
                            break
                        }
                        this.drag_data.surfer = Surfer.create(t, l), n = l.naturalWidth, d = l.naturalHeight, (n > 150 || d > 150) && (this.drag_data.surfer.modified = !0, this.drag_data.surfer.node.style.width = 150 / Math.max(n, d) * n + "px", this.drag_data.surfer.node.style.height = 150 / Math.max(n, d) * d + "px", this.drag_data.surfer.mod_down.x *= 150 / Math.max(n, d), this.drag_data.surfer.mod_down.y *= 150 / Math.max(n, d));
                        break;
                    case RESOURCE_GALLERIES:
                    case RESOURCE_FAVCOLLECTIONS:
                        $(this.ddd.node).hasClass("tv150") ? (this.drag_data.surfer = Surfer.create(t, this.ddd.node, 1, void 0, !0), $(this.drag_data.surfer.node).addClass("surfer-tv150 tv150"), $("div.a-stream", this.drag_data.surfer.node)[0] && $($("div.a-stream", this.drag_data.surfer.node)[0]).addClass("stream")) : $(this.ddd.node).hasClass("rs-customicon-link") ? (this.drag_data.surfer = Surfer.create(t, this.ddd.node, 1, void 0, !0), $(this.drag_data.surfer.node).addClass("surfer-rs-customicon")) : (this.drag_data.surfer = Surfer.create(t, this.ddd.node, void 0, void 0, !0), $(this.drag_data.surfer.node).addClass("surfer-stack stackctrl"))
                }
                for (o = $("div.bubbleview,#output").first().find("textarea,input.put-art-here,div.writer.put-art-here").get(), r = [], a = 0; o[a]; a++) r.push(Ruler.document.node(o[a]));
                window.dAmnChats && window.dAmnChatTab_active && (o.push($("input", $("div.damncrc-input", dAmnChats[dAmnChatTab_active].room_el)[0])[0]), this.drag_source_collection || this.drag_source_lubble ? (c = Ruler.document.node(document.getElementById("window")), c.y = Math.max(c.y, 240), r.push(c)) : r.push(Ruler.document.node(o[a]))), this.drag_data.text_targets = {
                    nodes: o,
                    rects: r
                }, this.drag_data.surfer && $("a", this.drag_data.surfer.node).removeAttr("href"), this.refreshCollectTargets(), this.drag_data.scroll_node = this.local.activelubble ? this.local.activelubble.node.firstChild : this.collect_node.parentNode
            },
            drag: function(t, e) {
                var i, s, o, a, r;
                if (i = (new Date).valueOf(), this.ddd.node) {
                    if ("object" == typeof t) this.drag_event_cache = {
                        clientX: t.clientX,
                        clientY: t.clientY,
                        x: t.x,
                        y: t.y
                    };
                    else if (t = this.drag_event_cache, !t) return;
                    if (this.drag_data.surfer && Surfer.update(this.drag_data.surfer, t, !0), this.drag_source_collection || this.locks || !(500 > i - this.drag_snap_time) || window.StashWriter) {
                        if (100 > i - (this.drag_lores_time || 0) && !e) return this.drag_lores_timer || (this.drag_lores_timer = setTimeout(this.ddd.drag.bind(this), 100)), void 0;
                        if (this.drag_lores_timer = null, this.drag_lores_time = i, "hidden" == this.lub_node.style.visibility && this.slide(0, !0), a = Ruler.document.pointer(t), this.drag_data.collect_targets) {
                            if (this.drag_data.scroll_node.scrollLeft > 0 && a.x > this.drag_data.collect_targets.master_rect.x && 48 > a.x - this.drag_data.collect_targets.master_rect.x) return this.drag_data.collect_targets.hover && ($(this.drag_data.collect_targets.hover).removeClass("maybedrop"), this.drag_data.collect_targets.hover = null), this.local.lubscrolltimer || (this.local.lubscrolltimer = [clearInterval, setInterval(this.lubScrollTimer.bind(this, !1), 200)]), void 0;
                            if (this.collect_node.scrollWidth > this.drag_data.scroll_node.scrollLeft && this.drag_data.collect_targets.master_rect.x2 > a.x && 48 > this.drag_data.collect_targets.master_rect.x2 - a.x) return this.drag_data.collect_targets.hover && ($(this.drag_data.collect_targets.hover).removeClass("maybedrop"), this.drag_data.collect_targets.hover = null), this.local.lubscrolltimer || (this.local.lubscrolltimer = [clearInterval, setInterval(this.lubScrollTimer.bind(this, !0), 125)]), void 0;
                            if (this.local.lubscrolltimer && (clearInterval(this.local.lubscrolltimer[1]), this.local.lubscrolltimer = null, delete this.local.lubscrolltimer), !this.drag_source_collection && null != (s = Ruler.hitTest(a, this.drag_data.collect_targets.rects))) return this.drag_data.collect_targets.hover && $(this.drag_data.collect_targets.hover).removeClass("maybedrop"), this.drag_data.collect_targets.hover != this.drag_data.collect_targets.nodes[s] && (this.drag_data.collect_targets.hover = this.drag_data.collect_targets.nodes[s]), $(this.drag_data.collect_targets.hover).addClass("maybedrop"), this.drag_data.collect_target_arrow && (document.body.removeChild(this.drag_data.collect_target_arrow), this.drag_data.collect_target_arrow = null, this.drag_data.collect_target_index = null), void 0;
                            if (this.drag_data.collect_targets.hover && $(this.drag_data.collect_targets.hover).removeClass("maybedrop"), this.drag_data.collect_targets.hover = null, this.drag_source_collection && null == s) {
                                if (r = {
                                        x: a.x + 12,
                                        y: a.y
                                    }, s = Ruler.hitTest(r, this.drag_data.collect_targets.rects), null != s)
                                    for (o = 0; o != s; o++)
                                        if (this.drag_data.collect_targets.nodes[o] == this.drag_source_collection) {
                                            s++, this.drag_data.collect_targets.nodes[s] || (s = null);
                                            break
                                        } if (null != s && this.drag_data.collect_targets.nodes[s] != this.drag_source_collection || a.x > this.drag_data.collect_targets.rects[this.drag_data.collect_targets.rects.length - 1].x2 && this.drag_data.collect_targets.nodes[this.drag_data.collect_targets.nodes.length - 1] != this.drag_source_collection) return this.drag_data.collect_target_arrow || (this.drag_data.collect_target_arrow = $("<div>", {
                                    "class": "tragic-arrow"
                                })[0]), this.drag_data.collect_target_index = null == s ? this.drag_data.collect_targets.rects.length : s, this.drag_data.collect_target_arrow.style.top = (this.drag_data.collect_targets.rects[0] || {}).y + "px", this.drag_data.collect_target_arrow.style.left = this.drag_data.collect_targets.rects[s] ? this.drag_data.collect_targets.rects[s].x - 9 + "px" : (this.drag_data.collect_targets.rects[this.drag_data.collect_targets.rects.length - 1] || {}).x2 + "px", document.body.appendChild(this.drag_data.collect_target_arrow), void 0
                            }
                        }
                        if (this.drag_data.collect_target_arrow && (document.body.removeChild(this.drag_data.collect_target_arrow), this.drag_data.collect_target_arrow = null, this.drag_data.collect_target_index = null), this.drag_data.text_targets) {
                            if (null != (s = Ruler.hitTest(a, this.drag_data.text_targets.rects))) return this.drag_data.text_targets.hover != this.drag_data.text_targets.nodes[s] && (this.drag_data.surfer && $(this.drag_data.surfer.node).addClass("excited-surfer"), this.drag_data.text_targets.hover = this.drag_data.text_targets.nodes[s]), void 0;
                            this.drag_data.text_targets.hover = null, this.drag_data.surfer && $(this.drag_data.surfer.node).hasClass("excited-surfer") && $(this.drag_data.surfer.node).removeClass("excited-surfer")
                        }
                        this.localClean("lubscrolltimer")
                    }
                }
            },
            drop: function(t, e) {
                var i, s, o, a;
                if (this.drag_event_cache) try {
                    this.ddd.drag.call(this, this.drag_event_cache, !0)
                } catch (t) {}
                if (delete this.drag_event_cache, this.drag_lores_timer && clearTimeout(this.drag_lores_timer), this.local.lubscrolltimer && (clearInterval(this.local.lubscrolltimer[1]), this.local.lubscrolltimer = null, delete this.local.lubscrolltimer), this.drag_data.text_targets && this.drag_data.text_targets.hover) {
                    if (console.log("text_target branch"), this.drag_data.text_targets.hover.getAttribute("gmindex")) {
                        this.drag_data.surfer && Surfer.dissolve(this.drag_data.surfer, t), this.hide(!0), this.noDragNotices();
                        var a, r = GMI.getOne(this.drag_data.text_targets.hover),
                            l = ($(this.ddd.node).closest("div.stackzone")[0] || $(this.ddd.node).closest("div.tt-a")[0] || $(this.ddd.node).closest("div.tt-aa")[0]).cloneNode(!0);
                        return (a = l.getElementsByTagName("img")[0]) && Station.apply(a, "opacity", 1), r.commsRecvDrop([
                            [this.drag_data.rid[0], this.drag_data.rid[1], l]
                        ], t), !0
                    }
                    switch (this.drag_data.rid[0]) {
                        case RESOURCE_DEVIATION:
                            this.drag_data.text_targets.hover.value += (this.drag_data.text_targets.hover.value ? " " : "") + (":thumb" + this.drag_data.rid[1] + ":");
                            try {
                                this.drag_data.text_targets.hover.focus()
                            } catch (t) {}
                            break;
                        case RESOURCE_GALLERIES:
                        case RESOURCE_FAVCOLLECTIONS:
                            if (s = $("a", this.ddd.node)[0], s && (s.getAttribute("href").match(REG_COLLECTION) || s.getAttribute("href").match(REG_COLLECTION_2))) s = s.getAttribute("href");
                            else {
                                if (s = this.collectionFromRID([RESOURCE_FAVCOLLECTIONS, this.drag_data.rid[1]]), !s) break;
                                s = PHP.userurl(this.deviant.username) + "/favourites/" + this.drag_data.rid[1]
                            }
                            this.drag_data.text_targets.hover.value += (this.drag_data.text_targets.hover.value ? " " : "") + s;
                            try {
                                this.drag_data.text_targets.hover.focus()
                            } catch (t) {}
                    }
                    return this.drag_data.surfer && Surfer.dissolve(this.drag_data.surfer, t), this.hide(!0), this.noDragNotices(), !0
                }
                if (this.drag_data.collect_targets) {
                    if (console.log("collect_targets branch"), this.drag_data.collect_target_arrow && document.body.removeChild(this.drag_data.collect_target_arrow), null != this.drag_data.collect_target_index) {
                        this.drag_data.collect_targets.nodes[this.drag_data.collect_target_index] ? this.drag_source_collection.parentNode.insertBefore(this.drag_source_collection, this.drag_data.collect_targets.nodes[this.drag_data.collect_target_index]) : this.drag_source_collection.parentNode.appendChild(this.drag_source_collection), this.refreshButton(), this.refreshNewCollections();
                        for (var n = this.drag_data.collect_targets.nodes, d = 0, c = 0; n.length > c; c++) jQuery(n[c]).hasClass("groupstack") && d++;
                        this.difiSave("reposition", [deviantART.deviant.id, RESOURCE_FAVCOLLECTIONS, this.drag_source_collection.getAttribute("collect_rid").split(":")[1], this.drag_data.collect_target_index - d]), DiFi.timer(1500)
                    }
                    if (this.drag_data.collect_targets.hover) {
                        if ($(this.drag_data.collect_targets.hover).removeClass("maybedrop"), App.cacheResourceView(this.drag_data.rid[0], this.drag_data.rid[1], "stacktile", "", this.stacktileFromThumb150(this.drag_data.rid, this.ddd.node)), this.first_drop = !1, s = this.collectionFromRID([RESOURCE_FAVCOLLECTIONS, (this.drag_data.collect_targets.hover.getAttribute("collect_rid") || "").split(":")[1]], this.drag_data.collect_targets.hover.getAttribute("group_lookup") || 0), s.collection.is_group) {
                            var h, u, _;
                            if (0 > s.collection.group_id) h = !0;
                            else {
                                _ = !1;
                                for (u in s.collection.target_aggregations) {
                                    if (_) {
                                        h = {}, h[s.collection.group_id] = this.stored_groups[s.collection.group_id];
                                        break
                                    }
                                    _ = !0
                                }
                            }
                            if (this.popped_collection = s, this.popped_drag_data = this.drag_data, h) {
                                if (this.drag_data.rid[0] != RESOURCE_DEVIATION) return Surfer.flyHome(this.drag_data.surfer, t), !0;
                                var c, _, g, m, f, p, b;
                                m = h === !0 ? this.stored_groups : h, g = [], _ = 0;
                                for (c in m)
                                    if (p = m[c].link, !(0 > s.collection.group_id && this.primary_group_name && this.primary_group_name == p.replace(/^#/, "") || m[c].target_aggregations instanceof Array)) {
                                        g.push('<div style="padding:3px 3px 1px 8px;font-size:8.25pt;color:#999;font-weight:bold">' + p + ":</div>");
                                        for (u in m[c].target_aggregations) {
                                            b = m[c].target_aggregations[u];
                                            var v = "Featured" == b.title;
                                            g.push('<a href="" class="f" onclick="da_minish_lub.lateSubmission(' + c + "," + b.id + "," + v + ');Popup2.hideAll();return GMI.evCancel()">' + b.title + "</a>")
                                        }
                                    } var f = new Popup2("LubGroupList", "body", {
                                    classes: "",
                                    content: '<div style="padding:3px 8px;color:#999">Send to...</div><div class="pager2 pager-dark" style="height:auto !important"><div class="page2" style="overflow:visible !important;height:auto !important">' + g.join("") + "</div></div>",
                                    destroy: !0,
                                    created: function() {
                                        f.$node.css({
                                            position: "fixed",
                                            height: h === !0 ? "260px" : "auto",
                                            width: "270px",
                                            zIndex: "300"
                                        }), h === !0 && f.$node.css({
                                            overflow: "auto",
                                            overflowX: "hidden"
                                        })
                                    }
                                });
                                return f.show({
                                    left: 200,
                                    top: 200,
                                    right: 1300,
                                    bottom: 131
                                }), this.drag_data.surfer && Surfer.dissolve(this.drag_data.surfer, t), !0
                            }
                            if (this.active_saves++, this.save_notice.change("Saving", 1e3, 800), this.drag_data.rid[0] != RESOURCE_DEVIATION) return Surfer.flyHome(this.drag_data.surfer, t), !0;
                            for (u in s.collection.target_aggregations) {
                                DiFi.pushPost("Grusers", "submitFaveFromLub", [s.collection.group_id, s.collection.target_aggregations[u].id, this.drag_data.rid[0], this.drag_data.rid[1]], this.saver.bind(this));
                                break
                            }
                            DiFi.timer(10), s.doSentAni(), o = Ruler.document.node(s.node), o.x += 43, o.y += 52, o.w = 3, o.h = 3, o.x2 = o.x + 3, o.y2 = o.y + 3
                        } else s.collection.group_id || setTimeout(this.plusFav.bind(this, this.drag_data.collect_targets.hover, "favup"), 300), s.moveResource(this.drag_data.rid), a = $("img", $(".icon-iii", s.node)[0])[0];
                        var y = s.collection.is_group ? "group" : "user",
                            w = s.collection.is_group ? "suggest_favourite" : "add_favourite",
                            E = s.collection.hasOwnProperty("parentid") && null !== s.collection.parentid ? "collection" : "default";
                        return PubSub.publish("DaGa.track_event", {
                            category: "Collections",
                            action: w,
                            label: "source-drag_collectionowner-" + y + "_collectiontype-" + E
                        }), (o || a) && this.drag_data.rid[0] == RESOURCE_DEVIATION && this.drag_data.surfer ? (a && (a.style.visibility = "hidden"), o || (o = Ruler.document.node(a)), (!Browser.isIE || document.documentMode >= 7) && this.local.scrollmanager && this.local.scrollmanager.top_floating && (o.y += window.pageYOffset || document.documentElement.scrollTop, o.y2 += window.pageYOffset || document.documentElement.scrollTop), o.x -= this.drag_data.scroll_node.scrollLeft, o.x2 -= this.drag_data.scroll_node.scrollLeft, this.drag_data.surfer && (Browser.isIE && (this.drag_data.surfer.node.style.border = "1 solid #111", this.drag_data.surfer.node.style.margin = 0), Surfer.sinkInto(this.drag_data.surfer, t, o, function(t) {
                            t && (t.style.visibility = "visible")
                        }.bind(this, a), 800)), !0) : (this.drag_data.surfer && Surfer.dissolve(this.drag_data.surfer, t), !0)
                    }
                }
                return this.drag_data.surfer && (i = Ruler.document.node(this.drag_data.surfer.ddd_node, !0), this.drag_source_collection ? (i.x -= this.drag_data.scroll_node.scrollLeft, (!Browser.isIE || document.documentMode >= 7) && (i.y += window.pageYOffset || document.documentElement.scrollTop, i.y2 += window.pageYOffset || document.documentElement.scrollTop)) : this.local.activelubble && $(this.ddd.node).closest("div.lubble")[0] && (i.x -= this.local.activelubble.node.firstChild.scrollLeft, (!Browser.isIE || document.documentMode >= 7) && (i.y += window.pageYOffset || document.documentElement.scrollTop, i.y2 += window.pageYOffset || document.documentElement.scrollTop)), Browser.isKHTML && (i.x += 1), this.drag_data.surfer.modified ? Surfer.dissolve(this.drag_data.surfer, t) : window.ResourceComms && e == window.ResourceComms || Surfer.flyHome(this.drag_data.surfer, t, null, i)), setTimeout(this.hide.bind(this, !0), 200), !1
            }
        },
        lateSubmission: function(t, e, i) {
            this.active_saves++, this.save_notice.change("Saving", 1e3, 800), DiFi.pushPost("Grusers", "submitFaveFromLub", [t, e, this.popped_drag_data.rid[0], this.popped_drag_data.rid[1]], this.saver.bind(this)), DiFi.timer(10), this.popped_collection.doSentAni(), PubSub.publish("DaGa.track_event", {
                category: "Collections",
                action: "suggest_favourite",
                label: "source-drag_collectionowner-group_collectiontype-" + (i ? "default" : "collection")
            })
        },
        collectionFromRID: function(t, e) {
            var i, s;
            for (s = (this.local.activelubble || this).collections_data, i = 0; s[i]; i++)
                if (!e || t[1]) {
                    if (Number(s[i].collection.galleryid) == Number(t[1])) return s[i]
                } else if (Number(s[i].collection.group_id) == Number(e)) return s[i];
            return null
        },
        stacktileFromThumb150: function(t, e) {
            var i, s, o, a, r, l;
            switch (t[0]) {
                case RESOURCE_DEVIATION:
                    return (s = $("img", e).get(0) || ("IMG" == e.tagName ? e : null)) ? (o = s.width || s.offsetWidth, a = s.height || s.offsetHeight, i = $(s), i.hasClass("fakethumb") && (o = i.data("width"), a = i.data("height")), r = Math.max(o, a), r > 75 && (o *= 75 / r, a *= 75 / r), thumbHTML({
                        id: t[1],
                        url: e.getAttribute("href"),
                        tooltip: "",
                        thumb75: $("q", e)[0] || e.classList.contains("freeform") ? {
                            width: 75,
                            height: 63,
                            src: "https://th09.deviantart.com/images/150/shared/poetry.jpg"
                        } : {
                            width: o,
                            height: a,
                            src: s.src
                        },
                        size: 75,
                        is_mature: e.classList.contains("tt-ismature")
                    })) : "";
                case RESOURCE_GALLERIES:
                case RESOURCE_FAVCOLLECTIONS:
                    return $(e).closest("div.tt-tv150")[0] ? (l = $("div.tt-a", e)[0], l = l ? l.innerHTML : "") : (l = [""].concat($("div.icon", e).toArray()).pop(), l && (l = $("div.tt-aa", l)[0] || "", l && (l = l.parentNode.innerHTML, l = l.replace(/\btt-a\b/g, "tt-aa"), l = l.replace(/ (?:width|height)\=/g, " hack_the_planet=")))), '<div class="tt-aa tt-tv70"><div class="tt-ww"><div class="tv70"><div class="tv70-tag">' + (t[0] == RESOURCE_FAVCOLLECTIONS ? "Collection" : "Gallery") + "</div>" + '<a href="/" class="tv70-cover"></a>' + '<div class="a-stream">' + '<div class="tt-a">' + l + "</div>" + "</div>" + "</div>" + "</div>" + "</div>";
                default:
                    return null
            }
        },
        uniqueName: function(t, e) {
            var i, s, o;
            t.toLowerCase() in {
                featured: 0,
                favourites: 0,
                favorites: 0
            } && (t = this.nameBump(t, " ")), o = !0;
            for (; o;)
                for (o = !1, i = 0; s = this.collections_data[i]; i++) s.collection.galleryid != e && t == s.collection.title && (o = !0, t = this.nameBump(t, " "));
            return t
        },
        nameBump: function(t, e) {
            return number = (t.match(/(\d+)$/) || [])[1], number ? t.substr(0, t.length - number.length) + (parseInt(number) + 1) : t + e + "2"
        },
        refreshCollectTargets: function() {
            var t, e, i, s, o, a, r, l, n;
            if (this.ddd.node && this.drag_data && this.collections_data) {
                if (this.drag_source_lubble) return this.drag_data.collect_targets = null, void 0;
                if (this.local.activelubble) {
                    if (l = this.local.activelubble.art_node, n = this.local.activelubble.node.firstChild, r = this.local.activelubble.collections_data, !r) return this.drag_data.collect_targets = null, void 0
                } else r = this.collections_data, l = this.collect_node, n = l.parentNode;
                if (!this.drag_source_collection && l.parentNode.offsetWidth > l.offsetWidth)
                    for (i = 0; r[i]; i++)
                        if ("Featured" == r[i].collection.title) {
                            o = Number(r[i].collection.galleryid);
                            break
                        } for (t = $("div.stackzone", l).toArray(), e = [], i = 0; t[i]; i++) s = Ruler.document.node(t[i]), (!Browser.isIE || document.documentMode >= 7) && this.local.scrollmanager && this.local.scrollmanager.top_floating && (s.y += window.pageYOffset || document.documentElement.scrollTop, s.y2 += window.pageYOffset || document.documentElement.scrollTop), s.x -= n.scrollLeft, s.x2 -= n.scrollLeft, e.push(s), t[i].getAttribute("collect_rid") && Number(t[i].getAttribute("collect_rid").split(":")[1]) == o && (a = t[i]);
                a && (t.push(a), s = Ruler.document.node(l), s.x = s.x2 - 20, s.x2 = Ruler.document.node(n).x2, (!Browser.isIE || document.documentMode >= 7) && this.local.scrollmanager && this.local.scrollmanager.top_floating && (s.y += window.pageYOffset || document.documentElement.scrollTop, s.y2 += window.pageYOffset || document.documentElement.scrollTop), e.push(s)), this.drag_data.collect_targets = {
                    master_rect: Ruler.screen.node(this.lub_node),
                    nodes: t,
                    rects: e
                }
            }
        },
        plusFav: function(t, e) {
            var i;
            i = $("<span>", {
                "class": e
            }).appendTo(t), Station.push(i[0], "top", {
                from: 36,
                to: 0,
                f: Interpolators.sineCurve,
                time: 650
            }, function(t) {
                $(t).remove()
            })
        },
        dragNotices: function() {
            var t, e = $("div.bubbleview");
            e.length || (e = $("#output"));
            var i = this;
            t = e.find("textarea.put-art-here,input.put-art-here").each(function() {
                i.local[i.localUID()] = new LubAttentionNotice(this)
            })
        },
        noDragNotices: function() {
            var t;
            for (t in this.local) this.local[t] instanceof LubAttentionNotice && this.localClean(t)
        },
        lubScrollTimer: function(t) {
            var e;
            e = this.drag_data.scroll_node, e.scrollLeft += t ? 36 : -36, this.refreshCollectTargets()
        },
        countSubfolders: function(t) {
            return this.subfolder_counts[t] || 0
        }
    }, Lub.scrollHack = function(t) {
        !Browser.isIE || document.documentMode >= 7 || (void 0 == Lub.scrollHack.hacks && (Lub.scrollHack.hacks = 0), Lub.scrollHack.hacks += t ? 1 : -1, Lub.scrollHack.hacks ? (document.body.style.backgroundRepeat = "no-repeat", document.body.runtimeStyle.backgroundImage = "url(https://st.deviantart.net/minish/main/blank.gif)", document.body.runtimeStyle.backgroundAttachment = "fixed") : (document.body.runtimeStyle.backgroundImage = "none", document.body.runtimeStyle.backgroundAttachment = "scroll"))
    }, Lub.go = function() {
        window.da_minish_lub || (document.getElementById("logindock") || document.getElementById("top-deviant") && document.getElementById("top-deviant").nextSibling || document.getElementById("collectlink")) && (da_minish_lub = new Lub, $("#collectlink").click(da_minish_lub.buttonClicked.bind(da_minish_lub)), window.da_minish_lub = da_minish_lub)
    }, Lub.go(), window.DWait && DWait.run("jms/pages/lub.js")
});
DWait.ready(["jms/lib/browser.js", "jms/lib/events.js", "jms/lib/bind.js", "jms/lib/dtlocal.js"], function() {
    window.LubScrollManager = function(o) {
        DTLocal.infect(this), this.owner = o, this.scrolled = this.scrolled.bind(this);
        for (var s in this.SCROLL_EVENTS) Events.hook(window, s, this.scrolled);
        this.stay_valid_interval = setInterval(this.stayValid.bind(this), 1e3), this.stayValid(), this.scrolled()
    }, LubScrollManager.prototype = {
        SCROLL_EVENTS: {
            load: 0,
            scroll: 0,
            keydown: 0,
            keyup: 0,
            mouseup: 0,
            keypress: 0,
            mousewheel: 0
        },
        localRecv: function(o) {
            if ("destroy" == o) {
                this.off();
                for (var s in this.SCROLL_EVENTS) Events.unhook(window, s, this.scrolled);
                clearInterval(this.stay_valid_interval)
            }
        },
        off: function() {
            if (Lub.scrollHack(0), Lub.newschool) {
                if (Browser.isIE && this.owner.node.style.removeExpression) try {
                    this.owner.node.style.removeExpression("top"), this.owner.node.style.top = 0
                } catch (o) {}
                this.owner.node.style.position = "absolute", this.owner.verifybar && (this.owner.verifybar.style.position = "absolute")
            } else this.owner.node.className = Browser.isIE ? "top-deviant-dontmove" : ""
        },
        scrolled: function() {
            return (window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop) >= this.min_top ? this.top_floating || (Lub.scrollHack(1), Lub.newschool ? (this.owner.node.style.position = "fixed", this.owner.node.style.zIndex = 126, this.owner.verifybar && (this.owner.verifybar.style.position = "fixed", this.owner.verifybar.style.zIndex = 126)) : this.owner.node.className = "top-deviant-float", this.top_floating = !0) : this.top_floating && (this.off(), this.top_floating = !1), !0
        },
        stayValid: function() {
            this.min_top = 0
        }
    }, window.DWait && DWait.run("jms/pages/lub/lub_scroll_manager.js")
});
DWait.ready(["jms/lib/dtlocal.js", "jms/lib/app.js.resource_cache.js", "jms/lib/renamer.js", "jms/lib/difi.js", "jms/pages/lub/lub_constants.js", "jms/lib/station.js", "jms/lib/ruler.js", "jms/pages/lub/lubble.js", "jms/lib/bind.js", "jms/lib/events.js", "jms/lib/jquery/jquery.current.js"], function() {
    LubCollection = function(e, i) {
        var t;
        this.owner = e, this.clicked = this.clicked.bind(this), this.labelHover = this.labelHover.bind(this), this.askName = this.askName.bind(this), i ? this.ready = !0 : (this.ready = !1, i = {
            galleryid: -this.owner.localUID(),
            title: "Devious " + this.owner.noun,
            rids: [],
            owner_id: deviantART.deviant.id
        }), this.collection = i, this.node = $("<div>", {
            "class": "stackzone"
        }).append($("<div>", {
            "class": "customicon"
        }).hide()).append($("<div>", {
            "class": "stackctrl"
        }).append($("<div>", {
            "class": "stack"
        }).append($("<div>", {
            "class": "icon icon-i"
        })).append($("<div>", {
            "class": "icon icon-ii"
        })).append($("<div>", {
            "class": "icon icon-iii"
        })))).append(t = $("<div>", {
            "class": "label"
        })), this.node = this.node[0], this.collection.is_group && (this.node.className += " groupstack"), Events.hook(this.node, "click", this.clicked), Events.hook(t[0], "mouseover", this.labelHover), Events.hook(t[0], "mouseout", this.labelHover), Events.hook(t[0], "click", this.askName), this.render()
    }, LubCollection.prototype = {
        localRecv: function(e) {
            "destroy" == e && (Events.unhook(this.node, "click", this.clicked), Events.unhook($(".label", this.node)[0], "mouseover", this.labelHover), Events.unhook($(".label", this.node)[0], "mouseout", this.labelHover), Events.unhook($(".label", this.node)[0], "click", this.askName))
        },
        clicked: function(e) {
            var i;
            if (i = $("input.renamer", this.owner.collect_node)[0]) return i.blur(), !1;
            if (this.owner.local.activelubble) return this.owner.localClean("activelubble"), !1;
            if (this.collection.rids && this.collection.rids.length && !this.collection.group_id) this.owner.local.activelubble = new Lubble(this.owner, this.owner.collect_node.parentNode, this.collection, Ruler.document.node(this.node));
            else {
                if ("A" == (e.target || e.srcElement).tagName) return !0;
                var t = $(".notice", this.node)[0];
                Station.stopAnimation(t), Station.push(t, "opacity", {
                    from: 1,
                    to: 0,
                    f: Interpolators.sineCurve,
                    time: 200
                }, {
                    from: 0,
                    to: 1,
                    f: Interpolators.sineCurve,
                    time: 200
                }, {
                    from: 1,
                    to: 0,
                    f: Interpolators.sineCurve,
                    time: 200
                }, {
                    from: 0,
                    to: 1,
                    f: Interpolators.sineCurve,
                    time: 200
                })
            }
            return !1
        },
        renamed: function(e, i, t) {
            delete this.renamer, t = t.replace(/[^a-zA-Z0-9\-_\ \.\?\\$'\":\/,\+]/g, " "), t = t.replace(/(?:^\s+|\s+$)/g, ""), t = t.replace(/\s{2,}/g, " "), t = t.slice(0, 44), t || (t = this.collection.title), (0 > this.collection.galleryid || t != this.collection.title) && (t = this.owner.uniqueName(t, this.collection.galleryid), (0 > this.collection.galleryid || t != this.collection.title) && (this.collection.title = t, e || (this.collection.galleryid > 0 ? this.owner.difiSave("rename", [deviantART.deviant.id, RESOURCE_FAVCOLLECTIONS, this.collection.galleryid, t]) : (this.owner.localClean("refresh_new_timer"), this.owner.local.refresh_new_timer = setTimeout(this.owner.refreshNewCollections.bind(this.owner), 1e3), this.owner.locks > 1 && this.owner.locks--), DiFi.timer(10)))), this.render()
        },
        create: function(e) {
            if (0 > this.collection.galleryid && !this.processing) {
                this.processing = !0;
                var i = this,
                    t = function(t) {
                        i.collection.galleryid = t.gallectionid, i.collection.url = t.url, i.processing = !1, i.render(), e && e()
                    };
                this.owner.difiSave("create", [deviantART.deviant.id, RESOURCE_FAVCOLLECTIONS, this.collection.title], {
                    callback: t,
                    lub: this.owner
                }), PubSub.publish("DaGa.track_event", {
                    category: "Collections",
                    action: "create_collection",
                    label: "source-drag_collectionowner-user"
                })
            }
            DiFi.timer(10)
        },
        labelHover: function(e) {
            "mouseover" == e.type ? $($(".label", this.node)[0]).addClass("label-hover") : "mouseout" == e.type && $($(".label", this.node)[0]).removeClass("label-hover")
        },
        askName: function(e) {
            if (this.owner.local.activelubble || this.collection.is_group) return !0;
            if (this.renamer || "Featured" == this.collection.title || this.collection.is_group || e && "click" == e.type && 0 > this.collection.galleryid) return !1;
            for (this.owner.slide(0, 0), label = $(".label", this.node)[0]; label.firstChild;) label.removeChild(label.firstChild);
            return this.renamer = new Renamer(this, null, this.collection.title), this.renamer.callback = this.renamed.bind(this, !1, this.renamer), label.appendChild(this.renamer.node), !1
        },
        render: function() {
            var e, i, t, o, l;
            if (this.collection.galleryid && this.node.setAttribute("collect_rid", RESOURCE_FAVCOLLECTIONS + ":" + this.collection.galleryid), this.collection.group_id && this.node.setAttribute("group_lookup", this.collection.group_id), o = $("div.label", this.node)[0], this.renamer || (o.innerHTML = "Featured" == this.collection.title ? "Favourites" : (this.collection.imperative || "") + this.collection.title), o = $(".notice", this.node)[0], this.collection.is_group ? (o || ($("<div>", {
                    "class": "notice",
                    text: "drop art here"
                }).appendTo(this.node), $("<div>", {
                    "class": "notice notice-sent",
                    text: "sending"
                }).appendTo(this.node)), this.node.style.zIndex = 5) : this.collection.rids.length ? (this.node.style.zIndex = 10, o && this.node.removeChild(o)) : (o || $("<div>", {
                    "class": "notice",
                    text: "drop art here"
                }).appendTo(this.node), this.node.style.zIndex = 5), i = $("div.icon", this.node).toArray(), this.collection.rids)
                for (e = 0;
                    (l = this.collection.rids[e]) && (t = i.pop()); e++) t.innerHTML = App.cacheResourceView(l[0], l[1], "stacktile", {}).replace(/ class="tt-a\b/, ' class="tt-aa').replace(/ class="tt-w\b/, ' class="tt-ww');
            for (; t = i.pop();) t.innerHTML = ""
        },
        moveResource: function(e) {
            var i;
            for (i = 0; i != this.collection.rids.length; i++)
                if (this.collection.rids[i] && Number(this.collection.rids[i][0]) == Number(e[0]) && Number(this.collection.rids[i][1]) == Number(e[1])) {
                    this.collection.rids.splice(i, 1);
                    break
                } this.collection.rids.unshift(e), this.render();
            var t = function() {
                1 == e[0] ? this.owner.difiSave("add_favourite_to_folder", [e[1], this.collection.galleryid]) : this.owner.difiSave("add_resource", [this.collection.owner_id, RESOURCE_FAVCOLLECTIONS, this.collection.galleryid, e[0], e[1], 0]), DiFi.timer(10), this.owner.refreshButton()
            }.bind(this);
            0 > this.collection.galleryid && 2 > this.collection.rids.length ? (this.create(t), DiFi.timer(10), this.owner.refreshButton()) : t()
        },
        doSentAni: function() {
            Station.push($("div.notice", this.node)[0], "display", {
                to: "none"
            }, "opacity", {
                to: .01,
                time: 1300
            }, "display", {
                to: "block"
            }, "opacity", {
                from: .01,
                to: 1,
                time: 100,
                f: Interpolators.sineCurve
            }), Station.push($("div.notice-sent", this.node)[0], "opacity", {
                to: .01
            }, "display", {
                to: "block"
            }, "opacity", {
                from: .01,
                to: 1,
                time: 200,
                f: Interpolators.sineCurve
            }, {
                from: 1,
                to: 1,
                time: 850
            }, {
                from: 1,
                to: 0,
                time: 100,
                f: Interpolators.sineCurve
            }, "display", {
                to: "none"
            }), Station.push($("div.notice-sent", this.node)[0], "bottom", {
                from: 70,
                to: 70,
                time: 950
            }, {
                from: 70,
                to: 130,
                time: 300,
                f: Station.f.inversion(Interpolators.pulse)
            })
        }
    }, window.DWait && DWait.run("jms/pages/lub/lub_collection.js")
});
window.Lubble = function(t, e, i) {
    DTLocal.infect(this), this.owner = t, this.owner_node = e, this.collection = i, this.owner.art_listeners.push(this.artReceived.bind(this)), this.art_listener = this.owner.art_listeners.length - 1, this.node = $('<div class="lubble"><div class="scrollzone"><div class="welcome"></div><div class="artzone"><div class="stream"></div></div></div></div>')[0], this.art_node = $("div.stream", this.node)[0], this.owner.showLubble(e, this.node), this.renderNotice(), this.bootCollection()
}, Lubble.prototype = {
    localRecv: function(t) {
        "destroy" == t && (delete this.owner.art_listeners[this.art_listener], clearInterval(this.scroll_timer), this.owner.hideLubble(this.owner_node, this.node))
    },
    bootCollection: function() {
        this.layContainers(), this.node.firstChild.scrollLeft = this.collection.last_scroll_offset || 0, this.collection.last_scroll_offset = void 0, this.scroll_timer = setInterval(this.scrolled.bind(this), 50), this.scrolled(null)
    },
    layContainers: function() {
        var t, e, i;
        for (e = [], i = 2500, Browser.isIE && (i = 120), t = 0; t != Math.min(i, this.collection.rids.length); t++) e.push('<div class="placeholder tt-a"><span class="tt-w"><span class="shadow"><img src="https://st.deviantart.net/minish/main/blank.png" width="149" height="92" style="visibility:hidden"/></span></span></div>');
        this.art_node.innerHTML = e.join("") || "&nbsp;"
    },
    renderNotice: function() {
        var t, e;
        e = this.owner.countSubfolders(this.collection.galleryid), t = $(".welcome", this.node)[0], t.innerHTML = "<h2>" + ("Featured" == this.collection.title ? "Favourites" : this.collection.title) + "</h2>" + '<span class="filler"></span>' + "<br/><br/>" + '<span class="buttons">' + '<a href="' + this.collection.url + '" class="h">Full&nbsp;View</a>' + (e ? " (" + e + " sub" + this.owner.noun.toLowerCase().replace(/^dev/, "") + (e > 1 ? "s" : "") + ")" : "") + "</span>";
        var i = "Collection" == this.owner.noun ? "Favourites" : "A " + this.owner.noun.substr(0, 1).toLowerCase() + this.owner.noun.substr(1);
        $(".filler", t)[0].innerHTML = i + " by " + this.owner.deviant.username, t.offsetWidth > 170 ? (t.style.width = "170px", this.art_node.parentNode.style.marginLeft = "170px") : this.art_node.parentNode.style.marginLeft = t.offsetWidth, Browser.isOpera && (t.parentNode.style.position = "relative", t.style.position = "absolute")
    },
    scrolled: function(t, e) {
        var i, s, l, o, r, n;
        if (e || this.collection.last_scroll_offset !== this.node.firstChild.scrollLeft) {
            for (r = Math.ceil(this.node.offsetWidth / 210) + 1, i = Math.floor(this.node.firstChild.scrollLeft / Math.max(1, this.node.firstChild.scrollWidth) * this.art_node.childNodes.length), l = {}, o = [], n = !0, s = i; s != i + r && !(s >= this.collection.rids.length); s++) this.collection.rids[s] ? (o.push(this.collection.rids[s]), App.cacheResourceView(this.collection.rids[s][0], this.collection.rids[s][1], "thumb", {}) || (n = !1)) : (l[s] = !0, n = !1);
            setTimeout(function(t, e) {
                if (t == this.node.firstChild.scrollLeft || e) {
                    for (s in l) {
                        if (e) return;
                        this.owner.requestArtSlice(this.collection.galleryid, 24 * Math.floor(s / 24), 24)
                    }
                    for (s = 0; o[s]; s++) this.owner.requestArt(o[s])
                }
            }.bind(this, this.node.firstChild.scrollLeft, n || e), e || void 0 === this.collection.last_scroll_offset ? 1 : n ? 250 : 500), this.collection.last_scroll_offset = this.node.firstChild.scrollLeft
        }
    },
    artReceived: function(t, e) {
        var i, s, l;
        if (e)
            if (t instanceof Array) {
                for (l = t, i = 0; i != this.collection.rids.length; i++)
                    if (this.collection.rids[i] && Number(this.collection.rids[i][0]) == Number(l[0]) && Number(this.collection.rids[i][1]) == Number(l[1])) {
                        if (!$(this.art_node.childNodes[i]).hasClass("placeholder")) continue;
                        $(this.art_node.childNodes[i]).removeClass("placeholder"), this.art_node.replaceChild($((e + "").replace(/<a /g, '<a target="_blank" '))[0], this.art_node.childNodes[i])
                    }
            } else if (t = t.split(","), s = Number(t[1]), Number(t[0]) == Number(this.collection.galleryid)) {
            for (i = 0; i != Number(t[2]); i++) this.collection.rids[i + s] = e[i];
            this.scrolled(null, !0)
        }
    }
}, window.DWait && DWait.run("jms/pages/lub/lubble.js");
DWait.ready(["jms/lib/bind.js", "jms/lib/station.js", "jms/lib/jquery/jquery.current.js", "jms/lib/dtlocal.js"], function() {
    window.LubAttentionNotice = function(t) {
        DTLocal.infect(this), this.node = $("<div>", {
            "class": "lub-notice",
            css: {
                position: "absolute",
                marginTop: t.offsetHeight - 25 + "px",
                marginLeft: "3px",
                border: "1px solid #84A8B6",
                color: "#84A8B6",
                background: "#374341",
                lineHeight: "22px",
                padding: "0 8px"
            },
            text: "drag art here"
        }).insertBefore(t), this.pulse()
    }, LubAttentionNotice.prototype = {
        localRecv: function(t) {
            "destroy" == t && (this.node.remove(), this.node = null)
        },
        pulse: function() {
            this.node && Station.push(this.node[0], "opacity", {
                from: .99,
                to: .99,
                time: 900
            }, {
                from: .99,
                to: 0,
                time: 300,
                f: Interpolators.sineCurve
            }, {
                from: 0,
                to: .99,
                time: 400,
                f: Interpolators.sineCurve
            }, {
                from: .99,
                to: .99,
                time: 3400
            }, arguments.callee.bind(this))
        }
    }, window.DWait && DWait.run("jms/pages/lub/lub_attention_notice.js")
});
if (window.DWait) {
    DWait.count()
}