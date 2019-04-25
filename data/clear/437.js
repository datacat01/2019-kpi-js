/*
 festival_banner_slider-1.3.0.js
 Copyright (c) 2017 Rakuten.Inc
 Date : 2017-08-31 19:15:22
*/
(function(h, g, k) {
    if ("function" === typeof g) {
        var q = function(a) {
            this.$root = a.show();
            this.isIE789 = /MSIE\s[7-9]/.test(navigator.userAgent);
            this.currentTime = k;
            this.defaultBannerSelector = this.$root.attr("data-defaultBanner") || this.defaults.selectors.defaultBanner;
            this.itemFrameSelector = this.$root.attr("data-itemFrame") || this.defaults.selectors.itemFrame;
            this.itemBoxSelector = this.$root.attr("data-itemBox") || this.defaults.selectors.itemBox;
            this.rastaBoxSelector = this.$root.attr("data-rastaBox") || this.defaults.selectors.rastaBox;
            this.timesaleDataSelector = this.$root.attr("data-timesaleData") || this.defaults.selectors.timesaleData;
            this.slideTime = +this.$root.attr("data-slideTime") || this.defaults.slideTime;
            this.baseZIndex = +this.$root.attr("data-baseZIndex") || this.defaults.baseZIndex;
            this.mouseLeaveTime = +this.$root.attr("data-mouseLeaveTime") || this.defaults.mouseLeaveTime;
            this.direction = this.$root.attr("data-direction") || this.defaults.direction;
            this.rastaEventName = this.$root.attr("data-rastaEventName") || this.defaults.rastaEventName;
            this.sessionStorageKey = this.$root.attr("data-sessionStorageKey") || this.defaults.sessionStorageKey;
            this.timeAPI = this.$root.attr("data-timeAPI") || this.defaults.timeAPI;
            this.testParameter = this.$root.attr("data-testParameter") || this.defaults.testParameter;
            this.$rastaBox = this.$items = this.$itemBox = this.$itemFrame = this.$defaultBanner = k;
            this.$rastaItems = g();
            this.$timesaleData = k;
            this.itemHeight = this.itemWidth = 0;
            this.isActive = !1;
            this.resizeID = this.autoSlideID = 0;
            this.timesaleTimeList = [];
            this.timesaleImageURLs = [];
            this.timesaleDateString = ""
        };
        q.prototype = {
            defaults: {
                selectors: {
                    defaultBanner: ".festivalBannerSlider__defaultBanner",
                    itemFrame: ".festivalBannerSlider__itemFrame",
                    itemBox: ".festivalBannerSlider__itemBox",
                    rastaBox: ".festivalBannerSlider__rastaParts",
                    timesaleData: ".festivalBannerSlider__timesaleData"
                },
                slideTime: 4E3,
                baseZIndex: 1E3,
                mouseLeaveTime: 500,
                direction: "right",
                rastaEventName: "festivalbannerloaded",
                sessionStorageKey: "RJSCountDownTimer",
                timeAPI: "https://gettime.r10s.jp/",
                testParameter: "festivalbannertest"
            },
            getElements: function() {
                this.$defaultBanner = this.$root.find(this.defaultBannerSelector).hide();
                this.$itemFrame = this.$root.find(this.itemFrameSelector).show();
                this.$itemBox = this.$itemFrame.find(this.itemBoxSelector);
                this.$items = this.$itemBox.children();
                this.$rastaBox = this.$root.find(this.rastaBoxSelector);
                this.$timesaleData = this.$root.find(this.timesaleDataSelector);
                this.initializeAPICall()
            },
            initializeAPICall: function() {
                var a = this,
                    b = 0;
                this.$root.bind("festivalbannerrastaready festivalbannertimeready",
                    function() {
                        2 === ++b && (a.itemWidth = a.$items.eq(0).outerWidth(!0), a.itemHeight = a.$items.eq(0).outerHeight(!0), a.bindEvents())
                    });
                this.getItemsFromRADParts(this.$rastaBox, this.rastaEventName, function(b) {
                    a.$rastaItems = b;
                    a.addRASTAItems();
                    a.$root.trigger("festivalbannerrastaready")
                });
                0 < this.$timesaleData.children().length ? this.getCurrentDate(this.timeAPI, this.sessionStorageKey, this.testParameter, !0, function(b) {
                    a.currentTime = new Date(b.setTime(b.getTime() + 324E5));
                    a.setTimesaleItems();
                    a.$root.css("visibility",
                        "visible");
                    a.$root.trigger("festivalbannertimeready")
                }) : this.$root.trigger("festivalbannertimeready")
            },
            getItemsFromRADParts: function(a, b, d) {
                var c = 0,
                    f = [],
                    m = g(),
                    n = a.find(".rad-table-existItemDisplay, .radTableContainer");
                n.each(function(a) {
                    var e = n.eq(a),
                        l = e.find(".rad-table-config, .radConfig"),
                        h = e.find(".rad-table-body, .radItemsDisplay");
                    e = b + (new Date).getTime() + parseInt(1E4 * Math.random(), 10) + a;
                    l.attr("event_name", e).attr("event_target", "body");
                    g("body").bind(e, function(b, e) {
                        c++;
                        0 === e && (f[a] = h.children());
                        if (c === n.length) {
                            for (b = 0; b < f.length; b++) f[b] && g.merge(m, f[b]);
                            d.call(k, m)
                        }
                    })
                })
            },
            addRASTAItems: function() {
                var a = this.mergeItems(this.$items, this.$rastaItems);
                var b = a.clone();
                g.merge(a, b.clone());
                g.merge(a, b);
                this.$itemBox.empty().append(a);
                this.$items = a
            },
            mergeItems: function(a, b) {
                if (0 === a.length) return b;
                for (var d = [], c = 0; c < a.length; c++) d[c] = [], d[c][0] = a[c];
                for (var f = c = 0; c < b.length; c++) d[f].push(b[c]), f++, f > a.length - 1 && (f = 0);
                a = g();
                for (b = 0; b < d.length; b++) g.merge(a, d[b]);
                return a
            },
            getCurrentDate: function(a,
                b, d, c, f) {
                function m(d) {
                    g.ajax({
                        url: a,
                        dataType: "jsonp",
                        scriptCharset: "utf-8",
                        cache: !0,
                        error: function() {
                            d.call(k, new Date)
                        },
                        success: function(a) {
                            var l = new Date;
                            l.setTime(1E3 * a.epoch);
                            e && p && c && (a = l.getTime() - (new Date).getTime(), sessionStorage.setItem(b, h.JSON.stringify({
                                offset: a
                            })));
                            d.call(k, l)
                        }
                    })
                }

                function n(a) {
                    var c = sessionStorage.getItem(b);
                    c = h.JSON.parse(c);
                    c = (new Date).getTime() + c.offset;
                    a.call(k, new Date(c))
                }

                function l(a) {
                    var b = h.location.search.split(d + "=")[1].split(/-|:|\s/);
                    a.call(k, new Date(Date.UTC(+b[0],
                        +b[1] - 1, +b[2], +b[3] || 0, +b[4] || 0, +b[5] || 0) - 324E5))
                }
                var e = "JSON" in h && "parse" in h.JSON && "stringify" in h.JSON;
                try {
                    sessionStorage.setItem("session_storage_checker_data", "session_storage_checker_data");
                    sessionStorage.removeItem("session_storage_checker_data");
                    var p = !0
                } catch (t) {
                    p = !1
                }(new RegExp("(\\?|\\&)" + d, "i")).test(h.location.search) ? l(f) : e && p ? sessionStorage.getItem(b) ? n(f) : m(f) : m(f)
            },
            setTimesaleItems: function() {
                var a = this,
                    b = this.addZero(this.currentTime.getUTCMonth() + 1),
                    d = this.addZero(this.currentTime.getUTCDate()),
                    c = this.addZero(this.currentTime.getUTCHours()),
                    f = 30 <= this.currentTime.getUTCMinutes() ? "30" : "00";
                this.timesaleDateString = this.currentTime.getUTCFullYear() + "_" + b + d + "_" + c + f;
                this.$timesaleData.children().each(function(b, c) {
                    var d = g(c);
                    c = d.attr("data-target");
                    c = a.$root.find(c);
                    if (0 !== c.length) {
                        a.timesaleTimeList[b] = [];
                        a.timesaleImageURLs[b] = [];
                        d = d.html().split(/\s+/);
                        for (var e = 0; e < d.length; e++) "" === d[e] && d.splice(e, 1);
                        for (e = 0; e < d.length; e++) 0 === e % 2 ? a.timesaleTimeList[b].push(d[e]) : a.timesaleImageURLs[b].push(d[e]);
                        for (d = 0; d < a.timesaleTimeList[b].length; d++)
                            if (a.timesaleTimeList[b][d] === a.timesaleDateString) {
                                c.attr("src", a.timesaleImageURLs[b][d]);
                                break
                            }
                    }
                })
            },
            bindEvents: function() {
                var a = this;
                "right" === this.direction && (this.isIE789 ? this.$itemBox.css("left", 0 - this.itemWidth) : this.$itemBox.css({
                    webkitTransform: "translate3d(" + (0 - this.itemWidth) + "px, 0, 0)",
                    transform: "translate3d(" + (0 - this.itemWidth) + "px, 0, 0)"
                }));
                this.$itemBox.children().bind("transitionend webkitTransitionEnd", function(a) {
                    a.stopPropagation()
                });
                this.$itemFrame.hover(function() {
                    if (a.isActive)
                        if (a.isIE789) a.$itemBox.stop();
                        else {
                            var b = a.getCurrentTransformX(a.$itemBox);
                            a.$itemBox.css({
                                webkitTransition: "none",
                                transition: "none",
                                webkitTransform: "translate3d(" + b + "px, 0, 0)",
                                transform: "translate3d(" + b + "px, 0, 0)"
                            }).unbind("transitionend webkitTransitionEnd")
                        }
                }, function() {
                    a.isActive && (a.isIE789 && a.$itemBox.stop(), "left" === a.direction ? a.moveLeft(a.slideTime) : "right" === a.direction && a.moveRight(a.slideTime))
                });
                this.$items.each(function(b, d) {
                    var c = g(d);
                    c.hover(function() {
                        a.isIE789 ? c.stop(!0).animate({
                            top: 0 - a.itemHeight
                        }, 150, "linear") : c.css("z-index", a.baseZIndex + 1)
                    }, function() {
                        a.isIE789 ? c.animate({
                            top: 0
                        }, 500, "linear") : setTimeout(function() {
                            c.css("z-index", a.defaults.baseZIndex)
                        }, a.mouseLeaveTime)
                    })
                });
                a.startAutoSlide();
                a.isActive = !0
            },
            startAutoSlide: function() {
                "left" === this.direction ? this.moveLeft(this.slideTime) : "right" === this.direction && this.moveRight(this.slideTime)
            },
            moveLeft: function(a) {
                var b = this;
                if (this.isIE789) {
                    var d = parseInt(this.$itemBox.css("left"),
                        10);
                    var c = a + d / this.itemWidth * a;
                    this.$itemBox.animate({
                        left: -this.itemWidth
                    }, c, "linear", function() {
                        b.$itemBox.css("left", 0).children().eq(0).appendTo(b.$itemBox);
                        b.moveLeft(a)
                    })
                } else d = this.getCurrentTransformX(this.$itemBox), c = a + d / this.itemWidth * a, d === 0 - this.itemWidth && 0 === c ? (c = a, this.$itemBox.css({
                        webkitTransition: "-webkit-transform 0ms linear",
                        transition: "transform 0ms linear",
                        webkitTransform: "translate3d(0, 0, 0)",
                        transform: "translate3d(0, 0, 0)"
                    }).children().eq(0).appendTo(this.$itemBox), this.moveLeft(a)) :
                    this.$itemBox.css({
                        webkitTransition: "-webkit-transform " + c + "ms linear",
                        transition: "transform " + c + "ms linear",
                        webkitTransform: "translate3d(" + (0 - this.itemWidth) + "px, 0, 0)",
                        transform: "translate3d(" + (0 - this.itemWidth) + "px, 0, 0)"
                    }).bind("transitionend webkitTransitionEnd", function() {
                        b.$itemBox.css({
                            webkitTransition: "-webkit-transform 0ms linear",
                            transition: "transform 0ms linear",
                            webkitTransform: "translate3d(0, 0, 0)",
                            transform: "translate3d(0, 0, 0)"
                        }).unbind("transitionend webkitTransitionEnd").children().eq(0).appendTo(b.$itemBox);
                        b.moveLeft(a)
                    })
            },
            moveRight: function(a) {
                var b = this;
                if (this.isIE789) {
                    var d = parseInt(this.$itemBox.css("left"), 10);
                    var c = a - (this.itemWidth + d) / this.itemWidth * a;
                    this.$itemBox.animate({
                        left: 0
                    }, c, "linear", function() {
                        b.$itemBox.children().last().prependTo(b.$itemBox);
                        b.$itemBox.css("left", 0 - b.itemWidth);
                        b.moveRight(a)
                    })
                } else d = this.getCurrentTransformX(this.$itemBox), c = a - (this.itemWidth + d) / this.itemWidth * a, 0 === d && 0 === c ? (c = a, this.$itemBox.css({
                    webkitTransition: "-webkit-transform 0ms linear",
                    transition: "transform 0ms linear",
                    webkitTransform: "translate3d(" + (0 - this.itemWidth) + "px, 0, 0)",
                    transform: "translate3d(" + (0 - this.itemWidth) + "px, 0, 0)"
                }).children().last().prependTo(b.$itemBox), this.moveRight(a)) : this.$itemBox.bind("transitionend webkitTransitionEnd", function() {
                    b.$itemBox.css({
                        webkitTransition: "-webkit-transform 0ms linear",
                        transition: "transform 0ms linear",
                        webkitTransform: "translate3d(" + (0 - b.itemWidth) + "px, 0, 0)",
                        transform: "translate3d(" + (0 - b.itemWidth) + "px, 0, 0)"
                    }).unbind("transitionend webkitTransitionEnd").children().last().prependTo(b.$itemBox);
                    b.moveRight(a)
                }).css({
                    webkitTransition: "-webkit-transform " + c + "ms linear",
                    transition: "transform " + c + "ms linear",
                    webkitTransform: "translate3d(0, 0, 0)",
                    transform: "translate3d(0, 0, 0)"
                })
            },
            getCurrentTransformX: function(a) {
                a = h.getComputedStyle(a[0], null).transform || h.getComputedStyle(a[0], null).webkitTransform;
                if (/matrix\(/.test(a)) return +a.split(/matrix\(|,\s|\)/g).slice(1, 7)[4] | 0;
                if (/matrix3d\(/.test(a)) return +a.split(/matrix3d\(|,\s|\)/g).slice(1, 16)[12] | 0;
                if (/translate3d\(/.test(a)) return +a.split(/translate3d\(|,\s|\)/g).slice(1,
                    4)[0].replace("px", "")
            },
            addZero: function(a) {
                return 10 > a ? "0" + a : "" + a
            }
        };
        var r = g("#RJSFestivalBannerSlider");
        0 < r.length && (new q(r)).getElements()
    }
})(window, window.jQuery);