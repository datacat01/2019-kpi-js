YUI.add("stream-actiondrawer-v2", function(e, t) {
    "use strict";
    var a = e.config.win,
        s = "b",
        n = ",",
        i = ".",
        o = "",
        r = "i",
        l = "id-",
        d = "js-stream",
        c = i + d,
        h = "%0D%0A%0D%0A",
        m = "0",
        u = "1",
        g = "-1",
        p = !0,
        v = "cauuid",
        _ = "click",
        f = "comment",
        C = "config",
        w = "container",
        k = "ctrl",
        b = "dclitm",
        D = "dislike",
        I = "done",
        A = "guid",
        T = "hide",
        j = "hovered",
        S = "href",
        y = "i18n",
        H = "like",
        O = "model",
        B = "mouseenter",
        L = "mouseover",
        R = "neg",
        x = "neu",
        U = "open",
        M = "parentNode",
        E = "pos",
        N = "rated",
        P = "rm",
        F = "selected",
        K = "stream",
        V = "submit",
        Y = "text",
        $ = "uuid",
        q = d + "-adfdb-other",
        z = d + "-ad",
        X = d + "-drawer-v",
        G = d + "-drawer-v-done",
        J = d + "-disliked",
        Q = d + "-done-btn",
        W = d + "-liked",
        Z = ".stream-share",
        ee = "ActionSelected",
        te = "ad-feedback-beacon",
        ae = "IconTumblrHeartOutline",
        se = "IconTumblrHeart",
        ne = "js-sl-liked",
        ie = "movr_ad",
        oe = "RevealNested-on",
        re = "stream_items",
        le = c + "-ad-dislike-button",
        de = c + "-adfdb-options",
        ce = c + "-side-buttons",
        he = c + "-comment",
        me = ".cmnt-counter",
        ue = c + "-comments-button-drawer",
        ge = c + "-cmnt-flag",
        pe = c + "-cmnt-up" + n + c + "-cmnt-down",
        ve = c + "-content",
        _e = c + "-content-link",
        fe = c + "-item-title",
        Ce = c + "-dislike-button",
        we = c + "-like-button",
        ke = c + "-like-msg",
        be = c + "-reblog-button",
        De = c + "-related-item-ad",
        Ie = c + "-share-icon",
        Ae = c + "-share-panel",
        Te = ".ActionTooltip",
        je = i + z,
        Se = we + n + Ce + n + i + Q + n + i + X + n + i + G,
        ye = ".js-applet-view-container-main",
        He = ".js-stream-drawer",
        Oe = ".modal-actions",
        Be = ".js-related-dislike-button",
        Le = ".stream-flyout",
        Re = "td-applet-stream-atomic-templates-",
        xe = Re + "drawer_share",
        Ue = Re + "removeditem",
        Me = "stream-liked",
        Ee = "stream-login",
        Ne = "stream-removed",
        Pe = "max-age=172800",
        Fe = "#Reader",
        Ke = '.today[data-applet-type="today"]',
        Ve = ".js-today-selected",
        Ye = ".js-today-like-button",
        $e = ".userintentmgmt-panel";
    e.namespace("Stream").ActionDrawer2 = function(t) {
        if (!t) return null;
        var a = t.get(O).get(C) || {},
            s = t.get(w),
            i = e.Af.Config.isUserSignedIn(p),
            o = a.ui.viewer_action ? e.one(Fe) : null,
            r = a.ui.today_applet_enabled ? e.one(Ke + " " + ye) : null;
        return this.bodyNode = e.one("body"), this.view = t, this.userSignedIn = i, this.commentsDrawerOpened = {}, a.template.drawer_share && (xe = a.template.drawer_share), o && (t._eventHandles.push(o.delegate(_, this._onActionBtnClickFromViewer, Se, this)), i || t._eventHandles.push(o.delegate(_, this._onLoggedOutActionClick, Se, this))), r && (t._eventHandles.push(r.delegate(_, this._onActionBtnClickFromToday, Ye, this)), i || t._eventHandles.push(r.delegate(_, this._onLoggedOutActionClick, Ye, this))), i ? t._eventHandles.push(s.delegate(_, this._onActionBtnClick, Se, this)) : (t._eventHandles.push(s.delegate(_, this._onLoggedOutActionClick, Se + n + pe + n + ge, this)), t._eventHandles.push(s.delegate(_, this._closeLogin, ".js-stream-login-dismiss", this)), t._eventHandles.push(s.delegate(L, this._closeLogin, Ae + n + be, this)), t._eventHandles.push(s.delegate(L, this._cancelLoginTooltipTimer, Le + n + pe, this)), t._eventHandles.push(s.delegate("mouseout", this._startLoginTooltipTimer, Le + n + pe, this)), t._eventHandles.push(s.delegate(_, this._onLoggedOutActionClick, ".js-stream-ylogin-drawer", this))), a.ui.comments_inline && (t._eventHandles.push(s.delegate(_, this._onActionBtnClick, ue, this)), t._eventHandles.push(s.delegate(_, this._closeCommentDrawer, ".js-stream-comments-close", this)), i && (t._eventHandles.push(s.delegate(_, this._rateComment, pe, this)), t._eventHandles.push(s.delegate(_, this._flagComment, ge, this)))), a.ui.stream_actions_share_panel && (t._eventHandles.push(s.delegate(B, this._onShareAction, Ie, this)), t._eventHandles.push(s.delegate("focus", this._toggleShareDrawer, Z, this)), t._eventHandles.push(s.delegate("blur", this._toggleShareDrawer, Z, this))), a.ui.stream_actions_share_modal && (t._eventHandles.push(s.delegate(_, this._toggleShareDrawer, Ie, this)), t._eventHandles.push(s.delegate(_, this._toggleShareDrawer, ".js-stream-share-modal", this))), a.ui.stream_actions_reblog && (t._eventHandles.push(s.delegate(B, this._onReblogHover, be, this)), a.js.related_content && t._eventHandles.push(s.delegate(_, this._triggerRecordRelated, be + n + Ae + " a", this))), t._eventHandles.push(t.after("viewrender", this._afterViewRender, this)), a.ads.feedback && (this.adBeaconMap = {}, t._eventHandles.push(s.delegate(_, this._onAdFeedbackClick, ".js-stream-ad-done," + de + n + Be, this)), a.ads.beacon_onhover && t._eventHandles.push(s.delegate(L, this._onHoverAdItem, je + n + le + n + De + n + Be, this))), a.ui.userintent_enabled && (t._eventHandles.push(this.handleUserIntentClickOutside()), t._eventHandles.push(s.delegate(_, this.handleUserIntentClick, $e, this))), this.removedItemTemplate = Ue, a.ads.feedback_drawer && (this.removedItemTemplate = Ue + "_sm"), this.markItems(), a.ui.openCommentOnLoad && e.later(0, this, this.openCommentDrawer), this
    }, e.namespace("Stream").ActionDrawer2.prototype = {
        _afterViewRender: function() {
            this.drawer = null
        },
        handleUserIntentClickOutside: function() {
            var e = this.view.get(w);
            return e.all(".userintent-panel").on("clickoutside", function(t) {
                t && t.target && !t.target.ancestor($e, !0) && e.all($e).removeClass("userintent-show")
            })
        },
        handleUserIntentClick: function(e) {
            var t, a = e.target,
                s = a && a.ancestor(ve, p, ye),
                n = s && s.getData($);
            n && (t = this.view.get(w)) && t.all(ve + ':not([data-uuid="' + n + '"]) ' + $e).removeClass("userintent-show")
        },
        openCommentDrawer: function() {
            var t, a, s = this.view.get(O).getDataModel(K).get(re),
                n = this.view.get(w),
                i = this.view.get(O).get(C).ui || {};
            e.Array.some(s, function(e, a) {
                if (e.commentCount && e.id && a >= i.openCommentOnLoadPosition) return t = e, p
            }), (a = t && n && n.one('li[data-uuid="' + t.id + '"]')) && this._fetchComments(a, p)
        },
        markItems: function() {
            var t = this.view.get(O),
                a = this.view.get(w).all(ve),
                n = [],
                i = this,
                o = i.view.get(A);
            i.likes = {}, this.userSignedIn && (this._restoreSavedAction(), a.each(function(e) {
                var t, a = e.getData($);
                a && 0 !== a.indexOf(l) && n.push(a), a && 0 === a.indexOf(l) && (t = i._getCauuid(a)) && (n.push(t), e.setData(v, t))
            }), n = n.concat(i._getStorylineIds()), e.Af.Cache.get(Me, {}, function(e, n) {
                !e && n && o && n[o] && (i.likes = n[o], a.each(function(e) {
                    var a, n = 0 === e.getData($).indexOf(l) ? e.getData(v) : e.getData($);
                    i.likes[n] && ((a = e.one(we)) && (a.addClass(ee), a.one(r).replaceClass(ae, se), a.one(s).set(Y, t.get("i18n.UNDO"))), e.addClass(W))
                }))
            })), e.Af.Cache.get(Ne, {}, function(t, s) {
                i.removedItems = s || [], i.removedItems.length && a.each(function(t) {
                    -1 !== e.Array.indexOf(i.removedItems, t.getData($)) && t.remove()
                })
            })
        },
        _onActionBtnClickFromToday: function(e) {
            var t = e.target.ancestor(Ve);
            t && this._updateItemState(t, "like")
        },
        _onActionBtnClickFromViewer: function(t) {
            var a, n = this.view.get(w),
                i = this.view.get(O).get(C) || {},
                o = i.ui && i.ui.today_applet_enabled ? e.one(Ke + " " + ye) : null,
                r = t.target.ancestor(Fe + " " + Oe),
                l = r && r.one(".mega-modal-like"),
                d = l && l.one(s),
                c = r && r.getData($),
                h = c && n && n.one('li[data-uuid="' + c + '"]'),
                m = c && n && n.one('.js-sl[data-uuid="' + c + '"]'),
                u = c && o && o.one(Ve),
                g = u && u.one(Ye),
                p = h && h.one(we),
                v = this.view.get(O).get(y);
            r && c && (this._onActionBtnClick(t), a = r && r.hasClass(W), d && d.set(Y, a ? v.UNDO : v.LIKE), g ? this._updateItemLikeState(u, g, v, a) : p ? this._updateItemLikeState(h, p, v, a) : m && (a ? m.addClass(ne) : m.removeClass(ne)))
        },
        _onActionBtnClick: function(e) {
            var t = e.target,
                a = this.view.get(O).get(C),
                s = t.hasClass(Q) ? t : null,
                o = t.ancestor(".js-stream-like-button,.js-stream-dislike-button,.js-stream-side-buttons," + ue, p, ce),
                r = s ? I : o && o.test(we) ? H : o && o.test(ue) ? f : D,
                l = t.ancestor(ve + n + je + n + Oe, p, ye),
                d = l.getData(v) || l.getData($),
                c = l && this.view.rapidParseYLK(l.one(i + X)),
                h = 0 === e.clientX && 0 === e.clientY;
            e.preventDefault(), r !== f ? (e.currentTarget.hasClass(X) || e.currentTarget.hasClass("js-stream-dislike-button") ? (r = U, this.view.rapidBeaconClick(e.currentTarget, c)) : e.currentTarget.hasClass(G) && (r = I, c.elmt = "cl", this.view.rapidBeaconClick(e.currentTarget, c)), r === I ? this.drawer && this._closeDrawer(l, r, h) : r === U && (!0 === l.get("children").hasClass("js-stream-widePromo-container") && l.get("children").addClass("D(n)"), this._buildDrawer(l, r, h)), r !== I && r !== U && (this._updateItemState(l, r), r === D && this._closeDrawer(l, I)), h ? l.one("a").focus() : o.blur(), a.js.related_content && l.hasClass(W) && this.view._recordRelated(l, p)) : d && !this.commentsDrawerOpened[d] && (this.commentsDrawerOpened[d] = 1, this._fetchComments(l))
        },
        _updateItemLikeState: function(e, t, a, n) {
            var i = t && t.one(r),
                o = t && t.one(s);
            n ? (e.addClass(W), t.addClass(ee), i && i.replaceClass(ae, se), o && o.set(Y, a.UNDO)) : (t.removeClass(W), t.removeClass(ee), o && o.set(Y, a.LIKE), i && i.replaceClass(se, ae))
        },
        _onAdFeedbackClick: function(t) {
            var a, s, n, r, l, d, c = t.currentTarget,
                h = 0,
                m = c.ancestor(je, p, ye),
                u = c.ancestor(De, p, ye),
                g = c.ancestor(de, p, je),
                v = g && g.one(i + q + " input");
            u ? (t.preventDefault(), this._feedbackBeacon(u.getData(te), "start"), s = u.one(".adb-thank-you"), n = u.one(_e), r = u.one(".js-stream-related-publisher"), l = u.one(Be), s && s.replaceClass("D-n", o), n && n.hide(), r && r.hide(), l && l.hide()) : c.hasClass("js-stream-ad-done") ? (t.preventDefault(), m.addClass(J), h = (d = c.ancestor(de).one("input:checked")) ? d.get("value") : 0, a = e.Lang.trim(m.one(".js-stream-adfdb-reason input").get("value")), this._feedbackBeacon(m.getData(te), V, h, a || o), this._closeDrawer(m, I)) : v && (v.get("checked") ? v.get(M).addClass(q + "-selected") : v.get(M).removeClass(q + "-selected"))
        },
        loginTooltipTimer: null,
        _startLoginTooltipTimer: function() {
            this.loginTooltipTimer = e.later(5e3, this, this._closeLogin)
        },
        _cancelLoginTooltipTimer: function() {
            this.loginTooltipTimer && this.loginTooltipTimer.cancel()
        },
        _closeLogin: function() {
            var e = this.view.get(w).one(Le),
                t = e && e.ancestor(ve),
                a = t && t.one(we + " " + Te + ".hide");
            e && (e.remove(p), a && a.removeClass(T))
        },
        _onLoggedOutActionClick: function(t) {
            var s, i, r, l, d, c, h, m, u, g, _ = this,
                w = this.view.get(O).get(C),
                k = t.target,
                b = k.ancestor(Te, p),
                I = k.ancestor(ve + n + je + n + Oe),
                A = I.getData(v) || I.getData($),
                j = I.one(we + n + Ce),
                B = this.view.get(O);
            I.hasClass(z) ? this._onActionBtnClick(t) : ((l = k.ancestor(pe + n + ge, p, ve)) ? (s = k.ancestor(pe, p, he), r = f) : r = (s = k.ancestor(".js-stream-button-loggedout", p, ce)).test(we) ? H : D, t.preventDefault(), s && (i = s && s.getAttribute(S) || o), !w.ui.stream_actions_likable && r !== f || k.ancestor(Oe) || b || (d = I.one(Le), g = j && j.one(Te), d ? g && g.removeClass(T) : (g && g.addClass(T), dust.render("td-applet-stream-atomic-templates-drawer_flyout", e.merge({}, {
                config: B.get(C),
                i18n: B.get(y),
                action: r
            }), function(e, t) {
                !e && t && (l ? l.append(t) : I.append(t), d = I.one(Le), _._rapidRefresh()), _._startLoginTooltipTimer()
            }))), r === f ? (h = k.ancestor(he, p, He)) && s && (u = (m = I.one(_e)).getAttribute("data-orig-link") || m.getAttribute(S), c = {
                commentId: h.getData("cmtId"),
                uuid: A,
                action: r,
                value: s.hasClass("js-stream-cmnt-up") ? "thumbsUp" : "thumbsDown",
                link: u
            }) : c = {
                uuid: A,
                action: r,
                beacon: this.view.rapidParseYLK(I.one(_e))
            }, c && e.Af.Cache.set(Ee, c, "max-age=120"), i && -1 === i.indexOf("javascript:void") ? a.location = i + encodeURIComponent(a.location.href) : b && (a.location = w.js.login_url))
        },
        _onLoginClick: function(e) {
            e.preventDefault();
            var t = e.target.getAttribute(S);
            t && (a.location = t + encodeURIComponent(a.location.href))
        },
        _onShareAction: function(t) {
            var a = this,
                s = {},
                n = this.view.get(O),
                i = n.get(C),
                o = t.target.ancestor(Z, p, ce),
                r = o.ancestor(ve);
            o.hasClass(j) || (s.social_share = a._generateShareUrls(r), dust.render(xe, e.merge(s, {
                config: i,
                i18n: n.get(y)
            }), function(e, t) {
                var s = o && o.one(Ae);
                !e && t && s && (s.append(t), o.addClass(j), a._rapidRefresh())
            }))
        },
        _getCauuid: function(t) {
            var a = this.view.get(O).getDataModel(K).get(re),
                s = null;
            return e.Array.each(a, function(e) {
                e.id === t && (s = e.i13n.g)
            }), s
        },
        _getStorylineIds: function() {
            var t = this.view.get(O).getDataModel(K).get(re),
                a = [];
            return e.Array.each(t, function(t) {
                t.storyline && e.Array.each(t.storyline, function(e) {
                    var t = e.cauuid || e.id;
                    t && a.push(t)
                })
            }), a
        },
        _onReblogHover: function(e) {
            var t = e.target.ancestor(ve),
                a = t.one(be),
                s = this._generateShareUrls(t);
            a.setAttribute(S, s.tumblr)
        },
        _toggleShareDrawer: function(e) {
            var t = e.target.ancestor(Z, p, ce);
            t.hasClass(j) || this._onShareAction(e), t.toggleClass("stream-share-open")
        },
        _triggerRecordRelated: function(e) {
            var t = e.target.ancestor(ve);
            t && this.view._recordRelated(t)
        },
        _generateShareUrls: function(e) {
            var t, a, s, n, i, r, l, d = this.view.get(O).get(C),
                c = e.getData("offnet") || !1,
                m = [],
                u = e.one(".js-stream-roundup-filmstrip"),
                g = e.one(".stream-summary"),
                p = g && g.get(Y) || o,
                v = e.one(fe),
                _ = v && v.get(Y) || o,
                f = d.ui.twitter_id || "",
                w = u ? e.one(".js-stream-content-link") : v,
                k = w && w.get(S),
                b = w && (w.getAttribute("data-orig-link") || w.getAttribute("data-share-link") || k || o),
                D = {};
            return d.ui.offnet_share_previewlink && k && (b = k + "?.tsrc=fauxdal"), b ? (_ = _.trim(),
                i = encodeURIComponent(_.substr(0, 97) + "..."), r = encodeURIComponent(_), n = encodeURIComponent(p.trim()), l = encodeURIComponent(b.trim()), (s = e.all(".sl-url")) && s.each(function(e) {
                    var t = e.get(S);
                    t && m.push(encodeURIComponent(t))
                }), !d.ui.offnet_allshare_enabled && c || ((a = []).push("app_id=90376669494"), a.push("link=" + l), a.push("name=" + r), a.push("tsrc=fb"), D.facebook = "https://www.facebook.com/dialog/feed?" + a.join("&"), (a = []).push("subject=" + r), t = l + h + m.join(h), a.push("body=" + t), a.push(".tsrc=mail"), D.mail = "mailto:?" + a.join("&")), a = [], _.length > 100 ? a.push("text=" + i) : a.push("text=" + r), a.push("url=" + l), f && a.push("via=" + f), D.twitter = "https://twitter.com/intent/tweet?" + a.join("&"), (a = []).push("url=" + l), a.push("name=" + r), n && a.push("description=" + n), D.tumblr = "https://www.tumblr.com/widgets/share/tool?shareSource=legacy&canonicalUrl=&posttype=link&" + a.join("&"), D) : {}
        },
        _buildDrawer: function(t, s, n, i, o) {
            var r, l = {},
                d = this.view.get(O),
                c = d.get(C),
                h = 120,
                m = "td-applet-stream-atomic-templates-drawer_desktop",
                u = this;
            l.action = c.ui.defaultDrawerAction, l.applet_type = "td-applet-stream-atomic", l.is_ad = t.hasClass(z), l.is_ad && (this._feedbackBeacon(t.getData(te), "start"), c.ads.feedback_drawer && (m = "td-applet-stream-atomic-templates-feedback_drawer_sm", t.setStyle("display", "block"), (r = t.one(".js-stream-dislike-button")) && r.addClass("Dn"), h = 210, l.id = t.getData("uuid"))), i && (l.comments = i.data, l.link = i.link, h = 126), dust.render(m, e.merge(l, {
                config: c,
                i18n: d.get(y)
            }), function(e, a) {
                !e && a && ("comments" === s ? t.one(".js-stream-related-content") ? t.insertBefore(a, t.one(".js-stream-related-content")) : t.one(".js-stream-item-wrap").append(a) : t.append(a), u.drawer = t.one(He), u._rapidRefresh())
            }), t.addClass(oe), this.drawer.transition({
                maxHeight: h + "px"
            }, c.ui.disable_scroll_down ? null : function() {
                var t, s, n = e.DOM.region(u.drawer.getDOMNode()),
                    i = e.DOM.viewportRegion(),
                    r = n.bottom,
                    l = i.bottom;
                !o && r > l && (t = r - l + u.drawer.get("scrollHeight"), s = 22, a.scrollBy(0, t + s))
            })
        },
        _closeDrawer: function(e, t, a, s) {
            var n = this,
                o = n.drawer,
                r = function() {
                    o && o.remove(), t !== I && "toggle" !== t || !e.hasClass(J) || n._removeStreamItem(e), e && e.removeClass(oe), n.drawer && n.drawer.detach(), n.drawer = null, a && e.one(i + X).focus()
                };
            s ? (e && (o = e.one(He) || n.drawer), o && o.transition({
                maxHeight: "0px"
            }, r)) : r()
        },
        _updateItemState: function(t, a) {
            var n, i, o, d, c = this.view.get(O).get(C),
                h = t.one(we) || t.one(Ye),
                v = t.one(Ce),
                _ = t.getData($) || t.one(_e) && t.one(_e).getData($),
                f = t.hasClass(W) ? u : t.hasClass(J) ? g : m,
                w = m,
                k = this.view.get(O).get(y),
                b = this.view.get(A),
                I = {};
            a === H ? (this.userSignedIn && !t.hasClass(W) ? (v && v.removeClass(ee), t.removeClass(J), this.infoTextTimer && (this.infoTextTimer.cancel(), this.infoTextTimer = null), c.ui.stream_actions_minimal || t.one(".ActionLike").insert('<li class="js-stream-like-msg D-i Fz-xs Pt-6 Pstart-6">' + k.ACTION_SEE_MORE + "</li>", "before"), this.infoTextTimer = e.later(3e3, this, function() {
                (i = t.one(ke)) && i.remove()
            })) : t.hasClass(W) || (v && v.removeClass(ee), t.removeClass(J)), t.hasClass(W) && (i = t.one(ke)) && i.remove(), h && h.toggleClass(ee), t.toggleClass(W), h && h.hasClass(ee) ? this.likes[_] = p : delete this.likes[_], I[b] = this.likes, e.Af.Cache.set(Me, I, Pe)) : a === D && (this.userSignedIn && !t.hasClass(J) ? (h && h.removeClass(ee), t.removeClass(W)) : t.hasClass(J) || (h && h.removeClass(ee), t.removeClass(W)), v && v.toggleClass(ee), t.toggleClass(J)), h && (o = h.ancestor(".modal-actions", !0, "DIV") ? k.LIKE : k.LIKE_THIS_TOPIC, (d = h.one(s)) && d.set(Y, h.hasClass(ee) ? k.UNDO : o), h.hasClass(ee) ? h.one(r).replaceClass(ae, se) : h.one(r).replaceClass(se, ae)), a === H && t.hasClass(W) ? w = u : a === D && t.hasClass(J) && (w = g), this._fireItemActionBeacon(t, a, w, f), this.userSignedIn && _ && 0 === _.indexOf(l) && (n = this._getCauuid(_)) && (_ = n)
        },
        _fireItemActionBeacon: function(t, a, s, n) {
            var i, r, l = this.userSignedIn,
                d = this.view.getRapid(),
                c = o,
                h = {
                    t4: k,
                    elm: "btn",
                    itc: u,
                    _p: m
                };
            d && (i = (n === g ? R : n === m ? x : E) + "-" + (s === g ? R : s === m ? x : E), r = this.view.rapidParseYLK(t.one(_e)), delete(h = e.merge(r, h)).slk, delete h.elmt, delete h._p, delete h.rspns, a === H ? (l && (h.dcl = i, c = b), h.elmt = H, d.beaconClick(h.sec || this.view.secValue, H, 0, h, c)) : a === D && (l && (h.dcl = i, c = b), h.elmt = P, h.rspns = s === g ? "rmct" : "unrmct", d.beaconClick(this.view.secValue, P, 0, h, c)))
        },
        _rapidRefresh: function() {
            var e = this.view.getRapid();
            e && e.refreshModule("applet_" + this.view.get(A))
        },
        _removeStreamItem: function(t, a) {
            var s = t.getData($),
                n = this,
                i = this.view.get(O),
                o = i.get(C),
                r = this.userSignedIn;
            t.get("children").addClass("Dn"), t.addClass("undoItem"), dust.render(n.removedItemTemplate, {
                i18n: i.get(y)
            }, function(e, a) {
                !e && a && (t.append(a), n._rapidRefresh())
            }), r || this.removedItems.push(s), this.removalTimer = e.later(3e3, this, function() {
                r || e.Af.Cache.set(Ne, this.removedItems, Pe), t.remove(), o.js.content_events && e.Af.Event.fire("content:remove", {
                    guid: n.view.get(A),
                    list: [s]
                }), e.Lang.isFunction(a) && a()
            })
        },
        _restoreSavedAction: function() {
            var t, a, s, n = this,
                i = this.view.getRapid(),
                o = this.view.get(w),
                l = {
                    t4: k,
                    elm: "btn",
                    itc: u
                };
            e.Af.Cache.get(Ee, {}, function(d, c) {
                c && (c.action === f ? n.view.get(O).comments.rateComment({
                    commentId: c.commentId,
                    value: c.value,
                    uuid: c.uuid,
                    update: !1
                }) : (i && (l = e.merge(c.beacon, l), s = c.action === H ? H : P, l.elmt = s, l.dcl = x + "-" + (c.action === H ? E : R), i.beaconClick(n.view.secValue, s, 0, l, "dclitm")), (t = o.one('li[data-uuid="' + c.uuid + '"]')) && (c.action === H && ((a = t.one(we)) && (a.addClass(ee), a.one(r).replaceClass("IconActionPlus", "IconCoreCheck")), t.addClass(W)), c.action === D && t.remove()))), e.Af.Cache.remove(Ee)
            })
        },
        _onHoverAdItem: function(e) {
            var t = e.target,
                a = t.ancestor(je, p),
                s = t.ancestor(De, p, ye);
            s ? t.ancestor(Be, p) ? this._feedbackBeacon(s.getData(te), "movr_x") : this._feedbackBeacon(s.getData(te), ie) : t.ancestor(le, p) ? this._feedbackBeacon(a.getData(te), "movr_x") : this._feedbackBeacon(a.getData(te), ie)
        },
        _feedbackBeacon: function(t, a, s, n) {
            var i = o;
            t && a && (this.adBeaconMap[t] || (this.adBeaconMap[t] = {
                movr_ad: !1,
                movr_x: !1,
                start: !1,
                submit: !1,
                undo: !1
            }), i += "type$fdb_" + a, this.adBeaconMap[t][a] || (s && (i += ",subo$" + s), n ? i += ",cmnt$" + encodeURIComponent(n) : a === V && (i += ",cmnt$"), this.adBeaconMap[t][a] = p, t = t.replace(/\$\(AD_FEEDBACK\)/, "(" + i + ")"), e.Af.Beacon.send(t)))
        },
        _fetchComments: function(a, s) {
            var n = this,
                i = n.view.get(O),
                o = i.get(C),
                r = i && i.comments,
                l = a.getData(v) || a.getData($),
                d = a.one(_e),
                c = d.getAttribute("data-orig-link") || d.getAttribute(S),
                h = n.view.rapidParseYLK(d),
                m = a.one(fe);
            r && r.loadComments({
                uuid: l,
                cpos: h.cpos,
                config: o
            }, function(i) {
                var o = s ? {} : {
                    callback: function() {
                        e.Af.Event.fire("content:navigate", {
                            uuid: l || "",
                            url: c || "",
                            title: m ? m.get("innerText") : "",
                            dir: "open",
                            item: a,
                            guid: n.view.get(A),
                            passThruData: {
                                commentsClick: !0
                            }
                        })
                    }
                };
                i && i.length ? n._buildDrawer(a, "comments", null, {
                    data: i,
                    link: c
                }, s) : (n.commentsDrawerOpened[l] = 0, e.Af.Beacon.error(t, {
                    id: l
                }, {
                    code: "cmntoperr"
                }, o))
            })
        },
        _rateComment: function(e) {
            var t, a = e.target,
                s = a.ancestor(pe, p, he),
                n = this.view.get(O),
                i = n && n.comments,
                o = a.ancestor(ve, p, ye),
                r = a.ancestor(he, p, He);
            e.preventDefault(), !s.hasClass(F) && this.userSignedIn && (i.rateComment({
                commentId: r.getData("cmtId"),
                value: s.hasClass("js-stream-cmnt-up") ? "thumbsUp" : "thumbsDown",
                uuid: o.getData(v) || o.getData($),
                update: r.hasClass(N)
            }), r.all(pe).each(function(e) {
                e.hasClass(F) && (t = parseInt(e.one(me).getContent(), 10), e.one(me).setContent(t - 1))
            }), t = parseInt(s.one(me).getContent(), 10), s.one(me).setContent(t + 1), r.all(pe).removeClass(F), r.addClass(N), s.addClass(F))
        },
        _flagComment: function(t) {
            var a = t.target,
                s = a.ancestor(ge, p, he),
                n = this.view.get(O),
                i = n && n.comments,
                o = a.ancestor(ve, p, ye),
                r = a.ancestor(he, p, He),
                l = r.one(".js-stream-comment-flag-label");
            t.preventDefault(), !s.hasClass(F) && this.userSignedIn && (i.flagComment({
                commentId: r.getData("cmtId"),
                uuid: o.getData(v) || o.getData($),
                update: r.hasClass(N)
            }), s.addClass(F), l.setStyle("display", "block"), e.later(3e3, this, function() {
                l.setStyle("display", "")
            }))
        },
        _closeCommentDrawer: function(e) {
            var t = e.target.ancestor(ve, p, ye),
                a = t.getData(v) || t.getData($);
            a && (this.commentsDrawerOpened[a] = 0), this._closeDrawer(t, null, null, p)
        }
    }
}, "@VERSION@", {
    requires: ["af-applet-view", "af-cache", "af-event", "af-utils", "event-outside", "stencil-fx", "stencil-fx-collapse"]
});
YUI.add("stream-mobile-slider", function(t) {
    "use strict";
    var e, i, n, a, o, s, d, r, c, l, u, p, m, f, h, g, v, b, I, x, S, C, y, E, M, T = null,
        w = 0,
        k = 0,
        B = 1;
    t.namespace("Stream").StreamMobileSlider = function(t) {
        this.options = t.sliderOptions || {}, this.view = t
    }, t.namespace("Stream").StreamMobileSlider.prototype = {
        init: function() {
            var a, s = this,
                d = s.options;
            d.carousel && d.slides && d.container && (e = t.one(d.container), (i = t.one(d.carousel)) && (d.treadmill && (s.addTreadmill(), w = 1, T = !0), (C = s.options.loadMore) && (y = e.one(".ntk-count").one(".index"), (a = s.view.get("model").getDataModel("fptoday")) && (E = a.get("totalCount")), M = s.options.batchSize), n = i.all(s.options.slides), o = n.item(0).get("offsetWidth"), s.updateSizes(), s.bindUIEvents(), s.setupImages(), d.rapid && (I = d.rapid, x = d.i13n ? d.i13n : {}, S = x.sec ? x.sec : "strm")))
        },
        updateSizes: function() {
            n = i.all(this.options.slides), s = n.size(), d = (r = T ? s : s - 1) * o, this.indexItems()
        },
        bindUIEvents: function() {
            var t, a = this;
            e.on("touchstart", function(t) {
                a.start(t)
            }), e.on("touchmove", function(t) {
                a.move(t)
            }), e.on("touchend", function(t) {
                a.end(t)
            }), t = a.whichTransitionEvent(), e.getDOMNode().addEventListener(t, function(t) {
                a.resetCarousel(t)
            }), a.options.indicator && a.setupIndicator(a.options.indicator), window.addEventListener("orientationchange", function() {
                o = n.item(0).get("offsetWidth"), i.addClass("animate").setStyle("transform", "translate3d(-" + w * o + "px,0,0)")
            })
        },
        start: function(t) {
            g = !1, setTimeout(function() {
                g = !0
            }, 250), c = t.touches[0].pageX, l = t.touches[0].pageY
        },
        move: function(t) {
            u = t.touches[0].pageX, p = t.touches[0].pageY, m = Math.abs(u - c), (f = Math.abs(p - l)) > m || m < 30 || (t.preventDefault(), (h = w * o + (c - u)) < d && i.setStyle("transform", "translate3d(-" + h + "px,0,0)"))
        },
        end: function(t) {
            var e, a = this;
            f > m || m < 30 || (e = "right", (Math.abs(w * o - h) > o / 2 || !1 === g) && (h > w * o && w < r ? k = ++w + 1 : h < w * o && w > 0 && (k = --w - 1, e = "left")), a.loadImage(n.item(k)), i.addClass("animate").setStyle("transform", "translate3d(-" + w * o + "px,0,0)"), m = 0, f = 0, I && (x.pos = w + 1, I.beaconClick(S, e, "", x)))
        },
        addTreadmill: function() {
            var t = n.item(s - 1).cloneNode(!0),
                e = n.item(0).cloneNode(!0);
            i.prepend(t), i.setStyle("transform", "translate3d(-" + o + "px,0,0)"), i.append(e), s += 2, n = i.all(this.options.slides)
        },
        indexItems: function() {
            n.each(function(t, e) {
                t.setAttribute("data-item", e)
            })
        },
        resetCarousel: function(t) {
            var e, a = this;
            T && (0 === w ? (e = o * (s - 2), k = (w = s - 2) - 1, a.loadImage(n.item(w))) : w === s - 1 && (e = o, k = (w = 1) + 1, a.loadImage(n.item(w))), e && (i.removeClass("animate"), i.setStyle("transform", "translate3d(-" + e + "px,0,0)"))), a.options.indicator && a.updateIndicators(), C && a.updateIndexCount()
        },
        whichTransitionEvent: function() {
            var t, e = document.createElement("fakeelement"),
                i = {
                    transition: "transitionend",
                    OTransition: "oTransitionEnd",
                    MozTransition: "transitionend",
                    WebkitTransition: "webkitTransitionEnd"
                };
            for (t in i)
                if (e.style[t] !== undefined) return i[t]
        },
        setupIndicator: function(e) {
            var i, n, o, d;
            if (a = t.one(e)) {
                for (v = "Bd($indicator_bdr_active)", b = "Bd\\(\\$indicator_bdr_active\\)", i = '<span class="ntk-indicator W(4px) H(4px) Bdrs(20px) D(ib) Mx(3px) Bgc(#b9bdc4) Bd($indicator_bdr)"></span>', o = T ? s - 2 : s, n = 0; n < o; n++)(d = t.Node.create(i)).setAttribute("data-indicator", n), a.append(d);
                this.updateIndicators()
            }
        },
        updateIndicators: function() {
            var t, e, i;
            a && (t = T ? w - 1 : w, a.all(".ntk-indicator").removeClass(b), e = '[data-indicator="' + t + '"]', i = a.one(e), a.one(e) && i.addClass(v))
        },
        setupImages: function() {
            T ? (this.loadImage(n.item(0)), this.loadImage(n.item(2))) : this.loadImage(n.item(1))
        },
        loadImage: function(t) {
            if (t) {
                var e = t.one(".slide-img");
                e && e.hasAttribute("data-src") && (e.set("src", e.getAttribute("data-src")), e.removeAttribute("data-src"))
            }
        },
        fetchFptodayBatch: function() {
            var e = this,
                n = {
                    size: M
                },
                a = e.view.get("model"),
                o = a.get("config");
            a.getNextFptodayBatch(n, function(n, s) {
                if (!n && s) {
                    var d = t.merge(s, {
                        config: o,
                        i18n: a.get("i18n")
                    });
                    B++, dust.render("td-applet-stream-atomic-templates-item-ntk_items_sm", d, function(t, n) {
                        i.appendChild(n), e.updateSizes()
                    })
                }
            })
        },
        updateIndexCount: function() {
            y.set("text", w + 1), C && s < E && w === B * M - 5 && this.fetchFptodayBatch()
        }
    }
}, "@VERSION@", {
    requires: ["af-applet-view", "af-utils"]
});
YUI.add("stream-needtoknow-anim", function(e) {
    "use strict";
    var t = "display",
        n = ".js-stream-content",
        a = ".js-stream-content-link",
        o = "model",
        s = "mouseover",
        i = "selected",
        r = "strm-featured-crossfade",
        l = "strm-featured-selected",
        u = ".strm-right",
        m = "story-index";
    e.namespace("Stream").NeedToKnowAnim = function(t) {
        var n, o;
        return t ? (n = this, o = t.get("container").one(".strm-right-menu-roundup"), n.view = t, n.itemContainer = o, n.populateNeedToKnowData(), o && (t._eventHandles.push(o.delegate(s, n._onHoverContentLink, u + " " + a, n)), t._eventHandles.push(o.on([s, "focus"], n.stopAutoplay, n)), t._eventHandles.push(o.on(["mouseout", "blur"], n.startAutoplay, n)), e.Af.PageViz.on("visible", e.bind(this.startAutoplay, this), !1), e.Af.PageViz.on("hidden", e.bind(this.stopAutoplay, this), !1), n.startAutoplay()), n) : null
    }, e.namespace("Stream").NeedToKnowAnim.prototype = {
        needToKnowData: [],
        populateNeedToKnowData: function() {
            var t, a, s, i = this,
                r = i.view.get(o),
                l = i.itemContainer.ancestor(n),
                u = l && l.getData("uuid");
            !i.needToKnowData.length && u && (t = r.getItemByID(u), a = {
                ccode: "",
                i13n: {},
                image: {},
                isnewnode: !0,
                link: "",
                more_link_text: "",
                summary: "",
                title: "",
                viewer_eligible: !1
            }, i.needToKnowData.push(e.merge(a, t)), t && t.storyline && (s = e.Lang.isArray(t.storyline) ? t.storyline : [t.storyline], e.Array.forEach(s, function(t, n) {
                i.needToKnowData.push(e.merge(a, t))
            })))
        },
        startAutoplay: function() {
            var t = this;
            t.stopAutoplay(), t.autoplayTimer = e.later(7e3, t, t.selectNextItem, null, !0)
        },
        selectNextItem: function() {
            var e = this.itemContainer,
                t = e.one(u + " ." + i),
                n = t.next(a) || e.all(u + " " + a).item(0);
            this._showContentItem(parseInt(n.getData(m), 10)), t.removeClass(i), n.addClass(i)
        },
        stopAutoplay: function() {
            var e = this;
            e.autoplayTimer && (e.autoplayTimer.cancel(), e.autoplayTimer = null)
        },
        _showContentItem: function(n) {
            var a = this,
                s = a.view.get(o),
                i = s.get("config");
            e.Lang.isNumber(n) && a.needToKnowData[n] && dust.render("td-applet-stream-atomic-templates-item-right_menu_featured", e.merge(a.needToKnowData[n], {
                config: i,
                i18n: s.get("i18n")
            }), function(n, o) {
                var s = e.Node.create(o),
                    i = a.itemContainer.one(".strm-featured-crossfade"),
                    u = a.itemContainer.one(".strm-left .strm-featured-selected");
                i && u && (i.setStyle("opacity", 0), i.setStyle(t, "block"), i.setHTML(s), u.replaceClass(l, r), i.replaceClass(r, l), u.transition({
                    duration: .4,
                    opacity: 0
                }, function() {
                    u.setStyle(t, "none")
                }), i.transition({
                    duration: .4,
                    opacity: 1
                }), a.view.fireEvent("viewupdate"))
            })
        },
        _onHoverContentLink: function(e) {
            var t = e.target,
                o = t.ancestor(a, !0, n),
                r = t.ancestor(u, !0, n);
            r && e.type === s && !o.hasClass(i) && (r.all("> " + a).removeClass(i), o.addClass(i), this._showContentItem(parseInt(o.getData(m), 10)))
        }
    }
}, "@VERSION@", {
    requires: ["af-applet-view", "af-pageviz"]
});
YUI.add("stream-onboard-v2", function(e) {
    "use strict";
    var t = ".js-stream-content",
        a = "td-applet-stream-atomic-templates-",
        n = ".js-stream-onboarding",
        o = ".js-stream-onboarding-skip",
        s = ".js-stream-onboard-cards",
        r = "js-stream-onboarding-item-first",
        i = "js-stream-onboard-wrapper",
        d = "js-stream-onboarding-first";
    e.namespace("Stream").Onboard = function(e) {
        if (!e) return null;
        var t = e.get("container");
        return e._eventHandles.push(t.delegate("click", this._onClickOnboardItem, n + "," + o, this)), this.view = e, this.container = t, this.appletModel = e.get("model"), this.onboardModel = this.appletModel.getDataModel("onboarding"), this
    }, e.namespace("Stream").Onboard.prototype = {
        _updateCards: function(a, n) {
            var o, r = n.one(".js-stream-item-wrap", !0, t),
                i = this;
            r.setHTML(a), (o = r.one(s)) && e.later(50, i, function() {
                o.setStyle("opacity", 1), i.onboard_animation = !1, i.view.fireEvent("viewupdate")
            })
        },
        _renderItems: function(t, n) {
            var o, s, d = this;
            this.container.all("." + r).removeClass(r), dust.render(a + this.view._itemTemplate, e.merge(this.appletModel.toJSON(), t), function(t, a) {
                !t && a && (n.insert('<li class="' + i + ' Collapse"><ul>' + a + "</ul></li>", "after"), o = d.container.one("." + i), e.Stencil.Fx("execute", o, {
                    fx: "collapse",
                    show: {}
                }), o.on("fx:done", function() {
                    s = o.one("ul").getHTML(), o.replace(s), d.view.fireEvent("viewupdate")
                }))
            })
        },
        _renderModule: function(t, a, n, o) {
            var r, i, d = this,
                l = Modernizr.csstransforms3d ? 500 : 0;
            e.later(o, d, function() {
                r = n.one(s), t.finalState ? (r.addClass("Collapse").addClass("Collapse-opened"), e.Stencil.Fx("execute", r, {
                    fx: "collapse",
                    hide: {}
                }), n.addClass("js-stream-onboarding-title"), (i = n.previous()) && i.addClass("js-stream-onboarding-previous"), r.on("fx:done", function() {
                    d._updateCards(a, n)
                })) : (r.setStyle("opacity", 0), e.later(l, d, function() {
                    d._updateCards(a, n)
                }))
            })
        },
        _onClickOnboardItem: function(s) {
            var r, i, l = this.appletModel.getReadParams(),
                c = s.target,
                m = c.ancestor("li", !0, t),
                p = c.ancestor(t, !0, "#Stream"),
                u = c.ancestor(o, !0, t) ? 0 : 1e3,
                f = Modernizr.csstransforms3d,
                b = this;
            this.onboardModel && m && !this.onboard_animation && (m.on("fx:done", function() {
                p.all(".Flip-h").removeAttribute("data-fx")
            }), this.onboard_animation = !0, i = (r = m.one(n)).hasClass(d) ? p.one(".js-stream-onboarding-second") : p.one("." + d), f ? i && !c.ancestor(o, !0, t) && i.addClass("js-stream-onboarding-disabled") : r.addClass("Dn"), this.onboardModel.updateItem({
                cat: m.getData("onboarding-cat"),
                id: m.getData("onboarding-id")
            }, l, function(t) {
                dust.render(a + "item-onboarding", e.merge(b.appletModel.toJSON(), t), function(a, n) {
                    !a && n && e.later(u, b, function() {
                        t.stream_items && b._renderItems(t, p), b._renderModule(t, n, p, u)
                    })
                })
            }))
        }
    }
}, "@VERSION@", {
    requires: ["af-applet-view", "stencil-fx", "stencil-fx-collapse"]
});
YUI.add("td-applet-comments-model-v2", function(e, t) {
    "use strict";
    var n = e.Mjata.createModelClass("TDCommentsModel2", e.Mjata.Model, [e.Af.Sync], {
        readonly: !1,
        postForRead: !0,
        initializer: function() {},
        loadComments: function(t, n) {
            var o = t.config,
                s = o.ui.comments_request_count || 10,
                a = this.syncContext.context.lang || "en-US",
                r = {
                    alphatar: {
                        enabled: !0,
                        defaultProfile: "https://s.yimg.com/dh/ap/social/profile/profile_b48.png"
                    },
                    uuid: t.uuid,
                    publisher: "homepage-" + a,
                    count: Math.max(2, s),
                    sortBy: o.ui.comments_inline_ranking || "highestRated",
                    resource: "comments"
                },
                i = [];
            e.Af.Transport.read("CommentsStore", r, this.syncContext, function(s, a) {
                !s && a && a.list && a.list.length >= 2 && e.Array.forEach(a.list, function(e, n) {
                    if (i.length < 2) {
                        var s = {
                            id: e.id,
                            time: e.createTimeAgo,
                            summary: e.content + (e.contentContinued ? "..." : ""),
                            upVote: e.thumbsUpCount,
                            downVote: e.thumbsDownCount,
                            replies: e.replyCount,
                            ratingValue: e.ratingValue,
                            i13n: {
                                cpos: t.cpos,
                                pos: n + 1
                            }
                        };
                        e.userProfile && (s.user = {
                            name: e.userProfile.nickName,
                            img: e.userProfile.imageUrl
                        }), o.ui.comments_editorial_suppression && !0 === e.editorialSuppressed || i.push(s)
                    }
                }), n(i.length >= 2 ? i : [])
            })
        },
        rateComment: function(t) {
            var n = this.syncContext.context.lang || "en-US",
                o = {
                    uuid: t.uuid,
                    publisher: "homepage-" + n,
                    property: "rating",
                    resource: "rating-comment",
                    value: t.value,
                    commentId: t.commentId
                };
            t.update ? e.Af.Transport.update("CommentsStore", o, {}, this.syncContext) : e.Af.Transport.create("CommentsStore", o, {}, this.syncContext)
        },
        flagComment: function(t) {
            var n = this.syncContext.context.lang || "en-US",
                o = {
                    uuid: t.uuid,
                    publisher: "homepage-" + n,
                    type: "comment",
                    resource: "abuseReport",
                    commentId: t.commentId
                };
            e.Af.Transport.create("CommentsStore", o, {
                reason: ""
            }, this.syncContext)
        }
    }, {
        ATTRS: {
            id: {
                value: "Comments2"
            }
        }
    });
    e.Mjata.ModelStore.alias("Comments2", new n)
}, "@VERSION@", {
    requires: ["mjata-model-base", "af-sync"]
});
YUI.add("td-applet-interest-model-v2", function(t, e) {
    "use strict";
    var n = t.Mjata.createModelClass("TDInterestModel2", t.Mjata.Model, [t.Af.Sync], {
        resource: "interest-v2",
        readonly: !1,
        postForRead: !0,
        initializer: function() {},
        parseInterest: function(e) {
            var n, s;
            return t.Lang.isString(e) ? (s = [], n = this.get("interest_data"), t.Array.each(e.split("|"), function(t) {
                n[t] && s.push({
                    id: t,
                    index: s.length + 1,
                    name: decodeURIComponent(n[t].name),
                    state: (n[t].state || 0).toString(),
                    selected: 1 === n[t].state || -1 === n[t].state ? "Selected" : ""
                })
            }), s) : null
        },
        loadUserInterests: function() {
            var t = this;
            t.sync("read", {
                reqType: "interest"
            }, function(e, n) {
                !e && n && t.addInterests(n)
            })
        },
        getInterest: function(t) {
            return this.get("interest_data")[t]
        },
        setInterest: function(t, e) {
            var n = this.get("interest_data"),
                s = n[t];
            s.state = e, n[t] = s, this.set("interest_data", n)
        },
        addInterests: function(e) {
            var n = this.get("interest_data");
            this.set("interest_data", t.mix(n, e, !0, null, 0, !0))
        }
    }, {
        ATTRS: {
            id: {
                value: "Interests2"
            },
            interest_data: {
                value: {}
            }
        }
    });
    t.Mjata.ModelStore.alias("Interests2", new n)
}, "@VERSION@", {
    requires: ["mjata-model-base", "af-sync"]
});
YUI.add("td-applet-stream-appletmodel-v2", function(e, t) {
    "use strict";
    var s = "batch",
        a = s + "_new",
        i = "config",
        n = "fetched",
        r = n + "_new",
        o = "i13n.pp.ccode_st",
        l = "fptodayItems",
        d = "related",
        c = "stream_items",
        g = "ads_items",
        u = "ads_token",
        m = "more_items",
        f = "fptoday_more_items",
        p = "enrichment_ids",
        h = "interest_data",
        _ = "settings",
        y = !0,
        v = null,
        A = {
            silent: y
        },
        I = "stream",
        k = "templates",
        b = "td-applet-stream",
        P = {
            article: "1",
            slideshow: "2",
            video: "3",
            ad: "4"
        };
    e.namespace("TD.Applet").StreamAppletModel2 = e.Mjata.ModelBase.createModelClass("TDAppletStreamAppletModel2", "1.0", e.Af.AppletModel, [], {
        initializer: function() {
            var t, a, r, o = this.get(i),
                l = this.get(_),
                d = this.getDataModel(I);
            this.set(n, d.get(n)), r = e.Af.Config.get("context.woeid"), o.ui.location && "YPROP:LOCAL" === o.category && (e.Mjata.ModelStore.after("AfLocations:selectedLocationChange", this._afterLocationChanged, this), r = e.Object.getValue(e.Mjata.ModelStore.getByAlias("Locations"), ["selectedLocation", "woeid"])), r && l.woeid !== r && this.set(_ + ".woeid", r), !o.signed_in && e.Af.Utils.userSignedIn() && this.set(i + ".signed_in", y), (o.ui.inline_filters || o.ui.stream_actions) && ((t = e.Mjata.ModelStore.getByAlias("Interests2")).addInterests(d.get(h)), t.syncContext = this.syncContext, this.interests = t), o.ui.comments_inline && ((a = e.Mjata.ModelStore.getByAlias("Comments2")).syncContext = this.syncContext, this.comments = a), o.js.content_events && (o.js.full_content_event ? (this._fireContentEvents(v, e.clone(d.get("viewer_data"))), d.set("viewer_data", v)) : this._fireContentEvents()), o.ui.viewer && e.Global.fire("stream:template", {
                template: o.ui.item_template,
                summaryView: y
            }), o.ads.fallback && this._processAdsResponseForFallback(), o.ads.pagination && this.fetchNextAdBatch(e.merge(this.getReadParams(), {
                bpos: this.get(s) + 1,
                cpos: this.get(n),
                cposy: d.get("cposy")
            }), !0), this._setupPolling()
        },
        hasMoreItems: function() {
            var e = this.getDataModel(I);
            return e.get(m).length > 0 || e.get("continuation")
        },
        getItemByID: function(t) {
            var s;
            if (t) return s = this.getDataModel(I).get(c), e.Array.find(s, function(e) {
                return e.id && e.id === t
            })
        },
        getNextBatch: function(a, r) {
            var o = this,
                l = new e.Parallel,
                d = this.get(i),
                u = o.getDataModel(I),
                f = o.interests,
                b = u.get(m),
                P = v,
                M = o.get(_).size,
                w = o.getDataModel("items"),
                E = e.merge(o.getReadParams(), {
                    bpos: o.get(s) + 1,
                    cpos: o.get(n),
                    cposy: u.get("cposy")
                }),
                C = o.interests ? o.interests.get(h) : v,
                D = u.get("continuation"),
                x = [],
                U = [],
                R = {},
                O = null,
                j = {};
            D ? E.continuation = D : (x = b.slice(0, M), !b[M] || "ad" !== b[M].type && "cm" !== b[M].type || (P = b[M])), E.ui.enrichment && (E.ui.enrichment.ids = u.get(p)), E.ui.uis_inferred_finance && C && (E.userInterests = C), E.ads.pagination && (O = u.get(g) || [], o.fetchNextAdBatch(E, !1)), w.syncContext = this.syncContext, w.loadItems(x, E, P, O, l.add(function(a, i) {
                !a && i && i.stream_items ? (o.set(s, o.get(s) + 1), o.set(n, o.get(n) + i.stream_items.length), i.ccode = u.get("ccode"), f && i[h] && f.addInterests(i[h]), D && u.set("continuation", i.continuation, A), u.set(p, E.ui.enrichment.ids.concat(i[p])), u.set(k, w.get(k), A), u.set("cposy", i.cposy, A), w.set(c, v), w.set(k, v), (d.js.restore_state || d.js.related_content || d.js.poll_interval && d.ui.incremental_count) && u.set(c, u.get(c).concat(o.pluckFields(i.stream_items))), E.ads.pagination && (u.set(g, O), o.fetchNextAdBatch(E))) : e.Af.Beacon.error(t, {
                    remainingItems: b.length - M
                }, {
                    code: "strbatch"
                }), D || u.set(m, b.slice(M), A), u.set("more", o.hasMoreItems(), A), R = {
                    err: a,
                    result: i
                }
            })), (f && d.signed_in || d.js.content_events) && "YCUSTOM:MYQUOTES" !== d.category && e.Array.forEach(x, function(e) {
                "ad" !== e.type && "cm" !== e.type && U.push(e.id)
            }), l.done(function() {
                var t, s = [];
                !R.err && R.result && (t = R.result.stream_items, e.Array.forEach(t, function(t) {
                    j && j.saveforlater && -1 !== e.Array.indexOf(j.saveforlater, t.id) && (t.saved = y), j && j.like && -1 !== e.Array.indexOf(j.like, t.id) ? t.liked = y : (j && j.dislike && -1 !== e.Array.indexOf(j.dislike, t.id) || a && -1 !== e.Array.indexOf(a, t.id)) && s.push(t)
                }), e.Array.forEach(s, function(s) {
                    t.splice(e.Array.indexOf(t, s), 1)
                })), r(R.err, R.result), !R.err && R.result && R.result.stream_items && d.js.content_events && o._fireContentEvents(R.result.stream_items)
            })
        },
        getNextFptodayBatch: function(s, a) {
            var n, r = this,
                o = this.get(i),
                d = r.getDataModel(l),
                c = r.getDataModel("fptoday"),
                g = c.get(f),
                u = r.getReadParams(),
                m = s.size;
            n = g.slice(0, m), d.syncContext = this.syncContext, d.loadItems(n, u, function(s, i) {
                !s && i && i.fptoday_items ? (c.set("fptoday_items", c.get("fptoday_items").concat(i.fptoday_items)), d.set(l, v), d.set(k, v)) : e.Af.Beacon.error(t, {
                    remainingItems: g.length - m
                }, {
                    code: "fpbatch"
                }), c.set(f, g.slice(m), A), a(s, i), !s && i && i.fptoday_items && o.js.content_events && r._fireContentEvents(i.fptoday_items)
            })
        },
        pluckFields: function(t) {
            var s, a = this.get(i),
                n = {};
            return a.js.pluck_item_fields ? e.Array.map(t, function(t) {
                return n = {}, e.Array.forEach(a.js.pluck_item_fields.split(","), function(e) {
                    t[e] && (n[e] = t[e])
                }), t.storyline && (n.storyline = [], e.Array.map(t.storyline, function(t) {
                    s = {}, e.Array.forEach(a.js.pluck_item_fields.split(","), function(e) {
                        t[e] && (s[e] = t[e])
                    }), n.storyline.push(s)
                })), n
            }) : t
        },
        insertNewItems: function(t) {
            var s = this,
                n = s.getDataModel(I),
                o = n.get(c);
            s.set(a, s.get(a) + 1, A), s.set(r, s.get(r) + t.length, A), e.Af.rapid.getRapidTracker().setRapidAttribute({
                keys: {
                    offst_st: s.get(r)
                }
            }), o[0].first_incremental = !1, n.set(c, s.pluckFields(t).concat(o)), n.set("new_items", {}, A), n.poll.resume(), s.get(i + ".js.content_events") && s._fireContentEvents(t)
        },
        _setupPolling: function() {
            var t, s = this,
                n = s.get(i),
                o = s.getDataModel(I),
                l = o.poll;
            s.set(a, 0, A), s.set(r, 0, A), e.Af.rapid.getRapidTracker().setRapidAttribute({
                keys: {
                    offst_st: 0
                }
            }), n.ui.incremental_count && n.js.poll_interval && n.signed_in && (!n.category || "YPROP:TOPSTORIES" === n.category) && 0 !== o.get(c).length ? l ? l.resume() : ((t = s.getReadParams()).poll = y, o.plug(e.Af.Poll), (l = o.poll).start({
                interval: n.js.poll_interval
            }, t, e.bind(s._handleNewItems, s))) : l && l.pause()
        },
        _handleNewItems: function(t, s) {
            if (!t && s && s.new_stream_items && s.new_stream_items.length) {
                var i, n = this.getDataModel(I),
                    o = n.get(c),
                    l = n.get(m),
                    d = this.get(a) + 1,
                    g = this.get(r),
                    u = this.interests,
                    f = {},
                    p = {
                        items: [],
                        comscore: s.comscore
                    };
                e.Array.each(o, function(e) {
                        f[e.id || e.payoffId] = y
                    }), e.Array.each(l, function(e) {
                        f[e.id || e.payoffId] = y
                    }),
                    e.Array.each(s.new_stream_items, function(e) {
                        var t = e.id || e.payoffId;
                        t && f[t] || p.items.push(e)
                    }), (i = p.items.length) && (e.Array.each(p.items, function(e, t) {
                        e.i13n.bpos = d, e.i13n.cpos = -(g + i - t)
                    }), n.poll.pause()), u && s.new_interest_data && u.addInterests(s.new_interest_data), s.invalidPayoffItems && (p.invalidPayoffItems = s.invalidPayoffItems), n.setAttrs({
                        new_stream_items: v,
                        new_interest_data: v,
                        new_items: p
                    })
            }
        },
        getReadParams: function() {
            var t, s = this.get(i),
                a = this.get(_),
                n = this.getDataModel(I).get(k);
            return t = e.merge(a, {
                ads: s.ads,
                linkSupplement: s.linkSupplement || "",
                ui: s.ui,
                total: s.pagination ? s.total : a.size,
                category: "YPROP:TOPSTORIES" === s.category ? "" : s.category,
                timeout: s.timeout,
                xcc: s.xcc
            }), n && (t.ui.templates = n), s.listId_mixin && s.listId_mixin.count && (t.listId_mixin = s.listId_mixin), s.onboarding.pos > -1 && (t.onboarding = s.onboarding), s.js.xhr_ss_timeout && (t.ss_timeout = 500), t
        },
        _afterLocationChanged: function(e) {
            var t = this.get(i),
                s = this.get(_),
                a = e.newVal;
            a.woeid !== s.woeid && "YPROP:LOCAL" === t.category && this.saveSettings({
                woeid: a.woeid
            })
        },
        _fireContentEvents: function(t, s) {
            var a, n, r, o, l, d, g = [],
                u = [];
            t ? o = t : (r = this.getDataModel(I), n = this.getDataModel("fptoday"), o = r.get(c), l = r.get(m), r.get("bnbData"), a = r.get("fptoday_items") || n && n.get("fptoday_items"), d = r.get("video_card")), g = this._generateEventPayload(o), l && (u = this._generateEventPayload(l, y)), t ? e.Af.Event.fire("content:batch", {
                guid: this.get("guid"),
                list: g
            }) : (s ? e.Af.Event.fire("content:fallbackData", {
                guid: this.get("guid"),
                list: s,
                fullList: g.concat(u)
            }) : e.Af.Event.fire("content:init", {
                guid: this.get("guid"),
                list: g,
                fullList: g.concat(u),
                category: this.get(i).category
            }), a && e.Af.Event.fire("content:init", {
                guid: this.get("guid"),
                list: this._generateEventPayload(a)
            }), d && e.Af.Event.fire("content-video:init", {
                guid: this.get("guid"),
                list: this._generateEventPayload([d])
            }))
        },
        _generateEventPayload: function(t, s) {
            var a, i, n, r = [],
                o = this;
            return e.Array.forEach(t, function(t) {
                a = v, "storylineUpsell" === (i = t.type) ? r = r.concat(o._generateEventPayload(t.list)) : "ad" !== i && "cm" !== i && "slot" !== i ? (n = t.cauuid || t.id, a = {
                    id: n,
                    eligible: t.isUpsell ? t.viewer_fetch : t.viewer_fetch || "video" === i
                }, t.isUpsell && (a.isUpsell = !0), i && (a.type = P[i]), t.link && (a.link = t.link), t.pkg_video_id && (a.pkg_video_id = t.pkg_video_id), t.videoCfg && (a.videoCfg = t.videoCfg)) : t.video_ad_assets ? (a = {
                    id: t.id,
                    eligible: !1,
                    type: P.video
                }, t.video_ad_assets && (a.videoAdAssets = t.video_ad_assets, a.videoAdBeacons = t.video_ad_beacons, a.videoAdImage = t.image && t.image.url, a.videoAdRules = t.video_ad_rules, a.link = t.link)) : t.tiles && ((a = {
                    id: t.id,
                    eligible: !1,
                    type: P.ad
                }).tiles = t.tiles), "false" === t.is_eligible && (a.is_eligible_false = !0), a && r.push(a), t.storyline && e.Lang.isArray(t.storyline) && (r = r.concat(o._generateEventPayload(t.storyline)))
            }), r
        },
        notifyNewItemsRead: function() {
            e.Af.Transport.read("stream-atomic.notify", {}, this.syncContext, function(e) {})
        },
        sportsreelRead: function(t, s) {
            e.Af.Transport.read("stream-atomic.sportsreel", Object.assign({}, t), this.syncContext, function(e, t) {
                return e ? s && s(e, null) : t && t.playlist && t.playlist.mediaItems && t.playlist.mediaItems.length ? s && s(null, t) : s && s(new Error("empty playlist"))
            })
        },
        fetchPopularContent: function(t) {
            var s, a = this,
                n = a.get(i),
                r = a.getDataModel(d);
            r && r.loadPopularItems(e.merge({
                ads: n.ads,
                ui: n.ui
            }, {
                count: n.js.related_count
            }), function(i, r) {
                n.ui.viewer && r.length && (s = a._generateEventPayload(r), e.Af.Event.fire("content:init", {
                    guid: a.get("guid"),
                    list: s,
                    fullList: s
                })), t && t(null, r)
            })
        },
        fetchRelatedContent: function(t, s) {
            var a, n, r, l = this.get(i),
                g = this.getDataModel(d),
                u = this.getDataModel(I).get(c),
                m = {},
                f = [],
                p = !1,
                h = this;
            g && (a = this.getRenderedUUIDs(l), t.length > 0 && (r = "related-content-" + t[0]), g.loadRelatedItems(e.merge({
                ads: l.ads,
                ui: l.ui
            }, {
                uuids: t,
                count: l.js.related_count
            }, a), function(t) {
                t && e.Object.each(t, function(t, s) {
                    e.Array.some(u, function(a) {
                        if (p = !1, a.storyline && e.Array.some(a.storyline, function(e) {
                                if (s === e.id) return p = y, y
                            }), (s === a.id || p) && t) return e.Array.forEach(t, function(e) {
                            var t = a.storyline ? a.storyline.length : 0;
                            e.cposy = a.i13n.cposy + t + "." + e.pos
                        }), a.relatedItems = t, a.ccode = h.get(o), m[s] = a, f = f.concat(t), y
                    })
                }), l.ui.viewer && f.length && (n = h._generateEventPayload(f), e.Af.Event.fire("content:init", {
                    guid: r,
                    list: n,
                    fullList: n
                })), s(m)
            }))
        },
        getRenderedUUIDs: function(t) {
            var s = this.getDataModel(I),
                a = [],
                i = [],
                n = function(e) {
                    if (e && e.type && ("ad" === e.type || "cm" === e.type)) return e.id || null
                },
                r = function(s) {
                    var o = function(e) {
                            if (e && e.type && "ad" !== e.type && "cm" !== e.type) return e.cauuid || e.id || null
                        }(s),
                        l = n(s);
                    o && a.push(o), t.ads.related_dedupe_ads && l && i.push(l), s.storyline && e.Lang.isArray(s.storyline) && e.Array.each(s.storyline, r), s.relatedItems && e.Lang.isArray(s.relatedItems) && e.Array.each(s.relatedItems, r)
                };
            return e.Array.each(s.get(c), r), t.ads.related_dedupe_ads && e.Array.each(s.get(m), function(e) {
                var t = n(e);
                t && i.push(t)
            }), {
                dedupeUUIDs: a,
                dedupeADIDs: i
            }
        },
        fetchNextAdBatch: function(t, s) {
            var a, i, n = this,
                r = n.getDataModel(I),
                o = n.getDataModel("ads"),
                l = r.get(g) || [],
                d = r.get(m),
                c = r.get(u) || null,
                f = n.get(_).size,
                p = l.length < t.ads.batch_size;
            if (s && p)
                for (p = !1, a = Math.min(f, d.length), i = 0; i < a; i++)
                    if (("ad" === d[i].type || "cm" === d[i].type) && !d[i].link) {
                        p = !0;
                        break
                    }! n.adFetchInProgress && p && (t.adsToken = c, n.adFetchInProgress = !0, o.loadAds(t, function(t, s) {
                n.adFetchInProgress = !1, s && e.Lang.isArray(s.adItems) && (l = l.concat(s.adItems), s.adsToken && r.set(u, s.adsToken), r.set(g, l))
            }))
        },
        fetchPayoffContent: function(t, s) {
            var a, n = this.getDataModel("payoff"),
                r = this.getDataModel(I),
                o = r.get(c),
                l = t.prevPayoff,
                d = this.get(i);
            t.ui = {}, e.Array.each(["payoffLocalHeadliner", "payoffLocalArticleCount"], function(s) {
                var a = e.Object.getValue(d, ["ui", s]);
                a && (t.ui[s] = a)
            }), n && t && t.type && n.loadPayoff(t, function(t) {
                e.Array.each(o, function(e, t) {
                    e && e.payoffId === l && (a = t)
                }), a && o.splice(a, 1, t), r.set(c, o, A), s(t)
            })
        },
        reload: function(a) {
            var r = this,
                l = r.getDataModel(I),
                d = this.get(i);
            l.load(this.getReadParams(), function(i, g) {
                i || !g ? (l.set(c, []), l.set(m, []), r.set(s, 0), r.set(n, 0), r.set(o, "")) : (r.set(s, 1), r.set(n, g.stream_items ? g.stream_items.length : 0), r.set(o, g.ccode || "")), !i && g && g.stream_items && g.stream_items.length || e.Af.Beacon.error(t, {
                    category: d.category,
                    respErr: !!i
                }, {
                    code: "strmin"
                }), a(i, g), !i && g && d.js.content_events && r._fireContentEvents()
            })
        },
        _processAdsResponseForFallback: function() {
            var t, a, r, o, l, d, g = this,
                u = YUI && YUI.Stream ? YUI.Stream.adsFallback : "",
                f = YUI && YUI.Stream ? YUI.Stream.adsConfig : "",
                p = g.get(i),
                h = g.getDataModel(I),
                _ = h.get(c),
                y = h.get(m),
                v = p.ads.start_index,
                k = p.ads.frequency + 1,
                b = g.get(n),
                P = [],
                M = {},
                w = !1,
                E = p.ads.resize_to_orig_image,
                C = p.ads && p.ads.fallback_template;
            u && e.Lang.isArray(u) && (delete YUI.Stream.adsFallback, f && f.start_index && f.frequency && (v = f.start_index, k = f.frequency, w = f.clusters, delete YUI.Stream.adsConfig), e.Array.each(u, function(i) {
                var n, c;
                d = (i.index - 1) * k + v;
                try {
                    t = e.JSON.parse(i.tag)
                } catch (u) {
                    return
                }
                if (a = !!t.hqImage, M = {
                        type: "ad",
                        streamPos: d,
                        id: i.creativeId,
                        title: t.headline,
                        link: t.clickUrl,
                        publisher: t.source,
                        beacon: i.beacon.replace("$(AD_POSN)", d),
                        full_template: C || (a ? "featured_ad" : "ad"),
                        image: {
                            url: a ? t.hqImage : t.image,
                            height: a ? t.hqImageHeight : t.imageHeight,
                            width: a ? t.hqImageWidth : t.imageWidth
                        },
                        summary: p.ui.summary ? t.summary : "",
                        i13n: {
                            ad: 1,
                            elmt: "ad",
                            ct: 1,
                            pkgt: "sponsored_img",
                            ccode: "mdsfb",
                            bpos: g.get(s),
                            cat: p.category || "default",
                            g: i.creativeId
                        }
                    }, E && t.secOrigImg && (M.image = {
                        url: t.secOrigImg,
                        height: t.origImgHeight,
                        width: t.origImgWidth
                    }), t.imprTrackingUrls && (M.imprTrackingUrls = t.imprTrackingUrls), w && t.assets && t.assets.length > 2) {
                    for (M.full_template = "ad_clusters", M.images = {
                            "default": {
                                height: 190,
                                width: 190,
                                url: t.origImg
                            }
                        }, M.i13n.pkgt = "sponsored_cluster", M.cluster = [], l = null, i.actionUrls && i.actionUrls.IMPR_INTERNAL && (M.imprTrackingUrls = M.imprTrackingUrls && [].concat(M.imprTrackingUrls) || [], l = i.actionUrls.IMPR_INTERNAL[0]), n = 0; n < t.assets.length; n++) {
                        if (r = null, o = escape("pp=m,pi=" + d + ",st=c,si=" + t.assets[n].assetIndex + ",sa=" + t.assets[n].assetId), t.assets[n].mediaInfo)
                            for (c = 0; c < t.assets[n].mediaInfo.length; c++) "secLargeImage" === t.assets[n].mediaInfo[c].contentLabel && (r = t.assets[n].mediaInfo[c]);
                        r && (M.cluster[n] = {
                            link: t.assets[n].clickUrl.replace(/\$\(AD_POSN\)/, o),
                            publisher: t.assets[n].source || t.source,
                            title: t.assets[n].headline,
                            image: {
                                height: 70,
                                width: 70,
                                url: r.url
                            }
                        }, 0 === n && (M.link = M.cluster[n].link, M.title = M.cluster[n].title || M.title, M.summary = t.assets[n].summary || M.summary), n <= 2 && M.imprTrackingUrls.push(l.replace(/\$\(AD_POSN\)/, o)))
                    }
                    M.cluster = M.cluster.slice(1)
                } else !w && t.assets && t.assets.length > 2 && (M.i13n.pkgt = "sponsored_suppress");
                t.ad_feedback_beacon && (M.ad_feedback_beacon = t.ad_feedback_beacon), P.push(M)
            }), g.set("adsData", P, A), e.Array.each(P, function(e) {
                e.streamPos < _.length ? (_.splice(e.streamPos, 0, e), b++) : y.splice(e.streamPos - _.length, 0, e)
            }), g.set(n, b, A), h.set(c, _, A), h.set(m, y, A))
        }
    }, {
        ATTRS: {
            batch: {
                value: 1
            },
            batch_new: {
                value: 1
            },
            config: {
                setter: function(t) {
                    return t && t.ui && t.ui.item_template !== this.get(i + ".ui.item_template") && (t.category && "YPROP:TOPSTORIES" !== t.category || e.Af.Cookie.set(b, "tmpl", t.ui.item_template)), t && t.js && t.js.restore_filter && t.category !== this.get(i + ".category") && e.Af.Cookie.set(b, "filter", t.category, 1800), t
                }
            },
            fetched: {
                value: 0
            },
            fetched_new: {
                value: 0
            },
            settings: {
                setter: function(e) {
                    return e.size = parseInt(e.size, 10), e
                }
            }
        }
    })
}, "@VERSION@", {
    requires: ["mjata-model-base", "af-cookie", "af-event", "af-utils", "af-applet-model", "af-beacon", "af-poll", "td-applet-stream-model-v2", "td-applet-stream-fptoday-model-v2", "td-applet-stream-items-model-v2", "td-applet-stream-fptoday-items-model-v2"]
});
YUI.add("td-applet-stream-atomic-ads-model-v2", function(e) {
    "use strict";
    e.namespace("TD.Applet").StreamAtomicAdsModel2 = e.Base.create("TDAppletStreamAtomicAdsModel2", e.Model, [e.Af.Sync], {
        resource: "stream-atomic.ads",
        readonly: !0,
        postForRead: !0,
        loadAds: function(e, t) {
            this.load(e, function(e, a) {
                !e && a && t(e, a)
            })
        }
    }, {
        ATTRS: {}
    })
}, "@VERSION@", {
    requires: ["model", "af-sync"]
});
YUI.add("td-applet-stream-atomic-templates-breaking_news", function(t, n) {
    dust.cache = dust.cache || {}, dust.cache[n] = function(t) {
        function n(t, n) {
            return t.s(n.get(["breakingNewsBarData"], !1), n, {
                block: e
            }, {}).w("\n")
        }

        function e(t, n) {
            return t.w('\n<div class="Px(15px) Py(11px) Mb(22px) C(#fff) breakingnews').h("eq", n, {
                "else": o,
                block: l
            }, {
                key: a,
                value: "high"
            }).w(" ").x(n.get(["userFollowing"], !1), n, {
                block: s
            }, {}).w(' js-stream-followable Bdrs(3px) Pos(r)" data-followid="').f(n.get(["followId"], !1), n, "h").w('" data-followname="').f(n.get(["followName"], !1), n, "h").w('">\n    <div>\n        <span class="D(tbc) Fz(15px) Fw(b) Lh(20px) Pend(8px) Whs(nw)">').f(n.get(["prefix"], !1), n, "h", ["s"]).w(':</span>\n        <div class="D(tbc) Lh(20px)">\n            ').x(n.get(["link"], !1), n, {
                "else": i,
                block: d
            }, {}).w("\n").x(n.get(["followable"], !1), n, {
                block: f
            }, {}).w("\n</div>\n    </div>\n</div>\n")
        }

        function o(t, n) {
            return t.w(" gradient-1")
        }

        function l(t, n) {
            return t.w(" gradient-2")
        }

        function a(t, n) {
            return t.f(n.get(["severity"], !1), n, "h")
        }

        function s(t, n) {
            return t.w(" followed")
        }

        function i(t, n) {
            return t.w('\n<span class="js-stream-follow-name Fz(13px) C(#fff)">').f(n.get(["title"], !1), n, "h").w("</span>\n            ")
        }

        function d(t, n) {
            return t.w('\n<a class="js-stream-follow-name Fz(13px) C(#fff) ').x(n.get(["viewer_eligible"], !1), n, {
                block: c
            }, {}).w('" href="').f(n.get(["link"], !1), n, "h").w('" data-uuid="').f(n.get(["article_uuid"], !1), n, "h").w('" ').h("rapid_data_attr", n, {}, {
                subsec: "brknws",
                cpos: "1",
                pos: "1",
                itc: "0",
                g: r,
                elm: "rhdln",
                aid: u,
                "data-action-outcome": "content"
            }).w(">").f(n.get(["title"], !1), n, "h").w("</a>\n            ")
        }

        function c(t, n) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function r(t, n) {
            return t.f(n.get(["article_uuid"], !1), n, "h")
        }

        function u(t, n) {
            return t.f(n.get(["followId"], !1), n, "h")
        }

        function f(t, n) {
            return t.w('\n<span class="btnWrap">\n                    <button title="unfollow" class="Fw(b) followed_D(i) D(n) Va(b) P(0) Bd(0) unfollowBtn C(#fff) O(n) ua-ie7_W(100%)" ').h("rapid_data_attr", n, {}, {
                subsec: "follow",
                cpos: "1",
                pos: "1",
                elm: "btn",
                elmt: "unfollow",
                itc: "1",
                g: w,
                aid: p
            }).w(' data-action-outcome="unfollow">\n                    <i class="unfollowIcon unfollowBtn:h_D(b) D(n) Fl(start) Fz(12px) Fw(b) W(19px) H(19px) Lh(20px) Ta(c) Icon-Fp2 IconStarOutline C(#fff)"></i><i class="followingIcon unfollowBtn:h_D(n) Icon-Fp2 Fl(start) IconStarFilled Fz(12px) Fw(b) W(19px) H(19px) Lh(20px) Ta(c) C(#fff)"></i>\n                    <div class="unfollowTxt Mstart(20px) Fz(13px) Tt(c) C(#fff) H(20px) Lh(20px) W(56px)">\n                        <div class="Fl(start) Lh(20px)">').x(n.get(["userFollowing"], !1), n, {
                "else": _,
                block: h
            }, {}).w('</div>\n                        </div>\n                    </button>\n                    <button title="follow" class="Va(b) P(0) Bd(0) Fw(b) followed_D(n) D(i) followBtn C(#fff) O(n) ua-ie7_W(100%)" {').h("rapid_data_attr", n, {}, {
                subsec: "follow",
                elm: "btn",
                elmt: "follow",
                itc: "1",
                g: x,
                aid: b
            }).w(' data-action-outcome="follow">\n                        <i class="followBtn:h_D(n) followed_D(n) Icon-Fp2 Fl(start) IconStarOutline Fz(13px) W(19px) H(19px) Lh(20px) Ta(c)"></i><i class="followBtn:h_D(b) followed_D(n) D(n) Icon-Fp2 Fl(start) IconStarFilled Fz(13px) W(19px) H(19px) Lh(20px) Ta(c) followBtn:h_C(#fff)"></i><div class="followed_D(n) Mstart(20px) Fz(13px) Tt(c) H(20px) W(54px) Trsdu(.1s) Trsp($trsp_width)"><div class="Fl(start) Lh(20px)">').h("i18n_string", n, {}, {
                _key: "FOLLOW"
            }).w("</div></div>\n                    </button>\n                </span>\n            ")
        }

        function w(t, n) {
            return t.f(n.get(["article_uuid"], !1), n, "h")
        }

        function p(t, n) {
            return t.f(n.get(["followId"], !1), n, "h")
        }

        function _(t, n) {
            return t.h("i18n_string", n, {}, {
                _key: "UNFOLLOW"
            })
        }

        function h(t, n) {
            return t.h("i18n_string", n, {}, {
                _key: "FOLLOWING_STORY"
            })
        }

        function x(t, n) {
            return t.f(n.get(["article_uuid"], !1), n, "h")
        }

        function b(t, n) {
            return t.f(n.get(["followId"], !1), n, "h")
        }
        return dust.register("td-applet-stream-atomic-templates-breaking_news", n), n.__dustBody = !0, e.__dustBody = !0, o.__dustBody = !0, l.__dustBody = !0, a.__dustBody = !0, s.__dustBody = !0, i.__dustBody = !0, d.__dustBody = !0, c.__dustBody = !0, r.__dustBody = !0, u.__dustBody = !0, f.__dustBody = !0, w.__dustBody = !0, p.__dustBody = !0, _.__dustBody = !0, h.__dustBody = !0, x.__dustBody = !0, b.__dustBody = !0, n
    }(), dust.cache["td-applet-stream-atomic:breaking_news.dust"] = dust.cache["td-applet-stream-atomic:breaking_news"] = dust.cache[n], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/breaking_news"] = function(t, e) {
        t = t || {}, dust.render(n, t, e)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-debug", function(e, t) {
    dust.cache = dust.cache || {}, dust.cache[t] = function(e) {
        function t(e, t) {
            return e.w('<div style="border: 1px solid orange; overflow-x: scroll; margin-bottom: 1px;">\n    <style>\n        .strm-item-json {\n            display: none;\n        }\n        #strm-item-').f(t.get(["index"], !1), t, "h").w(':checked ~ .strm-item-json {\n            display: block;\n        };\n    </style>\n    <input type="checkbox" id="strm-item-').f(t.get(["index"], !1), t, "h").w('" style="opacity:0" />\n    <label for="strm-item-').f(t.get(["index"], !1), t, "h").w('" style="margin-left: -1em; cursor: pointer;">view processed data</label>\n    <pre class="strm-item-json" style="word-wrap:initial">\n    ').f(t.getPath(!1, ["streamDebug", "processedData"]), t, "h").w('\n</pre>\n</div>\n<div style="border: 1px solid green; overflow-x: scroll; margin-bottom: 1px;">\n    <style>\n        .content-item-json {\n            display: none;\n        }\n        #content-item-').f(t.get(["index"], !1), t, "h").w(':checked ~ .content-item-json {\n            display: block;\n        };\n    </style>\n    <input type="checkbox" id="content-item-').f(t.get(["index"], !1), t, "h").w('" style="opacity:0" />\n    <label for="content-item-').f(t.get(["index"], !1), t, "h").w('" style="margin-left: -1em; cursor: pointer;">view yql data</label>\n    <pre class="content-item-json" style="word-wrap:initial">\n    ').f(t.getPath(!1, ["streamDebug", "yqlData"]), t, "h").w("\n</pre>\n</div>\n")
        }
        return dust.register("td-applet-stream-atomic-templates-debug", t), t.__dustBody = !0, t
    }(), dust.cache["td-applet-stream-atomic:debug.dust"] = dust.cache["td-applet-stream-atomic:debug"] = dust.cache[t], e.Template._cache = e.Template._cache || {}, e.Template._cache["td-applet-stream-atomic/templates/debug"] = function(e, n) {
        e = e || {}, dust.render(t, e, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-drawer_action", function(t, n) {
    dust.cache = dust.cache || {}, dust.cache[n] = function(t) {
        function n(t, n) {
            return t.x(n.getPath(!1, ["config", "ui", "stream_actions_tumblr"]), n, {
                "else": e,
                block: i
            }, {}).w("\n")
        }

        function e(t, n) {
            return t.w('\n<a class="js-stream-drawer-v js-stream-side-buttons Pos-a M-10 T-0 End-0 rapid-noclick-resp" role="button" href="javascript:void(0)" ').h("rapid_data_attr", n, {}, {
                "rapid-base": n.get(["i13n"], !1),
                r: o,
                ccode: r,
                t4: "ctrl",
                elm: "btn",
                elmt: "op",
                itc: "1",
                rspns: "op"
            }).w('><i class="Icon-Fp2 IconCoreArrowDown Fz-3xs Pos-a End-0"></i><b class="Hidden">').h("i18n_string", n, {}, {
                _key: "ACTION_OPEN"
            }).w("</b></a>\n")
        }

        function o(t, n) {
            return t.f(n.get(["reason"], !1), n, "h")
        }

        function r(t, n) {
            return t.f(n.get(["ccode"], !1), n, "h")
        }

        function i(t, n) {
            return t.w('\n<ul class="js-stream-side-buttons js-stream-actions js-stream-tumblr-actions').h("gt", n, {
                block: s
            }, {
                key: u,
                value: 0
            }).nx(n.getPath(!1, ["config", "ui", "dislike"]), n, {
                block: c
            }, {}).w('">\n    ').x(n.get(["commentCount"], !1), n, {
                block: a
            }, {}).w("\n").x(n.getPath(!1, ["config", "ui", "userintent_enabled"]), n, {
                block: V
            }, {}).w("\n").x(n.getPath(!1, ["config", "ui", "like"]), n, {
                block: ot
            }, {}).w("\n").x(n.getPath(!1, ["config", "ui", "stream_actions_reblog"]), n, {
                block: At
            }, {}).w("\n").x(n.getPath(!1, ["config", "ui", "stream_actions_share_panel"]), n, {
                block: Zt
            }, {}).w("\n").x(n.getPath(!1, ["config", "ui", "dislike"]), n, {
                block: Xt
            }, {}).w("\n</ul>\n")
        }

        function s(t, n) {
            return t.w(" has-comments")
        }

        function u(t, n) {
            return t.f(n.get(["commentCount"], !1), n, "h")
        }

        function c(t, n) {
            return t.w(" js-stream-dislike-disabled")
        }

        function a(t, n) {
            return t.w('\n<li class="ActionComments D(ib) O(n) Mstart(-1px) Pos(r) ').x(n.get(["template"], !1), n, {
                block: d
            }, {}).w('" data-cmntnum="').f(n.get(["commentCount"], !1), n, "h").w('"><span class="js-stream-comment-counter D(b) Fz(11px) Ta(c) Fw(b) ').x(n.get(["template"], !1), n, {
                block: _
            }, {}).x(n.getPath(!1, ["config", "ui", "animate_comments"]), n, {
                block: g
            }, {}).w('">').h("gt", n, {
                block: b
            }, {
                key: h,
                value: 0
            }).w('</span><span class="js-stream-comment-counter-update D(b) Fz(11px) Ta(c) Fw(b) ').x(n.get(["template"], !1), n, {
                block: m
            }, {}).w('"></span><a href="').x(n.getPath(!1, ["config", "ui", "comments_inline"]), n, {
                "else": k,
                block: T
            }, {}).w('" class="Pos(r) js-stream-comments-button').nx(n.getPath(!1, ["config", "ui", "comments_inline"]), n, {
                "else": v,
                block: S
            }, {}).w(" Td(n) O(n) ").x(n.get(["template"], !1), n, {
                block: F
            }, {}).w(' Px(14px) Pb(5px) Pt(25px)" role="button" tabindex="0" ').x(n.getPath(!1, ["config", "ui", "comments_inline"]), n, {
                "else": D,
                block: q
            }, {}).w('><b aria-live="polite" class="js-stream-comment-label ').x(n.getPath(!1, ["config", "ui", "show_tooltips"]), n, {
                "else": N,
                block: R
            }, {}).w('">').h("gt", n, {
                "else": K,
                block: W
            }, {
                key: U,
                value: 0
            }).w('</b><i class="Icon-Fp2 IconComments Fz(21px) ').x(n.get(["template"], !1), n, {
                block: G
            }, {}).w('"></i></a>\n    </li>\n    ')
        }

        function d(t, n) {
            return t.h("eq", n, {
                block: l
            }, {
                key: n.get(["template"], !1),
                value: "filmstrip"
            })
        }

        function l(t, n) {
            return t.w("C(white)")
        }

        function _(t, n) {
            return t.h("eq", n, {
                "else": f,
                block: p
            }, {
                key: n.get(["template"], !1),
                value: "filmstrip"
            })
        }

        function f(t, n) {
            return t.w("C(#96989f)")
        }

        function p(t, n) {
            return t.w("Tsh($comment_shadow)")
        }

        function g(t, n) {
            return t.w(" js-stream-comment-hidden")
        }

        function b(t, n) {
            return t.f(n.get(["commentString"], !1), n, "h")
        }

        function h(t, n) {
            return t.f(n.get(["commentCount"], !1), n, "h")
        }

        function m(t, n) {
            return t.h("eq", n, {
                "else": w,
                block: y
            }, {
                key: n.get(["template"], !1),
                value: "filmstrip"
            })
        }

        function w(t, n) {
            return t.w("C(#96989f)")
        }

        function y(t, n) {
            return t.w("Tsh($comment_shadow)")
        }

        function k(t, n) {
            return t.x(n.get(["previewLink"], !1), n, {
                "else": B,
                block: x
            }, {}).s(n.get(["commentsLinkSupplement"], !1), n, {
                block: P
            }, {})
        }

        function B(t, n) {
            return t.f(n.get(["link"], !1), n, "h")
        }

        function x(t, n) {
            return t.f(n.get(["previewLink"], !1), n, "h")
        }

        function P(t, n) {
            return t.f(n.getPath(!0, []), n, "h")
        }

        function T(t, n) {
            return t.w("javascript:void(0)")
        }

        function v(t, n) {
            return t.h("gte", n, {
                "else": I,
                block: C
            }, {
                key: O,
                value: 2
            })
        }

        function I(t, n) {
            return t.x(n.get(["viewer_eligible"], !1), n, {
                block: j
            }, {})
        }

        function j(t, n) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function C(t, n) {
            return t.w("-drawer")
        }

        function O(t, n) {
            return t.f(n.get(["commentCount"], !1), n, "h")
        }

        function S(t, n) {
            return t.x(n.get(["viewer_eligible"], !1), n, {
                block: $
            }, {})
        }

        function $(t, n) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function F(t, n) {
            return t.h("eq", n, {
                "else": A,
                block: E
            }, {
                key: n.get(["template"], !1),
                value: "filmstrip"
            })
        }

        function A(t, n) {
            return t.w("C($c_icon)")
        }

        function E(t, n) {
            return t.w("C(white)")
        }

        function D(t, n) {
            return t.h("rapid_data_attr", n, {}, {
                "rapid-base": n.get(["i13n"], !1),
                r: L,
                ccode: M,
                t4: "ctrl",
                elm: "btn",
                slk: "cmmt",
                itc: "0"
            })
        }

        function L(t, n) {
            return t.f(n.get(["reason"], !1), n, "h")
        }

        function M(t, n) {
            return t.f(n.get(["ccode"], !1), n, "h")
        }

        function q(t, n) {
            return t.h("rapid_data_attr", n, {}, {
                "rapid-base": n.get(["i13n"], !1),
                r: z,
                ccode: H,
                t4: "ctrl",
                elm: "btn",
                slk: "cmmt",
                itc: "1"
            })
        }

        function z(t, n) {
            return t.f(n.get(["reason"], !1), n, "h")
        }

        function H(t, n) {
            return t.f(n.get(["ccode"], !1), n, "h")
        }

        function N(t, n) {
            return t.w("Hidden")
        }

        function R(t, n) {
            return t.w("ActionTooltip Pos(a) Whs(n) Bd($bdr) Bdc($bdr_darkgrey) Bdrs(3px) Bgc(#fff) Bxsh($menuShadow) Lh(14px) Py(7px) End(-25px) C($signin_blue) js-stream-comments-button>Start(50%) js-stream-comments-button:h>Start(a)")
        }

        function K(t, n) {
            return t.h("i18n_string", n, {}, {
                _key: "COMMENTS_ZERO"
            })
        }

        function W(t, n) {
            return t.h("i18n_string", n, {}, {
                _key: "REACTIONS"
            })
        }

        function U(t, n) {
            return t.f(n.get(["commentCount"], !1), n, "h")
        }

        function G(t, n) {
            return t.h("eq", n, {
                block: Z
            }, {
                key: n.get(["template"], !1),
                value: "filmstrip"
            })
        }

        function Z(t, n) {
            return t.w("Tsh($comment_shadow) ActionComments:h_C($signin_blue)")
        }

        function V(t, n) {
            return t.w("\n").x(n.get(["publisher_id"], !1), n, {
                block: Y
            }, {}).w("\n")
        }

        function Y(t, n) {
            return t.w("\n").x(n.get(["publisher"], !1), n, {
                block: J
            }, {}).w("\n")
        }

        function J(t, n) {
            return t.w('\n<li class="D(ib) O(n) Mstart(-1px) Pos(r) Mstart(14px) userintentmgmt-panel wafer-toggle"\n        data-publisher-id="').f(n.get(["publisher_id"], !1), n, "h").w('" data-item-uuid="').f(n.get(["id"], !1), n, "h").w('" data-wf-toggle-class="click:toggle:userintent-show"><a\n            class="wafer-fetch fetch-with-session-retry Pos(r) Td(n):h D(b) C($c_icon)"\n            data-wf-url="').f(n.getPath(!1, ["config", "ui", "userintent_xhr"]), n, "h").w("&config.crumb=").f(n.getPath(!1, ["config", "userIntentCrumb"]), n, "h").w("&config.view=overlay&config.publisher=").f(n.get(["publisher"], !1), n, "h", ["u", "s"]).w("&config.publisherIds=").f(n.get(["publisher_id"], !1), n, "h").w("&config.uuid=").f(n.get(["id"], !1), n, "h").w("&config.cpos=").f(n.getPath(!1, ["i13n", "cpos"]), n, "h").w('&ctrl=UserIntentPanel"\n            href="javascript:void(0)"\n            data-wf-trigger="eachClick"\n            data-wf-type="tdv1"\n            data-wf-session-retry-count="1"\n            data-wf-timeout="1000"\n            data-wf-boundary="userintentmgmt-panel"\n            data-wf-target=".userintent-panel"\n            data-wf-result-selector="[data-reactroot]"\n            aria-label="publisher preference"\n            aria-haspopup="true"\n            role="button"\n            ').h("rapid_data_attr", n, {}, {
                "rapid-base": n.get(["i13n"], !1),
                ccode: Q,
                t4: "ctrl",
                elm: "open-usr-int",
                elmt: "btn",
                itc: "1",
                slk: "pubpref"
            }).w('><i class="Icon-Fp2 IconNavMore Fz(21px) T(10px) Pos(r) D(b)"></i></a>\n        <div class="D(n) Mih(30px) userintent-panel userintent-show_D(b) Ov(h) Pos(a) Bgc(#fff) Px(8px) Py(12px) T(-15px) W(210px) End(30px) Bdrs(2px) Bxsh($userintent_shadow)"></div>\n    </li>\n    ').s(n.getPath(!1, ["config", "ui", "userintent_discover_index"]), n, {
                block: X
            }, {}).w("\n")
        }

        function Q(t, n) {
            return t.f(n.get(["ccode"], !1), n, "h")
        }

        function X(t, n) {
            return t.h("eq", n, {
                block: tt
            }, {
                key: nt,
                value: et
            })
        }

        function tt(t, n) {
            return t.w('<li class="D(n) userintent-show+D(n) userintent-tooltip Pos(r)"></li>')
        }

        function nt(t, n) {
            return t.f(n.get(["index"], !1), n, "h")
        }

        function et(t, n) {
            return t.f(n.getPath(!0, []), n, "h")
        }

        function ot(t, n) {
            return t.w('\n<li class="ActionLike D(ib) O(n) Mt(4px) Mstart(-1px) Lh(20px)">\n        ').x(n.getPath(!1, ["config", "signed_in"]), n, {
                "else": rt,
                block: wt
            }, {}).w("\n</li>\n    ")
        }

        function rt(t, n) {
            return t.w("\n").x(n.get(["payoffType"], !1), n, {
                "else": it,
                block: bt
            }, {}).w("\n")
        }

        function it(t, n) {
            return t.w('\n<a href="').x(n.getPath(!1, ["config", "ui", "stream_actions_likable"]), n, {
                "else": st,
                block: ut
            }, {}).w('" class="js-stream-like-button ').x(n.getPath(!1, ["config", "ui", "stream_actions_likable"]), n, {
                block: ct
            }, {}).w("rapidnofollow Td(n) O(n) ").x(n.get(["template"], !1), n, {
                block: at
            }, {}).w(' P(14px) js-stream-button-loggedout" role="button" tabindex="0" data-ylk="slk:like;t4:drwr;elm:btn;elmt:lgn-yh;" data-action-outcome="lgn"><b aria-live="polite" class="').x(n.getPath(!1, ["config", "ui", "show_tooltips"]), n, {
                "else": _t,
                block: ft
            }, {}).w('">').h("i18n_string", n, {}, {
                _key: "ACTION_SIGN_IN_TO_LIKE_TUMBLR",
                linkstart: "<span class='Td-u'>",
                linkend: "</span>"
            }).w('</b><i class="Icon-Fp2 IconTumblrHeartOutline Fz(21px) ').x(n.get(["template"], !1), n, {
                block: pt
            }, {}).w('"></i></a>\n        ')
        }

        function st(t, n) {
            return t.f(n.getPath(!1, ["config", "js", "login_url"]), n, "h")
        }

        function ut(t, n) {
            return t.w("javascript:void(0)")
        }

        function ct(t, n) {
            return t.w("rapid-noclick-resp ")
        }

        function at(t, n) {
            return t.h("eq", n, {
                "else": dt,
                block: lt
            }, {
                key: n.get(["template"], !1),
                value: "filmstrip"
            })
        }

        function dt(t, n) {
            return t.w("C($c_icon)")
        }

        function lt(t, n) {
            return t.w("C(white)")
        }

        function _t(t, n) {
            return t.w("Hidden")
        }

        function ft(t, n) {
            return t.w("ActionTooltip Pos(a) Whs(n) ActionTooltipSignin Bd($bdr) Bdc($bdr_darkgrey) Bdrs(3px) Bgc(#fff) Bxsh($menuShadow) End(-40px) rtl_End(58px) Py(5px) js-stream-like-button>Start(50%) js-stream-like-button:h>Start(a)")
        }

        function pt(t, n) {
            return t.h("eq", n, {
                block: gt
            }, {
                key: n.get(["template"], !1),
                value: "filmstrip"
            })
        }

        function gt(t, n) {
            return t.w("Tsh($comment_shadow)")
        }

        function bt(t, n) {
            return t.w('\n<a href="').f(n.getPath(!1, ["config", "js", "login_url"]), n, "h").w('" class="js-stream-like-button rapidnofollow Td(n) O(n) C($c_icon) js-stream-button-loggedout ').x(n.get(["liked"], !1), n, {
                block: ht
            }, {}).w('" role="button" tabindex="0" ').h("rapid_data_attr", n, {}, {
                "rapid-base": n.get(["i13n"], !1),
                r: mt,
                t4: "drwr",
                elm: "btn",
                elmt: "btn"
            }).w(' data-action-outcome="lgn"><b aria-live="polite" class="ActionTooltip Hidden">').h("i18n_string", n, {}, {
                _key: "LIKE"
            }).w('</b><i class="Icon-Fp2 IconTumblrHeart Fz(21px)"></i></a>\n        ')
        }

        function ht(t, n) {
            return t.w("ActionSelected")
        }

        function mt(t, n) {
            return t.f(n.get(["reason"], !1), n, "h")
        }

        function wt(t, n) {
            return t.w('\n<a class="js-stream-like-button rapid-noclick-resp rapidnofollow Td(n) O(n) ').x(n.get(["template"], !1), n, {
                block: yt
            }, {}).w(" ").x(n.get(["liked"], !1), n, {
                block: xt
            }, {}).w(' P(14px)" role="button" tabindex="0" ').h("rapid_data_attr", n, {}, {
                "rapid-base": n.get(["i13n"], !1),
                r: Pt,
                ccode: Tt,
                t4: "ctrl",
                elm: "btn",
                elmt: "op",
                itc: "1",
                rspns: "op",
                slk: "like"
            }).w('><b aria-live="polite" class="').x(n.getPath(!1, ["config", "ui", "show_tooltips"]), n, {
                "else": vt,
                block: It
            }, {}).w('">').x(n.get(["liked"], !1), n, {
                "else": jt,
                block: Ct
            }, {}).w('</b><i class="Icon-Fp2 ').x(n.get(["liked"], !1), n, {
                "else": Ot,
                block: St
            }, {}).w(" Fz(21px) ").x(n.get(["template"], !1), n, {
                block: $t
            }, {}).w('"></i></a>\n        ')
        }

        function yt(t, n) {
            return t.h("eq", n, {
                "else": kt,
                block: Bt
            }, {
                key: n.get(["template"], !1),
                value: "filmstrip"
            })
        }

        function kt(t, n) {
            return t.w("C($c_icon)")
        }

        function Bt(t, n) {
            return t.w("C(white)")
        }

        function xt(t, n) {
            return t.w("ActionSelected")
        }

        function Pt(t, n) {
            return t.f(n.get(["reason"], !1), n, "h")
        }

        function Tt(t, n) {
            return t.f(n.get(["ccode"], !1), n, "h")
        }

        function vt(t, n) {
            return t.w("Hidden")
        }

        function It(t, n) {
            return t.w("ActionTooltip Pos(a) Whs(n) Bd($bdr) Bdc($bdr_darkgrey) Bdrs(3px) Bgc(#fff) Bxsh($menuShadow) Lh(14px) End(-40px) rtl_End(58px) Py(7px) js-stream-like-button>Start(50%) js-stream-like-button:h>Start(a)")
        }

        function jt(t, n) {
            return t.h("i18n_string", n, {}, {
                _key: "LIKE_THIS_TOPIC"
            })
        }

        function Ct(t, n) {
            return t.h("i18n_string", n, {}, {
                _key: "UNDO"
            })
        }

        function Ot(t, n) {
            return t.w("IconTumblrHeartOutline")
        }

        function St(t, n) {
            return t.w("IconTumblrHeart")
        }

        function $t(t, n) {
            return t.h("eq", n, {
                block: Ft
            }, {
                key: n.get(["template"], !1),
                value: "filmstrip"
            })
        }

        function Ft(t, n) {
            return t.w("Tsh($comment_shadow)")
        }

        function At(t, n) {
            return t.w('\n<li class="ActionReblog D(ib) O(n) Mt(1px) Lh(20px)"').x(n.getPath(!1, ["config", "ui", "viewer_reblog"]), n, {
                block: Et
            }, {}).w('>\n        <a target="_blank" class="js-stream-reblog-button').x(n.getPath(!1, ["config", "ui", "viewer_reblog"]), n, {
                block: Lt
            }, {}).w(" Td(n) O(n) ").x(n.get(["template"], !1), n, {
                block: qt
            }, {}).w(' P(14px)" role="button" tabindex="0" ').h("rapid_data_attr", n, {}, {
                "rapid-base": n.get(["i13n"], !1),
                r: Nt,
                ccode: Rt,
                t4: "ctrl",
                elm: "btn",
                elmt: "sh-tu-reblog",
                itc: "0"
            }).w('><b aria-live="polite" class="').x(n.getPath(!1, ["config", "ui", "show_tooltips"]), n, {
                "else": Kt,
                block: Wt
            }, {}).w('">').h("i18n_string", n, {}, {
                _key: "REBLOG"
            }).w('</b><i class="Icon-Fp2 IconTumblrReblog Fz(21px) ').x(n.get(["template"], !1), n, {
                block: Ut
            }, {}).w('"></i></a>\n    </li>\n    ')
        }

        function Et(t, n) {
            return t.x(n.get(["viewer_eligible"], !1), n, {
                block: Dt
            }, {})
        }

        function Dt(t, n) {
            return t.w(' data-uuid="reblog-').f(n.get(["id"], !1), n, "h").w('"')
        }

        function Lt(t, n) {
            return t.x(n.get(["viewer_eligible"], !1), n, {
                block: Mt
            }, {})
        }

        function Mt(t, n) {
            return t.w(" js-content-viewer rapidnofollow")
        }

        function qt(t, n) {
            return t.h("eq", n, {
                "else": zt,
                block: Ht
            }, {
                key: n.get(["template"], !1),
                value: "filmstrip"
            })
        }

        function zt(t, n) {
            return t.w("C($c_icon)")
        }

        function Ht(t, n) {
            return t.w("C(white)")
        }

        function Nt(t, n) {
            return t.f(n.get(["reason"], !1), n, "h")
        }

        function Rt(t, n) {
            return t.f(n.get(["ccode"], !1), n, "h")
        }

        function Kt(t, n) {
            return t.w("Hidden")
        }

        function Wt(t, n) {
            return t.w("ActionTooltip Pos(a) Whs(n) Bd($bdr) Bdc($bdr_darkgrey) Bdrs(3px) Bgc(#fff) Bxsh($menuShadow) End(-40px) Lh(14px) Py(7px) js-stream-reblog-button>Start(50%) js-stream-reblog-button:h>Start(a)")
        }

        function Ut(t, n) {
            return t.h("eq", n, {
                block: Gt
            }, {
                key: n.get(["template"], !1),
                value: "filmstrip"
            })
        }

        function Gt(t, n) {
            return t.w("Tsh($comment_shadow)")
        }

        function Zt(t, n) {
            return t.w('\n<li class="D(ib) O(n) stream-share Cur(p) Mstart(1px) Lh(20px) Pos(r) ').nx(n.getPath(!1, ["config", "ui", "stream_actions_reblog"]), n, {
                block: Vt
            }, {}).w('" tabindex="0">\n        <i class="Icon-Fp2 IconStreamShare Fz(21px) Px(14px) ').x(n.get(["template"], !1), n, {
                block: Yt
            }, {}).w(' js-stream-share-icon"></i>\n        <div class="js-stream-share-panel End(15px) T(0) Pos(a) Ta(start) H(0) W(169px) Z(11) Op(0) Ov(h) stream-share:h_Op(1) stream-share:h_H(a)"></div>\n    </li>\n    ')
        }

        function Vt(t, n) {
            return t.w("Mt(2px)")
        }

        function Yt(t, n) {
            return t.h("eq", n, {
                "else": Jt,
                block: Qt
            }, {
                key: n.get(["template"], !1),
                value: "filmstrip"
            })
        }

        function Jt(t, n) {
            return t.w("C($c_icon)")
        }

        function Qt(t, n) {
            return t.w("C(white) Tsh($comment_shadow)")
        }

        function Xt(t, n) {
            return t.w('\n<li class="ActionDislike D-ib">\n        ').x(n.getPath(!1, ["config", "signed_in"]), n, {
                "else": tn,
                block: on
            }, {}).w("\n</li>\n    ")
        }

        function tn(t, n) {
            return t.w("\n").x(n.get(["payoffType"], !1), n, {
                "else": nn,
                block: en
            }, {}).w("\n")
        }

        function nn(t, n) {
            return t.w('\n<a href="').f(n.getPath(!1, ["config", "js", "login_url"]), n, "h").w('" class="js-stream-dislike-button rapid-noclick-resp Td-n Pt-20 Pend-10 Pstart-6 js-stream-button-loggedout" role="button" tabindex="0" data-ylk="t4:drwr;elm:btn;elmt:lgn-yh;" data-action-outcome="lgn"><b aria-live="polite" class="ActionTooltip Td-n ActionTooltipSignin">').h("i18n_string", n, {}, {
                _key: "ACTION_SIGN_IN_TO_DISLIKE_TUMBLR",
                linkstart: "<span class='Td-u'>",
                linkend: "</span>"
            }).w('</b><i class="Icon-Fp2 IconActionCross Fz-xs"></i></a>\n        ')
        }

        function en(t, n) {
            return t.w('\n<a href="').f(n.getPath(!1, ["config", "js", "login_url"]), n, "h").w('" class="js-stream-dislike-button rapid-noclick-resp Td-n Pt-20 Pend-10 Pstart-6 js-stream-button-loggedout" role="button" tabindex="0" data-ylk="t4:drwr;elm:btn;elmt:lgn-yh;" data-action-outcome="lgn"><b aria-live="polite" class="ActionTooltip Td-n">').h("i18n_string", n, {}, {
                _key: "DISLIKE"
            }).w('</b><i class="Icon-Fp2 IconActionCross Fz-xs"></i></a>\n        ')
        }

        function on(t, n) {
            return t.w('\n<a href="javascript:void(0)" class="js-stream-dislike-button rapid-noclick-resp Td-n Pt-20 Pend-10 Pstart-6" role="button" tabindex="0" ').h("rapid_data_attr", n, {}, {
                "rapid-base": n.get(["i13n"], !1),
                r: rn,
                ccode: sn,
                t4: "ctrl",
                elm: "btn",
                elmt: "op",
                itc: "1",
                rspns: "op"
            }).w('><b aria-live="polite" class="ActionTooltip Td-n">').h("i18n_string", n, {}, {
                _key: "DISLIKE"
            }).w('</b><i class="Icon-Fp2 IconActionCross Fz-xs"></i></a>\n        ')
        }

        function rn(t, n) {
            return t.f(n.get(["reason"], !1), n, "h")
        }

        function sn(t, n) {
            return t.f(n.get(["ccode"], !1), n, "h")
        }
        return dust.register("td-applet-stream-atomic-templates-drawer_action", n), n.__dustBody = !0, e.__dustBody = !0, o.__dustBody = !0, r.__dustBody = !0, i.__dustBody = !0, s.__dustBody = !0, u.__dustBody = !0, c.__dustBody = !0, a.__dustBody = !0, d.__dustBody = !0, l.__dustBody = !0, _.__dustBody = !0, f.__dustBody = !0, p.__dustBody = !0, g.__dustBody = !0, b.__dustBody = !0, h.__dustBody = !0, m.__dustBody = !0, w.__dustBody = !0, y.__dustBody = !0, k.__dustBody = !0, B.__dustBody = !0, x.__dustBody = !0, P.__dustBody = !0, T.__dustBody = !0, v.__dustBody = !0, I.__dustBody = !0, j.__dustBody = !0, C.__dustBody = !0, O.__dustBody = !0, S.__dustBody = !0, $.__dustBody = !0, F.__dustBody = !0, A.__dustBody = !0, E.__dustBody = !0, D.__dustBody = !0, L.__dustBody = !0, M.__dustBody = !0, q.__dustBody = !0, z.__dustBody = !0, H.__dustBody = !0, N.__dustBody = !0, R.__dustBody = !0, K.__dustBody = !0, W.__dustBody = !0, U.__dustBody = !0, G.__dustBody = !0, Z.__dustBody = !0, V.__dustBody = !0, Y.__dustBody = !0, J.__dustBody = !0, Q.__dustBody = !0, X.__dustBody = !0, tt.__dustBody = !0, nt.__dustBody = !0, et.__dustBody = !0, ot.__dustBody = !0, rt.__dustBody = !0, it.__dustBody = !0, st.__dustBody = !0, ut.__dustBody = !0, ct.__dustBody = !0, at.__dustBody = !0, dt.__dustBody = !0, lt.__dustBody = !0, _t.__dustBody = !0, ft.__dustBody = !0, pt.__dustBody = !0, gt.__dustBody = !0, bt.__dustBody = !0, ht.__dustBody = !0,
            mt.__dustBody = !0, wt.__dustBody = !0, yt.__dustBody = !0, kt.__dustBody = !0, Bt.__dustBody = !0, xt.__dustBody = !0, Pt.__dustBody = !0, Tt.__dustBody = !0, vt.__dustBody = !0, It.__dustBody = !0, jt.__dustBody = !0, Ct.__dustBody = !0, Ot.__dustBody = !0, St.__dustBody = !0, $t.__dustBody = !0, Ft.__dustBody = !0, At.__dustBody = !0, Et.__dustBody = !0, Dt.__dustBody = !0, Lt.__dustBody = !0, Mt.__dustBody = !0, qt.__dustBody = !0, zt.__dustBody = !0, Ht.__dustBody = !0, Nt.__dustBody = !0, Rt.__dustBody = !0, Kt.__dustBody = !0, Wt.__dustBody = !0, Ut.__dustBody = !0, Gt.__dustBody = !0, Zt.__dustBody = !0, Vt.__dustBody = !0, Yt.__dustBody = !0, Jt.__dustBody = !0, Qt.__dustBody = !0, Xt.__dustBody = !0, tn.__dustBody = !0, nn.__dustBody = !0, en.__dustBody = !0, on.__dustBody = !0, rn.__dustBody = !0, sn.__dustBody = !0, n
    }(), dust.cache["td-applet-stream-atomic:drawer_action.dust"] = dust.cache["td-applet-stream-atomic:drawer_action"] = dust.cache[n], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/drawer_action"] = function(t, e) {
        t = t || {}, dust.render(n, t, e)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-drawer_desktop", function(t, a) {
    dust.cache = dust.cache || {}, dust.cache[a] = function(t) {
        function a(t, a) {
            return t.w('<div class="js-stream-drawer Mt(18px) Bfc Fz(13px) Pos(r) stream-collapse').nx(a.get(["comments"], !1), a, {
                block: s
            }, {}).w('">\n    ').x(a.get(["is_ad"], !1), a, {
                "else": e,
                block: x
            }, {}).w("\n</div>\n")
        }

        function s(t, a) {
            return t.w(" P(10px) Bgc(#deebfe)")
        }

        function e(t, a) {
            return t.w('\n<div class="js-stream-actions Pos(a) T(-25px) End(0) W(30px) Ta(end)"><a href="javascript:void(0)" class="js-stream-comments-close rapid-noclick-resp rapidnofollow Td(n) O(n) C($c_icon) Px(16px)" role="button"><b aria-live="polite" class="js-stream-close-label ActionTooltip Pos(a) Bd($bdr) Bdc($bdr_darkgrey) Bdrs(3px) Bgc(#fff) C(#000) Bxsh($menuShadow) Lh(14px) Py(7px) Z(1) Ta(c) End(-38px)">').h("i18n_string", a, {}, {
                _key: "ACTION_CLOSE"
            }).w('</b><i class="Icon-Fp2 IconActionCross Fz(20px) Mend(4px) C(#000):h"></i></a></div>\n    <ul class="Pos(r) C($gray)">').s(a.get(["comments"], !1), a, {
                block: n
            }, {}).w('<li class="W(10%) D(ib) Bxz(bb)"><a href="').x(a.get(["previewLink"], !1), a, {
                "else": f,
                block: _
            }, {}).w('" class="W(10%) D(b) Td(n) Ta(c) Fz(11px) P(10px) Bd($bdr) Bdrs(3px) Pos(a) H(100%) T(0) Bxz(bb) C(#188fff) Bdc(#188fff)!:h js-stream-comments-button js-content-viewer rapid-noclick-resp rapidnofollow" ').h("rapid_data_attr", a, {}, {
                "rapid-base": a.get(["i13n"], !1),
                t4: "ctrl",
                elm: "btn",
                slk: "cmmt",
                itc: "0"
            }).w('><i class="Icon-Fp2 IconComments Fz(23px) D(ib) Mt(30px)"></i><div class="C(#188fff) Fw(b)">').h("i18n_string", a, {}, {
                _key: "VIEW_ALL"
            }).w("</div></a></li></ul>\n    ")
        }

        function n(t, a) {
            return t.w('<li class="js-stream-comment W(45%) D(ib) Bxz(bb) Va(t) ').x(a.get(["ratingValue"], !1), a, {
                block: d
            }, {}).w('" data-cmtId="').f(a.get(["id"], !1), a, "h").w('"><div class="Pos(r) P(12px) Bd($bdr) Bdrs(3px) Mend(7px) H(104px)"><a href="').x(a.get(["previewLink"], !1), a, {
                "else": r,
                block: i
            }, {}).w('" class="H(100%) W(100%) D(b) Pos(a) T(0) Start(0) js-stream-comments-button js-content-viewer rapid-noclick-resp rapidnofollow" ').h("rapid_data_attr", a, {}, {
                "rapid-base": a.get(["i13n"], !1),
                t4: "ctrl",
                elm: "btn",
                slk: "cmmt",
                itc: "0"
            }).w('></a><div class="Fz(11px) Mb(5px) Whs(nw) Ov(h)">').s(a.get(["user"], !1), a, {
                block: c
            }, {}).w('<span class="D(ib) Mb(5px) Mstart(7px) C(#b9bdc5)">').f(a.get(["time"], !1), a, "h").w('</span></div><div class="LineClamp(3,50px) Fz(13px)">').f(a.get(["summary"], !1), a, "h", ["s"]).w('</div><div class="Pos(a) B(10px) Fz(12px) Lh(20.15px)">').x(a.getPath(!1, ["config", "ui", "comments_writes_enabled"]), a, {
                block: o
            }, {}).w('<a href="javascript:void(0)" class="js-stream-cmnt-flag Td(n) C(#b9bdc5)" ').h("rapid_data_attr", a, {}, {
                "rapid-base": a.get(["i13n"], !1),
                pkgt: "cmmtstray",
                elm: "cmtflag",
                itc: "1"
            }).w('><i class="Icon-Fp2 IconFlag Fz(14px)"></i><b aria-live="polite" class="js-stream-comment-flag-label C(#f23347) D(n) ActionTooltip Pos(a) Bd($bdr) Bdc($bdr_darkgrey) Bdrs(3px) Bgc(#fff) Bxsh($menuShadow) Lh(14px) P(7px) End(-50%) W(145px) T(-47px) Mend(-41px) Ta(c)">').h("i18n_string", a, {}, {
                _key: "FLAGGED_COMMENT"
            }).w("</b></a></div></div></li>")
        }

        function d(t, a) {
            return t.w("rated")
        }

        function r(t, a) {
            return t.f(a.get(["link"], !1), a, "h")
        }

        function i(t, a) {
            return t.f(a.get(["previewLink"], !1), a, "h")
        }

        function c(t, a) {
            return t.h("img", a, {}, {
                src: l,
                height: "25",
                width: "25",
                "class": "Bdrs(25px)"
            }).w('<span class="Fw(b) D(ib) Mb(5px) Mstart(7px)">').f(a.get(["name"], !1), a, "h", ["s"]).w("</span>")
        }

        function l(t, a) {
            return t.f(a.get(["img"], !1), a, "h")
        }

        function o(t, a) {
            return t.w('<a href="javascript:void(0)" class="js-stream-cmnt-up Td(n) Mend(15px) C(#888) ').h("eq", a, {
                block: p
            }, {
                key: b,
                value: "thumbsUp"
            }).w('" ').h("rapid_data_attr", a, {}, {
                "rapid-base": a.get(["i13n"], !1),
                pkgt: "cmmtstray",
                elm: "cmtthumb",
                elmt: "tu",
                itc: "1"
            }).w('><span class="cmnt-counter D(ib)">').f(a.get(["upVote"], !1), a, "h").w('</span><i class="Icon-Fp2 IconUpArrow Va(b) Fz(16px) D(ib) Mstart(3px)"></i></a><a href="javascript:void(0)" class="js-stream-cmnt-down Td(n) Mend(15px) C(#888) ').h("eq", a, {
                block: u
            }, {
                key: m,
                value: "thumbsDown"
            }).w('" ').h("rapid_data_attr", a, {}, {
                "rapid-base": a.get(["i13n"], !1),
                pkgt: "cmmtstray",
                elm: "cmtthumb",
                elmt: "td",
                itc: "1"
            }).w('><span class="cmnt-counter D(ib)">').f(a.get(["downVote"], !1), a, "h").w('</span><i class="Icon-Fp2 IconDownArrow Va(b) Fz(16px) D(ib) Mstart(3px)"></i></a>')
        }

        function p(t, a) {
            return t.w("selected")
        }

        function b(t, a) {
            return t.f(a.get(["ratingValue"], !1), a, "h")
        }

        function u(t, a) {
            return t.w("selected")
        }

        function m(t, a) {
            return t.f(a.get(["ratingValue"], !1), a, "h")
        }

        function f(t, a) {
            return t.f(a.get(["link"], !1), a, "h")
        }

        function _(t, a) {
            return t.f(a.get(["previewLink"], !1), a, "h")
        }

        function x(t, a) {
            return t.w('\n<div class="js-stream-adfdb-options Cf">\n        <h3 class="Fz(13px) Fw(b) C(w)">').h("i18n_string", a, {}, {
                _key: "AD_FDB_HEADING"
            }).w('</h3>\n        <ul class="Cf Mt(13px)">\n            <li class="Mb(10px) Fl(start) W(50%)">\n              <input id="adfdb-opt1" type="radio" class="Bd(0) Mb(2px) Mend(3px) P(0) Va(m)" name="fd" value="1"/>\n              <label for="adfdb-opt1" class="">').h("i18n_string", a, {}, {
                _key: "AD_FDB1"
            }).w('</label for="adfdb-opt1">\n            </li>\n            <li class="Mb(10px) Fl(start) W(50%)">\n              <input id="adfdb-opt2" type="radio" class="Bd(0) Mb(2px) Mend(3px) P(0) Va(m)" name="fd" value="4"/>\n              <label for="adfdb-opt2" class="">').h("i18n_string", a, {}, {
                _key: "AD_FDB2"
            }).w('</label for="adfdb-opt1">\n            </li>\n            <li class="Mb(10px) Fl(start) W(50%)">\n              <input id="adfdb-opt3" type="radio" class="Bd(0) Mb(2px) Mend(3px) P(0) Va(m)" name="fd" value="6"/>\n              <label for="adfdb-opt3" class="">').h("i18n_string", a, {}, {
                _key: "AD_FDB3"
            }).w('</label for="adfdb-opt1">\n            </li>\n            <li class="Mb(10px) Fl(start) W(50%) js-stream-adfdb-other">\n              <input id="adfdb-opt4" type="radio" class="Bd(0) Mb(2px) Mend(3px) P(0) Va(m)" name="fd" value="2"/>\n              <label for="adfdb-opt4" class="">').h("i18n_string", a, {}, {
                _key: "AD_FDB4"
            }).w('</label for="adfdb-opt1">\n            </li>\n            <li class="Mb(5px) js-stream-adfdb-reason">\n              <input type="text" class="W(85%)" name="fd" placeholder="').h("i18n_string", a, {}, {
                _key: "AD_FDB_TELL_US"
            }).w('"/>\n            </li>\n        </ul>\n        <button class="js-stream-ad-done Pos(a) Px(17px) Py(6px) B(0) End(0) Mend(12px) Mb(12px) Bdw(1px) Bds(s) Bdc($bdr_blue) Bdrs(2px) C($bdr_blue) Bgc($bdr_blue):h C(white):h">').h("i18n_string", a, {}, {
                _key: "DONE"
            }).w("</button>\n    </div>\n    ")
        }
        return dust.register("td-applet-stream-atomic-templates-drawer_desktop", a), a.__dustBody = !0, s.__dustBody = !0, e.__dustBody = !0, n.__dustBody = !0, d.__dustBody = !0, r.__dustBody = !0, i.__dustBody = !0, c.__dustBody = !0, l.__dustBody = !0, o.__dustBody = !0, p.__dustBody = !0, b.__dustBody = !0, u.__dustBody = !0, m.__dustBody = !0, f.__dustBody = !0, _.__dustBody = !0, x.__dustBody = !0, a
    }(), dust.cache["td-applet-stream-atomic:drawer_desktop.dust"] = dust.cache["td-applet-stream-atomic:drawer_desktop"] = dust.cache[a], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/drawer_desktop"] = function(t, s) {
        t = t || {}, dust.render(a, t, s)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-drawer_flyout", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('<div class="stream-flyout Pos(a) Z(4) ').h("eq", e, {
                "else": a,
                block: n
            }, {
                key: s,
                value: "comment"
            }).w('">\n    <div class="Px(30px) Py(27px) Bgc(#fff) Bdrs(3px) Mt(8px) Bd Bdc($bdr_blue) Pos(r) Bxsh($menuShadow)">\n        <p class="M(a) Ta(c) Pb(16px) C($gray) Fw(b) Fz(15px)">').h("eq", e, {
                "else": d,
                block: c
            }, {
                key: r,
                value: "comment"
            }).w('</p>\n        <a href="').f(e.getPath(!1, ["config", "js", "login_url"]), e, "h").w('" class="likable-link M(a) Bgc($signin_blue) Bdrs(3px) C(#fff) D(tb) Td(n) Fz(15px) Px(36px) Py(8px) Ta(c) Fw(700)" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                r: o,
                t4: "drwr",
                elm: "btn",
                elmt: "btn"
            }).w(' data-action-outcome="lgn">').h("i18n_string", e, {}, {
                _key: "SIGN_IN_2"
            }).w('</a>\n        <button class="js-stream-login-dismiss Bd(0) D(b) Pos(a) T(5px) End(6px) W(20px) H(20px)"><i class="Icon-Fp2 IconActionCross C($c_icon)"></i></button>\n    </div>\n</div>\n')
        }

        function a(t, e) {
            return t.w(" T(2px) End(34px)")
        }

        function n(t, e) {
            return t.w(" W(296px) H(126px) T(15px) End(-106px)")
        }

        function s(t, e) {
            return t.f(e.get(["action"], !1), e, "h")
        }

        function d(t, e) {
            return t.h("i18n_string", e, {}, {
                _key: "LIKABLE_ARTICLE_SIGN_IN"
            })
        }

        function c(t, e) {
            return t.h("i18n_string", e, {}, {
                _key: "COMMENT_ARTICLE_SIGN_IN"
            })
        }

        function r(t, e) {
            return t.f(e.get(["action"], !1), e, "h")
        }

        function o(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }
        return dust.register("td-applet-stream-atomic-templates-drawer_flyout", e), e.__dustBody = !0, a.__dustBody = !0, n.__dustBody = !0, s.__dustBody = !0, d.__dustBody = !0, c.__dustBody = !0, r.__dustBody = !0, o.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:drawer_flyout.dust"] = dust.cache["td-applet-stream-atomic:drawer_flyout"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/drawer_flyout"] = function(t, a) {
        t = t || {}, dust.render(e, t, a)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-drawer_share", function(t, a) {
    dust.cache = dust.cache || {}, dust.cache[a] = function(t) {
        function a(t, a) {
            return t.w('<div class="Bd($bdr) Bdrs(3px) Bgc(#fff) Cur(d) Mt(5px) Mstart(3px) Mend(30px) Mb(3px) Z(12) Bxsh($menuShadow)">\n    <ul class="Pos(r) M(0)">\n    ').x(a.getPath(!1, ["social_share", "tumblr"]), a, {
                block: e
            }, {}).w("\n").x(a.getPath(!1, ["social_share", "facebook"]), a, {
                block: s
            }, {}).w("\n").x(a.getPath(!1, ["social_share", "twitter"]), a, {
                block: o
            }, {}).w("\n").x(a.getPath(!1, ["social_share", "mail"]), a, {
                block: i
            }, {}).w("\n</ul>\n</div>\n")
        }

        function e(t, a) {
            return t.w('\n<li class="Px(20px) Lh(44px) Bgc($l_blue):h Pos(r)">\n            <a href="').f(a.getPath(!1, ["social_share", "tumblr"]), a, "h").w('" target="_blank" class="C($link) Td(n):h Va(m)" ').h("rapid_data_attr", a, {}, {
                r: c,
                ccode: r,
                t4: "ctrl",
                elm: "btn",
                elmt: "sh-tu",
                itc: "0"
            }).w('>Tumblr <i class="Icon-Fp2 IconTumblrLogo Fl(end) Fz(18px) C(#35465c) W(18px) Ta(c) D(ib)"></i><u class="Pos(a) T(0) Start(0) W(100%) H(100%)"></u></a>\n        </li>\n    ')
        }

        function c(t, a) {
            return t.f(a.get(["reason"], !1), a, "h")
        }

        function r(t, a) {
            return t.f(a.get(["ccode"], !1), a, "h")
        }

        function s(t, a) {
            return t.w('\n<li class="Px(20px) Lh(44px) Bgc($l_blue):h Pos(r)">\n            <a href="').f(a.getPath(!1, ["social_share", "facebook"]), a, "h").w('" target="_blank" class="C($link) Td(n):h Va(m)" ').h("rapid_data_attr", a, {}, {
                r: n,
                ccode: l,
                t4: "ctrl",
                elm: "btn",
                elmt: "sh-fb",
                itc: "0"
            }).w('>Facebook <i class="Icon-Fp2 IconFacebook Fl(end) Fz(18px) C(#3b5998) W(18px) Ta(c) D(ib)"></i><u class="Pos(a) T(0) Start(0) W(100%) H(100%)"></u></a>\n        </li>\n    ')
        }

        function n(t, a) {
            return t.f(a.get(["reason"], !1), a, "h")
        }

        function l(t, a) {
            return t.f(a.get(["ccode"], !1), a, "h")
        }

        function o(t, a) {
            return t.w('\n<li class="Px(20px) Lh(44px) Bgc($l_blue):h Pos(r)">\n            <a href="').f(a.getPath(!1, ["social_share", "twitter"]), a, "h").w('" target="_blank" class="C($link) Td(n):h Va(m)" ').h("rapid_data_attr", a, {}, {
                r: d,
                ccode: u,
                t4: "ctrl",
                elm: "btn",
                elmt: "sh-tw",
                itc: "0"
            }).w('>Twitter <i class="Icon-Fp2 IconTwitterBird Fl(end) Fz(18px) C(#55acee) W(18px) Ta(c) D(ib)"></i><u class="Pos(a) T(0) Start(0) W(100%) H(100%)"></u></a>\n        </li>\n    ')
        }

        function d(t, a) {
            return t.f(a.get(["reason"], !1), a, "h")
        }

        function u(t, a) {
            return t.f(a.get(["ccode"], !1), a, "h")
        }

        function i(t, a) {
            return t.w('\n<li class="Px(20px) Lh(44px) Bgc($l_blue):h Pos(r)">\n            <a href="').f(a.getPath(!1, ["social_share", "mail"]), a, "h").w('" class="C($link) Td(n):h Va(m)" ').h("rapid_data_attr", a, {}, {
                r: h,
                ccode: _,
                t4: "ctrl",
                elm: "btn",
                elmt: "sh-ma",
                itc: "0"
            }).w('>Email <i class="Icon-Fp2 IconMail Fl(end) Fz(18px) C(#400090) W(18px) Ta(c) D(ib)"></i><u class="Pos(a) T(0) Start(0) W(100%) H(100%)"></u></a>\n        </li>\n    ')
        }

        function h(t, a) {
            return t.f(a.get(["reason"], !1), a, "h")
        }

        function _(t, a) {
            return t.f(a.get(["ccode"], !1), a, "h")
        }
        return dust.register("td-applet-stream-atomic-templates-drawer_share", a), a.__dustBody = !0, e.__dustBody = !0, c.__dustBody = !0, r.__dustBody = !0, s.__dustBody = !0, n.__dustBody = !0, l.__dustBody = !0, o.__dustBody = !0, d.__dustBody = !0, u.__dustBody = !0, i.__dustBody = !0, h.__dustBody = !0, _.__dustBody = !0, a
    }(), dust.cache["td-applet-stream-atomic:drawer_share.dust"] = dust.cache["td-applet-stream-atomic:drawer_share"] = dust.cache[a], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/drawer_share"] = function(t, e) {
        t = t || {}, dust.render(a, t, e)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-drawer_share_sm", function(t, a) {
    dust.cache = dust.cache || {}, dust.cache[a] = function(t) {
        function a(t, a) {
            return t.w('<button class="Bdr-0 D-b Fw(b) Bgc(n) C(#fff) Fz(22px) Pos(a) End(10px) T(10px) js-stream-share-modal rapid-noclick-resp Z-7">\n    <i class="Icon-Fp2 IconActionCross js-stream-share-modal"></i>\n    <b class="Td(n) Hidden">').h("i18n_string", a, {}, {
                _key: "ACTION_CLOSE"
            }).w('</b>\n</button>\n<div class="Bd($bdr) Bdrs(3px) Bgc(#fff) Cur(d) Z(12) Bxsh($menuShadow) End(20px) Start(20px) Pos(a) T(50%) TranslateY(-50%)">\n    <ul class="Pos(r) M(0)">\n    ').x(a.getPath(!1, ["social_share", "tumblr"]), a, {
                block: e
            }, {}).w("\n").x(a.getPath(!1, ["social_share", "facebook"]), a, {
                block: n
            }, {}).w("\n").x(a.getPath(!1, ["social_share", "twitter"]), a, {
                block: o
            }, {}).w("\n").x(a.getPath(!1, ["social_share", "mail"]), a, {
                block: u
            }, {}).w("\n</ul>\n</div>\n")
        }

        function e(t, a) {
            return t.w('\n<li class="Px(20px) Lh(44px) Bgc($l_blue):h Pos(r)">\n            <a href="').f(a.getPath(!1, ["social_share", "tumblr"]), a, "h").w('" target="_blank" class="C($link) Td(n):h Va(m)" ').h("rapid_data_attr", a, {}, {
                r: s,
                ccode: c,
                t4: "ctrl",
                elm: "btn",
                elmt: "sh-tu",
                itc: "0"
            }).w('>Tumblr <i class="Icon-Fp2 IconTumblrLogo Fl(end) Fz(18px) C(#35465c) W(18px) Ta(c) D(ib)"></i><u class="Pos(a) T(0) Start(0) W(100%) H(100%)"></u></a>\n        </li>\n    ')
        }

        function s(t, a) {
            return t.f(a.get(["reason"], !1), a, "h")
        }

        function c(t, a) {
            return t.f(a.get(["ccode"], !1), a, "h")
        }

        function n(t, a) {
            return t.w('\n<li class="Px(20px) Lh(44px) Bgc($l_blue):h Pos(r)">\n            <a href="').f(a.getPath(!1, ["social_share", "facebook"]), a, "h").w('" target="_blank" class="C($link) Td(n):h Va(m)" ').h("rapid_data_attr", a, {}, {
                r: r,
                ccode: l,
                t4: "ctrl",
                elm: "btn",
                elmt: "sh-fb",
                itc: "0"
            }).w('>Facebook <i class="Icon-Fp2 IconFacebook Fl(end) Fz(18px) C(#3b5998) W(18px) Ta(c) D(ib)"></i><u class="Pos(a) T(0) Start(0) W(100%) H(100%)"></u></a>\n        </li>\n    ')
        }

        function r(t, a) {
            return t.f(a.get(["reason"], !1), a, "h")
        }

        function l(t, a) {
            return t.f(a.get(["ccode"], !1), a, "h")
        }

        function o(t, a) {
            return t.w('\n<li class="Px(20px) Lh(44px) Bgc($l_blue):h Pos(r)">\n            <a href="').f(a.getPath(!1, ["social_share", "twitter"]), a, "h").w('" target="_blank" class="C($link) Td(n):h Va(m)" ').h("rapid_data_attr", a, {}, {
                r: d,
                ccode: i,
                t4: "ctrl",
                elm: "btn",
                elmt: "sh-tw",
                itc: "0"
            }).w('>Twitter <i class="Icon-Fp2 IconTwitterBird Fl(end) Fz(18px) C(#55acee) W(18px) Ta(c) D(ib)"></i><u class="Pos(a) T(0) Start(0) W(100%) H(100%)"></u></a>\n        </li>\n    ')
        }

        function d(t, a) {
            return t.f(a.get(["reason"], !1), a, "h")
        }

        function i(t, a) {
            return t.f(a.get(["ccode"], !1), a, "h")
        }

        function u(t, a) {
            return t.w('\n<li class="Px(20px) Lh(44px) Bgc($l_blue):h Pos(r)">\n            <a href="').f(a.getPath(!1, ["social_share", "mail"]), a, "h").w('" class="C($link) Td(n):h Va(m)" ').h("rapid_data_attr", a, {}, {
                r: h,
                ccode: _,
                t4: "ctrl",
                elm: "btn",
                elmt: "sh-ma",
                itc: "0"
            }).w('>Email <i class="Icon-Fp2 IconMail Fl(end) Fz(18px) C(#400090) W(18px) Ta(c) D(ib)"></i><u class="Pos(a) T(0) Start(0) W(100%) H(100%)"></u></a>\n        </li>\n    ')
        }

        function h(t, a) {
            return t.f(a.get(["reason"], !1), a, "h")
        }

        function _(t, a) {
            return t.f(a.get(["ccode"], !1), a, "h")
        }
        return dust.register("td-applet-stream-atomic-templates-drawer_share_sm", a), a.__dustBody = !0, e.__dustBody = !0, s.__dustBody = !0, c.__dustBody = !0, n.__dustBody = !0, r.__dustBody = !0, l.__dustBody = !0, o.__dustBody = !0, d.__dustBody = !0, i.__dustBody = !0, u.__dustBody = !0, h.__dustBody = !0, _.__dustBody = !0, a
    }(), dust.cache["td-applet-stream-atomic:drawer_share_sm.dust"] = dust.cache["td-applet-stream-atomic:drawer_share_sm"] = dust.cache[a], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/drawer_share_sm"] = function(t, e) {
        t = t || {}, dust.render(a, t, e)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-drawer_share_tb", function(t, a) {
    dust.cache = dust.cache || {}, dust.cache[a] = function(t) {
        function a(t, a) {
            return t.w('<button class="Bdr-0 D-b Fw(b) Bgc(n) C(#fff) Fz(22px) Pos(a) End(10px) T(10px) js-stream-share-modal rapid-noclick-resp Z-7">\n    <i class="Icon-Fp2 IconActionCross js-stream-share-modal"></i>\n    <b class="Td(n) Hidden">').h("i18n_string", a, {}, {
                _key: "ACTION_CLOSE"
            }).w('</b>\n</button>\n<div class="Bd($bdr) Bdrs(3px) Bgc(#fff) Cur(d) Z(12) Bxsh($menuShadow) End(20px) Start(20px) Pos(a) T(50%) TranslateY(-50%)">\n    <ul class="Pos(r) M(0)">\n    ').x(a.getPath(!1, ["social_share", "tumblr"]), a, {
                block: e
            }, {}).w("\n").x(a.getPath(!1, ["social_share", "facebook"]), a, {
                block: r
            }, {}).w("\n").x(a.getPath(!1, ["social_share", "twitter"]), a, {
                block: o
            }, {}).w("\n").x(a.getPath(!1, ["social_share", "mail"]), a, {
                block: u
            }, {}).w("\n</ul>\n</div>")
        }

        function e(t, a) {
            return t.w('\n<li class="Px(20px) Lh(44px) Bgc($l_blue):h Pos(r)">\n            <a href="').f(a.getPath(!1, ["social_share", "tumblr"]), a, "h").w('" target="_blank" class="C($link) Td(n):h Va(m)" ').h("rapid_data_attr", a, {}, {
                r: s,
                ccode: c,
                t4: "ctrl",
                elm: "btn",
                elmt: "sh-tu",
                itc: "0"
            }).w('>Tumblr <i class="Icon-Fp2 IconTumblrLogo Fl(end) Fz(18px) C(#35465c) W(18px) Ta(c) D(ib)"></i><u class="Pos(a) T(0) Start(0) W(100%) H(100%)"></u></a>\n        </li>\n    ')
        }

        function s(t, a) {
            return t.f(a.get(["reason"], !1), a, "h")
        }

        function c(t, a) {
            return t.f(a.get(["ccode"], !1), a, "h")
        }

        function r(t, a) {
            return t.w('\n<li class="Px(20px) Lh(44px) Bgc($l_blue):h Pos(r)">\n            <a href="').f(a.getPath(!1, ["social_share", "facebook"]), a, "h").w('" target="_blank" class="C($link) Td(n):h Va(m)" ').h("rapid_data_attr", a, {}, {
                r: n,
                ccode: l,
                t4: "ctrl",
                elm: "btn",
                elmt: "sh-fb",
                itc: "0"
            }).w('>Facebook <i class="Icon-Fp2 IconFacebook Fl(end) Fz(18px) C(#3b5998) W(18px) Ta(c) D(ib)"></i><u class="Pos(a) T(0) Start(0) W(100%) H(100%)"></u></a>\n        </li>\n    ')
        }

        function n(t, a) {
            return t.f(a.get(["reason"], !1), a, "h")
        }

        function l(t, a) {
            return t.f(a.get(["ccode"], !1), a, "h")
        }

        function o(t, a) {
            return t.w('\n<li class="Px(20px) Lh(44px) Bgc($l_blue):h Pos(r)">\n            <a href="').f(a.getPath(!1, ["social_share", "twitter"]), a, "h").w('" target="_blank" class="C($link) Td(n):h Va(m)" ').h("rapid_data_attr", a, {}, {
                r: d,
                ccode: i,
                t4: "ctrl",
                elm: "btn",
                elmt: "sh-tw",
                itc: "0"
            }).w('>Twitter <i class="Icon-Fp2 IconTwitterBird Fl(end) Fz(18px) C(#55acee) W(18px) Ta(c) D(ib)"></i><u class="Pos(a) T(0) Start(0) W(100%) H(100%)"></u></a>\n        </li>\n    ')
        }

        function d(t, a) {
            return t.f(a.get(["reason"], !1), a, "h")
        }

        function i(t, a) {
            return t.f(a.get(["ccode"], !1), a, "h")
        }

        function u(t, a) {
            return t.w('\n<li class="Px(20px) Lh(44px) Bgc($l_blue):h Pos(r)">\n            <a href="').f(a.getPath(!1, ["social_share", "mail"]), a, "h").w('" class="C($link) Td(n):h Va(m)" ').h("rapid_data_attr", a, {}, {
                r: h,
                ccode: _,
                t4: "ctrl",
                elm: "btn",
                elmt: "sh-ma",
                itc: "0"
            }).w('>Email <i class="Icon-Fp2 IconMail Fl(end) Fz(18px) C(#400090) W(18px) Ta(c) D(ib)"></i><u class="Pos(a) T(0) Start(0) W(100%) H(100%)"></u></a>\n        </li>\n    ')
        }

        function h(t, a) {
            return t.f(a.get(["reason"], !1), a, "h")
        }

        function _(t, a) {
            return t.f(a.get(["ccode"], !1), a, "h")
        }
        return dust.register("td-applet-stream-atomic-templates-drawer_share_tb", a), a.__dustBody = !0, e.__dustBody = !0, s.__dustBody = !0, c.__dustBody = !0, r.__dustBody = !0, n.__dustBody = !0, l.__dustBody = !0, o.__dustBody = !0, d.__dustBody = !0, i.__dustBody = !0, u.__dustBody = !0, h.__dustBody = !0, _.__dustBody = !0, a
    }(), dust.cache["td-applet-stream-atomic:drawer_share_tb.dust"] = dust.cache["td-applet-stream-atomic:drawer_share_tb"] = dust.cache[a], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/drawer_share_tb"] = function(t, e) {
        t = t || {}, dust.render(a, t, e)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-errormsg", function(t, n) {
    dust.cache = dust.cache || {}, dust.cache[n] = function(t) {
        function n(t, n) {
            return t.w('<li class="P-10 Row">\n    ').h("select", n, {
                block: e
            }, {
                key: m
            }).w("\n</li>\n")
        }

        function e(t, n) {
            return t.w("\n").h("eq", n, {
                block: s
            }, {
                value: "YCUSTOM:DEFERRED"
            }).w("\n").h("eq", n, {
                block: o
            }, {
                value: "YCUSTOM:MYQUOTES"
            }).w("\n").h("eq", n, {
                block: u
            }, {
                value: "YCUSTOM:MYTEAMS"
            }).w("\n").x(n.getPath(!1, ["config", "min_count"]), n, {
                block: f
            }, {}).w("\n")
        }

        function s(t, n) {
            return t.w("\n")
        }

        function o(t, n) {
            return t.w("\n").x(n.getPath(!1, ["config", "signed_in"]), n, {
                "else": r,
                block: c
            }, {}).w("\n")
        }

        function r(t, n) {
            return t.w('\n<p class="Fz-m">').h("i18n_string", n, {}, {
                _key: "MYQUOTES_LOGIN",
                v0: a,
                v1: "</a>"
            }).w("</p>\n            ")
        }

        function a(t, n) {
            return t.w("<a class='js-stream-ylogin rapidnofollow' href='").f(n.getPath(!1, ["config", "js", "login_url"]), n, "h").w("'>")
        }

        function c(t, n) {
            return t.w('\n<p class="Fz-m">').h("i18n_string", n, {}, {
                _key: "MYQUOTES_ADD_MORE",
                v0: "<a href='http://finance.yahoo.com/portfolios.html'>",
                v1: "</a>"
            }).w("</p>\n            ")
        }

        function u(t, n) {
            return t.w("\n").x(n.getPath(!1, ["config", "signed_in"]), n, {
                "else": i,
                block: d
            }, {}).w("\n")
        }

        function i(t, n) {
            return t.w('\n<p class="Fz-m">').h("i18n_string", n, {}, {
                _key: "MYTEAMS_LOGIN",
                v0: _,
                v1: "</a>"
            }).w("</p>\n            ")
        }

        function _(t, n) {
            return t.w("<a class='js-stream-ylogin rapidnofollow' href='").f(n.getPath(!1, ["config", "js", "login_url"]), n, "h").w("'>")
        }

        function d(t, n) {
            return t.w("\n").x(n.get(["noTeams"], !1), n, {
                "else": l,
                block: h
            }, {}).w("\n")
        }

        function l(t, n) {
            return t.w('\n<p class="Fz-m">').h("i18n_string", n, {}, {
                _key: "MYTEAMS_NO_CONTENT",
                v0: "<a href='http://sports.yahoo.com/personalize/edit'>",
                v1: "</a>",
                v2: "<a href='#' class='js-stream-entity' data-filter='YPROP:TOPSTORIES'>",
                v3: "</a>"
            }).w("</p>\n                ")
        }

        function h(t, n) {
            return t.w('\n<p class="Fz-m">').h("i18n_string", n, {}, {
                _key: "MYTEAMS_ADD_TEAMS",
                v0: "<a href='http://sports.yahoo.com/personalize/edit'>",
                v1: "</a>"
            }).w("</p>\n                ")
        }

        function f(t, n) {
            return t.w("\n").h("default", n, {
                block: p
            }, {}).w("\n")
        }

        function p(t, n) {
            return t.w('\n<h3 class="Fw-b Fz-m Mb-2">').h("i18n_string", n, {}, {
                _key: "NO_STORIES_HEADER"
            }).w("</h3>\n        <p>").h("i18n_string", n, {}, {
                _key: "NO_STORIES_BODY",
                v0: "<a href='#' class='js-stream-reload rapidnofollow'>",
                v1: "</a>"
            }).w("</p>\n        ")
        }

        function m(t, n) {
            return t.f(n.getPath(!1, ["config", "category"]), n, "h")
        }
        return dust.register("td-applet-stream-atomic-templates-errormsg", n), n.__dustBody = !0, e.__dustBody = !0, s.__dustBody = !0, o.__dustBody = !0, r.__dustBody = !0, a.__dustBody = !0, c.__dustBody = !0, u.__dustBody = !0, i.__dustBody = !0, _.__dustBody = !0, d.__dustBody = !0, l.__dustBody = !0, h.__dustBody = !0, f.__dustBody = !0, p.__dustBody = !0, m.__dustBody = !0, n
    }(), dust.cache["td-applet-stream-atomic:errormsg.dust"] = dust.cache["td-applet-stream-atomic:errormsg"] = dust.cache[n], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/errormsg"] = function(t, e) {
        t = t || {}, dust.render(n, t, e)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-feedback_drawer_sm", function(e, t) {
    dust.cache = dust.cache || {}, dust.cache[t] = function(e) {
        function t(e, t) {
            return e.w('<div class="js-stream-drawer Bfc Fz(13px) Pos(r) stream-collapse Bgc(#deebfe) P(10px) Mt(20px)">\n    <div class="js-stream-adfdb-options custombtns Cf">\n        <h3 class="Fz(13px) Fw(b) C(w)">').h("i18n_string", t, {}, {
                _key: "AD_FDB_HEADING"
            }).w('</h3>\n        <ul class="Cf Mt(13px)">\n            <li class="Mb(10px)">\n              <input id="fdb-').f(t.get(["id"], !1), t, "h").w('-opt1" type="radio" class="V(h) W(0)" name="fd" value="1"/>\n              <label for="fdb-').f(t.get(["id"], !1), t, "h").w('-opt1" class="">').h("i18n_string", t, {}, {
                _key: "AD_FDB1"
            }).w('</label for="fdb-').f(t.get(["id"], !1), t, "h").w('-opt1">\n            </li>\n            <li class="Mb(10px)">\n              <input id="fdb-').f(t.get(["id"], !1), t, "h").w('-opt2" type="radio" class="V(h) W(0)" name="fd" value="4"/>\n              <label for="fdb-').f(t.get(["id"], !1), t, "h").w('-opt2" class="">').h("i18n_string", t, {}, {
                _key: "AD_FDB2"
            }).w('</label for="fdb-').f(t.get(["id"], !1), t, "h").w('-opt1">\n            </li>\n            <li class="Mb(10px)">\n              <input id="fdb-').f(t.get(["id"], !1), t, "h").w('-opt3" type="radio" class="V(h) W(0)" name="fd" value="6"/>\n              <label for="fdb-').f(t.get(["id"], !1), t, "h").w('-opt3" class="">').h("i18n_string", t, {}, {
                _key: "AD_FDB3"
            }).w('</label for="fdb-').f(t.get(["id"], !1), t, "h").w('-opt1">\n            </li>\n            <li class="Mb(10px) js-stream-adfdb-other">\n              <input id="fdb-').f(t.get(["id"], !1), t, "h").w('-opt4" type="radio" class="V(h) W(0)" name="fd" value="2"/>\n              <label for="fdb-').f(t.get(["id"], !1), t, "h").w('-opt4" class="">').h("i18n_string", t, {}, {
                _key: "AD_FDB4"
            }).w('</label for="fdb-').f(t.get(["id"], !1), t, "h").w('-opt1">\n            </li>\n            <li class="Mb(5px) js-stream-adfdb-reason">\n              <input type="text" class="W(66%) P(4px) Fz(13px) Mstart(4px)" name="fd" placeholder="').h("i18n_string", t, {}, {
                _key: "AD_FDB_TELL_US"
            }).w('"/>\n            </li>\n        </ul>\n        <button class="js-stream-ad-done Px(17px) Py(6px) Mt(4px) Bdw(1px) Bds(s) Bdc($bdr_blue) Bdrs(2px) C($bdr_blue) Bgc($bdr_blue):h C(white):h">').h("i18n_string", t, {}, {
                _key: "DONE"
            }).w("</button>\n    </div>\n</div>\n")
        }
        return dust.register("td-applet-stream-atomic-templates-feedback_drawer_sm", t), t.__dustBody = !0, t
    }(), dust.cache["td-applet-stream-atomic:feedback_drawer_sm.dust"] = dust.cache["td-applet-stream-atomic:feedback_drawer_sm"] = dust.cache[t], e.Template._cache = e.Template._cache || {}, e.Template._cache["td-applet-stream-atomic/templates/feedback_drawer_sm"] = function(e, a) {
        e = e || {}, dust.render(t, e, a)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-item-ad", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w("<li ").x(e.getPath(!1, ["config", "yaftTrackingEnabled"]), e, {
                block: n
            }, {}).w(' class="').x(e.get(["beacon"], !1), e, {
                block: r
            }, {}).w(" ").x(e.getPath(!1, ["config", "ads", "adblock"]), e, {
                block: o
            }, {}).w("js-stream-ad ").x(e.get(["isVideo"], !1), e, {
                block: d
            }, {}).w(' Mb-content Wow(bw) Pos(r) Mx(a) Mt(-1px) Bxz(bb) Bgc(#fff)" ').x(e.get(["beacon"], !1), e, {
                block: i
            }, {}).x(e.get(["cpi"], !1), e, {
                block: s
            }, {}).s(e.get(["imprTrackingUrl"], !1), e, {
                block: c
            }, {}).x(e.get(["imprTrackingUrls"], !1), e, {
                block: u
            }, {}).x(e.getPath(!1, ["config", "ads", "feedback"]), e, {
                block: l
            }, {}).w(' data-uuid="').f(e.get(["id"], !1), e, "h").w('" ').x(e.get(["partial_view_beacon"], !1), e, {
                block: g
            }, {}).w(" ").x(e.get(["generic_view_beacon"], !1), e, {
                block: f
            }, {}).w('>\n    <div class="js-stream-item-wrap Py(15px) Pos(r)">\n        <div class="Pos(r) Wow(bw) Cf').x(e.get(["actionsEnabled"], !1), e, {
                block: h
            }, {}).w('">\n            ').s(e.get(["image"], !1), e, {
                block: w
            }, {}).w('\n<div class="strm-right Fl(start) W(62%)">\n                ').x(e.getPath(!1, ["config", "ads", "sponsored_url"]), e, {
                block: M
            }, {}).w("\n").x(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: H
            }, {}).w('\n<h3 class="Mb(4px) Lh(21px)">\n                    <a href="').f(e.get(["link"], !1), e, "h").w('" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "hdln",
                elmt: "ad",
                ccode: U
            }).w(' class="').nx(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: N
            }, {}).w(' js-stream-content-link js-stream-item-title js-content-title Td(n) Fz(17px) Fw(b) C($link) C($m_blue):h O(n):f C($m_blue):f" rel="nofollow noopener noreferrer">\n                        <span>').f(e.get(["title"], !1), e, "h", ["s"]).w('</span>\n                        <u class="Pos(a) T(0) Start(0) W(100%) H(100%) ').x(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: O
            }, {}).w('"></u>\n                    </a>\n                </h3>\n                <div>\n                    ').x(e.get(["summary"], !1), e, {
                block: A
            }, {}).w("\n").x(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: Y
            }, {}).w("\n").nx(e.getPath(!1, ["config", "ui", "publisher_headline"]), e, {
                block: G
            }, {}).w("\n").x(e.get(["cpi"], !1), e, {
                block: Q
            }, {}).w("\n</div>\n            </div>\n            ").x(e.getPath(!1, ["config", "ads", "feedback"]), e, {
                block: Z
            }, {}).w("\n</div>\n    </div>\n</li>\n")
        }

        function n(t, e) {
            return t.s(e.getPath(!1, ["i13n", "cpos"]), e, {
                block: a
            }, {})
        }

        function a(t, e) {
            return t.w('data-yaft-module="stream_item_').f(e.getPath(!0, []), e, "h").w('"')
        }

        function r(t, e) {
            return t.w("js-stream-ad-noview ")
        }

        function o(t, e) {
            return t.w("ysab ")
        }

        function d(t, e) {
            return t.w("js-video-content")
        }

        function i(t, e) {
            return t.w('data-beacon="').f(e.get(["beacon"], !1), e, "h").w('"')
        }

        function s(t, e) {
            return t.w(' style="min-height:48px"')
        }

        function c(t, e) {
            return t.w(' data-impr-beacon="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function u(t, e) {
            return t.w(' data-thirdparty-beacons="').f(e.get(["imprTrackingUrls"], !1), e, "h", ["js"]).w('"')
        }

        function l(t, e) {
            return t.s(e.get(["ad_feedback_beacon"], !1), e, {
                block: _
            }, {})
        }

        function _(t, e) {
            return t.w(' data-ad-feedback-beacon="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function g(t, e) {
            return t.w('data-prtbc="').f(e.get(["partial_view_beacon"], !1), e, "h").w('"')
        }

        function f(t, e) {
            return t.w('data-gnvbc="').f(e.get(["generic_view_beacon"], !1), e, "h").w('"')
        }

        function h(t, e) {
            return t.w(" Pend(30px)")
        }

        function w(t, e) {
            return t.w('\n<div class="strm-left Fl(start) Pos(r) Pend(20px) Ta(c)">\n                ').x(e.get(["large_square_image"], !1), e, {
                "else": p,
                block: P
            }, {}).w("\n</div>\n            ")
        }

        function p(t, e) {
            return t.w('\n<div class="Bgc($bgc_gray) H(100%) W(100%) Whs(nw) Py(36px) rounded-img"><span class="D(ib) Va(m) H(100%) img-helper"></span><a href="').f(e.get(["link"], !1), e, "h").w('" class="streamImage Pos(r) D(ib) ua-ie8_D(i)').x(e.get(["isVideo"], !1), e, {
                block: b
            }, {}).w('" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "img",
                elmt: "ct",
                ccode: m
            }).w(' rel="nofollow noopener noreferrer">').h("img", e, {}, {
                src: y,
                width: k,
                height: B,
                "class": "Va(m) W(100%)",
                defer: x
            }).w("</a></div>\n                ")
        }

        function b(t, e) {
            return t.w(" js-video-target js-video-image")
        }

        function m(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function y(t, e) {
            return t.f(e.get(["url"], !1), e, "h")
        }

        function k(t, e) {
            return t.f(e.get(["width"], !1), e, "h")
        }

        function B(t, e) {
            return t.f(e.get(["height"], !1), e, "h")
        }

        function x(t, e) {
            return t.f(e.get(["defer"], !1), e, "h")
        }

        function P(t, e) {
            return t.w('\n<div class="H(100%) W(100%) Whs(nw) rounded-img"><span class="D(ib) Va(m) H(100%) img-helper"></span><a href="').f(e.get(["link"], !1), e, "h").w('" class="streamImage Pos(r) D(ib) ua-ie8_D(i)').x(e.get(["isVideo"], !1), e, {
                block: v
            }, {}).w('" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "img",
                elmt: "ct",
                ccode: T
            }).w(' rel="nofollow noopener noreferrer">').h("img", e, {}, {
                src: D,
                width: C,
                height: F,
                "class": "Va(m)",
                defer: j
            }).w("</a></div>\n                ")
        }

        function v(t, e) {
            return t.w(" js-video-target js-video-image")
        }

        function T(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function D(t, e) {
            return t.f(e.getPath(!1, ["large_square_image", "url"]), e, "h")
        }

        function C(t, e) {
            return t.f(e.getPath(!1, ["large_square_image", "width"]), e, "h")
        }

        function F(t, e) {
            return t.f(e.getPath(!1, ["large_square_image", "height"]), e, "h")
        }

        function j(t, e) {
            return t.f(e.get(["defer"], !1), e, "h")
        }

        function M(t, e) {
            return t.w('\n<div class="Fw(b) Mb(4px) Lh(17px)">\n                    <a class="Mend(4px) D(ib) Va(m) Td(n) C($sponsored) Fz(13px) Tt(c)" href="').f(e.getPath(!1, ["config", "ads", "sponsored_url"]), e, "h").w('" target="_blank" rel="nofollow noopener noreferrer" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "itm",
                elmt: "sp",
                ccode: V
            }).w(">").x(e.get(["sponsoredByLabel"], !1), e, {
                "else": W,
                block: z
            }, {}).w('</a>\n                    <a class="D(ib) Va(m) Td(n) adlink C($sponsored)" href="').f(e.get(["adChoicesUrl"], !1), e, "h").w('" rel="nofollow noopener noreferrer" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "itm",
                elmt: "info",
                ccode: E
            }).w('><i class="Icon-Fp2 IconMoneyball Fz(13px) D(ib)"></i></a>\n                    ').x(e.getPath(!1, ["config", "ui", "publisher_headline"]), e, {
                block: $
            }, {}).w("\n</div>\n                ")
        }

        function V(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function W(t, e) {
            return t.x(e.getPath(!1, ["config", "ads", "advt_text"]), e, {
                "else": I,
                block: L
            }, {})
        }

        function I(t, e) {
            return t.h("i18n_string", e, {}, {
                _key: "SPONSORED"
            })
        }

        function L(t, e) {
            return t.h("i18n_string", e, {}, {
                _key: "ADVERTISEMENT"
            })
        }

        function z(t, e) {
            return t.f(e.get(["sponsoredByLabel"], !1), e, "h", ["s"])
        }

        function E(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function $(t, e) {
            return t.s(e.get(["publisher"], !1), e, {
                block: S
            }, {})
        }

        function S(t, e) {
            return t.w('<a class="Fz(11px) D(ib) Td(n) C(gray_dark) Va(m) Fw(n) Mstart(9px)" href="').f(e.get(["link"], !1), e, "h").w('" rel="nofollow noopener noreferrer" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "itm",
                elmt: "ad",
                ccode: q
            }).w(">").f(e.getPath(!0, []), e, "h", ["s"]).w("</a>")
        }

        function q(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function H(t, e) {
            return t.w('<div class="Pos(r)">')
        }

        function U(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function N(t, e) {
            return t.w("Pos(r)")
        }

        function O(t, e) {
            return t.w("strm-stretch")
        }

        function A(t, e) {
            return t.w('<p class="').nx(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: R
            }, {}).w(' stream-summary LineClamp(2,36px) Lh(17px) C($gray) Bfv(h)">').f(e.get(["summary"], !1), e, "h", ["s"]).w("</p>")
        }

        function R(t, e) {
            return t.w("Pos(r)")
        }

        function Y(t, e) {
            return t.w('</div><div class="Pos(r)">')
        }

        function G(t, e) {
            return t.w("\n").s(e.get(["publisher"], !1), e, {
                block: J
            }, {}).w("\n")
        }

        function J(t, e) {
            return t.w('<a class="Fz(11px) D(ib) Mt(6px) Td(n) C(gray_dark) Mt(4px)" href="').f(e.get(["link"], !1), e, "h").w('" rel="nofollow noopener noreferrer" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "itm",
                elmt: "ad",
                ccode: K
            }).w(">").f(e.getPath(!0, []), e, "h", ["s"]).w("</a>")
        }

        function K(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function Q(t, e) {
            return t.w('\n<a target="_blank" href="').f(e.get(["link"], !1), e, "h").w('" rel="nofollow noopener noreferrer" class="Fl(end) C(gray_dark) Bdc(gray_dark) Bds(s) Bdrs(5px) Bdw(t) Mt(5px) Py(4px) Px(20px) Cur(p) Fz(14px) D(ib) Td(n)" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                rspns: "nav",
                ad: "1",
                elm: "btn",
                elmt: "instl",
                itc: "0",
                ccode: X
            }).w(">").h("i18n_string", e, {}, {
                _key: "INSTALL_APP"
            }).w("</a>\n                    ")
        }

        function X(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function Z(t, e) {
            return t.w("\n").p("td-applet-stream-atomic:item/ad_dislike", e, {}).w("\n")
        }
        return dust.register("td-applet-stream-atomic-templates-item-ad", e), e.__dustBody = !0, n.__dustBody = !0, a.__dustBody = !0, r.__dustBody = !0, o.__dustBody = !0, d.__dustBody = !0, i.__dustBody = !0, s.__dustBody = !0, c.__dustBody = !0, u.__dustBody = !0, l.__dustBody = !0, _.__dustBody = !0, g.__dustBody = !0, f.__dustBody = !0, h.__dustBody = !0, w.__dustBody = !0, p.__dustBody = !0, b.__dustBody = !0, m.__dustBody = !0, y.__dustBody = !0, k.__dustBody = !0, B.__dustBody = !0, x.__dustBody = !0, P.__dustBody = !0, v.__dustBody = !0, T.__dustBody = !0, D.__dustBody = !0, C.__dustBody = !0, F.__dustBody = !0, j.__dustBody = !0, M.__dustBody = !0, V.__dustBody = !0, W.__dustBody = !0, I.__dustBody = !0, L.__dustBody = !0, z.__dustBody = !0, E.__dustBody = !0, $.__dustBody = !0, S.__dustBody = !0, q.__dustBody = !0, H.__dustBody = !0, U.__dustBody = !0, N.__dustBody = !0, O.__dustBody = !0, A.__dustBody = !0, R.__dustBody = !0, Y.__dustBody = !0, G.__dustBody = !0, J.__dustBody = !0, K.__dustBody = !0, Q.__dustBody = !0, X.__dustBody = !0, Z.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/ad.dust"] = dust.cache["td-applet-stream-atomic:item/ad"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/ad"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-item-ad_dislike"]
});
YUI.add("td-applet-stream-atomic-templates-item-ad_clusters", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w("<li ").x(e.getPath(!1, ["config", "yaftTrackingEnabled"]), e, {
                block: n
            }, {}).w(' class="strm-ad-clusters ').x(e.get(["beacon"], !1), e, {
                block: o
            }, {}).w(" ").x(e.getPath(!1, ["config", "ads", "adblock"]), e, {
                block: a
            }, {}).w("js-stream-ad ").x(e.get(["isVideo"], !1), e, {
                block: d
            }, {}).w(' Wow(bw) Pos(r) Mx(a) Mt(-1px) Bxz(bb) Bgc(#fff)" ').x(e.get(["beacon"], !1), e, {
                block: i
            }, {}).x(e.get(["cpi"], !1), e, {
                block: s
            }, {}).s(e.get(["imprTrackingUrl"], !1), e, {
                block: c
            }, {}).x(e.get(["imprTrackingUrls"], !1), e, {
                block: u
            }, {}).x(e.getPath(!1, ["config", "ads", "feedback"]), e, {
                block: l
            }, {}).w(' data-uuid="').f(e.get(["id"], !1), e, "h").w('" ').x(e.get(["partial_view_beacon"], !1), e, {
                block: f
            }, {}).w(" ").x(e.get(["generic_view_beacon"], !1), e, {
                block: g
            }, {}).w('>\n<div class="Pos(r) Wow(bw) Py(12px) Cf ').x(e.get(["isRoundUp"], !1), e, {
                block: h
            }, {}).w('">\n').x(e.getPath(!1, ["images", "default"]), e, {
                block: p
            }, {}).w("\n</div>\n</li>\n")
        }

        function n(t, e) {
            return t.s(e.getPath(!1, ["i13n", "cpos"]), e, {
                block: r
            }, {})
        }

        function r(t, e) {
            return t.w('data-yaft-module="stream_item_').f(e.getPath(!0, []), e, "h").w('"')
        }

        function o(t, e) {
            return t.w("js-stream-ad-noview ")
        }

        function a(t, e) {
            return t.w("ysab ")
        }

        function d(t, e) {
            return t.w("js-video-content")
        }

        function i(t, e) {
            return t.w('data-beacon="').f(e.get(["beacon"], !1), e, "h").w('"')
        }

        function s(t, e) {
            return t.w(' style="min-height:48px"')
        }

        function c(t, e) {
            return t.w(' data-impr-beacon="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function u(t, e) {
            return t.w(' data-thirdparty-beacons="').f(e.get(["imprTrackingUrls"], !1), e, "h", ["js"]).w('"')
        }

        function l(t, e) {
            return t.s(e.get(["ad_feedback_beacon"], !1), e, {
                block: _
            }, {})
        }

        function _(t, e) {
            return t.w(' data-ad-feedback-beacon="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function f(t, e) {
            return t.w('data-prtbc="').f(e.get(["partial_view_beacon"], !1), e, "h").w('"')
        }

        function g(t, e) {
            return t.w('data-gnvbc="').f(e.get(["generic_view_beacon"], !1), e, "h").w('"')
        }

        function h(t, e) {
            return t.w("js-stream-roundup")
        }

        function p(t, e) {
            return t.w("\n").s(e.getPath(!1, ["images", "default"]), e, {
                block: w
            }, {}).w('\n<div class="strm-right Pos(r) Mstart(29%)"><div class="Pend(14px) ').x(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: z
            }, {}).w('">').x(e.getPath(!1, ["config", "ads", "sponsored_url"]), e, {
                block: W
            }, {}).w('\n<h3 class="Mb(4px) Mb(0px)--md1160 LineClamp(2,46px) Lh(21px)">\n                <a href="').f(e.get(["link"], !1), e, "h").w('" class="O(n):f C($m_blue):f D(b) ').nx(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: H
            }, {}).w(' js-stream-item-title js-content-title C($link) C($m_blue):h Td(n) Fz(17px) Fw(b)" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "hdln",
                elmt: "ct",
                ccode: N
            }).w(' target="_blank" rel="nofollow noopener noreferrer"><span').x(e.getPath(!1, ["config", "ui", "fixed_layout"]), e, {
                block: Z
            }, {}).w(">").f(e.get(["title"], !1), e, "h", ["s"]).w('</span><u class="Pos(a) T(0) Start(0) W(100%) H(100%) ').x(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: Y
            }, {}).w('"></u></a>\n            </h3>\n            <div>\n                ').x(e.get(["summary"], !1), e, {
                block: G
            }, {}).w("\n").nx(e.getPath(!1, ["config", "ui", "publisher_headline"]), e, {
                block: K
            }, {}).w("\n</div>\n        </div>\n        ").x(e.get(["cluster"], !1), e, {
                block: X
            }, {}).w("\n").x(e.getPath(!1, ["config", "ads", "feedback"]), e, {
                block: ht
            }, {}).w("\n</div>\n")
        }

        function w(t, e) {
            return t.w('\n<div class="strm-left Fl(start) Mend(18px) Pos(r) ').h("eq", e, {
                block: b
            }, {
                key: m,
                value: "video"
            }).w('">').x(e.getPath(!1, ["config", "ui", "endcard_cta"]), e, {
                block: y
            }, {}).w('\n<a href="').f(e.get(["link"], !1), e, "h").w('" class="streamImage Pos(r) D(ib) W(100%) ').h("eq", e, {
                block: M
            }, {
                key: C,
                value: "video"
            }).w('" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "img",
                elmt: "ct",
                ccode: D
            }).w(' rel="nofollow noopener noreferrer">').h("img", e, {}, {
                src: F,
                height: j,
                width: $,
                "class": "W(100%) H(a) BackgroundPic rounded-img",
                defer: L
            }).w("</a></div>\n    ")
        }

        function b(t, e) {
            return t.w("Bgc(#000) js-video-content")
        }

        function m(t, e) {
            return t.f(e.get(["type"], !1), e, "h")
        }

        function y(t, e) {
            return t.h("eq", e, {
                block: k
            }, {
                key: T,
                value: "video"
            })
        }

        function k(t, e) {
            return t.w('<div class="js-cstm-end-screen Pos(a) Ta-c W(100%) H(100%) Dn"><a target="_blank" href="').f(e.get(["link"], !1), e, "h").w('" rel="nofollow noopener noreferrer" class="D(ib) Ell Td(n) C(white) Bdc(white) Bds(s) Bdrs(2px) Bdw(t) Py(4px) Px(10px) Cur(p) Fz(12px) ').x(e.get(["viewer_eligible"], !1), e, {
                block: B
            }, {}).w('" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                rspns: "nav",
                elm: "btn",
                elmt: "cta",
                itc: "0",
                ccode: x
            }).w(">").x(e.get(["callToAction"], !1), e, {
                block: P
            }, {}).nx(e.get(["callToAction"], !1), e, {
                block: v
            }, {}).w("</a></div>")
        }

        function B(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function x(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function P(t, e) {
            return t.f(e.get(["callToAction"], !1), e, "h")
        }

        function v(t, e) {
            return t.h("i18n_string", e, {}, {
                _key: "LEARN_MORE"
            })
        }

        function T(t, e) {
            return t.f(e.get(["type"], !1), e, "h")
        }

        function M(t, e) {
            return t.w("js-video-target")
        }

        function C(t, e) {
            return t.f(e.get(["type"], !1), e, "h")
        }

        function D(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function F(t, e) {
            return t.f(e.get(["url"], !1), e, "h")
        }

        function j(t, e) {
            return t.f(e.get(["height"], !1), e, "h")
        }

        function $(t, e) {
            return t.f(e.get(["width"], !1), e, "h")
        }

        function L(t, e) {
            return t.f(e.get(["defer"], !1), e, "h")
        }

        function z(t, e) {
            return t.w("Pos(r)")
        }

        function W(t, e) {
            return t.w('\n<div class="Fw(b) Lh(17px) Mb(4px)">\n                <a class="Mend(4px) Pos(r) Z(1) Fz(13px) D(ib) Va(m) Td(n) C($sponsored) Tt(c)" href="').f(e.getPath(!1, ["config", "ads", "sponsored_url"]), e, "h").w('" rel="nofollow noopener noreferrer" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "itm",
                elmt: "sp",
                ccode: E
            }).w(">").x(e.get(["sponsoredByLabel"], !1), e, {
                "else": O,
                block: I
            }, {}).w('</a>\n                <a class="D(ib) Pos(r) Z(1) Va(m) Td(n) adlink C($sponsored)" href="').f(e.get(["adChoicesUrl"], !1), e, "h").w('" rel="nofollow noopener noreferrer" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "itm",
                elmt: "info",
                ccode: R
            }).w('><i class="Icon-Fp2 IconMoneyball Fz(13px) D(ib)"></i></a>\n                ').x(e.getPath(!1, ["config", "ui", "publisher_headline"]), e, {
                block: S
            }, {}).w("\n</div>\n        ")
        }

        function E(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function O(t, e) {
            return t.x(e.getPath(!1, ["config", "ads", "advt_text"]), e, {
                "else": V,
                block: q
            }, {})
        }

        function V(t, e) {
            return t.h("i18n_string", e, {}, {
                _key: "SPONSORED"
            })
        }

        function q(t, e) {
            return t.h("i18n_string", e, {}, {
                _key: "ADVERTISEMENT"
            })
        }

        function I(t, e) {
            return t.f(e.get(["sponsoredByLabel"], !1), e, "h", ["s"])
        }

        function R(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function S(t, e) {
            return t.s(e.get(["publisher"], !1), e, {
                block: U
            }, {})
        }

        function U(t, e) {
            return t.w('<a class="Fz(11px) D(ib) Td(n) C(gray_dark) Va(m) Fw(n) Mstart(9px)" href="').f(e.get(["link"], !1), e, "h").w('" rel="nofollow noopener noreferrer" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "itm",
                elmt: "ad",
                ccode: A
            }).w(">").f(e.getPath(!0, []), e, "h", ["s"]).w("</a>")
        }

        function A(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function H(t, e) {
            return t.w("Pos(r)")
        }

        function N(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function Z(t, e) {
            return t.w(' class="D(ib) LineClamp(2,46px)"')
        }

        function Y(t, e) {
            return t.w("strm-stretch")
        }

        function G(t, e) {
            return t.w('<p class="').nx(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: J
            }, {}).w(' stream-summary LineClamp(2,34px) Lh(17px) C($gray) Bfv(h) D(n)--md1160">').f(e.get(["summary"], !1), e, "h", ["s"]).w("</p>")
        }

        function J(t, e) {
            return t.w("Pos(r)")
        }

        function K(t, e) {
            return t.s(e.get(["publisher"], !1), e, {
                block: Q
            }, {})
        }

        function Q(t, e) {
            return t.w('<span class="Fz(11px) Td(n) C(gray_dark) Fw(n) D(ib) Mt(2px)">').f(e.getPath(!0, []), e, "h", ["s"]).w("</span>")
        }

        function X(t, e) {
            return t.w('\n<div class="Mt(8px) Mt(7px)--md1160 Ov(h)">\n            ').s(e.get(["cluster"], !1), e, {
                block: tt
            }, {}).w("\n</div>\n        ")
        }

        function tt(t, e) {
            return t.w("\n").h("lt", e, {
                block: et
            }, {
                key: e.get(["$idx"], !1),
                value: 2
            }).w("\n")
        }

        function et(t, e) {
            return t.w('\n<a href="').f(e.getPath(!0, ["link"]), e, "h").w('" class="O(n):f C($m_blue):f Pos(r) Mih(70px) Mih(0)--md1160').h("eq", e, {
                block: nt
            }, {
                key: e.get(["$idx"], !1),
                value: 0
            }).x(e.getPath(!1, ["image", "url"]), e, {
                block: rt
            }, {}).w(" Fl(start) W(50%) W(a)--md1160 strm-sl-link js-stream-item-title C($link) C($m_blue):h Td(n) Fz(12px) Bxz(bb)").h("eq", e, {
                block: ot
            }, {
                key: e.get(["$idx"], !1),
                value: 0
            }).w('" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "rhdln",
                elmt: "ct",
                ccode: at,
                t4: "rel",
                cposy: dt,
                pos: it
            }).w(' rel="nofollow noopener noreferrer">').x(e.get(["image"], !1), e, {
                block: st
            }, {}).w('<div class="D(ib)').x(e.getPath(!1, ["image", "url"]), e, {
                block: ft
            }, {}).w('"><div class="Mend(7px) Lh(15px) LineClamp(3,45px) Fw(b) D(i)--md1160">').f(e.getPath(!0, ["title"]), e, "h", ["s"]).w("</div>").s(e.getPath(!0, ["publisher"]), e, {
                block: gt
            }, {}).w("</div></a>\n            ")
        }

        function nt(t, e) {
            return t.w(" Mb(6px)--md1160")
        }

        function rt(t, e) {
            return t.w(" Pstart(82px) Pstart(0)--md1160")
        }

        function ot(t, e) {
            return t.w(" Pend(13px)")
        }

        function at(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function dt(t, e) {
            return t.f(e.getPath(!0, ["cposy"]), e, "h")
        }

        function it(t, e) {
            return t.f(e.getPath(!0, ["pos"]), e, "h")
        }

        function st(t, e) {
            return t.h("img", e, {}, {
                src: ct,
                height: ut,
                width: lt,
                defer: _t,
                "class": "Maw(100%) H(a) Mend(12px) Va(t) Pos(a) Start(0) rounded-img D(n)--md1160"
            })
        }

        function ct(t, e) {
            return t.f(e.getPath(!1, ["image", "url"]), e, "h")
        }

        function ut(t, e) {
            return t.f(e.getPath(!1, ["image", "height"]), e, "h")
        }

        function lt(t, e) {
            return t.f(e.getPath(!1, ["image", "width"]), e, "h")
        }

        function _t(t, e) {
            return t.f(e.getPath(!1, ["image", "defer"]), e, "h")
        }

        function ft(t, e) {
            return t.w(" W(100%)")
        }

        function gt(t, e) {
            return t.w('<span class="Fz(11px) Td(n) C(gray_dark) Fw(n) D(b) Mt(2px) Whs(pl) Tt(c) D(i)--md1160">').f(e.getPath(!0, []), e, "h", ["s"]).w("</span>")
        }

        function ht(t, e) {
            return t.p("td-applet-stream-atomic:item/ad_dislike", e, {})
        }
        return dust.register("td-applet-stream-atomic-templates-item-ad_clusters", e), e.__dustBody = !0, n.__dustBody = !0, r.__dustBody = !0, o.__dustBody = !0, a.__dustBody = !0, d.__dustBody = !0, i.__dustBody = !0, s.__dustBody = !0, c.__dustBody = !0, u.__dustBody = !0, l.__dustBody = !0, _.__dustBody = !0, f.__dustBody = !0, g.__dustBody = !0, h.__dustBody = !0, p.__dustBody = !0, w.__dustBody = !0, b.__dustBody = !0, m.__dustBody = !0, y.__dustBody = !0, k.__dustBody = !0, B.__dustBody = !0, x.__dustBody = !0, P.__dustBody = !0, v.__dustBody = !0, T.__dustBody = !0, M.__dustBody = !0, C.__dustBody = !0, D.__dustBody = !0, F.__dustBody = !0, j.__dustBody = !0, $.__dustBody = !0, L.__dustBody = !0, z.__dustBody = !0, W.__dustBody = !0, E.__dustBody = !0, O.__dustBody = !0, V.__dustBody = !0, q.__dustBody = !0, I.__dustBody = !0, R.__dustBody = !0, S.__dustBody = !0, U.__dustBody = !0, A.__dustBody = !0, H.__dustBody = !0, N.__dustBody = !0, Z.__dustBody = !0, Y.__dustBody = !0, G.__dustBody = !0, J.__dustBody = !0, K.__dustBody = !0, Q.__dustBody = !0, X.__dustBody = !0, tt.__dustBody = !0, et.__dustBody = !0, nt.__dustBody = !0, rt.__dustBody = !0, ot.__dustBody = !0, at.__dustBody = !0, dt.__dustBody = !0, it.__dustBody = !0, st.__dustBody = !0, ct.__dustBody = !0, ut.__dustBody = !0, lt.__dustBody = !0, _t.__dustBody = !0, ft.__dustBody = !0, gt.__dustBody = !0, ht.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/ad_clusters.dust"] = dust.cache["td-applet-stream-atomic:item/ad_clusters"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/ad_clusters"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-item-ad_dislike"]
});
YUI.add("td-applet-stream-atomic-templates-item-ad_dislike", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('<div class="Pos(a) End(-7px) ').h("eq", e, {
                "else": s,
                block: a
            }, {
                key: d,
                value: "fullWidthPromo"
            }).w(' W(30px) Mend(2px) Ta(end)">\n    <ul class="js-stream-side-buttons js-stream-actions">\n         <li class="ActionDislike Lh(10px)">\n            <a href="javascript:void(0)" class="js-stream-dislike-button rapid-noclick-resp rapidnofollow Td(n) O(n) C($c_icon) P(10px)" role="button" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                ccode: i,
                t4: "ctrl",
                elm: "btn",
                elmt: "op",
                itc: "1",
                rspns: "op"
            }).w('><b aria-live="polite" class="').x(e.getPath(!1, ["config", "ui", "show_tooltips"]), e, {
                "else": n,
                block: c
            }, {}).w('">').h("i18n_string", e, {}, {
                _key: "DISLIKE"
            }).w('</b><i class="Icon-Fp2 IconActionCross Fz(16px) ').x(e.getPath(!1, ["config", "ads", "feedback_drawer"]), e, {
                "else": o,
                block: r
            }, {}).w('"></i></a>\n        </li>\n    </ul>\n</div>\n')
        }

        function s(t, e) {
            return t.w(" T(0) ")
        }

        function a(t, e) {
            return t.w(" Px(3px) Py(3px) T(5px) ")
        }

        function d(t, e) {
            return t.f(e.get(["templateType"], !1), e, "h")
        }

        function i(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function n(t, e) {
            return t.w("Hidden")
        }

        function c(t, e) {
            return t.w("ActionTooltip Pos(a) Bd($bdr) Bdrs(3px) Bgc(#fff) Bxsh($menuShadow) T(-10px) End(-38px)! Py(5px) js-stream-dislike-button>Start(50%) js-stream-dislike-button:h>Start(a) C(#000)")
        }

        function o(t, e) {
            return t.w("C(#000):h js-stream-ad_D(n) js-stream-ad:h_D(i)")
        }

        function r(t, e) {
            return t.w("D(i)")
        }
        return dust.register("td-applet-stream-atomic-templates-item-ad_dislike", e), e.__dustBody = !0, s.__dustBody = !0, a.__dustBody = !0, d.__dustBody = !0, i.__dustBody = !0, n.__dustBody = !0, c.__dustBody = !0, o.__dustBody = !0, r.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/ad_dislike.dust"] = dust.cache["td-applet-stream-atomic:item/ad_dislike"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/ad_dislike"] = function(t, s) {
        t = t || {}, dust.render(e, t, s)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-item-ad_dislike_sm", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('<div class="Pos(a) End(-7px) ').h("eq", e, {
                "else": s,
                block: i
            }, {
                key: n,
                value: "fullWidthPromo"
            }).w(' W(30px) Mend(2px) Ta(end)">\n    <ul class="js-stream-side-buttons js-stream-actions">\n         <li class="ActionDislike Lh(10px)">\n            <a href="javascript:void(0)" class="js-stream-dislike-button rapid-noclick-resp rapidnofollow Td(n) O(n) C($c_icon) P(10px)" role="button" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                ccode: o,
                t4: "ctrl",
                elm: "btn",
                elmt: "op",
                itc: "1",
                rspns: "op"
            }).w('><b aria-live="polite" class="').x(e.getPath(!1, ["config", "ui", "show_tooltips"]), e, {
                "else": c,
                block: r
            }, {}).w('">').h("i18n_string", e, {}, {
                _key: "DISLIKE"
            }).w('</b><i class="Icon-Fp2 IconActionCross Fz(16px) ').x(e.getPath(!1, ["config", "ads", "feedback_drawer"]), e, {
                "else": u,
                block: l
            }, {}).w('"></i></a>\n        </li>\n    </ul>\n</div>\n')
        }

        function s(t, e) {
            return t.w(" ").x(e.get(["videoCard"], !1), e, {
                "else": a,
                block: d
            }, {}).w(" ")
        }

        function a(t, e) {
            return t.w("T(0)")
        }

        function d(t, e) {
            return t.w("T(3px)")
        }

        function i(t, e) {
            return t.w(" Px(3px) Py(3px) T(5px) ")
        }

        function n(t, e) {
            return t.f(e.get(["templateType"], !1), e, "h")
        }

        function o(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function c(t, e) {
            return t.w("Hidden")
        }

        function r(t, e) {
            return t.w("ActionTooltip Pos(a) Bd($bdr) Bdrs(3px) Bgc(#fff) Bxsh($menuShadow) T(-10px) End(-38px)! Py(5px) js-stream-dislike-button>Start(50%) js-stream-dislike-button:h>Start(a) C(#000)")
        }

        function u(t, e) {
            return t.w("C(#000):h js-stream-ad_D(n) js-stream-ad:h_D(i)")
        }

        function l(t, e) {
            return t.w("D(i)")
        }
        return dust.register("td-applet-stream-atomic-templates-item-ad_dislike_sm", e), e.__dustBody = !0, s.__dustBody = !0, a.__dustBody = !0, d.__dustBody = !0, i.__dustBody = !0, n.__dustBody = !0, o.__dustBody = !0, c.__dustBody = !0, r.__dustBody = !0, u.__dustBody = !0, l.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/ad_dislike_sm.dust"] = dust.cache["td-applet-stream-atomic:item/ad_dislike_sm"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/ad_dislike_sm"] = function(t, s) {
        t = t || {}, dust.render(e, t, s)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-item-ad_dislike_v2", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('<div class="Fl(end) W(30px) Ta(end) Mend(-8px)">\n    <ul class="js-stream-side-buttons js-stream-actions">\n         <li class="ActionDislike">\n            <a href="javascript:void(0)" class="js-stream-dislike-button rapid-noclick-resp rapidnofollow Td(n) O(n) C($c_icon) P(10px)" role="button" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                ccode: s,
                t4: "ctrl",
                elm: "btn",
                elmt: "op",
                itc: "1",
                rspns: "op"
            }).w('><b aria-live="polite" class="').x(e.getPath(!1, ["config", "ui", "show_tooltips"]), e, {
                "else": a,
                block: i
            }, {}).w('">').h("i18n_string", e, {}, {
                _key: "DISLIKE"
            }).w('</b><i class="Icon-Fp2 IconActionCross Fz(16px) C(#000):h js-stream-ad_D(n) js-stream-ad:h_D(i)"></i></a>\n        </li>\n    </ul>\n</div>')
        }

        function s(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function a(t, e) {
            return t.w("Hidden")
        }

        function i(t, e) {
            return t.w("ActionTooltip Pos(a) Bd($bdr) Bdrs(3px) Bgc(#fff) Bxsh($menuShadow) T(-4px) End(-38px)! Py(8px) js-stream-dislike-button>Start(50%) js-stream-dislike-button:h>Start(a) C(#000)")
        }
        return dust.register("td-applet-stream-atomic-templates-item-ad_dislike_v2", e), e.__dustBody = !0, s.__dustBody = !0, a.__dustBody = !0, i.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/ad_dislike_v2.dust"] = dust.cache["td-applet-stream-atomic:item/ad_dislike_v2"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/ad_dislike_v2"] = function(t, s) {
        t = t || {}, dust.render(e, t, s)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-item-ad_sm", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('<li class="item Bgc(#fff)').x(e.get(["smad"], !1), e, {
                block: n
            }, {}).w(" ").x(e.get(["beacon"], !1), e, {
                block: o
            }, {}).w(" ").x(e.getPath(!1, ["config", "ads", "adblock"]), e, {
                block: i
            }, {}).w("js-stream-ad ").x(e.get(["isVideo"], !1), e, {
                block: a
            }, {}).w(" Mb-content ").x(e.getPath(!1, ["config", "ads", "inline_video_lp"]), e, {
                "else": s,
                block: u
            }, {}).w('" ').x(e.get(["beacon"], !1), e, {
                block: _
            }, {}).x(e.get(["cpi"], !1), e, {
                block: l
            }, {}).s(e.get(["imprTrackingUrl"], !1), e, {
                block: f
            }, {}).x(e.get(["imprTrackingUrls"], !1), e, {
                block: g
            }, {}).x(e.getPath(!1, ["config", "ads", "feedback"]), e, {
                block: p
            }, {}).w(' data-uuid="').f(e.get(["id"], !1), e, "h").w('" ').x(e.get(["partial_view_beacon"], !1), e, {
                block: b
            }, {}).w(" ").x(e.get(["asyncBeacon"], !1), e, {
                block: h
            }, {}).x(e.get(["mediaFiles"], !1), e, {
                block: x
            }, {}).w(" ").x(e.get(["partial_view_beacon"], !1), e, {
                block: y
            }, {}).w(" ").x(e.get(["generic_view_beacon"], !1), e, {
                block: m
            }, {}).w(">").x(e.get(["smad"], !1), e, {
                block: k
            }, {}).x(e.get(["videoCard"], !1), e, {
                block: P
            }, {}).nx(e.get(["smad"], !1), e, {
                block: S
            }, {}).nx(e.get(["smad"], !1), e, {
                "else": O,
                block: $
            }, {}).w("</li>\n")
        }

        function n(t, e) {
            return t.w(" js-stream-smad P(0)")
        }

        function o(t, e) {
            return t.w("js-stream-ad-noview ")
        }

        function i(t, e) {
            return t.w("ysab ")
        }

        function a(t, e) {
            return t.nx(e.get(["smad"], !1), e, {
                block: d
            }, {}).x(e.get(["vast_xml"], !1), e, {
                block: r
            }, {})
        }

        function d(t, e) {
            return t.w("js-video-content")
        }

        function r(t, e) {
            return t.w(" lp-unattached")
        }

        function s(t, e) {
            return t.x(e.get(["vast_xml"], !1), e, {
                block: c
            }, {})
        }

        function c(t, e) {
            return t.w("D(n)")
        }

        function u(t, e) {
            return t
        }

        function _(t, e) {
            return t.w('data-beacon="').f(e.get(["beacon"], !1), e, "h").w('"')
        }

        function l(t, e) {
            return t.w(" ")
        }

        function f(t, e) {
            return t.w(' data-impr-beacon="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function g(t, e) {
            return t.w(' data-thirdparty-beacons="').f(e.get(["imprTrackingUrls"], !1), e, "h", ["js"]).w('"')
        }

        function p(t, e) {
            return t.s(e.get(["ad_feedback_beacon"], !1), e, {
                block: w
            }, {})
        }

        function w(t, e) {
            return t.w(' data-ad-feedback-beacon="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function b(t, e) {
            return t.w('data-prtbc="').f(e.get(["partial_view_beacon"], !1), e, "h").w('"')
        }

        function h(t, e) {
            return t.w('data-asyncBeacon="').f(e.get(["asyncBeacon"], !1), e, "h").w('"')
        }

        function x(t, e) {
            return t.w("data-vast=\"<?xml version='1.0' encoding='UTF-8'?><VAST version='2.0'><Ad id='gemini_video_ad'><InLine><AdSystem>Yahoo<\\/AdSystem><AdTitle><![CDATA[").f(e.get(["videoAdTitle"], !1), e, "h").w("]]><\\/AdTitle><Advertiser><![CDATA[").f(e.get(["videoAdProvider"], !1), e, "h").w("]]><\\/Advertiser>").f(e.get(["videoAdImpressionUrl"], !1), e, "h").w("<Creatives><Creative><Linear><Duration>").f(e.get(["videoAdDuration"], !1), e, "h").w("<\\/Duration><TrackingEvents><Tracking event='start'><![CDATA[").f(e.get(["videoAdStart"], !1), e, "h").w("]]><\\/Tracking><Tracking event='onesec'><![CDATA[").f(e.get(["videoAdImpressionOneSec"], !1), e, "h").w("]]><\\/Tracking><Tracking event='threesec'><![CDATA[").f(e.get(["videoAdImpressionThreeSec"], !1), e, "h").w("]]><\\/Tracking><Tracking event='firstQuartile'><![CDATA[").f(e.get(["videoAdFirstQuartile"], !1), e, "h").w("]]><\\/Tracking><Tracking event='midpoint'><![CDATA[").f(e.get(["videoAdMidPoint"], !1), e, "h").w("]]><\\/Tracking><Tracking event='thirdQuartile'><![CDATA[").f(e.get(["videoAdThirdQuartile"], !1), e, "h").w("]]><\\/Tracking><Tracking event='complete'><![CDATA[").f(e.get(["videoAdComplete"], !1), e, "h").w("]]><\\/Tracking><\\/TrackingEvents><AdParameters \\/><VideoClicks><ClickThrough><![CDATA[").f(e.get(["videoAdClickThrough"], !1), e, "h").w("]]><\\/ClickThrough><\\/VideoClicks><MediaFiles>").f(e.get(["mediaFiles"], !1), e, "h").w('<\\/MediaFiles><\\/Linear><\\/Creative><\\/Creatives><\\/InLine><\\/Ad><\\/VAST>"')
        }

        function y(t, e) {
            return t.w('data-prtbc="').f(e.get(["partial_view_beacon"], !1), e, "h").w('"')
        }

        function m(t, e) {
            return t.w('data-gnvbc="').f(e.get(["generic_view_beacon"], !1), e, "h").w('"')
        }

        function k(t, e) {
            return t.w('<div class="Bgc(#000) C(#fff) Fz(10px) Cf P(2px)"><span class="Pstart(6px) Va(m)">').h("i18n_string", e, {}, {
                _key: "SM_ADVERTISEMENT"
            }).w(' </span> <a class="D(ib) Fl(end) Pstart(20px) Pend(8px) C(#fff)" href="').f(e.get(["adChoicesUrl"], !1), e, "h").w('" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "itm",
                elmt: "info",
                ccode: B
            }).w("><span>").h("i18n_string", e, {}, {
                _key: "ADVERTISEMENT"
            }).w(' </span> <i class="Icon-Fp2 IconMoneyball Fz(13px) D(ib) Pstart(2px) Va(m)"></i></a></div><div class="js-smad-container ').f(e.get(["cssclass"], !1), e, "h").w(" Pos(r) D(b) H(100%) ").x(e.get(["isVideo"], !1), e, {
                block: v
            }, {}).w('"><div class="js-smad-clip Pos(a) T(0) Start(0) W(100%) H(100%) Z(1) Ov(h)">').s(e.get(["prtimage"], !1), e, {
                block: T
            }, {})
        }

        function B(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function v(t, e) {
            return t.w("js-video-content")
        }

        function T(t, e) {
            return t.h("img", e, {}, {
                src: C,
                height: "auto",
                width: "100%",
                "class": "js-video-target js-smad-image js-vertical-video-ad Pos(f) Start(0) TranslateZ(0)",
                defer: A
            })
        }

        function C(t, e) {
            return t.f(e.get(["url"], !1), e, "h")
        }

        function A(t, e) {
            return t.f(e.get(["defer"], !1), e, "h")
        }

        function P(t, e) {
            return t.w('<div class="Pos(r)">').s(e.get(["image"], !1), e, {
                block: F
            }, {})
        }

        function F(t, e) {
            return t.h("img", e, {}, {
                src: D,
                height: "auto",
                width: "100%",
                "class": "js-video-target",
                defer: I
            })
        }

        function D(t, e) {
            return t.f(e.get(["url"], !1), e, "h")
        }

        function I(t, e) {
            return t.f(e.get(["defer"], !1), e, "h")
        }

        function S(t, e) {
            return t.w('<div class="').nx(e.get(["videoCard"], !1), e, {
                block: M
            }, {}).w('">').nx(e.get(["videoCard"], !1), e, {
                block: j
            }, {})
        }

        function M(t, e) {
            return t.x(e.get(["image"], !1), e, {
                block: V
            }, {}).w(" ").x(e.get(["isVideo"], !1), e, {
                block: E
            }, {}).w(" Pos(r)")
        }

        function V(t, e) {
            return t.w("Pstart(120px) Pstart(100px)--maw370 Mih(103px) Mih(83px)--maw370")
        }

        function E(t, e) {
            return t.w("js-video-target")
        }

        function j(t, e) {
            return t.s(e.get(["image"], !1), e, {
                block: z
            }, {})
        }

        function z(t, e) {
            return t.h("img", e, {}, {
                src: U,
                height: R,
                width: L,
                "class": "Pos(a) Start(0) T(3px) Bdrs(2px) Mend(20px) W(100px) W(80px)--maw370 H(100px) H(80px)--maw370",
                defer: N
            }).p("td-applet-stream-atomic:item/play_icon_sm", e, {})
        }

        function U(t, e) {
            return t.f(e.get(["url"], !1), e, "h")
        }

        function R(t, e) {
            return t.f(e.get(["height"], !1), e, "h")
        }

        function L(t, e) {
            return t.f(e.get(["width"], !1), e, "h")
        }

        function N(t, e) {
            return t.f(e.get(["defer"], !1), e, "h")
        }

        function O(t, e) {
            return t.w('<a class="D(b)').x(e.get(["app_install"], !1), e, {
                block: W
            }, {}).w('" href="').f(e.get(["link"], !1), e, "h").w('" ').nx(e.get(["app_install"], !1), e, {
                block: H
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "img",
                elmt: "ct",
                ccode: q,
                slk: "sponsored_moments_ad_tapped"
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: Q
            }, {}).w(" ").x(e.get(["viewer_eligible"], !1), e, {
                block: Z
            }, {}).w(">").nx(e.getPath(!1, ["config", "ads", "smad", "disableCta"]), e, {
                block: K
            }, {}).w('<u class="Pos(a) T(0) End(0) Start(0) B(0)"></u></a>').x(e.get(["isVideo"], !1), e, {
                block: G
            }, {}).w("</div></div>")
        }

        function W(t, e) {
            return t.w(" js-stream-ad-app-link rapidnofollow")
        }

        function H(t, e) {
            return t.w('target="_blank"')
        }

        function q(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function Q(t, e) {
            return t.w('rel="nofollow"')
        }

        function Z(t, e) {
            return t.w('data-orig-link="/"')
        }

        function K(t, e) {
            return t.x(e.get(["callToAction"], !1), e, {
                block: Y
            }, {})
        }

        function Y(t, e) {
            return t.w('<span class="js-smad-cta D(b) Pos(f) B(0) Start(0) Pt(20px) Pstart(8px) Pb(20px) C(#ffffff.6) Fw(14px) W(100%) TranslateZ(0)" style="background:linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.2) 100%)">').h("i18n_string", e, {}, {
                _key: "TAP_TO"
            }).w(" ").f(e.get(["callToAction"], !1), e, "h").w("</span>")
        }

        function G(t, e) {
            return t.w('<button class="mute-btn mute-on Pos(f) O(n) End(0px) B(10px) W(40px) H(40px) D(ib) Bgr(nr) Bgz(65%) Bgp(50%,50%) TranslateZ(0)" aria-label=\'').h("i18n_string", e, {}, {
                _key: "UNMUTE"
            }).w("' title='").h("i18n_string", e, {}, {
                _key: "CLICK_UNMUTE"
            }).w('\' style="display:none;"></button>')
        }

        function $(t, e) {
            return t.w('<a href="').f(e.get(["link"], !1), e, "h").w('" class="streamImage D(b) ').x(e.get(["image"], !1), e, {
                "else": J,
                block: X
            }, {}).w(" Mt(-3px) Td(n) Td(n):f ").x(e.get(["isVideo"], !1), e, {
                block: tt
            }, {}).w(" ").x(e.get(["viewer_eligible"], !1), e, {
                block: et
            }, {}).w(" ").x(e.get(["videoCard"], !1), e, {
                block: nt
            }, {}).x(e.get(["app_install"], !1), e, {
                block: ot
            }, {}).w('"').nx(e.get(["app_install"], !1), e, {
                block: it
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "img",
                elmt: "ct",
                ccode: at
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: dt
            }, {}).w(" ").x(e.get(["viewer_eligible"], !1), e, {
                block: rt
            }, {}).w('>\n                <h3 class="M(0) Mb(4px) Mt(-2px) Fw(b) ').x(e.get(["videoCard"], !1), e, {
                "else": st,
                block: ct
            }, {}).w(" Lh(1.3) LineClamp(3,4em) LineClamp(2,2.7em)--maw370 ").x(e.get(["videoCard"], !1), e, {
                "else": ut,
                block: _t
            }, {}).w(" ").x(e.getPath(!1, ["config", "ads", "feedback_drawer"]), e, {
                block: lt
            }, {}).w('">').f(e.get(["title"], !1), e, "h", ["s"]).w("</h3>").x(e.get(["publisher"], !1), e, {
                block: ft
            }, {}).w('<u class="Pos(a) T(0) End(0) Start(0) B(0)"></u></a>').x(e.getPath(!1, ["config", "ads", "sponsored_url"]), e, {
                block: wt
            }, {}).w("<div>").x(e.get(["app_install"], !1), e, {
                block: It
            }, {}).w("</div>").x(e.getPath(!1, ["config", "ads", "feedback_drawer"]), e, {
                block: Zt
            }, {}).w("</div>").x(e.getPath(!1, ["config", "ads", "inline_video_lp"]), e, {
                block: Kt
            }, {}).x(e.get(["videoCard"], !1), e, {
                block: Gt
            }, {})
        }

        function J(t, e) {
            return t.w("Va(m)")
        }

        function X(t, e) {
            return t.w("Va(t)")
        }

        function tt(t, e) {
            return t.w(" js-video-image")
        }

        function et(t, e) {
            return t.w("js-content-viewer js-fire-beacon")
        }

        function nt(t, e) {
            return t.w("W(100%) Pos(a) Start(0) B(0) Bgc(#000000.2) Py(2px)")
        }

        function ot(t, e) {
            return t.w(" rapidnofollow")
        }

        function it(t, e) {
            return t.w(' target="_blank"')
        }

        function at(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function dt(t, e) {
            return t.w('rel="nofollow"')
        }

        function rt(t, e) {
            return t.w('data-orig-link="/"')
        }

        function st(t, e) {
            return t.w("Fz(16px) Fz(15px)--maw370")
        }

        function ct(t, e) {
            return t.w("Fz(14px) Fz(14px)--maw370 Pstart(8px)")
        }

        function ut(t, e) {
            return t.w("C(#000)")
        }

        function _t(t, e) {
            return t.w("C(#fff)")
        }

        function lt(t, e) {
            return t.w("Mend(20px)")
        }

        function ft(t, e) {
            return t.w('<p class="').x(e.get(["videoCard"], !1), e, {
                "else": gt,
                block: pt
            }, {}).w(' Ell Mb(2px)">').f(e.get(["publisher"], !1), e, "h", ["s"]).w("</p>")
        }

        function gt(t, e) {
            return t.w("Fz(12px) C(#959595)")
        }

        function pt(t, e) {
            return t.w("Fz(10px) C(#fff) Pstart(8px)")
        }

        function wt(t, e) {
            return t.nx(e.get(["videoCard"], !1), e, {
                block: bt
            }, {}).w('<a class="D(ib) Va(m) Td(n) ').x(e.get(["videoCard"], !1), e, {
                "else": Bt,
                block: vt
            }, {}).w('" href="').f(e.get(["adChoicesUrl"], !1), e, "h").w('" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "itm",
                elmt: "info",
                ccode: Tt
            }).w(">").x(e.get(["videoCard"], !1), e, {
                block: Ct
            }, {}).w('<i class="Icon-Fp2 IconMoneyball ').x(e.get(["videoCard"], !1), e, {
                "else": At,
                block: Pt
            }, {}).w(' D(ib) Pstart(6px) Va(m)"></i></a>').x(e.get(["videoCard"], !1), e, {
                block: Ft
            }, {}).x(e.get(["viewer_eligible"], !1), e, {
                block: Dt
            }, {})
        }

        function bt(t, e) {
            return t.w('<a href="').f(e.getPath(!1, ["config", "ads", "sponsored_url"]), e, "h").w('" class="Fz(11px) C(#959595) Pos(r) Td(n)" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "img",
                elmt: "ct",
                ccode: ht
            }).w(">").x(e.get(["sponsoredByLabel"], !1), e, {
                "else": xt,
                block: kt
            }, {}).w("</a>")
        }

        function ht(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function xt(t, e) {
            return t.x(e.getPath(!1, ["config", "ads", "advt_text"]), e, {
                "else": yt,
                block: mt
            }, {})
        }

        function yt(t, e) {
            return t.h("i18n_string", e, {}, {
                _key: "SPONSORED"
            })
        }

        function mt(t, e) {
            return t.h("i18n_string", e, {}, {
                _key: "ADVERTISEMENT"
            })
        }

        function kt(t, e) {
            return t.f(e.get(["sponsoredByLabel"], !1), e, "h", ["s"])
        }

        function Bt(t, e) {
            return t.w("C(#959595) Pos(r)")
        }

        function vt(t, e) {
            return t.w("Pos(a) Start(0px) T(0) C(#ffffff) Pstart(6px)")
        }

        function Tt(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function Ct(t, e) {
            return t.h("i18n_string", e, {}, {
                _key: "ADVERTISEMENT"
            })
        }

        function At(t, e) {
            return t.w("Fz(13px)")
        }

        function Pt(t, e) {
            return t.w("Fz(18px) Fw(b) ")
        }

        function Ft(t, e) {
            return t.w('<button class="mute-btn mute-on Pos(a) O(n) End(0px) B(10px) W(40px) H(40px) D(ib) Bgr(nr) Bgz(65%) Bgp(50%,50%)" aria-label=\'').h("i18n_string", e, {}, {
                _key: "UNMUTE"
            }).w("' title='").h("i18n_string", e, {}, {
                _key: "CLICK_UNMUTE"
            }).w("'></button>")
        }

        function Dt(t, e) {
            return t.w('<span class="D(ib) icon-lightning Mstart(6px) Va(m)"></span>')
        }

        function It(t, e) {
            return t.x(e.get(["ratings"], !1), e, {
                block: St
            }, {}).nx(e.getPath(!1, ["config", "ads", "disableReview"]), e, {
                block: Nt
            }, {}).x(e.get(["callToAction"], !1), e, {
                block: Wt
            }, {})
        }

        function St(t, e) {
            return t.w('<div class="C(#ffc208) D(ib) Mt(15px) Fz(12px)" aria-label="').h("i18n_string", e, {}, {
                _key: "PROMO_ARIA_STAR_RATING"
            }).w('">').s(e.get(["ratings"], !1), e, {
                "else": Mt,
                block: Vt
            }, {}).w("</div>")
        }

        function Mt(t, e) {
            return t.w('<i class="Icon-Fp2 IconStarFilled Va(t)"></i><i class="Icon-Fp2 IconStarFilled Va(t)"></i><i class="Icon-Fp2 IconStarFilled Va(t)"></i><i class="Icon-Fp2 IconStarFilled Va(t)"></i><i class="Icon-Fp2 IconStarFilled Va(t)"></i>')
        }

        function Vt(t, e) {
            return t.h("eq", e, {
                block: Et
            }, {
                key: jt,
                value: "1"
            }).h("eq", e, {
                block: zt
            }, {
                key: Ut,
                value: "0"
            }).h("eq", e, {
                block: Rt
            }, {
                key: Lt,
                value: "0.5"
            })
        }

        function Et(t, e) {
            return t.w('<i class="Icon-Fp2 IconStarFilled Va(t)"></i>')
        }

        function jt(t, e) {
            return t.f(e.get(["rating"], !1), e, "h")
        }

        function zt(t, e) {
            return t.w('<i class="Icon-Fp2 IconStarFilled Va(t) C(#fcf8e3)"></i>')
        }

        function Ut(t, e) {
            return t.f(e.get(["rating"], !1), e, "h")
        }

        function Rt(t, e) {
            return t.w('<span class="Pos(r) D(ib) H(12px)"><i class="Icon-Fp2 IconStarFilled Pos(a) W(6px) Ov(h)"></i></span>')
        }

        function Lt(t, e) {
            return t.f(e.get(["rating"], !1), e, "h")
        }

        function Nt(t, e) {
            return t.x(e.get(["appReviews"], !1), e, {
                block: Ot
            }, {})
        }

        function Ot(t, e) {
            return t.w('<span class="C(#959595) Fz(xs) Mt(5px) Mstart(10px) D(ib)">(').f(e.get(["appReviews"], !1), e, "h").w(")</span>")
        }

        function Wt(t, e) {
            return t.w('<span class="D(b) Va(t) Px(6px)--maw370 Fl(end) Bdrs(2px) Px(8px) Py(6px) Fz(13px) ').h("eq", e, {
                "else": Ht,
                block: qt
            }, {
                key: Qt,
                value: "ios"
            }).w('">').f(e.get(["callToAction"], !1), e, "h").w("</span>")
        }

        function Ht(t, e) {
            return t.w("C(#fff) Bgc(#009a57) ")
        }

        function qt(t, e) {
            return t.w("Bdc(#188fff) C(#188fff) Bdw(2px) Bds(s) ")
        }

        function Qt(t, e) {
            return t.f(e.getPath(!1, ["config", "ads", "promoAds", "ua"]), e, "h")
        }

        function Zt(t, e) {
            return t.p("td-applet-stream-atomic:item/ad_dislike_sm", e, {})
        }

        function Kt(t, e) {
            return t.x(e.get(["vast_xml"], !1), e, {
                block: Yt
            }, {})
        }

        function Yt(t, e) {
            return t.w('<div class="lp-spinner D(n) Bgi($animatedSpinner) Pos(a) H(40px) W(40px) Bgr(nr) T(50%) Start(50%) Mstart(-20px) Mt(-33px)"></div><div id="player-').f(e.get(["id"], !1), e, "h").w('" class="lp-target D(n)" style="height:0 !important; padding-bottom: 56.25% !important;"></div>')
        }

        function Gt(t, e) {
            return t.w("</div>")
        }
        return dust.register("td-applet-stream-atomic-templates-item-ad_sm", e), e.__dustBody = !0, n.__dustBody = !0, o.__dustBody = !0, i.__dustBody = !0, a.__dustBody = !0, d.__dustBody = !0, r.__dustBody = !0, s.__dustBody = !0, c.__dustBody = !0, u.__dustBody = !0, _.__dustBody = !0, l.__dustBody = !0, f.__dustBody = !0, g.__dustBody = !0, p.__dustBody = !0, w.__dustBody = !0, b.__dustBody = !0, h.__dustBody = !0, x.__dustBody = !0, y.__dustBody = !0, m.__dustBody = !0, k.__dustBody = !0, B.__dustBody = !0, v.__dustBody = !0, T.__dustBody = !0, C.__dustBody = !0, A.__dustBody = !0, P.__dustBody = !0, F.__dustBody = !0, D.__dustBody = !0, I.__dustBody = !0, S.__dustBody = !0, M.__dustBody = !0, V.__dustBody = !0, E.__dustBody = !0, j.__dustBody = !0, z.__dustBody = !0, U.__dustBody = !0, R.__dustBody = !0, L.__dustBody = !0, N.__dustBody = !0, O.__dustBody = !0, W.__dustBody = !0, H.__dustBody = !0, q.__dustBody = !0, Q.__dustBody = !0, Z.__dustBody = !0, K.__dustBody = !0, Y.__dustBody = !0, G.__dustBody = !0, $.__dustBody = !0, J.__dustBody = !0, X.__dustBody = !0, tt.__dustBody = !0, et.__dustBody = !0, nt.__dustBody = !0, ot.__dustBody = !0, it.__dustBody = !0, at.__dustBody = !0, dt.__dustBody = !0, rt.__dustBody = !0, st.__dustBody = !0, ct.__dustBody = !0, ut.__dustBody = !0, _t.__dustBody = !0, lt.__dustBody = !0, ft.__dustBody = !0, gt.__dustBody = !0, pt.__dustBody = !0, wt.__dustBody = !0, bt.__dustBody = !0, ht.__dustBody = !0, xt.__dustBody = !0, yt.__dustBody = !0, mt.__dustBody = !0, kt.__dustBody = !0, Bt.__dustBody = !0, vt.__dustBody = !0, Tt.__dustBody = !0, Ct.__dustBody = !0, At.__dustBody = !0, Pt.__dustBody = !0, Ft.__dustBody = !0, Dt.__dustBody = !0, It.__dustBody = !0, St.__dustBody = !0, Mt.__dustBody = !0, Vt.__dustBody = !0, Et.__dustBody = !0, jt.__dustBody = !0, zt.__dustBody = !0, Ut.__dustBody = !0, Rt.__dustBody = !0, Lt.__dustBody = !0, Nt.__dustBody = !0, Ot.__dustBody = !0, Wt.__dustBody = !0, Ht.__dustBody = !0, qt.__dustBody = !0, Qt.__dustBody = !0, Zt.__dustBody = !0, Kt.__dustBody = !0, Yt.__dustBody = !0, Gt.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/ad_sm.dust"] = dust.cache["td-applet-stream-atomic:item/ad_sm"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/ad_sm"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-item-play_icon_sm", "td-applet-stream-atomic-templates-item-ad_dislike_sm"]
});
YUI.add("td-applet-stream-atomic-templates-item-ad_tb", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('<li class="item Bgc(#fff) ').x(e.get(["beacon"], !1), e, {
                block: n
            }, {}).w(" ").x(e.getPath(!1, ["config", "ads", "adblock"]), e, {
                block: i
            }, {}).w("js-stream-ad ").x(e.get(["isVideo"], !1), e, {
                block: d
            }, {}).w(" Mb-content ").x(e.getPath(!1, ["config", "ads", "inline_video_lp"]), e, {
                "else": r,
                block: c
            }, {}).w('" ').x(e.get(["beacon"], !1), e, {
                block: s
            }, {}).x(e.get(["cpi"], !1), e, {
                block: u
            }, {}).s(e.get(["imprTrackingUrl"], !1), e, {
                block: _
            }, {}).x(e.get(["imprTrackingUrls"], !1), e, {
                block: l
            }, {}).x(e.getPath(!1, ["config", "ads", "feedback"]), e, {
                block: g
            }, {}).w(' data-uuid="').f(e.get(["id"], !1), e, "h").w('" ').x(e.get(["partial_view_beacon"], !1), e, {
                block: p
            }, {}).x(e.get(["mediaFiles"], !1), e, {
                block: h
            }, {}).w(" ").x(e.get(["partial_view_beacon"], !1), e, {
                block: w
            }, {}).w(" ").x(e.get(["generic_view_beacon"], !1), e, {
                block: m
            }, {}).w('><div class="Pos(r) Mih(143px) Mih(163px)--miw1024').x(e.get(["image"], !1), e, {
                block: b
            }, {}).x(e.get(["isVideo"], !1), e, {
                block: y
            }, {}).w('">\n').s(e.get(["image"], !1), e, {
                block: v
            }, {}).w('<a href="').f(e.get(["link"], !1), e, "h").w('" class="streamImage D(b) ').x(e.get(["image"], !1), e, {
                "else": j,
                block: I
            }, {}).w(" Mt(-3px) Td(n) Td(n):f ").x(e.get(["isVideo"], !1), e, {
                block: L
            }, {}).w(" ").x(e.get(["viewer_eligible"], !1), e, {
                block: E
            }, {}).w('" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "img",
                elmt: "ct",
                ccode: U
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: z
            }, {}).w(" ").x(e.get(["viewer_eligible"], !1), e, {
                block: H
            }, {}).w('>\n                <h3 class="M(0) Mb(4px) Mt(-2px) Fw(b) Fz(21px) Lh(1.3) LineClamp(2,2.7em)--miw1024 LineClamp(3,4em) Bfv(h) C(#000)').x(e.getPath(!1, ["config", "ads", "feedback_drawer"]), e, {
                block: W
            }, {}).w('">').f(e.get(["title"], !1), e, "h", ["s"]).w('</h3><u class="Pos(a) T(0) End(0) Start(0) B(0)"></u></a><div>').x(e.get(["summary"], !1), e, {
                block: O
            }, {}).x(e.get(["publisher"], !1), e, {
                block: Q
            }, {}).x(e.getPath(!1, ["config", "ads", "sponsored_url"]), e, {
                block: N
            }, {}).w("</div>").x(e.getPath(!1, ["config", "ads", "feedback_drawer"]), e, {
                block: X
            }, {}).w("</div>").x(e.getPath(!1, ["config", "ads", "inline_video_lp"]), e, {
                block: Z
            }, {}).w("\n</li>\n")
        }

        function n(t, e) {
            return t.w("js-stream-ad-noview ")
        }

        function i(t, e) {
            return t.w("ysab ")
        }

        function d(t, e) {
            return t.w("js-video-content").x(e.get(["vast_xml"], !1), e, {
                block: a
            }, {})
        }

        function a(t, e) {
            return t.w(" lp-unattached")
        }

        function r(t, e) {
            return t.x(e.get(["vast_xml"], !1), e, {
                block: o
            }, {})
        }

        function o(t, e) {
            return t.w("D(n)")
        }

        function c(t, e) {
            return t
        }

        function s(t, e) {
            return t.w('data-beacon="').f(e.get(["beacon"], !1), e, "h").w('"')
        }

        function u(t, e) {
            return t.w(" ")
        }

        function _(t, e) {
            return t.w(' data-impr-beacon="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function l(t, e) {
            return t.w(' data-thirdparty-beacons="').f(e.get(["imprTrackingUrls"], !1), e, "h", ["js"]).w('"')
        }

        function g(t, e) {
            return t.s(e.get(["ad_feedback_beacon"], !1), e, {
                block: f
            }, {})
        }

        function f(t, e) {
            return t.w(' data-ad-feedback-beacon="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function p(t, e) {
            return t.w('data-prtbc="').f(e.get(["partial_view_beacon"], !1), e, "h").w('"')
        }

        function h(t, e) {
            return t.w("data-vast=\"<?xml version='1.0' encoding='UTF-8'?><VAST version='2.0'><Ad id='gemini_video_ad'><InLine><AdSystem>Yahoo<\\/AdSystem><AdTitle><![CDATA[").f(e.get(["videoAdTitle"], !1), e, "h").w("]]><\\/AdTitle><Advertiser><![CDATA[").f(e.get(["videoAdProvider"], !1), e, "h").w("]]><\\/Advertiser>").f(e.get(["videoAdImpressionUrl"], !1), e, "h").w("<Creatives><Creative><Linear><Duration>").f(e.get(["videoAdDuration"], !1), e, "h").w("<\\/Duration><TrackingEvents><Tracking event='start'><![CDATA[").f(e.get(["videoAdStart"], !1), e, "h").w("]]><\\/Tracking><Tracking event='onesec'><![CDATA[").f(e.get(["videoAdImpressionOneSec"], !1), e, "h").w("]]><\\/Tracking><Tracking event='threesec'><![CDATA[").f(e.get(["videoAdImpressionThreeSec"], !1), e, "h").w("]]><\\/Tracking><Tracking event='firstQuartile'><![CDATA[").f(e.get(["videoAdFirstQuartile"], !1), e, "h").w("]]><\\/Tracking><Tracking event='midpoint'><![CDATA[").f(e.get(["videoAdMidPoint"], !1), e, "h").w("]]><\\/Tracking><Tracking event='thirdQuartile'><![CDATA[").f(e.get(["videoAdThirdQuartile"], !1), e, "h").w("]]><\\/Tracking><Tracking event='complete'><![CDATA[").f(e.get(["videoAdComplete"], !1), e, "h").w("]]><\\/Tracking><\\/TrackingEvents><AdParameters \\/><VideoClicks><ClickThrough><![CDATA[").f(e.get(["videoAdClickThrough"], !1), e, "h").w("]]><\\/ClickThrough><\\/VideoClicks><MediaFiles>").f(e.get(["mediaFiles"], !1), e, "h").w('<\\/MediaFiles><\\/Linear><\\/Creative><\\/Creatives><\\/InLine><\\/Ad><\\/VAST>"')
        }

        function w(t, e) {
            return t.w('data-prtbc="').f(e.get(["partial_view_beacon"], !1), e, "h").w('"')
        }

        function m(t, e) {
            return t.w('data-gnvbc="').f(e.get(["generic_view_beacon"], !1), e, "h").w('"')
        }

        function b(t, e) {
            return t.x(e.getPath(!1, ["config", "ui", "rightAlign"]), e, {
                "else": k,
                block: x
            }, {})
        }

        function k(t, e) {
            return t.w(" Pstart(289px) Pstart(334px)--miw1024")
        }

        function x(t, e) {
            return t.w(" Pend(289px) Pend(334px)--miw1024")
        }

        function y(t, e) {
            return t.w(" js-video-target")
        }

        function v(t, e) {
            return t.x(e.getPath(!1, ["config", "ui", "rightAlign"]), e, {
                "else": B,
                block: D
            }, {}).p("td-applet-stream-atomic:item/play_icon_tb", e, {})
        }

        function B(t, e) {
            return t.h("img", e, {}, {
                src: T,
                height: A,
                width: P,
                "class": "Pos(a) Start(0) T(3px) Bdrs(2px) W(249px) H(140px) W(284px)--miw1024 H(160px)--miw1024",
                defer: C
            })
        }

        function T(t, e) {
            return t.f(e.get(["url"], !1), e, "h")
        }

        function A(t, e) {
            return t.f(e.get(["height"], !1), e, "h")
        }

        function P(t, e) {
            return t.f(e.get(["width"], !1), e, "h")
        }

        function C(t, e) {
            return t.f(e.get(["defer"], !1), e, "h")
        }

        function D(t, e) {
            return t.h("img", e, {}, {
                src: M,
                height: S,
                width: V,
                "class": "Pos(a) End(0) T(3px) Bdrs(2px) W(249px) H(140px) W(284px)--miw1024 H(160px)--miw1024",
                defer: F
            })
        }

        function M(t, e) {
            return t.f(e.get(["url"], !1), e, "h")
        }

        function S(t, e) {
            return t.f(e.get(["height"], !1), e, "h")
        }

        function V(t, e) {
            return t.f(e.get(["width"], !1), e, "h")
        }

        function F(t, e) {
            return t.f(e.get(["defer"], !1), e, "h")
        }

        function j(t, e) {
            return t.w("Va(eiddccfjdgheefddbbiktbhvibdljjcctbfgbgdvjhhh\n        m)")
        }

        function I(t, e) {
            return t.w("Va(t)")
        }

        function L(t, e) {
            return t.w(" js-video-image")
        }

        function E(t, e) {
            return t.w("js-content-viewer js-fire-beacon")
        }

        function U(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function z(t, e) {
            return t.w('rel="nofollow"')
        }

        function H(t, e) {
            return t.w('data-orig-link="/"')
        }

        function W(t, e) {
            return t.w(" Mend(20px)")
        }

        function O(t, e) {
            return t.w('<p class="stream-summary Fz(15px) LineClamp(2,42px) Lh(21px) C($gray) Bfv(h) Mb(10px)">').f(e.get(["summary"], !1), e, "h", ["s"]).w("</p>")
        }

        function Q(t, e) {
            return t.w('<span class="Fz(12px) C(#959595) Ell Mb(2px) Pend(6px)">').f(e.get(["publisher"], !1), e, "h", ["s"]).w("</span>")
        }

        function N(t, e) {
            return t.w('<a href="').f(e.getPath(!1, ["config", "ads", "sponsored_url"]), e, "h").w('" class="Fz(11px) C(#959595) Pos(r) Td(n)" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "img",
                elmt: "ct",
                ccode: R
            }).w(">").x(e.get(["sponsoredByLabel"], !1), e, {
                "else": Y,
                block: G
            }, {}).w('</a><a class="D(ib) Va(m) Td(n) C(#959595) Pos(r)" href="').f(e.get(["adChoicesUrl"], !1), e, "h").w('" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "itm",
                elmt: "info",
                ccode: J
            }).w('><i class="Icon-Fp2 IconMoneyball Fz(13px) D(ib) Pstart(6px) Va(m)"></i></a>').x(e.get(["viewer_eligible"], !1), e, {
                block: K
            }, {})
        }

        function R(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function Y(t, e) {
            return t.x(e.getPath(!1, ["config", "ads", "advt_text"]), e, {
                "else": $,
                block: q
            }, {})
        }

        function $(t, e) {
            return t.h("i18n_string", e, {}, {
                _key: "SPONSORED"
            })
        }

        function q(t, e) {
            return t.h("i18n_string", e, {}, {
                _key: "ADVERTISEMENT"
            })
        }

        function G(t, e) {
            return t.f(e.get(["sponsoredByLabel"], !1), e, "h", ["s"])
        }

        function J(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function K(t, e) {
            return t.w('<span class="D(ib) icon-lightning Mstart(6px) Va(m)"></span>')
        }

        function X(t, e) {
            return t.p("td-applet-stream-atomic:item/ad_dislike_sm", e, {})
        }

        function Z(t, e) {
            return t.x(e.get(["vast_xml"], !1), e, {
                block: tt
            }, {})
        }

        function tt(t, e) {
            return t.w('<div class="lp-spinner D(n) Bgi($animatedSpinner) Pos(a) H(40px) W(40px) Bgr(nr) T(50%) Start(50%) Mstart(-20px) Mt(-33px)"></div><div id="player-').f(e.get(["id"], !1), e, "h").w('" class="lp-target D(n)" style="height:0 !important; padding-bottom: 56.25% !important;"></div>')
        }
        return dust.register("td-applet-stream-atomic-templates-item-ad_tb", e), e.__dustBody = !0, n.__dustBody = !0, i.__dustBody = !0, d.__dustBody = !0, a.__dustBody = !0, r.__dustBody = !0, o.__dustBody = !0, c.__dustBody = !0, s.__dustBody = !0, u.__dustBody = !0, _.__dustBody = !0, l.__dustBody = !0, g.__dustBody = !0, f.__dustBody = !0, p.__dustBody = !0, h.__dustBody = !0, w.__dustBody = !0, m.__dustBody = !0, b.__dustBody = !0, k.__dustBody = !0, x.__dustBody = !0, y.__dustBody = !0, v.__dustBody = !0, B.__dustBody = !0, T.__dustBody = !0, A.__dustBody = !0, P.__dustBody = !0, C.__dustBody = !0, D.__dustBody = !0, M.__dustBody = !0, S.__dustBody = !0, V.__dustBody = !0, F.__dustBody = !0, j.__dustBody = !0, I.__dustBody = !0, L.__dustBody = !0, E.__dustBody = !0, U.__dustBody = !0, z.__dustBody = !0, H.__dustBody = !0, W.__dustBody = !0, O.__dustBody = !0, Q.__dustBody = !0, N.__dustBody = !0, R.__dustBody = !0, Y.__dustBody = !0, $.__dustBody = !0, q.__dustBody = !0, G.__dustBody = !0, J.__dustBody = !0, K.__dustBody = !0, X.__dustBody = !0, Z.__dustBody = !0, tt.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/ad_tb.dust"] = dust.cache["td-applet-stream-atomic:item/ad_tb"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/ad_tb"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-item-play_icon_tb", "td-applet-stream-atomic-templates-item-ad_dislike_sm"]
});
YUI.add("td-applet-stream-atomic-templates-item-ad_v2", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('<li class="').x(e.get(["beacon"], !1), e, {
                block: n
            }, {}).w(" ").x(e.getPath(!1, ["config", "ads", "adblock"]), e, {
                block: a
            }, {}).w("js-stream-ad ").x(e.get(["isVideo"], !1), e, {
                block: d
            }, {}).w(' Mb-content Wow(bw) Pos(r) Mx(a) Mt(-1px) Bxz(bb) Bgc(#fff)" ').x(e.get(["beacon"], !1), e, {
                block: s
            }, {}).x(e.get(["cpi"], !1), e, {
                block: r
            }, {}).s(e.get(["imprTrackingUrl"], !1), e, {
                block: o
            }, {}).x(e.get(["imprTrackingUrls"], !1), e, {
                block: c
            }, {}).x(e.getPath(!1, ["config", "ads", "feedback"]), e, {
                block: i
            }, {}).w(" ").x(e.get(["partial_view_beacon"], !1), e, {
                block: _
            }, {}).w(" ").x(e.get(["generic_view_beacon"], !1), e, {
                block: l
            }, {}).w('>\n    <div class="js-stream-item-wrap Py(22px) Pos(r)">\n        <div class="Pos(r) Wow(bw) Cf">\n            ').s(e.get(["image"], !1), e, {
                block: f
            }, {}).w('\n<div class="strm-right Fl(start)">\n                ').x(e.getPath(!1, ["config", "ads", "sponsored_url"]), e, {
                block: k
            }, {}).w('\n<h3 class="M(0) Lh(22px)">\n                    <a href="').f(e.get(["link"], !1), e, "h").w('" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "hdln",
                elmt: "ad",
                ccode: D
            }).w(' class="Pos(r) js-stream-content-link js-stream-item-title js-content-title Td(n) Fz(18px) Fw(b) C($link) C($m_blue):h" ').x(e.get(["off_network"], !1), e, {
                block: M
            }, {}).w('>\n                        <span class="D(ib) LineClamp(2,44px)">').f(e.get(["title"], !1), e, "h", ["s"]).w('</span>\n                        <u class="Pos(a) T(0) Start(0) W(100%) H(100%)"></u>\n                    </a>\n                </h3>\n                <div>\n                    ').x(e.get(["summary"], !1), e, {
                block: F
            }, {}).w("\n").s(e.get(["publisher"], !1), e, {
                block: j
            }, {}).w("\n").x(e.get(["cpi"], !1), e, {
                block: V
            }, {}).w("\n</div>\n            </div>\n            ").x(e.getPath(!1, ["config", "ads", "feedback"]), e, {
                block: I
            }, {}).w("\n</div>\n    </div>\n</li>\n")
        }

        function n(t, e) {
            return t.w("js-stream-ad-noview ")
        }

        function a(t, e) {
            return t.w("ysab ")
        }

        function d(t, e) {
            return t.w("js-video-content")
        }

        function s(t, e) {
            return t.w('data-beacon="').f(e.get(["beacon"], !1), e, "h").w('"')
        }

        function r(t, e) {
            return t.w(' style="min-height:48px"')
        }

        function o(t, e) {
            return t.w(' data-impr-beacon="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function c(t, e) {
            return t.w(' data-thirdparty-beacons="').f(e.get(["imprTrackingUrls"], !1), e, "h", ["js"]).w('"')
        }

        function i(t, e) {
            return t.s(e.get(["ad_feedback_beacon"], !1), e, {
                block: u
            }, {})
        }

        function u(t, e) {
            return t.w(' data-ad-feedback-beacon="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function _(t, e) {
            return t.w('data-prtbc="').f(e.get(["partial_view_beacon"], !1), e, "h").w('"')
        }

        function l(t, e) {
            return t.w('data-gnvbc="').f(e.get(["generic_view_beacon"], !1), e, "h").w('"')
        }

        function f(t, e) {
            return t.w('\n<div class="strm-left Fl(start) Pos(r) Pend(20px) Ta(c)">\n                <div class="Bgc($bgc_gray) H(100%) W(100%) Whs(nw) Py(36px) rounded-img"><span class="D(ib) Va(m) H(100%) img-helper"></span><a href="').f(e.get(["link"], !1), e, "h").w('" class="Pos(r) D(ib) ua_ie8_D(i)').x(e.get(["isVideo"], !1), e, {
                block: g
            }, {}).w('" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "img",
                elmt: "ct",
                ccode: p
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: h
            }, {}).w(">").h("img", e, {}, {
                src: b,
                width: m,
                height: w,
                "class": "Va(m) W(100%)",
                defer: y
            }).w("</a></div>\n            </div>\n            ")
        }

        function g(t, e) {
            return t.w(" js-video-target js-video-image")
        }

        function p(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function h(t, e) {
            return t.w('rel="nofollow"')
        }

        function b(t, e) {
            return t.f(e.get(["url"], !1), e, "h")
        }

        function m(t, e) {
            return t.f(e.get(["width"], !1), e, "h")
        }

        function w(t, e) {
            return t.f(e.get(["height"], !1), e, "h")
        }

        function y(t, e) {
            return t.f(e.get(["defer"], !1), e, "h")
        }

        function k(t, e) {
            return t.w('\n<span class="Tt(c) Fw(500) Mb(3px) D(ib)">\n                    <a class="Mend(1px) Fz(13px) D(ib) Va(m) Mt(2px) Td(n) C($sponsored)" href="').f(e.getPath(!1, ["config", "ads", "sponsored_url"]), e, "h").w('" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "itm",
                elmt: "sp",
                ccode: x
            }).w(">").x(e.get(["sponsoredByLabel"], !1), e, {
                "else": B,
                block: T
            }, {}).w('</a>\n                    <a class="D(ib) Va(m) Td(n) adlink C($sponsored)" href="').f(e.get(["adChoicesUrl"], !1), e, "h").w('" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "itm",
                elmt: "info",
                ccode: C
            }).w('><i class="Icon-Fp2 IconMoneyball Fz(12px) Mt(2px) D(ib)"></i></a>\n                </span>\n                ')
        }

        function x(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function B(t, e) {
            return t.x(e.getPath(!1, ["config", "ads", "advt_text"]), e, {
                "else": v,
                block: P
            }, {})
        }

        function v(t, e) {
            return t.h("i18n_string", e, {}, {
                _key: "SPONSORED"
            })
        }

        function P(t, e) {
            return t.h("i18n_string", e, {}, {
                _key: "ADVERTISEMENT"
            })
        }

        function T(t, e) {
            return t.f(e.get(["sponsoredByLabel"], !1), e, "h", ["s"])
        }

        function C(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function D(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function M(t, e) {
            return t.w('rel="nofollow"')
        }

        function F(t, e) {
            return t.w('<p class="Pos(r) stream-summary LineClamp(2,34px) Lh(17px) C($gray) Bfv(h)">').f(e.get(["summary"], !1), e, "h", ["s"]).w("</p>")
        }

        function j(t, e) {
            return t.w('<a class="Fz(11px) D(ib) Mt(4px) Td(n) C(gray_dark)" href="').f(e.get(["link"], !1), e, "h").w('" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "itm",
                elmt: "ad",
                ccode: L
            }).w(">").f(e.getPath(!0, []), e, "h", ["s"]).w("</a>")
        }

        function L(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function V(t, e) {
            return t.w('\n<a target="_blank" href="').f(e.get(["link"], !1), e, "h").w('" class="Fl(end) C(gray_dark) Bdc(gray_dark) Bds(s) Bdrs(5px) Bdw(t) Mt(5px) Py(4px) Px(20px) Cur(p) Fz(14px) D(ib) Td(n)" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                rspns: "nav",
                ad: "1",
                elm: "btn",
                elmt: "instl",
                itc: "0",
                ccode: z
            }).w(">").h("i18n_string", e, {}, {
                _key: "INSTALL_APP"
            }).w("</a>\n                    ")
        }

        function z(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function I(t, e) {
            return t.p("td-applet-stream-atomic:item/ad_dislike_v2", e, {})
        }
        return dust.register("td-applet-stream-atomic-templates-item-ad_v2", e), e.__dustBody = !0, n.__dustBody = !0, a.__dustBody = !0, d.__dustBody = !0, s.__dustBody = !0, r.__dustBody = !0, o.__dustBody = !0, c.__dustBody = !0, i.__dustBody = !0, u.__dustBody = !0, _.__dustBody = !0, l.__dustBody = !0, f.__dustBody = !0, g.__dustBody = !0, p.__dustBody = !0, h.__dustBody = !0, b.__dustBody = !0, m.__dustBody = !0, w.__dustBody = !0, y.__dustBody = !0, k.__dustBody = !0, x.__dustBody = !0, B.__dustBody = !0, v.__dustBody = !0, P.__dustBody = !0, T.__dustBody = !0, C.__dustBody = !0, D.__dustBody = !0, M.__dustBody = !0, F.__dustBody = !0, j.__dustBody = !0, L.__dustBody = !0, V.__dustBody = !0, z.__dustBody = !0, I.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/ad_v2.dust"] = dust.cache["td-applet-stream-atomic:item/ad_v2"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/ad_v2"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-item-ad_dislike_v2"]
});
YUI.add("td-applet-stream-atomic-templates-item-adwest", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('<div id="ad-west"></div>\n')
        }
        return dust.register("td-applet-stream-atomic-templates-item-adwest", e), e.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/adwest.dust"] = dust.cache["td-applet-stream-atomic:item/adwest"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/adwest"] = function(t, a) {
        t = t || {}, dust.render(e, t, a)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-item-carousel", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('<div class="Pos(r) Cf Wow(bw)">\n    <div class="Pos(r) streamHeroImage W(74.9%) W(66.67%)--md1100 Fl(start) Mend(2px)">\n    ').x(e.get(["inline_video_eligible"], !1), e, {
                block: n
            }, {}).w('\n<a class="Td(n) js-stream-content-link js-content-title').x(e.get(["viewer_eligible"], !1), e, {
                block: r
            }, {}).w('" ').x(e.get(["tab"], !1), e, {
                block: s
            }, {}).w('" ').x(e.get(["rdSigLink"], !1), e, {
                "else": i,
                block: a
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                slk: d,
                subsec: "needtoknow",
                elm: "img",
                elmt: "ct",
                r: u,
                ccode: c
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: l
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: _
            }, {}).w('>\n            <div class="Pos(r) C(#000) H(0) Ovy(h)" style="padding-bottom:56.13%;">\n                ').s(e.get(["image"], !1), e, {
                block: f
            }, {}).w('\n</div>\n            <div class="StretchedBox W(100%) H(100%) ie-7_H(a) strm-img-gradient"></div>\n        </a>\n    ').x(e.get(["actionsEnabled"], !1), e, {
                block: g
            }, {}).w('\n<div class="Pos(a) Mb(12px) Pstart(25px) Pstart(18px)--md1100 Pend(45px) Pend(25px)--md1100 C(#fff) Z(1) B(42px)">\n        <a class="Fw(b) Td(n) C(#fff) C(#fff):h js-stream-content-link js-content-title js-content-viewer rapid-noclick-resp rapidnofollow" ').x(e.get(["rdSigLink"], !1), e, {
                "else": tt,
                block: et
            }, {}).x(e.get(["off_network"], !1), e, {
                block: nt
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                slk: ot,
                subsec: "needtoknow",
                elm: "hdln",
                elmt: "ct",
                r: rt,
                ccode: st
            }).w('>\n            <h2 class="Fz(25px) Fz(22px)--md1100 Lh(32px) Lh(25px)--md1100 Fw(700) Tsh(streamHeroTextShadow) Td(u):h">').f(e.get(["title"], !1), e, "h", ["s"]).w('</h2>\n            <p class="Fz(14px) C(#d9d9db) Tov(e) LineClamp(2,34px) C(#d9d9db) Tsh(streamHeroTextShadow) Fw(400) Pt(6px) Pb(4px)">\n                <span class="Mend(5px)">').s(e.get(["summary"], !1), e, {
                block: it
            }, {}).w('</span>\n                <span class="D(ib) Td(u):h Fw(600) C(#fff)">').s(e.get(["more_link_text"], !1), e, {
                block: at
            }, {}).w("</span>\n            </p>\n        </a>\n    </div>\n    ").x(e.get(["inline_video_eligible"], !1), e, {
                block: dt
            }, {}).w('\n</div>\n<div class="Ov(h) Mstart(66.67%)--md1100">\n    <ul class="Pos(r) Pb(168.67%) Pb(113.6%)--md1100 H(0)">\n        ').s(e.get(["storyline"], !1), e, {
                block: ut
            }, {}).w("\n</ul>\n</div>\n</div>\n")
        }

        function n(t, e) {
            return t.w('<div class="js-video-target"').x(e.getPath(!1, ["config", "ads", "yvap"]), e, {
                block: o
            }, {}).w(">")
        }

        function o(t, e) {
            return t.w(' data-yvap="').f(e.getPath(!1, ["config", "ads", "yvap"]), e, "h", ["js"]).w('"')
        }

        function r(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function s(t, e) {
            return t.w('target="_blank"')
        }

        function i(t, e) {
            return t.w('href="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function a(t, e) {
            return t.w('href="').f(e.get(["rdSigLink"], !1), e, "h").w('" data-orig-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function d(t, e) {
            return t.f(e.get(["title"], !1), e, "h", ["u", "s"])
        }

        function u(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function c(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function l(t, e) {
            return t.w('rel="nofollow"')
        }

        function _(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function f(t, e) {
            return t.w("\n").h("img", e, {}, {
                alt: "",
                src: m,
                "class": "Trsdu(.42s) W(100%) Trs(streamHeroImgFilterTrans) streamHeroImage:h_Op(0.9) streamHeroImage:h_Fil(streamHeroImgFilterHover) Fil(streamHeroImgFilter)",
                defer: h
            }).w("\n")
        }

        function m(t, e) {
            return t.f(e.get(["url"], !1), e, "h")
        }

        function h(t, e) {
            return t.f(e.get(["defer"], !1), e, "h")
        }

        function g(t, e) {
            return t.w('\n<div class="Pos(a) W(100%) Pos(a) Z(2) B(0) Mb(14px) Pstart(25px) Pstart(18px)--md1100 ntkActions">\n        <ul class="js-stream-side-buttons js-stream-actions js-stream-tumblr-actions').h("gt", e, {
                block: p
            }, {
                key: w,
                value: 0
            }).nx(e.getPath(!1, ["config", "ui", "dislike"]), e, {
                block: b
            }, {}).w('">\n            ').x(e.getPath(!1, ["config", "ui", "like"]), e, {
                block: k
            }, {}).w("\n").x(e.getPath(!1, ["config", "ui", "stream_actions_share_panel"]), e, {
                block: I
            }, {}).w("\n").x(e.get(["commentCount"], !1), e, {
                block: S
            }, {}).w("\n</ul>\n    </div>\n    ")
        }

        function p(t, e) {
            return t.w(" has-comments")
        }

        function w(t, e) {
            return t.f(e.get(["commentCount"], !1), e, "h")
        }

        function b(t, e) {
            return t.w(" js-stream-dislike-disabled")
        }

        function k(t, e) {
            return t.w('\n<li class="ActionLike D(ib) O(n) Mt(4px) Mstart(-1px) Lh(20px)">\n                ').x(e.getPath(!1, ["config", "signed_in"]), e, {
                "else": y,
                block: v
            }, {}).w("\n</li>\n            ")
        }

        function y(t, e) {
            return t.w('\n<a href="').x(e.getPath(!1, ["config", "ui", "stream_actions_likable"]), e, {
                "else": x,
                block: B
            }, {}).w('"\n                    class="js-stream-like-button ').x(e.getPath(!1, ["config", "ui", "stream_actions_likable"]), e, {
                block: P
            }, {}).w('rapidnofollow Td(n) O(n) C(white) P(14px) js-stream-button-loggedout"\n                    role="button"\n                    tabindex="0"\n                    data-ylk="slk:like;t4:drwr;elm:btn;elmt:lgn-yh;" data-action-outcome="lgn"><i class="Icon-Fp2 IconTumblrHeartOutline Fz(21px) Tsh($comment_shadow)"></i></a>\n                ')
        }

        function x(t, e) {
            return t.f(e.getPath(!1, ["config", "js", "login_url"]), e, "h")
        }

        function B(t, e) {
            return t.w("javascript:void(0)")
        }

        function P(t, e) {
            return t.w("rapid-noclick-resp ")
        }

        function v(t, e) {
            return t.w('\n<a class="js-stream-like-button rapid-noclick-resp rapidnofollow Td(n) O(n) C(white)').x(e.get(["liked"], !1), e, {
                block: T
            }, {}).w(' P(14px)" role="button" tabindex="0" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                r: C,
                ccode: F,
                t4: "ctrl",
                elm: "btn",
                elmt: "op",
                itc: "1",
                rspns: "op",
                slk: "like"
            }).w('><i class="Icon-Fp2 ').x(e.get(["liked"], !1), e, {
                "else": j,
                block: H
            }, {}).w(' Fz(21px) Tsh($comment_shadow)"></i></a>\n                ')
        }

        function T(t, e) {
            return t.w(" ActionSelected")
        }

        function C(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function F(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function j(t, e) {
            return t.w("IconTumblrHeartOutline")
        }

        function H(t, e) {
            return t.w("IconTumblrHeart")
        }

        function I(t, e) {
            return t.w('\n<li class="D(ib) O(n) stream-share Cur(p) Mstart(1px) Lh(20px) Pos(r) Mt(2px)" tabindex="0">\n                <i class="Icon-Fp2 IconStreamShare Fz(21px) Px(14px) C(white) Tsh($comment_shadow) js-stream-share-icon"></i>\n                <div class="js-stream-share-panel Start(-45px) T(25px) Pos(a) Ta(start) H(0) W(169px) Z(11) Op(0) Ov(h) stream-share:h_Op(1) stream-share:h_H(a)"></div>\n            </li>\n            ')
        }

        function S(t, e) {
            return t.w('\n<li class="ActionComments D(ib) O(n) Mstart(-1px) Pos(r) C(white)" data-cmntnum="').f(e.get(["commentCount"], !1), e, "h").w('"><a href="').x(e.getPath(!1, ["config", "ui", "comments_inline"]), e, {
                "else": O,
                block: z
            }, {}).w('" class="Pos(r) js-stream-comments-button').nx(e.getPath(!1, ["config", "ui", "comments_inline"]), e, {
                "else": $,
                block: q
            }, {}).w(' Td(n) O(n) C(white) Px(14px) Pb(5px) Pt(25px)" role="button" tabindex="0" ').x(e.getPath(!1, ["config", "ui", "comments_inline"]), e, {
                "else": R,
                block: Y
            }, {}).w('><i class="Icon-Fp2 IconComments Fz(21px) Tsh($comment_shadow) ActionComments:h_C($signin_blue)"></i></a><span class="js-stream-comment-counter D(ib) Cur(p) Fz(11px) Ta(start) Fw(b) Tsh($comment_shadow) Pos(a) T(6px) Start(40px) W(100%) ActionComments:h_C($signin_blue)').x(e.getPath(!1, ["config", "ui", "animate_comments"]), e, {
                block: K
            }, {}).w('">').h("gt", e, {
                block: Q
            }, {
                key: X,
                value: 0
            }).w('</span><span class="js-stream-comment-counter-update D(ib) Cur(p) Fz(11px) Ta(start) Fw(b) Tsh($comment_shadow) Pos(a) T(6px) Start(40px) W(100%)"></span>\n            </li>\n            ')
        }

        function O(t, e) {
            return t.h("gte", e, {
                "else": M,
                block: L
            }, {
                key: W,
                value: 2
            })
        }

        function M(t, e) {
            return t.w("javascript:void(0)")
        }

        function L(t, e) {
            return t.f(e.get(["link"], !1), e, "h")
        }

        function W(t, e) {
            return t.f(e.get(["commentCount"], !1), e, "h")
        }

        function z(t, e) {
            return t.w("javascript:void(0)")
        }

        function $(t, e) {
            return t.h("gte", e, {
                "else": A,
                block: Z
            }, {
                key: E,
                value: 2
            })
        }

        function A(t, e) {
            return t.x(e.get(["viewer_eligible"], !1), e, {
                block: D
            }, {})
        }

        function D(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function Z(t, e) {
            return t.w("-drawer")
        }

        function E(t, e) {
            return t.f(e.get(["commentCount"], !1), e, "h")
        }

        function q(t, e) {
            return t.x(e.get(["viewer_eligible"], !1), e, {
                block: N
            }, {})
        }

        function N(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function R(t, e) {
            return t.h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                r: U,
                ccode: V,
                t4: "ctrl",
                elm: "btn",
                slk: "cmmt",
                itc: "0"
            })
        }

        function U(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function V(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function Y(t, e) {
            return t.h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                r: G,
                ccode: J,
                t4: "ctrl",
                elm: "btn",
                slk: "cmmt",
                itc: "1"
            })
        }

        function G(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function J(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function K(t, e) {
            return t.w(" js-stream-comment-hidden")
        }

        function Q(t, e) {
            return t.f(e.get(["commentString"], !1), e, "h")
        }

        function X(t, e) {
            return t.f(e.get(["commentCount"], !1), e, "h")
        }

        function tt(t, e) {
            return t.w('href="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function et(t, e) {
            return t.w('href="').f(e.get(["rdSigLink"], !1), e, "h").w('" data-orig-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function nt(t, e) {
            return t.w(' rel="nofollow"')
        }

        function ot(t, e) {
            return t.f(e.get(["title"], !1), e, "h", ["u", "s"])
        }

        function rt(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function st(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function it(t, e) {
            return t.f(e.getPath(!0, []), e, "h", ["s"])
        }

        function at(t, e) {
            return t.f(e.getPath(!0, []), e, "h", ["s"]).w(" »")
        }

        function dt(t, e) {
            return t.w("</div>")
        }

        function ut(t, e) {
            return t.w("\n").h("lt", e, {
                block: ct
            }, {
                key: e.get(["$idx"], !1),
                value: 3
            }).w("\n")
        }

        function ct(t, e) {
            return t.w('\n<li class="Pos(r) D(b) Mb(2px) streamHeroImage">\n            <a class="js-stream-content-link js-stream-item-title js-content-title').x(e.get(["viewer_eligible"], !1), e, {
                block: lt
            }, {}).w('" ').x(e.getPath(!0, ["rdSigLink"]), e, {
                "else": _t,
                block: ft
            }, {}).w(' data-uuid="').f(e.getPath(!0, ["uuid"]), e, "h").w('" ').x(e.get(["tab"], !1), e, {
                block: mt
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                slk: ht,
                subsec: "needtoknow",
                elm: "rhdln",
                elmt: "ct",
                r: gt,
                ccode: pt,
                t4: "rel",
                cposy: wt,
                pos: bt,
                g: kt,
                aid: yt,
                expb: xt
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: Bt
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: Pt
            }, {}).w('>\n                <div class="Pos(r) C(#000) H(0) Ovy(h) Pb(56.13%)">\n                    ').h("img", e, {}, {
                src: vt,
                "class": "Trsdu(.42s) W(100%) Trs(streamHeroImgFilterTrans) streamHeroImage:h_Op(0.9) streamHeroImage:h_Fil(streamHeroImgFilterHover) Fil(streamHeroImgFilter)",
                defer: Tt,
                alt: Ct
            }).w('\n</div>\n                <div class="StretchedBox W(100%) H(100%) ie-7_H(a) strm-img-gradient"></div>\n                <h3 class="Pos(a) B(0) Mend(30px) Mend(23px)--md1100 Td(n) LineClamp(3,45px) Fw(b) C(#fff) Td(n):h Fz(13px) Mstart(12px) Mb(15px) Lh(15px) Tsh(streamHeroTextShadow)">').f(e.get(["title"], !1), e, "h", ["s"]).w("</h3>\n            </a>\n        </li>\n        ")
        }

        function lt(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function _t(t, e) {
            return t.w('href="').f(e.getPath(!0, ["link"]), e, "h").w('"')
        }

        function ft(t, e) {
            return t.w('href="').f(e.getPath(!0, ["rdSigLink"]), e, "h").w('" data-orig-link="').f(e.getPath(!0, ["link"]), e, "h").w('"')
        }

        function mt(t, e) {
            return t.w('target="_blank"')
        }

        function ht(t, e) {
            return t.f(e.get(["title"], !1), e, "h", ["u", "s"])
        }

        function gt(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function pt(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function wt(t, e) {
            return t.f(e.getPath(!0, ["cposy"]), e, "h")
        }

        function bt(t, e) {
            return t.f(e.getPath(!0, ["pos"]), e, "h")
        }

        function kt(t, e) {
            return t.f(e.getPath(!0, ["uuid"]), e, "h")
        }

        function yt(t, e) {
            return t.f(e.getPath(!0, ["aid"]), e, "h")
        }

        function xt(t, e) {
            return t.f(e.getPath(!0, ["expb"]), e, "h")
        }

        function Bt(t, e) {
            return t.w('rel="nofollow"')
        }

        function Pt(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function vt(t, e) {
            return t.f(e.getPath(!1, ["roundupThumb", "url"]), e, "h")
        }

        function Tt(t, e) {
            return t.f(e.get(["defer"], !1), e, "h")
        }

        function Ct(t, e) {
            return t.f(e.get(["ntkImageAttribution"], !1), e, "h")
        }
        return dust.register("td-applet-stream-atomic-templates-item-carousel", e), e.__dustBody = !0, n.__dustBody = !0, o.__dustBody = !0, r.__dustBody = !0, s.__dustBody = !0, i.__dustBody = !0, a.__dustBody = !0, d.__dustBody = !0, u.__dustBody = !0, c.__dustBody = !0, l.__dustBody = !0, _.__dustBody = !0, f.__dustBody = !0, m.__dustBody = !0, h.__dustBody = !0, g.__dustBody = !0, p.__dustBody = !0, w.__dustBody = !0, b.__dustBody = !0, k.__dustBody = !0, y.__dustBody = !0, x.__dustBody = !0, B.__dustBody = !0, P.__dustBody = !0, v.__dustBody = !0, T.__dustBody = !0, C.__dustBody = !0, F.__dustBody = !0, j.__dustBody = !0, H.__dustBody = !0, I.__dustBody = !0, S.__dustBody = !0, O.__dustBody = !0, M.__dustBody = !0, L.__dustBody = !0, W.__dustBody = !0, z.__dustBody = !0, $.__dustBody = !0, A.__dustBody = !0, D.__dustBody = !0, Z.__dustBody = !0, E.__dustBody = !0, q.__dustBody = !0, N.__dustBody = !0, R.__dustBody = !0, U.__dustBody = !0, V.__dustBody = !0, Y.__dustBody = !0, G.__dustBody = !0, J.__dustBody = !0, K.__dustBody = !0, Q.__dustBody = !0, X.__dustBody = !0, tt.__dustBody = !0, et.__dustBody = !0, nt.__dustBody = !0, ot.__dustBody = !0, rt.__dustBody = !0, st.__dustBody = !0, it.__dustBody = !0, at.__dustBody = !0, dt.__dustBody = !0, ut.__dustBody = !0, ct.__dustBody = !0, lt.__dustBody = !0, _t.__dustBody = !0, ft.__dustBody = !0, mt.__dustBody = !0, ht.__dustBody = !0, gt.__dustBody = !0, pt.__dustBody = !0, wt.__dustBody = !0, bt.__dustBody = !0, kt.__dustBody = !0, yt.__dustBody = !0, xt.__dustBody = !0, Bt.__dustBody = !0, Pt.__dustBody = !0, vt.__dustBody = !0, Tt.__dustBody = !0, Ct.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/carousel.dust"] = dust.cache["td-applet-stream-atomic:item/carousel"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/carousel"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-item-darla_ad_placeholder", function(e, t) {
    dust.cache = dust.cache || {}, dust.cache[t] = function(e) {
        function t(e, t) {
            return e.s(t.get(["data"], !1), t, {
                block: a
            }, {}).w("\n")
        }

        function a(e, t) {
            return e.w('\n<li data-temp="darla_ad_placeholder" class="js-stream-content item"  data-type="slot">\n        \x3c!-- ').f(t.get(["placeholder"], !1), t, "h").w(" --\x3e\n    </li>\n")
        }
        return dust.register("td-applet-stream-atomic-templates-item-darla_ad_placeholder", t), t.__dustBody = !0, a.__dustBody = !0, t
    }(), dust.cache["td-applet-stream-atomic:item/darla_ad_placeholder.dust"] = dust.cache["td-applet-stream-atomic:item/darla_ad_placeholder"] = dust.cache[t], e.Template._cache = e.Template._cache || {}, e.Template._cache["td-applet-stream-atomic/templates/item/darla_ad_placeholder"] = function(e, a) {
        e = e || {}, dust.render(t, e, a)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-item-deal_of_the_day", function(t, n) {
    dust.cache = dust.cache || {}, dust.cache[n] = function(t) {
        function n(t, n) {
            return t.s(n.get(["data"], !1), n, {
                block: s
            }, {})
        }

        function s(t, n) {
            return t.w('\n<div class="My(10px) Pos(r) Pstart(200px) Pstart(154px)--md1200 Mih(133px) Pend(170px) Pend(20px)--md1200 Py(20px) Bgc(##f6f6f6)" id="deal_of_the_day">\n    <img src="').f(n.getPath(!1, ["bg", "left"]), n, "h").w('" alt="" class="Pos(a) Start(0) B(0) W(200px) W(154px)--md1225" />\n    <img src="').f(n.getPath(!1, ["bg", "right"]), n, "h").w('" alt="" class="Pos(a) End(0) B(0) W(135px) Z(1) D(n)--md1200" />\n    <div class="W(100%) Mx(a) Bgc($dealBackground) Bdrs(2px) Bxz(bb) Pos(r) Z(1) Bdrs(2px) Z(2)">\n        <h2 class="Tt(u) Mt(0) Mb(0) C(#f80e5d) Fz(13px) Ta(c) D(ib) Pos(r) Z(1)"><img class="D(ib) Mb(6px) W(87px) H(32px) Va(m) Mend(10px)" src="').f(n.getPath(!1, ["yahooLogo", "purple"]), n, "h").w('" alt=').h("i18n_string", n, {}, {
                _key: "YAHOO_DEAL_OF_THE_DAY"
            }).w(' /><img class="D(ib) Pstart(10px) Bdstarts(s) Bdstartw(1px) Bdstartc(#333333) Va(m)" src="').f(n.getPath(!1, ["logo", "src"]), n, "h").w('" width="').f(n.getPath(!1, ["logo", "width"]), n, "h").w(' height="').f(n.getPath(!1, ["logo", "height"]), n, "h").w('" alt="').f(n.getPath(!1, ["logo", "alt"]), n, "h").w('" /></h2>\n        <div class="C(#1b2675) D(tb) Tbl(f) Z(1) Pos(r)">\n            <div class="D(tbc) W(75%) Va(m) Pt(5px) Pend(20px) Pend(10px)--md1200">\n                <p class="Mt(0) Mb(3px) Fw(b) Fz(18px)">\n                    ').f(n.getPath(!1, ["offer", "text"]), n, "h", ["s"]).w('\n<span class="Td(lt) Fw(n) C(#333333)">').f(n.getPath(!1, ["offer", "old"]), n, "h").w("</span> ").f(n.getPath(!1, ["offer", "new"]), n, "h").w('</p>\n                <p class="Mt(0) Fz(14px) C(#333333)">\n                    ').h("i18n_string", n, {}, {
                _key: "YAHOO_DEAL_OF_THE_DAY_COLLAB",
                v0: e
            }).w('\n</p>\n            </div>\n            <div class="D(tbc) W(25%) Pstart(10px) Pt(0) Va(m) Fz(11px)">\n                <div>\n                    <p class="Mb(5px)">').h("i18n_string", n, {}, {
                _key: "ENDS_IN"
            }).w('</p>\n                    <div class="Bgc(#fff) C(#000) Mb(20px) js-countdown Bdrs(2px) D(ib) Pstart(10px) Fz(13px) Miw(110px)" data-js-countdown-enddate="').f(n.get(["endDate"], !1), n, "h").w('">\n                        <span class="D(ib) Py(5px) Mend(10px)"><span class="Mend(1px) js-countdown-hours">00</span>h</span>\n                        <span class="D(ib) Py(5px) Mend(10px)"><span class="Mend(1px) js-countdown-minutes">00</span>m</span>\n                        <span class="D(ib) Py(5px) Mend(10px)"><span class="Mend(1px) js-countdown-seconds">00</span>s</span>\n                    </div>\n                </div>\n                ').x(n.getPath(!1, ["config", "signed_in"]), n, {
                "else": a,
                block: u
            }, {}).w("\n</div>\n        </div>\n    </div>\n</div>\n")
        }

        function e(t, n) {
            return t.f(n.getPath(!1, ["logo", "alt"]), n, "h")
        }

        function a(t, n) {
            return t.w("\n").x(n.getPath(!1, ["config", "isRecognizedUser"]), n, {
                "else": d,
                block: p
            }, {}).w("\n")
        }

        function d(t, n) {
            return t.w('\n<a href="').f(n.get(["login_url"], !1), n, "h").w('" class="Fz(14px) Ta(c) Bxsh($couponShadow) Bg($loginCTA) C(#fff) Py(9px) Px(20px) Td(n) Bdrs(3px) Whs(nw) Fw(b)" ').h("rapid_data_attr", n, {}, {
                pos: "1",
                cpos: o,
                sec: c,
                subsec: r,
                slk: "Sign in"
            }).w(">\n                            ").h("i18n_string", n, {}, {
                _key: "SIGN_IN_2"
            }).w("\n</a>\n                    ")
        }

        function o(t, n) {
            return t.f(n.getPath(!1, ["i13n", "cpos"]), n, "h")
        }

        function c(t, n) {
            return t.f(n.getPath(!1, ["i13n", "sec"]), n, "h")
        }

        function r(t, n) {
            return t.f(n.getPath(!1, ["i13n", "subsec"]), n, "h")
        }

        function p(t, n) {
            return t.w('\n<a href="').f(n.get(["url"], !1), n, "h").w('" rel="noopener noreferrer" target="_blank" class="Fz(14px) Ta(c) Bxsh($couponShadow) Bg($loginCTA) C(#fff) Py(9px) Px(20px) Td(n) Bdrs(3px) Whs(nw) Fw(b)" ').h("rapid_data_attr", n, {}, {
                pos: "1",
                cpos: i,
                sec: h,
                subsec: _,
                slk: "Get started"
            }).w(">\n                            ").h("i18n_string", n, {}, {
                _key: "GET_STARTED"
            }).w("\n</a>\n                    ")
        }

        function i(t, n) {
            return t.f(n.getPath(!1, ["i13n", "cpos"]), n, "h")
        }

        function h(t, n) {
            return t.f(n.getPath(!1, ["i13n", "sec"]), n, "h")
        }

        function _(t, n) {
            return t.f(n.getPath(!1, ["i13n", "subsec"]), n, "h")
        }

        function u(t, n) {
            return t.w('\n<a href="').f(n.get(["url"], !1), n, "h").w('" rel="noopener noreferrer" target="_blank" class="Fz(14px) Ta(c) Bxsh($couponShadow) Bg($loginCTA) C(#fff) Py(9px) Px(20px) Td(n) Bdrs(3px) Whs(nw) Fw(b)" ').h("rapid_data_attr", n, {}, {
                pos: "1",
                cpos: f,
                sec: l,
                subsec: g,
                slk: "Get started"
            }).w(">\n                        ").h("i18n_string", n, {}, {
                _key: "GET_STARTED"
            }).w("\n</a>\n                 ")
        }

        function f(t, n) {
            return t.f(n.getPath(!1, ["i13n", "cpos"]), n, "h")
        }

        function l(t, n) {
            return t.f(n.getPath(!1, ["i13n", "sec"]), n, "h")
        }

        function g(t, n) {
            return t.f(n.getPath(!1, ["i13n", "subsec"]), n, "h")
        }
        return dust.register("td-applet-stream-atomic-templates-item-deal_of_the_day", n), n.__dustBody = !0, s.__dustBody = !0, e.__dustBody = !0, a.__dustBody = !0, d.__dustBody = !0, o.__dustBody = !0, c.__dustBody = !0, r.__dustBody = !0, p.__dustBody = !0, i.__dustBody = !0, h.__dustBody = !0, _.__dustBody = !0, u.__dustBody = !0, f.__dustBody = !0, l.__dustBody = !0, g.__dustBody = !0, n
    }(), dust.cache["td-applet-stream-atomic:item/deal_of_the_day.dust"] = dust.cache["td-applet-stream-atomic:item/deal_of_the_day"] = dust.cache[n], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/deal_of_the_day"] = function(t, s) {
        t = t || {}, dust.render(n, t, s)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-item-default", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('<div class="Pos(r) Wow(bw) Cf').x(e.get(["actionsEnabled"], !1), e, {
                block: n
            }, {}).w('">\n').x(e.getPath(!1, ["images", "default"]), e, {
                "else": r,
                block: L
            }, {}).w("\n").x(e.get(["actionsEnabled"], !1), e, {
                block: yt
            }, {}).w("\n</div>\n")
        }

        function n(t, e) {
            return t.w(" Pend(30px)")
        }

        function r(t, e) {
            return t.w('\n<div class="Fl(start) Pos(r) strm-headline strm-full">').x(e.get(["storyLabel"], !1), e, {
                block: o
            }, {}).w('\n<h3 class="Mb(4px) LineClamp(3,65px) Lh(21px)">\n            <a ').x(e.get(["rdSigLink"], !1), e, {
                "else": c,
                block: f
            }, {}).w(' class="').nx(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: g
            }, {}).w(" O(n):f C($m_blue):f js-stream-content-link js-stream-item-title").x(e.get(["viewer_eligible"], !1), e, {
                block: w
            }, {}).w(' js-content-title C($link) C($m_blue):h Td(n) Fz(17px) Fw(b)" ').x(e.get(["tab"], !1), e, {
                block: h
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "hdln",
                elmt: "ct",
                r: p,
                ccode: b
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: k
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: y
            }, {}).w("><span>").f(e.get(["title"], !1), e, "h", ["s"]).w('</span><u class="Pos(a) T(0) Start(0) W(100%) H(100%) ').x(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: m
            }, {}).w('"></u></a>\n        </h3>\n        <div>\n            ').x(e.get(["summary"], !1), e, {
                block: B
            }, {}).w("\n").nx(e.getPath(!1, ["config", "ui", "publisher_headline"]), e, {
                block: P
            }, {}).w("\n</div>\n    </div>\n")
        }

        function o(t, e) {
            return t.w('<div class="C(c_').s(e.get(["categoryLabel"], !1), e, {
                "else": a,
                block: i
            }, {}).w(') js-content-label Fw(b) Mb(4px) Lh(12px) Fz(13px) Tt(c)"').s(e.get(["categoryLabel"], !1), e, {
                block: s
            }, {}).w("><span>").f(e.get(["storyLabel"], !1), e, "h", ["s"]).w("</span>").x(e.getPath(!1, ["config", "ui", "publisher_headline"]), e, {
                block: u
            }, {}).w("</div>")
        }

        function a(t, e) {
            return t.f(e.get(["property"], !1), e, "h")
        }

        function i(t, e) {
            return t.f(e.getPath(!0, []), e, "h")
        }

        function s(t, e) {
            return t.w(' data-cat-label="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function u(t, e) {
            return t.s(e.get(["publisher"], !1), e, {
                block: d
            }, {})
        }

        function d(t, e) {
            return t.w('<span class="Fz(11px) Td(n) C(gray_dark) Fw(n) D(ib) Mt(4px) Mstart(9px)">').f(e.getPath(!0, []), e, "h", ["s"]).w("</span>")
        }

        function c(t, e) {
            return t.x(e.get(["previewLink"], !1), e, {
                "else": l,
                block: _
            }, {})
        }

        function l(t, e) {
            return t.w('href="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function _(t, e) {
            return t.w('href="').f(e.get(["previewLink"], !1), e, "h").w('" data-share-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function f(t, e) {
            return t.w('href="').f(e.get(["rdSigLink"], !1), e, "h").w('" data-orig-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function g(t, e) {
            return t.w("Pos(r)")
        }

        function w(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function h(t, e) {
            return t.w('target="_blank"')
        }

        function p(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function b(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function k(t, e) {
            return t.w('rel="nofollow"')
        }

        function y(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function m(t, e) {
            return t.w("strm-stretch")
        }

        function B(t, e) {
            return t.w('<p class="').nx(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: x
            }, {}).w(' stream-summary LineClamp(3,54px) Lh(17px) C($gray) Bfv(h)">').f(e.get(["summary"], !1), e, "h", ["s"]).w("</p>")
        }

        function x(t, e) {
            return t.w("Pos(r)")
        }

        function P(t, e) {
            return t.s(e.get(["publisher"], !1), e, {
                block: v
            }, {})
        }

        function v(t, e) {
            return t.w('<span class="Fz(11px) Td(n) C(gray_dark) Fw(n) D(ib) Mt(4px) Tt(c)">').f(e.getPath(!0, []), e, "h", ["s"]).w("</span>")
        }

        function L(t, e) {
            return t.w("\n").s(e.getPath(!1, ["images", "default"]), e, {
                block: C
            }, {}).w('\n<div class="strm-right Fl(start) W(66%)"><div class="strm-headline ').x(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: V
            }, {}).w('">').x(e.get(["storyLabel"], !1), e, {
                "else": Y,
                block: J
            }, {}).w('<h3 class="Mb(4px) LineClamp(3,57px) Lh(19px)">\n                <a ').x(e.get(["rdSigLink"], !1), e, {
                "else": rt,
                block: it
            }, {}).w(' class="').nx(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: st
            }, {}).w(" O(n):f C($m_blue):f js-stream-content-link js-stream-item-title").x(e.get(["viewer_eligible"], !1), e, {
                block: ut
            }, {}).w(' js-content-title C($link) C($m_blue):h Td(n) Fz(17px) Fw(b)" ').x(e.get(["tab"], !1), e, {
                block: dt
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "hdln",
                elmt: "ct",
                r: ct,
                ccode: lt
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: _t
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: ft
            }, {}).w("><span").x(e.getPath(!1, ["config", "ui", "fixed_layout"]), e, {
                block: gt
            }, {}).w(">").f(e.get(["title"], !1), e, "h", ["s"]).w('</span><u class="Pos(a) T(0) Start(0) W(100%) H(100%) ').x(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: wt
            }, {}).w('"></u></a>\n            </h3>\n            <div>\n                ').x(e.get(["summary"], !1), e, {
                block: ht
            }, {}).w("\n").nx(e.getPath(!1, ["config", "ui", "publisher_headline"]), e, {
                block: bt
            }, {}).w("\n</div>\n        </div>\n    </div>\n")
        }

        function C(t, e) {
            return t.w('\n<div class="strm-left Fl(start) Pos(r) Pend(18px)"><div class="Pos(r)"><a ').x(e.get(["rdSigLink"], !1), e, {
                "else": F,
                block: j
            }, {}).w(' class="Pos(r) D(ib) streamImage js-stream-content-link W(100%) ').x(e.get(["viewer_eligible"], !1), e, {
                block: z
            }, {}).w('" ').x(e.get(["tab"], !1), e, {
                block: S
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "img",
                elmt: "ct",
                r: W,
                ccode: $
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: D
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: I
            }, {}).w(">").h("img", e, {}, {
                src: E,
                height: H,
                width: O,
                "class": "W(100%) BackgroundPic rounded-img",
                defer: q
            }).nx(e.get(["followable"], !1), e, {
                block: R
            }, {}).x(e.get(["followable"], !1), e, {
                block: A
            }, {}).w("</a>").x(e.get(["followable"], !1), e, {
                block: U
            }, {}).w("\n</div>\n    </div>\n    ")
        }

        function F(t, e) {
            return t.x(e.get(["previewLink"], !1), e, {
                "else": T,
                block: M
            }, {})
        }

        function T(t, e) {
            return t.w('href="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function M(t, e) {
            return t.w('href="').f(e.get(["previewLink"], !1), e, "h").w('" data-share-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function j(t, e) {
            return t.w('href="').f(e.get(["rdSigLink"], !1), e, "h").w('" data-orig-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function z(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function S(t, e) {
            return t.w('target="_blank"')
        }

        function W(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function $(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function D(t, e) {
            return t.w('rel="nofollow"')
        }

        function I(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function E(t, e) {
            return t.f(e.get(["url"], !1), e, "h")
        }

        function H(t, e) {
            return t.f(e.get(["height"], !1), e, "h")
        }

        function O(t, e) {
            return t.f(e.get(["width"], !1), e, "h")
        }

        function q(t, e) {
            return t.f(e.get(["defer"], !1), e, "h")
        }

        function R(t, e) {
            return t.p("td-applet-stream-atomic:item/play_icon", e, {})
        }

        function A(t, e) {
            return t.nx(e.get(["primaryImgFallback"], !1), e, {
                block: N
            }, {})
        }

        function N(t, e) {
            return t.w('<div class="strm-img-gradient Pos(a) W(100%) H(100%) T(0)"></div>')
        }

        function U(t, e) {
            return t.p("td-applet-stream-atomic:item/followable", e, {})
        }

        function V(t, e) {
            return t.w("Pos(r)")
        }

        function Y(t, e) {
            return t.s(e.get(["publisher"], !1), e, {
                block: G
            }, {})
        }

        function G(t, e) {
            return t.w('<span class="Fz(11px) Td(n) C(gray_dark) Fw(n) D(b) Mt(4px)"> ').f(e.getPath(!0, []), e, "h", ["s"]).w("</span>")
        }

        function J(t, e) {
            return t.w('<div class="js-content-label C(c_').s(e.get(["categoryLabel"], !1), e, {
                "else": K,
                block: Q
            }, {}).w(') Fw(b) Mb(6px) Lh(12px) Fz(13px)"').s(e.get(["categoryLabel"], !1), e, {
                block: X
            }, {}).w('><span class="Tt(c)">').f(e.get(["storyLabel"], !1), e, "h", ["s"]).w("</span>").h("eq", e, {
                block: Z
            }, {
                key: tt,
                value: "outlink"
            }).x(e.getPath(!1, ["config", "ui", "publisher_headline"]), e, {
                block: et
            }, {}).w("</div>")
        }

        function K(t, e) {
            return t.f(e.get(["property"], !1), e, "h")
        }

        function Q(t, e) {
            return t.f(e.getPath(!0, []), e, "h")
        }

        function X(t, e) {
            return t.w(' data-cat-label="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function Z(t, e) {
            return t.w('<i class="Icon-Fp2 IconArrowCurveRight Mstart(9px) Fz(16px) Fw(n) C(c_outlink)"></i>')
        }

        function tt(t, e) {
            return t.f(e.get(["type"], !1), e, "h")
        }

        function et(t, e) {
            return t.s(e.get(["publisher"], !1), e, {
                block: nt
            }, {})
        }

        function nt(t, e) {
            return t.w('<span class="Fz(11px) Td(n) C(gray_dark) Fw(n) D(ib) Mt(4px) Mstart(9px)"> ').f(e.getPath(!0, []), e, "h", ["s"]).w("</span>")
        }

        function rt(t, e) {
            return t.x(e.get(["previewLink"], !1), e, {
                "else": ot,
                block: at
            }, {})
        }

        function ot(t, e) {
            return t.w('href="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function at(t, e) {
            return t.w('href="').f(e.get(["previewLink"], !1), e, "h").w('" data-share-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function it(t, e) {
            return t.w('href="').f(e.get(["rdSigLink"], !1), e, "h").w('" data-orig-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function st(t, e) {
            return t.w("Pos(r)")
        }

        function ut(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function dt(t, e) {
            return t.w('target="_blank"')
        }

        function ct(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function lt(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function _t(t, e) {
            return t.w('rel="nofollow"')
        }

        function ft(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function gt(t, e) {
            return t.w(' class="D(ib) LineClamp(3,57px)"')
        }

        function wt(t, e) {
            return t.w("strm-stretch")
        }

        function ht(t, e) {
            return t.w('<p class="').nx(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: pt
            }, {}).w(' stream-summary LineClamp(2,33px) Lh(17px) C($gray) Bfv(h)">').f(e.get(["summary"], !1), e, "h", ["s"]).w("</p>")
        }

        function pt(t, e) {
            return t.w("Pos(r)")
        }

        function bt(t, e) {
            return t.s(e.get(["publisher"], !1), e, {
                block: kt
            }, {})
        }

        function kt(t, e) {
            return t.w('<span class="Fz(11px) Td(n) C(gray_dark) Fw(n) D(ib) Mt(5px) Tt(c)">').f(e.getPath(!0, []), e, "h", ["s"]).w("</span>")
        }

        function yt(t, e) {
            return t.w('<div class="Pos(a) End(0) T(0) W(30px) Mstart(12px) Mend(2px) Ta(end)">').p(mt, e, {}).w("</div>")
        }

        function mt(t, e) {
            return t.f(e.getPath(!1, ["config", "template", "drawer_action"]), e, "h")
        }
        return dust.register("td-applet-stream-atomic-templates-item-default", e), e.__dustBody = !0, n.__dustBody = !0, r.__dustBody = !0, o.__dustBody = !0, a.__dustBody = !0, i.__dustBody = !0, s.__dustBody = !0, u.__dustBody = !0, d.__dustBody = !0, c.__dustBody = !0, l.__dustBody = !0, _.__dustBody = !0, f.__dustBody = !0, g.__dustBody = !0, w.__dustBody = !0, h.__dustBody = !0, p.__dustBody = !0, b.__dustBody = !0, k.__dustBody = !0, y.__dustBody = !0, m.__dustBody = !0, B.__dustBody = !0, x.__dustBody = !0, P.__dustBody = !0, v.__dustBody = !0, L.__dustBody = !0, C.__dustBody = !0, F.__dustBody = !0, T.__dustBody = !0, M.__dustBody = !0, j.__dustBody = !0, z.__dustBody = !0, S.__dustBody = !0, W.__dustBody = !0, $.__dustBody = !0, D.__dustBody = !0, I.__dustBody = !0, E.__dustBody = !0, H.__dustBody = !0, O.__dustBody = !0, q.__dustBody = !0, R.__dustBody = !0, A.__dustBody = !0, N.__dustBody = !0, U.__dustBody = !0, V.__dustBody = !0, Y.__dustBody = !0, G.__dustBody = !0, J.__dustBody = !0, K.__dustBody = !0, Q.__dustBody = !0, X.__dustBody = !0, Z.__dustBody = !0, tt.__dustBody = !0, et.__dustBody = !0, nt.__dustBody = !0, rt.__dustBody = !0, ot.__dustBody = !0, at.__dustBody = !0, it.__dustBody = !0, st.__dustBody = !0, ut.__dustBody = !0, dt.__dustBody = !0, ct.__dustBody = !0, lt.__dustBody = !0, _t.__dustBody = !0, ft.__dustBody = !0, gt.__dustBody = !0, wt.__dustBody = !0, ht.__dustBody = !0, pt.__dustBody = !0, bt.__dustBody = !0, kt.__dustBody = !0, yt.__dustBody = !0, mt.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/default.dust"] = dust.cache["td-applet-stream-atomic:item/default"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/default"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-item-play_icon", "td-applet-stream-atomic-templates-item-followable"]
});
YUI.add("td-applet-stream-atomic-templates-item-default_clusters", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('<div class="strm-default-clusters Pos(r) Wow(bw) Cf Pend(30px) ').x(e.get(["isRoundUp"], !1), e, {
                block: n
            }, {}).w('">\n').x(e.getPath(!1, ["images", "default"]), e, {
                block: r
            }, {}).w("\n").x(e.get(["actionsEnabled"], !1), e, {
                block: It
            }, {}).w("\n</div>\n")
        }

        function n(t, e) {
            return t.w("js-stream-roundup")
        }

        function r(t, e) {
            return t.w("\n").s(e.getPath(!1, ["images", "default"]), e, {
                block: o
            }, {}).w('\n<div class="strm-right Pos(r) Mstart(29%)"><div class="strm-headline Pend(14px) ').x(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: I
            }, {}).w('">').x(e.get(["storyLabel"], !1), e, {
                block: H
            }, {}).w('<h3 class="Mb(4px) Mb(0px)--md1160 LineClamp(2,42px) Lh(21px)">\n                <a ').x(e.get(["rdSigLink"], !1), e, {
                "else": K,
                block: Z
            }, {}).w(' class="O(n):f C($m_blue):f D(b) ').nx(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: tt
            }, {}).w(" js-stream-content-link js-stream-item-title").x(e.get(["viewer_eligible"], !1), e, {
                block: et
            }, {}).w(' js-content-title C($link) C($m_blue):h Td(n) Fz(17px) Fw(b)" ').x(e.get(["tab"], !1), e, {
                block: nt
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "hdln",
                elmt: "ct",
                r: rt,
                ccode: ot
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: dt
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: ut
            }, {}).w("><span").x(e.getPath(!1, ["config", "ui", "fixed_layout"]), e, {
                block: it
            }, {}).w(">").f(e.get(["title"], !1), e, "h", ["s"]).w('</span><u class="Pos(a) T(0) Start(0) W(100%) H(100%) ').x(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: at
            }, {}).w('"></u></a>\n            </h3>\n            <div>\n                ').x(e.get(["summary"], !1), e, {
                block: st
            }, {}).w("\n").nx(e.getPath(!1, ["config", "ui", "publisher_headline"]), e, {
                block: lt
            }, {}).w("\n</div>\n        </div>\n        ").x(e.get(["storyline"], !1), e, {
                block: ft
            }, {}).w("\n</div>\n")
        }

        function o(t, e) {
            return t.w('\n<div class="strm-left Fl(start) Mend(18px) Pos(r) ').h("eq", e, {
                block: d
            }, {
                key: u,
                value: "video"
            }).w('">').x(e.getPath(!1, ["config", "ui", "endcard_cta"]), e, {
                block: i
            }, {}).w("\n<a ").x(e.get(["rdSigLink"], !1), e, {
                "else": y,
                block: B
            }, {}).w(' class="streamImage Pos(r) D(ib) js-stream-content-link W(100%) ').h("eq", e, {
                block: x
            }, {
                key: P,
                value: "video"
            }).w(" ").x(e.get(["viewer_eligible"], !1), e, {
                block: v
            }, {}).w('" ').x(e.get(["tab"], !1), e, {
                block: L
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "img",
                elmt: "ct",
                r: C,
                ccode: T
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: M
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: j
            }, {}).w(">").h("img", e, {}, {
                src: F,
                height: D,
                width: S,
                "class": "W(100%) H(a) BackgroundPic rounded-img",
                defer: W
            }).x(e.get(["followable"], !1), e, {
                block: $
            }, {}).nx(e.get(["followable"], !1), e, {
                block: q
            }, {}).w("</a>").x(e.get(["followable"], !1), e, {
                block: E
            }, {}).w("</div>\n    ")
        }

        function d(t, e) {
            return t.w("Bgc(#000) js-video-content")
        }

        function u(t, e) {
            return t.f(e.get(["type"], !1), e, "h")
        }

        function i(t, e) {
            return t.h("eq", e, {
                block: a
            }, {
                key: k,
                value: "video"
            })
        }

        function a(t, e) {
            return t.w('<div class="js-cstm-end-screen Pos(a) Ta-c W(100%) H(100%) Dn"><a target="_blank" ').x(e.get(["rdSigLink"], !1), e, {
                "else": s,
                block: _
            }, {}).w(' class="D(ib) Ell Td(n) C(white) Bdc(white) Bds(s) Bdrs(2px) Bdw(t) Py(4px) Px(10px) Cur(p) Fz(12px) ').x(e.get(["viewer_eligible"], !1), e, {
                block: f
            }, {}).w('" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                rspns: "nav",
                elm: "btn",
                elmt: "cta",
                itc: "0",
                r: g,
                ccode: w
            }).w(">").x(e.get(["callToAction"], !1), e, {
                block: h
            }, {}).nx(e.get(["callToAction"], !1), e, {
                block: p
            }, {}).w("</a></div>")
        }

        function s(t, e) {
            return t.x(e.get(["previewLink"], !1), e, {
                "else": c,
                block: l
            }, {})
        }

        function c(t, e) {
            return t.w('href="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function l(t, e) {
            return t.w('href="').f(e.get(["previewLink"], !1), e, "h").w('" data-share-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function _(t, e) {
            return t.w('href="').f(e.get(["rdSigLink"], !1), e, "h").w('" data-orig-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function f(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function g(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function w(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function h(t, e) {
            return t.f(e.get(["callToAction"], !1), e, "h")
        }

        function p(t, e) {
            return t.h("i18n_string", e, {}, {
                _key: "LEARN_MORE"
            })
        }

        function k(t, e) {
            return t.f(e.get(["type"], !1), e, "h")
        }

        function y(t, e) {
            return t.x(e.get(["previewLink"], !1), e, {
                "else": b,
                block: m
            }, {})
        }

        function b(t, e) {
            return t.w('href="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function m(t, e) {
            return t.w('href="').f(e.get(["previewLink"], !1), e, "h").w('" data-share-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function B(t, e) {
            return t.w('href="').f(e.get(["rdSigLink"], !1), e, "h").w('" data-orig-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function x(t, e) {
            return t.w("js-video-target")
        }

        function P(t, e) {
            return t.f(e.get(["type"], !1), e, "h")
        }

        function v(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function L(t, e) {
            return t.w('target="_blank"')
        }

        function C(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function T(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function M(t, e) {
            return t.w('rel="nofollow"')
        }

        function j(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function F(t, e) {
            return t.f(e.get(["url"], !1), e, "h")
        }

        function D(t, e) {
            return t.f(e.get(["height"], !1), e, "h")
        }

        function S(t, e) {
            return t.f(e.get(["width"], !1), e, "h")
        }

        function W(t, e) {
            return t.f(e.get(["defer"], !1), e, "h")
        }

        function $(t, e) {
            return t.nx(e.get(["primaryImgFallback"], !1), e, {
                block: z
            }, {})
        }

        function z(t, e) {
            return t.w('<div class="strm-img-gradient Pos(a) H(100%) W(100%) T(0) Start(0)"></div>')
        }

        function q(t, e) {
            return t.p("td-applet-stream-atomic:item/play_icon", e, {})
        }

        function E(t, e) {
            return t.p("td-applet-stream-atomic:item/followable", e, {})
        }

        function I(t, e) {
            return t.w("Pos(r)")
        }

        function H(t, e) {
            return t.w('<div class="strm-headline-label js-content-label ').nx(e.get(["isPIC"], !1), e, {
                block: O
            }, {}).w(' Fw(b) Mb(4px) Lh(12px) Fz(13px) Tt(c)"').s(e.get(["categoryLabel"], !1), e, {
                block: V
            }, {}).w("><span").x(e.get(["isPIC"], !1), e, {
                block: Y
            }, {}).w(">").f(e.get(["storyLabel"], !1), e, "h", ["s"]).w("</span>").x(e.getPath(!1, ["config", "ui", "publisher_headline"]), e, {
                block: G
            }, {}).w("</div>")
        }

        function O(t, e) {
            return t.w("C(c_").s(e.get(["categoryLabel"], !1), e, {
                "else": A,
                block: U
            }, {}).w(")")
        }

        function A(t, e) {
            return t.x(e.get(["property"], !1), e, {
                "else": R,
                block: N
            }, {})
        }

        function R(t, e) {
            return t.w("news")
        }

        function N(t, e) {
            return t.f(e.get(["property"], !1), e, "h")
        }

        function U(t, e) {
            return t.f(e.getPath(!0, []), e, "h")
        }

        function V(t, e) {
            return t.w(' data-cat-label="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function Y(t, e) {
            return t.w(' class="Bgc(#6f06f6) C(#fff) Bdrs(2px) Px(4px) Py(2px)"')
        }

        function G(t, e) {
            return t.s(e.get(["publisher"], !1), e, {
                block: J
            }, {})
        }

        function J(t, e) {
            return t.w('<span class="Fz(11px) Td(n) C(gray_dark) Fw(n) Tt(c) Mt(2px) Mstart(6px)"> ').f(e.getPath(!0, []), e, "h", ["s"]).w("</span>")
        }

        function K(t, e) {
            return t.x(e.get(["previewLink"], !1), e, {
                "else": Q,
                block: X
            }, {})
        }

        function Q(t, e) {
            return t.w('href="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function X(t, e) {
            return t.w('href="').f(e.get(["previewLink"], !1), e, "h").w('" data-share-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function Z(t, e) {
            return t.w('href="').f(e.get(["rdSigLink"], !1), e, "h").w('" data-orig-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function tt(t, e) {
            return t.w("Pos(r)")
        }

        function et(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function nt(t, e) {
            return t.w('target="_blank"')
        }

        function rt(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function ot(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function dt(t, e) {
            return t.w('rel="nofollow"')
        }

        function ut(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function it(t, e) {
            return t.w(' class="D(ib) LineClamp(2,42px)"')
        }

        function at(t, e) {
            return t.w("strm-stretch")
        }

        function st(t, e) {
            return t.w('<p class="').nx(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: ct
            }, {}).w(' stream-summary LineClamp(2,34px) Lh(17px) C($gray) Bfv(h) D(n)--md1160">').f(e.get(["summary"], !1), e, "h", ["s"]).w("</p>")
        }

        function ct(t, e) {
            return t.w("Pos(r)")
        }

        function lt(t, e) {
            return t.s(e.get(["publisher"], !1), e, {
                block: _t
            }, {})
        }

        function _t(t, e) {
            return t.w('<span class="Fz(11px) Td(n) C(gray_dark) Fw(n) D(ib) Tt(c) Mt(2px)">').f(e.getPath(!0, []), e, "h", ["s"]).w("</span>")
        }

        function ft(t, e) {
            return t.w('\n<div class="Mt(8px) Mt(7px)--md1160 Ov(h)">\n            ').s(e.get(["storyline"], !1), e, {
                block: gt
            }, {}).w("\n</div>\n        ")
        }

        function gt(t, e) {
            return t.w("\n").h("lt", e, {
                block: wt
            }, {
                key: e.get(["$idx"], !1),
                value: 2
            }).w("\n")
        }

        function wt(t, e) {
            return t.w("\n<a ").x(e.getPath(!0, ["rdSigLink"]), e, {
                "else": ht,
                block: yt
            }, {}).w(' data-uuid="').f(e.getPath(!0, ["uuid"]), e, "h").w('" class="O(n):f C($m_blue):f Pos(r) Mih(70px) Mih(0)--md1160').h("eq", e, {
                block: bt
            }, {
                key: e.get(["$idx"], !1),
                value: 0
            }).x(e.getPath(!1, ["image", "url"]), e, {
                block: mt
            }, {}).w(" Fl(start) W(50%) W(a)--md1160 strm-sl-link js-stream-content-link js-stream-item-title js-content-title").x(e.get(["viewer_eligible"], !1), e, {
                block: Bt
            }, {}).w(" C($link) C($m_blue):h Td(n) Fz(12px) Bxz(bb)").h("eq", e, {
                block: xt
            }, {
                key: e.get(["$idx"], !1),
                value: 0
            }).w('" ').x(e.get(["tab"], !1), e, {
                block: Pt
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "rhdln",
                elmt: "ct",
                r: vt,
                ccode: Lt,
                t4: "rel",
                cposy: Ct,
                pos: Tt,
                g: Mt
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: jt
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: Ft
            }, {}).w(">").x(e.get(["image"], !1), e, {
                block: Dt
            }, {}).w('<div class="D(ib)').x(e.getPath(!1, ["image", "url"]), e, {
                block: qt
            }, {}).w('"><div class="Mend(7px) Lh(15px) LineClamp(3,45px) Fw(b) D(i)--md1160">').f(e.getPath(!0, ["title"]), e, "h", ["s"]).w("</div>").s(e.getPath(!0, ["publisher"]), e, {
                block: Et
            }, {}).w("</div></a>\n            ")
        }

        function ht(t, e) {
            return t.x(e.getPath(!0, ["previewLink"]), e, {
                "else": pt,
                block: kt
            }, {})
        }

        function pt(t, e) {
            return t.w('href="').f(e.getPath(!0, ["link"]), e, "h").w('"')
        }

        function kt(t, e) {
            return t.w('href="').f(e.getPath(!0, ["previewLink"]), e, "h").w('" data-share-link="').f(e.getPath(!0, ["link"]), e, "h").w('"')
        }

        function yt(t, e) {
            return t.w('href="').f(e.getPath(!0, ["rdSigLink"]), e, "h").w('" data-orig-link="').f(e.getPath(!0, ["link"]), e, "h").w('"')
        }

        function bt(t, e) {
            return t.w(" Mb(6px)--md1160")
        }

        function mt(t, e) {
            return t.w(" Pstart(82px) Pstart(0)--md1160")
        }

        function Bt(t, e) {
            return t.w(" js-sl js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function xt(t, e) {
            return t.w(" Pend(13px)")
        }

        function Pt(t, e) {
            return t.w('target="_blank"')
        }

        function vt(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function Lt(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function Ct(t, e) {
            return t.f(e.getPath(!0, ["cposy"]), e, "h")
        }

        function Tt(t, e) {
            return t.f(e.getPath(!0, ["pos"]), e, "h")
        }

        function Mt(t, e) {
            return t.f(e.getPath(!0, ["uuid"]), e, "h")
        }

        function jt(t, e) {
            return t.w('rel="nofollow"')
        }

        function Ft(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function Dt(t, e) {
            return t.h("img", e, {}, {
                src: St,
                height: Wt,
                width: $t,
                defer: zt,
                "class": "Maw(100%) H(a) Mend(12px) Va(t) Pos(a) Start(0) rounded-img D(n)--md1160"
            })
        }

        function St(t, e) {
            return t.f(e.getPath(!1, ["image", "url"]), e, "h")
        }

        function Wt(t, e) {
            return t.f(e.getPath(!1, ["image", "height"]), e, "h")
        }

        function $t(t, e) {
            return t.f(e.getPath(!1, ["image", "width"]), e, "h")
        }

        function zt(t, e) {
            return t.f(e.getPath(!1, ["image", "defer"]), e, "h")
        }

        function qt(t, e) {
            return t.w(" W(100%)")
        }

        function Et(t, e) {
            return t.w('<span class="Fz(11px) Td(n) C(gray_dark) Fw(n) D(b) Mt(2px) Whs(pl) Tt(c) D(i)--md1160">').f(e.getPath(!0, []), e, "h", ["s"]).w("</span>")
        }

        function It(t, e) {
            return t.w('<div class="Pos(a) End(0) T(0) W(30px) Mend(2px) Ta(end)">').p(Ht, e, {}).w("</div>")
        }

        function Ht(t, e) {
            return t.f(e.getPath(!1, ["config", "template", "drawer_action"]), e, "h")
        }
        return dust.register("td-applet-stream-atomic-templates-item-default_clusters", e), e.__dustBody = !0, n.__dustBody = !0, r.__dustBody = !0, o.__dustBody = !0, d.__dustBody = !0, u.__dustBody = !0, i.__dustBody = !0,
            a.__dustBody = !0, s.__dustBody = !0, c.__dustBody = !0, l.__dustBody = !0, _.__dustBody = !0, f.__dustBody = !0, g.__dustBody = !0, w.__dustBody = !0, h.__dustBody = !0, p.__dustBody = !0, k.__dustBody = !0, y.__dustBody = !0, b.__dustBody = !0, m.__dustBody = !0, B.__dustBody = !0, x.__dustBody = !0, P.__dustBody = !0, v.__dustBody = !0, L.__dustBody = !0, C.__dustBody = !0, T.__dustBody = !0, M.__dustBody = !0, j.__dustBody = !0, F.__dustBody = !0, D.__dustBody = !0, S.__dustBody = !0, W.__dustBody = !0, $.__dustBody = !0, z.__dustBody = !0, q.__dustBody = !0, E.__dustBody = !0, I.__dustBody = !0, H.__dustBody = !0, O.__dustBody = !0, A.__dustBody = !0, R.__dustBody = !0, N.__dustBody = !0, U.__dustBody = !0, V.__dustBody = !0, Y.__dustBody = !0, G.__dustBody = !0, J.__dustBody = !0, K.__dustBody = !0, Q.__dustBody = !0, X.__dustBody = !0, Z.__dustBody = !0, tt.__dustBody = !0, et.__dustBody = !0, nt.__dustBody = !0, rt.__dustBody = !0, ot.__dustBody = !0, dt.__dustBody = !0, ut.__dustBody = !0, it.__dustBody = !0, at.__dustBody = !0, st.__dustBody = !0, ct.__dustBody = !0, lt.__dustBody = !0, _t.__dustBody = !0, ft.__dustBody = !0, gt.__dustBody = !0, wt.__dustBody = !0, ht.__dustBody = !0, pt.__dustBody = !0, kt.__dustBody = !0, yt.__dustBody = !0, bt.__dustBody = !0, mt.__dustBody = !0, Bt.__dustBody = !0, xt.__dustBody = !0, Pt.__dustBody = !0, vt.__dustBody = !0, Lt.__dustBody = !0, Ct.__dustBody = !0, Tt.__dustBody = !0, Mt.__dustBody = !0, jt.__dustBody = !0, Ft.__dustBody = !0, Dt.__dustBody = !0, St.__dustBody = !0, Wt.__dustBody = !0, $t.__dustBody = !0, zt.__dustBody = !0, qt.__dustBody = !0, Et.__dustBody = !0, It.__dustBody = !0, Ht.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/default_clusters.dust"] = dust.cache["td-applet-stream-atomic:item/default_clusters"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/default_clusters"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-item-play_icon", "td-applet-stream-atomic-templates-item-followable"]
});
YUI.add("td-applet-stream-atomic-templates-item-default_sm", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('<div class="').x(e.getPath(!1, ["images", "default"]), e, {
                block: a
            }, {}).w(' Pos(r)">\n').s(e.getPath(!1, ["images", "default"]), e, {
                block: n
            }, {}).w("<a ").x(e.get(["rdSigLink"], !1), e, {
                "else": u,
                block: l
            }, {}).w(' class="D(b) Mt(-3px) Td(n) Td(n):f ').x(e.getPath(!1, ["images", "default"]), e, {
                block: m
            }, {}).w(" js-stream-content-link js-stream-item-title ").x(e.get(["viewer_eligible"], !1), e, {
                block: _
            }, {}).w('" ').x(e.get(["tab"], !1), e, {
                block: p
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "img",
                elmt: "ct",
                r: f,
                ccode: h,
                slk: w
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: g
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: k
            }, {}).w('><h3 class="M(0) Mb(4px) Mt(-2px) Fw(b) Fz(16px) Fz(15px)--maw370 Lh(1.3) LineClamp(3,4em) LineClamp(2,2.7em)--maw370 Bfv(h) C(#000)">').f(e.get(["title"], !1), e, "h", ["s"]).w("</h3>").x(e.get(["publisher"], !1), e, {
                block: x
            }, {}).w('\n<u class="StretchedBox"></u>\n\t</a>\n\t').x(e.get(["actionsEnabled"], !1), e, {
                block: B
            }, {}).w("\n</div>")
        }

        function a(t, e) {
            return t.w("Pstart(120px) Pstart(100px)--maw370 Mih(103px) Mih(83px)--maw370")
        }

        function n(t, e) {
            return t.h("img", e, {}, {
                src: s,
                height: r,
                width: d,
                "class": "Pos(a) Start(0) T(3px) Bdrs(2px) Mend(20px) W(80px)--maw370 H(80px)--maw370",
                defer: i
            }).p("td-applet-stream-atomic:item/play_icon_sm", e, {})
        }

        function s(t, e) {
            return t.f(e.get(["url"], !1), e, "h")
        }

        function r(t, e) {
            return t.f(e.get(["height"], !1), e, "h")
        }

        function d(t, e) {
            return t.f(e.get(["width"], !1), e, "h")
        }

        function i(t, e) {
            return t.f(e.get(["defer"], !1), e, "h")
        }

        function u(t, e) {
            return t.x(e.get(["previewLink"], !1), e, {
                "else": o,
                block: c
            }, {})
        }

        function o(t, e) {
            return t.w('href="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function c(t, e) {
            return t.w('href="').f(e.get(["previewLink"], !1), e, "h").w('" data-share-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function l(t, e) {
            return t.w('href="').f(e.get(["rdSigLink"], !1), e, "h").w('" data-orig-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function m(t, e) {
            return t.w("streamImage")
        }

        function _(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function p(t, e) {
            return t.w('target="_blank"')
        }

        function f(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function h(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function w(t, e) {
            return t.f(e.get(["title"], !1), e, "h", ["s"])
        }

        function g(t, e) {
            return t.w('rel="nofollow"')
        }

        function k(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function x(t, e) {
            return t.w('<p class="Fz(12px) C(#959595) Ell Mb(2px)">').f(e.get(["publisher"], !1), e, "h", ["s"]).w("</p>")
        }

        function B(t, e) {
            return t.p("td-applet-stream-atomic:item/ntk_actions_sm", e, {})
        }
        return dust.register("td-applet-stream-atomic-templates-item-default_sm", e), e.__dustBody = !0, a.__dustBody = !0, n.__dustBody = !0, s.__dustBody = !0, r.__dustBody = !0, d.__dustBody = !0, i.__dustBody = !0, u.__dustBody = !0, o.__dustBody = !0, c.__dustBody = !0, l.__dustBody = !0, m.__dustBody = !0, _.__dustBody = !0, p.__dustBody = !0, f.__dustBody = !0, h.__dustBody = !0, w.__dustBody = !0, g.__dustBody = !0, k.__dustBody = !0, x.__dustBody = !0, B.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/default_sm.dust"] = dust.cache["td-applet-stream-atomic:item/default_sm"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/default_sm"] = function(t, a) {
        t = t || {}, dust.render(e, t, a)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-item-play_icon_sm", "td-applet-stream-atomic-templates-item-ntk_actions_sm"]
});
YUI.add("td-applet-stream-atomic-templates-item-default_tb", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('<div class="Pos(r)').x(e.getPath(!1, ["images", "default"]), e, {
                "else": n,
                block: a
            }, {}).w('">\n').s(e.getPath(!1, ["images", "default"]), e, {
                block: s
            }, {}).w("<a ").x(e.get(["rdSigLink"], !1), e, {
                "else": _,
                block: h
            }, {}).w(' class="D(b) Mt(-3px) Td(n) Td(n):f ').x(e.getPath(!1, ["images", "default"]), e, {
                block: w
            }, {}).w(" js-stream-content-link js-stream-item-title ").x(e.get(["viewer_eligible"], !1), e, {
                block: g
            }, {}).w('" ').x(e.get(["tab"], !1), e, {
                block: x
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "img",
                elmt: "ct",
                r: b,
                ccode: y
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: B
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: k
            }, {}).w('><h3 class="M(0) Mb(4px) Mt(-2px) Fw(b) Fz(21px) Lh(1.3) LineClamp(2,2.7em) LineClamp(3,4em)--miw1024 Bfv(h) C(#000)">').f(e.get(["title"], !1), e, "h", ["s"]).w('</h3><u class="StretchedBox"></u></a>\n    ').x(e.get(["summary"], !1), e, {
                block: P
            }, {}).w('\n<div class="Mt(10px) Va(m)">\n        ').x(e.get(["actionsEnabled"], !1), e, {
                block: v
            }, {}).w("\n").x(e.get(["publisher"], !1), e, {
                block: L
            }, {}).w("\n</div>\n</div>\n")
        }

        function n(t, e) {
            return t.w(" Mih(82px)")
        }

        function a(t, e) {
            return t.w(" Mih(143px) Mih(163px)--miw1024").x(e.getPath(!1, ["config", "ui", "rightAlign"]), e, {
                "else": r,
                block: i
            }, {})
        }

        function r(t, e) {
            return t.w(" Pstart(289px) Pstart(334px)--miw1024")
        }

        function i(t, e) {
            return t.w(" Pend(289px) Pend(334px)--miw1024")
        }

        function s(t, e) {
            return t.x(e.getPath(!1, ["config", "ui", "rightAlign"]), e, {
                "else": u,
                block: c
            }, {}).p("td-applet-stream-atomic:item/play_icon_tb", e, {})
        }

        function u(t, e) {
            return t.h("img", e, {}, {
                src: d,
                "class": "Pos(a) Start(0) T(3px) Bdrs(2px) W(249px) H(140px) W(284px)--miw1024 H(160px)--miw1024",
                defer: o
            })
        }

        function d(t, e) {
            return t.f(e.get(["url"], !1), e, "h")
        }

        function o(t, e) {
            return t.f(e.get(["defer"], !1), e, "h")
        }

        function c(t, e) {
            return t.h("img", e, {}, {
                src: l,
                "class": "Pos(a) End(0) T(3px) Bdrs(2px) W(249px) H(140px) W(284px)--miw1024 H(160px)--miw1024",
                defer: p
            })
        }

        function l(t, e) {
            return t.f(e.get(["url"], !1), e, "h")
        }

        function p(t, e) {
            return t.f(e.get(["defer"], !1), e, "h")
        }

        function _(t, e) {
            return t.x(e.get(["previewLink"], !1), e, {
                "else": m,
                block: f
            }, {})
        }

        function m(t, e) {
            return t.w('href="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function f(t, e) {
            return t.w('href="').f(e.get(["previewLink"], !1), e, "h").w('" data-share-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function h(t, e) {
            return t.w('href="').f(e.get(["rdSigLink"], !1), e, "h").w('" data-orig-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function w(t, e) {
            return t.w("streamImage")
        }

        function g(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function x(t, e) {
            return t.w('target="_blank"')
        }

        function b(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function y(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function B(t, e) {
            return t.w('rel="nofollow"')
        }

        function k(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function P(t, e) {
            return t.w('<p class="stream-summary Fz(15px) LineClamp(2,42px) Lh(21px) C($gray) Bfv(h)">').f(e.get(["summary"], !1), e, "h", ["s"]).w("</p>")
        }

        function v(t, e) {
            return t.p("td-applet-stream-atomic:item/ntk_actions_tb", e, {})
        }

        function L(t, e) {
            return t.w('<p class="Va(m) D(ib) Fz(12px) C(#959595) Ell Lh(20px)">').x(e.get(["commentCount"], !1), e, {
                block: C
            }, {}).f(e.get(["publisher"], !1), e, "h", ["s"]).w("</p>")
        }

        function C(t, e) {
            return t.w("&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;")
        }
        return dust.register("td-applet-stream-atomic-templates-item-default_tb", e), e.__dustBody = !0, n.__dustBody = !0, a.__dustBody = !0, r.__dustBody = !0, i.__dustBody = !0, s.__dustBody = !0, u.__dustBody = !0, d.__dustBody = !0, o.__dustBody = !0, c.__dustBody = !0, l.__dustBody = !0, p.__dustBody = !0, _.__dustBody = !0, m.__dustBody = !0, f.__dustBody = !0, h.__dustBody = !0, w.__dustBody = !0, g.__dustBody = !0, x.__dustBody = !0, b.__dustBody = !0, y.__dustBody = !0, B.__dustBody = !0, k.__dustBody = !0, P.__dustBody = !0, v.__dustBody = !0, L.__dustBody = !0, C.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/default_tb.dust"] = dust.cache["td-applet-stream-atomic:item/default_tb"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/default_tb"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-item-play_icon_tb", "td-applet-stream-atomic-templates-item-ntk_actions_tb"]
});
YUI.add("td-applet-stream-atomic-templates-item-default_v2", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('<div class="Pos(r) Wow(bw) Cf">\n').x(e.getPath(!1, ["images", "default"]), e, {
                "else": n,
                block: w
            }, {}).w("\n").x(e.get(["actionsEnabled"], !1), e, {
                block: V
            }, {}).w("\n</div>\n")
        }

        function n(t, e) {
            return t.w('\n<div class="Fl(start) Pos(r) strm-headline strm-full Maw(580px)">').x(e.get(["storyLabel"], !1), e, {
                block: a
            }, {}).w('\n<h3 class="Mb(6px) LineClamp(2,44px) Lh(22px)">\n            <a href="').f(e.get(["link"], !1), e, "h").w('" class="Pos(r) js-stream-content-link js-stream-item-title').x(e.get(["viewer_eligible"], !1), e, {
                block: l
            }, {}).w(' js-content-title C($link) C($m_blue):h Td(n) Fz(18px) Fw(b)" ').x(e.get(["tab"], !1), e, {
                block: i
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "hdln",
                elmt: "ct",
                r: d,
                ccode: c
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: u
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: _
            }, {}).w('><span class="D(ib) LineClamp(2,44px)">').f(e.get(["title"], !1), e, "h", ["s"]).w('</span><u class="Pos(a) T(0) Start(0) W(100%) H(100%)"></u></a>\n        </h3>\n        <div>\n            ').x(e.get(["summary"], !1), e, {
                block: p
            }, {}).w("\n").s(e.get(["publisher"], !1), e, {
                block: f
            }, {}).w("\n</div>\n        ").x(e.get(["storyline"], !1), e, {
                block: m
            }, {}).w("\n</div>\n")
        }

        function a(t, e) {
            return t.w('<span class="C(c_').s(e.get(["categoryLabel"], !1), e, {
                "else": o,
                block: s
            }, {}).w(') Tt(c) Fw(500) Mb(3px) D(ib) Fz(12px)"').s(e.get(["categoryLabel"], !1), e, {
                block: r
            }, {}).w(">").f(e.get(["storyLabel"], !1), e, "h", ["s"]).w("</span>")
        }

        function o(t, e) {
            return t.f(e.get(["property"], !1), e, "h")
        }

        function s(t, e) {
            return t.f(e.getPath(!0, []), e, "h")
        }

        function r(t, e) {
            return t.w(' data-cat-label="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function l(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function i(t, e) {
            return t.w('target="_blank"')
        }

        function d(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function c(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function u(t, e) {
            return t.w('rel="nofollow"')
        }

        function _(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function p(t, e) {
            return t.w('<p class="Pos(r) stream-summary LineClamp(2,34px) Lh(17px) C($gray) Bfv(h)">').f(e.get(["summary"], !1), e, "h", ["s"]).w("</p>")
        }

        function f(t, e) {
            return t.w('<span class="Fz(11px) Td(n) C(gray_dark) Fw(n) D(ib) Mt(4px)">').f(e.getPath(!0, []), e, "h", ["s"]).w("</span>")
        }

        function m(t, e) {
            return t.w('<div class="Mt(10px)">').p("td-applet-stream-atomic:item/storyline", e, {
                total: e.getPath(!1, ["config", "ui", "storyline_cap_noimage"])
            }).w("</div>")
        }

        function w(t, e) {
            return t.w("\n").s(e.getPath(!1, ["images", "default"]), e, {
                block: g
            }, {}).w('\n<div class="strm-right Fl(start)"><div class="strm-headline">\n            ').x(e.get(["storyLabel"], !1), e, {
                block: W
            }, {}).w('\n<h3 class="M(0) Lh(22px)">\n                <a href="').f(e.get(["link"], !1), e, "h").w('" class="Pos(r) js-stream-content-link js-stream-item-title').x(e.get(["viewer_eligible"], !1), e, {
                block: $
            }, {}).w(' js-content-title C($link) C($m_blue):h Td(n) Fz(18px) Fw(b)" ').x(e.get(["tab"], !1), e, {
                block: S
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "hdln",
                elmt: "ct",
                r: H,
                ccode: O
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: E
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: q
            }, {}).w('><span class="D(ib) LineClamp(2,44px)">').f(e.get(["title"], !1), e, "h", ["s"]).w('</span><u class="Pos(a) T(0) Start(0) W(100%) H(100%)"></u></a>\n            </h3>\n            <div>\n                ').x(e.get(["summary"], !1), e, {
                block: N
            }, {}).w("\n").s(e.get(["publisher"], !1), e, {
                block: R
            }, {}).w("\n</div>\n        </div>\n        ").x(e.get(["storyline"], !1), e, {
                block: U
            }, {}).w("\n</div>\n")
        }

        function g(t, e) {
            return t.w('\n<div class="strm-left Fl(start) Pos(r) Pend(20px)"><div class="Pos(r) W(100%) strm-headline Ov(h)"><a href="').f(e.get(["link"], !1), e, "h").w('" class="Pos(r) D(ib) js-stream-content-link').x(e.get(["storylineMultiImage"], !1), e, {
                block: b
            }, {}).x(e.get(["primaryImgFallback"], !1), e, {
                block: h
            }, {}).w(" ").x(e.get(["viewer_eligible"], !1), e, {
                block: y
            }, {}).w('" ').x(e.get(["tab"], !1), e, {
                block: k
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "img",
                elmt: "ct",
                r: x,
                ccode: B
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: v
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: P
            }, {}).w(">").h("img", e, {}, {
                src: C,
                "class": "W(100%) rounded-img",
                defer: F
            }).x(e.get(["followable"], !1), e, {
                block: L
            }, {}).nx(e.get(["followable"], !1), e, {
                block: j
            }, {}).w("</a>").x(e.get(["followable"], !1), e, {
                block: M
            }, {}).w("</div>\n        ").p("td-applet-stream-atomic:item/storyline_images", e, {}).w("\n</div>\n    ")
        }

        function b(t, e) {
            return t.w(" storyline-main-img")
        }

        function h(t, e) {
            return t.w(" W(100%) Ov(h) Mah(195px) rounded-img")
        }

        function y(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function k(t, e) {
            return t.w('target="_blank"')
        }

        function x(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function B(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function v(t, e) {
            return t.w('rel="nofollow"')
        }

        function P(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function C(t, e) {
            return t.f(e.get(["url"], !1), e, "h")
        }

        function F(t, e) {
            return t.f(e.get(["defer"], !1), e, "h")
        }

        function L(t, e) {
            return t.nx(e.get(["primaryImgFallback"], !1), e, {
                block: T
            }, {})
        }

        function T(t, e) {
            return t.w('<div class="strm-img-gradient Pos(a) W(100%) H(100%) T(0) Start(0)"></div>')
        }

        function j(t, e) {
            return t.p("td-applet-stream-atomic:item/play_icon", e, {})
        }

        function M(t, e) {
            return t.p("td-applet-stream-atomic:item/followable", e, {})
        }

        function W(t, e) {
            return t.w('<span class="js-content-label C(c_').s(e.get(["categoryLabel"], !1), e, {
                "else": D,
                block: z
            }, {}).w(') Tt(c) Fw(500) Mb(3px) D(ib) Fz(13px)"').s(e.get(["categoryLabel"], !1), e, {
                block: I
            }, {}).w(">").f(e.get(["storyLabel"], !1), e, "h", ["s"]).w("</span>")
        }

        function D(t, e) {
            return t.f(e.get(["property"], !1), e, "h")
        }

        function z(t, e) {
            return t.f(e.getPath(!0, []), e, "h")
        }

        function I(t, e) {
            return t.w(' data-cat-label="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function $(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function S(t, e) {
            return t.w('target="_blank"')
        }

        function H(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function O(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function E(t, e) {
            return t.w('rel="nofollow"')
        }

        function q(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function N(t, e) {
            return t.w('<p class="Pos(r) stream-summary LineClamp(2,34px) Lh(17px) C($gray) Bfv(h)">').f(e.get(["summary"], !1), e, "h", ["s"]).w("</p>")
        }

        function R(t, e) {
            return t.w('<span class="Fz(11px) Td(n) C(gray_dark) Fw(n) D(ib) Mt(4px)">').f(e.getPath(!0, []), e, "h", ["s"]).w("</span>")
        }

        function U(t, e) {
            return t.w('<div class="Mt(10px)">').p("td-applet-stream-atomic:item/storyline", e, {
                total: e.get(["storylineImageCount"], !1)
            }).w("</div>")
        }

        function V(t, e) {
            return t.w('<div class="Fl(end) W(30px) Ta(end)">').p(Y, e, {}).w("</div>")
        }

        function Y(t, e) {
            return t.f(e.getPath(!1, ["config", "template", "drawer_action"]), e, "h")
        }
        return dust.register("td-applet-stream-atomic-templates-item-default_v2", e), e.__dustBody = !0, n.__dustBody = !0, a.__dustBody = !0, o.__dustBody = !0, s.__dustBody = !0, r.__dustBody = !0, l.__dustBody = !0, i.__dustBody = !0, d.__dustBody = !0, c.__dustBody = !0, u.__dustBody = !0, _.__dustBody = !0, p.__dustBody = !0, f.__dustBody = !0, m.__dustBody = !0, w.__dustBody = !0, g.__dustBody = !0, b.__dustBody = !0, h.__dustBody = !0, y.__dustBody = !0, k.__dustBody = !0, x.__dustBody = !0, B.__dustBody = !0, v.__dustBody = !0, P.__dustBody = !0, C.__dustBody = !0, F.__dustBody = !0, L.__dustBody = !0, T.__dustBody = !0, j.__dustBody = !0, M.__dustBody = !0, W.__dustBody = !0, D.__dustBody = !0, z.__dustBody = !0, I.__dustBody = !0, $.__dustBody = !0, S.__dustBody = !0, H.__dustBody = !0, O.__dustBody = !0, E.__dustBody = !0, q.__dustBody = !0, N.__dustBody = !0, R.__dustBody = !0, U.__dustBody = !0, V.__dustBody = !0, Y.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/default_v2.dust"] = dust.cache["td-applet-stream-atomic:item/default_v2"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/default_v2"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-item-play_icon", "td-applet-stream-atomic-templates-item-followable", "td-applet-stream-atomic-templates-item-storyline_images", "td-applet-stream-atomic-templates-item-storyline"]
});
YUI.add("td-applet-stream-atomic-templates-item-featured_ad", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w("<li ").x(e.getPath(!1, ["config", "yaftTrackingEnabled"]), e, {
                block: n
            }, {}).w(' class="').x(e.get(["beacon"], !1), e, {
                block: a
            }, {}).w(" ").x(e.getPath(!1, ["config", "ads", "adblock"]), e, {
                block: o
            }, {}).w("js-stream-ad ").x(e.get(["isVideo"], !1), e, {
                block: d
            }, {}).w(' Wow(bw) Pos(r) Mx(a) Mt(-1px) Bxz(bb) Bgc(#fff)" ').x(e.get(["beacon"], !1), e, {
                block: i
            }, {}).x(e.get(["cpi"], !1), e, {
                block: c
            }, {}).s(e.get(["imprTrackingUrl"], !1), e, {
                block: s
            }, {}).x(e.get(["imprTrackingUrls"], !1), e, {
                block: u
            }, {}).x(e.getPath(!1, ["config", "ads", "feedback"]), e, {
                block: l
            }, {}).w(' data-uuid="').f(e.get(["id"], !1), e, "h").w('" ').x(e.get(["partial_view_beacon"], !1), e, {
                block: f
            }, {}).w(" ").x(e.get(["generic_view_beacon"], !1), e, {
                block: g
            }, {}).x(e.getPath(!1, ["config", "ui", "hideVideoTitleOnHover"]), e, {
                block: h
            }, {}).w('>\n    <div class="js-stream-item-wrap Py(15px) Pos(r)">\n        <div class="Pos(r) Wow(bw) Cf').x(e.get(["actionsEnabled"], !1), e, {
                block: b
            }, {}).w('">\n            ').s(e.get(["image"], !1), e, {
                block: p
            }, {}).w('\n<div class="strm-right Fl(start) W(66%)">\n                ').x(e.getPath(!1, ["config", "ads", "sponsored_url"]), e, {
                block: M
            }, {}).w("\n").x(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: S
            }, {}).w('\n<h3 class="Mb(4px) Lh(21px)">\n                        <a href="').f(e.get(["link"], !1), e, "h").w('" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "hdln",
                elmt: "ad",
                ccode: $
            }).w(' class="').nx(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: H
            }, {}).w(' D(b) js-stream-content-link js-stream-item-title js-content-title Td(n) Fz(17px) Fw(b) C($link) C($m_blue):h O(n):f C($m_blue):f" rel="nofollow noopener noreferrer">\n                            <span>').f(e.get(["title"], !1), e, "h", ["s"]).w('</span>\n                            <u class="Pos(a) T(0) Start(0) W(100%) H(100%) ').x(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: N
            }, {}).w('"></u>\n                        </a>\n                    </h3>\n                    <div>\n                        ').x(e.get(["summary"], !1), e, {
                block: R
            }, {}).w("\n").x(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: q
            }, {}).w("\n").nx(e.getPath(!1, ["config", "ui", "publisher_headline"]), e, {
                block: Y
            }, {}).w("\n").x(e.get(["cpi"], !1), e, {
                block: K
            }, {}).w("\n").x(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: X
            }, {}).w("\n</div>\n            </div>\n            ").x(e.getPath(!1, ["config", "ads", "feedback"]), e, {
                block: Z
            }, {}).w("\n</div>\n    </div>\n</li>\n")
        }

        function n(t, e) {
            return t.s(e.getPath(!1, ["i13n", "cpos"]), e, {
                block: r
            }, {})
        }

        function r(t, e) {
            return t.w('data-yaft-module="stream_item_').f(e.getPath(!0, []), e, "h").w('"')
        }

        function a(t, e) {
            return t.w("js-stream-ad-noview ")
        }

        function o(t, e) {
            return t.w("ysab ")
        }

        function d(t, e) {
            return t.w("js-video-content")
        }

        function i(t, e) {
            return t.w('data-beacon="').f(e.get(["beacon"], !1), e, "h").w('"')
        }

        function c(t, e) {
            return t.w(' style="min-height:48px"')
        }

        function s(t, e) {
            return t.w(' data-impr-beacon="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function u(t, e) {
            return t.w(' data-thirdparty-beacons="').f(e.get(["imprTrackingUrls"], !1), e, "h", ["js"]).w('"')
        }

        function l(t, e) {
            return t.s(e.get(["ad_feedback_beacon"], !1), e, {
                block: _
            }, {})
        }

        function _(t, e) {
            return t.w(' data-ad-feedback-beacon="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function f(t, e) {
            return t.w('data-prtbc="').f(e.get(["partial_view_beacon"], !1), e, "h").w('"')
        }

        function g(t, e) {
            return t.w('data-gnvbc="').f(e.get(["generic_view_beacon"], !1), e, "h").w('"')
        }

        function h(t, e) {
            return t.x(e.get(["isVideo"], !1), e, {
                block: w
            }, {})
        }

        function w(t, e) {
            return t.w(' data-video-cfg=\'{"destroyOnError": true, "hideVideoTitleOnHover": true}\'')
        }

        function b(t, e) {
            return t.w(" Pend(30px)")
        }

        function p(t, e) {
            return t.w('\n<div class="strm-left Fl(start) Pos(r) Mend(18px)">\n                ').x(e.getPath(!1, ["config", "ui", "endcard_cta"]), e, {
                block: m
            }, {}).w('\n<a href="').f(e.get(["link"], !1), e, "h").w('" class="streamImage Pos(r) D(ib) W(100%) ua-ie8_D(i)').x(e.get(["isVideo"], !1), e, {
                block: P
            }, {}).w('" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "img",
                elmt: "ct",
                ccode: v
            }).w(' rel="nofollow noopener noreferrer">\n                    ').h("img", e, {}, {
                src: T,
                height: C,
                width: F,
                "class": "fea-ad H(100%) W(100%) BackgroundPic rounded-img",
                defer: D
            }).w("\n</a>\n            </div>\n            ")
        }

        function m(t, e) {
            return t.w("\n").x(e.get(["isVideo"], !1), e, {
                block: k
            }, {}).w("\n")
        }

        function k(t, e) {
            return t.w('\n<div class="js-cstm-end-screen Pos(a) Ta-c W(100%) H(100%) Dn">\n                            <a target="_blank" href="').f(e.get(["link"], !1), e, "h").w('" rel="nofollow noopener noreferrer" class="D(ib) Ell Td(n) C(white) Bdc(white) Bds(s) Bdrs(2px) Bdw(t) Py(4px) Px(10px) Cur(p) Fz(12px)" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                rspns: "nav",
                ad: "1",
                elm: "btn",
                elmt: "cta",
                itc: "0",
                ccode: y
            }).w(">").x(e.get(["callToAction"], !1), e, {
                block: B
            }, {}).nx(e.get(["callToAction"], !1), e, {
                block: x
            }, {}).w("</a>\n                        </div>\n                    ")
        }

        function y(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function B(t, e) {
            return t.f(e.get(["callToAction"], !1), e, "h")
        }

        function x(t, e) {
            return t.h("i18n_string", e, {}, {
                _key: "LEARN_MORE"
            })
        }

        function P(t, e) {
            return t.w(" js-video-target js-video-image")
        }

        function v(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function T(t, e) {
            return t.f(e.get(["url"], !1), e, "h")
        }

        function C(t, e) {
            return t.f(e.get(["height"], !1), e, "h")
        }

        function F(t, e) {
            return t.f(e.get(["width"], !1), e, "h")
        }

        function D(t, e) {
            return t.f(e.get(["defer"], !1), e, "h")
        }

        function M(t, e) {
            return t.w('\n<div class="Fw(b) Lh(17px) Mb(4px)">\n                    <a class="Mend(4px) Fz(13px) D(ib) Va(m) Td(n) C($sponsored) Tt(c)" href="').f(e.getPath(!1, ["config", "ads", "sponsored_url"]), e, "h").w('" rel="nofollow noopener noreferrer" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "itm",
                elmt: "sp",
                ccode: j
            }).w(">").x(e.get(["sponsoredByLabel"], !1), e, {
                "else": E,
                block: z
            }, {}).w('</a>\n                    <a class="D(ib) Va(m) Td(n) adlink C($sponsored)" href="').f(e.get(["adChoicesUrl"], !1), e, "h").w('" rel="nofollow noopener noreferrer" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "itm",
                elmt: "info",
                ccode: O
            }).w('><i class="Icon-Fp2 IconMoneyball Fz(13px) D(ib)"></i></a>\n                    ').x(e.getPath(!1, ["config", "ui", "publisher_headline"]), e, {
                block: A
            }, {}).w("\n</div>\n                ")
        }

        function j(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function E(t, e) {
            return t.x(e.getPath(!1, ["config", "ads", "advt_text"]), e, {
                "else": V,
                block: L
            }, {})
        }

        function V(t, e) {
            return t.h("i18n_string", e, {}, {
                _key: "SPONSORED"
            })
        }

        function L(t, e) {
            return t.h("i18n_string", e, {}, {
                _key: "ADVERTISEMENT"
            })
        }

        function z(t, e) {
            return t.f(e.get(["sponsoredByLabel"], !1), e, "h", ["s"])
        }

        function O(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function A(t, e) {
            return t.s(e.get(["publisher"], !1), e, {
                block: I
            }, {})
        }

        function I(t, e) {
            return t.w('<a class="Fz(11px) D(ib) Td(n) C(gray_dark) Va(m) Fw(n) Mstart(9px)" href="').f(e.get(["link"], !1), e, "h").w('" rel="nofollow noopener noreferrer" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "itm",
                elmt: "ad",
                ccode: W
            }).w(">").f(e.getPath(!0, []), e, "h", ["s"]).w("</a>")
        }

        function W(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function S(t, e) {
            return t.w('<div class="Pos(r)">')
        }

        function $(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function H(t, e) {
            return t.w("Pos(r)")
        }

        function N(t, e) {
            return t.w("strm-stretch")
        }

        function R(t, e) {
            return t.w('<p class="').nx(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: U
            }, {}).w(' stream-summary LineClamp(2,36px) Lh(17px) C($gray) Bfv(h)">').f(e.get(["summary"], !1), e, "h", ["s"]).w("</p>")
        }

        function U(t, e) {
            return t.w("Pos(r)")
        }

        function q(t, e) {
            return t.w('</div><div class="Pos(r)">')
        }

        function Y(t, e) {
            return t.s(e.get(["publisher"], !1), e, {
                block: G
            }, {})
        }

        function G(t, e) {
            return t.w('<a class="Fz(11px) D(ib) Td(n) C(gray_dark) Mt(4px)" href="').f(e.get(["link"], !1), e, "h").w('" rel="nofollow noopener noreferrer" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "itm",
                elmt: "ad",
                ccode: J
            }).w(">").f(e.getPath(!0, []), e, "h", ["s"]).w("</a>")
        }

        function J(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function K(t, e) {
            return t.w('\n<a target="_blank" href="').f(e.get(["link"], !1), e, "h").w('" rel="nofollow noopener noreferrer" class="Fl(end) C(gray_dark) Bdc(gray_dark) Bds(s) Bdrs(5px) Bdw(t) Mt(5px) Py(4px) Px(20px) Cur(p) Fz(14px) D(ib) Td(n)" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                rspns: "nav",
                ad: "1",
                elm: "btn",
                elmt: "instl",
                itc: "0",
                ccode: Q
            }).w(">").h("i18n_string", e, {}, {
                _key: "INSTALL_APP"
            }).w("</a>\n                        ")
        }

        function Q(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function X(t, e) {
            return t.w("</div>")
        }

        function Z(t, e) {
            return t.p("td-applet-stream-atomic:item/ad_dislike", e, {})
        }
        return dust.register("td-applet-stream-atomic-templates-item-featured_ad", e), e.__dustBody = !0, n.__dustBody = !0, r.__dustBody = !0, a.__dustBody = !0, o.__dustBody = !0, d.__dustBody = !0, i.__dustBody = !0, c.__dustBody = !0, s.__dustBody = !0, u.__dustBody = !0, l.__dustBody = !0, _.__dustBody = !0, f.__dustBody = !0, g.__dustBody = !0, h.__dustBody = !0, w.__dustBody = !0, b.__dustBody = !0, p.__dustBody = !0, m.__dustBody = !0, k.__dustBody = !0, y.__dustBody = !0, B.__dustBody = !0, x.__dustBody = !0, P.__dustBody = !0, v.__dustBody = !0, T.__dustBody = !0, C.__dustBody = !0, F.__dustBody = !0, D.__dustBody = !0, M.__dustBody = !0, j.__dustBody = !0, E.__dustBody = !0, V.__dustBody = !0, L.__dustBody = !0, z.__dustBody = !0, O.__dustBody = !0, A.__dustBody = !0, I.__dustBody = !0, W.__dustBody = !0, S.__dustBody = !0, $.__dustBody = !0, H.__dustBody = !0, N.__dustBody = !0, R.__dustBody = !0, U.__dustBody = !0, q.__dustBody = !0, Y.__dustBody = !0, G.__dustBody = !0, J.__dustBody = !0, K.__dustBody = !0, Q.__dustBody = !0, X.__dustBody = !0, Z.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/featured_ad.dust"] = dust.cache["td-applet-stream-atomic:item/featured_ad"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/featured_ad"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-item-ad_dislike"]
});
YUI.add("td-applet-stream-atomic-templates-item-featured_ad_v2", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('<li class="').x(e.get(["beacon"], !1), e, {
                block: a
            }, {}).w(" ").x(e.getPath(!1, ["config", "ads", "adblock"]), e, {
                block: n
            }, {}).w("js-stream-ad ").x(e.get(["isVideo"], !1), e, {
                block: d
            }, {}).w(' Wow(bw) Pos(r) Mx(a) Mt(-1px) Bxz(bb) Bgc(#fff)" ').x(e.get(["beacon"], !1), e, {
                block: r
            }, {}).x(e.get(["cpi"], !1), e, {
                block: s
            }, {}).s(e.get(["imprTrackingUrl"], !1), e, {
                block: o
            }, {}).x(e.get(["imprTrackingUrls"], !1), e, {
                block: c
            }, {}).x(e.getPath(!1, ["config", "ads", "feedback"]), e, {
                block: i
            }, {}).w(' data-uuid="').f(e.get(["id"], !1), e, "h").w('" ').x(e.get(["partial_view_beacon"], !1), e, {
                block: _
            }, {}).w(" ").x(e.get(["generic_view_beacon"], !1), e, {
                block: l
            }, {}).w('>\n    <div class="js-stream-item-wrap Py(22px) Pos(r)">\n        <div class="Pos(r) Wow(bw) Cf">\n            ').s(e.get(["image"], !1), e, {
                block: f
            }, {}).w('\n<div class="strm-right Fl(start)">\n                ').x(e.getPath(!1, ["config", "ads", "sponsored_url"]), e, {
                block: h
            }, {}).w('\n<h3 class="M(0) Lh(22px)">\n                    <a href="').f(e.get(["link"], !1), e, "h").w('" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "hdln",
                elmt: "ad",
                ccode: T
            }).w(' class="Pos(r) js-stream-content-link js-stream-item-title js-content-title Td(n) Fz(18px) Fw(b) C($link) C($m_blue):h" ').x(e.get(["off_network"], !1), e, {
                block: C
            }, {}).w('>\n                        <span class="D(ib) LineClamp(2,44px)">').f(e.get(["title"], !1), e, "h", ["s"]).w('</span>\n                        <u class="Pos(a) T(0) Start(0) W(100%) H(100%)"></u>\n                    </a>\n                </h3>\n                <div>\n                    ').x(e.get(["summary"], !1), e, {
                block: D
            }, {}).w("\n").s(e.get(["publisher"], !1), e, {
                block: F
            }, {}).w("\n").x(e.get(["cpi"], !1), e, {
                block: j
            }, {}).w("\n</div>\n            </div>\n            ").x(e.getPath(!1, ["config", "ads", "feedback"]), e, {
                block: z
            }, {}).w("\n</div>\n    </div>\n</li>\n")
        }

        function a(t, e) {
            return t.w("js-stream-ad-noview ")
        }

        function n(t, e) {
            return t.w("ysab ")
        }

        function d(t, e) {
            return t.w("js-video-content")
        }

        function r(t, e) {
            return t.w('data-beacon="').f(e.get(["beacon"], !1), e, "h").w('"')
        }

        function s(t, e) {
            return t.w(' style="min-height:48px"')
        }

        function o(t, e) {
            return t.w(' data-impr-beacon="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function c(t, e) {
            return t.w(' data-thirdparty-beacons="').f(e.get(["imprTrackingUrls"], !1), e, "h", ["js"]).w('"')
        }

        function i(t, e) {
            return t.s(e.get(["ad_feedback_beacon"], !1), e, {
                block: u
            }, {})
        }

        function u(t, e) {
            return t.w(' data-ad-feedback-beacon="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function _(t, e) {
            return t.w('data-prtbc="').f(e.get(["partial_view_beacon"], !1), e, "h").w('"')
        }

        function l(t, e) {
            return t.w('data-gnvbc="').f(e.get(["generic_view_beacon"], !1), e, "h").w('"')
        }

        function f(t, e) {
            return t.w('\n<div class="strm-left Fl(start) Pos(r) Pend(20px)">\n                <a href="').f(e.get(["link"], !1), e, "h").w('" class="Pos(r) D(ib) ua-ie8_D(i)').x(e.get(["isVideo"], !1), e, {
                block: g
            }, {}).w('" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "img",
                elmt: "ct",
                ccode: p
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: w
            }, {}).w(">\n                    ").h("img", e, {}, {
                src: b,
                "class": "fea-ad W(100%) rounded-img",
                defer: m
            }).w("\n</a>\n            </div>\n            ")
        }

        function g(t, e) {
            return t.w(" js-video-target js-video-image")
        }

        function p(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function w(t, e) {
            return t.w('rel="nofollow"')
        }

        function b(t, e) {
            return t.f(e.get(["url"], !1), e, "h")
        }

        function m(t, e) {
            return t.f(e.get(["defer"], !1), e, "h")
        }

        function h(t, e) {
            return t.w('\n<span class="Tt(c) Fw(500) Mb(3px) D(ib)">\n                    <a class="Mend(1px) Fz(13px) D(ib) Va(m) Mt(2px) Td(n) C($sponsored)" href="').f(e.getPath(!1, ["config", "ads", "sponsored_url"]), e, "h").w('" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "itm",
                elmt: "sp",
                ccode: k
            }).w(">").x(e.get(["sponsoredByLabel"], !1), e, {
                "else": y,
                block: v
            }, {}).w('</a>\n                    <a class="D(ib) Va(m) Td(n) adlink C($sponsored)" href="').f(e.get(["adChoicesUrl"], !1), e, "h").w('" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "itm",
                elmt: "info",
                ccode: P
            }).w('><i class="Icon-Fp2 IconMoneyball Fz(12px) Mt(2px) D(ib)"></i></a>\n                </span>\n                ')
        }

        function k(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function y(t, e) {
            return t.x(e.getPath(!1, ["config", "ads", "advt_text"]), e, {
                "else": x,
                block: B
            }, {})
        }

        function x(t, e) {
            return t.h("i18n_string", e, {}, {
                _key: "SPONSORED"
            })
        }

        function B(t, e) {
            return t.h("i18n_string", e, {}, {
                _key: "ADVERTISEMENT"
            })
        }

        function v(t, e) {
            return t.f(e.get(["sponsoredByLabel"], !1), e, "h", ["s"])
        }

        function P(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function T(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function C(t, e) {
            return t.w('rel="nofollow"')
        }

        function D(t, e) {
            return t.w('<p class="Pos(r) stream-summary LineClamp(2,34px) Lh(17px) C($gray) Bfv(h)">').f(e.get(["summary"], !1), e, "h", ["s"]).w("</p>")
        }

        function F(t, e) {
            return t.w('<a class="Fz(11px) D(ib) Mt(4px) Td(n) C(gray_dark)" href="').f(e.get(["link"], !1), e, "h").w('" target="_blank" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "itm",
                elmt: "ad",
                ccode: M
            }).w(">").f(e.getPath(!0, []), e, "h", ["s"]).w("</a>")
        }

        function M(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function j(t, e) {
            return t.w('\n<a target="_blank" href="').f(e.get(["link"], !1), e, "h").w('" class="Fl(end) C(gray_dark) Bdc(gray_dark) Bds(s) Bdrs(5px) Bdw(t) Mt(5px) Py(4px) Px(20px) Cur(p) Fz(14px) D(ib) Td(n)" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                rspns: "nav",
                ad: "1",
                elm: "btn",
                elmt: "instl",
                itc: "0",
                ccode: L
            }).w(">").h("i18n_string", e, {}, {
                _key: "INSTALL_APP"
            }).w("</a>\n                    ")
        }

        function L(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function z(t, e) {
            return t.p("td-applet-stream-atomic:item/ad_dislike_v2", e, {})
        }
        return dust.register("td-applet-stream-atomic-templates-item-featured_ad_v2", e),
            e.__dustBody = !0, a.__dustBody = !0, n.__dustBody = !0, d.__dustBody = !0, r.__dustBody = !0, s.__dustBody = !0, o.__dustBody = !0, c.__dustBody = !0, i.__dustBody = !0, u.__dustBody = !0, _.__dustBody = !0, l.__dustBody = !0, f.__dustBody = !0, g.__dustBody = !0, p.__dustBody = !0, w.__dustBody = !0, b.__dustBody = !0, m.__dustBody = !0, h.__dustBody = !0, k.__dustBody = !0, y.__dustBody = !0, x.__dustBody = !0, B.__dustBody = !0, v.__dustBody = !0, P.__dustBody = !0, T.__dustBody = !0, C.__dustBody = !0, D.__dustBody = !0, F.__dustBody = !0, M.__dustBody = !0, j.__dustBody = !0, L.__dustBody = !0, z.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/featured_ad_v2.dust"] = dust.cache["td-applet-stream-atomic:item/featured_ad_v2"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/featured_ad_v2"] = function(t, a) {
        t = t || {}, dust.render(e, t, a)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-item-ad_dislike_v2"]
});
YUI.add("td-applet-stream-atomic-templates-item-featured_v2", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('<div class="js-stream-roundup Pos(r) Wow(bw) Cf">\n    ').s(e.getPath(!1, ["images", "featured_square"]), e, {
                block: n
            }, {}).w('\n<div class="strm-right Fl(start)">\n        <div class="strm-headline">\n            ').x(e.get(["storyLabel"], !1), e, {
                block: l
            }, {}).w('\n<h3 class="M(0) Lh(22px)">\n                <a href="').f(e.get(["link"], !1), e, "h").w('" class="Pos(r) js-stream-content-link js-stream-item-title js-content-title').x(e.get(["viewer_eligible"], !1), e, {
                block: _
            }, {}).w(' C($link) C($m_blue):h Td(n) Fz(18px) Fw(b)" ').x(e.get(["tab"], !1), e, {
                block: f
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "hdln",
                elmt: "ct",
                r: p,
                ccode: w
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: h
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: m
            }, {}).w('><span class="D(ib) LineClamp(2,44px)">').f(e.get(["title"], !1), e, "h", ["s"]).w('</span><u class="Pos(a) T(0) Start(0) W(100%) H(100%)"></u></a>\n            </h3>\n            <div class="Pos(r) stream-summary LineClamp(2,34px) Lh(17px) C($gray) Bfv(h)">').s(e.get(["summary"], !1), e, {
                block: g
            }, {}).s(e.get(["publisher"], !1), e, {
                block: b
            }, {}).w("</div>\n        </div>\n").x(e.getPath(!1, ["config", "ui", "storyline_multi_image_roundup"]), e, {
                "else": y,
                block: B
            }, {}).w("\n</div>\n    ").x(e.get(["actionsEnabled"], !1), e, {
                block: S
            }, {}).w("\n</div>\n")
        }

        function n(t, e) {
            return t.w('\n<div class="strm-left strm-headline Fl(start) Pos(r) Pend(20px)"><a href="').f(e.get(["link"], !1), e, "h").w('" class="Pos(r) D(ib) js-stream-content-link').x(e.get(["viewer_eligible"], !1), e, {
                block: a
            }, {}).w('" ').x(e.get(["tab"], !1), e, {
                block: r
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "img",
                elmt: "ct",
                r: s,
                ccode: o
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: d
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: u
            }, {}).w(">").h("img", e, {}, {
                src: i,
                "class": "W(100%) rounded-img",
                defer: c
            }).p("td-applet-stream-atomic:item/play_icon", e, {}).w("</a>\n    </div>\n    ")
        }

        function a(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function r(t, e) {
            return t.w('target="_blank"')
        }

        function s(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function o(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function d(t, e) {
            return t.w('rel="nofollow"')
        }

        function u(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function i(t, e) {
            return t.f(e.get(["url"], !1), e, "h")
        }

        function c(t, e) {
            return t.f(e.get(["defer"], !1), e, "h")
        }

        function l(t, e) {
            return t.w('<span class="js-content-label C($purple) Tt(c) Fw(500) Mb(3px) D(ib) Fz(13px)">').f(e.get(["storyLabel"], !1), e, "h", ["s"]).w("</span>")
        }

        function _(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function f(t, e) {
            return t.w('target="_blank"')
        }

        function p(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function w(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function h(t, e) {
            return t.w('rel="nofollow"')
        }

        function m(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function g(t, e) {
            return t.w('<span class="Mend(4px) D(n)--sm1190">').f(e.getPath(!0, []), e, "h", ["s"]).w("</span>")
        }

        function b(t, e) {
            return t.w('<span class="Fz(11px) Td(n) C(gray_dark) Fw(n) D(b) Mt(-1px) Whs(nw)">').f(e.getPath(!0, []), e, "h", ["s"]).w("</span>")
        }

        function y(t, e) {
            return t.w("\n").x(e.get(["storyline"], !1), e, {
                block: k
            }, {}).w("\n")
        }

        function k(t, e) {
            return t.w('<div class="Mt(14px)">').p("td-applet-stream-atomic:item/storyline", e, {
                total: e.getPath(!1, ["config", "ui", "storyline_cap_noimage"])
            }).w("</div>")
        }

        function B(t, e) {
            return t.w('\n<div class="Pt(13px) Mt(13px) Bdt($bdrv2)">\n            ').s(e.get(["storyline"], !1), e, {
                block: x
            }, {}).w("\n</div>\n")
        }

        function x(t, e) {
            return t.w("\n").h("lt", e, {
                block: v
            }, {
                key: e.get(["$idx"], !1),
                value: 2
            }).w("\n")
        }

        function v(t, e) {
            return t.w('\n<div class="W(48%) Va(t) ').h("select", e, {
                block: P
            }, {
                key: e.get(["$idx"], !1)
            }).w('"><a href="').f(e.getPath(!0, ["link"]), e, "h").w('" data-uuid="').f(e.getPath(!0, ["uuid"]), e, "h").w('" class="Pos(r) strm-sl-link js-stream-content-link js-stream-item-title js-content-title').x(e.get(["viewer_eligible"], !1), e, {
                block: j
            }, {}).w(' C($link) C($m_blue):h Td(n) Fz(12px) Fw(b)" ').x(e.get(["tab"], !1), e, {
                block: T
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "rhdln",
                elmt: "ct",
                r: M,
                ccode: $,
                t4: "rel",
                pos: L,
                g: W
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: D
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: z
            }, {}).w(">").h("img", e, {}, {
                src: q,
                "class": "W(100%) Mb(5px) rounded-img",
                defer: E
            }).w('<span class="Mend(7px) D(ib) Lh(15px) LineClamp(2,30px)">').f(e.getPath(!0, ["title"]), e, "h", ["s"]).w("</span>").s(e.getPath(!0, ["publisher"]), e, {
                block: I
            }, {}).w("</a></div>\n            ")
        }

        function P(t, e) {
            return t.h("eq", e, {
                block: C
            }, {
                value: 0
            }).h("default", e, {
                block: F
            }, {})
        }

        function C(t, e) {
            return t.w("Fl(start)")
        }

        function F(t, e) {
            return t.w("Fl(end)")
        }

        function j(t, e) {
            return t.w(" js-sl js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function T(t, e) {
            return t.w('target="_blank"')
        }

        function M(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function $(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function L(t, e) {
            return t.f(e.getPath(!0, ["pos"]), e, "h")
        }

        function W(t, e) {
            return t.f(e.getPath(!0, ["uuid"]), e, "h")
        }

        function D(t, e) {
            return t.w('rel="nofollow"')
        }

        function z(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function q(t, e) {
            return t.f(e.getPath(!1, ["roundupThumb", "url"]), e, "h")
        }

        function E(t, e) {
            return t.f(e.get(["defer"], !1), e, "h")
        }

        function I(t, e) {
            return t.w('<span class="Fz(11px) Td(n) C(gray_dark) Fw(n) D(b) Mt(-1px) Whs(pl)">').f(e.getPath(!0, []), e, "h", ["s"]).w("</span>")
        }

        function S(t, e) {
            return t.w('<div class="Fl(end) W(30px) Ta(end)">').p(V, e, {}).w("</div>")
        }

        function V(t, e) {
            return t.f(e.getPath(!1, ["config", "template", "drawer_action"]), e, "h")
        }
        return dust.register("td-applet-stream-atomic-templates-item-featured_v2", e), e.__dustBody = !0, n.__dustBody = !0, a.__dustBody = !0, r.__dustBody = !0, s.__dustBody = !0, o.__dustBody = !0,
            d.__dustBody = !0, u.__dustBody = !0, i.__dustBody = !0, c.__dustBody = !0, l.__dustBody = !0, _.__dustBody = !0, f.__dustBody = !0, p.__dustBody = !0, w.__dustBody = !0, h.__dustBody = !0, m.__dustBody = !0, g.__dustBody = !0, b.__dustBody = !0, y.__dustBody = !0, k.__dustBody = !0, B.__dustBody = !0, x.__dustBody = !0, v.__dustBody = !0, P.__dustBody = !0, C.__dustBody = !0, F.__dustBody = !0, j.__dustBody = !0, T.__dustBody = !0, M.__dustBody = !0, $.__dustBody = !0, L.__dustBody = !0, W.__dustBody = !0, D.__dustBody = !0, z.__dustBody = !0, q.__dustBody = !0, E.__dustBody = !0, I.__dustBody = !0, S.__dustBody = !0, V.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/featured_v2.dust"] = dust.cache["td-applet-stream-atomic:item/featured_v2"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/featured_v2"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-item-play_icon", "td-applet-stream-atomic-templates-item-storyline"]
});
YUI.add("td-applet-stream-atomic-templates-item-filmstrip", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
            function e(t, e) {
                return t.w('<div class="js-stream-roundup js-stream-roundup-filmstrip Pos(r) Wow(bw) Cf">\n    <div class="strm-headline Pos(r)">\n        <a ').x(e.get(["rdSigLink"], !1), e, {
                    "else": n,
                    block: r
                }, {}).w(' class="Pos(r) D(ib) Z(1) js-stream-content-link js-content-title').x(e.get(["viewer_eligible"], !1), e, {
                    block: s
                }, {}).w('" ').x(e.get(["tab"], !1), e, {
                    block: d
                }, {}).w(" ").h("rapid_data_attr", e, {}, {
                    "rapid-base": e.get(["i13n"], !1),
                    slk: o,
                    subsec: "needtoknow",
                    elm: "img",
                    elmt: "ct",
                    r: i,
                    ccode: u
                }).w(" ").x(e.get(["off_network"], !1), e, {
                    block: a
                }, {}).s(e.get(["attrCat"], !1), e, {
                    block: c
                }, {}).w(">\n        ").s(e.get(["image"], !1), e, {
                    block: l
                }, {}).w('\n<div class="Pos(a) T(0) Start(0) W(100%) H(100%) Ov(h)" title="').f(e.get(["ntkImageAttribution"], !1), e, "h").w('" >\n            <div class="Pos(a) B(0) M(15px) Mb(11px) Mend(120px) C(#fff) Z(1)">\n                <h2 class="js-stream-item-title Fz(21px) Fw(b) Mb(3px) Lh(24px) Td(u):h">').f(e.get(["title"], !1), e, "h", ["s"]).w("</h2>\n                ").s(e.get(["summary"], !1), e, {
                    block: h
                }, {}).w('<span class="Fw(b) D(ib) Va(b) Lh(18px) Td(u):h').x(e.get(["followable"], !1), e, {
                    block: g
                }, {}).w('">').s(e.get(["more_link_text"], !1), e, {
                    block: w
                }, {}).w('</span></div>\n            <div class="strm-img-gradient W(100%) H(100%) rounded-img"></div>\n        </div>\n        </a>\n        ').x(e.getPath(!1, ["config", "ui", "needtoknow_actions"]), e, {
                    block: p
                }, {}).w('\n</div>\n    <ul class="P(0) Mt(7px) Mstart(-2px) Mend(7px) Fz(12px) Whs(nw) Lts(-.31em)">\n        ').s(e.get(["storyline"], !1), e, {
                    block: b
                }, {}).w("\n</ul>\n</div>\n")
            }

            function n(t, e) {
                return t.w('href="').f(e.get(["link"], !1), e, "h").w('"')
            }

            function r(t, e) {
                return t.w('href="').f(e.get(["rdSigLink"], !1), e, "h").w('" data-orig-link="').f(e.get(["link"], !1), e, "h").w('"')
            }

            function s(t, e) {
                return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
            }

            function d(t, e) {
                return t.w('target="_blank"')
            }

            function o(t, e) {
                return t.f(e.get(["title"], !1), e, "h", ["u", "s"])
            }

            function i(t, e) {
                return t.f(e.get(["reason"], !1), e, "h")
            }

            function u(t, e) {
                return t.f(e.get(["ccode"], !1), e, "h")
            }

            function a(t, e) {
                return t.w('rel="nofollow"')
            }

            function c(t, e) {
                return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
            }

            function l(t, e) {
                return t.w("\n").h("img", e, {}, {
                    src: f,
                    "class": "W(100%) rounded-img",
                    defer: _
                }).w("\n")
            }

            function f(t, e) {
                return t.f(e.get(["url"], !1), e, "h")
            }

            function _(t, e) {
                return t.f(e.get(["defer"], !1), e, "h")
            }

            function h(t, e) {
                return t.w('<span class="stream-summary Fz(13px) C(#d9d9db) Mend(5px)">').f(e.getPath(!0, []), e, "h", ["s"]).w("</span>")
            }

            function g(t, e) {
                return t.w(" Mend(25px)")
            }

            function w(t, e) {
                return t.f(e.getPath(!0, []), e, "h", ["s"]).w(" »")
            }

            function p(t, e) {
                return t.w('<div class="Pos(a) End(13px) T(10px) W(30px) Mend(2px) Ta(end) Z(2)">').p(m, e, {}).w("</div>")
            }

            function m(t, e) {
                return t.f(e.getPath(!1, ["config", "template", "drawer_action"]), e, "h")
            }

            function b(t, e) {
                return t.w("\n").h("lt", e, {
                    block: k
                }, {
                    key: e.get(["$idx"], !1),
                    value: 4
                }).w("\n")
            }

            function k(t, e) {
                return t.w('\n<li class="Pos(r) Va(t) D(ib) Bxz(bb) Whs(n) W(25%) Ov(h)">\n            <a ').x(e.getPath(!0, ["rdSigLink"]), e, {
                    "else": y,
                    block: x
                }, {}).w(' data-uuid="').f(e.getPath(!0, ["uuid"]), e, "h").w('" class="js-stream-content-link js-stream-item-title js-content-title').x(e.get(["viewer_eligible"], !1), e, {
                    block: B
                }, {}).w(' O(n):f C($m_blue):f Td(n) Fz(13px) Fw(b) Lts(n) Whs(n) D(b) Px(2px)" ').x(e.get(["tab"], !1), e, {
                    block: P
                }, {}).w(" ").h("rapid_data_attr", e, {}, {
                    "rapid-base": e.get(["i13n"], !1),
                    slk: v,
                    subsec: "needtoknow",
                    elm: "rhdln",
                    elmt: "ct",
                    r: j,
                    ccode: M,
                    t4: "rel",
                    cposy: C,
                    pos: T,
                    g: W,
                    aid: F,
                    expb: L
                }).w(" ").x(e.get(["off_network"], !1), e, {
                    block: z
                }, {}).s(e.get(["attrCat"], !1), e, {
                    block: S
                }, {}).w(">\n                ").h("img", e, {}, {
                    src: D,
                    "class": "W(100%) rounded-img",
                    defer: $,
                    title: I
                }).w('\n<h3 class="D(b) Mt(5px) Mend(10px) LineClamp(2,30px) Fz(12px) Fw(b) C($link) js-stream-content-link:h>C($m_blue) js-stream-content-link:f_C($m_blue)">').f(e.get(["title"], !1), e, "h", ["s"]).w("</h3>\n            </a>\n        </li>\n        ")
            }

            function y(t, e) {
                return t.w('href="').f(e.getPath(!0, ["link"]), e, "h").w('"')
            }

            function x(t, e) {
                return t.w('href="').f(e.getPath(!0, ["rdSigLink"]), e, "h").w('" data-orig-link="').f(e.getPath(!0, ["link"]), e, "h").w('"')
            }

            function B(t, e) {
                return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
            }

            function P(t, e) {
                return t.w('target="_blank"')
            }

            function v(t, e) {
                return t.f(e.get(["title"], !1), e, "h", ["u", "s"])
            }

            function j(t, e) {
                return t.f(e.get(["reason"], !1), e, "h")
            }

            function M(t, e) {
                return t.f(e.get(["ccode"], !1), e, "h")
            }

            function C(t, e) {
                return t.f(e.getPath(!0, ["cposy"]), e, "h")
            }

            function T(t, e) {
                return t.f(e.getPath(!0, ["pos"]), e, "h")
            }

            function W(t, e) {
                return t.f(e.getPath(!0, ["uuid"]), e, "h")
            }

            function F(t, e) {
                return t.f(e.getPath(!0, ["aid"]), e, "h")
            }

            function L(t, e) {
                return t.f(e.getPath(!0, ["expb"]), e, "h")
            }

            function z(t, e) {
                return t.w('rel="nofollow"')
            }

            function S(t, e) {
                return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
            }

            function D(t, e) {
                return t.f(e.getPath(!1, ["roundupThumb", "url"]), e, "h")
            }

            function $(t, e) {
                return t.f(e.get(["defer"], !1), e, "h")
            }

            function I(t, e) {
                return t.f(e.get(["ntkImageAttribution"], !1), e, "h")
            }
            return dust.register("td-applet-stream-atomic-templates-item-filmstrip", e), e.__dustBody = !0, n.__dustBody = !0, r.__dustBody = !0, s.__dustBody = !0, d.__dustBody = !0, o.__dustBody = !0, i.__dustBody = !0, u.__dustBody = !0, a.__dustBody = !0, c.__dustBody = !0, l.__dustBody = !0, f.__dustBody = !0, _.__dustBody = !0, h.__dustBody = !0, g.__dustBody = !0, w.__dustBody = !0, p.__dustBody = !0, m.__dustBody = !0, b.__dustBody = !0, k.__dustBody = !0, y.__dustBody = !0, x.__dustBody = !0, B.__dustBody = !0, P.__dustBody = !0, v.__dustBody = !0, j.__dustBody = !0, M.__dustBody = !0, C.__dustBody = !0, T.__dustBody = !0, W.__dustBody = !0, F.__dustBody = !0, L.__dustBody = !0, z.__dustBody = !0, S.__dustBody = !0, D.__dustBody = !0, $.__dustBody = !0, I.__dustBody = !0, e
        }(),
        dust.cache["td-applet-stream-atomic:item/filmstrip.dust"] = dust.cache["td-applet-stream-atomic:item/filmstrip"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/filmstrip"] = function(t, n) {
            t = t || {}, dust.render(e, t, n)
        }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-item-followable", function(t, o) {
    dust.cache = dust.cache || {}, dust.cache[o] = function(t) {
        function o(t, o) {
            return t.w('<div class="').x(o.get(["userFollowing"], !1), o, {
                block: l
            }, {}).w('follow-teaser js-stream-followable Pos(a) B(0) Start(0) Mb(11px) W(100%) Ta(c)" data-followid="').f(o.get(["followId"], !1), o, "h").w('">\n    <div class="js-stream-follow-name Wow(n) Fw(b) Tt(c) Fz(13px) C(white) Va(m) Pb(6px) Px(20px) Ell Mt(-50px)">').f(o.get(["followTeaser"], !1), o, "h", ["s"]).w('</div>\n    <div class="btnWrap Lh(18px) Pos(a) Start(50%)').x(o.getPath(!1, ["config", "ui", "fixed_layout"]), o, {
                "else": e,
                block: a
            }, {}).w('">\n        <button title="unfollow" class="Start(50%) Mstart(-51px) Bd($followbdr) Fw(b) followed_D(b) Pos(r) Pstart(7px) Pend(17px) followed_Pstart(4px) followed_Pend(20px) Pb(3px) Pt(2px) D(n) Bxz(bb) unfollowBtn C(#fff) O(n) Bgc($opBlack) Bdrs(3px)').x(o.getPath(!1, ["config", "ui", "fixed_layout"]), o, {
                block: n
            }, {}).w(' ua-ie7_W(117px) ua-ie7_Mstart(50%) ua-ie7_Start(-58px)" ').h("rapid_data_attr", o, {}, {
                "rapid-base": o.get(["i13n"], !1),
                r: c,
                ccode: s,
                t4: d,
                elm: "btn",
                elmt: "unfollow",
                itc: "1",
                aid: r
            }).w(' data-action-outcome="dclent">\n            <i class="unfollowIcon unfollowBtn:h_D(b) D(n) Fl(start) Fz(15px) Fw(b) W(20px) H(20px) Lh(20px) Ta(c) Icon-Fp2 IconStarOutline C(#bcbcbc)"></i><i class="followingIcon unfollowBtn:h_D(n) Icon-Fp2 Fl(start) IconStarFilled Fz(15px) Fw(b) W(20px) H(20px) Lh(20px) Ta(c) C(#ffca16)"></i>\n            <div class="unfollowTxt Mstart(20px) Fz(13px) Tt(c) C(#fff) H(20px) Lh(20px) W(54px) ua-ie7_W(a)">\n                <div class="Fl(start) Mstart(2px) unfollowBtn:h_C(#bcbcbc)">').x(o.get(["userFollowing"], !1), o, {
                "else": i,
                block: f
            }, {}).w('</div>\n            </div>\n        </button>\n        <button title="follow" class="Start(50%) Mstart(-51px) Bd($followbdr) Fw(b) Pos(r) Pstart(14px) Pend(10px) Pb(3px) Pt(2px) followed_D(n) D(b) Bxz(bb) followBtn C(#fff) O(n) Bgc($opBlack) Bdc(#ffca16):h Bdrs(3px) ').x(o.getPath(!1, ["config", "ui", "fixed_layout"]), o, {
                block: u
            }, {}).w(' ua-ie7_W(113px) ua-ie7_Mstart(50%) ua-ie7_Start(-55px)" ').h("rapid_data_attr", o, {}, {
                "rapid-base": o.get(["i13n"], !1),
                r: p,
                ccode: _,
                t4: w,
                elm: "btn",
                elmt: "follow",
                itc: "1",
                aid: x
            }).w(' data-action-outcome="dclent">\n            <i class="followBtn:h_D(n) followed_D(n) Icon-Fp2 Fl(start) IconStarOutline Fz(15px) W(20px) H(20px) Lh(20px) Ta(c) followBtn:h_C(#ffca16)"></i><i class="followBtn:h_D(b) followed_D(n) D(n) Icon-Fp2 Fl(start) IconStarFilled Fz(15px) W(20px) H(20px) Lh(20px) Ta(c) followBtn:h_C(#ffca16)"></i><div class="followed_D(n) Mstart(20px) Fz(13px) Tt(c) H(20px) Lh(20px) W(54px) Trsdu(.1s) Trsp($trsp_width) followBtn:h_C(#ffca16)"><div class="Fl(start) Mstart(2px)">').h("i18n_string", o, {}, {
                _key: "FOLLOW"
            }).w("</div></div>\n        </button>\n    </div>\n</div>\n")
        }

        function l(t, o) {
            return t.w("followed ")
        }

        function e(t, o) {
            return t.w(" Mstart(-26px)")
        }

        function a(t, o) {
            return t.w(" W(113px) Mstart(-57px)")
        }

        function n(t, o) {
            return t.w(" W(a)")
        }

        function c(t, o) {
            return t.f(o.get(["reason"], !1), o, "h")
        }

        function s(t, o) {
            return t.f(o.get(["ccode"], !1), o, "h")
        }

        function d(t, o) {
            return t.f(o.get(["followTeaser"], !1), o, "h")
        }

        function r(t, o) {
            return t.f(o.get(["followId"], !1), o, "h")
        }

        function i(t, o) {
            return t.h("i18n_string", o, {}, {
                _key: "UNFOLLOW"
            })
        }

        function f(t, o) {
            return t.h("i18n_string", o, {}, {
                _key: "FOLLOWING_STORY"
            })
        }

        function u(t, o) {
            return t.w(" W(a)")
        }

        function p(t, o) {
            return t.f(o.get(["reason"], !1), o, "h")
        }

        function _(t, o) {
            return t.f(o.get(["ccode"], !1), o, "h")
        }

        function w(t, o) {
            return t.f(o.get(["followTeaser"], !1), o, "h")
        }

        function x(t, o) {
            return t.f(o.get(["followId"], !1), o, "h")
        }
        return dust.register("td-applet-stream-atomic-templates-item-followable", o), o.__dustBody = !0, l.__dustBody = !0, e.__dustBody = !0, a.__dustBody = !0, n.__dustBody = !0, c.__dustBody = !0, s.__dustBody = !0, d.__dustBody = !0, r.__dustBody = !0, i.__dustBody = !0, f.__dustBody = !0, u.__dustBody = !0, p.__dustBody = !0, _.__dustBody = !0, w.__dustBody = !0, x.__dustBody = !0, o
    }(), dust.cache["td-applet-stream-atomic:item/followable.dust"] = dust.cache["td-applet-stream-atomic:item/followable"] = dust.cache[o], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/followable"] = function(t, l) {
        t = t || {}, dust.render(o, t, l)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-item-gs_tile", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('<div class="js-stream-roundup strm-gs-tile-roundup Pos(r) Wow(bw) Cf">\n    ').s(e.get(["image"], !1), e, {
                block: n
            }, {}).w('\n<div class="strm-right Mstart(62.825%)">\n    ').x(e.getPath(!1, ["config", "ui", "storyline_multi_image_roundup"]), e, {
                block: C
            }, {}).w("\n</div>\n</div>\n")
        }

        function n(t, e) {
            return t.w('\n<div class="strm-left strm-headline Fl(start) Pos(r) Pend(2px) Bxz(bb)"><a href="').f(e.get(["link"], !1), e, "h").w('" class="Pos(r) D(ib) js-stream-content-link').x(e.get(["viewer_eligible"], !1), e, {
                block: r
            }, {}).w('" data-uuid="').f(e.get(["id"], !1), e, "h").w('" ').x(e.get(["tab"], !1), e, {
                block: d
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "img",
                elmt: "ct",
                r: o,
                ccode: s
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: a
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: i
            }, {}).w(">").h("img", e, {}, {
                src: u,
                "class": "W(100%) Bdrststart(3px) Bdrsbstart(3px)",
                defer: c
            }).w('<div class="strm-img-gradient Pos(a) W(100%) H(100%) T(0) Start(0) Bdrststart(3px) Bdrsbstart(3px)"></div>').p("td-applet-stream-atomic:item/play_icon", e, {}).w('</a>\n        <div class="strm-headline Pos(a) B(0) Start(0) Mx(13px) Mb(13px)">\n            <h3 class="M(0) Lh(22px)">\n                <a href="').f(e.get(["link"], !1), e, "h").w('" class="Pos(r) js-stream-content-link js-stream-item-title js-content-title').x(e.get(["viewer_eligible"], !1), e, {
                block: l
            }, {}).w(' C(white) Fz(21px) Fw(b)" data-uuid="').f(e.get(["id"], !1), e, "h").w('" ').x(e.get(["tab"], !1), e, {
                block: _
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "hdln",
                elmt: "ct",
                r: f,
                ccode: w
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: g
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: h
            }, {}).w('><span class="').x(e.getPath(!1, ["config", "ui", "fixed_layout"]), e, {
                block: p
            }, {}).w('LineClamp(2,44px) Td(u):h">').f(e.get(["title"], !1), e, "h", ["s"]).w('</span></a>\n            </h3>\n            <div class="Pos(r) stream-summary ').nx(e.getPath(!1, ["config", "ui", "fixed_layout"]), e, {
                block: m
            }, {}).w('Lh(18px) C(white) Bfv(h)">').s(e.get(["summary"], !1), e, {
                block: b
            }, {}).s(e.get(["more_link_text"], !1), e, {
                block: y
            }, {}).w("</div>\n        </div>\n    </div>\n    ")
        }

        function r(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function d(t, e) {
            return t.w('target="_blank"')
        }

        function o(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function s(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function a(t, e) {
            return t.w('rel="nofollow"')
        }

        function i(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function u(t, e) {
            return t.f(e.get(["url"], !1), e, "h")
        }

        function c(t, e) {
            return t.f(e.get(["defer"], !1), e, "h")
        }

        function l(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function _(t, e) {
            return t.w('target="_blank"')
        }

        function f(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function w(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function g(t, e) {
            return t.w('rel="nofollow"')
        }

        function h(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function p(t, e) {
            return t.w("D(b) ")
        }

        function m(t, e) {
            return t.w("LineClamp(2,34px) ")
        }

        function b(t, e) {
            return t.w('<span class="Mend(4px) C(#d9d9db)">').f(e.getPath(!0, []), e, "h", ["s"]).w("</span>")
        }

        function y(t, e) {
            return t.w('<a class="js-stream-content-link js-stream-item-title js-content-title').x(e.get(["viewer_eligible"], !1), e, {
                block: B
            }, {}).w(' C(white) Td(u):h Fw(b)" data-uuid="').f(e.get(["id"], !1), e, "h").w('" ').x(e.get(["tab"], !1), e, {
                block: k
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "hdln",
                elmt: "ct",
                r: x,
                ccode: v
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: P
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: j
            }, {}).w(' href="').f(e.get(["link"], !1), e, "h").w('">').f(e.getPath(!0, []), e, "h", ["s"]).w("  &#xbb;</a>")
        }

        function B(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function k(t, e) {
            return t.w('target="_blank"')
        }

        function x(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function v(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function P(t, e) {
            return t.w('rel="nofollow"')
        }

        function j(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function C(t, e) {
            return t.w("\n").s(e.get(["storyline"], !1), e, {
                block: T
            }, {}).w("\n")
        }

        function T(t, e) {
            return t.w("\n").h("lt", e, {
                block: M
            }, {
                key: e.get(["$idx"], !1),
                value: 2
            }).w("\n")
        }

        function M(t, e) {
            return t.w('\n<a href="').f(e.getPath(!0, ["link"]), e, "h").w('" data-uuid="').f(e.get(["id"], !1), e, "h").w('" class="Pos(r) D(b)').h("eq", e, {
                block: F
            }, {
                key: e.get(["$idx"], !1),
                value: 0
            }).w(" strm-sl-link js-stream-content-link js-stream-item-title js-content-title").x(e.get(["viewer_eligible"], !1), e, {
                block: L
            }, {}).w(' C(white) Fz(13px) Fw(b)" ').x(e.get(["tab"], !1), e, {
                block: W
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "rhdln",
                elmt: "ct",
                r: S,
                ccode: q,
                t4: "rel",
                pos: D,
                g: $
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: z
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: H
            }, {}).w(">").h("eq", e, {
                "else": I,
                block: O
            }, {
                key: e.get(["$idx"], !1),
                value: 0
            }).w('<div class="strm-img-gradient Pos(a) W(100%) H(100%) T(0) Start(0) ').h("eq", e, {
                "else": V,
                block: Y
            }, {
                key: e.get(["$idx"], !1),
                value: 0
            }).w('"></div><div class="Pos(a) B(0) Start(0) Mstart(13px) Mb(9px) C(white) Cur(p)"><span class="Mend(7px) D(ib) Lh(15px) LineClamp(2,30px) Td(u):h">').f(e.getPath(!0, ["title"]), e, "h", ["s"]).w("</span></div></a>\n        ")
        }

        function F(t, e) {
            return t.w(" Mb(2px)")
        }

        function L(t, e) {
            return t.w(" js-sl js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function W(t, e) {
            return t.w('target="_blank"')
        }

        function S(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function q(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function D(t, e) {
            return t.f(e.getPath(!0, ["pos"]), e, "h")
        }

        function $(t, e) {
            return t.f(e.getPath(!0, ["uuid"]), e, "h")
        }

        function z(t, e) {
            return t.w('rel="nofollow"')
        }

        function H(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function I(t, e) {
            return t.h("img", e, {}, {
                src: E,
                "class": "W(100%) Bdrsbend(3px)",
                defer: N
            })
        }

        function E(t, e) {
            return t.f(e.getPath(!1, ["roundupThumb", "url"]), e, "h")
        }

        function N(t, e) {
            return t.f(e.get(["defer"], !1), e, "h")
        }

        function O(t, e) {
            return t.h("img", e, {}, {
                src: R,
                "class": "W(100%) Bdrstend(3px)",
                defer: U
            })
        }

        function R(t, e) {
            return t.f(e.getPath(!1, ["roundupThumb", "url"]), e, "h")
        }

        function U(t, e) {
            return t.f(e.get(["defer"], !1), e, "h")
        }

        function V(t, e) {
            return t.w("Bdrsbend(3px)")
        }

        function Y(t, e) {
            return t.w("Bdrstend(3px)")
        }
        return dust.register("td-applet-stream-atomic-templates-item-gs_tile", e), e.__dustBody = !0, n.__dustBody = !0, r.__dustBody = !0, d.__dustBody = !0, o.__dustBody = !0, s.__dustBody = !0, a.__dustBody = !0, i.__dustBody = !0, u.__dustBody = !0, c.__dustBody = !0, l.__dustBody = !0, _.__dustBody = !0, f.__dustBody = !0, w.__dustBody = !0, g.__dustBody = !0, h.__dustBody = !0, p.__dustBody = !0, m.__dustBody = !0, b.__dustBody = !0, y.__dustBody = !0, B.__dustBody = !0, k.__dustBody = !0, x.__dustBody = !0, v.__dustBody = !0, P.__dustBody = !0, j.__dustBody = !0, C.__dustBody = !0, T.__dustBody = !0, M.__dustBody = !0, F.__dustBody = !0, L.__dustBody = !0, W.__dustBody = !0, S.__dustBody = !0, q.__dustBody = !0, D.__dustBody = !0, $.__dustBody = !0, z.__dustBody = !0, H.__dustBody = !0, I.__dustBody = !0, E.__dustBody = !0, N.__dustBody = !0, O.__dustBody = !0, R.__dustBody = !0, U.__dustBody = !0, V.__dustBody = !0, Y.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/gs_tile.dust"] = dust.cache["td-applet-stream-atomic:item/gs_tile"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/gs_tile"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-item-play_icon"]
});
YUI.add("td-applet-stream-atomic-templates-item-inline_video", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('<div class="Pos(r) Wow(bw) Cf').x(e.get(["actionsEnabled"], !1), e, {
                block: n
            }, {}).w('">\n    <div class="strm-left Fl(start) Pos(r) Pend(20px) js-video-content Op(.99)">\n        <div class="Pos(r) js-stream-content-img rounded-img Bd Td(n) W(100%) Bxz(bb)">').x(e.getPath(!1, ["config", "ui", "endcard_cta"]), e, {
                block: i
            }, {}).w('<span class="D(b) js-video-target js-video-image BackgroundPic').x(e.get(["pageload"], !1), e, {
                block: g
            }, {}).w('" style="padding-bottom:').h("lt", e, {
                "else": p,
                block: b
            }, {
                key: e.getPath(!1, ["images", "video", "height"]),
                value: e.getPath(!1, ["images", "video", "width"])
            }).w(";height:auto;width:100%;background-image:url('").f(e.getPath(!1, ["images", "video", "url"]), e, "h").w("');\"></span>").p("td-applet-stream-atomic:item/play_icon", e, {}).w('</div>\n    </div>\n    <div class="strm-right Fl(start) W(66%) ').x(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: k
            }, {}).w('">').x(e.get(["storyLabel"], !1), e, {
                block: m
            }, {}).w('<div class="strm-headline">\n            <h3 class="Mb(6px) LineClamp(2,42px) Lh(21px)">\n                <a ').x(e.get(["rdSigLink"], !1), e, {
                "else": L,
                block: j
            }, {}).w(' class="').nx(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: F
            }, {}).w(" O(n):f C($m_blue):f js-stream-content-link").x(e.get(["viewer_eligible"], !1), e, {
                block: M
            }, {}).w(' js-stream-item-title js-content-title C($link) C($m_blue):h Td(n) Fz(17px) Fw(b)" ').x(e.get(["tab"], !1), e, {
                block: E
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "hdln",
                elmt: "ct",
                r: z,
                ccode: D
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: S
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: W
            }, {}).w("><span>").f(e.get(["title"], !1), e, "h", ["s"]).w('</span><u class="Pos(a) T(0) Start(0) W(100%) H(100%) ').x(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: A
            }, {}).w('"></u></a>\n            </h3>\n            <div>\n                ').x(e.get(["summary"], !1), e, {
                block: O
            }, {}).w("\n").nx(e.getPath(!1, ["config", "ui", "publisher_headline"]), e, {
                block: I
            }, {}).w("\n</div>\n        </div>\n    </div>\n    ").x(e.get(["actionsEnabled"], !1), e, {
                block: q
            }, {}).w("\n</div>\n")
        }

        function n(t, e) {
            return t.w(" Pend(30px)")
        }

        function i(t, e) {
            return t.w('<div class="js-cstm-end-screen Pos(a) Ta-c W(100%) H(100%) Dn"><a target="_blank" ').x(e.get(["rdSigLink"], !1), e, {
                "else": o,
                block: d
            }, {}).w(' class="D(ib) Ell Td(n) C(white) Bdc(white) Bds(s) Bdrs(2px) Bdw(t) Py(4px) Px(10px) Cur(p) Fz(12px) ').x(e.get(["viewer_eligible"], !1), e, {
                block: s
            }, {}).w('" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                rspns: "nav",
                elm: "btn",
                elmt: "cta",
                itc: "0",
                r: c,
                ccode: u
            }).w(">").x(e.get(["callToAction"], !1), e, {
                block: l
            }, {}).nx(e.get(["callToAction"], !1), e, {
                block: _
            }, {}).w("</a></div>")
        }

        function o(t, e) {
            return t.x(e.get(["previewLink"], !1), e, {
                "else": r,
                block: a
            }, {})
        }

        function r(t, e) {
            return t.w('href="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function a(t, e) {
            return t.w('href="').f(e.get(["previewLink"], !1), e, "h").w('" data-share-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function d(t, e) {
            return t.w('href="').f(e.get(["rdSigLink"], !1), e, "h").w('" data-orig-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function s(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function c(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function u(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function l(t, e) {
            return t.f(e.get(["callToAction"], !1), e, "h")
        }

        function _(t, e) {
            return t.h("i18n_string", e, {}, {
                _key: "LEARN_MORE"
            })
        }

        function g(t, e) {
            return t.h("eq", e, {
                block: f
            }, {
                key: h,
                value: "1"
            })
        }

        function f(t, e) {
            return t.w(" ImageLoader").x(e.getPath(!1, ["config", "ui", "featured_delayed_defer"]), e, {
                block: w
            }, {})
        }

        function w(t, e) {
            return t.w("-Delayed")
        }

        function h(t, e) {
            return t.f(e.getPath(!1, ["images", "video", "defer"]), e, "h")
        }

        function p(t, e) {
            return t.w("100%")
        }

        function b(t, e) {
            return t.w("56.25%")
        }

        function k(t, e) {
            return t.w("Pos(r)")
        }

        function m(t, e) {
            return t.w('<div class="js-content-label C(c_').s(e.get(["categoryLabel"], !1), e, {
                "else": y,
                block: B
            }, {}).w(') Tt(c) Fw(b) Mb(6px) Lh(12px) Fz(13px)"').s(e.get(["categoryLabel"], !1), e, {
                block: x
            }, {}).w("><span>").f(e.get(["storyLabel"], !1), e, "h", ["s"]).w("</span>").x(e.getPath(!1, ["config", "ui", "publisher_headline"]), e, {
                block: v
            }, {}).w("</div>")
        }

        function y(t, e) {
            return t.f(e.get(["property"], !1), e, "h")
        }

        function B(t, e) {
            return t.f(e.getPath(!0, []), e, "h")
        }

        function x(t, e) {
            return t.w(' data-cat-label="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function v(t, e) {
            return t.s(e.get(["publisher"], !1), e, {
                block: P
            }, {})
        }

        function P(t, e) {
            return t.w('<span class="Fz(11px) Td(n) C(gray_dark) Fw(n) D(ib) Mt(4px) Mstart(9px)"> ').f(e.getPath(!0, []), e, "h", ["s"]).w("</span>")
        }

        function L(t, e) {
            return t.x(e.get(["previewLink"], !1), e, {
                "else": T,
                block: C
            }, {})
        }

        function T(t, e) {
            return t.w('href="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function C(t, e) {
            return t.w('href="').f(e.get(["previewLink"], !1), e, "h").w('" data-share-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function j(t, e) {
            return t.w('href="').f(e.get(["rdSigLink"], !1), e, "h").w('" data-orig-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function F(t, e) {
            return t.w("Pos(r)")
        }

        function M(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function E(t, e) {
            return t.w('target="_blank"')
        }

        function z(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function D(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function S(t, e) {
            return t.w('rel="nofollow"')
        }

        function W(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function A(t, e) {
            return t.w("strm-stretch")
        }

        function O(t, e) {
            return t.w('<p class="').nx(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: $
            }, {}).w(' stream-summary M(0) LineClamp(2,36px) Lh(17px) C($gray) Bfv(h)">').f(e.get(["summary"], !1), e, "h", ["s"]).w("</p>")
        }

        function $(t, e) {
            return t.w("Pos(r)")
        }

        function I(t, e) {
            return t.s(e.get(["publisher"], !1), e, {
                block: R
            }, {})
        }

        function R(t, e) {
            return t.w('<span class="Fz(11px) Td(n) C(gray_dark) Fw(n) D(ib) Mt(6px)">').f(e.getPath(!0, []), e, "h", ["s"]).w("</span>")
        }

        function q(t, e) {
            return t.w('<div class="Pos(a) End(0) T(0) W(30px) Mstart(12px) Mend(2px) Ta(end)">').p(H, e, {}).w("</div>")
        }

        function H(t, e) {
            return t.f(e.getPath(!1, ["config", "template", "drawer_action"]), e, "h")
        }
        return dust.register("td-applet-stream-atomic-templates-item-inline_video", e), e.__dustBody = !0, n.__dustBody = !0, i.__dustBody = !0, o.__dustBody = !0, r.__dustBody = !0, a.__dustBody = !0, d.__dustBody = !0, s.__dustBody = !0, c.__dustBody = !0, u.__dustBody = !0, l.__dustBody = !0, _.__dustBody = !0, g.__dustBody = !0, f.__dustBody = !0, w.__dustBody = !0, h.__dustBody = !0, p.__dustBody = !0, b.__dustBody = !0, k.__dustBody = !0, m.__dustBody = !0, y.__dustBody = !0, B.__dustBody = !0, x.__dustBody = !0, v.__dustBody = !0, P.__dustBody = !0, L.__dustBody = !0, T.__dustBody = !0, C.__dustBody = !0, j.__dustBody = !0, F.__dustBody = !0, M.__dustBody = !0, E.__dustBody = !0, z.__dustBody = !0, D.__dustBody = !0, S.__dustBody = !0, W.__dustBody = !0, A.__dustBody = !0, O.__dustBody = !0, $.__dustBody = !0, I.__dustBody = !0, R.__dustBody = !0, q.__dustBody = !0, H.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/inline_video.dust"] = dust.cache["td-applet-stream-atomic:item/inline_video"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/inline_video"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-item-play_icon"]
});
YUI.add("td-applet-stream-atomic-templates-item-inline_video_sm", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('<div class="Pos(r) Wow(bw) Cf').x(e.get(["actionsEnabled"], !1), e, {
                block: n
            }, {}).w('">\n    <div class="strm-left Fl(start) Pos(r) Pend(20px) js-video-content Op(.99)">\n        <div class="Pos(r) js-stream-content-img rounded-img Bd Td(n) W(100%) Bxz(bb)">').x(e.getPath(!1, ["config", "ui", "endcard_cta"]), e, {
                block: i
            }, {}).w('<span class="D(b) js-video-target js-video-image BackgroundPic').x(e.get(["pageload"], !1), e, {
                block: g
            }, {}).w('" style="padding-bottom:').h("lt", e, {
                "else": p,
                block: b
            }, {
                key: e.getPath(!1, ["images", "video", "height"]),
                value: e.getPath(!1, ["images", "video", "width"])
            }).w(";height:auto;width:100%;background-image:url('").f(e.getPath(!1, ["images", "video", "url"]), e, "h").w("');\"></span>").p("td-applet-stream-atomic:item/play_icon", e, {}).w('</div>\n    </div>\n    <div class="strm-right Fl(start) W(66%) ').x(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: m
            }, {}).w('">').x(e.get(["storyLabel"], !1), e, {
                block: k
            }, {}).w('<div class="strm-headline">\n            <h3 class="Mb(6px) LineClamp(2,42px) Lh(21px)">\n                <a ').x(e.get(["rdSigLink"], !1), e, {
                "else": L,
                block: j
            }, {}).w(' class="').nx(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: F
            }, {}).w(" O(n):f C($m_blue):f js-stream-content-link").x(e.get(["viewer_eligible"], !1), e, {
                block: M
            }, {}).w(' js-stream-item-title js-content-title C($link) C($m_blue):h Td(n) Fz(17px) Fw(b)" ').x(e.get(["tab"], !1), e, {
                block: E
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "hdln",
                elmt: "ct",
                r: z,
                ccode: D,
                slk: S
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: W
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: A
            }, {}).w("><span>").f(e.get(["title"], !1), e, "h", ["s"]).w('</span><u class="Pos(a) T(0) Start(0) W(100%) H(100%) ').x(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: O
            }, {}).w('"></u></a>\n            </h3>\n            <div>\n                ').x(e.get(["summary"], !1), e, {
                block: $
            }, {}).w("\n").nx(e.getPath(!1, ["config", "ui", "publisher_headline"]), e, {
                block: R
            }, {}).w("\n</div>\n        </div>\n    </div>\n    ").x(e.get(["actionsEnabled"], !1), e, {
                block: H
            }, {}).w("\n</div>\n")
        }

        function n(t, e) {
            return t.w(" Pend(30px)")
        }

        function i(t, e) {
            return t.w('<div class="js-cstm-end-screen Pos(a) Ta-c W(100%) H(100%) Dn"><a target="_blank" ').x(e.get(["rdSigLink"], !1), e, {
                "else": o,
                block: d
            }, {}).w(' class="D(ib) Ell Td(n) C(white) Bdc(white) Bds(s) Bdrs(2px) Bdw(t) Py(4px) Px(10px) Cur(p) Fz(12px) ').x(e.get(["viewer_eligible"], !1), e, {
                block: s
            }, {}).w('" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                rspns: "nav",
                elm: "btn",
                elmt: "cta",
                itc: "0",
                r: c,
                ccode: u
            }).w(">").x(e.get(["callToAction"], !1), e, {
                block: l
            }, {}).nx(e.get(["callToAction"], !1), e, {
                block: _
            }, {}).w("</a></div>")
        }

        function o(t, e) {
            return t.x(e.get(["previewLink"], !1), e, {
                "else": r,
                block: a
            }, {})
        }

        function r(t, e) {
            return t.w('href="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function a(t, e) {
            return t.w('href="').f(e.get(["previewLink"], !1), e, "h").w('" data-share-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function d(t, e) {
            return t.w('href="').f(e.get(["rdSigLink"], !1), e, "h").w('" data-orig-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function s(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function c(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function u(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function l(t, e) {
            return t.f(e.get(["callToAction"], !1), e, "h")
        }

        function _(t, e) {
            return t.h("i18n_string", e, {}, {
                _key: "LEARN_MORE"
            })
        }

        function g(t, e) {
            return t.h("eq", e, {
                block: f
            }, {
                key: h,
                value: "1"
            })
        }

        function f(t, e) {
            return t.w(" ImageLoader").x(e.getPath(!1, ["config", "ui", "featured_delayed_defer"]), e, {
                block: w
            }, {})
        }

        function w(t, e) {
            return t.w("-Delayed")
        }

        function h(t, e) {
            return t.f(e.getPath(!1, ["images", "video", "defer"]), e, "h")
        }

        function p(t, e) {
            return t.w("100%")
        }

        function b(t, e) {
            return t.w("56.25%")
        }

        function m(t, e) {
            return t.w("Pos(r)")
        }

        function k(t, e) {
            return t.w('<div class="js-content-label C(c_').s(e.get(["categoryLabel"], !1), e, {
                "else": y,
                block: B
            }, {}).w(') Tt(c) Fw(b) Mb(6px) Lh(12px) Fz(13px)"').s(e.get(["categoryLabel"], !1), e, {
                block: x
            }, {}).w("><span>").f(e.get(["storyLabel"], !1), e, "h", ["s"]).w("</span>").x(e.getPath(!1, ["config", "ui", "publisher_headline"]), e, {
                block: v
            }, {}).w("</div>")
        }

        function y(t, e) {
            return t.f(e.get(["property"], !1), e, "h")
        }

        function B(t, e) {
            return t.f(e.getPath(!0, []), e, "h")
        }

        function x(t, e) {
            return t.w(' data-cat-label="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function v(t, e) {
            return t.s(e.get(["publisher"], !1), e, {
                block: P
            }, {})
        }

        function P(t, e) {
            return t.w('<span class="Fz(11px) Td(n) C(gray_dark) Fw(n) D(ib) Mt(4px) Mstart(9px)"> ').f(e.getPath(!0, []), e, "h", ["s"]).w("</span>")
        }

        function L(t, e) {
            return t.x(e.get(["previewLink"], !1), e, {
                "else": T,
                block: C
            }, {})
        }

        function T(t, e) {
            return t.w('href="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function C(t, e) {
            return t.w('href="').f(e.get(["previewLink"], !1), e, "h").w('" data-share-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function j(t, e) {
            return t.w('href="').f(e.get(["rdSigLink"], !1), e, "h").w('" data-orig-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function F(t, e) {
            return t.w("Pos(r)")
        }

        function M(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function E(t, e) {
            return t.w('target="_blank"')
        }

        function z(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function D(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function S(t, e) {
            return t.f(e.get(["title"], !1), e, "h", ["s"])
        }

        function W(t, e) {
            return t.w('rel="nofollow"')
        }

        function A(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function O(t, e) {
            return t.w("strm-stretch")
        }

        function $(t, e) {
            return t.w('<p class="').nx(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: I
            }, {}).w(' stream-summary M(0) LineClamp(2,36px) Lh(17px) C($gray) Bfv(h)">').f(e.get(["summary"], !1), e, "h", ["s"]).w("</p>")
        }

        function I(t, e) {
            return t.w("Pos(r)")
        }

        function R(t, e) {
            return t.s(e.get(["publisher"], !1), e, {
                block: q
            }, {})
        }

        function q(t, e) {
            return t.w('<span class="Fz(11px) Td(n) C(gray_dark) Fw(n) D(ib) Mt(6px)">').f(e.getPath(!0, []), e, "h", ["s"]).w("</span>")
        }

        function H(t, e) {
            return t.w('<div class="Pos(a) End(0) T(0) W(30px) Mstart(12px) Mend(2px) Ta(end)">').p(N, e, {}).w("</div>")
        }

        function N(t, e) {
            return t.f(e.getPath(!1, ["config", "template", "drawer_action"]), e, "h")
        }
        return dust.register("td-applet-stream-atomic-templates-item-inline_video_sm", e), e.__dustBody = !0, n.__dustBody = !0, i.__dustBody = !0, o.__dustBody = !0, r.__dustBody = !0, a.__dustBody = !0, d.__dustBody = !0, s.__dustBody = !0, c.__dustBody = !0, u.__dustBody = !0, l.__dustBody = !0, _.__dustBody = !0, g.__dustBody = !0, f.__dustBody = !0, w.__dustBody = !0, h.__dustBody = !0, p.__dustBody = !0, b.__dustBody = !0, m.__dustBody = !0, k.__dustBody = !0, y.__dustBody = !0, B.__dustBody = !0, x.__dustBody = !0, v.__dustBody = !0, P.__dustBody = !0, L.__dustBody = !0, T.__dustBody = !0, C.__dustBody = !0, j.__dustBody = !0, F.__dustBody = !0, M.__dustBody = !0, E.__dustBody = !0, z.__dustBody = !0, D.__dustBody = !0, S.__dustBody = !0, W.__dustBody = !0, A.__dustBody = !0, O.__dustBody = !0, $.__dustBody = !0, I.__dustBody = !0, R.__dustBody = !0, q.__dustBody = !0, H.__dustBody = !0, N.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/inline_video_sm.dust"] = dust.cache["td-applet-stream-atomic:item/inline_video_sm"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/inline_video_sm"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-item-play_icon"]
});
YUI.add("td-applet-stream-atomic-templates-item-inline_video_tb", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('<div class="Pos(r) Wow(bw) Cf').x(e.get(["actionsEnabled"], !1), e, {
                block: n
            }, {}).w('">\n    <div class="strm-left Fl(start) Pos(r) Pend(20px) js-video-content Op(.99)">\n        <div class="Pos(r) js-stream-content-img rounded-img Bd Td(n) W(100%) Bxz(bb)">').x(e.getPath(!1, ["config", "ui", "endcard_cta"]), e, {
                block: i
            }, {}).w('<span class="D(b) js-video-target js-video-image BackgroundPic').x(e.get(["pageload"], !1), e, {
                block: g
            }, {}).w('" style="padding-bottom:').h("lt", e, {
                "else": p,
                block: b
            }, {
                key: e.getPath(!1, ["images", "video", "height"]),
                value: e.getPath(!1, ["images", "video", "width"])
            }).w(";height:auto;width:100%;background-image:url('").f(e.getPath(!1, ["images", "video", "url"]), e, "h").w("');\"></span>").p("td-applet-stream-atomic:item/play_icon", e, {}).w('</div>\n    </div>\n    <div class="strm-right Fl(start) W(66%) ').x(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: k
            }, {}).w('">').x(e.get(["storyLabel"], !1), e, {
                block: m
            }, {}).w('<div class="strm-headline">\n            <h3 class="Mb(6px) LineClamp(2,42px) Lh(21px)">\n                <a ').x(e.get(["rdSigLink"], !1), e, {
                "else": L,
                block: j
            }, {}).w(' class="').nx(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: F
            }, {}).w(" O(n):f C($m_blue):f js-stream-content-link").x(e.get(["viewer_eligible"], !1), e, {
                block: M
            }, {}).w(' js-stream-item-title js-content-title C($link) C($m_blue):h Td(n) Fz(17px) Fw(b)" ').x(e.get(["tab"], !1), e, {
                block: E
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "hdln",
                elmt: "ct",
                r: z,
                ccode: D
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: S
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: W
            }, {}).w("><span>").f(e.get(["title"], !1), e, "h", ["s"]).w('</span><u class="Pos(a) T(0) Start(0) W(100%) H(100%) ').x(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: A
            }, {}).w('"></u></a>\n            </h3>\n            <div>\n                ').x(e.get(["summary"], !1), e, {
                block: O
            }, {}).w("\n").nx(e.getPath(!1, ["config", "ui", "publisher_headline"]), e, {
                block: I
            }, {}).w("\n</div>\n        </div>\n    </div>\n    ").x(e.get(["actionsEnabled"], !1), e, {
                block: q
            }, {}).w("\n</div>")
        }

        function n(t, e) {
            return t.w(" Pend(30px)")
        }

        function i(t, e) {
            return t.w('<div class="js-cstm-end-screen Pos(a) Ta-c W(100%) H(100%) Dn"><a target="_blank" ').x(e.get(["rdSigLink"], !1), e, {
                "else": o,
                block: d
            }, {}).w(' class="D(ib) Ell Td(n) C(white) Bdc(white) Bds(s) Bdrs(2px) Bdw(t) Py(4px) Px(10px) Cur(p) Fz(12px) ').x(e.get(["viewer_eligible"], !1), e, {
                block: s
            }, {}).w('" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                rspns: "nav",
                elm: "btn",
                elmt: "cta",
                itc: "0",
                r: c,
                ccode: u
            }).w(">").x(e.get(["callToAction"], !1), e, {
                block: l
            }, {}).nx(e.get(["callToAction"], !1), e, {
                block: _
            }, {}).w("</a></div>")
        }

        function o(t, e) {
            return t.x(e.get(["previewLink"], !1), e, {
                "else": r,
                block: a
            }, {})
        }

        function r(t, e) {
            return t.w('href="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function a(t, e) {
            return t.w('href="').f(e.get(["previewLink"], !1), e, "h").w('" data-share-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function d(t, e) {
            return t.w('href="').f(e.get(["rdSigLink"], !1), e, "h").w('" data-orig-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function s(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function c(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function u(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function l(t, e) {
            return t.f(e.get(["callToAction"], !1), e, "h")
        }

        function _(t, e) {
            return t.h("i18n_string", e, {}, {
                _key: "LEARN_MORE"
            })
        }

        function g(t, e) {
            return t.h("eq", e, {
                block: f
            }, {
                key: h,
                value: "1"
            })
        }

        function f(t, e) {
            return t.w(" ImageLoader").x(e.getPath(!1, ["config", "ui", "featured_delayed_defer"]), e, {
                block: w
            }, {})
        }

        function w(t, e) {
            return t.w("-Delayed")
        }

        function h(t, e) {
            return t.f(e.getPath(!1, ["images", "video", "defer"]), e, "h")
        }

        function p(t, e) {
            return t.w("100%")
        }

        function b(t, e) {
            return t.w("56.25%")
        }

        function k(t, e) {
            return t.w("Pos(r)")
        }

        function m(t, e) {
            return t.w('<div class="js-content-label C(c_').s(e.get(["categoryLabel"], !1), e, {
                "else": y,
                block: B
            }, {}).w(') Tt(c) Fw(b) Mb(6px) Lh(12px) Fz(13px)"').s(e.get(["categoryLabel"], !1), e, {
                block: x
            }, {}).w("><span>").f(e.get(["storyLabel"], !1), e, "h", ["s"]).w("</span>").x(e.getPath(!1, ["config", "ui", "publisher_headline"]), e, {
                block: v
            }, {}).w("</div>")
        }

        function y(t, e) {
            return t.f(e.get(["property"], !1), e, "h")
        }

        function B(t, e) {
            return t.f(e.getPath(!0, []), e, "h")
        }

        function x(t, e) {
            return t.w(' data-cat-label="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function v(t, e) {
            return t.s(e.get(["publisher"], !1), e, {
                block: P
            }, {})
        }

        function P(t, e) {
            return t.w('<span class="Fz(11px) Td(n) C(gray_dark) Fw(n) D(ib) Mt(4px) Mstart(9px)"> ').f(e.getPath(!0, []), e, "h", ["s"]).w("</span>")
        }

        function L(t, e) {
            return t.x(e.get(["previewLink"], !1), e, {
                "else": T,
                block: C
            }, {})
        }

        function T(t, e) {
            return t.w('href="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function C(t, e) {
            return t.w('href="').f(e.get(["previewLink"], !1), e, "h").w('" data-share-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function j(t, e) {
            return t.w('href="').f(e.get(["rdSigLink"], !1), e, "h").w('" data-orig-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function F(t, e) {
            return t.w("Pos(r)")
        }

        function M(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function E(t, e) {
            return t.w('target="_blank"')
        }

        function z(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function D(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function S(t, e) {
            return t.w('rel="nofollow"')
        }

        function W(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function A(t, e) {
            return t.w("strm-stretch")
        }

        function O(t, e) {
            return t.w('<p class="').nx(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: $
            }, {}).w(' stream-summary M(0) LineClamp(2,36px) Lh(17px) C($gray) Bfv(h)">').f(e.get(["summary"], !1), e, "h", ["s"]).w("</p>")
        }

        function $(t, e) {
            return t.w("Pos(r)")
        }

        function I(t, e) {
            return t.s(e.get(["publisher"], !1), e, {
                block: R
            }, {})
        }

        function R(t, e) {
            return t.w('<span class="Fz(11px) Td(n) C(gray_dark) Fw(n) D(ib) Mt(6px)">').f(e.getPath(!0, []), e, "h", ["s"]).w("</span>")
        }

        function q(t, e) {
            return t.w('<div class="Pos(a) End(0) T(0) W(30px) Mstart(12px) Mend(2px) Ta(end)">').p(H, e, {}).w("</div>")
        }

        function H(t, e) {
            return t.f(e.getPath(!1, ["config", "template", "drawer_action"]), e, "h")
        }
        return dust.register("td-applet-stream-atomic-templates-item-inline_video_tb", e), e.__dustBody = !0, n.__dustBody = !0, i.__dustBody = !0, o.__dustBody = !0, r.__dustBody = !0, a.__dustBody = !0, d.__dustBody = !0, s.__dustBody = !0, c.__dustBody = !0, u.__dustBody = !0, l.__dustBody = !0, _.__dustBody = !0, g.__dustBody = !0, f.__dustBody = !0, w.__dustBody = !0, h.__dustBody = !0, p.__dustBody = !0, b.__dustBody = !0, k.__dustBody = !0, m.__dustBody = !0, y.__dustBody = !0, B.__dustBody = !0, x.__dustBody = !0, v.__dustBody = !0, P.__dustBody = !0, L.__dustBody = !0, T.__dustBody = !0, C.__dustBody = !0, j.__dustBody = !0, F.__dustBody = !0, M.__dustBody = !0, E.__dustBody = !0, z.__dustBody = !0, D.__dustBody = !0, S.__dustBody = !0, W.__dustBody = !0, A.__dustBody = !0, O.__dustBody = !0, $.__dustBody = !0, I.__dustBody = !0, R.__dustBody = !0, q.__dustBody = !0, H.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/inline_video_tb.dust"] = dust.cache["td-applet-stream-atomic:item/inline_video_tb"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/inline_video_tb"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-item-play_icon"]
});
YUI.add("td-applet-stream-atomic-templates-item-inline_video_v2", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('<div class="Pos(r) Wow(bw) Cf">\n    <div class="strm-left Fl(start) Pos(r) Pend(20px) js-video-content Op(.99)').x(e.get(["storyline"], !1), e, {
                block: n
            }, {}).w('">\n        <div class="Pos(r) js-stream-content-img rounded-img Bd Td(n) W(100%) Bxz(bb)"><span class="D(b) js-video-target js-video-image BackgroundPic').x(e.get(["pageload"], !1), e, {
                block: a
            }, {}).w('" style="padding-bottom:').h("lt", e, {
                "else": d,
                block: r
            }, {
                key: e.getPath(!1, ["images", "video", "height"]),
                value: e.getPath(!1, ["images", "video", "width"])
            }).w(";height:auto;width:100%background-image:url('").f(e.getPath(!1, ["images", "video", "url"]), e, "h").w("');\"></span>").p("td-applet-stream-atomic:item/play_icon", e, {}).w("</div>\n        ").p("td-applet-stream-atomic:item/storyline_images", e, {}).w('\n</div>\n    <div class="strm-right Fl(start)">\n        ').x(e.get(["storyLabel"], !1), e, {
                block: l
            }, {}).w('\n<div class="strm-headline">\n            <h3 class="M(0) Lh(22px)">\n                <a href="').f(e.get(["link"], !1), e, "h").w('" class="Pos(r) js-stream-content-link').x(e.get(["viewer_eligible"], !1), e, {
                block: p
            }, {}).w(' js-stream-item-title js-content-title C($link) C($m_blue):h Td(n) Fz(18px) Fw(b)" ').x(e.get(["tab"], !1), e, {
                block: _
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "hdln",
                elmt: "ct",
                r: g,
                ccode: w
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: f
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: h
            }, {}).w('><span class="D(ib) LineClamp(2,44px)">').f(e.get(["title"], !1), e, "h", ["s"]).w('</span><u class="Pos(a) T(0) Start(0) W(100%) H(100%)"></u></a>\n            </h3>\n            <div>\n                ').x(e.get(["summary"], !1), e, {
                block: y
            }, {}).w("\n").s(e.get(["publisher"], !1), e, {
                block: b
            }, {}).w("\n</div>\n        </div>\n        ").x(e.get(["storyline"], !1), e, {
                block: v
            }, {}).w("\n</div>\n    ").x(e.get(["actionsEnabled"], !1), e, {
                block: k
            }, {}).w("\n</div>\n")
        }

        function n(t, e) {
            return t.w(" storyline-main-img")
        }

        function a(t, e) {
            return t.h("eq", e, {
                block: s
            }, {
                key: o,
                value: "1"
            })
        }

        function s(t, e) {
            return t.w(" ImageLoader").x(e.getPath(!1, ["config", "ui", "featured_delayed_defer"]), e, {
                block: i
            }, {})
        }

        function i(t, e) {
            return t.w("-Delayed")
        }

        function o(t, e) {
            return t.f(e.getPath(!1, ["images", "video", "defer"]), e, "h")
        }

        function d(t, e) {
            return t.w("100%")
        }

        function r(t, e) {
            return t.w("56.25%")
        }

        function l(t, e) {
            return t.w('<span class="js-content-label C(c_').s(e.get(["categoryLabel"], !1), e, {
                "else": c,
                block: u
            }, {}).w(') Tt(u) Fw(500) Mb(3px) D(ib) Fz(12px)"').s(e.get(["categoryLabel"], !1), e, {
                block: m
            }, {}).w(">").f(e.get(["storyLabel"], !1), e, "h", ["s"]).w("</span>")
        }

        function c(t, e) {
            return t.f(e.get(["property"], !1), e, "h")
        }

        function u(t, e) {
            return t.f(e.getPath(!0, []), e, "h")
        }

        function m(t, e) {
            return t.w(' data-cat-label="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function p(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function _(t, e) {
            return t.w('target="_blank"')
        }

        function g(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function w(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function f(t, e) {
            return t.w('rel="nofollow"')
        }

        function h(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function y(t, e) {
            return t.w('<p class="Pos(r) stream-summary M(0) LineClamp(2,34px) Lh(17px) C($gray) Bfv(h)">').f(e.get(["summary"], !1), e, "h", ["s"]).w("</p>")
        }

        function b(t, e) {
            return t.w('<span class="Fz(11px) Td(n) C(gray_dark) Fw(n) D(ib) Mt(4px)">').f(e.getPath(!0, []), e, "h", ["s"]).w("</span>")
        }

        function v(t, e) {
            return t.w('<div class="Mt(14px)">').p("td-applet-stream-atomic:item/storyline", e, {
                total: e.get(["storylineImageCount"], !1)
            }).w("</div>")
        }

        function k(t, e) {
            return t.w('<div class="Fl(end) W(30px) Ta(end)">').p(B, e, {}).w("</div>")
        }

        function B(t, e) {
            return t.f(e.getPath(!1, ["config", "template", "drawer_action"]), e, "h")
        }
        return dust.register("td-applet-stream-atomic-templates-item-inline_video_v2", e), e.__dustBody = !0, n.__dustBody = !0, a.__dustBody = !0, s.__dustBody = !0, i.__dustBody = !0, o.__dustBody = !0, d.__dustBody = !0, r.__dustBody = !0, l.__dustBody = !0, c.__dustBody = !0, u.__dustBody = !0, m.__dustBody = !0, p.__dustBody = !0, _.__dustBody = !0, g.__dustBody = !0, w.__dustBody = !0, f.__dustBody = !0, h.__dustBody = !0, y.__dustBody = !0, b.__dustBody = !0, v.__dustBody = !0, k.__dustBody = !0, B.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/inline_video_v2.dust"] = dust.cache["td-applet-stream-atomic:item/inline_video_v2"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/inline_video_v2"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-item-play_icon", "td-applet-stream-atomic-templates-item-storyline_images", "td-applet-stream-atomic-templates-item-storyline"]
});
YUI.add("td-applet-stream-atomic-templates-item-needtoknow_actions", function(t, o) {
    dust.cache = dust.cache || {}, dust.cache[o] = function(t) {
        function o(t, o) {
            return t.w('<div class="D(ib) Z(1) ').x(o.get(["userFollowing"], !1), o, {
                block: e
            }, {}).w('follow-teaser js-stream-followable D(ib) Va(t)" data-followid="').f(o.get(["followId"], !1), o, "h").w('">\n    <div class="btnWrap D(ib)">\n        <button title="unfollow" class="Fw(b) followed_D(b) Pos(r) P(0) Bd(0) D(n) unfollowBtn C(#fff) O(n) Bgc($opBlack)" ').h("rapid_data_attr", o, {}, {
                "rapid-base": o.get(["i13n"], !1),
                r: n,
                ccode: l,
                t4: a,
                elm: "btn",
                elmt: "unfollow",
                itc: "1",
                aid: c
            }).w(' data-action-outcome="dclent">\n        <i class="unfollowIcon unfollowBtn:h_D(b) D(n) Fl(start) Fz(15px) Fw(b) W(20px) H(20px) Lh(20px) Ta(c) Icon-Fp2 IconStarOutline C(#bcbcbc)"></i><i class="followingIcon unfollowBtn:h_D(n) Icon-Fp2 Fl(start) IconStarFilled Fz(15px) Fw(b) W(20px) H(20px) Lh(20px) Ta(c) C(white)"></i>\n        <div class="unfollowTxt Mstart(20px) Fz(13px) C(#fff) Lh(20px)">\n            <div class="Fl(start) Mstart(2px)">').x(o.get(["userFollowing"], !1), o, {
                "else": s,
                block: d
            }, {}).w('</div>\n        </div>\n        </button>\n        <button title="follow" class="Fw(b) Pos(r) followed_D(n) D(b) followBtn C(#fff) O(n) Bgc($opBlack) P(0) Bd(0)" ').h("rapid_data_attr", o, {}, {
                "rapid-base": o.get(["i13n"], !1),
                r: i,
                ccode: r,
                t4: u,
                elm: "btn",
                elmt: "follow",
                itc: "1",
                aid: f
            }).w(' data-action-outcome="dclent">\n            <i class="followBtn:h_D(n) followed_D(n) Icon-Fp2 Fl(start) IconStarOutline Fz(15px) W(20px) H(20px) Lh(20px) Ta(c) followBtn:h_C(white)"></i><i class="followBtn:h_D(b) followed_D(n) D(n) Icon-Fp2 Fl(start) IconStarFilled Fz(15px) W(20px) H(20px) Lh(20px) Ta(c) followBtn:h_C(white)"></i><div class="followed_D(n) Mstart(20px) Fz(13px) Lh(20px) followBtn:h_C(white)"><div class="Fl(start) Mstart(2px)">').h("i18n_string", o, {}, {
                _key: "FOLLOW_UPDATES"
            }).w('</div></div>\n        </button>\n    </div>\n    <div class="js-stream-follow-name D(ib) Wow(n) Tt(c) Fz(13px) C(white) Va(t) Lh(21px) follow-teaser:h_C(white)">').f(o.get(["followTeaser"], !1), o, "h", ["s"]).w("</div>\n</div>")
        }

        function e(t, o) {
            return t.w("followed ")
        }

        function n(t, o) {
            return t.f(o.get(["reason"], !1), o, "h")
        }

        function l(t, o) {
            return t.f(o.get(["ccode"], !1), o, "h")
        }

        function a(t, o) {
            return t.f(o.get(["followTeaser"], !1), o, "h")
        }

        function c(t, o) {
            return t.f(o.get(["followId"], !1), o, "h")
        }

        function s(t, o) {
            return t.h("i18n_string", o, {}, {
                _key: "UNFOLLOW"
            })
        }

        function d(t, o) {
            return t.h("i18n_string", o, {}, {
                _key: "FOLLOW"
            })
        }

        function i(t, o) {
            return t.f(o.get(["reason"], !1), o, "h")
        }

        function r(t, o) {
            return t.f(o.get(["ccode"], !1), o, "h")
        }

        function u(t, o) {
            return t.f(o.get(["followTeaser"], !1), o, "h")
        }

        function f(t, o) {
            return t.f(o.get(["followId"], !1), o, "h")
        }
        return dust.register("td-applet-stream-atomic-templates-item-needtoknow_actions", o), o.__dustBody = !0, e.__dustBody = !0, n.__dustBody = !0, l.__dustBody = !0, a.__dustBody = !0, c.__dustBody = !0, s.__dustBody = !0, d.__dustBody = !0, i.__dustBody = !0, r.__dustBody = !0, u.__dustBody = !0, f.__dustBody = !0, o
    }(), dust.cache["td-applet-stream-atomic:item/needtoknow_actions.dust"] = dust.cache["td-applet-stream-atomic:item/needtoknow_actions"] = dust.cache[o], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/needtoknow_actions"] = function(t, e) {
        t = t || {}, dust.render(o, t, e)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-item-nfl_card_sm", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.s(e.get(["video_card"], !1), e, {
                block: n
            }, {}).w("\n")
        }

        function n(t, e) {
            return t.w('\n<div data-temp="').f(e.get(["template"], !1), e, "h").w('" class="Ov(h) Mt(20px) Pb(8px) Bgc(#ededf1) strm-nfl-card"').s(e.get(["id"], !1), e, {
                block: a
            }, {}).w(' data-videoExpType="nfl-video">\n    <div class="Bgc(#fff)">\n        <div class="Mb(20px) Ov(h) Pos(r) Pstart(20px)">\n            <img class="Mend(10px) Va(m) W(35px)" src="').f(e.getPath(!1, ["config", "ui", "nfl_card_logo"]), e, "h").w('" alt="" />\n            <h2 class="D(ib)">').s(e.getPath(!1, ["config", "ui", "videocard_title"]), e, {
                "else": c,
                block: s
            }, {}).w("</h2>\n        </div>\n        ").x(e.getPath(!1, ["config", "ui", "nflcard_app_promo_enabled"]), e, {
                "else": d,
                block: _
            }, {}).w("\n</div>\n</div>\n")
        }

        function a(t, e) {
            return t.w(' data-uuid="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function c(t, e) {
            return t.h("i18n_string", e, {}, {
                _key: "WATCH_NFL_NOW"
            })
        }

        function s(t, e) {
            return t.f(e.getPath(!0, []), e, "h")
        }

        function d(t, e) {
            return t.w('\n<div class="js-video-target').x(e.getPath(!1, ["config", "ui", "nflgeo_enabled"]), e, {
                block: i
            }, {}).w('">\n            <img src="').s(e.getPath(!1, ["config", "ui", "nflcard_placeholder"]), e, {
                "else": o,
                block: r
            }, {}).w('" class="W(100%) Mih(180px)" alt="" />\n            ').x(e.getPath(!1, ["config", "ui", "nflgeo_enabled"]), e, {
                block: l
            }, {}).w("\n</div>\n        ")
        }

        function i(t, e) {
            return t.w(" Pos(r) streamImage")
        }

        function o(t, e) {
            return t.f(e.getPath(!1, ["image", "url"]), e, "h")
        }

        function r(t, e) {
            return t.f(e.getPath(!0, []), e, "h")
        }

        function l(t, e) {
            return t.w('\n<div class="Pos(a) B(10px) C(#fff) W(100%)">\n                ').x(e.get(["userDeclinedGeoRequest"], !1), e, {
                "else": u,
                block: f
            }, {}).w("\n</div>\n            ")
        }

        function u(t, e) {
            return t.w('\n<div class="js-detect-loc Mx(20px)">\n                    <button class="Bd(1px) P(0) O(n) Bgc(#208ff7) Px(20px) Py(10px) Mt(12px) Bdrs(3px) Mb(20px) Mt(10px) W(100%)">\n                        ').h("i18n_string", e, {}, {
                _key: "DETECT_MY_LOCATION"
            }).w("\n</button>\n                </div>\n                ")
        }

        function f(t, e) {
            return t.w('\n<a class="Bd(1px) Bgc(#208ff7) Px(20px) Py(10px) D(b) C(#fff) Fz(16px) Bdrs(3px) Mb(20px) Mt(10px) Mx(20px) Ta(c)" href="').f(e.getPath(!1, ["config", "ui", "nfl_sports_app_promo"]), e, "h").w('">\n                    ').h("i18n_string", e, {}, {
                _key: "OPEN_YAHOO_SPORTS"
            }).w("\n</a>\n                ")
        }

        function _(t, e) {
            return t.w('\n<a class="Pos(r) D(b)" ').s(e.getPath(!1, ["config", "ui", "nflcard_app_promo_url"]), e, {
                block: p
            }, {}).w(' data-ylk="slk:nflapppromo;">\n            <img src="').f(e.getPath(!1, ["config", "ui", "nflcard_placeholder"]), e, "h").w('" class="W(100%) Mih(180px)" alt="" />\n            <img class="Pos(a)" src="p.gif?beaconType=nflcardview&cachebust=').f(e.get(["yRid"], !1), e, "h").w('" height=0 width=0 />\n        </a>\n        ')
        }

        function p(t, e) {
            return t.w('href="').f(e.getPath(!0, []), e, "h").w('"')
        }
        return dust.register("td-applet-stream-atomic-templates-item-nfl_card_sm", e), e.__dustBody = !0, n.__dustBody = !0, a.__dustBody = !0, c.__dustBody = !0, s.__dustBody = !0, d.__dustBody = !0, i.__dustBody = !0, o.__dustBody = !0, r.__dustBody = !0, l.__dustBody = !0, u.__dustBody = !0, f.__dustBody = !0, _.__dustBody = !0, p.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/nfl_card_sm.dust"] = dust.cache["td-applet-stream-atomic:item/nfl_card_sm"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/nfl_card_sm"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-item-ntk_actions", function(t, n) {
    dust.cache = dust.cache || {}, dust.cache[n] = function(t) {
        function n(t, n) {
            return t.w('<ul class="Whs(nw) Mx(20px) Pt(8px) Pb(10px) Bdt($border_trans) js-stream-side-buttons js-stream-actions js-stream-tumblr-actions').h("gt", n, {
                block: e
            }, {
                key: o,
                value: 0
            }).nx(n.getPath(!1, ["config", "ui", "dislike"]), n, {
                block: s
            }, {}).w('">\n    ').x(n.getPath(!1, ["config", "ui", "like"]), n, {
                block: i
            }, {}).w("\n").x(n.getPath(!1, ["config", "ui", "stream_actions_share_panel"]), n, {
                block: h
            }, {}).w("\n").x(n.get(["commentCount"], !1), n, {
                block: g
            }, {}).w("\n</ul>\n")
        }

        function e(t, n) {
            return t.w(" has-comments")
        }

        function o(t, n) {
            return t.f(n.get(["commentCount"], !1), n, "h")
        }

        function s(t, n) {
            return t.w(" js-stream-dislike-disabled")
        }

        function i(t, n) {
            return t.w('\n<li class="ActionLike D(ib) O(n) Lh(1) Mend(14px) Mend(20px)--miw1200 Va(t)">\n        ').x(n.getPath(!1, ["config", "signed_in"]), n, {
                "else": c,
                block: d
            }, {}).w("\n</li>\n    ")
        }

        function c(t, n) {
            return t.w('\n<a href="').x(n.getPath(!1, ["config", "ui", "stream_actions_likable"]), n, {
                "else": r,
                block: u
            }, {}).w('"\n            class="js-stream-like-button ').x(n.getPath(!1, ["config", "ui", "stream_actions_likable"]), n, {
                block: a
            }, {}).w('rapidnofollow Td(n) Td(n):h O(n) C($gray_fuji) css-filters_C(white) D(ib) Pt(6px) js-stream-button-loggedout"\n            role="button"\n            tabindex="0"\n            data-ylk="slk:like;t4:drwr;elm:btn;elmt:lgn-yh;" data-action-outcome="lgn"><i class="Icon-Fp2 IconTumblrHeartOutline Fz(21px)"></i></a>\n        ')
        }

        function r(t, n) {
            return t.f(n.getPath(!1, ["config", "js", "login_url"]), n, "h")
        }

        function u(t, n) {
            return t.w("javascript:void(0)")
        }

        function a(t, n) {
            return t.w("rapid-noclick-resp ")
        }

        function d(t, n) {
            return t.w('\n<a class="js-stream-like-button rapid-noclick-resp rapidnofollow Td(n) Td(n):h O(n) C($gray_fuji) css-filters_C(white) ').x(n.get(["liked"], !1), n, {
                block: l
            }, {}).w(' D(ib) Pt(5px)" role="button" tabindex="0" ').h("rapid_data_attr", n, {}, {
                "rapid-base": n.get(["i13n"], !1),
                r: _,
                ccode: m,
                t4: "ctrl",
                elm: "btn",
                elmt: "op",
                itc: "1",
                rspns: "op",
                slk: "like"
            }).w('><i class="Icon-Fp2 ').x(n.get(["liked"], !1), n, {
                "else": f,
                block: p
            }, {}).w(' Fz(21px)"></i></a>\n        ')
        }

        function l(t, n) {
            return t.w(" ActionSelected")
        }

        function _(t, n) {
            return t.f(n.get(["reason"], !1), n, "h")
        }

        function m(t, n) {
            return t.f(n.get(["ccode"], !1), n, "h")
        }

        function f(t, n) {
            return t.w("IconTumblrHeartOutline")
        }

        function p(t, n) {
            return t.w("IconTumblrHeart")
        }

        function h(t, n) {
            return t.w('\n<li class="D(ib) O(n) stream-share Cur(p) Lh(1) Pos(r) Va(t) Mend(14px) Mend(20px)--miw1200" tabindex="0">\n        <i class="Icon-Fp2 IconStreamShare Fz(21px) D(b) Pt(4px) C($gray_fuji) css-filters_C(white) js-stream-share-icon"></i>\n        <div class="js-stream-share-panel Start(-45px) T(24px) Pos(a) Ta(start) H(0) W(169px) Z(11) Op(0) Ov(h) stream-share:h_Op(1) stream-share:h_H(a) Whs(n)"></div>\n    </li>\n    ')
        }

        function g(t, n) {
            return t.w('\n<li class="ActionComments D(ib) O(n) Pos(r) Lh(1) Mt(0)! Va(t)" data-cmntnum="').f(n.get(["commentCount"], !1), n, "h").w('"><a href="').x(n.getPath(!1, ["config", "ui", "comments_inline"]), n, {
                "else": b,
                block: k
            }, {}).w('" role="button" tabindex="0" class="C($gray_fuji) css-filters_C(white) D(ib) Pt(6px) Pos(r) Td(n) Td(n):f O(n) O(n):f js-stream-comments-button').nx(n.getPath(!1, ["config", "ui", "comments_inline"]), n, {
                "else": y,
                block: j
            }, {}).x(n.getPath(!1, ["config", "ui", "comments_reactions_enabled"]), n, {
                block: v
            }, {}).w('"').x(n.getPath(!1, ["config", "ui", "comments_inline"]), n, {
                "else": T,
                block: I
            }, {}).w(">").x(n.getPath(!1, ["config", "ui", "comments_reactions_enabled"]), n, {
                "else": z,
                block: E
            }, {}).w("</a>\n    </li>\n    ")
        }

        function b(t, n) {
            return t.f(n.get(["link"], !1), n, "h").s(n.get(["commentsLinkSupplement"], !1), n, {
                block: w
            }, {})
        }

        function w(t, n) {
            return t.f(n.getPath(!0, []), n, "h")
        }

        function k(t, n) {
            return t.w("javascript:void(0)")
        }

        function y(t, n) {
            return t.h("gte", n, {
                "else": x,
                block: C
            }, {
                key: P,
                value: 2
            })
        }

        function x(t, n) {
            return t.x(n.get(["viewer_eligible"], !1), n, {
                block: B
            }, {})
        }

        function B(t, n) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function C(t, n) {
            return t.w("-drawer")
        }

        function P(t, n) {
            return t.f(n.get(["commentCount"], !1), n, "h")
        }

        function j(t, n) {
            return t.x(n.get(["viewer_eligible"], !1), n, {
                block: F
            }, {})
        }

        function F(t, n) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function v(t, n) {
            return t.w(" ActionComments:h_C($signin_blue)! js-use-reactions-anim")
        }

        function T(t, n) {
            return t.h("rapid_data_attr", n, {}, {
                "rapid-base": n.get(["i13n"], !1),
                r: O,
                ccode: D,
                t4: "ctrl",
                elm: "btn",
                slk: "cmmt",
                itc: "0"
            })
        }

        function O(t, n) {
            return t.f(n.get(["reason"], !1), n, "h")
        }

        function D(t, n) {
            return t.f(n.get(["ccode"], !1), n, "h")
        }

        function I(t, n) {
            return t.w(" ").h("rapid_data_attr", n, {}, {
                "rapid-base": n.get(["i13n"], !1),
                r: M,
                ccode: V,
                t4: "ctrl",
                elm: "btn",
                slk: "cmmt",
                itc: "1"
            })
        }

        function M(t, n) {
            return t.f(n.get(["reason"], !1), n, "h")
        }

        function V(t, n) {
            return t.f(n.get(["ccode"], !1), n, "h")
        }

        function z(t, n) {
            return t.w('<i class="Icon-Fp2 IconComments Va(m) D(ib) Mend(8px) Fz(21px) Mt(-2px) ActionComments:h_C($signin_blue)"></i><span class="js-stream-comment-counter Fw(b) D(ib) Va(m) Cur(p) Fz(11px) Mt(-3px) Fw(b)ActionComments:h_C($signin_blue)').x(n.getPath(!1, ["config", "ui", "animate_comments"]), n, {
                block: S
            }, {}).w('">').h("gt", n, {
                block: A
            }, {
                key: $,
                value: 0
            }).w('</span><span class="js-stream-comment-counter-update Fw(b) D(ib) Va(m) Cur(p) Mt(-3px) Fz(11px)"></span>')
        }

        function S(t, n) {
            return t.w(" js-stream-comment-hidden")
        }

        function A(t, n) {
            return t.f(n.get(["commentString"], !1), n, "h")
        }

        function $(t, n) {
            return t.f(n.get(["commentCount"], !1), n, "h")
        }

        function E(t, n) {
            return t.w('<i class="Icon-Fp2 IconComments Va(m) D(ib) Mend(8px) Fz(21px) Mt(-1px) "></i><span class="js-stream-comment-counter').x(n.getPath(!1, ["config", "ui", "animate_comments"]), n, {
                block: L
            }, {}).w(' Fw(b) D(ib) Cur(p) Fz(11px) Va(1px)">').h("gt", n, {
                block: H
            }, {
                key: R,
                value: 0
            }).w('</span><span class="js-comments-reacting').x(n.getPath(!1, ["config", "ui", "animate_comments"]), n, {
                block: N
            }, {}).w(' Fw(b) D(ib) Mstart(4px) Fz(11px) Va(1px)">').h("eq", n, {
                block: W
            }, {
                key: q,
                value: 1
            }).h("gte", n, {
                block: G
            }, {
                key: U,
                value: 1
            }).w("</span>")
        }

        function L(t, n) {
            return t.w(" js-stream-comment-hidden")
        }

        function H(t, n) {
            return t.f(n.get(["commentString"], !1), n, "h")
        }

        function R(t, n) {
            return t.f(n.get(["commentCount"], !1), n, "h")
        }

        function N(t, n) {
            return t.w(" js-stream-comment-hidden")
        }

        function W(t, n) {
            return t.h("i18n_string", n, {}, {
                _key: "PERSON_REACTED"
            })
        }

        function q(t, n) {
            return t.f(n.get(["commentCount"], !1), n, "h")
        }

        function G(t, n) {
            return t.h("i18n_string", n, {}, {
                _key: "PEOPLE_REACTING"
            })
        }

        function U(t, n) {
            return t.f(n.get(["commentCount"], !1), n, "h")
        }
        return dust.register("td-applet-stream-atomic-templates-item-ntk_actions", n), n.__dustBody = !0, e.__dustBody = !0, o.__dustBody = !0, s.__dustBody = !0, i.__dustBody = !0, c.__dustBody = !0, r.__dustBody = !0, u.__dustBody = !0, a.__dustBody = !0, d.__dustBody = !0, l.__dustBody = !0, _.__dustBody = !0, m.__dustBody = !0, f.__dustBody = !0, p.__dustBody = !0, h.__dustBody = !0, g.__dustBody = !0, b.__dustBody = !0, w.__dustBody = !0, k.__dustBody = !0, y.__dustBody = !0, x.__dustBody = !0, B.__dustBody = !0, C.__dustBody = !0, P.__dustBody = !0, j.__dustBody = !0, F.__dustBody = !0, v.__dustBody = !0, T.__dustBody = !0, O.__dustBody = !0, D.__dustBody = !0, I.__dustBody = !0, M.__dustBody = !0, V.__dustBody = !0, z.__dustBody = !0, S.__dustBody = !0, A.__dustBody = !0, $.__dustBody = !0, E.__dustBody = !0, L.__dustBody = !0, H.__dustBody = !0, R.__dustBody = !0, N.__dustBody = !0, W.__dustBody = !0, q.__dustBody = !0, G.__dustBody = !0, U.__dustBody = !0, n
    }(), dust.cache["td-applet-stream-atomic:item/ntk_actions.dust"] = dust.cache["td-applet-stream-atomic:item/ntk_actions"] = dust.cache[n], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/ntk_actions"] = function(t, e) {
        t = t || {}, dust.render(n, t, e)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-item-ntk_actions_sm", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.x(e.get(["commentCount"], !1), e, {
                block: n
            }, {}).w("\n").x(e.get(["inline_video_eligible"], !1), e, {
                block: x
            }, {})
        }

        function n(t, e) {
            return t.x(e.get(["viewer_eligible"], !1), e, {
                block: o
            }, {})
        }

        function o(t, e) {
            return t.w('<a href="javascript:void(0)" data-orig-link="').x(e.get(["previewLink"], !1), e, {
                "else": i,
                block: c
            }, {}).w('" data-cmntnum="').f(e.get(["commentCount"], !1), e, "h").w('" role="button" tabindex="0" data-uuid="').x(e.get(["cauuid"], !1), e, {
                "else": u,
                block: s
            }, {}).w('"').s(e.get(["cauuid"], !1), e, {
                block: d
            }, {}).w(' class="D(ib) C(#188fff) ntk-item_C(#fff) Td(n) Td(n):f O(n) O(n):f Pos(r) Z(2) Lh(1) js-use-reactions-anim js-stream-comments-button').x(e.get(["viewer_eligible"], !1), e, {
                block: a
            }, {}).x(e.get(["inline_video_eligible"], !1), e, {
                block: r
            }, {}).w('" data-ylk="rapid-base:i13n;r:').f(e.get(["reason"], !1), e, "h").w(";ccode:").f(e.get(["ccode"], !1), e, "h").w(";t4:ctrl;elm:cmmt_open;slk:comment;itc:0;").x(e.get(["ntk-action"], !1), e, {
                block: _
            }, {}).w(";g:").f(e.get(["cauuid"], !1), e, "h").w(";aid:").f(e.get(["id"], !1), e, "h").w(";pos:").f(e.get(["pos"], !1), e, "h").w('" ').h("eq", e, {
                block: m
            }, {
                key: l,
                value: "0"
            }).w('><i class="Icon-Fp2 IconComments Va(m) Pend(6px) Fz(19px) Pos(r) T(2px)"></i><span class="js-stream-comment-counter ').x(e.getPath(!1, ["config", "ui", "animate_comments"]), e, {
                block: f
            }, {}).w(' Va(m) Cur(p) Fz(12px)">').h("gt", e, {
                block: g
            }, {
                key: p,
                value: "0"
            }).w('</span><span class="js-comments-reacting ').x(e.getPath(!1, ["config", "ui", "animate_comments"]), e, {
                block: k
            }, {}).w(' Va(m) Pstart(4px) Fz(12px)">').h("eq", e, {
                "else": h,
                block: w
            }, {
                key: b,
                value: "1"
            }).h("gt", e, {
                block: y
            }, {
                key: B,
                value: "1"
            }).w("</span></a>\n")
        }

        function i(t, e) {
            return t.f(e.get(["link"], !1), e, "h")
        }

        function c(t, e) {
            return t.f(e.get(["previewLink"], !1), e, "h")
        }

        function u(t, e) {
            return t.f(e.get(["id"], !1), e, "h")
        }

        function s(t, e) {
            return t.f(e.get(["cauuid"], !1), e, "h")
        }

        function d(t, e) {
            return t.w(' data-cauuid="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function a(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function r(t, e) {
            return t.w(" js-videomgr-excluded")
        }

        function _(t, e) {
            return t.w("subsec:needtoknow;pkgt:need_to_know")
        }

        function m(t, e) {
            return t.w(' aria-label="').h("i18n_string", e, {}, {
                _key: "REACT"
            }).w('"')
        }

        function l(t, e) {
            return t.f(e.get(["commentCount"], !1), e, "h")
        }

        function f(t, e) {
            return t.w("js-stream-comment-hidden")
        }

        function g(t, e) {
            return t.f(e.get(["commentString"], !1), e, "h")
        }

        function p(t, e) {
            return t.f(e.get(["commentCount"], !1), e, "h")
        }

        function k(t, e) {
            return t.w("js-stream-comment-hidden")
        }

        function h(t, e) {
            return t
        }

        function w(t, e) {
            return t.h("i18n_string", e, {}, {
                _key: "REACTED"
            })
        }

        function b(t, e) {
            return t.f(e.get(["commentCount"], !1), e, "h")
        }

        function y(t, e) {
            return t.h("i18n_string", e, {}, {
                _key: "REACTING"
            })
        }

        function B(t, e) {
            return t.f(e.get(["commentCount"], !1), e, "h")
        }

        function x(t, e) {
            return t.w('\n<button class="ntk-volume-btn ntk-muted-btn ntk-video-mgr-inited_D(b) D(n) Fl(end) P(7px) Mt(-6px) Mend(-41px) O(n)" style="-webkit-tap-highlight-color: transparent;"><i class="ntk-volume-icon D(ib) Va(m) Bgz(100%) W(16px) H(14px) Bgr(nr) Bgp(c)"></i><b class="Hidden">').h("i18n_string", e, {}, {
                _key: "VOL_UNMUTE_BTN"
            }).w("</b></button>\n")
        }
        return dust.register("td-applet-stream-atomic-templates-item-ntk_actions_sm", e), e.__dustBody = !0, n.__dustBody = !0, o.__dustBody = !0, i.__dustBody = !0, c.__dustBody = !0, u.__dustBody = !0, s.__dustBody = !0, d.__dustBody = !0, a.__dustBody = !0, r.__dustBody = !0, _.__dustBody = !0, m.__dustBody = !0, l.__dustBody = !0, f.__dustBody = !0, g.__dustBody = !0, p.__dustBody = !0, k.__dustBody = !0, h.__dustBody = !0, w.__dustBody = !0, b.__dustBody = !0, y.__dustBody = !0, B.__dustBody = !0, x.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/ntk_actions_sm.dust"] = dust.cache["td-applet-stream-atomic:item/ntk_actions_sm"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/ntk_actions_sm"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-item-ntk_actions_tb", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.x(e.get(["commentCount"], !1), e, {
                block: n
            }, {}).w("\n").x(e.get(["inline_video_eligible"], !1), e, {
                block: x
            }, {})
        }

        function n(t, e) {
            return t.w('<a href="').x(e.get(["previewLink"], !1), e, {
                "else": o,
                block: u
            }, {}).s(e.get(["commentsLinkSupplement"], !1), e, {
                block: c
            }, {}).w('" data-cmntnum="').f(e.get(["commentCount"], !1), e, "h").w('" role="button" tabindex="0" data-uuid="').x(e.get(["cauuid"], !1), e, {
                "else": i,
                block: s
            }, {}).w('"').s(e.get(["cauuid"], !1), e, {
                block: d
            }, {}).w(' class="D(ib) C(#188fff) ntk-item_C(#fff) Td(n) Td(n):f O(n) O(n):f Pos(r) Z(2) Lh(1) js-use-reactions-anim js-stream-comments-button ').x(e.get(["viewer_eligible"], !1), e, {
                block: a
            }, {}).x(e.get(["inline_video_eligible"], !1), e, {
                block: r
            }, {}).w('" data-ylk="rapid-base:i13n;r:').f(e.get(["reason"], !1), e, "h").w(";ccode:").f(e.get(["ccode"], !1), e, "h").w(";t4:ctrl;elm:cmmt_open;slk:comment;itc:0; ").x(e.get(["ntk-action"], !1), e, {
                block: _
            }, {}).w(";g:").f(e.get(["cauuid"], !1), e, "h").w(";aid:").f(e.get(["id"], !1), e, "h").w(';"').h("eq", e, {
                block: m
            }, {
                key: l,
                value: "0"
            }).w('><i class="Icon-Fp2 IconComments Va(m) ').h("gte", e, {
                block: f
            }, {
                key: g,
                value: "1"
            }).w(' Fz(19px) Pos(r) T(1px)"></i>').h("gte", e, {
                block: p
            }, {
                key: B,
                value: "1"
            }).w("</a>")
        }

        function o(t, e) {
            return t.f(e.get(["link"], !1), e, "h")
        }

        function u(t, e) {
            return t.f(e.get(["previewLink"], !1), e, "h")
        }

        function c(t, e) {
            return t.f(e.getPath(!0, []), e, "h")
        }

        function i(t, e) {
            return t.f(e.get(["id"], !1), e, "h")
        }

        function s(t, e) {
            return t.f(e.get(["cauuid"], !1), e, "h")
        }

        function d(t, e) {
            return t.w(' data-cauuid="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function a(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function r(t, e) {
            return t.w(" js-videomgr-excluded")
        }

        function _(t, e) {
            return t.w("subsec:needtoknow;pkgt:need_to_know")
        }

        function m(t, e) {
            return t.w(' aria-label="').h("i18n_string", e, {}, {
                _key: "REACT"
            }).w('"')
        }

        function l(t, e) {
            return t.f(e.get(["commentCount"], !1), e, "h")
        }

        function f(t, e) {
            return t.w("Pend(6px)")
        }

        function g(t, e) {
            return t.f(e.get(["commentCount"], !1), e, "h")
        }

        function p(t, e) {
            return t.w('<span class="js-stream-comment-counter ').x(e.getPath(!1, ["config", "ui", "animate_comments"]), e, {
                block: k
            }, {}).w(' Va(m) Cur(p) Fz(12px)">').f(e.get(["commentString"], !1), e, "h").w('</span><span class="js-comments-reacting ').x(e.getPath(!1, ["config", "ui", "animate_comments"]), e, {
                block: h
            }, {}).w(' Va(m) Pstart(4px) Fz(12px)">').h("eq", e, {
                "else": b,
                block: w
            }, {
                key: y,
                value: "1"
            }).w("</span>")
        }

        function k(t, e) {
            return t.w("js-stream-comment-hidden")
        }

        function h(t, e) {
            return t.w("js-stream-comment-hidden")
        }

        function b(t, e) {
            return t.h("i18n_string", e, {}, {
                _key: "REACTING"
            })
        }

        function w(t, e) {
            return t.h("i18n_string", e, {}, {
                _key: "REACTED"
            })
        }

        function y(t, e) {
            return t.f(e.get(["commentCount"], !1), e, "h")
        }

        function B(t, e) {
            return t.f(e.get(["commentCount"], !1), e, "h")
        }

        function x(t, e) {
            return t.w('\n<button class="ntk-volume-btn ntk-muted-btn ntk-video-mgr-inited_D(b) D(n) Fl(end) P(7px) Mt(-6px) Mend(-41px) O(n)" style="-webkit-tap-highlight-color: transparent;"><i class="ntk-volume-icon D(ib) Va(m) Bgz(100%) W(16px) H(14px) Bgr(nr) Bgp(c)"></i><b class="Hidden">').h("i18n_string", e, {}, {
                _key: "VOL_UNMUTE_BTN"
            }).w("</b></button>\n")
        }
        return dust.register("td-applet-stream-atomic-templates-item-ntk_actions_tb", e), e.__dustBody = !0, n.__dustBody = !0, o.__dustBody = !0, u.__dustBody = !0, c.__dustBody = !0, i.__dustBody = !0, s.__dustBody = !0, d.__dustBody = !0, a.__dustBody = !0, r.__dustBody = !0, _.__dustBody = !0, m.__dustBody = !0, l.__dustBody = !0, f.__dustBody = !0, g.__dustBody = !0, p.__dustBody = !0, k.__dustBody = !0, h.__dustBody = !0, b.__dustBody = !0, w.__dustBody = !0, y.__dustBody = !0, B.__dustBody = !0, x.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/ntk_actions_tb.dust"] = dust.cache["td-applet-stream-atomic:item/ntk_actions_tb"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/ntk_actions_tb"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-item-ntk_items_sm", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.s(e.get(["fptoday_items"], !1), e, {
                block: n
            }, {}).w("\n")
        }

        function n(t, e) {
            return t.w('<li class="D(ib) Whs(n) Lts(n) W(100%) ntk-item Pos(r) Va(t)" data-uuid="').f(e.get(["cauuid"], !1), e, "h").w('" data-uuid-list="ntk"').x(e.get(["inline_video_eligible"], !1), e, {
                block: i
            }, {}).w('>\n    <div class="ntk-wrap Pos(r)">\n        <a ').x(e.get(["rdSigLink"], !1), e, {
                "else": d,
                block: c
            }, {}).w(' class="D(b) C(#fff)! Td(n) Td(n):f streamImage js-stream-content-link js-stream-item-title W(100%)').x(e.get(["inline_video_eligible"], !1), e, {
                block: l
            }, {}).x(e.get(["viewer_eligible"], !1), e, {
                block: _
            }, {}).w('" ').x(e.get(["tab"], !1), e, {
                block: f
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                slk: g,
                subsec: "needtoknow",
                pkgt: "need_to_know",
                pos: p,
                cpos: "1",
                elm: "hdln",
                elmt: "ct",
                r: m,
                ccode: w,
                g: h,
                aid: k
            }).x(e.get(["off_network"], !1), e, {
                block: b
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: y
            }, {}).w(">").x(e.get(["image"], !1), e, {
                block: B
            }, {}).w('<div class="Pos(a) Start(0) B(40px)"><h3 class="Bxz(bb) W(100%) Pstart(20px) Pend(13px) Fw(b)  M(0) Mb(-2px) Lh(1.2) LineClamp(2,2.5em) Bfv(h) js-stream-item-title js-content-title ').x(e.getPath(!1, ["config", "ui", "ntk_mobile_font_size"]), e, {
                "else": D,
                block: M
            }, {}).w('">').f(e.get(["title"], !1), e, "h", ["s"]).w('</h3></div></a>\n        <div class="Pos(a) Start(20px) Bxz(bb) B(10px) End(50px)">\n            ').p("td-applet-stream-atomic:item/ntk_actions_sm", e, {
                "ntk-action": 1,
                pos: S
            }).w("\n</div>\n    </div>").x(e.getPath(!1, ["config", "ui", "comments"]), e, {
                block: z
            }, {}).w("\n</li>")
        }

        function i(t, e) {
            return t.s(e.get(["pkg_video_id"], !1), e, {
                block: o
            }, {})
        }

        function o(t, e) {
            return t.w(' data-pkg-video-id="').f(e.getPath(!0, []), e, "h").w('" data-video-cfg=\'{"destroyOnError": true, "expName": "NTK", "expType": "strm-mobile-inline", "viewerEligible": ').x(e.get(["viewer_eligible"], !1), e, {
                "else": s,
                block: r
            }, {}).w(', "overrideTap": true}\'')
        }

        function s(t, e) {
            return t.w("false")
        }

        function r(t, e) {
            return t.w("true")
        }

        function d(t, e) {
            return t.x(e.get(["previewLink"], !1), e, {
                "else": u,
                block: a
            }, {})
        }

        function u(t, e) {
            return t.w('href="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function a(t, e) {
            return t.w('href="').f(e.get(["previewLink"], !1), e, "h").w('" data-share-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function c(t, e) {
            return t.w('href="').f(e.get(["rdSigLink"], !1), e, "h").w('" data-orig-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function l(t, e) {
            return t.w(" js-video-target")
        }

        function _(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function f(t, e) {
            return t.w('target="_blank"')
        }

        function g(t, e) {
            return t.f(e.get(["title"], !1), e, "h", ["s"])
        }

        function p(t, e) {
            return t.f(e.get(["pos"], !1), e, "h")
        }

        function m(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function w(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function h(t, e) {
            return t.f(e.get(["cauuid"], !1), e, "h")
        }

        function k(t, e) {
            return t.f(e.get(["id"], !1), e, "h")
        }

        function b(t, e) {
            return t.w('rel="nofollow"')
        }

        function y(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function B(t, e) {
            return t.w('<img src="').h("eq", e, {
                "else": x,
                block: T
            }, {
                key: e.get(["$idx"], !1),
                value: 0
            }).w('" class="W(100%) ').x(e.getPath(!1, ["config", "ui", "enable_inline_ntk_video"]), e, {
                "else": L,
                block: j
            }, {}).w(' slide-img" alt="" ').h("gt", e, {
                block: C
            }, {
                key: e.get(["$idx"], !1),
                value: 0
            }).w(">")
        }

        function x(t, e) {
            return t.x(e.getPath(!1, ["config", "ui", "enable_inline_ntk_video"]), e, {
                "else": v,
                block: P
            }, {})
        }

        function v(t, e) {
            return t.w("https://s.yimg.com/cv/ae/default/170620/wide-trans.gif")
        }

        function P(t, e) {
            return t.w("https://s.yimg.com/cv/ae/default/170721/wide-trans-16-9.gif")
        }

        function T(t, e) {
            return t.f(e.get(["image"], !1), e, "h")
        }

        function L(t, e) {
            return t.w("Mih(200px)")
        }

        function j(t, e) {
            return t.w("Mih(180px)")
        }

        function C(t, e) {
            return t.w('data-src="').f(e.get(["image"], !1), e, "h").w('"')
        }

        function D(t, e) {
            return t.w("Fz(26px)")
        }

        function M(t, e) {
            return t.w("Fz(").f(e.getPath(!1, ["config", "ui", "ntk_mobile_font_size"]), e, "h").w(")")
        }

        function S(t, e) {
            return t.f(e.get(["pos"], !1), e, "h")
        }

        function z(t, e) {
            return t.x(e.getPath(!1, ["config", "ui", "ntk_comments"]), e, {
                block: E
            }, {})
        }

        function E(t, e) {
            return t.w('<i class="D(b) Pos(r) W(0) H(0) B(0px) Start(28px) Mt(-8px) top-cmmt-caret" style="border-left:8px solid transparent; border-right: 8px solid transparent; border-bottom: 8px solid #fff"></i>\n        <div class="Pos(r) Bgc(#fff) Px(20px) Py(10px)">\n            <a href="').x(e.get(["viewer_eligible"], !1), e, {
                "else": V,
                block: W
            }, {}).w('" data-orig-link="').x(e.get(["previewLink"], !1), e, {
                "else": F,
                block: N
            }, {}).w('" role="button" data-uuid="').x(e.get(["cauuid"], !1), e, {
                "else": O,
                block: I
            }, {}).w('"').s(e.get(["cauuid"], !1), e, {
                block: R
            }, {}).w(' class="D(tb) C(#000) Td(n) Td(n):f O(n) O(n):f  Mih(30px) js-stream-comments-button').x(e.get(["viewer_eligible"], !1), e, {
                block: q
            }, {}).x(e.get(["inline_video_eligible"], !1), e, {
                block: U
            }, {}).w('" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                r: $,
                ccode: H,
                t4: "ctrl",
                elm: "cmmt_open",
                subsec: "needtoknow",
                pos: K,
                cpos: "1",
                pkgt: "need_to_know",
                slk: "comment",
                itc: "0",
                g: Y,
                aid: A
            }).w(">\n            ").s(e.getPath(!1, ["topRatedComments", "0"]), e, {
                "else": G,
                block: J
            }, {}).w("\n</a>\n        </div>")
        }

        function V(t, e) {
            return t.f(e.get(["link"], !1), e, "h")
        }

        function W(t, e) {
            return t.w("javascript:void(0)")
        }

        function F(t, e) {
            return t.f(e.get(["link"], !1), e, "h")
        }

        function N(t, e) {
            return t.f(e.get(["previewLink"], !1), e, "h")
        }

        function O(t, e) {
            return t.f(e.get(["id"], !1), e, "h")
        }

        function I(t, e) {
            return t.f(e.get(["cauuid"], !1), e, "h")
        }

        function R(t, e) {
            return t.w(' data-cauuid="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function q(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function U(t, e) {
            return t.w(" js-videomgr-excluded")
        }

        function $(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function H(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function K(t, e) {
            return t.f(e.get(["pos"], !1), e, "h")
        }

        function Y(t, e) {
            return t.f(e.get(["cauuid"], !1), e, "h")
        }

        function A(t, e) {
            return t.f(e.get(["id"], !1), e, "h")
        }

        function G(t, e) {
            return t.w('\n<img src="https://s.yimg.com/dh/ap/social/profile/profile_a48.png" class="D(tbc) Va(m) Bdrs(46.5%)" width=30 height=30 alt="" />\n                <span class="D(tbc) Va(m) Pstart(12px)">\n                    <p class="LineClamp(2,2.5em)">\n                    ').h("i18n_string", e, {}, {
                _key: "COMMENTS_BE_FIRST"
            }).w("\n</p>\n                </span>\n            ")
        }

        function J(t, e) {
            return t.w('\n<img src="').f(e.getPath(!1, ["userProfile", "imageUrl"]), e, "h").w('" class="D(tbc) Va(m) Bdrs(46.5%)" width=30 height=30 alt="" onerror="this.onerror=null;this.src=\'https://s.yimg.com/dh/ap/social/profile/profile_a48.png\';" />\n                <span class="D(tbc) Va(m) Pstart(12px)">\n                    <p class="LineClamp(2,2.5em)">\n                        <span class="Fw(b)">').f(e.getPath(!1, ["userProfile", "nickName"]), e, "h", ["s"]).w(": </span>").f(e.get(["comment"], !1), e, "h").w("\n</p>\n                </span>\n            ")
        }
        return dust.register("td-applet-stream-atomic-templates-item-ntk_items_sm", e), e.__dustBody = !0, n.__dustBody = !0, i.__dustBody = !0, o.__dustBody = !0, s.__dustBody = !0, r.__dustBody = !0, d.__dustBody = !0, u.__dustBody = !0, a.__dustBody = !0, c.__dustBody = !0, l.__dustBody = !0, _.__dustBody = !0, f.__dustBody = !0, g.__dustBody = !0, p.__dustBody = !0, m.__dustBody = !0, w.__dustBody = !0, h.__dustBody = !0, k.__dustBody = !0, b.__dustBody = !0, y.__dustBody = !0, B.__dustBody = !0, x.__dustBody = !0, v.__dustBody = !0, P.__dustBody = !0, T.__dustBody = !0, L.__dustBody = !0, j.__dustBody = !0, C.__dustBody = !0, D.__dustBody = !0, M.__dustBody = !0, S.__dustBody = !0, z.__dustBody = !0, E.__dustBody = !0, V.__dustBody = !0, W.__dustBody = !0, F.__dustBody = !0, N.__dustBody = !0, O.__dustBody = !0, I.__dustBody = !0, R.__dustBody = !0, q.__dustBody = !0, U.__dustBody = !0, $.__dustBody = !0, H.__dustBody = !0, K.__dustBody = !0, Y.__dustBody = !0, A.__dustBody = !0, G.__dustBody = !0, J.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/ntk_items_sm.dust"] = dust.cache["td-applet-stream-atomic:item/ntk_items_sm"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/ntk_items_sm"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-item-ntk_sm", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('<div class="ntk-wrap Pos(r)">\n    <a ').x(e.get(["rdSigLink"], !1), e, {
                "else": n,
                block: a
            }, {}).w(' class="D(b) C(#fff)! Td(n) Td(n):f streamImage js-stream-content-link js-stream-item-title W(100%) ').x(e.get(["viewer_eligible"], !1), e, {
                block: o
            }, {}).w('" ').x(e.get(["tab"], !1), e, {
                block: i
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                slk: d,
                subsec: "needtoknow",
                elm: "img",
                elmt: "ct",
                r: c,
                ccode: u
            }).x(e.get(["off_network"], !1), e, {
                block: l
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: f
            }, {}).w(">").s(e.get(["image"], !1), e, {
                block: _
            }, {}).w('<div class="Pos(a) Start(0) B(40px)"><h3 class="Bxz(bb) W(100%) Pstart(20px) Pend(13px) Fw(b) Fz(26px) M(0) Mb(-2px) Lh(1.2) LineClamp(2,2.5em) Bfv(h) js-stream-item-title">').f(e.get(["title"], !1), e, "h", ["s"]).w('</h3></div></a>\n    <div class="Pos(a) Start(0) Bxz(bb) W(100%) Pstart(20px) B(10px)').x(e.getPath(!1, ["config", "ui", "stream_actions_share_modal"]), e, {
                block: m
            }, {}).w('">\n        ').x(e.get(["actionsEnabled"], !1), e, {
                block: p
            }, {}).w("\n</div>\n</div>\n").x(e.get(["topRatedComments"], !1), e, {
                block: h
            }, {}).w('\n<div class="Pos(r) H(16px) Bgc(#ededf1) Bdt($card_border) Ta(c) Mb(20px)"></div>\n\n<style>\nli.ntk-item:after {\n    display: none;\n}\n</style>\n')
        }

        function n(t, e) {
            return t.x(e.get(["previewLink"], !1), e, {
                "else": s,
                block: r
            }, {})
        }

        function s(t, e) {
            return t.w('href="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function r(t, e) {
            return t.w('href="').f(e.get(["previewLink"], !1), e, "h").w('" data-share-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function a(t, e) {
            return t.w('href="').f(e.get(["rdSigLink"], !1), e, "h").w('" data-orig-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function o(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function i(t, e) {
            return t.w('target="_blank"')
        }

        function d(t, e) {
            return t.f(e.get(["title"], !1), e, "h", ["s"])
        }

        function c(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function u(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function l(t, e) {
            return t.w('rel="nofollow"')
        }

        function f(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function _(t, e) {
            return t.w('<img src="').f(e.get(["url"], !1), e, "h").w('" class="W(100%) Mih(200px)" alt="">')
        }

        function m(t, e) {
            return t.w(" Pend(13px)")
        }

        function p(t, e) {
            return t.p("td-applet-stream-atomic:item/ntk_actions_sm", e, {})
        }

        function h(t, e) {
            return t.w('\n<i class="D(b) Pos(r) W(0) H(0) B(0px) Start(28px) Mt(-8px) top-cmmt-caret" style="border-left:8px solid transparent; border-right: 8px solid transparent; border-bottom: 8px solid #fff"></i>\n<div class="Pos(r) Bgc(#fff) Pstart(20px) Py(10px) Ovx(a) top-cmmt-scroll" style="touch-action: auto;">\n    <ul class="Whs(nw) Mah(2.5em)">\n        ').s(e.get(["topRatedComments"], !1), e, {
                block: w
            }, {}).w("\n</ul>\n</div>\n")
        }

        function w(t, e) {
            return t.w('\n<li class="D(ib) Pend(10px) Whs(n) Va(t) ').h("eq", e, {
                "else": g,
                block: k
            }, {
                key: e.get(["$idx"], !1),
                value: 2
            }).w('">\n            <a href="javascript:void(0)" data-orig-link="').x(e.get(["previewLink"], !1), e, {
                "else": b,
                block: x
            }, {}).w('" role="button" data-uuid="').x(e.get(["cauuid"], !1), e, {
                "else": B,
                block: y
            }, {}).w('"').s(e.get(["cauuid"], !1), e, {
                block: v
            }, {}).w(' class="Pos(r) Pstart(42px) C(#000) Td(n) Td(n):f O(n) O(n):f LineClamp(2,2.5em) Mih(30px) js-stream-comments-button').x(e.get(["viewer_eligible"], !1), e, {
                block: P
            }, {}).w('" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                r: L,
                ccode: T,
                t4: "ctrl",
                elm: "btn",
                slk: "cmmtstr",
                itc: "1"
            }).w('>\n                <img src="').f(e.getPath(!1, ["userProfile", "imageUrl"]), e, "h").w('" class="Pos(a) T(0) Start(0) Bdrs(46.5%) Mend(12px)" width=30 height=30 alt="" onerror="this.onerror=null;this.src=\'https://s.yimg.com/dh/ap/social/profile/profile_a48.png\';" />\n                <span class="Fw(b)">').f(e.getPath(!1, ["userProfile", "nickName"]), e, "h", ["s"]).w(": </span>").f(e.get(["comment"], !1), e, "h").w("\n</a>\n        </li>\n        ")
        }

        function g(t, e) {
            return t.w("W(94%)")
        }

        function k(t, e) {
            return t.w("W(100%)")
        }

        function b(t, e) {
            return t.f(e.get(["link"], !1), e, "h")
        }

        function x(t, e) {
            return t.f(e.get(["previewLink"], !1), e, "h")
        }

        function B(t, e) {
            return t.f(e.get(["id"], !1), e, "h")
        }

        function y(t, e) {
            return t.f(e.get(["cauuid"], !1), e, "h")
        }

        function v(t, e) {
            return t.w(' data-cauuid="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function P(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function L(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function T(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }
        return dust.register("td-applet-stream-atomic-templates-item-ntk_sm", e), e.__dustBody = !0, n.__dustBody = !0, s.__dustBody = !0, r.__dustBody = !0, a.__dustBody = !0, o.__dustBody = !0, i.__dustBody = !0, d.__dustBody = !0, c.__dustBody = !0, u.__dustBody = !0, l.__dustBody = !0, f.__dustBody = !0, _.__dustBody = !0, m.__dustBody = !0, p.__dustBody = !0, h.__dustBody = !0, w.__dustBody = !0, g.__dustBody = !0, k.__dustBody = !0, b.__dustBody = !0, x.__dustBody = !0, B.__dustBody = !0, y.__dustBody = !0, v.__dustBody = !0, P.__dustBody = !0, L.__dustBody = !0, T.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/ntk_sm.dust"] = dust.cache["td-applet-stream-atomic:item/ntk_sm"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/ntk_sm"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-item-ntk_actions_sm"]
});
YUI.add("td-applet-stream-atomic-templates-item-ntk_widescreen", function(t, n) {
    dust.cache = dust.cache || {}, dust.cache[n] = function(t) {
        function n(t, n) {
            return t.w("<style>\n\n.strm-ntk-gradient a:before {\n    background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 60%);\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(0,0,0,0)), color-stop(60%,rgba(0,0,0,0.65)));\n    background: -o-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 60%);\n    background: -ms-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 60%);\n    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 60%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 );\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    min-height: 4em;\n    content: ' ';\n}\n\n@media (max-width: 1100px) {\n\t.ntk-link:before {\n\t\tleft: 66.66666%!important;\n\t}\n}\n\n.ntk-link:before {\n\tposition: absolute;\n\tbackground: #464E56;\n\tleft: 75%;\n\ttop: 0;\n\tbottom: 0;\n\tright: 0;\n\tcontent: ' ';\n\tz-index: 1;\n}\n\n\nhtml:not(.css-filters) .css-blur {\n\tbackground: #f7f8ff!important;\n}\n\n.css-filters .css-blur {\n\t-ms-filter: blur(30px);\n\t-o-filter: blur(30px);\n\t-moz-filter: blur(30px);\n\t-webkit-filter: blur(30px);\n\tfilter: blur(30px);\n    opacity: 0.6;\n\t-ms-transform: scale(1.5) scaleX(-1);\n\t-moz-transform: scale(1.5) scaleX(-1);\n\t-webkit-transform: scale(1.5) scaleX(-1);\n\ttransform: scale(1.5) scaleX(-1);\n\tbackground-position: right center;\n}\n\n\n.LineClamp\\(2\\,2\\.6em\\) {\n    max-height: 2.6em!important;\n}\n.webkit-alias {\n\t-webkit-font-smoothing: antialiased;\n}\n\n.js-stream-comment-counter-update {\n\tposition: absolute;\n    left: 37px;\n    top: 13px;\n    right: auto!important;\n    width: auto!important;\n}\n</style>\n\n<script>\n(function(){\n\t// Fallback for non filter support\n\tvar prefixes =['-webkit-','-moz-', '-o-','-ms-'];\n\tvar el = document.createElement('a');\n\tel.style.cssText = prefixes.join('filter:blur(2px); ');\n\t// documentMode is needed for false positives in oldIE, please see issue above\n\tif (!!el.style.length && ((document.documentMode === undefined || document.documentMode > 9))) {\n\t\tdocument.documentElement.className +=' css-filters';\n\t};\n})();\n<\/script>\n<div class=\"Pos(r) webkit-alias\">\n\t<a class=\"Bgr(nr) W(3/4) W(2/3)--md1100 Bgp(c) O(n):f Bgz(cv) Pb(42.38%) D(b) C(#000) css-filters_C(white) Td(n) Ov(h) Op(0.9):h Op(0.9):f ntk-link js-stream-content-link js-content-title js-stream-roundup-filmstrip").x(n.get(["viewer_eligible"], !1), n, {
                block: e
            }, {}).w('" ').x(n.get(["tab"], !1), n, {
                block: r
            }, {}).w(" ").x(n.get(["rdSigLink"], !1), n, {
                "else": a,
                block: o
            }, {}).w(" ").h("rapid_data_attr", n, {}, {
                "rapid-base": n.get(["i13n"], !1),
                slk: s,
                subsec: "needtoknow",
                elm: "img",
                elmt: "ct",
                r: i,
                ccode: d
            }).w(" ").x(n.get(["off_network"], !1), n, {
                block: l
            }, {}).s(n.get(["attrCat"], !1), n, {
                block: c
            }, {}).w(' style="background-image:url(').f(n.getPath(!1, ["image", "url"]), n, "h").w(')">\n\t\t<div class="Pos(a) Ov(h) Start(3/4) Start(2/3)--md1100 T(0) B(0) End(0) Z(2) ntk-img-path">\n\t\t\t<div class="Pos(a) Start(0) Z(2) T(0) End(0) B(0) css-blur Bgr(nr) Bgp(end_c) Bgz(cv) ntk-img-crop" style="background-image:url(').f(n.getPath(!1, ["image", "url"]), n, "h").w(');"></div>\n\t\t</div>\n\t\t<div class="Pos(a) End(0) T(0) B(0) P(20px) Pt(17px) W(25%) W(1/3)--md1100 Z(2) Bxz(bb) ntk-content">\n\t\t\t<h2 class="Fz(21px) Fz(17px)--md1200 Td(u):h js-stream-content-link:f_Td(u) LineClamp(4,5.3em) Mb(13px) Lh(1.15)">').f(n.get(["title"], !1), n, "h", ["s"]).w('</h2>\n\t\t\t<p class="LineClamp(5,6.7em) LineClamp(4,5.3em)--md1200 M(0) Lh(1.35)">').s(n.get(["summary"], !1), n, {
                block: u
            }, {}).w('</p>\n\t\t\t<span class="D(ib) Fw(b) Mt(15px) Td(u):h">').s(n.get(["more_link_text"], !1), n, {
                block: m
            }, {}).w('</span>\n\t\t</div>\n\t</a>\n\t<div class="Pos(a) B(0) End(0) C(#fff) W(1/4) W(1/3)--md1100 Z(2) Bxz(bb) ntk-footer">').p("td-applet-stream-atomic:item/ntk_actions", n, {}).w('</div>\n</div>\n<div class="Ov(h) webkit-alias">\n\t<ul class="Whs(nw) Mt(2px) Mstart(-2px) Mend(-2px) Lts(-3em) ').nx(n.getPath(!1, ["config", "ui", "ntk2_title_below"]), n, {
                block: f
            }, {}).w('">').s(n.get(["storyline"], !1), n, {
                block: g
            }, {}).w("</ul>\n</div>\n")
        }

        function e(t, n) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function r(t, n) {
            return t.w('target="_blank"')
        }

        function a(t, n) {
            return t.w('href="').f(n.get(["link"], !1), n, "h").w('"')
        }

        function o(t, n) {
            return t.w('href="').f(n.get(["rdSigLink"], !1), n, "h").w('" data-orig-link="').f(n.get(["link"], !1), n, "h").w('"')
        }

        function s(t, n) {
            return t.f(n.get(["title"], !1), n, "h", ["u", "s"])
        }

        function i(t, n) {
            return t.f(n.get(["reason"], !1), n, "h")
        }

        function d(t, n) {
            return t.f(n.get(["ccode"], !1), n, "h")
        }

        function l(t, n) {
            return t.w('rel="nofollow"')
        }

        function c(t, n) {
            return t.w(' data-attrcat="').f(n.getPath(!0, []), n, "h").w('"')
        }

        function u(t, n) {
            return t.f(n.getPath(!0, []), n, "h", ["s"])
        }

        function m(t, n) {
            return t.f(n.getPath(!0, []), n, "h", ["s"]).w("&nbsp;»")
        }

        function f(t, n) {
            return t.w("strm-ntk-gradient")
        }

        function g(t, n) {
            return t.w('<li class="W(1/4) W(1/3)--md1100 Pos(r) Whs(n) Va(t) D(ib) Lts(0) Bdend(none)">\n\t\t\t\t<a class="Pos(r) D(b) Pt(69%) Mend(2px) C($link) C($m_blue):h C($m_blue):f O(n):f Bgr(nr) Bgz(ct) Bgp(c_t) Op(0.9):h Op(0.9):f Td(n) strm-ntk-gradient_C(white)! strm-ntk-gradient_Pt(55%) strm-ntk-gradient_Bgz(cv) strm-ntk-gradient_Bgp(c) js-stream-content-link js-stream-item-title js-content-title').x(n.get(["viewer_eligible"], !1), n, {
                block: p
            }, {}).w('" ').x(n.getPath(!0, ["rdSigLink"]), n, {
                "else": _,
                block: h
            }, {}).w(' data-uuid="').f(n.getPath(!0, ["uuid"]), n, "h").w('" ').x(n.get(["tab"], !1), n, {
                block: b
            }, {}).w(" ").h("rapid_data_attr", n, {}, {
                "rapid-base": n.get(["i13n"], !1),
                slk: k,
                subsec: "needtoknow",
                elm: "rhdln",
                elmt: "ct",
                r: w,
                ccode: B,
                t4: "rel",
                cposy: x,
                pos: y,
                g: P,
                aid: v,
                expb: T
            }).w(" ").x(n.get(["off_network"], !1), n, {
                block: C
            }, {}).s(n.get(["attrCat"], !1), n, {
                block: z
            }, {}).w(' style="background-image:url(').f(n.getPath(!1, ["roundupThumb", "url"]), n, "h").w(');">\n\t\t \t\t\t<h3 class="Pos(a) M(0) Fz(14px) LineClamp(2,2.6em) strm-ntk-gradient_B(8px) strm-ntk-gradient_Start(10px) strm-ntk-gradient_End(10px) js-stream-content-link:f_Td(u) ').x(n.getPath(!1, ["config", "ui", "ntk2_title_below"]), n, {
                block: j
            }, {}).w(' Start(2px) Td(u):h">').f(n.get(["title"], !1), n, "h", ["s"]).w("</h3>\n\t\t \t\t</a>\n\t\t \t</li>")
        }

        function p(t, n) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function _(t, n) {
            return t.w('href="').f(n.getPath(!0, ["link"]), n, "h").w('"')
        }

        function h(t, n) {
            return t.w('href="').f(n.getPath(!0, ["rdSigLink"]), n, "h").w('" data-orig-link="').f(n.getPath(!0, ["link"]), n, "h").w('"')
        }

        function b(t, n) {
            return t.w('target="_blank"')
        }

        function k(t, n) {
            return t.f(n.get(["title"], !1), n, "h", ["u", "s"])
        }

        function w(t, n) {
            return t.f(n.get(["reason"], !1), n, "h")
        }

        function B(t, n) {
            return t.f(n.get(["ccode"], !1), n, "h")
        }

        function x(t, n) {
            return t.f(n.getPath(!0, ["cposy"]), n, "h")
        }

        function y(t, n) {
            return t.f(n.getPath(!0, ["pos"]), n, "h")
        }

        function P(t, n) {
            return t.f(n.getPath(!0, ["uuid"]), n, "h")
        }

        function v(t, n) {
            return t.f(n.getPath(!0, ["aid"]), n, "h")
        }

        function T(t, n) {
            return t.f(n.getPath(!0, ["expb"]), n, "h")
        }

        function C(t, n) {
            return t.w('rel="nofollow"')
        }

        function z(t, n) {
            return t.w(' data-attrcat="').f(n.getPath(!0, []), n, "h").w('"')
        }

        function j(t, n) {
            return t.w("T(70%) js-stream-content-link:f_Td(n)!")
        }
        return dust.register("td-applet-stream-atomic-templates-item-ntk_widescreen", n), n.__dustBody = !0, e.__dustBody = !0, r.__dustBody = !0, a.__dustBody = !0, o.__dustBody = !0, s.__dustBody = !0, i.__dustBody = !0, d.__dustBody = !0, l.__dustBody = !0, c.__dustBody = !0, u.__dustBody = !0, m.__dustBody = !0, f.__dustBody = !0, g.__dustBody = !0, p.__dustBody = !0, _.__dustBody = !0, h.__dustBody = !0, b.__dustBody = !0, k.__dustBody = !0, w.__dustBody = !0, B.__dustBody = !0, x.__dustBody = !0, y.__dustBody = !0, P.__dustBody = !0, v.__dustBody = !0, T.__dustBody = !0, C.__dustBody = !0, z.__dustBody = !0, j.__dustBody = !0, n
    }(), dust.cache["td-applet-stream-atomic:item/ntk_widescreen.dust"] = dust.cache["td-applet-stream-atomic:item/ntk_widescreen"] = dust.cache[n], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/ntk_widescreen"] = function(t, e) {
        t = t || {}, dust.render(n, t, e)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-item-ntk_actions"]
});
YUI.add("td-applet-stream-atomic-templates-item-ntk_widescreen_footer5", function(t, n) {
    dust.cache = dust.cache || {}, dust.cache[n] = function(t) {
        function n(t, n) {
            return t.w("<style>\n    .ntk-link:before {\n        position: absolute;\n        background: #464E56;\n        left: 60%;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        content: ' ';\n        z-index: 1;\n        margin-left: 5px;\n        border-radius: 0 2px 2px 0;\n    }\n\n    \n    html:not(.css-filters) .css-blur {\n        background: #f7f8ff!important;\n    }\n\n    .css-filters .css-blur {\n        -ms-filter: blur(30px);\n        -o-filter: blur(30px);\n        -moz-filter: blur(30px);\n        -webkit-filter: blur(30px);\n        filter: blur(30px);\n        opacity: 0.6;\n        -ms-transform: scale(1.5) scaleX(-1);\n        -moz-transform: scale(1.5) scaleX(-1);\n        -webkit-transform: scale(1.5) scaleX(-1);\n        transform: scale(1.5) scaleX(-1);\n        background-position: right center;\n    }\n\n    \n    .LineClamp\\(2\\,2\\.6em\\) {\n        max-height: 2.6em!important;\n    }\n    @media (max-width: 1100px) {\n        .LineClamp\\(3\\,4em\\)--md1100 {\n            max-height: 4em!important;\n        }\n    }\n\n    .webkit-alias {\n        -webkit-font-smoothing: antialiased;\n    }\n    \n    .ntk-footer .js-stream-comment-counter-update {\n        position: absolute;\n        left: 37px;\n        top: 13px;\n        right: auto!important;\n        width: auto!important;\n    }\n    /* style for left align layout */\n    .ntk-widescreen-align-start .ntk-link:before {\n        left: 0;\n        right: 60%;\n        margin-left: 0px;\n        margin-right: 5px;\n        border-radius: 2px 0 0 2px;\n    }\n</style>\n\n<script>\n    (function(){\n        // Fallback for non filter support\n        var prefixes =['-webkit-','-moz-', '-o-','-ms-'];\n        var el = document.createElement('a');\n        el.style.cssText = prefixes.join('filter:blur(2px); ');\n        // documentMode is needed for false positives in oldIE, please see issue above\n        if (!!el.style.length && ((document.documentMode === undefined || document.documentMode > 9))) {\n            document.documentElement.className +=' css-filters';\n        };\n    })();\n<\/script>\n\n<div class=\"Pos(r) webkit-alias ntk-link-filter Z(2)\">").x(n.get(["inline_video_eligible"], !1), n, {
                "else": e,
                block: x
            }, {}).x(n.get(["actionsEnabled"], !1), n, {
                block: N
            }, {}).w('</div>\n\n\n<div class="Ov(h) Mb(5px) Z(1)">\n    <ul class="Whs(nw) Mt(9px) Mend(-9px) Lts(-3em)">').s(n.get(["storyline"], !1), n, {
                block: R
            }, {}).w("</ul>\n</div>\n")
        }

        function e(t, n) {
            return t.w('<a class="Bgr(nr) W(61%)! Bgp(c) O(n):f Bgz(cv) D(b) C(#000) css-filters_C(white) Td(n) Ov(h) Op(0.9):h Op(0.9):f Ov(v):h Ov(v):f Bdrststart(2px) Bdrsbstart(2px) ntk-link js-stream-content-link js-content-title js-stream-roundup-filmstrip').x(n.get(["viewer_eligible"], !1), n, {
                block: r
            }, {}).w('"').s(n.get(["mab_test"], !1), n, {
                "else": o,
                block: a
            }, {}).x(n.get(["rdSigLink"], !1), n, {
                "else": _,
                block: h
            }, {}).x(n.get(["tab"], !1), n, {
                block: p
            }, {}).x(n.get(["off_network"], !1), n, {
                block: g
            }, {}).s(n.get(["attrCat"], !1), n, {
                block: m
            }, {}).w(" >\n                ").h("img", n, {}, {
                src: b,
                "class": "W(100%) Mih(215px) Mih(277px)--miw1200",
                defer: w,
                title: k
            }).w("\n").p("td-applet-stream-atomic:item/play_icon", n, {}).w('\n<div class="Pos(a) Ov(h) Start(3/5) Mstart(5px) T(0) B(0) End(0) Z(2) Bdrstend(2px) Bdrsbend(2px) ntk-img-path">\n                    <div class="Pos(a) Start(0) Z(2) T(0) End(0) B(0) css-blur Bgr(nr) Bgp(end_c) Bgz(cv) ntk-img-crop" style="background-image:url(').f(n.getPath(!1, ["image", "url"]), n, "h").w(');"></div>\n                </div>\n                <div class="Pos(a) End(0) T(0) B(0) W(2/5) Z(2) ntk-content">\n                    \n                    <div class="P(20px) Pstart(27px) P(35px)--miw1200 Pstart(42px)--miw1200">\n                        <h2 class="js-stream-item-title Fz(23px) Fz(18px)--md1100 Td(u):h js-stream-content-link:f_Td(u) LineClamp(4,5.3em) Mb(13px) Lh(1.15)">').f(n.get(["title"], !1), n, "h", ["s"]).w('</h2>\n                        <p class="LineClamp(4,5.3em) LineClamp(3,4em)--md1100 M(0) Lh(1.35) Mb(5px)">\n                            ').s(n.get(["summary"], !1), n, {
                block: B
            }, {}).w('\n</p>\n                        <span class="Fw(b) Td(u):h">\n                            ').s(n.get(["more_link_text"], !1), n, {
                block: y
            }, {}).w("\n</span>\n                    </div>\n                </div>\n        </a>")
        }

        function r(t, n) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function o(t, n) {
            return t.w(" ").h("rapid_data_attr", n, {}, {
                "rapid-base": n.get(["i13n"], !1),
                slk: s,
                subsec: "needtoknow",
                elm: "img",
                elmt: "ct",
                r: d,
                ccode: i
            })
        }

        function s(t, n) {
            return t.f(n.get(["title"], !1), n, "h", ["u", "s"])
        }

        function d(t, n) {
            return t.f(n.get(["reason"], !1), n, "h")
        }

        function i(t, n) {
            return t.f(n.get(["ccode"], !1), n, "h")
        }

        function a(t, n) {
            return t.w(" ").h("rapid_data_attr", n, {}, {
                "rapid-base": n.get(["i13n"], !1),
                slk: u,
                subsec: "needtoknow",
                elm: "img",
                elmt: "ct",
                r: c,
                ccode: l,
                mab_test: f
            })
        }

        function u(t, n) {
            return t.f(n.get(["title"], !1), n, "h", ["u", "s"])
        }

        function c(t, n) {
            return t.f(n.get(["reason"], !1), n, "h")
        }

        function l(t, n) {
            return t.f(n.get(["ccode"], !1), n, "h")
        }

        function f(t, n) {
            return t.f(n.getPath(!0, []), n, "h")
        }

        function _(t, n) {
            return t.w(' href="').f(n.get(["link"], !1), n, "h").w('"')
        }

        function h(t, n) {
            return t.w(' href="').f(n.get(["rdSigLink"], !1), n, "h").w('" data-orig-link="').f(n.get(["link"], !1), n, "h").w('"')
        }

        function p(t, n) {
            return t.w(' target="_blank"')
        }

        function g(t, n) {
            return t.w(' rel="nofollow"')
        }

        function m(t, n) {
            return t.w(' data-attrcat="').f(n.getPath(!0, []), n, "h").w('"')
        }

        function b(t, n) {
            return t.f(n.getPath(!1, ["image", "url"]), n, "h")
        }

        function w(t, n) {
            return t.f(n.get(["defer"], !1), n, "h")
        }

        function k(t, n) {
            return t.f(n.get(["ntkImageAttribution"], !1), n, "h")
        }

        function B(t, n) {
            return t.f(n.getPath(!0, []), n, "h", ["s"])
        }

        function y(t, n) {
            return t.f(n.getPath(!0, []), n, "h", ["s"]).w("&nbsp;»")
        }

        function x(t, n) {
            return t.w('<div class="Bgr(nr) W(61%)! Bgp(c) O(n):f Bgz(cv) D(b) C(#000) css-filters_C(white) Td(n) Ov(h) Op(0.9):h Op(0.9):f Ov(v):h Ov(v):f Bdrststart(2px) Bdrsbstart(2px)">\n            <div class="js-video-target Pos(r)"').x(n.getPath(!1, ["config", "ads", "yvap"]), n, {
                block: P
            }, {}).w(">\n                ").h("img", n, {}, {
                src: v,
                "class": "W(100%) Mih(215px) Mih(277px)--miw1200",
                defer: T,
                title: C
            }).w("\n").p("td-applet-stream-atomic:item/play_icon", n, {}).w('\n</div>\n            <a class="C(#000) css-filters_C(white) Td(n) D(b) ntk-link js-stream-content-link js-content-title js-stream-roundup-filmstrip').x(n.get(["viewer_eligible"], !1), n, {
                block: M
            }, {}).w('"').s(n.get(["mab_test"], !1), n, {
                "else": j,
                block: E
            }, {}).x(n.get(["rdSigLink"], !1), n, {
                "else": D,
                block: I
            }, {}).x(n.get(["tab"], !1), n, {
                block: $
            }, {}).x(n.get(["off_network"], !1), n, {
                block: U
            }, {}).s(n.get(["attrCat"], !1), n, {
                block: V
            }, {}).w(' >\n                    <div class="Pos(a) Ov(h) Start(3/5) Mstart(5px) T(0) B(0) End(0) Z(2) Bdrstend(2px) Bdrsbend(2px) ntk-img-path">\n                        <div class="Pos(a) Start(0) Z(2) T(0) End(0) B(0) css-blur Bgr(nr) Bgp(end_c) Bgz(cv) ntk-img-crop" style="background-image:url(').f(n.getPath(!1, ["image", "url"]), n, "h").w(');"></div>\n                    </div>\n                    <div class="Pos(a) End(0) T(0) B(0) W(2/5) Z(2) ntk-content">\n                        \n                        <div class="P(20px) Pstart(27px) P(35px)--miw1200 Pstart(42px)--miw1200">\n                            <h2 class="js-stream-item-title Fz(23px) Fz(18px)--md1100 Td(u):h js-stream-content-link:f_Td(u) LineClamp(4,5.3em) Mb(13px) Lh(1.15)">').f(n.get(["title"], !1), n, "h", ["s"]).w('</h2>\n                            <p class="LineClamp(4,5.3em) LineClamp(3,4em)--md1100 M(0) Lh(1.35) Mb(5px)">\n                                ').s(n.get(["summary"], !1), n, {
                block: X
            }, {}).w('\n</p>\n                            <span class="Fw(b) Td(u):h">\n                                ').s(n.get(["more_link_text"], !1), n, {
                block: A
            }, {}).w("\n</span>\n                        </div>\n                    </div>\n            </a>\n        </div>")
        }

        function P(t, n) {
            return t.w(' data-yvap="').f(n.getPath(!1, ["config", "ads", "yvap"]), n, "h", ["js"]).w('"')
        }

        function v(t, n) {
            return t.f(n.getPath(!1, ["image", "url"]), n, "h")
        }

        function T(t, n) {
            return t.f(n.get(["defer"], !1), n, "h")
        }

        function C(t, n) {
            return t.f(n.get(["ntkImageAttribution"], !1), n, "h")
        }

        function M(t, n) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function j(t, n) {
            return t.w(" ").h("rapid_data_attr", n, {}, {
                "rapid-base": n.get(["i13n"], !1),
                slk: L,
                subsec: "needtoknow",
                elm: "img",
                elmt: "ct",
                r: O,
                ccode: z
            }).w(" ")
        }

        function L(t, n) {
            return t.f(n.get(["title"], !1), n, "h", ["u", "s"])
        }

        function O(t, n) {
            return t.f(n.get(["reason"], !1), n, "h")
        }

        function z(t, n) {
            return t.f(n.get(["ccode"], !1), n, "h")
        }

        function E(t, n) {
            return t.w(" ").h("rapid_data_attr", n, {}, {
                "rapid-base": n.get(["i13n"], !1),
                slk: S,
                subsec: "needtoknow",
                elm: "img",
                elmt: "ct",
                r: W,
                ccode: F,
                mab_test: Z
            }).w(" ")
        }

        function S(t, n) {
            return t.f(n.get(["title"], !1), n, "h", ["u", "s"])
        }

        function W(t, n) {
            return t.f(n.get(["reason"], !1), n, "h")
        }

        function F(t, n) {
            return t.f(n.get(["ccode"], !1), n, "h")
        }

        function Z(t, n) {
            return t.f(n.getPath(!0, []), n, "h")
        }

        function D(t, n) {
            return t.w(' href="').f(n.get(["link"], !1), n, "h").w('"')
        }

        function I(t, n) {
            return t.w(' href="').f(n.get(["rdSigLink"], !1), n, "h").w('" data-orig-link="').f(n.get(["link"], !1), n, "h").w('"')
        }

        function $(t, n) {
            return t.w(' target="_blank"')
        }

        function U(t, n) {
            return t.w(' rel="nofollow"')
        }

        function V(t, n) {
            return t.w(' data-attrcat="').f(n.getPath(!0, []), n, "h").w('"')
        }

        function X(t, n) {
            return t.f(n.getPath(!0, []), n, "h", ["s"])
        }

        function A(t, n) {
            return t.f(n.getPath(!0, []), n, "h", ["s"]).w("&nbsp;»")
        }

        function N(t, n) {
            return t.w('\n<div class="Pos(a) Pb(0) Pstart(8px) Pb(16px)--miw1200 Pstart(22px)--miw1200 B(0) End(0) C(#fff) W(2/5) Z(2) Bxz(bb) ntk-footer">\n            ').p("td-applet-stream-atomic:item/ntk_actions", n, {}).w("\n</div>")
        }

        function R(t, n) {
            return t.w('<li class="W(1/5) Whs(n) Va(t) D(ib) Lts(0) Bdend(none) Pos(r)').x(n.get(["beacon"], !1), n, {
                block: q
            }, {}).w('"').x(n.get(["beacon"], !1), n, {
                block: Y
            }, {}).s(n.get(["imprTrackingUrl"], !1), n, {
                block: G
            }, {}).x(n.get(["imprTrackingUrls"], !1), n, {
                block: H
            }, {}).w(' ><a class="Pos(r) D(b) Mend(9px) C($link) C($m_blue):h C($m_blue):f O(n):f Op(0.9):h Op(0.9):f Td(n) W(a) ntk-footer-link js-stream-content-link js-stream-item-title js-content-title').x(n.get(["viewer_eligible"], !1), n, {
                block: J
            }, {}).w('" data-uuid="').f(n.getPath(!0, ["uuid"]), n, "h").w('"').x(n.getPath(!0, ["rdSigLink"]), n, {
                "else": K,
                block: Q
            }, {}).x(n.get(["ad_feedback_beacon"], !1), n, {
                "else": tt,
                block: kt
            }, {}).x(n.getPath(!0, ["tab"]), n, {
                block: $t
            }, {}).x(n.get(["off_network"], !1), n, {
                block: Ut
            }, {}).s(n.get(["attrCat"], !1), n, {
                block: Vt
            }, {}).w(" >\n                            ").h("img", n, {}, {
                src: Xt,
                "class": "W(100%) Mih(56px) Mih(73px)--miw1200 rounded-img",
                defer: At,
                title: Nt
            }).w('\n<h3 class="M(0) Mt(4px) Fz(12px) LineClamp(2,2.6em) LineClamp(3,4em)--md1100 js-stream-content-link:f_Td(u) T(70%) js-stream-content-link:f_Td(n)! Start(2px) Td(u):h">').f(n.get(["title"], !1), n, "h", ["s"]).w("</h3>\n                    </a>").x(n.get(["ad_feedback_beacon"], !1), n, {
                block: Rt
            }, {}).w("</li>")
        }

        function q(t, n) {
            return t.w(" js-stream-ad-noview")
        }

        function Y(t, n) {
            return t.w(' data-beacon="').f(n.get(["beacon"], !1), n, "h").w('"')
        }

        function G(t, n) {
            return t.w(' data-impr-beacon="').f(n.getPath(!0, []), n, "h").w('"')
        }

        function H(t, n) {
            return t.w(' data-thirdparty-beacons="').f(n.get(["imprTrackingUrls"], !1), n, "h", ["js"]).w('"')
        }

        function J(t, n) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function K(t, n) {
            return t.w(' href="').f(n.getPath(!0, ["link"]), n, "h").w('"')
        }

        function Q(t, n) {
            return t.w(' href="').f(n.getPath(!0, ["rdSigLink"]), n, "h").w('" data-orig-link="').f(n.getPath(!0, ["link"]), n, "h").w('"')
        }

        function tt(t, n) {
            return t.x(n.getPath(!0, ["mab_test"]), n, {
                "else": nt,
                block: ct
            }, {})
        }

        function nt(t, n) {
            return t.w(" ").h("rapid_data_attr", n, {}, {
                "rapid-base": n.get(["i13n"], !1),
                slk: et,
                subsec: "needtoknow",
                elm: "rhdln",
                elmt: "ct",
                r: rt,
                ccode: ot,
                t4: "rel",
                cposy: st,
                pos: dt,
                g: it,
                aid: at,
                expb: ut
            })
        }

        function et(t, n) {
            return t.f(n.get(["title"], !1), n, "h", ["u", "s"])
        }

        function rt(t, n) {
            return t.f(n.get(["reason"], !1), n, "h")
        }

        function ot(t, n) {
            return t.f(n.get(["ccode"], !1), n, "h")
        }

        function st(t, n) {
            return t.f(n.getPath(!0, ["cposy"]), n, "h")
        }

        function dt(t, n) {
            return t.f(n.getPath(!0, ["pos"]), n, "h")
        }

        function it(t, n) {
            return t.f(n.getPath(!0, ["uuid"]), n, "h")
        }

        function at(t, n) {
            return t.f(n.getPath(!0, ["aid"]), n, "h")
        }

        function ut(t, n) {
            return t.f(n.getPath(!0, ["expb"]), n, "h")
        }

        function ct(t, n) {
            return t.w(" ").h("rapid_data_attr", n, {}, {
                "rapid-base": n.get(["i13n"], !1),
                slk: lt,
                subsec: "needtoknow",
                elm: "rhdln",
                elmt: "ct",
                r: ft,
                ccode: _t,
                t4: "rel",
                cposy: ht,
                pos: pt,
                g: gt,
                aid: mt,
                expb: bt,
                mab_test: wt
            })
        }

        function lt(t, n) {
            return t.f(n.get(["title"], !1), n, "h", ["u", "s"])
        }

        function ft(t, n) {
            return t.f(n.get(["reason"], !1), n, "h")
        }

        function _t(t, n) {
            return t.f(n.get(["ccode"], !1), n, "h")
        }

        function ht(t, n) {
            return t.f(n.getPath(!0, ["cposy"]), n, "h")
        }

        function pt(t, n) {
            return t.f(n.getPath(!0, ["pos"]), n, "h")
        }

        function gt(t, n) {
            return t.f(n.getPath(!0, ["uuid"]), n, "h")
        }

        function mt(t, n) {
            return t.f(n.getPath(!0, ["aid"]), n, "h")
        }

        function bt(t, n) {
            return t.f(n.getPath(!0, ["expb"]), n, "h")
        }

        function wt(t, n) {
            return t.f(n.getPath(!0, ["mab_test"]), n, "h")
        }

        function kt(t, n) {
            return t.x(n.getPath(!0, ["mab_test"]), n, {
                "else": Bt,
                block: Lt
            }, {})
        }

        function Bt(t, n) {
            return t.w(" ").h("rapid_data_attr", n, {}, {
                "rapid-base": n.get(["i13n"], !1),
                slk: yt,
                subsec: "needtoknow",
                elm: "rhdln",
                elmt: "ad",
                ad: "1",
                r: xt,
                ccode: Pt,
                t4: "rel",
                cposy: vt,
                pos: Tt,
                g: Ct,
                aid: Mt,
                expb: jt
            })
        }

        function yt(t, n) {
            return t.f(n.get(["title"], !1), n, "h", ["u", "s"])
        }

        function xt(t, n) {
            return t.f(n.get(["reason"], !1), n, "h")
        }

        function Pt(t, n) {
            return t.f(n.get(["ccode"], !1), n, "h")
        }

        function vt(t, n) {
            return t.f(n.getPath(!0, ["cposy"]), n, "h")
        }

        function Tt(t, n) {
            return t.f(n.getPath(!0, ["pos"]), n, "h")
        }

        function Ct(t, n) {
            return t.f(n.getPath(!0, ["uuid"]), n, "h")
        }

        function Mt(t, n) {
            return t.f(n.getPath(!0, ["aid"]), n, "h")
        }

        function jt(t, n) {
            return t.f(n.getPath(!0, ["expb"]), n, "h")
        }

        function Lt(t, n) {
            return t.w(" ").h("rapid_data_attr", n, {}, {
                "rapid-base": n.get(["i13n"], !1),
                slk: Ot,
                subsec: "needtoknow",
                elm: "rhdln",
                elmt: "ad",
                ad: "1",
                r: zt,
                ccode: Et,
                t4: "rel",
                cposy: St,
                pos: Wt,
                g: Ft,
                aid: Zt,
                expb: Dt,
                mab_test: It
            })
        }

        function Ot(t, n) {
            return t.f(n.get(["title"], !1), n, "h", ["u", "s"])
        }

        function zt(t, n) {
            return t.f(n.get(["reason"], !1), n, "h")
        }

        function Et(t, n) {
            return t.f(n.get(["ccode"], !1), n, "h")
        }

        function St(t, n) {
            return t.f(n.getPath(!0, ["cposy"]), n, "h")
        }

        function Wt(t, n) {
            return t.f(n.getPath(!0, ["pos"]), n, "h")
        }

        function Ft(t, n) {
            return t.f(n.getPath(!0, ["uuid"]), n, "h")
        }

        function Zt(t, n) {
            return t.f(n.getPath(!0, ["aid"]), n, "h")
        }

        function Dt(t, n) {
            return t.f(n.getPath(!0, ["expb"]), n, "h")
        }

        function It(t, n) {
            return t.f(n.getPath(!0, ["mab_test"]), n, "h")
        }

        function $t(t, n) {
            return t.w(' target="_blank"')
        }

        function Ut(t, n) {
            return t.w(' rel="nofollow"')
        }

        function Vt(t, n) {
            return t.w(' data-attrcat="').f(n.getPath(!0, []), n, "h").w('"')
        }

        function Xt(t, n) {
            return t.f(n.getPath(!1, ["roundupThumb", "url"]), n, "h")
        }

        function At(t, n) {
            return t.f(n.get(["defer"], !1), n, "h")
        }

        function Nt(t, n) {
            return t.f(n.get(["ntkImageAttribution"], !1), n, "h")
        }

        function Rt(t, n) {
            return t.w('<div class="Pstart(4px) Pos(a) T(0) End(0) Va(m) Bgc(#fff) Mend(9px) Fw(b)">\n                            <a class="Tt(c) Td(n) C($sponsored)" href="').f(n.getPath(!1, ["config", "ads", "sponsored_url"]), n, "h").w('" target="_blank" ').h("rapid_data_attr", n, {}, {
                "rapid-base": n.get(["i13n"], !1),
                elm: "itm",
                elmt: "sp",
                r: qt,
                ccode: Yt
            }).w(">").h("i18n_string", n, {}, {
                _key: "SPONSORED"
            }).w('</a>\n                            <a class="D(ib) Va(m) Td(n) adlink C($sponsored) Pstart(4px)" href="').f(n.getPath(!1, ["config", "ads", "adchoices_url"]), n, "h").w('" target="_blank" ').h("rapid_data_attr", n, {}, {
                "rapid-base": n.get(["i13n"], !1),
                elm: "itm",
                elmt: "info",
                r: Gt,
                ccode: Ht
            }).w('><i class="Icon-Fp2 IconMoneyball Fz(13px) D(ib)"></i></a>\n                        </div>')
        }

        function qt(t, n) {
            return t.f(n.get(["reason"], !1), n, "h")
        }

        function Yt(t, n) {
            return t.f(n.get(["ccode"], !1), n, "h")
        }

        function Gt(t, n) {
            return t.f(n.get(["reason"], !1), n, "h")
        }

        function Ht(t, n) {
            return t.f(n.get(["ccode"], !1), n, "h")
        }
        return dust.register("td-applet-stream-atomic-templates-item-ntk_widescreen_footer5", n), n.__dustBody = !0, e.__dustBody = !0, r.__dustBody = !0, o.__dustBody = !0, s.__dustBody = !0, d.__dustBody = !0, i.__dustBody = !0, a.__dustBody = !0, u.__dustBody = !0, c.__dustBody = !0, l.__dustBody = !0, f.__dustBody = !0, _.__dustBody = !0, h.__dustBody = !0, p.__dustBody = !0, g.__dustBody = !0, m.__dustBody = !0, b.__dustBody = !0, w.__dustBody = !0, k.__dustBody = !0, B.__dustBody = !0, y.__dustBody = !0, x.__dustBody = !0, P.__dustBody = !0, v.__dustBody = !0, T.__dustBody = !0, C.__dustBody = !0, M.__dustBody = !0, j.__dustBody = !0, L.__dustBody = !0, O.__dustBody = !0, z.__dustBody = !0, E.__dustBody = !0, S.__dustBody = !0, W.__dustBody = !0, F.__dustBody = !0, Z.__dustBody = !0, D.__dustBody = !0, I.__dustBody = !0, $.__dustBody = !0, U.__dustBody = !0, V.__dustBody = !0, X.__dustBody = !0, A.__dustBody = !0, N.__dustBody = !0, R.__dustBody = !0, q.__dustBody = !0, Y.__dustBody = !0, G.__dustBody = !0, H.__dustBody = !0, J.__dustBody = !0, K.__dustBody = !0, Q.__dustBody = !0, tt.__dustBody = !0, nt.__dustBody = !0, et.__dustBody = !0, rt.__dustBody = !0, ot.__dustBody = !0, st.__dustBody = !0, dt.__dustBody = !0, it.__dustBody = !0, at.__dustBody = !0, ut.__dustBody = !0, ct.__dustBody = !0, lt.__dustBody = !0, ft.__dustBody = !0, _t.__dustBody = !0, ht.__dustBody = !0, pt.__dustBody = !0, gt.__dustBody = !0, mt.__dustBody = !0, bt.__dustBody = !0, wt.__dustBody = !0, kt.__dustBody = !0, Bt.__dustBody = !0, yt.__dustBody = !0, xt.__dustBody = !0, Pt.__dustBody = !0, vt.__dustBody = !0, Tt.__dustBody = !0, Ct.__dustBody = !0, Mt.__dustBody = !0, jt.__dustBody = !0, Lt.__dustBody = !0, Ot.__dustBody = !0, zt.__dustBody = !0, Et.__dustBody = !0, St.__dustBody = !0, Wt.__dustBody = !0, Ft.__dustBody = !0, Zt.__dustBody = !0, Dt.__dustBody = !0, It.__dustBody = !0, $t.__dustBody = !0, Ut.__dustBody = !0, Vt.__dustBody = !0, Xt.__dustBody = !0, At.__dustBody = !0, Nt.__dustBody = !0, Rt.__dustBody = !0, qt.__dustBody = !0, Yt.__dustBody = !0,
            Gt.__dustBody = !0, Ht.__dustBody = !0, n
    }(), dust.cache["td-applet-stream-atomic:item/ntk_widescreen_footer5.dust"] = dust.cache["td-applet-stream-atomic:item/ntk_widescreen_footer5"] = dust.cache[n], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/ntk_widescreen_footer5"] = function(t, e) {
        t = t || {}, dust.render(n, t, e)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-item-play_icon", "td-applet-stream-atomic-templates-item-ntk_actions"]
});
YUI.add("td-applet-stream-atomic-templates-item-pic_sm", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('<li class="Pos(r) Pt(16px) Bdt($card_border) Pb(16px) Bgc(#ededf1) My(20px) ').f(e.get(["debugClass"], !1), e, "h").w('"').x(e.get(["off_network"], !1), e, {
                block: s
            }, {}).w(' data-temp="pic_sm" data-uuid="').x(e.get(["cauuid"], !1), e, {
                "else": n,
                block: d
            }, {}).w('"').s(e.get(["cauuid"], !1), e, {
                block: a
            }, {}).w(' data-type="').f(e.get(["type"], !1), e, "h").w('"').s(e.get(["clusterId"], !1), e, {
                block: u
            }, {}).x(e.get(["clusterUuids"], !1), e, {
                block: c
            }, {}).s(e.get(["hosted_type"], !1), e, {
                block: i
            }, {}).w('><h1 class="Pstart(20px) Pt(18px) Pb(18px) Fz(16px) Bgc(#fff) C(#6f05f6)">\n        ').h("i18n_string", e, {}, {
                _key: "TRENDING_IN_NEWSROOM"
            }).w(' <i class="C(#6f05f6) Icon-Fp2 IconTrending Fz(16px)"></i>\n    </h1>\n    ').x(e.get(["storyline"], !1), e, {
                block: r
            }, {}).w("\n</li>\n")
        }

        function s(t, e) {
            return t.w(' data-offnet="1"')
        }

        function n(t, e) {
            return t.f(e.get(["id"], !1), e, "h")
        }

        function d(t, e) {
            return t.f(e.get(["cauuid"], !1), e, "h")
        }

        function a(t, e) {
            return t.w(' data-cauuid="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function u(t, e) {
            return t.w(' data-cluster="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function c(t, e) {
            return t.w(' data-cluster-uuids="').f(e.get(["clusterUuids"], !1), e, "h").w('"')
        }

        function i(t, e) {
            return t.w(' data-hosted="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function r(t, e) {
            return t.w('\n<ol class="Pstart(20px) Pend(20px) Pb(1px) Bgc(#fff) List(n) Bdb($card_border) pic-sm-list">\n        <li class="Pos(r) js-stream-content Mb(22px) pic-sm-list-item Bdbw(1px) Bdc(#d8dae3) Bdbs(s)">\n            <a ').x(e.get(["rdSigLink"], !1), e, {
                "else": o,
                block: _
            }, {}).w(' class="Pos(r) D(b) C(#fff)! Td(n) Td(n):f js-stream-content-link js-stream-item-title W(100%) ').x(e.get(["viewer_eligible"], !1), e, {
                block: p
            }, {}).w('" ').x(e.get(["tab"], !1), e, {
                block: m
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                slk: w,
                subsec: "needtoknow",
                elm: "img",
                elmt: "ct",
                r: g,
                ccode: h
            }).x(e.get(["off_network"], !1), e, {
                block: b
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: k
            }, {}).w(">").x(e.getPath(!1, ["image", "url"]), e, {
                block: B
            }, {}).w('\n<h3 class="Pt(8px) Mb(8px) Fw(b) Fz(22px) M(0) LineClamp(3,3.8em) Bfv(h) C(#000) js-stream-item-title">\n                ').f(e.get(["title"], !1), e, "h", ["s"]).w('</h3>\n                \n            </a>\n            <div class="Pb(11px) Mend(-13px)">\n                ').x(e.get(["actionsEnabled"], !1), e, {
                block: y
            }, {}).w("\n</div>\n        </li>\n        ").s(e.get(["storyline"], !1), e, {
                block: x
            }, {}).w("\n</ol>\n    ")
        }

        function o(t, e) {
            return t.x(e.get(["previewLink"], !1), e, {
                "else": l,
                block: f
            }, {})
        }

        function l(t, e) {
            return t.w('href="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function f(t, e) {
            return t.w('href="').f(e.get(["previewLink"], !1), e, "h").w('" data-share-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function _(t, e) {
            return t.w('href="').f(e.get(["rdSigLink"], !1), e, "h").w('" data-orig-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function p(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function m(t, e) {
            return t.w('target="_blank"')
        }

        function w(t, e) {
            return t.f(e.get(["title"], !1), e, "h", ["s"])
        }

        function g(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function h(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function b(t, e) {
            return t.w('rel="nofollow"')
        }

        function k(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function B(t, e) {
            return t.w('<div class="picImage streamImage Pos(r)"><img src="').f(e.getPath(!1, ["image", "url"]), e, "h").w('" class="W(100%) Mih(200px) Bdrs(2px)" alt=""></div>')
        }

        function y(t, e) {
            return t.p("td-applet-stream-atomic:item/ntk_actions_sm", e, {})
        }

        function x(t, e) {
            return t.w('\n<li class="js-stream-content Pos(r) Bxz(bb) Mb(22px) js-stream-cluster pic-sm-list-item" data-temp="default_sm" data-uuid="').x(e.get(["cauuid"], !1), e, {
                "else": P,
                block: I
            }, {}).w('"').s(e.get(["cauuid"], !1), e, {
                block: v
            }, {}).w(' data-type="').f(e.get(["type"], !1), e, "h").w('"').s(e.get(["clusterId"], !1), e, {
                block: M
            }, {}).x(e.get(["clusterUuids"], !1), e, {
                block: j
            }, {}).s(e.get(["hosted_type"], !1), e, {
                block: C
            }, {}).w(">\n            ").p("td-applet-stream-atomic:item/default_sm", e, {}).w("\n</li>\n        ")
        }

        function P(t, e) {
            return t.f(e.get(["id"], !1), e, "h")
        }

        function I(t, e) {
            return t.f(e.get(["cauuid"], !1), e, "h")
        }

        function v(t, e) {
            return t.w(' data-cauuid="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function M(t, e) {
            return t.w(' data-cluster="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function j(t, e) {
            return t.w(' data-cluster-uuids="').f(e.get(["clusterUuids"], !1), e, "h").w('"')
        }

        function C(t, e) {
            return t.w(' data-hosted="').f(e.getPath(!0, []), e, "h").w('"')
        }
        return dust.register("td-applet-stream-atomic-templates-item-pic_sm", e), e.__dustBody = !0, s.__dustBody = !0, n.__dustBody = !0, d.__dustBody = !0, a.__dustBody = !0, u.__dustBody = !0, c.__dustBody = !0, i.__dustBody = !0, r.__dustBody = !0, o.__dustBody = !0, l.__dustBody = !0, f.__dustBody = !0, _.__dustBody = !0, p.__dustBody = !0, m.__dustBody = !0, w.__dustBody = !0, g.__dustBody = !0, h.__dustBody = !0, b.__dustBody = !0, k.__dustBody = !0, B.__dustBody = !0, y.__dustBody = !0, x.__dustBody = !0, P.__dustBody = !0, I.__dustBody = !0, v.__dustBody = !0, M.__dustBody = !0, j.__dustBody = !0, C.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/pic_sm.dust"] = dust.cache["td-applet-stream-atomic:item/pic_sm"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/pic_sm"] = function(t, s) {
        t = t || {}, dust.render(e, t, s)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-item-ntk_actions_sm", "td-applet-stream-atomic-templates-item-default_sm"]
});
YUI.add("td-applet-stream-atomic-templates-item-pic_tb", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('<li class="Pos(r) Py(16px) Bdt($card_border) My(20px) Bgc(#ededf1) ').f(e.get(["debugClass"], !1), e, "h").w('"').x(e.get(["off_network"], !1), e, {
                block: n
            }, {}).w(' data-temp="pic_sm" data-uuid="').x(e.get(["cauuid"], !1), e, {
                "else": d,
                block: s
            }, {}).w('"').s(e.get(["cauuid"], !1), e, {
                block: i
            }, {}).w(' data-type="').f(e.get(["type"], !1), e, "h").w('"').s(e.get(["clusterId"], !1), e, {
                block: a
            }, {}).x(e.get(["clusterUuids"], !1), e, {
                block: r
            }, {}).s(e.get(["hosted_type"], !1), e, {
                block: c
            }, {}).w('>\n    <div class="Mt(0) Bdb($card_border) Bgc(#fff) Px(20px) Px(80px)--miw1024 Py(20px)">\n        <h1 class="Mstart(20px) Pt(20px) Pb(5px) Fz(17px) Bgc(#fff) C(#6f05f6)">\n            ').h("i18n_string", e, {}, {
                _key: "TRENDING_IN_NEWSROOM"
            }).w(' <i class="C(#6f05f6) Icon-Fp2 IconTrending Fz(16px) Pos(r) B(-3px)"></i>\n        </h1>\n        <ol>\n            <li class="Pos(r) js-stream-content D(ib) W(1/2) Va(t) pic-sm-list-item"><div class="M(20px)">\n                    <a ').x(e.get(["rdSigLink"], !1), e, {
                "else": u,
                block: f
            }, {}).w(' class="Pos(r) D(b) C(#fff)! Td(n) Td(n):f js-stream-content-link js-stream-item-title W(100%) ').x(e.get(["viewer_eligible"], !1), e, {
                block: _
            }, {}).w('" ').x(e.get(["tab"], !1), e, {
                block: w
            }, {}).h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                slk: p,
                subsec: "needtoknow",
                elm: "img",
                elmt: "ct",
                r: g,
                ccode: h
            }).x(e.get(["off_network"], !1), e, {
                block: b
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: m
            }, {}).w(">").x(e.getPath(!1, ["image", "url"]), e, {
                block: k
            }, {}).w('\n<h3 class="Pt(8px) Mb(8px) Fw(b) Fz(21px) M(0) LineClamp(3,3.8em) Bfv(h) C(#000) js-stream-item-title">\n                        ').f(e.get(["title"], !1), e, "h", ["s"]).w('</h3>\n                        \n                    </a>\n                    <div class="Pb(11px) Mend(-13px)">\n                        ').x(e.get(["actionsEnabled"], !1), e, {
                block: x
            }, {}).w("\n").x(e.get(["publisher"], !1), e, {
                block: B
            }, {}).w("\n</div></div>\n            </li>").s(e.get(["storyline"], !1), e, {
                block: y
            }, {}).w("</ol>\n    </div>\n</li>\n")
        }

        function n(t, e) {
            return t.w(' data-offnet="1"')
        }

        function d(t, e) {
            return t.f(e.get(["id"], !1), e, "h")
        }

        function s(t, e) {
            return t.f(e.get(["cauuid"], !1), e, "h")
        }

        function i(t, e) {
            return t.w(' data-cauuid="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function a(t, e) {
            return t.w(' data-cluster="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function r(t, e) {
            return t.w(' data-cluster-uuids="').f(e.get(["clusterUuids"], !1), e, "h").w('"')
        }

        function c(t, e) {
            return t.w(' data-hosted="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function u(t, e) {
            return t.x(e.get(["previewLink"], !1), e, {
                "else": o,
                block: l
            }, {})
        }

        function o(t, e) {
            return t.w('href="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function l(t, e) {
            return t.w('href="').f(e.get(["previewLink"], !1), e, "h").w('" data-share-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function f(t, e) {
            return t.w('href="').f(e.get(["rdSigLink"], !1), e, "h").w('" data-orig-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function _(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function w(t, e) {
            return t.w('target="_blank"')
        }

        function p(t, e) {
            return t.f(e.get(["title"], !1), e, "h", ["u", "s"])
        }

        function g(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function h(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function b(t, e) {
            return t.w('rel="nofollow"')
        }

        function m(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function k(t, e) {
            return t.w('<div class="picImage streamTbImage Pos(r) Mb(20px)"><img src="').f(e.getPath(!1, ["image", "url"]), e, "h").w('" class="W(100%) H(100%) Mih(200px) Bdrs(2px)" alt=""></div>')
        }

        function x(t, e) {
            return t.w('\n<div class="Fw(500) D(ib) Bdc(#d8dae3) Bdendw(1px) Bdends(s) C(#828c93) Mend(6px) Pend(10px)">').p("td-applet-stream-atomic:item/ntk_actions_tb", e, {}).w("</div>\n                        ")
        }

        function B(t, e) {
            return t.w('\n<span class="C(#828c93) Fz(12px) Lh(1) Va(tb) Fw(400)">').f(e.get(["publisher"], !1), e, "h", ["s"]).w("</span>\n                        ")
        }

        function y(t, e) {
            return t.w('<li class="Pos(r) js-stream-content D(ib) W(1/2) Va(t) pic-sm-list-item"\n             data-temp="default_sm" data-uuid="').x(e.get(["cauuid"], !1), e, {
                "else": P,
                block: v
            }, {}).w('"').s(e.get(["cauuid"], !1), e, {
                block: M
            }, {}).w(' data-type="').f(e.get(["type"], !1), e, "h").w('"').s(e.get(["clusterId"], !1), e, {
                block: C
            }, {}).x(e.get(["clusterUuids"], !1), e, {
                block: F
            }, {}).s(e.get(["hosted_type"], !1), e, {
                block: I
            }, {}).w('><div class="M(20px)">\n                    <a ').x(e.get(["rdSigLink"], !1), e, {
                "else": L,
                block: D
            }, {}).w(' class="Pos(r) D(b) C(#fff)! Td(n) Td(n):f js-stream-content-link js-stream-item-title W(100%) ').x(e.get(["viewer_eligible"], !1), e, {
                block: W
            }, {}).w('" ').x(e.get(["tab"], !1), e, {
                block: z
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                slk: S,
                subsec: "needtoknow",
                elm: "img",
                elmt: "ct",
                r: E,
                ccode: N
            }).x(e.get(["off_network"], !1), e, {
                block: U
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: V
            }, {}).w(">").s(e.getPath(!1, ["images", "default"]), e, {
                block: O
            }, {}).w('\n<h3 class="Pt(8px) Mb(8px) Fw(b) Fz(21px) M(0) LineClamp(3,3.8em) Bfv(h) C(#000) js-stream-item-title">\n                        ').f(e.get(["title"], !1), e, "h", ["s"]).w('</h3>\n                        \n                    </a>\n                    <div class="Pb(11px) Mend(-13px)">\n                        ').x(e.get(["actionsEnabled"], !1), e, {
                block: R
            }, {}).w("\n").x(e.get(["publisher"], !1), e, {
                block: H
            }, {}).w("\n</div></div>\n            </li>")
        }

        function P(t, e) {
            return t.f(e.get(["id"], !1), e, "h")
        }

        function v(t, e) {
            return t.f(e.get(["cauuid"], !1), e, "h")
        }

        function M(t, e) {
            return t.w(' data-cauuid="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function C(t, e) {
            return t.w(' data-cluster="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function F(t, e) {
            return t.w(' data-cluster-uuids="').f(e.get(["clusterUuids"], !1), e, "h").w('"')
        }

        function I(t, e) {
            return t.w(' data-hosted="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function L(t, e) {
            return t.x(e.get(["previewLink"], !1), e, {
                "else": T,
                block: j
            }, {})
        }

        function T(t, e) {
            return t.w('href="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function j(t, e) {
            return t.w('href="').f(e.get(["previewLink"], !1), e, "h").w('" data-share-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function D(t, e) {
            return t.w('href="').f(e.get(["rdSigLink"], !1), e, "h").w('" data-orig-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function W(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function z(t, e) {
            return t.w('target="_blank"')
        }

        function S(t, e) {
            return t.f(e.get(["title"], !1), e, "h", ["u", "s"])
        }

        function E(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function N(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function U(t, e) {
            return t.w('rel="nofollow"')
        }

        function V(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function O(t, e) {
            return t.w('\n<div class="picImage streamTbImage Pos(r) Mb(20px)"><img src="').f(e.get(["url"], !1), e, "h").w('" class="W(100%) H(100%) Mih(200px) Bdrs(2px)" alt=""></div>\n                            \n                        ')
        }

        function R(t, e) {
            return t.w('\n<div class="Fw(500) D(ib) Bdc(#d8dae3) Bdendw(1px) Bdends(s) C(#828c93) Mend(6px) Pend(10px)">').p("td-applet-stream-atomic:item/ntk_actions_tb", e, {}).w("</div>\n                        ")
        }

        function H(t, e) {
            return t.w('\n<span class="C(#828c93) Fz(12px) Lh(1) Va(tb) Fw(400)">').f(e.get(["publisher"], !1), e, "h", ["s"]).w("</span>\n                        ")
        }
        return dust.register("td-applet-stream-atomic-templates-item-pic_tb", e), e.__dustBody = !0, n.__dustBody = !0, d.__dustBody = !0, s.__dustBody = !0, i.__dustBody = !0, a.__dustBody = !0, r.__dustBody = !0, c.__dustBody = !0, u.__dustBody = !0, o.__dustBody = !0, l.__dustBody = !0, f.__dustBody = !0, _.__dustBody = !0, w.__dustBody = !0, p.__dustBody = !0, g.__dustBody = !0, h.__dustBody = !0, b.__dustBody = !0, m.__dustBody = !0, k.__dustBody = !0, x.__dustBody = !0, B.__dustBody = !0, y.__dustBody = !0, P.__dustBody = !0, v.__dustBody = !0, M.__dustBody = !0, C.__dustBody = !0, F.__dustBody = !0, I.__dustBody = !0, L.__dustBody = !0, T.__dustBody = !0, j.__dustBody = !0, D.__dustBody = !0, W.__dustBody = !0, z.__dustBody = !0, S.__dustBody = !0, E.__dustBody = !0, N.__dustBody = !0, U.__dustBody = !0, V.__dustBody = !0, O.__dustBody = !0, R.__dustBody = !0, H.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/pic_tb.dust"] = dust.cache["td-applet-stream-atomic:item/pic_tb"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/pic_tb"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-item-ntk_actions_tb"]
});
YUI.add("td-applet-stream-atomic-templates-item-play_icon", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.x(e.get(["pkg_video_id"], !1), e, {
                block: a
            }, {}).w("\n").h("eq", e, {
                block: c
            }, {
                key: n,
                value: "video"
            }).w("\n").h("eq", e, {
                block: s
            }, {
                key: p,
                value: "slideshow"
            }).w("\n")
        }

        function a(t, e) {
            return t.w('\n<div class="Pos(a) T(50%) Start(50%) Mstart(-33px) Mt(-33px) C(#fff) W(66px) H(66px) Ta(c) Va(m) Bgi($orb) Bgz(66px)">\n    <i class="Fz(27px) Lh(2.4) C(#fff) Mstart(6px) Icon-Fp2 IconCorePlay"></i>\n</div>\n')
        }

        function c(t, e) {
            return t.w('\n<div class="Pos(a) T(50%) Start(50%) Mstart(-33px) Mt(-33px) C(#fff) W(66px) H(66px) Ta(c) Va(m) Bgi($orb) Bgz(66px)">\n    <i class="Fz(27px) Lh(2.4) C(#fff) Mstart(6px) Icon-Fp2 IconCorePlay"></i>\n</div>\n')
        }

        function n(t, e) {
            return t.f(e.get(["type"], !1), e, "h")
        }

        function s(t, e) {
            return t.w('\n<div class="Pos(a) T(50%) Start(50%) Mstart(-33px) Mt(-33px) C(#fff) W(66px) H(66px) Ta(c) Va(m) Bgi($orb) Bgz(66px)">\n    <i class="Fz(27px) Lh(2.4) C(#fff) Mstart(6px) Icon-Fp2 IconCoreGallery"></i>\n</div>\n')
        }

        function p(t, e) {
            return t.f(e.get(["type"], !1), e, "h")
        }
        return dust.register("td-applet-stream-atomic-templates-item-play_icon", e), e.__dustBody = !0, a.__dustBody = !0, c.__dustBody = !0, n.__dustBody = !0, s.__dustBody = !0, p.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/play_icon.dust"] = dust.cache["td-applet-stream-atomic:item/play_icon"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/play_icon"] = function(t, a) {
        t = t || {}, dust.render(e, t, a)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-item-play_icon_sm", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.h("eq", e, {
                block: a
            }, {
                key: c,
                value: "video"
            }).w("\n").h("eq", e, {
                block: s
            }, {
                key: n,
                value: "slideshow"
            }).w("\n")
        }

        function a(t, e) {
            return t.w('\n<i class="Icon-Fp2 IconScreen action-icons-sm Pos(a) T(30px) Start(30px) T(20px)--maw370 Start(20px)--maw370 W(40px) H(40px) Ta(c) Va(m) C(#fff) Bdrs(46.5%) Fz(18px) Lh(2.3)"></i>\n')
        }

        function c(t, e) {
            return t.f(e.get(["type"], !1), e, "h")
        }

        function s(t, e) {
            return t.w('\n<i class="Icon-Fp2 IconCoreGallery action-icons-sm Pos(a) T(30px) Start(30px) T(20px)--maw370 Start(20px)--maw370 W(40px) H(40px) Ta(c) Va(m) C(#fff) Bdrs(46.5%) Fz(18px) Lh(2.3)"></i>\n')
        }

        function n(t, e) {
            return t.f(e.get(["type"], !1), e, "h")
        }
        return dust.register("td-applet-stream-atomic-templates-item-play_icon_sm", e), e.__dustBody = !0, a.__dustBody = !0, c.__dustBody = !0, s.__dustBody = !0, n.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/play_icon_sm.dust"] = dust.cache["td-applet-stream-atomic:item/play_icon_sm"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/play_icon_sm"] = function(t, a) {
        t = t || {}, dust.render(e, t, a)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-item-play_icon_tb", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.h("eq", e, {
                block: n
            }, {
                key: i,
                value: "video"
            }).w("\n").h("eq", e, {
                block: o
            }, {
                key: d,
                value: "slideshow"
            })
        }

        function n(t, e) {
            return t.w('\n<i class="Icon-Fp2 IconScreen action-icons-sm Pos(a) T(37px) T(57px)--miw1024 ').x(e.getPath(!1, ["config", "ui", "rightAlign"]), e, {
                "else": c,
                block: a
            }, {}).w(' W(66px) H(66px) Ta(c) Va(m) C(#fff) Bdrs(46.5%) Fz(27px) Lh(2.4)"></i>\n')
        }

        function c(t, e) {
            return t.w(" Start(92px) Start(109px)--miw1024")
        }

        function a(t, e) {
            return t.w(" End(92px) End(109px)--miw1024")
        }

        function i(t, e) {
            return t.f(e.get(["type"], !1), e, "h")
        }

        function o(t, e) {
            return t.w('\n<i class="Icon-Fp2 IconCoreGallery action-icons-sm Pos(a) T(37px) T(57px)--miw1024 ').x(e.getPath(!1, ["config", "ui", "rightAlign"]), e, {
                "else": s,
                block: u
            }, {}).w(' W(66px) H(66px) Ta(c) Va(m) C(#fff) Bdrs(46.5%) Fz(27px) Lh(2.4)"></i>\n')
        }

        function s(t, e) {
            return t.w(" Start(92px) Start(109px)--miw1024")
        }

        function u(t, e) {
            return t.w(" End(92px) End(109px)--miw1024")
        }

        function d(t, e) {
            return t.f(e.get(["type"], !1), e, "h")
        }
        return dust.register("td-applet-stream-atomic-templates-item-play_icon_tb", e), e.__dustBody = !0, n.__dustBody = !0, c.__dustBody = !0, a.__dustBody = !0, i.__dustBody = !0, o.__dustBody = !0, s.__dustBody = !0, u.__dustBody = !0, d.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/play_icon_tb.dust"] = dust.cache["td-applet-stream-atomic:item/play_icon_tb"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/play_icon_tb"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-item-promo_sm", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('<li class="js-stream-promo-ad item ').x(e.get(["beacon"], !1), e, {
                block: n
            }, {}).w(" ").x(e.getPath(!1, ["config", "ads", "adblock"]), e, {
                block: o
            }, {}).w('js-stream-ad"').x(e.get(["beacon"], !1), e, {
                block: a
            }, {}).s(e.get(["imprTrackingUrl"], !1), e, {
                block: d
            }, {}).x(e.get(["imprTrackingUrls"], !1), e, {
                block: r
            }, {}).x(e.getPath(!1, ["config", "ads", "feedback"]), e, {
                block: s
            }, {}).w(' data-uuid="').f(e.get(["id"], !1), e, "h").w('" ').x(e.get(["asyncBeacon"], !1), e, {
                block: c
            }, {}).w('>\n<div class="Pos(r) ').h("eq", e, {
                block: i
            }, {
                key: l,
                value: "fullWidthPromo"
            }).w(' ">\n    <a href="').f(e.get(["link"], !1), e, "h").w('" class="').x(e.getPath(!1, ["config", "ads", "promoAds", "rapidnofollow"]), e, {
                block: _
            }, {}).w(" ").x(e.get(["asyncBeacon"], !1), e, {
                block: f
            }, {}).w(" streamImage Pos(r) D(b) Td(n) Td(n):f ").x(e.get(["image"], !1), e, {
                block: p
            }, {}).x(e.get(["isVideo"], !1), e, {
                block: g
            }, {}).w('" ').x(e.get(["openInNewTab"], !1), e, {
                block: h
            }, {}).h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "img",
                elmt: "ct",
                ccode: y
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: b
            }, {}).w(">\n        ").h("ne", e, {
                "else": B,
                block: F
            }, {
                key: S,
                value: "fullWidthPromo"
            }).w('\n<h3 class="M(0) Mb(4px) Mt(-2px) Fw(b) Fz(16px) Fz(15px)--maw370 Lh(1.3) LineClamp(3,4em) LineClamp(2,2.7em)--maw370 C(#000) ').x(e.getPath(!1, ["config", "ads", "promoAds", "enableFeedback"]), e, {
                block: R
            }, {}).w('">').f(e.get(["title"], !1), e, "h", ["s"]).w("</h3>\n        ").x(e.get(["publisher"], !1), e, {
                block: C
            }, {}).w("\n<div>\n            ").x(e.get(["ratings"], !1), e, {
                block: V
            }, {}).w("\n").x(e.get(["appReviews"], !1), e, {
                block: H
            }, {}).w("\n").x(e.get(["cpi"], !1), e, {
                block: K
            }, {}).w("\n</div>\n    </a>\n    ").x(e.getPath(!1, ["config", "ads", "promoAds", "enableFeedback"]), e, {
                block: ot
            }, {}).w("\n</div>\n</li>\n")
        }

        function n(t, e) {
            return t.w("js-stream-ad-noview ")
        }

        function o(t, e) {
            return t.w("ysab ")
        }

        function a(t, e) {
            return t.w(' data-beacon="').f(e.get(["beacon"], !1), e, "h").w('"')
        }

        function d(t, e) {
            return t.w(' data-impr-beacon="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function r(t, e) {
            return t.w(' data-thirdparty-beacons="').f(e.get(["imprTrackingUrls"], !1), e, "h", ["js"]).w('"')
        }

        function s(t, e) {
            return t.s(e.get(["ad_feedback_beacon"], !1), e, {
                block: u
            }, {})
        }

        function u(t, e) {
            return t.w(' data-ad-feedback-beacon="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function c(t, e) {
            return t.w('data-asyncBeacon="').f(e.get(["asyncBeacon"], !1), e, "h").w('"')
        }

        function i(t, e) {
            return t.w(" js-stream-widePromo-container ")
        }

        function l(t, e) {
            return t.f(e.get(["templateType"], !1), e, "h")
        }

        function _(t, e) {
            return t.w("rapidnofollow")
        }

        function f(t, e) {
            return t.w("js-promo-link")
        }

        function p(t, e) {
            return t.h("ne", e, {
                block: w
            }, {
                key: m,
                value: "fullWidthPromo"
            }).w("Mih(100px) Mih(80px)--maw370")
        }

        function w(t, e) {
            return t.w("Pstart(120px) Pstart(100px)--maw370 ")
        }

        function m(t, e) {
            return t.f(e.get(["templateType"], !1), e, "h")
        }

        function g(t, e) {
            return t.w("js-video-target js-video-image")
        }

        function h(t, e) {
            return t.w('target="_blank"')
        }

        function y(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function b(t, e) {
            return t.w('rel="nofollow"')
        }

        function B(t, e) {
            return t.w("\n").h("img", e, {}, {
                src: k,
                "class": "W(100%) Mb(8px) Bdrs(2px)",
                defer: x,
                alt: P
            }).w("\n")
        }

        function k(t, e) {
            return t.f(e.getPath(!1, ["hqimage", "url"]), e, "h")
        }

        function x(t, e) {
            return t.f(e.get(["defer"], !1), e, "h")
        }

        function P(t, e) {
            return t.f(e.get(["title"], !1), e, "h")
        }

        function F(t, e) {
            return t.w("\n").s(e.get(["image"], !1), e, {
                block: I
            }, {}).w("\n")
        }

        function I(t, e) {
            return t.h("img", e, {}, {
                src: T,
                width: v,
                height: A,
                "class": "Pos(a) Start(0) T(0) Mt(2px) Bdrs(2px) W(80px)--maw370 H(80px)--maw370",
                defer: M
            })
        }

        function T(t, e) {
            return t.f(e.get(["url"], !1), e, "h")
        }

        function v(t, e) {
            return t.f(e.getPath(!1, ["config", "ui", "thumbnail_size"]), e, "h")
        }

        function A(t, e) {
            return t.f(e.getPath(!1, ["config", "ui", "thumbnail_size"]), e, "h")
        }

        function M(t, e) {
            return t.f(e.get(["defer"], !1), e, "h")
        }

        function S(t, e) {
            return t.f(e.get(["templateType"], !1), e, "h")
        }

        function R(t, e) {
            return t.w(" Mend(20px) ")
        }

        function C(t, e) {
            return t.w('<p class="Fz(12px) C(#959595) Ell">').f(e.get(["publisher"], !1), e, "h", ["s"]).w("</p>")
        }

        function V(t, e) {
            return t.w('\n<div class="C(#ffc208) D(ib) Mt(15px) Fz(12px)" aria-label="').x(e.getPath(!1, ["config", "ads", "promoAds", "starRating"]), e, {
                "else": q,
                block: z
            }, {}).w('">\n                    ').s(e.get(["ratings"], !1), e, {
                "else": j,
                block: O
            }, {}).w("\n</div>\n            ")
        }

        function q(t, e) {
            return t.w(" ").h("i18n_string", e, {}, {
                _key: "PROMO_ARIA_NO_RATING"
            }).w(" ")
        }

        function z(t, e) {
            return t.w(" ").h("i18n_string", e, {}, {
                _key: "PROMO_ARIA_STAR_RATING"
            }).w(" ")
        }

        function j(t, e) {
            return t.w('<i class="Icon-Fp2 IconStarFilled Va(t)"></i><i class="Icon-Fp2 IconStarFilled Va(t)"></i><i class="Icon-Fp2 IconStarFilled Va(t)"></i><i class="Icon-Fp2 IconStarFilled Va(t)"></i><i class="Icon-Fp2 IconStarFilled Va(t)"></i>')
        }

        function O(t, e) {
            return t.w("\n").h("eq", e, {
                block: W
            }, {
                key: D,
                value: "1"
            }).w("\n").h("eq", e, {
                block: N
            }, {
                key: E,
                value: "0"
            }).w("\n").h("eq", e, {
                block: U
            }, {
                key: G,
                value: "0.5"
            }).w("\n")
        }

        function W(t, e) {
            return t.w('<i class="Icon-Fp2 IconStarFilled Va(t)"></i>')
        }

        function D(t, e) {
            return t.f(e.get(["rating"], !1), e, "h")
        }

        function N(t, e) {
            return t.w('<i class="Icon-Fp2 IconStarFilled Va(t) C(#fcf8e3)"></i>')
        }

        function E(t, e) {
            return t.f(e.get(["rating"], !1), e, "h")
        }

        function U(t, e) {
            return t.w('\n<span class="Pos(r) D(ib) H(12px)">\n                                <i class="Icon-Fp2 IconStarFilled Pos(a) W(6px) Ov(h)"></i>\n                            </span>\n                        ')
        }

        function G(t, e) {
            return t.f(e.get(["rating"], !1), e, "h")
        }

        function H(t, e) {
            return t.w('\n<span class="C(#959595) Fz(xs) Mt(5px) Mstart(10px) D(ib) ').h("eq", e, {
                block: L
            }, {
                key: J,
                value: "defaultTemplate"
            }).w('">(').f(e.get(["appReviews"], !1), e, "h").w(")</span>\n            ")
        }

        function L(t, e) {
            return t.x(e.getPath(!1, ["config", "ads", "promoAds", "enableCtaAppStoreDesign"]), e, {
                block: Y
            }, {})
        }

        function Y(t, e) {
            return t.w("W(0px)--maw370 Ov(h)--maw370 ")
        }

        function J(t, e) {
            return t.f(e.get(["templateType"], !1), e, "h")
        }

        function K(t, e) {
            return t.w('\n<span class="D(b) Va(t) Px(6px)--maw370 Fl(end) Bdrs(2px) Px(8px) Py(6px) Fz(13px) ').h("eq", e, {
                "else": Q,
                block: X
            }, {
                key: Z,
                value: "ios"
            }).h("eq", e, {
                block: $
            }, {
                key: tt,
                value: "defaultTemplate"
            }).w('">\n                    ').x(e.getPath(!1, ["config", "ads", "promoAds", "callToAction"]), e, {
                "else": et,
                block: nt
            }, {}).w("\n</span>\n            ")
        }

        function Q(t, e) {
            return t.w("C(#fff) Bgc(#009a57) ")
        }

        function X(t, e) {
            return t.w("Bdc(#188fff) C(#188fff) Bdw(2px) Bds(s) ")
        }

        function Z(t, e) {
            return t.f(e.getPath(!1, ["config", "ads", "promoAds", "ua"]), e, "h")
        }

        function $(t, e) {
            return t.w("Fz(12px)--maw370")
        }

        function tt(t, e) {
            return t.f(e.get(["templateType"], !1), e, "h")
        }

        function et(t, e) {
            return t.w("\n").h("i18n_string", e, {}, {
                _key: "GET_THE_APP"
            }).w("\n")
        }

        function nt(t, e) {
            return t.w("\n").f(e.getPath(!1, ["config", "ads", "promoAds", "callToAction"]), e, "h").w("\n")
        }

        function ot(t, e) {
            return t.w("\n").p("td-applet-stream-atomic:item/ad_dislike", e, {}).w("\n")
        }
        return dust.register("td-applet-stream-atomic-templates-item-promo_sm", e), e.__dustBody = !0, n.__dustBody = !0, o.__dustBody = !0, a.__dustBody = !0, d.__dustBody = !0, r.__dustBody = !0, s.__dustBody = !0, u.__dustBody = !0, c.__dustBody = !0, i.__dustBody = !0, l.__dustBody = !0, _.__dustBody = !0, f.__dustBody = !0, p.__dustBody = !0, w.__dustBody = !0, m.__dustBody = !0, g.__dustBody = !0, h.__dustBody = !0, y.__dustBody = !0, b.__dustBody = !0, B.__dustBody = !0, k.__dustBody = !0, x.__dustBody = !0, P.__dustBody = !0, F.__dustBody = !0, I.__dustBody = !0, T.__dustBody = !0, v.__dustBody = !0, A.__dustBody = !0, M.__dustBody = !0, S.__dustBody = !0, R.__dustBody = !0, C.__dustBody = !0, V.__dustBody = !0, q.__dustBody = !0, z.__dustBody = !0, j.__dustBody = !0, O.__dustBody = !0, W.__dustBody = !0, D.__dustBody = !0, N.__dustBody = !0, E.__dustBody = !0, U.__dustBody = !0, G.__dustBody = !0, H.__dustBody = !0, L.__dustBody = !0, Y.__dustBody = !0, J.__dustBody = !0, K.__dustBody = !0, Q.__dustBody = !0, X.__dustBody = !0, Z.__dustBody = !0, $.__dustBody = !0, tt.__dustBody = !0, et.__dustBody = !0, nt.__dustBody = !0, ot.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/promo_sm.dust"] = dust.cache["td-applet-stream-atomic:item/promo_sm"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/promo_sm"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-item-ad_dislike"]
});
YUI.add("td-applet-stream-atomic-templates-item-promo_trending_sm", function(t, n) {
    dust.cache = dust.cache || {}, dust.cache[n] = function(t) {
        function n(t, n) {
            return t.w('<li class="js-stream-promo-ad item ').x(n.get(["beacon"], !1), n, {
                block: e
            }, {}).w(" ").x(n.getPath(!1, ["config", "ads", "adblock"]), n, {
                block: o
            }, {}).w('js-stream-ad"').x(n.get(["beacon"], !1), n, {
                block: s
            }, {}).s(n.get(["imprTrackingUrl"], !1), n, {
                block: a
            }, {}).x(n.get(["imprTrackingUrls"], !1), n, {
                block: d
            }, {}).x(n.getPath(!1, ["config", "ads", "feedback"]), n, {
                block: r
            }, {}).w(' data-uuid="').f(n.get(["id"], !1), n, "h").w('" ').x(n.get(["asyncBeacon"], !1), n, {
                block: u
            }, {}).w('>\n    <a href="').f(n.get(["link"], !1), n, "h").w('" class="').x(n.getPath(!1, ["config", "ads", "promoAds", "rapidnofollow"]), n, {
                block: i
            }, {}).w(" ").x(n.get(["asyncBeacon"], !1), n, {
                block: _
            }, {}).w(" streamImage Pos(r) D(b) Td(n) Td(n):f ").x(n.get(["openInNewTab"], !1), n, {
                block: l
            }, {}).h("rapid_data_attr", n, {}, {
                "rapid-base": n.get(["i13n"], !1),
                elm: "img",
                elmt: "ct",
                ccode: f
            }).w(" ").x(n.get(["off_network"], !1), n, {
                block: p
            }, {}).w(">\n        ").s(n.get(["image"], !1), n, {
                block: g
            }, {}).w('\n<h3 class="M(0) Mb(4px) Mt(-2px) Fw(b) Pstart(50px) Fz(16px) Fz(15px)--maw370 Lh(1.3) Mih(40px) LineClamp(3,4em) LineClamp(2,2.7em)--maw370 C(#000)').x(n.getPath(!1, ["config", "ads", "promoAds", "enableFeedback"]), n, {
                block: b
            }, {}).w('">').f(n.get(["title"], !1), n, "h", ["s"]).w('</h3>\n        <ul class="Mt(15px) Mb(5px) Cf" >\n            ').s(n.get(["trendingTopics"], !1), n, {
                block: x
            }, {}).w("\n</ul>\n        ").x(n.get(["publisher"], !1), n, {
                block: E
            }, {}).w('\n<div class="Ov(a)">\n            ').x(n.get(["ratings"], !1), n, {
                block: N
            }, {}).w("\n").x(n.get(["appReviews"], !1), n, {
                block: Z
            }, {}).w("\n").x(n.get(["cpi"], !1), n, {
                block: $
            }, {}).w("\n</div>\n    </a>\n</li>\n")
        }

        function e(t, n) {
            return t.w("js-stream-ad-noview ")
        }

        function o(t, n) {
            return t.w("ysab ")
        }

        function s(t, n) {
            return t.w(' data-beacon="').f(n.get(["beacon"], !1), n, "h").w('"')
        }

        function a(t, n) {
            return t.w(' data-impr-beacon="').f(n.getPath(!0, []), n, "h").w('"')
        }

        function d(t, n) {
            return t.w(' data-thirdparty-beacons="').f(n.get(["imprTrackingUrls"], !1), n, "h", ["js"]).w('"')
        }

        function r(t, n) {
            return t.s(n.get(["ad_feedback_beacon"], !1), n, {
                block: c
            }, {})
        }

        function c(t, n) {
            return t.w(' data-ad-feedback-beacon="').f(n.getPath(!0, []), n, "h").w('"')
        }

        function u(t, n) {
            return t.w('data-asyncBeacon="').f(n.get(["asyncBeacon"], !1), n, "h").w('"')
        }

        function i(t, n) {
            return t.w("rapidnofollow")
        }

        function _(t, n) {
            return t.w("js-promo-link")
        }

        function l(t, n) {
            return t.w('target="_blank"')
        }

        function f(t, n) {
            return t.f(n.get(["ccode"], !1), n, "h")
        }

        function p(t, n) {
            return t.w('rel="nofollow"')
        }

        function g(t, n) {
            return t.h("img", n, {}, {
                src: w,
                width: m,
                height: y,
                "class": "Pos(a) Start(0) T(0) Mt(2px) Bdrs(2px)",
                defer: B,
                alt: h
            })
        }

        function w(t, n) {
            return t.f(n.get(["url"], !1), n, "h")
        }

        function m(t, n) {
            return t.f(n.getPath(!1, ["config", "ads", "promoAds", "trendingImageSize"]), n, "h")
        }

        function y(t, n) {
            return t.f(n.getPath(!1, ["config", "ads", "promoAds", "trendingImageSize"]), n, "h")
        }

        function B(t, n) {
            return t.f(n.get(["defer"], !1), n, "h")
        }

        function h(t, n) {
            return t.f(n.get(["title"], !1), n, "h", ["s"])
        }

        function b(t, n) {
            return t.w(" Mend(20px)")
        }

        function x(t, n) {
            return t.w('\n<li class="W(1/3) Pos(r) Bdends(s) Bdendw(2px) Bdendc(t) Ta(c) Bdstarts(s) Bdstartw(2px) Bdstartc(t) Bxz(bb) Fl(start)">\n                <div class="Pos(a) Z(2) C(#fff) ').x(n.get(["greyout"], !1), n, {
                "else": k,
                block: P
            }, {}).w('">\n                    <span class="').x(n.get(["greyout"], !1), n, {
                "else": F,
                block: I
            }, {}).w('">\n                        ').x(n.get(["greyout"], !1), n, {
                "else": T,
                block: A
            }, {}).w("\n</span>\n                    ").x(n.get(["greyout"], !1), n, {
                "else": M,
                block: C
            }, {}).w("\n</div>\n                ").x(n.get(["greyout"], !1), n, {
                block: R
            }, {}).w("\n").h("img", n, {}, {
                src: O,
                "class": "W(100%) Mih(80px)",
                defer: S,
                alt: z
            }).w("\n</li>\n            ")
        }

        function k(t, n) {
            return t.w("Bgc($shareModal) B(0) W(100%)")
        }

        function P(t, n) {
            return t.w("H(70%) M(15%) W(70%)")
        }

        function F(t, n) {
            return t.w("Fz(12px)")
        }

        function I(t, n) {
            return t.w("Fz(25px) LineClamp(1,1.2em)")
        }

        function T(t, n) {
            return t.w("\n").f(n.get(["name"], !1), n, "h").w("\n")
        }

        function A(t, n) {
            return t.w("\n").h("i18n_string", n, {}, {
                _key: "PROMO_TRENDING_GREYOUT_COUNT"
            }).w("\n")
        }

        function M(t, n) {
            return t.w("\n").x(n.get(["commentCount"], !1), n, {
                block: v
            }, {}).w("\n")
        }

        function v(t, n) {
            return t.w('\n<span class="M(5px) D(ib) D(n)--maw370">\n                                <i class="Icon-Fp2 IconComments"></i>\n                                <span class="Fz(12px) Ell Ov(h) D(ib) LineClamp(1,1.2em) Pos(r) Mstart(5px)">').f(n.get(["commentCount"], !1), n, "h").w(" ").h("i18n_string", n, {}, {
                _key: "REACTING"
            }).w("</span>\n                            </span>\n                        ")
        }

        function C(t, n) {
            return t.w('\n<span class="Fz(12px)">').h("i18n_string", n, {}, {
                _key: "PROMO_TRENDING_GREYOUT_MESSAGE"
            }).w(" </span>\n                    ")
        }

        function R(t, n) {
            return t.w('\n<div class="Pos(a) H(100%) Bgc(#000) Op(0.6) W(100%)"></div>\n                ')
        }

        function O(t, n) {
            return t.f(n.getPath(!1, ["image", "url"]), n, "h")
        }

        function S(t, n) {
            return t.f(n.get(["defer"], !1), n, "h")
        }

        function z(t, n) {
            return t.f(n.get(["name"], !1), n, "h")
        }

        function E(t, n) {
            return t.w('<span class="Fz(12px) C(#959595) Ell">').f(n.get(["publisher"], !1), n, "h", ["s"]).w("</span>")
        }

        function N(t, n) {
            return t.w('\n<div class="C(#ffc208) Mt(5px) D(ib) Fz(12px)" aria-label="').x(n.getPath(!1, ["config", "ads", "promoAds", "starRating"]), n, {
                "else": D,
                block: G
            }, {}).w('">\n                    ').s(n.get(["ratings"], !1), n, {
                "else": V,
                block: U
            }, {}).w("\n</div>\n            ")
        }

        function D(t, n) {
            return t.w(" ").h("i18n_string", n, {}, {
                _key: "PROMO_ARIA_NO_RATING"
            }).w(" ")
        }

        function G(t, n) {
            return t.w(" ").h("i18n_string", n, {}, {
                _key: "PROMO_ARIA_STAR_RATING"
            }).w(" ")
        }

        function V(t, n) {
            return t.w('\n<i class="Icon-Fp2 IconStarFilled Va(t)"></i>\n                        <i class="Icon-Fp2 IconStarFilled Va(t)"></i>\n                        <i class="Icon-Fp2 IconStarFilled Va(t)"></i>\n                        <i class="Icon-Fp2 IconStarFilled Va(t)"></i>\n                        <i class="Icon-Fp2 IconStarFilled Va(t)"></i>\n                    ')
        }

        function U(t, n) {
            return t.w("\n").h("eq", n, {
                block: W
            }, {
                key: j,
                value: "1"
            }).w("\n").h("eq", n, {
                block: q
            }, {
                key: L,
                value: "0"
            }).w("\n").h("eq", n, {
                block: H
            }, {
                key: Y,
                value: "0.5"
            }).w("\n")
        }

        function W(t, n) {
            return t.w('<i class="Icon-Fp2 IconStarFilled Va(t)"></i>')
        }

        function j(t, n) {
            return t.f(n.get(["rating"], !1), n, "h")
        }

        function q(t, n) {
            return t.w('<i class="Icon-Fp2 IconStarFilled Va(t) C(#fcf8e3)"></i>')
        }

        function L(t, n) {
            return t.f(n.get(["rating"], !1), n, "h")
        }

        function H(t, n) {
            return t.w('\n<span class="Pos(r) D(ib) H(12px)">\n                                <i class="Icon-Fp2 IconStarFilled Pos(a) W(6px) Ov(h)"></i>\n                            </span>\n                        ')
        }

        function Y(t, n) {
            return t.f(n.get(["rating"], !1), n, "h")
        }

        function Z(t, n) {
            return t.w('\n<span class="C(#959595) Fz(xs) D(ib) Mt(5px) Mstart(10px)">(').f(n.get(["appReviews"], !1), n, "h").w(")</span>\n            ")
        }

        function $(t, n) {
            return t.w('\n<div class="').nx(n.getPath(!1, ["config", "ads", "promoAds", "enableCtaAppStoreDesign"]), n, {
                "else": J,
                block: tt
            }, {}).w('">\n                    ').x(n.getPath(!1, ["config", "ads", "promoAds", "callToAction"]), n, {
                "else": nt,
                block: et
            }, {}).w("\n</div>\n            ")
        }

        function J(t, n) {
            return t.w("P(6px) Bdrs(5px) Fz(11px)--maw370 Fl(end) Pos(r) ").h("eq", n, {
                "else": K,
                block: Q
            }, {
                key: X,
                value: "ios"
            })
        }

        function K(t, n) {
            return t.w("C(#fff) Bgc(#689f38) ")
        }

        function Q(t, n) {
            return t.w("Bdc(#298cda) C(#298cda) Bdw(2px) Bds(s) ")
        }

        function X(t, n) {
            return t.f(n.getPath(!1, ["config", "ads", "promoAds", "ua"]), n, "h")
        }

        function tt(t, n) {
            return t.w("Bdrs(2px) Bgc(#188fff) C(#fff) Py(4px) Mend(8px) Va(t) Fz(12px) Px(6px)")
        }

        function nt(t, n) {
            return t.w("\n").h("i18n_string", n, {}, {
                _key: "GET_THE_APP"
            }).w("\n")
        }

        function et(t, n) {
            return t.w("\n").f(n.getPath(!1, ["config", "ads", "promoAds", "callToAction"]), n, "h").w("\n")
        }
        return dust.register("td-applet-stream-atomic-templates-item-promo_trending_sm", n), n.__dustBody = !0, e.__dustBody = !0, o.__dustBody = !0, s.__dustBody = !0, a.__dustBody = !0, d.__dustBody = !0, r.__dustBody = !0, c.__dustBody = !0, u.__dustBody = !0, i.__dustBody = !0, _.__dustBody = !0, l.__dustBody = !0, f.__dustBody = !0, p.__dustBody = !0, g.__dustBody = !0, w.__dustBody = !0, m.__dustBody = !0, y.__dustBody = !0, B.__dustBody = !0, h.__dustBody = !0, b.__dustBody = !0, x.__dustBody = !0, k.__dustBody = !0, P.__dustBody = !0, F.__dustBody = !0, I.__dustBody = !0, T.__dustBody = !0, A.__dustBody = !0, M.__dustBody = !0, v.__dustBody = !0, C.__dustBody = !0, R.__dustBody = !0, O.__dustBody = !0, S.__dustBody = !0, z.__dustBody = !0, E.__dustBody = !0, N.__dustBody = !0, D.__dustBody = !0, G.__dustBody = !0, V.__dustBody = !0, U.__dustBody = !0, W.__dustBody = !0, j.__dustBody = !0, q.__dustBody = !0, L.__dustBody = !0, H.__dustBody = !0, Y.__dustBody = !0, Z.__dustBody = !0, $.__dustBody = !0, J.__dustBody = !0, K.__dustBody = !0, Q.__dustBody = !0, X.__dustBody = !0, tt.__dustBody = !0, nt.__dustBody = !0, et.__dustBody = !0, n
    }(), dust.cache["td-applet-stream-atomic:item/promo_trending_sm.dust"] = dust.cache["td-applet-stream-atomic:item/promo_trending_sm"] = dust.cache[n], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/promo_trending_sm"] = function(t, e) {
        t = t || {}, dust.render(n, t, e)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-item-reactions_slot_sm", function(t, s) {
    dust.cache = dust.cache || {}, dust.cache[s] = function(t) {
        function s(t, s) {
            return t.s(s.get(["data"], !1), s, {
                block: e
            }, {}).w("\n")
        }

        function e(t, s) {
            return t.w('\n<div class="Bgc(#ededf1)">\n\t<a href="').f(s.get(["url"], !1), s, "h").w('" class="D(b) Py(30px) Bgc(#5f22bf) C(#fff) Ta(c) Pos(r) reaction-ad-triangle" ').h("rapid_data_attr", s, {}, {
                sec: "app-promo",
                slk: "install"
            }).w('>\n\t\t<p class="Fw(b) Fz(16px) M(0) Mb(20px)">').h("i18n_string", s, {}, {
                _key: "REACTIONS_TODAY",
                v0: a
            }).w('</p>\n\t\t<p class="M(0) Mb(15px) Px(30px)">').h("i18n_string", s, {}, {
                _key: "REACTIONS_AD_TEXT"
            }).w('</p>\n\t\t<p class="D(ib) Fw(b) Bgc(#fff) C(#5f22bf) Mx(a) Py(5px) Px(10px) Bdrs(2px)">').h("i18n_string", s, {}, {
                _key: "REACTIONS_AD_TEXT_INSTALL"
            }).w('</p>\n\t\t<span class="Pos(a) End(0) T(0) W(0) H(0) D(b) Bds(s) Bdw($triangle_width) Bdc($triangle_color)"></span>\n\t</a>\n</div>\n')
        }

        function a(t, s) {
            return t.w("<span class='Fw(b) Fz(50px) M(0) Pos(r) Z(1) D(b)'>").f(s.get(["reactionCount"], !1), s, "h").w("</span>")
        }
        return dust.register("td-applet-stream-atomic-templates-item-reactions_slot_sm", s), s.__dustBody = !0, e.__dustBody = !0, a.__dustBody = !0, s
    }(), dust.cache["td-applet-stream-atomic:item/reactions_slot_sm.dust"] = dust.cache["td-applet-stream-atomic:item/reactions_slot_sm"] = dust.cache[s], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/reactions_slot_sm"] = function(t, e) {
        t = t || {}, dust.render(s, t, e)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-item-right_menu", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('<div class="js-stream-roundup strm-right-menu-roundup rounded-img Pos(r) Wow(bw) Cf Bxz(bb) Bd($bdr_purple)">\n    <div class="strm-left strm-headline Fl(start) Pos(r)" style="height: 200px">\n        ').p("td-applet-stream-atomic:item/right_menu_featured", e, {}).w('\n<div style="display: none;" class="strm-featured-crossfade Pos(a) Start(0) T(0) W(100%) H(100%) Ov(h)"></div>\n    </div>\n    <div class="strm-right Mstart(72%) Pos(a) Start(0) T(0) B(0) Pend(18px)">\n        <a href="').f(e.get(["link"], !1), e, "h").w('" data-uuid="').f(e.get(["id"], !1), e, "h").w('" data-story-index="0" class="Pos(r) D(b) Bxz(bb) H(33.3%) selected strm-sl-link js-stream-content-link js-stream-item-title js-content-title').x(e.get(["viewer_eligible"], !1), e, {
                block: n
            }, {}).w(' C($link) C($m_blue):h Td(n) Fz(12px) Fw(b) Pt(18px)" ').x(e.get(["tab"], !1), e, {
                block: r
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "rhdln",
                elmt: "ct",
                r: s,
                ccode: a,
                t4: "rel",
                g: d
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: i
            }, {}).w(" ").s(e.getPath(!1, ["images", "featured"]), e, {
                block: o
            }, {}).w('><div class="Mstart(18px) C($link) D(ib) Va(m) Pos(r)"><div class="strm-chevron Pos(a) H(0) W(0) T(0) Start(-18px) Bdy($chevron_border) Bdend(0) Bdstart($chevron_color)"></div><span class="Mend(7px) D(ib) Lh(15px) LineClamp(2,30px) C($link) C($m_blue):h">').f(e.get(["title"], !1), e, "h", ["s"]).w("</span>").s(e.getPath(!0, ["headlineTimeElapsed"]), e, {
                block: u
            }, {}).w("</div></a>\n    ").x(e.getPath(!1, ["config", "ui", "storyline_multi_image_roundup"]), e, {
                block: l
            }, {}).w("\n</div>\n</div>\n")
        }

        function n(t, e) {
            return t.w(" js-sl js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function r(t, e) {
            return t.w('target="_blank"')
        }

        function s(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function a(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function d(t, e) {
            return t.f(e.get(["id"], !1), e, "h")
        }

        function i(t, e) {
            return t.w('rel="nofollow"')
        }

        function o(t, e) {
            return t.w('data-img-url="').f(e.get(["url"], !1), e, "h").w('"')
        }

        function u(t, e) {
            return t.w('<span class="Fz(11px) Td(n) Fw(n) D(b) Mt(-1px) Whs(pl)">').f(e.getPath(!0, []), e, "h", ["s"]).w("</span>")
        }

        function l(t, e) {
            return t.w("\n").s(e.get(["storyline"], !1), e, {
                block: c
            }, {}).w("\n")
        }

        function c(t, e) {
            return t.w("\n").h("lt", e, {
                block: _
            }, {
                key: e.get(["$idx"], !1),
                value: 2
            }).w("\n")
        }

        function _(t, e) {
            return t.w('\n<a href="').f(e.getPath(!0, ["link"]), e, "h").w('" data-story-index="').h("math", e, {}, {
                key: h,
                method: "add",
                operand: "1"
            }).w('" data-uuid="').f(e.getPath(!0, ["uuid"]), e, "h").w('" class="Pos(r) D(b) Bxz(bb) H(33.3%) strm-sl-link js-stream-content-link js-stream-item-title js-content-title').x(e.get(["viewer_eligible"], !1), e, {
                block: p
            }, {}).w(" C($link) C($m_blue):h Td(n) Fz(12px) Fw(b)").h("eq", e, {
                block: m
            }, {
                key: e.get(["$idx"], !1),
                value: 1
            }).w('" ').x(e.get(["tab"], !1), e, {
                block: f
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "rhdln",
                elmt: "ct",
                r: w,
                ccode: g,
                t4: "rel",
                pos: b,
                g: k
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: x
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: y
            }, {}).w('><div class="Mstart(18px) C($link) D(ib) Va(m) Pos(r)"><div class="strm-chevron Pos(a) H(0) W(0) T(0) Start(-18px) Bdy($chevron_border) Bdend(0) Bdstart($chevron_color)"></div><span class="Mend(7px) D(ib) Lh(15px) LineClamp(2,30px) C($link) C($m_blue):h">').f(e.getPath(!0, ["title"]), e, "h", ["s"]).w("</span>").s(e.getPath(!0, ["timeElapsed"]), e, {
                block: B
            }, {}).w("</div></a>\n        ")
        }

        function h(t, e) {
            return t.f(e.get(["$idx"], !1), e, "h")
        }

        function p(t, e) {
            return t.w(" js-sl js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function m(t, e) {
            return t.w(" Pb(18px)")
        }

        function f(t, e) {
            return t.w('target="_blank"')
        }

        function w(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function g(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function b(t, e) {
            return t.f(e.getPath(!0, ["pos"]), e, "h")
        }

        function k(t, e) {
            return t.f(e.getPath(!0, ["uuid"]), e, "h")
        }

        function x(t, e) {
            return t.w('rel="nofollow"')
        }

        function y(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function B(t, e) {
            return t.w('<span class="Fz(11px) Td(n) Fw(n) D(b) Mt(-1px) Whs(pl)">').f(e.getPath(!0, []), e, "h", ["s"]).w("</span>")
        }
        return dust.register("td-applet-stream-atomic-templates-item-right_menu", e), e.__dustBody = !0, n.__dustBody = !0, r.__dustBody = !0, s.__dustBody = !0, a.__dustBody = !0, d.__dustBody = !0, i.__dustBody = !0, o.__dustBody = !0, u.__dustBody = !0, l.__dustBody = !0, c.__dustBody = !0, _.__dustBody = !0, h.__dustBody = !0, p.__dustBody = !0, m.__dustBody = !0, f.__dustBody = !0, w.__dustBody = !0, g.__dustBody = !0, b.__dustBody = !0, k.__dustBody = !0, x.__dustBody = !0, y.__dustBody = !0, B.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/right_menu.dust"] = dust.cache["td-applet-stream-atomic:item/right_menu"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/right_menu"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-item-right_menu_featured"]
});
YUI.add("td-applet-stream-atomic-templates-item-right_menu_featured", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.s(e.get(["image"], !1), e, {
                block: n
            }, {}).w("\n")
        }

        function n(t, e) {
            return t.w("\n").nx(e.get(["isnewnode"], !1), e, {
                block: a
            }, {}).w('\n<a href="').f(e.get(["link"], !1), e, "h").w('" class="js-stream-content-link').x(e.get(["viewer_eligible"], !1), e, {
                block: r
            }, {}).w('" data-uuid="').f(e.get(["id"], !1), e, "h").w('" ').x(e.get(["tab"], !1), e, {
                block: d
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "img",
                elmt: "ct",
                r: o,
                ccode: i
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: s
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: u
            }, {}).w(">").h("img", e, {}, {
                src: c,
                "class": "Pos(r) T(50%) Start(50%) Mstart(-254px) Mt(-100px) rounded-img",
                width: "508",
                height: "200",
                defer: l
            }).w('<div class="strm-img-gradient Pos(a) W(100%) H(100%) T(0) Start(0)"></div>').p("td-applet-stream-atomic:item/play_icon", e, {}).w('</a>\n    <div class="strm-headline Pos(a) B(0) Start(0) Mstart(13px) Mb(13px) Mend(40px)">\n        <h3 class="M(0) Lh(22px)">\n            <a href="').f(e.get(["link"], !1), e, "h").w('" data-uuid="').f(e.get(["id"], !1), e, "h").w('" class="Pos(r) js-stream-content-link js-stream-item-title js-content-title').x(e.get(["viewer_eligible"], !1), e, {
                block: _
            }, {}).w(' C(white) Td(u):h Fz(18px) Fw(b)" ').x(e.get(["tab"], !1), e, {
                block: f
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "hdln",
                elmt: "ct",
                r: w,
                ccode: h
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: g
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: m
            }, {}).w('><span class="').x(e.getPath(!1, ["config", "ui", "fixed_layout"]), e, {
                block: p
            }, {}).w('LineClamp(2,44px) C(white) Td(u):h Cur(p)">').f(e.get(["title"], !1), e, "h", ["s"]).w('</span></a>\n        </h3>\n        <div class="Pos(r) stream-summary ').nx(e.getPath(!1, ["config", "ui", "fixed_layout"]), e, {
                block: b
            }, {}).w(' Lh(18px) C(#d9d9db) Bfv(h)">').s(e.get(["summary"], !1), e, {
                block: k
            }, {}).s(e.get(["more_link_text"], !1), e, {
                block: y
            }, {}).w("</div>\n    </div>\n").nx(e.get(["isnewnode"], !1), e, {
                block: T
            }, {}).w("\n")
        }

        function a(t, e) {
            return t.w('<div class="Pos(a) Start(0) T(0) W(100%) H(100%) Ov(h) strm-featured-selected">')
        }

        function r(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function d(t, e) {
            return t.w('target="_blank"')
        }

        function o(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function i(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function s(t, e) {
            return t.w('rel="nofollow"')
        }

        function u(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function c(t, e) {
            return t.f(e.get(["url"], !1), e, "h")
        }

        function l(t, e) {
            return t.f(e.get(["defer"], !1), e, "h")
        }

        function _(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function f(t, e) {
            return t.w('target="_blank"')
        }

        function w(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function h(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function g(t, e) {
            return t.w('rel="nofollow"')
        }

        function m(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function p(t, e) {
            return t.w("D(b) ")
        }

        function b(t, e) {
            return t.w("LineClamp(2,34px)")
        }

        function k(t, e) {
            return t.w('<span class="Mend(4px)">').f(e.getPath(!0, []), e, "h", ["s"]).w("</span>")
        }

        function y(t, e) {
            return t.w('<a class="js-stream-content-link js-stream-item-title js-content-title').x(e.get(["viewer_eligible"], !1), e, {
                block: B
            }, {}).w(' C(white) Td(u):h Fw(b)" data-uuid="').f(e.get(["id"], !1), e, "h").w('" ').x(e.get(["tab"], !1), e, {
                block: x
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "hdln",
                elmt: "ct",
                r: v,
                ccode: P
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: j
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: C
            }, {}).w(' href="').f(e.get(["link"], !1), e, "h").w('">').f(e.getPath(!0, []), e, "h", ["s"]).w(" &#xbb;</a>")
        }

        function B(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function x(t, e) {
            return t.w('target="_blank"')
        }

        function v(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function P(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function j(t, e) {
            return t.w('rel="nofollow"')
        }

        function C(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function T(t, e) {
            return t.w("</div>")
        }
        return dust.register("td-applet-stream-atomic-templates-item-right_menu_featured", e), e.__dustBody = !0, n.__dustBody = !0, a.__dustBody = !0, r.__dustBody = !0, d.__dustBody = !0, o.__dustBody = !0, i.__dustBody = !0, s.__dustBody = !0, u.__dustBody = !0, c.__dustBody = !0, l.__dustBody = !0, _.__dustBody = !0, f.__dustBody = !0, w.__dustBody = !0, h.__dustBody = !0, g.__dustBody = !0, m.__dustBody = !0, p.__dustBody = !0, b.__dustBody = !0, k.__dustBody = !0, y.__dustBody = !0, B.__dustBody = !0, x.__dustBody = !0, v.__dustBody = !0, P.__dustBody = !0, j.__dustBody = !0, C.__dustBody = !0, T.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/right_menu_featured.dust"] = dust.cache["td-applet-stream-atomic:item/right_menu_featured"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/right_menu_featured"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-item-play_icon"]
});
YUI.add("td-applet-stream-atomic-templates-item-slideshow_sm", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
            function e(t, e) {
                return t.w('<li class="js-stream-content Pos(r) item-card"data-uuid="').x(e.get(["cauuid"], !1), e, {
                    "else": s,
                    block: n
                }, {}).w('"').s(e.get(["cauuid"], !1), e, {
                    block: o
                }, {}).w('>\n\t<div class="Bgc(#fff)">\n\t\t<div class="').x(e.getPath(!1, ["images", "default"]), e, {
                    "else": d,
                    block: a
                }, {}).w(' W(100%)">\n\t\t\t<a ').x(e.get(["rdSigLink"], !1), e, {
                    "else": i,
                    block: c
                }, {}).w(' class="D(b) Td(n) Td(n):f ').x(e.getPath(!1, ["images", "default"]), e, {
                    block: r
                }, {}).w(" js-stream-content-link js-stream-item-title Pt(18px) Px(20px) Pb(8px) ").x(e.get(["viewer_eligible"], !1), e, {
                    block: h
                }, {}).w('" ').x(e.get(["tab"], !1), e, {
                    block: f
                }, {}).w(" ").h("rapid_data_attr", e, {}, {
                    "rapid-base": e.get(["i13n"], !1),
                    elm: "img",
                    elmt: "ct",
                    r: _,
                    ccode: w,
                    slk: m
                }).w(" ").x(e.get(["off_network"], !1), e, {
                    block: b
                }, {}).s(e.get(["attrCat"], !1), e, {
                    block: g
                }, {}).w('><h3 class="M(0) Mb(4px) Mt(-2px) Fw(b) Fz(16px) Fz(15px)--maw370 Lh(1.3) LineClamp(3,4em) LineClamp(2,2.7em)--maw370 Bfv(h) C(#000)">').f(e.get(["title"], !1), e, "h", ["s"]).w("</h3>").x(e.get(["publisher"], !1), e, {
                    block: p
                }, {}).w('\n<u class="StretchedBox Z(2)"></u>\n\t\t\t</a>\n\t\t</div>\n\t\t<div class="Pb(14px) Px(20px)">').x(e.get(["actionsEnabled"], !1), e, {
                    block: B
                }, {}).w("</div>\n\t\t").h("eq", e, {
                    "else": x,
                    block: S
                }, {
                    key: L,
                    value: "portrait"
                }).w("\n</div>\n</li>")
            }

            function s(t, e) {
                return t.f(e.get(["id"], !1), e, "h")
            }

            function n(t, e) {
                return t.f(e.get(["cauuid"], !1), e, "h")
            }

            function o(t, e) {
                return t.w(' data-cauuid="').f(e.getPath(!0, []), e, "h").w('"')
            }

            function d(t, e) {
                return t.w("Va(m)")
            }

            function a(t, e) {
                return t.w("Va(t)")
            }

            function i(t, e) {
                return t.x(e.get(["previewLink"], !1), e, {
                    "else": u,
                    block: l
                }, {})
            }

            function u(t, e) {
                return t.w('href="').f(e.get(["link"], !1), e, "h").w('"')
            }

            function l(t, e) {
                return t.w('href="').f(e.get(["previewLink"], !1), e, "h").w('" data-share-link="').f(e.get(["link"], !1), e, "h").w('"')
            }

            function c(t, e) {
                return t.w('href="').f(e.get(["rdSigLink"], !1), e, "h").w('" data-orig-link="').f(e.get(["link"], !1), e, "h").w('"')
            }

            function r(t, e) {
                return t.w("streamImage")
            }

            function h(t, e) {
                return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
            }

            function f(t, e) {
                return t.w('target="_blank"')
            }

            function _(t, e) {
                return t.f(e.get(["reason"], !1), e, "h")
            }

            function w(t, e) {
                return t.f(e.get(["ccode"], !1), e, "h")
            }

            function m(t, e) {
                return t.f(e.get(["title"], !1), e, "h", ["s"])
            }

            function b(t, e) {
                return t.w('rel="nofollow"')
            }

            function g(t, e) {
                return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
            }

            function p(t, e) {
                return t.w('<p class="Fz(12px) C(#959595) Ell">').f(e.get(["publisher"], !1), e, "h", ["s"]).w("</p>")
            }

            function B(t, e) {
                return t.p("td-applet-stream-atomic:item/ntk_actions_sm", e, {})
            }

            function x(t, e) {
                return t.w('<img src="').f(e.getPath(!1, ["slideShowPhotos", "image", "url"]), e, "h").w('" alt="" class="W(100%) Bdt($slideshow_main_bdr) Bdb($slideshow_main_bdr)"><div class="Pos(r) Z(1) M(-1px) Mt(0)">').s(e.getPath(!1, ["slideShowPhotos", "thumbnails"]), e, {
                    block: P
                }, {}).h("gt", e, {
                    block: k
                }, {
                    key: y,
                    value: v
                }).w("</div>")
            }

            function P(t, e) {
                return t.w('<img src="').f(e.get(["url"], !1), e, "h").w('" alt="" class="W(1/').f(e.getPath(!1, ["slideShowPhotos", "thumbnailCount"]), e, "h").w(') P(1px) Bd($slideshow_bdr) Bgc(#e0e4e9) Bxz(bb) Bdb($none)">')
            }

            function k(t, e) {
                return t.w('<div class="C(#ffffff) Pos(a) T(1px) B(0) End(0) W(1/').f(e.getPath(!1, ["slideShowPhotos", "thumbnailCount"]), e, "h").w(') Ta(c) Lh(0) Bgc($shareModal) Fz(12px) Bxz(bb) Bd($slideshow_bdr) Bdb($none) Bdt($none)"><div class="H(100%) TranslateY(50%)"><i class="Icon-Fp2 IconSlideshow Fz(18px) Mend(5px) D(ib) Va(b)"></i>').f(e.get(["count"], !1), e, "h").w("</div></div>")
            }

            function y(t, e) {
                return t.f(e.get(["count"], !1), e, "h")
            }

            function v(t, e) {
                return t.f(e.getPath(!1, ["slideshowObj", "thumbnailCount"]), e, "h")
            }

            function S(t, e) {
                return t.w('<div class="Pos(r) Ov(h)"><img src="').f(e.getPath(!1, ["slideShowPhotos", "image", "url"]), e, "h").w('" alt="" class="').h("eq", e, {
                    block: z
                }, {
                    key: C,
                    value: "2"
                }).h("eq", e, {
                    block: $
                }, {
                    key: F,
                    value: "3"
                }).w(' Bd($slideshow_main_bdr) BdStart($none) Bdb($none) Bxz(bb)"><div class="Pos(a) End(-1px) B(-1px) T(-1px) W(1/').f(e.getPath(!1, ["slideShowPhotos", "thumbnailCount"]), e, "h").w(')">').s(e.getPath(!1, ["slideShowPhotos", "thumbnails"]), e, {
                    block: T
                }, {}).w('<div class="C(#ffffff) Pos(a) B(0) End(0) W(100%) H(1/').f(e.getPath(!1, ["slideShowPhotos", "thumbnailCount"]), e, "h").w(') Ta(c) Lh(0) Bxz(bb) Fz(12px)Fz(12px) Bxz(bb) P(1px)"><div class="Bgc($shareModal) H(100%)"><div class="H(100%) TranslateY(50%)"><i class="Icon-Fp2 IconSlideshow Fz(18px) Mend(5px) D(ib) Va(b)"></i>').f(e.get(["count"], !1), e, "h").w("</div></div></div></div></div>")
            }

            function z(t, e) {
                return t.w("W(1/2)")
            }

            function C(t, e) {
                return t.f(e.getPath(!1, ["slideShowPhotos", "thumbnailCount"]), e, "h")
            }

            function $(t, e) {
                return t.w("W(2/3)")
            }

            function F(t, e) {
                return t.f(e.getPath(!1, ["slideShowPhotos", "thumbnailCount"]), e, "h")
            }

            function T(t, e) {
                return t.w('<img src="').f(e.get(["url"], !1), e, "h").w('" alt="" class="W(100%) P(1px) Bgc(#e0e4e9) Bxz(bb) Bd($slideshow_bdr)">')
            }

            function L(t, e) {
                return t.f(e.getPath(!1, ["slideShowPhotos", "image", "format"]), e, "h")
            }
            return dust.register("td-applet-stream-atomic-templates-item-slideshow_sm", e), e.__dustBody = !0, s.__dustBody = !0, n.__dustBody = !0, o.__dustBody = !0, d.__dustBody = !0, a.__dustBody = !0, i.__dustBody = !0, u.__dustBody = !0, l.__dustBody = !0, c.__dustBody = !0, r.__dustBody = !0, h.__dustBody = !0, f.__dustBody = !0, _.__dustBody = !0, w.__dustBody = !0, m.__dustBody = !0, b.__dustBody = !0, g.__dustBody = !0, p.__dustBody = !0, B.__dustBody = !0, x.__dustBody = !0, P.__dustBody = !0, k.__dustBody = !0, y.__dustBody = !0, v.__dustBody = !0, S.__dustBody = !0, z.__dustBody = !0, C.__dustBody = !0, $.__dustBody = !0, F.__dustBody = !0, T.__dustBody = !0, L.__dustBody = !0, e
        }(), dust.cache["td-applet-stream-atomic:item/slideshow_sm.dust"] = dust.cache["td-applet-stream-atomic:item/slideshow_sm"] = dust.cache[e], t.Template._cache = t.Template._cache || {},
        t.Template._cache["td-applet-stream-atomic/templates/item/slideshow_sm"] = function(t, s) {
            t = t || {}, dust.render(e, t, s)
        }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-item-ntk_actions_sm"]
});
YUI.add("td-applet-stream-atomic-templates-item-slideshow_tb", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('<li class="js-stream-content Pos(r) item"data-uuid="').x(e.get(["cauuid"], !1), e, {
                "else": n,
                block: d
            }, {}).w('"').s(e.get(["cauuid"], !1), e, {
                block: s
            }, {}).w('>\n\t<div class="Bgc(#fff)">\n\t\t<div class="').x(e.getPath(!1, ["images", "default"]), e, {
                "else": o,
                block: i
            }, {}).w(' W(100%)">\n\t\t\t<a ').x(e.get(["rdSigLink"], !1), e, {
                "else": u,
                block: c
            }, {}).w(' class="D(b) Td(n) Td(n):f ').x(e.getPath(!1, ["images", "default"]), e, {
                block: l
            }, {}).w(" js-stream-content-link js-stream-item-title Pb(8px) ").x(e.get(["viewer_eligible"], !1), e, {
                block: _
            }, {}).w('" ').x(e.get(["tab"], !1), e, {
                block: f
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "img",
                elmt: "ct",
                r: h,
                ccode: w
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: m
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: g
            }, {}).w('><h3 class="M(0) Mb(4px) Mt(-2px) Fw(b) Fz(21px) Lh(1.3) LineClamp(3,4em) LineClamp(2,2.7em)--maw370 Bfv(h) C(#000)">').f(e.get(["title"], !1), e, "h", ["s"]).w("</h3>").x(e.get(["publisher"], !1), e, {
                block: p
            }, {}).w('\n<u class="StretchedBox Z(2)"></u>\n\t\t\t</a>\n\t\t</div>\n\t\t<div class="Pb(14px)">').x(e.get(["actionsEnabled"], !1), e, {
                block: b
            }, {}).w('</div><div class="Pos(r) Ov(h)"><img src="').f(e.getPath(!1, ["slideShowPhotos", "image", "url"]), e, "h").w('" alt="" class="').h("eq", e, {
                "else": B,
                block: y
            }, {
                key: k,
                value: "portrait"
            }).w(' P(1px) Bgc(#e0e4e9) Bxz(bb) Bd($slideshow_bdr)"><div class="Pos(a) End(0) B(0) T(0) Va(t) ').h("eq", e, {
                "else": x,
                block: v
            }, {
                key: P,
                value: "portrait"
            }).w('">').s(e.getPath(!1, ["slideShowPhotos", "thumbnails"]), e, {
                block: S
            }, {}).w("</div></div>\n\t</div>\n</li>")
        }

        function n(t, e) {
            return t.f(e.get(["id"], !1), e, "h")
        }

        function d(t, e) {
            return t.f(e.get(["cauuid"], !1), e, "h")
        }

        function s(t, e) {
            return t.w(' data-cauuid="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function o(t, e) {
            return t.w("Va(m)")
        }

        function i(t, e) {
            return t.w("Va(t)")
        }

        function u(t, e) {
            return t.x(e.get(["previewLink"], !1), e, {
                "else": a,
                block: r
            }, {})
        }

        function a(t, e) {
            return t.w('href="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function r(t, e) {
            return t.w('href="').f(e.get(["previewLink"], !1), e, "h").w('" data-share-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function c(t, e) {
            return t.w('href="').f(e.get(["rdSigLink"], !1), e, "h").w('" data-orig-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function l(t, e) {
            return t.w("streamImage")
        }

        function _(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function f(t, e) {
            return t.w('target="_blank"')
        }

        function h(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function w(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function m(t, e) {
            return t.w('rel="nofollow"')
        }

        function g(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function p(t, e) {
            return t.w('<p class="Fz(12px) C(#959595) Ell">').f(e.get(["publisher"], !1), e, "h", ["s"]).w("</p>")
        }

        function b(t, e) {
            return t.p("td-applet-stream-atomic:item/ntk_actions_sm", e, {})
        }

        function B(t, e) {
            return t.w("W(60%)")
        }

        function y(t, e) {
            return t.w("W(44%)")
        }

        function k(t, e) {
            return t.f(e.getPath(!1, ["slideShowPhotos", "image", "format"]), e, "h")
        }

        function x(t, e) {
            return t.w("W(40%)")
        }

        function v(t, e) {
            return t.w("W(56%)")
        }

        function P(t, e) {
            return t.f(e.getPath(!1, ["slideShowPhotos", "image", "format"]), e, "h")
        }

        function S(t, e) {
            return t.w('<div class="Bd($slideshow_bdr) W(50%) D(ib) Bxz(bb) ').h("lt", e, {
                block: T
            }, {
                key: L,
                value: "2"
            }).w(" ").h("eq", e, {
                block: $
            }, {
                key: z,
                value: "2"
            }).h("eq", e, {
                block: C
            }, {
                key: W,
                value: "3"
            }).w('"><img src="').f(e.get(["url"], !1), e, "h").w('" alt="" class="W(100%) Bxz(bb) Bd($slideshow_main_bdr)">').h("eq", e, {
                block: q
            }, {
                key: E,
                value: F
            }).w("</div>")
        }

        function T(t, e) {
            return t.w("Pos(r)")
        }

        function L(t, e) {
            return t.f(e.get(["$idx"], !1), e, "h")
        }

        function $(t, e) {
            return t.w("Pos(a) Start(0) B(0)")
        }

        function z(t, e) {
            return t.f(e.get(["$idx"], !1), e, "h")
        }

        function C(t, e) {
            return t.w("Pos(a) End(0) B(0)")
        }

        function W(t, e) {
            return t.f(e.get(["$idx"], !1), e, "h")
        }

        function q(t, e) {
            return t.w('<div class="C(#ffffff) Pos(a) T(1px) B(1px) Start(1px) End(1px) Ta(c) Lh(0) Bgc($shareModal) Fz(12px)"><div class="H(100%) TranslateY(50%)"><i class="Icon-Fp2 IconSlideshow Fz(18px) Mend(5px) D(ib) Va(b)"></i>').f(e.get(["count"], !1), e, "h").w("</div></div>")
        }

        function E(t, e) {
            return t.f(e.get(["$idx"], !1), e, "h")
        }

        function F(t, e) {
            return t.f(e.getPath(!1, ["slideShowPhotos", "indexCount"]), e, "h")
        }
        return dust.register("td-applet-stream-atomic-templates-item-slideshow_tb", e), e.__dustBody = !0, n.__dustBody = !0, d.__dustBody = !0, s.__dustBody = !0, o.__dustBody = !0, i.__dustBody = !0, u.__dustBody = !0, a.__dustBody = !0, r.__dustBody = !0, c.__dustBody = !0, l.__dustBody = !0, _.__dustBody = !0, f.__dustBody = !0, h.__dustBody = !0, w.__dustBody = !0, m.__dustBody = !0, g.__dustBody = !0, p.__dustBody = !0, b.__dustBody = !0, B.__dustBody = !0, y.__dustBody = !0, k.__dustBody = !0, x.__dustBody = !0, v.__dustBody = !0, P.__dustBody = !0, S.__dustBody = !0, T.__dustBody = !0, L.__dustBody = !0, $.__dustBody = !0, z.__dustBody = !0, C.__dustBody = !0, W.__dustBody = !0, q.__dustBody = !0, E.__dustBody = !0, F.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/slideshow_tb.dust"] = dust.cache["td-applet-stream-atomic:item/slideshow_tb"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/slideshow_tb"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-item-ntk_actions_sm"]
});
YUI.add("td-applet-stream-atomic-templates-item-storyline", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('  <ul class="js-stream-storyline Cf ').x(e.get(["isRoundUp"], !1), e, {
                "else": n,
                block: o
            }, {}).w(' List(n)"').s(e.get(["categoryLabel"], !1), e, {
                block: u
            }, {}).w(">").s(e.get(["storyline"], !1), e, {
                block: c
            }, {}).w("</ul>\n")
        }

        function n(t, e) {
            return t.w("C(c_").s(e.get(["categoryLabel"], !1), e, {
                "else": a,
                block: r
            }, {}).w(")")
        }

        function a(t, e) {
            return t.x(e.get(["property"], !1), e, {
                block: s
            }, {})
        }

        function s(t, e) {
            return t.f(e.get(["property"], !1), e, "h")
        }

        function r(t, e) {
            return t.f(e.getPath(!0, []), e, "h")
        }

        function o(t, e) {
            return t.w("C($purple)")
        }

        function u(t, e) {
            return t.w(' data-cat-label="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function c(t, e) {
            return t.x(e.get(["total"], !1), e, {
                block: d
            }, {})
        }

        function d(t, e) {
            return t.h("lt", e, {
                block: l
            }, {
                key: e.get(["$idx"], !1),
                value: e.get(["total"], !1)
            })
        }

        function l(t, e) {
            return t.w('<li class="Mb(8px) Mstart(13px) Lh(15px) storyline Pos(r) Pstart(0)"><a href="').f(e.getPath(!0, ["link"]), e, "h").w('" class="strm-sl-link js-stream-content-link').x(e.get(["viewer_eligible"], !1), e, {
                block: i
            }, {}).w(' Fz(12px) Fw(b) Td(n) C($link) C($m_blue):h D(ib) Va(t) LineClamp(2,30px)" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "rhdln",
                elmt: "ct",
                r: p,
                ccode: _,
                t4: "rel",
                pos: h,
                g: f
            }).w(' data-uuid="').f(e.getPath(!0, ["uuid"]), e, "h").w('"').s(e.get(["attrCat"], !1), e, {
                block: y
            }, {}).w('><span class="Mend(5px)">').f(e.getPath(!0, ["title"]), e, "h", ["s"]).w("</span>").s(e.getPath(!0, ["publisher"]), e, {
                block: g
            }, {}).w("</a></li>")
        }

        function i(t, e) {
            return t.w(" js-sl js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function p(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function _(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function h(t, e) {
            return t.f(e.getPath(!0, ["pos"]), e, "h")
        }

        function f(t, e) {
            return t.f(e.getPath(!0, ["uuid"]), e, "h")
        }

        function y(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function g(t, e) {
            return t.w('<span class="Fz(11px) Td(n) C(gray_dark) Whs(pl) D(ib) Fw(n)">').f(e.getPath(!0, []), e, "h", ["s"]).w("</span>")
        }
        return dust.register("td-applet-stream-atomic-templates-item-storyline", e), e.__dustBody = !0, n.__dustBody = !0, a.__dustBody = !0, s.__dustBody = !0, r.__dustBody = !0, o.__dustBody = !0, u.__dustBody = !0, c.__dustBody = !0, d.__dustBody = !0, l.__dustBody = !0, i.__dustBody = !0, p.__dustBody = !0, _.__dustBody = !0, h.__dustBody = !0, f.__dustBody = !0, y.__dustBody = !0, g.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/storyline.dust"] = dust.cache["td-applet-stream-atomic:item/storyline"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/storyline"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-item-storyline_images", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.x(e.get(["storylineMultiImage"], !1), e, {
                block: n
            }, {}).w("\n")
        }

        function n(t, e) {
            return t.w('\n<div class="js-stream-extra-thumbs Pos(r) Mt(3px) W(a) Mstart(-3px) Pb(30.1%) H(0)">\n    <div class="StretchedBox Ov(h)">\n    ').s(e.get(["storyline"], !1), e, {
                block: a
            }, {}).w("\n</div>\n</div>\n")
        }

        function a(t, e) {
            return t.w("\n").h("lt", e, {
                block: r
            }, {
                key: e.get(["$idx"], !1),
                value: e.get(["storylineImageCount"], !1)
            }).w("\n")
        }

        function r(t, e) {
            return t.w('\n<div class="').h("gt", e, {
                block: s
            }, {
                key: e.get(["$idx"], !1),
                value: 0
            }).w('Ov(h) Bxz(bb) Bdstartc(t) Bdstarts(s) Fl(start) W(50%) H(100%) ua-ie7_W(48%)"><a href="').f(e.getPath(!0, ["link"]), e, "h").w('" class="Pos(r) D(ib) strm-sl-link js-stream-content-link H(100%)').x(e.get(["viewer_eligible"], !1), e, {
                block: i
            }, {}).w('" data-uuid="').f(e.getPath(!0, ["uuid"]), e, "h").w('" ').x(e.get(["tab"], !1), e, {
                block: d
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "img",
                elmt: "ct",
                r: o,
                ccode: u,
                t4: "rel",
                pos: c,
                g: l
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: _
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: m
            }, {}).w(">").h("img", e, {}, {
                src: f,
                "class": g,
                defer: h,
                alt: y
            }).w("</a></div>\n        ")
        }

        function s(t, e) {
            return t.w("Bdstartw(3px) ")
        }

        function i(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function d(t, e) {
            return t.w('target="_blank"')
        }

        function o(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function u(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function c(t, e) {
            return t.f(e.getPath(!0, ["pos"]), e, "h")
        }

        function l(t, e) {
            return t.f(e.getPath(!0, ["uuid"]), e, "h")
        }

        function _(t, e) {
            return t.w('rel="nofollow"')
        }

        function m(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function f(t, e) {
            return t.f(e.getPath(!0, ["image", "url"]), e, "h")
        }

        function g(t, e) {
            return t.w("W(100%) H(100%) storyline-img-").f(e.get(["$idx"], !1), e, "h")
        }

        function h(t, e) {
            return t.f(e.getPath(!0, ["image", "defer"]), e, "h")
        }

        function y(t, e) {
            return t.f(e.getPath(!0, ["title"]), e, "h", ["s"])
        }
        return dust.register("td-applet-stream-atomic-templates-item-storyline_images", e), e.__dustBody = !0, n.__dustBody = !0, a.__dustBody = !0, r.__dustBody = !0, s.__dustBody = !0, i.__dustBody = !0, d.__dustBody = !0, o.__dustBody = !0, u.__dustBody = !0, c.__dustBody = !0, l.__dustBody = !0, _.__dustBody = !0, m.__dustBody = !0, f.__dustBody = !0, g.__dustBody = !0, h.__dustBody = !0, y.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/storyline_images.dust"] = dust.cache["td-applet-stream-atomic:item/storyline_images"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/storyline_images"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-item-storyline_upsell", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('<div class="js-stream-upsell-carousel Pb(6px)">\n    <h3 class="Mb(8px) Fz(12px) Fw(b)">').h("i18n_string", e, {}, {
                _key: "STORYLINE_UPSELL"
            }).w('</h3>\n    <div class="Ov(h) Pos(r)">\n        <ul class="js-stream-upsell-ul Pos(r) Whs(nw) Wow(n) FastTrans">').s(e.get(["list"], !1), e, {
                block: s
            }, {}).w('</ul>\n    </div>\n    <div class="strm-upsell-gradient-left H(107px) W(50px) Pos(a) T(0) Mt(35px) Disabled"></div>\n    <div class="strm-upsell-gradient-right H(107px) W(50px) Pos(a) T(0) Mt(35px) End(0)"></div>\n    <button type="button" class="js-stream-upsell-left Bgc(#26282a) Pos(a) T(0) Mt(66px) H(45px) W(45px) Bdrstend(3px) Bdrsbend(3px) Disabled" title="').h("i18n_string", e, {}, {
                _key: "STORYLINE_PREVIOUS"
            }).w('" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "btn",
                elmt: "previous",
                pkgt: "follow_promo",
                r: p,
                ccode: _
            }).w('><i class="Icon-Fp2 IconBackArrow Fz(25px) Fw(b) C(#fff)"></i></button>\n    <button type="button" class="js-stream-upsell-right Bgc(#26282a) Pos(a) T(0) Mt(66px) H(45px) W(45px) End(0) Bdrststart(3px) Bdrsbstart(3px)" title="').h("i18n_string", e, {}, {
                _key: "STORYLINE_NEXT"
            }).w('" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "btn",
                elmt: "next",
                pkgt: "follow_promo",
                r: m,
                ccode: f
            }).w('><i class="Icon-Fp2 IconForwardArrow Fz(25px) Fw(b) C(#fff)"></i></button>\n</div>')
        }

        function s(t, e) {
            return t.w('<li class="js-stream-upsell-item Pos(r) D(ib)').h("sep", e, {
                block: r
            }, {}).w('" data-uuid="').f(e.get(["id"], !1), e, "h").w('"><a href="').f(e.get(["snippet_link"], !1), e, "h").w('" class="').x(e.get(["viewer_eligible"], !1), e, {
                block: n
            }, {}).w('" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "hdln",
                elmt: "up",
                pkgt: "follow_promo",
                pos: a,
                r: o,
                ccode: i
            }).w(">").h("img", e, {}, {
                src: d,
                height: l,
                width: u,
                "class": "rounded-img",
                defer: "0"
            }).w('<div class="strm-img-gradient rounded-img Pos(a) W(100%) H(100%) T(0)"></div></a>').p("td-applet-stream-atomic:item/followable", e, {
                followTeaser: c
            }).w("</li>")
        }

        function r(t, e) {
            return t.w(" Mend(5px)")
        }

        function n(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function a(t, e) {
            return t.f(e.get(["pos"], !1), e, "h")
        }

        function o(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function i(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function d(t, e) {
            return t.f(e.getPath(!1, ["image", "url"]), e, "h")
        }

        function l(t, e) {
            return t.f(e.getPath(!1, ["image", "height"]), e, "h")
        }

        function u(t, e) {
            return t.f(e.getPath(!1, ["image", "width"]), e, "h")
        }

        function c(t, e) {
            return t.f(e.get(["title"], !1), e, "h")
        }

        function p(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function _(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function m(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function f(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }
        return dust.register("td-applet-stream-atomic-templates-item-storyline_upsell", e), e.__dustBody = !0, s.__dustBody = !0, r.__dustBody = !0, n.__dustBody = !0, a.__dustBody = !0, o.__dustBody = !0, i.__dustBody = !0, d.__dustBody = !0, l.__dustBody = !0, u.__dustBody = !0, c.__dustBody = !0, p.__dustBody = !0, _.__dustBody = !0, m.__dustBody = !0, f.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/storyline_upsell.dust"] = dust.cache["td-applet-stream-atomic:item/storyline_upsell"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/storyline_upsell"] = function(t, s) {
        t = t || {}, dust.render(e, t, s)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-item-tdv2_wafer", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.s(e.get(["data"], !1), e, {
                block: a
            }, {}).w("\n")
        }

        function a(t, e) {
            return t.x(e.get(["m_id"], !1), e, {
                block: d
            }, {})
        }

        function d(t, e) {
            return t.x(e.get(["ctrl"], !1), e, {
                block: s
            }, {})
        }

        function s(t, e) {
            return t.w('\n<li class="tdv2slot" data-type="slot">\n    <div class="wafer-fetch"\n        id=').f(e.get(["id"], !1), e, "h").w('\ndata-wf-boundary="tdv2slot"\n        data-wf-trigger="viewport"\n        data-wf-trigger-offset="600 0"\n        data-wf-url="').f(e.get(["xhrPathPrefix"], !1), e, "h").w("?m_id=").f(e.get(["m_id"], !1), e, "h").w("&ctrl=").f(e.get(["ctrl"], !1), e, "h").w("&m_mode=json").s(e.get(["queryParams"], !1), e, {
                block: c
            }, {}).w('"\n    >\n        <div class="fp-pholder-bg">\n            <div class="').f(e.get(["placeholderClass"], !1), e, "h").w('">\n                <div class="fp-ph-title"></div>\n                <div class="fp-ph-block"></div>\n            </div>\n        </div>\n    </div>\n</li>\n')
        }

        function c(t, e) {
            return t.w("&").f(e.getPath(!0, []), e, "h")
        }
        return dust.register("td-applet-stream-atomic-templates-item-tdv2_wafer", e), e.__dustBody = !0, a.__dustBody = !0, d.__dustBody = !0, s.__dustBody = !0, c.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/tdv2_wafer.dust"] = dust.cache["td-applet-stream-atomic:item/tdv2_wafer"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/tdv2_wafer"] = function(t, a) {
        t = t || {}, dust.render(e, t, a)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-item-videoItem", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.s(e.getPath(!1, ["images", "default"]), e, {
                block: a
            }, {}).w("\n")
        }

        function a(t, e) {
            return t.w('<a href="').f(e.get(["link"], !1), e, "h").w('" class="Td(n) Pos(r) D(ib) streamImage js-stream-content-link W(100%) NoLinkColor js-content-viewer rapid-noclick-resp rapidnofollow" ').x(e.get(["tab"], !1), e, {
                block: n
            }, {}).w(' data-uuid="').x(e.get(["cauuid"], !1), e, {
                "else": d,
                block: o
            }, {}).w('" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "img",
                elmt: "ct",
                r: r,
                ccode: c
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: i
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: u
            }, {}).w(">").h("img", e, {}, {
                src: s,
                height: l,
                width: m,
                "class": "W(100%) Mb(8px) BackgroundPic rounded-img"
            }).w('\n<i class="Pos(a) T(100px) D(b) Start(10px) C(#fff) W(24px) H(24px) Ta(c) Bgi($orb) Bgz(24px) Fz(10px) C(#fff) Icon-Fp2 IconCorePlay Pos(r)::b T(5px)::b Start(1px)::b"></i>\n    <h4 class="strm-headline Mb(4px) LineClamp(3,41px) Lh(19px) Fz(15px)">').f(e.get(["title"], !1), e, "h", ["s"]).w("</h4>\n</a>")
        }

        function n(t, e) {
            return t.w('target="_blank"')
        }

        function d(t, e) {
            return t.f(e.get(["id"], !1), e, "h")
        }

        function o(t, e) {
            return t.f(e.get(["cauuid"], !1), e, "h")
        }

        function r(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function c(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function i(t, e) {
            return t.w('rel="nofollow"')
        }

        function u(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function s(t, e) {
            return t.f(e.get(["url"], !1), e, "h")
        }

        function l(t, e) {
            return t.f(e.get(["height"], !1), e, "h")
        }

        function m(t, e) {
            return t.f(e.get(["width"], !1), e, "h")
        }
        return dust.register("td-applet-stream-atomic-templates-item-videoItem", e), e.__dustBody = !0, a.__dustBody = !0, n.__dustBody = !0, d.__dustBody = !0, o.__dustBody = !0, r.__dustBody = !0, c.__dustBody = !0, i.__dustBody = !0, u.__dustBody = !0, s.__dustBody = !0, l.__dustBody = !0, m.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/videoItem.dust"] = dust.cache["td-applet-stream-atomic:item/videoItem"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/videoItem"] = function(t, a) {
        t = t || {}, dust.render(e, t, a)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-item-video_hero", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('<div class="Pos(r) Wow(bw) Cf Mih(228px) Pstart(401px) ').x(e.get(["actionsEnabled"], !1), e, {
                block: n
            }, {}).w('"><div class="Pos(a) T(0) Start(0) W(401px) js-stream-content-img rounded-img Bd Td(n)"><div class="D(b) Pb(56.25%) H(a) W(100%) Bgc(#222) js-video-target js-video-image" ').x(e.getPath(!1, ["config", "ads", "yvap"]), e, {
                block: a
            }, {}).w(" ").x(e.getPath(!1, ["config", "ads", "deleteYvapCookie"]), e, {
                block: o
            }, {}).w("></div>").p("td-applet-stream-atomic:item/play_icon", e, {}).w('</div>\n    <div class="Pstart(25px)">').x(e.get(["storyLabel"], !1), e, {
                block: r
            }, {}).w('\n<h3 class="Mb(6px) LineClamp(4,5em)! Lh(21px) Fz(19px)">\n            <a ').x(e.get(["rdSigLink"], !1), e, {
                "else": l,
                block: g
            }, {}).w(' class="').nx(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: f
            }, {}).w(" O(n):f C($m_blue):f js-stream-content-link").x(e.get(["viewer_eligible"], !1), e, {
                block: h
            }, {}).w(' js-stream-item-title js-content-title C($link) C($m_blue):h Td(n) Fz(17px) Fw(b)" ').x(e.get(["tab"], !1), e, {
                block: w
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                elm: "hdln",
                elmt: "ct",
                r: m,
                ccode: b
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: y
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: k
            }, {}).w("><span>").f(e.get(["title"], !1), e, "h", ["s"]).w('</span><u class="Pos(a) T(0) Start(0) W(100%) H(100%) ').x(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: x
            }, {}).w('"></u></a>\n        </h3>\n        ').x(e.get(["summary"], !1), e, {
                block: B
            }, {}).w("\n").nx(e.getPath(!1, ["config", "ui", "publisher_headline"]), e, {
                block: P
            }, {}).w("\n</div>\n    ").x(e.get(["actionsEnabled"], !1), e, {
                block: L
            }, {}).w("\n</div>\n")
        }

        function n(t, e) {
            return t.w(" Pend(30px)")
        }

        function a(t, e) {
            return t.w(' data-yvap="').f(e.getPath(!1, ["config", "ads", "yvap"]), e, "h").w('"')
        }

        function o(t, e) {
            return t.w('data-delete-yvap-cookie="').f(e.getPath(!1, ["config", "ads", "deleteYvapCookie"]), e, "h").w('"')
        }

        function r(t, e) {
            return t.w('<div class="js-content-label C(c_').s(e.get(["categoryLabel"], !1), e, {
                "else": s,
                block: i
            }, {}).w(') Tt(c) Fw(b) Mb(6px) Lh(12px) Fz(13px)"').s(e.get(["categoryLabel"], !1), e, {
                block: d
            }, {}).w("><span>").f(e.get(["storyLabel"], !1), e, "h", ["s"]).w("</span>").x(e.getPath(!1, ["config", "ui", "publisher_headline"]), e, {
                block: c
            }, {}).w("</div>\n            ")
        }

        function s(t, e) {
            return t.f(e.get(["property"], !1), e, "h")
        }

        function i(t, e) {
            return t.f(e.getPath(!0, []), e, "h")
        }

        function d(t, e) {
            return t.w(' data-cat-label="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function c(t, e) {
            return t.s(e.get(["publisher"], !1), e, {
                block: u
            }, {})
        }

        function u(t, e) {
            return t.w('<span class="Fz(11px) Td(n) C(gray_dark) Fw(n) D(ib) Mt(4px) Mstart(9px)"> ').f(e.getPath(!0, []), e, "h", ["s"]).w("</span>")
        }

        function l(t, e) {
            return t.x(e.get(["previewLink"], !1), e, {
                "else": _,
                block: p
            }, {})
        }

        function _(t, e) {
            return t.w('href="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function p(t, e) {
            return t.w('href="').f(e.get(["previewLink"], !1), e, "h").w('" data-share-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function g(t, e) {
            return t.w('href="').f(e.get(["rdSigLink"], !1), e, "h").w('" data-orig-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function f(t, e) {
            return t.w("Pos(r)")
        }

        function h(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function w(t, e) {
            return t.w('target="_blank"')
        }

        function m(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function b(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function y(t, e) {
            return t.w('rel="nofollow"')
        }

        function k(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function x(t, e) {
            return t.w("strm-stretch")
        }

        function B(t, e) {
            return t.w('<p class="').nx(e.getPath(!1, ["config", "ui", "big_click_target"]), e, {
                block: v
            }, {}).w(' stream-summary M(0) LineClamp(4,5.2em)! Lh(17px) C($gray) Bfv(h)">').f(e.get(["summary"], !1), e, "h", ["s"]).w("</p>")
        }

        function v(t, e) {
            return t.w("Pos(r)")
        }

        function P(t, e) {
            return t.s(e.get(["publisher"], !1), e, {
                block: C
            }, {})
        }

        function C(t, e) {
            return t.w('<span class="Fz(11px) Td(n) C(gray_dark) Fw(n) D(ib) Mt(6px)">').f(e.getPath(!0, []), e, "h", ["s"]).w("</span>")
        }

        function L(t, e) {
            return t.w('<div class="Pos(a) End(0) T(0) W(30px) Mstart(12px) Mend(2px) Ta(end)">').p(T, e, {}).w("</div>")
        }

        function T(t, e) {
            return t.f(e.getPath(!1, ["config", "template", "drawer_action"]), e, "h")
        }
        return dust.register("td-applet-stream-atomic-templates-item-video_hero", e), e.__dustBody = !0, n.__dustBody = !0, a.__dustBody = !0, o.__dustBody = !0, r.__dustBody = !0, s.__dustBody = !0, i.__dustBody = !0, d.__dustBody = !0, c.__dustBody = !0, u.__dustBody = !0, l.__dustBody = !0, _.__dustBody = !0, p.__dustBody = !0, g.__dustBody = !0, f.__dustBody = !0, h.__dustBody = !0, w.__dustBody = !0, m.__dustBody = !0, b.__dustBody = !0, y.__dustBody = !0, k.__dustBody = !0, x.__dustBody = !0, B.__dustBody = !0, v.__dustBody = !0, P.__dustBody = !0, C.__dustBody = !0, L.__dustBody = !0, T.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/video_hero.dust"] = dust.cache["td-applet-stream-atomic:item/video_hero"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/video_hero"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-item-play_icon"]
});
YUI.add("td-applet-stream-atomic-templates-item-video_playlist", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.s(e.get(["data"], !1), e, {
                block: a
            }, {})
        }

        function a(t, e) {
            return t.w('\n<li class="js-stream-content item" data-type="slot">\n    ').x(e.get(["videoRatio"], !1), e, {
                block: i
            }, {}).w('\n<div id="featured-video" class="featuredvideo Pb(20px) My(10px) BdY Bdc(#e5e6e9)"\n        data-uuid="').f(e.getPath(!1, ["videoConfig", "playlist", "id"]), e, "h").w('"\n        data-type="video"\n        data-play-only-in-viewport=true\n        data-video-playlist-pos="right"\n        data-video-cfg="').f(e.get(["videoConfig"], !1), e, "h", ["js"]).w('">\n            <h3 class="Fz(15px) Py(16px)">').f(e.get(["title"], !1), e, "h").w('</h3>\n            <div class="js-video-target" data-yvap="').f(e.get(["yvapConfig"], !1), e, "h", ["js"]).w('" data-delete-yvap-cookie="yvapF">\n                <img src="').f(e.get(["image"], !1), e, "h").w('" title="').f(e.get(["title"], !1), e, "h").w('" alt="').f(e.get(["title"], !1), e, "h").w('" width="100%">\n            </div>\n            <a href="javascript:void(0);" class="js-stream-content-link rapid-noclick-resp rapidnofollow" aria-hidden="true" data-ylk="').f(e.get(["i13n"], !1), e, "h").w('"></a>\n    </div>\n</li>\n')
        }

        function i(t, e) {
            return t.w("\n<style>\n        .js-stream-content #featured-video .js-player-container {\n            padding-bottom: ").f(e.get(["videoRatio"], !1), e, "h").w(";\n        }\n    </style>\n    ")
        }
        return dust.register("td-applet-stream-atomic-templates-item-video_playlist", e), e.__dustBody = !0, a.__dustBody = !0, i.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/video_playlist.dust"] = dust.cache["td-applet-stream-atomic:item/video_playlist"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/video_playlist"] = function(t, a) {
        t = t || {}, dust.render(e, t, a)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-item-vv_banner", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.s(e.get(["isOrb"], !1), e, {
                "else": a,
                block: s
            }, {}).w("\n")
        }

        function a(t, e) {
            return t.w('\n<i class="vv-banner vv-icon Pos(a) ').x(e.get(["isNtk"], !1), e, {
                "else": n,
                block: c
            }, {}).w(' Bgi(vv_icon_bg) C(#fff) Fz(1.1rem) D(b) Bgr(nr) Bgz(15px) W(15px) H(18px)"></i>\n')
        }

        function n(t, e) {
            return t.w("Start(0) Z(2) B(15px) Mstart(50px)")
        }

        function c(t, e) {
            return t.w("B(17px) End(17px) Op(0.3) Z(2)")
        }

        function s(t, e) {
            return t.w('\n<div class="vv-banner vv-icon action-icons-sm Pos(a) T(30px) Start(30px) T(20px)--maw370 Start(20px)--maw370 W(40px) H(40px) Ta(c) Va(m) C(#fff) Bdrs(46.5%)">\n        <i class="Bgi(vv_icon_bg) D(b) W(100%) H(100%) Bgr(nr) Bgp(c) Bgz(15px) T(30px)"></i>\n    </div>\n')
        }
        return dust.register("td-applet-stream-atomic-templates-item-vv_banner", e), e.__dustBody = !0, a.__dustBody = !0, n.__dustBody = !0, c.__dustBody = !0, s.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/vv_banner.dust"] = dust.cache["td-applet-stream-atomic:item/vv_banner"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/vv_banner"] = function(t, a) {
        t = t || {}, dust.render(e, t, a)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-item-vv_banner_sm", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.s(e.get(["isOrb"], !1), e, {
                "else": a,
                block: c
            }, {}).w("\n")
        }

        function a(t, e) {
            return t.w('\n<i class="vv-banner vv-icon Pos(a) ').x(e.get(["isNtk"], !1), e, {
                "else": n,
                block: s
            }, {}).w(' Bgi(vv_icon_bg) C(#fff) Fz(1.1rem) D(b) Bgr(nr) Bgz(15px) W(15px) H(18px)"></i>\n')
        }

        function n(t, e) {
            return t.w("Start(0) Z(2) B(15px) Mstart(50px)")
        }

        function s(t, e) {
            return t.w("B(17px) End(17px) Op(0.3) Z(2)")
        }

        function c(t, e) {
            return t.w('\n<div class="vv-banner vv-icon action-icons-sm Pos(a) T(30px) Start(30px) T(20px)--maw370 Start(20px)--maw370 W(40px) H(40px) Ta(c) Va(m) C(#fff) Bdrs(46.5%)">\n        <i class="Bgi(vv_icon_bg) D(b) W(100%) H(100%) Bgr(nr) Bgp(c) Bgz(15px) T(30px)"></i>\n    </div>\n')
        }
        return dust.register("td-applet-stream-atomic-templates-item-vv_banner_sm", e), e.__dustBody = !0, a.__dustBody = !0, n.__dustBody = !0, s.__dustBody = !0, c.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:item/vv_banner_sm.dust"] = dust.cache["td-applet-stream-atomic:item/vv_banner_sm"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/item/vv_banner_sm"] = function(t, a) {
        t = t || {}, dust.render(e, t, a)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-items", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.s(e.get(["stream_items"], !1), e, {
                block: n
            }, {}).w("\n")
        }

        function n(t, e) {
            return t.h("ne", e, {
                block: u
            }, {
                key: e.get(["type"], !1),
                value: "embed"
            })
        }

        function u(t, e) {
            return t.x(e.get(["full_template"], !1), e, {
                "else": o,
                block: st
            }, {}).w("\n")
        }

        function o(t, e) {
            return t.w('\n<li data-temp="').f(e.get(["template"], !1), e, "h").w('" ').x(e.getPath(!1, ["config", "yaftTrackingEnabled"]), e, {
                block: d
            }, {}).w(' class="js-stream-content Pos(r) ').x(e.get(["storyline"], !1), e, {
                block: i
            }, {}).x(e.get(["clusterUuids"], !1), e, {
                block: a
            }, {}).w(" Bxz(bb) Bgc(#fff) Mx(a) Mt(-1px)").h("eq", e, {
                block: s
            }, {
                key: c,
                value: "featured"
            }).s(e.getPath(!1, ["config", "ui", "userintent_discover_index"]), e, {
                block: f
            }, {}).x(e.get(["saved"], !1), e, {
                block: y
            }, {}).x(e.get(["liked"], !1), e, {
                block: h
            }, {}).x(e.get(["newItem"], !1), e, {
                block: w
            }, {}).x(e.get(["onboarding"], !1), e, {
                block: p
            }, {}).w(" ").f(e.get(["debugClass"], !1), e, "h").w('"').s(e.get(["interestString"], !1), e, {
                block: m
            }, {}).x(e.get(["off_network"], !1), e, {
                block: b
            }, {}).w(' data-uuid="').x(e.get(["cauuid"], !1), e, {
                "else": B,
                block: k
            }, {}).w('"').s(e.get(["cauuid"], !1), e, {
                block: x
            }, {}).x(e.get(["pkg_video_id"], !1), e, {
                "else": v,
                block: j
            }, {}).w(' data-type="').f(e.get(["type"], !1), e, "h").w('"').s(e.get(["typeFeature"], !1), e, {
                block: D
            }, {}).s(e.get(["clusterId"], !1), e, {
                block: V
            }, {}).x(e.get(["clusterUuids"], !1), e, {
                block: C
            }, {}).s(e.get(["hosted_type"], !1), e, {
                block: E
            }, {}).h("eq", e, {
                block: H
            }, {
                key: z,
                value: "payoff"
            }).s(e.getPath(!1, ["config", "ui", "userintent_discover_index"]), e, {
                block: F
            }, {}).h("eq", e, {
                block: $
            }, {
                key: J,
                value: "video"
            }).w(">").x(e.getPath(!1, ["config", "ui", "userintent_enabled"]), e, {
                block: L
            }, {}).w('<div class="js-stream-item-wrap Pos(r) ').x(e.get(["publisher_id"], !1), e, {
                block: nt
            }, {}).w(" ").x(e.get(["template"], !1), e, {
                block: ut
            }, {}).w('">').x(e.get(["template"], !1), e, {
                block: rt
            }, {}).x(e.get(["streamDebug"], !1), e, {
                block: at
            }, {}).w("\n</li>\n    ")
        }

        function d(t, e) {
            return t.s(e.getPath(!1, ["i13n", "cpos"]), e, {
                block: r
            }, {})
        }

        function r(t, e) {
            return t.w('data-yaft-module="stream_item_').f(e.getPath(!0, []), e, "h").w('"')
        }

        function i(t, e) {
            return t.w("js-stream-cluster ")
        }

        function a(t, e) {
            return t.w("js-fake-cluster ")
        }

        function s(t, e) {
            return t.w(" featured")
        }

        function c(t, e) {
            return t.f(e.get(["template"], !1), e, "h")
        }

        function f(t, e) {
            return t.h("eq", e, {
                block: _
            }, {
                key: l,
                value: g
            })
        }

        function _(t, e) {
            return t.w(" wafer-fetch")
        }

        function l(t, e) {
            return t.f(e.get(["index"], !1), e, "h")
        }

        function g(t, e) {
            return t.f(e.getPath(!0, []), e, "h")
        }

        function y(t, e) {
            return t.w(" js-stream-saved")
        }

        function h(t, e) {
            return t.w(" js-stream-liked")
        }

        function w(t, e) {
            return t.w(" js-stream-new-item")
        }

        function p(t, e) {
            return t.w(" js-stream-onboarding-item js-stream-onboarding-transition")
        }

        function m(t, e) {
            return t.w(' data-interests="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function b(t, e) {
            return t.w(' data-offnet="1"')
        }

        function B(t, e) {
            return t.f(e.get(["id"], !1), e, "h")
        }

        function k(t, e) {
            return t.f(e.get(["cauuid"], !1), e, "h")
        }

        function x(t, e) {
            return t.w(' data-cauuid="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function v(t, e) {
            return t.x(e.getPath(!1, ["config", "ui", "hideVideoTitleOnHover"]), e, {
                block: P
            }, {})
        }

        function P(t, e) {
            return t.h("eq", e, {
                block: T
            }, {
                key: I,
                value: "video"
            })
        }

        function T(t, e) {
            return t.w(' data-video-cfg=\'{"destroyOnError": true, "hideVideoTitleOnHover": true}\'')
        }

        function I(t, e) {
            return t.f(e.get(["type"], !1), e, "h")
        }

        function j(t, e) {
            return t.w(' data-pkg-video-id="').f(e.get(["pkg_video_id"], !1), e, "h").w('" data-video-cfg=\'{"destroyOnError": true,"expName": "NTK"').x(e.getPath(!1, ["config", "ui", "hideVideoTitleOnHover"]), e, {
                block: q
            }, {}).w("}'")
        }

        function q(t, e) {
            return t.h("eq", e, {
                block: O
            }, {
                key: U,
                value: "video"
            })
        }

        function O(t, e) {
            return t.w(',"hideVideoTitleOnHover": true')
        }

        function U(t, e) {
            return t.f(e.get(["type"], !1), e, "h")
        }

        function D(t, e) {
            return t.w(' data-type-feature="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function V(t, e) {
            return t.w(' data-cluster="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function C(t, e) {
            return t.w(' data-cluster-uuids="').f(e.get(["clusterUuids"], !1), e, "h").w('"')
        }

        function E(t, e) {
            return t.w(' data-hosted="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function H(t, e) {
            return t.w(' data-payoff-id="').f(e.get(["payoffId"], !1), e, "h").w('" data-payoff-type="').f(e.get(["payoffType"], !1), e, "h").w('"').x(e.get(["woeId"], !1), e, {
                block: M
            }, {}).x(e.get(["city"], !1), e, {
                block: N
            }, {}).x(e.getPath(!1, ["fav_team", "sportsid"]), e, {
                block: S
            }, {})
        }

        function M(t, e) {
            return t.w(' data-payoff-woeid="').f(e.get(["woeId"], !1), e, "h").w('"')
        }

        function N(t, e) {
            return t.w(' data-payoff-city="').f(e.get(["city"], !1), e, "h").w('"')
        }

        function S(t, e) {
            return t.w(' data-sportsid="').f(e.getPath(!1, ["fav_team", "sportsid"]), e, "h").w('"')
        }

        function z(t, e) {
            return t.f(e.get(["type"], !1), e, "h")
        }

        function F(t, e) {
            return t.h("eq", e, {
                block: K
            }, {
                key: R,
                value: Y
            })
        }

        function K(t, e) {
            return t.w('\ndata-wf-trigger="viewport"\n    data-wf-trigger-offset="-400 0"\n    data-wf-url="').f(e.getPath(!1, ["config", "ui", "userintent_xhr"]), e, "h").w("&ctrl=UserIntentDiscover&config.checkTooltip=true&config.crumb=").f(e.getPath(!1, ["config", "userIntentCrumb"]), e, "h").w('"\n    data-wf-boundary="js-stream-content"\n    data-wf-target=".userintent-tooltip"\n    data-wf-result-selector="[data-reactroot]"\n    ')
        }

        function R(t, e) {
            return t.f(e.get(["index"], !1), e, "h")
        }

        function Y(t, e) {
            return t.f(e.getPath(!0, []), e, "h")
        }

        function $(t, e) {
            return t.s(e.getPath(!1, ["config", "ui", "video_scroll_offset"]), e, {
                block: A
            }, {}).x(e.getPath(!1, ["config", "ui", "video_play_only_in_viewport"]), e, {
                block: G
            }, {})
        }

        function A(t, e) {
            return t.w(' data-offset="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function G(t, e) {
            return t.w(' data-play-only-in-viewport="true"')
        }

        function J(t, e) {
            return t.f(e.get(["type"], !1), e, "h")
        }

        function L(t, e) {
            return t.w('<div class="wafer-fetch stream-confirm-wrap stream-confirm-hide_D(n) Pos(r) Op(0) Trsdu(.2s) Trstf(ei) Trsp($trsp_op) userintent-showless_Op(1)"\n            data-wf-[url]="').f(e.getPath(!1, ["config", "ui", "userintent_xhr"]), e, "h").w("&ctrl=UserIntentConfirm&config.publisher=").f(e.get(["publisher"], !1), e, "h", ["u", "s"]).w("&config.publisherIds=").f(e.get(["publisher_id"], !1), e, "h").w("&config.isMuted=false&config.action=[state.drawer").x(e.get(["cauuid"], !1), e, {
                "else": Q,
                block: W
            }, {}).w("]&config.uuid=").x(e.get(["cauuid"], !1), e, {
                "else": X,
                block: Z
            }, {}).w("&config.isSignedIn=").f(e.getPath(!1, ["config", "signed_in"]), e, "h").w("&config.crumb=").f(e.getPath(!1, ["config", "crumb"]), e, "h").w('"\n            data-wf-type="tdv1"\n            data-wf-boundary="js-stream-content"\n            data-wf-result-selector="[data-reactroot]"\n            data-wf-trigger="stateChange"\n            data-wf-target="li[data-uuid=\'').x(e.get(["cauuid"], !1), e, {
                "else": tt,
                block: et
            }, {}).w("']\"></div>")
        }

        function Q(t, e) {
            return t.f(e.get(["id"], !1), e, "h")
        }

        function W(t, e) {
            return t.f(e.get(["cauuid"], !1), e, "h")
        }

        function X(t, e) {
            return t.f(e.get(["id"], !1), e, "h")
        }

        function Z(t, e) {
            return t.f(e.get(["cauuid"], !1), e, "h")
        }

        function tt(t, e) {
            return t.f(e.get(["id"], !1), e, "h")
        }

        function et(t, e) {
            return t.f(e.get(["cauuid"], !1), e, "h")
        }

        function nt(t, e) {
            return t.w("userintent-showless_D(n)")
        }

        function ut(t, e) {
            return t.h("eq", e, {
                "else": ot,
                block: dt
            }, {
                key: e.get(["template"], !1),
                value: "filmstrip"
            })
        }

        function ot(t, e) {
            return t.w("Py(12px)")
        }

        function dt(t, e) {
            return t.w("Pt(12px) Pb(17px)")
        }

        function rt(t, e) {
            return t.p(it, e, {})
        }

        function it(t, e) {
            return t.w("td-applet-stream-atomic:item/").f(e.get(["template"], !1), e, "h")
        }

        function at(t, e) {
            return t.p("td-applet-stream-atomic:debug", e, {})
        }

        function st(t, e) {
            return t.p(ct, e, {}).x(e.get(["streamDebug"], !1), e, {
                block: ft
            }, {})
        }

        function ct(t, e) {
            return t.w("td-applet-stream-atomic:item/").f(e.get(["full_template"], !1), e, "h")
        }

        function ft(t, e) {
            return t.p("td-applet-stream-atomic:debug", e, {})
        }
        return dust.register("td-applet-stream-atomic-templates-items", e), e.__dustBody = !0, n.__dustBody = !0, u.__dustBody = !0, o.__dustBody = !0, d.__dustBody = !0, r.__dustBody = !0, i.__dustBody = !0, a.__dustBody = !0, s.__dustBody = !0, c.__dustBody = !0, f.__dustBody = !0, _.__dustBody = !0, l.__dustBody = !0, g.__dustBody = !0, y.__dustBody = !0, h.__dustBody = !0, w.__dustBody = !0, p.__dustBody = !0, m.__dustBody = !0, b.__dustBody = !0, B.__dustBody = !0, k.__dustBody = !0, x.__dustBody = !0, v.__dustBody = !0, P.__dustBody = !0, T.__dustBody = !0, I.__dustBody = !0, j.__dustBody = !0, q.__dustBody = !0, O.__dustBody = !0, U.__dustBody = !0, D.__dustBody = !0, V.__dustBody = !0, C.__dustBody = !0, E.__dustBody = !0, H.__dustBody = !0, M.__dustBody = !0, N.__dustBody = !0, S.__dustBody = !0, z.__dustBody = !0, F.__dustBody = !0, K.__dustBody = !0, R.__dustBody = !0, Y.__dustBody = !0, $.__dustBody = !0, A.__dustBody = !0, G.__dustBody = !0, J.__dustBody = !0, L.__dustBody = !0, Q.__dustBody = !0, W.__dustBody = !0, X.__dustBody = !0, Z.__dustBody = !0, tt.__dustBody = !0, et.__dustBody = !0, nt.__dustBody = !0, ut.__dustBody = !0, ot.__dustBody = !0, dt.__dustBody = !0, rt.__dustBody = !0, it.__dustBody = !0, at.__dustBody = !0, st.__dustBody = !0, ct.__dustBody = !0, ft.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:items.dust"] = dust.cache["td-applet-stream-atomic:items"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/items"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-debug"]
});
YUI.add("td-applet-stream-atomic-templates-items_sm", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.s(e.get(["stream_items"], !1), e, {
                block: u
            }, {}).w("\n")
        }

        function u(t, e) {
            return t.h("ne", e, {
                block: d
            }, {
                key: e.get(["type"], !1),
                value: "embed"
            })
        }

        function d(t, e) {
            return t.x(e.get(["full_template"], !1), e, {
                "else": o,
                block: S
            }, {}).w("\n")
        }

        function o(t, e) {
            return t.h("eq", e, {
                "else": a,
                block: U
            }, {
                key: R,
                value: "darla_ad_placeholder"
            })
        }

        function a(t, e) {
            return t.w('<li data-temp="').f(e.get(["template"], !1), e, "h").w('" class="js-stream-content item ').h("eq", e, {
                block: n
            }, {
                key: s,
                value: "reactions_slot_sm"
            }).h("eq", e, {
                block: r
            }, {
                key: c,
                value: "ntk_sm"
            }).x(e.get(["topRatedComments"], !1), e, {
                block: i
            }, {}).x(e.get(["saved"], !1), e, {
                block: _
            }, {}).x(e.get(["liked"], !1), e, {
                block: f
            }, {}).x(e.get(["newItem"], !1), e, {
                block: l
            }, {}).x(e.get(["onboarding"], !1), e, {
                block: m
            }, {}).w(" ").f(e.get(["debugClass"], !1), e, "h").w('"').s(e.get(["interestString"], !1), e, {
                block: p
            }, {}).x(e.get(["off_network"], !1), e, {
                block: y
            }, {}).w(' data-uuid="').x(e.get(["cauuid"], !1), e, {
                "else": g,
                block: w
            }, {}).w('"').s(e.get(["cauuid"], !1), e, {
                block: h
            }, {}).w(' data-type="').f(e.get(["type"], !1), e, "h").w('"').s(e.get(["clusterId"], !1), e, {
                block: b
            }, {}).x(e.get(["clusterUuids"], !1), e, {
                block: B
            }, {}).s(e.get(["hosted_type"], !1), e, {
                block: k
            }, {}).h("eq", e, {
                block: x
            }, {
                key: P,
                value: "payoff"
            }).w(">").x(e.get(["template"], !1), e, {
                block: q
            }, {}).x(e.get(["streamDebug"], !1), e, {
                block: D
            }, {}).w("</li>")
        }

        function n(t, e) {
            return t.w("item-card ")
        }

        function s(t, e) {
            return t.f(e.get(["template"], !1), e, "h")
        }

        function r(t, e) {
            return t.w(" W(a)! D(b)! ntk-item ")
        }

        function c(t, e) {
            return t.f(e.get(["template"], !1), e, "h")
        }

        function i(t, e) {
            return t.w(" top-cmmts")
        }

        function _(t, e) {
            return t.w(" js-stream-saved")
        }

        function f(t, e) {
            return t.w(" js-stream-liked")
        }

        function l(t, e) {
            return t.w(" js-stream-new-item")
        }

        function m(t, e) {
            return t.w(" js-stream-onboarding-item js-stream-onboarding-transition")
        }

        function p(t, e) {
            return t.w(' data-interests="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function y(t, e) {
            return t.w(' data-offnet="1"')
        }

        function g(t, e) {
            return t.f(e.get(["id"], !1), e, "h")
        }

        function w(t, e) {
            return t.f(e.get(["cauuid"], !1), e, "h")
        }

        function h(t, e) {
            return t.w(' data-cauuid="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function b(t, e) {
            return t.w(' data-cluster="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function B(t, e) {
            return t.w(' data-cluster-uuids="').f(e.get(["clusterUuids"], !1), e, "h").w('"')
        }

        function k(t, e) {
            return t.w(' data-hosted="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function x(t, e) {
            return t.w(' data-payoff-id="').f(e.get(["payoffId"], !1), e, "h").w('" data-payoff-type="').f(e.get(["payoffType"], !1), e, "h").w('"').x(e.get(["woeId"], !1), e, {
                block: v
            }, {}).x(e.get(["city"], !1), e, {
                block: I
            }, {}).x(e.getPath(!1, ["fav_team", "sportsid"]), e, {
                block: j
            }, {})
        }

        function v(t, e) {
            return t.w(' data-payoff-woeid="').f(e.get(["woeId"], !1), e, "h").w('"')
        }

        function I(t, e) {
            return t.w(' data-payoff-city="').f(e.get(["city"], !1), e, "h").w('"')
        }

        function j(t, e) {
            return t.w(' data-sportsid="').f(e.getPath(!1, ["fav_team", "sportsid"]), e, "h").w('"')
        }

        function P(t, e) {
            return t.f(e.get(["type"], !1), e, "h")
        }

        function q(t, e) {
            return t.p(T, e, {})
        }

        function T(t, e) {
            return t.w("td-applet-stream-atomic:item/").f(e.get(["template"], !1), e, "h")
        }

        function D(t, e) {
            return t.p("td-applet-stream-atomic:debug", e, {})
        }

        function U(t, e) {
            return t.p(C, e, {})
        }

        function C(t, e) {
            return t.w("td-applet-stream-atomic:item/").f(e.get(["template"], !1), e, "h")
        }

        function R(t, e) {
            return t.f(e.get(["template"], !1), e, "h")
        }

        function S(t, e) {
            return t.p(E, e, {}).x(e.get(["streamDebug"], !1), e, {
                block: N
            }, {})
        }

        function E(t, e) {
            return t.w("td-applet-stream-atomic:item/").f(e.get(["full_template"], !1), e, "h")
        }

        function N(t, e) {
            return t.p("td-applet-stream-atomic:debug", e, {})
        }
        return dust.register("td-applet-stream-atomic-templates-items_sm", e), e.__dustBody = !0, u.__dustBody = !0, d.__dustBody = !0, o.__dustBody = !0, a.__dustBody = !0, n.__dustBody = !0, s.__dustBody = !0, r.__dustBody = !0, c.__dustBody = !0, i.__dustBody = !0, _.__dustBody = !0, f.__dustBody = !0, l.__dustBody = !0, m.__dustBody = !0, p.__dustBody = !0, y.__dustBody = !0, g.__dustBody = !0, w.__dustBody = !0, h.__dustBody = !0, b.__dustBody = !0, B.__dustBody = !0, k.__dustBody = !0, x.__dustBody = !0, v.__dustBody = !0, I.__dustBody = !0, j.__dustBody = !0, P.__dustBody = !0, q.__dustBody = !0, T.__dustBody = !0, D.__dustBody = !0, U.__dustBody = !0, C.__dustBody = !0, R.__dustBody = !0, S.__dustBody = !0, E.__dustBody = !0, N.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:items_sm.dust"] = dust.cache["td-applet-stream-atomic:items_sm"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/items_sm"] = function(t, u) {
        t = t || {}, dust.render(e, t, u)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-debug"]
});
YUI.add("td-applet-stream-atomic-templates-items_tb", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.s(e.get(["stream_items"], !1), e, {
                block: u
            }, {})
        }

        function u(t, e) {
            return t.h("ne", e, {
                block: d
            }, {
                key: e.get(["type"], !1),
                value: "embed"
            })
        }

        function d(t, e) {
            return t.x(e.get(["full_template"], !1), e, {
                "else": n,
                block: P
            }, {}).w("\n")
        }

        function n(t, e) {
            return t.h("eq", e, {
                "else": a,
                block: x
            }, {
                key: I,
                value: "darla_ad_placeholder"
            })
        }

        function a(t, e) {
            return t.w('<li data-temp="').f(e.get(["template"], !1), e, "h").w('" class="js-stream-content item').h("eq", e, {
                block: o
            }, {
                key: s,
                value: "reactions_slot_tb"
            }).x(e.get(["topRatedComments"], !1), e, {
                block: r
            }, {}).x(e.get(["liked"], !1), e, {
                block: c
            }, {}).x(e.get(["newItem"], !1), e, {
                block: i
            }, {}).x(e.get(["onboarding"], !1), e, {
                block: _
            }, {}).w(" ").f(e.get(["debugClass"], !1), e, "h").w('"').s(e.get(["interestString"], !1), e, {
                block: l
            }, {}).x(e.get(["off_network"], !1), e, {
                block: m
            }, {}).w(' data-uuid="').x(e.get(["cauuid"], !1), e, {
                "else": f,
                block: p
            }, {}).w('"').s(e.get(["cauuid"], !1), e, {
                block: g
            }, {}).w(' data-type="').f(e.get(["type"], !1), e, "h").w('"').s(e.get(["clusterId"], !1), e, {
                block: b
            }, {}).x(e.get(["clusterUuids"], !1), e, {
                block: y
            }, {}).s(e.get(["hosted_type"], !1), e, {
                block: h
            }, {}).w(">").x(e.get(["template"], !1), e, {
                block: w
            }, {}).x(e.get(["streamDebug"], !1), e, {
                block: k
            }, {}).w("</li>")
        }

        function o(t, e) {
            return t.w("item-card ")
        }

        function s(t, e) {
            return t.f(e.get(["template"], !1), e, "h")
        }

        function r(t, e) {
            return t.w(" top-cmmts")
        }

        function c(t, e) {
            return t.w(" js-stream-liked")
        }

        function i(t, e) {
            return t.w(" js-stream-new-item")
        }

        function _(t, e) {
            return t.w(" js-stream-onboarding-item js-stream-onboarding-transition")
        }

        function l(t, e) {
            return t.w(' data-interests="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function m(t, e) {
            return t.w(' data-offnet="1"')
        }

        function f(t, e) {
            return t.f(e.get(["id"], !1), e, "h")
        }

        function p(t, e) {
            return t.f(e.get(["cauuid"], !1), e, "h")
        }

        function g(t, e) {
            return t.w(' data-cauuid="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function b(t, e) {
            return t.w(' data-cluster="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function y(t, e) {
            return t.w(' data-cluster-uuids="').f(e.get(["clusterUuids"], !1), e, "h").w('"')
        }

        function h(t, e) {
            return t.w(' data-hosted="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function w(t, e) {
            return t.p(B, e, {})
        }

        function B(t, e) {
            return t.w("td-applet-stream-atomic:item/").f(e.get(["template"], !1), e, "h")
        }

        function k(t, e) {
            return t.p("td-applet-stream-atomic:debug", e, {})
        }

        function x(t, e) {
            return t.p(j, e, {})
        }

        function j(t, e) {
            return t.w("td-applet-stream-atomic:item/").f(e.get(["template"], !1), e, "h")
        }

        function I(t, e) {
            return t.f(e.get(["template"], !1), e, "h")
        }

        function P(t, e) {
            return t.p(q, e, {}).x(e.get(["streamDebug"], !1), e, {
                block: v
            }, {})
        }

        function q(t, e) {
            return t.w("td-applet-stream-atomic:item/").f(e.get(["full_template"], !1), e, "h")
        }

        function v(t, e) {
            return t.p("td-applet-stream-atomic:debug", e, {})
        }
        return dust.register("td-applet-stream-atomic-templates-items_tb", e), e.__dustBody = !0, u.__dustBody = !0, d.__dustBody = !0, n.__dustBody = !0, a.__dustBody = !0, o.__dustBody = !0, s.__dustBody = !0, r.__dustBody = !0, c.__dustBody = !0, i.__dustBody = !0, _.__dustBody = !0, l.__dustBody = !0, m.__dustBody = !0, f.__dustBody = !0, p.__dustBody = !0, g.__dustBody = !0, b.__dustBody = !0, y.__dustBody = !0, h.__dustBody = !0, w.__dustBody = !0, B.__dustBody = !0, k.__dustBody = !0, x.__dustBody = !0, j.__dustBody = !0, I.__dustBody = !0, P.__dustBody = !0, q.__dustBody = !0, v.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:items_tb.dust"] = dust.cache["td-applet-stream-atomic:items_tb"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/items_tb"] = function(t, u) {
        t = t || {}, dust.render(e, t, u)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-debug"]
});
YUI.add("td-applet-stream-atomic-templates-main", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w("\n<div").x(e.getPath(!1, ["config", "ui", "viewer"]), e, {
                block: n
            }, {}).w(">\n    ").x(e.get(["breakingNewsBarData"], !1), e, {
                block: a
            }, {}).w("\n").s(e.getPath(!1, ["data", "stream"]), e, {
                block: o
            }, {})
        }

        function n(t, e) {
            return t.w(' data-uuid-list="').f(e.get(["guid"], !1), e, "h").w('"')
        }

        function a(t, e) {
            return t.w("\n").p("td-applet-stream-atomic:breaking_news", e, {}).w("\n")
        }

        function o(t, e) {
            return t.w("\n").x(e.getPath(!1, ["config", "ui", "stream_title"]), e, {
                block: i
            }, {}).w('\n<ul class="').x(e.getPath(!1, ["config", "ui", "fixed_layout"]), e, {
                block: r
            }, {}).w(" js-stream-tmpl-").f(e.getPath(!1, ["config", "ui", "item_template"]), e, "h").w(" ").f(e.getPath(!1, ["config", "ui", "template_label"]), e, "h").w(" ").nx(e.getPath(!1, ["config", "ui", "first_featured_treatment"]), e, {
                block: u
            }, {}).w(" ").x(e.getPath(!1, ["config", "ui", "enable_hovercolor"]), e, {
                block: s
            }, {}).w(" My(0) Mb(0) Wow(bw) streamv2 ").x(e.getPath(!1, ["config", "ui", "video_stream_treatment"]), e, {
                block: c
            }, {}).w('" id="Stream" ').x(e.getPath(!1, ["config", "ui", "video_stream_treatment"]), e, {
                block: d
            }, {}).w(">\n    ").x(e.get(["stream_items"], !1), e, {
                "else": m,
                block: l
            }, {}).w("\n</ul>\n</div>\n").x(e.getPath(!1, ["config", "pagination"]), e, {
                block: f
            }, {}).w("\n")
        }

        function i(t, e) {
            return t.w('\n<h3 class="Fz(16px) Fw(b) C(#000) Pt(15px) Lh(18px) Mstart(40px) Mb(10px)">\n          ').f(e.getPath(!1, ["config", "ui", "stream_title"]), e, "h").w("\n</h3>\n    ")
        }

        function r(t, e) {
            return t.w("strm-fixed-layout")
        }

        function u(t, e) {
            return t.w("Px(20px)")
        }

        function s(t, e) {
            return t.w("js-stream-hover-enable")
        }

        function c(t, e) {
            return t.w("Mx(30px)")
        }

        function d(t, e) {
            return t.w(' data-uuid-list="videoWatch"')
        }

        function m(t, e) {
            return t.w("\n").p("errormsg", e, {}).w("\n")
        }

        function l(t, e) {
            return t.w("\n").p(_, e, {}).w("\n")
        }

        function _(t, e) {
            return t.f(e.getPath(!1, ["config", "ui", "item_template"]), e, "h")
        }

        function f(t, e) {
            return t.x(e.get(["more"], !1), e, {
                block: g
            }, {})
        }

        function g(t, e) {
            return t.w("\n").h("img", e, {}, {
                src: "https://s.yimg.com/zz/nn/lib/metro/g/my/anim_loading_sm.gif",
                width: "16",
                height: "16",
                "class": "D(b) Mx(a) My(12px) js-stream-load-more"
            }).w("\n").h("eq", e, {
                block: p
            }, {
                key: h,
                value: "0"
            }).w("\n")
        }

        function p(t, e) {
            return t.w('<button class="Btn W(100%) Mt(2px) Mb(0) Py(10px) Bgc(#f3effa) C(#6e329d) js-stream-load-btn" style="border-color:#cfcee3;box-shadow:0 0 6px 0 #d9d9d9;">').h("i18n_string", e, {}, {
                _key: "LOAD_MORE"
            }).w("</button>")
        }

        function h(t, e) {
            return t.f(e.getPath(!1, ["config", "ui", "scrollbuffer"]), e, "h")
        }
        return dust.register("td-applet-stream-atomic-templates-main", e), e.__dustBody = !0, n.__dustBody = !0, a.__dustBody = !0, o.__dustBody = !0, i.__dustBody = !0, r.__dustBody = !0, u.__dustBody = !0, s.__dustBody = !0, c.__dustBody = !0, d.__dustBody = !0, m.__dustBody = !0, l.__dustBody = !0, _.__dustBody = !0, f.__dustBody = !0, g.__dustBody = !0, p.__dustBody = !0, h.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:main.dust"] = dust.cache["td-applet-stream-atomic:main"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/main"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-breaking_news", "td-applet-stream-atomic-templates-errormsg"]
});
YUI.add("td-applet-stream-atomic-templates-main_sm", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w("\n\n<div").x(e.getPath(!1, ["config", "ui", "viewer"]), e, {
                block: a
            }, {}).w(">\n    ").x(e.get(["breakingNewsBarData"], !1), e, {
                block: n
            }, {}).w("\n").s(e.getPath(!1, ["data", "stream"]), e, {
                block: s
            }, {})
        }

        function a(t, e) {
            return t.w(' data-uuid-list="').f(e.get(["guid"], !1), e, "h").w('"')
        }

        function n(t, e) {
            return t.w("\n").p("td-applet-stream-atomic:breaking_news", e, {}).w("\n")
        }

        function s(t, e) {
            return t.w("\n").x(e.getPath(!1, ["config", "ui", "highlander_2017_enabled"]), e, {
                block: m
            }, {}).w("\n").x(e.get(["video_card"], !1), e, {
                block: i
            }, {}).w('\n<div id="xfpad_custom"></div>\n    <ul class="streamv2 stream-cards My(0) Mb(0) Ov(h) Py(1px) Bg(#fff)js-stream-tmpl-').f(e.getPath(!1, ["config", "ui", "item_template"]), e, "h").w(" ").f(e.getPath(!1, ["config", "ui", "template_label"]), e, "h").w('" id="Stream">\n    ').x(e.get(["stream_items"], !1), e, {
                "else": r,
                block: c
            }, {}).w("\n</ul>\n</div>\n").x(e.getPath(!1, ["config", "pagination"]), e, {
                block: o
            }, {}).w("\n")
        }

        function m(t, e) {
            return t.w("\n").p("td-applet-stream-atomic:ntk_carousel", e, {}).w("\n")
        }

        function i(t, e) {
            return t.w("\n").p("td-applet-stream-atomic:item/nfl_card_sm", e, {}).w("\n")
        }

        function r(t, e) {
            return t.w("\n").p("errormsg", e, {}).w("\n")
        }

        function c(t, e) {
            return t.w("\n").p(d, e, {}).w("\n")
        }

        function d(t, e) {
            return t.f(e.getPath(!1, ["config", "ui", "item_template"]), e, "h")
        }

        function o(t, e) {
            return t.x(e.get(["more"], !1), e, {
                block: u
            }, {})
        }

        function u(t, e) {
            return t.w("\n").h("img", e, {}, {
                src: "https://s.yimg.com/zz/nn/lib/metro/g/my/anim_loading_sm.gif",
                width: "16",
                height: "16",
                "class": "D(b) Mx(a) My(12px) js-stream-load-more"
            }).w("\n")
        }
        return dust.register("td-applet-stream-atomic-templates-main_sm", e), e.__dustBody = !0, a.__dustBody = !0, n.__dustBody = !0, s.__dustBody = !0, m.__dustBody = !0, i.__dustBody = !0, r.__dustBody = !0, c.__dustBody = !0, d.__dustBody = !0, o.__dustBody = !0, u.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:main_sm.dust"] = dust.cache["td-applet-stream-atomic:main_sm"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/main_sm"] = function(t, a) {
        t = t || {}, dust.render(e, t, a)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-breaking_news", "td-applet-stream-atomic-templates-ntk_carousel", "td-applet-stream-atomic-templates-item-nfl_card_sm", "td-applet-stream-atomic-templates-errormsg"]
});
YUI.add("td-applet-stream-atomic-templates-ntk_carousel", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.x(e.get(["fptoday_items"], !1), e, {
                block: a
            }, {})
        }

        function a(t, e) {
            return t.w('\n<div id="ntk-carousel-holder" class="Ov(h) Pos(r)">\n\t<ul id="ntk-carousel" class="Whs(nw) Lts(-0.31em) W(100%)">').p("td-applet-stream-atomic:item/ntk_items_sm", e, {}).w("</ul>\n\t").x(e.getPath(!1, ["config", "ui", "ntk_load_more"]), e, {
                block: n
            }, {}).w('\n</div>\n\n<div class="Pos(r) ').nx(e.getPath(!1, ["config", "ui", "ntk_load_more"]), e, {
                "else": c,
                block: d
            }, {}).w(' Bgc(#ededf1) Bdt($card_border) Ta(c) Lh(1.7)" id="ntk-indicator">\n</div>\n')
        }

        function n(t, e) {
            return t.w('\n<div class="ntk-count Pos(a) End(10px) B(64px) C(#fff)">').h("i18n_string", e, {}, {
                _key: "COUNT",
                v0: "<span class='index'>",
                v1: "</span>",
                v2: s
            }).w("</div>\n\t")
        }

        function s(t, e) {
            return t.f(e.get(["totalCount"], !1), e, "h")
        }

        function c(t, e) {
            return t.w("H(12px)")
        }

        function d(t, e) {
            return t.w("H(25px)")
        }
        return dust.register("td-applet-stream-atomic-templates-ntk_carousel", e), e.__dustBody = !0, a.__dustBody = !0, n.__dustBody = !0, s.__dustBody = !0, c.__dustBody = !0, d.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:ntk_carousel.dust"] = dust.cache["td-applet-stream-atomic:ntk_carousel"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/ntk_carousel"] = function(t, a) {
        t = t || {}, dust.render(e, t, a)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-item-ntk_items_sm"]
});
YUI.add("td-applet-stream-atomic-templates-ntk_wide", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w("<style>\n\n    \n    html:not(.css-filters) .css-blur {\n    \tbackground: #f7f8ff!important;\n    }\n\n    .css-filters .css-blur {\n    \t-ms-filter: blur(30px);\n    \t-o-filter: blur(30px);\n    \t-moz-filter: blur(30px);\n    \t-webkit-filter: blur(30px);\n    \tfilter: blur(30px);\n        opacity: 0.6;\n    \t-ms-transform: scale(1.5) scaleX(-1);\n    \t-moz-transform: scale(1.5) scaleX(-1);\n    \t-webkit-transform: scale(1.5) scaleX(-1);\n    \ttransform: scale(1.5) scaleX(-1);\n    \tbackground-position: right center;\n    }\n\n    .webkit-alias {\n    \t-webkit-font-smoothing: antialiased;\n    }\n\n</style>\n\n<script>\n(function(){\n\t// Fallback for non filter support\n\tvar prefixes =['-webkit-','-moz-', '-o-','-ms-'];\n\tvar el = document.createElement('a');\n\tel.style.cssText = prefixes.join('filter:blur(2px); ');\n\tif (!!el.style.length) {\n\t\tdocument.documentElement.className +=' css-filters';\n\t};\n})();\n<\/script>\n").s(e.getPath(!1, ["data", "stream"]), e, {
                block: n
            }, {}).w("\n")
        }

        function n(t, e) {
            return t.w("\n").s(e.get(["fptoday_items"], !1), e, {
                block: s
            }, {}).w("\n")
        }

        function s(t, e) {
            return t.w("\n").h("eq", e, {
                block: i
            }, {
                key: e.get(["$idx"], !1),
                value: 0
            }).h("gt", e, {
                block: j
            }, {
                key: e.get(["$idx"], !1),
                value: 0
            }).h("eq", e, {
                block: R
            }, {
                key: e.get(["$idx"], !1),
                value: 5
            }).w("\n")
        }

        function i(t, e) {
            return t.w('\n<div data-uuid-list="true" class="D(tb) W(100%) Tbl(f) Pos(r) webkit-alias ntk-link-filter Z(2) Bdrs(2px)" data-uuid="').f(e.get(["cauuid"], !1), e, "h").w('" ').s(e.get(["pkg_video_id"], !1), e, {
                block: r
            }, {}).w('>\n    <div class="D(tbr)">\n        <div class="D(tbc) W(3/5)">\n            ').h("img", e, {}, {
                src: a,
                "class": "W(100%) Mih(215px) Mih(277px)--miw1200",
                defer: u,
                title: c,
                alt: ""
            }).w('\n</div>\n        <div class="D(tbc) W(2/5) Va(m) Bgc($ntk_grey) Px(30px) ntk-item Fz(14px)">\n            <div class="Pos(a) Ov(h) Start(3/5) T(0) B(0) End(0) Z(2) Bdrstend(2px) Bdrsbend(2px) ntk-img-path">\n                <div class="Pos(a) Start(0) Z(2) T(0) End(0) B(0) css-blur Bgr(nr) Bgp(end_c) Bgz(cv) ntk-img-crop" style="background-image:url(').f(e.get(["image"], !1), e, "h").w(');"></div>\n            </div>\n            <a class="css-filters_C(white) Td(n) D(b) js-stream-content-link js-content-title js-stream-roundup-filmstrip').x(e.get(["viewer_eligible"], !1), e, {
                block: l
            }, {}).w('" ').x(e.get(["tab"], !1), e, {
                block: f
            }, {}).w('" ').x(e.get(["rdSigLink"], !1), e, {
                "else": _,
                block: p
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                slk: g,
                subsec: "needtoknow",
                elm: "img",
                elmt: "ct",
                r: h,
                pos: m,
                cpos: "1",
                pkgt: "need_to_know",
                itc: "0",
                ccode: w,
                g: k,
                aid: b
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: y
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: x
            }, {}).w('>\n                <div class="Pos(r) Z(2) Mb(13px) Fz(13px)">\n                    <h2 class="js-stream-item-title Fz(21px) Fz(28px)--miw1024 Td(u):h js-stream-content-link:f_Td(u) LineClamp(4,5.3em) Mb(16px) Lh(1.15)">').f(e.get(["title"], !1), e, "h", ["s"]).w('</h2>\n                    <p class="LineClamp(4,5.3em) LineClamp(3,4em)--md1100 M(0) Lh(1.35) Mb(5px)">').s(e.get(["summary"], !1), e, {
                block: B
            }, {}).w('</p>\n                    <span class="Fw(b) Td(u):h">').s(e.get(["more_link_text"], !1), e, {
                block: v
            }, {}).w('</span>\n                </div>\n                <u class="StretchedBox"></u>\n            </a>\n            <div class="Ov(h) Whs(nw) Tov(e)">\n                ').x(e.getPath(!1, ["config", "ui", "comments"]), e, {
                block: P
            }, {}).x(e.get(["publisher"], !1), e, {
                block: T
            }, {}).w('\n</div>\n        </div>\n    </div>\n</div>\n<div data-uuid-list="true" class="Ov(h) Mb(15px) Z(1)">\n    <ul class="Whs(nw) Mt(6px) Mstart(6px) Lts(-4px)">')
        }

        function r(t, e) {
            return t.w(' data-pkg-video-id="').f(e.getPath(!0, []), e, "h").w('" data-video-cfg=\'{"destroyOnError": true, "expType": "strm-mobile-inline", "viewerEligible": ').x(e.get(["viewer_eligible"], !1), e, {
                "else": o,
                block: d
            }, {}).w("}'")
        }

        function o(t, e) {
            return t.w("false")
        }

        function d(t, e) {
            return t.w("true")
        }

        function a(t, e) {
            return t.f(e.get(["image"], !1), e, "h")
        }

        function u(t, e) {
            return t.f(e.get(["defer"], !1), e, "h")
        }

        function c(t, e) {
            return t.f(e.get(["ntkImageAttribution"], !1), e, "h")
        }

        function l(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function f(t, e) {
            return t.w('target="_blank"')
        }

        function _(t, e) {
            return t.w('href="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function p(t, e) {
            return t.w('href="').f(e.get(["rdSigLink"], !1), e, "h").w('" data-orig-link="').f(e.get(["link"], !1), e, "h").w('"')
        }

        function g(t, e) {
            return t.f(e.get(["title"], !1), e, "h", ["u", "s"])
        }

        function h(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function m(t, e) {
            return t.f(e.get(["pos"], !1), e, "h")
        }

        function w(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function k(t, e) {
            return t.f(e.get(["cauuid"], !1), e, "h")
        }

        function b(t, e) {
            return t.f(e.get(["id"], !1), e, "h")
        }

        function y(t, e) {
            return t.w('rel="nofollow"')
        }

        function x(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function B(t, e) {
            return t.f(e.getPath(!0, []), e, "h", ["s"])
        }

        function v(t, e) {
            return t.f(e.getPath(!0, []), e, "h", ["s"]).w("&nbsp;»")
        }

        function P(t, e) {
            return t.p("td-applet-stream-atomic:item/ntk_actions_tb", e, {})
        }

        function T(t, e) {
            return t.w('<p class="Va(m) D(ib) Fz(12px) C(#fff) Ell Pos(r) Z(2)"><span class="Px(10px)">|</span>').f(e.get(["publisher"], !1), e, "h", ["s"]).w("</p>")
        }

        function j(t, e) {
            return t.w('<li class="W(1/5) Whs(n) Va(t) D(ib) Lts(0) Bdend(none)"><a class="Pos(r) D(b) Mend(6px) C(#000) O(n):f Td(n) W(a) ntk-footer-link js-stream-content-link js-stream-item-title js-content-title').x(e.get(["viewer_eligible"], !1), e, {
                block: M
            }, {}).x(e.get(["inline_video_eligible"], !1), e, {
                block: L
            }, {}).w('" ').x(e.getPath(!0, ["rdSigLink"]), e, {
                "else": z,
                block: C
            }, {}).w(' data-uuid="').f(e.getPath(!0, ["cauuid"]), e, "h").w('"').x(e.get(["tab"], !1), e, {
                block: W
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                slk: F,
                subsec: "needtoknow",
                elm: "rhdln",
                elmt: "ct",
                r: S,
                ccode: D,
                t4: "rel",
                cpos: "1",
                cposy: E,
                pos: O,
                g: Z,
                pkgt: "need_to_know",
                itc: "0",
                aid: I,
                expb: V
            }).w(" ").x(e.get(["off_network"], !1), e, {
                block: X
            }, {}).s(e.get(["attrCat"], !1), e, {
                block: $
            }, {}).w(">").h("img", e, {}, {
                src: q,
                "class": "W(100%) Mih(56px) Mih(73px)--miw1200 Bdrs(2px)",
                defer: A,
                title: N
            }).w('<h3 class="M(0) Px(4px) Mt(4px) Fz(13px) Fw(n) LineClamp(2,2.6em) LineClamp(3,4em)--md1100 js-stream-content-link:f_Td(u) T(70%) js-stream-content-link:f_Td(n)! Start(2px) Td(u):h">').f(e.get(["title"], !1), e, "h", ["s"]).w("</h3></a></li>")
        }

        function M(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function L(t, e) {
            return t.w(" js-videomgr-excluded")
        }

        function z(t, e) {
            return t.w('href="').f(e.getPath(!0, ["link"]), e, "h").w('"')
        }

        function C(t, e) {
            return t.w('href="').f(e.getPath(!0, ["rdSigLink"]), e, "h").w('" data-orig-link="').f(e.getPath(!0, ["link"]), e, "h").w('"')
        }

        function W(t, e) {
            return t.w(' target="_blank"')
        }

        function F(t, e) {
            return t.f(e.get(["title"], !1), e, "h", ["u", "s"])
        }

        function S(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function D(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function E(t, e) {
            return t.f(e.getPath(!0, ["cposy"]), e, "h")
        }

        function O(t, e) {
            return t.f(e.getPath(!0, ["pos"]), e, "h")
        }

        function Z(t, e) {
            return t.f(e.getPath(!0, ["id"]), e, "h")
        }

        function I(t, e) {
            return t.f(e.getPath(!0, ["aid"]), e, "h")
        }

        function V(t, e) {
            return t.f(e.getPath(!0, ["expb"]), e, "h")
        }

        function X(t, e) {
            return t.w('rel="nofollow"')
        }

        function $(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function q(t, e) {
            return t.f(e.get(["footerImage"], !1), e, "h")
        }

        function A(t, e) {
            return t.f(e.get(["defer"], !1), e, "h")
        }

        function N(t, e) {
            return t.f(e.get(["ntkImageAttribution"], !1), e, "h")
        }

        function R(t, e) {
            return t.w("</ul>\n</div>")
        }
        return dust.register("td-applet-stream-atomic-templates-ntk_wide", e), e.__dustBody = !0, n.__dustBody = !0, s.__dustBody = !0, i.__dustBody = !0, r.__dustBody = !0, o.__dustBody = !0, d.__dustBody = !0, a.__dustBody = !0, u.__dustBody = !0, c.__dustBody = !0, l.__dustBody = !0, f.__dustBody = !0, _.__dustBody = !0, p.__dustBody = !0, g.__dustBody = !0, h.__dustBody = !0, m.__dustBody = !0, w.__dustBody = !0, k.__dustBody = !0, b.__dustBody = !0, y.__dustBody = !0, x.__dustBody = !0, B.__dustBody = !0, v.__dustBody = !0, P.__dustBody = !0, T.__dustBody = !0, j.__dustBody = !0, M.__dustBody = !0, L.__dustBody = !0, z.__dustBody = !0, C.__dustBody = !0, W.__dustBody = !0, F.__dustBody = !0, S.__dustBody = !0, D.__dustBody = !0, E.__dustBody = !0, O.__dustBody = !0, Z.__dustBody = !0, I.__dustBody = !0, V.__dustBody = !0, X.__dustBody = !0, $.__dustBody = !0, q.__dustBody = !0, A.__dustBody = !0, N.__dustBody = !0, R.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:ntk_wide.dust"] = dust.cache["td-applet-stream-atomic:ntk_wide"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/ntk_wide"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-item-ntk_actions_tb"]
});
YUI.add("td-applet-stream-atomic-templates-related", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.w('<div class="Pos(r) js-stream-related-content Collapse" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                t4: "rel",
                slk: n,
                pkgt: s,
                elm: "rhdln",
                elmt: "ct"
            }).w(">\n    ").x(e.get(["relatedItems"], !1), e, {
                block: r
            }, {}).w("\n").x(e.getPath(!1, ["config", "js", "related_collapse"]), e, {
                block: G
            }, {}).w("\n</div>\n")
        }

        function n(t, e) {
            return t.f(e.get(["slk"], !1), e, "h")
        }

        function s(t, e) {
            return t.f(e.get(["pkgt"], !1), e, "h")
        }

        function r(t, e) {
            return t.w('\n<h3 class="Fz(13px) Fw(b) C(#000) Mb(8px) Mt(16px)">').x(e.get(["isPopularContent"], !1), e, {
                "else": a,
                block: d
            }, {}).w('</h3>\n    <ul class="P(0) My(0) Mstart(-2px) Mend(7px) Fz(12px) Whs(nw) Lts(-.31em)" data-uuid-list="related-content-').f(e.get(["id"], !1), e, "h").w('">\n        ').s(e.get(["relatedItems"], !1), e, {
                block: o
            }, {}).w("\n</ul>\n    ")
        }

        function a(t, e) {
            return t.h("i18n_string", e, {}, {
                _key: "ALSO_LIKE"
            })
        }

        function d(t, e) {
            return t.h("i18n_string", e, {}, {
                _key: "POPULAR_IN_COMM"
            })
        }

        function o(t, e) {
            return t.w('\n<li class="Pos(r) Va(t) D(ib) Bxz(bb) Whs(n) Ov(h) ').x(e.get(["clusterUuids"], !1), e, {
                block: i
            }, {}).w(" ").x(e.get(["is_ad"], !1), e, {
                "else": c,
                block: u
            }, {}).w('" data-uuid="').f(e.get(["id"], !1), e, "h").w('" style="width:').f(e.get(["displayWidth"], !1), e, "h").w("%; max-width:").f(e.get(["displayMaxWidth"], !1), e, "h").w('px" ').x(e.get(["is_ad"], !1), e, {
                block: l
            }, {}).w(" ").x(e.get(["clusterUuids"], !1), e, {
                block: h
            }, {}).w(">\n            <a ").x(e.get(["rdSigLink"], !1), e, {
                "else": w,
                block: k
            }, {}).w(" ").x(e.get(["is_ad"], !1), e, {
                block: x
            }, {}).w(' class="js-stream-content-link Lts(n) Whs(n) D(b) Px(2px) Td(n) O(n):f NoLinkColor js-stream-item-title').x(e.get(["viewer_eligible"], !1), e, {
                block: m
            }, {}).w('" ').x(e.get(["tab"], !1), e, {
                block: B
            }, {}).w(" ").h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                t4: "rel",
                pos: v,
                g: C,
                pkgt: P,
                elm: "rhdln",
                elmt: "ct",
                r: j,
                ccode: T,
                cposy: L
            }).w(" ").s(e.get(["attrCat"], !1), e, {
                block: M
            }, {}).w(">\n                ").s(e.get(["image"], !1), e, {
                block: D
            }, {}).w('\n<h4 class="js-stream-related-title Mt(7px) Mend(10px) LineClamp(3,47px) Fz(12px) Fw(b) C($link) js-stream-content-link:h>C($m_blue)').x(e.get(["commentsCount"], !1), e, {
                block: I
            }, {}).w('">').f(e.get(["title"], !1), e, "h", ["s"]).w('</h4>\n            </a>\n            <div class="js-stream-related-publisher">\n                <div class="D(ib) Fz(11px) C(gray_dark) ').nx(e.get(["commentsCount"], !1), e, {
                block: F
            }, {}).w('Mend(3px) Ell Pstart(2px)">').x(e.get(["commentsCount"], !1), e, {
                "else": O,
                block: z
            }, {}).w("</div>\n                ").x(e.get(["is_ad"], !1), e, {
                block: S
            }, {}).w("\n</div>\n            ").x(e.get(["is_ad"], !1), e, {
                block: $
            }, {}).w("\n</li>\n        ")
        }

        function i(t, e) {
            return t.w("js-fake-cluster")
        }

        function c(t, e) {
            return t.w("js-stream-related-item")
        }

        function u(t, e) {
            return t.w("js-stream-related-ad-noview js-stream-related-item-ad")
        }

        function l(t, e) {
            return t.x(e.get(["beacon"], !1), e, {
                block: _
            }, {}).w(' data-impr-beacon="').f(e.get(["imprTrackingUrl"], !1), e, "h").w('" ').x(e.get(["imprTrackingUrls"], !1), e, {
                block: f
            }, {}).w(' data-ad-feedback-beacon="').f(e.get(["ad_feedback_beacon"], !1), e, "h").w('" ').x(e.get(["partial_view_beacon"], !1), e, {
                block: g
            }, {}).w(" ").x(e.get(["generic_view_beacon"], !1), e, {
                block: p
            }, {})
        }

        function _(t, e) {
            return t.w('data-beacon="').f(e.get(["beacon"], !1), e, "h").w('"')
        }

        function f(t, e) {
            return t.w(' data-thirdparty-beacons="').f(e.get(["imprTrackingUrls"], !1), e, "h", ["js"]).w('"')
        }

        function g(t, e) {
            return t.w('data-prtbc="').f(e.get(["partial_view_beacon"], !1), e, "h").w('"')
        }

        function p(t, e) {
            return t.w('data-gnvbc="').f(e.get(["generic_view_beacon"], !1), e, "h").w('"')
        }

        function h(t, e) {
            return t.w('data-cluster="').f(e.get(["id"], !1), e, "h").w('" data-cluster-uuids="').f(e.get(["clusterUuids"], !1), e, "h").w('"')
        }

        function w(t, e) {
            return t.x(e.get(["previewLink"], !1), e, {
                "else": b,
                block: y
            }, {})
        }

        function b(t, e) {
            return t.w('href="').f(e.get(["url"], !1), e, "h", ["s"]).w('"')
        }

        function y(t, e) {
            return t.w('href="').f(e.get(["previewLink"], !1), e, "h").w('" data-share-link="').f(e.get(["url"], !1), e, "h", ["s"]).w('"')
        }

        function k(t, e) {
            return t.w('href="').f(e.get(["rdSigLink"], !1), e, "h").w('" data-orig-link="').f(e.get(["url"], !1), e, "h", ["s"]).w('"')
        }

        function x(t, e) {
            return t.w('target="_blank" rel="nofollow"')
        }

        function m(t, e) {
            return t.w(" js-content-viewer rapid-noclick-resp rapidnofollow")
        }

        function B(t, e) {
            return t.w('target="_blank"')
        }

        function v(t, e) {
            return t.f(e.get(["pos"], !1), e, "h")
        }

        function C(t, e) {
            return t.f(e.get(["id"], !1), e, "h")
        }

        function P(t, e) {
            return t.f(e.get(["pkgt"], !1), e, "h")
        }

        function j(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function T(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function L(t, e) {
            return t.f(e.get(["cposy"], !1), e, "h")
        }

        function M(t, e) {
            return t.w(' data-attrcat="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function D(t, e) {
            return t.w("\n").h("img", e, {}, {
                src: E,
                "class": "W(100%) rounded-img"
            }).w("\n")
        }

        function E(t, e) {
            return t.f(e.get(["url"], !1), e, "h")
        }

        function I(t, e) {
            return t.w(" Mb(8px)")
        }

        function F(t, e) {
            return t.w("Tt(c) ")
        }

        function O(t, e) {
            return t.f(e.get(["publisher"], !1), e, "h", ["s"])
        }

        function z(t, e) {
            return t.f(e.get(["commentsCount"], !1), e, "h").w(" ").h("i18n_string", e, {}, {
                _key: "PEOPLE_REACTING"
            })
        }

        function S(t, e) {
            return t.w('\n<div class="Whs(nw) D(ib) Va(t) C(gray_dark2)">\n                    <a href="').f(e.getPath(!1, ["config", "ads", "sponsoredLabel_url"]), e, "h").w('" target="_blank" class="C(gray_dark2)">\n                        <span class="Fz(11px)">').x(e.get(["sponsoredByLabel"], !1), e, {
                "else": A,
                block: N
            }, {}).w('</span>\n                    </a>\n                    <a href="').f(e.getPath(!1, ["config", "ads", "sponsoredIcon_url"]), e, "h").w('" target="_blank" class="C(gray_dark2)">\n                        <i class="Mstart(4px) Icon-Fp2 IconMoneyball Fz(11px) D(ib)"></i>\n                    </a>\n                </div>\n                ')
        }

        function A(t, e) {
            return t.x(e.getPath(!1, ["config", "ads", "advt_text"]), e, {
                "else": U,
                block: W
            }, {})
        }

        function U(t, e) {
            return t.h("i18n_string", e, {}, {
                _key: "SPONSORED"
            })
        }

        function W(t, e) {
            return t.h("i18n_string", e, {}, {
                _key: "ADVERTISEMENT"
            })
        }

        function N(t, e) {
            return t.f(e.get(["sponsoredByLabel"], !1), e, "h", ["s"])
        }

        function $(t, e) {
            return t.w("\n").x(e.getPath(!1, ["config", "ads", "feedback"]), e, {
                block: R
            }, {}).w("\n")
        }

        function R(t, e) {
            return t.w('\n<a href="javascript:void(0);" class="js-related-dislike-button C(gray_dark) T(0) Pos(a) Z(5) End(9px) Td(n) Pstart(16px) Pb(5px)" ').h("rapid_data_attr", e, {}, {
                "rapid-base": e.get(["i13n"], !1),
                t4: "rel",
                pos: V,
                g: K,
                elm: "rlfdb",
                itc: "1",
                elmt: "ct",
                r: Y,
                ccode: Z,
                cposy: q
            }).w('>\n                <i class="Icon Fz-xs js-stream-related-item-ad_D(n) js-stream-related-item-ad:h_D(i)">&#xe009;</i>\n                <b aria-live="polite" class="D(n) Ta(c) Fz(13px) js-related-dislike-button:h_W(136px) js-related-dislike-button:h_D(b) Pos(a) Bd($bdr) Bdrs(3px) Bgc(#fff) Bxsh($menuShadow) T(-10px) Py(6px) C(#000) End(24px)">Dislike</b>\n            </a>\n            <h4 class="adb-thank-you Bgc(#deebfe) P(16px) D-n Mih(96px) C(#000)">').h("i18n_string", e, {}, {
                _key: "AD_FDB_THANKYOU"
            }).w("</h4>\n            ")
        }

        function V(t, e) {
            return t.f(e.get(["pos"], !1), e, "h")
        }

        function K(t, e) {
            return t.f(e.get(["id"], !1), e, "h")
        }

        function Y(t, e) {
            return t.f(e.get(["reason"], !1), e, "h")
        }

        function Z(t, e) {
            return t.f(e.get(["ccode"], !1), e, "h")
        }

        function q(t, e) {
            return t.f(e.get(["cposy"], !1), e, "h")
        }

        function G(t, e) {
            return t.w('\n<div class="js-stream-actions Pos(a) T(15px) End(0) W(30px) Ta(end)">\n        <a href="javascript:void(0)" class="js-stream-related-close rapid-noclick-resp rapidnofollow Td(n) O(n) C($c_icon) Px(16px)" role="button"><b aria-live="polite" class="js-stream-close-label ActionTooltip Pos(a) Bd($bdr) Bdc($bdr_darkgrey) Bdrs(3px) Bgc(#fff) C(#000) Bxsh($menuShadow) Lh(14px) Py(7px) Z(1) Ta(c) End(-38px)">').h("i18n_string", e, {}, {
                _key: "ACTION_CLOSE"
            }).w('</b><i class="Icon-Fp2 IconActionCross Fz(20px) Mend(4px) C(#000):h"></i></a>\n    </div>\n    ')
        }
        return dust.register("td-applet-stream-atomic-templates-related", e), e.__dustBody = !0, n.__dustBody = !0, s.__dustBody = !0, r.__dustBody = !0, a.__dustBody = !0, d.__dustBody = !0, o.__dustBody = !0, i.__dustBody = !0, c.__dustBody = !0, u.__dustBody = !0, l.__dustBody = !0, _.__dustBody = !0, f.__dustBody = !0, g.__dustBody = !0, p.__dustBody = !0, h.__dustBody = !0, w.__dustBody = !0, b.__dustBody = !0, y.__dustBody = !0, k.__dustBody = !0, x.__dustBody = !0, m.__dustBody = !0, B.__dustBody = !0, v.__dustBody = !0, C.__dustBody = !0, P.__dustBody = !0, j.__dustBody = !0, T.__dustBody = !0, L.__dustBody = !0, M.__dustBody = !0, D.__dustBody = !0, E.__dustBody = !0, I.__dustBody = !0, F.__dustBody = !0, O.__dustBody = !0, z.__dustBody = !0, S.__dustBody = !0, A.__dustBody = !0, U.__dustBody = !0, W.__dustBody = !0, N.__dustBody = !0, $.__dustBody = !0, R.__dustBody = !0, V.__dustBody = !0, K.__dustBody = !0, Y.__dustBody = !0, Z.__dustBody = !0, q.__dustBody = !0, G.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:related.dust"] = dust.cache["td-applet-stream-atomic:related"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/related"] = function(t, n) {
        t = t || {}, dust.render(e, t, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-removeditem", function(e, t) {
    dust.cache = dust.cache || {}, dust.cache[t] = function(e) {
        function t(e, t) {
            return e.w('<div class="js-remove-msg Bgc(#deebfe) Cf Mih(50px)">\n    <p class="Fl(start) W(80%) My(16px) Mx(10px)">').h("i18n_string", t, {}, {
                _key: "AD_FDB_THANKYOU"
            }).w("</p>\n</div>\n\n")
        }
        return dust.register("td-applet-stream-atomic-templates-removeditem", t), t.__dustBody = !0, t
    }(), dust.cache["td-applet-stream-atomic:removeditem.dust"] = dust.cache["td-applet-stream-atomic:removeditem"] = dust.cache[t], e.Template._cache = e.Template._cache || {}, e.Template._cache["td-applet-stream-atomic/templates/removeditem"] = function(e, a) {
        e = e || {}, dust.render(t, e, a)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-removeditem_sm", function(e, t) {
    dust.cache = dust.cache || {}, dust.cache[t] = function(e) {
        function t(e, t) {
            return e.w('<div class="js-remove-msg Bgc(#deebfe) Cf Mih(50px)">\n    <p class="Fl(start) W(80%) My(16px) Mx(10px)">').h("i18n_string", t, {}, {
                _key: "AD_FDB_THANKYOU"
            }).w("</p>\n</div>\n\n")
        }
        return dust.register("td-applet-stream-atomic-templates-removeditem_sm", t), t.__dustBody = !0, t
    }(), dust.cache["td-applet-stream-atomic:removeditem_sm.dust"] = dust.cache["td-applet-stream-atomic:removeditem_sm"] = dust.cache[t], e.Template._cache = e.Template._cache || {}, e.Template._cache["td-applet-stream-atomic/templates/removeditem_sm"] = function(e, a) {
        e = e || {}, dust.render(t, e, a)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("td-applet-stream-atomic-templates-videoStream", function(t, e) {
    dust.cache = dust.cache || {}, dust.cache[e] = function(t) {
        function e(t, e) {
            return t.s(e.get(["stream_items"], !1), e, {
                block: a
            }, {}).w("\n")
        }

        function a(t, e) {
            return t.h("ne", e, {
                block: d
            }, {
                key: e.get(["type"], !1),
                value: "embed"
            })
        }

        function d(t, e) {
            return t.w("\n").x(e.get(["template"], !1), e, {
                block: u
            }, {}).w("\n")
        }

        function u(t, e) {
            return t.w('\n<li data-temp="').f(e.get(["template"], !1), e, "h").w('" class="H(200px) Pos(r) Va(t) D(ib) Bxz(bb) Whs(n) Fl(start) W(1/4)"  data-uuid="').x(e.get(["cauuid"], !1), e, {
                "else": s,
                block: c
            }, {}).w('" ').s(e.get(["cauuid"], !1), e, {
                block: o
            }, {}).s(e.get(["hosted_type"], !1), e, {
                block: n
            }, {}).w('>\n    <div class="js-stream-item-wrap Pos(r) Py(12px)! Px(8px)">\n        ').p("td-applet-stream-atomic:item/videoItem", e, {}).w("\n</div>\n    ").x(e.get(["streamDebug"], !1), e, {
                block: r
            }, {}).w("\n</li>\n    ")
        }

        function s(t, e) {
            return t.f(e.get(["id"], !1), e, "h")
        }

        function c(t, e) {
            return t.f(e.get(["cauuid"], !1), e, "h")
        }

        function o(t, e) {
            return t.w('data-cauuid="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function n(t, e) {
            return t.w(' data-hosted="').f(e.getPath(!0, []), e, "h").w('"')
        }

        function r(t, e) {
            return t.p("td-applet-stream-atomic:debug", e, {})
        }
        return dust.register("td-applet-stream-atomic-templates-videoStream", e), e.__dustBody = !0, a.__dustBody = !0, d.__dustBody = !0, u.__dustBody = !0, s.__dustBody = !0, c.__dustBody = !0, o.__dustBody = !0, n.__dustBody = !0, r.__dustBody = !0, e
    }(), dust.cache["td-applet-stream-atomic:videoStream.dust"] = dust.cache["td-applet-stream-atomic:videoStream"] = dust.cache[e], t.Template._cache = t.Template._cache || {}, t.Template._cache["td-applet-stream-atomic/templates/videoStream"] = function(t, a) {
        t = t || {}, dust.render(e, t, a)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust", "td-applet-stream-atomic-templates-item-videoItem", "td-applet-stream-atomic-templates-debug"]
});
YUI.add("td-applet-stream-atomic-vertical-video-util", function(t) {
    "use strict";
    var e = t.Af.Event,
        i = "td-applet-stream-atomic-templates-item-vv_banner",
        a = "td-applet-stream-atomic-templates-item-ntk_items_sm",
        n = ".js-stream-content",
        s = [{
            regex: /pkgt:[^;]*;/,
            value: "pkgt:giraffe;"
        }, {
            regex: /ct:[^;]*;/,
            value: "ct:video;"
        }],
        o = /[?&]exp=vv\b/,
        r = "td-applet-stream-atomic-templates-",
        d = t.config.win,
        m = d.location.search;
    t.namespace("TD.Applet").StreamVerticalVideoUtil = function(t) {
        this.options = t || {}, this.vvItems = {}, this._eventHandles = [], this.options.config = this.options.config || {}
    }, t.TD.Applet.StreamVerticalVideoUtil.prototype = {
        init: function() {
            var t, a = this.options.config;
            e.on("vertical-video:content-fetched", this.handleContentFetched, this), e.on("viewer:show", this.handleViewerShow, this), a.ui && a.ui.enable_client_test_uuid && (/[?&]test_uuid/.test(m) ? this.loadTestUuid() : /[?&]insert_vv_content=1/.test(m) && this.loadList()), a.ui && a.ui.template_suffix && (t = a.ui.template_suffix, i += t)
        },
        handleViewerShow: function(t) {
            var e = this.options.container,
                i = e && e.one('[data-uuid="' + t.uuid + '"][data-vvid]');
            this.viewerFirstUuid = i && t.uuid
        },
        handleContentFetched: function(t) {
            var e = this,
                i = this.options.container,
                a = t && t.content;
            i && a && a.length && (a.forEach(function(t) {
                e.vvItems[t.id] = t.verticalVideo
            }), this.updateVvItems())
        },
        updateVvItems: function() {
            var e = this.options.container,
                a = this.vvItems,
                n = !1;
            e && !t.Object.isEmpty(a) && (e.all('.js-stream-content:not([data-vvid]),[data-temp="pic_sm"]:not([data-vvid]),.ntk-item:not([data-vvid])').each(function(t) {
                var e, r = t.hasClass("ntk-item"),
                    d = "pic_sm" === t.getAttribute("data-temp"),
                    m = !1,
                    l = t.getAttribute("data-uuid"),
                    c = a[l];
                c && (t.setAttribute("data-vvid", c.id), r ? e = t.one(".ntk-wrap .js-stream-content-link") : d ? e = t.one(".pic-sm-list-item .streamImage") : (e = t.one(".streamImage"), m = !0), e && !e.one(".vv-banner") && dust.render(i, {
                    isPic: d,
                    isNtk: r,
                    isOrb: m
                }, function(t, i) {
                    e.appendChild(i)
                }), t.all(".js-stream-content-link").each(function(t) {
                    var e = t.getAttribute("href"),
                        i = t.getAttribute("data-ylk");
                    o.test(e) || t.setAttribute("href", e + (e.indexOf("?") > 0 ? "&" : "?") + "exp=vv"), i && (s.forEach(function(t) {
                        t.regex.test(i) ? i = i.replace(t.regex, t.value) : i += t.value
                    }), t.setAttribute("data-ylk", i), t.removeAttribute("data-rapid_p"))
                }), n = !0)
            }), n && this.refreshTracking())
        },
        refreshTracking: function() {
            var t = this.options.rapid,
                e = this.options.guid;
            t && e && t.refreshModule("applet_" + e)
        },
        loadTestUuid: function() {
            var t, e = this,
                i = m.match(/[?&]test_uuid=([\w-,]+)/),
                a = this.options.model,
                n = this.options.config;
            a && i && i[1] && (t = i[1].split(",").map(function(t) {
                return {
                    id: t
                }
            }), a.getDataModel("items").loadItems(t, n, null, function(t, i) {
                !t && i && i.stream_items && i.stream_items.length > 0 && e.renderItems(i)
            }))
        },
        loadList: function() {
            var e = this,
                i = this.options.model,
                a = i && i.getReadParams(),
                n = i && i.getDataModel("stream"),
                s = t.Object.getValue(this.options.config, ["ui", "vertical_video"]) || {},
                o = s.list_id;
            a && n && o && (a = t.merge(a, {
                ads: t.merge(a.ads, {
                    count: 0,
                    frequency: 0,
                    promoAds: {
                        enabled: !1
                    }
                }),
                category: "LISTID:" + o,
                client_vertical_video_list: !0,
                size: s.size,
                total: s.total,
                ui: t.merge(a.ui, {
                    exclude_bnb_enabled: !1,
                    fptoday_image_tag: !1,
                    highlander_2017_enabled: !1,
                    needtoknow_template: "",
                    ntk_bypassA3c: !1,
                    slideshow_layout_enabled: !1,
                    today_count: 0,
                    toprated_comments_ntk1_enabled: !1,
                    use_summary_type: !1
                })
            }), n.load(a, function(i, a) {
                !i && a && a.stream_items && a.stream_items.length > 0 && (a.stream_items = a.stream_items.filter(function(t) {
                    return "article" === t.type
                }), e.renderItems(a), t.Af.Event.fire("content:batch", {
                    guid: e.options.guid,
                    list: a.stream_items
                }))
            }))
        },
        renderItems: function(e) {
            var i, s = this,
                o = this.options.model,
                d = this.options.config,
                m = this.options.container;
            m && o && d.ui.item_template && (o._fireContentEvents(e.stream_items), dust.render(r + d.ui.item_template, t.merge(e, o.toJSON()), function(e, i) {
                var a, o = m.one("ul");
                if (!e && i) {
                    if ((a = t.Node.create(i)).hasClass("js-stream-content")) return void o.insertBefore(a, o.one(".js-stream-content:not(.ntk-item)"));
                    s._itemsToInsert = a.all(n), s.insertCurrentPageItems()
                }
            }), e.stream_items && e.stream_items.length > 0 && ((i = e.stream_items[0]).image = t.Object.getValue(i, ["images", "default", "url"]), i.cauuid = i.id, dust.render(a, t.merge({
                fptoday_items: [i]
            }, o.toJSON()), function(e, i) {
                var a, n, s = t.one("#ntk-carousel li"),
                    o = s && s.one(".slide-img");
                !e && i && s && (a = t.Node.create(i)) && a.hasClass("ntk-item") && (n = a.one(".slide-img"), o && n && (n.setStyle("height", o.get("offsetHeight")), n.setStyle("width", o.get("offsetWidth"))), s.insert(a, "after"))
            })))
        },
        insertCurrentPageItems: function() {
            var t, e, i, a, n, s = this._itemsToInsert,
                o = this.options.container;
            o && s && 0 !== s.size() && (t = o.one("ul.streamv2"), n = (a = (i = (e = o.all("[data-vvid]")).size()) > 0 && e.item(i - 1)) && t.all(">li").indexOf(a) + 5 || 2, t.all(">li:nth-child(3n+" + n + ")").each(function(e) {
                var i = s.shift();
                i && ("darla_ad_placeholder" === e.getAttribute("data-temp") ? e.insert(i, "after") : t.insertBefore(i, e))
            }))
        },
        destructor: function() {
            this._eventHandles.forEach(function(t) {
                t.detach()
            }), this._eventHandles = []
        }
    }
}, "@VERSION@", {
    requires: ["af-event", "td-applet-stream-atomic-templates-item-vv_banner_sm", "td-applet-stream-atomic-templates-item-ntk_items_sm"]
});
YUI.add("td-applet-stream-baseview-v2", function(e) {
    "use strict";
    var t = "beacon",
        a = t + "-ts",
        i = t + "-prt-ts",
        n = "js-stream-ad-noview",
        o = "click",
        s = "config",
        r = "container",
        l = ".js-stream-content",
        c = e.config.doc,
        f = "favteams",
        d = "js-stream-featured-ad-noview",
        u = "js-stream-related-ad-noview",
        h = ".unfollowBtn,.followBtn",
        m = "followid",
        g = "followable:declare",
        _ = ".js-stream-followable",
        v = "followed",
        p = ".js-stream-item-wrap",
        y = "items",
        b = "stream-related",
        w = "ivpo",
        C = "local",
        D = ".js-stream-location",
        A = "model",
        k = "mouseover",
        R = "payoff-id",
        I = "js-stream-payoff",
        S = "payoff-type",
        P = "po",
        T = "C(gray_dark)",
        j = "stream-read",
        V = ".js-stream-related-content",
        F = "td-applet-stream-atomic-templates-related",
        H = "js-stream-related-item",
        B = "strm-sl-link",
        E = "stream",
        O = "td-applet-stream",
        L = "stream:restore-state",
        x = "stream-state",
        N = "max-age=1800",
        U = "max-age=172800",
        M = "td-applet-stream",
        W = "uuid",
        G = "viewupdate",
        Y = e.config.win;
    e.namespace("TD.Applet").StreamBaseView2 = e.Base.create("TDAppletStreamBaseView2", e.Af.AppletView, [], {
        INITIAL_SCROLL_BUFFER: 50,
        _scrollInfo: null,
        _scrollBuffer: 0,
        initializer: function() {
            var t, a, i, n, l, c = this,
                f = c.get(A).get(s) || {},
                d = c.get(r);
            this.styleSummaryRead = !!f.ui.styleSummaryRead, this.payoffEnabled = !!f.ui.payoffs, this.scrollEnabled = !0, f.js.show_read && e.Af.Cache.get(j, {}, function(e, t) {
                c._readItems = t || {}
            }), f.ads.generic_viewability && (c.geminiRulesCache = {}, c._resetCachedWindowHeight()), c._eventHandles = [], c._eventHandles.push(c.after(["viewrender", G], c._afterViewUpdate, c)), t = d.delegate(o, c._onClickContentLink, ".js-stream-content-link,.js-stream-comments-button", c), f.ui.template_suffix || (l = d.delegate([k, "mouseout"], c._onHoverStreamBigImg, ".streamImage", c), c._eventHandles.push(l)), f.js.related_content && (e.Af.Cache.get(b, {}, function(e, t) {
                c._itemsForRelated = t || {}
            }), f.js.related_collapse && c._eventHandles.push(d.delegate(o, c._closeRelatedContent, ".js-stream-related-close", c))), c._eventHandles.push(e.Global.on("viewer:hide", c._onViewerHide, c)), c._eventHandles.push(e.Global.on("viewer:show", c._onViewerShow, c)), c._eventHandles.push(e.Af.PageViz.on("visible", c._onPageVisible, c)), c._eventHandles.push(e.Af.PageViz.on("hidden", c._onPageHidden, c)), f.ui.followable && (i = d.delegate(o, c._onClickFollowButton, h, c), n = d.delegate([k, "mouseout"], c._onHoverFollowButton, h, c), c._eventHandles.push(i), c._eventHandles.push(n), e.Global.on(g, c._onReceiveFollowableEvent, this)), !e.UA.android && t.sub && (t.sub._extra = {
                sensitivity: 5
            }), c._eventHandles.push(t), this.payoffEnabled && (this.payoffCards = {}, a = d.delegate(e.UA.android || e.UA.ie ? o : "tap", c._onClickPayoffLink, ".js-stream-payoff-link", c), c._eventHandles.push(a)), f.js.restore_state && (c._restoreState(), c.handleBackBtn && c._eventHandles.push(e.Global.after(L, e.bind(c.handleBackBtn, c)))), f.ads.fallback && c._renderAdsForFallback(), f.ui.editorial_edition && f.ui.editorial_edition.shouldUpdateLVtimeInCookie && e.Af.Cookie.set(O, "lv", (new Date).getTime() + f.ui.visit_state_threshold), f.ui.popular_in_community_enabled && c._insertPopularContent()
        },
        destructor: function() {
            var e = this;
            e._beaconTimer && (e._beaconTimer.cancel(), delete e._beaconTimer), e._removeAllEvents(), delete e._scrollInfo
        },
        _removeAllEvents: function() {
            e.Array.each(this._eventHandles, function(e) {
                e.detach()
            }), this._eventHandles = []
        },
        _getElementWithUuid: function(e, t) {
            var a = null;
            return e.all('[data-uuid="' + t + '"]').each(function(e) {
                e.hasClass("fake-cluster-uuid") || (a = e)
            }), a
        },
        _onViewerShow: function(e) {
            this.scrollEnabled = !1
        },
        _onViewerHide: function(t) {
            var a, i, n, o, l, c, f = this.get(A).get(s),
                d = this.get(r),
                u = this;
            this.scrollEnabled = !0, f.js.related_content && u._mostRecentRelated && e.later(500, this, function() {
                (a = u._getElementWithUuid(d, u._mostRecentRelated)) && a.one(V) && (o = e.DOM.viewportRegion(), l = o.bottom, i = e.DOM.region(a.getDOMNode()), (n = i.bottom) > l && (c = n - l, Y.scrollBy(0, c)), u._openRelatedContent(a), u._beaconVisibleAds())
            })
        },
        _setupScroll: function() {
            var t = this.get(A).get(s),
                a = t.ads ? parseInt(t.ads.frequency, 10) : 0,
                i = t.ui.scrollbuffer,
                n = e.one(t.ui.scroll_node_selector);
            (a > 0 || i || this.payoffEnabled) && (n.plug(e.Plugin.ScrollInfo), this._scrollInfo = n.scrollInfo, this._eventHandles.push(this._scrollInfo.on("scroll", this._onScroll, this)), this._testWithInitialScrollBuffer())
        },
        _testWithInitialScrollBuffer: function() {
            var e = this.get(A).get(s),
                t = e.ui.scrollbuffer;
            t && (this._scrollBuffer = 50, this._onScroll(), this._scrollBuffer = t)
        },
        _getViewablityRules: function(t) {
            var a = this,
                i = null,
                n = "";
            return t = t || "", a.geminiRulesCache[t] ? a.geminiRulesCache[t] : a.geminiRulesCache["rel-" + t] ? a.geminiRulesCache["rel-" + t] : (e.Array.some(a.get(A).getDataModel(E).get("stream_items"), function(a) {
                a.id === t && (i = a.rules), !i && a.relatedItems && e.Array.each(a.relatedItems, function(e) {
                    e.id === t && (i = e.rules, n = "rel-")
                })
            }), i || (i = {
                viewabilityDefStatic: {
                    c: 1,
                    d: 1,
                    p: 50
                }
            }), a.geminiRulesCache[n + t] = i, i)
        },
        fireGenericViewBeacon: function(t, a) {
            if (t) {
                var i = t.getAttribute("data-gnvbc");
                i && e.Af.Beacon.send(i.replace("$(S_VIEW_TYPE)", a))
            }
        },
        _checkViewabilityRule: function(e, t, a) {
            var i = !1;
            return a >= e.p ? (e.startTime || (e.startTime = t, e.viewTime || (e.viewTime = 0)), e.c ? t - e.startTime > 1e3 * e.d && (i = !0) : e.viewTime + t - e.startTime > 1e3 * e.d && (i = !0)) : (e.startTime && !e.c && (e.viewTime += t - e.startTime), e.startTime = null), i
        },
        _resetCachedWindowHeight: function() {
            this.winHeight = Y.innerHeight, this.winWidth = Y.innerWidth
        },
        _getVisiblePercentage: function(e) {
            var t = e.offsetHeight,
                a = e.getBoundingClientRect(),
                i = a.right - a.left,
                n = a.bottom - a.top,
                o = a.top >= 0 && Math.min(this.winHeight, a.bottom) - a.top,
                s = a.left >= 0 && Math.min(this.winWidth, a.right) - a.left;
            return o = o || a.bottom, s = s || a.right, 0 > o || 0 > s || 0 === t ? 0 : 0 === n || 0 === i ? 0 : 100 * s * o / (i * n)
        },
        _beaconVisibleAds: function(o) {
            if (this._scrollInfo && !this.get("destroyed") && !e.Af.PageViz.isHidden()) {
                var l = +new Date,
                    c = this._scrollInfo,
                    f = this.get(r),
                    h = this,
                    m = h.get(A).get(s),
                    g = !1;
                e.Array.each([n, d, u], function(s) {
                    var r = "#" + f.generateID() + " ." + s,
                        _ = f.all("." + s),
                        v = new e.NodeList,
                        p = new e.NodeList,
                        b = new e.NodeList,
                        w = h._itemTemplate === y || "items_sm" === h._itemTemplate ? .5 : .8;
                    _.each(function(e) {
                        var t, a, i, s, f, _, y;
                        if (m.ads.generic_viewability) {
                            if (!(t = e.getData("allBeaconsFired"))) {
                                if (a = h._getVisiblePercentage(e.getDOMNode()), i = e.getData("beaconFired"), s = h._getViewablityRules(e.getData("uuid")), !i && s && s.viewabilityDefStatic && (i = h._checkViewabilityRule(s.viewabilityDefStatic, l, a)) && p.push(e), s && s.viewabilityDefStatic3P)
                                    for (f = 0; f < s.viewabilityDefStatic3P.length; f++) h._checkViewabilityRule(s.viewabilityDefStatic3P[f], l, a) && (h.fireGenericViewBeacon(e, s.viewabilityDefStatic3P[f].t), s.viewabilityDefStatic3P.splice(f, 1));
                                !i || !s || s.viewabilityDefStatic3P && 0 !== s.viewabilityDefStatic3P.length || (t = !0, e.setData("allBeaconsFired", "1"), e.removeClass(n), e.removeClass(d), e.removeClass(u)), a > 0 && (t || (o = !0, g = !0), b.push(e))
                            }
                        } else _ = h._heightForItem(e, r), ((y = c.isNodeOnscreen(e, -1 * w * _)) || c.isNodeOnscreen(e, 0)) && b.push(e), (y ? p : v).push(e)
                    }), v.clearData(a), p.each(function(i) {
                        var n, o, r, c = i.getData(a),
                            f = !1;
                        if (m.ads.generic_viewability ? f = !0 : c && l - c > 1e3 && (f = !0), f) {
                            if (r = i.getData(t), e.Af.Beacon.send(r), n = i.getData("impr-beacon"), o = i.getData("thirdparty-beacons")) {
                                try {
                                    o = e.JSON.parse(o)
                                } catch (d) {}
                                o && e.Lang.isArray(o) && e.Array.each(o, function(t) {
                                    e.Af.Beacon.send(t)
                                })
                            } else n && e.Af.Beacon.send(n);
                            m.ads.generic_viewability ? i.setData("beaconFired", "1") : (i.removeClass(s), e.Array.some(h.get(A).getDataModel(E).get("stream_items"), function(e) {
                                if (e.beacon && e.beacon === r) return delete e.beacon, delete e.imprTrackingUrl, delete e.imprTrackingUrls, !0
                            }))
                        } else c || (i.setData(a, l), g = !0)
                    }), b.each(function(t) {
                        var a = t.getData("prtbc");
                        a && !t.getData(i) && (e.Af.Beacon.send(a), t.setData(i, "1")), !t.getData("smadinview") && t.hasClass("js-stream-smad") && (h._beaconEvent("sponsored_moments_ad_in_view_timestamp"), t.setData("smadinview", "1"))
                    })
                }), m.ads && m.ads.smad && m.ads.smad.enabled && f.all(".js-stream-smad").each(function(e) {
                    !e.getData("smadinview") || e.getData("smadexit") || c.isNodeOnscreen(e, 0) || (h._beaconEvent("sponsored_moments_ad_exit_timestamp"), e.setData("smadexit", "1"))
                }), o && g && (h._beaconTimer = e.later(1001, h, h._beaconVisibleAds, !1))
            }
        },
        _onPageVisible: function() {
            this._beaconVisibleAds(!0)
        },
        _onPageHidden: function() {
            var t = this,
                a = t.get(A).get(s),
                i = t.get(r),
                o = +new Date;
            this._beaconTimer && (this._beaconTimer.cancel(), this._beaconTimer = null), a.ads.generic_viewability && e.Array.each([n, d, u], function(e) {
                i.generateID();
                var a = i.all("." + e);
                a.each(function(e) {
                    var a, i, n, s = e.getData("allBeaconsFired");
                    if (!s && (a = e.getData("beaconFired"), i = t._getViewablityRules(e.getData("uuid")), !a && i && i.viewabilityDefStatic && t._checkViewabilityRule(i.viewabilityDefStatic, o, 0), i && i.viewabilityDefStatic3P))
                        for (n = 0; n < i.viewabilityDefStatic3P.length; n++) t._checkViewabilityRule(i.viewabilityDefStatic3P[n], o, 0)
                })
            })
        },
        _afterViewUpdate: function(t) {
            var a = this,
                i = a.get(A).get(s),
                n = a.get(r);
            a._loadingNode = n.one(".js-stream-load-more"), a._scrollBuffer && a._loadMore(), a._markReadItems(), i.js.related_content && !i.ui.viewer && a._getRelatedContentForRecents(), a._beaconVisibleAds(!0), i.category && "YPROP:TOPSTORIES" !== i.category || i.ui.incremental_count && e.Af.Config.isUserSignedIn() && e.Stencil.initAll(n), a.payoffEnabled && -1 !== i.ui.payoffs.indexOf(C) && a._initLocationPicker()
        },
        _recordRead: function(t) {
            if (t && t.getData(W) && this._readItems) {
                var a = t.getData(W);
                this._readItems[a] = Math.floor(+new Date / 1e3), e.Af.Cache.set(j, this._readItems, U), this._showItemAsRead(t)
            }
        },
        _markReadItems: function() {
            var t, a = this.get(r),
                i = +new Date / 1e3,
                n = !1,
                o = this;
            e.Object.each(this._readItems, function(e, s) {
                t = o._getElementWithUuid(a, s), this._showItemAsRead(t), e + 172800 < i && (delete this._readItems[s], n = !0)
            }, this), n && e.Af.Cache.set(j, this._readItems, U)
        },
        _showItemAsRead: function(e) {
            var t = this.get(r),
                a = e && e.getData && e.getData(W) || !1;
            e && a && -1 !== parseInt(a, 10) && (e.hasClass(H) ? e.one(".js-stream-related-title").addClass(T) : e.hasClass(B) && a ? t.all('[data-uuid="' + a + '"]').addClass(T) : e.all(".strm-headline .js-stream-content-link, .stream-summary").addClass(T))
        },
        _recordRelated: function(t, a) {
            if (t && t.getData(W) && this._itemsForRelated) {
                var i = t.getData(W),
                    n = t.ancestor(l, !0, "#Stream");
                this._itemsForRelated[i] = Math.floor(+new Date / 1e3), this._mostRecentRelated = n && n.getData(W) || i, e.Af.Cache.set(b, this._itemsForRelated, N), this._insertRelatedContent([i], a)
            }
        },
        _getRelatedContentForRecents: function() {
            var t, a = [],
                i = +new Date / 1e3;
            e.Object.each(this._itemsForRelated, function(e, n) {
                e + 1800 > i ? a.push(n) : (delete this._itemsForRelated[n], t = !0)
            }, this), t && e.Af.Cache.set(b, this._itemsForRelated, N), this._insertRelatedContent(a)
        },
        _insertPopularContent: function() {
            var t = this,
                a = t.get(A),
                i = function(i, n) {
                    var o, c, f, d, u, h, m, g;
                    !i && n && (o = a.get(s) || {}, c = t.get(r), f = o.ui.popular_in_community_pos || 3, u = (d = c.all(".js-stream-content[data-uuid]").item(f)) && d.ancestor(l, !0, "#Stream"), h = u && u.one(".js-stream-item-wrap"), m = d && d.getAttribute("data-uuid") || "", g = e.merge(a.toJSON(), {
                        id: m,
                        isPopularContent: !0,
                        relatedItems: n,
                        slk: "picview",
                        pkgt: "pic"
                    }), dust.render(F, g, function(e, a) {
                        if (!e && a && d) {
                            h.append(a);
                            var i = d.one(V);
                            i && (i.addClass("Collapse-opened"), t.fireEvent(G))
                        }
                    }))
                };
            a.fetchPopularContent(i)
        },
        _insertRelatedContent: function(t, a) {
            var i, n, o, s = this,
                c = this.get(A),
                f = this.get(r);
            c && t && c.fetchRelatedContent(t, function(t) {
                e.Object.each(t, function(t) {
                    t.slk = "youmaylikeview", t.pkgt = "youmaylike", i = s._getElementWithUuid(f, t.id), (o = i.ancestor(l, !0, "#Stream")) && !o.one(V) && (n = o.one(p), dust.render(F, e.merge(c.toJSON(), t), function(t, o) {
                        !t && o && n && (n.append(o), a && e.later(500, this, function() {
                            s._openRelatedContent(i)
                        }))
                    }))
                })
            })
        },
        _openRelatedContent: function(t) {
            var a = this,
                i = t.one(V);
            i && e.use("stencil-fx-collapse", function() {
                i.on("fx:done", function() {
                    var e = a.rapidParseYLK(i);
                    delete e.itc, delete e.rspns, delete e.ct, a.fireEvent(G), a.getRapid().beaconClick(a.rapidGetSec(a.get(r)), null, null, e)
                }), e.Stencil.Fx("execute", i, {
                    fx: "collapse",
                    show: {}
                })
            })
        },
        _closeRelatedContent: function(t) {
            var a = t.currentTarget.ancestor(V);
            a && e.use("stencil-fx-collapse", function() {
                a.on("fx:done", function() {
                    a.remove()
                }), e.Stencil.Fx("execute", a, {
                    fx: "collapse",
                    hide: {}
                })
            })
        },
        _onClickContentLink: function(e) {
            var t = e.currentTarget,
                a = t.hasClass(B) ? t : t.ancestor("." + H, !0) || t.ancestor(l),
                i = this.get(A),
                n = this,
                o = i.get(s);
            e.target.ancestor(h, !0) || (t.hasClass("js-content-viewer") || t.hasClass(H) || 2 === e.which || 4 === e.button || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey || "_blank" === t.getAttribute("target").toLowerCase() || this._saveState(a), this._recordRead(a), o.js.related_content && (o.js.related_content_delay ? setTimeout(function() {
                n._recordRelated(a)
            }, 300) : this._recordRelated(a)))
        },
        _onClickPayoffLink: function(e) {
            var t = e.currentTarget.ancestor(".stream-payoff"),
                a = t ? t.getData(R) : "",
                i = t ? t.getData(S) : "";
            a && i && this.setPayoffCookie(a, !1, !0, !1, !1)
        },
        _onClickFollowButton: function(e) {
            var t, a, i, n = e.currentTarget.ancestor(_);
            e.preventDefault(), n && (n.toggleClass(v), t = n.getData(m), a = n && n.one(".js-stream-follow-name"), i = n.getData("followname") || a && a.get("text")), t && YMedia.Global.fire(g, {
                followId: t,
                followName: i,
                follow: n.hasClass(v),
                source: E
            })
        },
        _onHoverFollowButton: function(e) {
            var t, a = e.currentTarget.ancestor(_),
                i = this.get(A).get("i18n"),
                n = e.type;
            a && a.hasClass(v) && (t = n === k ? i.UNFOLLOW : i.FOLLOWING_STORY, a.one(".unfollowTxt div").set("innerHTML", t))
        },
        _onHoverStreamBigImg: function(e) {
            var t = e.currentTarget.ancestor(p),
                a = t && t.one("h3 a");
            a && (e.type === k ? a.setStyle("color", "#0078ff") : a.removeAttribute("style"))
        },
        _onReceiveFollowableEvent: function(e) {
            if (e && e.source !== E && e.followId) {
                var t = this.get(r).all(_);
                t.size() && t.each(function(t) {
                    t.getData(m) === e.followId && (!1 === e.follow ? t.removeClass(v) : t.addClass(v))
                })
            }
        },
        _saveState: function(t) {
            var a, i = c.scrollingElement || c.body,
                n = this.get(A),
                o = n.get(s);
            o.js.click_context && e.Af.Cookie.set(M, "context", {
                content_id: t.getData(W),
                category: o.category,
                ui: {
                    blog_type: o.ui.blog_type
                }
            }), o.js.restore_state && ((a = {
                config: {
                    category: n.get(s).category
                },
                data: {
                    stream: n.getDataModel(E).getAttrs()
                },
                scrollX: i.scrollLeft,
                scrollY: i.scrollTop
            }).data.stream.more = n.hasMoreItems(), n.interests && (a.interests = n.interests.get("interest_data")), "ls" === o.js.restore_state_storage ? (a.href = Y.location.href, e.Af.Cache.set(x, a, "max-age=600")) : e.Af.History.replaceState(M, a))
        },
        _restoreState: function() {
            var t = this;
            e.Af.Cookie.remove(M, "context"), e.Af.Cache.get(x, {}, function(a, i) {
                var n = t.get(A),
                    o = n.get(s);
                (i = i || e.Af.History.getState(M)) && i.href && i.href !== Y.location.href && (i = null), e.Object.getValue(i, ["data", "stream", "stream_items"]) ? ("ls" === o.js.restore_state_storage ? e.Af.Cache.remove(x) : e.Af.History.replaceState(M, null), e.Object.each(i.data, function(e, t) {
                    n.getDataModel(t).setAttrs(e)
                }), i.interests && n.interests && n.interests.addInterests(i.interests), t.forceRender(), o.js.content_events && n._fireContentEvents(), Y.scrollTo(0, 0), Y.scrollTo(i.scrollX, i.scrollY), e.later(0, t, function() {
                    t._setupScroll(), n.set(s, e.merge(n.get(s), i.config), {
                        restore: !0
                    })
                }), e.Global.fire(L)) : (e.Global.fire("stream:normal-load"), t._afterViewUpdate(), t._setupScroll())
            })
        },
        _initState: function() {
            this._afterViewUpdate(), this._setupScroll(), this.payoffEnabled && this._setCookieWhenPayoffVisible()
        },
        _heightForItem: function(e) {
            return e.get("clientHeight")
        },
        _renderAdsForFallback: function() {
            var t, a = this.get(A),
                i = a.get("adsData"),
                n = this.get(r).all(l);
            i && (e.Array.each(i, function(i, o) {
                (t = n.item(i.streamPos - o)) && dust.render("td-applet-stream-atomic-templates-item-" + i.full_template, e.merge(a.toJSON(), i), function(e, a) {
                    !e && a && t.insert(a, "before")
                })
            }), this.fireEvent(G))
        },
        _setCookieWhenPayoffVisible: function() {
            if (this._scrollInfo && !this.get("destroyed")) {
                var e = this._scrollInfo,
                    t = this.get(r),
                    a = this,
                    i = "#" + t.generateID() + " ." + I,
                    n = t.all("." + I),
                    o = a._itemTemplate === y ? .5 : .8;
                n.each(function(t) {
                    var n, s, r = a._heightForItem(t, i);
                    e.isNodeOnscreen(t, -1 * o * r) && (t.removeClass(I), n = t.getData(R), s = t.getData(S), n && s && a.setPayoffCookie(n, !0), a.payoffCards[n] && a.payoffCards[n].play && a.payoffCards[n].play())
                })
            }
        },
        cookieCleanup: function(t, a) {
            var i = e.Af.Cookie.get(O, P);
            i && (e.Object.each(i, function(e, n) {
                n === f || e && n && e.c !== undefined && e.v !== undefined && e.ts !== undefined ? (n !== f && 1 === e.e && +(new Date).getTime() - e.ts > 36e5 * a && delete e.e, e.ts && +(new Date).getTime() - e.ts > 36e5 * t && delete i[n]) : delete i[n]
            }), e.Af.Cookie.set(O, P, i))
        },
        clearIdFromCookie: function(t) {
            var a = e.Af.Cookie.get(O, P);
            a && (e.Object.each(a, function(e, i) {
                i === t && delete a[i]
            }), e.Af.Cookie.set(O, P, a))
        },
        setInvalidPayoffCookie: function(t) {
            var a = this;
            (t = Array.isArray(t) ? t : [t]).forEach(function(t) {
                e.Af.Beacon.error(M, {}, {
                    code: w,
                    poid: t
                }), a.setPayoffCookie(t, !1, !1, !0, !1)
            })
        },
        setRemovedPayoffCookie: function(t) {
            var a = this;
            (t = Array.isArray(t) ? t : [t]).forEach(function(t) {
                e.Af.Beacon.error(M, {}, {
                    code: w,
                    poid: t
                }), a.setPayoffCookie(t, !1, !1, !1, !0)
            })
        },
        setPayoffCookieFavTeams: function(t) {
            var a = e.Af.Cookie.get(O, P);
            t && (a.favteams = {
                teams: t,
                ts: +new Date
            }, e.Af.Cookie.set(O, P, a))
        },
        getPayoffCookieFavTeams: function() {
            var t = e.Af.Cookie.get(O, P);
            return !(!t || !t.favteams) && t.favteams.teams
        },
        setPayoffCookie: function(t, a, i, n, o) {
            var s = e.Af.Cookie.get(O, P),
                r = t,
                l = {};
            l = s && s[r] ? s[r] : {
                c: 0,
                v: 0,
                ts: +new Date
            }, n ? (l.e = 1, l.ts = +new Date) : (a || i) && delete l.e, i && l.c++, a && l.v++, o && (l.r = 1), (s = s || {})[r] = l, e.Af.Cookie.set(O, P, s)
        },
        _initLocationPicker: function() {
            var t, a = this,
                i = a.get(A),
                n = a.get(r).one(D);
            t = {
                container: n,
                user_crumb: i.syncContext.context.crumb || null,
                i13n: {
                    sec: "app-loc"
                },
                glyphHook: "Icon-Fp2",
                tooltip_conf: {
                    position: "bfr"
                }
            }, n && e.use("af-location-panel", function() {
                e.Af.LocationPanel && (new e.Af.LocationPanel(t), a.locationPickerInited || (a.locationPickerInited = !0, a._eventHandles.push(e.Mjata.ModelStore.after("AfLocations:selectedLocationChange", a._handleLocationUpdate, a))))
            })
        },
        _beaconEvent: function(e) {
            this.getRapid().beaconEvent(e, {})
        },
        _handleLocationUpdate: function(t) {
            var a, i = this,
                n = this.get(A),
                o = this.get(r),
                s = t.newVal,
                c = o.one(D).ancestor(l),
                f = c ? c.one(p) : null;
            n && s && f && (a = c.getData(R), s.prevPayoff = a, n.fetchPayoffContent(e.merge(s, {
                type: C
            }), function(t) {
                t && (dust.render("td-applet-stream-atomic-templates-item-single_payoff_item", e.merge(n.toJSON(), t), function(e, a) {
                    !e && a && (f.setHTML(a), i.fireEvent(G), c.setData(R, t.payoffId), c.setData("payoff-woeId", t.woeId), c.setData("payoff-city", t.city))
                }), i.clearIdFromCookie(a), i.setPayoffCookie(t.payoffId, !0, !1, !1, !1))
            }))
        }
    }, {
        ATTRS: {}
    })
}, "@VERSION@", {
    requires: ["af-applet-view", "node-scroll-info", "af-beacon", "af-cache", "af-history", "af-pageviz"]
});
YUI.add("td-applet-stream-fptoday-items-model-v2", function(e) {
    "use strict";
    e.namespace("TD.Applet").StreamFptodayItemsModel2 = e.Base.create("TDAppletStreamFptodayItemsModel2", e.Model, [e.Af.Sync], {
        resource: "stream-atomic.items",
        readonly: !0,
        postForRead: !0,
        loadItems: function(t, a, o) {
            var r = e.merge(a, {
                uuids: [],
                size: t ? t.length : 0
            });
            r.uuids = e.Array.map(t, function(e) {
                return (e.idPrefix || "") + e.id
            }), 0 !== r.uuids.length ? this.load(r, function(a, r) {
                e.Array.each(r.fptoday_items, function(e, a) {
                    e.pos = t[a].pos
                }), o(a, r)
            }) : o(new Error("No more fptoday items to fetch"))
        }
    }, {
        ATTRS: {}
    })
}, "@VERSION@", {
    requires: ["model", "af-sync", "array-extras"]
});
YUI.add("td-applet-stream-fptoday-model-v2", function(e, a) {
    "use strict";
    e.namespace("TD.Applet").StreamFptodayModel2 = e.Base.create("TDAppletStreamFptodayModel2", e.Model, [e.Af.Sync], {
        resource: "stream-atomic",
        readonly: !0,
        postForRead: !0,
        consolidate: !1,
        initializer: function() {}
    }, {
        ATTRS: {
            id: {
                value: "stream-atomic"
            }
        }
    })
}, "@VERSION@", {
    requires: ["model", "af-sync"]
});
YUI.add("td-applet-stream-headerview-v2", function(e) {
    "use strict";
    var t = "config",
        n = "container",
        i = ".inline-filter",
        r = "model",
        a = "stream",
        s = "js-stream-teaser-weather",
        l = "." + s,
        o = l + "-toggle",
        c = e.config.win;
    e.namespace("TD.Applet").StreamHeaderView2 = e.Base.create("TDAppletStreamHeaderView", e.Af.AppletView, [], {
        events: {
            ".js-stream-filter-item a": {
                click: "_handleFilterClick"
            }
        },
        autoRender: !1,
        initializer: function() {
            var i = this,
                a = i.get(r),
                s = i.get(n);
            i._eventHandles = [], i.config = a.get(t), i.secVal = i.rapidGetSec(s) || "strm", i.config.js.filters && i._eventHandles.push(i.get(r).after(t + "Change", e.bind(i._onFilterChange, i))), i.config.weather && (s.once("hover", i._loadWeatherApplet, i), i._eventHandles.push(s.delegate("hover", i._showWeatherDropdown, i._hideWeatherDropdown, l + "," + o, i))), i.config.ui.inline_filters && (i._eventHandles.push(e.Global.on("stream:filtered", i._onInlineFilterChange, i)), i._eventHandles.push(s.delegate("click", i._handleInlineFilterReset, ".js-inline-filter-reset", i)))
        },
        destructor: function() {
            e.Array.each(this._eventHandles, function(e) {
                e.detach()
            }), this._eventHandles = []
        },
        _loadWeatherApplet: function() {
            var t = this,
                i = e.My && e.My.App || e.ApeApp || null,
                r = t.get(n).one(l),
                a = t.config.remoteConfig;
            i && r && a && (t.woeid && (t.remoteConfig.params.woeid = t.woeid), e.Af.Content.remoteApplet(i, {
                type: a.type,
                uri: a.endpoint,
                params: a.params,
                placement: {
                    node: r,
                    where: "replace"
                }
            }, function() {
                r.removeClass("js-stream-teaser-weather-loading")
            }))
        },
        _showWeatherDropdown: function() {
            var e = this.get(n);
            e.one(l).removeClass("D-n"), e.one(o).addClass("stream-bgc-grey")
        },
        _hideWeatherDropdown: function() {
            var e = this.get(n);
            e.one(l).addClass("D-n"), e.one(o).removeClass("stream-bgc-grey")
        },
        _handleFilterClick: function(i) {
            var a, s, l = i.currentTarget,
                o = l.ancestor(".js-stream-filter-item"),
                d = this.get(r),
                f = o.getData("filter"),
                g = {};
            i.preventDefault(), o.ancestor(".js-stream-more-dropdown") ? (o.ancestor(".js-stream-static-filters") ? g.ft = "1" : g.ft = "2", g.t4 = "mu") : g.ft = "1", g.cpos = o.ancestor().get("children").indexOf(o) + 1, this.rapidBeaconClick(l, g), this.containerY = d.get(t).js.sticker ? this.get(n).getY() : 0, d.get(t).js.sticker && e.DOM.docScrollY() > this.containerY && (a = d.get(t).js.sticker_toptarget, s = e.one(a) ? this.containerY - e.one(a).get("offsetHeight") - 10 : this.containerY, c.scrollTo(0, s)), d.set(t + ".category", f)
        },
        _handleInlineFilterReset: function(n) {
            var s = n.currentTarget,
                l = this.get(r),
                o = l.getDataModel(a),
                d = e.one(i),
                f = d.one(".inline-filter-label"),
                g = l.get("inlineFilter.unfilteredPosY"),
                p = {};
            n.preventDefault(), d && f && (f.set("innerHTML", ""), d.addClass("D-n")), p[t + ".category"] = "", p.inlineFilter = {}, l.setAttrs(p), o && o.poll && o.poll.resume && o.poll.resume(), g && setTimeout(function() {
                c.scrollTo(0, g)
            }, 1e3), this.rapidBeaconClick(s)
        },
        _onInlineFilterChange: function(t) {
            var s, l = this.get(r),
                o = l.getDataModel(a),
                d = t && t.category || null,
                f = e.one(i),
                g = f.one(".inline-filter-label"),
                p = l.get("inlineFilter.label"),
                h = this.get(n);
            f && g && d && p && (o && o.poll && o.poll.pause && o.poll.pause(), g.set("innerHTML", decodeURIComponent(p)), f.removeClass("D-n"), s = h.getY() - f.get("offsetHeight"), c.pageYOffset > s + 10 && c.scrollTo(0, s - 50))
        },
        _onFilterChange: function(i) {
            var a, s, l, o, c, d, f, g, p = !1;
            i.newVal.category !== i.prevVal.category && (s = (a = this.get(r)).get(t), o = i.newVal.category, l = a.get(t).filters, e.Array.each(l.filterBarList, function(e) {
                e.id === o ? (e.selected = !0, p = !0) : e.selected = !1
            }), p || (d = l.filterBarList.pop(), e.Array.each([l.filterDropList, l.filterDynamicList], function(t) {
                if (!c) {
                    var n, i = e.Array.find(t, function(e, t) {
                        return n = t, e.id === o
                    });
                    i && (c = i, t.splice(n, 1))
                }
            }), c || (c = {
                id: o,
                dynamic: !0,
                name: o.replace(/_/g, " ")
            }, (g = a.interests) && (f = g.getInterest(o)) && (c.name = decodeURIComponent(f.name))), c.selected = !0, l.filterBarList.push(c), d.dynamic ? l.filterDynamicList.unshift(d) : l.filterDropList.unshift(d)), s.js.swipe_filters ? (this.get(n).one(".Selected").removeClass("Selected"), this.get(n).one('.js-stream-filter-item[data-filter="' + o + '"]').addClass("Selected")) : this.forceRender())
        }
    }, {
        ATTRS: {}
    })
}, "@VERSION@", {
    requires: ["af-applet-view"]
});
YUI.add("td-applet-stream-items-model-v2", function(e) {
    "use strict";
    e.namespace("TD.Applet").StreamItemsModel2 = e.Base.create("TDAppletStreamItemsModel2", e.Model, [e.Af.Sync], {
        resource: "stream-atomic.items",
        readonly: !0,
        postForRead: !0,
        loadItems: function(t, s, i, a, o) {
            var n = {},
                r = {},
                c = {},
                d = s.cpos || 0,
                m = s.cposy || 0,
                u = e.merge(s, {
                    uuids: [],
                    size: t ? t.length : 0
                });
            e.Array.each(t, function(e, t) {
                if (n[e.id] = e, "ad" === e.type || "cm" === e.type) {
                    if (s.ads.pagination && !e.link && (a && a.length > 0 && ((e = a.shift()).beacon = e.beacon.replace("$(AD_POSN)", t + 1 + d)), !e.link)) return;
                    r[t] = e, c[t + d] = e.full_template
                } else e.isTodayItem || "pic_sm" === e.template ? r[t] = e : e.id ? u.uuids.push((e.idPrefix || "") + e.id) : r[t] = e;
                e.first_history && (u.first_history = e.id), e.tweetMatch && (u.tweets = u.tweets || [], u.tweets.push(e.id))
            }), i && (c[u.size + d] = i.full_template), e.Object.isEmpty(c) || (u.adsTemplatesByIndex = c), s.ui.test_uuid && u.uuids.unshift(s.ui.test_uuid), s.continuation || 0 !== u.uuids.length ? this.load(u, function(t, s) {
                !t && s && s.stream_items && (e.Object.each(r, function(e, t) {
                    e.i13n.bpos = u.bpos, s.stream_items.splice(t, 0, e)
                }), e.Array.each(s.stream_items, function(t, s) {
                    t.id && n[t.id] && e.mix(t, n[t.id]), t.i13n.cpos = u.cpos + s + 1, t.i13n.cposy = m + 1, m++, t.storyline && e.Array.each(t.storyline, function(e) {
                        e.cposy = m + 1, m++
                    })
                }), s.cposy = m), o(t, s)
            }) : o(new Error("No more stream items to fetch"))
        }
    }, {
        ATTRS: {}
    })
}, "@VERSION@", {
    requires: ["model", "af-sync"]
});
YUI.add("td-applet-stream-mainview-v2", function(e, t) {
    "use strict";
    var a = "click",
        n = "config",
        i = "container",
        s = ".js-stream-content",
        o = ".js-stream-content-link",
        r = !1,
        l = "height",
        c = "intl",
        d = ".js-stream-extra-thumbs",
        m = "model",
        u = "mouseout",
        p = null,
        g = "opacity",
        _ = "td-applet-stream-atomic-templates-",
        f = "span",
        h = ".js-stream-stateful-ribbon",
        v = "stream",
        y = ".strm-left",
        b = !0,
        C = "ul",
        w = "viewupdate",
        A = e.config.win,
        k = "comments-fade",
        P = "comment-count",
        T = "js-stream-comment-counter",
        S = "js-stream-comment-hidden",
        j = "js-stream-comment-counter-update",
        D = "js-comments-reacting",
        N = "need-update",
        I = ".js-stream-side-buttons",
        L = "animated",
        M = "fadeIn",
        O = -50,
        V = "clientWidth",
        E = ".js-stream-upsell-carousel",
        B = "Disabled",
        H = ".js-stream-upsell-left",
        R = ".js-stream-upsell-right",
        x = "ntk-muted-btn",
        U = "ntk-video-unmuted";
    e.namespace("TD.Applet").StreamMainView2 = e.Base.create("TDAppletStreamMainView2", e.TD.Applet.StreamBaseView2, [], {
        events: {
            ".js-detect-loc": {
                click: "_onClickDetectLocation"
            },
            ".js-stream-reload": {
                click: "_onClickReload"
            },
            ".js-stream-load-btn": {
                click: "_loadMore"
            },
            ".js-stream-stateful-new-items": {
                click: "_onClickNewItems"
            },
            ".js-stream-stateful-v2-new-items": {
                click: "_onClickNewItems"
            },
            ".ntk-volume-btn": {
                click: "_onClickNtkVolBtn"
            },
            ".js-stream-ad .mute-btn": {
                click: "_onClickAdMuteBtn"
            }
        },
        _loading: r,
        _loadingNode: p,
        _cachedAdHeight: p,
        _itemTemplate: "items",
        autoRender: r,
        initializer: function() {
            var t, s, r, l, c, d, p, g = this,
                _ = g.get(i),
                f = e.UA.ie && e.UA.ie < 8,
                h = g.get(m),
                y = h.get(n) || {};
            g._itemTemplate = y.ui.item_template, g._eventHandles.push(h.getDataModel(v).after("new_itemsChange", e.bind(g._onNewItemsFetched, g))), g._eventHandles.push(e.after("resize", e.bind(g._afterResize, g))), g._eventHandles.push(h.after(["settingsChange", "configChange"], e.bind(this._onConfigChange, this))), g.secValue = g.rapidGetSec(_) || "strm", g.bodyNode = e.one("body"), g._cachedAdHeight = {}, g._previousOffsetWidth = _.get("offsetWidth"), y.ui.tap_for_summary && e.use("event-tap", "stencil-fx-collapse", function() {
                l = _.delegate([a, "tap"], g._onCollapseTargetClicked, ".js-stream-tap-target", g), !e.UA.android && l.sub && (l.sub._extra = {
                    sensitivity: 5
                })
            }), y.ui.stream_actions && !f && e.use("stream-actiondrawer-v2", function(a) {
                (t = (e = a).Stream.ActionDrawer2) && (g.actionDrawer = new t(g))
            }), y.onboarding.pos > -1 && e.use("stream-onboard-v2", function(t) {
                (r = (e = t).Stream.Onboard) && (g.onboard = new r(g))
            }), _.one(".strm-right-menu-roundup") && e.use("stream-needtoknow-anim", function(t) {
                (c = (e = t).Stream.NeedToKnowAnim) && (g.needtoknowAnim = new c(g))
            }), y.ui.thumbnail_hover && g._eventHandles.push(_.delegate(["mouseover", u], g._onHoverContentLink, o, g)), e.Af.Utils.userSignedIn() || g._eventHandles.push(_.delegate(a, g._onLoginClick, ".js-stream-ylogin", g)), y.ui.item_templates && g._eventHandles.push(e.Global.on("stream:template", g._onTemplateEvent, g)), y.ui.inline_filters && g._eventHandles.push(_.delegate(a, g._onInlineFilterClick, ".js-stream-entity", g)), g._initState(), y.ui.show_jump_to_historical_items && g._loadMore(b), g.payoffEnabled && ((s = h.toJSON().data.stream.invalidPayoffItems) && s.length && g.setInvalidPayoffCookie(s), g.cookieCleanup(y.ui.payoffExpTime, y.ui.payoffInvalidTime)), y.ui.comments && g._setupComments(), y.ui.storyline_upsell_count && (d = _.one(E)) && (g.upsellItem = d, g._eventHandles.push(d.delegate(a, g._handleUpsellScroll, H + "," + R, g))), y.ads.inline_video_lp && "undefined" != typeof window.MSPL_rendered && 1 === window.MSPL_rendered && (this.splashPreview = y.ads.splash_preview, this.splashPreviewTime = y.ads.splash_preview_time, this.splashPreview && (this.splashPreviewTimers = {}, this.splashAutopause = {}, this.splashPlaying = {}), "undefined" != typeof Lightning && "MobileVideoPlayer" in Lightning ? g._playLightningPlayerVid() : g._eventHandles.push(e.Global.on("stream:splashready", g._playLightningPlayerVid, g))), (y.ui.enable_inline_ntk_video || y.ads.inline_video_fb) && g._eventHandles.push(e.Global.on("video-manager:create_player_instance", g._onCreatePlayerInstance, g)), y.ads && y.ads.promoAds && y.ads.promoAds.asyncBeacon && this._eventHandles.push(_.delegate("click", this._onClickPromoAd, ".js-promo-link", this)), (y.ads && y.ads.app_install && y.ads.bypass_redirect || y.ads.smad && y.ads.smad.bypass_redirect) && this._eventHandles.push(_.delegate("click", this._onClickAppInstallLink, ".js-stream-ad-app-link", this)), g._isVvEnabled(y) && e.use("td-applet-stream-atomic-vertical-video-util", function(e) {
                var t = e.TD.Applet.StreamVerticalVideoUtil;
                g.vvUtil = new t({
                    config: y,
                    container: _,
                    guid: g.get("guid"),
                    model: g.get(m),
                    rapid: g.getRapid()
                }), g.vvUtil.init()
            }), y.ui.highlander_2017_enabled && e.use("stream-mobile-slider", function(t) {
                var a, n;
                e = t, (a = {
                    batchSize: 10,
                    container: "#ntk-carousel-holder",
                    carousel: "#ntk-carousel",
                    slides: ".ntk-item",
                    treadmill: !1,
                    indicator: "#ntk-indicator",
                    i13n: {
                        sec: "strm",
                        itc: 1,
                        elm: "swipe",
                        cpos: 1,
                        subsec: "needtoknow",
                        pkgt: "need_to_know"
                    },
                    loadMore: y.ui.ntk_load_more,
                    rapid: g.getRapid(),
                    model: g.get("model")
                }).loadMore && (a.indicator = null), g.sliderOptions = a, (n = e.Stream.StreamMobileSlider) && (g.slider = new n(g), g.slider.init())
            }), g.ads_video_fb = y.ads.inline_video_fb, g.ads_video_fb && (g.videoAdPlayers = {}), (p = _.one("#deal_of_the_day")) && p.one(".js-countdown") && g._createCountDown(p.one(".js-countdown"))
        },
        handleBackBtn: function() {
            this.getRapid().beaconPageview(), this._fireComscoreBeacon()
        },
        _onCreatePlayerInstance: function(t) {
            var a, n, s, o, r, l, c, d = this,
                m = d.get(i),
                u = m.one("#ntk-carousel .ntk-item:first-child");
            u && t && (a = u.getData("pkg-video-id"), n = e.Object.getValue(t, ["player", "config", "playlist", "mediaItems", "0", "id"]), a && n && a === n && (o = (s = t.swapNode && t.swapNode.one(".js-stream-item-title")) && s.get("parentNode")) && ((t.playerNode && t.playerNode.one(".yvp-main")).appendChild(o.cloneNode(b).addClass("C(white) Z(1)")), d.vp = t.player, e.later(0, this, function() {
                u.addClass("ntk-video-mgr-inited")
            }))), d.ads_video_fb && t && t.playerNode && t.playerNode.ancestor(".js-stream-ad") && (r = t.playerNode.ancestor(".js-stream-ad"), l = YAHOO.VideoPlatform.API_Events, (c = r.one(".mute-btn")) && (d.videoAdPlayers[r.generateID()] = t.player, t.player.on(l.AD_PLAYBACK_START, function() {
                    c.show()
                }),
                r.hasClass("js-stream-smad") || t.player.on(l.AD_PLAYBACK_STOP, function() {
                    c.hide()
                })))
        },
        _onClickPromoAd: function(t) {
            var a, i = this.get(m),
                s = i.get(n),
                o = s.ads.promoAds.asyncBeaconWait || 300,
                r = t.currentTarget,
                l = r.ancestor(".js-stream-promo-ad"),
                c = l && l.getData("asyncbeacon"),
                d = s.ads.promoAds.enableBusyWait,
                u = s.ads.promoAds.noWaiting;
            if (r && c)
                if (u) e.Af.Beacon.send(c);
                else if (d) {
                for (t.halt(!0), e.Af.Beacon.send(c), a = new Date; new Date - a <= o;);
                p()
            } else t.halt(!0), e.Af.Beacon.send(c), setTimeout(p, o);

            function p() {
                r.getAttribute("target") && "_blank" === r.getAttribute("target") ? A.open(r.getAttribute("href"), "blank") : A.location = r.getAttribute("href")
            }
        },
        _onClickAppInstallLink: function(t) {
            var a, i = this.get(m),
                s = i.get(n),
                o = s.ads.asyncBeaconWait || 300,
                r = t.currentTarget,
                l = r.ancestor(".js-stream-ad"),
                c = l && l.getData("asyncbeacon");
            if (r && c) {
                for (t.halt(!0), e.Af.Beacon.send(c), a = new Date; new Date - a <= o;);
                r.getAttribute("target") && "_blank" === r.getAttribute("target") ? A.open(r.getAttribute("href"), "blank") : A.location = r.getAttribute("href")
            }
        },
        _onCollapseTargetClicked: function(t) {
            if (t.preventDefault(), t.type !== a) {
                var n = t.target.ancestor(s),
                    i = {},
                    r = this.getRapid();
                e.Stencil.Fx("execute", n.all(".js-stream-collapse-target"), {
                    fx: "collapse",
                    toggle: {}
                }), n && r && r.beaconClick && ((i = this.rapidParseYLK(n.one(o))).rspns = "op", i.itc = "1", r.beaconClick(this.secValue, "op", 0, i))
            }
        },
        _setRibbonWidth: function(e) {
            var t = this.get(i),
                a = t.one(h);
            e || (e = a), e && !e.hasClass("Pos-r") && e.setStyle("width", t.get("offsetWidth"))
        },
        _onTemplateEvent: function(e) {
            e.template && e.template !== this._itemTemplate && (this._itemTemplate = e.template, this._resetCachedAdHeight(), e.silent || this.get(m).set(n + ".ui.item_template", e.template))
        },
        _onInlineFilterClick: function(e) {
            var t = e.currentTarget.ancestor(".js-stream-entity", b, ".js-stream-interest-list"),
                a = this.get(m),
                i = a.get(n),
                s = t.getData("filter"),
                o = t.getData("filter-label"),
                r = {};
            e.preventDefault(), s && o && (r[n + ".category"] = s, r.inlineFilter = {
                label: o,
                unfilteredPosY: i.category ? a.get("inlineFilter.unfilteredPosY") : A.pageYOffset
            }, a.setAttrs(r))
        },
        _onClickReload: function(e) {
            e.preventDefault(), this._reloadStream()
        },
        _afterResize: function() {
            var t = this.get(m).get(n),
                a = this.get(i).get("offsetWidth");
            t.ui.hq_ad_template && this._resetCachedAdHeight(), t.ads.generic_viewability && this._resetCachedWindowHeight(), this._previousOffsetWidth !== a && (this._previousOffsetWidth = a, e.later(200, this, this._setRibbonWidth), t.ui.tap_for_summary && this._resetCollapseHeights())
        },
        _resetCollapseHeights: function() {
            var e;
            this.get(i).all(".Collapse-opened.js-stream-collapse-target").each(function(t) {
                t.addClass("no-transition"), t.setStyle(l, "auto"), e = t.get("scrollHeight") + "px", t.setStyle(l, e), t.removeClass("no-transition")
            })
        },
        _onConfigChange: function(e) {
            e.restore || this._reloadStream(e)
        },
        _reloadStream: function(t) {
            var a = this;
            a._loading = !0, a.get(m).reload(function(n, i) {
                !n && i && (i.comscore || i.comscore_panel_site) && a._fireComscoreBeacon(), a._loading = !1, a.forceRender(), a.actionDrawer && a.actionDrawer.markItems(), t && t.newVal && t.newVal.category && t.prevVal && t.newVal.category !== t.prevVal.category && e.Global.fire("stream:filtered", {
                    category: t.newVal.category
                })
            })
        },
        _onScroll: function() {
            var t = this,
                a = t.get(m).get(n);
            t.scrollEnabled && (t._scrollBuffer && t._loadMore(), t.payoffEnabled && t._setCookieWhenPayoffVisible(), t._beaconVisibleAds(b), t._fireComscoreBeacon(b), t.scrollTimer && (t.scrollTimer.cancel(), t.scrollTimer = p), t.scrollTimer = e.later(200, t, function() {
                t.scrollTimer.cancel(), t.scrollTimer = p, a.ui.animate_comments && t._animateComments()
            }))
        },
        _loadMore: function(t) {
            if (t || !this._loading && this._loadingNode && !this.get("destroyed")) {
                var a, o, l, c = this,
                    d = c.get(i),
                    u = d.get("region"),
                    g = d.get("viewportRegion"),
                    f = c._loadingNode,
                    h = c.actionDrawer ? c.actionDrawer.removedItems : [];
                if (t || c._manuallyLoading || !c._scrollBuffer || !(0 === u.height || u.bottom >= g.bottom + c._scrollBuffer))
                    if (o = c.get(m), (l = o.get(n)).ui.viewer && c._manuallyLoading && !c._navigateUuid) c._manuallyLoading = r;
                    else {
                        if (a = d.one(".js-stream-load-btn"), !o.hasMoreItems()) return f.remove(), c._loadingNode = p, void(a && a.remove());
                        c._loading = b, c._scrollBuffer === c.INITIAL_SCROLL_BUFFER && A.scrollBy(0, -1), o.getNextBatch(h, function(t, a) {
                            c._loading = r, f.getDOMNode() && f.inDoc() && (!t && a && a.stream_items ? ((a.comscore || a.comscore_panel_site) && (a.stream_items[0].newItem = b), dust.render(_ + c._itemTemplate, e.merge(a, o.toJSON()), function(t, a) {
                                !t && a && (d.one(".streamv2").append(a), l.ui.viewer && d.one(s + '[data-uuid="' + c._navigateUuid + '"]') && (c._navigateUuid = p), c.fireEvent(w, {
                                    batch: b
                                }), e.Global.fire("stream:nextbatchloaded"), c._playLightningPlayerVid(), l.ui.userintent_enabled && A && A.wafer && A.wafer.base.sync(d.getDOMNode()))
                            })) : c._loadMore())
                        })
                    }
            }
        },
        _handleLightningPause: function(t, a) {
            var n, i, s, o, r;
            t && a && (n = this, (i = e.one("#" + a)) && (n.splashAutopause || (n.splashAutopause = {}), n.splashPreviewTimers || (n.splashPreviewTimers = {}), n.splashPlaying || (n.splashPlaying = {}), n.splashAutopause[a] || (s = t.player && t.player.player && t.player.player.player, o = t.player && t.player.events, s && o && (r = s.player.renderer, n.splashAutopause[a] = !0, n.splashPreviewTimers[a] = setInterval(function() {
                if (!r.player._Timer) return clearInterval(n.splashPreviewTimers[a]), void(n.splashPreviewTimers[a] = null);
                if (1e3 * r.player._currentTime > n.splashPreviewTime) {
                    if (!i.one(".mb_player_pause")) {
                        i.one(".mb_player_mute") && i.one(".mb_player_mute").insert('<div class="mb_player_icon mb_player_play"></div>', "after");
                        var e = i.one(".mb_player_icon");
                        e && e.on("click", function(i) {
                            i.halt(), n.splashPlaying[a] ? (n.splashPlaying[a] = !1, e.replaceClass("mb_player_pause", "mb_player_play"), t.player.pause(), s.ad_playing = !1, s.scroll_event_processing = !0) : (n.splashPlaying[a] = !0, s.scroll_event_processing = !1, t.player.play(), e.replaceClass("mb_player_play", "mb_player_pause"))
                        }), o.addEventListener(1e3, function() {
                            e.hasClass("D(n)") || e.addClass("D(n)")
                        }), o.addEventListener(230, function() {
                            e.getDOMNode().classList.remove("D(n)"), e.hasClass("mb_player_pause") || (e.removeClass("mb_player_play"), e.addClass("mb_player_pause")), n.splashPlaying[a] = !0
                        })
                    }
                    n.splashPlaying[a] = !1, t.player.pause(),
                        s.scroll_event_processing = !0, s.ad_playing = !1, clearInterval(n.splashPreviewTimers[a]), n.splashPreviewTimers[a] = null
                }
            }, 1e3)))))
        },
        _playLightningPlayerVid: function() {
            var t, a, i = this,
                s = i.get(m),
                o = s.get(n);
            o.ads.inline_video_lp && "undefined" != typeof window.MSPL_rendered && 1 === window.MSPL_rendered && "undefined" != typeof Lightning && "MobileVideoPlayer" in Lightning && (t = document.querySelectorAll(".js-video-content.lp-unattached"), a = s.get("i18n"), Array.prototype.forEach.call(t, function(t) {
                var n, s, o, r, l, c, d = t.getAttribute("data-vast");
                d = d.replace(/\\\//g, "/"), n = t.querySelector(".lp-target"), s = t.querySelector(".lp-spinner"), o = t.querySelector(".js-video-target"), n && s && o && (s.classList.remove("D(n)"), n.classList.remove("D(n)"), o.classList.remove("D(tbr)"), o.classList.add("D(n)"), (r = n.getAttribute("id")) && (l = {
                    ad: {
                        preroll: d,
                        diagnostics: {
                            spId: "0",
                            xtra: "0528e8cf-b47c-477f-b9e5-3e120d36c6ea",
                            cId: ""
                        }
                    },
                    containerId: r,
                    muted: !0,
                    debug: !1,
                    startTime: new Date,
                    crumb: "",
                    adSlugText: a.MSPL_ADVERTISEMENT || "Ad"
                }, (c = new Lightning.PlayerFactory).player = c.createViewablePlayer(l, ""), "init" in c.player && (c.player.init(), t.classList.remove("lp-unattached")), i.splashPreview && i.splashPreviewTime > 0 && !i.splashAutopause[r] && e.Global.on("stream:splashstart", function() {
                    c.player && c.player.player && c.player.player.player && c.player.player.player.divElement && c.player.player.player.divElement.id === r && i._handleLightningPause(c, r)
                })))
            }))
        },
        _fireComscoreBeacon: function(t) {
            var a, s = this.get(m).get(n);
            if (t) {
                if (!(a = this.get(i).one(".js-stream-new-item")) || this._scrollInfo && !this._scrollInfo.isNodeOnscreen(a)) return;
                a.removeClass("js-stream-new-item")
            }
            e.use("af-comscore", function() {
                var t = "/pageview/",
                    a = {
                        url: s.ui.comscore_c7_url
                    };
                s.ui.comscore_panel_site && (a = e.merge(a, {
                    panelPath: t,
                    panelQuery: {
                        client: 1,
                        property: s.ui.comscore_panel_site
                    }
                })), e.Af.Comscore.beacon(a)
            })
        },
        _onHoverContentLink: function(t) {
            var a, n, i, s, o, r, l = t.currentTarget,
                c = l.ancestor(".js-stream-content,.js-stream-ad"),
                m = c.one(".js-stream-thumb-overlay"),
                p = c.one(d),
                g = function(e) {
                    if (e) {
                        var a = t.type === u ? "scale(1)" : "scale(1.1)";
                        e.setStyle("transition", "all .5s cubic-bezier(0.36,.21,0.3,.71) .25s"), e.setStyle("transform", a), e.setStyle("-webkit-backface-visibility", "hidden")
                    }
                },
                _ = function(a) {
                    var n = c.all(".strm-right a"),
                        i = n.item(a);
                    e.Lang.isNumber(a) && n.size() && i && (t.type !== u ? i.setStyle("color", "#0078ff") : i.removeAttribute("style"))
                };
            if (m) m.toggleClass("V-h", t.type === u);
            else if (p) {
                if (a = l.ancestor(".strm-right"), l.ancestor(d + ", .strm-left .strm-headline")) return o = c.all(y + " .strm-headline img, .js-stream-extra-thumbs > div img"), g(s = l.one("img")), void _(o.indexOf(s));
                if (a) return n = l.ancestor(".js-stream-storyline", !0), i = l.ancestor(".strm-headline", !0), void(n ? (r = n.all(".storyline").indexOf(l.ancestor(".storyline", !0)), g(c.all(y + " " + d + " img").item(r))) : i && g(s = c.one(y + " .strm-headline img")))
            }
        },
        _onLoginClick: function(e) {
            var t = e.target;
            e.preventDefault(), A.location = t.getAttribute("href") + encodeURIComponent(A.location.href)
        },
        _onNewItemsFetched: function(t) {
            var a = this,
                s = a.get(m),
                o = s.get(n),
                r = t.newVal.items,
                l = {
                    bpos: s.get("batch_new") + 1,
                    cpos: -(s.get("fetched_new") + 1)
                };
            r && r.length && dust.render(_ + "stateful", {
                new_item_count: r.length,
                intl: a.get(m).get(c),
                i13n: l,
                config: o
            }, function(t, n) {
                if (n) {
                    var s = a.get(i),
                        o = e.Node.create(n),
                        r = s.one(h);
                    a._setRibbonWidth(o), r ? (r.one(f).setStyle(g, "0"), e.later(800, null, function() {
                        r.remove(), s.one(C).prepend(o), e.Stencil.initAll(s), o.one(f).setStyle(g, "1"), a.fireEvent(w)
                    })) : (o.one(f).setStyle(g, "1"), s.one(C).prepend(o), e.Stencil.initAll(s), a.fireEvent(w)), e.Global.fire("stream:newitemsloaded")
                }
            }), t.newVal.invalidPayoffItems && this.setInvalidPayoffCookie(t.newVal.invalidPayoffItems)
        },
        _onClickDetectLocation: function(t) {
            var a, i, s = this,
                o = s.get(m),
                r = t && t.target,
                l = o.get(n),
                c = o.get("i18n"),
                d = r && r.ancestor(".strm-nfl-card"),
                u = e.Node.create('<img src="https://s.yimg.com/zz/nn/lib/metro/g/my/anim_loading_sm.gif" width="16" height="16" class="D(b) Mx(a)" alt="" />');
            d.one(".js-detect-loc").setHTML(u), a = function(t) {
                var a = '<a class="Bd(1px) Bgc(#208ff7) Px(20px) Py(10px) D(b) C(#fff) Fz(16px) Bdrs(3px) Mb(20px) Mt(10px) Ta(c)" href="' + l.ui.nfl_sports_app_promo + '">' + c.OPEN_YAHOO_SPORTS + "</a>",
                    n = e.Node.create(a),
                    i = d.one(".js-detect-loc");
                i.setHTML(n), i.removeClass("js-detect-loc"), "object" == typeof t && 1 === t.code && e.Af.Cookie.set("td-applet-stream", "SHOW_NFL_APP_PROMO", !0)
            }, i = {
                timeout: 3e4
            }, A.navigator.geolocation.getCurrentPosition(function(e) {
                var t = {
                    accuracy: e.coords.accuracy + "",
                    latitude: e.coords.latitude + "",
                    longitude: e.coords.longitude + ""
                };
                "string" == typeof l.ui.video_reel_path && (t.videoReelPath = l.ui.video_reel_path), o.sportsreelRead(Object.assign({}, t), s._playCardVideo(d, t, a))
            }, a, i)
        },
        _playCardVideo: function(t, a, n) {
            return function(i, s) {
                if (i) n && n(i);
                else {
                    var o = function() {
                        var n, i, o, r, l = e.VideoManager.createPlayerContainer(null, t);
                        s && (n = l.one(".StretchedBox").generateID(), s.autoplay = !0, s.html5 = !0, a && (s.allowGeoRequest = !0, s.geoData = a, s.lang = "en-US", s.region = "US", s.site = "frontpage", s.YVAP = {
                            accountId: "82",
                            playContext: "ruleset11",
                            timeout: 3
                        }), (i = new YAHOO.VideoPlatform.VideoPlayer(s)) && (r = {
                            playerNode: o = t.one(".js-video-target"),
                            instance: i,
                            _is_playing: !0
                        }, o.replace(l), i.render("#" + n), e.Af.Event.fire("video-manager:add-remote-player", r)))
                    };
                    e.VideoManager && (e.VideoManager._isPlayerJSLoaded() ? o() : e.VideoManager.initPlayerJs(o))
                }
            }
        },
        _onClickNtkVolBtn: function(e) {
            var t, a, n, s = this,
                o = s.get(i),
                l = o && o.one(".ntk-volume-btn");
            l && s.vp && s.vp.controls && (n = s.get(m).get("i18n"), a = l.one("b"), l.toggleClass(x).toggleClass("ntk-unmuted-btn"), (t = o.one("#ntk-carousel .ntk-item:first-child")) && l.hasClass(x) ? (s.vp.controls.setMute(b), t.removeClass(U), a && a.set("textContent", n.VOL_UNMUTE_BTN)) : (t.addClass(U), s.vp.controls.setMute(r), a && a.set("textContent", n.VOL_MUTE_BTN)))
        },
        _onClickAdMuteBtn: function(e) {
            var t, a, n = this,
                i = e.target,
                s = i.ancestor(".js-stream-ad");
            s && n.videoAdPlayers && n.videoAdPlayers[s.generateID()] && (t = n.videoAdPlayers[s.generateID()], (a = s.one(".mute-btn")) && (a.hasClass("mute-on") ? (t.controls.setMute(!1),
                a.replaceClass("mute-on", "mute-off")) : (t.controls.setMute(!0), a.replaceClass("mute-off", "mute-on"))))
        },
        _onClickNewItems: function(t) {
            var a = this,
                s = a.get(m),
                o = s.getDataModel(v),
                r = a.get(i),
                l = t.currentTarget.ancestor(h),
                d = l.previous(".StickyPholder"),
                u = o.get("new_items"),
                p = e.one("#UH"),
                g = p ? p.get("offsetHeight") + 5 : 0,
                f = 0,
                y = {
                    ccode: o.get("ccode"),
                    config: s.get(n),
                    i18n: s.get("i18n"),
                    intl: s.get(c),
                    stream_items: u.items
                };
            t.preventDefault(), dust.render(_ + a._itemTemplate, e.merge(s.toJSON(), y), function(t, i) {
                !t && i && (d && d.remove(), l.unplug("StencilSticker").remove(), r.one(C).prepend(i), f = r.getY() - g, A.pageYOffset > f && e.use("anim", function() {
                    a.scrollTopAnimation || (a.scrollTopAnimation = new e.Anim({
                        node: e.UA.webkit ? "body" : "html",
                        easing: e.Easing.easeOutStrong,
                        to: {
                            scrollTop: f
                        }
                    })), a.scrollTopAnimation.run()
                }), (u.comscore || u.comscore_panel_site) && a._fireComscoreBeacon(), s.insertNewItems(y.stream_items), s.get(n).ui.enable_stream_notify && s.notifyNewItemsRead(), a.fireEvent(w))
            })
        },
        _heightForAd: function(e, t) {
            var a, n = this._cachedAdHeight;
            return t in n || (a = e.get("clientHeight"), n[t] = a), n[t]
        },
        _resetCachedAdHeight: function() {
            this._cachedAdHeight = {}
        },
        _setupComments: function() {
            this.get(m).get(n).ui.animate_comments && this._animateComments(!0)
        },
        _animateComments: function(e) {
            var t, a, n, i, s = this,
                o = this._scrollInfo,
                r = e !== undefined ? M : k;
            t = o.getOnscreenNodes("." + T + "." + S, O), a = o.getOnscreenNodes("." + T + "." + N, O), n = o.getOnscreenNodes("." + D + "." + S, O), i = o.getOnscreenNodes("." + T + "." + S, O), t.size() && (t.removeClass(S), s._animateCommentsNode(t, M)), a.size() && (a.each(function(e) {
                s._commentsUpdate(e)
            }), t.removeClass(N)), n.size() && (n.removeClass(S), i.removeClass(S), s._animateCommentsNode(n, r), s._animateCommentsNode(i, r))
        },
        _animateCommentsNode: function(t, a, n) {
            t.addClass(a).addClass(L), e.later(1500, this, function() {
                t.removeClass(a).removeClass(L), n && n()
            })
        },
        _commentsUpdate: function(e, t) {
            var a, i, o, r, l, c, d, u, p = this,
                g = p.get(m),
                _ = g.get(n),
                f = e.ancestor(s),
                h = f.one(I);
            _.ui.comments_reactions_enabled ? (c = f.one("." + T), o = f.one("." + D), a = e.ancestor(".ActionComments", b, I).getAttribute("data-cmntnum"), d = (l = g.get("i18n")).REACTED, u = l.REACTING, _.device && "desktop" === _.device && (d = l.PERSON_REACTED, u = l.PEOPLE_REACTING), t !== undefined && o && (1 === a ? o.setContent(d) : a > 1 && o.setContent(u), i = e.getData(P), c.setContent(t), p._animateCommentsNode(o, k), p._animateCommentsNode(c, k))) : (r = f.one("." + j), i = e.getData(P), r.setContent(i), h.addClass("has-comments"), p._animateCommentsNode(e, "fadeOut"), p._animateCommentsNode(r, M, function() {
                e.setContent(""), e.replaceClass(T, j), r.replaceClass(j, T)
            }))
        },
        _handleUpsellScroll: function(e) {
            var t, a, n, i, s, o = e.target,
                l = o.ancestor(H + "," + R, b, E),
                c = this.upsellItem,
                d = c.one(".js-stream-upsell-ul"),
                m = l.test(R),
                u = this.upsellLeft || 0,
                p = c.all(".js-stream-upsell-item"),
                g = c.one(".strm-upsell-gradient-left"),
                _ = c.one(".strm-upsell-gradient-right"),
                f = r;
            g.removeClass(B), _.removeClass(B), m ? (a = c.one(H), n = l, p.each(function(e) {
                var a = e.getX() + e.get("clientWidth") < c.getX() + c.get("clientWidth");
                t || a || !f ? a && (f = b) : t = e
            }), t && (a.removeClass(B), n.removeClass(B), (i = t.getX() - c.getX() + u) > (s = d.get("scrollWidth") - c.get(V)) && (n.addClass(B), _.addClass(B), i = s))) : (a = l, n = c.one(R), p.each(function(e) {
                var a = e.getX() > c.getX();
                !t && a && (t = e)
            }), t && (a.removeClass(B), n.removeClass(B), 0 > (i = u - c.get(V)) && (a.addClass(B), g.addClass(B), i = 0))), d && i !== undefined && (d.setStyle("transform", "translate3d(" + -i + "px,0,0)"), this.upsellLeft = i)
        },
        _isVvEnabled: function(t) {
            var a = t && t.ui && t.ui.enable_vertical_video,
                n = e.UA.ios >= 10 && (e.UA.safari || A.navigator.standalone) && e.UA.userAgent.indexOf("FxiOS") < 0 && !A.opera,
                i = e.UA.android && e.UA.chrome >= 53;
            return a && (n || i)
        },
        _createCountDown: function(t) {
            var a, n = this,
                i = ["hours", "minutes", "seconds"],
                s = {};
            e.Array.forEach(i, function(e, a) {
                s[e] = t.one(".js-countdown-" + e)
            }), (a = t.getAttribute("data-js-countdown-enddate")) && e.Object.size(s) === i.length && n._initializeClock(s, a)
        },
        _getTimeRemaining: function(e) {
            var t = Date.parse(e) - Date.parse(new Date),
                a = Math.floor(t / 1e3 % 60),
                n = Math.floor(t / 1e3 / 60 % 60),
                i = Math.floor(t / 36e5 % 24);
            return t > 0 ? {
                total: t,
                hours: i,
                minutes: n,
                seconds: a
            } : {
                total: t,
                hours: "00",
                minutes: "00",
                seconds: "00"
            }
        },
        _initializeClock: function(t, a) {
            var n, i = this;

            function s() {
                var s = i._getTimeRemaining(a);
                e.Object.each(t, function(e, t) {
                    var a = ("0" + s[t]).slice(-2);
                    e.get("innerHTML") !== a && e.set("innerHTML", a)
                }), s.total <= 0 && clearInterval(n)
            }
            s(), n = setInterval(s, 1e3)
        }
    }, {
        ATTRS: {}
    })
}, "@VERSION@", {
    requires: ["af-beacon", "af-cookie", "af-cache", "af-event", "stencil-imageloader", "td-applet-stream-baseview-v2"]
});
YUI.add("td-applet-stream-model-v2", function(e, a) {
    "use strict";
    e.namespace("TD.Applet").StreamModel2 = e.Base.create("TDAppletStreamModel2", e.Model, [e.Af.Sync], {
        resource: "stream-atomic",
        readonly: !0,
        postForRead: !0,
        consolidate: !1,
        initializer: function() {}
    }, {
        ATTRS: {
            id: {
                value: "stream-atomic"
            }
        }
    })
}, "@VERSION@", {
    requires: ["model", "af-sync"]
});
YUI.add("td-applet-stream-onboarding-model-v2", function(t, a) {
    "use strict";
    t.namespace("TD.Applet").StreamOnboardingModel2 = t.Base.create("TDAppletStreamOnboardingModel2", t.Model, [t.Af.Sync], {
        resource: "stream-atomic.onboard",
        readonly: !0,
        initializer: function() {
            this.rawData = this.get("onboardingData"), this.rawData && (this.chosenYct = [], this.progress = this.rawData.additional.length, this.progressCounter = 0)
        },
        _requestItems: function(a, e, s, i, r) {
            var n = [],
                o = this;
            e ? this.load(t.merge({
                onboardingCat: e,
                onboardingId: s,
                i13n: this.rawData.i13n
            }, i), function(t, e) {
                !t && e && e.stream_items && ((n = e.stream_items)[0].li_class = "js-stream-onboarding-item-first", a.stream_items = n), o.progress--, r(a)
            }) : (o.progress--, r(a))
        },
        updateItem: function(a, e, s) {
            var i, r = a.cat,
                n = a.id;
            r && this.chosenYct.push(r), this.rawData.additional.length ? (this.rawData.progress[this.progressCounter].selected = !1, this.progressCounter++, this.rawData.progress[this.progressCounter].selected = !0, i = {
                current: this.rawData.additional.shift(),
                stringKey1: "ONBOARDING_TITLE1_" + (0 === this.rawData.additional.length ? "ZERO" : "ONE"),
                stringConfirmation: "ONBOARDING_CONFIRMATION_" + (0 === this.rawData.additional.length ? "ZERO" : "ONE"),
                disableSkip: !this.chosenYct.length && !this.rawData.additional.length,
                incrementalState: !0,
                i13n: this.rawData.i13n,
                ccode: this.rawData.ccode,
                progress: this.rawData.progress
            }, this.rawData = t.merge(this.rawData, i), this._requestItems(i, r, n, e, s)) : (i = {
                stringKey1: "ONBOARDING_TITLE1_FINAL",
                disableSkip: !0,
                finalState: !0
            }, this._requestItems(i, r, n, e, s))
        }
    }, {
        ATTRS: {
            id: {
                value: "stream-onboarding-v2"
            }
        }
    })
}, "@VERSION@", {
    requires: ["model", "af-sync"]
});
YUI.add("td-applet-stream-payoff-model-v2", function(e) {
    "use strict";
    e.namespace("TD.Applet").StreamPayoffModel2 = e.Base.create("TDAppletStreamPayoffModel2", e.Model, [e.Af.Sync], {
        resource: "stream-payoff-v2",
        readonly: !0,
        loadPayoff: function(e, a) {
            this.sync("read", e, function(e, o) {
                a(o)
            })
        }
    }, {
        ATTRS: {}
    })
}, "@VERSION@", {
    requires: ["model", "af-sync"]
});
YUI.add("td-applet-stream-related-model-atomic", function(t, e) {
    "use strict";
    t.namespace("TD.Applet").StreamRelatedModelAtomic = t.Base.create("TDAppletStreamRelatedModelAtomic", t.Model, [t.Af.Sync], {
        resource: "stream-related-atomic",
        readonly: !0,
        initializer: function() {
            this.adsList = [], this.adsStartIndex = -1
        },
        spliceAds: function(t, e) {
            var a = this;
            a.adsList && a.adsList.length > 0 && t.splice(e, 0, a.adsList.shift())
        },
        loadPopularItems: function(t, e) {
            var a = this,
                s = a.adsStartIndex,
                d = !1;
            t.ads.related_ct_single_ad && (s = -1 === s ? parseInt(t.ads.related_start_index, 10) : a.adsStartIndex, d = !0), t.listId = t.ui.popular_in_community_listid, a.sync("read", t, function(t, i) {
                if (!t && i) {
                    var l = i.related && i.related.popular || [];
                    d && i.ads && i.ads.length && (a.adsList = a.adsList.concat(i.ads), a.spliceAds(l, s)), l.length >= 5 && e(null, l.slice(0, 5))
                }
            })
        },
        loadRelatedItems: function(e, a) {
            var s = this,
                d = s.adsStartIndex,
                i = e.uuids,
                l = !1;
            e.ads.related_ct_single_ad && (d = -1 === d ? parseInt(e.ads.related_start_index, 10) : s.adsStartIndex, l = !0, this.adsList.length >= i.length && delete e.ads), i.length ? this.sync("read", t.merge(e, {
                uuids: i
            }), function(n, r) {
                var c, o = {};
                !n && r && (l && (r.ads ? (s.adsList = s.adsList.concat(r.ads), c = r.related) : c = r, t.Array.each(i, function(t) {
                    c[t] && s.spliceAds(c[t], d)
                }), r = c), t.Object.each(r, function(t, a) {
                    t.length >= e.count && (o[a] = t.slice(0, e.count))
                })), a(o)
            }) : a(null)
        }
    }, {
        ATTRS: {
            id: {
                value: "stream-related-atomic"
            }
        }
    })
}, "@VERSION@", {
    requires: ["model", "af-sync"]
});