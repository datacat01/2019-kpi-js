(window.webpackJsonp = window.webpackJsonp || []).push([
    [17], {
        2310: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                var o = t.videoIsPreloader.playerConfig.advertising && t.videoIsPreloader.playerConfig.advertising.freewheel ? t.videoIsPreloader.playerConfig.advertising.freewheel.sectionid : "";
                return {
                    minute: (0, r.default)().format("hh") + ":" + (0, r.default)().format("mm"),
                    hour: (0, r.default)().format("hh"),
                    day: (0, r.default)().format("dddd"),
                    date: (0, r.default)().format("MM/D/YYYY"),
                    playerType: (0, i.getPlayerType)(),
                    playerURL: (0, i.getPlayerURL)(),
                    playerName: o,
                    initiate: t.playBackInitiativeInfo.playBackInitiative,
                    adId: e.id,
                    videoScreen: (0, i.getVideoScreen)(e.fullscreen)
                }
            };
            var a, n = o(105),
                r = (a = n) && a.__esModule ? a : {
                    default: a
                },
                i = o(2389)
        },
        2312: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = i(o(3)).default || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a])
                    }
                    return e
                },
                n = i(o(20)),
                r = i(o(2310));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = {
                secCounter: 0,
                fireIntervalOmnitureCall: function(e, t) {
                    var o = this;
                    o.OmnitureIntervalEvery1Sec = setInterval(function() {
                        if (o.secCounter += 1, 8 === o.secCounter) {
                            n.default.trigger("video8SecondsWatched", a({}, t.videoData, (0, r.default)(e, t), {
                                pev2: "VOD Chapter 8 Seconds Watched",
                                videoAction: "videochapter8seconds=true"
                            }))
                        } else if (30 === o.secCounter) {
                            n.default.trigger("video30SecondsWatched", a({}, t.videoData, (0, r.default)(e, t), {
                                pev2: "VOD Chapter 30 Seconds Watched",
                                videoAction: "videochapter30seconds=true"
                            }))
                        } else if (0 !== o.secCounter && o.secCounter % 60 == 0) {
                            var i = o.secCounter / 60,
                                l = {
                                    pev2: "VOD Chapter " + i + " Minutes Watched",
                                    videoAction: "videochapter" + i + "minutes=true"
                                };
                            n.default.trigger("videoEveryMinuteWatched", a({}, t.videoData, (0, r.default)(e, t), l))
                        }
                    }, 1e3)
                },
                clearOmnitureTimers: function() {
                    this.OmnitureIntervalEvery1Sec && (clearInterval(this.OmnitureIntervalEvery1Sec), this.OmnitureIntervalEvery1Sec = null)
                },
                resetCounter: function() {
                    this.secCounter = 0
                }
            };
            t.default = l
        },
        2313: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a, n = o(2),
                r = (a = n) && a.__esModule ? a : {
                    default: a
                },
                i = function() {
                    function e(e, t) {
                        for (var o = 0; o < t.length; o++) {
                            var a = t[o];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), (0, r.default)(e, a.key, a)
                        }
                    }
                    return function(t, o, a) {
                        return o && e(t.prototype, o), a && e(t, a), t
                    }
                }();
            var l = function() {
                function e(t, o) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.playerInstance = t, this.playerConfig = o, this.playing = !!o.autostart, this.fullscreen = !1, this.setup = this.setup.bind(this), this.createTopControlEls = this.createTopControlEls.bind(this), this.createPlaybackControlsOverlay = this.createPlaybackControlsOverlay.bind(this), this.createContentOverlay = this.createContentOverlay.bind(this), this.createTimeslider = this.createTimeslider.bind(this)
                }
                return i(e, [{
                    key: "setup",
                    value: function(t) {
                        var o = t.styles,
                            a = t.backToTopHandler,
                            n = t.dismissHandler,
                            r = t.title;
                        this.container = e.createElement("div", o.wrapper), this.topContainer = this.createTopControlEls({
                            styles: o,
                            backToTopHandler: a,
                            dismissHandler: n
                        }), this.playbackControlsOverlay = this.createPlaybackControlsOverlay(o), this.contentOverlay = this.createContentOverlay(o, r), this.timesliderContainer = this.createTimeslider(o), this.container.appendChild(this.topContainer), this.container.appendChild(this.playbackControlsOverlay), this.container.appendChild(this.contentOverlay), this.container.appendChild(this.timesliderContainer), this.container.addEventListener("click", this.togglePlay), this.update(this.playerConfig)
                    }
                }, {
                    key: "update",
                    value: function(e) {
                        this.playerConfig = e, this.contentOverlay.style.display = !1 === e.displaytitle ? "none" : "block"
                    }
                }, {
                    key: "createTopControlEls",
                    value: function(t) {
                        var o = t.styles,
                            a = t.backToTopHandler,
                            n = t.dismissHandler;
                        this.hideIconContainer = e.createElement("span", "icon-close"), this.dockIconContainer = e.createElement("span", "icon-buffett-backtotop"), this.hideIconContainer.addEventListener("click", n), this.dockIconContainer.addEventListener("click", a);
                        var r = e.createElement("div", o.buttons);
                        return r.appendChild(this.hideIconContainer), r.appendChild(this.dockIconContainer), r
                    }
                }, {
                    key: "togglePlay",
                    value: function(e) {
                        this.player = jwplayer(), "paused" === this.player.getState() ? this.player.play() : this.player.pause(), e.stopPropagation()
                    }
                }, {
                    key: "createPlaybackControlsOverlay",
                    value: function(t) {
                        var o = e.createElement("div", t.buttonWrapper);
                        return this.playingContainer = e.createElement("span", "icon-buffett-video"), this.pausedContainer = e.createElement("span", "icon-buffett-pause"), o.appendChild(this.playingContainer), o.appendChild(this.pausedContainer), o
                    }
                }, {
                    key: "createContentOverlay",
                    value: function(t, o) {
                        var a = e.createElement("div", t.content);
                        return this.titleContainer = e.createElement("div", t.title, o), a.appendChild(this.titleContainer), a
                    }
                }, {
                    key: "createTimeslider",
                    value: function(t) {
                        var o = e.createElement("div", t.timesliderContainer);
                        return this.timeslider = e.createElement("div", t.timeslider), this.progressBar = e.createElement("div", t.progressBar), this.timeslider.appendChild(this.progressBar), o.appendChild(this.timeslider), o
                    }
                }], [{
                    key: "createElement",
                    value: function(e, t, o) {
                        var a = document.createElement(e);
                        return t && (a.className = t), o && (a.innerText = o), a
                    }
                }, {
                    key: "getCustomControls",
                    value: function(e, t) {
                        var o = e.getContainer().querySelector("." + t.wrapper);
                        return {
                            progressBar: o ? o.querySelector("." + t.progressBar) : null
                        }
                    }
                }]), e
            }();
            t.default = l
        },
        2378: function(e, t, o) {
            "use strict";
            var a = i(o(5)),
                n = i(o(6)),
                r = "function" == typeof n.default && "symbol" == typeof a.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof n.default && e.constructor === n.default && e !== n.default.prototype ? "symbol" : typeof e
                };

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = g(o(2)),
                s = g(o(7)),
                d = g(o(8)),
                u = g(o(9)),
                p = function() {
                    function e(e, t) {
                        for (var o = 0; o < t.length; o++) {
                            var a = t[o];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), (0, l.default)(e, a.key, a)
                        }
                    }
                    return function(t, o, a) {
                        return o && e(t.prototype, o), a && e(t, a), t
                    }
                }(),
                c = o(1),
                f = g(c),
                v = g(o(0)),
                y = o(22),
                h = o(14),
                _ = g(o(2379)),
                m = g(o(20)),
                I = g(o(2409)),
                b = o(379),
                w = o(12);

            function g(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var C = o(2048),
                P = function(e) {
                    function t(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var o = function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" !== (void 0 === t ? "undefined" : r(t)) && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || (0, u.default)(t)).call(this, e));
                        return o.handleResize = function() {
                            if (o.placeholder) {
                                var e = o.placeholder.getBoundingClientRect(),
                                    t = Math.round(e.top || e.y || 0) + window.pageYOffset,
                                    a = Math.floor(e.left || e.x || 0) + window.pageXOffset,
                                    n = o.placeholder.scrollWidth > e.width ? o.placeholder.scrollWidth : e.width + 1,
                                    r = o.placeholder.scrollHeight > e.height ? o.placeholder.scrollHeight : e.height + 1,
                                    i = window.innerWidth,
                                    l = window.innerHeight,
                                    s = o.sourcePlaceholderId;
                                o.props.videoDataWithPosition.top === t && o.props.videoDataWithPosition.left === a && o.props.videoDataWithPosition.width === n && o.props.videoDataWithPosition.height === r || o.props.dispatch((0, h.getVideoDataWithPosition)({
                                    top: t,
                                    left: a,
                                    width: n,
                                    height: r,
                                    sourcePlaceholderId: s,
                                    viewportWidth: i,
                                    viewportHeight: l
                                }))
                            }
                        }, o.handleScroll = function() {
                            var e = o.props,
                                t = e.playBackInitiativeInfo,
                                a = e.videoDataWithPosition,
                                n = e.videoPlayerInfo,
                                r = o.props.videoPlayerInfo.layout || h.playerLayoutStates.HIDDEN;
                            if ((a.brand || a.data && a.data.brand) !== w.DEAL_OR_NO_DEAL && !n.suspendScrollHandling && !t.isPlaylist && o.placeholder && a.data && a.data.playerConfig && a.data.playerConfig.sticky && (a.viewportWidth > 768 || [h.playerLayoutStates.STICKY, h.playerLayoutStates.STICKY_END_CARD, h.playerLayoutStates.STICKY_TO_INLINE_SCROLL, h.playerLayoutStates.INLINE_END_CARD_WITH_TIMER, h.playerLayoutStates.ABOVE_FOOTER_END_CARD].includes(r))) {
                                var i = a.viewportWidth < 1020 ? 45 : 50,
                                    l = o.placeholder.getBoundingClientRect(),
                                    s = (l.bottom + l.top) / 2;
                                if (a.viewportWidth > 768) {
                                    if (s < i) {
                                        if ((r === h.playerLayoutStates.INLINE && n.playback || r === h.playerLayoutStates.INLINE_END_CARD_WITH_TIMER) && o.props.dispatch((0, h.setPlayerInfo)({
                                                trigger: h.playerLayoutActions.LEAVE_VIEWPORT
                                            })), null != o.footerElement)
                                            if ([h.playerLayoutStates.STICKY, h.playerLayoutStates.STICKY_END_CARD].includes(r)) o.footerElement.getBoundingClientRect().top <= a.viewportHeight && o.props.dispatch((0, h.setPlayerInfo)({
                                                trigger: h.playerLayoutActions.ATTACH_TO_FOOTER
                                            }));
                                            else if ([h.playerLayoutStates.ABOVE_FOOTER, h.playerLayoutStates.ABOVE_FOOTER_END_CARD].includes(r)) {
                                            o.footerElement.getBoundingClientRect().top > a.viewportHeight && o.props.dispatch((0, h.setPlayerInfo)({
                                                trigger: h.playerLayoutActions.DETACH_FROM_FOOTER
                                            }))
                                        }
                                    } else if ([h.playerLayoutStates.STICKY, h.playerLayoutStates.STICKY_END_CARD, h.playerLayoutStates.STICKY_TO_INLINE_SCROLL].includes(r)) o.props.dispatch((0, h.setPlayerInfo)({
                                        trigger: h.playerLayoutActions.ENTER_VIEWPORT
                                    }));
                                    else if ([h.playerLayoutStates.ABOVE_FOOTER, h.playerLayoutStates.ABOVE_FOOTER_END_CARD].includes(r)) {
                                        if (null != o.footerElement) o.footerElement.getBoundingClientRect().top > a.viewportHeight && o.props.dispatch((0, h.setPlayerInfo)({
                                            trigger: h.playerLayoutActions.DETACH_FROM_FOOTER
                                        }))
                                    }
                                } else [h.playerLayoutStates.STICKY, h.playerLayoutStates.STICKY_TO_INLINE_SCROLL, h.playerLayoutStates.ABOVE_FOOTER].includes(r) && (s < i || s > a.viewportHeight) && o.props.dispatch((0, h.setPlayerInfo)({
                                    trigger: h.playerLayoutActions.ENTER_VIEWPORT
                                }))
                            }
                        }, o.handleTransitionComplete = function(e) {
                            e.target === o.playerElement && o.props.dispatch((0, h.setPlayerInfo)({
                                trigger: h.playerLayoutActions.TRANSITION_COMPLETE
                            }))
                        }, o.supportForScrollBehavior = function() {
                            return "undefined" != typeof window && "scrollBehavior" in document.documentElement.style
                        }, o.state = {
                            defaultWorkflow: "VOD",
                            defaultPlayerTech: "JW",
                            defaultLayout: h.playerLayoutStates.INLINE,
                            defaultStickyPlayerWidth: 300,
                            intervalTimer: 0,
                            playerAspectRatio: .5625
                        }, o.playerElement = null, o.footerElement = null, o.timerFunc = null, o.intervalTimer = 0, o.sourcePlaceholderId = null, o.placeholder = null, o.width = null, o
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : r(t)));
                        e.prototype = (0, d.default)(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (s.default ? (0, s.default)(e, t) : e.__proto__ = t)
                    }(t, c.Component), p(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            m.default.on("resize", this.handleResize), m.default.on("scroll", this.handleScroll), this.playerElement = document.querySelector("." + C.videoContainer), null != this.playerElement && this.playerElement.addEventListener("transitionend", this.handleTransitionComplete), this.timerFunc = setInterval(function() {
                                return e.handleInterval()
                            }, 1e3), setTimeout(function() {
                                e.footerElement = document.getElementById("GlobalFooter")
                            }, 2e3)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            m.default.remove("resize", this.handleResize), m.default.remove("scroll", this.handleScroll), this.playerElement = document.querySelector("." + C.videoContainer), null != this.playerElement && this.playerElement.removeEventListener("transitionend", this.handleTransitionComplete), this.props.dispatch((0, h.setVideoPlayBackInitiative)({
                                isPlaylist: !1
                            })), clearInterval(this.timerFunc)
                        }
                    }, {
                        key: "shouldComponentUpdate",
                        value: function(e) {
                            return !(this.props.videoPlayerInfo.targetLayout && this.props.videoPlayerInfo.targetLayout !== e.videoPlayerInfo.layout) || this.props.videoPlayerInfo.adPlayback !== e.videoPlayerInfo.adPlayback || this.props.navStatus.hasNewsAlert !== e.navStatus.hasNewsAlert || this.props.navStatus.hasLiveAlert !== e.navStatus.hasLiveAlert || this.props.placeholderInfo && e.placeholderInfo && e.placeholderInfo.sourcePlaceholderId && this.props.placeholderInfo.sourcePlaceholderId !== e.placeholderInfo.sourcePlaceholderId
                        }
                    }, {
                        key: "handleInterval",
                        value: function() {
                            this.intervalTimer > 300 ? (clearInterval(this.timerFunc), this.intervalTimer = 0) : (this.intervalTimer = this.intervalTimer + 1, this.handleResize())
                        }
                    }, {
                        key: "processInterval",
                        value: function(e) {
                            var t = this;
                            return e ? (clearInterval(this.timerFunc), this.intervalTimer = 0, this.timerFunc = setInterval(function() {
                                return t.handleInterval()
                            }, 1e3), !0) : null
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this;
                            this.props.videoPlayerInfo.layout === h.playerLayoutStates.INLINE_TO_STICKY_1_INLINE_FIXED && e.videoPlayerInfo.layout === h.playerLayoutStates.INLINE && this.props.dispatch((0, h.setPlayerInfo)({
                                trigger: h.playerLayoutActions.TRANSITION_BEGIN
                            })), this.props.videoPlayerInfo.layout === h.playerLayoutStates.ABOVE_FOOTER_TO_DISMISS_1_ABSOLUTE && e.videoPlayerInfo.layout === h.playerLayoutStates.ABOVE_FOOTER && this.props.dispatch((0, h.setPlayerInfo)({
                                trigger: h.playerLayoutActions.TRANSITION_BEGIN
                            })), this.processInterval(this.props.videoDataWithPosition.data.playbackURL !== e.videoDataWithPosition.data.playbackURL), this.props.navStatus.hasNewsAlert === e.navStatus.hasNewsAlert && this.props.navStatus.hasLiveAlert === e.navStatus.hasLiveAlert || window.setTimeout(function() {
                                t.handleResize()
                            }, 200);
                            var o = this.state.defaultPlayerTech,
                                a = this.props.videoDataWithPosition,
                                n = void 0,
                                r = !1;
                            switch (this.props.videoPlayerInfo.layout || h.playerLayoutStates.HIDDEN) {
                                case h.playerLayoutStates.INLINE:
                                    n = a.width;
                                    break;
                                case h.playerLayoutStates.STICKY:
                                    n = a.data && a.data.playerConfig && a.data.playerConfig.stickyPlayerWidth || this.state.defaultStickyPlayerWidth, r = !0;
                                    break;
                                case h.playerLayoutStates.STICKY_TO_INLINE_2_INLINE_TRANSPARENT:
                                case h.playerLayoutStates.STICKY_TO_INLINE_PAUSED_2_INLINE_FADE_IN:
                                    n = a.width
                            }
                            if (n && n !== this.width) {
                                this.width = n;
                                var i = Math.round(this.state.playerAspectRatio * n);
                                (0, I.default)(o, n, i)
                            }
                            r && this.handleScroll(), null === this.footerElement && (this.footerElement = document.getElementById("GlobalFooter"));
                            var l = this.props,
                                s = l.placeholderInfo,
                                d = l.videoPlayerInfo;
                            if (s && s.sourcePlaceholderId) {
                                var u = s.sourcePlaceholderId,
                                    p = d.inlineVideoComponent;
                                this.sourcePlaceholderId = u, this.placeholder = (0, b.getPositioningElement)(u, p)
                            }
                        }
                    }, {
                        key: "renderComponent",
                        value: function() {
                            var e = this.state.defaultPlayerTech,
                                t = this.props.videoDataWithPosition.data,
                                o = this.props.videoDataWithPosition.videoAttributes;
                            if (this.props.videoIsPreloader.isPreloader) {
                                return f.default.createElement(_.default, {
                                    playerTech: e,
                                    videoData: {
                                        playerConfig: {
                                            key: "kUNttoq2/4rWpvnQfp8li9YuepHLyGaDTdYfyFRSQAx2uiaN",
                                            workflow: "VOD"
                                        },
                                        playbackURL: "//sc.cnbcfm.com/applications/cnbc.com/staticcontent/video.mp4"
                                    },
                                    videoAttributes: o
                                })
                            }
                            if (t) {
                                if (t.playerConfig && ("VOD" === t.playerConfig.workflow || "directPlayback" === t.playerConfig.workflow)) return f.default.createElement(_.default, {
                                    playerTech: e,
                                    videoData: t,
                                    videoAttributes: o
                                });
                                if (t.playerConfig && "Live" === t.playerConfig.workflow) return f.default.createElement(_.default, {
                                    playerTech: e,
                                    videoData: t,
                                    videoAttributes: o
                                });
                                if ("" === t.playbackURL) return f.default.createElement("div", {
                                    style: {
                                        display: "none"
                                    }
                                }, "No video requested.")
                            }
                            return f.default.createElement("div", null, "An error has occurred")
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.videoDataWithPosition,
                                t = this.props.videoPlayerInfo.layout || h.playerLayoutStates.HIDDEN,
                                o = void 0,
                                a = void 0,
                                n = void 0,
                                r = "",
                                i = "",
                                l = "",
                                s = "",
                                d = "",
                                u = void 0,
                                p = void 0,
                                c = "",
                                v = this.props.videoPlayerInfo.adPlayback ? "adPlayback" : "",
                                y = {},
                                _ = this.props.videoPlayerInfo.playback ? "playing" : "paused",
                                m = this.props.videoPlayerInfo.seek ? "scrubbing" : "",
                                I = "",
                                b = e.brand || e.data && e.data.brand || "",
                                w = e.data && e.data.playerConfig && e.data.playerConfig.stickyPlayerWidth ? e.data.playerConfig.stickyPlayerWidth : this.state.defaultStickyPlayerWidth;
                            switch (e.data && e.data.transcript && (I = "transcript"), t) {
                                case h.playerLayoutStates.HIDDEN:
                                case h.playerLayoutStates.INLINE_END_CARD_WITH_TIMER:
                                case h.playerLayoutStates.STICKY_END_CARD:
                                case h.playerLayoutStates.ABOVE_FOOTER_END_CARD:
                                    y = {
                                        top: o = -3e3,
                                        left: a = -3e3,
                                        width: n = e.width
                                    };
                                    break;
                                case h.playerLayoutStates.INLINE:
                                    o = e.top, a = e.left, n = e.width;
                                    break;
                                case h.playerLayoutStates.INLINE_TO_STICKY_1_INLINE_FIXED:
                                    var g = this.placeholder.getBoundingClientRect();
                                    o = Math.round(g.top || g.y || 0), a = Math.round(g.left || g.x || 0), n = g.width, i = "fixed";
                                    break;
                                case h.playerLayoutStates.INLINE_TO_STICKY_2_TRANSITION:
                                    var P = this.placeholder.getBoundingClientRect();
                                    o = Math.round(P.top || P.y || 0), a = Math.round(P.left || P.x || 0), n = P.width, i = "fixed";
                                    var E = e.data.playerConfig.stickyPlayerWidth || this.state.defaultStickyPlayerWidth;
                                    l = "initial", r = "translateY(" + (window.innerHeight - 40 - .5625 * E / 2 - (o + P.height / 2)) + "px) translateX(" + (40 + E / 2 - a - P.width / 2) + "px) scale(" + E / n + ")", s = "all .5s ease-in";
                                    break;
                                case h.playerLayoutStates.STICKY:
                                    a = "40px", d = "40px", n = w + "px", i = "fixed", c = "customControls";
                                    break;
                                case h.playerLayoutStates.STICKY_TO_INLINE_1_STICKY_FADE_OUT:
                                    a = "40px", d = "40px", n = w + "px", i = "fixed", u = "opacity", p = 0, s = "all .3s ease-in";
                                    break;
                                case h.playerLayoutStates.STICKY_TO_INLINE_2_INLINE_TRANSPARENT:
                                    o = e.top, a = e.left, n = e.width, u = "opacity", p = 1, s = "all .3s ease-in";
                                    break;
                                case h.playerLayoutStates.STICKY_TO_INLINE_SCROLL:
                                    a = "40px", d = "40px", n = w + "px", i = "fixed", this.supportForScrollBehavior() ? window.scroll({
                                        top: e.top - 100,
                                        behavior: "smooth"
                                    }) : window.scroll(0, e.top - 100);
                                    break;
                                case h.playerLayoutStates.STICKY_TO_INLINE_PAUSED_1_SLIDE_OUT:
                                    a = "40px", d = "40px", n = w + "px", i = "fixed", l = "initial", r = "translateX(-" + (40 + w) + "px)", s = "all .3s ease-in";
                                    break;
                                case h.playerLayoutStates.STICKY_TO_INLINE_PAUSED_2_INLINE_FADE_IN:
                                    o = e.top, a = e.left, n = e.width, u = "opacity", p = 1, s = "all .3s ease-in";
                                    break;
                                case h.playerLayoutStates.ABOVE_FOOTER:
                                    null != this.footerElement && (i = "absolute", a = "40px", o = this.footerElement.offsetTop - 40 - .5625 * w, n = w + "px", c = "customControls");
                                    break;
                                case h.playerLayoutStates.ABOVE_FOOTER_TO_DISMISS_1_ABSOLUTE:
                                    null != this.footerElement && (i = "absolute", a = "40px", o = this.footerElement.offsetTop - 40 - .5625 * w, n = w + "px", c = "customControls", l = "initial");
                                    break;
                                case h.playerLayoutStates.ABOVE_FOOTER_TO_DISMISS_2_SLIDE_OUT:
                                    null != this.footerElement && (i = "absolute", a = "40px", o = this.footerElement.offsetTop - 40 - .5625 * w, n = w + "px", c = "customControls", l = "initial", r = "translateX(-" + (40 + w) + "px)", s = "all .3s ease-in")
                            }
                            return y = {
                                top: o,
                                bottom: d,
                                left: a,
                                width: n,
                                transform: r,
                                transformOrigin: l,
                                transition: s,
                                position: i,
                                transitionProperty: u,
                                opacity: p
                            }, f.default.createElement("div", {
                                className: C.videoContainer + " " + c + " " + I + " " + _ + " " + m + " " + b + " " + v,
                                style: y
                            }, this.renderComponent())
                        }
                    }]), t
                }();
            P.propTypes = {
                videoDataWithPosition: v.default.object,
                videoPlayerInfo: v.default.object,
                videoIsPreloader: v.default.object,
                dispatch: v.default.func,
                placeholderInfo: v.default.object,
                playBackInitiativeInfo: v.default.object,
                navStatus: v.default.object
            }, P.defaultProps = {
                videoDataWithPosition: {},
                videoPlayerInfo: {},
                videoIsPreloader: {},
                dispatch: null,
                placeholderInfo: {},
                playBackInitiativeInfo: {},
                navStatus: {}
            }, t.default = (0, y.connect)(function(e) {
                return {
                    videoDataWithPosition: e.videoDataWithPosition,
                    videoIsPreloader: e.videoIsPreloader,
                    videoPlayerInfo: e.videoPlayerInfo,
                    placeholderInfo: e.placeholderInfo,
                    playBackInitiativeInfo: e.playBackInitiativeInfo,
                    navStatus: e.navStatus
                }
            }, null)(P)
        },
        2379: function(e, t, o) {
            "use strict";
            var a = i(o(5)),
                n = i(o(6)),
                r = "function" == typeof n.default && "symbol" == typeof a.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof n.default && e.constructor === n.default && e !== n.default.prototype ? "symbol" : typeof e
                };

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = h(o(2)),
                s = h(o(7)),
                d = h(o(8)),
                u = h(o(9)),
                p = function() {
                    function e(e, t) {
                        for (var o = 0; o < t.length; o++) {
                            var a = t[o];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), (0, l.default)(e, a.key, a)
                        }
                    }
                    return function(t, o, a) {
                        return o && e(t.prototype, o), a && e(t, a), t
                    }
                }(),
                c = o(1),
                f = h(c),
                v = h(o(0)),
                y = h(o(2380));

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var _ = function(e) {
                function t() {
                    return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                        function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" !== (void 0 === t ? "undefined" : r(t)) && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || (0, u.default)(t)).apply(this, arguments))
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : r(t)));
                    e.prototype = (0, d.default)(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (s.default ? (0, s.default)(e, t) : e.__proto__ = t)
                }(t, c.Component), p(t, [{
                    key: "renderPlayer",
                    value: function() {
                        var e = this.props.playerTech || this.state.defaultPlayer,
                            t = this.props.videoData.playerConfig.workflow;
                        return "JW" === e && t ? f.default.createElement(y.default, {
                            videoData: this.props.videoData,
                            videoAttributes: this.props.videoAttributes
                        }) : f.default.createElement("div", null, "Not Using JW!")
                    }
                }, {
                    key: "render",
                    value: function() {
                        return f.default.createElement("div", {
                            id: "cnbc-video-player"
                        }, this.renderPlayer())
                    }
                }]), t
            }();
            _.propTypes = {
                workflow: v.default.string,
                playerTech: v.default.string,
                videoData: v.default.object,
                videoAttributes: v.default.object
            }, _.defaultProps = {
                workflow: "",
                playerTech: "",
                videoData: {},
                videoAttributes: {}
            }, t.default = _
        },
        2380: function(e, t, o) {
            "use strict";
            var a = i(o(5)),
                n = i(o(6)),
                r = "function" == typeof n.default && "symbol" == typeof a.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof n.default && e.constructor === n.default && e !== n.default.prototype ? "symbol" : typeof e
                };

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = D(o(5)),
                s = D(o(6)),
                d = D(o(2)),
                u = D(o(7)),
                p = D(o(8)),
                c = D(o(9)),
                f = "function" == typeof s.default && "symbol" === r(l.default) ? function(e) {
                    return void 0 === e ? "undefined" : r(e)
                } : function(e) {
                    return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : void 0 === e ? "undefined" : r(e)
                },
                v = function() {
                    function e(e, t) {
                        for (var o = 0; o < t.length; o++) {
                            var a = t[o];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), (0, d.default)(e, a.key, a)
                        }
                    }
                    return function(t, o, a) {
                        return o && e(t.prototype, o), a && e(t, a), t
                    }
                }(),
                y = o(1),
                h = D(y),
                _ = D(o(105)),
                m = D(o(0)),
                I = o(22),
                b = D(o(2007)),
                w = D(o(2381)),
                g = D(o(2382)),
                C = D(o(2383)),
                P = D(o(2384)),
                E = D(o(2387)),
                k = o(14),
                S = D(o(2313)),
                O = D(o(20));

            function D(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function T(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== (void 0 === t ? "undefined" : r(t)) && "function" != typeof t ? e : t
            }
            var L = o(2017),
                A = function(e) {
                    function t() {
                        var e, o, a;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return o = a = T(this, (e = t.__proto__ || (0, c.default)(t)).call.apply(e, [this].concat(r))), a.state = {
                            adHasPlayed: !1
                        }, a.backToTopHandler = function(e) {
                            var t = k.playerLayoutActions.BACK_TO_TOP;
                            a.props.dispatch((0, k.setPlayerInfo)({
                                trigger: t
                            }));
                            var o = {
                                pev2: "Video Docked",
                                trkNav: "video:docked:undockicon:" + a.props.videoData.vcpsId
                            };
                            O.default.trigger("videoDockedUndockicon", o), e.stopPropagation()
                        }, a.dismissHandler = function(e) {
                            "undefined" != typeof window && "object" === f(window.jwplayer()) && "function" == typeof window.jwplayer().pause && window.jwplayer().pause();
                            var t = k.playerLayoutActions.DISMISS;
                            a.props.dispatch((0, k.setPlayerInfo)({
                                trigger: t
                            })), setTimeout(function() {
                                return a.props.dispatch((0, k.setPlayerInfo)({
                                    playback: !1
                                }))
                            }, 300);
                            var o = {
                                pev2: "Video Docked",
                                trkNav: "video:docked:close:" + a.props.videoData.vcpsId
                            };
                            O.default.trigger("videoDockedClose", o), e.stopPropagation()
                        }, a.buildCustomPlayerUi = function(e) {
                            if ("undefined" != typeof window && "function" == typeof window.jwplayer) {
                                var t = a.backToTopHandler,
                                    o = a.dismissHandler;
                                a.customPlayerUi = new S.default(window.jwplayer, e), a.customPlayerUi.setup({
                                    styles: L,
                                    backToTopHandler: t,
                                    dismissHandler: o
                                });
                                var n = document.getElementById(a.containerId);
                                n && n.appendChild(a.customPlayerUi.container)
                            }
                        }, a.initializeJW = function() {
                            var e = a,
                                t = window.jwplayer(a.containerId),
                                o = {};
                            if (a.props.videoData.playbackURL) {
                                var n = a.props.xfinity.isXfinity,
                                    r = a.props,
                                    i = r.videoAttributes,
                                    l = r.user,
                                    s = (0, C.default)(a.props.videoData, n, i, l);
                                o = (0, g.default)(a.props.videoData, s), a.props.dispatch((0, k.getVideoIsPreloader)({
                                    playerConfig: o
                                }));
                                var d = [];
                                a.props.videoData.transcript && a.props.videoData.transcript.cues && (d = a.props.videoData.transcript.cues);
                                var u = a.backToTopHandler,
                                    p = a.dismissHandler;
                                if (e.props.videoIsPreloader.firstVideoClickedOnPage && ((0, P.default)({
                                        component: e,
                                        player: t,
                                        playerConfig: o,
                                        cues: d,
                                        backToTopHandler: u,
                                        dismissHandler: p
                                    }), a.props.videoIsPreloader.isPreloader || a.props.dispatch((0, k.getVideoIsPreloader)({
                                        firstVideoClickedOnPage: !1
                                    }))), !a.props.videoIsPreloader.isPreloader) {
                                    if (!a.props.videoIsPreloader.firstVideoClickedOnPage) "undefined" != typeof window && "object" === f(window.jwplayer()) && "function" == typeof window.jwplayer().stop && t.stop(), a.customPlayerUi.update(o), t.setConfig([{
                                        autostart: "true"
                                    }]), t.load([{
                                        file: a.props.videoData.playbackURL,
                                        fwassetid: "cnbc_" + a.props.videoData.vcpsId,
                                        mediaid: "cnbc_" + a.props.videoData.vcpsId,
                                        adschedule: {
                                            adbreak: {
                                                offset: "pre",
                                                tag: "placeholder_preroll"
                                            }
                                        },
                                        title: "" + a.props.videoData.title,
                                        c3: "" + a.props.videoData.comScoreC3,
                                        c4: "" + a.props.videoData.comScoreC4,
                                        c6: "" + a.props.videoData.comScoreC6,
                                        ns_st_ci: "" + a.props.videoData.vcpsId,
                                        ns_st_pr: "" + (a.props.videoData.section ? a.props.videoData.section.tagNameFormattedFull : "*null"),
                                        ns_st_ep: "" + a.props.videoData.title,
                                        ns_st_ddt: "" + (null !== a.props.videoData.datePublished ? (0, _.default)(a.props.videoData.datePublished).format("YYYY-MM-DD") : "*null"),
                                        ns_st_tdt: "" + (null !== a.props.videoData.datePublished ? (0, _.default)(a.props.videoData.datePublished).format("YYYY-MM-DD") : "*null"),
                                        ns_st_st: "" + a.props.videoData.brand,
                                        url: "" + a.props.videoData.url
                                    }]);
                                    t.play();
                                    a.props.dispatch((0, k.setPlaceholderState)({
                                        replayVideo: !1
                                    }))
                                }
                            }
                        }, a.playerInfoDispatch = function(e) {
                            a.props.dispatch((0, k.setEventsInfo)(e))
                        }, T(a, o)
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : r(t)));
                        e.prototype = (0, p.default)(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (u.default ? (0, u.default)(e, t) : e.__proto__ = t)
                    }(t, y.Component), v(t, [{
                        key: "componentWillMount",
                        value: function() {
                            this.libraryElementId = b.default.SCRIPT_ELEMENT_ID, this.eventHandlers = (0, E.default)(this), this.containerId = b.default.PLAYER_CONTAINER_ID, this.playerConfig = (0, g.default)(this.props.videoData, this.props.videoData.playerConfig)
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            document.getElementById(this.libraryElementId) || ((0, w.default)({
                                context: document,
                                scriptElementId: this.libraryElementId,
                                scriptLocation: b.default.JW_LIB_URL,
                                onLoadCallback: this.initializeJW
                            }), (0, w.default)({
                                context: document,
                                scriptLocation: b.default.JW_COMSCORE_PLUGIN_URL
                            }), (0, w.default)({
                                context: document,
                                scriptLocation: b.default.JW_NEWRELIC_PLUGIN_URL
                            }))
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            "undefined" != typeof window && "function" == typeof window.jwplayer && window.jwplayer(b.default.PLAYER_CONTAINER_ID) && (e.videoData.playbackURL !== this.props.videoData.playbackURL ? this.initializeJW() : e.placeholderInfo.replayVideo !== this.props.placeholderInfo.replayVideo && this.props.placeholderInfo.replayVideo && this.initializeJW())
                        }
                    }, {
                        key: "componentDidCatch",
                        value: function(e, t) {
                            console.error("Error caught in JWPlayer component:: ", e, t, this.props)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return h.default.createElement("div", null, h.default.createElement("div", {
                                id: this.containerId,
                                className: L.jwContainer
                            }))
                        }
                    }]), t
                }();
            A.propTypes = {
                videoData: m.default.object.isRequired,
                dispatch: m.default.func,
                videoIsPreloader: m.default.object.isRequired,
                placeholderInfo: m.default.object,
                xfinity: m.default.object,
                videoAttributes: m.default.object,
                user: m.default.object
            }, A.defaultProps = {
                videoData: {},
                dispatch: null,
                videoIsPreloader: null,
                placeholderInfo: {},
                xfinity: {},
                playBackInitiativeInfo: {},
                videoAttributes: {},
                user: {}
            }, t.default = (0, I.connect)(function(e) {
                var t = e.authentication.user;
                return {
                    videoIsPreloader: e.videoIsPreloader,
                    placeholderInfo: e.placeholderInfo,
                    videoEventsInfo: e.videoEventsInfo,
                    xfinity: e.xfinity,
                    playBackInitiativeInfo: e.playBackInitiativeInfo,
                    user: t
                }
            }, null)(A);
            var R = function(e, t) {
                console.warn(e, t)
            };
            O.default.on("videoStart", function(e) {
                R("Video Start Event: ", e)
            }), O.default.on("videoResume", function(e) {
                R("Video Resume Event: ", e)
            }), O.default.on("videoAdComplete", function(e) {
                R("Video Ad Complete: ", e)
            }), O.default.on("videoAdPause", function(e) {
                R("Video Ad Pause Event: ", e)
            }), O.default.on("videoAdStart", function(e) {
                R("Video Ad Start Event: ", e)
            }), O.default.on("videoPause", function(e) {
                R("Video Pause Event: ", e)
            }), O.default.on("videoSeek", function(e) {
                R("Video Seeked Event: ", e)
            }), O.default.on("videoClip25", function(e) {
                R("Video Clip 25% Event: ", e)
            }), O.default.on("videoClip50", function(e) {
                R("Video Clip 50% Event: ", e)
            }), O.default.on("videoClip75", function(e) {
                R("Video Clip 75% Event: ", e)
            }), O.default.on("videoComplete", function(e) {
                R("Video Complete Event: ", e)
            }), O.default.on("video8SecondsWatched", function(e) {
                R("video8SecondsWatched: ", e)
            }), O.default.on("video30SecondsWatched", function(e) {
                R("video30SecondsWatched: ", e)
            }), O.default.on("videoEveryMinuteWatched", function(e) {
                R("videoEveryMinuteWatched ", e)
            }), O.default.on("videoShare", function(e) {
                R("videoShare: ", e)
            }), O.default.on("videoFullScreen", function(e) {
                R("videoFullScreen: ", e)
            }), O.default.on("videoPlaybackRateChanged", function(e) {
                R("videoPlaybackRateChanged: ", e)
            }), O.default.on("videoClosedCaption", function(e) {
                R("videoClosedCaption: ", e)
            }), O.default.on("videoProviderSharing", function(e) {
                R("videoProviderSharing: ", e)
            }), O.default.on("videoDockedClose", function(e) {
                R("videoDockedClose: ", e)
            }), O.default.on("videoDockedUndockicon", function(e) {
                R("videoDockedUndockicon: ", e)
            }), O.default.on("videoReplay", function(e) {
                R("videoReplay: ", e)
            }), O.default.on("videoJumpBack", function(e) {
                R("videoJumpBack: ", e)
            }), O.default.on("videoEmbedClick", function(e) {
                R("videoEmbedClick: ", e)
            }), O.default.on("videoCancelEndCardExternal", function(e) {
                R("videoCancelEndCardExternal: ", e)
            })
        },
        2381: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.context,
                    o = e.scriptElementId,
                    a = e.scriptLocation,
                    n = e.onLoadCallback,
                    r = t || document,
                    i = r.createElement("script");
                i.id = o, i.src = a, i.type = "text/javascript", null != n && (i.onload = n), r.head.appendChild(i)
            }
        },
        2382: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = r(o(3)).default || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a])
                    }
                    return e
                },
                n = r(o(105));

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = function(e, t) {
                var o = {
                        facebook: "https://www.facebook.com/sharer/sharer.php?u=",
                        twitter: "https://twitter.com/intent/tweet?url=",
                        linkedIn: "https://www.linkedin.com/cws/share?url="
                    },
                    r = "undefined" != typeof window && "function" == typeof window.jwplayer && "function" == typeof window.jwplayer().getPlaylistItem,
                    i = t.fwassetId || "",
                    l = {
                        playlist: [{
                            file: e.playbackURL,
                            fwassetid: "cnbc_" + e.vcpsId,
                            mediaid: "cnbc_" + e.vcpsId,
                            title: e.title || "",
                            adschedule: {
                                adbreak: {
                                    offset: "pre",
                                    tag: "placeholder_preroll"
                                }
                            },
                            c3: "" + e.comScoreC3,
                            c4: "" + e.comScoreC4,
                            c6: "" + e.comScoreC6,
                            ns_st_ci: "" + e.vcpsId,
                            ns_st_pr: "" + (e.section ? e.section.tagNameFormattedFull : "*null"),
                            ns_st_ep: "" + e.title,
                            ns_st_ddt: "" + (null != e.datePublished ? (0, n.default)(e.datePublished).format("YYYY-MM-DD") : "*null"),
                            ns_st_tdt: "" + (null != e.datePublished ? (0, n.default)(e.datePublished).format("YYYY-MM-DD") : "*null"),
                            ns_st_st: "" + e.brand,
                            url: "" + e.url
                        }],
                        visualplaylist: !1,
                        advertising: t.advertising || !1,
                        duration: e.duration || 0,
                        fwassetid: i,
                        mediaid: e.vcpsId ? "cnbc_" + e.vcpsId.toString() : i,
                        key: t.key,
                        playbackRateControls: t.playbackRateControls || !1,
                        width: "100%",
                        aspectratio: "16:9",
                        displaytitle: null == t.showPlayerMetadata || t.showPlayerMetadata
                    };
                if (t.sharing) {
                    var s = {
                        sites: [{
                            label: "facebook",
                            src: function() {
                                r && window.open(o.facebook + encodeURIComponent(jwplayer().getPlaylistItem().url), "_blank")
                            }
                        }, {
                            label: "twitter",
                            src: function() {
                                r && window.open(o.twitter + encodeURIComponent(jwplayer().getPlaylistItem().url), "_blank")
                            }
                        }, {
                            label: "linkedIn",
                            src: function() {
                                r && window.open(o.linkedIn + encodeURIComponent(jwplayer().getPlaylistItem().url), "_blank")
                            }
                        }],
                        link: t.sharing.link,
                        code: t.sharing.code
                    };
                    l = a({}, l, {
                        sharing: s
                    })
                }
                return l
            }
        },
        2383: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = i(o(2047)),
                n = i(o(278)),
                r = i(o(706));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = {
                    advertising: {
                        freewheel: {
                            sectionid: "cnbc_xfinitycobrand_embed_vod"
                        }
                    }
                },
                s = {
                    advertising: {
                        freewheel: {
                            sectionid: "premium_no_ads_vod"
                        }
                    }
                };
            t.default = function(e, t, o, i) {
                var d = r.default.deviceDetectType(),
                    u = e.playerConfig,
                    p = (0, n.default)(u);
                if (i && i.brand_data && i.brand_data.app_access && i.brand_data.app_access.includes("PRO") && "buffett" !== e.brand) u = (0, a.default)(p, s);
                else if (!e.premium && "buffett" !== e.brand)
                    if (o) {
                        o.fwPlayerConfig, o.fwPlayerConfigWithXfinity;
                        var c = function(e, t) {
                            var o = {};
                            for (var a in e) t.indexOf(a) >= 0 || Object.prototype.hasOwnProperty.call(e, a) && (o[a] = e[a]);
                            return o
                        }(o, ["fwPlayerConfig", "fwPlayerConfigWithXfinity"]);
                        !t && o.fwPlayerConfig && (u = (0, a.default)(p, o.fwPlayerConfig)), t && o.fwPlayerConfigWithXfinity && (u = (0, a.default)(p, o.fwPlayerConfigWithXfinity)), u = (0, a.default)(u, c)
                    } else t && (u = (0, a.default)(p, l));
                if ((u = (0, n.default)(u)).advertising && u.advertising.freewheel && ("function" == typeof window.MediaSource || r.default.isBrowserSupportsHLS() || (u.advertising.freewheel.profileid = u.IE11Profile), ["mobile", "tablet"].includes(d))) {
                    var f = "tablet" === d ? "tab" : "hh";
                    u.advertising.freewheel.sectionid = u.advertising.freewheel.sectionid + "_" + f, "mobile" === d && (u.advertising.freewheel.sfid = u.mobileSFID)
                }
                return u
            }
        },
        2384: function(e, t, o) {
            "use strict";
            var a = i(o(5)),
                n = i(o(6)),
                r = "function" == typeof n.default && "symbol" == typeof a.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof n.default && e.constructor === n.default && e !== n.default.prototype ? "symbol" : typeof e
                };

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = f(o(5)),
                s = f(o(6)),
                d = "function" == typeof s.default && "symbol" === r(l.default) ? function(e) {
                    return void 0 === e ? "undefined" : r(e)
                } : function(e) {
                    return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : void 0 === e ? "undefined" : r(e)
                },
                u = o(2010),
                p = f(o(2385)),
                c = f(o(2386));

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = function(e) {
                var t = e.component,
                    o = e.player,
                    a = e.playerConfig,
                    n = e.cues;
                o.setup(a);
                var r = t.props.videoData && "buffett" === t.props.videoData.brand && "full_length" === t.props.videoData.subType && t.props.videoData.transcript;
                o.on("ready", function() {
                    null !== n && n.length > 0 && o.setCues(n), t.props.videoData && t.props.videoData.comScoreC2 && "undefined" != typeof ns_ && void 0 !== ns_.StreamingAnalytics && void 0 !== ns_.StreamingAnalytics.JWPlayer && ns_.StreamingAnalytics.JWPlayer(o, {
                        publisherId: t.props.videoData.comScoreC2,
                        labelmapping: 'c3=content.c3, c4=content.c4, c6=content.c6, ns_st_ci=content.ns_st_ci, ns_st_pu="CNBC", ns_st_pr=content.ns_st_pr, ns_st_ep=content.ns_st_ep, ns_st_ge="*null", ns_st_ia="0", ns_st_ddt=content.ns_st_ddt,ns_st_tdt=content.ns_st_tdt, ns_st_st=content.ns_st_st, ns_st_ce="0"'
                    }), t.buildCustomPlayerUi(a), (0, c.default)(), (0, p.default)(t)
                }), o.on("setupError", function(e) {
                    console.log("on player set up error: ", e)
                }), o.on("error", function(e) {
                    console.log("on player error: ", e)
                }), o.on("adError", function(e) {
                    console.error("on player ad error: ", e)
                }), o.on("buffer", t.eventHandlers.onBuffer), o.on("fullscreen", t.eventHandlers.onFullscreen), r ? (o.on("play", t.eventHandlers.onChapterPlay), o.on("complete", t.eventHandlers.onChapterComplete), o.on("pause", t.eventHandlers.onChapterPause), o.on("seeked", t.eventHandlers.onChapterSeeked), o.on("time", t.eventHandlers.onChapterTime), o.on("firstFrame", t.eventHandlers.onChapterFirstFrame)) : (o.on("beforePlay", t.eventHandlers.onBeforePlay), o.on("adPlay", t.eventHandlers.onAdPlay), o.on("adPause", t.eventHandlers.onAdPause), o.on("play", t.eventHandlers.onPlay), o.on("adComplete", t.eventHandlers.onAdComplete), o.on("complete", t.eventHandlers.onComplete), o.on("pause", t.eventHandlers.onPause), o.on("seek", t.eventHandlers.onSeek), o.on("seeked", t.eventHandlers.onSeeked), o.on("time", t.eventHandlers.onTime), o.on("firstFrame", t.eventHandlers.onFirstFrame)), "object" === ("undefined" == typeof newrelic ? "undefined" : d(newrelic)) && "object" === ("undefined" == typeof nrvideo ? "undefined" : d(nrvideo)) && nrvideo.Core.addTracker(new nrvideo.JwplayerTracker(o));
                var i = (0, u.retrieveQsKey)("start");
                null !== i && i && o.once("beforePlay", function() {
                    o.seek(Math.floor(i)), setTimeout(function() {
                        return o.seek(Math.floor(i))
                    }, 500)
                })
            }
        },
        2385: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = r(o(2007)),
                n = r(o(20));

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var i = function(e) {
                var t = document.createElement("textarea");
                t.value = e, t.setAttribute("readonly", ""), t.style.position = "absolute", t.style.left = "-9999px", document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t)
            };
            t.default = function(e) {
                var t = jwplayer("" + a.default.PLAYER_CONTAINER_ID),
                    o = t.getPlugin("sharing");
                void 0 !== o && (o.on("open", function() {
                    var t = {
                        pev2: "Video Control Rack",
                        trkNav: "video:share:" + e.props.videoData.vcpsId
                    };
                    n.default.trigger("videoShare", t)
                }), o.on("click", function(t) {
                    var o = {
                        pev2: "Share",
                        events: "event52",
                        eVar14: t.method + ":Share Published",
                        eVar15: "Video:Share Card",
                        prop57: "[pageName]",
                        prop55: "" + e.props.videoData.vcpsId
                    };
                    if ("link" === t.method) i(e.props.videoData.url);
                    else if ("embed" === t.method) {
                        i(e.props.videoData.playerConfig.sharing.code);
                        var a = {
                            pev2: "Video Control Rack",
                            trkNav: "video:embed:" + e.props.videoData.vcpsId
                        };
                        n.default.trigger("videoEmbedClick", a)
                    } else n.default.trigger("videoProviderSharing", o)
                })), t.on("fullscreen", function() {
                    var t = {
                        pev2: "Video Control Rack",
                        trkNav: "video:fullscreen:" + e.props.videoData.vcpsId
                    };
                    n.default.trigger("videoFullScreen", t)
                }), t.on("playbackRateChanged", function(t) {
                    var o = {
                        pev2: "Video Control Rack",
                        trkNav: "video:speed:" + t.playbackRate + ":" + e.props.videoData.vcpsId
                    };
                    n.default.trigger("videoPlaybackRateChanged", o)
                }), window.addEventListener("click", function(t) {
                    if (t.target.className.includes("jw-icon-cc")) {
                        var o = {
                            pev2: "Video Control Rack",
                            trkNav: "video:cc:" + e.props.videoData.vcpsId
                        };
                        n.default.trigger("videoClosedCaption", o)
                    } else if (t.target.className.includes("jw-submenu-captions")) {
                        var a = {
                            pev2: "Video Control Rack",
                            trkNav: "video:cc:" + e.props.videoData.vcpsId
                        };
                        n.default.trigger("videoClosedCaption", a)
                    } else if (t.target.className.includes("jw-icon-rewind")) {
                        var r = {
                            pev2: "Video Control Rack",
                            trkNav: "video:jumpback:" + e.props.videoData.vcpsId
                        };
                        n.default.trigger("videoJumpBack", r)
                    }
                    t.stopImmediatePropagation()
                })
            }
        },
        2386: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                var e = document.querySelector(".jwplayer .jw-controlbar"),
                    t = document.querySelector(".jwplayer .jw-slider-time");
                e && t && e.appendChild(t)
            }
        },
        2387: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = g(o(2388)),
                n = g(o(2390)),
                r = g(o(2391)),
                i = g(o(2392)),
                l = g(o(2393)),
                s = g(o(2394)),
                d = g(o(2395)),
                u = g(o(2396)),
                p = g(o(2397)),
                c = g(o(2399)),
                f = g(o(2400)),
                v = g(o(2401)),
                y = g(o(2402)),
                h = g(o(2403)),
                _ = g(o(2404)),
                m = g(o(2405)),
                I = g(o(2406)),
                b = g(o(2407)),
                w = g(o(2408));

            function g(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = function(e) {
                return {
                    onAdPlay: a.default.bind(e),
                    onAdPause: n.default.bind(e),
                    onAdComplete: u.default.bind(e),
                    onComplete: p.default.bind(e),
                    onPlay: i.default.bind(e),
                    onPause: r.default.bind(e),
                    onSeek: l.default.bind(e),
                    onSeeked: s.default.bind(e),
                    onTime: d.default.bind(e),
                    onBuffer: c.default.bind(e),
                    onBeforePlay: f.default.bind(e),
                    onChapterPlay: v.default.bind(e),
                    onChapterTime: y.default.bind(e),
                    onChapterPause: h.default.bind(e),
                    onChapterComplete: _.default.bind(e),
                    onChapterSeeked: m.default.bind(e),
                    onFullscreen: I.default.bind(e),
                    onFirstFrame: b.default.bind(e),
                    onChapterFirstFrame: w.default.bind(e)
                }
            }
        },
        2388: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = l(o(3)).default || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a])
                    }
                    return e
                },
                n = o(14),
                r = l(o(20)),
                i = l(o(2310));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = function(e) {
                console.warn("ad play e :: ", e), this.props.dispatch((0, n.setPlayerInfo)({
                    adPlayback: !0
                })), "paused" !== e.oldstate && r.default.trigger("videoAdStart", a({}, this.props.videoData, (0, i.default)(e, this.props), {
                    pev2: "VOD Clip Ad Start",
                    videoAction: "videovodclipadstart=true"
                }))
            }
        },
        2389: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getPlayerType = function() {
                var e = "On-Domain";
                if ("undefined" != typeof window) {
                    var t = document.referrer;
                    t && t.indexOf("cnbc") > -1 && (e = "On-Domain")
                }
                return e
            }, t.getVideoScreen = function(e) {
                return e ? "Full" : "Normal"
            }, t.getPlayerURL = function() {
                if ("undefined" != typeof window) return location.href;
                return ""
            }
        },
        2390: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = l(o(3)).default || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a])
                    }
                    return e
                },
                n = o(14),
                r = l(o(20)),
                i = l(o(2310));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = function(e) {
                this.props.dispatch((0, n.setPlayerInfo)({
                    playback: !1
                })), console.warn("ad pause e :: ", e), console.warn("e.ad pause :: ", e), r.default.trigger("videoAdPause", a({}, this.props.videoData, (0, i.default)(e, this.props), {
                    pev2: "VOD Clip Ad Pause",
                    videoAction: "videovodclipadpause=true"
                }))
            }
        },
        2391: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = l(o(3)).default || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a])
                    }
                    return e
                },
                n = o(14),
                r = l(o(20)),
                i = l(o(2310));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = function(e) {
                var t = {
                    pev2: "VOD Clip Pause",
                    videoAction: "videovodclippause=true"
                };
                console.warn("e pause :: ", e), r.default.trigger("videoPauseExternal", a({}, this.props.videoData, (0, i.default)(e, this.props), t)), !this.props.videoEventsInfo.seekedByUserPause && ("interaction" === e.pauseReason || "external" === e.pauseReason && jwplayer().getEnvironment().Browser.firefox) ? (this.props.dispatch((0, n.setPlayerInfo)({
                    playback: !1
                })), this.props.dispatch((0, n.setEventsInfo)({
                    playback: !1
                })), r.default.trigger("videoPause", a({}, this.props.videoData, (0, i.default)(e, this.props), t))) : this.props.dispatch((0, n.setEventsInfo)({
                    seekedByUserPause: !1
                }))
            }
        },
        2392: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = l(o(3)).default || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a])
                    }
                    return e
                },
                n = o(14),
                r = l(o(20)),
                i = l(o(2310));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = function(e) {
                this.props.dispatch((0, n.setPlayerInfo)({
                    adPlayback: !1
                })), "interaction" !== e.playReason || this.props.videoEventsInfo.seekedByUser || r.default.trigger("videoResume", a({}, this.props.videoData, (0, i.default)(e, this.props), {
                    pev2: "VOD Clip Resume",
                    videoAction: "videovodclipresume=true"
                }));
                this.props.dispatch((0, n.setEventsInfo)({
                    seekedByUser: !1
                }))
            }
        },
        2393: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = o(14);
            t.default = function(e) {
                console.warn("e seek :: ", e), this.props.dispatch((0, a.setPlayerInfo)({
                    seek: !0
                })), this.props.dispatch((0, a.setEventsInfo)({
                    seekedByUser: !0
                })), this.props.dispatch((0, a.setEventsInfo)({
                    seekedByUserPause: !0
                }))
            }
        },
        2394: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = l(o(3)).default || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a])
                    }
                    return e
                },
                n = o(14),
                r = l(o(20)),
                i = l(o(2310));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = function(e) {
                this.props.dispatch((0, n.setPlayerInfo)({
                    seek: !1
                })), this.props.dispatch((0, n.setEventsInfo)({
                    seekedByUser: !0
                })), this.props.dispatch((0, n.setEventsInfo)({
                    seekedByUserPause: !0
                })), console.warn("e seeked :: ", e), console.warn("e.seeked :: ", e), r.default.trigger("videoSeek", a({}, this.props.videoData, (0, i.default)(e, this.props), {
                    pev2: "VOD Clip Rewind/Scrub",
                    videoAction: "videovodclipscrub=true"
                }))
            }
        },
        2395: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = d(o(3)).default || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a])
                    }
                    return e
                },
                n = o(14),
                r = d(o(20)),
                i = d(o(2310)),
                l = d(o(2313)),
                s = d(o(2017));

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function u(e, t) {
                return e >= t && e <= t + 2
            }
            t.default = function(e) {
                var t, o, d, p = e.position / e.duration;
                t = 100 * p, o = this.props, d = {}, u(t, 25) ? o.videoEventsInfo.is25 || (o.dispatch((0, n.setEventsInfo)({
                    is25: !0
                })), d = {
                    pev2: "VOD Clip 25",
                    videoAction: "videovodclip25=true"
                }, r.default.trigger("videoClip25", a({}, o.videoData, (0, i.default)({}, o), d))) : o.videoEventsInfo.is25 && o.dispatch((0, n.setEventsInfo)({
                    is25: !1
                })), u(t, 50) ? o.videoEventsInfo.is50 || (o.dispatch((0, n.setEventsInfo)({
                    is50: !0
                })), d = {
                    pev2: "VOD Clip 50",
                    videoAction: "videovodclip50=true"
                }, r.default.trigger("videoClip50", a({}, o.videoData, (0, i.default)({}, o), d))) : o.videoEventsInfo.is50 && o.dispatch((0, n.setEventsInfo)({
                    is50: !1
                })), u(t, 75) ? o.videoEventsInfo.is75 || (o.dispatch((0, n.setEventsInfo)({
                    is75: !0
                })), d = {
                    pev2: "VOD Clip 75",
                    videoAction: "videovodclip75=true"
                }, r.default.trigger("videoClip75", a({}, o.videoData, (0, i.default)({}, o), d))) : o.videoEventsInfo.is75 && o.dispatch((0, n.setEventsInfo)({
                    is75: !1
                }));
                var c = l.default.getCustomControls(window.jwplayer(), s.default).progressBar;
                c && (c.style.flex = p)
            }
        },
        2396: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = l(o(3)).default || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a])
                    }
                    return e
                },
                n = o(14),
                r = l(o(20)),
                i = l(o(2310));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = function(e) {
                this.props.dispatch((0, n.setEventsInfo)({
                    adComplete: !0
                })), console.warn("ad complete e :: ", e), console.warn("e.ad complete :: ", e), r.default.trigger("videoAdComplete", a({}, this.props.videoData, (0, i.default)(e, this.props), {
                    pev2: "VOD Clip Ad Complete",
                    videoAction: "videovodclipadend=true"
                }))
            }
        },
        2397: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = s(o(3)).default || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a])
                    }
                    return e
                },
                n = o(14),
                r = s(o(2310)),
                i = s(o(20)),
                l = s(o(2398));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = function(e) {
                var t = this;
                jwplayer().getFullscreen() && (0, l.default)(), console.warn("e complete :: ", e);
                var o = n.playerLayoutActions.COMPLETE_PLAYBACK;
                this.props.dispatch((0, n.getVideoDataWithPosition)({
                    playStatus: n.recommendationWorkflowActions.RELOAD_RECOMMENDATION
                })), this.props.dispatch((0, n.setVideoEndCardState)({
                    fetchVideoRecommendation: !0
                })), this.props.dispatch((0, n.setPlaceholderState)({
                    id: this.props.videoData.id,
                    watched: !0
                })), this.props.dispatch((0, n.setPlayerInfo)({
                    playback: !1,
                    trigger: o
                })), this.props.dispatch((0, n.setEventsInfo)({
                    playback: !1
                })), i.default.trigger("videoComplete", a({}, this.props.videoData, (0, r.default)({}, this.props), {
                    pev2: "VOD Clip Complete",
                    videoAction: "videovodclipend=true"
                })), jwplayer().getFullscreen() ? window.setTimeout(function() {
                    t.props.dispatch((0, n.continuousPlayState)({
                        continuousToNextVideo: !0
                    }))
                }, 200) : this.props.dispatch((0, n.continuousPlayState)({
                    continuousToNextVideo: !0
                })), window.startPlayTime = (new Date).getTime()
            }
        },
        2398: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                var e = document.getElementById("jw-container");
                if (e) {
                    var t = e.getElementsByTagName("video")[0];
                    t.exitFullscreen ? t.exitFullscreen() : t.msExitFullscreen ? t.msExitFullscreen() : t.mozCancelFullScreen ? t.mozCancelFullScreen() : t.webkitExitFullscreen ? t.webkitExitFullScreen() : document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitCancelFullScreen()
                }
            }
        },
        2399: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = o(14);
            t.default = function(e) {
                var t = a.playerLayoutActions.START_PLAYBACK;
                this.props.dispatch((0, a.setPlayerInfo)({
                    playback: !0,
                    trigger: t
                })), console.warn("e buffer :: ", e)
            }
        },
        2400: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = o(14);
            t.default = function(e) {
                console.warn("on before Play :: ", e);
                try {
                    "undefined" != typeof window && "function" == typeof window.jwplayer && ((document.querySelector("[class^='JWPlayer8-title']") || document.querySelector("[class^='JWPlayer8-styles-title']")).innerHTML = "" + this.props.videoData.title)
                } catch (e) {
                    console.error("On before Play Exception", e)
                }
                var t = a.playerLayoutActions.START_PLAYBACK;
                if (this.props.dispatch((0, a.setEventsInfo)({
                        is25: !1,
                        is50: !1,
                        is75: !1
                    })), this.props.dispatch((0, a.setPlayerInfo)({
                        playback: !0,
                        seek: !1,
                        trigger: t
                    })), this.props.dispatch((0, a.getVideoDataWithPosition)({
                        playStatus: a.recommendationWorkflowActions.RESET_RECOMMENDATION
                    })), this.props.dispatch((0, a.setPlaceholderState)({
                        placeholderState: a.placeholderStates.PLAYBACK
                    })), window.endPlayTime = (new Date).getTime(), window.startPlayTime) {
                    var o = (window.endPlayTime - window.startPlayTime) / 1e3;
                    console.log("time to first frame after continuous playback: ", o)
                }
            }
        },
        2401: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = d(o(3)).default || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a])
                    }
                    return e
                },
                n = o(14),
                r = d(o(20)),
                i = d(o(2310)),
                l = d(o(2312)),
                s = o(379);

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = function(e) {
                var t = n.playerLayoutActions.START_PLAYBACK;
                this.props.dispatch((0, n.setPlayerInfo)({
                    playback: !0,
                    seek: !1,
                    trigger: t
                }));
                var o = this.props.placeholderInfo.sourcePlaceholderId,
                    d = (0, s.getPositioningElement)(o, this.props.placeholderInfo.inlineVideoComponent),
                    u = d.getBoundingClientRect(),
                    p = Math.floor(u.top || u.y || 0) + window.pageYOffset,
                    c = Math.floor(u.left || u.x || 0) + window.pageXOffset,
                    f = d.scrollWidth > u.width ? d.scrollWidth : u.width + 1,
                    v = d.scrollHeight > u.height ? d.scrollHeight : u.height + 1;
                this.props.dispatch((0, n.getVideoDataWithPosition)({
                    top: p,
                    left: c,
                    width: f,
                    height: v
                })), this.props.videoEventsInfo.paused && (this.props.dispatch((0, n.setEventsInfo)({
                    paused: !1
                })), l.default.fireIntervalOmnitureCall(e, this.props)), "interaction" !== e.playReason || this.props.videoEventsInfo.seekedByUser || r.default.trigger("videoResume", a({}, this.props.videoData, (0, i.default)(e, this.props), {
                    pev2: "VOD Clip Resume",
                    videoAction: "videovodclipresume=true"
                }))
            }
        },
        2402: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = o(14),
                n = i(o(2313)),
                r = i(o(2017));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = function(e) {
                this.props && this.props.videoData && this.props.videoData.transcript && this.props.dispatch((0, a.setTranscriptInfo)({
                    position: e.position
                }));
                var t = e.position / e.duration,
                    o = n.default.getCustomControls(window.jwplayer(), r.default).progressBar;
                o && (o.style.flex = t)
            }
        },
        2403: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = s(o(3)).default || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a])
                    }
                    return e
                },
                n = o(14),
                r = s(o(20)),
                i = s(o(2310)),
                l = s(o(2312));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = function(e) {
                this.props.dispatch((0, n.setEventsInfo)({
                    paused: !0
                })), console.warn("on paused chapter :: ", e), !this.props.videoEventsInfo.seekedByUserPause && ("interaction" === e.pauseReason || "external" === e.pauseReason && jwplayer().getEnvironment().Browser.firefox) ? (l.default.clearOmnitureTimers(), this.props.dispatch((0, n.setPlayerInfo)({
                    playback: !1
                })), this.props.dispatch((0, n.setEventsInfo)({
                    playback: !1
                })), r.default.trigger("videoPause", a({}, this.props.videoData, (0, i.default)(e, this.props), {
                    pev2: "VOD Chapter Pause",
                    videoAction: "videochapterpause=true"
                }))) : (l.default.clearOmnitureTimers(), this.props.dispatch((0, n.setEventsInfo)({
                    seekedByUserPause: !1
                })))
            }
        },
        2404: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = s(o(3)).default || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a])
                    }
                    return e
                },
                n = o(14),
                r = s(o(2312)),
                i = s(o(20)),
                l = s(o(2310));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = function(e) {
                var t = n.playerLayoutActions.COMPLETE_PLAYBACK;
                r.default.clearOmnitureTimers(), this.props.dispatch((0, n.setPlaceholderState)({
                    placeholderState: n.placeholderStates.END_CARD,
                    id: this.props.videoData.id,
                    watched: !0
                })), this.props.dispatch((0, n.setPlayerInfo)({
                    playback: !1,
                    trigger: t
                })), this.props.dispatch((0, n.setEventsInfo)({
                    playback: !1
                })), console.warn("e complete chapter :: ", e), console.warn("on completed chapter :: ", e), i.default.trigger("videoComplete", a({}, this.props.videoData, (0, l.default)({}, this.props), {
                    pev2: "VOD Chapter Complete",
                    videoAction: "tve.videochapterend=true"
                }))
            }
        },
        2405: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = l(o(3)).default || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a])
                    }
                    return e
                },
                n = o(14),
                r = l(o(20)),
                i = l(o(2310));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = function(e) {
                this.props.dispatch((0, n.setPlayerInfo)({
                    seek: !1
                })), this.props.dispatch((0, n.setEventsInfo)({
                    seekedByUser: !0
                })), this.props.dispatch((0, n.setEventsInfo)({
                    seekedByUserPause: !0
                })), console.warn("e seeked chapter :: ", e), console.warn("on seeekeed chapter :: ", e), r.default.trigger("videoSeek", a({}, this.props.videoData, (0, i.default)(e, this.props), {
                    pev2: "VOD Chapter Scrub",
                    videoAction: "videochapterscrub=true"
                }))
            }
        },
        2406: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = o(14);
            t.default = function(e) {
                var t = e.fullscreen;
                this.props.dispatch((0, a.setPlayerInfo)({
                    suspendScrollHandling: t
                })), console.warn("full screen :: ", e)
            }
        },
        2407: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = l(o(3)).default || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a])
                    }
                    return e
                },
                n = o(14),
                r = l(o(20)),
                i = l(o(2310));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = function(e) {
                this.props.dispatch((0, n.setEventsInfo)({
                    seekedByUserPause: !1
                })), r.default.trigger("videoStart", a({}, this.props.videoData, (0, i.default)(e, this.props), {
                    pev2: "VOD Clip Start",
                    videoAction: "videovodclipstart=true"
                })), console.warn("*** On First Frame:: ", e)
            }
        },
        2408: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = s(o(3)).default || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a])
                    }
                    return e
                },
                n = o(14),
                r = s(o(20)),
                i = s(o(2310)),
                l = s(o(2312));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = function(e) {
                this.props.videoEventsInfo.seekedByUser ? this.props.dispatch((0, n.setEventsInfo)({
                    seekedByUser: !1
                })) : (this.props.dispatch((0, n.setEventsInfo)({
                    seekedByUserPause: !1
                })), l.default.resetCounter(), l.default.fireIntervalOmnitureCall(e, this.props), r.default.trigger("videoStart", a({}, this.props.videoData, (0, i.default)(e, this.props), {
                    pev2: "VOD Chapter Start Overall",
                    videoAction: "videochapterstartoverall=true"
                })));
                console.warn("*** On First Frame:: ", e)
            }
        },
        2409: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a, n = o(2410),
                r = (a = n) && a.__esModule ? a : {
                    default: a
                };
            t.default = function(e, t, o) {
                return "JW" === e && (0, r.default)(t, o)
            }
        },
        2410: function(e, t, o) {
            "use strict";
            var a = i(o(5)),
                n = i(o(6)),
                r = "function" == typeof n.default && "symbol" == typeof a.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof n.default && e.constructor === n.default && e !== n.default.prototype ? "symbol" : typeof e
                };

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = u(o(5)),
                s = u(o(6)),
                d = "function" == typeof s.default && "symbol" === r(l.default) ? function(e) {
                    return void 0 === e ? "undefined" : r(e)
                } : function(e) {
                    return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : void 0 === e ? "undefined" : r(e)
                };

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = function(e, t) {
                return !("undefined" == typeof window || !window.jwplayer || "undefined" == typeof window || "object" !== d(window.jwplayer()) || "function" != typeof window.jwplayer().resize || (window.jwplayer().resize(e, t), 0))
            }
        },
        761: function(e, t, o) {
            "use strict";
            var a = i(o(5)),
                n = i(o(6)),
                r = "function" == typeof n.default && "symbol" == typeof a.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof n.default && e.constructor === n.default && e !== n.default.prototype ? "symbol" : typeof e
                };

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = b(o(2)),
                s = b(o(7)),
                d = b(o(8)),
                u = b(o(9)),
                p = function() {
                    function e(e, t) {
                        for (var o = 0; o < t.length; o++) {
                            var a = t[o];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), (0, l.default)(e, a.key, a)
                        }
                    }
                    return function(t, o, a) {
                        return o && e(t.prototype, o), a && e(t, a), t
                    }
                }(),
                c = b(o(1)),
                f = b(o(0)),
                v = b(o(2118)),
                y = b(o(2119));
            o(2120);
            var h = o(754),
                _ = b(o(20)),
                m = b(o(37)),
                I = b(o(2378));

            function b(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function w(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== (void 0 === t ? "undefined" : r(t)) && "function" != typeof t ? e : t
            }
            var g = o(387);
            y.default.polyfill();
            var C = function(e) {
                function t() {
                    var e, o, a;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    return o = a = w(this, (e = t.__proto__ || (0, u.default)(t)).call.apply(e, [this].concat(r))), a.state = {
                        clicking: !0
                    }, a.handleClick = function() {
                        a.state.clicking || a.setState({
                            clicking: !0
                        })
                    }, a.handleKeyup = function(e) {
                        "Tab" === e.key && a.state.clicking && a.setState({
                            clicking: !1
                        })
                    }, w(a, o)
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : r(t)));
                    e.prototype = (0, d.default)(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (s.default ? (0, s.default)(e, t) : e.__proto__ = t)
                }(t, c.default.Component), p(t, [{
                    key: "componentDidMount",
                    value: function() {
                        _.default.monitorScroll(), _.default.monitorResize(), _.default.monitorBodyResize(), _.default.monitorImagesLoad(), _.default.monitorClick(), _.default.monitorKeyup(), _.default.monitorRoute(), m.default.monitorBreakpoints(), (0, v.default)().listen(), _.default.on("click", this.handleClick.bind(this), "none"), _.default.on("keyup", this.handleKeyup.bind(this), "none")
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        _.default.remove("click", this.handleClick), _.default.remove("keyup", this.handleKeyup)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return c.default.createElement("div", {
                            className: this.state.clicking ? g.containerClick : g.container
                        }, (0, h.renderRoutes)(this.props.route.routes), c.default.createElement(I.default, null))
                    }
                }]), t
            }();
            C.propTypes = {
                route: f.default.object.isRequired
            }, t.default = C
        }
    }
]);