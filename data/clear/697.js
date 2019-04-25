! function(n, e, a) {
    n.fn.responsiveSlides = function(t) {
        var s = n.extend({
            auto: !0,
            speed: 500,
            timeout: 6e3,
            pager: !1,
            nav: !1,
            random: !1,
            pause: !0,
            pauseControls: !0,
            prevText: "Previous",
            nextText: "Next",
            maxwidth: "",
            navContainer: "",
            manualControls: "",
            namespace: "rslides",
            before: n.noop,
            quiznav: "",
            after: n.noop
        }, t);
        return this.each(function() {
            a++;
            var i, o, r, l, u, c, d = n(this),
                p = 0,
                f = d.children(),
                v = f.size(),
                h = parseFloat(s.speed),
                m = parseFloat(s.timeout),
                C = parseFloat(s.maxwidth),
                x = s.namespace,
                b = s.quiznav + " ",
                y = x + a,
                g = x + "_nav " + y + "_nav",
                T = x + "_here",
                w = y + "_on",
                _ = y + "_s",
                q = n("<ul class='" + b + x + "_tabs " + y + "_tabs' />");
            if (visible = {
                    float: "left",
                    position: "relative",
                    opacity: 1,
                    zIndex: 2
                }, hidden = {
                    float: "none",
                    position: "absolute",
                    opacity: 0,
                    zIndex: 1
                }, supportsTransitions = function() {
                    var n = (document.body || document.documentElement).style,
                        e = "transition";
                    if ("string" == typeof n[e]) return !0;
                    i = ["Moz", "Webkit", "Khtml", "O", "ms"], e = e.charAt(0).toUpperCase() + e.substr(1);
                    var a;
                    for (a = 0; a < i.length; a++)
                        if ("string" == typeof n[i[a] + e]) return !0;
                    return !1
                }(), slideTo = function(e) {
                    s.before(e), supportsTransitions ? (f.removeClass(w).css(hidden).eq(e).addClass(w).css(visible), p = e, setTimeout(function() {
                        s.after(e)
                    }, h)) : f.stop().fadeOut(h, function() {
                        n(this).removeClass(w).css(hidden).css("opacity", 1)
                    }).eq(e).fadeIn(h, function() {
                        n(this).addClass(w).css(visible), s.after(e), p = e
                    })
                }, s.random && (f.sort(function() {
                    return Math.round(Math.random()) - .5
                }), d.empty().append(f)), f.each(function(n) {
                    this.id = _ + n
                }), d.addClass(x + " " + y), t && t.maxwidth && d.css("max-width", C), f.hide().css(hidden).eq(0).addClass(w).css(visible).show(), supportsTransitions && f.show().css({
                    "-webkit-transition": "opacity " + h + "ms ease-in-out",
                    "-moz-transition": "opacity " + h + "ms ease-in-out",
                    "-o-transition": "opacity " + h + "ms ease-in-out",
                    transition: "opacity " + h + "ms ease-in-out"
                }), f.size() > 1) {
                if (m < h + 100) return;
                if (s.pager && !s.manualControls) {
                    var z = [];
                    f.each(function(n) {
                        var e = n + 1;
                        z += "<li><a href='#' class='" + _ + e + "'>" + e + "</a></li>"
                    }), q.append(z), t.navContainer ? n(s.navContainer).append(q) : d.after(q)
                }
                if (s.manualControls && (q = n(s.manualControls)).addClass(x + "_tabs " + y + "_tabs"), (s.pager || s.manualControls) && q.find("li").each(function(e) {
                        n(this).addClass(_ + (e + 1))
                    }), (s.pager || s.manualControls) && (c = q.find("a"), o = function(n) {
                        c.closest("li").removeClass(T).eq(n).addClass(T)
                    }), s.auto && (r = function() {
                        var n = 0;
                        u = setInterval(function() {
                            f.stop(!0, !0);
                            var e = p + 1 < v ? p + 1 : 0;
                            (s.pager || s.manualControls) && o(e), slideTo(e), 0 === e && n++, 1 === n && clearInterval(u)
                        }, m)
                    })(), l = function() {
                        s.auto && (clearInterval(u), r())
                    }, s.pause && d.click(function() {
                        clearInterval(u)
                    }), (s.pager || s.manualControls) && (c.bind("click", function(e) {
                        e.preventDefault(), s.pauseControls || l();
                        var a = c.index(this);
                        p === a || n("." + w).queue("fx").length || (o(a), slideTo(a))
                    }).eq(0).closest("li").addClass(T), s.pauseControls && c.hover(function() {
                        clearInterval(u)
                    }, function() {
                        l()
                    })), s.nav) {
                    var I = "<a href='#' class='" + g + " prev'>" + s.prevText + "</a><a href='#' class='" + g + " next'>" + s.nextText + "</a>";
                    t.navContainer ? n(s.navContainer).append(I) : d.after(I);
                    var k = n("." + y + "_nav"),
                        F = k.filter(".prev");
                    k.bind("click", function(e) {
                        e.preventDefault();
                        var a = n("." + w);
                        if (!a.queue("fx").length) {
                            var t = f.index(a),
                                i = t - 1,
                                r = t + 1 < v ? p + 1 : 0;
                            slideTo(n(this)[0] === F[0] ? i : r), (s.pager || s.manualControls) && o(n(this)[0] === F[0] ? i : r), s.pauseControls || l()
                        }
                    }), s.pauseControls && k.hover(function() {
                        clearInterval(u)
                    }, function() {
                        l()
                    })
                }
            }
            if (void 0 === document.body.style.maxWidth && t.maxwidth) {
                var M = function() {
                    d.css("width", "100%"), d.width() > C && d.css("width", C)
                };
                M(), n(e).bind("resize", function() {
                    M()
                })
            }
        })
    }
}(jQuery, this, 0);