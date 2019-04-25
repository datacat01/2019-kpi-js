/* Version: 3.14.28 - Created: 2019-04-02 11:08:33 */
var etracker_img = "/wp-content/uploads/img/",
    etrackerStrings = {
        de: {
            freeTrial: "Kostenlos testen",
            consultung: "Beratung vereinbaren"
        },
        en: {
            freeTrial: "Free trial",
            consultung: "Beratung vereinbaren"
        }
    };
jQuery(document).ready(function(r) {
        function a(e) {
            var t = l(e);
            if (e.parents(".cd-headline").hasClass("type")) {
                var i = e.parent(".cd-words-wrapper");
                i.addClass("selected").removeClass("waiting"), setTimeout(function() {
                    i.removeClass("selected"), e.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")
                }, g), setTimeout(function() {
                    s(t, v)
                }, m)
            } else if (e.parents(".cd-headline").hasClass("letters")) {
                var n = e.children("i").length >= t.children("i").length;
                (function e(t, i, n, s) {
                    if (t.removeClass("in").addClass("out"), t.removeAttr("style"), t.is(":last-child") ? n && setTimeout(function() {
                            a(l(i))
                        }, p) : setTimeout(function() {
                            e(t.next(), i, n, s)
                        }, s), t.is(":last-child") && r("html").hasClass("no-csstransitions")) {
                        var o = l(i);
                        d(i, o)
                    }
                })(e.find("i").eq(0), e, n, f), o(t.find("i").eq(0), t, n, f)
            } else e.parents(".cd-headline").hasClass("clip") ? e.parents(".cd-words-wrapper").animate({
                width: "2px"
            }, w, function() {
                d(e, t), s(t)
            }) : e.parents(".cd-headline").hasClass("loading-bar") ? (e.parents(".cd-words-wrapper").removeClass("is-loading"), d(e, t), setTimeout(function() {
                a(t)
            }, u), setTimeout(function() {
                e.parents(".cd-words-wrapper").addClass("is-loading")
            }, h)) : (d(e, t), setTimeout(function() {
                a(t)
            }, p))
        }

        function s(e, t) {
            e.parents(".cd-headline").hasClass("type") ? (o(e.find("i").eq(0), e, !1, t), e.addClass("is-visible").removeClass("is-hidden")) : e.parents(".cd-headline").hasClass("clip") && e.parents(".cd-words-wrapper").animate({
                width: e.width() + 10
            }, w, function() {
                setTimeout(function() {
                    a(e)
                }, n)
            })
        }

        function o(e, t, i, n) {
            e.addClass("in").removeClass("out"), r(".is-visible i").removeClass("header-headline__letter"), e.addClass("header-headline__letter"), e.is(":last-child") ? (t.parents(".cd-headline").hasClass("type") && setTimeout(function() {
                t.parents(".cd-words-wrapper").addClass("waiting")
            }, 200), i || setTimeout(function() {
                a(t)
            }, p)) : setTimeout(function() {
                o(e.next(), t, i, n)
            }, n)
        }

        function l(e) {
            return e.is(":last-child") ? e.parent().children().eq(0) : e.next()
        }

        function d(e, t) {
            console.log(t.width()), e.removeClass("is-visible").addClass("is-hidden"), t.removeClass("is-hidden").addClass("is-visible"), r(".cd-words-wrapper").css("width", t.width())
        }
        var e, c, p = 2500,
            u = 3800,
            h = u - 3e3,
            f = 50,
            v = 150,
            g = 500,
            m = g + 800,
            w = 1200,
            n = 1500;
        r(".cd-headline.letters").find("b").each(function() {
            var e = r(this),
                t = e.text().split(""),
                n = e.hasClass("is-visible");
            for (i in t) 0 < e.parents(".rotate-2").length && (t[i] = "<em>" + t[i] + "</em>"), t[i] = n ? '<i class="in">' + t[i] + "</i>" : "<i>" + t[i] + "</i>";
            var s = t.join("");
            e.html(s).css("opacity", 1)
        }), e = r(".cd-headline"), c = p, e.each(function() {
            var e = r(this);
            if (e.hasClass("loading-bar")) c = u, setTimeout(function() {
                e.find(".cd-words-wrapper").addClass("is-loading")
            }, h);
            else if (e.hasClass("clip")) {
                var t = e.find(".cd-words-wrapper"),
                    i = t.width() + 10;
                t.css("width", i)
            } else if (!e.hasClass("type")) {
                var n = e.find(".cd-words-wrapper b"),
                    s = 0;
                n.each(function() {
                    var e = r(this).width();
                    s < e && (s = e)
                }), e.find(".cd-words-wrapper").css("width", s)
            }
            setTimeout(function() {
                a(e.find(".is-visible").eq(0))
            }, c)
        })
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return t(e)
        }) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(0, function(i) {
        var r = function(e, r) {
                var i, t = document.createElement("canvas");
                e.appendChild(t), "object" == typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(t);
                var s = t.getContext("2d");
                t.width = t.height = r.size;
                var n = 1;
                1 < window.devicePixelRatio && (n = window.devicePixelRatio, t.style.width = t.style.height = [r.size, "px"].join(""), t.width = t.height = r.size * n, s.scale(n, n)), s.translate(r.size / 2, r.size / 2), s.rotate((r.rotate / 180 - .5) * Math.PI);
                var o = (r.size - r.lineWidth) / 2;
                r.scaleColor && r.scaleLength && (o -= r.scaleLength + 2), Date.now = Date.now || function() {
                    return +new Date
                };
                var a = function(e, t, i) {
                        var n = (i = Math.min(Math.max(-1, i || 0), 1)) <= 0;
                        s.beginPath(), s.arc(0, 0, o, 0, 2 * Math.PI * i, n), s.strokeStyle = e, s.lineWidth = t, s.stroke()
                    },
                    l = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
                        window.setTimeout(e, 1e3 / 60)
                    },
                    d = function() {
                        r.scaleColor && function() {
                            var e, t;
                            s.lineWidth = 1, s.fillStyle = r.scaleColor, s.save();
                            for (var i = 24; 0 < i; --i) e = i % 6 == 0 ? (t = r.scaleLength, 0) : (t = .6 * r.scaleLength, r.scaleLength - t), s.fillRect(-r.size / 2 + e, 0, t, 1), s.rotate(Math.PI / 12);
                            s.restore()
                        }(), r.trackColor && a(r.trackColor, r.trackWidth || r.lineWidth, 1)
                    };
                this.getCanvas = function() {
                    return t
                }, this.getCtx = function() {
                    return s
                }, this.clear = function() {
                    s.clearRect(r.size / -2, r.size / -2, r.size, r.size)
                }, this.draw = function(e) {
                    var t;
                    r.scaleColor || r.trackColor ? s.getImageData && s.putImageData ? i ? s.putImageData(i, 0, 0) : (d(), i = s.getImageData(0, 0, r.size * n, r.size * n)) : (this.clear(), d()) : this.clear(), s.lineCap = r.lineCap, t = "function" == typeof r.barColor ? r.barColor(e) : r.barColor, a(t, r.lineWidth, e / 100)
                }.bind(this), this.animate = function(i, n) {
                    var s = Date.now();
                    r.onStart(i, n);
                    var o = function() {
                        var e = Math.min(Date.now() - s, r.animate.duration),
                            t = r.easing(this, e, i, n - i, r.animate.duration);
                        this.draw(t), r.onStep(i, n, t), e >= r.animate.duration ? r.onStop(i, n) : l(o)
                    }.bind(this);
                    l(o)
                }.bind(this)
            },
            n = function(t, i) {
                var n = {
                    barColor: "#ef1e25",
                    trackColor: "#f9f9f9",
                    scaleColor: "transparent",
                    scaleLength: 5,
                    lineCap: "round",
                    lineWidth: 3,
                    trackWidth: void 0,
                    size: 110,
                    rotate: 0,
                    animate: {
                        duration: 1e3,
                        enabled: !0
                    },
                    easing: function(e, t, i, n, s) {
                        return (t /= s / 2) < 1 ? n / 2 * t * t + i : -n / 2 * (--t * (t - 2) - 1) + i
                    },
                    onStart: function(e, t) {},
                    onStep: function(e, t, i) {},
                    onStop: function(e, t) {}
                };
                if (void 0 !== r) n.renderer = r;
                else {
                    if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
                    n.renderer = SVGRenderer
                }
                var s = {},
                    o = 0,
                    e = function() {
                        for (var e in this.el = t, this.options = s, n) n.hasOwnProperty(e) && (s[e] = i && void 0 !== i[e] ? i[e] : n[e], "function" == typeof s[e] && (s[e] = s[e].bind(this)));
                        "string" == typeof s.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[s.easing]) ? s.easing = jQuery.easing[s.easing] : s.easing = n.easing, "number" == typeof s.animate && (s.animate = {
                            duration: s.animate,
                            enabled: !0
                        }), "boolean" != typeof s.animate || s.animate || (s.animate = {
                            duration: 1e3,
                            enabled: s.animate
                        }), this.renderer = new s.renderer(t, s), this.renderer.draw(o), t.dataset && t.dataset.percent ? this.update(parseFloat(t.dataset.percent)) : t.getAttribute && t.getAttribute("data-percent") && this.update(parseFloat(t.getAttribute("data-percent")))
                    }.bind(this);
                this.update = function(e) {
                    return e = parseFloat(e), s.animate.enabled ? this.renderer.animate(o, e) : this.renderer.draw(e), o = e, this
                }.bind(this), this.disableAnimation = function() {
                    return s.animate.enabled = !1, this
                }, this.enableAnimation = function() {
                    return s.animate.enabled = !0, this
                }, e()
            };
        i.fn.easyPieChart = function(t) {
            return this.each(function() {
                var e;
                i.data(this, "easyPieChart") || (e = i.extend({}, t, i(this).data()), i.data(this, "easyPieChart", new n(this, e)))
            })
        }
    }),
    function(o) {
        o.fn.niceSelect = function(e) {
            function n(e) {
                e.after(o("<div></div>").addClass("nice-select").addClass(e.attr("class") || "").addClass(e.attr("disabled") ? "disabled" : "").attr("tabindex", e.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
                var n = e.next(),
                    t = e.find("option"),
                    i = e.find("option:selected");
                n.find(".current").html(i.data("display") || i.text()), t.each(function(e) {
                    var t = o(this),
                        i = t.data("display");
                    n.find("ul").append(o("<li></li>").attr("data-value", t.val()).attr("data-display", i || null).addClass("option" + (t.is(":selected") ? " selected" : "") + (t.is(":disabled") ? " disabled" : "")).html(t.text()))
                })
            }
            if ("string" == typeof e) return "update" == e ? this.each(function() {
                var e = o(this),
                    t = o(this).next(".nice-select"),
                    i = t.hasClass("open");
                t.length && (t.remove(), n(e), i && e.next().trigger("click"))
            }) : "destroy" == e ? (this.each(function() {
                var e = o(this),
                    t = o(this).next(".nice-select");
                t.length && (t.remove(), e.css("display", ""))
            }), 0 == o(".nice-select").length && o(document).off(".nice_select")) : console.log('Method "' + e + '" does not exist.'), this;
            this.hide(), this.each(function() {
                var e = o(this);
                e.next().hasClass("nice-select") || n(e)
            }), o(document).off(".nice_select"), o(document).on("click.nice_select", ".nice-select", function(e) {
                var t = o(this);
                o(".nice-select").not(t).removeClass("open"), t.toggleClass("open"), t.hasClass("open") ? (t.find(".option"), t.find(".focus").removeClass("focus"), t.find(".selected").addClass("focus")) : t.focus()
            }), o(document).on("click.nice_select", function(e) {
                0 === o(e.target).closest(".nice-select").length && o(".nice-select").removeClass("open").find(".option")
            }), o(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function(e) {
                var t = o(this),
                    i = t.closest(".nice-select");
                i.find(".selected").removeClass("selected"), t.addClass("selected");
                var n = t.data("display") || t.text();
                i.find(".current").text(n), i.prev("select").val(t.data("value")).trigger("change")
            }), o(document).on("keydown.nice_select", ".nice-select", function(e) {
                var t = o(this),
                    i = o(t.find(".focus") || t.find(".list .option.selected"));
                if (32 == e.keyCode || 13 == e.keyCode) return t.hasClass("open") ? i.trigger("click") : t.trigger("click"), !1;
                if (40 == e.keyCode) {
                    if (t.hasClass("open")) {
                        var n = i.nextAll(".option:not(.disabled)").first();
                        0 < n.length && (t.find(".focus").removeClass("focus"), n.addClass("focus"))
                    } else t.trigger("click");
                    return !1
                }
                if (38 == e.keyCode) {
                    if (t.hasClass("open")) {
                        var s = i.prevAll(".option:not(.disabled)").first();
                        0 < s.length && (t.find(".focus").removeClass("focus"), s.addClass("focus"))
                    } else t.trigger("click");
                    return !1
                }
                if (27 == e.keyCode) t.hasClass("open") && t.trigger("click");
                else if (9 == e.keyCode && t.hasClass("open")) return !1
            });
            var t = document.createElement("a").style;
            return t.cssText = "pointer-events:auto", "auto" !== t.pointerEvents && o("html").addClass("no-csspointerevents"), this
        }
    }(jQuery),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(d) {
        "use strict";
        var s, r = window.Slick || {};
        s = 0, (r = function(e, t) {
            var i, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: d(e),
                appendDots: d(e),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, t) {
                    return d('<button type="button" data-role="none" role="button" tabindex="0" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, d.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = d(e), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, i = d(e).data("slick") || {}, n.options = d.extend({}, n.defaults, t, i), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = d.proxy(n.autoPlay, n), n.autoPlayClear = d.proxy(n.autoPlayClear, n), n.autoPlayIterator = d.proxy(n.autoPlayIterator, n), n.changeSlide = d.proxy(n.changeSlide, n), n.clickHandler = d.proxy(n.clickHandler, n), n.selectHandler = d.proxy(n.selectHandler, n), n.setPosition = d.proxy(n.setPosition, n), n.swipeHandler = d.proxy(n.swipeHandler, n), n.dragHandler = d.proxy(n.dragHandler, n), n.keyHandler = d.proxy(n.keyHandler, n), n.instanceUid = s++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
        }).prototype.activateADA = function() {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, r.prototype.addSlide = r.prototype.slickAdd = function(e, t, i) {
            var n = this;
            if ("boolean" == typeof t) i = t, t = null;
            else if (t < 0 || t >= n.slideCount) return !1;
            n.unload(), "number" == typeof t ? 0 === t && 0 === n.$slides.length ? d(e).appendTo(n.$slideTrack) : i ? d(e).insertBefore(n.$slides.eq(t)) : d(e).insertAfter(n.$slides.eq(t)) : !0 === i ? d(e).prependTo(n.$slideTrack) : d(e).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function(e, t) {
                d(t).attr("data-slick-index", e)
            }), n.$slidesCache = n.$slides, n.reinit()
        }, r.prototype.animateHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.animate({
                    height: t
                }, e.options.speed)
            }
        }, r.prototype.animateSlide = function(e, t) {
            var i = {},
                n = this;
            n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (e = -e), !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({
                left: e
            }, n.options.speed, n.options.easing, t) : n.$slideTrack.animate({
                top: e
            }, n.options.speed, n.options.easing, t) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), d({
                animStart: n.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: n.options.speed,
                easing: n.options.easing,
                step: function(e) {
                    e = Math.ceil(e), !1 === n.options.vertical ? i[n.animType] = "translate(" + e + "px, 0px)" : i[n.animType] = "translate(0px," + e + "px)", n.$slideTrack.css(i)
                },
                complete: function() {
                    t && t.call()
                }
            })) : (n.applyTransition(), e = Math.ceil(e), !1 === n.options.vertical ? i[n.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[n.animType] = "translate3d(0px," + e + "px, 0px)", n.$slideTrack.css(i), t && setTimeout(function() {
                n.disableTransition(), t.call()
            }, n.options.speed))
        }, r.prototype.getNavTarget = function() {
            var e = this.options.asNavFor;
            return e && null !== e && (e = d(e).not(this.$slider)), e
        }, r.prototype.asNavFor = function(t) {
            var e = this.getNavTarget();
            null !== e && "object" == typeof e && e.each(function() {
                var e = d(this).slick("getSlick");
                e.unslicked || e.slideHandler(t, !0)
            })
        }, r.prototype.applyTransition = function(e) {
            var t = this,
                i = {};
            !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
        }, r.prototype.autoPlay = function() {
            var e = this;
            e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, r.prototype.autoPlayClear = function() {
            this.autoPlayTimer && clearInterval(this.autoPlayTimer)
        }, r.prototype.autoPlayIterator = function() {
            var e = this,
                t = e.currentSlide + e.options.slidesToScroll;
            e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
        }, r.prototype.buildArrows = function() {
            var e = this;
            !0 === e.options.arrows && (e.$prevArrow = d(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = d(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, r.prototype.buildDots = function() {
            var e, t, i = this;
            if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
                for (i.$slider.addClass("slick-dotted"), t = d("<ul />").addClass(i.options.dotsClass), e = 0; e <= i.getDotCount(); e += 1) t.append(d("<li />").append(i.options.customPaging.call(this, i, e)));
                i.$dots = t.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, r.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
                d(t).attr("data-slick-index", e).data("originalStyling", d(t).attr("style") || "")
            }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? d('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (!0 === e.options.centerMode || !0 === e.options.swipeToSlide) && (e.options.slidesToScroll = 1), d("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
        }, r.prototype.buildRows = function() {
            var e, t, i, n, s, o, r, a = this;
            if (n = document.createDocumentFragment(), o = a.$slider.children(), 1 < a.options.rows) {
                for (r = a.options.slidesPerRow * a.options.rows, s = Math.ceil(o.length / r), e = 0; e < s; e++) {
                    var l = document.createElement("div");
                    for (t = 0; t < a.options.rows; t++) {
                        var d = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                            var c = e * r + (t * a.options.slidesPerRow + i);
                            o.get(c) && d.appendChild(o.get(c))
                        }
                        l.appendChild(d)
                    }
                    n.appendChild(l)
                }
                a.$slider.empty().append(n), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, r.prototype.checkResponsive = function(e, t) {
            var i, n, s, o = this,
                r = !1,
                a = o.$slider.width(),
                l = window.innerWidth || d(window).width();
            if ("window" === o.respondTo ? s = l : "slider" === o.respondTo ? s = a : "min" === o.respondTo && (s = Math.min(l, a)), o.options.responsive && o.options.responsive.length && null !== o.options.responsive) {
                for (i in n = null, o.breakpoints) o.breakpoints.hasOwnProperty(i) && (!1 === o.originalSettings.mobileFirst ? s < o.breakpoints[i] && (n = o.breakpoints[i]) : s > o.breakpoints[i] && (n = o.breakpoints[i]));
                null !== n ? null !== o.activeBreakpoint ? (n !== o.activeBreakpoint || t) && (o.activeBreakpoint = n, "unslick" === o.breakpointSettings[n] ? o.unslick(n) : (o.options = d.extend({}, o.originalSettings, o.breakpointSettings[n]), !0 === e && (o.currentSlide = o.options.initialSlide), o.refresh(e)), r = n) : (o.activeBreakpoint = n, "unslick" === o.breakpointSettings[n] ? o.unslick(n) : (o.options = d.extend({}, o.originalSettings, o.breakpointSettings[n]), !0 === e && (o.currentSlide = o.options.initialSlide), o.refresh(e)), r = n) : null !== o.activeBreakpoint && (o.activeBreakpoint = null, o.options = o.originalSettings, !0 === e && (o.currentSlide = o.options.initialSlide), o.refresh(e), r = n), e || !1 === r || o.$slider.trigger("breakpoint", [o, r])
            }
        }, r.prototype.changeSlide = function(e, t) {
            var i, n, s = this,
                o = d(e.currentTarget);
            switch (o.is("a") && e.preventDefault(), o.is("li") || (o = o.closest("li")), i = s.slideCount % s.options.slidesToScroll != 0 ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, e.data.message) {
                case "previous":
                    n = 0 == i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - n, !1, t);
                    break;
                case "next":
                    n = 0 == i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + n, !1, t);
                    break;
                case "index":
                    var r = 0 === e.data.index ? 0 : e.data.index || o.index() * s.options.slidesToScroll;
                    s.slideHandler(s.checkNavigable(r), !1, t), o.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, r.prototype.checkNavigable = function(e) {
            var t, i;
            if (i = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
            else
                for (var n in t) {
                    if (e < t[n]) {
                        e = i;
                        break
                    }
                    i = t[n]
                }
            return e
        }, r.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots && null !== e.$dots && d("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", d.proxy(e.interrupt, e, !0)).off("mouseleave.slick", d.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), d(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && d(e.$slideTrack).children().off("click.slick", e.selectHandler), d(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), d(window).off("resize.slick.slick-" + e.instanceUid, e.resize), d("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), d(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), d(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, r.prototype.cleanUpSlideEvents = function() {
            var e = this;
            e.$list.off("mouseenter.slick", d.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", d.proxy(e.interrupt, e, !1))
        }, r.prototype.cleanUpRows = function() {
            var e;
            1 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e))
        }, r.prototype.clickHandler = function(e) {
            !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, r.prototype.destroy = function(e) {
            var t = this;
            t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), d(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                d(this).attr("style", d(this).data("originalStyling"))
            }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
        }, r.prototype.disableTransition = function(e) {
            var t = {};
            t[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(t) : this.$slides.eq(e).css(t)
        }, r.prototype.fadeSlide = function(e, t) {
            var i = this;
            !1 === i.cssTransitions ? (i.$slides.eq(e).css({
                zIndex: i.options.zIndex
            }), i.$slides.eq(e).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }), t && setTimeout(function() {
                i.disableTransition(e), t.call()
            }, i.options.speed))
        }, r.prototype.fadeSlideOut = function(e) {
            var t = this;
            !1 === t.cssTransitions ? t.$slides.eq(e).animate({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }))
        }, r.prototype.filterSlides = r.prototype.slickFilter = function(e) {
            var t = this;
            null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
        }, r.prototype.focusHandler = function() {
            var i = this;
            i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(e) {
                e.stopImmediatePropagation();
                var t = d(this);
                setTimeout(function() {
                    i.options.pauseOnFocus && (i.focussed = t.is(":focus"), i.autoPlay())
                }, 0)
            })
        }, r.prototype.getCurrent = r.prototype.slickCurrentSlide = function() {
            return this.currentSlide
        }, r.prototype.getDotCount = function() {
            var e = this,
                t = 0,
                i = 0,
                n = 0;
            if (!0 === e.options.infinite)
                for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else if (!0 === e.options.centerMode) n = e.slideCount;
            else if (e.options.asNavFor)
                for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
            return n - 1
        }, r.prototype.getLeft = function(e) {
            var t, i, n, s = this,
                o = 0;
            return s.slideOffset = 0, i = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, o = i * s.options.slidesToShow * -1), s.slideCount % s.options.slidesToScroll != 0 && e + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (o = e > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (e - s.slideCount)) * s.slideWidth * -1, (s.options.slidesToShow - (e - s.slideCount)) * i * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, s.slideCount % s.options.slidesToScroll * i * -1))) : e + s.options.slidesToShow > s.slideCount && (s.slideOffset = (e + s.options.slidesToShow - s.slideCount) * s.slideWidth, o = (e + s.options.slidesToShow - s.slideCount) * i), s.slideCount <= s.options.slidesToShow && (o = s.slideOffset = 0), !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), t = !1 === s.options.vertical ? e * s.slideWidth * -1 + s.slideOffset : e * i * -1 + o, !0 === s.options.variableWidth && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow), t = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === s.options.centerMode && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow + 1), t = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, t += (s.$list.width() - n.outerWidth()) / 2)), t
        }, r.prototype.getOption = r.prototype.slickGetOption = function(e) {
            return this.options[e]
        }, r.prototype.getNavigableIndexes = function() {
            var e, t = this,
                i = 0,
                n = 0,
                s = [];
            for (e = !1 === t.options.infinite ? t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, 2 * t.slideCount); i < e;) s.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return s
        }, r.prototype.getSlick = function() {
            return this
        }, r.prototype.getSlideCount = function() {
            var i, n, s = this;
            return n = !0 === s.options.centerMode ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0, !0 === s.options.swipeToSlide ? (s.$slideTrack.find(".slick-slide").each(function(e, t) {
                return t.offsetLeft - n + d(t).outerWidth() / 2 > -1 * s.swipeLeft ? (i = t, !1) : void 0
            }), Math.abs(d(i).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
        }, r.prototype.goTo = r.prototype.slickGoTo = function(e, t) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(e)
                }
            }, t)
        }, r.prototype.init = function(e) {
            var t = this;
            d(t.$slider).hasClass("slick-initialized") || (d(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
        }, r.prototype.initADA = function() {
            var t = this;
            t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(e) {
                d(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + t.instanceUid + e
                })
            }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(e) {
                d(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + t.instanceUid + e,
                    id: "slick-slide" + t.instanceUid + e
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
        }, r.prototype.initArrowEvents = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, e.changeSlide))
        }, r.prototype.initDotEvents = function() {
            var e = this;
            !0 === e.options.dots && e.slideCount > e.options.slidesToShow && d("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && d("li", e.$dots).on("mouseenter.slick", d.proxy(e.interrupt, e, !0)).on("mouseleave.slick", d.proxy(e.interrupt, e, !1))
        }, r.prototype.initSlideEvents = function() {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", d.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", d.proxy(e.interrupt, e, !1)))
        }, r.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), d(document).on(e.visibilityChange, d.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && d(e.$slideTrack).children().on("click.slick", e.selectHandler), d(window).on("orientationchange.slick.slick-" + e.instanceUid, d.proxy(e.orientationChange, e)), d(window).on("resize.slick.slick-" + e.instanceUid, d.proxy(e.resize, e)), d("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), d(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), d(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, r.prototype.initUI = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
        }, r.prototype.keyHandler = function(e) {
            var t = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "next" : "previous"
                }
            }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "previous" : "next"
                }
            }))
        }, r.prototype.lazyLoad = function() {
            function e(e) {
                d("img[data-lazy]", e).each(function() {
                    var e = d(this),
                        t = d(this).attr("data-lazy"),
                        i = document.createElement("img");
                    i.onload = function() {
                        e.animate({
                            opacity: 0
                        }, 100, function() {
                            e.attr("src", t).animate({
                                opacity: 1
                            }, 200, function() {
                                e.removeAttr("data-lazy").removeClass("slick-loading")
                            }), n.$slider.trigger("lazyLoaded", [n, e, t])
                        })
                    }, i.onerror = function() {
                        e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t])
                    }, i.src = t
                })
            }
            var t, i, n = this;
            !0 === n.options.centerMode ? i = !0 === n.options.infinite ? (t = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (t = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (t = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, i = Math.ceil(t + n.options.slidesToShow), !0 === n.options.fade && (0 < t && t--, i <= n.slideCount && i++)), e(n.$slider.find(".slick-slide").slice(t, i)), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
        }, r.prototype.loadSlider = function() {
            var e = this;
            e.setPosition(), e.$slideTrack.css({
                opacity: 1
            }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, r.prototype.next = r.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, r.prototype.orientationChange = function() {
            this.checkResponsive(), this.setPosition()
        }, r.prototype.pause = r.prototype.slickPause = function() {
            this.autoPlayClear(), this.paused = !0
        }, r.prototype.play = r.prototype.slickPlay = function() {
            var e = this;
            e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
        }, r.prototype.postSlide = function(e) {
            var t = this;
            t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && t.initADA())
        }, r.prototype.prev = r.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, r.prototype.preventDefault = function(e) {
            e.preventDefault()
        }, r.prototype.progressiveLazyLoad = function(e) {
            e = e || 1;
            var t, i, n, s = this,
                o = d("img[data-lazy]", s.$slider);
            o.length ? (t = o.first(), i = t.attr("data-lazy"), (n = document.createElement("img")).onload = function() {
                t.attr("src", i).removeAttr("data-lazy").removeClass("slick-loading"), !0 === s.options.adaptiveHeight && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, t, i]), s.progressiveLazyLoad()
            }, n.onerror = function() {
                e < 3 ? setTimeout(function() {
                    s.progressiveLazyLoad(e + 1)
                }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, i]), s.progressiveLazyLoad())
            }, n.src = i) : s.$slider.trigger("allImagesLoaded", [s])
        }, r.prototype.refresh = function(e) {
            var t, i, n = this;
            i = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > i && (n.currentSlide = i), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), t = n.currentSlide, n.destroy(!0), d.extend(n, n.initials, {
                currentSlide: t
            }), n.init(), e || n.changeSlide({
                data: {
                    message: "index",
                    index: t
                }
            }, !1)
        }, r.prototype.registerBreakpoints = function() {
            var e, t, i, n = this,
                s = n.options.responsive || null;
            if ("array" === d.type(s) && s.length) {
                for (e in n.respondTo = n.options.respondTo || "window", s)
                    if (i = n.breakpoints.length - 1, t = s[e].breakpoint, s.hasOwnProperty(e)) {
                        for (; 0 <= i;) n.breakpoints[i] && n.breakpoints[i] === t && n.breakpoints.splice(i, 1), i--;
                        n.breakpoints.push(t), n.breakpointSettings[t] = s[e].settings
                    } n.breakpoints.sort(function(e, t) {
                    return n.options.mobileFirst ? e - t : t - e
                })
            }
        }, r.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && d(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
        }, r.prototype.resize = function() {
            var e = this;
            d(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
                e.windowWidth = d(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
            }, 50))
        }, r.prototype.removeSlide = r.prototype.slickRemove = function(e, t, i) {
            var n = this;
            return e = "boolean" == typeof e ? !0 === (t = e) ? 0 : n.slideCount - 1 : !0 === t ? --e : e, !(n.slideCount < 1 || e < 0 || e > n.slideCount - 1) && (n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
        }, r.prototype.setCSS = function(e) {
            var t, i, n = this,
                s = {};
            !0 === n.options.rtl && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", s[n.positionProp] = e, !1 === n.transformsEnabled || (!(s = {}) === n.cssTransitions ? s[n.animType] = "translate(" + t + ", " + i + ")" : s[n.animType] = "translate3d(" + t + ", " + i + ", 0px)"), n.$slideTrack.css(s)
        }, r.prototype.setDimensions = function() {
            var e = this;
            !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                padding: "0px " + e.options.centerPadding
            }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
                padding: e.options.centerPadding + " 0px"
            })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
            var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
        }, r.prototype.setFade = function() {
            var i, n = this;
            n.$slides.each(function(e, t) {
                i = n.slideWidth * e * -1, !0 === n.options.rtl ? d(t).css({
                    position: "relative",
                    right: i,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                }) : d(t).css({
                    position: "relative",
                    left: i,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                })
            }), n.$slides.eq(n.currentSlide).css({
                zIndex: n.options.zIndex - 1,
                opacity: 1
            })
        }, r.prototype.setHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", t)
            }
        }, r.prototype.setOption = r.prototype.slickSetOption = function() {
            var e, t, i, n, s, o = this,
                r = !1;
            if ("object" === d.type(arguments[0]) ? (i = arguments[0], r = arguments[1], s = "multiple") : "string" === d.type(arguments[0]) && (i = arguments[0], n = arguments[1], r = arguments[2], "responsive" === arguments[0] && "array" === d.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) o.options[i] = n;
            else if ("multiple" === s) d.each(i, function(e, t) {
                o.options[e] = t
            });
            else if ("responsive" === s)
                for (t in n)
                    if ("array" !== d.type(o.options.responsive)) o.options.responsive = [n[t]];
                    else {
                        for (e = o.options.responsive.length - 1; 0 <= e;) o.options.responsive[e].breakpoint === n[t].breakpoint && o.options.responsive.splice(e, 1), e--;
                        o.options.responsive.push(n[t])
                    } r && (o.unload(), o.reinit())
        }, r.prototype.setPosition = function() {
            var e = this;
            e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, r.prototype.setProps = function() {
            var e = this,
                t = document.body.style;
            e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
        }, r.prototype.setSlideClasses = function(e) {
            var t, i, n, s, o = this;
            i = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(e).addClass("slick-current"), !0 === o.options.centerMode ? (t = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (t <= e && e <= o.slideCount - 1 - t ? o.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = o.options.slidesToShow + e, i.slice(n - t + 1, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - o.options.slidesToShow).addClass("slick-center") : e === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(e).addClass("slick-center")) : 0 <= e && e <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(e, e + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= o.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (s = o.slideCount % o.options.slidesToShow, n = !0 === o.options.infinite ? o.options.slidesToShow + e : e, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - e < o.options.slidesToShow ? i.slice(n - (o.options.slidesToShow - s), n + s).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === o.options.lazyLoad && o.lazyLoad()
        }, r.prototype.setupInfinite = function() {
            var e, t, i, n = this;
            if (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && (t = null, n.slideCount > n.options.slidesToShow)) {
                for (i = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, e = n.slideCount; e > n.slideCount - i; e -= 1) t = e - 1, d(n.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
                for (e = 0; e < i; e += 1) t = e, d(n.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
                n.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    d(this).attr("id", "")
                })
            }
        }, r.prototype.interrupt = function(e) {
            e || this.autoPlay(), this.interrupted = e
        }, r.prototype.selectHandler = function(e) {
            var t = this,
                i = d(e.target).is(".slick-slide") ? d(e.target) : d(e.target).parents(".slick-slide"),
                n = parseInt(i.attr("data-slick-index"));
            return n || (n = 0), t.slideCount <= t.options.slidesToShow ? (t.setSlideClasses(n), void t.asNavFor(n)) : void t.slideHandler(n)
        }, r.prototype.slideHandler = function(e, t, i) {
            var n, s, o, r, a, l = null,
                d = this;
            return t = t || !1, !0 === d.animating && !0 === d.options.waitForAnimate || !0 === d.options.fade && d.currentSlide === e || d.slideCount <= d.options.slidesToShow ? void 0 : (!1 === t && d.asNavFor(e), n = e, l = d.getLeft(n), r = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? r : d.swipeLeft, !1 === d.options.infinite && !1 === d.options.centerMode && (e < 0 || e > d.getDotCount() * d.options.slidesToScroll) ? void(!1 === d.options.fade && (n = d.currentSlide, !0 !== i ? d.animateSlide(r, function() {
                d.postSlide(n)
            }) : d.postSlide(n))) : !1 === d.options.infinite && !0 === d.options.centerMode && (e < 0 || e > d.slideCount - d.options.slidesToScroll) ? void(!1 === d.options.fade && (n = d.currentSlide, !0 !== i ? d.animateSlide(r, function() {
                d.postSlide(n)
            }) : d.postSlide(n))) : (d.options.autoplay && clearInterval(d.autoPlayTimer), s = n < 0 ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + n : n >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : n - d.slideCount : n, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, s]), o = d.currentSlide, d.currentSlide = s, d.setSlideClasses(d.currentSlide), d.options.asNavFor && ((a = (a = d.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(d.currentSlide)), d.updateDots(), d.updateArrows(), !0 === d.options.fade ? (!0 !== i ? (d.fadeSlideOut(o), d.fadeSlide(s, function() {
                d.postSlide(s)
            })) : d.postSlide(s), void d.animateHeight()) : void(!0 !== i ? d.animateSlide(l, function() {
                d.postSlide(s)
            }) : d.postSlide(s))))
        }, r.prototype.startLoad = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, r.prototype.swipeDirection = function() {
            var e, t, i, n, s = this;
            return e = s.touchObject.startX - s.touchObject.curX, t = s.touchObject.startY - s.touchObject.curY, i = Math.atan2(t, e), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && 0 <= n ? !1 === s.options.rtl ? "left" : "right" : n <= 360 && 315 <= n ? !1 === s.options.rtl ? "left" : "right" : 135 <= n && n <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? 35 <= n && n <= 135 ? "down" : "up" : "vertical"
        }, r.prototype.swipeEnd = function(e) {
            var t, i, n = this;
            if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(10 < n.touchObject.swipeLength), void 0 === n.touchObject.curX) return !1;
            if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                switch (i = n.swipeDirection()) {
                    case "left":
                    case "down":
                        t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
                }
                "vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
            } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
        }, r.prototype.swipeHandler = function(e) {
            var t = this;
            if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                case "start":
                    t.swipeStart(e);
                    break;
                case "move":
                    t.swipeMove(e);
                    break;
                case "end":
                    t.swipeEnd(e)
            }
        }, r.prototype.swipeMove = function(e) {
            var t, i, n, s, o, r = this;
            return o = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!r.dragging || o && 1 !== o.length) && (t = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX, r.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), !0 === r.options.verticalSwiping && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), "vertical" !== (i = r.swipeDirection()) ? (void 0 !== e.originalEvent && 4 < r.touchObject.swipeLength && e.preventDefault(), s = (!1 === r.options.rtl ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), !0 === r.options.verticalSwiping && (s = r.touchObject.curY > r.touchObject.startY ? 1 : -1), n = r.touchObject.swipeLength, (r.touchObject.edgeHit = !1) === r.options.infinite && (0 === r.currentSlide && "right" === i || r.currentSlide >= r.getDotCount() && "left" === i) && (n = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), !1 === r.options.vertical ? r.swipeLeft = t + n * s : r.swipeLeft = t + n * (r.$list.height() / r.listWidth) * s, !0 === r.options.verticalSwiping && (r.swipeLeft = t + n * s), !0 !== r.options.fade && !1 !== r.options.touchMove && (!0 === r.animating ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft))) : void 0)
        }, r.prototype.swipeStart = function(e) {
            var t, i = this;
            return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? !(i.touchObject = {}) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(i.dragging = !0))
        }, r.prototype.unfilterSlides = r.prototype.slickUnfilter = function() {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, r.prototype.unload = function() {
            var e = this;
            d(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, r.prototype.unslick = function(e) {
            this.$slider.trigger("unslick", [this, e]), this.destroy()
        }, r.prototype.updateArrows = function() {
            var e = this;
            Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, r.prototype.updateDots = function() {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, r.prototype.visibility = function() {
            this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
        }, d.fn.slick = function() {
            var e, t, i = this,
                n = arguments[0],
                s = Array.prototype.slice.call(arguments, 1),
                o = i.length;
            for (e = 0; e < o; e++)
                if ("object" == typeof n || void 0 === n ? i[e].slick = new r(i[e], n) : t = i[e].slick[n].apply(i[e].slick, s), void 0 !== t) return t;
            return i
        }
    }),
    function(o, s, e, p) {
        "use strict";

        function a(e, t, i) {
            return setTimeout(l(e, i), t)
        }

        function n(e, t, i) {
            return !!Array.isArray(e) && (r(e, i[t], i), !0)
        }

        function r(e, t, i) {
            var n;
            if (e)
                if (e.forEach) e.forEach(t, i);
                else if (e.length !== p)
                for (n = 0; n < e.length;) t.call(i, e[n], n, e), n++;
            else
                for (n in e) e.hasOwnProperty(n) && t.call(i, e[n], n, e)
        }

        function t(n, e, t) {
            var s = "DEPRECATED METHOD: " + e + "\n" + t + " AT \n";
            return function() {
                var e = new Error("get-stack-trace"),
                    t = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                    i = o.console && (o.console.warn || o.console.log);
                return i && i.call(o.console, s, t), n.apply(this, arguments)
            }
        }

        function i(e, t, i) {
            var n, s = t.prototype;
            (n = e.prototype = Object.create(s)).constructor = e, n._super = s, i && Z(n, i)
        }

        function l(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }

        function d(e, t) {
            return typeof e == ee ? e.apply(t && t[0] || p, t) : e
        }

        function c(e, t) {
            return e === p ? t : e
        }

        function u(t, e, i) {
            r(g(e), function(e) {
                t.addEventListener(e, i, !1)
            })
        }

        function h(t, e, i) {
            r(g(e), function(e) {
                t.removeEventListener(e, i, !1)
            })
        }

        function f(e, t) {
            for (; e;) {
                if (e == t) return !0;
                e = e.parentNode
            }
            return !1
        }

        function v(e, t) {
            return -1 < e.indexOf(t)
        }

        function g(e) {
            return e.trim().split(/\s+/g)
        }

        function m(e, t, i) {
            if (e.indexOf && !i) return e.indexOf(t);
            for (var n = 0; n < e.length;) {
                if (i && e[n][i] == t || !i && e[n] === t) return n;
                n++
            }
            return -1
        }

        function w(e) {
            return Array.prototype.slice.call(e, 0)
        }

        function y(e, i, t) {
            for (var n = [], s = [], o = 0; o < e.length;) {
                var r = i ? e[o][i] : e[o];
                m(s, r) < 0 && n.push(e[o]), s[o] = r, o++
            }
            return t && (n = i ? n.sort(function(e, t) {
                return e[i] > t[i]
            }) : n.sort()), n
        }

        function k(e, t) {
            for (var i, n, s = t[0].toUpperCase() + t.slice(1), o = 0; o < K.length;) {
                if ((n = (i = K[o]) ? i + s : t) in e) return n;
                o++
            }
            return p
        }

        function T(e) {
            var t = e.ownerDocument || e;
            return t.defaultView || t.parentWindow || o
        }

        function $(t, e) {
            var i = this;
            this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
                d(t.options.enable, [t]) && i.handler(e)
            }, this.init()
        }

        function b(e, t, i) {
            var n = i.pointers.length,
                s = i.changedPointers.length,
                o = t & he && n - s == 0,
                r = t & (fe | ve) && n - s == 0;
            i.isFirst = !!o, i.isFinal = !!r, o && (e.session = {}), i.eventType = t,
                function(e, t) {
                    var i = e.session,
                        n = t.pointers,
                        s = n.length;
                    i.firstInput || (i.firstInput = S(t)), 1 < s && !i.firstMultiple ? i.firstMultiple = S(t) : 1 === s && (i.firstMultiple = !1);
                    var o = i.firstInput,
                        r = i.firstMultiple,
                        a = r ? r.center : o.center,
                        l = t.center = C(n);
                    t.timeStamp = ne(), t.deltaTime = t.timeStamp - o.timeStamp, t.angle = E(a, l), t.distance = A(a, l),
                        function(e, t) {
                            var i = t.center,
                                n = e.offsetDelta || {},
                                s = e.prevDelta || {},
                                o = e.prevInput || {};
                            t.eventType !== he && o.eventType !== fe || (s = e.prevDelta = {
                                x: o.deltaX || 0,
                                y: o.deltaY || 0
                            }, n = e.offsetDelta = {
                                x: i.x,
                                y: i.y
                            }), t.deltaX = s.x + (i.x - n.x), t.deltaY = s.y + (i.y - n.y)
                        }(i, t), t.offsetDirection = _(t.deltaX, t.deltaY);
                    var d = x(t.deltaTime, t.deltaX, t.deltaY);
                    t.overallVelocityX = d.x, t.overallVelocityY = d.y, t.overallVelocity = ie(d.x) > ie(d.y) ? d.x : d.y, t.scale = r ? function(e, t) {
                            return A(t[0], t[1], Ce) / A(e[0], e[1], Ce)
                        }(r.pointers, n) : 1, t.rotation = r ? function(e, t) {
                            return E(t[1], t[0], Ce) + E(e[1], e[0], Ce)
                        }(r.pointers, n) : 0, t.maxPointers = i.prevInput ? t.pointers.length > i.prevInput.maxPointers ? t.pointers.length : i.prevInput.maxPointers : t.pointers.length,
                        function(e, t) {
                            var i, n, s, o, r = e.lastInterval || t,
                                a = t.timeStamp - r.timeStamp;
                            if (t.eventType != ve && (ue < a || r.velocity === p)) {
                                var l = t.deltaX - r.deltaX,
                                    d = t.deltaY - r.deltaY,
                                    c = x(a, l, d);
                                n = c.x, s = c.y, i = ie(c.x) > ie(c.y) ? c.x : c.y, o = _(l, d), e.lastInterval = t
                            } else i = r.velocity, n = r.velocityX, s = r.velocityY, o = r.direction;
                            t.velocity = i, t.velocityX = n, t.velocityY = s, t.direction = o
                        }(i, t);
                    var c = e.element;
                    f(t.srcEvent.target, c) && (c = t.srcEvent.target), t.target = c
                }(e, i), e.emit("hammer.input", i), e.recognize(i), e.session.prevInput = i
        }

        function S(e) {
            for (var t = [], i = 0; i < e.pointers.length;) t[i] = {
                clientX: te(e.pointers[i].clientX),
                clientY: te(e.pointers[i].clientY)
            }, i++;
            return {
                timeStamp: ne(),
                pointers: t,
                center: C(t),
                deltaX: e.deltaX,
                deltaY: e.deltaY
            }
        }

        function C(e) {
            var t = e.length;
            if (1 === t) return {
                x: te(e[0].clientX),
                y: te(e[0].clientY)
            };
            for (var i = 0, n = 0, s = 0; s < t;) i += e[s].clientX, n += e[s].clientY, s++;
            return {
                x: te(i / t),
                y: te(n / t)
            }
        }

        function x(e, t, i) {
            return {
                x: t / e || 0,
                y: i / e || 0
            }
        }

        function _(e, t) {
            return e === t ? ge : ie(e) >= ie(t) ? e < 0 ? me : we : t < 0 ? ye : ke
        }

        function A(e, t, i) {
            i || (i = Se);
            var n = t[i[0]] - e[i[0]],
                s = t[i[1]] - e[i[1]];
            return Math.sqrt(n * n + s * s)
        }

        function E(e, t, i) {
            i || (i = Se);
            var n = t[i[0]] - e[i[0]],
                s = t[i[1]] - e[i[1]];
            return 180 * Math.atan2(s, n) / Math.PI
        }

        function P() {
            this.evEl = _e, this.evWin = Ae, this.pressed = !1, $.apply(this, arguments)
        }

        function I() {
            this.evEl = Ie, this.evWin = Oe, $.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }

        function O() {
            this.evTarget = "touchstart", this.evWin = "touchstart touchmove touchend touchcancel", this.started = !1, $.apply(this, arguments)
        }

        function z() {
            this.evTarget = De, this.targetIds = {}, $.apply(this, arguments)
        }

        function M() {
            $.apply(this, arguments);
            var e = l(this.handler, this);
            this.touch = new z(this.manager, e), this.mouse = new P(this.manager, e), this.primaryTouch = null, this.lastTouches = []
        }

        function D(e) {
            var t = e.changedPointers[0];
            if (t.identifier === this.primaryTouch) {
                var i = {
                    x: t.clientX,
                    y: t.clientY
                };
                this.lastTouches.push(i);
                var n = this.lastTouches;
                setTimeout(function() {
                    var e = n.indexOf(i); - 1 < e && n.splice(e, 1)
                }, He)
            }
        }

        function H(e, t) {
            this.manager = e, this.set(t)
        }

        function j(e) {
            this.options = Z({}, this.defaults, e || {}), this.id = re++, this.manager = null, this.options.enable = c(this.options.enable, !0), this.state = Ye, this.simultaneous = {}, this.requireFail = []
        }

        function L(e) {
            return 16 & e ? "cancel" : 8 & e ? "end" : 4 & e ? "move" : 2 & e ? "start" : ""
        }

        function q(e) {
            return e == ke ? "down" : e == ye ? "up" : e == me ? "left" : e == we ? "right" : ""
        }

        function W(e, t) {
            var i = t.manager;
            return i ? i.get(e) : e
        }

        function R() {
            j.apply(this, arguments)
        }

        function F() {
            R.apply(this, arguments), this.pX = null, this.pY = null
        }

        function N() {
            R.apply(this, arguments)
        }

        function X() {
            j.apply(this, arguments), this._timer = null, this._input = null
        }

        function Y() {
            R.apply(this, arguments)
        }

        function U() {
            R.apply(this, arguments)
        }

        function B() {
            j.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function V(e, t) {
            return (t = t || {}).recognizers = c(t.recognizers, V.defaults.preset), new Q(e, t)
        }

        function Q(e, t) {
            this.options = Z({}, V.defaults, t || {}), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = e, this.input = function(e) {
                var t = e.options.inputClass;
                return new(t || (le ? I : de ? z : ae ? M : P))(e, b)
            }(this), this.touchAction = new H(this, this.options.touchAction), G(this, !0), r(this.options.recognizers, function(e) {
                var t = this.add(new e[0](e[1]));
                e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
            }, this)
        }

        function G(i, n) {
            var s, o = i.element;
            o.style && (r(i.options.cssProps, function(e, t) {
                s = k(o.style, t), n ? (i.oldCssProps[s] = o.style[s], o.style[s] = e) : o.style[s] = i.oldCssProps[s] || ""
            }), n || (i.oldCssProps = {}))
        }
        var Z, K = ["", "webkit", "Moz", "MS", "ms", "o"],
            J = s.createElement("div"),
            ee = "function",
            te = Math.round,
            ie = Math.abs,
            ne = Date.now;
        Z = "function" != typeof Object.assign ? function(e) {
            if (e === p || null === e) throw new TypeError("Cannot convert undefined or null to object");
            for (var t = Object(e), i = 1; i < arguments.length; i++) {
                var n = arguments[i];
                if (n !== p && null !== n)
                    for (var s in n) n.hasOwnProperty(s) && (t[s] = n[s])
            }
            return t
        } : Object.assign;
        var se = t(function(e, t, i) {
                for (var n = Object.keys(t), s = 0; s < n.length;)(!i || i && e[n[s]] === p) && (e[n[s]] = t[n[s]]), s++;
                return e
            }, "extend", "Use `assign`."),
            oe = t(function(e, t) {
                return se(e, t, !0)
            }, "merge", "Use `assign`."),
            re = 1,
            ae = "ontouchstart" in o,
            le = k(o, "PointerEvent") !== p,
            de = ae && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
            ce = "touch",
            pe = "mouse",
            ue = 25,
            he = 1,
            fe = 4,
            ve = 8,
            ge = 1,
            me = 2,
            we = 4,
            ye = 8,
            ke = 16,
            Te = me | we,
            $e = ye | ke,
            be = Te | $e,
            Se = ["x", "y"],
            Ce = ["clientX", "clientY"];
        $.prototype = {
            handler: function() {},
            init: function() {
                this.evEl && u(this.element, this.evEl, this.domHandler), this.evTarget && u(this.target, this.evTarget, this.domHandler), this.evWin && u(T(this.element), this.evWin, this.domHandler)
            },
            destroy: function() {
                this.evEl && h(this.element, this.evEl, this.domHandler), this.evTarget && h(this.target, this.evTarget, this.domHandler), this.evWin && h(T(this.element), this.evWin, this.domHandler)
            }
        };
        var xe = {
                mousedown: he,
                mousemove: 2,
                mouseup: fe
            },
            _e = "mousedown",
            Ae = "mousemove mouseup";
        i(P, $, {
            handler: function(e) {
                var t = xe[e.type];
                t & he && 0 === e.button && (this.pressed = !0), 2 & t && 1 !== e.which && (t = fe), this.pressed && (t & fe && (this.pressed = !1), this.callback(this.manager, t, {
                    pointers: [e],
                    changedPointers: [e],
                    pointerType: pe,
                    srcEvent: e
                }))
            }
        });
        var Ee = {
                pointerdown: he,
                pointermove: 2,
                pointerup: fe,
                pointercancel: ve,
                pointerout: ve
            },
            Pe = {
                2: ce,
                3: "pen",
                4: pe,
                5: "kinect"
            },
            Ie = "pointerdown",
            Oe = "pointermove pointerup pointercancel";
        o.MSPointerEvent && !o.PointerEvent && (Ie = "MSPointerDown", Oe = "MSPointerMove MSPointerUp MSPointerCancel"), i(I, $, {
            handler: function(e) {
                var t = this.store,
                    i = !1,
                    n = e.type.toLowerCase().replace("ms", ""),
                    s = Ee[n],
                    o = Pe[e.pointerType] || e.pointerType,
                    r = o == ce,
                    a = m(t, e.pointerId, "pointerId");
                s & he && (0 === e.button || r) ? a < 0 && (t.push(e), a = t.length - 1) : s & (fe | ve) && (i = !0), a < 0 || (t[a] = e, this.callback(this.manager, s, {
                    pointers: t,
                    changedPointers: [e],
                    pointerType: o,
                    srcEvent: e
                }), i && t.splice(a, 1))
            }
        });
        var ze = {
            touchstart: he,
            touchmove: 2,
            touchend: fe,
            touchcancel: ve
        };
        i(O, $, {
            handler: function(e) {
                var t = ze[e.type];
                if (t === he && (this.started = !0), this.started) {
                    var i = function(e, t) {
                        var i = w(e.touches),
                            n = w(e.changedTouches);
                        return t & (fe | ve) && (i = y(i.concat(n), "identifier", !0)), [i, n]
                    }.call(this, e, t);
                    t & (fe | ve) && i[0].length - i[1].length == 0 && (this.started = !1), this.callback(this.manager, t, {
                        pointers: i[0],
                        changedPointers: i[1],
                        pointerType: ce,
                        srcEvent: e
                    })
                }
            }
        });
        var Me = {
                touchstart: he,
                touchmove: 2,
                touchend: fe,
                touchcancel: ve
            },
            De = "touchstart touchmove touchend touchcancel";
        i(z, $, {
            handler: function(e) {
                var t = Me[e.type],
                    i = function(e, t) {
                        var i = w(e.touches),
                            n = this.targetIds;
                        if (t & (2 | he) && 1 === i.length) return n[i[0].identifier] = !0, [i, i];
                        var s, o, r = w(e.changedTouches),
                            a = [],
                            l = this.target;
                        if (o = i.filter(function(e) {
                                return f(e.target, l)
                            }), t === he)
                            for (s = 0; s < o.length;) n[o[s].identifier] = !0, s++;
                        for (s = 0; s < r.length;) n[r[s].identifier] && a.push(r[s]), t & (fe | ve) && delete n[r[s].identifier], s++;
                        return a.length ? [y(o.concat(a), "identifier", !0), a] : void 0
                    }.call(this, e, t);
                i && this.callback(this.manager, t, {
                    pointers: i[0],
                    changedPointers: i[1],
                    pointerType: ce,
                    srcEvent: e
                })
            }
        });
        var He = 2500;
        i(M, $, {
            handler: function(e, t, i) {
                var n = i.pointerType == ce,
                    s = i.pointerType == pe;
                if (!(s && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                    if (n)(function(e, t) {
                        e & he ? (this.primaryTouch = t.changedPointers[0].identifier, D.call(this, t)) : e & (fe | ve) && D.call(this, t)
                    }).call(this, t, i);
                    else if (s && function(e) {
                            for (var t = e.srcEvent.clientX, i = e.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
                                var s = this.lastTouches[n],
                                    o = Math.abs(t - s.x),
                                    r = Math.abs(i - s.y);
                                if (o <= 25 && r <= 25) return !0
                            }
                            return !1
                        }.call(this, i)) return;
                    this.callback(e, t, i)
                }
            },
            destroy: function() {
                this.touch.destroy(), this.mouse.destroy()
            }
        });
        var je = k(J.style, "touchAction"),
            Le = je !== p,
            qe = "compute",
            We = "manipulation",
            Re = "none",
            Fe = "pan-x",
            Ne = "pan-y",
            Xe = function() {
                if (!Le) return !1;
                var t = {},
                    i = o.CSS && o.CSS.supports;
                return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(e) {
                    t[e] = !i || o.CSS.supports("touch-action", e)
                }), t
            }();
        H.prototype = {
            set: function(e) {
                e == qe && (e = this.compute()), Le && this.manager.element.style && Xe[e] && (this.manager.element.style[je] = e), this.actions = e.toLowerCase().trim()
            },
            update: function() {
                this.set(this.manager.options.touchAction)
            },
            compute: function() {
                var t = [];
                return r(this.manager.recognizers, function(e) {
                        d(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                    }),
                    function(e) {
                        if (v(e, Re)) return Re;
                        var t = v(e, Fe),
                            i = v(e, Ne);
                        return t && i ? Re : t || i ? t ? Fe : Ne : v(e, We) ? We : "auto"
                    }(t.join(" "))
            },
            preventDefaults: function(e) {
                var t = e.srcEvent,
                    i = e.offsetDirection;
                if (!this.manager.session.prevented) {
                    var n = this.actions,
                        s = v(n, Re) && !Xe[Re],
                        o = v(n, Ne) && !Xe[Ne],
                        r = v(n, Fe) && !Xe[Fe];
                    if (s) {
                        var a = 1 === e.pointers.length,
                            l = e.distance < 2,
                            d = e.deltaTime < 250;
                        if (a && l && d) return
                    }
                    return r && o ? void 0 : s || o && i & Te || r && i & $e ? this.preventSrc(t) : void 0
                }
                t.preventDefault()
            },
            preventSrc: function(e) {
                this.manager.session.prevented = !0, e.preventDefault()
            }
        };
        var Ye = 1;
        j.prototype = {
            defaults: {},
            set: function(e) {
                return Z(this.options, e), this.manager && this.manager.touchAction.update(), this
            },
            recognizeWith: function(e) {
                if (n(e, "recognizeWith", this)) return this;
                var t = this.simultaneous;
                return t[(e = W(e, this)).id] || (t[e.id] = e).recognizeWith(this), this
            },
            dropRecognizeWith: function(e) {
                return n(e, "dropRecognizeWith", this) || (e = W(e, this), delete this.simultaneous[e.id]), this
            },
            requireFailure: function(e) {
                if (n(e, "requireFailure", this)) return this;
                var t = this.requireFail;
                return -1 === m(t, e = W(e, this)) && (t.push(e), e.requireFailure(this)), this
            },
            dropRequireFailure: function(e) {
                if (n(e, "dropRequireFailure", this)) return this;
                e = W(e, this);
                var t = m(this.requireFail, e);
                return -1 < t && this.requireFail.splice(t, 1), this
            },
            hasRequireFailures: function() {
                return 0 < this.requireFail.length
            },
            canRecognizeWith: function(e) {
                return !!this.simultaneous[e.id]
            },
            emit: function(t) {
                function e(e) {
                    i.manager.emit(e, t)
                }
                var i = this,
                    n = this.state;
                n < 8 && e(i.options.event + L(n)), e(i.options.event), t.additionalEvent && e(t.additionalEvent), 8 <= n && e(i.options.event + L(n))
            },
            tryEmit: function(e) {
                return this.canEmit() ? this.emit(e) : void(this.state = 32)
            },
            canEmit: function() {
                for (var e = 0; e < this.requireFail.length;) {
                    if (!(this.requireFail[e].state & (32 | Ye))) return !1;
                    e++
                }
                return !0
            },
            recognize: function(e) {
                var t = Z({}, e);
                return d(this.options.enable, [this, t]) ? (56 & this.state && (this.state = Ye), this.state = this.process(t), void(30 & this.state && this.tryEmit(t))) : (this.reset(), void(this.state = 32))
            },
            process: function(e) {},
            getTouchAction: function() {},
            reset: function() {}
        }, i(R, j, {
            defaults: {
                pointers: 1
            },
            attrTest: function(e) {
                var t = this.options.pointers;
                return 0 === t || e.pointers.length === t
            },
            process: function(e) {
                var t = this.state,
                    i = e.eventType,
                    n = 6 & t,
                    s = this.attrTest(e);
                return n && (i & ve || !s) ? 16 | t : n || s ? i & fe ? 8 | t : 2 & t ? 4 | t : 2 : 32
            }
        }), i(F, R, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: be
            },
            getTouchAction: function() {
                var e = this.options.direction,
                    t = [];
                return e & Te && t.push(Ne), e & $e && t.push(Fe), t
            },
            directionTest: function(e) {
                var t = this.options,
                    i = !0,
                    n = e.distance,
                    s = e.direction,
                    o = e.deltaX,
                    r = e.deltaY;
                return s & t.direction || (n = t.direction & Te ? (s = 0 === o ? ge : o < 0 ? me : we, i = o != this.pX, Math.abs(e.deltaX)) : (s = 0 === r ? ge : r < 0 ? ye : ke, i = r != this.pY, Math.abs(e.deltaY))), e.direction = s, i && n > t.threshold && s & t.direction
            },
            attrTest: function(e) {
                return R.prototype.attrTest.call(this, e) && (2 & this.state || !(2 & this.state) && this.directionTest(e))
            },
            emit: function(e) {
                this.pX = e.deltaX, this.pY = e.deltaY;
                var t = q(e.direction);
                t && (e.additionalEvent = this.options.event + t), this._super.emit.call(this, e)
            }
        }), i(N, R, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [Re]
            },
            attrTest: function(e) {
                return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || 2 & this.state)
            },
            emit: function(e) {
                if (1 !== e.scale) {
                    var t = e.scale < 1 ? "in" : "out";
                    e.additionalEvent = this.options.event + t
                }
                this._super.emit.call(this, e)
            }
        }), i(X, j, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 251,
                threshold: 9
            },
            getTouchAction: function() {
                return ["auto"]
            },
            process: function(e) {
                var t = this.options,
                    i = e.pointers.length === t.pointers,
                    n = e.distance < t.threshold,
                    s = e.deltaTime > t.time;
                if (this._input = e, !n || !i || e.eventType & (fe | ve) && !s) this.reset();
                else if (e.eventType & he) this.reset(), this._timer = a(function() {
                    this.state = 8, this.tryEmit()
                }, t.time, this);
                else if (e.eventType & fe) return 8;
                return 32
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function(e) {
                8 === this.state && (e && e.eventType & fe ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = ne(), this.manager.emit(this.options.event, this._input)))
            }
        }), i(Y, R, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [Re]
            },
            attrTest: function(e) {
                return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || 2 & this.state)
            }
        }), i(U, R, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .3,
                direction: Te | $e,
                pointers: 1
            },
            getTouchAction: function() {
                return F.prototype.getTouchAction.call(this)
            },
            attrTest: function(e) {
                var t, i = this.options.direction;
                return i & (Te | $e) ? t = e.overallVelocity : i & Te ? t = e.overallVelocityX : i & $e && (t = e.overallVelocityY), this._super.attrTest.call(this, e) && i & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && ie(t) > this.options.velocity && e.eventType & fe
            },
            emit: function(e) {
                var t = q(e.offsetDirection);
                t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
            }
        }), i(B, j, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 9,
                posThreshold: 10
            },
            getTouchAction: function() {
                return [We]
            },
            process: function(e) {
                var t = this.options,
                    i = e.pointers.length === t.pointers,
                    n = e.distance < t.threshold,
                    s = e.deltaTime < t.time;
                if (this.reset(), e.eventType & he && 0 === this.count) return this.failTimeout();
                if (n && s && i) {
                    if (e.eventType != fe) return this.failTimeout();
                    var o = !this.pTime || e.timeStamp - this.pTime < t.interval,
                        r = !this.pCenter || A(this.pCenter, e.center) < t.posThreshold;
                    if (this.pTime = e.timeStamp, this.pCenter = e.center, r && o ? this.count += 1 : this.count = 1, this._input = e, 0 == this.count % t.taps) return this.hasRequireFailures() ? (this._timer = a(function() {
                        this.state = 8, this.tryEmit()
                    }, t.interval, this), 2) : 8
                }
                return 32
            },
            failTimeout: function() {
                return this._timer = a(function() {
                    this.state = 32
                }, this.options.interval, this), 32
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function() {
                8 == this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), V.VERSION = "2.0.8", V.defaults = {
            domEvents: !1,
            touchAction: qe,
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [Y, {
                    enable: !1
                }],
                [N, {
                        enable: !1
                    },
                    ["rotate"]
                ],
                [U, {
                    direction: Te
                }],
                [F, {
                        direction: Te
                    },
                    ["swipe"]
                ],
                [B],
                [B, {
                        event: "doubletap",
                        taps: 2
                    },
                    ["tap"]
                ],
                [X]
            ],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
        Q.prototype = {
            set: function(e) {
                return Z(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
            },
            stop: function(e) {
                this.session.stopped = e ? 2 : 1
            },
            recognize: function(e) {
                var t = this.session;
                if (!t.stopped) {
                    this.touchAction.preventDefaults(e);
                    var i, n = this.recognizers,
                        s = t.curRecognizer;
                    (!s || s && 8 & s.state) && (s = t.curRecognizer = null);
                    for (var o = 0; o < n.length;) i = n[o], 2 === t.stopped || s && i != s && !i.canRecognizeWith(s) ? i.reset() : i.recognize(e), !s && 14 & i.state && (s = t.curRecognizer = i), o++
                }
            },
            get: function(e) {
                if (e instanceof j) return e;
                for (var t = this.recognizers, i = 0; i < t.length; i++)
                    if (t[i].options.event == e) return t[i];
                return null
            },
            add: function(e) {
                if (n(e, "add", this)) return this;
                var t = this.get(e.options.event);
                return t && this.remove(t), this.recognizers.push(e), (e.manager = this).touchAction.update(), e
            },
            remove: function(e) {
                if (n(e, "remove", this)) return this;
                if (e = this.get(e)) {
                    var t = this.recognizers,
                        i = m(t, e); - 1 !== i && (t.splice(i, 1), this.touchAction.update())
                }
                return this
            },
            on: function(e, t) {
                if (e !== p && t !== p) {
                    var i = this.handlers;
                    return r(g(e), function(e) {
                        i[e] = i[e] || [], i[e].push(t)
                    }), this
                }
            },
            off: function(e, t) {
                if (e !== p) {
                    var i = this.handlers;
                    return r(g(e), function(e) {
                        t ? i[e] && i[e].splice(m(i[e], t), 1) : delete i[e]
                    }), this
                }
            },
            emit: function(e, t) {
                this.options.domEvents && function(e, t) {
                    var i = s.createEvent("Event");
                    i.initEvent(e, !0, !0), (i.gesture = t).target.dispatchEvent(i)
                }(e, t);
                var i = this.handlers[e] && this.handlers[e].slice();
                if (i && i.length) {
                    t.type = e, t.preventDefault = function() {
                        t.srcEvent.preventDefault()
                    };
                    for (var n = 0; n < i.length;) i[n](t), n++
                }
            },
            destroy: function() {
                this.element && G(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        }, Z(V, {
            INPUT_START: he,
            INPUT_MOVE: 2,
            INPUT_END: fe,
            INPUT_CANCEL: ve,
            STATE_POSSIBLE: Ye,
            STATE_BEGAN: 2,
            STATE_CHANGED: 4,
            STATE_ENDED: 8,
            STATE_RECOGNIZED: 8,
            STATE_CANCELLED: 16,
            STATE_FAILED: 32,
            DIRECTION_NONE: ge,
            DIRECTION_LEFT: me,
            DIRECTION_RIGHT: we,
            DIRECTION_UP: ye,
            DIRECTION_DOWN: ke,
            DIRECTION_HORIZONTAL: Te,
            DIRECTION_VERTICAL: $e,
            DIRECTION_ALL: be,
            Manager: Q,
            Input: $,
            TouchAction: H,
            TouchInput: z,
            MouseInput: P,
            PointerEventInput: I,
            TouchMouseInput: M,
            SingleTouchInput: O,
            Recognizer: j,
            AttrRecognizer: R,
            Tap: B,
            Pan: F,
            Swipe: U,
            Pinch: N,
            Rotate: Y,
            Press: X,
            on: u,
            off: h,
            each: r,
            merge: oe,
            extend: se,
            assign: Z,
            inherit: i,
            bindFn: l,
            prefixed: k
        }), (void 0 !== o ? o : "undefined" != typeof self ? self : {}).Hammer = V, "function" == typeof define && define.amd ? define(function() {
            return V
        }) : "undefined" != typeof module && module.exports ? module.exports = V : o.Hammer = V
    }(window, document);
var produkteNav = function() {
        $(".pages-nav__wrapper li").each(function() {
            var e = $(this).find("img");
            $(this).prepend(e)
        })
    },
    produkteNumbers = function() {
        $(".produkte-steps__number").each(function() {
            "true" === $(this).attr("data-responsive") && $(this).parent().prepend($(this))
        })
    },
    produkteStepTextChange = function() {
        $(".produkte-steps__exampleText").html('In hac habitasse platea <span>dictumst</span>. Vivamus adipi<img src="' + templateUrl + '/img/abtests-step3.svg" class="produkte-steps__step3photo img-responsive"><div class="produkte-bubble__orange produkte-bubble__step3">Spielend leicht<br>Texte ändern oder<br>formatieren.</div>')
    },
    produkteRemarketingReorder = function() {
        var e = $(".produkte-remarketing__content");
        e.parent().prepend(e)
    },
    demoFormReorder = function() {
        var e = $(".submit__button");
        e.parent().prepend(e)
    };

function preload(e) {
    $(e).each(function() {
        $("<img/>")[0].src = this
    })
}
$(window).width() < 769 && (produkteNav(), produkteNumbers(), produkteStepTextChange(), produkteRemarketingReorder()), $(window).width();
var retinaImg = function() {
        "use strict";
        1 < window.devicePixelRatio && jQuery("img").each(function(e) {
            var t, i = jQuery(this).attr("src"),
                n = i.slice(i.length - 6),
                s = i.slice(i.length - 3),
                o = i.slice(0, i.length - 6) + n.replace(".", "@2x.");
            "svg" === s || ((t = $(this)).parent().hasClass("no-retina") || t.parent().parent().hasClass("no-retina") || t.parent().parent().parent().hasClass("no-retina")) || jQuery(this).attr("src", o)
        })
    },
    formValidation = function() {
        for (var e = document.getElementsByTagName("form"), t = document.querySelectorAll("input"), i = 0; i < t.length; i++) t[i].addEventListener("blur", function(e) {
            e.target.classList.add("interacted")
        }, !1);
        for (i = 0; i < e.length; i++) e[i].noValidate = !0, e[i].addEventListener("submit", function(e) {
            e.target.checkValidity() || ($("input").each(function() {
                $(this).prop("required") && $(this).addClass("interacted")
            }), e.preventDefault())
        }, !1)
    }();
$(".homepage #nextSlide").on("click", function() {
    $(window).width() < 981 && 481 < $(window).width() ? $(".boxes").animate({
        "margin-left": "-650px"
    }, 300) : $(".boxes").animate({
        "margin-left": "-270px"
    }, 300), $("#prevSlide").removeClass("active"), $(".pie").data("easyPieChart").update(28), $(".chart2").data("easyPieChart").update(52), $(".chart3").data("easyPieChart").update(16), $(this).addClass("active")
}), $(".homepage #prevSlide").on("click", function() {
    $(window).width() < 981 && 481 < $(window).width() ? $(".boxes").animate({
        "margin-left": "650px"
    }, 300) : $(".boxes").animate({
        "margin-left": "270px"
    }, 300), $("#nextSlide").removeClass("active"), $(this).addClass("active")
}), $(".onpremise-page #nextSlide").on("click", function() {
    $(this).hasClass("active") || ($("#prevSlide").removeClass("active"), $(this).addClass("active"), $(".orange-box-1").fadeOut(), $(".people-slider-content").animate({
        left: "100px"
    }, function() {
        $(".orange-box-2").fadeIn()
    }))
}), $(".onpremise-page #prevSlide").on("click", function() {
    $(this).hasClass("active") || ($("#nextSlide").removeClass("active"), $(this).addClass("active"), $(".orange-box-2").fadeOut(), $(".people-slider-content").animate({
        left: "0"
    }, function() {
        $(".orange-box-1").fadeIn()
    }))
});
var pricingControls = ($('div[controls*="whitePricing"] button').on("click", function() {
        var e = $(this).attr("level"),
            t = 0,
            i = $(".pricing-content__white .pricing-plans");
        switch (parseInt(e)) {
            case 1:
                t = [20, 50, 0];
                break;
            case 2:
                t = [-285, -260, -280];
                break;
            case 3:
                t = [-590, -560, -333];
                break;
            case 4:
                t = [-900, -880, -300]
        }
        $(window).width() < 425 ? i.css("margin-left", t[0] + "px") : $(window).width() < 475 ? i.css("margin-left", t[1] + "px") : $(window).width() < 769 && i.css("margin-left", t[2] + "px"), $('div[controls*="whitePricing"] button').removeClass("active"), $(this).addClass("active")
    }), void $('div[controls*="darkPricing"] button').on("click", function() {
        var e = $(this).attr("level"),
            t = 0,
            i = $(".pricing-content__dark .pricing-plans");
        switch (parseInt(e)) {
            case 1:
                t = [10, 30, 0];
                break;
            case 2:
                t = [-325, -290, -280];
                break;
            case 3:
                t = [-655, -625, -333]
        }
        $(window).width() < 425 ? i.css("margin-left", t[0] + "px") : $(window).width() < 475 ? i.css("margin-left", t[1] + "px") : $(window).width() < 769 && i.css("margin-left", t[2] + "px"), $('div[controls*="darkPricing"] button').removeClass("active"), $(this).addClass("active")
    })),
    donuts = $(function() {
        if (0 < $("#chart-one").length) {
            var t = $("#chart-one").offset().top + 50,
                i = [28, 52, 16];
            $("#chart-one").easyPieChart({
                easing: "easeOut",
                lineWidth: 10,
                barColor: "#FF5F01",
                trackColor: "#2A2A2A",
                onStart: function(e, t) {
                    $(this.el).find(".percent").html("––")
                },
                onStep: function(e, t, i) {
                    0 === Math.round(i) ? $(this.el).find(".percent").html("––") : $(this.el).find(".percent").text(Math.round(i))
                }
            }), $("#chart-two").easyPieChart({
                easing: "easeOut",
                lineWidth: 10,
                barColor: "#FF5F01",
                trackColor: "#2A2A2A",
                animate: {
                    duration: 1600,
                    enabled: !0
                },
                onStart: function(e, t) {
                    $(this.el).find(".percent").html("––")
                },
                onStep: function(e, t, i) {
                    0 === Math.round(i) ? $(this.el).find(".percent").html("––") : $(this.el).find(".percent").text(Math.round(i))
                }
            }), $("#chart-three").easyPieChart({
                easing: "easeOut",
                lineWidth: 10,
                barColor: "#FF5F01",
                trackColor: "#2A2A2A",
                onStart: function(e, t) {
                    $(this.el).find(".percent").html("––")
                },
                animate: {
                    duration: 2e3,
                    enabled: !0
                },
                onStep: function(e, t, i) {
                    0 === Math.round(i) ? $(this.el).find(".percent").html("––") : $(this.el).find(".percent").text(Math.round(i))
                }
            });
            var n = !1;
            $(window).scroll(function() {
                var e = $(window).scrollTop() + $(window).height();
                t < e && !1 === n && 980 < $(window).width() && (setTimeout(function() {
                    $(".pie").data("easyPieChart").update(i[0]), $(".chart2").data("easyPieChart").update(i[1]), $(".chart3").data("easyPieChart").update(i[2])
                }, 200), n = !0)
            })
        }
    }),
    slickSliderBlue = function() {
        0 < $("#slickSliderBlue").length && ($(".slider-for").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !1,
            accessibility: !1,
            fade: !0,
            asNavFor: ".slider-nav"
        }), $(".slider-nav").slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            centerMode: !0,
            asNavFor: ".slider-for",
            accessibility: !1,
            dots: !1,
            autoplaySpeed: 6e3,
            autoplay: !0,
            prevArrow: '<button type="button" class="slick-prev"><img src="' + etracker_img + 'cta-arrow.svg"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="' + etracker_img + 'cta-arrow.svg"></button>',
            focusOnSelect: !0,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: !0
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        }))
    },
    fixedButton = function() {
        "use strict";
        if ($("body").hasClass("homepage")) var s = $("#js-fixed-button");
        else s = $(".header-wrapper");
        var o = $(s).offset().top,
            r = 0 < $(".header-cta__inside").length ? $(".header-cta__inside").text() : etrackerStrings[WPMLLangCode].freeTrial,
            a = 0 < $(".header-cta__inside").length ? $("a.header-cta__wrapper").prop("href") : "/test-account/";
        jQuery(window).scroll(function() {
            var e = $(".footer-blue__wrapper").hasClass("orange") ? "orange" : "",
                t = (e = $(".footer-blue__wrapper").hasClass("onpremise") ? "orange" : e, $(window).scrollTop()),
                i = $(".header-cta__animation.animation-start"),
                n = '<div class="header-cta__animation ' + e + ' animation-start" id="js-animated-button"><a class="header-cta__wrapper" href="' + a + '" onmousedown="_etracker.sendEvent(new et_ClickEvent(\'Click Subscription sticky\'))"><button class="header-cta__inside" >' + r + '</button></a> <a href="#" class="header-cta__gotop"><img src="' + etracker_img + 'icon-gotop.svg" class="header-gotop"></a></div>';
            t > o + $(s).height() ? 0 === i.length && ($("body").prepend(n), setTimeout(function() {
                $(".header-cta__animation.animation-start").addClass("outside")
            }, 300)) : ($(".header-cta__animation.animation-start").removeClass("outside"), setTimeout(function() {
                $(".header-cta__animation.animation-start").remove()
            }, 300)), $("#js-animated-button").length && ($("#js-animated-button").offset().top > $(".footer-blue__wrapper").offset().top ? ($("#js-animated-button").remove(), 0 === $("#js-footer-button").length && $(".footer-blue__wrapper").append('<div class="header-cta__animation footer-blue__cta" id="js-footer-button"><a class="header-cta__wrapper" href="' + a + '" onmousedown="_etracker.sendEvent(new et_ClickEvent(\'Click Subscription unten\'))"><button class="header-cta__inside" >' + r + "</button></a></div>")) : $(".footer-blue__cta").fadeOut(function() {
                $(this).remove()
            }))
        })
    },
    topBar = function() {
        if ($("body").hasClass("js-topbar")) {
            var t = $("#js-topbar-target"),
                i = 0;
            if (0 < t.length) {
                var n = t.offset().top;
                $("body").scrollspy({
                    target: "#scrollspy-navbar",
                    offset: 200
                })
            }
            jQuery(window).scroll(function() {
                var e = $(window).scrollTop();
                $(".header-mobile__button").hasClass("active") || (n < e ? ($(".header-mobile__wrapper .header-popup").addClass("fixed"), setTimeout(function() {
                    $(".header-nav__wrapper").addClass("header-wrapper__fixed"), $(".header-nav__wrapper .logo-img").removeClass("current"), $(".header-nav__wrapper .logo-fixed").addClass("current"), 0 < t.length && ($("#scrollspy-navbar").show(), $('[data-spy="scroll"]').each(function() {
                        $(this).scrollspy("refresh")
                    })), 0 === i && ($(".header-nav__wrapper").show(), i = 1)
                }, 100)) : ($(".header-mobile__wrapper .header-popup").removeClass("fixed"), setTimeout(function() {
                    $(".header-nav__wrapper").removeClass("header-wrapper__fixed"), $(".header-nav__wrapper .logo-img").addClass("current"), $(".header-nav__wrapper .logo-fixed").removeClass("current"), 0 < t.length && $("#scrollspy-navbar").hide()
                }, 100)))
            })
        }
    },
    changeBackground = function() {
        var t = 1;
        $(".slider-item").on("click", function() {
            var e = $(this).attr("slide-nr");
            $(".slider-wrapper").removeClass("slider-slide-" + t).addClass("slider-slide-" + e), t = e
        })
    },
    smoothScroll = function() {
        $("a[href*=#]:not(.no-smooth)").click(function() {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var e = $(this.hash);
                if ((e = e.length && e || $("[name=" + this.hash.slice(1) + "]")).length) {
                    var t = e.offset().top;
                    return $("html,body").animate({
                        scrollTop: t - 100
                    }, 1e3), !1
                }
            }
        })
    },
    mySlider = function(i) {
        var t = $(".mySlider[mySlider*=" + i + "] .mySlider-slides__slide"),
            n = $(".mySlider[mySlider*=" + i + "] .analytics-bubble__orange"),
            s = $(".mySlider[mySlider*=" + i + "] .mySlider-content .mySlider-content__item"),
            o = $(".mySlider[mySlider*=" + i + "]").data("slides"),
            e = $(".mySlider[mySlider*=" + i + "]").data("speed");
        o = void 0 === o ? 4 : o, e = void 0 === e ? 7e3 : e, t.on("click", function() {
            var e = $(this).attr("level");
            n.attr("level", e), t.removeClass("active"), $(this).addClass("active"), s.each(function() {
                $(this).attr("level") === e ? $(this).addClass("active") : $(this).removeClass("active")
            })
        }), setInterval(function() {
            var e = $(".mySlider[mySlider*=" + i + "] .mySlider-slides__slide.active").attr("level"),
                t = parseInt(e);
            t < o ? $(".mySlider[mySlider*=" + i + "] .mySlider-slides__slide[level*=" + (t + 1) + "]").trigger("click") : $(".mySlider[mySlider*=" + i + "] .mySlider-slides__slide[level*=1]").trigger("click")
        }, e)
    },
    responsiveSlider = function(e, t) {
        var i = $("ul[responsiveSlider*=" + e + "]"),
            n = i.find("li[action*=prev]"),
            s = i.find("li[action*=next]"),
            o = i.find("li.responsiveSlider-item"),
            r = function() {
                var e = parseInt(n.attr("level"));
                o.each(function() {
                    parseInt($(this).attr("level")) == e && (o.removeClass("active"), $(this).addClass("active"), e < 2 ? n.attr("level", t) : n.attr("level", parseInt(e) - 1), t - 1 < e ? s.attr("level", 1) : s.attr("level", parseInt(e) + 1))
                })
            };
        n.on("click", function() {
            r()
        }), s.on("click", function() {
            r()
        })
    },
    pricingContent = function() {
        var t = $(".pricing-changwhite[pricingChange*=white]"),
            i = $(".pricing-change[pricingChange*=dark]");
        $(".pricing-change").on("click", function() {
            var e = $(this).attr("pricingChange");
            "white" == e ? (t.addClass("current"), i.removeClass("current"), $("body").addClass("pricing-body__white").removeClass("pricing-body__dark"), $(".pricing-content__white").addClass("current"), $(".pricing-content__dark").removeClass("current")) : "dark" == e && (t.removeClass("current"), i.addClass("current"), $("body").addClass("pricing-body__dark").removeClass("pricing-body__white"), $(".pricing-content__dark").addClass("current"), $(".pricing-content__white").removeClass("current"))
        });
        "optimiser" === $(".pricing-body").attr("produkt") ? (console.log("optimiser"), $(".pricing-change").each(function() {
            "dark" == $(this).attr("pricingchange") ? (console.log("true"), $(this).trigger("click")) : console.log("false")
        })) : console.log("analytics"), $(".pricing-tabels .nav-tabs li a").on("click", function() {
            $(".pricing-tabels .nav-tabs li").removeClass("active").removeClass("current"), $(this).parent().addClass("current")
        }), $('[data-toggle="tooltip"]').tooltip({
            html: !0
        })
    },
    popupHeader = function() {
        $("#produkte-popup").hover(function() {
            $(this).find(".header-popup").fadeIn(200)
        }, function() {
            $(this).find(".header-popup").fadeOut(200)
        })
    },
    mobileMenu = function() {
        var e = $(".header-mobile__button");
        e.bind("click", function() {
            e.toggleClass("active"), $(".header-popup__overlay").fadeToggle(), $(".header-popup__login").fadeToggle(), e.hasClass("active") ? ($(".header-cta__inside").hide(), $(".header-mobile__wrapper .header-popup").show()) : ($(".header-cta__inside").show(), $(".header-mobile__wrapper .header-popup").hide()), $("body").toggleClass("overflow-hidden"), $(".header-mobile__wrapper").toggleClass("active")
        })
    }(),
    navTabsMove = function() {
        var n = 0;
        $(".nav-tabs__arrow-next").click(function() {
            var e = $(this).parent().find(".nav-tabs li"),
                t = e.length,
                i = e.eq(n);
            i.removeClass("active").removeClass("current"), t - 1 < (n += 1) && (n = 0), (i = e.eq(n)).find("a").trigger("click")
        }), $(".nav-tabs__arrow-prev").click(function() {
            var e = $(this).parent().find(".nav-tabs li"),
                t = e.length,
                i = e.eq(n);
            i.removeClass("active").removeClass("current"), (n -= 1) < 0 && (n = t - 1), (i = e.eq(n)).find("a").trigger("click")
        })
    }();
