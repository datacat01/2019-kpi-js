var _i_ = this._i_ || function() {},
    _r_ = this._r_ || function(e) {
        return e
    },
    _sp_ = this._sp_ || function(e) {
        B.et.customGoal("cDPPESHbfNFVTAYZSQDZET", 1), B.reportError({
            message: "SPDR function called - " + e
        }, "SPDR")
    };
_i_("e4e:a7833af2"), B.when({
    events: "ready",
    condition: B.et.track("AEDEZRdPLbbHVJNSZWbBaCFJVKe") && B.env.b_personalized_layout_id
}).run(function(e) {
    _i_("e4e:712489dd"), setTimeout(function() {
        _i_("e4e:dca24cc5"),
            function(e) {
                _i_("e4e:6e442014");
                var t = e("utils/throttled"),
                    i = e("utils/inviewport"),
                    n = [".js-ds-layout-events-postcards", ".js-ds-layout-events-promo", ".js-ds-layout-events-promote_articles", ".js-ds-layout-events-bh_carousel", ".js-ds-layout-events-bh_promotions", ".js-ds-upcoming-booking"],
                    _ = n.reduce(function(e, t, i) {
                        return _i_("e4e:c9e48e1c"), e.push({
                            el: $(t),
                            index: i + 1
                        }), _r_(e)
                    }, []),
                    r = t(function() {
                        _i_("e4e:2da38ffb");
                        var t = [];
                        _.forEach(function(e) {
                            _i_("e4e:6dedbc44"), i(e.el) ? a(B.env.b_personalized_layout_id, "view", e.index, B.env.b_index_personalized_layout_exp_name, B.env.b_index_personalized_layout_exp_variant) : t.push(e), _r_()
                        }), _.length ? _ = t : $(window).off("scroll", r), _r_()
                    }, 10);

                function a(e, t, i, n, _) {
                    _i_("e4e:b6791c4a"), $.ajax({
                        type: "post",
                        dataType: "json",
                        url: "/sendlayoutevents",
                        data: {
                            layout: e,
                            action: t,
                            widget: i,
                            exp_name: n,
                            exp_variant: _
                        }
                    }), _r_()
                }
                r(), $(window).scroll(r), n.forEach(function(e, t) {
                    var i, n;
                    _i_("e4e:9b321c9e"), i = e, n = t + 1, _i_("e4e:57b8f9f0"), $(i).click(function() {
                        _i_("e4e:537def33"), a(B.env.b_personalized_layout_id, "click", n, B.env.b_index_personalized_layout_exp_name, B.env.b_index_personalized_layout_exp_variant), _r_()
                    }), _r_(), _r_()
                }), _r_()
            }(e), _r_()
    }, 5e3), _r_()
}), _r_(), B.when({
    events: "ready"
}).run(function(e) {
    _i_("e4e:e0fa7ad5");
    var n = e("jquery");
    n(".js-lp-sh-dismiss").on("click", function(e) {
        _i_("e4e:c9ec7514"), e.preventDefault();
        var t = n(this).parents(".js-lp-sh-btn-group"),
            i = t.data("sh_id");
        if (!i) return _r_();
        t.remove(), B.et.customGoal("AEDEZRdJfaAUaJfWHT", 1), n.ajax({
            url: "/hide_search_hist",
            data: {
                id: i
            },
            success: function() {
                _i_("e4e:0b4f6bdf"), n(".js-lp-sh-dismiss").length || (n(".lp-search-history-bar").remove(), B.et.customGoal("AEDEZRdJfaAUaJfWHT", 2)), _r_()
            }
        }), _r_()
    }), _r_()
}), B.when({
    events: "ready",
    action: "index",
    condition: B.env.b_is_south_east_asia_deals_focus_user,
    experiment: "dOLFTIFdAHEAeOaZDXe"
}).run(function(e) {
    _i_("e4e:39b047e7");
    var i = e("jquery"),
        t = i(".js-nbt_weekend_deals");
    t.on("mouseenter mouseleave", ".js-nbt_weekend_deal", function(e) {
        _i_("e4e:aebe9266");
        var t = "mouseenter" === e.type;
        i(this).toggleClass("nbt_weekend_deal_selected", t), _r_()
    }), _r_()
}), B.when({
    events: "ready",
    action: "index",
    experiment: "adUTWALOLOLOXKFbUBWeFcOHT"
}).run(function(e) {
    _i_("e4e:0927c3f1");
    var r = e("jquery"),
        t = e("et");
    ({
        count: 0,
        card: "li",
        wrapper: "#pending-property-reviews",
        close: "button.bui-banner__close",
        init: function() {
            if (_i_("e4e:7355da47"), this.removeDiscardedCards(), this.showMaxThreeCards(), this.count = r(this.wrapper).find(this.card).length, 0 == this.count) return r(this.wrapper).parents(".lp_flexible_layout_content_wrapper.pe-full-content-wrapper").remove(), r(this.wrapper).remove(), _r_(!0);
            r(this.wrapper).show(), this.updateWidth(), this.bindEvents(), 1 < this.count && t.customGoal("adUTWALOLOLOXKFbUBWeFcOHT", 3), _r_()
        },
        showMaxThreeCards: function() {
            _i_("e4e:636077cc"), r(this.wrapper).find(this.card).map(function(e, t) {
                _i_("e4e:431f8fc7"), 2 < e && r(t).remove(), _r_()
            }), _r_()
        },
        bindEvents: function() {
            _i_("e4e:474b7209"), r(this.wrapper).on("click", this.close, this.handleClose.bind(this)), _r_()
        },
        removeDiscardedCards: function() {
            _i_("e4e:4e616b49"), r(this.wrapper).find(this.card).map(function(e, t) {
                _i_("e4e:de0a5172");
                var i = "pending_" + r(t).data("js-id");
                r.cookie(i) && r(t).remove(), _r_()
            }), _r_()
        },
        handleClose: function(e) {
            _i_("e4e:8834e035"), this.count = this.count - 1;
            var t = r(e.currentTarget).data("js-id");
            return r.cookie("pending_" + t, 1, {
                expire: 30
            }), r(this.wrapper).find(this.card + "[data-js-id=" + t + "]").remove(), _r_(0 == this.count ? r(this.wrapper).remove() : this.updateWidth())
        },
        updateWidth: function() {
            _i_("e4e:841ae26b");
            var e = 100 / this.count,
                t = 16 * (this.count - 1) / this.count;
            r(this.wrapper).find(this.card).css("width", "calc(" + e + "% - " + t + "px)"), this.updateNames(this.count <= 2 ? 1 : 2), this.updateHeight(), _r_()
        },
        updateNames: function(i) {
            _i_("e4e:7b30a675");
            var n = this;
            r(this.wrapper).find(this.card).find("[data-js-name]").map(function(e, t) {
                return _i_("e4e:cf0c7671"), _r_(n.ellipsisLines(t, i))
            }), _r_()
        },
        updateHeight: function() {
            _i_("e4e:5c6571fd");
            var i = 0;
            return r(this.wrapper).find(this.card + " > div").height("auto"), r(this.wrapper).find(this.card + " > div").map(function(e, t) {
                _i_("e4e:00e37058"), i = Math.max(r(t).height(), i), _r_()
            }), _r_(r(this.wrapper).find(this.card + " > div").height(i))
        },
        ellipsisLines: function(e, t) {
            _i_("e4e:a6a4dab1");
            var i = r(e),
                n = i.data("js-name"),
                _ = window.getComputedStyle(i[0]).lineHeight.replace("px", "");
            for (i.html(n); i.height() > _ * (t || 1) + 1 && !(i.text().length < 5);) i.text(function(e, t) {
                return _i_("e4e:b35cdce3"), _r_(t.substr(0, t.length - 3) + "…")
            });
            return _r_(!0)
        }
    }).init(), _r_()
}), B.when({
    events: "ready",
    condition: B.env.fe_new_level_comms_block_displayed && B.env.fe_new_level_comms_ga_tracking_enabled
}).run(function(e) {
    _i_("e4e:ad5acef9");
    var d = B.require("jquery"),
        t = B.require("ga-tracker");
    if (!t || !d) return _r_();
    var i = {},
        n = d("[data-ga-track-genius]").map(function(e, t) {
            _i_("e4e:27e8df22");
            var i = d(t).data("ga-track-genius"),
                n = i.split("|"),
                _ = n[0],
                r = n[1],
                a = n[2] || "Action",
                s = n[3] || "Label",
                o = parseInt(n[4], 10) || 1;
            if ("load" === _) return _r_({
                hash: i,
                category: r,
                action: a,
                label: s,
                value: o
            });
            _r_()
        }).get().reduce(function(e, t) {
            if (_i_("e4e:94b1e528"), i[t.hash]) return _r_(e);
            return i[t.hash] = 1, e.push(t), _r_(e)
        }, []);
    t.pageviewIsTracked().then(function() {
        _i_("e4e:1cde332e"), n.map(function(e) {
            _i_("e4e:e2be2af9"), t.trackEvent(e.category, e.action, e.label, e.value), _r_()
        }), _r_()
    }), _r_()
});