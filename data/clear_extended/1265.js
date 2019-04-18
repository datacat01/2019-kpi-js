function _fusionRefreshScroll() {
    window._fusionScrollTop = window.pageYOffset, window._fusionScrollLeft = window.pageXOffset
}

function _fusionParallaxAll() {
    var a;
    for (_fusionRefreshScroll(), a = 0; a < window._fusionImageParallaxImages.length; a++) window._fusionImageParallaxImages[a].doParallax()
}

function _fusionRefreshWindow() {
    window._fusionScrollTop = window.pageYOffset, window._fusionWindowHeight = jQuery(window).height(), window._fusionScrollLeft = window.pageXOffset, window._fusionWindowWidth = jQuery(window).width()
}! function(a) {
    ! function() {
        var b = 0;
        a.requestAnimationFrame || (a.webkitRequestAnimationFrame && (a.requestAnimationFrame = a.webkitRequestAnimationFrame, a.cancelAnimationFrame = a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame), a.requestAnimationFrame = function(c) {
            var d = (new Date).getTime(),
                e = Math.max(0, 16 - (d - b)),
                f = a.setTimeout(function() {
                    c(d + e)
                }, e);
            return b = d + e, f
        }, a.cancelAnimationFrame = function(a) {
            clearTimeout(a)
        })
    }(), "function" == typeof define && define(function() {
        return a.requestAnimationFrame
    })
}(window), void 0 === window._fusionImageParallaxImages && (window._fusionImageParallaxImages = []),
    function(a, b, c, d) {
        function e(b, c) {
            var d;
            this.element = b, this.settings = a.extend({}, g, c), d = this.settings.align.split(" "), this.settings.xpos = d[0], 2 === d.length ? this.settings.ypos = d[1] : this.settings.ypos = "center", this._defaults = g, this._name = f, this.init()
        }
        var f = "fusionImageParallax",
            g = {
                direction: "up",
                mobileenabled: !1,
                mobiledevice: !1,
                width: "",
                height: "",
                align: "center",
                opacity: "1",
                velocity: ".3",
                image: "",
                target: "",
                repeat: !1,
                loopScroll: "",
                loopScrollTime: "2",
                removeOrig: !1,
                complete: function() {}
            };
        a.extend(e.prototype, {
            init: function() {
                "" === this.settings.target && (this.settings.target = a(this.element)), "" === this.settings.image && void 0 !== a(this.element).css("backgroundImage") && "" !== a(this.element).css("backgroundImage") && (this.settings.image = a(this.element).css("backgroundImage").replace(/url\(|\)|"|'/g, "")), b._fusionImageParallaxImages.push(this), this.setup(), this.settings.complete(), this.containerWidth = 0, this.containerHeight = 0
            },
            setup: function() {
                !1 !== this.settings.removeOrig && a(this.element).remove(), this.resizeParallaxBackground()
            },
            doParallax: function() {
                var a, c, d, e, f, g, h, i, j = this.settings.target.find(".parallax-inner");
                this.settings.mobiledevice && !this.settings.mobileenabled || this.isInView() && (j.css({
                    minHeight: "150px"
                }), a = this.settings.target.width() + parseInt(this.settings.target.css("paddingRight"), 10) + parseInt(this.settings.target.css("paddingLeft"), 10), c = this.settings.target.height() + parseInt(this.settings.target.css("paddingTop"), 10) + parseInt(this.settings.target.css("paddingBottom"), 10), 0 === this.containerWidth || 0 === this.containerHeight || a === this.containerWidth && c === this.containerHeight || this.resizeParallaxBackground(), this.containerWidth = a, this.containerHeight = c, void 0 !== j && 0 !== j.length && (d = (b._fusionScrollTop - this.scrollTopMin) / (this.scrollTopMax - this.scrollTopMin), e = this.moveMax * d, "down" === this.settings.direction && (e *= 1.25), "left" !== this.settings.direction && "up" !== this.settings.direction || (e *= -1), f = "translate3d(", g = "px, -2px, 0px)", h = "translate3d(0px, ", i = "px, 0px)", ("undefined" != typeof _fusionParallaxIE9 || jQuery("html").hasClass("ua-safari") && j.parent().find(".fusion-section-separator").length) && (f = "translate(", g = "px, 0px)", h = "translate(0px, ", i = "px)"), "no-repeat" === j.css("background-repeat") && ("down" === this.settings.direction && 0 > e ? e = 0 : "up" === this.settings.direction && 0 < e ? e = 0 : "right" === this.settings.direction && 0 > e ? e = 0 : "left" === this.settings.direction && 0 < e && (e = 0)), "fixed" === this.settings.direction || ("left" === this.settings.direction || "right" === this.settings.direction ? j.css({
                    webkitTransform: f + e + g,
                    mozTransform: f + e + g,
                    msTransform: f + e + g,
                    oTransform: f + e + g,
                    transform: f + e + g
                }) : j.css({
                    webkitTransform: h + e + i,
                    mozTransform: h + e + i,
                    msTransform: h + e + i,
                    oTransform: h + e + i,
                    transform: h + e + i
                }))))
            },
            isInView: function() {
                var a, c, d = this.settings.target;
                if (void 0 !== d && 0 !== d.length) return a = d.offset().top, c = d.height() + parseInt(d.css("paddingTop"), 10) + parseInt(d.css("paddingBottom"), 10), !(a + c < b._fusionScrollTop || b._fusionScrollTop + b._fusionWindowHeight < a)
            },
            resizeParallaxBackground: function() {
                var a, c, d, e, f, g, h, i, j, k, l, m = this.settings.target;
                void 0 !== m && 0 !== m.length && m.is(":visible") && (a = "true" === this.settings.repeat || !0 === this.settings.repeat || 1 === this.settings.repeat, "none" === this.settings.direction ? (c = m.width() + parseInt(m.css("paddingRight"), 10) + parseInt(m.css("paddingLeft"), 10), e = m.offset().left, "center" === this.settings.align ? e = "50% 50%" : "left" === this.settings.align ? e = "0% 50%" : "right" === this.settings.align ? e = "100% 50%" : "top" === this.settings.align ? e = "50% 0%" : "bottom" === this.settings.align && (e = "50% 100%"), m.css({
                    opacity: Math.abs(parseFloat(this.settings.opacity) / 100),
                    backgroundSize: "cover",
                    backgroundAttachment: "scroll",
                    backgroundPosition: e,
                    backgroundRepeat: "no-repeat"
                }), "" !== this.settings.image && "none" !== this.settings.image && m.css({
                    opacity: Math.abs(parseFloat(this.settings.opacity) / 100),
                    backgroundImage: "url(" + this.settings.image + ")"
                })) : "fixed" === this.settings.direction ? (m.css({
                    backgroundAttachment: "fixed",
                    backgroundRepeat: "repeat"
                }), "" !== this.settings.image && "none" !== this.settings.image && m.attr("style", "background-image: url(" + this.settings.image + ") !important;" + m.attr("style"))) : "left" === this.settings.direction || "right" === this.settings.direction ? (c = m.width() + parseInt(m.css("paddingRight"), 10) + parseInt(m.css("paddingLeft"), 10), d = m.height() + 4 + parseInt(m.css("paddingTop"), 10) + parseInt(m.css("paddingBottom"), 10), f = c, c += 400 * Math.abs(parseFloat(this.settings.velocity)), g = 0, "right" === this.settings.direction && (g -= c - f), 1 > m.find(".parallax-inner").length && m.prepend('<div class="parallax-inner"></div>'), m.css({
                    position: "relative",
                    overflow: "hidden",
                    zIndex: 1,
                    "background-image": "none"
                }).attr("style", m.attr("style")).find(".parallax-inner").css({
                    pointerEvents: "none",
                    width: c,
                    height: d,
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    left: g,
                    opacity: Math.abs(parseFloat(this.settings.opacity) / 100),
                    backgroundPosition: a ? "0 0 " : this.settings.xpos + " " + this.settings.ypos,
                    backgroundRepeat: a ? "repeat" : "no-repeat",
                    backgroundSize: a ? "auto" : "cover"
                }), "" !== this.settings.image && "none" !== this.settings.image && m.find(".parallax-inner").css({
                    opacity: Math.abs(parseFloat(this.settings.opacity) / 100),
                    backgroundImage: "url(" + this.settings.image + ")"
                }), i = 0, m.offset().top > b._fusionWindowHeight && (i = m.offset().top - b._fusionWindowHeight), j = m.offset().top + m.height() + parseInt(m.css("paddingTop"), 10) + parseInt(m.css("paddingBottom"), 10), this.moveMax = c - f, this.scrollTopMin = i, this.scrollTopMax = j) : (h = 900, h = jQuery(b).height(), c = m.width() + parseInt(m.css("paddingRight"), 10) + parseInt(m.css("paddingLeft"), 10), d = m.height() + parseInt(m.css("paddingTop"), 10) + parseInt(m.css("paddingBottom"), 10), k = d, d += h * Math.abs(parseFloat(this.settings.velocity)), l = 0, "down" === this.settings.direction && (l -= d - k), 1 > m.find(".parallax-inner").length && m.prepend('<div class="parallax-inner"></div>'), m.css({
                    position: "relative",
                    overflow: "hidden",
                    zIndex: 1,
                    "background-image": "none"
                }).attr("style", m.attr("style")).find(".parallax-inner").css({
                    pointerEvents: "none",
                    width: c,
                    height: d,
                    position: "absolute",
                    zIndex: -1,
                    top: l,
                    left: 0,
                    opacity: Math.abs(parseFloat(this.settings.opacity) / 100),
                    backgroundPosition: a ? "0 0 " : this.settings.xpos + " " + this.settings.ypos,
                    backgroundRepeat: a ? "repeat" : "no-repeat",
                    backgroundSize: a ? "auto" : "cover"
                }), "" !== this.settings.image && "none" !== this.settings.image && m.find(".parallax-inner").css({
                    opacity: Math.abs(parseFloat(this.settings.opacity) / 100),
                    backgroundImage: "url(" + this.settings.image + ")"
                }), i = 0, m.offset().top > b._fusionWindowHeight && (i = m.offset().top - b._fusionWindowHeight), j = m.offset().top + m.height() + parseInt(m.css("paddingTop"), 10) + parseInt(m.css("paddingBottom"), 10), this.moveMax = d - k, this.scrollTopMin = i, this.scrollTopMax = j))
            },
            isMobile: function() {
                return cssua.ua.mobile
            }
        }), a.fn[f] = function(b) {
            return this.each(function() {
                a.data(this, "plugin_" + f) || a.data(this, "plugin_" + f, new e(this, b))
            }), this
        }
    }(jQuery, window, document), jQuery(document).ready(function(a) {
        "use strict";

        function b() {
            var a;
            for (_fusionRefreshScroll(), a = 0; a < window._fusionImageParallaxImages.length; a++) window._fusionImageParallaxImages[a].doParallax()
        }
        a(window).on("scroll touchmove touchstart touchend gesturechange", function() {
            requestAnimationFrame(_fusionParallaxAll)
        }), cssua.ua.mobile && requestAnimationFrame(b), a(window).on("resize", function() {
            setTimeout(function() {
                _fusionRefreshWindow(), jQuery.each(window._fusionImageParallaxImages, function(a, b) {
                    b.resizeParallaxBackground()
                })
            }, 1)
        }), setTimeout(function() {
            _fusionRefreshWindow(), jQuery.each(window._fusionImageParallaxImages, function(a, b) {
                b.resizeParallaxBackground()
            })
        }, 1), setTimeout(function() {
            _fusionRefreshWindow(), jQuery.each(window._fusionImageParallaxImages, function(a, b) {
                b.resizeParallaxBackground()
            })
        }, 100)
    }), jQuery(window).load(function() {
        setTimeout(function() {
            _fusionRefreshWindow(), jQuery.each(window._fusionImageParallaxImages, function(a, b) {
                b.resizeParallaxBackground()
            })
        }, 1), setTimeout(function() {
            _fusionRefreshWindow(), jQuery.each(window._fusionImageParallaxImages, function(a, b) {
                b.resizeParallaxBackground()
            })
        }, 1e3)
    }), jQuery(document).ready(function(a) {
        "use strict";

        function b() {
            return cssua.ua.mobile
        }
        b() && a(".fusion-bg-parallax.video > div").remove(), a(".fusion-bg-parallax").next().addClass("bg-parallax-parent"), a(".fusion-bg-parallax").attr("style", "").css("display", "none"), a(".fusion-bg-parallax").each(function() {
            a(this).fusionImageParallax({
                image: a(this).data("bg-image"),
                direction: a(this).data("direction"),
                mobileenabled: a(this).data("mobile-enabled"),
                mobiledevice: b(),
                opacity: a(this).data("opacity"),
                width: a(this).data("bg-width"),
                height: a(this).data("bg-height"),
                velocity: a(this).data("velocity"),
                align: a(this).data("bg-align"),
                repeat: a(this).data("bg-repeat"),
                target: a(this).next(),
                complete: function() {}
            })
        })
    });