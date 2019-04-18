$(function() {
    0 !== $("#sticky-nav").length && new PAYPAL.Marketing.FloatingBar("#sticky-nav"), $("#jump-bar-select, #fatfooter-select, #nav-bar-select").on("change", function(e) {
        var t = $(e.target).val();
        t && (window.location = t)
    }), $(".expand-rows").on("click", ".expander", function(e) {
        e.preventDefault(), e.stopPropagation();
        var t = $(e.target),
            i = t.hasClass("expander") ? t : t.parent(".expander"),
            n = i.data("section");
        i.find(".expand-" + n).toggleClass("open").attr("aria-expanded", function(e, t) {
            return "true" == t ? "false" : "true"
        }), i.siblings(".expanding.para-" + n).toggleClass("open")
    });
    var e = $(".smart-banner");
    "undefined" != typeof Storage ? ("hide" !== localStorage.getItem("androidSmartBanner") && e.removeClass("hide"), $(".smart-banner .close").on("click", function() {
        e.addClass("hide"), localStorage.setItem("androidSmartBanner", "hide")
    })) : e.removeClass("hide")
});
var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i)
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i)
        },
        iPhone: function() {
            return navigator.userAgent.match(/iPhone/i)
        },
        iPad: function() {
            return navigator.userAgent.match(/iPad/i)
        },
        iPod: function() {
            return navigator.userAgent.match(/iPod/i)
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i)
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i)
        },
        any: function() {
            return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()
        }
    },
    attachScroll = function(e, n, o) {
        $(e).on("click", function(e) {
            var t = $(this),
                i = t.attr("data-target") || e.preventDefault() || (href = t.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, "");
            0 === i.indexOf("#") && (e.preventDefault(), doScroll(i, n, o))
        })
    },
    doScroll = function(e, t, i, n) {
        var o = t || 0,
            a = $(e).offset(),
            s = a ? a.top : 0;
        n = n || "slow";
        $("html,body").animate({
            scrollTop: s + o
        }, n, function() {
            "function" == typeof i && i.call(this)
        })
    },
    setSkrollr = function(e, t) {
        for (var i = 0, n = t.length; i < n; i++) {
            var o = t[i],
                a = o[0];
            css = o[1], e.attr("data-" + a, css)
        }
        skrollr && skrollr.init({
            smoothScrolling: !1
        })
    },
    animatePopout = function() {
        var e = {},
            t = {},
            i = 0,
            n = 0,
            o = {
                elm: $($(".sticky-nav-global")[0])
            };
        0 < o.elm.length && (e.elm = $(".hero-bg"), e.top = e.elm.length ? e.elm.offset().top : 0, e.outerheight = e.elm.length ? e.elm.outerHeight() : 0, t.elm = e.elm.find("img"), t.cssTop = t.elm.length ? parseInt(t.elm.css("top"), 10) : 0, t.outerheight = t.elm.length ? t.elm.outerHeight() : 0, t.topPosition = t.elm.length ? t.elm.position().top : 0, o.top = o.elm.offset().top, o.outerheight = o.elm.outerHeight(), o.offsetData = parseInt(o.elm.data("offset")), n = (n = t.cssTop + t.outerheight - (o.top + o.outerheight)) < 0 ? -1 * n : n, i = o.top - n - o.offsetData, setSkrollr(t.elm, [
            [i, "top: " + t.cssTop + "px;"],
            [o.top, "top: " + (t.topPosition - n) + "px;"]
        ]))
    };

