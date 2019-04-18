(function() {
    var a, b;
    a = this.jQuery || window.jQuery, b = a(window), a.fn.stick_in_parent = function(c) {
        var d, e, f, g, h, i, j, k, l, m, n, o;
        for (null == c && (c = {}), o = c.sticky_class, i = c.inner_scrolling, n = c.recalc_every, m = c.parent, l = c.offset_top, k = c.spacer, f = c.bottoming, null == l && (l = 0), null == m && (m = void 0), null == i && (i = !0), null == o && (o = "is_stuck"), d = a(document), null == f && (f = !0), g = function(c, e, g, h, j, p, q, r) {
                var s, t, u, v, w, x, y, z, A, B, C, D;
                if (!c.data("sticky_kit")) {
                    if (c.data("sticky_kit", !0), w = d.height(), y = c.parent(), null != m && (y = y.closest(m)), !y.length) throw "failed to find stick parent";
                    if (u = !1, s = !1, C = null != k ? k && c.closest(k) : a("<div />"), C && C.css("position", c.css("position")), z = function() {
                            var a, b, f;
                            if (!r) return w = d.height(), a = parseInt(y.css("border-top-width"), 10), b = parseInt(y.css("padding-top"), 10), e = parseInt(y.css("padding-bottom"), 10), g = y.offset().top + a + b, h = y.height(), u && (u = !1, s = !1, null == k && (c.insertAfter(C), C.detach()), c.css({
                                position: "",
                                top: "",
                                width: "",
                                bottom: ""
                            }).removeClass(o), f = !0), j = c.offset().top - (parseInt(c.css("margin-top"), 10) || 0) - l, p = c.outerHeight(!0), q = c.css("float"), C && C.css({
                                width: c.outerWidth(!0),
                                height: p,
                                display: c.css("display"),
                                "vertical-align": c.css("vertical-align"),
                                float: q
                            }), f ? D() : void 0
                        }, z(), p !== h) return v = void 0, x = l, B = n, D = function() {
                        var a, m, t, A, D, E;
                        if (!r) return t = !1, null != B && (B -= 1) <= 0 && (B = n, z(), t = !0), t || d.height() === w || (z(), t = !0), A = b.scrollTop(), null != v && (m = A - v), v = A, u ? (f && (D = A + p + x > h + g, s && !D && (s = !1, c.css({
                            position: "fixed",
                            bottom: "",
                            top: x
                        }).trigger("sticky_kit:unbottom"))), A < j && (u = !1, x = l, null == k && ("left" !== q && "right" !== q || c.insertAfter(C), C.detach()), a = {
                            position: "",
                            width: "",
                            top: ""
                        }, c.css(a).removeClass(o).trigger("sticky_kit:unstick")), i && (E = b.height(), p + l > E && (s || (x -= m, x = Math.max(E - p, x), x = Math.min(l, x), u && c.css({
                            top: x + "px"
                        }))))) : A > j && (u = !0, a = {
                            position: "fixed",
                            top: x
                        }, a.width = "border-box" === c.css("box-sizing") ? c.outerWidth() + "px" : c.width() + "px", c.css(a).addClass(o), null == k && (c.after(C), "left" !== q && "right" !== q || C.append(c)), c.trigger("sticky_kit:stick")), u && f && (null == D && (D = A + p + x > h + g), !s && D) ? (s = !0, "static" === y.css("position") && y.css({
                            position: "relative"
                        }), c.css({
                            position: "absolute",
                            bottom: e,
                            top: "auto"
                        }).trigger("sticky_kit:bottom")) : void 0
                    }, A = function() {
                        return z(), D()
                    }, t = function() {
                        if (r = !0, b.off("touchmove", D), b.off("scroll", D), b.off("resize", A), a(document.body).off("sticky_kit:recalc", A), c.off("sticky_kit:detach", t), c.removeData("sticky_kit"), c.css({
                                position: "",
                                bottom: "",
                                top: "",
                                width: ""
                            }), y.position("position", ""), u) return null == k && ("left" !== q && "right" !== q || c.insertAfter(C), C.remove()), c.removeClass(o)
                    }, b.on("touchmove", D), b.on("scroll", D), b.on("resize", A), a(document.body).on("sticky_kit:recalc", A), c.on("sticky_kit:detach", t), setTimeout(D, 0)
                }
            }, h = 0, j = this.length; h < j; h++) e = this[h], g(a(e));
        return this
    }
}).call(this);