$("select").niceSelect(), retinaImg(), topBar(), changeBackground(), smoothScroll(), pricingContent(), popupHeader(), slickSliderBlue(), 0 < $(".footer-blue__wrapper").length && fixedButton(), 0 < $(".mySlider").length && (mySlider("Segmentierung"), mySlider("MotionPlayer"), mySlider("Bigdata")), "" != $("ul").attr("responsiveSlider") && (responsiveSlider("analyticsBox", 4), responsiveSlider("logosBox", 9), responsiveSlider("onPremiseBox", 3));
var hammerSwipes = function(e, t) {
    var i = document.getElementById(e),
        n = document.getElementById(t),
        s = new Hammer(i);
    s.on("swipeleft", function() {
        $(n).find("#nextSlide").trigger("click"), $(n).find("#nextSlidePhone").trigger("click"), console.log("left", $(n).find("#nextSlide"))
    }), s.on("swiperight", function() {
        $(n).find("#prevSlide").trigger("click"), $(n).find("#prevSlidePhone").trigger("click"), console.log("right", $(n).find("#prevSlide"))
    })
};
0 < $("#swipe-boxes").length && $(window).width() < 480 && hammerSwipes("swipe-boxes", "swipe-boxes__controls");
var hammerPricingSwipes = function(e, t) {
    var i = document.getElementById(e),
        n = document.getElementById(t),
        s = new Hammer(i),
        o = 0;
    s.on("swipeleft", function() {
        var e = $(n).find("button"),
            t = e.length;
        e.eq(o);
        t - 1 < (o += 1) && (o = 0), e.eq(o).trigger("click"), console.log("left")
    }), s.on("swiperight", function() {
        var e = $(n).find("button"),
            t = e.length;
        e.eq(o);
        (o -= 1) < 0 && (o = t - 1), e.eq(o).trigger("click"), console.log("right")
    })
};
0 < $("#swipe-white-pricing").length && $(window).width() < 480 && hammerPricingSwipes("swipe-white-pricing", "swipe-white-pricing-controls"), 0 < $("#swipe-dark-pricing").length && $(window).width() < 480 && hammerPricingSwipes("swipe-dark-pricing", "swipe-dark-pricing-controls"), jQuery(document).ready(function(s) {
    s(".cat-item-78 > a").removeAttr("href"), s(".cat-item-81 > a").removeAttr("href"), s("body").find('a[href^="mailto"]').each(function(e) {
            s(this).attr("onmousedown", "_etracker.sendEvent(new et_ClickEvent('E-Mail Adresse'))")
        }),
        function() {
            if (0 < s("body").find(".to-top").length) {
                var e = s(".to-top"),
                    n = s(e).offset().top;
                jQuery(window).scroll(function() {
                    var e = s(window).scrollTop(),
                        t = s(".header-cta__animation.animation-start"),
                        i = '<div class="header-cta__animation animation-start" id="js-animated-button" style="height: 50px"><a href="#" class="header-cta__gotop"><img src="' + etracker_img + 'icon-gotop.svg" class="header-gotop"></a></div>';
                    n < e ? 0 === t.length && (s("body").prepend(i), setTimeout(function() {
                        s(".header-cta__animation.animation-start").addClass("outside")
                    }, 300)) : (s(".header-cta__animation.animation-start").removeClass("outside"), setTimeout(function() {
                        s(".header-cta__animation.animation-start").remove()
                    }, 300))
                })
            }
        }(), s(".glossar-iframe").colorbox({
            iframe: !0,
            width: "100%",
            height: "100%"
        }), s(document).bind("cbox_open", function() {
            s("html").css({
                overflow: "hidden"
            })
        }).bind("cbox_closed", function() {
            s("html").css({
                overflow: "auto"
            })
        }), $sidebar = s(".etracker-sidebar"), $entries = $sidebar.find("li"), s(".etracker-sidebar").find("a.current").parents("ul").addClass("visible"), $entries.on("click", "> a:not(.article-link)", function(e) {
            e.preventDefault(), e.stopPropagation(), s(this).parent("li").find("> ul").slideToggle()
        }), $entries.on("click", "h3.collapsable", function(e) {
            e.preventDefault(), e.stopPropagation(), s(this).next("ul").slideToggle()
        }),
        function() {
            if ("undefined" != typeof searchTerm) {
                var e, t = new RegExp(searchTerm, "gi");
                s(".search-results").find(".e-artikel-excerpt").each(function() {
                    e = s(this).html(), searchReplace = e.replace(t, '<span class="search-highlight">' + searchTerm + "</span>"), s(this).html(searchReplace)
                })
            }
        }(), s(".e-faq-question.collapsed").on("click", function() {
            s(this).siblings(".e-faq-question").each(function(e, t) {
                var i = s(t).data("target").replace("#", "");
                s(t).addClass("collapsed"), s("#" + i).removeClass("in"), s("#" + i).prop("aria-expanded", !1)
            }), s([document.documentElement, document.body]).animate({
                scrollTop: s(this).offset().top
            }, 500)
        })
});
//# sourceMappingURL=page.min.js.map