function InitPxVideo(e) {
    "use strict";

    function t(e) {
        e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || e.msFullscreenElement || (e.requestFullscreen || e.msRequestFullscreen || e.mozRequestFullScreen || e.webkitRequestFullscreen).call(e)
    }

    function i() {
        document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement ? (o.fullScreenBtn.checked = !0, o.container.setAttribute("style", "width: 100%; height: 100%;"), o.controls.className = "px-video-controls js-fullscreen-controls", o.movie.setAttribute("width", "100%"), o.movie.setAttribute("height", "100%"), o.container.childNodes[1].setAttribute("style", "width: 100%; height: 100%;")) : (o.fullScreenBtn.checked = !1, o.container.setAttribute("style", "width:" + o.movieWidth + "px"), o.controls.className = "px-video-controls", o.movie.setAttribute("width", o.movieWidth), o.movie.setAttribute("height", o.movieHeight))
    }

    function n() {
        (document.exitFullscreen || document.msExitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen).call(document)
    }
    var o = {};
    if (o.arBrowserInfo = function() {
            navigator.appVersion;
            var e, t, i, n = navigator.userAgent,
                o = navigator.appName,
                a = "" + parseFloat(navigator.appVersion),
                s = parseInt(navigator.appVersion, 10);
            return -1 !== navigator.appVersion.indexOf("Windows NT") && -1 !== navigator.appVersion.indexOf("rv:11") ? (o = "IE", a = "11;") : -1 !== (t = n.indexOf("MSIE")) ? (o = "IE", a = n.substring(t + 5)) : -1 !== (t = n.indexOf("Chrome")) ? (o = "Chrome", a = n.substring(t + 7)) : -1 !== (t = n.indexOf("Safari")) ? (o = "Safari", a = n.substring(t + 7), -1 !== (t = n.indexOf("Version")) && (a = n.substring(t + 8))) : -1 !== (t = n.indexOf("Firefox")) ? (o = "Firefox", a = n.substring(t + 8)) : (e = n.lastIndexOf(" ") + 1) < (t = n.lastIndexOf("/")) && (o = n.substring(e, t), a = n.substring(t + 1), o.toLowerCase() == o.toUpperCase() && (o = navigator.appName)), -1 !== (i = a.indexOf(";")) && (a = a.substring(0, i)), -1 !== (i = a.indexOf(" ")) && (a = a.substring(0, i)), s = parseInt("" + a, 10), isNaN(s) && (a = "" + parseFloat(navigator.appVersion), s = parseInt(navigator.appVersion, 10)), [o, s]
        }(), o.browserName = o.arBrowserInfo[0], o.browserMajorVersion = o.arBrowserInfo[1], "IE" === o.browserName && (8 === o.browserMajorVersion || 9 === o.browserMajorVersion)) return !1;
    if (o.isSmartphoneOrTablet = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent), o.isSmartphoneOrTablet) return !1;
    void 0 === e.debug && (e.debug = !1), o.debug = e.debug, e.debug && console.log(o.browserName + " " + o.browserMajorVersion), void 0 === e.videoTitle || "" === e.videoTitle ? o.playAriaLabel = "Play" : o.playAriaLabel = "Play video, " + e.videoTitle, o.container = document.getElementById(e.videoId), o.movie = o.container.getElementsByTagName("video")[0], o.controls = o.container.getElementsByClassName("px-video-controls")[0], o.image = o.container.getElementsByTagName("img")[0], o.movie.removeAttribute("controls"), o.randomNum = Math.floor(1e4 * Math.random()), e.debug && console.log("Inserting custom video controls"), o.controls.innerHTML = '<div class="clearfix"><div class="display-inline"><button class="px-video-restart" title="' + PP_GLOBAL_JS_STRINGS.RESTART + '"><span class="sr-only">Restart</span></button><button class="px-video-rewind" title="' + PP_GLOBAL_JS_STRINGS.REWIND + '"><span class="sr-only">rewind <span class="px-seconds">10</span> seconds</span></button><button class="px-video-play" aria-label="' + o.playAriaLabel + '" title="' + PP_GLOBAL_JS_STRINGS.PLAY + '"><span class="sr-only">' + PP_GLOBAL_JS_STRINGS.PLAY + '</span></button><button class="px-video-pause hide" title="' + PP_GLOBAL_JS_STRINGS.PAUSE + '"><span class="sr-only">' + PP_GLOBAL_JS_STRINGS.PAUSE + '</span></button><button class="px-video-forward" title="' + PP_GLOBAL_JS_STRINGS.FORWARD + '"><span class="sr-only">forward <span class="px-seconds">10</span> seconds</span></button></div><div class="px-video-mute-btn-container display-inline" title="' + PP_GLOBAL_JS_STRINGS.MUTE + '"><input class="px-video-mute sr-only" id="btnMute' + o.randomNum + '" type="checkbox" /><label id="labelMute' + o.randomNum + '" for="btnMute' + o.randomNum + '"><span class="sr-only">' + PP_GLOBAL_JS_STRINGS.MUTE + '</span></label></div><div class="display-inline"><label for="volume' + o.randomNum + '" class="sr-only">Volume:</label><input id="volume' + o.randomNum + '" class="px-video-volume" type="range" min="0" max="10" value="5" /></div><div class="px-video-fullscreen-btn-container display-inline"><input class="px-video-btnFullScreen sr-only" id="btnFullscreen' + o.randomNum + '" type="checkbox" /><label for="btnFullscreen' + o.randomNum + '"><span class="sr-only">' + PP_GLOBAL_JS_STRINGS.TOGGLE_FULL_SCREEN + '</span></label></div><div class="px-video-time display-inline"><span class="sr-only">time</span> <span class="px-video-duration">00:00</span></div></div><div><progress class="px-video-progress" max="100" value="0" aria-hidden="true"><span>0</span>% played</progress></div>', o.movieWidth = o.movie.width, o.movieHeight = o.movie.height, o.movieWidth ? o.movieWidth < 360 && (o.movieWidth = 360) : (o.movieWidth = o.movie.getAttribute("width"), o.movieHeight = o.movie.getAttribute("height"), o.image.width = o.movieWidth, o.image.height = o.movieHeight), o.container.setAttribute("style", "width:" + o.movieWidth + "px"), o.labelMute = document.getElementById("labelMute" + o.randomNum), o.labelMuteOffset = o.movieWidth - 350, o.labelMuteOffset < 0 && (o.labelMuteOffset = 0), o.labelMute.setAttribute("style", "margin-left:" + o.labelMuteOffset + "px"), void 0 === e.seekInterval && (e.seekInterval = 10), o.seekInterval = e.seekInterval, o.btnPlay = o.container.getElementsByClassName("px-video-play")[0], o.btnPause = o.container.getElementsByClassName("px-video-pause")[0], o.btnRestart = o.container.getElementsByClassName("px-video-restart")[0], o.btnRewind = o.container.getElementsByClassName("px-video-rewind")[0], o.btnForward = o.container.getElementsByClassName("px-video-forward")[0], o.btnVolume = o.container.getElementsByClassName("px-video-volume")[0], o.btnMute = o.container.getElementsByClassName("px-video-mute")[0], o.progressBar = o.container.getElementsByClassName("px-video-progress")[0], o.progressBarSpan = o.progressBar.getElementsByTagName("span")[0], o.duration = o.container.getElementsByClassName("px-video-duration")[0], o.txtSeconds = o.container.getElementsByClassName("px-seconds"), o.fullScreenBtn = o.container.getElementsByClassName("px-video-btnFullScreen")[0], o.fullScreenBtnContainer = o.container.getElementsByClassName("px-video-fullscreen-btn-container")[0], o.txtSeconds[0].innerHTML = o.seekInterval, o.txtSeconds[1].innerHTML = o.seekInterval, o.btnPlay.addEventListener("click", function() {
        o.movie.play(), o.btnPlay.className = "px-video-play hide", o.btnPause.className = "px-video-pause px-video-show-inline", o.btnPause.focus(), a()
    }, !1);
    var a = function() {
        var e, t;
        o.movie.addEventListener("waiting", function() {
            (e = document.createElement("div")).setAttribute("class", "loading-spinner"), o.container.appendChild(e)
        }), o.movie.addEventListener("canplay", function() {
            (t = o.container.getElementsByClassName("loading-spinner")[0]) && t.parentNode.removeChild(t)
        })
    };
    o.btnPause.addEventListener("click", function() {
        o.movie.pause(), o.btnPlay.className = "px-video-play px-video-show-inline", o.btnPause.className = "px-video-pause hide", o.btnPlay.focus()
    }, !1), o.btnRestart.addEventListener("click", function() {
        o.movie.currentTime = 0, o.movie.play(), o.btnPlay.className = "px-video-play hide", o.btnPause.className = "px-video-pause px-video-show-inline"
    }, !1), o.btnRewind.addEventListener("click", function() {
        var e = o.movie.currentTime - o.seekInterval;
        o.movie.currentTime = e < 0 ? 0 : e
    }, !1), o.btnForward.addEventListener("click", function() {
        var e = o.movie.currentTime + o.seekInterval;
        e > o.movie.duration ? o.movie.currentTime = o.movie.duration : o.movie.currentTime = e
    }, !1), o.btnVolume.addEventListener("change", function() {
        o.movie.volume = parseFloat(this.value / 10)
    }, !1), o.btnMute.addEventListener("click", function() {
        !0 === o.movie.muted ? o.movie.muted = !1 : o.movie.muted = !0
    }, !1), o.btnMute.onkeypress = function(e) {
        13 == e.keyCode && (e.preventDefault(), 1 == this.checked ? this.checked = !1 : this.checked = !0, !0 === o.movie.muted ? o.movie.muted = !1 : o.movie.muted = !0)
    }, o.movie.addEventListener("timeupdate", function() {
        o.secs = parseInt(o.movie.currentTime % 60), o.mins = parseInt(o.movie.currentTime / 60 % 60), o.secs = ("0" + o.secs).slice(-2), o.mins = ("0" + o.mins).slice(-2), o.duration.innerHTML = o.mins + ":" + o.secs
    }, !1), o.movie.addEventListener("timeupdate", function() {
        o.percent = 100 / o.movie.duration * o.movie.currentTime, 0 < o.percent && (o.progressBar.value = o.percent, o.progressBarSpan.innerHTML = o.percent)
    }, !1), o.progressBar.addEventListener("click", function(e) {
        0 < $(this).parents(".ui-dialog-content").length ? (o.modalOffset = $(this).parents(".ui-dialog-content").offset().left, o.pos = (e.pageX - o.modalOffset - o.container.offsetLeft) / this.offsetWidth) : o.pos = (e.pageX - o.container.offsetLeft) / this.offsetWidth, o.movie.currentTime ? o.movie.currentTime = o.pos * o.movie.duration : (o.movie.play(), o.btnPlay.className = "px-video-play hide", o.btnPause.className = "px-video-pause px-video-show-inline"), a()
    }), o.fullScreenBtn.addEventListener("click", function() {
        this.checked ? t(o.container) : n()
    }, !1), o.fullScreenBtn.onkeypress = function(e) {
        13 == e.keyCode && (e.preventDefault(), 1 == this.checked ? (this.checked = !1, n()) : (this.checked = !0, t(o.container)))
    }, document.addEventListener("fullscreenchange", function() {
        i()
    }, !1), document.addEventListener("mozfullscreenchange", function() {
        i()
    }, !1), document.addEventListener("webkitfullscreenchange", function() {
        i()
    }, !1), document.addEventListener("MSFullscreenChange", function() {
        i()
    }, !1)
}
$(".hero-bg").hasClass("hero-pop-out") && !isMobile.any() && setTimeout(function() {
        animatePopout()
    }, 1e3),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(l) {
        var n = -1,
            o = -1,
            d = function(e) {
                return parseFloat(e) || 0
            },
            c = function(e) {
                var t = l(e),
                    n = null,
                    o = [];
                return t.each(function() {
                    var e = l(this),
                        t = e.offset().top - d(e.css("margin-top")),
                        i = 0 < o.length ? o[o.length - 1] : null;
                    null === i ? o.push(e) : Math.floor(Math.abs(n - t)) <= 1 ? o[o.length - 1] = i.add(e) : o.push(e), n = t
                }), o
            },
            u = function(e) {
                var t = {
                    byRow: !0,
                    property: "height",
                    target: null,
                    remove: !1
                };
                return "object" == typeof e ? l.extend(t, e) : ("boolean" == typeof e ? t.byRow = e : "remove" === e && (t.remove = !0), t)
            },
            p = l.fn.matchHeight = function(e) {
                var t = u(e);
                if (t.remove) {
                    var i = this;
                    return this.css(t.property, ""), l.each(p._groups, function(e, t) {
                        t.elements = t.elements.not(i)
                    }), this
                }
                return this.length <= 1 && !t.target || (p._groups.push({
                    elements: this,
                    options: t
                }), p._apply(this, t)), this
            };
        p.version = "master", p._groups = [], p._throttle = 80, p._maintainScroll = !1, p._beforeUpdate = null, p._afterUpdate = null, p._rows = c, p._parse = d, p._parseOptions = u, p._apply = function(e, t) {
            var a = u(t),
                i = l(e),
                n = [i],
                o = l(window).scrollTop(),
                s = l("html").outerHeight(!0),
                r = i.parents().filter(":hidden");
            return r.each(function() {
                var e = l(this);
                e.data("style-cache", e.attr("style"))
            }), r.css("display", "block"), a.byRow && !a.target && (i.each(function() {
                var e = l(this),
                    t = e.css("display");
                "inline-block" !== t && "flex" !== t && "inline-flex" !== t && (t = "block"), e.data("style-cache", e.attr("style")), e.css({
                    display: t,
                    "padding-top": "0",
                    "padding-bottom": "0",
                    "margin-top": "0",
                    "margin-bottom": "0",
                    "border-top-width": "0",
                    "border-bottom-width": "0",
                    height: "100px",
                    overflow: "hidden"
                })
            }), n = c(i), i.each(function() {
                var e = l(this);
                e.attr("style", e.data("style-cache") || "")
            })), l.each(n, function(e, t) {
                var i = l(t),
                    o = 0;
                if (a.target) o = a.target.outerHeight(!1);
                else {
                    if (a.byRow && i.length <= 1) return void i.css(a.property, "");
                    i.each(function() {
                        var e = l(this),
                            t = e.attr("style"),
                            i = e.css("display");
                        "inline-block" !== i && "flex" !== i && "inline-flex" !== i && (i = "block");
                        var n = {
                            display: i
                        };
                        n[a.property] = "", e.css(n), e.outerHeight(!1) > o && (o = e.outerHeight(!1)), t ? e.attr("style", t) : e.css("display", "")
                    })
                }
                i.each(function() {
                    var e = l(this),
                        t = 0;
                    a.target && e.is(a.target) || ("border-box" !== e.css("box-sizing") && (t += d(e.css("border-top-width")) + d(e.css("border-bottom-width")), t += d(e.css("padding-top")) + d(e.css("padding-bottom"))), e.css(a.property, o - t + "px"))
                })
            }), r.each(function() {
                var e = l(this);
                e.attr("style", e.data("style-cache") || null)
            }), p._maintainScroll && l(window).scrollTop(o / s * l("html").outerHeight(!0)), this
        }, p._applyDataApi = function() {
            var i = {};
            l("[data-match-height], [data-mh]").each(function() {
                var e = l(this),
                    t = e.attr("data-mh") || e.attr("data-match-height");
                i[t] = t in i ? i[t].add(e) : e
            }), l.each(i, function() {
                this.matchHeight(!0)
            })
        };
        var a = function(e) {
            p._beforeUpdate && p._beforeUpdate(e, p._groups), l.each(p._groups, function() {
                p._apply(this.elements, this.options)
            }), p._afterUpdate && p._afterUpdate(e, p._groups)
        };
        p._update = function(e, t) {
            if (t && "resize" === t.type) {
                var i = l(window).width();
                if (i === n) return;
                n = i
            }
            e ? -1 === o && (o = setTimeout(function() {
                a(t), o = -1
            }, p._throttle)) : a(t)
        }, l(p._applyDataApi);
        var e = l.fn.on ? "on" : "bind";
        l(window)[e]("load", function(e) {
            p._update(!1, e)
        }), l(window)[e]("resize orientationchange", function(e) {
            p._update(!0, e)
        })
    }), PAYPAL.Marketing.initPxVideoModal = function(e, t, i, n, o) {
        var a = t,
            s = i;
        o = o;
        this._video = e, this._dataVideoId = $('a[data-video-id="' + this._video + '"]'), 0 < this._dataVideoId.length ? this._links = this._dataVideoId : this._links = $("#" + this._video), this._videoHref = this._links.attr("href"), this._videoWrap = this._video + "-VideoWrap", this._debug = o, this._poster = n, void 0 !== this._videoHref && "" !== this._videoHref || (this._videoHref = ""), void 0 !== this._poster && "" !== this._poster || (this._poster = "https://www.paypalobjects.com/webstatic/i/logo/rebrand/ppcom.svg"), a = a ? a < 360 ? 360 : a : 640, s = s || 360, this._overlay = $("<div></div>");
        var r = $(['<div class="px-video-container hidden" id="' + this._videoWrap + '">', '\t<div class="px-video-img-captions-container">', '   \t<div class="px-video-captions hide" aria-hidden="true"></div>', '      \t<video width="' + a + '" height="' + s + '" poster="' + this._poster + '"  controls="" class="px-video-node" preload="none">', '       \t<source src="' + this._videoHref + '" type="video/mp4">', "        \t<div>", '            \t<a href="' + this._videoHref + '">', '                \t<img src="' + this._poster + '" width="' + a + '" height="' + s + '" alt="download video">', "            \t</a>", "\t\t\t\t<p>Your browser does not support HTML5 video.</p>", "        \t</div>", "      \t</video>", "    </div>", '    <div class="px-video-controls"></div>', "</div>"].join("\n"));
        this._overlay.append(r), $(document.body).append(this._overlay), void 0 !== PAYPAL.Marketing.Modal && (this._modal = new PAYPAL.Marketing.Modal(this._overlay, {
            minHeight: s + 70,
            minWidth: a + 34
        })), new InitPxVideo({
            videoId: this._videoWrap,
            debug: this._debug
        }), this._videoPlayer = $("#" + this._videoWrap + " video")[0], this._attachEvents()
    }, PAYPAL.Marketing.initPxVideoModal.prototype = {
        _events: null,
        _playCancelled: !1,
        destroy: function() {
            this._video.destroy(), this._detachEvents()
        },
        _eventsAttached: function() {
            return null !== this._events
        },
        _attachEvents: function() {
            this._eventsAttached() || (this._events = [], this._events.push(this._links.on("click", $.proxy(this.show, this))), this._modal && $(window).on("MODAL_CLOSED", $.proxy(function() {
                this._pauseVideo(), this._playCancelled = !0
            }, this)))
        },
        _detachEvents: function() {
            $.isArray(this._events) && ($.each(this._events, function(e, t) {
                t.off()
            }), this._events = null)
        },
        _pauseVideo: function() {
            $("#" + this._videoWrap + " .px-video-pause").trigger("click"), $("#" + this._videoWrap + " video").get(0).pause()
        },
        _playVideo: function() {
            $("#" + this._videoWrap + " .px-video-play").trigger("click"), $("#" + this._videoWrap + " video").get(0).play()
        },
        show: function(e) {
            if ("undefined" != typeof ga && null !== ga) {
                var t = this;
                t._playCancelled = !1, setTimeout(function() {
                    !1 === t._playCancelled && ga("send", "event", "MPP Modal Video", "Play", "Desktop")
                }, 5e3)
            }
            if (e && $(e.target).trigger("blur"), "mobile" === $(document.documentElement).data("device-type") || Modernizr.mq("all and (max-width: 568px)")) return "undefined" != typeof ga && null !== ga && ga("send", "event", "MPP Modal Video", "Play", "Mobile"), e && (window.location = $(e.target).attr("href")), !0;
            e && e.preventDefault(), this._modal ? (this._modal.show(), $("#" + this._videoWrap).removeClass("hidden")) : this._overlay.lightbox("open"), $("#" + this._videoWrap + " .px-video-play").trigger("click")
        },
        hide: function(e) {
            e.preventDefault(), e.stopPropagation(), $("#" + this._videoWrap + " .px-video-pause").trigger("click"), window.setTimeout($.proxy(function() {
                this._overlay.lightbox("close")
            }, this), 0)
        }
    }, $(function() {
        "use strict";
        var o = $(document.documentElement).data("device-type");
        var e, a = (e = $(window).width(), ("dedicated" === o || "portable" === o) && 768 < e ? .5 * e : .9 * e),
            s = 9 * a / 16 + 37;

        function r(e) {
            fpti.link = "youtube-video-play|" + e, null !== PAYPAL && null !== PAYPAL.analytics && null !== PAYPAL.analytics.instance && PAYPAL.analytics.instance.recordClick(), "undefined" != typeof ga && null !== ga && ga("send", "event", "Video", "youtube-video-play", e)
        }
        $(".youtube-player").each(function() {
            $(this).append('<div class="youtube-play"><img class="youtube-thumb" src="' + $(this).attr("img-src") + '"><div class="play-button"></div>')
        }), $(".youtube-player .play-button").on("click", function() {
            var e = $(this).parent().parent().attr("video-id");
            "sandbox" in document.createElement("iframe") ? $(this).parent().parent().html('<iframe sandbox="allow-scripts allow-same-origin" class="youtube-iframe" src="https://www.youtube-nocookie.com/embed/' + e + '?rel=0&autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=0&showinfo=0&hd=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>') : window.open("https://www.youtube-nocookie.com/embed/" + e + "?rel=0&autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=0&showinfo=0&hd=1", "_blank", "height=360,width=480"), r(e)
        }), $(".youtube-player-modal").each(function() {
            $("body").append('<section id="' + $(this).attr("video-id") + '"></section>')
        }), $(".youtube-player-modal").on("click", function() {
            var e = $(this).attr("video-id"),
                t = $(this).attr("video-width") || a,
                i = $(this).attr("video-height") || s;
            $(this).data("video-inline");
            if ("sandbox" in document.createElement("iframe")) {
                var n = new PAYPAL.Marketing.Modal("#" + e, {
                    minHeight: i,
                    minWidth: t
                });
                n.show(), "mobile" === o ? $(n._$modal[0]).append('<iframe sandbox="allow-scripts allow-same-origin" class="youtube-iframe" src="https://www.youtube-nocookie.com/embed/' + e + '?rel=0&autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=0&showinfo=0&hd=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>') : ($(n._$dialog[0]).html('<iframe sandbox="allow-scripts allow-same-origin" class="youtube-iframe" src="https://www.youtube-nocookie.com/embed/' + e + '?rel=0&autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=0&showinfo=0&hd=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>'), $(".ui-dialog .youtube-iframe").css("height", $(n._$dialog[0]).height())), $(window).on("MODAL_CLOSED", function(e, t) {
                    var i = $(t).find("iframe.youtube-iframe");
                    i.length && i.remove()
                })
            } else window.open("https://www.youtube-nocookie.com/embed/" + e + "?rel=0&autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=0&showinfo=0&hd=1", "_blank", "height=360,width=480");
            r(e)
        })
    });